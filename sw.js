/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b31730fa3becb74ca686282f842d6671"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","adadd478ebea21017a5c7e9fc105cf04"],["/archives/2019/09/index.html","2bd9b70d6b181a3cf7494c4314b0cfc6"],["/archives/2019/11/index.html","f506c096dba679152edf22a643e9c50a"],["/archives/2019/12/index.html","a53fde34d53dd4ba0f3d09664ec26690"],["/archives/2019/12/page/2/index.html","c93c046015ef4aa7d935f7e43b625365"],["/archives/2019/12/page/3/index.html","6b72b1daf7425345e3a934a0cbc844c1"],["/archives/2019/index.html","86397f52beea3929d0a85923feb4ab1d"],["/archives/2019/page/2/index.html","63eb747434c92eeac479f97390463f5f"],["/archives/2019/page/3/index.html","a66b7b9498bbc5bb863fb80f0566c033"],["/archives/2020/03/index.html","77dafefeb4b54b1e66afb382b7f6e265"],["/archives/2020/04/index.html","ddacbc56d97d4d930949a380edb472fc"],["/archives/2020/04/page/2/index.html","e881affa0aac0dd46774d09dc0a12e73"],["/archives/2020/05/index.html","5a41d54261414659bd3c5ce92499b5ac"],["/archives/2020/05/page/2/index.html","d2080e199ac3841121ecfd955141fc21"],["/archives/2020/06/index.html","3c99497877603c119033e2dbe05395aa"],["/archives/2020/08/index.html","f3f36a5d11fb6f3c9b3f5b7d242b707a"],["/archives/2020/09/index.html","47ecae828d75ed648403e7d30101a478"],["/archives/2020/09/page/2/index.html","05a1ffd4c04c6ac95f59c9c17ef41e0a"],["/archives/2020/11/index.html","a91e1f03b65421c5e0c9cb5334980ddc"],["/archives/2020/11/page/2/index.html","46c044bc6004bafab855b92f59c206e1"],["/archives/2020/12/index.html","c87f3f9ee895fbfec1e26ef478ac888d"],["/archives/2020/index.html","a731a50c26bf8e6d4088118bd0276b89"],["/archives/2020/page/2/index.html","e267541074cb92f633ba0bbb2cedbfdb"],["/archives/2020/page/3/index.html","8e6b4ffe789ceea34524562bf4532e31"],["/archives/2020/page/4/index.html","9cf4eaf1bd78033665d4f98e387ce561"],["/archives/2020/page/5/index.html","c2f7d84eb97837c3cbb5ed60b87855e4"],["/archives/2020/page/6/index.html","5d6542f7d9fad3cb90fca3ddd10c6ffe"],["/archives/2020/page/7/index.html","9490e3ca82eafd23ad16c05b75b36c3c"],["/archives/2020/page/8/index.html","045827d609de30376129e2df29ee59a2"],["/archives/2021/01/index.html","9e0ccdd45ab1f61faefa9c62523613db"],["/archives/2021/index.html","1c1eed758576bffe4e327c6685601a97"],["/archives/2023/03/index.html","d97e886543a974c9f3696f79c87d1dc9"],["/archives/2023/10/index.html","cf5e1b568d09b6ceda2402299c4d6838"],["/archives/2023/index.html","4d6e3b8886f8f060374d0727b5811eec"],["/archives/index.html","975bc4ec1eaed085c708382343f23bba"],["/archives/page/10/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/11/index.html","d1cf2f0f1d1028f328798531c2d5cb63"],["/archives/page/12/index.html","d1cf2f0f1d1028f328798531c2d5cb63"],["/archives/page/2/index.html","e779bf095407fac29550c9cb9772a866"],["/archives/page/3/index.html","e779bf095407fac29550c9cb9772a866"],["/archives/page/4/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/5/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/6/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/7/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/8/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/archives/page/9/index.html","9f84519c26c5bf8fe83afc07afe8f75e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","2ed9227e112bd9b30f2d3a603a636108"],["/categories/DataBase/Mysql/index.html","fe667fa90b26b84b94543efb320cb7f9"],["/categories/DataBase/Redis/index.html","3b11fe9facc3ac960141753ebfd660bc"],["/categories/DataBase/index.html","0e973ab0dfd7e778c90438e91c4b1d8a"],["/categories/Git/index.html","daedd062a6bc492203edf3bee4c11e6c"],["/categories/Hexo/index.html","45c642cdcffe56ddc9c1835224df75c0"],["/categories/Java/index.html","c9d25bf34fe69313c8c4c8254aa8749a"],["/categories/Linux/index.html","0f3c7fd24960315d621377c28d1f2d5b"],["/categories/Linux/page/2/index.html","74d831b68a2925dba0f4df012d78bdf5"],["/categories/Python/Anaconda/index.html","3fb1cb9d5a2cf3afa4243ff73058dad9"],["/categories/Python/Python入门/index.html","bc1ed0e80b491c8c0a73d5b53799f77d"],["/categories/Python/Python入门/page/2/index.html","5c08caf4302ca1aeda4bbca795b6d6bf"],["/categories/Python/Python速成/index.html","4fbb54951f205e98b61eb711dcf7f6a8"],["/categories/Python/Python速成/page/2/index.html","a641a6d095f37919f96d48fa5a7c332a"],["/categories/Python/index.html","a4c1c3d99e81927b50e7dc872ac84cdb"],["/categories/Python/page/2/index.html","3dd0c4f7c908dca44db0c010013ee8cf"],["/categories/Python/page/3/index.html","9eddad9cb7c16739222262da0d09dc3a"],["/categories/Python/page/4/index.html","e6edb9832b503ffb131ad740071e3c9b"],["/categories/Tools/index.html","25193101d118710eeb31478dc4776604"],["/categories/index.html","2737f15e723c41c39ed2126bcc2d00fb"],["/categories/大数据/index.html","2831942ffd4be4ac4c9369ae30e6437d"],["/categories/职场/index.html","e8b98a0ff28d7f287f1f1e133088a345"],["/contact/index.html","5b8102c7c794a5b03800df44230cc14b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","80979539f9d20599a3d0c1f05ac194ee"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","ca246b8672ac751be4ca2e503b4ed18f"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","a486ecd934764ac99d59808bf594bdb1"],["/page/10/index.html","b4374dff157458084eadc4a37f34ea70"],["/page/11/index.html","7f017fc5ba952c80ed189ad611c8eacd"],["/page/12/index.html","3c5314eec067a9d0a743ef40769fd7b6"],["/page/2/index.html","9a335abbb12e92b4d5970823b4186056"],["/page/3/index.html","8b889dc01ea70dc4c338691db0c009c7"],["/page/4/index.html","34649c8e641d334bc751d24ea8552164"],["/page/5/index.html","5bd87ce144a929e41dfd6f3e74a707f5"],["/page/6/index.html","19b151cb5b1414ef172de1f07a338984"],["/page/7/index.html","b9937b099836b43825ffd8c86bab9d7d"],["/page/8/index.html","cf6ef89ca5d1301c6a744185ea4c7f0b"],["/page/9/index.html","cbf61c5e2bc91a834ea7d63cf161064b"],["/posts/10415.html","debdd2774bf08e18f0f4f988a2224966"],["/posts/10537.html","4d515c0b61feef447f7ff1e91a6745f4"],["/posts/16550.html","47b83454b3a0909efcb3e3c05c7d78bb"],["/posts/16586.html","ca99558d9336b7307cddf197f23c1821"],["/posts/17415.html","317d01c125daaded10c5c552153eadfc"],["/posts/17683.html","24747355daf6e198e688ebca28156516"],["/posts/18321.html","2cb53a8b9ff8b13584b960eabb223f75"],["/posts/18572.html","77bc9d80646726961d421ed6d740429b"],["/posts/19a88b12.html","e0e96d3b9350afce2e9f67ad8bda1f64"],["/posts/1d1dff0b.html","3caf687fd93902c1fb78db1f4df36240"],["/posts/27081.html","72ce8ea638c1cbed399bca0149206b7c"],["/posts/2834.html","7c247ac67c0c506df3d3c34593df4202"],["/posts/29055.html","28efd64aea286453645663e824034e55"],["/posts/29966d.html","01bd176f03be8d9402616dabb7238940"],["/posts/2a327ad2.html","3ee5d3ac922215c2524c1538b55ff470"],["/posts/2b36786b.html","cd019476827434a4bb9fcf0589b9893d"],["/posts/30675.html","1bff97aacd91c6f86a088b7b8b332a9d"],["/posts/30873.html","bf7a8a167173db66827ae3110954cd21"],["/posts/32274.html","1d5d42a54fca8968827546a19d77b36b"],["/posts/34708.html","ff849243f6d17bbdeba4a97acac220c5"],["/posts/34771.html","9e809a7fec8a15adedc061de5289fb02"],["/posts/34946.html","b2957125313aecc19e04c20b548d3fa5"],["/posts/36204.html","17a1c2ebac5ae993ecddf62afb82fe19"],["/posts/37390.html","bbb391c294d937b89d9bd09dcedab739"],["/posts/37426.html","04abe6971bf2655438ec8ee12a2c1fff"],["/posts/39508.html","546a8c4dfd2ea9ce00416811a0de477a"],["/posts/39704.html","a3022f223d3edcea20c58f256ed9dce0"],["/posts/3fb6e39.html","3bb7189829c6e9a775ba915f59d47a8b"],["/posts/40711.html","74818a6ead10481d72b86251d18f5cd1"],["/posts/41055.html","12e0a8d6b85963715623a731c0881a69"],["/posts/4136.html","8fc8a6f4997a4d20726cbd70c377838b"],["/posts/41382.html","09ca18c1a2e443778197086dd7f1e952"],["/posts/43150.html","ef1c6ded79451a0c7c4e01a237f93104"],["/posts/43249.html","f6067a0910993e1ed39ca01ff523c875"],["/posts/4354b039.html","1647b0036102578db48b0c97eef93a40"],["/posts/43857.html","80149c399b31140cbb4851e96db87da2"],["/posts/44947.html","e5ec54f304b0b98eb551d8f186932fc7"],["/posts/45997.html","7ad311873465a0a24ae17ceda0f7c7ee"],["/posts/46411.html","d62f7552705d9218a7f5d83ab231816c"],["/posts/47220.html","bb2d0d37528116016255fbddce662c9b"],["/posts/47936.html","7af8bd48b45134c9af16d107552e17f0"],["/posts/47985.html","70c369e855f4dd3265a14e1b188639e1"],["/posts/47ce27c8.html","4cd1d0e74ffdee56910dbc29b18bd1ad"],["/posts/48061.html","c47306621b97bda7831772aff28848b6"],["/posts/4a17b156.html","e29a245cb1e0fe80ec260a5d263771d5"],["/posts/5010.html","78af3b3ee65bc9f6b6cfeddebe1cbb5b"],["/posts/51417.html","90c8713c57c7d3b405c2331b296b344b"],["/posts/5144bcf.html","0958adb04ade170e5ad1fcfb8b154f95"],["/posts/520.html","bfb8e47e7fe8aa01608ff1d52c5edbcc"],["/posts/53d1dcfb.html","a257a02bfd9c211273502eb9811b36c2"],["/posts/55248.html","085de4fe630a8a6559343a0819076779"],["/posts/55860.html","54e673c4fb1902d3273b29339aafcbb5"],["/posts/58489.html","f48ab13e94587d91f89c48eee9e4fdb4"],["/posts/59346.html","bd38325e67f947eab894ac91684f60a7"],["/posts/59977.html","f4df5b988fd6fd4d7069025063ad32b3"],["/posts/5c0875d6.html","a0085f36986330e18df94c0b6d83bfc9"],["/posts/60364.html","738c6e922f1e983a4450c67ca1a1e767"],["/posts/6059.html","fe8b9f6ddcd94b4c8e0a2af82118ba72"],["/posts/61794.html","cc7f0bd680b68c3e2ae3eff76ec94d4c"],["/posts/6275.html","401099161b8295c581f6958b5cd73d90"],["/posts/62910.html","82402b088491dc9ae4950a53d6952ba0"],["/posts/62cf8a54.html","77c2e2662e8ede3591b1b7ee7c04ed2c"],["/posts/630.html","b969ed3c19259570f5fa59f2f14a7d83"],["/posts/64423.html","622d8873c4c0b315d5951a7fbfb9f809"],["/posts/646dbc2e.html","31b8d0de696a4db5fd71a2944a412da1"],["/posts/64846.html","085bf47e343abc82f631816e3eb941d9"],["/posts/65aeda8b.html","2fc5088f951a0e215456a095730b09c5"],["/posts/6637aa6e.html","ec67108e5fe1420124ce567c7fcf70db"],["/posts/6656ad65.html","3dc5387af050a30bd30d64611cd5d0ad"],["/posts/6a4da3dd.html","b627d441120f32f7688a5555c834da29"],["/posts/6e2faa04.html","02573b1d9f1f62592af8b037330d5919"],["/posts/6f521982.html","3e4296e825b458a8607d53137a4ae302"],["/posts/71dd948a.html","929f5fe5020f9b7a0f9a8909889e9bab"],["/posts/773d5f8c.html","7a7c7de4b1d67a158ba9922bef7f67e2"],["/posts/7a179f78.html","b9d46a9e175b56a476d3159d36786ebf"],["/posts/80bb221f.html","901561b2099dd16aae3f9847027a8cf5"],["/posts/80ca38c0.html","703010ce655286c199b9f2e6710534a8"],["/posts/818bed05.html","beca0b6e68b8daeb94787c7604787994"],["/posts/8573.html","f30374e4f426491457ca97bc26ab836a"],["/posts/8589.html","3c4dd207e75d73923abf401b93eba558"],["/posts/88fead8.html","6ca2edf37dafe9fb28c12f3b0db17980"],["/posts/890d9674.html","bc7697dae8691e664ca064d8bd97dcb4"],["/posts/8b540f5a.html","0bbe9c8611883f3066e04219224bf587"],["/posts/8c0ed688.html","e63eb34d4843916d798aa05ca7fd23c9"],["/posts/8f004046.html","5fd846b0bcf90ed06d6609b40d5d361b"],["/posts/8f19a96e.html","b4d71bf77af16554b56544a98d724736"],["/posts/901b8cd5.html","1c4413bf0cef984a11d776462c3c90c5"],["/posts/9618.html","4f92f926b3db199e534349a73de9e1db"],["/posts/9812.html","4c290178a2fdaffa9cf25c10f255f02c"],["/posts/9e565f9f.html","dfa4de027bbc3fafaaf8a7bd2cd6ddca"],["/posts/a9378efd.html","1a729336c5c15dab18f5d291c6dab7f9"],["/posts/b11c450a.html","0ec670db6caa57570055500cb87d0753"],["/posts/b572816f.html","052211231bd9c7acb205aa7c8f8600e8"],["/posts/b6595881.html","c0e492906d94eedf8cf852a4d79dda7b"],["/posts/b794162c.html","6005a88870bc491a7afc1d9ad3048954"],["/posts/b7cd6609.html","d99f6af990fb1d812dc9c6540e7e15cc"],["/posts/bae4ff13.html","507b7bdeb66ac1ee7a7b2f2409fb2521"],["/posts/bb9346ce.html","3daf492563dc19d90ed0ca696537440d"],["/posts/c54e1e5.html","aabd3475b9884e53bd21730146025bf8"],["/posts/ca165cd5.html","14d22e0ae634ffe436e4d8e131bdd91b"],["/posts/cc50857e.html","92782e07a584ffcab7eac0714f72756a"],["/posts/cfcef26f.html","8aa924fcc67dfc039ad84f020aeec6fe"],["/posts/e4f3239b.html","3a4119aa33b676b2973e1411ff980188"],["/posts/e73bc34f.html","0313ed877fe8db9b7ec9d154cdd4753e"],["/posts/ee789513.html","29d052790e5ac7f17894d14f0e57d0d5"],["/posts/f893cfd3.html","70171983273217569390acfb61f9deb2"],["/posts/f8d580eb.html","6f172256885208e4159fce4af2a25364"],["/posts/f92cb63f.html","53c84a4b8e2a83598e5d2b1a2b14b2c2"],["/posts/f9586000.html","a00aadb9ce5cd0263491b892fddf31a5"],["/posts/fbd6efa0.html","f0d10d88c02d77c9932557e1534ddc77"],["/posts/ff2330ff.html","d96a052805a9d7ebc54d38558b8cd25e"],["/posts/ff995e29.html","5af6bffa3cfdb208f536cf68476fa338"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","d5e09863bdd6a5d8dbd59c4cd3cda827"],["/tags/Anaconda/index.html","b707a80e36c23f2df4270d9656ca5504"],["/tags/Edge/index.html","758dccb78836da02e8c596ca59ac9cc5"],["/tags/Git/index.html","7f8d55c262b52eace5409163bc7437d7"],["/tags/Hadoop/index.html","b893a230ca9b149df07ca7dc20654591"],["/tags/Hexo/index.html","48c4f3175b817ff1fd8fda60e152d862"],["/tags/Java/index.html","485dbbc7b730fc1b438bff573436be96"],["/tags/Linux/index.html","1c077fb95cda8f16281e954f9c06184f"],["/tags/Linux/page/2/index.html","81a798a232de3ee92484bf510efe2fcb"],["/tags/MapReduce/index.html","ef3cee5babae1b1adf2a3e008a05ac4d"],["/tags/Mysql/index.html","44ca2d04ff1baa45e0371231f0993ce6"],["/tags/Python/index.html","9227afe288cfe05ac8e49b59f716e4fc"],["/tags/Python/page/2/index.html","ede4f16a24735df47e1b718a1960930f"],["/tags/Python/page/3/index.html","75b6616ece3e6e14c6defd656c476b33"],["/tags/Python/page/4/index.html","ff4c3b145209663b7f86f5578dc60cdb"],["/tags/Python习题/index.html","8d301d37abeb7fa0fa8f7fcec55a463a"],["/tags/Redis/index.html","1c9583cf38f9fcd3e75c00c4994a57e3"],["/tags/Tools/index.html","62a5dbc5a0e7d5f368c77ce25f055af5"],["/tags/Win10/index.html","4c39fc9efe7c3c5a237c715d0016b2d5"],["/tags/Windows/index.html","9a5181a3fd7cc4b9d9a42c5ef389e889"],["/tags/index.html","6d452c9266aab5b5e1b808fb9d513002"],["/tags/亚马逊云科技/index.html","b58b67be6a48107c3a349bda86b79365"],["/tags/任务栏神器/index.html","9393b265d7c8ed4c5ef9b6d94b116a5c"],["/tags/图床/index.html","8f0978ac9825d414d4748f80b0f476ba"],["/tags/数仓/index.html","9b9dcfaa86d88cc3415dedf6e4866f94"],["/tags/数据可视化/index.html","069cf942329cdcc0ceda9c05093fc6d6"],["/tags/数据可视化/page/2/index.html","577071a3631a43da7d300fb14fe4bf7d"],["/tags/数据库工具/index.html","f432abf41eef64870229a1fe33634558"],["/tags/毒鸡汤/index.html","62799cdcc08d68c15d0ab8d908c2060e"],["/tags/环境搭建/index.html","04bcb687a11bf8c91601d5ed488f1e32"],["/tags/资料分享/index.html","5a685f6fe846725cb58874ff1ff47a7e"],["/tags/面经/index.html","1ea437553abbf0312b483682494a4cad"],["/tools/index.html","aa0ef4b1e48b1ab771ddae5958cd09a1"]];
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
