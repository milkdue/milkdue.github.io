const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"keyiqingxin"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"256a85dfd1b551934ad66d73b989c273",url:"./262ac49e/index.html"},{revision:"6267805faeb9c20a7d6bd294003700c1",url:"./317ea436/index.html"},{revision:"7f5f2afe881a8c95f31a2917a57ffbaf",url:"./33c03019/index.html"},{revision:"ebd27cad26ea1d64e9a09365f399a380",url:"./404.html"},{revision:"808d8ffd78a3e1a3906e1d594fdb8138",url:"./4fd0a8fb/index.html"},{revision:"2c4eb5fb3683014e6573f7e66a7959da",url:"./5650e2f5/index.html"},{revision:"7b81f65ad03a961e62624379f56a6ec1",url:"./73002bc7/index.html"},{revision:"cfb4ebed164de0800d5512cfd7264631",url:"./9b2de178/index.html"},{revision:"5f5c6f41503333d31d026db99219e7c3",url:"./archives/2021/06/index.html"},{revision:"cb7bc90302afa1ed184bdb85ce87b0ed",url:"./archives/2021/07/index.html"},{revision:"a34180a6a0a03a878e824c6a541afbda",url:"./archives/2021/08/index.html"},{revision:"8c52fdc6c2a4b3eb3bc0344ff57064c4",url:"./archives/2021/index.html"},{revision:"9807c5b515c00c40ae330afd0e9408ca",url:"./archives/2021/page/2/index.html"},{revision:"4c3a145bdb3aa16949183131802ad9cf",url:"./archives/index.html"},{revision:"ceb00480f6f84688fae54c5d6c822192",url:"./archives/page/2/index.html"},{revision:"846e1d12afa4371a1a0b931373cc44e4",url:"./baidusitemap.xml"},{revision:"1f6a23b79c93550a7710997688d6581d",url:"./bf0e4745/index.html"},{revision:"dc395f4d0dbcd3bd85522aba98349481",url:"./c0add594/index.html"},{revision:"e3caf69d85b8f12166576f0877e0c9e8",url:"./c314f6ea/index.html"},{revision:"971799a58b6f0bcf2e88a609780bf5f3",url:"./c7f33302/index.html"},{revision:"a36599736840fc4553abf72a6a39a6ef",url:"./categories/index.html"},{revision:"b81e3b0720904d61323adda542c94fb2",url:"./categories/作品集/index.html"},{revision:"70cabd438df55e36f57ea83182cd247c",url:"./categories/听力练习/index.html"},{revision:"f3c925f33660e93e35acc9d1c800544b",url:"./categories/学习-教程/index.html"},{revision:"2b4a4d92cc464c6516ad4e3fdf8c410e",url:"./chart/index.html"},{revision:"4843e762dc77de43888c11afcbbd7222",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"0f7db4be9d514340a97ab43956972b25",url:"./css/index.css"},{revision:"f6b70e271614b41bc2aea64a0bf16192",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"e8ae93c860761b5e19b21501f6707da7",url:"./f5fee1ca/index.html"},{revision:"373dbd1041158af57e4d49aee0c80656",url:"./friend/index.html"},{revision:"509debabcd3e8b4d0f1ffa5d45ddb7c9",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"020930002701a8e8c005da0564cb4dd4",url:"./index.html"},{revision:"ad3431a95dd3eb9b73a88dcdf5eaa064",url:"./js/asyncmodel.js"},{revision:"257593b0673cdeaaf44fd2531d034eee",url:"./js/github.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/hexo_githubcalendar.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"e75e14d6af5dce24c5ea60da6cd44add",url:"./js/moments.js"},{revision:"e2164d5474e92f6ff11d1fa97c999f25",url:"./js/onepeople.js"},{revision:"3bb31318085a5d60568b0ef7cc54e9ef",url:"./js/qipao.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"e9d536dd810af2b17a60ed651a04916d",url:"./js/twopeople.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c951eca1fdf66e69183956ee9659842b",url:"./js/zdog.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"8288cac9d584082639789de3a570d79a",url:"./life/index.html"},{revision:"893e8e54cef7f529f96eb5499d59aa02",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"c20c7a23bf0fd7f9e8a6ee50f1a3e773",url:"./manifest.json"},{revision:"fbbb68e1cf7f5b3d805639b200122e07",url:"./page/2/index.html"},{revision:"8cfed871399cd88ac5dcec537456ac71",url:"./search.xml"},{revision:"886cac94b2d70d2db69de0616387da29",url:"./sitemap.xml"},{revision:"54865534aa0545924c8aff8d612bdf88",url:"./tags/butterfly/index.html"},{revision:"4e7caa783887705a2924145fc5be2cbd",url:"./tags/cdn/index.html"},{revision:"82bb1f71fce5125dba5ff5258cb80a19",url:"./tags/css/index.html"},{revision:"4218bd588d6a1edafa783fdefb9581b4",url:"./tags/github/index.html"},{revision:"4704e26797ea44f67f53bfafb4ea34b1",url:"./tags/hexo/index.html"},{revision:"1fda2af98f7eeff66333c37b64e9917e",url:"./tags/html/index.html"},{revision:"fe350292c41b0f05fb0ef3b186023f26",url:"./tags/index.html"},{revision:"8d8091758176efcc6bfe4cb0cc44a7e3",url:"./tags/node/index.html"},{revision:"870c79fa5ab079b366314c005e7873fd",url:"./tags/npm/index.html"},{revision:"cf5b758850c79e25876b3e08a8e3d3ea",url:"./tags/vercel/index.html"},{revision:"fdbd09a803ef6ffe549f3d2adec38d6e",url:"./tags/vue2/index.html"},{revision:"f2a11e5e0146b065b0e025ddf4d7dc93",url:"./tags/单词/index.html"}],{directoryIndex:null,exclude:["/tags/cdn/index.html","/tags/github/index.html"]}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();