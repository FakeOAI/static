"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5904,2107],{55904:function(e,t,n){n.d(t,{r:function(){return E},wV:function(){return S}});var r,i=n(94521),o=n(41141),a=n(85734),s=n(50684),l=n(83252),c=n(82823),d=n(16645),u=n(63424),p=n(25257),m=n(12586),h=n(14314),f=n(98506),g=n(93747),x=n(15236),v=n(19841),y=n(61888),b=n.n(y),j=n(40319),k=n.n(j),w=n(92379),P=n(72256),C=n(26123),O=n(25940),_=n(74091),T=n(92426),N=n(69581),L=n(651);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let U=_.Z.div(r||(r=(0,o.Z)(["group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-token-main-surface-secondary text-sm text-token-text-primary"])));function E(){let{data:e,isLoading:t}=(0,c.Fi)({cutId:"recent",limit:8}),{data:n,isLoading:r}=(0,c.Dq)();return{isLoading:t||r,recent:e,pinned:n}}let A=(0,w.forwardRef)(function(e,t){let{query:n,onSelectGizmo:r,selectedIdx:i}=e,o=(0,f.oc)(),a=(0,w.useRef)([]),{isLoading:l,recent:c,pinned:u}=E();(0,w.useImperativeHandle)(t,()=>({handleEnterOnIndex:e=>{if(!m[e])return e<p.length?p[e].resource:"create"},getResultsLength:()=>p.length+1,scrollToItem:e=>{let t=a.current[e];t&&t.scrollIntoView({behavior:"instant",block:"nearest"})}}));let p=[];if(l)return(0,L.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,L.jsx)(s.Z,{})});c&&p.push(...c.pages.flatMap(e=>e.list.items).map(e=>({resource:e.resource,from:"recent"}))),u&&p.push(...u.items.map(e=>({resource:e,from:"pinned"})));let m=(p=b().uniqBy(p,e=>e.resource.gizmo.id)).map(e=>{var t;return null===(t=e.resource.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.WorkspaceDisabled)});return n&&""!==n&&(p=p.filter(e=>{var t,r;return(e.resource.gizmo.display.name.toLowerCase()+(null===(t=e.resource.gizmo.display.description)||void 0===t?void 0:t.toLowerCase())+(null===(r=e.resource.gizmo.author.display_name)||void 0===r?void 0:r.toLowerCase())).includes(null==n?void 0:n.toLowerCase())})),(0,L.jsxs)("div",{className:"max-h-40 overflow-y-auto",children:[p.map((e,t)=>(0,L.jsx)("div",{ref:e=>{a.current[t]=e},tabIndex:t,onClick:()=>{m[t]||r(e.resource)},children:(0,L.jsx)(I,{gizmoResource:e.resource,from:e.from,showDescription:o,isSelected:i===t,grayedOut:m[t]})},e.resource.gizmo.id)),(0,L.jsx)("div",{ref:e=>{a.current[p.length]=e},tabIndex:p.length,onClick:()=>{r("create")},children:(0,L.jsx)(R,{isSelected:i===p.length})},"create")]})}),R=e=>{let{isSelected:t}=e;return(0,L.jsx)(U,{className:t?"bg-token-main-surface-secondary":"",children:(0,L.jsxs)(k(),{href:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2",children:[(0,L.jsx)("span",{className:"self-center",children:(0,L.jsx)(T.Vz5,{className:"icon-sm"})}),(0,L.jsx)("span",{children:(0,L.jsx)(P.Z,M({},G.dropdownCreateLabel))})]})})},z=e=>{let{onClick:t,onClose:n}=e,{0:r,1:i}=(0,w.useState)(null),o=(0,w.useRef)(null),a=(0,w.useRef)(null),{0:s,1:l}=(0,w.useState)(0),c=(0,C.Z)(),d=e=>{g.A.logEvent(x.M.mentionsClickGizmo,{gizmo_id:"create"===e?"create":e.gizmo.id}),"create"!==e&&t(e)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("input",{autoFocus:!0,placeholder:c.formatMessage(G.searchPlaceholder),ref:o,onKeyDown:e=>{var t,i,o,c,u;let p=null!==(t=null===(i=a.current)||void 0===i?void 0:i.getResultsLength())&&void 0!==t?t:0;if("Escape"!==e.key&&("Backspace"!==e.key||r)||(e.preventDefault(),n()),"Enter"===e.key||"Tab"===e.key){e.preventDefault();let t=null===(o=a.current)||void 0===o?void 0:o.handleEnterOnIndex(s);if(!t)return;"create"===t?(window.open("/gpts/editor","_blank"),n()):d(t)}if("ArrowDown"===e.key&&s<p-1){e.preventDefault();let t=s+1;null===(c=a.current)||void 0===c||c.scrollToItem(t),l(t)}if("ArrowUp"===e.key&&s>0){e.preventDefault();let t=s-1;null===(u=a.current)||void 0===u||u.scrollToItem(t),l(t)}},onChange:e=>{i(e.target.value),l(0)},className:"mb-1 w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),(0,L.jsx)(A,{ref:a,query:r,selectedIdx:s,onSelectGizmo:d})]})};function I(e){var t;let{gizmoResource:n,from:r,showDescription:i,isSelected:o,grayedOut:a}=e,s=!!(null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));return(0,L.jsxs)(U,{className:(0,v.default)(o?"bg-token-main-surface-secondary":"",a&&"opacity-50"),children:[(0,L.jsx)(l.Z,{isFirstParty:s,src:n.gizmo.display.profile_picture_url,className:(0,v.default)("icon-xl h-7 w-7 flex-shrink-0",a&&"grayscale group-hover:grayscale-0")}),(0,L.jsxs)("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[(0,L.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,L.jsx)("span",{className:"shrink-0 truncate",children:n.gizmo.display.name}),i&&(0,L.jsx)("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),(0,L.jsx)("span",{className:"shrink-0 self-center",children:"recent"===r?(0,L.jsx)(T.T39,{className:"icon-sm"}):(0,L.jsx)(T.qQX,{className:"icon-sm"})})]})]})}function S(e){var t;let{gizmoResource:n,onRemove:r}=e,i=!!(null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));return(0,L.jsxs)("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[(0,L.jsxs)("div",{className:(0,v.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[(0,L.jsx)(l.Z,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),(0,L.jsxs)("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[(0,L.jsx)(P.Z,M({},G.talkingTo))," ",(0,L.jsx)("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&(0,L.jsx)("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:(0,L.jsx)(T.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}let G=(0,O.vU)({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});t.ZP=e=>{let{onClick:t,onClose:n}=e,r=(0,m.Ib)(),i=(0,p.p7)(),o=(0,p.b0)(),s=i?!!o:!!r&&(0,h.PX)(r);return((0,u.n)(()=>{g.A.logEvent(x.M.mentionsOpened,{gizmo_selector_disabled:s})}),i&&o)?(0,L.jsx)(N.g,{rateLimitInfo:o}):!i&&r&&(0,h.PX)(r)?(0,L.jsx)(N.W,{rateLimitWithBannerDescription:r,clientThreadId:a.Zq}):(0,L.jsx)("div",{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||n()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:(0,L.jsx)(z,{onClick:t,onClose:n})})}},69581:function(e,t,n){n.d(t,{W:function(){return P},g:function(){return w}});var r=n(94521),i=n(85734),o=n(33112),a=n(26123),s=n(52825),l=n(651);let c=e=>{var t,n,r,i,o,c;let{actions:d,title:u,description:p,onDismiss:m}=e,h=(0,a.Z)(),f=null!=d&&null!==(t=d.primaryAction)&&void 0!==t&&t.text?h.formatMessage(d.primaryAction.text):void 0,g=null!=d&&null!==(n=d.secondaryAction)&&void 0!==n&&n.text?h.formatMessage(d.secondaryAction.text):void 0;return(0,l.jsx)(s.j,{title:u,content:p,onDismiss:m,primaryCtaText:f,onPrimaryCtaClick:null!==(r=null==d||null===(i=d.primaryAction)||void 0===i?void 0:i.onClick)&&void 0!==r?r:void 0,secondaryCtaText:g,onSecondaryCtaClick:null!==(o=null==d||null===(c=d.secondaryAction)||void 0===c?void 0:c.onClick)&&void 0!==o?o:void 0,isElevated:!0})};var d=n(63424),u=n(4702),p=n(25257),m=n(12586),h=n(14314),f=n(93747),g=n(72256),x=n(25940),v=n(23956),y=n(55059);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let k=e=>{let{clientThreadId:t,location:n,primaryAction:r,rateLimitWithBannerDescription:i,title:o,description:a,onDismiss:s}=e,d={primaryAction:r,secondaryAction:function(e){let{location:t,rateLimit:n,hasNoAvailableModels:r,updateModelQueryParam:i}=e;if(!r||!(0,h.Qh)(n))return null;let{limit_details:{next_model_slug:o}}=n;return{text:O.newChatButton,onClick:()=>{i({modelId:o,location:t})}}}({location:n,hasNoAvailableModels:(0,v.y)(t),updateModelQueryParam:(0,y.fm)(!0),rateLimit:i})};return(0,l.jsx)(c,{title:o,description:a,actions:d,onDismiss:s})},w=e=>{var t;let{rateLimitInfo:n,onDismiss:r}=e,{name:a,title:s,call_to_action:d,description:m}=n,h=(0,u.t)(),g=(0,y.fm)(!0),x=(0,p.zd)(),v=null!==(t=null==h?void 0:h.planType)&&void 0!==t?t:"unknown",b=e=>{let t="banner_description";switch(e){case i.Ev.GET_PLUS:{let e=x&&"block_reason"in x?x.block_reason:null;return{text:O.getPlusButton,onClick:()=>{f.A.logRateLimitGetPlusButtonClicked({type:a,location:t,plan_type:v,is_hard_block:!!x,hard_block_reason:null!=e?e:""}),(0,o.MG)("Prompt textarea rate limit banner")}}}case i.Ev.NEW_CHAT:return{text:O.newChatButton,onClick:()=>{g({modelId:"",location:t})}}}},[j,k]=null!=d?d:[],w={primaryAction:b(j),secondaryAction:b(k)};return(0,l.jsx)(c,{onDismiss:r,title:s,description:m,actions:w})},P=e=>{var t;let{clientThreadId:n,rateLimitWithBannerDescription:r,onDismiss:a}=e,s=(0,u.t)(),p=null!==(t=null==s?void 0:s.planType)&&void 0!==t?t:"unknown",x=(0,m.DJ)(n),{call_to_action:v,display_description:y}=r,{type:b,description:w,title:P}=y,_=P,T=w;if(x){let{modelName:e}=x;_=(0,l.jsx)(g.Z,j(j({},O.disabledChatTitle),{},{values:{modelName:e}})),T=function(e){let{reason:t,modelName:n}=e,r=C(t);return(0,l.jsx)(g.Z,j(j({},r),{},{values:{modelName:n,anotherModelName:n}}))}(x)}(0,d.n)(()=>{var e,t;f.A.logRateLimitBannerShown({location:b,type:null!==(e=(0,h.EJ)(r))&&void 0!==e?e:"unknown",plan_type:p,is_hard_block:!!x,hard_block_reason:null!==(t=null==x?void 0:x.reason)&&void 0!==t?t:""})});let N=v?v===i.Pt.GET_PLUS?{text:O.getPlusButton,onClick:()=>{var e,t;f.A.logRateLimitGetPlusButtonClicked({type:null!==(e=(0,h.EJ)(r))&&void 0!==e?e:"unknown",location:b,plan_type:p,is_hard_block:!!x,hard_block_reason:null!==(t=null==x?void 0:x.reason)&&void 0!==t?t:""}),(0,o.MG)("Prompt textarea rate limit banner")}}:void 0:null;return null!=n?(0,l.jsx)(k,{clientThreadId:n,location:b,title:_,description:T,onDismiss:x?void 0:a,primaryAction:N,rateLimitWithBannerDescription:r}):(0,l.jsx)(c,{title:_,description:T,actions:{primaryAction:N},onDismiss:a})},C=e=>{switch(e){case i.Lt.UNSUPPORTED_ATTACHMENT:return O.disabledChatRateLimitUnsupportedFileAttachments;case i.Lt.UNSUPPORTED_AUDIO:return O.disabledChatRateLimitUnsupportedAudio;case i.Lt.UNSUPPORTED_GIZMO:return O.disabledChatRateLimitUnsupportedGPT;case i.Lt.UNSUPPORTED_IMAGE:return O.disabledChatRateLimitUnsupportedImage;case i.Lt.UNSUPPORTED_TOOL_USE:return O.disabledChatRateLimitUnsupportedTool}},O=(0,x.vU)({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"},disabledChatTitle:{id:"5hqdz5",defaultMessage:"You've reached your {modelName} limit."},disabledChatRateLimitUnsupportedFileAttachments:{id:"hiWvSM",defaultMessage:"You need {anotherModelName} to continue this chat because there's an attachment."},disabledChatRateLimitUnsupportedAudio:{id:"DyLkDP",defaultMessage:"You need {anotherModelName} to continue this chat because it uses audio."},disabledChatRateLimitUnsupportedGPT:{id:"xMeHTR",defaultMessage:"You need {anotherModelName} to continue this chat because this GPT requires it."},disabledChatRateLimitUnsupportedImage:{id:"TSiLMo",defaultMessage:"You need {anotherModelName} to continue this chat because it has images."},disabledChatRateLimitUnsupportedTool:{id:"uxIK+V",defaultMessage:"You need {anotherModelName} to continue this chat because it uses tools."}})},63424:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(92379);let i=e=>{(0,r.useEffect)(e,[])}}}]);
//# sourceMappingURL=5904.16264b0296473467.js.map