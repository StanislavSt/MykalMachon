---
layout: blog
title: 'ZEIT Hackathon 2019 : A Retrospective'
slug: zeit-hackathon-2019
tags:
  - hackathon
  - competition
date: 2019-06-06T04:12:32.930Z
---
This past weekend, I participated in ZEIT's first ever Hackathon. It was a  48 hour event that was centred around building an integration for ZEIT's "now" server-less hosting platform. I had never worked with Now before, but I love a lot of ZEIT's other software (Next.js & Hyper.js) and I figured this would be a good opportunity to learn about Now through building a little project with it. 

This post is going to go over what I built, what I learned, and some takeaways for my next Hackathon.  

## What I Built

I was initially having trouble coming up with an Idea for the hackathon. I spent some time in the event's slack looking at ideas but nothing really came to me. So, by the recommendation of the event organisers, I decided to build an integration with one of their Sponsors: Twilio! 

I ended up putting together a dead simple token manager integration that allows users to manage multiple Twilio authentication tokens and accounts across different deployments! When looking through the docs, I noticed that Now allows you to pass in environment variables into your projects through their API. I used this feature as a starting point, and after 48 hours (only around 16 hours of which I was actually coding) I had my integration!

In the end, all my integration really allows you to do is pass in some Twilio Credentials as Environment Variables and manage which projects have access to which credentials. If you use Now you can check it out at it's Now Marketplace link here or check out the source code here

## What I Learned

### Server-less is Awesome (most of the time)

Now is a server-less hosting platform. At the start of the Hackathon, I knew Now was a server-less deployment but I didn't understand what that meant in practice. Essentially, all of your Now projects are broken into a bunch of functions called "AWS Lambda" functions (basically functions in the cloud that are accessible by an API call). This has a few major benefits: 

- Cost Savings: Apps only use compute power when they're in use, greatly reducing the cost of the app in the first place

- Crazy-fast Deployments: Apps literally take 10-15 seconds to go from local to live with Now which saves time and overall just feels really cool.

- CDN without the work: Now allows you to duplicate your app across their servers which are placed throughout the world with a few lines of config (seriously it's crazy simple, see here) 

While all of this stuff is super cool, I did encounter a few issues with Now and Server-less:

- Things don't work as expected: when trying to build out an example Node.js/Express app to demo my integration, I quickly realised I couldn't build just any old express app. 

### Cleaner Code Equals Easier Development


## Takeaways For The Next Hackathon 

