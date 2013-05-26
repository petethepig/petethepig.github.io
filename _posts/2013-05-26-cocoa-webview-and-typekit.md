---
layout: post
title:  "Cocoa WebView and Typekit fonts"
date:   2013-05-26 12:00
tags: 
- programming
- cocoa
---

So I ran into this problem with the Cocoa WebView and Typekit.
Fonts look awesome when I open the web-page in Safari or Chrome or anything else, but they don't work in the WebView component.

![](https://my-thunderapp-bucket.s3.amazonaws.com/YJwPaDs_U60/Screen%20Shot%202013-05-26%20at%203.27.34%20PM.png)

I tried to use the web inspector and debug this whole thing, so I knew that:
1. The Referrer header was correct and the WebView was able to download the Typekit script (http://use.typekit.net/01234567.js)
2. But for some reason the script didn't download anything else

I asked the Typekit support if this was legal to use it this way, and surely, the answer was yes. Also, the guy told me to check the user-agent, and he was right. 

Notice the difference between these two:

{% highlight ruby  %}
#WebView:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.14 (KHTML, like Gecko)

#Safari:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.14 (KHTML, like Gecko) Version/6.0.1 Safari/536.26.14
{% endhighlight %}

Safari tells a little bit more about itself, so I tried adding "Safari" to the WebView's user-agent:

{% highlight objc  %}
[webViewInstance setApplicationNameForUserAgent: @"Safari"];
{% endhighlight %}

So now it looks like this:

{% highlight ruby  %}
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.14 (KHTML, like Gecko) Safari
{% endhighlight %}

And the fonts are finally back:

![](https://my-thunderapp-bucket.s3.amazonaws.com/yvfcxs6r_jk/Screen%20Shot%202013-05-26%20at%203.27.53%20PM.png)
