(self.webpackChunk=self.webpackChunk||[]).push([[7725],{15752:(e,t,i)=>{i.r(t),i.d(t,{ToneAIFeature:()=>w});var n=i(40327),s=i(20236),r=i(48015),l=i(74660),o=i(44586),a=i(14601),u=i(85985),d=i(77176),A=i(78674),c=i(93508),b=i(16118),p=i(41398),g=i(60797),T=i(17594),_=i(66268),h=i(77610),I=i(35416),v=i(83078),U=i(5114);class w{constructor(e,t,i){this._alertStateService=e,this._getSessionUuid=t,this._gnar=i}initSingleCardAssistantActionsProcessing(e,t){return new o.y((()=>{const i=new a.w;return this._subscribeToCommonActions(e,t,i),()=>i.unsubscribe()}))}initAssistantCardActionsProcessing(e,t,i,s,r){return new o.y((()=>{const l=new a.w;this._subscribeToCommonActions(t,r,l),l.add(w._getToneAIAlertObservable(s.pipe(u.h(h.i.isToneAIItem),d.U((e=>e.activeAlert.id))),t).subscribe((e=>this._gnar.toneAIAssistantMiniCardShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),l.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertCardShow),d.U((e=>e.alertId))),t).pipe(A.b(300)).subscribe((e=>this._gnar.toneAIAssistantFullCardShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),l.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertApplyAction),d.U((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardReplacementApply(this._getSessionUuidValue(),w._getToneRewriteType(e))))),w._subscribeToMuteOrUndoMuteButtonClick(l,e,i,t,_.lY.isMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardMuteButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e)))),w._subscribeToMuteOrUndoMuteButtonClick(l,e,i,t,_.lY.isUndoMuteCategoryAction,(e=>this._gnar.toneAIAssistantFullCardUndoMuteButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e))));const o=e.pipe(u.h(_.lY.isToneAIChangeToneAlternativeAction));return l.add(o.pipe(c.O(null),b.G(),u.h((([e,t])=>(null==e?void 0:e.selectedToneAlternativeIdx)!==(null==t?void 0:t.selectedToneAlternativeIdx))),d.U((([e,t])=>{var i,n;return{oldToneAlternativeIdx:null!==(i=null==e?void 0:e.selectedToneAlternativeIdx)&&void 0!==i?i:null,newToneAlternativeIdx:null!==(n=null==t?void 0:t.selectedToneAlternativeIdx)&&void 0!==n?n:null}})),p.M(w._getToneAIAlertObservable(o.pipe(d.U((e=>e.alertId))),t))).subscribe((([{oldToneAlternativeIdx:e,newToneAlternativeIdx:t},i])=>(0,n.pipe)(i.extraProperties.toneAI,v.bw((n=>{this._gnar.toneAIAssistantFullCardSliderMove(null!==t?n.toneAlternatives[t].name:"",null!==e?n.toneAlternatives[e].name:"",this._getSessionUuidValue(),w._getToneRewriteType(i))})))))),l.add(w._getToneAIAlertObservable(e.pipe(u.h(_.lY.isAlertIgnoreAction),d.U((e=>e.alertId))),t).subscribe((e=>this._gnar.toneAIAssistantFullCardDismissButtonClick(this._getSessionUuidValue(),w._getToneRewriteType(e))))),()=>l.unsubscribe()}))}_subscribeToCommonActions(e,t,i){i.add(this._alertStateService.newlyHighlightedAlerts.pipe(u.h(s.S.isToneAIAlert)).subscribe((e=>this._gnar.toneAIAlertUnderlineShow(this._getSessionUuidValue(),w._getToneRewriteType(e))))),i.add(w._getToneAIAlertObservable(t.pipe(u.h(T.$.isToneAI),d.U((e=>e.id))),e).subscribe((e=>this._gnar.toneAIAlertUnderlineClick(this._getSessionUuidValue(),w._getToneRewriteType(e)))))}_getSessionUuidValue(){return(0,n.pipe)(this._getSessionUuid(),U.getOrElse((()=>"")))}static _getToneRewriteType(e){return`${e.patternName.split("/").slice(2).join("/")}${e.patternNameQualifier?`_${e.patternNameQualifier}`:""}`}static _subscribeToMuteOrUndoMuteButtonClick(e,t,i,s,l,o){e.add(w._getToneAIAlertObservable(t.pipe(u.h(l),p.M(i),d.U((([e,t])=>I.nL.hasItems(t)?(0,n.pipe)(t.currentLens.items.get(e.id),U.fold((()=>null),(e=>e.value))):null)),u.h(r.fQ),u.h(h.i.isToneAIItem),d.U((e=>e.activeAlert.id))),s).subscribe(o))}static _getToneAIAlertObservable(e,t){return e.pipe(d.U(t.getById),g.oA,u.h(l.bZ.isToneAI))}}}}]);