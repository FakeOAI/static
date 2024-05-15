"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2527],{52527:function(e,t,a){a.d(t,{hb:function(){return eg},yG:function(){return ex},ZP:function(){return ed}});var r,s,n,i,l,o=a(49292),c=a(39993),d=a(61939),p=a(14725),u=a(71023),m=a(13415),x=a(37358),f=a(3831),g=a(25309),j=a(47414),b=a(73433),v=a(70079),h=a(76483),w=a(9063),y=a(68498),k=a(47566),P=a(35250);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach(function(t){(0,c.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function M(e){let{onFileChange:t,className:a,message:r,mimeTypes:s}=e,n=(0,w.Z)(),i=null!=r?r:n.formatMessage(Z.helpText),{open:l,getRootProps:o,getInputProps:c,isDragActive:d}=(0,h.uI)(N({disabled:!1,noClick:!0,onDropAccepted:e=>{if(e.length>0){let a=e[0];s&&s.includes(a.type)&&t(a)}},onDropRejected:()=>null,multiple:!1,maxSize:j.xC},(0,b.Z8)(s)));return(0,P.jsxs)("div",N(N({className:"flex flex-col content-center justify-center gap-3 rounded border border-dashed px-6 py-16 text-center"+(d?" border-green-600 bg-green-600 bg-opacity-10":"border-token-border-medium")+" "+(null!=a?a:"")},o()),{},{children:[(0,P.jsx)("input",N({},c())),(0,P.jsx)("div",{className:"text-center dark:text-white",children:(0,P.jsx)("div",{className:"inline-block",children:(0,P.jsx)(k.tCl,{})})}),(0,P.jsx)("div",{className:"text-center text-sm",children:i}),(0,P.jsx)("div",{className:"cursor-pointer text-center text-sm font-bold text-green-600",onClick:()=>{l()},children:n.formatMessage(Z.openFilePicker)})]}))}let Z=(0,y.vU)({helpText:{id:"FileUploadBox.helpText",defaultMessage:"Drop file here to upload"},openFilePicker:{id:"FileUploadBox.openFilePicker",defaultMessage:"Browse files"}});var E=a(24641),D=a(93647),A=a(68608),C=a(63021),S=a(96417),F=a(28592),B=a(44506),U=a(83901),W=a(82473),R=a(25494),I=a(84692);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach(function(t){(0,c.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function X(e){var t,a;let{workspace:r}=e,{0:s,1:n}=(0,v.useState)(null!==(t=null==r?void 0:r.name)&&void 0!==t?t:""),{0:i,1:l}=(0,v.useState)(!1);!i&&r&&(l(!0),""==s&&n(null!==(a=null==r?void 0:r.name)&&void 0!==a?a:""));let{0:o,1:c}=(0,v.useState)(r.profilePictureUrl),{0:u,1:m}=(0,v.useState)(r.profilePictureId),x=(0,U.EV)(U.B.WorkspaceAppearance),j=(0,w.Z)(),{0:h,1:y}=(0,v.useState)(void 0);async function k(e){let t=await (0,b.WI)(e,2*p.EF.workspaceAvatarPreview),a=(0,S.W7)(t);y({tempId:a,file:t,status:C.XX.Uploading,progress:1,fileId:null,cdnUrl:null}),(0,S.lU)(a,t,j,d.Ei.ProfilePicture,{onFileCreated(e,t,a){y(r=>"initial"!==r&&(null==r?void 0:r.tempId)===e&&r.status===C.XX.Uploading?_(_({},r),{},{progress:10,fileId:t,cdnUrl:a}):r)},onFileUploadProgress(e,t){y(a=>"initial"!==a&&(null==a?void 0:a.tempId)===e&&a.status===C.XX.Uploading?_(_({},a),{},{progress:t}):a)},onFileUploaded(e,t,a){y(t=>"initial"!==t&&t&&t.cdnUrl&&t.tempId===e?(B.Z.getFileDownloadLink(t.fileId).then(e=>{e.status===d.KF.Success&&(m(t.fileId),c(e.download_url))}),_(_({},t),{},{status:C.XX.Ready,progress:100,fileSpec:_({name:t.file.name,id:t.fileId,size:t.file.size},null!=a?a:{})})):t)},onError(e){y(t=>{if("initial"!==t&&(null==t?void 0:t.tempId)===e){m(void 0),c(void 0),X(null);return}return t})}})}let O=function(e){let t=(0,W.NL)(),a=(0,w.Z)();return(0,R.D)({mutationFn:t=>{let{name:r,profilePictureId:s,profilePictureUrl:n}=t;return B.Z.patchWorkspace({workspaceId:e,name:r,profile_picture_id:s,profile_picture_url:n}).catch(e=>{F.m.danger(a.formatMessage(L.saveError,{error:e.message}))})},onSuccess:()=>{t.invalidateQueries({queryKey:["account-status"]})}})}(r.id),N=(0,P.jsx)(E.ZP.Button,{color:"primary",disabled:"initial"!==h&&void 0!==h&&h.status!==C.XX.Ready||"initial"!==h&&void 0!==h&&h.status===C.XX.Ready&&!o||O.isPending||0===s.trim().length,onClick:async()=>{O.mutate({name:s,profilePictureId:u,profilePictureUrl:o}),U.vm.closeModal(U.B.WorkspaceAppearance)},title:j.formatMessage(L.modalSubmit)}),Z=(0,P.jsx)(E.ZP.Button,{onClick:()=>{y(void 0),m(r.profilePictureId),c(r.profilePictureUrl),U.vm.closeModal(U.B.WorkspaceAppearance)},title:j.formatMessage(L.modalCancel)}),{0:T,1:X}=(0,v.useState)(null);return(0,v.useEffect)(()=>{if("initial"!==h&&void 0!=h&&null==T){let e=new FileReader;e.addEventListener("load",()=>{let t=e.result;"string"==typeof t&&X(t)}),e.readAsDataURL(h.file)}},[h,T]),(0,P.jsxs)(A.Z,{isOpen:x,onClose:()=>U.vm.closeModal(U.B.WorkspaceAppearance),showCloseButton:!0,primaryButton:N,secondaryButton:Z,type:"danger",title:j.formatMessage(L.modalTitle),children:[(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-name",className:"block pb-1 font-medium text-token-text-primary",children:(0,P.jsx)(I.Z,_({},L.workspaceName))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:(0,P.jsx)(I.Z,_({},L.workspaceNameDescription))})]}),(0,P.jsx)("div",{className:"mb-4",children:(0,P.jsx)(g.Z,{type:"text",name:"workspace-name",value:s,onChange:e=>n(e.target.value),maxLength:64})}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-avatar",className:"block pb-1 font-medium text-token-text-primary",children:(0,P.jsx)(I.Z,_({},L.workspaceAvatar))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:j.formatMessage(L.workspaceAvatarDescription,{size:2*p.EF.workspaceAvatarPreview})})]}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap text-center",children:[o?(0,P.jsxs)("div",{className:"relative mb-3 inline-flex",children:[(0,P.jsx)(p.B0,{src:o,size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute -right-1 -top-1",children:(0,P.jsx)(z,{onClick:()=>{m(null),c(null),y(void 0),X(null)}})})]}):void 0!=h&&"initial"!==h&&T?(0,P.jsx)("div",{className:"flex flex-col justify-center text-center",children:(0,P.jsxs)("div",{className:"relative mb-3 text-center",children:[(0,P.jsx)(p.B0,{src:URL.createObjectURL(h.file),size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-white",children:(0,P.jsx)(f.Z,{percentage:h.progress,className:"h-6 w-6"})})]})}):(0,P.jsx)(M,{onFileChange:e=>{k(e)},mimeTypes:b.KL}),(0,P.jsx)(D.Z,{children:j.formatMessage(L.propagationWarning)})]})]})}function z(e){let{onClick:t}=e;return(0,P.jsx)("div",{className:" flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",onClick:t,children:(0,P.jsx)(k.tPq,{className:"h-3 w-3"})})}let L=(0,y.vU)({modalTitle:{id:"workspaceAppearanceModal.title",defaultMessage:"Workspace appearance"},modalSubmit:{id:"workspaceAppearanceModal.submit",defaultMessage:"Save"},modalCancel:{id:"workspaceAppearanceModal.cancel",defaultMessage:"Cancel"},workspaceName:{id:"workspaceAppearanceModal.workspaceName",defaultMessage:"Workspace name"},workspaceNameDescription:{id:"workspaceAppearanceModal.workspaceNameDescription",defaultMessage:"Update the name of the workspace."},workspaceAvatar:{id:"workspaceAppearanceModal.workspaceAvatar",defaultMessage:"Workspace image"},workspaceAvatarDescription:{id:"workspaceAppearanceModal.workspaceAvatarDescription",defaultMessage:"Upload a JPEG or PNG workspace image for your team. (Minimum {size}\xd7{size}px recommended.)"},propagationWarning:{id:"workspaceAppearanceModal.propagationWarning",defaultMessage:"Changes to the workspace name and image may take some time to take effect."},saveError:{id:"workspaceAppearanceModal.saveError",defaultMessage:"Failed to save workspace appearance"}});var G=a(6716),K=a(42797),Y=a(93130),q=a(19870),H=a(19841),V=a(22348),$=a(21389),J=a(21689),Q=a(77919),ee=a(29667),et=a(15787);function ea(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function er(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(a),!0).forEach(function(t){(0,c.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ea(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function es(e){let{accountId:t,subscription:a}=e,r=(0,w.Z)(),s=(0,ee.wK)(t),{0:n,1:i}=(0,v.useState)(!1),l=(0,et.Gk)(t),o=async()=>{i(!0);try{await s.mutateAsync(t)}catch(e){F.m.warning(r.formatMessage(en.errorRenewingSubscription),{hasCloseButton:!0})}finally{i(!1)}};return(0,P.jsx)("div",{className:"bg-token-main-surface-secondary",children:(0,P.jsxs)("div",{className:"mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",children:[(0,P.jsxs)("div",{className:"mx-2 flex-grow md:mx-4",children:[(0,P.jsxs)("div",{className:"flex items-center",children:[(0,P.jsx)(J.FE,{className:"mr-4 hidden text-orange-500 md:block"}),(0,P.jsx)("p",{className:"text-lg font-semibold",children:(0,P.jsx)(I.Z,er({},en.workspaceWillBeDeactivated))})]}),null!=a.active_until&&(0,P.jsx)("p",{className:"md:ml-8",children:(0,P.jsx)(I.Z,er(er({},en.retainAccessUntil),{},{values:{expiryDate:new Date(a.active_until)}}))})]}),l&&(0,P.jsx)(Q.z,{color:"primary",onClick:o,loading:n,children:(0,P.jsx)(I.Z,er({},en.reactivateBtn))})]})})}let en=(0,y.vU)({retainAccessUntil:{id:"adminPage.retainAccessUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},workspaceWillBeDeactivated:{id:"adminPage.workspaceWillBeDeactivated",defaultMessage:"This workspace will be deactivated."},reactivateBtn:{id:"adminPage.reactivateBtn",defaultMessage:"Reactivate"},errorRenewingSubscription:{id:"adminPage.errorRenewingSubscription",defaultMessage:"There was an error reactivating your subscription."}});function ei(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function el(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(a),!0).forEach(function(t){(0,c.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ei(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function eo(e){let{route:t,icon:a,name:r,upsellEnterprise:s=!1}=e,n=(0,V.useRouter)();return s?(0,P.jsx)(G.u,{label:(0,P.jsx)(I.Z,el({},ej.availableForEnterprise)),side:"right",children:(0,P.jsxs)(K.ZB,{$as:"button",className:(0,H.default)("w-full rounded text-left","hover:bg-token-sidebar-surface-secondary"),children:[(0,P.jsx)(k.oVl,{className:"icon-sm shrink-0 text-token-text-secondary"}),(0,P.jsx)("span",{className:"text-token-text-secondary",children:(0,P.jsx)(I.Z,el({},r))})]})}):(0,P.jsxs)(K.ZB,{$as:"button",className:(0,H.default)("w-full rounded text-left hover:bg-token-sidebar-surface-secondary",n.route===t&&"bg-token-sidebar-surface-secondary"),onClick:e=>{n.push(t),e.stopPropagation()},children:[a,(0,P.jsx)(I.Z,el({},r))]})}function ec(e){let{workspace:t,hasAdminPrivileges:a,hasOwnerPrivileges:r}=e,s=(0,V.useRouter)(),n=(0,v.useCallback)(()=>{s.push("/")},[s]),i=(0,q.ec)(q.F_.isEnterprisePlan);return(0,P.jsxs)("nav",{className:"p-2",children:[(0,P.jsx)("div",{className:"mb-1 flex flex-row gap-2",children:(0,P.jsxs)(x.MP,{onClick:n,children:[(0,P.jsx)(k.Y4O,{className:"icon-sm"}),(0,P.jsx)(I.Z,el({},ej.backToChat))]})}),(0,P.jsxs)("div",{className:"flex flex-col gap-2 py-2",children:[(0,P.jsxs)("div",{className:"flex flex-col gap-2 rounded px-2 py-2 ".concat(r?"cursor-pointer hover:bg-token-main-surface-secondary":""),onClick:()=>{r&&U.vm.openModal(U.B.WorkspaceAppearance)},children:[(0,P.jsx)(p.B0,{size:"large",src:null==t?void 0:t.profilePictureUrl}),(0,P.jsxs)("div",{className:"align-center flex flex-row",children:[(0,P.jsx)("h2",{className:"flex-1 text-lg text-token-text-primary dark:text-white",children:null==t?void 0:t.name}),r?(0,P.jsx)("div",{className:"my-auto h-4 flex-initial align-middle dark:text-white",children:(0,P.jsx)(k.vdY,{className:"icon-sm opacity-70 hover:opacity-100"})}):null]})]}),(0,P.jsx)(eo,{route:"/admin",icon:(0,P.jsx)(k.yjj,{className:"icon-sm"}),name:ej.membersPageTitle}),i&&(0,P.jsx)(eo,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!i,name:(0,y.Em)({id:"aecR1i",defaultMessage:"Groups"})}),r&&(0,P.jsx)(eo,{route:"/admin/billing",icon:(0,P.jsx)(k.ciH,{className:"icon-sm"}),name:ej.billing}),r&&(0,P.jsx)(eo,{route:"/admin/gpts",icon:(0,P.jsx)(k.frp,{className:"icon-sm"}),name:ej.gpts}),r&&(0,P.jsx)(eo,{route:"/admin/settings",icon:(0,P.jsx)(k.SWE,{className:"icon-sm"}),name:ej.settings}),!i&&(0,P.jsx)("span",{className:"mx-3 border-t border-y-token-border-medium"}),!i&&(0,P.jsx)(eo,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!i,name:(0,y.Em)({id:"aecR1i",defaultMessage:"Groups"})}),a&&(0,P.jsx)(eo,{route:"/admin/analytics",icon:(0,P.jsx)(k.IeX,{className:"icon-sm"}),name:ej.analytics,upsellEnterprise:!i}),r&&(0,P.jsx)(eo,{route:"/admin/identity",upsellEnterprise:!i,icon:(0,P.jsx)(k.kaz,{className:"icon-sm"}),name:ej.identity})]})]})}function ed(e){var t;let{mobilePageTitle:a,requireAdminPrivileges:r=!1,requireOwnerPrivileges:s=!1,children:n}=e,i=(0,q.ec)(e=>e.currentWorkspace),l=(0,V.useRouter)(),o=null!=i?(t=i.role)===d.r3.ADMIN||t===d.r3.OWNER:void 0,c=null!=i?i.role===d.r3.OWNER:void 0;return((0,v.useEffect)(()=>{r&&!1===o&&l.push("/admin"),s&&!1===c&&l.push("/admin")},[r,o,l,s,c]),null==(0,Y.t)())?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m.Z,{mobileHeaderContent:a,forceOpenDesktopSidebar:!0,sidebar:(0,P.jsx)(ec,{workspace:null!=i?i:void 0,hasAdminPrivileges:o,hasOwnerPrivileges:c}),children:n}),null==i?null:(0,P.jsx)(X,{workspace:i})]})}let ep=$.Z.div(r||(r=(0,o.Z)(["border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10"]))),eu=$.Z.h2(s||(s=(0,o.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))),em=(0,$.Z)(eu)(n||(n=(0,o.Z)(["font-normal text-base text-token-text-secondary"])));function ex(e){let{title:t,subtitle:a}=e,{data:r}=(0,ee.ZP)(),s=(0,Y.t)(),n=s&&r&&r.plan_type===d.D8.TEAM&&!r.will_renew;return(0,P.jsxs)(P.Fragment,{children:[n&&(0,P.jsx)(es,{accountId:s.id,subscription:r}),(0,P.jsxs)(ep,{children:[(0,P.jsx)(eu,{children:t}),a&&(0,P.jsx)(em,{children:a})]})]})}$.Z.p(i||(i=(0,o.Z)(["text-sm text-token-text-tertiary"])));let ef=$.Z.div(l||(l=(0,o.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"])));function eg(e){let{children:t,showSpinner:a}=e,r=(0,Y.t)(),s=(0,q.ec)(e=>e.currentWorkspace),n=!r||a;return(0,P.jsxs)(ef,{children:[n&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(u.Z,{})}),!n&&!s&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(I.Z,el({},ej.workspaceNotFound))}),!n&&s&&t]})}let ej=(0,y.vU)({workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},membersPageTitle:{id:"adminPage.membersPageTitle",defaultMessage:"Members"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},billing:{id:"adminPage.billing.1",defaultMessage:"Billing"},gpts:{id:"adminPage.gpts",defaultMessage:"GPTs"},settings:{id:"adminPage.Settings",defaultMessage:"Settings"},identity:{id:"adminPage.identity.0",defaultMessage:"Identity & provisioning"},availableForEnterprise:{id:"adminPage.availableForEnterprise",defaultMessage:"Available for Enterprise plan"}})}}]);
//# sourceMappingURL=2527-5bdbd83f3ff3df57.js.map