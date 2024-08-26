"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{50753:function(t,e,n){n.r(e),n.d(e,{SystemHintSuggestor:function(){return y}});var r=n(92379),i=n(50863),s=n(36348),a=n(40743),c=n(2721),o=n(84760),u=n(19841),l=n(49764),d=n(25009),p=n(651);let h=t=>{let{svgString:e,className:n}=t,r=(0,p.jsx)("div",{className:n});return(0,p.jsx)(d.S,{name:"StringToSVG",fallback:r,children:(0,p.jsx)("div",{className:(0,u.default)("[&_svg]:h-full [&_svg]:w-full",n),dangerouslySetInnerHTML:{__html:e}})})};var f=n(17167),m=n(91399);let g=(0,p.jsx)("span",{children:"..."});function v(t){let{composerController:e}=t,n=(0,o.a)({queryKey:["system-hints"],queryFn:async()=>(await c.Z.getSystemHints()).system_hints.map(t=>{let{name:e,description:n,logo:r,system_hint:i}=t;return{name:e,description:n,logo:r,systemHint:i}}),select:void 0,staleTime:1/0}),{0:s,1:a}=(0,r.useState)([]),u=(0,r.useMemo)(()=>n.data??[],[n.data]),{0:d,1:v}=(0,r.useState)(void 0),{0:y,1:w}=(0,r.useState)(0);(0,r.useEffect)(()=>{d?a(u.filter(t=>t.name.toLowerCase().includes(d.text.toLowerCase()))):a([])},[d,u]);let b=e.useState(t=>t.getSystemHints().length>0);(0,r.useEffect)(()=>{e.view.dispatch(e.view.state.tr.setMeta(m.o4,{onHintMatch:t=>{v(e=>e&&t&&e.text===t.text&&e.range.from===t.range.to&&e.range.to?e:t)}}))},[e]);let j=b||n.data?.length===0||!!n.error||!s.length||!d;(0,r.useEffect)(()=>{j&&w(0)},[j]);let S=s.length,O=(0,r.useCallback)(t=>{w(e=>(t(e)%S+S)%S)},[S]),k=s[y],M=t=>{let{hintToSave:n=k,expectPerfectMatch:r,appendSpace:i=!0}=t;d&&k&&(!r||n.name.toLowerCase()===d.text.toLowerCase())&&((0,m.vt)(e.view,{id:n.systemHint,hint:n.name},d.range,i),(0,f.am)(e.view))},T=(0,r.useRef)(M);T.current=M;let P=(0,r.useRef)(O);P.current=O,(0,r.useRef)(d).current=d;let E=e.view;(0,r.useEffect)(()=>(j||(0,f.$b)(E,t=>{"up"===t?P.current(t=>t-1):"down"===t?P.current(t=>t+1):"cancel"===t?(0,f.am)(E):"submit"===t?(T.current({expectPerfectMatch:!1}),(0,f.am)(E)):"checkMatch"===t&&T.current({expectPerfectMatch:!0,appendSpace:!1})}),()=>(0,f.am)(E)),[j,E]);let C=(0,l.Z)();return j?null:(0,p.jsx)(i.w5,{className:"max-w-60",children:n.isLoading?(0,p.jsx)(x,{title:C.formatMessage({id:"gN/1Ui",defaultMessage:"Loading hints"}),icon:g}):s.map((t,n)=>(0,p.jsx)("div",{children:(0,p.jsx)(i.gG,{autoFocus:!1,className:"rounded-xl px-1 py-2",spoofHovered:n===y,onMouseOver:()=>w(n),onClick:()=>{M({hintToSave:t,expectPerfectMatch:!1}),e.focus()},children:(0,p.jsx)(x,{title:t.name,description:t.description,icon:t.logo?(0,p.jsx)(h,{svgString:t.logo,className:"icon-lg text-token-text-secondary"}):g,checked:!1})})},t.systemHint))})}function x(t){let{title:e,description:n,icon:r,onClick:i,checked:s}=t;return(0,p.jsxs)("div",{className:"inline-flex w-full items-center justify-start gap-1.5 pl-1.5 pr-3",onClick:i,children:[(0,p.jsx)("div",{className:"flex h-7 w-7 items-center justify-center gap-2.5",children:r}),(0,p.jsxs)("div",{className:"shrink grow basis-0",children:[(0,p.jsxs)("span",{className:"text-sm font-normal leading-tight text-token-text-primary",children:[e,(0,p.jsx)("br",{})]}),!!n&&(0,p.jsx)("span",{className:"text-[13px] font-normal leading-[18px] text-token-text-secondary",children:n})]}),s&&(0,p.jsx)(a.kvR,{className:(0,u.default)("icon-md text-token-text-primary",{"group-hover:hidden":!s})})]})}function y(t){let{composerController:e}=t;return e instanceof s.F?(0,p.jsx)(v,{composerController:e}):null}},36348:function(t,e,n){n.d(e,{F:function(){return l}});var r=n(59749),i=n(92379),s=n(70310),a=n(17167),c=n(81945),o=n(91399),u=n(48710);class l extends u.N{constructor(t){super(),this.view=t}isEmpty(){return!this.view.state.doc.textContent}trimLeadingText(t){let e=this.view.state.tr,n=!1,r=!1;return e.doc.descendants((i,s)=>{!n&&i.isText&&(n=!0,i.text?.startsWith(t)&&(r=!0,e.insertText(i.text.replace(t,""),s,s+i.text.length)))}),r&&this.view.dispatch(e),r}replaceAll(t,e){let n=this.view.state.tr,r=[],i=0;n.doc.descendants((t,e)=>{t.isText&&void 0!==t.text&&(r.push({node:t,pos:e}),i=Math.max(i,e))}),r.reverse(),r.forEach(r=>{let{node:i,pos:s}=r;i.isText&&void 0!==i.text&&i.text.includes(t)&&n.insertText(i.text.replaceAll(t,e),s,s+i.text.length)}),this.view.dispatch(n)}appendText(t){this.view.dispatch(this.view.state.tr.insertText(t))}focus(){this.view.dom.focus()}setText(t){let{tr:e,schema:n}=this.view.state,r=t?n.nodes.paragraph.create(null,n.text(t)):n.nodes.paragraph.create();this.view.dispatch(e.replaceWith(0,this.view.state.doc.content.size,r))}getCurrentText(){return this.view.state.doc.textContent}getTextToSend(){return(0,s.B_)(this.view)}resize(){}isReady(){return!!this.view.state.doc}setPlaceholder(t){this.view.dispatch(this.view.state.tr.setMeta(c.e,{placeholder:t}))}getSelectionStart(){return this.view.state.selection.ranges[0].$from.pos}acceptLegacyKeydown(){return!a.Mw.getState(this.view.state).active}subscribe(t,e){return this.view.dom?.addEventListener(t,e),()=>{this.view.dom?.removeEventListener(t,e)}}useState(t){return(0,i.useSyncExternalStore)(t=>(0,r.qv)(this.view,t),()=>t(this))}getSystemHints(){let t=(0,o.C6)(this.view.state.tr.doc);return t.length?[t[0]]:[]}}},70310:function(t,e,n){n.d(e,{B_:function(){return s},Fd:function(){return i},n:function(){return a},oV:function(){return c}});var r=n(12498);function i(t){let e="",n=!1;return t.descendants(t=>(function t(r){if(n=!1,"paragraph"===r.type.name)return r.descendants(e=>t(e)),e+="\n",n=!0,!1;r.isText&&(e+=r.text)})(t)),n&&e.endsWith("\n")&&(e=e.slice(0,-1)),e}function s(t){return i(t.state.doc)}let a=(0,r.QF)(r.mD,r.X0,r.JA);function c(t,e){let n=t.state.schema;e.split("\n").forEach((e,r)=>{if(0===r)t.dispatch(t.state.tr.insertText(e));else{a(t.state,t.dispatch);let r=e?n.nodes.paragraph.create(null,n.text(e)):n.nodes.paragraph.create();t.dispatch(t.state.tr.replaceSelectionWith(r))}})}},17167:function(t,e,n){n.d(e,{$b:function(){return u},Mw:function(){return c},_:function(){return l},am:function(){return o}});var r=n(98601),i=n(60314);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}let c=new i.H$("menuSelectorPlugin");function o(t){t.dispatch(t.state.tr.setMeta(c,{active:!1,onMenuAction:void 0}))}function u(t,e){t.dispatch(t.state.tr.setMeta(c,{active:!0,onMenuAction:e}))}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{submitKeys:["Enter","Tab"],cancelKeys:["Escape"],checkStrictMatchKeys:[]};return new i.Sy({key:c,state:{init:()=>a(a({},t),{},{active:!1}),apply(t,e){let n=t.getMeta(c);return n?a(a({},e),n):e}},props:{handleKeyDown(t,e){let n=c.getState(t.state);return!!n.active&&(n.submitKeys.includes(e.key)?(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),n.onMenuAction?.("submit"),o(t),!0):n.cancelKeys.includes(e.key)?(e.preventDefault(),n.onMenuAction?.("cancel"),u(t,n.onMenuAction),!0):"ArrowUp"===e.key?(e.preventDefault(),n.onMenuAction?.("up"),!0):"ArrowDown"===e.key?(e.preventDefault(),n.onMenuAction?.("down"),!0):(n.checkStrictMatchKeys.includes(e.key)&&n.onMenuAction?.("checkMatch"),!1))}}})}},81945:function(t,e,n){n.d(e,{c:function(){return a},e:function(){return s}});var r=n(60314),i=n(59231);let s=new r.H$("placeholderPlugin");function a(t){return new r.Sy({key:s,state:{init:()=>({placeholder:t}),apply:(t,e)=>t.getMeta(s)?{placeholder:t.getMeta(s).placeholder}:e},props:{decorations(t){let{doc:e}=t;if(1===e.childCount&&e.firstChild?.isTextblock&&0===e.firstChild.content.size){let n=[],{placeholder:r}=s.getState(t);return t.doc.descendants((t,e)=>{let s=i.p.node(e,e+t.nodeSize,{class:"placeholder","data-placeholder":r});n.push(s)}),i.EH.create(e,n)}}}})}},91399:function(t,e,n){n.d(e,{C6:function(){return p},L:function(){return c},e5:function(){return h},o4:function(){return u},ow:function(){return o},vt:function(){return d}});var r=n(98601),i=n(60314);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}let c="command_token",o={group:"inline",inline:!0,atom:!0,content:"text*",attrs:{id:"",hint:""},selectable:!1,draggable:!1,toDOM:t=>["span",{"data-mention-id":t.attrs.id,"data-mention-hint":t.attrs.hint,class:"shimmer-blue"},t.attrs.hint],parseDOM:[{tag:"span[data-mention-id][data-mention-hint]",getAttrs:t=>({id:t.getAttribute("data-mention-id"),hint:t.getAttribute("data-mention-hint")})}]},u=new i.H$("slashCommandPlugin");function l(){return{queryText:"",active:!1,range:void 0}}function d(t,e,n,r){let i=t.state.schema.nodes[c].create(a({},e),t.state.schema.text(e.hint)),s=t.state.tr.replaceWith(n.from,n.to,i);r&&s.insertText(" ",n.from+i.nodeSize),t.dispatch(s)}function p(t){let e=[];return t.descendants(t=>{t.type.name===c&&"string"==typeof t.attrs?.id&&e.push(t.attrs.id)}),e}function h(){return new i.Sy({key:u,state:{init:()=>l(),apply(t,e){let n=t.getMeta(u),r=t.selection,i=function(t){if(0===t.depth)return;let e=t.before(),n=t.doc.textBetween(e,t.pos,"\n","\0").match(new RegExp(/(^|\s)\/(\w*)$/));if(n&&void 0!==n.index){let e=n[0].startsWith(" ")?n.index+1:n.index,r=n[0].startsWith(" ")?n[0].length-1:n[0].length,i=t.start()+e;return{range:{from:i,to:i+r},queryText:n[2]}}}(r.$from),s=a(a(a({},l()),e),n);return r.from!==r.to||(s.active=!!i,i&&(s.queryText=i.queryText,s.range=i.range)),function(t){let{active:e,range:n,queryText:r,onHintMatch:i}=t;i?i(e&&n?{text:r,range:n}:void 0):void 0}(s),s}}})}},59749:function(t,e,n){n.d(e,{Bi:function(){return s},Vk:function(){return c},qv:function(){return a}});var r=n(60314);let i=new r.H$("transactionEventPlugin"),s="prosemirrorDispatchTransaction";function a(t,e){let{eventTarget:n}=i.getState(t.state);return n.addEventListener(s,e),()=>{n.removeEventListener(s,e)}}function c(t){return new r.Sy({key:i,state:{init:()=>({eventTarget:t}),apply:(t,e)=>e}})}}}]);
//# sourceMappingURL=753.02117fffbfac24d2.js.map