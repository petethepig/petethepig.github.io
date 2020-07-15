---
layout: post
title:  "Everything is a Queueing System"
date: 2020-04-24 14:32
tags:
- programming
- distributed-systems
- queue
- queueing-system
---

This was originally posted as a [Twitter thread](https://twitter.com/dmi3f/status/1253798993890426881?s=20), hence the style.

![Schematic illustration of what a Queueing System looks like](https://pbs.twimg.com/media/EWZjZ1jUYAAjpem.jpg)

If you think about it, most components in a distributed system (e.g a popular website) can be modeled as queuing systems.

Each queueing system has some buffer / queue, then a bunch of servers / workers that actually do the work.

And all these systems interact with each other, usually server / worker talks to a bunch of other Queuing Systems behind the scenes.

Your webserver (let's say nginx) is a queuing system.

Your database is a queuing system.

The disk subsystem that database uses is a queuing system.

Computer Networking is literally a bunch of queueing systems talking to each other. That network interface you have in your computer, that switch that it's connected to, they are all queuing systems.

Even your CPU has an internal queue for all those instructions you want it to execute.

Why does it matter? __Queuing systems behave similarly__. They all use the same algorithms to distribute work (e.g. round robin), they all experience the same kind of issues (saturation, buffer overflows). __If you develop intuition on how they work, it will make you a better engineer__.

How do you develop intuition? One way is to play with these systems when they are under a lot of load. You'll notice a lot of interesting patterns.

If you're into reading hardcore CS books, [this one seems to be a good one](https://www.cs.cmu.edu/~harchol/PerformanceModeling/book.html).


If you're into more "fun" and maybe more practical ways of learning, I would recommend [factorio](https://factorio.com/) — it is a game in which you build and maintain factories. I think it is very good for teaching that kind of intuition about queuing systems. It is also extremely addictive though.

![Screenshot from a computer game factorio](https://pbs.twimg.com/media/EWZobMqUwAAucDk.jpg)


---

If you liked this article, consider [following me on Twitter](https://twitter.com/dmi3f) for more content like this.

