"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3212],{38417:function(e,n,t){var i=t(48538),o=t(5443),r=t(66246),a=t(651);n.Z=e=>{let{label:n,value:t,onCopied:s}=e,d=()=>{(0,i.v)(t),s()};return(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[void 0!==n&&(0,a.jsx)("label",{className:"font-semibold",children:n}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{onClick:d,className:"w-full cursor-pointer break-all rounded-lg bg-token-main-surface-tertiary px-4 py-2 font-mono text-sm text-token-text-primary",children:t}),(0,a.jsx)(o.z,{color:"ghost",onClick:d,icon:r.TIy})]})]})}},23212:function(e,n,t){t.d(n,{Z:function(){return D}});var i,o=t(94521),r=t(21904),a=t(5443),s=t(38417),d=t(65530),l=t(8649),c=t(69482),u=t(66246),m=t(49217),f=t(94982),v=t(93223),p=t(35226),g=t(96053),h=t(92379),y=t(26123),I=t(72256),T=t(25940),b=t(46129),x=t(651);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(n){(0,o.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var M=((i=M||{})[i.INITIAL=0]="INITIAL",i[i.PENDING=1]="PENDING",i[i.FINAL=2]="FINAL",i);function D(e){let{workspaceId:n,isOpen:t,onClose:i,currentDomain:o,domains:a=[],showUnverifiedDomains:d=!1,onVerifyDomain:c}=e,u=(0,y.Z)(),{mutateAsync:T,isPending:b}=function(e){let n=(0,p.NL)();return(0,g.D)({mutationFn:n=>{let{hostname:t}=n;return v.Z.addDomainToWorkspace(e,t)},onSuccess:()=>{n.invalidateQueries({queryKey:["workspace/identity",e]}),n.invalidateQueries({queryKey:["builderProfile"]})},onError:e=>{f.m.danger(e.message)}})}(n),{mutateAsync:k,isPending:D}=function(e){let n=(0,p.NL)();return(0,g.D)({mutationFn:n=>{let{domainId:t}=n;return v.Z.checkDomainForWorkspace(e,t)},onSuccess:()=>{n.invalidateQueries({queryKey:["workspace/identity",e]}),n.invalidateQueries({queryKey:["builderProfile"]})},onError:e=>{f.m.danger(e.message)}})}(n),{0:j,1:Z}=(0,h.useState)(null!=o?o:void 0),{0:w,1:P}=(0,h.useState)(null==o?void 0:o.hostname),{0:A,1:F}=(0,h.useState)((null==o?void 0:o.status)===void 0?M.INITIAL:(null==o?void 0:o.status)===r.pT.PENDING?M.PENDING:M.FINAL),S=()=>{o||(Z(void 0),F(M.INITIAL))},L=async()=>{if(void 0===w)return;let e=a.find(e=>e.hostname===w&&e.status===r.pT.PENDING);if(e)Z(e),F(M.PENDING);else{let e=await T({hostname:w});"id"in e&&Z(e),F(M.PENDING)}},O=(0,x.jsx)(l.Z.Button,{title:u.formatMessage(C.check),color:"primary",disabled:(null==j?void 0:j.id)===void 0||D,onClick:async()=>{if(null!=j&&j.id){let e=await k({domainId:j.id});"error"in e&&f.m.danger(u.formatMessage(C.domainCheckError,{message:e.error.message})),"id"in e&&(c&&c(e),e.status===r.pT.VERIFIED&&F(M.FINAL))}}}),_=(0,x.jsx)(l.Z.Button,{title:u.formatMessage(C.submit),color:"primary",disabled:void 0===w||b,onClick:L}),B=(0,x.jsx)(l.Z.Button,{title:u.formatMessage(C.done),color:"primary",onClick:()=>{S(),i()}});return(0,x.jsxs)(m.Z,{isOpen:t,onClose:()=>{S(),i()},type:"success",className:"text-token-text-secondary",title:u.formatMessage(A===M.INITIAL?C.newTitle:C.editTitle),primaryButton:A===M.INITIAL?_:A===M.PENDING?O:B,secondaryButton:(0,x.jsx)(l.Z.Button,{title:u.formatMessage(C.cancel),color:"secondary",onClick:()=>{S(),i()}}),children:[A===M.INITIAL&&(0,x.jsx)(E,{hostname:w,onSetHostname:P,onSubmit:L,unverifiedDomains:d?a:[],onVerifyDomain:e=>{F(M.PENDING),Z(e)},workspaceId:n}),A===M.PENDING&&(0,x.jsxs)("div",{className:"flex flex-col gap-3",children:[u.formatMessage(C.verificationTokenMessage,{hostname:null==j?void 0:j.hostname}),(null==j?void 0:j.dns_verification_token_string)&&(0,x.jsx)(s.Z,{value:j.dns_verification_token_string,onCopied:()=>{f.m.success(u.formatMessage(C.copiedTXTRecordToClipboard),{duration:3})}}),(0,x.jsx)(I.Z,N({},C.verificationTokenFooter))]}),A===M.FINAL&&(0,x.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,x.jsx)(I.Z,N(N({},C.successfulVerification),{},{values:{hostname:null==j?void 0:j.hostname}})),(null==j?void 0:j.dns_verification_token_string)&&(0,x.jsx)(s.Z,{value:j.dns_verification_token_string,onCopied:()=>{f.m.success(u.formatMessage(C.copiedTXTRecordToClipboard),{duration:3})}})]})]})}function j(e){let{unverifiedDomains:n,onVerifyDomain:t,workspaceId:i}=e,{mutateAsync:o}=(0,b.Bd)(i);return(0,x.jsxs)(c.Z.Root,{fixed:!0,size:"compact",className:"mb-6 border-b border-token-border-light",children:[(0,x.jsxs)(c.Z.Header,{children:[(0,x.jsx)(c.Z.HeaderCell,{children:(0,x.jsx)(I.Z,N({},C.unverifiedDomainsTableHeader))}),(0,x.jsx)(c.Z.HeaderCell,{textAlign:"right"})]}),n.map(e=>(0,x.jsxs)(c.Z.Row,{children:[(0,x.jsx)(c.Z.Cell,{children:e.hostname}),(0,x.jsx)(c.Z.Cell,{textAlign:"right",children:(0,x.jsxs)("div",{className:"flex gap-2",children:[(0,x.jsx)(a.z,{color:"secondary",size:"small",onClick:()=>t(e),children:(0,x.jsx)(I.Z,N({},C.verifyDomainButton))}),(0,x.jsx)(a.z,{color:"secondary",size:"small",onClick:()=>o({domainId:e.id}),icon:u.XHJ})]})})]},e.id))]})}function E(e){let{hostname:n,onSetHostname:t,onSubmit:i,unverifiedDomains:o,onVerifyDomain:r,workspaceId:a}=e,s=(0,y.Z)();return(0,x.jsxs)(x.Fragment,{children:[o&&o.length>0&&(0,x.jsx)(j,{workspaceId:a,unverifiedDomains:o,onVerifyDomain:r}),(0,x.jsx)("form",{onSubmit:e=>{e.preventDefault(),i()},children:(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)("label",{className:"mb-2 flex items-center text-sm font-semibold",children:(0,x.jsx)(I.Z,N({},C.domainInput))}),(0,x.jsx)(d.Z,{name:"hostname",placeholder:s.formatMessage(C.placeholder),value:null!=n?n:"",onChange:e=>{t(e.target.value)}})]})})]})}let C=(0,T.vU)({newTitle:{id:"domainModal.newTitle.0",defaultMessage:"Verify a new domain"},editTitle:{id:"domainModal.editTitle",defaultMessage:"Manage Domain"},submit:{id:"domainModal.submit",defaultMessage:"Submit"},check:{id:"domainModal.check",defaultMessage:"Check"},done:{id:"domainModal.done",defaultMessage:"Done"},cancel:{id:"domainModal.cancel",defaultMessage:"Cancel"},domainInput:{id:"domainModal.domainInput.0",defaultMessage:"Add a new domain"},placeholder:{id:"domainModal.placeholder",defaultMessage:"openai.com"},domainCheckError:{id:"domainModal.domainCheckError",defaultMessage:"Your domain could not be verified: {message}"},verificationTokenMessage:{id:"domainModal.verificationTokenMessage",defaultMessage:"To verify ownership of {hostname}, navigate to your DNS provider and add a TXT record with this value:"},verificationTokenFooter:{id:"domainModal.verificationTokenFooter",defaultMessage:"Then, check the record to complete the verification."},successfulVerification:{id:"domainModal.successfulVerification.0",defaultMessage:'Your domain, "{hostname}" has been successfully verified'},copiedTXTRecordToClipboard:{id:"domainModal.copiedTXTRecordToClipboard",defaultMessage:"Copied DNS TXT record to clipboard"},verifyDomainButton:{id:"domainModal.verifyDomainButton",defaultMessage:"Verify"},unverifiedDomainsTableHeader:{id:"domainModal.unverifiedDomainsTableHeader",defaultMessage:"Your unverified domains"}})},46129:function(e,n,t){t.d(n,{Bd:function(){return h},DD:function(){return T},Fc:function(){return I},Ji:function(){return g},OR:function(){return b},Wv:function(){return p},f_:function(){return v},sd:function(){return k},z0:function(){return x}});var i,o=t(41141),r=t(21904),a=t(94982),s=t(93223),d=t(24040),l=t(14816),c=t(96053),u=t(35226),m=t(26123),f=t(25940);function v(e,n){return(0,l.a)({queryKey:["workspace/identity",e],queryFn:async()=>{if(void 0!==e)return await s.Z.getWorkspaceIdentitySettings(e)},enabled:n})}function p(){let e=(0,d.ec)(d.F_.workspaceId),{data:n}=v(null!=e?e:void 0,null!=e);return(null==n?void 0:n.domains)&&(null==n?void 0:n.domains.filter(e=>"verified"==e.status))}function g(e){let n=(0,m.Z)();return(0,c.D)({mutationFn:t=>{let{shouldAutoProvision:i}=t;return s.Z.setWorkspaceShouldAutoProvision(e,i).then(e=>{let t=i?N.autoProvisionEnabledToast:N.autoProvisionDisabledToast;return a.m.success(n.formatMessage(t),{duration:3}),e}).catch(e=>{throw a.m.danger(e.message),e})}})}function h(e){let n=(0,u.NL)();return(0,c.D)({mutationFn:n=>{let{domainId:t}=n;return s.Z.removeDomainFromWorkspace(e,t)},onSuccess:()=>{n.refetchQueries({queryKey:["workspace/identity",e]}),n.refetchQueries({queryKey:["builderProfile"]})}})}function y(e){let n=e;return n.startsWith("-----BEGIN")||(n="-----BEGIN CERTIFICATE-----\n".concat(n)),n.endsWith("CERTIFICATE-----")||(n="".concat(n,"\n-----END CERTIFICATE-----")),n}function I(e){let n=(0,u.NL)();return(0,c.D)({mutationFn:n=>{let{signInEndpoint:t,cert:i}=n;return s.Z.createSAMLConnection(e,t,y(i))},onSuccess:()=>{n.refetchQueries({queryKey:["workspace/identity",e]})}})}function T(e){let n=(0,u.NL)();return(0,c.D)({mutationFn:n=>{let{connectionId:t,signInEndpoint:i,cert:o,active:r,enforcedClients:a}=n;return s.Z.updateSAMLConnection(e,t,{signInEndpoint:i,cert:void 0!==o?y(o):void 0,active:r,enforcedClients:a})},onSuccess:()=>{n.refetchQueries({queryKey:["workspace/identity",e]})}})}function b(e){let n=(0,u.NL)();return(0,c.D)({mutationFn:n=>{let{connectionId:t}=n;return s.Z.deleteSAMLConnection(e,t)},onSuccess:()=>{n.refetchQueries({queryKey:["workspace/identity",e]})}})}let x=t(74091).Z.div(i||(i=(0,o.Z)(["text-md mb-4 text-token-text-secondary"]))),k={[r.pT.VERIFIED]:(0,f.Em)({id:"i7FkyS",defaultMessage:"Verified"}),[r.pT.PENDING]:(0,f.Em)({id:"THBv/l",defaultMessage:"Pending"}),[r.pT.EXPIRED]:(0,f.Em)({id:"+sjWGK",defaultMessage:"Expired"})},N=(0,f.vU)({autoProvisionEnabledToast:{id:"workspaceIdentity.autoProvisionEnabledToast",defaultMessage:"Auto provisioning enabled for this workspace"},autoProvisionDisabledToast:{id:"workspaceIdentity.autoProvisionDisabledToast",defaultMessage:"Auto provisioning disabled for this workspace"}})}}]);
//# sourceMappingURL=3212-3f75628a8ad62991.js.map