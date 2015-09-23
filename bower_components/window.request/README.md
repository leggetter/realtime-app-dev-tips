# window.request alias for window.fetch

A "brain polyfill" that aliases `window.fetch` onto `window.request`.

Let's be honest, [`window.fetch`](https://fetch.spec.whatwg.org/) just doesn't sound right. "Fetch" makes it sounds like you are just doing a `GET` request. We're used to talking about request and response. The [Introduction to fetch()](http://updates.html5rocks.com/2015/03/introduction-to-fetch) actually says "Fetch request" 9 times.

So, this is a tongue-in-cheek "brain polyfill" that simply aliases `window.fetch` on to `window.request` because it'll just makes much more sense to talk about "making requests".

To save people time it also bundles the [window.fetch polyfill](https://github.com/github/fetch) by GitHub.

To be honest, I don't really ever expect this "brain polyfill" to be used. I'm justing making a point. Even if somebody could send me a link to an FAQ that clearly justifies the choice of "fetch" for this API I'll be happy.

## Installation

Available on [Bower](http://bower.io) as **window.request**.

```sh
$ bower install window.request
```

You'll also need a Promise polyfill for older browsers.

```sh
$ bower install es6-promise
```

## Usage

`request` is just an alias onto `fetch` so it supports everything that fetch does - any HTTP method. Here are a couple of examples, but see the polyfill [usage section](https://github.com/github/fetch#usage) for full examples.

### GET

```js
request('http://httpbin.org/ip').then(function(response) {
  console.log('response', response)
  console.log('header', response.headers.get('Content-Type'))
  return response.text()
}).then(function(text) {
  console.log('got text', text)
}).catch(function(ex) {
  console.log('failed', ex)
})
```

### POST

```js
request('/users', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})
```
