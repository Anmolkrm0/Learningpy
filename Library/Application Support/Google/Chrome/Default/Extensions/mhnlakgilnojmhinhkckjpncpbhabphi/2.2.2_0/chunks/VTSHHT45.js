import{a as $}from"./BXGPN2X7.js";import{q as J,r as m,u as N}from"./SYZGD7UF.js";import{B as M,E as y,b as A,e as c,f as G,i as D,j as H,l as Y,m as Z}from"./QZVUH6Z4.js";import{a as q,c as R}from"./QPPETRF6.js";import{a as w}from"./64D36THL.js";import{f as s}from"./PQ35KENF.js";var j=s(A()),O=s(Z());function z(r){return(0,O.default)("MuiCircularProgress",r)}var Q=(0,j.unstable_generateUtilityClasses)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),X=Q;G();var B=s(w());var L=s(q());var W=s(J()),l=s(Y());var h=s(H()),rr=["className","color","disableShrink","size","style","thickness","value","variant"],g=r=>r,U,F,I,E,t=44,er=(0,l.keyframes)(U||(U=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),or=(0,l.keyframes)(F||(F=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),sr=r=>{let{classes:e,variant:o,color:i,disableShrink:p}=r,n={root:["root",o,`color${m(i)}`],svg:["svg"],circle:["circle",`circle${m(o)}`,p&&"circleDisableShrink"]};return(0,W.unstable_composeClasses)(n,z,e)},tr=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:o}=r;return[e.root,e[o.variant],e[`color${m(o.color)}`]]}})(({ownerState:r,theme:e})=>c({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&(0,l.css)(I||(I=g`
      animation: ${0} 1.4s linear infinite;
    `),er)),ir=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),ar=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:o}=r;return[e.circle,e[`circle${m(o.variant)}`],o.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>c({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&(0,l.css)(E||(E=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),or)),nr=B.forwardRef(function(e,o){let i=M({props:e,name:"MuiCircularProgress"}),{className:p,color:n="primary",disableShrink:f=!1,size:P=40,style:K,thickness:u=3.6,value:x=0,variant:k="indeterminate"}=i,V=D(i,rr),d=c({},i,{color:n,disableShrink:f,size:P,thickness:u,value:x,variant:k}),v=sr(d),T={},b={},S={};if(k==="determinate"){let _=2*Math.PI*((t-u)/2);T.strokeDasharray=_.toFixed(3),S["aria-valuenow"]=Math.round(x),T.strokeDashoffset=`${((100-x)/100*_).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,h.jsx)(tr,c({className:(0,L.default)(v.root,p),style:c({width:P,height:P},b,K),ownerState:d,ref:o,role:"progressbar"},S,V,{children:(0,h.jsx)(ir,{className:v.svg,ownerState:d,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:(0,h.jsx)(ar,{className:v.circle,style:T,ownerState:d,cx:t,cy:t,r:(t-u)/2,fill:"none",strokeWidth:u})})}))}),C=nr;var a=s(w());var cr=({loading:r,loadingText:e,size:o=20,sx:i,children:p})=>{let{t:n}=R(["common"]),f=a.default.useMemo(()=>e||n("common:loading"),[e,n]);return a.default.createElement(a.default.Fragment,null,r?a.default.createElement($,{sx:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",flexDirection:"column",my:2,...i}},a.default.createElement(C,{size:o,sx:{m:"0 auto"}}),f&&a.default.createElement(N,{mt:1.5,variant:"body2",fontWeight:400,fontSize:"16px",lineHeight:1.25,color:"text.primary"},f)):p)},_r=cr;export{z as a,X as b,C as c,_r as d};
