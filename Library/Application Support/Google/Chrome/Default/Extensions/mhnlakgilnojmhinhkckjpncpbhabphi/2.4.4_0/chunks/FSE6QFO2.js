import{c as S}from"./F7SGTV27.js";import{l as d}from"./FOUKVBQX.js";import{i as p}from"./XYZAUIQ2.js";import{a as b}from"./IPNS2UUO.js";import{d as T}from"./FRAG5SMK.js";import{a as l,u as y}from"./DRCUZC3I.js";import{a as M}from"./IPAGS25B.js";import{f as z}from"./PQ35KENF.js";var o=z(M());var O=m=>{let{files:i,direction:e="row",size:n="medium",sx:s,TooltipProps:c,loadingTooltipTitle:C,disabledRemove:k=!1,onRemove:v,children:I,minWidth:g}=m,[w,h]=(0,o.useState)(""),a={tiny:24,small:24,medium:32,large:40}[n],P=(0,o.useMemo)(()=>i.some(t=>t.uploadStatus==="uploading"),[i]);return o.default.createElement(l,{direction:e,sx:{gap:1,...s}},i.map((t,A)=>{let F={tiny:16,small:16,medium:24,large:32}[n],u=n==="tiny"?2:-8,x=n==="tiny"?2:-8,f=w===t.id;return o.default.createElement(p,{placement:"top",open:P&&A===0,title:C,key:t.id,...c},o.default.createElement(l,{className:"max-ai-chat__icon-file-upload",direction:"row",position:"relative",sx:{width:Math.max(2.5*a,g||0),maxWidth:Math.max(2.5*a,g||0)},onMouseEnter:()=>{h(t.id)},onMouseLeave:()=>{h("")}},o.default.createElement(l,{width:a,height:a,justifyContent:"center",alignItems:"center",flexShrink:0,sx:{overflow:"hidden",borderRadius:"4px 0 0 4px"}},t.icon==="file"?o.default.createElement(l,{alignItems:"center",justifyContent:"center",width:"100%",height:"100%",sx:{bgcolor:r=>(r.palette.mode==="dark","rgb(142, 142, 159)"),color:r=>(r.palette.mode==="dark","rgba(255, 255, 255, 0.87)")}},o.default.createElement(d,{icon:"InsertDriveFile",sx:{color:"inherit",fontSize:`${F}px`}})):o.default.createElement("img",{width:a,height:a,alt:t.fileName,style:{},src:t.base64Data||t.blobUrl})),o.default.createElement(p,{placement:"top",title:t.uploadErrorMessage||t.fileName,...c},o.default.createElement(l,{sx:{overflow:"hidden",borderRadius:"0 4px 4px 0",bgcolor:r=>(r.palette.mode==="dark","rgb(247, 247, 248)")},flex:1,width:0,alignItems:"center",direction:"row"},o.default.createElement(y,{px:1,noWrap:!0,fontSize:"12px",width:"100%",fontWeight:600,textAlign:"left",sx:{color:r=>(r.palette.mode==="dark","rgba(0, 0, 0, 0.87)")}},t.fileName))),!f&&t.uploadStatus==="uploading"&&o.default.createElement(l,{top:u,right:x,position:"absolute",width:20,height:20,alignItems:"center",justifyContent:"center",borderRadius:"10px",sx:{bgcolor:r=>r.palette.mode==="dark"?"rgb(44, 44, 44)":"rgb(255, 255, 255)"}},o.default.createElement(S,{sx:{color:"primary.main"},thickness:4,variant:"determinate",value:t.uploadProgress,size:16})),!k&&f&&o.default.createElement(b,{top:u,right:x,position:"absolute"},o.default.createElement(p,{placement:"top",title:"Remove file"},o.default.createElement(T,{sx:{minWidth:"unset",p:0,color:"rgba(142,142,159, 1)","&:hover":{color:"primary.main"}},onClick:()=>{v?.(t)}},o.default.createElement(d,{icon:"CloseCircled",sx:{fontSize:"20px",color:"inherit"}}))))))}),I)},E=O;function Z(m,i){let e=m;if(i?.trim&&(e=e.trim()),i?.noQuotes&&(e=e.replaceAll('"',"")),i?.matchSquareBracketContent){let n=/\[[^\]]+\]/g,s=e.match(n);s&&(e=s[0],e=e.replaceAll("[","").replaceAll("]",""))}if(i?.noCommand&&(e.includes("site:")&&(e=e.replace(/site:[^ ]+/g,"")),e.includes("page:")&&(e=e.replace(/page:[^ ]+/g,"")),e.includes(":"))){let n=/[a-zA-Z]+:[a-zA-Z]+/g;e=e.replace(n,"")}return i?.noSummaryTag&&(e=e.replaceAll("<summary>","").replaceAll("</summary>",""),e[0]===`
`&&(e=e.slice(1))),i?.noResponseTag&&(e=e.replaceAll("<response>","").replaceAll("</response>",""),e[0]===`
`&&(e=e.slice(1))),e}export{Z as a,E as b};
