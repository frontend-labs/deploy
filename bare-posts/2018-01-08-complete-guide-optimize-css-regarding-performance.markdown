---
author: renan
comments: true
date: 2018-01-08 16:04:19+00:00
layout: post
link: https://frontendlabs.io/2411--complete-guide-optimize-css-regarding-performance
published: false
slug: complete-guide-optimize-css-regarding-performance
title: The complete guide to optimize your CSS regarding performance
wordpress_id: 2411
categories:
- Automatización
- Css
- Preprocesadores
---

26 Feb 2015


# The complete guide to optimize your CSS regarding performance
La guia completa para optimizar tu css con respecto al rendimiento


If performance was never a huge thing for you, you may have a huge CSS file that gets delivered to the users on each request. In this post I'll concentrate on how to optimize and boost your CSS and I'll share my experience and what approaches worked for me. It's important to invest in performance. Every millisecond results in [worser conversion and lower revenue](http://mashable.com/2012/11/22/slow-websites/). For instance Amazon figured out that they get 1% more revenue for every 100 milliseconds they save. On average a website is [about 2MB](http://httparchive.org/trends.php) big. And in a lot of cases over 50% of the traffic comes from mobile devices. Mobile networks have a quite high latency. That is why it is really important to invest more in performance and one part of it is to reduce your CSS.


### 1. Concat, minify and gzip


This should be standard nowadays if not be sure to maximal load one CSS file per HTML document and be sure that it's minified and gzipped.


### 2. Split your file


Now let's get a little bit more advanced. To reduce your CSS you can split your file. For instance if you have two more or less independend website sections it might be useful to split your CSS in different files. For instance there is no reason to load website CSS also in the app. And the other way around. It is important to prevent to load a lot of unneeded CSS but on the other side it's also important to not have different request on each page because then the browser cache doesn't work. So you have to find a good midway.


### 3. Load only Critical CSS


To reduce the CSS even more you can only deliver the critical CSS in a style tag in the head of your HTML document and lazy load the rest. So in the most cases this might be the header, an intro image, and some style for the intro text or section. Often it's not easy to find all rules that are critical for your page especially if you want to do it during an already running project. But if you do something from scratch and you directly concentrate on splitting your CSS in a critical and a non-critical junk it is not that stressful. But you have to follow some rules. E.g. be sure that your critical CSS does not grow over 10kb. Otherwise it is counterproductive because using the browser cache would have more benefits. One big page that follows this practice is ‘The Guardian’. To get more detailed information about their process check out this 30ish min video:

[stag_video src="https://www.youtube.com/watch?v=-W0FBNbMLs0"]

[embed]https://www.youtube.com/watch?v=-W0FBNbMLs0[/embed]
There are also tools which might help you to extract the critical CSS from your site. One of them is Critical ([Github](https://github.com/addyosmani/critical)). You can integrate it in your Gulp or Grunt workflow.


### 4. Get rid of unused CSS


Another good strategy is to reduce the amount of libraries you use. This is important because the more CSS you have the more time the browser needs to build the CSSOM and this is required to render the page. Besides, you can save a lot of bytes. One often misused library is Bootstrap. Not only because often you have to override a lot of rules but also because the most of the whole framework is not neccessary. If you use it you maybe use 10% of the whole framework. So be sure to not load a lot of unneeded CSS and keep your codebase clean. You can check out the percentage of used CSS in the Chrome Dev tools. Moreover, there are plugins for Grunt and Gulp which have the goal to remove CSS that you don’t need. But unfortunately in the most of the cases they don’t work perfectly because you do some manipulation with your backend and also with your JavaScript that the plugin doesn’t get.

![Unused CSS](http://i.imgur.com/2EOW8Nk.png)On the front page of Bootstrap over 90% of the CSS is not used.


### 5. Use a preprocessor


To use a preprocessor like SASS or LESS does not directly mean to have better CSS. Be sure to follow guidelines and beware of too high specificity. It makes your CSS hard to maintain and also larger. But preprocessor can make some savings. For instance with the @extend in Sass or :extend feature in LESS. You could do it also with pure CSS but LESS or SASS helps you to easily extend some elements to another.


### 6. Use only performant selectors and rules


Another idea to get a performance benefit is to use efficient selectors and performant CSS rules. I think this is really only necessary if you want to get the last few milliseconds off your page. It is not clear how much it really saves. But check out this article to get more information about which selectors and rules you you should not use. [http://csswizardry.com/2011/09/writing-efficient-css-selectors/](http://csswizardry.com/2011/09/writing-efficient-css-selectors/), [https://github.com/mdo/css-perf](https://github.com/mdo/css-perf). For instance always use ‘background’ instead of ‘background-color’. First you save some bytes and second it is more performant.


### 7. Print and Media CSS extra file


If you have a lot of CSS that is only needed for print styles make sure that you only load them if they are the user want to print your page. This strategy could be also useful if you have designed your website mobile first. Then you can load the desktop CSS in a extra request to have less CSS to load for mobile users. The flip side of the coin is that you have an extra request for your desktop users but often they have a faster connections and lower latency than mobile users. That is why I wouldn't do it the other way around. And be sure that you have enough mobile users so that it's worthwhile.



* * *



This article is only my experience with my websites. Be sure to test everything and consider other best practices. A good resource for speed analysis is [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/). It will tell you to put the critical CSS in your head and some other useful botlenecks. [Webpagetest](http://www.webpagetest.org/) is great to messure how fast your content is displayed. Try to get a speed index of lower than 1,000 so that it seems like your page is loading almost instant. And of course check your browser dev tools to find ways to improve your performance.

To get more speed tips I recommend to read the [Google web fundamentals performance guide](https://developers.google.com/web/fundamentals/performance/) about optimizing performance.


