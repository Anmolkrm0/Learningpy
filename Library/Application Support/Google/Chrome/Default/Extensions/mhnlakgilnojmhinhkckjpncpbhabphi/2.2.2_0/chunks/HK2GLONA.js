import{c as s,h as i}from"./GDTY5ONR.js";import{a as o}from"./SYZGD7UF.js";import{a as C}from"./64D36THL.js";import{f as b}from"./PQ35KENF.js";var e=b(C());var h=d=>{let{options:t,maxWidth:n,defaultValue:p,onChange:u,sx:m}=d,[g,x]=(0,e.useState)(()=>p||t[0].value),c=r=>{x(r),u?.(r)};return e.default.createElement(o,{direction:"row",alignItems:"stretch",gap:3,sx:{...m}},t.map(r=>{let l=g===r.value;return e.default.createElement(o,{key:r.value,sx:{borderRadius:"4px",border:"1px solid",borderColor:"customColor.borderColor",maxWidth:n,bgcolor:a=>a.palette.mode==="dark"?"rgb(32, 33, 36)":"rgb(255,255,255)",flex:"1 1 0",cursor:"pointer",...l&&{borderColor:"primary.main",bgcolor:a=>a.palette.mode==="dark"?"rgb(56, 56, 56)":"rgb(235, 227, 345)"}},onClick:()=>{c(r.value)}},e.default.createElement(s,{sx:{m:0},value:r.value,control:e.default.createElement(i,{checked:l,sx:{p:1}}),label:r.label}),r.image&&e.default.createElement(o,{sx:{p:1,"& img":{width:"100%",height:"auto",boxShadow:"0px 1px 7px 2px rgba(0, 0, 0, 0.10)",userSelect:"none",userDrag:"none",pointerEvents:"none"}}},e.default.createElement("img",{src:r.image,alt:r.label})))}))},G=h;export{G as a};
