"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2472],{94086:function(e,t,r){r.d(t,{$:function(){return b},m:function(){return x}});var n=r(91092),s=r(54945),a=r(79014),i=r(94326),l=r(33168),o=r(19841),c=r(88041),u=r(44194),d=r(98199),f=r(21292),m=r(29757),p=r(79198),h=r(37508),g=r(82824),y=r(74079),v=r(651);function x(e){let{clientThreadId:t,isInPopover:r=!1}=e,a=(0,s.XK)(t),l=(0,n.t)(),{isUserUnauthenticated:o}=(0,i.EH)(),c=(0,s.eV)(t),f=(0,s.Ao)(t),m=(0,u.V_)(),y=(0,p.Qr)();return(0,v.jsxs)(v.Fragment,{children:[null!=l&&l.canInteractWithGizmos()?(0,v.jsx)(h.Dy,{currentGizmoId:c}):(0,v.jsxs)(v.Fragment,{children:[y?null:(0,v.jsx)(h.Vq,{isActive:void 0===c,isNewConversation:f}),(0,v.jsx)(g.Z,{})]}),!o&&(0,v.jsx)(d.Z,{activeId:m?void 0:a,isInPopover:r})]})}function b(e){let{className:t,onNewThread:r,historyDisabled:n}=e,s=(0,c.Z)(),i=(0,l.w$)();return(0,v.jsxs)("div",{className:(0,o.default)("flex justify-between",t),children:[(0,v.jsx)(f.u,{sideOffset:4,label:s.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),children:(0,v.jsx)(y.W,{onClick:()=>{i?a.vm.toggleDesktopNavCollapsed():a.vm.toggleActiveSidebar("mobile-nav")},icon:i?m.BSo:m.Oqj,surfaceContext:"secondary"})}),(0,v.jsx)(f.u,{sideOffset:4,label:s.formatMessage({id:"OFyxqj",defaultMessage:"New chat"}),children:(0,v.jsx)(y.W,{onClick:()=>{i||a.vm.toggleActiveSidebar("mobile-nav"),r()},icon:n?m.Ezi:m.bl$,surfaceContext:"secondary"})})]})}},54289:function(e,t,r){r.d(t,{C:function(){return u}});var n=r(24312),s=r(91530),a=r.n(s),i=r(68810);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c={showReferralInviteModal:!1},u=(0,i.Ue)()(e=>o(o({},c),{},{setShowReferralInviteModal:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();e({showReferralInviteModal:t}),null==r||r()}}))},5994:function(e,t,r){r.d(t,{ZP:function(){return em}});var n,s,a=r(81669),i=r(24312),l=r(77134),o=r(91092),c=r(79014),u=r(94326),d=r(31399),f=r(33168),m=r(50045),p=r(16602),h=r(23890),g=r(45232),y=r(19841),v=r(92379),x=r(91028),b=r(88041),j=r(84551),w=r(94695),O=r(74091),P=r(73581),M=r(44194);r(21292);var C=r(29757),k=r(79198),N=r(37508),S=r(63299),_=r(58635),T=r(97021),Z=r(87357),I=r(8025),F=r(34442),D=r(66187),E=r(68810);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let L={showFreeTrialLoadingPayment:!1,showConfirmDismissFreeTrial:!1,didCloseFreeTrial:!1},H=(0,E.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e})({},L));function R(e){H.setState({showFreeTrialLoadingPayment:e})}var W=r(43446),U=r(58164),q=r(14816),z=r(651);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function V(e){let{showFreeTrialLoadingPayment:t,handleGetPaymentLink:r}=e,n=(0,b.Z)(),{data:s,isLoading:a,isSuccess:i}=(0,q.a)({queryKey:["claimedReferralInvite"],queryFn:()=>T.Z.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),l=null==s?void 0:s.invite_code,{0:o,1:c}=(0,v.useState)(!1);if((0,v.useEffect)(()=>{l&&!o&&i&&(c(!0),g.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),p.A.logEvent(I.M.chatgptReferralShowClaimedSidebartMenuPromo))},[l,c,o,i]),!l||a||!i)return null;let u=l.invite_metadata.invite_data,d=null!=u&&u.referral_trial_duration_months?(null==u?void 0:u.referral_trial_duration_months)>1?n.formatMessage(K.monthsOfBenefit,{referralTrialDurationMonths:null==u?void 0:u.referral_trial_duration_months}):n.formatMessage(K.daysOfBenefit,{referralTrialDurationDays:null==u?void 0:u.referral_trial_duration_days}):null;return(0,z.jsx)(U.E.div,{className:(0,y.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,z.jsxs)($,{className:(0,y.default)(t&&"opacity-75"),onClick:()=>{t||(R(!0),r())},children:[(0,z.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,z.jsx)(x.E33,{className:"icon-sm shrink-0"}),(0,z.jsx)(j.Z,G(G({},K.freeTrialCta),{},{values:{duration:d}}))]}),!t&&(0,z.jsx)(C.tPq,{onClick:e=>{e.stopPropagation(),H.setState({showConfirmDismissFreeTrial:!0}),H.setState({didCloseFreeTrial:!0})},className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),(0,z.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}let $=O.Z.a(n||(n=(0,a.Z)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]))),K=(0,w.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}});var Q=r(26382),X=r(54289);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ee(){var e,t,r,n,s,a,i;let l=(0,F.useRouter)(),c=(0,b.Z)(),u=(0,o.hz)(),d=(0,o.t)(),f=!d,m=null!==(e=null==d?void 0:d.hasPaidSubscription())&&void 0!==e&&e,h=null!==(t=null==d?void 0:d.hasClaimedFreeTrial())&&void 0!==t&&t,y=(0,v.useMemo)(()=>null==d?void 0:d.subscriptionAnalyticsParams,[d]),x=async()=>{R(!0),p.A.logEvent(I.M.clickAccountPaymentCheckout,y);try{let e=await T.Z.getCheckoutLink(u);l.push(e.url)}catch(e){W.m.warning(c.formatMessage(es.paymentErrorWarning),{hasCloseButton:!0}),R(!1)}finally{}},j=H(e=>e.didCloseFreeTrial),w=H(e=>e.showFreeTrialLoadingPayment),O=!j&&h,P=null!==(r=null==d?void 0:d.wasPaidCustomer())&&void 0!==r&&r,M=null!==(n=null==d?void 0:d.isWorkspaceAccount())&&void 0!==n&&n,C=null!==(s=null==d?void 0:d.isPlus())&&void 0!==s&&s,k=!f&&!M&&(!1===C||null!==(a=null==u?void 0:u.includes(Z.L0.Teams))&&void 0!==a&&a),{setShowReferralInviteModal:N}=(0,X.C)(e=>({setShowReferralInviteModal:e.setShowReferralInviteModal})),S=(0,v.useCallback)(()=>{g.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),p.A.logEvent(I.M.chatgptReferralInviteSidebarClicked,y),N(!0,()=>{p.A.logEvent(I.M.clickSidebarAccountPaymentMenuItem,y)})},[y,N]),_=null!==(i=null==d?void 0:d.isTeam())&&void 0!==i&&i;return(0,z.jsxs)(z.Fragment,{children:[((null==u?void 0:u.includes(Z.a3))||m)&&(0,z.jsx)(en,{analyticsParams:y,handleReferralInvite:S}),!m&&O&&(0,z.jsx)(V,{showFreeTrialLoadingPayment:w,handleGetPaymentLink:x}),_&&(0,z.jsx)(er,{}),k&&(0,z.jsx)(Q.Vq,{onClick:O?()=>{w||(R(!0),x())}:()=>{p.A.logEvent(I.M.clickSidebarAccountPaymentMenuItem,y);let e=l.asPath.split("#");l.push("".concat(e[0],"#pricing"))},className:"m-0 rounded-lg px-2",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsx)("div",{className:"flex items-center gap-2",children:(0,z.jsx)(et,{wasPaidCustomer:P,showFreeTrialLoadingPayment:w,hasPlusSubscription:C})})})})]})}let et=e=>{let{wasPaidCustomer:t,showFreeTrialLoadingPayment:r,hasPlusSubscription:n}=e;return r?(0,z.jsx)(D.Z,{className:"icon-sm shrink-0"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(C.X72,{className:"icon-sm shrink-0"})}),(0,z.jsx)("div",{className:"flex flex-col",children:t?(0,z.jsx)(j.Z,J({},es.renewPlus)):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{children:n?(0,z.jsx)(j.Z,J({},es.createATeamWorkspace)):(0,z.jsx)(j.Z,J({},es.upgradePlan))}),(0,z.jsx)("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:n?(0,z.jsx)(j.Z,J({},es.upgradeToTeamUpsell)):(0,z.jsx)(j.Z,J({},es.upgradeToPlusUpsell))})]})})]})},er=()=>{let e=(0,o.t)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Q.Vq,{onClick:()=>{c.vm.openModal(c.B.InviteUsersToWorkspace)},className:"rounded-lg",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsxs)("span",{className:"flex items-center gap-2",children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(C.pF9,{className:"icon-sm shrink-0"})}),(0,z.jsx)(j.Z,J({},es.inviteMembers))]})})}),null!=e?(0,z.jsx)(_.Z,{workspace:e}):null]})},en=e=>{var t;let{analyticsParams:r,handleReferralInvite:n}=e,s=(0,o.hz)(),a=null!==(t=null==s?void 0:s.includes(Z.a3))&&void 0!==t&&t,i=(0,o.t)(),{data:l}=(0,q.a)({queryKey:["referralInvites"],queryFn:()=>T.Z.getEligibleReferralInvites(),enabled:a}),c=i&&!i.isOrWasPaidCustomer()&&!i.hasPlusFeatures(),u=(null==l?void 0:l.invites_remaining)&&(null==l?void 0:l.invites_remaining)>0,d=c&&u,{0:f,1:m}=(0,v.useState)(!1);return((0,v.useEffect)(()=>{d&&!f&&(m(!0),g.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),p.A.logEvent(I.M.chatgptReferralShowSidebarMenuItem,r))},[d,m,f,r]),d)?(0,z.jsx)(Q.Vq,{onClick:n,className:"rounded-lg",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsxs)("span",{className:"flex items-center gap-2",children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(C.pF9,{className:"icon-sm shrink-0"})}),(0,z.jsx)(j.Z,J({},es.inviteReferral))]})})}):null},es=(0,w.vU)({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"Get GPT-4, DALL\xb7E, and more"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});var ea=r(49163),ei=r(96053),el=r(13355);let eo=()=>(0,q.a)({queryKey:["userSurvey"],queryFn:async()=>T.Z.getActiveUserSurvey()}),ec=()=>(0,ei.D)({mutationFn:async e=>{let{surveyId:t,reason:r}=e;return T.Z.completeUserSurvey(t,r)},onSuccess:async()=>{el.E.invalidateQueries({queryKey:["userSurvey"]})}});function eu(){var e;let t=(0,b.Z)(),r=(0,f.w$)(),{0:n,1:s}=(0,v.useState)(!1),a=null===(e=eo().data)||void 0===e?void 0:e.survey,i=ec(),l=e=>{s(!0),null!=a&&i.mutate({surveyId:a.id,reason:e})};return n||null==a?null:(0,z.jsx)("div",{className:"mx-1 mb-1 rounded-sm bg-brand-blue-800",children:(0,z.jsxs)("div",{className:"flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",children:[(0,z.jsxs)("div",{className:"flex w-full items-start",children:[(0,z.jsxs)("div",{className:"flex flex-grow flex-col gap-1",children:[(0,z.jsx)("div",{className:"font-bold",children:(0,z.jsx)(j.Z,{id:"navigation.survey.title",defaultMessage:"We are asking a small group of people for their opinion"})}),(0,z.jsx)("div",{children:(0,z.jsx)(j.Z,{id:"navigation.survey.description",defaultMessage:"Could you spare few minutes to take a short survey?"})})]}),(0,z.jsx)("button",{className:"text-white/25 hover:text-white/40",onClick:()=>l("dismissed"),"aria-label":t.formatMessage({id:"navigation.survey.dismiss",defaultMessage:"Dismiss survey"}),children:(0,z.jsx)(C.tPq,{width:r?"20px":"24px",height:r?"20px":"24px"})})]}),(0,z.jsxs)("a",{href:a.link,target:"_blank",className:"flex w-full flex-row items-center justify-center gap-2 rounded bg-white/25 p-2 hover:bg-white/40",rel:"noreferrer",onClick:()=>l("link_clicked"),children:[(0,z.jsx)(C.Pfi,{className:"icon-sm"}),(0,z.jsx)(j.Z,{id:"navigation.survey.takeSurvey",defaultMessage:"Take survey"})]})]})})}function ed(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ef(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ed(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ed(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function em(e){let{onNewThread:t,currentGizmoId:r,navHeader:n,children:s,className:a}=e,i=(0,b.Z)(),l=(0,o.t)(),c=null==l?void 0:l.isWorkspaceAccount(),f=(0,v.useRef)(null),p=(0,M.V_)(),{openSettings:h}=(0,S.Fr)(),{isUserUnauthenticated:g}=(0,u.EH)();(0,v.useEffect)(()=>{M._P.getModifiedSettings()&&h()},[]);let w=(0,d.cQ)(),O=(0,v.useCallback)(()=>{t(),M._P.enableHistory({useLocalStorage:!w})},[t,w]),C=(0,z.jsxs)("div",{className:(0,y.default)("absolute left-0 top-0 z-20 w-full overflow-hidden transition-all duration-500",p?"visible max-h-72":"invisible max-h-0"),children:[(0,z.jsx)("div",{className:"px-3 py-3.5",children:(0,z.jsx)(N.jl,{gizmo:void 0,historyDisabled:!0,isActive:void 0===r})}),(0,z.jsxs)("div",{className:"bg-gray-900 px-4 py-3",children:[(0,z.jsx)("div",{className:"p-1 text-sm text-gray-100",children:(0,z.jsx)(j.Z,ef({},ey.chatHistoryOff))}),(0,z.jsx)("div",{className:"p-1 text-xs text-token-text-tertiary",children:(0,z.jsx)(j.Z,ef(ef({},c?ey.chatHistoryOffDescriptionBusiness:ey.chatHistoryOffDescription),{},{values:{learnMore:(0,z.jsx)("a",{href:"https://help.openai.com/en/articles/7730893",target:"_blank",className:"underline",rel:"noreferrer",children:(0,z.jsx)(j.Z,ef({},ey.learnMore))}),b:e=>(0,z.jsx)("strong",{children:e})}}))}),(0,z.jsxs)(P.z,{className:"mt-4 w-full",onClick:O,color:"primary",size:"medium",children:[(0,z.jsx)(x.$IY,{className:"icon-sm"}),(0,z.jsx)(j.Z,ef({},ey.enableChatHistory))]})]}),(0,z.jsx)("div",{className:"h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"})]});return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("div",{className:"relative h-full w-full flex-1 items-start border-white/20",children:[(0,z.jsx)(m.f,{asChild:!0,children:(0,z.jsx)("h2",{children:(0,z.jsx)(j.Z,ef({},ey.chatHistoryLabel))})}),(0,z.jsxs)("nav",{className:(0,y.default)("flex h-full w-full flex-col px-3 pb-3.5 juice:pb-0",a),"aria-label":i.formatMessage(ey.chatHistoryLabel),children:[n,l&&!w&&!g&&C,(0,z.jsx)(eg,{ref:f,$disableScroll:p&&!w&&!g,children:s}),(0,z.jsx)(ep,{})]})]})})}function ep(){let{0:e}=(0,v.useState)(()=>{let e=h.bX.getCookie(h.cn.Workspace);return"string"==typeof e&&e!==l.b}),t=(0,o.t)(),r=(null==t?void 0:t.data)==null,{openSettings:n}=(0,S.Fr)(),{isUserUnauthenticated:s}=(0,u.EH)(),a=(0,k.Qr)(),i=(0,f.w$)();return e&&r||!t?null:s?(0,z.jsx)(eh,{}):(0,z.jsxs)("div",{className:"flex flex-col pt-2 empty:hidden juice:py-2 dark:border-white/20",children:[(0,z.jsx)(eu,{}),(0,z.jsx)(ee,{}),(i||!a)&&a?null:(0,z.jsx)("div",{className:"flex w-full items-center",children:(0,z.jsx)("div",{className:"max-w-[100%] grow",children:(0,z.jsx)(ea.W,{onClickSettings:()=>n()})})})]})}let eh=()=>{let{navigateToAuth:e}=(0,u.EH)();return(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{className:"mb-4 mt-2",children:[(0,z.jsx)("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:(0,z.jsx)(j.Z,ef({},ey.signUpOrLogIn))}),(0,z.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,z.jsx)(j.Z,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),(0,z.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,z.jsx)(P.z,{as:"button",size:"medium",color:"primary",onClick:()=>{let t=e({authType:"signup"});p.A.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:t}),g.m9.logEvent("chatgpt_sidebar_signup_button_clicked")},children:(0,z.jsx)(j.Z,ef({},ey.unauthSignupCta))}),(0,z.jsx)(P.z,{as:"button",size:"medium",color:"secondary","data-testid":"login-button",onClick:()=>{let t=e({authType:"login"});p.A.logLogInButtonClicked({location:"Sidebar bottom unit",provider:t}),g.m9.logEvent("chatgpt_sidebar_login_button_clicked")},children:(0,z.jsx)(j.Z,ef({},ey.unauthLoginCta))})]})]})},eg=O.Z.div(s||(s=(0,a.Z)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""])),e=>{let{$disableScroll:t}=e;return t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),ey=(0,w.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},chatHistoryOff:{id:"NavigationContent.chatHistoryOff",defaultMessage:"Chat History is off for this browser."},chatHistoryOffDescription:{id:"NavigationContent.chatHistoryOffDescription",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},chatHistoryOffDescriptionBusiness:{id:"NavigationContent.chatHistoryOffDescriptionBusiness",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},learnMore:{id:"NavigationContent.learnMore",defaultMessage:"Learn more"},enableChatHistory:{id:"NavigationContent.enableChatHistory",defaultMessage:"Enable chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}})}}]);
//# sourceMappingURL=2472-37509633406a61f4.js.map