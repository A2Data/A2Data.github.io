/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b31730fa3becb74ca686282f842d6671"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","adadd478ebea21017a5c7e9fc105cf04"],["/archives/2019/09/index.html","50917edd218f56ae525dd7ad404ef143"],["/archives/2019/11/index.html","27c3112f21ab7182f3e2921dfbff2b70"],["/archives/2019/12/index.html","5d799ba81c4bdf1a3e9091abd45de7de"],["/archives/2019/12/page/2/index.html","2b96263c3533206d12b84ec395f27c6a"],["/archives/2019/12/page/3/index.html","9fc8af4900629dec4b8c76a7a5b23410"],["/archives/2019/index.html","d5b57a058f1c795f551dadab47915a41"],["/archives/2019/page/2/index.html","07100c2a94104bc250ae952b856d2d76"],["/archives/2019/page/3/index.html","f38c9bf550f03a12a264fff9ddf143c3"],["/archives/2020/03/index.html","1bc527a09dd6aed1695d2a1ef0a59da4"],["/archives/2020/04/index.html","6dc6fb844e75be1d709a2d9496ffcedf"],["/archives/2020/04/page/2/index.html","20ab789e84318f95117c7d505acdd9ae"],["/archives/2020/05/index.html","bb02d6fb572e5057d9d4d611c8c02bc2"],["/archives/2020/05/page/2/index.html","4742fd3adfdb166725a443b1a7d110f2"],["/archives/2020/06/index.html","0a8e709c6ba0cf1a77a45f5d3d0cdf3e"],["/archives/2020/08/index.html","99d46ff63fcee84e26341be35aa0c980"],["/archives/2020/09/index.html","2083103669c2fc990bfe9f0427b4374a"],["/archives/2020/09/page/2/index.html","65d83e476a1162738a01103d5ea7e7f1"],["/archives/2020/11/index.html","cc243bf7f6e3e5b6dffc2fbf6d5ed126"],["/archives/2020/11/page/2/index.html","619996d2e666316bdca77118b85555c4"],["/archives/2020/12/index.html","80c4f95f3f38936c477b92334349c18a"],["/archives/2020/index.html","99e5e5a93a47a0d4ea089aeae1bae637"],["/archives/2020/page/2/index.html","a5da6901cbac94117163fe52ab0d942a"],["/archives/2020/page/3/index.html","4da9f65da7ad36752a18f2c6b1d00852"],["/archives/2020/page/4/index.html","6b6b5f46922d0f4c80610c4bdf7dc443"],["/archives/2020/page/5/index.html","b3f40fab5b5f8568ea579f5d8a10819e"],["/archives/2020/page/6/index.html","4f173625c230d1c7a1665f149d07762d"],["/archives/2020/page/7/index.html","894a3a2d108fd19d04837a899c53fd25"],["/archives/2020/page/8/index.html","dcc444b7d3654c8d38d166893b57840a"],["/archives/2021/01/index.html","8df2dfa229181c5c7edb8852e760bb94"],["/archives/2021/index.html","b309dc1518bdb7e5bfa86f7605990a60"],["/archives/2023/03/index.html","04981d7d7ad1186ab5be7a6117e86ca4"],["/archives/2023/10/index.html","07e437dfb5d7f410279124ae8ec2e5c8"],["/archives/2023/index.html","236c9c809c5e48931e10f4257ad71b2d"],["/archives/index.html","d5af8bf5f0221b126c5fd4f956c4407a"],["/archives/page/10/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/11/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/12/index.html","2c16c9333467a431977c3e28788bd4ad"],["/archives/page/2/index.html","e98c47d8ea0eaafd811b877eee3a5b82"],["/archives/page/3/index.html","e98c47d8ea0eaafd811b877eee3a5b82"],["/archives/page/4/index.html","e98c47d8ea0eaafd811b877eee3a5b82"],["/archives/page/5/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/6/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/7/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/8/index.html","d87baa86a5505012f737de5e93d1f710"],["/archives/page/9/index.html","d87baa86a5505012f737de5e93d1f710"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","2ed9227e112bd9b30f2d3a603a636108"],["/categories/DataBase/Mysql/index.html","e2f245ee7e5773cb229feb1f20602058"],["/categories/DataBase/Redis/index.html","98167d2c8e93cb22b8c15b3b6adfd199"],["/categories/DataBase/index.html","c234ecdd6079f20a84a4b5b3a57c6950"],["/categories/Git/index.html","31b0c5bbce5c6c16adcf18d929b0f228"],["/categories/Hexo/index.html","5ea9ce53f2228f2fd1ef4499365c3e7d"],["/categories/Java/index.html","c7a38bba2609f73d73f5153b4041afce"],["/categories/Linux/index.html","f66d6e4880b3618d254bc68fdbc82c6c"],["/categories/Linux/page/2/index.html","e8a6dea3716a015a62f1dde546ebcbf3"],["/categories/Python/Anaconda/index.html","37f73df7dd88e89c99545da2ff6a5419"],["/categories/Python/Python入门/index.html","593c9cb0e72d584d482249a540b524dc"],["/categories/Python/Python入门/page/2/index.html","6d75760613ce640e7c48a34bc45912c6"],["/categories/Python/Python速成/index.html","b20e940ce9b03d7fad398889b5598e2f"],["/categories/Python/Python速成/page/2/index.html","74650819e3de90a24d18775abe3e4c2a"],["/categories/Python/index.html","2c77d61a734b30b500637bc834a400ef"],["/categories/Python/page/2/index.html","97ac8a388a916359edf49d60706ad3f8"],["/categories/Python/page/3/index.html","e281dcbf4f92c5f5514a5f5616efc353"],["/categories/Python/page/4/index.html","f82db27e4bad82ae2f82db38a48048d4"],["/categories/Tools/index.html","8764915aefca21c8d94db66c3c712d15"],["/categories/index.html","2737f15e723c41c39ed2126bcc2d00fb"],["/categories/大数据/index.html","807ff0550b1875a1da77e8a1a22d27a6"],["/categories/职场/index.html","5587fd813843a36bfcd16ac761498ccb"],["/contact/index.html","5b8102c7c794a5b03800df44230cc14b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","80979539f9d20599a3d0c1f05ac194ee"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","a60b05e6bfcf30c1365153a71d764d85"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","a486ecd934764ac99d59808bf594bdb1"],["/page/10/index.html","403eac54a638e34abb1e53e04559ac8d"],["/page/11/index.html","612e5b9490b448b67b6bd3f6ef47c31e"],["/page/12/index.html","59d37c6529cae6f04ea0ce576fddf8de"],["/page/2/index.html","52f6ed3e922c971140bf6faa014f3246"],["/page/3/index.html","fec112b295c89b5b8c69d6063a8f9ac9"],["/page/4/index.html","d0e6313c30ae385b4551739d60623a5a"],["/page/5/index.html","159162caa9c9c99f6d969b9d54fd98b9"],["/page/6/index.html","d18da8eacb47a0329b7d14190705348e"],["/page/7/index.html","a55e2c7f79048b8b2a2b2601b2b23ce4"],["/page/8/index.html","c5995781717abacd340c53e93bcbb779"],["/page/9/index.html","67c3d79f2cdf0406ef822a30dfb1cdce"],["/posts/10415.html","debdd2774bf08e18f0f4f988a2224966"],["/posts/10537.html","4d515c0b61feef447f7ff1e91a6745f4"],["/posts/16550.html","47b83454b3a0909efcb3e3c05c7d78bb"],["/posts/16586.html","ca99558d9336b7307cddf197f23c1821"],["/posts/17415.html","317d01c125daaded10c5c552153eadfc"],["/posts/17683.html","24747355daf6e198e688ebca28156516"],["/posts/18321.html","2cb53a8b9ff8b13584b960eabb223f75"],["/posts/18572.html","77bc9d80646726961d421ed6d740429b"],["/posts/19a88b12.html","e0e96d3b9350afce2e9f67ad8bda1f64"],["/posts/1d1dff0b.html","3caf687fd93902c1fb78db1f4df36240"],["/posts/27081.html","72ce8ea638c1cbed399bca0149206b7c"],["/posts/2834.html","7c247ac67c0c506df3d3c34593df4202"],["/posts/29055.html","28efd64aea286453645663e824034e55"],["/posts/29966d.html","01bd176f03be8d9402616dabb7238940"],["/posts/2a327ad2.html","3ee5d3ac922215c2524c1538b55ff470"],["/posts/2b36786b.html","cd019476827434a4bb9fcf0589b9893d"],["/posts/30675.html","1bff97aacd91c6f86a088b7b8b332a9d"],["/posts/30873.html","bf7a8a167173db66827ae3110954cd21"],["/posts/32274.html","1d5d42a54fca8968827546a19d77b36b"],["/posts/34708.html","ff849243f6d17bbdeba4a97acac220c5"],["/posts/34771.html","9e809a7fec8a15adedc061de5289fb02"],["/posts/34946.html","b2957125313aecc19e04c20b548d3fa5"],["/posts/36204.html","17a1c2ebac5ae993ecddf62afb82fe19"],["/posts/37390.html","bbb391c294d937b89d9bd09dcedab739"],["/posts/37426.html","04abe6971bf2655438ec8ee12a2c1fff"],["/posts/39508.html","546a8c4dfd2ea9ce00416811a0de477a"],["/posts/39704.html","a3022f223d3edcea20c58f256ed9dce0"],["/posts/3fb6e39.html","3bb7189829c6e9a775ba915f59d47a8b"],["/posts/40711.html","74818a6ead10481d72b86251d18f5cd1"],["/posts/41055.html","12e0a8d6b85963715623a731c0881a69"],["/posts/4136.html","8fc8a6f4997a4d20726cbd70c377838b"],["/posts/41382.html","09ca18c1a2e443778197086dd7f1e952"],["/posts/43150.html","ef1c6ded79451a0c7c4e01a237f93104"],["/posts/43249.html","f6067a0910993e1ed39ca01ff523c875"],["/posts/4354b039.html","1647b0036102578db48b0c97eef93a40"],["/posts/43857.html","80149c399b31140cbb4851e96db87da2"],["/posts/44947.html","e5ec54f304b0b98eb551d8f186932fc7"],["/posts/45997.html","7ad311873465a0a24ae17ceda0f7c7ee"],["/posts/46411.html","d62f7552705d9218a7f5d83ab231816c"],["/posts/47220.html","bb2d0d37528116016255fbddce662c9b"],["/posts/47936.html","7af8bd48b45134c9af16d107552e17f0"],["/posts/47985.html","70c369e855f4dd3265a14e1b188639e1"],["/posts/47ce27c8.html","4cd1d0e74ffdee56910dbc29b18bd1ad"],["/posts/48061.html","c47306621b97bda7831772aff28848b6"],["/posts/4a17b156.html","e29a245cb1e0fe80ec260a5d263771d5"],["/posts/5010.html","78af3b3ee65bc9f6b6cfeddebe1cbb5b"],["/posts/51417.html","90c8713c57c7d3b405c2331b296b344b"],["/posts/5144bcf.html","0958adb04ade170e5ad1fcfb8b154f95"],["/posts/520.html","bfb8e47e7fe8aa01608ff1d52c5edbcc"],["/posts/53d1dcfb.html","a257a02bfd9c211273502eb9811b36c2"],["/posts/55248.html","085de4fe630a8a6559343a0819076779"],["/posts/55860.html","54e673c4fb1902d3273b29339aafcbb5"],["/posts/58489.html","f48ab13e94587d91f89c48eee9e4fdb4"],["/posts/59346.html","bd38325e67f947eab894ac91684f60a7"],["/posts/59977.html","f4df5b988fd6fd4d7069025063ad32b3"],["/posts/5c0875d6.html","a0085f36986330e18df94c0b6d83bfc9"],["/posts/60364.html","738c6e922f1e983a4450c67ca1a1e767"],["/posts/6059.html","fe8b9f6ddcd94b4c8e0a2af82118ba72"],["/posts/61794.html","cc7f0bd680b68c3e2ae3eff76ec94d4c"],["/posts/6275.html","401099161b8295c581f6958b5cd73d90"],["/posts/62910.html","82402b088491dc9ae4950a53d6952ba0"],["/posts/62cf8a54.html","77c2e2662e8ede3591b1b7ee7c04ed2c"],["/posts/630.html","b969ed3c19259570f5fa59f2f14a7d83"],["/posts/64423.html","622d8873c4c0b315d5951a7fbfb9f809"],["/posts/646dbc2e.html","31b8d0de696a4db5fd71a2944a412da1"],["/posts/64846.html","085bf47e343abc82f631816e3eb941d9"],["/posts/65aeda8b.html","2fc5088f951a0e215456a095730b09c5"],["/posts/6637aa6e.html","ec67108e5fe1420124ce567c7fcf70db"],["/posts/6656ad65.html","3dc5387af050a30bd30d64611cd5d0ad"],["/posts/6a4da3dd.html","b627d441120f32f7688a5555c834da29"],["/posts/6e2faa04.html","02573b1d9f1f62592af8b037330d5919"],["/posts/6f521982.html","3e4296e825b458a8607d53137a4ae302"],["/posts/71dd948a.html","929f5fe5020f9b7a0f9a8909889e9bab"],["/posts/773d5f8c.html","7a7c7de4b1d67a158ba9922bef7f67e2"],["/posts/7a179f78.html","b9d46a9e175b56a476d3159d36786ebf"],["/posts/80bb221f.html","901561b2099dd16aae3f9847027a8cf5"],["/posts/80ca38c0.html","703010ce655286c199b9f2e6710534a8"],["/posts/818bed05.html","beca0b6e68b8daeb94787c7604787994"],["/posts/8573.html","f30374e4f426491457ca97bc26ab836a"],["/posts/8589.html","3c4dd207e75d73923abf401b93eba558"],["/posts/88fead8.html","6ca2edf37dafe9fb28c12f3b0db17980"],["/posts/890d9674.html","e728eaa36865fcb8670fd7f69a7638d3"],["/posts/8b540f5a.html","0bbe9c8611883f3066e04219224bf587"],["/posts/8c0ed688.html","e63eb34d4843916d798aa05ca7fd23c9"],["/posts/8f004046.html","5fd846b0bcf90ed06d6609b40d5d361b"],["/posts/8f19a96e.html","b4d71bf77af16554b56544a98d724736"],["/posts/901b8cd5.html","1c4413bf0cef984a11d776462c3c90c5"],["/posts/9618.html","4f92f926b3db199e534349a73de9e1db"],["/posts/9812.html","4c290178a2fdaffa9cf25c10f255f02c"],["/posts/9e565f9f.html","dfa4de027bbc3fafaaf8a7bd2cd6ddca"],["/posts/a9378efd.html","1a729336c5c15dab18f5d291c6dab7f9"],["/posts/b11c450a.html","0ec670db6caa57570055500cb87d0753"],["/posts/b572816f.html","052211231bd9c7acb205aa7c8f8600e8"],["/posts/b6595881.html","c0e492906d94eedf8cf852a4d79dda7b"],["/posts/b794162c.html","6005a88870bc491a7afc1d9ad3048954"],["/posts/b7cd6609.html","d99f6af990fb1d812dc9c6540e7e15cc"],["/posts/bae4ff13.html","507b7bdeb66ac1ee7a7b2f2409fb2521"],["/posts/bb9346ce.html","3daf492563dc19d90ed0ca696537440d"],["/posts/c54e1e5.html","aabd3475b9884e53bd21730146025bf8"],["/posts/ca165cd5.html","14d22e0ae634ffe436e4d8e131bdd91b"],["/posts/cc50857e.html","92782e07a584ffcab7eac0714f72756a"],["/posts/cfcef26f.html","8aa924fcc67dfc039ad84f020aeec6fe"],["/posts/e4f3239b.html","3a4119aa33b676b2973e1411ff980188"],["/posts/e73bc34f.html","0313ed877fe8db9b7ec9d154cdd4753e"],["/posts/ee789513.html","29d052790e5ac7f17894d14f0e57d0d5"],["/posts/f893cfd3.html","70171983273217569390acfb61f9deb2"],["/posts/f8d580eb.html","6f172256885208e4159fce4af2a25364"],["/posts/f92cb63f.html","53c84a4b8e2a83598e5d2b1a2b14b2c2"],["/posts/f9586000.html","a00aadb9ce5cd0263491b892fddf31a5"],["/posts/fbd6efa0.html","f0d10d88c02d77c9932557e1534ddc77"],["/posts/ff2330ff.html","d96a052805a9d7ebc54d38558b8cd25e"],["/posts/ff995e29.html","5af6bffa3cfdb208f536cf68476fa338"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","92fb143d68bd428e1fdc0feecc06f6ab"],["/tags/Anaconda/index.html","369064670c3939dc328886d5cd710556"],["/tags/Edge/index.html","964e1e97d5d57b447a7f1c8a8011dd9c"],["/tags/Git/index.html","8588f8f580bfe25eb138d237d1789ea2"],["/tags/Hadoop/index.html","faa6257e643c476e953a337376bcff7e"],["/tags/Hexo/index.html","deb0fd14c717d4a50930aa8cfc1363a8"],["/tags/Java/index.html","0f73f3537d63aa916021d1becca3dfe9"],["/tags/Linux/index.html","a7a2136883b191fc47e97637d4e47bf7"],["/tags/Linux/page/2/index.html","0997cc1fe09bbdced2169a0b2ab7b0e7"],["/tags/MapReduce/index.html","cb3ae8930d8214416d34600bb43ab84f"],["/tags/Mysql/index.html","502b63d880b2534beca994516f7272b7"],["/tags/Python/index.html","1220197e3fb4237673d6c2bf475490b7"],["/tags/Python/page/2/index.html","87587d1e0b8b1c4c2412d8043d40a33f"],["/tags/Python/page/3/index.html","33980e77e26b5e251f5efcb5b82193dd"],["/tags/Python/page/4/index.html","8b842715b5d2dc93655caa285e42c42f"],["/tags/Python习题/index.html","1e341e73b5ab9273b653cdb809ec81e6"],["/tags/Redis/index.html","f0811d8a5b94ae513f6a57b91b342ff9"],["/tags/Tools/index.html","f70e1293fd6322d99fe3897e5b45e9d6"],["/tags/Win10/index.html","d8a08722411ba53d1c69e7ce1ce70c23"],["/tags/Windows/index.html","990c45415a1a57c5847de2866f7a4387"],["/tags/index.html","6d452c9266aab5b5e1b808fb9d513002"],["/tags/亚马逊云科技/index.html","d64ca32350f729bf421f1610527f2874"],["/tags/任务栏神器/index.html","162d2dcf8fd1baf35fab0920aafe868f"],["/tags/图床/index.html","ace2aef77320b0cc14729517993b1475"],["/tags/数仓/index.html","3acee4a40bc41d7b42499c86599d6fbe"],["/tags/数据可视化/index.html","fcd93204b1ca6644896e581b30d5087c"],["/tags/数据可视化/page/2/index.html","38e2acaa13dccbd84a9c7c8fa3b51dfa"],["/tags/数据库工具/index.html","9115d229e5993f762217a281a5f67f4b"],["/tags/毒鸡汤/index.html","4ee5649a19a2e7e76d91f1c2ed67a7d9"],["/tags/环境搭建/index.html","21b60e0e192ead2c563d2f79fee63a45"],["/tags/资料分享/index.html","714cac6e179bacc3bc9b4a8e9208aae4"],["/tags/面经/index.html","5c75d657bc4cef0147bc7e143811e34a"],["/tools/index.html","aa0ef4b1e48b1ab771ddae5958cd09a1"]];
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
