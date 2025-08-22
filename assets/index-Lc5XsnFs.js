(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Gx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},hc={},xg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),$x=Symbol.for("react.fragment"),qx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),Kx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),Jx=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),qh=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yg=Object.assign,Sg={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||_g}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Eg(){}Eg.prototype=Qs.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||_g}var Tf=wf.prototype=new Eg;Tf.constructor=wf;yg(Tf,Qs.prototype);Tf.isPureReactComponent=!0;var Yh=Array.isArray,Mg=Object.prototype.hasOwnProperty,Cf={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ro,type:t,key:s,ref:o,props:r,_owner:Cf.current}}function i_(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function r_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kh=/\/+/g;function jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r_(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ro:case Xx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+jc(o,0):i,Yh(r)?(n="",t!=null&&(n=t.replace(Kh,"$&/")+"/"),dl(r,e,n,"",function(l){return l})):r!=null&&(bf(r)&&(r=i_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yh(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+jc(s,a);o+=dl(s,e,n,c,r)}else if(c=n_(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+jc(s,a++),o+=dl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mo(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},fl={transition:null},a_={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:fl,ReactCurrentOwner:Cf};function Cg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Mo,forEach:function(t,e,n){Mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Mo(t,function(){e++}),e},toArray:function(t){return Mo(t,function(e){return e})||[]},only:function(t){if(!bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Qs;je.Fragment=$x;je.Profiler=Yx;je.PureComponent=wf;je.StrictMode=qx;je.Suspense=Jx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;je.act=Cg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Mg.call(e,c)&&!wg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:ro,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:Qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kx,_context:t},t.Consumer=t};je.createElement=Tg;je.createFactory=function(t){var e=Tg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Zx,render:t}};je.isValidElement=bf;je.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:s_}};je.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};je.unstable_act=Cg;je.useCallback=function(t,e){return qt.current.useCallback(t,e)};je.useContext=function(t){return qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return qt.current.useEffect(t,e)};je.useId=function(){return qt.current.useId()};je.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};je.useRef=function(t){return qt.current.useRef(t)};je.useState=function(t){return qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return qt.current.useTransition()};je.version="18.3.1";xg.exports=je;var z=xg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=z,l_=Symbol.for("react.element"),c_=Symbol.for("react.fragment"),u_=Object.prototype.hasOwnProperty,d_=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f_={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)u_.call(e,i)&&!f_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l_,type:t,key:s,ref:o,props:r,_owner:d_.current}}hc.Fragment=c_;hc.jsx=bg;hc.jsxs=bg;vg.exports=hc;var d=vg.exports,Ag={exports:{}},mn={},Rg={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,H){var j=I.length;I.push(H);e:for(;0<j;){var Q=j-1>>>1,se=I[Q];if(0<r(se,H))I[Q]=H,I[j]=se,j=Q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var H=I[0],j=I.pop();if(j!==H){I[0]=j;e:for(var Q=0,se=I.length,De=se>>>1;Q<De;){var P=2*(Q+1)-1,ae=I[P],K=P+1,re=I[K];if(0>r(ae,j))K<se&&0>r(re,ae)?(I[Q]=re,I[K]=j,Q=K):(I[Q]=ae,I[P]=j,Q=P);else if(K<se&&0>r(re,j))I[Q]=re,I[K]=j,Q=K;else break e}}return H}function r(I,H){var j=I.sortIndex-H.sortIndex;return j!==0?j:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],l=[],u=1,f=null,h=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var H=n(l);H!==null;){if(H.callback===null)i(l);else if(H.startTime<=I)i(l),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(l)}}function S(I){if(y=!1,_(I),!x)if(n(c)!==null)x=!0,V(A);else{var H=n(l);H!==null&&Z(S,H.startTime-I)}}function A(I,H){x=!1,y&&(y=!1,p(N),N=-1),m=!0;var j=h;try{for(_(H),f=n(c);f!==null&&(!(f.expirationTime>H)||I&&!R());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var se=Q(f.expirationTime<=H);H=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(c)&&i(c),_(H)}else i(c);f=n(c)}if(f!==null)var De=!0;else{var P=n(l);P!==null&&Z(S,P.startTime-H),De=!1}return De}finally{f=null,h=j,m=!1}}var C=!1,b=null,N=-1,w=5,E=-1;function R(){return!(t.unstable_now()-E<w)}function B(){if(b!==null){var I=t.unstable_now();E=I;var H=!0;try{H=b(!0,I)}finally{H?k():(C=!1,b=null)}}else C=!1}var k;if(typeof v=="function")k=function(){v(B)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Y=q.port2;q.port1.onmessage=B,k=function(){Y.postMessage(null)}}else k=function(){g(B,0)};function V(I){b=I,C||(C=!0,k())}function Z(I,H){N=g(function(){I(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,V(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var j=h;h=H;try{return I()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=h;h=I;try{return H()}finally{h=j}},t.unstable_scheduleCallback=function(I,H,j){var Q=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=j+se,I={id:u++,callback:H,priorityLevel:I,startTime:j,expirationTime:se,sortIndex:-1},j>Q?(I.sortIndex=j,e(l,I),n(c)===null&&I===n(l)&&(y?(p(N),N=-1):y=!0,Z(S,j-Q))):(I.sortIndex=se,e(c,I),x||m||(x=!0,V(A))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var H=h;return function(){var j=h;h=H;try{return I.apply(this,arguments)}finally{h=j}}}})(Pg);Rg.exports=Pg;var h_=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=z,pn=h_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ng=new Set,Oa={};function $r(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)Ng.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,m_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qh={},Zh={};function g_(t){return Wu.call(Zh,t)?!0:Wu.call(Qh,t)?!1:m_.test(t)?Zh[t]=!0:(Qh[t]=!0,!1)}function v_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x_(t,e,n,i){if(e===null||typeof e>"u"||v_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Rf);Ut[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Rf);Ut[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Rf);Ut[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x_(e,n,r,i)&&(n=null),i||r===null?g_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),Df=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),Jh=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Jh&&t[Jh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Hc;function Sa(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function __(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Xu:return"Profiler";case Nf:return"StrictMode";case $u:return"Suspense";case qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case Lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Df:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function y_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S_(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function To(t){t._valueTracker||(t._valueTracker=S_(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function Qu(t,e){Og(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ea(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function kg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Co,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(M_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function If(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Ns=null,Ls=null;function rp(t){if(t=oo(t)){if(typeof rd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=xc(e),rd(t.stateNode,t.type,e))}}function Vg(t){Ns?Ls?Ls.push(t):Ls=[t]:Ns=t}function Gg(){if(Ns){var t=Ns,e=Ls;if(Ls=Ns=null,rp(t),e)for(t=0;t<e.length;t++)rp(e[t])}}function Wg(t,e){return t(e)}function Xg(){}var Wc=!1;function $g(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return Wg(t,e,n)}finally{Wc=!1,(Ns!==null||Ls!==null)&&(Xg(),Gg())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var i=xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var sd=!1;if(Mi)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){sd=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{sd=!1}function w_(t,e,n,i,r,s,o,a,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(u){this.onError(u)}}var ba=!1,Dl=null,Il=!1,ad=null,T_={onError:function(t){ba=!0,Dl=t}};function C_(t,e,n,i,r,s,o,a,c){ba=!1,Dl=null,w_.apply(T_,arguments)}function b_(t,e,n,i,r,s,o,a,c){if(C_.apply(this,arguments),ba){if(ba){var l=Dl;ba=!1,Dl=null}else throw Error(oe(198));Il||(Il=!0,ad=l)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sp(t){if(qr(t)!==t)throw Error(oe(188))}function A_(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sp(r),t;if(s===i)return sp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Yg(t){return t=A_(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var Qg=pn.unstable_scheduleCallback,ap=pn.unstable_cancelCallback,R_=pn.unstable_shouldYield,P_=pn.unstable_requestPaint,gt=pn.unstable_now,N_=pn.unstable_getCurrentPriorityLevel,Uf=pn.unstable_ImmediatePriority,Zg=pn.unstable_UserBlockingPriority,Ul=pn.unstable_NormalPriority,L_=pn.unstable_LowPriority,Jg=pn.unstable_IdlePriority,pc=null,Qn=null;function D_(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:F_,I_=Math.log,U_=Math.LN2;function F_(t){return t>>>=0,t===0?32:31-(I_(t)/U_|0)|0}var bo=64,Ao=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ma(a):(s&=o,s!==0&&(i=Ma(s)))}else o=n&~r,o!==0?i=Ma(o):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function O_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&i)&&(r[o]=O_(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=bo;return bo<<=1,!(bo&4194240)&&(bo=64),t}function Xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function so(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,Of,i0,r0,s0,ld=!1,Ro=[],Ki=null,Qi=null,Zi=null,Ba=new Map,ja=new Map,Vi=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function op(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function aa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oo(e),e!==null&&Of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j_(t,e,n,i,r){switch(e){case"focusin":return Ki=aa(Ki,t,e,n,i,r),!0;case"dragenter":return Qi=aa(Qi,t,e,n,i,r),!0;case"mouseover":return Zi=aa(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,aa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,aa(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function a0(t){var e=Lr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=qg(n),e!==null){t.blockedOn=e,s0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);id=i,n.target.dispatchEvent(i),id=null}else return e=oo(n),e!==null&&Of(e),t.blockedOn=n,!1;e.shift()}return!0}function lp(t,e,n){hl(t)&&n.delete(e)}function H_(){ld=!1,Ki!==null&&hl(Ki)&&(Ki=null),Qi!==null&&hl(Qi)&&(Qi=null),Zi!==null&&hl(Zi)&&(Zi=null),Ba.forEach(lp),ja.forEach(lp)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,H_)))}function Ha(t){function e(r){return oa(r,t)}if(0<Ro.length){oa(Ro[0],t);for(var n=1;n<Ro.length;n++){var i=Ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&oa(Ki,t),Qi!==null&&oa(Qi,t),Zi!==null&&oa(Zi,t),Ba.forEach(e),ja.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&Vi.shift()}var Ds=Pi.ReactCurrentBatchConfig,Ol=!0;function V_(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=1,kf(t,e,n,i)}finally{et=r,Ds.transition=s}}function G_(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=4,kf(t,e,n,i)}finally{et=r,Ds.transition=s}}function kf(t,e,n,i){if(Ol){var r=cd(t,e,n,i);if(r===null)nu(t,e,i,kl,n),op(t,i);else if(j_(r,t,e,n,i))i.stopPropagation();else if(op(t,i),e&4&&-1<B_.indexOf(t)){for(;r!==null;){var s=oo(r);if(s!==null&&n0(s),s=cd(t,e,n,i),s===null&&nu(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nu(t,e,i,null,n)}}var kl=null;function cd(t,e,n,i){if(kl=null,t=If(i),t=Lr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function o0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N_()){case Uf:return 1;case Zg:return 4;case Ul:case L_:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var $i=null,zf=null,pl=null;function l0(){if(pl)return pl;var t,e=zf,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Po(){return!0}function cp(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:cp,this.isPropagationStopped=cp,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=gn(Zs),ao=dt({},Zs,{view:0,detail:0}),W_=gn(ao),$c,qc,la,mc=dt({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?($c=t.screenX-la.screenX,qc=t.screenY-la.screenY):qc=$c=0,la=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),up=gn(mc),X_=dt({},mc,{dataTransfer:0}),$_=gn(X_),q_=dt({},ao,{relatedTarget:0}),Yc=gn(q_),Y_=dt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),K_=gn(Y_),Q_=dt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z_=gn(Q_),J_=dt({},Zs,{data:0}),dp=gn(J_),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ny[t])?!!e[t]:!1}function jf(){return iy}var ry=dt({},ao,{key:function(t){if(t.key){var e=ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=gn(ry),ay=dt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=gn(ay),oy=dt({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),ly=gn(oy),cy=dt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=gn(cy),dy=dt({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=gn(dy),hy=[9,13,27,32],Hf=Mi&&"CompositionEvent"in window,Aa=null;Mi&&"documentMode"in document&&(Aa=document.documentMode);var py=Mi&&"TextEvent"in window&&!Aa,c0=Mi&&(!Hf||Aa&&8<Aa&&11>=Aa),hp=" ",pp=!1;function u0(t,e){switch(t){case"keyup":return hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function my(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(pp=!0,hp);case"textInput":return t=e.data,t===hp&&pp?null:t;default:return null}}function gy(t,e){if(xs)return t==="compositionend"||!Hf&&u0(t,e)?(t=l0(),pl=zf=$i=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vy[t.type]:e==="textarea"}function f0(t,e,n,i){Vg(i),e=zl(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Va=null;function xy(t){M0(t,0)}function gc(t){var e=Ss(t);if(Fg(e))return t}function _y(t,e){if(t==="change")return e}var h0=!1;if(Mi){var Kc;if(Mi){var Qc="oninput"in document;if(!Qc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Qc=typeof gp.oninput=="function"}Kc=Qc}else Kc=!1;h0=Kc&&(!document.documentMode||9<document.documentMode)}function vp(){Ra&&(Ra.detachEvent("onpropertychange",p0),Va=Ra=null)}function p0(t){if(t.propertyName==="value"&&gc(Va)){var e=[];f0(e,Va,t,If(t)),$g(xy,e)}}function yy(t,e,n){t==="focusin"?(vp(),Ra=e,Va=n,Ra.attachEvent("onpropertychange",p0)):t==="focusout"&&vp()}function Sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(Va)}function Ey(t,e){if(t==="click")return gc(e)}function My(t,e){if(t==="input"||t==="change")return gc(e)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:wy;function Ga(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wu.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _p(t,e){var n=xp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ty(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&Vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_p(n,s);var o=_p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cy=Mi&&"documentMode"in document&&11>=document.documentMode,_s=null,ud=null,Pa=null,dd=!1;function yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dd||_s==null||_s!==Ll(i)||(i=_s,"selectionStart"in i&&Vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Ga(Pa,i)||(Pa=i,i=zl(ud,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function No(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Zc={},v0={};Mi&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function vc(t){if(Zc[t])return Zc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v0)return Zc[t]=e[n];return t}var x0=vc("animationend"),_0=vc("animationiteration"),y0=vc("animationstart"),S0=vc("transitionend"),E0=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){E0.set(t,e),$r(e,[t])}for(var Jc=0;Jc<Sp.length;Jc++){var eu=Sp[Jc],by=eu.toLowerCase(),Ay=eu[0].toUpperCase()+eu.slice(1);ur(by,"on"+Ay)}ur(x0,"onAnimationEnd");ur(_0,"onAnimationIteration");ur(y0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(S0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b_(i,e,void 0,t),t.currentTarget=null}function M0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,l=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;Ep(r,a,l),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,l=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;Ep(r,a,l),s=c}}}if(Il)throw t=ad,Il=!1,ad=null,t}function it(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var i=t+"__bubble";n.has(i)||(w0(e,t,2,!1),n.add(i))}function tu(t,e,n){var i=0;e&&(i|=4),w0(n,t,i,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[Lo]){t[Lo]=!0,Ng.forEach(function(n){n!=="selectionchange"&&(Ry.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,tu("selectionchange",!1,e))}}function w0(t,e,n,i){switch(o0(e)){case 1:var r=V_;break;case 4:r=G_;break;default:r=kf}n=r.bind(null,e,n,t),r=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$g(function(){var l=s,u=If(n),f=[];e:{var h=E0.get(t);if(h!==void 0){var m=Bf,x=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":m=sy;break;case"focusin":x="focus",m=Yc;break;case"focusout":x="blur",m=Yc;break;case"beforeblur":case"afterblur":m=Yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ly;break;case x0:case _0:case y0:m=K_;break;case S0:m=uy;break;case"scroll":m=W_;break;case"wheel":m=fy;break;case"copy":case"cut":case"paste":m=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fp}var y=(e&4)!==0,g=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var v=l,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,p!==null&&(S=za(v,p),S!=null&&y.push(Xa(v,S,_)))),g)break;v=v.return}0<y.length&&(h=new m(h,x,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==id&&(x=n.relatedTarget||n.fromElement)&&(Lr(x)||x[wi]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=l,x=x?Lr(x):null,x!==null&&(g=qr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=l),m!==x)){if(y=up,S="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=fp,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=m==null?h:Ss(m),_=x==null?h:Ss(x),h=new y(S,v+"leave",m,n,u),h.target=g,h.relatedTarget=_,S=null,Lr(u)===l&&(y=new y(p,v+"enter",x,n,u),y.target=_,y.relatedTarget=g,S=y),g=S,m&&x)t:{for(y=m,p=x,v=0,_=y;_;_=Zr(_))v++;for(_=0,S=p;S;S=Zr(S))_++;for(;0<v-_;)y=Zr(y),v--;for(;0<_-v;)p=Zr(p),_--;for(;v--;){if(y===p||p!==null&&y===p.alternate)break t;y=Zr(y),p=Zr(p)}y=null}else y=null;m!==null&&Mp(f,h,m,y,!1),x!==null&&g!==null&&Mp(f,g,x,y,!0)}}e:{if(h=l?Ss(l):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=_y;else if(mp(h))if(h0)A=My;else{A=Sy;var C=yy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Ey);if(A&&(A=A(t,l))){f0(f,A,n,u);break e}C&&C(t,h,l),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Zu(h,"number",h.value)}switch(C=l?Ss(l):window,t){case"focusin":(mp(C)||C.contentEditable==="true")&&(_s=C,ud=l,Pa=null);break;case"focusout":Pa=ud=_s=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,yp(f,n,u);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":yp(f,n,u)}var b;if(Hf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xs?u0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(c0&&n.locale!=="ko"&&(xs||N!=="onCompositionStart"?N==="onCompositionEnd"&&xs&&(b=l0()):($i=u,zf="value"in $i?$i.value:$i.textContent,xs=!0)),C=zl(l,N),0<C.length&&(N=new dp(N,t,null,n,u),f.push({event:N,listeners:C}),b?N.data=b:(b=d0(n),b!==null&&(N.data=b)))),(b=py?my(t,n):gy(t,n))&&(l=zl(l,"onBeforeInput"),0<l.length&&(u=new dp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:l}),u.data=b))}M0(f,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(t,n),s!=null&&i.unshift(Xa(t,s,r)),s=za(t,e),s!=null&&i.push(Xa(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,c=a.alternate,l=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&l!==null&&(a=l,r?(c=za(n,s),c!=null&&o.unshift(Xa(n,c,a))):r||(c=za(n,s),c!=null&&o.push(Xa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Py=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function wp(t){return(typeof t=="string"?t:""+t).replace(Py,`
`).replace(Ny,"")}function Do(t,e,n){if(e=wp(e),wp(t)!==e&&n)throw Error(oe(425))}function Bl(){}var fd=null,hd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(t){return Tp.resolve(null).then(t).catch(Iy)}:md;function Iy(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ha(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),$n="__reactFiber$"+Js,$a="__reactProps$"+Js,wi="__reactContainer$"+Js,gd="__reactEvents$"+Js,Uy="__reactListeners$"+Js,Fy="__reactHandles$"+Js;function Lr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[$n])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function oo(t){return t=t[$n]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function xc(t){return t[$a]||null}var vd=[],Es=-1;function dr(t){return{current:t}}function st(t){0>Es||(t.current=vd[Es],vd[Es]=null,Es--)}function nt(t,e){Es++,vd[Es]=t.current,t.current=e}var or={},Vt=dr(or),tn=dr(!1),Br=or;function Bs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function jl(){st(tn),st(Vt)}function bp(t,e,n){if(Vt.current!==or)throw Error(oe(168));nt(Vt,e),nt(tn,n)}function T0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,y_(t)||"Unknown",r));return dt({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Br=Vt.current,nt(Vt,t),nt(tn,tn.current),!0}function Ap(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=T0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,st(tn),st(Vt),nt(Vt,t)):st(tn),nt(tn,n)}var mi=null,_c=!1,ru=!1;function C0(t){mi===null?mi=[t]:mi.push(t)}function Oy(t){_c=!0,C0(t)}function fr(){if(!ru&&mi!==null){ru=!0;var t=0,e=et;try{var n=mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,_c=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Qg(Uf,fr),r}finally{et=e,ru=!1}}return null}var Ms=[],ws=0,Vl=null,Gl=0,yn=[],Sn=0,jr=null,vi=1,xi="";function Cr(t,e){Ms[ws++]=Gl,Ms[ws++]=Vl,Vl=t,Gl=e}function b0(t,e,n){yn[Sn++]=vi,yn[Sn++]=xi,yn[Sn++]=jr,jr=t;var i=vi;t=xi;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-kn(e)+r|n<<r|i,xi=s+t}else vi=1<<s|n<<r|i,xi=t}function Gf(t){t.return!==null&&(Cr(t,1),b0(t,1,0))}function Wf(t){for(;t===Vl;)Vl=Ms[--ws],Ms[ws]=null,Gl=Ms[--ws],Ms[ws]=null;for(;t===jr;)jr=yn[--Sn],yn[Sn]=null,xi=yn[--Sn],yn[Sn]=null,vi=yn[--Sn],yn[Sn]=null}var hn=null,fn=null,at=!1,Un=null;function A0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:vi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(at){var e=fn;if(e){var n=e;if(!Rp(t,e)){if(xd(t))throw Error(oe(418));e=Ji(n.nextSibling);var i=hn;e&&Rp(t,e)?A0(i,n):(t.flags=t.flags&-4097|2,at=!1,hn=t)}}else{if(xd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,at=!1,hn=t}}}function Pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Io(t){if(t!==hn)return!1;if(!at)return Pp(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=fn)){if(xd(t))throw R0(),Error(oe(418));for(;e;)A0(t,e),e=Ji(e.nextSibling)}if(Pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Ji(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=fn;t;)t=Ji(t.nextSibling)}function js(){fn=hn=null,at=!1}function Xf(t){Un===null?Un=[t]:Un.push(t)}var ky=Pi.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function P0(t){function e(p,v){if(t){var _=p.deletions;_===null?(p.deletions=[v],p.flags|=16):_.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=ir(p,v),p.index=0,p.sibling=null,p}function s(p,v,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<v?(p.flags|=2,v):_):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,v,_,S){return v===null||v.tag!==6?(v=du(_,p.mode,S),v.return=p,v):(v=r(v,_),v.return=p,v)}function c(p,v,_,S){var A=_.type;return A===vs?u(p,v,_.props.children,S,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&Np(A)===v.type)?(S=r(v,_.props),S.ref=ca(p,v,_),S.return=p,S):(S=El(_.type,_.key,_.props,null,p.mode,S),S.ref=ca(p,v,_),S.return=p,S)}function l(p,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=fu(_,p.mode,S),v.return=p,v):(v=r(v,_.children||[]),v.return=p,v)}function u(p,v,_,S,A){return v===null||v.tag!==7?(v=zr(_,p.mode,S,A),v.return=p,v):(v=r(v,_),v.return=p,v)}function f(p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=du(""+v,p.mode,_),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wo:return _=El(v.type,v.key,v.props,null,p.mode,_),_.ref=ca(p,null,v),_.return=p,_;case gs:return v=fu(v,p.mode,_),v.return=p,v;case ji:var S=v._init;return f(p,S(v._payload),_)}if(Ea(v)||ra(v))return v=zr(v,p.mode,_,null),v.return=p,v;Uo(p,v)}return null}function h(p,v,_,S){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(p,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:return _.key===A?c(p,v,_,S):null;case gs:return _.key===A?l(p,v,_,S):null;case ji:return A=_._init,h(p,v,A(_._payload),S)}if(Ea(_)||ra(_))return A!==null?null:u(p,v,_,S,null);Uo(p,_)}return null}function m(p,v,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(_)||null,a(v,p,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wo:return p=p.get(S.key===null?_:S.key)||null,c(v,p,S,A);case gs:return p=p.get(S.key===null?_:S.key)||null,l(v,p,S,A);case ji:var C=S._init;return m(p,v,_,C(S._payload),A)}if(Ea(S)||ra(S))return p=p.get(_)||null,u(v,p,S,A,null);Uo(v,S)}return null}function x(p,v,_,S){for(var A=null,C=null,b=v,N=v=0,w=null;b!==null&&N<_.length;N++){b.index>N?(w=b,b=null):w=b.sibling;var E=h(p,b,_[N],S);if(E===null){b===null&&(b=w);break}t&&b&&E.alternate===null&&e(p,b),v=s(E,v,N),C===null?A=E:C.sibling=E,C=E,b=w}if(N===_.length)return n(p,b),at&&Cr(p,N),A;if(b===null){for(;N<_.length;N++)b=f(p,_[N],S),b!==null&&(v=s(b,v,N),C===null?A=b:C.sibling=b,C=b);return at&&Cr(p,N),A}for(b=i(p,b);N<_.length;N++)w=m(b,p,N,_[N],S),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?N:w.key),v=s(w,v,N),C===null?A=w:C.sibling=w,C=w);return t&&b.forEach(function(R){return e(p,R)}),at&&Cr(p,N),A}function y(p,v,_,S){var A=ra(_);if(typeof A!="function")throw Error(oe(150));if(_=A.call(_),_==null)throw Error(oe(151));for(var C=A=null,b=v,N=v=0,w=null,E=_.next();b!==null&&!E.done;N++,E=_.next()){b.index>N?(w=b,b=null):w=b.sibling;var R=h(p,b,E.value,S);if(R===null){b===null&&(b=w);break}t&&b&&R.alternate===null&&e(p,b),v=s(R,v,N),C===null?A=R:C.sibling=R,C=R,b=w}if(E.done)return n(p,b),at&&Cr(p,N),A;if(b===null){for(;!E.done;N++,E=_.next())E=f(p,E.value,S),E!==null&&(v=s(E,v,N),C===null?A=E:C.sibling=E,C=E);return at&&Cr(p,N),A}for(b=i(p,b);!E.done;N++,E=_.next())E=m(b,p,N,E.value,S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?N:E.key),v=s(E,v,N),C===null?A=E:C.sibling=E,C=E);return t&&b.forEach(function(B){return e(p,B)}),at&&Cr(p,N),A}function g(p,v,_,S){if(typeof _=="object"&&_!==null&&_.type===vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:e:{for(var A=_.key,C=v;C!==null;){if(C.key===A){if(A=_.type,A===vs){if(C.tag===7){n(p,C.sibling),v=r(C,_.props.children),v.return=p,p=v;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ji&&Np(A)===C.type){n(p,C.sibling),v=r(C,_.props),v.ref=ca(p,C,_),v.return=p,p=v;break e}n(p,C);break}else e(p,C);C=C.sibling}_.type===vs?(v=zr(_.props.children,p.mode,S,_.key),v.return=p,p=v):(S=El(_.type,_.key,_.props,null,p.mode,S),S.ref=ca(p,v,_),S.return=p,p=S)}return o(p);case gs:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(p,v.sibling),v=r(v,_.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=fu(_,p.mode,S),v.return=p,p=v}return o(p);case ji:return C=_._init,g(p,v,C(_._payload),S)}if(Ea(_))return x(p,v,_,S);if(ra(_))return y(p,v,_,S);Uo(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(p,v.sibling),v=r(v,_),v.return=p,p=v):(n(p,v),v=du(_,p.mode,S),v.return=p,p=v),o(p)):n(p,v)}return g}var Hs=P0(!0),N0=P0(!1),Wl=dr(null),Xl=null,Ts=null,$f=null;function qf(){$f=Ts=Xl=null}function Yf(t){var e=Wl.current;st(Wl),t._currentValue=e}function yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Xl=t,$f=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if($f!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Xl===null)throw Error(oe(308));Ts=t,Xl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Dr=null;function Kf(t){Dr===null?Dr=[t]:Dr.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}function Lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,l=c.next;c.next=null,o===null?s=l:o.next=l,o=c;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=l:a.next=l,u.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;o=0,u=l=c=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=dt({},f,h);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(l=u=m,c=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(c=f),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=f}}function Dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var lo={},Zn=dr(lo),qa=dr(lo),Ya=dr(lo);function Ir(t){if(t===lo)throw Error(oe(174));return t}function Zf(t,e){switch(nt(Ya,e),nt(qa,t),nt(Zn,lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}st(Zn),nt(Zn,e)}function Vs(){st(Zn),st(qa),st(Ya)}function I0(t){Ir(Ya.current);var e=Ir(Zn.current),n=ed(e,t.type);e!==n&&(nt(qa,t),nt(Zn,n))}function Jf(t){qa.current===t&&(st(Zn),st(qa))}var lt=dr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function eh(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var vl=Pi.ReactCurrentDispatcher,au=Pi.ReactCurrentBatchConfig,Hr=0,ct=null,Et=null,Rt=null,Yl=!1,Na=!1,Ka=0,zy=0;function Ft(){throw Error(oe(321))}function th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function nh(t,e,n,i,r,s){if(Hr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?Vy:Gy,t=n(i,r),Na){s=0;do{if(Na=!1,Ka=0,25<=s)throw Error(oe(301));s+=1,Rt=Et=null,e.updateQueue=null,vl.current=Wy,t=n(i,r)}while(Na)}if(vl.current=Kl,e=Et!==null&&Et.next!==null,Hr=0,Rt=Et=ct=null,Yl=!1,e)throw Error(oe(300));return t}function ih(){var t=Ka!==0;return Ka=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function bn(){if(Et===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Et=t;else{if(t===null)throw Error(oe(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Qa(t,e){return typeof e=="function"?e(t):e}function ou(t){var e=bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,c=null,l=s;do{var u=l.lane;if((Hr&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var f={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(a=c=f,o=i):c=c.next=f,ct.lanes|=u,Vr|=u}l=l.next}while(l!==null&&l!==s);c===null?o=i:c.next=a,Bn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U0(){}function F0(t,e){var n=ct,i=bn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,rh(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Za(9,k0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(oe(349));Hr&30||O0(n,e,r)}return r}function O0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,i){e.value=n,e.getSnapshot=i,B0(e)&&j0(t)}function z0(t,e,n){return n(function(){B0(e)&&j0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function j0(t){var e=Ti(t,1);e!==null&&zn(e,t,1,-1)}function Ip(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,ct,t),[e.memoizedState,t]}function Za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H0(){return bn().memoizedState}function xl(t,e,n,i){var r=Gn();ct.flags|=t,r.memoizedState=Za(1|e,n,void 0,i===void 0?null:i)}function yc(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&th(i,o.deps)){r.memoizedState=Za(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Za(1|e,n,s,i)}function Up(t,e){return xl(8390656,8,t,e)}function rh(t,e){return yc(2048,8,t,e)}function V0(t,e){return yc(4,2,t,e)}function G0(t,e){return yc(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,W0.bind(null,e,t),n)}function sh(){}function $0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Y0(t,e,n){return Hr&21?(Bn(n,e)||(n=e0(),ct.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function By(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=au.transition;au.transition={};try{t(!1),e()}finally{et=n,au.transition=i}}function K0(){return bn().memoizedState}function jy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(t))Z0(e,n);else if(n=L0(t,e,n,i),n!==null){var r=Xt();zn(n,t,i,r),J0(n,e,i)}}function Hy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(t))Z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var c=e.interleaved;c===null?(r.next=r,Kf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=Xt(),zn(n,t,i,r),J0(n,e,i))}}function Q0(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Z0(t,e){Na=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}var Kl={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Vy={readContext:Cn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jy.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Ip,useDebugValue:sh,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Ip(!1),e=t[0];return t=By.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Gn();if(at){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Pt===null)throw Error(oe(349));Hr&30||O0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Up(z0.bind(null,i,s,t),[t]),i.flags|=2048,Za(9,k0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Pt.identifierPrefix;if(at){var n=xi,i=vi;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gy={readContext:Cn,useCallback:$0,useContext:Cn,useEffect:rh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:q0,useReducer:ou,useRef:H0,useState:function(){return ou(Qa)},useDebugValue:sh,useDeferredValue:function(t){var e=bn();return Y0(e,Et.memoizedState,t)},useTransition:function(){var t=ou(Qa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1},Wy={readContext:Cn,useCallback:$0,useContext:Cn,useEffect:rh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:q0,useReducer:lu,useRef:H0,useState:function(){return lu(Qa)},useDebugValue:sh,useDeferredValue:function(t){var e=bn();return Et===null?e.memoizedState=t:Y0(e,Et.memoizedState,t)},useTransition:function(){var t=lu(Qa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=nr(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(zn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=nr(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(zn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=nr(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(zn(e,t,i,n),gl(e,t,i))}};function Fp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,i)||!Ga(r,s):!0}function ev(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?Br:Vt.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Ed(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?Br:Vt.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=__(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xy=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zl||(Zl=!0,Dd=i),Md(t,e)},n}function nv(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Md(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=a1.bind(null,t,e,n),e.then(t,t))}function zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var $y=Pi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?N0(e,null,n,i):Hs(e,t.child,n,i)}function jp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=nh(t,e,n,i,s,r),n=ih(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(at&&n&&Gf(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,i,r)):(t=El(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ga(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return wd(t,e,n,i,r)}function rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(bs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(bs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(bs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(bs,dn),dn|=i;return Wt(t,e,r,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,i,r){var s=nn(n)?Br:Vt.current;return s=Bs(e,s),Is(e,r),n=nh(t,e,n,i,s,r),i=ih(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(at&&i&&Gf(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Vp(t,e,n,i,r){if(nn(n)){var s=!0;Hl(e)}else s=!1;if(Is(e,r),e.stateNode===null)_l(t,e),ev(e,n,i),Ed(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Cn(l):(l=nn(n)?Br:Vt.current,l=Bs(e,l));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==l)&&Op(e,o,i,l),Hi=!1;var h=e.memoizedState;o.state=h,$l(e,i,o,r),c=e.memoizedState,a!==i||h!==c||tn.current||Hi?(typeof u=="function"&&(Sd(e,n,u,i),c=e.memoizedState),(a=Hi||Fp(e,n,a,i,h,c,l))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=l,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D0(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Dn(e.type,a),o.props=l,f=e.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?Br:Vt.current,c=Bs(e,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==c)&&Op(e,o,i,c),Hi=!1,h=e.memoizedState,o.state=h,$l(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||tn.current||Hi?(typeof m=="function"&&(Sd(e,n,m,i),x=e.memoizedState),(l=Hi||Fp(e,n,l,i,h,x,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=c,i=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Td(t,e,n,i,s,r)}function Td(t,e,n,i,r,s){sv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ap(e,n,!1),Ci(t,e,s);i=e.stateNode,$y.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&Ap(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bp(t,e.context,!1),Zf(t,e.containerInfo)}function Gp(t,e,n,i,r){return js(),Xf(r),e.flags|=256,Wt(t,e,n,i),e.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bd(n),e.memoizedState=Cd,t):ah(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ir(r,c),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ah(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fo(t,e,n,i){return i!==null&&Xf(i),Hs(e,t.child,null,n),t=ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cu(Error(oe(422))),Fo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=bd(o),e.memoizedState=Cd,s);if(!(e.mode&1))return Fo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=cu(s,i,void 0),Fo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),zn(i,t,r,-1))}return fh(),i=cu(Error(oe(421))),Fo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=o1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Ji(r.nextSibling),hn=e,at=!0,Un=null,t!==null&&(yn[Sn++]=vi,yn[Sn++]=xi,yn[Sn++]=jr,vi=t.id,xi=t.overflow,jr=e),e=ah(e,i.children),e.flags|=4096,e)}function Wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),yd(t.return,e,n)}function uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wp(t,n,e);else if(t.tag===19)Wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uu(e,!0,n,null,s);break;case"together":uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yy(t,e,n){switch(e.tag){case 3:av(e),js();break;case 5:I0(e);break;case 1:nn(e.type)&&Hl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(nt(lt,lt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return Ci(t,e,n)}var cv,Ad,uv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(Zn.current);var s=null;switch(n){case"input":r=Ku(t,r),i=Ku(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Ju(t,r),i=Ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}td(n,i);var o;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var a=r[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Oa.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(a=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==a&&(c!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&it("scroll",t),s||a===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ky(t,e,n){var i=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return nn(e.type)&&jl(),Ot(e),null;case 3:return i=e.stateNode,Vs(),st(tn),st(Vt),eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Fd(Un),Un=null))),Ad(t,e),Ot(e),null;case 5:Jf(e);var r=Ir(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ot(e),null}if(t=Ir(Zn.current),Io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)it(wa[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":ep(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":np(i,s),it("invalid",i)}td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,a,t),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":To(i),tp(i,s,!0);break;case"textarea":To(i),ip(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[$a]=i,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)it(wa[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":ep(t,i),r=Ku(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),it("invalid",t);break;case"textarea":np(t,i),r=Ju(t,i),it("invalid",t);break;default:r=i}td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?Hg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Bg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ka(t,c):typeof c=="number"&&ka(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&it("scroll",t):c!=null&&Pf(t,s,c,o))}switch(n){case"input":To(t),tp(t,i,!1);break;case"textarea":To(t),ip(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Ir(Ya.current),Ir(Zn.current),Io(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Do(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ot(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&fn!==null&&e.mode&1&&!(e.flags&128))R0(),js(),e.flags|=98560,s=!1;else if(s=Io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[$n]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Un!==null&&(Fd(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Tt===0&&(Tt=3):fh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Vs(),Ad(t,e),t===null&&Wa(e.stateNode.containerInfo),Ot(e),null;case 10:return Yf(e.type._context),Ot(e),null;case 17:return nn(e.type)&&jl(),Ot(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Ws&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ot(e),null}else 2*gt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Qy(t,e){switch(Wf(e),e.tag){case 1:return nn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),st(tn),st(Vt),eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Vs(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var Oo=!1,Bt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Rd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Xp=!1;function Jy(t,e){if(fd=Ol,t=g0(),Vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,l=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(c=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++l===r&&(a=o),h===s&&++u===i&&(c=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Ol=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Dn(e.type,y),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Xp,Xp=!1,x}function La(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rd(e,n,s)}r=r.next}while(r!==i)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[$a],delete e[gd],delete e[Uy],delete e[Fy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var Dt=null,In=!1;function Di(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:Bt||Cs(n,e);case 6:var i=Dt,r=In;Dt=null,Di(t,e,n),Dt=i,In=r,Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(In?(t=Dt,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),Ha(t)):iu(Dt,n.stateNode));break;case 4:i=Dt,r=In,Dt=n.stateNode.containerInfo,In=!0,Di(t,e,n),Dt=i,In=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!Bt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Di(t,e,n),Bt=i):Di(t,e,n);break;default:Di(t,e,n)}}function qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(i){var r=l1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,In=!1;break e;case 3:Dt=a.stateNode.containerInfo,In=!0;break e;case 4:Dt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Dt===null)throw Error(oe(160));pv(s,o,r),Dt=null,In=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){mt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Vn(t),i&4){try{La(3,t,t.return),Ec(3,t)}catch(y){mt(t,t.return,y)}try{La(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Rn(e,t),Vn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Rn(e,t),Vn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Og(r,s),nd(a,o);var l=nd(a,s);for(o=0;o<c.length;o+=2){var u=c[o],f=c[o+1];u==="style"?Hg(r,f):u==="dangerouslySetInnerHTML"?Bg(r,f):u==="children"?ka(r,f):Pf(r,u,f,l)}switch(a){case"input":Qu(r,s);break;case"textarea":kg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Rn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Rn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Rn(e,t),Vn(t);break;case 13:Rn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ch=gt())),i&4&&qp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(l=Bt)||u,Rn(e,t),Bt=l):Rn(e,t),Vn(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(f=ve=u;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:Cs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){Kp(f);continue}}m!==null?(m.return=h,ve=m):Kp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=jg("display",o))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),Vn(t),i&4&&qp(t);break;case 21:break;default:Rn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=$p(t);Ld(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$p(t);Nd(t,a,o);break;default:throw Error(oe(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e1(t,e,n){ve=t,gv(t)}function gv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Oo;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||Bt;a=Oo;var l=Bt;if(Oo=o,(Bt=c)&&!l)for(ve=r;ve!==null;)o=ve,c=o.child,o.tag===22&&o.memoizedState!==null?Qp(r):c!==null?(c.return=o,ve=c):Qp(r);for(;s!==null;)ve=s,gv(s),s=s.sibling;ve=r,Oo=a,Bt=l}Yp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Yp(t)}}function Yp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Bt||e.flags&512&&Pd(e)}catch(h){mt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Kp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Qp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{Pd(e)}catch(c){mt(e,s,c)}break;case 5:var o=e.return;try{Pd(e)}catch(c){mt(e,o,c)}}}catch(c){mt(e,e.return,c)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var t1=Math.ceil,Ql=Pi.ReactCurrentDispatcher,oh=Pi.ReactCurrentOwner,Tn=Pi.ReactCurrentBatchConfig,We=0,Pt=null,St=null,It=0,dn=0,bs=dr(0),Tt=0,Ja=null,Vr=0,Mc=0,lh=0,Da=null,Qt=null,ch=0,Ws=1/0,pi=null,Zl=!1,Dd=null,tr=null,ko=!1,qi=null,Jl=0,Ia=0,Id=null,yl=-1,Sl=0;function Xt(){return We&6?gt():yl!==-1?yl:yl=gt()}function nr(t){return t.mode&1?We&2&&It!==0?It&-It:ky.transition!==null?(Sl===0&&(Sl=e0()),Sl):(t=et,t!==0||(t=window.event,t=t===void 0?16:o0(t.type)),t):1}function zn(t,e,n,i){if(50<Ia)throw Ia=0,Id=null,Error(oe(185));so(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&(Mc|=n),Tt===4&&Gi(t,It)),rn(t,i),n===1&&We===0&&!(e.mode&1)&&(Ws=gt()+500,_c&&fr()))}function rn(t,e){var n=t.callbackNode;k_(t,e);var i=Fl(t,t===Pt?It:0);if(i===0)n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ap(n),e===1)t.tag===0?Oy(Zp.bind(null,t)):C0(Zp.bind(null,t)),Dy(function(){!(We&6)&&fr()}),n=null;else{switch(t0(i)){case 1:n=Uf;break;case 4:n=Zg;break;case 16:n=Ul;break;case 536870912:n=Jg;break;default:n=Ul}n=wv(n,vv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vv(t,e){if(yl=-1,Sl=0,We&6)throw Error(oe(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Fl(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=We;We|=2;var s=_v();(Pt!==t||It!==e)&&(pi=null,Ws=gt()+500,kr(t,e));do try{r1();break}catch(a){xv(t,a)}while(!0);qf(),Ql.current=s,We=r,St!==null?e=0:(Pt=null,It=0,e=Tt)}if(e!==0){if(e===2&&(r=od(t),r!==0&&(i=r,e=Ud(t,r))),e===1)throw n=Ja,kr(t,0),Gi(t,i),rn(t,gt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!n1(r)&&(e=ec(t,i),e===2&&(s=od(t),s!==0&&(i=s,e=Ud(t,s))),e===1))throw n=Ja,kr(t,0),Gi(t,i),rn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:br(t,Qt,pi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=ch+500-gt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=md(br.bind(null,t,Qt,pi),e);break}br(t,Qt,pi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*t1(i/1960))-i,10<i){t.timeoutHandle=md(br.bind(null,t,Qt,pi),i);break}br(t,Qt,pi);break;case 5:br(t,Qt,pi);break;default:throw Error(oe(329))}}}return rn(t,gt()),t.callbackNode===n?vv.bind(null,t):null}function Ud(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Fd(e)),t}function Fd(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function n1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~lh,e&=~Mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function Zp(t){if(We&6)throw Error(oe(327));Us();var e=Fl(t,0);if(!(e&1))return rn(t,gt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=od(t);i!==0&&(e=i,n=Ud(t,i))}if(n===1)throw n=Ja,kr(t,0),Gi(t,e),rn(t,gt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,Qt,pi),rn(t,gt()),null}function uh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ws=gt()+500,_c&&fr())}}function Gr(t){qi!==null&&qi.tag===0&&!(We&6)&&Us();var e=We;We|=1;var n=Tn.transition,i=et;try{if(Tn.transition=null,et=1,t)return t()}finally{et=i,Tn.transition=n,We=e,!(We&6)&&fr()}}function dh(){dn=bs.current,st(bs)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ly(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Vs(),st(tn),st(Vt),eh();break;case 5:Jf(i);break;case 4:Vs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Yf(i.type._context);break;case 22:case 23:dh()}n=n.return}if(Pt=t,St=t=ir(t.current,null),It=dn=e,Tt=0,Ja=null,lh=Mc=Vr=0,Qt=Da=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function xv(t,e){do{var n=St;try{if(qf(),vl.current=Kl,Yl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(Hr=0,Rt=Et=ct=null,Na=!1,Ka=0,oh.current=null,n===null||n.return===null){Tt=1,Ja=e,St=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=It,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=zp(o);if(m!==null){m.flags&=-257,Bp(m,o,a,s,e),m.mode&1&&kp(s,l,e),e=m,c=l;var x=e.updateQueue;if(x===null){var y=new Set;y.add(c),e.updateQueue=y}else x.add(c);break e}else{if(!(e&1)){kp(s,l,e),fh();break e}c=Error(oe(426))}}else if(at&&a.mode&1){var g=zp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Bp(g,o,a,s,e),Xf(Gs(c,a));break e}}s=c=Gs(c,a),Tt!==4&&(Tt=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=tv(s,c,e);Lp(s,p);break e;case 1:a=c;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(tr===null||!tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=nv(s,a,e);Lp(s,S);break e}}s=s.return}while(s!==null)}Sv(n)}catch(A){e=A,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function _v(){var t=Ql.current;return Ql.current=Kl,t===null?Kl:t}function fh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Vr&268435455)&&!(Mc&268435455)||Gi(Pt,It)}function ec(t,e){var n=We;We|=2;var i=_v();(Pt!==t||It!==e)&&(pi=null,kr(t,e));do try{i1();break}catch(r){xv(t,r)}while(!0);if(qf(),We=n,Ql.current=i,St!==null)throw Error(oe(261));return Pt=null,It=0,Tt}function i1(){for(;St!==null;)yv(St)}function r1(){for(;St!==null&&!R_();)yv(St)}function yv(t){var e=Mv(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Sv(t):St=e,oh.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qy(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=Ky(n,e,dn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function br(t,e,n){var i=et,r=Tn.transition;try{Tn.transition=null,et=1,s1(t,e,n,i)}finally{Tn.transition=r,et=i}return null}function s1(t,e,n,i){do Us();while(qi!==null);if(We&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z_(t,s),t===Pt&&(St=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,wv(Ul,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=et;et=1;var a=We;We|=4,oh.current=null,Jy(t,n),mv(n,t),Ty(hd),Ol=!!fd,hd=fd=null,t.current=n,e1(n),P_(),We=a,et=o,Tn.transition=s}else t.current=n;if(ko&&(ko=!1,qi=t,Jl=r),s=t.pendingLanes,s===0&&(tr=null),D_(n.stateNode),rn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,t=Dd,Dd=null,t;return Jl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Id?Ia++:(Ia=0,Id=t):Ia=0,fr(),null}function Us(){if(qi!==null){var t=t0(Jl),e=Tn.transition,n=et;try{if(Tn.transition=null,et=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Jl=0,We&6)throw Error(oe(331));var r=We;for(We|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var l=a[c];for(ve=l;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:La(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var h=u.sibling,m=u.return;if(fv(u),u===l){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,ve=p;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(A){mt(a,a.return,A)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(We=r,fr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(pc,t)}catch{}i=!0}return i}finally{et=n,Tn.transition=e}}return!1}function Jp(t,e,n){e=Gs(n,e),e=tv(t,e,1),t=er(t,e,1),e=Xt(),t!==null&&(so(t,1,e),rn(t,e))}function mt(t,e,n){if(t.tag===3)Jp(t,t,n);else for(;e!==null;){if(e.tag===3){Jp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Gs(n,t),t=nv(e,t,1),e=er(e,t,1),t=Xt(),e!==null&&(so(e,1,t),rn(e,t));break}}e=e.return}}function a1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(Tt===4||Tt===3&&(It&130023424)===It&&500>gt()-ch?kr(t,0):lh|=n),rn(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=Xt();t=Ti(t,e),t!==null&&(so(t,e,n),rn(t,n))}function o1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function l1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Ev(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Yy(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,at&&e.flags&1048576&&b0(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Bs(e,Vt.current);Is(e,n),r=nh(null,e,i,t,r,n);var s=ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qf(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,Ed(e,i,t,n),e=Td(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Gf(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=u1(i),t=Dn(i,t),r){case 0:e=wd(null,e,i,t,n);break e;case 1:e=Vp(null,e,i,t,n);break e;case 11:e=jp(null,e,i,t,n);break e;case 14:e=Hp(null,e,i,Dn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),wd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Vp(t,e,i,r,n);case 3:e:{if(av(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(oe(423)),e),e=Gp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(oe(424)),e),e=Gp(t,e,i,n,r);break e}else for(fn=Ji(e.stateNode.containerInfo.firstChild),hn=e,at=!0,Un=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Ci(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return I0(e),t===null&&_d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,pd(i,r)?o=null:s!==null&&pd(i,s)&&(e.flags|=32),sv(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return ov(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),jp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(Wl,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!tn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Si(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),yd(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Cn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),Hp(t,e,i,r,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),_l(t,e),e.tag=1,nn(i)?(t=!0,Hl(e)):t=!1,Is(e,n),ev(e,i,r),Ed(e,i,r,n),Td(null,e,i,!0,t,n);case 19:return lv(t,e,n);case 22:return rv(t,e,n)}throw Error(oe(156,e.tag))};function wv(t,e){return Qg(t,e)}function c1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new c1(t,e,n,i)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function u1(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lf)return 11;if(t===Df)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return zr(n.children,r,s,e);case Nf:o=8,r|=8;break;case Xu:return t=Mn(12,n,e,r|2),t.elementType=Xu,t.lanes=s,t;case $u:return t=Mn(13,n,e,r),t.elementType=$u,t.lanes=s,t;case qu:return t=Mn(19,n,e,r),t.elementType=qu,t.lanes=s,t;case Ig:return wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:o=10;break e;case Dg:o=9;break e;case Lf:o=11;break e;case Df:o=14;break e;case ji:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function wc(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function du(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function fu(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function d1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,i,r,s,o,a,c){return t=new d1(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function f1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return or;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(nn(n))return T0(t,n,e)}return e}function Cv(t,e,n,i,r,s,o,a,c){return t=ph(n,i,!0,t,r,s,o,a,c),t.context=Tv(null),n=t.current,i=Xt(),r=nr(n),s=Si(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,so(t,r,i),rn(t,i),t}function Tc(t,e,n,i){var r=e.current,s=Xt(),o=nr(r);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(zn(t,r,o,s),gl(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mh(t,e){em(t,e),(t=t.alternate)&&em(t,e)}function h1(){return null}var bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function gh(t){this._internalRoot=t}Cc.prototype.render=gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Tc(t,e,null,null)};Cc.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Tc(null,t,null,null)}),e[wi]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&a0(t)}};function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tm(){}function p1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=tc(o);s.call(l)}}var o=Cv(e,i,t,0,null,!1,!1,"",tm);return t._reactRootContainer=o,t[wi]=o.current,Wa(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var l=tc(c);a.call(l)}}var c=ph(t,0,!1,null,null,!1,!1,"",tm);return t._reactRootContainer=c,t[wi]=c.current,Wa(t.nodeType===8?t.parentNode:t),Gr(function(){Tc(e,c,n,i)}),c}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=tc(o);a.call(c)}}Tc(e,o,t,r)}else o=p1(n,e,t,r,i);return tc(o)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(Ff(e,n|1),rn(e,gt()),!(We&6)&&(Ws=gt()+500,fr()))}break;case 13:Gr(function(){var i=Ti(t,1);if(i!==null){var r=Xt();zn(i,t,1,r)}}),mh(t,1)}};Of=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Xt();zn(e,t,134217728,n)}mh(t,134217728)}};i0=function(t){if(t.tag===13){var e=nr(t),n=Ti(t,e);if(n!==null){var i=Xt();zn(n,t,e,i)}mh(t,e)}};r0=function(){return et};s0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};rd=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xc(i);if(!r)throw Error(oe(90));Fg(i),Qu(i,r)}}}break;case"textarea":kg(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};Wg=uh;Xg=Gr;var m1={usingClientEntryPoint:!1,Events:[oo,Ss,xc,Vg,Gg,uh]},da={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||h1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{pc=zo.inject(g1),Qn=zo}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(e))throw Error(oe(200));return f1(t,e,null,n)};mn.createRoot=function(t,e){if(!vh(t))throw Error(oe(299));var n=!1,i="",r=bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,Wa(t.nodeType===8?t.parentNode:t),new gh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Gr(t)};mn.hydrate=function(t,e,n){if(!bc(e))throw Error(oe(200));return Ac(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!vh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,Wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};mn.render=function(t,e,n){if(!bc(e))throw Error(oe(200));return Ac(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!bc(t))throw Error(oe(40));return t._reactRootContainer?(Gr(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};mn.unstable_batchedUpdates=uh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Ac(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ag.exports=mn;var v1=Ag.exports,Rv,nm=v1;Rv=nm.createRoot,nm.hydrateRoot;const Pv=z.createContext(void 0),x1=({children:t})=>{const[e,n]=z.useState(()=>localStorage.getItem("theme")||"dark");return z.useEffect(()=>{localStorage.setItem("theme",e),Object.entries({dark:{"--primary-50":"#e23239","--primary-100":"#e0272e","--primary-200":"#d01e25","--primary-300":"#ba1a21","--primary-400":"#a3171d","--primary-500":"#8d1419","--primary-600":"#801217","--primary-700":"#721014","--primary-800":"#650e12","--primary-900":"#570c0f","--primary-950":"#510b0e","--secondary-50":"#62666f","--secondary-100":"#5c6068","--secondary-200":"#50535b","--secondary-300":"#44474d","--secondary-400":"#383a40","--secondary-500":"#2c2e32","--secondary-600":"#25272a","--secondary-700":"#1e1f22","--secondary-800":"#17181a","--secondary-900":"#0f1011","--secondary-950":"#0c0c0d"},light:{"--primary-50":"#3A3A91","--primary-100":"#39398D","--primary-200":"#363686","--primary-300":"#33337F","--primary-400":"#303077","--primary-500":"#2D2D70","--primary-600":"#2A2A69","--primary-700":"#272761","--primary-800":"#24245A","--primary-900":"#212153","--primary-950":"#20204F","--secondary-50":"#FAF8F6","--secondary-100":"#FAF8F6","--secondary-200":"#FAF8F6","--secondary-300":"#FAF8F6","--secondary-400":"#FAF8F6","--secondary-500":"#FAF8F6","--secondary-600":"#FAF8F6","--secondary-700":"#FAF8F6","--secondary-800":"#FAF8F6","--secondary-900":"#FAF8F6","--secondary-950":"#FAF8F6"}}[e]).forEach(([r,s])=>{document.documentElement.style.setProperty(r,s)})},[e]),d.jsx(Pv.Provider,{value:{theme:e,setTheme:n},children:t})},Yr=()=>{const t=z.useContext(Pv);return t||(console.warn("useTheme must be used within a ThemeProvider"),{theme:"dark",setTheme:()=>{}})};var xh={};Object.defineProperty(xh,"__esModule",{value:!0});xh.parse=T1;xh.serialize=C1;const _1=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,y1=/^[\u0021-\u003A\u003C-\u007E]*$/,S1=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,E1=/^[\u0020-\u003A\u003D-\u007E]*$/,M1=Object.prototype.toString,w1=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function T1(t,e){const n=new w1,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||b1;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),c=a===-1?i:a;if(o>c){s=t.lastIndexOf(";",o-1)+1;continue}const l=im(t,s,o),u=rm(t,o,l),f=t.slice(l,u);if(n[f]===void 0){let h=im(t,o+1,c),m=rm(t,c,h);const x=r(t.slice(h,m));n[f]=x}s=c+1}while(s<i);return n}function im(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function rm(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function C1(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!_1.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!y1.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!S1.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!E1.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!A1(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function b1(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function A1(t){return M1.call(t)==="[object Date]"}var sm="popstate";function R1(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Od("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:eo(r)}return N1(e,n,null,t)}function ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ti(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P1(){return Math.random().toString(36).substring(2,10)}function am(t,e){return{usr:t.state,key:t.key,idx:e}}function Od(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ea(e):e,state:n,key:e&&e.key||i||P1()}}function eo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ea(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function N1(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",c=null,l=u();l==null&&(l=0,o.replaceState({...o.state,idx:l},""));function u(){return(o.state||{idx:null}).idx}function f(){a="POP";let g=u(),p=g==null?null:g-l;l=g,c&&c({action:a,location:y.location,delta:p})}function h(g,p){a="PUSH";let v=Od(y.location,g,p);l=u()+1;let _=am(v,l),S=y.createHref(v);try{o.pushState(_,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}s&&c&&c({action:a,location:y.location,delta:1})}function m(g,p){a="REPLACE";let v=Od(y.location,g,p);l=u();let _=am(v,l),S=y.createHref(v);o.replaceState(_,"",S),s&&c&&c({action:a,location:y.location,delta:0})}function x(g){return L1(g)}let y={get action(){return a},get location(){return t(r,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(sm,f),c=g,()=>{r.removeEventListener(sm,f),c=null}},createHref(g){return e(r,g)},createURL:x,encodeLocation(g){let p=x(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(g){return o.go(g)}};return y}function L1(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ut(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:eo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Nv(t,e,n="/"){return D1(t,e,n,!1)}function D1(t,e,n,i){let r=typeof e=="string"?ea(e):e,s=bi(r.pathname||"/",n);if(s==null)return null;let o=Lv(t);I1(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let l=W1(s);a=V1(o[c],l,i)}return a}function Lv(t,e=[],n=[],i=""){let r=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ut(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length));let l=Ei([i,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(ut(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Lv(s.children,e,u,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:j1(l,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let c of Dv(s.path))r(s,o,c)}),e}function Dv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Dv(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function I1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:H1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var U1=/^:[\w-]+$/,F1=3,O1=2,k1=1,z1=10,B1=-2,om=t=>t==="*";function j1(t,e){let n=t.split("/"),i=n.length;return n.some(om)&&(i+=B1),e&&(i+=O1),n.filter(r=>!om(r)).reduce((r,s)=>r+(U1.test(s)?F1:s===""?k1:z1),i)}function H1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function V1(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let c=i[a],l=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=nc({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u),h=c.route;if(!f&&l&&n&&!i[i.length-1].route.index&&(f=nc({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Ei([s,f.pathname]),pathnameBase:Y1(Ei([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ei([s,f.pathnameBase]))}return o}function nc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=G1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((l,{paramName:u,isOptional:f},h)=>{if(u==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const m=a[h];return f&&!m?l[u]=void 0:l[u]=(m||"").replace(/%2F/g,"/"),l},{}),pathname:s,pathnameBase:o,pattern:t}}function G1(t,e=!1,n=!0){ti(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function W1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ti(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function bi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function X1(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ea(t):t;return{pathname:n?n.startsWith("/")?n:$1(n,e):e,search:K1(i),hash:Q1(r)}}function $1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function hu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function q1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iv(t){let e=q1(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Uv(t,e,n,i=!1){let r;typeof t=="string"?r=ea(t):(r={...t},ut(!r.pathname||!r.pathname.includes("?"),hu("?","pathname","search",r)),ut(!r.pathname||!r.pathname.includes("#"),hu("#","pathname","hash",r)),ut(!r.search||!r.search.includes("#"),hu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let c=X1(r,a),l=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}var Ei=t=>t.join("/").replace(/\/\/+/g,"/"),Y1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),K1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Q1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Z1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Fv=["POST","PUT","PATCH","DELETE"];new Set(Fv);var J1=["GET",...Fv];new Set(J1);var ta=z.createContext(null);ta.displayName="DataRouter";var Rc=z.createContext(null);Rc.displayName="DataRouterState";var Ov=z.createContext({isTransitioning:!1});Ov.displayName="ViewTransition";var eS=z.createContext(new Map);eS.displayName="Fetchers";var tS=z.createContext(null);tS.displayName="Await";var ri=z.createContext(null);ri.displayName="Navigation";var co=z.createContext(null);co.displayName="Location";var Ni=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ni.displayName="Route";var _h=z.createContext(null);_h.displayName="RouteError";function nS(t,{relative:e}={}){ut(uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=z.useContext(ri),{hash:r,pathname:s,search:o}=fo(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Ei([n,s])),i.createHref({pathname:a,search:o,hash:r})}function uo(){return z.useContext(co)!=null}function hr(){return ut(uo(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(co).location}var kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zv(t){z.useContext(ri).static||z.useLayoutEffect(t)}function Bv(){let{isDataRoute:t}=z.useContext(Ni);return t?mS():iS()}function iS(){ut(uo(),"useNavigate() may be used only in the context of a <Router> component.");let t=z.useContext(ta),{basename:e,navigator:n}=z.useContext(ri),{matches:i}=z.useContext(Ni),{pathname:r}=hr(),s=JSON.stringify(Iv(i)),o=z.useRef(!1);return zv(()=>{o.current=!0}),z.useCallback((c,l={})=>{if(ti(o.current,kv),!o.current)return;if(typeof c=="number"){n.go(c);return}let u=Uv(c,JSON.parse(s),r,l.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Ei([e,u.pathname])),(l.replace?n.replace:n.push)(u,l.state,l)},[e,n,s,r,t])}z.createContext(null);function fo(t,{relative:e}={}){let{matches:n}=z.useContext(Ni),{pathname:i}=hr(),r=JSON.stringify(Iv(n));return z.useMemo(()=>Uv(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function rS(t,e){return jv(t,e)}function jv(t,e,n,i){var p;ut(uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=z.useContext(ri),{matches:s}=z.useContext(Ni),o=s[s.length-1],a=o?o.params:{},c=o?o.pathname:"/",l=o?o.pathnameBase:"/",u=o&&o.route;{let v=u&&u.path||"";Hv(c,!u||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let f=hr(),h;if(e){let v=typeof e=="string"?ea(e):e;ut(l==="/"||((p=v.pathname)==null?void 0:p.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${v.pathname}" was given in the \`location\` prop.`),h=v}else h=f;let m=h.pathname||"/",x=m;if(l!=="/"){let v=l.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=Nv(t,{pathname:x});ti(u||y!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ti(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=cS(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Ei([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Ei([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i);return e&&g?z.createElement(co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},g):g}function sS(){let t=pS(),e=Z1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:s},"ErrorBoundary")," or"," ",z.createElement("code",{style:s},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:r},n):null,o)}var aS=z.createElement(sS,null),oS=class extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?z.createElement(Ni.Provider,{value:this.props.routeContext},z.createElement(_h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lS({routeContext:t,match:e,children:n}){let i=z.useContext(ta);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Ni.Provider,{value:t},n)}function cS(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let c=r.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id])!==void 0);ut(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let o=!1,a=-1;if(n)for(let c=0;c<r.length;c++){let l=r[c];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(a=c),l.route.id){let{loaderData:u,errors:f}=n,h=l.route.loader&&!u.hasOwnProperty(l.route.id)&&(!f||f[l.route.id]===void 0);if(l.route.lazy||h){o=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((c,l,u)=>{let f,h=!1,m=null,x=null;n&&(f=s&&l.route.id?s[l.route.id]:void 0,m=l.route.errorElement||aS,o&&(a<0&&u===0?(Hv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):a===u&&(h=!0,x=l.route.hydrateFallbackElement||null)));let y=e.concat(r.slice(0,u+1)),g=()=>{let p;return f?p=m:h?p=x:l.route.Component?p=z.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=c,z.createElement(lS,{match:l,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?z.createElement(oS,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}function yh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uS(t){let e=z.useContext(ta);return ut(e,yh(t)),e}function dS(t){let e=z.useContext(Rc);return ut(e,yh(t)),e}function fS(t){let e=z.useContext(Ni);return ut(e,yh(t)),e}function Sh(t){let e=fS(t),n=e.matches[e.matches.length-1];return ut(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function hS(){return Sh("useRouteId")}function pS(){var i;let t=z.useContext(_h),e=dS("useRouteError"),n=Sh("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function mS(){let{router:t}=uS("useNavigate"),e=Sh("useNavigate"),n=z.useRef(!1);return zv(()=>{n.current=!0}),z.useCallback(async(r,s={})=>{ti(n.current,kv),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var lm={};function Hv(t,e,n){!e&&!lm[t]&&(lm[t]=!0,ti(!1,n))}z.memo(gS);function gS({routes:t,future:e,state:n}){return jv(t,void 0,n,e)}function un(t){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vS({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){ut(!uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=z.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=ea(n));let{pathname:c="/",search:l="",hash:u="",state:f=null,key:h="default"}=n,m=z.useMemo(()=>{let x=bi(c,o);return x==null?null:{location:{pathname:x,search:l,hash:u,state:f,key:h},navigationType:i}},[o,c,l,u,f,h,i]);return ti(m!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:z.createElement(ri.Provider,{value:a},z.createElement(co.Provider,{children:e,value:m}))}function xS({children:t,location:e}){return rS(kd(t),e)}function kd(t,e=[]){let n=[];return z.Children.forEach(t,(i,r)=>{if(!z.isValidElement(i))return;let s=[...e,r];if(i.type===z.Fragment){n.push.apply(n,kd(i.props.children,s));return}ut(i.type===un,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=kd(i.props.children,s)),n.push(o)}),n}var Ml="get",wl="application/x-www-form-urlencoded";function Pc(t){return t!=null&&typeof t.tagName=="string"}function _S(t){return Pc(t)&&t.tagName.toLowerCase()==="button"}function yS(t){return Pc(t)&&t.tagName.toLowerCase()==="form"}function SS(t){return Pc(t)&&t.tagName.toLowerCase()==="input"}function ES(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MS(t,e){return t.button===0&&(!e||e==="_self")&&!ES(t)}var Bo=null;function wS(){if(Bo===null)try{new FormData(document.createElement("form"),0),Bo=!1}catch{Bo=!0}return Bo}var TS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pu(t){return t!=null&&!TS.has(t)?(ti(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wl}"`),null):t}function CS(t,e){let n,i,r,s,o;if(yS(t)){let a=t.getAttribute("action");i=a?bi(a,e):null,n=t.getAttribute("method")||Ml,r=pu(t.getAttribute("enctype"))||wl,s=new FormData(t)}else if(_S(t)||SS(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||a.getAttribute("action");if(i=c?bi(c,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Ml,r=pu(t.getAttribute("formenctype"))||pu(a.getAttribute("enctype"))||wl,s=new FormData(a,t),!wS()){let{name:l,type:u,value:f}=t;if(u==="image"){let h=l?`${l}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else l&&s.append(l,f)}}else{if(Pc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ml,i=null,r=wl,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}function Eh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function bS(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function RS(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await bS(s,n);return o.links?o.links():[]}return[]}));return DS(i.flat(1).filter(AS).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function cm(t,e,n,i,r,s){let o=(c,l)=>n[l]?c.route.id!==n[l].route.id:!0,a=(c,l)=>{var u;return n[l].pathname!==c.pathname||((u=n[l].route.path)==null?void 0:u.endsWith("*"))&&n[l].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,l)=>o(c,l)||a(c,l)):s==="data"?e.filter((c,l)=>{var f;let u=i.routes[c.route.id];if(!u||!u.hasLoader)return!1;if(o(c,l)||a(c,l))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function PS(t,e,{includeHydrateFallback:n}={}){return NS(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function NS(t){return[...new Set(t)]}function LS(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function DS(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(LS(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var IS=new Set([100,101,204,205]);function US(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&bi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Vv(){let t=z.useContext(ta);return Eh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function FS(){let t=z.useContext(Rc);return Eh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Mh=z.createContext(void 0);Mh.displayName="FrameworkContext";function Gv(){let t=z.useContext(Mh);return Eh(t,"You must render this element inside a <HydratedRouter> element"),t}function OS(t,e){let n=z.useContext(Mh),[i,r]=z.useState(!1),[s,o]=z.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:f}=e,h=z.useRef(null);z.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=p=>{p.forEach(v=>{o(v.isIntersecting)})},g=new IntersectionObserver(y,{threshold:.5});return h.current&&g.observe(h.current),()=>{g.disconnect()}}},[t]),z.useEffect(()=>{if(i){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[i]);let m=()=>{r(!0)},x=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:fa(a,m),onBlur:fa(c,x),onMouseEnter:fa(l,m),onMouseLeave:fa(u,x),onTouchStart:fa(f,m)}]:[!1,h,{}]}function fa(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function kS({page:t,...e}){let{router:n}=Vv(),i=z.useMemo(()=>Nv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?z.createElement(BS,{page:t,matches:i,...e}):null}function zS(t){let{manifest:e,routeModules:n}=Gv(),[i,r]=z.useState([]);return z.useEffect(()=>{let s=!1;return RS(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function BS({page:t,matches:e,...n}){let i=hr(),{manifest:r,routeModules:s}=Gv(),{basename:o}=Vv(),{loaderData:a,matches:c}=FS(),l=z.useMemo(()=>cm(t,e,c,r,i,"data"),[t,e,c,r,i]),u=z.useMemo(()=>cm(t,e,c,r,i,"assets"),[t,e,c,r,i]),f=z.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,y=!1;if(e.forEach(p=>{var _;let v=r.routes[p.route.id];!v||!v.hasLoader||(!l.some(S=>S.route.id===p.route.id)&&p.route.id in a&&((_=s[p.route.id])!=null&&_.shouldRevalidate)||v.hasClientLoader?y=!0:x.add(p.route.id))}),x.size===0)return[];let g=US(t,o);return y&&x.size>0&&g.searchParams.set("_routes",e.filter(p=>x.has(p.route.id)).map(p=>p.route.id).join(",")),[g.pathname+g.search]},[o,a,i,r,l,e,t,s]),h=z.useMemo(()=>PS(u,r),[u,r]),m=zS(u);return z.createElement(z.Fragment,null,f.map(x=>z.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),h.map(x=>z.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),m.map(({key:x,link:y})=>z.createElement("link",{key:x,...y})))}function jS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wv&&(window.__reactRouterVersion="7.6.3")}catch{}function HS({basename:t,children:e,window:n}){let i=z.useRef();i.current==null&&(i.current=R1({window:n,v5Compat:!0}));let r=i.current,[s,o]=z.useState({action:r.action,location:r.location}),a=z.useCallback(c=>{z.startTransition(()=>o(c))},[o]);return z.useLayoutEffect(()=>r.listen(a),[r,a]),z.createElement(vS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$v=z.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:c,to:l,preventScrollReset:u,viewTransition:f,...h},m){let{basename:x}=z.useContext(ri),y=typeof l=="string"&&Xv.test(l),g,p=!1;if(typeof l=="string"&&y&&(g=l,Wv))try{let w=new URL(window.location.href),E=l.startsWith("//")?new URL(w.protocol+l):new URL(l),R=bi(E.pathname,x);E.origin===w.origin&&R!=null?l=R+E.search+E.hash:p=!0}catch{ti(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=nS(l,{relative:r}),[_,S,A]=OS(i,h),C=XS(l,{replace:o,state:a,target:c,preventScrollReset:u,relative:r,viewTransition:f});function b(w){e&&e(w),w.defaultPrevented||C(w)}let N=z.createElement("a",{...h,...A,href:g||v,onClick:p||s?e:b,ref:jS(m,S),target:c,"data-discover":!y&&n==="render"?"true":void 0});return _&&!y?z.createElement(z.Fragment,null,N,z.createElement(kS,{page:v})):N});$v.displayName="Link";var VS=z.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:c,...l},u){let f=fo(o,{relative:l.relative}),h=hr(),m=z.useContext(Rc),{navigator:x,basename:y}=z.useContext(ri),g=m!=null&&QS(f)&&a===!0,p=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,v=h.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,p=p.toLowerCase()),_&&y&&(_=bi(_,y)||_);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let A=v===p||!r&&v.startsWith(p)&&v.charAt(S)==="/",C=_!=null&&(_===p||!r&&_.startsWith(p)&&_.charAt(p.length)==="/"),b={isActive:A,isPending:C,isTransitioning:g},N=A?e:void 0,w;typeof i=="function"?w=i(b):w=[i,A?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(b):s;return z.createElement($v,{...l,"aria-current":N,className:w,ref:u,style:E,to:o,viewTransition:a},typeof c=="function"?c(b):c)});VS.displayName="NavLink";var GS=z.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=Ml,action:a,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:f,...h},m)=>{let x=YS(),y=KS(a,{relative:l}),g=o.toLowerCase()==="get"?"get":"post",p=typeof a=="string"&&Xv.test(a),v=_=>{if(c&&c(_),_.defaultPrevented)return;_.preventDefault();let S=_.nativeEvent.submitter,A=(S==null?void 0:S.getAttribute("formmethod"))||o;x(S||_.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:s,relative:l,preventScrollReset:u,viewTransition:f})};return z.createElement("form",{ref:m,method:g,action:y,onSubmit:i?c:v,...h,"data-discover":!p&&t==="render"?"true":void 0})});GS.displayName="Form";function WS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qv(t){let e=z.useContext(ta);return ut(e,WS(t)),e}function XS(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=Bv(),c=hr(),l=fo(t,{relative:s});return z.useCallback(u=>{if(MS(u,e)){u.preventDefault();let f=n!==void 0?n:eo(c)===eo(l);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[c,a,l,n,i,e,t,r,s,o])}var $S=0,qS=()=>`__${String(++$S)}__`;function YS(){let{router:t}=qv("useSubmit"),{basename:e}=z.useContext(ri),n=hS();return z.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:c,body:l}=CS(i,e);if(r.navigate===!1){let u=r.fetcherKey||qS();await t.fetch(u,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function KS(t,{relative:e}={}){let{basename:n}=z.useContext(ri),i=z.useContext(Ni);ut(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...fo(t||".",{relative:e})},o=hr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),c=a.getAll("index");if(c.some(u=>u==="")){a.delete("index"),c.filter(f=>f).forEach(f=>a.append("index",f));let u=a.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Ei([n,s.pathname])),eo(s)}function QS(t,e={}){let n=z.useContext(Ov);ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=qv("useViewTransitionState"),r=fo(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=bi(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=bi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return nc(r.pathname,o)!=null||nc(r.pathname,s)!=null}[...IS];const ZS=t=>{const e=z.useRef(null),[n,i]=z.useState(!1);return z.useEffect(()=>{const r=new IntersectionObserver(([o])=>{i(o.isIntersecting)},t),s=e.current;if(s&&(r.observe(s),typeof window<"u")){const o=s.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth;o.top<a&&o.bottom>0&&o.left<c&&o.right>0&&i(!0)}return()=>{s&&r.unobserve(s)}},[t]),[e,n]},ho=t=>{const[e,n]=ZS(t),[i,r]=z.useState(!1);return n&&!i&&r(!0),[e,i]};function ni({children:t}){const[e,n]=ho({threshold:.1});return d.jsx("div",{ref:e,className:`transition-opacity duration-[1500ms] ${n?"opacity-100":"opacity-0"}`,children:t})}function ic({children:t}){const[e,n]=ho({threshold:.1});return d.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-right":"opacity-0"}`,children:t})}function rc({children:t}){const[e,n]=ho({threshold:.1});return d.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-left":"opacity-0"}`,children:t})}function jn({children:t}){return d.jsx("div",{className:"container mx-auto px-6 min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]",children:t})}const sc=({src:t,className:e="",imgClass:n="",alt:i="image"})=>{const[r,s]=z.useState(!1);return d.jsxs(d.Fragment,{children:[!r&&d.jsx("div",{className:`flex justify-center items-center ${e}`,children:d.jsx("img",{className:"w-16 h-16",src:"images/loading.gif"})}),d.jsx("img",{className:`${e} ${n}`,src:t,alt:i,style:{display:r?"block":"none"},onLoad:()=>s(!0)})]})};function Yv({text:t,onClick:e,loading:n,loadingText:i,variant:r="primary"}){return d.jsx("button",{onClick:e,className:`font-normal hover:font-bold mt-6 text-lg px-6 py-3 rounded-full transform transition-transform duration-300 inline-flex items-center gap-2 ${r=="primary"&&"bg-primary-500 hover:bg-primary-600 text-white"} ${r=="white"&&"bg-white hover:bg-white text-primary-500"}`,disabled:n,children:n?d.jsxs(d.Fragment,{children:[d.jsx("img",{className:"w-7 h-7",src:"images/loading.gif"}),i]}):d.jsx("p",{children:t})})}function JS(){return d.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"})})}function wh({className:t=""}){return d.jsx("svg",{className:`w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"-0.5 0 15 15",children:d.jsx("path",{className:`fill-current text-pumpkin ${t}`,fillRule:"evenodd",d:"M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z",transform:"translate(-61 -152)"})})}function Th({className:t=""}){return d.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"0 0 1920 1920",children:d.jsx("path",{d:"M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z",fillRule:"evenodd"})})}function Ch({className:t=""}){return d.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"0 0 32 32",version:"1.1",children:d.jsx("path",{d:"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"})})}function Nc({className:t=""}){return d.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:d.jsx("path",{d:`M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7\r
   l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8\r
   c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64\r
   c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z`})})}function bh({className:t=""}){return d.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:d.jsxs("g",{children:[d.jsx("path",{className:"st0",d:`M500.176,55.798c0,0-21.734-7.434-39.55-11.967C411.686,31.369,308.823,24.727,256,24.727\r
		S100.314,31.369,51.374,43.831c-17.816,4.533-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835\r
		c0.757,8.596,7.957,15.201,16.581,15.201h84.786c8.507,0,15.643-6.416,16.554-14.878l4.28-39.973\r
		c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.485-6.182,110.081-6.182c41.588,0,110.081,6.182,110.081,6.182\r
		c7.948,0.676,14.301,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.544,14.878h84.778\r
		c8.633,0,15.833-6.605,16.59-15.201l8.507-97.835C512.621,65.322,507.718,58.078,500.176,55.798z`}),d.jsx("path",{className:"st0",d:`M357.502,136.629h-55.365v46.137h-92.274v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618\r
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
		C155.066,333.722,163.59,325.197,174.115,325.197z`})]})})}function eE(){return d.jsx("svg",{className:"w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 20 20",version:"1.1",children:d.jsx("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:d.jsx("g",{className:"fill-current text-pumpkin",id:"Dribbble-Light-Preview",transform:"translate(-300.000000, -7599.000000)",children:d.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:d.jsx("path",{d:"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439",id:"whatsapp-[#128]"})})})})})}function Kv(){return d.jsxs("div",{className:"lg:text-[1.2rem] flex flex-col gap-2",children:[d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(Th,{}),d.jsx("a",{href:"mailto:nagham.qarqamaz.kp@gmail.com",className:"hover:underline",children:"nagham.qarqamaz.kp@gmail.com"})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(bh,{}),d.jsx("a",{href:"tel:+963992803522",className:"hover:underline",children:"+963 992 803 522"})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(eE,{}),d.jsx("a",{href:"https://wa.me/+963992803522",className:"hover:underline",target:"_blank",children:"+963 992 803 522"})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(Nc,{}),d.jsxs("div",{className:"text-start",children:[d.jsx("a",{href:"https://www.google.com/maps/place/Latakia,+Syria",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"Syria, Latakia"}),d.jsx("span",{className:"text-pumpkin lg:text-[1.2rem] italic ml-2",children:"(Willing To Relocate)"})]})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(wh,{}),d.jsx("div",{children:"November 10th, 1999"})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(Ch,{}),d.jsx("a",{href:"https://www.linkedin.com/in/nagham-qarqamaz/",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/in/nagham-qarqamaz"})]}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[d.jsx(JS,{}),d.jsx("a",{href:"https://codeforces.com/profile/Nagham_Qarqamaz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/profile/Nagham_Qarqamaz"})]})]})}const tE=()=>{const{theme:t}=Yr(),[e,n]=z.useState(!1),i=async()=>{n(!0);try{const r=document.createElement("a");r.href="resume/Nagham Qarqamaz Resume.pdf",r.download="Nagham Qarqamaz Resume.pdf",document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(r){console.error("Error downloading file:",r)}finally{setTimeout(()=>n(!1),2e3)}};return d.jsx("div",{className:"bg-[url('/images/cover.jpg')] bg-cover",children:d.jsxs("div",{className:`${t==="light"?"bg-[#FFFFFFDD]":"bg-[#000000DD]"} min-h-screen relative`,children:[d.jsx("img",{className:"absolute bottom-0 w-full h-40",src:"images/wave.png"}),d.jsx(jn,{children:d.jsxs("div",{className:"font-bold relative min-h-screen flex flex-col sm:flex-row justify-between items-center gap-8 py-20",children:[d.jsx("div",{className:"order-1 sm:order-0",children:d.jsx(rc,{children:d.jsx(Kv,{})})}),d.jsx("div",{className:"flex-grow order-0 sm:order-1",children:d.jsx(ic,{children:d.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[d.jsx(ni,{children:d.jsx(sc,{className:"mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/sketch.png"})}),d.jsx("h1",{className:"text-[1.8rem] lg:text-[3rem] mb-2",children:"Nagham Qarqamaz"}),d.jsx("p",{className:"lg:text-[1.3rem]",children:"Software Engineer & Full-Stack Developer"}),d.jsx(Yv,{text:"Download Resume",onClick:i,loading:e,loadingText:"Downloading..."})]})})})]})})]})})};var Qv={exports:{}};(function(t,e){(function(n,i){t.exports=i(z)})(typeof self<"u"?self:Gx,n=>(()=>{var i={7403:(a,c,l)=>{l.d(c,{default:()=>I});var u=l(4087),f=l.n(u);const h=function(H){return new RegExp(/<[a-z][\s\S]*>/i).test(H)},m=function(H,j){return Math.floor(Math.random()*(j-H+1))+H};var x="TYPE_CHARACTER",y="REMOVE_CHARACTER",g="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",_="CALL_FUNCTION",S="ADD_HTML_TAG_ELEMENT",A="CHANGE_DELETE_SPEED",C="CHANGE_DELAY",b="CHANGE_CURSOR",N="PASTE_STRING",w="HTML_TAG";function E(H){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},E(H)}function R(H,j){var Q=Object.keys(H);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(H);j&&(se=se.filter(function(De){return Object.getOwnPropertyDescriptor(H,De).enumerable})),Q.push.apply(Q,se)}return Q}function B(H){for(var j=1;j<arguments.length;j++){var Q=arguments[j]!=null?arguments[j]:{};j%2?R(Object(Q),!0).forEach(function(se){V(H,se,Q[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(Q)):R(Object(Q)).forEach(function(se){Object.defineProperty(H,se,Object.getOwnPropertyDescriptor(Q,se))})}return H}function k(H){return function(j){if(Array.isArray(j))return q(j)}(H)||function(j){if(typeof Symbol<"u"&&j[Symbol.iterator]!=null||j["@@iterator"]!=null)return Array.from(j)}(H)||function(j,Q){if(j){if(typeof j=="string")return q(j,Q);var se=Object.prototype.toString.call(j).slice(8,-1);return se==="Object"&&j.constructor&&(se=j.constructor.name),se==="Map"||se==="Set"?Array.from(j):se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se)?q(j,Q):void 0}}(H)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function q(H,j){(j==null||j>H.length)&&(j=H.length);for(var Q=0,se=new Array(j);Q<j;Q++)se[Q]=H[Q];return se}function Y(H,j){for(var Q=0;Q<j.length;Q++){var se=j[Q];se.enumerable=se.enumerable||!1,se.configurable=!0,"value"in se&&(se.writable=!0),Object.defineProperty(H,Z(se.key),se)}}function V(H,j,Q){return(j=Z(j))in H?Object.defineProperty(H,j,{value:Q,enumerable:!0,configurable:!0,writable:!0}):H[j]=Q,H}function Z(H){var j=function(Q,se){if(E(Q)!=="object"||Q===null)return Q;var De=Q[Symbol.toPrimitive];if(De!==void 0){var P=De.call(Q,"string");if(E(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Q)}(H);return E(j)==="symbol"?j:String(j)}const I=function(){function H(se,De){var P=this;if(function(K,re){if(!(K instanceof re))throw new TypeError("Cannot call a class as a function")}(this,H),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),V(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),V(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),V(this,"stop",function(){return P.state.eventLoop&&((0,u.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),V(this,"pauseFor",function(K){return P.addEventToQueue(v,{ms:K}),P}),V(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(K){P.typeString(K).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),V(this,"typeString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(h(K))return P.typeOutHTMLString(K,re);if(K){var xe=(P.options||{}).stringSplitter,Me=typeof xe=="function"?xe(K):K.split("");P.typeCharacters(Me,re)}return P}),V(this,"pasteString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return h(K)?P.typeOutHTMLString(K,re,!0):(K&&P.addEventToQueue(N,{character:K,node:re}),P)}),V(this,"typeOutHTMLString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,xe=arguments.length>2?arguments[2]:void 0,Me=function(tt){var Ve=document.createElement("div");return Ve.innerHTML=tt,Ve.childNodes}(K);if(Me.length>0)for(var ye=0;ye<Me.length;ye++){var He=Me[ye],D=He.innerHTML;He&&He.nodeType!==3?(He.innerHTML="",P.addEventToQueue(S,{node:He,parentNode:re}),xe?P.pasteString(D,He):P.typeString(D,He)):He.textContent&&(xe?P.pasteString(He.textContent,re):P.typeString(He.textContent,re))}return P}),V(this,"deleteAll",function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(g,{speed:K}),P}),V(this,"changeDeleteSpeed",function(K){if(!K)throw new Error("Must provide new delete speed");return P.addEventToQueue(A,{speed:K}),P}),V(this,"changeDelay",function(K){if(!K)throw new Error("Must provide new delay");return P.addEventToQueue(C,{delay:K}),P}),V(this,"changeCursor",function(K){if(!K)throw new Error("Must provide new cursor");return P.addEventToQueue(b,{cursor:K}),P}),V(this,"deleteChars",function(K){if(!K)throw new Error("Must provide amount of characters to delete");for(var re=0;re<K;re++)P.addEventToQueue(y);return P}),V(this,"callFunction",function(K,re){if(!K||typeof K!="function")throw new Error("Callback must be a function");return P.addEventToQueue(_,{cb:K,thisArg:re}),P}),V(this,"typeCharacters",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(xe){P.addEventToQueue(x,{character:xe,node:re})}),P}),V(this,"removeCharacters",function(K){if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(){P.addEventToQueue(y)}),P}),V(this,"addEventToQueue",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(K,re,xe,"eventQueue")}),V(this,"addReverseCalledEvent",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(K,re,xe,"reverseCalledEvents"):P}),V(this,"addEventToStateProperty",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Me=arguments.length>3?arguments[3]:void 0,ye={eventName:K,eventArgs:re||{}};return P.state[Me]=xe?[ye].concat(k(P.state[Me])):[].concat(k(P.state[Me]),[ye]),P}),V(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var K=Date.now(),re=K-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=k(P.state.calledEvents),P.state.calledEvents=[],P.options=B({},P.state.initialOptions)}if(P.state.eventLoop=f()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(K<P.state.pauseUntil)return;P.state.pauseUntil=null}var xe,Me=k(P.state.eventQueue),ye=Me.shift();if(!(re<=(xe=ye.eventName===p||ye.eventName===y?P.options.deleteSpeed==="natural"?m(40,80):P.options.deleteSpeed:P.options.delay==="natural"?m(120,160):P.options.delay))){var He=ye.eventName,D=ye.eventArgs;switch(P.logInDevMode({currentEvent:ye,state:P.state,delay:xe}),He){case N:case x:var tt=D.character,Ve=D.node,$e=document.createTextNode(tt),we=$e;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(we=P.options.onCreateTextNode(tt,$e)),we&&(Ve?Ve.appendChild(we):P.state.elements.wrapper.appendChild(we)),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:"TEXT_NODE",character:tt,node:we}]);break;case y:Me.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var ft=ye.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(ft);break;case _:var Ae=ye.eventArgs,Ie=Ae.cb,L=Ae.thisArg;Ie.call(L,{elements:P.state.elements});break;case S:var M=ye.eventArgs,$=M.node,ee=M.parentNode;ee?ee.appendChild($):P.state.elements.wrapper.appendChild($),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:w,node:$,parentNode:ee||P.state.elements.wrapper}]);break;case g:var ie=P.state.visibleNodes,te=D.speed,Ce=[];te&&Ce.push({eventName:A,eventArgs:{speed:te,temp:!0}});for(var fe=0,ge=ie.length;fe<ge;fe++)Ce.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&Ce.push({eventName:A,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),Me.unshift.apply(Me,Ce);break;case p:var Fe=ye.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var le=P.state.visibleNodes.pop(),me=le.type,ze=le.node,Re=le.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:ze,character:Re}),ze&&ze.parentNode.removeChild(ze),me===w&&Fe&&Me.unshift({eventName:p,eventArgs:{}})}break;case A:P.options.deleteSpeed=ye.eventArgs.speed;break;case C:P.options.delay=ye.eventArgs.delay;break;case b:P.options.cursor=ye.eventArgs.cursor,P.state.elements.cursor.innerHTML=ye.eventArgs.cursor}P.options.loop&&(ye.eventName===p||ye.eventArgs&&ye.eventArgs.temp||(P.state.calledEvents=[].concat(k(P.state.calledEvents),[ye]))),P.state.eventQueue=Me,P.state.lastFrameTime=K}}}),se)if(typeof se=="string"){var ae=document.querySelector(se);if(!ae)throw new Error("Could not find container element");this.state.elements.container=ae}else this.state.elements.container=se;De&&(this.options=B(B({},this.options),De)),this.state.initialOptions=B({},this.options),this.init()}var j,Q;return j=H,(Q=[{key:"init",value:function(){var se,De;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(se=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(De=document.createElement("style")).appendChild(document.createTextNode(se)),document.head.appendChild(De),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(se){this.options.devMode&&console.log(se)}}])&&Y(j.prototype,Q),Object.defineProperty(j,"prototype",{writable:!1}),H}()},8552:(a,c,l)=>{var u=l(852)(l(5639),"DataView");a.exports=u},1989:(a,c,l)=>{var u=l(1789),f=l(401),h=l(7667),m=l(1327),x=l(1866);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=u,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},8407:(a,c,l)=>{var u=l(7040),f=l(4125),h=l(2117),m=l(7518),x=l(4705);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=u,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},7071:(a,c,l)=>{var u=l(852)(l(5639),"Map");a.exports=u},3369:(a,c,l)=>{var u=l(4785),f=l(1285),h=l(6e3),m=l(9916),x=l(5265);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=u,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},3818:(a,c,l)=>{var u=l(852)(l(5639),"Promise");a.exports=u},8525:(a,c,l)=>{var u=l(852)(l(5639),"Set");a.exports=u},8668:(a,c,l)=>{var u=l(3369),f=l(619),h=l(2385);function m(x){var y=-1,g=x==null?0:x.length;for(this.__data__=new u;++y<g;)this.add(x[y])}m.prototype.add=m.prototype.push=f,m.prototype.has=h,a.exports=m},6384:(a,c,l)=>{var u=l(8407),f=l(7465),h=l(3779),m=l(7599),x=l(4758),y=l(4309);function g(p){var v=this.__data__=new u(p);this.size=v.size}g.prototype.clear=f,g.prototype.delete=h,g.prototype.get=m,g.prototype.has=x,g.prototype.set=y,a.exports=g},2705:(a,c,l)=>{var u=l(5639).Symbol;a.exports=u},1149:(a,c,l)=>{var u=l(5639).Uint8Array;a.exports=u},577:(a,c,l)=>{var u=l(852)(l(5639),"WeakMap");a.exports=u},4963:a=>{a.exports=function(c,l){for(var u=-1,f=c==null?0:c.length,h=0,m=[];++u<f;){var x=c[u];l(x,u,c)&&(m[h++]=x)}return m}},4636:(a,c,l)=>{var u=l(2545),f=l(5694),h=l(1469),m=l(4144),x=l(5776),y=l(6719),g=Object.prototype.hasOwnProperty;a.exports=function(p,v){var _=h(p),S=!_&&f(p),A=!_&&!S&&m(p),C=!_&&!S&&!A&&y(p),b=_||S||A||C,N=b?u(p.length,String):[],w=N.length;for(var E in p)!v&&!g.call(p,E)||b&&(E=="length"||A&&(E=="offset"||E=="parent")||C&&(E=="buffer"||E=="byteLength"||E=="byteOffset")||x(E,w))||N.push(E);return N}},2488:a=>{a.exports=function(c,l){for(var u=-1,f=l.length,h=c.length;++u<f;)c[h+u]=l[u];return c}},2908:a=>{a.exports=function(c,l){for(var u=-1,f=c==null?0:c.length;++u<f;)if(l(c[u],u,c))return!0;return!1}},8470:(a,c,l)=>{var u=l(7813);a.exports=function(f,h){for(var m=f.length;m--;)if(u(f[m][0],h))return m;return-1}},8866:(a,c,l)=>{var u=l(2488),f=l(1469);a.exports=function(h,m,x){var y=m(h);return f(h)?y:u(y,x(h))}},4239:(a,c,l)=>{var u=l(2705),f=l(9607),h=l(2333),m=u?u.toStringTag:void 0;a.exports=function(x){return x==null?x===void 0?"[object Undefined]":"[object Null]":m&&m in Object(x)?f(x):h(x)}},9454:(a,c,l)=>{var u=l(4239),f=l(7005);a.exports=function(h){return f(h)&&u(h)=="[object Arguments]"}},939:(a,c,l)=>{var u=l(2492),f=l(7005);a.exports=function h(m,x,y,g,p){return m===x||(m==null||x==null||!f(m)&&!f(x)?m!=m&&x!=x:u(m,x,y,g,h,p))}},2492:(a,c,l)=>{var u=l(6384),f=l(7114),h=l(8351),m=l(6096),x=l(4160),y=l(1469),g=l(4144),p=l(6719),v="[object Arguments]",_="[object Array]",S="[object Object]",A=Object.prototype.hasOwnProperty;a.exports=function(C,b,N,w,E,R){var B=y(C),k=y(b),q=B?_:x(C),Y=k?_:x(b),V=(q=q==v?S:q)==S,Z=(Y=Y==v?S:Y)==S,I=q==Y;if(I&&g(C)){if(!g(b))return!1;B=!0,V=!1}if(I&&!V)return R||(R=new u),B||p(C)?f(C,b,N,w,E,R):h(C,b,q,N,w,E,R);if(!(1&N)){var H=V&&A.call(C,"__wrapped__"),j=Z&&A.call(b,"__wrapped__");if(H||j){var Q=H?C.value():C,se=j?b.value():b;return R||(R=new u),E(Q,se,N,w,R)}}return!!I&&(R||(R=new u),m(C,b,N,w,E,R))}},8458:(a,c,l)=>{var u=l(3560),f=l(5346),h=l(3218),m=l(346),x=/^\[object .+?Constructor\]$/,y=Function.prototype,g=Object.prototype,p=y.toString,v=g.hasOwnProperty,_=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(S){return!(!h(S)||f(S))&&(u(S)?_:x).test(m(S))}},8749:(a,c,l)=>{var u=l(4239),f=l(1780),h=l(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,a.exports=function(x){return h(x)&&f(x.length)&&!!m[u(x)]}},280:(a,c,l)=>{var u=l(5726),f=l(6916),h=Object.prototype.hasOwnProperty;a.exports=function(m){if(!u(m))return f(m);var x=[];for(var y in Object(m))h.call(m,y)&&y!="constructor"&&x.push(y);return x}},2545:a=>{a.exports=function(c,l){for(var u=-1,f=Array(c);++u<c;)f[u]=l(u);return f}},1717:a=>{a.exports=function(c){return function(l){return c(l)}}},4757:a=>{a.exports=function(c,l){return c.has(l)}},4429:(a,c,l)=>{var u=l(5639)["__core-js_shared__"];a.exports=u},7114:(a,c,l)=>{var u=l(8668),f=l(2908),h=l(4757);a.exports=function(m,x,y,g,p,v){var _=1&y,S=m.length,A=x.length;if(S!=A&&!(_&&A>S))return!1;var C=v.get(m),b=v.get(x);if(C&&b)return C==x&&b==m;var N=-1,w=!0,E=2&y?new u:void 0;for(v.set(m,x),v.set(x,m);++N<S;){var R=m[N],B=x[N];if(g)var k=_?g(B,R,N,x,m,v):g(R,B,N,m,x,v);if(k!==void 0){if(k)continue;w=!1;break}if(E){if(!f(x,function(q,Y){if(!h(E,Y)&&(R===q||p(R,q,y,g,v)))return E.push(Y)})){w=!1;break}}else if(R!==B&&!p(R,B,y,g,v)){w=!1;break}}return v.delete(m),v.delete(x),w}},8351:(a,c,l)=>{var u=l(2705),f=l(1149),h=l(7813),m=l(7114),x=l(8776),y=l(1814),g=u?u.prototype:void 0,p=g?g.valueOf:void 0;a.exports=function(v,_,S,A,C,b,N){switch(S){case"[object DataView]":if(v.byteLength!=_.byteLength||v.byteOffset!=_.byteOffset)return!1;v=v.buffer,_=_.buffer;case"[object ArrayBuffer]":return!(v.byteLength!=_.byteLength||!b(new f(v),new f(_)));case"[object Boolean]":case"[object Date]":case"[object Number]":return h(+v,+_);case"[object Error]":return v.name==_.name&&v.message==_.message;case"[object RegExp]":case"[object String]":return v==_+"";case"[object Map]":var w=x;case"[object Set]":var E=1&A;if(w||(w=y),v.size!=_.size&&!E)return!1;var R=N.get(v);if(R)return R==_;A|=2,N.set(v,_);var B=m(w(v),w(_),A,C,b,N);return N.delete(v),B;case"[object Symbol]":if(p)return p.call(v)==p.call(_)}return!1}},6096:(a,c,l)=>{var u=l(8234),f=Object.prototype.hasOwnProperty;a.exports=function(h,m,x,y,g,p){var v=1&x,_=u(h),S=_.length;if(S!=u(m).length&&!v)return!1;for(var A=S;A--;){var C=_[A];if(!(v?C in m:f.call(m,C)))return!1}var b=p.get(h),N=p.get(m);if(b&&N)return b==m&&N==h;var w=!0;p.set(h,m),p.set(m,h);for(var E=v;++A<S;){var R=h[C=_[A]],B=m[C];if(y)var k=v?y(B,R,C,m,h,p):y(R,B,C,h,m,p);if(!(k===void 0?R===B||g(R,B,x,y,p):k)){w=!1;break}E||(E=C=="constructor")}if(w&&!E){var q=h.constructor,Y=m.constructor;q==Y||!("constructor"in h)||!("constructor"in m)||typeof q=="function"&&q instanceof q&&typeof Y=="function"&&Y instanceof Y||(w=!1)}return p.delete(h),p.delete(m),w}},1957:(a,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;a.exports=u},8234:(a,c,l)=>{var u=l(8866),f=l(9551),h=l(3674);a.exports=function(m){return u(m,h,f)}},5050:(a,c,l)=>{var u=l(7019);a.exports=function(f,h){var m=f.__data__;return u(h)?m[typeof h=="string"?"string":"hash"]:m.map}},852:(a,c,l)=>{var u=l(8458),f=l(7801);a.exports=function(h,m){var x=f(h,m);return u(x)?x:void 0}},9607:(a,c,l)=>{var u=l(2705),f=Object.prototype,h=f.hasOwnProperty,m=f.toString,x=u?u.toStringTag:void 0;a.exports=function(y){var g=h.call(y,x),p=y[x];try{y[x]=void 0;var v=!0}catch{}var _=m.call(y);return v&&(g?y[x]=p:delete y[x]),_}},9551:(a,c,l)=>{var u=l(4963),f=l(479),h=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,x=m?function(y){return y==null?[]:(y=Object(y),u(m(y),function(g){return h.call(y,g)}))}:f;a.exports=x},4160:(a,c,l)=>{var u=l(8552),f=l(7071),h=l(3818),m=l(8525),x=l(577),y=l(4239),g=l(346),p="[object Map]",v="[object Promise]",_="[object Set]",S="[object WeakMap]",A="[object DataView]",C=g(u),b=g(f),N=g(h),w=g(m),E=g(x),R=y;(u&&R(new u(new ArrayBuffer(1)))!=A||f&&R(new f)!=p||h&&R(h.resolve())!=v||m&&R(new m)!=_||x&&R(new x)!=S)&&(R=function(B){var k=y(B),q=k=="[object Object]"?B.constructor:void 0,Y=q?g(q):"";if(Y)switch(Y){case C:return A;case b:return p;case N:return v;case w:return _;case E:return S}return k}),a.exports=R},7801:a=>{a.exports=function(c,l){return c==null?void 0:c[l]}},1789:(a,c,l)=>{var u=l(4536);a.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:a=>{a.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(a,c,l)=>{var u=l(4536),f=Object.prototype.hasOwnProperty;a.exports=function(h){var m=this.__data__;if(u){var x=m[h];return x==="__lodash_hash_undefined__"?void 0:x}return f.call(m,h)?m[h]:void 0}},1327:(a,c,l)=>{var u=l(4536),f=Object.prototype.hasOwnProperty;a.exports=function(h){var m=this.__data__;return u?m[h]!==void 0:f.call(m,h)}},1866:(a,c,l)=>{var u=l(4536);a.exports=function(f,h){var m=this.__data__;return this.size+=this.has(f)?0:1,m[f]=u&&h===void 0?"__lodash_hash_undefined__":h,this}},5776:a=>{var c=/^(?:0|[1-9]\d*)$/;a.exports=function(l,u){var f=typeof l;return!!(u=u??9007199254740991)&&(f=="number"||f!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},7019:a=>{a.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(a,c,l)=>{var u,f=l(4429),h=(u=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";a.exports=function(m){return!!h&&h in m}},5726:a=>{var c=Object.prototype;a.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,c,l)=>{var u=l(8470),f=Array.prototype.splice;a.exports=function(h){var m=this.__data__,x=u(m,h);return!(x<0||(x==m.length-1?m.pop():f.call(m,x,1),--this.size,0))}},2117:(a,c,l)=>{var u=l(8470);a.exports=function(f){var h=this.__data__,m=u(h,f);return m<0?void 0:h[m][1]}},7518:(a,c,l)=>{var u=l(8470);a.exports=function(f){return u(this.__data__,f)>-1}},4705:(a,c,l)=>{var u=l(8470);a.exports=function(f,h){var m=this.__data__,x=u(m,f);return x<0?(++this.size,m.push([f,h])):m[x][1]=h,this}},4785:(a,c,l)=>{var u=l(1989),f=l(8407),h=l(7071);a.exports=function(){this.size=0,this.__data__={hash:new u,map:new(h||f),string:new u}}},1285:(a,c,l)=>{var u=l(5050);a.exports=function(f){var h=u(this,f).delete(f);return this.size-=h?1:0,h}},6e3:(a,c,l)=>{var u=l(5050);a.exports=function(f){return u(this,f).get(f)}},9916:(a,c,l)=>{var u=l(5050);a.exports=function(f){return u(this,f).has(f)}},5265:(a,c,l)=>{var u=l(5050);a.exports=function(f,h){var m=u(this,f),x=m.size;return m.set(f,h),this.size+=m.size==x?0:1,this}},8776:a=>{a.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(f,h){u[++l]=[h,f]}),u}},4536:(a,c,l)=>{var u=l(852)(Object,"create");a.exports=u},6916:(a,c,l)=>{var u=l(5569)(Object.keys,Object);a.exports=u},1167:(a,c,l)=>{a=l.nmd(a);var u=l(1957),f=c&&!c.nodeType&&c,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f&&u.process,x=function(){try{return h&&h.require&&h.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();a.exports=x},2333:a=>{var c=Object.prototype.toString;a.exports=function(l){return c.call(l)}},5569:a=>{a.exports=function(c,l){return function(u){return c(l(u))}}},5639:(a,c,l)=>{var u=l(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,h=u||f||Function("return this")();a.exports=h},619:a=>{a.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(c){return this.__data__.has(c)}},1814:a=>{a.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(f){u[++l]=f}),u}},7465:(a,c,l)=>{var u=l(8407);a.exports=function(){this.__data__=new u,this.size=0}},3779:a=>{a.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},7599:a=>{a.exports=function(c){return this.__data__.get(c)}},4758:a=>{a.exports=function(c){return this.__data__.has(c)}},4309:(a,c,l)=>{var u=l(8407),f=l(7071),h=l(3369);a.exports=function(m,x){var y=this.__data__;if(y instanceof u){var g=y.__data__;if(!f||g.length<199)return g.push([m,x]),this.size=++y.size,this;y=this.__data__=new h(g)}return y.set(m,x),this.size=y.size,this}},346:a=>{var c=Function.prototype.toString;a.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:a=>{a.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(a,c,l)=>{var u=l(9454),f=l(7005),h=Object.prototype,m=h.hasOwnProperty,x=h.propertyIsEnumerable,y=u(function(){return arguments}())?u:function(g){return f(g)&&m.call(g,"callee")&&!x.call(g,"callee")};a.exports=y},1469:a=>{var c=Array.isArray;a.exports=c},8612:(a,c,l)=>{var u=l(3560),f=l(1780);a.exports=function(h){return h!=null&&f(h.length)&&!u(h)}},4144:(a,c,l)=>{a=l.nmd(a);var u=l(5639),f=l(5062),h=c&&!c.nodeType&&c,m=h&&a&&!a.nodeType&&a,x=m&&m.exports===h?u.Buffer:void 0,y=(x?x.isBuffer:void 0)||f;a.exports=y},8446:(a,c,l)=>{var u=l(939);a.exports=function(f,h){return u(f,h)}},3560:(a,c,l)=>{var u=l(4239),f=l(3218);a.exports=function(h){if(!f(h))return!1;var m=u(h);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:a=>{a.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:a=>{a.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:a=>{a.exports=function(c){return c!=null&&typeof c=="object"}},6719:(a,c,l)=>{var u=l(8749),f=l(1717),h=l(1167),m=h&&h.isTypedArray,x=m?f(m):u;a.exports=x},3674:(a,c,l)=>{var u=l(4636),f=l(280),h=l(8612);a.exports=function(m){return h(m)?u(m):f(m)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var c,l,u,f,h,m;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(c()-h)/1e6},l=process.hrtime,f=(c=function(){var x;return 1e9*(x=l())[0]+x[1]})(),m=1e9*process.uptime(),h=f-m):Date.now?(a.exports=function(){return Date.now()-u},u=Date.now()):(a.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(a,c,l)=>{for(var u=l(75),f=typeof window>"u"?l.g:window,h=["moz","webkit"],m="AnimationFrame",x=f["request"+m],y=f["cancel"+m]||f["cancelRequest"+m],g=0;!x&&g<h.length;g++)x=f[h[g]+"Request"+m],y=f[h[g]+"Cancel"+m]||f[h[g]+"CancelRequest"+m];if(!x||!y){var p=0,v=0,_=[];x=function(S){if(_.length===0){var A=u(),C=Math.max(0,16.666666666666668-(A-p));p=C+A,setTimeout(function(){var b=_.slice(0);_.length=0;for(var N=0;N<b.length;N++)if(!b[N].cancelled)try{b[N].callback(p)}catch(w){setTimeout(function(){throw w},0)}},Math.round(C))}return _.push({handle:++v,callback:S,cancelled:!1}),v},y=function(S){for(var A=0;A<_.length;A++)_[A].handle===S&&(_[A].cancelled=!0)}}a.exports=function(S){return x.call(f,S)},a.exports.cancel=function(){y.apply(f,arguments)},a.exports.polyfill=function(S){S||(S=f),S.requestAnimationFrame=x,S.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},r={};function s(a){var c=r[a];if(c!==void 0)return c.exports;var l=r[a]={id:a,loaded:!1,exports:{}};return i[a].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return s.d(c,{a:c}),c},s.d=(a,c)=>{for(var l in c)s.o(c,l)&&!s.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),s.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var o={};return(()=>{s.d(o,{default:()=>_});var a=s(8156),c=s.n(a),l=s(7403),u=s(8446),f=s.n(u);function h(S){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},h(S)}function m(S,A){for(var C=0;C<A.length;C++){var b=A[C];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(S,p(b.key),b)}}function x(S,A){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,b){return C.__proto__=b,C},x(S,A)}function y(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(S){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},g(S)}function p(S){var A=function(C,b){if(h(C)!=="object"||C===null)return C;var N=C[Symbol.toPrimitive];if(N!==void 0){var w=N.call(C,"string");if(h(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(C)}(S);return h(A)==="symbol"?A:String(A)}var v=function(S){(function(R,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(B&&B.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),B&&x(R,B)})(E,S);var A,C,b,N,w=(b=E,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var R,B=g(b);if(N){var k=g(this).constructor;R=Reflect.construct(B,arguments,k)}else R=B.apply(this,arguments);return function(q,Y){if(Y&&(h(Y)==="object"||typeof Y=="function"))return Y;if(Y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(q)}(this,R)});function E(){var R,B,k,q;(function(I,H){if(!(I instanceof H))throw new TypeError("Cannot call a class as a function")})(this,E);for(var Y=arguments.length,V=new Array(Y),Z=0;Z<Y;Z++)V[Z]=arguments[Z];return B=y(R=w.call.apply(w,[this].concat(V))),q={instance:null},(k=p(k="state"))in B?Object.defineProperty(B,k,{value:q,enumerable:!0,configurable:!0,writable:!0}):B[k]=q,R}return A=E,(C=[{key:"componentDidMount",value:function(){var R=this,B=new l.default(this.typewriter,this.props.options);this.setState({instance:B},function(){var k=R.props.onInit;k&&k(B)})}},{key:"componentDidUpdate",value:function(R){f()(this.props.options,R.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var R=this,B=this.props.component;return c().createElement(B,{ref:function(k){return R.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(A.prototype,C),Object.defineProperty(A,"prototype",{writable:!1}),E}(a.Component);v.defaultProps={component:"div"};const _=v})(),o.default})())})(Qv);var nE=Qv.exports;const iE=Wx(nE);function rE({text:t}){const{theme:e}=Yr();return d.jsx("div",{className:"mb-4 w-full flex justify-center",children:d.jsx("h2",{className:`w-fit text-[13vw] sm:text-[3rem] font-bold ${e=="light"?"text-primary":"bg-gradient-to-r text-transparent bg-clip-text from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"}`,children:t})})}function si({title:t,children:e,glow:n=!0}){const{theme:i}=Yr();return d.jsx("div",{className:"py-20 text-center",children:d.jsxs(ni,{children:[d.jsx(rE,{text:t}),d.jsx("div",{className:`mt-8 ${n&&i=="dark"&&"shadow-pumpkin overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]"}`,children:e})]})})}const um=["<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>","<li class='custom-bullet pb-3'>Over 3+ years of experience as a <span class='text-pumpkin font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture for a while, currently focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>","<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin font-bold'>problem-solving</span> and code complexity analysis.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through multiple projects.</li>","<li class='custom-bullet pb-3'>Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team.</li>"];function sE(){const[t,e]=ho({threshold:.1});return d.jsx(si,{title:"About Me",children:d.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-12",children:[d.jsxs("div",{ref:t,className:"order-1 md:order-0 flex-grow self-start text-[1rem] mx-auto text-left sm:h-[24rem] md:h-[34rem] lg:h-[24rem] xl:h-[18rem]",children:[d.jsx("div",{className:"hidden sm:block",children:e&&d.jsx(iE,{onInit:n=>{um.forEach(i=>{n.typeString(i).pauseFor(300)}),n.start()},options:{loop:!1,delay:1,cursor:""}})}),d.jsx("div",{className:"sm:hidden",children:d.jsx("ul",{children:um.map((n,i)=>d.jsx("li",{className:"pb-3",dangerouslySetInnerHTML:{__html:n}},i))})})]}),d.jsx("div",{className:"relative order-0 md:order-1",children:d.jsx("div",{children:d.jsx(ni,{children:d.jsx(sc,{className:"max-h-[16rem] md:min-w-[16rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/on-laptop.png"})})})})]})})}const aE=()=>d.jsxs(d.Fragment,{children:[d.jsx(tE,{}),d.jsx(jn,{children:d.jsx(sE,{})})]});function en({children:t,hoverEffect:e=!0,className:n=""}){return d.jsx("div",{className:`text-white p-4 rounded-[1rem] shadow-lg text-[0.9rem] h-full ${e&&"transform hover:scale-105 transition-transform duration-300"} bg-primary-800 ${n}`,children:t})}function Zv({name:t,company:e,description:n,skills:i,videoURL:r}){return d.jsx(en,{children:d.jsxs("div",{className:"flex flex-col justify-between h-full",children:[d.jsxs("div",{className:"text-center mb-4",children:[t&&d.jsx("h3",{className:"text-xl font-semibold",children:t}),e&&d.jsxs("p",{children:["(",e,")"]}),n&&d.jsx("div",{className:"mt-2 space-y-1 text-base text-left",dangerouslySetInnerHTML:{__html:n}}),i&&d.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:i.map((s,o)=>d.jsx("div",{className:"flex-grow",children:d.jsx(ni,{children:d.jsx("div",{className:`text-center text-primary-800 rounded-xl p-[6px] font-[800] ${s.isSelected?"bg-white":"bg-gray-400"}`,children:s.name},o)})},o))})]}),r&&d.jsx("iframe",{className:"w-full h-[19rem] rounded-xl",src:r,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})})}function oE(){const t=[9,3,2,11,1,7,10,8,6,12,5,4],e=[{id:1,name:"Personal OpenGL Project",company:"personal",description:"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",videoURL:"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",order:{date:1,interest:0},skills:["OpenGL","C++"]},{id:2,name:"University 4th-year Project",company:"university",description:"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",videoURL:"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",order:{date:2,interest:0},skills:["WebGL","Laravel"]},{id:3,name:"University 5th-year Project",company:"university",description:"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",videoURL:"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",order:{date:3,interest:0},skills:["Three.js","Laravel"]},{id:4,name:"Other Projects / WordPress",company:"aratech",description:"Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",videoURL:"https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",order:{date:4,interest:0},skills:["WordPress"]},{id:5,name:"IDB",company:"aratech",description:"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",videoURL:"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",order:{date:5,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:6,name:"E-buy",company:"aratech",description:"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",videoURL:"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",order:{date:6,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:7,name:"Qahwah House",company:"DivCodes",description:"Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",videoURL:"https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",order:{date:7,interest:0},skills:["React","Next.js","Tailwind"]},{id:8,name:"DIVPOS",company:"DivCodes",description:"Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",videoURL:"https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",order:{date:8,interest:0},skills:["React","Next.js","Tailwind"]},{id:9,name:"Sunglasses Try On",company:"Eyes 360",description:"Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",videoURL:"https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",order:{date:9,interest:0},skills:["WebGL","Babylon.js","Svelte"]},{id:10,name:"EuNet",company:"Stark Technologies",description:"A web hosting website available in two languages. It features an AI-powered chatbot for 24/7 assistance. The site is built using React and Next.js. It includes visually appealing reusable components that present information clearly with an attractive design, along with well-designed forms for user onboarding.",videoURL:"https://www.youtube.com/embed/nzy92nlbBI4?si=UsvvuLTts9lZfaAE",order:{date:10,interest:0},skills:["React","Next.js","Tailwind"]},{id:11,name:"Patitas",company:"Personal / test application",description:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before. With the help of online tutorials and AI tools, I was able to quickly learn and implement new concepts, demonstrating my ability to adapt and learn fastly. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/repo-prueba'>HERE</a>.",videoURL:"https://www.youtube.com/embed/3_p-boncOEs?si=EeLnvLWhSDEZys61",order:{date:11,interest:0},skills:["Angular","Spring Boot","Tailwind"]},{id:12,name:"Articalization",company:"Personal / test application",description:"In this project, I built a client-side news aggregation application that gathers articles from various external sources using public APIs. Users can filter the news by date, category, search query, and source, with paginated results for easy navigation. They can also customize their experience by adding preferred sources, authors, and categories, tailoring the news feed to their personal interests. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/articalization'>HERE</a>.",videoURL:"https://www.youtube.com/embed/9V-b1aAr0dQ?si=cw-vIE_bUP9ZGdez",order:{date:12,interest:0},skills:["React","Redux","Tailwind"]}];t.forEach((i,r)=>{const s=e.find(o=>o.id===i);s&&(s.order.interest=r+1)});const n=new Set;return e.forEach(i=>{i.skills.forEach(r=>{n.add(r)})}),{projects:e,projectsSkills:n}}function dm(){const[t,e]=z.useState(!1);return d.jsx("div",{className:"relative",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:d.jsx("svg",{className:`fill-current ${t?"text-pumpkin-600":"text-pumpkin-700"}`,width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"})})})}function fm(){return d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:d.jsx("path",{d:"M4.89163 13.2687L9.16582 17.5427L18.7085 8",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const{projects:lE,projectsSkills:xr}=oE();function cE(){const[t,e]=z.useState("Most Interesting"),[n,i]=z.useState(!1),[r,s]=z.useState(new Set(xr)),o=[...lE].filter(l=>l.skills.some(u=>r.has(u))).sort((l,u)=>t==="Latest"?u.order.date-l.order.date:t==="Most Interesting"?l.order.interest-u.order.interest:t==="Oldest"?l.order.date-u.order.date:0),a=l=>{s(u=>{const f=new Set(u);return f.has(l)?f.delete(l):f.add(l),f})},c=()=>{r.size===xr.size?s(new Set):s(new Set(xr))};return d.jsxs(si,{title:"Projects",children:[d.jsxs("div",{className:"relative flex flex-wrap gap-2 mb-4",children:[d.jsxs("div",{className:"flex flex-wrap gap-2",children:[d.jsx("div",{children:d.jsx("button",{onClick:()=>e("Latest"),className:`px-4 py-2 text-white ${t==="Latest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Latest"})}),d.jsx("div",{children:d.jsx("button",{onClick:()=>e("Most Interesting"),className:`px-4 py-2 text-white ${t==="Most Interesting"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Most Interesting"})}),d.jsx("div",{children:d.jsx("button",{onClick:()=>e("Oldest"),className:`px-4 py-2 text-white ${t==="Oldest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Oldest"})}),d.jsx("button",{className:"lg:hidden",onClick:()=>i(!n),children:d.jsx(dm,{})})]}),d.jsxs("div",{className:"lg:ml-8 flex-grow justify-items-start lg:w-[30rem]",children:[d.jsx("button",{className:"hidden lg:block",onClick:()=>i(!n),children:d.jsx(dm,{})}),d.jsx("div",{className:`lg:mt-4 transition-all duration-300 ease-in-out ${n?"max-h-[5000px] opacity-100":"max-h-0 opacity-0"} overflow-hidden`,children:d.jsxs("div",{children:[d.jsxs("label",{className:"flex items-center space-x-2 text-lg font-bold mb-2 cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:r.size===xr.size,onChange:c,className:"hidden"}),d.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.size===xr.size?"bg-pumpkin":"bg-none"}`,children:r.size===xr.size&&d.jsx(fm,{})}),d.jsx("span",{children:"Select All"})]}),d.jsx("div",{className:"flex flex-wrap gap-x-8 mt-4",children:[...xr].map(l=>d.jsxs("label",{className:"w-32 flex items-center space-x-2 mb-2 cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:r.has(l),onChange:()=>a(l),className:"hidden"}),d.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.has(l)?"bg-pumpkin":"bg-none"}`,children:r.has(l)&&d.jsx(fm,{})}),d.jsx("span",{children:l})]},l))})]})})]})]}),d.jsx("div",{className:"grid lg:grid-cols-2 gap-x-4 gap-y-8 sm:gap-8",children:o.map((l,u)=>d.jsx(Zv,{name:l.name,company:l.company,description:l.description,skills:l.skills.map(f=>({name:f,isSelected:r.has(f)})),videoURL:l.videoURL},u))})]})}const uE=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(cE,{})})});function ac({children:t}){const[e,n]=ho({threshold:.1});return d.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-bottom":"opacity-0"}`,children:t})}function dE({children:t,isOpen:e,close:n}){return e?d.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50",onClick:n,children:d.jsxs("div",{className:"bg-secondary-500 p-8 rounded-2xl relative",onClick:i=>{i.stopPropagation()},children:[d.jsx("button",{onClick:n,className:"absolute top-2 right-2 text-2xl font-bold text-pumpkin-500 hover:text-pumpkin-600",children:"✕"}),t]})}):null}function Mt({src:t,title:e,description:n}){const[i,r]=z.useState(!1),s=()=>{r(!0)},o=()=>{r(!1)};return d.jsxs(d.Fragment,{children:[d.jsx(dE,{isOpen:i,close:o,children:d.jsxs("div",{className:"w-[48rem] h-[30rem] flex flex-col justify-between items-center",children:[d.jsx("a",{className:"text-pumpkin-500 hover:text-pumpkin-600 text-lg underline",href:t,target:"_blank",children:"full-size image"}),d.jsx(sc,{className:"max-w-full h-[95%] max-h-[95%] object-contain",src:t,alt:e})]})}),d.jsx("div",{className:"cursor-pointer w-52",onClick:s,children:d.jsx(ac,{children:d.jsxs(en,{children:[d.jsx("div",{className:"font-bold text-base",children:e}),d.jsx("div",{children:n}),d.jsx(sc,{className:"w-full h-56 object-cover mt-4 rounded-lg",src:t,alt:e})]})})})]})}function fE(){const{theme:t}=Yr();return d.jsxs(si,{glow:!1,title:"Certificates",children:[d.jsx(ni,{children:d.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mb-16`,children:d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-semibold mb-6",children:"International Collegiate Programming Contest Certificates"}),d.jsxs("div",{className:"flex flex-col gap-12",children:[d.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between gap-12",children:[d.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[d.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2018 International Collegiate Programming Contest"}),d.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:hE})]}),d.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[d.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2019 International Collegiate Programming Contest"}),d.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:pE})]})]}),d.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[d.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2020 Africa and Arab Collegiate Programming Contest for GIRLS"}),d.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:pm}),d.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:pm})]}),d.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[d.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2021 International Collegiate Programming Contest"}),d.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4",children:mm}),d.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:mm})]})]})]})})}),d.jsx(ni,{children:d.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Al-Basel Certificates for Academic Excellence"}),d.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4",children:hm}),d.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:hm})]})})})]})}const hm=d.jsxs(d.Fragment,{children:[d.jsx(Mt,{src:"certificates/Al-Basel Certificate - 1st year.jpg",title:"2017 / 2018"}),d.jsx(Mt,{src:"certificates/Al-Basel Certificate - 2nd year.jpg",title:"2018 / 2019"}),d.jsx(Mt,{src:"certificates/Al-Basel Certificate - 3rd year.jpg",title:"2019 / 2020"}),d.jsx(Mt,{src:"certificates/Al-Basel Certificate - 4th year.jpg",title:"2020 / 2021"}),d.jsx(Mt,{src:"certificates/Al-Basel Certificate - 5th year.jpg",title:"2021 / 2022"})]}),hE=d.jsxs(d.Fragment,{children:[d.jsx(Mt,{src:"certificates/ICPC 2018 - TCPC - Fifty Eighth Place.jpg",title:"Tishreen University"}),d.jsx(Mt,{src:"certificates/ICPC 2018 - SCPC - Sixteenth Place.jpg",title:"SCPC: Syrian"})]}),pE=d.jsxs(d.Fragment,{children:[d.jsx(Mt,{src:"certificates/ICPC 2019 - TCPC - Eighteenth Place.jpg",title:"Tishreen University"}),d.jsx(Mt,{src:"certificates/ICPC 2019 - SCPC - Eighth Place.jpg",title:"SCPC: Syrian"})]}),pm=d.jsxs(d.Fragment,{children:[d.jsx(Mt,{src:"certificates/GirlsACPC 2020 - Fourth Place.jpg",title:"Fourth Place"}),d.jsx(Mt,{src:"certificates/GirlsACPC 2020 - Extreme Programmers.jpg",title:"Extreme Programmers"}),d.jsx(Mt,{src:"certificates/GirlsACPC 2020 - Solid Programmers.jpg",title:"Solid Programmers"}),d.jsx(Mt,{src:"certificates/GirlsACPC 2020 - Steadfast Gurus.jpg",title:"Steadfast Gurus"}),d.jsx(Mt,{src:"certificates/GirlsACPC 2020 - First to solve problem A.jpg",title:"First to solve problem A"})]}),mm=d.jsxs(d.Fragment,{children:[d.jsx(Mt,{src:"certificates/ICPC 2021 - TCPC - Fourth Place.jpg",title:"Tishreen University"}),d.jsx(Mt,{src:"certificates/ICPC 2021 - SCPC - Seventh Place.jpg",title:"SCPC: Syrian"}),d.jsx(Mt,{src:"certificates/ICPC 2021 - ACPC - Fifty Seventh Place.jpg",title:"ACPC: Arabic"})]}),mE=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(fE,{})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="168",gE=0,gm=1,vE=2,Jv=1,xE=2,hi=3,lr=0,sn=1,gi=2,rr=0,Fs=1,vm=2,xm=3,_m=4,_E=5,Pr=100,yE=101,SE=102,EE=103,ME=104,wE=200,TE=201,CE=202,bE=203,zd=204,Bd=205,AE=206,RE=207,PE=208,NE=209,LE=210,DE=211,IE=212,UE=213,FE=214,OE=0,kE=1,zE=2,oc=3,BE=4,jE=5,HE=6,VE=7,ex=0,GE=1,WE=2,sr=0,XE=1,$E=2,qE=3,YE=4,KE=5,QE=6,ZE=7,tx=300,Xs=301,$s=302,jd=303,Hd=304,Lc=306,Vd=1e3,Ur=1001,Gd=1002,wn=1003,JE=1004,jo=1005,Fn=1006,mu=1007,Fr=1008,Ai=1009,nx=1010,ix=1011,to=1012,Rh=1013,Wr=1014,_i=1015,po=1016,Ph=1017,Nh=1018,qs=1020,rx=35902,sx=1021,ax=1022,On=1023,ox=1024,lx=1025,Os=1026,Ys=1027,cx=1028,Lh=1029,ux=1030,Dh=1031,Ih=1033,Tl=33776,Cl=33777,bl=33778,Al=33779,Wd=35840,Xd=35841,$d=35842,qd=35843,Yd=36196,Kd=37492,Qd=37496,Zd=37808,Jd=37809,ef=37810,tf=37811,nf=37812,rf=37813,sf=37814,af=37815,of=37816,lf=37817,cf=37818,uf=37819,df=37820,ff=37821,Rl=36492,hf=36494,pf=36495,dx=36283,mf=36284,gf=36285,vf=36286,eM=3200,tM=3201,fx=0,nM=1,Wi="",Wn="srgb",pr="srgb-linear",Uh="display-p3",Dc="display-p3-linear",lc="linear",rt="srgb",cc="rec709",uc="p3",Jr=7680,ym=519,iM=512,rM=513,sM=514,hx=515,aM=516,oM=517,lM=518,cM=519,Sm=35044,Em="300 es",yi=2e3,dc=2001;class na{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,xf=180/Math.PI;function mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function uM(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],y=r[0],g=r[3],p=r[6],v=r[1],_=r[4],S=r[7],A=r[2],C=r[5],b=r[8];return s[0]=o*y+a*v+c*A,s[3]=o*g+a*_+c*C,s[6]=o*p+a*S+c*b,s[1]=l*y+u*v+f*A,s[4]=l*g+u*_+f*C,s[7]=l*p+u*S+f*b,s[2]=h*y+m*v+x*A,s[5]=h*g+m*_+x*C,s[8]=h*p+m*S+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(xu.makeScale(e,n)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new ke;function px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function no(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dM(){const t=no("canvas");return t.style.display="block",t}const Mm={};function Ua(t){t in Mm||(Mm[t]=!0,console.warn(t))}function fM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const wm=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[pr]:{transfer:lc,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:rt,primaries:cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Dc]:{transfer:lc,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Tm),fromReference:t=>t.applyMatrix3(wm)},[Uh]:{transfer:rt,primaries:uc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Tm),fromReference:t=>t.applyMatrix3(wm).convertLinearToSRGB()}},hM=new Set([pr,Dc]),Je={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=pa[e].toReference,r=pa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return pa[t].primaries},getTransfer:function(t){return t===Wi?lc:pa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(pa[e].luminanceCoefficients)}};function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class pM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=no("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=no("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mM=0;class mx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yu(r[o].image)):s.push(yu(r[o]))}else s=yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class $t extends na{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Ur,r=Ur,s=Fn,o=Fr,a=On,c=Ai,l=$t.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=mo(),this.name="",this.source=new mx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=tx;$t.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],x=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,S=(m+1)/2,A=(p+1)/2,C=(u+h)/4,b=(f+y)/4,N=(x+g)/4;return _>S&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=b/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(f-y)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends na{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends vM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gx extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(f!==y||c!==h||l!==m||u!==x){let g=1-a;const p=c*h+l*m+u*x+f*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,p*v);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}const S=a*v;if(c=c*g+h*S,l=l*g+m*S,u=u*g+x*S,f=f*g+y*S,g===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*f+c*m-l*h,e[n+1]=c*x+u*h+l*f-a*m,e[n+2]=l*x+u*m+a*h-c*f,e[n+3]=u*x-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new X,Cm=new go;class vo{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Vo.subVectors(this.max,ma),ts.subVectors(e.a,ma),ns.subVectors(e.b,ma),is.subVectors(e.c,ma),Ii.subVectors(ns,ts),Ui.subVectors(is,ns),_r.subVectors(ts,is);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-_r.z,_r.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,_r.z,0,-_r.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-_r.y,_r.x,0];return!Eu(n,ts,ns,is,Vo)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,ts,ns,is,Vo))?!1:(Go.crossVectors(Ii,Ui),n=[Go.x,Go.y,Go.z],Eu(n,ts,ns,is,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new X,new X,new X,new X,new X,new X,new X,new X],Pn=new X,Ho=new vo,ts=new X,ns=new X,is=new X,Ii=new X,Ui=new X,_r=new X,ma=new X,Vo=new X,Go=new X,yr=new X;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),l=n.dot(yr),u=i.dot(yr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _M=new vo,ga=new X,Mu=new X;let Fh=class{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Mu)),this.expandByPoint(ga.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const li=new X,wu=new X,Wo=new X,Fi=new X,Tu=new X,Xo=new X,Cu=new X;class yM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Wo),a=Fi.dot(this.direction),c=-Fi.dot(Wo),l=Fi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,x;if(u>0)if(f=o*c-a,h=o*a-c,x=s*u,f>=0)if(h>=-x)if(h<=x){const y=1/u;f*=y,h*=y,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wu).addScaledVector(Wo,h),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){Tu.subVectors(n,e),Xo.subVectors(i,e),Cu.crossVectors(Tu,Xo);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const c=a*this.direction.dot(Xo.crossVectors(Fi,Xo));if(c<0)return null;const l=a*this.direction.dot(Tu.cross(Fi));if(l<0||c+l>o)return null;const u=-a*Fi.dot(Cu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,c,l,u,f,h,m,x,y,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,u,f,h,m,x,y,g)}set(e,n,i,r,s,o,a,c,l,u,f,h,m,x,y,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,x=a*u,y=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=m+x*l,n[5]=h-y*l,n[9]=-a*c,n[2]=y-h*l,n[6]=x+m*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,x=l*u,y=l*f;n[0]=h+y*a,n[4]=x*a-m,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,x=l*u,y=l*f;n[0]=h-y*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,x=a*u,y=a*f;n[0]=c*u,n[4]=x*l-m,n[8]=h*l+y,n[1]=c*f,n[5]=y*l+h,n[9]=m*l-x,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,x=a*c,y=a*l;n[0]=c*u,n[4]=y-h*f,n[8]=x*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=m*f+x,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*c,m=o*l,x=a*c,y=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+y,n[5]=o*u,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SM,e,EM)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Oi.crossVectors(i,ln),Oi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Oi.crossVectors(i,ln)),Oi.normalize(),$o.crossVectors(ln,Oi),r[0]=Oi.x,r[4]=$o.x,r[8]=ln.x,r[1]=Oi.y,r[5]=$o.y,r[9]=ln.y,r[2]=Oi.z,r[6]=$o.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],y=i[6],g=i[10],p=i[14],v=i[3],_=i[7],S=i[11],A=i[15],C=r[0],b=r[4],N=r[8],w=r[12],E=r[1],R=r[5],B=r[9],k=r[13],q=r[2],Y=r[6],V=r[10],Z=r[14],I=r[3],H=r[7],j=r[11],Q=r[15];return s[0]=o*C+a*E+c*q+l*I,s[4]=o*b+a*R+c*Y+l*H,s[8]=o*N+a*B+c*V+l*j,s[12]=o*w+a*k+c*Z+l*Q,s[1]=u*C+f*E+h*q+m*I,s[5]=u*b+f*R+h*Y+m*H,s[9]=u*N+f*B+h*V+m*j,s[13]=u*w+f*k+h*Z+m*Q,s[2]=x*C+y*E+g*q+p*I,s[6]=x*b+y*R+g*Y+p*H,s[10]=x*N+y*B+g*V+p*j,s[14]=x*w+y*k+g*Z+p*Q,s[3]=v*C+_*E+S*q+A*I,s[7]=v*b+_*R+S*Y+A*H,s[11]=v*N+_*B+S*V+A*j,s[15]=v*w+_*k+S*Z+A*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],y=e[7],g=e[11],p=e[15];return x*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+n*c*m-n*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+g*(+n*l*f-n*a*m-s*o*f+i*o*m+s*a*u-i*l*u)+p*(-r*a*u-n*c*f+n*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],y=e[13],g=e[14],p=e[15],v=f*g*l-y*h*l+y*c*m-a*g*m-f*c*p+a*h*p,_=x*h*l-u*g*l-x*c*m+o*g*m+u*c*p-o*h*p,S=u*y*l-x*f*l+x*a*m-o*y*m-u*a*p+o*f*p,A=x*f*c-u*y*c-x*a*h+o*y*h+u*a*g-o*f*g,C=n*v+i*_+r*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(y*h*s-f*g*s-y*r*m+i*g*m+f*r*p-i*h*p)*b,e[2]=(a*g*s-y*c*s+y*r*l-i*g*l-a*r*p+i*c*p)*b,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*m-i*c*m)*b,e[4]=_*b,e[5]=(u*g*s-x*h*s+x*r*m-n*g*m-u*r*p+n*h*p)*b,e[6]=(x*c*s-o*g*s-x*r*l+n*g*l+o*r*p-n*c*p)*b,e[7]=(o*h*s-u*c*s+u*r*l-n*h*l-o*r*m+n*c*m)*b,e[8]=S*b,e[9]=(x*f*s-u*y*s-x*i*m+n*y*m+u*i*p-n*f*p)*b,e[10]=(o*y*s-x*a*s+x*i*l-n*y*l-o*i*p+n*a*p)*b,e[11]=(u*a*s-o*f*s-u*i*l+n*f*l+o*i*m-n*a*m)*b,e[12]=A*b,e[13]=(u*y*r-x*f*r+x*i*h-n*y*h-u*i*g+n*f*g)*b,e[14]=(x*a*r-o*y*r-x*i*c+n*y*c+o*i*g-n*a*g)*b,e[15]=(o*f*r-u*a*r+u*i*c-n*f*c-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,x=s*f,y=o*u,g=o*f,p=a*f,v=c*l,_=c*u,S=c*f,A=i.x,C=i.y,b=i.z;return r[0]=(1-(y+p))*A,r[1]=(m+S)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+p))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(x+_)*b,r[9]=(g-v)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const l=1/s,u=1/o,f=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===yi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===dc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const c=this.elements,l=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*l,m=(i+r)*u;let x,y;if(a===yi)x=(o+s)*f,y=-2*f;else if(a===dc)x=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new X,Nn=new vt,SM=new X(0,0,0),EM=new X(1,1,1),Oi=new X,$o=new X,ln=new X,bm=new vt,Am=new go;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const Rm=new X,ss=new go,ci=new vt,qo=new X,va=new X,wM=new X,TM=new go,Pm=new X(1,0,0),Nm=new X(0,1,0),Lm=new X(0,0,1),Dm={type:"added"},CM={type:"removed"},as={type:"childadded",child:null},bu={type:"childremoved",child:null};class Ht extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new X,n=new ii,i=new go,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,n){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qo.copy(e):qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(va,qo,this.up):ci.lookAt(qo,va,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(ci),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CM),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new X(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,ui=new X,Au=new X,di=new X,os=new X,ls=new X,Im=new X,Ru=new X,Pu=new X,Nu=new X;class qn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ui.subVectors(i,n),Au.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ui),c=Ln.dot(Au),l=ui.dot(ui),u=ui.dot(Au),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-a*u)*h,x=(o*u-a*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ui.subVectors(e,n),Ln.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),ls.subVectors(s,i),Ru.subVectors(e,i);const c=os.dot(Ru),l=ls.dot(Ru);if(c<=0&&l<=0)return n.copy(i);Pu.subVectors(e,r);const u=os.dot(Pu),f=ls.dot(Pu);if(u>=0&&f<=u)return n.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(os,o);Nu.subVectors(e,s);const m=os.dot(Nu),x=ls.dot(Nu);if(x>=0&&m<=x)return n.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),n.copy(i).addScaledVector(ls,a);const g=u*x-m*f;if(g<=0&&f-u>=0&&m-x>=0)return Im.subVectors(s,r),a=(f-u)/(f-u+(m-x)),n.copy(r).addScaledVector(Im,a);const p=1/(g+y+h);return o=y*p,a=h*p,n.copy(i).addScaledVector(os,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=uM(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=xx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=_u(e.r),this.g=_u(e.g),this.b=_u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Zt(zt.r*255,0,255))*65536+Math.round(Zt(zt.g*255,0,255))*256+Math.round(Zt(zt.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wn){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Yo);const i=vu(ki.h,Yo.h,n),r=vu(ki.s,Yo.s,n),s=vu(ki.l,Yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=xx;let bM=0;class xo extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _x extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new X,Ko=new Xe;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ua("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ko.fromBufferAttribute(this,n),Ko.applyMatrix3(e),this.setXY(n,Ko.x,Ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}}class yx extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sx extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ei extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let AM=0;const _n=new vt,Du=new Ht,cs=new X,cn=new vo,xa=new vo,At=new X;class mr extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?Sx:yx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xa.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(cn.min,xa.min),cn.expandByPoint(At),At.addVectors(cn.max,xa.max),cn.expandByPoint(At)):(cn.expandByPoint(xa.min),cn.expandByPoint(xa.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),At.add(cs)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new X,c[N]=new X;const l=new X,u=new X,f=new X,h=new Xe,m=new Xe,x=new Xe,y=new X,g=new X;function p(N,w,E){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,E),u.sub(l),f.sub(l),m.sub(h),x.sub(h);const R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(R),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(R),a[N].add(y),a[w].add(y),a[E].add(y),c[N].add(g),c[w].add(g),c[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,w=v.length;N<w;++N){const E=v[N],R=E.start,B=E.count;for(let k=R,q=R+B;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new X,S=new X,A=new X,C=new X;function b(N){A.fromBufferAttribute(r,N),C.copy(A);const w=a[N];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(C,w);const R=S.dot(c[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,R)}for(let N=0,w=v.length;N<w;++N){const E=v[N],R=E.start,B=E.count;for(let k=R,q=R+B;k<q;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,u=new X,f=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let p=0;p<u;p++)h[x++]=l[m++]}return new Jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mr,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new vt,Sr=new yM,Qo=new Fh,Fm=new X,us=new X,ds=new X,fs=new X,Iu=new X,Zo=new X,Jo=new Xe,el=new Xe,tl=new Xe,Om=new X,km=new X,zm=new X,nl=new X,il=new X;class Yn extends Ht{constructor(e=new mr,n=new _x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Iu.fromBufferAttribute(f,e),o?Zo.addScaledVector(Iu,u):Zo.addScaledVector(Iu.sub(n),u))}n.add(Zo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Qo.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Qo,Fm)===null||Sr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){const C=a.getX(S),b=a.getX(S+1),N=a.getX(S+2);r=rl(this,p,e,i,l,u,f,C,b,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);r=rl(this,o,e,i,l,u,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){const C=S,b=S+1,N=S+2;r=rl(this,p,e,i,l,u,f,C,b,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const v=g,_=g+1,S=g+2;r=rl(this,o,e,i,l,u,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function RM(t,e,n,i,r,s,o,a){let c;if(e.side===sn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===lr,a),c===null)return null;il.copy(a),il.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(il);return l<n.near||l>n.far?null:{distance:l,point:il.clone(),object:t}}function rl(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,us),t.getVertexPosition(c,ds),t.getVertexPosition(l,fs);const u=RM(t,e,n,i,us,ds,fs,nl);if(u){r&&(Jo.fromBufferAttribute(r,a),el.fromBufferAttribute(r,c),tl.fromBufferAttribute(r,l),u.uv=qn.getInterpolation(nl,us,ds,fs,Jo,el,tl,new Xe)),s&&(Jo.fromBufferAttribute(s,a),el.fromBufferAttribute(s,c),tl.fromBufferAttribute(s,l),u.uv1=qn.getInterpolation(nl,us,ds,fs,Jo,el,tl,new Xe)),o&&(Om.fromBufferAttribute(o,a),km.fromBufferAttribute(o,c),zm.fromBufferAttribute(o,l),u.normal=qn.getInterpolation(nl,us,ds,fs,Om,km,zm,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};qn.getNormal(us,ds,fs,f.normal),u.face=f}return u}class _o extends mr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ei(l,3)),this.setAttribute("normal",new ei(u,3)),this.setAttribute("uv",new ei(f,2));function x(y,g,p,v,_,S,A,C,b,N,w){const E=S/b,R=A/N,B=S/2,k=A/2,q=C/2,Y=b+1,V=N+1;let Z=0,I=0;const H=new X;for(let j=0;j<V;j++){const Q=j*R-k;for(let se=0;se<Y;se++){const De=se*E-B;H[y]=De*v,H[g]=Q*_,H[p]=q,l.push(H.x,H.y,H.z),H[y]=0,H[g]=0,H[p]=C>0?1:-1,u.push(H.x,H.y,H.z),f.push(se/b),f.push(1-j/N),Z+=1}}for(let j=0;j<N;j++)for(let Q=0;Q<b;Q++){const se=h+Q+Y*j,De=h+Q+Y*(j+1),P=h+(Q+1)+Y*(j+1),ae=h+(Q+1)+Y*j;c.push(se,De,ae),c.push(De,P,ae),I+=6}a.addGroup(m,I,w),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function PM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ex(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const NM={clone:Ks,merge:Gt};var LM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=PM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mx extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new X,Bm=new Xe,jm=new Xe;class En extends Mx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Bm,jm),n.subVectors(jm,Bm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class IM extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new En(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new En(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new En(hs,ps,e,n);a.layers=this.layers,this.add(a);const c=new En(hs,ps,e,n);c.layers=this.layers,this.add(c);const l=new En(hs,ps,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class wx extends $t{constructor(e,n,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UM extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _o(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:rr});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Fn),new IM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uu=new X,FM=new X,OM=new ke;class Ar{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uu.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OM.getNormalMatrix(e),r=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Fh,sl=new X;class Oh{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],h=r[7],m=r[8],x=r[9],y=r[10],g=r[11],p=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-s,h-l,g-m,S-p).normalize(),i[1].setComponents(c+s,h+l,g+m,S+p).normalize(),i[2].setComponents(c+o,h+u,g+x,S+v).normalize(),i[3].setComponents(c-o,h-u,g-x,S-v).normalize(),i[4].setComponents(c-a,h-f,g-y,S-_).normalize(),n===yi)i[5].setComponents(c+a,h+f,g+y,S+_).normalize();else if(n===dc)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(sl.x=r.normal.x>0?e.max.x:e.min.x,sl.y=r.normal.y>0?e.max.y:e.min.y,sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kM(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=t.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=t.SHORT;else if(l instanceof Uint32Array)m=t.UNSIGNED_INT;else if(l instanceof Int32Array)m=t.INT;else if(l instanceof Int8Array)m=t.BYTE;else if(l instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c._updateRange,h=c.updateRanges;if(t.bindBuffer(l,a),f.count===-1&&h.length===0&&t.bufferSubData(l,0,u),h.length!==0){for(let m=0,x=h.length;m<x;m++){const y=h[m];t.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ic extends mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=n/c,m=[],x=[],y=[],g=[];for(let p=0;p<u;p++){const v=p*h-o;for(let _=0;_<l;_++){const S=_*f-s;x.push(S,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+l*p,S=v+l*(p+1),A=v+1+l*(p+1),C=v+1+l*p;m.push(_,S,C),m.push(S,A,C)}this.setIndex(m),this.setAttribute("position",new ei(x,3)),this.setAttribute("normal",new ei(y,3)),this.setAttribute("uv",new ei(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
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
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,JM=`#ifdef USE_BUMPMAP
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
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lw=`#define PI 3.141592653589793
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
} // validated`,cw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uw=`vec3 transformedNormal = objectNormal;
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
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",gw=`
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
}`,vw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Ew=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ww=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
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
}`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pw=`uniform bool receiveShadow;
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
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fw=`PhysicalMaterial material;
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
#endif`,Ow=`struct PhysicalMaterial {
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
}`,kw=`
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
#endif`,zw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qw=`#if defined( USE_POINTS_UV )
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
#endif`,Yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`#ifdef USE_MORPHTARGETS
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
#endif`,t2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o2=`#ifdef USE_NORMALMAP
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
#endif`,l2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M2=`float getShadowMask() {
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
}`,w2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T2=`#ifdef USE_SKINNING
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
#endif`,C2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b2=`#ifdef USE_SKINNING
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
#endif`,A2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L2=`#ifdef USE_TRANSMISSION
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
#endif`,D2=`#ifdef USE_TRANSMISSION
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z2=`uniform sampler2D t2D;
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`#include <common>
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
}`,W2=`#if DEPTH_PACKING == 3200
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
}`,X2=`#define DISTANCE
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
}`,$2=`#define DISTANCE
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
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`uniform float scale;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,J2=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,dT=`#define TOON
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
}`,fT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,vT=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:zM,alphahash_pars_fragment:BM,alphamap_fragment:jM,alphamap_pars_fragment:HM,alphatest_fragment:VM,alphatest_pars_fragment:GM,aomap_fragment:WM,aomap_pars_fragment:XM,batching_pars_vertex:$M,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:ZM,bumpmap_pars_fragment:JM,clipping_planes_fragment:ew,clipping_planes_pars_fragment:tw,clipping_planes_pars_vertex:nw,clipping_planes_vertex:iw,color_fragment:rw,color_pars_fragment:sw,color_pars_vertex:aw,color_vertex:ow,common:lw,cube_uv_reflection_fragment:cw,defaultnormal_vertex:uw,displacementmap_pars_vertex:dw,displacementmap_vertex:fw,emissivemap_fragment:hw,emissivemap_pars_fragment:pw,colorspace_fragment:mw,colorspace_pars_fragment:gw,envmap_fragment:vw,envmap_common_pars_fragment:xw,envmap_pars_fragment:_w,envmap_pars_vertex:yw,envmap_physical_pars_fragment:Nw,envmap_vertex:Sw,fog_vertex:Ew,fog_pars_vertex:Mw,fog_fragment:ww,fog_pars_fragment:Tw,gradientmap_pars_fragment:Cw,lightmap_pars_fragment:bw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:Rw,lights_pars_begin:Pw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Dw,lights_phong_fragment:Iw,lights_phong_pars_fragment:Uw,lights_physical_fragment:Fw,lights_physical_pars_fragment:Ow,lights_fragment_begin:kw,lights_fragment_maps:zw,lights_fragment_end:Bw,logdepthbuf_fragment:jw,logdepthbuf_pars_fragment:Hw,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:Gw,map_fragment:Ww,map_pars_fragment:Xw,map_particle_fragment:$w,map_particle_pars_fragment:qw,metalnessmap_fragment:Yw,metalnessmap_pars_fragment:Kw,morphinstance_vertex:Qw,morphcolor_vertex:Zw,morphnormal_vertex:Jw,morphtarget_pars_vertex:e2,morphtarget_vertex:t2,normal_fragment_begin:n2,normal_fragment_maps:i2,normal_pars_fragment:r2,normal_pars_vertex:s2,normal_vertex:a2,normalmap_pars_fragment:o2,clearcoat_normal_fragment_begin:l2,clearcoat_normal_fragment_maps:c2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:d2,opaque_fragment:f2,packing:h2,premultiplied_alpha_fragment:p2,project_vertex:m2,dithering_fragment:g2,dithering_pars_fragment:v2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:y2,shadowmap_pars_vertex:S2,shadowmap_vertex:E2,shadowmask_pars_fragment:M2,skinbase_vertex:w2,skinning_pars_vertex:T2,skinning_vertex:C2,skinnormal_vertex:b2,specularmap_fragment:A2,specularmap_pars_fragment:R2,tonemapping_fragment:P2,tonemapping_pars_fragment:N2,transmission_fragment:L2,transmission_pars_fragment:D2,uv_pars_fragment:I2,uv_pars_vertex:U2,uv_vertex:F2,worldpos_vertex:O2,background_vert:k2,background_frag:z2,backgroundCube_vert:B2,backgroundCube_frag:j2,cube_vert:H2,cube_frag:V2,depth_vert:G2,depth_frag:W2,distanceRGBA_vert:X2,distanceRGBA_frag:$2,equirect_vert:q2,equirect_frag:Y2,linedashed_vert:K2,linedashed_frag:Q2,meshbasic_vert:Z2,meshbasic_frag:J2,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:rT,meshnormal_frag:sT,meshphong_vert:aT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:dT,points_vert:fT,points_frag:hT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:vT},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Xn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const al={r:0,b:0,g:0},Mr=new ii,xT=new vt;function _T(t,e,n,i,r,s,o){const a=new qe(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=x(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===Lc)?(u===void 0&&(u=new Yn(new _o(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Ks(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mr.copy(_.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Mr)),u.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(f!==S||h!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Yn(new Ic(2,2),new cr({name:"BackgroundMaterial",uniforms:Ks(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(al,Ex(t)),i.buffers.color.setClear(al.r,al.g,al.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:g}}function yT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,R,B,k,q){let Y=!1;const V=f(k,B,R);s!==V&&(s=V,l(s.object)),Y=m(E,k,B,q),Y&&x(E,k,B,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(E,R,B,k),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function l(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,R,B){const k=B.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let Y=q[R.id];Y===void 0&&(Y={},q[R.id]=Y);let V=Y[k];return V===void 0&&(V=h(c()),Y[k]=V),V}function h(E){const R=[],B=[],k=[];for(let q=0;q<n;q++)R[q]=0,B[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:k,object:E,attributes:{},index:null}}function m(E,R,B,k){const q=s.attributes,Y=R.attributes;let V=0;const Z=B.getAttributes();for(const I in Z)if(Z[I].location>=0){const j=q[I];let Q=Y[I];if(Q===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function x(E,R,B,k){const q={},Y=R.attributes;let V=0;const Z=B.getAttributes();for(const I in Z)if(Z[I].location>=0){let j=Y[I];j===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(j=E.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),q[I]=Q,V++}s.attributes=q,s.attributesNum=V,s.index=k}function y(){const E=s.newAttributes;for(let R=0,B=E.length;R<B;R++)E[R]=0}function g(E){p(E,0)}function p(E,R){const B=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;B[E]=1,k[E]===0&&(t.enableVertexAttribArray(E),k[E]=1),q[E]!==R&&(t.vertexAttribDivisor(E,R),q[E]=R)}function v(){const E=s.newAttributes,R=s.enabledAttributes;for(let B=0,k=R.length;B<k;B++)R[B]!==E[B]&&(t.disableVertexAttribArray(B),R[B]=0)}function _(E,R,B,k,q,Y,V){V===!0?t.vertexAttribIPointer(E,R,B,q,Y):t.vertexAttribPointer(E,R,B,k,q,Y)}function S(E,R,B,k){y();const q=k.attributes,Y=B.getAttributes(),V=R.defaultAttributeValues;for(const Z in Y){const I=Y[Z];if(I.location>=0){let H=q[Z];if(H===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(H=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(H=E.instanceColor)),H!==void 0){const j=H.normalized,Q=H.itemSize,se=e.get(H);if(se===void 0)continue;const De=se.buffer,P=se.type,ae=se.bytesPerElement,K=P===t.INT||P===t.UNSIGNED_INT||H.gpuType===Rh;if(H.isInterleavedBufferAttribute){const re=H.data,xe=re.stride,Me=H.offset;if(re.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)p(I.location+ye,re.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<I.locationSize;ye++)g(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ye=0;ye<I.locationSize;ye++)_(I.location+ye,Q/I.locationSize,P,j,xe*ae,(Me+Q/I.locationSize*ye)*ae,K)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<I.locationSize;re++)p(I.location+re,H.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<I.locationSize;re++)g(I.location+re);t.bindBuffer(t.ARRAY_BUFFER,De);for(let re=0;re<I.locationSize;re++)_(I.location+re,Q/I.locationSize,P,j,Q*ae,Q/I.locationSize*re*ae,K)}}else if(V!==void 0){const j=V[Z];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(I.location,j);break;case 3:t.vertexAttrib3fv(I.location,j);break;case 4:t.vertexAttrib4fv(I.location,j);break;default:t.vertexAttrib1fv(I.location,j)}}}}v()}function A(){N();for(const E in i){const R=i[E];for(const B in R){const k=R[B];for(const q in k)u(k[q].object),delete k[q];delete R[B]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const B in R){const k=R[B];for(const q in k)u(k[q].object),delete k[q];delete R[B]}delete i[E.id]}function b(E){for(const R in i){const B=i[R];if(B[E.id]===void 0)continue;const k=B[E.id];for(const q in k)u(k[q].object),delete k[q];delete B[E.id]}}function N(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function ST(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x];n.update(m,i,1)}function c(l,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)o(l[x],u[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];for(let y=0;y<h.length;y++)n.update(x,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ET(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==On&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ai&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!b)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function MT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):l();else{const v=s?0:i,_=v*4;let S=p.clippingState||null;c.value=S,S=u(x,h,_,m);for(let A=0;A!==_;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,x!==!0||g===null){const p=m+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,S=m;_!==y;++_,S+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function wT(t){let e=new WeakMap;function n(o,a){return a===jd?o.mapping=Xs:a===Hd&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jd||a===Hd)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new UM(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cx extends Mx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Hm=[.125,.215,.35,.446,.526,.582],Nr=20,Fu=new Cx,Vm=new qe;let Ou=null,ku=0,zu=0,Bu=!1;const Rr=(1+Math.sqrt(5))/2,ms=1/Rr,Gm=[new X(-Rr,ms,0),new X(Rr,ms,0),new X(-ms,0,Rr),new X(ms,0,Rr),new X(0,Rr,-ms),new X(0,Rr,ms),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,ku,zu),this._renderer.xr.enabled=Bu,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:po,format:On,colorSpace:pr,depthBuffer:!1},r=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(s)),this._blurMaterial=CT(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Vm),u.toneMapping=sr,u.autoClear=!1;const m=new _x({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new Yn(new _o,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(Vm),y=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;ol(r,v*_,p>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ol(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gm[(r-s-1)%Gm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),y=s/x,g=isFinite(s)?1+Math.floor(u*y):Nr;g>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const p=[];let v=0;for(let b=0;b<Nr;++b){const N=b/y,w=Math.exp(-N*N/2);p.push(w),b===0?v+=w:b<g&&(v+=2*w)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const S=this._sizeLods[r],A=3*S*(r>_-As?r-_+As:0),C=4*(this._cubeSize-S);ol(n,A,C,3*S,2*S),c.setRenderTarget(n),c.render(f,Fu)}}function TT(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+Hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-As?c=Hm[o-t+As-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,y=3,g=2,p=1,v=new Float32Array(y*x*m),_=new Float32Array(g*x*m),S=new Float32Array(p*x*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,N=C>2?0:-1,w=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];v.set(w,y*x*C),_.set(h,g*x*C);const E=[C,C,C,C,C,C];S.set(E,p*x*C)}const A=new mr;A.setAttribute("position",new Jn(v,y)),A.setAttribute("uv",new Jn(_,g)),A.setAttribute("faceIndex",new Jn(S,p)),e.push(A),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xm(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CT(t,e,n){const i=new Float32Array(Nr),r=new X(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $m(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function qm(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function bT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===jd||c===Hd,u=c===Xs||c===$s;if(l||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Wm(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Wm(t)),f=l?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const y=m[x];for(let g=0,p=y.length;g<p;g++)e.update(y[g],t.ARRAY_BUFFER)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let _=0,S=v.length;_<S;_+=3){const A=v[_+0],C=v[_+1],b=v[_+2];h.push(A,C,C,b,b,A)}}else if(x!==void 0){const v=x.array;y=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const A=_+0,C=_+1,b=_+2;h.push(A,C,C,b,b,A)}}else return;const g=new(px(h)?Sx:yx)(h,1);g.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function PT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function l(h,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,h*o,x),n.update(m,i,x))}function u(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let g=0;for(let p=0;p<x;p++)g+=m[p];n.update(g,i,1)}function f(h,m,x,y){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,x);let p=0;for(let v=0;v<x;v++)p+=m[v];for(let v=0;v<y.length;v++)n.update(p,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function NT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LT(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*f),N=new gx(b,A,C,f);N.type=_i,N.needsUpdate=!0;const w=S*4;for(let R=0;R<f;R++){const B=p[R],k=v[R],q=_[R],Y=A*C*4*R;for(let V=0;V<B.count;V++){const Z=V*w;x===!0&&(r.fromBufferAttribute(B,V),b[Y+Z+0]=r.x,b[Y+Z+1]=r.y,b[Y+Z+2]=r.z,b[Y+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,V),b[Y+Z+4]=r.x,b[Y+Z+5]=r.y,b[Y+Z+6]=r.z,b[Y+Z+7]=0),g===!0&&(r.fromBufferAttribute(q,V),b[Y+Z+8]=r.x,b[Y+Z+9]=r.y,b[Y+Z+10]=r.z,b[Y+Z+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Xe(A,C)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<l.length;g++)x+=l[g];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function DT(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}class bx extends $t{constructor(e,n,i,r,s,o,a,c,l,u=Os){if(u!==Os&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=Wr),i===void 0&&u===Ys&&(i=qs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ax=new $t,Ym=new bx(1,1),Rx=new gx,Px=new xM,Nx=new wx,Km=[],Qm=[],Zm=new Float32Array(16),Jm=new Float32Array(9),eg=new Float32Array(4);function ia(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Uc(t,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;eg.set(i),t.uniformMatrix2fv(this.addr,!1,eg),bt(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),bt(n,i)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Zm.set(i),t.uniformMatrix4fv(this.addr,!1,Zm),bt(n,i)}}function jT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function WT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ym.compareFunction=hx,s=Ym):s=Ax,n.setTexture2D(e||s,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nx,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function JT(t){switch(t){case 5126:return IT;case 35664:return UT;case 35665:return FT;case 35666:return OT;case 35674:return kT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return jT;case 35667:case 35671:return HT;case 35668:case 35672:return VT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return XT;case 36295:return $T;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return ZT}}function eC(t,e){t.uniform1fv(this.addr,e)}function tC(t,e){const n=ia(e,this.size,2);t.uniform2fv(this.addr,n)}function nC(t,e){const n=ia(e,this.size,3);t.uniform3fv(this.addr,n)}function iC(t,e){const n=ia(e,this.size,4);t.uniform4fv(this.addr,n)}function rC(t,e){const n=ia(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sC(t,e){const n=ia(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aC(t,e){const n=ia(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oC(t,e){t.uniform1iv(this.addr,e)}function lC(t,e){t.uniform2iv(this.addr,e)}function cC(t,e){t.uniform3iv(this.addr,e)}function uC(t,e){t.uniform4iv(this.addr,e)}function dC(t,e){t.uniform1uiv(this.addr,e)}function fC(t,e){t.uniform2uiv(this.addr,e)}function hC(t,e){t.uniform3uiv(this.addr,e)}function pC(t,e){t.uniform4uiv(this.addr,e)}function mC(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ax,s[o])}function gC(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Px,s[o])}function vC(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Nx,s[o])}function xC(t,e,n){const i=this.cache,r=e.length,s=Uc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rx,s[o])}function _C(t){switch(t){case 5126:return eC;case 35664:return tC;case 35665:return nC;case 35666:return iC;case 35674:return rC;case 35675:return sC;case 35676:return aC;case 5124:case 35670:return oC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return dC;case 36294:return fC;case 36295:return hC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return xC}}class yC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JT(n.type)}}class SC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_C(n.type)}}class EC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function tg(t,e){t.seq.push(e),t.map[e.id]=e}function MC(t,e,n){const i=t.name,r=i.length;for(ju.lastIndex=0;;){const s=ju.exec(i),o=ju.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tg(n,l===void 0?new yC(a,t,e):new SC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new EC(a),tg(n,f)),n=f}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);MC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ng(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wC=37297;let TC=0;function CC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bC(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===uc&&n===cc?i="LinearDisplayP3ToLinearSRGB":e===cc&&n===uc&&(i="LinearSRGBToLinearDisplayP3"),t){case pr:case Dc:return[i,"LinearTransferOETF"];case Wn:case Uh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ig(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CC(t.getShaderSource(e),o)}else return r}function AC(t,e){const n=bC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function RC(t,e){let n;switch(e){case XE:n="Linear";break;case $E:n="Reinhard";break;case qE:n="Cineon";break;case YE:n="ACESFilmic";break;case QE:n="AgX";break;case ZE:n="Neutral";break;case KE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new X;function PC(){Je.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function LC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ta(t){return t!==""}function rg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IC=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(IC,FC)}const UC=new Map;function FC(t,e){let n=Oe[e];if(n===void 0){const i=UC.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _f(n)}const OC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(t){return t.replace(OC,kC)}function kC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function og(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function zC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===xE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function BC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case $s:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function HC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case GE:e="ENVMAP_BLENDING_MIX";break;case WE:e="ENVMAP_BLENDING_ADD";break}return e}function VC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=zC(n),l=BC(n),u=jC(n),f=HC(n),h=VC(n),m=NC(n),x=LC(s),y=r.createProgram();let g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ta).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(g=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==sr?RC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,AC("linearToOutputTexel",n.outputColorSpace),PC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),o=_f(o),o=rg(o,n),o=sg(o,n),a=_f(a),a=rg(a,n),a=sg(a,n),o=ag(o),a=ag(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+o,S=v+p+a,A=ng(r,r.VERTEX_SHADER,_),C=ng(r,r.FRAGMENT_SHADER,S);r.attachShader(y,A),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(R){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(C).trim();let Y=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,C);else{const Z=ig(r,A,"vertex"),I=ig(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Z+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||q==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(C),N=new Pl(r,y),w=DC(r,y)}let N;this.getUniforms=function(){return N===void 0&&b(this),N};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,wC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}let WC=0;class XC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $C(e),n.set(e,i)),i}}class $C{constructor(e){this.id=WC++,this.code=e,this.usedTimes=0}}function qC(t,e,n,i,r,s,o){const a=new vx,c=new XC,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,E,R,B,k){const q=B.fog,Y=k.geometry,V=w.isMeshStandardMaterial?B.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),I=Z&&Z.mapping===Lc?Z.image.height:null,H=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const j=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=j!==void 0?j.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let De,P,ae,K;if(H){const Ye=Xn[H];De=Ye.vertexShader,P=Ye.fragmentShader}else De=w.vertexShader,P=w.fragmentShader,c.update(w),ae=c.getVertexShaderID(w),K=c.getFragmentShaderID(w);const re=t.getRenderTarget(),xe=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,ye=!!w.map,He=!!w.matcap,D=!!Z,tt=!!w.aoMap,Ve=!!w.lightMap,$e=!!w.bumpMap,we=!!w.normalMap,ft=!!w.displacementMap,Ae=!!w.emissiveMap,Ie=!!w.metalnessMap,L=!!w.roughnessMap,M=w.anisotropy>0,$=w.clearcoat>0,ee=w.dispersion>0,ie=w.iridescence>0,te=w.sheen>0,Ce=w.transmission>0,fe=M&&!!w.anisotropyMap,ge=$&&!!w.clearcoatMap,Fe=$&&!!w.clearcoatNormalMap,le=$&&!!w.clearcoatRoughnessMap,me=ie&&!!w.iridescenceMap,ze=ie&&!!w.iridescenceThicknessMap,Re=te&&!!w.sheenColorMap,_e=te&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Be=!!w.specularColorMap,ot=!!w.specularIntensityMap,U=Ce&&!!w.transmissionMap,ce=Ce&&!!w.thicknessMap,J=!!w.gradientMap,ne=!!w.alphaMap,de=w.alphaTest>0,Pe=!!w.alphaHash,Ge=!!w.extensions;let xt=sr;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Nt={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:P,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:pr,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:He,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:tt,lightMap:Ve,bumpMap:$e,normalMap:we,displacementMap:h&&ft,emissiveMap:Ae,normalMapObjectSpace:we&&w.normalMapType===nM,normalMapTangentSpace:we&&w.normalMapType===fx,metalnessMap:Ie,roughnessMap:L,anisotropy:M,anisotropyMap:fe,clearcoat:$,clearcoatMap:ge,clearcoatNormalMap:Fe,clearcoatRoughnessMap:le,dispersion:ee,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:ze,sheen:te,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:Be,specularIntensityMap:ot,transmission:Ce,transmissionMap:U,thicknessMap:ce,gradientMap:J,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:Pe,combine:w.combine,mapUv:ye&&y(w.map.channel),aoMapUv:tt&&y(w.aoMap.channel),lightMapUv:Ve&&y(w.lightMap.channel),bumpMapUv:$e&&y(w.bumpMap.channel),normalMapUv:we&&y(w.normalMap.channel),displacementMapUv:ft&&y(w.displacementMap.channel),emissiveMapUv:Ae&&y(w.emissiveMap.channel),metalnessMapUv:Ie&&y(w.metalnessMap.channel),roughnessMapUv:L&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:ge&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:Ue&&y(w.specularMap.channel),specularColorMapUv:Be&&y(w.specularColorMap.channel),specularIntensityMapUv:ot&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:ce&&y(w.thicknessMap.channel),alphaMapUv:ne&&y(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ye||ne),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gi,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)E.push(R),E.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(E,w),_(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){const E=x[w.type];let R;if(E){const B=Xn[E];R=NM.clone(B.uniforms)}else R=w.uniforms;return R}function A(w,E){let R;for(let B=0,k=u.length;B<k;B++){const q=u[B];if(q.cacheKey===E){R=q,++R.usedTimes;break}}return R===void 0&&(R=new GC(t,E,w,s),u.push(R)),R}function C(w){if(--w.usedTimes===0){const E=u.indexOf(w);u[E]=u[u.length-1],u.pop(),w.destroy()}}function b(w){c.remove(w)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:N}}function YC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function KC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,x,y,g){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=y,p.group=g),e++,p}function a(f,h,m,x,y,g){const p=o(f,h,m,x,y,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,h,m,x,y,g){const p=o(f,h,m,x,y,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function l(f,h){n.length>1&&n.sort(f||KC),i.length>1&&i.sort(h||lg),r.length>1&&r.sort(h||lg)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function QC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new cg,t.set(i,[o])):r>=s.length?(o=new cg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new qe};break;case"SpotLight":n={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function JC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eb=0;function tb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nb(t){const e=new ZC,n=JC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new vt,o=new vt;function a(l){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,y=0,g=0,p=0,v=0,_=0,S=0,A=0,C=0,b=0;l.sort(tb);for(let w=0,E=l.length;w<E;w++){const R=l[w],B=R.color,k=R.intensity,q=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*k,f+=B.g*k,h+=B.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],k);b++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,v++}i.directional[m]=V,m++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(B).multiplyScalar(k),V.distance=q,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[y]=V;const Z=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[y]=Z.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=Y,S++}y++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=V,g++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=V,x++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=V,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==x||N.spotLength!==y||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==_||N.numSpotShadows!==S||N.numSpotMaps!==A||N.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,N.directionalLength=m,N.pointLength=x,N.spotLength=y,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=S,N.numSpotMaps=A,N.numLightProbes=b,i.version=eb++)}function c(l,u){let f=0,h=0,m=0,x=0,y=0;const g=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(_.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function ug(t){const e=new nb(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ib(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ug(t),e.set(r,[a])):s>=o.length?(a=new ug(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class rb extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
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
}`;function lb(t,e,n){let i=new Oh;const r=new Xe,s=new Xe,o=new wt,a=new rb({depthPacking:tM}),c=new sb,l={},u=n.maxTextureSize,f={[lr]:sn,[sn]:lr,[gi]:gi},h=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ab,fragmentShader:ob}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new mr;x.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let p=this.type;this.render=function(C,b,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),B=t.state;B.setBlending(rr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==hi&&this.type===hi,q=p===hi&&this.type!==hi;for(let Y=0,V=C.length;Y<V;Y++){const Z=C[Y],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null||k===!0||q===!0){const Q=this.type!==hi?{minFilter:wn,magFilter:wn}:{};I.map!==null&&I.map.dispose(),I.map=new Xr(r.x,r.y,Q),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let Q=0;Q<j;Q++){const se=I.getViewport(Q);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),B.viewport(o),I.updateMatrices(Z,Q),i=I.getFrustum(),S(b,N,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&v(I,N),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(w,E,R)};function v(C,b){const N=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,N,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,N,m,y,null)}function _(C,b,N,w){let E=null;const R=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)E=R;else if(E=N.isPointLight===!0?c:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=E.uuid,k=b.uuid;let q=l[B];q===void 0&&(q={},l[B]=q);let Y=q[k];Y===void 0&&(Y=E.clone(),q[k]=Y,b.addEventListener("dispose",A)),E=Y}if(E.visible=b.visible,E.wireframe=b.wireframe,w===hi?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=t.properties.get(E);B.light=N}return E}function S(C,b,N,w,E){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const k=e.update(C),q=C.material;if(Array.isArray(q)){const Y=k.groups;for(let V=0,Z=Y.length;V<Z;V++){const I=Y[V],H=q[I.materialIndex];if(H&&H.visible){const j=_(C,H,w,E);C.onBeforeShadow(t,C,b,N,k,j,I),t.renderBufferDirect(N,null,k,j,C,I),C.onAfterShadow(t,C,b,N,k,j,I)}}}else if(q.visible){const Y=_(C,q,w,E);C.onBeforeShadow(t,C,b,N,k,Y,null),t.renderBufferDirect(N,null,k,Y,C,null),C.onAfterShadow(t,C,b,N,k,Y,null)}}const B=C.children;for(let k=0,q=B.length;k<q;k++)S(B[k],b,N,w,E)}function A(C){C.target.removeEventListener("dispose",A);for(const N in l){const w=l[N],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function cb(t){function e(){let U=!1;const ce=new wt;let J=null;const ne=new wt(0,0,0,0);return{setMask:function(de){J!==de&&!U&&(t.colorMask(de,de,de,de),J=de)},setLocked:function(de){U=de},setClear:function(de,Pe,Ge,xt,Nt){Nt===!0&&(de*=xt,Pe*=xt,Ge*=xt),ce.set(de,Pe,Ge,xt),ne.equals(ce)===!1&&(t.clearColor(de,Pe,Ge,xt),ne.copy(ce))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,ce=null,J=null,ne=null;return{setTest:function(de){de?K(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!U&&(t.depthMask(de),ce=de)},setFunc:function(de){if(J!==de){switch(de){case OE:t.depthFunc(t.NEVER);break;case kE:t.depthFunc(t.ALWAYS);break;case zE:t.depthFunc(t.LESS);break;case oc:t.depthFunc(t.LEQUAL);break;case BE:t.depthFunc(t.EQUAL);break;case jE:t.depthFunc(t.GEQUAL);break;case HE:t.depthFunc(t.GREATER);break;case VE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){ne!==de&&(t.clearDepth(de),ne=de)},reset:function(){U=!1,ce=null,J=null,ne=null}}}function i(){let U=!1,ce=null,J=null,ne=null,de=null,Pe=null,Ge=null,xt=null,Nt=null;return{setTest:function(Ye){U||(Ye?K(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(Ye){ce!==Ye&&!U&&(t.stencilMask(Ye),ce=Ye)},setFunc:function(Ye,ai,Hn){(J!==Ye||ne!==ai||de!==Hn)&&(t.stencilFunc(Ye,ai,Hn),J=Ye,ne=ai,de=Hn)},setOp:function(Ye,ai,Hn){(Pe!==Ye||Ge!==ai||xt!==Hn)&&(t.stencilOp(Ye,ai,Hn),Pe=Ye,Ge=ai,xt=Hn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Nt!==Ye&&(t.clearStencil(Ye),Nt=Ye)},reset:function(){U=!1,ce=null,J=null,ne=null,de=null,Pe=null,Ge=null,xt=null,Nt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,h=[],m=null,x=!1,y=null,g=null,p=null,v=null,_=null,S=null,A=null,C=new qe(0,0,0),b=0,N=!1,w=null,E=null,R=null,B=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=V>=2);let I=null,H={};const j=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),se=new wt().fromArray(j),De=new wt().fromArray(Q);function P(U,ce,J,ne){const de=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(U,Pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<J;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Pe}const ae={};ae[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(t.DEPTH_TEST),s.setFunc(oc),$e(!1),we(gm),K(t.CULL_FACE),tt(rr);function K(U){l[U]!==!0&&(t.enable(U),l[U]=!0)}function re(U){l[U]!==!1&&(t.disable(U),l[U]=!1)}function xe(U,ce){return u[U]!==ce?(t.bindFramebuffer(U,ce),u[U]=ce,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Me(U,ce){let J=h,ne=!1;if(U){J=f.get(ce),J===void 0&&(J=[],f.set(ce,J));const de=U.textures;if(J.length!==de.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Ge=de.length;Pe<Ge;Pe++)J[Pe]=t.COLOR_ATTACHMENT0+Pe;J.length=de.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function ye(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const He={[Pr]:t.FUNC_ADD,[yE]:t.FUNC_SUBTRACT,[SE]:t.FUNC_REVERSE_SUBTRACT};He[EE]=t.MIN,He[ME]=t.MAX;const D={[wE]:t.ZERO,[TE]:t.ONE,[CE]:t.SRC_COLOR,[zd]:t.SRC_ALPHA,[LE]:t.SRC_ALPHA_SATURATE,[PE]:t.DST_COLOR,[AE]:t.DST_ALPHA,[bE]:t.ONE_MINUS_SRC_COLOR,[Bd]:t.ONE_MINUS_SRC_ALPHA,[NE]:t.ONE_MINUS_DST_COLOR,[RE]:t.ONE_MINUS_DST_ALPHA,[DE]:t.CONSTANT_COLOR,[IE]:t.ONE_MINUS_CONSTANT_COLOR,[UE]:t.CONSTANT_ALPHA,[FE]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(U,ce,J,ne,de,Pe,Ge,xt,Nt,Ye){if(U===rr){x===!0&&(re(t.BLEND),x=!1);return}if(x===!1&&(K(t.BLEND),x=!0),U!==_E){if(U!==y||Ye!==N){if((g!==Pr||_!==Pr)&&(t.blendEquation(t.FUNC_ADD),g=Pr,_=Pr),Ye)switch(U){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _m:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,v=null,S=null,A=null,C.set(0,0,0),b=0,y=U,N=Ye}return}de=de||ce,Pe=Pe||J,Ge=Ge||ne,(ce!==g||de!==_)&&(t.blendEquationSeparate(He[ce],He[de]),g=ce,_=de),(J!==p||ne!==v||Pe!==S||Ge!==A)&&(t.blendFuncSeparate(D[J],D[ne],D[Pe],D[Ge]),p=J,v=ne,S=Pe,A=Ge),(xt.equals(C)===!1||Nt!==b)&&(t.blendColor(xt.r,xt.g,xt.b,Nt),C.copy(xt),b=Nt),y=U,N=!1}function Ve(U,ce){U.side===gi?re(t.CULL_FACE):K(t.CULL_FACE);let J=U.side===sn;ce&&(J=!J),$e(J),U.blending===Fs&&U.transparent===!1?tt(rr):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function we(U){U!==gE?(K(t.CULL_FACE),U!==E&&(U===gm?t.cullFace(t.BACK):U===vE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),E=U}function ft(U){U!==R&&(Y&&t.lineWidth(U),R=U)}function Ae(U,ce,J){U?(K(t.POLYGON_OFFSET_FILL),(B!==ce||k!==J)&&(t.polygonOffset(ce,J),B=ce,k=J)):re(t.POLYGON_OFFSET_FILL)}function Ie(U){U?K(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function L(U){U===void 0&&(U=t.TEXTURE0+q-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,ce,J){J===void 0&&(I===null?J=t.TEXTURE0+q-1:J=I);let ne=H[J];ne===void 0&&(ne={type:void 0,texture:void 0},H[J]=ne),(ne.type!==U||ne.texture!==ce)&&(I!==J&&(t.activeTexture(J),I=J),t.bindTexture(U,ce||ae[U]),ne.type=U,ne.texture=ce)}function $(){const U=H[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function _e(U){De.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Ue(U,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let ne=J.get(U);ne===void 0&&(ne=t.getUniformBlockIndex(ce,U.name),J.set(U,ne))}function Be(U,ce){const ne=c.get(ce).get(U);a.get(ce)!==ne&&(t.uniformBlockBinding(ce,ne,U.__bindingPointIndex),a.set(ce,ne))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},I=null,H={},u={},f=new WeakMap,h=[],m=null,x=!1,y=null,g=null,p=null,v=null,_=null,S=null,A=null,C=new qe(0,0,0),b=0,N=!1,w=null,E=null,R=null,B=null,k=null,se.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:re,bindFramebuffer:xe,drawBuffers:Me,useProgram:ye,setBlending:tt,setMaterial:Ve,setFlipSided:$e,setCullFace:we,setLineWidth:ft,setPolygonOffset:Ae,setScissorTest:Ie,activeTexture:L,bindTexture:M,unbindTexture:$,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:me,texImage3D:ze,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Re,viewport:_e,reset:ot}}function dg(t,e,n,i){const r=ub(i);switch(n){case sx:return t*e;case ox:return t*e;case lx:return t*e*2;case cx:return t*e/r.components*r.byteLength;case Lh:return t*e/r.components*r.byteLength;case ux:return t*e*2/r.components*r.byteLength;case Dh:return t*e*2/r.components*r.byteLength;case ax:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case Tl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:case qd:return Math.max(t,16)*Math.max(e,8)/4;case Wd:case $d:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dx:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ub(t){switch(t){case Ai:case nx:return{byteLength:1,components:1};case to:case ix:case po:return{byteLength:2,components:1};case Ph:case Nh:return{byteLength:2,components:4};case Wr:case Rh:case _i:return{byteLength:4,components:1};case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function db(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return m?new OffscreenCanvas(L,M):no("canvas")}function y(L,M,$){let ee=1;const ie=Ie(L);if((ie.width>$||ie.height>$)&&(ee=$/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(ee*ie.width),Ce=Math.floor(ee*ie.height);f===void 0&&(f=x(te,Ce));const fe=M?x(te,Ce):f;return fe.width=te,fe.height=Ce,fe.getContext("2d").drawImage(L,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+te+"x"+Ce+")."),fe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==Fn}function p(L){t.generateMipmap(L)}function v(L,M,$,ee,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=M;if(M===t.RED&&($===t.FLOAT&&(te=t.R32F),$===t.HALF_FLOAT&&(te=t.R16F),$===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.R8UI),$===t.UNSIGNED_SHORT&&(te=t.R16UI),$===t.UNSIGNED_INT&&(te=t.R32UI),$===t.BYTE&&(te=t.R8I),$===t.SHORT&&(te=t.R16I),$===t.INT&&(te=t.R32I)),M===t.RG&&($===t.FLOAT&&(te=t.RG32F),$===t.HALF_FLOAT&&(te=t.RG16F),$===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.RG8UI),$===t.UNSIGNED_SHORT&&(te=t.RG16UI),$===t.UNSIGNED_INT&&(te=t.RG32UI),$===t.BYTE&&(te=t.RG8I),$===t.SHORT&&(te=t.RG16I),$===t.INT&&(te=t.RG32I)),M===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const Ce=ie?lc:Je.getTransfer(ee);$===t.FLOAT&&(te=t.RGBA32F),$===t.HALF_FLOAT&&(te=t.RGBA16F),$===t.UNSIGNED_BYTE&&(te=Ce===rt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(L,M){let $;return L?M===null||M===Wr||M===qs?$=t.DEPTH24_STENCIL8:M===_i?$=t.DEPTH32F_STENCIL8:M===to&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wr||M===qs?$=t.DEPTH_COMPONENT24:M===_i?$=t.DEPTH_COMPONENT32F:M===to&&($=t.DEPTH_COMPONENT16),$}function S(L,M){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function A(L){const M=L.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&u.delete(M)}function C(L){const M=L.target;M.removeEventListener("dispose",C),w(M)}function b(L){const M=i.get(L);if(M.__webglInit===void 0)return;const $=L.source,ee=h.get($);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(L),Object.keys(ee).length===0&&h.delete($)}i.remove(L)}function N(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const $=L.source,ee=h.get($);delete ee[M.__cacheKey],o.memory.textures--}function w(L){const M=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let ee=0,ie=$.length;ee<ie;ee++){const te=i.get($[ee]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove($[ee])}i.remove(L)}let E=0;function R(){E=0}function B(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function k(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function q(L,M){const $=i.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De($,L,M);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+M)}function Y(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){De($,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+M)}function V(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){De($,L,M);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+M)}function Z(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){P($,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+M)}const I={[Vd]:t.REPEAT,[Ur]:t.CLAMP_TO_EDGE,[Gd]:t.MIRRORED_REPEAT},H={[wn]:t.NEAREST,[JE]:t.NEAREST_MIPMAP_NEAREST,[jo]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[mu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},j={[iM]:t.NEVER,[cM]:t.ALWAYS,[rM]:t.LESS,[hx]:t.LEQUAL,[sM]:t.EQUAL,[lM]:t.GEQUAL,[aM]:t.GREATER,[oM]:t.NOTEQUAL};function Q(L,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===mu||M.magFilter===jo||M.magFilter===Fr||M.minFilter===Fn||M.minFilter===mu||M.minFilter===jo||M.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,H[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==jo&&M.minFilter!==Fr||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const te=k(M);if(te!==L.__cacheKey){ie[te]===void 0&&(ie[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[te].usedTimes++;const Ce=ie[L.__cacheKey];Ce!==void 0&&(ie[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&N(M)),L.__cacheKey=te,L.__webglTexture=ie[te].texture}return $}function De(L,M,$){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=se(L,M),te=M.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+$);const Ce=i.get(te);if(te.version!==Ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+$);const fe=Je.getPrimaries(Je.workingColorSpace),ge=M.colorSpace===Wi?null:Je.getPrimaries(M.colorSpace),Fe=M.colorSpace===Wi||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=y(M.image,!1,r.maxTextureSize);le=Ae(M,le);const me=s.convert(M.format,M.colorSpace),ze=s.convert(M.type);let Re=v(M.internalFormat,me,ze,M.colorSpace,M.isVideoTexture);Q(ee,M);let _e;const Ue=M.mipmaps,Be=M.isVideoTexture!==!0,ot=Ce.__version===void 0||ie===!0,U=te.dataReady,ce=S(M,le);if(M.isDepthTexture)Re=_(M.format===Ys,M.type),ot&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Re,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,ze,null));else if(M.isDataTexture)if(Ue.length>0){Be&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,ze,_e.data):n.texImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,me,ze,_e.data);M.generateMipmaps=!1}else Be?(ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,me,ze,le.data)):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,ze,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,Ue[0].width,Ue[0].height,le.depth);for(let J=0,ne=Ue.length;J<ne;J++)if(_e=Ue[J],M.format!==On)if(me!==null)if(Be){if(U)if(M.layerUpdates.size>0){const de=dg(_e.width,_e.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ge=_e.data.subarray(Pe*de/_e.data.BYTES_PER_ELEMENT,(Pe+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Pe,_e.width,_e.height,1,me,Ge,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,le.depth,me,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Re,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,le.depth,me,ze,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Re,_e.width,_e.height,le.depth,0,me,ze,_e.data)}else{Be&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],M.format!==On?me!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,ze,_e.data):n.texImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,me,ze,_e.data)}else if(M.isDataArrayTexture)if(Be){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,le.width,le.height,le.depth),U)if(M.layerUpdates.size>0){const J=dg(le.width,le.height,M.format,M.type);for(const ne of M.layerUpdates){const de=le.data.subarray(ne*J/le.data.BYTES_PER_ELEMENT,(ne+1)*J/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,me,ze,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,ze,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,me,ze,le.data);else if(M.isData3DTexture)Be?(ot&&n.texStorage3D(t.TEXTURE_3D,ce,Re,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,ze,le.data)):n.texImage3D(t.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,me,ze,le.data);else if(M.isFramebufferTexture){if(ot)if(Be)n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height);else{let J=le.width,ne=le.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,Re,J,ne,0,me,ze,null),J>>=1,ne>>=1}}else if(Ue.length>0){if(Be&&ot){const J=Ie(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],Be?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,me,ze,_e):n.texImage2D(t.TEXTURE_2D,J,Re,me,ze,_e);M.generateMipmaps=!1}else if(Be){if(ot){const J=Ie(le);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,ze,le)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,ze,le);g(M)&&p(ee),Ce.__version=te.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function P(L,M,$){if(M.image.length!==6)return;const ee=se(L,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+$);const te=i.get(ie);if(ie.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+$);const Ce=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===Wi?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Wi||Ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Fe&&!le?me[ne]=y(M.image[ne],!0,r.maxCubemapSize):me[ne]=le?M.image[ne].image:M.image[ne],me[ne]=Ae(M,me[ne]);const ze=me[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ue=v(M.internalFormat,Re,_e,M.colorSpace),Be=M.isVideoTexture!==!0,ot=te.__version===void 0||ee===!0,U=ie.dataReady;let ce=S(M,ze);Q(t.TEXTURE_CUBE_MAP,M);let J;if(Fe){Be&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,ze.width,ze.height);for(let ne=0;ne<6;ne++){J=me[ne].mipmaps;for(let de=0;de<J.length;de++){const Pe=J[de];M.format!==On?Re!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,_e,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Re,_e,Pe.data)}}}else{if(J=M.mipmaps,Be&&ot){J.length>0&&ce++;const ne=Ie(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Re,_e,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,me[ne].width,me[ne].height,0,Re,_e,me[ne].data);for(let de=0;de<J.length;de++){const Ge=J[de].image[ne].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ge.width,Ge.height,Re,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,Ge.width,Ge.height,0,Re,_e,Ge.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,_e,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Re,_e,me[ne]);for(let de=0;de<J.length;de++){const Pe=J[de];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Re,_e,Pe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,Re,_e,Pe.image[ne])}}}g(M)&&p(t.TEXTURE_CUBE_MAP),te.__version=ie.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ae(L,M,$,ee,ie,te){const Ce=s.convert($.format,$.colorSpace),fe=s.convert($.type),ge=v($.internalFormat,Ce,fe,$.colorSpace);if(!i.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>te),me=Math.max(1,M.height>>te);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,te,ge,le,me,M.depth,0,Ce,fe,null):n.texImage2D(ie,te,ge,le,me,0,Ce,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,0,$e(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(L,M,$){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const ee=M.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,te=_(M.stencilBuffer,ie),Ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(M);we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,M.width,M.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,L)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const te=ee[ie],Ce=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ge=v(te.internalFormat,Ce,fe,te.colorSpace),Fe=$e(M);$&&we(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ie=$e(M);if(M.depthTexture.format===Os)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ys)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(L){const M=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=ee}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),K(M.__webglDepthbuffer[ee],L,!1);else{const ie=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),K(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(L,M,$){const ee=i.get(L);M!==void 0&&ae(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&xe(L)}function ye(L){const M=L.texture,$=i.get(L),ee=i.get(M);L.addEventListener("dispose",C);const ie=L.textures,te=L.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),te){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)$.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=i.get(ie[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&we(L)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ge=ie[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Fe=s.convert(ge.format,ge.colorSpace),le=s.convert(ge.type),me=v(ge.internalFormat,Fe,le,ge.colorSpace,L.isXRRenderTarget===!0),ze=$e(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,me,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),K($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae($.__webglFramebuffer[fe][ge],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else ae($.__webglFramebuffer[fe],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=ie[fe],le=i.get(Fe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Q(t.TEXTURE_2D,Fe),ae($.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Fe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),Q(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae($.__webglFramebuffer[ge],L,M,t.COLOR_ATTACHMENT0,fe,ge);else ae($.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,fe,0);g(M)&&p(fe),n.unbindTexture()}L.depthBuffer&&xe(L)}function He(L){const M=L.textures;for(let $=0,ee=M.length;$<ee;$++){const ie=M[$];if(g(ie)){const te=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(ie).__webglTexture;n.bindTexture(te,Ce),p(te),n.unbindTexture()}}}const D=[],tt=[];function Ve(L){if(L.samples>0){if(we(L)===!1){const M=L.textures,$=L.width,ee=L.height;let ie=t.COLOR_BUFFER_BIT;const te=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(L),fe=M.length>1;if(fe)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,ie,t.NEAREST),c===!0&&(D.length=0,tt.length=0,D.push(t.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(te),tt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function we(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(L){const M=o.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Ae(L,M){const $=L.colorSpace,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==pr&&$!==Wi&&(Je.getTransfer($)===rt?(ee!==On||ie!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Me,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=we}function fb(t,e){function n(i,r=Wi){let s;const o=Je.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===Ph)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nx)return t.BYTE;if(i===ix)return t.SHORT;if(i===to)return t.UNSIGNED_SHORT;if(i===Rh)return t.INT;if(i===Wr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===po)return t.HALF_FLOAT;if(i===sx)return t.ALPHA;if(i===ax)return t.RGB;if(i===On)return t.RGBA;if(i===ox)return t.LUMINANCE;if(i===lx)return t.LUMINANCE_ALPHA;if(i===Os)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===cx)return t.RED;if(i===Lh)return t.RED_INTEGER;if(i===ux)return t.RG;if(i===Dh)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===Tl||i===Cl||i===bl||i===Al)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wd||i===Xd||i===$d||i===qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===Kd||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===Kd)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ef)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ff)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===hf||i===pf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dx||i===mf||i===gf||i===vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hb extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cl extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pb={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends na{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,x=null;const y=new vb,g=n.getContextAttributes();let p=null,v=null;const _=[],S=[],A=new Xe;let C=null;const b=new En;b.layers.enable(1),b.viewport=new wt;const N=new En;N.layers.enable(2),N.viewport=new wt;const w=[b,N],E=new hb;E.layers.enable(1),E.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let ae=_[P];return ae===void 0&&(ae=new Hu,_[P]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(P){let ae=_[P];return ae===void 0&&(ae=new Hu,_[P]=ae),ae.getGripSpace()},this.getHand=function(P){let ae=_[P];return ae===void 0&&(ae=new Hu,_[P]=ae),ae.getHandSpace()};function k(P){const ae=S.indexOf(P.inputSource);if(ae===-1)return;const K=_[ae];K!==void 0&&(K.update(P.inputSource,P.frame,l||o),K.dispatchEvent({type:P.type,data:P.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Y);for(let P=0;P<_.length;P++){const ae=S[P];ae!==null&&(S[P]=null,_[P].disconnect(ae))}R=null,B=null,y.reset(),e.setRenderTarget(p),m=null,h=null,f=null,r=null,v=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Xr(m.framebufferWidth,m.framebufferHeight,{format:On,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,K=null,re=null;g.depth&&(re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=g.stencil?Ys:Os,K=g.stencil?qs:Wr);const xe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Xr(h.textureWidth,h.textureHeight,{format:On,type:Ai,depthTexture:new bx(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(P){for(let ae=0;ae<P.removed.length;ae++){const K=P.removed[ae],re=S.indexOf(K);re>=0&&(S[re]=null,_[re].disconnect(K))}for(let ae=0;ae<P.added.length;ae++){const K=P.added[ae];let re=S.indexOf(K);if(re===-1){for(let Me=0;Me<_.length;Me++)if(Me>=S.length){S.push(K),re=Me;break}else if(S[Me]===null){S[Me]=K,re=Me;break}if(re===-1)break}const xe=_[re];xe&&xe.connect(K)}}const V=new X,Z=new X;function I(P,ae,K){V.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(K.matrixWorld);const re=V.distanceTo(Z),xe=ae.projectionMatrix.elements,Me=K.projectionMatrix.elements,ye=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),D=(xe[9]+1)/xe[5],tt=(xe[9]-1)/xe[5],Ve=(xe[8]-1)/xe[0],$e=(Me[8]+1)/Me[0],we=ye*Ve,ft=ye*$e,Ae=re/(-Ve+$e),Ie=Ae*-Ve;if(ae.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ie),P.translateZ(Ae),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),xe[10]===-1)P.projectionMatrix.copy(ae.projectionMatrix),P.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=ye+Ae,M=He+Ae,$=we-Ie,ee=ft+(re-Ie),ie=D*He/M*L,te=tt*He/M*L;P.projectionMatrix.makePerspective($,ee,ie,te,L,M),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function H(P,ae){ae===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(ae.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let ae=P.near,K=P.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(K=y.depthFar)),E.near=N.near=b.near=ae,E.far=N.far=b.far=K,(R!==E.near||B!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,B=E.far);const re=P.parent,xe=E.cameras;H(E,re);for(let Me=0;Me<xe.length;Me++)H(xe[Me],re);xe.length===2?I(E,b,N):E.projectionMatrix.copy(b.projectionMatrix),j(P,E,re)};function j(P,ae,K){K===null?P.matrix.copy(ae.matrixWorld):(P.matrix.copy(K.matrixWorld),P.matrix.invert(),P.matrix.multiply(ae.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(ae.projectionMatrix),P.projectionMatrixInverse.copy(ae.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=xf*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(P){c=P,h!==null&&(h.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let Q=null;function se(P,ae){if(u=ae.getViewerPose(l||o),x=ae,u!==null){const K=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let re=!1;K.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Me=0;Me<K.length;Me++){const ye=K[Me];let He=null;if(m!==null)He=m.getViewport(ye);else{const tt=f.getViewSubImage(h,ye);He=tt.viewport,Me===0&&(e.setRenderTargetTextures(v,tt.colorTexture,h.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(v))}let D=w[Me];D===void 0&&(D=new En,D.layers.enable(Me),D.viewport=new wt,w[Me]=D),D.matrix.fromArray(ye.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ye.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(He.x,He.y,He.width,He.height),Me===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(D)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Me=f.getDepthInformation(K[0]);Me&&Me.isValid&&Me.texture&&y.init(e,Me,r.renderState)}}for(let K=0;K<_.length;K++){const re=S[K],xe=_[K];re!==null&&xe!==void 0&&xe.update(re,ae,l||o)}Q&&Q(P,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const De=new Tx;De.setAnimationLoop(se),this.setAnimationLoop=function(P){Q=P},this.dispose=function(){}}}const wr=new ii,_b=new vt;function yb(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Ex(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,S=v.envMapRotation;_&&(g.envMap.value=_,wr.copy(S),wr.x*=-1,wr.y*=-1,wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),g.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(wr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sb(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function l(v,_){let S=r[v.id];S===void 0&&(x(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(v,A);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const _=f();v.__bindingPointIndex=_;const S=t.createBuffer(),A=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,b=S.length;C<b;C++){const N=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,E=N.length;w<E;w++){const R=N[w];if(m(R,C,w,A)===!0){const B=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let Y=0;Y<k.length;Y++){const V=k[Y],Z=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,B+q,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,S,A){const C=v.value,b=_+"_"+S;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const N=A[b];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return A[b]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function x(v){const _=v.uniforms;let S=0;const A=16;for(let b=0,N=_.length;b<N;b++){const w=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,R=w.length;E<R;E++){const B=w[E],k=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=k.length;q<Y;q++){const V=k[q],Z=y(V),I=S%A,H=I%Z.boundary,j=I+H;S+=H,j!==0&&A-j<Z.storage&&(S+=A-j),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Z.storage}}}const C=S%A;return C>0&&(S+=A-C),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Eb{constructor(e={}){const{canvas:n=dM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const p=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=sr,this.toneMappingExposure=1;const _=this;let S=!1,A=0,C=0,b=null,N=-1,w=null;const E=new wt,R=new wt;let B=null;const k=new qe(0);let q=0,Y=n.width,V=n.height,Z=1,I=null,H=null;const j=new wt(0,0,Y,V),Q=new wt(0,0,Y,V);let se=!1;const De=new Oh;let P=!1,ae=!1;const K=new vt,re=new X,xe=new wt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function He(){return b===null?Z:1}let D=i;function tt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ah}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const F="webgl2";if(D=tt(F,T),D===null)throw tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,$e,we,ft,Ae,Ie,L,M,$,ee,ie,te,Ce,fe,ge,Fe,le,me,ze,Re,_e,Ue,Be,ot;function U(){Ve=new AT(D),Ve.init(),Ue=new fb(D,Ve),$e=new ET(D,Ve,e,Ue),we=new cb(D),ft=new NT(D),Ae=new YC,Ie=new db(D,Ve,we,Ae,$e,Ue,ft),L=new wT(_),M=new bT(_),$=new kM(D),Be=new yT(D,$),ee=new RT(D,$,ft,Be),ie=new DT(D,ee,$,ft),ze=new LT(D,$e,Ie),Fe=new MT(Ae),te=new qC(_,L,M,Ve,$e,Be,Fe),Ce=new yb(_,Ae),fe=new QC,ge=new ib(Ve),me=new _T(_,L,M,we,ie,h,c),le=new lb(_,ie,$e),ot=new Sb(D,ft,$e,we),Re=new ST(D,Ve,ft),_e=new PT(D,Ve,ft),ft.programs=te.programs,_.capabilities=$e,_.extensions=Ve,_.properties=Ae,_.renderLists=fe,_.shadowMap=le,_.state=we,_.info=ft}U();const ce=new xb(_,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(Y,V,!1))},this.getSize=function(T){return T.set(Y,V)},this.setSize=function(T,F,G=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,V=F,n.width=Math.floor(T*Z),n.height=Math.floor(F*Z),G===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,F,G){Y=T,V=F,Z=G,n.width=Math.floor(T*G),n.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,F,G,W){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,F,G,W),we.viewport(E.copy(j).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,F,G,W){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,G,W),we.scissor(R.copy(Q).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){we.setScissorTest(se=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let O=!1;if(b!==null){const ue=b.texture.format;O=ue===Ih||ue===Dh||ue===Lh}if(O){const ue=b.texture.type,pe=ue===Ai||ue===Wr||ue===to||ue===qs||ue===Ph||ue===Nh,Se=me.getClearColor(),Ee=me.getClearAlpha(),Ne=Se.r,Le=Se.g,Te=Se.b;pe?(m[0]=Ne,m[1]=Le,m[2]=Te,m[3]=Ee,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ne,x[1]=Le,x[2]=Te,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ge.dispose(),Ae.dispose(),L.dispose(),M.dispose(),ie.dispose(),Be.dispose(),ot.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Hn),ce.removeEventListener("sessionend",jh),vr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=ft.autoReset,F=le.enabled,G=le.autoUpdate,W=le.needsUpdate,O=le.type;U(),ft.autoReset=T,le.enabled=F,le.autoUpdate=G,le.needsUpdate=W,le.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const F=T.target;F.removeEventListener("dispose",Pe),Ge(F)}function Ge(T){xt(T),Ae.remove(T)}function xt(T){const F=Ae.get(T).programs;F!==void 0&&(F.forEach(function(G){te.releaseProgram(G)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,O,ue){F===null&&(F=Me);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=Bx(T,F,G,W,O);we.setMaterial(W,pe);let Ee=G.index,Ne=1;if(W.wireframe===!0){if(Ee=ee.getWireframeAttribute(G),Ee===void 0)return;Ne=2}const Le=G.drawRange,Te=G.attributes.position;let Ke=Le.start*Ne,ht=(Le.start+Le.count)*Ne;ue!==null&&(Ke=Math.max(Ke,ue.start*Ne),ht=Math.min(ht,(ue.start+ue.count)*Ne)),Ee!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Ee.count)):Te!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Te.count));const pt=ht-Ke;if(pt<0||pt===1/0)return;Be.setup(O,W,Se,G,Ee);let an,Qe=Re;if(Ee!==null&&(an=$.get(Ee),Qe=_e,Qe.setIndex(an)),O.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*He()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(O.isLine){let be=W.linewidth;be===void 0&&(be=1),we.setLineWidth(be*He()),O.isLineSegments?Qe.setMode(D.LINES):O.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else O.isPoints?Qe.setMode(D.POINTS):O.isSprite&&Qe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,Lt=O._multiDrawCounts,Ze=O._multiDrawCount,An=Ee?$.get(Ee).bytesPerElement:1,Qr=Ae.get(W).currentProgram.getUniforms();for(let on=0;on<Ze;on++)Qr.setValue(D,"_gl_DrawID",on),Qe.render(be[on]/An,Lt[on])}else if(O.isInstancedMesh)Qe.renderInstances(Ke,pt,O.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Lt=Math.min(G.instanceCount,be);Qe.renderInstances(Ke,pt,Lt)}else Qe.render(Ke,pt)};function Nt(T,F,G){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Eo(T,F,G),T.side=lr,T.needsUpdate=!0,Eo(T,F,G),T.side=gi):Eo(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),g=ge.get(G),g.init(F),v.push(g),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const W=new Set;return T.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const Se=ue[pe];Nt(Se,G,O),W.add(Se)}else Nt(ue,G,O),W.add(ue)}),v.pop(),g=null,W},this.compileAsync=function(T,F,G=null){const W=this.compile(T,F,G);return new Promise(O=>{function ue(){if(W.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(T);return}setTimeout(ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function ai(T){Ye&&Ye(T)}function Hn(){vr.stop()}function jh(){vr.start()}const vr=new Tx;vr.setAnimationLoop(ai),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(T){Ye=T,ce.setAnimationLoop(T),T===null?vr.stop():vr.start()},ce.addEventListener("sessionstart",Hn),ce.addEventListener("sessionend",jh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,b),g=ge.get(T,v.length),g.init(F),v.push(g),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(K),ae=this.localClippingEnabled,P=Fe.init(this.clippingPlanes,ae),y=fe.get(T,p.length),y.init(),p.push(y),ce.enabled===!0&&ce.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Oc(ue,F,-1/0,_.sortObjects)}Oc(T,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,H),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&me.addToRenderList(y,T),this.info.render.frame++,P===!0&&Fe.beginShadows();const G=g.state.shadowsArray;le.render(G,T,F),P===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,O=y.transmissive;if(g.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let pe=0,Se=ue.length;pe<Se;pe++){const Ee=ue[pe];Vh(W,O,T,Ee)}ye&&me.render(T);for(let pe=0,Se=ue.length;pe<Se;pe++){const Ee=ue[pe];Hh(y,T,Ee,Ee.viewport)}}else O.length>0&&Vh(W,O,T,F),ye&&me.render(T),Hh(y,T,F);b!==null&&(Ie.updateMultisampleRenderTarget(b),Ie.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,F),Be.resetDefaultState(),N=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],P===!0&&Fe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Oc(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){W&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const pe=ie.update(T),Se=T.material;Se.visible&&y.push(T,pe,Se,G,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){const pe=ie.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),xe.copy(pe.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const Ee=pe.groups;for(let Ne=0,Le=Ee.length;Ne<Le;Ne++){const Te=Ee[Ne],Ke=Se[Te.materialIndex];Ke&&Ke.visible&&y.push(T,pe,Ke,G,xe.z,Te)}}else Se.visible&&y.push(T,pe,Se,G,xe.z,null)}}const ue=T.children;for(let pe=0,Se=ue.length;pe<Se;pe++)Oc(ue[pe],F,G,W)}function Hh(T,F,G,W){const O=T.opaque,ue=T.transmissive,pe=T.transparent;g.setupLightsView(G),P===!0&&Fe.setGlobalState(_.clippingPlanes,G),W&&we.viewport(E.copy(W)),O.length>0&&So(O,F,G),ue.length>0&&So(ue,F,G),pe.length>0&&So(pe,F,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Vh(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new Xr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?po:Ai,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ue=g.state.transmissionRenderTarget[W.id],pe=W.viewport||E;ue.setSize(pe.z,pe.w);const Se=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(k),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ye&&me.render(G);const Ee=_.toneMapping;_.toneMapping=sr;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),P===!0&&Fe.setGlobalState(_.clippingPlanes,W),So(T,G,W),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Te=0,Ke=F.length;Te<Ke;Te++){const ht=F[Te],pt=ht.object,an=ht.geometry,Qe=ht.material,be=ht.group;if(Qe.side===gi&&pt.layers.test(W.layers)){const Lt=Qe.side;Qe.side=sn,Qe.needsUpdate=!0,Gh(pt,G,W,an,Qe,be),Qe.side=Lt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}_.setRenderTarget(Se),_.setClearColor(k,q),Ne!==void 0&&(W.viewport=Ne),_.toneMapping=Ee}function So(T,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=T.length;O<ue;O++){const pe=T[O],Se=pe.object,Ee=pe.geometry,Ne=W===null?pe.material:W,Le=pe.group;Se.layers.test(G.layers)&&Gh(Se,F,G,Ee,Ne,Le)}}function Gh(T,F,G,W,O,ue){T.onBeforeRender(_,F,G,W,O,ue),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,G,W,T,ue),O.transparent===!0&&O.side===gi&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,T,ue),O.side=lr,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,T,ue),O.side=gi):_.renderBufferDirect(G,F,W,O,T,ue),T.onAfterRender(_,F,G,W,O,ue)}function Eo(T,F,G){F.isScene!==!0&&(F=Me);const W=Ae.get(T),O=g.state.lights,ue=g.state.shadowsArray,pe=O.state.version,Se=te.getParameters(T,O.state,ue,F,G),Ee=te.getProgramCacheKey(Se);let Ne=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?M:L).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Pe),Ne=new Map,W.programs=Ne);let Le=Ne.get(Ee);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===pe)return Xh(T,Se),Le}else Se.uniforms=te.getUniforms(T),T.onBeforeCompile(Se,_),Le=te.acquireProgram(Se,Ee),Ne.set(Ee,Le),W.uniforms=Se.uniforms;const Te=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),Xh(T,Se),W.needsLights=Hx(T),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function Wh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Pl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Xh(T,F){const G=Ae.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Bx(T,F,G,W,O){F.isScene!==!0&&(F=Me),Ie.resetTextureUnits();const ue=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Se=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pr,Ee=(W.isMeshStandardMaterial?M:L).get(W.envMap||pe),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let pt=sr;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pt=_.toneMapping);const an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=an!==void 0?an.length:0,be=Ae.get(W),Lt=g.state.lights;if(P===!0&&(ae===!0||T!==w)){const xn=T===w&&W.id===N;Fe.setState(W,T,xn)}let Ze=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Lt.state.version||be.outputColorSpace!==Se||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Ee||W.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Fe.numPlanes||be.numIntersection!==Fe.numIntersection)||be.vertexAlphas!==Ne||be.vertexTangents!==Le||be.morphTargets!==Te||be.morphNormals!==Ke||be.morphColors!==ht||be.toneMapping!==pt||be.morphTargetsCount!==Qe)&&(Ze=!0):(Ze=!0,be.__version=W.version);let An=be.currentProgram;Ze===!0&&(An=Eo(W,F,O));let Qr=!1,on=!1,kc=!1;const _t=An.getUniforms(),Li=be.uniforms;if(we.useProgram(An.program)&&(Qr=!0,on=!0,kc=!0),W.id!==N&&(N=W.id,on=!0),Qr||w!==T){_t.setValue(D,"projectionMatrix",T.projectionMatrix),_t.setValue(D,"viewMatrix",T.matrixWorldInverse);const xn=_t.map.cameraPosition;xn!==void 0&&xn.setValue(D,re.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,on=!0,kc=!0)}if(O.isSkinnedMesh){_t.setOptional(D,O,"bindMatrix"),_t.setOptional(D,O,"bindMatrixInverse");const xn=O.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),_t.setValue(D,"boneTexture",xn.boneTexture,Ie))}O.isBatchedMesh&&(_t.setOptional(D,O,"batchingTexture"),_t.setValue(D,"batchingTexture",O._matricesTexture,Ie),_t.setOptional(D,O,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",O._indirectTexture,Ie),_t.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",O._colorsTexture,Ie));const zc=G.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0)&&ze.update(O,G,An),(on||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,_t.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Li.envMap.value=Ee,Li.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Li.envMapIntensity.value=F.environmentIntensity),on&&(_t.setValue(D,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&jx(Li,kc),ue&&W.fog===!0&&Ce.refreshFogUniforms(Li,ue),Ce.refreshMaterialUniforms(Li,W,Z,V,g.state.transmissionRenderTarget[T.id]),Pl.upload(D,Wh(be),Li,Ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pl.upload(D,Wh(be),Li,Ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(D,"center",O.center),_t.setValue(D,"modelViewMatrix",O.modelViewMatrix),_t.setValue(D,"normalMatrix",O.normalMatrix),_t.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xn=W.uniformsGroups;for(let Bc=0,Vx=xn.length;Bc<Vx;Bc++){const $h=xn[Bc];ot.update($h,An),ot.bind($h,An)}}return An}function jx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Hx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,G){Ae.get(T.texture).__webglTexture=F,Ae.get(T.depthTexture).__webglTexture=G;const W=Ae.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=Ae.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){b=T,A=F,C=G;let W=!0,O=null,ue=!1,pe=!1;if(T){const Ee=Ae.get(T);if(Ee.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(Ee.__hasExternalTextures)Ie.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Ae.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Le=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?O=Le[F][G]:O=Le[F],ue=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?O=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,E.copy(T.viewport),R.copy(T.scissor),B=T.scissorTest}else E.copy(j).multiplyScalar(Z).floor(),R.copy(Q).multiplyScalar(Z).floor(),B=se;if(we.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&we.drawBuffers(T,O),we.viewport(E),we.scissor(R),we.setScissorTest(B),ue){const Ee=Ae.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,G)}else if(pe){const Ee=Ae.get(T.texture),Ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Ne)}N=-1},this.readRenderTargetPixels=function(T,F,G,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=T.texture,Ne=Ee.format,Le=Ee.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O&&D.readPixels(F,G,W,O,Ue.convert(Ne),Ue.convert(Le),ue)}finally{const Ee=b!==null?Ae.get(b).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=T.texture,Ne=Ee.format,Le=Ee.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,G,W,O,Ue.convert(Ne),Ue.convert(Le),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await fM(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Te),D.deleteSync(Ke)}return ue}}finally{const Ee=b!==null?Ae.get(b).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(T.image.width*W),ue=Math.floor(T.image.height*W),pe=F!==null?F.x:0,Se=F!==null?F.y:0;Ie.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,Se,O,ue),we.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,W=null,O=0){T.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ue,pe,Se,Ee,Ne,Le;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.min.x,Ee=G.min.y):(ue=T.image.width,pe=T.image.height,Se=0,Ee=0),W!==null?(Ne=W.x,Le=W.y):(Ne=0,Le=0);const Te=Ue.convert(F.format),Ke=Ue.convert(F.type);Ie.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),be=D.getParameter(D.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[O]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ne,Le,ue,pe,Te,Ke,Lt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ne,Le,Lt.width,Lt.height,Te,Lt.data):D.texSubImage2D(D.TEXTURE_2D,O,Ne,Le,ue,pe,Te,Ke,Lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,W=null,O=0){T.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ue,pe,Se,Ee,Ne,Le,Te,Ke,ht;const pt=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.max.z-G.min.z,Ee=G.min.x,Ne=G.min.y,Le=G.min.z):(ue=pt.width,pe=pt.height,Se=pt.depth,Ee=0,Ne=0,Le=0),W!==null?(Te=W.x,Ke=W.y,ht=W.z):(Te=0,Ke=0,ht=0);const an=Ue.convert(F.format),Qe=Ue.convert(F.type);let be;if(F.isData3DTexture)Ie.setTexture3D(F,0),be=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ie.setTexture2DArray(F,0),be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Lt=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),An=D.getParameter(D.UNPACK_SKIP_PIXELS),Qr=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(be,O,Te,Ke,ht,ue,pe,Se,an,Qe,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(be,O,Te,Ke,ht,ue,pe,Se,an,pt.data):D.texSubImage3D(be,O,Te,Ke,ht,ue,pe,Se,an,Qe,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,An),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),O===0&&F.generateMipmaps&&D.generateMipmap(be),we.unbindTexture()},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Uh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Dc?"display-p3":"srgb"}}class Mb extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zh extends mr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new X,h=new X,m=[],x=[],y=[],g=[];for(let p=0;p<=i;p++){const v=[],_=p/i;let S=0;p===0&&o===0?S=.5/n:p===i&&c===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const C=A/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(C+S,1-_),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<n;v++){const _=u[p][v+1],S=u[p][v],A=u[p+1][v],C=u[p+1][v+1];(p!==0||o>0)&&m.push(_,S,C),(p!==i-1||c<Math.PI)&&m.push(S,A,C)}this.setIndex(m),this.setAttribute("position",new ei(x,3)),this.setAttribute("normal",new ei(y,3)),this.setAttribute("uv",new ei(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wb extends xo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Tb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Cb=new Tb;class Bh{constructor(e){this.manager=e!==void 0?e:Cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bh.DEFAULT_MATERIAL_NAME="__DEFAULT";class bb extends Bh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=no("img");function c(){u(),fg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ab extends Bh{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new bb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Lx extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Vu=new vt,hg=new X,pg=new X;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hg.setFromMatrixPosition(e.matrixWorld),n.position.copy(hg),pg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pg),n.updateMatrixWorld(),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pb extends Rb{constructor(){super(new Cx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nb extends Lx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Pb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lb extends Lx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);function Db(){const t=z.useRef(null),e=z.useRef(!1),n=z.useRef({x:0,y:0});return z.useEffect(()=>{if(!t.current)return;const i=new Mb,r=new En(75,window.innerWidth/window.innerHeight,.1,1e3),s=new Eb({antialias:!0,alpha:!0}),o=()=>{if(t.current){const{clientWidth:v,clientHeight:_}=t.current;s.setSize(v,_),r.aspect=v/_,r.updateProjectionMatrix()}};o(),t.current.appendChild(s.domElement),window.addEventListener("resize",o);const c=new Ab().load("images/profile.png"),l=new zh(3,32,32),u=new wb({map:c}),f=new Yn(l,u);i.add(f);const h=new Lb,m=new Nb(16777215,2);m.position.set(5,5,5),i.add(h),i.add(m),r.position.z=5;const x=v=>{e.current=!0,n.current={x:v.clientX,y:v.clientY}},y=v=>{if(!e.current)return;const _={x:v.clientX-n.current.x,y:v.clientY-n.current.y};f.rotation.y+=_.x*.005,f.rotation.x+=_.y*.005,n.current={x:v.clientX,y:v.clientY}},g=()=>{e.current=!1};t.current.addEventListener("mousedown",x),window.addEventListener("mousemove",y),window.addEventListener("mouseup",g);const p=()=>{requestAnimationFrame(p),e.current||(f.rotation.y+=.01),s.render(i,r)};return p(),()=>{t.current&&t.current.removeChild(s.domElement),window.removeEventListener("resize",o),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",g)}},[]),d.jsx(ni,{children:d.jsx("div",{ref:t,className:"w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] cursor-pointer"})})}const Ib=()=>d.jsx(si,{title:"Skills",children:d.jsxs("div",{className:"flex flex-col items-center space-y-4 sm:space-y-12",children:[d.jsx(ni,{children:d.jsx(en,{className:"sm:px-8",children:d.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-8",children:[d.jsx("div",{className:"relative w-40 h-40 sm:w-48 sm:h-48",children:d.jsx(Db,{})}),d.jsx(Tr,{title:"3D Rendering",description:"Expertise in creating interactive 3D graphics using various technologies.",skills:["OpenGL","WebGL","Three.js","Babylon.js"],hoverEffect:!1})]})})}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8",children:[d.jsx(Tr,{title:"Frontend & UI Development",description:"Creating intuitive and responsive user interfaces.",skills:["React.js","Next.js","Angular","HTML","CSS","JavaScript","TypeScript","Tailwind CSS"]}),d.jsx(Tr,{title:"Backend Development",description:"Proficiency in server-side development and building scalable backends.",skills:["Laravel","Django","MySQL","WordPress","Spring Boot"]}),d.jsx(Tr,{title:"Problem Solving & Algorithms",description:"Strong analytical skills for solving complex problems.",skills:["Algorithms","Data Structures","Problem Solving","Rapid Learning"]}),d.jsx(Tr,{title:"Design Patterns & Architecture",description:"Understanding of software design patterns and architecture.",skills:["Object-Oriented Programming (OOP)","System Design","UML","Software Design Patterns"]}),d.jsx(Tr,{title:"Version Control & Collaboration",description:"Skills in version control systems and collaborative development.",skills:["Git","Teamwork"]}),d.jsx(Tr,{title:"Programming Languages",description:"Experience in a variety of programming languages.",skills:["Python","JavaScript","C++","Java","PHP","C","C#"]})]})]})}),Tr=({title:t,description:e,skills:n,hoverEffect:i=!0})=>d.jsx("div",{children:d.jsx(ac,{children:d.jsxs(en,{hoverEffect:i,children:[d.jsx("h4",{className:"text-xl font-bold mb-2 text-white",children:t}),d.jsx("p",{className:"mb-4 text-white",children:e}),d.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>d.jsx("div",{className:"flex-grow",children:d.jsx(ni,{children:d.jsx("div",{className:"text-center text-primary-800 bg-white rounded-xl p-[6px] font-[800]",children:r},s)})},s))})]})})}),Ub=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(Ib,{})})});function Gu({title:t,date:e,location:n,bulletPoints:i,side:r,dashedLine:s,className:o=""}){const a=d.jsxs(en,{className:"p-8",children:[d.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[d.jsx("h3",{className:"text-xl font-semibold",children:t}),d.jsx("span",{className:"text-pumpkin-100 font-bold",children:e})]}),d.jsx("p",{className:"italic text-pumpkin-100",children:n}),d.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:i.map((c,l)=>d.jsx("li",{className:"custom-bullet",children:c},l))})]});return d.jsxs("div",{className:`relative ${o}`,children:[d.jsx(ni,{children:d.jsx("div",{className:`hidden absolute top-[50%] w-[75%] h-32 border-t-4 border-primary-500 border-dashed -z-10 ${s=="onRight"&&"md:block left-full border-r-4 rounded-tr-[40px]"} ${s=="onLeft"&&"md:block right-full border-l-4 rounded-tl-[40px]"}`})}),r=="left"?d.jsx(rc,{children:a}):d.jsx(ic,{children:a})]})}const _a=[{title:"Freelance Web Developer",date:"11/2024 – Present",location:"Stark Technologies, Serbia (Remote)",bulletPoints:["Developing diverse projects using React and Next.js.","Crafting high-performance, interactive frontend experiences."],className:""},{title:"Freelance Web Developer",date:"08/2024 – Present",location:"Eyes360, Cairo, Egypt (Remote)",bulletPoints:["Working on WebGL projects, integrating 3D rendering into web applications.","Delivering optimized, interactive frontend solutions."],className:"mt-48 lg:mt-40"},{title:"Front-End Web Developer",date:"02/2024 – 09/2024",location:"Divcodes, Beirut, Lebanon (Remote)",bulletPoints:["Worked in Front-End Development using React, Next.js, and TypeScript.","Involved in 2 projects, enhancing React development skills.","Utilized RESTful APIs in both projects and integrated Next.js."],className:"mt-40 lg:mt-32"},{title:"Full-Stack Web Developer",date:"09/2022 – 02/2024",location:"Aratech, Dubai, UAE (Remote)",bulletPoints:["Gained 1.5 years of experience in Laravel and MVC architecture.","Worked on 10+ projects using HTML, CSS, JavaScript.","Developed 5+ projects using PHP, Laravel Framework, Tailwind, and jQuery.","Contributed to 2 projects using Laravel Nova and Google Map API.","Worked on 5 WordPress projects."],className:"mt-48 lg:mt-40"},{title:"ICPC Contestant - Problem Setter - Coach",date:"2018 – 2021",location:"",bulletPoints:["Regional Contestant in ACPC 2021.","Silver medal in the SCPC 2021.","Golden medal in the Girls ACPC 2020.","Problem Setter at SCPC 2020.","Expert rank on Codeforces website."],className:"mt-52 lg:mt-44"}],Fb=()=>d.jsxs(si,{title:"Experience",children:[d.jsxs("div",{className:"relative hidden md:flex gap-8 justify-between text-left",children:[d.jsx("div",{children:_a.filter((t,e)=>e%2===0).map((t,e,n)=>d.jsx(Gu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"left",dashedLine:e===n.length-1&&_a.length%2===1?"none":"onRight",className:t.className},e))}),d.jsx("div",{children:_a.filter((t,e)=>e%2===1).map((t,e,n)=>d.jsx(Gu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"right",dashedLine:e===n.length-1&&_a.length%2===0?"none":"onLeft",className:t.className},e))})]}),d.jsx("div",{className:"md:hidden space-y-4 sm:space-y-8",children:_a.map((t,e)=>d.jsx(Gu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:e%2==0?"left":"right",dashedLine:"none",className:t.className},e))})]}),Ob=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(Fb,{})})}),yf=[{href:"",text:"Home"},{href:"skills",text:"Skills"},{href:"experience",text:"Experience"},{href:"projects",text:"Projects"},{href:"education",text:"Education"},{href:"certificates",text:"Certificates"},{href:"achievements",text:"Achievements"},{href:"fun-facts",text:"Fun Facts"},{href:"languages",text:"Languages"},{href:"contact",text:"Contact"}],Sf=({href:t,text:e,whiteLine:n=!1})=>{const{theme:i}=Yr(),r=Bv();return d.jsxs("li",{onClick:()=>r(`portfolio/${t}`),className:"relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]",children:[e,d.jsx("span",{className:`${i==="light"?n?"bg-white":"bg-black":"bg-white"} absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`})]})};function kb(){return d.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 24 24",children:d.jsx("path",{d:"M3 6h18M3 12h18M3 18h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}const zb=()=>{const[t,e]=z.useState(!1),[n,i]=z.useState(!1),{theme:r,setTheme:s}=Yr(),o=z.useRef(null);return z.useEffect(()=>{const a=setTimeout(()=>{e(!0)},100);return()=>clearTimeout(a)},[]),z.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n?document.addEventListener("mousedown",a):document.removeEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[n]),d.jsx("header",{className:`fixed w-full top-0 left-0 backdrop-blur-lg shadow-xl z-50 transition-opacity duration-[1500ms] ${r=="light"?"bg-white bg-opacity-50":"bg-black bg-opacity-60"} ${t?"opacity-100":"opacity-0"}`,children:d.jsxs("nav",{className:"container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center",children:[d.jsxs("div",{className:"lg:hidden relative",ref:o,children:[d.jsx("button",{onClick:()=>i(!n),className:"cursor-pointer",children:d.jsx(kb,{})}),d.jsx("div",{className:`${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"} bg-secondary-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`,children:d.jsx("ul",{className:"flex flex-col gap-4",children:yf.map((a,c)=>d.jsx("div",{onClick:()=>i(!1),children:d.jsx(Sf,{href:a.href,text:a.text})},c))})})]}),d.jsx("ul",{className:"hidden lg:flex space-x-6",children:yf.map((a,c)=>d.jsx(Sf,{href:a.href,text:a.text},c))}),d.jsx("button",{onClick:()=>s(r==="light"?"dark":"light"),className:"relative w-12 h-7 rounded-full transition-all duration-300 bg-gradient-to-b from-pumpkin-500 to-pumpkin-700 shadow-lg shadow-inner",children:d.jsx("span",{className:`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 bg-gradient-to-b from-pumpkin-100 to-white border border-pumpkin-600 shadow-md ${r==="dark"?"translate-x-5":"translate-x-0"}`})})]})})},Bi={name:"Nagham Qarqamaz",certificate:"General Certificate of High School Education",specialization:"Scientific Section",average:95.9,year:2017,subjects:[{subject:"Arabic Language",grade:389,max:400},{subject:"English Language",grade:300,max:300},{subject:"French Language",grade:292,max:300},{subject:"National Education",grade:190,max:200},{subject:"Mathematics",grade:598,max:600},{subject:"Physics",grade:399,max:400},{subject:"Chemistry",grade:193,max:200},{subject:"Science",grade:250,max:300},{subject:"Religion Education",grade:170,max:200}],totals:{earned:2781,max:2900}},Bb=()=>d.jsxs("div",{children:[d.jsx("h3",{className:"text-[28px] font-semibold mb-4",children:"High School Transcript"}),d.jsxs("div",{className:"mb-4",children:[d.jsxs("p",{children:[d.jsx("strong",{children:"Certificate:"})," ",Bi.certificate]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Specialization:"})," ",Bi.specialization]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Year:"})," ",Bi.year]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Overall Average:"})," ",Bi.average,"%"]})]}),d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full border-collapse",children:[d.jsx("thead",{className:"bg-primary-500",children:d.jsxs("tr",{children:[d.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),d.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"}),d.jsx("th",{className:"border px-4 py-2 text-center",children:"Max Grade"}),d.jsx("th",{className:"border px-4 py-2 text-center",children:"Percentage"})]})}),d.jsxs("tbody",{children:[Bi.subjects.map((t,e)=>d.jsxs("tr",{className:`${e%2==1&&"bg-[#FFFFFF1B]"}`,children:[d.jsx("td",{className:"border px-4 py-2",children:t.subject}),d.jsx("td",{className:"border px-4 py-2 text-center",children:t.grade}),d.jsx("td",{className:"border px-4 py-2 text-center",children:t.max}),d.jsxs("td",{className:"border px-4 py-2 text-center",children:[(t.grade/t.max*100).toFixed(1),"%"]})]},e)),d.jsxs("tr",{className:"font-semibold bg-primary-500",children:[d.jsx("td",{className:"border px-4 py-2",children:"Total"}),d.jsx("td",{className:"border px-4 py-2 text-center",children:Bi.totals.earned}),d.jsx("td",{className:"border px-4 py-2 text-center",children:Bi.totals.max}),d.jsxs("td",{className:"border px-4 py-2 text-center",children:[Bi.average,"%"]})]})]})]})})]}),ya={name:"Nagham Qarqamaz",degree:"Bachelor in Informatics Engineering - Software and Information Systems",university:"Tishreen University",overall_average:92.08,overall_appreciation:"Excellent",years:[{year:1,average:94.3,total_grades:1226,terms:{first_term:[{subject:"Programming (1)",grade:98},{subject:"Mathematical Analysis (1)",grade:96},{subject:"Non-linear Algebra",grade:100},{subject:"English Language (1)",grade:93},{subject:"Electrical Physics",grade:86},{subject:"Arabic Language",grade:93}],second_term:[{subject:"Programming (2)",grade:98},{subject:"Mathematical Analysis (2)",grade:84},{subject:"Physics of Semiconductors",grade:97},{subject:"Linear Algebra",grade:100},{subject:"Computer Operating Principles",grade:98},{subject:"English Language (2)",grade:93},{subject:"National Socialist Culture",grade:90}]}},{year:2,average:96.16,total_grades:1154,terms:{first_term:[{subject:"Advanced Programming (1)",grade:96},{subject:"Discrete Mathematics",grade:88},{subject:"Mathematical Analysis (3)",grade:100},{subject:"Probabilities and Statistics",grade:100},{subject:"Electrical Circuits",grade:98},{subject:"English Language for Informatics (1)",grade:90}],second_term:[{subject:"Advanced Programming (2)",grade:100},{subject:"Databases (1)",grade:98},{subject:"Numerical Analysis",grade:100},{subject:"Operating Research",grade:98},{subject:"Signals and Systems",grade:98},{subject:"English Language for Informatics (2)",grade:88}]}},{year:3,average:93.5,total_grades:1122,terms:{first_term:[{subject:"Communication Skills",grade:94},{subject:"Algorithms and Data Structures",grade:87},{subject:"Theory of Computation",grade:100},{subject:"Digital Communications",grade:96},{subject:"Logic Circuits",grade:99},{subject:"Computer Architecture (1)",grade:94}],second_term:[{subject:"Information Theory",grade:89},{subject:"Complexity Theory",grade:89},{subject:"Computer Networks (1)",grade:87},{subject:"Artificial Intelligence Principles",grade:92},{subject:"Software Engineering (1)",grade:96},{subject:"Operating Systems (1)",grade:99}]}},{year:4,average:91.58,total_grades:1099,terms:{first_term:[{subject:"Computer-aided Drawing",grade:100},{subject:"Organization Management",grade:93},{subject:"Multimedia Systems",grade:94},{subject:"Parallel Programming",grade:83},{subject:"Databases (2)",grade:90},{subject:"Software Engineering (2)",grade:87}],second_term:[{subject:"Modeling and Simulation",grade:85},{subject:"Analysis of Financial Systems",grade:93},{subject:"Compiler Structure",grade:100},{subject:"Design of Experiments",grade:96},{subject:"Distributed Systems and Applications",grade:82},{subject:"Semester Project",grade:96}]}},{year:5,average:84.9,total_grades:849,terms:{first_term:[{subject:"Information Systems Security",grade:81},{subject:"Advanced Databases",grade:82},{subject:"Software Engineering (3)",grade:74},{subject:"Machine Learning",grade:85},{subject:"Intelligent Search Algorithms",grade:78}],second_term:[{subject:"Information Systems Engineering",grade:83},{subject:"Marketing and Quality",grade:86},{subject:"Design Patterns",grade:91},{subject:"Web Applications",grade:92},{subject:"Graduation Project",grade:97}]}}]},jb=()=>d.jsxs("div",{children:[d.jsx("h3",{className:"text-[28px] font-semibold mb-4",children:"University Transcript"}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("p",{children:[d.jsx("strong",{children:"Degree:"})," ",ya.degree]}),d.jsxs("p",{children:[d.jsx("strong",{children:"University:"})," ",ya.university]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Overall Average:"})," ",ya.overall_average,"%"]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Overall Appreciation:"})," ",ya.overall_appreciation]})]}),ya.years.map(t=>{const e=`${2016+t.year}-${2017+t.year}`,n=["First","Second","Third","Fourth","Fifth"];return d.jsxs("div",{className:"mb-8",children:[d.jsxs("h4",{className:"text-lg font-semibold mb-3 text-white",children:[n[t.year-1]," Year /",e,"/ - Average: ",t.average,"%"]}),d.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[d.jsx("div",{className:"flex-1 overflow-x-auto",children:d.jsxs("table",{className:"w-full border-collapse",children:[d.jsxs("thead",{className:"bg-primary-500",children:[d.jsx("tr",{children:d.jsx("th",{className:"border px-4 py-2 text-center",colSpan:2,children:"First Term"})}),d.jsxs("tr",{children:[d.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),d.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"})]})]}),d.jsx("tbody",{children:t.terms.first_term.map((i,r)=>d.jsxs("tr",{className:`${r%2==1&&"bg-[#FFFFFF1B]"}`,children:[d.jsx("td",{className:"border px-4 py-2 text-start",children:i.subject}),d.jsx("td",{className:"border px-4 py-2 text-center",children:i.grade})]},r))})]})}),d.jsx("div",{className:"flex-1 overflow-x-auto",children:d.jsxs("table",{className:"w-full border-collapse",children:[d.jsxs("thead",{className:"bg-primary-500",children:[d.jsx("tr",{children:d.jsx("th",{className:"border px-4 py-2 text-center",colSpan:2,children:"Second Term"})}),d.jsxs("tr",{children:[d.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),d.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"})]})]}),d.jsx("tbody",{children:t.terms.second_term.map((i,r)=>d.jsxs("tr",{className:`${r%2==1&&"bg-[#FFFFFF1B]"}`,children:[d.jsx("td",{className:"border px-4 py-2 text-start",children:i.subject}),d.jsx("td",{className:"border px-4 py-2 text-center",children:i.grade})]},r))})]})})]})]},t.year)})]}),Hb=()=>d.jsx(si,{title:"Education",children:d.jsxs("div",{className:"flex flex-col gap-8",children:[d.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-x-12 gap-y-6",children:[d.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[d.jsx(Mt,{src:"certificates/Graduation Certificate.jpg",title:"Graduation Certificate"}),d.jsx(Mt,{src:"certificates/Bachelor's Degree.jpg",title:"Bachelor's Degree"})]}),d.jsx(en,{className:"p-8",children:d.jsxs("div",{className:"text-left",children:[d.jsxs("div",{className:"flex flex-wrap gap-8 justify-between items-center",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Bachelor of Software Engineering"}),d.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2022"})]}),d.jsx("p",{className:"italic text-pumpkin-100",children:"Tishreen University, Latakia, Syria"}),d.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[d.jsx("li",{children:"Valedictorian with an average of 92.08%"}),d.jsx("li",{children:"GPA: 3.7/4.0"})]})]})})]}),d.jsx(en,{hoverEffect:!1,className:"mt-16",children:d.jsx(jb,{})}),d.jsx(en,{hoverEffect:!1,className:"mt-16",children:d.jsx(Bb,{})})]})}),Vb=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(Hb,{})})}),Gb=()=>d.jsx(si,{title:"Achievements",children:d.jsxs("div",{className:"max-w-4xl mx-auto text-left space-y-4 sm:space-y-8",children:[d.jsx(rc,{children:d.jsxs(en,{className:"p-8",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Sharpening Skills Through Noon's Selection Process"}),d.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2023"})]}),d.jsx("p",{className:"italic text-pumpkin-100",children:"Dubai, UAE"}),d.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[d.jsx("li",{className:"custom-bullet",children:"Completed a rigorous hiring process with noon, a leading e-commerce company."}),d.jsx("li",{className:"custom-bullet",children:"Solved 14 out of 16 problems in a problem-solving test and succeeded in 3 interviews."}),d.jsx("li",{className:"custom-bullet",children:"Enhanced knowledge in e-commerce, databases, and systems through 4+ months of training."}),d.jsx("li",{className:"custom-bullet",children:"Solved 30+ SQL problems on LeetCode and 15+ on HackerRank."})]})]})}),d.jsx(ic,{children:d.jsxs(en,{className:"p-8",children:[d.jsx("div",{className:"flex justify-between items-center",children:d.jsx("h3",{className:"text-xl font-semibold",children:"Fast Learning Ability"})}),d.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:d.jsx("li",{className:"custom-bullet",children:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before"})})]})}),d.jsx(rc,{children:d.jsxs(en,{className:"p-8",children:[d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"text-xl font-semibold",children:"Expert Ranking on Codeforces"}),d.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2021"})]}),d.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:d.jsx("li",{className:"custom-bullet",children:"Demonstrated expertise in solving algorithmic problems using data structures."})})]})}),d.jsx(ic,{children:d.jsxs(en,{className:"p-8",children:[d.jsx("div",{className:"flex justify-between items-center",children:d.jsx("h3",{className:"text-xl font-semibold",children:"Top ICPC Medals:"})}),d.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[d.jsx("li",{className:"custom-bullet",children:"Gold Medalist, ACPC for Girls (2020)"}),d.jsx("li",{className:"custom-bullet",children:"Silver Medal, SCPC (2021)"})]})]})})]})}),Wb=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(Gb,{})})});function Xb(){return d.jsx(si,{title:"Fun Facts",children:d.jsx("div",{className:"max-w-[40rem] mx-auto",children:d.jsx(Zv,{description:"In 2019, I created a problem and solved it in my sleep—literally! While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious. Take a look inside my brain through this video:",videoURL:"https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku"})})})}const $b=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(Xb,{})})});function qb(){const t=[{language:"Arabic",proficiency:"Native",prof_desc:null},{language:"English",proficiency:"C1 Level",prof_desc:"Full working proficiency"},{language:"Spanish",proficiency:"B1 Level",prof_desc:"Limited working proficiency"}];return d.jsxs(si,{title:"Languages",children:[d.jsx(ac,{children:d.jsx("div",{className:"max-w-[40rem] mx-auto",children:d.jsx(en,{children:d.jsx("div",{className:"px-8",children:t.map((e,n)=>d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center py-3",children:[d.jsx("h3",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200",children:e.language}),d.jsxs("span",{className:"hidden sm:block text-xl text-white",children:[e.prof_desc&&d.jsx("span",{className:"mr-4 text-sm text-pumpkin-200 italic",children:e.prof_desc}),e.proficiency]}),d.jsx("div",{className:"sm:hidden text-sm text-pumpkin-200 italic",children:e.prof_desc}),d.jsx("div",{className:"sm:hidden text-xl text-white",children:e.proficiency})]},n))})})})}),d.jsx(ac,{children:d.jsx("iframe",{className:"max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-4 sm:mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105",src:"https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})]})}const Yb=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx(qb,{})})}),Kb=()=>{const{pathname:t}=hr();return z.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]),null};function Qb(){return d.jsxs("footer",{children:[d.jsx("img",{className:"w-full h-40",src:"images/wave.png"}),d.jsx("div",{className:"bg-pumpkin text-white pb-8 px-4 text-sm",children:d.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[d.jsx("ul",{className:"flex justify-center flex-wrap gap-x-4 gap-y-2",children:yf.map((t,e)=>d.jsx(Sf,{href:t.href,text:t.text,whiteLine:!0},e))}),d.jsxs("p",{className:"text-center",children:["© ",new Date().getFullYear()," Nagham Qarqamaz. All rights reserved."]})]})})]})}const io={_origin:"https://api.emailjs.com"},Zb=(t,e="https://api.emailjs.com")=>{io._userID=t,io._origin=e},Dx=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class mg{constructor(e){this.status=e.status,this.text=e.responseText}}const Ix=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new mg(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new mg(o))}),s.open("POST",io._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),Jb=(t,e,n,i)=>{const r=i||io._userID;return Dx(r,t,e),Ix("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},eA=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},tA=(t,e,n,i)=>{const r=i||io._userID,s=eA(n);Dx(r,t,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),Ix("/api/v1.0/email/send-form",o)},nA={init:Zb,send:Jb,sendForm:tA};let iA={data:""},rA=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||iA,sA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,aA=/\/\*[^]*?\*\/|  +/g,gg=/\n+/g,Xi=(t,e)=>{let n="",i="",r="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":i+=s[1]=="f"?Xi(o,s):s+"{"+Xi(o,s[1]=="k"?"":e)+"}":typeof o=="object"?i+=Xi(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Xi.p?Xi.p(s,o):s+":"+o+";")}return n+(e&&r?e+"{"+r+"}":r)+i},fi={},Ux=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Ux(t[n]);return e}return t},oA=(t,e,n,i,r)=>{let s=Ux(t),o=fi[s]||(fi[s]=(c=>{let l=0,u=11;for(;l<c.length;)u=101*u+c.charCodeAt(l++)>>>0;return"go"+u})(s));if(!fi[o]){let c=s!==t?t:(l=>{let u,f,h=[{}];for(;u=sA.exec(l.replace(aA,""));)u[4]?h.shift():u[3]?(f=u[3].replace(gg," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][u[1]]=u[2].replace(gg," ").trim();return h[0]})(t);fi[o]=Xi(r?{["@keyframes "+o]:c}:c,n?"":"."+o)}let a=n&&fi.g?fi.g:null;return n&&(fi.g=fi[o]),((c,l,u,f)=>{f?l.data=l.data.replace(f,c):l.data.indexOf(c)===-1&&(l.data=u?c+l.data:l.data+c)})(fi[o],e,i,a),o},lA=(t,e,n)=>t.reduce((i,r,s)=>{let o=e[s];if(o&&o.call){let a=o(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":Xi(a,""):a===!1?"":a}return i+r+(o??"")},"");function Fc(t){let e=this||{},n=t.call?t(e.p):t;return oA(n.unshift?n.raw?lA(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,rA(e.target),e.g,e.o,e.k)}let Fx,Ef,Mf;Fc.bind({g:1});let Ri=Fc.bind({k:1});function cA(t,e,n,i){Xi.p=e,Fx=t,Ef=n,Mf=i}function gr(t,e){let n=this||{};return function(){let i=arguments;function r(s,o){let a=Object.assign({},s),c=a.className||r.className;n.p=Object.assign({theme:Ef&&Ef()},a),n.o=/ *go\d+/.test(c),a.className=Fc.apply(n,i)+(c?" "+c:"");let l=t;return t[0]&&(l=a.as||t,delete a.as),Mf&&l[0]&&Mf(a),Fx(l,a)}return r}}var uA=t=>typeof t=="function",fc=(t,e)=>uA(t)?t(e):t,dA=(()=>{let t=0;return()=>(++t).toString()})(),Ox=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),fA=20,kx=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,fA)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return kx(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},Nl=[],Or={toasts:[],pausedAt:void 0},Kr=t=>{Or=kx(Or,t),Nl.forEach(e=>{e(Or)})},hA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pA=(t={})=>{let[e,n]=z.useState(Or),i=z.useRef(Or);z.useEffect(()=>(i.current!==Or&&n(Or),Nl.push(n),()=>{let s=Nl.indexOf(n);s>-1&&Nl.splice(s,1)}),[]);let r=e.toasts.map(s=>{var o,a,c;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((o=t[s.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((a=t[s.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||hA[s.type],style:{...t.style,...(c=t[s.type])==null?void 0:c.style,...s.style}}});return{...e,toasts:r}},mA=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||dA()}),yo=t=>(e,n)=>{let i=mA(e,t,n);return Kr({type:2,toast:i}),i.id},jt=(t,e)=>yo("blank")(t,e);jt.error=yo("error");jt.success=yo("success");jt.loading=yo("loading");jt.custom=yo("custom");jt.dismiss=t=>{Kr({type:3,toastId:t})};jt.remove=t=>Kr({type:4,toastId:t});jt.promise=(t,e,n)=>{let i=jt.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(r=>{let s=e.success?fc(e.success,r):void 0;return s?jt.success(s,{id:i,...n,...n==null?void 0:n.success}):jt.dismiss(i),r}).catch(r=>{let s=e.error?fc(e.error,r):void 0;s?jt.error(s,{id:i,...n,...n==null?void 0:n.error}):jt.dismiss(i)}),t};var gA=(t,e)=>{Kr({type:1,toast:{id:t,height:e}})},vA=()=>{Kr({type:5,time:Date.now()})},Fa=new Map,xA=1e3,_A=(t,e=xA)=>{if(Fa.has(t))return;let n=setTimeout(()=>{Fa.delete(t),Kr({type:4,toastId:t})},e);Fa.set(t,n)},yA=t=>{let{toasts:e,pausedAt:n}=pA(t);z.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let c=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(c<0){a.visible&&jt.dismiss(a.id);return}return setTimeout(()=>jt.dismiss(a.id),c)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let i=z.useCallback(()=>{n&&Kr({type:6,time:Date.now()})},[n]),r=z.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:c=8,defaultPosition:l}=o||{},u=e.filter(m=>(m.position||l)===(s.position||l)&&m.height),f=u.findIndex(m=>m.id===s.id),h=u.filter((m,x)=>x<f&&m.visible).length;return u.filter(m=>m.visible).slice(...a?[h+1]:[0,h]).reduce((m,x)=>m+(x.height||0)+c,0)},[e]);return z.useEffect(()=>{e.forEach(s=>{if(s.dismissed)_A(s.id,s.removeDelay);else{let o=Fa.get(s.id);o&&(clearTimeout(o),Fa.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:gA,startPause:vA,endPause:i,calculateOffset:r}}},SA=Ri`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,EA=Ri`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,MA=Ri`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,wA=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${SA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${EA} 0.15s ease-out forwards;
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
    animation: ${MA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,TA=Ri`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,CA=gr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${TA} 1s linear infinite;
`,bA=Ri`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,AA=Ri`
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
}`,RA=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${AA} 0.2s ease-out forwards;
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
`,PA=gr("div")`
  position: absolute;
`,NA=gr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,LA=Ri`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,DA=gr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${LA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,IA=({toast:t})=>{let{icon:e,type:n,iconTheme:i}=t;return e!==void 0?typeof e=="string"?z.createElement(DA,null,e):e:n==="blank"?null:z.createElement(NA,null,z.createElement(CA,{...i}),n!=="loading"&&z.createElement(PA,null,n==="error"?z.createElement(wA,{...i}):z.createElement(RA,{...i})))},UA=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,FA=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,OA="0%{opacity:0;} 100%{opacity:1;}",kA="0%{opacity:1;} 100%{opacity:0;}",zA=gr("div")`
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
`,BA=gr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,jA=(t,e)=>{let n=t.includes("top")?1:-1,[i,r]=Ox()?[OA,kA]:[UA(n),FA(n)];return{animation:e?`${Ri(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ri(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},HA=z.memo(({toast:t,position:e,style:n,children:i})=>{let r=t.height?jA(t.position||e||"top-center",t.visible):{opacity:0},s=z.createElement(IA,{toast:t}),o=z.createElement(BA,{...t.ariaProps},fc(t.message,t));return z.createElement(zA,{className:t.className,style:{...r,...n,...t.style}},typeof i=="function"?i({icon:s,message:o}):z.createElement(z.Fragment,null,s,o))});cA(z.createElement);var VA=({id:t,className:e,style:n,onHeightUpdate:i,children:r})=>{let s=z.useCallback(o=>{if(o){let a=()=>{let c=o.getBoundingClientRect().height;i(t,c)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return z.createElement("div",{ref:s,className:e,style:n},r)},GA=(t,e)=>{let n=t.includes("top"),i=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ox()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...i,...r}},WA=Fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ul=16,XA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:i,children:r,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:c}=yA(n);return z.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:ul,left:ul,right:ul,bottom:ul,pointerEvents:"none",...s},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},a.map(l=>{let u=l.position||e,f=c.calculateOffset(l,{reverseOrder:t,gutter:i,defaultPosition:e}),h=GA(u,f);return z.createElement(VA,{id:l.id,key:l.id,onHeightUpdate:c.updateHeight,className:l.visible?WA:"",style:h},l.type==="custom"?fc(l.message,l):r?r(l):z.createElement(HA,{toast:l,position:u}))}))};const $A=()=>{const[t,e]=z.useState({name:"",email:"",message:""}),[n,i]=z.useState("idle"),r=o=>{e({...t,[o.target.name]:o.target.value})},s=o=>{o.preventDefault(),i("sending"),nA.send("service_mlyje5d","template_bh8lfc6",t,"qk5ZPTV_zWzMK17MJ").then(()=>{i("sent"),jt.success("Message sent!"),e({name:"",email:"",message:""})}).catch(()=>{i("error"),jt.error("Failed to send message.")})};return d.jsx(si,{title:"Contact",children:d.jsxs("div",{className:"flex justify-center items-center gap-12 flex-wrap",children:[d.jsx(en,{hoverEffect:!1,className:"sm:px-8 py-8 w-fit max-w-[30rem] w-full",children:d.jsxs("form",{onSubmit:s,className:"mx-auto rounded space-y-4",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-start block",children:"Name:"}),d.jsx("input",{name:"name",value:t.name,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-start block",children:"Email:"}),d.jsx("input",{name:"email",type:"email",value:t.email,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-start block",children:"Message:"}),d.jsx("textarea",{name:"message",value:t.message,onChange:r,rows:4,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),d.jsx("div",{className:"mt-8",children:d.jsx(Yv,{text:"Send Message",onClick:()=>{},loading:n==="sending",loadingText:"Sending...",variant:"white"})})]})}),d.jsx("div",{className:"flex justify-center",children:d.jsx(Kv,{})})]})})},qA=()=>d.jsx(d.Fragment,{children:d.jsx(jn,{children:d.jsx($A,{})})});function Kn({items:t}){return d.jsx("ul",{style:{listStyleType:"disc",paddingLeft:"1.5rem"},className:"mt-2 space-y-1",children:t.map((e,n)=>d.jsx("li",{children:e},n))})}function Rs({title:t,organization:e,date:n,location:i,bulletPoints:r}){return d.jsxs("div",{children:[d.jsx("div",{className:"text-[22px] font-bold",children:t}),d.jsx("div",{className:"text-[19px] font-bold text-[#008CFF]",children:e}),d.jsxs("div",{className:"flex gap-6 text-[#3D3D3D] text-[15px]",children:[d.jsxs("div",{className:"flex gap-1 items-center",children:[d.jsx(wh,{className:"!text-[#3D3D3D] !w-4 !h-4"}),n]}),i&&d.jsxs("div",{className:"flex gap-1 items-center",children:[d.jsx(Nc,{className:"!fill-[#3D3D3D] !w-4 !h-4"}),i]})]}),d.jsx("div",{className:"text-[#3D3D3D]",children:d.jsx(Kn,{items:r})})]})}function vn({text:t}){return d.jsx("div",{className:"border-b-2 border-b-black text-[24px] font-bold mb-4",children:t})}function YA(){return d.jsxs("div",{children:[d.jsx(vn,{text:"EDUCATION"}),d.jsx("div",{children:d.jsx(Rs,{title:"Bachelor of Software Engineering",organization:"Tishreen University",date:"2018 - 2022",location:"Latakia, Syria",bulletPoints:["Valedictorian with an average of 92.08% (approx. GPA: 3.8/4.0).","Awarded Al-Basel Certificates for Academic Excellence consecutively from 2017 to 2022.","Obtained deep experience in algorithms, data structures, and complexity through 4 years of competitive programming contests."]})})]})}function KA(){return d.jsxs("div",{children:[d.jsx(vn,{text:"EXPERIENCE"}),d.jsxs("div",{children:[d.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed pb-4",children:d.jsx(Rs,{title:"Web Developer",organization:"Anon",date:"11/2024 - Present",location:"Serbia (Remote)",bulletPoints:["Built a full-scale bilingual Next.js website with modern UI/UX and responsive design, delivering 20+ pages within 1 month.","Updated a production Shopify project with 6,100+ customers, learning Liquid and integrating multiple third-party APIs."]})}),d.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed py-4",children:d.jsx(Rs,{title:"Frontend Web Developer",organization:"Eyes360",date:"08/2024 - 01/2025",location:"Cairo, Egypt (Remote)",bulletPoints:["Developed 3 interactive 3D modules using Babylon.js and WebGL.","Implemented advanced face tracking using Google Face Landmark Detection with real-time accuracy and motion latency under 50ms."]})}),d.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed py-4",children:d.jsx(Rs,{title:"Front-End Web Developer",organization:"Divcodes",date:"02/2024 - 09/2024",location:"Beirut, Lebanon (Remote)",bulletPoints:["Developed 3+ scalable React and Next.js applications with TypeScript.","Integrated 30+ RESTful APIs to connect frontend with backend systems.","Led frontend components for client-facing dashboards and e-commerce features across 20+ interactive pages."]})}),d.jsx("div",{className:"pt-4",children:d.jsx(Rs,{title:"Full-Stack Web Developer",organization:"Aratech",date:"09/2022 - 02/2024",location:"Dubai, UAE (Remote)",bulletPoints:["Collaborated with a 15-person dev team on 10+ projects using Laravel, JavaScript, and Tailwind CSS.","Built 5+ admin dashboards using Laravel Nova with Google Maps API integrations.","Contributed to 5+ WordPress websites, including full custom theme development.","Gained extensive experience working onsite in a friendly and highly collaborative team of around 15 members for a Dubai-based company."]})})]})]})}function QA(){return d.jsxs("div",{children:[d.jsx(vn,{text:"LANGUAGES"}),d.jsxs("div",{className:"flex border-b border-[#CCCCCC] border-dashed pb-1",children:[d.jsx("div",{className:"w-20",children:"Arabic"}),d.jsx("div",{className:"text-[#3D3D3D]",children:"Native"})]}),d.jsxs("div",{className:"flex border-b border-[#CCCCCC] border-dashed py-1",children:[d.jsx("div",{className:"w-20",children:"English"}),d.jsx("div",{className:"text-[#3D3D3D]",children:"Full Professional Proficiency (C1 Level)"})]}),d.jsxs("div",{className:"flex pt-1",children:[d.jsx("div",{className:"w-20",children:"Spanish"}),d.jsx("div",{className:"text-[#3D3D3D]",children:"Limited Working Proficiency (B1 Level)"})]})]})}function ZA(){return d.jsxs("div",{children:[d.jsx(vn,{text:"PROBLEM SOLVING EXPERIENCE"}),d.jsx("div",{children:d.jsx(Rs,{title:"ICPC Competitor · Problem Setter · Coach",organization:"International Collegiate Programming Contest",date:"2018 - 2021",bulletPoints:["Gold Medalist (4th place), ACPC for Girls 2020.","Silver Medalist (7th place), SCPC 2021.","Competed in ACPC 2021 as Tishreen University’s regional contestant.","Authored problems for SCPC 2020.","Reached Expert rank on Codeforces (2018–2021).","Received 12 certificates recognizing participation and achievements in ICPC contests.","Provided mentorship and training to over 30 younger participants preparing for ICPC competitions."]})})]})}function JA(){return d.jsxs("div",{children:[d.jsx(vn,{text:"SKILLS"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-[20px]",children:"Frontend:"}),d.jsxs("div",{className:"flex flex-wrap gap-1",children:[d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"React.js"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Next.js"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"TypeScript"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"JavaScript"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Tailwind CSS"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"HTML"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"CSS"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Redux"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Svelte"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Angular"})]})]}),d.jsxs("div",{className:"pt-4",children:[d.jsx("div",{className:"font-bold text-[20px]",children:"Backend:"}),d.jsxs("div",{className:"flex flex-wrap gap-1",children:[d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Laravel"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Django"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Spring Boot"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"PHP"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"MySQL"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"RESTful APIs"})]})]}),d.jsxs("div",{className:"pt-4",children:[d.jsx("div",{className:"font-bold text-[20px]",children:"Programming Languages:"}),d.jsxs("div",{className:"flex flex-wrap gap-1",children:[d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C++"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Python"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Java"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C#"})]})]}),d.jsxs("div",{className:"pt-4",children:[d.jsx("div",{className:"font-bold text-[20px]",children:"3D & Graphics:"}),d.jsxs("div",{className:"flex flex-wrap gap-1",children:[d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"WebGL"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Babylon.js"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Three.js"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"OpenGL"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Blender"})]})]}),d.jsxs("div",{className:"pt-4",children:[d.jsx("div",{className:"font-bold text-[20px]",children:"Other Skills:"}),d.jsxs("div",{className:"flex flex-wrap gap-1",children:[d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Git"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"WordPress"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"System Design"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"OOP"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"UML"}),d.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Design Patterns"})]})]})]})]})}function eR(){return d.jsxs("div",{children:[d.jsx(vn,{text:"SUMMARY"}),d.jsxs("div",{children:[d.jsx("p",{children:"Valedictorian Software Engineer with 3+ years of experience building high-impact frontend and full-stack applications. Gold Medalist in ACPC for Girls, combining competitive programming skills with practical product delivery."}),d.jsx(Kn,{items:["Delivered 15+ scalable projects with optimized performance and clean architecture.","Fast learner, built a functional app using 2 new frameworks after just 4 days of learning.","Problem solver with over 4 years of experience during college, solved 768 problems on Codeforces and many more on other platforms. Earned 12 certifications in programming contests.","Boosted development speed by 80% using AI-assisted tools.","Gained backend experience by solving 26 MySQL problems on LeetCode and building a few backend apps. Currently aiming to strengthen and expand my backend development skills.","Experience in Web 3D rendering with 2 academic projects and 1 professional project."]})]})]})}const tR=()=>d.jsxs("div",{className:"flex mt-12 gap-20",children:[d.jsxs("div",{className:"w-[65%] space-y-8",children:[d.jsx(KA,{}),d.jsx(ZA,{}),d.jsx(YA,{})]}),d.jsxs("div",{className:"w-[35%] space-y-8",children:[d.jsx(eR,{}),d.jsx(JA,{}),d.jsx(QA,{})]})]});function zx({className:t=""}){return d.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,fill:"#000000",viewBox:"0 0 512 512",id:"_x30_1",version:"1.1",children:d.jsx("path",{d:"M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z"})})}const nR=()=>d.jsxs("div",{className:"flex",children:[d.jsxs("div",{className:"w-[65%]",children:[d.jsx("div",{className:"text-[40px] font-bold",children:"NAGHAM QARQAMAZ"}),d.jsx("div",{className:"text-[#008CFF] text-[28px] -mt-2",children:"Software Engineer"}),d.jsxs("div",{className:"mt-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(bh,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",d.jsx("a",{className:"underline",href:"https://wa.me/+963992803522",children:"+963992803522"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Th,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",d.jsx("a",{className:"underline",href:"mailto:nagham.qarqamaz.kp@gmail.com",children:"nagham.qarqamaz.kp@gmail.com"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Ch,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",d.jsx("a",{className:"underline",href:"https://linkedin.com/in/nagham-qarqamaz",children:"https://linkedin.com/in/nagham-qarqamaz"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(zx,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",d.jsx("a",{className:"underline",href:"https://nagham-qarqamaz.github.io/portfolio/",children:"https://nagham-qarqamaz.github.io/portfolio/"})]})]})]}),d.jsx("div",{className:"w-[35%] flex justify-end items-center",children:d.jsx("img",{className:"rounded-full w-52 h-52",src:"https://nagham-qarqamaz.github.io/portfolio/images/profile.jpg"})})]}),iR=()=>d.jsxs("div",{className:"p-20",children:[d.jsx("style",{children:`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                    }
                    
                `}),d.jsx(nR,{}),d.jsx(tR,{})]}),rR=()=>d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"text-[36px] font-bold mb-2",children:"NAGHAM QARQAMAZ"}),d.jsx("div",{className:"text-[#008CFF] text-[24px] mb-2",children:"Software Engineer Pursuing Advanced Studies"}),d.jsxs("div",{className:"text-[16px] text-[#3D3D3D] mb-4",children:[d.jsx(Nc,{className:"!fill-[#3D3D3D] !w-4 !h-4 inline mr-1"}),"Latakia, Syria"]}),d.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap text-[14px]",children:[d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(bh,{className:"!fill-[#008CFF] !w-4 !h-4"}),d.jsx("a",{className:"underline",href:"https://wa.me/+963992803522",children:"+963992803522"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Th,{className:"!fill-[#008CFF] !w-4 !h-4"}),d.jsx("a",{className:"underline",href:"mailto:nagham.qarqamaz.kp@gmail.com",children:"nagham.qarqamaz.kp@gmail.com"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ch,{className:"!fill-[#008CFF] !w-4 !h-4"}),d.jsx("a",{className:"underline",href:"https://linkedin.com/in/nagham-qarqamaz",children:"linkedin.com/in/nagham-qarqamaz"})]}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(zx,{className:"!fill-[#008CFF] !w-4 !h-4"}),d.jsx("a",{className:"underline",href:"https://nagham-qarqamaz.github.io/portfolio/",children:"nagham-qarqamaz.github.io/portfolio"})]})]})]}),Yi=({title:t,organization:e,date:n,location:i,bulletPoints:r})=>d.jsxs("div",{className:"mb-4",children:[d.jsx("div",{className:"text-[20px] font-bold",children:t}),d.jsx("div",{className:"text-[17px] font-bold text-[#008CFF]",children:e}),d.jsxs("div",{className:"flex gap-4 text-[#3D3D3D] text-[14px] mb-1",children:[d.jsxs("div",{className:"flex gap-1 items-center",children:[d.jsx(wh,{className:"!text-[#3D3D3D] !w-3 !h-3"}),n]}),i&&d.jsxs("div",{className:"flex gap-1 items-center",children:[d.jsx(Nc,{className:"!fill-[#3D3D3D] !w-3 !h-3"}),i]})]}),d.jsx("div",{className:"text-[#3D3D3D] text-[14px]",children:d.jsx(Kn,{items:r})})]}),sR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"ACADEMIC PROFILE"}),d.jsxs("div",{children:[d.jsx("p",{children:"Valedictorian Informatics Engineering graduate from Tishreen University with 92.08% overall average, 5 consecutive years of Academic Excellence Awards (2017-2022), and Gold Medal at Girls' ACPC 2020. Combining academic excellence with 3+ years of professional software development experience. Seeking advanced academic opportunities to further develop research skills and contribute to technological innovation."}),d.jsx(Kn,{items:["Graduated with Honors from Tishreen University with 92.08% overall average in Informatics Engineering.","Perfect scores in multiple university subjects: Linear Algebra (100%), Theory of Computation (100%), Computer-aided Drawing (100%).","Awarded Al-Basel Academic Excellence Certificates for 5 consecutive years (2017-2022).","Gold Medalist (4th Place) at Girls' Arab Collegiate Programming Contest 2020 with multiple special awards.","Expert rank on Codeforces with 4+ years of competitive programming experience and coaching 30+ participants.","3+ years of professional software development experience with international companies (Aratech, Divcodes, Eyes360).","Strong academic foundation with recommendation letters from multiple university professors and work certificates."]})]})]}),aR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"EDUCATION"}),d.jsxs("div",{className:"space-y-4",children:[d.jsx(Yi,{title:"Bachelor in Informatics Engineering - Software and Information Systems",organization:"Tishreen University",date:"2017 - 2022",location:"Latakia, Syria",bulletPoints:["Graduated with Honors (Valedictorian) - Overall average: 92.08% with 'Excellent' appreciation.","Outstanding academic performance: Year 2 (96.16%), Year 1 (94.3%), Year 3 (93.5%), Year 4 (91.58%).","Achieved 9 perfect scores (100%) and excelled in core subjects: Algorithms (87%), Software Engineering (96%), Operating Systems (99%), Computer Networks (87%), Databases (98%), Web Applications (92%).","Awarded Al-Basel Certificates for Academic Excellence for 5 consecutive years (2018-2022).","Specialized in algorithms, data structures, software engineering, 3D graphics, and web applications.","4th Year Project (96%): Developed interactive WebGL interface for problem-solving website, applying OpenGL expertise to web environment.","Graduation Project (97%): Built 3D virtual campus tour using Three.js and Blender, implementing pathfinding, collision detection, and camera controls.","Applied 3D rendering skills from academic projects (OpenGL, WebGL, Three.js) to professional work at Eyes360, developing real-time face tracking applications.","Active member of competitive programming team with regional experience (Arab and North Africa competitions)."]}),d.jsx(Yi,{title:"General Certificate of High School Education",organization:"Martyr Jihad Nasour Secondary School",date:"2015 - 2017",location:"Latakia, Syria",bulletPoints:["Scientific Section specialization with 95.9% overall average.","Perfect score in English Language (300/300 - 100%).","Near-perfect scores: Physics (99.8%), Mathematics (99.7%).","Top student in all academic years in a highly competitive environment.","Strong foundation in sciences, mathematics, and languages."]})]})]}),oR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"COMPETITION ACHIEVEMENTS"}),d.jsxs("div",{className:"space-y-4",children:[d.jsx(Yi,{title:"Girls' Arab Collegiate Programming Contest - Gold Medal",organization:"ACPC Organization",date:"2020",bulletPoints:["4th Place Overall (Gold Medal) - Top performer among participating teams from across the Arab world.","First to Solve Problem A - Demonstrated exceptional speed and accuracy under pressure.","Extreme Programmers Award - Recognition for outstanding programming skills and technique.","Solid Programmers Award - Acknowledgment of consistent performance throughout competition.","Steadfast Gurus Award - Honor for persistence and systematic problem-solving approach.","One of the most prestigious achievements in competitive programming for female participants in the Arab region."]}),d.jsx(Yi,{title:"International Collegiate Programming Contest (ICPC)",organization:"ICPC Foundation",date:"2018 - 2021",bulletPoints:["TCPC 2021: 4th Place - Best performance in regional competition representing Tishreen University.","SCPC 2021: 7th Place (Silver Medal) - Consistent top-10 performance in Syrian national contest.","ACPC 2021: Regional Contestant - Competed at the highest level representing Tishreen University.","SCPC 2019: 8th Place - Maintained excellence across multiple years of competition.","SCPC 2018: 16th Place - Strong debut performance in competitive programming at university level.","Problem Setter for SCPC 2020 - Contributed to contest design and problem creation.","Expert rank on Codeforces (2018-2021) - Demonstrated consistent high-level algorithmic problem-solving.","Received 12 certificates recognizing participation and achievements in ICPC contests.","Coached and mentored 30+ younger participants preparing for ICPC competitions."]})]})]}),lR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"TECHNICAL SKILLS"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Programming Languages"}),d.jsx(Kn,{items:["C++ (Expert level - ICPC)","JavaScript/TypeScript","Python, Java, PHP, C, C#"]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Web Development"}),d.jsx(Kn,{items:["React.js, Next.js, Angular","Laravel, Django, Spring Boot","WebGL, Babylon.js, Three.js","RESTful APIs, MySQL"]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Academic Specializations"}),d.jsx(Kn,{items:["Algorithm Design & Analysis","Machine Learning & AI","Software Engineering","Competitive Programming"]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Languages"}),d.jsx(Kn,{items:["Arabic (Native)","English (C1 - Professional)","Spanish (B1 - Self-learned)"]})]})]})]}),cR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"REFERENCES"}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Academic References"}),d.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[14px] font-bold",children:"Dr. Raed Jaberi"}),d.jsx("div",{className:"text-[13px] text-[#008CFF]",children:"Professor, Tishreen Univ."}),d.jsx("div",{className:"text-[12px] text-[#3D3D3D]",children:"Ph.D., TU Ilmenau, Germany"}),d.jsx("div",{className:"text-[12px] text-[#7f8c8d]",children:"Jaberi.raed@gmail.com"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[14px] font-bold",children:"Dr. Basel Hasan"}),d.jsx("div",{className:"text-[13px] text-[#008CFF]",children:"Lecturer, Informatics"}),d.jsx("div",{className:"text-[12px] text-[#3D3D3D]",children:"Ph.D., U. Oldenburg, Germany"}),d.jsx("div",{className:"text-[12px] text-[#7f8c8d]",children:"basel.hasan@tishreen.edu.sy"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[14px] font-bold",children:"Dr. Gaith Bilal"}),d.jsx("div",{className:"text-[13px] text-[#008CFF]",children:"Assistant Professor"}),d.jsx("div",{className:"text-[12px] text-[#3D3D3D]",children:"Ph.D., Applied Math & Programming"}),d.jsx("div",{className:"text-[12px] text-[#7f8c8d]",children:"gaithbelal7@gmail.com"})]})]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Professional References"}),d.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[14px] font-bold",children:"Toni Elias"}),d.jsx("div",{className:"text-[13px] text-[#008CFF]",children:"Manager, Aratech"}),d.jsx("div",{className:"text-[12px] text-[#3D3D3D]",children:"Dubai, UAE"}),d.jsx("div",{className:"text-[12px] text-[#7f8c8d]",children:"toni1elias@outlook.com"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[14px] font-bold",children:"Ali Jaber"}),d.jsx("div",{className:"text-[13px] text-[#008CFF]",children:"Technical Lead, Divcodes"}),d.jsx("div",{className:"text-[12px] text-[#3D3D3D]",children:"Beirut, Lebanon"}),d.jsx("div",{className:"text-[12px] text-[#7f8c8d]",children:"admin@divcodes.com"})]})]})]})]})]}),uR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"POST-GRADUATION PROFESSIONAL EXPERIENCE"}),d.jsx("div",{className:"text-[14px] text-[#3D3D3D] mb-4 italic",children:"Applied academic knowledge in professional software development roles following university graduation"}),d.jsxs("div",{className:"space-y-3",children:[d.jsx(Yi,{title:"Web Developer",organization:"Anon (Stark Technologies)",date:"11/2024 - Present",location:"Serbia (Remote)",bulletPoints:["Built bilingual Next.js website with modern UI/UX, delivering 20+ pages within 1 month.","Updated production Shopify project with 6,100+ customers, integrating multiple APIs."]}),d.jsx(Yi,{title:"Frontend Web Developer",organization:"Eyes360",date:"08/2024 - 01/2025",location:"Cairo, Egypt (Remote)",bulletPoints:["Applied university 3D graphics knowledge to develop real-time face and hand tracking applications using Babylon.js.","Implemented advanced computer vision algorithms with motion latency under 50ms."]}),d.jsx(Yi,{title:"Front-End Web Developer",organization:"Divcodes",date:"02/2024 - 09/2024",location:"Beirut, Lebanon (Remote)",bulletPoints:["Developed scalable React applications applying software engineering principles from academic studies.","Received professional recommendation certificate recognizing technical performance."]}),d.jsx(Yi,{title:"Full-Stack Web Developer",organization:"Aratech",date:"09/2022 - 02/2024",location:"Dubai, UAE (Remote)",bulletPoints:["First professional role post-graduation, applying algorithms and database knowledge to real-world projects.","Received experience certificate for 1.5+ years of professional software development."]})]})]}),dR=()=>d.jsxs("div",{children:[d.jsx(vn,{text:"ADDITIONAL ACHIEVEMENTS"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold",children:"Fast Learning Capability"}),d.jsx(Kn,{items:["Built fully functional application using Spring Boot and Angular after just 4 days - starting from zero knowledge of these frameworks and learning them completely from scratch.","Toni Elias (Manager at Aratech, see references) impressed with rapid learning progression: started with minimal web development experience but immediately contributed to full-stack solutions, advancing from simple tasks to complex implementations."]})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[15px] font-bold",children:"Problem-Solving Excellence"}),d.jsx(Kn,{items:["Solved 768+ problems on Codeforces and hundreds more on various platforms.","Solved 30+ SQL problems on LeetCode and 15+ on HackerRank during Noon training.","Developed exceptional problem-solving skills through ICPC participation during college years: qualified for Syrian CPC from first participation as a first-year student, culminating in Gold Medal at Girls' ACPC 2020. Excelled simultaneously in academic and practical programming while ICPC provided early exposure to algorithms and complexity theory before formal coursework, creating deeper understanding of computer science fundamentals."]})]})]})]}),fR=()=>d.jsxs("div",{className:"flex mt-6 gap-8",children:[d.jsxs("div",{className:"w-[68%] space-y-6",children:[d.jsx(aR,{}),d.jsx(oR,{}),d.jsx(uR,{}),d.jsx(cR,{})]}),d.jsxs("div",{className:"w-[32%] space-y-5",children:[d.jsx(sR,{}),d.jsx(lR,{}),d.jsx(dR,{})]})]}),hR=()=>d.jsxs("div",{className:"p-8",children:[d.jsx("style",{children:`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                    }
                    
                `}),d.jsx(rR,{}),d.jsx(fR,{})]}),pR=(t=5)=>Array.from({length:t},(e,n)=>({id:n,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,size:`${Math.random()*30+10}rem`,opacity:Math.random()*.1+.2,color:Math.random()>.5?"bg-primary":"bg-pumpkin"})),mR=()=>{const{theme:t}=Yr(),e=z.useMemo(()=>pR(5),[]);return d.jsxs("div",{className:`relative overflow-hidden bg-secondary-800 ${t=="light"?"text-black":"text-white"}`,children:[t=="light"&&e.map(({id:n,left:i,top:r,size:s,opacity:o,color:a})=>d.jsx("div",{style:{left:i,top:r,width:s,height:s,opacity:o},className:`decorating-circle absolute rounded-full blur-3xl ${a}`},n)),d.jsx(XA,{position:"bottom-center",reverseOrder:!1}),d.jsxs("div",{className:"relative z-10 min-h-screen",children:[d.jsx(zb,{}),d.jsx(Kb,{}),d.jsxs(xS,{children:[d.jsx(un,{path:"/portfolio/",element:d.jsx(aE,{})}),d.jsx(un,{path:"/portfolio/skills",element:d.jsx(Ub,{})}),d.jsx(un,{path:"/portfolio/experience",element:d.jsx(Ob,{})}),d.jsx(un,{path:"/portfolio/projects",element:d.jsx(uE,{})}),d.jsx(un,{path:"/portfolio/education",element:d.jsx(Vb,{})}),d.jsx(un,{path:"/portfolio/certificates",element:d.jsx(mE,{})}),d.jsx(un,{path:"/portfolio/achievements",element:d.jsx(Wb,{})}),d.jsx(un,{path:"/portfolio/fun-facts",element:d.jsx($b,{})}),d.jsx(un,{path:"/portfolio/languages",element:d.jsx(Yb,{})}),d.jsx(un,{path:"/portfolio/contact",element:d.jsx(qA,{})}),d.jsx(un,{path:"/portfolio/resume",element:d.jsx(iR,{})}),d.jsx(un,{path:"/portfolio/resume2",element:d.jsx(hR,{})})]}),d.jsx(Qb,{})]})]})};Rv(document.getElementById("root")).render(d.jsx(z.StrictMode,{children:d.jsx(HS,{children:d.jsx(x1,{children:d.jsx(mR,{})})})}));
