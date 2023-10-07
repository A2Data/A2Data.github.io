/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b31730fa3becb74ca686282f842d6671"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","adadd478ebea21017a5c7e9fc105cf04"],["/archives/2019/09/index.html","de017138502344b9d4a999d85cfec72b"],["/archives/2019/11/index.html","cafe2f2e5863e6962a9545584afecdc4"],["/archives/2019/12/index.html","384cb64f1de7f611ad35dbf4bdba0080"],["/archives/2019/12/page/2/index.html","fece6f8488634bd960e0e4f3f7d599a9"],["/archives/2019/12/page/3/index.html","5b6274518fbf3fb3ffac5c3a905e9145"],["/archives/2019/index.html","3b41560a4cbf75c303cb6e0cf949931c"],["/archives/2019/page/2/index.html","d01d7f2fd6ed01894cb98b850483e320"],["/archives/2019/page/3/index.html","ac82aadc486c6b2d45d264b3c08ebdb0"],["/archives/2020/03/index.html","014a9aac21e589e04b36d5404e84fdcc"],["/archives/2020/04/index.html","dbbf8cb85fe83df305f2e33b9e5692f2"],["/archives/2020/04/page/2/index.html","23fb90a244d27ea67665a6283350e3ae"],["/archives/2020/05/index.html","52c9c8eb26c72525965b267602f68a71"],["/archives/2020/05/page/2/index.html","c48e8124ada3ea77113ed9ce7825096e"],["/archives/2020/06/index.html","5924d72a2097d207c488874a2360a59f"],["/archives/2020/08/index.html","98052cf6ba870dc25712ab7688404292"],["/archives/2020/09/index.html","82267e941ef93159178933fb5c66e41d"],["/archives/2020/09/page/2/index.html","959800f780390d54e69f6311484f6ce0"],["/archives/2020/11/index.html","1b872ccd7cf03eb8a9247b453a6e63d2"],["/archives/2020/11/page/2/index.html","1dba88fd61972d9393ed756cf43f6dae"],["/archives/2020/12/index.html","b97abedfeca5c475debbd6ea49b147d9"],["/archives/2020/index.html","a1a686f9edb43a8dc3443d4d1f608778"],["/archives/2020/page/2/index.html","2dd8e51abcfcc1f3c7a2d2a7fbe90947"],["/archives/2020/page/3/index.html","7830ff8bf6013d361bd092a83aa57163"],["/archives/2020/page/4/index.html","e4f45eac2c0d74dbcad3023b751b73b3"],["/archives/2020/page/5/index.html","7202eadb32056975f48ba96481218a0f"],["/archives/2020/page/6/index.html","aa2a964635661f1b08d686b2e78c7a67"],["/archives/2020/page/7/index.html","ce5a67ecb5cfa6dd3c512d8f299f411d"],["/archives/2020/page/8/index.html","7413e3b25fc226aba71fde0a96e28215"],["/archives/2021/01/index.html","83d573e89db109433f7298469731afcf"],["/archives/2021/index.html","2e904ad74ddafd9293ad2bd32624727f"],["/archives/2023/03/index.html","fb91bd4b1d68917cacb0df50400adc12"],["/archives/2023/10/index.html","52558a885299c79fdd8f234033844f04"],["/archives/2023/index.html","53192c6f2c2920e0b6c1507f31bc3da0"],["/archives/index.html","7bbd9d992218a8ddc3eb9ce61c63bc72"],["/archives/page/10/index.html","9a765bcc10369da711c4d1ce82156f8e"],["/archives/page/11/index.html","9a765bcc10369da711c4d1ce82156f8e"],["/archives/page/12/index.html","9a765bcc10369da711c4d1ce82156f8e"],["/archives/page/2/index.html","ad277d7a01c039cd5287daecca82ac1d"],["/archives/page/3/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/4/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/5/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/6/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/7/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/8/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/archives/page/9/index.html","2e6b1c707f324afce9af6e973685c1aa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","2ed9227e112bd9b30f2d3a603a636108"],["/categories/DataBase/Mysql/index.html","fd28fea010e94e8e09d44dd45d8688d4"],["/categories/DataBase/Redis/index.html","426bd30d9a77164ad2b20bb0943a0445"],["/categories/DataBase/index.html","7010c48075f0a520d37c22c2efafe70b"],["/categories/Git/index.html","54886c46b1c211a4a7ee069ef7c51c91"],["/categories/Hexo/index.html","e9c3a12ebcc1136f55adfeb61eaa46f6"],["/categories/Java/index.html","ffbb2ebd16452a7566aeb21d380948b6"],["/categories/Linux/index.html","ae057d6a754c2ce85734d154b29e65d3"],["/categories/Linux/page/2/index.html","a38f796a4c4ba366a9920ffb7139f59a"],["/categories/Python/Anaconda/index.html","23586658dd1efdafe383837a48db5d55"],["/categories/Python/Python入门/index.html","42d18624316b33e6e56ce63d0aea1733"],["/categories/Python/Python入门/page/2/index.html","eac56cc1bb55097ca978860ff188cf83"],["/categories/Python/Python速成/index.html","b6ce32415f8991c6e79fe2f20c2f3892"],["/categories/Python/Python速成/page/2/index.html","39ece36c84512867bde817df1994ad93"],["/categories/Python/index.html","2f1db8f378aed219b46355c4713f3ed7"],["/categories/Python/page/2/index.html","d61b4f330d6d31406bfdecf673eaead9"],["/categories/Python/page/3/index.html","4d634db6098f2fa42c9437305867ef85"],["/categories/Python/page/4/index.html","85226f6205442d8ed9d0c69737e4c5de"],["/categories/Tools/index.html","7eb6f165d528ca0fe119955c5f594ca0"],["/categories/index.html","2737f15e723c41c39ed2126bcc2d00fb"],["/categories/大数据/index.html","400af80679613e08a49bcde36ea15f4a"],["/categories/职场/index.html","3f92ee0d75debf633c397aca12ee431a"],["/contact/index.html","5b8102c7c794a5b03800df44230cc14b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","80979539f9d20599a3d0c1f05ac194ee"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","bc773c82e7039dbdbc549eb2a94fecb9"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","a486ecd934764ac99d59808bf594bdb1"],["/page/10/index.html","a2272d7fecbbd6b8b90524036988fdc3"],["/page/11/index.html","2f10645a54260b4f2623f65557dcdee3"],["/page/12/index.html","34b0690cbe4e5a465eb98bafe03f5689"],["/page/2/index.html","f633ec98be429f7d41745b0154449cdd"],["/page/3/index.html","fe5a06d2ad422905c0ed8cd77dcbeb9c"],["/page/4/index.html","44561b86fd506caae14373dae9d7bf31"],["/page/5/index.html","e59b039960bdba8060cdbd92c0d00bbb"],["/page/6/index.html","10c6f13daaf5b45d4f3de0e4119fcf16"],["/page/7/index.html","8e99db1984a0b8e41180066bff30d562"],["/page/8/index.html","d2aefa385176b42e9d77eae2da5d65fb"],["/page/9/index.html","3d4612361946c6aae0501cf74667bdaa"],["/posts/10415.html","debdd2774bf08e18f0f4f988a2224966"],["/posts/10537.html","4d515c0b61feef447f7ff1e91a6745f4"],["/posts/16550.html","47b83454b3a0909efcb3e3c05c7d78bb"],["/posts/16586.html","ca99558d9336b7307cddf197f23c1821"],["/posts/17415.html","317d01c125daaded10c5c552153eadfc"],["/posts/17683.html","24747355daf6e198e688ebca28156516"],["/posts/18321.html","2cb53a8b9ff8b13584b960eabb223f75"],["/posts/18572.html","77bc9d80646726961d421ed6d740429b"],["/posts/19a88b12.html","e0e96d3b9350afce2e9f67ad8bda1f64"],["/posts/1d1dff0b.html","3caf687fd93902c1fb78db1f4df36240"],["/posts/27081.html","72ce8ea638c1cbed399bca0149206b7c"],["/posts/2834.html","7c247ac67c0c506df3d3c34593df4202"],["/posts/29055.html","28efd64aea286453645663e824034e55"],["/posts/29966d.html","01bd176f03be8d9402616dabb7238940"],["/posts/2a327ad2.html","3ee5d3ac922215c2524c1538b55ff470"],["/posts/2b36786b.html","cd019476827434a4bb9fcf0589b9893d"],["/posts/30675.html","1bff97aacd91c6f86a088b7b8b332a9d"],["/posts/30873.html","bf7a8a167173db66827ae3110954cd21"],["/posts/32274.html","1d5d42a54fca8968827546a19d77b36b"],["/posts/34708.html","ff849243f6d17bbdeba4a97acac220c5"],["/posts/34771.html","9e809a7fec8a15adedc061de5289fb02"],["/posts/34946.html","b2957125313aecc19e04c20b548d3fa5"],["/posts/36204.html","17a1c2ebac5ae993ecddf62afb82fe19"],["/posts/37390.html","bbb391c294d937b89d9bd09dcedab739"],["/posts/37426.html","04abe6971bf2655438ec8ee12a2c1fff"],["/posts/39508.html","546a8c4dfd2ea9ce00416811a0de477a"],["/posts/39704.html","a3022f223d3edcea20c58f256ed9dce0"],["/posts/3fb6e39.html","3bb7189829c6e9a775ba915f59d47a8b"],["/posts/40711.html","74818a6ead10481d72b86251d18f5cd1"],["/posts/41055.html","12e0a8d6b85963715623a731c0881a69"],["/posts/4136.html","8fc8a6f4997a4d20726cbd70c377838b"],["/posts/41382.html","09ca18c1a2e443778197086dd7f1e952"],["/posts/43150.html","ef1c6ded79451a0c7c4e01a237f93104"],["/posts/43249.html","f6067a0910993e1ed39ca01ff523c875"],["/posts/4354b039.html","1647b0036102578db48b0c97eef93a40"],["/posts/43857.html","80149c399b31140cbb4851e96db87da2"],["/posts/44947.html","e5ec54f304b0b98eb551d8f186932fc7"],["/posts/45997.html","7ad311873465a0a24ae17ceda0f7c7ee"],["/posts/46411.html","d62f7552705d9218a7f5d83ab231816c"],["/posts/47220.html","bb2d0d37528116016255fbddce662c9b"],["/posts/47936.html","7af8bd48b45134c9af16d107552e17f0"],["/posts/47985.html","70c369e855f4dd3265a14e1b188639e1"],["/posts/47ce27c8.html","4cd1d0e74ffdee56910dbc29b18bd1ad"],["/posts/48061.html","c47306621b97bda7831772aff28848b6"],["/posts/4a17b156.html","2b25ff82b19a1877d07c92f155abafb9"],["/posts/5010.html","78af3b3ee65bc9f6b6cfeddebe1cbb5b"],["/posts/51417.html","90c8713c57c7d3b405c2331b296b344b"],["/posts/5144bcf.html","0958adb04ade170e5ad1fcfb8b154f95"],["/posts/520.html","bfb8e47e7fe8aa01608ff1d52c5edbcc"],["/posts/53d1dcfb.html","a257a02bfd9c211273502eb9811b36c2"],["/posts/55248.html","085de4fe630a8a6559343a0819076779"],["/posts/55860.html","54e673c4fb1902d3273b29339aafcbb5"],["/posts/58489.html","f48ab13e94587d91f89c48eee9e4fdb4"],["/posts/59346.html","bd38325e67f947eab894ac91684f60a7"],["/posts/59977.html","f4df5b988fd6fd4d7069025063ad32b3"],["/posts/5c0875d6.html","a0085f36986330e18df94c0b6d83bfc9"],["/posts/60364.html","738c6e922f1e983a4450c67ca1a1e767"],["/posts/6059.html","fe8b9f6ddcd94b4c8e0a2af82118ba72"],["/posts/61794.html","cc7f0bd680b68c3e2ae3eff76ec94d4c"],["/posts/6275.html","401099161b8295c581f6958b5cd73d90"],["/posts/62910.html","82402b088491dc9ae4950a53d6952ba0"],["/posts/62cf8a54.html","77c2e2662e8ede3591b1b7ee7c04ed2c"],["/posts/630.html","b969ed3c19259570f5fa59f2f14a7d83"],["/posts/64423.html","622d8873c4c0b315d5951a7fbfb9f809"],["/posts/646dbc2e.html","31b8d0de696a4db5fd71a2944a412da1"],["/posts/64846.html","085bf47e343abc82f631816e3eb941d9"],["/posts/65aeda8b.html","2fc5088f951a0e215456a095730b09c5"],["/posts/6637aa6e.html","ec67108e5fe1420124ce567c7fcf70db"],["/posts/6656ad65.html","3dc5387af050a30bd30d64611cd5d0ad"],["/posts/6a4da3dd.html","b627d441120f32f7688a5555c834da29"],["/posts/6e2faa04.html","02573b1d9f1f62592af8b037330d5919"],["/posts/6f521982.html","3e4296e825b458a8607d53137a4ae302"],["/posts/71dd948a.html","929f5fe5020f9b7a0f9a8909889e9bab"],["/posts/773d5f8c.html","7a7c7de4b1d67a158ba9922bef7f67e2"],["/posts/7a179f78.html","b9d46a9e175b56a476d3159d36786ebf"],["/posts/80bb221f.html","901561b2099dd16aae3f9847027a8cf5"],["/posts/80ca38c0.html","703010ce655286c199b9f2e6710534a8"],["/posts/818bed05.html","beca0b6e68b8daeb94787c7604787994"],["/posts/8573.html","f30374e4f426491457ca97bc26ab836a"],["/posts/8589.html","3c4dd207e75d73923abf401b93eba558"],["/posts/88fead8.html","6ca2edf37dafe9fb28c12f3b0db17980"],["/posts/890d9674.html","cd43c871907ea9ea7ded828857ece1c9"],["/posts/8b540f5a.html","0bbe9c8611883f3066e04219224bf587"],["/posts/8c0ed688.html","e63eb34d4843916d798aa05ca7fd23c9"],["/posts/8f004046.html","5fd846b0bcf90ed06d6609b40d5d361b"],["/posts/8f19a96e.html","b4d71bf77af16554b56544a98d724736"],["/posts/901b8cd5.html","1c4413bf0cef984a11d776462c3c90c5"],["/posts/9618.html","4f92f926b3db199e534349a73de9e1db"],["/posts/9812.html","4c290178a2fdaffa9cf25c10f255f02c"],["/posts/9e565f9f.html","dfa4de027bbc3fafaaf8a7bd2cd6ddca"],["/posts/a9378efd.html","1a729336c5c15dab18f5d291c6dab7f9"],["/posts/b11c450a.html","0ec670db6caa57570055500cb87d0753"],["/posts/b572816f.html","052211231bd9c7acb205aa7c8f8600e8"],["/posts/b6595881.html","c0e492906d94eedf8cf852a4d79dda7b"],["/posts/b794162c.html","6005a88870bc491a7afc1d9ad3048954"],["/posts/b7cd6609.html","d99f6af990fb1d812dc9c6540e7e15cc"],["/posts/bae4ff13.html","507b7bdeb66ac1ee7a7b2f2409fb2521"],["/posts/bb9346ce.html","3daf492563dc19d90ed0ca696537440d"],["/posts/c54e1e5.html","aabd3475b9884e53bd21730146025bf8"],["/posts/ca165cd5.html","14d22e0ae634ffe436e4d8e131bdd91b"],["/posts/cc50857e.html","92782e07a584ffcab7eac0714f72756a"],["/posts/cfcef26f.html","8aa924fcc67dfc039ad84f020aeec6fe"],["/posts/e4f3239b.html","3a4119aa33b676b2973e1411ff980188"],["/posts/e73bc34f.html","0313ed877fe8db9b7ec9d154cdd4753e"],["/posts/ee789513.html","29d052790e5ac7f17894d14f0e57d0d5"],["/posts/f893cfd3.html","70171983273217569390acfb61f9deb2"],["/posts/f8d580eb.html","6f172256885208e4159fce4af2a25364"],["/posts/f92cb63f.html","53c84a4b8e2a83598e5d2b1a2b14b2c2"],["/posts/f9586000.html","a00aadb9ce5cd0263491b892fddf31a5"],["/posts/fbd6efa0.html","f0d10d88c02d77c9932557e1534ddc77"],["/posts/ff2330ff.html","d96a052805a9d7ebc54d38558b8cd25e"],["/posts/ff995e29.html","5af6bffa3cfdb208f536cf68476fa338"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","11b34530126038d89ac59f534a90f610"],["/tags/AWS/index.html","006cdac457e22039979a2fbcf58f23a9"],["/tags/Anaconda/index.html","ea5ebbc752e784d8662eec74cfcd02b4"],["/tags/Edge/index.html","66f26b58de39e4542035c9a2462d916b"],["/tags/Git/index.html","6463b521c6cca04b9a749a9282ce0c8b"],["/tags/Hadoop/index.html","2e2571a9808b7c039fd287fe09fc1ddf"],["/tags/Hexo/index.html","cb156f99ade43c6f6020b29c52ee81aa"],["/tags/Java/index.html","c7224597322d44da34d6bf3d1750fa21"],["/tags/Linux/index.html","2e188e39ede090ba5882118665e657a4"],["/tags/Linux/page/2/index.html","04a11ca441e4288f3df446bbaee4e0a0"],["/tags/MapReduce/index.html","78dd3edde91ccd29a12b68658e92fb22"],["/tags/Mysql/index.html","88a33bdbb3db409dfb27d96ee1838407"],["/tags/Python/index.html","21bf34731800e984f62f9292dc372e8d"],["/tags/Python/page/2/index.html","75b55e92fb3617e64c453751dc71c6ac"],["/tags/Python/page/3/index.html","b333acb98efaefe745afbb54a78d6900"],["/tags/Python/page/4/index.html","9d32582ebc468f21915f7c091e97539f"],["/tags/Python习题/index.html","ac8a3705e2abd0bbb1d3174b943dbe0a"],["/tags/Redis/index.html","536670d66ad93c3bac6dce8c942853a6"],["/tags/Tools/index.html","559ab37ce3a91ab91944b6ef101c499d"],["/tags/Win10/index.html","ff9bd641b3efb7d91a27114262aa98df"],["/tags/Windows/index.html","9e889f7853b3e754a676416a5aafa159"],["/tags/index.html","924897b1c19f46f33662cb4eccba38f0"],["/tags/任务栏神器/index.html","03f4c9d66b848f0b4481356390185a53"],["/tags/图床/index.html","3e09af6815071711d344cf9e78ebcacc"],["/tags/数仓/index.html","1ac245654d0aeec2fd0b6a88eceec696"],["/tags/数据可视化/index.html","1821a37ddb9022a81fe7bb99158fdcbf"],["/tags/数据可视化/page/2/index.html","230f2a52bb44757ca32c425046f877dc"],["/tags/数据库工具/index.html","50ccdb5cddd2ed7d140283759292b723"],["/tags/毒鸡汤/index.html","a1b7db54c63771edd07036aad87d7c4f"],["/tags/环境搭建/index.html","9b0ba8285d2e61380c120a650ce2fb0b"],["/tags/资料分享/index.html","1e2aadd7283645ab85c6cd5bcaa7939b"],["/tags/面经/index.html","0efd1fd66292b6cc6478be1806e32f06"],["/tools/index.html","aa0ef4b1e48b1ab771ddae5958cd09a1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
