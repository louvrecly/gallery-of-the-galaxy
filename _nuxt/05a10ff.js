(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,7,8,10],{326:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("04a5f5b9",content,!0,{sourceMap:!1})},327:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1147e190",content,!0,{sourceMap:!1})},328:function(t,e,n){var content=n(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("464277c0",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(326)},330:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.spinner .spin-primary[data-v-6260be30],.spinner .spin-secondary[data-v-6260be30]{position:absolute;content:"";top:0;left:0;right:0;bottom:0;margin:auto;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#fff;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.spinner .spin-primary[data-v-6260be30]{-webkit-animation:spinning-6260be30 2.4s cubic-bezier(.41,.36,.2,.62);animation:spinning-6260be30 2.4s cubic-bezier(.41,.36,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.spinner .spin-secondary[data-v-6260be30]{-webkit-animation:spinning-6260be30 2.4s cubic-bezier(.51,.19,.21,.8);animation:spinning-6260be30 2.4s cubic-bezier(.51,.19,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes spinning-6260be30{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning-6260be30{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]),t.exports=o},331:function(t,e,n){"use strict";n(327)},332:function(t,e,n){var o=n(41)(!1);o.push([t.i,".icon-button .icon[data-v-4f714366]{height:20px}",""]),t.exports=o},333:function(t,e,n){"use strict";n.r(e);var o={props:{size:{type:String,default:"16px"},color:{type:String,default:"#fff"},width:{type:String,default:"2px"}},computed:{spinnerStyles:function(){return{height:this.size,width:this.size,borderTopColor:this.color,borderWidth:this.width}}}},r=(n(329),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"spin-primary",style:t.spinnerStyles}),t._v(" "),e("div",{staticClass:"spin-secondary",style:t.spinnerStyles})])}),[],!1,null,"6260be30",null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var o={props:{iconName:{type:String,required:!0},iconType:{type:String,default:"far"}},methods:{onClick:function(t){this.$emit("click",t)}}},r=(n(331),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"icon-button icon-button",on:{click:t.onClick}},[e("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:[t.iconType,t.iconName]}})],1)}),[],!1,null,"4f714366",null);e.default=component.exports},335:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("48a7d44a",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("9f1a4b1a",content,!0,{sourceMap:!1})},337:function(t,e,n){"use strict";n(328)},338:function(t,e,n){var o=n(41)(!1);o.push([t.i,".like-button[data-v-54711ed2]{transition:color .3s ease}.like-button.liked[data-v-54711ed2]{color:#dc143c}",""]),t.exports=o},339:function(t,e,n){"use strict";n.r(e);var o={props:{isLiked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.isLiked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.isLiked)}}},r=(n(337),n(13)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("IconButton",{staticClass:"like-button",class:{liked:t.isLiked},attrs:{"icon-name":"heart","icon-type":t.iconType},on:{click:t.toggleLike}})}),[],!1,null,"54711ed2",null);e.default=component.exports;installComponents(component,{IconButton:n(334).default})},341:function(t,e,n){"use strict";n(335)},342:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.wrapper[data-v-7c17347a]{display:flex;justify-content:center;align-items:center}.wrapper .media[data-v-7c17347a]{max-width:100%;max-height:100%;border:none}.wrapper .media.iframe[data-v-7c17347a]{width:100%;aspect-ratio:16/9}.wrapper .media.div[data-v-7c17347a]{padding:30px;background-color:#222;color:gold;border-radius:8px;display:flex;justify-content:center;align-items:center;transition:background-color .3s ease}.wrapper .media.div[data-v-7c17347a]:before{content:"Invalid Media Type"}.wrapper .media.div[data-v-7c17347a]:hover{background-color:#202020}',""]),t.exports=o},343:function(t,e,n){"use strict";n(336)},344:function(t,e,n){var o=n(41)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-44742dfc]{font-size:13px;line-height:20px}.text-small[data-v-44742dfc]{font-size:16px;line-height:24px}.text-normal[data-v-44742dfc]{font-size:20px;line-height:32px}.text-large[data-v-44742dfc]{font-size:30px;line-height:42px}.text-larger[data-v-44742dfc]{font-size:50px;line-height:64px}.text-bold[data-v-44742dfc]{font-weight:700}.text-italic[data-v-44742dfc]{font-style:italic}.container[data-v-44742dfc]{position:absolute;top:auto;right:0;bottom:0;left:0;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.2) 10%,rgba(0,0,0,.8666666667));max-height:100%;overflow:auto}.container .header[data-v-44742dfc]{padding:20px 20px 10px;display:flex;justify-content:space-between;align-items:center}@media only screen and (min-width:768px){.container .header[data-v-44742dfc]{padding:20px 30px 10px}}.container .header .info[data-v-44742dfc]{margin:0 10px 0 0;flex:1;cursor:pointer}.container .header .info .title[data-v-44742dfc]{color:gold;font-size:16px;line-height:24px}@media only screen and (min-width:768px){.container .header .info .title[data-v-44742dfc]{font-size:20px;line-height:32px}}.container .body[data-v-44742dfc],.container .header .info .date[data-v-44742dfc]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.container .body[data-v-44742dfc]{padding:10px 20px 20px}@media only screen and (min-width:768px){.container .body[data-v-44742dfc]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.container .body .explanation[data-v-44742dfc]{margin:0 0 20px;height:100%;max-height:1000px;overflow:hidden;transition:max-height .3s ease}.container .body .explanation.collapsed[data-v-44742dfc]{max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer}@media only screen and (min-width:768px){.container .body .explanation.collapsed[data-v-44742dfc]{max-height:48px}}@media only screen and (min-width:1025px){.container .body .explanation.collapsed[data-v-44742dfc]{max-height:52px}}.container .body .copyright[data-v-44742dfc]{text-align:right}",""]),t.exports=o},482:function(t,e,n){"use strict";n.r(e);n(33),n(29),n(37),n(12),n(49),n(32),n(50);var o=n(16),r=n(72);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"}},computed:d(d({},Object(r.c)({busy:"getBusyState"})),{},{mediaComponent:function(){switch(this.mediaType){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(){switch(this.mediaType){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}}})},f=(n(341),n(13)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[t.busy?e("Spinner"):e(t.mediaComponent,t._b({tag:"component",staticClass:"media",class:t.mediaComponent},"component",t.mediaProps,!1))],1)}),[],!1,null,"7c17347a",null);e.default=component.exports;installComponents(component,{Spinner:n(333).default})},483:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1}},data:function(){return{collapsed:!0}},methods:{infoOnClick:function(){return this.$emit("infoOnClick",this.date)},toggleLike:function(t){this.$emit("like",t)},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},r=(n(343),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"info",on:{click:t.infoOnClick}},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),e("LikeButton",{staticClass:"button",attrs:{"is-liked":t.isLiked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),e("div",{staticClass:"body"},[e("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v("\n      "+t._s(t.explanation)+"\n    ")]),t._v(" "),t.copyright?e("p",{staticClass:"copyright text-italic"},[t._v("\n      © "+t._s(t.copyright)+"\n    ")]):t._e()])])}),[],!1,null,"44742dfc",null);e.default=component.exports;installComponents(component,{LikeButton:n(339).default})},493:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("9d2e5f40",content,!0,{sourceMap:!1})},496:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1},isVideo:{type:Boolean,default:!1}},computed:{postLink:function(){return{name:"date",params:{date:this.date}}}},methods:{toggleLike:function(t){this.$emit("like",{date:this.date,like:!t})},navigateToPost:function(){return this.$router.push(this.postLink)}}},r=(n(502),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"media-post"},[e("NuxtLink",{staticClass:"link",class:t.mediaType,attrs:{to:t.postLink}},[e("MediaComponent",{attrs:{url:t.url,"media-type":"image",title:t.title}})],1),t._v(" "),e("MediaPostContent",{attrs:{date:t.date,title:t.title,explanation:t.explanation,copyright:t.copyright,"is-liked":t.isLiked},on:{like:t.toggleLike,infoOnClick:t.navigateToPost}})],1)}),[],!1,null,"10fe94f0",null);e.default=component.exports;installComponents(component,{MediaComponent:n(482).default,MediaPostContent:n(483).default})},502:function(t,e,n){"use strict";n(493)},503:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.media-post[data-v-10fe94f0]{border-radius:8px;box-shadow:0 5px 10px rgba(0,0,0,.3);overflow:hidden;transition:transform .3s ease;transform-origin:top center}.media-post[data-v-10fe94f0]:hover{transform:scale(1.05)}.media-post .link.video[data-v-10fe94f0]{position:relative;display:flex;justify-content:center;align-items:center}.media-post .link.video[data-v-10fe94f0]:after,.media-post .link.video[data-v-10fe94f0]:before{content:"";position:absolute}.media-post .link.video[data-v-10fe94f0]:before{width:50px;height:50px;background-color:#dc143c;border-radius:50%;opacity:.3;filter:blur(1px);transition:opacity .5s ease,transform .5s ease}.media-post .link.video[data-v-10fe94f0]:after{margin-left:17px;border:10px solid transparent;border-left-color:#fff;opacity:.5;transition:opacity .5s ease,transform .5s ease}.media-post .link.video[data-v-10fe94f0]:hover:after,.media-post .link.video[data-v-10fe94f0]:hover:before{transform:scale(1.5)}.media-post .link.video[data-v-10fe94f0]:hover:before{opacity:.5}.media-post .link.video[data-v-10fe94f0]:hover:after{opacity:.7}',""]),t.exports=o}}]);