---
layout: post
title:  "Automating webfonts conversion process"
date:   2014-06-20 17:06
tags:
- programming
- fonts
---





Have you ever thouhgt of automating the process of converting regular fonts to webfonts? If the answer is yes, or you just curious now, go ahead, read this post.

I build a simple command line client for the popular Font Squirrel font-face generator. I called it Marmot, and here's what it can do:


{% highlight bash  %}
marmot Averia-Regular.ttf     # ls .   =>   webfontkit.zip
{% endhighlight %}


Marmot takes any font, uploads it to Font Squirrel and downloads a zip file with woff, ttf, eot and svg versions of the font. By default, Marmot uses default settings for the generator.
But usually, when you download a fontface kit from Font Squirrel there's a file called `generator-config.txt`, and the cool thing is, Marmot can read it:
{% highlight bash  %}
marmot  -c generator-config.txt  font.otf
{% endhighlight %}

### Wow, that's awesome, how do I install it?

Marmot is written in ruby, it's a simple gem:
{% highlight bash %}
gem install marmot
{% endhighlight %}

### How do I configure this thing?

You can either use config files I was telling you before:

{% highlight json %}
{
  "formats":["ttf", "woff", "svg"],
  "fallback":"none",
  "subset_custom_range":"E000-F8FF",
  "emsquare":"1000"
}
{% endhighlight %}

Or you can pass parameters as arguments:
{% highlight bash %}
marmot  --no-add-hyphens  --formats=ttf,woff  font.otf
{% endhighlight %}

There are lots of parameters, and their names are somewhat confusing. To make it a bit easier, here is what you can do: go to the [generator page](http://www.fontsquirrel.com/tools/webfont-generator), open the console and run this code:

{% highlight js %}
$("input[value='expert'], input[value='advanced']").click();
$("table input").each(function(){
  $(this).after($("<div style='color:red;'>"+$(this).attr("name")+" : "+$(this).attr("value")+"</div>"));
});
{% endhighlight %}

Here's what you gonna get:

![screenshot](https://s3-eu-west-1.amazonaws.com/eu.thdr.me/tClknv9wKwI/8451de8b72899d6e8a4e18366c3d1d5a.png)


### Okay, but why do need this?


In 99% of the cases, it's easier to just go to Font Squirrel convert you fonts and forget about it.


### Then why the hell did you make me read all of that?


I was making an icon font the other day (popular thing nowadays, huh?) and every time I added a new icon I had to convert the font. And I felt like automating this process is a good idea so I wrote Marmot.

Now I just run a script like this:

{% highlight bash %}
rm -r ./web/app/assets/fonts/icons
marmot -dc ./web/config/font-config.json ./design/icons-Regular.otf output.zip \
  && unzip output.zip -d ./web/app/assets/fonts/icons
{% endhighlight %}
and that's it. Automating at it's best.

So, I hope now you're convinced. Go star [Marmot on Github](https://github.com/petethepig/marmot).


Peace.



