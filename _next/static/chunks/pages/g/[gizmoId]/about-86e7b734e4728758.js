(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{57404:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m},default:function(){return b}});var r=n(97410),o=n(26316),l=n(96314),u=n(99140),a=n(66943),i=n(32307),s=n(92379),c=n(85250),p=n(651);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e){let{data:t}=(0,l.b9)(e.gizmoId),{0:n,1:r}=(0,s.useState)(!0);return(0,p.jsxs)(p.Fragment,{children:[t&&n&&(0,p.jsx)(o.Eu,{onClose:()=>r(!1),gizmoId:e.gizmoId,creatorId:t.gizmo.author.user_id,children:(0,p.jsx)(o.Bo,{onClick:()=>{u.A.logEvent(a.M.detailClickChat,{gizmo_id:e.gizmoId}),r(!1),window.history.pushState({},"",(0,l.m_)(t))}})}),(0,s.createElement)(c.GizmoChatWithRedirect,f(f({},e),{},{key:e.gizmoId}))]})}var m=!0;function b(e){let t=(0,i.useRouter)().query.gizmoId;return"chat_page"===e.kind?(0,s.createElement)(v,f(f({},e),{},{key:t,gizmoId:t})):(0,c.default)(e)}},85250:function(e,t,n){"use strict";n.r(t),n.d(t,{GizmoChatWithRedirect:function(){return S},__N_SSP:function(){return h},default:function(){return E}});var r=n(97410),o=n(90360),l=n(98443),u=n(96314),a=n(67655),i=n(27221),s=n(90936),c=n(63738),p=n(47480),d=n(44575),f=n(32307),v=n.n(f),m=n(92379),b=n(62984),P=n(651);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=!0;function E(e){let t=(0,f.useRouter)().query.gizmoId;switch(e.kind){case"anon_gizmo":return(0,P.jsx)(l.X,{gizmo:e.gizmo},t);case"chat_page":return(0,m.createElement)(S,y(y({},e),{},{key:t,gizmoId:t}))}}function S(e){let{data:t,error:n}=(0,u.b9)(e.gizmoId),r=(0,d.t)(),l=null==r?void 0:r.canInteractWithGizmos();return((0,m.useEffect)(()=>{null==t&&null!=n&&v().push((0,p.M5)(p.LT.GIZMO_NOT_FOUND))},[t,n]),null!=n&&l)?(0,P.jsx)(O,{}):!1===l?(0,P.jsx)(j,{gizmo:t}):(0,m.createElement)(o.ZP,y(y({},e),{},{key:e.gizmoId}))}function O(){return(0,P.jsx)(i.Z,{children:(0,P.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,P.jsx)("div",{className:"font-bold",children:(0,P.jsx)(b.Z,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),(0,P.jsx)(b.Z,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function j(e){let{gizmo:t}=e;return(0,P.jsx)(i.Z,{children:(0,P.jsx)(a.r,{gizmo:t,children:(0,P.jsxs)("div",{className:"mt-7 flex flex-col gap-4",children:[(0,P.jsx)(s.p,{onClick:()=>(0,c.MG)("Gizmo page upsell button"),children:(0,P.jsx)(b.Z,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),(0,P.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,P.jsx)(b.Z,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}},27221:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(27486),o=n(28098),l=n(31973),u=n(32307),a=n.n(u),i=n(55743),s=n(28828),c=n(7507),p=n(651);function d(e){let{children:t,header:n}=e;return(0,p.jsxs)(o.Z,{mobileHeaderRightContent:null,sidebar:(0,p.jsxs)(l.ZP,{navHeader:(0,p.jsx)(i.$,{className:"flex h-14 items-center",onNewThread:()=>a().push("/"),historyDisabled:!1}),children:[(0,p.jsx)(c.Dy,{}),(0,p.jsx)(r.Z,{activeId:void 0})]}),children:[n,(0,p.jsx)(s.Z,{children:t})]})}},79890:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/about",function(){return n(57404)}])},89039:function(e,t,n){"use strict";let r,o;n.d(t,{J:function(){return Z}});var l=n(92379),u=n(782),a=n(78789),i=n(91157),s=n(86060),c=n(76227),p=n(88554),d=n(98397),f=n(57084),v=n(60839),m=n(67607),b=n(87054),P=n(25825),g=n(39231),y=n(37927),h=n(11943),E=n(51973),S=((r=S||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),O=((o=O||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let j={0:e=>({...e,popoverState:(0,u.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},w=(0,l.createContext)(null);function x(e){let t=(0,l.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}w.displayName="PopoverContext";let I=(0,l.createContext)(null);function z(e){let t=(0,l.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}I.displayName="PopoverAPIContext";let k=(0,l.createContext)(null);function T(){return(0,l.useContext)(k)}k.displayName="PopoverGroupContext";let N=(0,l.createContext)(null);function M(e,t){return(0,u.E)(t.type,j,e,t)}N.displayName="PopoverPanelContext";let C=(0,a.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,s.M)()}`,o=`headlessui-popover-panel-${(0,s.M)()}`,c=(0,l.useRef)(null),p=(0,i.T)(t,(0,i.h)(e=>{c.current=e})),v=(0,l.useReducer)(M,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:b,button:y,panel:E,beforePanelSentinel:S,afterPanelSentinel:O},j]=v,x=(0,P.i)(null!=(n=c.current)?n:y);(0,l.useEffect)(()=>j({type:3,buttonId:r}),[r,j]),(0,l.useEffect)(()=>j({type:5,panelId:o}),[o,j]);let z=(0,l.useMemo)(()=>{if(!y||!E)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(y))^Number(null==e?void 0:e.contains(E)))return!0;return!1},[y,E]),k=(0,l.useMemo)(()=>({buttonId:r,panelId:o,close:()=>j({type:1})}),[r,o,j]),N=T(),C=null==N?void 0:N.registerPopover,_=(0,h.z)(()=>{var e;return null!=(e=null==N?void 0:N.isFocusWithinPopoverGroup())?e:(null==x?void 0:x.activeElement)&&((null==y?void 0:y.contains(x.activeElement))||(null==E?void 0:E.contains(x.activeElement)))});(0,l.useEffect)(()=>null==C?void 0:C(k),[C,k]),(0,g.O)(null==x?void 0:x.defaultView,"focus",e=>{var t,n,r,o;0===b&&(_()||!y||!E||null!=(n=null==(t=S.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=O.current)?void 0:r.contains)&&o.call(r,e.target)||j({type:1}))},!0),(0,m.O)([y,E],(e,t)=>{j({type:1}),(0,d.sP)(t,d.tJ.Loose)||(e.preventDefault(),null==y||y.focus())},0===b);let D=(0,h.z)(e=>{j({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:y:y;null==t||t.focus()}),R=(0,l.useMemo)(()=>({close:D,isPortalled:z}),[D,z]),F=(0,l.useMemo)(()=>({open:0===b,close:D}),[b,D]);return l.createElement(w.Provider,{value:v},l.createElement(I.Provider,{value:R},l.createElement(f.up,{value:(0,u.E)(b,{0:f.ZM.Open,1:f.ZM.Closed})},(0,a.sY)({ourProps:{ref:p},theirProps:e,slot:F,defaultTag:"div",name:"Popover"}))))}),_=(0,a.yV)(function(e,t){let[n,r]=x("Popover.Button"),{isPortalled:o}=z("Popover.Button"),f=(0,l.useRef)(null),m=`headlessui-focus-sentinel-${(0,s.M)()}`,b=T(),g=null==b?void 0:b.closeOthers,S=(0,l.useContext)(N),O=null!==S&&S===n.panelId,j=(0,i.T)(f,t,O?null:e=>r({type:2,button:e})),w=(0,i.T)(f,t),I=(0,P.i)(f),k=(0,h.z)(e=>{var t,o,l;if(O){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==g?void 0:g(n.buttonId);if(!f.current||(null==I?void 0:I.activeElement)&&!f.current.contains(I.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),M=(0,h.z)(e=>{O||e.key===c.R.Space&&e.preventDefault()}),C=(0,h.z)(t=>{var o,l;(0,p.P)(t.currentTarget)||e.disabled||(O?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0}),null==(l=n.button)||l.focus()))}),_=(0,h.z)(e=>{e.preventDefault(),e.stopPropagation()}),D=0===n.popoverState,R=(0,l.useMemo)(()=>({open:D}),[D]),F=(0,v.f)(e,f),Z=O?{ref:w,type:F,onKeyDown:k,onClick:C}:{ref:j,id:n.buttonId,type:F,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:k,onKeyUp:M,onClick:C,onMouseDown:_},A=(0,E.l)(),B=(0,h.z)(()=>{let e=n.panel;e&&(0,u.E)(A.current,{[E.N.Forwards]:()=>(0,d.jA)(e,d.TO.First),[E.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(l.Fragment,null,(0,a.sY)({ourProps:Z,theirProps:e,slot:R,defaultTag:"button",name:"Popover.Button"}),D&&!O&&o&&l.createElement(y._,{id:m,features:y.A.Focusable,as:"button",type:"button",onFocus:B}))}),D=a.AN.RenderStrategy|a.AN.Static,R=(0,a.yV)(function(e,t){let[{popoverState:n},r]=x("Popover.Overlay"),o=(0,i.T)(t),u=`headlessui-popover-overlay-${(0,s.M)()}`,c=(0,f.oJ)(),d=null!==c?c===f.ZM.Open:0===n,v=(0,h.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();r({type:1})}),m=(0,l.useMemo)(()=>({open:0===n}),[n]);return(0,a.sY)({ourProps:{ref:o,id:u,"aria-hidden":!0,onClick:v},theirProps:e,slot:m,defaultTag:"div",features:D,visible:d,name:"Popover.Overlay"})}),F=a.AN.RenderStrategy|a.AN.Static,Z=Object.assign(C,{Button:_,Overlay:R,Panel:(0,a.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,p]=x("Popover.Panel"),{close:v,isPortalled:m}=z("Popover.Panel"),b=`headlessui-focus-sentinel-before-${(0,s.M)()}`,g=`headlessui-focus-sentinel-after-${(0,s.M)()}`,S=(0,l.useRef)(null),O=(0,i.T)(S,t,e=>{p({type:4,panel:e})}),j=(0,P.i)(S),w=(0,f.oJ)(),I=null!==w?w===f.ZM.Open:0===o.popoverState,k=(0,h.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==o.popoverState||!S.current||(null==j?void 0:j.activeElement)&&!S.current.contains(j.activeElement))return;e.preventDefault(),e.stopPropagation(),p({type:1}),null==(t=o.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&p({type:4,panel:null})},[o.popoverState,e.unmount,e.static,p]),(0,l.useEffect)(()=>{if(!n||0!==o.popoverState||!S.current)return;let e=null==j?void 0:j.activeElement;S.current.contains(e)||(0,d.jA)(S.current,d.TO.First)},[n,S,o.popoverState]);let T=(0,l.useMemo)(()=>({open:0===o.popoverState,close:v}),[o,v]),M={ref:O,id:o.panelId,onKeyDown:k,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,u;let a=e.relatedTarget;!a||!S.current||null!=(t=S.current)&&t.contains(a)||(p({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,a))||(null==(u=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:u.call(l,a)))&&a.focus({preventScroll:!0}))}:void 0,tabIndex:-1},C=(0,E.l)(),_=(0,h.z)(()=>{let e=S.current;e&&(0,u.E)(C.current,{[E.N.Forwards]:()=>{(0,d.jA)(e,d.TO.First)},[E.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),D=(0,h.z)(()=>{let e=S.current;e&&(0,u.E)(C.current,{[E.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,d.GO)(),l=r.indexOf(o.button),u=r.slice(0,l+1),a=[...r.slice(l+1),...u];for(let r of a.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=a.indexOf(r);-1!==e&&a.splice(e,1)}(0,d.jA)(a,d.TO.First,!1)},[E.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(N.Provider,{value:o.panelId},I&&m&&l.createElement(y._,{id:b,ref:o.beforePanelSentinel,features:y.A.Focusable,as:"button",type:"button",onFocus:_}),(0,a.sY)({ourProps:M,theirProps:r,slot:T,defaultTag:"div",features:F,visible:I,name:"Popover.Panel"}),I&&m&&l.createElement(y._,{id:g,ref:o.afterPanelSentinel,features:y.A.Focusable,as:"button",type:"button",onFocus:D}))}),Group:(0,a.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,i.T)(n,t),[o,u]=(0,l.useState)([]),s=(0,h.z)(e=>{u(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,h.z)(e=>(u(t=>[...t,e]),()=>s(e))),p=(0,h.z)(()=>{var e;let t=(0,b.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),d=(0,h.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),f=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:p,closeOthers:d}),[c,s,p,d]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(k.Provider,{value:f},(0,a.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},39231:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(92379),o=n(23441);function l(e,t,n,l){let u=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){u.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)},[e,t,l])}},51973:function(e,t,n){"use strict";let r;n.d(t,{N:function(){return u},l:function(){return a}});var o=n(92379),l=n(23441),u=((r=u||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function a(){var e,t;let n,r=(0,o.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,l.E)(t),(0,o.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},37927:function(e,t,n){"use strict";let r;n.d(t,{A:function(){return l},_:function(){return u}});var o=n(78789),l=((r=l||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let u=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},11812:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(46598);function o(e=.1,{startDelay:t=0,from:n=0,ease:o}={}){return(l,u)=>{let a=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,u))-l);if(o){let t=u*e;a=(0,r.R)(o)(a/t)*t}return t+a}}}},function(e){e.O(0,[2205,4198,9169,4089,5182,7751,5592,8500,1612,3183,2349,444,2155,4984,3950,3300,7664,737,3280,6879,1894,646,3738,1148,5074,7017,3658,5825,1596,8295,6316,2888,9774,179],function(){return e(e.s=79890)}),_N_E=e.O()}]);
//# sourceMappingURL=about-86e7b734e4728758.js.map