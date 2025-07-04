(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var N_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var og={exports:{}},ac={},ag={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),I_=Symbol.for("react.portal"),U_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),B_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),V_=Symbol.for("react.memo"),G_=Symbol.for("react.lazy"),Oh=Symbol.iterator;function j_(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cg=Object.assign,ug={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=ug,this.updater=n||lg}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dg(){}dg.prototype=Xs.prototype;function vf(t,e,n){this.props=t,this.context=e,this.refs=ug,this.updater=n||lg}var _f=vf.prototype=new dg;_f.constructor=vf;cg(_f,Xs.prototype);_f.isPureReactComponent=!0;var kh=Array.isArray,fg=Object.prototype.hasOwnProperty,xf={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)fg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),l=0;l<o;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Jo,type:t,key:s,ref:a,props:r,_owner:xf.current}}function W_(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Jo:case I_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ic(a,0):i,kh(r)?(n="",t!=null&&(n=t.replace(zh,"$&/")+"/"),sl(r,e,n,"",function(l){return l})):r!=null&&(yf(r)&&(r=W_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(zh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",kh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Ic(s,o);a+=sl(s,e,n,c,r)}else if(c=j_(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Ic(s,o++),a+=sl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function va(t,e,n){if(t==null)return t;var i=[],r=0;return sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},ol={transition:null},Y_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:ol,ReactCurrentOwner:xf};function mg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Xs;He.Fragment=U_;He.Profiler=O_;He.PureComponent=vf;He.StrictMode=F_;He.Suspense=H_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_;He.act=mg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=cg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)fg.call(e,c)&&!hg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var l=0;l<c;l++)o[l]=arguments[l+2];i.children=o}return{$$typeof:Jo,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:k_,_context:t},t.Consumer=t};He.createElement=pg;He.createFactory=function(t){var e=pg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:B_,render:t}};He.isValidElement=yf;He.lazy=function(t){return{$$typeof:G_,_payload:{_status:-1,_result:t},_init:$_}};He.memo=function(t,e){return{$$typeof:V_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};He.unstable_act=mg;He.useCallback=function(t,e){return Yt.current.useCallback(t,e)};He.useContext=function(t){return Yt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Yt.current.useEffect(t,e)};He.useId=function(){return Yt.current.useId()};He.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Yt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};He.useRef=function(t){return Yt.current.useRef(t)};He.useState=function(t){return Yt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Yt.current.useTransition()};He.version="18.3.1";ag.exports=He;var z=ag.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=z,K_=Symbol.for("react.element"),Z_=Symbol.for("react.fragment"),Q_=Object.prototype.hasOwnProperty,J_=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ex={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Q_.call(e,i)&&!ex.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:K_,type:t,key:s,ref:a,props:r,_owner:J_.current}}ac.Fragment=Z_;ac.jsx=gg;ac.jsxs=gg;og.exports=ac;var y=og.exports,vg={exports:{}},hn={},_g={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,V){var H=I.length;I.push(V);e:for(;0<H;){var Z=H-1>>>1,se=I[Z];if(0<r(se,V))I[Z]=V,I[H]=se,H=Z;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var V=I[0],H=I.pop();if(H!==V){I[0]=H;e:for(var Z=0,se=I.length,De=se>>>1;Z<De;){var P=2*(Z+1)-1,oe=I[P],K=P+1,re=I[K];if(0>r(oe,H))K<se&&0>r(re,oe)?(I[Z]=re,I[K]=H,Z=K):(I[Z]=oe,I[P]=H,Z=P);else if(K<se&&0>r(re,H))I[Z]=re,I[K]=H,Z=K;else break e}}return V}function r(I,V){var H=I.sortIndex-V.sortIndex;return H!==0?H:I.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],l=[],u=1,d=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var V=n(l);V!==null;){if(V.callback===null)i(l);else if(V.startTime<=I)i(l),V.sortIndex=V.expirationTime,e(c,V);else break;V=n(l)}}function S(I){if(x=!1,_(I),!v)if(n(c)!==null)v=!0,G(b);else{var V=n(l);V!==null&&Q(S,V.startTime-I)}}function b(I,V){v=!1,x&&(x=!1,h(L),L=-1),p=!0;var H=f;try{for(_(V),d=n(c);d!==null&&(!(d.expirationTime>V)||I&&!R());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var se=Z(d.expirationTime<=V);V=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(c)&&i(c),_(V)}else i(c);d=n(c)}if(d!==null)var De=!0;else{var P=n(l);P!==null&&Q(S,P.startTime-V),De=!1}return De}finally{d=null,f=H,p=!1}}var A=!1,C=null,L=-1,w=5,M=-1;function R(){return!(t.unstable_now()-M<w)}function B(){if(C!==null){var I=t.unstable_now();M=I;var V=!0;try{V=C(!0,I)}finally{V?k():(A=!1,C=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(B)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=B,k=function(){q.postMessage(null)}}else k=function(){m(B,0)};function G(I){C=I,A||(A=!0,k())}function Q(I,V){L=m(function(){I(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var H=f;f=V;try{return I()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,V){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=f;f=I;try{return V()}finally{f=H}},t.unstable_scheduleCallback=function(I,V,H){var Z=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Z+H:Z):H=Z,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=H+se,I={id:u++,callback:V,priorityLevel:I,startTime:H,expirationTime:se,sortIndex:-1},H>Z?(I.sortIndex=H,e(l,I),n(c)===null&&I===n(l)&&(x?(h(L),L=-1):x=!0,Q(S,H-Z))):(I.sortIndex=se,e(c,I),v||p||(v=!0,G(b))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var V=f;return function(){var H=f;f=V;try{return I.apply(this,arguments)}finally{f=H}}}})(xg);_g.exports=xg;var tx=_g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=z,fn=tx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,No={};function Gr(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(No[t]=e,t=0;t<e.length;t++)yg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,ix=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bh={},Hh={};function rx(t){return ku.call(Hh,t)?!0:ku.call(Bh,t)?!1:ix.test(t)?Hh[t]=!0:(Bh[t]=!0,!1)}function sx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ox(t,e,n,i){if(e===null||typeof e>"u"||sx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sf,Mf);Ut[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sf,Mf);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sf,Mf);Ut[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ox(e,n,r,i)&&(n=null),i||r===null?rx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Sg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),Vh=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Uc;function go(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function ax(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case zu:return"Profiler";case wf:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Sg:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Af:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function lx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cx(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=cx(t))}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ag(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function ju(t,e){Ag(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(vo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Cg(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,Rg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ux=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){ux.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function Pg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function Lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Pg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var dx=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,As=null,Cs=null;function $h(t){if(t=na(t)){if(typeof Zu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=fc(e),Zu(t.stateNode,t.type,e))}}function Ng(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function Dg(){if(As){var t=As,e=Cs;if(Cs=As=null,$h(t),e)for(t=0;t<e.length;t++)$h(e[t])}}function Ig(t,e){return t(e)}function Ug(){}var kc=!1;function Fg(t,e,n){if(kc)return t(e,n);kc=!0;try{return Ig(t,e,n)}finally{kc=!1,(As!==null||Cs!==null)&&(Ug(),Dg())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Qu=!1;if(Si)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Qu=!1}function fx(t,e,n,i,r,s,a,o,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(u){this.onError(u)}}var Mo=!1,Cl=null,bl=!1,Ju=null,hx={onError:function(t){Mo=!0,Cl=t}};function px(t,e,n,i,r,s,a,o,c){Mo=!1,Cl=null,fx.apply(hx,arguments)}function mx(t,e,n,i,r,s,a,o,c){if(px.apply(this,arguments),Mo){if(Mo){var l=Cl;Mo=!1,Cl=null}else throw Error(ae(198));bl||(bl=!0,Ju=l)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(jr(t)!==t)throw Error(ae(188))}function gx(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yh(r),t;if(s===i)return Yh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function kg(t){return t=gx(t),t!==null?zg(t):null}function zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zg(t);if(e!==null)return e;t=t.sibling}return null}var Bg=fn.unstable_scheduleCallback,qh=fn.unstable_cancelCallback,vx=fn.unstable_shouldYield,_x=fn.unstable_requestPaint,gt=fn.unstable_now,xx=fn.unstable_getCurrentPriorityLevel,bf=fn.unstable_ImmediatePriority,Hg=fn.unstable_UserBlockingPriority,Rl=fn.unstable_NormalPriority,yx=fn.unstable_LowPriority,Vg=fn.unstable_IdlePriority,lc=null,qn=null;function Sx(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:wx,Mx=Math.log,Ex=Math.LN2;function wx(t){return t>>>=0,t===0?32:31-(Mx(t)/Ex|0)|0}var Sa=64,Ma=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=_o(o):(s&=a,s!==0&&(i=_o(s)))}else a=n&~r,a!==0?i=_o(a):s!==0&&(i=_o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function Tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Tx(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function Cx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function jg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wg,Pf,Xg,$g,Yg,td=!1,Ea=[],Xi=null,$i=null,Yi=null,Uo=new Map,Fo=new Map,Bi=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=na(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Rx(t,e,n,i,r){switch(e){case"focusin":return Xi=to(Xi,t,e,n,i,r),!0;case"dragenter":return $i=to($i,t,e,n,i,r),!0;case"mouseover":return Yi=to(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,to(Uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fo.set(s,to(Fo.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=br(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,Yg(t.priority,function(){Xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=na(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function Zh(t,e,n){al(t)&&n.delete(e)}function Px(){td=!1,Xi!==null&&al(Xi)&&(Xi=null),$i!==null&&al($i)&&($i=null),Yi!==null&&al(Yi)&&(Yi=null),Uo.forEach(Zh),Fo.forEach(Zh)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,Px)))}function Oo(t){function e(r){return no(r,t)}if(0<Ea.length){no(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&no(Xi,t),$i!==null&&no($i,t),Yi!==null&&no(Yi,t),Uo.forEach(e),Fo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&Bi.shift()}var bs=bi.ReactCurrentBatchConfig,Ll=!0;function Lx(t,e,n,i){var r=et,s=bs.transition;bs.transition=null;try{et=1,Lf(t,e,n,i)}finally{et=r,bs.transition=s}}function Nx(t,e,n,i){var r=et,s=bs.transition;bs.transition=null;try{et=4,Lf(t,e,n,i)}finally{et=r,bs.transition=s}}function Lf(t,e,n,i){if(Ll){var r=nd(t,e,n,i);if(r===null)qc(t,e,i,Nl,n),Kh(t,i);else if(Rx(r,t,e,n,i))i.stopPropagation();else if(Kh(t,i),e&4&&-1<bx.indexOf(t)){for(;r!==null;){var s=na(r);if(s!==null&&Wg(s),s=nd(t,e,n,i),s===null&&qc(t,e,i,Nl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Nl=null;function nd(t,e,n,i){if(Nl=null,t=Cf(i),t=br(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function Kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xx()){case bf:return 1;case Hg:return 4;case Rl:case yx:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var ji=null,Nf=null,ll=null;function Zg(){if(ll)return ll;var t,e=Nf,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ll=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function Qh(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:Qh,this.isPropagationStopped=Qh,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=pn($s),ta=dt({},$s,{view:0,detail:0}),Dx=pn(ta),Bc,Hc,io,cc=dt({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Bc=t.screenX-io.screenX,Hc=t.screenY-io.screenY):Hc=Bc=0,io=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Jh=pn(cc),Ix=dt({},cc,{dataTransfer:0}),Ux=pn(Ix),Fx=dt({},ta,{relatedTarget:0}),Vc=pn(Fx),Ox=dt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=pn(Ox),zx=dt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=pn(zx),Hx=dt({},$s,{data:0}),ep=pn(Hx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jx[t])?!!e[t]:!1}function If(){return Wx}var Xx=dt({},ta,{key:function(t){if(t.key){var e=Vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=pn(Xx),Yx=dt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=pn(Yx),qx=dt({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),Kx=pn(qx),Zx=dt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qx=pn(Zx),Jx=dt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ey=pn(Jx),ty=[9,13,27,32],Uf=Si&&"CompositionEvent"in window,Eo=null;Si&&"documentMode"in document&&(Eo=document.documentMode);var ny=Si&&"TextEvent"in window&&!Eo,Qg=Si&&(!Uf||Eo&&8<Eo&&11>=Eo),np=" ",ip=!1;function Jg(t,e){switch(t){case"keyup":return ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function iy(t,e){switch(t){case"compositionend":return e0(e);case"keypress":return e.which!==32?null:(ip=!0,np);case"textInput":return t=e.data,t===np&&ip?null:t;default:return null}}function ry(t,e){if(ps)return t==="compositionend"||!Uf&&Jg(t,e)?(t=Zg(),ll=Nf=ji=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qg&&e.locale!=="ko"?null:e.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sy[t.type]:e==="textarea"}function t0(t,e,n,i){Ng(i),e=Dl(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wo=null,ko=null;function oy(t){f0(t,0)}function uc(t){var e=vs(t);if(Tg(e))return t}function ay(t,e){if(t==="change")return e}var n0=!1;if(Si){var Gc;if(Si){var jc="oninput"in document;if(!jc){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),jc=typeof sp.oninput=="function"}Gc=jc}else Gc=!1;n0=Gc&&(!document.documentMode||9<document.documentMode)}function op(){wo&&(wo.detachEvent("onpropertychange",i0),ko=wo=null)}function i0(t){if(t.propertyName==="value"&&uc(ko)){var e=[];t0(e,ko,t,Cf(t)),Fg(oy,e)}}function ly(t,e,n){t==="focusin"?(op(),wo=e,ko=n,wo.attachEvent("onpropertychange",i0)):t==="focusout"&&op()}function cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(ko)}function uy(t,e){if(t==="click")return uc(e)}function dy(t,e){if(t==="input"||t==="change")return uc(e)}function fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:fy;function zo(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,e){var n=ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ap(n)}}function r0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hy(t){var e=s0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r0(n.ownerDocument.documentElement,n)){if(i!==null&&Ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=lp(n,s);var a=lp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var py=Si&&"documentMode"in document&&11>=document.documentMode,ms=null,id=null,To=null,rd=!1;function cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||ms==null||ms!==Al(i)||(i=ms,"selectionStart"in i&&Ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),To&&zo(To,i)||(To=i,i=Dl(id,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Wc={},o0={};Si&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function dc(t){if(Wc[t])return Wc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o0)return Wc[t]=e[n];return t}var a0=dc("animationend"),l0=dc("animationiteration"),c0=dc("animationstart"),u0=dc("transitionend"),d0=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){d0.set(t,e),Gr(e,[t])}for(var Xc=0;Xc<up.length;Xc++){var $c=up[Xc],my=$c.toLowerCase(),gy=$c[0].toUpperCase()+$c.slice(1);or(my,"on"+gy)}or(a0,"onAnimationEnd");or(l0,"onAnimationIteration");or(c0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(u0,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,mx(i,e,void 0,t),t.currentTarget=null}function f0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,l=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;dp(r,o,l),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,l=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;dp(r,o,l),s=c}}}if(bl)throw t=Ju,bl=!1,Ju=null,t}function it(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(h0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),h0(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Aa]){t[Aa]=!0,yg.forEach(function(n){n!=="selectionchange"&&(vy.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,Yc("selectionchange",!1,e))}}function h0(t,e,n,i){switch(Kg(e)){case 1:var r=Lx;break;case 4:r=Nx;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=br(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Fg(function(){var l=s,u=Cf(n),d=[];e:{var f=d0.get(t);if(f!==void 0){var p=Df,v=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":p=$x;break;case"focusin":v="focus",p=Vc;break;case"focusout":v="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Kx;break;case a0:case l0:case c0:p=kx;break;case u0:p=Qx;break;case"scroll":p=Dx;break;case"wheel":p=ey;break;case"copy":case"cut":case"paste":p=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tp}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var g=l,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Io(g,h),S!=null&&x.push(Ho(g,S,_)))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ku&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Mi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=l,v=v?br(v):null,v!==null&&(m=jr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=l),p!==v)){if(x=Jh,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=tp,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:vs(p),_=v==null?f:vs(v),f=new x(S,g+"leave",p,n,u),f.target=m,f.relatedTarget=_,S=null,br(u)===l&&(x=new x(h,g+"enter",v,n,u),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,h=v,g=0,_=x;_;_=Yr(_))g++;for(_=0,S=h;S;S=Yr(S))_++;for(;0<g-_;)x=Yr(x),g--;for(;0<_-g;)h=Yr(h),_--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=Yr(x),h=Yr(h)}x=null}else x=null;p!==null&&fp(d,f,p,x,!1),v!==null&&m!==null&&fp(d,m,v,x,!0)}}e:{if(f=l?vs(l):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=ay;else if(rp(f))if(n0)b=dy;else{b=cy;var A=ly}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=uy);if(b&&(b=b(t,l))){t0(d,b,n,u);break e}A&&A(t,f,l),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Wu(f,"number",f.value)}switch(A=l?vs(l):window,t){case"focusin":(rp(A)||A.contentEditable==="true")&&(ms=A,id=l,To=null);break;case"focusout":To=id=ms=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,cp(d,n,u);break;case"selectionchange":if(py)break;case"keydown":case"keyup":cp(d,n,u)}var C;if(Uf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ps?Jg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Qg&&n.locale!=="ko"&&(ps||L!=="onCompositionStart"?L==="onCompositionEnd"&&ps&&(C=Zg()):(ji=u,Nf="value"in ji?ji.value:ji.textContent,ps=!0)),A=Dl(l,L),0<A.length&&(L=new ep(L,t,null,n,u),d.push({event:L,listeners:A}),C?L.data=C:(C=e0(n),C!==null&&(L.data=C)))),(C=ny?iy(t,n):ry(t,n))&&(l=Dl(l,"onBeforeInput"),0<l.length&&(u=new ep("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:l}),u.data=C))}f0(d,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Io(t,n),s!=null&&i.unshift(Ho(t,s,r)),s=Io(t,e),s!=null&&i.push(Ho(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,l=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&l!==null&&(o=l,r?(c=Io(n,s),c!=null&&a.unshift(Ho(n,c,o))):r||(c=Io(n,s),c!=null&&a.push(Ho(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var _y=/\r\n?/g,xy=/\u0000|\uFFFD/g;function hp(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(xy,"")}function Ca(t,e,n){if(e=hp(e),hp(t)!==e&&n)throw Error(ae(425))}function Il(){}var sd=null,od=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(My)}:ld;function My(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oo(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ys,Vo="__reactProps$"+Ys,Mi="__reactContainer$"+Ys,cd="__reactEvents$"+Ys,Ey="__reactListeners$"+Ys,wy="__reactHandles$"+Ys;function br(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mp(t);t!==null;){if(n=t[Xn])return n;t=mp(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[Xn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function fc(t){return t[Vo]||null}var ud=[],_s=-1;function ar(t){return{current:t}}function st(t){0>_s||(t.current=ud[_s],ud[_s]=null,_s--)}function nt(t,e){_s++,ud[_s]=t.current,t.current=e}var ir={},Gt=ar(ir),en=ar(!1),Fr=ir;function Us(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Ul(){st(en),st(Gt)}function gp(t,e,n){if(Gt.current!==ir)throw Error(ae(168));nt(Gt,e),nt(en,n)}function p0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,lx(t)||"Unknown",r));return dt({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Fr=Gt.current,nt(Gt,t),nt(en,en.current),!0}function vp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=p0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,st(en),st(Gt),nt(Gt,t)):st(en),nt(en,n)}var hi=null,hc=!1,Zc=!1;function m0(t){hi===null?hi=[t]:hi.push(t)}function Ty(t){hc=!0,m0(t)}function lr(){if(!Zc&&hi!==null){Zc=!0;var t=0,e=et;try{var n=hi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,hc=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),Bg(bf,lr),r}finally{et=e,Zc=!1}}return null}var xs=[],ys=0,Ol=null,kl=0,vn=[],_n=0,Or=null,mi=1,gi="";function Mr(t,e){xs[ys++]=kl,xs[ys++]=Ol,Ol=t,kl=e}function g0(t,e,n){vn[_n++]=mi,vn[_n++]=gi,vn[_n++]=Or,Or=t;var i=mi;t=gi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-On(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function Of(t){t.return!==null&&(Mr(t,1),g0(t,1,0))}function kf(t){for(;t===Ol;)Ol=xs[--ys],xs[ys]=null,kl=xs[--ys],xs[ys]=null;for(;t===Or;)Or=vn[--_n],vn[_n]=null,gi=vn[--_n],vn[_n]=null,mi=vn[--_n],vn[_n]=null}var dn=null,un=null,ot=!1,In=null;function v0(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(ot){var e=un;if(e){var n=e;if(!_p(t,e)){if(dd(t))throw Error(ae(418));e=qi(n.nextSibling);var i=dn;e&&_p(t,e)?v0(i,n):(t.flags=t.flags&-4097|2,ot=!1,dn=t)}}else{if(dd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ot=!1,dn=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function ba(t){if(t!==dn)return!1;if(!ot)return xp(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=un)){if(dd(t))throw _0(),Error(ae(418));for(;e;)v0(t,e),e=qi(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?qi(t.stateNode.nextSibling):null;return!0}function _0(){for(var t=un;t;)t=qi(t.nextSibling)}function Fs(){un=dn=null,ot=!1}function zf(t){In===null?In=[t]:In.push(t)}var Ay=bi.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function x0(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Ji(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,g,_,S){return g===null||g.tag!==6?(g=ru(_,h.mode,S),g.return=h,g):(g=r(g,_),g.return=h,g)}function c(h,g,_,S){var b=_.type;return b===hs?u(h,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ki&&yp(b)===g.type)?(S=r(g,_.props),S.ref=ro(h,g,_),S.return=h,S):(S=gl(_.type,_.key,_.props,null,h.mode,S),S.ref=ro(h,g,_),S.return=h,S)}function l(h,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=su(_,h.mode,S),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function u(h,g,_,S,b){return g===null||g.tag!==7?(g=Ur(_,h.mode,S,b),g.return=h,g):(g=r(g,_),g.return=h,g)}function d(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ru(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:return _=gl(g.type,g.key,g.props,null,h.mode,_),_.ref=ro(h,null,g),_.return=h,_;case fs:return g=su(g,h.mode,_),g.return=h,g;case ki:var S=g._init;return d(h,S(g._payload),_)}if(vo(g)||Js(g))return g=Ur(g,h.mode,_,null),g.return=h,g;Ra(h,g)}return null}function f(h,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:o(h,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return _.key===b?c(h,g,_,S):null;case fs:return _.key===b?l(h,g,_,S):null;case ki:return b=_._init,f(h,g,b(_._payload),S)}if(vo(_)||Js(_))return b!==null?null:u(h,g,_,S,null);Ra(h,_)}return null}function p(h,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,o(g,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _a:return h=h.get(S.key===null?_:S.key)||null,c(g,h,S,b);case fs:return h=h.get(S.key===null?_:S.key)||null,l(g,h,S,b);case ki:var A=S._init;return p(h,g,_,A(S._payload),b)}if(vo(S)||Js(S))return h=h.get(_)||null,u(g,h,S,b,null);Ra(g,S)}return null}function v(h,g,_,S){for(var b=null,A=null,C=g,L=g=0,w=null;C!==null&&L<_.length;L++){C.index>L?(w=C,C=null):w=C.sibling;var M=f(h,C,_[L],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(h,C),g=s(M,g,L),A===null?b=M:A.sibling=M,A=M,C=w}if(L===_.length)return n(h,C),ot&&Mr(h,L),b;if(C===null){for(;L<_.length;L++)C=d(h,_[L],S),C!==null&&(g=s(C,g,L),A===null?b=C:A.sibling=C,A=C);return ot&&Mr(h,L),b}for(C=i(h,C);L<_.length;L++)w=p(C,h,L,_[L],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?L:w.key),g=s(w,g,L),A===null?b=w:A.sibling=w,A=w);return t&&C.forEach(function(R){return e(h,R)}),ot&&Mr(h,L),b}function x(h,g,_,S){var b=Js(_);if(typeof b!="function")throw Error(ae(150));if(_=b.call(_),_==null)throw Error(ae(151));for(var A=b=null,C=g,L=g=0,w=null,M=_.next();C!==null&&!M.done;L++,M=_.next()){C.index>L?(w=C,C=null):w=C.sibling;var R=f(h,C,M.value,S);if(R===null){C===null&&(C=w);break}t&&C&&R.alternate===null&&e(h,C),g=s(R,g,L),A===null?b=R:A.sibling=R,A=R,C=w}if(M.done)return n(h,C),ot&&Mr(h,L),b;if(C===null){for(;!M.done;L++,M=_.next())M=d(h,M.value,S),M!==null&&(g=s(M,g,L),A===null?b=M:A.sibling=M,A=M);return ot&&Mr(h,L),b}for(C=i(h,C);!M.done;L++,M=_.next())M=p(C,h,L,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?L:M.key),g=s(M,g,L),A===null?b=M:A.sibling=M,A=M);return t&&C.forEach(function(B){return e(h,B)}),ot&&Mr(h,L),b}function m(h,g,_,S){if(typeof _=="object"&&_!==null&&_.type===hs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:e:{for(var b=_.key,A=g;A!==null;){if(A.key===b){if(b=_.type,b===hs){if(A.tag===7){n(h,A.sibling),g=r(A,_.props.children),g.return=h,h=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ki&&yp(b)===A.type){n(h,A.sibling),g=r(A,_.props),g.ref=ro(h,A,_),g.return=h,h=g;break e}n(h,A);break}else e(h,A);A=A.sibling}_.type===hs?(g=Ur(_.props.children,h.mode,S,_.key),g.return=h,h=g):(S=gl(_.type,_.key,_.props,null,h.mode,S),S.ref=ro(h,g,_),S.return=h,h=S)}return a(h);case fs:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=su(_,h.mode,S),g.return=h,h=g}return a(h);case ki:return A=_._init,m(h,g,A(_._payload),S)}if(vo(_))return v(h,g,_,S);if(Js(_))return x(h,g,_,S);Ra(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=ru(_,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return m}var Os=x0(!0),y0=x0(!1),zl=ar(null),Bl=null,Ss=null,Bf=null;function Hf(){Bf=Ss=Bl=null}function Vf(t){var e=zl.current;st(zl),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Bl=t,Bf=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Bl===null)throw Error(ae(308));Ss=t,Bl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Rr=null;function Gf(t){Rr===null?Rr=[t]:Rr.push(t)}function S0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}function Sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,l=c.next;c.next=null,a===null?s=l:a.next=l,a=c;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=l:o.next=l,u.lastBaseUpdate=c))}if(s!==null){var d=r.baseState;a=0,u=l=c=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,x=o;switch(f=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=dt({},d,f);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(c=d),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=d}}function Mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ia={},Kn=ar(ia),Go=ar(ia),jo=ar(ia);function Pr(t){if(t===ia)throw Error(ae(174));return t}function Wf(t,e){switch(nt(jo,e),nt(Go,t),nt(Kn,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$u(e,t)}st(Kn),nt(Kn,e)}function ks(){st(Kn),st(Go),st(jo)}function E0(t){Pr(jo.current);var e=Pr(Kn.current),n=$u(e,t.type);e!==n&&(nt(Go,t),nt(Kn,n))}function Xf(t){Go.current===t&&(st(Kn),st(Go))}var lt=ar(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function $f(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var dl=bi.ReactCurrentDispatcher,Jc=bi.ReactCurrentBatchConfig,kr=0,ct=null,Mt=null,Rt=null,Gl=!1,Ao=!1,Wo=0,Cy=0;function Ft(){throw Error(ae(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,s){if(kr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?Ly:Ny,t=n(i,r),Ao){s=0;do{if(Ao=!1,Wo=0,25<=s)throw Error(ae(301));s+=1,Rt=Mt=null,e.updateQueue=null,dl.current=Dy,t=n(i,r)}while(Ao)}if(dl.current=jl,e=Mt!==null&&Mt.next!==null,kr=0,Rt=Mt=ct=null,Gl=!1,e)throw Error(ae(300));return t}function Kf(){var t=Wo!==0;return Wo=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Tn(){if(Mt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ae(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Xo(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,l=s;do{var u=l.lane;if((kr&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var d={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(o=c=d,a=i):c=c.next=d,ct.lanes|=u,zr|=u}l=l.next}while(l!==null&&l!==s);c===null?a=i:c.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w0(){}function T0(t,e){var n=ct,i=Tn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Zf(b0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,$o(9,C0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ae(349));kr&30||A0(n,e,r)}return r}function A0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C0(t,e,n,i){e.value=n,e.getSnapshot=i,R0(e)&&P0(t)}function b0(t,e,n){return n(function(){R0(e)&&P0(t)})}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function P0(t){var e=Ei(t,1);e!==null&&kn(e,t,1,-1)}function Ep(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Py.bind(null,ct,t),[e.memoizedState,t]}function $o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function L0(){return Tn().memoizedState}function fl(t,e,n,i){var r=Gn();ct.flags|=t,r.memoizedState=$o(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var a=Mt.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=$o(e,n,s,i);return}}ct.flags|=t,r.memoizedState=$o(1|e,n,s,i)}function wp(t,e){return fl(8390656,8,t,e)}function Zf(t,e){return pc(2048,8,t,e)}function N0(t,e){return pc(4,2,t,e)}function D0(t,e){return pc(4,4,t,e)}function I0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U0(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,I0.bind(null,e,t),n)}function Qf(){}function F0(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O0(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k0(t,e,n){return kr&21?(zn(n,e)||(n=Gg(),ct.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function by(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{et=n,Jc.transition=i}}function z0(){return Tn().memoizedState}function Ry(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B0(t))H0(e,n);else if(n=S0(t,e,n,i),n!==null){var r=Xt();kn(n,t,i,r),V0(n,e,i)}}function Py(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B0(t))H0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var c=e.interleaved;c===null?(r.next=r,Gf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=S0(t,e,r,i),n!==null&&(r=Xt(),kn(n,t,i,r),V0(n,e,i))}}function B0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function H0(t,e){Ao=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}var jl={readContext:wn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Ly={readContext:wn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,I0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ry.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:Qf,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=by.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Gn();if(ot){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Pt===null)throw Error(ae(349));kr&30||A0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wp(b0.bind(null,i,s,t),[t]),i.flags|=2048,$o(9,C0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Pt.identifierPrefix;if(ot){var n=gi,i=mi;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:wn,useCallback:F0,useContext:wn,useEffect:Zf,useImperativeHandle:U0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:O0,useReducer:eu,useRef:L0,useState:function(){return eu(Xo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Tn();return k0(e,Mt.memoizedState,t)},useTransition:function(){var t=eu(Xo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:T0,useId:z0,unstable_isNewReconciler:!1},Dy={readContext:wn,useCallback:F0,useContext:wn,useEffect:Zf,useImperativeHandle:U0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:O0,useReducer:tu,useRef:L0,useState:function(){return tu(Xo)},useDebugValue:Qf,useDeferredValue:function(t){var e=Tn();return Mt===null?e.memoizedState=t:k0(e,Mt.memoizedState,t)},useTransition:function(){var t=tu(Xo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:T0,useId:z0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Qi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(kn(e,t,r,i),ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Qi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(kn(e,t,r,i),ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Qi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(kn(e,t,i,n),ul(e,t,i))}};function Tp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!zo(n,i)||!zo(r,s):!0}function G0(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=tn(e)?Fr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=tn(e)?Fr:Gt.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",i=e;do n+=ax(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function j0(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xl||(Xl=!0,Ad=i),gd(t,e)},n}function W0(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Uy=bi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?y0(e,null,n,i):Os(e,t.child,n,i)}function Pp(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=qf(t,e,n,i,s,r),n=Kf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ot&&n&&Of(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Lp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,i,r)):(t=gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(zo(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,wi(t,e,r)}return vd(t,e,n,i,r)}function $0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Es,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Es,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Es,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Es,cn),cn|=i;return Wt(t,e,r,n),e.child}function Y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=tn(n)?Fr:Gt.current;return s=Us(e,s),Rs(e,r),n=qf(t,e,n,i,s,r),i=Kf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ot&&i&&Of(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Np(t,e,n,i,r){if(tn(n)){var s=!0;Fl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)hl(t,e),G0(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=wn(l):(l=tn(n)?Fr:Gt.current,l=Us(e,l));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==l)&&Ap(e,a,i,l),zi=!1;var f=e.memoizedState;a.state=f,Hl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||en.current||zi?(typeof u=="function"&&(pd(e,n,u,i),c=e.memoizedState),(o=zi||Tp(e,n,o,i,f,c,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,M0(t,e),o=e.memoizedProps,l=e.type===e.elementType?o:Nn(e.type,o),a.props=l,d=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=wn(c):(c=tn(n)?Fr:Gt.current,c=Us(e,c));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==c)&&Ap(e,a,i,c),zi=!1,f=e.memoizedState,a.state=f,Hl(e,i,a,r);var v=e.memoizedState;o!==d||f!==v||en.current||zi?(typeof p=="function"&&(pd(e,n,p,i),v=e.memoizedState),(l=zi||Tp(e,n,l,i,f,v,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=c,i=l):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){Y0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&vp(e,n,!1),wi(t,e,s);i=e.stateNode,Uy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&vp(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gp(t,e.context,!1),Wf(t,e.containerInfo)}function Dp(t,e,n,i,r){return Fs(),zf(r),e.flags|=256,Wt(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function K0(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_c(a,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=xd,t):Jf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Fy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Ji(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ji(o,s):(s=Ur(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?yd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jf(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&zf(i),Os(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ae(422))),Pa(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,t.child,null,a),e.child.memoizedState=yd(a),e.memoizedState=xd,s);if(!(e.mode&1))return Pa(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=nu(s,i,void 0),Pa(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),kn(i,t,r,-1))}return sh(),i=nu(Error(ae(421))),Pa(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=qi(r.nextSibling),dn=e,ot=!0,In=null,t!==null&&(vn[_n++]=mi,vn[_n++]=gi,vn[_n++]=Or,mi=t.id,gi=t.overflow,Or=e),e=Jf(e,i.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Z0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Oy(t,e,n){switch(e.tag){case 3:q0(e),Fs();break;case 5:E0(e);break;case 1:tn(e.type)&&Fl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?K0(t,e,n):(nt(lt,lt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Z0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,$0(t,e,n)}return wi(t,e,n)}var Q0,Sd,J0,ev;Q0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};J0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(Kn.current);var s=null;switch(n){case"input":r=Gu(t,r),i=Gu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}Yu(n,i);var a;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(No.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(o=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==o&&(c!=null||o!=null))if(l==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(No.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&it("scroll",t),s||o===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};ev=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ky(t,e,n){var i=e.pendingProps;switch(kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return tn(e.type)&&Ul(),Ot(e),null;case 3:return i=e.stateNode,ks(),st(en),st(Gt),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Rd(In),In=null))),Sd(t,e),Ot(e),null;case 5:Xf(e);var r=Pr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)J0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ot(e),null}if(t=Pr(Kn.current),ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)it(xo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Gh(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Wh(i,s),it("invalid",i)}Yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,o,t),r=["children",""+o]):No.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&it("scroll",i)}switch(n){case"input":xa(i),jh(i,s,!0);break;case"textarea":xa(i),Xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[Vo]=i,Q0(t,e,!1,!1),e.stateNode=t;e:{switch(a=qu(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)it(xo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Gh(t,i),r=Gu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),it("invalid",t);break;case"textarea":Wh(t,i),r=Xu(t,i),it("invalid",t);break;default:r=i}Yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Lg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Do(t,c):typeof c=="number"&&Do(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?c!=null&&s==="onScroll"&&it("scroll",t):c!=null&&Ef(t,s,c,a))}switch(n){case"input":xa(t),jh(t,i,!1);break;case"textarea":xa(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)ev(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Pr(jo.current),Pr(Kn.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ot(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&un!==null&&e.mode&1&&!(e.flags&128))_0(),Fs(),e.flags|=98560,s=!1;else if(s=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Xn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else In!==null&&(Rd(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Tt===0&&(Tt=3):sh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ks(),Sd(t,e),t===null&&Bo(e.stateNode.containerInfo),Ot(e),null;case 10:return Vf(e.type._context),Ot(e),null;case 17:return tn(e.type)&&Ul(),Ot(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)so(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Vl(t),a!==null){for(e.flags|=128,so(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Bs&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ot)return Ot(e),null}else 2*gt()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return rh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function zy(t,e){switch(kf(e),e.tag){case 1:return tn(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),st(en),st(Gt),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return ks(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return rh(),null;case 24:return null;default:return null}}var La=!1,Bt=!1,By=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Up=!1;function Hy(t,e){if(sd=Ll,t=s0(),Ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,l=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(c=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++l===r&&(o=a),f===s&&++u===i&&(c=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},Ll=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=Up,Up=!1,v}function Co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tv(t){var e=t.alternate;e!==null&&(t.alternate=null,tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Vo],delete e[cd],delete e[Ey],delete e[wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nv(t){return t.tag===5||t.tag===3||t.tag===4}function Fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Dt=null,Dn=!1;function Li(t,e,n){for(n=n.child;n!==null;)iv(t,e,n),n=n.sibling}function iv(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Bt||Ms(n,e);case 6:var i=Dt,r=Dn;Dt=null,Li(t,e,n),Dt=i,Dn=r,Dt!==null&&(Dn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Dn?(t=Dt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Oo(t)):Kc(Dt,n.stateNode));break;case 4:i=Dt,r=Dn,Dt=n.stateNode.containerInfo,Dn=!0,Li(t,e,n),Dt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Md(n,e,a),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Bt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Li(t,e,n),Bt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new By),e.forEach(function(i){var r=Ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Dn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Dt===null)throw Error(ae(160));iv(s,a,r),Dt=null,Dn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){mt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rv(e,t),e=e.sibling}function rv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{Co(3,t,t.return),gc(3,t)}catch(x){mt(t,t.return,x)}try{Co(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Do(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ag(r,s),qu(o,a);var l=qu(o,s);for(a=0;a<c.length;a+=2){var u=c[a],d=c[a+1];u==="style"?Lg(r,d):u==="dangerouslySetInnerHTML"?Rg(r,d):u==="children"?Do(r,d):Ef(r,u,d,l)}switch(o){case"input":ju(r,s);break;case"textarea":Cg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vo]=s}catch(x){mt(t,t.return,x)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){mt(t,t.return,x)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nh=gt())),i&4&&Op(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(l=Bt)||u,Cn(e,t),Bt=l):Cn(e,t),Vn(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:Ms(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:Ms(f,f.return);break;case 22:if(f.memoizedState!==null){zp(d);continue}}p!==null?(p.return=f,ve=p):zp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Pg("display",a))}catch(x){mt(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(x){mt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&Op(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Do(r,""),i.flags&=-33);var s=Fp(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Fp(t);wd(t,o,a);break;default:throw Error(ae(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vy(t,e,n){ve=t,sv(t)}function sv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||La;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Bt;o=La;var l=Bt;if(La=a,(Bt=c)&&!l)for(ve=r;ve!==null;)a=ve,c=a.child,a.tag===22&&a.memoizedState!==null?Bp(r):c!==null?(c.return=a,ve=c):Bp(r);for(;s!==null;)ve=s,sv(s),s=s.sibling;ve=r,La=o,Bt=l}kp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):kp(t)}}function kp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Bt||e.flags&512&&Ed(e)}catch(f){mt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function zp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Bp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{Ed(e)}catch(c){mt(e,s,c)}break;case 5:var a=e.return;try{Ed(e)}catch(c){mt(e,a,c)}}}catch(c){mt(e,e.return,c)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Gy=Math.ceil,Wl=bi.ReactCurrentDispatcher,eh=bi.ReactCurrentOwner,En=bi.ReactCurrentBatchConfig,We=0,Pt=null,St=null,It=0,cn=0,Es=ar(0),Tt=0,Yo=null,zr=0,vc=0,th=0,bo=null,Zt=null,nh=0,Bs=1/0,fi=null,Xl=!1,Ad=null,Zi=null,Na=!1,Wi=null,$l=0,Ro=0,Cd=null,pl=-1,ml=0;function Xt(){return We&6?gt():pl!==-1?pl:pl=gt()}function Qi(t){return t.mode&1?We&2&&It!==0?It&-It:Ay.transition!==null?(ml===0&&(ml=Gg()),ml):(t=et,t!==0||(t=window.event,t=t===void 0?16:Kg(t.type)),t):1}function kn(t,e,n,i){if(50<Ro)throw Ro=0,Cd=null,Error(ae(185));ea(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(vc|=n),Tt===4&&Hi(t,It)),nn(t,i),n===1&&We===0&&!(e.mode&1)&&(Bs=gt()+500,hc&&lr()))}function nn(t,e){var n=t.callbackNode;Ax(t,e);var i=Pl(t,t===Pt?It:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?Ty(Hp.bind(null,t)):m0(Hp.bind(null,t)),Sy(function(){!(We&6)&&lr()}),n=null;else{switch(jg(i)){case 1:n=bf;break;case 4:n=Hg;break;case 16:n=Rl;break;case 536870912:n=Vg;break;default:n=Rl}n=hv(n,ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ov(t,e){if(pl=-1,ml=0,We&6)throw Error(ae(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Pl(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=We;We|=2;var s=lv();(Pt!==t||It!==e)&&(fi=null,Bs=gt()+500,Ir(t,e));do try{Xy();break}catch(o){av(t,o)}while(!0);Hf(),Wl.current=s,We=r,St!==null?e=0:(Pt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=Yo,Ir(t,0),Hi(t,i),nn(t,gt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!jy(r)&&(e=Yl(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=Yo,Ir(t,0),Hi(t,i),nn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Er(t,Zt,fi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=nh+500-gt(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(Er.bind(null,t,Zt,fi),e);break}Er(t,Zt,fi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gy(i/1960))-i,10<i){t.timeoutHandle=ld(Er.bind(null,t,Zt,fi),i);break}Er(t,Zt,fi);break;case 5:Er(t,Zt,fi);break;default:throw Error(ae(329))}}}return nn(t,gt()),t.callbackNode===n?ov.bind(null,t):null}function bd(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Rd(e)),t}function Rd(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~th,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Hp(t){if(We&6)throw Error(ae(327));Ps();var e=Pl(t,0);if(!(e&1))return nn(t,gt()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=Yo,Ir(t,0),Hi(t,e),nn(t,gt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,Zt,fi),nn(t,gt()),null}function ih(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Bs=gt()+500,hc&&lr())}}function Br(t){Wi!==null&&Wi.tag===0&&!(We&6)&&Ps();var e=We;We|=1;var n=En.transition,i=et;try{if(En.transition=null,et=1,t)return t()}finally{et=i,En.transition=n,We=e,!(We&6)&&lr()}}function rh(){cn=Es.current,st(Es)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yy(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:ks(),st(en),st(Gt),$f();break;case 5:Xf(i);break;case 4:ks();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Vf(i.type._context);break;case 22:case 23:rh()}n=n.return}if(Pt=t,St=t=Ji(t.current,null),It=cn=e,Tt=0,Yo=null,th=vc=zr=0,Zt=bo=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Rr=null}return t}function av(t,e){do{var n=St;try{if(Hf(),dl.current=jl,Gl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(kr=0,Rt=Mt=ct=null,Ao=!1,Wo=0,eh.current=null,n===null||n.return===null){Tt=1,Yo=e,St=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=It,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=bp(a);if(p!==null){p.flags&=-257,Rp(p,a,o,s,e),p.mode&1&&Cp(s,l,e),e=p,c=l;var v=e.updateQueue;if(v===null){var x=new Set;x.add(c),e.updateQueue=x}else v.add(c);break e}else{if(!(e&1)){Cp(s,l,e),sh();break e}c=Error(ae(426))}}else if(ot&&o.mode&1){var m=bp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Rp(m,a,o,s,e),zf(zs(c,o));break e}}s=c=zs(c,o),Tt!==4&&(Tt=2),bo===null?bo=[s]:bo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=j0(s,c,e);Sp(s,h);break e;case 1:o=c;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Zi===null||!Zi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=W0(s,o,e);Sp(s,S);break e}}s=s.return}while(s!==null)}uv(n)}catch(b){e=b,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function lv(){var t=Wl.current;return Wl.current=jl,t===null?jl:t}function sh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(zr&268435455)&&!(vc&268435455)||Hi(Pt,It)}function Yl(t,e){var n=We;We|=2;var i=lv();(Pt!==t||It!==e)&&(fi=null,Ir(t,e));do try{Wy();break}catch(r){av(t,r)}while(!0);if(Hf(),We=n,Wl.current=i,St!==null)throw Error(ae(261));return Pt=null,It=0,Tt}function Wy(){for(;St!==null;)cv(St)}function Xy(){for(;St!==null&&!vx();)cv(St)}function cv(t){var e=fv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?uv(t):St=e,eh.current=null}function uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zy(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=ky(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function Er(t,e,n){var i=et,r=En.transition;try{En.transition=null,et=1,$y(t,e,n,i)}finally{En.transition=r,et=i}return null}function $y(t,e,n,i){do Ps();while(Wi!==null);if(We&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cx(t,s),t===Pt&&(St=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,hv(Rl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=et;et=1;var o=We;We|=4,eh.current=null,Hy(t,n),rv(n,t),hy(od),Ll=!!sd,od=sd=null,t.current=n,Vy(n),_x(),We=o,et=a,En.transition=s}else t.current=n;if(Na&&(Na=!1,Wi=t,$l=r),s=t.pendingLanes,s===0&&(Zi=null),Sx(n.stateNode),nn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xl)throw Xl=!1,t=Ad,Ad=null,t;return $l&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Cd?Ro++:(Ro=0,Cd=t):Ro=0,lr(),null}function Ps(){if(Wi!==null){var t=jg($l),e=En.transition,n=et;try{if(En.transition=null,et=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,$l=0,We&6)throw Error(ae(331));var r=We;for(We|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var l=o[c];for(ve=l;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Co(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var f=u.sibling,p=u.return;if(tv(u),u===l){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ve=_;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gc(9,o)}}catch(b){mt(o,o.return,b)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if(We=r,lr(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{et=n,En.transition=e}}return!1}function Vp(t,e,n){e=zs(n,e),e=j0(t,e,1),t=Ki(t,e,1),e=Xt(),t!==null&&(ea(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)Vp(t,t,n);else for(;e!==null;){if(e.tag===3){Vp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=zs(n,t),t=W0(e,t,1),e=Ki(e,t,1),t=Xt(),e!==null&&(ea(e,1,t),nn(e,t));break}}e=e.return}}function Yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>gt()-nh?Ir(t,0):th|=n),nn(t,e)}function dv(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Xt();t=Ei(t,e),t!==null&&(ea(t,e,n),nn(t,n))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dv(t,n)}function Ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),dv(t,n)}var fv;fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Oy(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ot&&e.flags&1048576&&g0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;hl(t,e),t=e.pendingProps;var r=Us(e,Gt.current);Rs(e,n),r=qf(null,e,i,t,r,n);var s=Kf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Of(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qy(i),t=Nn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=Np(null,e,i,t,n);break e;case 11:e=Pp(null,e,i,t,n);break e;case 14:e=Lp(null,e,i,Nn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Np(t,e,i,r,n);case 3:e:{if(q0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,M0(t,e),Hl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(ae(423)),e),e=Dp(t,e,i,n,r);break e}else if(i!==r){r=zs(Error(ae(424)),e),e=Dp(t,e,i,n,r);break e}else for(un=qi(e.stateNode.containerInfo.firstChild),dn=e,ot=!0,In=null,n=y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=wi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return E0(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ad(i,r)?a=null:s!==null&&ad(i,s)&&(e.flags|=32),Y0(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&fd(e),null;case 13:return K0(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Pp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(zl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!en.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=xi(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),hd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Lp(t,e,i,r,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),hl(t,e),e.tag=1,tn(i)?(t=!0,Fl(e)):t=!1,Rs(e,n),G0(e,i,r),md(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return Z0(t,e,n);case 22:return $0(t,e,n)}throw Error(ae(156,e.tag))};function hv(t,e){return Bg(t,e)}function Zy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new Zy(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qy(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===Af)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Ur(n.children,r,s,e);case wf:a=8,r|=8;break;case zu:return t=yn(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Bu:return t=yn(13,n,e,r),t.elementType=Bu,t.lanes=s,t;case Hu:return t=yn(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case Eg:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sg:a=10;break e;case Mg:a=9;break e;case Tf:a=11;break e;case Af:a=14;break e;case ki:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=yn(22,t,i,e),t.elementType=Eg,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ah(t,e,n,i,r,s,a,o,c){return t=new Jy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(s),t}function eS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function pv(t){if(!t)return ir;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(tn(n))return p0(t,n,e)}return e}function mv(t,e,n,i,r,s,a,o,c){return t=ah(n,i,!0,t,r,s,a,o,c),t.context=pv(null),n=t.current,i=Xt(),r=Qi(n),s=xi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,ea(t,r,i),nn(t,i),t}function xc(t,e,n,i){var r=e.current,s=Xt(),a=Qi(r);return n=pv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,a),t!==null&&(kn(t,r,a,s),ul(t,r,a)),a}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lh(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function tS(){return null}var gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ch(t){this._internalRoot=t}yc.prototype.render=ch.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));xc(t,e,null,null)};yc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){xc(null,t,null,null)}),e[Mi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&qg(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function nS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=ql(a);s.call(l)}}var a=mv(e,i,t,0,null,!1,!1,"",jp);return t._reactRootContainer=a,t[Mi]=a.current,Bo(t.nodeType===8?t.parentNode:t),Br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var l=ql(c);o.call(l)}}var c=ah(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=c,t[Mi]=c.current,Bo(t.nodeType===8?t.parentNode:t),Br(function(){xc(e,c,n,i)}),c}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=ql(a);o.call(c)}}xc(e,a,t,r)}else a=nS(n,e,t,r,i);return ql(a)}Wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Rf(e,n|1),nn(e,gt()),!(We&6)&&(Bs=gt()+500,lr()))}break;case 13:Br(function(){var i=Ei(t,1);if(i!==null){var r=Xt();kn(i,t,1,r)}}),lh(t,1)}};Pf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Xt();kn(e,t,134217728,n)}lh(t,134217728)}};Xg=function(t){if(t.tag===13){var e=Qi(t),n=Ei(t,e);if(n!==null){var i=Xt();kn(n,t,e,i)}lh(t,e)}};$g=function(){return et};Yg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Zu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(ae(90));Tg(i),ju(i,r)}}}break;case"textarea":Cg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Ig=ih;Ug=Br;var iS={usingClientEntryPoint:!1,Events:[na,vs,fc,Ng,Dg,ih]},oo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rS={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||tS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{lc=Da.inject(rS),qn=Da}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(ae(200));return eS(t,e,null,n)};hn.createRoot=function(t,e){if(!uh(t))throw Error(ae(299));var n=!1,i="",r=gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ah(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Bo(t.nodeType===8?t.parentNode:t),new ch(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Br(t)};hn.hydrate=function(t,e,n){if(!Sc(e))throw Error(ae(200));return Mc(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=gv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=mv(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,Bo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};hn.render=function(t,e,n){if(!Sc(e))throw Error(ae(200));return Mc(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(ae(40));return t._reactRootContainer?(Br(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};hn.unstable_batchedUpdates=ih;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Mc(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)}catch(t){console.error(t)}}vv(),vg.exports=hn;var sS=vg.exports,_v,Wp=sS;_v=Wp.createRoot,Wp.hydrateRoot;const xv=z.createContext(void 0),oS=({children:t})=>{const[e,n]=z.useState(()=>localStorage.getItem("theme")||"light");return z.useEffect(()=>{localStorage.setItem("theme",e),Object.entries({dark:{"--primary-50":"#e23239","--primary-100":"#e0272e","--primary-200":"#d01e25","--primary-300":"#ba1a21","--primary-400":"#a3171d","--primary-500":"#8d1419","--primary-600":"#801217","--primary-700":"#721014","--primary-800":"#650e12","--primary-900":"#570c0f","--primary-950":"#510b0e","--secondary-50":"#62666f","--secondary-100":"#5c6068","--secondary-200":"#50535b","--secondary-300":"#44474d","--secondary-400":"#383a40","--secondary-500":"#2c2e32","--secondary-600":"#25272a","--secondary-700":"#1e1f22","--secondary-800":"#17181a","--secondary-900":"#0f1011","--secondary-950":"#0c0c0d"},light:{"--primary-50":"#3A3A91","--primary-100":"#39398D","--primary-200":"#363686","--primary-300":"#33337F","--primary-400":"#303077","--primary-500":"#2D2D70","--primary-600":"#2A2A69","--primary-700":"#272761","--primary-800":"#24245A","--primary-900":"#212153","--primary-950":"#20204F","--secondary-50":"#FAF8F6","--secondary-100":"#FAF8F6","--secondary-200":"#FAF8F6","--secondary-300":"#FAF8F6","--secondary-400":"#FAF8F6","--secondary-500":"#FAF8F6","--secondary-600":"#FAF8F6","--secondary-700":"#FAF8F6","--secondary-800":"#FAF8F6","--secondary-900":"#FAF8F6","--secondary-950":"#FAF8F6"}}[e]).forEach(([r,s])=>{document.documentElement.style.setProperty(r,s)})},[e]),y.jsx(xv.Provider,{value:{theme:e,setTheme:n},children:t})},Wr=()=>{const t=z.useContext(xv);return t||(console.warn("useTheme must be used within a ThemeProvider"),{theme:"dark",setTheme:()=>{}})};var dh={};Object.defineProperty(dh,"__esModule",{value:!0});dh.parse=hS;dh.serialize=pS;const aS=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,lS=/^[\u0021-\u003A\u003C-\u007E]*$/,cS=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,uS=/^[\u0020-\u003A\u003D-\u007E]*$/,dS=Object.prototype.toString,fS=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function hS(t,e){const n=new fS,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||mS;let s=0;do{const a=t.indexOf("=",s);if(a===-1)break;const o=t.indexOf(";",s),c=o===-1?i:o;if(a>c){s=t.lastIndexOf(";",a-1)+1;continue}const l=Xp(t,s,a),u=$p(t,a,l),d=t.slice(l,u);if(n[d]===void 0){let f=Xp(t,a+1,c),p=$p(t,c,f);const v=r(t.slice(f,p));n[d]=v}s=c+1}while(s<i);return n}function Xp(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function $p(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function pS(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!aS.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!lS.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!cS.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!uS.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!gS(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function mS(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function gS(t){return dS.call(t)==="[object Date]"}var Yp="popstate";function vS(t={}){function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Pd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:qo(r)}return xS(e,n,null,t)}function ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _S(){return Math.random().toString(36).substring(2,10)}function qp(t,e){return{usr:t.state,key:t.key,idx:e}}function Pd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?qs(e):e,state:n,key:e&&e.key||i||_S()}}function qo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function xS(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",c=null,l=u();l==null&&(l=0,a.replaceState({...a.state,idx:l},""));function u(){return(a.state||{idx:null}).idx}function d(){o="POP";let m=u(),h=m==null?null:m-l;l=m,c&&c({action:o,location:x.location,delta:h})}function f(m,h){o="PUSH";let g=Pd(x.location,m,h);l=u()+1;let _=qp(g,l),S=x.createHref(g);try{a.pushState(_,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&c&&c({action:o,location:x.location,delta:1})}function p(m,h){o="REPLACE";let g=Pd(x.location,m,h);l=u();let _=qp(g,l),S=x.createHref(g);a.replaceState(_,"",S),s&&c&&c({action:o,location:x.location,delta:0})}function v(m){return yS(m)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Yp,d),c=m,()=>{r.removeEventListener(Yp,d),c=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return a.go(m)}};return x}function yS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ut(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:qo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function yv(t,e,n="/"){return SS(t,e,n,!1)}function SS(t,e,n,i){let r=typeof e=="string"?qs(e):e,s=Ti(r.pathname||"/",n);if(s==null)return null;let a=Sv(t);MS(a);let o=null;for(let c=0;o==null&&c<a.length;++c){let l=DS(s);o=LS(a[c],l,i)}return o}function Sv(t,e=[],n=[],i=""){let r=(s,a,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ut(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length));let l=yi([i,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(ut(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Sv(s.children,e,u,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:RS(l,s.index),routesMeta:u})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let c of Mv(s.path))r(s,a,c)}),e}function Mv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Mv(i.join("/")),o=[];return o.push(...a.map(c=>c===""?s:[s,c].join("/"))),r&&o.push(...a),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function MS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var ES=/^:[\w-]+$/,wS=3,TS=2,AS=1,CS=10,bS=-2,Kp=t=>t==="*";function RS(t,e){let n=t.split("/"),i=n.length;return n.some(Kp)&&(i+=bS),e&&(i+=TS),n.filter(r=>!Kp(r)).reduce((r,s)=>r+(ES.test(s)?wS:s===""?AS:CS),i)}function PS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function LS(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let c=i[o],l=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=Kl({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u),f=c.route;if(!d&&l&&n&&!i[i.length-1].route.index&&(d=Kl({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:yi([s,d.pathname]),pathnameBase:OS(yi([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=yi([s,d.pathnameBase]))}return a}function Kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=NS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((l,{paramName:u,isOptional:d},f)=>{if(u==="*"){let v=o[f]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const p=o[f];return d&&!p?l[u]=void 0:l[u]=(p||"").replace(/%2F/g,"/"),l},{}),pathname:s,pathnameBase:a,pattern:t}}function NS(t,e=!1,n=!0){Jn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,c)=>(i.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function DS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ti(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function IS(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?qs(t):t;return{pathname:n?n.startsWith("/")?n:US(n,e):e,search:kS(i),hash:zS(r)}}function US(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ou(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ev(t){let e=FS(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function wv(t,e,n,i=!1){let r;typeof t=="string"?r=qs(t):(r={...t},ut(!r.pathname||!r.pathname.includes("?"),ou("?","pathname","search",r)),ut(!r.pathname||!r.pathname.includes("#"),ou("#","pathname","hash",r)),ut(!r.search||!r.search.includes("#"),ou("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let c=IS(r,o),l=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}var yi=t=>t.join("/").replace(/\/\/+/g,"/"),OS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Tv=["POST","PUT","PATCH","DELETE"];new Set(Tv);var HS=["GET",...Tv];new Set(HS);var Ks=z.createContext(null);Ks.displayName="DataRouter";var Ec=z.createContext(null);Ec.displayName="DataRouterState";var Av=z.createContext({isTransitioning:!1});Av.displayName="ViewTransition";var VS=z.createContext(new Map);VS.displayName="Fetchers";var GS=z.createContext(null);GS.displayName="Await";var ni=z.createContext(null);ni.displayName="Navigation";var ra=z.createContext(null);ra.displayName="Location";var Ri=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ri.displayName="Route";var fh=z.createContext(null);fh.displayName="RouteError";function jS(t,{relative:e}={}){ut(sa(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=z.useContext(ni),{hash:r,pathname:s,search:a}=oa(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:yi([n,s])),i.createHref({pathname:o,search:a,hash:r})}function sa(){return z.useContext(ra)!=null}function cr(){return ut(sa(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ra).location}var Cv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bv(t){z.useContext(ni).static||z.useLayoutEffect(t)}function Rv(){let{isDataRoute:t}=z.useContext(Ri);return t?i1():WS()}function WS(){ut(sa(),"useNavigate() may be used only in the context of a <Router> component.");let t=z.useContext(Ks),{basename:e,navigator:n}=z.useContext(ni),{matches:i}=z.useContext(Ri),{pathname:r}=cr(),s=JSON.stringify(Ev(i)),a=z.useRef(!1);return bv(()=>{a.current=!0}),z.useCallback((c,l={})=>{if(Jn(a.current,Cv),!a.current)return;if(typeof c=="number"){n.go(c);return}let u=wv(c,JSON.parse(s),r,l.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:yi([e,u.pathname])),(l.replace?n.replace:n.push)(u,l.state,l)},[e,n,s,r,t])}z.createContext(null);function oa(t,{relative:e}={}){let{matches:n}=z.useContext(Ri),{pathname:i}=cr(),r=JSON.stringify(Ev(n));return z.useMemo(()=>wv(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function XS(t,e){return Pv(t,e)}function Pv(t,e,n,i){var h;ut(sa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=z.useContext(ni),{matches:s}=z.useContext(Ri),a=s[s.length-1],o=a?a.params:{},c=a?a.pathname:"/",l=a?a.pathnameBase:"/",u=a&&a.route;{let g=u&&u.path||"";Lv(c,!u||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let d=cr(),f;if(e){let g=typeof e=="string"?qs(e):e;ut(l==="/"||((h=g.pathname)==null?void 0:h.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${g.pathname}" was given in the \`location\` prop.`),f=g}else f=d;let p=f.pathname||"/",v=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=yv(t,{pathname:v});Jn(u||x!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Jn(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=ZS(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:yi([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:yi([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&m?z.createElement(ra.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},m):m}function $S(){let t=n1(),e=BS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:s},"ErrorBoundary")," or"," ",z.createElement("code",{style:s},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,a)}var YS=z.createElement($S,null),qS=class extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?z.createElement(Ri.Provider,{value:this.props.routeContext},z.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KS({routeContext:t,match:e,children:n}){let i=z.useContext(Ks);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Ri.Provider,{value:t},n)}function ZS(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let c=r.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id])!==void 0);ut(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(n)for(let c=0;c<r.length;c++){let l=r[c];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(o=c),l.route.id){let{loaderData:u,errors:d}=n,f=l.route.loader&&!u.hasOwnProperty(l.route.id)&&(!d||d[l.route.id]===void 0);if(l.route.lazy||f){a=!0,o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}return r.reduceRight((c,l,u)=>{let d,f=!1,p=null,v=null;n&&(d=s&&l.route.id?s[l.route.id]:void 0,p=l.route.errorElement||YS,a&&(o<0&&u===0?(Lv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,v=null):o===u&&(f=!0,v=l.route.hydrateFallbackElement||null)));let x=e.concat(r.slice(0,u+1)),m=()=>{let h;return d?h=p:f?h=v:l.route.Component?h=z.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=c,z.createElement(KS,{match:l,routeContext:{outlet:c,matches:x,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?z.createElement(qS,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}function hh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QS(t){let e=z.useContext(Ks);return ut(e,hh(t)),e}function JS(t){let e=z.useContext(Ec);return ut(e,hh(t)),e}function e1(t){let e=z.useContext(Ri);return ut(e,hh(t)),e}function ph(t){let e=e1(t),n=e.matches[e.matches.length-1];return ut(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function t1(){return ph("useRouteId")}function n1(){var i;let t=z.useContext(fh),e=JS("useRouteError"),n=ph("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function i1(){let{router:t}=QS("useNavigate"),e=ph("useNavigate"),n=z.useRef(!1);return bv(()=>{n.current=!0}),z.useCallback(async(r,s={})=>{Jn(n.current,Cv),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Zp={};function Lv(t,e,n){!e&&!Zp[t]&&(Zp[t]=!0,Jn(!1,n))}z.memo(r1);function r1({routes:t,future:e,state:n}){return Pv(t,void 0,n,e)}function Ln(t){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s1({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){ut(!sa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),o=z.useMemo(()=>({basename:a,navigator:r,static:s,future:{}}),[a,r,s]);typeof n=="string"&&(n=qs(n));let{pathname:c="/",search:l="",hash:u="",state:d=null,key:f="default"}=n,p=z.useMemo(()=>{let v=Ti(c,a);return v==null?null:{location:{pathname:v,search:l,hash:u,state:d,key:f},navigationType:i}},[a,c,l,u,d,f,i]);return Jn(p!=null,`<Router basename="${a}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:z.createElement(ni.Provider,{value:o},z.createElement(ra.Provider,{children:e,value:p}))}function o1({children:t,location:e}){return XS(Ld(t),e)}function Ld(t,e=[]){let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,Ld(i.props.children,s));return}ut(i.type===Ln,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ld(i.props.children,s)),n.push(a)}),n}var vl="get",_l="application/x-www-form-urlencoded";function wc(t){return t!=null&&typeof t.tagName=="string"}function a1(t){return wc(t)&&t.tagName.toLowerCase()==="button"}function l1(t){return wc(t)&&t.tagName.toLowerCase()==="form"}function c1(t){return wc(t)&&t.tagName.toLowerCase()==="input"}function u1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function d1(t,e){return t.button===0&&(!e||e==="_self")&&!u1(t)}var Ia=null;function f1(){if(Ia===null)try{new FormData(document.createElement("form"),0),Ia=!1}catch{Ia=!0}return Ia}var h1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function au(t){return t!=null&&!h1.has(t)?(Jn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_l}"`),null):t}function p1(t,e){let n,i,r,s,a;if(l1(t)){let o=t.getAttribute("action");i=o?Ti(o,e):null,n=t.getAttribute("method")||vl,r=au(t.getAttribute("enctype"))||_l,s=new FormData(t)}else if(a1(t)||c1(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||o.getAttribute("action");if(i=c?Ti(c,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||vl,r=au(t.getAttribute("formenctype"))||au(o.getAttribute("enctype"))||_l,s=new FormData(o,t),!f1()){let{name:l,type:u,value:d}=t;if(u==="image"){let f=l?`${l}.`:"";s.append(`${f}x`,"0"),s.append(`${f}y`,"0")}else l&&s.append(l,d)}}else{if(wc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vl,i=null,r=_l,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}function mh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function m1(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function v1(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await m1(s,n);return a.links?a.links():[]}return[]}));return S1(i.flat(1).filter(g1).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Qp(t,e,n,i,r,s){let a=(c,l)=>n[l]?c.route.id!==n[l].route.id:!0,o=(c,l)=>{var u;return n[l].pathname!==c.pathname||((u=n[l].route.path)==null?void 0:u.endsWith("*"))&&n[l].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,l)=>a(c,l)||o(c,l)):s==="data"?e.filter((c,l)=>{var d;let u=i.routes[c.route.id];if(!u||!u.hasLoader)return!1;if(a(c,l)||o(c,l))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function _1(t,e,{includeHydrateFallback:n}={}){return x1(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function x1(t){return[...new Set(t)]}function y1(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function S1(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(y1(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var M1=new Set([100,101,204,205]);function E1(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Ti(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Nv(){let t=z.useContext(Ks);return mh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function w1(){let t=z.useContext(Ec);return mh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gh=z.createContext(void 0);gh.displayName="FrameworkContext";function Dv(){let t=z.useContext(gh);return mh(t,"You must render this element inside a <HydratedRouter> element"),t}function T1(t,e){let n=z.useContext(gh),[i,r]=z.useState(!1),[s,a]=z.useState(!1),{onFocus:o,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=e,f=z.useRef(null);z.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=h=>{h.forEach(g=>{a(g.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return f.current&&m.observe(f.current),()=>{m.disconnect()}}},[t]),z.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},v=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,f,{}]:[s,f,{onFocus:ao(o,p),onBlur:ao(c,v),onMouseEnter:ao(l,p),onMouseLeave:ao(u,v),onTouchStart:ao(d,p)}]:[!1,f,{}]}function ao(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function A1({page:t,...e}){let{router:n}=Nv(),i=z.useMemo(()=>yv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?z.createElement(b1,{page:t,matches:i,...e}):null}function C1(t){let{manifest:e,routeModules:n}=Dv(),[i,r]=z.useState([]);return z.useEffect(()=>{let s=!1;return v1(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function b1({page:t,matches:e,...n}){let i=cr(),{manifest:r,routeModules:s}=Dv(),{basename:a}=Nv(),{loaderData:o,matches:c}=w1(),l=z.useMemo(()=>Qp(t,e,c,r,i,"data"),[t,e,c,r,i]),u=z.useMemo(()=>Qp(t,e,c,r,i,"assets"),[t,e,c,r,i]),d=z.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let v=new Set,x=!1;if(e.forEach(h=>{var _;let g=r.routes[h.route.id];!g||!g.hasLoader||(!l.some(S=>S.route.id===h.route.id)&&h.route.id in o&&((_=s[h.route.id])!=null&&_.shouldRevalidate)||g.hasClientLoader?x=!0:v.add(h.route.id))}),v.size===0)return[];let m=E1(t,a);return x&&v.size>0&&m.searchParams.set("_routes",e.filter(h=>v.has(h.route.id)).map(h=>h.route.id).join(",")),[m.pathname+m.search]},[a,o,i,r,l,e,t,s]),f=z.useMemo(()=>_1(u,r),[u,r]),p=C1(u);return z.createElement(z.Fragment,null,d.map(v=>z.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),f.map(v=>z.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:x})=>z.createElement("link",{key:v,...x})))}function R1(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Iv&&(window.__reactRouterVersion="7.6.3")}catch{}function P1({basename:t,children:e,window:n}){let i=z.useRef();i.current==null&&(i.current=vS({window:n,v5Compat:!0}));let r=i.current,[s,a]=z.useState({action:r.action,location:r.location}),o=z.useCallback(c=>{z.startTransition(()=>a(c))},[a]);return z.useLayoutEffect(()=>r.listen(o),[r,o]),z.createElement(s1,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var Uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fv=z.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,state:o,target:c,to:l,preventScrollReset:u,viewTransition:d,...f},p){let{basename:v}=z.useContext(ni),x=typeof l=="string"&&Uv.test(l),m,h=!1;if(typeof l=="string"&&x&&(m=l,Iv))try{let w=new URL(window.location.href),M=l.startsWith("//")?new URL(w.protocol+l):new URL(l),R=Ti(M.pathname,v);M.origin===w.origin&&R!=null?l=R+M.search+M.hash:h=!0}catch{Jn(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=jS(l,{relative:r}),[_,S,b]=T1(i,f),A=I1(l,{replace:a,state:o,target:c,preventScrollReset:u,relative:r,viewTransition:d});function C(w){e&&e(w),w.defaultPrevented||A(w)}let L=z.createElement("a",{...f,...b,href:m||g,onClick:h||s?e:C,ref:R1(p,S),target:c,"data-discover":!x&&n==="render"?"true":void 0});return _&&!x?z.createElement(z.Fragment,null,L,z.createElement(A1,{page:g})):L});Fv.displayName="Link";var L1=z.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:c,...l},u){let d=oa(a,{relative:l.relative}),f=cr(),p=z.useContext(Ec),{navigator:v,basename:x}=z.useContext(ni),m=p!=null&&z1(d)&&o===!0,h=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,g=f.pathname,_=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),_=_?_.toLowerCase():null,h=h.toLowerCase()),_&&x&&(_=Ti(_,x)||_);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=g===h||!r&&g.startsWith(h)&&g.charAt(S)==="/",A=_!=null&&(_===h||!r&&_.startsWith(h)&&_.charAt(h.length)==="/"),C={isActive:b,isPending:A,isTransitioning:m},L=b?e:void 0,w;typeof i=="function"?w=i(C):w=[i,b?"active":null,A?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(C):s;return z.createElement(Fv,{...l,"aria-current":L,className:w,ref:u,style:M,to:a,viewTransition:o},typeof c=="function"?c(C):c)});L1.displayName="NavLink";var N1=z.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=vl,action:o,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,...f},p)=>{let v=O1(),x=k1(o,{relative:l}),m=a.toLowerCase()==="get"?"get":"post",h=typeof o=="string"&&Uv.test(o),g=_=>{if(c&&c(_),_.defaultPrevented)return;_.preventDefault();let S=_.nativeEvent.submitter,b=(S==null?void 0:S.getAttribute("formmethod"))||a;v(S||_.currentTarget,{fetcherKey:e,method:b,navigate:n,replace:r,state:s,relative:l,preventScrollReset:u,viewTransition:d})};return z.createElement("form",{ref:p,method:m,action:x,onSubmit:i?c:g,...f,"data-discover":!h&&t==="render"?"true":void 0})});N1.displayName="Form";function D1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ov(t){let e=z.useContext(Ks);return ut(e,D1(t)),e}function I1(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:a}={}){let o=Rv(),c=cr(),l=oa(t,{relative:s});return z.useCallback(u=>{if(d1(u,e)){u.preventDefault();let d=n!==void 0?n:qo(c)===qo(l);o(t,{replace:d,state:i,preventScrollReset:r,relative:s,viewTransition:a})}},[c,o,l,n,i,e,t,r,s,a])}var U1=0,F1=()=>`__${String(++U1)}__`;function O1(){let{router:t}=Ov("useSubmit"),{basename:e}=z.useContext(ni),n=t1();return z.useCallback(async(i,r={})=>{let{action:s,method:a,encType:o,formData:c,body:l}=p1(i,e);if(r.navigate===!1){let u=r.fetcherKey||F1();await t.fetch(u,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||a,formEncType:r.encType||o,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||a,formEncType:r.encType||o,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function k1(t,{relative:e}={}){let{basename:n}=z.useContext(ni),i=z.useContext(Ri);ut(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...oa(t||".",{relative:e})},a=cr();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),c=o.getAll("index");if(c.some(u=>u==="")){o.delete("index"),c.filter(d=>d).forEach(d=>o.append("index",d));let u=o.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:yi([n,s.pathname])),qo(s)}function z1(t,e={}){let n=z.useContext(Av);ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Ov("useViewTransitionState"),r=oa(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ti(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Ti(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Kl(r.pathname,a)!=null||Kl(r.pathname,s)!=null}[...M1];const B1=t=>{const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([a])=>{i(a.isIntersecting)},t),s=e.current;if(s&&(r.observe(s),typeof window<"u")){const a=s.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth;a.top<o&&a.bottom>0&&a.left<c&&a.right>0&&i(!0)}return()=>{s&&r.unobserve(s)}},[t]),[e,n]},aa=t=>{const[e,n]=B1(t),[i,r]=z.useState(!1);return n&&!i&&r(!0),[e,i]};function ei({children:t}){const[e,n]=aa({threshold:.1});return y.jsx("div",{ref:e,className:`transition-opacity duration-[1500ms] ${n?"opacity-100":"opacity-0"}`,children:t})}function Zl({children:t}){const[e,n]=aa({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-right":"opacity-0"}`,children:t})}function Ql({children:t}){const[e,n]=aa({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-left":"opacity-0"}`,children:t})}function Bn({children:t}){return y.jsx("div",{className:"mx-auto px-6 min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]",children:t})}const Jl=({src:t,className:e="",imgClass:n="",alt:i="image"})=>{const[r,s]=z.useState(!1);return y.jsxs(y.Fragment,{children:[!r&&y.jsx("div",{className:`flex justify-center items-center ${e}`,children:y.jsx("img",{className:"w-16 h-16",src:"images/loading.gif"})}),y.jsx("img",{className:`${e} ${n}`,src:t,alt:i,style:{display:r?"block":"none"},onLoad:()=>s(!0)})]})};function kv({text:t,onClick:e,loading:n,loadingText:i,variant:r="primary"}){return y.jsx("button",{onClick:e,className:`font-normal hover:font-bold mt-6 text-lg px-6 py-3 rounded-full transform transition-transform duration-300 inline-flex items-center gap-2 ${r=="primary"&&"bg-primary-500 hover:bg-primary-600 text-white"} ${r=="white"&&"bg-white hover:bg-white text-primary-500"}`,disabled:n,children:n?y.jsxs(y.Fragment,{children:[y.jsx("img",{className:"w-7 h-7",src:"images/loading.gif"}),i]}):y.jsx("p",{children:t})})}function H1(){return y.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"})})}function V1(){return y.jsx("svg",{className:"w-5 h-5 sm:w-8 sm:h-8",viewBox:"-0.5 0 15 15",children:y.jsx("path",{className:"fill-current text-pumpkin",fillRule:"evenodd",d:"M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z",transform:"translate(-61 -152)"})})}function G1(){return y.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 1920 1920",children:y.jsx("path",{d:"M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z",fillRule:"evenodd"})})}function j1(){return y.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 32 32",version:"1.1",children:y.jsx("path",{d:"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"})})}function W1(){return y.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:y.jsx("path",{d:`M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7\r
   l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8\r
   c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64\r
   c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z`})})}function X1(){return y.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:y.jsxs("g",{children:[y.jsx("path",{className:"st0",d:`M500.176,55.798c0,0-21.734-7.434-39.55-11.967C411.686,31.369,308.823,24.727,256,24.727\r
		S100.314,31.369,51.374,43.831c-17.816,4.533-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835\r
		c0.757,8.596,7.957,15.201,16.581,15.201h84.786c8.507,0,15.643-6.416,16.554-14.878l4.28-39.973\r
		c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.485-6.182,110.081-6.182c41.588,0,110.081,6.182,110.081,6.182\r
		c7.948,0.676,14.301,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.544,14.878h84.778\r
		c8.633,0,15.833-6.605,16.59-15.201l8.507-97.835C512.621,65.322,507.718,58.078,500.176,55.798z`}),y.jsx("path",{className:"st0",d:`M357.502,136.629h-55.365v46.137h-92.274v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618\r
		c0,32.296,0,129.95,0,129.95c0,7.218,5.858,13.076,13.075,13.076h416.768c7.219,0,13.075-5.858,13.075-13.076\r
		c0,0,0-97.654,0-129.95C366.729,256.586,357.502,136.629,357.502,136.629z M300.425,388.672c7.435-7.434,19.5-7.434,26.934,0\r
		c7.426,7.435,7.426,19.491,0,26.935c-7.434,7.425-19.499,7.425-26.934,0C292.991,408.163,292.991,396.106,300.425,388.672z\r
		 M327.359,299.812c-7.434,7.425-19.499,7.425-26.934-0.008c-7.434-7.434-7.434-19.5,0-26.926c7.435-7.443,19.5-7.443,26.934-0.009\r
		C334.785,280.303,334.785,292.369,327.359,299.812z M337.876,363.288c-10.517-0.009-19.041-8.534-19.041-19.05\r
		c0-10.516,8.524-19.041,19.041-19.041c10.507,0,19.041,8.525,19.049,19.041C356.917,354.753,348.383,363.278,337.876,363.288z\r
		 M255.991,407.081c10.516,0,19.04,8.526,19.04,19.041c0,10.507-8.524,19.041-19.04,19.041c-10.516,0-19.041-8.534-19.041-19.041\r
		C236.95,415.607,245.475,407.081,255.991,407.081z M255.991,281.394c-10.516,0-19.041-8.525-19.041-19.041\r
		c0-10.517,8.524-19.041,19.041-19.041c10.516,0,19.04,8.524,19.04,19.041C275.031,272.869,266.507,281.394,255.991,281.394z\r
		 M184.632,388.672c7.424-7.434,19.491-7.434,26.925,0c7.425,7.435,7.425,19.491,0.009,26.926c-7.443,7.434-19.51,7.434-26.934,0\r
		C177.188,408.163,177.188,396.106,184.632,388.672z M184.632,299.804c-7.444-7.434-7.444-19.5,0-26.926\r
		c7.424-7.443,19.491-7.443,26.925,0c7.425,7.425,7.425,19.491,0,26.926C204.123,307.237,192.056,307.237,184.632,299.804z\r
		 M174.115,325.197c10.507,0,19.032,8.525,19.032,19.041c0,10.516-8.524,19.041-19.032,19.041c-10.525,0-19.049-8.525-19.041-19.041\r
		C155.066,333.722,163.59,325.197,174.115,325.197z`})]})})}function $1(){return y.jsx("svg",{className:"w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 20 20",version:"1.1",children:y.jsx("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:y.jsx("g",{className:"fill-current text-pumpkin",id:"Dribbble-Light-Preview",transform:"translate(-300.000000, -7599.000000)",children:y.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:y.jsx("path",{d:"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439",id:"whatsapp-[#128]"})})})})})}function zv(){return y.jsxs("div",{className:"lg:text-[1.2rem] flex flex-col gap-2",children:[y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(G1,{}),y.jsx("a",{href:"mailto:nagham.qarqamaz.kp@gmail.com",className:"hover:underline",children:"nagham.qarqamaz.kp@gmail.com"})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(X1,{}),y.jsx("a",{href:"tel:+963992803522",className:"hover:underline",children:"+963 992 803 522"})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx($1,{}),y.jsx("a",{href:"https://wa.me/+963992803522",className:"hover:underline",target:"_blank",children:"+963 992 803 522"})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(W1,{}),y.jsxs("div",{className:"text-start",children:[y.jsx("a",{href:"https://www.google.com/maps/place/Latakia,+Syria",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"Syria, Latakia"}),y.jsx("span",{className:"text-pumpkin lg:text-[1.2rem] italic ml-2",children:"(Willing To Relocate)"})]})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(V1,{}),y.jsx("div",{children:"November 10th, 1999"})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(j1,{}),y.jsx("a",{href:"https://www.linkedin.com/in/nagham-qarqamaz/",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/in/nagham-qarqamaz"})]}),y.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[y.jsx(H1,{}),y.jsx("a",{href:"https://codeforces.com/profile/Nagham_Qarqamaz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/profile/Nagham_Qarqamaz"})]})]})}const Y1=()=>{const{theme:t}=Wr(),[e,n]=z.useState(!1),i=async()=>{n(!0);try{const r=document.createElement("a");r.href="resume/Nagham Qarqamaz Resume.pdf",r.download="Nagham Qarqamaz Resume.pdf",document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(r){console.error("Error downloading file:",r)}finally{setTimeout(()=>n(!1),2e3)}};return y.jsx("div",{className:"bg-[url('/images/cover.jpg')] bg-cover",children:y.jsxs("div",{className:`${t==="light"?"bg-[#FFFFFFDD]":"bg-[#000000DD]"} min-h-screen relative`,children:[y.jsx("img",{className:"absolute bottom-0 w-full h-40",src:"images/wave.png"}),y.jsx(Bn,{children:y.jsxs("div",{className:"font-bold relative min-h-screen flex flex-col sm:flex-row justify-between items-center gap-8 py-20",children:[y.jsx("div",{className:"order-1 sm:order-0",children:y.jsx(Ql,{children:y.jsx(zv,{})})}),y.jsx("div",{className:"flex-grow order-0 sm:order-1",children:y.jsx(Zl,{children:y.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[y.jsx(ei,{children:y.jsx(Jl,{className:"mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/sketch.png"})}),y.jsx("h1",{className:"text-[1.8rem] lg:text-[3rem] mb-2",children:"Nagham Qarqamaz"}),y.jsx("p",{className:"lg:text-[1.3rem]",children:"Software Engineer & Full-Stack Developer"}),y.jsx(kv,{text:"Download Resume",onClick:i,loading:e,loadingText:"Downloading..."})]})})})]})})]})})};var Bv={exports:{}};(function(t,e){(function(n,i){t.exports=i(z)})(typeof self<"u"?self:N_,n=>(()=>{var i={7403:(o,c,l)=>{l.d(c,{default:()=>I});var u=l(4087),d=l.n(u);const f=function(V){return new RegExp(/<[a-z][\s\S]*>/i).test(V)},p=function(V,H){return Math.floor(Math.random()*(H-V+1))+V};var v="TYPE_CHARACTER",x="REMOVE_CHARACTER",m="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",_="CALL_FUNCTION",S="ADD_HTML_TAG_ELEMENT",b="CHANGE_DELETE_SPEED",A="CHANGE_DELAY",C="CHANGE_CURSOR",L="PASTE_STRING",w="HTML_TAG";function M(V){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},M(V)}function R(V,H){var Z=Object.keys(V);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(V);H&&(se=se.filter(function(De){return Object.getOwnPropertyDescriptor(V,De).enumerable})),Z.push.apply(Z,se)}return Z}function B(V){for(var H=1;H<arguments.length;H++){var Z=arguments[H]!=null?arguments[H]:{};H%2?R(Object(Z),!0).forEach(function(se){G(V,se,Z[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(Z)):R(Object(Z)).forEach(function(se){Object.defineProperty(V,se,Object.getOwnPropertyDescriptor(Z,se))})}return V}function k(V){return function(H){if(Array.isArray(H))return Y(H)}(V)||function(H){if(typeof Symbol<"u"&&H[Symbol.iterator]!=null||H["@@iterator"]!=null)return Array.from(H)}(V)||function(H,Z){if(H){if(typeof H=="string")return Y(H,Z);var se=Object.prototype.toString.call(H).slice(8,-1);return se==="Object"&&H.constructor&&(se=H.constructor.name),se==="Map"||se==="Set"?Array.from(H):se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se)?Y(H,Z):void 0}}(V)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Y(V,H){(H==null||H>V.length)&&(H=V.length);for(var Z=0,se=new Array(H);Z<H;Z++)se[Z]=V[Z];return se}function q(V,H){for(var Z=0;Z<H.length;Z++){var se=H[Z];se.enumerable=se.enumerable||!1,se.configurable=!0,"value"in se&&(se.writable=!0),Object.defineProperty(V,Q(se.key),se)}}function G(V,H,Z){return(H=Q(H))in V?Object.defineProperty(V,H,{value:Z,enumerable:!0,configurable:!0,writable:!0}):V[H]=Z,V}function Q(V){var H=function(Z,se){if(M(Z)!=="object"||Z===null)return Z;var De=Z[Symbol.toPrimitive];if(De!==void 0){var P=De.call(Z,"string");if(M(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Z)}(V);return M(H)==="symbol"?H:String(H)}const I=function(){function V(se,De){var P=this;if(function(K,re){if(!(K instanceof re))throw new TypeError("Cannot call a class as a function")}(this,V),G(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),G(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),G(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),G(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),G(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),G(this,"stop",function(){return P.state.eventLoop&&((0,u.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),G(this,"pauseFor",function(K){return P.addEventToQueue(g,{ms:K}),P}),G(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(K){P.typeString(K).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),G(this,"typeString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(K))return P.typeOutHTMLString(K,re);if(K){var _e=(P.options||{}).stringSplitter,Ee=typeof _e=="function"?_e(K):K.split("");P.typeCharacters(Ee,re)}return P}),G(this,"pasteString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(K)?P.typeOutHTMLString(K,re,!0):(K&&P.addEventToQueue(L,{character:K,node:re}),P)}),G(this,"typeOutHTMLString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,_e=arguments.length>2?arguments[2]:void 0,Ee=function(tt){var Ge=document.createElement("div");return Ge.innerHTML=tt,Ge.childNodes}(K);if(Ee.length>0)for(var ye=0;ye<Ee.length;ye++){var Ve=Ee[ye],D=Ve.innerHTML;Ve&&Ve.nodeType!==3?(Ve.innerHTML="",P.addEventToQueue(S,{node:Ve,parentNode:re}),_e?P.pasteString(D,Ve):P.typeString(D,Ve)):Ve.textContent&&(_e?P.pasteString(Ve.textContent,re):P.typeString(Ve.textContent,re))}return P}),G(this,"deleteAll",function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(m,{speed:K}),P}),G(this,"changeDeleteSpeed",function(K){if(!K)throw new Error("Must provide new delete speed");return P.addEventToQueue(b,{speed:K}),P}),G(this,"changeDelay",function(K){if(!K)throw new Error("Must provide new delay");return P.addEventToQueue(A,{delay:K}),P}),G(this,"changeCursor",function(K){if(!K)throw new Error("Must provide new cursor");return P.addEventToQueue(C,{cursor:K}),P}),G(this,"deleteChars",function(K){if(!K)throw new Error("Must provide amount of characters to delete");for(var re=0;re<K;re++)P.addEventToQueue(x);return P}),G(this,"callFunction",function(K,re){if(!K||typeof K!="function")throw new Error("Callback must be a function");return P.addEventToQueue(_,{cb:K,thisArg:re}),P}),G(this,"typeCharacters",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(_e){P.addEventToQueue(v,{character:_e,node:re})}),P}),G(this,"removeCharacters",function(K){if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(){P.addEventToQueue(x)}),P}),G(this,"addEventToQueue",function(K,re){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(K,re,_e,"eventQueue")}),G(this,"addReverseCalledEvent",function(K,re){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(K,re,_e,"reverseCalledEvents"):P}),G(this,"addEventToStateProperty",function(K,re){var _e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Ee=arguments.length>3?arguments[3]:void 0,ye={eventName:K,eventArgs:re||{}};return P.state[Ee]=_e?[ye].concat(k(P.state[Ee])):[].concat(k(P.state[Ee]),[ye]),P}),G(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var K=Date.now(),re=K-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=k(P.state.calledEvents),P.state.calledEvents=[],P.options=B({},P.state.initialOptions)}if(P.state.eventLoop=d()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(K<P.state.pauseUntil)return;P.state.pauseUntil=null}var _e,Ee=k(P.state.eventQueue),ye=Ee.shift();if(!(re<=(_e=ye.eventName===h||ye.eventName===x?P.options.deleteSpeed==="natural"?p(40,80):P.options.deleteSpeed:P.options.delay==="natural"?p(120,160):P.options.delay))){var Ve=ye.eventName,D=ye.eventArgs;switch(P.logInDevMode({currentEvent:ye,state:P.state,delay:_e}),Ve){case L:case v:var tt=D.character,Ge=D.node,$e=document.createTextNode(tt),we=$e;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(we=P.options.onCreateTextNode(tt,$e)),we&&(Ge?Ge.appendChild(we):P.state.elements.wrapper.appendChild(we)),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:"TEXT_NODE",character:tt,node:we}]);break;case x:Ee.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case g:var ft=ye.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(ft);break;case _:var be=ye.eventArgs,Ie=be.cb,N=be.thisArg;Ie.call(N,{elements:P.state.elements});break;case S:var E=ye.eventArgs,$=E.node,ee=E.parentNode;ee?ee.appendChild($):P.state.elements.wrapper.appendChild($),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:w,node:$,parentNode:ee||P.state.elements.wrapper}]);break;case m:var ie=P.state.visibleNodes,te=D.speed,Ae=[];te&&Ae.push({eventName:b,eventArgs:{speed:te,temp:!0}});for(var fe=0,ge=ie.length;fe<ge;fe++)Ae.push({eventName:h,eventArgs:{removingCharacterNode:!1}});te&&Ae.push({eventName:b,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),Ee.unshift.apply(Ee,Ae);break;case h:var Fe=ye.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var le=P.state.visibleNodes.pop(),me=le.type,ze=le.node,Re=le.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:ze,character:Re}),ze&&ze.parentNode.removeChild(ze),me===w&&Fe&&Ee.unshift({eventName:h,eventArgs:{}})}break;case b:P.options.deleteSpeed=ye.eventArgs.speed;break;case A:P.options.delay=ye.eventArgs.delay;break;case C:P.options.cursor=ye.eventArgs.cursor,P.state.elements.cursor.innerHTML=ye.eventArgs.cursor}P.options.loop&&(ye.eventName===h||ye.eventArgs&&ye.eventArgs.temp||(P.state.calledEvents=[].concat(k(P.state.calledEvents),[ye]))),P.state.eventQueue=Ee,P.state.lastFrameTime=K}}}),se)if(typeof se=="string"){var oe=document.querySelector(se);if(!oe)throw new Error("Could not find container element");this.state.elements.container=oe}else this.state.elements.container=se;De&&(this.options=B(B({},this.options),De)),this.state.initialOptions=B({},this.options),this.init()}var H,Z;return H=V,(Z=[{key:"init",value:function(){var se,De;this.setupWrapperElement(),this.addEventToQueue(C,{cursor:this.options.cursor},!0),this.addEventToQueue(m,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(se=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(De=document.createElement("style")).appendChild(document.createTextNode(se)),document.head.appendChild(De),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(se){this.options.devMode&&console.log(se)}}])&&q(H.prototype,Z),Object.defineProperty(H,"prototype",{writable:!1}),V}()},8552:(o,c,l)=>{var u=l(852)(l(5639),"DataView");o.exports=u},1989:(o,c,l)=>{var u=l(1789),d=l(401),f=l(7667),p=l(1327),v=l(1866);function x(m){var h=-1,g=m==null?0:m.length;for(this.clear();++h<g;){var _=m[h];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=p,x.prototype.set=v,o.exports=x},8407:(o,c,l)=>{var u=l(7040),d=l(4125),f=l(2117),p=l(7518),v=l(4705);function x(m){var h=-1,g=m==null?0:m.length;for(this.clear();++h<g;){var _=m[h];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=p,x.prototype.set=v,o.exports=x},7071:(o,c,l)=>{var u=l(852)(l(5639),"Map");o.exports=u},3369:(o,c,l)=>{var u=l(4785),d=l(1285),f=l(6e3),p=l(9916),v=l(5265);function x(m){var h=-1,g=m==null?0:m.length;for(this.clear();++h<g;){var _=m[h];this.set(_[0],_[1])}}x.prototype.clear=u,x.prototype.delete=d,x.prototype.get=f,x.prototype.has=p,x.prototype.set=v,o.exports=x},3818:(o,c,l)=>{var u=l(852)(l(5639),"Promise");o.exports=u},8525:(o,c,l)=>{var u=l(852)(l(5639),"Set");o.exports=u},8668:(o,c,l)=>{var u=l(3369),d=l(619),f=l(2385);function p(v){var x=-1,m=v==null?0:v.length;for(this.__data__=new u;++x<m;)this.add(v[x])}p.prototype.add=p.prototype.push=d,p.prototype.has=f,o.exports=p},6384:(o,c,l)=>{var u=l(8407),d=l(7465),f=l(3779),p=l(7599),v=l(4758),x=l(4309);function m(h){var g=this.__data__=new u(h);this.size=g.size}m.prototype.clear=d,m.prototype.delete=f,m.prototype.get=p,m.prototype.has=v,m.prototype.set=x,o.exports=m},2705:(o,c,l)=>{var u=l(5639).Symbol;o.exports=u},1149:(o,c,l)=>{var u=l(5639).Uint8Array;o.exports=u},577:(o,c,l)=>{var u=l(852)(l(5639),"WeakMap");o.exports=u},4963:o=>{o.exports=function(c,l){for(var u=-1,d=c==null?0:c.length,f=0,p=[];++u<d;){var v=c[u];l(v,u,c)&&(p[f++]=v)}return p}},4636:(o,c,l)=>{var u=l(2545),d=l(5694),f=l(1469),p=l(4144),v=l(5776),x=l(6719),m=Object.prototype.hasOwnProperty;o.exports=function(h,g){var _=f(h),S=!_&&d(h),b=!_&&!S&&p(h),A=!_&&!S&&!b&&x(h),C=_||S||b||A,L=C?u(h.length,String):[],w=L.length;for(var M in h)!g&&!m.call(h,M)||C&&(M=="length"||b&&(M=="offset"||M=="parent")||A&&(M=="buffer"||M=="byteLength"||M=="byteOffset")||v(M,w))||L.push(M);return L}},2488:o=>{o.exports=function(c,l){for(var u=-1,d=l.length,f=c.length;++u<d;)c[f+u]=l[u];return c}},2908:o=>{o.exports=function(c,l){for(var u=-1,d=c==null?0:c.length;++u<d;)if(l(c[u],u,c))return!0;return!1}},8470:(o,c,l)=>{var u=l(7813);o.exports=function(d,f){for(var p=d.length;p--;)if(u(d[p][0],f))return p;return-1}},8866:(o,c,l)=>{var u=l(2488),d=l(1469);o.exports=function(f,p,v){var x=p(f);return d(f)?x:u(x,v(f))}},4239:(o,c,l)=>{var u=l(2705),d=l(9607),f=l(2333),p=u?u.toStringTag:void 0;o.exports=function(v){return v==null?v===void 0?"[object Undefined]":"[object Null]":p&&p in Object(v)?d(v):f(v)}},9454:(o,c,l)=>{var u=l(4239),d=l(7005);o.exports=function(f){return d(f)&&u(f)=="[object Arguments]"}},939:(o,c,l)=>{var u=l(2492),d=l(7005);o.exports=function f(p,v,x,m,h){return p===v||(p==null||v==null||!d(p)&&!d(v)?p!=p&&v!=v:u(p,v,x,m,f,h))}},2492:(o,c,l)=>{var u=l(6384),d=l(7114),f=l(8351),p=l(6096),v=l(4160),x=l(1469),m=l(4144),h=l(6719),g="[object Arguments]",_="[object Array]",S="[object Object]",b=Object.prototype.hasOwnProperty;o.exports=function(A,C,L,w,M,R){var B=x(A),k=x(C),Y=B?_:v(A),q=k?_:v(C),G=(Y=Y==g?S:Y)==S,Q=(q=q==g?S:q)==S,I=Y==q;if(I&&m(A)){if(!m(C))return!1;B=!0,G=!1}if(I&&!G)return R||(R=new u),B||h(A)?d(A,C,L,w,M,R):f(A,C,Y,L,w,M,R);if(!(1&L)){var V=G&&b.call(A,"__wrapped__"),H=Q&&b.call(C,"__wrapped__");if(V||H){var Z=V?A.value():A,se=H?C.value():C;return R||(R=new u),M(Z,se,L,w,R)}}return!!I&&(R||(R=new u),p(A,C,L,w,M,R))}},8458:(o,c,l)=>{var u=l(3560),d=l(5346),f=l(3218),p=l(346),v=/^\[object .+?Constructor\]$/,x=Function.prototype,m=Object.prototype,h=x.toString,g=m.hasOwnProperty,_=RegExp("^"+h.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");o.exports=function(S){return!(!f(S)||d(S))&&(u(S)?_:v).test(p(S))}},8749:(o,c,l)=>{var u=l(4239),d=l(1780),f=l(7005),p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Arguments]"]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p["[object Map]"]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p["[object Set]"]=p["[object String]"]=p["[object WeakMap]"]=!1,o.exports=function(v){return f(v)&&d(v.length)&&!!p[u(v)]}},280:(o,c,l)=>{var u=l(5726),d=l(6916),f=Object.prototype.hasOwnProperty;o.exports=function(p){if(!u(p))return d(p);var v=[];for(var x in Object(p))f.call(p,x)&&x!="constructor"&&v.push(x);return v}},2545:o=>{o.exports=function(c,l){for(var u=-1,d=Array(c);++u<c;)d[u]=l(u);return d}},1717:o=>{o.exports=function(c){return function(l){return c(l)}}},4757:o=>{o.exports=function(c,l){return c.has(l)}},4429:(o,c,l)=>{var u=l(5639)["__core-js_shared__"];o.exports=u},7114:(o,c,l)=>{var u=l(8668),d=l(2908),f=l(4757);o.exports=function(p,v,x,m,h,g){var _=1&x,S=p.length,b=v.length;if(S!=b&&!(_&&b>S))return!1;var A=g.get(p),C=g.get(v);if(A&&C)return A==v&&C==p;var L=-1,w=!0,M=2&x?new u:void 0;for(g.set(p,v),g.set(v,p);++L<S;){var R=p[L],B=v[L];if(m)var k=_?m(B,R,L,v,p,g):m(R,B,L,p,v,g);if(k!==void 0){if(k)continue;w=!1;break}if(M){if(!d(v,function(Y,q){if(!f(M,q)&&(R===Y||h(R,Y,x,m,g)))return M.push(q)})){w=!1;break}}else if(R!==B&&!h(R,B,x,m,g)){w=!1;break}}return g.delete(p),g.delete(v),w}},8351:(o,c,l)=>{var u=l(2705),d=l(1149),f=l(7813),p=l(7114),v=l(8776),x=l(1814),m=u?u.prototype:void 0,h=m?m.valueOf:void 0;o.exports=function(g,_,S,b,A,C,L){switch(S){case"[object DataView]":if(g.byteLength!=_.byteLength||g.byteOffset!=_.byteOffset)return!1;g=g.buffer,_=_.buffer;case"[object ArrayBuffer]":return!(g.byteLength!=_.byteLength||!C(new d(g),new d(_)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+g,+_);case"[object Error]":return g.name==_.name&&g.message==_.message;case"[object RegExp]":case"[object String]":return g==_+"";case"[object Map]":var w=v;case"[object Set]":var M=1&b;if(w||(w=x),g.size!=_.size&&!M)return!1;var R=L.get(g);if(R)return R==_;b|=2,L.set(g,_);var B=p(w(g),w(_),b,A,C,L);return L.delete(g),B;case"[object Symbol]":if(h)return h.call(g)==h.call(_)}return!1}},6096:(o,c,l)=>{var u=l(8234),d=Object.prototype.hasOwnProperty;o.exports=function(f,p,v,x,m,h){var g=1&v,_=u(f),S=_.length;if(S!=u(p).length&&!g)return!1;for(var b=S;b--;){var A=_[b];if(!(g?A in p:d.call(p,A)))return!1}var C=h.get(f),L=h.get(p);if(C&&L)return C==p&&L==f;var w=!0;h.set(f,p),h.set(p,f);for(var M=g;++b<S;){var R=f[A=_[b]],B=p[A];if(x)var k=g?x(B,R,A,p,f,h):x(R,B,A,f,p,h);if(!(k===void 0?R===B||m(R,B,v,x,h):k)){w=!1;break}M||(M=A=="constructor")}if(w&&!M){var Y=f.constructor,q=p.constructor;Y==q||!("constructor"in f)||!("constructor"in p)||typeof Y=="function"&&Y instanceof Y&&typeof q=="function"&&q instanceof q||(w=!1)}return h.delete(f),h.delete(p),w}},1957:(o,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;o.exports=u},8234:(o,c,l)=>{var u=l(8866),d=l(9551),f=l(3674);o.exports=function(p){return u(p,f,d)}},5050:(o,c,l)=>{var u=l(7019);o.exports=function(d,f){var p=d.__data__;return u(f)?p[typeof f=="string"?"string":"hash"]:p.map}},852:(o,c,l)=>{var u=l(8458),d=l(7801);o.exports=function(f,p){var v=d(f,p);return u(v)?v:void 0}},9607:(o,c,l)=>{var u=l(2705),d=Object.prototype,f=d.hasOwnProperty,p=d.toString,v=u?u.toStringTag:void 0;o.exports=function(x){var m=f.call(x,v),h=x[v];try{x[v]=void 0;var g=!0}catch{}var _=p.call(x);return g&&(m?x[v]=h:delete x[v]),_}},9551:(o,c,l)=>{var u=l(4963),d=l(479),f=Object.prototype.propertyIsEnumerable,p=Object.getOwnPropertySymbols,v=p?function(x){return x==null?[]:(x=Object(x),u(p(x),function(m){return f.call(x,m)}))}:d;o.exports=v},4160:(o,c,l)=>{var u=l(8552),d=l(7071),f=l(3818),p=l(8525),v=l(577),x=l(4239),m=l(346),h="[object Map]",g="[object Promise]",_="[object Set]",S="[object WeakMap]",b="[object DataView]",A=m(u),C=m(d),L=m(f),w=m(p),M=m(v),R=x;(u&&R(new u(new ArrayBuffer(1)))!=b||d&&R(new d)!=h||f&&R(f.resolve())!=g||p&&R(new p)!=_||v&&R(new v)!=S)&&(R=function(B){var k=x(B),Y=k=="[object Object]"?B.constructor:void 0,q=Y?m(Y):"";if(q)switch(q){case A:return b;case C:return h;case L:return g;case w:return _;case M:return S}return k}),o.exports=R},7801:o=>{o.exports=function(c,l){return c==null?void 0:c[l]}},1789:(o,c,l)=>{var u=l(4536);o.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:o=>{o.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(o,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;o.exports=function(f){var p=this.__data__;if(u){var v=p[f];return v==="__lodash_hash_undefined__"?void 0:v}return d.call(p,f)?p[f]:void 0}},1327:(o,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;o.exports=function(f){var p=this.__data__;return u?p[f]!==void 0:d.call(p,f)}},1866:(o,c,l)=>{var u=l(4536);o.exports=function(d,f){var p=this.__data__;return this.size+=this.has(d)?0:1,p[d]=u&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:o=>{var c=/^(?:0|[1-9]\d*)$/;o.exports=function(l,u){var d=typeof l;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},7019:o=>{o.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(o,c,l)=>{var u,d=l(4429),f=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";o.exports=function(p){return!!f&&f in p}},5726:o=>{var c=Object.prototype;o.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},7040:o=>{o.exports=function(){this.__data__=[],this.size=0}},4125:(o,c,l)=>{var u=l(8470),d=Array.prototype.splice;o.exports=function(f){var p=this.__data__,v=u(p,f);return!(v<0||(v==p.length-1?p.pop():d.call(p,v,1),--this.size,0))}},2117:(o,c,l)=>{var u=l(8470);o.exports=function(d){var f=this.__data__,p=u(f,d);return p<0?void 0:f[p][1]}},7518:(o,c,l)=>{var u=l(8470);o.exports=function(d){return u(this.__data__,d)>-1}},4705:(o,c,l)=>{var u=l(8470);o.exports=function(d,f){var p=this.__data__,v=u(p,d);return v<0?(++this.size,p.push([d,f])):p[v][1]=f,this}},4785:(o,c,l)=>{var u=l(1989),d=l(8407),f=l(7071);o.exports=function(){this.size=0,this.__data__={hash:new u,map:new(f||d),string:new u}}},1285:(o,c,l)=>{var u=l(5050);o.exports=function(d){var f=u(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(o,c,l)=>{var u=l(5050);o.exports=function(d){return u(this,d).get(d)}},9916:(o,c,l)=>{var u=l(5050);o.exports=function(d){return u(this,d).has(d)}},5265:(o,c,l)=>{var u=l(5050);o.exports=function(d,f){var p=u(this,d),v=p.size;return p.set(d,f),this.size+=p.size==v?0:1,this}},8776:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d,f){u[++l]=[f,d]}),u}},4536:(o,c,l)=>{var u=l(852)(Object,"create");o.exports=u},6916:(o,c,l)=>{var u=l(5569)(Object.keys,Object);o.exports=u},1167:(o,c,l)=>{o=l.nmd(o);var u=l(1957),d=c&&!c.nodeType&&c,f=d&&o&&!o.nodeType&&o,p=f&&f.exports===d&&u.process,v=function(){try{return f&&f.require&&f.require("util").types||p&&p.binding&&p.binding("util")}catch{}}();o.exports=v},2333:o=>{var c=Object.prototype.toString;o.exports=function(l){return c.call(l)}},5569:o=>{o.exports=function(c,l){return function(u){return c(l(u))}}},5639:(o,c,l)=>{var u=l(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")();o.exports=f},619:o=>{o.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:o=>{o.exports=function(c){return this.__data__.has(c)}},1814:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d){u[++l]=d}),u}},7465:(o,c,l)=>{var u=l(8407);o.exports=function(){this.__data__=new u,this.size=0}},3779:o=>{o.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},7599:o=>{o.exports=function(c){return this.__data__.get(c)}},4758:o=>{o.exports=function(c){return this.__data__.has(c)}},4309:(o,c,l)=>{var u=l(8407),d=l(7071),f=l(3369);o.exports=function(p,v){var x=this.__data__;if(x instanceof u){var m=x.__data__;if(!d||m.length<199)return m.push([p,v]),this.size=++x.size,this;x=this.__data__=new f(m)}return x.set(p,v),this.size=x.size,this}},346:o=>{var c=Function.prototype.toString;o.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:o=>{o.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(o,c,l)=>{var u=l(9454),d=l(7005),f=Object.prototype,p=f.hasOwnProperty,v=f.propertyIsEnumerable,x=u(function(){return arguments}())?u:function(m){return d(m)&&p.call(m,"callee")&&!v.call(m,"callee")};o.exports=x},1469:o=>{var c=Array.isArray;o.exports=c},8612:(o,c,l)=>{var u=l(3560),d=l(1780);o.exports=function(f){return f!=null&&d(f.length)&&!u(f)}},4144:(o,c,l)=>{o=l.nmd(o);var u=l(5639),d=l(5062),f=c&&!c.nodeType&&c,p=f&&o&&!o.nodeType&&o,v=p&&p.exports===f?u.Buffer:void 0,x=(v?v.isBuffer:void 0)||d;o.exports=x},8446:(o,c,l)=>{var u=l(939);o.exports=function(d,f){return u(d,f)}},3560:(o,c,l)=>{var u=l(4239),d=l(3218);o.exports=function(f){if(!d(f))return!1;var p=u(f);return p=="[object Function]"||p=="[object GeneratorFunction]"||p=="[object AsyncFunction]"||p=="[object Proxy]"}},1780:o=>{o.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:o=>{o.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:o=>{o.exports=function(c){return c!=null&&typeof c=="object"}},6719:(o,c,l)=>{var u=l(8749),d=l(1717),f=l(1167),p=f&&f.isTypedArray,v=p?d(p):u;o.exports=v},3674:(o,c,l)=>{var u=l(4636),d=l(280),f=l(8612);o.exports=function(p){return f(p)?u(p):d(p)}},479:o=>{o.exports=function(){return[]}},5062:o=>{o.exports=function(){return!1}},75:function(o){(function(){var c,l,u,d,f,p;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(c()-f)/1e6},l=process.hrtime,d=(c=function(){var v;return 1e9*(v=l())[0]+v[1]})(),p=1e9*process.uptime(),f=d-p):Date.now?(o.exports=function(){return Date.now()-u},u=Date.now()):(o.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(o,c,l)=>{for(var u=l(75),d=typeof window>"u"?l.g:window,f=["moz","webkit"],p="AnimationFrame",v=d["request"+p],x=d["cancel"+p]||d["cancelRequest"+p],m=0;!v&&m<f.length;m++)v=d[f[m]+"Request"+p],x=d[f[m]+"Cancel"+p]||d[f[m]+"CancelRequest"+p];if(!v||!x){var h=0,g=0,_=[];v=function(S){if(_.length===0){var b=u(),A=Math.max(0,16.666666666666668-(b-h));h=A+b,setTimeout(function(){var C=_.slice(0);_.length=0;for(var L=0;L<C.length;L++)if(!C[L].cancelled)try{C[L].callback(h)}catch(w){setTimeout(function(){throw w},0)}},Math.round(A))}return _.push({handle:++g,callback:S,cancelled:!1}),g},x=function(S){for(var b=0;b<_.length;b++)_[b].handle===S&&(_[b].cancelled=!0)}}o.exports=function(S){return v.call(d,S)},o.exports.cancel=function(){x.apply(d,arguments)},o.exports.polyfill=function(S){S||(S=d),S.requestAnimationFrame=v,S.cancelAnimationFrame=x}},8156:o=>{o.exports=n}},r={};function s(o){var c=r[o];if(c!==void 0)return c.exports;var l=r[o]={id:o,loaded:!1,exports:{}};return i[o].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.n=o=>{var c=o&&o.__esModule?()=>o.default:()=>o;return s.d(c,{a:c}),c},s.d=(o,c)=>{for(var l in c)s.o(c,l)&&!s.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:c[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(o,c)=>Object.prototype.hasOwnProperty.call(o,c),s.nmd=o=>(o.paths=[],o.children||(o.children=[]),o);var a={};return(()=>{s.d(a,{default:()=>_});var o=s(8156),c=s.n(o),l=s(7403),u=s(8446),d=s.n(u);function f(S){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(S)}function p(S,b){for(var A=0;A<b.length;A++){var C=b[A];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(S,h(C.key),C)}}function v(S,b){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,C){return A.__proto__=C,A},v(S,b)}function x(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function m(S){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},m(S)}function h(S){var b=function(A,C){if(f(A)!=="object"||A===null)return A;var L=A[Symbol.toPrimitive];if(L!==void 0){var w=L.call(A,"string");if(f(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}(S);return f(b)==="symbol"?b:String(b)}var g=function(S){(function(R,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(B&&B.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),B&&v(R,B)})(M,S);var b,A,C,L,w=(C=M,L=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var R,B=m(C);if(L){var k=m(this).constructor;R=Reflect.construct(B,arguments,k)}else R=B.apply(this,arguments);return function(Y,q){if(q&&(f(q)==="object"||typeof q=="function"))return q;if(q!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(Y)}(this,R)});function M(){var R,B,k,Y;(function(I,V){if(!(I instanceof V))throw new TypeError("Cannot call a class as a function")})(this,M);for(var q=arguments.length,G=new Array(q),Q=0;Q<q;Q++)G[Q]=arguments[Q];return B=x(R=w.call.apply(w,[this].concat(G))),Y={instance:null},(k=h(k="state"))in B?Object.defineProperty(B,k,{value:Y,enumerable:!0,configurable:!0,writable:!0}):B[k]=Y,R}return b=M,(A=[{key:"componentDidMount",value:function(){var R=this,B=new l.default(this.typewriter,this.props.options);this.setState({instance:B},function(){var k=R.props.onInit;k&&k(B)})}},{key:"componentDidUpdate",value:function(R){d()(this.props.options,R.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var R=this,B=this.props.component;return c().createElement(B,{ref:function(k){return R.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&p(b.prototype,A),Object.defineProperty(b,"prototype",{writable:!1}),M}(o.Component);g.defaultProps={component:"div"};const _=g})(),a.default})())})(Bv);var q1=Bv.exports;const K1=D_(q1);function Z1({text:t}){const{theme:e}=Wr();return y.jsx("div",{className:"mb-4 w-full flex justify-center",children:y.jsx("h2",{className:`w-fit text-[13vw] sm:text-[3rem] font-bold ${e=="light"?"text-primary":"bg-gradient-to-r text-transparent bg-clip-text from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"}`,children:t})})}function ii({title:t,children:e,glow:n=!0}){const{theme:i}=Wr();return y.jsx("div",{className:"py-20 text-center",children:y.jsxs(ei,{children:[y.jsx(Z1,{text:t}),y.jsx("div",{className:`mt-8 ${n&&i=="dark"&&"shadow-pumpkin overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]"}`,children:e})]})})}const Jp=["<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>","<li class='custom-bullet pb-3'>Over 3+ years of experience as a <span class='text-pumpkin font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture for a while, currently focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>","<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin font-bold'>problem-solving</span> and code complexity analysis.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through multiple projects.</li>","<li class='custom-bullet pb-3'>Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team.</li>"];function Q1(){const[t,e]=aa({threshold:.1});return y.jsx(ii,{title:"About Me",children:y.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-12",children:[y.jsxs("div",{ref:t,className:"order-1 md:order-0 flex-grow self-start text-[1rem] mx-auto text-left sm:h-[24rem] md:h-[34rem] lg:h-[24rem] xl:h-[18rem]",children:[y.jsx("div",{className:"hidden sm:block",children:e&&y.jsx(K1,{onInit:n=>{Jp.forEach(i=>{n.typeString(i).pauseFor(300)}),n.start()},options:{loop:!1,delay:1,cursor:""}})}),y.jsx("div",{className:"sm:hidden",children:y.jsx("ul",{children:Jp.map((n,i)=>y.jsx("li",{className:"pb-3",dangerouslySetInnerHTML:{__html:n}},i))})})]}),y.jsx("div",{className:"relative order-0 md:order-1",children:y.jsx("div",{children:y.jsx(ei,{children:y.jsx(Jl,{className:"max-h-[16rem] md:min-w-[16rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/on-laptop.png"})})})})]})})}const J1=()=>y.jsxs(y.Fragment,{children:[y.jsx(Y1,{}),y.jsx(Bn,{children:y.jsx(Q1,{})})]});function Sn({children:t,hoverEffect:e=!0,className:n=""}){return y.jsx("div",{className:`text-white p-4 rounded-[1rem] shadow-lg text-[0.9rem] h-full ${e&&"transform hover:scale-105 transition-transform duration-300"} bg-primary-800 ${n}`,children:t})}function Hv({name:t,company:e,description:n,skills:i,videoURL:r}){return y.jsx(Sn,{children:y.jsxs("div",{className:"flex flex-col justify-between h-full",children:[y.jsxs("div",{className:"text-center mb-4",children:[t&&y.jsx("h3",{className:"text-xl font-semibold",children:t}),e&&y.jsxs("p",{children:["(",e,")"]}),n&&y.jsx("div",{className:"mt-2 space-y-1 text-base text-left",dangerouslySetInnerHTML:{__html:n}}),i&&y.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:i.map((s,a)=>y.jsx("div",{className:"flex-grow",children:y.jsx(ei,{children:y.jsx("div",{className:`text-center text-primary-800 rounded-xl p-[6px] font-[800] ${s.isSelected?"bg-white":"bg-gray-400"}`,children:s.name},a)})},a))})]}),r&&y.jsx("iframe",{className:"w-full h-[19rem] rounded-xl",src:r,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})})}function eM(){const t=[9,3,2,11,1,7,10,8,6,12,5,4],e=[{id:1,name:"Personal OpenGL Project",company:"personal",description:"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",videoURL:"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",order:{date:1,interest:0},skills:["OpenGL","C++"]},{id:2,name:"University 4th-year Project",company:"university",description:"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",videoURL:"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",order:{date:2,interest:0},skills:["WebGL","Laravel"]},{id:3,name:"University 5th-year Project",company:"university",description:"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",videoURL:"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",order:{date:3,interest:0},skills:["Three.js","Laravel"]},{id:4,name:"Other Projects / WordPress",company:"aratech",description:"Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",videoURL:"https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",order:{date:4,interest:0},skills:["WordPress"]},{id:5,name:"IDB",company:"aratech",description:"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",videoURL:"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",order:{date:5,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:6,name:"E-buy",company:"aratech",description:"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",videoURL:"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",order:{date:6,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:7,name:"Qahwah House",company:"DivCodes",description:"Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",videoURL:"https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",order:{date:7,interest:0},skills:["React","Next.js","Tailwind"]},{id:8,name:"DIVPOS",company:"DivCodes",description:"Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",videoURL:"https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",order:{date:8,interest:0},skills:["React","Next.js","Tailwind"]},{id:9,name:"Sunglasses Try On",company:"Eyes 360",description:"Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",videoURL:"https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",order:{date:9,interest:0},skills:["WebGL","Babylon.js","Svelte"]},{id:10,name:"EuNet",company:"Stark Technologies",description:"A web hosting website available in two languages. It features an AI-powered chatbot for 24/7 assistance. The site is built using React and Next.js. It includes visually appealing reusable components that present information clearly with an attractive design, along with well-designed forms for user onboarding.",videoURL:"https://www.youtube.com/embed/nzy92nlbBI4?si=UsvvuLTts9lZfaAE",order:{date:10,interest:0},skills:["React","Next.js","Tailwind"]},{id:11,name:"Patitas",company:"Personal / test application",description:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before. With the help of online tutorials and AI tools, I was able to quickly learn and implement new concepts, demonstrating my ability to adapt and learn fastly. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/repo-prueba'>HERE</a>.",videoURL:"https://www.youtube.com/embed/3_p-boncOEs?si=EeLnvLWhSDEZys61",order:{date:11,interest:0},skills:["Angular","Spring Boot","Tailwind"]},{id:12,name:"Articalization",company:"Personal / test application",description:"In this project, I built a client-side news aggregation application that gathers articles from various external sources using public APIs. Users can filter the news by date, category, search query, and source, with paginated results for easy navigation. They can also customize their experience by adding preferred sources, authors, and categories, tailoring the news feed to their personal interests. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/articalization'>HERE</a>.",videoURL:"https://www.youtube.com/embed/9V-b1aAr0dQ?si=cw-vIE_bUP9ZGdez",order:{date:12,interest:0},skills:["React","Redux","Tailwind"]}];t.forEach((i,r)=>{const s=e.find(a=>a.id===i);s&&(s.order.interest=r+1)});const n=new Set;return e.forEach(i=>{i.skills.forEach(r=>{n.add(r)})}),{projects:e,projectsSkills:n}}function em(){const[t,e]=z.useState(!1);return y.jsx("div",{className:"relative",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:y.jsx("svg",{className:`fill-current ${t?"text-pumpkin-600":"text-pumpkin-700"}`,width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"})})})}function tm(){return y.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:y.jsx("path",{d:"M4.89163 13.2687L9.16582 17.5427L18.7085 8",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const{projects:tM,projectsSkills:pr}=eM();function nM(){const[t,e]=z.useState("Most Interesting"),[n,i]=z.useState(!1),[r,s]=z.useState(new Set(pr)),a=[...tM].filter(l=>l.skills.some(u=>r.has(u))).sort((l,u)=>t==="Latest"?u.order.date-l.order.date:t==="Most Interesting"?l.order.interest-u.order.interest:t==="Oldest"?l.order.date-u.order.date:0),o=l=>{s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},c=()=>{r.size===pr.size?s(new Set):s(new Set(pr))};return y.jsxs(ii,{title:"Projects",children:[y.jsxs("div",{className:"relative flex flex-wrap gap-2 mb-4",children:[y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Latest"),className:`px-4 py-2 text-white ${t==="Latest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Latest"})}),y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Most Interesting"),className:`px-4 py-2 text-white ${t==="Most Interesting"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Most Interesting"})}),y.jsx("div",{children:y.jsx("button",{onClick:()=>e("Oldest"),className:`px-4 py-2 text-white ${t==="Oldest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Oldest"})}),y.jsx("button",{className:"lg:hidden",onClick:()=>i(!n),children:y.jsx(em,{})})]}),y.jsxs("div",{className:"lg:ml-8 flex-grow justify-items-start lg:w-[30rem]",children:[y.jsx("button",{className:"hidden lg:block",onClick:()=>i(!n),children:y.jsx(em,{})}),y.jsx("div",{className:`lg:mt-4 transition-all duration-300 ease-in-out ${n?"max-h-[5000px] opacity-100":"max-h-0 opacity-0"} overflow-hidden`,children:y.jsxs("div",{children:[y.jsxs("label",{className:"flex items-center space-x-2 text-lg font-bold mb-2 cursor-pointer",children:[y.jsx("input",{type:"checkbox",checked:r.size===pr.size,onChange:c,className:"hidden"}),y.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.size===pr.size?"bg-pumpkin":"bg-none"}`,children:r.size===pr.size&&y.jsx(tm,{})}),y.jsx("span",{children:"Select All"})]}),y.jsx("div",{className:"flex flex-wrap gap-x-8 mt-4",children:[...pr].map(l=>y.jsxs("label",{className:"w-32 flex items-center space-x-2 mb-2 cursor-pointer",children:[y.jsx("input",{type:"checkbox",checked:r.has(l),onChange:()=>o(l),className:"hidden"}),y.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.has(l)?"bg-pumpkin":"bg-none"}`,children:r.has(l)&&y.jsx(tm,{})}),y.jsx("span",{children:l})]},l))})]})})]})]}),y.jsx("div",{className:"grid lg:grid-cols-2 gap-x-4 gap-y-8 sm:gap-8",children:a.map((l,u)=>y.jsx(Hv,{name:l.name,company:l.company,description:l.description,skills:l.skills.map(d=>({name:d,isSelected:r.has(d)})),videoURL:l.videoURL},u))})]})}const iM=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(nM,{})})});function ec({children:t}){const[e,n]=aa({threshold:.1});return y.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-bottom":"opacity-0"}`,children:t})}function rM({children:t,isOpen:e,close:n}){return e?y.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50",onClick:n,children:y.jsxs("div",{className:"bg-secondary-500 p-8 rounded-2xl relative",onClick:i=>{i.stopPropagation()},children:[y.jsx("button",{onClick:n,className:"absolute top-2 right-2 text-2xl font-bold text-pumpkin-500 hover:text-pumpkin-600",children:"✕"}),t]})}):null}function Et({src:t,title:e,description:n}){const[i,r]=z.useState(!1),s=()=>{r(!0)},a=()=>{r(!1)};return y.jsxs(y.Fragment,{children:[y.jsx(rM,{isOpen:i,close:a,children:y.jsxs("div",{className:"w-[48rem] h-[30rem] flex flex-col justify-between items-center",children:[y.jsx("a",{className:"text-pumpkin-500 hover:text-pumpkin-600 text-lg underline",href:t,target:"_blank",children:"full-size image"}),y.jsx(Jl,{className:"max-w-full h-[95%] max-h-[95%] object-contain",src:t,alt:e})]})}),y.jsx("div",{className:"cursor-pointer w-52",onClick:s,children:y.jsx(ec,{children:y.jsxs(Sn,{children:[y.jsx("div",{className:"font-bold text-base",children:e}),y.jsx("div",{children:n}),y.jsx(Jl,{className:"w-full h-56 object-cover mt-4 rounded-lg",src:t,alt:e})]})})})]})}function sM(){const{theme:t}=Wr();return y.jsxs(ii,{glow:!1,title:"Certificates",children:[y.jsx(ei,{children:y.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mt-16`,children:y.jsxs("div",{children:[y.jsx("div",{className:"text-3xl font-semibold mb-6",children:"International Collegiate Programming Contest Certificates"}),y.jsxs("div",{className:"flex flex-col gap-12",children:[y.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between gap-12",children:[y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2018 International Collegiate Programming Contest"}),y.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:oM})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2019 International Collegiate Programming Contest"}),y.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:aM})]})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2020 Africa and Arab Collegiate Programming Contest for GIRLS"}),y.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:im}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:im})]}),y.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[y.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2021 International Collegiate Programming Contest"}),y.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4",children:rm}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:rm})]})]})]})})}),y.jsx(ei,{children:y.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:y.jsxs("div",{children:[y.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Al-Basel Certificates for Academic Excellence"}),y.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4",children:nm}),y.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:nm})]})})})]})}const nm=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/Al-Basel Certificate - 1st year.jpg",title:"2017 / 2018"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 2nd year.jpg",title:"2018 / 2019"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 3rd year.jpg",title:"2019 / 2020"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 4th year.jpg",title:"2020 / 2021"}),y.jsx(Et,{src:"certificates/Al-Basel Certificate - 5th year.jpg",title:"2021 / 2022"})]}),oM=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2018 - TCPC - Fifty Eighth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2018 - SCPC - Sixteenth Place.jpg",title:"SCPC: Syrian"})]}),aM=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2019 - TCPC - Eighteenth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2019 - SCPC - Eighth Place.jpg",title:"SCPC: Syrian"})]}),im=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Fourth Place.jpg",title:"Fourth Place"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Extreme Programmers.jpg",title:"Extreme Programmers"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Solid Programmers.jpg",title:"Solid Programmers"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - Steadfast Gurus.jpg",title:"Steadfast Gurus"}),y.jsx(Et,{src:"certificates/GirlsACPC 2020 - First to solve problem A.jpg",title:"First to solve problem A"})]}),rm=y.jsxs(y.Fragment,{children:[y.jsx(Et,{src:"certificates/ICPC 2021 - TCPC - Fourth Place.jpg",title:"Tishreen University"}),y.jsx(Et,{src:"certificates/ICPC 2021 - SCPC - Seventh Place.jpg",title:"SCPC: Syrian"}),y.jsx(Et,{src:"certificates/ICPC 2021 - ACPC - Fifty Seventh Place.jpg",title:"ACPC: Arabic"})]}),lM=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(sM,{})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="168",cM=0,sm=1,uM=2,Vv=1,dM=2,di=3,rr=0,rn=1,pi=2,er=0,Ls=1,om=2,am=3,lm=4,fM=5,Ar=100,hM=101,pM=102,mM=103,gM=104,vM=200,_M=201,xM=202,yM=203,Nd=204,Dd=205,SM=206,MM=207,EM=208,wM=209,TM=210,AM=211,CM=212,bM=213,RM=214,PM=0,LM=1,NM=2,tc=3,DM=4,IM=5,UM=6,FM=7,Gv=0,OM=1,kM=2,tr=0,zM=1,BM=2,HM=3,VM=4,GM=5,jM=6,WM=7,jv=300,Hs=301,Vs=302,Id=303,Ud=304,Tc=306,Fd=1e3,Lr=1001,Od=1002,Mn=1003,XM=1004,Ua=1005,Un=1006,lu=1007,Nr=1008,Ai=1009,Wv=1010,Xv=1011,Ko=1012,_h=1013,Hr=1014,vi=1015,la=1016,xh=1017,yh=1018,Gs=1020,$v=35902,Yv=1021,qv=1022,Fn=1023,Kv=1024,Zv=1025,Ns=1026,js=1027,Qv=1028,Sh=1029,Jv=1030,Mh=1031,Eh=1033,xl=33776,yl=33777,Sl=33778,Ml=33779,kd=35840,zd=35841,Bd=35842,Hd=35843,Vd=36196,Gd=37492,jd=37496,Wd=37808,Xd=37809,$d=37810,Yd=37811,qd=37812,Kd=37813,Zd=37814,Qd=37815,Jd=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,El=36492,of=36494,af=36495,e_=36283,lf=36284,cf=36285,uf=36286,$M=3200,YM=3201,t_=0,qM=1,Vi="",jn="srgb",ur="srgb-linear",wh="display-p3",Ac="display-p3-linear",nc="linear",rt="srgb",ic="rec709",rc="p3",qr=7680,cm=519,KM=512,ZM=513,QM=514,n_=515,JM=516,eE=517,tE=518,nE=519,um=35044,dm="300 es",_i=2e3,sc=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,df=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function iE(t,e){return(t%e+e)%e}function uu(t,e,n){return(1-n)*t+n*e}function lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=r[0],m=r[3],h=r[6],g=r[1],_=r[4],S=r[7],b=r[2],A=r[5],C=r[8];return s[0]=a*x+o*g+c*b,s[3]=a*m+o*_+c*A,s[6]=a*h+o*S+c*C,s[1]=l*x+u*g+d*b,s[4]=l*m+u*_+d*A,s[7]=l*h+u*S+d*C,s[2]=f*x+p*g+v*b,s[5]=f*m+p*_+v*A,s[8]=f*h+p*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,p=l*s-a*c,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(du.makeScale(e,n)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,n){return this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const du=new ke;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rE(){const t=Zo("canvas");return t.style.display="block",t}const fm={};function Po(t){t in fm||(fm[t]=!0,console.warn(t))}function sE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hm=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),co={[ur]:{transfer:nc,primaries:ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:rt,primaries:ic,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ac]:{transfer:nc,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm)},[wh]:{transfer:rt,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm).convertLinearToSRGB()}},oE=new Set([ur,Ac]),Je={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!oE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=co[e].toReference,r=co[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return co[t].primaries},getTransfer:function(t){return t===Vi?nc:co[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(co[e].luminanceCoefficients)}};function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class aE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=Zo("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ds(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lE=0;class r_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hu(r[a].image)):s.push(hu(r[a]))}else s=hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cE=0;class $t extends Zs{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Lr,r=Lr,s=Un,a=Nr,o=Fn,c=Ai,l=$t.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ca(),this.name="",this.source=new r_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=jv;$t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],v=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,S=(p+1)/2,b=(h+1)/2,A=(u+f)/4,C=(d+x)/4,L=(v+m)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=C/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=L/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-x)/g,this.z=(f-u)/g,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends Zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new r_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends uE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s_ extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dE extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||c!==f||l!==p||u!==v){let m=1-o;const h=c*f+l*p+u*v+d*x,g=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,h*g);m=Math.sin(m*A)/b,o=Math.sin(o*A)/b}const S=o*g;if(c=c*m+f*S,l=l*m+p*S,u=u*m+v*S,d=d*m+x*S,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*d+c*p-l*f,e[n+1]=c*v+u*f+l*d-o*p,e[n+2]=l*v+u*p+o*f-c*d,e[n+3]=u*v-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),p=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*p*v,this._y=l*p*d-f*u*v,this._z=l*u*v+f*p*d,this._w=l*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+l*p*v,this._y=l*p*d-f*u*v,this._z=l*u*v-f*p*d,this._w=l*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-l*p*v,this._y=l*p*d+f*u*v,this._z=l*u*v+f*p*d,this._w=l*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-l*p*v,this._y=l*p*d+f*u*v,this._z=l*u*v-f*p*d,this._w=l*u*d+f*p*v;break;case"YZX":this._x=f*u*d+l*p*v,this._y=l*p*d+f*u*v,this._z=l*u*v-f*p*d,this._w=l*u*d-f*p*v;break;case"XZY":this._x=f*u*d-l*p*v,this._y=l*p*d-f*u*v,this._z=l*u*v+f*p*d,this._w=l*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new X,mm=new ua;class da{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Oa.subVectors(this.max,uo),Zr.subVectors(e.a,uo),Qr.subVectors(e.b,uo),Jr.subVectors(e.c,uo),Ni.subVectors(Qr,Zr),Di.subVectors(Jr,Qr),mr.subVectors(Zr,Jr);let n=[0,-Ni.z,Ni.y,0,-Di.z,Di.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Di.z,0,-Di.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Di.y,Di.x,0,-mr.y,mr.x,0];return!mu(n,Zr,Qr,Jr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,Zr,Qr,Jr,Oa))?!1:(ka.crossVectors(Ni,Di),n=[ka.x,ka.y,ka.z],mu(n,Zr,Qr,Jr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new X,new X,new X,new X,new X,new X,new X,new X],bn=new X,Fa=new da,Zr=new X,Qr=new X,Jr=new X,Ni=new X,Di=new X,mr=new X,uo=new X,Oa=new X,ka=new X,gr=new X;function mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),c=e.dot(gr),l=n.dot(gr),u=i.dot(gr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const fE=new da,fo=new X,gu=new X;let Th=class{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(gu)),this.expandByPoint(fo.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const oi=new X,vu=new X,za=new X,Ii=new X,_u=new X,Ba=new X,xu=new X;class hE{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(za),o=Ii.dot(this.direction),c=-Ii.dot(za),l=Ii.lengthSq(),u=Math.abs(1-a*a);let d,f,p,v;if(u>0)if(d=a*c-o,f=a*o-c,v=s*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vu).addScaledVector(za,f),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),Ba.subVectors(i,e),xu.crossVectors(_u,Ba);let a=this.direction.dot(xu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const c=o*this.direction.dot(Ba.crossVectors(Ii,Ba));if(c<0)return null;const l=o*this.direction.dot(_u.cross(Ii));if(l<0||c+l>a)return null;const u=-o*Ii.dot(xu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,c,l,u,d,f,p,v,x,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,d,f,p,v,x,m)}set(e,n,i,r,s,a,o,c,l,u,d,f,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,v=o*u,x=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=p+v*l,n[5]=f-x*l,n[9]=-o*c,n[2]=x-f*l,n[6]=v+p*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*d,v=l*u,x=l*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*d,v=l*u,x=l*d;n[0]=f-x*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*d,v=o*u,x=o*d;n[0]=c*u,n[4]=v*l-p,n[8]=f*l+x,n[1]=c*d,n[5]=x*l+f,n[9]=p*l-v,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,v=o*c,x=o*l;n[0]=c*u,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=p*d+v,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,p=a*l,v=o*c,x=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+x,n[5]=a*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pE,e,mE)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Ui.crossVectors(i,an),Ui.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ui.crossVectors(i,an)),Ui.normalize(),Ha.crossVectors(an,Ui),r[0]=Ui.x,r[4]=Ha.x,r[8]=an.x,r[1]=Ui.y,r[5]=Ha.y,r[9]=an.y,r[2]=Ui.z,r[6]=Ha.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],g=i[3],_=i[7],S=i[11],b=i[15],A=r[0],C=r[4],L=r[8],w=r[12],M=r[1],R=r[5],B=r[9],k=r[13],Y=r[2],q=r[6],G=r[10],Q=r[14],I=r[3],V=r[7],H=r[11],Z=r[15];return s[0]=a*A+o*M+c*Y+l*I,s[4]=a*C+o*R+c*q+l*V,s[8]=a*L+o*B+c*G+l*H,s[12]=a*w+o*k+c*Q+l*Z,s[1]=u*A+d*M+f*Y+p*I,s[5]=u*C+d*R+f*q+p*V,s[9]=u*L+d*B+f*G+p*H,s[13]=u*w+d*k+f*Q+p*Z,s[2]=v*A+x*M+m*Y+h*I,s[6]=v*C+x*R+m*q+h*V,s[10]=v*L+x*B+m*G+h*H,s[14]=v*w+x*k+m*Q+h*Z,s[3]=g*A+_*M+S*Y+b*I,s[7]=g*C+_*R+S*q+b*V,s[11]=g*L+_*B+S*G+b*H,s[15]=g*w+_*k+S*Q+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*p-i*c*p)+x*(+n*c*p-n*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+n*l*d-n*o*p-s*a*d+i*a*p+s*o*u-i*l*u)+h*(-r*o*u-n*c*d+n*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],g=d*m*l-x*f*l+x*c*p-o*m*p-d*c*h+o*f*h,_=v*f*l-u*m*l-v*c*p+a*m*p+u*c*h-a*f*h,S=u*x*l-v*d*l+v*o*p-a*x*p-u*o*h+a*d*h,b=v*d*c-u*x*c-v*o*f+a*x*f+u*o*m-a*d*m,A=n*g+i*_+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*C,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*h+i*c*h)*C,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*p-i*c*p)*C,e[4]=_*C,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*h+n*f*h)*C,e[6]=(v*c*s-a*m*s-v*r*l+n*m*l+a*r*h-n*c*h)*C,e[7]=(a*f*s-u*c*s+u*r*l-n*f*l-a*r*p+n*c*p)*C,e[8]=S*C,e[9]=(v*d*s-u*x*s-v*i*p+n*x*p+u*i*h-n*d*h)*C,e[10]=(a*x*s-v*o*s+v*i*l-n*x*l-a*i*h+n*o*h)*C,e[11]=(u*o*s-a*d*s-u*i*l+n*d*l+a*i*p-n*o*p)*C,e[12]=b*C,e[13]=(u*x*r-v*d*r+v*i*f-n*x*f-u*i*m+n*d*m)*C,e[14]=(v*o*r-a*x*r-v*i*c+n*x*c+a*i*m-n*o*m)*C,e[15]=(a*d*r-u*o*r+u*i*c-n*d*c-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,d=o+o,f=s*l,p=s*u,v=s*d,x=a*u,m=a*d,h=o*d,g=c*l,_=c*u,S=c*d,b=i.x,A=i.y,C=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+S)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*C,r[9]=(m-g)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const a=es.set(r[4],r[5],r[6]).length(),o=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/s,u=1/a,d=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=_i){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(o===_i)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===sc)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i){const c=this.elements,l=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*l,p=(i+r)*u;let v,x;if(o===_i)v=(a+s)*d,x=-2*d;else if(o===sc)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new X,Rn=new vt,pE=new X(0,0,0),mE=new X(1,1,1),Ui=new X,Ha=new X,an=new X,gm=new vt,vm=new ua;class ti{constructor(e=0,n=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class o_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gE=0;const _m=new X,ts=new ua,ai=new vt,Va=new X,ho=new X,vE=new X,_E=new ua,xm=new X(1,0,0),ym=new X(0,1,0),Sm=new X(0,0,1),Mm={type:"added"},xE={type:"removed"},ns={type:"childadded",child:null},yu={type:"childremoved",child:null};class Vt extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new X,n=new ti,i=new ua,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ho,Va,this.up):ai.lookAt(Va,ho,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(ai),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xE),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,vE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new X,li=new X,Su=new X,ci=new X,is=new X,rs=new X,Em=new X,Mu=new X,Eu=new X,wu=new X;class $n{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),li.subVectors(i,n),Su.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(li),c=Pn.dot(Su),l=li.dot(li),u=li.dot(Su),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-o*u)*f,v=(a*u-o*c)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),li.subVectors(e,n),Pn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Pn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),Mu.subVectors(e,i);const c=is.dot(Mu),l=rs.dot(Mu);if(c<=0&&l<=0)return n.copy(i);Eu.subVectors(e,r);const u=is.dot(Eu),d=rs.dot(Eu);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(is,a);wu.subVectors(e,s);const p=is.dot(wu),v=rs.dot(wu);if(v>=0&&p<=v)return n.copy(s);const x=p*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),n.copy(i).addScaledVector(rs,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Em.subVectors(s,r),o=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Em,o);const h=1/(m+x+f);return a=x*h,o=f*h,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=iE(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Tu(a,s,e+1/3),this.g=Tu(a,s,e),this.b=Tu(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=fu(e.r),this.g=fu(e.g),this.b=fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Qt(zt.r*255,0,255))*65536+Math.round(Qt(zt.g*255,0,255))*256+Math.round(Qt(zt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=jn){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Ga);const i=uu(Fi.h,Ga.h,n),r=uu(Fi.s,Ga.s,n),s=uu(Fi.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ye;Ye.NAMES=a_;let yE=0;class fa extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Ls,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Dd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nd&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class l_ extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new X,ja=new Xe;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Po("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(e),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class c_ extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SE=0;const gn=new vt,Au=new Vt,ss=new X,ln=new da,po=new da,bt=new X;class dr extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];po.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(ln.min,po.min),ln.expandByPoint(bt),bt.addVectors(ln.max,po.max),ln.expandByPoint(bt)):(ln.expandByPoint(po.min),ln.expandByPoint(po.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(e,l),bt.add(ss)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new X,c[L]=new X;const l=new X,u=new X,d=new X,f=new Xe,p=new Xe,v=new Xe,x=new X,m=new X;function h(L,w,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(l),d.sub(l),p.sub(f),v.sub(f);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),o[L].add(x),o[w].add(x),o[M].add(x),c[L].add(m),c[w].add(m),c[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const M=g[L],R=M.start,B=M.count;for(let k=R,Y=R+B;k<Y;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new X,S=new X,b=new X,A=new X;function C(L){b.fromBufferAttribute(r,L),A.copy(b);const w=o[L];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),S.crossVectors(A,w);const R=S.dot(c[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,R)}for(let L=0,w=g.length;L<w;++L){const M=g[L],R=M.start,B=M.count;for(let k=R,Y=R+B;k<Y;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,d=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let p=0,v=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let h=0;h<u;h++)f[v++]=l[p++]}return new Zn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dr,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=e(f,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new vt,vr=new hE,Wa=new Th,Tm=new X,os=new X,as=new X,ls=new X,Cu=new X,Xa=new X,$a=new Xe,Ya=new Xe,qa=new Xe,Am=new X,Cm=new X,bm=new X,Ka=new X,Za=new X;class Yn extends Vt{constructor(e=new dr,n=new l_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Cu.fromBufferAttribute(d,e),a?Xa.addScaledVector(Cu,u):Xa.addScaledVector(Cu.sub(n),u))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Wa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Wa,Tm)===null||vr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),vr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=o.getX(S),C=o.getX(S+1),L=o.getX(S+2);r=Qa(this,h,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const g=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);r=Qa(this,a,e,i,l,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=S,C=S+1,L=S+2;r=Qa(this,h,e,i,l,u,d,A,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const g=m,_=m+1,S=m+2;r=Qa(this,a,e,i,l,u,d,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ME(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===rr,o),c===null)return null;Za.copy(o),Za.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:t}}function Qa(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,os),t.getVertexPosition(c,as),t.getVertexPosition(l,ls);const u=ME(t,e,n,i,os,as,ls,Ka);if(u){r&&($a.fromBufferAttribute(r,o),Ya.fromBufferAttribute(r,c),qa.fromBufferAttribute(r,l),u.uv=$n.getInterpolation(Ka,os,as,ls,$a,Ya,qa,new Xe)),s&&($a.fromBufferAttribute(s,o),Ya.fromBufferAttribute(s,c),qa.fromBufferAttribute(s,l),u.uv1=$n.getInterpolation(Ka,os,as,ls,$a,Ya,qa,new Xe)),a&&(Am.fromBufferAttribute(a,o),Cm.fromBufferAttribute(a,c),bm.fromBufferAttribute(a,l),u.normal=$n.getInterpolation(Ka,os,as,ls,Am,Cm,bm,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};$n.getNormal(os,as,ls,d.normal),u.face=d}return u}class ha extends dr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qn(l,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(d,2));function v(x,m,h,g,_,S,b,A,C,L,w){const M=S/C,R=b/L,B=S/2,k=b/2,Y=A/2,q=C+1,G=L+1;let Q=0,I=0;const V=new X;for(let H=0;H<G;H++){const Z=H*R-k;for(let se=0;se<q;se++){const De=se*M-B;V[x]=De*g,V[m]=Z*_,V[h]=Y,l.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[h]=A>0?1:-1,u.push(V.x,V.y,V.z),d.push(se/C),d.push(1-H/L),Q+=1}}for(let H=0;H<L;H++)for(let Z=0;Z<C;Z++){const se=f+Z+q*H,De=f+Z+q*(H+1),P=f+(Z+1)+q*(H+1),oe=f+(Z+1)+q*H;c.push(se,De,oe),c.push(De,P,oe),I+=6}o.addGroup(p,I,w),p+=I,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function EE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const wE={clone:Ws,merge:jt};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=EE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new X,Rm=new Xe,Pm=new Xe;class xn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class CE extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new xn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new xn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new xn(cs,us,e,n);o.layers=this.layers,this.add(o);const c=new xn(cs,us,e,n);c.layers=this.layers,this.add(c);const l=new xn(cs,us,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class h_ extends $t{constructor(e,n,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bE extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:er});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===Nr&&(n.minFilter=Un),new CE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const bu=new X,RE=new X,PE=new ke;class wr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bu.subVectors(i,n).cross(RE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PE.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Th,Ja=new X;class Ah{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,a=new wr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],x=r[10],m=r[11],h=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-s,f-l,m-p,S-h).normalize(),i[1].setComponents(c+s,f+l,m+p,S+h).normalize(),i[2].setComponents(c+a,f+u,m+v,S+g).normalize(),i[3].setComponents(c-a,f-u,m-v,S-g).normalize(),i[4].setComponents(c-o,f-d,m-x,S-_).normalize(),n===_i)i[5].setComponents(c+o,f+d,m+x,S+_).normalize();else if(n===sc)i[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LE(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c._updateRange,f=c.updateRanges;if(t.bindBuffer(l,o),d.count===-1&&f.length===0&&t.bufferSubData(l,0,u),f.length!==0){for(let p=0,v=f.length;p<v;p++){const x=f[p];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Cc extends dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=n/c,p=[],v=[],x=[],m=[];for(let h=0;h<u;h++){const g=h*f-a;for(let _=0;_<l;_++){const S=_*d-s;v.push(S,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let g=0;g<o;g++){const _=g+l*h,S=g+l*(h+1),b=g+1+l*(h+1),A=g+1+l*h;p.push(_,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Qn(v,3)),this.setAttribute("normal",new Qn(x,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DE=`#ifdef USE_ALPHAHASH
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
#endif`,IE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
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
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
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
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WE=`#ifdef USE_IRIDESCENCE
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
#endif`,XE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tw=`#define PI 3.141592653589793
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
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iw=`vec3 transformedNormal = objectNormal;
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
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",cw=`
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
}`,uw=`#ifdef USE_ENVMAP
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
#endif`,dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xw=`#ifdef USE_GRADIENTMAP
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
}`,yw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ew=`uniform bool receiveShadow;
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
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rw=`PhysicalMaterial material;
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
#endif`,Pw=`struct PhysicalMaterial {
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
}`,Lw=`
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
#endif`,Nw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hw=`#if defined( USE_POINTS_UV )
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
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ww=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$w=`#ifdef USE_MORPHTARGETS
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
#endif`,Yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
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
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gT=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,xT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ET=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
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
}`,kT=`#if DEPTH_PACKING == 3200
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
}`,zT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,XT=`uniform vec3 diffuse;
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
}`,$T=`#define LAMBERT
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
}`,YT=`#define LAMBERT
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
}`,qT=`#define MATCAP
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define NORMAL
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
}`,QT=`#define NORMAL
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
}`,JT=`#define PHONG
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
}`,e2=`#define PHONG
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
}`,t2=`#define STANDARD
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
}`,n2=`#define STANDARD
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
}`,i2=`#define TOON
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
}`,r2=`#define TOON
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
}`,s2=`uniform float size;
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
}`,o2=`uniform vec3 diffuse;
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
}`,a2=`#include <common>
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
}`,l2=`uniform vec3 color;
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
}`,c2=`uniform float rotation;
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
}`,u2=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:NE,alphahash_pars_fragment:DE,alphamap_fragment:IE,alphamap_pars_fragment:UE,alphatest_fragment:FE,alphatest_pars_fragment:OE,aomap_fragment:kE,aomap_pars_fragment:zE,batching_pars_vertex:BE,batching_vertex:HE,begin_vertex:VE,beginnormal_vertex:GE,bsdfs:jE,iridescence_fragment:WE,bumpmap_pars_fragment:XE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:qE,clipping_planes_vertex:KE,color_fragment:ZE,color_pars_fragment:QE,color_pars_vertex:JE,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:sw,emissivemap_fragment:ow,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:cw,envmap_fragment:uw,envmap_common_pars_fragment:dw,envmap_pars_fragment:fw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:ww,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:vw,fog_pars_fragment:_w,gradientmap_pars_fragment:xw,lightmap_pars_fragment:yw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:Mw,lights_pars_begin:Ew,lights_toon_fragment:Tw,lights_toon_pars_fragment:Aw,lights_phong_fragment:Cw,lights_phong_pars_fragment:bw,lights_physical_fragment:Rw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Lw,lights_fragment_maps:Nw,lights_fragment_end:Dw,logdepthbuf_fragment:Iw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Fw,logdepthbuf_vertex:Ow,map_fragment:kw,map_pars_fragment:zw,map_particle_fragment:Bw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Gw,morphinstance_vertex:jw,morphcolor_vertex:Ww,morphnormal_vertex:Xw,morphtarget_pars_vertex:$w,morphtarget_vertex:Yw,normal_fragment_begin:qw,normal_fragment_maps:Kw,normal_pars_fragment:Zw,normal_pars_vertex:Qw,normal_vertex:Jw,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:nT,clearcoat_pars_fragment:iT,iridescence_pars_fragment:rT,opaque_fragment:sT,packing:oT,premultiplied_alpha_fragment:aT,project_vertex:lT,dithering_fragment:cT,dithering_pars_fragment:uT,roughnessmap_fragment:dT,roughnessmap_pars_fragment:fT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:pT,shadowmap_vertex:mT,shadowmask_pars_fragment:gT,skinbase_vertex:vT,skinning_pars_vertex:_T,skinning_vertex:xT,skinnormal_vertex:yT,specularmap_fragment:ST,specularmap_pars_fragment:MT,tonemapping_fragment:ET,tonemapping_pars_fragment:wT,transmission_fragment:TT,transmission_pars_fragment:AT,uv_pars_fragment:CT,uv_pars_vertex:bT,uv_vertex:RT,worldpos_vertex:PT,background_vert:LT,background_frag:NT,backgroundCube_vert:DT,backgroundCube_frag:IT,cube_vert:UT,cube_frag:FT,depth_vert:OT,depth_frag:kT,distanceRGBA_vert:zT,distanceRGBA_frag:BT,equirect_vert:HT,equirect_frag:VT,linedashed_vert:GT,linedashed_frag:jT,meshbasic_vert:WT,meshbasic_frag:XT,meshlambert_vert:$T,meshlambert_frag:YT,meshmatcap_vert:qT,meshmatcap_frag:KT,meshnormal_vert:ZT,meshnormal_frag:QT,meshphong_vert:JT,meshphong_frag:e2,meshphysical_vert:t2,meshphysical_frag:n2,meshtoon_vert:i2,meshtoon_frag:r2,points_vert:s2,points_frag:o2,shadow_vert:a2,shadow_frag:l2,sprite_vert:c2,sprite_frag:u2},he={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Wn={basic:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:jt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:jt([he.lights,he.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Wn.physical={uniforms:jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const el={r:0,b:0,g:0},xr=new ti,d2=new vt;function f2(t,e,n,i,r,s,a){const o=new Ye(0);let c=s===!0?0:1,l,u,d=null,f=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const S=v(g);S===null?h(o,c):S&&S.isColor&&(h(S,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Tc)?(u===void 0&&(u=new Yn(new ha(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Ws(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(_.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d2.makeRotationFromEuler(xr)),u.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Yn(new Cc(2,2),new sr({name:"BackgroundMaterial",uniforms:Ws(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function h(g,_){g.getRGB(el,d_(t)),i.buffers.color.setClear(el.r,el.g,el.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),c=_,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,h(o,c)},render:x,addToRenderList:m}}function h2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,R,B,k,Y){let q=!1;const G=d(k,B,R);s!==G&&(s=G,l(s.object)),q=p(M,k,B,Y),q&&v(M,k,B,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(M,R,B,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return t.createVertexArray()}function l(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,R,B){const k=B.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let q=Y[R.id];q===void 0&&(q={},Y[R.id]=q);let G=q[k];return G===void 0&&(G=f(c()),q[k]=G),G}function f(M){const R=[],B=[],k=[];for(let Y=0;Y<n;Y++)R[Y]=0,B[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,R,B,k){const Y=s.attributes,q=R.attributes;let G=0;const Q=B.getAttributes();for(const I in Q)if(Q[I].location>=0){const H=Y[I];let Z=q[I];if(Z===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function v(M,R,B,k){const Y={},q=R.attributes;let G=0;const Q=B.getAttributes();for(const I in Q)if(Q[I].location>=0){let H=q[I];H===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(H=M.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),Y[I]=Z,G++}s.attributes=Y,s.attributesNum=G,s.index=k}function x(){const M=s.newAttributes;for(let R=0,B=M.length;R<B;R++)M[R]=0}function m(M){h(M,0)}function h(M,R){const B=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;B[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),Y[M]!==R&&(t.vertexAttribDivisor(M,R),Y[M]=R)}function g(){const M=s.newAttributes,R=s.enabledAttributes;for(let B=0,k=R.length;B<k;B++)R[B]!==M[B]&&(t.disableVertexAttribArray(B),R[B]=0)}function _(M,R,B,k,Y,q,G){G===!0?t.vertexAttribIPointer(M,R,B,Y,q):t.vertexAttribPointer(M,R,B,k,Y,q)}function S(M,R,B,k){x();const Y=k.attributes,q=B.getAttributes(),G=R.defaultAttributeValues;for(const Q in q){const I=q[Q];if(I.location>=0){let V=Y[Q];if(V===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const H=V.normalized,Z=V.itemSize,se=e.get(V);if(se===void 0)continue;const De=se.buffer,P=se.type,oe=se.bytesPerElement,K=P===t.INT||P===t.UNSIGNED_INT||V.gpuType===_h;if(V.isInterleavedBufferAttribute){const re=V.data,_e=re.stride,Ee=V.offset;if(re.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)h(I.location+ye,re.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<I.locationSize;ye++)m(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ye=0;ye<I.locationSize;ye++)_(I.location+ye,Z/I.locationSize,P,H,_e*oe,(Ee+Z/I.locationSize*ye)*oe,K)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<I.locationSize;re++)h(I.location+re,V.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<I.locationSize;re++)m(I.location+re);t.bindBuffer(t.ARRAY_BUFFER,De);for(let re=0;re<I.locationSize;re++)_(I.location+re,Z/I.locationSize,P,H,Z*oe,Z/I.locationSize*re*oe,K)}}else if(G!==void 0){const H=G[Q];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(I.location,H);break;case 3:t.vertexAttrib3fv(I.location,H);break;case 4:t.vertexAttrib4fv(I.location,H);break;default:t.vertexAttrib1fv(I.location,H)}}}}g()}function b(){L();for(const M in i){const R=i[M];for(const B in R){const k=R[B];for(const Y in k)u(k[Y].object),delete k[Y];delete R[B]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const B in R){const k=R[B];for(const Y in k)u(k[Y].object),delete k[Y];delete R[B]}delete i[M.id]}function C(M){for(const R in i){const B=i[R];if(B[M.id]===void 0)continue;const k=B[M.id];for(const Y in k)u(k[Y].object),delete k[Y];delete B[M.id]}}function L(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function p2(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function c(l,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)a(l[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];for(let x=0;x<f.length;x++)n.update(v,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function m2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Fn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!C)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:S,maxSamples:b}}function g2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new wr,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const g=s?0:i,_=g*4;let S=h.clippingState||null;c.value=S,S=u(v,f,_,p);for(let b=0;b!==_;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const h=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==x;++_,S+=4)a.copy(d[_]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function v2(t){let e=new WeakMap;function n(a,o){return o===Id?a.mapping=Hs:o===Ud&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Id||o===Ud)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new bE(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends f_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Lm=[.125,.215,.35,.446,.526,.582],Cr=20,Ru=new m_,Nm=new Ye;let Pu=null,Lu=0,Nu=0,Du=!1;const Tr=(1+Math.sqrt(5))/2,ds=1/Tr,Dm=[new X(-Tr,ds,0),new X(Tr,ds,0),new X(-ds,0,Tr),new X(ds,0,Tr),new X(0,Tr,-ds),new X(0,Tr,ds),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,Lu,Nu),this._renderer.xr.enabled=Du,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:la,format:Fn,colorSpace:ur,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_2(s)),this._blurMaterial=x2(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const o=new xn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nm),u.toneMapping=tr,u.autoClear=!1;const p=new l_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Yn(new ha,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Nm),x=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):g===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const _=this._cubeSize;tl(r,g*_,h>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;tl(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dm[(r-s-1)%Dm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Yn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Cr;m>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const h=[];let g=0;for(let C=0;C<Cr;++C){const L=C/x,w=Math.exp(-L*L/2);h.push(w),C===0?g+=w:C<m&&(g+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-ws?r-_+ws:0),A=4*(this._cubeSize-S);tl(n,b,A,3*S,2*S),c.setRenderTarget(n),c.render(d,Ru)}}function _2(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Lm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-ws?c=Lm[a-t+ws-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,h=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];g.set(w,x*v*A),_.set(f,m*v*A);const M=[A,A,A,A,A,A];S.set(M,h*v*A)}const b=new dr;b.setAttribute("position",new Zn(g,x)),b.setAttribute("uv",new Zn(_,m)),b.setAttribute("faceIndex",new Zn(S,h)),e.push(b),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x2(t,e,n){const i=new Float32Array(Cr),r=new X(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Fm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Om(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function y2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Id||c===Ud,u=c===Hs||c===Vs;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Im(t)),d=l?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Im(t)),d=l?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function S2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M2(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){const b=g[_+0],A=g[_+1],C=g[_+2];f.push(b,A,A,C,C,b)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const b=_+0,A=_+1,C=_+2;f.push(b,A,A,C,C,b)}}else return;const m=new(i_(f)?u_:c_)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function E2(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function l(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*a,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g];for(let g=0;g<x.length;g++)n.update(h,i,x[g])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function w2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function T2(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*d),L=new s_(C,b,A,d);L.type=vi,L.needsUpdate=!0;const w=S*4;for(let R=0;R<d;R++){const B=h[R],k=g[R],Y=_[R],q=b*A*4*R;for(let G=0;G<B.count;G++){const Q=G*w;v===!0&&(r.fromBufferAttribute(B,G),C[q+Q+0]=r.x,C[q+Q+1]=r.y,C[q+Q+2]=r.z,C[q+Q+3]=0),x===!0&&(r.fromBufferAttribute(k,G),C[q+Q+4]=r.x,C[q+Q+5]=r.y,C[q+Q+6]=r.z,C[q+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,G),C[q+Q+8]=r.x,C[q+Q+9]=r.y,C[q+Q+10]=r.z,C[q+Q+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Xe(b,A)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function A2(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class g_ extends $t{constructor(e,n,i,r,s,a,o,c,l,u=Ns){if(u!==Ns&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ns&&(i=Hr),i===void 0&&u===js&&(i=Gs),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v_=new $t,km=new g_(1,1),__=new s_,x_=new dE,y_=new h_,zm=[],Bm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Gm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bc(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function C2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function b2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function L2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Ct(n,i)}}function N2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Ct(n,i)}}function D2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Ct(n,i)}}function I2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function k2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=n_,s=km):s=v_,n.setTexture2D(e||s,r)}function G2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function j2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function W2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function X2(t){switch(t){case 5126:return C2;case 35664:return b2;case 35665:return R2;case 35666:return P2;case 35674:return L2;case 35675:return N2;case 35676:return D2;case 5124:case 35670:return I2;case 35667:case 35671:return U2;case 35668:case 35672:return F2;case 35669:case 35673:return O2;case 5125:return k2;case 36294:return z2;case 36295:return B2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return W2}}function $2(t,e){t.uniform1fv(this.addr,e)}function Y2(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function q2(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function K2(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function Z2(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Q2(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function J2(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eA(t,e){t.uniform1iv(this.addr,e)}function tA(t,e){t.uniform2iv(this.addr,e)}function nA(t,e){t.uniform3iv(this.addr,e)}function iA(t,e){t.uniform4iv(this.addr,e)}function rA(t,e){t.uniform1uiv(this.addr,e)}function sA(t,e){t.uniform2uiv(this.addr,e)}function oA(t,e){t.uniform3uiv(this.addr,e)}function aA(t,e){t.uniform4uiv(this.addr,e)}function lA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||v_,s[a])}function cA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x_,s[a])}function uA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||y_,s[a])}function dA(t,e,n){const i=this.cache,r=e.length,s=bc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||__,s[a])}function fA(t){switch(t){case 5126:return $2;case 35664:return Y2;case 35665:return q2;case 35666:return K2;case 35674:return Z2;case 35675:return Q2;case 35676:return J2;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return dA}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=X2(n.type)}}class pA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fA(n.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function jm(t,e){t.seq.push(e),t.map[e.id]=e}function gA(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),a=Iu.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){jm(n,l===void 0?new hA(o,t,e):new pA(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new mA(o),jm(n,d)),n=d}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);gA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vA=37297;let _A=0;function xA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function yA(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===rc&&n===ic?i="LinearDisplayP3ToLinearSRGB":e===ic&&n===rc&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case Ac:return[i,"LinearTransferOETF"];case jn:case wh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xA(t.getShaderSource(e),a)}else return r}function SA(t,e){const n=yA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function MA(t,e){let n;switch(e){case zM:n="Linear";break;case BM:n="Reinhard";break;case HM:n="Cineon";break;case VM:n="ACESFilmic";break;case jM:n="AgX";break;case WM:n="Neutral";break;case GM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new X;function EA(){Je.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function TA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function yo(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(CA,RA)}const bA=new Map;function RA(t,e){let n=Oe[e];if(n===void 0){const i=bA.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(PA,LA)}function LA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function NA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function DA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function UA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gv:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function FA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=NA(n),l=DA(n),u=IA(n),d=UA(n),f=FA(n),p=wA(n),v=TA(s),x=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(yo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(yo).join(`
`),h.length>0&&(h+=`
`)):(m=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),h=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==tr?MA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,SA("linearToOutputTexel",n.outputColorSpace),EA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),a=ff(a),a=$m(a,n),a=Ym(a,n),o=ff(o),o=$m(o,n),o=Ym(o,n),a=qm(a),o=qm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+m+a,S=g+h+o,b=Wm(r,r.VERTEX_SHADER,_),A=Wm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,A);else{const Q=Xm(r,b,"vertex"),I=Xm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Q+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||Y==="")&&(G=!1);G&&(R.diagnostics={runnable:q,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(b),r.deleteShader(A),L=new wl(r,x),w=AA(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,vA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=A,this}let kA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BA(e),n.set(e,i)),i}}class BA{constructor(e){this.id=kA++,this.code=e,this.usedTimes=0}}function HA(t,e,n,i,r,s,a){const o=new o_,c=new zA,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,B,k){const Y=B.fog,q=k.geometry,G=w.isMeshStandardMaterial?B.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||G),I=Q&&Q.mapping===Tc?Q.image.height:null,V=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const H=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Z=H!==void 0?H.length:0;let se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let De,P,oe,K;if(V){const qe=Wn[V];De=qe.vertexShader,P=qe.fragmentShader}else De=w.vertexShader,P=w.fragmentShader,c.update(w),oe=c.getVertexShaderID(w),K=c.getFragmentShaderID(w);const re=t.getRenderTarget(),_e=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,ye=!!w.map,Ve=!!w.matcap,D=!!Q,tt=!!w.aoMap,Ge=!!w.lightMap,$e=!!w.bumpMap,we=!!w.normalMap,ft=!!w.displacementMap,be=!!w.emissiveMap,Ie=!!w.metalnessMap,N=!!w.roughnessMap,E=w.anisotropy>0,$=w.clearcoat>0,ee=w.dispersion>0,ie=w.iridescence>0,te=w.sheen>0,Ae=w.transmission>0,fe=E&&!!w.anisotropyMap,ge=$&&!!w.clearcoatMap,Fe=$&&!!w.clearcoatNormalMap,le=$&&!!w.clearcoatRoughnessMap,me=ie&&!!w.iridescenceMap,ze=ie&&!!w.iridescenceThicknessMap,Re=te&&!!w.sheenColorMap,xe=te&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Be=!!w.specularColorMap,at=!!w.specularIntensityMap,U=Ae&&!!w.transmissionMap,ce=Ae&&!!w.thicknessMap,J=!!w.gradientMap,ne=!!w.alphaMap,de=w.alphaTest>0,Pe=!!w.alphaHash,je=!!w.extensions;let _t=tr;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Lt={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:P,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:_e,instancingColor:_e&&k.instanceColor!==null,instancingMorph:_e&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ur,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:Ve,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:I,aoMap:tt,lightMap:Ge,bumpMap:$e,normalMap:we,displacementMap:f&&ft,emissiveMap:be,normalMapObjectSpace:we&&w.normalMapType===qM,normalMapTangentSpace:we&&w.normalMapType===t_,metalnessMap:Ie,roughnessMap:N,anisotropy:E,anisotropyMap:fe,clearcoat:$,clearcoatMap:ge,clearcoatNormalMap:Fe,clearcoatRoughnessMap:le,dispersion:ee,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:ze,sheen:te,sheenColorMap:Re,sheenRoughnessMap:xe,specularMap:Ue,specularColorMap:Be,specularIntensityMap:at,transmission:Ae,transmissionMap:U,thicknessMap:ce,gradientMap:J,opaque:w.transparent===!1&&w.blending===Ls&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:Pe,combine:w.combine,mapUv:ye&&x(w.map.channel),aoMapUv:tt&&x(w.aoMap.channel),lightMapUv:Ge&&x(w.lightMap.channel),bumpMapUv:$e&&x(w.bumpMap.channel),normalMapUv:we&&x(w.normalMap.channel),displacementMapUv:ft&&x(w.displacementMap.channel),emissiveMapUv:be&&x(w.emissiveMap.channel),metalnessMapUv:Ie&&x(w.metalnessMap.channel),roughnessMapUv:N&&x(w.roughnessMap.channel),anisotropyMapUv:fe&&x(w.anisotropyMap.channel),clearcoatMapUv:ge&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(w.sheenRoughnessMap.channel),specularMapUv:Ue&&x(w.specularMap.channel),specularColorMapUv:Be&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:ce&&x(w.thicknessMap.channel),alphaMapUv:ne&&x(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(we||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(ye||ne),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(M,w),_(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function g(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const M=v[w.type];let R;if(M){const B=Wn[M];R=wE.clone(B.uniforms)}else R=w.uniforms;return R}function b(w,M){let R;for(let B=0,k=u.length;B<k;B++){const Y=u[B];if(Y.cacheKey===M){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new OA(t,M,w,s),u.push(R)),R}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:L}}function VA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,v,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,p,v,x,m){const h=a(d,f,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function c(d,f,p,v,x,m){const h=a(d,f,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function l(d,f){n.length>1&&n.sort(d||GA),i.length>1&&i.sort(f||Zm),r.length>1&&r.sort(f||Zm)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function jA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qm,t.set(i,[a])):r>=s.length?(a=new Qm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function WA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ye};break;case"SpotLight":n={position:new X,direction:new X,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function XA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $A=0;function YA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qA(t){const e=new WA,n=XA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new vt,a=new vt;function o(l){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,g=0,_=0,S=0,b=0,A=0,C=0;l.sort(YA);for(let w=0,M=l.length;w<M;w++){const R=l[w],B=R.color,k=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*k,d+=B.g*k,f+=B.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],k);C++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,I=n.get(R);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=Y,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;const Q=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,Q.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=q,S++}x++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Q=R.shadow,I=n.get(R);I.shadowIntensity=Q.intensity,I.shadowBias=Q.bias,I.shadowNormalBias=Q.normalBias,I.shadowRadius=Q.radius,I.shadowMapSize=Q.mapSize,I.shadowCameraNear=Q.camera.near,I.shadowCameraFar=Q.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==g||L.numPointShadows!==_||L.numSpotShadows!==S||L.numSpotMaps!==b||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=p,L.pointLength=v,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=g,L.numPointShadows=_,L.numSpotShadows=S,L.numSpotMaps=b,L.numLightProbes=C,i.version=$A++)}function c(l,u){let d=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let h=0,g=l.length;h<g;h++){const _=l[h];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Jm(t){const e=new qA(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function KA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jm(t),e.set(r,[o])):s>=a.length?(o=new Jm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class ZA extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QA extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
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
}`;function tC(t,e,n){let i=new Ah;const r=new Xe,s=new Xe,a=new wt,o=new ZA({depthPacking:YM}),c=new QA,l={},u=n.maxTextureSize,d={[rr]:rn,[rn]:rr,[pi]:pi},f=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:JA,fragmentShader:eC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new dr;v.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vv;let h=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),B=t.state;B.setBlending(er),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=h!==di&&this.type===di,Y=h===di&&this.type!==di;for(let q=0,G=A.length;q<G;q++){const Q=A[q],I=Q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const V=I.getFrameExtents();if(r.multiply(V),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,I.mapSize.y=s.y)),I.map===null||k===!0||Y===!0){const Z=this.type!==di?{minFilter:Mn,magFilter:Mn}:{};I.map!==null&&I.map.dispose(),I.map=new Vr(r.x,r.y,Z),I.map.texture.name=Q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const H=I.getViewportCount();for(let Z=0;Z<H;Z++){const se=I.getViewport(Z);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),B.viewport(a),I.updateMatrices(Q,Z),i=I.getFrustum(),S(C,L,I.camera,Q,this.type)}I.isPointLightShadow!==!0&&this.type===di&&g(I,L),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,R)};function g(A,C){const L=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,L,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,L,p,x,null)}function _(A,C,L,w){let M=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?c:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,k=C.uuid;let Y=l[B];Y===void 0&&(Y={},l[B]=Y);let q=Y[k];q===void 0&&(q=M.clone(),Y[k]=q,C.addEventListener("dispose",b)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,w===di?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=L}return M}function S(A,C,L,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=k.groups;for(let G=0,Q=q.length;G<Q;G++){const I=q[G],V=Y[I.materialIndex];if(V&&V.visible){const H=_(A,V,w,M);A.onBeforeShadow(t,A,C,L,k,H,I),t.renderBufferDirect(L,null,k,H,A,I),A.onAfterShadow(t,A,C,L,k,H,I)}}}else if(Y.visible){const q=_(A,Y,w,M);A.onBeforeShadow(t,A,C,L,k,q,null),t.renderBufferDirect(L,null,k,q,A,null),A.onAfterShadow(t,A,C,L,k,q,null)}}const B=A.children;for(let k=0,Y=B.length;k<Y;k++)S(B[k],C,L,w,M)}function b(A){A.target.removeEventListener("dispose",b);for(const L in l){const w=l[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function nC(t){function e(){let U=!1;const ce=new wt;let J=null;const ne=new wt(0,0,0,0);return{setMask:function(de){J!==de&&!U&&(t.colorMask(de,de,de,de),J=de)},setLocked:function(de){U=de},setClear:function(de,Pe,je,_t,Lt){Lt===!0&&(de*=_t,Pe*=_t,je*=_t),ce.set(de,Pe,je,_t),ne.equals(ce)===!1&&(t.clearColor(de,Pe,je,_t),ne.copy(ce))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,ce=null,J=null,ne=null;return{setTest:function(de){de?K(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!U&&(t.depthMask(de),ce=de)},setFunc:function(de){if(J!==de){switch(de){case PM:t.depthFunc(t.NEVER);break;case LM:t.depthFunc(t.ALWAYS);break;case NM:t.depthFunc(t.LESS);break;case tc:t.depthFunc(t.LEQUAL);break;case DM:t.depthFunc(t.EQUAL);break;case IM:t.depthFunc(t.GEQUAL);break;case UM:t.depthFunc(t.GREATER);break;case FM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){ne!==de&&(t.clearDepth(de),ne=de)},reset:function(){U=!1,ce=null,J=null,ne=null}}}function i(){let U=!1,ce=null,J=null,ne=null,de=null,Pe=null,je=null,_t=null,Lt=null;return{setTest:function(qe){U||(qe?K(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!U&&(t.stencilMask(qe),ce=qe)},setFunc:function(qe,ri,Hn){(J!==qe||ne!==ri||de!==Hn)&&(t.stencilFunc(qe,ri,Hn),J=qe,ne=ri,de=Hn)},setOp:function(qe,ri,Hn){(Pe!==qe||je!==ri||_t!==Hn)&&(t.stencilOp(qe,ri,Hn),Pe=qe,je=ri,_t=Hn)},setLocked:function(qe){U=qe},setClear:function(qe){Lt!==qe&&(t.clearStencil(qe),Lt=qe)},reset:function(){U=!1,ce=null,J=null,ne=null,de=null,Pe=null,je=null,_t=null,Lt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,h=null,g=null,_=null,S=null,b=null,A=new Ye(0,0,0),C=0,L=!1,w=null,M=null,R=null,B=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=G>=2);let I=null,V={};const H=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),se=new wt().fromArray(H),De=new wt().fromArray(Z);function P(U,ce,J,ne){const de=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(U,Pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<J;je++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Pe}const oe={};oe[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(t.DEPTH_TEST),s.setFunc(tc),$e(!1),we(sm),K(t.CULL_FACE),tt(er);function K(U){l[U]!==!0&&(t.enable(U),l[U]=!0)}function re(U){l[U]!==!1&&(t.disable(U),l[U]=!1)}function _e(U,ce){return u[U]!==ce?(t.bindFramebuffer(U,ce),u[U]=ce,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(U,ce){let J=f,ne=!1;if(U){J=d.get(ce),J===void 0&&(J=[],d.set(ce,J));const de=U.textures;if(J.length!==de.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,je=de.length;Pe<je;Pe++)J[Pe]=t.COLOR_ATTACHMENT0+Pe;J.length=de.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function ye(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Ve={[Ar]:t.FUNC_ADD,[hM]:t.FUNC_SUBTRACT,[pM]:t.FUNC_REVERSE_SUBTRACT};Ve[mM]=t.MIN,Ve[gM]=t.MAX;const D={[vM]:t.ZERO,[_M]:t.ONE,[xM]:t.SRC_COLOR,[Nd]:t.SRC_ALPHA,[TM]:t.SRC_ALPHA_SATURATE,[EM]:t.DST_COLOR,[SM]:t.DST_ALPHA,[yM]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[wM]:t.ONE_MINUS_DST_COLOR,[MM]:t.ONE_MINUS_DST_ALPHA,[AM]:t.CONSTANT_COLOR,[CM]:t.ONE_MINUS_CONSTANT_COLOR,[bM]:t.CONSTANT_ALPHA,[RM]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(U,ce,J,ne,de,Pe,je,_t,Lt,qe){if(U===er){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(K(t.BLEND),v=!0),U!==fM){if(U!==x||qe!==L){if((m!==Ar||_!==Ar)&&(t.blendEquation(t.FUNC_ADD),m=Ar,_=Ar),qe)switch(U){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.ONE,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case om:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,g=null,S=null,b=null,A.set(0,0,0),C=0,x=U,L=qe}return}de=de||ce,Pe=Pe||J,je=je||ne,(ce!==m||de!==_)&&(t.blendEquationSeparate(Ve[ce],Ve[de]),m=ce,_=de),(J!==h||ne!==g||Pe!==S||je!==b)&&(t.blendFuncSeparate(D[J],D[ne],D[Pe],D[je]),h=J,g=ne,S=Pe,b=je),(_t.equals(A)===!1||Lt!==C)&&(t.blendColor(_t.r,_t.g,_t.b,Lt),A.copy(_t),C=Lt),x=U,L=!1}function Ge(U,ce){U.side===pi?re(t.CULL_FACE):K(t.CULL_FACE);let J=U.side===rn;ce&&(J=!J),$e(J),U.blending===Ls&&U.transparent===!1?tt(er):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function we(U){U!==cM?(K(t.CULL_FACE),U!==M&&(U===sm?t.cullFace(t.BACK):U===uM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),M=U}function ft(U){U!==R&&(q&&t.lineWidth(U),R=U)}function be(U,ce,J){U?(K(t.POLYGON_OFFSET_FILL),(B!==ce||k!==J)&&(t.polygonOffset(ce,J),B=ce,k=J)):re(t.POLYGON_OFFSET_FILL)}function Ie(U){U?K(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function N(U){U===void 0&&(U=t.TEXTURE0+Y-1),I!==U&&(t.activeTexture(U),I=U)}function E(U,ce,J){J===void 0&&(I===null?J=t.TEXTURE0+Y-1:J=I);let ne=V[J];ne===void 0&&(ne={type:void 0,texture:void 0},V[J]=ne),(ne.type!==U||ne.texture!==ce)&&(I!==J&&(t.activeTexture(J),I=J),t.bindTexture(U,ce||oe[U]),ne.type=U,ne.texture=ce)}function $(){const U=V[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function xe(U){De.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Ue(U,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let ne=J.get(U);ne===void 0&&(ne=t.getUniformBlockIndex(ce,U.name),J.set(U,ne))}function Be(U,ce){const ne=c.get(ce).get(U);o.get(ce)!==ne&&(t.uniformBlockBinding(ce,ne,U.__bindingPointIndex),o.set(ce,ne))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},I=null,V={},u={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,h=null,g=null,_=null,S=null,b=null,A=new Ye(0,0,0),C=0,L=!1,w=null,M=null,R=null,B=null,k=null,se.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:K,disable:re,bindFramebuffer:_e,drawBuffers:Ee,useProgram:ye,setBlending:tt,setMaterial:Ge,setFlipSided:$e,setCullFace:we,setLineWidth:ft,setPolygonOffset:be,setScissorTest:Ie,activeTexture:N,bindTexture:E,unbindTexture:$,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:me,texImage3D:ze,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Re,viewport:xe,reset:at}}function eg(t,e,n,i){const r=iC(i);switch(n){case Yv:return t*e;case Kv:return t*e;case Zv:return t*e*2;case Qv:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case Jv:return t*e*2/r.components*r.byteLength;case Mh:return t*e*2/r.components*r.byteLength;case qv:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case Eh:return t*e*4/r.components*r.byteLength;case xl:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case Bd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case El:case of:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16;case e_:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iC(t){switch(t){case Ai:case Wv:return{byteLength:1,components:1};case Ko:case Xv:case la:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case Hr:case _h:case vi:return{byteLength:4,components:1};case $v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function rC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,E){return p?new OffscreenCanvas(N,E):Zo("canvas")}function x(N,E,$){let ee=1;const ie=Ie(N);if((ie.width>$||ie.height>$)&&(ee=$/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const te=Math.floor(ee*ie.width),Ae=Math.floor(ee*ie.height);d===void 0&&(d=v(te,Ae));const fe=E?v(te,Ae):d;return fe.width=te,fe.height=Ae,fe.getContext("2d").drawImage(N,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+te+"x"+Ae+")."),fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==Mn&&N.minFilter!==Un}function h(N){t.generateMipmap(N)}function g(N,E,$,ee,ie=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let te=E;if(E===t.RED&&($===t.FLOAT&&(te=t.R32F),$===t.HALF_FLOAT&&(te=t.R16F),$===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.R8UI),$===t.UNSIGNED_SHORT&&(te=t.R16UI),$===t.UNSIGNED_INT&&(te=t.R32UI),$===t.BYTE&&(te=t.R8I),$===t.SHORT&&(te=t.R16I),$===t.INT&&(te=t.R32I)),E===t.RG&&($===t.FLOAT&&(te=t.RG32F),$===t.HALF_FLOAT&&(te=t.RG16F),$===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.RG8UI),$===t.UNSIGNED_SHORT&&(te=t.RG16UI),$===t.UNSIGNED_INT&&(te=t.RG32UI),$===t.BYTE&&(te=t.RG8I),$===t.SHORT&&(te=t.RG16I),$===t.INT&&(te=t.RG32I)),E===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),E===t.RGBA){const Ae=ie?nc:Je.getTransfer(ee);$===t.FLOAT&&(te=t.RGBA32F),$===t.HALF_FLOAT&&(te=t.RGBA16F),$===t.UNSIGNED_BYTE&&(te=Ae===rt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(N,E){let $;return N?E===null||E===Hr||E===Gs?$=t.DEPTH24_STENCIL8:E===vi?$=t.DEPTH32F_STENCIL8:E===Ko&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hr||E===Gs?$=t.DEPTH_COMPONENT24:E===vi?$=t.DEPTH_COMPONENT32F:E===Ko&&($=t.DEPTH_COMPONENT16),$}function S(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mn&&N.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function b(N){const E=N.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&u.delete(E)}function A(N){const E=N.target;E.removeEventListener("dispose",A),w(E)}function C(N){const E=i.get(N);if(E.__webglInit===void 0)return;const $=N.source,ee=f.get($);if(ee){const ie=ee[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(N),Object.keys(ee).length===0&&f.delete($)}i.remove(N)}function L(N){const E=i.get(N);t.deleteTexture(E.__webglTexture);const $=N.source,ee=f.get($);delete ee[E.__cacheKey],a.memory.textures--}function w(N){const E=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ie=0;ie<E.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=N.textures;for(let ee=0,ie=$.length;ee<ie;ee++){const te=i.get($[ee]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove($[ee])}i.remove(N)}let M=0;function R(){M=0}function B(){const N=M;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),M+=1,N}function k(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function Y(N,E){const $=i.get(N);if(N.isVideoTexture&&ft(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const ee=N.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De($,N,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function q(N,E){const $=i.get(N);if(N.version>0&&$.__version!==N.version){De($,N,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function G(N,E){const $=i.get(N);if(N.version>0&&$.__version!==N.version){De($,N,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function Q(N,E){const $=i.get(N);if(N.version>0&&$.__version!==N.version){P($,N,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const I={[Fd]:t.REPEAT,[Lr]:t.CLAMP_TO_EDGE,[Od]:t.MIRRORED_REPEAT},V={[Mn]:t.NEAREST,[XM]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},H={[KM]:t.NEVER,[nE]:t.ALWAYS,[ZM]:t.LESS,[n_]:t.LEQUAL,[QM]:t.EQUAL,[tE]:t.GEQUAL,[JM]:t.GREATER,[eE]:t.NOTEQUAL};function Z(N,E){if(E.type===vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===lu||E.magFilter===Ua||E.magFilter===Nr||E.minFilter===Un||E.minFilter===lu||E.minFilter===Ua||E.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,I[E.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,V[E.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,V[E.minFilter]),E.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,H[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==Ua&&E.minFilter!==Nr||E.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function se(N,E){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",b));const ee=E.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const te=k(E);if(te!==N.__cacheKey){ie[te]===void 0&&(ie[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ie[te].usedTimes++;const Ae=ie[N.__cacheKey];Ae!==void 0&&(ie[N.__cacheKey].usedTimes--,Ae.usedTimes===0&&L(E)),N.__cacheKey=te,N.__webglTexture=ie[te].texture}return $}function De(N,E,$){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=se(N,E),te=E.source;n.bindTexture(ee,N.__webglTexture,t.TEXTURE0+$);const Ae=i.get(te);if(te.version!==Ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+$);const fe=Je.getPrimaries(Je.workingColorSpace),ge=E.colorSpace===Vi?null:Je.getPrimaries(E.colorSpace),Fe=E.colorSpace===Vi||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=x(E.image,!1,r.maxTextureSize);le=be(E,le);const me=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let Re=g(E.internalFormat,me,ze,E.colorSpace,E.isVideoTexture);Z(ee,E);let xe;const Ue=E.mipmaps,Be=E.isVideoTexture!==!0,at=Ae.__version===void 0||ie===!0,U=te.dataReady,ce=S(E,le);if(E.isDepthTexture)Re=_(E.format===js,E.type),at&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Re,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,ze,null));else if(E.isDataTexture)if(Ue.length>0){Be&&at&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)xe=Ue[J],Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,me,ze,xe.data):n.texImage2D(t.TEXTURE_2D,J,Re,xe.width,xe.height,0,me,ze,xe.data);E.generateMipmaps=!1}else Be?(at&&n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,me,ze,le.data)):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,ze,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,Ue[0].width,Ue[0].height,le.depth);for(let J=0,ne=Ue.length;J<ne;J++)if(xe=Ue[J],E.format!==Fn)if(me!==null)if(Be){if(U)if(E.layerUpdates.size>0){const de=eg(xe.width,xe.height,E.format,E.type);for(const Pe of E.layerUpdates){const je=xe.data.subarray(Pe*de/xe.data.BYTES_PER_ELEMENT,(Pe+1)*de/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Pe,xe.width,xe.height,1,me,je,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,le.depth,me,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Re,xe.width,xe.height,le.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,le.depth,me,ze,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Re,xe.width,xe.height,le.depth,0,me,ze,xe.data)}else{Be&&at&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)xe=Ue[J],E.format!==Fn?me!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,me,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,me,ze,xe.data):n.texImage2D(t.TEXTURE_2D,J,Re,xe.width,xe.height,0,me,ze,xe.data)}else if(E.isDataArrayTexture)if(Be){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,le.width,le.height,le.depth),U)if(E.layerUpdates.size>0){const J=eg(le.width,le.height,E.format,E.type);for(const ne of E.layerUpdates){const de=le.data.subarray(ne*J/le.data.BYTES_PER_ELEMENT,(ne+1)*J/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,me,ze,de)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,ze,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,me,ze,le.data);else if(E.isData3DTexture)Be?(at&&n.texStorage3D(t.TEXTURE_3D,ce,Re,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,ze,le.data)):n.texImage3D(t.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,me,ze,le.data);else if(E.isFramebufferTexture){if(at)if(Be)n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height);else{let J=le.width,ne=le.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,Re,J,ne,0,me,ze,null),J>>=1,ne>>=1}}else if(Ue.length>0){if(Be&&at){const J=Ie(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}for(let J=0,ne=Ue.length;J<ne;J++)xe=Ue[J],Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,me,ze,xe):n.texImage2D(t.TEXTURE_2D,J,Re,me,ze,xe);E.generateMipmaps=!1}else if(Be){if(at){const J=Ie(le);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ze,le)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,ze,le);m(E)&&h(ee),Ae.__version=te.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function P(N,E,$){if(E.image.length!==6)return;const ee=se(N,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+$);const te=i.get(ie);if(ie.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+$);const Ae=Je.getPrimaries(Je.workingColorSpace),fe=E.colorSpace===Vi?null:Je.getPrimaries(E.colorSpace),ge=E.colorSpace===Vi||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Fe&&!le?me[ne]=x(E.image[ne],!0,r.maxCubemapSize):me[ne]=le?E.image[ne].image:E.image[ne],me[ne]=be(E,me[ne]);const ze=me[0],Re=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Ue=g(E.internalFormat,Re,xe,E.colorSpace),Be=E.isVideoTexture!==!0,at=te.__version===void 0||ee===!0,U=ie.dataReady;let ce=S(E,ze);Z(t.TEXTURE_CUBE_MAP,E);let J;if(Fe){Be&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,ze.width,ze.height);for(let ne=0;ne<6;ne++){J=me[ne].mipmaps;for(let de=0;de<J.length;de++){const Pe=J[de];E.format!==Fn?Re!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,xe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Re,xe,Pe.data)}}}else{if(J=E.mipmaps,Be&&at){J.length>0&&ce++;const ne=Ie(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Re,xe,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,me[ne].width,me[ne].height,0,Re,xe,me[ne].data);for(let de=0;de<J.length;de++){const je=J[de].image[ne].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,je.width,je.height,Re,xe,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,je.width,je.height,0,Re,xe,je.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,xe,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Re,xe,me[ne]);for(let de=0;de<J.length;de++){const Pe=J[de];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Re,xe,Pe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,Re,xe,Pe.image[ne])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),te.__version=ie.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function oe(N,E,$,ee,ie,te){const Ae=s.convert($.format,$.colorSpace),fe=s.convert($.type),ge=g($.internalFormat,Ae,fe,$.colorSpace);if(!i.get(E).__hasExternalTextures){const le=Math.max(1,E.width>>te),me=Math.max(1,E.height>>te);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,te,ge,le,me,E.depth,0,Ae,fe,null):n.texImage2D(ie,te,ge,le,me,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),we(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,0,$e(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(N,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,N),E.depthBuffer){const ee=E.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,te=_(E.stencilBuffer,ie),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(E);we(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,E.width,E.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,N)}else{const ee=E.textures;for(let ie=0;ie<ee.length;ie++){const te=ee[ie],Ae=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ge=g(te.internalFormat,Ae,fe,te.colorSpace),Fe=$e(E);$&&we(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,E.width,E.height):we(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ie=$e(E);if(E.depthTexture.format===Ns)we(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===js)we(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function _e(N){const E=i.get(N),$=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ee=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ee}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");re(E.__webglFramebuffer,N)}else if($){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),K(E.__webglDepthbuffer[ee],N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),K(E.__webglDepthbuffer,N,!1);else{const ee=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(N,E,$){const ee=i.get(N);E!==void 0&&oe(ee.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&_e(N)}function ye(N){const E=N.texture,$=i.get(N),ee=i.get(E);N.addEventListener("dispose",A);const ie=N.textures,te=N.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,a.memory.textures++),te){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)$.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=i.get(ie[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&we(N)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ge=ie[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Fe=s.convert(ge.format,ge.colorSpace),le=s.convert(ge.type),me=g(ge.internalFormat,Fe,le,ge.colorSpace,N.isXRRenderTarget===!0),ze=$e(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,me,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),K($.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Z(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)oe($.__webglFramebuffer[fe][ge],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else oe($.__webglFramebuffer[fe],N,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=ie[fe],le=i.get(Fe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Z(t.TEXTURE_2D,Fe),oe($.__webglFramebuffer,N,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Fe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),Z(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)oe($.__webglFramebuffer[ge],N,E,t.COLOR_ATTACHMENT0,fe,ge);else oe($.__webglFramebuffer,N,E,t.COLOR_ATTACHMENT0,fe,0);m(E)&&h(fe),n.unbindTexture()}N.depthBuffer&&_e(N)}function Ve(N){const E=N.textures;for(let $=0,ee=E.length;$<ee;$++){const ie=E[$];if(m(ie)){const te=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ie).__webglTexture;n.bindTexture(te,Ae),h(te),n.unbindTexture()}}}const D=[],tt=[];function Ge(N){if(N.samples>0){if(we(N)===!1){const E=N.textures,$=N.width,ee=N.height;let ie=t.COLOR_BUFFER_BIT;const te=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(N),fe=E.length>1;if(fe)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Fe=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,ie,t.NEAREST),c===!0&&(D.length=0,tt.length=0,D.push(t.COLOR_ATTACHMENT0+ge),N.depthBuffer&&N.resolveDepthBuffer===!1&&(D.push(te),tt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const Fe=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const E=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function $e(N){return Math.min(r.maxSamples,N.samples)}function we(N){const E=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(N){const E=a.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function be(N,E){const $=N.colorSpace,ee=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==ur&&$!==Vi&&(Je.getTransfer($)===rt?(ee!==Fn||ie!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=we}function sC(t,e){function n(i,r=Vi){let s;const a=Je.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===xh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$v)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wv)return t.BYTE;if(i===Xv)return t.SHORT;if(i===Ko)return t.UNSIGNED_SHORT;if(i===_h)return t.INT;if(i===Hr)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===la)return t.HALF_FLOAT;if(i===Yv)return t.ALPHA;if(i===qv)return t.RGB;if(i===Fn)return t.RGBA;if(i===Kv)return t.LUMINANCE;if(i===Zv)return t.LUMINANCE_ALPHA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===Qv)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===Jv)return t.RG;if(i===Mh)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===xl||i===yl||i===Sl||i===Ml)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===zd||i===Bd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Gd)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wd||i===Xd||i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$d)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ef)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===of||i===af)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===El)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===e_||i===lf||i===cf||i===uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===El)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class oC extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class il extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aC={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;l.inputState.pinching&&f>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aC)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
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

}`;class uC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sr({vertexShader:lC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dC extends Zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,v=null;const x=new uC,m=n.getContextAttributes();let h=null,g=null;const _=[],S=[],b=new Xe;let A=null;const C=new xn;C.layers.enable(1),C.viewport=new wt;const L=new xn;L.layers.enable(2),L.viewport=new wt;const w=[C,L],M=new oC;M.layers.enable(1),M.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let oe=_[P];return oe===void 0&&(oe=new Uu,_[P]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(P){let oe=_[P];return oe===void 0&&(oe=new Uu,_[P]=oe),oe.getGripSpace()},this.getHand=function(P){let oe=_[P];return oe===void 0&&(oe=new Uu,_[P]=oe),oe.getHandSpace()};function k(P){const oe=S.indexOf(P.inputSource);if(oe===-1)return;const K=_[oe];K!==void 0&&(K.update(P.inputSource,P.frame,l||a),K.dispatchEvent({type:P.type,data:P.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let P=0;P<_.length;P++){const oe=S[P];oe!==null&&(S[P]=null,_[P].disconnect(oe))}R=null,B=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,g=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Vr(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,K=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?js:Ns,K=m.stencil?Gs:Hr);const _e={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Vr(f.textureWidth,f.textureHeight,{format:Fn,type:Ai,depthTexture:new g_(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(P){for(let oe=0;oe<P.removed.length;oe++){const K=P.removed[oe],re=S.indexOf(K);re>=0&&(S[re]=null,_[re].disconnect(K))}for(let oe=0;oe<P.added.length;oe++){const K=P.added[oe];let re=S.indexOf(K);if(re===-1){for(let Ee=0;Ee<_.length;Ee++)if(Ee>=S.length){S.push(K),re=Ee;break}else if(S[Ee]===null){S[Ee]=K,re=Ee;break}if(re===-1)break}const _e=_[re];_e&&_e.connect(K)}}const G=new X,Q=new X;function I(P,oe,K){G.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(K.matrixWorld);const re=G.distanceTo(Q),_e=oe.projectionMatrix.elements,Ee=K.projectionMatrix.elements,ye=_e[14]/(_e[10]-1),Ve=_e[14]/(_e[10]+1),D=(_e[9]+1)/_e[5],tt=(_e[9]-1)/_e[5],Ge=(_e[8]-1)/_e[0],$e=(Ee[8]+1)/Ee[0],we=ye*Ge,ft=ye*$e,be=re/(-Ge+$e),Ie=be*-Ge;if(oe.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ie),P.translateZ(be),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),_e[10]===-1)P.projectionMatrix.copy(oe.projectionMatrix),P.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const N=ye+be,E=Ve+be,$=we-Ie,ee=ft+(re-Ie),ie=D*Ve/E*N,te=tt*Ve/E*N;P.projectionMatrix.makePerspective($,ee,ie,te,N,E),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function V(P,oe){oe===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(oe.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let oe=P.near,K=P.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(K=x.depthFar)),M.near=L.near=C.near=oe,M.far=L.far=C.far=K,(R!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,B=M.far);const re=P.parent,_e=M.cameras;V(M,re);for(let Ee=0;Ee<_e.length;Ee++)V(_e[Ee],re);_e.length===2?I(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),H(P,M,re)};function H(P,oe,K){K===null?P.matrix.copy(oe.matrixWorld):(P.matrix.copy(K.matrixWorld),P.matrix.invert(),P.matrix.multiply(oe.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(oe.projectionMatrix),P.projectionMatrixInverse.copy(oe.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=df*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(P){c=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Z=null;function se(P,oe){if(u=oe.getViewerPose(l||a),v=oe,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let re=!1;K.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Ee=0;Ee<K.length;Ee++){const ye=K[Ee];let Ve=null;if(p!==null)Ve=p.getViewport(ye);else{const tt=d.getViewSubImage(f,ye);Ve=tt.viewport,Ee===0&&(e.setRenderTargetTextures(g,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(g))}let D=w[Ee];D===void 0&&(D=new xn,D.layers.enable(Ee),D.viewport=new wt,w[Ee]=D),D.matrix.fromArray(ye.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ye.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ee===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(D)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Ee=d.getDepthInformation(K[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,r.renderState)}}for(let K=0;K<_.length;K++){const re=S[K],_e=_[K];re!==null&&_e!==void 0&&_e.update(re,oe,l||a)}Z&&Z(P,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const De=new p_;De.setAnimationLoop(se),this.setAnimationLoop=function(P){Z=P},this.dispose=function(){}}}const yr=new ti,fC=new vt;function hC(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,d_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,g,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,yr.copy(S),yr.x*=-1,yr.y*=-1,yr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(fC.makeRotationFromEuler(yr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,g,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function l(g,_){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function u(g){const _=d();g.__bindingPointIndex=_;const S=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,C=S.length;A<C;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=L.length;w<M;w++){const R=L[w];if(p(R,A,w,b)===!0){const B=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let q=0;q<k.length;q++){const G=k[q],Q=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,B+Y,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,b){const A=g.value,C=_+"_"+S;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const L=b[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return b[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const b=16;for(let C=0,L=_.length;C<L;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,R=w.length;M<R;M++){const B=w[M],k=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,q=k.length;Y<q;Y++){const G=k[Y],Q=x(G),I=S%b,V=I%Q.boundary,H=I+V;S+=V,H!==0&&b-H<Q.storage&&(S+=b-H),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Q.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class mC{constructor(e={}){const{canvas:n=rE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=tr,this.toneMappingExposure=1;const _=this;let S=!1,b=0,A=0,C=null,L=-1,w=null;const M=new wt,R=new wt;let B=null;const k=new Ye(0);let Y=0,q=n.width,G=n.height,Q=1,I=null,V=null;const H=new wt(0,0,q,G),Z=new wt(0,0,q,G);let se=!1;const De=new Ah;let P=!1,oe=!1;const K=new vt,re=new X,_e=new wt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ve(){return C===null?Q:1}let D=i;function tt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const F="webgl2";if(D=tt(F,T),D===null)throw tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,$e,we,ft,be,Ie,N,E,$,ee,ie,te,Ae,fe,ge,Fe,le,me,ze,Re,xe,Ue,Be,at;function U(){Ge=new S2(D),Ge.init(),Ue=new sC(D,Ge),$e=new m2(D,Ge,e,Ue),we=new nC(D),ft=new w2(D),be=new VA,Ie=new rC(D,Ge,we,be,$e,Ue,ft),N=new v2(_),E=new y2(_),$=new LE(D),Be=new h2(D,$),ee=new M2(D,$,ft,Be),ie=new A2(D,ee,$,ft),ze=new T2(D,$e,Ie),Fe=new g2(be),te=new HA(_,N,E,Ge,$e,Be,Fe),Ae=new hC(_,be),fe=new jA,ge=new KA(Ge),me=new f2(_,N,E,we,ie,f,c),le=new tC(_,ie,$e),at=new pC(D,ft,$e,we),Re=new p2(D,Ge,ft),xe=new E2(D,Ge,ft),ft.programs=te.programs,_.capabilities=$e,_.extensions=Ge,_.properties=be,_.renderLists=fe,_.shadowMap=le,_.state=we,_.info=ft}U();const ce=new dC(_,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(q,G,!1))},this.getSize=function(T){return T.set(q,G)},this.setSize=function(T,F,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,G=F,n.width=Math.floor(T*Q),n.height=Math.floor(F*Q),j===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*Q,G*Q).floor()},this.setDrawingBufferSize=function(T,F,j){q=T,G=F,Q=j,n.width=Math.floor(T*j),n.height=Math.floor(F*j),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(H)},this.setViewport=function(T,F,j,W){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,F,j,W),we.viewport(M.copy(H).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,F,j,W){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,j,W),we.scissor(R.copy(Z).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){we.setScissorTest(se=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,F=!0,j=!0){let W=0;if(T){let O=!1;if(C!==null){const ue=C.texture.format;O=ue===Eh||ue===Mh||ue===Sh}if(O){const ue=C.texture.type,pe=ue===Ai||ue===Hr||ue===Ko||ue===Gs||ue===xh||ue===yh,Se=me.getClearColor(),Me=me.getClearAlpha(),Le=Se.r,Ne=Se.g,Te=Se.b;pe?(p[0]=Le,p[1]=Ne,p[2]=Te,p[3]=Me,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Le,v[1]=Ne,v[2]=Te,v[3]=Me,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ge.dispose(),be.dispose(),N.dispose(),E.dispose(),ie.dispose(),Be.dispose(),at.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Hn),ce.removeEventListener("sessionend",Ph),hr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=ft.autoReset,F=le.enabled,j=le.autoUpdate,W=le.needsUpdate,O=le.type;U(),ft.autoReset=T,le.enabled=F,le.autoUpdate=j,le.needsUpdate=W,le.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const F=T.target;F.removeEventListener("dispose",Pe),je(F)}function je(T){_t(T),be.remove(T)}function _t(T){const F=be.get(T).programs;F!==void 0&&(F.forEach(function(j){te.releaseProgram(j)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,j,W,O,ue){F===null&&(F=Ee);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=b_(T,F,j,W,O);we.setMaterial(W,pe);let Me=j.index,Le=1;if(W.wireframe===!0){if(Me=ee.getWireframeAttribute(j),Me===void 0)return;Le=2}const Ne=j.drawRange,Te=j.attributes.position;let Ke=Ne.start*Le,ht=(Ne.start+Ne.count)*Le;ue!==null&&(Ke=Math.max(Ke,ue.start*Le),ht=Math.min(ht,(ue.start+ue.count)*Le)),Me!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Me.count)):Te!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Te.count));const pt=ht-Ke;if(pt<0||pt===1/0)return;Be.setup(O,W,Se,j,Me);let sn,Ze=Re;if(Me!==null&&(sn=$.get(Me),Ze=xe,Ze.setIndex(sn)),O.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*Ve()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Ve()),O.isLineSegments?Ze.setMode(D.LINES):O.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else O.isPoints?Ze.setMode(D.POINTS):O.isSprite&&Ze.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Nt=O._multiDrawCounts,Qe=O._multiDrawCount,An=Me?$.get(Me).bytesPerElement:1,$r=be.get(W).currentProgram.getUniforms();for(let on=0;on<Qe;on++)$r.setValue(D,"_gl_DrawID",on),Ze.render(Ce[on]/An,Nt[on])}else if(O.isInstancedMesh)Ze.renderInstances(Ke,pt,O.count);else if(j.isInstancedBufferGeometry){const Ce=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,Ce);Ze.renderInstances(Ke,pt,Nt)}else Ze.render(Ke,pt)};function Lt(T,F,j){T.transparent===!0&&T.side===pi&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,ga(T,F,j),T.side=rr,T.needsUpdate=!0,ga(T,F,j),T.side=pi):ga(T,F,j)}this.compile=function(T,F,j=null){j===null&&(j=T),m=ge.get(j),m.init(F),g.push(m),j.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==j&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return T.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const Se=ue[pe];Lt(Se,j,O),W.add(Se)}else Lt(ue,j,O),W.add(ue)}),g.pop(),m=null,W},this.compileAsync=function(T,F,j=null){const W=this.compile(T,F,j);return new Promise(O=>{function ue(){if(W.forEach(function(pe){be.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(T);return}setTimeout(ue,10)}Ge.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qe=null;function ri(T){qe&&qe(T)}function Hn(){hr.stop()}function Ph(){hr.start()}const hr=new p_;hr.setAnimationLoop(ri),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(T){qe=T,ce.setAnimationLoop(T),T===null?hr.stop():hr.start()},ce.addEventListener("sessionstart",Hn),ce.addEventListener("sessionend",Ph),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,C),m=ge.get(T,g.length),m.init(F),g.push(m),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(K),oe=this.localClippingEnabled,P=Fe.init(this.clippingPlanes,oe),x=fe.get(T,h.length),x.init(),h.push(x),ce.enabled===!0&&ce.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Pc(ue,F,-1/0,_.sortObjects)}Pc(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(I,V),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&me.addToRenderList(x,T),this.info.render.frame++,P===!0&&Fe.beginShadows();const j=m.state.shadowsArray;le.render(j,T,F),P===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,O=x.transmissive;if(m.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let pe=0,Se=ue.length;pe<Se;pe++){const Me=ue[pe];Nh(W,O,T,Me)}ye&&me.render(T);for(let pe=0,Se=ue.length;pe<Se;pe++){const Me=ue[pe];Lh(x,T,Me,Me.viewport)}}else O.length>0&&Nh(W,O,T,F),ye&&me.render(T),Lh(x,T,F);C!==null&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,F),Be.resetDefaultState(),L=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],P===!0&&Fe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Pc(T,F,j,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){W&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const pe=ie.update(T),Se=T.material;Se.visible&&x.push(T,pe,Se,j,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){const pe=ie.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),_e.copy(pe.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const Me=pe.groups;for(let Le=0,Ne=Me.length;Le<Ne;Le++){const Te=Me[Le],Ke=Se[Te.materialIndex];Ke&&Ke.visible&&x.push(T,pe,Ke,j,_e.z,Te)}}else Se.visible&&x.push(T,pe,Se,j,_e.z,null)}}const ue=T.children;for(let pe=0,Se=ue.length;pe<Se;pe++)Pc(ue[pe],F,j,W)}function Lh(T,F,j,W){const O=T.opaque,ue=T.transmissive,pe=T.transparent;m.setupLightsView(j),P===!0&&Fe.setGlobalState(_.clippingPlanes,j),W&&we.viewport(M.copy(W)),O.length>0&&ma(O,F,j),ue.length>0&&ma(ue,F,j),pe.length>0&&ma(pe,F,j),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Nh(T,F,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Vr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?la:Ai,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ue=m.state.transmissionRenderTarget[W.id],pe=W.viewport||M;ue.setSize(pe.z,pe.w);const Se=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(k),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ye&&me.render(j);const Me=_.toneMapping;_.toneMapping=tr;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),P===!0&&Fe.setGlobalState(_.clippingPlanes,W),ma(T,j,W),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,Ke=F.length;Te<Ke;Te++){const ht=F[Te],pt=ht.object,sn=ht.geometry,Ze=ht.material,Ce=ht.group;if(Ze.side===pi&&pt.layers.test(W.layers)){const Nt=Ze.side;Ze.side=rn,Ze.needsUpdate=!0,Dh(pt,j,W,sn,Ze,Ce),Ze.side=Nt,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}_.setRenderTarget(Se),_.setClearColor(k,Y),Le!==void 0&&(W.viewport=Le),_.toneMapping=Me}function ma(T,F,j){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=T.length;O<ue;O++){const pe=T[O],Se=pe.object,Me=pe.geometry,Le=W===null?pe.material:W,Ne=pe.group;Se.layers.test(j.layers)&&Dh(Se,F,j,Me,Le,Ne)}}function Dh(T,F,j,W,O,ue){T.onBeforeRender(_,F,j,W,O,ue),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,j,W,T,ue),O.transparent===!0&&O.side===pi&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,_.renderBufferDirect(j,F,W,O,T,ue),O.side=rr,O.needsUpdate=!0,_.renderBufferDirect(j,F,W,O,T,ue),O.side=pi):_.renderBufferDirect(j,F,W,O,T,ue),T.onAfterRender(_,F,j,W,O,ue)}function ga(T,F,j){F.isScene!==!0&&(F=Ee);const W=be.get(T),O=m.state.lights,ue=m.state.shadowsArray,pe=O.state.version,Se=te.getParameters(T,O.state,ue,F,j),Me=te.getProgramCacheKey(Se);let Le=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?E:N).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Pe),Le=new Map,W.programs=Le);let Ne=Le.get(Me);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===pe)return Uh(T,Se),Ne}else Se.uniforms=te.getUniforms(T),T.onBeforeCompile(Se,_),Ne=te.acquireProgram(Se,Me),Le.set(Me,Ne),W.uniforms=Se.uniforms;const Te=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),Uh(T,Se),W.needsLights=P_(T),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function Ih(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=wl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Uh(T,F){const j=be.get(T);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function b_(T,F,j,W,O){F.isScene!==!0&&(F=Ee),Ie.resetTextureUnits();const ue=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Se=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ur,Me=(W.isMeshStandardMaterial?E:N).get(W.envMap||pe),Le=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let pt=tr;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=_.toneMapping);const sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=sn!==void 0?sn.length:0,Ce=be.get(W),Nt=m.state.lights;if(P===!0&&(oe===!0||T!==w)){const mn=T===w&&W.id===L;Fe.setState(W,T,mn)}let Qe=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Nt.state.version||Ce.outputColorSpace!==Se||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Me||W.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Fe.numPlanes||Ce.numIntersection!==Fe.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ne||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==ht||Ce.toneMapping!==pt||Ce.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ce.__version=W.version);let An=Ce.currentProgram;Qe===!0&&(An=ga(W,F,O));let $r=!1,on=!1,Lc=!1;const xt=An.getUniforms(),Pi=Ce.uniforms;if(we.useProgram(An.program)&&($r=!0,on=!0,Lc=!0),W.id!==L&&(L=W.id,on=!0),$r||w!==T){xt.setValue(D,"projectionMatrix",T.projectionMatrix),xt.setValue(D,"viewMatrix",T.matrixWorldInverse);const mn=xt.map.cameraPosition;mn!==void 0&&mn.setValue(D,re.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,on=!0,Lc=!0)}if(O.isSkinnedMesh){xt.setOptional(D,O,"bindMatrix"),xt.setOptional(D,O,"bindMatrixInverse");const mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xt.setValue(D,"boneTexture",mn.boneTexture,Ie))}O.isBatchedMesh&&(xt.setOptional(D,O,"batchingTexture"),xt.setValue(D,"batchingTexture",O._matricesTexture,Ie),xt.setOptional(D,O,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",O._indirectTexture,Ie),xt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",O._colorsTexture,Ie));const Nc=j.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0)&&ze.update(O,j,An),(on||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,xt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pi.envMap.value=Me,Pi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Pi.envMapIntensity.value=F.environmentIntensity),on&&(xt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&R_(Pi,Lc),ue&&W.fog===!0&&Ae.refreshFogUniforms(Pi,ue),Ae.refreshMaterialUniforms(Pi,W,Q,G,m.state.transmissionRenderTarget[T.id]),wl.upload(D,Ih(Ce),Pi,Ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wl.upload(D,Ih(Ce),Pi,Ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(D,"center",O.center),xt.setValue(D,"modelViewMatrix",O.modelViewMatrix),xt.setValue(D,"normalMatrix",O.normalMatrix),xt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const mn=W.uniformsGroups;for(let Dc=0,L_=mn.length;Dc<L_;Dc++){const Fh=mn[Dc];at.update(Fh,An),at.bind(Fh,An)}}return An}function R_(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function P_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,j){be.get(T.texture).__webglTexture=F,be.get(T.depthTexture).__webglTexture=j;const W=be.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const j=be.get(T);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,j=0){C=T,b=F,A=j;let W=!0,O=null,ue=!1,pe=!1;if(T){const Me=be.get(T);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(Me.__hasExternalTextures)Ie.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(Me.__boundDepthTexture!==Te){if(Te!==null&&be.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ne=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][j]:O=Ne[F],ue=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?O=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[j]:O=Ne,M.copy(T.viewport),R.copy(T.scissor),B=T.scissorTest}else M.copy(H).multiplyScalar(Q).floor(),R.copy(Z).multiplyScalar(Q).floor(),B=se;if(we.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&we.drawBuffers(T,O),we.viewport(M),we.scissor(R),we.setScissorTest(B),ue){const Me=be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,j)}else if(pe){const Me=be.get(T.texture),Le=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,j||0,Le)}L=-1},this.readRenderTargetPixels=function(T,F,j,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=T.texture,Le=Me.format,Ne=Me.type;if(!$e.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&j>=0&&j<=T.height-O&&D.readPixels(F,j,W,O,Ue.convert(Le),Ue.convert(Ne),ue)}finally{const Me=C!==null?be.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,F,j,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=T.texture,Le=Me.format,Ne=Me.type;if(!$e.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&j>=0&&j<=T.height-O){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,j,W,O,Ue.convert(Le),Ue.convert(Ne),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await sE(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Te),D.deleteSync(Ke)}return ue}}finally{const Me=C!==null?be.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(T,F=null,j=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-j),O=Math.floor(T.image.width*W),ue=Math.floor(T.image.height*W),pe=F!==null?F.x:0,Se=F!==null?F.y:0;Ie.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,pe,Se,O,ue),we.unbindTexture()},this.copyTextureToTexture=function(T,F,j=null,W=null,O=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,j=null);let ue,pe,Se,Me,Le,Ne;j!==null?(ue=j.max.x-j.min.x,pe=j.max.y-j.min.y,Se=j.min.x,Me=j.min.y):(ue=T.image.width,pe=T.image.height,Se=0,Me=0),W!==null?(Le=W.x,Ne=W.y):(Le=0,Ne=0);const Te=Ue.convert(F.format),Ke=Ue.convert(F.type);Ie.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Ce=D.getParameter(D.UNPACK_SKIP_IMAGES),Nt=T.isCompressedTexture?T.mipmaps[O]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Le,Ne,ue,pe,Te,Ke,Nt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Le,Ne,Nt.width,Nt.height,Te,Nt.data):D.texSubImage2D(D.TEXTURE_2D,O,Le,Ne,ue,pe,Te,Ke,Nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,F,j=null,W=null,O=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ue,pe,Se,Me,Le,Ne,Te,Ke,ht;const pt=T.isCompressedTexture?T.mipmaps[O]:T.image;j!==null?(ue=j.max.x-j.min.x,pe=j.max.y-j.min.y,Se=j.max.z-j.min.z,Me=j.min.x,Le=j.min.y,Ne=j.min.z):(ue=pt.width,pe=pt.height,Se=pt.depth,Me=0,Le=0,Ne=0),W!==null?(Te=W.x,Ke=W.y,ht=W.z):(Te=0,Ke=0,ht=0);const sn=Ue.convert(F.format),Ze=Ue.convert(F.type);let Ce;if(F.isData3DTexture)Ie.setTexture3D(F,0),Ce=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ie.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),An=D.getParameter(D.UNPACK_SKIP_PIXELS),$r=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,sn,Ze,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,sn,pt.data):D.texSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,sn,Ze,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,An),D.pixelStorei(D.UNPACK_SKIP_ROWS,$r),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),O===0&&F.generateMipmaps&&D.generateMipmap(Ce),we.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===wh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Ac?"display-p3":"srgb"}}class gC extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class bh extends dr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new X,f=new X,p=[],v=[],x=[],m=[];for(let h=0;h<=i;h++){const g=[],_=h/i;let S=0;h===0&&a===0?S=.5/n:h===i&&c===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const A=b/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-_),g.push(l++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const _=u[h][g+1],S=u[h][g],b=u[h+1][g],A=u[h+1][g+1];(h!==0||a>0)&&p.push(_,S,A),(h!==i-1||c<Math.PI)&&p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Qn(v,3)),this.setAttribute("normal",new Qn(x,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vC extends fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _C{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],v=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const xC=new _C;class Rh{constructor(e){this.manager=e!==void 0?e:xC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rh.DEFAULT_MATERIAL_NAME="__DEFAULT";class yC extends Rh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=tg.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Zo("img");function c(){u(),tg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class SC extends Rh{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new yC(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class S_ extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Fu=new vt,ng=new X,ig=new X;class MC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EC extends MC{constructor(){super(new m_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wC extends S_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new EC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TC extends S_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);function AC(){const t=z.useRef(null),e=z.useRef(!1),n=z.useRef({x:0,y:0});return z.useEffect(()=>{if(!t.current)return;const i=new gC,r=new xn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new mC({antialias:!0,alpha:!0}),a=()=>{if(t.current){const{clientWidth:g,clientHeight:_}=t.current;s.setSize(g,_),r.aspect=g/_,r.updateProjectionMatrix()}};a(),t.current.appendChild(s.domElement),window.addEventListener("resize",a);const c=new SC().load("images/profile.png"),l=new bh(3,32,32),u=new vC({map:c}),d=new Yn(l,u);i.add(d);const f=new TC,p=new wC(16777215,2);p.position.set(5,5,5),i.add(f),i.add(p),r.position.z=5;const v=g=>{e.current=!0,n.current={x:g.clientX,y:g.clientY}},x=g=>{if(!e.current)return;const _={x:g.clientX-n.current.x,y:g.clientY-n.current.y};d.rotation.y+=_.x*.005,d.rotation.x+=_.y*.005,n.current={x:g.clientX,y:g.clientY}},m=()=>{e.current=!1};t.current.addEventListener("mousedown",v),window.addEventListener("mousemove",x),window.addEventListener("mouseup",m);const h=()=>{requestAnimationFrame(h),e.current||(d.rotation.y+=.01),s.render(i,r)};return h(),()=>{t.current&&t.current.removeChild(s.domElement),window.removeEventListener("resize",a),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",m)}},[]),y.jsx(ei,{children:y.jsx("div",{ref:t,className:"w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] cursor-pointer"})})}const CC=()=>y.jsx(ii,{title:"Skills",children:y.jsxs("div",{className:"flex flex-col items-center space-y-4 sm:space-y-12",children:[y.jsx(ei,{children:y.jsx(Sn,{className:"sm:px-8",children:y.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-8",children:[y.jsx("div",{className:"relative w-40 h-40 sm:w-48 sm:h-48",children:y.jsx(AC,{})}),y.jsx(Sr,{title:"3D Rendering",description:"Expertise in creating interactive 3D graphics using various technologies.",skills:["OpenGL","WebGL","Three.js","Babylon.js"],hoverEffect:!1})]})})}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8",children:[y.jsx(Sr,{title:"Frontend & UI Development",description:"Creating intuitive and responsive user interfaces.",skills:["React.js","Next.js","Angular","HTML","CSS","JavaScript","TypeScript","Tailwind CSS"]}),y.jsx(Sr,{title:"Backend Development",description:"Proficiency in server-side development and building scalable backends.",skills:["Laravel","Django","MySQL","WordPress","Spring Boot"]}),y.jsx(Sr,{title:"Problem Solving & Algorithms",description:"Strong analytical skills for solving complex problems.",skills:["Algorithms","Data Structures","Problem Solving","Rapid Learning"]}),y.jsx(Sr,{title:"Design Patterns & Architecture",description:"Understanding of software design patterns and architecture.",skills:["Object-Oriented Programming (OOP)","System Design","UML","Software Design Patterns"]}),y.jsx(Sr,{title:"Version Control & Collaboration",description:"Skills in version control systems and collaborative development.",skills:["Git","Teamwork"]}),y.jsx(Sr,{title:"Programming Languages",description:"Experience in a variety of programming languages.",skills:["Python","JavaScript","C++","Java","PHP","C","C#"]})]})]})}),Sr=({title:t,description:e,skills:n,hoverEffect:i=!0})=>y.jsx("div",{children:y.jsx(ec,{children:y.jsxs(Sn,{hoverEffect:i,children:[y.jsx("h4",{className:"text-xl font-bold mb-2 text-white",children:t}),y.jsx("p",{className:"mb-4 text-white",children:e}),y.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>y.jsx("div",{className:"flex-grow",children:y.jsx(ei,{children:y.jsx("div",{className:"text-center text-primary-800 bg-white rounded-xl p-[6px] font-[800]",children:r},s)})},s))})]})})}),bC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(CC,{})})});function Ou({title:t,date:e,location:n,bulletPoints:i,side:r,dashedLine:s,className:a=""}){const o=y.jsxs(Sn,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[y.jsx("h3",{className:"text-xl font-semibold",children:t}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:e})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:n}),y.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:i.map((c,l)=>y.jsx("li",{className:"custom-bullet",children:c},l))})]});return y.jsxs("div",{className:`relative ${a}`,children:[y.jsx(ei,{children:y.jsx("div",{className:`hidden absolute top-[50%] w-[75%] h-32 border-t-4 border-primary-500 border-dashed -z-10 ${s=="onRight"&&"md:block left-full border-r-4 rounded-tr-[40px]"} ${s=="onLeft"&&"md:block right-full border-l-4 rounded-tl-[40px]"}`})}),r=="left"?y.jsx(Ql,{children:o}):y.jsx(Zl,{children:o})]})}const mo=[{title:"Freelance Web Developer",date:"11/2024 – Present",location:"Stark Technologies, Serbia (Remote)",bulletPoints:["Developing diverse projects using React and Next.js.","Crafting high-performance, interactive frontend experiences."],className:""},{title:"Freelance Web Developer",date:"08/2024 – Present",location:"Eyes360, Cairo, Egypt (Remote)",bulletPoints:["Working on WebGL projects, integrating 3D rendering into web applications.","Delivering optimized, interactive frontend solutions."],className:"mt-48 lg:mt-40"},{title:"Front-End Web Developer",date:"02/2024 – 09/2024",location:"Divcodes, Beirut, Lebanon (Remote)",bulletPoints:["Worked in Front-End Development using React, Next.js, and TypeScript.","Involved in 2 projects, enhancing React development skills.","Utilized RESTful APIs in both projects and integrated Next.js."],className:"mt-40 lg:mt-32"},{title:"Full-Stack Web Developer",date:"09/2022 – 02/2024",location:"Aratech, Dubai, UAE (Remote)",bulletPoints:["Gained 1.5 years of experience in Laravel and MVC architecture.","Worked on 10+ projects using HTML, CSS, JavaScript.","Developed 5+ projects using PHP, Laravel Framework, Tailwind, and jQuery.","Contributed to 2 projects using Laravel Nova and Google Map API.","Worked on 5 WordPress projects."],className:"mt-48 lg:mt-40"},{title:"ICPC Contestant - Problem Setter - Coach",date:"2018 – 2021",location:"",bulletPoints:["Regional Contestant in ACPC 2021.","Silver medal in the SCPC 2021.","Golden medal in the Girls ACPC 2020.","Problem Setter at SCPC 2020.","Expert rank on Codeforces website."],className:"mt-52 lg:mt-44"}],RC=()=>y.jsxs(ii,{title:"Experience",children:[y.jsxs("div",{className:"relative hidden md:flex gap-8 justify-between text-left",children:[y.jsx("div",{children:mo.filter((t,e)=>e%2===0).map((t,e,n)=>y.jsx(Ou,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"left",dashedLine:e===n.length-1&&mo.length%2===1?"none":"onRight",className:t.className},e))}),y.jsx("div",{children:mo.filter((t,e)=>e%2===1).map((t,e,n)=>y.jsx(Ou,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"right",dashedLine:e===n.length-1&&mo.length%2===0?"none":"onLeft",className:t.className},e))})]}),y.jsx("div",{className:"md:hidden space-y-4 sm:space-y-8",children:mo.map((t,e)=>y.jsx(Ou,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:e%2==0?"left":"right",dashedLine:"none",className:t.className},e))})]}),PC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(RC,{})})}),hf=[{href:"",text:"Home"},{href:"skills",text:"Skills"},{href:"experience",text:"Experience"},{href:"projects",text:"Projects"},{href:"education",text:"Education"},{href:"certificates",text:"Certificates"},{href:"achievements",text:"Achievements"},{href:"fun-facts",text:"Fun Facts"},{href:"languages",text:"Languages"},{href:"contact",text:"Contact"}],pf=({href:t,text:e,whiteLine:n=!1})=>{const{theme:i}=Wr(),r=Rv();return y.jsxs("li",{onClick:()=>r(`portfolio/${t}`),className:"relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]",children:[e,y.jsx("span",{className:`${i==="light"?n?"bg-white":"bg-black":"bg-white"} absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`})]})};function LC(){return y.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M3 6h18M3 12h18M3 18h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}const NC=()=>{const[t,e]=z.useState(!1),[n,i]=z.useState(!1),{theme:r,setTheme:s}=Wr(),a=z.useRef(null);return z.useEffect(()=>{const o=setTimeout(()=>{e(!0)},100);return()=>clearTimeout(o)},[]),z.useEffect(()=>{const o=c=>{a.current&&!a.current.contains(c.target)&&i(!1)};return n?document.addEventListener("mousedown",o):document.removeEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[n]),y.jsx("header",{className:`fixed w-full top-0 left-0 backdrop-blur-lg shadow-xl z-50 transition-opacity duration-[1500ms] ${r=="light"?"bg-white bg-opacity-50":"bg-black bg-opacity-60"} ${t?"opacity-100":"opacity-0"}`,children:y.jsxs("nav",{className:"container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center",children:[y.jsxs("div",{className:"lg:hidden relative",ref:a,children:[y.jsx("button",{onClick:()=>i(!n),className:"cursor-pointer",children:y.jsx(LC,{})}),y.jsx("div",{className:`${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"} bg-secondary-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`,children:y.jsx("ul",{className:"flex flex-col gap-4",children:hf.map((o,c)=>y.jsx("div",{onClick:()=>i(!1),children:y.jsx(pf,{href:o.href,text:o.text})},c))})})]}),y.jsx("ul",{className:"hidden lg:flex space-x-6",children:hf.map((o,c)=>y.jsx(pf,{href:o.href,text:o.text},c))}),y.jsx("button",{onClick:()=>s(r==="light"?"dark":"light"),className:"relative w-12 h-7 rounded-full transition-all duration-300 bg-gradient-to-b from-pumpkin-500 to-pumpkin-700 shadow-lg shadow-inner",children:y.jsx("span",{className:`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 bg-gradient-to-b from-pumpkin-100 to-white border border-pumpkin-600 shadow-md ${r==="dark"?"translate-x-5":"translate-x-0"}`})})]})})},DC=()=>y.jsx(ii,{title:"Education",children:y.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-x-12 gap-y-6",children:[y.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[y.jsx(Et,{src:"certificates/Graduation Certificate.jpg",title:"Graduation Certificate"}),y.jsx(Et,{src:"certificates/Bachelor's Degree.jpg",title:"Bachelor's Degree"})]}),y.jsx(Sn,{className:"p-8",children:y.jsxs("div",{className:"text-left",children:[y.jsxs("div",{className:"flex flex-wrap gap-8 justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Bachelor of Software Engineering"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2022"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Tishreen University, Latakia, Syria"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{children:"Valedictorian with an average of 92.08%"}),y.jsx("li",{children:"GPA: 3.50/4.0"})]})]})})]})}),IC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(DC,{})})}),UC=()=>y.jsx(ii,{title:"Achievements",children:y.jsxs("div",{className:"max-w-4xl mx-auto text-left space-y-4 sm:space-y-8",children:[y.jsx(Ql,{children:y.jsxs(Sn,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Sharpening Skills Through Noon's Selection Process"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2023"})]}),y.jsx("p",{className:"italic text-pumpkin-100",children:"Dubai, UAE"}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{className:"custom-bullet",children:"Completed a rigorous hiring process with noon, a leading e-commerce company."}),y.jsx("li",{className:"custom-bullet",children:"Solved 14 out of 16 problems in a problem-solving test and succeeded in 3 interviews."}),y.jsx("li",{className:"custom-bullet",children:"Enhanced knowledge in e-commerce, databases, and systems through 4+ months of training."}),y.jsx("li",{className:"custom-bullet",children:"Solved 30+ SQL problems on LeetCode and 15+ on HackerRank."})]})]})}),y.jsx(Zl,{children:y.jsxs(Sn,{className:"p-8",children:[y.jsx("div",{className:"flex justify-between items-center",children:y.jsx("h3",{className:"text-xl font-semibold",children:"Fast Learning Ability"})}),y.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:y.jsx("li",{className:"custom-bullet",children:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before"})})]})}),y.jsx(Ql,{children:y.jsxs(Sn,{className:"p-8",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsx("h3",{className:"text-xl font-semibold",children:"Expert Ranking on Codeforces"}),y.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2021"})]}),y.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:y.jsx("li",{className:"custom-bullet",children:"Demonstrated expertise in solving algorithmic problems using data structures."})})]})}),y.jsx(Zl,{children:y.jsxs(Sn,{className:"p-8",children:[y.jsx("div",{className:"flex justify-between items-center",children:y.jsx("h3",{className:"text-xl font-semibold",children:"Top ICPC Medals:"})}),y.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[y.jsx("li",{className:"custom-bullet",children:"Gold Medalist, ACPC for Girls (2020)"}),y.jsx("li",{className:"custom-bullet",children:"Silver Medal, SCPC (2021)"})]})]})})]})}),FC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(UC,{})})});function OC(){return y.jsx(ii,{title:"Fun Facts",children:y.jsx("div",{className:"max-w-[40rem] mx-auto",children:y.jsx(Hv,{description:"In 2019, I created a problem and solved it in my sleep—literally! While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious. Take a look inside my brain through this video:",videoURL:"https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku"})})})}const kC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(OC,{})})});function zC(){const t=[{language:"Arabic",proficiency:"Native",prof_desc:null},{language:"English",proficiency:"C1 Level",prof_desc:"Full working proficiency"},{language:"Spanish",proficiency:"B1 Level",prof_desc:"Limited working proficiency"}];return y.jsxs(ii,{title:"Languages",children:[y.jsx(ec,{children:y.jsx("div",{className:"max-w-[40rem] mx-auto",children:y.jsx(Sn,{children:y.jsx("div",{className:"px-8",children:t.map((e,n)=>y.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center py-3",children:[y.jsx("h3",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200",children:e.language}),y.jsxs("span",{className:"hidden sm:block text-xl text-white",children:[e.prof_desc&&y.jsx("span",{className:"mr-4 text-sm text-pumpkin-200 italic",children:e.prof_desc}),e.proficiency]}),y.jsx("div",{className:"sm:hidden text-sm text-pumpkin-200 italic",children:e.prof_desc}),y.jsx("div",{className:"sm:hidden text-xl text-white",children:e.proficiency})]},n))})})})}),y.jsx(ec,{children:y.jsx("iframe",{className:"max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-4 sm:mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105",src:"https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})]})}const BC=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(zC,{})})}),HC=()=>{const{pathname:t}=cr();return z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]),null};function VC(){return y.jsx("footer",{className:"bg-pumpkin text-white pb-8 px-4",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-6 text-sm",children:[y.jsx("ul",{className:"flex justify-center flex-wrap gap-x-4 gap-y-2",children:hf.map((t,e)=>y.jsx(pf,{href:t.href,text:t.text,whiteLine:!0},e))}),y.jsxs("p",{className:"text-center",children:["© ",new Date().getFullYear()," Nagham Qarqamaz. All rights reserved."]})]})})}const Qo={_origin:"https://api.emailjs.com"},GC=(t,e="https://api.emailjs.com")=>{Qo._userID=t,Qo._origin=e},M_=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class rg{constructor(e){this.status=e.status,this.text=e.responseText}}const E_=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:a})=>{const o=new rg(a);o.status===200||o.text==="OK"?i(o):r(o)}),s.addEventListener("error",({target:a})=>{r(new rg(a))}),s.open("POST",Qo._origin+t,!0),Object.keys(n).forEach(a=>{s.setRequestHeader(a,n[a])}),s.send(e)}),jC=(t,e,n,i)=>{const r=i||Qo._userID;return M_(r,t,e),E_("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},WC=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},XC=(t,e,n,i)=>{const r=i||Qo._userID,s=WC(n);M_(r,t,e);const a=new FormData(s);return a.append("lib_version","3.2.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",r),E_("/api/v1.0/email/send-form",a)},$C={init:GC,send:jC,sendForm:XC};let YC={data:""},qC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||YC,KC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ZC=/\/\*[^]*?\*\/|  +/g,sg=/\n+/g,Gi=(t,e)=>{let n="",i="",r="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":i+=s[1]=="f"?Gi(a,s):s+"{"+Gi(a,s[1]=="k"?"":e)+"}":typeof a=="object"?i+=Gi(a,e?e.replace(/([^,])+/g,o=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,o):o?o+" "+c:c)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Gi.p?Gi.p(s,a):s+":"+a+";")}return n+(e&&r?e+"{"+r+"}":r)+i},ui={},w_=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+w_(t[n]);return e}return t},QC=(t,e,n,i,r)=>{let s=w_(t),a=ui[s]||(ui[s]=(c=>{let l=0,u=11;for(;l<c.length;)u=101*u+c.charCodeAt(l++)>>>0;return"go"+u})(s));if(!ui[a]){let c=s!==t?t:(l=>{let u,d,f=[{}];for(;u=KC.exec(l.replace(ZC,""));)u[4]?f.shift():u[3]?(d=u[3].replace(sg," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][u[1]]=u[2].replace(sg," ").trim();return f[0]})(t);ui[a]=Gi(r?{["@keyframes "+a]:c}:c,n?"":"."+a)}let o=n&&ui.g?ui.g:null;return n&&(ui.g=ui[a]),((c,l,u,d)=>{d?l.data=l.data.replace(d,c):l.data.indexOf(c)===-1&&(l.data=u?c+l.data:l.data+c)})(ui[a],e,i,o),a},JC=(t,e,n)=>t.reduce((i,r,s)=>{let a=e[s];if(a&&a.call){let o=a(n),c=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=c?"."+c:o&&typeof o=="object"?o.props?"":Gi(o,""):o===!1?"":o}return i+r+(a??"")},"");function Rc(t){let e=this||{},n=t.call?t(e.p):t;return QC(n.unshift?n.raw?JC(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,qC(e.target),e.g,e.o,e.k)}let T_,mf,gf;Rc.bind({g:1});let Ci=Rc.bind({k:1});function eb(t,e,n,i){Gi.p=e,T_=t,mf=n,gf=i}function fr(t,e){let n=this||{};return function(){let i=arguments;function r(s,a){let o=Object.assign({},s),c=o.className||r.className;n.p=Object.assign({theme:mf&&mf()},o),n.o=/ *go\d+/.test(c),o.className=Rc.apply(n,i)+(c?" "+c:"");let l=t;return t[0]&&(l=o.as||t,delete o.as),gf&&l[0]&&gf(o),T_(l,o)}return r}}var tb=t=>typeof t=="function",oc=(t,e)=>tb(t)?t(e):t,nb=(()=>{let t=0;return()=>(++t).toString()})(),A_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ib=20,C_=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,ib)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return C_(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},Tl=[],Dr={toasts:[],pausedAt:void 0},Xr=t=>{Dr=C_(Dr,t),Tl.forEach(e=>{e(Dr)})},rb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},sb=(t={})=>{let[e,n]=z.useState(Dr),i=z.useRef(Dr);z.useEffect(()=>(i.current!==Dr&&n(Dr),Tl.push(n),()=>{let s=Tl.indexOf(n);s>-1&&Tl.splice(s,1)}),[]);let r=e.toasts.map(s=>{var a,o,c;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((a=t[s.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((o=t[s.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||rb[s.type],style:{...t.style,...(c=t[s.type])==null?void 0:c.style,...s.style}}});return{...e,toasts:r}},ob=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||nb()}),pa=t=>(e,n)=>{let i=ob(e,t,n);return Xr({type:2,toast:i}),i.id},Ht=(t,e)=>pa("blank")(t,e);Ht.error=pa("error");Ht.success=pa("success");Ht.loading=pa("loading");Ht.custom=pa("custom");Ht.dismiss=t=>{Xr({type:3,toastId:t})};Ht.remove=t=>Xr({type:4,toastId:t});Ht.promise=(t,e,n)=>{let i=Ht.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(r=>{let s=e.success?oc(e.success,r):void 0;return s?Ht.success(s,{id:i,...n,...n==null?void 0:n.success}):Ht.dismiss(i),r}).catch(r=>{let s=e.error?oc(e.error,r):void 0;s?Ht.error(s,{id:i,...n,...n==null?void 0:n.error}):Ht.dismiss(i)}),t};var ab=(t,e)=>{Xr({type:1,toast:{id:t,height:e}})},lb=()=>{Xr({type:5,time:Date.now()})},Lo=new Map,cb=1e3,ub=(t,e=cb)=>{if(Lo.has(t))return;let n=setTimeout(()=>{Lo.delete(t),Xr({type:4,toastId:t})},e);Lo.set(t,n)},db=t=>{let{toasts:e,pausedAt:n}=sb(t);z.useEffect(()=>{if(n)return;let s=Date.now(),a=e.map(o=>{if(o.duration===1/0)return;let c=(o.duration||0)+o.pauseDuration-(s-o.createdAt);if(c<0){o.visible&&Ht.dismiss(o.id);return}return setTimeout(()=>Ht.dismiss(o.id),c)});return()=>{a.forEach(o=>o&&clearTimeout(o))}},[e,n]);let i=z.useCallback(()=>{n&&Xr({type:6,time:Date.now()})},[n]),r=z.useCallback((s,a)=>{let{reverseOrder:o=!1,gutter:c=8,defaultPosition:l}=a||{},u=e.filter(p=>(p.position||l)===(s.position||l)&&p.height),d=u.findIndex(p=>p.id===s.id),f=u.filter((p,v)=>v<d&&p.visible).length;return u.filter(p=>p.visible).slice(...o?[f+1]:[0,f]).reduce((p,v)=>p+(v.height||0)+c,0)},[e]);return z.useEffect(()=>{e.forEach(s=>{if(s.dismissed)ub(s.id,s.removeDelay);else{let a=Lo.get(s.id);a&&(clearTimeout(a),Lo.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:ab,startPause:lb,endPause:i,calculateOffset:r}}},fb=Ci`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,hb=Ci`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pb=Ci`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,mb=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${pb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,gb=Ci`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,vb=fr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${gb} 1s linear infinite;
`,_b=Ci`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,xb=Ci`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,yb=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_b} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Sb=fr("div")`
  position: absolute;
`,Mb=fr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Eb=Ci`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wb=fr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Eb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Tb=({toast:t})=>{let{icon:e,type:n,iconTheme:i}=t;return e!==void 0?typeof e=="string"?z.createElement(wb,null,e):e:n==="blank"?null:z.createElement(Mb,null,z.createElement(vb,{...i}),n!=="loading"&&z.createElement(Sb,null,n==="error"?z.createElement(mb,{...i}):z.createElement(yb,{...i})))},Ab=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Cb=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,bb="0%{opacity:0;} 100%{opacity:1;}",Rb="0%{opacity:1;} 100%{opacity:0;}",Pb=fr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Lb=fr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Nb=(t,e)=>{let n=t.includes("top")?1:-1,[i,r]=A_()?[bb,Rb]:[Ab(n),Cb(n)];return{animation:e?`${Ci(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ci(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Db=z.memo(({toast:t,position:e,style:n,children:i})=>{let r=t.height?Nb(t.position||e||"top-center",t.visible):{opacity:0},s=z.createElement(Tb,{toast:t}),a=z.createElement(Lb,{...t.ariaProps},oc(t.message,t));return z.createElement(Pb,{className:t.className,style:{...r,...n,...t.style}},typeof i=="function"?i({icon:s,message:a}):z.createElement(z.Fragment,null,s,a))});eb(z.createElement);var Ib=({id:t,className:e,style:n,onHeightUpdate:i,children:r})=>{let s=z.useCallback(a=>{if(a){let o=()=>{let c=a.getBoundingClientRect().height;i(t,c)};o(),new MutationObserver(o).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return z.createElement("div",{ref:s,className:e,style:n},r)},Ub=(t,e)=>{let n=t.includes("top"),i=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...i,...r}},Fb=Rc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,rl=16,Ob=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:i,children:r,containerStyle:s,containerClassName:a})=>{let{toasts:o,handlers:c}=db(n);return z.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:rl,left:rl,right:rl,bottom:rl,pointerEvents:"none",...s},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(l=>{let u=l.position||e,d=c.calculateOffset(l,{reverseOrder:t,gutter:i,defaultPosition:e}),f=Ub(u,d);return z.createElement(Ib,{id:l.id,key:l.id,onHeightUpdate:c.updateHeight,className:l.visible?Fb:"",style:f},l.type==="custom"?oc(l.message,l):r?r(l):z.createElement(Db,{toast:l,position:u}))}))};const kb=()=>{const[t,e]=z.useState({name:"",email:"",message:""}),[n,i]=z.useState("idle"),r=a=>{e({...t,[a.target.name]:a.target.value})},s=a=>{a.preventDefault(),i("sending"),$C.send("service_mlyje5d","template_bh8lfc6",t,"qk5ZPTV_zWzMK17MJ").then(()=>{i("sent"),Ht.success("Message sent!"),e({name:"",email:"",message:""})}).catch(()=>{i("error"),Ht.error("Failed to send message.")})};return y.jsx(ii,{title:"Contact",children:y.jsxs("div",{className:"flex justify-center items-center gap-12 flex-wrap",children:[y.jsx(Sn,{hoverEffect:!1,className:"sm:px-8 py-8 w-fit max-w-[30rem] w-full",children:y.jsxs("form",{onSubmit:s,className:"mx-auto rounded space-y-4",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-start block",children:"Name:"}),y.jsx("input",{name:"name",value:t.name,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-start block",children:"Email:"}),y.jsx("input",{name:"email",type:"email",value:t.email,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-start block",children:"Message:"}),y.jsx("textarea",{name:"message",value:t.message,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),y.jsx("div",{className:"mt-8",children:y.jsx(kv,{text:"Send Message",onClick:()=>{},loading:n==="sending",loadingText:"Sending...",variant:"white"})})]})}),y.jsx("div",{className:"flex justify-center",children:y.jsx(zv,{})})]})})},zb=()=>y.jsx(y.Fragment,{children:y.jsx(Bn,{children:y.jsx(kb,{})})}),Bb=(t=5)=>Array.from({length:t},(e,n)=>({id:n,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,size:`${Math.random()*30+10}rem`,opacity:Math.random()*.1+.2,color:Math.random()>.5?"bg-primary":"bg-pumpkin"})),Hb=()=>{const{theme:t}=Wr(),e=z.useMemo(()=>Bb(5),[]);return y.jsxs("div",{className:`relative overflow-hidden bg-secondary-800 ${t=="light"?"text-black":"text-white"}`,children:[t=="light"&&e.map(({id:n,left:i,top:r,size:s,opacity:a,color:o})=>y.jsx("div",{style:{left:i,top:r,width:s,height:s,opacity:a},className:`absolute rounded-full blur-3xl ${o}`},n)),y.jsx(Ob,{position:"bottom-center",reverseOrder:!1}),y.jsxs("div",{className:"relative z-10 min-h-screen",children:[y.jsx(NC,{}),y.jsx(HC,{}),y.jsxs(o1,{children:[y.jsx(Ln,{path:"/portfolio/",element:y.jsx(J1,{})}),y.jsx(Ln,{path:"/portfolio/skills",element:y.jsx(bC,{})}),y.jsx(Ln,{path:"/portfolio/experience",element:y.jsx(PC,{})}),y.jsx(Ln,{path:"/portfolio/projects",element:y.jsx(iM,{})}),y.jsx(Ln,{path:"/portfolio/education",element:y.jsx(IC,{})}),y.jsx(Ln,{path:"/portfolio/certificates",element:y.jsx(lM,{})}),y.jsx(Ln,{path:"/portfolio/achievements",element:y.jsx(FC,{})}),y.jsx(Ln,{path:"/portfolio/fun-facts",element:y.jsx(kC,{})}),y.jsx(Ln,{path:"/portfolio/languages",element:y.jsx(BC,{})}),y.jsx(Ln,{path:"/portfolio/contact",element:y.jsx(zb,{})})]}),y.jsx("img",{className:"w-full h-40",src:"images/wave.png"}),y.jsx(VC,{})]})]})};_v(document.getElementById("root")).render(y.jsx(z.StrictMode,{children:y.jsx(P1,{children:y.jsx(oS,{children:y.jsx(Hb,{})})})}));
