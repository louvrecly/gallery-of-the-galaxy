(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,6,7,8],{347:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("63cae4be",content,!0,{sourceMap:!1})},348:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("a355c456",content,!0,{sourceMap:!1})},349:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("829e1210",content,!0,{sourceMap:!1})},350:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4138b1a4",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(347)},352:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".like-button[data-v-31d30aa5]{transition:color .3s ease}.like-button.liked[data-v-31d30aa5]{color:crimson}",""]),o.locals={},t.exports=o},354:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("53f45adc",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n.r(e);var o={props:{isLiked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.isLiked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.isLiked)}}},r=(n(351),n(11)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("IconButton",{staticClass:"like-button",class:{liked:t.isLiked},attrs:{"icon-name":"heart","icon-type":t.iconType},on:{click:t.toggleLike}})}),[],!1,null,"31d30aa5",null);e.default=component.exports;installComponents(component,{IconButton:n(144).default})},356:function(t,e,n){"use strict";n(348)},357:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,'.wrapper[data-v-95b08872]{display:flex}.wrapper .media[data-v-95b08872]{border:none;height:auto;width:100%}.wrapper .media.video[data-v-95b08872]{aspect-ratio:4/3}.wrapper .media.div[data-v-95b08872]{align-items:center;background-color:#222;border-radius:8px;color:gold;display:flex;justify-content:center;padding:30px;transition:background-color .3s ease}.wrapper .media.div[data-v-95b08872]:before{content:"Invalid Media Type"}.wrapper .media.div[data-v-95b08872]:hover{background-color:#202020}',""]),o.locals={},t.exports=o},358:function(t,e,n){"use strict";n(349)},359:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-0d273554]{font-size:13px;line-height:20px}.text-small[data-v-0d273554]{font-size:16px;line-height:24px}.text-normal[data-v-0d273554]{font-size:20px;line-height:32px}.text-large[data-v-0d273554]{font-size:30px;line-height:42px}.text-larger[data-v-0d273554]{font-size:50px;line-height:64px}.text-bold[data-v-0d273554]{font-weight:700}.text-italic[data-v-0d273554]{font-style:italic}.container .header[data-v-0d273554]{align-items:center;display:flex;justify-content:space-between;padding:20px 20px 10px}@media only screen and (min-width:768px){.container .header[data-v-0d273554]{padding:20px 30px 10px}}.container .header .info[data-v-0d273554]{cursor:pointer;flex:1;margin:0 10px 0 0}.container .header .info .title[data-v-0d273554]{color:gold;font-size:16px;line-height:24px}@media only screen and (min-width:768px){.container .header .info .title[data-v-0d273554]{font-size:20px;line-height:32px}}.container .body[data-v-0d273554],.container .header .info .date[data-v-0d273554]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.container .body[data-v-0d273554]{padding:10px 20px 20px}@media only screen and (min-width:768px){.container .body[data-v-0d273554]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.container .body .explanation[data-v-0d273554]{height:100%;margin:0 0 20px;max-height:1000px;overflow:hidden;transition:max-height .3s ease}.container .body .explanation.collapsed[data-v-0d273554]{-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer;display:-webkit-box;max-height:40px}@media only screen and (min-width:768px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:48px}}@media only screen and (min-width:1025px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:52px}}.container .body .copyright[data-v-0d273554]{text-align:right}",""]),o.locals={},t.exports=o},360:function(t,e,n){"use strict";n(350)},361:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".media-canvas[data-v-ab401552]{opacity:0;transition:opacity .7s ease;width:100%}.media-canvas[data-v-ab401552]:hover{opacity:1}",""]),o.locals={},t.exports=o},362:function(t,e,n){"use strict";n.r(e);var o={props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"}},computed:{mediaComponent:function(){switch(this.mediaType){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(){switch(this.mediaType){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}}}},r=(n(356),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e(t.mediaComponent,t._b({tag:"component",staticClass:"media",class:t.mediaType},"component",t.mediaProps,!1))],1)}),[],!1,null,"95b08872",null);e.default=component.exports},363:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1}},data:function(){return{collapsed:!0}},methods:{infoOnClick:function(){return this.$emit("infoOnClick",this.date)},toggleLike:function(t){this.$emit("like",t)},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},r=(n(358),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"info",on:{click:t.infoOnClick}},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),e("LikeButton",{staticClass:"button",attrs:{"is-liked":t.isLiked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),e("div",{staticClass:"body"},[e("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v("\n      "+t._s(t.explanation)+"\n    ")]),t._v(" "),t.copyright?e("p",{staticClass:"copyright text-italic"},[t._v("\n      © "+t._s(t.copyright)+"\n    ")]):t._e()])])}),[],!1,null,"0d273554",null);e.default=component.exports;installComponents(component,{LikeButton:n(355).default})},364:function(t,e,n){"use strict";n.r(e);n(73);var o={props:{angle:{type:String,default:"0deg"},startColor:{type:String,default:"#00000000"},endColor:{type:String,default:"#00000099"}},computed:{backgroundImage:function(){return"linear-gradient(".concat(this.angle,", ").concat(this.startColor,", ").concat(this.endColor,")")}}},r=(n(360),n(11)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"media-canvas",style:{backgroundImage:t.backgroundImage}},[t._t("default")],2)}),[],!1,null,"ab401552",null);e.default=component.exports},367:function(t,e,n){"use strict";n(354)},368:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".media-post[data-v-00245a2f]{position:relative}.media-post .canvas[data-v-00245a2f]{max-height:100%;overflow:auto;position:absolute}.media-post .canvas.bottom[data-v-00245a2f]{bottom:0;left:0;right:0;top:auto}.media-post .canvas.fixed[data-v-00245a2f]{position:fixed}",""]),o.locals={},t.exports=o},506:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1},isCanvasFixed:{type:Boolean,default:!1}},computed:{postLink:function(){return{name:"date",params:{date:this.date}}}},methods:{toggleLike:function(t){this.$emit("like",{date:this.date,like:!t})},navigateToPost:function(){return this.$router.push(this.postLink)}}},r=(n(367),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"media-post"},[e("NuxtLink",{staticClass:"link",class:t.mediaType,attrs:{to:t.postLink}},[e("MediaComponent",{attrs:{url:t.url,"media-type":t.mediaType,title:t.title}})],1),t._v(" "),e("MediaCanvas",{staticClass:"canvas bottom",class:{fixed:t.isCanvasFixed},attrs:{angle:"180deg"}},[e("MediaPostContent",{attrs:{date:t.date,title:t.title,explanation:t.explanation,copyright:t.copyright,"is-liked":t.isLiked},on:{like:t.toggleLike,infoOnClick:t.navigateToPost}})],1)],1)}),[],!1,null,"00245a2f",null);e.default=component.exports;installComponents(component,{MediaComponent:n(362).default,MediaPostContent:n(363).default,MediaCanvas:n(364).default})},507:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var o=n(346),r=n.n(o),l="2021-01-01",d=14,c=r()(l);function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=r()(t);return e.isValid()&&e.isBetween(l,r()(),"day","[]")}function h(t){var e=t?r()(t).subtract(1,"days"):r()(),n=Math.min(e.diff(c,"days"),d),o=e.format("YYYY-MM-DD");return{startDate:r()(o).subtract(n,"days").format("YYYY-MM-DD"),endDate:o}}},508:function(t,e,n){"use strict";n(36),n(28),n(35),n(12),n(47),n(31),n(48);var o=n(13),r=(n(74),n(75),n(53));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={computed:d({},Object(r.c)({likedPostDates:"getLikePostDates"})),methods:d(d({},Object(r.b)(["toggleLikePost"])),{},{isPostLiked:function(t){return this.likedPostDates.includes(t)},toggleLikePostAndSaveInCookies:function(t){var e=t.date,n=t.like;this.toggleLikePost({date:e,like:n}),this.$cookies.set("liked-post-dates",this.likedPostDates)}})}},511:function(t,e,n){var map={"./af":371,"./af.js":371,"./ar":372,"./ar-dz":373,"./ar-dz.js":373,"./ar-kw":374,"./ar-kw.js":374,"./ar-ly":375,"./ar-ly.js":375,"./ar-ma":376,"./ar-ma.js":376,"./ar-sa":377,"./ar-sa.js":377,"./ar-tn":378,"./ar-tn.js":378,"./ar.js":372,"./az":379,"./az.js":379,"./be":380,"./be.js":380,"./bg":381,"./bg.js":381,"./bm":382,"./bm.js":382,"./bn":383,"./bn-bd":384,"./bn-bd.js":384,"./bn.js":383,"./bo":385,"./bo.js":385,"./br":386,"./br.js":386,"./bs":387,"./bs.js":387,"./ca":388,"./ca.js":388,"./cs":389,"./cs.js":389,"./cv":390,"./cv.js":390,"./cy":391,"./cy.js":391,"./da":392,"./da.js":392,"./de":393,"./de-at":394,"./de-at.js":394,"./de-ch":395,"./de-ch.js":395,"./de.js":393,"./dv":396,"./dv.js":396,"./el":397,"./el.js":397,"./en-au":398,"./en-au.js":398,"./en-ca":399,"./en-ca.js":399,"./en-gb":400,"./en-gb.js":400,"./en-ie":401,"./en-ie.js":401,"./en-il":402,"./en-il.js":402,"./en-in":403,"./en-in.js":403,"./en-nz":404,"./en-nz.js":404,"./en-sg":405,"./en-sg.js":405,"./eo":406,"./eo.js":406,"./es":407,"./es-do":408,"./es-do.js":408,"./es-mx":409,"./es-mx.js":409,"./es-us":410,"./es-us.js":410,"./es.js":407,"./et":411,"./et.js":411,"./eu":412,"./eu.js":412,"./fa":413,"./fa.js":413,"./fi":414,"./fi.js":414,"./fil":415,"./fil.js":415,"./fo":416,"./fo.js":416,"./fr":417,"./fr-ca":418,"./fr-ca.js":418,"./fr-ch":419,"./fr-ch.js":419,"./fr.js":417,"./fy":420,"./fy.js":420,"./ga":421,"./ga.js":421,"./gd":422,"./gd.js":422,"./gl":423,"./gl.js":423,"./gom-deva":424,"./gom-deva.js":424,"./gom-latn":425,"./gom-latn.js":425,"./gu":426,"./gu.js":426,"./he":427,"./he.js":427,"./hi":428,"./hi.js":428,"./hr":429,"./hr.js":429,"./hu":430,"./hu.js":430,"./hy-am":431,"./hy-am.js":431,"./id":432,"./id.js":432,"./is":433,"./is.js":433,"./it":434,"./it-ch":435,"./it-ch.js":435,"./it.js":434,"./ja":436,"./ja.js":436,"./jv":437,"./jv.js":437,"./ka":438,"./ka.js":438,"./kk":439,"./kk.js":439,"./km":440,"./km.js":440,"./kn":441,"./kn.js":441,"./ko":442,"./ko.js":442,"./ku":443,"./ku.js":443,"./ky":444,"./ky.js":444,"./lb":445,"./lb.js":445,"./lo":446,"./lo.js":446,"./lt":447,"./lt.js":447,"./lv":448,"./lv.js":448,"./me":449,"./me.js":449,"./mi":450,"./mi.js":450,"./mk":451,"./mk.js":451,"./ml":452,"./ml.js":452,"./mn":453,"./mn.js":453,"./mr":454,"./mr.js":454,"./ms":455,"./ms-my":456,"./ms-my.js":456,"./ms.js":455,"./mt":457,"./mt.js":457,"./my":458,"./my.js":458,"./nb":459,"./nb.js":459,"./ne":460,"./ne.js":460,"./nl":461,"./nl-be":462,"./nl-be.js":462,"./nl.js":461,"./nn":463,"./nn.js":463,"./oc-lnc":464,"./oc-lnc.js":464,"./pa-in":465,"./pa-in.js":465,"./pl":466,"./pl.js":466,"./pt":467,"./pt-br":468,"./pt-br.js":468,"./pt.js":467,"./ro":469,"./ro.js":469,"./ru":470,"./ru.js":470,"./sd":471,"./sd.js":471,"./se":472,"./se.js":472,"./si":473,"./si.js":473,"./sk":474,"./sk.js":474,"./sl":475,"./sl.js":475,"./sq":476,"./sq.js":476,"./sr":477,"./sr-cyrl":478,"./sr-cyrl.js":478,"./sr.js":477,"./ss":479,"./ss.js":479,"./sv":480,"./sv.js":480,"./sw":481,"./sw.js":481,"./ta":482,"./ta.js":482,"./te":483,"./te.js":483,"./tet":484,"./tet.js":484,"./tg":485,"./tg.js":485,"./th":486,"./th.js":486,"./tk":487,"./tk.js":487,"./tl-ph":488,"./tl-ph.js":488,"./tlh":489,"./tlh.js":489,"./tr":490,"./tr.js":490,"./tzl":491,"./tzl.js":491,"./tzm":492,"./tzm-latn":493,"./tzm-latn.js":493,"./tzm.js":492,"./ug-cn":494,"./ug-cn.js":494,"./uk":495,"./uk.js":495,"./ur":496,"./ur.js":496,"./uz":497,"./uz-latn":498,"./uz-latn.js":498,"./uz.js":497,"./vi":499,"./vi.js":499,"./x-pseudo":500,"./x-pseudo.js":500,"./yo":501,"./yo.js":501,"./zh-cn":502,"./zh-cn.js":502,"./zh-hk":503,"./zh-hk.js":503,"./zh-mo":504,"./zh-mo.js":504,"./zh-tw":505,"./zh-tw.js":505};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=511},514:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6f4c7142",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";n(514)},522:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,".responsive-margins[data-v-80de7258]{margin:0 30px}@media only screen and (min-width:768px){.responsive-margins[data-v-80de7258]{margin:0 auto;width:640px}}@media only screen and (min-width:1025px){.responsive-margins[data-v-80de7258]{width:960px}}.post-page[data-v-80de7258]{align-items:center;display:flex;justify-content:center;min-height:100vh}.post-page .post[data-v-80de7258]{box-shadow:0 5px 10px rgba(0,0,0,.3)}.post-page .post.video[data-v-80de7258]{aspect-ratio:4/3;width:100%}.post-page .canvas[data-v-80de7258]{position:fixed}.post-page .canvas.top[data-v-80de7258]{top:0}.post-page .canvas .close[data-v-80de7258]{color:gold;float:right;margin:20px}",""]),o.locals={},t.exports=o},525:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),n(508)),l=n(507),d={mixins:[r.a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,o=t.redirect,r=t.route.params,d=t.$config.nasaApiKey,r&&r.date&&Object(l.b)(r.date)){e.next=3;break}return e.abrupt("return",o(301,{name:"index"}));case 3:return e.next=5,n.dispatch("loadPost",{date:r.date,nasaApiKey:d});case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return",o(301,{name:"index"}));case 8:return n.dispatch("setNavBarTranslucentState",!0),e.abrupt("return",{post:c});case 10:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$store.dispatch("setNavBarTranslucentState",!1)}},c=(n(521),n(11)),component=Object(c.a)(d,(function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"post-page"},[n("MediaPost",{staticClass:"post",class:e.post.media_type,attrs:{date:e.post.date,url:null!==(t=e.post.hdurl)&&void 0!==t?t:e.post.url,"media-type":e.post.media_type,title:e.post.title,explanation:e.post.explanation,copyright:e.post.copyright,"is-liked":e.isPostLiked(e.post.date),"is-canvas-fixed":""},on:{like:e.toggleLikePostAndSaveInCookies}})],1)}),[],!1,null,"80de7258",null);e.default=component.exports;installComponents(component,{MediaPost:n(506).default})}}]);