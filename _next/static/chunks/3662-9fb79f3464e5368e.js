"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3662],{68986:function(e,t,r){r.d(t,{hb:function(){return eb},yG:function(){return ex},ZP:function(){return ep}});var a,n,i,o,s,l=r(2346),c=r(98601),d=r(99333),u=r(59725),p=r(97537),f=r(12879),m=r(12216),g=r(6440),x=r(84082),v=r(66114),b=r(19841),y=r(92379),h=r(72349),w=r(75172),j=r(68306),k=r(41619),P=r(651);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function M(e){let{onFileChange:t,className:r,message:a,mimeTypes:n}=e,i=(0,w.Z)(),o=null!=a?a:i.formatMessage(F.helpText),{open:s,getRootProps:l,getInputProps:c,isDragActive:d}=(0,h.uI)(E({disabled:!1,noClick:!0,onDropAccepted:e=>{if(e.length>0){let r=e[0];n&&n.includes(r.type)&&t(r)}},onDropRejected:()=>null,multiple:!1,maxSize:x.xC},(0,v.Z8)(n)));return(0,P.jsxs)("div",E(E({className:(0,b.default)("flex flex-col content-center justify-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center",d?"border-green-600 bg-green-600 bg-opacity-10":"border-token-border-medium",r)},l()),{},{children:[(0,P.jsx)("input",E({},c())),(0,P.jsx)("div",{className:"text-center dark:text-white",children:(0,P.jsx)("div",{className:"inline-block",children:(0,P.jsx)(k.tCl,{})})}),(0,P.jsx)("div",{className:"text-center text-sm",children:o}),(0,P.jsx)("div",{className:"cursor-pointer text-center text-sm font-bold text-green-600",onClick:()=>{s()},children:i.formatMessage(F.openFilePicker)})]}))}let F=(0,j.vU)({helpText:{id:"FileUploadBox.helpText",defaultMessage:"Drop file here to upload"},openFilePicker:{id:"FileUploadBox.openFilePicker",defaultMessage:"Browse files"}});var N=r(44395),S=r(59144),C=r(94668),A=r(24434),U=r(93866),I=r(98628),D=r(24740),Z=r(2721),R=r(31438),_=r(42420),T=r(56032),z=r(62984);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function W(e){var t,r;let{workspace:a}=e,{0:n,1:i}=(0,y.useState)(null!==(t=null==a?void 0:a.name)&&void 0!==t?t:""),{0:o,1:s}=(0,y.useState)(!1);!o&&a&&(s(!0),""==n&&i(null!==(r=null==a?void 0:a.name)&&void 0!==r?r:""));let{0:l,1:c}=(0,y.useState)(a.profilePictureUrl),{0:p,1:f}=(0,y.useState)(a.profilePictureId),m=(0,R.EV)(R.B.WorkspaceAppearance),x=(0,w.Z)(),{0:b,1:h}=(0,y.useState)(void 0);async function j(e){let t=await (0,v.WI)(e,2*u.EF.workspaceAvatarPreview),r=(0,I.W7)(t);h({tempId:r,file:t,status:U.XX.Uploading,progress:1,fileId:null,cdnUrl:null}),(0,I.lU)(r,t,x,d.Ei.ProfilePicture,{onFileCreated(e,t,r){h(a=>"initial"!==a&&(null==a?void 0:a.tempId)===e&&a.status===U.XX.Uploading?B(B({},a),{},{progress:10,fileId:t,cdnUrl:r}):a)},onFileUploadProgress(e,t){h(r=>"initial"!==r&&(null==r?void 0:r.tempId)===e&&r.status===U.XX.Uploading?B(B({},r),{},{progress:t}):r)},onFileUploaded(e,t,r){h(t=>"initial"!==t&&t&&t.cdnUrl&&t.tempId===e?(Z.Z.getFileDownloadLink(t.fileId).then(e=>{e.status===d.KF.Success&&(f(t.fileId),c(e.download_url))}),B(B({},t),{},{status:U.XX.Ready,progress:100,fileSpec:B({name:t.file.name,id:t.fileId,size:t.file.size},null!=r?r:{})})):t)},onError(e){h(t=>{if("initial"!==t&&(null==t?void 0:t.tempId)===e){f(void 0),c(void 0),X(null);return}return t})}})}let k=function(e){let t=(0,_.NL)(),r=(0,w.Z)();return(0,T.D)({mutationFn:t=>{let{name:a,profilePictureId:n,profilePictureUrl:i}=t;return Z.Z.patchWorkspace({workspaceId:e,name:a,profile_picture_id:n,profile_picture_url:i}).catch(e=>{D.m.danger(r.formatMessage(G.saveError,{error:e.message}))})},onSuccess:()=>{t.invalidateQueries({queryKey:["account-status"]})}})}(a.id),O=(0,P.jsx)(S.Z.Button,{color:"primary",disabled:"initial"!==b&&void 0!==b&&b.status!==U.XX.Ready||"initial"!==b&&void 0!==b&&b.status===U.XX.Ready&&!l||k.isPending||0===n.trim().length,onClick:async()=>{k.mutate({name:n,profilePictureId:p,profilePictureUrl:l}),R.vm.closeModal(R.B.WorkspaceAppearance)},title:x.formatMessage(G.modalSubmit)}),E=(0,P.jsx)(S.Z.Button,{onClick:()=>{h(void 0),f(a.profilePictureId),c(a.profilePictureUrl),R.vm.closeModal(R.B.WorkspaceAppearance)},title:x.formatMessage(G.modalCancel)}),{0:F,1:X}=(0,y.useState)(null);return(0,y.useEffect)(()=>{if("initial"!==b&&void 0!=b&&null==F){let e=new FileReader;e.addEventListener("load",()=>{let t=e.result;"string"==typeof t&&X(t)}),e.readAsDataURL(b.file)}},[b,F]),(0,P.jsxs)(A.Z,{isOpen:m,onClose:()=>R.vm.closeModal(R.B.WorkspaceAppearance),showCloseButton:!0,primaryButton:O,secondaryButton:E,type:"danger",title:x.formatMessage(G.modalTitle),children:[(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-name",className:"block pb-1 font-semibold text-token-text-primary",children:(0,P.jsx)(z.Z,B({},G.workspaceName))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:(0,P.jsx)(z.Z,B({},G.workspaceNameDescription))})]}),(0,P.jsx)("div",{className:"mb-4",children:(0,P.jsx)(g.Z,{type:"text",name:"workspace-name",value:n,onChange:e=>i(e.target.value),maxLength:64})}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-avatar",className:"block pb-1 font-semibold text-token-text-primary",children:(0,P.jsx)(z.Z,B({},G.workspaceAvatar))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:x.formatMessage(G.workspaceAvatarDescription,{size:2*u.EF.workspaceAvatarPreview})})]}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap text-center",children:[l?(0,P.jsxs)("div",{className:"relative mb-3 inline-flex",children:[(0,P.jsx)(u.B0,{src:l,size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute -right-1 -top-1",children:(0,P.jsx)(L,{onClick:()=>{f(null),c(null),h(void 0),X(null)}})})]}):void 0!=b&&"initial"!==b&&F?(0,P.jsx)("div",{className:"flex flex-col justify-center text-center",children:(0,P.jsxs)("div",{className:"relative mb-3 text-center",children:[(0,P.jsx)(u.B0,{src:URL.createObjectURL(b.file),size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-white",children:(0,P.jsx)(N.Z,{percentage:b.progress,className:"h-6 w-6"})})]})}):(0,P.jsx)(M,{onFileChange:e=>{j(e)},mimeTypes:v.KL}),(0,P.jsx)(C.Z,{className:"mt-3",children:x.formatMessage(G.propagationWarning)})]})]})}function L(e){let{onClick:t}=e;return(0,P.jsx)("div",{className:"flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",onClick:t,children:(0,P.jsx)(k.tPq,{className:"h-3 w-3"})})}let G=(0,j.vU)({modalTitle:{id:"workspaceAppearanceModal.title",defaultMessage:"Workspace appearance"},modalSubmit:{id:"workspaceAppearanceModal.submit",defaultMessage:"Save"},modalCancel:{id:"workspaceAppearanceModal.cancel",defaultMessage:"Cancel"},workspaceName:{id:"workspaceAppearanceModal.workspaceName",defaultMessage:"Workspace name"},workspaceNameDescription:{id:"workspaceAppearanceModal.workspaceNameDescription",defaultMessage:"Update the name of the workspace."},workspaceAvatar:{id:"workspaceAppearanceModal.workspaceAvatar",defaultMessage:"Workspace image"},workspaceAvatarDescription:{id:"workspaceAppearanceModal.workspaceAvatarDescription",defaultMessage:"Upload a JPEG or PNG workspace image for your team. (Minimum {size}\xd7{size}px recommended.)"},propagationWarning:{id:"workspaceAppearanceModal.propagationWarning",defaultMessage:"Changes to the workspace name and image may take some time to take effect."},saveError:{id:"workspaceAppearanceModal.saveError",defaultMessage:"Failed to save workspace appearance"}});var q=r(79704),K=r(30853),J=r(90067),$=r(93951),Q=r(31498),H=r(34977),V=r(15478),Y=r(38838),ee=r(25162),et=r(11550),er=r(93465),ea=r(44087);function en(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ei(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?en(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):en(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eo(e){let{accountId:t,subscription:r}=e,a=(0,w.Z)(),n=(0,er.wK)(t),{0:i,1:o}=(0,y.useState)(!1),s=(0,ea.Gk)(t),l=async()=>{o(!0);try{await n.mutateAsync(t)}catch(e){D.m.warning(a.formatMessage(es.errorRenewingSubscription),{hasCloseButton:!0})}finally{o(!1)}};return(0,P.jsx)("div",{className:"bg-token-main-surface-secondary",children:(0,P.jsxs)("div",{className:"mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",children:[(0,P.jsxs)("div",{className:"mx-2 flex-grow md:mx-4",children:[(0,P.jsxs)("div",{className:"flex items-center",children:[(0,P.jsx)(ee.FE,{className:"mr-4 hidden text-orange-500 md:block"}),(0,P.jsx)("p",{className:"text-lg font-semibold",children:(0,P.jsx)(z.Z,ei({},es.workspaceWillBeDeactivated))})]}),null!=r.active_until&&(0,P.jsx)("p",{className:"md:ml-8",children:(0,P.jsx)(z.Z,ei(ei({},es.retainAccessUntil),{},{values:{expiryDate:new Date(r.active_until)}}))})]}),s&&(0,P.jsx)(et.z,{color:"primary",onClick:l,loading:i,children:(0,P.jsx)(z.Z,ei({},es.reactivateBtn))})]})})}let es=(0,j.vU)({retainAccessUntil:{id:"adminPage.retainAccessUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},workspaceWillBeDeactivated:{id:"adminPage.workspaceWillBeDeactivated",defaultMessage:"This workspace will be deactivated."},reactivateBtn:{id:"adminPage.reactivateBtn",defaultMessage:"Reactivate"},errorRenewingSubscription:{id:"adminPage.errorRenewingSubscription",defaultMessage:"There was an error reactivating your subscription."}});function el(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?el(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):el(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ed(e){let{route:t,icon:r,name:a,upsellEnterprise:n=!1}=e,i=(0,H.useRouter)();return n?(0,P.jsx)(K.u,{label:(0,P.jsx)(z.Z,ec({},ey.availableForEnterprise)),side:"right",children:(0,P.jsxs)(J.ZB,{$as:"button",className:(0,b.default)("w-full rounded text-left","hover:bg-token-sidebar-surface-secondary"),children:[(0,P.jsx)(k.oVl,{className:"icon-sm shrink-0 text-token-text-secondary"}),(0,P.jsx)("span",{className:"text-token-text-secondary",children:(0,P.jsx)(z.Z,ec({},a))})]})}):(0,P.jsxs)(J.ZB,{$as:"button",className:(0,b.default)("w-full rounded text-left hover:bg-token-sidebar-surface-secondary",i.route===t&&"bg-token-sidebar-surface-secondary"),onClick:e=>{i.push(t),e.stopPropagation()},children:[r,(0,P.jsx)(z.Z,ec({},a))]})}function eu(e){let{workspace:t,hasAdminPrivileges:r,hasOwnerPrivileges:a}=e,n=(0,H.useRouter)(),i=(0,y.useCallback)(()=>{n.push("/")},[n]),o=(0,Q.ec)(Q.F_.isEnterpriseyPlan);return(0,P.jsxs)("nav",{className:"p-2",children:[(0,P.jsx)("div",{className:"mb-1 flex flex-row gap-2",children:(0,P.jsxs)(m.MP,{onClick:i,children:[(0,P.jsx)(Y.Rp,{className:"icon-sm"}),(0,P.jsx)(z.Z,ec({},ey.backToChat))]})}),(0,P.jsxs)("div",{className:"flex flex-col gap-2 py-2",children:[(0,P.jsxs)("div",{className:"flex flex-col gap-2 rounded px-2 py-2 ".concat(a?"cursor-pointer hover:bg-token-main-surface-secondary":""),onClick:()=>{a&&R.vm.openModal(R.B.WorkspaceAppearance)},children:[(0,P.jsx)(u.B0,{size:"large",src:null==t?void 0:t.profilePictureUrl}),(0,P.jsxs)("div",{className:"align-center flex flex-row",children:[(0,P.jsx)("h2",{className:"flex-1 text-lg text-token-text-primary dark:text-white",children:null==t?void 0:t.name}),a?(0,P.jsx)("div",{className:"my-auto h-4 flex-initial align-middle dark:text-white",children:(0,P.jsx)(k.vdY,{className:"icon-sm opacity-70 hover:opacity-100"})}):null]})]}),(0,P.jsx)(ed,{route:"/admin",icon:(0,P.jsx)(k.yjj,{className:"icon-sm"}),name:ey.membersPageTitle}),o&&(0,P.jsx)(ed,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!o,name:(0,j.Em)({id:"aecR1i",defaultMessage:"Groups"})}),a&&(0,P.jsx)(ed,{route:"/admin/billing",icon:(0,P.jsx)(k.ciH,{className:"icon-sm"}),name:ey.billing}),a&&(0,P.jsx)(ed,{route:"/admin/gpts",icon:(0,P.jsx)(k.frp,{className:"icon-sm"}),name:ey.gpts}),a&&(0,P.jsx)(ed,{route:"/admin/settings",icon:(0,P.jsx)(k.SWE,{className:"icon-sm"}),name:ey.settings}),!o&&(0,P.jsx)("span",{className:"mx-3 border-t border-y-token-border-medium"}),!o&&(0,P.jsx)(ed,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!o,name:(0,j.Em)({id:"aecR1i",defaultMessage:"Groups"})}),r&&(0,P.jsx)(ed,{route:"/admin/analytics",icon:(0,P.jsx)(k.IeX,{className:"icon-sm"}),name:ey.analytics,upsellEnterprise:!o}),a&&(0,P.jsx)(ed,{route:"/admin/identity",upsellEnterprise:!o,icon:(0,P.jsx)(k.kaz,{className:"icon-sm"}),name:ey.identity})]})]})}function ep(e){let{mobilePageTitle:t,requireAdminPrivileges:r=!1,requireOwnerPrivileges:a=!1,children:n}=e,i=(0,Q.ec)(e=>e.currentWorkspace),o=(0,H.useRouter)(),s=null!=i?(0,q.$v)(i.role):void 0,l=null!=i?(0,q.Di)(i.role):void 0;return((0,y.useEffect)(()=>{r&&!1===s&&o.push("/admin"),a&&!1===l&&o.push("/admin")},[r,s,o,a,l]),null==(0,$.t)())?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f.Z,{mobileHeaderContent:t,forceOpenDesktopSidebar:!0,sidebar:(0,P.jsx)(eu,{workspace:null!=i?i:void 0,hasAdminPrivileges:s,hasOwnerPrivileges:l}),children:n}),null==i?null:(0,P.jsx)(W,{workspace:i})]})}let ef=V.Z.div(a||(a=(0,l.Z)(["border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10"]))),em=V.Z.h2(n||(n=(0,l.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))),eg=(0,V.Z)(em)(i||(i=(0,l.Z)(["font-normal text-base text-token-text-secondary"])));function ex(e){let{title:t,subtitle:r}=e,{data:a}=(0,er.ZP)(),n=(0,$.t)(),i=n&&a&&a.plan_type===d.D8.TEAM&&!a.will_renew;return(0,P.jsxs)(P.Fragment,{children:[i&&(0,P.jsx)(eo,{accountId:n.id,subscription:a}),(0,P.jsxs)(ef,{children:[(0,P.jsx)(em,{children:t}),r&&(0,P.jsx)(eg,{children:r})]})]})}V.Z.p(o||(o=(0,l.Z)(["text-sm text-token-text-tertiary"])));let ev=V.Z.div(s||(s=(0,l.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"])));function eb(e){let{children:t,showSpinner:r}=e,a=(0,$.t)(),n=(0,Q.ec)(e=>e.currentWorkspace),i=!a||r;return(0,P.jsxs)(ev,{children:[i&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(p.Z,{})}),!i&&!n&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(z.Z,ec({},ey.workspaceNotFound))}),!i&&n&&t]})}let ey=(0,j.vU)({workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},membersPageTitle:{id:"adminPage.membersPageTitle",defaultMessage:"Members"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},billing:{id:"adminPage.billing.1",defaultMessage:"Billing"},gpts:{id:"adminPage.gpts",defaultMessage:"GPTs"},settings:{id:"adminPage.Settings",defaultMessage:"Settings"},identity:{id:"adminPage.identity.0",defaultMessage:"Identity & provisioning"},availableForEnterprise:{id:"adminPage.availableForEnterprise",defaultMessage:"Available for Enterprise plan"}})},79704:function(e,t,r){r.d(t,{$v:function(){return i},DW:function(){return s},Di:function(){return o}});var a=r(99333),n=r(10080);function i(e){return e===a.r3.ADMIN||e===a.r3.OWNER}function o(e){return e===a.r3.OWNER}function s(e,t){switch(t){case a.qK.BROWSER:return"Web browsing";case a.qK.PYTHON:return"Code interpreter & Data Analysis";case a.qK.JIT_PLUGIN:return"Custom actions";case a.qK.RETRIEVAL:return"File retrieval";case a.qK.DALLE:return"DALL\xb7E image generation";case n.Zz.Private:return"Builder only";case n.Zz.Workspace:return e.data.name;case n.Zz.Link:return"Anyone with link";case n.Zz.Marketplace:return"Public";default:return null}}},84082:function(e,t,r){r.d(t,{$e:function(){return i},EZ:function(){return o},Ql:function(){return n},dO:function(){return a},xC:function(){return s}});let a=10,n=4,i={duration:20,hasCloseButton:!0},o=512,s=536870912},98628:function(e,t,r){r.d(t,{R3:function(){return w},W7:function(){return b},cT:function(){return h},lU:function(){return j},po:function(){return y}});var a=r(98601),n=r(99333),i=r(2721),o=r(92319),s=r(99976),l=r(61619),c=r(82363),d=r(68306),u=r(88815),p=r(24740),f=r(62166),m=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let v={duration:20,hasCloseButton:!0};function b(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function y(e){return new Promise((t,r)=>{let a=new FileReader,n=new Image;a.onload=()=>{n.onload=()=>t(n),n.onerror=e=>r(e),n.src=a.result},a.readAsDataURL(e)})}async function h(e,t,r,a,c,d){var f,m,g;let x=u.N.getState().resetRateLimits,b=n.EG.Initial;s.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:a.kind,uploadEntry:"local"});let y=d.usesRetrievalIndex?performance.now():void 0;try{let{file_id:o,upload_url:s}=await i.Z.createFile(t.name,t.size,a,!!x);c.onFileCreated(e,o,s),b=n.EG.FileCreated;let l=a.kind===n.Ei.Gizmo?a.gizmoId:void 0,u=null!==(f=d.shouldUpdateProgress)&&void 0!==f&&f,g=null!==(m=d.usesRetrievalIndex)&&void 0!==m&&m,h=await i.Z.uploadFileToAzureStorage(t,s,t=>{u&&c.onFileUploadProgress(e,10+80*t)});if(c.onFileUploadProgress(e,90),201!==h.status&&P(h,o,g),b=n.EG.FileUploaded,await i.Z.processFileUpload(o,{gizmoId:l}),b=n.EG.FileProcessed,d.usesRetrievalIndex){let t=await k(o,l);(null==t?void 0:t.status)===n.Xf.Skipped&&p.m.danger(r.formatMessage(E.retrievalSkippedFile,{fileName:t.name}),v),c.onFileUploaded(e,o,void 0,{fileTokenSize:t.file_size_tokens}),b=n.EG.RetrievalIndexCreated}else c.onFileUploaded(e,o,d.imageDimensions);null!=y&&i.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-y,type:"file"})}catch(i){O(r,t.name,i);let n="NotInstanceOfError";i instanceof o.gK?n=i.name:i instanceof o.Q0?n="FatalServerError_type_".concat(null!==(g=i.type)&&void 0!==g?g:"undefined"):i instanceof Error?n=i.name:i instanceof o.vq&&(n=i.name),c.onError(e,"error",n,a,b)}}async function w(e,t,r,a,d,u,g){let b=performance.now();s.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:r.kind,contextConnector:d.contextConnector,fileSourceType:d.type});let y=n.EG.Initial;r.kind===n.Ei.Gizmo&&(r=x(x({},r),{},{kind:a.includes(t.type)?n.Ei.Multimodal:n.Ei.MyFiles}));try{let a=await i.Z.uploadConnectorAPI(e,d.contextConnector,r,t,u,d.o365DriveId);switch(a.type){case"error":throw function(e){let{status_code:t,error_code:r,error_message:a}=e;if(!t||!(t<500))return new o.Q0(a);{let e="internal_error";return r?e=r:404===t?e="file_not_found":403===t?e="permission_error":413===t&&(e="file_too_large"),new o.vq(a,e)}}(a.error);case"file":switch(f.MP.onFileCreated(e,a.file.id,"",d.contextConnector),y=n.EG.FileProcessed,r.kind){case n.Ei.MyFiles:{f.MP.onFileUploadProgress(e,90);let t=await k(a.file.file_id,u);(null==t?void 0:t.status)===n.Xf.Skipped&&p.m.danger(g.formatMessage(E.retrievalSkippedFile,{fileName:t.name}),v),f.MP.onFileUploaded(e,a.file.file_id,void 0,{fileTokenSize:t.file_size_tokens,mimeType:a.file.mime_type}),y=n.EG.RetrievalIndexCreated;break}case n.Ei.Multimodal:f.MP.onFileUploaded(e,a.file.file_id,{width:512,height:512},{mimeType:a.file.mime_type});break;case n.Ei.AceUpload:f.MP.onFileUploaded(e,a.file.file_id,void 0,{mimeType:a.file.mime_type});break;case n.Ei.DalleAgent:case n.Ei.Gizmo:case n.Ei.ProfilePicture:throw new o.vq("Use case not supported by cloud doc: ".concat(r.kind))}break;case"folder":throw new o.vq("Folder type not supported")}i.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-b,type:d.contextConnector})}catch(a){c.U.addError(Error("Failed to upload connected file by ".concat(d.contextConnector),{cause:a})),O(g,(0,m.Ad)(t.name,null==d?void 0:d.syntheticExtension),a);let r="NotInstanceOfError";if(a instanceof o.Q0){var h;r="FatalServerError_type_".concat(null!==(h=a.type)&&void 0!==h?h:"undefined")}else(a instanceof o.gK||a instanceof Error||a instanceof o.vq)&&(r=a.name);f.MP.onError(e,"error",r,{kind:n.Ei.MyFiles},y)}}async function j(e,t,r,a,n){let{width:i,height:o}=await y(t);return h(e,t,r,{kind:a},n,{imageDimensions:{width:i,height:o}})}async function k(e,t){let r=Date.now()+6e4,a=e=>new Promise(t=>setTimeout(t,e)),s=0;for(;Date.now()<r;){let r=await i.Z.getRetrievalStatus(e,t);if(r.status===n.Xf.Success||r.status===n.Xf.Skipped)return r;if(r.status===n.Xf.Failed)throw new o.vq("Context extraction failed",r.error_code);s++,await a(Math.min(1e3,100*s))}throw new o.vq("Retrieval indexing timed out")}async function P(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a="Unknown error";try{a=await e.data}catch(e){}throw r&&i.Z.markFileUploadFailed(t,{error:a}),new o.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function O(e,t,r){let a=(0,m.kr)(e,"default_upload_error",{fileName:t});r instanceof o.vq&&null!=r.code&&(a=(0,m.kr)(e,r.code)),p.m.danger(a,v)}let E=(0,d.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},62166:function(e,t,r){r.d(t,{Dw:function(){return h},HR:function(){return y},MP:function(){return w},gF:function(){return b}});var a=r(98601),n=r(99333),i=r(99976),o=r(61619),s=r(82363),l=r(68306),c=r(68810),d=r(24740),u=r(84082),p=r(93866),f=r(98628),m=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let v={files:[],connectorFileData:{}},b=(0,c.Ue)(()=>v),y={hasUploadInProgress:e=>{let{files:t}=e;return t.some(e=>e.status===p.XX.Uploading)},getReadyFiles:e=>{let{files:t}=e;return t.filter(e=>e.status===p.XX.Ready)}},h={reset:()=>{b.setState(v)},uploadFile:async function(e,t,r,a,l){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=arguments.length>6?arguments[6]:void 0,x=arguments.length>7?arguments[7]:void 0,{gizmoId:v}=c,y=b.getState().files,h=(0,m.xs)(r,t.name,t.type,null==x?void 0:x.contextConnector,g),k={tempId:e,gizmoId:c.gizmoId,status:p.XX.Uploading,file:t,progress:1,fileId:null,cdnUrl:null,contextConnectorInfo:x,contextConnector:null==x?void 0:x.contextConnector};if(y.length===u.dO)i.A.logEvent(o.M.uploadedMaxFilesError),d.m.danger(l.formatMessage(j.maxUploadsAtATime,{maxUploads:u.dO,fileName:t.name}),u.$e);else if(y.some(t=>t.tempId===e))i.A.logEvent(o.M.uploadedDuplicateFileError),d.m.danger(l.formatMessage(j.duplicateFileAttached,{fileName:t.name.length>20?t.name.slice(0,19)+"…":t.name}),u.$e);else{let r;b.setState(e=>{let{files:t}=e;return{files:[...t,k]}});let i={};if(a.includes(t.type)){if(r={kind:n.Ei.Multimodal},!x){let{width:e,height:r}=await (0,f.po)(t);if(e>2048||r>2048)try{let a=await (0,m.Tu)(t,2048),n=await (0,f.po)(a);e=n.width,r=n.height,t=a}catch(e){s.U.addError(Error("Error resizing image:",{cause:e}))}i.imageDimensions={width:e,height:r}}}else switch(h){case p.AJ.Multimodal:throw Error("Multimodal file upload not supported mime type, ".concat(t.type,"\nSupported mime types: ")+a.join(", "));case p.AJ.Interpreter:r={kind:n.Ei.AceUpload};break;case p.AJ.Retrieval:r={kind:n.Ei.MyFiles},i.usesRetrievalIndex=!0;break;case p.AJ.ProfilePicture:throw Error("cannot upload profile picture via uploadFile");case p.AJ.ContextConnector:case p.AJ.None:return}null!=v&&(r={kind:n.Ei.Gizmo,gizmoId:v}),c.skipUpload||(x?await (0,f.R3)(e,t,r,a,x,c.gizmoId,l):await (0,f.cT)(e,t,l,r,w,i))}},createFileCompleted:(e,t,r,a)=>{let n=b.getState().files,i=n.findIndex(t=>t.tempId===e),o=n[i];if(i>=0&&o.status===p.XX.Uploading){let e=[...n];e.splice(i,1,x(x({},o),{},{progress:10,fileId:t,cdnUrl:r,contextConnector:a})),b.setState({files:e})}},updateProgress:(e,t)=>{let r=b.getState().files,a=r.findIndex(t=>t.tempId===e),n=r[a];if(a>=0&&n.status===p.XX.Uploading){let e=[...r];e.splice(a,1,x(x({},n),{},{progress:t})),b.setState({files:e})}},uploadCompleted:(e,t,r,a,n)=>{let s=b.getState().files,l=s.findIndex(t=>t.tempId===e);if(l>=0&&s[l].status===p.XX.Uploading&&null!=s[l].fileId){var c,d,u;let t=s[l],f=[...s],g=x(x({},t),{},{tempId:e,status:p.XX.Ready,progress:100,fileSpec:x(x({name:t.file.name,id:t.fileId,size:t.file.size,contextConnectorInfo:t.contextConnectorInfo,mimeType:null!==(c=null!==(d=null==a?void 0:a.mimeType)&&void 0!==d?d:t.file.type)&&void 0!==c?c:(0,m.s1)(t.file.name)},r||{}),a||{})});f.splice(l,1,g);let v=x({},b.getState().connectorFileData);n&&(v[null==n?void 0:n.file_id]=n),b.setState({files:f,connectorFileData:v}),i.A.logEvent(o.M.uploadFileCompleted,{status:t.status,fileId:t.fileId,contextConnector:null!==(u=t.contextConnector)&&void 0!==u?u:"local"})}},remove:(e,t,r,a,n)=>{let s=b.getState().files,l=s.findIndex(t=>t.tempId===e);if(l>=0){let e=s[l];"error"===t?i.A.logEvent(o.M.uploadFileError,{status:e.status,fileId:e.fileId,client:"web",errorClassName:null!=r?r:"undefined",useCaseType:a,uploadStatus:null!=n?n:"undefined",contextConnector:e.contextConnector}):i.A.logEvent(o.M.removeFile,{status:e.status,fileId:e.fileId});let c=[...s];c.splice(l,1),b.setState({files:c})}}},w={onFileCreated:h.createFileCompleted,onFileUploadProgress:h.updateProgress,onFileUploaded:h.uploadCompleted,onError:h.remove},j=(0,l.vU)({maxUploadsAtATime:{id:"useFilePickerState.maxUploadsAtATime",defaultMessage:"Unable to upload {fileName}. Max {maxUploads} uploads at a time"},duplicateFileAttached:{id:"useFilePickerState.duplicateFileAttached",defaultMessage:"Unable to upload {fileName} because an identical file has already been attached to this message."}})},88815:function(e,t,r){r.d(t,{J:function(){return n},N:function(){return i}});var a=r(68810);let n={label:"Auto",value:""},i=(0,a.Ue)(()=>({forceParagen:!1,forceParagenModel:n,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},75592:function(e,t,r){r.d(t,{ZP:function(){return s}});var a=r(57869),n=r(37088),i=r(92379),o=r(72895);r(93865),r(95295),r(82845);var s=(0,i.forwardRef)(function(e,t){var r=(0,a.u)(e);return i.createElement(o.S,(0,n.Z)({ref:t},r))})}}]);
//# sourceMappingURL=3662-9fb79f3464e5368e.js.map