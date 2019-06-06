---
layout: blog
title: 'ZEIT Hackathon 2019 : A Retrospective'
slug: zeit-hackathon-2019
tags:
  - hackathon
  - competition
date: 2019-06-06T04:12:32.930Z
---
This past weekend, I participated in [ZEIT's first ever Hackathon](https://zeit.co/hackathon). It was a 48-hour event that was centred around building an integration for ZEIT's "now" server-less hosting platform. I had never worked with Now before, but I love a lot of ZEIT's other software ([Next.js](https://nextjs.org/) & [Hyper.js](https://hyper.is/)) and I figured this would be a good opportunity to learn about Now through building a little project with it. 

This post is going to go over what I built, what I learned, and some takeaways for my next Hackathon.  

## What I Built
I was initially having trouble coming up with an Idea for the hackathon. I spent some time in the event's slack looking at ideas but nothing really came to me. So, by the recommendation of the event organisers, I decided to build an integration with one of their Sponsors: [Twilio](https://www.twilio.com/)! 

I ended up putting together a dead simple token manager integration that allows users to manage multiple Twilio authentication tokens and accounts across different deployments! When looking through the docs, I noticed that Now allows you to pass in environment variables into your projects through their API. I used this feature as a starting point, and after 48 hours (only around 16 hours of which I was actually coding) I had my integration!

In the end, all my integration really allows you to do is pass in some Twilio Credentials as Environment Variables and manage which projects have access to which credentials. If you use Now you can check it out at its Now Marketplace link [here](https://zeit.co/integrations/twilio-now) or check out the documentation at [twilionow.tech](https://twilionow.tech)

## What I Learned

### Server-less is Awesome (most of the time)

Now is a server-less hosting platform. At the start of the Hackathon, I knew Now was a server-less deployment but I didn't understand what that meant in practice. Essentially, all of your Now projects are broken into a bunch of cloud-based functions called "AWS Lambda" functions. This has a few major benefits: 

- **Cost Savings:** Apps only use compute-power when they're in use, greatly reducing the cost of the app in the first place
- **Crazy-fast Deployments:** Apps literally take 10-15 seconds to go from local to live with Now which saves time and overall just feels really cool.
- **CDN without the work**: Now allows you to duplicate your app across their servers which are placed throughout the world with a few lines of config (seriously it's crazy simple, see here) 

While all of this stuff is super cool, I did encounter a few issues with Now and Server-less:

- **Things don't work as expected:** when trying to build out an example Node.js/Express app to demo my integration, I quickly realized I couldn't build just any old express app. I would need to have a [lambda based setup](https://github.com/zeit/now-examples/tree/master/express) where each endpoint is in a separate .js file, among other things. Building my example app took way longer than expected because this setup was so much different than what I was used to. 

### I Need Clean Code

Despite the event's hackathon name, I felt like the hackier I was in my integration, the less efficient I became. 

After the first day of programming, most of my code was still in one file and it felt like an absolute mess to work in. Every time I had to make a change it would take a minute to even really understand what my code was doing. When I finally figured it out, I would often have forgotten what I was even trying to do in the first place, leaving me at square 1 all over again.

At the start of day two, I did some hardcore code cleaning. I moved all my template literals (which I was using to build the integration's UI) to their own component-based files, which I then imported into pages, and broke my app logic into a few separate files as well.  

This not only saved me probably 1-2 hours of programming time on day 2, but it also made me feel much better when writing code, which allowed me to really get into my code for longer.

This might not apply to anyone, but I personally wished I would have just started a little more organised and known from the start I need a (relatively) clean codebase to be efficient. 

## Takeaways For The Next Hackathon 

### Read the Documentation Beforehand

The ZEIT integration platform has **awesome** [documentation](https://zeit.co/docs). It's super in-depth, well-organized, and has guides and open-source code as examples. That said, I didn't spend nearly as much time as I should have in the docs **before the event**. I often found myself breaking my integration, writing a fix, and testing it, just to go to the documentation and find an awesome, well-explained example of the exact thing I was trying to build. 

This all could have been solved with a solid once-over of the docs the week before the event. Skimming through the documentation would have maybe taken an hour to do and probably would have saved me at least two or three hours of time spent rewriting my code. 

### Minimize Distractions

Admittedly, I didn't spend nearly as much time as I wanted to on this Hackathon. Despite it being a 48-hour hackathon, I probably spent less than a day of actual focused time working on my integration and the final product reflects that. I didn't adequately prepare for the event or let the people around me know I was going to be AWOL which often pulled me away from VS Code, and into the real world for long periods of time. For example: 

* Saturday afternoon I had a friend come over to hang out.
* Saturday night I went out to a movie I'd promised to go see.
* Sunday night I rushed to finish my integration so I could go out for a previously planned date. 

If I could do it over again, I would either go all in on the hackathon or just have my normal weekend. By trying to mix the two, I took away time and from my integration, and ended up being either late or stressed out when hanging out with friends & family.

## Conclusion

Overall, it was a great weekend!
I learned about server-less, made some friends in the Hacakthon's slack, and got another opportunity to grow as a Developer! 

Also, I want to give a huge thanks to the Whole ZEIT team for throwing this event. They were super encouraging, answered a bunch of my questions and made participating online a blast! 
