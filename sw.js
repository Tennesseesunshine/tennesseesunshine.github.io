importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"tennesseesunshine"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6919231c2265024fa69345aab1a4cfe8",url:"./2019/08/08/hello-world/index.html"},{revision:"ea1cb325e65e6c2648031cd77d0579eb",url:"./2019/08/10/category/index.html"},{revision:"f9439dbd56b35b4f4867a686ea42401e",url:"./2020/08/22/callChildComponentMethod/index.html"},{revision:"917f543d79812f954288a592af20a2ae",url:"./2020/08/24/howTheBrowserWorks/index.html"},{revision:"d7285c7e24a2550a15641d19369b6341",url:"./2020/08/27/eventLoop/index.html"},{revision:"dee564570106b3e06e3d310d843f6798",url:"./2020/09/06/reactPrompt/index.html"},{revision:"97d55f86b3631fc1f741e2f7b01d8d70",url:"./2020/09/14/checkPCMobile/index.html"},{revision:"bce90f918c478b490d08384bddc7a55f",url:"./2020/09/15/gitSummary/index.html"},{revision:"c9f4ba8beb84804fbd62dc64068e6ec6",url:"./2020/10/21/browserDownload/index.html"},{revision:"2d43a22ec748c40a95ea8d080f7f6580",url:"./2020/10/24/gitlab-ci/index.html"},{revision:"93bc7552a6baca902c2ed6d382218cf5",url:"./2020/11/05/lazyLoad/index.html"},{revision:"1a8b9e7ef133e8642b69e87c248835ed",url:"./2020/11/06/anchorSetting/index.html"},{revision:"4c582195d6dd25889a3936766165adca",url:"./2020/11/08/vueVersion/index.html"},{revision:"625dd1ce4e44faee6f39613b31d28b78",url:"./2020/11/22/TypeScriptUse/index.html"},{revision:"8c020f525ea79c166db2d840a72dde75",url:"./2020/12/21/replaceMomentTodayjs/index.html"},{revision:"fdfec03fc8bbbf267848ef13ab33b7d2",url:"./2020/12/21/umiUseIconfont/index.html"},{revision:"049327225d29480bfa7a2e2826a7bbc6",url:"./2021/01/01/uploadFile/index.html"},{revision:"35cb10a0106c3eb96e2a8320e8945f09",url:"./2021/01/03/useContext/index.html"},{revision:"34a665e1479f1c7968d4816c3d4ccb7d",url:"./2021/01/14/concisEventBus/index.html"},{revision:"78d458009f703cdc2e9396d5cc7687fc",url:"./2021/01/15/jsReduceFunction/index.html"},{revision:"4d8a92f0fe14fb29a51836c6c6bd5845",url:"./2021/01/17/pipeAndCompose/index.html"},{revision:"b7620c687e72e9358e1a5db542a78c05",url:"./2021/01/25/markdownToHtmlLoader/index.html"},{revision:"d4b9073a70783d9c8d89a75734b02610",url:"./2021/01/26/markdownToHtmlLoaderOptimization/index.html"},{revision:"9b7c0dc540fc94ccb07d63be26f8af4b",url:"./2021/01/30/webpackDynamicLoad/index.html"},{revision:"c4bcf8162d1868e48d8bbfa5aba9f21e",url:"./404.html"},{revision:"02ceb55908890fe4ae5f6b90918a4b12",url:"./about/index.html"},{revision:"c1bfd057d17b50b49d6a2d867afd38e3",url:"./archives/2019/08/index.html"},{revision:"c1bfd057d17b50b49d6a2d867afd38e3",url:"./archives/2019/index.html"},{revision:"1e4a104e2867326b2809348ef2b9fb86",url:"./archives/2020/08/index.html"},{revision:"1fcad022c4337e2153a80b08fed98c1f",url:"./archives/2020/09/index.html"},{revision:"778a359bde66c97b83b70ee5552a1468",url:"./archives/2020/10/index.html"},{revision:"219c3e3a5d09ee583d6b956fcda44852",url:"./archives/2020/11/index.html"},{revision:"958f1ce07816907f5ce9d2fa1f5c2df8",url:"./archives/2020/12/index.html"},{revision:"34935e715b2200385a61b98f23cc3297",url:"./archives/2020/index.html"},{revision:"642c4101b3d8bdd88e67e5bb2579913d",url:"./archives/2020/page/2/index.html"},{revision:"ce7778ac38a18bd53f51a416520df2d2",url:"./archives/2021/01/index.html"},{revision:"ce7778ac38a18bd53f51a416520df2d2",url:"./archives/2021/index.html"},{revision:"fa851fffb72e98159e57799555467dac",url:"./archives/index.html"},{revision:"3d812eb90cc803f5261d09e02792c190",url:"./archives/page/2/index.html"},{revision:"800d76df46dd674c178674f656879871",url:"./archives/page/3/index.html"},{revision:"4123509bf3804429a8cd7d9f551e5907",url:"./categories/index.html"},{revision:"5ce280d86637a41c57fdc51fd463237a",url:"./css/gitalk.css"},{revision:"bcd5a9d71107724f10d026326c3540b4",url:"./css/main.css"},{revision:"c4023a79008f584a9018aa81745a0dd0",url:"./css/personal-style.css"},{revision:"8e6a22e37437983dbed13f6c379ec9a3",url:"./index.html"},{revision:"df6699be634b89c020e50370f868f37f",url:"./js/boot.js"},{revision:"d19f1aa40bdbdca2ffbbea5d6525afe4",url:"./js/color-schema.js"},{revision:"b191fcef450414f12dd272f9a75b4576",url:"./js/debouncer.js"},{revision:"6c5f9959062cebd85db375e32e736201",url:"./js/events.js"},{revision:"cf2320cf7a65c67911b1fae9bb4958f3",url:"./js/lazyload.js"},{revision:"eb5eb5f71bdb5d50dbf8082e64bfd0e6",url:"./js/leancloud.js"},{revision:"53461574609e41159a714670d9b66c0b",url:"./js/local-search.js"},{revision:"93fa930e12b7596433529edc1b5458df",url:"./js/plugins.js"},{revision:"3eb420fea7d1d765cc5152f23a1861a3",url:"./js/utils.js"},{revision:"b5f3452bff6af473afc6ec1169990093",url:"./lib/hint/hint.min.css"},{revision:"c113fe9eaffba3d56bf8e5f0652e1868",url:"./links/index.html"},{revision:"866f3609709a57b50a7d1fa7549771fa",url:"./manifest.json"},{revision:"04797a41cc8137c30891fc3ffc7b2b65",url:"./page/2/index.html"},{revision:"f2e52d44dccfb547fef539fea2c64d67",url:"./page/3/index.html"},{revision:"fe62f88634bd9d22f27513c9574dd00f",url:"./tags/浏览器/index.html"},{revision:"983afebfbe7d5400eac0f37906649028",url:"./tags/事件循环/index.html"},{revision:"c6efcd7b05a579fa00ec7da8581bab25",url:"./tags/git/index.html"},{revision:"7b76315cfd2ad79aa348671ce2d2a39e",url:"./tags/gitlab-ci/index.html"},{revision:"1cf6f9d02d70a2c7b7f78e569cc5e3f8",url:"./tags/h5-api/index.html"},{revision:"2144a886dc1b606fc7a6ae9e9807f944",url:"./tags/index.html"},{revision:"d89e6877528a82d79b4b438d075e4596",url:"./tags/IntersectionObserver/index.html"},{revision:"97d073d72380140a1ac3acbdda9423f4",url:"./tags/javascript/index.html"},{revision:"c0d8395d25d441eb373570222b45cf79",url:"./tags/React/index.html"},{revision:"b14d520ecf5e84466327197dde259990",url:"./tags/scrollIntoView/index.html"},{revision:"51abddb26f0267c633251c3d47f2b8e1",url:"./tags/TypeScript/index.html"},{revision:"98b25de19dfd9e61b7b853ce5d301f6c",url:"./tags/umi/index.html"},{revision:"a180d058ffef68c2a71db3b4a50d2131",url:"./tags/Vue/index.html"},{revision:"23d3e39f845c6cdd147535d3acfaf553",url:"./tags/webpack/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();