"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,slug:"/"},d="Quick Start",c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Quick Start",description:"You want to get started as quickly as possible? This guide will let you establish a connection",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/webmidi/docs/",editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Supported Environments",permalink:"/webmidi/docs/getting-started"}},l=[{value:"Step 1 - Create the HTML page",id:"step-1---create-the-html-page",children:[],level:2},{value:"Step 2 - Add a script",id:"step-2---add-a-script",children:[],level:2},{value:"Step 3 - Connect your device",id:"step-3---connect-your-device",children:[],level:2},{value:"Step 4 - Listen for MIDI messages",id:"step-4---listen-for-midi-messages",children:[],level:2},{value:"Step 5 - Have fun!",id:"step-5---have-fun",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You want to get started as quickly as possible?")," This guide will let you establish a connection\nwith your MIDI instrument in less than 5 minutes."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide is for ",(0,r.kt)("strong",{parentName:"p"},"version 3.x"),". Documentation for ",(0,r.kt)("a",{parentName:"p",href:"archives/v2"},"version 2.5.x")," and\n",(0,r.kt)("a",{parentName:"p",href:"archives/v1"},"version 1.0.0")," is also available."))),(0,r.kt)("h2",{id:"step-1---create-the-html-page"},"Step 1 - Create the HTML page"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Hint: You can ",(0,r.kt)("strong",{parentName:"p"},"go even faster")," by copying the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/djipco/webmidi/blob/develop/examples/quick-start/index.html"},"code")," from\nour GitHub repo."))),(0,r.kt)("p",null,"Create an HTML document and include the library (this will install the latest alpha version): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n\n<html lang="en">\n\n  <head>\n    <meta charset="UTF-8">\n    <title>WebMidi.js Quick Start</title>\n    <script src="https://cdn.jsdelivr.net/npm/webmidi@next/dist/iife/webmidi.iife.js"><\/script>\n  </head>\n  \n  <body>\n    <h1>WebMidi.js Quick Start</h1>\n  </body>\n\n</html>\n')),(0,r.kt)("h2",{id:"step-2---add-a-script"},"Step 2 - Add a script"),(0,r.kt)("p",null,"Add the following ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," of the HTML page. This code waits for the library\nto be loaded, then enables it and then displays available MIDI input devices (such as synths, drum\nmachines, controllers, etc.):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module">\n\n  // Make sure the library is loaded before starting\n  window.addEventListener("load", e => {\n\n    // Enable WebMidi.js and trigger the onEnabled() function when ready\n    WebMidi\n      .enable()\n      .then(onEnabled)\n      .catch(err => alert(err));\n\n  });\n\n  // Function triggered when WebMidi.js is ready\n  function onEnabled() {\n\n    // Display available MIDI input devices\n    if (WebMidi.inputs.length < 1) {\n      document.body.innerHTML+= "No device detected.";\n    } else {\n      WebMidi.inputs.forEach((device, index) => {\n        document.body.innerHTML+= `${index}: ${device.name} <br>`;\n      });\n    }\n\n  }\n  \n<\/script>\n')),(0,r.kt)("h2",{id:"step-3---connect-your-device"},"Step 3 - Connect your device"),(0,r.kt)("p",null,"\ud83c\udfb9 Connect an input MIDI device (synth, drum machine, controller, etc.) and load the HTML page in a\ncompatible browser. You will be prompted to authorize the MIDI connection."),(0,r.kt)("p",null,"After authorization, the page should detect the connected MIDI devices and display their name."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If nothing shows up, first make sure your MIDI device is detected at the operating system level."))),(0,r.kt)("h2",{id:"step-4---listen-for-midi-messages"},"Step 4 - Listen for MIDI messages"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnabled()")," function, we first retrieve the input device we want to work with and store it\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"mySynth")," variable. You can retrieve it by number or by name (as you wish)."),(0,r.kt)("p",null,"Then we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addListener()")," method on MIDI channel 1 of the input device to add a\ncallback function that will be called each time a ",(0,r.kt)("strong",{parentName:"p"},"noteon")," event is received on that MIDI channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function onEnabled() {\n\n  if (WebMidi.inputs.length < 1) {\n    document.body.innerHTML+= "No device detected.";\n  } else {\n    WebMidi.inputs.forEach((device, index) => {\n      document.body.innerHTML+= `${index}: ${device.name} <br>`;\n    });\n  }\n  \n  const mySynth = WebMidi.inputs[0];\n  // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")\n  \n  mySynth.channels[1].addListener("noteon", e => {\n    document.body.innerHTML+= `${e.note.name} <br>`;\n  });\n  \n}\n')),(0,r.kt)("p",null,"Alternatively, if you wish to listen for notes from several channels at once, you can add the\nlistener directly on the input device itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Listen to 'note on' events on channels 1, 2 and 3 of the first input MIDI device\nWebMidi.inputs[0].addListener(\"noteon\", e => {\n  document.body.innerHTML+= `${e.note.name} <br>`;\n}, {channels: [1, 2, 3]});\n")),(0,r.kt)("h2",{id:"step-5---have-fun"},"Step 5 - Have fun!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"That's it!")," To go further, please take some time to check out the\n",(0,r.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section. It covers important topics such as installation\noptions, compatibility, security, etc."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you ever need further help, you can also head over to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/djipco/webmidi/discussions"},"GitHub Discussions")," page and ask all the questions\nyou want!"))))}m.isMDXComponent=!0}}]);