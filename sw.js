const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"68f7bae3b75486b74049ee1f0280d93d",url:"./262ac49e/index.html"},{revision:"66abe2bb4428efaffc7b1a9f0b42ce23",url:"./317ea436/index.html"},{revision:"a7bb2f603929ee4df7f588115ac99c6f",url:"./33c03019/index.html"},{revision:"6c4c8fff8e5450f630c8cd8aaca06bd5",url:"./404.html"},{revision:"db45e5445c6875d105ec72ade2ab92cf",url:"./4fd0a8fb/index.html"},{revision:"c5c4681a40db185409d6b0a431f8ff95",url:"./5650e2f5/index.html"},{revision:"1a9d63f6329b2b247a593763e727f04a",url:"./73002bc7/index.html"},{revision:"de5c61b81fccfcc537a35ccdd40daa4d",url:"./9b2de178/index.html"},{revision:"d511d07a21594a315cb08e188942f5d4",url:"./archives/2021/06/index.html"},{revision:"e957d4718402987d4aeeb3dead541d09",url:"./archives/2021/07/index.html"},{revision:"a274e594b7e3a52711c9074c123fe88f",url:"./archives/2021/08/index.html"},{revision:"3de83b6038b2cadfa40ffe4f8d200642",url:"./archives/2021/index.html"},{revision:"8ebdc42b2fc7f3294d42c615b9f6a9b2",url:"./archives/2021/page/2/index.html"},{revision:"92f2cf1873c9c2f9c8e86ad0e9c58943",url:"./archives/index.html"},{revision:"e6a09510b8bef34f393da941c774cc5b",url:"./archives/page/2/index.html"},{revision:"8c42ac9a14966c202efa6f0899e709e3",url:"./baidusitemap.xml"},{revision:"252bf0dea48671f23826aa6afc9232ef",url:"./bf0e4745/index.html"},{revision:"c342c3a8db32f82deb9278d14f0b96b2",url:"./c0add594/index.html"},{revision:"e9c3dd9e769587d0ccab1fedaddffbe4",url:"./c314f6ea/index.html"},{revision:"ca90532df5d32804318dd57e969ad39b",url:"./c7f33302/index.html"},{revision:"108dd97dd066dc6e463577e935a524cf",url:"./categories/index.html"},{revision:"f2c2e41ef77eaaac2f9be198fb0d4444",url:"./categories/作品集/index.html"},{revision:"2202e7972465785ec105aa86423b47d5",url:"./categories/听力练习/index.html"},{revision:"e948f63100ec976fe1726880940ba148",url:"./categories/学习-教程/index.html"},{revision:"e08ce0853deb6ae7b7bf970a8d086973",url:"./chart/index.html"},{revision:"53b7d20a71ba370bd8c694bc5807dddb",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"0f7db4be9d514340a97ab43956972b25",url:"./css/index.css"},{revision:"013f9eec8f582de6ff86ddbc9491dd48",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2b02d7b7b84651eca4b14e9346ded121",url:"./f5fee1ca/index.html"},{revision:"ff274c8c522e273f2e903c83b8f4ee79",url:"./friend/index.html"},{revision:"a740b9bd8995d39a618049fc94a0d70f",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"2b0d12e50e9546ea28d7a22becb4a874",url:"./index.html"},{revision:"ad3431a95dd3eb9b73a88dcdf5eaa064",url:"./js/asyncmodel.js"},{revision:"257593b0673cdeaaf44fd2531d034eee",url:"./js/github.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/hexo_githubcalendar.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"e75e14d6af5dce24c5ea60da6cd44add",url:"./js/moments.js"},{revision:"e2164d5474e92f6ff11d1fa97c999f25",url:"./js/onepeople.js"},{revision:"3bb31318085a5d60568b0ef7cc54e9ef",url:"./js/qipao.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"e9d536dd810af2b17a60ed651a04916d",url:"./js/twopeople.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c951eca1fdf66e69183956ee9659842b",url:"./js/zdog.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"53ecabbba4c653ee38c87fcc806f84d2",url:"./life/index.html"},{revision:"aa4d79a048f41521d9fa60f0e72ad2f4",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"e3618200a16efd0a9aeec4c1ec602231",url:"./manifest.json"},{revision:"c2fb37e5e3998669bfe6f654e0c627f2",url:"./page/2/index.html"},{revision:"b2e65ddf9a2ef1985f1e7e4de364d268",url:"./search.xml"},{revision:"1ffe2c444657a90243e5391dfe7713a1",url:"./sitemap.xml"},{revision:"7bb710dc2bf62ddc46d5ed4c5125b5e3",url:"./tags/butterfly/index.html"},{revision:"f1761b7aec3c9ea08aceb6c2f5795b9a",url:"./tags/cdn/index.html"},{revision:"f695c026f7af63c508034f0f3e61835e",url:"./tags/css/index.html"},{revision:"967ff25008c2a45e42b49da466ab221f",url:"./tags/github/index.html"},{revision:"9b253d38c9ac2852d6455d4b10c7cba0",url:"./tags/hexo/index.html"},{revision:"16cd62dfc823702f84ebf1804f65b370",url:"./tags/html/index.html"},{revision:"dba864efd01378963b5f7955b8f4b307",url:"./tags/index.html"},{revision:"7b0ae30fc4a157e60e831f1e317e9013",url:"./tags/node/index.html"},{revision:"c987263745def0168ec3cbebbbc6061b",url:"./tags/npm/index.html"},{revision:"dbf8e5e7e2960dac9ec1afeaefa14289",url:"./tags/vercel/index.html"},{revision:"bcb17a5e14d012cc4f402f945414a10e",url:"./tags/vue2/index.html"},{revision:"2c33c7e7b74e2b1fd9daf3d2b910d90f",url:"./tags/单词/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();