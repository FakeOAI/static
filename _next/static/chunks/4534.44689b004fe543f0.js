"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4534],{34534:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var l=a(72438),r=a(73171),s=a(53265),n=a(52866),i=a(86705),o=a(19841),c=a(37609),d=a(83737),u=a(70079),m=a(9063),p=a(84692),x=a(59311),f=a(53238),g=a(31731),h=a(35250);function y(e){let{colorList:t,label:a,color:l,onColorUpdate:s}=e;return(0,h.jsxs)(g.Z.Root,{children:[(0,h.jsx)(g.Z.Trigger,{asChild:!0,children:(0,h.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,h.jsx)("span",{className:"max-w-28 truncate text-sm",children:a||(0,h.jsx)(p.Z,{id:"UnyV2o",defaultMessage:"Dataset"})}),(0,h.jsxs)("div",{className:"flex gap-1",children:[(0,h.jsx)("div",{className:"h-4 w-4 rounded-sm",style:{backgroundColor:l}}),(0,h.jsx)(r.ob9,{className:"icon-sm"})]})]})}),(0,h.jsx)(g.Z.Portal,{children:(0,h.jsx)(g.Z.Content,{className:"flex min-w-36 flex-col gap-4 p-4 align-middle",sideOffset:5,side:"right",children:(0,h.jsx)(b,{currentColor:l,colorList:t,onUpdate:s})})})]})}function b(e){let{colorList:t,currentColor:a,onUpdate:l}=e,{0:s,1:n}=(0,u.useState)(null!=a?a:""),i=(0,m.Z)(),c=e=>/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"grid grid-cols-4 flex-wrap gap-2",children:t.map((e,t)=>(0,h.jsx)("button",{onClick:()=>{n(e),l(e)},className:(0,o.default)("flex h-6 w-6 items-center justify-center rounded-md"),style:{backgroundColor:e},children:a===e&&(0,h.jsx)(r.$As,{className:"text-white"})},t))}),(0,h.jsxs)("div",{className:"flex h-6 rounded-md border border-token-border-light",children:[(0,h.jsx)("div",{className:"flex w-6 items-center justify-center bg-gray-200 px-2 py-1 text-sm text-gray-500",children:"#"}),(0,h.jsx)("input",{className:(0,o.default)("w-16 flex-1 rounded-r-md  border-0 p-2 text-xs uppercase leading-6 outline-none"),placeholder:i.formatMessage({id:"3xKVHs",defaultMessage:"F1B023"}),value:s.slice(1),onChange:e=>{let t="#".concat(e.target.value);n(t),c(t)&&l(t)}})]})]})}var j=a(75967),w=a(46),v=a(92319),N=a(5281),k=a(14652),C=a(65998);a(30303);var M=a(25771);let S=(0,u.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,u.useMemo)(()=>l.map(e=>{let{data:t,label:a,colors:l}=e;return{label:a,data:t,backgroundColor:l,borderColor:l,borderRadius:4}}),[l]);return(0,h.jsx)(M.$Q,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,animation:{duration:0},mode:"point",position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:6,left:16,right:16},yAlign:"bottom",callbacks:{title:function(e){return e[0].formattedValue},label:()=>""}}},scales:{x:{title:{display:!1},grid:{display:!1},ticks:{display:!0,autoSkip:!1}},y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}}},data:{labels:a.labels,datasets:r}})});S.displayName="BarChart";let F=(0,u.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,u.useMemo)(()=>{let e=l.length;return l.map(t=>{let{data:a,label:l,colors:r}=t;return{label:l,data:a,backgroundColor:r,borderColor:r,pointRadius:0,pointHoverRadius:5,pointHitRadius:10,tension:.2,borderWidth:e>10?e>50?.5:1:3,pointBackgroundColor:["rgba(255, 255, 255, 1)"],pointBorderWidth:3,pointHoverBorderWidth:3}})},[l]);return(0,h.jsx)(M.x1,{ref:t,options:{maintainAspectRatio:!1,scales:{x:{title:{display:!1,text:a.x_label},grid:{display:!1},ticks:{display:!0}},y:{title:{display:!1,text:a.y_label},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",animation:{duration:0},position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(e){return e[0].label},label:function(e){let{dataset:{label:t},parsed:{y:a}}=e;return"".concat(t?"".concat(t,": "):"").concat(a.toFixed(2))}}}}},data:{labels:a.labels,datasets:r}})});F.displayName="LineChart";var O=a(36241);let z=(0,u.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,u.useMemo)(()=>{let e=getComputedStyle(document.documentElement);return l.map(t=>{let{data:a,colors:l,label:r}=t;return{label:r,data:a,backgroundColor:l,borderWidth:2,borderColor:[e.getPropertyValue("--main-surface-primary").trim()]}})},[l]);return(0,h.jsx)("div",{className:"h-full w-full py-2",children:(0,h.jsx)(M.by,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!0,animation:{duration:0},mode:"index",position:"average",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:e=>e[0].formattedValue,label:function(e){let t=a.labels[e.dataIndex],r=l[0],s=parseFloat((r.data[e.dataIndex]/Number(r.data.reduce((e,t)=>Number(e)+Number(t),0))*100).toFixed(2));return"".concat(t," \xb7 ").concat(s,"%")}}},datalabels:{color:"white",textAlign:"center",font:{family:"S\xf6hne",weight:"bold",size:16},backgroundColor:function(e){return e.dataset.data[e.dataIndex]/Number(e.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?"rgba(0, 0, 0, 0.1)":"transparent"},borderRadius:15,padding:{top:6,bottom:6,left:8,right:8},formatter:(e,t)=>e/Number(t.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?e.toFixed(2):""}}},plugins:[O.Z],data:{labels:a.labels,datasets:r}})})});z.displayName="PieChart";let Z=(0,u.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,u.useMemo)(()=>{let e=l.reduce((e,t)=>e+t.data.length,0);return l.map(t=>{let{data:a,label:l,colors:r}=t;return{label:l,data:a,backgroundColor:r,borderColor:r,pointRadius:e>50?e>200?2:4:8,pointHoverRadius:e>50?4:8}})},[l]);return(0,h.jsx)(M.bp,{ref:t,options:{maintainAspectRatio:!1,scales:{x:{title:{display:!1},grid:{display:!1},ticks:{display:!0}},y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},elements:{point:{radius:0}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",position:"nearest",animation:{duration:0},backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(){return""},label:function(e){let t=e.dataset.label?"".concat(e.dataset.label,": "):"";return"".concat(t," X=").concat(e.parsed.x.toFixed(2),", Y=").concat(e.parsed.y.toFixed(2)," \n")}}}}},data:{labels:a.labels,datasets:r}})});Z.displayName="ScatterChart",C.kL.register(C.qi,C.uw,C.f$,C.ZL,C.Dx,C.u,C.De,C.ST,C.od,C.jn,C.FB);let E={bar:S,pie:z,line:F,scatter:Z};function A(e){let{item:t,formattedName:a}=e;return(0,h.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,h.jsx)("div",{className:"h-3 w-3 rounded-sm",style:{backgroundColor:t.color}}),a]})}function P(e){let{items:t,hideAxisLabels:a=!1,xLabel:l="",yLabel:s=""}=e,n=(0,m.Z)();function i(e,t){let a=t.indexOf(e);return a<t.length-2?"".concat(e.name,", "):a===t.length-2?"".concat(e.name).concat(t.length>2?", ":" "," ").concat(n.formatMessage({id:"Gt7UQw",defaultMessage:"and"})):e.name}return(0,h.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-1 px-4 text-xs text-token-text-primary",children:[!a&&(0,h.jsx)(p.Z,{id:"Wn04Wd",defaultMessage:"{yLabel} by {xLabel}",values:{xLabel:(0,h.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,h.jsx)(r.tZW,{className:"icon-sm text-token-text-secondary"}),l]}),yLabel:(0,h.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,h.jsx)(r.ucG,{className:"icon-sm text-token-text-secondary"}),s]})}}),t.length>1&&t.length<16&&(a?(0,h.jsx)(p.Z,{id:"WKJKdH",defaultMessage:"For {legendItems}",values:{legendItems:t.map((e,a)=>(0,h.jsx)(A,{item:e,formattedName:i(e,t)},a))}}):(0,h.jsx)(p.Z,{id:"Isulib",defaultMessage:"for {legendItems}",values:{legendItems:t.map((e,a)=>(0,h.jsx)(A,{item:e,formattedName:i(e,t)},a))}}))]})}let _=(0,u.forwardRef)((e,t)=>{let{chart:a}=e,l=(0,u.useRef)(null);(0,u.useImperativeHandle)(t,()=>({getBase64Image:()=>{if(!l.current){i.U.addError("Chart instance is not yet available.");return}return l.current.toBase64Image()}}));let r=(0,u.useCallback)(()=>{if("pie"!==a.chart_type)return a.datasets.map(e=>({name:e.label,color:Array.isArray(e.colors)?e.colors[0]:e.colors}));{let e=a.datasets[0].colors;if(e&&Array.isArray(e))return a.labels.map((t,a)=>{var l;return{name:t,color:null!==(l=e[a])&&void 0!==l?l:""}})}return[]},[a]);if(a.chart_type in E==!1)return(0,h.jsx)(p.Z,{id:"Chart.invalidChartType",defaultMessage:"Invalid chart type"});let s=E[a.chart_type];return(0,h.jsxs)("div",{className:"flex h-full w-full flex-col items-center",children:[(0,h.jsx)("div",{className:"w-full flex-initial",style:{flexBasis:"28px"},children:(0,h.jsx)(P,{xLabel:a.x_label,yLabel:a.y_label,items:r(),hideAxisLabels:"pie"===a.chart_type})}),(0,h.jsx)("div",{className:(0,o.default)("flex w-full flex-grow items-center justify-center px-4 pb-3"),style:{minHeight:"0"},children:(0,h.jsx)(s,{chart:a,ref:l})})]})});_.displayName="Chart";var D=a(92575),R=a(15777),V=a(72003);a(70387);var I=a(63217);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach(function(t){(0,l.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function W(e){let{table:t,height:a,width:l,isInFocusedView:r=!1,className:i=""}=e,{targetedContent:o,setTargetedContent:c}=(0,I.Q)(),{0:d,1:p}=(0,u.useState)([]),x=getComputedStyle(document.documentElement),f=(0,m.Z)();(0,u.useEffect)(()=>{t.columnNames.length>0&&p(t.columnNames.map((e,t)=>({id:"id:".concat(t),title:e,maxWidth:500})))},[t.columnNames]);let{0:g,1:y}=(0,u.useState)({columns:R.EV.empty(),rows:R.EV.empty()}),b=(0,u.useCallback)(function(e){let[a,l]=e,r=t.rows[l];return{kind:function(e){switch(e){case"number":return R.p6.Number;case"imageUrl":return R.p6.Image;default:return R.p6.Text}}(t.columnTypes[a]),data:r[a],allowOverlay:!0,readonly:!0,displayData:String(r[a]),allowWrapping:!0,contentAlignment:"left"}},[t.columnTypes,t.rows]),j=(0,u.useCallback)(e=>{if(e.columns.length>0){let a=e.columns.items.flatMap(e=>t.columnNames.slice(e[0],e[1]));s.A.logEvent(n.M.adaColumnTargeted);let l=a.length>1?f.formatMessage({id:"B+HlXu",defaultMessage:"{totalColumns} columns"},{totalColumns:a.length}):f.formatMessage({id:"KnFSJb",defaultMessage:'"{columnName}" column'},{columnName:a[0]});c({type:"object",label:l,isFocusedViewContent:r,createNewCompletionParams:e=>B(e,"The user has selected the columns:  ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),l)})}else if(e.rows.length>0){let a=e.rows.items.flatMap(e=>{let[t,a]=e,l=[];for(let e=t;e<a;e++)l.push(e);return l}),l=a.length>1?f.formatMessage({id:"vFstNk",defaultMessage:"{totalRows} rows"},{totalRows:a.length}):f.formatMessage({id:"43/z2q",defaultMessage:"#{rowIndex} row"},{rowIndex:a[0]+1});s.A.logEvent(n.M.adaRowTargeted),c({type:"object",label:l,isFocusedViewContent:r,createNewCompletionParams:e=>B(e,"The user has selected rows at the following indices: ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),l)})}else if(e.current){let a=e.current.range.x,l=e.current.range.y,i=e.current.range.x+e.current.range.width,o=e.current.range.y+e.current.range.height,d=(i-a)*(o-l),u="";1===d&&(u=t.rows[e.current.cell[1]][e.current.cell[0]]),s.A.logEvent(n.M.adaRangeTargeted);let m=d>1?f.formatMessage({id:"Ia9GsC",defaultMessage:"{totalCells} cells"},{totalCells:d}):f.formatMessage({id:"MEl4hN",defaultMessage:'"{cellContent}" cell'},{cellContent:u});c({type:"object",isFocusedViewContent:r,label:m,createNewCompletionParams:e=>B(e,"The user has selected a range at the iloc: ".concat(l,":").concat(o,", ").concat(a,":").concat(i," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),m)})}0===e.columns.length&&0===e.rows.length&&void 0===e.current&&c(void 0),y(e)},[t.columnNames,c,r,t.rows,f,t.name,t.sheetName]);(0,u.useEffect)(()=>{void 0===o&&y({columns:R.EV.empty(),rows:R.EV.empty()})},[o]);let w=(0,u.useCallback)(e=>{let a=t.rows[e];if(!a)return 44;let l=a.reduce((e,t)=>((null==e?void 0:e.length)||0)>((null==t?void 0:t.length)||0)?e:t),r=d[a.indexOf(l)],s=(null==r?void 0:r.width)||150,n=Math.ceil(l.length/(s/8));return 24+(n<4?n:4)*20},[t.rows,d]);(0,u.useEffect)(()=>{if(!document.getElementById("portal")){let e=document.createElement("div");e.id="portal",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.zIndex="9999",document.body.appendChild(e)}return()=>{let e=document.getElementById("portal");e&&document.body.removeChild(e)}},[]);let v=(0,u.useCallback)(()=>t.rows&&t.rows.length>999?10+10*String(t.rows.length).length:30,[t.rows]);return(0,h.jsx)(V.F,{getCellContent:b,columns:d,rows:t.rows.length,gridSelection:g,onGridSelectionChange:j,smoothScrollX:!0,smoothScrollY:!0,overscrollX:50,className:i,rowMarkers:"clickable-number",height:a,width:l,rowMarkerTheme:{bgCell:x.getPropertyValue("--main-surface-secondary").trim(),textLight:x.getPropertyValue("--text-primary").trim()},theme:{textDark:x.getPropertyValue("--text-primary").trim(),textMedium:x.getPropertyValue("--text-primary").trim(),textLight:x.getPropertyValue("--text-primary").trim(),textHeader:x.getPropertyValue("--text-primary").trim(),bgHeader:x.getPropertyValue("--main-surface-secondary").trim(),bgCell:x.getPropertyValue("--main-surface-primary").trim(),bgBubbleSelected:x.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHovered:x.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHasFocus:x.getPropertyValue("--main-surface-tertiary").trim(),accentColor:x.getPropertyValue("--selection").trim(),drilldownBorder:x.getPropertyValue("--selection").trim(),editorFontSize:"400 14px",baseFontStyle:"400 14px",markerFontStyle:"400 14px",headerFontStyle:"500 14px",fontFamily:"S\xf6hne",cellHorizontalPadding:12,cellVerticalPadding:10},rowMarkerWidth:v(),rowHeight:w,verticalBorder:!0,minColumnWidth:40,maxColumnWidth:500,onColumnResize:(e,t,a)=>{t>=40&&t<=500&&p(l=>{let r=[...l];return r[a]=T(T({},e),{},{width:t}),r})}})}function B(e,t,a){let l=(0,D.bm)(t);return T(T({},e),{},{messageMetadata:T(T({},e.messageMetadata),{},{targeted_reply:t,targeted_reply_label:a}),appendMessages:null==e.appendMessages?[l]:[...e.appendMessages,l]})}let H=["#FFAF00","#F46920","#F53255","#F857C1","#29BDFD","#00CBBF","#01C159","#9DCA1C"];var U=a(78239),G=a(58554),Q=a(71727),X=a(3395);let q=async e=>{if(null==e.image_url){i.U.addError("No image url provided for download");return}let t=(0,X.Iy)(e.image_url),a=await Q.Z.getFileDownloadLink(t);if(a.status===G.KF.Success){let e=await fetch(a.download_url),t=await e.blob();J(URL.createObjectURL(t),"output.png")}},J=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=document.createElement("a");a.href=e,t&&(a.download=t),a.click()};function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach(function(t){(0,l.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Y(e){let{visualization:t,expanded:a=!1}=e;return"chart"===t.type?null==t.fallback_image?(i.U.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?null==t.fallback_image?(i.U.addError("No fallback image message provided for fallback chart"),null):(0,h.jsx)(er,{visualization:t,expanded:a}):(0,h.jsx)(el,{visualization:t,expanded:a}):"table"===t.type?(0,h.jsx)(ee,{visualization:t,expanded:a}):(i.U.addError("Unsupported visualization type",t.type),null)}function ee(e){let t,{visualization:a,expanded:l}=e,r=(0,v.Ex)(),s=r&&!l,{isLoading:n,data:i,isError:o}=(0,U.CJ)(a),{0:c,1:d}=(0,u.useState)(),m=(0,u.useCallback)(()=>{i&&J(i.download_url)},[i]),{0:p,1:f}=(0,u.useState)(0),{0:g,1:y}=(0,u.useState)(0),b=(0,u.useRef)(null);if(i){if(Array.isArray(i.content)){var w;t=null!==(w=i.content.find(e=>e.name===c))&&void 0!==w?w:i.content[0]}else t=i.content}let k=()=>{b.current&&y(b.current.offsetWidth)};return((0,u.useEffect)(()=>(k(),window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)),[]),(0,u.useEffect)(()=>{let e=()=>{f(window.innerHeight-48)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o)?(0,h.jsx)(ei,{fileName:a.title}):(0,h.jsx)(es,{ref:b,focusObject:{type:N.zG.ADAVisualization,visualization:a},title:(0,h.jsxs)(h.Fragment,{children:[a.title,!s&&Array.isArray(null==i?void 0:i.content)&&(0,h.jsxs)(j.Z.Root,{defaultValue:c,onValueChange:e=>{d(e)},children:[(0,h.jsxs)(j.Z.Trigger,{className:"m-0 h-6 bg-transparent p-1 text-xs font-medium",children:[null!=c?c:i.content[0].name,(0,h.jsx)(j.Z.Icon,{})]}),(0,h.jsx)(j.Z.Portal,{children:(0,h.jsx)(j.Z.Content,{children:i.content.map(e=>{var t;return(0,h.jsx)(j.Z.Item,{className:"text-xs font-medium",value:null!==(t=e.name)&&void 0!==t?t:"",children:e.name},e.name)})})})]})]}),onDownload:m,expanded:l,children:n||null==t?(0,h.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,h.jsx)(x.Z,{})}):(0,h.jsx)("div",{className:"border-t border-token-border-light",children:(0,h.jsx)(W,{table:$($({},t),{},{name:a.title,sheetName:c}),height:l?p:300,width:g,isInFocusedView:r})})})}function et(e){let{chartData:t,setChartData:a,showStatic:l,setShowStatic:s}=e,n=(0,m.Z)();return(0,h.jsxs)(g.Z.Root,{children:[(0,h.jsx)(g.Z.Trigger,{className:"h-5 px-0 hover:bg-transparent",asChild:!0,children:(0,h.jsx)("button",{children:(0,h.jsx)(r.KAl,{className:(0,o.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,h.jsx)(g.Z.Portal,{children:(0,h.jsxs)(g.Z.Content,{className:"flex min-w-48 max-w-xs flex-col px-0 py-1",sideOffset:7,children:[t&&t.datasets.length<16&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",children:(0,h.jsx)(p.Z,{id:"yYiKvS",defaultMessage:"Colors"})}),(0,h.jsx)("div",{className:"flex max-h-36 flex-col overflow-auto",children:"pie"===t.chart_type?(0,h.jsx)(eo,{chartData:t,setChartData:a}):(0,h.jsx)(ec,{chartData:t,setChartData:a})})]}),(0,h.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",children:(0,h.jsx)(p.Z,{id:"fHx6dk",defaultMessage:"Type"})}),(0,h.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,h.jsx)("span",{className:"text-sm",children:l?(0,h.jsx)(p.Z,{id:"NoxJhh",defaultMessage:"Legacy (static)"}):(0,h.jsx)(p.Z,{id:"UbQJxs",defaultMessage:"Interactive"})}),(0,h.jsx)(f.Z,{onChange:()=>{s(!l)},enabled:!l,label:n.formatMessage({id:"UbQJxs",defaultMessage:"Interactive"}),withLockIcon:!0,lockIconOverride:l?(0,h.jsx)(r.aoh,{className:"icon-xs text-token-text-tertiary"}):(0,h.jsx)(r.D2w,{className:"icon-xs text-brand-green-800"})})]})]})})]})}function ea(e){let{showStatic:t,setShowStatic:a}=e;return(0,h.jsx)(w.u,{side:"top",sideOffset:4,label:t?(0,h.jsx)(p.Z,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):(0,h.jsx)(p.Z,{id:"XZ3Wm8",defaultMessage:"Switch to legacy chart"}),children:(0,h.jsx)("button",{className:"flex",onClick:()=>{a(!t)},children:t?(0,h.jsx)(r.aoh,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):(0,h.jsx)(r.D2w,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function el(e){let{visualization:t,expanded:a}=e,{isLoading:l,data:r,isError:s}=(0,U.VX)(t),n=(0,u.useRef)(null),{0:i,1:o}=(0,u.useState)(!1),c=(0,u.useCallback)(async()=>{if(i&&t.fallback_image)await q(t.fallback_image);else if(n.current){let e=n.current.getBase64Image();e&&J(e,"".concat(t.title,".png"))}},[t.fallback_image,i,n,t.title]),{0:d,1:m}=(0,u.useState)(void 0);return((0,u.useEffect)(()=>{if(r&&r.content!==d){let{chart_type:e,datasets:t}=r.content,a=r.content;a.datasets=t.map((t,a)=>{let l=eu(e,t,a);return $($({},t),{},{colors:l})}),m(a)}},[d,r]),s)?(0,h.jsx)(ei,{fileName:t.title}):(0,h.jsx)(es,{focusObject:{type:N.zG.ADAVisualization,visualization:t},title:t.title,onDownload:c,additionalActions:[(0,h.jsx)(ea,{showStatic:i,setShowStatic:o},0),(0,h.jsx)(et,{chartData:d,setChartData:m,showStatic:i,setShowStatic:o},1)],expanded:a,children:l||null==d?(0,h.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,h.jsx)(x.Z,{})}):i&&t.fallback_image?(0,h.jsx)(k.Z,{jupyterMessage:t.fallback_image}):(0,h.jsx)(_,{ref:n,chart:d})})}function er(e){let{visualization:t,expanded:a}=e,{0:l,1:s}=(0,u.useState)(!1),n=(0,u.useCallback)(async()=>{t.fallback_image&&await q(t.fallback_image)},[t.fallback_image]);return null==t.fallback_image?null:(0,h.jsx)(es,{focusObject:{type:N.zG.ADAVisualization,visualization:t},title:t.title,onDownload:n,expanded:a,children:(0,h.jsx)("div",{className:"h-full w-full",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:(0,h.jsxs)("div",{className:(0,o.default)("relative flex h-full cursor-pointer",!a&&"w-full"),children:[(0,h.jsx)(k.Z,{jupyterMessage:t.fallback_image}),(0,h.jsx)(c.M,{children:l&&(0,h.jsxs)(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute bottom-2 right-2 flex items-center justify-center rounded-md border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-xs text-token-text-secondary",children:[(0,h.jsx)(r.D2w,{className:"icon-md mr-2"}),(0,h.jsx)(p.Z,{id:"ILz2tL",defaultMessage:"Interactive charts of this type not yet supported"})]})})]})})})}let es=u.forwardRef((e,t)=>{let{focusObject:a,title:l="",onDownload:s=()=>{},additionalActions:n=[],expanded:i=!1,children:c}=e,u=(0,v.Ex)(),m=(0,N.rE)(),x=m&&m.type===N.zG.ADAVisualization&&m.type===a.type&&m.visualization.file_id===a.visualization.file_id&&a.visualization.title===m.visualization.title,f=a.visualization.type;return u&&!i?(0,h.jsx)(en,{focusObject:a,title:l,type:f,isFocused:null!=x&&x}):(0,h.jsxs)(d.E.div,$($({className:(0,o.default)("relative overflow-hidden text-token-text-primary",!i&&"rounded-2xl border"),ref:t},v.ee),{},{children:[(0,h.jsxs)("div",{className:(0,o.default)("flex justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[(0,h.jsx)("span",{className:"flex-grow truncate font-medium capitalize",children:l}),(0,h.jsxs)("div",{className:"flex items-center gap-3",children:[n.map((e,t)=>(0,h.jsx)("div",{className:"flex p-0",children:e},t)),s&&(0,h.jsx)(w.u,{side:"top",sideOffset:4,label:(0,h.jsx)(p.Z,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:f}}),children:(0,h.jsx)("button",{onClick:s,className:"flex items-center text-xs",children:(0,h.jsx)(r._8t,{className:(0,o.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,h.jsx)(w.u,{side:"top",sideOffset:4,label:x?(0,h.jsx)(p.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:f}}):(0,h.jsx)(p.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:f}}),children:(0,h.jsx)("button",{onClick:()=>{ed(null!=x&&x,a)},className:"flex items-center text-xs",children:x?(0,h.jsx)(r.W5x,{className:(0,o.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")}):(0,h.jsx)(r.Qq,{className:(0,o.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]})]}),(0,h.jsx)("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:i?"calc(100vh - 48px)":"".concat("table"===f?300:350,"px")},children:c})]}))});function en(e){let{focusObject:t,title:a="",type:l,isFocused:s}=e,{0:n,1:i}=(0,u.useState)(!1),c="chart"===l?r.X5Q:r.tXQ;return(0,h.jsx)(d.E.div,$($({className:(0,o.default)("relative w-52 cursor-pointer overflow-hidden rounded-2xl border",s&&"border-blue-selection/[.3]",s||n?"text-token-text-primary":"text-token-text-secondary"),onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},onClick:()=>{ed(s,t)}},v.ee),{},{children:(0,h.jsxs)("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[(0,h.jsxs)("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-medium capitalize",children:[(0,h.jsx)(c,{className:(0,o.default)("icon-lg flex-shrink-0",s||n?"text-brand-green-800":"text-token-text-quaternary")}),(0,h.jsx)("span",{className:"flex-grow truncate",children:a})]}),n&&(0,h.jsx)("div",{className:"flex items-center gap-2",children:(0,h.jsx)(w.u,{side:"top",sideOffset:4,label:s?(0,h.jsx)(p.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:l}}):(0,h.jsx)(p.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:l}}),children:s?(0,h.jsx)(r.W5x,{className:"icon-md icon-md text-token-text-secondary"}):(0,h.jsx)(r.Qq,{className:(0,o.default)("icon-md text-token-text-secondary")})})})]})}))}function ei(e){let{fileName:t=""}=e;return(0,h.jsx)("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:(0,h.jsxs)("div",{className:"my-0 flex items-center justify-between font-light",children:[(0,h.jsx)("div",{className:"flex items-center gap-2",children:(0,h.jsx)("p",{className:"m-0 p-0 text-lg font-medium capitalize",children:t})}),(0,h.jsx)("span",{className:"text-sm text-red-600",children:(0,h.jsx)(p.Z,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}function eo(e){let{chartData:t,setChartData:a}=e,l=t.datasets[0].colors?[...t.datasets[0].colors]:[...H];return(0,h.jsx)(h.Fragment,{children:t.labels.map((e,r)=>(0,h.jsx)(y,{label:e,colorList:H,color:l[r],onColorUpdate:e=>{Array.isArray(l)?l[r]=e:l=[e],t.datasets[0].colors=l,a($({},t))}},r))})}function ec(e){let{chartData:t,setChartData:a}=e;return(0,h.jsx)(h.Fragment,{children:t.datasets.map((e,l)=>(0,h.jsx)(y,{label:e.label,colorList:H,color:e.colors?Array.isArray(e.colors)?e.colors[0]:e.colors:"",onColorUpdate:l=>{e.colors=[l],a($({},t))}},l))})}es.displayName="ADAVisualizationWrapper";let ed=(e,t)=>{s.A.logEvent(n.M.adaFocusModeToggled),e?N.RT.close():N.RT.setFocusedObject(t)},eu=(e,t,a)=>{let l;let{colors:r}=t;return Array.isArray(l=r&&r.length>0?r:"pie"==e?t.data.map((e,t)=>H[t%H.length]):H[a])?l:[l]}}}]);
//# sourceMappingURL=4534.44689b004fe543f0.js.map