(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1475],{81067:function(t,e,c){"use strict";c.r(e),c.d(e,{__N_SSP:function(){return o},default:function(){return i}});var n=c(24740),r=c(86741),u=c(2721),a=c(34977),s=c(92379),o=!0;function i(){let t=(0,a.useRouter)(),e=(0,s.useRef)(!1),{0:c,1:o}=(0,s.useState)(""),{code:i,error:f,error_description:l,state:_}=Object.fromEntries(new URLSearchParams(c.substring(1)).entries()),h=t.query.pluginId;return(0,s.useEffect)(()=>{o(window.location.hash)},[]),(0,s.useEffect)(()=>{e.current||(h&&i&&_&&(e.current=!0),async function(){let e="".concat("https://chatgpt.com","/ccc/").concat(h,"/oauth/callback");if(!h||!i||!_)return;let c=await u.Z.connectorOauthCallback(h,i,e,_);if(c.success){let e=new URL((0,r.M5)(r.LT.OAUTH_SUCCESS,c.redirect_path));e.searchParams.set("oauth_success","true"),t.push(e.toString())}else{var n;t.push((0,r.M5)(r.LT.CUSTOM_ERROR,c.redirect_path,null!==(n=c.error)&&void 0!==n?n:c.message))}}())},[h,i,_,t]),(0,s.useEffect)(()=>{f&&n.m.danger("".concat(f).concat(l?": ".concat(l):""))},[f,l]),null}},70403:function(t,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ccc/[pluginId]/oauth/callback",function(){return c(81067)}])}},function(t){t.O(0,[2888,9774,179],function(){return t(t.s=70403)}),_N_E=t.O()}]);
//# sourceMappingURL=callback-13616c25751e6bef.js.map