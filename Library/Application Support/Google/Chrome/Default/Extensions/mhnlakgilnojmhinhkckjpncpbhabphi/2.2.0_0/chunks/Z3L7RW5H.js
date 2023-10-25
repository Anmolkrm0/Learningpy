import{l as K,o as Y,q as X,r as Mo}from"./4565WM6X.js";import{c as O}from"./SH2AV755.js";import{q as k,r as u,u as V}from"./JUQUTDV2.js";import{g as I}from"./QZNWBGPK.js";import{B as m,E as a,b as P,e as i,f as h,i as d,j as D,m as v}from"./QZVUH6Z4.js";import{a as W}from"./QPPETRF6.js";import{a as x}from"./64D36THL.js";import{f as t}from"./PQ35KENF.js";var z=t(P()),H=t(v());function q(o){return(0,H.default)("MuiDialog",o)}var Uo=(0,z.unstable_generateUtilityClasses)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),b=Uo;h();var g=t(x());var S=t(W()),J=t(k()),Q=t(P());var G=t(x()),Oo=(0,G.createContext)({}),R=Oo;var y=t(D()),Bo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Ao=a(Y,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),$o=o=>{let{classes:e,scroll:r,maxWidth:s,fullWidth:p,fullScreen:n}=o,c={root:["root"],container:["container",`scroll${u(r)}`],paper:["paper",`paperScroll${u(r)}`,`paperWidth${u(String(s))}`,p&&"paperFullWidth",n&&"paperFullScreen"]};return(0,J.unstable_composeClasses)(c,q,e)},Eo=a(X,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Fo=a("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{let{ownerState:r}=o;return[e.container,e[`scroll${u(r.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Lo=a(O,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{let{ownerState:r}=o;return[e.paper,e[`scrollPaper${u(r.scroll)}`],e[`paperWidth${u(String(r.maxWidth))}`],r.fullWidth&&e.paperFullWidth,r.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${b.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Io=g.forwardRef(function(e,r){let s=m({props:e,name:"MuiDialog"}),p=I(),n={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":l,BackdropComponent:f,BackdropProps:_,children:bo,className:Co,disableEscapeKeyDown:A=!1,fullScreen:ho=!1,fullWidth:Do=!1,maxWidth:vo="sm",onBackdropClick:$,onClose:j,open:E,PaperComponent:Wo=O,PaperProps:F={},scroll:ko="paper",TransitionComponent:Ro=K,transitionDuration:L=n,TransitionProps:So}=s,No=d(s,Bo),C=i({},s,{disableEscapeKeyDown:A,fullScreen:ho,fullWidth:Do,maxWidth:vo,scroll:ko}),w=$o(C),M=g.useRef(),_o=T=>{M.current=T.target===T.currentTarget},jo=T=>{M.current&&(M.current=null,$&&$(T),j&&j(T,"backdropClick"))},U=(0,Q.unstable_useId)(l),wo=g.useMemo(()=>({titleId:U}),[U]);return(0,y.jsx)(Eo,i({className:(0,S.default)(w.root,Co),closeAfterTransition:!0,components:{Backdrop:Ao},componentsProps:{backdrop:i({transitionDuration:L,as:f},_)},disableEscapeKeyDown:A,onClose:j,open:E,ref:r,onClick:jo,ownerState:C},No,{children:(0,y.jsx)(Ro,i({appear:!0,in:E,timeout:L,role:"presentation"},So,{children:(0,y.jsx)(Fo,{className:(0,S.default)(w.container),onMouseDown:_o,ownerState:C,children:(0,y.jsx)(Lo,i({as:Wo,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":U},F,{className:(0,S.default)(w.paper,F.className),ownerState:C,children:(0,y.jsx)(R.Provider,{value:wo,children:bo})}))})}))}))}),Vo=Io;var Z=t(P()),oo=t(v());function eo(o){return(0,oo.default)("MuiDialogTitle",o)}var Ko=(0,Z.unstable_generateUtilityClasses)("MuiDialogTitle",["root"]),B=Ko;h();var N=t(x());var ro=t(W()),to=t(k());var so=t(D()),Yo=["className","id"],Xo=o=>{let{classes:e}=o;return(0,to.unstable_composeClasses)({root:["root"]},eo,e)},zo=a(V,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Ho=N.forwardRef(function(e,r){let s=m({props:e,name:"MuiDialogTitle"}),{className:p,id:n}=s,c=d(s,Yo),l=s,f=Xo(l),{titleId:_=n}=N.useContext(R);return(0,so.jsx)(zo,i({component:"h2",className:(0,ro.default)(f.root,p),ownerState:l,ref:r,variant:"h6",id:_},c))}),qo=Ho;var io=t(P()),ao=t(v());function po(o){return(0,ao.default)("MuiDialogContent",o)}var Go=(0,io.unstable_generateUtilityClasses)("MuiDialogContent",["root","dividers"]),Jo=Go;h();var lo=t(x());var no=t(W()),co=t(k());var mo=t(D()),Qo=["className","dividers"],Zo=o=>{let{classes:e,dividers:r}=o;return(0,co.unstable_composeClasses)({root:["root",r&&"dividers"]},po,e)},oe=a("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:r}=o;return[e.root,r.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${B.root} + &`]:{paddingTop:0}})),ee=lo.forwardRef(function(e,r){let s=m({props:e,name:"MuiDialogContent"}),{className:p,dividers:n=!1}=s,c=d(s,Qo),l=i({},s,{dividers:n}),f=Zo(l);return(0,mo.jsx)(oe,i({className:(0,no.default)(f.root,p),ownerState:l,ref:r},c))}),re=ee;var fo=t(P()),uo=t(v());function yo(o){return(0,uo.default)("MuiDialogActions",o)}var te=(0,fo.unstable_generateUtilityClasses)("MuiDialogActions",["root","spacing"]),se=te;h();var go=t(x());var To=t(W()),xo=t(k());var Po=t(D()),ie=["className","disableSpacing"],ae=o=>{let{classes:e,disableSpacing:r}=o;return(0,xo.unstable_composeClasses)({root:["root",!r&&"spacing"]},yo,e)},pe=a("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{let{ownerState:r}=o;return[e.root,!r.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),le=go.forwardRef(function(e,r){let s=m({props:e,name:"MuiDialogActions"}),{className:p,disableSpacing:n=!1}=s,c=d(s,ie),l=i({},s,{disableSpacing:n}),f=ae(l);return(0,Po.jsx)(pe,i({className:(0,To.default)(f.root,p),ownerState:l,ref:r},c))}),ne=le;export{q as a,b,Vo as c,eo as d,B as e,qo as f,po as g,Jo as h,re as i,yo as j,se as k,ne as l};
