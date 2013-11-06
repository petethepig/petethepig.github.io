---
layout: default
title: Terminal in Chrome Devtools
date: 2013-09-12 17:35
no_header: true
tags: 
- programming
---

## Terminal in Chrome Devtools
---


<div class='gif-wrapper' style="width: 708px; height: 537px; margin: 0 auto; background:url(/assets/images/browser-background.png) no-repeat; position: relative;">
  <img class='gif' style="width: 606px; height: 434px; margin: 0; position: absolute; top: 29px; left: 50px; border-radius: 0 0 2px 2px; overflow:hidden;" src="/assets/images/cat-demo.gif" />
</div>
<!--
### Important Update!

If you're on Mac, you can now use this thing *without Node.js backend*. It connects right to your system's terminal and it's awesome! If you're on some other unix-compatible system, please, [help me port it](https://github.com/petethepig/devtools-terminal/tree/master/native-src).

-->
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


<style>
  @import url(http://fonts.googleapis.com/css?family=Cabin+Condensed:500&amp;text=Fork%20me%20on%20GitHub);

body{
  overflow-x: hidden;
}

.ribbon{
  position: absolute; 
  top: 42px;
  width: 200px;
  padding: 1px 0;
  background: #000;
  color: #eee;

  -moz-box-shadow: 0 0 10px rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.5);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.ribbon.left{
  left: -42px;
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.ribbon.right{
  right: -42px;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ribbon a, 
.ribbon a:visited, 
.ribbon a:active, 
.ribbon a:hover{
  display: block;
  padding: 1px 0;
  height: 24px;
  line-height: 24px;

  color: inherit;  
  text-align: center;
  text-decoration: none;
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 16px;
  font-weight: 500;

  border: 1px solid rgba(255,255,255,0.3);

  -moz-text-shadow: 0 0 10px rgba(0,0,0,0.31);
  -webkit-text-shadow: 0 0 10px rgba(0,0,0,0.31);
  text-shadow: 0 0 10px rgba(0,0,0,0.31);
}

.ribbon.black{
  background: #000;
}

.ribbon.red{
  background: #c00;
}

.ribbon.blue{
  background: #09e;
}

.ribbon.green{
  background: #0a0;
}

.ribbon.orange{
  background: #d80;
}

.ribbon.purple{
  background: #c0c;
}

.ribbon.grey{
  background: #888;
}

.ribbon.white{
  background: #eee;
  color: black;
}
.ribbon.white a{
  border: 2px dotted rgba(100,100,100,0.2);
}


@media (max-width: 910.55556px ){
  .ribbon{
    display: none;
  }

  /* dirty hack for mobile phones */
  .gif-wrapper{
    background: transparent !important;
    width: auto !important;
    height: auto !important;
  }
  .gif{
    width: 90% !important;
    height: auto !important;
    position: static !important;
    margin: 0 auto !important;
    max-width: 608px !important;
  }
}

</style>
<div class="ribbon right red">
  <a href="https://github.com/petethepig/devtools-terminal">Fork me on GitHub</a>
</div>