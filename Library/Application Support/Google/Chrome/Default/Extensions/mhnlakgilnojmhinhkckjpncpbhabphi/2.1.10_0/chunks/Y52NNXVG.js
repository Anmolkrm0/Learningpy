import{a as B}from"./ND6PR6XV.js";import{a as E}from"./GLSKWWMM.js";import{c as M}from"./DEJJ5UC3.js";import{f as _}from"./NXYPKLHC.js";import{d as L}from"./ZCBNEERI.js";import"./KCNKM736.js";import"./T5Z34CQF.js";import"./EYWU5WEI.js";import"./A3K6JWQV.js";import"./L33QHTPD.js";import{A as O,z}from"./KGHUEQWQ.js";import{d as T,g as j}from"./AWXXSJ4S.js";import"./PZ6W2FT2.js";import{d as q}from"./RU4PPZ26.js";import"./OMYZCSY2.js";import"./P65BW6FB.js";import{a as i,b as w}from"./SOBQVLGH.js";import"./H3PWEBSP.js";import"./QZNWBGPK.js";import{j as I}from"./QZVUH6Z4.js";import"./6NCLE6FY.js";import"./TJ4IOIPR.js";import{b as F}from"./AO55PT7K.js";import{E as P,g as x,j as C}from"./LW65P6WP.js";import{c as s}from"./QPPETRF6.js";import"./3QCQTR6Z.js";import{M as A}from"./TLLLFF6C.js";import"./H75Y2WTH.js";import{a as v}from"./64D36THL.js";import{c as k,f as a}from"./PQ35KENF.js";var D=k(p=>{"use strict";var J=w();Object.defineProperty(p,"__esModule",{value:!0});p.default=void 0;var Q=J(T()),U=I(),X=(0,Q.default)((0,U.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");p.default=X});var V=k(u=>{"use strict";var Y=w();Object.defineProperty(u,"__esModule",{value:!0});u.default=void 0;var Z=Y(T()),$=I(),R=(0,Z.default)((0,$.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");u.default=R});var l=a(v());var e=a(v());var W=a(D()),H=a(V());var ee=()=>{let{t:r}=s(["settings"]),{enqueueSnackbar:g}=F(),[o,f]=(0,e.useState)({}),[c,S]=(0,e.useState)(!1),y=(0,e.useRef)(!1),m=(0,e.useRef)(null),[h,N]=(0,e.useState)(!1),G=()=>N(t=>!t),d=(0,e.useCallback)(x((t,n)=>{g(t,{variant:"info",autoHideDuration:1e3,...n})},1e3),[g]);P(()=>{S(!1),z("OPENAI_API").then(t=>{t&&(m.current=A(t),f(t),S(!0))})});let b=(0,e.useCallback)(x(O,1e3),[]);return(0,e.useEffect)(()=>{if(c){if(!y.current){if(m.current&&C(m.current,o))return;d(r("settings:sync__save_success"),{variant:"success"}),y.current=!0}b("OPENAI_API",o)?.then(()=>{d(r("settings:sync__save_success"),{variant:"success"})})}},[o,c,b,d,r]),e.default.createElement(i,null,e.default.createElement(L,{loading:!c},e.default.createElement(i,{p:2,spacing:2},e.default.createElement(_,{type:h?"text":"password",fullWidth:!0,placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",size:"small",value:o.apiKey,onChange:t=>{f(n=>({...n,apiKey:t.target.value}))},InputProps:{sx:{pl:0,input:{fontSize:"14px"},height:40},endAdornment:e.default.createElement(M,{position:"end"},e.default.createElement(j,{"aria-label":"toggle password visibility",onClick:G},h?e.default.createElement(H.default,null):e.default.createElement(W.default,null))),startAdornment:e.default.createElement(i,{sx:{alignItems:"center",justifyContent:"center",height:"100%",fontWeight:500,fontSize:"14px",color:"text.primary",background:"rgba(0, 0, 0, 0.04)",px:2,mr:2,boxSizing:"border-box",flexShrink:0}},r("settings:feature_card__openai_api_key__field_api_key__title"))}}),e.default.createElement(_,{type:"text",fullWidth:!0,placeholder:"https://api.openai.com",size:"small",value:o.apiHost,onChange:t=>{f(n=>({...n,apiHost:t.target.value}))},InputProps:{sx:{pl:0,input:{fontSize:"14px"},height:40},startAdornment:e.default.createElement(i,{sx:{alignItems:"center",justifyContent:"center",height:"100%",fontWeight:500,fontSize:"14px",color:"text.primary",background:"rgba(0, 0, 0, 0.04)",px:2,mr:2,boxSizing:"border-box",flexShrink:0}},r("settings:feature_card__openai_api_key__field_api_host__title"))}}),e.default.createElement(q,{component:"a",href:"https://platform.openai.com/account/api-keys",target:"_blank",rel:"noreferrer noopener nofollow",sx:{width:320},variant:"contained",endIcon:e.default.createElement(B,null)},r("settings:feature_card__openai_api_key__get_my_openai_api_key")))))},K=ee;var te=()=>{let{t:r}=s(["settings"]);return l.default.createElement(i,null,l.default.createElement(E,{title:r("settings:feature_card__openai_api_key__title"),id:"my-own-key"},l.default.createElement(K,null)))},Ae=te;export{Ae as default};
