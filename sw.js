/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fc4e79785a1e063992481b4e5bd36951"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","f9601bc4292d63c428d83a5fb9f9dc7b"],["/archives/2019/09/index.html","98574415279a7c8755f82c0e66f5eb65"],["/archives/2019/11/index.html","3214a7a3424c6e9d45c035acae55c5eb"],["/archives/2019/12/index.html","68ba9adbd7999c382ed513541ffe7bfc"],["/archives/2019/12/page/2/index.html","6a12fd24fca4d982518996804ac89837"],["/archives/2019/12/page/3/index.html","850b95009401ac20f46a35692ac117d7"],["/archives/2019/index.html","6af64393d79682bf6e02773ea3557943"],["/archives/2019/page/2/index.html","cdf4311a504083baa7e66ba0d6f44637"],["/archives/2019/page/3/index.html","fb0e1925203018e1f4ea21b84437328b"],["/archives/2020/03/index.html","56920dc74fe5468a2e4df09f65a9f761"],["/archives/2020/04/index.html","734c1b420811beab1a2660f067a86baf"],["/archives/2020/04/page/2/index.html","0bb7a31cc375f6839844f5fc03ec3acd"],["/archives/2020/05/index.html","f2e77b8bc57ff9a4e89cd1d25eb0fafd"],["/archives/2020/05/page/2/index.html","91d0efdad29559621be1eeab11daf6ed"],["/archives/2020/06/index.html","3d62f50d883099c37f9bf2dde4056508"],["/archives/2020/08/index.html","d890125bb3ed06051bee6f509553dd90"],["/archives/2020/09/index.html","c2a377b27fc04f983ad4898d931c4846"],["/archives/2020/09/page/2/index.html","7f56ad0ac9e1456652485598b99c6317"],["/archives/2020/11/index.html","ee694eae999f51f4c51f2a6aa6caeaef"],["/archives/2020/11/page/2/index.html","365d2565d1e507cbae04005db8d3c01b"],["/archives/2020/12/index.html","ef429db416632675c58673b2fb6ef169"],["/archives/2020/index.html","bd98b506552fea3099f0d2295a19eb26"],["/archives/2020/page/2/index.html","5d7dfa10ea253ba06a772237cfaa3563"],["/archives/2020/page/3/index.html","bb9b6df201e3173abcf8f878b6a79b70"],["/archives/2020/page/4/index.html","a7ec1586da757139190559d79c16b8e7"],["/archives/2020/page/5/index.html","d09cbff6bab834cc76845ccc380f3a30"],["/archives/2020/page/6/index.html","55350f9a1f54a74575912af91f1306fd"],["/archives/2020/page/7/index.html","40fe26173cc2bd6bbba8441e6b2be706"],["/archives/2020/page/8/index.html","8fddfabad8fca8c2aa9bcf33fa231e04"],["/archives/2021/01/index.html","7036a55d0f08e23ed2d53c23eebc0745"],["/archives/2021/index.html","471244b05a3e2f7a8c70d9db1dc1a182"],["/archives/2023/03/index.html","7956a23b145c38b579cd050ed238d1a6"],["/archives/2023/10/index.html","df57964390fd4a9a8ab45b0dd9406222"],["/archives/2023/index.html","bc7d5f2da7eabdbacdfe1912d316c783"],["/archives/index.html","f2d717e567864a759dff2893913894f1"],["/archives/page/10/index.html","aea676271e5fa37e952d46feebd2436b"],["/archives/page/11/index.html","aea676271e5fa37e952d46feebd2436b"],["/archives/page/12/index.html","aea676271e5fa37e952d46feebd2436b"],["/archives/page/2/index.html","ea3bbf0ed21e49530d5cab6170889951"],["/archives/page/3/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/4/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/5/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/6/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/7/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/8/index.html","01d5e545d11cdffe84ba0f3dd832caa2"],["/archives/page/9/index.html","aea676271e5fa37e952d46feebd2436b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","3ab811484ede8ebc550bda6a3df65e3f"],["/categories/DataBase/Mysql/index.html","de1b0964e87005618d48812ab86f0115"],["/categories/DataBase/Redis/index.html","deeefa5f082fcfc44551245d977a9399"],["/categories/DataBase/index.html","e423c8d039f91aa7661a6f183acd92ef"],["/categories/Git/index.html","0ce3c35ac1474fa6dc7fb444661f3e20"],["/categories/Hexo/index.html","ac5ec494e0fa8865f6395b3fc90b764c"],["/categories/Java/index.html","61328fc060ea1ce3e2780d54510419cf"],["/categories/Linux/index.html","5f6fa8ba1c6cf6ea300219ebfdca7b9d"],["/categories/Linux/page/2/index.html","4c200cc53a06ee1892b2e5c03cc2b9f8"],["/categories/Python/Anaconda/index.html","36d99eab8f97c45e89bafcabb08e7d35"],["/categories/Python/Python入门/index.html","43055cbd1cdd10048ea557985e87603c"],["/categories/Python/Python入门/page/2/index.html","aeb4a75fbdb883d0529f51aa73020e1c"],["/categories/Python/Python速成/index.html","22e5504ccb28eb79410119abe68592f4"],["/categories/Python/Python速成/page/2/index.html","8fdd91697af1e42e785378f7fdefda4d"],["/categories/Python/index.html","6655f224b498d2c5afa474bf2cb184fa"],["/categories/Python/page/2/index.html","569353ef10db993d90d20555e0c0182e"],["/categories/Python/page/3/index.html","4e5ee4f3d5877dead44bfee4246f4386"],["/categories/Python/page/4/index.html","2637a8c985e8c9bf1a8e4dcc2d6e7658"],["/categories/Tools/index.html","889334ca57942a2891ecedebced6c86b"],["/categories/index.html","906042cc3c132cf7454fc64e90e56253"],["/categories/大数据/index.html","e61c8f56071693e7bb3ea19da5e95782"],["/categories/职场/index.html","8c7373625bfc412c76bbe7913fab3018"],["/contact/index.html","f097989dfffa46380961b989874c2817"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","45f8322d81d9e7421b537a1878a1045f"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","2a6fbc4e67a6e8c5fe8b7dc080af9b48"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","59c6694de85dbd9e2a51f1dd87a4e41e"],["/page/10/index.html","a29210cf46179f4c38df3278ae303475"],["/page/11/index.html","af03c8f3692853f4cbe8feb1e2f960a1"],["/page/12/index.html","5fefe7cf894f967843ee41f6300849cf"],["/page/2/index.html","69314cb76d88584a7e99eeba2bef96e8"],["/page/3/index.html","241361a3b03e5807d1fe893fee0e22c6"],["/page/4/index.html","ad8e1dc47c26d5a3d287c4f97399120f"],["/page/5/index.html","787aaa67ff96432092acfff824faf7d6"],["/page/6/index.html","b15f95fb997085d0508fca83f7f33e2a"],["/page/7/index.html","44c30a020cecc9189a5bd09742d7d5b3"],["/page/8/index.html","d2211377ee530bdb3b3bb8a2412642e3"],["/page/9/index.html","186e0c7af0cf9a5e865c1e9394a76806"],["/posts/10415.html","67ce2fc67650b8f900b2b0e5eecdde04"],["/posts/10537.html","377bfb3aea1cef8ae367f3f041b79942"],["/posts/16550.html","15d787d161bc96e713f3af84a47a2f4c"],["/posts/16586.html","acb3543502808e6bc6a62b09e23bfb8c"],["/posts/17415.html","11c242615168aaf7f07dd88263c60ffd"],["/posts/17683.html","c43d1bae6469e3e0992203804eaa9df2"],["/posts/18321.html","a8ab1dad4af1bab328d9aec5015922d8"],["/posts/18572.html","0fd4e257ca36a446466a4a584c943840"],["/posts/19a88b12.html","381c5e7675e55f6837d2444d92ca90b3"],["/posts/1d1dff0b.html","e5fde458b4e6467b59e29f912518d209"],["/posts/27081.html","7192decbba3dd55c9f269a7227c4807c"],["/posts/2834.html","e87c03ae5aa5e1a4c96a9db2a073bd70"],["/posts/29055.html","4ba6de9ad948975d52810e0c2db0d117"],["/posts/29966d.html","2c01e63c33cc51b4dbc31c77eae46398"],["/posts/2a327ad2.html","d6f17b28318eb8fee7b2c7cdba9fdd73"],["/posts/2b36786b.html","9ceb990088a24707b4cf96741b242c1c"],["/posts/30675.html","8215ae560f78c226dac17b0a0b48c128"],["/posts/30873.html","239b413ccddcb364d518fcfc1bf336a4"],["/posts/32274.html","acd82086291d2d81c12c6a9ad35e0334"],["/posts/34708.html","8a1a3165da85383839c82e95bf769779"],["/posts/34771.html","5cecab78883eea455413f66082cf91c7"],["/posts/34946.html","9214cda28248bbf5e6dde8960a8cf04e"],["/posts/36204.html","02cfa1e3ea19028de2ec636fe019072b"],["/posts/37390.html","e7084dd9de25965c770b88b907dc2f21"],["/posts/37426.html","cecccc29f34dfcdf9b5d375c5979a02b"],["/posts/39508.html","84de67a8472ea11e3c856be1f4534d51"],["/posts/39704.html","785baba87c4b2e35d7512fc13de51c4e"],["/posts/3fb6e39.html","6a31bea431824f6fba9e1f11116610bf"],["/posts/40711.html","7a52bdc0340d369a750ef055ca18e4f7"],["/posts/41055.html","756d1c4a197e0160a88c16c6500bdbde"],["/posts/4136.html","18230e82933a425933e1d64e3fc299f2"],["/posts/41382.html","f3c1f7867356c963e68bf2c398d0189a"],["/posts/43150.html","d7fe25742acb4cdced7e1d22c721eb02"],["/posts/43249.html","789cc07f35c0c7bf0ddd2311b9f6b5d3"],["/posts/4354b039.html","def48f6b3a12a89162db58ce1ac47597"],["/posts/43857.html","f224e1f45b8aa0590ed3d0a2d5ea69cb"],["/posts/44947.html","690a84e24fe7123081dc63fe9080446c"],["/posts/45997.html","861db900fb470a38f19cbda06fac8fe1"],["/posts/46411.html","3a930b677fb00e9e8bdc12e350c24477"],["/posts/47220.html","1a3d648687ef581896a099e23981d4ae"],["/posts/47936.html","5e5dd2451b4bb179afc852016bde40b6"],["/posts/47985.html","9dd212a38e2a6260a52a34115ecb39c9"],["/posts/47ce27c8.html","8a65665335d368afebf7e78fbe30f73e"],["/posts/48061.html","7bfca0ebc34b1bb53f3a210507a8800a"],["/posts/4a17b156.html","6a4b50cd4bf6aa71f458eaff265ed227"],["/posts/5010.html","9e9c0391c5424a9bd1ac050548a1d38a"],["/posts/51417.html","c2f51b409421d8574089c86abcdeb013"],["/posts/5144bcf.html","5baaa65b865960b948092be126df5a3f"],["/posts/520.html","6cf93fc6b918b075ef4cd4ddaba49ffb"],["/posts/53d1dcfb.html","b01865ed9323e8743fa1cbdaa816a2d6"],["/posts/55248.html","0a4efe2e0eb9c53b7b6dba2ae5557010"],["/posts/55860.html","8ddd5416acf24fc908f848ca92bee8b0"],["/posts/58489.html","dcf94e9c00b9ab89e17cd11ce3c5d04b"],["/posts/59346.html","0419da79846628a696d2948ec0449fb9"],["/posts/59977.html","449e9ce04f391d3493ee7d51f908d694"],["/posts/5c0875d6.html","6b80a1f879cfad26ce48886e41d3d399"],["/posts/60364.html","206680ef4cb7a2390b8ecbe05e5c97f6"],["/posts/6059.html","303dbefd99c1161561bbfcb16091c458"],["/posts/61794.html","4c6ce3ca25116cf37918eb61eed22a24"],["/posts/6275.html","5795c0a1e896c847fdd5453231d45982"],["/posts/62910.html","0b42fc8306aa970d24746a97d595fad4"],["/posts/62cf8a54.html","b585c029dc514f33ee1e995739acead0"],["/posts/630.html","9597087c53ac4a06ec348baf0c905a4c"],["/posts/64423.html","6467069ac073305d52c140432c146bd7"],["/posts/646dbc2e.html","bb51057b7f14fbb21253f9f2c522f14a"],["/posts/64846.html","ac2ead37b3b529bfdc12e51121c08319"],["/posts/65aeda8b.html","c301615ed698486157f1687dff06a213"],["/posts/6637aa6e.html","622ac0a8fdfdcc7e87e7f8c5375c7fec"],["/posts/6656ad65.html","d3bc82cd00a4cd3d02c098c6a98fc8c5"],["/posts/6a4da3dd.html","eea83a51cc15e4db0daea2bb334e4f1d"],["/posts/6e2faa04.html","cf02dd7c038842bf43b2aebc65d515c3"],["/posts/6f521982.html","cf572dd2ac3b78e1a5f79d270f3dd3dc"],["/posts/71dd948a.html","6502eebeff5960a710493c5f037e65ae"],["/posts/773d5f8c.html","b2936d60de58254f664cd2fb6ab026b1"],["/posts/7a179f78.html","c906122a8c46710ce1daf4db5c9ce6b1"],["/posts/80bb221f.html","dae647e08c965908d4db5e5b874cbaea"],["/posts/80ca38c0.html","90c2975a880dbb8ca6ee0ce34a24b817"],["/posts/818bed05.html","729fcf08d1dfa019d59284b5a9d26e46"],["/posts/8573.html","1ed7c64879cc4500d255a7f3cd4e81bd"],["/posts/8589.html","9a2e4bf9d43120a59cb8dd00e3f53f7b"],["/posts/88fead8.html","36b0f6ae6a0ea0f9bf5abbdb9554d0c7"],["/posts/890d9674.html","5f2e7441b363f278472ccfde92bbcc22"],["/posts/8b540f5a.html","5818bf5c6e1839944bc683c1fcb6a42d"],["/posts/8c0ed688.html","8d10555fb0bf96a47c8be384436f1990"],["/posts/8f004046.html","3569b8bb0eb5546149726dabe251f765"],["/posts/8f19a96e.html","9d4a1a3491a9851a3d9c602e2e15a8e2"],["/posts/901b8cd5.html","71d20c7e2c1e1b39176232222374d2b5"],["/posts/9618.html","ed4847b756068b2f141ea0b6d8643d9a"],["/posts/9812.html","05cc5a39902212184d6baf0b2caaebc8"],["/posts/9e565f9f.html","e10a71e634fa45ddb935059369795f8d"],["/posts/a9378efd.html","80da754601a0a134460361872d305b91"],["/posts/b11c450a.html","54d047037015518cc0a26fdfabbed36c"],["/posts/b572816f.html","129113d02e4d384ad2763922bd277c0a"],["/posts/b6595881.html","a5e09eb2327e779c6667c3cf1def65c0"],["/posts/b794162c.html","3afa2f2664e8f67c6214e3db59d355f4"],["/posts/b7cd6609.html","9f0abe8fa5c30a711aa9e6fdfa7532fd"],["/posts/bae4ff13.html","2802e382ce9991ff72c7f878c5cf3efc"],["/posts/bb9346ce.html","7e26a798816b8b00b10c2159bb818518"],["/posts/c54e1e5.html","e81b6f23fe0524bb73484ce838d4388c"],["/posts/ca165cd5.html","f782c976369a02a0ae21aba4d5b01062"],["/posts/cc50857e.html","8a62e60bba903b3a8a28ed3647cf5089"],["/posts/cfcef26f.html","fea864baadd2fa9dabf0fd4f93df1545"],["/posts/e4f3239b.html","cb2672d2a8aa60252ec2ce0af3b5fb67"],["/posts/e73bc34f.html","f315928dc0cbb58ec89ceb3bd272e8e2"],["/posts/ee789513.html","7ef247945d04db88de655389f5c1d51d"],["/posts/f893cfd3.html","52b7e34b5960f38301ca40b093d3e4d5"],["/posts/f8d580eb.html","822d7d9a74b49c5909232dd019a9539d"],["/posts/f92cb63f.html","403bb6922e1770b2b55e2697dc0951f9"],["/posts/f9586000.html","df0cee788465c44a5b9cf8f452348eb9"],["/posts/fbd6efa0.html","0774ab067fe4d39198b91ad2d5a75b5f"],["/posts/ff2330ff.html","b5eb557dd0538ec331e2549a001ecabf"],["/posts/ff995e29.html","7560dcacde4e7b5f5272e8854dd88db3"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","11ccda119a7ebea78c9facbcb309f35a"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","ffd8cf29299cbe69b95d5451818ab3c5"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","e24d5c3ee3a9f03fadc48969c631c9a3"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","0accd1e2d7ead1c8c58cfefc41cf2c88"],["/relax/mofang/index.html","f12a625bf295cc99e849e24cdf98d7b3"],["/sw-register.js","2b8348dd43c6153ec92e2bc1bcfa71dd"],["/tags/AWS/index.html","b2c696a40450daa97a9d10f7260a6712"],["/tags/Anaconda/index.html","8a702fb8363b4ecf98dbc44e8b6236b8"],["/tags/Edge/index.html","b054c65809af8bad794aff3ca47966c6"],["/tags/Git/index.html","88983371677949ad4a8ecfa250b84687"],["/tags/Hadoop/index.html","40db171ad461a809a0fd4cdb8d3d3b2e"],["/tags/Hexo/index.html","b80bcdd381c2a7a1accc590f887680da"],["/tags/Java/index.html","e01dec16a050ab07c246c0a101a6d380"],["/tags/Linux/index.html","83a81d7b6c569c7ee3f7f369d8abf60e"],["/tags/Linux/page/2/index.html","b85ea6a104653b78db2bf3c3baea51f4"],["/tags/MapReduce/index.html","158892ecf5be32ff95989ed438de1136"],["/tags/Mysql/index.html","c65c27e9346b885dd31989f7ed50c057"],["/tags/Python/index.html","7deb9cc239a3cd31e1804f97134f622e"],["/tags/Python/page/2/index.html","02bbc334f3fe4f9ee36a4a9c26a967b1"],["/tags/Python/page/3/index.html","d09c8e59f83e57cec8839ceaa1dbd288"],["/tags/Python/page/4/index.html","b90d74c55bb0317b51cc85a95bd4d9af"],["/tags/Python习题/index.html","e8c9296337911eda5326b9c4b93de162"],["/tags/Redis/index.html","7c83b4546ce36d5b8acfc92a02668bca"],["/tags/Tools/index.html","091979194787c5ad739ec210cb5b88de"],["/tags/Win10/index.html","1f722687e7b904213dd3de5c4156ca94"],["/tags/Windows/index.html","9c0036c8279258ced2b093e72c17a239"],["/tags/index.html","885169358f5ea3c2d68d90b5e4c5127a"],["/tags/任务栏神器/index.html","9cab659815ebc8cbc117c5e5a113c8c2"],["/tags/图床/index.html","f4ac936963f495a64b1e0e3dd1e2546c"],["/tags/数仓/index.html","32a7856e82b186eabd20a717ca704d39"],["/tags/数据可视化/index.html","161de68aec0cbcf70e4241dd2e104663"],["/tags/数据可视化/page/2/index.html","8edf1ab7a18a2145e67f6a32354861c7"],["/tags/数据库工具/index.html","baea787a4fe1c4ba2208a86ac9cac628"],["/tags/毒鸡汤/index.html","5f8cd2c8ad8701ca3697517f8e79c099"],["/tags/环境搭建/index.html","39e4bdf927d65e8d0dd072ba5c89868c"],["/tags/资料分享/index.html","69e24e87f85c9001cb7a975810929819"],["/tags/面经/index.html","0da5a99be4c20548db58e280b90b13e2"],["/tools/index.html","e1b13c40c746b7fc1068ac8f0620b416"]];
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
