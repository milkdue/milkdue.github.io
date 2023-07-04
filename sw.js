const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"keyiqingxin"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d8a0d601b8bbb4f90121e5fda2a8de0a",url:"./262ac49e/index.html"},{revision:"358fe0866c690a5c4c45e50381996486",url:"./317ea436/index.html"},{revision:"eef88c4690820ec19dc6abc72765089e",url:"./33c03019/index.html"},{revision:"d3e9b32451eacc8fd0e79ed325490f44",url:"./404.html"},{revision:"ea355b2edb3ce058cce59bc1abab84b4",url:"./4fd0a8fb/index.html"},{revision:"778b2d67e13e77f7b197cf35c8bb94c1",url:"./5307bd00/index.html"},{revision:"2dc2eaf4fd10b28ae7b2e95b7c0fc63d",url:"./5650e2f5/index.html"},{revision:"f8134e037de7cd0fce977cfc52993fae",url:"./56718f73/index.html"},{revision:"d4bc1632a32ff3dace5581f1c1d427a3",url:"./679887a0/index.html"},{revision:"5cdd3d24a1957b5d5aba1a63eabedc18",url:"./700f0d34/index.html"},{revision:"05da77192a52092566108a5f17c1ea29",url:"./71c610d3/index.html"},{revision:"25a95dd156f1473a4bef449ae0a54afe",url:"./73002bc7/index.html"},{revision:"c521d1406bbb72b284603182283c5472",url:"./787f2ffe/index.html"},{revision:"bbc991487951890c5a629b64e37feb42",url:"./92aca09d/index.html"},{revision:"c455880d40c7bc7a800e4b1a08c2d7e2",url:"./9b2de178/index.html"},{revision:"3db97c65e5f150d6c9b8fe5a1356c19d",url:"./9f47fabe/index.html"},{revision:"cf06235587de9f01a97ed0123e87be5a",url:"./a1345b2b/index.html"},{revision:"886bba0c7a4c5db58bbdd12c2c46b2bf",url:"./archives/2021/06/index.html"},{revision:"ad07c149f10f04bb4c4b97e3d60ed2cd",url:"./archives/2021/07/index.html"},{revision:"3fab1c0ed8b217899158cba40e4a5a9a",url:"./archives/2021/08/index.html"},{revision:"1e8c171924b083e3ac224650f350ac6d",url:"./archives/2021/09/index.html"},{revision:"10c49788a47c4cadcf6380d2e2767891",url:"./archives/2021/10/index.html"},{revision:"0e2056d34a0b92e51d87c9d03f01141f",url:"./archives/2021/index.html"},{revision:"692dbe2c7abc1e830f335568e1eb2bd2",url:"./archives/2021/page/2/index.html"},{revision:"1bfac2fae1e6b617b1852966d8f87745",url:"./archives/2022/02/index.html"},{revision:"036d858161b7e4f4a4ed131884ff3a7c",url:"./archives/2022/03/index.html"},{revision:"34a92e657e09cf9e9df00cc10dfe47c7",url:"./archives/2022/index.html"},{revision:"7b8f606f3ccebd7b79a0ba4e767d6d09",url:"./archives/2023/01/index.html"},{revision:"1669be69fdb157c375cb2d9c98cbe3cb",url:"./archives/2023/03/index.html"},{revision:"89c68882181b3104a94c6ffc4faf37d4",url:"./archives/2023/04/index.html"},{revision:"84003cf689da914d9e21457221e90fe4",url:"./archives/2023/06/index.html"},{revision:"b33fa7d3f55b9e76fa6a2e423ea150e8",url:"./archives/2023/index.html"},{revision:"fcc7166db95826337ccbe469af702811",url:"./archives/index.html"},{revision:"9438f79ba2ae52d70b3f4bffeed220a3",url:"./archives/page/2/index.html"},{revision:"4b49a669a890c87bb33c3609741f4568",url:"./archives/page/3/index.html"},{revision:"d677d23a0cddfd270df7107331deb0c8",url:"./baidusitemap.xml"},{revision:"ee5a497ded8cc084037923dce88818ef",url:"./bf0e4745/index.html"},{revision:"7f418c2742d51c31ff006ebbf1fa0023",url:"./c0add594/index.html"},{revision:"b1f058a8061dabbf3addfc4b4d9a0515",url:"./c314f6ea/index.html"},{revision:"8bd3809df9f81ea1255c212979f40c16",url:"./c7f33302/index.html"},{revision:"4a49016f63d6e4cec5d1266c258942ea",url:"./categories/听力练习/index.html"},{revision:"e455a6b4b286bdcaac3fcd0758b1f467",url:"./categories/学习-教程/index.html"},{revision:"0c0b0b0446faf1d7136055494fd27649",url:"./categories/学习-教程/page/2/index.html"},{revision:"73b5c6f5260a95af85bf4c76843d531e",url:"./categories/作品集/index.html"},{revision:"4be33468d60d1c4d598cfe5a1b2edb86",url:"./categories/index.html"},{revision:"bc85224c9e1ddbf139598f47be3a70b9",url:"./chart/index.html"},{revision:"c00d8ad4f12c6337c8e85437e285f147",url:"./comments/index.html"},{revision:"32172131def8eb3b55289b8a1396e578",url:"./css/comment_barrage.css"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"4a13f11bf88d95afd9dcb34ace06cbbd",url:"./css/fixed_comment.css"},{revision:"e438cbdce5ff14ae374d19c1e13d491b",url:"./css/font-awesome-animation.min.css"},{revision:"77e1fd9ce138a7573d857d17b831715f",url:"./css/galleries.css"},{revision:"ea1b54c7a62e6f06e5baf57f7bfdda30",url:"./css/gallery.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"6f4c4cbc95c3aa5b03506d9be25a3584",url:"./css/index.css"},{revision:"128221818de74266c88bb703a4a577c4",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"c91df9fa6a08356468a299d24783fcbb",url:"./css/twikoo_beautify.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"5e8059af2429dbf78425df0bcdf1a8f5",url:"./df8718c1/index.html"},{revision:"7638cce2f7d9ee46cfb109b468addb6e",url:"./f5fee1ca/index.html"},{revision:"a0a972fdba4608ede27dd08ee3d9bc94",url:"./ff44d7d9/index.html"},{revision:"ace10ccb37c8883ea2996b6eff3e83e7",url:"./friend/index.html"},{revision:"98c63e596aa912ab9ac4d7930cd4ec59",url:"./gallery/bund/index.html"},{revision:"1a8d46a3591bdb6d87b2a04375f3cf82",url:"./gallery/cat/index.html"},{revision:"d2cdeafe62addfb85b7226f8c1d67545",url:"./gallery/changsha/index.html"},{revision:"8d2cc7e957b9861d02371318b8967250",url:"./gallery/index.html"},{revision:"35801e8b4ffa94e39edb69470b4c9b61",url:"./gallery/qingdao/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"e473206b1c0371dd473c7066f2c55c7f",url:"./index.html"},{revision:"8650b2e987b7c09b0ebfb304522c3f12",url:"./js/asyncmodel.min.js"},{revision:"6dded9ff006831203ccef7f620870d73",url:"./js/comment_barrage.js"},{revision:"7142a0e71fa773710bc735e90990a67f",url:"./js/fixed_comment.js"},{revision:"4f2af7090229b62ec161285dbd79bfc8",url:"./js/font_2032782_8d5kxvn09md.js"},{revision:"2fc5c520a8ee5fd98161edc3cdf2224c",url:"./js/font_2264842_3izu8i5eoc2.js"},{revision:"e925328c09f41ca114e3daf9ecae1a0a",url:"./js/github.js"},{revision:"19c6cb58cc56135029e1197385a962c8",url:"./js/live2dcubismcore.min.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"b892ae3f30ab1676d399bc3541e3037a",url:"./life/index.html"},{revision:"33a39bc9cbff10e634fd5f473c93e9d1",url:"./link/index.html"},{revision:"21fbf12577ad0f37d19a1084b2005461",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"c20c7a23bf0fd7f9e8a6ee50f1a3e773",url:"./manifest.json"},{revision:"4a5c317647feb13bde619b60993f19b4",url:"./page/2/index.html"},{revision:"b6671f12030ab29f4f6b5e94f19464d1",url:"./page/3/index.html"},{revision:"187b5b7aac18aeaa2b414a06913edf61",url:"./search.xml"},{revision:"b0a1200617de7108554500333eff4c55",url:"./sitemap.xml"},{revision:"4aa64bf32df9f36fd3a60775e43b3a6e",url:"./sponsor/index.html"},{revision:"94a33809a180d76d77453d66629412af",url:"./tags/单词/index.html"},{revision:"eefff25b2af8fa04a36ba97193e90c67",url:"./tags/机器学习/index.html"},{revision:"4e69e42435f14b21ecca3d26215becbb",url:"./tags/爬虫/index.html"},{revision:"535399712fdf63e5e17875021eb24035",url:"./tags/butterfly/index.html"},{revision:"755fe7ee0a2b9ae6b6d49d79b1a80d12",url:"./tags/c/index.html"},{revision:"8489b3360d69b2cfc8e3630a0628b63b",url:"./tags/css/index.html"},{revision:"6032cb619503e97a77d131a58f8a2889",url:"./tags/git/index.html"},{revision:"f7367ba92384d1bed5a3ad7330f7aeb4",url:"./tags/hexo/index.html"},{revision:"7e866a19be633c6c871effb7b4cbf333",url:"./tags/html/index.html"},{revision:"bc04539cc164e725e150da210d7d1429",url:"./tags/index.html"},{revision:"65d3757ca934b8c03d6a91c326a4745f",url:"./tags/javascript/index.html"},{revision:"1f5d739029d2a7ceb7605fa920e2432b",url:"./tags/node/index.html"},{revision:"02857a0393edea313c0c9f67a1161149",url:"./tags/npm/index.html"},{revision:"cf4ba621b274c9aa0ab749b924287bae",url:"./tags/react/index.html"},{revision:"aa6c50b11931bdf46359b6a05fe49151",url:"./tags/rn/index.html"},{revision:"4bbf4d507b172ee1c99f9098f9803ac9",url:"./tags/tensorflow/index.html"},{revision:"21ae57fc90a9ddc41d5dae2e35c2ffb0",url:"./tags/typescript/index.html"},{revision:"8d7bee26906697efce6df04daa59d68a",url:"./tags/vercel/index.html"},{revision:"71a54e63354c22f11054d7311e654854",url:"./tags/vue2/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();