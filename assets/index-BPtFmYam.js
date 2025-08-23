(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sg={exports:{}},pc={},Eg={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),Yx=Symbol.for("react.portal"),Kx=Symbol.for("react.fragment"),Qx=Symbol.for("react.strict_mode"),Zx=Symbol.for("react.profiler"),Jx=Symbol.for("react.provider"),e_=Symbol.for("react.context"),t_=Symbol.for("react.forward_ref"),n_=Symbol.for("react.suspense"),i_=Symbol.for("react.memo"),r_=Symbol.for("react.lazy"),Kh=Symbol.iterator;function s_(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var Mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wg=Object.assign,Tg={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||Mg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bg(){}bg.prototype=Zs.prototype;function Tf(t,e,n){this.props=t,this.context=e,this.refs=Tg,this.updater=n||Mg}var bf=Tf.prototype=new bg;bf.constructor=Tf;wg(bf,Zs.prototype);bf.isPureReactComponent=!0;var Qh=Array.isArray,Cg=Object.prototype.hasOwnProperty,Cf={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cg.call(e,i)&&!Ag.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:so,type:t,key:s,ref:o,props:r,_owner:Cf.current}}function a_(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zh=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case so:case Yx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Hc(o,0):i,Qh(r)?(n="",t!=null&&(n=t.replace(Zh,"$&/")+"/"),hl(r,e,n,"",function(l){return l})):r!=null&&(Af(r)&&(r=a_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qh(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+Hc(s,a);o+=hl(s,e,n,c,r)}else if(c=s_(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+Hc(s,a++),o+=hl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},pl={transition:null},c_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Cf};function Pg(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:To,forEach:function(t,e,n){To(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return To(t,function(){e++}),e},toArray:function(t){return To(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Zs;Be.Fragment=Kx;Be.Profiler=Zx;Be.PureComponent=Tf;Be.StrictMode=Qx;Be.Suspense=n_;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;Be.act=Pg;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Cg.call(e,c)&&!Ag.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:e_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jx,_context:t},t.Consumer=t};Be.createElement=Rg;Be.createFactory=function(t){var e=Rg.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:t_,render:t}};Be.isValidElement=Af;Be.lazy=function(t){return{$$typeof:r_,_payload:{_status:-1,_result:t},_init:l_}};Be.memo=function(t,e){return{$$typeof:i_,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Be.unstable_act=Pg;Be.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Be.useContext=function(t){return Qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Be.useId=function(){return Qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Be.useRef=function(t){return Qt.current.useRef(t)};Be.useState=function(t){return Qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Qt.current.useTransition()};Be.version="18.3.1";Eg.exports=Be;var j=Eg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=j,d_=Symbol.for("react.element"),f_=Symbol.for("react.fragment"),h_=Object.prototype.hasOwnProperty,p_=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m_={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h_.call(e,i)&&!m_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d_,type:t,key:s,ref:o,props:r,_owner:p_.current}}pc.Fragment=f_;pc.jsx=Ng;pc.jsxs=Ng;Sg.exports=pc;var u=Sg.exports,Lg={exports:{}},vn={},Dg={exports:{}},Ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,H){var B=I.length;I.push(H);e:for(;0<B;){var Q=B-1>>>1,se=I[Q];if(0<r(se,H))I[Q]=H,I[B]=se,B=Q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var H=I[0],B=I.pop();if(B!==H){I[0]=B;e:for(var Q=0,se=I.length,De=se>>>1;Q<De;){var P=2*(Q+1)-1,ae=I[P],K=P+1,re=I[K];if(0>r(ae,B))K<se&&0>r(re,ae)?(I[Q]=re,I[K]=B,Q=K):(I[Q]=ae,I[P]=B,Q=P);else if(K<se&&0>r(re,B))I[Q]=re,I[K]=B,Q=K;else break e}}return H}function r(I,H){var B=I.sortIndex-H.sortIndex;return B!==0?B:I.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],l=[],d=1,f=null,h=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var H=n(l);H!==null;){if(H.callback===null)i(l);else if(H.startTime<=I)i(l),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(l)}}function S(I){if(y=!1,_(I),!x)if(n(c)!==null)x=!0,V(A);else{var H=n(l);H!==null&&Z(S,H.startTime-I)}}function A(I,H){x=!1,y&&(y=!1,p(N),N=-1),m=!0;var B=h;try{for(_(H),f=n(c);f!==null&&(!(f.expirationTime>H)||I&&!R());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var se=Q(f.expirationTime<=H);H=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(c)&&i(c),_(H)}else i(c);f=n(c)}if(f!==null)var De=!0;else{var P=n(l);P!==null&&Z(S,P.startTime-H),De=!1}return De}finally{f=null,h=B,m=!1}}var b=!1,C=null,N=-1,w=5,E=-1;function R(){return!(t.unstable_now()-E<w)}function z(){if(C!==null){var I=t.unstable_now();E=I;var H=!0;try{H=C(!0,I)}finally{H?k():(b=!1,C=null)}}else b=!1}var k;if(typeof v=="function")k=function(){v(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Y=q.port2;q.port1.onmessage=z,k=function(){Y.postMessage(null)}}else k=function(){g(z,0)};function V(I){C=I,b||(b=!0,k())}function Z(I,H){N=g(function(){I(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,V(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var B=h;h=H;try{return I()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=h;h=I;try{return H()}finally{h=B}},t.unstable_scheduleCallback=function(I,H,B){var Q=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,I){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=B+se,I={id:d++,callback:H,priorityLevel:I,startTime:B,expirationTime:se,sortIndex:-1},B>Q?(I.sortIndex=B,e(l,I),n(c)===null&&I===n(l)&&(y?(p(N),N=-1):y=!0,Z(S,B-Q))):(I.sortIndex=se,e(c,I),x||m||(x=!0,V(A))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var H=h;return function(){var B=h;h=H;try{return I.apply(this,arguments)}finally{h=B}}}})(Ig);Dg.exports=Ig;var g_=Dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=j,gn=g_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ug=new Set,ka={};function qr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(ka[t]=e,t=0;t<e.length;t++)Ug.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jh={},ep={};function __(t){return Xu.call(ep,t)?!0:Xu.call(Jh,t)?!1:x_.test(t)?ep[t]=!0:(Jh[t]=!0,!1)}function y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S_(t,e,n,i){if(e===null||typeof e>"u"||y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rf=/[\-:]([a-z])/g;function Pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S_(e,n,r,i)&&(n=null),i||r===null?__(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Og=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),kg=Symbol.for("react.offscreen"),tp=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Vc;function Ea(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Gc=!1;function Wc(t,e){if(!t||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function E_(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=Wc(t.type,!1),t;case 11:return t=Wc(t.type.render,!1),t;case 1:return t=Wc(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case $u:return"Profiler";case Lf:return"StrictMode";case qu:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Og:return(t.displayName||"Context")+".Consumer";case Fg:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function M_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w_(t){var e=jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=w_(t))}function zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bg(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Zu(t,e){Bg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ju(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ju(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ma=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ma(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Hg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ao,Gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T_=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){T_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function Wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var b_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nd(t,e){if(e){if(b_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function Uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sd=null,Ns=null,Ls=null;function ap(t){if(t=lo(t)){if(typeof sd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=_c(e),sd(t.stateNode,t.type,e))}}function $g(t){Ns?Ls?Ls.push(t):Ls=[t]:Ns=t}function qg(){if(Ns){var t=Ns,e=Ls;if(Ls=Ns=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function Yg(t,e){return t(e)}function Kg(){}var Xc=!1;function Qg(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return Yg(t,e,n)}finally{Xc=!1,(Ns!==null||Ls!==null)&&(Kg(),qg())}}function za(t,e){var n=t.stateNode;if(n===null)return null;var i=_c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var ad=!1;if(Ti)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){ad=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{ad=!1}function C_(t,e,n,i,r,s,o,a,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(d){this.onError(d)}}var Aa=!1,Ul=null,Fl=!1,od=null,A_={onError:function(t){Aa=!0,Ul=t}};function R_(t,e,n,i,r,s,o,a,c){Aa=!1,Ul=null,C_.apply(A_,arguments)}function P_(t,e,n,i,r,s,o,a,c){if(R_.apply(this,arguments),Aa){if(Aa){var l=Ul;Aa=!1,Ul=null}else throw Error(oe(198));Fl||(Fl=!0,od=l)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(Yr(t)!==t)throw Error(oe(188))}function N_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Jg(t){return t=N_(t),t!==null?e0(t):null}function e0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e0(t);if(e!==null)return e;t=t.sibling}return null}var t0=gn.unstable_scheduleCallback,lp=gn.unstable_cancelCallback,L_=gn.unstable_shouldYield,D_=gn.unstable_requestPaint,vt=gn.unstable_now,I_=gn.unstable_getCurrentPriorityLevel,Ff=gn.unstable_ImmediatePriority,n0=gn.unstable_UserBlockingPriority,Ol=gn.unstable_NormalPriority,U_=gn.unstable_LowPriority,i0=gn.unstable_IdlePriority,mc=null,Zn=null;function F_(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:j_,O_=Math.log,k_=Math.LN2;function j_(t){return t>>>=0,t===0?32:31-(O_(t)/k_|0)|0}var Ro=64,Po=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wa(a):(s&=o,s!==0&&(i=wa(s)))}else o=n&~r,o!==0?i=wa(o):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function z_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&i)&&(r[o]=z_(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r0(){var t=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function H_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function s0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a0,kf,o0,l0,c0,cd=!1,No=[],Ki=null,Qi=null,Zi=null,Ba=new Map,Ha=new Map,Gi=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&kf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function G_(t,e,n,i,r){switch(e){case"focusin":return Ki=oa(Ki,t,e,n,i,r),!0;case"dragenter":return Qi=oa(Qi,t,e,n,i,r),!0;case"mouseover":return Zi=oa(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,oa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,oa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function u0(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,c0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rd=i,n.target.dispatchEvent(i),rd=null}else return e=lo(n),e!==null&&kf(e),t.blockedOn=n,!1;e.shift()}return!0}function up(t,e,n){ml(t)&&n.delete(e)}function W_(){cd=!1,Ki!==null&&ml(Ki)&&(Ki=null),Qi!==null&&ml(Qi)&&(Qi=null),Zi!==null&&ml(Zi)&&(Zi=null),Ba.forEach(up),Ha.forEach(up)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,cd||(cd=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,W_)))}function Va(t){function e(r){return la(r,t)}if(0<No.length){la(No[0],t);for(var n=1;n<No.length;n++){var i=No[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&la(Ki,t),Qi!==null&&la(Qi,t),Zi!==null&&la(Zi,t),Ba.forEach(e),Ha.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&Gi.shift()}var Ds=Li.ReactCurrentBatchConfig,jl=!0;function X_(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=1,jf(t,e,n,i)}finally{et=r,Ds.transition=s}}function $_(t,e,n,i){var r=et,s=Ds.transition;Ds.transition=null;try{et=4,jf(t,e,n,i)}finally{et=r,Ds.transition=s}}function jf(t,e,n,i){if(jl){var r=ud(t,e,n,i);if(r===null)iu(t,e,i,zl,n),cp(t,i);else if(G_(r,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<V_.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&a0(s),s=ud(t,e,n,i),s===null&&iu(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(t,e,i,null,n)}}var zl=null;function ud(t,e,n,i){if(zl=null,t=Uf(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function d0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I_()){case Ff:return 1;case n0:return 4;case Ol:case U_:return 16;case i0:return 536870912;default:return 16}default:return 16}}var qi=null,zf=null,gl=null;function f0(){if(gl)return gl;var t,e=zf,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function dp(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:dp,this.isPropagationStopped=dp,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=xn(Js),oo=dt({},Js,{view:0,detail:0}),q_=xn(oo),qc,Yc,ca,gc=dt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(qc=t.screenX-ca.screenX,Yc=t.screenY-ca.screenY):Yc=qc=0,ca=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),fp=xn(gc),Y_=dt({},gc,{dataTransfer:0}),K_=xn(Y_),Q_=dt({},oo,{relatedTarget:0}),Kc=xn(Q_),Z_=dt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=xn(Z_),ey=dt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=xn(ey),ny=dt({},Js,{data:0}),hp=xn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function Hf(){return ay}var oy=dt({},oo,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=xn(oy),cy=dt({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=xn(cy),uy=dt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),dy=xn(uy),fy=dt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=xn(fy),py=dt({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=xn(py),gy=[9,13,27,32],Vf=Ti&&"CompositionEvent"in window,Ra=null;Ti&&"documentMode"in document&&(Ra=document.documentMode);var vy=Ti&&"TextEvent"in window&&!Ra,h0=Ti&&(!Vf||Ra&&8<Ra&&11>=Ra),mp=" ",gp=!1;function p0(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function xy(t,e){switch(t){case"compositionend":return m0(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function _y(t,e){if(xs)return t==="compositionend"||!Vf&&p0(t,e)?(t=f0(),gl=zf=qi=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function g0(t,e,n,i){$g(i),e=Bl(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Pa=null,Ga=null;function Sy(t){C0(t,0)}function vc(t){var e=Ss(t);if(zg(e))return t}function Ey(t,e){if(t==="change")return e}var v0=!1;if(Ti){var Qc;if(Ti){var Zc="oninput"in document;if(!Zc){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),Zc=typeof xp.oninput=="function"}Qc=Zc}else Qc=!1;v0=Qc&&(!document.documentMode||9<document.documentMode)}function _p(){Pa&&(Pa.detachEvent("onpropertychange",x0),Ga=Pa=null)}function x0(t){if(t.propertyName==="value"&&vc(Ga)){var e=[];g0(e,Ga,t,Uf(t)),Qg(Sy,e)}}function My(t,e,n){t==="focusin"?(_p(),Pa=e,Ga=n,Pa.attachEvent("onpropertychange",x0)):t==="focusout"&&_p()}function wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Ga)}function Ty(t,e){if(t==="click")return vc(e)}function by(t,e){if(t==="input"||t==="change")return vc(e)}function Cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Cy;function Wa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function _0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y0(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ay(t){var e=y0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_0(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sp(n,s);var o=Sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ry=Ti&&"documentMode"in document&&11>=document.documentMode,_s=null,dd=null,Na=null,fd=!1;function Ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||_s==null||_s!==Il(i)||(i=_s,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Na&&Wa(Na,i)||(Na=i,i=Bl(dd,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function Do(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Jc={},S0={};Ti&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function xc(t){if(Jc[t])return Jc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return Jc[t]=e[n];return t}var E0=xc("animationend"),M0=xc("animationiteration"),w0=xc("animationstart"),T0=xc("transitionend"),b0=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){b0.set(t,e),qr(e,[t])}for(var eu=0;eu<Mp.length;eu++){var tu=Mp[eu],Py=tu.toLowerCase(),Ny=tu[0].toUpperCase()+tu.slice(1);ur(Py,"on"+Ny)}ur(E0,"onAnimationEnd");ur(M0,"onAnimationIteration");ur(w0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(T0,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,P_(i,e,void 0,t),t.currentTarget=null}function C0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,l=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;wp(r,a,l),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,l=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;wp(r,a,l),s=c}}}if(Fl)throw t=od,Fl=!1,od=null,t}function it(t,e){var n=e[vd];n===void 0&&(n=e[vd]=new Set);var i=t+"__bubble";n.has(i)||(A0(e,t,2,!1),n.add(i))}function nu(t,e,n){var i=0;e&&(i|=4),A0(n,t,i,e)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Io]){t[Io]=!0,Ug.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||nu(n,!1,t),nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Io]||(e[Io]=!0,nu("selectionchange",!1,e))}}function A0(t,e,n,i){switch(d0(e)){case 1:var r=X_;break;case 4:r=$_;break;default:r=jf}n=r.bind(null,e,n,t),r=void 0,!ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qg(function(){var l=s,d=Uf(n),f=[];e:{var h=b0.get(t);if(h!==void 0){var m=Bf,x=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":m=ly;break;case"focusin":x="focus",m=Kc;break;case"focusout":x="blur",m=Kc;break;case"beforeblur":case"afterblur":m=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dy;break;case E0:case M0:case w0:m=J_;break;case T0:m=hy;break;case"scroll":m=q_;break;case"wheel":m=my;break;case"copy":case"cut":case"paste":m=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pp}var y=(e&4)!==0,g=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var v=l,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,p!==null&&(S=za(v,p),S!=null&&y.push($a(v,S,_)))),g)break;v=v.return}0<y.length&&(h=new m(h,x,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==rd&&(x=n.relatedTarget||n.fromElement)&&(Lr(x)||x[bi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=l,x=x?Lr(x):null,x!==null&&(g=Yr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=l),m!==x)){if(y=fp,S="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=pp,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=m==null?h:Ss(m),_=x==null?h:Ss(x),h=new y(S,v+"leave",m,n,d),h.target=g,h.relatedTarget=_,S=null,Lr(d)===l&&(y=new y(p,v+"enter",x,n,d),y.target=_,y.relatedTarget=g,S=y),g=S,m&&x)t:{for(y=m,p=x,v=0,_=y;_;_=Zr(_))v++;for(_=0,S=p;S;S=Zr(S))_++;for(;0<v-_;)y=Zr(y),v--;for(;0<_-v;)p=Zr(p),_--;for(;v--;){if(y===p||p!==null&&y===p.alternate)break t;y=Zr(y),p=Zr(p)}y=null}else y=null;m!==null&&Tp(f,h,m,y,!1),x!==null&&g!==null&&Tp(f,g,x,y,!0)}}e:{if(h=l?Ss(l):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var A=Ey;else if(vp(h))if(v0)A=by;else{A=wy;var b=My}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Ty);if(A&&(A=A(t,l))){g0(f,A,n,d);break e}b&&b(t,h,l),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Ju(h,"number",h.value)}switch(b=l?Ss(l):window,t){case"focusin":(vp(b)||b.contentEditable==="true")&&(_s=b,dd=l,Na=null);break;case"focusout":Na=dd=_s=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Ep(f,n,d);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Ep(f,n,d)}var C;if(Vf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else xs?p0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(h0&&n.locale!=="ko"&&(xs||N!=="onCompositionStart"?N==="onCompositionEnd"&&xs&&(C=f0()):(qi=d,zf="value"in qi?qi.value:qi.textContent,xs=!0)),b=Bl(l,N),0<b.length&&(N=new hp(N,t,null,n,d),f.push({event:N,listeners:b}),C?N.data=C:(C=m0(n),C!==null&&(N.data=C)))),(C=vy?xy(t,n):_y(t,n))&&(l=Bl(l,"onBeforeInput"),0<l.length&&(d=new hp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:l}),d.data=C))}C0(f,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=za(t,n),s!=null&&i.unshift($a(t,s,r)),s=za(t,e),s!=null&&i.push($a(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,c=a.alternate,l=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&l!==null&&(a=l,r?(c=za(n,s),c!=null&&o.unshift($a(n,c,a))):r||(c=za(n,s),c!=null&&o.push($a(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function bp(t){return(typeof t=="string"?t:""+t).replace(Dy,`
`).replace(Iy,"")}function Uo(t,e,n){if(e=bp(e),bp(t)!==e&&n)throw Error(oe(425))}function Hl(){}var hd=null,pd=null;function md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(Oy)}:gd;function Oy(t){setTimeout(function(){throw t})}function ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ea,qa="__reactProps$"+ea,bi="__reactContainer$"+ea,vd="__reactEvents$"+ea,ky="__reactListeners$"+ea,jy="__reactHandles$"+ea;function Lr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ap(t);t!==null;){if(n=t[Yn])return n;t=Ap(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[Yn]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function _c(t){return t[qa]||null}var xd=[],Es=-1;function dr(t){return{current:t}}function st(t){0>Es||(t.current=xd[Es],xd[Es]=null,Es--)}function nt(t,e){Es++,xd[Es]=t.current,t.current=e}var or={},Wt=dr(or),rn=dr(!1),Br=or;function zs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Vl(){st(rn),st(Wt)}function Rp(t,e,n){if(Wt.current!==or)throw Error(oe(168));nt(Wt,e),nt(rn,n)}function R0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,M_(t)||"Unknown",r));return dt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Br=Wt.current,nt(Wt,t),nt(rn,rn.current),!0}function Pp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=R0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,st(rn),st(Wt),nt(Wt,t)):st(rn),nt(rn,n)}var gi=null,yc=!1,su=!1;function P0(t){gi===null?gi=[t]:gi.push(t)}function zy(t){yc=!0,P0(t)}function fr(){if(!su&&gi!==null){su=!0;var t=0,e=et;try{var n=gi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,yc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),t0(Ff,fr),r}finally{et=e,su=!1}}return null}var Ms=[],ws=0,Wl=null,Xl=0,Sn=[],En=0,Hr=null,xi=1,_i="";function br(t,e){Ms[ws++]=Xl,Ms[ws++]=Wl,Wl=t,Xl=e}function N0(t,e,n){Sn[En++]=xi,Sn[En++]=_i,Sn[En++]=Hr,Hr=t;var i=xi;t=_i;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-zn(e)+r|n<<r|i,_i=s+t}else xi=1<<s|n<<r|i,_i=t}function Wf(t){t.return!==null&&(br(t,1),N0(t,1,0))}function Xf(t){for(;t===Wl;)Wl=Ms[--ws],Ms[ws]=null,Xl=Ms[--ws],Ms[ws]=null;for(;t===Hr;)Hr=Sn[--En],Sn[En]=null,_i=Sn[--En],Sn[En]=null,xi=Sn[--En],Sn[En]=null}var mn=null,pn=null,at=!1,On=null;function L0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:xi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function _d(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(at){var e=pn;if(e){var n=e;if(!Np(t,e)){if(_d(t))throw Error(oe(418));e=Ji(n.nextSibling);var i=mn;e&&Np(t,e)?L0(i,n):(t.flags=t.flags&-4097|2,at=!1,mn=t)}}else{if(_d(t))throw Error(oe(418));t.flags=t.flags&-4097|2,at=!1,mn=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Fo(t){if(t!==mn)return!1;if(!at)return Lp(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!md(t.type,t.memoizedProps)),e&&(e=pn)){if(_d(t))throw D0(),Error(oe(418));for(;e;)L0(t,e),e=Ji(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Ji(t.stateNode.nextSibling):null;return!0}function D0(){for(var t=pn;t;)t=Ji(t.nextSibling)}function Bs(){pn=mn=null,at=!1}function $f(t){On===null?On=[t]:On.push(t)}var By=Li.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Oo(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function I0(t){function e(p,v){if(t){var _=p.deletions;_===null?(p.deletions=[v],p.flags|=16):_.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=ir(p,v),p.index=0,p.sibling=null,p}function s(p,v,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<v?(p.flags|=2,v):_):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,v,_,S){return v===null||v.tag!==6?(v=fu(_,p.mode,S),v.return=p,v):(v=r(v,_),v.return=p,v)}function c(p,v,_,S){var A=_.type;return A===vs?d(p,v,_.props.children,S,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hi&&Dp(A)===v.type)?(S=r(v,_.props),S.ref=ua(p,v,_),S.return=p,S):(S=wl(_.type,_.key,_.props,null,p.mode,S),S.ref=ua(p,v,_),S.return=p,S)}function l(p,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=hu(_,p.mode,S),v.return=p,v):(v=r(v,_.children||[]),v.return=p,v)}function d(p,v,_,S,A){return v===null||v.tag!==7?(v=zr(_,p.mode,S,A),v.return=p,v):(v=r(v,_),v.return=p,v)}function f(p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fu(""+v,p.mode,_),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return _=wl(v.type,v.key,v.props,null,p.mode,_),_.ref=ua(p,null,v),_.return=p,_;case gs:return v=hu(v,p.mode,_),v.return=p,v;case Hi:var S=v._init;return f(p,S(v._payload),_)}if(Ma(v)||sa(v))return v=zr(v,p.mode,_,null),v.return=p,v;Oo(p,v)}return null}function h(p,v,_,S){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(p,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case bo:return _.key===A?c(p,v,_,S):null;case gs:return _.key===A?l(p,v,_,S):null;case Hi:return A=_._init,h(p,v,A(_._payload),S)}if(Ma(_)||sa(_))return A!==null?null:d(p,v,_,S,null);Oo(p,_)}return null}function m(p,v,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(_)||null,a(v,p,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bo:return p=p.get(S.key===null?_:S.key)||null,c(v,p,S,A);case gs:return p=p.get(S.key===null?_:S.key)||null,l(v,p,S,A);case Hi:var b=S._init;return m(p,v,_,b(S._payload),A)}if(Ma(S)||sa(S))return p=p.get(_)||null,d(v,p,S,A,null);Oo(v,S)}return null}function x(p,v,_,S){for(var A=null,b=null,C=v,N=v=0,w=null;C!==null&&N<_.length;N++){C.index>N?(w=C,C=null):w=C.sibling;var E=h(p,C,_[N],S);if(E===null){C===null&&(C=w);break}t&&C&&E.alternate===null&&e(p,C),v=s(E,v,N),b===null?A=E:b.sibling=E,b=E,C=w}if(N===_.length)return n(p,C),at&&br(p,N),A;if(C===null){for(;N<_.length;N++)C=f(p,_[N],S),C!==null&&(v=s(C,v,N),b===null?A=C:b.sibling=C,b=C);return at&&br(p,N),A}for(C=i(p,C);N<_.length;N++)w=m(C,p,N,_[N],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?N:w.key),v=s(w,v,N),b===null?A=w:b.sibling=w,b=w);return t&&C.forEach(function(R){return e(p,R)}),at&&br(p,N),A}function y(p,v,_,S){var A=sa(_);if(typeof A!="function")throw Error(oe(150));if(_=A.call(_),_==null)throw Error(oe(151));for(var b=A=null,C=v,N=v=0,w=null,E=_.next();C!==null&&!E.done;N++,E=_.next()){C.index>N?(w=C,C=null):w=C.sibling;var R=h(p,C,E.value,S);if(R===null){C===null&&(C=w);break}t&&C&&R.alternate===null&&e(p,C),v=s(R,v,N),b===null?A=R:b.sibling=R,b=R,C=w}if(E.done)return n(p,C),at&&br(p,N),A;if(C===null){for(;!E.done;N++,E=_.next())E=f(p,E.value,S),E!==null&&(v=s(E,v,N),b===null?A=E:b.sibling=E,b=E);return at&&br(p,N),A}for(C=i(p,C);!E.done;N++,E=_.next())E=m(C,p,N,E.value,S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?N:E.key),v=s(E,v,N),b===null?A=E:b.sibling=E,b=E);return t&&C.forEach(function(z){return e(p,z)}),at&&br(p,N),A}function g(p,v,_,S){if(typeof _=="object"&&_!==null&&_.type===vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case bo:e:{for(var A=_.key,b=v;b!==null;){if(b.key===A){if(A=_.type,A===vs){if(b.tag===7){n(p,b.sibling),v=r(b,_.props.children),v.return=p,p=v;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hi&&Dp(A)===b.type){n(p,b.sibling),v=r(b,_.props),v.ref=ua(p,b,_),v.return=p,p=v;break e}n(p,b);break}else e(p,b);b=b.sibling}_.type===vs?(v=zr(_.props.children,p.mode,S,_.key),v.return=p,p=v):(S=wl(_.type,_.key,_.props,null,p.mode,S),S.ref=ua(p,v,_),S.return=p,p=S)}return o(p);case gs:e:{for(b=_.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(p,v.sibling),v=r(v,_.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=hu(_,p.mode,S),v.return=p,p=v}return o(p);case Hi:return b=_._init,g(p,v,b(_._payload),S)}if(Ma(_))return x(p,v,_,S);if(sa(_))return y(p,v,_,S);Oo(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(p,v.sibling),v=r(v,_),v.return=p,p=v):(n(p,v),v=fu(_,p.mode,S),v.return=p,p=v),o(p)):n(p,v)}return g}var Hs=I0(!0),U0=I0(!1),$l=dr(null),ql=null,Ts=null,qf=null;function Yf(){qf=Ts=ql=null}function Kf(t){var e=$l.current;st($l),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){ql=t,qf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(ql===null)throw Error(oe(308));Ts=t,ql.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Dr=null;function Qf(t){Dr===null?Dr=[t]:Dr.push(t)}function F0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,l=c.next;c.next=null,o===null?s=l:o.next=l,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;o=0,d=l=c=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=dt({},f,h);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(l=d=m,c=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(c=f),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=f}}function Up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var co={},Jn=dr(co),Ya=dr(co),Ka=dr(co);function Ir(t){if(t===co)throw Error(oe(174));return t}function Jf(t,e){switch(nt(Ka,e),nt(Ya,t),nt(Jn,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=td(e,t)}st(Jn),nt(Jn,e)}function Vs(){st(Jn),st(Ya),st(Ka)}function k0(t){Ir(Ka.current);var e=Ir(Jn.current),n=td(e,t.type);e!==n&&(nt(Ya,t),nt(Jn,n))}function eh(t){Ya.current===t&&(st(Jn),st(Ya))}var lt=dr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var au=[];function th(){for(var t=0;t<au.length;t++)au[t]._workInProgressVersionPrimary=null;au.length=0}var _l=Li.ReactCurrentDispatcher,ou=Li.ReactCurrentBatchConfig,Vr=0,ct=null,wt=null,Pt=null,Ql=!1,La=!1,Qa=0,Hy=0;function Ot(){throw Error(oe(321))}function nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function ih(t,e,n,i,r,s){if(Vr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?Xy:$y,t=n(i,r),La){s=0;do{if(La=!1,Qa=0,25<=s)throw Error(oe(301));s+=1,Pt=wt=null,e.updateQueue=null,_l.current=qy,t=n(i,r)}while(La)}if(_l.current=Zl,e=wt!==null&&wt.next!==null,Vr=0,Pt=wt=ct=null,Ql=!1,e)throw Error(oe(300));return t}function rh(){var t=Qa!==0;return Qa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ct.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function An(){if(wt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ct.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(oe(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ct.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Za(t,e){return typeof e=="function"?e(t):e}function lu(t){var e=An(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,c=null,l=s;do{var d=l.lane;if((Vr&d)===d)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var f={lane:d,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(a=c=f,o=i):c=c.next=f,ct.lanes|=d,Gr|=d}l=l.next}while(l!==null&&l!==s);c===null?o=i:c.next=a,Hn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cu(t){var e=An(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function j0(){}function z0(t,e){var n=ct,i=An(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,sh(V0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Ja(9,H0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(oe(349));Vr&30||B0(n,e,r)}return r}function B0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H0(t,e,n,i){e.value=n,e.getSnapshot=i,G0(e)&&W0(t)}function V0(t,e,n){return n(function(){G0(e)&&W0(t)})}function G0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function W0(t){var e=Ci(t,1);e!==null&&Bn(e,t,1,-1)}function Fp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,ct,t),[e.memoizedState,t]}function Ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function X0(){return An().memoizedState}function yl(t,e,n,i){var r=Xn();ct.flags|=t,r.memoizedState=Ja(1|e,n,void 0,i===void 0?null:i)}function Sc(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&nh(i,o.deps)){r.memoizedState=Ja(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Ja(1|e,n,s,i)}function Op(t,e){return yl(8390656,8,t,e)}function sh(t,e){return Sc(2048,8,t,e)}function $0(t,e){return Sc(4,2,t,e)}function q0(t,e){return Sc(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K0(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,Y0.bind(null,e,t),n)}function ah(){}function Q0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function J0(t,e,n){return Vr&21?(Hn(n,e)||(n=r0(),ct.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Vy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=ou.transition;ou.transition={};try{t(!1),e()}finally{et=n,ou.transition=i}}function ev(){return An().memoizedState}function Gy(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tv(t))nv(e,n);else if(n=F0(t,e,n,i),n!==null){var r=Yt();Bn(n,t,i,r),iv(n,e,i)}}function Wy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tv(t))nv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var c=e.interleaved;c===null?(r.next=r,Qf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=F0(t,e,r,i),n!==null&&(r=Yt(),Bn(n,t,i,r),iv(n,e,i))}}function tv(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function nv(t,e){La=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}var Zl={readContext:Cn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Xy={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gy.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Fp,useDebugValue:ah,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Fp(!1),e=t[0];return t=Vy.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Xn();if(at){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Nt===null)throw Error(oe(349));Vr&30||B0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Op(V0.bind(null,i,s,t),[t]),i.flags|=2048,Ja(9,H0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Nt.identifierPrefix;if(at){var n=_i,i=xi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$y={readContext:Cn,useCallback:Q0,useContext:Cn,useEffect:sh,useImperativeHandle:K0,useInsertionEffect:$0,useLayoutEffect:q0,useMemo:Z0,useReducer:lu,useRef:X0,useState:function(){return lu(Za)},useDebugValue:ah,useDeferredValue:function(t){var e=An();return J0(e,wt.memoizedState,t)},useTransition:function(){var t=lu(Za)[0],e=An().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:z0,useId:ev,unstable_isNewReconciler:!1},qy={readContext:Cn,useCallback:Q0,useContext:Cn,useEffect:sh,useImperativeHandle:K0,useInsertionEffect:$0,useLayoutEffect:q0,useMemo:Z0,useReducer:cu,useRef:X0,useState:function(){return cu(Za)},useDebugValue:ah,useDeferredValue:function(t){var e=An();return wt===null?e.memoizedState=t:J0(e,wt.memoizedState,t)},useTransition:function(){var t=cu(Za)[0],e=An().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:z0,useId:ev,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=nr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Bn(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=nr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Bn(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=nr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Bn(e,t,i,n),xl(e,t,i))}};function kp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function rv(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?Br:Wt.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?Br:Wt.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ec||(ec=!0,Id=i),wd(t,e)},n}function av(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=c1.bind(null,t,e,n),e.then(t,t))}function Bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Ky=Li.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?U0(e,null,n,i):Hs(e,t.child,n,i)}function Vp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=ih(t,e,n,i,s,r),n=rh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(at&&n&&Wf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ph(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ov(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return Td(t,e,n,i,r)}function lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Cs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Cs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Cs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Cs,hn),hn|=i;return qt(t,e,r,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Td(t,e,n,i,r){var s=sn(n)?Br:Wt.current;return s=zs(e,s),Is(e,r),n=ih(t,e,n,i,s,r),i=rh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(at&&i&&Wf(e),e.flags|=1,qt(t,e,n,r),e.child)}function Wp(t,e,n,i,r){if(sn(n)){var s=!0;Gl(e)}else s=!1;if(Is(e,r),e.stateNode===null)Sl(t,e),rv(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?Br:Wt.current,l=zs(e,l));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==l)&&jp(e,o,i,l),Vi=!1;var h=e.memoizedState;o.state=h,Yl(e,i,o,r),c=e.memoizedState,a!==i||h!==c||rn.current||Vi?(typeof d=="function"&&(Ed(e,n,d,i),c=e.memoizedState),(a=Vi||kp(e,n,a,i,h,c,l))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=l,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,O0(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Un(e.type,a),o.props=l,f=e.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=sn(n)?Br:Wt.current,c=zs(e,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==c)&&jp(e,o,i,c),Vi=!1,h=e.memoizedState,o.state=h,Yl(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||rn.current||Vi?(typeof m=="function"&&(Ed(e,n,m,i),x=e.memoizedState),(l=Vi||kp(e,n,l,i,h,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=c,i=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return bd(t,e,n,i,s,r)}function bd(t,e,n,i,r,s){cv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pp(e,n,!1),Ai(t,e,s);i=e.stateNode,Ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Pp(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?Rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rp(t,e.context,!1),Jf(t,e.containerInfo)}function Xp(t,e,n,i,r){return Bs(),$f(r),e.flags|=256,qt(t,e,n,i),e.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ad(n),e.memoizedState=Cd,t):oh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Qy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ir(r,c),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function oh(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,i){return i!==null&&$f(i),Hs(e,t.child,null,n),t=oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=uu(Error(oe(422))),ko(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Cd,s);if(!(e.mode&1))return ko(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=uu(s,i,void 0),ko(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Bn(i,t,r,-1))}return hh(),i=uu(Error(oe(421))),ko(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=u1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Ji(r.nextSibling),mn=e,at=!0,On=null,t!==null&&(Sn[En++]=xi,Sn[En++]=_i,Sn[En++]=Hr,xi=t.id,_i=t.overflow,Hr=e),e=oh(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sd(t.return,e,n)}function du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}du(e,!0,n,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zy(t,e,n){switch(e.tag){case 3:uv(e),Bs();break;case 5:k0(e);break;case 1:sn(e.type)&&Gl(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(nt(lt,lt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,lv(t,e,n)}return Ai(t,e,n)}var hv,Rd,pv,mv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(Jn.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=ed(t,r),i=ed(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}nd(n,i);var o;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var a=r[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ka.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(a=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==a&&(c!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ka.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&it("scroll",t),s||a===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};mv=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jy(t,e,n){var i=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return sn(e.type)&&Vl(),kt(e),null;case 3:return i=e.stateNode,Vs(),st(rn),st(Wt),th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Od(On),On=null))),Rd(t,e),kt(e),null;case 5:eh(e);var r=Ir(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return kt(e),null}if(t=Ir(Jn.current),Fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[qa]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ta.length;r++)it(Ta[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":np(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":rp(i,s),it("invalid",i)}nd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Uo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Uo(i.textContent,a,t),r=["children",""+a]):ka.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Co(i),ip(i,s,!0);break;case"textarea":Co(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[qa]=i,hv(t,e,!1,!1),e.stateNode=t;e:{switch(o=id(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ta.length;r++)it(Ta[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":np(t,i),r=Qu(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),it("invalid",t);break;case"textarea":rp(t,i),r=ed(t,i),it("invalid",t);break;default:r=i}nd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?Xg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ja(t,c):typeof c=="number"&&ja(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ka.hasOwnProperty(s)?c!=null&&s==="onScroll"&&it("scroll",t):c!=null&&Nf(t,s,c,o))}switch(n){case"input":Co(t),ip(t,i,!1);break;case"textarea":Co(t),sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)mv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Ir(Ka.current),Ir(Jn.current),Fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return kt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&pn!==null&&e.mode&1&&!(e.flags&128))D0(),Bs(),e.flags|=98560,s=!1;else if(s=Fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Yn]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else On!==null&&(Od(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?bt===0&&(bt=3):hh())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Vs(),Rd(t,e),t===null&&Xa(e.stateNode.containerInfo),kt(e),null;case 10:return Kf(e.type._context),kt(e),null;case 17:return sn(e.type)&&Vl(),kt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)da(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,da(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Ws&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return kt(e),null}else 2*vt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function e1(t,e){switch(Xf(e),e.tag){case 1:return sn(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),st(rn),st(Wt),th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return eh(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Vs(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return fh(),null;case 24:return null;default:return null}}var jo=!1,Bt=!1,t1=typeof WeakSet=="function"?WeakSet:Set,ve=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Pd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var qp=!1;function n1(t,e){if(hd=jl,t=y0(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,l=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(c=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++l===r&&(a=o),h===s&&++d===i&&(c=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(pd={focusedElem:t,selectionRange:n},jl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=qp,qp=!1,x}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pd(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[qa],delete e[vd],delete e[ky],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var It=null,Fn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:Bt||bs(n,e);case 6:var i=It,r=Fn;It=null,Ii(t,e,n),It=i,Fn=r,It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?ru(t.parentNode,n):t.nodeType===1&&ru(t,n),Va(t)):ru(It,n.stateNode));break;case 4:i=It,r=Fn,It=n.stateNode.containerInfo,Fn=!0,Ii(t,e,n),It=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pd(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Bt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ii(t,e,n),Bt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new t1),e.forEach(function(i){var r=d1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Fn=!1;break e;case 3:It=a.stateNode.containerInfo,Fn=!0;break e;case 4:It=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(It===null)throw Error(oe(160));xv(s,o,r),It=null,Fn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){mt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_v(e,t),e=e.sibling}function _v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),i&4){try{Da(3,t,t.return),Mc(3,t)}catch(y){mt(t,t.return,y)}try{Da(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Nn(e,t),Wn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(Nn(e,t),Wn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bg(r,s),id(a,o);var l=id(a,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?Xg(r,f):d==="dangerouslySetInnerHTML"?Gg(r,f):d==="children"?ja(r,f):Nf(r,d,f,l)}switch(a){case"input":Zu(r,s);break;case"textarea":Hg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Nn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Nn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uh=vt())),i&4&&Kp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(l=Bt)||d,Nn(e,t),Bt=l):Nn(e,t),Wn(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!d&&t.mode&1)for(ve=t,d=t.child;d!==null;){for(f=ve=d;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:Da(4,h,h.return);break;case 1:bs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){Zp(f);continue}}m!==null?(m.return=h,ve=m):Zp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Wg("display",o))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nn(e,t),Wn(t),i&4&&Kp(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=Yp(t);Dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yp(t);Ld(t,a,o);break;default:throw Error(oe(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function i1(t,e,n){ve=t,yv(t)}function yv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||jo;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||Bt;a=jo;var l=Bt;if(jo=o,(Bt=c)&&!l)for(ve=r;ve!==null;)o=ve,c=o.child,o.tag===22&&o.memoizedState!==null?Jp(r):c!==null?(c.return=o,ve=c):Jp(r);for(;s!==null;)ve=s,yv(s),s=s.sibling;ve=r,jo=a,Bt=l}Qp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Qp(t)}}function Qp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var d=l.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Bt||e.flags&512&&Nd(e)}catch(h){mt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Zp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Jp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{Nd(e)}catch(c){mt(e,s,c)}break;case 5:var o=e.return;try{Nd(e)}catch(c){mt(e,o,c)}}}catch(c){mt(e,e.return,c)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var r1=Math.ceil,Jl=Li.ReactCurrentDispatcher,lh=Li.ReactCurrentOwner,bn=Li.ReactCurrentBatchConfig,We=0,Nt=null,Mt=null,Ut=0,hn=0,Cs=dr(0),bt=0,eo=null,Gr=0,wc=0,ch=0,Ia=null,en=null,uh=0,Ws=1/0,mi=null,ec=!1,Id=null,tr=null,zo=!1,Yi=null,tc=0,Ua=0,Ud=null,El=-1,Ml=0;function Yt(){return We&6?vt():El!==-1?El:El=vt()}function nr(t){return t.mode&1?We&2&&Ut!==0?Ut&-Ut:By.transition!==null?(Ml===0&&(Ml=r0()),Ml):(t=et,t!==0||(t=window.event,t=t===void 0?16:d0(t.type)),t):1}function Bn(t,e,n,i){if(50<Ua)throw Ua=0,Ud=null,Error(oe(185));ao(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&(wc|=n),bt===4&&Wi(t,Ut)),an(t,i),n===1&&We===0&&!(e.mode&1)&&(Ws=vt()+500,yc&&fr()))}function an(t,e){var n=t.callbackNode;B_(t,e);var i=kl(t,t===Nt?Ut:0);if(i===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?zy(em.bind(null,t)):P0(em.bind(null,t)),Fy(function(){!(We&6)&&fr()}),n=null;else{switch(s0(i)){case 1:n=Ff;break;case 4:n=n0;break;case 16:n=Ol;break;case 536870912:n=i0;break;default:n=Ol}n=Av(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(El=-1,Ml=0,We&6)throw Error(oe(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=kl(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nc(t,i);else{e=i;var r=We;We|=2;var s=Mv();(Nt!==t||Ut!==e)&&(mi=null,Ws=vt()+500,jr(t,e));do try{o1();break}catch(a){Ev(t,a)}while(!0);Yf(),Jl.current=s,We=r,Mt!==null?e=0:(Nt=null,Ut=0,e=bt)}if(e!==0){if(e===2&&(r=ld(t),r!==0&&(i=r,e=Fd(t,r))),e===1)throw n=eo,jr(t,0),Wi(t,i),an(t,vt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!s1(r)&&(e=nc(t,i),e===2&&(s=ld(t),s!==0&&(i=s,e=Fd(t,s))),e===1))throw n=eo,jr(t,0),Wi(t,i),an(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Cr(t,en,mi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=uh+500-vt(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gd(Cr.bind(null,t,en,mi),e);break}Cr(t,en,mi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*r1(i/1960))-i,10<i){t.timeoutHandle=gd(Cr.bind(null,t,en,mi),i);break}Cr(t,en,mi);break;case 5:Cr(t,en,mi);break;default:throw Error(oe(329))}}}return an(t,vt()),t.callbackNode===n?Sv.bind(null,t):null}function Fd(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=nc(t,e),t!==2&&(e=en,en=n,e!==null&&Od(e)),t}function Od(t){en===null?en=t:en.push.apply(en,t)}function s1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~ch,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if(We&6)throw Error(oe(327));Us();var e=kl(t,0);if(!(e&1))return an(t,vt()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var i=ld(t);i!==0&&(e=i,n=Fd(t,i))}if(n===1)throw n=eo,jr(t,0),Wi(t,e),an(t,vt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,en,mi),an(t,vt()),null}function dh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ws=vt()+500,yc&&fr())}}function Wr(t){Yi!==null&&Yi.tag===0&&!(We&6)&&Us();var e=We;We|=1;var n=bn.transition,i=et;try{if(bn.transition=null,et=1,t)return t()}finally{et=i,bn.transition=n,We=e,!(We&6)&&fr()}}function fh(){hn=Cs.current,st(Cs)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Vs(),st(rn),st(Wt),th();break;case 5:eh(i);break;case 4:Vs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Kf(i.type._context);break;case 22:case 23:fh()}n=n.return}if(Nt=t,Mt=t=ir(t.current,null),Ut=hn=e,bt=0,eo=null,ch=wc=Gr=0,en=Ia=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function Ev(t,e){do{var n=Mt;try{if(Yf(),_l.current=Zl,Ql){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Vr=0,Pt=wt=ct=null,La=!1,Qa=0,lh.current=null,n===null||n.return===null){bt=1,eo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=Ut,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Bp(o);if(m!==null){m.flags&=-257,Hp(m,o,a,s,e),m.mode&1&&zp(s,l,e),e=m,c=l;var x=e.updateQueue;if(x===null){var y=new Set;y.add(c),e.updateQueue=y}else x.add(c);break e}else{if(!(e&1)){zp(s,l,e),hh();break e}c=Error(oe(426))}}else if(at&&a.mode&1){var g=Bp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Hp(g,o,a,s,e),$f(Gs(c,a));break e}}s=c=Gs(c,a),bt!==4&&(bt=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=sv(s,c,e);Ip(s,p);break e;case 1:a=c;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(tr===null||!tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=av(s,a,e);Ip(s,S);break e}}s=s.return}while(s!==null)}Tv(n)}catch(A){e=A,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Mv(){var t=Jl.current;return Jl.current=Zl,t===null?Zl:t}function hh(){(bt===0||bt===3||bt===2)&&(bt=4),Nt===null||!(Gr&268435455)&&!(wc&268435455)||Wi(Nt,Ut)}function nc(t,e){var n=We;We|=2;var i=Mv();(Nt!==t||Ut!==e)&&(mi=null,jr(t,e));do try{a1();break}catch(r){Ev(t,r)}while(!0);if(Yf(),We=n,Jl.current=i,Mt!==null)throw Error(oe(261));return Nt=null,Ut=0,bt}function a1(){for(;Mt!==null;)wv(Mt)}function o1(){for(;Mt!==null&&!L_();)wv(Mt)}function wv(t){var e=Cv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Tv(t):Mt=e,lh.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=e1(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Mt=null;return}}else if(n=Jy(n,e,hn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);bt===0&&(bt=5)}function Cr(t,e,n){var i=et,r=bn.transition;try{bn.transition=null,et=1,l1(t,e,n,i)}finally{bn.transition=r,et=i}return null}function l1(t,e,n,i){do Us();while(Yi!==null);if(We&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H_(t,s),t===Nt&&(Mt=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,Av(Ol,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=et;et=1;var a=We;We|=4,lh.current=null,n1(t,n),_v(n,t),Ay(pd),jl=!!hd,pd=hd=null,t.current=n,i1(n),D_(),We=a,et=o,bn.transition=s}else t.current=n;if(zo&&(zo=!1,Yi=t,tc=r),s=t.pendingLanes,s===0&&(tr=null),F_(n.stateNode),an(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,t=Id,Id=null,t;return tc&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Ud?Ua++:(Ua=0,Ud=t):Ua=0,fr(),null}function Us(){if(Yi!==null){var t=s0(tc),e=bn.transition,n=et;try{if(bn.transition=null,et=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,tc=0,We&6)throw Error(oe(331));var r=We;for(We|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var l=a[c];for(ve=l;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var f=d.child;if(f!==null)f.return=d,ve=f;else for(;ve!==null;){d=ve;var h=d.sibling,m=d.return;if(gv(d),d===l){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,ve=p;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(A){mt(a,a.return,A)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(We=r,fr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(mc,t)}catch{}i=!0}return i}finally{et=n,bn.transition=e}}return!1}function tm(t,e,n){e=Gs(n,e),e=sv(t,e,1),t=er(t,e,1),e=Yt(),t!==null&&(ao(t,1,e),an(t,e))}function mt(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Gs(n,t),t=av(e,t,1),e=er(e,t,1),t=Yt(),e!==null&&(ao(e,1,t),an(e,t));break}}e=e.return}}function c1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(bt===4||bt===3&&(Ut&130023424)===Ut&&500>vt()-uh?jr(t,0):ch|=n),an(t,e)}function bv(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var n=Yt();t=Ci(t,e),t!==null&&(ao(t,e,n),an(t,n))}function u1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bv(t,n)}function d1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),bv(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Zy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,at&&e.flags&1048576&&N0(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=zs(e,Wt.current);Is(e,n),r=ih(null,e,i,t,r,n);var s=rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=bd(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Wf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=h1(i),t=Un(i,t),r){case 0:e=Td(null,e,i,t,n);break e;case 1:e=Wp(null,e,i,t,n);break e;case 11:e=Vp(null,e,i,t,n);break e;case 14:e=Gp(null,e,i,Un(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Wp(t,e,i,r,n);case 3:e:{if(uv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,O0(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(oe(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(oe(424)),e),e=Xp(t,e,i,n,r);break e}else for(pn=Ji(e.stateNode.containerInfo.firstChild),mn=e,at=!0,On=null,n=U0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ai(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return k0(e),t===null&&yd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,md(i,r)?o=null:s!==null&&md(i,s)&&(e.flags|=32),cv(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return dv(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Vp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt($l,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!rn.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ei(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var d=l.pending;d===null?c.next=c:(c.next=d.next,d.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Sd(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Cn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Gp(t,e,i,r,n);case 15:return ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Sl(t,e),e.tag=1,sn(i)?(t=!0,Gl(e)):t=!1,Is(e,n),rv(e,i,r),Md(e,i,r,n),bd(null,e,i,!0,t,n);case 19:return fv(t,e,n);case 22:return lv(t,e,n)}throw Error(oe(156,e.tag))};function Av(t,e){return t0(t,e)}function f1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new f1(t,e,n,i)}function ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h1(t){if(typeof t=="function")return ph(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===If)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ph(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return zr(n.children,r,s,e);case Lf:o=8,r|=8;break;case $u:return t=wn(12,n,e,r|2),t.elementType=$u,t.lanes=s,t;case qu:return t=wn(13,n,e,r),t.elementType=qu,t.lanes=s,t;case Yu:return t=wn(19,n,e,r),t.elementType=Yu,t.lanes=s,t;case kg:return Tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fg:o=10;break e;case Og:o=9;break e;case Df:o=11;break e;case If:o=14;break e;case Hi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Tc(t,e,n,i){return t=wn(22,t,i,e),t.elementType=kg,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function p1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mh(t,e,n,i,r,s,o,a,c){return t=new p1(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function m1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return or;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(sn(n))return R0(t,n,e)}return e}function Pv(t,e,n,i,r,s,o,a,c){return t=mh(n,i,!0,t,r,s,o,a,c),t.context=Rv(null),n=t.current,i=Yt(),r=nr(n),s=Ei(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ao(t,r,i),an(t,i),t}function bc(t,e,n,i){var r=e.current,s=Yt(),o=nr(r);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Bn(t,r,o,s),xl(t,r,o)),o}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gh(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function g1(){return null}var Nv=typeof reportError=="function"?reportError:function(t){console.error(t)};function vh(t){this._internalRoot=t}Cc.prototype.render=vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));bc(t,e,null,null)};Cc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){bc(null,t,null,null)}),e[bi]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=l0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&u0(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function v1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=ic(o);s.call(l)}}var o=Pv(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=o,t[bi]=o.current,Xa(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var l=ic(c);a.call(l)}}var c=mh(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=c,t[bi]=c.current,Xa(t.nodeType===8?t.parentNode:t),Wr(function(){bc(e,c,n,i)}),c}function Rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=ic(o);a.call(c)}}bc(e,o,t,r)}else o=v1(n,e,t,r,i);return ic(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Of(e,n|1),an(e,vt()),!(We&6)&&(Ws=vt()+500,fr()))}break;case 13:Wr(function(){var i=Ci(t,1);if(i!==null){var r=Yt();Bn(i,t,1,r)}}),gh(t,1)}};kf=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Yt();Bn(e,t,134217728,n)}gh(t,134217728)}};o0=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=Yt();Bn(n,t,e,i)}gh(t,e)}};l0=function(){return et};c0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};sd=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_c(i);if(!r)throw Error(oe(90));zg(i),Zu(i,r)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};Yg=dh;Kg=Wr;var x1={usingClientEntryPoint:!1,Events:[lo,Ss,_c,$g,qg,dh]},fa={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_1={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jg(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{mc=Bo.inject(_1),Zn=Bo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(oe(200));return m1(t,e,null,n)};vn.createRoot=function(t,e){if(!xh(t))throw Error(oe(299));var n=!1,i="",r=Nv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mh(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Xa(t.nodeType===8?t.parentNode:t),new vh(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Jg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Wr(t)};vn.hydrate=function(t,e,n){if(!Ac(e))throw Error(oe(200));return Rc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Nv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};vn.render=function(t,e,n){if(!Ac(e))throw Error(oe(200));return Rc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(oe(40));return t._reactRootContainer?(Wr(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};vn.unstable_batchedUpdates=dh;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ac(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Rc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Lg.exports=vn;var y1=Lg.exports,Dv,rm=y1;Dv=rm.createRoot,rm.hydrateRoot;const Iv=j.createContext(void 0),S1=({children:t})=>{const[e,n]=j.useState(()=>localStorage.getItem("theme")||"dark");return j.useEffect(()=>{localStorage.setItem("theme",e),Object.entries({dark:{"--primary-50":"#e23239","--primary-100":"#e0272e","--primary-200":"#d01e25","--primary-300":"#ba1a21","--primary-400":"#a3171d","--primary-500":"#8d1419","--primary-600":"#801217","--primary-700":"#721014","--primary-800":"#650e12","--primary-900":"#570c0f","--primary-950":"#510b0e","--secondary-50":"#62666f","--secondary-100":"#5c6068","--secondary-200":"#50535b","--secondary-300":"#44474d","--secondary-400":"#383a40","--secondary-500":"#2c2e32","--secondary-600":"#25272a","--secondary-700":"#1e1f22","--secondary-800":"#17181a","--secondary-900":"#0f1011","--secondary-950":"#0c0c0d"},light:{"--primary-50":"#3A3A91","--primary-100":"#39398D","--primary-200":"#363686","--primary-300":"#33337F","--primary-400":"#303077","--primary-500":"#2D2D70","--primary-600":"#2A2A69","--primary-700":"#272761","--primary-800":"#24245A","--primary-900":"#212153","--primary-950":"#20204F","--secondary-50":"#FAF8F6","--secondary-100":"#FAF8F6","--secondary-200":"#FAF8F6","--secondary-300":"#FAF8F6","--secondary-400":"#FAF8F6","--secondary-500":"#FAF8F6","--secondary-600":"#FAF8F6","--secondary-700":"#FAF8F6","--secondary-800":"#FAF8F6","--secondary-900":"#FAF8F6","--secondary-950":"#FAF8F6"}}[e]).forEach(([r,s])=>{document.documentElement.style.setProperty(r,s)})},[e]),u.jsx(Iv.Provider,{value:{theme:e,setTheme:n},children:t})},ri=()=>{const t=j.useContext(Iv);return t||(console.warn("useTheme must be used within a ThemeProvider"),{theme:"dark",setTheme:()=>{}})};var _h={};Object.defineProperty(_h,"__esModule",{value:!0});_h.parse=A1;_h.serialize=R1;const E1=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,M1=/^[\u0021-\u003A\u003C-\u007E]*$/,w1=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,T1=/^[\u0020-\u003A\u003D-\u007E]*$/,b1=Object.prototype.toString,C1=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function A1(t,e){const n=new C1,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||P1;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),c=a===-1?i:a;if(o>c){s=t.lastIndexOf(";",o-1)+1;continue}const l=sm(t,s,o),d=am(t,o,l),f=t.slice(l,d);if(n[f]===void 0){let h=sm(t,o+1,c),m=am(t,c,h);const x=r(t.slice(h,m));n[f]=x}s=c+1}while(s<i);return n}function sm(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function am(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function R1(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!E1.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!M1.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!w1.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!T1.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!N1(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function P1(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function N1(t){return b1.call(t)==="[object Date]"}var om="popstate";function L1(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return kd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:to(r)}return I1(e,n,null,t)}function ut(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ni(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D1(){return Math.random().toString(36).substring(2,10)}function lm(t,e){return{usr:t.state,key:t.key,idx:e}}function kd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ta(e):e,state:n,key:e&&e.key||i||D1()}}function to({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ta(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function I1(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",c=null,l=d();l==null&&(l=0,o.replaceState({...o.state,idx:l},""));function d(){return(o.state||{idx:null}).idx}function f(){a="POP";let g=d(),p=g==null?null:g-l;l=g,c&&c({action:a,location:y.location,delta:p})}function h(g,p){a="PUSH";let v=kd(y.location,g,p);l=d()+1;let _=lm(v,l),S=y.createHref(v);try{o.pushState(_,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}s&&c&&c({action:a,location:y.location,delta:1})}function m(g,p){a="REPLACE";let v=kd(y.location,g,p);l=d();let _=lm(v,l),S=y.createHref(v);o.replaceState(_,"",S),s&&c&&c({action:a,location:y.location,delta:0})}function x(g){return U1(g)}let y={get action(){return a},get location(){return t(r,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(om,f),c=g,()=>{r.removeEventListener(om,f),c=null}},createHref(g){return e(r,g)},createURL:x,encodeLocation(g){let p=x(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(g){return o.go(g)}};return y}function U1(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ut(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:to(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Uv(t,e,n="/"){return F1(t,e,n,!1)}function F1(t,e,n,i){let r=typeof e=="string"?ta(e):e,s=Ri(r.pathname||"/",n);if(s==null)return null;let o=Fv(t);O1(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let l=q1(s);a=X1(o[c],l,i)}return a}function Fv(t,e=[],n=[],i=""){let r=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ut(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length));let l=Mi([i,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ut(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Fv(s.children,e,d,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:G1(l,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let c of Ov(s.path))r(s,o,c)}),e}function Ov(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Ov(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function O1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:W1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var k1=/^:[\w-]+$/,j1=3,z1=2,B1=1,H1=10,V1=-2,cm=t=>t==="*";function G1(t,e){let n=t.split("/"),i=n.length;return n.some(cm)&&(i+=V1),e&&(i+=z1),n.filter(r=>!cm(r)).reduce((r,s)=>r+(k1.test(s)?j1:s===""?B1:H1),i)}function W1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function X1(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let c=i[a],l=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=rc({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},d),h=c.route;if(!f&&l&&n&&!i[i.length-1].route.index&&(f=rc({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Mi([s,f.pathname]),pathnameBase:Z1(Mi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Mi([s,f.pathnameBase]))}return o}function rc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=$1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((l,{paramName:d,isOptional:f},h)=>{if(d==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const m=a[h];return f&&!m?l[d]=void 0:l[d]=(m||"").replace(/%2F/g,"/"),l},{}),pathname:s,pathnameBase:o,pattern:t}}function $1(t,e=!1,n=!0){ni(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function q1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ni(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ri(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Y1(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ta(t):t;return{pathname:n?n.startsWith("/")?n:K1(n,e):e,search:J1(i),hash:eS(r)}}function K1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function pu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kv(t){let e=Q1(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function jv(t,e,n,i=!1){let r;typeof t=="string"?r=ta(t):(r={...t},ut(!r.pathname||!r.pathname.includes("?"),pu("?","pathname","search",r)),ut(!r.pathname||!r.pathname.includes("#"),pu("#","pathname","hash",r)),ut(!r.search||!r.search.includes("#"),pu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let c=Y1(r,a),l=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||d)&&(c.pathname+="/"),c}var Mi=t=>t.join("/").replace(/\/\/+/g,"/"),Z1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var zv=["POST","PUT","PATCH","DELETE"];new Set(zv);var nS=["GET",...zv];new Set(nS);var na=j.createContext(null);na.displayName="DataRouter";var Pc=j.createContext(null);Pc.displayName="DataRouterState";var Bv=j.createContext({isTransitioning:!1});Bv.displayName="ViewTransition";var iS=j.createContext(new Map);iS.displayName="Fetchers";var rS=j.createContext(null);rS.displayName="Await";var si=j.createContext(null);si.displayName="Navigation";var uo=j.createContext(null);uo.displayName="Location";var ai=j.createContext({outlet:null,matches:[],isDataRoute:!1});ai.displayName="Route";var yh=j.createContext(null);yh.displayName="RouteError";function sS(t,{relative:e}={}){ut(fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=j.useContext(si),{hash:r,pathname:s,search:o}=po(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Mi([n,s])),i.createHref({pathname:a,search:o,hash:r})}function fo(){return j.useContext(uo)!=null}function hr(){return ut(fo(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(uo).location}var Hv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vv(t){j.useContext(si).static||j.useLayoutEffect(t)}function ho(){let{isDataRoute:t}=j.useContext(ai);return t?_S():aS()}function aS(){ut(fo(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(na),{basename:e,navigator:n}=j.useContext(si),{matches:i}=j.useContext(ai),{pathname:r}=hr(),s=JSON.stringify(kv(i)),o=j.useRef(!1);return Vv(()=>{o.current=!0}),j.useCallback((c,l={})=>{if(ni(o.current,Hv),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=jv(c,JSON.parse(s),r,l.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Mi([e,d.pathname])),(l.replace?n.replace:n.push)(d,l.state,l)},[e,n,s,r,t])}j.createContext(null);function oS(){let{matches:t}=j.useContext(ai),e=t[t.length-1];return e?e.params:{}}function po(t,{relative:e}={}){let{matches:n}=j.useContext(ai),{pathname:i}=hr(),r=JSON.stringify(kv(n));return j.useMemo(()=>jv(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function lS(t,e){return Gv(t,e)}function Gv(t,e,n,i){var p;ut(fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(si),{matches:s}=j.useContext(ai),o=s[s.length-1],a=o?o.params:{},c=o?o.pathname:"/",l=o?o.pathnameBase:"/",d=o&&o.route;{let v=d&&d.path||"";Wv(c,!d||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let f=hr(),h;if(e){let v=typeof e=="string"?ta(e):e;ut(l==="/"||((p=v.pathname)==null?void 0:p.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${v.pathname}" was given in the \`location\` prop.`),h=v}else h=f;let m=h.pathname||"/",x=m;if(l!=="/"){let v=l.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=Uv(t,{pathname:x});ni(d||y!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ni(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=hS(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Mi([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Mi([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i);return e&&g?j.createElement(uo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},g):g}function cS(){let t=xS(),e=tS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:s},"ErrorBoundary")," or"," ",j.createElement("code",{style:s},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:r},n):null,o)}var uS=j.createElement(cS,null),dS=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?j.createElement(ai.Provider,{value:this.props.routeContext},j.createElement(yh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fS({routeContext:t,match:e,children:n}){let i=j.useContext(na);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(ai.Provider,{value:t},n)}function hS(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let c=r.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id])!==void 0);ut(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let o=!1,a=-1;if(n)for(let c=0;c<r.length;c++){let l=r[c];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(a=c),l.route.id){let{loaderData:d,errors:f}=n,h=l.route.loader&&!d.hasOwnProperty(l.route.id)&&(!f||f[l.route.id]===void 0);if(l.route.lazy||h){o=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((c,l,d)=>{let f,h=!1,m=null,x=null;n&&(f=s&&l.route.id?s[l.route.id]:void 0,m=l.route.errorElement||uS,o&&(a<0&&d===0?(Wv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,x=null):a===d&&(h=!0,x=l.route.hydrateFallbackElement||null)));let y=e.concat(r.slice(0,d+1)),g=()=>{let p;return f?p=m:h?p=x:l.route.Component?p=j.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=c,j.createElement(fS,{match:l,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||d===0)?j.createElement(dS,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}function Sh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pS(t){let e=j.useContext(na);return ut(e,Sh(t)),e}function mS(t){let e=j.useContext(Pc);return ut(e,Sh(t)),e}function gS(t){let e=j.useContext(ai);return ut(e,Sh(t)),e}function Eh(t){let e=gS(t),n=e.matches[e.matches.length-1];return ut(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function vS(){return Eh("useRouteId")}function xS(){var i;let t=j.useContext(yh),e=mS("useRouteError"),n=Eh("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function _S(){let{router:t}=pS("useNavigate"),e=Eh("useNavigate"),n=j.useRef(!1);return Vv(()=>{n.current=!0}),j.useCallback(async(r,s={})=>{ni(n.current,Hv),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var um={};function Wv(t,e,n){!e&&!um[t]&&(um[t]=!0,ni(!1,n))}j.memo(yS);function yS({routes:t,future:e,state:n}){return Gv(t,void 0,n,e)}function Xt(t){ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function SS({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){ut(!fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=j.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=ta(n));let{pathname:c="/",search:l="",hash:d="",state:f=null,key:h="default"}=n,m=j.useMemo(()=>{let x=Ri(c,o);return x==null?null:{location:{pathname:x,search:l,hash:d,state:f,key:h},navigationType:i}},[o,c,l,d,f,h,i]);return ni(m!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${d}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:j.createElement(si.Provider,{value:a},j.createElement(uo.Provider,{children:e,value:m}))}function ES({children:t,location:e}){return lS(jd(t),e)}function jd(t,e=[]){let n=[];return j.Children.forEach(t,(i,r)=>{if(!j.isValidElement(i))return;let s=[...e,r];if(i.type===j.Fragment){n.push.apply(n,jd(i.props.children,s));return}ut(i.type===Xt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ut(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=jd(i.props.children,s)),n.push(o)}),n}var Tl="get",bl="application/x-www-form-urlencoded";function Nc(t){return t!=null&&typeof t.tagName=="string"}function MS(t){return Nc(t)&&t.tagName.toLowerCase()==="button"}function wS(t){return Nc(t)&&t.tagName.toLowerCase()==="form"}function TS(t){return Nc(t)&&t.tagName.toLowerCase()==="input"}function bS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CS(t,e){return t.button===0&&(!e||e==="_self")&&!bS(t)}var Ho=null;function AS(){if(Ho===null)try{new FormData(document.createElement("form"),0),Ho=!1}catch{Ho=!0}return Ho}var RS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mu(t){return t!=null&&!RS.has(t)?(ni(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bl}"`),null):t}function PS(t,e){let n,i,r,s,o;if(wS(t)){let a=t.getAttribute("action");i=a?Ri(a,e):null,n=t.getAttribute("method")||Tl,r=mu(t.getAttribute("enctype"))||bl,s=new FormData(t)}else if(MS(t)||TS(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=t.getAttribute("formaction")||a.getAttribute("action");if(i=c?Ri(c,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Tl,r=mu(t.getAttribute("formenctype"))||mu(a.getAttribute("enctype"))||bl,s=new FormData(a,t),!AS()){let{name:l,type:d,value:f}=t;if(d==="image"){let h=l?`${l}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else l&&s.append(l,f)}}else{if(Nc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Tl,i=null,r=bl,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}function Mh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function NS(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function LS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function DS(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await NS(s,n);return o.links?o.links():[]}return[]}));return OS(i.flat(1).filter(LS).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function dm(t,e,n,i,r,s){let o=(c,l)=>n[l]?c.route.id!==n[l].route.id:!0,a=(c,l)=>{var d;return n[l].pathname!==c.pathname||((d=n[l].route.path)==null?void 0:d.endsWith("*"))&&n[l].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,l)=>o(c,l)||a(c,l)):s==="data"?e.filter((c,l)=>{var f;let d=i.routes[c.route.id];if(!d||!d.hasLoader)return!1;if(o(c,l)||a(c,l))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function IS(t,e,{includeHydrateFallback:n}={}){return US(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function US(t){return[...new Set(t)]}function FS(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function OS(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(FS(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var kS=new Set([100,101,204,205]);function jS(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Ri(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Xv(){let t=j.useContext(na);return Mh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function zS(){let t=j.useContext(Pc);return Mh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var wh=j.createContext(void 0);wh.displayName="FrameworkContext";function $v(){let t=j.useContext(wh);return Mh(t,"You must render this element inside a <HydratedRouter> element"),t}function BS(t,e){let n=j.useContext(wh),[i,r]=j.useState(!1),[s,o]=j.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:l,onMouseLeave:d,onTouchStart:f}=e,h=j.useRef(null);j.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=p=>{p.forEach(v=>{o(v.isIntersecting)})},g=new IntersectionObserver(y,{threshold:.5});return h.current&&g.observe(h.current),()=>{g.disconnect()}}},[t]),j.useEffect(()=>{if(i){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[i]);let m=()=>{r(!0)},x=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:ha(a,m),onBlur:ha(c,x),onMouseEnter:ha(l,m),onMouseLeave:ha(d,x),onTouchStart:ha(f,m)}]:[!1,h,{}]}function ha(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function HS({page:t,...e}){let{router:n}=Xv(),i=j.useMemo(()=>Uv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?j.createElement(GS,{page:t,matches:i,...e}):null}function VS(t){let{manifest:e,routeModules:n}=$v(),[i,r]=j.useState([]);return j.useEffect(()=>{let s=!1;return DS(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function GS({page:t,matches:e,...n}){let i=hr(),{manifest:r,routeModules:s}=$v(),{basename:o}=Xv(),{loaderData:a,matches:c}=zS(),l=j.useMemo(()=>dm(t,e,c,r,i,"data"),[t,e,c,r,i]),d=j.useMemo(()=>dm(t,e,c,r,i,"assets"),[t,e,c,r,i]),f=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,y=!1;if(e.forEach(p=>{var _;let v=r.routes[p.route.id];!v||!v.hasLoader||(!l.some(S=>S.route.id===p.route.id)&&p.route.id in a&&((_=s[p.route.id])!=null&&_.shouldRevalidate)||v.hasClientLoader?y=!0:x.add(p.route.id))}),x.size===0)return[];let g=jS(t,o);return y&&x.size>0&&g.searchParams.set("_routes",e.filter(p=>x.has(p.route.id)).map(p=>p.route.id).join(",")),[g.pathname+g.search]},[o,a,i,r,l,e,t,s]),h=j.useMemo(()=>IS(d,r),[d,r]),m=VS(d);return j.createElement(j.Fragment,null,f.map(x=>j.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),h.map(x=>j.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),m.map(({key:x,link:y})=>j.createElement("link",{key:x,...y})))}function WS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qv&&(window.__reactRouterVersion="7.6.3")}catch{}function XS({basename:t,children:e,window:n}){let i=j.useRef();i.current==null&&(i.current=L1({window:n,v5Compat:!0}));let r=i.current,[s,o]=j.useState({action:r.action,location:r.location}),a=j.useCallback(c=>{j.startTransition(()=>o(c))},[o]);return j.useLayoutEffect(()=>r.listen(a),[r,a]),j.createElement(SS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=j.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:c,to:l,preventScrollReset:d,viewTransition:f,...h},m){let{basename:x}=j.useContext(si),y=typeof l=="string"&&Yv.test(l),g,p=!1;if(typeof l=="string"&&y&&(g=l,qv))try{let w=new URL(window.location.href),E=l.startsWith("//")?new URL(w.protocol+l):new URL(l),R=Ri(E.pathname,x);E.origin===w.origin&&R!=null?l=R+E.search+E.hash:p=!0}catch{ni(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=sS(l,{relative:r}),[_,S,A]=BS(i,h),b=KS(l,{replace:o,state:a,target:c,preventScrollReset:d,relative:r,viewTransition:f});function C(w){e&&e(w),w.defaultPrevented||b(w)}let N=j.createElement("a",{...h,...A,href:g||v,onClick:p||s?e:C,ref:WS(m,S),target:c,"data-discover":!y&&n==="render"?"true":void 0});return _&&!y?j.createElement(j.Fragment,null,N,j.createElement(HS,{page:v})):N});Th.displayName="Link";var $S=j.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:c,...l},d){let f=po(o,{relative:l.relative}),h=hr(),m=j.useContext(Pc),{navigator:x,basename:y}=j.useContext(si),g=m!=null&&tE(f)&&a===!0,p=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,v=h.pathname,_=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,p=p.toLowerCase()),_&&y&&(_=Ri(_,y)||_);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let A=v===p||!r&&v.startsWith(p)&&v.charAt(S)==="/",b=_!=null&&(_===p||!r&&_.startsWith(p)&&_.charAt(p.length)==="/"),C={isActive:A,isPending:b,isTransitioning:g},N=A?e:void 0,w;typeof i=="function"?w=i(C):w=[i,A?"active":null,b?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(C):s;return j.createElement(Th,{...l,"aria-current":N,className:w,ref:d,style:E,to:o,viewTransition:a},typeof c=="function"?c(C):c)});$S.displayName="NavLink";var qS=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=Tl,action:a,onSubmit:c,relative:l,preventScrollReset:d,viewTransition:f,...h},m)=>{let x=JS(),y=eE(a,{relative:l}),g=o.toLowerCase()==="get"?"get":"post",p=typeof a=="string"&&Yv.test(a),v=_=>{if(c&&c(_),_.defaultPrevented)return;_.preventDefault();let S=_.nativeEvent.submitter,A=(S==null?void 0:S.getAttribute("formmethod"))||o;x(S||_.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:s,relative:l,preventScrollReset:d,viewTransition:f})};return j.createElement("form",{ref:m,method:g,action:y,onSubmit:i?c:v,...h,"data-discover":!p&&t==="render"?"true":void 0})});qS.displayName="Form";function YS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(t){let e=j.useContext(na);return ut(e,YS(t)),e}function KS(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=ho(),c=hr(),l=po(t,{relative:s});return j.useCallback(d=>{if(CS(d,e)){d.preventDefault();let f=n!==void 0?n:to(c)===to(l);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[c,a,l,n,i,e,t,r,s,o])}var QS=0,ZS=()=>`__${String(++QS)}__`;function JS(){let{router:t}=Kv("useSubmit"),{basename:e}=j.useContext(si),n=vS();return j.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:c,body:l}=PS(i,e);if(r.navigate===!1){let d=r.fetcherKey||ZS();await t.fetch(d,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:c,body:l,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function eE(t,{relative:e}={}){let{basename:n}=j.useContext(si),i=j.useContext(ai);ut(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...po(t||".",{relative:e})},o=hr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),c=a.getAll("index");if(c.some(d=>d==="")){a.delete("index"),c.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Mi([n,s.pathname])),to(s)}function tE(t,e={}){let n=j.useContext(Bv);ut(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Kv("useViewTransitionState"),r=po(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ri(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Ri(n.nextLocation.pathname,i)||n.nextLocation.pathname;return rc(r.pathname,o)!=null||rc(r.pathname,s)!=null}[...kS];const nE=t=>{const e=j.useRef(null),[n,i]=j.useState(!1);return j.useEffect(()=>{const r=new IntersectionObserver(([o])=>{i(o.isIntersecting)},t),s=e.current;if(s&&(r.observe(s),typeof window<"u")){const o=s.getBoundingClientRect(),a=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth;o.top<a&&o.bottom>0&&o.left<c&&o.right>0&&i(!0)}return()=>{s&&r.unobserve(s)}},[t]),[e,n]},mo=t=>{const[e,n]=nE(t),[i,r]=j.useState(!1);return n&&!i&&r(!0),[e,i]};function Et({children:t}){const[e,n]=mo({threshold:.1});return u.jsx("div",{ref:e,className:`transition-opacity duration-[1500ms] ${n?"opacity-100":"opacity-0"}`,children:t})}function sc({children:t}){const[e,n]=mo({threshold:.1});return u.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-right":"opacity-0"}`,children:t})}function ac({children:t}){const[e,n]=mo({threshold:.1});return u.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-left":"opacity-0"}`,children:t})}function Rn({children:t}){return u.jsx("div",{className:"container mx-auto px-6 min-h-screen 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]",children:t})}const Qv=({src:t,className:e="",imgClass:n="",alt:i="image"})=>{const[r,s]=j.useState(!1);return u.jsxs(u.Fragment,{children:[!r&&u.jsx("div",{className:`flex justify-center items-center ${e}`,children:u.jsx("img",{className:"w-16 h-16",src:"images/loading.gif"})}),u.jsx("img",{className:`${e} ${n}`,src:t,alt:i,style:{display:r?"block":"none"},onLoad:()=>s(!0)})]})};function Xs({text:t,onClick:e,loading:n,loadingText:i,variant:r="primary"}){return u.jsx("button",{onClick:e,className:`font-normal hover:font-bold mt-6 text-lg px-6 py-3 rounded-full transform transition-transform duration-300 inline-flex items-center gap-2 ${r=="primary"&&"bg-primary-500 hover:bg-primary-600 text-white"} ${r=="white"&&"bg-white hover:bg-white text-primary-500"}`,disabled:n,children:n?u.jsxs(u.Fragment,{children:[u.jsx("img",{className:"w-7 h-7",src:"images/loading.gif"}),i]}):u.jsx("p",{children:t})})}function iE(){return u.jsx("svg",{className:"fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{d:"M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"})})}function bh({className:t=""}){return u.jsx("svg",{className:`w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"-0.5 0 15 15",children:u.jsx("path",{className:`fill-current text-pumpkin ${t}`,fillRule:"evenodd",d:"M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z",transform:"translate(-61 -152)"})})}function Ch({className:t=""}){return u.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"0 0 1920 1920",children:u.jsx("path",{d:"M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z",fillRule:"evenodd"})})}function Ah({className:t=""}){return u.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,viewBox:"0 0 32 32",version:"1.1",children:u.jsx("path",{d:"M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"})})}function Lc({className:t=""}){return u.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,version:"1.1",id:"Layer_1",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",children:u.jsx("path",{d:`M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7\r
   l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8\r
   c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64\r
   c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z`})})}function Rh({className:t=""}){return u.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:u.jsxs("g",{children:[u.jsx("path",{className:"st0",d:`M500.176,55.798c0,0-21.734-7.434-39.55-11.967C411.686,31.369,308.823,24.727,256,24.727\r
		S100.314,31.369,51.374,43.831c-17.816,4.533-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835\r
		c0.757,8.596,7.957,15.201,16.581,15.201h84.786c8.507,0,15.643-6.416,16.554-14.878l4.28-39.973\r
		c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.485-6.182,110.081-6.182c41.588,0,110.081,6.182,110.081,6.182\r
		c7.948,0.676,14.301,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.544,14.878h84.778\r
		c8.633,0,15.833-6.605,16.59-15.201l8.507-97.835C512.621,65.322,507.718,58.078,500.176,55.798z`}),u.jsx("path",{className:"st0",d:`M357.502,136.629h-55.365v46.137h-92.274v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618\r
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
		C155.066,333.722,163.59,325.197,174.115,325.197z`})]})})}function rE(){return u.jsx("svg",{className:"w-5 h-5 sm:w-8 sm:h-8",viewBox:"0 0 20 20",version:"1.1",children:u.jsx("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:u.jsx("g",{className:"fill-current text-pumpkin",id:"Dribbble-Light-Preview",transform:"translate(-300.000000, -7599.000000)",children:u.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:u.jsx("path",{d:"M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439",id:"whatsapp-[#128]"})})})})})}function Zv(){return u.jsxs("div",{className:"lg:text-[1.2rem] flex flex-col gap-2",children:[u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(Ch,{}),u.jsx("a",{href:"mailto:nagham.qarqamaz.kp@gmail.com",className:"hover:underline",children:"nagham.qarqamaz.kp@gmail.com"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(Rh,{}),u.jsx("a",{href:"tel:+963992803522",className:"hover:underline",children:"+963 992 803 522"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(rE,{}),u.jsx("a",{href:"https://wa.me/+963992803522",className:"hover:underline",target:"_blank",children:"+963 992 803 522"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(Lc,{}),u.jsxs("div",{className:"text-start",children:[u.jsx("a",{href:"https://www.google.com/maps/place/Latakia,+Syria",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"Syria, Latakia"}),u.jsx("span",{className:"text-pumpkin lg:text-[1.2rem] italic ml-2",children:"(Willing To Relocate)"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(bh,{}),u.jsx("div",{children:"November 10th, 1999"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(Ah,{}),u.jsx("a",{href:"https://www.linkedin.com/in/nagham-qarqamaz/",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/in/nagham-qarqamaz"})]}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-6",children:[u.jsx(iE,{}),u.jsx("a",{href:"https://codeforces.com/profile/Nagham_Qarqamaz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"/profile/Nagham_Qarqamaz"})]})]})}const sE=()=>{const{theme:t}=ri(),[e,n]=j.useState(!1),i=async()=>{n(!0);try{const r=document.createElement("a");r.href="resume/Nagham Qarqamaz Resume.pdf",r.download="Nagham Qarqamaz Resume.pdf",document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(r){console.error("Error downloading file:",r)}finally{setTimeout(()=>n(!1),2e3)}};return u.jsx("div",{className:"bg-[url('/images/cover.jpg')] bg-cover",children:u.jsxs("div",{className:`${t==="light"?"bg-[#FFFFFFDD]":"bg-[#000000DD]"} min-h-screen relative`,children:[u.jsx("img",{className:"absolute bottom-0 w-full h-40",src:"images/wave.png"}),u.jsx(Rn,{children:u.jsxs("div",{className:"font-bold relative min-h-screen flex flex-col sm:flex-row justify-between items-center gap-8 py-20",children:[u.jsx("div",{className:"order-1 sm:order-0",children:u.jsx(ac,{children:u.jsx(Zv,{})})}),u.jsx("div",{className:"flex-grow order-0 sm:order-1",children:u.jsx(sc,{children:u.jsxs("div",{className:"flex flex-col items-center justify-center text-center",children:[u.jsx(Et,{children:u.jsx(Qv,{className:"mb-4 h-[10rem] lg:h-[12rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/sketch.png"})}),u.jsx("h1",{className:"text-[1.8rem] lg:text-[3rem] mb-2",children:"Nagham Qarqamaz"}),u.jsx("p",{className:"lg:text-[1.3rem]",children:"Software Engineer & Full-Stack Developer"}),u.jsx(Xs,{text:"Download Resume",onClick:i,loading:e,loadingText:"Downloading..."})]})})})]})})]})})};var Jv={exports:{}};(function(t,e){(function(n,i){t.exports=i(j)})(typeof self<"u"?self:$x,n=>(()=>{var i={7403:(a,c,l)=>{l.d(c,{default:()=>I});var d=l(4087),f=l.n(d);const h=function(H){return new RegExp(/<[a-z][\s\S]*>/i).test(H)},m=function(H,B){return Math.floor(Math.random()*(B-H+1))+H};var x="TYPE_CHARACTER",y="REMOVE_CHARACTER",g="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",_="CALL_FUNCTION",S="ADD_HTML_TAG_ELEMENT",A="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",C="CHANGE_CURSOR",N="PASTE_STRING",w="HTML_TAG";function E(H){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},E(H)}function R(H,B){var Q=Object.keys(H);if(Object.getOwnPropertySymbols){var se=Object.getOwnPropertySymbols(H);B&&(se=se.filter(function(De){return Object.getOwnPropertyDescriptor(H,De).enumerable})),Q.push.apply(Q,se)}return Q}function z(H){for(var B=1;B<arguments.length;B++){var Q=arguments[B]!=null?arguments[B]:{};B%2?R(Object(Q),!0).forEach(function(se){V(H,se,Q[se])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(Q)):R(Object(Q)).forEach(function(se){Object.defineProperty(H,se,Object.getOwnPropertyDescriptor(Q,se))})}return H}function k(H){return function(B){if(Array.isArray(B))return q(B)}(H)||function(B){if(typeof Symbol<"u"&&B[Symbol.iterator]!=null||B["@@iterator"]!=null)return Array.from(B)}(H)||function(B,Q){if(B){if(typeof B=="string")return q(B,Q);var se=Object.prototype.toString.call(B).slice(8,-1);return se==="Object"&&B.constructor&&(se=B.constructor.name),se==="Map"||se==="Set"?Array.from(B):se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se)?q(B,Q):void 0}}(H)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function q(H,B){(B==null||B>H.length)&&(B=H.length);for(var Q=0,se=new Array(B);Q<B;Q++)se[Q]=H[Q];return se}function Y(H,B){for(var Q=0;Q<B.length;Q++){var se=B[Q];se.enumerable=se.enumerable||!1,se.configurable=!0,"value"in se&&(se.writable=!0),Object.defineProperty(H,Z(se.key),se)}}function V(H,B,Q){return(B=Z(B))in H?Object.defineProperty(H,B,{value:Q,enumerable:!0,configurable:!0,writable:!0}):H[B]=Q,H}function Z(H){var B=function(Q,se){if(E(Q)!=="object"||Q===null)return Q;var De=Q[Symbol.toPrimitive];if(De!==void 0){var P=De.call(Q,"string");if(E(P)!=="object")return P;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Q)}(H);return E(B)==="symbol"?B:String(B)}const I=function(){function H(se,De){var P=this;if(function(K,re){if(!(K instanceof re))throw new TypeError("Cannot call a class as a function")}(this,H),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),V(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),V(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),V(this,"stop",function(){return P.state.eventLoop&&((0,d.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),V(this,"pauseFor",function(K){return P.addEventToQueue(v,{ms:K}),P}),V(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(K){P.typeString(K).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),V(this,"typeString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(h(K))return P.typeOutHTMLString(K,re);if(K){var xe=(P.options||{}).stringSplitter,Me=typeof xe=="function"?xe(K):K.split("");P.typeCharacters(Me,re)}return P}),V(this,"pasteString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return h(K)?P.typeOutHTMLString(K,re,!0):(K&&P.addEventToQueue(N,{character:K,node:re}),P)}),V(this,"typeOutHTMLString",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,xe=arguments.length>2?arguments[2]:void 0,Me=function(tt){var Ve=document.createElement("div");return Ve.innerHTML=tt,Ve.childNodes}(K);if(Me.length>0)for(var ye=0;ye<Me.length;ye++){var He=Me[ye],D=He.innerHTML;He&&He.nodeType!==3?(He.innerHTML="",P.addEventToQueue(S,{node:He,parentNode:re}),xe?P.pasteString(D,He):P.typeString(D,He)):He.textContent&&(xe?P.pasteString(He.textContent,re):P.typeString(He.textContent,re))}return P}),V(this,"deleteAll",function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(g,{speed:K}),P}),V(this,"changeDeleteSpeed",function(K){if(!K)throw new Error("Must provide new delete speed");return P.addEventToQueue(A,{speed:K}),P}),V(this,"changeDelay",function(K){if(!K)throw new Error("Must provide new delay");return P.addEventToQueue(b,{delay:K}),P}),V(this,"changeCursor",function(K){if(!K)throw new Error("Must provide new cursor");return P.addEventToQueue(C,{cursor:K}),P}),V(this,"deleteChars",function(K){if(!K)throw new Error("Must provide amount of characters to delete");for(var re=0;re<K;re++)P.addEventToQueue(y);return P}),V(this,"callFunction",function(K,re){if(!K||typeof K!="function")throw new Error("Callback must be a function");return P.addEventToQueue(_,{cb:K,thisArg:re}),P}),V(this,"typeCharacters",function(K){var re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(xe){P.addEventToQueue(x,{character:xe,node:re})}),P}),V(this,"removeCharacters",function(K){if(!K||!Array.isArray(K))throw new Error("Characters must be an array");return K.forEach(function(){P.addEventToQueue(y)}),P}),V(this,"addEventToQueue",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(K,re,xe,"eventQueue")}),V(this,"addReverseCalledEvent",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(K,re,xe,"reverseCalledEvents"):P}),V(this,"addEventToStateProperty",function(K,re){var xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Me=arguments.length>3?arguments[3]:void 0,ye={eventName:K,eventArgs:re||{}};return P.state[Me]=xe?[ye].concat(k(P.state[Me])):[].concat(k(P.state[Me]),[ye]),P}),V(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var K=Date.now(),re=K-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=k(P.state.calledEvents),P.state.calledEvents=[],P.options=z({},P.state.initialOptions)}if(P.state.eventLoop=f()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(K<P.state.pauseUntil)return;P.state.pauseUntil=null}var xe,Me=k(P.state.eventQueue),ye=Me.shift();if(!(re<=(xe=ye.eventName===p||ye.eventName===y?P.options.deleteSpeed==="natural"?m(40,80):P.options.deleteSpeed:P.options.delay==="natural"?m(120,160):P.options.delay))){var He=ye.eventName,D=ye.eventArgs;switch(P.logInDevMode({currentEvent:ye,state:P.state,delay:xe}),He){case N:case x:var tt=D.character,Ve=D.node,$e=document.createTextNode(tt),we=$e;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(we=P.options.onCreateTextNode(tt,$e)),we&&(Ve?Ve.appendChild(we):P.state.elements.wrapper.appendChild(we)),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:"TEXT_NODE",character:tt,node:we}]);break;case y:Me.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case v:var ft=ye.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(ft);break;case _:var Ae=ye.eventArgs,Ie=Ae.cb,L=Ae.thisArg;Ie.call(L,{elements:P.state.elements});break;case S:var M=ye.eventArgs,$=M.node,ee=M.parentNode;ee?ee.appendChild($):P.state.elements.wrapper.appendChild($),P.state.visibleNodes=[].concat(k(P.state.visibleNodes),[{type:w,node:$,parentNode:ee||P.state.elements.wrapper}]);break;case g:var ie=P.state.visibleNodes,te=D.speed,be=[];te&&be.push({eventName:A,eventArgs:{speed:te,temp:!0}});for(var fe=0,ge=ie.length;fe<ge;fe++)be.push({eventName:p,eventArgs:{removingCharacterNode:!1}});te&&be.push({eventName:A,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),Me.unshift.apply(Me,be);break;case p:var Fe=ye.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var le=P.state.visibleNodes.pop(),me=le.type,je=le.node,Re=le.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:je,character:Re}),je&&je.parentNode.removeChild(je),me===w&&Fe&&Me.unshift({eventName:p,eventArgs:{}})}break;case A:P.options.deleteSpeed=ye.eventArgs.speed;break;case b:P.options.delay=ye.eventArgs.delay;break;case C:P.options.cursor=ye.eventArgs.cursor,P.state.elements.cursor.innerHTML=ye.eventArgs.cursor}P.options.loop&&(ye.eventName===p||ye.eventArgs&&ye.eventArgs.temp||(P.state.calledEvents=[].concat(k(P.state.calledEvents),[ye]))),P.state.eventQueue=Me,P.state.lastFrameTime=K}}}),se)if(typeof se=="string"){var ae=document.querySelector(se);if(!ae)throw new Error("Could not find container element");this.state.elements.container=ae}else this.state.elements.container=se;De&&(this.options=z(z({},this.options),De)),this.state.initialOptions=z({},this.options),this.init()}var B,Q;return B=H,(Q=[{key:"init",value:function(){var se,De;this.setupWrapperElement(),this.addEventToQueue(C,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(se=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(De=document.createElement("style")).appendChild(document.createTextNode(se)),document.head.appendChild(De),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(se){this.options.devMode&&console.log(se)}}])&&Y(B.prototype,Q),Object.defineProperty(B,"prototype",{writable:!1}),H}()},8552:(a,c,l)=>{var d=l(852)(l(5639),"DataView");a.exports=d},1989:(a,c,l)=>{var d=l(1789),f=l(401),h=l(7667),m=l(1327),x=l(1866);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=d,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},8407:(a,c,l)=>{var d=l(7040),f=l(4125),h=l(2117),m=l(7518),x=l(4705);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=d,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},7071:(a,c,l)=>{var d=l(852)(l(5639),"Map");a.exports=d},3369:(a,c,l)=>{var d=l(4785),f=l(1285),h=l(6e3),m=l(9916),x=l(5265);function y(g){var p=-1,v=g==null?0:g.length;for(this.clear();++p<v;){var _=g[p];this.set(_[0],_[1])}}y.prototype.clear=d,y.prototype.delete=f,y.prototype.get=h,y.prototype.has=m,y.prototype.set=x,a.exports=y},3818:(a,c,l)=>{var d=l(852)(l(5639),"Promise");a.exports=d},8525:(a,c,l)=>{var d=l(852)(l(5639),"Set");a.exports=d},8668:(a,c,l)=>{var d=l(3369),f=l(619),h=l(2385);function m(x){var y=-1,g=x==null?0:x.length;for(this.__data__=new d;++y<g;)this.add(x[y])}m.prototype.add=m.prototype.push=f,m.prototype.has=h,a.exports=m},6384:(a,c,l)=>{var d=l(8407),f=l(7465),h=l(3779),m=l(7599),x=l(4758),y=l(4309);function g(p){var v=this.__data__=new d(p);this.size=v.size}g.prototype.clear=f,g.prototype.delete=h,g.prototype.get=m,g.prototype.has=x,g.prototype.set=y,a.exports=g},2705:(a,c,l)=>{var d=l(5639).Symbol;a.exports=d},1149:(a,c,l)=>{var d=l(5639).Uint8Array;a.exports=d},577:(a,c,l)=>{var d=l(852)(l(5639),"WeakMap");a.exports=d},4963:a=>{a.exports=function(c,l){for(var d=-1,f=c==null?0:c.length,h=0,m=[];++d<f;){var x=c[d];l(x,d,c)&&(m[h++]=x)}return m}},4636:(a,c,l)=>{var d=l(2545),f=l(5694),h=l(1469),m=l(4144),x=l(5776),y=l(6719),g=Object.prototype.hasOwnProperty;a.exports=function(p,v){var _=h(p),S=!_&&f(p),A=!_&&!S&&m(p),b=!_&&!S&&!A&&y(p),C=_||S||A||b,N=C?d(p.length,String):[],w=N.length;for(var E in p)!v&&!g.call(p,E)||C&&(E=="length"||A&&(E=="offset"||E=="parent")||b&&(E=="buffer"||E=="byteLength"||E=="byteOffset")||x(E,w))||N.push(E);return N}},2488:a=>{a.exports=function(c,l){for(var d=-1,f=l.length,h=c.length;++d<f;)c[h+d]=l[d];return c}},2908:a=>{a.exports=function(c,l){for(var d=-1,f=c==null?0:c.length;++d<f;)if(l(c[d],d,c))return!0;return!1}},8470:(a,c,l)=>{var d=l(7813);a.exports=function(f,h){for(var m=f.length;m--;)if(d(f[m][0],h))return m;return-1}},8866:(a,c,l)=>{var d=l(2488),f=l(1469);a.exports=function(h,m,x){var y=m(h);return f(h)?y:d(y,x(h))}},4239:(a,c,l)=>{var d=l(2705),f=l(9607),h=l(2333),m=d?d.toStringTag:void 0;a.exports=function(x){return x==null?x===void 0?"[object Undefined]":"[object Null]":m&&m in Object(x)?f(x):h(x)}},9454:(a,c,l)=>{var d=l(4239),f=l(7005);a.exports=function(h){return f(h)&&d(h)=="[object Arguments]"}},939:(a,c,l)=>{var d=l(2492),f=l(7005);a.exports=function h(m,x,y,g,p){return m===x||(m==null||x==null||!f(m)&&!f(x)?m!=m&&x!=x:d(m,x,y,g,h,p))}},2492:(a,c,l)=>{var d=l(6384),f=l(7114),h=l(8351),m=l(6096),x=l(4160),y=l(1469),g=l(4144),p=l(6719),v="[object Arguments]",_="[object Array]",S="[object Object]",A=Object.prototype.hasOwnProperty;a.exports=function(b,C,N,w,E,R){var z=y(b),k=y(C),q=z?_:x(b),Y=k?_:x(C),V=(q=q==v?S:q)==S,Z=(Y=Y==v?S:Y)==S,I=q==Y;if(I&&g(b)){if(!g(C))return!1;z=!0,V=!1}if(I&&!V)return R||(R=new d),z||p(b)?f(b,C,N,w,E,R):h(b,C,q,N,w,E,R);if(!(1&N)){var H=V&&A.call(b,"__wrapped__"),B=Z&&A.call(C,"__wrapped__");if(H||B){var Q=H?b.value():b,se=B?C.value():C;return R||(R=new d),E(Q,se,N,w,R)}}return!!I&&(R||(R=new d),m(b,C,N,w,E,R))}},8458:(a,c,l)=>{var d=l(3560),f=l(5346),h=l(3218),m=l(346),x=/^\[object .+?Constructor\]$/,y=Function.prototype,g=Object.prototype,p=y.toString,v=g.hasOwnProperty,_=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(S){return!(!h(S)||f(S))&&(d(S)?_:x).test(m(S))}},8749:(a,c,l)=>{var d=l(4239),f=l(1780),h=l(7005),m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m["[object Arguments]"]=m["[object Array]"]=m["[object ArrayBuffer]"]=m["[object Boolean]"]=m["[object DataView]"]=m["[object Date]"]=m["[object Error]"]=m["[object Function]"]=m["[object Map]"]=m["[object Number]"]=m["[object Object]"]=m["[object RegExp]"]=m["[object Set]"]=m["[object String]"]=m["[object WeakMap]"]=!1,a.exports=function(x){return h(x)&&f(x.length)&&!!m[d(x)]}},280:(a,c,l)=>{var d=l(5726),f=l(6916),h=Object.prototype.hasOwnProperty;a.exports=function(m){if(!d(m))return f(m);var x=[];for(var y in Object(m))h.call(m,y)&&y!="constructor"&&x.push(y);return x}},2545:a=>{a.exports=function(c,l){for(var d=-1,f=Array(c);++d<c;)f[d]=l(d);return f}},1717:a=>{a.exports=function(c){return function(l){return c(l)}}},4757:a=>{a.exports=function(c,l){return c.has(l)}},4429:(a,c,l)=>{var d=l(5639)["__core-js_shared__"];a.exports=d},7114:(a,c,l)=>{var d=l(8668),f=l(2908),h=l(4757);a.exports=function(m,x,y,g,p,v){var _=1&y,S=m.length,A=x.length;if(S!=A&&!(_&&A>S))return!1;var b=v.get(m),C=v.get(x);if(b&&C)return b==x&&C==m;var N=-1,w=!0,E=2&y?new d:void 0;for(v.set(m,x),v.set(x,m);++N<S;){var R=m[N],z=x[N];if(g)var k=_?g(z,R,N,x,m,v):g(R,z,N,m,x,v);if(k!==void 0){if(k)continue;w=!1;break}if(E){if(!f(x,function(q,Y){if(!h(E,Y)&&(R===q||p(R,q,y,g,v)))return E.push(Y)})){w=!1;break}}else if(R!==z&&!p(R,z,y,g,v)){w=!1;break}}return v.delete(m),v.delete(x),w}},8351:(a,c,l)=>{var d=l(2705),f=l(1149),h=l(7813),m=l(7114),x=l(8776),y=l(1814),g=d?d.prototype:void 0,p=g?g.valueOf:void 0;a.exports=function(v,_,S,A,b,C,N){switch(S){case"[object DataView]":if(v.byteLength!=_.byteLength||v.byteOffset!=_.byteOffset)return!1;v=v.buffer,_=_.buffer;case"[object ArrayBuffer]":return!(v.byteLength!=_.byteLength||!C(new f(v),new f(_)));case"[object Boolean]":case"[object Date]":case"[object Number]":return h(+v,+_);case"[object Error]":return v.name==_.name&&v.message==_.message;case"[object RegExp]":case"[object String]":return v==_+"";case"[object Map]":var w=x;case"[object Set]":var E=1&A;if(w||(w=y),v.size!=_.size&&!E)return!1;var R=N.get(v);if(R)return R==_;A|=2,N.set(v,_);var z=m(w(v),w(_),A,b,C,N);return N.delete(v),z;case"[object Symbol]":if(p)return p.call(v)==p.call(_)}return!1}},6096:(a,c,l)=>{var d=l(8234),f=Object.prototype.hasOwnProperty;a.exports=function(h,m,x,y,g,p){var v=1&x,_=d(h),S=_.length;if(S!=d(m).length&&!v)return!1;for(var A=S;A--;){var b=_[A];if(!(v?b in m:f.call(m,b)))return!1}var C=p.get(h),N=p.get(m);if(C&&N)return C==m&&N==h;var w=!0;p.set(h,m),p.set(m,h);for(var E=v;++A<S;){var R=h[b=_[A]],z=m[b];if(y)var k=v?y(z,R,b,m,h,p):y(R,z,b,h,m,p);if(!(k===void 0?R===z||g(R,z,x,y,p):k)){w=!1;break}E||(E=b=="constructor")}if(w&&!E){var q=h.constructor,Y=m.constructor;q==Y||!("constructor"in h)||!("constructor"in m)||typeof q=="function"&&q instanceof q&&typeof Y=="function"&&Y instanceof Y||(w=!1)}return p.delete(h),p.delete(m),w}},1957:(a,c,l)=>{var d=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;a.exports=d},8234:(a,c,l)=>{var d=l(8866),f=l(9551),h=l(3674);a.exports=function(m){return d(m,h,f)}},5050:(a,c,l)=>{var d=l(7019);a.exports=function(f,h){var m=f.__data__;return d(h)?m[typeof h=="string"?"string":"hash"]:m.map}},852:(a,c,l)=>{var d=l(8458),f=l(7801);a.exports=function(h,m){var x=f(h,m);return d(x)?x:void 0}},9607:(a,c,l)=>{var d=l(2705),f=Object.prototype,h=f.hasOwnProperty,m=f.toString,x=d?d.toStringTag:void 0;a.exports=function(y){var g=h.call(y,x),p=y[x];try{y[x]=void 0;var v=!0}catch{}var _=m.call(y);return v&&(g?y[x]=p:delete y[x]),_}},9551:(a,c,l)=>{var d=l(4963),f=l(479),h=Object.prototype.propertyIsEnumerable,m=Object.getOwnPropertySymbols,x=m?function(y){return y==null?[]:(y=Object(y),d(m(y),function(g){return h.call(y,g)}))}:f;a.exports=x},4160:(a,c,l)=>{var d=l(8552),f=l(7071),h=l(3818),m=l(8525),x=l(577),y=l(4239),g=l(346),p="[object Map]",v="[object Promise]",_="[object Set]",S="[object WeakMap]",A="[object DataView]",b=g(d),C=g(f),N=g(h),w=g(m),E=g(x),R=y;(d&&R(new d(new ArrayBuffer(1)))!=A||f&&R(new f)!=p||h&&R(h.resolve())!=v||m&&R(new m)!=_||x&&R(new x)!=S)&&(R=function(z){var k=y(z),q=k=="[object Object]"?z.constructor:void 0,Y=q?g(q):"";if(Y)switch(Y){case b:return A;case C:return p;case N:return v;case w:return _;case E:return S}return k}),a.exports=R},7801:a=>{a.exports=function(c,l){return c==null?void 0:c[l]}},1789:(a,c,l)=>{var d=l(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:a=>{a.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(a,c,l)=>{var d=l(4536),f=Object.prototype.hasOwnProperty;a.exports=function(h){var m=this.__data__;if(d){var x=m[h];return x==="__lodash_hash_undefined__"?void 0:x}return f.call(m,h)?m[h]:void 0}},1327:(a,c,l)=>{var d=l(4536),f=Object.prototype.hasOwnProperty;a.exports=function(h){var m=this.__data__;return d?m[h]!==void 0:f.call(m,h)}},1866:(a,c,l)=>{var d=l(4536);a.exports=function(f,h){var m=this.__data__;return this.size+=this.has(f)?0:1,m[f]=d&&h===void 0?"__lodash_hash_undefined__":h,this}},5776:a=>{var c=/^(?:0|[1-9]\d*)$/;a.exports=function(l,d){var f=typeof l;return!!(d=d??9007199254740991)&&(f=="number"||f!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<d}},7019:a=>{a.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(a,c,l)=>{var d,f=l(4429),h=(d=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(m){return!!h&&h in m}},5726:a=>{var c=Object.prototype;a.exports=function(l){var d=l&&l.constructor;return l===(typeof d=="function"&&d.prototype||c)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,c,l)=>{var d=l(8470),f=Array.prototype.splice;a.exports=function(h){var m=this.__data__,x=d(m,h);return!(x<0||(x==m.length-1?m.pop():f.call(m,x,1),--this.size,0))}},2117:(a,c,l)=>{var d=l(8470);a.exports=function(f){var h=this.__data__,m=d(h,f);return m<0?void 0:h[m][1]}},7518:(a,c,l)=>{var d=l(8470);a.exports=function(f){return d(this.__data__,f)>-1}},4705:(a,c,l)=>{var d=l(8470);a.exports=function(f,h){var m=this.__data__,x=d(m,f);return x<0?(++this.size,m.push([f,h])):m[x][1]=h,this}},4785:(a,c,l)=>{var d=l(1989),f=l(8407),h=l(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(h||f),string:new d}}},1285:(a,c,l)=>{var d=l(5050);a.exports=function(f){var h=d(this,f).delete(f);return this.size-=h?1:0,h}},6e3:(a,c,l)=>{var d=l(5050);a.exports=function(f){return d(this,f).get(f)}},9916:(a,c,l)=>{var d=l(5050);a.exports=function(f){return d(this,f).has(f)}},5265:(a,c,l)=>{var d=l(5050);a.exports=function(f,h){var m=d(this,f),x=m.size;return m.set(f,h),this.size+=m.size==x?0:1,this}},8776:a=>{a.exports=function(c){var l=-1,d=Array(c.size);return c.forEach(function(f,h){d[++l]=[h,f]}),d}},4536:(a,c,l)=>{var d=l(852)(Object,"create");a.exports=d},6916:(a,c,l)=>{var d=l(5569)(Object.keys,Object);a.exports=d},1167:(a,c,l)=>{a=l.nmd(a);var d=l(1957),f=c&&!c.nodeType&&c,h=f&&a&&!a.nodeType&&a,m=h&&h.exports===f&&d.process,x=function(){try{return h&&h.require&&h.require("util").types||m&&m.binding&&m.binding("util")}catch{}}();a.exports=x},2333:a=>{var c=Object.prototype.toString;a.exports=function(l){return c.call(l)}},5569:a=>{a.exports=function(c,l){return function(d){return c(l(d))}}},5639:(a,c,l)=>{var d=l(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,h=d||f||Function("return this")();a.exports=h},619:a=>{a.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(c){return this.__data__.has(c)}},1814:a=>{a.exports=function(c){var l=-1,d=Array(c.size);return c.forEach(function(f){d[++l]=f}),d}},7465:(a,c,l)=>{var d=l(8407);a.exports=function(){this.__data__=new d,this.size=0}},3779:a=>{a.exports=function(c){var l=this.__data__,d=l.delete(c);return this.size=l.size,d}},7599:a=>{a.exports=function(c){return this.__data__.get(c)}},4758:a=>{a.exports=function(c){return this.__data__.has(c)}},4309:(a,c,l)=>{var d=l(8407),f=l(7071),h=l(3369);a.exports=function(m,x){var y=this.__data__;if(y instanceof d){var g=y.__data__;if(!f||g.length<199)return g.push([m,x]),this.size=++y.size,this;y=this.__data__=new h(g)}return y.set(m,x),this.size=y.size,this}},346:a=>{var c=Function.prototype.toString;a.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:a=>{a.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(a,c,l)=>{var d=l(9454),f=l(7005),h=Object.prototype,m=h.hasOwnProperty,x=h.propertyIsEnumerable,y=d(function(){return arguments}())?d:function(g){return f(g)&&m.call(g,"callee")&&!x.call(g,"callee")};a.exports=y},1469:a=>{var c=Array.isArray;a.exports=c},8612:(a,c,l)=>{var d=l(3560),f=l(1780);a.exports=function(h){return h!=null&&f(h.length)&&!d(h)}},4144:(a,c,l)=>{a=l.nmd(a);var d=l(5639),f=l(5062),h=c&&!c.nodeType&&c,m=h&&a&&!a.nodeType&&a,x=m&&m.exports===h?d.Buffer:void 0,y=(x?x.isBuffer:void 0)||f;a.exports=y},8446:(a,c,l)=>{var d=l(939);a.exports=function(f,h){return d(f,h)}},3560:(a,c,l)=>{var d=l(4239),f=l(3218);a.exports=function(h){if(!f(h))return!1;var m=d(h);return m=="[object Function]"||m=="[object GeneratorFunction]"||m=="[object AsyncFunction]"||m=="[object Proxy]"}},1780:a=>{a.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:a=>{a.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:a=>{a.exports=function(c){return c!=null&&typeof c=="object"}},6719:(a,c,l)=>{var d=l(8749),f=l(1717),h=l(1167),m=h&&h.isTypedArray,x=m?f(m):d;a.exports=x},3674:(a,c,l)=>{var d=l(4636),f=l(280),h=l(8612);a.exports=function(m){return h(m)?d(m):f(m)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var c,l,d,f,h,m;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(c()-h)/1e6},l=process.hrtime,f=(c=function(){var x;return 1e9*(x=l())[0]+x[1]})(),m=1e9*process.uptime(),h=f-m):Date.now?(a.exports=function(){return Date.now()-d},d=Date.now()):(a.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(a,c,l)=>{for(var d=l(75),f=typeof window>"u"?l.g:window,h=["moz","webkit"],m="AnimationFrame",x=f["request"+m],y=f["cancel"+m]||f["cancelRequest"+m],g=0;!x&&g<h.length;g++)x=f[h[g]+"Request"+m],y=f[h[g]+"Cancel"+m]||f[h[g]+"CancelRequest"+m];if(!x||!y){var p=0,v=0,_=[];x=function(S){if(_.length===0){var A=d(),b=Math.max(0,16.666666666666668-(A-p));p=b+A,setTimeout(function(){var C=_.slice(0);_.length=0;for(var N=0;N<C.length;N++)if(!C[N].cancelled)try{C[N].callback(p)}catch(w){setTimeout(function(){throw w},0)}},Math.round(b))}return _.push({handle:++v,callback:S,cancelled:!1}),v},y=function(S){for(var A=0;A<_.length;A++)_[A].handle===S&&(_[A].cancelled=!0)}}a.exports=function(S){return x.call(f,S)},a.exports.cancel=function(){y.apply(f,arguments)},a.exports.polyfill=function(S){S||(S=f),S.requestAnimationFrame=x,S.cancelAnimationFrame=y}},8156:a=>{a.exports=n}},r={};function s(a){var c=r[a];if(c!==void 0)return c.exports;var l=r[a]={id:a,loaded:!1,exports:{}};return i[a].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return s.d(c,{a:c}),c},s.d=(a,c)=>{for(var l in c)s.o(c,l)&&!s.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),s.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var o={};return(()=>{s.d(o,{default:()=>_});var a=s(8156),c=s.n(a),l=s(7403),d=s(8446),f=s.n(d);function h(S){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},h(S)}function m(S,A){for(var b=0;b<A.length;b++){var C=A[b];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(S,p(C.key),C)}}function x(S,A){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,C){return b.__proto__=C,b},x(S,A)}function y(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function g(S){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},g(S)}function p(S){var A=function(b,C){if(h(b)!=="object"||b===null)return b;var N=b[Symbol.toPrimitive];if(N!==void 0){var w=N.call(b,"string");if(h(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(S);return h(A)==="symbol"?A:String(A)}var v=function(S){(function(R,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");R.prototype=Object.create(z&&z.prototype,{constructor:{value:R,writable:!0,configurable:!0}}),Object.defineProperty(R,"prototype",{writable:!1}),z&&x(R,z)})(E,S);var A,b,C,N,w=(C=E,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var R,z=g(C);if(N){var k=g(this).constructor;R=Reflect.construct(z,arguments,k)}else R=z.apply(this,arguments);return function(q,Y){if(Y&&(h(Y)==="object"||typeof Y=="function"))return Y;if(Y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(q)}(this,R)});function E(){var R,z,k,q;(function(I,H){if(!(I instanceof H))throw new TypeError("Cannot call a class as a function")})(this,E);for(var Y=arguments.length,V=new Array(Y),Z=0;Z<Y;Z++)V[Z]=arguments[Z];return z=y(R=w.call.apply(w,[this].concat(V))),q={instance:null},(k=p(k="state"))in z?Object.defineProperty(z,k,{value:q,enumerable:!0,configurable:!0,writable:!0}):z[k]=q,R}return A=E,(b=[{key:"componentDidMount",value:function(){var R=this,z=new l.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var k=R.props.onInit;k&&k(z)})}},{key:"componentDidUpdate",value:function(R){f()(this.props.options,R.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var R=this,z=this.props.component;return c().createElement(z,{ref:function(k){return R.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&m(A.prototype,b),Object.defineProperty(A,"prototype",{writable:!1}),E}(a.Component);v.defaultProps={component:"div"};const _=v})(),o.default})())})(Jv);var aE=Jv.exports;const oE=qx(aE);function lE({text:t}){const{theme:e}=ri();return u.jsx("div",{className:"mb-4 w-full flex justify-center",children:u.jsx("h2",{className:`w-fit text-[13vw] sm:text-[3rem] font-bold ${e=="light"?"text-primary":"bg-gradient-to-r text-transparent bg-clip-text from-pumpkin-100 via-pumpkin-300 to-pumpkin-500"}`,children:t})})}function Vn({title:t,children:e,glow:n=!0}){const{theme:i}=ri();return u.jsx("div",{className:"py-20 text-center",children:u.jsxs(Et,{children:[u.jsx(lE,{text:t}),u.jsx("div",{className:`mt-8 ${n&&i=="dark"&&"shadow-pumpkin overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]"}`,children:e})]})})}const fm=["<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Valedictorian</span> graduate with a 92.08% rate, excelling in problem-solving and data structures.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Regional Contestant</span> in the Arab and African Collegiate Programming Contest (ACPC) and a <span class='text-pumpkin font-bold'>gold medalist</span> in ACPC for Girls (2020).</li>","<li class='custom-bullet pb-3'>Over 3+ years of experience as a <span class='text-pumpkin font-bold'>Full-Stack Developer</span>, specializing in Laravel and MVC architecture for a while, currently focusing on Front-End Development with React, Next.js, and RESTful APIs.</li>","<li class='custom-bullet pb-3'>Proficient in <span class='text-pumpkin font-bold'>C++ development</span> for over 4 years, with expertise in <span class='text-pumpkin font-bold'>problem-solving</span> and code complexity analysis.</li>","<li class='custom-bullet pb-3'><span class='text-pumpkin font-bold'>Skilled in 3D rendering</span> technologies like OpenGL, WebGL, Three.js, and Blender through multiple projects.</li>","<li class='custom-bullet pb-3'>Passionate about innovation and committed to excellence, ready to contribute effectively to any software development team.</li>"];function cE(){const[t,e]=mo({threshold:.1});return u.jsx(Vn,{title:"About Me",children:u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-12",children:[u.jsxs("div",{ref:t,className:"order-1 md:order-0 flex-grow self-start text-[1rem] mx-auto text-left sm:h-[24rem] md:h-[34rem] lg:h-[24rem] xl:h-[18rem]",children:[u.jsx("div",{className:"hidden sm:block",children:e&&u.jsx(oE,{onInit:n=>{fm.forEach(i=>{n.typeString(i).pauseFor(300)}),n.start()},options:{loop:!1,delay:1,cursor:""}})}),u.jsx("div",{className:"sm:hidden",children:u.jsx("ul",{children:fm.map((n,i)=>u.jsx("li",{className:"pb-3",dangerouslySetInnerHTML:{__html:n}},i))})})]}),u.jsx("div",{className:"relative order-0 md:order-1",children:u.jsx("div",{children:u.jsx(Et,{children:u.jsx(Qv,{className:"max-h-[16rem] md:min-w-[16rem] rounded-[30px]",imgClass:"shadow-primary",src:"images/on-laptop.png"})})})})]})})}const uE=()=>u.jsxs(u.Fragment,{children:[u.jsx(sE,{}),u.jsx(Rn,{children:u.jsx(cE,{})})]});function Vt({children:t,hoverEffect:e=!0,className:n=""}){return u.jsx("div",{className:`text-white p-4 rounded-[1rem] shadow-lg text-[0.9rem] h-full ${e&&"transform hover:scale-105 transition-transform duration-300"} bg-primary-800 ${n}`,children:t})}function ex({name:t,company:e,description:n,skills:i,videoURL:r}){return u.jsx(Vt,{hoverEffect:!1,children:u.jsxs("div",{className:"flex flex-col justify-between h-full",children:[u.jsxs("div",{className:"text-center mb-4",children:[t&&u.jsx("h3",{className:"text-xl font-semibold",children:t}),e&&u.jsxs("p",{children:["(",e,")"]}),n&&u.jsx("div",{className:"mt-2 space-y-1 text-base text-left",dangerouslySetInnerHTML:{__html:n}}),i&&u.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:i.map((s,o)=>u.jsx("div",{className:"flex-grow",children:u.jsx(Et,{children:u.jsx("div",{className:`text-center text-primary-800 rounded-xl p-[6px] font-[800] ${s.isSelected?"bg-white":"bg-secondary-400"}`,children:s.name},o)})},o))})]}),r&&u.jsx("iframe",{className:"w-full h-[19rem] rounded-xl mt-4",src:r,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})})}function tx(){const t=[9,3,2,11,1,7,10,8,6,12,5,4],e=[{id:1,name:"Personal OpenGL Project",company:"personal",description:"Developed independently during my 4th year of college. I implemented all features from scratch, including camera controls and complex leg movement animations.",videoURL:"https://www.youtube.com/embed/3FuEZsCRrLE?si=7FujH2aP7kZSw5c7",order:{date:1,interest:0},skills:["OpenGL","C++"]},{id:2,name:"University 4th-year Project",company:"university",description:"I have expertise in OpenGL and problem-solving, which led me to work with WebGL on our university project, an interactive interface for a problem-solving website. I was responsible for developing the WebGL section and contributing to project discussions.",videoURL:"https://www.youtube.com/embed/Nw-1ZhRH1qc?si=QT0i0XQZrpnzuI-l",order:{date:2,interest:0},skills:["WebGL","Laravel"]},{id:3,name:"University 5th-year Project",company:"university",description:"We used three.js and Blender for this project. I had various tasks, including building stairs, adjusting the camera for smooth movement when going up and down, defining pathfinding points for the player, and setting borders to prevent the player from passing through obstacles like walls or columns.",videoURL:"https://www.youtube.com/embed/gealUwMSrSM?si=RhYZqFcJXoBHTzC6",order:{date:3,interest:0},skills:["Three.js","Laravel"]},{id:4,name:"Other Projects / WordPress",company:"aratech",description:"Worked on various web development tasks at Aratech, including multiple WordPress projects. Contributed to front-end and back-end functionality across different sites, with additional projects beyond what is showcased.",videoURL:"https://www.youtube.com/embed/UT-_oq7lSNw?si=tXVKSkXHqYvY32WR",order:{date:4,interest:0},skills:["WordPress"]},{id:5,name:"IDB",company:"aratech",description:"Developed a full-stack project using Laravel for both backend and frontend, with Blade for the UI and a dashboard powered by Laravel Nova.",videoURL:"https://www.youtube.com/embed/RqxRiu7AEio?si=S07Fa9rCQsaNyxrb",order:{date:5,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:6,name:"E-buy",company:"aratech",description:"This is a Laravel project where I was primarily responsible for the frontend development using Blade templates, along with handling some other basic tasks.",videoURL:"https://www.youtube.com/embed/1H7muNMIKEU?si=Ys5hEQ9WCF4IH6Ox",order:{date:6,interest:0},skills:["Laravel","Blade","Tailwind"]},{id:7,name:"Qahwah House",company:"DivCodes",description:"Led the front-end development of an e-commerce website using React and Next.js, delivering an optimized and interactive user experience.",videoURL:"https://www.youtube.com/embed/FTqieNtWHTU?si=nGafYM-swda3Rfg4",order:{date:7,interest:0},skills:["React","Next.js","Tailwind"]},{id:8,name:"DIVPOS",company:"DivCodes",description:"Developed a customizable e-commerce dashboard using React, designed with modular components to allow easy customization by the development team to fit customer-specific requirements.",videoURL:"https://www.youtube.com/embed/HEqpv8OhjkQ?si=IdFtkMLQO418Ye4H",order:{date:8,interest:0},skills:["React","Next.js","Tailwind"]},{id:9,name:"Sunglasses Try On",company:"Eyes 360",description:"Adjusted a 3D sunglasses model on user's face using Google Face Landmark Detection and Babylon.js for precise positioning and a seamless user experience.",videoURL:"https://www.youtube.com/embed/u7HfBL37Ytg?si=TUSp1ZeqrZEIJXBc",order:{date:9,interest:0},skills:["WebGL","Babylon.js","Svelte"]},{id:10,name:"EuNet",company:"Stark Technologies",description:"A web hosting website available in two languages. It features an AI-powered chatbot for 24/7 assistance. The site is built using React and Next.js. It includes visually appealing reusable components that present information clearly with an attractive design, along with well-designed forms for user onboarding.",videoURL:"https://www.youtube.com/embed/nzy92nlbBI4?si=UsvvuLTts9lZfaAE",order:{date:10,interest:0},skills:["React","Next.js","Tailwind"]},{id:11,name:"Patitas",company:"Personal / test application",description:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before. With the help of online tutorials and AI tools, I was able to quickly learn and implement new concepts, demonstrating my ability to adapt and learn fastly. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/repo-prueba'>HERE</a>.",videoURL:"https://www.youtube.com/embed/3_p-boncOEs?si=EeLnvLWhSDEZys61",order:{date:11,interest:0},skills:["Angular","Spring Boot","Tailwind"]},{id:12,name:"Articalization",company:"Personal / test application",description:"In this project, I built a client-side news aggregation application that gathers articles from various external sources using public APIs. Users can filter the news by date, category, search query, and source, with paginated results for easy navigation. They can also customize their experience by adding preferred sources, authors, and categories, tailoring the news feed to their personal interests. You can check out the project <a class='underline' href='https://github.com/Nagham-Qarqamaz/articalization'>HERE</a>.",videoURL:"https://www.youtube.com/embed/9V-b1aAr0dQ?si=cw-vIE_bUP9ZGdez",order:{date:12,interest:0},skills:["React","Redux","Tailwind"]}];t.forEach((i,r)=>{const s=e.find(o=>o.id===i);s&&(s.order.interest=r+1)});const n=new Set;return e.forEach(i=>{i.skills.forEach(r=>{n.add(r)})}),{projects:e,projectsSkills:n}}function hm(){const[t,e]=j.useState(!1);return u.jsx("div",{className:"relative",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:u.jsx("svg",{className:`fill-current ${t?"text-pumpkin-600":"text-pumpkin-700"}`,width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"})})})}function pm(){return u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M4.89163 13.2687L9.16582 17.5427L18.7085 8",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}const{projects:dE,projectsSkills:xr}=tx();function fE(){const[t,e]=j.useState("Most Interesting"),[n,i]=j.useState(!1),[r,s]=j.useState(new Set(xr)),o=[...dE].filter(l=>l.skills.some(d=>r.has(d))).sort((l,d)=>t==="Latest"?d.order.date-l.order.date:t==="Most Interesting"?l.order.interest-d.order.interest:t==="Oldest"?l.order.date-d.order.date:0),a=l=>{s(d=>{const f=new Set(d);return f.has(l)?f.delete(l):f.add(l),f})},c=()=>{r.size===xr.size?s(new Set):s(new Set(xr))};return u.jsxs(Vn,{title:"Projects",children:[u.jsxs("div",{className:"relative flex flex-wrap gap-2 mb-4",children:[u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("div",{children:u.jsx("button",{onClick:()=>e("Latest"),className:`px-4 py-2 text-white ${t==="Latest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Latest"})}),u.jsx("div",{children:u.jsx("button",{onClick:()=>e("Most Interesting"),className:`px-4 py-2 text-white ${t==="Most Interesting"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Most Interesting"})}),u.jsx("div",{children:u.jsx("button",{onClick:()=>e("Oldest"),className:`px-4 py-2 text-white ${t==="Oldest"?"bg-pumpkin-600":"bg-pumpkin-800"} rounded-lg`,children:"Oldest"})}),u.jsx("button",{className:"lg:hidden",onClick:()=>i(!n),children:u.jsx(hm,{})})]}),u.jsxs("div",{className:"lg:ml-8 flex-grow justify-items-start lg:w-[30rem]",children:[u.jsx("button",{className:"hidden lg:block",onClick:()=>i(!n),children:u.jsx(hm,{})}),u.jsx("div",{className:`lg:mt-4 transition-all duration-300 ease-in-out ${n?"max-h-[5000px] opacity-100":"max-h-0 opacity-0"} overflow-hidden`,children:u.jsxs("div",{children:[u.jsxs("label",{className:"flex items-center space-x-2 text-lg font-bold mb-2 cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:r.size===xr.size,onChange:c,className:"hidden"}),u.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.size===xr.size?"bg-pumpkin":"bg-none"}`,children:r.size===xr.size&&u.jsx(pm,{})}),u.jsx("span",{children:"Select All"})]}),u.jsx("div",{className:"flex flex-wrap gap-x-8 mt-4",children:[...xr].map(l=>u.jsxs("label",{className:"w-32 flex items-center space-x-2 mb-2 cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:r.has(l),onChange:()=>a(l),className:"hidden"}),u.jsx("div",{className:`h-5 w-5 rounded border border-pumpkin ${r.has(l)?"bg-pumpkin":"bg-none"}`,children:r.has(l)&&u.jsx(pm,{})}),u.jsx("span",{children:l})]},l))})]})})]})]}),u.jsx("div",{className:"grid lg:grid-cols-2 gap-x-4 gap-y-8 sm:gap-8",children:o.map((l,d)=>u.jsx(ex,{name:l.name,company:l.company,description:l.description,skills:l.skills.map(f=>({name:f,isSelected:r.has(f)})),videoURL:l.videoURL},d))})]})}const hE=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(fE,{})})});function pE(){const{id:t}=oS(),e=ho(),{theme:n}=ri(),{projects:i}=tx(),r=i.find(s=>s.id===parseInt(t||"0"));return r?u.jsx(Rn,{children:u.jsx(Vn,{title:`${r.name}`,children:u.jsxs("div",{className:`${n=="dark"?"py-4 lg:py-8":""}`,children:[u.jsxs("div",{className:"mb-6",children:[u.jsx("h2",{className:`text-2xl font-semibold mb-2 ${n=="dark"?"text-pumpkin-100":"text-pumpkin-700"}`,children:"Description"}),u.jsx("div",{className:"sm:text-xl leading-relaxed",dangerouslySetInnerHTML:{__html:r.description}})]}),u.jsxs("div",{className:"mb-8 flex flex-col items-center",children:[u.jsx("h2",{className:`text-2xl font-semibold mb-2 text-center ${n=="dark"?"text-pumpkin-100":"text-pumpkin-700"}`,children:"Technologies Used"}),u.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:r.skills.map((s,o)=>u.jsx("span",{className:"px-4 py-2 rounded-xl font-semibold bg-primary-600 text-white",children:s},o))})]}),r.videoURL&&u.jsxs("div",{className:"flex flex-col items-center",children:[u.jsx("h2",{className:`text-2xl font-semibold mb-2 text-center ${n=="dark"?"text-pumpkin-100":"text-pumpkin-700"}`,children:"Demo Video"}),u.jsx("iframe",{className:"w-full max-w-[50rem] h-[19rem] sm:h-[28rem] rounded-xl mt-4",src:r.videoURL,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})]})]})})}):u.jsx("div",{className:"min-h-screen flex items-center justify-center",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Project Not Found"}),u.jsx(Xs,{text:"Back to Projects",onClick:()=>e("/portfolio/projects"),loading:!1,loadingText:""})]})})}function oc({children:t}){const[e,n]=mo({threshold:.1});return u.jsx("div",{ref:e,className:`w-full h-full ${n?"animate-slide-in-from-bottom":"opacity-0"}`,children:t})}function gt({src:t,title:e,description:n}){const{theme:i}=ri(),r=()=>{window.open(t,"_blank")};return u.jsx("div",{className:"cursor-pointer",onClick:r,children:u.jsx(oc,{children:u.jsxs("div",{className:`
                    relative group overflow-hidden rounded-xl p-6 w-[12rem] 
                    ${i==="light"?"bg-white border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg":"bg-secondary-800 border-2 border-secondary-600 hover:border-primary-400 hover:shadow-lg hover:shadow-primary-500/20"}
                    transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]
                `,children:[u.jsx("div",{className:"absolute inset-0 opacity-5 bg-gradient-to-br from-primary-400 to-primary-600"}),u.jsx("svg",{className:`w-8 h-8 mb-3 ${i==="light"?"text-primary-600":"text-primary-400"}`,fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"})}),u.jsx("div",{className:"font-semibold text-center text-sm",children:e}),n&&u.jsx("div",{className:"text-xs mt-1 text-center",children:n}),u.jsx("div",{className:`
                        absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-300
                    `})]})})})}function mE(){const{theme:t}=ri();return u.jsxs(Vn,{glow:!1,title:"Certificates",children:[u.jsx(Et,{children:u.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mb-16`,children:u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"International Collegiate Programming Contest Certificates"}),u.jsxs("div",{className:"flex flex-col gap-12",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between gap-12",children:[u.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2018 International Collegiate Programming Contest"}),u.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:gE})]}),u.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2019 International Collegiate Programming Contest"}),u.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:vE})]})]}),u.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2020 Africa and Arab Collegiate Programming Contest for GIRLS"}),u.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4",children:mm}),u.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:mm})]}),u.jsxs("div",{className:`${t=="light"?"":"bg-secondary-700"} overflow-hidden p-4 sm:p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-lg font-semibold mb-6",children:"The 2022 International Collegiate Programming Contest"}),u.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4",children:gm}),u.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:gm})]})]})]})})}),u.jsx(Et,{children:u.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Academic Outstanding Certificates"}),u.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4",children:vm}),u.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:vm})]})})}),u.jsx(Et,{children:u.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mt-16`,children:u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"University Certificates"}),u.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 md:grid-cols-3 gap-4",children:xm}),u.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:xm})]})})}),u.jsx(Et,{children:u.jsx("div",{className:`${t=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem] mt-16`,children:u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"High School Certificates"}),u.jsx("div",{className:"hidden sm:grid justify-self-center sm:grid-cols-2 gap-4",children:_m}),u.jsx("div",{className:"sm:hidden flex flex-wrap justify-center gap-4",children:_m})]})})})]})}const gE=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1yOUu_ugBDhia143sGRzz_tqFwxFnrmVa/view?usp=drive_link",title:"Tishreen University"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1TIzEsuN9N87fSKr_cApxW7PZ0QUBINVk/view?usp=drive_link",title:"SCPC: Syrian"})]}),vE=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1qYHabPucKVRbvpN807oC8VhdDwJBuK8B/view?usp=drive_link",title:"Tishreen University"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1o-R3FrsHU2zQK6D0N0GBFCpob74U8xuw/view?usp=drive_link",title:"SCPC: Syrian"})]}),mm=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1bNRpZLROCasslgfP7YVtZdD1TpTRzx3c/view?usp=drive_link",title:"Fourth Place"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1k4bZ_zU8ovfrR49hzvA0TumRBVekfJm_/view?usp=drive_link",title:"Extreme Programmers"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1A7jHtEwZ2T6C74Vng-52kHOE7F9Whm54/view?usp=drive_link",title:"Solid Programmers"}),u.jsx(gt,{src:"https://drive.google.com/file/d/17OpQoGrx-6AdThCCYhFfQPrOV34m2aKl/view?usp=drive_link",title:"Steadfast Gurus"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1IUV5dYJsEkyUitRIfcwLEAuTxwMS7FmK/view?usp=drive_link",title:"First to solve problem A"})]}),gm=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1f8gRedctZNoP8as5V9aV4fp48yleoELT/view?usp=drive_link",title:"Tishreen University"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1jyvGxdESV68OzpB0To2_BfSIELyP1xwa/view?usp=drive_link",title:"SCPC: Syrian"}),u.jsx(gt,{src:"https://drive.google.com/file/d/13t779-hwczNUrCF4gdDY3p3pQSwesitE/view?usp=drive_link",title:"ACPC: Arabic"})]}),vm=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1BBRqo8204JToOmeuTSu6-uY8JfFNr3VM/view?usp=drive_link",title:"2017 / 2018"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1wilDS5L3kqUtACHyZL4kEaNeGHlLKwe4/view?usp=drive_link",title:"2018 / 2019"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1HliJy0vEqCOo_uC8rNWmFmqAVn5Tqv3P/view?usp=drive_link",title:"2019 / 2020"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1tPGbclkRuQoqvvxDZw4km_f8ZoXX_ePn/view?usp=drive_link",title:"2020 / 2021"}),u.jsx(gt,{src:"https://drive.google.com/file/d/18aCO2mIrE0qRPJ1wcEoUN4s8mwQ_I7IE/view?usp=drive_link",title:"2021 / 2022"})]}),xm=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1k2Qul8MPJCqazq4bx96vIPH8CBRNeZQd/view?usp=drive_link",title:"Bachelor's Certificate"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1U7OOiAKb22TOzmRhY0Z3Py4gTDHsTarN/view?usp=drive_link",title:"Graduation Certificate"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1SxEBPgwK9yFYziMQeJV62DHaKgidw4u0/view?usp=drive_link",title:"Transcript of Grades"})]}),_m=u.jsxs(u.Fragment,{children:[u.jsx(gt,{src:"https://drive.google.com/file/d/1LX9wHAcuHoAUd9MO9Ax8VkK-SFxY2Z9Y/view?usp=drive_link",title:"High School Certificate"}),u.jsx(gt,{src:"https://drive.google.com/file/d/1UkuT0vAQ14xYKFGcmwBpFMJU3MNQ2o1G/view?usp=drive_link",title:"General High School Certificate"})]}),xE=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(mE,{})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="168",_E=0,ym=1,yE=2,nx=1,SE=2,pi=3,lr=0,on=1,vi=2,rr=0,Fs=1,Sm=2,Em=3,Mm=4,EE=5,Pr=100,ME=101,wE=102,TE=103,bE=104,CE=200,AE=201,RE=202,PE=203,zd=204,Bd=205,NE=206,LE=207,DE=208,IE=209,UE=210,FE=211,OE=212,kE=213,jE=214,zE=0,BE=1,HE=2,lc=3,VE=4,GE=5,WE=6,XE=7,ix=0,$E=1,qE=2,sr=0,YE=1,KE=2,QE=3,ZE=4,JE=5,eM=6,tM=7,rx=300,$s=301,qs=302,Hd=303,Vd=304,Dc=306,Gd=1e3,Ur=1001,Wd=1002,Tn=1003,nM=1004,Vo=1005,kn=1006,gu=1007,Fr=1008,Pi=1009,sx=1010,ax=1011,no=1012,Nh=1013,Xr=1014,yi=1015,go=1016,Lh=1017,Dh=1018,Ys=1020,ox=35902,lx=1021,cx=1022,jn=1023,ux=1024,dx=1025,Os=1026,Ks=1027,fx=1028,Ih=1029,hx=1030,Uh=1031,Fh=1033,Cl=33776,Al=33777,Rl=33778,Pl=33779,Xd=35840,$d=35841,qd=35842,Yd=35843,Kd=36196,Qd=37492,Zd=37496,Jd=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,df=37819,ff=37820,hf=37821,Nl=36492,pf=36494,mf=36495,px=36283,gf=36284,vf=36285,xf=36286,iM=3200,rM=3201,mx=0,sM=1,Xi="",$n="srgb",pr="srgb-linear",Oh="display-p3",Ic="display-p3-linear",cc="linear",rt="srgb",uc="rec709",dc="p3",Jr=7680,wm=519,aM=512,oM=513,lM=514,gx=515,cM=516,uM=517,dM=518,fM=519,Tm=35044,bm="300 es",Si=2e3,fc=2001;class ia{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,_f=180/Math.PI;function vo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function hM(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],y=r[0],g=r[3],p=r[6],v=r[1],_=r[4],S=r[7],A=r[2],b=r[5],C=r[8];return s[0]=o*y+a*v+c*A,s[3]=o*g+a*_+c*b,s[6]=o*p+a*S+c*C,s[1]=l*y+d*v+f*A,s[4]=l*g+d*_+f*b,s[7]=l*p+d*S+f*C,s[2]=h*y+m*v+x*A,s[5]=h*g+m*_+x*b,s[8]=h*p+m*S+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return n*o*d-n*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,h=a*c-d*s,m=l*s-o*c,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*l-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new ke;function vx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pM(){const t=io("canvas");return t.style.display="block",t}const Cm={};function Fa(t){t in Cm||(Cm[t]=!0,console.warn(t))}function mM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Am=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[pr]:{transfer:cc,primaries:uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:rt,primaries:uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ic]:{transfer:cc,primaries:dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am)},[Oh]:{transfer:rt,primaries:dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am).convertLinearToSRGB()}},gM=new Set([pr,Ic]),Je={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ma[e].toReference,r=ma[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ma[t].primaries},getTransfer:function(t){return t===Xi?cc:ma[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ma[e].luminanceCoefficients)}};function ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class vM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=io("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class Kt extends ia{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=Ur,r=Ur,s=kn,o=Fr,a=jn,c=Pi,l=Kt.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=vo(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=rx;Kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],m=c[5],x=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,S=(m+1)/2,A=(p+1)/2,b=(d+h)/4,C=(f+y)/4,N=(x+g)/4;return _>S&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=C/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(f-y)/v,this.z=(h-d)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends ia{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends yM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _x extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(f!==y||c!==h||l!==m||d!==x){let g=1-a;const p=c*h+l*m+d*x+f*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),b=Math.atan2(A,p*v);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A}const S=a*v;if(c=c*g+h*S,l=l*g+m*S,d=d*g+x*S,f=f*g+y*S,g===1-a){const A=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=A,l*=A,d*=A,f*=A}}e[n]=c,e[n+1]=l,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+d*f+c*m-l*h,e[n+1]=c*x+d*h+l*f-a*m,e[n+2]=l*x+d*m+a*h-c*f,e[n+3]=d*x-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),f=a(s/2),h=c(i/2),m=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=h*d*f+l*m*x,this._y=l*m*f-h*d*x,this._z=l*d*x+h*m*f,this._w=l*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+l*m*x,this._y=l*m*f-h*d*x,this._z=l*d*x-h*m*f,this._w=l*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-l*m*x,this._y=l*m*f+h*d*x,this._z=l*d*x+h*m*f,this._w=l*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-l*m*x,this._y=l*m*f+h*d*x,this._z=l*d*x-h*m*f,this._w=l*d*f+h*m*x;break;case"YZX":this._x=h*d*f+l*m*x,this._y=l*m*f+h*d*x,this._z=l*d*x-h*m*f,this._w=l*d*f-h*m*x;break;case"XZY":this._x=h*d*f-l*m*x,this._y=l*m*f-h*d*x,this._z=l*d*x+h*m*f,this._w=l*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,d=n._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-n)*d)/l,h=Math.sin(n*d)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+c*l+o*f-a*d,this.y=i+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new X,Pm=new xo;class _o{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Wo.subVectors(this.max,ga),ts.subVectors(e.a,ga),ns.subVectors(e.b,ga),is.subVectors(e.c,ga),Ui.subVectors(ns,ts),Fi.subVectors(is,ns),_r.subVectors(ts,is);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-_r.z,_r.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,_r.z,0,-_r.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-_r.y,_r.x,0];return!Mu(n,ts,ns,is,Wo)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,ts,ns,is,Wo))?!1:(Xo.crossVectors(Ui,Fi),n=[Xo.x,Xo.y,Xo.z],Mu(n,ts,ns,is,Wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new X,new X,new X,new X,new X,new X,new X,new X],Ln=new X,Go=new _o,ts=new X,ns=new X,is=new X,Ui=new X,Fi=new X,_r=new X,ga=new X,Wo=new X,Xo=new X,yr=new X;function Mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),l=n.dot(yr),d=i.dot(yr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const EM=new _o,va=new X,wu=new X;let kh=class{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const n=va.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(wu)),this.expandByPoint(va.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ci=new X,Tu=new X,$o=new X,Oi=new X,bu=new X,qo=new X,Cu=new X;class MM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($o),a=Oi.dot(this.direction),c=-Oi.dot($o),l=Oi.lengthSq(),d=Math.abs(1-o*o);let f,h,m,x;if(d>0)if(f=o*c-a,h=o*a-c,x=s*d,f>=0)if(h>=-x)if(h<=x){const y=1/d;f*=y,h*=y,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tu).addScaledVector($o,h),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),qo.subVectors(i,e),Cu.crossVectors(bu,qo);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const c=a*this.direction.dot(qo.crossVectors(Oi,qo));if(c<0)return null;const l=a*this.direction.dot(bu.cross(Oi));if(l<0||c+l>o)return null;const d=-a*Oi.dot(Cu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,c,l,d,f,h,m,x,y,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,d,f,h,m,x,y,g)}set(e,n,i,r,s,o,a,c,l,d,f,h,m,x,y,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=h,p[3]=m,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,x=a*d,y=a*f;n[0]=c*d,n[4]=-c*f,n[8]=l,n[1]=m+x*l,n[5]=h-y*l,n[9]=-a*c,n[2]=y-h*l,n[6]=x+m*l,n[10]=o*c}else if(e.order==="YXZ"){const h=c*d,m=c*f,x=l*d,y=l*f;n[0]=h+y*a,n[4]=x*a-m,n[8]=o*l,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=o*c}else if(e.order==="ZXY"){const h=c*d,m=c*f,x=l*d,y=l*f;n[0]=h-y*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const h=o*d,m=o*f,x=a*d,y=a*f;n[0]=c*d,n[4]=x*l-m,n[8]=h*l+y,n[1]=c*f,n[5]=y*l+h,n[9]=m*l-x,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,x=a*c,y=a*l;n[0]=c*d,n[4]=y-h*f,n[8]=x*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-l*d,n[6]=m*f+x,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*c,m=o*l,x=a*c,y=a*l;n[0]=c*d,n[4]=-f,n[8]=l*d,n[1]=h*f+y,n[5]=o*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wM,e,TM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(i,dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(i,dn)),ki.normalize(),Yo.crossVectors(dn,ki),r[0]=ki.x,r[4]=Yo.x,r[8]=dn.x,r[1]=ki.y,r[5]=Yo.y,r[9]=dn.y,r[2]=ki.z,r[6]=Yo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],y=i[6],g=i[10],p=i[14],v=i[3],_=i[7],S=i[11],A=i[15],b=r[0],C=r[4],N=r[8],w=r[12],E=r[1],R=r[5],z=r[9],k=r[13],q=r[2],Y=r[6],V=r[10],Z=r[14],I=r[3],H=r[7],B=r[11],Q=r[15];return s[0]=o*b+a*E+c*q+l*I,s[4]=o*C+a*R+c*Y+l*H,s[8]=o*N+a*z+c*V+l*B,s[12]=o*w+a*k+c*Z+l*Q,s[1]=d*b+f*E+h*q+m*I,s[5]=d*C+f*R+h*Y+m*H,s[9]=d*N+f*z+h*V+m*B,s[13]=d*w+f*k+h*Z+m*Q,s[2]=x*b+y*E+g*q+p*I,s[6]=x*C+y*R+g*Y+p*H,s[10]=x*N+y*z+g*V+p*B,s[14]=x*w+y*k+g*Z+p*Q,s[3]=v*b+_*E+S*q+A*I,s[7]=v*C+_*R+S*Y+A*H,s[11]=v*N+_*z+S*V+A*B,s[15]=v*w+_*k+S*Z+A*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],y=e[7],g=e[11],p=e[15];return x*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+n*c*m-n*l*h+s*o*h-r*o*m+r*l*d-s*c*d)+g*(+n*l*f-n*a*m-s*o*f+i*o*m+s*a*d-i*l*d)+p*(-r*a*d-n*c*f+n*a*h+r*o*f-i*o*h+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],y=e[13],g=e[14],p=e[15],v=f*g*l-y*h*l+y*c*m-a*g*m-f*c*p+a*h*p,_=x*h*l-d*g*l-x*c*m+o*g*m+d*c*p-o*h*p,S=d*y*l-x*f*l+x*a*m-o*y*m-d*a*p+o*f*p,A=x*f*c-d*y*c-x*a*h+o*y*h+d*a*g-o*f*g,b=n*v+i*_+r*S+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(y*h*s-f*g*s-y*r*m+i*g*m+f*r*p-i*h*p)*C,e[2]=(a*g*s-y*c*s+y*r*l-i*g*l-a*r*p+i*c*p)*C,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*m-i*c*m)*C,e[4]=_*C,e[5]=(d*g*s-x*h*s+x*r*m-n*g*m-d*r*p+n*h*p)*C,e[6]=(x*c*s-o*g*s-x*r*l+n*g*l+o*r*p-n*c*p)*C,e[7]=(o*h*s-d*c*s+d*r*l-n*h*l-o*r*m+n*c*m)*C,e[8]=S*C,e[9]=(x*f*s-d*y*s-x*i*m+n*y*m+d*i*p-n*f*p)*C,e[10]=(o*y*s-x*a*s+x*i*l-n*y*l-o*i*p+n*a*p)*C,e[11]=(d*a*s-o*f*s-d*i*l+n*f*l+o*i*m-n*a*m)*C,e[12]=A*C,e[13]=(d*y*r-x*f*r+x*i*h-n*y*h-d*i*g+n*f*g)*C,e[14]=(x*a*r-o*y*r-x*i*c+n*y*c+o*i*g-n*a*g)*C,e[15]=(o*f*r-d*a*r+d*i*c-n*f*c-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,d=o+o,f=a+a,h=s*l,m=s*d,x=s*f,y=o*d,g=o*f,p=a*f,v=c*l,_=c*d,S=c*f,A=i.x,b=i.y,C=i.z;return r[0]=(1-(y+p))*A,r[1]=(m+S)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(h+p))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(x+_)*C,r[9]=(g-v)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const l=1/s,d=1/o,f=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const c=this.elements,l=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===Si)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const c=this.elements,l=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*l,m=(i+r)*d;let x,y;if(a===Si)x=(o+s)*f,y=-2*f;else if(a===fc)x=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new X,Dn=new xt,wM=new X(0,0,0),TM=new X(1,1,1),ki=new X,Yo=new X,dn=new X,Nm=new xt,Lm=new xo;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bM=0;const Dm=new X,ss=new xo,ui=new xt,Ko=new X,xa=new X,CM=new X,AM=new xo,Im=new X(1,0,0),Um=new X(0,1,0),Fm=new X(0,0,1),Om={type:"added"},RM={type:"removed"},as={type:"childadded",child:null},Au={type:"childremoved",child:null};class Gt extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,n=new ii,i=new xo,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ke}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(xa,Ko,this.up):ui.lookAt(Ko,xa,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(ui),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Om),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RM),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Om),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new X,di=new X,Ru=new X,fi=new X,os=new X,ls=new X,km=new X,Pu=new X,Nu=new X,Lu=new X;class Kn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),di.subVectors(i,n),Ru.subVectors(e,n);const o=In.dot(In),a=In.dot(di),c=In.dot(Ru),l=di.dot(di),d=di.dot(Ru),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-a*d)*h,x=(o*d-a*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),di.subVectors(e,n),In.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),di.subVectors(this.a,this.b),In.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),ls.subVectors(s,i),Pu.subVectors(e,i);const c=os.dot(Pu),l=ls.dot(Pu);if(c<=0&&l<=0)return n.copy(i);Nu.subVectors(e,r);const d=os.dot(Nu),f=ls.dot(Nu);if(d>=0&&f<=d)return n.copy(r);const h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),n.copy(i).addScaledVector(os,o);Lu.subVectors(e,s);const m=os.dot(Lu),x=ls.dot(Lu);if(x>=0&&m<=x)return n.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),n.copy(i).addScaledVector(ls,a);const g=d*x-m*f;if(g<=0&&f-d>=0&&m-x>=0)return km.subVectors(s,r),a=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector(km,a);const p=1/(g+y+h);return o=y*p,a=h*p,n.copy(i).addScaledVector(os,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=hM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=Sx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(tn(zt.r*255,0,255))*65536+Math.round(tn(zt.g*255,0,255))*256+Math.round(tn(zt.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=$n){Je.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Qo);const i=xu(ji.h,Qo.h,n),r=xu(ji.s,Qo.s,n),s=xu(ji.l,Qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=Sx;let PM=0;class yo extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=Fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ex extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new X,Zo=new Xe;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}}class Mx extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wx extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ti extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const yn=new xt,Iu=new Gt,cs=new X,fn=new _o,_a=new _o,Rt=new X;class mr extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?wx:Mx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ti(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fn.min,_a.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,_a.max),fn.expandByPoint(Rt)):(fn.expandByPoint(_a.min),fn.expandByPoint(_a.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Rt.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),Rt.add(cs)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new X,c[N]=new X;const l=new X,d=new X,f=new X,h=new Xe,m=new Xe,x=new Xe,y=new X,g=new X;function p(N,w,E){l.fromBufferAttribute(i,N),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,E),d.sub(l),f.sub(l),m.sub(h),x.sub(h);const R=1/(m.x*x.y-x.x*m.y);isFinite(R)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(R),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(R),a[N].add(y),a[w].add(y),a[E].add(y),c[N].add(g),c[w].add(g),c[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,w=v.length;N<w;++N){const E=v[N],R=E.start,z=E.count;for(let k=R,q=R+z;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new X,S=new X,A=new X,b=new X;function C(N){A.fromBufferAttribute(r,N),b.copy(A);const w=a[N];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(b,w);const R=S.dot(c[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,R)}for(let N=0,w=v.length;N<w;++N){const E=v[N],R=E.start,z=E.count;for(let k=R,q=R+z;k<q;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,d=new X,f=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,h=new l.constructor(c.length*d);let m=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*d;for(let p=0;p<d;p++)h[x++]=l[m++]}return new ei(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mr,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const h=l[d],m=e(h,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(n))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new xt,Sr=new MM,Jo=new kh,zm=new X,us=new X,ds=new X,fs=new X,Uu=new X,el=new X,tl=new Xe,nl=new Xe,il=new Xe,Bm=new X,Hm=new X,Vm=new X,rl=new X,sl=new X;class Qn extends Gt{constructor(e=new mr,n=new Ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],f=s[c];d!==0&&(Uu.fromBufferAttribute(f,e),o?el.addScaledVector(Uu,d):el.addScaledVector(Uu.sub(n),d))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Jo.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Jo,zm)===null||Sr.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(jm.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){const b=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);r=al(this,p,e,i,l,d,f,b,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);r=al(this,o,e,i,l,d,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,A=_;S<A;S+=3){const b=S,C=S+1,N=S+2;r=al(this,p,e,i,l,d,f,b,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){const v=g,_=g+1,S=g+2;r=al(this,o,e,i,l,d,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function LM(t,e,n,i,r,s,o,a){let c;if(e.side===on?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===lr,a),c===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(sl);return l<n.near||l>n.far?null:{distance:l,point:sl.clone(),object:t}}function al(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,us),t.getVertexPosition(c,ds),t.getVertexPosition(l,fs);const d=LM(t,e,n,i,us,ds,fs,rl);if(d){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,c),il.fromBufferAttribute(r,l),d.uv=Kn.getInterpolation(rl,us,ds,fs,tl,nl,il,new Xe)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,c),il.fromBufferAttribute(s,l),d.uv1=Kn.getInterpolation(rl,us,ds,fs,tl,nl,il,new Xe)),o&&(Bm.fromBufferAttribute(o,a),Hm.fromBufferAttribute(o,c),Vm.fromBufferAttribute(o,l),d.normal=Kn.getInterpolation(rl,us,ds,fs,Bm,Hm,Vm,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};Kn.getNormal(us,ds,fs,f.normal),d.face=f}return d}class So extends mr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ti(l,3)),this.setAttribute("normal",new ti(d,3)),this.setAttribute("uv",new ti(f,2));function x(y,g,p,v,_,S,A,b,C,N,w){const E=S/C,R=A/N,z=S/2,k=A/2,q=b/2,Y=C+1,V=N+1;let Z=0,I=0;const H=new X;for(let B=0;B<V;B++){const Q=B*R-k;for(let se=0;se<Y;se++){const De=se*E-z;H[y]=De*v,H[g]=Q*_,H[p]=q,l.push(H.x,H.y,H.z),H[y]=0,H[g]=0,H[p]=b>0?1:-1,d.push(H.x,H.y,H.z),f.push(se/C),f.push(1-B/N),Z+=1}}for(let B=0;B<N;B++)for(let Q=0;Q<C;Q++){const se=h+Q+Y*B,De=h+Q+Y*(B+1),P=h+(Q+1)+Y*(B+1),ae=h+(Q+1)+Y*B;c.push(se,De,ae),c.push(De,P,ae),I+=6}a.addGroup(m,I,w),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Qs(t[n]);for(const r in i)e[r]=i[r]}return e}function DM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const IM={clone:Qs,merge:$t};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bx extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new X,Gm=new Xe,Wm=new Xe;class Mn extends bx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class OM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new Mn(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new Mn(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new Mn(hs,ps,e,n);a.layers=this.layers,this.add(a);const c=new Mn(hs,ps,e,n);c.layers=this.layers,this.add(c);const l=new Mn(hs,ps,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Cx extends Kt{constructor(e,n,i,r,s,o,a,c,l,d){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kM extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new So(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:rr});s.uniforms.tEquirect.value=n;const o=new Qn(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=kn),new OM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fu=new X,jM=new X,zM=new ke;class Ar{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fu.subVectors(i,n).cross(jM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zM.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new kh,ol=new X;class jh{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],y=r[10],g=r[11],p=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-s,h-l,g-m,S-p).normalize(),i[1].setComponents(c+s,h+l,g+m,S+p).normalize(),i[2].setComponents(c+o,h+d,g+x,S+v).normalize(),i[3].setComponents(c-o,h-d,g-x,S-v).normalize(),i[4].setComponents(c-a,h-f,g-y,S-_).normalize(),n===Si)i[5].setComponents(c+a,h+f,g+y,S+_).normalize();else if(n===fc)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ax(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BM(t){const e=new WeakMap;function n(a,c){const l=a.array,d=a.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=t.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=t.SHORT;else if(l instanceof Uint32Array)m=t.UNSIGNED_INT;else if(l instanceof Int32Array)m=t.INT;else if(l instanceof Int8Array)m=t.BYTE;else if(l instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const d=c.array,f=c._updateRange,h=c.updateRanges;if(t.bindBuffer(l,a),f.count===-1&&h.length===0&&t.bufferSubData(l,0,d),h.length!==0){for(let m=0,x=h.length;m<x;m++){const y=h[m];t.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Uc extends mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,f=e/a,h=n/c,m=[],x=[],y=[],g=[];for(let p=0;p<d;p++){const v=p*h-o;for(let _=0;_<l;_++){const S=_*f-s;x.push(S,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+l*p,S=v+l*(p+1),A=v+1+l*(p+1),b=v+1+l*p;m.push(_,S,b),m.push(S,A,b)}this.setIndex(m),this.setAttribute("position",new ti(x,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dw=`#define PI 3.141592653589793
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
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hw=`vec3 transformedNormal = objectNormal;
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
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",_w=`
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
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rw=`#ifdef USE_GRADIENTMAP
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
}`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
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
#endif`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jw=`PhysicalMaterial material;
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
#endif`,zw=`struct PhysicalMaterial {
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
}`,Bw=`
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qw=`#if defined( USE_POINTS_UV )
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
#endif`,Zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`#ifdef USE_MORPHTARGETS
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
#endif`,r2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u2=`#ifdef USE_NORMALMAP
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
#endif`,d2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b2=`float getShadowMask() {
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
}`,C2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A2=`#ifdef USE_SKINNING
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
#endif`,R2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P2=`#ifdef USE_SKINNING
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
#endif`,N2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U2=`#ifdef USE_TRANSMISSION
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
#endif`,F2=`#ifdef USE_TRANSMISSION
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
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H2=`uniform sampler2D t2D;
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`#include <common>
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
}`,q2=`#if DEPTH_PACKING == 3200
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
}`,Y2=`#define DISTANCE
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
}`,K2=`#define DISTANCE
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
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,aT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,hT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,_T=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:HM,alphahash_pars_fragment:VM,alphamap_fragment:GM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:$M,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:KM,batching_vertex:QM,begin_vertex:ZM,beginnormal_vertex:JM,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:aw,color_fragment:ow,color_pars_fragment:lw,color_pars_vertex:cw,color_vertex:uw,common:dw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:hw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:vw,colorspace_fragment:xw,colorspace_pars_fragment:_w,envmap_fragment:yw,envmap_common_pars_fragment:Sw,envmap_pars_fragment:Ew,envmap_pars_vertex:Mw,envmap_physical_pars_fragment:Iw,envmap_vertex:ww,fog_vertex:Tw,fog_pars_vertex:bw,fog_fragment:Cw,fog_pars_fragment:Aw,gradientmap_pars_fragment:Rw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Nw,lights_lambert_pars_fragment:Lw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Fw,lights_phong_fragment:Ow,lights_phong_pars_fragment:kw,lights_physical_fragment:jw,lights_physical_pars_fragment:zw,lights_fragment_begin:Bw,lights_fragment_maps:Hw,lights_fragment_end:Vw,logdepthbuf_fragment:Gw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:$w,map_fragment:qw,map_pars_fragment:Yw,map_particle_fragment:Kw,map_particle_pars_fragment:Qw,metalnessmap_fragment:Zw,metalnessmap_pars_fragment:Jw,morphinstance_vertex:e2,morphcolor_vertex:t2,morphnormal_vertex:n2,morphtarget_pars_vertex:i2,morphtarget_vertex:r2,normal_fragment_begin:s2,normal_fragment_maps:a2,normal_pars_fragment:o2,normal_pars_vertex:l2,normal_vertex:c2,normalmap_pars_fragment:u2,clearcoat_normal_fragment_begin:d2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:h2,iridescence_pars_fragment:p2,opaque_fragment:m2,packing:g2,premultiplied_alpha_fragment:v2,project_vertex:x2,dithering_fragment:_2,dithering_pars_fragment:y2,roughnessmap_fragment:S2,roughnessmap_pars_fragment:E2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:w2,shadowmap_vertex:T2,shadowmask_pars_fragment:b2,skinbase_vertex:C2,skinning_pars_vertex:A2,skinning_vertex:R2,skinnormal_vertex:P2,specularmap_fragment:N2,specularmap_pars_fragment:L2,tonemapping_fragment:D2,tonemapping_pars_fragment:I2,transmission_fragment:U2,transmission_pars_fragment:F2,uv_pars_fragment:O2,uv_pars_vertex:k2,uv_vertex:j2,worldpos_vertex:z2,background_vert:B2,background_frag:H2,backgroundCube_vert:V2,backgroundCube_frag:G2,cube_vert:W2,cube_frag:X2,depth_vert:$2,depth_frag:q2,distanceRGBA_vert:Y2,distanceRGBA_frag:K2,equirect_vert:Q2,equirect_frag:Z2,linedashed_vert:J2,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:aT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:vT,shadow_frag:xT,sprite_vert:_T,sprite_frag:yT},he={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},qn={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};qn.physical={uniforms:$t([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ll={r:0,b:0,g:0},Mr=new ii,ST=new xt;function ET(t,e,n,i,r,s,o){const a=new qe(0);let c=s===!0?0:1,l,d,f=null,h=0,m=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=x(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===Dc)?(d===void 0&&(d=new Qn(new So(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Qs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Mr.copy(_.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Mr)),d.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,(f!==S||h!==S.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qn(new Uc(2,2),new cr({name:"BackgroundMaterial",uniforms:Qs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,m=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(ll,Tx(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:g}}function MT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,R,z,k,q){let Y=!1;const V=f(k,z,R);s!==V&&(s=V,l(s.object)),Y=m(E,k,z,q),Y&&x(E,k,z,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(E,R,z,k),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return t.createVertexArray()}function l(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,R,z){const k=z.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let Y=q[R.id];Y===void 0&&(Y={},q[R.id]=Y);let V=Y[k];return V===void 0&&(V=h(c()),Y[k]=V),V}function h(E){const R=[],z=[],k=[];for(let q=0;q<n;q++)R[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:E,attributes:{},index:null}}function m(E,R,z,k){const q=s.attributes,Y=R.attributes;let V=0;const Z=z.getAttributes();for(const I in Z)if(Z[I].location>=0){const B=q[I];let Q=Y[I];if(Q===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function x(E,R,z,k){const q={},Y=R.attributes;let V=0;const Z=z.getAttributes();for(const I in Z)if(Z[I].location>=0){let B=Y[I];B===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(B=E.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),q[I]=Q,V++}s.attributes=q,s.attributesNum=V,s.index=k}function y(){const E=s.newAttributes;for(let R=0,z=E.length;R<z;R++)E[R]=0}function g(E){p(E,0)}function p(E,R){const z=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;z[E]=1,k[E]===0&&(t.enableVertexAttribArray(E),k[E]=1),q[E]!==R&&(t.vertexAttribDivisor(E,R),q[E]=R)}function v(){const E=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==E[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function _(E,R,z,k,q,Y,V){V===!0?t.vertexAttribIPointer(E,R,z,q,Y):t.vertexAttribPointer(E,R,z,k,q,Y)}function S(E,R,z,k){y();const q=k.attributes,Y=z.getAttributes(),V=R.defaultAttributeValues;for(const Z in Y){const I=Y[Z];if(I.location>=0){let H=q[Z];if(H===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(H=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(H=E.instanceColor)),H!==void 0){const B=H.normalized,Q=H.itemSize,se=e.get(H);if(se===void 0)continue;const De=se.buffer,P=se.type,ae=se.bytesPerElement,K=P===t.INT||P===t.UNSIGNED_INT||H.gpuType===Nh;if(H.isInterleavedBufferAttribute){const re=H.data,xe=re.stride,Me=H.offset;if(re.isInstancedInterleavedBuffer){for(let ye=0;ye<I.locationSize;ye++)p(I.location+ye,re.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<I.locationSize;ye++)g(I.location+ye);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ye=0;ye<I.locationSize;ye++)_(I.location+ye,Q/I.locationSize,P,B,xe*ae,(Me+Q/I.locationSize*ye)*ae,K)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<I.locationSize;re++)p(I.location+re,H.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<I.locationSize;re++)g(I.location+re);t.bindBuffer(t.ARRAY_BUFFER,De);for(let re=0;re<I.locationSize;re++)_(I.location+re,Q/I.locationSize,P,B,Q*ae,Q/I.locationSize*re*ae,K)}}else if(V!==void 0){const B=V[Z];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(I.location,B);break;case 3:t.vertexAttrib3fv(I.location,B);break;case 4:t.vertexAttrib4fv(I.location,B);break;default:t.vertexAttrib1fv(I.location,B)}}}}v()}function A(){N();for(const E in i){const R=i[E];for(const z in R){const k=R[z];for(const q in k)d(k[q].object),delete k[q];delete R[z]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const z in R){const k=R[z];for(const q in k)d(k[q].object),delete k[q];delete R[z]}delete i[E.id]}function C(E){for(const R in i){const z=i[R];if(z[E.id]===void 0)continue;const k=z[E.id];for(const q in k)d(k[q].object),delete k[q];delete z[E.id]}}function N(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function wT(t,e,n){let i;function r(l){i=l}function s(l,d){t.drawArrays(i,l,d),n.update(d,i,1)}function o(l,d,f){f!==0&&(t.drawArraysInstanced(i,l,d,f),n.update(d,i,f))}function a(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x];n.update(m,i,1)}function c(l,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)o(l[x],d[x],h[x]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y];for(let y=0;y<h.length;y++)n.update(x,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function TT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==jn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Pi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==yi&&!C)}function c(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function bT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||x===null||x.length===0||s&&!g)s?d(null):l();else{const v=s?0:i,_=v*4;let S=p.clippingState||null;c.value=S,S=d(x,h,_,m);for(let A=0;A!==_;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=c.value,x!==!0||g===null){const p=m+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,S=m;_!==y;++_,S+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function CT(t){let e=new WeakMap;function n(o,a){return a===Hd?o.mapping=$s:a===Vd&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hd||a===Vd)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new kM(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rx extends bx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Xm=[.125,.215,.35,.446,.526,.582],Nr=20,Ou=new Rx,$m=new qe;let ku=null,ju=0,zu=0,Bu=!1;const Rr=(1+Math.sqrt(5))/2,ms=1/Rr,qm=[new X(-Rr,ms,0),new X(Rr,ms,0),new X(-ms,0,Rr),new X(ms,0,Rr),new X(0,Rr,-ms),new X(0,Rr,ms),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku,ju,zu),this._renderer.xr.enabled=Bu,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:go,format:jn,colorSpace:pr,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(s)),this._blurMaterial=RT(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor($m),d.toneMapping=sr,d.autoClear=!1;const m=new Ex({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new Qn(new So,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy($m),y=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;cl(r,v*_,p>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;cl(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qm[(r-s-1)%qm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Qn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),y=s/x,g=isFinite(s)?1+Math.floor(d*y):Nr;g>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const p=[];let v=0;for(let C=0;C<Nr;++C){const N=C/y,w=Math.exp(-N*N/2);p.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const S=this._sizeLods[r],A=3*S*(r>_-As?r-_+As:0),b=4*(this._cubeSize-S);cl(n,A,b,3*S,2*S),c.setRenderTarget(n),c.render(f,Ou)}}function AT(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+Xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-As?c=Xm[o-t+As-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,f=1+l,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,y=3,g=2,p=1,v=new Float32Array(y*x*m),_=new Float32Array(g*x*m),S=new Float32Array(p*x*m);for(let b=0;b<m;b++){const C=b%3*2/3-1,N=b>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];v.set(w,y*x*b),_.set(h,g*x*b);const E=[b,b,b,b,b,b];S.set(E,p*x*b)}const A=new mr;A.setAttribute("position",new ei(v,y)),A.setAttribute("uv",new ei(_,g)),A.setAttribute("faceIndex",new ei(S,p)),e.push(A),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RT(t,e,n){const i=new Float32Array(Nr),r=new X(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Qm(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Zm(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function PT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hd||c===Vd,d=c===$s||c===qs;if(l||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ym(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return l&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Ym(t)),f=l?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function NT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function LT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function c(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const y=m[x];for(let g=0,p=y.length;g<p;g++)e.update(y[g],t.ARRAY_BUFFER)}}function l(f){const h=[],m=f.index,x=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let _=0,S=v.length;_<S;_+=3){const A=v[_+0],b=v[_+1],C=v[_+2];h.push(A,b,b,C,C,A)}}else if(x!==void 0){const v=x.array;y=x.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const A=_+0,b=_+1,C=_+2;h.push(A,b,b,C,C,A)}}else return;const g=new(vx(h)?wx:Mx)(h,1);g.version=y;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function DT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function l(h,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,h*o,x),n.update(m,i,x))}function d(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,x);let g=0;for(let p=0;p<x;p++)g+=m[p];n.update(g,i,1)}function f(h,m,x,y){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,m[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,x);let p=0;for(let v=0;v<x;v++)p+=m[v];for(let v=0;v<y.length;v++)n.update(p,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UT(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*b*4*f),N=new _x(C,A,b,f);N.type=yi,N.needsUpdate=!0;const w=S*4;for(let R=0;R<f;R++){const z=p[R],k=v[R],q=_[R],Y=A*b*4*R;for(let V=0;V<z.count;V++){const Z=V*w;x===!0&&(r.fromBufferAttribute(z,V),C[Y+Z+0]=r.x,C[Y+Z+1]=r.y,C[Y+Z+2]=r.z,C[Y+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,V),C[Y+Z+4]=r.x,C[Y+Z+5]=r.y,C[Y+Z+6]=r.z,C[Y+Z+7]=0),g===!0&&(r.fromBufferAttribute(q,V),C[Y+Z+8]=r.x,C[Y+Z+9]=r.y,C[Y+Z+10]=r.z,C[Y+Z+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Xe(A,b)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<l.length;g++)x+=l[g];const y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function FT(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}class Px extends Kt{constructor(e,n,i,r,s,o,a,c,l,d=Os){if(d!==Os&&d!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Os&&(i=Xr),i===void 0&&d===Ks&&(i=Ys),super(null,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Nx=new Kt,Jm=new Px(1,1),Lx=new _x,Dx=new SM,Ix=new Cx,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=tg[e];n===void 0&&(n=new Int32Array(e),tg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;rg.set(i),t.uniformMatrix2fv(this.addr,!1,rg),At(n,i)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;ig.set(i),t.uniformMatrix3fv(this.addr,!1,ig),At(n,i)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Ct(n,i))return;ng.set(i),t.uniformMatrix4fv(this.addr,!1,ng),At(n,i)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jm.compareFunction=gx,s=Jm):s=Nx,n.setTexture2D(e||s,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dx,r)}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ix,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lx,r)}function nb(t){switch(t){case 5126:return OT;case 35664:return kT;case 35665:return jT;case 35666:return zT;case 35674:return BT;case 35675:return HT;case 35676:return VT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return $T;case 5125:return qT;case 36294:return YT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}function ib(t,e){t.uniform1fv(this.addr,e)}function rb(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function sb(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function ab(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function ob(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lb(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cb(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ub(t,e){t.uniform1iv(this.addr,e)}function db(t,e){t.uniform2iv(this.addr,e)}function fb(t,e){t.uniform3iv(this.addr,e)}function hb(t,e){t.uniform4iv(this.addr,e)}function pb(t,e){t.uniform1uiv(this.addr,e)}function mb(t,e){t.uniform2uiv(this.addr,e)}function gb(t,e){t.uniform3uiv(this.addr,e)}function vb(t,e){t.uniform4uiv(this.addr,e)}function xb(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Nx,s[o])}function _b(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dx,s[o])}function yb(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ix,s[o])}function Sb(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lx,s[o])}function Eb(t){switch(t){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Mb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nb(n.type)}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Eb(n.type)}}class Tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function sg(t,e){t.seq.push(e),t.map[e.id]=e}function bb(t,e,n){const i=t.name,r=i.length;for(Hu.lastIndex=0;;){const s=Hu.exec(i),o=Hu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){sg(n,l===void 0?new Mb(a,t,e):new wb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Tb(a),sg(n,f)),n=f}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);bb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ag(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Cb=37297;let Ab=0;function Rb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Pb(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===dc&&n===uc?i="LinearDisplayP3ToLinearSRGB":e===uc&&n===dc&&(i="LinearSRGBToLinearDisplayP3"),t){case pr:case Ic:return[i,"LinearTransferOETF"];case $n:case Oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Rb(t.getShaderSource(e),o)}else return r}function Nb(t,e){const n=Pb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Lb(t,e){let n;switch(e){case YE:n="Linear";break;case KE:n="Reinhard";break;case QE:n="Cineon";break;case ZE:n="ACESFilmic";break;case eM:n="AgX";break;case tM:n="Neutral";break;case JE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ul=new X;function Db(){Je.getLuminanceCoefficients(ul);const t=ul.x.toFixed(4),e=ul.y.toFixed(4),n=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ib(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function Ub(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ba(t){return t!==""}function lg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(t){return t.replace(Ob,jb)}const kb=new Map;function jb(t,e){let n=Oe[e];if(n===void 0){const i=kb.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yf(n)}const zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(t){return t.replace(zb,Bb)}function Bb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Hb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===SE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case qs:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Wb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case $E:e="ENVMAP_BLENDING_MIX";break;case qE:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $b(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=Hb(n),l=Vb(n),d=Gb(n),f=Wb(n),h=Xb(n),m=Ib(n),x=Ub(s),y=r.createProgram();let g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ba).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(g=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Oe.tonemapping_pars_fragment:"",n.toneMapping!==sr?Lb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),Db(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ba).join(`
`)),o=yf(o),o=lg(o,n),o=cg(o,n),a=yf(a),a=lg(a,n),a=cg(a,n),o=ug(o),a=ug(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+o,S=v+p+a,A=ag(r,r.VERTEX_SHADER,_),b=ag(r,r.FRAGMENT_SHADER,S);r.attachShader(y,A),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(b).trim();let Y=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,A,b);else{const Z=og(r,A,"vertex"),I=og(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||q==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:g},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(b),N=new Ll(r,y),w=Fb(r,y)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,Cb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=b,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Kb(e),n.set(e,i)),i}}class Kb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function Qb(t,e,n,i,r,s,o){const a=new yx,c=new Yb,l=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,E,R,z,k){const q=z.fog,Y=k.geometry,V=w.isMeshStandardMaterial?z.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),I=Z&&Z.mapping===Dc?Z.image.height:null,H=x[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=B!==void 0?B.length:0;let se=0;Y.morphAttributes.position!==void 0&&(se=1),Y.morphAttributes.normal!==void 0&&(se=2),Y.morphAttributes.color!==void 0&&(se=3);let De,P,ae,K;if(H){const Ye=qn[H];De=Ye.vertexShader,P=Ye.fragmentShader}else De=w.vertexShader,P=w.fragmentShader,c.update(w),ae=c.getVertexShaderID(w),K=c.getFragmentShaderID(w);const re=t.getRenderTarget(),xe=k.isInstancedMesh===!0,Me=k.isBatchedMesh===!0,ye=!!w.map,He=!!w.matcap,D=!!Z,tt=!!w.aoMap,Ve=!!w.lightMap,$e=!!w.bumpMap,we=!!w.normalMap,ft=!!w.displacementMap,Ae=!!w.emissiveMap,Ie=!!w.metalnessMap,L=!!w.roughnessMap,M=w.anisotropy>0,$=w.clearcoat>0,ee=w.dispersion>0,ie=w.iridescence>0,te=w.sheen>0,be=w.transmission>0,fe=M&&!!w.anisotropyMap,ge=$&&!!w.clearcoatMap,Fe=$&&!!w.clearcoatNormalMap,le=$&&!!w.clearcoatRoughnessMap,me=ie&&!!w.iridescenceMap,je=ie&&!!w.iridescenceThicknessMap,Re=te&&!!w.sheenColorMap,_e=te&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,ze=!!w.specularColorMap,ot=!!w.specularIntensityMap,U=be&&!!w.transmissionMap,ce=be&&!!w.thicknessMap,J=!!w.gradientMap,ne=!!w.alphaMap,de=w.alphaTest>0,Pe=!!w.alphaHash,Ge=!!w.extensions;let _t=sr;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Lt={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:P,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Me,batchingColor:Me&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:pr,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:He,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:I,aoMap:tt,lightMap:Ve,bumpMap:$e,normalMap:we,displacementMap:h&&ft,emissiveMap:Ae,normalMapObjectSpace:we&&w.normalMapType===sM,normalMapTangentSpace:we&&w.normalMapType===mx,metalnessMap:Ie,roughnessMap:L,anisotropy:M,anisotropyMap:fe,clearcoat:$,clearcoatMap:ge,clearcoatNormalMap:Fe,clearcoatRoughnessMap:le,dispersion:ee,iridescence:ie,iridescenceMap:me,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:ze,specularIntensityMap:ot,transmission:be,transmissionMap:U,thicknessMap:ce,gradientMap:J,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:Pe,combine:w.combine,mapUv:ye&&y(w.map.channel),aoMapUv:tt&&y(w.aoMap.channel),lightMapUv:Ve&&y(w.lightMap.channel),bumpMapUv:$e&&y(w.bumpMap.channel),normalMapUv:we&&y(w.normalMap.channel),displacementMapUv:ft&&y(w.displacementMap.channel),emissiveMapUv:Ae&&y(w.emissiveMap.channel),metalnessMapUv:Ie&&y(w.metalnessMap.channel),roughnessMapUv:L&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:ge&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:je&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:Ue&&y(w.specularMap.channel),specularColorMapUv:ze&&y(w.specularColorMap.channel),specularIntensityMapUv:ot&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:ce&&y(w.thicknessMap.channel),alphaMapUv:ne&&y(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ye||ne),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vi,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)E.push(R),E.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(E,w),_(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){const E=x[w.type];let R;if(E){const z=qn[E];R=IM.clone(z.uniforms)}else R=w.uniforms;return R}function A(w,E){let R;for(let z=0,k=d.length;z<k;z++){const q=d[z];if(q.cacheKey===E){R=q,++R.usedTimes;break}}return R===void 0&&(R=new $b(t,E,w,s),d.push(R)),R}function b(w){if(--w.usedTimes===0){const E=d.indexOf(w);d[E]=d[d.length-1],d.pop(),w.destroy()}}function C(w){c.remove(w)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:d,dispose:N}}function Zb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,x,y,g){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=y,p.group=g),e++,p}function a(f,h,m,x,y,g){const p=o(f,h,m,x,y,g);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,h,m,x,y,g){const p=o(f,h,m,x,y,g);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function l(f,h){n.length>1&&n.sort(f||Jb),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function eC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new hg,t.set(i,[o])):r>=s.length?(o=new hg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new qe};break;case"SpotLight":n={position:new X,direction:new X,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function nC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iC=0;function rC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sC(t){const e=new tC,n=nC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new xt,o=new xt;function a(l){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,y=0,g=0,p=0,v=0,_=0,S=0,A=0,b=0,C=0;l.sort(rC);for(let w=0,E=l.length;w<E;w++){const R=l[w],z=R.color,k=R.intensity,q=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*k,f+=z.g*k,h+=z.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],k);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,v++}i.directional[m]=V,m++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=q,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[y]=V;const Z=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[y]=Z.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=Y,S++}y++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=V,g++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,I=n.get(R);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=R.shadow.matrix,_++}i.point[x]=V,x++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=V,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==x||N.spotLength!==y||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==_||N.numSpotShadows!==S||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,N.directionalLength=m,N.pointLength=x,N.spotLength=y,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=S,N.numSpotMaps=A,N.numLightProbes=C,i.version=iC++)}function c(l,d){let f=0,h=0,m=0,x=0,y=0;const g=d.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(_.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function pg(t){const e=new sC(t),n=[],i=[];function r(d){l.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function c(d){e.setupView(n,d)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function aC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pg(t),e.set(r,[a])):s>=o.length?(a=new pg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class oC extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lC extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uC=`uniform sampler2D shadow_pass;
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
}`;function dC(t,e,n){let i=new jh;const r=new Xe,s=new Xe,o=new Tt,a=new oC({depthPacking:rM}),c=new lC,l={},d=n.maxTextureSize,f={[lr]:on,[on]:lr,[vi]:vi},h=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:cC,fragmentShader:uC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new mr;x.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qn(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nx;let p=this.type;this.render=function(b,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(rr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==pi&&this.type===pi,q=p===pi&&this.type!==pi;for(let Y=0,V=b.length;Y<V;Y++){const Z=b[Y],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const H=I.getFrameExtents();if(r.multiply(H),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/H.x),r.x=s.x*H.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/H.y),r.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null||k===!0||q===!0){const Q=this.type!==pi?{minFilter:Tn,magFilter:Tn}:{};I.map!==null&&I.map.dispose(),I.map=new $r(r.x,r.y,Q),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const B=I.getViewportCount();for(let Q=0;Q<B;Q++){const se=I.getViewport(Q);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(o),I.updateMatrices(Z,Q),i=I.getFrustum(),S(C,N,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&v(I,N),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(w,E,R)};function v(b,C){const N=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $r(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,N,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,N,m,y,null)}function _(b,C,N,w){let E=null;const R=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)E=R;else if(E=N.isPointLight===!0?c:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=E.uuid,k=C.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let Y=q[k];Y===void 0&&(Y=E.clone(),q[k]=Y,C.addEventListener("dispose",A)),E=Y}if(E.visible=C.visible,E.wireframe=C.wireframe,w===pi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=t.properties.get(E);z.light=N}return E}function S(b,C,N,w,E){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const k=e.update(b),q=b.material;if(Array.isArray(q)){const Y=k.groups;for(let V=0,Z=Y.length;V<Z;V++){const I=Y[V],H=q[I.materialIndex];if(H&&H.visible){const B=_(b,H,w,E);b.onBeforeShadow(t,b,C,N,k,B,I),t.renderBufferDirect(N,null,k,B,b,I),b.onAfterShadow(t,b,C,N,k,B,I)}}}else if(q.visible){const Y=_(b,q,w,E);b.onBeforeShadow(t,b,C,N,k,Y,null),t.renderBufferDirect(N,null,k,Y,b,null),b.onAfterShadow(t,b,C,N,k,Y,null)}}const z=b.children;for(let k=0,q=z.length;k<q;k++)S(z[k],C,N,w,E)}function A(b){b.target.removeEventListener("dispose",A);for(const N in l){const w=l[N],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function fC(t){function e(){let U=!1;const ce=new Tt;let J=null;const ne=new Tt(0,0,0,0);return{setMask:function(de){J!==de&&!U&&(t.colorMask(de,de,de,de),J=de)},setLocked:function(de){U=de},setClear:function(de,Pe,Ge,_t,Lt){Lt===!0&&(de*=_t,Pe*=_t,Ge*=_t),ce.set(de,Pe,Ge,_t),ne.equals(ce)===!1&&(t.clearColor(de,Pe,Ge,_t),ne.copy(ce))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,ce=null,J=null,ne=null;return{setTest:function(de){de?K(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!U&&(t.depthMask(de),ce=de)},setFunc:function(de){if(J!==de){switch(de){case zE:t.depthFunc(t.NEVER);break;case BE:t.depthFunc(t.ALWAYS);break;case HE:t.depthFunc(t.LESS);break;case lc:t.depthFunc(t.LEQUAL);break;case VE:t.depthFunc(t.EQUAL);break;case GE:t.depthFunc(t.GEQUAL);break;case WE:t.depthFunc(t.GREATER);break;case XE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){ne!==de&&(t.clearDepth(de),ne=de)},reset:function(){U=!1,ce=null,J=null,ne=null}}}function i(){let U=!1,ce=null,J=null,ne=null,de=null,Pe=null,Ge=null,_t=null,Lt=null;return{setTest:function(Ye){U||(Ye?K(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(Ye){ce!==Ye&&!U&&(t.stencilMask(Ye),ce=Ye)},setFunc:function(Ye,oi,Gn){(J!==Ye||ne!==oi||de!==Gn)&&(t.stencilFunc(Ye,oi,Gn),J=Ye,ne=oi,de=Gn)},setOp:function(Ye,oi,Gn){(Pe!==Ye||Ge!==oi||_t!==Gn)&&(t.stencilOp(Ye,oi,Gn),Pe=Ye,Ge=oi,_t=Gn)},setLocked:function(Ye){U=Ye},setClear:function(Ye){Lt!==Ye&&(t.clearStencil(Ye),Lt=Ye)},reset:function(){U=!1,ce=null,J=null,ne=null,de=null,Pe=null,Ge=null,_t=null,Lt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,c=new WeakMap;let l={},d={},f=new WeakMap,h=[],m=null,x=!1,y=null,g=null,p=null,v=null,_=null,S=null,A=null,b=new qe(0,0,0),C=0,N=!1,w=null,E=null,R=null,z=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=V>=2);let I=null,H={};const B=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),se=new Tt().fromArray(B),De=new Tt().fromArray(Q);function P(U,ce,J,ne){const de=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(U,Pe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<J;Ge++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Pe}const ae={};ae[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(t.DEPTH_TEST),s.setFunc(lc),$e(!1),we(ym),K(t.CULL_FACE),tt(rr);function K(U){l[U]!==!0&&(t.enable(U),l[U]=!0)}function re(U){l[U]!==!1&&(t.disable(U),l[U]=!1)}function xe(U,ce){return d[U]!==ce?(t.bindFramebuffer(U,ce),d[U]=ce,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Me(U,ce){let J=h,ne=!1;if(U){J=f.get(ce),J===void 0&&(J=[],f.set(ce,J));const de=U.textures;if(J.length!==de.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Ge=de.length;Pe<Ge;Pe++)J[Pe]=t.COLOR_ATTACHMENT0+Pe;J.length=de.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function ye(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const He={[Pr]:t.FUNC_ADD,[ME]:t.FUNC_SUBTRACT,[wE]:t.FUNC_REVERSE_SUBTRACT};He[TE]=t.MIN,He[bE]=t.MAX;const D={[CE]:t.ZERO,[AE]:t.ONE,[RE]:t.SRC_COLOR,[zd]:t.SRC_ALPHA,[UE]:t.SRC_ALPHA_SATURATE,[DE]:t.DST_COLOR,[NE]:t.DST_ALPHA,[PE]:t.ONE_MINUS_SRC_COLOR,[Bd]:t.ONE_MINUS_SRC_ALPHA,[IE]:t.ONE_MINUS_DST_COLOR,[LE]:t.ONE_MINUS_DST_ALPHA,[FE]:t.CONSTANT_COLOR,[OE]:t.ONE_MINUS_CONSTANT_COLOR,[kE]:t.CONSTANT_ALPHA,[jE]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(U,ce,J,ne,de,Pe,Ge,_t,Lt,Ye){if(U===rr){x===!0&&(re(t.BLEND),x=!1);return}if(x===!1&&(K(t.BLEND),x=!0),U!==EE){if(U!==y||Ye!==N){if((g!==Pr||_!==Pr)&&(t.blendEquation(t.FUNC_ADD),g=Pr,_=Pr),Ye)switch(U){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,v=null,S=null,A=null,b.set(0,0,0),C=0,y=U,N=Ye}return}de=de||ce,Pe=Pe||J,Ge=Ge||ne,(ce!==g||de!==_)&&(t.blendEquationSeparate(He[ce],He[de]),g=ce,_=de),(J!==p||ne!==v||Pe!==S||Ge!==A)&&(t.blendFuncSeparate(D[J],D[ne],D[Pe],D[Ge]),p=J,v=ne,S=Pe,A=Ge),(_t.equals(b)===!1||Lt!==C)&&(t.blendColor(_t.r,_t.g,_t.b,Lt),b.copy(_t),C=Lt),y=U,N=!1}function Ve(U,ce){U.side===vi?re(t.CULL_FACE):K(t.CULL_FACE);let J=U.side===on;ce&&(J=!J),$e(J),U.blending===Fs&&U.transparent===!1?tt(rr):tt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){w!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),w=U)}function we(U){U!==_E?(K(t.CULL_FACE),U!==E&&(U===ym?t.cullFace(t.BACK):U===yE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),E=U}function ft(U){U!==R&&(Y&&t.lineWidth(U),R=U)}function Ae(U,ce,J){U?(K(t.POLYGON_OFFSET_FILL),(z!==ce||k!==J)&&(t.polygonOffset(ce,J),z=ce,k=J)):re(t.POLYGON_OFFSET_FILL)}function Ie(U){U?K(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function L(U){U===void 0&&(U=t.TEXTURE0+q-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,ce,J){J===void 0&&(I===null?J=t.TEXTURE0+q-1:J=I);let ne=H[J];ne===void 0&&(ne={type:void 0,texture:void 0},H[J]=ne),(ne.type!==U||ne.texture!==ce)&&(I!==J&&(t.activeTexture(J),I=J),t.bindTexture(U,ce||ae[U]),ne.type=U,ne.texture=ce)}function $(){const U=H[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function _e(U){De.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),De.copy(U))}function Ue(U,ce){let J=c.get(ce);J===void 0&&(J=new WeakMap,c.set(ce,J));let ne=J.get(U);ne===void 0&&(ne=t.getUniformBlockIndex(ce,U.name),J.set(U,ne))}function ze(U,ce){const ne=c.get(ce).get(U);a.get(ce)!==ne&&(t.uniformBlockBinding(ce,ne,U.__bindingPointIndex),a.set(ce,ne))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},I=null,H={},d={},f=new WeakMap,h=[],m=null,x=!1,y=null,g=null,p=null,v=null,_=null,S=null,A=null,b=new qe(0,0,0),C=0,N=!1,w=null,E=null,R=null,z=null,k=null,se.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:re,bindFramebuffer:xe,drawBuffers:Me,useProgram:ye,setBlending:tt,setMaterial:Ve,setFlipSided:$e,setCullFace:we,setLineWidth:ft,setPolygonOffset:Ae,setScissorTest:Ie,activeTexture:L,bindTexture:M,unbindTexture:$,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:me,texImage3D:je,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:Fe,texStorage3D:le,texSubImage2D:te,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Re,viewport:_e,reset:ot}}function mg(t,e,n,i){const r=hC(i);switch(n){case lx:return t*e;case ux:return t*e;case dx:return t*e*2;case fx:return t*e/r.components*r.byteLength;case Ih:return t*e/r.components*r.byteLength;case hx:return t*e*2/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case cx:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Fh:return t*e*4/r.components*r.byteLength;case Cl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:case Yd:return Math.max(t,16)*Math.max(e,8)/4;case Xd:case qd:return Math.max(t,8)*Math.max(e,8)/2;case Kd:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nl:case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case px:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hC(t){switch(t){case Pi:case sx:return{byteLength:1,components:1};case no:case ax:case go:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Xr:case Nh:case yi:return{byteLength:4,components:1};case ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return m?new OffscreenCanvas(L,M):io("canvas")}function y(L,M,$){let ee=1;const ie=Ie(L);if((ie.width>$||ie.height>$)&&(ee=$/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(ee*ie.width),be=Math.floor(ee*ie.height);f===void 0&&(f=x(te,be));const fe=M?x(te,be):f;return fe.width=te,fe.height=be,fe.getContext("2d").drawImage(L,0,0,te,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+te+"x"+be+")."),fe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Tn&&L.minFilter!==kn}function p(L){t.generateMipmap(L)}function v(L,M,$,ee,ie=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=M;if(M===t.RED&&($===t.FLOAT&&(te=t.R32F),$===t.HALF_FLOAT&&(te=t.R16F),$===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.R8UI),$===t.UNSIGNED_SHORT&&(te=t.R16UI),$===t.UNSIGNED_INT&&(te=t.R32UI),$===t.BYTE&&(te=t.R8I),$===t.SHORT&&(te=t.R16I),$===t.INT&&(te=t.R32I)),M===t.RG&&($===t.FLOAT&&(te=t.RG32F),$===t.HALF_FLOAT&&(te=t.RG16F),$===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(te=t.RG8UI),$===t.UNSIGNED_SHORT&&(te=t.RG16UI),$===t.UNSIGNED_INT&&(te=t.RG32UI),$===t.BYTE&&(te=t.RG8I),$===t.SHORT&&(te=t.RG16I),$===t.INT&&(te=t.RG32I)),M===t.RGB&&$===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const be=ie?cc:Je.getTransfer(ee);$===t.FLOAT&&(te=t.RGBA32F),$===t.HALF_FLOAT&&(te=t.RGBA16F),$===t.UNSIGNED_BYTE&&(te=be===rt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(L,M){let $;return L?M===null||M===Xr||M===Ys?$=t.DEPTH24_STENCIL8:M===yi?$=t.DEPTH32F_STENCIL8:M===no&&($=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xr||M===Ys?$=t.DEPTH_COMPONENT24:M===yi?$=t.DEPTH_COMPONENT32F:M===no&&($=t.DEPTH_COMPONENT16),$}function S(L,M){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function A(L){const M=L.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&d.delete(M)}function b(L){const M=L.target;M.removeEventListener("dispose",b),w(M)}function C(L){const M=i.get(L);if(M.__webglInit===void 0)return;const $=L.source,ee=h.get($);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(L),Object.keys(ee).length===0&&h.delete($)}i.remove(L)}function N(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const $=L.source,ee=h.get($);delete ee[M.__cacheKey],o.memory.textures--}function w(L){const M=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let ee=0,ie=$.length;ee<ie;ee++){const te=i.get($[ee]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove($[ee])}i.remove(L)}let E=0;function R(){E=0}function z(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function k(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function q(L,M){const $=i.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De($,L,M);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+M)}function Y(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){De($,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+M)}function V(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){De($,L,M);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+M)}function Z(L,M){const $=i.get(L);if(L.version>0&&$.__version!==L.version){P($,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+M)}const I={[Gd]:t.REPEAT,[Ur]:t.CLAMP_TO_EDGE,[Wd]:t.MIRRORED_REPEAT},H={[Tn]:t.NEAREST,[nM]:t.NEAREST_MIPMAP_NEAREST,[Vo]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[gu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},B={[aM]:t.NEVER,[fM]:t.ALWAYS,[oM]:t.LESS,[gx]:t.LEQUAL,[lM]:t.EQUAL,[dM]:t.GEQUAL,[cM]:t.GREATER,[uM]:t.NOTEQUAL};function Q(L,M){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===kn||M.magFilter===gu||M.magFilter===Vo||M.magFilter===Fr||M.minFilter===kn||M.minFilter===gu||M.minFilter===Vo||M.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,I[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,H[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Vo&&M.minFilter!==Fr||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const te=k(M);if(te!==L.__cacheKey){ie[te]===void 0&&(ie[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ie[te].usedTimes++;const be=ie[L.__cacheKey];be!==void 0&&(ie[L.__cacheKey].usedTimes--,be.usedTimes===0&&N(M)),L.__cacheKey=te,L.__webglTexture=ie[te].texture}return $}function De(L,M,$){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=se(L,M),te=M.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+$);const be=i.get(te);if(te.version!==be.__version||ie===!0){n.activeTexture(t.TEXTURE0+$);const fe=Je.getPrimaries(Je.workingColorSpace),ge=M.colorSpace===Xi?null:Je.getPrimaries(M.colorSpace),Fe=M.colorSpace===Xi||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=y(M.image,!1,r.maxTextureSize);le=Ae(M,le);const me=s.convert(M.format,M.colorSpace),je=s.convert(M.type);let Re=v(M.internalFormat,me,je,M.colorSpace,M.isVideoTexture);Q(ee,M);let _e;const Ue=M.mipmaps,ze=M.isVideoTexture!==!0,ot=be.__version===void 0||ie===!0,U=te.dataReady,ce=S(M,le);if(M.isDepthTexture)Re=_(M.format===Ks,M.type),ot&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Re,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,je,null));else if(M.isDataTexture)if(Ue.length>0){ze&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],ze?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,je,_e.data):n.texImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,me,je,_e.data);M.generateMipmaps=!1}else ze?(ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,me,je,le.data)):n.texImage2D(t.TEXTURE_2D,0,Re,le.width,le.height,0,me,je,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,Ue[0].width,Ue[0].height,le.depth);for(let J=0,ne=Ue.length;J<ne;J++)if(_e=Ue[J],M.format!==jn)if(me!==null)if(ze){if(U)if(M.layerUpdates.size>0){const de=mg(_e.width,_e.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ge=_e.data.subarray(Pe*de/_e.data.BYTES_PER_ELEMENT,(Pe+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Pe,_e.width,_e.height,1,me,Ge,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,le.depth,me,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Re,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,le.depth,me,je,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Re,_e.width,_e.height,le.depth,0,me,je,_e.data)}else{ze&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,Ue[0].width,Ue[0].height);for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],M.format!==jn?me!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,me,je,_e.data):n.texImage2D(t.TEXTURE_2D,J,Re,_e.width,_e.height,0,me,je,_e.data)}else if(M.isDataArrayTexture)if(ze){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,le.width,le.height,le.depth),U)if(M.layerUpdates.size>0){const J=mg(le.width,le.height,M.format,M.type);for(const ne of M.layerUpdates){const de=le.data.subarray(ne*J/le.data.BYTES_PER_ELEMENT,(ne+1)*J/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,me,je,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,je,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,me,je,le.data);else if(M.isData3DTexture)ze?(ot&&n.texStorage3D(t.TEXTURE_3D,ce,Re,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,je,le.data)):n.texImage3D(t.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,me,je,le.data);else if(M.isFramebufferTexture){if(ot)if(ze)n.texStorage2D(t.TEXTURE_2D,ce,Re,le.width,le.height);else{let J=le.width,ne=le.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,Re,J,ne,0,me,je,null),J>>=1,ne>>=1}}else if(Ue.length>0){if(ze&&ot){const J=Ie(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}for(let J=0,ne=Ue.length;J<ne;J++)_e=Ue[J],ze?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,me,je,_e):n.texImage2D(t.TEXTURE_2D,J,Re,me,je,_e);M.generateMipmaps=!1}else if(ze){if(ot){const J=Ie(le);n.texStorage2D(t.TEXTURE_2D,ce,Re,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,je,le)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,je,le);g(M)&&p(ee),be.__version=te.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function P(L,M,$){if(M.image.length!==6)return;const ee=se(L,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+$);const te=i.get(ie);if(ie.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+$);const be=Je.getPrimaries(Je.workingColorSpace),fe=M.colorSpace===Xi?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Xi||be===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Fe&&!le?me[ne]=y(M.image[ne],!0,r.maxCubemapSize):me[ne]=le?M.image[ne].image:M.image[ne],me[ne]=Ae(M,me[ne]);const je=me[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ue=v(M.internalFormat,Re,_e,M.colorSpace),ze=M.isVideoTexture!==!0,ot=te.__version===void 0||ee===!0,U=ie.dataReady;let ce=S(M,je);Q(t.TEXTURE_CUBE_MAP,M);let J;if(Fe){ze&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,je.width,je.height);for(let ne=0;ne<6;ne++){J=me[ne].mipmaps;for(let de=0;de<J.length;de++){const Pe=J[de];M.format!==jn?Re!==null?ze?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Pe.width,Pe.height,Re,_e,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ue,Pe.width,Pe.height,0,Re,_e,Pe.data)}}}else{if(J=M.mipmaps,ze&&ot){J.length>0&&ce++;const ne=Ie(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Re,_e,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,me[ne].width,me[ne].height,0,Re,_e,me[ne].data);for(let de=0;de<J.length;de++){const Ge=J[de].image[ne].image;ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ge.width,Ge.height,Re,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,Ge.width,Ge.height,0,Re,_e,Ge.data)}}else{ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,_e,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,Re,_e,me[ne]);for(let de=0;de<J.length;de++){const Pe=J[de];ze?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Re,_e,Pe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ue,Re,_e,Pe.image[ne])}}}g(M)&&p(t.TEXTURE_CUBE_MAP),te.__version=ie.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ae(L,M,$,ee,ie,te){const be=s.convert($.format,$.colorSpace),fe=s.convert($.type),ge=v($.internalFormat,be,fe,$.colorSpace);if(!i.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>te),me=Math.max(1,M.height>>te);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,te,ge,le,me,M.depth,0,be,fe,null):n.texImage2D(ie,te,ge,le,me,0,be,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,0,$e(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,i.get($).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(L,M,$){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const ee=M.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,te=_(M.stencilBuffer,ie),be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=$e(M);we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,te,M.width,M.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,L)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const te=ee[ie],be=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ge=v(te.internalFormat,be,fe,te.colorSpace),Fe=$e(M);$&&we(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ie=$e(M);if(M.depthTexture.format===Os)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ks)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(L){const M=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=ee}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),K(M.__webglDepthbuffer[ee],L,!1);else{const ie=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),K(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(L,M,$){const ee=i.get(L);M!==void 0&&ae(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&xe(L)}function ye(L){const M=L.texture,$=i.get(L),ee=i.get(M);L.addEventListener("dispose",b);const ie=L.textures,te=L.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),te){$.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[fe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)$.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else $.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)$.__webglFramebuffer[fe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(be)for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=i.get(ie[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&we(L)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ge=ie[fe];$.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const Fe=s.convert(ge.format,ge.colorSpace),le=s.convert(ge.type),me=v(ge.internalFormat,Fe,le,ge.colorSpace,L.isXRRenderTarget===!0),je=$e(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,$.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),K($.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae($.__webglFramebuffer[fe][ge],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else ae($.__webglFramebuffer[fe],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let fe=0,ge=ie.length;fe<ge;fe++){const Fe=ie[fe],le=i.get(Fe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Q(t.TEXTURE_2D,Fe),ae($.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Fe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),Q(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae($.__webglFramebuffer[ge],L,M,t.COLOR_ATTACHMENT0,fe,ge);else ae($.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,fe,0);g(M)&&p(fe),n.unbindTexture()}L.depthBuffer&&xe(L)}function He(L){const M=L.textures;for(let $=0,ee=M.length;$<ee;$++){const ie=M[$];if(g(ie)){const te=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ie).__webglTexture;n.bindTexture(te,be),p(te),n.unbindTexture()}}}const D=[],tt=[];function Ve(L){if(L.samples>0){if(we(L)===!1){const M=L.textures,$=L.width,ee=L.height;let ie=t.COLOR_BUFFER_BIT;const te=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(L),fe=M.length>1;if(fe)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,ie,t.NEAREST),c===!0&&(D.length=0,tt.length=0,D.push(t.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(te),tt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Fe=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function we(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(L){const M=o.render.frame;d.get(L)!==M&&(d.set(L,M),L.update())}function Ae(L,M){const $=L.colorSpace,ee=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==pr&&$!==Xi&&(Je.getTransfer($)===rt?(ee!==jn||ie!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Me,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=we}function mC(t,e){function n(i,r=Xi){let s;const o=Je.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ox)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sx)return t.BYTE;if(i===ax)return t.SHORT;if(i===no)return t.UNSIGNED_SHORT;if(i===Nh)return t.INT;if(i===Xr)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===go)return t.HALF_FLOAT;if(i===lx)return t.ALPHA;if(i===cx)return t.RGB;if(i===jn)return t.RGBA;if(i===ux)return t.LUMINANCE;if(i===dx)return t.LUMINANCE_ALPHA;if(i===Os)return t.DEPTH_COMPONENT;if(i===Ks)return t.DEPTH_STENCIL;if(i===fx)return t.RED;if(i===Ih)return t.RED_INTEGER;if(i===hx)return t.RG;if(i===Uh)return t.RG_INTEGER;if(i===Fh)return t.RGBA_INTEGER;if(i===Cl||i===Al||i===Rl||i===Pl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xd||i===$d||i===qd||i===Yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kd||i===Qd||i===Zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kd||i===Qd)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ff)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===pf||i===mf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===px||i===gf||i===vf||i===xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gC extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vC={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vC)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_C=`
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

}`;class yC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:xC,fragmentShader:_C,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SC extends ia{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,h=null,m=null,x=null;const y=new yC,g=n.getContextAttributes();let p=null,v=null;const _=[],S=[],A=new Xe;let b=null;const C=new Mn;C.layers.enable(1),C.viewport=new Tt;const N=new Mn;N.layers.enable(2),N.viewport=new Tt;const w=[C,N],E=new gC;E.layers.enable(1),E.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let ae=_[P];return ae===void 0&&(ae=new Vu,_[P]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(P){let ae=_[P];return ae===void 0&&(ae=new Vu,_[P]=ae),ae.getGripSpace()},this.getHand=function(P){let ae=_[P];return ae===void 0&&(ae=new Vu,_[P]=ae),ae.getHandSpace()};function k(P){const ae=S.indexOf(P.inputSource);if(ae===-1)return;const K=_[ae];K!==void 0&&(K.update(P.inputSource,P.frame,l||o),K.dispatchEvent({type:P.type,data:P.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Y);for(let P=0;P<_.length;P++){const ae=S[P];ae!==null&&(S[P]=null,_[P].disconnect(ae))}R=null,z=null,y.reset(),e.setRenderTarget(p),m=null,h=null,f=null,r=null,v=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new $r(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,K=null,re=null;g.depth&&(re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=g.stencil?Ks:Os,K=g.stencil?Ys:Xr);const xe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new $r(h.textureWidth,h.textureHeight,{format:jn,type:Pi,depthTexture:new Px(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(P){for(let ae=0;ae<P.removed.length;ae++){const K=P.removed[ae],re=S.indexOf(K);re>=0&&(S[re]=null,_[re].disconnect(K))}for(let ae=0;ae<P.added.length;ae++){const K=P.added[ae];let re=S.indexOf(K);if(re===-1){for(let Me=0;Me<_.length;Me++)if(Me>=S.length){S.push(K),re=Me;break}else if(S[Me]===null){S[Me]=K,re=Me;break}if(re===-1)break}const xe=_[re];xe&&xe.connect(K)}}const V=new X,Z=new X;function I(P,ae,K){V.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(K.matrixWorld);const re=V.distanceTo(Z),xe=ae.projectionMatrix.elements,Me=K.projectionMatrix.elements,ye=xe[14]/(xe[10]-1),He=xe[14]/(xe[10]+1),D=(xe[9]+1)/xe[5],tt=(xe[9]-1)/xe[5],Ve=(xe[8]-1)/xe[0],$e=(Me[8]+1)/Me[0],we=ye*Ve,ft=ye*$e,Ae=re/(-Ve+$e),Ie=Ae*-Ve;if(ae.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ie),P.translateZ(Ae),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),xe[10]===-1)P.projectionMatrix.copy(ae.projectionMatrix),P.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=ye+Ae,M=He+Ae,$=we-Ie,ee=ft+(re-Ie),ie=D*He/M*L,te=tt*He/M*L;P.projectionMatrix.makePerspective($,ee,ie,te,L,M),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function H(P,ae){ae===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(ae.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let ae=P.near,K=P.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(K=y.depthFar)),E.near=N.near=C.near=ae,E.far=N.far=C.far=K,(R!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,z=E.far);const re=P.parent,xe=E.cameras;H(E,re);for(let Me=0;Me<xe.length;Me++)H(xe[Me],re);xe.length===2?I(E,C,N):E.projectionMatrix.copy(C.projectionMatrix),B(P,E,re)};function B(P,ae,K){K===null?P.matrix.copy(ae.matrixWorld):(P.matrix.copy(K.matrixWorld),P.matrix.invert(),P.matrix.multiply(ae.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(ae.projectionMatrix),P.projectionMatrixInverse.copy(ae.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=_f*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(P){c=P,h!==null&&(h.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let Q=null;function se(P,ae){if(d=ae.getViewerPose(l||o),x=ae,d!==null){const K=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let re=!1;K.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Me=0;Me<K.length;Me++){const ye=K[Me];let He=null;if(m!==null)He=m.getViewport(ye);else{const tt=f.getViewSubImage(h,ye);He=tt.viewport,Me===0&&(e.setRenderTargetTextures(v,tt.colorTexture,h.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(v))}let D=w[Me];D===void 0&&(D=new Mn,D.layers.enable(Me),D.viewport=new Tt,w[Me]=D),D.matrix.fromArray(ye.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ye.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(He.x,He.y,He.width,He.height),Me===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(D)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Me=f.getDepthInformation(K[0]);Me&&Me.isValid&&Me.texture&&y.init(e,Me,r.renderState)}}for(let K=0;K<_.length;K++){const re=S[K],xe=_[K];re!==null&&xe!==void 0&&xe.update(re,ae,l||o)}Q&&Q(P,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const De=new Ax;De.setAnimationLoop(se),this.setAnimationLoop=function(P){Q=P},this.dispose=function(){}}}const wr=new ii,EC=new xt;function MC(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Tx(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),y(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,S=v.envMapRotation;_&&(g.envMap.value=_,wr.copy(S),wr.x*=-1,wr.y*=-1,wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),g.envMapRotation.value.setFromMatrix4(EC.makeRotationFromEuler(wr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function l(v,_){let S=r[v.id];S===void 0&&(x(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",g));const A=_.program;i.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function d(v){const _=f();v.__bindingPointIndex=_;const S=t.createBuffer(),A=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,C=S.length;b<C;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,E=N.length;w<E;w++){const R=N[w];if(m(R,b,w,A)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let Y=0;Y<k.length;Y++){const V=k[Y],Z=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,z+q,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,S,A){const b=v.value,C=_+"_"+S;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:A[C]=b.clone(),!0;{const N=A[C];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return A[C]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function x(v){const _=v.uniforms;let S=0;const A=16;for(let C=0,N=_.length;C<N;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,R=w.length;E<R;E++){const z=w[E],k=Array.isArray(z.value)?z.value:[z.value];for(let q=0,Y=k.length;q<Y;q++){const V=k[q],Z=y(V),I=S%A,H=I%Z.boundary,B=I+H;S+=H,B!==0&&A-B<Z.storage&&(S+=A-B),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Z.storage}}}const b=S%A;return b>0&&(S+=A-b),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class TC{constructor(e={}){const{canvas:n=pM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const p=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=sr,this.toneMappingExposure=1;const _=this;let S=!1,A=0,b=0,C=null,N=-1,w=null;const E=new Tt,R=new Tt;let z=null;const k=new qe(0);let q=0,Y=n.width,V=n.height,Z=1,I=null,H=null;const B=new Tt(0,0,Y,V),Q=new Tt(0,0,Y,V);let se=!1;const De=new jh;let P=!1,ae=!1;const K=new xt,re=new X,xe=new Tt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function He(){return C===null?Z:1}let D=i;function tt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ph}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const F="webgl2";if(D=tt(F,T),D===null)throw tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,$e,we,ft,Ae,Ie,L,M,$,ee,ie,te,be,fe,ge,Fe,le,me,je,Re,_e,Ue,ze,ot;function U(){Ve=new NT(D),Ve.init(),Ue=new mC(D,Ve),$e=new TT(D,Ve,e,Ue),we=new fC(D),ft=new IT(D),Ae=new Zb,Ie=new pC(D,Ve,we,Ae,$e,Ue,ft),L=new CT(_),M=new PT(_),$=new BM(D),ze=new MT(D,$),ee=new LT(D,$,ft,ze),ie=new FT(D,ee,$,ft),je=new UT(D,$e,Ie),Fe=new bT(Ae),te=new Qb(_,L,M,Ve,$e,ze,Fe),be=new MC(_,Ae),fe=new eC,ge=new aC(Ve),me=new ET(_,L,M,we,ie,h,c),le=new dC(_,ie,$e),ot=new wC(D,ft,$e,we),Re=new wT(D,Ve,ft),_e=new DT(D,Ve,ft),ft.programs=te.programs,_.capabilities=$e,_.extensions=Ve,_.properties=Ae,_.renderLists=fe,_.shadowMap=le,_.state=we,_.info=ft}U();const ce=new SC(_,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(Y,V,!1))},this.getSize=function(T){return T.set(Y,V)},this.setSize=function(T,F,G=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,V=F,n.width=Math.floor(T*Z),n.height=Math.floor(F*Z),G===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,F,G){Y=T,V=F,Z=G,n.width=Math.floor(T*G),n.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,F,G,W){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,F,G,W),we.viewport(E.copy(B).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,F,G,W){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,G,W),we.scissor(R.copy(Q).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){we.setScissorTest(se=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let O=!1;if(C!==null){const ue=C.texture.format;O=ue===Fh||ue===Uh||ue===Ih}if(O){const ue=C.texture.type,pe=ue===Pi||ue===Xr||ue===no||ue===Ys||ue===Lh||ue===Dh,Se=me.getClearColor(),Ee=me.getClearAlpha(),Ne=Se.r,Le=Se.g,Te=Se.b;pe?(m[0]=Ne,m[1]=Le,m[2]=Te,m[3]=Ee,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ne,x[1]=Le,x[2]=Te,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ge.dispose(),Ae.dispose(),L.dispose(),M.dispose(),ie.dispose(),ze.dispose(),ot.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Gn),ce.removeEventListener("sessionend",Vh),vr.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=ft.autoReset,F=le.enabled,G=le.autoUpdate,W=le.needsUpdate,O=le.type;U(),ft.autoReset=T,le.enabled=F,le.autoUpdate=G,le.needsUpdate=W,le.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const F=T.target;F.removeEventListener("dispose",Pe),Ge(F)}function Ge(T){_t(T),Ae.remove(T)}function _t(T){const F=Ae.get(T).programs;F!==void 0&&(F.forEach(function(G){te.releaseProgram(G)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,O,ue){F===null&&(F=Me);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=Vx(T,F,G,W,O);we.setMaterial(W,pe);let Ee=G.index,Ne=1;if(W.wireframe===!0){if(Ee=ee.getWireframeAttribute(G),Ee===void 0)return;Ne=2}const Le=G.drawRange,Te=G.attributes.position;let Ke=Le.start*Ne,ht=(Le.start+Le.count)*Ne;ue!==null&&(Ke=Math.max(Ke,ue.start*Ne),ht=Math.min(ht,(ue.start+ue.count)*Ne)),Ee!==null?(Ke=Math.max(Ke,0),ht=Math.min(ht,Ee.count)):Te!=null&&(Ke=Math.max(Ke,0),ht=Math.min(ht,Te.count));const pt=ht-Ke;if(pt<0||pt===1/0)return;ze.setup(O,W,Se,G,Ee);let cn,Qe=Re;if(Ee!==null&&(cn=$.get(Ee),Qe=_e,Qe.setIndex(cn)),O.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*He()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*He()),O.isLineSegments?Qe.setMode(D.LINES):O.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else O.isPoints?Qe.setMode(D.POINTS):O.isSprite&&Qe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Dt=O._multiDrawCounts,Ze=O._multiDrawCount,Pn=Ee?$.get(Ee).bytesPerElement:1,Qr=Ae.get(W).currentProgram.getUniforms();for(let un=0;un<Ze;un++)Qr.setValue(D,"_gl_DrawID",un),Qe.render(Ce[un]/Pn,Dt[un])}else if(O.isInstancedMesh)Qe.renderInstances(Ke,pt,O.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dt=Math.min(G.instanceCount,Ce);Qe.renderInstances(Ke,pt,Dt)}else Qe.render(Ke,pt)};function Lt(T,F,G){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,wo(T,F,G),T.side=lr,T.needsUpdate=!0,wo(T,F,G),T.side=vi):wo(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),g=ge.get(G),g.init(F),v.push(g),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const W=new Set;return T.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const Se=ue[pe];Lt(Se,G,O),W.add(Se)}else Lt(ue,G,O),W.add(ue)}),v.pop(),g=null,W},this.compileAsync=function(T,F,G=null){const W=this.compile(T,F,G);return new Promise(O=>{function ue(){if(W.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(T);return}setTimeout(ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function oi(T){Ye&&Ye(T)}function Gn(){vr.stop()}function Vh(){vr.start()}const vr=new Ax;vr.setAnimationLoop(oi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(T){Ye=T,ce.setAnimationLoop(T),T===null?vr.stop():vr.start()},ce.addEventListener("sessionstart",Gn),ce.addEventListener("sessionend",Vh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,C),g=ge.get(T,v.length),g.init(F),v.push(g),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(K),ae=this.localClippingEnabled,P=Fe.init(this.clippingPlanes,ae),y=fe.get(T,p.length),y.init(),p.push(y),ce.enabled===!0&&ce.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&kc(ue,F,-1/0,_.sortObjects)}kc(T,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,H),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&me.addToRenderList(y,T),this.info.render.frame++,P===!0&&Fe.beginShadows();const G=g.state.shadowsArray;le.render(G,T,F),P===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,O=y.transmissive;if(g.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let pe=0,Se=ue.length;pe<Se;pe++){const Ee=ue[pe];Wh(W,O,T,Ee)}ye&&me.render(T);for(let pe=0,Se=ue.length;pe<Se;pe++){const Ee=ue[pe];Gh(y,T,Ee,Ee.viewport)}}else O.length>0&&Wh(W,O,T,F),ye&&me.render(T),Gh(y,T,F);C!==null&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,F),ze.resetDefaultState(),N=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],P===!0&&Fe.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function kc(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){W&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);const pe=ie.update(T),Se=T.material;Se.visible&&y.push(T,pe,Se,G,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){const pe=ie.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),xe.copy(pe.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const Ee=pe.groups;for(let Ne=0,Le=Ee.length;Ne<Le;Ne++){const Te=Ee[Ne],Ke=Se[Te.materialIndex];Ke&&Ke.visible&&y.push(T,pe,Ke,G,xe.z,Te)}}else Se.visible&&y.push(T,pe,Se,G,xe.z,null)}}const ue=T.children;for(let pe=0,Se=ue.length;pe<Se;pe++)kc(ue[pe],F,G,W)}function Gh(T,F,G,W){const O=T.opaque,ue=T.transmissive,pe=T.transparent;g.setupLightsView(G),P===!0&&Fe.setGlobalState(_.clippingPlanes,G),W&&we.viewport(E.copy(W)),O.length>0&&Mo(O,F,G),ue.length>0&&Mo(ue,F,G),pe.length>0&&Mo(pe,F,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Wh(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new $r(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?go:Pi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ue=g.state.transmissionRenderTarget[W.id],pe=W.viewport||E;ue.setSize(pe.z,pe.w);const Se=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(k),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ye&&me.render(G);const Ee=_.toneMapping;_.toneMapping=sr;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),P===!0&&Fe.setGlobalState(_.clippingPlanes,W),Mo(T,G,W),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Te=0,Ke=F.length;Te<Ke;Te++){const ht=F[Te],pt=ht.object,cn=ht.geometry,Qe=ht.material,Ce=ht.group;if(Qe.side===vi&&pt.layers.test(W.layers)){const Dt=Qe.side;Qe.side=on,Qe.needsUpdate=!0,Xh(pt,G,W,cn,Qe,Ce),Qe.side=Dt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}_.setRenderTarget(Se),_.setClearColor(k,q),Ne!==void 0&&(W.viewport=Ne),_.toneMapping=Ee}function Mo(T,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=T.length;O<ue;O++){const pe=T[O],Se=pe.object,Ee=pe.geometry,Ne=W===null?pe.material:W,Le=pe.group;Se.layers.test(G.layers)&&Xh(Se,F,G,Ee,Ne,Le)}}function Xh(T,F,G,W,O,ue){T.onBeforeRender(_,F,G,W,O,ue),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,F,G,W,T,ue),O.transparent===!0&&O.side===vi&&O.forceSinglePass===!1?(O.side=on,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,T,ue),O.side=lr,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,T,ue),O.side=vi):_.renderBufferDirect(G,F,W,O,T,ue),T.onAfterRender(_,F,G,W,O,ue)}function wo(T,F,G){F.isScene!==!0&&(F=Me);const W=Ae.get(T),O=g.state.lights,ue=g.state.shadowsArray,pe=O.state.version,Se=te.getParameters(T,O.state,ue,F,G),Ee=te.getProgramCacheKey(Se);let Ne=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?M:L).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Pe),Ne=new Map,W.programs=Ne);let Le=Ne.get(Ee);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===pe)return qh(T,Se),Le}else Se.uniforms=te.getUniforms(T),T.onBeforeCompile(Se,_),Le=te.acquireProgram(Se,Ee),Ne.set(Ee,Le),W.uniforms=Se.uniforms;const Te=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),qh(T,Se),W.needsLights=Wx(T),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function $h(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ll.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function qh(T,F){const G=Ae.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Vx(T,F,G,W,O){F.isScene!==!0&&(F=Me),Ie.resetTextureUnits();const ue=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Se=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pr,Ee=(W.isMeshStandardMaterial?M:L).get(W.envMap||pe),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let pt=sr;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=_.toneMapping);const cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=cn!==void 0?cn.length:0,Ce=Ae.get(W),Dt=g.state.lights;if(P===!0&&(ae===!0||T!==w)){const _n=T===w&&W.id===N;Fe.setState(W,T,_n)}let Ze=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Dt.state.version||Ce.outputColorSpace!==Se||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Ee||W.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Fe.numPlanes||Ce.numIntersection!==Fe.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==Le||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==ht||Ce.toneMapping!==pt||Ce.morphTargetsCount!==Qe)&&(Ze=!0):(Ze=!0,Ce.__version=W.version);let Pn=Ce.currentProgram;Ze===!0&&(Pn=wo(W,F,O));let Qr=!1,un=!1,jc=!1;const yt=Pn.getUniforms(),Di=Ce.uniforms;if(we.useProgram(Pn.program)&&(Qr=!0,un=!0,jc=!0),W.id!==N&&(N=W.id,un=!0),Qr||w!==T){yt.setValue(D,"projectionMatrix",T.projectionMatrix),yt.setValue(D,"viewMatrix",T.matrixWorldInverse);const _n=yt.map.cameraPosition;_n!==void 0&&_n.setValue(D,re.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,un=!0,jc=!0)}if(O.isSkinnedMesh){yt.setOptional(D,O,"bindMatrix"),yt.setOptional(D,O,"bindMatrixInverse");const _n=O.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),yt.setValue(D,"boneTexture",_n.boneTexture,Ie))}O.isBatchedMesh&&(yt.setOptional(D,O,"batchingTexture"),yt.setValue(D,"batchingTexture",O._matricesTexture,Ie),yt.setOptional(D,O,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",O._indirectTexture,Ie),yt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",O._colorsTexture,Ie));const zc=G.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0)&&je.update(O,G,Pn),(un||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,yt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Di.envMap.value=Ee,Di.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Di.envMapIntensity.value=F.environmentIntensity),un&&(yt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&Gx(Di,jc),ue&&W.fog===!0&&be.refreshFogUniforms(Di,ue),be.refreshMaterialUniforms(Di,W,Z,V,g.state.transmissionRenderTarget[T.id]),Ll.upload(D,$h(Ce),Di,Ie)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ll.upload(D,$h(Ce),Di,Ie),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(D,"center",O.center),yt.setValue(D,"modelViewMatrix",O.modelViewMatrix),yt.setValue(D,"normalMatrix",O.normalMatrix),yt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _n=W.uniformsGroups;for(let Bc=0,Xx=_n.length;Bc<Xx;Bc++){const Yh=_n[Bc];ot.update(Yh,Pn),ot.bind(Yh,Pn)}}return Pn}function Gx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Wx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,G){Ae.get(T.texture).__webglTexture=F,Ae.get(T.depthTexture).__webglTexture=G;const W=Ae.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=Ae.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){C=T,A=F,b=G;let W=!0,O=null,ue=!1,pe=!1;if(T){const Ee=Ae.get(T);if(Ee.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(Ee.__hasExternalTextures)Ie.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(Ee.__boundDepthTexture!==Te){if(Te!==null&&Ae.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Le=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?O=Le[F][G]:O=Le[F],ue=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?O=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,E.copy(T.viewport),R.copy(T.scissor),z=T.scissorTest}else E.copy(B).multiplyScalar(Z).floor(),R.copy(Q).multiplyScalar(Z).floor(),z=se;if(we.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&we.drawBuffers(T,O),we.viewport(E),we.scissor(R),we.setScissorTest(z),ue){const Ee=Ae.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,G)}else if(pe){const Ee=Ae.get(T.texture),Ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Ne)}N=-1},this.readRenderTargetPixels=function(T,F,G,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=T.texture,Ne=Ee.format,Le=Ee.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O&&D.readPixels(F,G,W,O,Ue.convert(Ne),Ue.convert(Le),ue)}finally{const Ee=C!==null?Ae.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,O,ue,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=T.texture,Ne=Ee.format,Le=Ee.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O){const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,G,W,O,Ue.convert(Ne),Ue.convert(Le),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await mM(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Te),D.deleteSync(Ke)}return ue}}finally{const Ee=C!==null?Ae.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(T.image.width*W),ue=Math.floor(T.image.height*W),pe=F!==null?F.x:0,Se=F!==null?F.y:0;Ie.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,pe,Se,O,ue),we.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,W=null,O=0){T.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ue,pe,Se,Ee,Ne,Le;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.min.x,Ee=G.min.y):(ue=T.image.width,pe=T.image.height,Se=0,Ee=0),W!==null?(Ne=W.x,Le=W.y):(Ne=0,Le=0);const Te=Ue.convert(F.format),Ke=Ue.convert(F.type);Ie.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),Qe=D.getParameter(D.UNPACK_SKIP_ROWS),Ce=D.getParameter(D.UNPACK_SKIP_IMAGES),Dt=T.isCompressedTexture?T.mipmaps[O]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ne,Le,ue,pe,Te,Ke,Dt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ne,Le,Dt.width,Dt.height,Te,Dt.data):D.texSubImage2D(D.TEXTURE_2D,O,Ne,Le,ue,pe,Te,Ke,Dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,W=null,O=0){T.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ue,pe,Se,Ee,Ne,Le,Te,Ke,ht;const pt=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(ue=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.max.z-G.min.z,Ee=G.min.x,Ne=G.min.y,Le=G.min.z):(ue=pt.width,pe=pt.height,Se=pt.depth,Ee=0,Ne=0,Le=0),W!==null?(Te=W.x,Ke=W.y,ht=W.z):(Te=0,Ke=0,ht=0);const cn=Ue.convert(F.format),Qe=Ue.convert(F.type);let Ce;if(F.isData3DTexture)Ie.setTexture3D(F,0),Ce=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ie.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Dt=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pn=D.getParameter(D.UNPACK_SKIP_PIXELS),Qr=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,cn,Qe,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,cn,pt.data):D.texSubImage3D(Ce,O,Te,Ke,ht,ue,pe,Se,cn,Qe,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),O===0&&F.generateMipmaps&&D.generateMipmap(Ce),we.unbindTexture()},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Ic?"display-p3":"srgb"}}class bC extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Bh extends mr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],f=new X,h=new X,m=[],x=[],y=[],g=[];for(let p=0;p<=i;p++){const v=[],_=p/i;let S=0;p===0&&o===0?S=.5/n:p===i&&c===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const b=A/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(b+S,1-_),v.push(l++)}d.push(v)}for(let p=0;p<i;p++)for(let v=0;v<n;v++){const _=d[p][v+1],S=d[p][v],A=d[p+1][v],b=d[p+1][v+1];(p!==0||o>0)&&m.push(_,S,b),(p!==i-1||c<Math.PI)&&m.push(S,A,b)}this.setIndex(m),this.setAttribute("position",new ti(x,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class CC extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const gg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class AC{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const RC=new AC;class Hh{constructor(e){this.manager=e!==void 0?e:RC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hh.DEFAULT_MATERIAL_NAME="__DEFAULT";class PC extends Hh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=io("img");function c(){d(),gg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class NC extends Hh{constructor(e){super(e)}load(e,n,i,r){const s=new Kt,o=new PC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ux extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Gu=new xt,vg=new X,xg=new X;class LC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),n.position.copy(vg),xg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xg),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DC extends LC{constructor(){super(new Rx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IC extends Ux{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new DC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UC extends Ux{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function FC(){const t=j.useRef(null),e=j.useRef(!1),n=j.useRef({x:0,y:0});return j.useEffect(()=>{if(!t.current)return;const i=new bC,r=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new TC({antialias:!0,alpha:!0}),o=()=>{if(t.current){const{clientWidth:v,clientHeight:_}=t.current;s.setSize(v,_),r.aspect=v/_,r.updateProjectionMatrix()}};o(),t.current.appendChild(s.domElement),window.addEventListener("resize",o);const c=new NC().load("images/profile.png"),l=new Bh(3,32,32),d=new CC({map:c}),f=new Qn(l,d);i.add(f);const h=new UC,m=new IC(16777215,2);m.position.set(5,5,5),i.add(h),i.add(m),r.position.z=5;const x=v=>{e.current=!0,n.current={x:v.clientX,y:v.clientY}},y=v=>{if(!e.current)return;const _={x:v.clientX-n.current.x,y:v.clientY-n.current.y};f.rotation.y+=_.x*.005,f.rotation.x+=_.y*.005,n.current={x:v.clientX,y:v.clientY}},g=()=>{e.current=!1};t.current.addEventListener("mousedown",x),window.addEventListener("mousemove",y),window.addEventListener("mouseup",g);const p=()=>{requestAnimationFrame(p),e.current||(f.rotation.y+=.01),s.render(i,r)};return p(),()=>{t.current&&t.current.removeChild(s.domElement),window.removeEventListener("resize",o),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",g)}},[]),u.jsx(Et,{children:u.jsx("div",{ref:t,className:"w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] cursor-pointer"})})}const OC=()=>u.jsx(Vn,{title:"Skills",children:u.jsxs("div",{className:"flex flex-col items-center space-y-4 sm:space-y-12",children:[u.jsx(Et,{children:u.jsx(Vt,{className:"sm:px-8",children:u.jsxs("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-8",children:[u.jsx("div",{className:"relative w-40 h-40 sm:w-48 sm:h-48",children:u.jsx(FC,{})}),u.jsx(Tr,{title:"3D Rendering",description:"Expertise in creating interactive 3D graphics using various technologies.",skills:["OpenGL","WebGL","Three.js","Babylon.js"],hoverEffect:!1})]})})}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8",children:[u.jsx(Tr,{title:"Frontend & UI Development",description:"Creating intuitive and responsive user interfaces.",skills:["React.js","Next.js","Angular","HTML","CSS","JavaScript","TypeScript","Tailwind CSS"]}),u.jsx(Tr,{title:"Backend Development",description:"Proficiency in server-side development and building scalable backends.",skills:["Laravel","Django","MySQL","WordPress","Spring Boot"]}),u.jsx(Tr,{title:"Problem Solving & Algorithms",description:"Strong analytical skills for solving complex problems.",skills:["Algorithms","Data Structures","Problem Solving","Rapid Learning"]}),u.jsx(Tr,{title:"Design Patterns & Architecture",description:"Understanding of software design patterns and architecture.",skills:["Object-Oriented Programming (OOP)","System Design","UML","Software Design Patterns"]}),u.jsx(Tr,{title:"Version Control & Collaboration",description:"Skills in version control systems and collaborative development.",skills:["Git","Teamwork"]}),u.jsx(Tr,{title:"Programming Languages",description:"Experience in a variety of programming languages.",skills:["Python","JavaScript","C++","Java","PHP","C","C#"]})]})]})}),Tr=({title:t,description:e,skills:n,hoverEffect:i=!0})=>u.jsx("div",{children:u.jsx(oc,{children:u.jsxs(Vt,{hoverEffect:i,children:[u.jsx("h4",{className:"text-xl font-bold mb-2 text-white",children:t}),u.jsx("p",{className:"mb-4 text-white",children:e}),u.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>u.jsx("div",{className:"flex-grow",children:u.jsx(Et,{children:u.jsx("div",{className:"text-center text-primary-800 bg-white rounded-xl p-[6px] font-[800]",children:r},s)})},s))})]})})}),kC=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(OC,{})})});function Wu({title:t,date:e,location:n,bulletPoints:i,side:r,dashedLine:s,className:o=""}){const a=u.jsxs(Vt,{className:"p-8",children:[u.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-x-8",children:[u.jsx("h3",{className:"text-xl font-semibold",children:t}),u.jsx("span",{className:"text-pumpkin-100 font-bold",children:e})]}),u.jsx("p",{className:"italic text-pumpkin-100",children:n}),u.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1 text-left",children:i.map((c,l)=>u.jsx("li",{className:"custom-bullet",children:c},l))})]});return u.jsxs("div",{className:`relative ${o}`,children:[u.jsx(Et,{children:u.jsx("div",{className:`hidden absolute top-[50%] w-[28rem] xl:w-[42rem] 2xl:w-[56rem] h-32 border-t-4 border-primary-500 border-dashed -z-10 ${s=="onRight"&&"md:block left-1/2 border-r-4 rounded-tr-[40px]"} ${s=="onLeft"&&"md:block right-1/2 border-l-4 rounded-tl-[40px]"}`})}),r=="left"?u.jsx(ac,{children:a}):u.jsx(sc,{children:a})]})}const ya=[{title:"Freelance Web Developer",date:"11/2024 – 07/2025",location:"Stark Technologies, Serbia (Remote)",bulletPoints:["Developing diverse projects using React and Next.js.","Crafting high-performance, interactive frontend experiences."],className:""},{title:"Freelance Web Developer",date:"08/2024 – 01/2025",location:"Eyes360, Cairo, Egypt (Remote)",bulletPoints:["Developed makeup try-on feature: eyebrow coloring using Google Face Landmarks with WebGL.","Built sunglasses try-on system with face tracking and 3D model positioning using Babylon.js.","Created watch try-on feature using hand tracking with Google Landmarks."],className:"mt-52 xl:mt-40"},{title:"Front-End Web Developer",date:"02/2024 – 09/2024",location:"Divcodes, Beirut, Lebanon (Remote)",bulletPoints:["Worked in Front-End Development using React, Next.js, and TypeScript.","Involved in 2 projects, enhancing React development skills.","Utilized RESTful APIs in both projects and integrated Next.js."],className:"mt-56 xl:mt-48"},{title:"Full-Stack Web Developer",date:"09/2022 – 02/2024",location:"Aratech, Dubai, UAE (Remote)",bulletPoints:["Gained 1.5 years of experience in Laravel and MVC architecture.","Worked on 10+ projects using HTML, CSS, JavaScript.","Developed 5+ projects using PHP, Laravel Framework, Tailwind, and jQuery.","Contributed to 2 projects using Laravel Nova and Google Map API.","Worked on 5 WordPress projects."],className:"mt-40 lg:mt-56 xl:mt-40"},{title:"ICPC Contestant - Problem Setter - Coach",date:"2018 – 2021",location:"",bulletPoints:["Regional Contestant in ACPC 2021.","Silver medal in the SCPC 2021.","Golden medal in the Girls ACPC 2020.","Problem Setter at SCPC 2020.","Expert rank on Codeforces website."],className:"mt-[12rem] xl:mt-44"}],jC=()=>u.jsxs(Vn,{title:"Experience",children:[u.jsxs("div",{className:"relative hidden md:flex gap-8 justify-between text-left",children:[u.jsx("div",{children:ya.filter((t,e)=>e%2===0).map((t,e,n)=>u.jsx(Wu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"left",dashedLine:e===n.length-1&&ya.length%2===1?"none":"onRight",className:t.className},e))}),u.jsx("div",{children:ya.filter((t,e)=>e%2===1).map((t,e,n)=>u.jsx(Wu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:"right",dashedLine:e===n.length-1&&ya.length%2===0?"none":"onLeft",className:t.className},e))})]}),u.jsx("div",{className:"md:hidden space-y-4 sm:space-y-8",children:ya.map((t,e)=>u.jsx(Wu,{title:t.title,date:t.date,location:t.location,bulletPoints:t.bulletPoints,side:e%2==0?"left":"right",dashedLine:"none",className:t.className},e))})]}),zC=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(jC,{})})}),Sf=[{href:"",text:"Home"},{href:"skills",text:"Skills"},{href:"experience",text:"Experience"},{href:"projects",text:"Projects"},{href:"education",text:"Education"},{href:"certificates",text:"Certificates"},{href:"achievements",text:"Achievements"},{href:"fun-facts",text:"Fun Facts"},{href:"languages",text:"Languages"},{href:"contact",text:"Contact"}],Ef=({href:t,text:e,whiteLine:n=!1})=>{const{theme:i}=ri(),r=ho();return u.jsxs("li",{onClick:()=>r(`portfolio/${t}`),className:"relative group transition cursor-pointer lg:text-[14px] xl:text-[18px]",children:[e,u.jsx("span",{className:`${i==="light"?n?"bg-white":"bg-black":"bg-white"} absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`})]})};function BC(){return u.jsx("svg",{className:"fill-current text-pumpkin",width:"40px",height:"40px",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M3 6h18M3 12h18M3 18h18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}const HC=()=>{const[t,e]=j.useState(!1),[n,i]=j.useState(!1),{theme:r,setTheme:s}=ri(),o=j.useRef(null);return j.useEffect(()=>{const a=setTimeout(()=>{e(!0)},100);return()=>clearTimeout(a)},[]),j.useEffect(()=>{const a=c=>{o.current&&!o.current.contains(c.target)&&i(!1)};return n?document.addEventListener("mousedown",a):document.removeEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[n]),u.jsx("header",{className:`fixed w-full top-0 left-0 backdrop-blur-lg shadow-xl z-50 transition-opacity duration-[1500ms] ${r=="light"?"bg-white bg-opacity-50":"bg-black bg-opacity-60"} ${t?"opacity-100":"opacity-0"}`,children:u.jsxs("nav",{className:"container mx-auto px-6 py-2 lg:py-4 flex justify-between items-center",children:[u.jsxs("div",{className:"lg:hidden relative",ref:o,children:[u.jsx("button",{onClick:()=>i(!n),className:"cursor-pointer",children:u.jsx(BC,{})}),u.jsx("div",{className:`${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"} bg-secondary-800 w-44 p-6 absolute left-0 mt-2 transition-all duration-500 ease-in-out`,children:u.jsx("ul",{className:"flex flex-col gap-4",children:Sf.map((a,c)=>u.jsx("div",{onClick:()=>i(!1),children:u.jsx(Ef,{href:a.href,text:a.text})},c))})})]}),u.jsx("ul",{className:"hidden lg:flex space-x-6",children:Sf.map((a,c)=>u.jsx(Ef,{href:a.href,text:a.text},c))}),u.jsx("button",{onClick:()=>s(r==="light"?"dark":"light"),className:"relative w-12 h-7 rounded-full transition-all duration-300 bg-gradient-to-b from-pumpkin-500 to-pumpkin-700 shadow-lg shadow-inner",children:u.jsx("span",{className:`absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 bg-gradient-to-b from-pumpkin-100 to-white border border-pumpkin-600 shadow-md ${r==="dark"?"translate-x-5":"translate-x-0"}`})})]})})},Bi={name:"Nagham Qarqamaz",certificate:"General Certificate of High School Education",specialization:"Scientific Section",average:95.9,year:2017,subjects:[{subject:"Arabic Language",grade:389,max:400},{subject:"English Language",grade:300,max:300},{subject:"French Language",grade:292,max:300},{subject:"National Education",grade:190,max:200},{subject:"Mathematics",grade:598,max:600},{subject:"Physics",grade:399,max:400},{subject:"Chemistry",grade:193,max:200},{subject:"Science",grade:250,max:300},{subject:"Religion Education",grade:170,max:200}],totals:{earned:2781,max:2900}},VC=()=>u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Transcript of Grades"}),u.jsxs("div",{className:"mb-4",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Certificate:"})," ",Bi.certificate]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Specialization:"})," ",Bi.specialization]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Year:"})," ",Bi.year]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Overall Average:"})," ",Bi.average,"%"]})]}),u.jsx("div",{className:"overflow-x-auto mb-4",children:u.jsxs("table",{className:"w-full border-collapse",children:[u.jsx("thead",{className:"bg-primary-500",children:u.jsxs("tr",{children:[u.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),u.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"}),u.jsx("th",{className:"border px-4 py-2 text-center",children:"Max Grade"}),u.jsx("th",{className:"border px-4 py-2 text-center",children:"Percentage"})]})}),u.jsxs("tbody",{children:[Bi.subjects.map((t,e)=>u.jsxs("tr",{className:`${e%2==1&&"bg-[#FFFFFF1B]"}`,children:[u.jsx("td",{className:"border px-4 py-2",children:t.subject}),u.jsx("td",{className:"border px-4 py-2 text-center",children:t.grade}),u.jsx("td",{className:"border px-4 py-2 text-center",children:t.max}),u.jsxs("td",{className:"border px-4 py-2 text-center",children:[(t.grade/t.max*100).toFixed(1),"%"]})]},e)),u.jsxs("tr",{className:"font-semibold bg-primary-500",children:[u.jsx("td",{className:"border px-4 py-2",children:"Total"}),u.jsx("td",{className:"border px-4 py-2 text-center",children:Bi.totals.earned}),u.jsx("td",{className:"border px-4 py-2 text-center",children:Bi.totals.max}),u.jsxs("td",{className:"border px-4 py-2 text-center",children:[Bi.average,"%"]})]})]})]})})]}),Sa={name:"Nagham Qarqamaz",degree:"Bachelor in Informatics Engineering - Software and Information Systems",university:"Tishreen University",overall_average:92.08,overall_appreciation:"Excellent",years:[{year:1,average:94.3,total_grades:1226,terms:{first_term:[{subject:"Programming (1)",grade:98},{subject:"Mathematical Analysis (1)",grade:96},{subject:"Non-linear Algebra",grade:100},{subject:"English Language (1)",grade:93},{subject:"Electrical Physics",grade:86},{subject:"Arabic Language",grade:93}],second_term:[{subject:"Programming (2)",grade:98},{subject:"Mathematical Analysis (2)",grade:84},{subject:"Physics of Semiconductors",grade:97},{subject:"Linear Algebra",grade:100},{subject:"Computer Operating Principles",grade:98},{subject:"English Language (2)",grade:93},{subject:"National Socialist Culture",grade:90}]}},{year:2,average:96.16,total_grades:1154,terms:{first_term:[{subject:"Advanced Programming (1)",grade:96},{subject:"Discrete Mathematics",grade:88},{subject:"Mathematical Analysis (3)",grade:100},{subject:"Probabilities and Statistics",grade:100},{subject:"Electrical Circuits",grade:98},{subject:"English Language for Informatics (1)",grade:90}],second_term:[{subject:"Advanced Programming (2)",grade:100},{subject:"Databases (1)",grade:98},{subject:"Numerical Analysis",grade:100},{subject:"Operating Research",grade:98},{subject:"Signals and Systems",grade:98},{subject:"English Language for Informatics (2)",grade:88}]}},{year:3,average:93.5,total_grades:1122,terms:{first_term:[{subject:"Communication Skills",grade:94},{subject:"Algorithms and Data Structures",grade:87},{subject:"Theory of Computation",grade:100},{subject:"Digital Communications",grade:96},{subject:"Logic Circuits",grade:99},{subject:"Computer Architecture (1)",grade:94}],second_term:[{subject:"Information Theory",grade:89},{subject:"Complexity Theory",grade:89},{subject:"Computer Networks (1)",grade:87},{subject:"Artificial Intelligence Principles",grade:92},{subject:"Software Engineering (1)",grade:96},{subject:"Operating Systems (1)",grade:99}]}},{year:4,average:91.58,total_grades:1099,terms:{first_term:[{subject:"Computer-aided Drawing",grade:100},{subject:"Organization Management",grade:93},{subject:"Multimedia Systems",grade:94},{subject:"Parallel Programming",grade:83},{subject:"Databases (2)",grade:90},{subject:"Software Engineering (2)",grade:87}],second_term:[{subject:"Modeling and Simulation",grade:85},{subject:"Analysis of Financial Systems",grade:93},{subject:"Compiler Structure",grade:100},{subject:"Design of Experiments",grade:96},{subject:"Distributed Systems and Applications",grade:82},{subject:"Semester Project",grade:96}]}},{year:5,average:84.9,total_grades:849,terms:{first_term:[{subject:"Information Systems Security",grade:81},{subject:"Advanced Databases",grade:82},{subject:"Software Engineering (3)",grade:74},{subject:"Machine Learning",grade:85},{subject:"Intelligent Search Algorithms",grade:78}],second_term:[{subject:"Information Systems Engineering",grade:83},{subject:"Marketing and Quality",grade:86},{subject:"Design Patterns",grade:91},{subject:"Web Applications",grade:92},{subject:"Graduation Project",grade:97}]}}]},GC=()=>u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-semibold mb-4",children:"Transcript of Grades"}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("p",{children:[u.jsx("strong",{children:"Degree:"})," ",Sa.degree]}),u.jsxs("p",{children:[u.jsx("strong",{children:"University:"})," ",Sa.university]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Overall Average:"})," ",Sa.overall_average,"%"]}),u.jsxs("p",{children:[u.jsx("strong",{children:"Overall Appreciation:"})," ",Sa.overall_appreciation]})]}),u.jsx("div",{className:"space-y-8 mb-4",children:Sa.years.map(t=>{const e=`${2016+t.year}-${2017+t.year}`,n=["First","Second","Third","Fourth","Fifth"];return u.jsxs("div",{children:[u.jsxs("h4",{className:"text-lg font-semibold mb-3 text-white",children:[n[t.year-1]," Year /",e,"/ - Average: ",t.average,"%"]}),u.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[u.jsx("div",{className:"flex-1 overflow-x-auto",children:u.jsxs("table",{className:"w-full border-collapse",children:[u.jsxs("thead",{className:"bg-primary-500",children:[u.jsx("tr",{children:u.jsx("th",{className:"border px-4 py-2 text-center",colSpan:2,children:"First Term"})}),u.jsxs("tr",{children:[u.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),u.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"})]})]}),u.jsx("tbody",{children:t.terms.first_term.map((i,r)=>u.jsxs("tr",{className:`${r%2==1&&"bg-[#FFFFFF1B]"}`,children:[u.jsx("td",{className:"border px-4 py-2 text-start",children:i.subject}),u.jsx("td",{className:"border px-4 py-2 text-center",children:i.grade})]},r))})]})}),u.jsx("div",{className:"flex-1 overflow-x-auto",children:u.jsxs("table",{className:"w-full border-collapse",children:[u.jsxs("thead",{className:"bg-primary-500",children:[u.jsx("tr",{children:u.jsx("th",{className:"border px-4 py-2 text-center",colSpan:2,children:"Second Term"})}),u.jsxs("tr",{children:[u.jsx("th",{className:"border px-4 py-2 text-center",children:"Subject"}),u.jsx("th",{className:"border px-4 py-2 text-center",children:"Grade"})]})]}),u.jsx("tbody",{children:t.terms.second_term.map((i,r)=>u.jsxs("tr",{className:`${r%2==1&&"bg-[#FFFFFF1B]"}`,children:[u.jsx("td",{className:"border px-4 py-2 text-start",children:i.subject}),u.jsx("td",{className:"border px-4 py-2 text-center",children:i.grade})]},r))})]})})]})]},t.year)})})]}),WC=()=>u.jsx(Vt,{hoverEffect:!1,children:u.jsx("div",{className:"text-center mb-8",children:u.jsxs("div",{className:"text-left max-w-4xl mx-auto",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-2xl font-semibold",children:"Bachelor in Informatics Engineering - Software and Information Systems"}),u.jsx("div",{className:"text-pumpkin-100 font-bold text-lg",children:"2018 – 2022"})]}),u.jsx("p",{className:"italic text-pumpkin-100 text-lg mb-4",children:"Tishreen University, Latakia, Syria"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-lg mb-2",children:"Academic Excellence"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-x-12 px-4",children:[u.jsxs("ul",{className:"list-disc space-y-1",children:[u.jsx("li",{children:"Graduated with Honors (Valedictorian), Unbroken record as #1 student across all years of university"}),u.jsx("li",{children:"Overall average: 92.08%"}),u.jsx("li",{children:"9 perfect scores (100%)"}),u.jsx("li",{children:"5 consecutive Al-Basel Excellence Awards (2018-2022)"})]}),u.jsxs("ul",{className:"list-disc space-y-1",children:[u.jsx("li",{children:"Built innovative university projects: Interactive online judge with WebGL interface (96%) and realistic 3D virtual tour of faculty building (97%)"}),u.jsx("li",{children:"Active participation in collegiate programming competitions enhanced core problem-solving and analytical reasoning abilities"})]})]})]})]})})}),XC=({theme:t})=>{const e=ho();return u.jsx(Vt,{hoverEffect:!1,children:u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-2xl font-semibold mb-6",children:"University Projects"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:[u.jsxs("div",{className:`p-6 rounded-xl border-2 flex flex-col ${t==="light"?"border-primary-200 bg-primary-50":"border-secondary-600 bg-secondary-800"}`,children:[u.jsx("h4",{className:"font-semibold text-lg mb-3",children:"4th Year Project (96%)"}),u.jsx("p",{className:"text-sm mb-4 flex-grow",children:"Interactive WebGL interface for problem-solving website. Applied OpenGL expertise to web environment with advanced 3D rendering."}),u.jsx("div",{className:"mt-auto",children:u.jsx(Xs,{text:"View Project",onClick:()=>e("/portfolio/projects/2"),loading:!1,loadingText:"",variant:"primary"})})]}),u.jsxs("div",{className:`p-6 rounded-xl border-2 flex flex-col ${t==="light"?"border-primary-200 bg-primary-50":"border-secondary-600 bg-secondary-800"}`,children:[u.jsx("h4",{className:"font-semibold text-lg mb-3",children:"Graduation Project (97%)"}),u.jsx("p",{className:"text-sm mb-4 flex-grow",children:"3D virtual campus tour using Three.js and Blender. Features pathfinding, collision detection, and smooth camera controls."}),u.jsx("div",{className:"mt-auto",children:u.jsx(Xs,{text:"View Project",onClick:()=>e("/portfolio/projects/3"),loading:!1,loadingText:"",variant:"primary"})})]})]})]})})},$C=()=>u.jsx(Vt,{hoverEffect:!1,children:u.jsx("div",{className:"text-center mb-6",children:u.jsxs("div",{className:"text-left max-w-4xl mx-auto",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsx("h3",{className:"text-2xl font-semibold",children:"General Certificate of High School Education"}),u.jsx("div",{className:"text-pumpkin-100 font-bold text-lg",children:"2015 – 2017"})]}),u.jsx("p",{className:"italic text-pumpkin-100 text-lg mb-4",children:"Martyr Jihad Nasour Secondary School, Latakia, Syria"}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-lg mb-2",children:"Academic Performance"}),u.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[u.jsx("li",{children:"Scientific Section specialization"}),u.jsx("li",{children:"Overall average: 95.9%"}),u.jsx("li",{children:"Top student in all academic years"})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-lg mb-2",children:"Top Scores"}),u.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[u.jsx("li",{children:"English Language: 100%"}),u.jsx("li",{children:"Physics: 99.8%"}),u.jsx("li",{children:"Mathematics: 99.7%"})]})]})]})]})})}),qC=()=>{const t=ho(),{theme:e}=ri();return u.jsx(Vn,{glow:!1,title:"Education",children:u.jsxs("div",{className:"flex flex-col gap-8",children:[u.jsx(Et,{children:u.jsxs("div",{className:`${e=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Educational Certificates"}),u.jsx(Vt,{hoverEffect:!1,children:u.jsxs("div",{className:"text-center p-2",children:[u.jsx("p",{className:"text-lg",children:"View all my educational certificates, academic excellence awards, graduation documents, and collegiate programming contest achievements from my university period in the dedicated certificates section."}),u.jsx(Xs,{text:"View All Certificates",onClick:()=>t("/portfolio/certificates"),loading:!1,loadingText:"",variant:"white"})]})})]})}),u.jsx(Et,{children:u.jsxs("div",{className:`${e=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"University Education"}),u.jsxs("div",{className:"space-y-12",children:[u.jsx(Et,{children:u.jsx(WC,{})}),u.jsx(Et,{children:u.jsx(XC,{theme:e})}),u.jsx(Et,{children:u.jsx(Vt,{hoverEffect:!1,children:u.jsx(GC,{})})})]})]})}),u.jsx(Et,{children:u.jsxs("div",{className:`${e=="light"?"text-primary-900":"shadow-pumpkin bg-secondary-900"} overflow-hidden p-4 sm:p-8 rounded-[2rem] sm:rounded-[3rem]`,children:[u.jsx("div",{className:"text-3xl font-semibold mb-6",children:"Secondary School Education"}),u.jsxs("div",{className:"space-y-12",children:[u.jsx(Et,{children:u.jsx($C,{})}),u.jsx(Et,{children:u.jsx(Vt,{hoverEffect:!1,children:u.jsx(VC,{})})})]})]})})]})})},YC=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(qC,{})})}),KC=()=>u.jsx(Vn,{title:"Achievements",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-left space-y-4 sm:space-y-8",children:[u.jsx(ac,{children:u.jsxs(Vt,{className:"p-8",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h3",{className:"text-xl font-semibold",children:"Sharpening Skills Through Noon's Selection Process"}),u.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2023"})]}),u.jsx("p",{className:"italic text-pumpkin-100",children:"Dubai, UAE"}),u.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[u.jsx("li",{className:"custom-bullet",children:"Completed a rigorous hiring process with noon, a leading e-commerce company."}),u.jsx("li",{className:"custom-bullet",children:"Solved 14 out of 16 problems in a problem-solving test and succeeded in 3 interviews."}),u.jsx("li",{className:"custom-bullet",children:"Enhanced knowledge in e-commerce, databases, and systems through 4+ months of training."}),u.jsx("li",{className:"custom-bullet",children:"Solved 30+ SQL problems on LeetCode and 15+ on HackerRank."})]})]})}),u.jsx(sc,{children:u.jsxs(Vt,{className:"p-8",children:[u.jsx("div",{className:"flex justify-between items-center",children:u.jsx("h3",{className:"text-xl font-semibold",children:"Fast Learning Ability"})}),u.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:u.jsx("li",{className:"custom-bullet",children:"Over the course of just 4 days, I built a fully functioning application using Spring Boot for the backend and Angular for the frontend—technologies I had never worked with before"})})]})}),u.jsx(ac,{children:u.jsxs(Vt,{className:"p-8",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("h3",{className:"text-xl font-semibold",children:"Expert Ranking on Codeforces"}),u.jsx("span",{className:"text-pumpkin-100 font-bold",children:"2018 – 2021"})]}),u.jsx("ul",{className:"list-disc list-inside mt-2 space-y-1",children:u.jsx("li",{className:"custom-bullet",children:"Demonstrated expertise in solving algorithmic problems using data structures."})})]})}),u.jsx(sc,{children:u.jsxs(Vt,{className:"p-8",children:[u.jsx("div",{className:"flex justify-between items-center",children:u.jsx("h3",{className:"text-xl font-semibold",children:"Top ICPC Medals:"})}),u.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[u.jsx("li",{className:"custom-bullet",children:"Gold Medalist, ACPC for Girls (2020)"}),u.jsx("li",{className:"custom-bullet",children:"Silver Medal, SCPC (2021)"})]})]})})]})}),QC=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(KC,{})})});function ZC(){return u.jsx(Vn,{title:"Fun Facts",children:u.jsx("div",{className:"max-w-[40rem] mx-auto",children:u.jsx(ex,{description:"In 2019, I created a problem and solved it in my sleep—literally! While the problem was simple and could have been solved in other ways, I found it fascinating that my mind was actively problem-solving, even while unconscious. Take a look inside my brain through this video:",videoURL:"https://www.youtube.com/embed/zNZ42gGPVEM?si=T2qVWm-grS12wnku"})})})}const JC=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(ZC,{})})});function eA(){const t=[{language:"Arabic",proficiency:"Native",prof_desc:null},{language:"English",proficiency:"C1 Level",prof_desc:"Full Professional Proficiency"},{language:"Spanish",proficiency:"B1 Level",prof_desc:"Limited Working Proficiency"},{language:"French",proficiency:"School Level",prof_desc:"Elementary Proficiency"},{language:"Korean",proficiency:"Basic",prof_desc:"Reading & Writing (Hangul)"}];return u.jsxs(Vn,{title:"Languages",children:[u.jsx(oc,{children:u.jsx("div",{className:"max-w-[40rem] mx-auto",children:u.jsx(Vt,{children:u.jsx("div",{className:"px-8",children:t.map((e,n)=>u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center py-3",children:[u.jsx("h3",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pumpkin-200",children:e.language}),u.jsxs("span",{className:"hidden sm:block text-xl text-white",children:[e.prof_desc&&u.jsx("span",{className:"mr-4 text-sm text-pumpkin-200 italic",children:e.prof_desc}),e.proficiency]}),u.jsx("div",{className:"sm:hidden text-sm text-pumpkin-200 italic",children:e.prof_desc}),u.jsx("div",{className:"sm:hidden text-xl text-white",children:e.proficiency})]},n))})})})}),u.jsx(oc,{children:u.jsx("iframe",{className:"max-w-[40rem] w-full h-[20rem] rounded-xl mx-auto mt-4 sm:mt-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105",src:"https://www.youtube.com/embed/1NUOey6g7pA?si=MM3sxyZ_sjnbClzs",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})]})}const tA=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(eA,{})})}),nA=()=>{const{pathname:t}=hr();return j.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]),null};function iA(){return u.jsxs("footer",{children:[u.jsx("img",{className:"w-full h-40",src:"/portfolio/images/wave.png"}),u.jsx("div",{className:"bg-pumpkin text-white pb-8 px-4 text-sm",children:u.jsxs("div",{className:"max-w-6xl mx-auto space-y-6",children:[u.jsx("ul",{className:"flex justify-center flex-wrap gap-x-4 gap-y-2",children:Sf.map((t,e)=>u.jsx(Ef,{href:t.href,text:t.text,whiteLine:!0},e))}),u.jsxs("p",{className:"text-center",children:["© ",new Date().getFullYear()," Nagham Qarqamaz. All rights reserved."]})]})})]})}const ro={_origin:"https://api.emailjs.com"},rA=(t,e="https://api.emailjs.com")=>{ro._userID=t,ro._origin=e},Fx=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class _g{constructor(e){this.status=e.status,this.text=e.responseText}}const Ox=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new _g(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new _g(o))}),s.open("POST",ro._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),sA=(t,e,n,i)=>{const r=i||ro._userID;return Fx(r,t,e),Ox("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},aA=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},oA=(t,e,n,i)=>{const r=i||ro._userID,s=aA(n);Fx(r,t,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),Ox("/api/v1.0/email/send-form",o)},lA={init:rA,send:sA,sendForm:oA};let cA={data:""},uA=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||cA,dA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,fA=/\/\*[^]*?\*\/|  +/g,yg=/\n+/g,$i=(t,e)=>{let n="",i="",r="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":i+=s[1]=="f"?$i(o,s):s+"{"+$i(o,s[1]=="k"?"":e)+"}":typeof o=="object"?i+=$i(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=$i.p?$i.p(s,o):s+":"+o+";")}return n+(e&&r?e+"{"+r+"}":r)+i},hi={},kx=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+kx(t[n]);return e}return t},hA=(t,e,n,i,r)=>{let s=kx(t),o=hi[s]||(hi[s]=(c=>{let l=0,d=11;for(;l<c.length;)d=101*d+c.charCodeAt(l++)>>>0;return"go"+d})(s));if(!hi[o]){let c=s!==t?t:(l=>{let d,f,h=[{}];for(;d=dA.exec(l.replace(fA,""));)d[4]?h.shift():d[3]?(f=d[3].replace(yg," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][d[1]]=d[2].replace(yg," ").trim();return h[0]})(t);hi[o]=$i(r?{["@keyframes "+o]:c}:c,n?"":"."+o)}let a=n&&hi.g?hi.g:null;return n&&(hi.g=hi[o]),((c,l,d,f)=>{f?l.data=l.data.replace(f,c):l.data.indexOf(c)===-1&&(l.data=d?c+l.data:l.data+c)})(hi[o],e,i,a),o},pA=(t,e,n)=>t.reduce((i,r,s)=>{let o=e[s];if(o&&o.call){let a=o(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=c?"."+c:a&&typeof a=="object"?a.props?"":$i(a,""):a===!1?"":a}return i+r+(o??"")},"");function Oc(t){let e=this||{},n=t.call?t(e.p):t;return hA(n.unshift?n.raw?pA(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,uA(e.target),e.g,e.o,e.k)}let jx,Mf,wf;Oc.bind({g:1});let Ni=Oc.bind({k:1});function mA(t,e,n,i){$i.p=e,jx=t,Mf=n,wf=i}function gr(t,e){let n=this||{};return function(){let i=arguments;function r(s,o){let a=Object.assign({},s),c=a.className||r.className;n.p=Object.assign({theme:Mf&&Mf()},a),n.o=/ *go\d+/.test(c),a.className=Oc.apply(n,i)+(c?" "+c:"");let l=t;return t[0]&&(l=a.as||t,delete a.as),wf&&l[0]&&wf(a),jx(l,a)}return r}}var gA=t=>typeof t=="function",hc=(t,e)=>gA(t)?t(e):t,vA=(()=>{let t=0;return()=>(++t).toString()})(),zx=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),xA=20,Bx=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,xA)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return Bx(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},Dl=[],Or={toasts:[],pausedAt:void 0},Kr=t=>{Or=Bx(Or,t),Dl.forEach(e=>{e(Or)})},_A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yA=(t={})=>{let[e,n]=j.useState(Or),i=j.useRef(Or);j.useEffect(()=>(i.current!==Or&&n(Or),Dl.push(n),()=>{let s=Dl.indexOf(n);s>-1&&Dl.splice(s,1)}),[]);let r=e.toasts.map(s=>{var o,a,c;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((o=t[s.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((a=t[s.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||_A[s.type],style:{...t.style,...(c=t[s.type])==null?void 0:c.style,...s.style}}});return{...e,toasts:r}},SA=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||vA()}),Eo=t=>(e,n)=>{let i=SA(e,t,n);return Kr({type:2,toast:i}),i.id},Ht=(t,e)=>Eo("blank")(t,e);Ht.error=Eo("error");Ht.success=Eo("success");Ht.loading=Eo("loading");Ht.custom=Eo("custom");Ht.dismiss=t=>{Kr({type:3,toastId:t})};Ht.remove=t=>Kr({type:4,toastId:t});Ht.promise=(t,e,n)=>{let i=Ht.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(r=>{let s=e.success?hc(e.success,r):void 0;return s?Ht.success(s,{id:i,...n,...n==null?void 0:n.success}):Ht.dismiss(i),r}).catch(r=>{let s=e.error?hc(e.error,r):void 0;s?Ht.error(s,{id:i,...n,...n==null?void 0:n.error}):Ht.dismiss(i)}),t};var EA=(t,e)=>{Kr({type:1,toast:{id:t,height:e}})},MA=()=>{Kr({type:5,time:Date.now()})},Oa=new Map,wA=1e3,TA=(t,e=wA)=>{if(Oa.has(t))return;let n=setTimeout(()=>{Oa.delete(t),Kr({type:4,toastId:t})},e);Oa.set(t,n)},bA=t=>{let{toasts:e,pausedAt:n}=yA(t);j.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let c=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(c<0){a.visible&&Ht.dismiss(a.id);return}return setTimeout(()=>Ht.dismiss(a.id),c)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let i=j.useCallback(()=>{n&&Kr({type:6,time:Date.now()})},[n]),r=j.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:c=8,defaultPosition:l}=o||{},d=e.filter(m=>(m.position||l)===(s.position||l)&&m.height),f=d.findIndex(m=>m.id===s.id),h=d.filter((m,x)=>x<f&&m.visible).length;return d.filter(m=>m.visible).slice(...a?[h+1]:[0,h]).reduce((m,x)=>m+(x.height||0)+c,0)},[e]);return j.useEffect(()=>{e.forEach(s=>{if(s.dismissed)TA(s.id,s.removeDelay);else{let o=Oa.get(s.id);o&&(clearTimeout(o),Oa.delete(s.id))}})},[e]),{toasts:e,handlers:{updateHeight:EA,startPause:MA,endPause:i,calculateOffset:r}}},CA=Ni`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,AA=Ni`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RA=Ni`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,PA=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${CA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${AA} 0.15s ease-out forwards;
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
    animation: ${RA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,NA=Ni`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,LA=gr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${NA} 1s linear infinite;
`,DA=Ni`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,IA=Ni`
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
}`,UA=gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${DA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${IA} 0.2s ease-out forwards;
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
`,FA=gr("div")`
  position: absolute;
`,OA=gr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,kA=Ni`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jA=gr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${kA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,zA=({toast:t})=>{let{icon:e,type:n,iconTheme:i}=t;return e!==void 0?typeof e=="string"?j.createElement(jA,null,e):e:n==="blank"?null:j.createElement(OA,null,j.createElement(LA,{...i}),n!=="loading"&&j.createElement(FA,null,n==="error"?j.createElement(PA,{...i}):j.createElement(UA,{...i})))},BA=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,HA=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,VA="0%{opacity:0;} 100%{opacity:1;}",GA="0%{opacity:1;} 100%{opacity:0;}",WA=gr("div")`
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
`,XA=gr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$A=(t,e)=>{let n=t.includes("top")?1:-1,[i,r]=zx()?[VA,GA]:[BA(n),HA(n)];return{animation:e?`${Ni(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ni(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qA=j.memo(({toast:t,position:e,style:n,children:i})=>{let r=t.height?$A(t.position||e||"top-center",t.visible):{opacity:0},s=j.createElement(zA,{toast:t}),o=j.createElement(XA,{...t.ariaProps},hc(t.message,t));return j.createElement(WA,{className:t.className,style:{...r,...n,...t.style}},typeof i=="function"?i({icon:s,message:o}):j.createElement(j.Fragment,null,s,o))});mA(j.createElement);var YA=({id:t,className:e,style:n,onHeightUpdate:i,children:r})=>{let s=j.useCallback(o=>{if(o){let a=()=>{let c=o.getBoundingClientRect().height;i(t,c)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return j.createElement("div",{ref:s,className:e,style:n},r)},KA=(t,e)=>{let n=t.includes("top"),i=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:zx()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...i,...r}},QA=Oc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,fl=16,ZA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:i,children:r,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:c}=bA(n);return j.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:fl,left:fl,right:fl,bottom:fl,pointerEvents:"none",...s},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},a.map(l=>{let d=l.position||e,f=c.calculateOffset(l,{reverseOrder:t,gutter:i,defaultPosition:e}),h=KA(d,f);return j.createElement(YA,{id:l.id,key:l.id,onHeightUpdate:c.updateHeight,className:l.visible?QA:"",style:h},l.type==="custom"?hc(l.message,l):r?r(l):j.createElement(qA,{toast:l,position:d}))}))};const JA=()=>{const[t,e]=j.useState({name:"",email:"",message:""}),[n,i]=j.useState("idle"),r=o=>{e({...t,[o.target.name]:o.target.value})},s=o=>{o.preventDefault(),i("sending"),lA.send("service_mlyje5d","template_bh8lfc6",t,"qk5ZPTV_zWzMK17MJ").then(()=>{i("sent"),Ht.success("Message sent!"),e({name:"",email:"",message:""})}).catch(()=>{i("error"),Ht.error("Failed to send message.")})};return u.jsx(Vn,{title:"Contact",children:u.jsxs("div",{className:"flex justify-center items-center gap-12 flex-wrap",children:[u.jsx(Vt,{hoverEffect:!1,className:"sm:px-8 py-8 w-fit max-w-[30rem] w-full",children:u.jsxs("form",{onSubmit:s,className:"mx-auto rounded space-y-4",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-start block",children:"Name:"}),u.jsx("input",{name:"name",value:t.name,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-start block",children:"Email:"}),u.jsx("input",{name:"email",type:"email",value:t.email,onChange:r,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-start block",children:"Message:"}),u.jsx("textarea",{name:"message",value:t.message,onChange:r,rows:4,className:"text-[#000] w-full border p-2 rounded",required:!0})]}),u.jsx("div",{className:"mt-8",children:u.jsx(Xs,{text:"Send Message",onClick:()=>{},loading:n==="sending",loadingText:"Sending...",variant:"white"})})]})}),u.jsx("div",{className:"flex justify-center",children:u.jsx(Zv,{})})]})})},eR=()=>u.jsx(u.Fragment,{children:u.jsx(Rn,{children:u.jsx(JA,{})})});function wi({items:t}){return u.jsx("ul",{style:{listStyleType:"disc",paddingLeft:"1.5rem"},className:"mt-2 space-y-1",children:t.map((e,n)=>u.jsx("li",{children:e},n))})}function Rs({title:t,organization:e,date:n,location:i,bulletPoints:r}){return u.jsxs("div",{children:[u.jsx("div",{className:"text-[22px] font-bold",children:t}),u.jsx("div",{className:"text-[19px] font-bold text-[#008CFF]",children:e}),u.jsxs("div",{className:"flex gap-6 text-[#3D3D3D] text-[15px]",children:[u.jsxs("div",{className:"flex gap-1 items-center",children:[u.jsx(bh,{className:"!text-[#3D3D3D] !w-4 !h-4"}),n]}),i&&u.jsxs("div",{className:"flex gap-1 items-center",children:[u.jsx(Lc,{className:"!fill-[#3D3D3D] !w-4 !h-4"}),i]})]}),u.jsx("div",{className:"text-[#3D3D3D]",children:u.jsx(wi,{items:r})})]})}function ln({text:t}){return u.jsx("div",{className:"border-b-2 border-b-black text-[24px] font-bold mb-4",children:t})}function tR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"EDUCATION"}),u.jsx("div",{children:u.jsx(Rs,{title:"Bachelor of Software Engineering",organization:"Tishreen University",date:"2018 - 2022",location:"Latakia, Syria",bulletPoints:["Valedictorian with an average of 92.08% (approx. GPA: 3.8/4.0).","Awarded Al-Basel Certificates for Academic Excellence consecutively from 2018 to 2022.","Obtained deep experience in algorithms, data structures, and complexity through 4 years of competitive programming contests."]})})]})}function nR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"EXPERIENCE"}),u.jsxs("div",{children:[u.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed pb-4",children:u.jsx(Rs,{title:"Web Developer",organization:"Anon",date:"11/2024 - 07/2025",location:"Serbia (Remote)",bulletPoints:["Built a full-scale bilingual Next.js website with modern UI/UX and responsive design, delivering 20+ pages within 1 month.","Updated a production Shopify project with 6,100+ customers, learning Liquid and integrating multiple third-party APIs."]})}),u.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed py-4",children:u.jsx(Rs,{title:"Frontend Web Developer",organization:"Eyes360",date:"08/2024 - 01/2025",location:"Cairo, Egypt (Remote)",bulletPoints:["Developed makeup try-on feature: eyebrow color application using Google Face Landmarks with WebGL for real-time eyebrow coloring.","Built sunglasses try-on system by detecting face movements with Google Landmarks and adjusting 3D model position/rotation using Babylon.js.","Created watch try-on feature using hand tracking with Google Landmarks to position and adjust watch models on user's hand."]})}),u.jsx("div",{className:"border-b border-[#CCCCCC] border-dashed py-4",children:u.jsx(Rs,{title:"Front-End Web Developer",organization:"Divcodes",date:"02/2024 - 09/2024",location:"Beirut, Lebanon (Remote)",bulletPoints:["Developed 3+ scalable React and Next.js applications with TypeScript.","Integrated 30+ RESTful APIs to connect frontend with backend systems.","Led frontend components for client-facing dashboards and e-commerce features across 20+ interactive pages."]})}),u.jsx("div",{className:"pt-4",children:u.jsx(Rs,{title:"Full-Stack Web Developer",organization:"Aratech",date:"09/2022 - 02/2024",location:"Dubai, UAE (Remote)",bulletPoints:["Collaborated with a 15-person dev team on 10+ projects using Laravel, JavaScript, and Tailwind CSS.","Built 5+ admin dashboards using Laravel Nova with Google Maps API integrations.","Contributed to 5+ WordPress websites, including full custom theme development.","Gained extensive experience working onsite in a friendly and highly collaborative team of around 15 members for a Dubai-based company."]})})]})]})}function iR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"LANGUAGES"}),u.jsxs("div",{className:"flex border-b border-[#CCCCCC] border-dashed pb-1",children:[u.jsx("div",{className:"w-20",children:"Arabic"}),u.jsx("div",{className:"text-[#3D3D3D]",children:"Native"})]}),u.jsxs("div",{className:"flex border-b border-[#CCCCCC] border-dashed py-1",children:[u.jsx("div",{className:"w-20",children:"English"}),u.jsx("div",{className:"text-[#3D3D3D]",children:"Full Professional Proficiency (C1 Level)"})]}),u.jsxs("div",{className:"flex pt-1",children:[u.jsx("div",{className:"w-20",children:"Spanish"}),u.jsx("div",{className:"text-[#3D3D3D]",children:"Limited Working Proficiency (B1 Level)"})]})]})}function rR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"PROBLEM SOLVING EXPERIENCE"}),u.jsx("div",{children:u.jsx(Rs,{title:"ICPC Competitor · Problem Setter · Coach",organization:"International Collegiate Programming Contest",date:"2018 - 2021",bulletPoints:["Gold Medalist (4th place), ACPC for Girls 2020.","Silver Medalist (7th place), SCPC 2021.","Competed in ACPC 2021 as Tishreen University’s regional contestant.","Authored problems for SCPC 2020.","Reached Expert rank on Codeforces (2018–2021).","Received 12 certificates recognizing participation and achievements in ICPC contests.","Provided mentorship and training to over 30 younger participants preparing for ICPC competitions."]})})]})}function sR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"SKILLS"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-[20px]",children:"Frontend:"}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"React.js"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Next.js"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"TypeScript"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"JavaScript"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Tailwind CSS"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"HTML"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"CSS"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Redux"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Svelte"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Angular"})]})]}),u.jsxs("div",{className:"pt-4",children:[u.jsx("div",{className:"font-bold text-[20px]",children:"Backend:"}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Laravel"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Django"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Spring Boot"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"PHP"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"MySQL"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"RESTful APIs"})]})]}),u.jsxs("div",{className:"pt-4",children:[u.jsx("div",{className:"font-bold text-[20px]",children:"Programming Languages:"}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C++"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Python"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Java"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"C#"})]})]}),u.jsxs("div",{className:"pt-4",children:[u.jsx("div",{className:"font-bold text-[20px]",children:"3D & Graphics:"}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"WebGL"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Babylon.js"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Three.js"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"OpenGL"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Blender"})]})]}),u.jsxs("div",{className:"pt-4",children:[u.jsx("div",{className:"font-bold text-[20px]",children:"Other Skills:"}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Git"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"WordPress"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"System Design"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"OOP"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"UML"}),u.jsx("div",{className:"bg-[#008CFF] px-4 py-1 rounded-full text-white text-[15px]",children:"Design Patterns"})]})]})]})]})}function aR(){return u.jsxs("div",{children:[u.jsx(ln,{text:"SUMMARY"}),u.jsxs("div",{children:[u.jsx("p",{children:"Valedictorian Software Engineer with 3+ years of experience building high-impact frontend and full-stack applications. Gold Medalist in ACPC for Girls, combining competitive programming skills with practical product delivery."}),u.jsx(wi,{items:["Delivered 15+ scalable projects with optimized performance and clean architecture.","Fast learner, built a functional app using 2 new frameworks after just 4 days of learning.","Problem solver with over 4 years of experience during college, solved 768 problems on Codeforces and many more on other platforms. Earned 12 certifications in programming contests.","Boosted development speed by 80% using AI-assisted tools.","Gained backend experience by solving 26 MySQL problems on LeetCode and building a few backend apps. Currently aiming to strengthen and expand my backend development skills.","Experience in Web 3D rendering with 2 academic projects and 1 professional project."]})]})]})}const oR=()=>u.jsxs("div",{className:"flex mt-12 gap-20",children:[u.jsxs("div",{className:"w-[65%] space-y-8",children:[u.jsx(nR,{}),u.jsx(rR,{}),u.jsx(tR,{})]}),u.jsxs("div",{className:"w-[35%] space-y-8",children:[u.jsx(aR,{}),u.jsx(sR,{}),u.jsx(iR,{})]})]});function Hx({className:t=""}){return u.jsx("svg",{className:`fill-current text-pumpkin w-5 h-5 sm:w-8 sm:h-8 ${t}`,fill:"#000000",viewBox:"0 0 512 512",id:"_x30_1",version:"1.1",children:u.jsx("path",{d:"M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z"})})}const lR=()=>u.jsxs("div",{className:"flex",children:[u.jsxs("div",{className:"w-[65%]",children:[u.jsx("div",{className:"text-[40px] font-bold",children:"NAGHAM QARQAMAZ"}),u.jsx("div",{className:"text-[#008CFF] text-[28px] -mt-2",children:"Software Engineer"}),u.jsxs("div",{className:"mt-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Rh,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",u.jsx("a",{className:"underline",href:"https://wa.me/+963992803522",children:"+963992803522"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Ch,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",u.jsx("a",{className:"underline",href:"mailto:nagham.qarqamaz.kp@gmail.com",children:"nagham.qarqamaz.kp@gmail.com"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Ah,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",u.jsx("a",{className:"underline",href:"https://linkedin.com/in/nagham-qarqamaz",children:"https://linkedin.com/in/nagham-qarqamaz"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Hx,{className:"!fill-[#008CFF] !w-5 !h-5"})," ",u.jsx("a",{className:"underline",href:"https://nagham-qarqamaz.github.io/portfolio/",children:"https://nagham-qarqamaz.github.io/portfolio/"})]})]})]}),u.jsx("div",{className:"w-[35%] flex justify-end items-center",children:u.jsx("img",{className:"rounded-full w-52 h-52",src:"https://nagham-qarqamaz.github.io/portfolio/images/profile.jpg"})})]}),cR=()=>u.jsxs("div",{className:"p-20 text-black",children:[u.jsx("style",{children:`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                        color: #000000;
                    }
                    
                `}),u.jsx(lR,{}),u.jsx(oR,{})]}),uR=()=>u.jsxs("div",{className:"text-center mb-6",children:[u.jsx("div",{className:"text-[36px] font-bold mb-2",children:"NAGHAM QARQAMAZ"}),u.jsx("div",{className:"text-[#008CFF] text-[24px] mb-2",children:"Software Engineer Pursuing Advanced Studies"}),u.jsxs("div",{className:"text-[16px] text-[#3D3D3D] mb-4",children:[u.jsx(Lc,{className:"!fill-[#3D3D3D] !w-4 !h-4 inline mr-1"}),"Latakia, Syria"]}),u.jsxs("div",{className:"flex justify-center items-center gap-6 flex-wrap text-[14px]",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Rh,{className:"!fill-[#008CFF] !w-4 !h-4"}),u.jsx("a",{className:"underline",href:"https://wa.me/+963992803522",children:"+963992803522"})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Ch,{className:"!fill-[#008CFF] !w-4 !h-4"}),u.jsx("a",{className:"underline",href:"mailto:nagham.qarqamaz.kp@gmail.com",children:"nagham.qarqamaz.kp@gmail.com"})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Ah,{className:"!fill-[#008CFF] !w-4 !h-4"}),u.jsx("a",{className:"underline",href:"https://linkedin.com/in/nagham-qarqamaz",children:"linkedin.com/in/nagham-qarqamaz"})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Hx,{className:"!fill-[#008CFF] !w-4 !h-4"}),u.jsx("a",{className:"underline",href:"https://nagham-qarqamaz.github.io/portfolio",children:"nagham-qarqamaz.github.io/portfolio"})]})]})]}),kr=({title:t,organization:e,date:n,location:i,bulletPoints:r})=>u.jsxs("div",{className:"mb-4",children:[u.jsx("div",{className:"text-[20px] font-bold",children:t}),u.jsx("div",{className:"text-[17px] font-bold text-[#008CFF]",children:e}),u.jsxs("div",{className:"flex gap-4 text-[#3D3D3D] text-[14px] mb-1",children:[u.jsxs("div",{className:"flex gap-1 items-center",children:[u.jsx(bh,{className:"!text-[#3D3D3D] !w-3 !h-3"}),n]}),i&&u.jsxs("div",{className:"flex gap-1 items-center",children:[u.jsx(Lc,{className:"!fill-[#3D3D3D] !w-3 !h-3"}),i]})]}),u.jsx("div",{className:"text-[15px]",children:u.jsx(wi,{items:r})})]}),dR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"EDUCATION"}),u.jsxs("div",{className:"space-y-4",children:[u.jsx(kr,{title:"Bachelor in Informatics Engineering - Software and Information Systems",organization:"Tishreen University",date:"2018 - 2022",location:"Latakia, Syria",bulletPoints:["Valedictorian with 92.08% overall average - 'Excellent' appreciation.","Consistent #1 ranking across all 5 years (2018-2022) with Al-Basel Excellence Awards.","Year-by-year performance: Y1: 94.3%, Y2: 96.16%, Y3: 93.5%, Y4: 91.58%, Y5: 84.9%.","Core subject excellence: Operating Systems (99%), Databases (98%), Software Engineering (96%), Web Applications (92%).","Specialized track: Software and Information Systems with focus on 3D graphics and algorithms.","4th Year Project (96%): Interactive WebGL interface integrating OpenGL expertise.","Graduation Project (97%): 3D virtual campus tour with pathfinding and collision detection using Three.js/Blender.","Teaching experience: Developed materials for GATE Library (8+ subjects) and instructed at START Institute.","ICPC team member with regional competition experience (details in Competition section)."]}),u.jsx(kr,{title:"General Certificate of High School Education",organization:"Martyr Jihad Nasour Secondary School",date:"2015 - 2017",location:"Latakia, Syria",bulletPoints:["Scientific Section specialization with 95.9% overall average.","Perfect score in English Language (300/300 - 100%).","Near-perfect scores: Physics (99.8%), Mathematics (99.7%).","Top student in all academic years in a highly competitive environment.","Strong foundation in sciences, mathematics, and languages."]})]})]}),fR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"COMPETITIVE PROGRAMMING ACHIEVEMENTS"}),u.jsx("div",{className:"space-y-4",children:u.jsx(kr,{title:"International Collegiate Programming Contest (ICPC)",organization:"ICPC Foundation",date:"2018 - 2021",bulletPoints:["Girls' ACPC 2020: Gold Medal (4th Place) - Individual competition with 4 special awards: First to Solve, Extreme Programmers, Solid Programmers, Steadfast Gurus.","TCPC 2021: 4th Place - Only team to solve exclusive problem.","SCPC 2021: Silver Medal (7th Place) in Syrian national contest.","Problem Setter for Aleppo CPC 2020.","Codeforces Expert rank (peak rating during 2018-2021).","Core skills developed: Advanced algorithms, data structures, rapid problem-solving, teamwork under pressure.","Coaching impact: Trained 30+ ICPC participants in competitive programming fundamentals."]})})]}),hR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"POST-GRADUATION PROFESSIONAL EXPERIENCE"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx(kr,{title:"Web Developer",organization:"Anon (Stark Technologies)",date:"11/2024 - 07/2025",location:"Serbia (Remote)",bulletPoints:["Built bilingual Next.js website with modern UI/UX, delivering 20+ pages within 1 month.","Updated production Shopify project with 6,100+ customers, integrating multiple APIs."]}),u.jsx(kr,{title:"Frontend Web Developer",organization:"Eyes360",date:"08/2024 - 01/2025",location:"Cairo, Egypt (Remote)",bulletPoints:["Applied academic 3D rendering expertise to commercial AR/VR applications.","Developed virtual try-on features: makeup (WebGL), sunglasses and watches (Babylon.js).","Integrated Google Face/Hand Landmarks for real-time tracking and model positioning."]}),u.jsx(kr,{title:"Front-End Web Developer",organization:"Divcodes",date:"02/2024 - 09/2024",location:"Beirut, Lebanon (Remote)",bulletPoints:["Developed 3+ scalable React/Next.js applications with TypeScript.","Integrated 30+ RESTful APIs across multiple client projects."]}),u.jsx(kr,{title:"Full-Stack Web Developer",organization:"Aratech",date:"09/2022 - 02/2024",location:"Dubai, UAE (Remote)",bulletPoints:["First post-graduation role: 15-person team collaboration on 10+ projects.","Full-stack development: Laravel, PHP, JavaScript, WordPress, Google Maps API."]})]})]}),pR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"REFERENCES"}),u.jsxs("div",{className:"flex gap-8",children:[u.jsxs("div",{className:"w-[68%]",children:[u.jsx("div",{className:"text-[18px] font-bold mb-2",children:"Academic References"}),u.jsxs("div",{className:"flex gap-16",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Dr. Raed Jaberi"}),u.jsx("div",{className:"text-[14px] text-[#008CFF]",children:"Professor, Tishreen Univ."}),u.jsx("div",{className:"text-[13px] text-[#3D3D3D]",children:"Ph.D., TU Ilmenau, Germany"}),u.jsx("div",{className:"text-[13px] text-[#7f8c8d]",children:"jaberi.raed@gmail.com"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Dr. Basel Hasan"}),u.jsx("div",{className:"text-[14px] text-[#008CFF]",children:"Lecturer, Informatics"}),u.jsx("div",{className:"text-[13px] text-[#3D3D3D]",children:"Ph.D., U. Oldenburg, Germany"}),u.jsx("div",{className:"text-[13px] text-[#7f8c8d]",children:"basel.hasan@tishreen.edu.sy"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Dr. Gaith Bilal"}),u.jsx("div",{className:"text-[14px] text-[#008CFF]",children:"Assistant Professor"}),u.jsx("div",{className:"text-[13px] text-[#3D3D3D]",children:"Ph.D., Applied Math & Programming"}),u.jsx("div",{className:"text-[13px] text-[#7f8c8d]",children:"gaithbelal7@gmail.com"})]})]})]}),u.jsxs("div",{className:"w-[32%]",children:[u.jsx("div",{className:"text-[18px] font-bold mb-2",children:"Professional References"}),u.jsxs("div",{className:"flex gap-16",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Toni Elias"}),u.jsx("div",{className:"text-[14px] text-[#008CFF]",children:"Manager, Aratech"}),u.jsx("div",{className:"text-[13px] text-[#3D3D3D]",children:"Dubai, UAE"}),u.jsx("div",{className:"text-[13px] text-[#7f8c8d]",children:"toni1elias@outlook.com"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Ali Jaber"}),u.jsx("div",{className:"text-[14px] text-[#008CFF]",children:"Technical Lead, Divcodes"}),u.jsx("div",{className:"text-[13px] text-[#3D3D3D]",children:"Beirut, Lebanon"}),u.jsx("div",{className:"text-[13px] text-[#7f8c8d]",children:"admin@divcodes.com"})]})]})]})]})]}),mR=()=>u.jsxs("div",{className:"text-[15px]",children:[u.jsx(ln,{text:"ACADEMIC PROFILE"}),u.jsxs("div",{children:[u.jsx("p",{children:"Valedictorian Informatics Engineering graduate combining exceptional academic performance with proven software development expertise. Seeking advanced academic opportunities to further develop research skills and contribute to technological innovation."}),u.jsx(wi,{items:["Maintained #1 ranking throughout entire academic career from high school through university graduation.","9 perfect scores (100%) including Linear Algebra, Theory of Computation, Computer-aided Drawing, and Compiler Structure.","Strong theoretical foundation in algorithms, machine learning, and software engineering with practical application experience.","Expert-level competitive programmer with 768+ problems solved and extensive coaching experience.","3+ years of professional experience applying academic knowledge to real-world projects.","Multilingual capabilities: Native Arabic, Professional English (C1), Working Spanish (B1).","Proven fast learner: Built full application with Spring Boot and Angular in 4 days from zero knowledge."]})]})]}),gR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"TECHNICAL SKILLS"}),u.jsxs("div",{className:"space-y-4 text-[15px]",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Programming Languages"}),u.jsx(wi,{items:["C++ (Expert level - ICPC)","JavaScript/TypeScript","Python, Java, PHP, C, C#"]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Web Development"}),u.jsx(wi,{items:["React.js, Next.js, Angular","Laravel, Django, Spring Boot","WebGL, Babylon.js, Three.js","RESTful APIs, MySQL"]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold mb-2",children:"Academic Specializations"}),u.jsx(wi,{items:["Algorithm Design & Analysis","Machine Learning & AI","Software Engineering","Competitive Programming"]})]})]})]}),vR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"ADDITIONAL ACHIEVEMENTS"}),u.jsxs("div",{className:"space-y-4 text-[15px]",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Fast Learning Capability"}),u.jsx(wi,{items:["Spring Boot/Angular mastery: Zero to functional application in 4 days.","Manager testimonial: 'Exceptional progression from minimal experience to complex implementations' - Toni Elias, Aratech."]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[15px] font-bold",children:"Problem-Solving Excellence"}),u.jsx(wi,{items:["768+ Codeforces problems solved, 45+ SQL challenges completed (LeetCode/HackerRank).","First-year student qualifying for Syrian CPC (national level competition).","Early algorithm exposure through competitions enhanced formal coursework understanding."]})]})]})]}),xR=()=>u.jsxs("div",{children:[u.jsx(ln,{text:"LANGUAGES"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between text-[14px]",children:[u.jsx("span",{className:"font-semibold",children:"Arabic"}),u.jsx("span",{className:"text-[#3D3D3D]",children:"Native Speaker"})]}),u.jsxs("div",{className:"flex justify-between text-[14px]",children:[u.jsx("span",{className:"font-semibold",children:"English"}),u.jsx("span",{className:"text-[#3D3D3D]",children:"Full Professional Proficiency (C1)"})]}),u.jsxs("div",{className:"flex justify-between text-[14px]",children:[u.jsx("span",{className:"font-semibold",children:"Spanish"}),u.jsx("span",{className:"text-[#3D3D3D]",children:"Limited Working Proficiency (B1)"})]}),u.jsxs("div",{className:"flex justify-between text-[14px]",children:[u.jsx("span",{className:"font-semibold",children:"French"}),u.jsx("span",{className:"text-[#3D3D3D]",children:"Elementary Proficiency (School Level)"})]}),u.jsxs("div",{className:"flex justify-between text-[14px]",children:[u.jsx("span",{className:"font-semibold",children:"Korean"}),u.jsx("span",{className:"text-[#3D3D3D]",children:"Basic Reading & Writing (Hangul)"})]})]})]}),_R=()=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex mt-6 gap-8",children:[u.jsxs("div",{className:"w-[68%] space-y-6",children:[u.jsx(dR,{}),u.jsx(fR,{}),u.jsx(hR,{})]}),u.jsxs("div",{className:"w-[32%] space-y-5",children:[u.jsx(mR,{}),u.jsx(gR,{}),u.jsx(vR,{}),u.jsx(xR,{})]})]}),u.jsx("div",{className:"mt-8",children:u.jsx(pR,{})})]}),yR=()=>u.jsxs("div",{className:"p-8 text-black",children:[u.jsx("style",{children:`
                    .decorating-circle, header, footer {
                        display: none;
                    }
                    #root > div{
                        background: #FFFFFF;
                        color: #000000;
                    }
                    
                `}),u.jsx(uR,{}),u.jsx(_R,{})]}),SR=()=>u.jsxs("div",{className:"min-h-[80vh] flex flex-col items-center justify-center px-4",children:[u.jsx("h1",{className:"text-[120px] font-bold text-primary mb-4",children:"404"}),u.jsx("h2",{className:"text-3xl font-semibold mb-4",children:"Page Not Found"}),u.jsx("p",{className:"text-xl mb-8 text-center max-w-md",children:"Sorry, the page you're looking for doesn't exist or has been moved."}),u.jsx(Th,{to:"/portfolio/",className:"bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors",children:"Go Back Home"})]}),ER=(t=5)=>Array.from({length:t},(e,n)=>({id:n,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,size:`${Math.random()*30+10}rem`,opacity:Math.random()*.1+.2,color:Math.random()>.5?"bg-primary":"bg-pumpkin"})),MR=()=>{const{theme:t}=ri(),e=j.useMemo(()=>ER(5),[]);return u.jsxs("div",{className:`relative overflow-hidden bg-secondary-800 ${t=="light"?"text-black":"text-white"}`,children:[t=="light"&&e.map(({id:n,left:i,top:r,size:s,opacity:o,color:a})=>u.jsx("div",{style:{left:i,top:r,width:s,height:s,opacity:o},className:`decorating-circle absolute rounded-full blur-3xl ${a}`},n)),u.jsx(ZA,{position:"bottom-center",reverseOrder:!1}),u.jsxs("div",{className:"relative z-10 min-h-screen",children:[u.jsx(HC,{}),u.jsx(nA,{}),u.jsxs(ES,{children:[u.jsx(Xt,{path:"/portfolio/",element:u.jsx(uE,{})}),u.jsx(Xt,{path:"/portfolio/skills",element:u.jsx(kC,{})}),u.jsx(Xt,{path:"/portfolio/experience",element:u.jsx(zC,{})}),u.jsx(Xt,{path:"/portfolio/projects",element:u.jsx(hE,{})}),u.jsx(Xt,{path:"/portfolio/projects/:id",element:u.jsx(pE,{})}),u.jsx(Xt,{path:"/portfolio/education",element:u.jsx(YC,{})}),u.jsx(Xt,{path:"/portfolio/certificates",element:u.jsx(xE,{})}),u.jsx(Xt,{path:"/portfolio/achievements",element:u.jsx(QC,{})}),u.jsx(Xt,{path:"/portfolio/fun-facts",element:u.jsx(JC,{})}),u.jsx(Xt,{path:"/portfolio/languages",element:u.jsx(tA,{})}),u.jsx(Xt,{path:"/portfolio/contact",element:u.jsx(eR,{})}),u.jsx(Xt,{path:"/portfolio/resume",element:u.jsx(cR,{})}),u.jsx(Xt,{path:"/portfolio/resume-academic",element:u.jsx(yR,{})}),u.jsx(Xt,{path:"*",element:u.jsx(SR,{})})]}),u.jsx(iA,{})]})]})};Dv(document.getElementById("root")).render(u.jsx(j.StrictMode,{children:u.jsx(XS,{children:u.jsx(S1,{children:u.jsx(MR,{})})})}));
