const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"keyiqingxin"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"0923fca6dc9808a581e0d38af881270d",url:"./262ac49e/index.html"},{revision:"d19e301dca175132ea9ec21123c8745d",url:"./317ea436/index.html"},{revision:"e4adaa264be6b42eda142d909cf68e4d",url:"./33c03019/index.html"},{revision:"103f1e563ff675dd47db45167ac1e65b",url:"./404.html"},{revision:"a65af2f40d2f5da3912413b8b0b7fc36",url:"./4fd0a8fb/index.html"},{revision:"12ff79bbd1895c8cedf85328d3e70b71",url:"./5650e2f5/index.html"},{revision:"6d3798d8f08d30200bf29178f97cd3d8",url:"./56718f73/index.html"},{revision:"06ef369970eb5bd0287c35d9e9a03e63",url:"./679887a0/index.html"},{revision:"a2daa032dbe058045f5f18efa6262a73",url:"./73002bc7/index.html"},{revision:"03d6e2bc274f1bcca64a660f39f504c3",url:"./9b2de178/index.html"},{revision:"2d8275e977b33e1245d88dcdbb591a33",url:"./archives/2021/06/index.html"},{revision:"19b9d242d3e8e52d06209523d5f02f7b",url:"./archives/2021/07/index.html"},{revision:"17e9d218605f041a04b2a444b33b225a",url:"./archives/2021/08/index.html"},{revision:"3db23b7061e8b316edd6efaee5f22ffc",url:"./archives/2021/09/index.html"},{revision:"6f28d917bc9316e15950cfa2d270ca11",url:"./archives/2021/index.html"},{revision:"048a0da176c04412b7cc115bb7a0287f",url:"./archives/2021/page/2/index.html"},{revision:"764b5885a182b3dbb9f3d4568d85dd08",url:"./archives/index.html"},{revision:"57b1077af25ce7998907e43a35fc6f9f",url:"./archives/page/2/index.html"},{revision:"4feb84fb005388c0c7cce7d1e59068e6",url:"./baidusitemap.xml"},{revision:"85e6a2becbbe9170494e3a0c00590bdc",url:"./bf0e4745/index.html"},{revision:"aa1a55ac79d2b11b714f1554a36f9d71",url:"./c0add594/index.html"},{revision:"a56eac211c1e0f9fd2d3a96becd7192f",url:"./c314f6ea/index.html"},{revision:"d65ac2794a002acb7ed0a0bb76ef2773",url:"./c7f33302/index.html"},{revision:"547ee316d8c65867e2176b87ff62aaee",url:"./categories/听力练习/index.html"},{revision:"65294138082ff647824ebc85d499611f",url:"./categories/学习-教程/index.html"},{revision:"76e5ccd1d44ddf48cefeaf2060af8858",url:"./categories/学习-教程/page/2/index.html"},{revision:"69e8807fce3c1ebee2bc850aa8e105b1",url:"./categories/作品集/index.html"},{revision:"ca465ec1676a66a8795e1fb2061c53d7",url:"./categories/index.html"},{revision:"b5ea73acd9b8ac247ae7d4b7ea6c07e7",url:"./chart/index.html"},{revision:"1583308d86abb0112889ed8fb2456abc",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"379cc18291471c1ed7bdf5c9c9bad61e",url:"./css/index.css"},{revision:"47cb4c9772453b6a3499a186ce1803a8",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"8367bdac58e0b9eac0487d9572d953bc",url:"./df8718c1/index.html"},{revision:"b774edf987cdf54f2289d1fdf77c6b92",url:"./f5fee1ca/index.html"},{revision:"fc514ae06b202638ea0e8d734a6e5072",url:"./friend/index.html"},{revision:"ae9720d079a67abbaae4144c5b890a0b",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"65e928f748b9be254da7552228b92dd6",url:"./index.html"},{revision:"a4a354d5bb6e9498079af37a32c5d3f1",url:"./js/github.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"5bc5cb21be5f00f05968d4f5b9327cb8",url:"./life/index.html"},{revision:"3a7e2b8fdc21da4dec777796d813becc",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"c20c7a23bf0fd7f9e8a6ee50f1a3e773",url:"./manifest.json"},{revision:"ef38989aa71a1bbfefccf579f396b303",url:"./page/2/index.html"},{revision:"5f89a30447a4059ac30a4175fd0e35e0",url:"./search.xml"},{revision:"ebc47bcf874db668bc29c5c334df571c",url:"./sitemap.xml"},{revision:"e914f6c8342331ead5f7a7f9840db9ce",url:"./sponsor/index.html"},{revision:"82c5d94b188ce03721b389fe98523643",url:"./tags/单词/index.html"},{revision:"f7eea3b6912550c01796bab76b4f425f",url:"./tags/butterfly/index.html"},{revision:"2f2113ad41b544f7dc1692f3e4777cd7",url:"./tags/css/index.html"},{revision:"551114f23ed60bb04f22e79090ec95f8",url:"./tags/git/index.html"},{revision:"39124acacfd10f253f89c88584072f12",url:"./tags/hexo/index.html"},{revision:"96ef849f428b1743f7096c01d3773f00",url:"./tags/html/index.html"},{revision:"28badf37ab3ce45ce27bcefae14bc163",url:"./tags/index.html"},{revision:"ae4ad095b45953d938c4bb527623c340",url:"./tags/node/index.html"},{revision:"14d8efdff5fba601f01faf05bb9c8290",url:"./tags/npm/index.html"},{revision:"cc612fe307a121413d0929aa40f8987d",url:"./tags/vercel/index.html"},{revision:"e1ad67d62aa8c55fb38ba63414f40796",url:"./tags/vue2/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();