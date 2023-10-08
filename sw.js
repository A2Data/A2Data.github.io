/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b31730fa3becb74ca686282f842d6671"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","adadd478ebea21017a5c7e9fc105cf04"],["/archives/2019/09/index.html","52a61e5d1f948aba5f621e3da0c9e3a6"],["/archives/2019/11/index.html","32a8933f817db469ee5d5a66259d4ffa"],["/archives/2019/12/index.html","20176f9961382f80e8baa0995a4c0a02"],["/archives/2019/12/page/2/index.html","7d4fb3c78b8d12ef2fa7f88ffb6ec2c9"],["/archives/2019/12/page/3/index.html","3c707c2e9c371bdfe5052a3845ba0d58"],["/archives/2019/index.html","1a2d0059ce94bba56b1bcc7c72e54c7d"],["/archives/2019/page/2/index.html","9b7332fc01751633a88f1f9c696562ec"],["/archives/2019/page/3/index.html","07b17e8a407a7df627e8a1b11ef062a2"],["/archives/2020/03/index.html","7b637f312c76bfa7c8e144284e7657a4"],["/archives/2020/04/index.html","b346688e924ca9361781eb3636e5a403"],["/archives/2020/04/page/2/index.html","db46c1493cb135dbbcc3f3ece6aa217c"],["/archives/2020/05/index.html","fa2725fb619707aa672e8cf8a7f30636"],["/archives/2020/05/page/2/index.html","83938a04942bc129232d7120577d9c07"],["/archives/2020/06/index.html","d31b6c35a32dae5327204a5800d65f23"],["/archives/2020/08/index.html","0775d417b1bbfeda7205da25912f6471"],["/archives/2020/09/index.html","45685a078197c7b98665a8d19c2649c0"],["/archives/2020/09/page/2/index.html","a9cac6dbe03a497d0eb5556fcbc3f2a9"],["/archives/2020/11/index.html","9f32661ef780f8a649dec0ad7eb55895"],["/archives/2020/11/page/2/index.html","ed18df939ccb67c385fc62fe6ad50498"],["/archives/2020/12/index.html","2837b600996d5334053c726df703890c"],["/archives/2020/index.html","9b20fe141a5df60848cfd55469e0b1ff"],["/archives/2020/page/2/index.html","7af86f318bd896bb37047cddffca77cd"],["/archives/2020/page/3/index.html","1c6ecd971cbb4798e0cbbe9bbb5e638e"],["/archives/2020/page/4/index.html","1d0db92d0731abd6465afa084f5ab518"],["/archives/2020/page/5/index.html","b768a5275984785530c1ab8e442388af"],["/archives/2020/page/6/index.html","49e5fc9e851b3b93ada637c53a2aff5f"],["/archives/2020/page/7/index.html","ebcf52844a5bff401fd883b92b5e4b4d"],["/archives/2020/page/8/index.html","e7a6a73fc30ba1d5921b5a9799ec26f2"],["/archives/2021/01/index.html","d3c940b13f75b185070ec3e4d37487ee"],["/archives/2021/index.html","a4f067f9bc5e1dd78e2fcc9b206ccb44"],["/archives/2023/03/index.html","70e8c956ba6403ca7599ce8373a5efa1"],["/archives/2023/10/index.html","55ea926c360033a2733beaf52a619178"],["/archives/2023/index.html","e8bfddf713df76c6e7dcb7bfb9a922ae"],["/archives/index.html","fd646c14123ba03e38d1789fcf9fcad4"],["/archives/page/10/index.html","08d46ef5a5b44f381eafe579cddcf73d"],["/archives/page/11/index.html","08d46ef5a5b44f381eafe579cddcf73d"],["/archives/page/12/index.html","08d46ef5a5b44f381eafe579cddcf73d"],["/archives/page/2/index.html","5e711978ceaab48e8a8c9e5a79d0a8ca"],["/archives/page/3/index.html","5e711978ceaab48e8a8c9e5a79d0a8ca"],["/archives/page/4/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/archives/page/5/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/archives/page/6/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/archives/page/7/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/archives/page/8/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/archives/page/9/index.html","86c7680dfbd4f24f7d1464735d4fba8b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","2ed9227e112bd9b30f2d3a603a636108"],["/categories/DataBase/Mysql/index.html","d597c58e0dd246d38b7620b9e400222b"],["/categories/DataBase/Redis/index.html","cba7d542cb5c46b1f3828dbdb1c88f6f"],["/categories/DataBase/index.html","d8d0dc51d5a725dcb69d6d291a7d48e0"],["/categories/Git/index.html","3332998b6c92713818d1d9ccc9b176ea"],["/categories/Hexo/index.html","dc5b935c3940eaae6991e429450ff26b"],["/categories/Java/index.html","73074d39b4bd7ce2b37160df4b283c90"],["/categories/Linux/index.html","e7a1910cb432e1dee4e489fad67ed1fe"],["/categories/Linux/page/2/index.html","5a4681f96216c1a67c82727cd8fe15fa"],["/categories/Python/Anaconda/index.html","d8699aa195383a8655ce89349bebfcd8"],["/categories/Python/Python入门/index.html","28efdf553098923e002254ba731b78ea"],["/categories/Python/Python入门/page/2/index.html","3bb7ca107cb26cd295c8db76db0d0109"],["/categories/Python/Python速成/index.html","e82aa612d18cf3475ff9ace4477e1583"],["/categories/Python/Python速成/page/2/index.html","ac50c5768dfc72d1a1862278a147aa8c"],["/categories/Python/index.html","516e2953f670211d9326f2cd972a292d"],["/categories/Python/page/2/index.html","9656a8ae9b01bdbd5a643319b3b09359"],["/categories/Python/page/3/index.html","7500cb2fd55250d492c0f6b02a20ee6b"],["/categories/Python/page/4/index.html","4a5bcc67757141ee3f4841d6c40fba9d"],["/categories/Tools/index.html","6c25af83f12a7b6ff58e7f218875881d"],["/categories/index.html","2737f15e723c41c39ed2126bcc2d00fb"],["/categories/大数据/index.html","3632c319b7e411f20cbbf74a90202292"],["/categories/职场/index.html","7294330175ed57ea19093f684e9b8211"],["/contact/index.html","5b8102c7c794a5b03800df44230cc14b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","80979539f9d20599a3d0c1f05ac194ee"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","fabae7d049b73376b9b50876a23d0742"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","a486ecd934764ac99d59808bf594bdb1"],["/page/10/index.html","02adfc354f624d7f6513a25ce09eafec"],["/page/11/index.html","7df905a0d5737d37497f861fed3d0be4"],["/page/12/index.html","28e71784386e05d0672e47d47b8b16f5"],["/page/2/index.html","cecc5022bc673c8080263b038998368f"],["/page/3/index.html","ac051e69bc79f0264a2e55b0702f67ca"],["/page/4/index.html","7d1c35f3a4c71f46bb29a0c8097095b7"],["/page/5/index.html","4eeaad33a90637c14db74898d7bf53ae"],["/page/6/index.html","874d97d48b8deeb800f726fa2a1780bf"],["/page/7/index.html","e11c1bb619a65e6e67d72ef2f45af5d5"],["/page/8/index.html","14736d7c0520abf6256a306fb54c8b05"],["/page/9/index.html","356b9322104187b3d649bf7c9a8b0ec5"],["/posts/10415.html","debdd2774bf08e18f0f4f988a2224966"],["/posts/10537.html","4d515c0b61feef447f7ff1e91a6745f4"],["/posts/16550.html","47b83454b3a0909efcb3e3c05c7d78bb"],["/posts/16586.html","ca99558d9336b7307cddf197f23c1821"],["/posts/17415.html","317d01c125daaded10c5c552153eadfc"],["/posts/17683.html","24747355daf6e198e688ebca28156516"],["/posts/18321.html","2cb53a8b9ff8b13584b960eabb223f75"],["/posts/18572.html","77bc9d80646726961d421ed6d740429b"],["/posts/19a88b12.html","e0e96d3b9350afce2e9f67ad8bda1f64"],["/posts/1d1dff0b.html","3caf687fd93902c1fb78db1f4df36240"],["/posts/27081.html","72ce8ea638c1cbed399bca0149206b7c"],["/posts/2834.html","7c247ac67c0c506df3d3c34593df4202"],["/posts/29055.html","28efd64aea286453645663e824034e55"],["/posts/29966d.html","01bd176f03be8d9402616dabb7238940"],["/posts/2a327ad2.html","3ee5d3ac922215c2524c1538b55ff470"],["/posts/2b36786b.html","cd019476827434a4bb9fcf0589b9893d"],["/posts/30675.html","1bff97aacd91c6f86a088b7b8b332a9d"],["/posts/30873.html","bf7a8a167173db66827ae3110954cd21"],["/posts/32274.html","1d5d42a54fca8968827546a19d77b36b"],["/posts/34708.html","ff849243f6d17bbdeba4a97acac220c5"],["/posts/34771.html","9e809a7fec8a15adedc061de5289fb02"],["/posts/34946.html","b2957125313aecc19e04c20b548d3fa5"],["/posts/36204.html","17a1c2ebac5ae993ecddf62afb82fe19"],["/posts/37390.html","bbb391c294d937b89d9bd09dcedab739"],["/posts/37426.html","04abe6971bf2655438ec8ee12a2c1fff"],["/posts/39508.html","546a8c4dfd2ea9ce00416811a0de477a"],["/posts/39704.html","a3022f223d3edcea20c58f256ed9dce0"],["/posts/3fb6e39.html","3bb7189829c6e9a775ba915f59d47a8b"],["/posts/40711.html","74818a6ead10481d72b86251d18f5cd1"],["/posts/41055.html","12e0a8d6b85963715623a731c0881a69"],["/posts/4136.html","8fc8a6f4997a4d20726cbd70c377838b"],["/posts/41382.html","09ca18c1a2e443778197086dd7f1e952"],["/posts/43150.html","ef1c6ded79451a0c7c4e01a237f93104"],["/posts/43249.html","f6067a0910993e1ed39ca01ff523c875"],["/posts/4354b039.html","1647b0036102578db48b0c97eef93a40"],["/posts/43857.html","80149c399b31140cbb4851e96db87da2"],["/posts/44947.html","e5ec54f304b0b98eb551d8f186932fc7"],["/posts/45997.html","7ad311873465a0a24ae17ceda0f7c7ee"],["/posts/46411.html","d62f7552705d9218a7f5d83ab231816c"],["/posts/47220.html","bb2d0d37528116016255fbddce662c9b"],["/posts/47936.html","7af8bd48b45134c9af16d107552e17f0"],["/posts/47985.html","70c369e855f4dd3265a14e1b188639e1"],["/posts/47ce27c8.html","4cd1d0e74ffdee56910dbc29b18bd1ad"],["/posts/48061.html","c47306621b97bda7831772aff28848b6"],["/posts/4a17b156.html","5d8ec3d1e811ce316fd5655c648e291d"],["/posts/5010.html","78af3b3ee65bc9f6b6cfeddebe1cbb5b"],["/posts/51417.html","90c8713c57c7d3b405c2331b296b344b"],["/posts/5144bcf.html","0958adb04ade170e5ad1fcfb8b154f95"],["/posts/520.html","bfb8e47e7fe8aa01608ff1d52c5edbcc"],["/posts/53d1dcfb.html","a257a02bfd9c211273502eb9811b36c2"],["/posts/55248.html","085de4fe630a8a6559343a0819076779"],["/posts/55860.html","54e673c4fb1902d3273b29339aafcbb5"],["/posts/58489.html","f48ab13e94587d91f89c48eee9e4fdb4"],["/posts/59346.html","bd38325e67f947eab894ac91684f60a7"],["/posts/59977.html","f4df5b988fd6fd4d7069025063ad32b3"],["/posts/5c0875d6.html","a0085f36986330e18df94c0b6d83bfc9"],["/posts/60364.html","738c6e922f1e983a4450c67ca1a1e767"],["/posts/6059.html","fe8b9f6ddcd94b4c8e0a2af82118ba72"],["/posts/61794.html","cc7f0bd680b68c3e2ae3eff76ec94d4c"],["/posts/6275.html","401099161b8295c581f6958b5cd73d90"],["/posts/62910.html","82402b088491dc9ae4950a53d6952ba0"],["/posts/62cf8a54.html","77c2e2662e8ede3591b1b7ee7c04ed2c"],["/posts/630.html","b969ed3c19259570f5fa59f2f14a7d83"],["/posts/64423.html","622d8873c4c0b315d5951a7fbfb9f809"],["/posts/646dbc2e.html","31b8d0de696a4db5fd71a2944a412da1"],["/posts/64846.html","085bf47e343abc82f631816e3eb941d9"],["/posts/65aeda8b.html","2fc5088f951a0e215456a095730b09c5"],["/posts/6637aa6e.html","ec67108e5fe1420124ce567c7fcf70db"],["/posts/6656ad65.html","3dc5387af050a30bd30d64611cd5d0ad"],["/posts/6a4da3dd.html","b627d441120f32f7688a5555c834da29"],["/posts/6e2faa04.html","02573b1d9f1f62592af8b037330d5919"],["/posts/6f521982.html","3e4296e825b458a8607d53137a4ae302"],["/posts/71dd948a.html","929f5fe5020f9b7a0f9a8909889e9bab"],["/posts/773d5f8c.html","7a7c7de4b1d67a158ba9922bef7f67e2"],["/posts/7a179f78.html","b9d46a9e175b56a476d3159d36786ebf"],["/posts/80bb221f.html","901561b2099dd16aae3f9847027a8cf5"],["/posts/80ca38c0.html","703010ce655286c199b9f2e6710534a8"],["/posts/818bed05.html","beca0b6e68b8daeb94787c7604787994"],["/posts/8573.html","f30374e4f426491457ca97bc26ab836a"],["/posts/8589.html","3c4dd207e75d73923abf401b93eba558"],["/posts/88fead8.html","6ca2edf37dafe9fb28c12f3b0db17980"],["/posts/890d9674.html","630752c4c5a144a49e35d77c68f65733"],["/posts/8b540f5a.html","0bbe9c8611883f3066e04219224bf587"],["/posts/8c0ed688.html","e63eb34d4843916d798aa05ca7fd23c9"],["/posts/8f004046.html","5fd846b0bcf90ed06d6609b40d5d361b"],["/posts/8f19a96e.html","b4d71bf77af16554b56544a98d724736"],["/posts/901b8cd5.html","1c4413bf0cef984a11d776462c3c90c5"],["/posts/9618.html","4f92f926b3db199e534349a73de9e1db"],["/posts/9812.html","4c290178a2fdaffa9cf25c10f255f02c"],["/posts/9e565f9f.html","dfa4de027bbc3fafaaf8a7bd2cd6ddca"],["/posts/a9378efd.html","1a729336c5c15dab18f5d291c6dab7f9"],["/posts/b11c450a.html","0ec670db6caa57570055500cb87d0753"],["/posts/b572816f.html","052211231bd9c7acb205aa7c8f8600e8"],["/posts/b6595881.html","c0e492906d94eedf8cf852a4d79dda7b"],["/posts/b794162c.html","6005a88870bc491a7afc1d9ad3048954"],["/posts/b7cd6609.html","d99f6af990fb1d812dc9c6540e7e15cc"],["/posts/bae4ff13.html","507b7bdeb66ac1ee7a7b2f2409fb2521"],["/posts/bb9346ce.html","3daf492563dc19d90ed0ca696537440d"],["/posts/c54e1e5.html","aabd3475b9884e53bd21730146025bf8"],["/posts/ca165cd5.html","14d22e0ae634ffe436e4d8e131bdd91b"],["/posts/cc50857e.html","92782e07a584ffcab7eac0714f72756a"],["/posts/cfcef26f.html","8aa924fcc67dfc039ad84f020aeec6fe"],["/posts/e4f3239b.html","3a4119aa33b676b2973e1411ff980188"],["/posts/e73bc34f.html","0313ed877fe8db9b7ec9d154cdd4753e"],["/posts/ee789513.html","29d052790e5ac7f17894d14f0e57d0d5"],["/posts/f893cfd3.html","70171983273217569390acfb61f9deb2"],["/posts/f8d580eb.html","6f172256885208e4159fce4af2a25364"],["/posts/f92cb63f.html","53c84a4b8e2a83598e5d2b1a2b14b2c2"],["/posts/f9586000.html","a00aadb9ce5cd0263491b892fddf31a5"],["/posts/fbd6efa0.html","f0d10d88c02d77c9932557e1534ddc77"],["/posts/ff2330ff.html","d96a052805a9d7ebc54d38558b8cd25e"],["/posts/ff995e29.html","5af6bffa3cfdb208f536cf68476fa338"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","de40a2418ccf199e08fbe3afa695cdc7"],["/tags/Anaconda/index.html","2d739b8b36e14514e85dbe325058ae05"],["/tags/Edge/index.html","038523c9a94df5a37cccaadc8910a4f9"],["/tags/Git/index.html","3bc73982108e67a80c6cea3c6344b3dc"],["/tags/Hadoop/index.html","95e22933da3ab76abbebd8d75a1cc788"],["/tags/Hexo/index.html","5853d29c5e828fa2d56f7f0fb60e8ba4"],["/tags/Java/index.html","e2186084d571b5352661da024922b242"],["/tags/Linux/index.html","da0ad41e109fbe45d23b01ab8cc32374"],["/tags/Linux/page/2/index.html","b82e6fc8d568e72ae461c6f3e74272ac"],["/tags/MapReduce/index.html","5556608adbb598bab7648e2545aed122"],["/tags/Mysql/index.html","87e20a4c35c9915bf7199a6eb9a36821"],["/tags/Python/index.html","237c32bdb2d680df82baaa2b2fd2874e"],["/tags/Python/page/2/index.html","c604629f84f3640881967cdfccb86fdd"],["/tags/Python/page/3/index.html","004b72cbdd2405d5b422a357ab351ae5"],["/tags/Python/page/4/index.html","de458631d0b94cb9296152c1863dd583"],["/tags/Python习题/index.html","182d64bebc23c44042c01f429db87273"],["/tags/Redis/index.html","7ecaef6b7858ad0682214604fe9dd170"],["/tags/Tools/index.html","137357384f9e3b97db58c57e454aa30e"],["/tags/Win10/index.html","d1440c64ab343fd04c570e00da147cdb"],["/tags/Windows/index.html","4936600d047f9b5141cce5651bff4b40"],["/tags/index.html","fa0719aef064c428a7d1a7c37fac8621"],["/tags/亚马逊云科技/index.html","abdc92acf452cdb580851f38b4a89f13"],["/tags/任务栏神器/index.html","72286a47d7ac08c824c5e5f4443e0070"],["/tags/图床/index.html","41d92cb24fccc51f09c12b6758d399df"],["/tags/数仓/index.html","72f5e42933fdb97587a6fb1740cd9550"],["/tags/数据可视化/index.html","7166b3c8611497741782712d84b5ee8c"],["/tags/数据可视化/page/2/index.html","f88045d615c8a83bf3e32663f9e6e0ae"],["/tags/数据库工具/index.html","c9560beecb3d1e3521cdfa112301038c"],["/tags/毒鸡汤/index.html","15861053003a8f6bf7ad506783cbe7aa"],["/tags/环境搭建/index.html","355b6fce370c223c5153d0aeb22b055f"],["/tags/资料分享/index.html","09ac120cfb753933bcafb5cdfcc0b48c"],["/tags/面经/index.html","eac8873b6aad5a24602f5410a776eb05"],["/tools/index.html","aa0ef4b1e48b1ab771ddae5958cd09a1"]];
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
