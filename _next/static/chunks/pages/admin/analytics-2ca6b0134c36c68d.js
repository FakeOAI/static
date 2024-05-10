(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{95881:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return W},default:function(){return S}});var a,r,l,i,n=t(39993),o=t(52527),c=t(49292),d=t(44506),u=t(61236),g=t(65998),y=t(77743),p=t(9842),f=t.n(p),m=t(70079),b=t(25771),x=t(9063),j=t(84692),h=t(68498),k=t(21389),v=t(35250);function w(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}function O(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?w(Object(t),!0).forEach(function(s){(0,n.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}async function P(e){let{queryKey:[s,{workspaceId:t}]}=e;return d.Z.getWorkspaceAnalytics(t)}function L(e){let{data:s,label:t,getWeekValue:a}=e,r=(0,x.Z)(),l=(0,y.F)().theme,i=(0,m.useMemo)(()=>(function(e){let s=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:s.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:s.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:s.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:s.getPropertyValue("--surface-primary"),titleColor:s.getPropertyValue("--text-primary"),bodyColor:s.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}})(0),[l]),n=(0,m.useMemo)(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[l]),o={labels:s.weekly_data.map(e=>r.formatDate(e.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(a),borderWidth:0,backgroundColor:n,barThickness:20}]};return(0,v.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:(0,v.jsx)(b.$Q,{options:i,data:o,height:192})})}function _(e){let{label:s,value:t}=e;return(0,v.jsxs)("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[(0,v.jsx)("label",{className:"text-sm text-token-text-secondary",children:s}),(0,v.jsx)("div",{className:"text-xl font-medium text-token-text-primary",children:t})]})}function M(e){let{data:s}=e,t=(0,x.Z)(),a=s.weekly_data[s.weekly_data.length-2];return(0,v.jsxs)("div",{className:"mt-10",children:[(0,v.jsx)("div",{className:"mb-2 font-medium text-token-text-primary",children:(0,v.jsx)(j.Z,O({},U.totals))}),(0,v.jsxs)("div",{className:"mb-16 flex gap-4",children:[(0,v.jsx)(_,{label:t.formatMessage(U.usersLabel),value:s.total_users}),(0,v.jsx)(_,{label:t.formatMessage(U.conversationsLabel),value:s.total_conversations}),(0,v.jsx)(_,{label:t.formatMessage(U.messagesLabel),value:s.total_messages})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)("div",{className:"flex flex-col justify-between p-4",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(A,{children:(0,v.jsx)(j.Z,O({},U.usageTitle))}),null!=a&&(0,v.jsxs)("div",{children:[(0,v.jsx)(C,{children:a.message_count}),(0,v.jsx)(D,{children:(0,v.jsx)(j.Z,O({},U.messagesLastWeek))})]})]})}),(0,v.jsx)("div",{children:(0,v.jsx)(L,{data:s,label:t.formatMessage(U.messagesChartLabel),getWeekValue:e=>e.message_count})})]}),(0,v.jsxs)(Z,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(L,{data:s,label:t.formatMessage(U.activeUsersChartLabel),getWeekValue:e=>e.active_users_count})}),(0,v.jsx)("div",{className:"flex grow flex-col justify-between p-4",children:(0,v.jsxs)("div",{children:[(0,v.jsx)(A,{children:(0,v.jsx)(j.Z,O({},U.weeklyUsersTitle))}),null!=a&&(0,v.jsxs)("div",{children:[(0,v.jsx)(C,{children:a.active_users_count}),(0,v.jsx)(D,{children:(0,v.jsx)(j.Z,O({},U.activeUsersLastWeek))})]})]})})]})]})}g.kL.register(g.uw,g.f$,g.od,g.ZL,g.Dx,g.u,g.De);let Z=k.Z.div(a||(a=(0,c.Z)(["mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2"]))),A=k.Z.div(r||(r=(0,c.Z)(["font-medium"]))),C=k.Z.div(l||(l=(0,c.Z)(["font-medium text-3xl"]))),D=k.Z.div(i||(i=(0,c.Z)(["text-sm text-token-text-tertiary"])));function N(e){let{currentWorkspaceId:s}=e,t=(0,x.Z)(),{data:a,isLoading:r}=(0,u.a)({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:P});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f(),{children:(0,v.jsx)("title",{children:t.formatMessage(U.title)})}),(0,v.jsx)(o.yG,{title:t.formatMessage(U.title),subtitle:t.formatMessage(U.pageDescription)}),(0,v.jsx)(o.hb,{showSpinner:r,children:void 0!==a?(0,v.jsx)(M,{data:a}):null})]})}let U=(0,h.vU)({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function T(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,a)}return t}var W=!0;function S(e){return(0,v.jsx)(N,function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?T(Object(t),!0).forEach(function(s){(0,n.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}({},e))}S.getLayout=function(e){return(0,v.jsx)(o.ZP,{mobilePageTitle:"Analytics",requireAdminPrivileges:!0,children:e})}},4337:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/analytics",function(){return t(95881)}])}},function(e){e.O(0,[6835,4736,3433,5606,6883,2527,2888,9774,179],function(){return e(e.s=4337)}),_N_E=e.O()}]);
//# sourceMappingURL=analytics-2ca6b0134c36c68d.js.map