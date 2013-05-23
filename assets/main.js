function getImageSize(img) {
    var oWidth = img.width();
    var oHeight = img.height();

    img.css('width', 'auto');
    img.css('height', 'auto');

    var rVal = {};
    rVal.width = img.width();
    rVal.height = img.height();


    img.css('width', oWidth);
    img.css('height', oHeight);

    return rVal;
}

var Modal = function(){

  var $content = $("#modal-content");
  var $panel = $("#modal-panel");
  var $bg = $("#modal-background");
  var $bg_panel = $("#modal-background,#modal-panel");
  var $close_btn = $("#modal-close-btn");
  var _image = null;
  var _window = null;

  this.resizeHandler = function(){
    _window = {
      w: $(window).width() - 80,
      h: $(window).height() - 80
    };
    if(_image){
      var k;
      if(_image.w/_image.h > _window.w/_window.h){
        k = _image.w/_window.w;
      }else{
        k = _image.h/_window.h;
      }

      k = Math.min(1, 1/k);
      console.log(k);

      $panel.css({
        width:  _image.w*k,
        height: _image.h*k,
        left:   (_window.w - _image.w*k)/2 + 40,
        top:    (_window.h - _image.h*k)/2 + 40
      });

    }
  };


  this.show = function(img){
    _image = {
      img: img,
      w:   img.width,
      h:   img.height
    }
    console.log(_window.w/_image.w, _image.w, _window.w);
    if(_window.w/_image.w < 0.5 || _window.h/_image.h < 0.5){
      window.open($(img).attr('src'), "_blank");
    }else{
      $content.append(img);
      $bg_panel.show();
      $("body").css("overflow","hidden");
      setTimeout(function(){
        $bg_panel.addClass("fade-in");
      },50);
      this.resizeHandler();
    }
  };

  this.hide = function(){
    $bg_panel.removeClass("fade-in");
    setTimeout(function(){
      $bg_panel.hide();
      $(_image.img).remove();
      $("body").css("overflow","auto");
    },500);
  };

  $bg.click(this.hide);
  $close_btn.click(this.hide);
  $(window).bind("resize",this.resizeHandler);
  this.resizeHandler();

};

$(document).ready(function(){
  modal = new Modal();

  $("a").each(function(){
    var href = $(this).attr("href");
    email = href.replace(/^\[([a-z0-9]+)-email\]$/,"$1@dfilimonov.com");
    if(email != href){
      $(this).attr("href","mailto:"+email).text(email);
    }
  });

  $("img").each(function(){
    var src = $(this).attr("src");
    var that = this;
    $("<img src='"+src+"' />").bind("load", function(){
      var img = this;
      if(img.width > that.width || img.height > that.height){
        $(that).wrap("<div class='img-wrapper'></div>").click(function(){
          modal.show(img);
        });
      }
    });
  });
});