"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8025],{2027:function(e,t,n){n.d(t,{V:function(){return em},Z:function(){return eh}});var r,o,i=n(41141),s=n(94521),a=n(84468),l=n(35226),c=n(99331),d=n(19841),u=n(95638),h=n(26430),f=n(12654),m=n(44043),g=n(82187),p=n(69262),y=n(76590),v=n(7290),x=n(556),b=n(40319),j=n.n(b),k=n(92379),w=n(25940),M=n(26123),O=n(72256),C=n(74091),P=n(79688),T=n(5443),N=n(82823),S=n(93223),Z=n(86021),D=n(54538),L=n(84466),B=n(32512),E=n(98506),A=n(27860),R=n(93747),_=n(15236),z=n(48580),I=n(86078),q=n.n(I),K=n(43128),U=n.n(K),G=n(56505),V=n(651);function Q(e){let{text:t}=e,n=(0,G.Z)(),{0:r,1:o}=(0,k.useState)(!0),{0:i,1:s}=(0,k.useState)(0),a=(0,k.useMemo)(()=>Array.from(t),[t]),l=(0,k.useMemo)(()=>new Y().humanTypingDelaysQuertyDistance(a),[a]);return(0,k.useEffect)(()=>{t&&r&&(o(!0),l.forEach((e,t)=>{setTimeout(()=>{n()&&(s(t),t===l.length-1&&o(!1))},e)}))},[l,n,r,t]),(0,V.jsx)(V.Fragment,{children:a.slice(0,i+1).join("")})}class Y{qwertyDistance(e,t){var n,r;let o={q:[0,0],w:[1,0],e:[2,0],r:[3,0],t:[4,0],y:[5,0],u:[6,0],i:[7,0],o:[8,0],p:[9,0],a:[0,1],s:[1,1],d:[2,1],f:[3,1],g:[4,1],h:[5,1],j:[6,1],k:[7,1],l:[8,1],z:[0,2],x:[1,2],c:[2,2],v:[3,2],b:[4,2],n:[5,2],m:[6,2]},[i,s]=null!==(n=o[e.toLowerCase()])&&void 0!==n?n:[0,0],[a,l]=null!==(r=o[t.toLowerCase()])&&void 0!==r?r:[0,0];return Math.abs(i-a)+Math.abs(s-l)}humanTypingDelaysQuertyDistance(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=0,o=[];for(let i=0;i<e.length;++i){let s;if(i>0){let r=this.qwertyDistance(e[i-1],e[i]);s=0===r?this.getRandomInt(t,Math.floor(n/2)):1===r?this.getRandomInt(t,Math.floor(2*n/3)):this.getRandomInt(t,n)}else s=this.getRandomInt(t,n);o.push(s+r),r+=s}return o}getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}}n(27084);var F=n(29210),H=n(62484),J=n(44230),W=n(73746),$=n(94982),X=n(54591),ee=n(92677);let et=q()(()=>Promise.all([n.e(5365),n.e(8890),n.e(1220),n.e(6385),n.e(766),n.e(8257)]).then(n.bind(n,17903)).then(e=>e.GizmoConversationOptionsDropdown),{loadableGenerated:{webpack:()=>[17903]}});function en(e){let{conversation:t,conversationTitle:n,onOpenChange:r}=e,o=(0,M.Z)(),{isUnauthenticated:i}=(0,D.u)(),{eligible:s,markAsViewed:a}=(0,X.qg)(X.pm.ArchiveConversationOnboarding),c=(0,Z.ff)(t.id),{0:d,1:u}=(0,k.useState)(!1),h=(0,l.NL)();(0,k.useEffect)(()=>(0,L.LW)(B.n,{deleteChat:e=>{let{serverThreadId:n}=e;n===t.id&&u(!0)},archiveChat:async e=>{let{serverThreadId:n}=e;n===t.id&&(await S.Z.patchConversation(t.id,{is_archived:!0}),(0,ee.aM)(h),z.m9.logEvent("chatgpt_conversation_archived"),R.A.logEvent(_.M.conversationArchived),s&&($.m.info(o.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),a()),c&&U().push("/",void 0,{shallow:!0}))}}),[h,s,t.id,o,c,a]);let f=(0,W.Q)(),m=(0,z.it)("chatgpt_web_archive_chat").config.get("ui_placement","sidebar");f&&(m="dropdown");let g=async()=>{B.n.publish({kind:"archiveChat",serverThreadId:t.id})};return i?null:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(H.u,{label:o.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:(0,V.jsx)(et,{clientThreadId:t.id,onOpenChange:r,children:(0,V.jsx)("button",{className:"flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary juice:text-token-text-secondary juice:hover:text-token-text-primary",children:(0,V.jsx)(J.nWS,{className:"icon-md"})})})}),"sidebar"===m&&(0,V.jsx)(H.u,{label:(0,V.jsx)(O.Z,{id:"HistoryGizmoItem.archiveTooltip",defaultMessage:"Archive"}),side:"top",sideOffset:0,size:"xsmall",children:(0,V.jsx)("button",{onClick:g,className:"flex items-center justify-center text-token-text-primary transition hover:text-token-text-secondary radix-state-open:text-token-text-secondary",children:(0,V.jsx)(J.rKT,{className:"icon-md"})})}),d&&(0,V.jsx)(em,{title:n,handleDelete:()=>{S.Z.patchConversation(t.id,{is_visible:!1}).then(()=>{(0,ee.aM)(h),z.m9.logEvent("chatgpt_conversation_deleted"),R.A.logEvent(_.M.conversationDeleted)}),c&&U().push("/",void 0,{shallow:!0})},onClose:()=>{u(!1)}})]})}function er(e){let{conversation:t,onClose:n}=e,{0:r,1:o}=(0,k.useState)(t.title),i=(0,l.NL)();function s(){r!==t.title&&(Z.tQ.setTitle(t.id,r,Z._L.User),R.A.logEvent(_.M.renameThread,{threadId:t.id,content:r}),S.Z.patchConversation(t.id,{title:r}).then(()=>{(0,ee.aM)(i)}))}return(0,V.jsx)("input",{type:"text",value:r,onChange:e=>{o(e.target.value)},onKeyDown:e=>{switch(e.key){case"Escape":n();break;case"Enter":s(),n()}},onBlur:()=>{s(),n()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}function eo(e){var t;let{conversation:n,isActive:r,elementRef:o,isPrimaryBackgroundColor:i}=e,s=(0,M.Z)(),{0:a,1:l}=(0,k.useState)(!1),{0:c,1:u}=(0,k.useState)(!1);(0,k.useEffect)(()=>(0,L.LW)(B.n,{editTitle:e=>{let{serverThreadId:t}=e;(t?t===n.id:r)&&l(!0)}}),[n.id,r]);let h=s.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:f,isTypingEffect:m}=function(e,t,n){let{title:r,titleSource:o}=(0,Z.XL)(e),{0:i,1:s}=(0,k.useState)(!1),a=null!=r?r:t,l=(0,k.useRef)(a);return(0,k.useEffect)(()=>(n&&o===Z._L.Generated&&a!==l.current&&s(!0),()=>{l.current=a}),[n,a,o]),{isTypingEffect:i,resolvedTitle:a}}(n.id,n.title,r),g=(0,E.w$)(),p=m&&r&&g,{data:y}=(0,N.b9)(null!==(t=n.conversation_template_id)&&void 0!==t?t:void 0);return(0,V.jsxs)("div",{className:(0,d.default)("group relative rounded-lg active:opacity-90",r?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",c&&!r&&"bg-token-sidebar-surface-secondary"),children:[(0,V.jsx)("a",{href:(0,A.ZV)(n.id,y),onClick:e=>{if(!e.metaKey&&!e.ctrlKey&&(e.preventDefault(),!r)){var t;t=n.id,F.hx.abortAllRequests(),R.A.logEvent(_.M.loadThread,{threadId:t}),U().push((0,A.ZV)(t,y),void 0,{shallow:!0})}},onDoubleClick:()=>{l(!0)},ref:o,className:"flex items-center gap-2 p-2",children:(0,V.jsxs)("div",{className:"relative grow overflow-hidden whitespace-nowrap",dir:"auto",children:[p?(0,V.jsx)(Q,{text:f||h}):f||h,(0,V.jsx)("div",{className:(0,d.default)("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",!!i&&(r?"from-token-sidebar-surface-secondary":!r&&c?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary"),!i&&(r?"from-token-sidebar-surface-secondary":!r&&c?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary"),{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":i&&!r&&!c,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!i&&!r&&!c,"w-20 from-60% juice:w-10":r||c,"w-8 from-0% can-hover:group-hover:w-20 can-hover:group-hover:from-60% juice:can-hover:group-hover:w-10":!r&&!c})})]})}),a?(0,V.jsx)("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:(0,V.jsx)(er,{conversation:n,onClose:()=>{l(!1)}})}):(0,V.jsx)("div",{className:(0,d.default)("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",r||c?"flex":"hidden can-hover:group-hover:flex"),children:(0,V.jsx)(en,{conversation:n,conversationTitle:null!=f?f:n.title,onOpenChange:e=>{u(e),e&&R.A.logEvent(_.M.conversationHistoryItemOpenMenu,{conversationId:n.id})}})})]})}var ei=n(50684),es=n(8649),ea=n(49217);function el(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ec(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?el(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):el(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let ed=(0,w.vU)({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"},unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"},showMoreButton:{id:"history.showMoreButton",defaultMessage:"Show more"},deleteModalTitle:{id:"history.deleteModalTitle",defaultMessage:"Delete chat?"},deleteModalBody:{id:"history.deleteModalBody",defaultMessage:"This will delete {title}."},deleteModalConfirm:{id:"history.deleteModalConfirm",defaultMessage:"Delete"},deleteModalCancel:{id:"history.deleteModalCancel",defaultMessage:"Cancel"}}),eu={initial:e=>{let{isNew:t}=e;return t?{opacity:0,height:0,overflow:"hidden"}:{}},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};var eh=k.memo(function(e){let{activeId:t,isPrimaryBackgroundColor:n,isInPopover:r}=e,o=(0,l.NL)(),i=(0,M.Z)(),{0:s,1:a}=(0,k.useState)(!1),{0:b,1:j}=(0,k.useState)(0),w=(0,P.Z)(),{conversations:C,hasNextPage:N,fetchNextPage:S,isLoading:Z,isFetchingNextPage:D,isError:L}=(0,ee.MO)(),B=(0,k.useRef)(null),E=(0,k.useCallback)(e=>{var t;Z||null==e||(null===(t=B.current)||void 0===t||t.disconnect(),B.current=new IntersectionObserver(e=>{e[0].isIntersecting&&N&&S()}),B.current.observe(e))},[Z,N,S]);(0,k.useEffect)(()=>()=>{var e;null===(e=B.current)||void 0===e||e.disconnect()},[]);let A=function(e){let t=(0,k.useRef)(),n=(0,k.useRef)();return((0,k.useEffect)(()=>{t.current=n.current,n.current=e},[e]),e===n.current)?t.current:n.current}(C);(0,k.useEffect)(()=>{w(()=>{j(b+1)},(0,h.Z)((0,f.Z)(),Date.now())+1e3)},[b,w]);let R=0===C.length;(0,k.useEffect)(()=>{if(!R){var e;null===(e=(0,c.Ef)({namespace:c.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_history_items")}},[R]);let _=(0,k.useMemo)(()=>C.reduce((e,t)=>{var n,r;let o=new Date(null!==(n=null!==(r=t.update_time)&&void 0!==r?r:t.create_time)&&void 0!==n?n:0),s=(0,u.Z)(new Date,o);if(0===s)e.recent.today.items.push(t);else if(s<=1)e.recent.yesterday.items.push(t);else if(s<=7)e.recent.lastSeven.items.push(t);else if(s<=30)e.recent.lastThirty.items.push(t);else if((0,p.Z)(o)){let n=(0,g.Z)(o),r=(0,m.Z)(o),s="".concat(n,"-").concat(r);e.dynamicMonths[s]?e.dynamicMonths[s].items.push(t):e.dynamicMonths[s]={label:i.formatDate(o,{month:"long"}),items:[t]}}else{let n=(0,g.Z)(o),r="".concat(n,"-");e.dynamicYears[r]?e.dynamicYears[r].items.push(t):e.dynamicYears[r]={label:i.formatDate(o,{year:"numeric"}),items:[t]}}return e},{recent:{today:{label:(0,V.jsx)(O.Z,ec({},ed.historyBucketToday)),items:[]},yesterday:{label:(0,V.jsx)(O.Z,ec({},ed.historyBucketYesterday)),items:[]},lastSeven:{label:(0,V.jsx)(O.Z,ec({},ed.historyBucketLastSeven)),items:[]},lastThirty:{label:(0,V.jsx)(O.Z,ec({},ed.historyBucketLastThirty)),items:[]}},dynamicMonths:{},dynamicYears:{}}),[b,C]);return(0,V.jsxs)(ef,{$centered:Z||L||R,children:[R&&Z&&(0,V.jsx)(ei.Z,{className:"m-auto"}),R&&L&&(0,V.jsxs)("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[(0,V.jsx)(O.Z,ec({},ed.unableToLoadHistory)),!s&&(0,V.jsx)("div",{className:"mt-1",children:(0,V.jsx)(T.z,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{a(!0),(0,ee.aM)(o)},children:(0,V.jsx)(O.Z,ec({},ed.retryButton))})})]}),!Z&&!R&&(0,V.jsx)("div",{children:(0,V.jsx)(y.S,{id:r?"history-popover":"history-sidebar",children:(0,V.jsx)(v.M,{initial:!1,children:[_.recent,_.dynamicMonths,_.dynamicYears].flatMap((e,r)=>(0,V.jsx)(k.Fragment,{children:Object.entries(e).map((e,o)=>{let[i,{items:s,label:a}]=e;if("today"!==i&&!s.length)return null;let l=!!s.find(e=>{var t;return C.length>0&&e.id===(null===(t=C[0])||void 0===t?void 0:t.id)});return s.length>0&&(0,V.jsxs)(x.E.div,{className:(0,d.default)(n&&"first:mt-0","relative mt-5 empty:mt-0 empty:hidden juice:first:mt-0 juice:last:mb-5"),layout:"position",initial:{height:0,opacity:1,position:"relative"},animate:{height:"auto",opacity:1,transition:{duration:.2,ease:"easeIn"}},children:[(0,V.jsx)(x.E.div,{className:"juice:sticky juice:top-0 juice:z-20 juice:bg-token-sidebar-surface-primary",layout:"position",children:(0,V.jsx)("span",{className:"flex h-9 items-center",children:(0,V.jsx)(eg,{children:a})})},"title-".concat(i)),(0,V.jsx)("ol",{children:s.map((e,r)=>{var o;let s=t===e.id,a=null==A?void 0:A.find(t=>{let{id:n}=t;return n===e.id}),c=N&&(null===(o=C[C.length-5-1])||void 0===o?void 0:o.id)===e.id?E:void 0;return(0,V.jsx)(x.E.li,{className:(0,d.default)("relative",l&&0===r?"z-[15]":""),layout:"position",custom:{isNew:!a},variants:eu,initial:"initial",animate:"animate",exit:"exit",children:(0,V.jsx)(eo,{isPrimaryBackgroundColor:n,conversation:e,isActive:s,elementRef:c})},"history-item-".concat(e.id,"-").concat(i))})})]},"".concat(i,"-").concat(r,"-").concat(o))})},"category-".concat(r)))})})}),D&&(0,V.jsx)("div",{className:"m-4 mb-5 flex justify-center",children:(0,V.jsx)(ei.Z,{})})]})});let ef=C.Z.div(r||(r=(0,i.Z)(["flex flex-col gap-2 pb-2 text-token-text-primary text-sm juice:mt-5\n",""])),e=>{let{$centered:t}=e;return t&&"h-full justify-center items-center empty:hidden"});function em(e){let{title:t,handleDelete:n,onClose:r}=e,o=(0,M.Z)(),i=(0,a.ll)();return(0,V.jsxs)(ea.Z,{isOpen:!0,onClose:r,type:"success",title:o.formatMessage(ed.deleteModalTitle),primaryButton:(0,V.jsx)(es.Z.Button,{title:o.formatMessage(ed.deleteModalConfirm),color:"danger",onClick:()=>{n(),r()}}),secondaryButton:(0,V.jsx)(es.Z.Button,{title:o.formatMessage(ed.deleteModalCancel),color:"secondary",onClick:r}),children:[(0,V.jsx)(O.Z,ec(ec({},ed.deleteModalBody),{},{values:{title:(0,V.jsx)("strong",{children:t})}})),i&&(0,V.jsx)("div",{className:"mt-2 text-sm text-token-text-tertiary",children:(0,V.jsx)(O.Z,{id:"history.deleteModalMemoryDisclaimer",defaultMessage:"To clear any memories from this chat, visit your <link>settings</link>.",values:{link:e=>(0,V.jsx)(j(),{href:"#settings/Personalization",shallow:!0,className:"underline",children:e})}})})]})}let eg=C.Z.h3(o||(o=(0,i.Z)(["pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary"])))},29210:function(e,t,n){n.d(t,{B$:function(){return u},Yk:function(){return d},hx:function(){return h}});var r=n(94521),o=n(68029),i=n(68810);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let l=(0,o.M)(()=>({activeRequests:{}})),c=e=>(0,i.oR)(l,e);function d(e){return c(t=>null!=t.activeRequests[e])}function u(){return c(e=>Object.keys(e.activeRequests).length>0)}let h={addRequest(e,t){l.setState(n=>({activeRequests:a(a({},n.activeRequests),{},{[e]:{id:e,abortController:t}})}))},removeRequest(e){l.setState(t=>{let n=a({},t.activeRequests);return delete n[e],{activeRequests:n}})},clear(){l.setState({activeRequests:{}})},abortRequest(e){let{activeRequests:t}=l.getState();return null!=t[e]&&(t[e].abortController.abort(),h.removeRequest(e),!0)},abortRequests(e){let{activeRequests:t}=l.getState(),n=a({},t);for(let t of e)null!=n[t]&&(n[t].abortController.abort(),delete n[t]);l.setState({activeRequests:n})},abortAllRequests(){let{activeRequests:e}=l.getState();Object.values(e).forEach(e=>{e.abortController.abort()}),h.clear()}}},61885:function(e,t,n){n.d(t,{Z:function(){return g}});var r,o=n(41141),i=n(81412),s=n(41138),a=n(3028);n(59031);var l=n(48580),c=n(92379),d=n(72256),u=n(74091),h=n(44230),f=n(651);let m=u.Z.div(r||(r=(0,o.Z)(["text-sm text-token-text-tertiary"])));function g(e){let t,n,{gizmo:r,builderName:o,builderUrl:i,className:a,socials:c,hideLink:u=!1}=e,{value:g}=(0,l.sB)("chatgpt-gizmo-builder-socials");r&&"gizmo"in r?(t=r.gizmo.author.display_name,n=r.gizmo.author.link_to):(t=o,n=i),(""===t||null==t)&&(t="community builder");let y=null==c?void 0:c.filter(e=>e.verified),v=(0,f.jsxs)("div",{className:"w-48 space-y-4 text-sm",children:[n&&(0,f.jsxs)("div",{className:"flex w-full flex-row items-center justify-between",children:[(0,f.jsxs)("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[(0,f.jsx)(h.n9J,{className:"icon-md"}),(0,f.jsx)("span",{children:(0,f.jsx)(d.Z,{id:"gizmo.author.websiteLabel",defaultMessage:"Website"})})]}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n,className:"text-token-text-tertiary  hover:cursor-pointer",children:(0,f.jsx)(h.Pfi,{className:"icon-sm"})})]}),g&&(null==y?void 0:y.map((e,t)=>e.verified?(0,f.jsx)(s.lD,{socialData:e},t):null)),(0,f.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(n||y&&y.length>0)&&(0,f.jsx)("hr",{className:"my-2 border-token-border-light"}),(0,f.jsx)(d.Z,{id:"gizmo.author.cannotViewLabel",defaultMessage:"The builder of this GPT cannot view your conversations."})]})]});return(0,f.jsxs)("div",{className:"flex flex-row items-center space-x-1",children:[(0,f.jsx)(m,{className:a,children:(0,f.jsx)(d.Z,{id:"gizmo.author.byLabel",defaultMessage:"By {displayName}",values:{displayName:t}})}),!u&&(0,f.jsx)(p,{socials:c,website:n,children:v})]})}function p(e){let{website:t,socials:n,children:r}=e,{0:o,1:s}=(0,c.useState)(!1),l=[];t&&l.push((0,f.jsx)(h.n9J,{className:"icon-xs text-token-text-secondary"})),n&&n.forEach(e=>{e.verified&&("twitter"===e.type?l.push((0,f.jsx)(i.s5,{className:"icon-xs text-token-text-secondary"})):"linkedin"===e.type?l.push((0,f.jsx)(i.ao,{className:"icon-xs text-token-text-secondary"})):"github"===e.type&&l.push((0,f.jsx)(i.bO,{className:"icon-xs text-token-text-secondary"})))});let d=l.length-2;return l=l.slice(0,2),d>0&&l.push((0,f.jsxs)("span",{className:"text-xs font-semibold text-token-text-secondary",children:["+",d]},"overflow")),(0,f.jsx)(a.fC,{open:o,onOpenChange:s,children:(0,f.jsxs)("div",{onPointerLeave:()=>s(!1),children:[(0,f.jsx)(a.xz,{asChild:!0,children:(0,f.jsx)("div",{onPointerEnter:()=>s(!0),children:l.length>0?(0,f.jsx)("div",{className:"flex items-center gap-1 rounded-xl bg-token-main-surface-secondary px-2 py-1",children:l}):(0,f.jsx)(h.tBG,{className:"icon-xs text-token-text-secondary"})})}),(0,f.jsx)(a.VY,{side:"top",sideOffset:8,align:"center",className:"z-10 rounded-lg bg-token-main-surface-primary p-4 drop-shadow-md",children:r})]})})}},83252:function(e,t,n){n.d(t,{M:function(){return c},Z:function(){return l}});var r=n(55257),o=n(44230),i=n(82823),s=n(16645),a=n(651);function l(e){let{isFirstParty:t,src:n,alt:i,className:s}=e;return(0,a.jsx)("div",{className:s,children:null!=n?(0,a.jsx)("div",{className:"gizmo-shadow-stroke overflow-hidden rounded-full",children:(0,a.jsx)("img",{src:n,className:"h-full w-full bg-token-main-surface-secondary",alt:null!=i?i:"GPT",width:80,height:80})}):(0,a.jsx)("div",{className:"gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary",children:t?(0,a.jsx)(r.nI,{className:"h-2/3 w-2/3"}):(0,a.jsx)(o.uy2,{className:"h-2/3 w-2/3 text-gray-400"})})})}function c(e){var t,n;let{gizmoId:r,className:o}=e,{data:c}=(0,i.b9)(r);return(0,a.jsx)(l,{src:null==c?void 0:c.gizmo.display.profile_picture_url,isFirstParty:null!==(t=null==c||null===(n=c.gizmo.tags)||void 0===n?void 0:n.includes(s.U9.FirstParty))&&void 0!==t&&t,className:o})}},41138:function(e,t,n){n.d(t,{lD:function(){return O},s6:function(){return C},tw:function(){return M}});var r=n(94521),o=n(23212),i=n(46129),s=n(5443),a=n(67165),l=n(44230),c=n(81412),d=n(56029),u=n(83650),h=n(50684),f=n(4702),m=n(96271),g=n(35226),p=n(96053),y=n(19841),v=n(92379),x=n(72256),b=n(25940),j=n(651);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function M(e){var t,n;let{selectedDomain:r,verifiedDomains:s,domains:c,onChangeDomain:d}=e,{0:u,1:h}=(0,v.useState)(!1),g=s.length>0,p=null===(t=(0,f.t)())||void 0===t?void 0:t.id,y=null===(n=(0,f.t)())||void 0===n?void 0:n.isEnterpriseOrEdu(),{mutateAsync:b}=(0,i.Bd)(p);return(0,j.jsxs)("div",{className:"font-normal",children:[(0,j.jsxs)(a.Z.Root,{children:[(0,j.jsx)(m.xz,{children:(0,j.jsxs)("span",{className:"flex items-center gap-2 py-2",children:[null!=r?r:(0,j.jsx)(x.Z,w({},P.selectADomain)),(0,j.jsx)(l.T2M,{className:"icon-md"})]})}),(0,j.jsx)(a.Z.Portal,{children:(0,j.jsxs)(a.Z.Content,{children:[(0,j.jsx)(a.Z.RadioGroup,{value:r,onValueChange:e=>{e!==r&&d(e)},children:s.map(e=>{let{id:t,hostname:n}=e;return(0,j.jsx)(a.Z.RadioItem,{value:n,children:(0,j.jsxs)("div",{className:"flex flex-row",children:[(0,j.jsx)("span",{children:n}),(0,j.jsx)("span",{onClick:()=>{b({domainId:t}),d("")},children:(0,j.jsx)(l.XHJ,{className:"icon-sm fixed right-4"})})]})},t)})}),g&&(0,j.jsx)(a.Z.Separator,{}),(0,j.jsx)(a.Z.Item,{onClick:()=>{h(!0)},icon:l.Vz5,children:(0,j.jsx)(x.Z,w({},P.addDomain))})]})})]}),p&&!y&&(0,j.jsx)(o.Z,{domains:c,isOpen:u,onClose:()=>h(!1),workspaceId:p,showUnverifiedDomains:!0,onVerifyDomain:e=>{d(e.hostname)}})]})}function O(e){let{socialData:t}=e,{type:n,display_name:r,verified_data:o}=t,i="twitter"===n?c.s5:"linkedin"===n?c.ao:"github"===n?c.bO:null;return i?(0,j.jsxs)("div",{className:"flex w-full flex-row items-center justify-between",children:[(0,j.jsxs)("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[i({className:"icon-md"}),(0,j.jsx)("span",{children:r})]}),(null==o?void 0:o.link_to)&&(0,j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:o.link_to,className:"text-sm text-token-text-tertiary  hover:cursor-pointer",children:(0,j.jsx)(l.Pfi,{className:"icon-sm"})})]}):null}function C(e){let{socialData:t,icon:n}=e,{id:r,type:o,display_name:i,verified:a,verified_data:c}=t,{0:f,1:m}=(0,v.useState)(!1),b=function(){let e=(0,g.NL)();return(0,p.D)({mutationFn:e=>{let{verifierType:t}=e;return d.U.unverifySocialAuth(t)},onSuccess:()=>{e.refetchQueries({queryKey:["builderProfile"]})}})}();return(0,j.jsxs)("div",{className:"flex flex-row items-center justify-between space-y-1",children:[(0,j.jsxs)("div",{className:(0,y.default)("flex items-center space-x-2"),children:[(0,j.jsx)(n,{className:"icon-sm"}),(0,j.jsx)("span",{children:i}),a&&(null==c?void 0:c.username)&&(0,j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:c.link_to,className:"text-sm text-token-text-tertiary hover:cursor-pointer",children:null==c?void 0:c.username})]}),a?(0,j.jsx)("div",{className:"py-1 font-semibold hover:cursor-pointer",onClick:()=>{b.mutate({verifierType:o})},children:b.isPending?(0,j.jsx)(h.Z,{}):(0,j.jsx)(l.tPq,{className:"icon-sm text-token-text-tertiary"})}):(0,j.jsx)(s.z,{size:"small",color:"secondary",loading:f,onClick:async()=>{m(!0),await (0,u.U)({id:r},"#settings/BuilderProfile"),m(!1)},children:(0,j.jsx)(x.Z,w({},P.verify))})]})}let P=(0,b.vU)({verify:{defaultMessage:"Add",id:"GizmoSocialRow.add"},addDomain:{id:"GizmoSocialRow.addDomain",defaultMessage:"Verify new domain"},selectADomain:{id:"GizmoSocialRow.selectADomain",defaultMessage:"Select a domain"}})},83650:function(e,t,n){n.d(t,{U:function(){return o},doConnectorOauthRedirect:function(){return i},w:function(){return s}});var r=n(93223);async function o(e,t){let n="".concat("https://chat.openai.com","/aip/").concat(e.id,"/oauth/callback"),o=await r.Z.pluginOauthRedirect(e.id,n,t);window.location.href=o.redirect_uri}async function i(e,t){let n="".concat(window.location.origin,"/ccc/").concat(e.id,"/oauth/callback"),o=await r.Z.connectorOauthRedirect(e.id,n,t);window.location.href=o.redirect_uri}async function s(e){await r.Z.deleteUserConnectedApp(e),window.location.reload()}},92677:function(e,t,n){n.d(t,{MO:function(){return c},aM:function(){return d},wT:function(){return l}});var r=n(4702),o=n(16100),i=n(92379),s=n(93223),a=n(27603);let l="conversationHistory";function c(){var e;let t=(0,r.hz)(),n=null!==(e=null==t?void 0:t.includes(a.Ud))&&void 0!==e&&e,c=(0,r.t)(),d=!n&&!!(null!=c&&c.data),{data:u,fetchNextPage:h,hasNextPage:f,isInitialLoading:m,isFetchingNextPage:g,isError:p}=(0,o.N)({queryKey:[l],queryFn:e=>{let{pageParam:t}=e;return s.Z.getConversations({offset:t,limit:28})},initialPageParam:0,getNextPageParam:e=>{let t=e.offset+e.limit;return t<e.total?t:void 0},enabled:d}),y=(0,i.useMemo)(()=>{var e;return null!==(e=null==u?void 0:u.pages.flatMap(e=>e.items))&&void 0!==e?e:[]},[u]);return{data:u,conversations:y,fetchNextPage:h,hasNextPage:f,isLoading:m,isFetchingNextPage:g,isError:d&&p}}function d(e){e.invalidateQueries({queryKey:[l]})}},92558:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(94521),o=n(36560),i=n.n(o);class s{constructor(){(0,r.Z)(this,"emitter",new(i())),this.emitter.setMaxListeners(1e3)}on(e,t){this.emitter.on(e,t)}off(e,t){this.emitter.off(e,t)}publish(e){this.emitter.emit(e.kind,e),this.emitter.emit("anyEvent",e)}}},84468:function(e,t,n){n.d(t,{ll:function(){return l},tW:function(){return c},tv:function(){return u},u1:function(){return d}});var r=n(21904),o=n(43852),i=n(4702),s=n(27603),a=n(48580);function l(){var e,t;return null!==(e=null===(t=(0,i.hz)())||void 0===t?void 0:t.includes(s.L0.Sunshine))&&void 0!==e&&e}function c(){let{data:e}=(0,o.R1)(r.sh.Sunshine),t=l();return!!e&&t}function d(){var e;let t=c(),n=null!==(e=(0,a.sB)("chatgpt-memory-storage-management").value)&&void 0!==e&&e;return t&&n}function u(){var e,t;return null!==(e=null===(t=(0,i.hz)())||void 0===t?void 0:t.includes(s.L0.MemoryGA))&&void 0!==e&&e}},32512:function(e,t,n){n.d(t,{n:function(){return N},A3:function(){return P},yx:function(){return L},JS:function(){return D}});var r,o=n(94521),i=n(15858),s=n(37275),a=n(93747),l=n(15236),c=n(48538),d=n(59031),u=n(61888),h=n(92379),f=n(25940),m=n(85734),g=n(94982),p=n(86021),y=n(55371),v=n(92558),x=n(92524),b=n(45248);let j=h.useLayoutEffect;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let w=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;var M=((r=M||{}).Core="Core",r.Chat="Chat",r.Settings="Settings",r);let O=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({Mod:"mod",Comma:","},i.s),C={[O.Mod]:/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl",[O.Comma]:",",[O.Enter]:"⏎",[O.Escape]:"Esc",[O.ArrowUp]:"↑",[O.ArrowDown]:"↓",[O.ArrowLeft]:"←",[O.ArrowRight]:"→",[O.Backspace]:"⌫",[O.Delete]:"⌦",[O.Tab]:"⇥",[O.Control]:"Ctrl",[O.Shift]:"Shift"},P=e=>e.map(e=>{var t;return null!==(t=C[e])&&void 0!==t?t:e}),T=(0,f.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),N=new v.V,S=e=>{let{resetThreadAction:t,clientThreadId:n}=e;return[{key:"newChat",action:t||u.noop,actionMessageDescriptor:T.newChat,group:M.Core,keyboardBinding:[O.Mod,O.Shift,"o"],altKeyboardBindings:[[O.Mod,"k"]]},{key:"focusPromptTextarea",action:s.go,actionMessageDescriptor:T.focusPromptTextarea,group:M.Chat,keyboardBinding:[O.Shift,O.Escape]},{key:"copyLastCodeBlock",action:()=>{if(null!=n){let e=p.tQ.getThreadCurrentLeafId(n),t=p.tQ.getThreadConversationTurns(n,e);for(let e=t.length-1;e>=0;e--){let{messages:n}=t[e],r=[...n.reduce((e,t)=>null==t.err&&t.message.author.role===m.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,x.RR)(t.message):e,"").matchAll(w)],o=r.length?r[r.length-1][1]:null;if(null!=o){(0,c.v)(o).then(()=>{g.m.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:T.copyLastCodeBlock,group:M.Chat,keyboardBinding:[O.Mod,O.Shift,";"],altKeyboardBindings:[[O.Mod,O.Shift,":"]]},{key:"copyLastResponse",action:()=>{null!=n&&p.tQ.copyLastMessageToClipboard(n,"keyboard").then(()=>{g.m.success("Last response copied to clipboard")})},actionMessageDescriptor:T.copyLastResponse,group:M.Chat,keyboardBinding:[O.Mod,O.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>y.vm.toggleModal(y.B.UserContext),actionMessageDescriptor:T.toggleCustomInstructions,group:M.Settings,keyboardBinding:[O.Mod,O.Shift,"i"]},{key:"navigationToggle",action:()=>y.vm.toggleDesktopNavCollapsed(),actionMessageDescriptor:T.navigationToggle,group:M.Core,keyboardBinding:[O.Mod,O.Shift,"s"]},{key:"deleteChat",action:()=>{if(n){let e=p.tQ.getServerThreadId(n);e&&N.publish({kind:"deleteChat",serverThreadId:e})}},actionMessageDescriptor:T.deleteChat,group:M.Chat,keyboardBinding:[O.Mod,O.Shift,O.Backspace],altKeyboardBindings:[[O.Mod,O.Shift,O.Delete]]},{key:"toggleKeyboardActions",action:()=>y.vm.toggleModal(y.B.KeyboardActions),actionMessageDescriptor:T.toggleKeyboardActions,group:M.Settings,keyboardBinding:[O.Mod,"/"]}]},Z=e=>(function(e,t,n){let r=e.map(e=>{let{keyboardBinding:t}=e,n=t.join("+");if(e.altKeyboardBindings){n=[n];let t=e.altKeyboardBindings.map(e=>e.join("+"));n=n.concat(t)}return(0,b.ZP)(n,{byKey:!0})});j(()=>{if((null==n?void 0:n.enabled)===!1)return;let o=n=>{if(!n.repeat)for(let o=0;o<r.length;o++)r[o](n)&&(void 0===e[o].enabled||e[o].enabled)&&(n.preventDefault(),t(e[o]),e[o].action())},i=e=>{void 0!==e.key&&o(e)},s=document;return s.addEventListener("keydown",i),()=>{s.removeEventListener("keydown",i)}},[e,n])})(e,e=>{a.A.logEvent(l.M.keyboardShortcut,{keyboardActionKey:e.key}),d.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},{enabled:!0}),D=function(){let{resetThreadAction:e,clientThreadId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,h.useMemo)(()=>S({resetThreadAction:e,clientThreadId:t}).filter(e=>{let{enabled:t=!0}=e;return t}),[t,e])},L=e=>{let{resetThreadAction:t,clientThreadId:n}=e;Z(D({resetThreadAction:t,clientThreadId:n}))}},79688:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(92379);function o(){let e=(0,r.useRef)([]),t=(0,r.useRef)((t,n)=>{let r=setTimeout(t,n);return e.current.push(r),r});return(0,r.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},99331:function(e,t,n){n.d(t,{Ef:function(){return m},UG:function(){return g},dG:function(){return c},gb:function(){return p},mK:function(){return f}});var r,o=n(94521),i=n(25704),s=n(59031),a=n(92379);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let c=((r={}).SonicHome="sonic.web.home",r.SonicServer="sonic.ssr.search",r.ChatPageLoad="chatgpt.web.pageLoad",r.CompletionRequest="chatgpt.web.completionRequest",r);class d{constructor(e,t){var n,r;(0,o.Z)(this,"expectedTimingLogTimeouts",{}),(0,o.Z)(this,"startMs",-1),(0,o.Z)(this,"lastLogMs",-1),(0,o.Z)(this,"loggedTimings",new Set),(0,o.Z)(this,"timingBlocks",{}),(0,o.Z)(this,"debug",!1),this.namespace=e,this.expectedTimingLogs=null!==(n=null==t?void 0:t.expectedTimingLogs)&&void 0!==n?n:[],this.debug=null!==(r=null==t?void 0:t.debug)&&void 0!==r&&r,this.reset()}reset(){for(let e of(this.startMs=this.lastLogMs=performance.now(),this.timingBlocks={},this.loggedTimings=new Set,Object.values(this.expectedTimingLogTimeouts)))clearTimeout(e);for(let e of(this.expectedTimingLogTimeouts={},this.expectedTimingLogs)){let t=setTimeout(()=>{s.U.addAction("".concat(this.namespace,".").concat(e.name,".timed_out"))},e.expectedInMs);this.expectedTimingLogTimeouts[e.name]=t,this.debug&&console.debug("[DatadogProfiler] Expecting ".concat(this.namespace,".").concat(e.name," to be logged within ").concat(e.expectedInMs,"ms"))}}logTiming(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromLastLog:!1};if(this.loggedTimings.has(e)){console.warn("[DatadogProfiler] Timing ".concat(this.namespace,".").concat(e," already logged"));return}let n=performance.now()-(t.fromLastLog?this.lastLogMs:this.startMs);s.U.addAction("".concat(this.namespace,".").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({durationMs:n},t.context)),this.lastLogMs=performance.now(),this.loggedTimings.add(e),e in this.expectedTimingLogTimeouts&&(clearTimeout(this.expectedTimingLogTimeouts[e]),delete this.expectedTimingLogTimeouts[e]),this.debug&&console.debug("[DatadogProfiler] ".concat(this.namespace,".").concat(e,": ").concat(n,"ms"))}startBlock(e){this.timingBlocks[e]=performance.now()}endBlock(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{throwError:!0},n=this.timingBlocks[e];if(void 0===n&&t.throwError)throw Error("Block ".concat(e," not started"));let r=performance.now()-n;s.U.addAction("".concat(this.namespace,".").concat(e),{durationMs:r}),delete this.timingBlocks[e]}}let u={},h="__global__";function f(e){let{namespace:t,key:n=h,opts:r}=e;void 0===u[t]&&(u[t]={});let o=(0,i.S)(u[t]);return void 0!==o[n]&&s.U.addError("Profiler already exists for namespace ".concat(t," and key ").concat(n)),o[n]=new d(t,r),o[n]}function m(e){let{namespace:t,key:n=h}=e;if(void 0!==u[t])return(0,i.S)(u[t])[n]}function g(e){let{namespace:t,key:n=h}=e;if(void 0!==u[t]){let e=(0,i.S)(u[t]);delete e[n]}}function p(e){let{namespace:t,key:n=h,opts:r}=e,{0:o}=(0,a.useState)(()=>f({namespace:t,key:n,opts:r}));return o}}}]);
//# sourceMappingURL=8025-f148a7a009e2dde6.js.map