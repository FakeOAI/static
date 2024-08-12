"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7373],{64216:function(e,t,n){var r=n(79746),i=n(11550),o=n(41619),s=n(651);t.Z=e=>{let{label:t,value:n,onCopied:a}=e,l=()=>{(0,r.v)(n),a()};return(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[void 0!==t&&(0,s.jsx)("label",{className:"font-semibold",children:t}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{onClick:l,className:"w-full cursor-pointer break-all rounded-lg bg-token-main-surface-tertiary px-4 py-2 font-mono text-sm text-token-text-primary",children:n}),(0,s.jsx)(i.z,{color:"ghost",onClick:l,icon:o.TIy})]})]})}},88491:function(e,t,n){n.d(t,{Z:function(){return P}});var r,i=n(98601),o=n(99333),s=n(11550),a=n(64216),l=n(6440),c=n(59144),d=n(36792),u=n(41619),f=n(24434),m=n(24740),p=n(2721),g=n(42420),h=n(56032),x=n(92379),b=n(75172),v=n(62984),j=n(68306),y=n(12310),w=n(651);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=((r=N||{})[r.INITIAL=0]="INITIAL",r[r.PENDING=1]="PENDING",r[r.FINAL=2]="FINAL",r);function P(e){let{workspaceId:t,isOpen:n,onClose:r,currentDomain:i,domains:s=[],showUnverifiedDomains:l=!1,onVerifyDomain:d}=e,u=(0,b.Z)(),{mutateAsync:j,isPending:y}=function(e){let t=(0,g.NL)();return(0,h.D)({mutationFn:t=>{let{hostname:n}=t;return p.Z.addDomainToWorkspace(e,n)},onSuccess:()=>{t.invalidateQueries({queryKey:["workspace/identity",e]}),t.invalidateQueries({queryKey:["builderProfile"]})},onError:e=>{m.m.danger(e.message)}})}(t),{mutateAsync:k,isPending:P}=function(e){let t=(0,g.NL)();return(0,h.D)({mutationFn:t=>{let{domainId:n}=t;return p.Z.checkDomainForWorkspace(e,n)},onSuccess:()=>{t.invalidateQueries({queryKey:["workspace/identity",e]}),t.invalidateQueries({queryKey:["builderProfile"]})},onError:e=>{m.m.danger(e.message)}})}(t),{0:M,1:T}=(0,x.useState)(null!=i?i:void 0),{0:C,1:S}=(0,x.useState)(null==i?void 0:i.hostname),{0:I,1:E}=(0,x.useState)((null==i?void 0:i.status)===void 0?N.INITIAL:(null==i?void 0:i.status)===o.pT.PENDING?N.PENDING:N.FINAL),_=()=>{i||(T(void 0),E(N.INITIAL))},L=async()=>{if(void 0===C)return;let e=s.find(e=>e.hostname===C&&e.status===o.pT.PENDING);if(e)T(e),E(N.PENDING);else{let e=await j({hostname:C});"id"in e&&T(e),E(N.PENDING)}},A=(0,w.jsx)(c.Z.Button,{title:u.formatMessage(D.check),color:"primary",disabled:(null==M?void 0:M.id)===void 0||P,onClick:async()=>{if(null!=M&&M.id){let e=await k({domainId:M.id});"error"in e&&m.m.danger(u.formatMessage(D.domainCheckError,{message:e.error.message})),"id"in e&&(d&&d(e),e.status===o.pT.VERIFIED&&E(N.FINAL))}}}),z=(0,w.jsx)(c.Z.Button,{title:u.formatMessage(D.submit),color:"primary",disabled:void 0===C||y,onClick:L}),R=(0,w.jsx)(c.Z.Button,{title:u.formatMessage(D.done),color:"primary",onClick:()=>{_(),r()}});return(0,w.jsxs)(f.Z,{isOpen:n,onClose:()=>{_(),r()},type:"success",className:"text-token-text-secondary",title:u.formatMessage(I===N.INITIAL?D.newTitle:D.editTitle),primaryButton:I===N.INITIAL?z:I===N.PENDING?A:R,secondaryButton:(0,w.jsx)(c.Z.Button,{title:u.formatMessage(D.cancel),color:"secondary",onClick:()=>{_(),r()}}),children:[I===N.INITIAL&&(0,w.jsx)(Z,{hostname:C,onSetHostname:S,onSubmit:L,unverifiedDomains:l?s:[],onVerifyDomain:e=>{E(N.PENDING),T(e)},workspaceId:t}),I===N.PENDING&&(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[u.formatMessage(D.verificationTokenMessage,{hostname:null==M?void 0:M.hostname}),(null==M?void 0:M.dns_verification_token_string)&&(0,w.jsx)(a.Z,{value:M.dns_verification_token_string,onCopied:()=>{m.m.success(u.formatMessage(D.copiedTXTRecordToClipboard),{duration:3})}}),(0,w.jsx)(v.Z,O({},D.verificationTokenFooter))]}),I===N.FINAL&&(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsx)(v.Z,O(O({},D.successfulVerification),{},{values:{hostname:null==M?void 0:M.hostname}})),(null==M?void 0:M.dns_verification_token_string)&&(0,w.jsx)(a.Z,{value:M.dns_verification_token_string,onCopied:()=>{m.m.success(u.formatMessage(D.copiedTXTRecordToClipboard),{duration:3})}})]})]})}function M(e){let{unverifiedDomains:t,onVerifyDomain:n,workspaceId:r}=e,{mutateAsync:i}=(0,y.Bd)(r);return(0,w.jsxs)(d.Z.Root,{fixed:!0,size:"compact",className:"mb-6 border-b border-token-border-light",children:[(0,w.jsxs)(d.Z.Header,{children:[(0,w.jsx)(d.Z.HeaderCell,{children:(0,w.jsx)(v.Z,O({},D.unverifiedDomainsTableHeader))}),(0,w.jsx)(d.Z.HeaderCell,{textAlign:"right"})]}),t.map(e=>(0,w.jsxs)(d.Z.Row,{children:[(0,w.jsx)(d.Z.Cell,{children:e.hostname}),(0,w.jsx)(d.Z.Cell,{textAlign:"right",children:(0,w.jsxs)("div",{className:"flex gap-2",children:[(0,w.jsx)(s.z,{color:"secondary",size:"small",onClick:()=>n(e),children:(0,w.jsx)(v.Z,O({},D.verifyDomainButton))}),(0,w.jsx)(s.z,{color:"secondary",size:"small",onClick:()=>i({domainId:e.id}),icon:u.XHJ})]})})]},e.id))]})}function Z(e){let{hostname:t,onSetHostname:n,onSubmit:r,unverifiedDomains:i,onVerifyDomain:o,workspaceId:s}=e,a=(0,b.Z)();return(0,w.jsxs)(w.Fragment,{children:[i&&i.length>0&&(0,w.jsx)(M,{workspaceId:s,unverifiedDomains:i,onVerifyDomain:o}),(0,w.jsx)("form",{onSubmit:e=>{e.preventDefault(),r()},children:(0,w.jsxs)("div",{className:"mb-4",children:[(0,w.jsx)("label",{className:"mb-2 flex items-center text-sm font-semibold",children:(0,w.jsx)(v.Z,O({},D.domainInput))}),(0,w.jsx)(l.Z,{name:"hostname",placeholder:a.formatMessage(D.placeholder),value:null!=t?t:"",onChange:e=>{n(e.target.value)}})]})})]})}let D=(0,j.vU)({newTitle:{id:"domainModal.newTitle.0",defaultMessage:"Verify a new domain"},editTitle:{id:"domainModal.editTitle",defaultMessage:"Manage Domain"},submit:{id:"domainModal.submit",defaultMessage:"Submit"},check:{id:"domainModal.check",defaultMessage:"Check"},done:{id:"domainModal.done",defaultMessage:"Done"},cancel:{id:"domainModal.cancel",defaultMessage:"Cancel"},domainInput:{id:"domainModal.domainInput.0",defaultMessage:"Add a new domain"},placeholder:{id:"domainModal.placeholder",defaultMessage:"openai.com"},domainCheckError:{id:"domainModal.domainCheckError",defaultMessage:"Your domain could not be verified: {message}"},verificationTokenMessage:{id:"domainModal.verificationTokenMessage",defaultMessage:"To verify ownership of {hostname}, navigate to your DNS provider and add a TXT record with this value:"},verificationTokenFooter:{id:"domainModal.verificationTokenFooter",defaultMessage:"Then, check the record to complete the verification."},successfulVerification:{id:"domainModal.successfulVerification.0",defaultMessage:'Your domain, "{hostname}" has been successfully verified'},copiedTXTRecordToClipboard:{id:"domainModal.copiedTXTRecordToClipboard",defaultMessage:"Copied DNS TXT record to clipboard"},verifyDomainButton:{id:"domainModal.verifyDomainButton",defaultMessage:"Verify"},unverifiedDomainsTableHeader:{id:"domainModal.unverifiedDomainsTableHeader",defaultMessage:"Your unverified domains"}})},81522:function(e,t,n){n.d(t,{B$:function(){return u},Yk:function(){return d},hx:function(){return f}});var r=n(98601),i=n(68029),o=n(68810);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let l=(0,i.M)(()=>({activeRequests:{}})),c=e=>(0,o.oR)(l,e);function d(e){return c(t=>null!=t.activeRequests[e])}function u(){return c(e=>Object.keys(e.activeRequests).length>0)}let f={addRequest(e,t){l.setState(n=>({activeRequests:a(a({},n.activeRequests),{},{[e]:{id:e,abortController:t}})}))},removeRequest(e){l.setState(t=>{let n=a({},t.activeRequests);return delete n[e],{activeRequests:n}})},clear(){l.setState({activeRequests:{}})},abortRequest(e){let{activeRequests:t}=l.getState();return null!=t[e]&&(t[e].abortController.abort(),f.removeRequest(e),!0)},abortRequests(e){let{activeRequests:t}=l.getState(),n=a({},t);for(let t of e)null!=n[t]&&(n[t].abortController.abort(),delete n[t]);l.setState({activeRequests:n})},abortAllRequests(){let{activeRequests:e}=l.getState();Object.values(e).forEach(e=>{e.abortController.abort()}),f.clear()}}},83036:function(e,t,n){n.d(t,{Z:function(){return p}});var r,i=n(2346),o=n(42110),s=n(10449);n(82363);var a=n(88667),l=n(92379),c=n(62984),d=n(15478),u=n(41619),f=n(651);let m=d.Z.div(r||(r=(0,i.Z)(["text-sm text-token-text-tertiary"])));function p(e){let t,n,{gizmo:r,builderName:i,builderUrl:s,className:l,socials:d,hideLink:p=!1}=e,{value:h}=(0,a.sB)("2256850471");r&&"gizmo"in r?(t=r.gizmo.author.display_name,n=r.gizmo.author.link_to):(t=i,n=s),(""===t||null==t)&&(t="community builder");let x=null==d?void 0:d.filter(e=>e.verified),b=(0,f.jsxs)("div",{className:"w-48 space-y-4 text-sm",children:[n&&(0,f.jsxs)("div",{className:"flex w-full flex-row items-center justify-between",children:[(0,f.jsxs)("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[(0,f.jsx)(u.n9J,{className:"icon-md"}),(0,f.jsx)("span",{children:(0,f.jsx)(c.Z,{id:"gizmo.author.websiteLabel",defaultMessage:"Website"})})]}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n,className:"text-token-text-tertiary hover:cursor-pointer",children:(0,f.jsx)(u.Pfi,{className:"icon-sm"})})]}),h&&(null==x?void 0:x.map((e,t)=>e.verified?(0,f.jsx)(o.lD,{socialData:e},t):null)),(0,f.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(n||x&&x.length>0)&&(0,f.jsx)("hr",{className:"my-2 border-token-border-light"}),(0,f.jsx)(c.Z,{id:"gizmo.author.cannotViewLabel",defaultMessage:"The builder of this GPT cannot view your conversations."})]})]});return(0,f.jsxs)("div",{className:"flex flex-row items-center space-x-1",children:[(0,f.jsx)(m,{className:l,children:(0,f.jsx)(c.Z,{id:"gizmo.author.byLabel",defaultMessage:"By {displayName}",values:{displayName:t}})}),!p&&(0,f.jsx)(g,{socials:d,website:n,children:b})]})}function g(e){let{website:t,socials:n,children:r}=e,{0:i,1:o}=(0,l.useState)(!1),a=[];t&&a.push((0,f.jsx)(u.n9J,{className:"icon-xs text-token-text-secondary"})),n&&n.forEach(e=>{e.verified&&("twitter"===e.type?a.push((0,f.jsx)(u.suT,{className:"icon-xs text-token-text-secondary"})):"linkedin"===e.type?a.push((0,f.jsx)(u.O9,{className:"icon-xs text-token-text-secondary"})):"github"===e.type&&a.push((0,f.jsx)(u.C2$,{className:"icon-xs text-token-text-secondary"})))});let c=a.length-2;return a=a.slice(0,2),c>0&&a.push((0,f.jsxs)("span",{className:"text-xs font-semibold text-token-text-secondary",children:["+",c]},"overflow")),(0,f.jsx)(s.fC,{open:i,onOpenChange:o,children:(0,f.jsxs)("div",{onPointerLeave:()=>o(!1),children:[(0,f.jsx)(s.xz,{asChild:!0,children:(0,f.jsx)("div",{onPointerEnter:()=>o(!0),children:a.length>0?(0,f.jsx)("div",{className:"flex items-center gap-1 rounded-xl bg-token-main-surface-secondary px-2 py-1",children:a}):(0,f.jsx)(u.tBG,{className:"icon-xs text-token-text-secondary"})})}),(0,f.jsx)(s.VY,{side:"top",sideOffset:8,align:"center",className:"z-10 rounded-lg bg-token-main-surface-primary p-4 drop-shadow-md",children:r})]})})}},12128:function(e,t,n){n.d(t,{M:function(){return c},Z:function(){return l}});var r=n(25162),i=n(41619),o=n(39004),s=n(10080),a=n(651);function l(e){let{isFirstParty:t,src:n,alt:o,className:s}=e;return(0,a.jsx)("div",{className:s,children:null!=n?(0,a.jsx)("div",{className:"gizmo-shadow-stroke overflow-hidden rounded-full",children:(0,a.jsx)("img",{src:n,className:"h-full w-full bg-token-main-surface-secondary",alt:null!=o?o:"GPT",width:80,height:80})}):(0,a.jsx)("div",{className:"gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary",children:t?(0,a.jsx)(r.nI,{className:"h-2/3 w-2/3"}):(0,a.jsx)(i.uy2,{className:"h-2/3 w-2/3 text-gray-400"})})})}function c(e){var t,n;let{gizmoId:r,className:i}=e,{data:c}=(0,o.b9)(r);return(0,a.jsx)(l,{src:null==c?void 0:c.gizmo.display.profile_picture_url,isFirstParty:null!==(t=null==c||null===(n=c.gizmo.tags)||void 0===n?void 0:n.includes(s.U9.FirstParty))&&void 0!==t&&t,className:i})}},25899:function(e,t,n){n.d(t,{Dd:function(){return r},L5:function(){return o},P_:function(){return a},aI:function(){return s},vi:function(){return l},zf:function(){return i}});let r="ChatGPT",i="Untitled",o=10,s=50,a=300,l=8e3},71090:function(e,t,n){n.d(t,{A7:function(){return b},QT:function(){return v},Xb:function(){return y},cY:function(){return j},f8:function(){return w}});var r,i=n(98601),o=n(52088),s=n(2346),a=n(55963),l=n(43991),c=n(19841),d=n(92379),u=n(15478),f=n(11550),m=n(30853),p=n(651);let g=["tooltip","className"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let b=56,v=u.Z.div(r||(r=(0,s.Z)(["sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-14 font-semibold bg-token-main-surface-primary"]))),j=(0,d.forwardRef)(function(e,t){var n;let{tooltip:r,className:i}=e,s=(0,o.Z)(e,g),a=(0,p.jsx)(f.z,x(x({color:null!==(n=e.color)&&void 0!==n?n:"secondary",size:"medium"},s),{},{className:i,ref:t}));return null!=r?(0,p.jsx)(m.u,{label:r,children:a}):a});function y(e){let{label:t,disabled:n=!1,tooltipText:r,value:i}=e,o=(0,d.useId)();return(0,p.jsx)("div",{className:(0,c.default)("flex items-center gap-2",n?"opacity-50":""),children:(0,p.jsx)(m.E,{disabled:null==r,label:r,side:"right",children:(0,p.jsxs)("label",{htmlFor:o,className:"flex cursor-pointer items-center gap-1",children:[(0,p.jsx)(l.ck,{id:o,value:i,disabled:n,className:"mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 bg-white dark:border-gray-600 dark:bg-gray-700",children:(0,p.jsx)(l.z$,{className:"h-2 w-2 rounded-full bg-gray-950 dark:bg-white"})}),t]})})})}function w(e){return(0,p.jsx)(a.Z,x(x({},e),{},{className:(0,c.default)("!rounded border-gray-950 checked:!bg-black dark:border-gray-600 dark:bg-gray-700",e.className)}))}},42110:function(e,t,n){n.d(t,{lD:function(){return O},s6:function(){return N},tw:function(){return k}});var r=n(98601),i=n(88491),o=n(12310),s=n(11550),a=n(98095),l=n(41619),c=n(99555),d=n(81690),u=n(97537),f=n(93951),m=n(54089),p=n(42420),g=n(56032),h=n(19841),x=n(92379),b=n(62984),v=n(68306),j=n(651);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e){var t,n;let{selectedDomain:r,verifiedDomains:s,domains:c,onChangeDomain:d}=e,{0:u,1:p}=(0,x.useState)(!1),g=s.length>0,h=null===(t=(0,f.t)())||void 0===t?void 0:t.id,v=null===(n=(0,f.t)())||void 0===n?void 0:n.isEnterprisey(),{mutateAsync:y}=(0,o.Bd)(h);return(0,j.jsxs)("div",{className:"font-normal",children:[(0,j.jsxs)(a.Z.Root,{children:[(0,j.jsx)(m.xz,{children:(0,j.jsxs)("span",{className:"flex items-center gap-2 py-2",children:[null!=r?r:(0,j.jsx)(b.Z,w({},P.selectADomain)),(0,j.jsx)(l.T2M,{className:"icon-md"})]})}),(0,j.jsx)(a.Z.Portal,{children:(0,j.jsxs)(a.Z.Content,{children:[(0,j.jsx)(a.Z.RadioGroup,{value:r,onValueChange:e=>{e!==r&&d(e)},children:s.map(e=>{let{id:t,hostname:n}=e;return(0,j.jsx)(a.Z.RadioItem,{value:n,children:(0,j.jsxs)("div",{className:"flex flex-row",children:[(0,j.jsx)("span",{children:n}),(0,j.jsx)("span",{onClick:()=>{y({domainId:t}),d("")},children:(0,j.jsx)(l.XHJ,{className:"icon-sm fixed right-4"})})]})},t)})}),g&&(0,j.jsx)(a.Z.Separator,{}),(0,j.jsx)(a.Z.Item,{onClick:()=>{p(!0)},icon:l.Vz5,children:(0,j.jsx)(b.Z,w({},P.addDomain))})]})})]}),h&&!v&&(0,j.jsx)(i.Z,{domains:c,isOpen:u,onClose:()=>p(!1),workspaceId:h,showUnverifiedDomains:!0,onVerifyDomain:e=>{d(e.hostname)}})]})}function O(e){let{socialData:t}=e,{type:n,display_name:r,verified_data:i}=t,o="twitter"===n?l.suT:"linkedin"===n?l.O9:"github"===n?l.C2$:null;return o?(0,j.jsxs)("div",{className:"flex w-full flex-row items-center justify-between",children:[(0,j.jsxs)("div",{className:"flex flex-row items-center space-x-2 text-token-text-primary",children:[o({className:"icon-md"}),(0,j.jsx)("span",{children:r})]}),(null==i?void 0:i.link_to)&&(0,j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:i.link_to,className:"text-sm text-token-text-tertiary hover:cursor-pointer",children:(0,j.jsx)(l.Pfi,{className:"icon-sm"})})]}):null}function N(e){let{socialData:t,icon:n}=e,{id:r,type:i,display_name:o,verified:a,verified_data:f}=t,{0:m,1:v}=(0,x.useState)(!1),y=function(){let e=(0,p.NL)();return(0,g.D)({mutationFn:e=>{let{verifierType:t}=e;return c.U.unverifySocialAuth(t)},onSuccess:()=>{e.refetchQueries({queryKey:["builderProfile"]})}})}();return(0,j.jsxs)("div",{className:"flex flex-row items-center justify-between space-y-1",children:[(0,j.jsxs)("div",{className:(0,h.default)("flex items-center space-x-2"),children:[(0,j.jsx)(n,{className:"icon-sm"}),(0,j.jsx)("span",{children:o}),a&&(null==f?void 0:f.username)&&(0,j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:f.link_to,className:"text-sm text-token-text-tertiary hover:cursor-pointer",children:null==f?void 0:f.username})]}),a?(0,j.jsx)("div",{className:"py-1 font-semibold hover:cursor-pointer",onClick:()=>{y.mutate({verifierType:i})},children:y.isPending?(0,j.jsx)(u.Z,{}):(0,j.jsx)(l.tPq,{className:"icon-sm text-token-text-tertiary"})}):(0,j.jsx)(s.z,{size:"small",color:"secondary",loading:m,onClick:async()=>{v(!0),await (0,d.Up)({id:r},"#settings/BuilderProfile"),v(!1)},children:(0,j.jsx)(b.Z,w({},P.verify))})]})}let P=(0,v.vU)({verify:{defaultMessage:"Add",id:"GizmoSocialRow.add"},addDomain:{id:"GizmoSocialRow.addDomain",defaultMessage:"Verify new domain"},selectADomain:{id:"GizmoSocialRow.selectADomain",defaultMessage:"Select a domain"}})},53114:function(e,t,n){n.d(t,{CT:function(){return L},EN:function(){return E},M3:function(){return R},cP:function(){return A}});var r=n(59725),i=n(98095),o=n(41619),s=n(89692),a=n(83322),l=n(2118),c=n(56625),d=n(52503),u=n(91496),f=n(56409),m=n(69539),p=n(93951),g=n(53132),h=n(92745),x=n(86025),b=n(82821),v=n(31438),j=n(15913),y=n(28086),w=n(58695),k=n(99976),O=n(61619),N=n(88667),P=n(45120),M=n(34977),Z=n(75172),D=n(62984),T=n(11550),C=n(30853),S=n(30478),I=n(651);function E(e){let{showShareButton:t,showVoiceButton:n,clientThreadId:r}=e,i=(0,h.XK)(r),s=(0,Z.Z)(),{isUnauthenticated:a}=(0,x.u)();return(0,I.jsxs)(I.Fragment,{children:[n&&(0,I.jsx)(f.m2,{conversationId:r}),t&&i&&(0,I.jsx)(C.u,{label:s.formatMessage({id:"CPEfES",defaultMessage:"Share chat"}),children:(0,I.jsx)(l.W,{onClick:()=>v.vm.openSharingModal(i),icon:o.aAc})}),!a&&(0,I.jsx)(L,{}),a&&(0,I.jsx)(F,{})]})}function _(e){let{href:t,children:n,icon:r}=e,o=(0,M.useRouter)();return(0,I.jsx)(i.Z.Item,{icon:r,onSelect:()=>o.push(t),children:n})}function L(){let{data:e}=(0,p.rk)(),t=(0,p.t)(),{openSettings:n}=(0,u.F)(),l=(0,s.f6)(),{openModal:f}=(0,s.Dr)();if(!t||!e)return null;let m=e.accountItems.length>1,g=t.isWorkspaceAccount();return(0,I.jsxs)(i.d,{triggerButton:(0,I.jsx)("button",{onClick:()=>{k.A.logEvent(O.M.accountOpenProfileMenu),N.m9.logEvent("chatgpt_account_open_profile_menu")},"data-testid":"profile-button",className:"flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0",children:(0,I.jsx)(r.zf,{iconSize:"medium"})}),children:[m&&(0,I.jsx)(a.S,{menuItemComponent:i.Z.Item}),m?(0,I.jsx)(i.Z.Separator,{}):null,g?(0,I.jsx)(d.b,{menuItemComponent:i.Z.Item,routedMenuItemComponent:_}):(0,I.jsx)(c.W,{menuItemComponent:i.Z.Item}),(0,I.jsx)(i.Z.Item,{icon:o.SWE,onClick:()=>n(),children:(0,I.jsx)(D.Z,{defaultMessage:"Settings",id:"navigation.settings.0"})}),l&&(0,I.jsx)(z,{openDownloadModal:f}),(0,I.jsx)(i.Z.Separator,{}),(0,I.jsx)(i.Z.Item,{onClick:()=>{k.A.logEvent(O.M.clickLogOut,{eventSource:"mouse"}),(0,w.w7)()},icon:o.iz5,children:(0,I.jsx)(D.Z,{defaultMessage:"Log out",id:"navigation.logOut.0"})})]})}function A(e){let{clientThreadId:t}=e,n=(0,Z.Z)(),r=(0,v.tN)(e=>e.isDesktopNavCollapsed),i=(0,S.V_)(),s=(0,j.w$)(),a=(0,y.h)({clientThreadId:t,location:"Navigation actions"});return r?(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("div",{className:"flex items-center",children:[(0,I.jsx)(R,{}),r&&i?(0,I.jsx)(C.u,{sideOffset:4,label:n.formatMessage({id:"9HFPcS",defaultMessage:"Clear chat"}),className:"flex",children:(0,I.jsx)(l.W,{onClick:()=>{s||v.vm.toggleActiveSidebar("mobile-nav"),a()},icon:o.Ezi,surfaceContext:"secondary"})}):(0,I.jsx)(C.u,{label:n.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),className:"flex",children:(0,I.jsx)(l.W,{onClick:a,icon:o.bl$})})]})}):null}function z(e){let{openDownloadModal:t}=e;return(0,I.jsxs)("span",{children:[(0,I.jsx)(i.Z.Separator,{}),(0,I.jsx)(i.Z.Item,{icon:o.gFD,onClick:()=>{t(),k.A.logEvent(O.M.accountMenuClickDownloadApp)},children:(0,I.jsx)(D.Z,{id:"navigation.downloadMacApp",defaultMessage:"Download the macOS app"})})]})}function R(){let e=(0,Z.Z)(),t=(0,v.tN)(e=>e.isDesktopNavCollapsed),n=(0,j.w$)(),{isUnauthenticated:r}=(0,x.u)(),i=g.p.useState(g.p.hasUnreadConversations);return t&&n&&!r?(0,I.jsx)(C.u,{label:e.formatMessage({id:"cElEQV",defaultMessage:"Open sidebar"}),className:"flex",children:(0,I.jsx)(l.W,{onClick:()=>v.vm.toggleDesktopNavCollapsed(),icon:i?B:o.BSo,surfaceContext:"primary"})}):null}function B(){return(0,I.jsxs)("div",{className:"relative",children:[(0,I.jsx)(o.BSo,{}),(0,I.jsx)("div",{className:"absolute -right-0.5 bottom-0 h-3 w-3 rounded-full border-2 border-token-main-surface-primary bg-blue-selection"})]})}function F(){let e=(0,b.b)(),t=(0,m.x)(),{layer:n}=(0,P.AH)("3637408529"),r=n.get("is_desktop_primary_auth_button_on_right",!1),i=(0,I.jsx)(T.z,{onClick:()=>{let t=e({authType:"login"});k.A.logLogInButtonClicked({location:"Chat header",provider:t})},color:t?"primary":"secondary",size:"small","data-testid":"login-button",children:(0,I.jsx)(D.Z,{id:"B1SN7b",defaultMessage:"Log in"})},"login"),o=(0,I.jsx)(T.z,{color:t?"secondary":"primary",onClick:()=>{let t=e({authType:"signup"});k.A.logSignUpButtonClicked({location:"Chat header",provider:t})},size:"small","data-testid":"signup-button",children:(0,I.jsx)(D.Z,{id:"P6cySK",defaultMessage:"Sign up"})},"signup"),s=t?[i,o]:[o,i];return(0,I.jsx)("div",{className:"flex items-center justify-center gap-2",children:r?s.reverse():s})}},40833:function(e,t,n){n.d(t,{v:function(){return m}});var r=n(98601),i=n(10449),o=n(19841),s=n(92379),a=n(62984),l=n(68306),c=n(41619),d=n(651);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){let{align:t,arrowPadding:n,alignOffset:r,show:l,onDismiss:u,children:m,title:g,side:h,sideOffset:x,theme:b="default",badge:v="new",description:j,dismissOnOutsideClick:y=!1}=e,w=(0,s.useRef)(null);return(0,d.jsxs)(i.fC,{open:l,onOpenChange:e=>{e||u()},children:[(0,d.jsx)(i.xz,{asChild:!0,onClick:()=>{u()},ref:w,children:m}),(0,d.jsx)(i.h_,{children:(0,d.jsxs)(i.VY,{arrowPadding:n,alignOffset:r,align:t,side:h,sideOffset:x,onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onInteractOutside:e=>{var t;e.target instanceof Element&&(null===(t=w.current)||void 0===t?void 0:t.contains(e.target))?e.preventDefault():y?u():e.preventDefault()},updatePositionStrategy:"always",className:(0,o.default)("relative z-10 animate-slideLeftAndFade select-none rounded-xl p-4 text-sm shadow-sm","default"===b?"bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-700":"bg-blue-400 text-white"),children:[(0,d.jsxs)("div",{className:"flex max-w-xs flex-col gap-1",children:[(0,d.jsxs)("div",{className:"mb-0.5 flex gap-2",children:["new"===v?(0,d.jsx)("span",{className:(0,o.default)("rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal","default"===b?"bg-green-500 text-white":"bg-white text-blue-selection"),children:(0,d.jsx)(a.Z,f({},p.new))}):"beta"===v&&(0,d.jsx)("span",{className:"rounded-full bg-blue-100 px-1.5 text-[10px] font-semibold text-blue-600",children:(0,d.jsx)(a.Z,f({},p.beta))}),(0,d.jsx)("div",{className:"grow font-semibold",children:g}),(0,d.jsx)(i.x8,{className:"-my-1 -mr-1 p-1 opacity-70 transition hover:opacity-100",children:(0,d.jsx)(c.tPq,{className:"icon-sm"})})]}),void 0!==j&&(0,d.jsx)("div",{className:"",children:j})]}),(0,d.jsx)(i.Eh,{asChild:!0,children:(0,d.jsx)("div",{className:(0,o.default)("relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm","default"===b?"bg-gray-900 dark:bg-gray-50":"bg-blue-400")})})]})})]})}let p=(0,l.vU)({new:{id:"announcementTooltip.new",defaultMessage:"New"},beta:{id:"announcementTooltip.beta",defaultMessage:"Beta"}})},2118:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(98601),i=n(52088),o=n(19841),s=n(92379),a=n(651);let l=["icon","className","surfaceContext"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let u=(0,s.forwardRef)(function(e,t){let{icon:n,className:r,surfaceContext:s="primary"}=e,c=(0,i.Z)(e,l);return(0,a.jsx)("button",d(d({},c),{},{className:(0,o.default)("h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0","primary"===s?"hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary":"hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary",r),ref:t,children:(0,a.jsx)(n,{className:"icon-xl-heavy"})}))})},81690:function(e,t,n){n.d(t,{Up:function(){return o},doConnectorOauthRedirect:function(){return s},wP:function(){return l},wW:function(){return a}});var r=n(16757),i=n(2721);async function o(e,t){let n="".concat("https://chat.openai.com","/aip/").concat(e.id,"/oauth/callback"),r=await i.Z.pluginOauthRedirect(e.id,n,t);window.location.href=r.redirect_uri}async function s(e,t,n,r){let o=await i.Z.connectorOauthRedirect(e.id,n,t,r);window.location.href=o.redirect_uri}function a(e){switch(e){case r.NA.Link:return"link_paste_popover";case r.NA.Picker:return"file_upload_menu"}}async function l(e){await i.Z.deleteUserConnectedApp(e),window.location.reload()}},49763:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(98601),i=n(36560),o=n.n(i);class s{constructor(){(0,r.Z)(this,"emitter",new(o())),this.emitter.setMaxListeners(1e3)}on(e,t){this.emitter.on(e,t)}off(e,t){this.emitter.off(e,t)}publish(e){this.emitter.emit(e.kind,e),this.emitter.emit("anyEvent",e)}}},83963:function(e,t,n){n.d(t,{ll:function(){return l},tW:function(){return c},tv:function(){return u},u1:function(){return d}});var r=n(99333),i=n(58025),o=n(93951),s=n(41987),a=n(88667);function l(){var e,t;return null!==(e=null===(t=(0,o.hz)())||void 0===t?void 0:t.includes(s.L0.Sunshine))&&void 0!==e&&e}function c(){let{data:e}=(0,i.R1)(r.sh.Sunshine),t=l();return!!e&&t}function d(){var e;let t=c(),n=null!==(e=(0,a.sB)("1611573287").value)&&void 0!==e&&e;return t&&n}function u(){var e,t;return null!==(e=null===(t=(0,o.hz)())||void 0===t?void 0:t.includes(s.L0.MemoryGA))&&void 0!==e&&e}},15174:function(e,t,n){var r=n(92379);t.Z=function(){let e=(0,r.useRef)(!1);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),(0,r.useCallback)(()=>e.current,[])}},27393:function(e,t,n){n.d(t,{Ef:function(){return p},UG:function(){return g},dG:function(){return c},gb:function(){return h},mK:function(){return m}});var r,i=n(98601),o=n(37671),s=n(82363),a=n(92379);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let c=((r={}).SonicHome="sonic.web.home",r.SonicServer="sonic.ssr.search",r.ChatPageLoad="chatgpt.web.pageLoad",r.CompletionRequest="chatgpt.web.completionRequest",r.ProofOfWork="chatgpt.web.proofOfWork",r);class d{constructor(e,t){var n,r;(0,i.Z)(this,"expectedTimingLogTimeouts",{}),(0,i.Z)(this,"startMs",-1),(0,i.Z)(this,"lastLogMs",-1),(0,i.Z)(this,"loggedTimings",new Set),(0,i.Z)(this,"timingBlocks",{}),(0,i.Z)(this,"debug",!1),this.namespace=e,this.expectedTimingLogs=null!==(n=null==t?void 0:t.expectedTimingLogs)&&void 0!==n?n:[],this.debug=null!==(r=null==t?void 0:t.debug)&&void 0!==r&&r,this.reset()}reset(){for(let e of(this.startMs=this.lastLogMs=performance.now(),this.timingBlocks={},this.loggedTimings=new Set,Object.values(this.expectedTimingLogTimeouts)))clearTimeout(e);for(let e of(this.expectedTimingLogTimeouts={},this.expectedTimingLogs)){let t=setTimeout(()=>{var t;s.U.addAction("".concat(this.namespace,".").concat(e.name,".timed_out"),null!==(t=e.initializationInfo)&&void 0!==t?t:{})},e.expectedInMs);this.expectedTimingLogTimeouts[e.name]=t,this.debug&&console.debug("[DatadogProfiler] Expecting ".concat(this.namespace,".").concat(e.name," to be logged within ").concat(e.expectedInMs,"ms"))}}logTiming(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromLastLog:!1};if(this.loggedTimings.has(e)){console.warn("[DatadogProfiler] Timing ".concat(this.namespace,".").concat(e," already logged"));return}let n=performance.now()-(t.fromLastLog?this.lastLogMs:this.startMs);s.U.addAction("".concat(this.namespace,".").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({durationMs:n},t.context)),this.lastLogMs=performance.now(),this.loggedTimings.add(e),e in this.expectedTimingLogTimeouts&&(clearTimeout(this.expectedTimingLogTimeouts[e]),delete this.expectedTimingLogTimeouts[e]),this.debug&&console.debug("[DatadogProfiler] ".concat(this.namespace,".").concat(e,": ").concat(n,"ms"))}startBlock(e){this.timingBlocks[e]=performance.now()}endBlock(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{throwError:!0},n=this.timingBlocks[e];if(void 0===n&&t.throwError)throw Error("Block ".concat(e," not started"));let r=performance.now()-n;s.U.addAction("".concat(this.namespace,".").concat(e),{durationMs:r}),delete this.timingBlocks[e]}}let u={},f="__global__";function m(e){let{namespace:t,key:n=f,opts:r}=e;void 0===u[t]&&(u[t]={});let i=(0,o.S)(u[t]);return void 0!==i[n]&&s.U.addError("Profiler already exists for namespace ".concat(t," and key ").concat(n)),i[n]=new d(t,r),i[n]}function p(e){let{namespace:t,key:n=f}=e;if(void 0!==u[t])return(0,o.S)(u[t])[n]}function g(e){let{namespace:t,key:n=f}=e;if(void 0!==u[t]){let e=(0,o.S)(u[t]);delete e[n]}}function h(e){let{namespace:t,key:n=f,opts:r}=e,{0:i}=(0,a.useState)(()=>m({namespace:t,key:n,opts:r}));return i}}}]);
//# sourceMappingURL=7373-7b809608fd6dbb31.js.map