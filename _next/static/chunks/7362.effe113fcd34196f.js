"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7362],{27362:function(e,t,s){s.r(t),s.d(t,{default:function(){return B}});var i=s(79014),l=s(24312),n=s(19841),a=s(58164),o=s(84688),r=s.n(o),d=s(92379),c=s(91028),x=s(84551),m=s(88041),u=s(94695),h=s(12719),p=s(78496),f=s.n(p),g=s(73581),j=s(21292),w=s(29757),y=s(74832),b=s(40124),v=s(651);function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach(function(t){(0,l.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let z={padding:20,zIndex:1e3,xOffset:300,yOffset:200,normal:{width:600,height:585},small:{width:600,height:335}},C=r()(()=>Promise.all([s.e(5823),s.e(8211)]).then(s.bind(s,88211)),{ssr:!1,loading:()=>(0,v.jsx)("div",{className:"p-3",children:(0,v.jsx)("p",{className:"flex items-center justify-center text-center font-mono text-sm uppercase text-token-text-primary",style:{height:200},children:(0,v.jsx)(x.Z,k({},W.loading))})}),loadableGenerated:{webpack:()=>[88211]}});function O(){let e=(0,d.useRef)(null),[{width:t,height:s},l]=f()(),{targetLatencyData:o}=(0,y.gj)(),r=(0,i.tN)(i.bM.isLatencyDevtoolsVisible);(0,d.useEffect)(()=>{if(e.current){let t=window.innerWidth,s=window.innerHeight;e.current.updatePosition({x:t-(z.normal.width+z.xOffset)-z.padding,y:s-(z.normal.height+z.yOffset)-z.padding}),e.current.updateSize({width:z.normal.width,height:z.normal.height})}},[]);let{0:c,1:m}=(0,d.useState)(!1),u=()=>{c||m(!0)},p=()=>{c&&m(!1)},j=(0,b.AA)(),N=(0,b.JP)(),{0:O,1:P}=(0,d.useState)(!1),B=(0,d.useMemo)(()=>j?(0,b.j7)(j)+1:0,[j]),R=(0,d.useMemo)(()=>j?(0,b.BC)():0,[j]);(0,d.useEffect)(()=>{P(!1)},[j,P]);let S=()=>{r?i.vm.hideLatencyDevTools():i.vm.showLatencyDevTools()};if(!r)return null;let Z=Object.keys(N).length>1;return(0,v.jsx)(a.E.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,v.jsx)(h.s,{disableDragging:c,ref:e,style:{zIndex:z.zIndex,width:z.normal.width,height:z.normal.height},className:(0,n.default)("transition-delay popover group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-500 bg-token-main-surface-primary opacity-80 shadow-md transition-opacity delay-100 hover:opacity-100 hover:delay-0 dark:border-white"),children:j?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"flex flex-row items-center border-b border-gray-700 py-1 dark:border-gray-300",children:(0,v.jsxs)("div",{className:"flex w-full flex-row items-center justify-end",children:[(0,v.jsxs)("div",{className:"flex w-full flex-row items-center justify-between px-3 ",children:[(0,v.jsx)(g.z,{disabled:!Z,className:"whitespace-nowrap !px-1.5 !py-0.5 text-xs",loading:O,color:"secondary",size:"small",as:"button",onClick:()=>{P(!0),(0,b.WD)((0,b.iZ)(j))},children:(0,v.jsx)(w.DUf,{className:"icon-sm"})}),(0,v.jsxs)("span",{className:"flex flex-row items-center justify-center space-x-2 truncate whitespace-nowrap text-xs font-medium uppercase text-token-text-secondary",children:[(0,v.jsxs)("span",{className:"inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",children:[(0,v.jsx)("svg",{className:"h-1.5 w-1.5 fill-yellow-500",viewBox:"0 0 6 6","aria-hidden":"true",children:(0,v.jsx)("circle",{cx:3,cy:3,r:3})}),"".concat(B," / ").concat(R)]}),(0,v.jsx)(x.Z,k(k({},W.node),{},{values:{focusedNodeId:j}}))]}),(0,v.jsx)(g.z,{disabled:!Z,className:"whitespace-nowrap !px-1.5 !py-0.5 text-xs",loading:O,color:"secondary",size:"small",as:"button",onClick:()=>{P(!0),(0,b.WD)((0,b.Q7)(j))},children:(0,v.jsx)(w.ob9,{className:"icon-sm"})})]}),(0,v.jsx)(g.z,{color:"none",size:"small",as:"button",onClick:()=>S(),className:"whitespace-nowrap !pr-2",children:(0,v.jsx)(w.tPq,{className:"icon-sm"})})]})}),o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{ref:l,className:"h-full w-full min-w-20 space-y-2 overflow-scroll p-1 pb-12",children:(0,v.jsxs)("div",{className:(0,n.default)("col-span-1 grid gap-1"),children:[(0,v.jsx)("div",{onMouseMove:u,onMouseEnter:u,onMouseLeave:p,onMouseOut:p,onMouseUp:p,children:(0,v.jsx)(C,{parentDimensions:{width:t,height:s},targetLatencyData:o})}),(0,v.jsx)(M,{}),(0,v.jsx)(D,{})]})}),(0,v.jsx)(T,{resizableRef:e})]})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"font-lg flex h-full flex-col items-center justify-center text-lg",children:(0,v.jsx)(x.Z,k({},W.initiateCompletionRequest))}),(0,v.jsx)(T,{resizableRef:e})]})})})}let D=()=>(0,v.jsx)("div",{}),M=()=>{let{stats:e}=(0,y.gj)();return(0,v.jsxs)("div",{className:"space-y-3 overflow-scroll px-3",children:[(0,v.jsx)("div",{className:"border-b pb-3",children:(0,v.jsx)(P,{size:"large",stats:e.filter(e=>"summary"==e.category)})}),(0,v.jsx)(P,{stats:e.filter(e=>"token"==e.category)}),(0,v.jsx)(P,{stats:e.filter(e=>"aggregate"==e.category)})]})},P=e=>{let{stats:t,size:s="normal"}=e;return(0,v.jsx)("div",{className:"flex flex-wrap gap-3",children:t.map(e=>e.stat&&(0,v.jsx)("div",{className:"col-span-1",children:(0,v.jsxs)("div",{className:(0,n.default)("overflow-hidden bg-token-main-surface-primary shadow",{"rounded px-2 py-1 sm:p-2":"normal"==s,"rounded-lg px-2 py-3 sm:p-3":"large"==s}),children:[(0,v.jsx)("dt",{className:(0,n.default)("truncate text-token-text-tertiary",{"text-xs font-medium":"normal"==s,"text-sm font-medium":"large"==s}),children:e.name}),(0,v.jsx)("dd",{className:(0,n.default)("mt-1 font-semibold text-token-text-primary",{"text-base tracking-tight":"normal"==s,"text-xl tracking-tight":"large"==s}),children:e.stat})]})},e.name))})},T=e=>{let{resizableRef:t}=e,s=(0,m.Z)(),l=e=>{let s=window.innerWidth,i=window.innerHeight,l={"up-left":{x:0,y:0},"down-right":{x:s-z.normal.width-z.padding,y:i-z.normal.height-z.padding},"down-left":{x:0,y:i-z.normal.height-z.padding},"up-right":{x:s-z.normal.width-z.padding,y:0}};t.current&&(t.current.updatePosition({x:l[e].x,y:l[e].y}),t.current.updateSize({width:z.normal.width,height:z.normal.height}))},n=()=>{i.vm.hideLatencyDevTools()};return(0,v.jsxs)("div",{className:"popover sticky bottom-0 z-50 flex w-full flex-row justify-between border-t border-gray-400 bg-token-main-surface-primary p-2",children:[(0,v.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,v.jsx)(j.u,{label:s.formatMessage(W.dragAndResizeTooltip),className:"item-center flex flex-col justify-center pl-2 pr-1",children:(0,v.jsx)(c.uWH,{className:"icon-sm"})}),(0,v.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>l("down-left"),children:(0,v.jsx)(w.ReP,{className:"icon-sm"})}),(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>l("up-left"),children:(0,v.jsx)(w.w9k,{className:"icon-sm rotate-180"})}),(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>l("up-right"),children:(0,v.jsx)(w.ReP,{className:"icon-sm rotate-180"})}),(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>l("down-right"),children:(0,v.jsx)(w.w9k,{className:"icon-sm"})})]}),(0,v.jsxs)("div",{className:"flex flex-row space-x-1",children:[(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>{var e;null===(e=t.current)||void 0===e||e.updateSize({width:z.small.width,height:z.small.height})},children:(0,v.jsx)(x.Z,k({},W.shrinkButton))}),(0,v.jsx)(g.z,{color:"secondary",size:"small",as:"button",onClick:()=>{var e;null===(e=t.current)||void 0===e||e.updateSize({width:z.normal.width,height:z.normal.height})},children:(0,v.jsx)(x.Z,k({},W.growButton))})]})]}),(0,v.jsx)("div",{className:"flex flex-row justify-end gap-3",children:(0,v.jsx)(g.z,{color:"none",size:"small",as:"button",onClick:()=>n(),className:"whitespace-nowrap !pr-2",children:(0,v.jsx)(x.Z,k({},W.closeButton))})})]})},W=(0,u.vU)({loading:{id:"CompletionDevToolsWidget.loading",defaultMessage:"Loading..."},node:{id:"CompletionDevToolsWidget.node",defaultMessage:"Node: {focusedNodeId}"},initiateCompletionRequest:{id:"CompletionDevToolsWidget.initiateCompletionRequest",defaultMessage:"Initiate a completion request to use this feature"},shrinkButton:{id:"CompletionDevToolsWidget.shrinkButton",defaultMessage:"Shrink"},growButton:{id:"CompletionDevToolsWidget.growButton",defaultMessage:"Grow"},closeButton:{id:"CompletionDevToolsWidget.closeButton",defaultMessage:"Close"},dragAndResizeTooltip:{id:"CompletionDevToolsWidget.dragAndResizeTooltip",defaultMessage:"This widget can be dragged and resized"}});var B=()=>(0,i.tN)(i.bM.isLatencyDevtoolsVisible)?(0,v.jsx)(O,{}):null}}]);
//# sourceMappingURL=7362.effe113fcd34196f.js.map