import{a as C}from"./SMO67HIN.js";import{q as L}from"./JUQUTDV2.js";import{B as R,E as u,b as O,e as l,f as U,i as h,j as A,m as q}from"./QZVUH6Z4.js";import{a as E}from"./QPPETRF6.js";import{a as x}from"./64D36THL.js";import{f as a}from"./PQ35KENF.js";U();var p=a(x());var I=a(E()),S=a(L());var Z=a(x());var j=a(A()),k=C((0,j.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var N=a(O()),w=a(q());function D(e){return(0,w.default)("MuiAvatar",e)}var B=(0,N.unstable_generateUtilityClasses)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),H=B;var d=a(A()),V=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],W=e=>{let{classes:r,variant:o,colorDefault:t}=e;return(0,S.unstable_composeClasses)({root:["root",o,t&&"colorDefault"],img:["img"],fallback:["fallback"]},D,r)},G=u("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:o}=e;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>l({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},r.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},r.variant==="square"&&{borderRadius:0},r.colorDefault&&l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),J=u("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),K=u(k,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});function Q({crossOrigin:e,referrerPolicy:r,src:o,srcSet:t}){let[i,n]=p.useState(!1);return p.useEffect(()=>{if(!o&&!t)return;n(!1);let c=!0,s=new Image;return s.onload=()=>{c&&n("loaded")},s.onerror=()=>{c&&n("error")},s.crossOrigin=e,s.referrerPolicy=r,s.src=o,t&&(s.srcset=t),()=>{c=!1}},[e,r,o,t]),i}var X=p.forwardRef(function(r,o){let t=R({props:r,name:"MuiAvatar"}),{alt:i,children:n,className:c,component:s="div",imgProps:P,sizes:_,src:m,srcSet:v,variant:z="circular"}=t,M=h(t,V),f=null,F=Q(l({},P,{src:m,srcSet:v})),T=m||v,b=T&&F!=="error",g=l({},t,{colorDefault:!b,component:s,variant:z}),y=W(g);return b?f=(0,d.jsx)(J,l({alt:i,src:m,srcSet:v,sizes:_,ownerState:g,className:y.img},P)):n!=null?f=n:T&&i?f=i[0]:f=(0,d.jsx)(K,{className:y.fallback}),(0,d.jsx)(G,l({as:s,ownerState:g,className:(0,I.default)(y.root,c),ref:o},M,{children:f}))}),Y=X;export{D as a,H as b,Y as c};
