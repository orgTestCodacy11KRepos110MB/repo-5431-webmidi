"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,slug:"/"},c="Quick Start",d={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Quick Start",description:"You want to quickly try out the library? This quick start guide will let you establish a",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/webmidi/docs/",editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Supported Environments",permalink:"/webmidi/docs/getting-started"}},l=[{value:"Step 1 - Create the HTML page",id:"step-1---create-the-html-page",children:[]},{value:"Step 2 - Add a script",id:"step-2---add-a-script",children:[]},{value:"Step 3 - Connect your device",id:"step-3---connect-your-device",children:[]},{value:"Step 4 - Listen for MIDI messages",id:"step-4---listen-for-midi-messages",children:[]},{value:"Step 5 - Have fun!",id:"step-5---have-fun",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You want to quickly try out the library?")," This quick start guide will let you establish a\nconnection with your MIDI instrument in less than 5 minutes."),(0,a.kt)("p",null,"\u26a0\ufe0f Hint: You can ",(0,a.kt)("strong",{parentName:"p"},"go even faster")," by copying the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djipco/webmidi/blob/master/examples/quick-start/index.html"},"code")," from\nour GitHub repo."),(0,a.kt)("h2",{id:"step-1---create-the-html-page"},"Step 1 - Create the HTML page"),(0,a.kt)("p",null,"Create an HTML document and include the library: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n\n<html lang="en">\n\n  <head>\n    <meta charset="UTF-8">\n    <title>WebMidi.js Quick Start</title>\n    <script src="https://cdn.jsdelivr.net/npm/webmidi@3.0.0-alpha.16/dist/webmidi.iife.js"><\/script>\n  </head>\n  \n  <body>\n    <h1>WebMidi.js Quick Start</h1>\n  </body>\n\n</html>\n')),(0,a.kt)("h2",{id:"step-2---add-a-script"},"Step 2 - Add a script"),(0,a.kt)("p",null,"Add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of the HTML page. This code waits for the library\nto be loaded, then enables it and then displays available MIDI input devices (such as synths, drum\nmachines, controllers, etc.):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n\n  // Make sure the library is loaded before starting\n  window.addEventListener("load", e => {\n\n    // Enable WebMidi.js and trigger the onEnabled() function when ready\n    WebMidi\n      .enable()\n      .then(onEnabled)\n      .catch(err => alert(err));\n\n  });\n\n  // Function triggered when WebMidi.js is ready\n  function onEnabled() {\n\n    // Display available MIDI input devices\n    if (WebMidi.inputs.length < 1) {\n      document.body.innerHTML+= "No device detected.";\n    } else {\n      WebMidi.inputs.forEach((device, index) => {\n        document.body.innerHTML+= `${index}: ${device.name} <br>`;\n      });\n    }\n\n  }\n  \n<\/script>\n')),(0,a.kt)("h2",{id:"step-3---connect-your-device"},"Step 3 - Connect your device"),(0,a.kt)("p",null,"\ud83c\udfb9 Connect an input MIDI device (synth, drum machine, controller, etc.) and load the HTML page in a\ncompatible browser. The page will detect the device and display its name."),(0,a.kt)("p",null,"\u26a0\ufe0f If nothing shows up, first make sure your MIDI device is detected at the system level. Also make\nsure is shows up as an input device."),(0,a.kt)("h2",{id:"step-4---listen-for-midi-messages"},"Step 4 - Listen for MIDI messages"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"onEnabled()")," function, we now add a callback function that will be triggered each time "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function onEnabled() {\n\n  if (WebMidi.inputs.length < 1) {\n    document.body.innerHTML+= "No device detected.";\n  } else {\n    WebMidi.inputs.forEach((device, index) => {\n      document.body.innerHTML+= `${index}: ${device.name} <br>`;\n    });\n  }\n  \n  // Retrieve the first MIDI input device found\n  const synth = WebMidi.inputs[0];\n  \n  // Retrieve the first MIDI channel of the device and add a listener \n  // for \'noteon\' events.\n  synth.channels[1].addListener("noteon", e => {\n    document.body.innerHTML+= `${e.note.name} <br>`;\n  });\n  \n}\n')),(0,a.kt)("p",null,"If you wish to listen for notes on several channels, you can add the listener directly on the\ninput device itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen to 'note on' events on channels 1, 2 and 3 of the first input MIDI device\nWebMidi.inputs[0].addListener(\"noteon\", e => {\n  document.body.innerHTML+= `${e.note.name} <br>`;\n}, {channels: [1, 2, 3]});\n")),(0,a.kt)("p",null,"If you wish to use another device, simply substitute the ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"input[0]")," for the index of the\ndevice you want to use."),(0,a.kt)("h2",{id:"step-5---have-fun"},"Step 5 - Have fun!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"That's it!")," To go further, please take some time to check out the\n",(0,a.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section. It covers important topics such as instalaltion\noptions, compatibility, security, etc."),(0,a.kt)("p",null,"If you ever need help, head over to the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/djipco/webmidi/discussions"},"GitHub Discussions")," page and ask all the questions\nyou want!"))}p.isMDXComponent=!0}}]);