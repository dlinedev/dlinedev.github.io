if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const a=e=>c(e,n),s={module:{uri:n},exports:f,require:a};i[n]=Promise.all(r.map((e=>s[e]||a(e)))).then((e=>(d(...e),f)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f18de96b22faf127bdd72afbdaed9ff9"},{url:"archives/2022/08/index.html",revision:"75a5bd507b7d25ce46a930c595ee8068"},{url:"archives/2022/index.html",revision:"8f79f0485df9897a8b168cf61cf8004d"},{url:"archives/index.html",revision:"2a013e421ac218e4a450fffcb7f9e656"},{url:"categories/index.html",revision:"ffc8367edb93387421597dc25c26256d"},{url:"css/index.css",revision:"c940f5a5dd9c4194af983c8f4481e912"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"6708d92b33a76bc8759e3832d89cc5bc"},{url:"img/avatar.png",revision:"dcdd5ac48df686a423040dc6a8c92a34"},{url:"img/favicon.png",revision:"83dbbadf542b2104effabe0c745efe04"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/top_img01.jpg",revision:"035706a49ec5b4066be1f43c3dc73dd8"},{url:"img/top_img02.jpg",revision:"be03a7194b138a521f3e98453e2130ff"},{url:"img/top_img03.jpg",revision:"94db61c1c6c9586794fcc38f45c73305"},{url:"img/top_img04.jpg",revision:"d92532dea2d29146e1dd8b2d07fa075b"},{url:"img/top_img05.jpg",revision:"5134dcc105b5600b8aff1423628ce7c3"},{url:"index.html",revision:"f625cdb4109fff940b21fc33e61c5a8b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"594a3e8361ce223bcf5067bc000f0919"},{url:"pwa/icons/android-chrome-192x192.png",revision:"a0afd58d4225b9b94dc0c184d1d8c0b6"},{url:"pwa/icons/android-chrome-512x512.png",revision:"e55d4f726fd910b134209619b7e3fdb9"},{url:"pwa/icons/apple-touch-icon.png",revision:"a77b1a32cd9bcebf759323ba7229403c"},{url:"pwa/icons/favicon-16x16.png",revision:"93d053b13d2d6c9b62af7fe2caf6eaa8"},{url:"pwa/icons/favicon-32x32.png",revision:"ba44601c7a6cfac8754e15588a26bfb0"},{url:"pwa/icons/safari-pinned-tab.svg",revision:"a09192112b13bf0e538fa3beae813ffc"},{url:"tags/index.html",revision:"27776908e4b306f8ba95d1b7a1304c78"},{url:"undefined/2022080820/index.html",revision:"feec7a2d73c6dbba2272482c7bda48f7"}],{})}));