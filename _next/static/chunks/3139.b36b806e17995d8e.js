"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3139],{13139:function(e,t,r){r.r(t),r.d(t,{TextMessageEditor:function(){return C}});var n,a=r(97410),o=r(27781),c=r(95290),s=r(15316),l=r(20151),i=r(26693),d=r(99140),u=r(66943),f=r(92379),p=r(62984),b=r(15478),g=r(88628),v=r(94867),j=r(9519),O=r(19841),y=r(651);let h=["className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let w=(0,f.forwardRef)(function(e,t){let{className:r}=e,n=(0,o.Z)(e,h);return(0,y.jsxs)("div",{className:"grid",children:[(0,y.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,O.default)("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden",r),ref:t},n)),(0,y.jsxs)("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-2",children:[e.value," "]})]})});var x=r(4325);function P(e){let{initialText:t,clientThreadId:r,currentLeaf:n,onChangeItemInView:a,onExitEdit:o,onRequestCompletion:c,disabled:s,attachments:b}=e,O=(0,f.useId)(),h="".concat(n,"-").concat(O),{0:m,1:P}=(0,f.useState)(null!=t?t:""),k=(0,f.useRef)(null),N=(0,i.BL)(),C=(0,f.useCallback)(e=>{P(e.currentTarget.value)},[]),M=(0,f.useCallback)(()=>{c({type:g.Os.Next,promptId:h,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:v.iN.getConversationMode(r)},updateTree:()=>{v.tQ.updateTree(r,e=>{let t=e.getParentId(n);e.addNode(h,m,t,g.uU.User,void 0,b?{attachments:b}:void 0)}),a(h)}}),o(),d.A.logEvent(u.M.changeNode,{intent:"edit_save"})},[b,r,n,h,m,a,c,o]),D=(0,f.useCallback)(()=>{a(n),d.A.logEvent(u.M.changeNode,{intent:"edit_cancel"}),o(),d.A.logEvent(u.M.cancelEditPrompt,{threadId:v.tQ.getServerThreadId(r)})},[n,a,o,r]);(0,f.useEffect)(()=>{let e=k.current;if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}},[]),(0,f.useEffect)(()=>{let e=k.current,t=e=>{"Enter"===e.key&&e.metaKey?M():"Escape"===e.key&&D()};return e&&e.addEventListener("keydown",t),()=>{e&&e.removeEventListener("keydown",t)}},[D,M]);let S=b&&b.length>0&&(0,y.jsx)(E,{children:b.map(e=>(0,y.jsx)(x.Z,{width:N?"normal":"wide",file:e.name,contextConnectorInfo:(0,l.xA)(e.context_connector_info)},e.id))}),Z=(0,y.jsx)(w,{ref:k,value:m,onChange:C,className:"m-0 w-full resize-none border-0 bg-transparent p-2 focus:ring-0 focus-visible:ring-0"});return(0,y.jsxs)("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[S,Z,(0,y.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,y.jsx)(j.z,{as:"button",color:"secondary",onClick:D,children:(0,y.jsx)(p.Z,{id:"D9gbPp",defaultMessage:"Cancel"})}),(0,y.jsx)(j.z,{as:"button",onClick:M,disabled:s,children:(0,y.jsx)(p.Z,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}let E=b.Z.div(n||(n=(0,s.Z)(["flex gap-2 flex-wrap"]))),k=["message"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){var t;let{message:r}=e,n=(0,o.Z)(e,k);return(0,y.jsx)(P,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({currentLeaf:r.nodeId,initialText:(0,c.RR)(r.message),attachments:null===(t=r.message.metadata)||void 0===t?void 0:t.attachments},n))}}}]);
//# sourceMappingURL=3139.b36b806e17995d8e.js.map