---
layout: post
title:  "Why Mighty Might Work"
date: 2021-05-06 17:00
tags:
- programming
- hn
- hacker-news
- mighty
---

[Mighty](https://www.mightyapp.com/) made a big splash recently with their [HN launch](https://news.ycombinator.com/item?id=26957215). Some people like it, some don't, some even call the idea *crazy*.

Most commentators seem to be focusing on CPU / RAM savings as the pros and input latency / pricing as the cons. I find Mighty to be interesting for a completely different reason.

In my opinion, *Mighty might work because of the effect of latency on back-and-forth communications*.

Most modern web based systems chit chat a lot and exchange messages based on the information they received from prior communications. Examples of this are:
* TCP + TLS handshakes
* websites loading stylesheets and scripts after the main document loads

&nbsp;

![latency-close-vs-far](/assets/mighty-3.png)
<center>
<i>The effects of latency increase as you move users and servers further apart.</i>
</center>

&nbsp;

Latency in and of itself is not that bad. *Latency + back-and-forth communication is the plague of modern day web.*

Streaming technology is free from these problems. There's no back-and-forth — streaming server just sends a video stream to the user. If you put Mighty streaming servers close to popular web services you massively decrease the amount of latency introduced by the back-and-forth communications.

&nbsp;

![latency-close-vs-far](/assets/mighty-4.png)
<center>
<i>In this example the resulting latency is 90ms vs 360ms for the "standard" setup.<br> And that's only with 3 back-and-forths</i>
</center>


---


I could see a future in which Mightly becomes a client for a network of Mighty-enabled websites where instead of a HTTPS loadbalancer you put a video-streaming (Mighty?) server in front of your backend. How's that for a *crazy* idea?

