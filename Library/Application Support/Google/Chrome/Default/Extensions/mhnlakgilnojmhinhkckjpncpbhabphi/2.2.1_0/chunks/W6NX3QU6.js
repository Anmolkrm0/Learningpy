import{q as D}from"./6WBNMCV2.js";import{B as y,E as P,b as O,e as i,f as E,i as u,j as f,m as w}from"./QZVUH6Z4.js";import{a as S}from"./QPPETRF6.js";import{a as m}from"./64D36THL.js";import{f as o}from"./PQ35KENF.js";E();var a=o(m());var C=o(S()),L=o(D());var b=o(m()),V=b.createContext({}),T=V;var x=o(O()),g=o(w());function h(e){return(0,g.default)("MuiList",e)}var B=(0,x.unstable_generateUtilityClasses)("MuiList",["root","padding","dense","subheader"]),W=B;var N=o(f()),R=o(f()),k=["children","className","component","dense","disablePadding","subheader"],q=e=>{let{classes:s,disablePadding:t,dense:r,subheader:n}=e;return(0,L.unstable_composeClasses)({root:["root",!t&&"padding",r&&"dense",n&&"subheader"]},h,s)},z=P("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,s)=>{let{ownerState:t}=e;return[s.root,!t.disablePadding&&s.padding,t.dense&&s.dense,t.subheader&&s.subheader]}})(({ownerState:e})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),A=a.forwardRef(function(s,t){let r=y({props:s,name:"MuiList"}),{children:n,className:d,component:l="ul",dense:p=!1,disablePadding:_=!1,subheader:j}=r,v=u(r,k),U=a.useMemo(()=>({dense:p}),[p]),c=i({},r,{component:l,dense:p,disablePadding:_}),M=q(c);return(0,R.jsx)(T.Provider,{value:U,children:(0,N.jsxs)(z,i({as:l,className:(0,C.default)(M.root,d),ref:t,ownerState:c},v,{children:[j,n]}))})}),F=A;export{T as a,h as b,W as c,F as d};
