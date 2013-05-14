---
layout: post
title:  "Emoji 4 Rails"
date:   2012-09-27 15:36
tags: 
- programming
- ruby
- rails
---

So, I made a gem that adds Emoji support to Rails apps — [GitHub page](https://github.com/petethepig/emoji4rails).

It's so damn simple:
{% highlight ruby %}
render_emoji ( 'Teddy :bеar:', { :style => 'width:20px;height:auto;' } )
#Teddy <img src='/assets/emojis/bear.png' style='width:20px;height:auto;' /> 
{% endhighlight %}

#####Credits
I borrowed the images from this [emoji-cheat-sheet](http://www.emoji-cheat-sheet.com/) website.

