"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9162],{4684:function(e,t,n){n.d(t,{d:function(){return a}});var r=n(80326),i=n(60314),o=n(81171),s=n(59231);class l extends i.Y1{constructor(e){super(e,e)}map(e,t){let n=e.resolve(t.map(this.head));return l.valid(n)?new l(n):i.Y1.near(n)}content(){return o.p2.empty}eq(e){return e instanceof l&&e.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(e,t){if("number"!=typeof t.pos)throw RangeError("Invalid input for GapCursor.fromJSON");return new l(e.resolve(t.pos))}getBookmark(){return new p(this.anchor)}static valid(e){let t=e.parent;if(t.isTextblock||!function(e){for(let t=e.depth;t>=0;t--){let n=e.index(t),r=e.node(t);if(0==n){if(r.type.spec.isolating)return!0;continue}for(let e=r.child(n-1);;e=e.lastChild){if(0==e.childCount&&!e.inlineContent||e.isAtom||e.type.spec.isolating)return!0;if(e.inlineContent)return!1}}return!0}(e)||!function(e){for(let t=e.depth;t>=0;t--){let n=e.indexAfter(t),r=e.node(t);if(n==r.childCount){if(r.type.spec.isolating)return!0;continue}for(let e=r.child(n);;e=e.firstChild){if(0==e.childCount&&!e.inlineContent||e.isAtom||e.type.spec.isolating)return!0;if(e.inlineContent)return!1}}return!0}(e))return!1;let n=t.type.spec.allowGapCursor;if(null!=n)return n;let r=t.contentMatchAt(e.index()).defaultType;return r&&r.isTextblock}static findGapCursorFrom(e,t,n=!1){e:for(;;){if(!n&&l.valid(e))return e;let r=e.pos,o=null;for(let n=e.depth;;n--){let i=e.node(n);if(t>0?e.indexAfter(n)<i.childCount:e.index(n)>0){o=i.child(t>0?e.indexAfter(n):e.index(n)-1);break}if(0==n)return null;r+=t;let s=e.doc.resolve(r);if(l.valid(s))return s}for(;;){let s=t>0?o.firstChild:o.lastChild;if(!s){if(o.isAtom&&!o.isText&&!i.qv.isSelectable(o)){e=e.doc.resolve(r+o.nodeSize*t),n=!1;continue e}break}o=s,r+=t;let p=e.doc.resolve(r);if(l.valid(p))return p}return null}}}l.prototype.visible=!1,l.findFrom=l.findGapCursorFrom,i.Y1.jsonID("gapcursor",l);class p{constructor(e){this.pos=e}map(e){return new p(e.map(this.pos))}resolve(e){let t=e.resolve(this.pos);return l.valid(t)?new l(t):i.Y1.near(t)}}function a(){return new i.Sy({props:{decorations:d,createSelectionBetween:(e,t,n)=>t.pos==n.pos&&l.valid(n)?new l(n):null,handleClick:f,handleKeyDown:h,handleDOMEvents:{beforeinput:c}}})}let h=(0,r.$)({ArrowLeft:u("horiz",-1),ArrowRight:u("horiz",1),ArrowUp:u("vert",-1),ArrowDown:u("vert",1)});function u(e,t){let n="vert"==e?t>0?"down":"up":t>0?"right":"left";return function(e,r,o){let s=e.selection,p=t>0?s.$to:s.$from,a=s.empty;if(s instanceof i.Bs){if(!o.endOfTextblock(n)||0==p.depth)return!1;a=!1,p=e.doc.resolve(t>0?p.after():p.before())}let h=l.findGapCursorFrom(p,t,a);return!!h&&(r&&r(e.tr.setSelection(new l(h))),!0)}}function f(e,t,n){if(!e||!e.editable)return!1;let r=e.state.doc.resolve(t);if(!l.valid(r))return!1;let o=e.posAtCoords({left:n.clientX,top:n.clientY});return!(o&&o.inside>-1&&i.qv.isSelectable(e.state.doc.nodeAt(o.inside)))&&(e.dispatch(e.state.tr.setSelection(new l(r))),!0)}function c(e,t){if("insertCompositionText"!=t.inputType||!(e.state.selection instanceof l))return!1;let{$from:n}=e.state.selection,r=n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);if(!r)return!1;let s=o.HY.empty;for(let e=r.length-1;e>=0;e--)s=o.HY.from(r[e].createAndFill(null,s));let p=e.state.tr.replace(n.pos,n.pos,new o.p2(s,0,0));return p.setSelection(i.Bs.near(p.doc.resolve(n.pos+1))),e.dispatch(p),!1}function d(e){if(!(e.selection instanceof l))return null;let t=document.createElement("div");return t.className="ProseMirror-gapcursor",s.EH.create(e.doc,[s.p.widget(e.selection.head,t,{key:"gapcursor"})])}},74263:function(e,t,n){n.d(t,{m8:function(){return w},KX:function(){return E},Yw:function(){return M}});var r=function(){};r.prototype.append=function(e){return e.length?(e=r.from(e),!this.length&&e||e.length<200&&this.leafAppend(e)||this.length<200&&e.leafPrepend(this)||this.appendInner(e)):this},r.prototype.prepend=function(e){return e.length?r.from(e).append(this):this},r.prototype.appendInner=function(e){return new o(this,e)},r.prototype.slice=function(e,t){return(void 0===e&&(e=0),void 0===t&&(t=this.length),e>=t)?r.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))},r.prototype.get=function(e){if(!(e<0)&&!(e>=this.length))return this.getInner(e)},r.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)},r.prototype.map=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=this.length);var r=[];return this.forEach(function(t,n){return r.push(e(t,n))},t,n),r},r.from=function(e){return e instanceof r?e:e&&e.length?new i(e):r.empty};var i=function(e){function t(t){e.call(this),this.values=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(e,n){return 0==e&&n==this.length?this:new t(this.values.slice(e,n))},t.prototype.getInner=function(e){return this.values[e]},t.prototype.forEachInner=function(e,t,n,r){for(var i=t;i<n;i++)if(!1===e(this.values[i],r+i))return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){for(var i=t-1;i>=n;i--)if(!1===e(this.values[i],r+i))return!1},t.prototype.leafAppend=function(e){if(this.length+e.length<=200)return new t(this.values.concat(e.flatten()))},t.prototype.leafPrepend=function(e){if(this.length+e.length<=200)return new t(e.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(t.prototype,n),t}(r);r.empty=new i([]);var o=function(e){function t(t,n){e.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(e){return e<this.left.length?this.left.get(e):this.right.get(e-this.left.length)},t.prototype.forEachInner=function(e,t,n,r){var i=this.left.length;if(t<i&&!1===this.left.forEachInner(e,t,Math.min(n,i),r)||n>i&&!1===this.right.forEachInner(e,Math.max(t-i,0),Math.min(this.length,n)-i,r+i))return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){var i=this.left.length;if(t>i&&!1===this.right.forEachInvertedInner(e,t-i,Math.max(n,i)-i,r+i)||n<i&&!1===this.left.forEachInvertedInner(e,Math.min(t,i),n,r))return!1},t.prototype.sliceInner=function(e,t){if(0==e&&t==this.length)return this;var n=this.left.length;return t<=n?this.left.slice(e,t):e>=n?this.right.slice(e-n,t-n):this.left.slice(e,n).append(this.right.slice(0,t-n))},t.prototype.leafAppend=function(e){var n=this.right.leafAppend(e);if(n)return new t(this.left,n)},t.prototype.leafPrepend=function(e){var n=this.left.leafPrepend(e);if(n)return new t(n,this.right)},t.prototype.appendInner=function(e){return this.left.depth>=Math.max(this.right.depth,e.depth)+1?new t(this.left,new t(this.right,e)):new t(this,e)},t}(r),s=n(70348),l=n(60314);class p{constructor(e,t){this.items=e,this.eventCount=t}popEvent(e,t){let n,r,i,o;if(0==this.eventCount)return null;let s=this.items.length;for(;;s--)if(this.items.get(s-1).selection){--s;break}t&&(r=(n=this.remapping(s,this.items.length)).maps.length);let l=e.tr,h=[],u=[];return this.items.forEach((e,t)=>{if(!e.step){n||(r=(n=this.remapping(s,t+1)).maps.length),r--,u.push(e);return}if(n){u.push(new a(e.map));let t=e.step.map(n.slice(r)),i;t&&l.maybeStep(t).doc&&(i=l.mapping.maps[l.mapping.maps.length-1],h.push(new a(i,void 0,void 0,h.length+u.length))),r--,i&&n.appendMap(i,r)}else l.maybeStep(e.step);if(e.selection)return i=n?e.selection.map(n.slice(r)):e.selection,o=new p(this.items.slice(0,s).append(u.reverse().concat(h)),this.eventCount-1),!1},this.items.length,0),{remaining:o,transform:l,selection:i}}addTransform(e,t,n,r){var i,o;let s,l=[],h=this.eventCount,f=this.items,c=!r&&f.length?f.get(f.length-1):null;for(let n=0;n<e.steps.length;n++){let i=e.steps[n].invert(e.docs[n]),o=new a(e.mapping.maps[n],i,t),s;(s=c&&c.merge(o))&&(o=s,n?l.pop():f=f.slice(0,f.length-1)),l.push(o),t&&(h++,t=void 0),r||(c=o)}let d=h-n.depth;return d>u&&(i=f,o=d,i.forEach((e,t)=>{if(e.selection&&0==o--)return s=t,!1}),f=i.slice(s),h-=d),new p(f.append(l),h)}remapping(e,t){let n=new s.vs;return this.items.forEach((t,r)=>{let i=null!=t.mirrorOffset&&r-t.mirrorOffset>=e?n.maps.length-t.mirrorOffset:void 0;n.appendMap(t.map,i)},e,t),n}addMaps(e){return 0==this.eventCount?this:new p(this.items.append(e.map(e=>new a(e))),this.eventCount)}rebased(e,t){if(!this.eventCount)return this;let n=[],r=Math.max(0,this.items.length-t),i=e.mapping,o=e.steps.length,s=this.eventCount;this.items.forEach(e=>{e.selection&&s--},r);let l=t;this.items.forEach(t=>{let r=i.getMirror(--l);if(null==r)return;o=Math.min(o,r);let p=i.maps[r];if(t.step){let o=e.steps[r].invert(e.docs[r]),h=t.selection&&t.selection.map(i.slice(l+1,r));h&&s++,n.push(new a(p,o,h))}else n.push(new a(p))},r);let h=[];for(let e=t;e<o;e++)h.push(new a(i.maps[e]));let u=new p(this.items.slice(0,r).append(h).append(n),s);return u.emptyItemCount()>500&&(u=u.compress(this.items.length-n.length)),u}emptyItemCount(){let e=0;return this.items.forEach(t=>{!t.step&&e++}),e}compress(e=this.items.length){let t=this.remapping(0,e),n=t.maps.length,i=[],o=0;return this.items.forEach((r,s)=>{if(s>=e)i.push(r),r.selection&&o++;else if(r.step){let e=r.step.map(t.slice(n)),s=e&&e.getMap();if(n--,s&&t.appendMap(s,n),e){let l=r.selection&&r.selection.map(t.slice(n));l&&o++;let p=new a(s.invert(),e,l),h,u=i.length-1;(h=i.length&&i[u].merge(p))?i[u]=h:i.push(p)}}else r.map&&n--},this.items.length,0),new p(r.from(i.reverse()),o)}}p.empty=new p(r.empty,0);class a{constructor(e,t,n,r){this.map=e,this.step=t,this.selection=n,this.mirrorOffset=r}merge(e){if(this.step&&e.step&&!e.selection){let t=e.step.merge(this.step);if(t)return new a(t.getMap().invert(),t,this.selection)}}}class h{constructor(e,t,n,r,i){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=r,this.prevComposition=i}}let u=20;function f(e){let t=[];for(let n=e.length-1;n>=0&&0==t.length;n--)e[n].forEach((e,n,r,i)=>t.push(r,i));return t}function c(e,t){if(!e)return null;let n=[];for(let r=0;r<e.length;r+=2){let i=t.map(e[r],1),o=t.map(e[r+1],-1);i<=o&&n.push(i,o)}return n}let d=!1,m=null;function g(e){let t=e.plugins;if(m!=t){d=!1,m=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){d=!0;break}}return d}let v=new l.H$("history"),y=new l.H$("closeHistory");function w(e={}){return e={depth:e.depth||100,newGroupDelay:e.newGroupDelay||500},new l.Sy({key:v,state:{init:()=>new h(p.empty,p.empty,null,0,-1),apply:(t,n,r)=>(function(e,t,n,r){let i=n.getMeta(v),o;if(i)return i.historyState;n.getMeta(y)&&(e=new h(e.done,e.undone,null,0,-1));let s=n.getMeta("appendedTransaction");if(0==n.steps.length)return e;if(s&&s.getMeta(v))return s.getMeta(v).redo?new h(e.done.addTransform(n,void 0,r,g(t)),e.undone,f(n.mapping.maps),e.prevTime,e.prevComposition):new h(e.done,e.undone.addTransform(n,void 0,r,g(t)),null,e.prevTime,e.prevComposition);if(!1===n.getMeta("addToHistory")||s&&!1===s.getMeta("addToHistory"))return(o=n.getMeta("rebased"))?new h(e.done.rebased(n,o),e.undone.rebased(n,o),c(e.prevRanges,n.mapping),e.prevTime,e.prevComposition):new h(e.done.addMaps(n.mapping.maps),e.undone.addMaps(n.mapping.maps),c(e.prevRanges,n.mapping),e.prevTime,e.prevComposition);{let i=n.getMeta("composition"),o=0==e.prevTime||!s&&e.prevComposition!=i&&(e.prevTime<(n.time||0)-r.newGroupDelay||!function(e,t){if(!t)return!1;if(!e.docChanged)return!0;let n=!1;return e.mapping.maps[0].forEach((e,r)=>{for(let i=0;i<t.length;i+=2)e<=t[i+1]&&r>=t[i]&&(n=!0)}),n}(n,e.prevRanges)),l=s?c(e.prevRanges,n.mapping):f(n.mapping.maps);return new h(e.done.addTransform(n,o?t.selection.getBookmark():void 0,r,g(t)),p.empty,l,n.time,null==i?e.prevComposition:i)}})(n,r,t,e)},config:e,props:{handleDOMEvents:{beforeinput(e,t){let n=t.inputType,r="historyUndo"==n?M:"historyRedo"==n?E:null;return!!r&&(t.preventDefault(),r(e.state,e.dispatch))}}}})}function C(e,t){return(n,r)=>{let i=v.getState(n);if(!i||0==(e?i.undone:i.done).eventCount)return!1;if(r){let o=function(e,t,n){let r=g(t),i=v.get(t).spec.config,o=(n?e.undone:e.done).popEvent(t,r);if(!o)return null;let s=o.selection.resolve(o.transform.doc),l=(n?e.done:e.undone).addTransform(o.transform,t.selection.getBookmark(),i,r),p=new h(n?l:o.remaining,n?o.remaining:l,null,0,-1);return o.transform.setSelection(s).setMeta(v,{redo:n,historyState:p})}(i,n,e);o&&r(t?o.scrollIntoView():o)}return!0}}let M=C(!1,!0),E=C(!0,!0);C(!1,!1),C(!0,!1)}}]);
//# sourceMappingURL=9162.47f5ac6f8af2d45a.js.map