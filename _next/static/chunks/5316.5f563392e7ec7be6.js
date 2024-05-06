"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5316],{25316:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var l=a(72438),r=a(58554),n=a(29030),s=a(71727),i=a(53265),o=a(52866),c=a(86705),d=a(19841),u=a(37609),m=a(83737),p=a(70079),x=a(84692),f=a(9063),g=a(59311),h=a(53238),y=a(31731),b=a(75967),j=a(46),w=a(3395),v=a(92319),k=a(5281),C=a(14652),N=a(65998);a(30303);var M=a(25771),F=a(35250);let O=(0,p.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,p.useMemo)(()=>l.map(e=>{let{data:t,label:a,colors:l}=e;return{label:a,data:t,backgroundColor:l,borderColor:l,borderRadius:4}}),[l]);return(0,F.jsx)(M.$Q,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,animation:{duration:0},mode:"point",position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:6,left:16,right:16},yAlign:"bottom",callbacks:{title:function(e){return e[0].formattedValue},label:()=>""}}},scales:{x:{title:{display:!1},grid:{display:!1},ticks:{display:!0,autoSkip:!1}},y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}}},data:{labels:a.labels,datasets:r}})});O.displayName="BarChart";let z=(0,p.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,p.useMemo)(()=>{let e=l.length;return l.map(t=>{let{data:a,label:l,colors:r}=t;return{label:l,data:a,backgroundColor:r,borderColor:r,pointRadius:0,pointHoverRadius:5,pointHitRadius:10,tension:.2,borderWidth:e>10?e>50?.5:1:3,pointBackgroundColor:["rgba(255, 255, 255, 1)"],pointBorderWidth:3,pointHoverBorderWidth:3}})},[l]);return(0,F.jsx)(M.x1,{ref:t,options:{maintainAspectRatio:!1,scales:{x:{title:{display:!1,text:a.x_label},grid:{display:!1},ticks:{display:!0}},y:{title:{display:!1,text:a.y_label},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",animation:{duration:0},position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(e){return e[0].label},label:function(e){let{dataset:{label:t},parsed:{y:a}}=e;return"".concat(t?"".concat(t,": "):"").concat(a.toFixed(2))}}}}},data:{labels:a.labels,datasets:r}})});z.displayName="LineChart";var S=a(36241);let A=(0,p.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,p.useMemo)(()=>{let e=getComputedStyle(document.documentElement);return l.map(t=>{let{data:a,colors:l,label:r}=t;return{label:r,data:a,backgroundColor:l,borderWidth:2,borderColor:[e.getPropertyValue("--main-surface-primary").trim()]}})},[l]);return(0,F.jsx)("div",{className:"h-full w-full py-2",children:(0,F.jsx)(M.by,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!0,animation:{duration:0},mode:"index",position:"average",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:e=>e[0].formattedValue,label:function(e){let t=a.labels[e.dataIndex],r=l[0],n=parseFloat((r.data[e.dataIndex]/Number(r.data.reduce((e,t)=>Number(e)+Number(t),0))*100).toFixed(2));return"".concat(t," \xb7 ").concat(n,"%")}}},datalabels:{color:"white",textAlign:"center",font:{family:"S\xf6hne",weight:"bold",size:16},backgroundColor:function(e){return e.dataset.data[e.dataIndex]/Number(e.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?"rgba(0, 0, 0, 0.1)":"transparent"},borderRadius:15,padding:{top:6,bottom:6,left:8,right:8},formatter:(e,t)=>e/Number(t.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?e.toFixed(2):""}}},plugins:[S.Z],data:{labels:a.labels,datasets:r}})})});A.displayName="PieChart";let E=(0,p.forwardRef)((e,t)=>{let{chart:a}=e,{datasets:l}=a,r=(0,p.useMemo)(()=>{let e=l.reduce((e,t)=>e+t.data.length,0);return l.map(t=>{let{data:a,label:l,colors:r}=t;return{label:l,data:a,backgroundColor:r,borderColor:r,pointRadius:e>50?e>200?2:4:8,pointHoverRadius:e>50?4:8}})},[l]);return(0,F.jsx)(M.bp,{ref:t,options:{maintainAspectRatio:!1,scales:{x:{title:{display:!1},grid:{display:!1},ticks:{display:!0}},y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},elements:{point:{radius:0}},plugins:{legend:{display:!1},title:{display:!1,text:a.title},tooltip:{enabled:!0,mode:"point",position:"nearest",animation:{duration:0},backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{family:"S\xf6hne",size:16,weight:"bold"},bodyFont:{family:"S\xf6hne",size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(){return""},label:function(e){let t=e.dataset.label?"".concat(e.dataset.label,": "):"";return"".concat(t," X=").concat(e.parsed.x.toFixed(2),", Y=").concat(e.parsed.y.toFixed(2)," \n")}}}}},data:{labels:a.labels,datasets:r}})});E.displayName="ScatterChart",N.kL.register(N.qi,N.uw,N.f$,N.ZL,N.Dx,N.u,N.De,N.ST,N.od,N.jn,N.FB);let Z={bar:O,pie:A,line:z,scatter:E};function P(e){let{item:t,formattedName:a}=e;return(0,F.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,F.jsx)("div",{className:"h-3 w-3 rounded-sm",style:{backgroundColor:t.color}}),a]})}function _(e){let{items:t,hideAxisLabels:a=!1,xLabel:l="",yLabel:r=""}=e,s=(0,f.Z)();function i(e,t){let a=t.indexOf(e);return a<t.length-2?"".concat(e.name,", "):a===t.length-2?"".concat(e.name).concat(t.length>2?", ":" "," ").concat(s.formatMessage({id:"Gt7UQw",defaultMessage:"and"})):e.name}return(0,F.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-1 px-4 text-xs text-token-text-primary",children:[!a&&(0,F.jsx)(x.Z,{id:"Wn04Wd",defaultMessage:"{yLabel} by {xLabel}",values:{xLabel:(0,F.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,F.jsx)(n.tZW,{className:"icon-sm text-token-text-secondary"}),l]}),yLabel:(0,F.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,F.jsx)(n.ucG,{className:"icon-sm text-token-text-secondary"}),r]})}}),t.length>1&&t.length<16&&(a?(0,F.jsx)(x.Z,{id:"WKJKdH",defaultMessage:"For {legendItems}",values:{legendItems:t.map((e,a)=>(0,F.jsx)(P,{item:e,formattedName:i(e,t)},a))}}):(0,F.jsx)(x.Z,{id:"Isulib",defaultMessage:"for {legendItems}",values:{legendItems:t.map((e,a)=>(0,F.jsx)(P,{item:e,formattedName:i(e,t)},a))}}))]})}let R=(0,p.forwardRef)((e,t)=>{let{chart:a}=e,l=(0,p.useRef)(null);(0,p.useImperativeHandle)(t,()=>({getBase64Image:()=>{if(!l.current){c.U.addError("Chart instance is not yet available.");return}return l.current.toBase64Image()}}));let r=(0,p.useCallback)(()=>{if("pie"!==a.chart_type)return a.datasets.map(e=>({name:e.label,color:Array.isArray(e.colors)?e.colors[0]:e.colors}));{let e=a.datasets[0].colors;if(e&&Array.isArray(e))return a.labels.map((t,a)=>{var l;return{name:t,color:null!==(l=e[a])&&void 0!==l?l:""}})}return[]},[a]);if(a.chart_type in Z==!1)return(0,F.jsx)(x.Z,{id:"Chart.invalidChartType",defaultMessage:"Invalid chart type"});let n=Z[a.chart_type];return(0,F.jsxs)("div",{className:"flex h-full w-full flex-col items-center",children:[(0,F.jsx)("div",{className:"w-full flex-initial",style:{flexBasis:"28px"},children:(0,F.jsx)(_,{xLabel:a.x_label,yLabel:a.y_label,items:r(),hideAxisLabels:"pie"===a.chart_type})}),(0,F.jsx)("div",{className:(0,d.default)("flex w-full flex-grow items-center justify-center px-4 pb-3"),style:{minHeight:"0"},children:(0,F.jsx)(n,{chart:a,ref:l})})]})});R.displayName="Chart";var V=a(92575),D=a(15777),I=a(72003);a(70387);var L=a(63217);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach(function(t){(0,l.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function H(e){let{table:t,height:a,width:l,isInFocusedView:r=!1,className:n=""}=e,{targetedContent:s,setTargetedContent:c}=(0,L.Q)(),{0:d,1:u}=(0,p.useState)([]),m=getComputedStyle(document.documentElement),x=(0,f.Z)();(0,p.useEffect)(()=>{t.columnNames.length>0&&u(t.columnNames.map((e,t)=>({id:"id:".concat(t),title:e,maxWidth:500})))},[t.columnNames]);let{0:g,1:h}=(0,p.useState)({columns:D.EV.empty(),rows:D.EV.empty()}),y=(0,p.useCallback)(function(e){let[a,l]=e,r=t.rows[l];return{kind:function(e){switch(e){case"number":return D.p6.Number;case"imageUrl":return D.p6.Image;default:return D.p6.Text}}(t.columnTypes[a]),data:r[a],allowOverlay:!0,readonly:!0,displayData:String(r[a]),allowWrapping:!0,contentAlignment:"left"}},[t.columnTypes,t.rows]),b=(0,p.useCallback)(e=>{if(e.columns.length>0){let a=e.columns.items.flatMap(e=>t.columnNames.slice(e[0],e[1]));i.A.logEvent(o.M.adaColumnTargeted);let l=a.length>1?x.formatMessage({id:"B+HlXu",defaultMessage:"{totalColumns} columns"},{totalColumns:a.length}):x.formatMessage({id:"KnFSJb",defaultMessage:'"{columnName}" column'},{columnName:a[0]});c({type:"object",label:l,isFocusedViewContent:r,createNewCompletionParams:e=>W(e,"The user has selected the columns:  ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),l)})}else if(e.rows.length>0){let a=e.rows.items.flatMap(e=>{let[t,a]=e,l=[];for(let e=t;e<a;e++)l.push(e);return l}),l=a.length>1?x.formatMessage({id:"vFstNk",defaultMessage:"{totalRows} rows"},{totalRows:a.length}):x.formatMessage({id:"43/z2q",defaultMessage:"#{rowIndex} row"},{rowIndex:a[0]+1});i.A.logEvent(o.M.adaRowTargeted),c({type:"object",label:l,isFocusedViewContent:r,createNewCompletionParams:e=>W(e,"The user has selected rows at the following indices: ".concat(a.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),l)})}else if(e.current){let a=e.current.range.x,l=e.current.range.y,n=e.current.range.x+e.current.range.width,s=e.current.range.y+e.current.range.height,d=(n-a)*(s-l),u="";1===d&&(u=t.rows[e.current.cell[1]][e.current.cell[0]]),i.A.logEvent(o.M.adaRangeTargeted);let m=d>1?x.formatMessage({id:"Ia9GsC",defaultMessage:"{totalCells} cells"},{totalCells:d}):x.formatMessage({id:"MEl4hN",defaultMessage:'"{cellContent}" cell'},{cellContent:u});c({type:"object",isFocusedViewContent:r,label:m,createNewCompletionParams:e=>W(e,"The user has selected a range at the iloc: ".concat(l,":").concat(s,", ").concat(a,":").concat(n," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),m)})}0===e.columns.length&&0===e.rows.length&&void 0===e.current&&c(void 0),h(e)},[t.columnNames,c,r,t.rows,x,t.name,t.sheetName]);(0,p.useEffect)(()=>{void 0===s&&h({columns:D.EV.empty(),rows:D.EV.empty()})},[s]);let j=(0,p.useCallback)(e=>{let a=t.rows[e];if(!a)return 44;let l=a.reduce((e,t)=>((null==e?void 0:e.length)||0)>((null==t?void 0:t.length)||0)?e:t),r=d[a.indexOf(l)],n=(null==r?void 0:r.width)||150,s=Math.ceil(l.length/(n/8));return 24+(s<4?s:4)*20},[t.rows,d]);(0,p.useEffect)(()=>{if(!document.getElementById("portal")){let e=document.createElement("div");e.id="portal",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.zIndex="9999",document.body.appendChild(e)}return()=>{let e=document.getElementById("portal");e&&document.body.removeChild(e)}},[]);let w=(0,p.useCallback)(()=>t.rows&&t.rows.length>999?10+10*String(t.rows.length).length:30,[t.rows]);return(0,F.jsx)(I.F,{getCellContent:y,columns:d,rows:t.rows.length,gridSelection:g,onGridSelectionChange:b,smoothScrollX:!0,smoothScrollY:!0,overscrollX:50,className:n,rowMarkers:"clickable-number",height:a,width:l,rowMarkerTheme:{bgCell:m.getPropertyValue("--main-surface-secondary").trim(),textLight:m.getPropertyValue("--text-primary").trim()},theme:{textDark:m.getPropertyValue("--text-primary").trim(),textMedium:m.getPropertyValue("--text-primary").trim(),textLight:m.getPropertyValue("--text-primary").trim(),textHeader:m.getPropertyValue("--text-primary").trim(),bgHeader:m.getPropertyValue("--main-surface-secondary").trim(),bgCell:m.getPropertyValue("--main-surface-primary").trim(),bgBubbleSelected:m.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHovered:m.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHasFocus:m.getPropertyValue("--main-surface-tertiary").trim(),accentColor:m.getPropertyValue("--selection").trim(),drilldownBorder:m.getPropertyValue("--selection").trim(),editorFontSize:"400 14px",baseFontStyle:"400 14px",markerFontStyle:"400 14px",headerFontStyle:"500 14px",fontFamily:"S\xf6hne",cellHorizontalPadding:12,cellVerticalPadding:10},rowMarkerWidth:w(),rowHeight:j,verticalBorder:!0,minColumnWidth:10,maxColumnWidth:500,onColumnResize:(e,t,a)=>{t>=10&&t<=500&&u(l=>{let r=[...l];return r[a]=B(B({},e),{},{width:t}),r})}})}function W(e,t,a){let l=(0,V.bm)(t);return B(B({},e),{},{messageMetadata:B(B({},e.messageMetadata),{},{targeted_reply:t,targeted_reply_label:a}),appendMessages:null==e.appendMessages?[l]:[...e.appendMessages,l]})}let U=["#FFAF00","#F46920","#F53255","#F857C1","#29BDFD","#00CBBF","#01C159","#9DCA1C"];var G=a(78239);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,l)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach(function(t){(0,l.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function q(e){let{visualization:t,expanded:a=!1}=e;return"chart"===t.type?null==t.fallback_image?(c.U.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?null==t.fallback_image?(c.U.addError("No fallback image message provided for fallback chart"),null):(0,F.jsx)(en,{visualization:t,expanded:a}):(0,F.jsx)(er,{visualization:t,expanded:a}):"table"===t.type?(0,F.jsx)($,{visualization:t,expanded:a}):(c.U.addError("Unsupported visualization type",t.type),null)}let J=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=document.createElement("a");a.href=e,t&&(a.download=t),a.click()},K=async e=>{if(null==e.image_url){c.U.addError("No image url provided for download");return}let t=(0,w.Iy)(e.image_url),a=await s.Z.getFileDownloadLink(t);if(a.status===r.KF.Success){let e=await fetch(a.download_url),t=await e.blob();J(URL.createObjectURL(t),"output.png")}};function $(e){let t,{visualization:a,expanded:l}=e,r=(0,v.Ex)(),n=r&&!l,{isLoading:s,data:i,isError:o}=(0,G.CJ)(a),{0:c,1:d}=(0,p.useState)(),u=(0,p.useCallback)(()=>{i&&J(i.download_url)},[i]),{0:m,1:x}=(0,p.useState)(0),{0:f,1:h}=(0,p.useState)(0),y=(0,p.useRef)(null);if(i){if(Array.isArray(i.content)){var j;t=null!==(j=i.content.find(e=>e.name==c))&&void 0!==j?j:i.content[0]}else t=i.content}let w=()=>{y.current&&h(y.current.offsetWidth)};return((0,p.useEffect)(()=>(w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)),[]),(0,p.useEffect)(()=>{let e=()=>{x(window.innerHeight-48)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),o)?(0,F.jsx)(Y,{fileName:a.title}):(0,F.jsx)("div",{className:"w-full",ref:y,children:(0,F.jsx)(es,{focusObject:{type:k.zG.ADAVisualization,visualization:a},title:(0,F.jsxs)(F.Fragment,{children:[a.title,!n&&Array.isArray(null==i?void 0:i.content)&&(0,F.jsxs)(b.Z.Root,{defaultValue:c,onValueChange:e=>{d(e)},children:[(0,F.jsxs)(b.Z.Trigger,{className:"m-0 h-6 bg-transparent p-1 text-xs font-medium",children:[null!=c?c:i.content[0].name,(0,F.jsx)(b.Z.Icon,{})]}),(0,F.jsx)(b.Z.Portal,{children:(0,F.jsx)(b.Z.Content,{children:i.content.map(e=>{var t;return(0,F.jsx)(b.Z.Item,{className:"text-xs font-medium",value:null!==(t=e.name)&&void 0!==t?t:"",children:e.name},e.name)})})})]})]}),onDownload:u,expanded:l,children:s||null==t?(0,F.jsx)(g.Z,{}):(0,F.jsx)("div",{className:"border-t border-token-border-light",children:(0,F.jsx)(H,{table:X(X({},t),{},{name:a.title,sheetName:c}),height:l?m:300,width:f,isInFocusedView:r})})})})}function Y(e){let{fileName:t=""}=e;return(0,F.jsx)("div",{className:"w-full rounded-xl border border-red-600 p-3",children:(0,F.jsxs)("div",{className:"my-0 flex items-center justify-between font-light",children:[(0,F.jsx)("div",{className:"flex items-center gap-2",children:(0,F.jsx)("p",{className:"m-0 p-0 text-lg font-medium capitalize",children:t})}),(0,F.jsx)("span",{className:"text-sm text-red-600",children:(0,F.jsx)(x.Z,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}function ee(e){let{currentColor:t,onUpdate:a}=e,{0:l,1:r}=(0,p.useState)(null!=t?t:""),s=(0,f.Z)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"flex w-[120px] flex-wrap gap-2",children:U.map((e,l)=>(0,F.jsx)("button",{onClick:()=>{r(e),a(e)},className:(0,d.default)("flex h-6 w-6 items-center justify-center rounded-md"),style:{backgroundColor:e},children:t===e&&(0,F.jsx)(n.$As,{className:"text-white"})},l))}),(0,F.jsxs)("div",{className:"flex h-6 rounded-md border border-token-border-light",children:[(0,F.jsx)("div",{className:"flex w-6 items-center justify-center bg-gray-200 px-2 py-1 text-sm text-gray-500",children:"#"}),(0,F.jsx)("input",{className:(0,d.default)("w-16 flex-1 rounded-r-md  border-0 p-2 text-xs uppercase leading-6 outline-none"),placeholder:s.formatMessage({id:"3xKVHs",defaultMessage:"F1B023"}),value:l.slice(1),onChange:e=>{let t="#".concat(e.target.value);r(t),/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(t)&&a(t)}})]})]})}function et(e){let{label:t,color:a,onColorUpdate:l}=e;return(0,F.jsxs)(y.Z.Root,{children:[(0,F.jsx)(y.Z.Trigger,{asChild:!0,children:(0,F.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,F.jsx)("span",{className:"max-w-28 truncate text-sm",children:t||(0,F.jsx)(x.Z,{id:"Tgu2IU",defaultMessage:"Dataset"})}),(0,F.jsxs)("div",{className:"flex gap-1",children:[(0,F.jsx)("div",{className:"h-4 w-4 rounded-sm",style:{backgroundColor:a}}),(0,F.jsx)(n.ob9,{className:"icon-sm"})]})]})}),(0,F.jsx)(y.Z.Portal,{children:(0,F.jsx)(y.Z.Content,{className:"flex flex-col gap-4 p-4 align-middle",sideOffset:7,side:"right",children:(0,F.jsx)(ee,{currentColor:a,onUpdate:l})})})]})}function ea(e){let{chartData:t,setChartData:a}=e,l=t.datasets[0].colors?[...t.datasets[0].colors]:[...U];return(0,F.jsx)(F.Fragment,{children:t.labels.map((e,r)=>(0,F.jsx)(et,{label:e,color:l[r],onColorUpdate:e=>{Array.isArray(l)?l[r]=e:l=[e],t.datasets[0].colors=l,a(X({},t))}},r))})}function el(e){let{chartData:t,setChartData:a}=e;return(0,F.jsx)(F.Fragment,{children:t.datasets.map((e,l)=>(0,F.jsx)(et,{label:e.label,color:e.colors?Array.isArray(e.colors)?e.colors[0]:e.colors:"",onColorUpdate:l=>{e.colors=[l],a(X({},t))}},l))})}function er(e){let{visualization:t,expanded:a}=e,{isLoading:l,data:r,isError:s}=(0,G.VX)(t),i=(0,p.useRef)(null),{0:o,1:c}=(0,p.useState)(!1),d=(0,p.useCallback)(async()=>{if(o&&t.fallback_image)await K(t.fallback_image);else if(i.current){let e=i.current.getBase64Image();e&&J(e,"".concat(t.title,".png"))}},[t.fallback_image,o,i,t.title]),{0:u,1:m}=(0,p.useState)(void 0),y=(0,f.Z)();return((0,p.useEffect)(()=>{if(r&&r.content!==u){let e=r.content;e.datasets=r.content.datasets.map((e,t)=>{let a=[];return a="pie"===r.content.chart_type?e.colors&&e.colors.length>0?Array.isArray(e.colors)?e.colors:[e.colors]:e.data.map((e,t)=>U[t%U.length]):e.colors&&e.colors.length>0?Array.isArray(e.colors)?e.colors:[e.colors]:[U[t%U.length]],e.colors=a,e}),m(e)}},[u,r]),s)?(0,F.jsx)(Y,{fileName:t.title}):(0,F.jsx)(es,{focusObject:{type:k.zG.ADAVisualization,visualization:t},title:t.title,onDownload:d,settingsDropdownContent:(0,F.jsxs)(F.Fragment,{children:[u&&u.datasets.length<16&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",children:(0,F.jsx)(x.Z,{id:"yYiKvS",defaultMessage:"Colors"})}),"pie"===u.chart_type?(0,F.jsx)(ea,{chartData:u,setChartData:m}):(0,F.jsx)(el,{chartData:u,setChartData:m})]}),(0,F.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",children:(0,F.jsx)(x.Z,{id:"fHx6dk",defaultMessage:"Type"})}),(0,F.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,F.jsx)("span",{className:"text-sm",children:o?(0,F.jsx)(x.Z,{id:"NoxJhh",defaultMessage:"Legacy (static)"}):(0,F.jsx)(x.Z,{id:"UbQJxs",defaultMessage:"Interactive"})}),(0,F.jsx)(h.Z,{onChange:()=>{c(!o)},enabled:!o,label:y.formatMessage({id:"UbQJxs",defaultMessage:"Interactive"}),withLockIcon:!0,lockIconOverride:o?(0,F.jsx)(n.ets,{className:"icon-xs text-token-text-tertiary"}):(0,F.jsx)(n.D2w,{className:"icon-xs text-brand-green-800"})})]})]}),expanded:a,children:l||null==u?(0,F.jsx)(g.Z,{}):o&&t.fallback_image?(0,F.jsx)(C.Z,{jupyterMessage:t.fallback_image}):(0,F.jsx)(R,{ref:i,chart:u})})}function en(e){let{visualization:t,expanded:a}=e,{0:l,1:r}=(0,p.useState)(!1),s=(0,p.useCallback)(async()=>{t.fallback_image&&await K(t.fallback_image)},[t.fallback_image]);return null==t.fallback_image?null:(0,F.jsx)(es,{focusObject:{type:k.zG.ADAVisualization,visualization:t},title:t.title,onDownload:s,expanded:a,children:(0,F.jsx)("div",{className:"h-full w-full",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:(0,F.jsxs)("div",{className:(0,d.default)("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[(0,F.jsx)(C.Z,{jupyterMessage:t.fallback_image}),(0,F.jsx)(u.M,{children:l&&(0,F.jsxs)(m.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute bottom-2 right-2 flex items-center justify-center rounded-md border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-xs  text-token-text-secondary",children:[(0,F.jsx)(n.D2w,{className:"icon-md mr-2"}),(0,F.jsx)(x.Z,{id:"ILz2tL",defaultMessage:"Interactive charts of this type not yet supported"})]})})]})})})}function es(e){let{focusObject:t,title:a="",onDownload:l,settingsDropdownContent:r,expanded:s=!1,children:c}=e,u=(0,v.Ex)()&&!s,f=(0,k.rE)(),g=f&&f.type===k.zG.ADAVisualization&&f.type===t.type&&f.visualization.file_id===t.visualization.file_id&&t.visualization.title===f.visualization.title,{0:h,1:b}=(0,p.useState)(!1),w=(0,p.useCallback)(()=>{i.A.logEvent(o.M.adaFocusModeToggled),g?k.RT.close():k.RT.setFocusedObject(t)},[g,t]),C=t.visualization.type,N="chart"===C?n.X5Q:n.tXQ;return(0,F.jsxs)(m.E.div,X(X({className:(0,d.default)("relative overflow-hidden",!s&&"rounded-xl border",u?"w-52 cursor-pointer":"w-full",u&&g&&"border-blue-selection/[.3]",u?g||h?"text-token-text-primary":"text-token-text-secondary":"text-token-text-primary"),onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},onClick:()=>{u&&w()}},v.ee),{},{children:[(0,F.jsxs)("div",{className:(0,d.default)("flex justify-between bg-token-main-surface-primary ",u?"px-3 py-2":"px-4 py-3"),children:[(0,F.jsxs)("div",{className:(0,d.default)("my-0 flex w-full items-center gap-2 font-medium capitalize",u?"overflow-hidden text-sm":""),children:[u&&(0,F.jsx)(N,{className:(0,d.default)("icon-lg flex-shrink-0",g||h?"text-brand-green-800":"text-token-text-quaternary")}),(0,F.jsx)("span",{className:(0,d.default)("truncate",u?"flex-grow":""),children:a})]}),(0,F.jsxs)("div",{className:(0,d.default)("flex items-center gap-3"),children:[!u&&l&&(0,F.jsx)(j.u,{side:"top",sideOffset:4,label:(0,F.jsx)(x.Z,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:C}}),children:(0,F.jsx)("button",{onClick:l,className:"flex items-center text-xs",children:(0,F.jsx)(n._8t,{className:(0,d.default)("text-token-text-tertiary hover:text-token-text-primary",g?"icon-lg":"icon-md")})})}),!u&&r&&(0,F.jsxs)(y.Z.Root,{children:[(0,F.jsx)(y.Z.Trigger,{asChild:!0,children:(0,F.jsx)("button",{children:(0,F.jsx)(n.KAl,{className:(0,d.default)("text-token-text-tertiary hover:text-token-text-primary",g?"icon-lg":"icon-md")})})}),(0,F.jsx)(y.Z.Portal,{children:(0,F.jsx)(y.Z.Content,{className:"flex min-w-48 max-w-xs flex-col px-0 py-1",sideOffset:7,children:r})})]}),(h||!u)&&(0,F.jsx)(j.u,{side:"top",sideOffset:4,label:g?(0,F.jsx)(x.Z,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:C}}):(0,F.jsx)(x.Z,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:C}}),children:(0,F.jsx)("button",{onClick:w,className:"flex items-center text-xs",children:g?(0,F.jsx)(n.W5x,{className:(0,d.default)("icon-md hover:text-token-text-primary",u?"icon-md text-token-text-secondary":"icon-lg text-token-text-tertiary")}):(0,F.jsx)(n.Qq,{className:(0,d.default)("icon-md hover:text-token-text-primary",h&&u?"text-token-text-secondary":"text-token-text-tertiary")})})})]})]}),!u&&(0,F.jsx)("div",{className:(0,d.default)("flex items-center justify-center bg-token-main-surface-primary"),style:{height:s?"calc(100vh - 48px)":"".concat("table"===C?300:350,"px")},children:c})]}))}}}]);
//# sourceMappingURL=5316.5f563392e7ec7be6.js.map