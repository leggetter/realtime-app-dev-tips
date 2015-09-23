name: dblue

class: bg-dark-blue, center, middle
layout: true

<span class="twitter_id">@leggetter</span>

---

name: green

class: green-template, center, middle
layout: true

<span class="twitter_id">@leggetter</span>

---

name: lblue
layout: true

class: bg-light, center, middle

<span class="twitter_id">@leggetter</span>

---

template: lblue
class: title

# Tools, Tips and Techniques<br />for <span style="text-decoration: underline;">Developing</span> Real-time Apps

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Developer Relations</span>
* <span class="speaker-pusher-logo"></span>

???

---

template: lblue
class: bg-contain circles
background-image: url(./img/pusher-circles.png)

---

class: fixed-width-list

## What we'll cover

1. Why Real-Time?
2. Tools, Tips & Tricks

* Data source <-- HERE
* App server <-- HERE
* Real-time framework <-- HERE
* Client app
  * Network <-- HERE
  * Library/App Service <-- HERE
  * App logic <-- and HERE
  * UI <-- not HERE

???

* Firstly, apps don't have to have a UI
* Even so, if you are interested in UI considerations then there are lots of great resources on this from browser and mobile vendors.

---

template: dblue
class: bg-dark-blue, h1-big

# Why Realtime?

???

* Here are some examples of apps...

---

template: dblue
class: em-text, bg-cover, trans-h, bottom
background-image: url(./img/itv-news-may-2014.png)

# Notifications & Signalling

???

* Something has happened
* Changed
* Alert - do something

---

class: bg-cover, em-text, trans-h, bottom
background-image: url(./img/delighted-app.gif)

# Activity Streams

???

* a stream of activity
* things have - and are - happening
* synonymous with social apps
  * Twitter
  * Facebook
  * Google+
  * News
  * Sports

---

template: dblue

class: bg-cover, em-text, trans-h, bg-white, bottom
background-image: url(./img/senate-election-results.png)

# Data Visualizations

---

template: lblue
class: bg-video, trans-h, em-text, bottom

# Chat

<video id="video" autoplay="true" loop="true">
  <source src="./img/pie.mp4" type="video/mp4">
</video>

???

* The 101 of realtime
* An interactive experience
* Real-time matters

---

class: bg-white
background-image: url(./img/messaging-apps.png)

---

template: dblue
class: trans-h, bg-cover, bottom
background-image: url(./img/uber.jpg)

# Real-Time Location Tracking

---

template: lblue
class: trans-h, bottom
background-image: url(./img/atom-pair.gif)

# Multi-User Collaboration

???

* Google Apps
* Cloud 9
* TODO: other

---

template: lblue
class: bg-cover, trans-h, bg-white
background-image: url(./img/lunar-landing.png)

<h3 style="position: absolute; top: 2%; right: 2%; display: inline-block";>
  Multiplayer Games / Art
</h3>

---

background-image: url(./img/robot-door-fail.gif)
class: trans-h bottom

# IoT

---

class: bg-pink, top

<img width="20%" src="./img/facebook.png" />
<img width="20%" src="./img/uservoice.png" />
<img width="25%" src="./img/google-docs.png" />
<img width="20%" src="./img/uber.png" />

--

# Users expect a real-time UX

--

# Without a real-time UX your app appears broken

---

template: dblue
class: h1-big

# Tools, Tips and Techniques for Developing Real-time Apps

---

## The Anatomy of a Real-Time App

* Data source
* App server
* Real-time framework
* Client app

???

Whilst there's not one true anantomy for a real-time application the majorify of these applications consist of sources of data, maybe from database or 3rd party APIs, one or more applications servers glue all other components together, a real-time framework to deal with your real-time data delivery and functionality, and clients that interact with the real-time framework, and potentially the application server.

---

template: dblue
class: h1-big

# Where does real-time data come from?

---

* Data source <- Here
* App server
* Real-time framework
* Client app

???

Other systems that ultimately interact with with your application server. Databases, message queues, 3rd party services and anything that interacts with web endpoints that your application server exposes.

---

* Data source
* App server <- Not Here
* Real-time framework
* Client app

???

This is open for debate.

But generally, the application server won't be the source of the real-time data - the real-time events. But it will be the organ within your living breathing real-time system that orchestrates the dataflow between the components.

---

* Data source
* App server
* Real-time framework <- Here
* Client app

???

Your real-time framework is all about real-time data.
* It handles incoming and outgoing data.
* e.g. connections, subscriptions to data, data synchronisation events, over-the-wire method and function calls
* Use case specific events e.g. user presence events (online/offline) or events for chat functionality
* It will also likely provide access to a number of events specific
to the functionality it offers

---

* Data source
* App server
* Real-time framework
* Client app <- Here

???

Each interaction with the application from the user is a real-time event with associated real-time data. Which of those events is important and should be acted upon depends on your application requirements.

---

class: bg-pink tip

## When designing & building real-time apps, always think about how the **decisions** you're making - **anywhere** in your architecture - will **impact** the **client app**.

???

Anywhere in your real-time application architecture.

---

* Data source
* App server
* Real-time framework
* Client app

Tools, Tips & Tricks - from left to right

???

Now that we've truely set the scene, let's make our way through the components in this real-time application and identify the tools, tips & tricks that I've found are really useful as we develop our app.

---

## Consuming Data Sources

* Data source
  * <-- Here (needs arrow showing app consuming data sources)
* App server 
* Real-time framework
* Client app

???

When building real-time applications you quite frequently get data from 3rd party components.

* APIs/Services
* Databases
* Queues

There are a lot of potential places where this real-time data can comes from.

---

class: bg-white fixed-width-list trans-h em-text top
background-image: url(img/apps-with-realtime-apis.png)

???

Not only are there lots of options, but they also deliver it in various forms.

--

# WebHooks
--

# HTTP Streaming
--

# WebSocket

---

class: bg-video, trans-h, em-text, bottom

## Example: The Twitter Streaming API<br /><small>Waiting for data...</small>

<video loop="true">
  <source src="./img/twitter-where-is-the-data.mp4" type="video/mp4">
</video>

--
play_video:

---

class: bg-video, trans-h, em-text, bottom

## Example: The Twitter Streaming API<br /><small>Sometimes there's just too much...</small>

<video loop="true">
  <source src="./img/twitter-lots-of-data.mp4" type="video/mp4">
</video>

--
play_video: 

---

class: top

## Problem:

You can seldom control what the data source sends and when it sends it. Even it you can, it can be tedious to trigger test data.

???

The problem: makes the development phase really difficult.

--

## Solution:

Capture & replay

---

## WebSocket / HTTP Streaming

???

HTTP Streaming and WebSocket connections are persistent connections that potentially provide a constant stream of data from the data source.

--

* Data source
  * <-- You could try a proxy here. But I've not had much success.
  * <-- Instead, capturing incoming data in a log.
* App server <-- Here
* Real-time framework
* Client app

---

class: top fixed-width-list

## WebHooks

???

WebHooks are HTTP callbacks from one server to another. They're triggered when one server has data that it wants to send to another, normally via a `POST` request.

--

Lots of options available

* [Forward](https://forwardhq.com/)
* [Finch](https://meetfinch.com/)
* [UltraHook](http://www.ultrahook.com/)
* [localtunnel.me](http://localtunnel.me/)
* [pagekite](https://pagekite.net/)
--

* [ngrok](https://ngrok.com/) -- *use ngrok*

---

**TODO: Simple ngrok demo/video**

---

class: bg-pink

## It's all fine and well saying to capture & replay the data. But...

## You said, **always think about the client**! What about the client?

---

## Web, mobile and other devices are amazing. But **the server is your real-time work-horse**. It should still do the vast majority of data processing and decision making.

---

## Processing

* Queries
* Transformations

???

What other processing? What about IDML (DataSift)?

---

# Data Payload

---

<pre style="height: 100%; overflow: auto;">
<code class="json hljs remark-code" data-contents="./assets/tweet.json">
</code></pre>

???

Here's what a standard tweet JSON looks like. Do I really want to send all this over the wire? It ultimately has to be converted from bytes or a string and parsed into a an object before the client can do anything with it. The larger it is the more work the client has to do.

---

class: tip

## Only send the data that is required

???

Once you've applied the queries or transformations you should only send the data to the client that it needs and is going to use.

---

## Send and initial image, then deltas

* Maintain an image of the current state of data
* Generate deltas by applying a diff of the update against the image

---

## Format data for the client

* Further reducing processing on the client

---

class: bg-video, trans-h, em-text, top
play_video:

## Example: Streaming Tweets to a UI<br /><small>Non-Existent-UX</small>

<video loop="true">
  <source src="./img/streaming-tweets-in-ui.mp4" type="video/mp4">
</video>

---

## Control the frequency of updates

* The client needs to handle, potentially do some small amount of processing and show that update in the UI
* Will a human even see the update?
  * see: http://www.pubnub.com/blog/how-fast-is-realtime-human-perception-and-technology/
  
---

## Batch messages

---

* Data source
* App server
* Real-time framework **<-- Here**
* Client app

---

## What's going in? What's going out?

## You need visibility.

* connections
* subscriptions
* messages
* presence

---

**TODO: Pusher Debug Console Demo**

---

## We need better tools for this

**TODO: reach out to @zimbatm & @hpoom about real-time logging solutions**

---

* Data source
* App server
* Real-time framework
  *  **<-- Here**
* Client app

---

## Connectivity

---

## Soon you won't be able to go to the bathroom<small><sup>†</sup></small> without SSL. So use it all the time - including in development.

<small><sup>†</sup> erm, I mean use HTTP/2 or ServiceWorker or any future web tech</small>

---

## You need SSL for networks with proxies and firewalls. In particular, mobile networks.

---

## Use the most appropriate transport for your client

**TODO: Diagram**

* TCP/UDP
* HTTP
* WebSocket

---

## Use the right real-time protocol for your app

**TODO: communication patterns on top of transports diagram**

---

* Data source
* App server
* Real-time framework
* Client app **<-- Here**

---

## Client Breakdown

* Data source
* App server
* Real-time framework
* Client app
  * Network
  * Library/App Service
  * App logic
  * UI

---

* Data source
* App server
* Real-time framework
* Client app
  * Network
  * Library/App Service <-- HERE
  * App logic
  * UI

---

## We're doing everything we can to make things easy for the client

* Payload - focused & minimal
* Image + Deltas
* Formatted - reduce processing
* Batched - update frequency

---

## Monitor Client Performance

---

## Latency

* Publish and Receive timestamps.
* Be aware of system clock offsets.

---

## Message backlog

**TODO: diagram**

---

## Throttle updates

* Feed that back to the server

---

## RESET

* If things get bad, reset

---

* Data source
* App server
* Real-time framework
* Client app
  * Network
  * Library/App Service
    *  <-- HERE
  * App logic
  * UI

???

The point of integration between the real-time tech and your application.

---

## We've covered a Lots

* Data Sources - you can't control the data
* Data considerations: processing, payload, batching etc.
* Connectivity - transports & protocols
* Monitoring client performance

---

**TODO: picture of Ben's FOWA London 2015 talk**

How did Ben build this?

---

## Problem:

All these things to consider and I just want to build a real-time feature!

## Solution:

Use a service/library abstraction. Mock out data and connectivity events.

---

## Use a service/library abstraction

* Angular Services
* Ember Services
* Write your own

---

## Write your own fake service implementations

**TODO: example**

---

## Bonus: Abstractions enable change

---

* App server
* Real-time framework
* Client app
  * Network
  * Library/App Service
  * App logic <-- HERE (and below)
  * UI

---

## You've done the hard work!

* Data:
  * Small payloads
  * Minimal processing
  * Easy to fake
* Connectivity:
  * Handled for you
  * Easy to fake

## You can focus on the real-time functionality

---

## Browser Developer Tools are Great!

* Performance Monitoring
* UI rendering
* Look at these Resources
* Follow these people

---

class: bg-pink

# SUMMARY

---

class: fixed-width-list

# Resources

* [Real-time Tech Guide](http://j.mp/realtime-tech-guide)

---

class: title

## Tools, Tips and Techniques<br />for Developing Real-time Apps

### Questions?

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Developer Relations</span>
* <span class="speaker-pusher-logo"></span>
