var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(System){var _a,_TcHmiRegion_tchmiFQN;class TcHmiRegion extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__targetMarkup=null,this.__currentContent=null,this.__onResizedEventDestroyEvent=null,this.__onContentChangedEventDestroyEvent=null,this.__onContentCreatedEventDestroyEvent=null,this.__onContentRemovedEventDestroyEvent=null,this.__processTargetMarkupCompileTimeout=0,this.__processTargetMarkupCleanupOldTimeout=0,this.__processTargetMarkupOldContent=null,this.__processTargetMarkupOldContentOldOpacity="",this.__rescaleId=0,!0===TCHMI_ENGINEERING&&(this.__onContentChangedEventDestroyEvent=TcHmi.EventProvider.register("System.onContentChanged",this.__onContentChanged()),this.__onContentCreatedEventDestroyEvent=TcHmi.EventProvider.register("System.onContentCreated",this.__onContentCreated()),this.__onContentRemovedEventDestroyEvent=TcHmi.EventProvider.register("System.onContentRemoved",this.__onContentRemoved())),this.__onResizedEventDestroyEvent=TcHmi.EventProvider.register(this.getId()+".onResized",this.__onResized());let spinnerDiv=this.__element[0].querySelector(".TcHmi_System_Controls_TcHmiRegion-loading-spinner-container");if(spinnerDiv)spinnerDiv.remove(),this.__processTargetMarkupLoadingSpinnerDiv=spinnerDiv;else{let loadingSpinnerDivTempDiv=document.createElement("div");loadingSpinnerDivTempDiv.innerHTML='<div class="TcHmi_System_Controls_TcHmiRegion-loading-spinner-container"><div class="TcHmi_System_Controls_TcHmiRegion-loading-spinner"><div></div><div></div><div></div><div></div></div></div>',this.__processTargetMarkupLoadingSpinnerDiv=loadingSpinnerDivTempDiv.firstElementChild}}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_System_TcHmiRegion-template"),0===this.__elementTemplateRoot.length&&(this.__elementTemplateRoot=this.__element.find(".tchmi-region-template")),0===this.__elementTemplateRoot.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init(),this.__processScrolling(),this.__processScaleMode()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){this.__keepAlive||(TcHmi.Engineering.ErrorPane.remove("E_REGION["+this.getId()+"]_CONTENT_ALREADY_USED"),this.__xhr&&(this.__xhr.abort(),this.__xhr=void 0),this.__processTargetMarkupCompileTimeout&&(clearTimeout(this.__processTargetMarkupCompileTimeout),this.__processTargetMarkupCompileTimeout=0),this.__processTargetMarkupCleanupOldTimeout&&(clearTimeout(this.__processTargetMarkupCleanupOldTimeout),this.__processTargetMarkupCleanupOldTimeout=0),!0===TCHMI_ENGINEERING&&(null!==this.__onContentChangedEventDestroyEvent&&(this.__onContentChangedEventDestroyEvent(),this.__onContentChangedEventDestroyEvent=null),null!==this.__onContentCreatedEventDestroyEvent&&(this.__onContentCreatedEventDestroyEvent(),this.__onContentCreatedEventDestroyEvent=null),null!==this.__onContentRemovedEventDestroyEvent&&(this.__onContentRemovedEventDestroyEvent(),this.__onContentRemovedEventDestroyEvent=null),this.__destroyRequestCurrentPartialContent&&(this.__destroyRequestCurrentPartialContent(),this.__destroyRequestCurrentPartialContent=void 0)),this.__onResizedEventDestroyEvent&&(this.__onResizedEventDestroyEvent(),this.__onResizedEventDestroyEvent=null),this.__currentContent?.getKeepAlive()&&this.__removeChild(this.__currentContent),this.__processTargetMarkupOldContent=null,super.destroy())}__setKeepAlive(value){if(super.__setKeepAlive(value),this.__currentContent){let partialUrl=tchmi_path(this.__targetContent),partialKeepAliveConfig=!1;if(partialUrl&&!0===TcHmi.System.Data.isKeepAlivePartial.get(partialUrl)&&(partialKeepAliveConfig=!0),partialUrl&&this.__targetContentMarkup&&(partialKeepAliveConfig||this.__keepAlive)&&!TcHmi.System.Data.Caches.partialMarkupCache.has(this.__targetContentMarkup)){let tempDiv=document.createElement("div");tempDiv.innerHTML=this.__targetContentMarkup,tempDiv.firstElementChild&&TcHmi.System.Data.Caches.partialMarkupCache.set(partialUrl,{markup:this.__targetContentMarkup,partialId:tempDiv.firstElementChild.id})}!0!==value&&!1!==partialKeepAliveConfig||this.__currentContent.__setKeepAlive(value)}}__tryContentRefresh(url,content){null===this.__targetContent||tchmi_path(url)!==tchmi_path(this.__targetContent)||null!=content&&this.__targetMarkup===content||(null!=content?this.__processTargetContent(content):this.__processTargetContent())}__onContentChanged(){return(evt,data)=>{this.__tryContentRefresh(data.url,data.content)}}__onContentCreated(){return(evt,data)=>{this.__tryContentRefresh(data.url,null)}}__onContentRemoved(){return(evt,data)=>{this.__tryContentRefresh(data.url,null)}}__onResized(){return(e,ctrl)=>{this.__asyncWorkData["System.TcHmiRegion.resized"]=!0,this.__requestAsyncWork()}}__doAsyncWork(){super.__doAsyncWork(),this.__asyncWorkData["System.TcHmiRegion.resized"]&&(this.__asyncWorkData["System.TcHmiRegion.resized"]=!1,this.__processScrolling(),this.__processScaleMode())}__isRecursionSave(path){let tempParent=this.__parent;for(;null!==tempParent;){if(tempParent.getType()===__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)&&void 0!==tempParent.getTargetContent&&tchmi_path(tempParent.getTargetContent())===path)return tempParent=null,!1;tempParent=tempParent.getParent()}return!0}setWidthMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WidthMode")),convertedValue!==this.__widthMode&&(this.__widthMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode())}__processWidth(callerControl){if("Content"===this.getWidthMode()){let newWidthStr="";if(null!==this.__currentContent){const contentPixelSize=this.__currentContent.__getContentWidth();null!==contentPixelSize&&(newWidthStr=contentPixelSize.toFixed(3)+"px"),callerControl&&this.__currentContent===callerControl||"Content"!==this.__currentContent.getWidthMode()||this.__currentContent.__processWidth(this)}TcHmi.StyleProvider.setSimpleElementStyle(this.__element,"width",newWidthStr)}super.__processWidth(callerControl)}setHeightMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeightMode")),convertedValue!==this.__heightMode&&(this.__heightMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__processHeight(callerControl){if("Content"===this.__heightMode&&(this.__intHeight=null,null!==this.__currentContent)){const contentPixelSize=this.__currentContent.__getContentHeight();null!==contentPixelSize&&(this.__intHeight=contentPixelSize.toFixed(3)+"px"),callerControl&&this.__currentContent===callerControl||"Content"!==this.__currentContent.getHeightMode()||this.__currentContent.__processHeight(this)}super.__processHeight(callerControl)}__getContentWidth(){return"Collapsed"===this.__visibility?null:"Content"!==this.getWidthMode()?super.__getContentWidth():null!==this.__currentContent?this.__currentContent.__getContentWidth():null}__getContentHeight(){return"Collapsed"===this.__visibility?null:"Content"!==this.getHeightMode()?super.__getContentHeight():null!==this.__currentContent?this.__currentContent.__getContentHeight():null}setTargetContent(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetContent")),convertedValue=""===convertedValue?null:tchmi_path(convertedValue),convertedValue!==this.__targetContent&&(this.__targetContent=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetContent"}),this.__processTargetContent())}getTargetContent(){return this.__targetContent}__destroyAndRemoveTargetCtrl(objToDestroy){objToDestroy.getIsDestroyed()||objToDestroy.destroy(),this.__removeChild(objToDestroy)}__buildBenchmarkObject(benchmarkObj){const baseName=this.__id+" loads "+benchmarkObj.targetContent??"null",overallMeasurement=performance.measure(baseName,{start:benchmarkObj.processStart,end:benchmarkObj.screenUpdated,detail:{htmlFetchTime:benchmarkObj.htmlFetchEnd-benchmarkObj.htmlFetchStart,compileTime:benchmarkObj.compileEnd-benchmarkObj.compileStart,addContentToDomTime:benchmarkObj.addContentToDomEnd-benchmarkObj.addContentToDomStart,syncAttach:benchmarkObj.syncAttachEnd-benchmarkObj.syncAttachStart,asyncAttach:benchmarkObj.asyncAttachEnd-benchmarkObj.asyncAttachStart,overallTime:benchmarkObj.screenUpdated-benchmarkObj.processStart,removeContentFromDomTime:benchmarkObj.removeContentFromDomEnd-benchmarkObj.removeContentFromDomStart}});try{isNaN(benchmarkObj.htmlFetchEnd)||performance.measure(baseName+":htmlfetch",{start:benchmarkObj.htmlFetchStart,end:benchmarkObj.htmlFetchEnd}),isNaN(benchmarkObj.compileEnd)||performance.measure(baseName+":compile",{start:benchmarkObj.compileStart,end:benchmarkObj.compileEnd}),isNaN(benchmarkObj.addContentToDomEnd)||performance.measure(baseName+":addContentToDom",{start:benchmarkObj.addContentToDomStart,end:benchmarkObj.addContentToDomEnd}),isNaN(benchmarkObj.syncAttachEnd)||performance.measure(baseName+":syncAttach",{start:benchmarkObj.syncAttachStart,end:benchmarkObj.syncAttachEnd}),isNaN(benchmarkObj.asyncAttachEnd)||performance.measure(baseName+":asyncAttach",{start:benchmarkObj.asyncAttachStart,end:benchmarkObj.asyncAttachEnd}),isNaN(benchmarkObj.removeContentFromDomEnd)||performance.measure(baseName+":removeContentFromDom",{start:benchmarkObj.removeContentFromDomStart,end:benchmarkObj.removeContentFromDomEnd})}catch(ex){}return{targetContent:benchmarkObj.targetContent,measurement:overallMeasurement}}__processTargetContent(override=null){TcHmi.Engineering.ErrorPane.remove("E_REGION["+this.getId()+"]_CONTENT_ALREADY_USED");const benchmarkObj={targetContent:this.__targetContent??null,processStart:NaN,htmlFetchStart:NaN,htmlFetchEnd:NaN,compileStart:NaN,compileEnd:NaN,addContentToDomStart:NaN,addContentToDomEnd:NaN,syncAttachStart:NaN,syncAttachEnd:NaN,asyncAttachStart:NaN,asyncAttachEnd:NaN,removeContentFromDomStart:NaN,removeContentFromDomEnd:NaN,screenUpdated:NaN};if(TCHMI_BENCHMARK_MODE&&(TcHmi.EventProvider.raise("Benchmark.TcHmiRegion<"+this.__id+">.onTargetContentLoad",{targetContent:this.__targetContent}),benchmarkObj.processStart=performance.now()),this.__targetMarkup=null,!this.__targetContent)return this.__currentContent&&(TCHMI_BENCHMARK_MODE&&(benchmarkObj.removeContentFromDomStart=performance.now()),this.__destroyAndRemoveTargetCtrl(this.__currentContent),this.__currentContent=null),void(TCHMI_BENCHMARK_MODE&&window.requestAnimationFrame((()=>{benchmarkObj.removeContentFromDomEnd=benchmarkObj.screenUpdated=performance.now(),TcHmi.EventProvider.raise("Benchmark.TcHmiRegion<"+this.__id+">.onTargetContentLoaded",this.__buildBenchmarkObject(benchmarkObj))})));const partialUrl=tchmi_path(this.__targetContent);!1===this.__isRecursionSave(partialUrl)&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetContent] Loading content="+this.__targetContent+" was blocked to avoid recursion!");const __this=this;let partialMarkup;if(TCHMI_BENCHMARK_MODE&&(benchmarkObj.htmlFetchStart=performance.now()),partialMarkup=override?{markup:override}:TcHmi.System.Data.Caches.partialMarkupCache.get(partialUrl),partialMarkup)TCHMI_BENCHMARK_MODE&&(benchmarkObj.htmlFetchEnd=performance.now()),this.__xhr&&this.__xhr.abort(),this.__targetContentMarkup=partialMarkup.markup,this.__processTargetMarkup(partialMarkup.partialId,benchmarkObj),partialMarkup=void 0;else if(TCHMI_ENGINEERING)this.__destroyRequestCurrentPartialContent&&(this.__destroyRequestCurrentPartialContent(),this.__destroyRequestCurrentPartialContent=void 0),this.__destroyRequestCurrentPartialContent=TcHmi.System.Services.Engineering.designerModeManager.partialContentManager.requestCurrentPartialContent(partialUrl,(data=>{TCHMI_BENCHMARK_MODE&&(benchmarkObj.htmlFetchEnd=performance.now()),data.error===TcHmi.Errors.NONE?(__this.__targetContentMarkup=data.content,__this.__processTargetMarkup(void 0,benchmarkObj)):(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+__this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==__this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+__this.getId()+", Attribut=TargetContent] Loading "+partialUrl+" failed with error: "+TcHmi.Log.buildMessage(data.details)),this.__destroyRequestCurrentPartialContent=void 0)}));else{this.__xhr&&this.__xhr.abort();let xhr=new XMLHttpRequest;this.__xhr=xhr,xhr.open("GET",partialUrl+(TCHMI_ENGINEERING?"?preventcache="+Math.random():"")),xhr.addEventListener("load",(evt=>{TCHMI_BENCHMARK_MODE&&(benchmarkObj.htmlFetchEnd=performance.now()),200===xhr.status?(__this.__targetContentMarkup=xhr.responseText,__this.__processTargetMarkup(void 0,benchmarkObj)):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+__this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==__this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+__this.getId()+", Attribut=TargetContent] Loading "+partialUrl+" failed with error: "+xhr.status+" "+xhr.statusText+"."),this.__xhr=void 0})),xhr.addEventListener("error",(evt=>{TCHMI_BENCHMARK_MODE&&(benchmarkObj.htmlFetchEnd=performance.now()),TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+__this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==__this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+__this.getId()+", Attribut=TargetContent] Loading "+partialUrl+" failed with error: "+xhr.status+" "+xhr.statusText+"."),this.__xhr=void 0})),xhr.send()}}__processTargetMarkup(controlId,benchmarkObj){if(!this.__targetContent)return;let markup=this.__targetContentMarkup;if(!markup)return;let partialUrl=tchmi_path(this.__targetContent),partialUrlOld=null;if(this.__currentContent){let element=this.__currentContent.getElement();element&&element.length>0&&(partialUrlOld=element[0].getAttribute("data-tchmi-partial-url"))}let partialKeepAliveConfig=!1;partialUrl&&!0===TcHmi.System.Data.isKeepAlivePartial.get(partialUrl)&&(partialKeepAliveConfig=!0);let partialOldKeepAliveConfig=!1;if(partialUrlOld&&!0===TcHmi.System.Data.isKeepAlivePartial.get(partialUrlOld)&&(partialOldKeepAliveConfig=!0),partialUrl&&(partialKeepAliveConfig||this.__keepAlive)&&!TcHmi.System.Data.Caches.partialMarkupCache.has(partialUrl)){let tempDiv=document.createElement("div");tempDiv.innerHTML=markup,tempDiv.firstElementChild&&TcHmi.System.Data.Caches.partialMarkupCache.set(partialUrl,{markup:markup,partialId:tempDiv.firstElementChild.id})}partialUrlOld&&!partialOldKeepAliveConfig&&partialUrl!==partialUrlOld&&TcHmi.System.Data.Caches.partialMarkupCache.delete(partialUrlOld),this.__processTargetMarkupCompileTimeout&&(clearTimeout(this.__processTargetMarkupCompileTimeout),this.__processTargetMarkupCompileTimeout=0,this.__processTargetMarkupLoadingSpinnerDiv.remove(),this.__currentContent&&(this.__currentContent.getElement()[0].style.opacity=this.__processTargetMarkupOldContentOldOpacity,this.__processTargetMarkupOldContentOldOpacity="")),this.__processTargetMarkupCleanupOldTimeout&&(clearTimeout(this.__processTargetMarkupCleanupOldTimeout),this.__processTargetMarkupCleanupOldTimeout=0,this.__processTargetMarkupOldContent&&(this.__processTargetMarkupOldContent.getElement()[0].style.opacity=this.__processTargetMarkupOldContentOldOpacity,this.__processTargetMarkupOldContentOldOpacity="",this.__destroyAndRemoveTargetCtrl(this.__processTargetMarkupOldContent),this.__processTargetMarkupOldContent=null)),this.__processTargetMarkupOldContent=this.__currentContent,this.__processTargetMarkupOldContent&&(this.__processTargetMarkupOldContentOldOpacity=this.__processTargetMarkupOldContent.getElement()[0].style.opacity,this.__processTargetMarkupOldContent.getElement()[0].style.opacity="0");const loadSync=TcHmi.System.Data.isLoadSyncContent.get(partialUrl);!1!==TCHMI_DESIGNER||loadSync||this.__elementTemplateRoot[0].appendChild(this.__processTargetMarkupLoadingSpinnerDiv);const TcHmiRegion_PlaceNewContent=()=>{let curContentCtrlObj,partialId;this.__processTargetMarkupCompileTimeout=0;let elemContentPartial=null;if(controlId)partialId=controlId;else if(markup){let tempDiv=document.createElement("div");tempDiv.innerHTML=markup,elemContentPartial=tempDiv.firstElementChild,elemContentPartial&&(elemContentPartial.remove(),partialId=elemContentPartial.id)}if(curContentCtrlObj=TcHmi.Controls.get(partialId),curContentCtrlObj){let ctrlParent=curContentCtrlObj.getParent();if(ctrlParent){if(ctrlParent===this&&TCHMI_ENGINEERING)return this.__processTargetMarkupLoadingSpinnerDiv.remove(),curContentCtrlObj.getElement()[0].style.opacity=this.__processTargetMarkupOldContentOldOpacity,void(this.__processTargetMarkupOldContentOldOpacity="");if(ctrlParent!==this)return this.__processTargetMarkupLoadingSpinnerDiv.remove(),TcHmi.Engineering.ErrorPane.add("E_REGION["+this.getId()+"]_CONTENT_ALREADY_USED","[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetContent] Loading content="+this.__targetContent+" was blocked because it is already used in region with id="+ctrlParent.getId()+".",TcHmi.Engineering.ErrorPane.MessageType.Error),TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetContent] Loading content="+this.__targetContent+" was blocked because it is already used in region with id="+ctrlParent.getId()+"."),void(this.__currentContent&&(this.__destroyAndRemoveTargetCtrl(this.__currentContent),this.__currentContent=null))}}else if(!elemContentPartial&&markup){let tempDiv=document.createElement("div");tempDiv.innerHTML=markup,elemContentPartial=tempDiv.firstElementChild,elemContentPartial?.remove()}if(markup&&(this.__targetMarkup=markup),!curContentCtrlObj&&elemContentPartial){if(!elemContentPartial.hasAttribute("data-tchmi-type"))return this.__currentContent&&(this.__destroyAndRemoveTargetCtrl(this.__currentContent),this.__currentContent=null),this.__processTargetMarkupLoadingSpinnerDiv.remove(),void(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetContent] Loading content="+this.__targetContent+" failed, because its first html element is no tchmi control (missing data-tchmi-type attribute)."));this.__targetContent&&elemContentPartial.setAttribute("data-tchmi-partial-url",tchmi_path(this.__targetContent)),TCHMI_BENCHMARK_MODE&&(benchmarkObj.compileStart=performance.now()),curContentCtrlObj=TcHmi.System.Services.controlManager.compile(elemContentPartial,this),TCHMI_BENCHMARK_MODE&&(benchmarkObj.compileEnd=performance.now()),curContentCtrlObj&&(partialKeepAliveConfig||this.__keepAlive)&&curContentCtrlObj.__setKeepAlive(!0)}if(curContentCtrlObj&&!(curContentCtrlObj instanceof System.TcHmiContent))return this.__currentContent&&(this.__destroyAndRemoveTargetCtrl(this.__currentContent),this.__currentContent=null),this.__processTargetMarkupLoadingSpinnerDiv.remove(),TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiRegion,_a,"f",_TcHmiRegion_tchmiFQN):"")+", Id="+this.getId()+", Attribut=TargetContent] Wrong content type (not TcHmi.Controls.System.TcHmiContent)."),void(TCHMI_BENCHMARK_MODE&&window.requestAnimationFrame((()=>{benchmarkObj.screenUpdated=performance.now(),TcHmi.EventProvider.raise("Benchmark.TcHmiRegion<"+this.__id+">.onTargetContentLoaded",this.__buildBenchmarkObject(benchmarkObj))})));this.__currentContent=curContentCtrlObj||null,null!==this.__currentContent?(TCHMI_BENCHMARK_MODE&&(benchmarkObj.addContentToDomStart=performance.now()),"No"!==this.__scrolling&&(this.__elementTemplateRoot[0].scrollTop=0,this.__elementTemplateRoot[0].scrollLeft=0,this.__element[0].scrollTop=0,this.__element[0].scrollLeft=0),this.__elementTemplateRoot[0].appendChild(this.__currentContent.getElement()[0]),this.__addChild(this.__currentContent),this.__processTargetMarkupLoadingSpinnerDiv.remove(),TCHMI_BENCHMARK_MODE&&(benchmarkObj.addContentToDomEnd=benchmarkObj.removeContentFromDomStart=performance.now()),!partialOldKeepAliveConfig&&(this.__processTargetMarkupOldContent&&!this.__currentContent||this.__processTargetMarkupOldContent&&this.__currentContent&&this.__processTargetMarkupOldContent.getId()!==this.__currentContent.getId())&&this.__processTargetMarkupOldContent.__setKeepAlive(!1),this.__processTargetMarkupOldContent&&TcHmi.System.Services.controlManager.forceDetach(this.__processTargetMarkupOldContent),this.__processTargetMarkupCleanupOldTimeout=setTimeout((()=>{this.__processTargetMarkupCleanupOldTimeout=0,this.__processTargetMarkupOldContent&&!this.__currentContent||this.__processTargetMarkupOldContent&&this.__currentContent&&this.__processTargetMarkupOldContent.getId()!==this.__currentContent.getId()?(this.__processTargetMarkupOldContent.getElement()[0].style.opacity=this.__processTargetMarkupOldContentOldOpacity,this.__destroyAndRemoveTargetCtrl(this.__processTargetMarkupOldContent),this.__processTargetMarkupOldContent=null,this.__processTargetMarkupOldContentOldOpacity=""):this.__processTargetMarkupOldContent&&(this.__processTargetMarkupOldContent.getElement()[0].style.opacity=this.__processTargetMarkupOldContentOldOpacity,this.__processTargetMarkupOldContent=null,this.__processTargetMarkupOldContentOldOpacity=""),TCHMI_BENCHMARK_MODE&&(benchmarkObj.removeContentFromDomEnd=performance.now(),benchmarkObj.screenUpdated&&TcHmi.EventProvider.raise("Benchmark.TcHmiRegion<"+this.__id+">.onTargetContentLoaded",this.__buildBenchmarkObject(benchmarkObj)))})),TcHmi.EventProvider.register(this.__currentContent.getId()+".onAttached",((e,tco)=>{e.destroy(),null!==this.__currentContent&&("Content"===this.getWidthMode()&&this.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight())})),TCHMI_BENCHMARK_MODE&&TcHmi.EventProvider.register("System.onPrevControlsAttached",((e,controls)=>{e.destroy(),benchmarkObj.syncAttachEnd=benchmarkObj.asyncAttachStart=performance.now(),window.requestAnimationFrame((()=>{benchmarkObj.asyncAttachEnd=performance.now(),benchmarkObj.screenUpdated=performance.now(),benchmarkObj.removeContentFromDomEnd&&TcHmi.EventProvider.raise("Benchmark.TcHmiRegion<"+this.__id+">.onTargetContentLoaded",this.__buildBenchmarkObject(benchmarkObj))}))}))):(this.__processTargetMarkupLoadingSpinnerDiv.remove(),this.__processTargetMarkupOldContent&&(this.__destroyAndRemoveTargetCtrl(this.__processTargetMarkupOldContent),this.__processTargetMarkupOldContent=null)),TcHmi.EventProvider.raise(this.__id+".onTargetContentReplaced",this.__currentContent),this.__processScrolling(),this.__processScaleMode(),benchmarkObj.syncAttachStart=performance.now()};loadSync?TcHmiRegion_PlaceNewContent():this.__processTargetMarkupCompileTimeout=setTimeout(TcHmiRegion_PlaceNewContent)}__processIsEnabled(){super.__processIsEnabled(),this.__currentContent&&this.__currentContent.__processIsEnabled()}__processAccessConfig(){super.__processAccessConfig(),this.__currentContent&&this.__currentContent.__processAccessConfig()}setScaleMode(valueNew){let convertedValue=TcHmi.ValueConverter.toScaleModeString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ScaleMode")),convertedValue!==this.__scaleMode&&(this.__scaleMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ScaleMode"}),this.__attributesInitialized&&(this.__processScrolling(),this.__processScaleMode()))}getScaleMode(){return this.__scaleMode}__processScaleMode(){if(null===this.__currentContent)return;const contentElement=this.__currentContent.getElement();switch(this.__scaleMode){case"ScaleToFit":{const contentDim=TcHmi.StyleProvider.getComputedElementStyle(contentElement,["width","height"]),ratioW=this.__elementTemplateRoot[0].clientWidth/parseFloat(contentDim.width),ratioH=this.__elementTemplateRoot[0].clientHeight/parseFloat(contentDim.height),ratio=ratioW>ratioH?ratioH:ratioW;contentElement[0].style.transform="scale("+ratio+")",contentElement[0].style.transformOrigin="0 0"}break;case"ScaleToFitWidth":{const cntentDim=TcHmi.StyleProvider.getComputedElementStyle(contentElement,"width"),ratio=this.__elementTemplateRoot[0].clientWidth/parseFloat(cntentDim.width);contentElement[0].style.transform="scale("+ratio+")",contentElement[0].style.transformOrigin="0 0",this.__rescaleId||"No"===this.__scrolling||(this.__rescaleId=window.setTimeout((()=>{this.__processScaleMode(),this.__rescaleId=0})))}break;case"ScaleToFitHeight":{const cntentDim=TcHmi.StyleProvider.getComputedElementStyle(contentElement,"height"),ratio=this.__elementTemplateRoot[0].clientHeight/parseFloat(cntentDim.height);contentElement[0].style.transform="scale("+ratio+")",contentElement[0].style.transformOrigin="0 0",this.__rescaleId||"No"===this.__scrolling||(this.__rescaleId=window.setTimeout((()=>{this.__processScaleMode(),this.__rescaleId=0})))}break;case"ScaleToFill":{const contentDim=TcHmi.StyleProvider.getComputedElementStyle(contentElement,["width","height"]),zoomRatio=1,ratioW=this.__elementTemplateRoot[0].clientWidth/parseFloat(contentDim.width)*zoomRatio,ratioH=this.__elementTemplateRoot[0].clientHeight/parseFloat(contentDim.height)*zoomRatio;contentElement[0].style.transform="scale("+ratioW+","+ratioH+")",contentElement[0].style.transformOrigin="0 0"}break;default:contentElement[0].style.transform="",contentElement[0].style.transformOrigin=""}}setScrolling(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);if(null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Scrolling")),convertedValue!==this.__scrolling){switch(convertedValue){case"Yes":case"Auto":this.__scrolling=convertedValue;break;default:this.__scrolling="No"}TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Scrolling"}),this.__attributesInitialized&&(this.__processScrolling(),this.__processScaleMode())}}getScrolling(){return this.__scrolling}__processScrolling(){let newCss={};switch(this.__scrolling){case"Yes":case"Auto":this.__scaleMode&&"None"!==this.__scaleMode&&"ScaleToFitHeight"!==this.__scaleMode?newCss["overflow-x"]="hidden":newCss["overflow-x"]="",this.__scaleMode&&"None"!==this.__scaleMode&&"ScaleToFitWidth"!==this.__scaleMode?newCss["overflow-y"]="hidden":newCss["overflow-y"]="";break;default:newCss["overflow-x"]="hidden",newCss["overflow-y"]="hidden",this.__elementTemplateRoot[0].scrollTop=0,this.__elementTemplateRoot[0].scrollLeft=0,this.__element[0].scrollTop=0,this.__element[0].scrollLeft=0}TcHmi.StyleProvider.setSimpleElementStyle(this.__elementTemplateRoot,newCss),this.__processWidth(),this.__processHeight()}getCurrentContent(){return this.__currentContent}}_TcHmiRegion_tchmiFQN={value:"TcHmi.Controls.System."+(_a=TcHmiRegion).name},System.TcHmiRegion=TcHmiRegion}(Controls.System||(Controls.System={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiRegion","TcHmi.Controls.System",TcHmi.Controls.System.TcHmiRegion);