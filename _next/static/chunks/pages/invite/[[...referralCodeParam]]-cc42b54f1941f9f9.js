(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2493,197],{69926:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return J},default:function(){return ee}});var s,r=a(15316),n=a(97410),i=a(89721),l=a(44575),o=a(25968),d=a(84760),c=a(56032),u=a(54031),p=a(99140),f=a(66943),m=a(96785),g=a(7569),v=a(94035),h=a(17958),x=a(90681),b=a(88600),y=a(43612),P=a(45896),A=a(75179),j=a.n(A),C=a(32307),F=a(92379),N=a(75172),w=a(62984),M=a(68306),S=a(15478),T=a(20118),k=a(54189),O=a(9519),I=a(48198),D=a(13300),_=a(92332),E=a(41871),U=a(11952),R=a(35998),L=a(31161),Z=a(651);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function H(){return(0,Z.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,Z.jsx)(R.Z,{})})}let B=e=>{let{referralCodeId:t,sessionUser:a,auth0Provider:s,redirectUrl:r}=e,n=(0,N.Z)(),{resolvedTheme:i}=(0,P.F)(),l="dark"===i,o=(0,F.useRef)(null);return(0,F.useEffect)(()=>{x.m9.logEvent("chatgpt_referral_invite_loaded",null!=a&&a.id?"has_user":"user_logged_out",{user_id:null!=a&&a.id?a.id:"_no_user",referral_code_id:t})},[t,null==a?void 0:a.id]),(0,F.useEffect)(()=>{null===o.current&&(o.current=document.body.style.backgroundColor);let e=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==o.current&&(document.body.style.backgroundColor=o.current)}},[l]),(0,Z.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] ",children:[(0,Z.jsx)(E.O,{}),(0,Z.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,Z.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,Z.jsx)("h1",{"aria-label":n.formatMessage(Q.ariaLabel),children:(0,Z.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,Z.jsx)("div",{children:_.L})})})}),(0,Z.jsx)(z,{sessionUser:a,auth0Provider:s,redirectUrl:r,referralCodeId:t}),(0,Z.jsxs)("div",{className:"flex flex-col items-center justify-end",children:[(0,Z.jsx)("div",{className:"flex text-gray-300",children:(0,Z.jsx)(D.nV,{className:"h-[22px] w-auto"})}),(0,Z.jsx)("div",{className:" opacity-50",children:(0,Z.jsx)(k.VL,{isStorageComplianceEnabled:!1})})]})]})]})},Y=e=>{let{offerDollarValue:t,sessionUser:a,isLoading:s,isLoadingLogin:r,handleClaimInvite:n,handleSignupWarning:i,handleLogin:l}=e,d=(0,o.ec)(o.F_.hasPaidSubscription);return null!=a&&a.id?(0,Z.jsx)(O.z,{disabled:s||d,loading:s,color:d?"disabled":"blue",size:"large",fullWidth:!0,onClick:n,children:d?(0,Z.jsx)(w.Z,G({},Q.alreadyPaidUserCta)):(0,Z.jsx)(w.Z,G(G({},Q.acceptInviteCtaLoggedIn),{},{values:{dollarValue:t}}))}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:(0,Z.jsx)(w.Z,G({},Q.claimInviteLoginOrSignUp))}),(0,Z.jsx)("div",{className:"flex flex-col space-y-4 px-3",children:(0,Z.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,Z.jsx)(O.z,{disabled:s,loading:r,fullWidth:!0,onClick:l,children:(0,Z.jsx)(w.Z,G({},T.messages.logIn))}),(0,Z.jsx)(O.z,{onClick:i,disabled:s,fullWidth:!0,children:(0,Z.jsx)(w.Z,G({},T.messages.signUp))})]})})]})};function z(e){var t,a;let{sessionUser:s,referralCodeId:r,redirectUrl:n,auth0Provider:P}=e,{0:A,1:M}=(0,F.useState)(!1),{0:S,1:T}=(0,F.useState)(!1),{0:k,1:O}=(0,F.useState)(!1),{0:D,1:_}=(0,F.useState)(!1),E=null!==(t=null==s?void 0:s.id)&&void 0!==t?t:"_no_user",{data:R,isLoading:W,isError:H}=(0,d.a)({queryKey:["referral-invite",r],queryFn:()=>i.Z.getPublicReferralInvite(r)}),B=(0,N.Z)(),z=null==R||null===(a=R.result.invite_metadata)||void 0===a?void 0:a.invite_data,J="$".concat(null==z?void 0:z.referral_trial_dollar_value),ee=null==z?void 0:z.referrer_public_avatar_url,et=null!=z&&z.referral_trial_duration_months?(null==z?void 0:z.referral_trial_duration_months)>=1?B.formatMessage(Q.monthsOfService,{referralTrialDurationMonths:null==z?void 0:z.referral_trial_duration_months}):B.formatMessage(Q.daysOfService,{referralTrialDurationDays:null==z?void 0:z.referral_trial_duration_days}):null,ea=null==z?void 0:z.referrer_user_name,es=null!=z&&z.referral_trial_duration_months?(null==z?void 0:z.referral_trial_duration_months)>1?B.formatMessage(Q.monthsOfBenefit,{referralTrialDurationMonths:null==z?void 0:z.referral_trial_duration_months}):B.formatMessage(Q.daysOfBenefit,{referralTrialDurationDays:null==z?void 0:z.referral_trial_duration_days}):null,er=null!=z&&z.referral_trial_duration_months?(null==z?void 0:z.referral_trial_duration_months)>=1?B.formatMessage(Q.ctaHeaderMonths,{referralTrialDurationMonths:null==z?void 0:z.referral_trial_duration_months}):B.formatMessage(Q.ctaHeaderDays,{referralTrialDurationDays:null==z?void 0:z.referral_trial_duration_days}):null,en=B.formatMessage(Q.dollarValue,{offerDollarValue:J}),ei=(0,l.t)(),el=(0,o.ec)(o.F_.workspaceId),eo=(0,C.useRouter)(),{mutateAsync:ed}=(0,c.D)({mutationFn:()=>i.Z.postClaimReferralInvite(r,el||""),onSettled:()=>{O(!1)},onError:async()=>{L.m.danger(B.formatMessage(Q.claimReferralError))},onSuccess:()=>{M(!0),eo.push("/invite/accepted?referralCodeId=".concat(r))}}),ec=async()=>{O(!0),x.m9.logEvent("chatgpt_referral_invite_claim",r,{referralCodeId:r,userId:E}),p.A.logEvent(f.M.chatgptReferralInviteClaim,{content:E}),await ed()},eu=(0,h.L)();return((0,F.useEffect)(()=>{H&&(eo.push("/?e=oldi"),g.U.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[H,eo]),H)?(0,Z.jsx)($,{}):W||null==ei&&null!=s&&s.id||A?(0,Z.jsx)(q,{}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[S&&(0,Z.jsx)(b.E.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,Z.jsx)(V,{handleSignup:()=>{O(!0),_(!0),x.m9.logEvent("chatgpt_referral_invite_signup",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteSignup,{content:r}),(0,y.signIn)(P,{callbackUrl:n},G({prompt:"login",screen_hint:"signup"},(0,u.gk)((0,v.f3)())))},setHasRequestedSignup:T})}),!S&&(0,Z.jsx)(b.E.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,Z.jsx)("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:er}),(0,Z.jsx)(X,{referrerPublicAvatarUrl:ee,referrerName:ea,benefitWithTime:es,receivedPlan:"ChatGPT Plus",dollarValue:en}),(0,Z.jsx)("div",{children:(0,Z.jsx)("p",{className:"text-sm",children:(0,Z.jsx)(w.Z,G({},Q.benefitPointsHeader))})}),(0,Z.jsxs)("div",{className:"space-y-3",children:[(0,Z.jsxs)(K,{children:[(0,Z.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,Z.jsx)(I.$As,{className:"h-4 w-4 text-white"})}),(0,Z.jsx)("span",{className:"max-w-full",children:(0,Z.jsx)(w.Z,G({},U.ST.plus.demandAccess))})]}),(0,Z.jsxs)(K,{children:[(0,Z.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,Z.jsx)(I.$As,{className:"h-4 w-4 text-white"})}),(0,Z.jsx)("span",{className:"max-w-full",children:(0,Z.jsx)(w.Z,G({},U.ST.plus.responseSpeed))})]}),(0,Z.jsxs)(K,{className:"pb-2",children:[(0,Z.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,Z.jsx)(I.$As,{className:"h-4 w-4 text-white"})}),(0,Z.jsx)("span",{className:"max-w-full",children:(0,Z.jsx)(w.Z,G({},U.ST.plus.modelFeatures))})]})]}),(0,Z.jsx)("div",{className:"w-full",children:(0,Z.jsx)(Y,{handleClaimInvite:ec,handleSignupWarning:()=>{O(!0),T(!0),x.m9.logEvent("chatgpt_referral_invite_explain_signup",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteExplainSignup,{content:r}),O(!1)},handleLogin:()=>{var e;O(!0),_(!0),x.m9.logEvent("chatgpt_referral_invite_login",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteLogin,{content:r});let t=null===(e=m.bX.getCookie(m.cn.DeviceId))||void 0===e?void 0:e.toString(),a=eu();(0,y.signIn)(P,G({callbackUrl:n},t?{device_id:t}:{}),G(G({prompt:"login"},(0,u.gk)((0,v.f3)())),a?{use_email_otp:"true"}:{}))},sessionUser:s,offerDollarValue:J,isLoading:k,isLoadingLogin:D})}),(0,Z.jsxs)("div",{className:"space-y-1.5 py-1 text-center",children:[(0,Z.jsx)("p",{className:"text-xs text-token-text-tertiary",children:(0,Z.jsx)(w.Z,G(G({},Q.ctaFollowUpSummary),{},{values:{monthlyCost:"$20",monthsOfService:et}}))}),(null==s?void 0:s.id)&&(0,Z.jsx)("p",{className:"text-xs text-token-text-tertiary",children:(0,Z.jsx)(w.Z,G(G({},Q.ctaNotice),{},{values:{userEmail:null==s?void 0:s.email,avatar:()=>{var e;return(0,Z.jsx)("img",{className:"inline-block h-4 w-4 rounded-full",src:null!==(e=null==s?void 0:s.picture)&&void 0!==e?e:void 0,alt:null==s?void 0:s.name})},email:e=>(0,Z.jsx)("span",{className:"font-semibold",children:e}),link:e=>(0,Z.jsx)(j(),{className:"underline",href:"/auth/logout",children:e})}}))})]})]})})})]})})}let V=e=>{let{setHasRequestedSignup:t,handleSignup:a}=e;return(0,Z.jsxs)("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[(0,Z.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,Z.jsx)(w.Z,G({},Q.signUpExplainTitle))}),(0,Z.jsx)("div",{children:(0,Z.jsx)("p",{className:"text-sm",children:(0,Z.jsx)(w.Z,G({},Q.signUpExplainDescription))})}),(0,Z.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row",children:[(0,Z.jsx)(O.z,{fullWidth:!0,onClick:()=>{t(!1)},color:"secondary",children:(0,Z.jsx)(w.Z,G({},Q.signUpCtaBack))}),(0,Z.jsx)(O.z,{onClick:a,fullWidth:!0,color:"primary",children:(0,Z.jsx)(w.Z,G({},Q.signUpCtaProceed))})]})]})},$=()=>(0,Z.jsxs)("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[(0,Z.jsx)("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:(0,Z.jsx)(H,{})}),(0,Z.jsx)(b.E.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,Z.jsxs)("div",{className:"text-center",children:[(0,Z.jsx)("h2",{className:"text-sm font-semibold",children:(0,Z.jsx)(w.Z,G({},Q.errorHeader))}),(0,Z.jsx)("p",{className:"text-xs font-normal",children:(0,Z.jsx)(w.Z,G(G({},Q.errorDescription),{},{values:{link:e=>(0,Z.jsx)("a",{href:"/",className:"underline",children:e})}}))})]})})]}),q=()=>(0,Z.jsx)("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:(0,Z.jsx)("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:(0,Z.jsx)(H,{})})}),K=S.Z.div(s||(s=(0,r.Z)(["gap-2 flex flex-row justify-start text-sm items-start"]))),X=e=>{let{referrerPublicAvatarUrl:t,referrerName:a,benefitWithTime:s,receivedPlan:r,dollarValue:n}=e;return(0,Z.jsxs)("div",{className:"flex w-full items-center",children:[(0,Z.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,Z.jsx)("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:t,alt:a})}),(0,Z.jsx)("div",{className:"ml-3 w-0 flex-1",children:(0,Z.jsx)("p",{className:"text-sm text-token-text-primary",children:(0,Z.jsx)(w.Z,G(G({},Q.socialProofText),{},{values:{referrerName:a,benefitWithTime:s,receivedPlan:r,dollarValue:n,highlight:e=>(0,Z.jsx)("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:e})}}))})})]})},Q=(0,M.vU)({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}});var J=!0;function ee(e){let{redirectUrl:t,sessionUser:a,auth0Provider:s,referralCodeId:r}=e;return(0,Z.jsx)(B,{sessionUser:a,redirectUrl:t,referralCodeId:r,auth0Provider:s})}},29935:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(19841),r=a(651);function n(e){let{id:t,label:a,checked:n,onChange:i,disabled:l,className:o,labelClassName:d,readOnly:c,labelSide:u="right"}=e,p=a&&(0,r.jsx)("label",{className:(0,s.default)("form-check-label text-token-text-primary",d),htmlFor:t,children:a});return(0,r.jsxs)("div",{className:"form-check flex items-center gap-2",children:["left"===u&&p,(0,r.jsx)("input",{className:(0,s.default)("form-check-input float-left h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",l?"cursor-not-allowed":"cursor-pointer",o),type:"checkbox",disabled:l,onChange:i,checked:n,readOnly:c,id:t}),"right"===u&&p]})}},76781:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var s,r=a(15316),n=a(19841),i=a(92379),l=a(15478),o=a(48198),d=a(651);function c(e){let t,{type:a="info",children:s,isDismissible:r=!1,onDismiss:l,className:c,isElevated:p=!1}=e,{0:f,1:m}=(0,i.useState)(!1);return f?null:("none"!==a&&(t=o.szr),(0,d.jsxs)(u,{$type:a,className:(0,n.default)("flex w-full items-start gap-3 rounded-2xl border text-sm","warning"===a||"danger"===a?"bg-opacity-5":"bg-opacity-10",r?"py-2.5 pl-3 pr-2 md:py-3 md:pl-4 md:pr-3":"px-3 py-2.5 md:p-4",p&&"shadow-xxs",c),children:[t&&(0,d.jsx)(t,{className:(0,n.default)("icon-lg shrink-0",r&&"mt-[2px] md:mt-px",("info"===a||"none"===a)&&"text-token-text-secondary")}),(0,d.jsx)("div",{className:(0,n.default)("grow",r?"pt-[4px] md:pt-[3px]":"pt-[2px]",!t&&"pl-1"),children:s}),r&&(0,d.jsx)("button",{onClick:()=>{m(!0),null==l||l()},className:(0,n.default)("flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-transparent text-token-text-primary",("info"===a||"none"===a)&&"hover:bg-token-main-surface-secondary","danger"===a&&"hover:bg-token-surface-error/10","warning"===a&&"hover:bg-orange-400/10"),children:(0,d.jsx)(o.tPq,{className:"icon-md"})})]}))}let u=l.Z.div(s||(s=(0,r.Z)(["\n",""])),e=>{let{$type:t}=e;switch(t){case"danger":return"text-token-text-error border-token-surface-error/15 bg-token-surface-error bg-opacity-0";case"warning":return"text-orange-600 bg-orange-400 bg-opacity-0 border-orange-400/15";case"success":return"text-green-500 border-green-500 bg-green-500 bg-opacity-0";default:return"text-token-text-primary border-token-border-light bg-token-main-surface-primary bg-opacity-0"}})},80197:function(e,t,a){"use strict";a.d(t,{E:function(){return f},u:function(){return m}});var s,r=a(15316),n=a(97410),i=a(27781),l=a(59594),o=a(19841);a(92379);var d=a(15478),c=a(651);let u=["disabled"];function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}let f=e=>{let{disabled:t}=e,a=(0,i.Z)(e,u);return t?(0,c.jsx)(c.Fragment,{children:a.children}):(0,c.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a))},m=e=>{let t,a,{label:s,contentClassName:r,customPaddingClassName:n,theme:i="default",cornerRadius:d="lg",side:u="bottom",sideOffset:p=14,align:f="center",alignOffset:m=0,withArrow:v=!0,wide:h=!1,size:x="small",interactive:b=!1,usePortal:y=!0,className:P,children:A,delayDuration:j=300,closeOnOutsideClick:C=!0,open:F,onOpenChange:N}=e;if(!s)return(0,c.jsx)("span",{className:P,children:A});switch(i){case"blue":t="",a="bg-blue-selection";break;case"white":t="",a="bg-white";break;case"default":t="border-white/10 dark:border",a="bg-gray-950"}let w=(0,c.jsxs)(l.VY,{collisionPadding:8,onPointerDownOutside:C?void 0:e=>e.preventDefault(),side:u,sideOffset:p,alignOffset:m,align:f,className:(0,o.default)("relative shadow-xs transition-opacity",n||"px-3 py-2","rounded-".concat(d),t,a,h?"max-w-sm":"max-w-xs",r),children:[(0,c.jsx)("span",{className:(0,o.default)("flex items-center whitespace-pre-wrap text-center font-semibold normal-case text-gray-100",{"text-xs":"xsmall"===x,"text-sm":"small"===x}),children:s}),v&&(0,c.jsx)(l.Eh,{asChild:!0,children:(0,c.jsx)(g,{className:a})})]});return(0,c.jsxs)(l.fC,{delayDuration:j,disableHoverableContent:!b,open:F,onOpenChange:N,children:[(0,c.jsx)(l.xz,{asChild:!0,children:(0,c.jsx)("span",{className:P,children:A})}),y?(0,c.jsx)(l.h_,{children:w}):w]})},g=d.Z.div(s||(s=(0,r.Z)(["relative top-[-4px] h-2 w-2 rotate-45 transform shadow-xs dark:border-r dark:border-b border-white/10"])))},11952:function(e,t,a){"use strict";a.d(t,{Ek:function(){return y},ST:function(){return x},_H:function(){return b}});var s,r=a(97410),n=a(20737),i=a(19698);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let d=(0,a(68306).vU)({freeName:{id:"pricingPlanConstants.free.name",defaultMessage:"Free"},freeCTA:{id:"pricingPlanConstants.free.callToAction",defaultMessage:"Your current plan"},freeForLine:{id:"pricingPlanConstants.free.freePlanForLine",defaultMessage:"For people just getting started with ChatGPT"},freeCost:{id:"pricingPlanConstants.free.costInDollars",defaultMessage:"USD $0/month"},freeAccess:{id:"pricingPlanConstants.free.demandAccess",defaultMessage:"Access to our GPT-3.5 model"},freeSpeed:{id:"pricingPlanConstants.free.responseSpeed",defaultMessage:"Standard response speed"},freeFeatures:{id:"pricingPlanConstants.free.modelFeatures",defaultMessage:"Regular model updates"},freeAdvertisedFeatures0:{id:"pricingPlanConstants.free.freeAdvertisedFeatures0",defaultMessage:"Unlimited messages, interactions, and history"},freeAdvertisedFeatures1:{id:"pricingPlanConstants.free.freeAdvertisedFeatures1",defaultMessage:"Access to our GPT-3.5 model"},freeAdvertisedFeatures2:{id:"pricingPlanConstants.free.freeAdvertisedFeatures2",defaultMessage:"Access on Web, iOS, and Android"},freeAdvertisedFeaturesNeptune0:{id:"ecdHlW",defaultMessage:"Assistance with writing, problem solving and more"},freeAdvertisedFeaturesNeptune1:{id:"gY4yrX",defaultMessage:"Access to GPT-3.5"},freeAdvertisedFeaturesNeptune2:{id:"izTv5G",defaultMessage:"Limited access to {modelName}",modelName:!0},freeAdvertisedFeaturesNeptune3:{id:"jXs92m",defaultMessage:"Limited access to advanced data analysis, file uploads, vision, web browsing, and custom GPTs"},basicModelAccess:{id:"nbg0DW",defaultMessage:"Access to GPT-4o mini"},plusName:{id:"pricingPlanConstants.plus.name",defaultMessage:"Plus"},plusForLine:{id:"pricingPlanConstants.plus.forLine",defaultMessage:"Everything in Free, and:"},plusActive:{id:"pricingPlanConstants.plus.callToAction.active",defaultMessage:"Your current plan"},plusInactive:{id:"pricingPlanConstants.plus.callToAction.inactivePayment",defaultMessage:"Upgrade to Plus"},plusCost:{id:"pricingPlanConstants.plus.costInDollars",defaultMessage:"USD $20/month"},plusYearlyCost:{id:"pricingPlanConstants.plusYearly.costInDollars",defaultMessage:"USD $16.67/month"},plusYearlyCostSubtitle:{id:"pricingPlanConstants.plusYearly.costInDollarsSubtitle",defaultMessage:"USD $199.99/year"},plusAccess:{id:"pricingPlanConstants.plus.demandAccess",defaultMessage:"Access to GPT-4, our most capable model"},plusSpeed:{id:"pricingPlanConstants.plus.responseSpeed",defaultMessage:"Faster response speed"},plusFeatures:{id:"pricingPlanConstants.plus.modelFeatures",defaultMessage:"Access to beta features like browsing, plugins, and advanced data analysis"},plusAdvertisedFeatures0:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures0",defaultMessage:"Access to GPT-4, our most capable model"},plusAdvertisedFeatures1:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures1",defaultMessage:"Browse, create, and use GPTs"},plusAdvertisedFeatures2:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures2",defaultMessage:"Access to additional tools like DALL\xb7E, Browsing, Advanced Data Analysis and more"},plusAdvertisedFeaturesNeptune0:{id:"azP8zT",defaultMessage:"Access to GPT-4, {modelName}, GPT-3.5",modelName:!0},plusAdvertisedFeaturesNeptune1:{id:"pzi1cv",defaultMessage:"Up to 5x more messages for {modelName}",modelName:!0},plusAdvertisedFeaturesNeptune2:{id:"rqeQB6",defaultMessage:"Access to advanced data analysis, file uploads, vision, and web browsing"},plusAdvertisedFeaturesNeptune3:{id:"QnU/tR",defaultMessage:"DALL\xb7E image generation"},plusAdvertisedFeaturesNeptune4:{id:"aIMZgQ",defaultMessage:"Create and use custom GPTs"},plusAdvertisedFeaturesNeptune5:{id:"qWNfMZ",defaultMessage:"Early access to new features"},plusAdvertisedFeaturesChive0:{id:"ycUxUR",defaultMessage:"Access to GPT-4o, GPT-4o mini, GPT-4"},manageSubscriptionWeb:{id:"pricingPlanConstants.manageSubscriptionWeb.callToAction",defaultMessage:"Manage my subscription"},manageSubscriptionIos:{id:"pricingPlanConstants.manageSubscriptionIos.callToAction",defaultMessage:"Manage my subscription in the ChatGPT iOS app"},manageSubscriptionAndroid:{id:"pricingPlanConstants.manageSubscriptionAndroid.callToAction",defaultMessage:"Manage my subscription in the ChatGPT Android app"},cancelSubscriptionWeb:{id:"pricingPlanConstants.cancelSubscriptionWeb.callToAction",defaultMessage:"Cancel my subscription"},cancelSubscriptionIos:{id:"pricingPlanConstants.cancelSubscriptionIos.callToAction",defaultMessage:"Cancel my subscription in the ChatGPT iOS app"},cancelSubscriptionAndroid:{id:"pricingPlanConstants.cancelSubscriptionAndroid.callToAction",defaultMessage:"Cancel my subscription in the ChatGPT Android app"},getHelp:{id:"pricingPlanConstants.getHelp.callToAction",defaultMessage:"I need help with a billing issue"},business:{id:"pricingPlanConstants.business.callToAction",defaultMessage:"Buy for my team"},teamPlanName:{id:"pricingPlanConstants.teams.teamPlanName",defaultMessage:"Team"},teamPlanInactive:{id:"pricingPlanConstants.teams.teamPlanInactive",defaultMessage:"Upgrade to Team"},teamPlanActive:{id:"pricingPlanConstants.teams.teamPlanActive",defaultMessage:"Your current plan"},teamPlanCreate:{id:"pricingPlanConstants.teams.teamPlanCreate",defaultMessage:"Add Team workspace"},teamPlanForLine:{id:"pricingPlanConstants.teams.teamPlanForLine",defaultMessage:"Everything in Plus, and:"},teamPlanForLineNeptune:{id:"3bMOBg",defaultMessage:"Everything in Plus, and:"},teamPlanCost:{id:"pricingPlanConstants.teams.teamPlanSubTitle",defaultMessage:"USD $25 per person/month*"},teamPlanSpeed:{id:"pricingPlanConstants.teams.teamPlanUsageRates",defaultMessage:"Unlimited high-speed GPT-4"},teamPlanContext:{id:"pricingPlanConstants.teams.teamPlanContext",defaultMessage:"4x longer context lets you work with larger material"},teamsAdvertisedFeatures0:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures0",defaultMessage:"Higher message caps on GPT-4 and tools like DALL\xb7E, Browsing, Advanced Data Analysis, and more"},teamsAdvertisedFeatures1:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures1",defaultMessage:"Create and share GPTs with your workspace"},teamsAdvertisedFeatures2:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures2",defaultMessage:"Admin console for workspace management"},teamsAdvertisedFeatures3:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures3",defaultMessage:"Team data excluded from training by default. <link>Learn more</link>",link:"https://openai.com/enterprise-privacy"},teamsAdvertisedFeaturesNeptune0:{id:"CDEs0b",defaultMessage:"Higher limits for GPT-4, {modelName}, and tools like DALL\xb7E image generation, advanced data analysis, web browsing, and more",modelName:!0},teamsAdvertisedFeaturesNeptune1:{id:"hTiCjR",defaultMessage:"Create and share GPTs with your workspace"},teamsAdvertisedFeaturesNeptune2:{id:"VM2cal",defaultMessage:"Admin console for workspace management"},teamsAdvertisedFeaturesNeptune3:{id:"EQPMpv",defaultMessage:"Team data excluded from training by default. <article>Learn more</article>",article:"https://openai.com/enterprise-privacy"},teamPricingDisclaimer:{id:"pricingPlanConstants.teams.teamPricingDisclaimer",defaultMessage:"* Price billed annually, minimum 2 users"},highDemandDisabledText:{id:"pricingPlanConstants.highDemandDisabledText",defaultMessage:"Due to high demand, we've temporarily paused upgrades."},signUpForWaitlistActive:{id:"pricingPlanConstants.signUpForWaitlistActive",defaultMessage:"Sign up for waitlist"},signUpForWaitlistInactive:{id:"pricingPlanConstants.signUpForWaitlistInactive",defaultMessage:"Signed up for waitlist"},enterpriseName:{id:"pricingPlanConstants.enterprise.name",defaultMessage:"Enterprise"},enterpriseCTA:{id:"pricingPlanConstants.enterprise.callToAction",defaultMessage:"Contact sales"},enterpriseCost:{id:"pricingPlanConstants.enterprise.costInDollars",defaultMessage:"Tailored pricing for your business"}}),c={name:d.plusName,callToAction:{active:d.plusActive,create:d.plusActive,inactive:d.plusInactive},forLine:d.plusForLine,costInDollars:d.plusCost,demandAccess:d.plusAccess,responseSpeed:d.plusSpeed,modelFeatures:d.plusFeatures,advertisedFeatures:[d.plusAdvertisedFeatures0,d.plusAdvertisedFeatures1,d.plusAdvertisedFeatures2]},u={name:d.freeName,callToAction:{active:d.freeCTA,create:d.freeCTA,inactive:d.freeCTA},forLine:void 0,costInDollars:d.freeCost,demandAccess:d.freeAccess,responseSpeed:d.freeSpeed,modelFeatures:d.freeFeatures,advertisedFeatures:[d.freeAdvertisedFeaturesNeptune0,d.freeAdvertisedFeaturesNeptune1,d.freeAdvertisedFeaturesNeptune2,d.freeAdvertisedFeaturesNeptune3]},p=o(o({},u),{},{demandAccess:d.basicModelAccess,advertisedFeatures:[d.freeAdvertisedFeaturesNeptune0,d.basicModelAccess,d.freeAdvertisedFeaturesNeptune2,d.freeAdvertisedFeaturesNeptune3]}),f={name:d.plusName,callToAction:{active:d.plusActive,create:d.plusActive,inactive:d.plusInactive},forLine:void 0,costInDollars:d.plusCost,demandAccess:d.plusAccess,responseSpeed:d.plusSpeed,modelFeatures:d.plusFeatures,advertisedFeatures:[d.plusAdvertisedFeaturesNeptune5,d.plusAdvertisedFeaturesNeptune0,d.plusAdvertisedFeaturesNeptune1,d.plusAdvertisedFeaturesNeptune2,d.plusAdvertisedFeaturesNeptune3,d.plusAdvertisedFeaturesNeptune4]},m={name:d.plusName,callToAction:{active:d.plusActive,create:d.plusActive,inactive:d.plusInactive},forLine:void 0,costInDollars:d.plusCost,demandAccess:d.plusAccess,responseSpeed:d.plusSpeed,modelFeatures:d.plusFeatures,advertisedFeatures:[d.plusAdvertisedFeaturesNeptune5,d.plusAdvertisedFeaturesNeptune0,d.plusAdvertisedFeaturesNeptune2,d.plusAdvertisedFeaturesNeptune3,d.plusAdvertisedFeaturesNeptune4]},g=o(o({},f),{},{advertisedFeatures:[d.plusAdvertisedFeaturesNeptune5,d.plusAdvertisedFeaturesChive0,d.plusAdvertisedFeaturesNeptune1,d.plusAdvertisedFeaturesNeptune2,d.plusAdvertisedFeaturesNeptune3,d.plusAdvertisedFeaturesNeptune4]}),v=o(o({},m),{},{advertisedFeatures:[d.plusAdvertisedFeaturesNeptune5,d.plusAdvertisedFeaturesChive0,d.plusAdvertisedFeaturesNeptune2,d.plusAdvertisedFeaturesNeptune3,d.plusAdvertisedFeaturesNeptune4]}),h={name:d.teamPlanName,callToAction:{active:d.teamPlanActive,inactive:d.teamPlanInactive,create:d.teamPlanCreate},forLine:d.teamPlanForLineNeptune,costInDollars:d.teamPlanCost,responseSpeed:d.teamPlanSpeed,demandAccess:d.teamPlanSpeed,modelFeatures:d.teamPlanContext,advertisedFeatures:[d.teamsAdvertisedFeaturesNeptune0,d.teamsAdvertisedFeaturesNeptune1,d.teamsAdvertisedFeaturesNeptune2,d.teamsAdvertisedFeaturesNeptune3],disclaimer:d.teamPricingDisclaimer},x={free:{name:d.freeName,callToAction:{active:d.freeCTA,create:d.freeCTA,inactive:d.freeCTA},forLine:d.freeForLine,costInDollars:d.freeCost,demandAccess:d.freeAccess,responseSpeed:d.freeSpeed,modelFeatures:d.freeFeatures,advertisedFeatures:[d.freeAdvertisedFeatures0,d.freeAdvertisedFeatures1,d.freeAdvertisedFeatures2]},freeNeptune:u,freeChive:p,plus:c,plusNeptuneForFreeUsers:f,plusNeptuneForPlusUsers:m,plusChiveForFreeUsers:g,plusChiveForPlusUsers:v,plusYearly:o(o({},c),{},{costInDollars:d.plusYearlyCost,costInDollarsSubtitle:d.plusYearlyCostSubtitle}),teams:{name:d.teamPlanName,callToAction:{active:d.teamPlanActive,inactive:d.teamPlanInactive,create:d.teamPlanCreate},forLine:d.teamPlanForLine,costInDollars:d.teamPlanCost,responseSpeed:d.teamPlanSpeed,demandAccess:d.teamPlanSpeed,modelFeatures:d.teamPlanContext,advertisedFeatures:[d.teamsAdvertisedFeatures0,d.teamsAdvertisedFeatures1,d.teamsAdvertisedFeatures2,d.teamsAdvertisedFeatures3],disclaimer:d.teamPricingDisclaimer},teamsNeptune:h,enterprise:{name:d.enterpriseName,callToAction:{active:d.enterpriseCTA,create:d.enterpriseCTA,inactive:d.enterpriseCTA},costInDollars:d.enterpriseCost},manageSubscriptionWeb:{callToAction:d.manageSubscriptionWeb},manageSubscriptionIos:{callToAction:d.manageSubscriptionIos},manageSubscriptionAndroid:{callToAction:d.manageSubscriptionAndroid},cancelSubscriptionWeb:{callToAction:d.cancelSubscriptionWeb},cancelSubscriptionIos:{callToAction:d.cancelSubscriptionIos},cancelSubscriptionAndroid:{callToAction:d.cancelSubscriptionAndroid},getHelp:{callToAction:d.getHelp},business:{callToAction:d.business},disabledHighDemand:{hoverText:d.highDemandDisabledText},signUpForWaitlist:{active:d.signUpForWaitlistActive,create:d.signUpForWaitlistActive,inactive:d.signUpForWaitlistInactive}},b=((s={})[s.Scallion=0]="Scallion",s[s.Chive=1]="Chive",s[s.Default=2]="Default",s),y=()=>{let e=(0,n.Hb)();return(0,i.fW)("2437036977").value?b.Chive:e?b.Scallion:b.Default}},25968:function(e,t,a){"use strict";a.d(t,{F_:function(){return v},aF:function(){return f},e2:function(){return x},ec:function(){return g},m0:function(){return h}});var s=a(97410),r=a(49166),n=a(84760),i=a(34608),l=a(89721),o=a(44575);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach(function(t){(0,s.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}async function u(){let e=await l.Z.getMe();return{id:e.id,email:e.email,name:e.name,picture:e.picture,created:e.created}}let p=(0,r.C)({queryKey:["user"],queryFn:u,staleTime:1/0});function f(){return(0,n.a)(p).data}let m={currentWorkspace:null,subscriptionStatus:null,workspaces:[]};function g(e){var t;let a=null!==(t=(0,n.a)(c(c({},(0,o.KP)()),{},{select:e=>{var t,a;let s=(0,o.EI)(e);return{currentWorkspace:null!==(t=null==s?void 0:s.data)&&void 0!==t?t:null,subscriptionStatus:null!==(a=null==s?void 0:s.data.subscriptionStatus)&&void 0!==a?a:null,workspaces:e.accountItems.map(e=>e.data)}}})).data)&&void 0!==t?t:m;return e?e(a):a}let v={hasMultipleWorkspaces:e=>{let{workspaces:t}=e;return t.length>1},isPersonalWorkspace:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.PERSONAL},isBusinessWorkspace:e=>{let{currentWorkspace:t}=e;return null!=t?t.structure===i.CZ.WORKSPACE:void 0},isEnterprisePlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.ENTERPRISE},isEduPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.EDU},isEnterpriseOrEduPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.ENTERPRISE||(null==t?void 0:t.planType)===i.D8.EDU},isTeamPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.TEAM},isAdmin:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.ADMIN},isOwner:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.OWNER},workspaceId:e=>{let{currentWorkspace:t}=e;return null!=t?t.id:null},businessWorkspace:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.WORKSPACE?t:void 0},businessWorkspaceId:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.WORKSPACE?t.id:void 0},hasPaidSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasPaidSubscription},wasPaidCustomer:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.wasPaidCustomer},hasCustomerObject:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasCustomerObject},hasUnclaimedFreeTrial:e=>{var t;let{currentWorkspace:a}=e;return null==a||null===(t=a.promoData)||void 0===t?void 0:t.has_claimed_free_trial},lastActiveSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t?t.lastActiveSubscription:null},workspaces:e=>{let{workspaces:t}=e;return t},accountUserId:e=>{let{currentWorkspace:t}=e;return null==t?void 0:t.accountUserId}};function h(){let e=(0,o.t)();if(null!=e)return e.hasPlusFeatures()}function x(){var e;return null===(e=(0,o.t)())||void 0===e?void 0:e.data.subscriptionStatus.lastActiveSubscription}},1322:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invite/[[...referralCodeParam]]",function(){return a(69926)}])}},function(e){e.O(0,[2205,9169,3300,737,4660,118,2888,9774,179],function(){return e(e.s=1322)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...referralCodeParam]]-cc42b54f1941f9f9.js.map