"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6925,6423],{87387:function(e,t,r){r.d(t,{aO:function(){return A},sH:function(){return I},sS:function(){return P}});var n=r(98601),s=r(52088),o=r(99333),i=r(11550),a=r(16779),l=r(73062),c=r(24434),u=r(81014),d=r(23047),h=r(24740),m=r(58025),f=r(78571),g=r(56032),p=r(19841),S=r(99661),y=r(15478),x=r(52445),v=r(10798),b=r(651);let j=["children"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let I={debug_mode:!1,base_config:d.l.SCALLION,completion_model:void 0,eval_preset:"production",use_labrador:!0,show_image_to_model:!0,emulated_location:void 0};function P(e){let{children:t}=e,r=(0,s.Z)(e,j);return(0,b.jsx)(l.Z.Content,O(O({},r),{},{className:(0,p.default)("z-50",r.className),children:t}))}function A(e){var t;let{onClose:r}=e,{theme:n,setTheme:s}=(0,S.F)(),{data:d}=(0,m.R1)(o.sh.TrainingAllowed),p=(0,m.Gt)(),y=(t=()=>h.m.success("All search logs have been deleted",{duration:3}),(0,g.D)({mutationFn:u.A8,onSuccess:t})),[j,w]=(0,v.rV)(),I=(0,x.m)();return(0,b.jsx)(c.Z,{isOpen:!0,onClose:r,type:"success",size:"custom",className:"max-w-2xl",title:"SearchGPT Settings",showCloseButton:!0,children:(0,b.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,b.jsxs)(N,{children:[(0,b.jsx)(f._,{htmlFor:"theme",className:"text-sm",children:"Theme"}),(0,b.jsxs)(l.Z.Root,{value:n,onValueChange:e=>{e!==n&&s(e)},children:[(0,b.jsxs)(l.Z.Trigger,{id:"theme",children:[(0,b.jsx)(l.Z.Value,{}),(0,b.jsx)(l.Z.Icon,{})]}),(0,b.jsx)(l.Z.Portal,{children:(0,b.jsxs)(P,{children:[(0,b.jsx)(l.Z.Item,{value:"light",children:"Light"}),(0,b.jsx)(l.Z.Item,{value:"dark",children:"Dark"}),(0,b.jsx)(l.Z.Item,{value:"system",children:"System"})]})})]})]}),(0,b.jsxs)("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[(0,b.jsxs)(N,{children:[(0,b.jsx)(f._,{htmlFor:"location",className:"text-sm",children:"Share precise location"}),(0,b.jsx)(a.Z,{onChange:e=>{w(O(O({},j),{},{useLocation:e}))},enabled:j.useLocation,disabled:!I||"denied"===I,label:"Use location from browser"})]}),(0,b.jsx)("div",{className:"text-xs text-token-text-secondary",children:"Improve searches using precise location data from your device e.g. “restaurants near me” will try to show you restaurants near your current location. (When precise location is off, we’ll still use general location info based on your IP address so we can help you search local weather, etc.)"})]}),(0,b.jsxs)("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[(0,b.jsxs)(N,{children:[(0,b.jsx)(f._,{htmlFor:"trainingAllowed",className:"text-sm",children:"Improve search for everyone"}),(0,b.jsx)(a.Z,{onChange:e=>{p.mutate({setting:o.sh.TrainingAllowed,value:e})},enabled:d??!0,label:"Use location from browser"})]}),(0,b.jsxs)("div",{className:"text-xs text-token-text-secondary",children:["Allow your conversations to be used to improve our search functionality, which makes our services better for you and everyone who uses them. We take steps to protect your privacy."," ",(0,b.jsx)("a",{className:"underline",href:"https://openai.com/policies/privacy-policy/",target:"_blank",children:"Learn more"})]})]}),(0,b.jsx)("div",{className:"flex flex-col border-t border-token-border-medium pt-2",children:(0,b.jsxs)(N,{children:[(0,b.jsx)(f._,{htmlFor:"deleteLogs",className:"text-sm",children:"Delete search logs"}),(0,b.jsx)(i.z,{color:"danger",loading:y.isPending,onClick:()=>y.mutate(),children:"Delete All"})]})})]})})}let N=y.Z.div`flex justify-between items-center gap-2 min-h-[36px]`},26925:function(e,t,r){r.d(t,{HC:function(){return p},ne:function(){return g},po:function(){return m}});var n,s,o=r(98601),i=r(87387),a=r(25579),l=r(44544),c=r(5132),u=r(651);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let m=((n={})[n.InitialPending=0]="InitialPending",n[n.Active=1]="Active",n);var f=((s=f||{}).HasSearched="oai/apps/hasSearched",s.HasDismissedExtensionUpsell="oai/apps/dismissExtensionUpsell",s.HasDismissedAddToHome="oai/apps/dismissAddToHome",s);class g extends(0,a.R)()(e=>({queryInput:e?.initialQuery??"",followupQueryInput:"",initialQuery:e?.initialQuery??void 0,shouldShowComposer:!1,agentSettingsOverrides:e?.initialAgentSettingsOverrides??y(),currentSearch:e?.initialQuery?{config:{threadId:e.initialThreadId??null,query:e.initialQuery,isFollowup:!1,querySource:"url_query"},state:m.InitialPending}:void 0,lastPrefetchedQuery:void 0,shouldShowAddToHomePopover:!1,hasSearched:"1"===localStorage.getItem(f.HasSearched),hasDismissedExtensionUpsell:"1"===localStorage.getItem(f.HasDismissedExtensionUpsell),hasDismissedAddToHome:"1"===localStorage.getItem(f.HasDismissedAddToHome)})){setQueryInput(e){this.setState({queryInput:e})}setFollowupQueryInput(e){this.setState({followupQueryInput:e})}setCurrentSearch(e){this.setState({currentSearch:e})}setLastPrefetchedQuery(e){this.setState({lastPrefetchedQuery:e})}handlePendingInitialSearch(){let e=this.getState();if(e.currentSearch?.state===m.InitialPending){let t=h(h({},e.currentSearch),{},{state:m.Active});return this.setState({currentSearch:t}),t}}updateAgentSettingsOverrides(e){let t=h(h({},this.getState().agentSettingsOverrides),e);this.setState({agentSettingsOverrides:t}),t===i.sH?(0,l.deleteCookie)(S):(0,l.setCookie)(S,JSON.stringify(t),{maxAge:c.to})}markHasSearched(){this.getState().hasSearched||(this.setState({hasSearched:!0}),localStorage.setItem(f.HasSearched,"1"))}dismissExtensionUpsell(){this.getState().hasDismissedExtensionUpsell||(this.setState({hasDismissedExtensionUpsell:!0}),localStorage.setItem(f.HasDismissedExtensionUpsell,"1"))}dismissAddToHomePrompt(){this.getState().hasDismissedAddToHome||(this.setState({hasDismissedAddToHome:!0}),localStorage.setItem(f.HasDismissedAddToHome,"1"))}}function p(e){let{children:t,serverProps:r}=e;return(0,u.jsx)(g.Provider,{store:()=>new g(r),children:t})}(0,o.Z)(g,"selectQueryInput",e=>e.queryInput),(0,o.Z)(g,"selectFollowupQueryInput",e=>e.followupQueryInput),(0,o.Z)(g,"selectAgentSettingsOverrides",e=>e.agentSettingsOverrides),(0,o.Z)(g,"selectLastSubmittedQuery",e=>e.currentSearch?.config.query),(0,o.Z)(g,"selectWasCurrentSearchPrefetched",e=>e.currentSearch?.config.query===e.lastPrefetchedQuery);let S="agent_overrides";function y(e){let t={};try{let r=(0,l.getCookie)(S,e);"string"==typeof r&&(t=JSON.parse(r))}catch{}return h(h({},i.sH),t)}},95628:function(e,t,r){r.d(t,{ZP:function(){return o}});var n=r(92379);function s(e,t,r){try{let n=JSON.parse(window.localStorage.getItem(e)??"");if(!r(n))return t;return n}catch(e){return t}}function o(e,t,r){let{0:o,1:i}=(0,n.useState)(()=>s(e,t,r));return(0,n.useEffect)(()=>{i(()=>s(e,t,r))},[e,t,r]),(0,n.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(o))},[e,o]),[o,i]}},52445:function(e,t,r){r.d(t,{m:function(){return l},w:function(){return a}});var n=r(92379),s=r(5132),o=r(651);let i=(0,n.createContext)(null),a=e=>{let{children:t}=e,{0:r,1:a}=(0,n.useState)(null);return(0,n.useEffect)(()=>{(0,s.XM)().then(e=>{null!=e&&(a(e.state),e.onchange=()=>{a(e.state)})})},[]),(0,o.jsx)(i.Provider,{value:r,children:t})};function l(){return(0,n.useContext)(i)}},10798:function(e,t,r){r.d(t,{OR:function(){return p},Ws:function(){return h},lM:function(){return f},nf:function(){return d},rV:function(){return g}});var n=r(13249),s=r(92379),o=r(95628),i=r(651);function a(e){return"object"==typeof e&&"boolean"==typeof e.suggestions}let l={version:0,useLocation:!1};function c(e){try{let t=n.m.getItem(n.F.SearchSettings,{userId:e});return"number"==typeof t.version&&t.version>=l.version?t:l}catch{return l}}let u=(0,s.createContext)({settings:l,setSettings:()=>{}}),d=e=>{let{userId:t,children:r}=e,{0:o,1:a}=(0,s.useState)(()=>c(t));return(0,s.useEffect)(()=>a(c(t)),[t]),(0,s.useEffect)(()=>{n.m.setItem(n.F.SearchSettings,o,{userId:t})},[o,t]),(0,i.jsx)(u.Provider,{value:{settings:o,setSettings:a},children:r})},h={suggestions:!0,showInlineFollowups:!1},m=(0,s.createContext)({settings:h,setSettings:()=>{}}),f=e=>{let{userId:t,children:r}=e,[n,s]=(0,o.ZP)(`_INTERNAL_${t}_SONIC_SETTINGS_1717364375`,h,a);return(0,i.jsx)(m.Provider,{value:{settings:n,setSettings:s},children:r})};function g(){let{settings:e,setSettings:t}=(0,s.useContext)(u);return[e,t]}function p(){let{settings:e,setSettings:t}=(0,s.useContext)(m);return[e,t]}},5132:function(e,t,r){r.d(t,{XB:function(){return c},XM:function(){return l},ri:function(){return u},t5:function(){return d},to:function(){return s}});var n=r(65012);let s=2592e3,o="last_checked_loc",i="last_denied_loc",a={latitude:null,longitude:null,locationAccuracy:null};async function l(){return navigator?.permissions?await navigator.permissions.query({name:"geolocation"}):null}async function c(e){let{enabled:t}=e;if(!t)return u();if((await l())?.state!=="granted"){let e=localStorage.getItem(o);if(e){let t=Number(e);if(Date.now()-864e5<t)try{return JSON.parse(n.bX.getCookie(n.cn.LastLocation))}catch{}}}let r=localStorage.getItem(i);if(r){let e=Number(r);if(Date.now()-36e5<e)return null}return await new Promise(e=>{navigator.geolocation.getCurrentPosition(t=>{let r={latitude:t.coords.latitude,longitude:t.coords.longitude,locationAccuracy:t.coords.accuracy};n.bX.setCookie(n.cn.LastLocation,JSON.stringify(r),{maxAge:s}),localStorage.setItem(o,Date.now().toString()),e(r)},()=>{localStorage.setItem(i,Date.now().toString()),e(u())},{enableHighAccuracy:!0,maximumAge:0})})}function u(){return n.bX.setCookie(n.cn.LastLocation,JSON.stringify(a),{maxAge:s}),localStorage.removeItem(o),localStorage.removeItem(i),null}function d(e,t){return`https://chatgpt.com/search/evals/permalink/${e}/${t}`}}}]);
//# sourceMappingURL=6925-2192f93925df03ef.js.map