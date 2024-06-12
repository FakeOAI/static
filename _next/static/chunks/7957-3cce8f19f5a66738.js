"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7957],{27192:function(e,t,n){let r;n.d(t,{R:function(){return u}});var u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},31206:function(e,t,n){let r,u;n.d(t,{u:function(){return R}});var i=n(92379),o=n(85699),l=n(70232),a=n(26970),s=n(78749),c=n(78697),f=n(22088),d=n(26569),v=n(64775),m=n(65033);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var E=((r=E||{}).Ended="ended",r.Cancelled="cancelled",r);function b(){let[e]=(0,i.useState)(m.k);return(0,i.useEffect)(()=>()=>e.dispose(),[e]),e}var g=n(42652);function w(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,i.createContext)(null);y.displayName="TransitionContext";var T=((u=T||{}).Visible="visible",u.Hidden="hidden",u);let F=(0,i.createContext)(null);function L(e){return"children"in e?L(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function O(e,t){let n=(0,f.E)(e),r=(0,i.useRef)([]),u=(0,s.t)(),l=b(),c=(0,g.z)((e,t=o.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,a.E)(t,{[o.l4.Unmount](){r.current.splice(i,1)},[o.l4.Hidden](){r.current[i].state="hidden"}}),l.microTask(()=>{var e;!L(r)&&u.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>c(e,o.l4.Unmount)}),v=(0,i.useRef)([]),m=(0,i.useRef)(Promise.resolve()),p=(0,i.useRef)({enter:[],leave:[],idle:[]}),h=(0,g.z)((e,n,r)=>{v.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{v.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(p.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),E=(0,g.z)((e,t,n)=>{Promise.all(p.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=v.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:d,unregister:c,onStart:h,onStop:E,wait:m,chains:p}),[d,c,r,h,E,p,m])}function S(){}F.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:S;return n}let N=o.AN.RenderStrategy,C=(0,o.yV)(function(e,t){var n;let r,{beforeEnter:u,afterEnter:T,beforeLeave:S,afterLeave:P,enter:C,enterFrom:x,enterTo:k,entered:R,leave:H,leaveFrom:M,leaveTo:j,...D}=e,U=(0,i.useRef)(null),I=(0,v.T)(U,t),q=D.unmount?o.l4.Unmount:o.l4.Hidden,{show:_,appear:z,initial:V}=function(){let e=(0,i.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,$]=(0,i.useState)(_?"visible":"hidden"),B=function(){let e=(0,i.useContext)(F);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:J,unregister:W}=B,Z=(0,i.useRef)(null);(0,i.useEffect)(()=>J(U),[J,U]),(0,i.useEffect)(()=>{if(q===o.l4.Hidden&&U.current){if(_&&"visible"!==Y){$("visible");return}return(0,a.E)(Y,{hidden:()=>W(U),visible:()=>J(U)})}},[Y,U,J,W,_,q]);let G=(0,f.E)({enter:w(C),enterFrom:w(x),enterTo:w(k),entered:w(R),leave:w(H),leaveFrom:w(M),leaveTo:w(j)}),K=(n={beforeEnter:u,afterEnter:T,beforeLeave:S,afterLeave:P},r=(0,i.useRef)(A(n)),(0,i.useEffect)(()=>{r.current=A(n)},[n]),r),Q=(0,d.H)();(0,i.useEffect)(()=>{if(Q&&"visible"===Y&&null===U.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[U,Y,Q]);let X=V&&!z,ee=!Q||X||Z.current===_?"idle":_?"enter":"leave",et=(0,g.z)(e=>(0,a.E)(e,{enter:()=>K.current.beforeEnter(),leave:()=>K.current.beforeLeave(),idle:()=>{}})),en=(0,g.z)(e=>(0,a.E)(e,{enter:()=>K.current.afterEnter(),leave:()=>K.current.afterLeave(),idle:()=>{}})),er=O(()=>{$("hidden"),W(U)},B);return function({container:e,direction:t,classes:n,onStart:r,onStop:u}){let i=(0,s.t)(),o=b(),l=(0,f.E)(t);(0,c.e)(()=>{let t=(0,m.k)();o.add(t.dispose);let s=e.current;if(s&&"idle"!==l.current&&i.current){var c,f,d;let e,i,o,v,b,g,w;return t.dispose(),r.current(l.current),t.add((c=n.current,f="enter"===l.current,d=e=>{t.dispose(),(0,a.E)(e,{[E.Ended](){u.current(l.current)},[E.Cancelled]:()=>{}})},i=f?"enter":"leave",o=(0,m.k)(),v=void 0!==d?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,d(...t)}):()=>{},"enter"===i&&(s.removeAttribute("hidden"),s.style.display=""),b=(0,a.E)(i,{enter:()=>c.enter,leave:()=>c.leave}),g=(0,a.E)(i,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),w=(0,a.E)(i,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),h(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),p(s,...b,...w),o.nextFrame(()=>{h(s,...w),p(s,...g),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[i,o]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(i+o!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&(r.splice(0).forEach(e=>e()),r.push(n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t("ended"),r.splice(0).forEach(e=>e()))}),n.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t("cancelled"),r.splice(0).forEach(e=>e()))})))}))}else t("ended");n.add(()=>t("cancelled")),n.dispose}(s,e=>("ended"===e&&(h(s,...b),p(s,...c.entered)),v(e)))}),o.dispose)),t.dispose}},[t])}({container:U,classes:G,direction:ee,onStart:(0,f.E)(e=>{er.onStart(U,e,et)}),onStop:(0,f.E)(e=>{er.onStop(U,e,en),"leave"!==e||L(er)||($("hidden"),W(U))})}),(0,i.useEffect)(()=>{X&&(q===o.l4.Hidden?Z.current=null:Z.current=_)},[_,X,Y]),i.createElement(F.Provider,{value:er},i.createElement(l.up,{value:(0,a.E)(Y,{visible:l.ZM.Open,hidden:l.ZM.Closed})},(0,o.sY)({ourProps:{ref:I},theirProps:D,defaultTag:"div",features:N,visible:"visible"===Y,name:"Transition.Child"})))}),x=(0,o.yV)(function(e,t){let{show:n,appear:r=!1,unmount:u,...s}=e,f=(0,i.useRef)(null),m=(0,v.T)(f,t);(0,d.H)();let p=(0,l.oJ)();if(void 0===n&&null!==p&&(n=(0,a.E)(p,{[l.ZM.Open]:!0,[l.ZM.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,E]=(0,i.useState)(n?"visible":"hidden"),b=O(()=>{E("hidden")}),[g,w]=(0,i.useState)(!0),T=(0,i.useRef)([n]);(0,c.e)(()=>{!1!==g&&T.current[T.current.length-1]!==n&&(T.current.push(n),w(!1))},[T,n]);let S=(0,i.useMemo)(()=>({show:n,appear:r,initial:g}),[n,r,g]);(0,i.useEffect)(()=>{if(n)E("visible");else if(L(b)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&E("hidden")}else E("hidden")},[n,b]);let P={unmount:u};return i.createElement(F.Provider,{value:b},i.createElement(y.Provider,{value:S},(0,o.sY)({ourProps:{...P,as:i.Fragment,children:i.createElement(C,{ref:m,...P,...s})},theirProps:{},defaultTag:i.Fragment,features:N,visible:"visible"===h,name:"Transition"})))}),k=(0,o.yV)(function(e,t){let n=null!==(0,i.useContext)(y),r=null!==(0,l.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(x,{ref:t,...e}):i.createElement(C,{ref:t,...e}))}),R=Object.assign(x,{Child:k,Root:x})},15750:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(92379),u=n(22088);function i(e,t,n,i){let o=(0,u.E)(n);(0,r.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)},[e,t,i])}},42652:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(92379),u=n(22088);let i=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},78461:function(e,t,n){n.d(t,{M:function(){return s}});var r,u=n(92379),i=n(78697),o=n(26569);let l=0;function a(){return++l}let s=null!=(r=u.useId)?r:function(){let e=(0,o.H)(),[t,n]=u.useState(e?a:null);return(0,i.e)(()=>{null===t&&n(a())},[t]),null!=t?""+t:void 0}},78749:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(92379),u=n(78697);function i(){let e=(0,r.useRef)(!1);return(0,u.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},78697:function(e,t,n){n.d(t,{e:function(){return u}});var r=n(92379);let u=n(71661).s?r.useEffect:r.useLayoutEffect},22088:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(92379),u=n(78697);function i(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},23508:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(92379),u=n(74214),i=n(22088);function o(e,t,n){let u=(0,i.E)(t);(0,r.useEffect)(()=>{function t(e){u.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function l(e,t,n=!0){let i=(0,r.useRef)(!1);function l(n,r){if(!i.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r(n);if(null!==l&&l.ownerDocument.documentElement.contains(l)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l))return}return(0,u.sP)(l,u.tJ.Loose)||-1===l.tabIndex||n.preventDefault(),t(n,l)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{i.current=n})},[n]);let a=(0,r.useRef)(null);o("mousedown",e=>{i.current&&(a.current=e.target)},!0),o("click",e=>{a.current&&(l(e,()=>a.current),a.current=null)},!0),o("blur",e=>l(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},29555:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(92379),u=n(75370);function i(...e){return(0,r.useMemo)(()=>(0,u.r)(...e),[...e])}},26569:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(92379);let u={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(u.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===u.serverHandoffComplete&&(u.serverHandoffComplete=!0)},[]),e}},64775:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return o}});var r=n(92379),u=n(42652);let i=Symbol();function o(e,t=!0){return Object.assign(e,{[i]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},24980:function(e,t,n){let r;n.d(t,{N:function(){return o},l:function(){return l}});var u=n(92379),i=n(22088),o=((r=o||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function l(){var e,t;let n,r=(0,u.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,i.E)(t),(0,u.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},35165:function(e,t,n){let r;n.d(t,{A:function(){return i},_:function(){return o}});var u=n(85699),i=((r=i||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let o=(0,u.yV)(function(e,t){let{features:n=1,...r}=e,i={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,u.sY)({ourProps:i,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},70232:function(e,t,n){let r;n.d(t,{ZM:function(){return o},oJ:function(){return l},up:function(){return a}});var u=n(92379);let i=(0,u.createContext)(null);i.displayName="OpenClosedContext";var o=((r=o||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function l(){return(0,u.useContext)(i)}function a({value:e,children:t}){return u.createElement(i.Provider,{value:e},t)}},44137:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},65033:function(e,t,n){n.d(t,{k:function(){return u}});var r=n(36458);function u(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}},74214:function(e,t,n){let r,u,i,o;n.d(t,{C5:function(){return h},GO:function(){return v},TO:function(){return c},fE:function(){return f},jA:function(){return E},sP:function(){return p},tJ:function(){return m}});var l=n(26970),a=n(75370);let s=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var c=((r=c||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),f=((u=f||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),d=((i=d||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(s))}var m=((o=m||{})[o.Strict=0]="Strict",o[o.Loose=1]="Loose",o);function p(e,t=0){var n;return e!==(null==(n=(0,a.r)(e))?void 0:n.body)&&(0,l.E)(t,{0:()=>e.matches(s),1(){let t=e;for(;null!==t;){if(t.matches(s))return!0;t=t.parentElement}return!1}})}function h(e){null==e||e.focus({preventScroll:!0})}function E(e,t,n=!0,r=null){var u,i,o;let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let i=r.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:v(e);r=null!=r?r:l.activeElement;let s=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},d=0,m=a.length,p;do{if(d>=m||d+m<=0)return 0;let e=c+d;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(p=a[e])||p.focus(f),d+=s}while(p!==l.activeElement);return 6&t&&null!=(o=null==(i=null==(u=p)?void 0:u.matches)?void 0:i.call(u,"textarea,input"))&&o&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}},26970:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},36458:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},75370:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(71661);function u(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},85699:function(e,t,n){let r,u;n.d(t,{AN:function(){return l},l4:function(){return a},sY:function(){return s},yV:function(){return d}});var i=n(92379),o=n(26970),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),a=((u=a||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:i=!0,name:l}){let a=f(t,e);if(i)return c(a,n,r,l);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return c(t,n,r,l)}if(1&s){let{unmount:e=!0,...t}=a;return(0,o.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return c(a,n,r,l)}function c(e,t={},n,r){let{as:u=n,children:o,refName:l="ref",...a}=m(e,["unmount","static"]),s=void 0!==e.ref?{[l]:e.ref}:{},c="function"==typeof o?o(t):o;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let d={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(u===i.Fragment&&Object.keys(v(a)).length>0){if(!(0,i.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,i.cloneElement)(c,Object.assign({},f(c.props,v(m(a,["ref"]))),d,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,i.createElement)(u,Object.assign({},m(a,["ref"]),u!==i.Fragment&&s,u!==i.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function d(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},71661:function(e,t,n){n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document}}]);
//# sourceMappingURL=7957-3cce8f19f5a66738.js.map