import{f as S}from"./A3K6JWQV.js";import{b as w}from"./OMYZCSY2.js";import{D as R,q as ne,r as F}from"./SOBQVLGH.js";import{E as f,b as oe,e as a,f as se,i as B,j as x,m as te}from"./QZVUH6Z4.js";import{a as re}from"./QPPETRF6.js";import{a as ee}from"./64D36THL.js";import{f as t}from"./PQ35KENF.js";se();var q=t(ee());var N=t(re());var O=t(ne());var I=t(oe()),j=t(te());function _(e){return(0,j.default)("PrivateSwitchBase",e)}var le=(0,I.unstable_generateUtilityClasses)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=t(x()),U=t(x()),ie=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ae=e=>{let{classes:r,checked:p,disabled:d,edge:n}=e,l={root:["root",p&&"checked",d&&"disabled",n&&`edge${F(n)}`],input:["input"]};return(0,O.unstable_composeClasses)(l,_,r)},ce=f(R)(({ownerState:e})=>a({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),pe=f("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=q.forwardRef(function(r,p){let{autoFocus:d,checked:n,checkedIcon:l,className:z,defaultChecked:m,disabled:E,disableFocusRipple:h=!1,edge:L=!1,icon:D,id:V,inputProps:W,inputRef:$,name:A,onBlur:y,onChange:b,onFocus:P,readOnly:G,required:H=!1,tabIndex:J,type:c,value:g}=r,K=B(r,ie),[T,M]=w({controlled:n,default:!!m,name:"SwitchBase",state:"checked"}),s=S(),Q=o=>{P&&P(o),s&&s.onFocus&&s.onFocus(o)},X=o=>{y&&y(o),s&&s.onBlur&&s.onBlur(o)},Y=o=>{if(o.nativeEvent.defaultPrevented)return;let k=o.target.checked;M(k),b&&b(o,k)},i=E;s&&typeof i>"u"&&(i=s.disabled);let Z=c==="checkbox"||c==="radio",u=a({},r,{checked:T,disabled:i,disableFocusRipple:h,edge:L}),C=ae(u);return(0,U.jsxs)(ce,a({component:"span",className:(0,N.default)(C.root,z),centerRipple:!0,focusRipple:!h,disabled:i,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:u,ref:p},K,{children:[(0,v.jsx)(pe,a({autoFocus:d,checked:n,defaultChecked:m,className:C.input,disabled:i,id:Z&&V,name:A,onChange:Y,readOnly:G,ref:$,required:H,ownerState:u,tabIndex:J,type:c},c==="checkbox"&&g===void 0?{}:{value:g},W)),T?l:D]}))}),Ce=de;export{Ce as a};
