var SocialButtons = function($el) {
  return $el.find(".social-button").click(function(e) {
    var desc, features, height, left, outerHeight, outerWidth, screenX, screenY, top, url, width;
    e.preventDefault();
    url = document.location.href;
    width = 600;
    height = 270;
    desc = document.title;
    switch ($(this).data("social")) {
      case "twitter":
        url = "https://twitter.com/intent/tweet?status=" + desc + " " + url;
        break;
      case "facebook":
        url = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        break;
      case "google-plus":
        width = 500;
        height = 450;
        url = "https://plus.google.com/share?url=" + url;
    }
    screenX = (typeof window.screenX !== "undefined" ? window.screenX : window.screenLeft);
    screenY = (typeof window.screenY !== "undefined" ? window.screenY : window.screenTop);
    outerWidth = (typeof window.outerWidth !== "undefined" ? window.outerWidth : document.body.clientWidth);
    outerHeight = (typeof window.outerHeight !== "undefined" ? window.outerHeight : document.body.clientHeight - 22);
    left = parseInt(screenX + ((outerWidth - width) / 2), 10);
    top = parseInt(screenY + ((outerHeight - height) / 2.5), 10);
    features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
    if (!window.from_webview) {
      return window.open(url, "share-window", features);
    } else {
      return $(document.body).append($("<img style='top:-100px;left:-100px;width:50px;height:50px;position:absolute;' src='js-call:openPopup:" + url + "' />"));
    }
  });
};


var Modal = function(){

  var $content = $(".modal-content");
  var $panel = $(".modal-containter");
  var $bg = $(".modal-background");
  var $bg_panel = $(".modal-background, .modal-containter");
  var $close_btn = $(".modal-close-btn");
  var _image = null;
  var _window = null;

  function resizeHandler(){
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
    if(_window.w/_image.w < 0.5 || _window.h/_image.h < 0.5){
      window.open($(img).attr('src'), "_blank");
    }else{
      $content.append(img);
      $bg_panel.show();
      $("body").css("overflow","hidden");
      setTimeout(function(){
        $bg_panel.addClass("fade-in");
      },50);
      resizeHandler();
    }
  };

  this.hide = function(){
    $bg_panel.removeClass("fade-in");
    setTimeout(function(){
      $bg_panel.hide();
      $(_image.img).remove();
      $("body").css("overflow","auto");
    }, 500);
  };

  $bg_panel.click(this.hide);
  $close_btn.click(this.hide);
  $(window).bind("resize", resizeHandler);
  resizeHandler();

};

$(document).ready(function(){
  modal = new Modal();

  $("a").each(function(){
    var href = $(this).attr("href");
    email = href.replace(/^\[([a-z0-9]+)-email\]$/,"$1@dfilimonov.com");
    if(email != href){
      $(this).attr("href","mailto:"+email);
      if($(this).text()=="@"){
        $(this).text(email);
      }
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

  function updateShareButtons(){
    var show = $('.share-buttons').offset().top - $(window).scrollTop() - $(window).height() + $('.share-buttons').height() < 0;
    show && setTimeout(function(){
      $('.share-buttons').addClass('show');
    }, 2500);
  }

  $(window).resize(updateShareButtons).scroll(updateShareButtons).resize();

  SocialButtons($('.share-buttons'));

});


