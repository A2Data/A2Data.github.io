/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c04e630a552306d73fa33fc091053ac9"],["/README.html","36f69704e240c5e76d21d6a8dd4a1b03"],["/about/index.html","5fe909f5cd92131c8ea1f5c515e4bf6b"],["/archives/2019/09/index.html","749c9abbafaf75dea006d36f8d41c5a9"],["/archives/2019/11/index.html","0691434b79ac1056d8f5e752657608c4"],["/archives/2019/12/index.html","89fefa80a120424a42dd49d84850bcd7"],["/archives/2019/12/page/2/index.html","3b76bfae4391a97c631de4a327bd733b"],["/archives/2019/12/page/3/index.html","5b04f2cddaa36f9b51808582f795f446"],["/archives/2019/index.html","724c7f031cf59dd7f33f1a6437b160a7"],["/archives/2019/page/2/index.html","863e5987dd5f3a9fbfe0c9fe4eef2a1d"],["/archives/2019/page/3/index.html","88fb3760102b445d449772867a8ac99a"],["/archives/2020/03/index.html","a8b5dc52ec305d8aad0c3772b0b87344"],["/archives/2020/04/index.html","f74417110e9ea04d51160dda9fc9ca44"],["/archives/2020/04/page/2/index.html","d4e073b8cb86210a85f8cae6d746407e"],["/archives/2020/05/index.html","6980204370ab67b5b3adb46c2793bfb8"],["/archives/2020/05/page/2/index.html","1f34846f87875ca988caeeb193626b19"],["/archives/2020/06/index.html","8a53bf78f0970db5bd734e8319e648be"],["/archives/2020/08/index.html","700c0ffef724298a1125dc8e94caba0a"],["/archives/2020/09/index.html","2626bc8a1b3f7bd2283231650803fc3d"],["/archives/2020/09/page/2/index.html","731039b81634a46fe0d0f2a4b6cb812f"],["/archives/2020/11/index.html","2c10435efa24ce967deb801d2d2f9ea9"],["/archives/2020/11/page/2/index.html","2f079426368f02df4e12af6d09d35c4b"],["/archives/2020/12/index.html","7b8bb0e94533124f1b3b0c5b455720e9"],["/archives/2020/index.html","4cd52860208eba118327f0801df7bce4"],["/archives/2020/page/2/index.html","451f7d968c83ff0ad5790a85b7db333d"],["/archives/2020/page/3/index.html","85d6d04284ae8e272e8db3d31e187275"],["/archives/2020/page/4/index.html","f311e25cb558aea0bec7da73defd8b1f"],["/archives/2020/page/5/index.html","0401232e9fccf8527431d697994733f9"],["/archives/2020/page/6/index.html","ac98f1b0ad7df45d479c142a762e266f"],["/archives/2020/page/7/index.html","183beb6be4b1f2f8c00408cb1c91def9"],["/archives/2020/page/8/index.html","5436202d29a6937abe578a3309e35d84"],["/archives/2021/01/index.html","b1664268aa254ddc0e9bf04036a4039a"],["/archives/2021/index.html","dbedaec1195dc3b02ffd772641b60b77"],["/archives/index.html","3012045c87285b390677ce7299a987ca"],["/archives/page/10/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/11/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/12/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/2/index.html","ea8adeaa78f1095a62386463eaf60519"],["/archives/page/3/index.html","ea8adeaa78f1095a62386463eaf60519"],["/archives/page/4/index.html","ea8adeaa78f1095a62386463eaf60519"],["/archives/page/5/index.html","ea8adeaa78f1095a62386463eaf60519"],["/archives/page/6/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/7/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/8/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/archives/page/9/index.html","989ae106e18a63a1e7c299b27b7c41fd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","76301c871f171f4092a628d61dea5491"],["/categories/Java/index.html","efff9b665cb054ae1089fd5ef6691493"],["/categories/Linux/index.html","3881f3f303e309a8fce3290f1eb5f1f9"],["/categories/Linux/page/2/index.html","171903225b34b27241914e3676e1dd59"],["/categories/Python/Python入门/index.html","e938c2d7a929e33f22eca3e78a6fc093"],["/categories/Python/Python入门/page/2/index.html","a6ed41f79971f0b5dc18d78aa1ceca42"],["/categories/Python/Python速成/index.html","99059fd6bd48f11123f038a73ddd47ff"],["/categories/Python/Python速成/page/2/index.html","1909d6d700453428cbe235968c18333c"],["/categories/Python/index.html","34dba6b293dfccb5c2ff268c4b817bb2"],["/categories/Python/page/2/index.html","a81bd7117a89224f7d813e90e5500e2c"],["/categories/Python/page/3/index.html","88278cc4f85d201b3c8ef06188556838"],["/categories/Python/page/4/index.html","7d730df49e2d6b76d6decddf4f70ee19"],["/categories/Tools/index.html","e7ee0772d1c43f873b0a2b3cca12c98e"],["/categories/index.html","5f5c8976c7e91eeacc4e0ed508ad74cf"],["/categories/职场/index.html","173d9ecdf56b0f027dd55f17d7396093"],["/contact/index.html","3850cb30a969f713cd704c63d7d31627"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","3b38efd46ffc0985d6a2dadb4c881ed8"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","1fdb0ab776e5c10bdea74ebaa7465bdc"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","4571b373001e7c9b1c70ef1016450704"],["/page/10/index.html","6dcdce882a7b52e3b59c566215e5620a"],["/page/11/index.html","4e1ee1192d9bd724a909086946a0d633"],["/page/12/index.html","0fcf43820fd94403b1da56b431c9bbe2"],["/page/2/index.html","9ee232bbd34fd07fe09eb5f679b4e27d"],["/page/3/index.html","494ba7a0d1431f36891259abb9cb6f56"],["/page/4/index.html","fc95d7d6325b76edf24913614667132a"],["/page/5/index.html","e7359d61e804f798850c526acf3f685d"],["/page/6/index.html","483d08f73e2aabedc76fb015a016f76b"],["/page/7/index.html","9c3a6793793963db150b014aaa540c58"],["/page/8/index.html","f4dd4dcb1cf3ee263744ebb0cf0df9de"],["/page/9/index.html","1d1aa1203c4c7338c69ce7e5794e6b1a"],["/posts/10415.html","fb6a8e558f904c42b9897e7c26e2ecb3"],["/posts/10537.html","1d9db7413f9d2c4702c03f1d7b52e6d5"],["/posts/16550.html","43aa492ac0c01f8eb6ecbf545eedd894"],["/posts/16586.html","13b492777cd8e7350950e487174e647d"],["/posts/17415.html","72db82f8ae2a0ac8bd550ad5134e0da8"],["/posts/17683.html","d5833f0890cad5767c406adfa899c504"],["/posts/18321.html","c09e3a028bf68c00f4ae4466fbe6a108"],["/posts/18572.html","1948b11483f935a2688f93cc84ff0008"],["/posts/19a88b12.html","4616fb1b268e746579e66b511e8105de"],["/posts/1d1dff0b.html","796fa12e6a95e4c8f8c410d90e5a51eb"],["/posts/27081.html","e498b50a8b6a953528f97fe360d24ed1"],["/posts/2834.html","49d0813ca29e83f902ce5598ef4d7b92"],["/posts/29055.html","6a478a5fa64d72acc49ef788dfbbab8b"],["/posts/29966d.html","608ef7764f073f6c455c579a823aaf05"],["/posts/2a327ad2.html","49ede3ca44347974c2e9d09136029b06"],["/posts/2b36786b.html","dbf71d79285a3870d23ec4a89de86ffb"],["/posts/30675.html","7c770dfcba9a645bb0bb7163426bd194"],["/posts/30873.html","034650f1aa7cfe87104bf65a963609a6"],["/posts/32274.html","498585ef4d8ba8144d7736b95d643379"],["/posts/34708.html","0cdf992fec754adfe99a49181e87454d"],["/posts/34771.html","d577107198c3ff74b62aee4ec13c8cd4"],["/posts/34946.html","9469597639e5b9407460e4a16ee95a6d"],["/posts/36204.html","68e5fc966d7e12deaaf020d1418a1cc8"],["/posts/37390.html","92ba2bf66675dee75b211e6d4130bbae"],["/posts/37426.html","5b7b60969dfcabbc177d60bb138cbba4"],["/posts/39508.html","638683198a5c76bd6a081a4554bc53b4"],["/posts/39704.html","de14519ff85132cdb4064758921da0f1"],["/posts/3fb6e39.html","5734407511d734be3c632f43eadfb64b"],["/posts/40711.html","b7a11969bedce5b39fab49efa243097c"],["/posts/41055.html","efbae6df6572d7965d6db2142e5ea0f2"],["/posts/4136.html","9dd8b90c0e10ad4be04cce3032473c37"],["/posts/41382.html","1d2ed4e95a6208078f69e3a468abe590"],["/posts/43150.html","d2a5acea324b5c271f7b4044e8db3ab1"],["/posts/43249.html","76a6cfe11868b61ea102f65e42a608b4"],["/posts/4354b039.html","5170b68dc7585138cf016d04b7683ec4"],["/posts/43857.html","eeecba7c1b8bf704c8b941c3a95b4c9e"],["/posts/44947.html","07f4f769bea736f640ba0e5d8d895e9a"],["/posts/45997.html","d713c1f2759cdd7d450bda68c5d7ca05"],["/posts/46411.html","cca31a52ef1f90c358407759e498ac9d"],["/posts/47220.html","92f7eaff8985fe4f16e7c9e8880c7c9a"],["/posts/47936.html","239b533cd4e31f973744adedcc68d4ff"],["/posts/47985.html","0d346bd4e46ad346136b24e9f54ad486"],["/posts/47ce27c8.html","1f9bd32315dca7e2350ee5756a96238d"],["/posts/48061.html","84f5ccd0c56d1023da36b829fa0b4c47"],["/posts/4a17b156.html","18bc061b47c1fcbf0f67cd28f78f8f4c"],["/posts/5010.html","4ad11c359d6941d804b37af23735f0fe"],["/posts/51417.html","62be7d078f189e3c39545754e64dba4a"],["/posts/5144bcf.html","7093d0172de8a6fd57db771903bdf347"],["/posts/520.html","014e25d7a7704d8bdc2331887afea5f7"],["/posts/53d1dcfb.html","d7bd733535c8ce039055654dbd50b89f"],["/posts/55248.html","28a152232d55dac441dc6a141c16a9a0"],["/posts/55860.html","3f23d6cb97e2e7589a790b9e05f933ab"],["/posts/58489.html","fae5a027020818d45c145cd51b3e1cc3"],["/posts/59346.html","4577e91f008f7fef333aeb490562afed"],["/posts/59977.html","29165f8d1788e7cf74ae0f8eda801068"],["/posts/5c0875d6.html","9eaca46bbc7bf00e684adbf33d197a7c"],["/posts/60364.html","1f73bc429d6f47d484cec49749ae9b6d"],["/posts/6059.html","8246cd75c9a45fbc7c15c448673f3f75"],["/posts/61794.html","5d69f87a3238b641059fed40a4110a19"],["/posts/6275.html","f2125cbf1d414713688f239bc0d8e0b6"],["/posts/62910.html","f0b6f56ed4d2ee49de0f97ed78bf4db6"],["/posts/62cf8a54.html","dec1a1a3752cfc00c4cf381c5fd89aad"],["/posts/630.html","c7cb3334259b8f39ebcbd9ffaaf6e37a"],["/posts/64423.html","fdca82ce9fa1b77f5ad1a531755117ba"],["/posts/646dbc2e.html","7aa28d7baadff5c095283c14dd65cb7b"],["/posts/64846.html","b810cd0f0e8dac129ee0ebcf6bc75834"],["/posts/65aeda8b.html","417bea40bcce600df41e202cbadd1119"],["/posts/6637aa6e.html","ca2f34bdac736fffdc87d85b0dfde988"],["/posts/6656ad65.html","418daa13412cbf38d3e91db75d6d6fb9"],["/posts/6a4da3dd.html","25f2b6cab52b49b6f4e3fbdb4ece15f1"],["/posts/6e2faa04.html","763c68e51a63643ce1a0012b3f598d96"],["/posts/6f521982.html","2c37b1bd7370a06ba59173f52828214d"],["/posts/71dd948a.html","09a6e194ca335981669dd5aecbdc09eb"],["/posts/773d5f8c.html","a69f6f6f662a30aa933969fabc0f78e7"],["/posts/7a179f78.html","d9d2273b7c6dc228ff5695a3e71955e9"],["/posts/80bb221f.html","62cd5dfdab04ea8911ce40cb942fe05c"],["/posts/80ca38c0.html","8fa1063389372125c226c301fbcf05fb"],["/posts/818bed05.html","8b2593ba4d8a269a712aa6f116692693"],["/posts/8573.html","b11236279c66b975be511ba1a8297010"],["/posts/8589.html","5e0ef957da58b37ce893a0b962ca67d1"],["/posts/88fead8.html","7ca908c51ab277817b7745b015ef5027"],["/posts/8b540f5a.html","6d4b440779b3a4a5bdfed19c314733fb"],["/posts/8c0ed688.html","1068d6a7e499d22338e72f39fb30b537"],["/posts/8f004046.html","2f3a30dee477d66cc5648c0d23eef526"],["/posts/8f19a96e.html","d2dfecc557d2daae98160b08ef4f04a4"],["/posts/901b8cd5.html","56cf7e574cac6eabdab836ead07bb5b4"],["/posts/9618.html","a2420af5ebf82c23b227a7ce6dcd0257"],["/posts/9812.html","05ae048d93d9c3338d10db4b4c874928"],["/posts/9e565f9f.html","88d4d1a1e7d3d1ed79f37c3a1917295b"],["/posts/a9378efd.html","72da9d3926b68789af66133006704324"],["/posts/b11c450a.html","794d0242d737f816b862cfb8eb90efbf"],["/posts/b572816f.html","d99c18003edc53f6b5c4fd653157dff3"],["/posts/b6595881.html","b870f752c120d94f21ae9ce0ee2327eb"],["/posts/b794162c.html","c26bfd00ee912df02e5b555a7a83c117"],["/posts/b7cd6609.html","dcea5d7150ecbb4a29da25d6a195ad3c"],["/posts/bae4ff13.html","509ada6fa338d1d8525ca959f9063d43"],["/posts/bb9346ce.html","2a4290b504d55e8d22c29429895e674b"],["/posts/c54e1e5.html","aaad3c0bc63fea76de76ee252da1ed1a"],["/posts/ca165cd5.html","c866ce21d7cc5836a6e536b7a090a488"],["/posts/cc50857e.html","705bd14b712c23f15324bef42746b61f"],["/posts/cfcef26f.html","d74089558ccf2e24e6402df98e0e4adf"],["/posts/e4f3239b.html","6b15157b75170cdcb8e59c951b559828"],["/posts/e73bc34f.html","315e52a45ab138506e39fb5f13098bbd"],["/posts/ee789513.html","2f3c668130cd8dcf5988a633674ce792"],["/posts/f893cfd3.html","0a78329f656a244b3cbe34708b5cba7f"],["/posts/f8d580eb.html","290790f4a0fa251e52e68c56e9d62b56"],["/posts/f92cb63f.html","8272f39e37e56f20afeb528858a53f1d"],["/posts/f9586000.html","c1c7f51cd6dff375feee8b31dd9d34a9"],["/posts/fbd6efa0.html","5f9b34f34a543403162b936bc5ae9fdf"],["/posts/ff2330ff.html","9908c15497b321b1bca9301dc48f8709"],["/posts/ff995e29.html","cd65b340a9da808f47ef47dfe47101e7"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","11ccda119a7ebea78c9facbcb309f35a"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","ffd8cf29299cbe69b95d5451818ab3c5"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","834c77be49018bfdbdff6bffab82045a"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","e24d5c3ee3a9f03fadc48969c631c9a3"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","cdc895e975c00d2045da3d41021495f8"],["/relax/mofang/index.html","f12a625bf295cc99e849e24cdf98d7b3"],["/sw-register.js","eaf20e916c4f04778e1d120a14eabbcb"],["/tags/Anaconda/index.html","de5793919440ff32ddb2df8dffa4a04f"],["/tags/Edge/index.html","759ec8991f2b7e8b740caf50cbc8a99f"],["/tags/Git/index.html","5a1e342e2147137c3a0b11eded5e3996"],["/tags/Hadoop/index.html","8513db2ca2ab2b2caaf9a2bfcc21ccde"],["/tags/Hexo/index.html","a3b0633efd5fa9417f23d7adad524c47"],["/tags/Java/index.html","ed95ca50531941e92c734a96028d1b57"],["/tags/Linux/index.html","c79549494141cad07dadefea08fcb4c1"],["/tags/Linux/page/2/index.html","aaa1a222c44670023fb68f02e365916f"],["/tags/MapReduce/index.html","26516334713e0a9251765ccb6e511ada"],["/tags/Python/index.html","e8192a63822194b24a86a8c28655be2c"],["/tags/Python/page/2/index.html","495246a326b8e0888dbb2d0ff428ee7e"],["/tags/Python/page/3/index.html","23c50f83717a819048fabacdd6ba1567"],["/tags/Python/page/4/index.html","fcceb3c882689560b57c89b5fc910487"],["/tags/Python习题/index.html","9e13d410fa8f200e8e21fc8dadbfb3fe"],["/tags/Redis/index.html","a1c1a6056cd321d1e0ad6c1e792648a3"],["/tags/Tools/index.html","74121b5d39abe955564693168b10e7c4"],["/tags/Win10/index.html","77b338dbbd9bec6a7e1b5ccf1627be32"],["/tags/Windows/index.html","d775845566a3106fbd049f259f8a0225"],["/tags/index.html","ce9a742e2ce275565857d962ec3c88b6"],["/tags/任务栏神器/index.html","683b6a5d7f2cbb289e38a6d8ec550092"],["/tags/图床/index.html","b594cabfe9915db9ca6be60e934d8e4f"],["/tags/数仓/index.html","291926cfa2aab78841c542b0e547390a"],["/tags/数据可视化/index.html","8555973318bc539514d1c6d525e45a19"],["/tags/数据可视化/page/2/index.html","cb92a255f2230976907d1d218d949256"],["/tags/毒鸡汤/index.html","ec34ebba3c29141b69093ebfd36177b6"],["/tags/环境搭建/index.html","8a3f073a72fd854dac07ba74ef128c35"],["/tags/资料分享/index.html","9c65b07fada9f300faa69714c1c706ca"],["/tags/面经/index.html","cc2b8a24b345aab629046ae4ca59d4ea"],["/tools/index.html","a81f6d0df6a55c8096ff58e373450426"]];
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
