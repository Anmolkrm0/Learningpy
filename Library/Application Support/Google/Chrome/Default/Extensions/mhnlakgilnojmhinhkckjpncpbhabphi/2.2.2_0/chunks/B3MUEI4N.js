import{h as m}from"./3ULVSIIZ.js";import{c as T}from"./VTSHHT45.js";import{i as s}from"./GQJKJJWP.js";import{a as f}from"./BXGPN2X7.js";import{d as y}from"./VMA5WMPP.js";import{a as n,u as b}from"./SYZGD7UF.js";import{a as M}from"./64D36THL.js";import{f as A}from"./PQ35KENF.js";var o=A(M());var O=p=>{let{files:i,direction:e="row",size:l="medium",sx:S,TooltipProps:d,loadingTooltipTitle:v,disabledRemove:C=!1,onRemove:k,children:I,minWidth:c}=p,[w,g]=(0,o.useState)(""),a={tiny:24,small:24,medium:32,large:40}[l],P=(0,o.useMemo)(()=>i.some(t=>t.uploadStatus==="uploading"),[i]);return o.default.createElement(n,{direction:e,sx:{gap:1,...S}},i.map((t,F)=>{let z={tiny:16,small:16,medium:24,large:32}[l],u=l==="tiny"?2:-8,x=l==="tiny"?2:-8,h=w===t.id;return o.default.createElement(s,{placement:"top",open:P&&F===0,title:v,key:t.id,...d},o.default.createElement(n,{className:"max-ai-chat__icon-file-upload",direction:"row",position:"relative",sx:{width:Math.max(2.5*a,c||0),maxWidth:Math.max(2.5*a,c||0)},onMouseEnter:()=>{g(t.id)},onMouseLeave:()=>{g("")}},o.default.createElement(n,{width:a,height:a,justifyContent:"center",alignItems:"center",flexShrink:0,sx:{overflow:"hidden",borderRadius:"4px 0 0 4px"}},t.icon==="file"?o.default.createElement(n,{alignItems:"center",justifyContent:"center",width:"100%",height:"100%",sx:{bgcolor:r=>(r.palette.mode==="dark","rgb(142, 142, 159)"),color:r=>(r.palette.mode==="dark","rgba(255, 255, 255, 0.87)")}},o.default.createElement(m,{icon:"InsertDriveFile",sx:{color:"inherit",fontSize:`${z}px`}})):o.default.createElement("img",{width:a,height:a,alt:t.fileName,style:{},src:t.base64Data||t.blobUrl})),o.default.createElement(s,{placement:"top",title:t.uploadErrorMessage||t.fileName,...d},o.default.createElement(n,{sx:{overflow:"hidden",borderRadius:"0 4px 4px 0",bgcolor:r=>(r.palette.mode==="dark","rgb(247, 247, 248)")},flex:1,width:0,alignItems:"center",direction:"row"},o.default.createElement(b,{px:1,noWrap:!0,fontSize:"12px",width:"100%",fontWeight:600,textAlign:"left",sx:{color:r=>(r.palette.mode==="dark","rgba(0, 0, 0, 0.87)")}},t.fileName))),!h&&t.uploadStatus==="uploading"&&o.default.createElement(n,{top:u,right:x,position:"absolute",width:20,height:20,alignItems:"center",justifyContent:"center",borderRadius:"10px",sx:{bgcolor:r=>r.palette.mode==="dark"?"rgb(44, 44, 44)":"rgb(255, 255, 255)"}},o.default.createElement(T,{sx:{color:"primary.main"},thickness:4,variant:"determinate",value:t.uploadProgress,size:16})),!C&&h&&o.default.createElement(f,{top:u,right:x,position:"absolute"},o.default.createElement(s,{placement:"top",title:"Remove file"},o.default.createElement(y,{sx:{minWidth:"unset",p:0,color:"rgba(142,142,159, 1)","&:hover":{color:"primary.main"}},onClick:()=>{k?.(t)}},o.default.createElement(m,{icon:"CloseCircled",sx:{fontSize:"20px",color:"inherit"}}))))))}),I)},Q=O;function _(p,i){let e=p;if(i?.trim&&(e=e.trim()),i?.noQuotes&&(e=e.replaceAll('"',"")),i?.noCommand&&(e.includes("site:")&&(e=e.replace(/site:[^ ]+/g,"")),e.includes("page:")&&(e=e.replace(/page:[^ ]+/g,"")),e.includes(":"))){let l=/[a-zA-Z]+:[a-zA-Z]+/g;e=e.replace(l,"")}return i?.noSummaryTag&&(e=e.replaceAll("<summary>","").replaceAll("</summary>",""),e[0]===`
`&&(e=e.slice(1))),i?.noResponseTag&&(e=e.replaceAll("<response>","").replaceAll("</response>",""),e[0]===`
`&&(e=e.slice(1))),e}export{_ as a,Q as b};
