(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6263,757,7973],{68039:function(e,t,n){var r=n(790),o=n(65064),i=n(43735),a=n(2428),u=n(71701),c=n(7757),d=n(92403),l=n(56868),s=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(u(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||l(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(d(e))return!r(e).length;for(var n in e)if(s.call(e,n))return!1;return!0}},11039:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(37088),o=n(58517),i=n(92379),a=n(82845),u=function(e){var t=i.useRef(e);return(0,a.Z)(function(){t.current=e}),t},c=function(e,t){if("function"==typeof e){e(t);return}e.current=t},d=function(e,t){var n=(0,i.useRef)();return(0,i.useCallback)(function(r){e.current=r,n.current&&c(n.current,null),n.current=t,t&&c(t,r)},[t])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(l).forEach(function(t){e.style.setProperty(t,l[t],"important")})},f=null,p=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},h=function(){},b=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],g=!!document.documentElement.currentStyle,v=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=b.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;g&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:i}};function m(e,t,n){var r=u(n);i.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var y=function(e){m(window,"resize",e)},x=function(e){m(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],E=i.forwardRef(function(e,t){var n=e.cacheMeasurements,a=e.maxRows,u=e.minRows,c=e.onChange,l=void 0===c?h:c,b=e.onHeightChange,g=void 0===b?h:b,m=(0,o.Z)(e,w),E=void 0!==m.value,C=i.useRef(null),S=d(C,t),z=i.useRef(0),R=i.useRef(),F=function(){var e,t,r,o,i,c,d,l,h,b,m,y=C.current,x=n&&R.current?R.current:v(y);if(x){R.current=x;var w=(e=y.value||y.placeholder||"x",void 0===(t=u)&&(t=1),void 0===(r=a)&&(r=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),s(f)),null===f.parentNode&&document.body.appendChild(f),o=x.paddingSize,i=x.borderSize,d=(c=x.sizingStyle).boxSizing,Object.keys(c).forEach(function(e){f.style[e]=c[e]}),s(f),f.value=e,l=p(f,x),f.value=e,l=p(f,x),f.value="x",b=(h=f.scrollHeight-o)*t,"border-box"===d&&(b=b+o+i),l=Math.max(b,l),m=h*r,"border-box"===d&&(m=m+o+i),[l=Math.min(m,l),h]),E=w[0],S=w[1];z.current!==E&&(z.current=E,y.style.setProperty("height",E+"px","important"),g(E,{rowHeight:S}))}};return i.useLayoutEffect(F),y(F),x(F),i.createElement("textarea",(0,r.Z)({},m,{onChange:function(e){E||F(),l(e)},ref:S}))})},82845:function(e,t,n){"use strict";var r=n(92379).useLayoutEffect;t.Z=r},30757:function(e,t,n){"use strict";n.d(t,{VY:function(){return M},aV:function(){return R},fC:function(){return z},xz:function(){return F}});var r=n(37088),o=n(92379),i=n(10132),a=n(31541),u=n(65954),c=n(79813),d=n(52125),l=n(76228),s=n(48758),f=n(28531);let p="Tabs",[h,b]=(0,a.b)(p,[u.Pc]),g=(0,u.Pc)(),[v,m]=h(p),y=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,onValueChange:a,defaultValue:u,orientation:c="horizontal",dir:p,activationMode:h="automatic",...b}=e,g=(0,l.gm)(p),[m,y]=(0,s.T)({prop:i,onChange:a,defaultProp:u});return(0,o.createElement)(v,{scope:n,baseId:(0,f.M)(),value:m,onValueChange:y,orientation:c,dir:g,activationMode:h},(0,o.createElement)(d.WV.div,(0,r.Z)({dir:g,"data-orientation":c},b,{ref:t})))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:i=!0,...a}=e,c=m("TabsList",n),l=g(n);return(0,o.createElement)(u.fC,(0,r.Z)({asChild:!0},l,{orientation:c.orientation,dir:c.dir,loop:i}),(0,o.createElement)(d.WV.div,(0,r.Z)({role:"tablist","aria-orientation":c.orientation},a,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,disabled:c=!1,...l}=e,s=m("TabsTrigger",n),f=g(n),p=C(s.baseId,a),h=S(s.baseId,a),b=a===s.value;return(0,o.createElement)(u.ck,(0,r.Z)({asChild:!0},f,{focusable:!c,active:b}),(0,o.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":b,"aria-controls":h,"data-state":b?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:p},l,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{c||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(a)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(a)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==s.activationMode;b||c||!e||s.onValueChange(a)})})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,forceMount:a,children:u,...l}=e,s=m("TabsContent",n),f=C(s.baseId,i),p=S(s.baseId,i),h=i===s.value,b=(0,o.useRef)(h);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(c.z,{present:a||h},({present:n})=>(0,o.createElement)(d.WV.div,(0,r.Z)({"data-state":h?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:p,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:b.current?"0s":void 0}}),n&&u))});function C(e,t){return`${e}-trigger-${t}`}function S(e,t){return`${e}-content-${t}`}let z=y,R=x,F=w,M=E},6909:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(92379);function o(e,t,n){(0,r.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},64466:function(e,t,n){"use strict";n.d(t,{q:function(){return s}});var r=n(92379),o=n(71867),i=n(35069),a=n(66472),u=n(49439),c=n(39882),d=n(81529),l=n(74371);function s(e,t={}){let{isStatic:n}=(0,r.useContext)(a._),s=(0,r.useRef)(null),f=function(e){let t=(0,u.h)(()=>(0,i.BX)(e)),{isStatic:n}=(0,r.useContext)(a._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}((0,o.i)(e)?e.get():e),p=()=>{s.current&&s.current.stop()};return(0,r.useInsertionEffect)(()=>f.attach((e,r)=>{if(n)return r(e);let o=s.current;return o&&0===o.time&&o.sample(l.frameData.delta),p(),s.current=(0,d.y)({keyframes:[f.get(),e],velocity:f.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),f.get()},p),[JSON.stringify(t)]),(0,c.L)(()=>{if((0,o.i)(e))return e.on("change",e=>f.set(parseFloat(e)))},[f]),f}}}]);
//# sourceMappingURL=6263.dc167e0d1954cd1c.js.map