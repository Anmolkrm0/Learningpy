(self.webpackChunk=self.webpackChunk||[]).push([[5275],{12989:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(38983),r=n(5114),s=n(624);class a extends s.J{constructor(){super(),this._popoverActionsHandler=i.h.create(r.none)}setPopoverActionsHandler(e){this._popoverActionsHandler.set(r.some(e))}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}}},517:(e,t,n)=>{n.d(t,{z:()=>s});var i=n(5114),r=n(38983);class s{constructor(){this.activePopoverStack=r.h.create(i.none),this.activePopoverView=r.h.create(i.none),this._popoverActionsHandler=r.h.create(i.none)}addPopover(e,t){}getInteractionActions(e,t,n){return[]}removePopover(e,t){}switchView(e){}get popoverActionsHandlerAtom(){return this._popoverActionsHandler}setPopoverActionsHandler(e){}}},86782:(e,t,n)=>{n.d(t,{U:()=>T});var i=n(38983),r=n(72812),s=n(14454),a=n(57757),o=n(5114),d=n(31668),c=n(22232),l=n(71249),u=n(73975),p=n(57050),h=n(40151),g=n(95195),m=n(8125);class v{constructor(){this.feed=h.E,this.currentFeed=o.none,this.onFeedRemove=h.E,this.onFeedEmpty=h.E,this.header=h.E,this.footer=h.E,this.pushFeed=()=>g.right(null),this.popFeed=m.Q1,this.focusCard=()=>g.right(null),this.notifyCardFocused=m.Q1,this.dispose=m.Q1}}var f,A=n(33194),b=n(39040),w=n(55818),_=n(8901),y=n(32952),I=n(9922),C=n(41398),S=n(77176),k=n(93508),G=n(19751),P=n(23063),x=n(69627),H=n(69693),E=n(31528),U=n(26328),M=n(66268);class T{constructor(e,t,n,s,a){this.sduiManager=e,this.sduiFeedbackService=t,this.environment=n,this.capiClient=s,this.integrationModel=a,this._focusedItem=i.h.create(o.none),this._sduiInlineCardActions=new y.xQ,this._subs=new I.w.Keeper,this.focusCard=e=>{this._focusedItem.set(o.some(e))},this.handleSduiCardAction=(e,t,n)=>{this._sduiInlineCardActions.next({cardAction:e,cardModel:t,match:n})},this.handleGButtonPopoverAction=e=>{this._sduiViewModel.sduiActionEvents.next(e),(0,p.zG)(T.getSduiFeedActions(e.actions),o.map((t=>this.integrationModel.openAssistant({type:E.WT.sdui,action:{...e,actions:t,type:M.lY.Type.sduiCardAction}}))))},this.dispose=()=>this._subs.dispose(),this._sduiViewModel=new r.x(t,e,new v,s,this._focusedItem.view(o.map((e=>e.id))));const d=this._sduiViewModel.sduiActionEvents.pipe(C.M(this._sduiInlineCardActions.pipe(S.U(o.some),k.O(o.none)))).subscribe((([e,t])=>this._nativeHandling(e,(0,p.zG)(t,o.map((e=>e.match))),(0,p.zG)(t,o.map((e=>e.cardModel)))))),c=this._sduiInlineCardActions.pipe(G.skipBy(f.eq)).subscribe((({cardAction:e})=>this._sduiViewModel.sduiActionEvents.next(e)));this._subs.push(d,c,this._sduiViewModel)}_nativeHandling({actions:e,cardId:t,sourceId:n,scope:i},r,s){(0,p.zG)(T.getSduiFeedActions(e),o.map((e=>{(0,p.zG)(s,o.map((r=>{r.onOpenExpandedViewBySduiAction(A.Oe.create(e,t,n,i))})))}))),e.forEach((e=>{switch(e.type){case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"selectAlternative":case"highlightAlert":case"openPerformanceScore":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"showHighlights":case"hideHighlights":case"notify":case"switchView":case"newRevision":case"interactPopover":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":return;case"closePopover":return void this.integrationModel.closePopover(e.rootPopoverId);case"openLink":return void this.environment.actions.openPopup(new d.Z(e.url));case"copyToClipboard":return void(0,p.zG)((0,a.v)(e.text),P.q(1)).subscribe();case"stopApplyingAlerts":case"upgradeToPremium":return(0,p.zG)(s,o.map((e=>e.openPlanComparisonPage({forceUtmCampaign:_.L.Place.assistantCardList})))),void(0,p.zG)(r,o.map((e=>e.hide())));case"applyAlerts":return void(0,p.zG)(r,o.map((t=>{null!=t.alert&&((0,p.zG)((0,b.UQ)(t.alert,t.plainText),(e=>new w.U_(e,(e=>t.replace(null!=e?e:"",!1)))),(t=>(0,p.zG)(o.fromNullable(t.replacements[e.alternativeIndex]),o.map((e=>t.getOnReplace(e)()))))),t.hide())})));case"closeCard":case"removeRoot":return void(0,p.zG)(r,o.map((e=>e.hide())));case"removeAlerts":return void(0,p.zG)(r,o.map((e=>{e.ignore(),e.hide()})));case"openGrammarlyGo":return void(0,p.zG)(o.sequenceArray([s,r]),o.map((([e,t])=>{if(t.alert&&(0,x.t)(t.alert.patternName)){const n=(0,b.UQ)(t.alert,t.plainText);if(n.length>0&&n[0].newText){const i=n[0].newText;e.onOpenGrammarlyGo({mode:H.w.pushRewrite,writingExpertContext:{alertId:t.alert.id,alertPname:t.alert.patternName,originalText:t.alert.text,replacementText:i},transformRange:t.alert.transformRange})}else e.onOpenGrammarlyGo({mode:H.w.ideation})}else e.onOpenGrammarlyGo({mode:H.w.ideation})})));default:(0,c.L0)(e)}}))}}T.getSduiFeedActions=(0,p.ls)(l.hX((e=>"popAssistantFeed"===e.type||"pushAssistantFeed"===e.type||"focusAssistantCard"===e.type)),U.nI),function(e){e.eq=u.MW({cardAction:s.t.eq})}(f||(f={}))},17232:(e,t,n)=>{n.r(t),n.d(t,{createSduiInlineEngine:()=>H,default:()=>E});var i=n(5114),r=n(21038),s=n(24055),a=n(12054),o=n(78929),d=n(81531),c=n(46680),l=n(26393),u=n(92843),p=n(9922),h=n(93508),g=n(16118),m=n(77176),v=n(28811),f=n(57050);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(s.push(i.value),!t||s.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._state=new Map,this._subs=new p.w.Keeper,this._log=d.C8.Logging.getLogger("SDUIInlineManager",c.i.TRACE,c.T.Manager.getColor()),this._subs.push(t.pipe(h.O(v.a.empty),g.G(),m.U((function(e){var t=w(e,2),n=t[0],i=t[1];return v.a.diff(n,i)})),m.U((function(e){return n._processSDUIItems(e)}))).subscribe())}var t,n,r;return t=e,(n=[{key:"getInlineItemForAlert",value:function(e){return i.fromNullable(this._state.get(e))}},{key:"_processSDUIItems",value:function(e){var t=this;(0,f.zG)(e,u.v.forEach((function(e){if(y(e)){var n=t;t._log.trace("inline item removed",{alertIds:e.alertIds,itemId:e.id}),e.alertIds.forEach((function(e){return n._state.delete(e)}))}}),(function(e,n){if(y(n)){var i=t;t._log.trace("inline item updated",{alertIds:n.alertIds,itemId:n.id}),n.alertIds.forEach((function(e){return i._state.set(e,n)}))}}),(function(e){if(y(e)){var n=t;t._log.trace("inline item added",{alertIds:e.alertIds,itemId:e.id}),e.alertIds.forEach((function(t){return n._state.set(t,e)}))}})))}},{key:"dispose",value:function(){this._subs.dispose()}}])&&b(t.prototype,n),r&&b(t,r),e}(),y=function(e){return(0,f.zG)(l.ab.findFirst(e.content,"inlineCard"),i.isSome)},I=n(31903),C=n(85985),S=n(80358),k=n(33194),G=n(86782),P=n(12989),x=n(517);const H=(e,t,n,d,c,l,u,h=!1)=>{const g=new p.w.Keeper,v=(0,f.ls)((e=>e.toString()),n,i.fromNullable,i.map((e=>r.j.AlertId.from(e.id)))),A=e.capiEvents.pipe(C.h(S.h.is("sdui_add","sdui_remove","sdui_update")),C.h((e=>"sdui_remove"===e.kind||k.D1.InlineCard.isInlineCard(e.sdui)||k.D1.StrongAlertRef.isStrongAlertRefUpgradeHookContent(e.sdui)||k.D1.GButton.isGButtonContent(e.sdui)||k.D1.PopoverStack.isPopoverStack(e.sdui))),C.h(s.e.isSduiEvent),m.U(a.al.fromSource(a.i5.CAPI))),b=h?new P.G:new x.z,w=new o.G(A,v,b),y=new _(w.state),H=new I.Q({sendUserAction:d}),E=new G.U(w,H,c,l,u);return b.setPopoverActionsHandler(E),g.push(t.subscribe((e=>w.notifyAlertsChanged())),e.capiEvents.pipe(C.h(S.h.is("session_started")),C.h((e=>e.isNewSession))).subscribe((e=>w.onSessionStarted())),e.capiEvents.pipe(C.h(S.h.is("finish")),C.h((e=>0===e.revision))).subscribe((e=>w.onFirstCheckingFinished())),w,y,E),{sduiBufferService:e,sduiManager:w,sduiInlineManager:y,sduiFeedbackService:H,inlineCardViewModel:E,dispose:()=>{g.dispose()}}},E={createSduiInlineEngine:H}},8901:(e,t,n)=>{n.d(t,{L:()=>i,x:()=>I});var i,r=n(40327),s=n(75099),a=n(47612),o=n(75982),d=n(66896),c=n(74660),l=n(6782),u=n(4390),p=n(2844),h=n(77176),g=n(98403),m=n(5114),v=n(8125),f=n(95574),A=n(95195),b=n(38983),w=n(81531),_=n(20641),y=n(44358);!function(e){let t;!function(e){e.gdocsSidebarCardList="gdocsSidebarCardList",e.gdocsGoals="gdocsGoals",e.assistantCardList="assistantCardList",e.extensionSettingsAssistant="extensionSettingsAssistant",e.toneSuggestion="toneSuggestion"}(t=e.Place||(e.Place={}))}(i||(i={}));class I{constructor(e,t,n,i){this._alertsList=e,this._lensState=t,this._maxAlertCategories=n,this.gnar=i,this._log=w.C8.Logging.getLogger("UpgradeViewModel"),this._advancedAlerts=b.h.create([]),this.advancedAlerts=this._advancedAlerts.view((e=>e.length>0?m.some({count:e.length,alerts:()=>this._formatLiteAlerts(I._getGroupedLiteAlerts(e))}):m.none)),this._formatLiteAlerts=e=>{const t=e.slice(0,this._maxAlertCategories),n=e.slice(this._maxAlertCategories).map((e=>e.count)).reduce(v.Sm,0);return n>0?[...t,{group:"",category:"",categoryHuman:"more...",count:n,lensName:"",bundleInfo:m.none}]:t},this._connectionId=o._.createWithRandomId("sidebar"),p.aj([this._lensState.view("currentLens").view("id").view(d.R.isPriority).view((e=>e?e=>c.bZ.isRegistered(e)&&c.bZ.isPremium(e)&&c.bZ.isPriority(e):e=>c.bZ.isRegistered(e)&&c.bZ.isPremium(e))),this._alertsList.state]).pipe(h.U((([e,t])=>u.p.reduce([],((t,{alert:n})=>(e(n)&&t.push(n),t)))(t)))).subscribe(g.wW(this._advancedAlerts))}trackUpgradeButtonShow(e){const t=this._advancedAlerts.get();(0,y.n)(this.gnar,{placement:e.placement,bannerType:e.bannerType,advancedAlerts:t,upgradeHookName:e.upgradeHookName,upgradeHookSlot:e.upgradeHookSlot}),this.gnar.assistantExpandedUpgradeHookShow(t.length,100),(0,_.Tb)().upgradeHooks.showUpgradeHook(e.upgradeHookName,e.upgradeHookSlot)}trackUpgradeButtonClick(e){const t=this._advancedAlerts.get();(0,y.Q)(this.gnar,{placement:e.placement,bannerType:e.bannerType,advancedAlerts:t,upgradeHookName:e.upgradeHookName,upgradeHookSlot:e.upgradeHookSlot}),(0,_.Tb)().upgradeHooks.clickUpgradeHook(e.upgradeHookName,e.upgradeHookSlot)}openUpgradeUrl(e){(0,r.pipe)(f.vM((()=>{(0,a.P4)().openSubscriptionDialog({currentAlerts:this._getCapiAlerts(),isAnonymousUser:!1,isFromEmail:!1,forceUtmCampaign:e})})),A.getOrElse((e=>this._log.fatal("unexpected error on open upgrade page",e))))}_getCapiAlerts(){return this._advancedAlerts.get().map((e=>(0,s.IM)(I._toRawAlertWithPossibleWrongId(e),o.Q.create(this._connectionId,0))))}static _getGroupedLiteAlerts(e){return l.Q.group(e.map((e=>e.toLiteAlert())))}static _toRawAlertWithPossibleWrongId(e){return{...e.toRawAlert(),id:(0,r.pipe)(e.rawId,m.getOrElse((()=>e.id)))}}}},57757:(e,t,n)=>{n.d(t,{v:()=>s});var i=n(44586),r=n(95195);function s(e,t=self){return new i.y((n=>{var i,s;(null===(s=null===(i=t.navigator)||void 0===i?void 0:i.clipboard)||void 0===s?void 0:s.writeText)?t.navigator.clipboard.writeText(e).then((()=>n.next(r.right(void 0)))).catch((e=>n.next(r.left(new Error(String(e)))))):n.next(r.left(new Error("The Clipboard API is not available.")))}))}}}]);