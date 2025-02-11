(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rm={exports:{}},Al={},sm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),av=Symbol.for("react.portal"),lv=Symbol.for("react.fragment"),cv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),hv=Symbol.for("react.forward_ref"),pv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),zf=Symbol.iterator;function vv(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am=Object.assign,lm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cm(){}cm.prototype=Ls.prototype;function wd(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}var Td=wd.prototype=new cm;Td.constructor=wd;am(Td,Ls.prototype);Td.isPureReactComponent=!0;var Bf=Array.isArray,um=Object.prototype.hasOwnProperty,Ad={current:null},dm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)um.call(e,i)&&!dm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),l=0;l<o;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:No,type:t,key:s,ref:a,props:r,_owner:Ad.current}}function _v(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hf=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xv(""+t.key):e.toString(36)}function Na(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case No:case av:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Zl(a,0):i,Bf(r)?(n="",t!=null&&(n=t.replace(Hf,"$&/")+"/"),Na(r,e,n,"",function(l){return l})):r!=null&&(Cd(r)&&(r=_v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Hf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Bf(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Zl(s,o);a+=Na(s,e,n,c,r)}else if(c=vv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Zl(s,o++),a+=Na(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xo(t,e,n){if(t==null)return t;var i=[],r=0;return Na(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Da={transition:null},Sv={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:Ad};function hm(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Ls;Be.Fragment=lv;Be.Profiler=uv;Be.PureComponent=wd;Be.StrictMode=cv;Be.Suspense=pv;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;Be.act=hm;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=am({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ad.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)um.call(e,c)&&!dm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var l=0;l<c;l++)o[l]=arguments[l+2];i.children=o}return{$$typeof:No,type:t.type,key:r,ref:s,props:i,_owner:a}};Be.createContext=function(t){return t={$$typeof:fv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dv,_context:t},t.Consumer=t};Be.createElement=fm;Be.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:hv,render:t}};Be.isValidElement=Cd;Be.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:yv}};Be.memo=function(t,e){return{$$typeof:mv,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Be.unstable_act=hm;Be.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Be.useContext=function(t){return Xt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Be.useId=function(){return Xt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Be.useRef=function(t){return Xt.current.useRef(t)};Be.useState=function(t){return Xt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Xt.current.useTransition()};Be.version="18.3.1";sm.exports=Be;var nt=sm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=nt,Ev=Symbol.for("react.element"),wv=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Av=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cv={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Tv.call(e,i)&&!Cv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ev,type:t,key:s,ref:a,props:r,_owner:Av.current}}Al.Fragment=wv;Al.jsx=pm;Al.jsxs=pm;rm.exports=Al;var y=rm.exports,mm={exports:{}},fn={},gm={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,H){var B=I.length;I.push(H);e:for(;0<B;){var K=B-1>>>1,re=I[K];if(0<r(re,H))I[K]=H,I[B]=re,B=K;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var H=I[0],B=I.pop();if(B!==H){I[0]=B;e:for(var K=0,re=I.length,Ne=re>>>1;K<Ne;){var P=2*(K+1)-1,se=I[P],q=P+1,ie=I[q];if(0>r(se,B))q<re&&0>r(ie,se)?(I[K]=ie,I[q]=B,K=q):(I[K]=se,I[P]=B,K=P);else if(q<re&&0>r(ie,B))I[K]=ie,I[q]=B,K=q;else break e}}return H}function r(I,H){var B=I.sortIndex-H.sortIndex;return B!==0?B:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],l=[],u=1,f=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var H=n(l);H!==null;){if(H.callback===null)i(l);else if(H.startTime<=I)i(l),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(l)}}function S(I){if(x=!1,_(I),!v)if(n(c)!==null)v=!0,V(b);else{var H=n(l);H!==null&&Z(S,H.startTime-I)}}function b(I,H){v=!1,x&&(x=!1,d(N),N=-1),p=!0;var B=h;try{for(_(H),f=n(c);f!==null&&(!(f.expirationTime>H)||I&&!R());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var re=K(f.expirationTime<=H);H=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(c)&&i(c),_(H)}else i(c);f=n(c)}if(f!==null)var Ne=!0;else{var P=n(l);P!==null&&Z(S,P.startTime-H),Ne=!1}return Ne}finally{f=null,h=B,p=!1}}var A=!1,C=null,N=-1,w=5,M=-1;function R(){return!(t.unstable_now()-M<w)}function z(){if(C!==null){var I=t.unstable_now();M=I;var H=!0;try{H=C(!0,I)}finally{H?k():(A=!1,C=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=z,k=function(){$.postMessage(null)}}else k=function(){m(z,0)};function V(I){C=I,A||(A=!0,k())}function Z(I,H){N=m(function(){I(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var B=h;h=H;try{return I()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=h;h=I;try{return H()}finally{h=B}},t.unstable_scheduleCallback=function(I,H,B){var K=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,I={id:u++,callback:H,priorityLevel:I,startTime:B,expirationTime:re,sortIndex:-1},B>K?(I.sortIndex=B,e(l,I),n(c)===null&&I===n(l)&&(x?(d(N),N=-1):x=!0,Z(S,B-K))):(I.sortIndex=re,e(c,I),v||p||(v=!0,V(b))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var H=h;return function(){var B=h;h=H;try{return I.apply(this,arguments)}finally{h=B}}}})(vm);gm.exports=vm;var bv=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=nt,dn=bv;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,fo={};function Rr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(fo[t]=e,t=0;t<e.length;t++)_m.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,Pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},Gf={};function Lv(t){return Qc.call(Gf,t)?!0:Qc.call(Vf,t)?!1:Pv.test(t)?Gf[t]=!0:(Vf[t]=!0,!1)}function Nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dv(t,e,n,i){if(e===null||typeof e>"u"||Nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Rd);It[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Rd);It[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Rd);It[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pd(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dv(e,n,r,i)&&(n=null),i||r===null?Lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Jc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),jf=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Ql;function Ks(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Jl=!1;function ec(t,e){if(!t||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function Iv(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=ec(t.type,!1),t;case 11:return t=ec(t.type.render,!1),t;case 1:return t=ec(t.type,!0),t;default:return""}}function nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Kr:return"Portal";case Jc:return"Profiler";case Ld:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ym:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:nu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return nu(t(e))}catch{}}return null}function Uv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fv(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Fv(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function iu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(t,e){e=e.checked,e!=null&&Pd(t,"checked",e,!1)}function ru(t,e){wm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?su(t,e.type,n):e.hasOwnProperty("defaultValue")&&su(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function su(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Zs(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Tm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $f(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,Cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ov=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){Ov.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function Rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kv=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lu(t,e){if(e){if(kv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var du=null,us=null,ds=null;function qf(t){if(t=Uo(t)){if(typeof du!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ll(e),du(t.stateNode,t.type,e))}}function Pm(t){us?ds?ds.push(t):ds=[t]:us=t}function Lm(){if(us){var t=us,e=ds;if(ds=us=null,qf(t),e)for(t=0;t<e.length;t++)qf(e[t])}}function Nm(t,e){return t(e)}function Dm(){}var tc=!1;function Im(t,e,n){if(tc)return t(e,n);tc=!0;try{return Nm(t,e,n)}finally{tc=!1,(us!==null||ds!==null)&&(Dm(),Lm())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var fu=!1;if(fi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{fu=!1}function zv(t,e,n,i,r,s,a,o,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(u){this.onError(u)}}var no=!1,Za=null,Qa=!1,hu=null,Bv={onError:function(t){no=!0,Za=t}};function Hv(t,e,n,i,r,s,a,o,c){no=!1,Za=null,zv.apply(Bv,arguments)}function Vv(t,e,n,i,r,s,a,o,c){if(Hv.apply(this,arguments),no){if(no){var l=Za;no=!1,Za=null}else throw Error(oe(198));Qa||(Qa=!0,hu=l)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kf(t){if(Pr(t)!==t)throw Error(oe(188))}function Gv(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kf(r),t;if(s===i)return Kf(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Fm(t){return t=Gv(t),t!==null?Om(t):null}function Om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Om(t);if(e!==null)return e;t=t.sibling}return null}var km=dn.unstable_scheduleCallback,Zf=dn.unstable_cancelCallback,jv=dn.unstable_shouldYield,Wv=dn.unstable_requestPaint,mt=dn.unstable_now,Xv=dn.unstable_getCurrentPriorityLevel,Ud=dn.unstable_ImmediatePriority,zm=dn.unstable_UserBlockingPriority,Ja=dn.unstable_NormalPriority,Yv=dn.unstable_LowPriority,Bm=dn.unstable_IdlePriority,Cl=null,Xn=null;function $v(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:Zv,qv=Math.log,Kv=Math.LN2;function Zv(t){return t>>>=0,t===0?32:31-(qv(t)/Kv|0)|0}var Ko=64,Zo=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Qs(o):(s&=a,s!==0&&(i=Qs(s)))}else a=n&~r,a!==0?i=Qs(a):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function Qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Un(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Qv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hm(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function e_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Vm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,Od,jm,Wm,Xm,mu=!1,Qo=[],Ii=null,Ui=null,Fi=null,mo=new Map,go=new Map,Ri=[],t_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uo(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function n_(t,e,n,i,r){switch(e){case"focusin":return Ii=ks(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=ks(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=ks(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,ks(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,ks(go.get(s)||null,t,e,n,i,r)),!0}return!1}function Ym(t){var e=mr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Um(n),e!==null){t.blockedOn=e,Xm(t.priority,function(){jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uu=i,n.target.dispatchEvent(i),uu=null}else return e=Uo(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function Jf(t,e,n){Ia(t)&&n.delete(e)}function i_(){mu=!1,Ii!==null&&Ia(Ii)&&(Ii=null),Ui!==null&&Ia(Ui)&&(Ui=null),Fi!==null&&Ia(Fi)&&(Fi=null),mo.forEach(Jf),go.forEach(Jf)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,mu||(mu=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,i_)))}function vo(t){function e(r){return zs(r,t)}if(0<Qo.length){zs(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&zs(Ii,t),Ui!==null&&zs(Ui,t),Fi!==null&&zs(Fi,t),mo.forEach(e),go.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&Ri.shift()}var fs=vi.ReactCurrentBatchConfig,tl=!0;function r_(t,e,n,i){var r=Je,s=fs.transition;fs.transition=null;try{Je=1,kd(t,e,n,i)}finally{Je=r,fs.transition=s}}function s_(t,e,n,i){var r=Je,s=fs.transition;fs.transition=null;try{Je=4,kd(t,e,n,i)}finally{Je=r,fs.transition=s}}function kd(t,e,n,i){if(tl){var r=gu(t,e,n,i);if(r===null)fc(t,e,i,nl,n),Qf(t,i);else if(n_(r,t,e,n,i))i.stopPropagation();else if(Qf(t,i),e&4&&-1<t_.indexOf(t)){for(;r!==null;){var s=Uo(r);if(s!==null&&Gm(s),s=gu(t,e,n,i),s===null&&fc(t,e,i,nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fc(t,e,i,null,n)}}var nl=null;function gu(t,e,n,i){if(nl=null,t=Id(i),t=mr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function $m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xv()){case Ud:return 1;case zm:return 4;case Ja:case Yv:return 16;case Bm:return 536870912;default:return 16}default:return 16}}var Ni=null,zd=null,Ua=null;function qm(){if(Ua)return Ua;var t,e=zd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ua=r.slice(t,1<i?1-i:void 0)}function Fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function eh(){return!1}function hn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:eh,this.isPropagationStopped=eh,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=hn(Ns),Io=ut({},Ns,{view:0,detail:0}),o_=hn(Io),ic,rc,Bs,bl=ut({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(ic=t.screenX-Bs.screenX,rc=t.screenY-Bs.screenY):rc=ic=0,Bs=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),th=hn(bl),a_=ut({},bl,{dataTransfer:0}),l_=hn(a_),c_=ut({},Io,{relatedTarget:0}),sc=hn(c_),u_=ut({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),d_=hn(u_),f_=ut({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h_=hn(f_),p_=ut({},Ns,{data:0}),nh=hn(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v_[t])?!!e[t]:!1}function Hd(){return __}var x_=ut({},Io,{key:function(t){if(t.key){var e=m_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?Fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y_=hn(x_),S_=ut({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=hn(S_),M_=ut({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),E_=hn(M_),w_=ut({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=hn(w_),A_=ut({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C_=hn(A_),b_=[9,13,27,32],Vd=fi&&"CompositionEvent"in window,io=null;fi&&"documentMode"in document&&(io=document.documentMode);var R_=fi&&"TextEvent"in window&&!io,Km=fi&&(!Vd||io&&8<io&&11>=io),rh=" ",sh=!1;function Zm(t,e){switch(t){case"keyup":return b_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function P_(t,e){switch(t){case"compositionend":return Qm(e);case"keypress":return e.which!==32?null:(sh=!0,rh);case"textInput":return t=e.data,t===rh&&sh?null:t;default:return null}}function L_(t,e){if(Qr)return t==="compositionend"||!Vd&&Zm(t,e)?(t=qm(),Ua=zd=Ni=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var N_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N_[t.type]:e==="textarea"}function Jm(t,e,n,i){Pm(i),e=il(e,"onChange"),0<e.length&&(n=new Bd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ro=null,_o=null;function D_(t){ug(t,0)}function Rl(t){var e=ts(t);if(Em(e))return t}function I_(t,e){if(t==="change")return e}var eg=!1;if(fi){var oc;if(fi){var ac="oninput"in document;if(!ac){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),ac=typeof ah.oninput=="function"}oc=ac}else oc=!1;eg=oc&&(!document.documentMode||9<document.documentMode)}function lh(){ro&&(ro.detachEvent("onpropertychange",tg),_o=ro=null)}function tg(t){if(t.propertyName==="value"&&Rl(_o)){var e=[];Jm(e,_o,t,Id(t)),Im(D_,e)}}function U_(t,e,n){t==="focusin"?(lh(),ro=e,_o=n,ro.attachEvent("onpropertychange",tg)):t==="focusout"&&lh()}function F_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(_o)}function O_(t,e){if(t==="click")return Rl(e)}function k_(t,e){if(t==="input"||t==="change")return Rl(e)}function z_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:z_;function xo(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qc.call(e,r)||!On(t[r],e[r]))return!1}return!0}function ch(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uh(t,e){var n=ch(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ch(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function B_(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&Gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=uh(n,s);var a=uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H_=fi&&"documentMode"in document&&11>=document.documentMode,Jr=null,vu=null,so=null,_u=!1;function dh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||Jr==null||Jr!==Ka(i)||(i=Jr,"selectionStart"in i&&Gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),so&&xo(so,i)||(so=i,i=il(vu,"onSelect"),0<i.length&&(e=new Bd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},lc={},rg={};fi&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Pl(t){if(lc[t])return lc[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return lc[t]=e[n];return t}var sg=Pl("animationend"),og=Pl("animationiteration"),ag=Pl("animationstart"),lg=Pl("transitionend"),cg=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){cg.set(t,e),Rr(e,[t])}for(var cc=0;cc<fh.length;cc++){var uc=fh[cc],V_=uc.toLowerCase(),G_=uc[0].toUpperCase()+uc.slice(1);$i(V_,"on"+G_)}$i(sg,"onAnimationEnd");$i(og,"onAnimationIteration");$i(ag,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(lg,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function hh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vv(i,e,void 0,t),t.currentTarget=null}function ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,l=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;hh(r,o,l),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,l=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;hh(r,o,l),s=c}}}if(Qa)throw t=hu,Qa=!1,hu=null,t}function it(t,e){var n=e[Eu];n===void 0&&(n=e[Eu]=new Set);var i=t+"__bubble";n.has(i)||(dg(e,t,2,!1),n.add(i))}function dc(t,e,n){var i=0;e&&(i|=4),dg(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ta]){t[ta]=!0,_m.forEach(function(n){n!=="selectionchange"&&(j_.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,dc("selectionchange",!1,e))}}function dg(t,e,n,i){switch($m(e)){case 1:var r=r_;break;case 4:r=s_;break;default:r=kd}n=r.bind(null,e,n,t),r=void 0,!fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=mr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Im(function(){var l=s,u=Id(n),f=[];e:{var h=cg.get(t);if(h!==void 0){var p=Bd,v=t;switch(t){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":p=y_;break;case"focusin":v="focus",p=sc;break;case"focusout":v="blur",p=sc;break;case"beforeblur":case"afterblur":p=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=E_;break;case sg:case og:case ag:p=d_;break;case lg:p=T_;break;case"scroll":p=o_;break;case"wheel":p=C_;break;case"copy":case"cut":case"paste":p=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ih}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var g=l,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=po(g,d),S!=null&&x.push(So(g,S,_)))),m)break;g=g.return}0<x.length&&(h=new p(h,v,null,n,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==uu&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[hi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=l,v=v?mr(v):null,v!==null&&(m=Pr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=l),p!==v)){if(x=th,S="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ih,S="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:ts(p),_=v==null?h:ts(v),h=new x(S,g+"leave",p,n,u),h.target=m,h.relatedTarget=_,S=null,mr(u)===l&&(x=new x(d,g+"enter",v,n,u),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,d=v,g=0,_=x;_;_=Nr(_))g++;for(_=0,S=d;S;S=Nr(S))_++;for(;0<g-_;)x=Nr(x),g--;for(;0<_-g;)d=Nr(d),_--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Nr(x),d=Nr(d)}x=null}else x=null;p!==null&&ph(f,h,p,x,!1),v!==null&&m!==null&&ph(f,m,v,x,!0)}}e:{if(h=l?ts(l):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=I_;else if(oh(h))if(eg)b=k_;else{b=F_;var A=U_}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=O_);if(b&&(b=b(t,l))){Jm(f,b,n,u);break e}A&&A(t,h,l),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&su(h,"number",h.value)}switch(A=l?ts(l):window,t){case"focusin":(oh(A)||A.contentEditable==="true")&&(Jr=A,vu=l,so=null);break;case"focusout":so=vu=Jr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,dh(f,n,u);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":dh(f,n,u)}var C;if(Vd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qr?Zm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Km&&n.locale!=="ko"&&(Qr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qr&&(C=qm()):(Ni=u,zd="value"in Ni?Ni.value:Ni.textContent,Qr=!0)),A=il(l,N),0<A.length&&(N=new nh(N,t,null,n,u),f.push({event:N,listeners:A}),C?N.data=C:(C=Qm(n),C!==null&&(N.data=C)))),(C=R_?P_(t,n):L_(t,n))&&(l=il(l,"onBeforeInput"),0<l.length&&(u=new nh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:l}),u.data=C))}ug(f,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(So(t,s,r)),s=po(t,e),s!=null&&i.push(So(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ph(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,l=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&l!==null&&(o=l,r?(c=po(n,s),c!=null&&a.unshift(So(n,c,o))):r||(c=po(n,s),c!=null&&a.push(So(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var W_=/\r\n?/g,X_=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(W_,`
`).replace(X_,"")}function na(t,e,n){if(e=mh(e),mh(t)!==e&&n)throw Error(oe(425))}function rl(){}var xu=null,yu=null;function Su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,Y_=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,$_=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(t){return gh.resolve(null).then(t).catch(q_)}:Mu;function q_(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);vo(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Ds,Mo="__reactProps$"+Ds,hi="__reactContainer$"+Ds,Eu="__reactEvents$"+Ds,K_="__reactListeners$"+Ds,Z_="__reactHandles$"+Ds;function mr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vh(t);t!==null;){if(n=t[Gn])return n;t=vh(t)}return e}t=n,n=t.parentNode}return null}function Uo(t){return t=t[Gn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ll(t){return t[Mo]||null}var wu=[],ns=-1;function qi(t){return{current:t}}function st(t){0>ns||(t.current=wu[ns],wu[ns]=null,ns--)}function tt(t,e){ns++,wu[ns]=t.current,t.current=e}var Wi={},Ht=qi(Wi),Qt=qi(!1),Mr=Wi;function xs(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function sl(){st(Qt),st(Ht)}function _h(t,e,n){if(Ht.current!==Wi)throw Error(oe(168));tt(Ht,e),tt(Qt,n)}function fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Uv(t)||"Unknown",r));return ut({},n,i)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,Mr=Ht.current,tt(Ht,t),tt(Qt,Qt.current),!0}function xh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=fg(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,st(Qt),st(Ht),tt(Ht,t)):st(Qt),tt(Qt,n)}var si=null,Nl=!1,pc=!1;function hg(t){si===null?si=[t]:si.push(t)}function Q_(t){Nl=!0,hg(t)}function Ki(){if(!pc&&si!==null){pc=!0;var t=0,e=Je;try{var n=si;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Nl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),km(Ud,Ki),r}finally{Je=e,pc=!1}}return null}var is=[],rs=0,al=null,ll=0,gn=[],vn=0,Er=null,ai=1,li="";function cr(t,e){is[rs++]=ll,is[rs++]=al,al=t,ll=e}function pg(t,e,n){gn[vn++]=ai,gn[vn++]=li,gn[vn++]=Er,Er=t;var i=ai;t=li;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-Un(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function jd(t){t.return!==null&&(cr(t,1),pg(t,1,0))}function Wd(t){for(;t===al;)al=is[--rs],is[rs]=null,ll=is[--rs],is[rs]=null;for(;t===Er;)Er=gn[--vn],gn[vn]=null,li=gn[--vn],gn[vn]=null,ai=gn[--vn],gn[vn]=null}var cn=null,ln=null,ot=!1,Nn=null;function mg(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Au(t){if(ot){var e=ln;if(e){var n=e;if(!yh(t,e)){if(Tu(t))throw Error(oe(418));e=Oi(n.nextSibling);var i=cn;e&&yh(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,ot=!1,cn=t)}}else{if(Tu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ot=!1,cn=t}}}function Sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function ia(t){if(t!==cn)return!1;if(!ot)return Sh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Su(t.type,t.memoizedProps)),e&&(e=ln)){if(Tu(t))throw gg(),Error(oe(418));for(;e;)mg(t,e),e=Oi(e.nextSibling)}if(Sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?Oi(t.stateNode.nextSibling):null;return!0}function gg(){for(var t=ln;t;)t=Oi(t.nextSibling)}function ys(){ln=cn=null,ot=!1}function Xd(t){Nn===null?Nn=[t]:Nn.push(t)}var J_=vi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mh(t){var e=t._init;return e(t._payload)}function vg(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Hi(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,_,S){return g===null||g.tag!==6?(g=Sc(_,d.mode,S),g.return=d,g):(g=r(g,_),g.return=d,g)}function c(d,g,_,S){var b=_.type;return b===Zr?u(d,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ci&&Mh(b)===g.type)?(S=r(g,_.props),S.ref=Hs(d,g,_),S.return=d,S):(S=Ga(_.type,_.key,_.props,null,d.mode,S),S.ref=Hs(d,g,_),S.return=d,S)}function l(d,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Mc(_,d.mode,S),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function u(d,g,_,S,b){return g===null||g.tag!==7?(g=Sr(_,d.mode,S,b),g.return=d,g):(g=r(g,_),g.return=d,g)}function f(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sc(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return _=Ga(g.type,g.key,g.props,null,d.mode,_),_.ref=Hs(d,null,g),_.return=d,_;case Kr:return g=Mc(g,d.mode,_),g.return=d,g;case Ci:var S=g._init;return f(d,S(g._payload),_)}if(Zs(g)||Fs(g))return g=Sr(g,d.mode,_,null),g.return=d,g;ra(d,g)}return null}function h(d,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:o(d,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===b?c(d,g,_,S):null;case Kr:return _.key===b?l(d,g,_,S):null;case Ci:return b=_._init,h(d,g,b(_._payload),S)}if(Zs(_)||Fs(_))return b!==null?null:u(d,g,_,S,null);ra(d,_)}return null}function p(d,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,o(g,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yo:return d=d.get(S.key===null?_:S.key)||null,c(g,d,S,b);case Kr:return d=d.get(S.key===null?_:S.key)||null,l(g,d,S,b);case Ci:var A=S._init;return p(d,g,_,A(S._payload),b)}if(Zs(S)||Fs(S))return d=d.get(_)||null,u(g,d,S,b,null);ra(g,S)}return null}function v(d,g,_,S){for(var b=null,A=null,C=g,N=g=0,w=null;C!==null&&N<_.length;N++){C.index>N?(w=C,C=null):w=C.sibling;var M=h(d,C,_[N],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(d,C),g=s(M,g,N),A===null?b=M:A.sibling=M,A=M,C=w}if(N===_.length)return n(d,C),ot&&cr(d,N),b;if(C===null){for(;N<_.length;N++)C=f(d,_[N],S),C!==null&&(g=s(C,g,N),A===null?b=C:A.sibling=C,A=C);return ot&&cr(d,N),b}for(C=i(d,C);N<_.length;N++)w=p(C,d,N,_[N],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?N:w.key),g=s(w,g,N),A===null?b=w:A.sibling=w,A=w);return t&&C.forEach(function(R){return e(d,R)}),ot&&cr(d,N),b}function x(d,g,_,S){var b=Fs(_);if(typeof b!="function")throw Error(oe(150));if(_=b.call(_),_==null)throw Error(oe(151));for(var A=b=null,C=g,N=g=0,w=null,M=_.next();C!==null&&!M.done;N++,M=_.next()){C.index>N?(w=C,C=null):w=C.sibling;var R=h(d,C,M.value,S);if(R===null){C===null&&(C=w);break}t&&C&&R.alternate===null&&e(d,C),g=s(R,g,N),A===null?b=R:A.sibling=R,A=R,C=w}if(M.done)return n(d,C),ot&&cr(d,N),b;if(C===null){for(;!M.done;N++,M=_.next())M=f(d,M.value,S),M!==null&&(g=s(M,g,N),A===null?b=M:A.sibling=M,A=M);return ot&&cr(d,N),b}for(C=i(d,C);!M.done;N++,M=_.next())M=p(C,d,N,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?N:M.key),g=s(M,g,N),A===null?b=M:A.sibling=M,A=M);return t&&C.forEach(function(z){return e(d,z)}),ot&&cr(d,N),b}function m(d,g,_,S){if(typeof _=="object"&&_!==null&&_.type===Zr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var b=_.key,A=g;A!==null;){if(A.key===b){if(b=_.type,b===Zr){if(A.tag===7){n(d,A.sibling),g=r(A,_.props.children),g.return=d,d=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ci&&Mh(b)===A.type){n(d,A.sibling),g=r(A,_.props),g.ref=Hs(d,A,_),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===Zr?(g=Sr(_.props.children,d.mode,S,_.key),g.return=d,d=g):(S=Ga(_.type,_.key,_.props,null,d.mode,S),S.ref=Hs(d,g,_),S.return=d,d=S)}return a(d);case Kr:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Mc(_,d.mode,S),g.return=d,d=g}return a(d);case Ci:return A=_._init,m(d,g,A(_._payload),S)}if(Zs(_))return v(d,g,_,S);if(Fs(_))return x(d,g,_,S);ra(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=Sc(_,d.mode,S),g.return=d,d=g),a(d)):n(d,g)}return m}var Ss=vg(!0),_g=vg(!1),cl=qi(null),ul=null,ss=null,Yd=null;function $d(){Yd=ss=ul=null}function qd(t){var e=cl.current;st(cl),t._currentValue=e}function Cu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ul=t,Yd=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(ul===null)throw Error(oe(308));ss=t,ul.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var gr=null;function Kd(t){gr===null?gr=[t]:gr.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function Zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Kd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fd(t,n)}}function Eh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,l=c.next;c.next=null,a===null?s=l:a.next=l,a=c;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=l:o.next=l,u.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,u=l=c=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=ut({},f,h);break e;case 2:bi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(l=u=p,c=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(c=f),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Tr|=a,t.lanes=a,t.memoizedState=f}}function wh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Fo={},Yn=qi(Fo),Eo=qi(Fo),wo=qi(Fo);function vr(t){if(t===Fo)throw Error(oe(174));return t}function Qd(t,e){switch(tt(wo,e),tt(Eo,t),tt(Yn,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}st(Yn),tt(Yn,e)}function Ms(){st(Yn),st(Eo),st(wo)}function Sg(t){vr(wo.current);var e=vr(Yn.current),n=au(e,t.type);e!==n&&(tt(Eo,t),tt(Yn,n))}function Jd(t){Eo.current===t&&(st(Yn),st(Eo))}var lt=qi(0);function fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mc=[];function ef(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var ka=vi.ReactCurrentDispatcher,gc=vi.ReactCurrentBatchConfig,wr=0,ct=null,St=null,bt=null,hl=!1,oo=!1,To=0,ex=0;function Ut(){throw Error(oe(321))}function tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function nf(t,e,n,i,r,s){if(wr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=t===null||t.memoizedState===null?rx:sx,t=n(i,r),oo){s=0;do{if(oo=!1,To=0,25<=s)throw Error(oe(301));s+=1,bt=St=null,e.updateQueue=null,ka.current=ox,t=n(i,r)}while(oo)}if(ka.current=pl,e=St!==null&&St.next!==null,wr=0,bt=St=ct=null,hl=!1,e)throw Error(oe(300));return t}function rf(){var t=To!==0;return To=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ct.memoizedState=bt=t:bt=bt.next=t,bt}function En(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=bt===null?ct.memoizedState:bt.next;if(e!==null)bt=e,St=t;else{if(t===null)throw Error(oe(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},bt===null?ct.memoizedState=bt=t:bt=bt.next=t}return bt}function Ao(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=En(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,l=s;do{var u=l.lane;if((wr&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var f={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(o=c=f,a=i):c=c.next=f,ct.lanes|=u,Tr|=u}l=l.next}while(l!==null&&l!==s);c===null?a=i:c.next=o,On(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Tr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=En(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);On(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=ct,i=En(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,sf(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Co(9,Tg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(oe(349));wr&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,Cg(e)&&bg(t)}function Ag(t,e,n){return n(function(){Cg(e)&&bg(t)})}function Cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function bg(t){var e=pi(t,1);e!==null&&Fn(e,t,1,-1)}function Th(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=ix.bind(null,ct,t),[e.memoizedState,t]}function Co(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Rg(){return En().memoizedState}function za(t,e,n,i){var r=Bn();ct.flags|=t,r.memoizedState=Co(1|e,n,void 0,i===void 0?null:i)}function Dl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,i!==null&&tf(i,a.deps)){r.memoizedState=Co(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Co(1|e,n,s,i)}function Ah(t,e){return za(8390656,8,t,e)}function sf(t,e){return Dl(2048,8,t,e)}function Pg(t,e){return Dl(4,2,t,e)}function Lg(t,e){return Dl(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4,4,Ng.bind(null,e,t),n)}function of(){}function Ig(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ug(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fg(t,e,n){return wr&21?(On(n,e)||(n=Hm(),ct.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function tx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=gc.transition;gc.transition={};try{t(!1),e()}finally{Je=n,gc.transition=i}}function Og(){return En().memoizedState}function nx(t,e,n){var i=Bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kg(t))zg(e,n);else if(n=xg(t,e,n,i),n!==null){var r=jt();Fn(n,t,i,r),Bg(n,e,i)}}function ix(t,e,n){var i=Bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kg(t))zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,On(o,a)){var c=e.interleaved;c===null?(r.next=r,Kd(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=jt(),Fn(n,t,i,r),Bg(n,e,i))}}function kg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function zg(t,e){oo=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fd(t,n)}}var pl={readContext:Mn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},rx={readContext:Mn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=nx.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Th,useDebugValue:of,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Th(!1),e=t[0];return t=tx.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Bn();if(ot){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Rt===null)throw Error(oe(349));wr&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ah(Ag.bind(null,i,s,t),[t]),i.flags|=2048,Co(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Rt.identifierPrefix;if(ot){var n=li,i=ai;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ex++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sx={readContext:Mn,useCallback:Ig,useContext:Mn,useEffect:sf,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:vc,useRef:Rg,useState:function(){return vc(Ao)},useDebugValue:of,useDeferredValue:function(t){var e=En();return Fg(e,St.memoizedState,t)},useTransition:function(){var t=vc(Ao)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},ox={readContext:Mn,useCallback:Ig,useContext:Mn,useEffect:sf,useImperativeHandle:Dg,useInsertionEffect:Pg,useLayoutEffect:Lg,useMemo:Ug,useReducer:_c,useRef:Rg,useState:function(){return _c(Ao)},useDebugValue:of,useDeferredValue:function(t){var e=En();return St===null?e.memoizedState=t:Fg(e,St.memoizedState,t)},useTransition:function(){var t=_c(Ao)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Bi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Fn(e,t,r,i),Oa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=Bi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Fn(e,t,r,i),Oa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=Bi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Fn(e,t,i,n),Oa(e,t,i))}};function Ch(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(r,s):!0}function Hg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Jt(e)?Mr:Ht.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Ru(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Jt(e)?Mr:Ht.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=Iv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function Vg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gl||(gl=!0,Bu=i),Pu(t,e)},n}function Gg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Rh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ax;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Sx.bind(null,t,e,n),e.then(t,t))}function Ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var lx=vi.ReactCurrentOwner,Zt=!1;function Gt(t,e,n,i){e.child=t===null?_g(e,null,n,i):Ss(e,t.child,n,i)}function Nh(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=nf(t,e,n,i,s,r),n=rf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&n&&jd(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Dh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jg(t,e,s,i,r)):(t=Ga(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function jg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xo(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Lu(t,e,n,i,r)}function Wg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(as,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(as,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(as,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(as,an),an|=i;return Gt(t,e,r,n),e.child}function Xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lu(t,e,n,i,r){var s=Jt(n)?Mr:Ht.current;return s=xs(e,s),hs(e,r),n=nf(t,e,n,i,s,r),i=rf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&i&&jd(e),e.flags|=1,Gt(t,e,n,r),e.child)}function Ih(t,e,n,i,r){if(Jt(n)){var s=!0;ol(e)}else s=!1;if(hs(e,r),e.stateNode===null)Ba(t,e),Hg(e,n,i),Ru(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=Mn(l):(l=Jt(n)?Mr:Ht.current,l=xs(e,l));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==l)&&bh(e,a,i,l),bi=!1;var h=e.memoizedState;a.state=h,dl(e,i,a,r),c=e.memoizedState,o!==i||h!==c||Qt.current||bi?(typeof u=="function"&&(bu(e,n,u,i),c=e.memoizedState),(o=bi||Ch(e,n,o,i,h,c,l))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yg(t,e),o=e.memoizedProps,l=e.type===e.elementType?o:Pn(e.type,o),a.props=l,f=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Mn(c):(c=Jt(n)?Mr:Ht.current,c=xs(e,c));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==c)&&bh(e,a,i,c),bi=!1,h=e.memoizedState,a.state=h,dl(e,i,a,r);var v=e.memoizedState;o!==f||h!==v||Qt.current||bi?(typeof p=="function"&&(bu(e,n,p,i),v=e.memoizedState),(l=bi||Ch(e,n,l,i,h,v,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=c,i=l):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nu(t,e,n,i,s,r)}function Nu(t,e,n,i,r,s){Xg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&xh(e,n,!1),mi(t,e,s);i=e.stateNode,lx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Gt(t,e,o,s),e.memoizedState=i.state,r&&xh(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?_h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_h(t,e.context,!1),Qd(t,e.containerInfo)}function Uh(t,e,n,i,r){return ys(),Xd(r),e.flags|=256,Gt(t,e,n,i),e.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $g(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return Au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ol(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Iu(n),e.memoizedState=Du,t):af(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return cx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Hi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Hi(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Du,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function af(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&Xd(i),Ss(e,t.child,null,n),t=af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=xc(Error(oe(422))),sa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ol({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Iu(a),e.memoizedState=Du,s);if(!(e.mode&1))return sa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=xc(s,i,void 0),sa(t,e,a,i)}if(o=(a&t.childLanes)!==0,Zt||o){if(i=Rt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Fn(i,t,r,-1))}return hf(),i=xc(Error(oe(421))),sa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Mx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Oi(r.nextSibling),cn=e,ot=!0,Nn=null,t!==null&&(gn[vn++]=ai,gn[vn++]=li,gn[vn++]=Er,ai=t.id,li=t.overflow,Er=e),e=af(e,i.children),e.flags|=4096,e)}function Fh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cu(t.return,e,n)}function yc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fh(t,n,e);else if(t.tag===19)Fh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ux(t,e,n){switch(e.tag){case 3:Yg(e),ys();break;case 5:Sg(e);break;case 1:Jt(e.type)&&ol(e);break;case 4:Qd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?$g(t,e,n):(tt(lt,lt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wg(t,e,n)}return mi(t,e,n)}var Kg,Uu,Zg,Qg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(Yn.current);var s=null;switch(n){case"input":r=iu(t,r),i=iu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=ou(t,r),i=ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rl)}lu(n,i);var a;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(o=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==o&&(c!=null||o!=null))if(l==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(fo.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&it("scroll",t),s||o===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};Qg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dx(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Jt(e.type)&&sl(),Ft(e),null;case 3:return i=e.stateNode,Ms(),st(Qt),st(Ht),ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Gu(Nn),Nn=null))),Uu(t,e),Ft(e),null;case 5:Jd(e);var r=vr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ft(e),null}if(t=vr(Yn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)it(Js[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Wf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Yf(i,s),it("invalid",i)}lu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&na(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&na(i.textContent,o,t),r=["children",""+o]):fo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":$o(i),Xf(i,s,!0);break;case"textarea":$o(i),$f(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Gn]=e,t[Mo]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(a=cu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)it(Js[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Wf(t,i),r=iu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),it("invalid",t);break;case"textarea":Yf(t,i),r=ou(t,i),it("invalid",t);break;default:r=i}lu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Rm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ho(t,c):typeof c=="number"&&ho(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&it("scroll",t):c!=null&&Pd(t,s,c,a))}switch(n){case"input":$o(t),Xf(t,i,!1);break;case"textarea":$o(t),$f(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Qg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=vr(wo.current),vr(Yn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ft(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&ln!==null&&e.mode&1&&!(e.flags&128))gg(),ys(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Gn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Nn!==null&&(Gu(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?wt===0&&(wt=3):hf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ms(),Uu(t,e),t===null&&yo(e.stateNode.containerInfo),Ft(e),null;case 10:return qd(e.type._context),Ft(e),null;case 17:return Jt(e.type)&&sl(),Ft(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=fl(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>ws&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=fl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ot)return Ft(e),null}else 2*mt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function fx(t,e){switch(Wd(e),e.tag){case 1:return Jt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),st(Qt),st(Ht),ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Ms(),null;case 10:return qd(e.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var oa=!1,zt=!1,hx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Fu(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Oh=!1;function px(t,e){if(xu=tl,t=ig(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,l=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++l===r&&(o=a),h===s&&++u===i&&(c=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(yu={focusedElem:t,selectionRange:n},tl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=Oh,Oh=!1,v}function ao(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fu(e,n,s)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Mo],delete e[Eu],delete e[K_],delete e[Z_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(i!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}function zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}var Nt=null,Ln=!1;function yi(t,e,n){for(n=n.child;n!==null;)t0(t,e,n),n=n.sibling}function t0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:zt||os(n,e);case 6:var i=Nt,r=Ln;Nt=null,yi(t,e,n),Nt=i,Ln=r,Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Ln?(t=Nt,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),vo(t)):hc(Nt,n.stateNode));break;case 4:i=Nt,r=Ln,Nt=n.stateNode.containerInfo,Ln=!0,yi(t,e,n),Nt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fu(n,e,a),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!zt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,yi(t,e,n),zt=i):yi(t,e,n);break;default:yi(t,e,n)}}function zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hx),e.forEach(function(i){var r=Ex.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Ln=!1;break e;case 3:Nt=o.stateNode.containerInfo,Ln=!0;break e;case 4:Nt=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(Nt===null)throw Error(oe(160));t0(s,a,r),Nt=null,Ln=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){pt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n0(e,t),e=e.sibling}function n0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),zn(t),i&4){try{ao(3,t,t.return),Ul(3,t)}catch(x){pt(t,t.return,x)}try{ao(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:An(e,t),zn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(An(e,t),zn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wm(r,s),cu(o,a);var l=cu(o,s);for(a=0;a<c.length;a+=2){var u=c[a],f=c[a+1];u==="style"?Rm(r,f):u==="dangerouslySetInnerHTML"?Cm(r,f):u==="children"?ho(r,f):Pd(r,u,f,l)}switch(o){case"input":ru(r,s);break;case"textarea":Tm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?cs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mo]=s}catch(x){pt(t,t.return,x)}}break;case 6:if(An(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){pt(t,t.return,x)}}break;case 3:if(An(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:An(e,t),zn(t);break;case 13:An(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uf=mt())),i&4&&zh(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(l=zt)||u,An(e,t),zt=l):An(e,t),zn(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!u&&t.mode&1)for(ge=t,u=t.child;u!==null;){for(f=ge=u;ge!==null;){switch(h=ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:ao(4,h,h.return);break;case 1:os(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){Hh(f);continue}}p!==null?(p.return=h,ge=p):Hh(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=bm("display",a))}catch(x){pt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(x){pt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),zn(t),i&4&&zh(t);break;case 21:break;default:An(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=kh(t);zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=kh(t);ku(t,o,a);break;default:throw Error(oe(161))}}catch(c){pt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mx(t,e,n){ge=t,i0(t)}function i0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||oa;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||zt;o=oa;var l=zt;if(oa=a,(zt=c)&&!l)for(ge=r;ge!==null;)a=ge,c=a.child,a.tag===22&&a.memoizedState!==null?Vh(r):c!==null?(c.return=a,ge=c):Vh(r);for(;s!==null;)ge=s,i0(s),s=s.sibling;ge=r,oa=o,zt=l}Bh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Bh(t)}}function Bh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}zt||e.flags&512&&Ou(e)}catch(h){pt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Hh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Vh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(c){pt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){pt(e,r,c)}}var s=e.return;try{Ou(e)}catch(c){pt(e,s,c)}break;case 5:var a=e.return;try{Ou(e)}catch(c){pt(e,a,c)}}}catch(c){pt(e,e.return,c)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var gx=Math.ceil,ml=vi.ReactCurrentDispatcher,lf=vi.ReactCurrentOwner,Sn=vi.ReactCurrentBatchConfig,je=0,Rt=null,yt=null,Dt=0,an=0,as=qi(0),wt=0,bo=null,Tr=0,Fl=0,cf=0,lo=null,qt=null,uf=0,ws=1/0,ri=null,gl=!1,Bu=null,zi=null,aa=!1,Di=null,vl=0,co=0,Hu=null,Ha=-1,Va=0;function jt(){return je&6?mt():Ha!==-1?Ha:Ha=mt()}function Bi(t){return t.mode&1?je&2&&Dt!==0?Dt&-Dt:J_.transition!==null?(Va===0&&(Va=Hm()),Va):(t=Je,t!==0||(t=window.event,t=t===void 0?16:$m(t.type)),t):1}function Fn(t,e,n,i){if(50<co)throw co=0,Hu=null,Error(oe(185));Do(t,n,i),(!(je&2)||t!==Rt)&&(t===Rt&&(!(je&2)&&(Fl|=n),wt===4&&Pi(t,Dt)),en(t,i),n===1&&je===0&&!(e.mode&1)&&(ws=mt()+500,Nl&&Ki()))}function en(t,e){var n=t.callbackNode;Jv(t,e);var i=el(t,t===Rt?Dt:0);if(i===0)n!==null&&Zf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zf(n),e===1)t.tag===0?Q_(Gh.bind(null,t)):hg(Gh.bind(null,t)),$_(function(){!(je&6)&&Ki()}),n=null;else{switch(Vm(i)){case 1:n=Ud;break;case 4:n=zm;break;case 16:n=Ja;break;case 536870912:n=Bm;break;default:n=Ja}n=d0(n,r0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r0(t,e){if(Ha=-1,Va=0,je&6)throw Error(oe(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=el(t,t===Rt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_l(t,i);else{e=i;var r=je;je|=2;var s=o0();(Rt!==t||Dt!==e)&&(ri=null,ws=mt()+500,yr(t,e));do try{xx();break}catch(o){s0(t,o)}while(!0);$d(),ml.current=s,je=r,yt!==null?e=0:(Rt=null,Dt=0,e=wt)}if(e!==0){if(e===2&&(r=pu(t),r!==0&&(i=r,e=Vu(t,r))),e===1)throw n=bo,yr(t,0),Pi(t,i),en(t,mt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vx(r)&&(e=_l(t,i),e===2&&(s=pu(t),s!==0&&(i=s,e=Vu(t,s))),e===1))throw n=bo,yr(t,0),Pi(t,i),en(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:ur(t,qt,ri);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=uf+500-mt(),10<e)){if(el(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mu(ur.bind(null,t,qt,ri),e);break}ur(t,qt,ri);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Un(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gx(i/1960))-i,10<i){t.timeoutHandle=Mu(ur.bind(null,t,qt,ri),i);break}ur(t,qt,ri);break;case 5:ur(t,qt,ri);break;default:throw Error(oe(329))}}}return en(t,mt()),t.callbackNode===n?r0.bind(null,t):null}function Vu(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=qt,qt=n,e!==null&&Gu(e)),t}function Gu(t){qt===null?qt=t:qt.push.apply(qt,t)}function vx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~cf,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Gh(t){if(je&6)throw Error(oe(327));ps();var e=el(t,0);if(!(e&1))return en(t,mt()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var i=pu(t);i!==0&&(e=i,n=Vu(t,i))}if(n===1)throw n=bo,yr(t,0),Pi(t,e),en(t,mt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,qt,ri),en(t,mt()),null}function df(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(ws=mt()+500,Nl&&Ki())}}function Ar(t){Di!==null&&Di.tag===0&&!(je&6)&&ps();var e=je;je|=1;var n=Sn.transition,i=Je;try{if(Sn.transition=null,Je=1,t)return t()}finally{Je=i,Sn.transition=n,je=e,!(je&6)&&Ki()}}function ff(){an=as.current,st(as)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y_(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sl();break;case 3:Ms(),st(Qt),st(Ht),ef();break;case 5:Jd(i);break;case 4:Ms();break;case 13:st(lt);break;case 19:st(lt);break;case 10:qd(i.type._context);break;case 22:case 23:ff()}n=n.return}if(Rt=t,yt=t=Hi(t.current,null),Dt=an=e,wt=0,bo=null,cf=Fl=Tr=0,qt=lo=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function s0(t,e){do{var n=yt;try{if($d(),ka.current=pl,hl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hl=!1}if(wr=0,bt=St=ct=null,oo=!1,To=0,lf.current=null,n===null||n.return===null){wt=1,bo=e,yt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Dt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Ph(a);if(p!==null){p.flags&=-257,Lh(p,a,o,s,e),p.mode&1&&Rh(s,l,e),e=p,c=l;var v=e.updateQueue;if(v===null){var x=new Set;x.add(c),e.updateQueue=x}else v.add(c);break e}else{if(!(e&1)){Rh(s,l,e),hf();break e}c=Error(oe(426))}}else if(ot&&o.mode&1){var m=Ph(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lh(m,a,o,s,e),Xd(Es(c,o));break e}}s=c=Es(c,o),wt!==4&&(wt=2),lo===null?lo=[s]:lo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Vg(s,c,e);Eh(s,d);break e;case 1:o=c;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(zi===null||!zi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Gg(s,o,e);Eh(s,S);break e}}s=s.return}while(s!==null)}l0(n)}catch(b){e=b,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function o0(){var t=ml.current;return ml.current=pl,t===null?pl:t}function hf(){(wt===0||wt===3||wt===2)&&(wt=4),Rt===null||!(Tr&268435455)&&!(Fl&268435455)||Pi(Rt,Dt)}function _l(t,e){var n=je;je|=2;var i=o0();(Rt!==t||Dt!==e)&&(ri=null,yr(t,e));do try{_x();break}catch(r){s0(t,r)}while(!0);if($d(),je=n,ml.current=i,yt!==null)throw Error(oe(261));return Rt=null,Dt=0,wt}function _x(){for(;yt!==null;)a0(yt)}function xx(){for(;yt!==null&&!jv();)a0(yt)}function a0(t){var e=u0(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?l0(t):yt=e,lf.current=null}function l0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fx(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,yt=null;return}}else if(n=dx(n,e,an),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);wt===0&&(wt=5)}function ur(t,e,n){var i=Je,r=Sn.transition;try{Sn.transition=null,Je=1,yx(t,e,n,i)}finally{Sn.transition=r,Je=i}return null}function yx(t,e,n,i){do ps();while(Di!==null);if(je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e_(t,s),t===Rt&&(yt=Rt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,d0(Ja,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var a=Je;Je=1;var o=je;je|=4,lf.current=null,px(t,n),n0(n,t),B_(yu),tl=!!xu,yu=xu=null,t.current=n,mx(n),Wv(),je=o,Je=a,Sn.transition=s}else t.current=n;if(aa&&(aa=!1,Di=t,vl=r),s=t.pendingLanes,s===0&&(zi=null),$v(n.stateNode),en(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gl)throw gl=!1,t=Bu,Bu=null,t;return vl&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Hu?co++:(co=0,Hu=t):co=0,Ki(),null}function ps(){if(Di!==null){var t=Vm(vl),e=Sn.transition,n=Je;try{if(Sn.transition=null,Je=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,vl=0,je&6)throw Error(oe(331));var r=je;for(je|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var l=o[c];for(ge=l;ge!==null;){var u=ge;switch(u.tag){case 0:case 11:case 15:ao(8,u,s)}var f=u.child;if(f!==null)f.return=u,ge=f;else for(;ge!==null;){u=ge;var h=u.sibling,p=u.return;if(Jg(u),u===l){ge=null;break}if(h!==null){h.return=p,ge=h;break}ge=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){a=ge;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ge=_;else e:for(a=g;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ul(9,o)}}catch(b){pt(o,o.return,b)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(je=r,Ki(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Cl,t)}catch{}i=!0}return i}finally{Je=n,Sn.transition=e}}return!1}function jh(t,e,n){e=Es(n,e),e=Vg(t,e,1),t=ki(t,e,1),e=jt(),t!==null&&(Do(t,1,e),en(t,e))}function pt(t,e,n){if(t.tag===3)jh(t,t,n);else for(;e!==null;){if(e.tag===3){jh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=Es(n,t),t=Gg(e,t,1),e=ki(e,t,1),t=jt(),e!==null&&(Do(e,1,t),en(e,t));break}}e=e.return}}function Sx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Dt&n)===n&&(wt===4||wt===3&&(Dt&130023424)===Dt&&500>mt()-uf?yr(t,0):cf|=n),en(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=jt();t=pi(t,e),t!==null&&(Do(t,e,n),en(t,n))}function Mx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function Ex(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),c0(t,n)}var u0;u0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,ux(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,ot&&e.flags&1048576&&pg(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(t,e),t=e.pendingProps;var r=xs(e,Ht.current);hs(e,n),r=nf(null,e,i,t,r,n);var s=rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zd(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,Ru(e,i,t,n),e=Nu(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&jd(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tx(i),t=Pn(i,t),r){case 0:e=Lu(null,e,i,t,n);break e;case 1:e=Ih(null,e,i,t,n);break e;case 11:e=Nh(null,e,i,t,n);break e;case 14:e=Dh(null,e,i,Pn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Lu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ih(t,e,i,r,n);case 3:e:{if(Yg(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yg(t,e),dl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(oe(423)),e),e=Uh(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(oe(424)),e),e=Uh(t,e,i,n,r);break e}else for(ln=Oi(e.stateNode.containerInfo.firstChild),cn=e,ot=!0,Nn=null,n=_g(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=mi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Sg(e),t===null&&Au(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Su(i,r)?a=null:s!==null&&Su(i,s)&&(e.flags|=32),Xg(t,e),Gt(t,e,a,n),e.child;case 6:return t===null&&Au(e),null;case 13:return $g(t,e,n);case 4:return Qd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Nh(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,tt(cl,i._currentValue),i._currentValue=a,s!==null)if(On(s.value,a)){if(s.children===r.children&&!Qt.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=di(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Cu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Cu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=Mn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Dh(t,e,i,r,n);case 15:return jg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ba(t,e),e.tag=1,Jt(i)?(t=!0,ol(e)):t=!1,hs(e,n),Hg(e,i,r),Ru(e,i,r,n),Nu(null,e,i,!0,t,n);case 19:return qg(t,e,n);case 22:return Wg(t,e,n)}throw Error(oe(156,e.tag))};function d0(t,e){return km(t,e)}function wx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new wx(t,e,n,i)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tx(t){if(typeof t=="function")return pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Dd)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")pf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Zr:return Sr(n.children,r,s,e);case Ld:a=8,r|=8;break;case Jc:return t=xn(12,n,e,r|2),t.elementType=Jc,t.lanes=s,t;case eu:return t=xn(13,n,e,r),t.elementType=eu,t.lanes=s,t;case tu:return t=xn(19,n,e,r),t.elementType=tu,t.lanes=s,t;case Sm:return Ol(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:a=10;break e;case ym:a=9;break e;case Nd:a=11;break e;case Dd:a=14;break e;case Ci:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=xn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function Ol(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ax(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mf(t,e,n,i,r,s,a,o,c){return t=new Ax(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(s),t}function Cx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return Wi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Jt(n))return fg(t,n,e)}return e}function h0(t,e,n,i,r,s,a,o,c){return t=mf(n,i,!0,t,r,s,a,o,c),t.context=f0(null),n=t.current,i=jt(),r=Bi(n),s=di(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Do(t,r,i),en(t,i),t}function kl(t,e,n,i){var r=e.current,s=jt(),a=Bi(r);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,a),t!==null&&(Fn(t,r,a,s),Oa(t,r,a)),a}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gf(t,e){Wh(t,e),(t=t.alternate)&&Wh(t,e)}function bx(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}zl.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));kl(t,e,null,null)};zl.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){kl(null,t,null,null)}),e[hi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&Ym(t)}};function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function Rx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=xl(a);s.call(l)}}var a=h0(e,i,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=a,t[hi]=a.current,yo(t.nodeType===8?t.parentNode:t),Ar(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var l=xl(c);o.call(l)}}var c=mf(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=c,t[hi]=c.current,yo(t.nodeType===8?t.parentNode:t),Ar(function(){kl(e,c,n,i)}),c}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=xl(a);o.call(c)}}kl(e,a,t,r)}else a=Rx(n,e,t,r,i);return xl(a)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Fd(e,n|1),en(e,mt()),!(je&6)&&(ws=mt()+500,Ki()))}break;case 13:Ar(function(){var i=pi(t,1);if(i!==null){var r=jt();Fn(i,t,1,r)}}),gf(t,1)}};Od=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=jt();Fn(e,t,134217728,n)}gf(t,134217728)}};jm=function(t){if(t.tag===13){var e=Bi(t),n=pi(t,e);if(n!==null){var i=jt();Fn(n,t,e,i)}gf(t,e)}};Wm=function(){return Je};Xm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};du=function(t,e,n){switch(e){case"input":if(ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(oe(90));Em(i),ru(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};Nm=df;Dm=Ar;var Px={usingClientEntryPoint:!1,Events:[Uo,ts,Ll,Pm,Lm,df]},Gs={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lx={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Cl=la.inject(Lx),Xn=la}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_f(e))throw Error(oe(200));return Cx(t,e,null,n)};fn.createRoot=function(t,e){if(!_f(t))throw Error(oe(299));var n=!1,i="",r=p0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mf(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,yo(t.nodeType===8?t.parentNode:t),new vf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Ar(t)};fn.hydrate=function(t,e,n){if(!Bl(e))throw Error(oe(200));return Hl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!_f(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=p0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=h0(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};fn.render=function(t,e,n){if(!Bl(e))throw Error(oe(200));return Hl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(oe(40));return t._reactRootContainer?(Ar(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};fn.unstable_batchedUpdates=df;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Hl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(t){console.error(t)}}m0(),mm.exports=fn;var Nx=mm.exports,g0,Yh=Nx;g0=Yh.createRoot,Yh.hydrateRoot;const v0=nt.createContext(void 0),Dx=({children:t})=>{const[e,n]=nt.useState(()=>localStorage.getItem("theme")||"dark");return nt.useEffect(()=>{localStorage.setItem("theme",e),Object.entries({dark:{"--primary-50":"#e23239","--primary-100":"#e0272e","--primary-200":"#d01e25","--primary-300":"#ba1a21","--primary-400":"#a3171d","--primary-500":"#8d1419","--primary-600":"#801217","--primary-700":"#721014","--primary-800":"#650e12","--primary-900":"#570c0f","--primary-950":"#510b0e","--secondary-50":"#62666f","--secondary-100":"#5c6068","--secondary-200":"#50535b","--secondary-300":"#44474d","--secondary-400":"#383a40","--secondary-500":"#2c2e32","--secondary-600":"#25272a","--secondary-700":"#1e1f22","--secondary-800":"#17181a","--secondary-900":"#0f1011","--secondary-950":"#0c0c0d"},light:{"--primary-50":"#3A3A91","--primary-100":"#39398D","--primary-200":"#363686","--primary-300":"#33337F","--primary-400":"#303077","--primary-500":"#2D2D70","--primary-600":"#2A2A69","--primary-700":"#272761","--primary-800":"#24245A","--primary-900":"#212153","--primary-950":"#20204F","--secondary-50":"#FAF8F6","--secondary-100":"#FAF8F6","--secondary-200":"#FAF8F6","--secondary-300":"#FAF8F6","--secondary-400":"#FAF8F6","--secondary-500":"#FAF8F6","--secondary-600":"#FAF8F6","--secondary-700":"#FAF8F6","--secondary-800":"#FAF8F6","--secondary-900":"#FAF8F6","--secondary-950":"#FAF8F6"}}[e]).forEach(([r,s])=>{document.documentElement.style.setProperty(r,s)})},[e]),y.jsx(v0.Provider,{value:{theme:e,setTheme:n},children:t})},Zi=()=>{const t=nt.useContext(v0);return t||(console.warn("useTheme must be used within a ThemeProvider"),{theme:"dark",setTheme:()=>{}})};function Ix(){return y.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M3 6h18M3 12h18M3 18h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}const Ux=()=>{const[t,e]=nt.useState(!1),[n,i]=nt.useState(!1),{theme:r,setTheme:s}=Zi();return nt.useEffect(()=>{const a=setTimeout(()=>{e(!0)},100);return()=>clearTimeout(a)},[]),y.jsx("header",{className:`fixed w-full top-0 left-0 backdrop-blur-lg shadow-xl z-50 transition-opacity duration-[1500ms] ${r=="light"?"bg-white bg-opacity-50":"bg-black bg-opacity-60"} ${t?"opacity-100":"opacity-0"}`,children:y.jsxs("nav",{className:"container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center",children:[y.jsxs("div",{className:"lg:hidden relative",children:[y.jsx("button",{onClick:()=>i(!n),className:"cursor-pointer",children:y.jsx(Ix,{})}),y.jsx("div",{className:`${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"} bg-secondary-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`,children:y.jsx("ul",{className:"flex flex-col gap-4",children:$h.map((a,o)=>y.jsx("div",{onClick:()=>i(!1),children:y.jsx(qh,{href:a.href,text:a.text})},o))})})]}),y.jsx("ul",{className:"hidden lg:flex space-x-6",children:$h.map((a,o)=>y.jsx(qh,{href:a.href,text:a.text},o))}),y.jsx("button",{onClick:()=>s(r==="light"?"dark":"light"),className:"relative w-12 h-7 rounded-full transition-all duration-300 bg-gradient-to-b from-pumpkin-500 to-pumpkin-700 shadow-lg shadow-inner",children:y.jsx("span",{className:`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 bg-gradient-to-b from-pumpkin-100 to-white border border-pumpkin-600 shadow-md ${r==="dark"?"translate-x-5":"translate-x-0"}`})})]})})},$h=[{href:"home",text:"Home"},{href:"about",text:"About"},{href:"skills",text:"Skills"},{href:"experience",text:"Experience"},{href:"projects",text:"Projects"},{href:"education",text:"Education"},{href:"certificates",text:"Certificates"},{href:"achievements",text:"Achievements"},{href:"fun-facts",text:"Fun Facts"},{href:"languages",text:"Languages"},{href:"home",text:"Contact"}],qh=({href:t,text:e})=>{const{theme:n}=Zi(),i=r=>{var s;(s=document.getElementById(r))==null||s.scrollIntoView({behavior:"smooth"})};return y.jsxs("li",{onClick:()=>i(t),className:"relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]",children:[e,y.jsx("span",{className:`${n=="light"?"bg-black":"bg-white"} absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`})]})};function Fx(){return y.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"})})}function Ox(){return y.jsx("svg",{width:"40px",height:"40px",viewBox:"-0.5 0 15 15",children:y.jsx("path",{className:"fill-current text-pumpkin",fillRule:"evenodd",d:"M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z",transform:"translate(-61 -152)"})})}function kx(){return y.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 1920 1920",children:y.jsx("path",{d:"M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z",fillRule:"evenodd"})})}function zx(){return y.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 32 32",version:"1.1",children:y.jsx("path",{d:"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"})})}function Bx(){return y.jsx("svg",{className:"fill-current text-pumpkin",height:"40px",width:"40px",version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:y.jsx("path",{d:`M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7
   l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8
   c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64
   c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z`})})}function Hx(){return y.jsx("svg",{className:"fill-current text-pumpkin",height:"40px",width:"40px",version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:y.jsxs("g",{children:[y.jsx("path",{className:"st0",d:`M500.176,55.798c0,0-21.734-7.434-39.55-11.967C411.686,31.369,308.823,24.727,256,24.727
		S100.314,31.369,51.374,43.831c-17.816,4.533-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835
		c0.757,8.596,7.957,15.201,16.581,15.201h84.786c8.507,0,15.643-6.416,16.554-14.878l4.28-39.973
		c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.485-6.182,110.081-6.182c41.588,0,110.081,6.182,110.081,6.182
		c7.948,0.676,14.301,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.544,14.878h84.778
		c8.633,0,15.833-6.605,16.59-15.201l8.507-97.835C512.621,65.322,507.718,58.078,500.176,55.798z`}),y.jsx("path",{className:"st0",d:`M357.502,136.629h-55.365v46.137h-92.274v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618
		c0,32.296,0,129.95,0,129.95c0,7.218,5.858,13.076,13.075,13.076h416.768c7.219,0,13.075-5.858,13.075-13.076
		c0,0,0-97.654,0-129.95C366.729,256.586,357.502,136.629,357.502,136.629z M300.425,388.672c7.435-7.434,19.5-7.434,26.934,0
		c7.426,7.435,7.426,19.491,0,26.935c-7.434,7.425-19.499,7.425-26.934,0C292.991,408.163,292.991,396.106,300.425,388.672z
		 M327.359,299.812c-7.434,7.425-19.499,7.425-26.934-0.008c-7.434-7.434-7.434-19.5,0-26.926c7.435-7.443,19.5-7.443,26.934-0.009
		C334.785,280.303,334.785,292.369,327.359,299.812z M337.876,363.288c-10.517-0.009-19.041-8.534-19.041-19.05
		c0-10.516,8.524-19.041,19.041-19.041c10.507,0,19.041,8.525,19.049,19.041C356.917,354.753,348.383,363.278,337.876,363.288z
		 M255.991,407.081c10.516,0,19.04,8.526,19.04,19.041c0,10.507-8.524,19.041-19.04,19.041c-10.516,0-19.041-8.534-19.041-19.041
		C236.95,415.607,245.475,407.081,255.991,407.081z M255.991,281.394c-10.516,0-19.041-8.525-19.041-19.041
		c0-10.517,8.524-19.041,19.041-19.041c10.516,0,19.04,8.524,19.04,19.041C275.031,272.869,266.507,281.394,255.991,281.394z
		 M184.632,388.672c7.424-7.434,19.491-7.434,26.925,0c7.425,7.435,7.425,19.491,0.009,26.926c-7.443,7.434-19.51,7.434-26.934,0
		C177.188,408.163,177.188,396.106,184.632,388.672z M184.632,299.804c-7.444-7.434-7.444-19.5,0-26.926
		c7.424-7.443,19.491-7.443,26.925,0c7.425,7.425,7.425,19.491,0,26.926C204.123,307.237,192.056,307.237,184.632,299.804z
		 M174.115,325.197c10.507,0,19.032,8.525,19.032,19.041c0,10.516-8.524,19.041-19.032,19.041c-10.525,0-19.049-8.525-19.041-19.041
		C155.066,333.722,163.59,325.197,174.115,325.197z`})]})})}function Vx(){return y.jsx("svg",{width:"40px",height:"40px",viewBox:"0 0 20 20",version:"1.1",children:y.jsx("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:y.jsx("g",{className:"fill-current text-pumpkin",id:"Dribbble-Light-Preview",transform:"translate(-300.000000, -7599.000000)",children:y.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:y.jsx("path",{d:"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439",id:"whatsapp-[#128]"})})})})})}const Gx=t=>{const e=nt.useRef(null),[n,i]=nt.useState(!1);return nt.useEffect(()=>{const r=new IntersectionObserver(([s])=>{i(s.isIntersecting)},t);return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[e,t]),[e,n]},Oo=t=>{const[e,n]=Gx(t),[i,r]=nt.useState(!1);return n&&!i&&r(!0),[e,i]};function wn({children:t}){const[e,n]=Oo({threshold:.1});return y.jsx("div",{ref:e,className:`transition-opacity duration-[1500ms] ${n?"opacity-100":"opacity-0"}`,children:t})}function Vl({children:t}){const[e,n]=Oo({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-right":"opacity-0"}`,children:t})}function Ro({children:t}){const[e,n]=Oo({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-left":"opacity-0"}`,children:t})}function _0({children:t}){return y.jsx("div",{className:"mx-auto px-6 min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]",children:t})}const Ts=({src:t,className:e="",alt:n="image"})=>{const[i,r]=nt.useState(!1);return y.jsxs(y.Fragment,{children:[!i&&y.jsx("div",{className:`flex justify-center items-center ${e}`,children:y.jsx("img",{className:"w-16 h-16",src:"images/loading.gif"})}),y.jsx("img",{className:e,src:t,alt:n,style:{display:i?"block":"none"},onLoad:()=>r(!0)})]})},jx=()=>{const{theme:t}=Zi();return y.jsx("div",{className:"bg-[url('/images/cover.jpg')] bg-cover",children:y.jsxs("div",{className:`${t=="light"?"bg-[#FFFFFFBB]":"bg-[#000000DD]"} min-h-screen relative`,children:[y.jsx(Ts,{className:"absolute bottom-0 w-full h-40",src:"images/wave.png"}),y.jsx(_0,{children:y.jsxs("div",{className:"font-bold relative min-h-screen flex flex-col sm:flex-row justify-between items-center gap-8 py-20",children:[y.jsx("div",{className:"order-1 sm:order-0",children:y.jsx(Ro,{children:y.jsxs("div",{className:"lg:text-[1.2rem] flex flex-col gap-2",children:[y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(kx,{}),y.jsx("a",{href:"mailto:nagham.qarqamaz.kp@gmail.com",className:"hover:underline",children:"nagham.qarqamaz.kp@gmail.com"})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(Hx,{}),y.jsx("a",{href:"tel:+963992803522",className:"hover:underline",children:"+963 992 803 522"})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(Vx,{}),y.jsx("a",{href:"https://wa.me/+963992803522",className:"hover:underline",target:"_blank",children:"+963 992 803 522"})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(Bx,{}),y.jsxs("div",{children:[y.jsx("a",{href:"https://www.google.com/maps/place/Latakia,+Syria",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"Syria, Latakia"}),y.jsx("span",{className:"text-pumpkin lg:text-[1.2rem] italic ml-2",children:"(Willing To Relocate)"})]})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(Ox,{}),y.jsx("div",{children:"November 10th, 1999"})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(zx,{}),y.jsx("a",{href:"https://www.linkedin.com/in/nagham-qarqamaz/",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/in/nagham-qarqamaz"})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsx(Fx,{}),y.jsx("a",{href:"https://codeforces.com/profile/Nagham_Qarqamaz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/profile/Nagham_Qarqamaz"})]})]})})}),y.jsx("div",{className:"flex-grow order-0 sm:order-1",children:y.jsx(Vl,{children:y.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[y.jsx(wn,{children:y.jsx(Ts,{className:"mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]",src:"images/sketch.png"})}),y.jsx("h1",{className:"text-[1.8rem] lg:text-[3rem] mb-2",children:"Nagham Qarqamaz"}),y.jsx("p",{className:"lg:text-[1.3rem]",children:"Software Engineer & Full-Stack Developer"}),y.jsx("a",{href:"/resume/Nagham Qarqamaz Resume.pdf",download:"Nagham Qarqamaz Resume.pdf",className:"text-white mt-6 text-xl lg:text-2xl bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-2xl transform hover:scale-105 transition-transform duration-300 inline-block",children:"Download Resume"})]})})})]})})]})})};var x0={exports:{}};(function(t,e){(function(n,i){t.exports=i(nt)})(typeof self<"u"?self:sv,n=>(()=>{var i={7403:(o,c,l)=>{l.d(c,{default:()=>I});var u=l(4087),f=l.n(u);const h=function(H){return new RegExp(/<[a-z][\s\S]*>/i).test(H)},p=function(H,B){return Math.floor(Math.random()*(B-H+1))+H};var v="TYPE_CHARACTER",x="REMOVE_CHARACTER",m="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",S="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",A="CHANGE_DELAY",C="CHANGE_CURSOR",N="PASTE_STRING",w="HTML_TAG";function M(H){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},M(H)}function R(H,B){var K=Object.keys(H);if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(H);B&&(re=re.filter(function(Ne){return Object.getOwnPropertyDescriptor(H,Ne).enumerable})),K.push.apply(K,re)}return K}function z(H){for(var B=1;B<arguments.length;B++){var K=arguments[B]!=null?arguments[B]:{};B%2?R(Object(K),!0).forEach(function(re){V(H,re,K[re])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(K)):R(Object(K)).forEach(function(re){Object.defineProperty(H,re,Object.getOwnPropertyDescriptor(K,re))})}return H}function k(H){return function(B){if(Array.isArray(B))return Y(B)}(H)||function(B){if(typeof Symbol<"u"&&B[Symbol.iterator]!=null||B["@@iterator"]!=null)return Array.from(B)}(H)||function(B,K){if(B){if(typeof B=="string")return Y(B,K);var re=Object.prototype.toString.call(B).slice(8,-1);return re==="Object"&&B.constructor&&(re=B.constructor.name),re==="Map"||re==="Set"?Array.from(B):re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re)?Y(B,K):void 0}}(H)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Y(H,B){(B==null||B>H.length)&&(B=H.length);for(var K=0,re=new Array(B);K<B;K++)re[K]=H[K];return re}function $(H,B){for(var K=0;K<B.length;K++){var re=B[K];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(H,Z(re.key),re)}}function V(H,B,K){return(B=Z(B))in H?Object.defineProperty(H,B,{value:K,enumerable:!0,configurable:!0,writable:!0}):H[B]=K,H}function Z(H){var B=function(K,re){if(M(K)!=="object"||K===null)return K;var Ne=K[Symbol.toPrimitive];if(Ne!==void 0){var P=Ne.call(K,"string");if(M(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(K)}(H);return M(B)==="symbol"?B:String(B)}const I=function(){function H(re,Ne){var P=this;if(function(q,ie){if(!(q instanceof ie))throw new TypeError("Cannot call a class as a function")}(this,H),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),V(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),V(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),V(this,"stop",function(){return P.state.eventLoop&&((0,u.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),V(this,"pauseFor",function(q){return P.addEventToQueue(g,{ms:q}),P}),V(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(q){P.typeString(q).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),V(this,"typeString",function(q){var ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(h(q))return P.typeOutHTMLString(q,ie);if(q){var ve=(P.options||{}).stringSplitter,Me=typeof ve=="function"?ve(q):q.split("");P.typeCharacters(Me,ie)}return P}),V(this,"pasteString",function(q){var ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return h(q)?P.typeOutHTMLString(q,ie,!0):(q&&P.addEventToQueue(N,{character:q,node:ie}),P)}),V(this,"typeOutHTMLString",function(q){var ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ve=arguments.length>2?arguments[2]:void 0,Me=function(et){var Ve=document.createElement("div");return Ve.innerHTML=et,Ve.childNodes}(q);if(Me.length>0)for(var xe=0;xe<Me.length;xe++){var He=Me[xe],D=He.innerHTML;He&&He.nodeType!==3?(He.innerHTML="",P.addEventToQueue(S,{node:He,parentNode:ie}),ve?P.pasteString(D,He):P.typeString(D,He)):He.textContent&&(ve?P.pasteString(He.textContent,ie):P.typeString(He.textContent,ie))}return P}),V(this,"deleteAll",function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(m,{speed:q}),P}),V(this,"changeDeleteSpeed",function(q){if(!q)throw new Error("Must provide new delete speed");return P.addEventToQueue(b,{speed:q}),P}),V(this,"changeDelay",function(q){if(!q)throw new Error("Must provide new delay");return P.addEventToQueue(A,{delay:q}),P}),V(this,"changeCursor",function(q){if(!q)throw new Error("Must provide new cursor");return P.addEventToQueue(C,{cursor:q}),P}),V(this,"deleteChars",function(q){if(!q)throw new Error("Must provide amount of characters to delete");for(var ie=0;ie<q;ie++)P.addEventToQueue(x);return P}),V(this,"callFunction",function(q,ie){if(!q||typeof q!="function")throw new Error("Callback must be a function");return P.addEventToQueue(_,{cb:q,thisArg:ie}),P}),V(this,"typeCharacters",function(q){var ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q||!Array.isArray(q))throw new Error("Characters must be an array");return q.forEach(function(ve){P.addEventToQueue(v,{character:ve,node:ie})}),P}),V(this,"removeCharacters",function(q){if(!q||!Array.isArray(q))throw new Error("Characters must be an array");return q.forEach(function(){P.addEventToQueue(x)}),P}),V(this,"addEventToQueue",function(q,ie){var ve=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(q,ie,ve,"eventQueue")}),V(this,"addReverseCalledEvent",function(q,ie){var ve=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(q,ie,ve,"reverseCalledEvents"):P}),V(this,"addEventToStateProperty",function(q,ie){var ve=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Me=arguments.length>3?arguments[3]:void 0,xe={eventName:q,eventArgs:ie||{}};return P.state[Me]=ve?[xe].concat(k(P.state[Me])):[].concat(k(P.state[Me]),[xe]),P}),V(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var q=Date.now(),ie=q-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=k(P.state.calledEvents),P.state.calledEvents=[],P.options=z({},P.state.initialOptions)}if(P.state.eventLoop=f()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(q<P.state.pauseUntil)return;P.state.pauseUntil=null}var ve,Me=k(P.state.eventQueue),xe=Me.shift();if(!(ie<=(ve=xe.eventName===d||xe.eventName===x?P.options.deleteSpeed==="natural"?p(40,80):P.options.deleteSpeed:P.options.delay==="natural"?p(120,160):P.options.delay))){var He=xe.eventName,D=xe.eventArgs;switch(P.logInDevMode({currentEvent:xe,state:P.state,delay:ve}),He){case N:case v:var et=D.character,Ve=D.node,Xe=document.createTextNode(et),Ee=Xe;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(Ee=P.options.onCreateTextNode(et,Xe)),Ee&&(Ve?Ve.appendChild(Ee):P.state.elements.wrapper.appendChild(Ee)),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:"TEXT_NODE",character:et,node:Ee}]);break;case x:Me.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case g:var dt=xe.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(dt);break;case _:var Ce=xe.eventArgs,De=Ce.cb,L=Ce.thisArg;De.call(L,{elements:P.state.elements});break;case S:var E=xe.eventArgs,X=E.node,J=E.parentNode;J?J.appendChild(X):P.state.elements.wrapper.appendChild(X),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:w,node:X,parentNode:J||P.state.elements.wrapper}]);break;case m:var ne=P.state.visibleNodes,ee=D.speed,Te=[];ee&&Te.push({eventName:b,eventArgs:{speed:ee,temp:!0}});for(var de=0,me=ne.length;de<me;de++)Te.push({eventName:d,eventArgs:{removingCharacterNode:!1}});ee&&Te.push({eventName:b,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),Me.unshift.apply(Me,Te);break;case d:var Ue=xe.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var ae=P.state.visibleNodes.pop(),pe=ae.type,ke=ae.node,be=ae.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:ke,character:be}),ke&&ke.parentNode.removeChild(ke),pe===w&&Ue&&Me.unshift({eventName:d,eventArgs:{}})}break;case b:P.options.deleteSpeed=xe.eventArgs.speed;break;case A:P.options.delay=xe.eventArgs.delay;break;case C:P.options.cursor=xe.eventArgs.cursor,P.state.elements.cursor.innerHTML=xe.eventArgs.cursor}P.options.loop&&(xe.eventName===d||xe.eventArgs&&xe.eventArgs.temp||(P.state.calledEvents=[].concat(k(P.state.calledEvents),[xe]))),P.state.eventQueue=Me,P.state.lastFrameTime=q}}}),re)if(typeof re=="string"){var se=document.querySelector(re);if(!se)throw new Error("Could not find container element");this.state.elements.container=se}else this.state.elements.container=re;Ne&&(this.options=z(z({},this.options),Ne)),this.state.initialOptions=z({},this.options),this.init()}var B,K;return B=H,(K=[{key:"init",value:function(){var re,Ne;this.setupWrapperElement(),this.addEventToQueue(C,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(re=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Ne=document.createElement("style")).appendChild(document.createTextNode(re)),document.head.appendChild(Ne),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(re){this.options.devMode&&console.log(re)}}])&&$(B.prototype,K),Object.defineProperty(B,"prototype",{writable:!1}),H}()},8552:(o,c,l)=>{var u=l(852)(l(5639),"DataView");o.exports=u},1989:(o,c,l)=>{var u=l(1789),f=l(401),h=l(7667),p=l(1327),v=l(1866);function x(m){var d=-1,g=m==null?0:m.length;for(this.clear();++d<g;){var _=m[d];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=f,x.prototype.get=h,x.prototype.has=p,x.prototype.set=v,o.exports=x},8407:(o,c,l)=>{var u=l(7040),f=l(4125),h=l(2117),p=l(7518),v=l(4705);function x(m){var d=-1,g=m==null?0:m.length;for(this.clear();++d<g;){var _=m[d];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=f,x.prototype.get=h,x.prototype.has=p,x.prototype.set=v,o.exports=x},7071:(o,c,l)=>{var u=l(852)(l(5639),"Map");o.exports=u},3369:(o,c,l)=>{var u=l(4785),f=l(1285),h=l(6e3),p=l(9916),v=l(5265);function x(m){var d=-1,g=m==null?0:m.length;for(this.clear();++d<g;){var _=m[d];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=f,x.prototype.get=h,x.prototype.has=p,x.prototype.set=v,o.exports=x},3818:(o,c,l)=>{var u=l(852)(l(5639),"Promise");o.exports=u},8525:(o,c,l)=>{var u=l(852)(l(5639),"Set");o.exports=u},8668:(o,c,l)=>{var u=l(3369),f=l(619),h=l(2385);function p(v){var x=-1,m=v==null?0:v.length;for(this.__data__=new u;++x<m;)this.add(v[x])}p.prototype.add=p.prototype.push=f,p.prototype.has=h,o.exports=p},6384:(o,c,l)=>{var u=l(8407),f=l(7465),h=l(3779),p=l(7599),v=l(4758),x=l(4309);function m(d){var g=this.__data__=new u(d);this.size=g.size}m.prototype.clear=f,m.prototype.delete=h,m.prototype.get=p,m.prototype.has=v,m.prototype.set=x,o.exports=m},2705:(o,c,l)=>{var u=l(5639).Symbol;o.exports=u},1149:(o,c,l)=>{var u=l(5639).Uint8Array;o.exports=u},577:(o,c,l)=>{var u=l(852)(l(5639),"WeakMap");o.exports=u},4963:o=>{o.exports=function(c,l){for(var u=-1,f=c==null?0:c.length,h=0,p=[];++u<f;){var v=c[u];l(v,u,c)&&(p[h++]=v)}return p}},4636:(o,c,l)=>{var u=l(2545),f=l(5694),h=l(1469),p=l(4144),v=l(5776),x=l(6719),m=Object.prototype.hasOwnProperty;o.exports=function(d,g){var _=h(d),S=!_&&f(d),b=!_&&!S&&p(d),A=!_&&!S&&!b&&x(d),C=_||S||b||A,N=C?u(d.length,String):[],w=N.length;for(var M in d)!g&&!m.call(d,M)||C&&(M=="length"||b&&(M=="offset"||M=="parent")||A&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||v(M,w))||N.push(M);return N}},2488:o=>{o.exports=function(c,l){for(var u=-1,f=l.length,h=c.length;++u<f;)c[h+u]=l[u];return c}},2908:o=>{o.exports=function(c,l){for(var u=-1,f=c==null?0:c.length;++u<f;)if(l(c[u],u,c))return!0;return!1}},8470:(o,c,l)=>{var u=l(7813);o.exports=function(f,h){for(var p=f.length;p--;)if(u(f[p][0],h))return p;return-1}},8866:(o,c,l)=>{var u=l(2488),f=l(1469);o.exports=function(h,p,v){var x=p(h);return f(h)?x:u(x,v(h))}},4239:(o,c,l)=>{var u=l(2705),f=l(9607),h=l(2333),p=u?u.toStringTag:void 0;o.exports=function(v){return v==null?v===void 0?"[object Undefined]":"[object Null]":p&&p in Object(v)?f(v):h(v)}},9454:(o,c,l)=>{var u=l(4239),f=l(7005);o.exports=function(h){return f(h)&&u(h)=="[object Arguments]"}},939:(o,c,l)=>{var u=l(2492),f=l(7005);o.exports=function h(p,v,x,m,d){return p===v||(p==null||v==null||!f(p)&&!f(v)?p!=p&&v!=v:u(p,v,x,m,h,d))}},2492:(o,c,l)=>{var u=l(6384),f=l(7114),h=l(8351),p=l(6096),v=l(4160),x=l(1469),m=l(4144),d=l(6719),g="[object Arguments]",_="[object Array]",S="[object Object]",b=Object.prototype.hasOwnProperty;o.exports=function(A,C,N,w,M,R){var z=x(A),k=x(C),Y=z?_:v(A),$=k?_:v(C),V=(Y=Y==g?S:Y)==S,Z=($=$==g?S:$)==S,I=Y==$;if(I&&m(A)){if(!m(C))return!1;z=!0,V=!1}if(I&&!V)return R||(R=new u),z||d(A)?f(A,C,N,w,M,R):h(A,C,Y,N,w,M,R);if(!(1&N)){var H=V&&b.call(A,"__wrapped__"),B=Z&&b.call(C,"__wrapped__");if(H||B){var K=H?A.value():A,re=B?C.value():C;return R||(R=new u),M(K,re,N,w,R)}}return!!I&&(R||(R=new u),p(A,C,N,w,M,R))}},8458:(o,c,l)=>{var u=l(3560),f=l(5346),h=l(3218),p=l(346),v=/^\[object .+?Constructor\]$/,x=Function.prototype,m=Object.prototype,d=x.toString,g=m.hasOwnProperty,_=RegExp("^"+d.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");o.exports=function(S){return!(!h(S)||f(S))&&(u(S)?_:v).test(p(S))}},8749:(o,c,l)=>{var u=l(4239),f=l(1780),h=l(7005),p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Arguments]"]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p["[object Map]"]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p["[object Set]"]=p["[object String]"]=p["[object WeakMap]"]=!1,o.exports=function(v){return h(v)&&f(v.length)&&!!p[u(v)]}},280:(o,c,l)=>{var u=l(5726),f=l(6916),h=Object.prototype.hasOwnProperty;o.exports=function(p){if(!u(p))return f(p);var v=[];for(var x in Object(p))h.call(p,x)&&x!="constructor"&&v.push(x);return v}},2545:o=>{o.exports=function(c,l){for(var u=-1,f=Array(c);++u<c;)f[u]=l(u);return f}},1717:o=>{o.exports=function(c){return function(l){return c(l)}}},4757:o=>{o.exports=function(c,l){return c.has(l)}},4429:(o,c,l)=>{var u=l(5639)["__core-js_shared__"];o.exports=u},7114:(o,c,l)=>{var u=l(8668),f=l(2908),h=l(4757);o.exports=function(p,v,x,m,d,g){var _=1&x,S=p.length,b=v.length;if(S!=b&&!(_&&b>S))return!1;var A=g.get(p),C=g.get(v);if(A&&C)return A==v&&C==p;var N=-1,w=!0,M=2&x?new u:void 0;for(g.set(p,v),g.set(v,p);++N<S;){var R=p[N],z=v[N];if(m)var k=_?m(z,R,N,v,p,g):m(R,z,N,p,v,g);if(k!==void 0){if(k)continue;w=!1;break}if(M){if(!f(v,function(Y,$){if(!h(M,$)&&(R===Y||d(R,Y,x,m,g)))return M.push($)})){w=!1;break}}else if(R!==z&&!d(R,z,x,m,g)){w=!1;break}}return g.delete(p),g.delete(v),w}},8351:(o,c,l)=>{var u=l(2705),f=l(1149),h=l(7813),p=l(7114),v=l(8776),x=l(1814),m=u?u.prototype:void 0,d=m?m.valueOf:void 0;o.exports=function(g,_,S,b,A,C,N){switch(S){case"[object DataView]":if(g.byteLength!=_.byteLength||g.byteOffset!=_.byteOffset)return!1;g=g.buffer,_=_.buffer;case"[object ArrayBuffer]":return!(g.byteLength!=_.byteLength||!C(new f(g),new f(_)));case"[object Boolean]":case"[object Date]":case"[object Number]":return h(+g,+_);case"[object Error]":return g.name==_.name&&g.message==_.message;case"[object RegExp]":case"[object String]":return g==_+"";case"[object Map]":var w=v;case"[object Set]":var M=1&b;if(w||(w=x),g.size!=_.size&&!M)return!1;var R=N.get(g);if(R)return R==_;b|=2,N.set(g,_);var z=p(w(g),w(_),b,A,C,N);return N.delete(g),z;case"[object Symbol]":if(d)return d.call(g)==d.call(_)}return!1}},6096:(o,c,l)=>{var u=l(8234),f=Object.prototype.hasOwnProperty;o.exports=function(h,p,v,x,m,d){var g=1&v,_=u(h),S=_.length;if(S!=u(p).length&&!g)return!1;for(var b=S;b--;){var A=_[b];if(!(g?A in p:f.call(p,A)))return!1}var C=d.get(h),N=d.get(p);if(C&&N)return C==p&&N==h;var w=!0;d.set(h,p),d.set(p,h);for(var M=g;++b<S;){var R=h[A=_[b]],z=p[A];if(x)var k=g?x(z,R,A,p,h,d):x(R,z,A,h,p,d);if(!(k===void 0?R===z||m(R,z,v,x,d):k)){w=!1;break}M||(M=A=="constructor")}if(w&&!M){var Y=h.constructor,$=p.constructor;Y==$||!("constructor"in h)||!("constructor"in p)||typeof Y=="function"&&Y instanceof Y&&typeof $=="function"&&$ instanceof $||(w=!1)}return d.delete(h),d.delete(p),w}},1957:(o,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;o.exports=u},8234:(o,c,l)=>{var u=l(8866),f=l(9551),h=l(3674);o.exports=function(p){return u(p,h,f)}},5050:(o,c,l)=>{var u=l(7019);o.exports=function(f,h){var p=f.__data__;return u(h)?p[typeof h=="string"?"string":"hash"]:p.map}},852:(o,c,l)=>{var u=l(8458),f=l(7801);o.exports=function(h,p){var v=f(h,p);return u(v)?v:void 0}},9607:(o,c,l)=>{var u=l(2705),f=Object.prototype,h=f.hasOwnProperty,p=f.toString,v=u?u.toStringTag:void 0;o.exports=function(x){var m=h.call(x,v),d=x[v];try{x[v]=void 0;var g=!0}catch{}var _=p.call(x);return g&&(m?x[v]=d:delete x[v]),_}},9551:(o,c,l)=>{var u=l(4963),f=l(479),h=Object.prototype.propertyIsEnumerable,p=Object.getOwnPropertySymbols,v=p?function(x){return x==null?[]:(x=Object(x),u(p(x),function(m){return h.call(x,m)}))}:f;o.exports=v},4160:(o,c,l)=>{var u=l(8552),f=l(7071),h=l(3818),p=l(8525),v=l(577),x=l(4239),m=l(346),d="[object Map]",g="[object Promise]",_="[object Set]",S="[object WeakMap]",b="[object DataView]",A=m(u),C=m(f),N=m(h),w=m(p),M=m(v),R=x;(u&&R(new u(new ArrayBuffer(1)))!=b||f&&R(new f)!=d||h&&R(h.resolve())!=g||p&&R(new p)!=_||v&&R(new v)!=S)&&(R=function(z){var k=x(z),Y=k=="[object Object]"?z.constructor:void 0,$=Y?m(Y):"";if($)switch($){case A:return b;case C:return d;case N:return g;case w:return _;case M:return S}return k}),o.exports=R},7801:o=>{o.exports=function(c,l){return c==null?void 0:c[l]}},1789:(o,c,l)=>{var u=l(4536);o.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:o=>{o.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(o,c,l)=>{var u=l(4536),f=Object.prototype.hasOwnProperty;o.exports=function(h){var p=this.__data__;if(u){var v=p[h];return v==="__lodash_hash_undefined__"?void 0:v}return f.call(p,h)?p[h]:void 0}},1327:(o,c,l)=>{var u=l(4536),f=Object.prototype.hasOwnProperty;o.exports=function(h){var p=this.__data__;return u?p[h]!==void 0:f.call(p,h)}},1866:(o,c,l)=>{var u=l(4536);o.exports=function(f,h){var p=this.__data__;return this.size+=this.has(f)?0:1,p[f]=u&&h===void 0?"__lodash_hash_undefined__":h,this}},5776:o=>{var c=/^(?:0|[1-9]\d*)$/;o.exports=function(l,u){var f=typeof l;return!!(u=u??9007199254740991)&&(f=="number"||f!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},7019:o=>{o.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(o,c,l)=>{var u,f=l(4429),h=(u=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";o.exports=function(p){return!!h&&h in p}},5726:o=>{var c=Object.prototype;o.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},7040:o=>{o.exports=function(){this.__data__=[],this.size=0}},4125:(o,c,l)=>{var u=l(8470),f=Array.prototype.splice;o.exports=function(h){var p=this.__data__,v=u(p,h);return!(v<0||(v==p.length-1?p.pop():f.call(p,v,1),--this.size,0))}},2117:(o,c,l)=>{var u=l(8470);o.exports=function(f){var h=this.__data__,p=u(h,f);return p<0?void 0:h[p][1]}},7518:(o,c,l)=>{var u=l(8470);o.exports=function(f){return u(this.__data__,f)>-1}},4705:(o,c,l)=>{var u=l(8470);o.exports=function(f,h){var p=this.__data__,v=u(p,f);return v<0?(++this.size,p.push([f,h])):p[v][1]=h,this}},4785:(o,c,l)=>{var u=l(1989),f=l(8407),h=l(7071);o.exports=function(){this.size=0,this.__data__={hash:new u,map:new(h||f),string:new u}}},1285:(o,c,l)=>{var u=l(5050);o.exports=function(f){var h=u(this,f).delete(f);return this.size-=h?1:0,h}},6e3:(o,c,l)=>{var u=l(5050);o.exports=function(f){return u(this,f).get(f)}},9916:(o,c,l)=>{var u=l(5050);o.exports=function(f){return u(this,f).has(f)}},5265:(o,c,l)=>{var u=l(5050);o.exports=function(f,h){var p=u(this,f),v=p.size;return p.set(f,h),this.size+=p.size==v?0:1,this}},8776:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(f,h){u[++l]=[h,f]}),u}},4536:(o,c,l)=>{var u=l(852)(Object,"create");o.exports=u},6916:(o,c,l)=>{var u=l(5569)(Object.keys,Object);o.exports=u},1167:(o,c,l)=>{o=l.nmd(o);var u=l(1957),f=c&&!c.nodeType&&c,h=f&&o&&!o.nodeType&&o,p=h&&h.exports===f&&u.process,v=function(){try{return h&&h.require&&h.require("util").types||p&&p.binding&&p.binding("util")}catch{}}();o.exports=v},2333:o=>{var c=Object.prototype.toString;o.exports=function(l){return c.call(l)}},5569:o=>{o.exports=function(c,l){return function(u){return c(l(u))}}},5639:(o,c,l)=>{var u=l(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,h=u||f||Function("return this")();o.exports=h},619:o=>{o.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:o=>{o.exports=function(c){return this.__data__.has(c)}},1814:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(f){u[++l]=f}),u}},7465:(o,c,l)=>{var u=l(8407);o.exports=function(){this.__data__=new u,this.size=0}},3779:o=>{o.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},7599:o=>{o.exports=function(c){return this.__data__.get(c)}},4758:o=>{o.exports=function(c){return this.__data__.has(c)}},4309:(o,c,l)=>{var u=l(8407),f=l(7071),h=l(3369);o.exports=function(p,v){var x=this.__data__;if(x instanceof u){var m=x.__data__;if(!f||m.length<199)return m.push([p,v]),this.size=++x.size,this;x=this.__data__=new h(m)}return x.set(p,v),this.size=x.size,this}},346:o=>{var c=Function.prototype.toString;o.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:o=>{o.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(o,c,l)=>{var u=l(9454),f=l(7005),h=Object.prototype,p=h.hasOwnProperty,v=h.propertyIsEnumerable,x=u(function(){return arguments}())?u:function(m){return f(m)&&p.call(m,"callee")&&!v.call(m,"callee")};o.exports=x},1469:o=>{var c=Array.isArray;o.exports=c},8612:(o,c,l)=>{var u=l(3560),f=l(1780);o.exports=function(h){return h!=null&&f(h.length)&&!u(h)}},4144:(o,c,l)=>{o=l.nmd(o);var u=l(5639),f=l(5062),h=c&&!c.nodeType&&c,p=h&&o&&!o.nodeType&&o,v=p&&p.exports===h?u.Buffer:void 0,x=(v?v.isBuffer:void 0)||f;o.exports=x},8446:(o,c,l)=>{var u=l(939);o.exports=function(f,h){return u(f,h)}},3560:(o,c,l)=>{var u=l(4239),f=l(3218);o.exports=function(h){if(!f(h))return!1;var p=u(h);return p=="[object Function]"||p=="[object GeneratorFunction]"||p=="[object AsyncFunction]"||p=="[object Proxy]"}},1780:o=>{o.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:o=>{o.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:o=>{o.exports=function(c){return c!=null&&typeof c=="object"}},6719:(o,c,l)=>{var u=l(8749),f=l(1717),h=l(1167),p=h&&h.isTypedArray,v=p?f(p):u;o.exports=v},3674:(o,c,l)=>{var u=l(4636),f=l(280),h=l(8612);o.exports=function(p){return h(p)?u(p):f(p)}},479:o=>{o.exports=function(){return[]}},5062:o=>{o.exports=function(){return!1}},75:function(o){(function(){var c,l,u,f,h,p;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(c()-h)/1e6},l=process.hrtime,f=(c=function(){var v;return 1e9*(v=l())[0]+v[1]})(),p=1e9*process.uptime(),h=f-p):Date.now?(o.exports=function(){return Date.now()-u},u=Date.now()):(o.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(o,c,l)=>{for(var u=l(75),f=typeof window>"u"?l.g:window,h=["moz","webkit"],p="AnimationFrame",v=f["request"+p],x=f["cancel"+p]||f["cancelRequest"+p],m=0;!v&&m<h.length;m++)v=f[h[m]+"Request"+p],x=f[h[m]+"Cancel"+p]||f[h[m]+"CancelRequest"+p];if(!v||!x){var d=0,g=0,_=[];v=function(S){if(_.length===0){var b=u(),A=Math.max(0,16.666666666666668-(b-d));d=A+b,setTimeout(function(){var C=_.slice(0);_.length=0;for(var N=0;N<C.length;N++)if(!C[N].cancelled)try{C[N].callback(d)}catch(w){setTimeout(function(){throw w},0)}},Math.round(A))}return _.push({handle:++g,callback:S,cancelled:!1}),g},x=function(S){for(var b=0;b<_.length;b++)_[b].handle===S&&(_[b].cancelled=!0)}}o.exports=function(S){return v.call(f,S)},o.exports.cancel=function(){x.apply(f,arguments)},o.exports.polyfill=function(S){S||(S=f),S.requestAnimationFrame=v,S.cancelAnimationFrame=x}},8156:o=>{o.exports=n}},r={};function s(o){var c=r[o];if(c!==void 0)return c.exports;var l=r[o]={id:o,loaded:!1,exports:{}};return i[o].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.n=o=>{var c=o&&o.__esModule?()=>o.default:()=>o;return s.d(c,{a:c}),c},s.d=(o,c)=>{for(var l in c)s.o(c,l)&&!s.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:c[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(o,c)=>Object.prototype.hasOwnProperty.call(o,c),s.nmd=o=>(o.paths=[],o.children||(o.children=[]),o);var a={};return(()=>{s.d(a,{default:()=>_});var o=s(8156),c=s.n(o),l=s(7403),u=s(8446),f=s.n(u);function h(S){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},h(S)}function p(S,b){for(var A=0;A<b.length;A++){var C=b[A];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(S,d(C.key),C)}}function v(S,b){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,C){return A.__proto__=C,A},v(S,b)}function x(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function m(S){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},m(S)}function d(S){var b=function(A,C){if(h(A)!=="object"||A===null)return A;var N=A[Symbol.toPrimitive];if(N!==void 0){var w=N.call(A,"string");if(h(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}(S);return h(b)==="symbol"?b:String(b)}var g=function(S){(function(R,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(z&&z.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),z&&v(R,z)})(M,S);var b,A,C,N,w=(C=M,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var R,z=m(C);if(N){var k=m(this).constructor;R=Reflect.construct(z,arguments,k)}else R=z.apply(this,arguments);return function(Y,$){if($&&(h($)==="object"||typeof $=="function"))return $;if($!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(Y)}(this,R)});function M(){var R,z,k,Y;(function(I,H){if(!(I instanceof H))throw new TypeError("Cannot call a class as a function")})(this,M);for(var $=arguments.length,V=new Array($),Z=0;Z<$;Z++)V[Z]=arguments[Z];return z=x(R=w.call.apply(w,[this].concat(V))),Y={instance:null},(k=d(k="state"))in z?Object.defineProperty(z,k,{value:Y,enumerable:!0,configurable:!0,writable:!0}):z[k]=Y,R}return b=M,(A=[{key:"componentDidMount",value:function(){var R=this,z=new l.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var k=R.props.onInit;k&&k(z)})}},{key:"componentDidUpdate",value:function(R){f()(this.props.options,R.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var R=this,z=this.props.component;return c().createElement(z,{ref:function(k){return R.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&p(b.prototype,A),Object.defineProperty(b,"prototype",{writable:!1}),M}(o.Component);g.defaultProps={component:"div"};const _=g})(),a.default})())})(x0);var Wx=x0.exports;const Xx=ov(Wx);function Yx({text:t}){const{theme:e}=Zi();return y.jsx("div",{className:`mb-4 ${e=="light"?"w-full flex justify-center":""}`,children:y.jsx("h2",{className:`w-fit text-[2.5rem] sm:text-[5rem] font-bold bg-gradient-to-r text-transparent bg-clip-text ${e=="light"?"from-pumpkin-600 via-pumpkin-700 to-pumpkin-800":"from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"}`,children:t})})}function _i({title:t,children:e,glow:n=!0}){const{theme:i}=Zi();return y.jsx("div",{className:"py-20 text-center",children:y.jsxs(wn,{children:[y.jsx(Yx,{text:t}),y.jsx("div",{className:`mt-8 ${n&&i=="dark"&&"shadow-pumpkin overflow-hidden p-8 rounded-[3rem] bg-secondary-900"}`,children:e})]})})}function $x(){const[t,e]=Oo({threshold:.1}),{theme:n}=Zi();return y.jsx(_i,{title:"About Me",children:y.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-12",children:[y.jsxs("div",{ref:t,className:"order-1 md:order-0 flex-grow self-start text-[1rem] mx-auto text-left sm:h-[24rem] md:h-[34rem] lg:h-[24rem] xl:h-[18rem]",children:[y.jsx("div",{className:"hidden sm:block",children:e&&y.jsx(Xx,{onInit:i=>{i.typeString("<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>").pauseFor(300).typeString("<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>").pauseFor(300).typeString("<li class='custom-bullet pb-3'>Over 2+ years of experience as a <span class='text-pumpkin font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture, now focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>").pauseFor(300).typeString("<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin font-bold'>problem-solving</span> and code complexity analysis.</li>").pauseFor(300).typeString("<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through college projects.</li>").pauseFor(300).typeString("<li class='custom-bullet pb-3'>Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team.</li>").pauseFor(300).start()},options:{loop:!1,delay:1,cursor:""}})}),y.jsx("div",{className:"sm:hidden",children:y.jsxs("ul",{children:[y.jsxs("li",{className:"custom-bullet pb-3",children:[y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"Valedictorian"})," ","graduate with a 92.08% rate, excelling in problem-solving and data structures."]}),y.jsxs("li",{className:"custom-bullet pb-3",children:[y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"Regional Contestant"})," ","in the Arab and African Collegiate Programming Contest (ACPC) and a",y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"gold medalist"})," ","in ACPC for Girls (2020)."]}),y.jsxs("li",{className:"custom-bullet pb-3",children:["Over 2+ years of experience as a"," ",y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"Full-Stack Developer"}),", specializing in Laravel and MVC architecture, now focusing on Front-End Development with React, Next.js, and RESTful APIs."]}),y.jsxs("li",{className:"custom-bullet pb-3",children:["Proficient in"," ",y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"C++ development"})," ","for over 4 years, with expertise in",y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"problem-solving"})," ","and code complexity analysis."]}),y.jsxs("li",{className:"custom-bullet pb-3",children:[y.jsx("span",{className:"text-pumpkin-400 font-bold",children:"Skilled in 3D rendering"})," ","technologies like OpenGL, WebGL, Three.js, and Blender through college projects."]}),y.jsx("li",{className:"custom-bullet pb-3",children:"Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team."})]})})]}),y.jsxs("div",{className:"relative order-0 md:order-1",children:[n=="light"&&y.jsx("div",{className:"absolute -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-30 w-[30rem] h-[30rem] bg-primary rounded-full blur-3xl"}),y.jsx("div",{children:y.jsx(wn,{children:y.jsx(Ts,{className:"max-h-[16rem] md:min-w-[16rem] rounded-[30px]",src:"images/on-laptop.png"})})})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="168",qx=0,Kh=1,Kx=2,y0=1,Zx=2,ii=3,Xi=0,tn=1,oi=2,Vi=0,ms=1,Zh=2,Qh=3,Jh=4,Qx=5,hr=100,Jx=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,ju=204,Wu=205,ay=206,ly=207,cy=208,uy=209,dy=210,fy=211,hy=212,py=213,my=214,gy=0,vy=1,_y=2,yl=3,xy=4,yy=5,Sy=6,My=7,S0=0,Ey=1,wy=2,Gi=0,Ty=1,Ay=2,Cy=3,by=4,Ry=5,Py=6,Ly=7,M0=300,As=301,Cs=302,Xu=303,Yu=304,Gl=306,$u=1e3,_r=1001,qu=1002,yn=1003,Ny=1004,ca=1005,Dn=1006,Ec=1007,xr=1008,gi=1009,E0=1010,w0=1011,Po=1012,yf=1013,Cr=1014,ci=1015,ko=1016,Sf=1017,Mf=1018,bs=1020,T0=35902,A0=1021,C0=1022,In=1023,b0=1024,R0=1025,gs=1026,Rs=1027,P0=1028,Ef=1029,L0=1030,wf=1031,Tf=1033,ja=33776,Wa=33777,Xa=33778,Ya=33779,Ku=35840,Zu=35841,Qu=35842,Ju=35843,ed=36196,td=37492,nd=37496,id=37808,rd=37809,sd=37810,od=37811,ad=37812,ld=37813,cd=37814,ud=37815,dd=37816,fd=37817,hd=37818,pd=37819,md=37820,gd=37821,$a=36492,vd=36494,_d=36495,N0=36283,xd=36284,yd=36285,Sd=36286,Dy=3200,Iy=3201,D0=0,Uy=1,Li="",Hn="srgb",Qi="srgb-linear",Af="display-p3",jl="display-p3-linear",Sl="linear",rt="srgb",Ml="rec709",El="p3",Dr=7680,ep=519,Fy=512,Oy=513,ky=514,I0=515,zy=516,By=517,Hy=518,Vy=519,tp=35044,np="300 es",ui=2e3,wl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,Md=180/Math.PI;function zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function Gy(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],d=r[6],g=r[1],_=r[4],S=r[7],b=r[2],A=r[5],C=r[8];return s[0]=a*x+o*g+c*b,s[3]=a*m+o*_+c*A,s[6]=a*d+o*S+c*C,s[1]=l*x+u*g+f*b,s[4]=l*m+u*_+f*A,s[7]=l*d+u*S+f*C,s[2]=h*x+p*g+v*b,s[5]=h*m+p*_+v*A,s[8]=h*d+p*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,p=l*s-a*c,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Oe;function U0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Lo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jy(){const t=Lo("canvas");return t.style.display="block",t}const ip={};function uo(t){t in ip||(ip[t]=!0,console.warn(t))}function Wy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[Qi]:{transfer:Sl,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:rt,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jl]:{transfer:Sl,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp)},[Af]:{transfer:rt,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(sp),fromReference:t=>t.applyMatrix3(rp).convertLinearToSRGB()}},Xy=new Set([Qi,jl]),Qe={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Xy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ws[e].toReference,r=Ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ws[t].primaries},getTransfer:function(t){return t===Li?Sl:Ws[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ws[e].luminanceCoefficients)}};function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Lo("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Lo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class F0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bc(r[a].image)):s.push(bc(r[a]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class Wt extends Is{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=_r,r=_r,s=Dn,a=xr,o=In,c=gi,l=Wt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=zo(),this.name="",this.source=new F0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=M0;Wt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],v=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,S=(p+1)/2,b=(d+1)/2,A=(u+h)/4,C=(f+x)/4,N=(v+m)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=N/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=N/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-x)/g,this.z=(h-u)/g,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends Ky{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O0 extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||c!==h||l!==p||u!==v){let m=1-o;const d=c*h+l*p+u*v+f*x,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,d*g);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const S=o*g;if(c=c*m+h*S,l=l*m+p*S,u=u*m+v*S,f=f*m+x*S,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*f+c*p-l*h,e[n+1]=c*v+u*h+l*f-o*p,e[n+2]=l*v+u*p+o*h-c*f,e[n+3]=u*v-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f+h*p*v;break;case"YZX":this._x=h*u*f+l*p*v,this._y=l*p*f+h*u*v,this._z=l*u*v-h*p*f,this._w=l*u*f-h*p*v;break;case"XZY":this._x=h*u*f-l*p*v,this._y=l*p*f-h*u*v,this._z=l*u*v+h*p*f,this._w=l*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new W,op=new Bo;class Ho{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),da.subVectors(this.max,Xs),Ur.subVectors(e.a,Xs),Fr.subVectors(e.b,Xs),Or.subVectors(e.c,Xs),Si.subVectors(Fr,Ur),Mi.subVectors(Or,Fr),tr.subVectors(Ur,Or);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-tr.z,tr.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,tr.z,0,-tr.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-tr.y,tr.x,0];return!Pc(n,Ur,Fr,Or,da)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Ur,Fr,Or,da))?!1:(fa.crossVectors(Si,Mi),n=[fa.x,fa.y,fa.z],Pc(n,Ur,Fr,Or,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new W,new W,new W,new W,new W,new W,new W,new W],Cn=new W,ua=new Ho,Ur=new W,Fr=new W,Or=new W,Si=new W,Mi=new W,tr=new W,Xs=new W,da=new W,fa=new W,nr=new W;function Pc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),l=n.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Qy=new Ho,Ys=new W,Lc=new W;let Cf=class{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Lc)),this.expandByPoint(Ys.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Jn=new W,Nc=new W,ha=new W,Ei=new W,Dc=new W,pa=new W,Ic=new W;class Jy{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),ha.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ha),o=Ei.dot(this.direction),c=-Ei.dot(ha),l=Ei.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*c-o,h=a*o-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nc).addScaledVector(ha,h),p}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Dc.subVectors(n,e),pa.subVectors(i,e),Ic.crossVectors(Dc,pa);let a=this.direction.dot(Ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const c=o*this.direction.dot(pa.crossVectors(Ei,pa));if(c<0)return null;const l=o*this.direction.dot(Dc.cross(Ei));if(l<0||c+l>a)return null;const u=-o*Ei.dot(Ic);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,a,o,c,l,u,f,h,p,v,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,f,h,p,v,x,m)}set(e,n,i,r,s,a,o,c,l,u,f,h,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,x=o*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=p+v*l,n[5]=h-x*l,n[9]=-o*c,n[2]=x-h*l,n[6]=v+p*l,n[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,v=l*u,x=l*f;n[0]=h+x*o,n[4]=v*o-p,n[8]=a*l,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=x+h*o,n[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,v=l*u,x=l*f;n[0]=h-x*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=x-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,x=o*f;n[0]=c*u,n[4]=v*l-p,n[8]=h*l+x,n[1]=c*f,n[5]=x*l+h,n[9]=p*l-v,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,v=o*c,x=o*l;n[0]=c*u,n[4]=x-h*f,n[8]=v*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=p*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,p=a*l,v=o*c,x=o*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+x,n[5]=a*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eS,e,tS)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),wi.crossVectors(i,sn),wi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),wi.crossVectors(i,sn)),wi.normalize(),ma.crossVectors(sn,wi),r[0]=wi.x,r[4]=ma.x,r[8]=sn.x,r[1]=wi.y,r[5]=ma.y,r[9]=sn.y,r[2]=wi.z,r[6]=ma.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],g=i[3],_=i[7],S=i[11],b=i[15],A=r[0],C=r[4],N=r[8],w=r[12],M=r[1],R=r[5],z=r[9],k=r[13],Y=r[2],$=r[6],V=r[10],Z=r[14],I=r[3],H=r[7],B=r[11],K=r[15];return s[0]=a*A+o*M+c*Y+l*I,s[4]=a*C+o*R+c*$+l*H,s[8]=a*N+o*z+c*V+l*B,s[12]=a*w+o*k+c*Z+l*K,s[1]=u*A+f*M+h*Y+p*I,s[5]=u*C+f*R+h*$+p*H,s[9]=u*N+f*z+h*V+p*B,s[13]=u*w+f*k+h*Z+p*K,s[2]=v*A+x*M+m*Y+d*I,s[6]=v*C+x*R+m*$+d*H,s[10]=v*N+x*z+m*V+d*B,s[14]=v*w+x*k+m*Z+d*K,s[3]=g*A+_*M+S*Y+b*I,s[7]=g*C+_*R+S*$+b*H,s[11]=g*N+_*z+S*V+b*B,s[15]=g*w+_*k+S*Z+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+s*c*f-r*l*f-s*o*h+i*l*h+r*o*p-i*c*p)+x*(+n*c*p-n*l*h+s*a*h-r*a*p+r*l*u-s*c*u)+m*(+n*l*f-n*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+d*(-r*o*u-n*c*f+n*o*h+r*a*f-i*a*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],g=f*m*l-x*h*l+x*c*p-o*m*p-f*c*d+o*h*d,_=v*h*l-u*m*l-v*c*p+a*m*p+u*c*d-a*h*d,S=u*x*l-v*f*l+v*o*p-a*x*p-u*o*d+a*f*d,b=v*f*c-u*x*c-v*o*h+a*x*h+u*o*m-a*f*m,A=n*g+i*_+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*d+i*c*d)*C,e[3]=(f*c*s-o*h*s-f*r*l+i*h*l+o*r*p-i*c*p)*C,e[4]=_*C,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*d+n*h*d)*C,e[6]=(v*c*s-a*m*s-v*r*l+n*m*l+a*r*d-n*c*d)*C,e[7]=(a*h*s-u*c*s+u*r*l-n*h*l-a*r*p+n*c*p)*C,e[8]=S*C,e[9]=(v*f*s-u*x*s-v*i*p+n*x*p+u*i*d-n*f*d)*C,e[10]=(a*x*s-v*o*s+v*i*l-n*x*l-a*i*d+n*o*d)*C,e[11]=(u*o*s-a*f*s-u*i*l+n*f*l+a*i*p-n*o*p)*C,e[12]=b*C,e[13]=(u*x*r-v*f*r+v*i*h-n*x*h-u*i*m+n*f*m)*C,e[14]=(v*o*r-a*x*r-v*i*c+n*x*c+a*i*m-n*o*m)*C,e[15]=(a*f*r-u*o*r+u*i*c-n*f*c-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,f=o+o,h=s*l,p=s*u,v=s*f,x=a*u,m=a*f,d=o*f,g=c*l,_=c*u,S=c*f,b=i.x,A=i.y,C=i.z;return r[0]=(1-(x+d))*b,r[1]=(p+S)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*C,r[9]=(m-g)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const l=1/s,u=1/a,f=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,n.setFromRotationMatrix(bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(o===ui)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===wl)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const c=this.elements,l=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*l,p=(i+r)*u;let v,x;if(o===ui)v=(a+s)*f,x=-2*f;else if(o===wl)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new W,bn=new gt,eS=new W(0,0,0),tS=new W(1,1,1),wi=new W,ma=new W,sn=new W,ap=new gt,lp=new Bo;class Kn{constructor(e=0,n=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nS=0;const cp=new W,zr=new Bo,ei=new gt,ga=new W,$s=new W,iS=new W,rS=new Bo,up=new W(1,0,0),dp=new W(0,1,0),fp=new W(0,0,1),hp={type:"added"},sS={type:"removed"},Br={type:"childadded",child:null},Uc={type:"childremoved",child:null};class Bt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new W,n=new Kn,i=new Bo,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Oe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,n){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt($s,ga,this.up):ei.lookAt(ga,$s,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ei),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sS),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,iS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,rS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new W(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new W,ti=new W,Fc=new W,ni=new W,Hr=new W,Vr=new W,pp=new W,Oc=new W,kc=new W,zc=new W;class jn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ti.subVectors(i,n),Fc.subVectors(e,n);const a=Rn.dot(Rn),o=Rn.dot(ti),c=Rn.dot(Fc),l=ti.dot(ti),u=ti.dot(Fc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,v=(a*u-o*c)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ti.subVectors(e,n),Rn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Vr.subVectors(s,i),Oc.subVectors(e,i);const c=Hr.dot(Oc),l=Vr.dot(Oc);if(c<=0&&l<=0)return n.copy(i);kc.subVectors(e,r);const u=Hr.dot(kc),f=Vr.dot(kc);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Hr,a);zc.subVectors(e,s);const p=Hr.dot(zc),v=Vr.dot(zc);if(v>=0&&p<=v)return n.copy(s);const x=p*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),n.copy(i).addScaledVector(Vr,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return pp.subVectors(s,r),o=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(pp,o);const d=1/(m+x+h);return a=x*d,o=h*d,n.copy(i).addScaledVector(Hr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},va={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Gy(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Kt(kt.r*255,0,255))*65536+Math.round(Kt(kt.g*255,0,255))*256+Math.round(Kt(kt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Hn){Qe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(va);const i=Tc(Ti.h,va.h,n),r=Tc(Ti.s,va.s,n),s=Tc(Ti.l,va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ye;Ye.NAMES=z0;let oS=0;class Vo extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=ms,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Wu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Wu&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ep&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class B0 extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new W,_a=new We;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_a.fromBufferAttribute(this,n),_a.applyMatrix3(e),this.setXY(n,_a.x,_a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tp&&(e.usage=this.usage),e}}class H0 extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class V0 extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aS=0;const mn=new gt,Hc=new Bt,Gr=new W,on=new Ho,qs=new Ho,Ct=new W;class Ji extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?V0:H0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(on.min,qs.min),on.expandByPoint(Ct),Ct.addVectors(on.max,qs.max),on.expandByPoint(Ct)):(on.expandByPoint(qs.min),on.expandByPoint(qs.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ct.fromBufferAttribute(o,l),c&&(Gr.fromBufferAttribute(e,l),Ct.add(Gr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new W,c[N]=new W;const l=new W,u=new W,f=new W,h=new We,p=new We,v=new We,x=new W,m=new W;function d(N,w,M){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(l),f.sub(l),p.sub(h),v.sub(h);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),o[N].add(x),o[w].add(x),o[M].add(x),c[N].add(m),c[w].add(m),c[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,w=g.length;N<w;++N){const M=g[N],R=M.start,z=M.count;for(let k=R,Y=R+z;k<Y;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new W,S=new W,b=new W,A=new W;function C(N){b.fromBufferAttribute(r,N),A.copy(b);const w=o[N];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),S.crossVectors(A,w);const R=S.dot(c[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,R)}for(let N=0,w=g.length;N<w;++N){const M=g[N],R=M.start,z=M.count;for(let k=R,Y=R+z;k<Y;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,u=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,v=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[v++]=l[p++]}return new $n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new gt,ir=new Jy,xa=new Cf,gp=new W,jr=new W,Wr=new W,Xr=new W,Vc=new W,ya=new W,Sa=new We,Ma=new We,Ea=new We,vp=new W,_p=new W,xp=new W,wa=new W,Ta=new W;class Wn extends Bt{constructor(e=new Ji,n=new B0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ya.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Vc.fromBufferAttribute(f,e),a?ya.addScaledVector(Vc,u):ya.addScaledVector(Vc.sub(n),u))}n.add(ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(xa.containsPoint(ir.origin)===!1&&(ir.intersectSphere(xa,gp)===null||ir.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(mp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=o.getX(S),C=o.getX(S+1),N=o.getX(S+2);r=Aa(this,d,e,i,l,u,f,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);r=Aa(this,a,e,i,l,u,f,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=S,C=S+1,N=S+2;r=Aa(this,d,e,i,l,u,f,A,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=m,_=m+1,S=m+2;r=Aa(this,a,e,i,l,u,f,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function lS(t,e,n,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Xi,o),c===null)return null;Ta.copy(o),Ta.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ta);return l<n.near||l>n.far?null:{distance:l,point:Ta.clone(),object:t}}function Aa(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,jr),t.getVertexPosition(c,Wr),t.getVertexPosition(l,Xr);const u=lS(t,e,n,i,jr,Wr,Xr,wa);if(u){r&&(Sa.fromBufferAttribute(r,o),Ma.fromBufferAttribute(r,c),Ea.fromBufferAttribute(r,l),u.uv=jn.getInterpolation(wa,jr,Wr,Xr,Sa,Ma,Ea,new We)),s&&(Sa.fromBufferAttribute(s,o),Ma.fromBufferAttribute(s,c),Ea.fromBufferAttribute(s,l),u.uv1=jn.getInterpolation(wa,jr,Wr,Xr,Sa,Ma,Ea,new We)),a&&(vp.fromBufferAttribute(a,o),_p.fromBufferAttribute(a,c),xp.fromBufferAttribute(a,l),u.normal=jn.getInterpolation(wa,jr,Wr,Xr,vp,_p,xp,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new W,materialIndex:0};jn.getNormal(jr,Wr,Xr,f.normal),u.face=f}return u}class Go extends Ji{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(f,2));function v(x,m,d,g,_,S,b,A,C,N,w){const M=S/C,R=b/N,z=S/2,k=b/2,Y=A/2,$=C+1,V=N+1;let Z=0,I=0;const H=new W;for(let B=0;B<V;B++){const K=B*R-k;for(let re=0;re<$;re++){const Ne=re*M-z;H[x]=Ne*g,H[m]=K*_,H[d]=Y,l.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[d]=A>0?1:-1,u.push(H.x,H.y,H.z),f.push(re/C),f.push(1-B/N),Z+=1}}for(let B=0;B<N;B++)for(let K=0;K<C;K++){const re=h+K+$*B,Ne=h+K+$*(B+1),P=h+(K+1)+$*(B+1),se=h+(K+1)+$*B;c.push(re,Ne,se),c.push(Ne,P,se),I+=6}o.addGroup(p,I,w),p+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function cS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const uS={clone:Ps,merge:Vt};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=cS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class j0 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new W,yp=new We,Sp=new We;class _n extends j0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Md*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,yp,Sp),n.subVectors(Sp,yp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class hS extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new _n(Yr,$r,e,n);s.layers=this.layers,this.add(s);const a=new _n(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new _n(Yr,$r,e,n);o.layers=this.layers,this.add(o);const c=new _n(Yr,$r,e,n);c.layers=this.layers,this.add(c);const l=new _n(Yr,$r,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class W0 extends Wt{constructor(e,n,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pS extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new W0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new Wn(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Dn),new hS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new W,mS=new W,gS=new Oe;class dr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(mS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gS.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Cf,Ca=new W;class bf{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],d=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-s,h-l,m-p,S-d).normalize(),i[1].setComponents(c+s,h+l,m+p,S+d).normalize(),i[2].setComponents(c+a,h+u,m+v,S+g).normalize(),i[3].setComponents(c-a,h-u,m-v,S-g).normalize(),i[4].setComponents(c-o,h-f,m-x,S-_).normalize(),n===ui)i[5].setComponents(c+o,h+f,m+x,S+_).normalize();else if(n===wl)i[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vS(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c._updateRange,h=c.updateRanges;if(t.bindBuffer(l,o),f.count===-1&&h.length===0&&t.bufferSubData(l,0,u),h.length!==0){for(let p=0,v=h.length;p<v;p++){const x=h[p];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Wl extends Ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=n/c,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const g=d*h-a;for(let _=0;_<l;_++){const S=_*f-s;v.push(S,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let g=0;g<o;g++){const _=g+l*d,S=g+l*(d+1),b=g+1+l*(d+1),A=g+1+l*d;p.push(_,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var _S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$S="gl_FragColor = linearToOutputTexel( gl_FragColor );",qS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_M=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:_S,alphahash_pars_fragment:xS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:wS,aomap_pars_fragment:TS,batching_pars_vertex:AS,batching_vertex:CS,begin_vertex:bS,beginnormal_vertex:RS,bsdfs:PS,iridescence_fragment:LS,bumpmap_pars_fragment:NS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:US,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:kS,color_pars_vertex:zS,color_vertex:BS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:jS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:YS,colorspace_fragment:$S,colorspace_pars_fragment:qS,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:u1,envmap_vertex:e1,fog_vertex:t1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:r1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:o1,lights_lambert_fragment:a1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:d1,lights_toon_pars_fragment:f1,lights_phong_fragment:h1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:v1,lights_fragment_maps:_1,lights_fragment_end:x1,logdepthbuf_fragment:y1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:M1,logdepthbuf_vertex:E1,map_fragment:w1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:C1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:R1,morphinstance_vertex:P1,morphcolor_vertex:L1,morphnormal_vertex:N1,morphtarget_pars_vertex:D1,morphtarget_vertex:I1,normal_fragment_begin:U1,normal_fragment_maps:F1,normal_pars_fragment:O1,normal_pars_vertex:k1,normal_vertex:z1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:H1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:j1,opaque_fragment:W1,packing:X1,premultiplied_alpha_fragment:Y1,project_vertex:$1,dithering_fragment:q1,dithering_pars_fragment:K1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:Q1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:dM,transmission_pars_fragment:fM,uv_pars_fragment:hM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:vM,background_frag:_M,backgroundCube_vert:xM,backgroundCube_frag:yM,cube_vert:SM,cube_frag:MM,depth_vert:EM,depth_frag:wM,distanceRGBA_vert:TM,distanceRGBA_frag:AM,equirect_vert:CM,equirect_frag:bM,linedashed_vert:RM,linedashed_frag:PM,meshbasic_vert:LM,meshbasic_frag:NM,meshlambert_vert:DM,meshlambert_frag:IM,meshmatcap_vert:UM,meshmatcap_frag:FM,meshnormal_vert:OM,meshnormal_frag:kM,meshphong_vert:zM,meshphong_frag:BM,meshphysical_vert:HM,meshphysical_frag:VM,meshtoon_vert:GM,meshtoon_frag:jM,points_vert:WM,points_frag:XM,shadow_vert:YM,shadow_frag:$M,sprite_vert:qM,sprite_frag:KM},fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vn.physical={uniforms:Vt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ba={r:0,b:0,g:0},sr=new Kn,ZM=new gt;function QM(t,e,n,i,r,s,a){const o=new Ye(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const S=v(g);S===null?d(o,c):S&&S.isColor&&(d(S,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Gl)?(u===void 0&&(u=new Wn(new Go(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ps(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),sr.copy(_.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(sr)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(f!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Wn(new Wl(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ps(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function d(g,_){g.getRGB(ba,G0(t)),i.buffers.color.setClear(ba.r,ba.g,ba.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,d(o,c)},render:x,addToRenderList:m}}function JM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,R,z,k,Y){let $=!1;const V=f(k,z,R);s!==V&&(s=V,l(s.object)),$=p(M,k,z,Y),$&&v(M,k,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(M,R,z,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return t.createVertexArray()}function l(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,R,z){const k=z.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let $=Y[R.id];$===void 0&&($={},Y[R.id]=$);let V=$[k];return V===void 0&&(V=h(c()),$[k]=V),V}function h(M){const R=[],z=[],k=[];for(let Y=0;Y<n;Y++)R[Y]=0,z[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,R,z,k){const Y=s.attributes,$=R.attributes;let V=0;const Z=z.getAttributes();for(const I in Z)if(Z[I].location>=0){const B=Y[I];let K=$[I];if(K===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),B===void 0||B.attribute!==K||K&&B.data!==K.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function v(M,R,z,k){const Y={},$=R.attributes;let V=0;const Z=z.getAttributes();for(const I in Z)if(Z[I].location>=0){let B=$[I];B===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(B=M.instanceColor));const K={};K.attribute=B,B&&B.data&&(K.data=B.data),Y[I]=K,V++}s.attributes=Y,s.attributesNum=V,s.index=k}function x(){const M=s.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function m(M){d(M,0)}function d(M,R){const z=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;z[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),Y[M]!==R&&(t.vertexAttribDivisor(M,R),Y[M]=R)}function g(){const M=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==M[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function _(M,R,z,k,Y,$,V){V===!0?t.vertexAttribIPointer(M,R,z,Y,$):t.vertexAttribPointer(M,R,z,k,Y,$)}function S(M,R,z,k){x();const Y=k.attributes,$=z.getAttributes(),V=R.defaultAttributeValues;for(const Z in $){const I=$[Z];if(I.location>=0){let H=Y[Z];if(H===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const B=H.normalized,K=H.itemSize,re=e.get(H);if(re===void 0)continue;const Ne=re.buffer,P=re.type,se=re.bytesPerElement,q=P===t.INT||P===t.UNSIGNED_INT||H.gpuType===yf;if(H.isInterleavedBufferAttribute){const ie=H.data,ve=ie.stride,Me=H.offset;if(ie.isInstancedInterleavedBuffer){for(let xe=0;xe<I.locationSize;xe++)d(I.location+xe,ie.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<I.locationSize;xe++)m(I.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let xe=0;xe<I.locationSize;xe++)_(I.location+xe,K/I.locationSize,P,B,ve*se,(Me+K/I.locationSize*xe)*se,q)}else{if(H.isInstancedBufferAttribute){for(let ie=0;ie<I.locationSize;ie++)d(I.location+ie,H.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ie=0;ie<I.locationSize;ie++)m(I.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ie=0;ie<I.locationSize;ie++)_(I.location+ie,K/I.locationSize,P,B,K*se,K/I.locationSize*ie*se,q)}}else if(V!==void 0){const B=V[Z];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(I.location,B);break;case 3:t.vertexAttrib3fv(I.location,B);break;case 4:t.vertexAttrib4fv(I.location,B);break;default:t.vertexAttrib1fv(I.location,B)}}}}g()}function b(){N();for(const M in i){const R=i[M];for(const z in R){const k=R[z];for(const Y in k)u(k[Y].object),delete k[Y];delete R[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const z in R){const k=R[z];for(const Y in k)u(k[Y].object),delete k[Y];delete R[z]}delete i[M.id]}function C(M){for(const R in i){const z=i[R];if(z[M.id]===void 0)continue;const k=z[M.id];for(const Y in k)u(k[Y].object),delete k[Y];delete z[M.id]}}function N(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function eE(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];n.update(p,i,1)}function c(l,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)a(l[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function tE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==In&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!C)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:S,maxSamples:b}}function nE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new dr,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const g=s?0:i,_=g*4;let S=d.clippingState||null;c.value=S,S=u(v,h,_,p);for(let b=0;b!==_;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const d=p+x*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,S=p;_!==x;++_,S+=4)a.copy(f[_]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function iE(t){let e=new WeakMap;function n(a,o){return o===Xu?a.mapping=As:o===Yu&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xu||o===Yu)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pS(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Y0 extends j0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,Mp=[.125,.215,.35,.446,.526,.582],pr=20,jc=new Y0,Ep=new Ye;let Wc=null,Xc=0,Yc=0,$c=!1;const fr=(1+Math.sqrt(5))/2,qr=1/fr,wp=[new W(-fr,qr,0),new W(fr,qr,0),new W(-qr,0,fr),new W(qr,0,fr),new W(0,fr,-qr),new W(0,fr,qr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,Yc),this._renderer.xr.enabled=$c,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ko,format:In,colorSpace:Qi,depthBuffer:!1},r=Ap(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rE(s)),this._blurMaterial=sE(s,e,n)}return r}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ep),u.toneMapping=Gi,u.autoClear=!1;const p=new B0({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new Wn(new Go,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Ep),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):g===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;Ra(r,g*_,d>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ra(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wp[(r-s-1)%wp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wn(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let g=0;for(let C=0;C<pr;++C){const N=C/x,w=Math.exp(-N*N/2);d.push(w),C===0?g+=w:C<m&&(g+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-ls?r-_+ls:0),A=4*(this._cubeSize-S);Ra(n,b,A,3*S,2*S),c.setRenderTarget(n),c.render(f,jc)}}function rE(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+Mp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-ls?c=Mp[a-t+ls-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,m=2,d=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,N=A>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];g.set(w,x*v*A),_.set(h,m*v*A);const M=[A,A,A,A,A,A];S.set(M,d*v*A)}const b=new Ji;b.setAttribute("position",new $n(g,x)),b.setAttribute("uv",new $n(_,m)),b.setAttribute("faceIndex",new $n(S,d)),e.push(b),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ap(t,e,n){const i=new br(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sE(t,e,n){const i=new Float32Array(pr),r=new W(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Cp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function bp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Xu||c===Yu,u=c===As||c===Cs;if(l||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Tp(t)),f=l?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Tp(t)),f=l?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function aE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lE(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)e.update(x[m],t.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){const b=g[_+0],A=g[_+1],C=g[_+2];h.push(b,A,A,C,C,b)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const b=_+0,A=_+1,C=_+2;h.push(b,A,A,C,C,b)}}else return;const m=new(U0(h)?V0:H0)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function cE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function l(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*a,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function f(h,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g];for(let g=0;g<x.length;g++)n.update(d,i,x[g])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function uE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dE(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*f),N=new O0(C,b,A,f);N.type=ci,N.needsUpdate=!0;const w=S*4;for(let R=0;R<f;R++){const z=d[R],k=g[R],Y=_[R],$=b*A*4*R;for(let V=0;V<z.count;V++){const Z=V*w;v===!0&&(r.fromBufferAttribute(z,V),C[$+Z+0]=r.x,C[$+Z+1]=r.y,C[$+Z+2]=r.z,C[$+Z+3]=0),x===!0&&(r.fromBufferAttribute(k,V),C[$+Z+4]=r.x,C[$+Z+5]=r.y,C[$+Z+6]=r.z,C[$+Z+7]=0),m===!0&&(r.fromBufferAttribute(Y,V),C[$+Z+8]=r.x,C[$+Z+9]=r.y,C[$+Z+10]=r.z,C[$+Z+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new We(b,A)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function fE(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class $0 extends Wt{constructor(e,n,i,r,s,a,o,c,l,u=gs){if(u!==gs&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gs&&(i=Cr),i===void 0&&u===Rs&&(i=bs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const q0=new Wt,Rp=new $0(1,1),K0=new O0,Z0=new Zy,Q0=new W0,Pp=[],Lp=[],Np=new Float32Array(16),Dp=new Float32Array(9),Ip=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pp[r];if(s===void 0&&(s=new Float32Array(r),Pp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Lp[e];n===void 0&&(n=new Int32Array(e),Lp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function mE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function vE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),At(n,i)}}function _E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Dp.set(i),t.uniformMatrix3fv(this.addr,!1,Dp),At(n,i)}}function xE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Np.set(i),t.uniformMatrix4fv(this.addr,!1,Np),At(n,i)}}function yE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rp.compareFunction=I0,s=Rp):s=q0,n.setTexture2D(e||s,r)}function RE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z0,r)}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q0,r)}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K0,r)}function NE(t){switch(t){case 5126:return hE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return vE;case 35675:return _E;case 35676:return xE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return wE;case 36294:return TE;case 36295:return AE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return LE}}function DE(t,e){t.uniform1fv(this.addr,e)}function IE(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function UE(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function FE(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function OE(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kE(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zE(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function BE(t,e){t.uniform1iv(this.addr,e)}function HE(t,e){t.uniform2iv(this.addr,e)}function VE(t,e){t.uniform3iv(this.addr,e)}function GE(t,e){t.uniform4iv(this.addr,e)}function jE(t,e){t.uniform1uiv(this.addr,e)}function WE(t,e){t.uniform2uiv(this.addr,e)}function XE(t,e){t.uniform3uiv(this.addr,e)}function YE(t,e){t.uniform4uiv(this.addr,e)}function $E(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||q0,s[a])}function qE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Z0,s[a])}function KE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Q0,s[a])}function ZE(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||K0,s[a])}function QE(t){switch(t){case 5126:return DE;case 35664:return IE;case 35665:return UE;case 35666:return FE;case 35674:return OE;case 35675:return kE;case 35676:return zE;case 5124:case 35670:return BE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return GE;case 5125:return jE;case 36294:return WE;case 36295:return XE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}class JE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NE(n.type)}}class ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QE(n.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Up(t,e){t.seq.push(e),t.map[e.id]=e}function nw(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),a=qc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Up(n,l===void 0?new JE(o,t,e):new ew(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new tw(o),Up(n,f)),n=f}}}class qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);nw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iw=37297;let rw=0;function sw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function ow(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===El&&n===Ml?i="LinearDisplayP3ToLinearSRGB":e===Ml&&n===El&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case jl:return[i,"LinearTransferOETF"];case Hn:case Af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Op(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sw(t.getShaderSource(e),a)}else return r}function aw(t,e){const n=ow(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function lw(t,e){let n;switch(e){case Ty:n="Linear";break;case Ay:n="Reinhard";break;case Cy:n="Cineon";break;case by:n="ACESFilmic";break;case Py:n="AgX";break;case Ly:n="Neutral";break;case Ry:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new W;function cw(){Qe.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function eo(t){return t!==""}function kp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(hw,mw)}const pw=new Map;function mw(t,e){let n=Fe[e];if(n===void 0){const i=pw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(n)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(t){return t.replace(gw,vw)}function vw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _w(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function xw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Sw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case S0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case wy:e="ENVMAP_BLENDING_ADD";break}return e}function Mw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ew(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=_w(n),l=xw(n),u=yw(n),f=Sw(n),h=Mw(n),p=uw(n),v=dw(s),x=r.createProgram();let m,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(eo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(eo).join(`
`),d.length>0&&(d+=`
`)):(m=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),d=[Hp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Gi?lw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,aw("linearToOutputTexel",n.outputColorSpace),cw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),a=Ed(a),a=kp(a,n),a=zp(a,n),o=Ed(o),o=kp(o,n),o=zp(o,n),a=Bp(a),o=Bp(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+m+a,S=g+d+o,b=Fp(r,r.VERTEX_SHADER,_),A=Fp(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let $=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,A);else{const Z=Op(r,b,"vertex"),I=Op(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||Y==="")&&(V=!1);V&&(R.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(b),r.deleteShader(A),N=new qa(r,x),w=fw(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,iw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=A,this}let ww=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Aw(e),n.set(e,i)),i}}class Aw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Cw(t,e,n,i,r,s,a){const o=new k0,c=new Tw,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,z,k){const Y=z.fog,$=k.geometry,V=w.isMeshStandardMaterial?z.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),I=Z&&Z.mapping===Gl?Z.image.height:null,H=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const B=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,K=B!==void 0?B.length:0;let re=0;$.morphAttributes.position!==void 0&&(re=1),$.morphAttributes.normal!==void 0&&(re=2),$.morphAttributes.color!==void 0&&(re=3);let Ne,P,se,q;if(H){const $e=Vn[H];Ne=$e.vertexShader,P=$e.fragmentShader}else Ne=w.vertexShader,P=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),q=c.getFragmentShaderID(w);const ie=t.getRenderTarget(),ve=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,xe=!!w.map,He=!!w.matcap,D=!!Z,et=!!w.aoMap,Ve=!!w.lightMap,Xe=!!w.bumpMap,Ee=!!w.normalMap,dt=!!w.displacementMap,Ce=!!w.emissiveMap,De=!!w.metalnessMap,L=!!w.roughnessMap,E=w.anisotropy>0,X=w.clearcoat>0,J=w.dispersion>0,ne=w.iridescence>0,ee=w.sheen>0,Te=w.transmission>0,de=E&&!!w.anisotropyMap,me=X&&!!w.clearcoatMap,Ue=X&&!!w.clearcoatNormalMap,ae=X&&!!w.clearcoatRoughnessMap,pe=ne&&!!w.iridescenceMap,ke=ne&&!!w.iridescenceThicknessMap,be=ee&&!!w.sheenColorMap,_e=ee&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,ze=!!w.specularColorMap,at=!!w.specularIntensityMap,U=Te&&!!w.transmissionMap,le=Te&&!!w.thicknessMap,Q=!!w.gradientMap,te=!!w.alphaMap,ue=w.alphaTest>0,Re=!!w.alphaHash,Ge=!!w.extensions;let vt=Gi;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Pt={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:P,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qi,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:He,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:et,lightMap:Ve,bumpMap:Xe,normalMap:Ee,displacementMap:h&&dt,emissiveMap:Ce,normalMapObjectSpace:Ee&&w.normalMapType===Uy,normalMapTangentSpace:Ee&&w.normalMapType===D0,metalnessMap:De,roughnessMap:L,anisotropy:E,anisotropyMap:de,clearcoat:X,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ae,dispersion:J,iridescence:ne,iridescenceMap:pe,iridescenceThicknessMap:ke,sheen:ee,sheenColorMap:be,sheenRoughnessMap:_e,specularMap:Ie,specularColorMap:ze,specularIntensityMap:at,transmission:Te,transmissionMap:U,thicknessMap:le,gradientMap:Q,opaque:w.transparent===!1&&w.blending===ms&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:ue,alphaHash:Re,combine:w.combine,mapUv:xe&&x(w.map.channel),aoMapUv:et&&x(w.aoMap.channel),lightMapUv:Ve&&x(w.lightMap.channel),bumpMapUv:Xe&&x(w.bumpMap.channel),normalMapUv:Ee&&x(w.normalMap.channel),displacementMapUv:dt&&x(w.displacementMap.channel),emissiveMapUv:Ce&&x(w.emissiveMap.channel),metalnessMapUv:De&&x(w.metalnessMap.channel),roughnessMapUv:L&&x(w.roughnessMap.channel),anisotropyMapUv:de&&x(w.anisotropyMap.channel),clearcoatMapUv:me&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(w.sheenRoughnessMap.channel),specularMapUv:Ie&&x(w.specularMap.channel),specularColorMapUv:ze&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:le&&x(w.thicknessMap.channel),alphaMapUv:te&&x(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ee||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(xe||te),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oi,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(M,w),_(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function g(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const M=v[w.type];let R;if(M){const z=Vn[M];R=uS.clone(z.uniforms)}else R=w.uniforms;return R}function b(w,M){let R;for(let z=0,k=u.length;z<k;z++){const Y=u[z];if(Y.cacheKey===M){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new Ew(t,M,w,s),u.push(R)),R}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:N}}function bw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,v,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function o(f,h,p,v,x,m){const d=a(f,h,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function c(f,h,p,v,x,m){const d=a(f,h,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function l(f,h){n.length>1&&n.sort(f||Rw),i.length>1&&i.sort(h||Vp),r.length>1&&r.sort(h||Vp)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Pw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gp,t.set(i,[a])):r>=s.length?(a=new Gp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ye};break;case"SpotLight":n={position:new W,direction:new W,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Nw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Dw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t){const e=new Lw,n=Nw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new gt,a=new gt;function o(l){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,g=0,_=0,S=0,b=0,A=0,C=0;l.sort(Iw);for(let w=0,M=l.length;w<M;w++){const R=l[w],z=R.color,k=R.intensity,Y=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*k,f+=z.g*k,h+=z.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],k);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[x]=V;const Z=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,Z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=$,S++}x++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=V,v++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[d]=V,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==g||N.numPointShadows!==_||N.numSpotShadows!==S||N.numSpotMaps!==b||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,N.directionalLength=p,N.pointLength=v,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=g,N.numPointShadows=_,N.numSpotShadows=S,N.numSpotMaps=b,N.numLightProbes=C,i.version=Dw++)}function c(l,u){let f=0,h=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,g=l.length;d<g;d++){const _=l[d];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function jp(t){const e=new Uw(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Fw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new jp(t),e.set(r,[o])):s>=a.length?(o=new jp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ow extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kw extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hw(t,e,n){let i=new bf;const r=new We,s=new We,a=new Mt,o=new Ow({depthPacking:Iy}),c=new kw,l={},u=n.maxTextureSize,f={[Xi]:tn,[tn]:Xi,[oi]:oi},h=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:zw,fragmentShader:Bw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Wn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let d=this.type;this.render=function(A,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==ii&&this.type===ii,Y=d===ii&&this.type!==ii;for(let $=0,V=A.length;$<V;$++){const Z=A[$],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null||k===!0||Y===!0){const K=this.type!==ii?{minFilter:yn,magFilter:yn}:{};I.map!==null&&I.map.dispose(),I.map=new br(r.x,r.y,K),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const B=I.getViewportCount();for(let K=0;K<B;K++){const re=I.getViewport(K);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),z.viewport(a),I.updateMatrices(Z,K),i=I.getFrustum(),S(C,N,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===ii&&g(I,N),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,R)};function g(A,C){const N=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new br(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,N,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,N,p,x,null)}function _(A,C,N,w){let M=null;const R=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=N.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=M.uuid,k=C.uuid;let Y=l[z];Y===void 0&&(Y={},l[z]=Y);let $=Y[k];$===void 0&&($=M.clone(),Y[k]=$,C.addEventListener("dispose",b)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,w===ii?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=N}return M}function S(A,C,N,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Y=A.material;if(Array.isArray(Y)){const $=k.groups;for(let V=0,Z=$.length;V<Z;V++){const I=$[V],H=Y[I.materialIndex];if(H&&H.visible){const B=_(A,H,w,M);A.onBeforeShadow(t,A,C,N,k,B,I),t.renderBufferDirect(N,null,k,B,A,I),A.onAfterShadow(t,A,C,N,k,B,I)}}}else if(Y.visible){const $=_(A,Y,w,M);A.onBeforeShadow(t,A,C,N,k,$,null),t.renderBufferDirect(N,null,k,$,A,null),A.onAfterShadow(t,A,C,N,k,$,null)}}const z=A.children;for(let k=0,Y=z.length;k<Y;k++)S(z[k],C,N,w,M)}function b(A){A.target.removeEventListener("dispose",b);for(const N in l){const w=l[N],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function Vw(t){function e(){let U=!1;const le=new Mt;let Q=null;const te=new Mt(0,0,0,0);return{setMask:function(ue){Q!==ue&&!U&&(t.colorMask(ue,ue,ue,ue),Q=ue)},setLocked:function(ue){U=ue},setClear:function(ue,Re,Ge,vt,Pt){Pt===!0&&(ue*=vt,Re*=vt,Ge*=vt),le.set(ue,Re,Ge,vt),te.equals(le)===!1&&(t.clearColor(ue,Re,Ge,vt),te.copy(le))},reset:function(){U=!1,Q=null,te.set(-1,0,0,0)}}}function n(){let U=!1,le=null,Q=null,te=null;return{setTest:function(ue){ue?q(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(ue){le!==ue&&!U&&(t.depthMask(ue),le=ue)},setFunc:function(ue){if(Q!==ue){switch(ue){case gy:t.depthFunc(t.NEVER);break;case vy:t.depthFunc(t.ALWAYS);break;case _y:t.depthFunc(t.LESS);break;case yl:t.depthFunc(t.LEQUAL);break;case xy:t.depthFunc(t.EQUAL);break;case yy:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case My:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=ue}},setLocked:function(ue){U=ue},setClear:function(ue){te!==ue&&(t.clearDepth(ue),te=ue)},reset:function(){U=!1,le=null,Q=null,te=null}}}function i(){let U=!1,le=null,Q=null,te=null,ue=null,Re=null,Ge=null,vt=null,Pt=null;return{setTest:function($e){U||($e?q(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function($e){le!==$e&&!U&&(t.stencilMask($e),le=$e)},setFunc:function($e,Zn,kn){(Q!==$e||te!==Zn||ue!==kn)&&(t.stencilFunc($e,Zn,kn),Q=$e,te=Zn,ue=kn)},setOp:function($e,Zn,kn){(Re!==$e||Ge!==Zn||vt!==kn)&&(t.stencilOp($e,Zn,kn),Re=$e,Ge=Zn,vt=kn)},setLocked:function($e){U=$e},setClear:function($e){Pt!==$e&&(t.clearStencil($e),Pt=$e)},reset:function(){U=!1,le=null,Q=null,te=null,ue=null,Re=null,Ge=null,vt=null,Pt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],p=null,v=!1,x=null,m=null,d=null,g=null,_=null,S=null,b=null,A=new Ye(0,0,0),C=0,N=!1,w=null,M=null,R=null,z=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=V>=2);let I=null,H={};const B=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),re=new Mt().fromArray(B),Ne=new Mt().fromArray(K);function P(U,le,Q,te){const ue=new Uint8Array(4),Re=t.createTexture();t.bindTexture(U,Re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Q;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(le+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Re}const se={};se[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),q(t.DEPTH_TEST),s.setFunc(yl),Xe(!1),Ee(Kh),q(t.CULL_FACE),et(Vi);function q(U){l[U]!==!0&&(t.enable(U),l[U]=!0)}function ie(U){l[U]!==!1&&(t.disable(U),l[U]=!1)}function ve(U,le){return u[U]!==le?(t.bindFramebuffer(U,le),u[U]=le,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Me(U,le){let Q=h,te=!1;if(U){Q=f.get(le),Q===void 0&&(Q=[],f.set(le,Q));const ue=U.textures;if(Q.length!==ue.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ge=ue.length;Re<Ge;Re++)Q[Re]=t.COLOR_ATTACHMENT0+Re;Q.length=ue.length,te=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,te=!0);te&&t.drawBuffers(Q)}function xe(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const He={[hr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};He[ty]=t.MIN,He[ny]=t.MAX;const D={[iy]:t.ZERO,[ry]:t.ONE,[sy]:t.SRC_COLOR,[ju]:t.SRC_ALPHA,[dy]:t.SRC_ALPHA_SATURATE,[cy]:t.DST_COLOR,[ay]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[Wu]:t.ONE_MINUS_SRC_ALPHA,[uy]:t.ONE_MINUS_DST_COLOR,[ly]:t.ONE_MINUS_DST_ALPHA,[fy]:t.CONSTANT_COLOR,[hy]:t.ONE_MINUS_CONSTANT_COLOR,[py]:t.CONSTANT_ALPHA,[my]:t.ONE_MINUS_CONSTANT_ALPHA};function et(U,le,Q,te,ue,Re,Ge,vt,Pt,$e){if(U===Vi){v===!0&&(ie(t.BLEND),v=!1);return}if(v===!1&&(q(t.BLEND),v=!0),U!==Qx){if(U!==x||$e!==N){if((m!==hr||_!==hr)&&(t.blendEquation(t.FUNC_ADD),m=hr,_=hr),$e)switch(U){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zh:t.blendFunc(t.ONE,t.ONE);break;case Qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,g=null,S=null,b=null,A.set(0,0,0),C=0,x=U,N=$e}return}ue=ue||le,Re=Re||Q,Ge=Ge||te,(le!==m||ue!==_)&&(t.blendEquationSeparate(He[le],He[ue]),m=le,_=ue),(Q!==d||te!==g||Re!==S||Ge!==b)&&(t.blendFuncSeparate(D[Q],D[te],D[Re],D[Ge]),d=Q,g=te,S=Re,b=Ge),(vt.equals(A)===!1||Pt!==C)&&(t.blendColor(vt.r,vt.g,vt.b,Pt),A.copy(vt),C=Pt),x=U,N=!1}function Ve(U,le){U.side===oi?ie(t.CULL_FACE):q(t.CULL_FACE);let Q=U.side===tn;le&&(Q=!Q),Xe(Q),U.blending===ms&&U.transparent===!1?et(Vi):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?q(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function Ee(U){U!==qx?(q(t.CULL_FACE),U!==M&&(U===Kh?t.cullFace(t.BACK):U===Kx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),M=U}function dt(U){U!==R&&($&&t.lineWidth(U),R=U)}function Ce(U,le,Q){U?(q(t.POLYGON_OFFSET_FILL),(z!==le||k!==Q)&&(t.polygonOffset(le,Q),z=le,k=Q)):ie(t.POLYGON_OFFSET_FILL)}function De(U){U?q(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function L(U){U===void 0&&(U=t.TEXTURE0+Y-1),I!==U&&(t.activeTexture(U),I=U)}function E(U,le,Q){Q===void 0&&(I===null?Q=t.TEXTURE0+Y-1:Q=I);let te=H[Q];te===void 0&&(te={type:void 0,texture:void 0},H[Q]=te),(te.type!==U||te.texture!==le)&&(I!==Q&&(t.activeTexture(Q),I=Q),t.bindTexture(U,le||se[U]),te.type=U,te.texture=le)}function X(){const U=H[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function _e(U){Ne.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ne.copy(U))}function Ie(U,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let te=Q.get(U);te===void 0&&(te=t.getUniformBlockIndex(le,U.name),Q.set(U,te))}function ze(U,le){const te=c.get(le).get(U);o.get(le)!==te&&(t.uniformBlockBinding(le,te,U.__bindingPointIndex),o.set(le,te))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},I=null,H={},u={},f=new WeakMap,h=[],p=null,v=!1,x=null,m=null,d=null,g=null,_=null,S=null,b=null,A=new Ye(0,0,0),C=0,N=!1,w=null,M=null,R=null,z=null,k=null,re.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:q,disable:ie,bindFramebuffer:ve,drawBuffers:Me,useProgram:xe,setBlending:et,setMaterial:Ve,setFlipSided:Xe,setCullFace:Ee,setLineWidth:dt,setPolygonOffset:Ce,setScissorTest:De,activeTexture:L,bindTexture:E,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:pe,texImage3D:ke,updateUBOMapping:Ie,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:be,viewport:_e,reset:at}}function Wp(t,e,n,i){const r=Gw(i);switch(n){case A0:return t*e;case b0:return t*e;case R0:return t*e*2;case P0:return t*e/r.components*r.byteLength;case Ef:return t*e/r.components*r.byteLength;case L0:return t*e*2/r.components*r.byteLength;case wf:return t*e*2/r.components*r.byteLength;case C0:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case Tf:return t*e*4/r.components*r.byteLength;case ja:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zu:case Ju:return Math.max(t,16)*Math.max(e,8)/4;case Ku:case Qu:return Math.max(t,8)*Math.max(e,8)/2;case ed:case td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ld:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $a:case vd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N0:case xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yd:case Sd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Gw(t){switch(t){case gi:case E0:return{byteLength:1,components:1};case Po:case w0:case ko:return{byteLength:2,components:1};case Sf:case Mf:return{byteLength:2,components:4};case Cr:case yf:case ci:return{byteLength:4,components:1};case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function jw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return p?new OffscreenCanvas(L,E):Lo("canvas")}function x(L,E,X){let J=1;const ne=De(L);if((ne.width>X||ne.height>X)&&(J=X/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ee=Math.floor(J*ne.width),Te=Math.floor(J*ne.height);f===void 0&&(f=v(ee,Te));const de=E?v(ee,Te):f;return de.width=ee,de.height=Te,de.getContext("2d").drawImage(L,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Te+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==yn&&L.minFilter!==Dn}function d(L){t.generateMipmap(L)}function g(L,E,X,J,ne=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ee=E;if(E===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),E===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),E===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Te=ne?Sl:Qe.getTransfer(J);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(L,E){let X;return L?E===null||E===Cr||E===bs?X=t.DEPTH24_STENCIL8:E===ci?X=t.DEPTH32F_STENCIL8:E===Po&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cr||E===bs?X=t.DEPTH_COMPONENT24:E===ci?X=t.DEPTH_COMPONENT32F:E===Po&&(X=t.DEPTH_COMPONENT16),X}function S(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function b(L){const E=L.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&u.delete(E)}function A(L){const E=L.target;E.removeEventListener("dispose",A),w(E)}function C(L){const E=i.get(L);if(E.__webglInit===void 0)return;const X=L.source,J=h.get(X);if(J){const ne=J[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(L),Object.keys(J).length===0&&h.delete(X)}i.remove(L)}function N(L){const E=i.get(L);t.deleteTexture(E.__webglTexture);const X=L.source,J=h.get(X);delete J[E.__cacheKey],a.memory.textures--}function w(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ne=0;ne<E.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=L.textures;for(let J=0,ne=X.length;J<ne;J++){const ee=i.get(X[J]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(X[J])}i.remove(L)}let M=0;function R(){M=0}function z(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function k(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){const X=i.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(X,L,E);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+E)}function $(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Ne(X,L,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+E)}function V(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Ne(X,L,E);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+E)}function Z(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){P(X,L,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+E)}const I={[$u]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[qu]:t.MIRRORED_REPEAT},H={[yn]:t.NEAREST,[Ny]:t.NEAREST_MIPMAP_NEAREST,[ca]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[Ec]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},B={[Fy]:t.NEVER,[Vy]:t.ALWAYS,[Oy]:t.LESS,[I0]:t.LEQUAL,[ky]:t.EQUAL,[Hy]:t.GEQUAL,[zy]:t.GREATER,[By]:t.NOTEQUAL};function K(L,E){if(E.type===ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Ec||E.magFilter===ca||E.magFilter===xr||E.minFilter===Dn||E.minFilter===Ec||E.minFilter===ca||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[E.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,H[E.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,H[E.minFilter]),E.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==ca&&E.minFilter!==xr||E.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function re(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",b));const J=E.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const ee=k(E);if(ee!==L.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ee].usedTimes++;const Te=ne[L.__cacheKey];Te!==void 0&&(ne[L.__cacheKey].usedTimes--,Te.usedTimes===0&&N(E)),L.__cacheKey=ee,L.__webglTexture=ne[ee].texture}return X}function Ne(L,E,X){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ne=re(L,E),ee=E.source;n.bindTexture(J,L.__webglTexture,t.TEXTURE0+X);const Te=i.get(ee);if(ee.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+X);const de=Qe.getPrimaries(Qe.workingColorSpace),me=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),Ue=E.colorSpace===Li||de===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ae=x(E.image,!1,r.maxTextureSize);ae=Ce(E,ae);const pe=s.convert(E.format,E.colorSpace),ke=s.convert(E.type);let be=g(E.internalFormat,pe,ke,E.colorSpace,E.isVideoTexture);K(J,E);let _e;const Ie=E.mipmaps,ze=E.isVideoTexture!==!0,at=Te.__version===void 0||ne===!0,U=ee.dataReady,le=S(E,ae);if(E.isDepthTexture)be=_(E.format===Rs,E.type),at&&(ze?n.texStorage2D(t.TEXTURE_2D,1,be,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,pe,ke,null));else if(E.isDataTexture)if(Ie.length>0){ze&&at&&n.texStorage2D(t.TEXTURE_2D,le,be,Ie[0].width,Ie[0].height);for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,ke,_e.data):n.texImage2D(t.TEXTURE_2D,Q,be,_e.width,_e.height,0,pe,ke,_e.data);E.generateMipmaps=!1}else ze?(at&&n.texStorage2D(t.TEXTURE_2D,le,be,ae.width,ae.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,pe,ke,ae.data)):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,pe,ke,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,Ie[0].width,Ie[0].height,ae.depth);for(let Q=0,te=Ie.length;Q<te;Q++)if(_e=Ie[Q],E.format!==In)if(pe!==null)if(ze){if(U)if(E.layerUpdates.size>0){const ue=Wp(_e.width,_e.height,E.format,E.type);for(const Re of E.layerUpdates){const Ge=_e.data.subarray(Re*ue/_e.data.BYTES_PER_ELEMENT,(Re+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Re,_e.width,_e.height,1,pe,Ge,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ae.depth,pe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,be,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,ae.depth,pe,ke,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,be,_e.width,_e.height,ae.depth,0,pe,ke,_e.data)}else{ze&&at&&n.texStorage2D(t.TEXTURE_2D,le,be,Ie[0].width,Ie[0].height);for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],E.format!==In?pe!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,ke,_e.data):n.texImage2D(t.TEXTURE_2D,Q,be,_e.width,_e.height,0,pe,ke,_e.data)}else if(E.isDataArrayTexture)if(ze){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,ae.width,ae.height,ae.depth),U)if(E.layerUpdates.size>0){const Q=Wp(ae.width,ae.height,E.format,E.type);for(const te of E.layerUpdates){const ue=ae.data.subarray(te*Q/ae.data.BYTES_PER_ELEMENT,(te+1)*Q/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,pe,ke,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,ke,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,pe,ke,ae.data);else if(E.isData3DTexture)ze?(at&&n.texStorage3D(t.TEXTURE_3D,le,be,ae.width,ae.height,ae.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,ke,ae.data)):n.texImage3D(t.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,pe,ke,ae.data);else if(E.isFramebufferTexture){if(at)if(ze)n.texStorage2D(t.TEXTURE_2D,le,be,ae.width,ae.height);else{let Q=ae.width,te=ae.height;for(let ue=0;ue<le;ue++)n.texImage2D(t.TEXTURE_2D,ue,be,Q,te,0,pe,ke,null),Q>>=1,te>>=1}}else if(Ie.length>0){if(ze&&at){const Q=De(Ie[0]);n.texStorage2D(t.TEXTURE_2D,le,be,Q.width,Q.height)}for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],ze?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,pe,ke,_e):n.texImage2D(t.TEXTURE_2D,Q,be,pe,ke,_e);E.generateMipmaps=!1}else if(ze){if(at){const Q=De(ae);n.texStorage2D(t.TEXTURE_2D,le,be,Q.width,Q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,ke,ae)}else n.texImage2D(t.TEXTURE_2D,0,be,pe,ke,ae);m(E)&&d(J),Te.__version=ee.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function P(L,E,X){if(E.image.length!==6)return;const J=re(L,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const ee=i.get(ne);if(ne.version!==ee.__version||J===!0){n.activeTexture(t.TEXTURE0+X);const Te=Qe.getPrimaries(Qe.workingColorSpace),de=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),me=E.colorSpace===Li||Te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Ue&&!ae?pe[te]=x(E.image[te],!0,r.maxCubemapSize):pe[te]=ae?E.image[te].image:E.image[te],pe[te]=Ce(E,pe[te]);const ke=pe[0],be=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),Ie=g(E.internalFormat,be,_e,E.colorSpace),ze=E.isVideoTexture!==!0,at=ee.__version===void 0||J===!0,U=ne.dataReady;let le=S(E,ke);K(t.TEXTURE_CUBE_MAP,E);let Q;if(Ue){ze&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ie,ke.width,ke.height);for(let te=0;te<6;te++){Q=pe[te].mipmaps;for(let ue=0;ue<Q.length;ue++){const Re=Q[ue];E.format!==In?be!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Re.width,Re.height,be,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ie,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Re.width,Re.height,be,_e,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ie,Re.width,Re.height,0,be,_e,Re.data)}}}else{if(Q=E.mipmaps,ze&&at){Q.length>0&&le++;const te=De(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(ae){ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,be,_e,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,pe[te].width,pe[te].height,0,be,_e,pe[te].data);for(let ue=0;ue<Q.length;ue++){const Ge=Q[ue].image[te].image;ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ge.width,Ge.height,be,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ie,Ge.width,Ge.height,0,be,_e,Ge.data)}}else{ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,_e,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,be,_e,pe[te]);for(let ue=0;ue<Q.length;ue++){const Re=Q[ue];ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,be,_e,Re.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ie,be,_e,Re.image[te])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),ee.__version=ne.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,X,J,ne,ee){const Te=s.convert(X.format,X.colorSpace),de=s.convert(X.type),me=g(X.internalFormat,Te,de,X.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>ee),pe=Math.max(1,E.height>>ee);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ee,me,ae,pe,E.depth,0,Te,de,null):n.texImage2D(ne,ee,me,ae,pe,0,Te,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Ee(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,i.get(X).__webglTexture,0,Xe(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,i.get(X).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function q(L,E,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),E.depthBuffer){const J=E.depthTexture,ne=J&&J.isDepthTexture?J.type:null,ee=_(E.stencilBuffer,ne),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Xe(E);Ee(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ee,E.width,E.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,L)}else{const J=E.textures;for(let ne=0;ne<J.length;ne++){const ee=J[ne],Te=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),me=g(ee.internalFormat,Te,de,ee.colorSpace),Ue=Xe(E);X&&Ee(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,me,E.width,E.height):Ee(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ie(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ne=Xe(E);if(E.depthTexture.format===gs)Ee(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(E.depthTexture.format===Rs)Ee(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(L){const E=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=J}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ie(E.__webglFramebuffer,L)}else if(X){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),q(E.__webglDepthbuffer[J],L,!1);else{const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),q(E.__webglDepthbuffer,L,!1);else{const J=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(L,E,X){const J=i.get(L);E!==void 0&&se(J.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&ve(L)}function xe(L){const E=L.texture,X=i.get(L),J=i.get(E);L.addEventListener("dispose",A);const ne=L.textures,ee=L.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,a.memory.textures++),ee){X.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[de]=[];for(let me=0;me<E.mipmaps.length;me++)X.__webglFramebuffer[de][me]=t.createFramebuffer()}else X.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)X.__webglFramebuffer[de]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Te)for(let de=0,me=ne.length;de<me;de++){const Ue=i.get(ne[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&Ee(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const me=ne[de];X.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[de]);const Ue=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),pe=g(me.internalFormat,Ue,ae,me.colorSpace,L.isXRRenderTarget===!0),ke=Xe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,X.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),q(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),K(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)se(X.__webglFramebuffer[de][me],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else se(X.__webglFramebuffer[de],L,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let de=0,me=ne.length;de<me;de++){const Ue=ne[de],ae=i.get(Ue);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),K(t.TEXTURE_2D,Ue),se(X.__webglFramebuffer,L,Ue,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Ue)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),K(de,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)se(X.__webglFramebuffer[me],L,E,t.COLOR_ATTACHMENT0,de,me);else se(X.__webglFramebuffer,L,E,t.COLOR_ATTACHMENT0,de,0);m(E)&&d(de),n.unbindTexture()}L.depthBuffer&&ve(L)}function He(L){const E=L.textures;for(let X=0,J=E.length;X<J;X++){const ne=E[X];if(m(ne)){const ee=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ne).__webglTexture;n.bindTexture(ee,Te),d(ee),n.unbindTexture()}}}const D=[],et=[];function Ve(L){if(L.samples>0){if(Ee(L)===!1){const E=L.textures,X=L.width,J=L.height;let ne=t.COLOR_BUFFER_BIT;const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(L),de=E.length>1;if(de)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let me=0;me<E.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ue=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,X,J,0,0,X,J,ne,t.NEAREST),c===!0&&(D.length=0,et.length=0,D.push(t.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(ee),et.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Te.__webglColorRenderbuffer[me]);const Ue=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Xe(L){return Math.min(r.maxSamples,L.samples)}function Ee(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ce(L,E){const X=L.colorSpace,J=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Qi&&X!==Li&&(Qe.getTransfer(X)===rt?(J!==In||ne!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Me,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ee}function Ww(t,e){function n(i,r=Li){let s;const a=Qe.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===Sf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===T0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===E0)return t.BYTE;if(i===w0)return t.SHORT;if(i===Po)return t.UNSIGNED_SHORT;if(i===yf)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ko)return t.HALF_FLOAT;if(i===A0)return t.ALPHA;if(i===C0)return t.RGB;if(i===In)return t.RGBA;if(i===b0)return t.LUMINANCE;if(i===R0)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===P0)return t.RED;if(i===Ef)return t.RED_INTEGER;if(i===L0)return t.RG;if(i===wf)return t.RG_INTEGER;if(i===Tf)return t.RGBA_INTEGER;if(i===ja||i===Wa||i===Xa||i===Ya)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ku||i===Zu||i===Qu||i===Ju)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ku)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ju)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ed||i===td)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===id)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===od)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ad)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ld)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ud)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===md)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===vd||i===_d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$a)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N0||i===xd||i===yd||i===Sd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Xw extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yw={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;l.inputState.pinching&&h>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yw)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:$w,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new Wl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zw extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,v=null;const x=new Kw,m=n.getContextAttributes();let d=null,g=null;const _=[],S=[],b=new We;let A=null;const C=new _n;C.layers.enable(1),C.viewport=new Mt;const N=new _n;N.layers.enable(2),N.viewport=new Mt;const w=[C,N],M=new Xw;M.layers.enable(1),M.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let se=_[P];return se===void 0&&(se=new Kc,_[P]=se),se.getTargetRaySpace()},this.getControllerGrip=function(P){let se=_[P];return se===void 0&&(se=new Kc,_[P]=se),se.getGripSpace()},this.getHand=function(P){let se=_[P];return se===void 0&&(se=new Kc,_[P]=se),se.getHandSpace()};function k(P){const se=S.indexOf(P.inputSource);if(se===-1)return;const q=_[se];q!==void 0&&(q.update(P.inputSource,P.frame,l||a),q.dispatchEvent({type:P.type,data:P.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let P=0;P<_.length;P++){const se=S[P];se!==null&&(S[P]=null,_[P].disconnect(se))}R=null,z=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,g=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new br(p.framebufferWidth,p.framebufferHeight,{format:In,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,q=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=m.stencil?Rs:gs,q=m.stencil?bs:Cr);const ve={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new br(h.textureWidth,h.textureHeight,{format:In,type:gi,depthTexture:new $0(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(P){for(let se=0;se<P.removed.length;se++){const q=P.removed[se],ie=S.indexOf(q);ie>=0&&(S[ie]=null,_[ie].disconnect(q))}for(let se=0;se<P.added.length;se++){const q=P.added[se];let ie=S.indexOf(q);if(ie===-1){for(let Me=0;Me<_.length;Me++)if(Me>=S.length){S.push(q),ie=Me;break}else if(S[Me]===null){S[Me]=q,ie=Me;break}if(ie===-1)break}const ve=_[ie];ve&&ve.connect(q)}}const V=new W,Z=new W;function I(P,se,q){V.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(q.matrixWorld);const ie=V.distanceTo(Z),ve=se.projectionMatrix.elements,Me=q.projectionMatrix.elements,xe=ve[14]/(ve[10]-1),He=ve[14]/(ve[10]+1),D=(ve[9]+1)/ve[5],et=(ve[9]-1)/ve[5],Ve=(ve[8]-1)/ve[0],Xe=(Me[8]+1)/Me[0],Ee=xe*Ve,dt=xe*Xe,Ce=ie/(-Ve+Xe),De=Ce*-Ve;if(se.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(De),P.translateZ(Ce),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),ve[10]===-1)P.projectionMatrix.copy(se.projectionMatrix),P.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const L=xe+Ce,E=He+Ce,X=Ee-De,J=dt+(ie-De),ne=D*He/E*L,ee=et*He/E*L;P.projectionMatrix.makePerspective(X,J,ne,ee,L,E),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function H(P,se){se===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(se.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let se=P.near,q=P.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(q=x.depthFar)),M.near=N.near=C.near=se,M.far=N.far=C.far=q,(R!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,z=M.far);const ie=P.parent,ve=M.cameras;H(M,ie);for(let Me=0;Me<ve.length;Me++)H(ve[Me],ie);ve.length===2?I(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),B(P,M,ie)};function B(P,se,q){q===null?P.matrix.copy(se.matrixWorld):(P.matrix.copy(q.matrixWorld),P.matrix.invert(),P.matrix.multiply(se.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(se.projectionMatrix),P.projectionMatrixInverse.copy(se.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Md*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(P){c=P,h!==null&&(h.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let K=null;function re(P,se){if(u=se.getViewerPose(l||a),v=se,u!==null){const q=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ie=!1;q.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let Me=0;Me<q.length;Me++){const xe=q[Me];let He=null;if(p!==null)He=p.getViewport(xe);else{const et=f.getViewSubImage(h,xe);He=et.viewport,Me===0&&(e.setRenderTargetTextures(g,et.colorTexture,h.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(g))}let D=w[Me];D===void 0&&(D=new _n,D.layers.enable(Me),D.viewport=new Mt,w[Me]=D),D.matrix.fromArray(xe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(xe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(He.x,He.y,He.width,He.height),Me===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(D)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Me=f.getDepthInformation(q[0]);Me&&Me.isValid&&Me.texture&&x.init(e,Me,r.renderState)}}for(let q=0;q<_.length;q++){const ie=S[q],ve=_[q];ie!==null&&ve!==void 0&&ve.update(ie,se,l||a)}K&&K(P,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const Ne=new X0;Ne.setAnimationLoop(re),this.setAnimationLoop=function(P){K=P},this.dispose=function(){}}}const or=new Kn,Qw=new gt;function Jw(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,G0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,g,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,or.copy(S),or.x*=-1,or.y*=-1,or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(or)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,g,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function l(g,_){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function u(g){const _=f();g.__bindingPointIndex=_;const S=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,C=S.length;A<C;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=N.length;w<M;w++){const R=N[w];if(p(R,A,w,b)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let $=0;$<k.length;$++){const V=k[$],Z=x(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,b){const A=g.value,C=_+"_"+S;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const N=b[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return b[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const b=16;for(let C=0,N=_.length;C<N;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,R=w.length;M<R;M++){const z=w[M],k=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,$=k.length;Y<$;Y++){const V=k[Y],Z=x(V),I=S%b,H=I%Z.boundary,B=I+H;S+=H,B!==0&&b-B<Z.storage&&(S+=b-B),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Z.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class tT{constructor(e={}){const{canvas:n=jy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let S=!1,b=0,A=0,C=null,N=-1,w=null;const M=new Mt,R=new Mt;let z=null;const k=new Ye(0);let Y=0,$=n.width,V=n.height,Z=1,I=null,H=null;const B=new Mt(0,0,$,V),K=new Mt(0,0,$,V);let re=!1;const Ne=new bf;let P=!1,se=!1;const q=new gt,ie=new W,ve=new Mt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function He(){return C===null?Z:1}let D=i;function et(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xf}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",ue,!1),D===null){const F="webgl2";if(D=et(F,T),D===null)throw et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,Xe,Ee,dt,Ce,De,L,E,X,J,ne,ee,Te,de,me,Ue,ae,pe,ke,be,_e,Ie,ze,at;function U(){Ve=new aE(D),Ve.init(),Ie=new Ww(D,Ve),Xe=new tE(D,Ve,e,Ie),Ee=new Vw(D),dt=new uE(D),Ce=new bw,De=new jw(D,Ve,Ee,Ce,Xe,Ie,dt),L=new iE(_),E=new oE(_),X=new vS(D),ze=new JM(D,X),J=new lE(D,X,dt,ze),ne=new fE(D,J,X,dt),ke=new dE(D,Xe,De),Ue=new nE(Ce),ee=new Cw(_,L,E,Ve,Xe,ze,Ue),Te=new Jw(_,Ce),de=new Pw,me=new Fw(Ve),pe=new QM(_,L,E,Ee,ne,h,c),ae=new Hw(_,ne,Xe),at=new eT(D,dt,Xe,Ee),be=new eE(D,Ve,dt),_e=new cE(D,Ve,dt),dt.programs=ee.programs,_.capabilities=Xe,_.extensions=Ve,_.properties=Ce,_.renderLists=de,_.shadowMap=ae,_.state=Ee,_.info=dt}U();const le=new Zw(_,D);this.xr=le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize($,V,!1))},this.getSize=function(T){return T.set($,V)},this.setSize=function(T,F,G=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,V=F,n.width=Math.floor(T*Z),n.height=Math.floor(F*Z),G===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set($*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,F,G){$=T,V=F,Z=G,n.width=Math.floor(T*G),n.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,F,G,j){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,F,G,j),Ee.viewport(M.copy(B).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,F,G,j){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,F,G,j),Ee.scissor(R.copy(K).multiplyScalar(Z).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){Ee.setScissorTest(re=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(T=!0,F=!0,G=!0){let j=0;if(T){let O=!1;if(C!==null){const ce=C.texture.format;O=ce===Tf||ce===wf||ce===Ef}if(O){const ce=C.texture.type,he=ce===gi||ce===Cr||ce===Po||ce===bs||ce===Sf||ce===Mf,ye=pe.getClearColor(),Se=pe.getClearAlpha(),Pe=ye.r,Le=ye.g,we=ye.b;he?(p[0]=Pe,p[1]=Le,p[2]=we,p[3]=Se,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Pe,v[1]=Le,v[2]=we,v[3]=Se,D.clearBufferiv(D.COLOR,0,v))}else j|=D.COLOR_BUFFER_BIT}F&&(j|=D.DEPTH_BUFFER_BIT),G&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),de.dispose(),me.dispose(),Ce.dispose(),L.dispose(),E.dispose(),ne.dispose(),ze.dispose(),at.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",kn),le.removeEventListener("sessionend",Nf),er.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=dt.autoReset,F=ae.enabled,G=ae.autoUpdate,j=ae.needsUpdate,O=ae.type;U(),dt.autoReset=T,ae.enabled=F,ae.autoUpdate=G,ae.needsUpdate=j,ae.type=O}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Re(T){const F=T.target;F.removeEventListener("dispose",Re),Ge(F)}function Ge(T){vt(T),Ce.remove(T)}function vt(T){const F=Ce.get(T).programs;F!==void 0&&(F.forEach(function(G){ee.releaseProgram(G)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,j,O,ce){F===null&&(F=Me);const he=O.isMesh&&O.matrixWorld.determinant()<0,ye=tv(T,F,G,j,O);Ee.setMaterial(j,he);let Se=G.index,Pe=1;if(j.wireframe===!0){if(Se=J.getWireframeAttribute(G),Se===void 0)return;Pe=2}const Le=G.drawRange,we=G.attributes.position;let qe=Le.start*Pe,ft=(Le.start+Le.count)*Pe;ce!==null&&(qe=Math.max(qe,ce.start*Pe),ft=Math.min(ft,(ce.start+ce.count)*Pe)),Se!==null?(qe=Math.max(qe,0),ft=Math.min(ft,Se.count)):we!=null&&(qe=Math.max(qe,0),ft=Math.min(ft,we.count));const ht=ft-qe;if(ht<0||ht===1/0)return;ze.setup(O,j,ye,G,Se);let nn,Ke=be;if(Se!==null&&(nn=X.get(Se),Ke=_e,Ke.setIndex(nn)),O.isMesh)j.wireframe===!0?(Ee.setLineWidth(j.wireframeLinewidth*He()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(O.isLine){let Ae=j.linewidth;Ae===void 0&&(Ae=1),Ee.setLineWidth(Ae*He()),O.isLineSegments?Ke.setMode(D.LINES):O.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else O.isPoints?Ke.setMode(D.POINTS):O.isSprite&&Ke.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ae=O._multiDrawStarts,Lt=O._multiDrawCounts,Ze=O._multiDrawCount,Tn=Se?X.get(Se).bytesPerElement:1,Lr=Ce.get(j).currentProgram.getUniforms();for(let rn=0;rn<Ze;rn++)Lr.setValue(D,"_gl_DrawID",rn),Ke.render(Ae[rn]/Tn,Lt[rn])}else if(O.isInstancedMesh)Ke.renderInstances(qe,ht,O.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Lt=Math.min(G.instanceCount,Ae);Ke.renderInstances(qe,ht,Lt)}else Ke.render(qe,ht)};function Pt(T,F,G){T.transparent===!0&&T.side===oi&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Wo(T,F,G),T.side=Xi,T.needsUpdate=!0,Wo(T,F,G),T.side=oi):Wo(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),m=me.get(G),m.init(F),g.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const j=new Set;return T.traverse(function(O){const ce=O.material;if(ce)if(Array.isArray(ce))for(let he=0;he<ce.length;he++){const ye=ce[he];Pt(ye,G,O),j.add(ye)}else Pt(ce,G,O),j.add(ce)}),g.pop(),m=null,j},this.compileAsync=function(T,F,G=null){const j=this.compile(T,F,G);return new Promise(O=>{function ce(){if(j.forEach(function(he){Ce.get(he).currentProgram.isReady()&&j.delete(he)}),j.size===0){O(T);return}setTimeout(ce,10)}Ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let $e=null;function Zn(T){$e&&$e(T)}function kn(){er.stop()}function Nf(){er.start()}const er=new X0;er.setAnimationLoop(Zn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(T){$e=T,le.setAnimationLoop(T),T===null?er.stop():er.start()},le.addEventListener("sessionstart",kn),le.addEventListener("sessionend",Nf),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,C),m=me.get(T,g.length),m.init(F),g.push(m),q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(q),se=this.localClippingEnabled,P=Ue.init(this.clippingPlanes,se),x=de.get(T,d.length),x.init(),d.push(x),le.enabled===!0&&le.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&Yl(ce,F,-1/0,_.sortObjects)}Yl(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(I,H),xe=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,xe&&pe.addToRenderList(x,T),this.info.render.frame++,P===!0&&Ue.beginShadows();const G=m.state.shadowsArray;ae.render(G,T,F),P===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,O=x.transmissive;if(m.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let he=0,ye=ce.length;he<ye;he++){const Se=ce[he];If(j,O,T,Se)}xe&&pe.render(T);for(let he=0,ye=ce.length;he<ye;he++){const Se=ce[he];Df(x,T,Se,Se.viewport)}}else O.length>0&&If(j,O,T,F),xe&&pe.render(T),Df(x,T,F);C!==null&&(De.updateMultisampleRenderTarget(C),De.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,F),ze.resetDefaultState(),N=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],P===!0&&Ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Yl(T,F,G,j){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){j&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);const he=ne.update(T),ye=T.material;ye.visible&&x.push(T,he,ye,G,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const he=ne.update(T),ye=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ve.copy(he.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(q)),Array.isArray(ye)){const Se=he.groups;for(let Pe=0,Le=Se.length;Pe<Le;Pe++){const we=Se[Pe],qe=ye[we.materialIndex];qe&&qe.visible&&x.push(T,he,qe,G,ve.z,we)}}else ye.visible&&x.push(T,he,ye,G,ve.z,null)}}const ce=T.children;for(let he=0,ye=ce.length;he<ye;he++)Yl(ce[he],F,G,j)}function Df(T,F,G,j){const O=T.opaque,ce=T.transmissive,he=T.transparent;m.setupLightsView(G),P===!0&&Ue.setGlobalState(_.clippingPlanes,G),j&&Ee.viewport(M.copy(j)),O.length>0&&jo(O,F,G),ce.length>0&&jo(ce,F,G),he.length>0&&jo(he,F,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function If(T,F,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new br(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ko:gi,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ce=m.state.transmissionRenderTarget[j.id],he=j.viewport||M;ce.setSize(he.z,he.w);const ye=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(k),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),xe&&pe.render(G);const Se=_.toneMapping;_.toneMapping=Gi;const Pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),P===!0&&Ue.setGlobalState(_.clippingPlanes,j),jo(T,G,j),De.updateMultisampleRenderTarget(ce),De.updateRenderTargetMipmap(ce),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let we=0,qe=F.length;we<qe;we++){const ft=F[we],ht=ft.object,nn=ft.geometry,Ke=ft.material,Ae=ft.group;if(Ke.side===oi&&ht.layers.test(j.layers)){const Lt=Ke.side;Ke.side=tn,Ke.needsUpdate=!0,Uf(ht,G,j,nn,Ke,Ae),Ke.side=Lt,Ke.needsUpdate=!0,Le=!0}}Le===!0&&(De.updateMultisampleRenderTarget(ce),De.updateRenderTargetMipmap(ce))}_.setRenderTarget(ye),_.setClearColor(k,Y),Pe!==void 0&&(j.viewport=Pe),_.toneMapping=Se}function jo(T,F,G){const j=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=T.length;O<ce;O++){const he=T[O],ye=he.object,Se=he.geometry,Pe=j===null?he.material:j,Le=he.group;ye.layers.test(G.layers)&&Uf(ye,F,G,Se,Pe,Le)}}function Uf(T,F,G,j,O,ce){T.onBeforeRender(_,F,G,j,O,ce),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,G,j,T,ce),O.transparent===!0&&O.side===oi&&O.forceSinglePass===!1?(O.side=tn,O.needsUpdate=!0,_.renderBufferDirect(G,F,j,O,T,ce),O.side=Xi,O.needsUpdate=!0,_.renderBufferDirect(G,F,j,O,T,ce),O.side=oi):_.renderBufferDirect(G,F,j,O,T,ce),T.onAfterRender(_,F,G,j,O,ce)}function Wo(T,F,G){F.isScene!==!0&&(F=Me);const j=Ce.get(T),O=m.state.lights,ce=m.state.shadowsArray,he=O.state.version,ye=ee.getParameters(T,O.state,ce,F,G),Se=ee.getProgramCacheKey(ye);let Pe=j.programs;j.environment=T.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(T.isMeshStandardMaterial?E:L).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Re),Pe=new Map,j.programs=Pe);let Le=Pe.get(Se);if(Le!==void 0){if(j.currentProgram===Le&&j.lightsStateVersion===he)return Of(T,ye),Le}else ye.uniforms=ee.getUniforms(T),T.onBeforeCompile(ye,_),Le=ee.acquireProgram(ye,Se),Pe.set(Se,Le),j.uniforms=ye.uniforms;const we=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=Ue.uniform),Of(T,ye),j.needsLights=iv(T),j.lightsStateVersion=he,j.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Le,j.uniformsList=null,Le}function Ff(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=qa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Of(T,F){const G=Ce.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function tv(T,F,G,j,O){F.isScene!==!0&&(F=Me),De.resetTextureUnits();const ce=F.fog,he=j.isMeshStandardMaterial?F.environment:null,ye=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qi,Se=(j.isMeshStandardMaterial?E:L).get(j.envMap||he),Pe=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),we=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let ht=Gi;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ht=_.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=nn!==void 0?nn.length:0,Ae=Ce.get(j),Lt=m.state.lights;if(P===!0&&(se===!0||T!==w)){const pn=T===w&&j.id===N;Ue.setState(j,T,pn)}let Ze=!1;j.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Lt.state.version||Ae.outputColorSpace!==ye||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==Se||j.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ue.numPlanes||Ae.numIntersection!==Ue.numIntersection)||Ae.vertexAlphas!==Pe||Ae.vertexTangents!==Le||Ae.morphTargets!==we||Ae.morphNormals!==qe||Ae.morphColors!==ft||Ae.toneMapping!==ht||Ae.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Ae.__version=j.version);let Tn=Ae.currentProgram;Ze===!0&&(Tn=Wo(j,F,O));let Lr=!1,rn=!1,$l=!1;const _t=Tn.getUniforms(),xi=Ae.uniforms;if(Ee.useProgram(Tn.program)&&(Lr=!0,rn=!0,$l=!0),j.id!==N&&(N=j.id,rn=!0),Lr||w!==T){_t.setValue(D,"projectionMatrix",T.projectionMatrix),_t.setValue(D,"viewMatrix",T.matrixWorldInverse);const pn=_t.map.cameraPosition;pn!==void 0&&pn.setValue(D,ie.setFromMatrixPosition(T.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,rn=!0,$l=!0)}if(O.isSkinnedMesh){_t.setOptional(D,O,"bindMatrix"),_t.setOptional(D,O,"bindMatrixInverse");const pn=O.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),_t.setValue(D,"boneTexture",pn.boneTexture,De))}O.isBatchedMesh&&(_t.setOptional(D,O,"batchingTexture"),_t.setValue(D,"batchingTexture",O._matricesTexture,De),_t.setOptional(D,O,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",O._indirectTexture,De),_t.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",O._colorsTexture,De));const ql=G.morphAttributes;if((ql.position!==void 0||ql.normal!==void 0||ql.color!==void 0)&&ke.update(O,G,Tn),(rn||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,_t.setValue(D,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xi.envMap.value=Se,xi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(xi.envMapIntensity.value=F.environmentIntensity),rn&&(_t.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&nv(xi,$l),ce&&j.fog===!0&&Te.refreshFogUniforms(xi,ce),Te.refreshMaterialUniforms(xi,j,Z,V,m.state.transmissionRenderTarget[T.id]),qa.upload(D,Ff(Ae),xi,De)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(qa.upload(D,Ff(Ae),xi,De),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(D,"center",O.center),_t.setValue(D,"modelViewMatrix",O.modelViewMatrix),_t.setValue(D,"normalMatrix",O.normalMatrix),_t.setValue(D,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let Kl=0,rv=pn.length;Kl<rv;Kl++){const kf=pn[Kl];at.update(kf,Tn),at.bind(kf,Tn)}}return Tn}function nv(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function iv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,G){Ce.get(T.texture).__webglTexture=F,Ce.get(T.depthTexture).__webglTexture=G;const j=Ce.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=G===void 0,j.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=Ce.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){C=T,b=F,A=G;let j=!0,O=null,ce=!1,he=!1;if(T){const Se=Ce.get(T);if(Se.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Se.__webglFramebuffer===void 0)De.setupRenderTarget(T);else if(Se.__hasExternalTextures)De.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const we=T.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(T.width!==we.image.width||T.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Le=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?O=Le[F][G]:O=Le[F],ce=!0):T.samples>0&&De.useMultisampledRTT(T)===!1?O=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,M.copy(T.viewport),R.copy(T.scissor),z=T.scissorTest}else M.copy(B).multiplyScalar(Z).floor(),R.copy(K).multiplyScalar(Z).floor(),z=re;if(Ee.bindFramebuffer(D.FRAMEBUFFER,O)&&j&&Ee.drawBuffers(T,O),Ee.viewport(M),Ee.scissor(R),Ee.setScissorTest(z),ce){const Se=Ce.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,G)}else if(he){const Se=Ce.get(T.texture),Pe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Pe)}N=-1},this.readRenderTargetPixels=function(T,F,G,j,O,ce,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Se=T.texture,Pe=Se.format,Le=Se.type;if(!Xe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-j&&G>=0&&G<=T.height-O&&D.readPixels(F,G,j,O,Ie.convert(Pe),Ie.convert(Le),ce)}finally{const Se=C!==null?Ce.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,j,O,ce,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Ee.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Se=T.texture,Pe=Se.format,Le=Se.type;if(!Xe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-j&&G>=0&&G<=T.height-O){const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(F,G,j,O,Ie.convert(Pe),Ie.convert(Le),0),D.flush();const qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Wy(D,qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce)}finally{D.deleteBuffer(we),D.deleteSync(qe)}return ce}}finally{const Se=C!==null?Ce.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-G),O=Math.floor(T.image.width*j),ce=Math.floor(T.image.height*j),he=F!==null?F.x:0,ye=F!==null?F.y:0;De.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,he,ye,O,ce),Ee.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,j=null,O=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ce,he,ye,Se,Pe,Le;G!==null?(ce=G.max.x-G.min.x,he=G.max.y-G.min.y,ye=G.min.x,Se=G.min.y):(ce=T.image.width,he=T.image.height,ye=0,Se=0),j!==null?(Pe=j.x,Le=j.y):(Pe=0,Le=0);const we=Ie.convert(F.format),qe=Ie.convert(F.type);De.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ft=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ke=D.getParameter(D.UNPACK_SKIP_ROWS),Ae=D.getParameter(D.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[O]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Pe,Le,ce,he,we,qe,Lt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Pe,Le,Lt.width,Lt.height,we,Lt.data):D.texSubImage2D(D.TEXTURE_2D,O,Pe,Le,ce,he,we,qe,Lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,j=null,O=0){T.isTexture!==!0&&(uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,j=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ce,he,ye,Se,Pe,Le,we,qe,ft;const ht=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(ce=G.max.x-G.min.x,he=G.max.y-G.min.y,ye=G.max.z-G.min.z,Se=G.min.x,Pe=G.min.y,Le=G.min.z):(ce=ht.width,he=ht.height,ye=ht.depth,Se=0,Pe=0,Le=0),j!==null?(we=j.x,qe=j.y,ft=j.z):(we=0,qe=0,ft=0);const nn=Ie.convert(F.format),Ke=Ie.convert(F.type);let Ae;if(F.isData3DTexture)De.setTexture3D(F,0),Ae=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)De.setTexture2DArray(F,0),Ae=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Lt=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=D.getParameter(D.UNPACK_SKIP_PIXELS),Lr=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ae,O,we,qe,ft,ce,he,ye,nn,Ke,ht.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,O,we,qe,ft,ce,he,ye,nn,ht.data):D.texSubImage3D(Ae,O,we,qe,ft,ce,he,ye,nn,Ke,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),O===0&&F.generateMipmaps&&D.generateMipmap(Ae),Ee.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&De.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?De.setTextureCube(T,0):T.isData3DTexture?De.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?De.setTexture2DArray(T,0):De.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,Ee.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Af?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===jl?"display-p3":"srgb"}}class nT extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Pf extends Ji{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new W,h=new W,p=[],v=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&c===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const A=b/n;f.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(A+S,1-_),g.push(l++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const _=u[d][g+1],S=u[d][g],b=u[d+1][g],A=u[d+1][g+1];(d!==0||a>0)&&p.push(_,S,A),(d!==i-1||c<Math.PI)&&p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new qn(v,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iT extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D0,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Xp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const p=l[f],v=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const sT=new rT;class Lf{constructor(e){this.manager=e!==void 0?e:sT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lf.DEFAULT_MATERIAL_NAME="__DEFAULT";class oT extends Lf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xp.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Lo("img");function c(){u(),Xp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class aT extends Lf{constructor(e){super(e)}load(e,n,i,r){const s=new Wt,a=new oT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class J0 extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zc=new gt,Yp=new W,$p=new W;class lT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yp),$p.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($p),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cT extends lT{constructor(){super(new Y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uT extends J0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new cT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dT extends J0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);function fT(){const t=nt.useRef(null),e=nt.useRef(!1),n=nt.useRef({x:0,y:0});return nt.useEffect(()=>{if(!t.current)return;const i=new nT,r=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),s=new tT({antialias:!0,alpha:!0}),a=()=>{if(t.current){const{clientWidth:g,clientHeight:_}=t.current;s.setSize(g,_),r.aspect=g/_,r.updateProjectionMatrix()}};a(),t.current.appendChild(s.domElement),window.addEventListener("resize",a);const c=new aT().load("images/profile.png"),l=new Pf(3,32,32),u=new iT({map:c}),f=new Wn(l,u);i.add(f);const h=new dT,p=new uT(16777215,2);p.position.set(5,5,5),i.add(h),i.add(p),r.position.z=5;const v=g=>{e.current=!0,n.current={x:g.clientX,y:g.clientY}},x=g=>{if(!e.current)return;const _={x:g.clientX-n.current.x,y:g.clientY-n.current.y};f.rotation.y+=_.x*.005,f.rotation.x+=_.y*.005,n.current={x:g.clientX,y:g.clientY}},m=()=>{e.current=!1};t.current.addEventListener("mousedown",v),window.addEventListener("mousemove",x),window.addEventListener("mouseup",m);const d=()=>{requestAnimationFrame(d),e.current||(f.rotation.y+=.01),s.render(i,r)};return d(),()=>{t.current&&t.current.removeChild(s.domElement),window.removeEventListener("resize",a),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",m)}},[]),y.jsx(wn,{children:y.jsx("div",{ref:t,className:"w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] cursor-pointer"})})}function Tl({children:t}){const[e,n]=Oo({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-bottom":"opacity-0"}`,children:t})}function un({children:t,hoverEffect:e=!0,className:n=""}){return y.jsx("div",{className:`${n} text-white p-4 rounded-lg shadow-lg text-[0.9rem] h-full ${e&&"transform hover:scale-105 transition-transform duration-300"} bg-primary-800`,children:t})}const hT=()=>y.jsx(_i,{title:"Skills",children:y.jsxs("div",{className:"flex flex-col items-center mb-12 space-y-12",children:[y.jsx(wn,{children:y.jsx(un,{className:"sm:px-8",children:y.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-8",children:[y.jsx("div",{className:"relative w-40 h-40 sm:w-48 sm:h-48",children:y.jsx(fT,{})}),y.jsx(ar,{title:"3D Rendering",description:"Expertise in creating interactive 3D graphics using various technologies.",skills:["OpenGL","WebGL","Three.js","Babylon.js"],hoverEffect:!1})]})})}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[y.jsx(ar,{title:"Frontend & UI Development",description:"Creating intuitive and responsive user interfaces.",skills:["React.js","Next.js","HTML","CSS","JavaScript","TypeScript","Tailwind CSS"]}),y.jsx(ar,{title:"Problem Solving & Algorithms",description:"Strong analytical skills for solving complex problems.",skills:["Algorithms","Data Structures","Problem Solving","Rapid Learning"]}),y.jsx(ar,{title:"Design Patterns & Architecture",description:"Understanding of software design patterns and architecture.",skills:["Object-Oriented Programming (OOP)","System Design","UML","Software Design Patterns"]}),y.jsx(ar,{title:"Backend Development",description:"Proficiency in server-side development and building scalable backends.",skills:["Laravel","Django","MySQL","WordPress"]}),y.jsx(ar,{title:"Version Control & Collaboration",description:"Skills in version control systems and collaborative development.",skills:["Git","Teamwork"]}),y.jsx(ar,{title:"Programming Languages",description:"Experience in a variety of programming languages.",skills:["PHP","C++","C","C#","Java","Python"]})]})]})}),ar=({title:t,description:e,skills:n,hoverEffect:i=!0})=>y.jsx("div",{children:y.jsx(Tl,{children:y.jsxs(un,{hoverEffect:i,children:[y.jsx("h4",{className:"text-xl font-bold mb-2 text-white",children:t}),y.jsx("p",{className:"mb-4 text-white",children:e}),y.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>y.jsx("div",{className:"flex-grow",children:y.jsx(wn,{children:y.jsx("div",{className:"text-center text-primary-800 bg-white rounded-xl p-[6px] font-[800]",children:r},s)})},s))})]})})}),pT=()=>y.jsxs(_i,{title:"Experience",children:[y.jsxs("div",{className:"hidden md:flex gap-8 justify-between text-left",children:[y.jsxs("div",{className:"space-y-[12rem]",children:[qp,Zp]}),y.jsxs("div",{className:"space-y-[15rem] mt-[11rem]",children:[Kp,Qp]})]}),y.jsxs("div",{className:"md:hidden space-y-8",children:[qp,Kp,Zp,Qp]})]}),qp=y.jsxs("div",{className:"relative",children:[y.jsx(wn,{children:y.jsx("div",{className:"hidden md:block absolute top-20 left-full w-[75%] h-32 border-t-4 border-r-4 border-primary-500 border-dashed rounded-tr-[40px]"})}),y.jsx(Ro,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Freelance Web Developer"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"08/2024 – Present"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Eyes360, Cairo, Egypt (Remote)"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:[y.jsx("li",{className:"custom-bullet",children:"Working on WebGL projects, integrating 3D rendering into web applications."}),y.jsx("li",{className:"custom-bullet",children:"Delivering optimized, interactive frontend solutions."})]})]})})]}),Kp=y.jsxs("div",{className:"relative",children:[y.jsx(wn,{children:y.jsx("div",{className:"hidden md:block absolute right-full top-44 lg:top-24 w-[75%] h-32 border-t-4 border-l-4 border-primary-500 border-dashed rounded-tl-[40px]"})}),y.jsx(Vl,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Front-End Web Developer"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"02/2024 – 09/2024"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Divcodes, Beirut, Lebanon (Remote)"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:[y.jsx("li",{className:"custom-bullet",children:"Worked in Front-End Development using React, Next.js, and TypeScript."}),y.jsx("li",{className:"custom-bullet",children:"Involved in 2 projects, enhancing React development skills."}),y.jsx("li",{className:"custom-bullet",children:"Utilized RESTful APIs in both projects and integrated Next.js."})]})]})})]}),Zp=y.jsx("div",{className:"relative z-10",children:y.jsx(Ro,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Full-Stack Web Developer"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"09/2022 – 02/2024"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Aratech, Dubai, UAE (Remote)"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:[y.jsx("li",{className:"custom-bullet",children:"Gained 1.5 years of experience in Laravel and MVC architecture."}),y.jsx("li",{className:"custom-bullet",children:"Worked on 10+ projects using HTML, CSS, JavaScript."}),y.jsx("li",{className:"custom-bullet",children:"Developed 5+ projects using PHP, Laravel Framework, Tailwind, and jQuery."}),y.jsx("li",{className:"custom-bullet",children:"Contributed to 2 projects using Laravel Nova and Google Map API."}),y.jsx("li",{className:"custom-bullet",children:"Worked on 5 WordPress projects."})]})]})})}),Qp=y.jsxs("div",{className:"relative",children:[y.jsx(wn,{children:y.jsx("div",{className:"hidden md:block absolute right-full top-20 lg:top-0 w-[75%] h-32 border-b-4 border-l-4 border-primary-500 border-dashed rounded-bl-[40px]"})}),y.jsx(Vl,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"ICPC Contestant - Problem Setter - Coach"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2021"})]}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:[y.jsx("li",{className:"custom-bullet",children:"Regional Contestant in ACPC 2021."}),y.jsx("li",{className:"custom-bullet",children:"Silver medal in the SCPC 2021."}),y.jsx("li",{className:"custom-bullet",children:"Golden medal in the Girls ACPC 2020."}),y.jsx("li",{className:"custom-bullet",children:"Problem Setter at SCPC 2020."}),y.jsx("li",{className:"custom-bullet",children:"Expert rank on Codeforces website."})]})]})})]});function ev({name:t,company:e,description:n,skills:i,videoURL:r}){return console.log(i),y.jsx(un,{children:y.jsxs("div",{className:"flex flex-col justify-between h-full",children:[y.jsxs("div",{className:"text-center mb-4",children:[t&&y.jsx("h3",{className:"text-xl font-semibold",children:t}),e&&y.jsxs("p",{children:["(",e,")"]}),n&&y.jsx("p",{className:"mt-2 space-y-1 text-base text-left",children:n}),i&&y.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:i.map((s,a)=>y.jsx("div",{className:"flex-grow",children:y.jsx(wn,{children:y.jsx("div",{className:`text-center text-primary-800 rounded-xl p-[6px] font-[800] ${s.isSelected?"bg-white":"bg-gray-400"}`,children:s.name},a)})},a))})]}),r&&y.jsx("iframe",{className:"w-full h-[19rem] rounded-xl",src:r,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})})}function mT(){const t=[9,3,2,1,7,10,8,6,5,4],e=[{id:1,name:"Personal OpenGL Project",company:"personal",description:"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",videoURL:"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",order:{date:1,interest:0},skills:["OpenGL","C++"]},{id:2,name:"University 4th-year Project",company:"university",description:"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",videoURL:"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",order:{date:2,interest:0},skills:["WebGL","Laravel"]},{id:3,name:"University 5th-year Project",company:"university",description:"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",videoURL:"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",order:{date:3,interest:0},skills:["Three.js","Laravel"]},{id:4,name:"Other Projects / WordPress",company:"aratech",description:"Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",videoURL:"https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",order:{date:4,interest:0},skills:["WordPress"]},{id:5,name:"IDB",company:"aratech",description:"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",videoURL:"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",order:{date:5,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:6,name:"E-buy",company:"aratech",description:"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",videoURL:"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",order:{date:6,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:7,name:"Qahwah House",company:"DivCodes",description:"Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",videoURL:"https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",order:{date:7,interest:0},skills:["React","Next.js","Tailwind"]},{id:8,name:"DIVPOS",company:"DivCodes",description:"Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",videoURL:"https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",order:{date:8,interest:0},skills:["React","Next.js","Tailwind"]},{id:9,name:"Sunglasses Try On",company:"Eyes 360",description:"Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",videoURL:"https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",order:{date:9,interest:0},skills:["WebGL","Babylon.js","Svelte"]},{id:10,name:"EuNet",company:"Stark Technologies",description:"A web hosting website available in two languages. It features an AI-powered chatbot for 24/7 assistance. The site is built using React and Next.js. It includes visually appealing reusable components that present information clearly with an attractive design, along with well-designed forms for user onboarding.",videoURL:"https://www.youtube.com/embed/nzy92nlbBI4?si=UsvvuLTts9lZfaAE",order:{date:10,interest:0},skills:["React","Next.js","Tailwind"]}];t.forEach((i,r)=>{const s=e.find(a=>a.id===i);s&&(s.order.interest=r+1)});const n=new Set;return e.forEach(i=>{i.skills.forEach(r=>{n.add(r)})}),{projects:e,projectsSkills:n}}function Jp(){const[t,e]=nt.useState(!1);return y.jsx("div",{className:"relative",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:y.jsx("svg",{className:`fill-current ${t?"text-pumpkin-600":"text-pumpkin-700"}`,width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"})})})}function em(){return y.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M4.89163 13.2687L9.16582 17.5427L18.7085 8",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const{projects:gT,projectsSkills:lr}=mT();function vT(){const[t,e]=nt.useState("Latest"),[n,i]=nt.useState(!1),[r,s]=nt.useState(new Set(lr)),a=[...gT].filter(l=>l.skills.some(u=>r.has(u))).sort((l,u)=>t==="Latest"?u.order.date-l.order.date:t==="Most Interesting"?l.order.interest-u.order.interest:t==="Oldest"?l.order.date-u.order.date:0),o=l=>{s(u=>{const f=new Set(u);return f.has(l)?f.delete(l):f.add(l),f})},c=()=>{r.size===lr.size?s(new Set):s(new Set(lr))};return y.jsxs(_i,{title:"Projects",children:[y.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Latest"),className:`px-4 py-2 text-white ${t==="Latest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded`,children:"Latest"})}),y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Most Interesting"),className:`px-4 py-2 text-white ${t==="Most Interesting"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded`,children:"Most Interesting"})}),y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Oldest"),className:`px-4 py-2 text-white ${t==="Oldest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded`,children:"Oldest"})}),y.jsx("button",{className:"lg:hidden",onClick:()=>i(!n),children:y.jsx(Jp,{})})]}),y.jsxs("div",{className:"lg:ml-8 flex-grow justify-items-start lg:w-[30rem]",children:[y.jsx("button",{className:"hidden lg:block",onClick:()=>i(!n),children:y.jsx(Jp,{})}),y.jsx("div",{className:`lg:mt-4 transition-all duration-300 ease-in-out ${n?"max-h-[5000px] opacity-100":"max-h-0 opacity-0"} overflow-hidden`,children:y.jsxs("div",{children:[y.jsxs("label",{className:"flex items-center space-x-2 text-lg font-bold mb-2 cursor-pointer",children:[y.jsx("input",{type:"checkbox",checked:r.size===lr.size,onChange:c,className:"hidden"}),y.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.size===lr.size?"bg-pumpkin":"bg-none"}`,children:r.size===lr.size&&y.jsx(em,{})}),y.jsx("span",{children:"Select All"})]}),y.jsx("div",{className:"flex flex-wrap gap-x-8 mt-4",children:[...lr].map(l=>y.jsxs("label",{className:"w-32 flex items-center space-x-2 mb-2 cursor-pointer",children:[y.jsx("input",{type:"checkbox",checked:r.has(l),onChange:()=>o(l),className:"hidden"}),y.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.has(l)?"bg-pumpkin":"bg-none"}`,children:r.has(l)&&y.jsx(em,{})}),y.jsx("span",{children:l})]},l))})]})})]})]}),y.jsx("div",{className:"grid lg:grid-cols-2 gap-8",children:a.map((l,u)=>y.jsx(ev,{name:l.name,company:l.company,description:l.description,skills:l.skills.map(f=>({name:f,isSelected:r.has(f)})),videoURL:l.videoURL},u))})]})}function _T({children:t,isOpen:e,close:n}){return e?y.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50",onClick:n,children:y.jsxs("div",{className:"bg-secondary-500 p-8 rounded-2xl relative",onClick:i=>{i.stopPropagation()},children:[y.jsx("button",{onClick:n,className:"absolute top-2 right-2 text-2xl font-bold text-pumpkin-500 hover:text-pumpkin-600",children:"✕"}),t]})}):null}function Et({src:t,title:e,description:n}){const[i,r]=nt.useState(!1),s=()=>{r(!0)},a=()=>{r(!1)};return y.jsxs(y.Fragment,{children:[y.jsx(_T,{isOpen:i,close:a,children:y.jsxs("div",{className:"w-[48rem] h-[30rem] flex flex-col justify-between items-center",children:[y.jsx("a",{className:"text-pumpkin-500 hover:text-pumpkin-600 text-lg underline",href:t,target:"_blank",children:"full-size image"}),y.jsx(Ts,{className:"max-w-full h-[95%] max-h-[95%] object-contain",src:t,alt:e})]})}),y.jsx("div",{className:"cursor-pointer w-52",onClick:s,children:y.jsx(Tl,{children:y.jsxs(un,{children:[y.jsx("div",{className:"font-bold text-base",children:e}),y.jsx("div",{children:n}),y.jsx(Ts,{className:"w-full h-56 object-cover mt-4 rounded-lg",src:t,alt:e})]})})})]})}const xT=()=>y.jsx(_i,{title:"Education",children:y.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-x-12 gap-y-6",children:[y.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[y.jsx(Et,{src:"certificates/Graduation Certificate.jpg",title:"Graduation Certificate"}),y.jsx(Et,{src:"certificates/Bachelor's Degree.jpg",title:"Bachelor's Degree"})]}),y.jsx(un,{className:"p-8",children:y.jsxs("div",{className:"text-left",children:[y.jsxs("div",{className:"flex flex-wrap gap-8 justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Bachelor of Software Engineering"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2022"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Tishreen University, Latakia, Syria"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{children:"Valedictorian with an average of 92.08%"}),y.jsx("li",{children:"GPA: 3.50/4.0"})]})]})})]})});function yT(){const{theme:t}=Zi();return y.jsxs(_i,{glow:!1,title:"Certificates",children:[y.jsx(wn,{children:y.jsx("div",{className:`${t=="light"?"":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-8 rounded-[3rem]`,children:y.jsxs("div",{children:[y.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Al-Basel Certificates for Academic Excellence"}),y.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4",children:tm}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-8",children:tm})]})})}),y.jsx(wn,{children:y.jsx("div",{className:`${t=="light"?"":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-8 rounded-[3rem] mt-16`,children:y.jsxs("div",{children:[y.jsx("div",{className:"text-3xl font-semibold mb-6",children:"International Collegiate Programming Contest Certificates"}),y.jsxs("div",{className:"flex flex-col gap-12",children:[y.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between gap-12",children:[y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-8 rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2018 International Collegiate Programming Contest"}),y.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:ST})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-8 rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2019 International Collegiate Programming Contest"}),y.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:MT})]})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-8 rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2020 Africa and Arab Collegiate Programming Contest for GIRLS"}),y.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:nm}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-8",children:nm})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-8 rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2022 International Collegiate Programming Contest"}),y.jsxs("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:[y.jsx("div",{}),im]}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-8",children:im})]})]})]})})})]})}const tm=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/Al-Basel Certificate - 1st year.jpg",title:"2017 / 2018"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 2nd year.jpg",title:"2018 / 2019"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 3rd year.jpg",title:"2019 / 2020"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 4th year.jpg",title:"2020 / 2021"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 5th year.jpg",title:"2021 / 2022"})]}),ST=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2018 - TCPC - Fifty Eighth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2018 - SCPC - Sixteenth Place.jpg",title:"SCPC: Syrian"})]}),MT=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2019 - TCPC - Eighteenth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2019 - SCPC - Eighth Place.jpg",title:"SCPC: Syrian"})]}),nm=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Fourth Place.jpg",title:"Fourth Place"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Extreme Programmers.jpg",title:"Extreme Programmers"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Solid Programmers.jpg",title:"Solid Programmers"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Steadfast Gurus.jpg",title:"Steadfast Gurus"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - First to solve problem A.jpg",title:"First to solve problem A"})]}),im=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2022 - TCPC - Fourth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2022 - SCPC - Seventh Place.jpg",title:"SCPC: Syrian"}),y.jsx(Et,{src:"certificates/ICPC 2022 - ACPC - Fifty Seventh Place.jpg",title:"ACPC: Arabic"})]}),ET=()=>y.jsx(_i,{title:"Achievements",children:y.jsxs("div",{className:"max-w-4xl mx-auto text-left space-y-6",children:[y.jsx(Ro,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Prime Candidate: Noon’s Next Software Engineer"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2023"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Dubai, UAE"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{className:"custom-bullet",children:"Completed a rigorous hiring process with noon, a leading e-commerce company."}),y.jsx("li",{className:"custom-bullet",children:"Solved 14 out of 16 problems in a problem-solving test and succeeded in 3 interviews."}),y.jsx("li",{className:"custom-bullet",children:"Enhanced knowledge in e-commerce, databases, and systems through 4+ months of training."}),y.jsx("li",{className:"custom-bullet",children:"Solved 30+ SQL problems on LeetCode and 15+ on HackerRank."})]})]})}),y.jsx(Vl,{children:y.jsxs(un,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Expert Ranking on Codeforces"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2021"})]}),y.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:y.jsx("li",{className:"custom-bullet",children:"Demonstrated expertise in solving algorithmic problems using data structures."})})]})}),y.jsx(Ro,{children:y.jsxs(un,{className:"p-8",children:[y.jsx("div",{className:"flex justify-between items-center",children:y.jsx("h3",{className:"text-xl font-semibold",children:"Top ICPC Medals:"})}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{className:"custom-bullet",children:"Gold Medalist, ACPC for Girls (2020)"}),y.jsx("li",{className:"custom-bullet",children:"Silver Medal, SCPC (2021)"})]})]})})]})});function wT(){const t=[{language:"Arabic",proficiency:"Native",prof_desc:null},{language:"English",proficiency:"C1 Level",prof_desc:"Full working proficiency"},{language:"Spanish",proficiency:"B1 Level",prof_desc:"Limited working proficiency"}];return y.jsxs(_i,{title:"Languages",children:[y.jsx(Tl,{children:y.jsx("div",{className:"max-w-[40rem] mx-auto",children:y.jsx(un,{children:y.jsx("div",{className:"px-8",children:t.map((e,n)=>y.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center py-3",children:[y.jsx("h3",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200",children:e.language}),y.jsxs("span",{className:"hidden sm:block text-xl text-white",children:[e.prof_desc&&y.jsx("span",{className:"mr-4 text-sm text-pumpkin-200 italic",children:e.prof_desc}),e.proficiency]}),y.jsx("div",{className:"sm:hidden text-sm text-pumpkin-200 italic",children:e.prof_desc}),y.jsx("div",{className:"sm:hidden text-xl text-white",children:e.proficiency})]},n))})})})}),y.jsx(Tl,{children:y.jsx("iframe",{className:"max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105",src:"https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})]})}function TT(){return y.jsx(_i,{title:"Fun Facts",children:y.jsx("div",{className:"max-w-[40rem] mx-auto",children:y.jsx(ev,{description:"In 2019, I created a problem and solved it in my sleep—literally! While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious. Take a look inside my brain through this video:",videoURL:"https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku"})})})}const AT=(t=10)=>Array.from({length:t},(e,n)=>({id:n,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,size:`${Math.random()*30+10}rem`,opacity:Math.random()*.1+.2,color:Math.random()>.5?"bg-primary":"bg-pumpkin"})),CT=()=>{const{theme:t}=Zi(),e=nt.useMemo(()=>AT(100),[]);return y.jsxs("div",{className:`relative overflow-hidden bg-secondary-800 ${t=="light"?"text-black":"text-white"}`,children:[t=="light"&&e.map(({id:n,left:i,top:r,size:s,opacity:a,color:o})=>y.jsx("div",{style:{left:i,top:r,width:s,height:s,opacity:a},className:`absolute rounded-full blur-3xl ${o}`},n)),y.jsxs("div",{className:"relative z-10",children:[y.jsx(Ux,{}),y.jsx("section",{id:"home",children:y.jsx(jx,{})}),y.jsxs(_0,{children:[y.jsx("section",{id:"about",children:y.jsx($x,{})}),y.jsx("section",{id:"skills",children:y.jsx(hT,{})}),y.jsx("section",{id:"experience",children:y.jsx(pT,{})}),y.jsx("section",{id:"projects",children:y.jsx(vT,{})}),y.jsx("section",{id:"education",children:y.jsx(xT,{})}),y.jsx("section",{id:"certificates",children:y.jsx(yT,{})}),y.jsx("section",{id:"achievements",children:y.jsx(ET,{})}),y.jsx("section",{id:"fun-facts",children:y.jsx(TT,{})}),y.jsx("section",{id:"languages",children:y.jsx(wT,{})})]}),y.jsx(Ts,{className:"w-full h-40",src:"images/wave.png"})]})]})};g0(document.getElementById("root")).render(y.jsx(nt.StrictMode,{children:y.jsx(Dx,{children:y.jsx(CT,{})})}));
