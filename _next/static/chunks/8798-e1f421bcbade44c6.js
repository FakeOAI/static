"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8798],{41854:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(94521),i=r(17379),s=r(19841),o=r(651);let l=["className"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){let{className:t}=e,r=(0,i.Z)(e,l);return(0,o.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,s.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},r))}},61802:function(e,t,r){r.d(t,{U:function(){return l}});var n=r(94521),i=r(93747),s=r(15236);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let l={filePickerStarted:e=>{i.A.logEvent(s.M.contextConnectorsPickerStarted,{contextConnector:e})},filePickerLoaded:e=>{i.A.logEvent(s.M.contextConnectorsPickerLoaded,{contextConnector:e})},filePickerPicked:(e,t)=>{i.A.logEvent(s.M.contextConnectorsPickerPicked,{contextConnector:e,numFiles:t})},filePickerCancelled:e=>{i.A.logEvent(s.M.contextConnectorsPickerCancelled,{contextConnector:e})},linkPasted:e=>{i.A.logEvent(s.M.contextConnectorsLinkPasted,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}}},65938:function(e,t,r){r.d(t,{$:function(){return o},V:function(){return l}});var n=r(21904),i=r(82920),s=r(651);function o(e,t){switch(e){case n.PO.GDRIVE_SYNC_CONNECTOR:case n.PO.GDRIVE:switch(t){case"doc":case"docx":return"Google Docs";case"xls":case"xlsx":return"Google Sheets";case"ppt":case"pptx":return"Google Slides";default:return"Google Drive"}case n.PO.O365:case n.PO.O365_PERSONAL:case n.PO.O365_BUSINESS:switch(t){case"doc":case"docx":return"Microsoft Word";case"xls":case"xlsx":return"Microsoft Excel";case"ppt":case"pptx":return"Microsoft PowerPoint";default:return"Microsoft OneDrive"}}(0,i.ZP)(e)}function l(e){let{contextConnector:t,extension:r}=e;return(0,s.jsx)(s.Fragment,{children:o(t,r)})}},14426:function(e,t,r){var n;r.d(t,{D6:function(){return o},JO:function(){return s},XS:function(){return a},dQ:function(){return i},eA:function(){return l}});let i="77377267392",s="AIzaSyAOHzpLbFWAcLwrOn1IvQeVd0jHRntTlPk",o="203712390664",l="AIzaSyCECDrDXDU460DD1WTHtz8jSkyuGjgsI8w",a=((n={}).OneDrive_BUSINESS_DRIVE_ITEMS="https://graph.microsoft.com/v1.0/me/drive/items",n.OneDrive_BUSINESS_DRIVE_ROOT="https://graph.microsoft.com/v1.0/me/drive/root",n.OneDrive_BUSINESS_SHARES="https://graph.microsoft.com/v1.0/shares",n.OneDrive_PERSONAL_DRIVE_ITEMS="https://api.onedrive.com/v1.0/drives",n.OneDrive_PERSONAL_SHARES="https://api.onedrive.com/v1.0/shares",n)},65961:function(e,t,r){r.d(t,{X:function(){return s}});var n=r(14426);let i=null;function s(e){return null==i&&(i=new Promise((e,t)=>{let r=document.createElement("script");r.src="https://apis.google.com/js/api.js",r.onload=e,r.onerror=t,document.documentElement.appendChild(r)}).then(()=>Promise.all([new Promise(e=>gapi.load("client",e)),new Promise(e=>gapi.load("client:picker",e))])).then(()=>(gapi.client.setToken({access_token:e}),gapi.client.init({apiKey:n.JO,scope:"https://www.googleapis.com/auth/drive.file",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]})))),i}},56489:function(e,t,r){r.d(t,{j:function(){return a}});var n=r(21904),i=r(61802),s=r(20055),o=r(14426),l=r(65961);async function a(e,t,r,a){async function d(e){switch(e.action){case google.picker.Action.PICKED:i.U.filePickerPicked(n.PO.GDRIVE,e.docs.length),a(e.docs.map(e=>({connector:t,id:e.id,title:e.name,mimeType:e.mimeType,url:e.url,syntheticExtension:"document"===e.type?(0,s.I)(e.mimeType):null})));break;case google.picker.Action.CANCEL:i.U.filePickerCancelled(n.PO.GDRIVE);return;case"loaded":i.U.filePickerLoaded(n.PO.GDRIVE);return}}await (0,l.X)(r);let u=new google.picker.DocsView(google.picker.ViewId.DOCS).setIncludeFolders(!0).setSelectFolderEnabled(t===n.PO.GDRIVE_SYNC_CONNECTOR).setMode(google.picker.DocsViewMode.LIST);t===n.PO.GDRIVE_SYNC_CONNECTOR&&u.setMimeTypes("application/vnd.google-apps.folder");let p="en";c.includes(e)?p=e:c.includes(e.split("-")[0])&&(p=e.split("-")[0]);let f=new google.picker.PickerBuilder().enableFeature(google.picker.Feature.MULTISELECT_ENABLED).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setDeveloperKey(t===n.PO.GDRIVE_SYNC_CONNECTOR?o.eA:o.JO).setAppId(t===n.PO.GDRIVE_SYNC_CONNECTOR?o.D6:o.dQ).setOAuthToken(r).addView(u).setCallback(d).setLocale(p).build();i.U.filePickerStarted(n.PO.GDRIVE),f.setVisible(!0);let h=function(){var e;let t=null!==(e=window.document.body.querySelector("div.picker-dialog-bg"))&&void 0!==e?e:window.document.body.querySelector("div.oai-picker-dialog-bg");return null==t||t.classList.add("oai-picker-dialog-bg","bg-black/50","dark:bg-black/80","absolute","inset-0","z-[1000]"),null==t||t.classList.remove("picker-dialog-bg"),t}(),x=()=>{i.U.filePickerCancelled(n.PO.GDRIVE),f.setVisible(!1),null==h||h.removeEventListener("click",x)};null==h||h.addEventListener("click",x)}let c=["af","am","ar","bg","bn","ca","cs","da","de","el","en","en-GB","es","es-419","et","eu","fa","fi","fil","fr","fr-CA","gl","gu","hi","hr","hu","id","is","it","iw","ja","kn","ko","lt","lv","ml","mr","ms","nl","no","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","sw","ta","te","th","tr","uk","ur","vi","zh-CN","zh-HK","zh-TW","zu"]},1985:function(e,t,r){r.d(t,{l:function(){return f}});var n=r(17379),i=r(62484),s=r(79931);r(59031);var o=r(19841),l=r(92379),a=r(26123),c=r(25940),d=r(66246),u=r(651);let p=["contextConnectorSourceUrl"];function f(e){let{contextConnectorSourceUrl:t}=e,r=(0,n.Z)(e,p),c=(0,a.Z)(),{0:f,1:x}=(0,l.useState)({width:0,height:0}),m=f.width/f.height,g=f.width>0&&f.height>0,j=(0,l.useMemo)(()=>{if(void 0!==t){var e;let r=new URL(t);return"https:"!==r.protocol&&(r=void 0),null===(e=r)||void 0===e?void 0:e.toString()}},[t]);return(0,l.useEffect)(()=>{if(!r.src)throw Error("ExpandableImage requires a src");let e=new Image;e.onload=()=>{x({width:e.naturalWidth,height:e.naturalHeight})},e.onerror=()=>{},e.src=r.src},[r.src]),(0,u.jsxs)(s.fC,{children:[(0,u.jsx)(s.xz,{className:r.className,disabled:!g,children:r.children}),(0,u.jsx)(s.h_,{children:(0,u.jsxs)(s.aV,{className:"fixed inset-0 flex items-center justify-center overflow-hidden bg-black/90 radix-state-open:animate-show dark:bg-black/80",children:[(0,u.jsx)(s.x8,{asChild:!0,children:(0,u.jsx)("button",{className:"absolute right-4 top-4",children:(0,u.jsx)(d.tPq,{className:"h-5 w-5 text-gray-100"})})}),(0,u.jsxs)(s.VY,{className:"shadow-xl focus:outline-none radix-state-open:animate-contentShow",children:[(0,u.jsx)("div",{className:(0,o.default)("relative max-h-[85vh] max-w-[90vw]"),style:{aspectRatio:m},children:(0,u.jsx)("img",{src:r.src,alt:r.alt,className:"h-full w-full object-contain"})}),j&&(0,u.jsx)("div",{className:"absolute right-14 top-4",children:(0,u.jsx)(i.u,{label:c.formatMessage(h.openOriginal),children:(0,u.jsx)("a",{href:j,target:"_blank",children:(0,u.jsx)(d.ReP,{className:"h-5 w-5 rotate-180 text-gray-100"})})})})]})]})})]})}let h=(0,c.vU)({openOriginal:{id:"ExpandableImage.openOriginal",defaultMessage:"Open original image"}})},33403:function(e,t,r){r.d(t,{Sv:function(){return M},UJ:function(){return E},ZP:function(){return N}});var n,i=r(41141),s=r(94521),o=r(12586),l=r(93747),a=r(15236),c=r(92379),d=r(72349),u=r(25940),p=r(26123),f=r(72256),h=r(74091),x=r(21629),m=r(94982),g=r(62004),j=r(67625),v=r(14019),b=r(18532),k=r(61457),O=r(37234),w=r(14161),y=r(58543),C=r(651);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let D=(0,u.vU)({dragInstructions:{id:"FileDropZone.dragInstructions",defaultMessage:"Add anything"},dragAllAccepted:{id:"FileDropZone.dragAllAccepted",defaultMessage:"Drop any file here to add it to the conversation"}});function N(e){var t;let{className:r,children:n,clientThreadId:i,currentModelConfig:s}=e,l=(0,p.Z)(),a=(0,g.W)(i),c=(0,y.YN)(s,a),u=c!==k.AJ.None,h=(0,w.gF)(e=>e.files),m=(c===k.AJ.Multimodal?b.Ql:b.dO)-h.length,{getGizmoId:v}=(0,x.Q)(),{handleFileAccepted:O}=M(l,(0,y.YN)(s,a),(0,y.p0)(s,a),"drag",v,null===(t=(0,y.ww)(s,a))||void 0===t?void 0:t.attachments),P=(0,o.TX)(),N=(0,y.Z8)((0,y.Zp)(s,a)),{getRootProps:S,isDragActive:_}=(0,d.uI)(L({maxFiles:m,disabled:!u||m<=0||null!=P,noClick:!0,onDropAccepted:O,onDropRejected:e=>E(e,l,c),multiple:!0,maxSize:b.xC},N)),A=function(){if(!N.accept||0===Object.keys(N.accept).length)return[];let e=[];return Object.values(N.accept).forEach(t=>e.push(...t)),e.sort()}();return(0,C.jsxs)("div",L(L({},S({className:r})),{},{children:[n,_&&(0,C.jsxs)(F,{children:[(0,C.jsx)(j.Fk,{}),(0,C.jsx)("h3",{children:(0,C.jsx)(f.Z,L({},D.dragInstructions))}),(0,C.jsx)("h4",{className:"w-2/3 text-center",children:A.length>0?A.join(", "):(0,C.jsx)(f.Z,L({},D.dragAllAccepted))})]})]}))}function E(e,t,r){let{errors:n}=e[0];n.forEach(e=>{let n=(0,v.s)(e);"string"==typeof n?m.m.danger(n,{hasCloseButton:!0}):m.m.danger(t.formatMessage(n,{size:b.EZ,maxNum:r===k.AJ.Multimodal?b.Ql:b.dO}),{hasCloseButton:!0})})}function M(e,t,r,n,i,s){return{handleFileAccepted:(0,c.useCallback)(async(o,c)=>{l.A.logEvent(a.M.uploadFile,{client:"web",eventSource:n,intent:t.toString()});let d=null!=i?await i():void 0;o.length>0&&o.forEach(n=>{w.Dw.uploadFile((0,O.W7)(n),n,t,r,e,{gizmoId:d},s)})},[n,t,i,r,e,s])}}let F=h.Z.div(n||(n=(0,i.Z)(["absolute inset-0 opacity-80 flex gap-2 flex-col justify-center items-center bg-token-main-surface-primary text-token-text-primary"])))},67625:function(e,t,r){r.d(t,{Fk:function(){return s},LO:function(){return c},N:function(){return a},OD:function(){return o},pC:function(){return d},tf:function(){return l},yc:function(){return u}});var n=r(55257),i=r(651);let s=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"132",height:"108",viewBox:"0 0 132 108",fill:"none",className:t,children:[(0,i.jsx)("g",{clipPath:"url(#clip0_3605_64419)",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.2025 29.3514C10.778 33.2165 8.51524 37.1357 11.8281 49.4995L13.4846 55.6814C16.7975 68.0453 20.7166 70.308 35.1411 66.443L43.3837 64.2344C57.8082 60.3694 60.0709 56.4502 56.758 44.0864L55.1016 37.9044C51.7887 25.5406 47.8695 23.2778 33.445 27.1428L29.3237 28.2471L25.2025 29.3514ZM18.1944 42.7244C18.8572 41.5764 20.325 41.1831 21.4729 41.8459L27.3517 45.24C28.4996 45.9027 28.8929 47.3706 28.2301 48.5185L24.836 54.3972C24.1733 55.5451 22.7054 55.9384 21.5575 55.2757C20.4096 54.613 20.0163 53.1451 20.6791 51.9972L22.8732 48.1969L19.0729 46.0028C17.925 45.3401 17.5317 43.8723 18.1944 42.7244ZM29.4091 56.3843C29.066 55.104 29.8258 53.7879 31.1062 53.4449L40.3791 50.9602C41.6594 50.6172 42.9754 51.377 43.3184 52.6573C43.6615 53.9376 42.9017 55.2536 41.6214 55.5967L32.3485 58.0813C31.0682 58.4244 29.7522 57.6646 29.4091 56.3843Z",fill:"#AFC1FF"})}),(0,i.jsx)("g",{clipPath:"url(#clip1_3605_64419)",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M86.8124 13.4036C81.0973 11.8722 78.5673 13.2649 77.0144 19.0603L68.7322 49.97C67.1793 55.7656 68.5935 58.2151 74.4696 59.7895L97.4908 65.958C103.367 67.5326 105.816 66.1184 107.406 60.1848L115.393 30.379C115.536 29.8456 115.217 29.2959 114.681 29.16C113.478 28.8544 112.435 28.6195 111.542 28.4183C106.243 27.2253 106.22 27.2201 109.449 20.7159C109.73 20.1507 109.426 19.4638 108.816 19.3004L86.8124 13.4036ZM87.2582 28.4311C86.234 28.1567 85.1812 28.7645 84.9067 29.7888C84.6323 30.813 85.2401 31.8658 86.2644 32.1403L101.101 36.1158C102.125 36.3902 103.178 35.7824 103.453 34.7581C103.727 33.7339 103.119 32.681 102.095 32.4066L87.2582 28.4311ZM82.9189 37.2074C83.1934 36.1831 84.2462 35.5753 85.2704 35.8497L100.107 39.8252C101.131 40.0996 101.739 41.1524 101.465 42.1767C101.19 43.201 100.137 43.8088 99.1132 43.5343L84.2766 39.5589C83.2523 39.2844 82.6445 38.2316 82.9189 37.2074ZM83.2826 43.2683C82.2584 42.9939 81.2056 43.6017 80.9311 44.626C80.6567 45.6502 81.2645 46.703 82.2888 46.9775L89.7071 48.9652C90.7313 49.2396 91.7841 48.6318 92.0586 47.6076C92.333 46.5833 91.7252 45.5305 90.7009 45.256L83.2826 43.2683Z",fill:"#7989FF"})}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.4004 71.8426C40.4004 57.2141 44.0575 53.5569 61.1242 53.5569H66.0004H70.8766C87.9432 53.5569 91.6004 57.2141 91.6004 71.8426V79.1569C91.6004 93.7855 87.9432 97.4426 70.8766 97.4426H61.1242C44.0575 97.4426 40.4004 93.7855 40.4004 79.1569V71.8426ZM78.8002 67.4995C78.8002 70.1504 76.6512 72.2995 74.0002 72.2995C71.3492 72.2995 69.2002 70.1504 69.2002 67.4995C69.2002 64.8485 71.3492 62.6995 74.0002 62.6995C76.6512 62.6995 78.8002 64.8485 78.8002 67.4995ZM60.7204 70.8597C60.2672 70.2553 59.5559 69.8997 58.8004 69.8997C58.045 69.8997 57.3337 70.2553 56.8804 70.8597L47.2804 83.6597C46.4851 84.72 46.7 86.2244 47.7604 87.0197C48.8208 87.8149 50.3251 87.6 51.1204 86.5397L58.8004 76.2997L66.4804 86.5397C66.8979 87.0962 67.5363 87.4443 68.2303 87.4936C68.9243 87.5429 69.6055 87.2887 70.0975 86.7967L74.8004 82.0938L79.5034 86.7967C80.4406 87.734 81.9602 87.734 82.8975 86.7967C83.8347 85.8595 83.8347 84.3399 82.8975 83.4026L76.4975 77.0026C75.5602 76.0653 74.0406 76.0653 73.1034 77.0026L68.6601 81.4459L60.7204 70.8597Z",fill:"#3C46FF"}),(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:"clip0_3605_64419",children:(0,i.jsx)("rect",{width:"56",height:"56",fill:"white",transform:"translate(0 26.9939) rotate(-15)"})}),(0,i.jsx)("clipPath",{id:"clip1_3605_64419",children:(0,i.jsx)("rect",{width:"64",height:"64",fill:"white",transform:"translate(69.5645 0.5) rotate(15)"})})]})]})},o=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#10A37F"}),(0,i.jsx)("path",{d:"M15.5 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V13.5V18M15.5 10.5H23.8333C24.7538 10.5 25.5 11.2462 25.5 12.1667V13.5V18M15.5 10.5V25.5M15.5 25.5H18H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V18M15.5 25.5H12.1667C11.2462 25.5 10.5 24.7538 10.5 23.8333V18M10.5 18H25.5",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})},l=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#FF5588"}),(0,i.jsx)("path",{d:"M19.6663 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V14.6666L19.6663 9.66663Z",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M19.667 9.66663V14.6666H24.667",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M21.3337 18.8334H14.667",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M21.3337 22.1666H14.667",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M16.3337 15.5H15.5003H14.667",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})},a=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#F8CA27"}),(0,i.jsx)("path",{d:"M10.5 14V13.5V12.1667C10.5 11.2462 11.2462 10.5 12.1667 10.5H15.5H23.8333C24.7538 10.5 25.5 11.2462 25.5 12.1667V13.5V14M10.5 14V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H15.5H18H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V14M10.5 14H25.5M14 21.5L16.5 19L19 20.5L22 17.5",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})},c=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#B161FD"}),(0,i.jsx)("path",{d:"M26.3337 23.8333C26.3337 24.2754 26.1581 24.6993 25.8455 25.0118C25.5329 25.3244 25.109 25.5 24.667 25.5H11.3337C10.8916 25.5 10.4677 25.3244 10.1551 25.0118C9.84259 24.6993 9.66699 24.2754 9.66699 23.8333V12.1667C9.66699 11.7246 9.84259 11.3007 10.1551 10.9882C10.4677 10.6756 10.8916 10.5 11.3337 10.5H15.5003L17.167 13H24.667C25.109 13 25.5329 13.1756 25.8455 13.4882C26.1581 13.8007 26.3337 14.2246 26.3337 14.6667V23.8333Z",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})},d=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#0000FF"}),(0,i.jsx)("path",{d:"M18.833 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V15.5L18.833 9.66663Z",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M18.833 9.66663V15.5H24.6663",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})},u=e=>{let{className:t}=e;return(0,i.jsxs)(n.A0,{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",className:t,children:[(0,i.jsx)("rect",{width:"36",height:"36",rx:"6",fill:"#FF6E3C"}),(0,i.jsx)("path",{d:"M21.333 23L26.333 18L21.333 13",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M14.667 13L9.66699 18L14.667 23",stroke:"white",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})]})}},63980:function(e,t,r){r.d(t,{Y:function(){return g}});var n=r(94521),i=r(85734),s=r(4702),o=r(14314),l=r(63584),a=r(93747),c=r(72256),d=r(25940),u=r(5443),p=r(73965),f=r(33112),h=r(651);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let g=e=>{let{serverDrivenRateLimitsEnabled:t,rateLimitPopup:r,fileUploadRateLimit:n,children:i}=e,o=(0,s.t)(),c=t&&!!r||!t&&!!n;return(0,h.jsx)(h.Fragment,{children:c?(0,h.jsxs)(l.fC,{delayDuration:150,onOpenChange:e=>{if(null!=n&&e){var t;a.A.logPopoverHover({type:"rate_limit",location:"file_upload",plan_type:null!==(t=null==o?void 0:o.planType)&&void 0!==t?t:"unknown"})}},children:[(0,h.jsx)(l.xz,{children:i}),(0,h.jsx)(l.h_,{children:(0,h.jsx)(p.M4,{$as:l.VY,side:"top",sideOffset:4,className:"max-w-[260px]",children:t?(0,h.jsx)(j,{rateLimitPopup:r}):(0,h.jsx)(v,{featureRateLimit:n})})})]}):i})},j=e=>{let{rateLimitPopup:t}=e,r=(0,s.t)();if(null==t)return null;let{call_to_action:n,description:o}=t,l=o||(0,h.jsx)(c.Z,m({},b.defaultDescription)),d=null==n?void 0:n.includes(i.Ev.GET_PLUS);return(0,h.jsxs)("div",{className:"p-2 text-sm text-token-text-primary",children:[(0,h.jsx)("div",{children:l}),d?(0,h.jsx)(u.z,{size:"small",color:"secondary",className:"mt-3",onClick:()=>{var e;(0,f.MG)("Rate limited file upload popover"),a.A.logRateLimitGetPlusButtonClicked({type:i.X5.FILE_UPLOAD,location:"popover",plan_type:null!==(e=null==r?void 0:r.planType)&&void 0!==e?e:"unknown",is_hard_block:!1,hard_block_reason:""})},children:(0,h.jsx)(c.Z,m({},b.getPlus))}):null]})},v=e=>{let{featureRateLimit:t}=e,r=(0,s.t)();if(null==t)return null;let{display_description:n}=t,l=(0,h.jsx)(c.Z,m({},b.defaultDescription)),d=!0,p="popover";return n&&(l=n.description||l,d=t.call_to_action===i.Pt.GET_PLUS,p=n.type),(0,h.jsxs)("div",{className:"p-2 text-sm text-token-text-primary",children:[(0,h.jsx)("div",{children:l}),d?(0,h.jsx)(u.z,{size:"small",color:"secondary",className:"mt-3",onClick:()=>{var e;(0,f.MG)("Rate limited file upload popover"),a.A.logRateLimitGetPlusButtonClicked({type:(0,o.EJ)(t),location:p,plan_type:null!==(e=null==r?void 0:r.planType)&&void 0!==e?e:"unknown",is_hard_block:!1,hard_block_reason:""})},children:(0,h.jsx)(c.Z,m({},b.getPlus))}):null]})},b=(0,d.vU)({defaultDescription:{id:"U5qAWP",defaultMessage:"You've reached your daily upload limit. Get ChatGPT Plus to unlock more."},getPlus:{id:"TeyLcp",defaultMessage:"Get Plus"}})},52868:function(e,t,r){r.d(t,{l:function(){return A},Z:function(){return F}});var n,i=r(41141),s=r(21904),o=r(81412),l=r(93223),a=r(98506),c=r(59031),d=r(19841),u=r(92379),p=r(26123),f=r(25940),h=r(74091),x=r(81354),m=r(1985),g=r(62484),j=r(66246),v=r(50684),b=r(67625),k=r(651);let O=e=>{let{className:t,contextConnector:r,extension:n}=e,i=b.pC;switch(r){case s.PO.GDRIVE:case s.PO.GDRIVE_SYNC_CONNECTOR:switch(n){case"doc":case"docx":i=j.UkS;break;case"xls":case"xlsx":i=j.UWy;break;case"ppt":case"pptx":i=j.rJj;break;default:i=j.Gle}break;case s.PO.O365_BUSINESS:case s.PO.O365_PERSONAL:case s.PO.O365:switch(n){case"doc":case"docx":i=j.TLO;break;case"xls":case"xlsx":i=j.$7;break;case"ppt":case"pptx":i=j.Y5F;break;default:i=j.Vpj}}return(0,k.jsx)("div",{className:"".concat(t," flex items-center justify-center rounded-md border border-gray-100 bg-gray-50 dark:border-white/10 dark:bg-token-main-surface-secondary"),children:(0,k.jsx)(i,{className:"w-[20px]"})})};var w=r(65938),y=r(58543);function C(e){var t,r;let{fileName:n,icon:i,loadingPercentage:s,contextConnectorInfo:o}=e,l=(0,p.Z)(),a=void 0!==s&&s<100,c=(0,y.$p)(n),u=null!==(t=null==o?void 0:o.syntheticExtension)&&void 0!==t?t:null,f=null!=o&&o.contextConnector?(0,k.jsx)(w.V,{contextConnector:o.contextConnector,extension:null!==(r=null!=u?u:c)&&void 0!==r?r:null}):function(e){if((0,y.CO)(e))return l.formatMessage(N.fileDescImage);switch(c){case"py":return"Python";case"js":case"jsx":return"JavaScript";case"ts":case"tsx":return"TypeScript";case"pdf":return"PDF";case"doc":case"docx":case"txt":return l.formatMessage(N.fileDescDocument);case"zip":return l.formatMessage(N.fileDescZip);case"xls":case"xlsx":case"csv":return l.formatMessage(N.fileDescSpreadsheet);case"ppt":case"pptx":case"key":return l.formatMessage(N.fileDescPresentation);default:return l.formatMessage(N.fileDescFile)}}(n);return(0,k.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[null!=i&&!1!==i?(0,k.jsxs)("div",{className:"relative h-10 w-10 overflow-hidden rounded-md border border-token-border-heavy",children:[i,a&&(0,k.jsx)(P,{percentage:s,blurBackground:!0})]}):(0,k.jsx)("div",{className:"relative h-10 w-10 shrink-0 overflow-hidden rounded-md",children:a?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:(0,d.default)("inset-0",L,function(e,t){if(t)return"bg-gray-50 dark:bg-token-main-surface-secondary border rounded-md border-gray-100 dark:border-white/10";switch((0,y.$p)(e)){case"py":case"js":case"jsx":case"ts":case"tsx":return"bg-[#FF6E3C]";case"doc":case"docx":case"txt":case"pdf":return"bg-[#FF5588]";case"zip":return"bg-[#B161FD]";case"ppt":case"pptx":case"key":return"bg-[#F8CA27]";case"xls":case"xlsx":case"csv":return"bg-[#10A37F]";default:return"bg-blue"}}(n,null==o?void 0:o.contextConnector))}),(0,k.jsx)(P,{percentage:o?null:s})]}):(0,k.jsx)(D,{filename:n,contextConnectorInfo:o})}),(0,k.jsxs)("div",{className:"overflow-hidden",children:[(0,k.jsx)("div",{className:"truncate font-semibold",children:(0,y.Ad)(n,u)}),(0,k.jsx)("div",{className:"truncate text-token-text-tertiary",children:f})]})]})}function P(e){let{percentage:t,blurBackground:r=!1}=e;return(0,k.jsx)("div",{className:(0,d.default)("absolute inset-0 flex items-center justify-center text-white",r&&"bg-black/5 backdrop-blur-sm"),children:t?(0,k.jsx)(x.Z,{percentage:t,className:"h-6 w-6"}):(0,k.jsx)(v.Z,{className:"h-6 w-6 text-token-text-secondary"})})}let L="h-10 w-10 flex-shrink-0";function D(e){let{filename:t,contextConnectorInfo:r}=e;if(r){var n,i;return(0,k.jsx)(O,{contextConnector:r.contextConnector,extension:null!==(n=null!==(i=r.syntheticExtension)&&void 0!==i?i:(0,y.$p)(t))&&void 0!==n?n:null,className:L})}switch((0,y.$p)(t)){case"py":case"js":case"jsx":case"ts":case"tsx":return(0,k.jsx)(b.yc,{className:L});case"doc":case"docx":case"txt":case"pdf":return(0,k.jsx)(b.tf,{className:L});case"zip":return(0,k.jsx)(b.LO,{className:L});case"ppt":case"pptx":case"key":return(0,k.jsx)(b.N,{className:L});case"xls":case"xlsx":case"csv":return(0,k.jsx)(b.OD,{className:L});default:return(0,k.jsx)(b.pC,{className:L})}}let N=(0,f.vU)({fileDescDocument:{id:"FileDataView.fileDescDocument",defaultMessage:"Document"},fileDescZip:{id:"FileDataView.fileDescZip",defaultMessage:"Zip Archive"},fileDescSpreadsheet:{id:"FileDataView.fileDescSpreadsheet",defaultMessage:"Spreadsheet"},fileDescPresentation:{id:"FileDataView.fileDescPresentation",defaultMessage:"Presentation"},fileDescImage:{id:"FileDataView.fileDescImage",defaultMessage:"Image"},fileDescFile:{id:"FileDataView.fileDescFile",defaultMessage:"File"}});function E(e){return e instanceof File}function M(e){let{downloadLink:t}=e,r=(0,u.useCallback)(()=>{var e;let r=document.createElement("a");r.href=t,r.setAttribute("download",null!==(e=t.split("/").pop())&&void 0!==e?e:"downloaded_file"),document.body.appendChild(r),r.click(),document.body.removeChild(r)},[t]);return(0,k.jsx)("button",{onClick:r,children:(0,k.jsx)(j._8t,{className:"icon-sm m-1.5"})})}function F(e){let{onRemoveFileClick:t,file:r,fileId:n,gizmoId:i,loadingPercentage:s,contextConnectorInfo:l,width:a="normal",alwaysShowData:c=!1,showDownloadButton:u=!1,downloadLink:f=""}=e,h=(0,p.Z)(),m=void 0!==s&&s<100,j=E(r)?r.name:r,v=E(r)&&(null==r?void 0:r.type.startsWith("image/"))||(0,y.CO)(j)&&null!=n,b=v&&(0,k.jsx)(A,{file:r,fileId:n,gizmoId:i,contextConnectorInfo:l}),O=v?void 0:null==l?void 0:l.sourceUrl;return(0,k.jsxs)("div",{className:"group relative inline-block text-sm text-token-text-primary",children:[(0,k.jsx)(V,{showTooltip:!t,sourceUrl:O,className:"relative overflow-hidden rounded-xl border border-token-border-light bg-token-main-surface-primary",children:v&&!c?(0,k.jsxs)("div",{className:"h-14 w-14",children:[b,m&&(0,k.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/5 text-white",children:(0,k.jsx)(x.Z,{percentage:s,className:"h-6 w-6"})})]}):(0,k.jsxs)("div",{className:(0,d.default)("p-2","wide"===a?"w-80":"w-60"),children:[(0,k.jsx)(C,{fileName:j,icon:b,loadingPercentage:s,contextConnectorInfo:l}),u&&""!==f&&(0,k.jsx)("div",{className:"absolute right-1 top-1",children:(0,k.jsx)(M,{downloadLink:f})})]})}),null!=t&&(0,k.jsx)("button",{onClick:t,className:"absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-token-border-heavy bg-token-main-surface-secondary p-0.5 text-token-text-primary transition-colors hover:opacity-100 group-hover:opacity-100 md:opacity-0",children:(0,k.jsx)(g.u,{label:h.formatMessage(I.removeFile),side:"top",sideOffset:4,children:(0,k.jsx)(o.v7,{className:"icon-sm"})})})]})}let S=h.Z.span(n||(n=(0,i.Z)(["flex items-center h-full w-full justify-center bg-gray-500 dark:bg-gray-700 bg-cover bg-center text-white"])));function _(){return(0,k.jsx)(S,{})}function A(e){let{file:t,fileId:r,gizmoId:n,contextConnectorInfo:i}=e,o=(0,p.Z)(),a=E(t)?t.name:t,d=function(e,t,r,n,i){let{0:o,1:a}=(0,u.useState)(void 0);return(0,u.useEffect)(()=>{async function o(e){try{let t=await l.Z.getFileDownloadLink(e,n);t.status===s.KF.Success?a(t.download_url):c.U.addError("Error fetching URL for file ".concat(e,": ").concat(t.status))}catch(t){c.U.addError(Error("Error fetching URL for file ".concat(e,")"),{cause:t}))}}if(i)r&&o(r);else if(null!=e&&e.type.startsWith("image/")&&!i){let t=new FileReader;t.addEventListener("load",()=>{let e=t.result;a("string"==typeof e?e:void 0)}),t.readAsDataURL(e)}else(0,y.CO)(t)&&null!=r?o(r):a(void 0)},[e,t,r,n,i]),o}(E(t)?t:null,a,r,n,i);return null==d?(0,k.jsx)(_,{}):(0,k.jsx)(m.l,{src:d,alt:o.formatMessage(I.userUploadedImage),contextConnectorSourceUrl:null==i?void 0:i.sourceUrl,className:"h-full w-full",children:(0,k.jsx)(S,{style:{backgroundImage:"url(".concat(d,")")}})})}let I=(0,f.vU)({removeFile:{id:"FileTile.removeFile",defaultMessage:"Remove file"},userUploadedImage:{id:"FileTile.userUploadedImage",defaultMessage:"User uploaded image"}});function V(e){let{showTooltip:t,sourceUrl:r,children:n,className:i}=e,s=(0,a.yA)();if(!r)return(0,k.jsx)("div",{className:i,children:n});let o=(0,k.jsx)("a",{href:r,target:"_blank",children:(0,k.jsx)("div",{className:i,children:n})});return t&&s?(0,k.jsx)(g.u,{wide:!0,interactive:!0,sideOffset:0,label:(0,k.jsxs)("a",{href:r,target:"_blank",className:"flex w-full items-center gap-2",children:[(0,k.jsx)("p",{className:"line-clamp-1 flex-1 text-ellipsis",children:r.split("").join("​")}),(0,k.jsx)(j.Pfi,{className:"icon-sm"})]}),side:"top",children:o}):o}},15026:function(e,t,r){r.d(t,{K:function(){return s}});var n,i=r(41141);let s=r(74091).Z.button(n||(n=(0,i.Z)(["flex items-center justify-center text-black text-token-text-primary juice:h-8 juice:w-8 dark:text-white juice:rounded-full focus-visible:outline-black dark:focus-visible:outline-white"])))},14019:function(e,t,r){r.d(t,{Z:function(){return h},s:function(){return x}});var n=r(94521),i=r(12586),s=r(93747),o=r(15236),l=r(17485),a=r(26123),c=r(25940),d=r(63980),u=r(15026),p=r(651);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){let{getInputProps:t,openFileDialog:r,uploadType:l,icon:c}=e,h=(0,a.Z)(),{serverDrivenRateLimitsEnabled:x,isDisabled:m,fileUploadRateLimit:g,rateLimitPopup:j}=(0,i.hC)(),v=(0,p.jsx)(u.K,{className:"juice:mb-1 juice:ml-1.5",disabled:m,onClick:e=>{e.preventDefault(),s.A.logEvent(o.M.openFileViewer,{intent:l.toString()}),r()},"aria-label":h.formatMessage({id:"PromptFilePicker.attachFiles",defaultMessage:"Attach files"}),children:c}),b=(0,p.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({disabled:m},t({className:"hidden"}))),k=(0,p.jsxs)("div",{className:"flex",children:[v,b]});return(0,p.jsx)(d.Y,{serverDrivenRateLimitsEnabled:x,fileUploadRateLimit:g,rateLimitPopup:j,children:k})}function x(e){let{code:t,message:r}=e;switch(t){case l.jK.FileTooLarge:return m.errorFileTooLarge;case l.jK.TooManyFiles:return s.A.logEvent(o.M.uploadedMaxFilesError),m.errorTooManyFiles;default:return r}}let m=(0,c.vU)({attachImages:{id:"PromptFilePicker.attachImages",defaultMessage:"Attach images"},attachFiles:{id:"PromptFilePicker.attachFiles",defaultMessage:"Attach files"},errorFileTooLarge:{id:"PromptFilePicker.errorFileTooLarge",defaultMessage:"Your file is too large. The maximum file size is {size}MB."},errorTooManyFiles:{id:"PromptFilePicker.errorTooManyFiles",defaultMessage:"You may only upload {maxNum} files at a time."},defaultFileUploadRateLimited:{id:"U5qAWP",defaultMessage:"You've reached your daily upload limit. Get ChatGPT Plus to unlock more."},getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"}})},62004:function(e,t,r){r.d(t,{H:function(){return a},W:function(){return c}});var n=r(94521),i=r(85734),s=r(82823),o=r(86021);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){return null==e||[i.OL.PrimaryAssistant,i.OL.GizmoInteraction].includes(e.kind)}function c(e,t){let r=(0,o.WA)(e,t),{data:a}=(0,s.b9)(null!=r&&"gizmo_id"in r?r.gizmo_id:void 0,(null==r?void 0:r.kind)===i.OL.GizmoTest);if(null!=r)switch(r.kind){case i.OL.GizmoInteraction:case i.OL.GizmoMagicCreate:case i.OL.GizmoTest:return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({gizmo:a},r);case i.OL.PrimaryAssistant:return r}}}}]);
//# sourceMappingURL=8798-e1f421bcbade44c6.js.map