---
layout: post
title: Terminal in Chrome Devtools
date: 2013-09-12 17:35
tags: 
- programming
---


<div class='gif-wrapper' style="width: 708px; height: 537px; margin: 0 auto; background:url(/assets/images/browser-background.png) no-repeat; position: relative;">
  <img class='gif' style="width: 606px; height: 434px; margin: 0; position: absolute; top: 29px; left: 50px; border-radius: 0 0 2px 2px; overflow:hidden;" src="/assets/images/cat-demo.gif" />
</div>

#### How do I install it?

*If you're on a Mac*, just download this [Chrome extension](https://chrome.google.com/webstore/detail/leakmhneaibbdapdoienlkifomjceknl). Install it, and you good to go.
<br>No need to read any further.

#### Oh, but I am not on a Mac

*If you're not on a Mac*, you can connect to your system's terminal via Node.js proxy. It can be localhost or some other remote server.

Install the app:
{% highlight bash %}
npm install -g devtools-terminal
{% endhighlight %}

Start the server:

{% highlight bash %}
devtools-terminal
{% endhighlight %}

Open Developer Tools *(Win/Linux:* ***F12***; *Mac:* ***Cmd + Opt + I*** *)*, click the "Terminal" tab and connect to the server. 
The default port is `8080`.


##### Okay, how do I configure it?

Here is the default configuration:

{% highlight javascript %}
exports.config = {
  users: {
    admin: {
      password: "",
      cwd: process.cwd() //working directory
    }
  },
  port: 8080
};
{% endhighlight %}

This is a JavaScript file. You can pass your config like this:

{% highlight bash %}
devtools-terminal --config /path/to/config.js 
{% endhighlight %}

If you want something custom, I encourage you to check out the [server's source code](https://raw.github.com/petethepig/devtools-terminal/master/backend/bin/devtools-terminal), it is a very simple Node.js app.


##### Security

Passwords are not stored on the client, but they are transmitted in plain text. So if you want to use it in production environment, I strongly recommend you to use HTTPS.

#### Possible Use Cases

* `tail -f log/development.log`
* `rails console`
* `psql`
* and many more


#### Thanks to

[Christopher Jeffrey](https://github.com/chjj) for his [term.js](https://github.com/chjj/term.js) library which is awesome.

#### If you like it 
I encourage you to [follow me on Twitter](https://twitter.com/dmi3f) and [GitHub](https://github.com/petethepig)

<div class="github-ribbon">
  <a href="https://github.com/petethepig/devtools-terminal">Fork me on GitHub</a>
</div>