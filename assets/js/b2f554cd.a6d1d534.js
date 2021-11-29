"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"WEBMIDI.js v3 is available now!","metadata":{"permalink":"/blog/2021/12/01/version-3-has-been-released","source":"@site/blog/2021-12-01/version-3-has-been-released.md","title":"WEBMIDI.js v3 is available now!","description":"Version 3 of WEBMIDI.js, the go-to library for JavaScript MIDI, is now available.","date":"2021-12-01T00:00:00.000Z","formattedDate":"December 1, 2021","tags":[],"readingTime":2.365,"truncated":true,"authors":[{"name":"Jean-Philippe C\xf4t\xe9","title":"Creator of WEBMIDI.js","url":"/about","image_url":"/img/blog/jean-philippe_cote.jpg","imageURL":"/img/blog/jean-philippe_cote.jpg"}]},"content":"After a lot of work and testing, I am happy to announce today that version 3 of the go-to MIDI\\nlibrary for JavaScript has been released! You can [try it out](https://webmidijs.org/docs) right \\nnow!\\n\\n\x3c!--truncate--\x3e\\n\\n![](webmidi.js-is-available-now.png)\\n\\n### About WEBMIDI.js\\n\\n[**WEBMIDI.js**](https://webmidijs.org) exists to make it easier for developers to use the\\n[Web MIDI API](https://webaudio.github.io/web-midi-api/). The Web MIDI API is a really exciting\\naddition to the web platform allowing a web page to interact directly with MIDI musical instruments\\nand devices.\\n\\nWhile great, many developers will find the API to be too low-level for their needs. Having to\\nperform binary arithmetic or needing to constantly refer to the 300-page MIDI spec is no fun (trust\\nme on this!). So, the goal for [**WEBMIDI.js**](https://webmidijs.org) is to get developers and \\nmusicians started with their web-based MIDI projects as efficiently as possible.\\n\\nAs of today, [**WEBMIDI.js**](https://webmidijs.org) generates over **744K hits a month on\\n[jsDelivr](https://www.jsdelivr.com/package/npm/webmidi)**. It is **downloaded over 4.4K times a\\nmonth on [NPM](https://www.npmjs.com/package/webmidi)** and has been **starred by over\\n[1000 developers](https://github.com/djipco/webmidi/stargazers)** on GitHub. Not too bad for a niche\\nlibrary that grew out of a personal passion project. \ud83d\ude00\\n\\n### About the New Version 3\\n\\nVersion 3 has been rewritten from scratch to make it both future-proof and backwards-compatible. It \\nuses a modern development paradigm and now has its own dedicated website at \\n[**webmidijs.org**](https://webmidijs.org). The library offers numerous new features such as:\\n\\n* Long-awaited **support for Node.js** (thanks to the [jzz](https://www.npmjs.com/package/jzz)\\n  module by Jazz-Soft). The exact same code can be used in supported browsers and in Node.js.\\n\\n* Distribution in **3 flavours**: **ESM** (ECMAScript module for modern browsers), **CJS** (CommonJS\\n  module for Node.js) and **IIFE** (Immediately Invoked Function Expression for legacy browsers and\\n  _ad hoc_ usage).\\n\\n* **TypeScript Support**. Every new release includes a TypeScript definition file for CJS and ESM in\\nthe `dist` directory.\\n\\n* **New `InputChannel` and `OutputChannel`** objects. You can now work with a single MIDI channel if \\nthat\'s appropriate for your needs.\\n\\n* **New `Note` object**. Makes it easier to work with notes and pass them around from one method to \\nthe next.\\n\\n* **New `Message` object** that allows easier routing of MIDI messages, including the ability to \\nautomatically **forward inbound MIDI messages** to one, or more, outputs (much like the good ol\' \\nphysical THRU port).\\n\\n* Improved support for **system exclusive** (sysex) messages.\\n\\n* **Support for promises** while preserving legacy callback support.\\n\\n* Improved **support for RPN/NRPN messages**.\\n\\n* Addition of **hundreds of unit tests** to make sure the library remains stable at all times.\\n\\n* and lots more...\\n\\n### Try it out!\\n\\nThe [documentation section](https://webmidijs.org/docs) of the new website has all the information \\nto get you started. If you need help, you can exchange with fellow users and myself using the \\n[GitHub Discussions](https://github.com/djipco/webmidi/discussions) platform.\\n\\nIf you use the library and find it useful, please think about \\n[sponsoring](https://github.com/sponsors/djipco) \ud83d\udc9c the project.\\n\\nCheers!\\n\\nJean-Philippe"}]}')}}]);