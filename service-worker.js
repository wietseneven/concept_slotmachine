"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/concept_slotmachine/index.html","b938a5454cded7bf4a757cb658a6fb1b"],["/concept_slotmachine/static/css/main.a00719bf.css","97a760862c33460904a6ae975682ced9"],["/concept_slotmachine/static/js/main.246acc9a.js","7a0934ebba643beb301b41f50a4e55db"],["/concept_slotmachine/static/media/cow.2a71f7f4.mp3","2a71f7f4e8e4d91338686c932662cc6f"],["/concept_slotmachine/static/media/elephant.c91fcbb1.mp3","c91fcbb123e310342aad6635ed2a5fac"],["/concept_slotmachine/static/media/lion.b906d4a0.mp3","b906d4a0edb77680fe78babaeab568fa"],["/concept_slotmachine/static/media/logo.0122ece2.svg","0122ece2e19bf0dce6bca8e5c0b91a36"],["/concept_slotmachine/static/media/pig.79dcf48f.mp3","79dcf48f41bc52d838470f89f697472c"],["/concept_slotmachine/static/media/rooster.0ce169db.mp3","0ce169db1dac4f041f9b32d34ce9853e"],["/concept_slotmachine/static/media/slot-bell.ddef094e.mp3","ddef094e56c98d1b9e49ab4b40e21a87"],["/concept_slotmachine/static/media/slot-music.488492b0.mp3","488492b0373abf696c5810d532852f1b"],["/concept_slotmachine/static/media/slot-win.40f3b4df.mp3","40f3b4df8f3f2aef7ebdee71db68b5b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/concept_slotmachine/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});