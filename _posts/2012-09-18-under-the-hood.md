---
layout: post
title:  "Under The Hood"
date:   2012-09-18 01:32
tags: 
- programming
- ruby
- rails
---

> This post is outdated as I recently switched from Enki to Jekyll and GitHub Pages. 27 Aug, 2013

I've just finished making a new look for my blog. I am going to tell you a little bit about what's under the hood – about the blogging app I'm using, server configuration and all that.

> Preferences are for the masses. Any real coder knows the easiest and best way to customize something is by *hacking code*. <br> From Enki's website

I am using [Enki](http://www.enkiblog.com/). It is super smart, light and thin – perfect choice for a guy like me. The code is clear and easily customizable. I wish I could say this about Wordpress.

* I added [Markdown](http://daringfireball.net/projects/markdown/) and [Emoji](http://www.emoji-cheat-sheet.com/) support
* replaced native comments with [Disqus](http://disqus.com/)
* added links to previous and next posts
* put some design

First thing I did after installing Enki was converting ERB templates to HAML. HAML is like a drug – once you use it, and you can't use "simple" HTML no more.

I deploy using [Capistrano](https://github.com/capistrano/capistrano) – I haven't been using it until today, when I needed to deploy a new version of the blog. I got a thought that I need some kind of tool that will automate my usual routines, like pulling changes from the repo, compiling assets and restarting the app. I even started writing some code and remembered about Capistrano. And it was exactly what i need. Capistrano is easy and really saves time – you should definitely consider using it. Check [this guide](https://gist.github.com/2161449).

I use [nginx](http://wiki.nginx.org/Main) as a HTTP server. Nginx's config stays clear and manageable with my 7 virtual hosts and different PHP / Rails configurations – it is very important. Another reason in favor of nginx is memory usage – 50% of the money I pay for my cloud VM is memory, so I really care about it. 

My favorite linux distro is [Debian](http://en.wikipedia.org/wiki/Debian/). It is stable, popular and has lots of software in repositories.
