(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{30841:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return j},default:function(){return m}});var n=r(39993),i=r(4674),o=r(73602),c=r(29057),s=r(21218),u=r(22348),l=r(70079),a=r(85357),d=r(35250);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e){let{data:t}=(0,o.b9)(e.gizmoId),{0:r,1:n}=(0,l.useState)(!0);return(0,d.jsxs)(d.Fragment,{children:[t&&r&&(0,d.jsx)(i.Eu,{onClose:()=>n(!1),gizmoId:e.gizmoId,creatorId:t.gizmo.author.user_id,children:(0,d.jsx)(i.Bo,{onClick:()=>{c.A.logEvent(s.M.detailClickChat,{gizmo_id:e.gizmoId}),n(!1),window.history.pushState({},"",(0,o.m_)(t))}})}),(0,l.createElement)(a.GizmoChatWithRedirect,g(g({},e),{},{key:e.gizmoId}))]})}var j=!0;function m(e){let t=(0,u.useRouter)().query.gizmoId;return"chat_page"===e.kind?(0,l.createElement)(h,g(g({},e),{},{key:t,gizmoId:t})):(0,a.default)(e)}},85357:function(e,t,r){"use strict";r.r(t),r.d(t,{GizmoChatWithRedirect:function(){return z},__N_SSP:function(){return y},default:function(){return x}});var n=r(39993),i=r(46042),o=r(63095),c=r(49349),s=r(73602),u=r(43619),l=r(86713),a=r(18536),d=r(80195),f=r(93130),g=r(22348),h=r.n(g),j=r(70079),m=r(84692),p=r(35250);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=!0;function x(e){let t=(0,g.useRouter)().query.gizmoId;switch(e.kind){case"anon_gizmo":return(0,p.jsx)(c.X,{gizmo:e.gizmo},t);case"chat_page":return(0,j.createElement)(z,b(b({},e),{},{key:t,gizmoId:t}))}}function z(e){let{data:t,error:r}=(0,s.b9)(e.gizmoId),n=(0,f.t)(),o=null==n?void 0:n.canInteractWithGizmos();return((0,j.useEffect)(()=>{null==t&&null!=r&&h().push((0,d.M5)(d.LT.GIZMO_NOT_FOUND))},[t,r]),null!=r&&o)?(0,p.jsx)(P,{}):!1===o?(0,p.jsx)(_,{gizmo:t}):(0,j.createElement)(i.ZP,b(b({},e),{},{key:e.gizmoId}))}function P(){return(0,p.jsx)(l.Z,{children:(0,p.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[(0,p.jsx)("div",{className:"font-bold",children:(0,p.jsx)(m.Z,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),(0,p.jsx)(m.Z,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function _(e){let{gizmo:t}=e;return(0,p.jsx)(l.Z,{children:(0,p.jsx)(u.r,{gizmo:t,children:(0,p.jsxs)("div",{className:"mt-7 flex flex-col gap-4",children:[(0,p.jsx)(o.p,{onClick:()=>(0,a.MG)(),children:(0,p.jsx)(m.Z,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),(0,p.jsx)("div",{className:"text-sm text-token-text-tertiary",children:(0,p.jsx)(m.Z,{id:"gizmo.upsellSubtext",defaultMessage:"Requires ChatGPT Plus"})})]})})})}},86713:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(57784),i=r(13415),o=r(16787),c=r(22348),s=r(20228),u=r(21531),l=r(35250);function a(e){let{children:t}=e,r=(0,c.useRouter)();return(0,l.jsx)(i.Z,{mobileHeaderRightContent:null,sidebar:(0,l.jsxs)(o.ZP,{onNewThread:()=>{r.push("/")},className:"juice:pt-4",children:[(0,l.jsx)(u.Dy,{}),(0,l.jsx)(n.Z,{activeId:void 0})]}),children:(0,l.jsx)(s.Z,{children:t})})}},67536:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/about",function(){return r(30841)}])}},function(e){e.O(0,[5960,3656,4736,3433,5606,6883,3535,8095,6787,4873,8852,2778,2888,9774,179],function(){return e(e.s=67536)}),_N_E=e.O()}]);
//# sourceMappingURL=about-d09e6b4ae9db9f7c.js.map