const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4fcfe8c8dd296e293ae3ac13fc739ebc",url:"./262ac49e/index.html"},{revision:"bf61731e51f6f01c9db7c3d188e015fa",url:"./317ea436/index.html"},{revision:"ae5e6f91237d24fc5d28df208cf95b89",url:"./33c03019/index.html"},{revision:"c2547e9965a1f01fd35c8ae9b3f87714",url:"./404.html"},{revision:"209909152abf86f31b0d6767006b90a5",url:"./4fd0a8fb/index.html"},{revision:"81eae9047c0d14e448226df77e90f956",url:"./5650e2f5/index.html"},{revision:"a7636efc23d280a883fd62e093752efa",url:"./73002bc7/index.html"},{revision:"2300f8bc9ba223c43fb87322cfd3226f",url:"./9b2de178/index.html"},{revision:"82b921ff694fc944bb599e80f0125eed",url:"./archives/2021/06/index.html"},{revision:"56577191539b2a2707057ea71f947f21",url:"./archives/2021/07/index.html"},{revision:"28e4a371e35df7ceea8b360adb1c981c",url:"./archives/2021/08/index.html"},{revision:"b7879b9bf50111647c487b3dd0bf4642",url:"./archives/2021/index.html"},{revision:"2b609ccb32d40c5f26a905228ee95046",url:"./archives/2021/page/2/index.html"},{revision:"d7d49d7d8d9ef28db3b4dddaa56323fd",url:"./archives/index.html"},{revision:"a046fd8e42d4a03a1c616be1c0b36177",url:"./archives/page/2/index.html"},{revision:"8c42ac9a14966c202efa6f0899e709e3",url:"./baidusitemap.xml"},{revision:"306ae1723657bfb566a304c1d1c4da9b",url:"./bf0e4745/index.html"},{revision:"7985ca3dff62bd6f3b26748cd3b653d4",url:"./c0add594/index.html"},{revision:"f204c5d1bf3c24ab7466a2f4664ba9bf",url:"./c314f6ea/index.html"},{revision:"3a997734702f0f6000453700b413a4ed",url:"./c7f33302/index.html"},{revision:"da794fbedd10692b8f7a10a92002b497",url:"./categories/index.html"},{revision:"f36083b38ab479810d4405c84919c453",url:"./categories/作品集/index.html"},{revision:"73898052bb4a5a721b877395adcab896",url:"./categories/听力练习/index.html"},{revision:"b78097a2d3e70bc812301e342b26c8bf",url:"./categories/学习-教程/index.html"},{revision:"b5ae3a83f09801026a1a791e839fd91f",url:"./chart/index.html"},{revision:"18e6f3adf8f400f6c7d8695383e7ea45",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"0f7db4be9d514340a97ab43956972b25",url:"./css/index.css"},{revision:"013f9eec8f582de6ff86ddbc9491dd48",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3c8dd16649d0c44dac707c39cadf704b",url:"./f5fee1ca/index.html"},{revision:"75b5b88c927d7464833ce41aa90da5ef",url:"./friend/index.html"},{revision:"3effe23c68bd727168062fbb89aa4e39",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"dfa539963f5b9fb2d0cac0979af0d604",url:"./index.html"},{revision:"ad3431a95dd3eb9b73a88dcdf5eaa064",url:"./js/asyncmodel.js"},{revision:"257593b0673cdeaaf44fd2531d034eee",url:"./js/github.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/hexo_githubcalendar.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"e75e14d6af5dce24c5ea60da6cd44add",url:"./js/moments.js"},{revision:"e2164d5474e92f6ff11d1fa97c999f25",url:"./js/onepeople.js"},{revision:"3bb31318085a5d60568b0ef7cc54e9ef",url:"./js/qipao.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"e9d536dd810af2b17a60ed651a04916d",url:"./js/twopeople.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c951eca1fdf66e69183956ee9659842b",url:"./js/zdog.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"fe4b3ce6fe49e381baaa91026886b3dd",url:"./life/index.html"},{revision:"bf64a75ac4a421e9efdeba34320b3454",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"e3618200a16efd0a9aeec4c1ec602231",url:"./manifest.json"},{revision:"495784a132e2bb01532520b4e0e4912a",url:"./page/2/index.html"},{revision:"b2e65ddf9a2ef1985f1e7e4de364d268",url:"./search.xml"},{revision:"81eea21ca6630e17b5f3a082985a09b8",url:"./sitemap.xml"},{revision:"4ac1cdc64d0e430b0c8005e6b690eafd",url:"./tags/butterfly/index.html"},{revision:"a61cf81b295fc63ed3229a9c8f38604e",url:"./tags/cdn/index.html"},{revision:"b0a5531994392bcb5e9681e366af10f7",url:"./tags/css/index.html"},{revision:"1d69980a193a6ed05b4f347f5025cb01",url:"./tags/github/index.html"},{revision:"ff249d23eaf3217269a498bd218e50b0",url:"./tags/hexo/index.html"},{revision:"be615e3463b6d810f401c9bf47bc16f4",url:"./tags/html/index.html"},{revision:"d5c1befbaabac7c992e463bb15095850",url:"./tags/index.html"},{revision:"2dd55e0a595dea588a57abeea7e84272",url:"./tags/node/index.html"},{revision:"e2d1f56e6e82f4bdeabc1cb13a64645d",url:"./tags/npm/index.html"},{revision:"7a51587e6a0b427c46361383cbc449ea",url:"./tags/vercel/index.html"},{revision:"867e9edbdb0ce88009d94720de4d51d6",url:"./tags/vue2/index.html"},{revision:"2df5b49a8e0a419518da95f467e9d00d",url:"./tags/单词/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();