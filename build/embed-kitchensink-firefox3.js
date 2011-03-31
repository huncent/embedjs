var embed,dojo;embed=dojo={};embed.config={};embed.global=this;embed.doc=this.document||null;embed.body=function(){var _1=embed;return _1.doc&&_1.doc.body;};embed.version="0.1";["indexOf","lastIndexOf"].forEach(function(_2,_3){dojo[_2]=function(_4,_5,_6){return typeof _6=="undefined"?Array.prototype[_2].call(_4,_5):Array.prototype[_2].call(_4,_5,_6);};});["forEach","map","some","every","filter"].forEach(function(_7,_8){dojo[_7]=function(_9,_a,_b){if(typeof _a=="string"){_a=new Function("item","index","array",_a);}return Array.prototype[_7].call(_9,_a,_b);};});dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=function(it){var t=typeof it;return it&&(t=="function"||it instanceof Function)&&!it.nodeType&&it.toString()!="[object NodeList]";};dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||dojo.isArray(it)||dojo.isFunction(it));};dojo.isArrayLike=function(it){var d=dojo;return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!dojo.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.isNumeric=function(n){return n==parseFloat(n);};dojo.isNumber=function(n){return typeof n=="number"||n instanceof Number;};dojo._hitchArgs=function(_c,_d){var _e=dojo.toArray(arguments,2);var _f=dojo.isString(_d);return function(){var _10=dojo.toArray(arguments);var f=_f?(_c||dojo.global)[_d]:_d;return f&&f.apply(_c||this,_e.concat(_10));};};dojo.hitch=function(_11,_12){if(arguments.length>2){return dojo._hitchArgs.apply(dojo,arguments);}if(!_12){_12=_11;_11=null;}if(dojo.isString(_12)){_11=_11||dojo.global;if(!_11[_12]){throw (["dojo.hitch: scope[\"",_12,"\"] is null (scope=\"",_11,"\")"].join(""));}return function(){return _11[_12].apply(_11,arguments||[]);};}return !_11?_12:function(){return _12.apply(_11,arguments||[]);};};dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target;var r=t&&t.apply(this,arguments);var i,lls;lls=[].concat(ls);for(i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_13,_14,_15){_13=_13||dojo.global;var f=_13[_14];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_13[_14]=d;}return f._listeners.push(_15);},remove:function(_16,_17,_18){var f=(_16||dojo.global)[_17];if(f&&f._listeners&&_18--){delete f._listeners[_18];}}};dojo.connect=dojo.on=function(obj,_19,_1a,_1b,_1c){var a=arguments,_1d=[],i=0;_1d.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_1d.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_1d.push(a[i]);}return dojo._connect.apply(this,_1d);};dojo._connect=function(obj,_1e,_1f,_20){var l=dojo._listener,h=l.add(obj,_1e,dojo.hitch(_1f,_20));return [obj,_1e,h,l];};dojo.disconnect=function(_21){if(_21&&_21[0]!==undefined){dojo._disconnect.apply(this,_21);delete _21[0];}};dojo._disconnect=function(obj,_22,_23,_24){_24.remove(obj,_22,_23);};(function(){var del=(dojo._event_listener={add:function(_25,_26,fp){if(!_25){return;}_26=del._normalizeEventName(_26);_25.addEventListener(_26,fp,false);return fp;},remove:function(_27,_28,_29){if(_27){_28=del._normalizeEventName(_28);_27.removeEventListener(_28,_29,false);}},_normalizeEventName:function(_2a){return _2a.slice(0,2)=="on"?_2a.slice(2):_2a;}});dojo.fixEvent=function(evt,_2b){return del._fixEvent(evt,_2b);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};dojo._connect=function(obj,_2c,_2d,_2e,_2f){var _30=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_30?1:0,l=[dojo._listener,del][lid];var h=l.add(obj,_2c,dojo.hitch(_2d,_2e));return [obj,_2c,h,lid];};dojo._disconnect=function(obj,_31,_32,_33){([dojo._listener,del][_33]).remove(obj,_31,_32);};})();dojo._topics={};dojo.subscribe=function(_34,_35,_36){return [_34,dojo._listener.add(dojo._topics,_34,dojo.hitch(_35,_36))];};dojo.unsubscribe=function(_37){if(_37){dojo._listener.remove(dojo._topics,_37[0],_37[1]);}};dojo.publish=function(_38,_39){var f=dojo._topics[_38];if(f){f.apply(this,_39||[]);}};dojo.connectPublisher=function(_3a,obj,_3b){var pf=function(){dojo.publish(_3a,arguments);};return _3b?dojo.connect(obj,_3b,pf):dojo.connect(obj,pf);};(function(d){(function(){dojo.__mutator=function(){};var _3c=Object.freeze||function(){};dojo.Promise=function(_3d){var _3e,_3f,_40,_41,_42;var _43=this.promise={};function _44(_45){if(_3f){throw new Error("This deferred has already been resolved");}_3e=_45;_3f=true;_46();};function _46(){var _47;while(!_47&&_42){var _48=_42;_42=_42.next;if(_47=(_48.progress==dojo.__mutator)){_3f=false;}var _49=(_40?_48.error:_48.resolved);if(_49){try{var _4a=_49(_3e);if(_4a&&typeof _4a.then==="function"){_4a.then(dojo.hitch(_48.deferred,"resolve"),dojo.hitch(_48.deferred,"reject"));continue;}var _4b=_47&&_4a===undefined;_48.deferred[_4b&&_40?"reject":"resolve"](_4b?_3e:_4a);}catch(e){_48.deferred.reject(e);}}else{if(_40){_48.deferred.reject(_3e);}else{_48.deferred.resolve(_3e);}}}};this.resolve=function(_4c){this.fired=0;this.results=[_4c,null];_44(_4c);};this.reject=function(_4d){_40=true;this.fired=1;_44(_4d);this.results=[null,_4d];if(!_4d||_4d.log!==false){(dojo.config.deferredOnError||function(x){})(_4d);}};this.progress=function(_4e){var _4f=_42;while(_4f){var _50=_4f.progress;_50&&_50(_4e);_4f=_4f.next;}};this.then=_43.then=function(_51,_52,_53){var _54=_53==dojo.__mutator?this:new dojo.Promise(_43.cancel);var _55={resolved:_51,error:_52,progress:_53,deferred:_54};if(_42){_41=_41.next=_55;}else{_42=_41=_55;}if(_3f){_46();}return _54.promise;};var _56=this;this.cancel=_43.cancel=function(){if(!_3f){var _57=_3d&&_3d(_56);if(!_3f){if(!(_57 instanceof Error)){_57=new Error(_57);}_57.log=false;_56.reject(_57);}}};_3c(_43);};})();})(dojo);dojo.when=function(_58,_59,_5a,_5b){if(_58&&typeof _58.then==="function"){return _58.then(_59,_5a,_5b);}return _59(_58);};(function(d){var _5c={},_5d;for(var i in {toString:1}){_5d=[];break;}dojo._extraNames=_5d=_5d||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString"];d._mixin=function(_5e,_5f){var _60,s,i=0,l=_5d.length;for(_60 in _5f){s=_5f[_60];if(s!==_5c[_60]&&s!==_5e[_60]){_5e[_60]=s;}}if(l&&_5f){for(;i<l;++i){_60=_5d[i];s=_5f[_60];if(s!==_5c[_60]&&s!==_5e[_60]){_5e[_60]=s;}}}return _5e;};dojo.mixin=function(obj,_61){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo.safeMixin=function(_62,_63){var _64,t,i=0,l=d._extraNames.length;var op=Object.prototype,_65=op.toString,_66="constructor";for(_64 in _63){t=_63[_64];if((t!==op[_64]||!(_64 in op))&&_64!=_66){if(_65.call(t)=="[object Function]"){t.nom=_64;}_62[_64]=t;}}for(;i<l;++i){_64=d._extraNames[i];t=_63[_64];if((t!==op[_64]||!(_64 in op))&&_64!=_66){if(_65.call(t)=="[object Function]"){t.nom=_64;}_62[_64]=t;}}return _62;};}(dojo));dojo.extend=function(_67,_68){for(var i=1,l=arguments.length;i<l;i++){dojo._mixin(_67.prototype,arguments[i]);}return _67;};dojo.Deferred=dojo.Promise;dojo.extend(dojo.Deferred,{callback:function(_69){this.resolve(_69);},errback:function(_6a){this.reject(_6a);},addCallbacks:function(_6b,_6c){this.then(_6b,_6c,dojo.__mutator);return this;},addCallback:function(_6d){return this.addCallbacks(dojo.hitch.apply(dojo,arguments));},addErrback:function(_6e){return this.addCallbacks(null,dojo.hitch.apply(dojo,arguments));},addBoth:function(_6f){var _70=dojo.hitch.apply(dojo,arguments);return this.addCallbacks(_70,_70);},fired:-1});dojo.byId=function(id,doc){return (typeof id=="string")?(doc||document).getElementById(id):id;};(function(d){var _71=null,_72;d.destroy=function(_73){_73=dojo.byId(_73);try{var doc=_73.ownerDocument;if(!_71||_72!=doc){_71=doc.createElement("div");_72=doc;}_71.appendChild(_73.parentNode?_73.parentNode.removeChild(_73):_73);_71.innerHTML="";}catch(e){}};})(dojo);(function(d){d._getComputedStyle=function(_74){return _74.nodeType==1?_74.ownerDocument.defaultView.getComputedStyle(_74,null):{};};var _75="cssFloat",_76={"cssFloat":_75,"styleFloat":_75,"float":_75};d._style=function(_77,_78,_79){var n=dojo.byId(_77),l=arguments.length;_78=_76[_78]||_78;if(l==3){return n.style[_78]=_79;}var s=d._getComputedStyle(n);if(l==2&&typeof _78!="string"){for(var x in _78){d._style(_77,x,_78[x]);}return s;}return (l==1)?s:parseFloat(s[_78]||n.style[_78])||s[_78];};})(dojo);dojo.getComputedStyle=dojo._getComputedStyle;dojo.style=dojo._style;(function(d){var _7a={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_7b={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_7c={innerHTML:1,className:1,htmlFor:0,value:1};var _7d=function(_7e){return _7b[_7e.toLowerCase()]||_7e;};var _7f=function(_80,_81){var _82=_80.getAttributeNode&&_80.getAttributeNode(_81);return _82&&_82.specified;};d.hasAttr=function(_83,_84){var lc=_84.toLowerCase();return _7c[_7a[lc]||_84]||_7f(d.byId(_83),_7b[lc]||_84);};var _85={},_86=0,_87="_attrid",_88={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};d.attr=function(_89,_8a,_8b){_89=d.byId(_89);var _8c=arguments.length,_8d;if(_8c==2&&typeof _8a!="string"){for(var x in _8a){d.attr(_89,x,_8a[x]);}return _89;}var lc=_8a.toLowerCase(),_8e=_7a[lc]||_8a,_8f=_7c[_8e],_90=_7b[lc]||_8a;if(_8c==3){do{if(_8e=="style"&&typeof _8b!="string"){d.style(_89,_8b);break;}if(_8e=="innerHTML"){_89[_8e]=_8b;break;}if(d.isFunction(_8b)){var _91=d.attr(_89,_87);if(!_91){_91=_86++;d.attr(_89,_87,_91);}if(!_85[_91]){_85[_91]={};}var h=_85[_91][_8e];if(h){d.disconnect(h);}else{try{delete _89[_8e];}catch(e){}}_85[_91][_8e]=d.connect(_89,_8e,_8b);break;}if(_8f||typeof _8b=="boolean"){_89[_8e]=_8b;break;}_89.setAttribute(_90,_8b);}while(false);return _89;}_8b=_89[_8e];if(_8f&&typeof _8b!="undefined"){return _8b;}if(_8e!="href"&&(typeof _8b=="boolean"||d.isFunction(_8b))){return _8b;}return _7f(_89,_90)?_89.getAttribute(_90):null;};d.removeAttr=function(_92,_93){d.byId(_92).removeAttribute(_7d(_93));};})(dojo);(function(d){var _94=d.byId;var _95={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_96=/<\s*([\w\:]+)/,_97={},_98=0,_99="__"+d._scopeName+"ToDomId";for(var _9a in _95){var tw=_95[_9a];tw.pre=_9a=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}d._toDom=function(_9b,doc){doc=doc||d.doc;var _9c=doc[_99];if(!_9c){doc[_99]=_9c=++_98+"";_97[_9c]=doc.createElement("div");}_9b+="";var _9d=_9b.match(_96),tag=_9d?_9d[1].toLowerCase():"",_9e=_97[_9c],_9f,i,fc,df;if(_9d&&_95[tag]){_9f=_95[tag];_9e.innerHTML=_9f.pre+_9b+_9f.post;for(i=_9f.length;i;--i){_9e=_9e.firstChild;}}else{_9e.innerHTML=_9b;}if(_9e.childNodes.length==1){return _9e.removeChild(_9e.firstChild);}df=doc.createDocumentFragment();while(fc=_9e.firstChild){df.appendChild(fc);}return df;};d._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.doc.documentElement,n.clientHeight?{x:n.scrollLeft,y:n.scrollTop}:(n=d.body(),{x:n.scrollLeft||0,y:n.scrollTop||0}));};var _a0=function(_a1,ref){var _a2=ref.parentNode;if(_a2){_a2.insertBefore(_a1,ref);}};var _a3=function(_a4,ref){var _a5=ref.parentNode;if(_a5){if(_a5.lastChild==ref){_a5.appendChild(_a4);}else{_a5.insertBefore(_a4,ref.nextSibling);}}};d.place=function(_a6,_a7,_a8){_a7=_94(_a7);if(typeof _a6=="string"){_a6=_a6.charAt(0)=="<"?d._toDom(_a6,_a7.ownerDocument):_94(_a6);}if(typeof _a8=="number"){var cn=_a7.childNodes;if(!cn.length||cn.length<=_a8){_a7.appendChild(_a6);}else{_a0(_a6,cn[_a8<0?0:_a8]);}}else{switch(_a8){case "before":_a0(_a6,_a7);break;case "after":_a3(_a6,_a7);break;case "replace":_a7.parentNode.replaceChild(_a6,_a7);break;case "only":d.empty(_a7);_a7.appendChild(_a6);break;case "first":if(_a7.firstChild){_a0(_a6,_a7.firstChild);break;}default:_a7.appendChild(_a6);}}return _a6;};d.create=function(tag,_a9,_aa,pos){var doc=d.doc;if(_aa){_aa=_94(_aa);doc=_aa.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_a9){for(var _ab in _a9){switch(_ab){case "class":tag.className=_a9[_ab];break;default:tag[_ab]=_a9[_ab];}}}if(_aa){d.place(tag,_aa,pos);}return tag;};d.empty=function(_ac){_94(_ac).innerHTML="";};})(dojo);dojo.hasClass=function(_ad,_ae){return _ad.classList.contains(_ae);};dojo.toggleClass=function(_af,_b0,_b1){var _b2={"true":"add","false":"remove","undefined":"toggle"};dojo.byId(_af).classList[_b2[_b1+""]](_b0);};dojo.addClass=function(_b3,_b4){_b3=dojo.byId(_b3);var _b5=_b4.split?_b4.split(" "):_b4;for(var i=0,l=_b5.length;i<l;i++){_b5[i].length&&_b3.classList.add(_b5[i]);}};dojo.removeClass=function(_b6,_b7){_b6=dojo.byId(_b6);if(_b7===undefined){_b6.className="";}else{var _b8=_b7.split?_b7.split(" "):_b7;for(var i=0,l=_b8.length;i<l;i++){_b8[i].length&&_b6.classList.remove(_b8[i]);}}};(function(d){d._loaders=[];d._loadNotifying=false;d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _b9=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_b9.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_ba){d._onto(d._loaders,obj,_ba);if(document.readyState==="complete"||(d._postLoad&&!d._loadNotifying)){d._callLoaded();}};dojo._callLoaded=function(){setTimeout("dojo.loaded();",0);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&mll.length){d._callLoaded();}};dojo._initFired=false;dojo._loadInit=function(){if(!dojo._initFired){dojo._initFired=true;document.removeEventListener("DOMContentLoaded",dojo._loadInit,false);dojo._callLoaded();}};document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);})(dojo);dojo.toJson=function(_bb){return JSON.stringify(_bb);};dojo.fromJson=function(_bc){return JSON.parse(_bc);};dojo.toArray=function(obj,_bd,_be){return (_be||[]).concat(Array.prototype.slice.call(obj,_bd||0));};dojo.clone=function(o){if(!o||typeof o!="object"||dojo.isFunction(o)){return o;}if(o.nodeType&&"cloneNode" in o){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}var r,i,l,s,_bf;if(dojo.isArray(o)){r=[];for(i=0,l=o.length;i<l;++i){if(i in o){r.push(dojo.clone(o[i]));}}}else{r=o.constructor?new o.constructor():{};}var _c0={};for(_bf in o){s=o[_bf];if(!(_bf in r)||(r[_bf]!==s&&(!(_bf in _c0)||_c0[_bf]!==s))){r[_bf]=dojo.clone(s);}}return r;};dojo._getProp=function(_c1,_c2,_c3){var obj=_c3||dojo.global;for(var i=0,p;obj&&(p=_c1[i]);i++){obj=(p in obj?obj[p]:(_c2?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_c4,_c5,_c6){var _c7=_c4.split("."),p=_c7.pop(),obj=dojo._getProp(_c7,true,_c6);return obj&&p?(obj[p]=_c5):undefined;};dojo.getObject=function(_c8,_c9,_ca){return dojo._getProp(_c8.split("."),_c9,_ca);};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _pattern=/\{([^\}]+)\}/g;dojo.replace=function(_cb,map,_cc){return _cb.replace(_cc||_pattern,dojo.isFunction(map)?map:function(_cd,k){return dojo.getObject(k,false,map);});};dojo.objectToQuery=function(map){var enc=encodeURIComponent;var _ce=[];var _cf={};for(var _d0 in map){var _d1=map[_d0];if(_d1!=_cf[_d0]){var _d2=enc(_d0)+"=";if(dojo.isArray(_d1)){for(var i=0;i<_d1.length;i++){_ce.push(_d2+enc(_d1[i]));}}else{_ce.push(_d2+enc(_d1));}}}return _ce.join("&");};(function(_d3){var cfg=_d3.config;_d3._xhrObj=function(){return new XMLHttpRequest();};_d3._isDocumentOk=function(_d4){var _d5=_d4.status||0,lp=location.protocol;return (_d5>=200&&_d5<300)||_d5==304||_d5==1223||(!_d5&&(lp=="file:"||lp=="chrome:"||lp=="app:"));};_d3._getText=function(uri,_d6){var _d7=_d3._xhrObj();_d7.open("GET",uri,false);try{_d7.send(null);if(!_d3._isDocumentOk(_d7)){var err=Error("Unable to load "+uri+" status:"+_d7.status);err.status=_d7.status;err.responseText=_d7.responseText;throw err;}}catch(e){if(_d6){return null;}throw e;}return _d7.responseText;};dojo._blockAsync=false;var _d8=_d3._contentHandlers=dojo.contentHandlers={text:function(xhr){return xhr.responseText;},json:function(xhr){return _d3.fromJson(xhr.responseText||null);}};dojo._ioSetArgs=function(_d9,_da,_db,_dc){var _dd={args:_d9,url:_d9.url};var _de=[{}];if(_d9.content){_de.push(_d9.content);}if(_d9.preventCache){_de.push({"dojo.preventCache":new Date().valueOf()});}_dd.query=_d3.objectToQuery(_d3.mixin.apply(null,_de));_dd.handleAs=_d9.handleAs||"text";var d=new _d3.Deferred(_da);d.addCallbacks(_db,function(_df){return _dc(_df,d);});var ld=_d9.load;if(ld&&_d3.isFunction(ld)){d.addCallback(function(_e0){return ld.call(_d9,_e0,_dd);});}var err=_d9.error;if(err&&_d3.isFunction(err)){d.addErrback(function(_e1){return err.call(_d9,_e1,_dd);});}var _e2=_d9.handle;if(_e2&&_d3.isFunction(_e2)){d.addBoth(function(_e3){return _e2.call(_d9,_e3,_dd);});}d.ioArgs=_dd;return d;};var _e4=function(dfd){dfd.canceled=true;var xhr=dfd.ioArgs.xhr;var _e5=typeof xhr.abort;if(_e5=="function"||_e5=="object"||_e5=="unknown"){xhr.abort();}var err=dfd.ioArgs.error;if(!err){err=new Error("xhr cancelled");err.dojoType="cancel";}return err;};var _e6=function(dfd){var ret=_d8[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);return ret===undefined?null:ret;};var _e7=function(_e8,dfd){if(!dfd.ioArgs.args.failOk){}return _e8;};var _e9=null;var _ea=[];var _eb=0;var _ec=function(dfd){if(_eb<=0){_eb=0;}};var _ed=function(){var now=(new Date()).getTime();if(!_d3._blockAsync){for(var i=0,tif;i<_ea.length&&(tif=_ea[i]);i++){var dfd=tif.dfd;var _ee=function(){if(!dfd||dfd.canceled||!tif.validCheck(dfd)){_ea.splice(i--,1);_eb-=1;}else{if(tif.ioCheck(dfd)){_ea.splice(i--,1);tif.resHandle(dfd);_eb-=1;}else{if(dfd.startTime){if(dfd.startTime+(dfd.ioArgs.args.timeout||0)<now){_ea.splice(i--,1);var err=new Error("timeout exceeded");err.dojoType="timeout";dfd.errback(err);dfd.cancel();_eb-=1;}}}}};if(dojo.config.debugAtAllCosts){_ee.call(this);}else{try{_ee.call(this);}catch(e){dfd.errback(e);}}}}_ec(dfd);if(!_ea.length){clearInterval(_e9);_e9=null;return;}};dojo._ioCancelAll=function(){try{_d3.forEach(_ea,function(i){try{i.dfd.cancel();}catch(e){}});}catch(e){}};_d3._ioNotifyStart=function(dfd){};_d3._ioWatch=function(dfd,_ef,_f0,_f1){var _f2=dfd.ioArgs.args;if(_f2.timeout){dfd.startTime=(new Date()).getTime();}_ea.push({dfd:dfd,validCheck:_ef,ioCheck:_f0,resHandle:_f1});if(!_e9){_e9=setInterval(_ed,50);}if(_f2.sync){_ed();}};var _f3="application/x-www-form-urlencoded";var _f4=function(dfd){return dfd.ioArgs.xhr.readyState;};var _f5=function(dfd){return 4==dfd.ioArgs.xhr.readyState;};var _f6=function(dfd){var xhr=dfd.ioArgs.xhr;if(_d3._isDocumentOk(xhr)){dfd.callback(dfd);}else{var err=new Error("Unable to load "+dfd.ioArgs.url+" status:"+xhr.status);err.status=xhr.status;err.responseText=xhr.responseText;dfd.errback(err);}};dojo._ioAddQueryToUrl=function(_f7){if(_f7.query.length){_f7.url+=(_f7.url.indexOf("?")==-1?"?":"&")+_f7.query;_f7.query=null;}};dojo.xhr=function(_f8,_f9,_fa){var dfd=_d3._ioSetArgs(_f9,_e4,_e6,_e7);var _fb=dfd.ioArgs;var xhr=_fb.xhr=_d3._xhrObj(_fb.args);if(!xhr){dfd.cancel();return dfd;}if("postData" in _f9){_fb.query=_f9.postData;}else{if("putData" in _f9){_fb.query=_f9.putData;}else{if("rawBody" in _f9){_fb.query=_f9.rawBody;}else{if((arguments.length>2&&!_fa)||"POST|PUT".indexOf(_f8.toUpperCase())==-1){_d3._ioAddQueryToUrl(_fb);}}}}xhr.open(_f8,_fb.url,_f9.sync!==true,_f9.user||undefined,_f9.password||undefined);if(_f9.headers){for(var hdr in _f9.headers){if(hdr.toLowerCase()==="content-type"&&!_f9.contentType){_f9.contentType=_f9.headers[hdr];}else{if(_f9.headers[hdr]){xhr.setRequestHeader(hdr,_f9.headers[hdr]);}}}}xhr.setRequestHeader("Content-Type",_f9.contentType||_f3);if(!_f9.headers||!("X-Requested-With" in _f9.headers)){xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");}if(_f9.overrideMimeType&&xhr.overrideMimeType){xhr.overrideMimeType(_f9.overrideMimeType);}_d3._ioNotifyStart(dfd);if(dojo.config.debugAtAllCosts){xhr.send(_fb.query);}else{try{xhr.send(_fb.query);}catch(e){_fb.error=e;dfd.cancel();}}_d3._ioWatch(dfd,_f4,_f5,_f6);xhr=null;return dfd;};dojo.xhrGet=function(_fc){return _d3.xhr("GET",_fc);};dojo.rawXhrPost=dojo.xhrPost=function(_fd){return _d3.xhr("POST",_fd,true);};dojo.rawXhrPut=dojo.xhrPut=function(_fe){return _d3.xhr("PUT",_fe,true);};dojo.xhrDelete=function(_ff){return _d3.xhr("DELETE",_ff);};}(dojo));dojo.attachScript=function(_100){var doc=dojo.doc;var _101=doc.createElement("script");_101.type="text/javascript";_101.src=_100.url;_101.charset="utf-8";return doc.getElementsByTagName("head")[0].appendChild(_101);};(function(){var _102=0;var _103={};dojo.jsonp=function(args){if(!args.url){throw new Error("dojo.jsonp: No URL specified.");}if(!args.jsonp){throw new Error("dojo.jsonp: No callback param specified.");}_102++;var _104="jsonp_callback_"+_102;var _105=args.timeout||3000;_103[_102]=setTimeout(function(){dojo.jsonp[_104]=function(){};clearTimeout(_103[_102]);if(args.error){args.error(null,{});}if(args.handle){args.handle(null,{});}},_105);args.url+="?"+args.jsonp+"=dojo.jsonp."+_104;dojo.jsonp[_104]=function(data){clearTimeout(_103[_102]);try{if(args.load){args.load(data,{});}}catch(e){if(args.error){args.error(null,{});}}if(args.handle){args.handle(data,{});}};if(args.content){args.url+="&"+dojo.objectToQuery(args.content);}return dojo.attachScript(args);};})();dojo.delegate=dojo._delegate=(function(){function TMP(){};return function(obj,_106){TMP.prototype=obj;var tmp=new TMP();TMP.prototype=null;if(_106){dojo._mixin(tmp,_106);}return tmp;};})();dojo.declare=function(_107,_108,_109){var dd=arguments.callee,_10a;if(dojo.isArray(_108)){_10a=_108;_108=_10a.shift();}if(_10a){dojo.forEach(_10a,function(m,i){if(!m){throw (_107+": mixin #"+i+" is null");}_108=dd._delegate(_108,m);});}var ctor=dd._delegate(_108);_109=_109||{};ctor.extend(_109);dojo.extend(ctor,{declaredClass:_107,_constructor:_109.constructor});ctor.prototype.constructor=ctor;return dojo.setObject(_107,ctor);};dojo.mixin(dojo.declare,{_delegate:function(base,_10b){var bp=(base||0).prototype,mp=(_10b||0).prototype,dd=dojo.declare;var ctor=dd._makeCtor();dojo.mixin(ctor,{superclass:bp,mixin:mp,extend:dd._extend});if(base){ctor.prototype=dojo._delegate(bp);}dojo.extend(ctor,dd._core,mp||0,{_constructor:null,preamble:null});ctor.prototype.constructor=ctor;ctor.prototype.declaredClass=(bp||0).declaredClass+"_"+(mp||0).declaredClass;return ctor;},_extend:function(_10c){var i,fn;for(i in _10c){if(dojo.isFunction(fn=_10c[i])&&!0[i]){fn.nom=i;fn.ctor=this;}}dojo.extend(this,_10c);},_makeCtor:function(){return function(){this._construct(arguments);};},_core:{_construct:function(args){var c=args.callee,s=c.superclass,ct=s&&s.constructor,m=c.mixin,mct=m&&m.constructor,a=args,ii,fn;if(a[0]){if(((fn=a[0].preamble))){a=fn.apply(this,a)||a;}}if((fn=c.prototype.preamble)){a=fn.apply(this,a)||a;}if(ct&&ct.apply){ct.apply(this,a);}if(mct&&mct.apply){mct.apply(this,a);}if((ii=c.prototype._constructor)){ii.apply(this,args);}if(this.constructor.prototype==c.prototype&&(ct=this.postscript)){ct.apply(this,args);}},_findMixin:function(_10d){var c=this.constructor,p,m;while(c){p=c.superclass;m=c.mixin;if(m==_10d||(m instanceof _10d.constructor)){return p;}if(m&&m._findMixin&&(m=m._findMixin(_10d))){return m;}c=p&&p.constructor;}},_findMethod:function(name,_10e,_10f,has){var p=_10f,c,m,f;do{c=p.constructor;m=c.mixin;if(m&&(m=this._findMethod(name,_10e,m,has))){return m;}if((f=p[name])&&(has==(f==_10e))){return p;}p=c.superclass;}while(p);return !has&&(p=this._findMixin(_10f))&&this._findMethod(name,_10e,p,has);},inherited:function(name,args,_110){var a=arguments;if(typeof a[0]!="string"){_110=args;args=name;name=args.callee.nom;}a=_110||args;var c=args.callee,p=this.constructor.prototype,fn,mp;if(this[name]!=c||p[name]==c){mp=(c.ctor||0).superclass||this._findMethod(name,c,p,true);if(!mp){throw (this.declaredClass+": inherited method \""+name+"\" mismatch");}p=this._findMethod(name,c,mp,false);}fn=p&&p[name];if(!fn){throw (mp.declaredClass+": inherited method \""+name+"\" not found");}return fn.apply(this,a);}}});dojo.query=function(_111,_112){if(typeof _112=="string"){_112=dojo.byId(_112);if(!_112){return [];}}_112=_112||dojo.doc;if(/[>+~]\s*$/.test(_111)){_111+="*";}var _113=_112;if(_112.nodeType==9){if(/^\s*>/.test(_111)){var _114=_111.replace(/^\s*>/,"").match(/([^\s>+~]+)(.*)/);if(!_114){return [];}var _115=_114[1];_111=_114[2];if(_112.querySelector(_115)!==_112.documentElement){return [];}if(!_111){return [_112.documentElement];}_112=_112.documentElement;}else{if(/^\s*[+~]/.test(_111)){return [];}}}if(_112.nodeType==1){var _116=_112.id;var _117=_116;if(!_116){_117=_112.id="d---dojo-query-synthetic-id-"+new Date().getTime();var _118=true;}_111="#"+_117+" "+_111;_113=_112.parentNode||_112;}var n=_113.querySelectorAll(_111);if(_118){_112.id="";}return n||[];};(function(){var _119=embed.query;embed.query=function(_11a,_11b){return new embed.ChainableNodeArray(_119.apply(embed,arguments));};embed.ChainableNodeArray=function(arr){var ret=[];ret.push.apply(ret,Array.prototype.slice.call(arr,0));_11c(ret);return ret;};function _11c(obj){var _11d=["attr","addClass","connect","removeAttr","removeClass","style","toggleClass","place"];for(var i=0,l=_11d.length,func;i<l;i++){func=_11d[i];obj[func]=(function(func){return function(){var _11e=[].splice.call(arguments,0);for(var i=0,l=this.length;i<l;i++){embed[func].apply(embed,[this[i]].concat(_11e));}return this;};})(func);}var _11f=["forEach","map","some","every","filter"];for(var i=0,l=_11f.length,func;i<l;i++){func=_11f[i];obj[func]=(function(func){return function(){var _120=[].splice.call(arguments,0);var ret=embed[func].apply(embed,[this].concat(_120));return new embed.ChainableNodeArray(ret);};})(func);}};})();embed.geolocation=navigator.geolocation;