const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"keyiqingxin"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"256a85dfd1b551934ad66d73b989c273",url:"./262ac49e/index.html"},{revision:"6267805faeb9c20a7d6bd294003700c1",url:"./317ea436/index.html"},{revision:"7f5f2afe881a8c95f31a2917a57ffbaf",url:"./33c03019/index.html"},{revision:"91b956f2fbb7e41cfa4c6554322acf77",url:"./404.html"},{revision:"808d8ffd78a3e1a3906e1d594fdb8138",url:"./4fd0a8fb/index.html"},{revision:"d89f71b4c37a4e1857ed725c53285419",url:"./5650e2f5/index.html"},{revision:"7b81f65ad03a961e62624379f56a6ec1",url:"./73002bc7/index.html"},{revision:"56af92ff8cf90b032270cfbe13a6858c",url:"./9b2de178/index.html"},{revision:"d97e9c1c49e6372c059d3153cf8343c3",url:"./archives/2021/06/index.html"},{revision:"44770af83a8cfcb644313d0072ab6099",url:"./archives/2021/07/index.html"},{revision:"cb774534e15ce151a163c4155b58508d",url:"./archives/2021/08/index.html"},{revision:"ca58d5f238b76d7d828adb166d9638e8",url:"./archives/2021/index.html"},{revision:"8221735f27e4be2238c8887a6c93ebeb",url:"./archives/2021/page/2/index.html"},{revision:"5d58030566afdc264f53af3405270dd8",url:"./archives/index.html"},{revision:"4cc5851d713c45eb85b4bb6ea9cd5e8f",url:"./archives/page/2/index.html"},{revision:"8c42ac9a14966c202efa6f0899e709e3",url:"./baidusitemap.xml"},{revision:"1f6a23b79c93550a7710997688d6581d",url:"./bf0e4745/index.html"},{revision:"dc395f4d0dbcd3bd85522aba98349481",url:"./c0add594/index.html"},{revision:"e3caf69d85b8f12166576f0877e0c9e8",url:"./c314f6ea/index.html"},{revision:"971799a58b6f0bcf2e88a609780bf5f3",url:"./c7f33302/index.html"},{revision:"7e8d0b4f2d55b070ffda2779ad4a3711",url:"./categories/index.html"},{revision:"bd325b6f077b1ed86527d27f8a1cce58",url:"./categories/作品集/index.html"},{revision:"7c114f9fd5ef0ca1ada6d8b2668726d5",url:"./categories/听力练习/index.html"},{revision:"a4cd2fd0cca0c8e8cb7dec24663a638e",url:"./categories/学习-教程/index.html"},{revision:"283e90a4ba33519ef452d0444ae47942",url:"./chart/index.html"},{revision:"7688ddd2c5f0f1dfd7299e3dd9b08d96",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"0f7db4be9d514340a97ab43956972b25",url:"./css/index.css"},{revision:"f6b70e271614b41bc2aea64a0bf16192",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"43a50d62ee25a379293ad7f7b2cd6df1",url:"./f5fee1ca/index.html"},{revision:"b601d3d2e81d0fc820301c530d68a763",url:"./friend/index.html"},{revision:"9ce28c00e24caff6068cd6ff714a91e8",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"cec1c4f0c97bd546261f10970b7a37f4",url:"./index.html"},{revision:"ad3431a95dd3eb9b73a88dcdf5eaa064",url:"./js/asyncmodel.js"},{revision:"257593b0673cdeaaf44fd2531d034eee",url:"./js/github.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/hexo_githubcalendar.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"e75e14d6af5dce24c5ea60da6cd44add",url:"./js/moments.js"},{revision:"e2164d5474e92f6ff11d1fa97c999f25",url:"./js/onepeople.js"},{revision:"3bb31318085a5d60568b0ef7cc54e9ef",url:"./js/qipao.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"e9d536dd810af2b17a60ed651a04916d",url:"./js/twopeople.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"c951eca1fdf66e69183956ee9659842b",url:"./js/zdog.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"8288cac9d584082639789de3a570d79a",url:"./life/index.html"},{revision:"16c79eda96b14d49f59e856eb2282ee3",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"ea3f4c28b0f76cb8fb64a794125ab78b",url:"./manifest.json"},{revision:"4ea8a873a5b7fc3c4820f41b37c1e8f9",url:"./page/2/index.html"},{revision:"a8b6db9b42f67c3d9dc116ca5669efa1",url:"./search.xml"},{revision:"dd90de8bad6751e1e84d1e56d6e8cbe2",url:"./sitemap.xml"},{revision:"f41a68dc620400bc21d4537d8cc7ab38",url:"./tags/butterfly/index.html"},{revision:"4235a4828b176c2ed5f44c8972fdaa28",url:"./tags/cdn/index.html"},{revision:"c184b682baba3fe147eb34c48e4a4e3d",url:"./tags/css/index.html"},{revision:"53f999284181946f6af2b77478ae3aa7",url:"./tags/github/index.html"},{revision:"891c60b8cb8ed14602e059a8ff6071be",url:"./tags/hexo/index.html"},{revision:"1a921d11e987c9f4065d150151e25ec7",url:"./tags/html/index.html"},{revision:"d5538e4371b1a4ff954d138bd003cb58",url:"./tags/index.html"},{revision:"4f1a30fcae2b6644932790473a31b42c",url:"./tags/node/index.html"},{revision:"a8c74ab64f4e9efac48809e629734404",url:"./tags/npm/index.html"},{revision:"dd4da0846547e57c56413b1f857fb061",url:"./tags/vercel/index.html"},{revision:"b3588cb99bdd3c9e22690e67adcb0442",url:"./tags/vue2/index.html"},{revision:"f9815c6d2b7545ae7e33c237c0f181e8",url:"./tags/单词/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();