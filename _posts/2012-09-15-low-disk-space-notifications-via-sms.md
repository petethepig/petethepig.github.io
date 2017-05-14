---
layout: post
title:  "Low disk space notifications via SMS"
date:   2012-09-15 17:35
tags: 
- programming
- ruby
- sms
---

> This article is from 2012. If I were you I would look at other solutions.

Yesterday I've noticed that my server was running out of space. Turned out, nginx log wasn't rotating, so it filled the whole drive. Today, I started my day figuring out, what kind of precautions i can take to eliminate such things. The most obvious way for me is sending a SMS message to my phone every time the available disk space running low. So I found this website, [sms.ru](http://sms.ru) – they provide very simple API and it is free of charge, if you 1) send messages only to yourself, 2) send not more than 60 messages per day.

Take a look at the code from this [gist](https://gist.github.com/3727908). Easy, right? 
And actually, you can use it in any other way – monitor RAM for example.

According to [the website](http://sms.ru/?panel=price) you can send messages to Russia, the US, Abkhazia, Armeniya, Belarus, Kazakhstan, Kyrgyzstan, China, Thailand, Ukraine. Unfortunately, the whole site is in russian, but I am going to help you here with a simple instruction.

* Go to [Sign Up page](http://sms.ru/?panel=register) 
* [Fill out the forms](http://g.dfilimonov.com/ecae0744.png)
* Go to [Sign In page](http://sms.ru/?panel=login), enter your phone number and password.
* Open [this page](http://sms.ru/?panel=api&subpanel=method&show=sms/send) and look for [your api_id](http://g.dfilimonov.com/1cfad945.png) 
* This is it, now you can use it with the script

Please, let me know if you are having any troubles with the instruction, or if it doesn't work for you.
