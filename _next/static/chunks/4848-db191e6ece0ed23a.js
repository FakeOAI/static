"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4848],{54848:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(72438),i=r(46),a=r(32148),s=r(19841),l=r(83737),o=r(70079),c=r(84692),d=r(68498),u=r(81147),f=r(83924),b=r(41198),x=r(49641),m=r(51264),h=r(35250);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function j(e){let{isDesktopNavCollapsed:t}=e;return(0,h.jsx)(l.E.div,{initial:!1,transition:{duration:.165},animate:{x:t?"0":"260px"},style:{rotate:t?180:0,y:"-50%"},className:(0,s.default)("fixed left-0 top-1/2 z-40"),children:(0,h.jsx)("button",{onClick:u.vm.toggleDesktopNavCollapsed,children:(0,h.jsxs)(i.u,{side:"right",label:t?(0,h.jsx)(c.Z,v({},y.openSidebar)):(0,h.jsx)(c.Z,v({},y.closeSidebar)),sideOffset:4,children:[(0,h.jsx)(l.E.div,{className:"flex h-[72px] w-8 items-center justify-center",variants:{rest:{},hover:{}},initial:!1,whileHover:["hover","arrow"],animate:["rest",t?"arrow":"line"],children:(0,h.jsxs)(l.E.div,{className:"flex h-6 w-6 flex-col items-center",children:[(0,h.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:".15rem"},arrow:{rotate:"15deg",y:".15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}}),(0,h.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:"-.15rem"},arrow:{rotate:"-15deg",y:"-.15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}})]})}),(0,h.jsx)(a.T,{children:t?(0,h.jsx)(c.Z,v({},y.openSidebar)):(0,h.jsx)(c.Z,v({},y.closeSidebar))})]})})})}function g(e){let{children:t,hideNavigation:r=!1,mobileHeaderContent:n,mobileHeaderRightContent:i,mobileHeaderBottomContent:a,sidebar:l}=e,c=(0,f.w$)(),d=(0,u.xH)(),p=[],v=null;o.Children.forEach(t,e=>{o.isValidElement(e)&&(e.type===g.Sidebars?v=e:p.push(e))});let y=(0,b.Q)(),w=c&&!r&&null!=l;return(0,h.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[w?(0,h.jsx)(x.Z,{children:(0,h.jsx)(m.l6,{children:(0,h.jsx)("div",{className:(0,s.default)("flex h-full min-h-0 flex-col"),children:l})})}):null,(0,h.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!c&&!r&&(0,h.jsx)(x.Z,{children:(0,h.jsx)(m.Vs,{onClickOpenSidebar:()=>u.vm.toggleActiveSidebar("mobile-nav"),sidebar:l,rightContent:i,bottomContent:a,children:n})}),(0,h.jsxs)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:[(0,h.jsx)(x.Z,{children:w&&!y&&(0,h.jsx)(j,{isDesktopNavCollapsed:d})}),p]})]}),v]})}g.Sidebars=function(e){let{children:t}=e;return(0,h.jsx)(h.Fragment,{children:t})};let y=(0,d.vU)({closeSidebar:{id:"Stage.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"Stage.openSidebar",defaultMessage:"Open sidebar"}})},51264:function(e,t,r){r.d(t,{MP:function(){return O},Nz:function(){return S},Vs:function(){return E},l6:function(){return F}});var n=r(72438),i=r(57798),a=r(63081),s=r(86218),l=r(11397),o=r(8880),c=r(15886),d=r(95981),u=r(53265),f=r(19841),b=r(83737),x=r(16215),m=r(70079),h=r(84692),p=r(68498),v=r(81147);r(83924),r(46);var j=r(9982),g=r(35250);let y=["onClick","className"],w=["onClick"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function O(e){let{onClick:t,className:r}=e,n=(0,i.Z)(e,y);return(0,g.jsx)(j.zV,N({onClick:t,className:(0,f.default)(r,"flex-grow overflow-hidden")},n))}function S(e){let{historyDisabled:t,onNewChatButtonClick:r}=e,{isUserUnauthenticated:n,isLoading:i}=(0,o.EH)();return i?null:n?(0,g.jsx)(Z,{className:"mr-3"}):(0,g.jsx)(C,{onClick:()=>{u.A.logNewChatButtonClicked({location:"Mobile header"}),r()},children:t?(0,g.jsx)(l.vX,{}):(0,g.jsx)(s.bl$,{})})}function C(e){let{onClick:t}=e,r=(0,i.Z)(e,w);return(0,g.jsx)("button",N({type:"button",className:"px-3",onClick:t},r))}function Z(e){let{className:t}=e,{navigateToAuth:r}=(0,o.EH)();return(0,g.jsx)(a.z,{as:"button",size:"small",color:"primary",className:t,onClick:()=>{let e=r({authType:"signup"});u.A.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:e})},children:(0,g.jsx)(h.Z,N({},T.signUpButtonText))})}let P=e=>{let{onClose:t,sidebarOpen:r,children:n}=e;return(0,g.jsx)(c.u.Root,{show:r,as:m.Fragment,children:(0,g.jsxs)(d.V,{as:"div",className:"relative",onClose:t,children:[(0,g.jsx)(c.u.Child,{as:m.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,g.jsx)("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/25"})}),(0,g.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,g.jsx)(c.u.Child,{as:m.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,g.jsxs)(d.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-token-sidebar-surface-primary",children:[(0,g.jsx)(c.u.Child,{as:m.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,g.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-3.5",children:(0,g.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t,children:[(0,g.jsx)("span",{className:"sr-only",children:(0,g.jsx)(h.Z,N({},T.closeSidebar))}),(0,g.jsx)(l.v7,{className:"icon-md"})]})})}),n]})}),(0,g.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},E=e=>{let{onClickOpenSidebar:t,children:r,sidebar:n,rightContent:i,bottomContent:a}=e,s=(0,v.tN)(e=>e.activeSidebar),o=(0,x.useRouter)().asPath;return(0,m.useEffect)(()=>{"mobile-nav"===s&&v.vm.setActiveSidebar(!1)},[o]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-main-surface-primary pl-1 md:hidden",children:[(0,g.jsxs)("button",{type:"button",className:"absolute bottom-0 left-0 top-0 inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,children:[(0,g.jsx)("span",{className:"sr-only",children:(0,g.jsx)(h.Z,N({},T.openSidebar))}),(0,g.jsx)(l.$0,{})]}),r,null!=i&&(0,g.jsx)("div",{className:"absolute bottom-0 right-0 top-0 flex items-center",children:i})]}),a&&(0,g.jsx)("div",{className:"flex w-full items-center justify-center bg-token-main-surface-primary",children:a}),(0,g.jsx)(P,{onClose:()=>{v.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===s,children:n})]})};function F(e){let{children:t}=e,r=(0,m.useRef)(null),n=(0,v.xH)();return(0,g.jsx)(b.E.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary",ref:r,initial:!1,animate:{width:n?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:()=>{r.current&&(r.current.style.visibility="visible")},onAnimationComplete:()=>{r.current&&n&&(r.current.style.visibility="hidden")},children:(0,g.jsx)("div",{className:"h-full w-[260px]",children:(0,g.jsx)("div",{className:"flex h-full min-h-0 flex-col",children:t})})})}let T=(0,p.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}})},9982:function(e,t,r){r.d(t,{IS:function(){return h},R:function(){return j},Vq:function(){return g},ZB:function(){return p},ZP:function(){return m},zV:function(){return v}});var n,i,a,s,l,o=r(25927),c=r(38135),d=r(19841),u=r(78374),f=r.n(u),b=r(21389),x=r(35250);function m(e){let{onClick:t,href:r,target:n,children:i,disabled:a,icon:s}=e;return(0,x.jsx)(c.v.Item,{disabled:a,children:e=>{let{active:l}=e;return(0,x.jsxs)(p,{as:void 0!==r?"a":"button",onClick:t,href:r,target:n,className:(0,d.default)({"bg-token-sidebar-surface-secondary":l,"hover:bg-token-sidebar-surface-secondary":!l&&!a}),children:[s&&(0,x.jsx)(s,{className:"icon-md"}),i]})}})}function h(e){let{href:t,children:r,icon:n}=e;return(0,x.jsx)(c.v.Item,{children:e=>{let{active:i}=e;return(0,x.jsx)(f(),{href:t,children:(0,x.jsxs)(p,{$as:"span",className:(0,d.default)(i?"bg-token-sidebar-surface-secondary":"cursor-pointer"),children:[n&&(0,x.jsx)(n,{className:"icon-md"}),r]})})}})}b.Z.a(n||(n=(0,o.Z)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"])));let p=b.Z.a(i||(i=(0,o.Z)(["flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center"]))),v=(0,b.Z)(p)(a||(a=(0,o.Z)(["border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]"]))),j=b.Z.div(s||(s=(0,o.Z)(["h-px bg-token-border-light my-1.5"]))),g=(0,b.Z)(p)(l||(l=(0,o.Z)(["",""])),e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary")}}]);
//# sourceMappingURL=4848-db191e6ece0ed23a.js.map