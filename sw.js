importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"tennesseesunshine"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"911a48bc7ecd30099199b2da38ab82fb",url:"./2019/08/08/hello-world/index.html"},{revision:"35e84183542b09b0a3779a9b5fd95dc5",url:"./2019/08/10/category/index.html"},{revision:"9362e15d3c0584a4d9eca4be2d349212",url:"./2020/08/22/callChildComponentMethod/index.html"},{revision:"e3b051dcbdd8930c131ee48d48d0ca97",url:"./2020/08/24/howTheBrowserWorks/index.html"},{revision:"81867b4521e3de4c38e1274dedbf8fde",url:"./2020/08/27/eventLoop/index.html"},{revision:"321b6a5e8729ce45509d3d61a962b984",url:"./2020/09/06/reactPrompt/index.html"},{revision:"119d38e6adfd0d26be3035867e89b099",url:"./2020/09/14/checkPCMobile/index.html"},{revision:"e76f10267a7001fd950bbdd7eedcc9ff",url:"./2020/09/15/gitSummary/index.html"},{revision:"2aad2559615dee33181df136a16d7dc1",url:"./2020/10/21/browserDownload/index.html"},{revision:"dfb71bacb208c43fcf2f5f2f6f2da476",url:"./2020/10/24/gitlab-ci/index.html"},{revision:"006686a45edd4047124c9edaca53f4ab",url:"./2020/11/05/lazyLoad/index.html"},{revision:"42722c4bb2c8c7b47eb0b91eb665a7f3",url:"./2020/11/06/anchorSetting/index.html"},{revision:"8273b8ed92935489e496498ade7755d0",url:"./2020/11/08/vueVersion/index.html"},{revision:"de427f61107fc34a56a5e130d4ace142",url:"./2020/11/22/TypeScriptUse/index.html"},{revision:"26360b4b19348714dfda456cd8190ec5",url:"./2020/12/21/replaceMomentTodayjs/index.html"},{revision:"e2c5745016bd7ea9144dc76ca38e9a6c",url:"./2020/12/21/umiUseIconfont/index.html"},{revision:"3f57e90ebb2e667273669af3075cc37e",url:"./2021/01/01/uploadFile/index.html"},{revision:"da318f4d69b2f939e7d383cec545f3a2",url:"./2021/01/03/useContext/index.html"},{revision:"1ae4e76cd3ddb6d11786ff54e26b4c96",url:"./2021/01/14/concisEventBus/index.html"},{revision:"8bdb6503d7054cce449471962e1e9970",url:"./2021/01/15/jsReduceFunction/index.html"},{revision:"da7eeff6133e9583d6a8fbb17c6ef343",url:"./2021/01/17/pipeAndCompose/index.html"},{revision:"dd397c67cf25daa7c7a7c235686140a0",url:"./2021/01/25/markdownToHtmlLoader/index.html"},{revision:"8bf754e1b86dd8179b22d854a71d822c",url:"./2021/01/26/markdownToHtmlLoaderOptimization/index.html"},{revision:"2d2542ee30ac943d435843b8450a5f7e",url:"./2021/01/30/webpackDynamicLoad/index.html"},{revision:"8d659426edfac59da5ff340c6de608ad",url:"./2021/01/31/website-realize-pwa/index.html"},{revision:"0e88034eecf73107d5f8e30a1d0db25b",url:"./2021/03/01/httpCache/index.html"},{revision:"c3f48af13a9eea21a77548bb5f82a654",url:"./2021/03/06/showMeCode-1/index.html"},{revision:"0eb522182d4b8910cbdcc710096ba3a8",url:"./2021/04/05/http2Notes/index.html"},{revision:"3499e7791e208690fe366ff980e0084a",url:"./2021/04/26/webPerformance/index.html"},{revision:"ff132b95c4a8bf61c6a51efee4ecebc9",url:"./2021/05/14/sortByASCII/index.html"},{revision:"9d0b63c930f68f9ccfd94a2cd7f73c63",url:"./2021/05/15/miniRegExp/index.html"},{revision:"aa200bd7f97810e000c5db0a771e339c",url:"./2021/05/26/myPromiseAllAndRace/index.html"},{revision:"b400455c76d274dfbdc92b7945ffe14c",url:"./2021/06/13/promiseResolveReturn/index.html"},{revision:"e18bc34a5b7422656f95bf7560f6552a",url:"./404.html"},{revision:"4e0f8b2f3fb110d5ebb635657a695f6d",url:"./about/index.html"},{revision:"2f4eec8053be3125cb345adffb578dcb",url:"./archives/2019/08/index.html"},{revision:"2f4eec8053be3125cb345adffb578dcb",url:"./archives/2019/index.html"},{revision:"2550f908f0eb0fd50db1496301abccf7",url:"./archives/2020/08/index.html"},{revision:"07572e1150007a8b3094a50bd06d17dc",url:"./archives/2020/09/index.html"},{revision:"5678bcdbd07547793c3d6c14115d9c8f",url:"./archives/2020/10/index.html"},{revision:"707f58d79b618f17ef7a6acde9f76a35",url:"./archives/2020/11/index.html"},{revision:"8f20913d053fc5890f017483c03394ce",url:"./archives/2020/12/index.html"},{revision:"d70c3758412a1de9e474c396b407dac5",url:"./archives/2020/index.html"},{revision:"5d56c1ccef1427adb53233096e1f32b0",url:"./archives/2020/page/2/index.html"},{revision:"0fc72a9606104efada65c6a60df55259",url:"./archives/2021/01/index.html"},{revision:"61e7ead2bda0ddd1d334f6e7a76dd9ec",url:"./archives/2021/03/index.html"},{revision:"1d7648b6730e08153bd157e291dec7ca",url:"./archives/2021/04/index.html"},{revision:"d83d296867f9b14fb5a99001d3777dfd",url:"./archives/2021/05/index.html"},{revision:"973258a67be87d551ae2bdb62483e16e",url:"./archives/2021/06/index.html"},{revision:"b3c2661eda7ac678b5d8feac6562961d",url:"./archives/2021/index.html"},{revision:"f1ee31ba555f2a846720f91992b1b8f4",url:"./archives/2021/page/2/index.html"},{revision:"e4b1ee436ea79e68df0577220f099c76",url:"./archives/index.html"},{revision:"e2fa8ff2104b8d949822acedabcdc54c",url:"./archives/page/2/index.html"},{revision:"051be687ceead14673bef1b178f49e8c",url:"./archives/page/3/index.html"},{revision:"80832f393dec4eae20ea911a005327df",url:"./archives/page/4/index.html"},{revision:"20a0663cdeda7db5b2d1cd0d5fdd940b",url:"./categories/index.html"},{revision:"5ce280d86637a41c57fdc51fd463237a",url:"./css/gitalk.css"},{revision:"dc11ff6add96c5aeae79e69b778f19cf",url:"./css/main.css"},{revision:"c4023a79008f584a9018aa81745a0dd0",url:"./css/personal-style.css"},{revision:"d774848e036c8b3415124c0f5fa191c4",url:"./index.html"},{revision:"df6699be634b89c020e50370f868f37f",url:"./js/boot.js"},{revision:"d19f1aa40bdbdca2ffbbea5d6525afe4",url:"./js/color-schema.js"},{revision:"b191fcef450414f12dd272f9a75b4576",url:"./js/debouncer.js"},{revision:"6c5f9959062cebd85db375e32e736201",url:"./js/events.js"},{revision:"cf2320cf7a65c67911b1fae9bb4958f3",url:"./js/lazyload.js"},{revision:"eb5eb5f71bdb5d50dbf8082e64bfd0e6",url:"./js/leancloud.js"},{revision:"53461574609e41159a714670d9b66c0b",url:"./js/local-search.js"},{revision:"93fa930e12b7596433529edc1b5458df",url:"./js/plugins.js"},{revision:"3eb420fea7d1d765cc5152f23a1861a3",url:"./js/utils.js"},{revision:"b5f3452bff6af473afc6ec1169990093",url:"./lib/hint/hint.min.css"},{revision:"ba9634090e73a05eb8f81bf7845aa202",url:"./links/index.html"},{revision:"c9a69c850d09b084cf88ee54449d39c1",url:"./manifest.json"},{revision:"b8ef2bcfe68c795d9fa19ca1df7b0a3d",url:"./page/2/index.html"},{revision:"d9b2a2400b0a03ea8ac08c0b87d9a994",url:"./page/3/index.html"},{revision:"6dc52fec9d01ba5f0b3f8c4fc4a29d87",url:"./page/4/index.html"},{revision:"5024c98a09002895afd135c7bff99ac2",url:"./tags/缓存/index.html"},{revision:"e40b64cd3fb7603b191ae8d4368fa81c",url:"./tags/浏览器/index.html"},{revision:"2e2bb7dc78be9acab9b5f575fe9fc221",url:"./tags/事件循环/index.html"},{revision:"b950be35934353311bab33a699ad6fd4",url:"./tags/性能优化/index.html"},{revision:"26822bfabc0215b2be475f155c08a46d",url:"./tags/正则表达式/index.html"},{revision:"d290643d49200676351ce2941807740a",url:"./tags/git/index.html"},{revision:"98c5aa44604683ba3f1d34ae498bd859",url:"./tags/gitlab-ci/index.html"},{revision:"b0b54b8f7e37486bd3186b4e69b92f9e",url:"./tags/h5-api/index.html"},{revision:"d7e76f14da2102ee4d29b3e24ec8b440",url:"./tags/http2-0/index.html"},{revision:"ce976f833ac77850528694fe787d05ff",url:"./tags/index.html"},{revision:"1ad8a46e029162911b487c61663d8053",url:"./tags/IntersectionObserver/index.html"},{revision:"66d8271285f2270e397b412ff303fcf3",url:"./tags/javascript/index.html"},{revision:"4028a47de666f77ab0ab94820bfea0a3",url:"./tags/Promise/index.html"},{revision:"4cbd4d1f769885f96cba6ef3a210d4a4",url:"./tags/pwa/index.html"},{revision:"081be162d89a234a16efa2792b30116b",url:"./tags/react/index.html"},{revision:"413c3f5feff2194b139231015c57a7c0",url:"./tags/scrollIntoView/index.html"},{revision:"cba457178e8f6dc600bc3dc9ab2140fb",url:"./tags/TypeScript/index.html"},{revision:"12e6ca120d42e4b2d2108457ff4c1375",url:"./tags/umi/index.html"},{revision:"95d07bd97095e86a38bf84d6b67b00b8",url:"./tags/Vue/index.html"},{revision:"a9d50a12fef3d50bcb795410223e5fc5",url:"./tags/web性能权威指南/index.html"},{revision:"2dfe4735a1668c5026ba6253fb693508",url:"./tags/webpack/index.html"},{revision:"ca32c69731955be2dd14ab9a6e7029e2",url:"./tags/Workbox/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();