---
layout: post
title:  "Thoughts on Monitoring"
date: 2020-07-14 23:06
tags:
- programming
- monitoring
- devops
- observability
- metrics
---

This was originally posted as a [Twitter thread](https://twitter.com/dmi3f/status/1283100690491965441?s=20), hence the style.

![Screenshot from Grafana showing an example of a dashboard](https://pbs.twimg.com/media/Ec59QLAVAAANJC2.png)

Monitoring should be the next thing you set up after a __reliable and fast__ CI/CD system.

Ultimately monitoring helps you understand your systems better. That in turn helps you address issues __quickly__ when they arise. It’s a productivity tool.

Monitoring is for app developers too, not just ops / devops / infrastructure people.

If you’re new to monitoring, here are a few examples of things you might want to monitor:

* 🖼️ Number of images people upload
* 😞 Errors per second from email service
* 📈 HTTP server response times
* 💰 Money spent on S3 per day
* 📱 Daily active users
* 🌡️ Temperature in the data center

For a good real-life example of a mature monitoring setup I would refer you to [GitLab’s Grafana page](https://dashboards.gitlab.com/d/RZmbBr7mk/gitlab-triage?refresh=30s&orgId=1).

So let’s say I convinced you that you need a monitoring system. What’s next?

__Most people, even the ones with a lot of industry experience, never worked with a good monitoring system.__

This means you might have to do a lot of advocating & educating. And it will take time.

Educate people on your teams about monitoring. Show examples of how it helped you solve real issues. Give internal talks, mention it in code reviews, slack, email, meetings — use any opportunity to tell people about it. You have to do it __at least 3 times__ for it to stick.

This advice also applies to any other productivity tool you’re trying to get your team to use.

Us software engineers like to pretend we’re living on the bleeding edge of technology. In reality we’re often set in our ways and just as stubborn as everyone else. It takes extra effort to convince people there are tools that are objectively better than what they’re used to.

Make it easy to add metrics. Have a simple API in your apps, light docs. Have a __reliable and fast__ CI/CD system and __not too much process__ so that there’s no friction around adding new metrics.

__A good monitoring system is one where it’s easy and cheap to add metrics.__

### Best Practices

When you’re debugging an issue, think about what kind of metrics would help you and add those metrics, even if you already fixed the issue.

__There’s no such thing as having too many metrics__. You’ll never say, “I wish I didn’t have this metric”. However, you will say things like “This dashboard has too much going on”, or “Our monitoring is down because we’re writing too much”.

This just means you have to a) keep your dashboards tidy, b) take a good care of your monitoring infrastructure.

__A good dashboard at a glance gives you leads on what’s going on in your system, and at a closer look gives you answers.__

Create dashboards for teams, projects, separate sub-systems. Keep them simple and generic — you want others to be able to use it without much onboarding.

Another good way to organize dashboards is to make a hierarchy of dashboards. Create a main one with high level insights about the health of separate subsystems and links to relevant dashboards with more information.

Give good names to your dashboards and graphs. Give metrics proper units. Add links to other dashboards. There’s no rules, it’s an art, kind of like naming variables.

Allow everyone on the team to create their own __playground dashboards__ — and let people do whatever they want there. These are also good for ad-hoc analysis.

Don’t put dashboards on a giant TV screen in your office — no one will actually look at it.

So how much does it cost to run a good monitoring system? Your mileage may vary, but I’ll give some ballpark figures.

On average you’ll spend about 1% of your total cloud / hosting costs on monitoring. It will also take about 1% of your team’s time to keep the system up and running.

Is it worth it? In my experience the benefits outweigh the costs many times over.

Just don’t forget to treat your monitoring infrastructure well. Set up monitoring (yes), do regular cleanups and upgrades. Address performance issues promptly when they arise.

Now that we have a good monitoring system, we can talk about alerts. But that’s for another day.

---

If you liked this article, consider [following me on Twitter](https://twitter.com/dmi3f) for more content like this.

