(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{505:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return m}));var r=n(345),j=n.n(r),o="2021-01-01",d=14,c=j()(o);function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=j()(t);return e.isValid()&&e.isBetween(o,j()(),"day","[]")}function m(t){var e=t?j()(t).subtract(1,"days"):j()(),n=Math.min(e.diff(c,"days"),d),r=e.format("YYYY-MM-DD");return{startDate:j()(r).subtract(n,"days").format("YYYY-MM-DD"),endDate:r}}},513:function(t,e,n){var map={"./af":365,"./af.js":365,"./ar":366,"./ar-dz":367,"./ar-dz.js":367,"./ar-kw":368,"./ar-kw.js":368,"./ar-ly":369,"./ar-ly.js":369,"./ar-ma":370,"./ar-ma.js":370,"./ar-sa":371,"./ar-sa.js":371,"./ar-tn":372,"./ar-tn.js":372,"./ar.js":366,"./az":373,"./az.js":373,"./be":374,"./be.js":374,"./bg":375,"./bg.js":375,"./bm":376,"./bm.js":376,"./bn":377,"./bn-bd":378,"./bn-bd.js":378,"./bn.js":377,"./bo":379,"./bo.js":379,"./br":380,"./br.js":380,"./bs":381,"./bs.js":381,"./ca":382,"./ca.js":382,"./cs":383,"./cs.js":383,"./cv":384,"./cv.js":384,"./cy":385,"./cy.js":385,"./da":386,"./da.js":386,"./de":387,"./de-at":388,"./de-at.js":388,"./de-ch":389,"./de-ch.js":389,"./de.js":387,"./dv":390,"./dv.js":390,"./el":391,"./el.js":391,"./en-au":392,"./en-au.js":392,"./en-ca":393,"./en-ca.js":393,"./en-gb":394,"./en-gb.js":394,"./en-ie":395,"./en-ie.js":395,"./en-il":396,"./en-il.js":396,"./en-in":397,"./en-in.js":397,"./en-nz":398,"./en-nz.js":398,"./en-sg":399,"./en-sg.js":399,"./eo":400,"./eo.js":400,"./es":401,"./es-do":402,"./es-do.js":402,"./es-mx":403,"./es-mx.js":403,"./es-us":404,"./es-us.js":404,"./es.js":401,"./et":405,"./et.js":405,"./eu":406,"./eu.js":406,"./fa":407,"./fa.js":407,"./fi":408,"./fi.js":408,"./fil":409,"./fil.js":409,"./fo":410,"./fo.js":410,"./fr":411,"./fr-ca":412,"./fr-ca.js":412,"./fr-ch":413,"./fr-ch.js":413,"./fr.js":411,"./fy":414,"./fy.js":414,"./ga":415,"./ga.js":415,"./gd":416,"./gd.js":416,"./gl":417,"./gl.js":417,"./gom-deva":418,"./gom-deva.js":418,"./gom-latn":419,"./gom-latn.js":419,"./gu":420,"./gu.js":420,"./he":421,"./he.js":421,"./hi":422,"./hi.js":422,"./hr":423,"./hr.js":423,"./hu":424,"./hu.js":424,"./hy-am":425,"./hy-am.js":425,"./id":426,"./id.js":426,"./is":427,"./is.js":427,"./it":428,"./it-ch":429,"./it-ch.js":429,"./it.js":428,"./ja":430,"./ja.js":430,"./jv":431,"./jv.js":431,"./ka":432,"./ka.js":432,"./kk":433,"./kk.js":433,"./km":434,"./km.js":434,"./kn":435,"./kn.js":435,"./ko":436,"./ko.js":436,"./ku":437,"./ku.js":437,"./ky":438,"./ky.js":438,"./lb":439,"./lb.js":439,"./lo":440,"./lo.js":440,"./lt":441,"./lt.js":441,"./lv":442,"./lv.js":442,"./me":443,"./me.js":443,"./mi":444,"./mi.js":444,"./mk":445,"./mk.js":445,"./ml":446,"./ml.js":446,"./mn":447,"./mn.js":447,"./mr":448,"./mr.js":448,"./ms":449,"./ms-my":450,"./ms-my.js":450,"./ms.js":449,"./mt":451,"./mt.js":451,"./my":452,"./my.js":452,"./nb":453,"./nb.js":453,"./ne":454,"./ne.js":454,"./nl":455,"./nl-be":456,"./nl-be.js":456,"./nl.js":455,"./nn":457,"./nn.js":457,"./oc-lnc":458,"./oc-lnc.js":458,"./pa-in":459,"./pa-in.js":459,"./pl":460,"./pl.js":460,"./pt":461,"./pt-br":462,"./pt-br.js":462,"./pt.js":461,"./ro":463,"./ro.js":463,"./ru":464,"./ru.js":464,"./sd":465,"./sd.js":465,"./se":466,"./se.js":466,"./si":467,"./si.js":467,"./sk":468,"./sk.js":468,"./sl":469,"./sl.js":469,"./sq":470,"./sq.js":470,"./sr":471,"./sr-cyrl":472,"./sr-cyrl.js":472,"./sr.js":471,"./ss":473,"./ss.js":473,"./sv":474,"./sv.js":474,"./sw":475,"./sw.js":475,"./ta":476,"./ta.js":476,"./te":477,"./te.js":477,"./tet":478,"./tet.js":478,"./tg":479,"./tg.js":479,"./th":480,"./th.js":480,"./tk":481,"./tk.js":481,"./tl-ph":482,"./tl-ph.js":482,"./tlh":483,"./tlh.js":483,"./tr":484,"./tr.js":484,"./tzl":485,"./tzl.js":485,"./tzm":486,"./tzm-latn":487,"./tzm-latn.js":487,"./tzm.js":486,"./ug-cn":488,"./ug-cn.js":488,"./uk":489,"./uk.js":489,"./ur":490,"./ur.js":490,"./uz":491,"./uz-latn":492,"./uz-latn.js":492,"./uz.js":491,"./vi":493,"./vi.js":493,"./x-pseudo":494,"./x-pseudo.js":494,"./yo":495,"./yo.js":495,"./zh-cn":496,"./zh-cn.js":496,"./zh-hk":497,"./zh-hk.js":497,"./zh-mo":498,"./zh-mo.js":498,"./zh-tw":499,"./zh-tw.js":499};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=513},515:function(t,e,n){var content=n(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("de2321c6",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";n(515)},522:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".responsive-margins[data-v-80de7258]{margin:0 30px}@media only screen and (min-width:768px){.responsive-margins[data-v-80de7258]{margin:0 auto;width:640px}}@media only screen and (min-width:1025px){.responsive-margins[data-v-80de7258]{width:960px}}.post-page[data-v-80de7258]{align-items:center;display:flex;justify-content:center;min-height:100vh}.post-page .post[data-v-80de7258]{box-shadow:0 5px 10px rgba(0,0,0,.3)}.post-page .post.video[data-v-80de7258]{aspect-ratio:4/3;width:100%}.post-page .canvas[data-v-80de7258]{position:fixed}.post-page .canvas.top[data-v-80de7258]{top:0}.post-page .canvas .close[data-v-80de7258]{color:gold;float:right;margin:20px}",""]),r.locals={},t.exports=r},524:function(t,e,n){"use strict";n.r(e);var r=n(8),j=(n(49),n(506)),o=n(505),d={mixins:[j.a],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,j,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,r=t.redirect,j=t.route.params,d=t.$config.nasaApiKey,j&&j.date&&Object(o.b)(j.date)){e.next=3;break}return e.abrupt("return",r(301,{name:"index"}));case 3:return e.next=5,n.dispatch("loadPost",{date:j.date,nasaApiKey:d});case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return",r(301,{name:"index"}));case 8:return n.dispatch("setNavBarTranslucentState",!0),e.abrupt("return",{post:c});case 10:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$store.dispatch("setNavBarTranslucentState",!1)}},c=(n(521),n(11)),component=Object(c.a)(d,(function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"post-page"},[n("MediaPost",{staticClass:"post",class:e.post.media_type,attrs:{date:e.post.date,url:null!==(t=e.post.hdurl)&&void 0!==t?t:e.post.url,"media-type":e.post.media_type,title:e.post.title,explanation:e.post.explanation,copyright:e.post.copyright,"is-liked":e.isPostLiked(e.post.date),"is-canvas-fixed":""},on:{like:e.toggleLikePostAndSaveInCookies}})],1)}),[],!1,null,"80de7258",null);e.default=component.exports;installComponents(component,{MediaPost:n(500).default})}}]);