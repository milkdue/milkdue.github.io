const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"keyiqingxin"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d89fe873ccea3a669a2f97e86bb97e7c",url:"./262ac49e/index.html"},{revision:"532aea53f1012a5bc9ad8429009a7c8a",url:"./317ea436/index.html"},{revision:"3556ddaf96070b8d59d2367e6377c1f7",url:"./33c03019/index.html"},{revision:"8d7c80f9abcfdce837a370942fb278d5",url:"./404.html"},{revision:"178e5ee6a965b15a2fd2fe279aac5f7d",url:"./4fd0a8fb/index.html"},{revision:"fd228452c1a8c5e4728cf30a16dca1f7",url:"./5650e2f5/index.html"},{revision:"a98979e01cb99183e52aae8627aa71e3",url:"./56718f73/index.html"},{revision:"85570f11689505091cf9bb0a936b251a",url:"./73002bc7/index.html"},{revision:"d2d10a67f76f4f2bbef1ce70f622ced3",url:"./9b2de178/index.html"},{revision:"f9bb56cc95319df3c286ed4fb783a668",url:"./archives/2021/06/index.html"},{revision:"7d5fcdcec559f0e530fae55ad2334089",url:"./archives/2021/07/index.html"},{revision:"b9af9b4dc22d5a6009e3b106b02500a8",url:"./archives/2021/08/index.html"},{revision:"3f72d1cee25d7ae897cd62c6dc7c2682",url:"./archives/2021/index.html"},{revision:"066ec4fd378972841d2c3e4a28c45848",url:"./archives/2021/page/2/index.html"},{revision:"373acf839eed74a52e20cc5e7425f564",url:"./archives/index.html"},{revision:"1536ef0fe3e3d230a3f73e745afa9d98",url:"./archives/page/2/index.html"},{revision:"9a34f159c9a269d1919f28468262593b",url:"./baidusitemap.xml"},{revision:"124234840d8dcfc4787489d799aa9a45",url:"./bf0e4745/index.html"},{revision:"b69b9ae24354c0083db665bad6fcb782",url:"./c0add594/index.html"},{revision:"66c04ea5f22c9a336bf43a854fdc04f0",url:"./c314f6ea/index.html"},{revision:"c6b3d9a59af602b6a90a7fe7146d2d66",url:"./c7f33302/index.html"},{revision:"6223038376a895df301bbe899a09256a",url:"./categories/index.html"},{revision:"087bc9fa22a7660b04f46052f41afff1",url:"./categories/作品集/index.html"},{revision:"6516e8406760213ed6a8e80c46cb55cd",url:"./categories/听力练习/index.html"},{revision:"e443b75140cbfc79edf24c0b0c50f114",url:"./categories/学习-教程/index.html"},{revision:"ff7b744455ea9b3ba93760cb251f024f",url:"./categories/学习-教程/page/2/index.html"},{revision:"29a2eba7205c0d7293baf2cdd5509690",url:"./chart/index.html"},{revision:"a177d081ae45f7fd37c22417b01f30b0",url:"./comments/index.html"},{revision:"d5323324647bf28b0972072667e4abfb",url:"./css/commentsbar.css"},{revision:"2f9eb64da4e1c02ea58999dd901de932",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"379cc18291471c1ed7bdf5c9c9bad61e",url:"./css/index.css"},{revision:"4b05b21281b1742fe373e6cdb0b22b92",url:"./css/my.css"},{revision:"7ca5d51765ab02de5afcb6a3875f1413",url:"./css/self.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2e083676c2d4ab7876957e4d5141d9c1",url:"./df8718c1/index.html"},{revision:"a7be22d9441c83da9cb997a38fa80870",url:"./f5fee1ca/index.html"},{revision:"1ff588b2f823780a86b6f210c0b1b72f",url:"./friend/index.html"},{revision:"63369ddb5f765e26dc83c95776fd949d",url:"./gallery/index.html"},{revision:"b92175fe76ac76d7a64d23603695d5db",url:"./img/siteicon/browserconfig.xml"},{revision:"751307eff7f21be7ae081f4804284d0c",url:"./img/siteicon/README.html"},{revision:"1af9f2497466fd115ebe81a15dbefb20",url:"./index.html"},{revision:"a4a354d5bb6e9498079af37a32c5d3f1",url:"./js/github.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"76bebdc9c8f7b8bc55ffeabaca4fde38",url:"./life/index.html"},{revision:"7acde3158ed1109cac51b2a07415bd0b",url:"./link/index.html"},{revision:"2d6eb3c0ca5a2c366fb0537cb5d66bdd",url:"./live2d-widget/autoload.js"},{revision:"2596a8630c0801002b3dff127b50518b",url:"./live2d-widget/demo/demo.html"},{revision:"814084edfca521aea7c069da8e0698ad",url:"./live2d-widget/demo/login.html"},{revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7",url:"./live2d-widget/live2d.min.js"},{revision:"4043e88982a0fe93478345b7d443c489",url:"./live2d-widget/README.html"},{revision:"0b7a376fcfe30c01f259db9db538d637",url:"./live2d-widget/waifu-tips.js"},{revision:"8dd6573863792f6f2c2e57057d21ef96",url:"./live2d-widget/waifu-tips.json"},{revision:"5e4113d9e3cdd1773640d4a7f4e5bb62",url:"./live2d-widget/waifu.css"},{revision:"c20c7a23bf0fd7f9e8a6ee50f1a3e773",url:"./manifest.json"},{revision:"78c11962baefd0b0dbf00d49d70ce980",url:"./page/2/index.html"},{revision:"b6826a714f9a75da9f214b50a75a5385",url:"./search.xml"},{revision:"5e2bcafcd1b17d249684de41c86080cc",url:"./sitemap.xml"},{revision:"fa4ce18577591c993dd051709b6e3804",url:"./tags/butterfly/index.html"},{revision:"8011607b162d625117f2d76f967fe66d",url:"./tags/css/index.html"},{revision:"aea3c966684f87da7d7228eb2a647567",url:"./tags/git/index.html"},{revision:"d617c3d4cbad07eea179af4a83b10b4f",url:"./tags/hexo/index.html"},{revision:"7f251f971dec695943a7c8717d3e720d",url:"./tags/html/index.html"},{revision:"c6445dd5f56ddfbeceac9998c9f31e8a",url:"./tags/index.html"},{revision:"c715c84c652c4eaf3622f59afe4b2b60",url:"./tags/node/index.html"},{revision:"da93cada5e18bb801eb5a8b3c4890825",url:"./tags/npm/index.html"},{revision:"38e784109ca253123faf3a0c85a5dbab",url:"./tags/vercel/index.html"},{revision:"b0e04f6d1cf6fceb1e18b68ba396c61d",url:"./tags/vue2/index.html"},{revision:"2d3331b8f73ba732bd2c6b2ec2b854ae",url:"./tags/单词/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();