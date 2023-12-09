import{a as I}from"./UKCA3OWL.js";import{Hb as d}from"./R7ESC43Z.js";import{i as T}from"./XYZAUIQ2.js";import{b as c}from"./ES4G5FSE.js";import{d as x}from"./FRAG5SMK.js";import{c as h}from"./CAPNT4IP.js";import{d as f}from"./YN4XY6JW.js";import{a as y}from"./IPAGS25B.js";import{f as M}from"./PQ35KENF.js";var a=M(y());var b=["teams.live.com","notion.so"],w=({buttonText:e,templateText:o,onBeforeShowContextMenu:s,iconButton:t,className:r})=>{let{t:n}=h(["common","client"]),{showFloatingContextMenuWithElement:p}=d(),l=u=>{if(u.currentTarget){let i=u.currentTarget,m=o||i.innerText||"";if(s){let g=s(m,i);i=g.target||i,m=g.template||m}p(i,m)}};return b.includes(f())?null:t?a.default.createElement(I,{className:r,title:n("client:sidebar__button__use_prompt"),onClick:l},a.default.createElement(c,{sx:{fontSize:16,color:"inherit"}})):a.default.createElement(T,{placement:"top",title:n("client:sidebar__button__use_prompt")},a.default.createElement(x,{className:r,sx:{p:"7px",minWidth:"unset"},variant:"outlined",onClick:l},a.default.createElement(c,{sx:{fontSize:16,color:"inherit"}})))};var C=e=>{try{let o=e.originalMessage;if(o){let s=o.metadata?.shareType||"normal",t=e.originalMessage?.content?.text||e.text;switch(s){case"normal":break;case"summary":o.metadata?.sourceWebpage?.title&&o.metadata.sourceWebpage.url&&(t=`${o.metadata.sourceWebpage.title}

`+t,t=`${t}

Source:
${o.metadata.sourceWebpage.url}`),t=t.replace(/####\s?([^\n]+)/g,"$1:"),t+=`

Powered by MaxAI.me`;break;case"search":{if(o?.metadata?.sources?.links){t=t.replace(/\[\[(\d+)\]\([^)]+\)\]/g,"[$1]");let r=o.metadata.sources.links,n=`

Citations:`;r.length>0&&r.forEach((p,l)=>{n+=`
[${l+1}] ${p.url}`}),t+=n}t+=`

Powered by MaxAI.me`}break;default:break}return t}else return e.text}catch{return e.text}},_=e=>e.extra.meta?.messageVisibleText||e.text,k=e=>e.text,F=async(e,o)=>{let s=e.title,t=e.messages||[],r=[];return t.forEach(n=>{n.type==="ai"?r.push("AI: "+C(n)):n.type==="user"?r.push("User: "+_(n)):(n.type==="system"||n.type==="third")&&o&&r.push(`${n.type==="system"?"System: ":"Third: "}`+k(n))}),`---------------------------------------------------------
${s} powered by MaxAI.me
---------------------------------------------------------

${r.join(`

`)}`};export{w as a,C as b,F as c};
