(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2223],{56650:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return C},default:function(){return E}});var n=o(24312),s=o(73581),l=o(61082),r=o(94326),c=o(33168),a=o(16602),i=o(8025),u=o(45232),d=o(61888),g=o(92379),p=o(72256),m=o(25940),f=o(651);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach(function(t){(0,n.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}let O=e=>{let{onClose:t}=e,{navigateToAuth:o}=(0,r.EH)(),n=(0,c.oc)();return(0,g.useEffect)(()=>{a.A.logEvent(i.M.noAuthWelcomeBackModalShown),u.m9.logEvent("chatgpt_no_auth_welcome_back_modal_shown")},[]),(0,f.jsx)(l.Z,{isOpen:!0,onClose:d.noop,shouldIgnoreClickOutside:!0,showCloseButton:!1,type:"success",noPadding:!0,size:"custom",className:"max-w-[373px] sm:max-w-[400px]",position:n?"center":"bottom",children:(0,f.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-8 sm:p-10",children:[(0,f.jsx)("p",{className:"mb-1 text-center text-2xl font-semibold",children:(0,f.jsx)(p.Z,h({},_.title))}),(0,f.jsx)("p",{className:"mb-6 text-center text-lg text-token-text-secondary",children:(0,f.jsx)(p.Z,h({},_.subtitle))}),(0,f.jsx)(s.z,{as:"button",size:"large",color:"primary",fullWidth:!0,className:"mb-2 w-full sm:mb-3","data-testid":"welcome-login-button",onClick:()=>{let e=o({authType:"login"});a.A.logLogInButtonClicked({provider:e,location:"No Auth Welcome Back Modal"})},children:(0,f.jsx)(p.Z,h({},_.logInCta))}),(0,f.jsx)(s.z,{as:"button",size:"large",color:"secondary",fullWidth:!0,className:"mb-5",onClick:()=>{let e=o({authType:"signup"});a.A.logSignUpButtonClicked({provider:e,location:"No Auth Welcome Back Modal"})},children:(0,f.jsx)(p.Z,h({},_.signUpCta))}),(0,f.jsx)("a",{href:"#",className:"cursor-pointer font-semibold text-token-text-secondary underline sm:text-sm",onClick:e=>{e.preventDefault(),a.A.logEvent(i.M.noAuthWelcomeBackModalStayLoggedOutLinkClicked),u.m9.logEvent("chatgpt_no_auth_welcome_back_modal_stay_logged_out_link_clicked"),t()},"data-testid":"dismiss-welcome",children:(0,f.jsx)(p.Z,h({},_.stayLoggedOutLink))})]})})},_=(0,m.vU)({title:{id:"NoAuthWelcomeBackModal.title",defaultMessage:"Welcome back"},subtitle:{id:"7WQi5y",defaultMessage:"Log in or sign up to get smarter responses, upload files and images, and more."},signUpCta:{id:"NoAuthWelcomeBackModal.signUpCta",defaultMessage:"Sign up"},logInCta:{id:"NoAuthWelcomeBackModal.logInCta",defaultMessage:"Log in"},stayLoggedOutLink:{id:"NoAuthWelcomeBackModal.stayLoggedOut",defaultMessage:"Stay logged out"}});var y=o(31970),j=o(14953);let k="has-dismissed-welcome-back-modal",w=()=>{let{0:e,1:t}=(0,g.useState)(!0),{layer:o}=(0,j.AH)("chatgpt_anon_chat_layer"),n=o.get("is_no_auth_welcome_back_modal_enabled",!1),{isUserUnauthenticated:s,isLoading:l}=(0,r.EH)(),c=(0,y.W)();return(0,g.useEffect)(()=>{t(null!=sessionStorage.getItem(k))},[]),{isOpen:!l&&s&&n&&!e&&c,close:()=>{t(!0),sessionStorage.setItem(k,"true")}}};var x=o(34442),P=o(59354);function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function N(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach(function(t){(0,n.Z)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var C=!0;function E(e){let t=(0,x.useRouter)(),o=(0,P.wS)(t.asPath),n=(0,P.p9)(o),{isOpen:s,close:l}=w();return((0,g.useEffect)(()=>{n&&t.replace("/",void 0,{shallow:!0})},[n,t]),n)?null:(0,f.jsxs)(f.Fragment,{children:[s?(0,f.jsx)(O,{onClose:l}):null,(0,f.jsx)(P.ZP,N(N({},e),{},{urlThreadId:o}))]})}},93644:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...default]]",function(){return o(56650)}])}},function(e){e.O(0,[6617,3656,4736,3400,5459,4103,7380,5474,1952,5553,4237,2888,9774,179],function(){return e(e.s=93644)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...default]]-8e78bb94053cb263.js.map