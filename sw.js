/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6c94f725655401f2e16f98c95cfc764c"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","d1ffa77a8c6c65045386bf9dfb782527"],["/archives/2019/09/index.html","922cc07b44f93e5b389c5a53bf85f7c8"],["/archives/2019/11/index.html","b231a7a25faa4a2f44b16ff4dd15f448"],["/archives/2019/12/index.html","0c1a1be85a53eb1dc455bc030880fd66"],["/archives/2019/12/page/2/index.html","1714e94d14248e2b0a0738ddf21b9546"],["/archives/2019/12/page/3/index.html","4676ff0cd2a88f2b3b3289ee4e0c8f27"],["/archives/2019/index.html","f39b1d766c5a5773d0ac2dd9d4cef15a"],["/archives/2019/page/2/index.html","b82be6abaae5b802137d5f26182299f5"],["/archives/2019/page/3/index.html","7db7b1fe2dd854d29030a3d6dd0852da"],["/archives/2020/03/index.html","9d25a7740c92d192234a66c8c6b4350a"],["/archives/2020/04/index.html","5c58a7782b8335e128e13bb39e31fbda"],["/archives/2020/04/page/2/index.html","9860d36be006bb5ecf1ea0e1b69acedf"],["/archives/2020/05/index.html","607b6c65b30b6d0476ce3a828bf89305"],["/archives/2020/05/page/2/index.html","1a984f05833a671f9aa6359ba584a5fa"],["/archives/2020/06/index.html","d0de3cccb1a18050781d88767134bc92"],["/archives/2020/08/index.html","46b5899610bd62cf680370bdba93354f"],["/archives/2020/09/index.html","6ee4bb5cd8a756187f4600200c4f69c3"],["/archives/2020/09/page/2/index.html","b27ab6185df83de31ce9e87272bea976"],["/archives/2020/11/index.html","70ecba32d09981b7146d940e4b01eb7f"],["/archives/2020/11/page/2/index.html","5b5dfdf838001b7c4e2008ec92e56571"],["/archives/2020/12/index.html","3a623d001bde0b9af5bd67940192570f"],["/archives/2020/index.html","bf738cb85080fd6bcc63f8c6e1187859"],["/archives/2020/page/2/index.html","b546acab02a6f5931049d90bcdc290f9"],["/archives/2020/page/3/index.html","84356a0efb8a0953a33e9aac659ad3bf"],["/archives/2020/page/4/index.html","d980e9a71db9add48a1d0d52f0197c4d"],["/archives/2020/page/5/index.html","bfd066d0806b6af91d82c70a506740b7"],["/archives/2020/page/6/index.html","7f4c171c7ad3ea0c5ec40bf4d9a6a7d5"],["/archives/2020/page/7/index.html","d1c93706da3dcefcd9e89b6c6f34a47a"],["/archives/2020/page/8/index.html","0e7f4a67b933f944407a7b6ec8ac2c0c"],["/archives/2021/01/index.html","af56e2942bace629e00903384ac93b11"],["/archives/2021/index.html","5f214ed10fcec41708539bc186578d2b"],["/archives/index.html","dafe31740cd77b5d652ac225b870ed45"],["/archives/page/10/index.html","63c431b052baa5f11d77d3660a2ccefb"],["/archives/page/11/index.html","63c431b052baa5f11d77d3660a2ccefb"],["/archives/page/12/index.html","63c431b052baa5f11d77d3660a2ccefb"],["/archives/page/2/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/3/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/4/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/5/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/6/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/7/index.html","88845c07f121be0668e7c9d8773fc708"],["/archives/page/8/index.html","63c431b052baa5f11d77d3660a2ccefb"],["/archives/page/9/index.html","63c431b052baa5f11d77d3660a2ccefb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","9979c5b8e92119105123243ec40886ad"],["/categories/Java/index.html","71069d017fa605945b5d406de24ee771"],["/categories/Linux/index.html","2ba1dd4ac403021b1116f877039ffe20"],["/categories/Linux/page/2/index.html","a9e9d1f6f23cf21112e1d43d701f116f"],["/categories/Python/Python入门/index.html","37bfc84386ad6c4df6672f96ef7346d8"],["/categories/Python/Python入门/page/2/index.html","4cc19ec8001e980cc370c527b92f9341"],["/categories/Python/Python速成/index.html","52c6b71785b710b2c47e733357b214fc"],["/categories/Python/Python速成/page/2/index.html","e93b53e4b52969c076e595c5c6154406"],["/categories/Python/index.html","b6ea677212a1250c75d4dcef898f29dd"],["/categories/Python/page/2/index.html","c44ef1b112e34368a4ff5088208d6457"],["/categories/Python/page/3/index.html","81de90cdd9e6ea158366ed0f4eae35ac"],["/categories/Python/page/4/index.html","0122e2e4550eb903dc215c26e262244d"],["/categories/Tools/index.html","c62322732e3919ec66e01b6ced74be74"],["/categories/index.html","f30066f16f43b74ff018c326b0ed140d"],["/categories/职场/index.html","d5c800e98e1e7a5e98ed3b1e4f847773"],["/contact/index.html","88d568de3dc1f82f0ab15582810751b6"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","e3dac2bea12cbfe4a87ec9f4f8264291"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","b9729002f2d7063445a3f8ff78d8e4ca"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","120355177e34e3a7df28e83da01d35d2"],["/page/10/index.html","a16c30f2a432b4213cf66283ddc3bb83"],["/page/11/index.html","5eb62487f46c0140e4262de01436900e"],["/page/12/index.html","3d66af2db52ddf3c15962fe098a063c4"],["/page/2/index.html","fcfcad6e6cee5153d4717ebd509c3e55"],["/page/3/index.html","42e4a3aeef749dc2fb7cbe30bba36aee"],["/page/4/index.html","4479f2ebeb4d156cdffa226d7c11fec6"],["/page/5/index.html","5f2ca3876f037aae354d79f34ff21bde"],["/page/6/index.html","45b58bec3a13e1ef4bb0ebe1f5b45b00"],["/page/7/index.html","09b3597c96335de64bd49071d3239f5c"],["/page/8/index.html","4bbeb930d14ca2b4f3f967d05d754b5c"],["/page/9/index.html","328c1e3d7b04137a83657befc7f5ee5f"],["/posts/10415.html","fe822aa3fbf4c959ac07c0cc919fbe33"],["/posts/10537.html","44a240456153634cb1160663abdf98fb"],["/posts/16550.html","eb440c5171f57099f8bb1a8fbebc7ed2"],["/posts/16586.html","5e6f824ca363e431539157e4fc292700"],["/posts/17415.html","2afd574b598ed27fc3749a46e49c4eb8"],["/posts/17683.html","5f10ed69735627e81f98b918a31b9368"],["/posts/18321.html","f193466d86228a02e4092a1fbad85498"],["/posts/18572.html","c250e9b7ca15eae685a2d68032fa965f"],["/posts/19a88b12.html","81511c9c8ea55935cb3b8356e466fe7b"],["/posts/1d1dff0b.html","2673817c5e115046135b00a1778c38d0"],["/posts/27081.html","98121eecef31b656947dc47c1d6530ac"],["/posts/2834.html","4aaf07dc59818a96a209d5fc1dd58bb5"],["/posts/29055.html","8456392ae8a8bfb0f5b579c3f5def792"],["/posts/29966d.html","48647aa8faf0aba94349e37250d000d5"],["/posts/2a327ad2.html","ff2e3660d04449aa9cc936e02add5820"],["/posts/2b36786b.html","66a601538c84c03a2e458c34d734732a"],["/posts/30675.html","c4a47dbc496104499d6c662b73251867"],["/posts/30873.html","006463115b855688c50fb572e1e67c35"],["/posts/32274.html","32beb8f834cd29faa7932ec95a9e8ca4"],["/posts/34708.html","3bf1382f82d274521f7f436b66d466b7"],["/posts/34771.html","0ce3cb423a73320ec1a4268e73d2c7b1"],["/posts/34946.html","a6110f101b473cbde7870cd289fd80e4"],["/posts/36204.html","a0b3a7c5486f36de3426563cdde2c224"],["/posts/37390.html","53a4c08edc7de3d0e75deaa46000adb6"],["/posts/37426.html","057c9c61ae33e29fd34df3772f0541b5"],["/posts/39508.html","1c303364ceacae44bd65c8857eefd65e"],["/posts/39704.html","e2134a864752053ef42f10b1f12d772b"],["/posts/3fb6e39.html","144212421f6de9e190d98de2b649df44"],["/posts/40711.html","054cb7965b9e7a6db7e290dc1331abbc"],["/posts/41055.html","81997f959079ee7e7e8503102b78d8d3"],["/posts/4136.html","74623b14114e2f03d2bd5ee13b2000ad"],["/posts/41382.html","471bf7afef0088069554ddf1b19140be"],["/posts/43150.html","bf2770e88216fabb2a5150c924bf9b1a"],["/posts/43249.html","0b9ef6e2323ed1540f311bd5d22eeaf2"],["/posts/4354b039.html","fbb29c4ad08cc87a3def1afc383d0f38"],["/posts/43857.html","dc04522e13c1f6ba1738d1783ffe98b0"],["/posts/44947.html","160d2a82955d9f26a014677a15e1754a"],["/posts/45997.html","d38c47d73e6c908cf19c18eea28d0888"],["/posts/46411.html","a55d3a3b2af40d7b80015142419abab5"],["/posts/47220.html","af9ffd472f99a7f0962082ee17dc56ae"],["/posts/47936.html","c2b7e318c01ed9f6197d3ff6d10c1a27"],["/posts/47985.html","2849ef07a1f872e47e1ef54c7c5667ba"],["/posts/47ce27c8.html","045bb3f8adaa1f0afab09d2482879c0a"],["/posts/48061.html","45672e9e547c9e47c0ec1457d9c2deb8"],["/posts/4a17b156.html","897de72611901b19de523d4f923bc9d6"],["/posts/5010.html","86ee3e1c83f549509b205142bceb7bdd"],["/posts/51417.html","c5aadd33d02e9930dab6a9a12b9479f9"],["/posts/5144bcf.html","32673e509e939ef6dc352dcc8d67bb46"],["/posts/520.html","7cdb67e5e26c62e679d2f799758e4f94"],["/posts/53d1dcfb.html","f786a0c23df7008037e44d807b8a7472"],["/posts/55248.html","b7117669385c5950bff9d324d09f9074"],["/posts/55860.html","19cdbd18df7c543062734682e3acd982"],["/posts/58489.html","08042617652ddb016e115779b3776bfe"],["/posts/59346.html","886dc94d6b4941e099f10bee3c17bbdd"],["/posts/59977.html","4700af9ae3e4f717c1e224be954ec60e"],["/posts/5c0875d6.html","6293e5ffe216372434539a8f2d4e44bb"],["/posts/60364.html","8796d6b1500f6e9b2224314e6bcd94de"],["/posts/6059.html","d9fd248414c6368c9cc33efe456673ef"],["/posts/61794.html","409bcf3ec4200856af1508c91a6916a5"],["/posts/6275.html","cfdd5c687384bfd7f0ccb4695e680c72"],["/posts/62910.html","9a3d87e2570695f47b2c12732d2528e3"],["/posts/62cf8a54.html","96683e06d12d3016e6501574ea31f92c"],["/posts/630.html","fb68ecc27468fb7bcbfef6e1460f9faf"],["/posts/64423.html","5044f310552e4151d75f52c0f443abd5"],["/posts/646dbc2e.html","707ba295296baa8e190fa405c224913b"],["/posts/64846.html","9865e526dd2065c5c4ae5d0952653839"],["/posts/65aeda8b.html","50d29a14c465c06d8fca800cca7afa84"],["/posts/6637aa6e.html","9373a23facd2506abb829bfcd2bdaf01"],["/posts/6656ad65.html","a8e9dc91a806b42050791dcd7aa4020f"],["/posts/6a4da3dd.html","a90f86776ee7d19d3423de8e3ffbe448"],["/posts/6e2faa04.html","82ce8e57ea7faf4acfe573e1361078af"],["/posts/6f521982.html","ece2610de3937055d086476c3d20ca1f"],["/posts/71dd948a.html","f51556de1d5537d4723677ac54411200"],["/posts/773d5f8c.html","92236ae4d9a3c31badb40de3dcf5f4e5"],["/posts/7a179f78.html","ead76742de55046fd287fbf309ddd54f"],["/posts/80bb221f.html","131ecc068cdfe7966ae7f581cf7a4e99"],["/posts/80ca38c0.html","92ff97348965f83daa961133addd9773"],["/posts/818bed05.html","839b22e5c8e1beeccf8f7f4ed1f5f017"],["/posts/8573.html","c42890d9ea9ed8a18225a62e8581e5ea"],["/posts/8589.html","e31df1a7d463bdd252ef8a95ff494b5b"],["/posts/88fead8.html","37a9f8eab0035313dd8d3c83f8c43664"],["/posts/8b540f5a.html","82befd7f9693845b312469b5c93b54f5"],["/posts/8c0ed688.html","fba2b7e6764b8aff55511a70208e256c"],["/posts/8f004046.html","480fd31cf17f80fc8740c16efc3b4290"],["/posts/8f19a96e.html","8ecc56f1b6646e11b6743360a455c519"],["/posts/901b8cd5.html","4229ad8dea3580f9afd6e7610a74e233"],["/posts/9618.html","25690aa7b6d5561cae60de9b005db2ed"],["/posts/9812.html","2bc93980789f58addd72e846593bcea3"],["/posts/9e565f9f.html","9194b5405ab924388974c75781441005"],["/posts/a9378efd.html","fdc9599b6d9ecc76d2bf517ad05454eb"],["/posts/b11c450a.html","4e73f01aad1c3a29e060041c8e36158e"],["/posts/b572816f.html","5f666e1592aca03de30daf54d063f0c2"],["/posts/b6595881.html","bc41ecea83c61a50fd416e67af1c6d71"],["/posts/b794162c.html","438efb2cc6d87894a03e49302ae75103"],["/posts/b7cd6609.html","fe34f037cc43ab6b0c9c3f3d65fe917f"],["/posts/bae4ff13.html","75e8fb16b2ea64b00ebb91c6e2747882"],["/posts/bb9346ce.html","45b09f53b3d5b8ffa2258f16debac860"],["/posts/c54e1e5.html","36be1046dac3fe598c827e501aeac669"],["/posts/ca165cd5.html","e23b0d3db958dd17d271ebdb25bea4ce"],["/posts/cc50857e.html","9bd9aafd60b8436534cff5e54e307448"],["/posts/cfcef26f.html","7847f7cc25e1efec5279fc01a6a33ea9"],["/posts/e4f3239b.html","627f9e0d413a21b35f2af57020ad30eb"],["/posts/e73bc34f.html","e74928b5e16c9d727e35508aec4ddef4"],["/posts/ee789513.html","b67bcdb6d91e88a0bbaa0d3a922afb45"],["/posts/f893cfd3.html","50358b5e65b6ac9e056803d7fdb3e502"],["/posts/f8d580eb.html","24c8249a04b2ce923dab03b7419e8d92"],["/posts/f92cb63f.html","0ed6e2d5d17b35378e0194a827436499"],["/posts/f9586000.html","0aeee7cfecbf7018d20e02bede5ebd79"],["/posts/fbd6efa0.html","cd0da53491d6fc327cb2783266e7d270"],["/posts/ff2330ff.html","e3f53e58fd8a896752ed8623576d81ce"],["/posts/ff995e29.html","e9f7144033c9ec68eb44b7f260aa094b"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","834c77be49018bfdbdff6bffab82045a"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","35f1de0e984f4ccffb2cb11870fd36e4"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","f3a7ecc6a572833c14b6060b927837d9"],["/tags/Anaconda/index.html","25355d64c27ef72808c848747c9dc708"],["/tags/Edge/index.html","7a05b60379e3681fe7b1e7c8d1e08271"],["/tags/Git/index.html","4c21b2b57cebb73fdda2947cb054dab5"],["/tags/Hadoop/index.html","bebfe6f6bf8f4aa45975cdf45987e1ee"],["/tags/Hexo/index.html","06be567c32baa0ac385aae2f8ea51d88"],["/tags/Java/index.html","41c1db2efa2d650af83545dc11d33021"],["/tags/Linux/index.html","8891cddbe9a68f05742f338dfaf429c5"],["/tags/Linux/page/2/index.html","76b8c5868da2a6ed369fde91eef0a173"],["/tags/MapReduce/index.html","f915cebde142ba3d2d97bf3cf7449df6"],["/tags/Python/index.html","f9b8202ca7112620c6731eae23d8f711"],["/tags/Python/page/2/index.html","a9e88fc84742c9d63e0177e5dcc9b946"],["/tags/Python/page/3/index.html","1848bf5150812e2f03043950e255f8e0"],["/tags/Python/page/4/index.html","2f73decef16adfe8794b64277bd9117d"],["/tags/Python习题/index.html","d78bf980ee2a59daa7a991cff7e77a3f"],["/tags/Redis/index.html","d78e81269f46f29e9358419ede6c414f"],["/tags/Tools/index.html","6e061e18f2a532fc37c7499439577f1f"],["/tags/Win10/index.html","5fcc124e632687d935e3b8914c03886e"],["/tags/Windows/index.html","f21d231f8c2bebab919ea32d7c0fb23a"],["/tags/index.html","eab510e5c0c6f7daf040b0ca193408bb"],["/tags/任务栏神器/index.html","e4a54e7e9b4291a9bf4675e695237ae2"],["/tags/图床/index.html","e85e098fcad022c44ab6dc8d49badb7f"],["/tags/数仓/index.html","bccd15ba062607321b4d256f82c6b394"],["/tags/数据可视化/index.html","e03c3e691e37419d8c979f0d4f98b47e"],["/tags/数据可视化/page/2/index.html","f89b3a3ce364de45076994c406b9038a"],["/tags/毒鸡汤/index.html","5458760945a07eff913089e0ec368faa"],["/tags/环境搭建/index.html","e7ebefde8afadeaefe51fe091399b05d"],["/tags/资料分享/index.html","17d455a7bc1b344bc2f3e5eb70b58dc3"],["/tags/面经/index.html","aacd599b23de78d79b808356ce239f10"],["/tools/index.html","a8ef737231b10e4b2ad4487172091f80"]];
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
