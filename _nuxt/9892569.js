(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{326:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1147e190",content,!0,{sourceMap:!1})},327:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("464277c0",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n(326)},330:function(t,e,n){var o=n(41)(!1);o.push([t.i,".icon-button .icon[data-v-4f714366]{height:20px}",""]),t.exports=o},331:function(t,e,n){"use strict";n.r(e);var o={props:{iconName:{type:String,required:!0},iconType:{type:String,default:"far"}},methods:{onClick:function(t){this.$emit("click",t)}}},l=(n(329),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"icon-button icon-button",on:{click:t.onClick}},[e("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:[t.iconType,t.iconName]}})],1)}),[],!1,null,"4f714366",null);e.default=component.exports},334:function(t,e,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("7bf7a976",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(327)},336:function(t,e,n){var o=n(41)(!1);o.push([t.i,".like-button[data-v-54711ed2]{transition:color .3s ease}.like-button.liked[data-v-54711ed2]{color:#dc143c}",""]),t.exports=o},476:function(t,e,n){"use strict";n.r(e);var o={props:{isLiked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.isLiked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.isLiked)}}},l=(n(335),n(13)),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("IconButton",{staticClass:"like-button",class:{liked:t.isLiked},attrs:{"icon-name":"heart","icon-type":t.iconType},on:{click:t.toggleLike}})}),[],!1,null,"54711ed2",null);e.default=component.exports;installComponents(component,{IconButton:n(331).default})},483:function(t,e,n){"use strict";n(334)},484:function(t,e,n){var o=n(41)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-0d273554]{font-size:13px;line-height:20px}.text-small[data-v-0d273554]{font-size:16px;line-height:24px}.text-normal[data-v-0d273554]{font-size:20px;line-height:32px}.text-large[data-v-0d273554]{font-size:30px;line-height:42px}.text-larger[data-v-0d273554]{font-size:50px;line-height:64px}.text-bold[data-v-0d273554]{font-weight:700}.text-italic[data-v-0d273554]{font-style:italic}.container .header[data-v-0d273554]{padding:20px 20px 10px;display:flex;justify-content:space-between;align-items:center}@media only screen and (min-width:768px){.container .header[data-v-0d273554]{padding:20px 30px 10px}}.container .header .info[data-v-0d273554]{margin:0 10px 0 0;flex:1;cursor:pointer}.container .header .info .title[data-v-0d273554]{color:gold;font-size:16px;line-height:24px}@media only screen and (min-width:768px){.container .header .info .title[data-v-0d273554]{font-size:20px;line-height:32px}}.container .body[data-v-0d273554],.container .header .info .date[data-v-0d273554]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.container .body[data-v-0d273554]{padding:10px 20px 20px}@media only screen and (min-width:768px){.container .body[data-v-0d273554]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.container .body .explanation[data-v-0d273554]{margin:0 0 20px;height:100%;max-height:1000px;overflow:hidden;transition:max-height .3s ease}.container .body .explanation.collapsed[data-v-0d273554]{max-height:40px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer}@media only screen and (min-width:768px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:48px}}@media only screen and (min-width:1025px){.container .body .explanation.collapsed[data-v-0d273554]{max-height:52px}}.container .body .copyright[data-v-0d273554]{text-align:right}",""]),t.exports=o},497:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,required:!0},title:{type:String,default:"Missing Title"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""},isLiked:{type:Boolean,default:!1}},data:function(){return{collapsed:!0}},methods:{infoOnClick:function(){return this.$emit("infoOnClick",this.date)},toggleLike:function(t){this.$emit("like",t)},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},l=(n(483),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"info",on:{click:t.infoOnClick}},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),e("LikeButton",{staticClass:"button",attrs:{"is-liked":t.isLiked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),e("div",{staticClass:"body"},[e("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v("\n      "+t._s(t.explanation)+"\n    ")]),t._v(" "),t.copyright?e("p",{staticClass:"copyright text-italic"},[t._v("\n      © "+t._s(t.copyright)+"\n    ")]):t._e()])])}),[],!1,null,"0d273554",null);e.default=component.exports;installComponents(component,{LikeButton:n(476).default})}}]);