(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{353:function(t,n,e){var content=e(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("04a45eec",content,!0,{sourceMap:!1})},365:function(t,n,e){"use strict";e(353)},366:function(t,n,e){var r=e(26)((function(i){return i[1]}));r.push([t.i,'.spinner .spin-primary[data-v-0997b53c],.spinner .spin-secondary[data-v-0997b53c]{animation-iteration-count:infinite;border:2px solid transparent;border-radius:100%;border-top-color:#fff;bottom:0;content:"";height:16px;left:0;margin:auto;position:absolute;right:0;top:0;width:16px}.spinner .spin-primary[data-v-0997b53c]{animation:spinning-0997b53c 2.4s cubic-bezier(.41,.36,.2,.62);animation-iteration-count:infinite}.spinner .spin-secondary[data-v-0997b53c]{animation:spinning-0997b53c 2.4s cubic-bezier(.51,.19,.21,.8);animation-iteration-count:infinite}@keyframes spinning-0997b53c{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]),r.locals={},t.exports=r},370:function(t,n,e){"use strict";e.r(n);var r={name:"LoadingSpinner",props:{size:{type:String,default:"16px"},color:{type:String,default:"#fff"},width:{type:String,default:"2px"}},computed:{spinnerStyles:function(){return{height:this.size,width:this.size,borderTopColor:this.color,borderWidth:this.width}}}},o=(e(365),e(11)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"spin-primary",style:t.spinnerStyles}),t._v(" "),n("div",{staticClass:"spin-secondary",style:t.spinnerStyles})])}),[],!1,null,"0997b53c",null);n.default=component.exports}}]);