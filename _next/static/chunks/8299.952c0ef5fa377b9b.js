(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8299,6054,159],{51516:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},17224:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},98987:function(e,t,n){var r=n(3284);e.exports=function(e,t){for(var n=-1,a=e.length,l=0,s=[];++n<a;){var i=e[n],o=t?t(i):i;if(!n||!r(o,u)){var u=o;s[l++]=0===i?0:i}}return s}},52538:function(e,t,n){var r=n(61757),a=n(98987);e.exports=function(e,t){return e&&e.length?a(e,r(t,2)):[]}},19042:function(e,t,n){"use strict";n.d(t,{q:function(){return C}});var r,a=n(2346),l=n(11550),s=n(39358),i=n(30115),o=n(41619),u=n(24434),c=n(67330),d=n(91111),f=n(97193),h=n(12381),x=n(27313),m=n(5132),v=n(30757),p=n(79746),b=n(19841),j=n(38482),g=n.n(j),w=n(92379),y=n(15478),_=n(19229),N=n(651);let k=g()(()=>Promise.all([n.e(3904),n.e(3674)]).then(n.bind(n,16476)).then(e=>e.default),{ssr:!1,loadableGenerated:{webpack:()=>[16476]}});function C(e){let{threadId:t,threadUserId:n}=e;return(0,f.W6)(f.bM.isDebugModalOpen)&&(0,N.jsx)(u.Z,{isOpen:!0,onClose:()=>f.vm.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:(0,N.jsx)(D,{threadId:t,threadUserId:n})})}let E=(e,t)=>{let n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=window.URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.click(),window.URL.revokeObjectURL(r)},M="<|im_start|>",V="<|im_sep|>",T="<|im_end|>";function I(e){let{prompt:t}=e,n=[],r=0;for(;;){let e=t.indexOf(M,r);if(-1===e)break;let a=t.indexOf(V,e);if(-1===a)break;let l=t.indexOf(T,a),s=t.indexOf("<|fim_suffix|>",a);if(-1!==s&&(-1===l||s<l)&&(l=s),-1===l)break;let i=t.substring(e+M.length,a),o=t.substring(a+V.length,l);n.push((0,N.jsxs)("div",{children:[(0,N.jsxs)("span",{className:"font-semibold",children:["[",i,"]"]})," ",o]},e)),r=l+T.length}return n}let Z=y.Z.div(r||(r=(0,a.Z)(["mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ",""])),e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"});function D(e){var t;let{threadId:n,threadUserId:r}=e,{sessionUser:a}=(0,d.A)(),s=(0,h.nn)(h.LW.turns),{0:u,1:p}=(0,w.useState)("json");(0,w.useEffect)(()=>{p(0!==s.length?"turn".concat(s.length-1):"json")},[s.length]);let{data:j,isLoading:g,refetch:y}=(0,x.Y)({threadId:n,threadUserId:r,refetchOnMount:"always"});if(!j&&!g)return(0,N.jsxs)(c.bW,{onClickRetry:()=>y(),children:["Failed to load."," "]});if(!j||g)return(0,N.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});let _=j.thread,k=null===(t=_.turns[_.turns.length-1])||void 0===t||null===(t=t.artifacts__)||void 0===t||null===(t=t.model_snapshots)||void 0===t?void 0:t.default_id,C=r&&n?(0,m.t5)(r,n):null;return(0,N.jsx)("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:(0,N.jsxs)(v.fC,{orientation:"vertical",defaultValue:u,onValueChange:e=>p(e),children:[(0,N.jsxs)(v.aV,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[(0,N.jsx)(v.xz,{value:"json",children:(0,N.jsx)(Z,{$isSelected:"json"===u,children:"JSON"})}),s.map((e,t)=>{var n;return(0,N.jsxs)(w.Fragment,{children:[(0,N.jsx)(v.xz,{value:"turn".concat(t),children:(0,N.jsxs)(Z,{$isSelected:u==="turn".concat(t),children:["Turn[",t,"]"]})},t),null===(n=_.turns[t])||void 0===n||null===(n=n.artifacts__)||void 0===n||null===(n=n.debug_ddtrace_urls)||void 0===n?void 0:n.map(e=>(0,N.jsx)(Z,{$isSelected:!1,children:(0,N.jsxs)("a",{target:"_blank",href:e,className:"text-nowrap",children:["Trace[",t,"] ↗"]})},e))]},t)}),(0,N.jsx)("div",{className:"flex-grow"}),k&&(0,N.jsx)(L,{name:"Model",id:k}),(0,N.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"}),a&&(0,N.jsx)(L,{name:"User ID",id:a.id}),(0,N.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"}),C&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L,{name:"Permalink",id:C}),(0,N.jsx)("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),(0,N.jsxs)(l.z,{size:"small",color:"secondary",onClick:()=>E("thread.json",_),children:[(0,N.jsx)(o._8t,{className:"icon-sm"})," thread.json"]}),(0,N.jsx)(i.P,{onClick:()=>f.vm.toggleDebugModalOpen()})]}),s.map((e,t)=>{var n,r,a;return(0,N.jsxs)(v.VY,{value:"turn".concat(t),className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[(0,N.jsxs)("div",{className:(0,b.default)("flex flex-col gap-1 p-6",e.index%2==0&&"bg-token-main-surface-tertiary"),children:[(0,N.jsx)(I,{prompt:null!==(n=null===(r=_.turns[t])||void 0===r||null===(r=r.artifacts__)||void 0===r||null===(r=r.debug_info)||void 0===r||null===(r=r.main_model_response)||void 0===r?void 0:r.prompt_string)&&void 0!==n?n:""}),(0,N.jsxs)("div",{children:[(0,N.jsx)("span",{className:"font-semibold",children:"[assistant]"})," ",null===(a=e.model_response)||void 0===a?void 0:a.text]})]})," "]},t)}),(0,N.jsx)(v.VY,{value:"json",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:(0,N.jsx)(O,{data:_,collapsed:4})})]},j.turns.length)})}function O(e){let{data:t,collapsed:n}=e,{0:r,1:a}=(0,w.useState)(null==n||n);return(0,N.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[(0,N.jsx)("button",{onClick:()=>a(!r),className:"flex items-center gap-1",children:r?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_.rIY,{size:14})," Expand all"]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_.NsE,{size:14})," Collapse all"]})}),(0,N.jsx)(k,{json:t,jsonViewProps:{collapsed:r,shortenTextAfterLength:0}},String(r))]})}function L(e){let{name:t,id:n}=e,r=(0,w.useCallback)(()=>{(0,p.v)(n)},[n]);return(0,N.jsxs)("div",{className:"flex items-center gap-2 truncate",children:[(0,N.jsxs)("span",{className:"text-nowrap font-semibold",children:[t,":"]}),(0,N.jsx)("span",{title:n,className:"truncate text-gray-500 dark:text-white",children:n}),(0,N.jsx)(s.Z,{onCopy:r})]})}},21214:function(e,t,n){"use strict";n.r(t),n.d(t,{PermalinkPage:function(){return m}});var r=n(41567),a=n(26925),l=n(27313),s=n(97537),i=n(2428),o=n.n(i),u=n(34977),c=n(92379),d=n(19042),f=n(51837),h=n(651);function x(){return(0,h.jsx)("div",{className:"mt-3 flex justify-center",children:(0,h.jsx)(s.Z,{})})}function m(){return(0,h.jsx)(a.HC,{children:(0,h.jsx)(v,{})})}function v(){let{permalink:e}=(0,u.useRouter)().query;if(!o()(e)||2!==e.length)throw Error("Invalid permalink");let[t,n]=e,{query:s,isLoading:i}=(0,l.v)({threadId:n,threadUserId:t}),m=a.ne.useStore();(0,c.useEffect)(()=>{i||m.setQueryInput(s)},[m,i]);let v=(0,f.L)();return i?(0,h.jsx)(x,{}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.u,{}),v&&(0,h.jsx)(d.q,{threadId:n,threadUserId:t})]})}},27313:function(e,t,n){"use strict";n.d(t,{Y:function(){return i},v:function(){return o}});var r=n(84760),a=n(92379),l=n(81014),s=n(12381);function i(e){let{threadId:t,threadUserId:n,refetchOnMount:a}=e;return(0,r.a)({queryKey:["thread",t,n],queryFn:async()=>{if(!t)return{thread:null,turns:null};let e=await (0,l.K8)({threadId:t,threadUserId:n}),r=e.turns;return{thread:e,turns:r}},enabled:!!t,refetchOnMount:a})}function o(e){var t;let{threadId:n,threadUserId:r}=e,l=i({threadId:n,threadUserId:r}),o=l.data;return(0,a.useEffect)(()=>{if(n){var e;s.P3.setThread(n,null!==(e=null==o?void 0:o.turns)&&void 0!==e?e:[])}},[n,o]),{query:null===(t=l.data)||void 0===t||null===(t=t.turns[0])||void 0===t?void 0:t.user_query,refetch:l.refetch,isLoading:l.isLoading,isError:l.isError}}},78571:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r=n(37088),a=n(92379),l=n(52125);let s=(0,a.forwardRef)((e,t)=>(0,a.createElement)(l.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},30757:function(e,t,n){"use strict";n.d(t,{VY:function(){return M},aV:function(){return C},fC:function(){return k},xz:function(){return E}});var r=n(37088),a=n(92379),l=n(10132),s=n(31541),i=n(65954),o=n(79813),u=n(52125),c=n(76228),d=n(48758),f=n(28531);let h="Tabs",[x,m]=(0,s.b)(h,[i.Pc]),v=(0,i.Pc)(),[p,b]=x(h),j=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:n,value:l,onValueChange:s,defaultValue:i,orientation:o="horizontal",dir:h,activationMode:x="automatic",...m}=e,v=(0,c.gm)(h),[b,j]=(0,d.T)({prop:l,onChange:s,defaultProp:i});return(0,a.createElement)(p,{scope:n,baseId:(0,f.M)(),value:b,onValueChange:j,orientation:o,dir:v,activationMode:x},(0,a.createElement)(u.WV.div,(0,r.Z)({dir:v,"data-orientation":o},m,{ref:t})))}),g=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:l=!0,...s}=e,o=b("TabsList",n),c=v(n);return(0,a.createElement)(i.fC,(0,r.Z)({asChild:!0},c,{orientation:o.orientation,dir:o.dir,loop:l}),(0,a.createElement)(u.WV.div,(0,r.Z)({role:"tablist","aria-orientation":o.orientation},s,{ref:t})))}),w=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:n,value:s,disabled:o=!1,...c}=e,d=b("TabsTrigger",n),f=v(n),h=_(d.baseId,s),x=N(d.baseId,s),m=s===d.value;return(0,a.createElement)(i.ck,(0,r.Z)({asChild:!0},f,{focusable:!o,active:m}),(0,a.createElement)(u.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":x,"data-state":m?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:h},c,{ref:t,onMouseDown:(0,l.M)(e.onMouseDown,e=>{o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(s)}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(s)}),onFocus:(0,l.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;m||o||!e||d.onValueChange(s)})})))}),y=(0,a.forwardRef)((e,t)=>{let{__scopeTabs:n,value:l,forceMount:s,children:i,...c}=e,d=b("TabsContent",n),f=_(d.baseId,l),h=N(d.baseId,l),x=l===d.value,m=(0,a.useRef)(x);return(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.createElement)(o.z,{present:s||x},({present:n})=>(0,a.createElement)(u.WV.div,(0,r.Z)({"data-state":x?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:h,tabIndex:0},c,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),n&&i))});function _(e,t){return`${e}-trigger-${t}`}function N(e,t){return`${e}-content-${t}`}let k=j,C=g,E=w,M=y}}]);
//# sourceMappingURL=8299.952c0ef5fa377b9b.js.map