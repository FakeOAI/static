(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4134,6614,9349,9672,2289],{14545:function(e){var t=Math.floor,r=Math.random;e.exports=function(e,n){return e+t(r()*(n-e+1))}},78650:function(e,t,r){var n=r(14545),i=r(57209),a=r(73640),o=parseFloat,u=Math.min,l=Math.random;e.exports=function(e,t,r){if(r&&"boolean"!=typeof r&&i(e,t,r)&&(t=r=void 0),void 0===r&&("boolean"==typeof t?(r=t,t=void 0):"boolean"==typeof e&&(r=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=a(e),void 0===t?(t=e,e=0):t=a(t)),e>t){var s=e;e=t,t=s}if(r||e%1||t%1){var c=l();return u(e+c*(t-e+o("1e-"+((c+"").length-1))),t)}return n(e,t)}},20326:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function i(e,t){if(e.length!==t.length)return!1;for(var r,i,a=0;a<e.length;a++)if(!((r=e[a])===(i=t[a])||n(r)&&n(i)))return!1;return!0}function a(e,t){void 0===t&&(t=i);var r=null;function n(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var a=e.apply(this,n);return r={lastResult:a,lastArgs:n,lastThis:this},a}return n.clear=function(){r=null},n}},7243:function(e,t,r){"use strict";r.d(t,{HK:function(){return d},Lw:function(){return h},l$:function(){return f}});var n=r(98601);r(39696);var i=r(19841),a=r(88600),o=r(92379),u=r(15478),l=r(651);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){let{lines:t=1,variance:r=0,size:n="base",width:u=50,widthVariance:s=50,className:c}=e,{0:f}=(0,o.useState)(Array.from({length:t+Math.random()*(r??0)},()=>u+Math.random()*s)),d="";switch(n){case"sm":d="h-3 mb-2 mt-0.5";break;case"base":d="h-4 my-2";break;case"lg":d="h-5 my-2"}return(0,l.jsx)(l.Fragment,{children:f.map((e,t)=>(0,l.jsx)("div",{className:(0,i.default)("relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",d,c),style:{width:`${e}%`},children:(0,l.jsx)(a.E.div,{className:"absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",animate:{x:["-100%","100%"],opacity:[1,0,1],transition:{repeat:1/0,repeatType:"loop",duration:1.5+t}}})},t))})}function d(e){let{lines:t=1,indexOffset:r=0,variance:n=0,width:a=50,widthVariance:u=50,gapFrequency:s=0,scaleUpAnimation:c,className:f}=e,d=(0,o.useMemo)(()=>Array.from({length:t+Math.random()*(n??0)},()=>a+Math.random()*u),[t,n,a,u]);return(0,l.jsx)(p,{className:f,children:d.map((e,t)=>(0,l.jsx)(h,{index:t+r,width:e,className:(0,i.default)(s>0&&(t+1)%s==0&&"mb-snc-1"),customAnimation:c?{initial:{scaleX:c.initialScaleX},animate:{scaleX:1},transition:{scaleX:{duration:c.duration,ease:"easeInOut",delay:.07*t}}}:void 0},t))})}let p=u.Z.div`flex flex-col items-start gap-2`;function h(e){let{index:t,width:r,className:n,customAnimation:o}=e,{initial:u,animate:s,transition:f}=o??{initial:{},animate:{},transition:{}};return(0,l.jsx)(a.E.div,{className:(0,i.default)("h-5 origin-left rounded-md bg-token-border-light dark:bg-white/10",n),style:{width:`${r}%`},initial:c({opacity:1},u),animate:c({opacity:[1,.4]},s),transition:c({opacity:{repeat:1/0,repeatType:"reverse",duration:.85,ease:"easeInOut",delay:.07*t}},f)})}},96614:function(e,t,r){"use strict";r.d(t,{Sz:function(){return f},kr:function(){return c}});var n=r(92379),i=r(22015);r(44675);let a=Symbol(),o=Symbol(),u="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?n.useEffect:n.useLayoutEffect,l=i.unstable_runWithPriority?e=>{try{(0,i.unstable_runWithPriority)(i.unstable_NormalPriority,e)}catch(t){if("Not implemented."===t.message)e();else throw t}}:e=>e(),s=e=>({value:t,children:r})=>{let i=(0,n.useRef)(t),o=(0,n.useRef)(0),[s,c]=(0,n.useState)(null);s&&(s(t),c(null));let f=(0,n.useRef)();if(!f.current){let e=new Set;f.current={[a]:{v:i,n:o,l:e,u:(t,r)=>{o.current+=1;let n={n:o.current};(null==r?void 0:r.suspense)&&(n.n*=-1,n.p=new Promise(e=>{c(()=>t=>{n.v=t,delete n.p,e(t)})})),e.forEach(e=>e(n)),t()}}}}return u(()=>{i.current=t,o.current+=1,l(()=>{f.current[a].l.forEach(e=>{e({n:o.current,v:t})})})},[t]),(0,n.createElement)(e,{value:f.current},r)};function c(e){let t=(0,n.createContext)({[a]:{v:{current:e},n:{current:-1},l:new Set,u:e=>e()}});return t[o]=t.Provider,t.Provider=s(t.Provider),delete t.Consumer,t}function f(e,t){let{v:{current:r},n:{current:i},l:o}=(0,n.useContext)(e)[a],l=t(r),[s,c]=(0,n.useReducer)((e,n)=>{if(!n)return[r,l];if("p"in n)throw n.p;if(n.n===i)return Object.is(e[1],l)?e:[r,l];try{if("v"in n){if(Object.is(e[0],n.v))return e;let r=t(n.v);if(Object.is(e[1],r))return e;return[n.v,r]}}catch(e){}return[...e]},[r,l]);return Object.is(s[1],l)||c(),u(()=>(o.add(c),()=>{o.delete(c)}),[o]),s[1]}}}]);
//# sourceMappingURL=4134.9b839460c4d7a527.js.map