const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"68f7bae3b75486b74049ee1f0280d93d",url:"./262ac49e/index.html"},{revision:"66abe2bb4428efaffc7b1a9f0b42ce23",url:"./317ea436/index.html"},{revision:"a7bb2f603929ee4df7f588115ac99c6f",url:"./33c03019/index.html"},{revision:"b798885eff52b3eb78e3b8c8d3e440dc",url:"./404.html"},{revision:"db45e5445c6875d105ec72ade2ab92cf",url:"./4fd0a8fb/index.html"},{revision:"c5c4681a40db185409d6b0a431f8ff95",url:"./5650e2f5/index.html"},{revision:"1a9d63f6329b2b247a593763e727f04a",url:"./73002bc7/index.html"},{revision:"de5c61b81fccfcc537a35ccdd40daa4d",url:"./9b2de178/index.html"},{revision:"61395d941edf6b2a5fae6784d1a98b04",url:"./archives/2021/06/index.html"},{revision:"3b3c6259cc1e2f456100eafc2924b29b",url:"./archives/2021/07/index.html"},{revision:"834b52617631d6ba1e6d497e354d5e24",url:"./archives/2021/08/index.html"},{revision:"67d921ccac00e097d798ac59d383f701",url:"./archives/2021/index.html"},{revision:"97b91b400a89366eab9696eb46e8907d",url:"./archives/2021/page/2/index.html"},{revision:"1bd56697bc92fca34446c7fb4a4b789d",url:"./archives/index.html"},{revision:"9e254d9b7860088bd3ee415d5aef3c0c",url:"./archives/page/2/index.html"},{revision:"8c42ac9a14966c202efa6f0899e709e3",url:"./baidusitemap.xml"},{revision:"252bf0dea48671f23826aa6afc9232ef",url:"./bf0e4745/index.html"},{revision:"c342c3a8db32f82deb9278d14f0b96b2",url:"./c0add594/index.html"},{revision:"e9c3dd9e769587d0ccab1fedaddffbe4",url:"./c314f6ea/index.html"},{revision:"ca90532df5d32804318dd57e969ad39b",url:"./c7f33302/index.html"},{revision:"10f052d377bae24bd6988be896fa4a12",url:"./categories/index.html"},{revision:"71163fc4b457524b328bcd257ba6dd7d",url:"./categories/作品集/index.html"},{revision:"f6f3796b3032c3ac54d71cb0a0faaa80",url:"./categories/听力练习/index.html"},{revision:"5c581ab17bdc7e0a6145cc05ccb40b5f",url:"./categories/学习-教程/index.html"},{revision:"3e45188aecb7a3c1a537c1b0d205afdf",url:"./chart/index.html"},{revision:"20ad26fd087702a5a96de87adfd02a79",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"0f7db4be9d514340a97ab43956972b25",url:"./css/index.css"},{revision:"013f9eec8f582de6ff86ddbc9491dd48",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2b02d7b7b84651eca4b14e9346ded121",url:"./f5fee1ca/index.html"},{revision:"f7471b10951419baa907635a61172485",url:"./friend/index.html"},{revision:"ad9d9841cc2afa8150c53d13a8bf665c",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"a0cbf53890f3174d74ac9fe9e6d423fc",url:"./index.html"},{revision:"ad3431a95dd3eb9b73a88dcdf5eaa064",url:"./js/asyncmodel.js"},{revision:"257593b0673cdeaaf44fd2531d034eee",url:"./js/github.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/hexo_githubcalendar.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"e75e14d6af5dce24c5ea60da6cd44add",url:"./js/moments.js"},{revision:"e2164d5474e92f6ff11d1fa97c999f25",url:"./js/onepeople.js"},{revision:"3bb31318085a5d60568b0ef7cc54e9ef",url:"./js/qipao.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"e9d536dd810af2b17a60ed651a04916d",url:"./js/twopeople.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c951eca1fdf66e69183956ee9659842b",url:"./js/zdog.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"53ecabbba4c653ee38c87fcc806f84d2",url:"./life/index.html"},{revision:"bcaf5a6a651577dd14776d8736f5e472",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"48027f665d6c3a94718f37f534d01b2c",url:"./page/2/index.html"},{revision:"b2e65ddf9a2ef1985f1e7e4de364d268",url:"./search.xml"},{revision:"35732083f3406535c86d6856f8afe80c",url:"./sitemap.xml"},{revision:"2a052d668e8a18b1ca6dc8e313d9582e",url:"./tags/butterfly/index.html"},{revision:"5717d41ffadf60e4b51aaf9f8f5454ae",url:"./tags/cdn/index.html"},{revision:"429cd26f5cee564f85db0d98af7e1956",url:"./tags/css/index.html"},{revision:"5d16436400509a022c332cef566f8f58",url:"./tags/github/index.html"},{revision:"f809dbd3d9d87824118d4bfb59592207",url:"./tags/hexo/index.html"},{revision:"cb159e16569ba5f8f442aa0807bf6528",url:"./tags/html/index.html"},{revision:"ad93789b3abb72905acfbbeeb695ddca",url:"./tags/index.html"},{revision:"1896ca50dd21ebaff22deb087da21dc2",url:"./tags/node/index.html"},{revision:"41f0b010d0b2a078b75d125949b5f7b8",url:"./tags/npm/index.html"},{revision:"ba867f40db727205f9dff0695324874d",url:"./tags/vercel/index.html"},{revision:"55da5fc7728b448c32672114ffc7efd2",url:"./tags/vue2/index.html"},{revision:"c97e94264f92010c43b918874ba6615b",url:"./tags/单词/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();