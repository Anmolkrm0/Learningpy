import{b as $e}from"./ASGB7G5Y.js";import{D as ee,q as Q,r as v,v as X,y as Z}from"./6WBNMCV2.js";import{g as Y,l as D}from"./QZNWBGPK.js";import{B as $,E as j,b as G,e as a,f as U,i as R,j as M,l as K,m as S}from"./QZVUH6Z4.js";import{a as J}from"./QPPETRF6.js";import{a as k}from"./64D36THL.js";import{c as Oe,f as s}from"./PQ35KENF.js";var Ve=Oe(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});Object.defineProperty(q,"default",{enumerable:!0,get:function(){return Fe.createSvgIcon}});var Fe=$e()});U();var z=s(k());var ne=s(J());var ie=s(Q()),A=s(K());var oe=s(G()),te=s(S());function re(e){return(0,te.default)("MuiIconButton",e)}var je=(0,oe.unstable_generateUtilityClasses)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),w=je;var se=s(M()),ze=["edge","children","className","color","disabled","disableFocusRipple","size"],Ie=e=>{let{classes:o,disabled:t,color:r,edge:p,size:i}=e,l={root:["root",t&&"disabled",r!=="default"&&`color${v(r)}`,p&&`edge${v(p)}`,`size${v(i)}`]};return(0,ie.unstable_composeClasses)(l,re,o)},Be=j(ee,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,t.color!=="default"&&o[`color${v(t.color)}`],t.edge&&o[`edge${v(t.edge)}`],o[`size${v(t.size)}`]]}})(({theme:e,ownerState:o})=>a({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,A.alpha)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var t;let r=(t=(e.vars||e).palette)==null?void 0:t[o.color];return a({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&a({color:r?.main},!o.disableRipple&&{"&:hover":a({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,A.alpha)(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${w.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),Ne=z.forwardRef(function(o,t){let r=$({props:o,name:"MuiIconButton"}),{edge:p=!1,children:i,className:l,color:g="default",disabled:m=!1,disableFocusRipple:T=!1,size:P="medium"}=r,b=R(r,ze),C=a({},r,{edge:p,color:g,disabled:m,disableFocusRipple:T,size:P}),I=Ie(C);return(0,se.jsx)(Be,a({className:(0,ne.default)(I.root,l),centerRipple:!0,focusRipple:!T,disabled:m,ref:t,ownerState:C},b,{children:i}))}),ke=Ne;var ae=s(G()),pe=s(S());function le(e){return(0,pe.default)("MuiPaper",e)}var Ue=(0,ae.unstable_generateUtilityClasses)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]),Me=Ue;U();var ce=s(k());var de=s(J());var ue=s(Q()),L=s(K());var fe=s(M()),De=["className","component","elevation","square","variant"],we=e=>{let{square:o,elevation:t,variant:r,classes:p}=e,i={root:["root",r,!o&&"rounded",r==="elevation"&&`elevation${t}`]};return(0,ue.unstable_composeClasses)(i,le,p)},Ae=j("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return a({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&a({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${(0,L.alpha)("#fff",D(o.elevation))}, ${(0,L.alpha)("#fff",D(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),Le=ce.forwardRef(function(o,t){let r=$({props:o,name:"MuiPaper"}),{className:p,component:i="div",elevation:l=1,square:g=!1,variant:m="elevation"}=r,T=R(r,De),P=a({},r,{component:i,elevation:l,square:g,variant:m}),b=we(P);return(0,fe.jsx)(Ae,a({as:i,ownerState:P,className:(0,de.default)(b.root,p),ref:t},T))}),qe=Le;U();var c=s(k());var me=e=>e.scrollTop;function F(e,o){var t,r;let{timeout:p,easing:i,style:l={}}=e;return{duration:(t=l.transitionDuration)!=null?t:typeof p=="number"?p:p[o.mode]||0,easing:(r=l.transitionTimingFunction)!=null?r:typeof i=="object"?i[o.mode]:i,delay:l.transitionDelay}}var ye=s(M()),We=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function W(e){return`scale(${e}, ${e**2})`}var He={entering:{opacity:1,transform:W(1)},entered:{opacity:1,transform:"none"}},V=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ve=c.forwardRef(function(o,t){let{addEndListener:r,appear:p=!0,children:i,easing:l,in:g,onEnter:m,onEntered:T,onEntering:P,onExit:b,onExited:C,onExiting:I,style:B,timeout:y="auto",TransitionComponent:ge=Z}=o,Te=R(o,We),H=c.useRef(),N=c.useRef(),h=Y(),_=c.useRef(null),Pe=X(_,i.ref,t),x=n=>u=>{if(n){let f=_.current;u===void 0?n(f):n(f,u)}},be=x(P),he=x((n,u)=>{me(n);let{duration:f,delay:O,easing:d}=F({style:B,timeout:y,easing:l},{mode:"enter"}),E;y==="auto"?(E=h.transitions.getAutoHeightDuration(n.clientHeight),N.current=E):E=f,n.style.transition=[h.transitions.create("opacity",{duration:E,delay:O}),h.transitions.create("transform",{duration:V?E:E*.666,delay:O,easing:d})].join(","),m&&m(n,u)}),xe=x(T),Ee=x(I),Re=x(n=>{let{duration:u,delay:f,easing:O}=F({style:B,timeout:y,easing:l},{mode:"exit"}),d;y==="auto"?(d=h.transitions.getAutoHeightDuration(n.clientHeight),N.current=d):d=u,n.style.transition=[h.transitions.create("opacity",{duration:d,delay:f}),h.transitions.create("transform",{duration:V?d:d*.666,delay:V?f:f||d*.333,easing:O})].join(","),n.style.opacity=0,n.style.transform=W(.75),b&&b(n)}),Ce=x(C),_e=n=>{y==="auto"&&(H.current=setTimeout(n,N.current||0)),r&&r(_.current,n)};return c.useEffect(()=>()=>{clearTimeout(H.current)},[]),(0,ye.jsx)(ge,a({appear:p,in:g,nodeRef:_,onEnter:he,onEntered:xe,onEntering:be,onExit:Re,onExited:Ce,onExiting:Ee,addEndListener:_e,timeout:y==="auto"?null:y},Te,{children:(n,u)=>c.cloneElement(i,a({style:a({opacity:0,transform:W(.75),visibility:n==="exited"&&!g?"hidden":void 0},He[n],B,i.props.style),ref:Pe},u))}))});ve.muiSupportAuto=!0;var Ge=ve;export{le as a,Me as b,qe as c,Ve as d,re as e,w as f,ke as g,me as h,F as i,Ge as j};
