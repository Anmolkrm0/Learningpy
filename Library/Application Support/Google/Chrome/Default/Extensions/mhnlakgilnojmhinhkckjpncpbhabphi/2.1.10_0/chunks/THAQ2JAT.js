import{G as m}from"./KCNKM736.js";import{B as d,e as r,f as S,j as c}from"./QZVUH6Z4.js";import{a as x}from"./64D36THL.js";import{f as a}from"./PQ35KENF.js";S();var f=a(x());var u=a(c()),b=a(c()),v=(o,e)=>r({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!o.vars&&{colorScheme:o.palette.mode}),h=o=>r({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),C=(o,e=!1)=>{var t,s;let l={};e&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([y,g])=>{var p;l[o.getColorSchemeSelector(y).replace(/\s*&/,"")]={colorScheme:(p=g.palette)==null?void 0:p.mode}});let n=r({html:v(o,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:r({margin:0},h(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},l),i=(t=o.components)==null||(s=t.MuiCssBaseline)==null?void 0:s.styleOverrides;return i&&(n=[n,i]),n};function k(o){let e=d({props:o,name:"MuiCssBaseline"}),{children:t,enableColorScheme:s=!1}=e;return(0,b.jsxs)(f.Fragment,{children:[(0,u.jsx)(m,{styles:l=>C(l,s)}),t]})}var _=k;export{v as a,h as b,_ as c};
