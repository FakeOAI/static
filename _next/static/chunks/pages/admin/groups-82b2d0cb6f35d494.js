(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705],{60883:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return V},default:function(){return Y}});var r=t(72438),a=t(31605),n=t(65733),o=t(71727),l=t(88324),i=t(82473),u=t(61236),c=t(52134),d=t(25494),p=t(19841),g=t(83474),m=t.n(g),x=t(70079),j=t(37659),h=t(9063),f=t(84692),y=t(68498),w=t(35250);function Z(e){let{checked:s}=e;return(0,w.jsx)("div",{className:"p-2",children:s?(0,w.jsx)(j.bTu,{}):(0,w.jsx)(j.Tfp,{})})}var b=t(63081),v=t(88436),k=t(44344);function M(e){let{className:s,inputClassName:t,value:r,onChange:a,placeholder:n}=e;return(0,w.jsxs)("div",{className:(0,p.default)("relative",s),children:[(0,w.jsx)(j.jRj,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,w.jsx)("input",{type:"text",value:r,onChange:a,placeholder:n,className:(0,p.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",t),autoComplete:"off"})]})}var S=t(59311),C=t(31731),N=t(49165),O=t(3806),D=t(74922),P=t(46),A=t(86705),G=t(61888),E=t(40646),_=t(51217),q=t(94035);function z(e){let{group:s,isOpen:t,onClose:r}=e,a=(0,h.Z)(),i=a.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),u=(0,l.t)(),{0:c,1:d}=(0,x.useState)([]),{0:p,1:g}=(0,x.useState)(!1);async function m(){let e=null==u?void 0:u.getWorkspaceId();if(!e)throw Error("No workspace ID found");g(!0);let t=await o.Z.bulkAddWorkspaceGroupUsers(e,s.id,c);n.m.success(a.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:t.added_group_users.length})),null==r||r(),g(!1)}return(0,w.jsxs)(O.Z,{isOpen:t,onClose:null!=r?r:G.noop,title:i,type:"success",showCloseButton:!0,primaryButton:(0,w.jsx)(b.z,{onClick:m,disabled:0===c.length||c.length>1e3,loading:p,children:(0,w.jsx)(f.Z,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[(0,w.jsx)(Q,{onChange:d}),c.length>1e3&&(0,w.jsx)("div",{className:"mt-2 text-sm text-token-text-error",children:(0,w.jsx)(f.Z,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:1e3}})})]})}function Q(e){let{onChange:s}=e,{0:t,1:r}=(0,x.useState)("");return(0,w.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,w.jsxs)("label",{htmlFor:"group-email-paste",children:[(0,w.jsx)(f.Z,{id:"qvGcSC",defaultMessage:"Emails"}),(0,w.jsx)("br",{}),(0,w.jsx)("span",{className:"text-sm text-token-text-tertiary",children:(0,w.jsx)(f.Z,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),(0,w.jsx)(q.Z,{id:"group-email-paste",className:"h-[250px] text-sm",value:t,onChange:e=>{r(e.target.value),s(e.target.value.split("\n").map(e=>e.trim()).filter(e=>e.length>0).filter(e=>_.F.test(e)))},placeholder:"jean@example.com\njoohyun@example.com\nmuhammed@example.com\nsusan@example.com"})]})}function F(e){let{group:s,isOpen:t,onClose:r}=e,a=(0,h.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),n=(0,l.t)(),o=null==n?void 0:n.getWorkspaceId(),{0:i,1:u}=(0,x.useState)(""),{0:d,1:p}=(0,x.useState)(0),{data:g}=(0,E.Z)(o,d*E.I,i,E.I,c.Wk),{0:m,1:y}=(0,x.useState)([]),{0:Z,1:v}=(0,x.useState)([]),{0:S,1:C}=(0,x.useState)("interactive"),P=g?Math.ceil(g.total/E.I):0;async function _(e){v(s=>[...s,e]);try{await I(o,s.id,e),y(s=>[...s,e])}catch(e){A.U.addError(e)}finally{v(s=>s.filter(s=>s!==e))}}return"batch"===S?(0,w.jsx)(z,{group:s,isOpen:t,onClose:r}):(0,w.jsx)(O.Z,{type:"warning",isOpen:t,onClose:null!=r?r:G.noop,title:a,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:(0,w.jsx)(b.z,{onClick:r,children:(0,w.jsx)(f.Z,{id:"0NAzDq",defaultMessage:"Done"})}),children:(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,w.jsx)("p",{children:a}),(0,w.jsx)(b.z,{onClick:()=>{C("batch")},color:"secondary",children:(0,w.jsx)(f.Z,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),(0,w.jsx)(M,{value:i,inputClassName:"w-full",onChange:e=>{u(e.target.value)}}),(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsx)(N.Z.Body,{children:null==g?void 0:g.items.map(e=>(0,w.jsxs)(N.Z.Row,{children:[(0,w.jsx)(N.Z.Cell,{children:e.name}),(0,w.jsx)(N.Z.Cell,{children:e.email}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",className:"pr-1",children:(0,w.jsx)(b.z,{size:"small",color:"secondary",disabled:Z.includes(e.id),onClick:()=>{m.includes(e.id)||_(e.id)},children:m.includes(e.id)?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(D.nQ,{}),(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j.OvN,{}),(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})]})})})]},e.id))})]}),(0,w.jsx)("div",{className:"flex flex-row justify-center",children:(0,w.jsx)(k.t,{currentPage:d,onChangeIndex:e=>{p(e)},length:P})})]})})}async function I(e,s,t){await o.Z.addWorkspaceGroupUser(e,s,t)}function T(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?T(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function B(e){let{workspaceId:s,group:t,readOnly:r}=e,a=(0,h.Z)(),{0:n,1:l}=(0,x.useState)(!1),{0:g,1:m}=(0,x.useState)(""),{0:y,1:Z}=(0,x.useState)(0),{data:v,isLoading:M,isPlaceholderData:O}=(0,u.a)({queryKey:[s,"groups",t.id,g,"members-page-".concat(y)],queryFn:()=>o.Z.listWorkspaceGroupMembers(s,t.id,g,10*y),placeholderData:c.Wk}),{0:A,1:G}=(0,x.useState)(!1),E=(0,x.useRef)(null),_=(0,i.NL)();(0,x.useEffect)(()=>{n&&E.current&&E.current.focus()},[n]);let{mutateAsync:q}=(0,d.D)({mutationFn:async e=>await o.Z.removeWorkspaceGroupMember(s,t.id,e),onMutate:e=>(_.cancelQueries({queryKey:[s,"groups",t.id]}),_.setQueryData([s,"groups",t.id,g,"members-page-".concat(y)],s=>s?R(R({},s),{},{items:s.items.filter(s=>s.id!==e),total:s.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:v}),onError:(e,r,a)=>{_.setQueryData([s,"groups",t.id,"members-page-".concat(y)],null==a?void 0:a.previousData),_.invalidateQueries({queryKey:[s,"groups",t.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),_.invalidateQueries({queryKey:[s,"groups"]})}});return(0,w.jsxs)("div",{className:"flex w-full flex-col",children:[(0,w.jsxs)("div",{className:"flex flex-row items-center ",children:[(0,w.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,w.jsx)("div",{className:"grow"}),(0,w.jsx)(P.u,{label:a.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,w.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{l(!0)},children:(0,w.jsx)(D.ol,{})})}),(0,w.jsx)("input",{type:"text",ref:E,placeholder:a.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,p.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",n?"w-64":"w-0"),value:g,onChange:()=>{var e,s;Z(0),m(null!==(e=null===(s=E.current)||void 0===s?void 0:s.value)&&void 0!==e?e:"")}})]}),(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsx)(N.Z.Body,{className:M||O?"opacity-50":void 0,children:null==v?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:3,children:(0,w.jsx)(S.Z,{})})}):0===v.items.length?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:3,children:""===g?(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):v.items.map(e=>(0,w.jsxs)(N.Z.Row,{children:[(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)("span",{className:"ml-3",children:e.name})}),(0,w.jsx)(N.Z.Cell,{children:e.email}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",children:!r&&(0,w.jsxs)(C.Z.Root,{children:[(0,w.jsx)(C.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(j.K9M,{className:"icon-sm"})}),(0,w.jsx)(C.Z.Portal,{children:(0,w.jsx)(C.Z.Content,{children:(0,w.jsx)(C.Z.Item,{onClick:()=>q(e.id),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]})})]},e.id))})]}),(0,w.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[!r&&(0,w.jsx)(b.z,{color:"secondary",onClick:()=>G(!0),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),(0,w.jsx)("div",{className:"grow"}),v&&v.items.length>0&&(0,w.jsx)(k.t,{currentPage:y,onChangeIndex:e=>{Z(e)},length:Math.ceil(v.total/10)})]}),A&&(0,w.jsx)(F,{isOpen:!0,onClose:()=>{_.invalidateQueries({queryKey:[s,"groups"]}),G(!1)},group:t})]})}function K(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function W(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?K(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function H(e){let{workspaceId:s}=e,t=(0,h.Z)(),r=(0,l.t)(),a=!(null!=r&&r.isAdminOfAccount()||null!=r&&r.isOwnerOfAccount()),g=(0,i.NL)(),{0:m,1:j}=(0,x.useState)(""),{0:y,1:Z}=(0,x.useState)(0),{data:v,isLoading:C,isPlaceholderData:O}=(0,u.a)({queryKey:""===m?[s,"groups","page-".concat(y)]:[s,"groups","filtered",m,"page-".concat(y)],queryFn:()=>o.Z.getWorkspaceGroups(s,{query:m,offset:10*y}),placeholderData:c.Wk}),{0:D,1:P}=(0,x.useState)(!1),A=e=>{e&&(Z(0),j("")),P(e)},{mutateAsync:G}=(0,d.D)({mutationFn:async e=>{let{workspaceId:s,name:t}=e;return await o.Z.createWorkspaceGroup(s,t)},onMutate:e=>{let{workspaceId:s,name:t}=e;return g.cancelQueries({queryKey:[s,"groups"]}),g.setQueryData([s,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),W(W({},e),{},{items:[{id:"new",name:t,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:v}},onError:(e,r,a)=>{g.setQueryData([s,"groups","page-0"],null==a?void 0:a.previousGroups),g.invalidateQueries({queryKey:[s,"groups"]}),"Group with this name already exists."===e.message&&n.m.warning(t.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:E}=(0,d.D)({mutationFn:async e=>await o.Z.deleteWorkspaceGroup(s,e),onMutate:e=>(g.cancelQueries({queryKey:[s,"groups","page-0"]}),g.setQueryData([s,"groups","page-0"],s=>(s||(s={items:[]}),W(W({},s),{},{items:s.items.filter(s=>s.id!==e)}))),{previousGroups:v}),onError:(e,t,r)=>{g.setQueryData([s,"groups","page-0"],null==r?void 0:r.previousGroups),g.invalidateQueries({queryKey:[s,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:_}=(0,d.D)({mutationFn:async e=>{let{workspaceId:s,groupID:t,name:r}=e;return await o.Z.updateWorkspaceGroup(s,t,r)},onMutate:e=>{let{workspaceId:s,groupID:t,name:r}=e,a=g.getQueryData([s,"groups","page-".concat(y)]);return g.setQueryData([s,"groups","page-".concat(y)],e=>(e||(e={items:[]}),W(W({},e),{},{items:e.items.map(e=>e.id===t?W(W({},e),{},{name:r}):e)}))),{previousGroups:a}},onError:(e,s,r)=>{g.setQueryData([s,"groups","page-".concat(y)],null==r?void 0:r.previousGroups),"Group with this name already exists."===e.message&&n.m.warning(t.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),g.invalidateQueries({queryKey:[s,"groups"]})}});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,w.jsx)(M,{inputClassName:"w-[250px]",value:m,onChange:e=>{j(e.target.value),Z(0)},placeholder:t.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!a&&(0,w.jsx)(b.z,{onClick:()=>A(!0),children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,w.jsxs)(N.Z.Header,{children:[(0,w.jsx)(N.Z.HeaderCell,{}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,w.jsx)(N.Z.HeaderCell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,w.jsx)(N.Z.HeaderCell,{})]}),(0,w.jsxs)(N.Z.Body,{className:(0,p.default)((C||O)&&"opacity-50"),children:[D&&(0,w.jsx)(L,{group:"new",workspaceId:s,onChangeName:async e=>{""!==e.trim()&&(G({workspaceId:s,name:e}),A(!1))},onDelete:()=>null,readOnly:a}),null==v?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:(0,w.jsx)(S.Z,{})})}):0===v.items.length?(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:""===m?(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):v.items.map(e=>(0,w.jsx)(L,{group:e,workspaceId:s,onDelete:E,onChangeName:async t=>{_({workspaceId:s,groupID:e.id,name:t})},readOnly:a},e.id))]})]}),v&&(0,w.jsx)("div",{className:"flex flex-row justify-center",children:(0,w.jsx)(k.t,{length:Math.ceil(v.total/10),currentPage:Math.min(y,Math.ceil(v.total/10)),onChangeIndex:e=>Z(e)})})]})]})}function U(e){let{currentWorkspaceId:s}=e,t=(0,h.Z)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m(),{children:(0,w.jsx)("title",{children:t.formatMessage($.title)})}),(0,w.jsx)(a.yG,{title:t.formatMessage($.title),subtitle:(0,w.jsx)(f.Z,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),(0,w.jsx)(a.hb,{showSpinner:!1,children:(0,w.jsx)(H,{workspaceId:s})})]})}function L(e){let{group:s,workspaceId:t,onChangeName:r,onDelete:a,readOnly:n}=e,o=(0,h.Z)(),{0:l,1:i}=(0,x.useState)(!1),{0:u,1:c}=(0,x.useState)("new"===s?"":s.name),{0:d,1:p}=(0,x.useState)(!1),{0:g,1:m}=(0,x.useState)("new"===s),{0:b,1:k}=(0,x.useState)(null),M=(0,x.useRef)(null);(0,x.useEffect)(()=>{if("new"===s||g){var e;null===(e=M.current)||void 0===e||e.focus()}},[s,g]);let S=async()=>{if(""===u.trim()){c("new"===s?"":s.name),m(!1),p(!1);return}r&&(p(!0),await r(u)),p(!1),m(!1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(N.Z.Row,{onClick:()=>i(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)(Z,{checked:l})}),(0,w.jsx)(N.Z.Cell,{children:"new"===s||g?(0,w.jsx)(v.Z,{ref:M,name:"newGroupName",value:u,disabled:d,placeholder:o.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>c(e.target.value),onBlur:()=>{u!==("new"===s?"":s.name)&&S()},onPressEnter:S}):s.name}),(0,w.jsx)(N.Z.Cell,{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===s?"0":s.num_members}})}),(0,w.jsx)(N.Z.Cell,{children:"new"!==s&&s.created_time?(0,w.jsx)(y.Ji,{value:s.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,w.jsx)(N.Z.Cell,{textAlign:"right",children:"new"!==s&&!n&&(0,w.jsxs)(C.Z.Root,{children:[(0,w.jsx)(C.Z.Trigger,{className:"-my-2",children:(0,w.jsx)(j.K9M,{className:"icon-sm"})}),(0,w.jsx)(C.Z.Portal,{children:(0,w.jsxs)(C.Z.Content,{children:[(0,w.jsx)(C.Z.Item,{onClick:e=>{m(!0),setTimeout(()=>{var e;null===(e=M.current)||void 0===e||e.focus()},120),e.stopPropagation()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,w.jsx)(C.Z.Item,{onClick:e=>{k(s),e.stopPropagation()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]})})]}),l&&"new"!==s&&(0,w.jsx)(N.Z.Row,{children:(0,w.jsx)(N.Z.Cell,{colSpan:5,className:"pl-8",children:(0,w.jsx)(B,{group:s,workspaceId:t,readOnly:n})})}),b&&(0,w.jsx)(X,{group:b,onDelete:a,onClose:()=>k(null)})]})}function X(e){let{group:s,onDelete:t,onClose:r}=e,a=(0,h.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:s.name});return(0,w.jsx)(O.Z,{type:"warning",isOpen:!0,onClose:r,title:a,showCloseButton:!0,primaryButton:(0,w.jsx)(b.z,{color:"danger",onClick:async()=>{t(s.id),r()},children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,w.jsx)(b.z,{onClick:r,color:"secondary",children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,w.jsx)("p",{children:(0,w.jsx)(f.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:s.name}})})})}let $=(0,y.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function J(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}var V=!0;function Y(e){return(0,w.jsx)(U,function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?J(Object(t),!0).forEach(function(s){(0,r.Z)(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}({},e))}Y.getLayout=function(e){return(0,w.jsx)(a.ZP,{mobilePageTitle:"Groups",children:e})}},40646:function(e,s,t){"use strict";t.d(s,{I:function(){return n},Z:function(){return o}});var r=t(71727),a=t(61236);let n=25;function o(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;return(0,a.a)({queryKey:["workspace",e,s,t],queryFn:async()=>await r.Z.getWorkspaceUsers(e,s,o,t),placeholderData:l,enabled:!!e})}},51217:function(e,s,t){"use strict";t.d(s,{F:function(){return r}});let r=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},65691:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return t(60883)}])}},function(e){e.O(0,[4736,4848,5251,1605,2888,9774,179],function(){return e(e.s=65691)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-82b2d0cb6f35d494.js.map