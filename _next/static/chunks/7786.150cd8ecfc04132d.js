(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7786,8396,4594],{18396:function(t,e){"use strict";function r(t){if(void 0!==t){if(null===t)return null;if(""===t)return"";t=t.replace(/\\+$/,t=>t.length%2==0?t:t.slice(0,-1));try{return JSON.parse(t)}catch(o){let[e,i]=":"===t.trimLeft()[0]?n(t,o):n(t,o,d);return r.lastParseReminding=i,r.onExtraToken&&i.length>0&&r.onExtraToken(t,e,i),e}}}function n(t,e,r){let n=i[t[0]]||r;if(!n)throw console.error(`no parser registered for ${JSON.stringify(t[0])}:`,{s:t}),e;return n(t,e)}e.Q=void 0,e.Q=r,(r=e.Q||(e.Q={})).onExtraToken=(t,e,r)=>{console.error("parsed json with extra tokens:",{text:t,data:e,reminding:r})};let i={};function o(t){return t.trimLeft()}function a(t,e){return n(t=o(t),e)}for(let t of(i[" "]=a,i["\r"]=a,i["\n"]=a,i["	"]=a,i["["]=function(t,e){t=t.substr(1);let r=[];for(t=o(t);t.length>0;){if("]"===t[0]){t=t.substr(1);break}let i=n(t,e,(t,e)=>d(t,e,[",","]"]));r.push(i[0]),","===(t=o(t=i[1]))[0]&&(t=o(t=t.substring(1)))}return[r,t]},"0123456789.-".slice()))i[t]=s;function s(t){for(let e=0;e<t.length;e++){if(i[t[e]]===s)continue;let r=t.substring(0,e);return t=t.substring(e),[l(r),t]}return[l(t),""]}function l(t){if("-"===t)return -0;let e=+t;return Number.isNaN(e)?t:e}function u(t){for(let e=1;e<t.length;e++){let r=t[e];if("\\"===r){e++;continue}if('"'===r){let r=c(t.substring(0,e+1));return t=t.substring(e+1),[JSON.parse(r),t]}}return[JSON.parse(c(t)+'"'),""]}function c(t){return t.replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r")}function f(t){for(let e=1;e<t.length;e++){let r=t[e];if("\\"===r){e++;continue}if("'"===r){let r=c(t.substring(0,e+1));return t=t.substring(e+1),[JSON.parse('"'+r.slice(1,-1)+'"'),t]}}return[JSON.parse('"'+c(t.slice(1))+'"'),""]}function d(t,e,r=[" "]){let n=Math.min(...r.map(e=>{let r=t.indexOf(e);return -1===r?t.length:r}));return[t.substring(0,n).trim(),t.substring(n)]}function p(t,e,r,n){for(let n=e.length;n>=1;n--)if(t.startsWith(e.slice(0,n)))return[r,t.slice(n)];{let r=JSON.stringify(t.slice(0,e.length));throw console.error(`unknown token starting with ${r}:`,{s:t}),n}}i['"']=u,i["'"]=f,i["{"]=function(t,e){t=t.substr(1);let r={};for(t=o(t);t.length>0;){var i,a;if("}"===t[0]){t=t.substr(1);break}let s=(a=[":","}"],'"'===(i=t)[0]?u(i):"'"===i[0]?f(i):d(i,e,a)),l=s[0];if(":"!==(t=o(t=s[1]))[0]||0===(t=o(t=t.substr(1))).length){r[l]=void 0;break}let c=n(t,e);r[l]=c[0],","===(t=o(t=c[1]))[0]&&(t=o(t=t.substr(1)))}return[r,t]},i.t=function(t,e){return p(t,"true",!0,e)},i.f=function(t,e){return p(t,"false",!1,e)},i.n=function(t,e){return p(t,"null",null,e)}},14545:function(t){var e=Math.floor,r=Math.random;t.exports=function(t,n){return t+e(r()*(n-t+1))}},78650:function(t,e,r){var n=r(14545),i=r(57209),o=r(73640),a=parseFloat,s=Math.min,l=Math.random;t.exports=function(t,e,r){if(r&&"boolean"!=typeof r&&i(t,e,r)&&(e=r=void 0),void 0===r&&("boolean"==typeof e?(r=e,e=void 0):"boolean"==typeof t&&(r=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=o(t),void 0===e?(e=t,t=0):e=o(e)),t>e){var u=t;t=e,e=u}if(r||t%1||e%1){var c=l();return s(t+c*(e-t+a("1e-"+((c+"").length-1))),e)}return n(t,e)}},7243:function(t,e,r){"use strict";r.d(e,{HK:function(){return h},Lw:function(){return g},l$:function(){return p}});var n,i=r(98601),o=r(2346);r(39696);var a=r(19841),s=r(88600),l=r(92379),u=r(15478),c=r(651);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach(function(e){(0,i.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(t){let{lines:e=1,variance:r=0,size:n="base",width:i=50,widthVariance:o=50,className:u}=t,{0:f}=(0,l.useState)(Array.from({length:e+Math.random()*(null!=r?r:0)},()=>i+Math.random()*o)),d="";switch(n){case"sm":d="h-3 mb-2 mt-0.5";break;case"base":d="h-4 my-2";break;case"lg":d="h-5 my-2"}return(0,c.jsx)(c.Fragment,{children:f.map((t,e)=>(0,c.jsx)("div",{className:(0,a.default)("relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",d,u),style:{width:"".concat(t,"%")},children:(0,c.jsx)(s.E.div,{className:"absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",animate:{x:["-100%","100%"],opacity:[1,0,1],transition:{repeat:1/0,repeatType:"loop",duration:1.5+e}}})},e))})}function h(t){let{lines:e=1,indexOffset:r=0,variance:n=0,width:i=50,widthVariance:o=50,gapFrequency:s=0,scaleUpAnimation:u,className:f}=t,d=(0,l.useMemo)(()=>Array.from({length:e+Math.random()*(null!=n?n:0)},()=>i+Math.random()*o),[e,n,i,o]);return(0,c.jsx)(b,{className:f,children:d.map((t,e)=>(0,c.jsx)(g,{index:e+r,width:t,className:(0,a.default)(s>0&&(e+1)%s==0&&"mb-snc-1"),customAnimation:u?{initial:{scaleX:u.initialScaleX},animate:{scaleX:1},transition:{scaleX:{duration:u.duration,ease:"easeInOut",delay:.07*e}}}:void 0},e))})}let b=u.Z.div(n||(n=(0,o.Z)(["flex flex-col items-start gap-2"])));function g(t){let{index:e,width:r,className:n,customAnimation:i}=t,{initial:o,animate:l,transition:u}=null!=i?i:{initial:{},animate:{},transition:{}};return(0,c.jsx)(s.E.div,{className:(0,a.default)("h-5 origin-left rounded-md bg-token-border-light dark:bg-white/10",n),style:{width:"".concat(r,"%")},initial:d({opacity:1},o),animate:d({opacity:[1,.4]},l),transition:d({opacity:{repeat:1/0,repeatType:"reverse",duration:.85,ease:"easeInOut",delay:.07*e}},u)})}}}]);
//# sourceMappingURL=7786.150cd8ecfc04132d.js.map