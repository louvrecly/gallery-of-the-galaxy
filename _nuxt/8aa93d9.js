(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(t,e,o){var content=o(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("c5d358b2",content,!0,{sourceMap:!1})},479:function(t,e,o){"use strict";o(332)},480:function(t,e,o){var n=o(41)(!1);n.push([t.i,"@media only screen and (min-width:1025px){.media-posts[data-v-421f4360]{display:flex;justify-content:space-between;flex-wrap:wrap}}.media-posts .post[data-v-421f4360]{border-radius:8px;box-shadow:0 5px 10px rgba(0,0,0,.3);overflow:hidden;transition:transform .3s ease;transform-origin:top center}.media-posts .post[data-v-421f4360]:hover{transform:scale(1.05)}@media only screen and (min-width:1025px){.media-posts .post[data-v-421f4360]{width:460px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}}.media-posts .post[data-v-421f4360]:not(:last-of-type){margin:0 0 50px}@media only screen and (min-width:768px){.media-posts .post[data-v-421f4360]:not(:last-of-type){margin:0 0 100px}}",""]),t.exports=n},495:function(t,e,o){"use strict";o.r(e);o(33),o(29),o(37),o(12),o(49),o(32),o(50);var n=o(16),r=(o(72),o(73),o(74));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{posts:{type:Array,default:function(){return[]}}},computed:d({},Object(r.c)({likedPostDates:"getLikePostDates"})),methods:d(d({},Object(r.b)(["toggleLikePost"])),{},{previewUrl:function(t){return"image"===t.media_type?t.url:t.thumbnail_url},isPostLiked:function(t){return this.likedPostDates.includes(t)},toggleLikePostAndSaveInCookies:function(t){var e=t.date,o=t.like;this.toggleLikePost({date:e,like:o}),this.$cookies.set("liked-post-dates",this.likedPostDates)}})},f=(o(479),o(13)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"media-posts"},t._l(t.posts,(function(o,n){return e("MediaPost",{key:n,staticClass:"post",attrs:{date:o.date,url:t.previewUrl(o),"media-type":"image",title:o.title,explanation:o.explanation,copyright:o.copyright,"is-liked":t.isPostLiked(o.date)},on:{like:t.toggleLikePostAndSaveInCookies}})})),1)}),[],!1,null,"421f4360",null);e.default=component.exports;installComponents(component,{MediaPost:o(489).default})}}]);