import{a as T}from"./K5WZLO5R.js";import{a as x}from"./FIFUY6NU.js";import{g as S}from"./U6WUZGPQ.js";import{f as P}from"./TXJVG63N.js";import{f as v}from"./ONY4XELL.js";import{a as k}from"./DTPRD3UH.js";import"./STYZXNUC.js";import"./CE4P5R6G.js";import{ba as L}from"./R7ESC43Z.js";import"./F7SGTV27.js";import"./5QWZ7UE4.js";import"./FOUKVBQX.js";import"./NXGYST7J.js";import{f as C}from"./LP276KYG.js";import{d as h}from"./RO4X7EGV.js";import"./2N2SG5RC.js";import"./NNU75GHZ.js";import"./QJSKL7UD.js";import"./KXHDIDXQ.js";import"./XYZAUIQ2.js";import"./QONG524O.js";import"./ES4G5FSE.js";import"./6UCR6JSM.js";import"./IPNS2UUO.js";import"./FRAG5SMK.js";import"./HYW7LR6S.js";import"./6ER2OOH3.js";import{a as A}from"./DRCUZC3I.js";import"./RSO45DR6.js";import"./TY7U7FR6.js";import"./PF3XPTWR.js";import"./MWTIYFYH.js";import"./IQBPRLVE.js";import"./HEBGDMW5.js";import"./6LS5XNTR.js";import"./W2F53U5Z.js";import"./TYBXNNUH.js";import"./DUIWQHLB.js";import"./KG5SJQNS.js";import"./HQC5KEMG.js";import"./AAMCXCLO.js";import{c as o}from"./CAPNT4IP.js";import{a as g}from"./YN4XY6JW.js";import{H as I,a as d}from"./IPAGS25B.js";import"./3JX3VARJ.js";import{f as m}from"./PQ35KENF.js";var w=m(d());var b=m(d());var f=m(d());function M(l,{inputValue:t}){return l.filter(e=>{let a=e.label.toLowerCase(),i=e.value.toLowerCase(),r=t.toLowerCase();return a.includes(r)||i.includes(r)})}var V=l=>{let{label:t="Choose a language",defaultValue:e="",onChange:a=n=>{},sx:i}=l,{t:r}=o(["common"]),[s,_]=f.default.useState(()=>g.find(n=>n.value===e)||g[0]);return f.default.createElement(L,{sceneType:"AI_RESPONSE_LANGUAGE",allowedRoles:["elite","pro","pro_gift","new_user"],onPermission:async(n,u,[D,E])=>(E.value!==I&&(_(g[0]),a(g[0].value)),{success:!1}),TooltipProps:{placement:"right"},BoxProps:{sx:{maxWidth:"fit-content"}}},f.default.createElement(S,{noOptionsText:r("common:no_options"),disableClearable:!0,value:s,size:"small",sx:{width:160,...i},autoHighlight:!0,getOptionLabel:n=>n.label,options:g,onChange:(n,u)=>{_(u),a(u.value)},filterOptions:M,renderInput:n=>f.default.createElement(P,{...n,label:t,inputProps:{...n.inputProps,autoComplete:"new-password"}})}))},O=V;var H=()=>{let{userSettings:l,setUserSettings:t}=T(),{t:e}=o(["settings","common"]);return b.default.createElement(x,{title:e("settings:feature_card__ai_response_language__title"),id:"ai-response-language"},b.default.createElement(h,{sx:{bgcolor:a=>a.palette.mode==="dark"?"rgb(32, 33, 36)":"rgb(255,255,255)",p:"0 !important",borderRadius:"4px",border:a=>a.palette.mode==="dark"?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)"}},b.default.createElement(v,null,b.default.createElement(C,{primary:e("settings:feature_card__ai_response_language__field_ai_response_language__title"),secondary:e("settings:feature_card__ai_response_language__field_ai_response_language__description")}),l&&b.default.createElement(O,{sx:{flexShrink:0,width:220,ml:2},label:e("settings:feature_card__ai_response_language__field_ai_response_language__label"),defaultValue:l.language,onChange:async a=>{await t({...l,language:a})}}))))},U=H;var p=m(d());var c=m(d());var F={am:{label:"\u12A0\u121B\u122D\u129B",en_label:"Amharic"},ar:{label:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",en_label:"Arabic"},bg:{label:"\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",en_label:"Bulgarian"},bn:{label:"\u09AC\u09BE\u0982\u09B2\u09BE",en_label:"Bengali"},ca:{label:"Catal\xE0",en_label:"Catalan"},cs:{label:"\u010Ce\u0161tina",en_label:"Czech"},da:{label:"Dansk",en_label:"Danish"},de:{label:"Deutsch",en_label:"German"},el:{label:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",en_label:"Greek"},en:{label:"English",en_label:"English"},en_GB:{label:"English (UK)",en_label:"English (UK)"},en_US:{label:"English (US)",en_label:"English (US)"},es:{label:"Espa\xF1ol",en_label:"Spanish"},es_419:{label:"Espa\xF1ol (Latinoam\xE9rica)",en_label:"Spanish (Latin America)"},et:{label:"Eesti",en_label:"Estonian"},fa:{label:"\u0641\u0627\u0631\u0633\u06CC",en_label:"Persian"},fi:{label:"Suomi",en_label:"Finnish"},fil:{label:"Filipino",en_label:"Filipino"},fr:{label:"Fran\xE7ais",en_label:"French"},gu:{label:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0",en_label:"Gujarati"},he:{label:"\u05E2\u05D1\u05E8\u05D9\u05EA",en_label:"Hebrew"},he_IL:{label:"\u05E2\u05D1\u05E8\u05D9\u05EA (\u05D9\u05E9\u05E8\u05D0\u05DC)",en_label:"Hebrew (Israel)"},hi:{label:"\u0939\u093F\u0928\u094D\u0926\u0940",en_label:"Hindi"},hr:{label:"Hrvatski",en_label:"Croatian"},hy:{label:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576",en_label:"Armenian"},hu:{label:"Magyar",en_label:"Hungarian"},in:{label:"Bahasa Indonesia",en_label:"Indonesian"},id:{label:"Indonesia",en_label:"Indonesian"},it:{label:"Italiano",en_label:"Italian"},ja:{label:"\u65E5\u672C\u8A9E",en_label:"Japanese"},kn:{label:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",en_label:"Kannada"},ko:{label:"\uD55C\uAD6D\uC5B4",en_label:"Korean"},lt:{label:"Lietuvi\u0173",en_label:"Lithuanian"},lv:{label:"Latvie\u0161u",en_label:"Latvian"},ml:{label:"\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02",en_label:"Malayalam"},mr:{label:"\u092E\u0930\u093E\u0920\u0940",en_label:"Marathi"},ms:{label:"Melayu",en_label:"Malay"},nl:{label:"Nederlands",en_label:"Dutch"},no:{label:"Norsk",en_label:"Norwegian"},pl:{label:"Polski",en_label:"Polish"},pt_BR:{label:"Portugu\xEAs (Brasil)",en_label:"Portuguese (Brazil)"},pt_PT:{label:"Portugu\xEAs (Portugal)",en_label:"Portuguese (Portugal)"},ro:{label:"Rom\xE2n\u0103",en_label:"Romanian"},ru:{label:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",en_label:"Russian"},sk:{label:"Sloven\u010Dina",en_label:"Slovak"},sl:{label:"Sloven\u0161\u010Dina",en_label:"Slovenian"},sr:{label:"\u0421\u0440\u043F\u0441\u043A\u0438",en_label:"Serbian"},sv:{label:"Svenska",en_label:"Swedish"},sw:{label:"Kiswahili",en_label:"Swahili"},ta:{label:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",en_label:"Tamil"},te:{label:"\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",en_label:"Telugu"},th:{label:"\u0E44\u0E17\u0E22",en_label:"Thai"},tr:{label:"T\xFCrk\xE7e",en_label:"Turkish"},ua:{label:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",en_label:"Ukrainian"},uk:{label:"\u0627\u0631\u062F\u0648",en_label:"Urdu"},vi:{label:"Ti\u1EBFng Vi\u1EC7t",en_label:"Vietnamese"},zh_CN:{label:"\u7B80\u4F53\u4E2D\u6587",en_label:"SimplifiedChinese"},zh_TW:{label:"\u7E41\u4F53\u4E2D\u6587",en_label:"TraditionalChinese"}};function W(l,{inputValue:t}){return l.filter(e=>{let a=e.label.toLowerCase(),i=e.origin?.en_label?.toLowerCase()||"",r=e.value.toLowerCase(),s=t.toLowerCase();return a.includes(s)||r.includes(s)||i.includes(s)})}var G=Object.keys(F).map(l=>{let t=F[l];return{label:t.label,value:l,origin:{value:l,...t}}}),y={label:"English",value:"en",origin:{value:"en",label:"English",en_label:"English"}},z=l=>{let{label:t="Choose a language",defaultValue:e="",onChange:a=n=>{},sx:i}=l,{t:r}=o(["common"]),[s,_]=c.default.useState(()=>G.find(n=>n.value===e)||y);return c.default.createElement(L,{sceneType:"PREFERRED_LANGUAGE",allowedRoles:["elite","pro","pro_gift","new_user","free"],onPermission:async(n,u,[D,E])=>(E.value!==y.value&&(_(y),a(y.value)),{success:!1}),TooltipProps:{placement:"right"},BoxProps:{sx:{maxWidth:"fit-content"}}},c.default.createElement(S,{noOptionsText:r("common:no_options"),disableClearable:!0,value:s,size:"small",sx:{width:160,...i},autoHighlight:!0,getOptionLabel:n=>n.label,options:G,onChange:(n,u)=>{_(u),a(u.value)},filterOptions:W,renderInput:n=>c.default.createElement(P,{...n,label:t,inputProps:{...n.inputProps,autoComplete:"new-password"}})}))},N=z;var K=()=>{let{userSettings:l,setUserSettings:t}=T(),{t:e}=o(["settings","common","prompt"]);return p.default.createElement(x,{title:e("settings:feature_card__preferred_language__title"),id:"ai-response-language"},p.default.createElement(h,{sx:{bgcolor:a=>a.palette.mode==="dark"?"rgb(32, 33, 36)":"rgb(255,255,255)",p:"0 !important",borderRadius:"4px",border:a=>a.palette.mode==="dark"?"1px solid rgba(255, 255, 255, 0.12)":"1px solid rgba(0, 0, 0, 0.12)"}},p.default.createElement(v,null,p.default.createElement(C,{primary:e("settings:feature_card__preferred_language__field_preferred_language_title"),secondary:e("settings:feature_card__preferred_language__field_preferred_language_description")}),l&&p.default.createElement(N,{sx:{flexShrink:0,width:220,ml:2},label:e("settings:feature_card__preferred_language__field_preferred_language_label"),defaultValue:l.preferredLanguage,onChange:async a=>{await t({...l,preferredLanguage:a}),await k("textSelectPopupButton")}}))))},B=K;var j=()=>w.default.createElement(A,{spacing:1},w.default.createElement(B,null),w.default.createElement(U,null)),Ae=j;export{Ae as default};
