(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6132],{68039:function(e,n,t){var r=t(790),i=t(65064),o=t(43735),u=t(2428),c=t(71701),s=t(7757),f=t(92403),d=t(56868),l=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(u(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||d(e)||o(e)))return!e.length;var n=i(e);if("[object Map]"==n||"[object Set]"==n)return!e.size;if(f(e))return!r(e).length;for(var t in e)if(l.call(e,t))return!1;return!0}},45521:function(e,n,t){"use strict";t.d(n,{R:function(){return o}});let r=["moz","ms","o","webkit"];function i(e){return e?e+"Hidden":"hidden"}function o(e){let n=function(){for(let e=0;e<r.length;e++)if(i(r[e]) in document)return r[e];return null}(),t=(n||"")+"visibilitychange";function o(t){return"boolean"==typeof t?t?e.onVisible():e.onHidden():document[i(n)]?e.onHidden():e.onVisible()}return document.addEventListener(t,o,!1),document.addEventListener("focus",e.onVisible,!1),document.addEventListener("blur",e.onHidden,!1),window.addEventListener("focus",e.onVisible,!1),window.addEventListener("blur",e.onHidden,!1),()=>{document.removeEventListener(t,o,!1),document.removeEventListener("focus",e.onVisible,!1),document.removeEventListener("blur",e.onHidden,!1),window.removeEventListener("focus",e.onVisible,!1),window.removeEventListener("blur",e.onHidden,!1)}}},47573:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(70079);function i(e,n,t){(0,r.useInsertionEffect)(()=>e.on(n,t),[e,n,t])}},67482:function(e,n,t){"use strict";t.d(n,{c:function(){return c}});var r=t(70079),i=t(76930),o=t(74516),u=t(85578);function c(e){let n=(0,u.h)(()=>(0,i.BX)(e)),{isStatic:t}=(0,r.useContext)(o._);if(t){let[,t]=(0,r.useState)(e);(0,r.useEffect)(()=>n.on("change",t),[])}return n}},64411:function(e,n,t){"use strict";t.d(n,{q:function(){return d}});var r=t(70079),i=t(38874),o=t(67482),u=t(74516),c=t(5607),s=t(48697),f=t(59788);function d(e,n={}){let{isStatic:t}=(0,r.useContext)(u._),d=(0,r.useRef)(null),l=(0,o.c)((0,i.i)(e)?e.get():e),a=()=>{d.current&&d.current.stop()};return(0,r.useInsertionEffect)(()=>l.attach((e,r)=>{if(t)return r(e);let i=d.current;return i&&0===i.time&&i.sample(f.frameData.delta),a(),d.current=(0,s.y)({keyframes:[l.get(),e],velocity:l.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:r}),l.get()},a),[JSON.stringify(n)]),(0,c.L)(()=>{if((0,i.i)(e))return e.on("change",e=>l.set(parseFloat(e)))},[l]),l}}}]);
//# sourceMappingURL=6132.8bb9e3cce1cbe963.js.map