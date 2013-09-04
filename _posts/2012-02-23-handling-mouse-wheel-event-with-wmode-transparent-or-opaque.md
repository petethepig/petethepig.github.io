---
layout: post
title:  "Handling Mouse Wheel Event with wmode = \"transparent\" or \"opaque\"!"
date:   2012-02-23 17:24:13
tags: 
- programming
- as3
---

So, the problem is that flash movie embedded with wmode set to "transparent" or "opaque" do not handle mouse wheel event.

The solution I want to show you is based on JS <-> Flash communication. You can read more about it [here](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html). In fact, all it does is handling a mousewheel event in JS and passing it to the flash movie.

It is not short but it works well in all popular browsers and fully simulate original flash event.
Thanks to a guy from stackoverflow, I borrowed a good deal of the code from his answer: [http://stackoverflow.com/questions/5485187/mousewheel-in-chrome-y-firefox](http://stackoverflow.com/questions/5485187/mousewheel-in-chrome-y-firefox)


JS Part:

{% highlight javascript %}
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', handleWheel,
            false);
}
window.onmousewheel = document.onmousewheel = handleWheel;

function handleWheel(event) {
    if (!event) {
        event = window.event;
    }
    var app = document.getElementById("swfobj"); // Do not forget to change the ID
    var edelta = (navigator.userAgent.indexOf('Firefox') != -1) ? -event.detail
            : event.wheelDelta / 40;
    var o = {
        x : event.screenX,
        y : event.screenY,
        delta : edelta,
        ctrlKey : event.ctrlKey,
        altKey : event.altKey,
        shiftKey : event.shiftKey
    };
    app.handleWheel(o);
}
{% endhighlight %}


AS3. Imports:

{% highlight actionscript %}
import flash.display.*;
import flash.events.MouseEvent;
import flash.external.ExternalInterface;
import flash.geom.Point;
{% endhighlight %}

AS3. Add this code to your documentClass constructor:

{% highlight actionscript %}
ExternalInterface.addCallback("handleWheel", function(event:Object){
    var obj : InteractiveObject = null;
    var mousePoint : Point = new Point(stage.mouseX, stage.mouseY);
    var objects : Array = stage.getObjectsUnderPoint(mousePoint);

    for (var i : int = objects.length - 1; i >= 0; i--) {
        if (objects[i] is InteractiveObject) {
            obj = objects[i] as InteractiveObject;
            break;
        }
        else {
            if (objects[i] is Shape && (objects[i] as Shape).parent) {
                obj = (objects[i] as Shape).parent;
                break;
            }
        }
    }

    if (obj) {
        var mEvent : MouseEvent = new MouseEvent(MouseEvent.MOUSE_WHEEL, true, false,
            mousePoint.x, mousePoint.y, obj,
            event.ctrlKey, event.altKey, event.shiftKey,
            false, Number(event.delta));
        obj.dispatchEvent(mEvent);
    }
});
{% endhighlight %}