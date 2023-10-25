import{K as hi}from"./624UJDNS.js";import{a as Ai}from"./3JX3VARJ.js";import{c as yi,f as fi}from"./PQ35KENF.js";var vi=yi((N,D)=>{(function(p,u){"use strict";var F="1.0.35",R="",oi="?",M="function",x="undefined",j="object",B="string",ai="major",e="model",a="name",i="type",o="vendor",r="version",h="architecture",E="console",b="mobile",n="tablet",m="smarttv",_="wearable",W="embedded",G=350,I="Amazon",O="Apple",ri="ASUS",ti="BlackBerry",y="Browser",P="Chrome",gi="Edge",U="Firefox",C="Google",si="Huawei",H="LG",X="Microsoft",ni="Motorola",q="Opera",Y="Samsung",bi="Sharp",z="Sony",Oi="Viera",Z="Xiaomi",$="Zebra",wi="Facebook",li="Chromium OS",ci="Mac OS",ki=function(w,c){var s={};for(var d in w)c[d]&&c[d].length%2===0?s[d]=c[d].concat(w[d]):s[d]=w[d];return s},L=function(w){for(var c={},s=0;s<w.length;s++)c[w[s].toUpperCase()]=w[s];return c},di=function(w,c){return typeof w===B?S(c).indexOf(S(w))!==-1:!1},S=function(w){return w.toLowerCase()},xi=function(w){return typeof w===B?w.replace(/[^\d\.]/g,R).split(".")[0]:u},J=function(w,c){if(typeof w===B)return w=w.replace(/^\s\s*/,R),typeof c===x?w:w.substring(0,G)},T=function(w,c){for(var s=0,d,k,v,l,t,g;s<c.length&&!t;){var Q=c[s],mi=c[s+1];for(d=k=0;d<Q.length&&!t&&Q[d];)if(t=Q[d++].exec(w),t)for(v=0;v<mi.length;v++)g=t[++k],l=mi[v],typeof l===j&&l.length>0?l.length===2?typeof l[1]==M?this[l[0]]=l[1].call(this,g):this[l[0]]=l[1]:l.length===3?typeof l[1]===M&&!(l[1].exec&&l[1].test)?this[l[0]]=g?l[1].call(this,g,l[2]):u:this[l[0]]=g?g.replace(l[1],l[2]):u:l.length===4&&(this[l[0]]=g?l[3].call(this,g.replace(l[1],l[2])):u):this[l]=g||u;s+=2}},K=function(w,c){for(var s in c)if(typeof c[s]===j&&c[s].length>0){for(var d=0;d<c[s].length;d++)if(di(c[s][d],w))return s===oi?u:s}else if(di(c[s],w))return s===oi?u:s;return w},_i={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ui={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},pi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,r],[/opios[\/ ]+([\w\.]+)/i],[r,[a,q+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[a,q]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[a,"UC"+y]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+y],r],[/\bfocus\/([\w\.]+)/i],[r,[a,U+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[a,q+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[a,q+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[a,"MIUI "+y]],[/fxios\/([-\w\.]+)/i],[r,[a,U]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360 "+y]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 "+y],r],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[a,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,wi],r],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[a,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[a,P+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,P+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[a,"Android "+y]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[r,K,_i]],[/(webkit|khtml)\/([\w\.]+)/i],[a,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[a,U+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[a,r],[/(cobalt)\/([\w\.]+)/i],[a,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,S]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,R,S]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,S]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,Y],[i,n]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,Y],[i,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,O],[i,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,O],[i,n]],[/(macintosh);/i],[e,[o,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,bi],[i,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,si],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,si],[i,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,Z],[i,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,Z],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,ni],[i,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,ni],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,H],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,H],[i,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,b]],[/(pixel c)\b/i],[e,[o,C],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,C],[i,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,z],[i,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,z],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,I],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,I],[i,b]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,ti],[i,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,ri],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,ri],[i,b]],[/(nexus 9)/i],[e,[o,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,b]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,n]],[/(surface duo)/i],[e,[o,X],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,b]],[/(u304aa)/i],[e,[o,"AT&T"],[i,b]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,b]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,b]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,b]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,b]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[o,e,[i,b]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,X],[i,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,$],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,$],[i,b]],[/smart-tv.+(samsung)/i],[o,[i,m]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,Y],[i,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,H],[i,m]],[/(apple) ?tv/i],[o,[e,O+" TV"],[i,m]],[/crkey/i],[[e,P+"cast"],[o,C],[i,m]],[/droid.+aft(\w)( bui|\))/i],[e,[o,I],[i,m]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,bi],[i,m]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,z],[i,m]],[/(mitv-\w{5}) bui/i],[e,[o,Z],[i,m]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,J],[e,J],[i,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,m]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,E]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,E]],[/(playstation [345portablevi]+)/i],[e,[o,z],[i,E]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,X],[i,E]],[/((pebble))app/i],[o,e,[i,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,O],[i,_]],[/droid.+; (glass) \d/i],[e,[o,C],[i,_]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,$],[i,_]],[/(quest( 2| pro)?)/i],[e,[o,wi],[i,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,W]],[/(aeobc)\b/i],[e,[o,I],[i,W]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,b]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[a,gi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[a,[r,K,ui]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[a,"Windows"],[r,K,ui]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,ci],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,r],[/\(bb(10);/i],[r,[a,ti]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[a,U+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[a,P+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,li],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,r],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,r]]},f=function(w,c){if(typeof w===j&&(c=w,w=u),!(this instanceof f))return new f(w,c).getResult();var s=typeof p!==x&&p.navigator?p.navigator:u,d=w||(s&&s.userAgent?s.userAgent:R),k=s&&s.userAgentData?s.userAgentData:u,v=c?ki(pi,c):pi,l=s&&s.userAgent==d;return this.getBrowser=function(){var t={};return t[a]=u,t[r]=u,T.call(t,d,v.browser),t[ai]=xi(t[r]),l&&s&&s.brave&&typeof s.brave.isBrave==M&&(t[a]="Brave"),t},this.getCPU=function(){var t={};return t[h]=u,T.call(t,d,v.cpu),t},this.getDevice=function(){var t={};return t[o]=u,t[e]=u,t[i]=u,T.call(t,d,v.device),l&&!t[i]&&k&&k.mobile&&(t[i]=b),l&&t[e]=="Macintosh"&&s&&typeof s.standalone!==x&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[a]=u,t[r]=u,T.call(t,d,v.engine),t},this.getOS=function(){var t={};return t[a]=u,t[r]=u,T.call(t,d,v.os),l&&!t[a]&&k&&k.platform!="Unknown"&&(t[a]=k.platform.replace(/chrome os/i,li).replace(/macos/i,ci)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return d},this.setUA=function(t){return d=typeof t===B&&t.length>G?J(t,G):t,this},this.setUA(d),this};f.VERSION=F,f.BROWSER=L([a,r,ai]),f.CPU=L([h]),f.DEVICE=L([e,o,i,E,b,m,n,_,W]),f.ENGINE=f.OS=L([a,r]),typeof N!==x?(typeof D!==x&&D.exports&&(N=D.exports=f),N.UAParser=f):typeof define===M&&define.amd?define(function(){return f}):typeof p!==x&&(p.UAParser=f);var A=typeof p!==x&&(p.jQuery||p.Zepto);if(A&&!A.ua){var V=new f;A.ua=V.getResult(),A.ua.get=function(){return V.getUA()},A.ua.set=function(w){V.setUA(w);var c=V.getResult();for(var s in c)A.ua[s]=c[s]}}})(typeof window=="object"?window:N)});var ii=fi(vi()),ei=fi(Ai()),Ei=!0,Ti=(p,u="",F)=>fetch(hi+"/app/send_notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({env:Ei?"prod":"dev",title:`MaxAI: ${p}`,message:u,...F})}).then().catch(),Ni=async()=>{let{getBrowser:p}=new ii.UAParser;await ei.default.storage.local.set({MAXAI_BROWSER_INFO:JSON.stringify(p())})},Ri=async()=>{let{getBrowser:p}=new ii.UAParser,u=await ei.default.storage.local.get("MAXAI_BROWSER_INFO");return u.MAXAI_BROWSER_INFO?JSON.parse(u.MAXAI_BROWSER_INFO):p()};export{vi as a,Ti as b,Ni as c,Ri as d};
