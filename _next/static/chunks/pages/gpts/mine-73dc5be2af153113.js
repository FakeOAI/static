(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1530],{77346:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return S},default:function(){return G}});var n,r,i=s(98601),l=s(2346),a=s(93951),o=s(13391),c=s(34977),d=s(92379),u=s(75172),x=s(62984),m=s(68306),f=s(15478),g=s(11550),h=s(97537),p=s(39004),j=s(47424),b=s(651);function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}let y=f.Z.div(n||(n=(0,l.Z)(["border-b-2 border-b-black pb-3 dark:border-b-white"]))),w=f.Z.div(r||(r=(0,l.Z)(["cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary"])));function N(){let e=(0,a.t)(),t=(0,c.useRouter)(),s=null==e?void 0:e.isWorkspaceAccount(),{0:n,1:r}=(0,d.useState)("mine");(0,o.yx)({resetThreadAction:()=>{t.push("/")}});let i=(0,u.Z)();if(null==e)return null;let l=(0,b.jsx)(x.Z,{id:"1pqG1A",defaultMessage:"Created by me"}),m=(0,b.jsx)(x.Z,{id:"2oQjZs",defaultMessage:"Shared with me"});return(0,b.jsx)("div",{className:"relative",children:(0,b.jsxs)("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[(0,b.jsx)("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:(0,b.jsx)(x.Z,{id:"dgQTc/",defaultMessage:"My GPTs"})}),s&&("mine"===n?(0,b.jsxs)("div",{className:"mb-4 flex flex-row space-x-4",children:[(0,b.jsx)(y,{children:l}),(0,b.jsx)(w,{onClick:()=>r("shared_with_me"),children:m})]}):(0,b.jsxs)("div",{className:"mb-4 flex flex-row space-x-4",children:[(0,b.jsx)(w,{onClick:()=>r("mine"),children:l}),(0,b.jsx)(y,{children:m})]})),"mine"===n&&(0,b.jsx)(j.at,{type:j.a7.Enabled}),(0,b.jsx)(O,{emptyMessage:"shared_with_me"===n?i.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:n},n)]})})}function O(e){var t;let{cutId:s,emptyMessage:n}=e,{0:r,1:l}=(0,d.useState)(!0),{data:a,hasNextPage:o,fetchNextPage:c,isLoading:u}=(0,p.Fi)({cutId:s,limit:8,enabled:r});return u&&(null==a||0===a.pages.length)?(0,b.jsx)("div",{className:"my-8 flex justify-center",children:(0,b.jsx)(h.Z,{})}):u||(null==a||null===(t=a.pages)||void 0===t?void 0:t[0].list.items.length)!==0?(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{children:null==a?void 0:a.pages.flatMap(e=>e.list.items.map(e=>{let{resource:t}=e;return(0,b.jsx)(j.r1,{gizmoResource:t},t.gizmo.id)}))}),!r||o||u?(0,b.jsx)(g.z,{color:"secondary",onClick:()=>{r?c():l(!0)},loading:u,fullWidth:!0,children:(0,b.jsx)(x.Z,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},Z.discoveryLoadMore))}):null]}):(0,b.jsx)("span",{children:n})}let Z=(0,m.vU)({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});var k=s(60476),P=s(71829),C=s(66290);function z(e){let{children:t}=e,s=(0,a.t)(),n=(0,C.Z)();return null==s?null:s.canInteractWithGizmos()?(0,b.jsxs)("div",{children:[t,(0,b.jsx)("div",{className:"fixed bottom-3 right-3",children:(0,b.jsx)(k.Z,{})})]}):s.hasPaidSubscription()?null:(0,b.jsx)(M,{button:(0,b.jsx)(g.z,{onClick:()=>(0,P.MG)(n,"Gizmo landing upsell"),children:(0,b.jsx)(x.Z,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:(0,b.jsx)(x.Z,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function M(e){let{children:t,button:s}=e;return(0,b.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,b.jsxs)("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[(0,b.jsx)("h2",{children:t}),(0,b.jsx)("div",{className:"m-auto",children:s})]})})}var T=s(71090),D=s(82655),_=s(53114),S=!0;function G(){let e=(0,a.t)(),t=null==e?void 0:e.canCreateGizmos(),s=(0,c.useRouter)();return((0,d.useEffect)(()=>{null==e||t||s.push("/gpts")},[e,t,s]),null!=e&&e.canCreateGizmos())?(0,b.jsx)(D.Z,{header:(0,b.jsxs)(T.QT,{children:[(0,b.jsx)(_.M3,{}),(0,b.jsx)("div",{className:"ml-auto",children:(0,b.jsx)(_.CT,{})})]}),children:(0,b.jsx)(z,{children:(0,b.jsx)(N,{})})}):null}},60476:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var n=s(86025),r=s(31438),i=s(31498),l=s(79746),a=s(88667),o=s(62984),c=s(98095),d=s(77748),u=s(30808),x=s(91496),m=s(24740),f=s(651);function g(){var e,t;let s=(0,i.aF)(),{isUnauthenticated:g}=(0,n.u)(),h=null===(e=(0,a.sB)("3376455464"))||void 0===e?void 0:e.value,p=null===(t=(0,a.sB)("90459671"))||void 0===t?void 0:t.value,{openSettings:j}=(0,x.F)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c.d,{triggerButton:(0,f.jsx)("button",{className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",children:"?"}),children:[s&&!g&&(0,f.jsx)(c.Z.Item,{onClick:()=>{(0,l.v)(s.id).then(()=>{m.m.success("Copied your User ID to clipboard")})},icon:d.TIy,children:s.email}),(0,f.jsx)(u.E,{}),(0,f.jsx)(c.Z.Item,{icon:d.GlC,onClick:()=>{r.vm.openModal(r.B.KeyboardActions)},children:(0,f.jsx)(o.Z,{id:"thread.keyboardShortcutsMenu",defaultMessage:"Keyboard shortcuts"})}),h&&p&&(0,f.jsx)(c.Z.Item,{icon:d.U65,onClick:()=>{r.vm.openModal(r.B.ReportConversation)},children:(0,f.jsx)(o.Z,{id:"thread.report",defaultMessage:"Report Illegal Content"})}),g&&(0,f.jsx)(c.Z.Item,{onClick:()=>j(),icon:d.KAl,children:(0,f.jsx)(o.Z,{id:"helpMenu.items.settings",defaultMessage:"Settings"})})]})})}},46702:function(e,t,s){"use strict";s.d(t,{b:function(){return d}});var n=s(59144),r=s(24434),i=s(39004),l=s(24740),a=s(75172),o=s(62984),c=s(651);function d(e){let{gizmoId:t,onSuccess:s,onClose:d}=e,u=(0,a.Z)(),x=(0,i.kb)(),m=async()=>{try{await x.mutateAsync({gizmoId:t}),s()}catch{l.m.danger("Failed to delete gizmo. Please try again.")}};return(0,c.jsx)(r.Z,{isOpen:!0,onClose:d,type:"danger",title:(0,c.jsx)(o.Z,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:(0,c.jsx)(n.Z.Button,{title:u.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:x.isPending,onClick:()=>{m()}}),secondaryButton:(0,c.jsx)(n.Z.Button,{title:u.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:d}),children:(0,c.jsx)("div",{className:"text-sm",children:(0,c.jsx)(o.Z,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}},82655:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(4160),r=s(71522),i=s(12879),l=s(28626),a=s(66290),o=s(39385),c=s(4858),d=s(95033),u=s(651);function x(e){let{children:t,header:s}=e,x=(0,a.Z)();return(0,u.jsxs)(i.Z,{mobileHeaderRightContent:null,sidebar:(0,u.jsxs)(l.ZP,{navHeader:(0,u.jsx)(o.$,{className:"flex h-14 items-center",onNewThread:()=>x("/"),historyDisabled:!1}),children:[(0,u.jsx)(c.Y,{}),(0,u.jsx)(d.Dy,{}),(0,u.jsx)(n.Z,{activeId:void 0})]}),children:[s,(0,u.jsx)(r.ZP,{children:t})]})}},47424:function(e,t,s){"use strict";s.d(t,{a7:function(){return S},at:function(){return I},h9:function(){return _},r1:function(){return E}});var n,r,i=s(2346),l=s(98601);s(13350);var a=s(35132),o=s(98095),c=s(30853),d=s(77748),u=s(12128),x=s(25899),m=s(39004),f=s(99555),g=s(10080),h=s(45334),p=s(3551),j=s(42420),b=s(19841),v=s(88600),y=s(24098),w=s.n(y),N=s(34977),O=s(92379),Z=s(62984),k=s(68306),P=s(15478),C=s(83036),z=s(46702),M=s(651);function T(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}function D(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?T(Object(s),!0).forEach(function(t){(0,l.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function _(e){let{delay:t,animateTap:s=!0,children:n}=e;return(0,M.jsx)(v.E.div,{whileTap:{scale:s?.98:void 0},initial:{opacity:0,translateY:5},animate:{opacity:1,translateY:0,transition:{duration:.3,ease:"easeIn",delay:null!=t?t:0}},children:n})}let S=((n={}).Enabled="enabled",n.ComingSoon="coming-soon",n);function G(e){var t,s;let{gizmoResource:n}=e,r=null===(t=n.gizmo.vanity_metrics)||void 0===t?void 0:t.num_conversations_str,i=null!==(s=n.gizmo.share_recipient)&&void 0!==s?s:g.Zz.Private,l=(0,h.XA)(i);return(0,M.jsxs)("div",{children:[n.gizmo.share_recipient!==g.Zz.Private&&null!=r?(0,M.jsxs)("div",{className:"flex items-center gap-1",children:[(0,M.jsx)(d.qZr,{className:"icon-sm"}),(0,M.jsx)("span",{children:(0,M.jsx)(Z.Z,D(D({},L.conversationCountStrLabel),{},{values:{numConvos:r}}))})]}):void 0,(0,M.jsxs)("div",{className:"flex items-center gap-1",children:[i===g.Zz.Link||i===g.Zz.Marketplace?(0,M.jsx)(d.tEF,{className:"icon-sm shrink-0"}):i===g.Zz.Workspace?(0,M.jsx)(d.ZyV,{className:"icon-sm shrink-0"}):(0,M.jsx)(d.oVl,{className:"icon-sm shrink-0"}),(0,M.jsx)("span",{className:"line-clamp-1",children:l})]})]})}function E(e){var t,s,n;let{gizmoResource:r,canRemoveRecent:i}=e,l=(0,N.useRouter)(),a=(0,h.k1)(r),o=(0,m.Sg)(r),f=!!(null===(t=r.gizmo.tags)||void 0===t?void 0:t.includes(g.U9.FirstParty));return(0,M.jsx)(A,{href:o?(0,p.AA)(r.gizmo.id):(0,m.m_)(r),icon:(0,M.jsx)(u.Z,{isFirstParty:f,src:null!==(s=null==r?void 0:r.gizmo.display.profile_picture_url)&&void 0!==s?s:void 0,className:"h-[42px] w-[42px] flex-shrink-0"}),title:r.gizmo.display.name||x.zf,isDraft:o,description:null!==(n=r.gizmo.display.description)&&void 0!==n?n:"",byline:a?(0,M.jsx)(G,{gizmoResource:r}):(0,M.jsx)(C.Z,{gizmo:r}),buttons:(0,M.jsxs)(M.Fragment,{children:[a&&(0,M.jsx)(c.u,{label:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.EditGPT",defaultMessage:"Edit GPT"}),className:"flex justify-center",side:"top",children:(0,M.jsx)("button",{className:"rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{l.push((0,p.AA)(r.gizmo.id),void 0,{shallow:!0})},children:(0,M.jsx)(d.vdY,{className:"icon-sm"})})}),(0,M.jsx)(F,{gizmoResource:r,isOwner:a,canRemoveRecent:i})]})})}let R=P.Z.div(r||(r=(0,i.Z)(["flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed\n",""])),e=>{let{$disabled:t}=e;return t?"":"border-token-border-light bg-token-main-surface-secondary"});function I(e){let{type:t}=e,s=(0,p.J8)(),n=t===S.ComingSoon;return(0,M.jsxs)(c.E,{disabled:!n,label:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.CreateGPTComingSoon",defaultMessage:"GPT creation will be available in the coming weeks"}),children:[(0,M.jsx)(A,{href:s,disabled:n,icon:(0,M.jsx)(R,{$disabled:n,children:(0,M.jsx)(d.Vz5,{className:(0,b.default)("icon-sm",n&&"opacity-30")})}),title:(0,M.jsx)("div",{className:"flex items-center gap-1",children:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.CreateGPT",defaultMessage:"Create a GPT"})}),description:"Customize a version of ChatGPT for a specific purpose",byline:n?(0,M.jsx)("div",{className:"flex items-center justify-end",children:(0,M.jsx)("div",{className:"flex items-center",children:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.ComingSoon",defaultMessage:"Coming soon"})})}):void 0}),(0,M.jsx)("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})}function A(e){let{href:t,icon:s,title:n,isDraft:r=!1,description:i,byline:l,buttons:a,disabled:o,className:d}=e,u=(0,b.default)("flex items-center px-2 py-4 rounded-xl",o?"":"hover:bg-token-main-surface-secondary",d),x=(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:"flex grow items-center overflow-hidden md:w-3/5 md:grow-0",children:[s,(0,M.jsxs)("div",{className:(0,b.default)("grow overflow-hidden pl-4 pr-9 leading-tight",o?"opacity-50":"hover:cursor-pointer"),children:[(0,M.jsxs)("div",{className:"flex items-center gap-1",children:[(0,M.jsx)("span",{className:"font-semibold",children:n}),r&&(0,M.jsx)(c.u,{label:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.Draft",defaultMessage:"Draft"}),className:"flex justify-center",side:"top",children:(0,M.jsx)("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"})})]}),(0,M.jsx)("div",{className:"line-clamp-2 overflow-hidden text-ellipsis break-words text-sm",children:i}),null!=l&&(0,M.jsx)("div",{className:"text-ellipsis text-sm text-token-text-tertiary md:hidden",children:l})]})]}),null!=l&&(0,M.jsx)("div",{className:"hidden flex-1 text-ellipsis text-sm text-token-text-tertiary md:block",children:l}),null!=a&&(0,M.jsx)("div",{onClick:e=>{e.preventDefault()},onPointerDownCapture:e=>{e.stopPropagation()},className:"flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",children:a})]});return o?(0,M.jsx)(_,{children:(0,M.jsx)("span",{className:u,children:x})}):(0,M.jsx)(_,{children:(0,M.jsx)(w(),{className:u,href:t,shallow:!0,children:x})})}function F(e){let{gizmoResource:t,isOwner:s,canRemoveRecent:n}=e,{0:r,1:i}=(0,O.useState)(!1),{0:l,1:c}=(0,O.useState)(!1),u=(0,j.NL)();return s||n?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(o.d,{side:"top",contentAlign:"end",sideOffset:8,open:l,onOpenChange:e=>c(e),triggerButton:(0,M.jsx)("button",{color:"secondary",className:"rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{c(e=>!e)},children:(0,M.jsx)(d.nWS,{className:"icon-md"})}),children:[s&&(0,M.jsx)(o.Z.Item,{color:"danger",onClick:()=>{i(!0)},icon:d.XHJ,children:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.DeleteGPT",defaultMessage:"Delete GPT"})}),n&&(0,M.jsx)(o.Z.Item,{onClick:()=>{f.U.removeFromRecent(u,t.gizmo.id)},children:(0,M.jsx)(Z.Z,{id:"gizmo.gpt.grid.RemoveFromRecent",defaultMessage:"Remove from Recent"})})]}),r&&(0,M.jsx)(a.h,{children:(0,M.jsx)(z.b,{gizmoId:t.gizmo.id,onSuccess:()=>{i(!1)},onClose:()=>{i(!1)}})})]}):null}let L=(0,k.vU)({conversationCountStrLabel:{id:"gizmo.gpt.grid.conversationCountStrLabel",defaultMessage:"{numConvos} Chats"}})},40833:function(e,t,s){"use strict";s.d(t,{v:function(){return m}});var n=s(98601),r=s(10449),i=s(19841),l=s(92379),a=s(62984),o=s(68306),c=s(77748),d=s(651);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}function x(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach(function(t){(0,n.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function m(e){let{align:t,arrowPadding:s,alignOffset:n,show:o,onDismiss:u,children:m,title:g,side:h,sideOffset:p,theme:j="default",badge:b="new",description:v,dismissOnOutsideClick:y=!1}=e,w=(0,l.useRef)(null);return(0,d.jsxs)(r.fC,{open:o,onOpenChange:e=>{e||u()},children:[(0,d.jsx)(r.xz,{asChild:!0,onClick:()=>{u()},ref:w,children:m}),(0,d.jsx)(r.h_,{children:(0,d.jsxs)(r.VY,{arrowPadding:s,alignOffset:n,align:t,side:h,sideOffset:p,onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onInteractOutside:e=>{var t;e.target instanceof Element&&(null===(t=w.current)||void 0===t?void 0:t.contains(e.target))?e.preventDefault():y?u():e.preventDefault()},updatePositionStrategy:"always",className:(0,i.default)("relative z-10 animate-slideLeftAndFade select-none rounded-xl p-4 text-sm shadow-sm","default"===j?"bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-700":"bg-blue-400 text-white"),children:[(0,d.jsxs)("div",{className:"flex max-w-xs flex-col gap-1",children:[(0,d.jsxs)("div",{className:"mb-0.5 flex gap-2",children:["new"===b?(0,d.jsx)("span",{className:(0,i.default)("rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal","default"===j?"bg-green-500 text-white":"bg-white text-blue-selection"),children:(0,d.jsx)(a.Z,x({},f.new))}):"beta"===b&&(0,d.jsx)("span",{className:"rounded-full bg-blue-100 px-1.5 text-[10px] font-semibold text-blue-600",children:(0,d.jsx)(a.Z,x({},f.beta))}),(0,d.jsx)("div",{className:"grow font-semibold",children:g}),(0,d.jsx)(r.x8,{className:"-my-1 -mr-1 p-1 opacity-70 transition hover:opacity-100",children:(0,d.jsx)(c.tPq,{className:"icon-sm"})})]}),void 0!==v&&(0,d.jsx)("div",{className:"",children:v})]}),(0,d.jsx)(r.Eh,{asChild:!0,children:(0,d.jsx)("div",{className:(0,i.default)("relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm","default"===j?"bg-gray-900 dark:bg-gray-50":"bg-blue-400")})})]})})]})}let f=(0,o.vU)({new:{id:"announcementTooltip.new",defaultMessage:"New"},beta:{id:"announcementTooltip.beta",defaultMessage:"Beta"}})},15174:function(e,t,s){"use strict";var n=s(92379);t.Z=function(){let e=(0,n.useRef)(!1);return(0,n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,n.useCallback)(()=>e.current,[])}},63065:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gpts/mine",function(){return s(77346)}])}},function(e){e.O(0,[2205,4198,5158,4089,1133,3718,6481,3088,5696,1612,1438,9514,5162,6013,9113,9725,8442,7261,2989,2879,7631,9385,2888,9774,179],function(){return e(e.s=63065)}),_N_E=e.O()}]);
//# sourceMappingURL=mine-73dc5be2af153113.js.map