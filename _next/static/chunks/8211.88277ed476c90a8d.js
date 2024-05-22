"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8211],{88211:function(e,t,n){n.r(t);var r=n(81873),o=n(651);t.default=e=>{let{targetLatencyData:t,parentDimensions:n}=e,i=[{x:t.filter(e=>e.requestCount>1).map(e=>e.requestCount),y:t.filter(e=>e.requestCount>1).map(e=>e.lastTokenDuration),text:t.filter(e=>e.requestCount>1).map(e=>e.content),type:"scatter",mode:"lines+markers",marker:{color:"red"}}],a={width:n.width-40,height:"210px"};return(0,o.jsx)("div",{className:"px-3 py-2",children:(0,o.jsx)(r.Z,{data:i,layout:{autosize:!0,xaxis:{rangemode:"tozero",title:"Token count",titlefont:{size:14},fixedrange:!0},yaxis:{rangemode:"tozero",title:"Latency (ms)",fixedrange:!0},margin:{l:60,r:50,b:40,t:10,pad:6}},style:a,config:{displaylogo:!1,scrollZoom:!0,displayModeBar:!0,responsive:!0,modeBarButtonsToRemove:["zoom2d","pan2d","autoScale2d","resetScale2d","zoomIn2d","zoomOut2d","lasso2d","select2d"]},className:"h-full w-full",useResizeHandler:!0})})}},80518:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(l,t);var n,o,a=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=d(l);return e=n?Reflect.construct(t,arguments,d(this).constructor):t.apply(this,arguments),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return u(e)}(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).p=Promise.resolve(),t.resizeHandler=null,t.handlers={},t.syncWindowResize=t.syncWindowResize.bind(u(t)),t.syncEventHandlers=t.syncEventHandlers.bind(u(t)),t.attachUpdateEvents=t.attachUpdateEvents.bind(u(t)),t.getRef=t.getRef.bind(u(t)),t.handleUpdate=t.handleUpdate.bind(u(t)),t.figureCallback=t.figureCallback.bind(u(t)),t.updatePlotly=t.updatePlotly.bind(u(t)),t}return o=[{key:"updatePlotly",value:function(t,n,r){var o=this;this.p=this.p.then(function(){if(!o.unmounting){if(!o.el)throw Error("Missing element reference");return e.react(o.el,{data:o.props.data,layout:o.props.layout,config:o.props.config,frames:o.props.frames})}}).then(function(){!o.unmounting&&(o.syncWindowResize(t),o.syncEventHandlers(),o.figureCallback(n),r&&o.attachUpdateEvents())}).catch(function(e){o.props.onError&&o.props.onError(e)})}},{key:"componentDidMount",value:function(){this.unmounting=!1,this.updatePlotly(!0,this.props.onInitialized,!0)}},{key:"componentDidUpdate",value:function(e){this.unmounting=!1;var t=e.frames&&e.frames.length?e.frames.length:0,n=this.props.frames&&this.props.frames.length?this.props.frames.length:0,r=!(e.layout===this.props.layout&&e.data===this.props.data&&e.config===this.props.config&&n===t),o=void 0!==e.revision,i=e.revision!==this.props.revision;(r||o&&(!o||i))&&this.updatePlotly(!1,this.props.onUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,this.figureCallback(this.props.onPurge),this.resizeHandler&&p&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.removeUpdateEvents(),e.purge(this.el)}},{key:"attachUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&c.forEach(function(t){e.el.on(t,e.handleUpdate)})}},{key:"removeUpdateEvents",value:function(){var e=this;this.el&&this.el.removeListener&&c.forEach(function(t){e.el.removeListener(t,e.handleUpdate)})}},{key:"handleUpdate",value:function(){this.figureCallback(this.props.onUpdate)}},{key:"figureCallback",value:function(e){if("function"==typeof e){var t=this.el;e({data:t.data,layout:t.layout,frames:this.el._transitionData?this.el._transitionData._frames:null},this.el)}}},{key:"syncWindowResize",value:function(t){var n=this;p&&(this.props.useResizeHandler&&!this.resizeHandler?(this.resizeHandler=function(){return e.Plots.resize(n.el)},window.addEventListener("resize",this.resizeHandler),t&&this.resizeHandler()):!this.props.useResizeHandler&&this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}},{key:"getRef",value:function(e){this.el=e,this.props.debug&&p&&(window.gd=this.el)}},{key:"syncEventHandlers",value:function(){var e=this;f.forEach(function(t){var n=e.props["on"+t],r=e.handlers[t],o=!!r;n&&!o?e.addEventHandler(t,n):!n&&o?e.removeEventHandler(t):n&&o&&n!==r&&(e.removeEventHandler(t),e.addEventHandler(t,n))})}},{key:"addEventHandler",value:function(e,t){this.handlers[e]=t,this.el.on(this.getPlotlyEventName(e),this.handlers[e])}},{key:"removeEventHandler",value:function(e){this.el.removeListener(this.getPlotlyEventName(e),this.handlers[e]),delete this.handlers[e]}},{key:"getPlotlyEventName",value:function(e){return"plotly_"+e.toLowerCase()}},{key:"render",value:function(){return i.default.createElement("div",{id:this.props.divId,style:this.props.style,ref:this.getRef,className:this.props.className})}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(l.prototype,o),Object.defineProperty(l,"prototype",{writable:!1}),l}(i.Component);return t.propTypes={data:a.default.arrayOf(a.default.object),config:a.default.object,layout:a.default.object,frames:a.default.arrayOf(a.default.object),revision:a.default.number,onInitialized:a.default.func,onPurge:a.default.func,onError:a.default.func,onUpdate:a.default.func,debug:a.default.bool,style:a.default.object,className:a.default.string,useResizeHandler:a.default.bool,divId:a.default.string},f.forEach(function(e){t.propTypes["on"+e]=a.default.func}),t.defaultProps={debug:!1,useResizeHandler:!1,data:[],style:{position:"relative",display:"inline-block"}},t};var o,i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=l(void 0);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(92379)),a=(o=n(39519))&&o.__esModule?o:{default:o};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=["AfterExport","AfterPlot","Animated","AnimatingFrame","AnimationInterrupted","AutoSize","BeforeExport","BeforeHover","ButtonClicked","Click","ClickAnnotation","Deselect","DoubleClick","Framework","Hover","LegendClick","LegendDoubleClick","Relayout","Relayouting","Restyle","Redraw","Selected","Selecting","SliderChange","SliderEnd","SliderStart","SunburstClick","Transitioning","TransitionInterrupted","Unhover","WebGlContextLost"],c=["plotly_restyle","plotly_redraw","plotly_relayout","plotly_relayouting","plotly_doubleclick","plotly_animated","plotly_sunburstclick"],p="undefined"!=typeof window},81873:function(e,t,n){t.Z=void 0;var r=i(n(80518)),o=i(n(89863));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,r.default)(o.default);t.Z=a}}]);
//# sourceMappingURL=8211.88277ed476c90a8d.js.map