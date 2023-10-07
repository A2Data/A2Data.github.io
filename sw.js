/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","75f01c33d32975c3a5299e1283155bd4"],["/README.html","133962074985f907a062bd5e2f3ffb06"],["/about/index.html","adadd478ebea21017a5c7e9fc105cf04"],["/archives/2019/09/index.html","6a46cb269dbf17afd6142799b0f078db"],["/archives/2019/11/index.html","bfd5052d8086f70b6b07667f8a88c8bb"],["/archives/2019/12/index.html","f83a02703e2b2f0fd7a6acd9c183f46b"],["/archives/2019/12/page/2/index.html","bd0def07df40026f1cc73044e65bd9c8"],["/archives/2019/12/page/3/index.html","d7676b43359b915d42383b1190fa2007"],["/archives/2019/index.html","3c56cd514de5df7315bec676591911bb"],["/archives/2019/page/2/index.html","1772a9fd54ae8e3742d7032a87eac0e3"],["/archives/2019/page/3/index.html","40915228a52cb7a091f5b631f535952a"],["/archives/2020/03/index.html","13c34a8df2f5f5d23bab4ba6248b02e9"],["/archives/2020/04/index.html","57e0f8e2b88775558b7de1e0875cbf0d"],["/archives/2020/04/page/2/index.html","3e7aa01494df59f0d52c7b63d30448ba"],["/archives/2020/05/index.html","47d0b9486892435b1baedd5db57185bb"],["/archives/2020/05/page/2/index.html","fa8b44f09ca77cc0c4bd050172b4e25d"],["/archives/2020/06/index.html","b7b50ad6fefef80f8133471089fd24ff"],["/archives/2020/08/index.html","9c68a447b214ef621b1896c07a21ecfc"],["/archives/2020/09/index.html","5f70f33d81823987474b09b28937cbc6"],["/archives/2020/09/page/2/index.html","2e099e5b5d7fc600ed1b3292ee4c4ba6"],["/archives/2020/11/index.html","7c580af6b46befb04bb9bbdf2be542e0"],["/archives/2020/11/page/2/index.html","5a02cc29a556151a37ef6c4247972873"],["/archives/2020/12/index.html","621ceb78fa587af3b11eb955d5eced8c"],["/archives/2020/index.html","e17540889a3013202eb268afc49e30cc"],["/archives/2020/page/2/index.html","89d0dba7bd0024281771039cb7a01ce2"],["/archives/2020/page/3/index.html","8cbb9c3966d256656bc745b9d2a88e00"],["/archives/2020/page/4/index.html","6a9660c16460953334569029893174a7"],["/archives/2020/page/5/index.html","c8d7b05a9b513894c1ed7d488a71ca60"],["/archives/2020/page/6/index.html","bbffc49b460cccac183afecef3d3de42"],["/archives/2020/page/7/index.html","5ea45928dddb8679da127a7b0cf5a1af"],["/archives/2020/page/8/index.html","56b00ec3db464df29f633fd084a0628e"],["/archives/2021/01/index.html","96647328621572bc2182e774004c94a3"],["/archives/2021/index.html","07ebc37d287da0f257a5c3c01069d409"],["/archives/2022/07/index.html","fd4fca4a94b4f88e1373fb643a58e620"],["/archives/2022/index.html","4f2e1f7dcdbd540b711895a8b971074c"],["/archives/index.html","e93f6c076c8a8172eba265183da8a80a"],["/archives/page/10/index.html","6dcbcfcd66046c3997fde37a72737eb9"],["/archives/page/11/index.html","6dcbcfcd66046c3997fde37a72737eb9"],["/archives/page/12/index.html","6dcbcfcd66046c3997fde37a72737eb9"],["/archives/page/2/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/3/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/4/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/5/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/6/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/7/index.html","903a28b8d833b85524aaff76f645c2b3"],["/archives/page/8/index.html","6dcbcfcd66046c3997fde37a72737eb9"],["/archives/page/9/index.html","6dcbcfcd66046c3997fde37a72737eb9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","e34025aa84b20faca3f0c34f40c71cd7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","7f9fe111f9886ba447a0bc260794fded"],["/categories/DataBase/Mysql/index.html","173716755e9212bbe57f9564de9e5ae1"],["/categories/DataBase/Redis/index.html","6a56fbf0cf8fba0e9a51a1f3b83f8314"],["/categories/DataBase/index.html","41879616f44d563a61acf4fa669258b2"],["/categories/Git/index.html","94f4b184049b705146a1dbcb50fb9d99"],["/categories/Hexo/index.html","fec195e70195fa3ac30176c0394c4e66"],["/categories/Java/index.html","e3d8220ab02f5f4b3044e2fc0d90fcef"],["/categories/Linux/index.html","1aaa40273697463610ae37261a0b6d06"],["/categories/Linux/page/2/index.html","351f03c91ef3ac428c328c63bcb76df7"],["/categories/Python/Anaconda/index.html","d3d06e290ee2242ecc0ba9fb6e9d18c7"],["/categories/Python/Python入门/index.html","d22b2426794e3dc503efaed5f3a60ec1"],["/categories/Python/Python入门/page/2/index.html","5070324cc87625de2620ce257ba51b04"],["/categories/Python/Python速成/index.html","0d5425a491549110adc8e3f3d8e4f080"],["/categories/Python/Python速成/page/2/index.html","06b11005037d471ab595c218311864d6"],["/categories/Python/index.html","944f99d000f47323b403672815de0278"],["/categories/Python/page/2/index.html","ab8dc91880667762000f11be98b1114c"],["/categories/Python/page/3/index.html","85de94394c9c89a76b95a56a6c566f39"],["/categories/Python/page/4/index.html","30c7cfd5e6ec4e9a824a695814336bde"],["/categories/Tools/index.html","a77e9166db53dc21b6f875753acebd02"],["/categories/index.html","2737f15e723c41c39ed2126bcc2d00fb"],["/categories/大数据/index.html","ad458a2284764cfb4bc0793fe4edbc4f"],["/categories/职场/index.html","55c8d5a89db364e1792beb999774b728"],["/contact/index.html","5fd520cabbafa839f7ad0fecb67deece"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","18e938a543f5bb6c950b10a1de3576ee"],["/friends/index.html","80979539f9d20599a3d0c1f05ac194ee"],["/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/index.html","860a1baddb37457feb970a0455a59289"],["/js/aplayer.js","a076f40122f81f245bb85bb75e943acc"],["/js/app.js","78e31f715148747117805021938e8329"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/movies/index.html","0405f4d86e2ce176e3ca0b4b5187ae18"],["/page/10/index.html","54a3fa9f83bc1f0b409fdc3eb980bb13"],["/page/11/index.html","faaabae9eebbbcacf98dd798e2d035f4"],["/page/12/index.html","dd8fa18672c2970cebb5dd6a3dc6fe27"],["/page/2/index.html","ef604b5e97599d41a0cd71406db2639a"],["/page/3/index.html","601444571a70297bd23242406aad2fba"],["/page/4/index.html","eff94127f571f8c55e53dd341584c7a5"],["/page/5/index.html","cb86c34c37c57fac4c6e8216ec12ea9b"],["/page/6/index.html","05531a4dbd8482cdc91ae563870fe264"],["/page/7/index.html","1943a8e8699085dc833d68906251f0ff"],["/page/8/index.html","c43555b1839328279c9d405c1f331b76"],["/page/9/index.html","0aa70cc6d5306e5d9d6e418ca5fd0b93"],["/posts/10415.html","c3170afafb31c709d6842615e4b9b430"],["/posts/10537.html","42b468d6af0b0dbaae7b109f0bc138e8"],["/posts/16550.html","f3805df6c60a16154ce2c4c20f888821"],["/posts/16586.html","c143f1880dc1605aa5e0ba457d7da41e"],["/posts/17415.html","e20a41c559ac126f47d35d26785ea9f2"],["/posts/17683.html","2db687fddffb8d52e66ee6acebcd0c15"],["/posts/18321.html","3ec64b3e325a7a0eaa382fc564678538"],["/posts/18572.html","8557161e1e6d3c495e6866856a44a9b1"],["/posts/19a88b12.html","7eec39bace663dd711cf08dba5cde747"],["/posts/1d1dff0b.html","8220fc3e0290f196213361a25f143c46"],["/posts/27081.html","04d61372a42a89de20088dc5b129f94e"],["/posts/2834.html","2a6e83e83708a5831348b790e8c8067c"],["/posts/29055.html","ba1132072c5f11f3eaeb042038952e01"],["/posts/29966d.html","137f58ac91764ade3b2e01e98c72f7d9"],["/posts/2a327ad2.html","2a6ee8520ee7074c7d5cb785236fea91"],["/posts/2b36786b.html","9d6a45dd52a1ca8cf142ff77ef416360"],["/posts/30675.html","40851cd70fac3ad5929c3cd118703fba"],["/posts/30873.html","d1cac8d1307d4bb776f643e0419fe0d9"],["/posts/32274.html","508d0ae52492cf455f3d386f9b5a52f4"],["/posts/34708.html","54a843e9543abd0f2eaae0c973fd1fb4"],["/posts/34771.html","c4673ff4013f9470fc84deeb7c638e77"],["/posts/34946.html","b93c4e5210bc5616839610acb97fe57e"],["/posts/36204.html","84b7784dc2024b1836314d651d5ad4ef"],["/posts/37390.html","6d87eb59106a4795a9e25768a5c5ec96"],["/posts/37426.html","61231cc7f5540cc70d51406a330d7b2a"],["/posts/39508.html","62fcb79c27600cabf8f1077bf637ccdf"],["/posts/39704.html","dda21e78be42f47c708fb36fa5ed3e74"],["/posts/3fb6e39.html","f9ba7ad8e64f1f9ed553c5b3e3a7689f"],["/posts/40711.html","fd6897b1028987cf7f5667c07f4f28de"],["/posts/41055.html","093413e4c452f920da433a33e385c2cf"],["/posts/4136.html","9f378df12165f69f18ddc847acdfa3e7"],["/posts/41382.html","57f118ada515e918667a251174d5fb1b"],["/posts/43150.html","c439c6b7dc5e4b74e329bb68548fe24b"],["/posts/43249.html","637746053feee629cb1628d0afeb9d65"],["/posts/4354b039.html","b7eadd7a15781011427f8c6ce0d9c0f1"],["/posts/43857.html","1b98c23f6b20eb6ac31c731652689e75"],["/posts/44947.html","23e261d6e62a0a61884285c5a96222f0"],["/posts/45997.html","b2084cfdc00eb1a13180a6de29b3f005"],["/posts/46411.html","4bee9fc5b8b3123a23cabf8c787c376f"],["/posts/47220.html","0a8bf16bd64d74c21042cf5aa1f4964c"],["/posts/47936.html","a1ad17abf455a3fc5e7862b5b7bb1849"],["/posts/47985.html","90ffbd8220e25d1e4e9e7010623e91d3"],["/posts/47ce27c8.html","9eb784a00bf1cd1a0d96216e1c3e51f7"],["/posts/48061.html","6bf7767773a55e3d191379d5d054ef63"],["/posts/4a17b156.html","2284b738482d065d9a0c49617e1406c9"],["/posts/5010.html","d3c59206e2d22f7dd0ddf5be370f6e20"],["/posts/51417.html","a8e304e7bb64dad7f361bbcfb92916f0"],["/posts/5144bcf.html","2f89e6d0a18e9ddb3ed195c047054860"],["/posts/520.html","4ec48c1ea0c16118716f1fa243af8fa2"],["/posts/53d1dcfb.html","edf8bd592256d331e1626558b7e48050"],["/posts/55248.html","00f817d6c9cb51c48b8f8e13b9a87197"],["/posts/55860.html","00087c429c4084034fd7493681f2b710"],["/posts/58489.html","0a7b1909bf9105ef909c69153b89aac6"],["/posts/59346.html","af3309fff779f1c15f7d29d9cd688f0e"],["/posts/59977.html","7c84ad12b2f97f80692683810f0a0d04"],["/posts/5c0875d6.html","0072e63d9c2fccc2df01df3d840a654a"],["/posts/60364.html","73298f3585984edb6a4add81ca23c5fe"],["/posts/6059.html","36d5fc595014b03868047819663135cd"],["/posts/61794.html","f79592584e07b134cd09491141feff84"],["/posts/6275.html","ef835d3bb4d468975bcc57fd1fe34e37"],["/posts/62910.html","3751ca2c1300e7dd0d4365d7edddf69a"],["/posts/62cf8a54.html","49c81c0cd0687a8e6ada6e157160b32a"],["/posts/630.html","4bd6bfd47f2240b45750580164257a41"],["/posts/64423.html","eb17cddd8af7d0de72087c18eb760c9c"],["/posts/646dbc2e.html","72e7d18bbac5e506706c0ff7130717d7"],["/posts/64846.html","c2918e9d72996e4720bf029edf371877"],["/posts/65aeda8b.html","466d9c41d5bafd8e1091c5d4f4eff6d4"],["/posts/6637aa6e.html","9a8c4f235d8d4d981e534ef23da69ece"],["/posts/6656ad65.html","13a3e01c8cd1d38aefeefbb95bd71b29"],["/posts/6a4da3dd.html","3d200d3cdf13fbd41f1c9996e791aff6"],["/posts/6e2faa04.html","5302a1de1f629106c9864d4e0417a6ab"],["/posts/6f521982.html","a5ef7dbb27805004035efc7ccf510067"],["/posts/71dd948a.html","1bd634da8bc7e0e82ee856e1d89afb67"],["/posts/773d5f8c.html","fdc9ff0314ac7b8602d8a1401506f65f"],["/posts/7a179f78.html","966c8d41b6ef4ce11c3c7fe5d023fcef"],["/posts/80bb221f.html","21178e6fb242bad63a84f185674d2bf4"],["/posts/80ca38c0.html","867f1f550d4f5f6bb2552cbed9e366b9"],["/posts/818bed05.html","d678c34e3ebb65e37226907db3cf8b82"],["/posts/8573.html","f84f075bf38cd0f097ee68b107d28e4a"],["/posts/8589.html","b23fe8dfee3bcf7db565737e9d9f7f42"],["/posts/88fead8.html","99745d061b6610cd3af63560d2e869be"],["/posts/8b540f5a.html","260db0ab324b1902fb8e5bcadbd11a67"],["/posts/8c0ed688.html","fc416bdf155580dbbdfece144fdc5415"],["/posts/8f004046.html","4c48ea87a79424ac507883b8125dae28"],["/posts/8f19a96e.html","c7a80985459ca71827fd1a9ef8abab98"],["/posts/901b8cd5.html","4c03292516d7dfd3c1943126e878d497"],["/posts/9618.html","01e7472373f11b0121860450828acfba"],["/posts/9812.html","a224a19313b60631a7ca9c752de19d45"],["/posts/9e565f9f.html","7deeb7f44814d983647f103f6f60735f"],["/posts/a9378efd.html","07c11b7547e1d894530eacd811de87ae"],["/posts/b11c450a.html","ff579acbdbf452e1ab3515f6bc6b9c4b"],["/posts/b572816f.html","e6a2e744e134cb38662fe0f888aa92aa"],["/posts/b6595881.html","cd43ac3bb5a8e7cb04e8e3a821d56868"],["/posts/b794162c.html","b3821c6e289ffb399b201c7883efba0a"],["/posts/b7cd6609.html","a5ba1cf62ed7998227f0763443278214"],["/posts/bae4ff13.html","1d6c2f05503da3a82cf0b09204493eb8"],["/posts/bb9346ce.html","2ef4b53c1de2df22698c80cf2f34ed28"],["/posts/c54e1e5.html","ccc18a433f00f32e5b1bfa11590e6903"],["/posts/ca165cd5.html","48c43f63d7e12a5bd08b58c927a4b2ac"],["/posts/cc50857e.html","14ec845c76cc3286fb2f2712cfa8899d"],["/posts/cfcef26f.html","efbb8c621dbca997a917ec5a212473a2"],["/posts/e4f3239b.html","59d35a5acfcdd1a53d743f5f9d59dd1c"],["/posts/e73bc34f.html","663f98f132318cbc1870aa8552a20110"],["/posts/ee789513.html","eee41c43946a1089190457d68f8a97f5"],["/posts/f893cfd3.html","a655c92199c1556340539667bf68d9f7"],["/posts/f8d580eb.html","c470cbfe867cbdbc84964a09b1e1410b"],["/posts/f92cb63f.html","ef2a76b633cf358f0cf783a5eedf2269"],["/posts/f9586000.html","76352ac2663cef75c261bb94668ff0a2"],["/posts/fbd6efa0.html","c960cd2a407483f578ce6cee2563ce27"],["/posts/ff2330ff.html","6b2a511f2e1cc0e79e95b84df7e1b7f9"],["/posts/ff995e29.html","34a313f55b4d3f809c5c12856c8681db"],["/relax/2048/amam.png","952cb93e5881707dd59413e7d38ee74e"],["/relax/2048/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/relax/2048/css/style.css","b5fc3c1bf80fd597756d15e41edf73eb"],["/relax/2048/css/xsStyle.css","33098ea9bb75de29f1b3378ed7e97dcd"],["/relax/2048/index.html","c41cf2d5643598ae6ca86d69b1be1aaa"],["/relax/2048/js/animation.js","906e40f34f22bbe6c5c4aeb7eea7a6d4"],["/relax/2048/js/cellStyle.js","23153259cfc5800d193e78eca016e21a"],["/relax/2048/js/game.js","1d55c8d59ea3d55365db169348bd2319"],["/relax/home/404.html","c22cea616685260d411999c4b7e61055"],["/relax/home/css/FiraCode.css","38ed87a31478b6e57a02ac08a160b4e3"],["/relax/home/css/nutssss.css","ae7e43fdbc3eec308c5c448c5f9d52e3"],["/relax/home/img/001.png","b22ebb86cde261910b3cfbec78bd4577"],["/relax/home/img/002.png","c2d0ab480360cc4e41ba03531c330367"],["/relax/home/img/003.png","770d15c52ac875cd9713292f0bef05d2"],["/relax/home/img/004.png","53982a66e033a5249e1ad1fe799a67fb"],["/relax/home/img/banner.jpg","2ad38413bb8a8ac22e8d3e6a7839d827"],["/relax/home/img/bg.jpg","9ec443dfe329c0d76d946a51a2911efe"],["/relax/home/img/fish.png","e615b713e200ede658617dd7d331a35e"],["/relax/home/index.html","a2b2cea1d32854a8feaec61ad44cee1c"],["/relax/love/confession/css/theme.css","9c9323a06f2960664f3e2009f66fc180"],["/relax/love/confession/images/1.gif","14306fa49578be775db5a521f6dff77a"],["/relax/love/confession/images/2.jpg","251b97f5232d902c4dc39b9806c5fbaf"],["/relax/love/confession/images/3.jpg","fdf4cd217aad682833770122560f35ad"],["/relax/love/confession/images/emoji_bixin.jpg","8297ca4dd700d3a45186e592d8f57e6e"],["/relax/love/confession/images/emoji_kelian.jpg","33b66ae8ad7fed2f2348677c334a1d52"],["/relax/love/confession/images/music_note_big.png","bb8378814e8a44fa4ea27652fdc0bd16"],["/relax/love/confession/js/jquery-2.0.3.min.js","a7bd4a3d9af68a612fe8d3136175da4a"],["/relax/love/confession/js/jweixin-1.2.0.js","d0415b2b3cfe9008cee98607b3309876"],["/relax/love/confession/js/typed.min.js","88cd47041a514f10c6fb37366c459663"],["/relax/love/index.html","87238c4b84a99148cf7d71f3a12676c5"],["/relax/mofang/index.html","12c78dfda8049626c1b535a7dce65dcf"],["/sw-register.js","cbeb4b11e81b2876e87e539d3f0ea27b"],["/tags/Anaconda/index.html","a778db97593d32886c0fd247ce13a15c"],["/tags/Edge/index.html","9ebc0fa1297e56ddd6534bdbda668ed9"],["/tags/Git/index.html","256ab3238b468a4216031112db173e56"],["/tags/Hadoop/index.html","3b9491624dd5add440e25748c4ef080a"],["/tags/Hexo/index.html","a6e0b4cd740f222323eee21eeb024662"],["/tags/Java/index.html","5033d7e2b66f04c51c5b97c831127dea"],["/tags/Linux/index.html","dd3a359f082ec0752faaf2835d899058"],["/tags/Linux/page/2/index.html","6cc66a4bbc896aa026b5a589ecdcbcdc"],["/tags/MapReduce/index.html","17691bd9177950c14b405b2e892504b6"],["/tags/Mysql/index.html","bdac9a7334dd3b65df240f057438211a"],["/tags/Python/index.html","dd02839be8a72a8de58c0697999790d5"],["/tags/Python/page/2/index.html","fbf10b3f6c1ae7d9b6555473d5602ce9"],["/tags/Python/page/3/index.html","39bce5fb73712ad159f77b5bd83a42ff"],["/tags/Python/page/4/index.html","719a0eef789f258622cc47864c532258"],["/tags/Python习题/index.html","44dbd46feb9ac98226952df2cd804917"],["/tags/Redis/index.html","0e460d1f329a34918b1f7f3dacd64578"],["/tags/Tools/index.html","8356a148d8a328e3496cc410b57d3bd3"],["/tags/Win10/index.html","263fafa43616df76b7b45b1b568f895a"],["/tags/Windows/index.html","46c31ca2f1fbe75cfeeaa76206f59f0b"],["/tags/index.html","57b019fa658cf66a4167241cde47c36f"],["/tags/任务栏神器/index.html","52e94db1d099231b3724e67305954e6d"],["/tags/图床/index.html","6801644032e71e7759be9ee39aa7c944"],["/tags/数仓/index.html","c20fd66edcf11d4253216b8e598c7869"],["/tags/数据可视化/index.html","182cd117ac4f50064177be8ea866bc24"],["/tags/数据可视化/page/2/index.html","09dd696979880919997f0d6664d42521"],["/tags/数据库工具/index.html","d1f7c585b48843aed170af0a8dba4235"],["/tags/毒鸡汤/index.html","fae8979764536d82cbf71b1724dec9fc"],["/tags/环境搭建/index.html","bea3b2f788ed58edbc9e1383eee3c22e"],["/tags/资料分享/index.html","bec65ef63055821dd89706d79115a56d"],["/tags/面经/index.html","012ef1fc362fdf487ede033d13809d04"],["/tools/index.html","4cb848db4fc56afe14fb4a842962843a"]];
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
