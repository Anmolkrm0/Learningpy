import{a as V}from"./LJGUHWGY.js";import{c as O}from"./BOMJP2FH.js";import{c as B}from"./NWQIMPPW.js";import{f as $}from"./2C24X2KU.js";import{b as D}from"./R4DOVXS6.js";import{aa as F,qa as I}from"./VAZXMTWI.js";import"./3ULVSIIZ.js";import"./JMXOINXE.js";import"./VTSHHT45.js";import"./DY5NX2CV.js";import"./3XSPDXYF.js";import"./XPQQBCXB.js";import{c as k,f as S}from"./JOBG3ISB.js";import{d as E}from"./CQO467EU.js";import"./L33QHTPD.js";import"./EYWU5WEI.js";import"./GQJKJJWP.js";import"./NDBRMG4E.js";import"./QIXLAUXQ.js";import"./6KDU3L24.js";import"./OBYCD3QX.js";import{a as _}from"./BXGPN2X7.js";import"./RXRC7KSS.js";import"./VMA5WMPP.js";import{a as p,u as M}from"./SYZGD7UF.js";import"./H3PWEBSP.js";import"./QZNWBGPK.js";import"./QZVUH6Z4.js";import"./6NCLE6FY.js";import"./TN74TYZV.js";import"./6LS5XNTR.js";import"./JBQIPS5C.js";import"./AN4BH4LP.js";import"./CVYR3XXR.js";import"./M6G54ME7.js";import"./SNNNIFZC.js";import"./DAZIVUKN.js";import{L as x,M as w,j as Y}from"./OKNPJCGL.js";import{c as P}from"./QPPETRF6.js";import"./OPO7MVAW.js";import{B as u}from"./2XMGLZMD.js";import{a as L}from"./64D36THL.js";import{a as X}from"./3JX3VARJ.js";import{f as h}from"./PQ35KENF.js";var C=h(L());var e=h(L());var c=h(X());var d=h(Y());var q=t=>{let[a,n]=(0,e.useState)(t);(0,e.useEffect)(()=>{n(t)},[t]),(0,e.useEffect)(()=>{let f=null;return a>0&&(f=setInterval(()=>{n(a-1e3)},1e3)),()=>clearInterval(f)},[a]);let i=Math.floor(a/(1e3*60*60)%24),o=Math.floor(a/(1e3*60)%60),m=Math.floor(a/1e3%60),s=`${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`,l=i>0?`${i} hour${i>1?"s":""}`:o>1?`${o} minutes`:"1 minute";return{formattedTime:s,timeLeft:a,isRunning:a>0,showHoursOrMinutes:l}},z=t=>e.default.createElement(_,{sx:{display:"flex",alignItems:"center"}},e.default.createElement(_,{sx:{minWidth:64}},e.default.createElement(M,{variant:"body2",color:"text.secondary"},t.label||`${Math.round(t.value)}%`)),e.default.createElement(_,{sx:{width:"100%",mr:1}},e.default.createElement(O,{variant:"determinate",...t}))),Q=()=>{let{t}=P(["settings","common"]),[a,n]=(0,e.useState)(30),[i,o]=(0,e.useState)(0),[m,s]=(0,e.useState)(0),{isRunning:l,formattedTime:f,timeLeft:b,showHoursOrMinutes:H}=q(i),G=async()=>{let r=a;await c.default.storage.local.set({[u]:JSON.stringify({start:(0,d.default)().utc(),end:(0,d.default)().utc().add(r,"minutes")})}),s(r*60*1e3),o(r*60*1e3)},N=async()=>{await c.default.storage.local.remove(u),o(0),s(0)};return w(()=>{(async()=>{try{let v=(await c.default.storage.local.get(u)||{})[u];if(v){let{start:W,end:j}=JSON.parse(v),J=(0,d.default)(W).utc(),T=(0,d.default)(j).utc(),K=T.diff(J,"seconds"),y=T.diff((0,d.default)().utc(),"seconds");y>0&&(o(y*1e3),s(K*1e3))}}catch{}})()}),x(()=>{(async()=>{try{(await c.default.storage.local.get(u)||{})[u]||(await c.default.storage.local.remove(u),o(0),s(0))}catch{}})()}),e.default.createElement(V,{title:t("settings:feature_card__chatgpt_stable_mode__title"),id:"chatgpt-stable-mode"},e.default.createElement(E,{sx:{bgcolor:r=>r.palette.mode==="dark"?"rgb(32, 33, 36)":"rgb(255,255,255)",p:"0 !important",borderRadius:"4px",border:r=>r.palette.mode==="dark"?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)","& > * + .MuiListItem-root":{borderTop:"1px solid",borderColor:"customColor.borderColor"}}},e.default.createElement(k,{onClick:async()=>{!l?(await G(),D("Stable Mode Enabled",`duration: ${a}`,{uuid:"dd385931-45f4-4de1-8e48-8145561b0f9d"})):await N()}},e.default.createElement(S,{primary:t("settings:feature_card__chatgpt_stable_mode__field_chatgpt_stable_mode__switch_title")}),e.default.createElement(B,{checked:l})),e.default.createElement($,null,e.default.createElement(S,{primary:l?t("settings:feature_card__chatgpt_stable_mode__field_chatgpt_stable_mode__slider_running_title")+` ${H}`:t("settings:feature_card__chatgpt_stable_mode__field_chatgpt_stable_mode__slider_title"),secondary:e.default.createElement(p,{mt:1},l?e.default.createElement(z,{value:b/m*100,label:f}):e.default.createElement(p,{px:2},e.default.createElement(Z,{defaultValue:a,onChange:r=>{n(r)}})))}))))},U=[{value:0,label:"0"},{value:30,label:"0.5h"},{value:60,label:"1h"},{value:90,label:"1.5h"},{value:120,label:"2h"},{value:150,label:"2.5h"},{value:180,label:"3h"},{value:210,label:"3.5h"},{value:240,label:"4h"},{value:270,label:"4.5h"},{value:300,label:"5h"},{value:330,label:"5.5h"},{value:360,label:"6h"},{value:390,label:"6.5h"},{value:420,label:"7h"},{value:450,label:"7.5h"},{value:480,label:"8h"}],Z=t=>{let{defaultValue:a,onChange:n,disabled:i}=t,[o,m]=(0,e.useState)(a||30);return e.default.createElement(F,{allowedRoles:["pro","pro_gift","new_user"],sceneType:"CHATGPT_STABLE_MODE",onPermission:async(s,l,[f,b])=>b>30?(o>30&&(m(30),n&&n(30)),{success:!1}):{success:!0}},e.default.createElement(I,{valueLabelFormat:s=>s>0?`${s} minutes`:"0",disabled:i,value:o,onChange:(s,l)=>{m(l),n&&n(l)},valueLabelDisplay:"auto",step:30,marks:U,min:30,max:480}))},A=Q;var R=()=>C.default.createElement(p,{spacing:1},C.default.createElement(A,null)),ye=R;export{ye as default};
