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

### How do I install it?

- Install this [Chrome extension](https://chrome.google.com/webstore/detail/leakmhneaibbdapdoienlkifomjceknl);
- Install Node.js;
- Install *devtools-terminal* package: `npm install -g devtools-terminal`.


### Okay, what's next?

There are two ways to connect to your system's terminal:
- Using Chrome's **Native Messaging API** — prefered way, but works only on *Mac OS X* and *Linux*;
- Using **Websocket** — allows you to connect to remote hosts, works on any platform.


#### Connecting via Native Messaging API

This is the prefered way, because the extension will automatically connect to your system's terminal everytime you open it.
To make it work you'll just need to tell Chrome where to find the *devtools-terminal* executable:

{% highlight bash %}
sudo devtools-terminal --install
{% endhighlight %}

Go back to Chrome, open Developer Tools *(Win/Linux:* ***F12***; *Mac:* ***Cmd + Opt + I*** *)*, click the "Terminal" tab and you'll see your terminal prompt.

#### Connecting via Websocket server

This is a bit clunky, because you'll have to manually start the server every time, but it allows you to connect to remote hosts, so it can be useful.

To make it work, start the websocket server:

{% highlight bash %}
devtools-terminal
{% endhighlight %}

Go back to Chrome, open Developer Tools *(Win/Linux:* ***F12***; *Mac:* ***Cmd + Opt + I*** *)*, click the "Terminal" tab, click the dots in the top right, click "Remote Connection" and connect to the server. 
The default login is `admin` and the default port is `8080`.

If you want something custom, I encourage you to check out the [server's source code](https://raw.github.com/petethepig/devtools-terminal/master/backend/bin/devtools-terminal), it is a very simple Node.js app.

### Possible Use Cases

* `tail -f log/development.log`
* `rails console`
* `psql`
* `git`
* and many more


### Thanks to

[Christopher Jeffrey](https://github.com/chjj) for his [term.js](https://github.com/chjj/term.js) library which is awesome.

### If you like it 
I encourage you to [follow me on Twitter](https://twitter.com/dmi3f) and [GitHub](https://github.com/petethepig)

<div class="github-ribbon">
  <a href="https://github.com/petethepig/devtools-terminal">Fork me on GitHub</a>
</div>