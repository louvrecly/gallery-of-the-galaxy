(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,6,7,8],{336:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7c9eb357",content,!0,{sourceMap:!1})},337:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7ee080a2",content,!0,{sourceMap:!1})},338:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7bf7a976",content,!0,{sourceMap:!1})},339:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("6c9f308a",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n(336)},341:function(t,e,n){var o=n(30)(!1);o.push([t.i,".like-button[data-v-31d30aa5]{transition:color .3s ease}.like-button.liked[data-v-31d30aa5]{color:#dc143c}",""]),t.exports=o},342:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("4ebae19f",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n.r(e);var o={props:{isLiked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.isLiked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.isLiked)}}},r=(n(340),n(10)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("IconButton",{staticClass:"like-button",class:{liked:t.isLiked},attrs:{"icon-name":"heart","icon-type":t.iconType},on:{click:t.toggleLike}})}),[],!1,null,"31d30aa5",null);e.default=component.exports;installComponents(component,{IconButton:n(144).default})},345:function(t,e,n){"use strict";n(337)},346:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.wrapper[data-v-95b08872]{display:flex}.wrapper .media[data-v-95b08872]{width:100%;height:auto;border:none}.wrapper .media.video[data-v-95b08872]{aspect-ratio:4/3}.wrapper .media.div[data-v-95b08872]{padding:30px;background-color:#222;color:gold;border-radius:8px;display:flex;justify-content:center;align-items:center;transition:background-color .3s ease}.wrapper .media.div[data-v-95b08872]:before{content:"Invalid Media Type"}.wrapper .media.div[data-v-95b08872]:hover{background-color:#202020}',""]),t.exports=o},347:function(t,e,n){"use strict";n(338)},348:function(t,e,n){var o=n(30)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-0d273554]{font-size:13px;line-height:20px}.text-small[data-v-0d273554]{font-size:16px;line-height:24px}.text-normal[data-v-0d273554]{font-size:20px;line-height:32px}.text-large[data-v-0d273554]{font-size:30px;line-height:42px}.text-larger[data-v-0d273554]{font-size:50px;line-height:64px}.text-bold[data-v-0d273554]{font-weight:700}.text-italic[data-v-0d273554]{font-style:italic}.container .header[data-v-0d273554]{padding:20px 20px 10px;display:flex;justify-content:space-between;align-items:center}@media only screen and (min-width:768px){.container .header[data-v-0d273554]{padding:20px 30px 10px}}.container .header .info[data-v-0d273554]{margin:0 10px 0 0;flex:1;cursor:pointer}.container .header .info .title[data-v-0d273554]{color:gold;font-size:16px;line-height:24px}@media only screen and (min-width:768px){.container .header .info .title[data-v-0d273554]{font-size:20px;line-height:32px}}.container .body[data-v-0d273554],.container .header .info .date[data-v-0d273554]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.container .body[data-v-0d273554]{padding:10px 20px 20px}@media only screen and (min-width:768px){.container .body[data-v-0d273554]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.container .body .explanation[data-v-0d273554]{margin:0 0 20px;height:100%;max-height:1000px;overflow:hidden;transition:max-height .3s ease}.container .body .explanation.collapsed[data-v-0d273554]{max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer}@media only screen and (min-width:768px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:48px}}@media only screen and (min-width:1025px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:52px}}.container .body .copyright[data-v-0d273554]{text-align:right}",""]),t.exports=o},349:function(t,e,n){"use strict";n(339)},350:function(t,e,n){var o=n(30)(!1);o.push([t.i,".media-canvas[data-v-ab401552]{width:100%;opacity:0;transition:opacity .7s ease}.media-canvas[data-v-ab401552]:hover{opacity:1}",""]),t.exports=o},351:function(t,e,n){"use strict";n.r(e);var o={props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"}},computed:{mediaComponent:function(){switch(this.mediaType){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(){switch(this.mediaType){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}}}},r=(n(345),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e(t.mediaComponent,t._b({tag:"component",staticClass:"media",class:t.mediaType},"component",t.mediaProps,!1))],1)}),[],!1,null,"95b08872",null);e.default=component.exports},352:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1}},data:function(){return{collapsed:!0}},methods:{infoOnClick:function(){return this.$emit("infoOnClick",this.date)},toggleLike:function(t){this.$emit("like",t)},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},r=(n(347),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"info",on:{click:t.infoOnClick}},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),e("LikeButton",{staticClass:"button",attrs:{"is-liked":t.isLiked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),e("div",{staticClass:"body"},[e("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v("\n      "+t._s(t.explanation)+"\n    ")]),t._v(" "),t.copyright?e("p",{staticClass:"copyright text-italic"},[t._v("\n      © "+t._s(t.copyright)+"\n    ")]):t._e()])])}),[],!1,null,"0d273554",null);e.default=component.exports;installComponents(component,{LikeButton:n(344).default})},353:function(t,e,n){"use strict";n.r(e);n(73);var o={props:{angle:{type:String,default:"0deg"},startColor:{type:String,default:"#00000000"},endColor:{type:String,default:"#00000099"}},computed:{backgroundImage:function(){return"linear-gradient(".concat(this.angle,", ").concat(this.startColor,", ").concat(this.endColor,")")}}},r=(n(349),n(10)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"media-canvas",style:{backgroundImage:t.backgroundImage}},[t._t("default")],2)}),[],!1,null,"ab401552",null);e.default=component.exports},354:function(t,e,n){"use strict";n(342)},355:function(t,e,n){var o=n(30)(!1);o.push([t.i,".media-post[data-v-00245a2f]{position:relative}.media-post .canvas[data-v-00245a2f]{max-height:100%;position:absolute;overflow:auto}.media-post .canvas.bottom[data-v-00245a2f]{top:auto;right:0;bottom:0;left:0}.media-post .canvas.fixed[data-v-00245a2f]{position:fixed}",""]),t.exports=o},494:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1},isCanvasFixed:{type:Boolean,default:!1}},computed:{postLink:function(){return{name:"date",params:{date:this.date}}}},methods:{toggleLike:function(t){this.$emit("like",{date:this.date,like:!t})},navigateToPost:function(){return this.$router.push(this.postLink)}}},r=(n(354),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"media-post"},[e("NuxtLink",{staticClass:"link",class:t.mediaType,attrs:{to:t.postLink}},[e("MediaComponent",{attrs:{url:t.url,"media-type":t.mediaType,title:t.title}})],1),t._v(" "),e("MediaCanvas",{staticClass:"canvas bottom",class:{fixed:t.isCanvasFixed},attrs:{angle:"180deg"}},[e("MediaPostContent",{attrs:{date:t.date,title:t.title,explanation:t.explanation,copyright:t.copyright,"is-liked":t.isLiked},on:{like:t.toggleLike,infoOnClick:t.navigateToPost}})],1)],1)}),[],!1,null,"00245a2f",null);e.default=component.exports;installComponents(component,{MediaComponent:n(351).default,MediaPostContent:n(352).default,MediaCanvas:n(353).default})},496:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return f}));var o=n(335),r=n.n(o),d="2021-01-01",l=r()(d);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=r()(t);return e.isValid()&&e.isBetween(d,r()(),"day","[]")}function f(t){var e=t?r()(t).subtract(1,"days"):r()(),n=Math.min(e.diff(l,"days"),14),o=e.format("YYYY-MM-DD");return{startDate:r()(o).subtract(n,"days").format("YYYY-MM-DD"),endDate:o}}},497:function(t,e,n){"use strict";n(36),n(23),n(35),n(11),n(43),n(32),n(44);var o=n(14),r=(n(74),n(75),n(51));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={computed:l({},Object(r.c)({likedPostDates:"getLikePostDates"})),methods:l(l({},Object(r.b)(["toggleLikePost"])),{},{isPostLiked:function(t){return this.likedPostDates.includes(t)},toggleLikePostAndSaveInCookies:function(t){var e=t.date,n=t.like;this.toggleLikePost({date:e,like:n}),this.$cookies.set("liked-post-dates",this.likedPostDates)}})}},500:function(t,e,n){var map={"./af":359,"./af.js":359,"./ar":360,"./ar-dz":361,"./ar-dz.js":361,"./ar-kw":362,"./ar-kw.js":362,"./ar-ly":363,"./ar-ly.js":363,"./ar-ma":364,"./ar-ma.js":364,"./ar-sa":365,"./ar-sa.js":365,"./ar-tn":366,"./ar-tn.js":366,"./ar.js":360,"./az":367,"./az.js":367,"./be":368,"./be.js":368,"./bg":369,"./bg.js":369,"./bm":370,"./bm.js":370,"./bn":371,"./bn-bd":372,"./bn-bd.js":372,"./bn.js":371,"./bo":373,"./bo.js":373,"./br":374,"./br.js":374,"./bs":375,"./bs.js":375,"./ca":376,"./ca.js":376,"./cs":377,"./cs.js":377,"./cv":378,"./cv.js":378,"./cy":379,"./cy.js":379,"./da":380,"./da.js":380,"./de":381,"./de-at":382,"./de-at.js":382,"./de-ch":383,"./de-ch.js":383,"./de.js":381,"./dv":384,"./dv.js":384,"./el":385,"./el.js":385,"./en-au":386,"./en-au.js":386,"./en-ca":387,"./en-ca.js":387,"./en-gb":388,"./en-gb.js":388,"./en-ie":389,"./en-ie.js":389,"./en-il":390,"./en-il.js":390,"./en-in":391,"./en-in.js":391,"./en-nz":392,"./en-nz.js":392,"./en-sg":393,"./en-sg.js":393,"./eo":394,"./eo.js":394,"./es":395,"./es-do":396,"./es-do.js":396,"./es-mx":397,"./es-mx.js":397,"./es-us":398,"./es-us.js":398,"./es.js":395,"./et":399,"./et.js":399,"./eu":400,"./eu.js":400,"./fa":401,"./fa.js":401,"./fi":402,"./fi.js":402,"./fil":403,"./fil.js":403,"./fo":404,"./fo.js":404,"./fr":405,"./fr-ca":406,"./fr-ca.js":406,"./fr-ch":407,"./fr-ch.js":407,"./fr.js":405,"./fy":408,"./fy.js":408,"./ga":409,"./ga.js":409,"./gd":410,"./gd.js":410,"./gl":411,"./gl.js":411,"./gom-deva":412,"./gom-deva.js":412,"./gom-latn":413,"./gom-latn.js":413,"./gu":414,"./gu.js":414,"./he":415,"./he.js":415,"./hi":416,"./hi.js":416,"./hr":417,"./hr.js":417,"./hu":418,"./hu.js":418,"./hy-am":419,"./hy-am.js":419,"./id":420,"./id.js":420,"./is":421,"./is.js":421,"./it":422,"./it-ch":423,"./it-ch.js":423,"./it.js":422,"./ja":424,"./ja.js":424,"./jv":425,"./jv.js":425,"./ka":426,"./ka.js":426,"./kk":427,"./kk.js":427,"./km":428,"./km.js":428,"./kn":429,"./kn.js":429,"./ko":430,"./ko.js":430,"./ku":431,"./ku.js":431,"./ky":432,"./ky.js":432,"./lb":433,"./lb.js":433,"./lo":434,"./lo.js":434,"./lt":435,"./lt.js":435,"./lv":436,"./lv.js":436,"./me":437,"./me.js":437,"./mi":438,"./mi.js":438,"./mk":439,"./mk.js":439,"./ml":440,"./ml.js":440,"./mn":441,"./mn.js":441,"./mr":442,"./mr.js":442,"./ms":443,"./ms-my":444,"./ms-my.js":444,"./ms.js":443,"./mt":445,"./mt.js":445,"./my":446,"./my.js":446,"./nb":447,"./nb.js":447,"./ne":448,"./ne.js":448,"./nl":449,"./nl-be":450,"./nl-be.js":450,"./nl.js":449,"./nn":451,"./nn.js":451,"./oc-lnc":452,"./oc-lnc.js":452,"./pa-in":453,"./pa-in.js":453,"./pl":454,"./pl.js":454,"./pt":455,"./pt-br":456,"./pt-br.js":456,"./pt.js":455,"./ro":457,"./ro.js":457,"./ru":458,"./ru.js":458,"./sd":459,"./sd.js":459,"./se":460,"./se.js":460,"./si":461,"./si.js":461,"./sk":462,"./sk.js":462,"./sl":463,"./sl.js":463,"./sq":464,"./sq.js":464,"./sr":465,"./sr-cyrl":466,"./sr-cyrl.js":466,"./sr.js":465,"./ss":467,"./ss.js":467,"./sv":468,"./sv.js":468,"./sw":469,"./sw.js":469,"./ta":470,"./ta.js":470,"./te":471,"./te.js":471,"./tet":472,"./tet.js":472,"./tg":473,"./tg.js":473,"./th":474,"./th.js":474,"./tk":475,"./tk.js":475,"./tl-ph":476,"./tl-ph.js":476,"./tlh":477,"./tlh.js":477,"./tr":478,"./tr.js":478,"./tzl":479,"./tzl.js":479,"./tzm":480,"./tzm-latn":481,"./tzm-latn.js":481,"./tzm.js":480,"./ug-cn":482,"./ug-cn.js":482,"./uk":483,"./uk.js":483,"./ur":484,"./ur.js":484,"./uz":485,"./uz-latn":486,"./uz-latn.js":486,"./uz.js":485,"./vi":487,"./vi.js":487,"./x-pseudo":488,"./x-pseudo.js":488,"./yo":489,"./yo.js":489,"./zh-cn":490,"./zh-cn.js":490,"./zh-hk":491,"./zh-hk.js":491,"./zh-mo":492,"./zh-mo.js":492,"./zh-tw":493,"./zh-tw.js":493};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=500},503:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("92e08c34",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(503)},511:function(t,e,n){var o=n(30)(!1);o.push([t.i,".responsive-margins[data-v-80de7258]{margin:0 30px}@media only screen and (min-width:768px){.responsive-margins[data-v-80de7258]{margin:0 auto;width:640px}}@media only screen and (min-width:1025px){.responsive-margins[data-v-80de7258]{width:960px}}.post-page[data-v-80de7258]{min-height:100vh;display:flex;justify-content:center;align-items:center}.post-page .post[data-v-80de7258]{box-shadow:0 5px 10px rgba(0,0,0,.3)}.post-page .post.video[data-v-80de7258]{width:100%;aspect-ratio:4/3}.post-page .canvas[data-v-80de7258]{position:fixed}.post-page .canvas.top[data-v-80de7258]{top:0}.post-page .canvas .close[data-v-80de7258]{margin:20px;color:gold;float:right}",""]),t.exports=o},514:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(45),n(497)),d=n(496),l={mixins:[r.a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,o=t.redirect,r=t.route.params,l=t.$config.nasaApiKey,r&&r.date&&Object(d.b)(r.date)){e.next=3;break}return e.abrupt("return",o(301,{name:"index"}));case 3:return e.next=5,n.dispatch("loadPost",{date:r.date,nasaApiKey:l});case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return",o(301,{name:"index"}));case 8:return n.dispatch("setNavBarTranslucentState",!0),e.abrupt("return",{post:c});case 10:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$store.dispatch("setNavBarTranslucentState",!1)}},c=(n(510),n(10)),component=Object(c.a)(l,(function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"post-page"},[n("MediaPost",{staticClass:"post",class:e.post.media_type,attrs:{date:e.post.date,url:null!==(t=e.post.hdurl)&&void 0!==t?t:e.post.url,"media-type":e.post.media_type,title:e.post.title,explanation:e.post.explanation,copyright:e.post.copyright,"is-liked":e.isPostLiked(e.post.date),"is-canvas-fixed":""},on:{like:e.toggleLikePostAndSaveInCookies}})],1)}),[],!1,null,"80de7258",null);e.default=component.exports;installComponents(component,{MediaPost:n(494).default})}}]);