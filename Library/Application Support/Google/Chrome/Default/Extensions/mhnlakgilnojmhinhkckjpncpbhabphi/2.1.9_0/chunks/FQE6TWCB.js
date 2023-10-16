import{b as ee}from"./SG4NMKLB.js";import{a as f}from"./GGD6JS33.js";import{a as Z}from"./EYWU5WEI.js";import{a as te}from"./L33QHTPD.js";import{D as X,q as K,v as Q}from"./FIOVDIPM.js";import{B as L,E as T,b as z,e as r,f as H,i as C,j as $,l as ve,m as q}from"./QZVUH6Z4.js";import{a as J}from"./QPPETRF6.js";import{a as Y}from"./64D36THL.js";import{f as s}from"./PQ35KENF.js";H();var i=s(Y());var S=s(J()),I=s(K());var v=s(ve());var oe=s(z()),se=s(q());function re(e){return(0,se.default)("MuiListItem",e)}var xe=(0,oe.unstable_generateUtilityClasses)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),a=xe;H();var R=s(Y());var ce=s(J()),pe=s(K());var ne=s(z()),ie=s(q());function ae(e){return(0,ie.default)("MuiListItemSecondaryAction",e)}var Ie=(0,ne.unstable_generateUtilityClasses)("MuiListItemSecondaryAction",["root","disableGutters"]),Ae=Ie;var le=s($()),he=["className"],Le=e=>{let{disableGutters:t,classes:o}=e;return(0,pe.unstable_composeClasses)({root:["root",t&&"disableGutters"]},ae,o)},Re=T("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>r({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),de=R.forwardRef(function(t,o){let n=L({props:t,name:"MuiListItemSecondaryAction"}),{className:c}=n,p=C(n,he),m=R.useContext(f),u=r({},n,{disableGutters:m.disableGutters}),b=Le(u);return(0,le.jsx)(Re,r({className:(0,ce.default)(b.root,c),ownerState:u,ref:o},p))});de.muiName="ListItemSecondaryAction";var U=de;var x=s($()),G=s($()),Se=["className"],Ne=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Oe=(e,t)=>{let{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},je=e=>{let{alignItems:t,button:o,classes:n,dense:c,disabled:p,disableGutters:m,disablePadding:u,divider:b,hasSecondaryAction:P,selected:N}=e;return(0,I.unstable_composeClasses)({root:["root",c&&"dense",!m&&"gutters",!u&&"padding",b&&"divider",p&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",P&&"secondaryAction",N&&"selected"],container:["container"]},re,n)},_e=T("div",{name:"MuiListItem",slot:"Root",overridesResolver:Oe})(({theme:e,ownerState:t})=>r({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&r({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${ee.root}`]:{paddingRight:48}},{[`&.${a.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${a.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,v.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${a.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,v.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${a.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,v.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,v.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),$e=T("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),Ue=i.forwardRef(function(t,o){let n=L({props:t,name:"MuiListItem"}),{alignItems:c="center",autoFocus:p=!1,button:m=!1,children:u,className:b,component:P,components:N={},componentsProps:M={},ContainerComponent:k="li",ContainerProps:{className:me}={},dense:E=!1,disabled:V=!1,disableGutters:O=!1,disablePadding:ue=!1,divider:ye=!1,focusVisibleClassName:fe,secondaryAction:F,selected:be=!1,slotProps:Pe={},slots:ge={}}=n,Ce=C(n.ContainerProps,Se),Te=C(n,Ne),w=i.useContext(f),j=i.useMemo(()=>({dense:E||w.dense||!1,alignItems:c,disableGutters:O}),[c,w.dense,E,O]),_=i.useRef(null);Z(()=>{p&&_.current&&_.current.focus()},[p]);let y=i.Children.toArray(u),B=y.length&&te(y[y.length-1],["ListItemSecondaryAction"]),A=r({},n,{alignItems:c,autoFocus:p,button:m,dense:j.dense,disabled:V,disableGutters:O,disablePadding:ue,divider:ye,hasSecondaryAction:B,selected:be}),D=je(A),W=Q(_,o),h=ge.root||N.Root||_e,g=Pe.root||M.root||{},l=r({className:(0,S.default)(D.root,g.className,b),disabled:V},Te),d=P||"li";return m&&(l.component=P||"div",l.focusVisibleClassName=(0,S.default)(a.focusVisible,fe),d=X),B?(d=!l.component&&!P?"div":d,k==="li"&&(d==="li"?d="div":l.component==="li"&&(l.component="div")),(0,x.jsx)(f.Provider,{value:j,children:(0,G.jsxs)($e,r({as:k,className:(0,S.default)(D.container,me),ref:W,ownerState:A},Ce,{children:[(0,x.jsx)(h,r({},g,!(0,I.isHostComponent)(h)&&{as:d,ownerState:r({},A,g.ownerState)},l,{children:y})),y.pop()]}))})):(0,x.jsx)(f.Provider,{value:j,children:(0,G.jsxs)(h,r({},g,{as:d,ref:W},!(0,I.isHostComponent)(h)&&{ownerState:r({},A,g.ownerState)},l,{children:[y,F&&(0,x.jsx)(U,{children:F})]}))})}),Ge=Ue;export{re as a,a as b,ae as c,Ae as d,U as e,Ge as f};
