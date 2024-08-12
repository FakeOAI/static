"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9778],{43465:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(98601),o=n(99333),l=n(79704),a=n(11550),i=n(41619),s=n(24434),u=n(31403),c=n(2721),p=n(42420),d=n(91530),f=n.n(d),v=n(86481),m=n.n(v),y=n(92379),b=n(75172),x=n(62984),P=n(68306),g=n(651);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e){let{isOpen:t,onClose:n,account:r,gpt:d}=e,v=(0,b.Z)(),{0:P,1:h}=(0,y.useState)(!1),{0:E,1:S}=(0,y.useState)(d),N=null==E?void 0:E.tools.filter(e=>e.type!==o.qK.JIT_PLUGIN),w=null==E?void 0:E.tools.filter(e=>e.type===o.qK.JIT_PLUGIN),O=(0,p.NL)();return(0,g.jsxs)(s.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:t,onClose:f(),type:"success",title:v.formatMessage(j.approveGPTTitle),children:[void 0==E?(0,g.jsx)("div",{className:"h-96",children:(0,g.jsx)(u.n_,{className:"max-w-3xl flex-grow",inputClassName:"h-10 text-sm pl-9",iconClassName:"left-4",resultsSizeOffset:-90,onSelect:e=>{S(e)}})}):(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsxs)("div",{className:"flex gap-4 border-b border-token-border-light pb-6",children:[null!=E.gizmo.display.profile_picture_url?(0,g.jsx)(m(),{src:E.gizmo.display.profile_picture_url,alt:"Description",className:"h-24 w-24 rounded-full",width:96,height:96}):(0,g.jsx)(i.uy2,{className:"h-96 w-96 text-gray-400"}),(0,g.jsxs)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:[(0,g.jsx)("p",{className:"text-lg font-semibold",children:E.gizmo.display.name}),(0,g.jsx)("p",{children:E.gizmo.display.description}),(0,g.jsx)("p",{className:"text-token-text-secondary",children:(0,g.jsx)(x.Z,T(T({},j.gptByLine),{},{values:{authorName:E.gizmo.author.display_name}}))})]})]}),(0,g.jsx)("div",{className:"flex border-b border-token-border-light py-6",children:(0,g.jsxs)("div",{className:"flex gap-4",children:[(0,g.jsx)("p",{className:"w-24 font-semibold",children:(0,g.jsx)(x.Z,T({},j.capabilitiesTitle))}),(0,g.jsx)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:N&&N.length>0?N.map(e=>(0,g.jsx)("p",{children:(0,l.DW)(r,e.type)},e.id)):(0,g.jsx)("p",{className:"text-token-text-secondary",children:(0,g.jsx)(x.Z,T({},j.noCapabilitiesEnabled))})})]})}),(0,g.jsx)("div",{className:"flex py-6",children:(0,g.jsxs)("div",{className:"flex gap-4",children:[(0,g.jsx)("p",{className:"w-24 font-semibold",children:(0,g.jsx)(x.Z,T({},j.actionsTitle))}),(0,g.jsx)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:w&&w.length>0?w.map(e=>{var t;return(0,g.jsx)("p",{children:null!==(t=e.metadata.domain)&&void 0!==t?t:""},e.id)}):(0,g.jsx)("p",{className:"text-token-text-secondary",children:(0,g.jsx)(x.Z,T({},j.noCustomActions))})})]})})]}),(0,g.jsxs)("div",{className:"mt-4 flex justify-end gap-2",children:[(0,g.jsx)(a.z,{color:"secondary",onClick:()=>{S(void 0),n(!1)},loading:P,children:(0,g.jsx)(x.Z,T({},j.cancelButtonText))}),(0,g.jsx)(a.z,{color:"primary",loading:P,disabled:void 0==E,onClick:()=>{void 0!=E&&(h(!0),c.Z.approveThirdPartyGPT(r.id,E.gizmo.id).finally(()=>{O.invalidateQueries({queryKey:["gizmo"]}),n(!0),S(void 0),h(!1)}))},children:(0,g.jsx)(x.Z,T({},j.approveButtonText))})]})]})}let j=(0,P.vU)({approveGPTTitle:{id:"approveGPTModal.approveGPTTitle",defaultMessage:"Approve a third-party GPT"},cancelButtonText:{id:"approveGPTModal.cancelButtonText",defaultMessage:"Cancel"},approveButtonText:{id:"approveGPTModal.approveButtonText",defaultMessage:"Approve"},gptByLine:{id:"approveGPTModal.gptByLine",defaultMessage:"By {authorName}"},capabilitiesTitle:{id:"approveGPTModal.capabilitiesTitle",defaultMessage:"Capabilities"},actionsTitle:{id:"approveGPTModal.actionsTitle",defaultMessage:"Actions"},noCapabilitiesEnabled:{id:"approveGPTModal.noCapabilitiesEnabled",defaultMessage:"No capabilities enabled"},noCustomActions:{id:"approveGPTModal.noCustomActions",defaultMessage:"No custom actions"}})},79704:function(e,t,n){n.d(t,{$v:function(){return l},DW:function(){return i},Di:function(){return a}});var r=n(99333),o=n(10080);function l(e){return e===r.r3.ADMIN||e===r.r3.OWNER}function a(e){return e===r.r3.OWNER}function i(e,t){switch(t){case r.qK.BROWSER:return"Web browsing";case r.qK.PYTHON:return"Code interpreter & Data Analysis";case r.qK.JIT_PLUGIN:return"Custom actions";case r.qK.RETRIEVAL:return"File retrieval";case r.qK.DALLE:return"DALL\xb7E image generation";case o.Zz.Private:return"Builder only";case o.Zz.Workspace:return e.data.name;case o.Zz.Link:return"Anyone with link";case o.Zz.Marketplace:return"Public";default:return null}}},46702:function(e,t,n){n.d(t,{b:function(){return c}});var r=n(59144),o=n(24434),l=n(39004),a=n(24740),i=n(75172),s=n(62984),u=n(651);function c(e){let{gizmoId:t,onSuccess:n,onClose:c}=e,p=(0,i.Z)(),d=(0,l.kb)(),f=async()=>{try{await d.mutateAsync({gizmoId:t}),n()}catch{a.m.danger("Failed to delete gizmo. Please try again.")}};return(0,u.jsx)(o.Z,{isOpen:!0,onClose:c,type:"danger",title:(0,u.jsx)(s.Z,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:(0,u.jsx)(r.Z.Button,{title:p.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:d.isPending,onClick:()=>{f()}}),secondaryButton:(0,u.jsx)(r.Z.Button,{title:p.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:c}),children:(0,u.jsx)("div",{className:"text-sm",children:(0,u.jsx)(s.Z,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}},20608:function(e,t,n){n.r(t),n.d(t,{GizmoUsingAsOwnerNotice:function(){return c}});var r=n(93951),o=n(92379),l=n(62984),a=n(11550),i=n(43465),s=n(41619),u=n(651);function c(e){let{gizmo:t}=e,n=(0,r.t)(),c=(0,r.S0)(),{0:p,1:d}=(0,o.useState)(!1);return null!=n&&c?(0,u.jsxs)("div",{className:"h-52px flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm dark:bg-gray-700",children:[(0,u.jsx)(s.ZyU,{className:"icon-sm"}),(0,u.jsx)(l.Z,{id:"GizmoConversationHeader.usingAsOwner",defaultMessage:"Only workspace owners can use this GPT."}),(0,u.jsx)(a.z,{color:"secondary",size:"small",onClick:()=>d(!0),children:(0,u.jsx)(l.Z,{id:"GizmoConversationHeader.approveGPTButton",defaultMessage:"Approve for workspace"})}),(0,u.jsx)(i.Z,{isOpen:p,onClose:()=>d(!1),account:n,gpt:t})]}):null}},17096:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(92379);function o(){let e=(0,r.useRef)([]),t=(0,r.useRef)((t,n)=>{let r=setTimeout(t,n);return e.current.push(r),r});return(0,r.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},89039:function(e,t,n){let r,o;n.d(t,{J:function(){return D}});var l=n(92379),a=n(782),i=n(78789),s=n(91157),u=n(86060),c=n(76227),p=n(88554),d=n(98397),f=n(57084),v=n(60839),m=n(67607),y=n(87054),b=n(25825),x=n(39231),P=n(37927),g=n(11943),h=n(51973),T=((r=T||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),E=((o=E||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let j={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},S=(0,l.createContext)(null);function N(e){let t=(0,l.useContext)(S);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}S.displayName="PopoverContext";let w=(0,l.createContext)(null);function O(e){let t=(0,l.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}w.displayName="PopoverAPIContext";let M=(0,l.createContext)(null);function k(){return(0,l.useContext)(M)}M.displayName="PopoverGroupContext";let C=(0,l.createContext)(null);function I(e,t){return(0,a.E)(t.type,j,e,t)}C.displayName="PopoverPanelContext";let z=(0,i.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,u.M)()}`,o=`headlessui-popover-panel-${(0,u.M)()}`,c=(0,l.useRef)(null),p=(0,s.T)(t,(0,s.h)(e=>{c.current=e})),v=(0,l.useReducer)(I,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:y,button:P,panel:h,beforePanelSentinel:T,afterPanelSentinel:E},j]=v,N=(0,b.i)(null!=(n=c.current)?n:P);(0,l.useEffect)(()=>j({type:3,buttonId:r}),[r,j]),(0,l.useEffect)(()=>j({type:5,panelId:o}),[o,j]);let O=(0,l.useMemo)(()=>{if(!P||!h)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(P))^Number(null==e?void 0:e.contains(h)))return!0;return!1},[P,h]),M=(0,l.useMemo)(()=>({buttonId:r,panelId:o,close:()=>j({type:1})}),[r,o,j]),C=k(),z=null==C?void 0:C.registerPopover,A=(0,g.z)(()=>{var e;return null!=(e=null==C?void 0:C.isFocusWithinPopoverGroup())?e:(null==N?void 0:N.activeElement)&&((null==P?void 0:P.contains(N.activeElement))||(null==h?void 0:h.contains(N.activeElement)))});(0,l.useEffect)(()=>null==z?void 0:z(M),[z,M]),(0,x.O)(null==N?void 0:N.defaultView,"focus",e=>{var t,n,r,o;0===y&&(A()||!P||!h||null!=(n=null==(t=T.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=E.current)?void 0:r.contains)&&o.call(r,e.target)||j({type:1}))},!0),(0,m.O)([P,h],(e,t)=>{j({type:1}),(0,d.sP)(t,d.tJ.Loose)||(e.preventDefault(),null==P||P.focus())},0===y);let B=(0,g.z)(e=>{j({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:P:P;null==t||t.focus()}),Z=(0,l.useMemo)(()=>({close:B,isPortalled:O}),[B,O]),G=(0,l.useMemo)(()=>({open:0===y,close:B}),[y,B]);return l.createElement(S.Provider,{value:v},l.createElement(w.Provider,{value:Z},l.createElement(f.up,{value:(0,a.E)(y,{0:f.ZM.Open,1:f.ZM.Closed})},(0,i.sY)({ourProps:{ref:p},theirProps:e,slot:G,defaultTag:"div",name:"Popover"}))))}),A=(0,i.yV)(function(e,t){let[n,r]=N("Popover.Button"),{isPortalled:o}=O("Popover.Button"),f=(0,l.useRef)(null),m=`headlessui-focus-sentinel-${(0,u.M)()}`,y=k(),x=null==y?void 0:y.closeOthers,T=(0,l.useContext)(C),E=null!==T&&T===n.panelId,j=(0,s.T)(f,t,E?null:e=>r({type:2,button:e})),S=(0,s.T)(f,t),w=(0,b.i)(f),M=(0,g.z)(e=>{var t,o,l;if(E){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==x||x(n.buttonId)),r({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==x?void 0:x(n.buttonId);if(!f.current||(null==w?void 0:w.activeElement)&&!f.current.contains(w.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),I=(0,g.z)(e=>{E||e.key===c.R.Space&&e.preventDefault()}),z=(0,g.z)(t=>{var o,l;(0,p.P)(t.currentTarget)||e.disabled||(E?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==x||x(n.buttonId)),r({type:0}),null==(l=n.button)||l.focus()))}),A=(0,g.z)(e=>{e.preventDefault(),e.stopPropagation()}),B=0===n.popoverState,Z=(0,l.useMemo)(()=>({open:B}),[B]),G=(0,v.f)(e,f),D=E?{ref:S,type:G,onKeyDown:M,onClick:z}:{ref:j,id:n.buttonId,type:G,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:M,onKeyUp:I,onClick:z,onMouseDown:A},R=(0,h.l)(),L=(0,g.z)(()=>{let e=n.panel;e&&(0,a.E)(R.current,{[h.N.Forwards]:()=>(0,d.jA)(e,d.TO.First),[h.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(l.Fragment,null,(0,i.sY)({ourProps:D,theirProps:e,slot:Z,defaultTag:"button",name:"Popover.Button"}),B&&!E&&o&&l.createElement(P._,{id:m,features:P.A.Focusable,as:"button",type:"button",onFocus:L}))}),B=i.AN.RenderStrategy|i.AN.Static,Z=(0,i.yV)(function(e,t){let[{popoverState:n},r]=N("Popover.Overlay"),o=(0,s.T)(t),a=`headlessui-popover-overlay-${(0,u.M)()}`,c=(0,f.oJ)(),d=null!==c?c===f.ZM.Open:0===n,v=(0,g.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();r({type:1})}),m=(0,l.useMemo)(()=>({open:0===n}),[n]);return(0,i.sY)({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:v},theirProps:e,slot:m,defaultTag:"div",features:B,visible:d,name:"Popover.Overlay"})}),G=i.AN.RenderStrategy|i.AN.Static,D=Object.assign(z,{Button:A,Overlay:Z,Panel:(0,i.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,p]=N("Popover.Panel"),{close:v,isPortalled:m}=O("Popover.Panel"),y=`headlessui-focus-sentinel-before-${(0,u.M)()}`,x=`headlessui-focus-sentinel-after-${(0,u.M)()}`,T=(0,l.useRef)(null),E=(0,s.T)(T,t,e=>{p({type:4,panel:e})}),j=(0,b.i)(T),S=(0,f.oJ)(),w=null!==S?S===f.ZM.Open:0===o.popoverState,M=(0,g.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==o.popoverState||!T.current||(null==j?void 0:j.activeElement)&&!T.current.contains(j.activeElement))return;e.preventDefault(),e.stopPropagation(),p({type:1}),null==(t=o.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&p({type:4,panel:null})},[o.popoverState,e.unmount,e.static,p]),(0,l.useEffect)(()=>{if(!n||0!==o.popoverState||!T.current)return;let e=null==j?void 0:j.activeElement;T.current.contains(e)||(0,d.jA)(T.current,d.TO.First)},[n,T,o.popoverState]);let k=(0,l.useMemo)(()=>({open:0===o.popoverState,close:v}),[o,v]),I={ref:E,id:o.panelId,onKeyDown:M,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,a;let i=e.relatedTarget;!i||!T.current||null!=(t=T.current)&&t.contains(i)||(p({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(a=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:a.call(l,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},z=(0,h.l)(),A=(0,g.z)(()=>{let e=T.current;e&&(0,a.E)(z.current,{[h.N.Forwards]:()=>{(0,d.jA)(e,d.TO.First)},[h.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),B=(0,g.z)(()=>{let e=T.current;e&&(0,a.E)(z.current,{[h.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,d.GO)(),l=r.indexOf(o.button),a=r.slice(0,l+1),i=[...r.slice(l+1),...a];for(let r of i.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=i.indexOf(r);-1!==e&&i.splice(e,1)}(0,d.jA)(i,d.TO.First,!1)},[h.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(C.Provider,{value:o.panelId},w&&m&&l.createElement(P._,{id:y,ref:o.beforePanelSentinel,features:P.A.Focusable,as:"button",type:"button",onFocus:A}),(0,i.sY)({ourProps:I,theirProps:r,slot:k,defaultTag:"div",features:G,visible:w,name:"Popover.Panel"}),w&&m&&l.createElement(P._,{id:x,ref:o.afterPanelSentinel,features:P.A.Focusable,as:"button",type:"button",onFocus:B}))}),Group:(0,i.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,s.T)(n,t),[o,a]=(0,l.useState)([]),u=(0,g.z)(e=>{a(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,g.z)(e=>(a(t=>[...t,e]),()=>u(e))),p=(0,g.z)(()=>{var e;let t=(0,y.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),d=(0,g.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),f=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:u,isFocusWithinPopoverGroup:p,closeOthers:d}),[c,u,p,d]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(M.Provider,{value:f},(0,i.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},39231:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(92379),o=n(23441);function l(e,t,n,l){let a=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){a.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)},[e,t,l])}},51973:function(e,t,n){let r;n.d(t,{N:function(){return a},l:function(){return i}});var o=n(92379),l=n(23441),a=((r=a||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function i(){var e,t;let n,r=(0,o.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,l.E)(t),(0,o.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},37927:function(e,t,n){let r;n.d(t,{A:function(){return l},_:function(){return a}});var o=n(78789),l=((r=l||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},11812:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(46598);function o(e=.1,{startDelay:t=0,from:n=0,ease:o}={}){return(l,a)=>{let i=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,a))-l);if(o){let t=a*e;i=(0,r.R)(o)(i/t)*t}return t+i}}}}]);
//# sourceMappingURL=9778.5da87232cbaa05ad.js.map