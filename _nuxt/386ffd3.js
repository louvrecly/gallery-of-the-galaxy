(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("2b8e8442",content,!0,{sourceMap:!1})},337:function(e,t,r){"use strict";r(328)},338:function(e,t,r){var n=r(42)(!1);n.push([e.i,'.wrapper[data-v-168b9244]{display:flex}.wrapper .media[data-v-168b9244]{min-width:100%;min-height:100%;border:none}.wrapper .media.div[data-v-168b9244]{padding:30px;background-color:#222;color:gold;border-radius:8px;display:flex;justify-content:center;align-items:center;transition:background-color .3s ease}.wrapper .media.div[data-v-168b9244]:before{content:"Invalid Media Type"}.wrapper .media.div[data-v-168b9244]:hover{background-color:#202020}',""]),e.exports=n},341:function(e,t,r){"use strict";r.r(t);var n={props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"}},computed:{mediaComponent:function(){switch(this.mediaType){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(){switch(this.mediaType){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}}}},o=(r(337),r(13)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t(e.mediaComponent,e._b({tag:"component",staticClass:"media",class:e.mediaComponent},"component",e.mediaProps,!1))],1)}),[],!1,null,"168b9244",null);t.default=component.exports}}]);