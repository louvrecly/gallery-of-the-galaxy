(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,6,7,9],{330:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("7c9eb357",content,!0,{sourceMap:!1})},331:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("7ee080a2",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("7bf7a976",content,!0,{sourceMap:!1})},333:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6c9f308a",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";n(330)},335:function(t,e,n){var o=n(37)(!1);o.push([t.i,".like-button[data-v-31d30aa5]{transition:color .3s ease}.like-button.liked[data-v-31d30aa5]{color:#dc143c}",""]),t.exports=o},336:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("4ebae19f",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n.r(e);var o={props:{isLiked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.isLiked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.isLiked)}}},l=(n(334),n(10)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("IconButton",{staticClass:"like-button",class:{liked:t.isLiked},attrs:{"icon-name":"heart","icon-type":t.iconType},on:{click:t.toggleLike}})}),[],!1,null,"31d30aa5",null);e.default=component.exports;installComponents(component,{IconButton:n(144).default})},339:function(t,e,n){"use strict";n(331)},340:function(t,e,n){var o=n(37)(!1);o.push([t.i,'.wrapper[data-v-95b08872]{display:flex}.wrapper .media[data-v-95b08872]{width:100%;height:auto;border:none}.wrapper .media.video[data-v-95b08872]{aspect-ratio:4/3}.wrapper .media.div[data-v-95b08872]{padding:30px;background-color:#222;color:gold;border-radius:8px;display:flex;justify-content:center;align-items:center;transition:background-color .3s ease}.wrapper .media.div[data-v-95b08872]:before{content:"Invalid Media Type"}.wrapper .media.div[data-v-95b08872]:hover{background-color:#202020}',""]),t.exports=o},341:function(t,e,n){"use strict";n(332)},342:function(t,e,n){var o=n(37)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-0d273554]{font-size:13px;line-height:20px}.text-small[data-v-0d273554]{font-size:16px;line-height:24px}.text-normal[data-v-0d273554]{font-size:20px;line-height:32px}.text-large[data-v-0d273554]{font-size:30px;line-height:42px}.text-larger[data-v-0d273554]{font-size:50px;line-height:64px}.text-bold[data-v-0d273554]{font-weight:700}.text-italic[data-v-0d273554]{font-style:italic}.container .header[data-v-0d273554]{padding:20px 20px 10px;display:flex;justify-content:space-between;align-items:center}@media only screen and (min-width:768px){.container .header[data-v-0d273554]{padding:20px 30px 10px}}.container .header .info[data-v-0d273554]{margin:0 10px 0 0;flex:1;cursor:pointer}.container .header .info .title[data-v-0d273554]{color:gold;font-size:16px;line-height:24px}@media only screen and (min-width:768px){.container .header .info .title[data-v-0d273554]{font-size:20px;line-height:32px}}.container .body[data-v-0d273554],.container .header .info .date[data-v-0d273554]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.container .body[data-v-0d273554]{padding:10px 20px 20px}@media only screen and (min-width:768px){.container .body[data-v-0d273554]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.container .body .explanation[data-v-0d273554]{margin:0 0 20px;height:100%;max-height:1000px;overflow:hidden;transition:max-height .3s ease}.container .body .explanation.collapsed[data-v-0d273554]{max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer}@media only screen and (min-width:768px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:48px}}@media only screen and (min-width:1025px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:52px}}.container .body .copyright[data-v-0d273554]{text-align:right}",""]),t.exports=o},343:function(t,e,n){"use strict";n(333)},344:function(t,e,n){var o=n(37)(!1);o.push([t.i,".media-canvas[data-v-ab401552]{width:100%;opacity:0;transition:opacity .7s ease}.media-canvas[data-v-ab401552]:hover{opacity:1}",""]),t.exports=o},345:function(t,e,n){"use strict";n.r(e);n(72);var o={props:{angle:{type:String,default:"0deg"},startColor:{type:String,default:"#00000000"},endColor:{type:String,default:"#00000099"}},computed:{backgroundImage:function(){return"linear-gradient(".concat(this.angle,", ").concat(this.startColor,", ").concat(this.endColor,")")}}},l=(n(343),n(10)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"media-canvas",style:{backgroundImage:t.backgroundImage}},[t._t("default")],2)}),[],!1,null,"ab401552",null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);var o={props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"}},computed:{mediaComponent:function(){switch(this.mediaType){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(){switch(this.mediaType){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}}}},l=(n(339),n(10)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e(t.mediaComponent,t._b({tag:"component",staticClass:"media",class:t.mediaType},"component",t.mediaProps,!1))],1)}),[],!1,null,"95b08872",null);e.default=component.exports},347:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1}},data:function(){return{collapsed:!0}},methods:{infoOnClick:function(){return this.$emit("infoOnClick",this.date)},toggleLike:function(t){this.$emit("like",t)},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},l=(n(341),n(10)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"info",on:{click:t.infoOnClick}},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),e("LikeButton",{staticClass:"button",attrs:{"is-liked":t.isLiked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),e("div",{staticClass:"body"},[e("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v("\n      "+t._s(t.explanation)+"\n    ")]),t._v(" "),t.copyright?e("p",{staticClass:"copyright text-italic"},[t._v("\n      © "+t._s(t.copyright)+"\n    ")]):t._e()])])}),[],!1,null,"0d273554",null);e.default=component.exports;installComponents(component,{LikeButton:n(338).default})},348:function(t,e,n){"use strict";n(336)},349:function(t,e,n){var o=n(37)(!1);o.push([t.i,".media-post[data-v-00245a2f]{position:relative}.media-post .canvas[data-v-00245a2f]{max-height:100%;position:absolute;overflow:auto}.media-post .canvas.bottom[data-v-00245a2f]{top:auto;right:0;bottom:0;left:0}.media-post .canvas.fixed[data-v-00245a2f]{position:fixed}",""]),t.exports=o},488:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1},isCanvasFixed:{type:Boolean,default:!1}},computed:{postLink:function(){return{name:"date",params:{date:this.date}}}},methods:{toggleLike:function(t){this.$emit("like",{date:this.date,like:!t})},navigateToPost:function(){return this.$router.push(this.postLink)}}},l=(n(348),n(10)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"media-post"},[e("NuxtLink",{staticClass:"link",class:t.mediaType,attrs:{to:t.postLink}},[e("MediaComponent",{attrs:{url:t.url,"media-type":t.mediaType,title:t.title}})],1),t._v(" "),e("MediaCanvas",{staticClass:"canvas bottom",class:{fixed:t.isCanvasFixed},attrs:{angle:"180deg"}},[e("MediaPostContent",{attrs:{date:t.date,title:t.title,explanation:t.explanation,copyright:t.copyright,"is-liked":t.isLiked},on:{like:t.toggleLike,infoOnClick:t.navigateToPost}})],1)],1)}),[],!1,null,"00245a2f",null);e.default=component.exports;installComponents(component,{MediaComponent:n(346).default,MediaPostContent:n(347).default,MediaCanvas:n(345).default})}}]);