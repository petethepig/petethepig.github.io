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

[Mighty](https://www.mightyapp.com/) made a big splash recently with their [HN launch](https://news.ycombinator.com/item?id=26957215).

Most commentators seem to be focusing on CPU / RAM savings as the pros and input latency / pricing as the cons. I find Mighty to be interesting for a different reason.

I think *Mighty might work because of the effect of latency on networking round trips*.

Most modern web based systems talk a lot and exchange messages based on the information they received from prior communications. Examples of this are:
* TCP + TLS handshakes
* websites loading stylesheets and scripts after the main document loads

&nbsp;

![latency-close-vs-far](/assets/mighty-3.png)
<center>
<i>The effects of latency increase as you move users and servers further apart.</i>
</center>

&nbsp;

Latency in and of itself is not a bad thing. *Latency + round trips is what's slowing everything down.*

Streaming technology is free from these problems. There's no round trips — streaming server just sends a video stream to the user. If you put Mighty streaming servers close to popular web services you massively decrease the amount of latency introduced by the round trips.

&nbsp;

![latency-close-vs-far](/assets/mighty-4.png)
<center>
<i>In this example the resulting latency is 90ms vs 360ms for the "standard" setup.<br> And that's only with 3 round trips</i>
</center>


---


I could see a future in which Mighty becomes a client for a network of Mighty-enabled websites where instead of an HTTPS load balancer you put a video-streaming (Mighty?) server in front of your backend. 

