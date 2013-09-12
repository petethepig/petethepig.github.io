---
layout: default
title: Devtools Terminal
date: 2013-09-12 17:35
no_header: true
tags: 
- programming
---

## Devtools Terminal
---

<div style="width: 708px; height: 537px; margin: 0 auto; background:url(/assets/images/browser-background.png) no-repeat; position: relative;">
  <img style="width: 608px; height: 366px; margin: 0; position: absolute; top: 100px; left: 49px; border-radius: 0 0 2px 2px; overflow:hidden;" src="/assets/images/devtools-demo.gif" />
</div>


#### How do I install it?

Devtools Terminal consist of two parts: [Chrome extension](https://chrome.google.com/webstore/detail/leakmhneaibbdapdoienlkifomjceknl) and a server-side script, written in JS.<br/>
After you install Chrome extension, download this little [script](https://raw.github.com/petethepig/devtools-remote-terminal/master/backend/remote-terminal.js) and put it in a separate folder on your computer or remote server. 
Install [Node.js runtime](http://nodejs.org/) if you didn't do so already. 

Install the dependencies:
{% highlight bash %}
npm install -g socket.io pty.js optimist
{% endhighlight %}

And you're good to go.

#### What's next?

Start the server:

{% highlight bash %}
node remote-terminal.js
{% endhighlight %}

Open Developer Tools *(Win/Linux:* ***F12***; *Mac:* ***Cmd + Opt + I*** *)*, click the "Terminal" tab and connect to the server. 
The default port is `8080`.


#### Okay, how do I configure it?

Here is the default configuration:

{% highlight javascript %}
exports = {
  users: {
    admin: {
      password: "",
      cwd: process.cwd()
    }
  },
  port: 8080
};
{% endhighlight %}

This is a JavaScript file. You can pass your config file like this:

{% highlight bash %}
remote-terminal.js --config /path/to/config.js
{% endhighlight %}

If you want something custom, I encourage you to check out the [server's source code](https://raw.github.com/petethepig/devtools-remote-terminal/master/backend/remote-terminal.js), it is a very simple Node.js app.


#### Security

Passwords are not stored on the client, but they are transmitted in plain text. So if you want to use it in production environment, I strongly recommend you to use HTTPS.


#### Thanks to

[Christopher Jeffrey](https://github.com/chjj) for his [term.js](https://github.com/chjj/term.js) library which is awesome.



