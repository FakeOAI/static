(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8615],{10233:function(e,t,n){"use strict";n.r(t),n.d(t,{PAYMENTS_SUCCESS_URL:function(){return p},__N_SSP:function(){return d},default:function(){return m}});var s=n(95312),a=n(8708),i=n(10792),r=n(16602),c=n(8025),l=n(45232),o=n(92379),u=n(651),d=!0;let p="/payments/success";function m(){let e=(0,i.J)();return(0,o.useEffect)(()=>{e&&(l.m9.logEvent("chatgpt_team_payment_success"),r.A.logEvent(c.M.chatgptSubscriptionPaymentSuccessPage,{plan_type:s.D8.TEAM}))},[e]),(0,u.jsx)(a.W,{isTrial:!1,isTeam:!0})}},8708:function(e,t,n){"use strict";n.d(t,{W:function(){return K}});var s,a,i,r=n(24312),c=n(73581),l=n(81669),o=n(74091),u=n(52337),d=n(651);function p(e){let{children:t}=e;return(0,d.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,d.jsx)("div",{className:"m-4 flex gap-3",children:(0,d.jsx)(u.nI,{className:"icon-xl"})}),(0,d.jsx)("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}let m=o.Z.h2(a||(a=(0,l.Z)(["mb-2 text-2xl font-semibold"]))),f=o.Z.p(i||(i=(0,l.Z)(["mb-10 text-sm"])));var h=n(16602),j=n(8025),x=n(28181),g=n.n(x),v=n(34442),y=n(92379),b=n(26123),T=n(72256),O=n(25940),S=n(7290),P=n(58164),w=n(37782);let C={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},k={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function M(e){let{isTrial:t}=e;return(0,d.jsx)("div",{className:"mb-6 flex items-center justify-center gap-2",children:(0,d.jsx)(S.M,{children:(0,d.jsx)(P.E.div,{variants:C,initial:"hidden",animate:"show",className:"flex",children:(0,d.jsx)(P.E.div,{variants:k,children:t?(0,d.jsx)(w.FwT,{className:"h-8"}):(0,d.jsx)(w.o3E,{className:"h-8"})})})})})}var N=n(95312),E=n(95459),_=n(91092),Z=n(74199),D=n(46974);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A=((s=A||{}).Landing="landing",s.Setup="setup",s.Invite="invite",s.Complete="complete",s);let W=[A.Landing,A.Invite,A.Complete],R={enter:e=>({translateX:e>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:e=>({translateX:e<=0?"-50%":"50%",opacity:0})};function z(){let e=(0,v.useRouter)(),{currentPath:t,currentStep:n}=function(){let e=(0,v.useRouter)().asPath.split("#"),t=e[1];return{currentStep:B(t)?t:A.Landing,currentPath:e[0]}}(),{0:s,1:a}=(0,y.useState)(n),i=(0,_.t)(),r=(0,Z.ec)(Z.F_.workspaces).find(e=>e.structure===N.CZ.WORKSPACE&&!e.deactivated),c=()=>{let s=W.indexOf(n),a=s+1;r||e.push("/"),-1!==s&&a<W.length&&e.push(t+"#"+W[a])};(0,y.useEffect)(()=>{let t=()=>{a(n)};return e.events.on("hashChangeStart",t),()=>{e.events.off("hashChangeStart",t)}},[n,e.events]);let l=W.indexOf(n)<=W.indexOf(s)?-1:1;return(0,d.jsx)("div",{className:"max-w-sm pb-6",children:(0,d.jsxs)(S.M,{mode:"wait",children:[n===A.Landing&&(0,d.jsx)(F,{initial:!1,custom:l,children:(0,d.jsx)(I,{onNext:c,isLoading:null==i})},"landing"),n===A.Invite&&(0,d.jsx)(F,{custom:l,children:(0,d.jsx)(L,{onNext:()=>{c()}})},"invite"),n===A.Complete&&(0,d.jsx)(F,{custom:l,children:(0,d.jsx)(X,{onNext:()=>{c(),r&&(0,_.nq)(r.id),e.push("/")}})},"complete")]})})}let F=e=>(0,d.jsx)(P.E.div,Y({initial:"enter",animate:"center",exit:"exit",variants:R,transition:{translateX:{type:"just"},opacity:{duration:.2}}},e));function I(e){let{onNext:t,isLoading:n=!1}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(M,{isTrial:!1}),(0,d.jsx)(m,{children:(0,d.jsx)(T.Z,Y({},G.standard))}),(0,d.jsx)(f,{children:(0,d.jsx)(T.Z,Y({},G.description))}),(0,d.jsx)(c.z,{onClick:t,size:"large",loading:n,fullWidth:!0,children:(0,d.jsx)(T.Z,Y({},G.continue))})]})}function L(e){let{onNext:t}=e,n=(0,_.t)(),s=(0,b.Z)();return null==n?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{children:(0,d.jsx)(T.Z,Y(Y({},G.inviteTitle),{},{values:{workspaceName:n.data.name}}))}),(0,d.jsx)(f,{children:(0,d.jsx)(T.Z,Y({},G.completeDescription))}),null!=n&&(0,d.jsx)("div",{className:"text-sm",children:(0,d.jsx)(E.Z,{fullWidthButtons:!0,workspace:n,canResendInviteEmails:!1,onCancel:t,cancelButtonText:s.formatMessage(G.skipAddMembers),onSuccess:t})})]})}function X(e){let{onNext:t}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{children:(0,d.jsx)(T.Z,Y({},G.completeTitle))}),(0,d.jsx)(f,{children:(0,d.jsx)(T.Z,Y({},G.completeDescription))}),(0,d.jsx)(c.z,{onClick:t,size:"large",fullWidth:!0,children:(0,d.jsx)(T.Z,Y({},G.continueToChatgpt))})]})}let B=(0,D.b)(A),G=(0,O.vU)({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function K(e){let{isTrial:t,isTeam:n}=e,s=(0,b.Z)(),a=(0,v.useRouter)(),i=(0,y.useCallback)(e=>{e.preventDefault(),h.A.logEvent(j.M.clickAccountPaymentSuccessContinue),a.push("/")},[a]);return(0,d.jsxs)(p,{children:[(0,d.jsx)(g(),{children:(0,d.jsx)("title",{children:s.formatMessage(Q.pageTitle)})}),(0,d.jsx)("div",{className:"flex flex-col",children:n?(0,d.jsx)(z,{}):(0,d.jsx)(H,{isTrial:t,onContinue:i})})]})}function H(e){let{isTrial:t,onContinue:n}=e,s=t?Q.trial:Q.standard;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(M,{isTrial:!!t}),(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)(m,{children:(0,d.jsx)(T.Z,J({},s))}),(0,d.jsx)(f,{children:(0,d.jsx)(T.Z,J({},Q.paymentReceived))}),(0,d.jsx)(c.z,{onClick:n,size:"large",fullWidth:!0,children:(0,d.jsx)(T.Z,J({},Q.continueButton))})]})]})}let Q=(0,O.vU)({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}})},73231:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payments/success-team",function(){return n(10233)}])}},function(e){e.O(0,[4736,5459,2888,9774,179],function(){return e(e.s=73231)}),_N_E=e.O()}]);
//# sourceMappingURL=success-team-9d25190feb9b7ba8.js.map