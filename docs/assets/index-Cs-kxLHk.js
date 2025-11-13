function _0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function v0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C_={exports:{}},_u={},R_={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),w0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),T0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),R0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Am=Symbol.iterator;function N0(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var P_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k_=Object.assign,N_={};function ws(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||P_}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x_(){}x_.prototype=ws.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=N_,this.updater=n||P_}var Fd=Md.prototype=new x_;Fd.constructor=Md;k_(Fd,ws.prototype);Fd.isPureReactComponent=!0;var Cm=Array.isArray,D_=Object.prototype.hasOwnProperty,Ud={current:null},O_={key:!0,ref:!0,__self:!0,__source:!0};function V_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D_.call(e,r)&&!O_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ia,type:t,key:s,ref:o,props:i,_owner:Ud.current}}function x0(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function D0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rm=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D0(""+t.key):e.toString(36)}function rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ia:case w0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ic(o,0):r,Cm(i)?(n="",t!=null&&(n=t.replace(Rm,"$&/")+"/"),rl(i,e,n,"",function(c){return c})):i!=null&&(jd(i)&&(i=x0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ic(s,l);o+=rl(s,e,n,u,i)}else if(u=N0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ic(s,l++),o+=rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function O0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},il={transition:null},V0={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:il,ReactCurrentOwner:Ud};function L_(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ws;se.Fragment=E0;se.Profiler=I0;se.PureComponent=Md;se.StrictMode=T0;se.Suspense=R0;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V0;se.act=L_;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=k_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ud.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)D_.call(e,u)&&!O_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ia,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:A0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:S0,_context:t},t.Consumer=t};se.createElement=V_;se.createFactory=function(t){var e=V_.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:C0,render:t}};se.isValidElement=jd;se.lazy=function(t){return{$$typeof:k0,_payload:{_status:-1,_result:t},_init:O0}};se.memo=function(t,e){return{$$typeof:P0,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};se.unstable_act=L_;se.useCallback=function(t,e){return yt.current.useCallback(t,e)};se.useContext=function(t){return yt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};se.useEffect=function(t,e){return yt.current.useEffect(t,e)};se.useId=function(){return yt.current.useId()};se.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return yt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};se.useRef=function(t){return yt.current.useRef(t)};se.useState=function(t){return yt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return yt.current.useTransition()};se.version="18.3.1";R_.exports=se;var O=R_.exports;const b_=v0(O),L0=_0({__proto__:null,default:b_},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=O,M0=Symbol.for("react.element"),F0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,j0=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)U0.call(e,r)&&!B0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:M0,type:t,key:s,ref:o,props:i,_owner:j0.current}}_u.Fragment=F0;_u.jsx=M_;_u.jsxs=M_;C_.exports=_u;var R=C_.exports,fh={},F_={exports:{}},Ft={},U_={exports:{}},j_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,B){var Q=$.length;$.push(B);e:for(;0<Q;){var W=Q-1>>>1,ge=$[W];if(0<i(ge,B))$[W]=B,$[Q]=ge,Q=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var B=$[0],Q=$.pop();if(Q!==B){$[0]=Q;e:for(var W=0,ge=$.length,An=ge>>>1;W<An;){var vt=2*(W+1)-1,Cn=$[vt],kt=vt+1,ce=$[kt];if(0>i(Cn,Q))kt<ge&&0>i(ce,Cn)?($[W]=ce,$[kt]=Q,W=kt):($[W]=Cn,$[vt]=Q,W=vt);else if(kt<ge&&0>i(ce,Q))$[W]=ce,$[kt]=Q,W=kt;else break e}}return B}function i($,B){var Q=$.sortIndex-B.sortIndex;return Q!==0?Q:$.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,N=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=$)r(c),B.sortIndex=B.expirationTime,e(u,B);else break;B=n(c)}}function V($){if(k=!1,S($),!N)if(n(u)!==null)N=!0,it(M);else{var B=n(c);B!==null&&Pt(V,B.startTime-$)}}function M($,B){N=!1,k&&(k=!1,w(y),y=-1),I=!0;var Q=m;try{for(S(B),p=n(u);p!==null&&(!(p.expirationTime>B)||$&&!C());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var ge=W(p.expirationTime<=B);B=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(u)&&r(u),S(B)}else r(u);p=n(u)}if(p!==null)var An=!0;else{var vt=n(c);vt!==null&&Pt(V,vt.startTime-B),An=!1}return An}finally{p=null,m=Q,I=!1}}var U=!1,v=null,y=-1,E=5,A=-1;function C(){return!(t.unstable_now()-A<E)}function x(){if(v!==null){var $=t.unstable_now();A=$;var B=!0;try{B=v(!0,$)}finally{B?T():(U=!1,v=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(x)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=x,T=function(){de.postMessage(null)}}else T=function(){P(x,0)};function it($){v=$,U||(U=!0,T())}function Pt($,B){y=P(function(){$(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,it(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var Q=m;m=B;try{return $()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,B){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=m;m=$;try{return B()}finally{m=Q}},t.unstable_scheduleCallback=function($,B,Q){var W=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?W+Q:W):Q=W,$){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Q+ge,$={id:d++,callback:B,priorityLevel:$,startTime:Q,expirationTime:ge,sortIndex:-1},Q>W?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(k?(w(y),y=-1):k=!0,Pt(V,Q-W))):($.sortIndex=ge,e(u,$),N||I||(N=!0,it(M))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var B=m;return function(){var Q=m;m=B;try{return $.apply(this,arguments)}finally{m=Q}}}})(j_);U_.exports=j_;var z0=U_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=O,Mt=z0;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B_=new Set,ko={};function Ti(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(ko[t]=e,t=0;t<e.length;t++)B_.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,H0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pm={},km={};function W0(t){return ph.call(km,t)?!0:ph.call(Pm,t)?!1:H0.test(t)?km[t]=!0:(Pm[t]=!0,!1)}function q0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K0(t,e,n,r){if(e===null||typeof e>"u"||q0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,zd);nt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,zd);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,zd);nt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K0(e,n,i,r)&&(n=null),r||i===null?W0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),z_=Symbol.for("react.provider"),$_=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),H_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Sc;function no(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Ac=!1;function Cc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function G0(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ui:return"Fragment";case Fi:return"Portal";case mh:return"Profiler";case Hd:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $_:return(t.displayName||"Context")+".Consumer";case z_:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qd:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function Q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Y0(t){var e=W_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=Y0(t))}function q_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K_(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function wh(t,e){K_(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eh(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function Yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ro(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function G_(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,Y_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){X0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function X_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function J_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var J0=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(J0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,Xi=null,Ji=null;function Lm(t){if(t=aa(t)){if(typeof Rh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Iu(e),Rh(t.stateNode,t.type,e))}}function Z_(t){Xi?Ji?Ji.push(t):Ji=[t]:Xi=t}function ev(){if(Xi){var t=Xi,e=Ji;if(Ji=Xi=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function tv(t,e){return t(e)}function nv(){}var Rc=!1;function rv(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return tv(t,e,n)}finally{Rc=!1,(Xi!==null||Ji!==null)&&(nv(),ev())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Ph=!1;if(jn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Ph=!1}function Z0(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var po=!1,Cl=null,Rl=!1,kh=null,eS={onError:function(t){po=!0,Cl=t}};function tS(t,e,n,r,i,s,o,l,u){po=!1,Cl=null,Z0.apply(eS,arguments)}function nS(t,e,n,r,i,s,o,l,u){if(tS.apply(this,arguments),po){if(po){var c=Cl;po=!1,Cl=null}else throw Error(j(198));Rl||(Rl=!0,kh=c)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(Ii(t)!==t)throw Error(j(188))}function rS(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bm(i),t;if(s===r)return bm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function sv(t){return t=rS(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=Mt.unstable_scheduleCallback,Mm=Mt.unstable_cancelCallback,iS=Mt.unstable_shouldYield,sS=Mt.unstable_requestPaint,Le=Mt.unstable_now,oS=Mt.unstable_getCurrentPriorityLevel,Gd=Mt.unstable_ImmediatePriority,lv=Mt.unstable_UserBlockingPriority,Pl=Mt.unstable_NormalPriority,aS=Mt.unstable_LowPriority,uv=Mt.unstable_IdlePriority,vu=null,pn=null;function lS(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:hS,uS=Math.log,cS=Math.LN2;function hS(t){return t>>>=0,t===0?32:31-(uS(t)/cS|0)|0}var La=64,ba=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=io(l):(s&=o,s!==0&&(r=io(s)))}else o=n&~i,o!==0?r=io(o):s!==0&&(r=io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=dS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dv,Yd,fv,pv,mv,xh=!1,Ma=[],mr=null,gr=null,yr=null,Do=new Map,Oo=new Map,or=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=aa(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gS(t,e,n,r,i){switch(e){case"focusin":return mr=Qs(mr,t,e,n,r,i),!0;case"dragenter":return gr=Qs(gr,t,e,n,r,i),!0;case"mouseover":return yr=Qs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,Qs(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,Qs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function gv(t){var e=ti(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=iv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=aa(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){sl(t)&&n.delete(e)}function yS(){xh=!1,mr!==null&&sl(mr)&&(mr=null),gr!==null&&sl(gr)&&(gr=null),yr!==null&&sl(yr)&&(yr=null),Do.forEach(Um),Oo.forEach(Um)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,xh||(xh=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,yS)))}function Vo(t){function e(i){return Ys(i,t)}if(0<Ma.length){Ys(Ma[0],t);for(var n=1;n<Ma.length;n++){var r=Ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Ys(mr,t),gr!==null&&Ys(gr,t),yr!==null&&Ys(yr,t),Do.forEach(e),Oo.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&or.shift()}var Zi=Gn.ReactCurrentBatchConfig,Nl=!0;function _S(t,e,n,r){var i=_e,s=Zi.transition;Zi.transition=null;try{_e=1,Xd(t,e,n,r)}finally{_e=i,Zi.transition=s}}function vS(t,e,n,r){var i=_e,s=Zi.transition;Zi.transition=null;try{_e=4,Xd(t,e,n,r)}finally{_e=i,Zi.transition=s}}function Xd(t,e,n,r){if(Nl){var i=Dh(t,e,n,r);if(i===null)Fc(t,e,r,xl,n),Fm(t,r);else if(gS(i,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<mS.indexOf(t)){for(;i!==null;){var s=aa(i);if(s!==null&&dv(s),s=Dh(t,e,n,r),s===null&&Fc(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fc(t,e,r,null,n)}}var xl=null;function Dh(t,e,n,r){if(xl=null,t=Kd(r),t=ti(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oS()){case Gd:return 1;case lv:return 4;case Pl:case aS:return 16;case uv:return 536870912;default:return 16}default:return 16}}var hr=null,Jd=null,ol=null;function _v(){if(ol)return ol;var t,e=Jd,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ol=i.slice(t,1<r?1-r:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function jm(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:jm,this.isPropagationStopped=jm,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=Ut(Es),oa=Ne({},Es,{view:0,detail:0}),wS=Ut(oa),kc,Nc,Xs,wu=Ne({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(kc=t.screenX-Xs.screenX,Nc=t.screenY-Xs.screenY):Nc=kc=0,Xs=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),Bm=Ut(wu),ES=Ne({},wu,{dataTransfer:0}),TS=Ut(ES),IS=Ne({},oa,{relatedTarget:0}),xc=Ut(IS),SS=Ne({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),AS=Ut(SS),CS=Ne({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RS=Ut(CS),PS=Ne({},Es,{data:0}),zm=Ut(PS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xS[t])?!!e[t]:!1}function ef(){return DS}var OS=Ne({},oa,{key:function(t){if(t.key){var e=kS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=Ut(OS),LS=Ne({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Ut(LS),bS=Ne({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),MS=Ut(bS),FS=Ne({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=Ut(FS),jS=Ne({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=Ut(jS),zS=[9,13,27,32],tf=jn&&"CompositionEvent"in window,mo=null;jn&&"documentMode"in document&&(mo=document.documentMode);var $S=jn&&"TextEvent"in window&&!mo,vv=jn&&(!tf||mo&&8<mo&&11>=mo),Hm=" ",Wm=!1;function wv(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function HS(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(Wm=!0,Hm);case"textInput":return t=e.data,t===Hm&&Wm?null:t;default:return null}}function WS(t,e){if(ji)return t==="compositionend"||!tf&&wv(t,e)?(t=_v(),ol=Jd=hr=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qS[t.type]:e==="textarea"}function Tv(t,e,n,r){Z_(r),e=Dl(e,"onChange"),0<e.length&&(n=new Zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Lo=null;function KS(t){Ov(t,0)}function Eu(t){var e=$i(t);if(q_(e))return t}function GS(t,e){if(t==="change")return e}var Iv=!1;if(jn){var Dc;if(jn){var Oc="oninput"in document;if(!Oc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Oc=typeof Km.oninput=="function"}Dc=Oc}else Dc=!1;Iv=Dc&&(!document.documentMode||9<document.documentMode)}function Gm(){go&&(go.detachEvent("onpropertychange",Sv),Lo=go=null)}function Sv(t){if(t.propertyName==="value"&&Eu(Lo)){var e=[];Tv(e,Lo,t,Kd(t)),rv(KS,e)}}function QS(t,e,n){t==="focusin"?(Gm(),go=e,Lo=n,go.attachEvent("onpropertychange",Sv)):t==="focusout"&&Gm()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(Lo)}function XS(t,e){if(t==="click")return Eu(e)}function JS(t,e){if(t==="input"||t==="change")return Eu(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:ZS;function bo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eA(t){var e=Cv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Av(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ym(n,s);var o=Ym(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tA=jn&&"documentMode"in document&&11>=document.documentMode,Bi=null,Oh=null,yo=null,Vh=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||Bi==null||Bi!==Al(r)||(r=Bi,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&bo(yo,r)||(yo=r,r=Dl(Oh,"onSelect"),0<r.length&&(e=new Zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Vc={},Rv={};jn&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Tu(t){if(Vc[t])return Vc[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return Vc[t]=e[n];return t}var Pv=Tu("animationend"),kv=Tu("animationiteration"),Nv=Tu("animationstart"),xv=Tu("transitionend"),Dv=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Dv.set(t,e),Ti(e,[t])}for(var Lc=0;Lc<Jm.length;Lc++){var bc=Jm[Lc],nA=bc.toLowerCase(),rA=bc[0].toUpperCase()+bc.slice(1);Mr(nA,"on"+rA)}Mr(Pv,"onAnimationEnd");Mr(kv,"onAnimationIteration");Mr(Nv,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(xv,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iA=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nS(r,e,void 0,t),t.currentTarget=null}function Ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}}}if(Rl)throw t=kh,Rl=!1,kh=null,t}function Ie(t,e){var n=e[Uh];n===void 0&&(n=e[Uh]=new Set);var r=t+"__bubble";n.has(r)||(Vv(e,t,2,!1),n.add(r))}function Mc(t,e,n){var r=0;e&&(r|=4),Vv(n,t,r,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[ja]){t[ja]=!0,B_.forEach(function(n){n!=="selectionchange"&&(iA.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,Mc("selectionchange",!1,e))}}function Vv(t,e,n,r){switch(yv(e)){case 1:var i=_S;break;case 4:i=vS;break;default:i=Xd}n=i.bind(null,e,n,t),i=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rv(function(){var c=s,d=Kd(n),p=[];e:{var m=Dv.get(t);if(m!==void 0){var I=Zd,N=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":I=VS;break;case"focusin":N="focus",I=xc;break;case"focusout":N="blur",I=xc;break;case"beforeblur":case"afterblur":I=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=TS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=MS;break;case Pv:case kv:case Nv:I=AS;break;case xv:I=US;break;case"scroll":I=wS;break;case"wheel":I=BS;break;case"copy":case"cut":case"paste":I=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=$m}var k=(e&4)!==0,P=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,S;_!==null;){S=_;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,w!==null&&(V=xo(_,w),V!=null&&k.push(Fo(_,V,S)))),P)break;_=_.return}0<k.length&&(m=new I(m,N,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Ch&&(N=n.relatedTarget||n.fromElement)&&(ti(N)||N[Bn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(N=n.relatedTarget||n.toElement,I=c,N=N?ti(N):null,N!==null&&(P=Ii(N),N!==P||N.tag!==5&&N.tag!==6)&&(N=null)):(I=null,N=c),I!==N)){if(k=Bm,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=$m,V="onPointerLeave",w="onPointerEnter",_="pointer"),P=I==null?m:$i(I),S=N==null?m:$i(N),m=new k(V,_+"leave",I,n,d),m.target=P,m.relatedTarget=S,V=null,ti(d)===c&&(k=new k(w,_+"enter",N,n,d),k.target=S,k.relatedTarget=P,V=k),P=V,I&&N)t:{for(k=I,w=N,_=0,S=k;S;S=Oi(S))_++;for(S=0,V=w;V;V=Oi(V))S++;for(;0<_-S;)k=Oi(k),_--;for(;0<S-_;)w=Oi(w),S--;for(;_--;){if(k===w||w!==null&&k===w.alternate)break t;k=Oi(k),w=Oi(w)}k=null}else k=null;I!==null&&eg(p,m,I,k,!1),N!==null&&P!==null&&eg(p,P,N,k,!0)}}e:{if(m=c?$i(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=GS;else if(qm(m))if(Iv)M=JS;else{M=YS;var U=QS}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=XS);if(M&&(M=M(t,c))){Tv(p,M,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Eh(m,"number",m.value)}switch(U=c?$i(c):window,t){case"focusin":(qm(U)||U.contentEditable==="true")&&(Bi=U,Oh=c,yo=null);break;case"focusout":yo=Oh=Bi=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Xm(p,n,d);break;case"selectionchange":if(tA)break;case"keydown":case"keyup":Xm(p,n,d)}var v;if(tf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ji?wv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(vv&&n.locale!=="ko"&&(ji||y!=="onCompositionStart"?y==="onCompositionEnd"&&ji&&(v=_v()):(hr=d,Jd="value"in hr?hr.value:hr.textContent,ji=!0)),U=Dl(c,y),0<U.length&&(y=new zm(y,t,null,n,d),p.push({event:y,listeners:U}),v?y.data=v:(v=Ev(n),v!==null&&(y.data=v)))),(v=$S?HS(t,n):WS(t,n))&&(c=Dl(c,"onBeforeInput"),0<c.length&&(d=new zm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}Ov(p,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xo(t,n),s!=null&&r.unshift(Fo(t,s,i)),s=xo(t,e),s!=null&&r.push(Fo(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=xo(n,s),u!=null&&o.unshift(Fo(n,u,l))):i||(u=xo(n,s),u!=null&&o.push(Fo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sA=/\r\n?/g,oA=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(sA,`
`).replace(oA,"")}function Ba(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(j(425))}function Ol(){}var Lh=null,bh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,lA=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(uA)}:Fh;function uA(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ts,Uo="__reactProps$"+Ts,Bn="__reactContainer$"+Ts,Uh="__reactEvents$"+Ts,cA="__reactListeners$"+Ts,hA="__reactHandles$"+Ts;function ti(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[fn])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[fn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Iu(t){return t[Uo]||null}var jh=[],Hi=-1;function Fr(t){return{current:t}}function Ae(t){0>Hi||(t.current=jh[Hi],jh[Hi]=null,Hi--)}function Ee(t,e){Hi++,jh[Hi]=t.current,t.current=e}var kr={},ht=Fr(kr),At=Fr(!1),ci=kr;function ls(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Vl(){Ae(At),Ae(ht)}function ig(t,e,n){if(ht.current!==kr)throw Error(j(168));Ee(ht,e),Ee(At,n)}function Lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Q0(t)||"Unknown",i));return Ne({},n,r)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,ci=ht.current,Ee(ht,t),Ee(At,At.current),!0}function sg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Lv(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,Ae(At),Ae(ht),Ee(ht,t)):Ae(At),Ee(At,n)}var Dn=null,Su=!1,jc=!1;function bv(t){Dn===null?Dn=[t]:Dn.push(t)}function dA(t){Su=!0,bv(t)}function Ur(){if(!jc&&Dn!==null){jc=!0;var t=0,e=_e;try{var n=Dn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Su=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),av(Gd,Ur),i}finally{_e=e,jc=!1}}return null}var Wi=[],qi=0,bl=null,Ml=0,jt=[],Bt=0,hi=null,Vn=1,Ln="";function Jr(t,e){Wi[qi++]=Ml,Wi[qi++]=bl,bl=t,Ml=e}function Mv(t,e,n){jt[Bt++]=Vn,jt[Bt++]=Ln,jt[Bt++]=hi,hi=t;var r=Vn;t=Ln;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-tn(e)+i|n<<i|r,Ln=s+t}else Vn=1<<s|n<<i|r,Ln=t}function rf(t){t.return!==null&&(Jr(t,1),Mv(t,1,0))}function sf(t){for(;t===bl;)bl=Wi[--qi],Wi[qi]=null,Ml=Wi[--qi],Wi[qi]=null;for(;t===hi;)hi=jt[--Bt],jt[Bt]=null,Ln=jt[--Bt],jt[Bt]=null,Vn=jt[--Bt],jt[Bt]=null}var Lt=null,Ot=null,Ce=!1,Zt=null;function Fv(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:Vn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Ot=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zh(t){if(Ce){var e=Ot;if(e){var n=e;if(!og(t,e)){if(Bh(t))throw Error(j(418));e=_r(n.nextSibling);var r=Lt;e&&og(t,e)?Fv(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Lt=t)}}else{if(Bh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ce=!1,Lt=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function za(t){if(t!==Lt)return!1;if(!Ce)return ag(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=Ot)){if(Bh(t))throw Uv(),Error(j(418));for(;e;)Fv(t,e),e=_r(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Lt?_r(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=Ot;t;)t=_r(t.nextSibling)}function us(){Ot=Lt=null,Ce=!1}function of(t){Zt===null?Zt=[t]:Zt.push(t)}var fA=Gn.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function jv(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=Tr(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,S,V){return _===null||_.tag!==6?(_=Kc(S,w.mode,V),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,V){var M=S.type;return M===Ui?d(w,_,S.props.children,V,S.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ir&&lg(M)===_.type)?(V=i(_,S.props),V.ref=Js(w,_,S),V.return=w,V):(V=pl(S.type,S.key,S.props,null,w.mode,V),V.ref=Js(w,_,S),V.return=w,V)}function c(w,_,S,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Gc(S,w.mode,V),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function d(w,_,S,V,M){return _===null||_.tag!==7?(_=li(S,w.mode,V,M),_.return=w,_):(_=i(_,S),_.return=w,_)}function p(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Kc(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Da:return S=pl(_.type,_.key,_.props,null,w.mode,S),S.ref=Js(w,null,_),S.return=w,S;case Fi:return _=Gc(_,w.mode,S),_.return=w,_;case ir:var V=_._init;return p(w,V(_._payload),S)}if(ro(_)||Ks(_))return _=li(_,w.mode,S,null),_.return=w,_;$a(w,_)}return null}function m(w,_,S,V){var M=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(w,_,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:return S.key===M?u(w,_,S,V):null;case Fi:return S.key===M?c(w,_,S,V):null;case ir:return M=S._init,m(w,_,M(S._payload),V)}if(ro(S)||Ks(S))return M!==null?null:d(w,_,S,V,null);$a(w,S)}return null}function I(w,_,S,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(S)||null,l(_,w,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Da:return w=w.get(V.key===null?S:V.key)||null,u(_,w,V,M);case Fi:return w=w.get(V.key===null?S:V.key)||null,c(_,w,V,M);case ir:var U=V._init;return I(w,_,S,U(V._payload),M)}if(ro(V)||Ks(V))return w=w.get(S)||null,d(_,w,V,M,null);$a(_,V)}return null}function N(w,_,S,V){for(var M=null,U=null,v=_,y=_=0,E=null;v!==null&&y<S.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var A=m(w,v,S[y],V);if(A===null){v===null&&(v=E);break}t&&v&&A.alternate===null&&e(w,v),_=s(A,_,y),U===null?M=A:U.sibling=A,U=A,v=E}if(y===S.length)return n(w,v),Ce&&Jr(w,y),M;if(v===null){for(;y<S.length;y++)v=p(w,S[y],V),v!==null&&(_=s(v,_,y),U===null?M=v:U.sibling=v,U=v);return Ce&&Jr(w,y),M}for(v=r(w,v);y<S.length;y++)E=I(v,w,y,S[y],V),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),U===null?M=E:U.sibling=E,U=E);return t&&v.forEach(function(C){return e(w,C)}),Ce&&Jr(w,y),M}function k(w,_,S,V){var M=Ks(S);if(typeof M!="function")throw Error(j(150));if(S=M.call(S),S==null)throw Error(j(151));for(var U=M=null,v=_,y=_=0,E=null,A=S.next();v!==null&&!A.done;y++,A=S.next()){v.index>y?(E=v,v=null):E=v.sibling;var C=m(w,v,A.value,V);if(C===null){v===null&&(v=E);break}t&&v&&C.alternate===null&&e(w,v),_=s(C,_,y),U===null?M=C:U.sibling=C,U=C,v=E}if(A.done)return n(w,v),Ce&&Jr(w,y),M;if(v===null){for(;!A.done;y++,A=S.next())A=p(w,A.value,V),A!==null&&(_=s(A,_,y),U===null?M=A:U.sibling=A,U=A);return Ce&&Jr(w,y),M}for(v=r(w,v);!A.done;y++,A=S.next())A=I(v,w,y,A.value,V),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?y:A.key),_=s(A,_,y),U===null?M=A:U.sibling=A,U=A);return t&&v.forEach(function(x){return e(w,x)}),Ce&&Jr(w,y),M}function P(w,_,S,V){if(typeof S=="object"&&S!==null&&S.type===Ui&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Da:e:{for(var M=S.key,U=_;U!==null;){if(U.key===M){if(M=S.type,M===Ui){if(U.tag===7){n(w,U.sibling),_=i(U,S.props.children),_.return=w,w=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ir&&lg(M)===U.type){n(w,U.sibling),_=i(U,S.props),_.ref=Js(w,U,S),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}S.type===Ui?(_=li(S.props.children,w.mode,V,S.key),_.return=w,w=_):(V=pl(S.type,S.key,S.props,null,w.mode,V),V.ref=Js(w,_,S),V.return=w,w=V)}return o(w);case Fi:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Gc(S,w.mode,V),_.return=w,w=_}return o(w);case ir:return U=S._init,P(w,_,U(S._payload),V)}if(ro(S))return N(w,_,S,V);if(Ks(S))return k(w,_,S,V);$a(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=Kc(S,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return P}var cs=jv(!0),Bv=jv(!1),Fl=Fr(null),Ul=null,Ki=null,af=null;function lf(){af=Ki=Ul=null}function uf(t){var e=Fl.current;Ae(Fl),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function es(t,e){Ul=t,af=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(Ul===null)throw Error(j(308));Ki=t,Ul.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var ni=null;function cf(t){ni===null?ni=[t]:ni.push(t)}function zv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,k=l;switch(m=e,I=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){p=N.call(I,p,m);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,m=typeof N=="function"?N.call(I,p,m):N,m==null)break e;p=Ne({},p,m);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=p}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var la={},mn=Fr(la),jo=Fr(la),Bo=Fr(la);function ri(t){if(t===la)throw Error(j(174));return t}function df(t,e){switch(Ee(Bo,e),Ee(jo,t),Ee(mn,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}Ae(mn),Ee(mn,e)}function hs(){Ae(mn),Ae(jo),Ae(Bo)}function Hv(t){ri(Bo.current);var e=ri(mn.current),n=Ih(e,t.type);e!==n&&(Ee(jo,t),Ee(mn,n))}function ff(t){jo.current===t&&(Ae(mn),Ae(jo))}var Re=Fr(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function pf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ul=Gn.ReactCurrentDispatcher,zc=Gn.ReactCurrentBatchConfig,di=0,ke=null,Be=null,Ye=null,zl=!1,_o=!1,zo=0,pA=0;function st(){throw Error(j(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,i,s){if(di=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?_A:vA,t=n(r,i),_o){s=0;do{if(_o=!1,zo=0,25<=s)throw Error(j(301));s+=1,Ye=Be=null,e.updateQueue=null,ul.current=wA,t=n(r,i)}while(_o)}if(ul.current=$l,e=Be!==null&&Be.next!==null,di=0,Ye=Be=ke=null,zl=!1,e)throw Error(j(300));return t}function yf(){var t=zo!==0;return zo=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ke.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Kt(){if(Be===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ye===null?ke.memoizedState:Ye.next;if(e!==null)Ye=e,Be=t;else{if(t===null)throw Error(j(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ye===null?ke.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function $o(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Kt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((di&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ke.lanes|=d,fi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Kt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Wv(){}function qv(t,e){var n=ke,r=Kt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,_f(Qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Ho(9,Gv.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(j(349));di&30||Kv(n,e,i)}return i}function Kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,r){e.value=n,e.getSnapshot=r,Yv(e)&&Xv(t)}function Qv(t,e,n){return n(function(){Yv(e)&&Xv(t)})}function Yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function Xv(t){var e=zn(t,1);e!==null&&nn(e,t,1,-1)}function hg(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=yA.bind(null,ke,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jv(){return Kt().memoizedState}function cl(t,e,n,r){var i=hn();ke.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function Au(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&mf(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function dg(t,e){return cl(8390656,8,t,e)}function _f(t,e){return Au(2048,8,t,e)}function Zv(t,e){return Au(4,2,t,e)}function ew(t,e){return Au(4,4,t,e)}function tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nw(t,e,n){return n=n!=null?n.concat([t]):null,Au(4,4,tw.bind(null,e,t),n)}function vf(){}function rw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iw(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sw(t,e,n){return di&21?(sn(n,e)||(n=cv(),ke.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function mA(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=zc.transition;zc.transition={};try{t(!1),e()}finally{_e=n,zc.transition=r}}function ow(){return Kt().memoizedState}function gA(t,e,n){var r=Er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aw(t))lw(e,n);else if(n=zv(t,e,n,r),n!==null){var i=mt();nn(n,t,r,i),uw(n,e,r)}}function yA(t,e,n){var r=Er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aw(t))lw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=zv(t,e,i,r),n!==null&&(i=mt(),nn(n,t,r,i),uw(n,e,r))}}function aw(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function lw(t,e){_o=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var $l={readContext:qt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},_A={readContext:qt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gA.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:vf,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=mA.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=hn();if(Ce){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Xe===null)throw Error(j(349));di&30||Kv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dg(Qv.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,Gv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Xe.identifierPrefix;if(Ce){var n=Ln,r=Vn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vA={readContext:qt,useCallback:rw,useContext:qt,useEffect:_f,useImperativeHandle:nw,useInsertionEffect:Zv,useLayoutEffect:ew,useMemo:iw,useReducer:$c,useRef:Jv,useState:function(){return $c($o)},useDebugValue:vf,useDeferredValue:function(t){var e=Kt();return sw(e,Be.memoizedState,t)},useTransition:function(){var t=$c($o)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:qv,useId:ow,unstable_isNewReconciler:!1},wA={readContext:qt,useCallback:rw,useContext:qt,useEffect:_f,useImperativeHandle:nw,useInsertionEffect:Zv,useLayoutEffect:ew,useMemo:iw,useReducer:Hc,useRef:Jv,useState:function(){return Hc($o)},useDebugValue:vf,useDeferredValue:function(t){var e=Kt();return Be===null?e.memoizedState=t:sw(e,Be.memoizedState,t)},useTransition:function(){var t=Hc($o)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:qv,useId:ow,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Er(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(nn(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Er(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(nn(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Er(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(nn(e,t,r,n),ll(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,r)||!bo(i,s):!0}function cw(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=qt(s):(i=Ct(e)?ci:ht.current,r=e.contextTypes,s=(r=r!=null)?ls(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function Wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qt(s):(s=Ct(e)?ci:ht.current,i.context=ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cu.enqueueReplaceState(i,i.state,null),jl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e){try{var n="",r=e;do n+=G0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EA=typeof WeakMap=="function"?WeakMap:Map;function hw(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,nd=r),qh(t,e)},n}function dw(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LA.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var TA=Gn.ReactCurrentOwner,St=!1;function pt(t,e,n,r){e.child=t===null?Bv(e,null,n,r):cs(e,t.child,n,r)}function _g(t,e,n,r,i){n=n.render;var s=e.ref;return es(e,i),r=gf(t,e,n,r,s,i),n=yf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Ce&&n&&rf(e),e.flags|=1,pt(t,e,r,i),e.child)}function vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fw(t,e,s,r,i)):(t=pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,r)&&t.ref===e.ref)return $n(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function fw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(bo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,$n(t,e,i)}return Kh(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Qi,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Qi,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Qi,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Qi,xt),xt|=r;return pt(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var s=Ct(n)?ci:ht.current;return s=ls(e,s),es(e,i),n=gf(t,e,n,r,s,i),r=yf(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$n(t,e,i)):(Ce&&r&&rf(e),e.flags|=1,pt(t,e,n,i),e.child)}function wg(t,e,n,r,i){if(Ct(n)){var s=!0;Ll(e)}else s=!1;if(es(e,i),e.stateNode===null)hl(t,e),cw(e,n,r),Wh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qt(c):(c=Ct(n)?ci:ht.current,c=ls(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&pg(e,o,r,c),sr=!1;var m=e.memoizedState;o.state=m,jl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||At.current||sr?(typeof d=="function"&&(Hh(e,n,d,r),u=e.memoizedState),(l=sr||fg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$v(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Xt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=Ct(n)?ci:ht.current,u=ls(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&pg(e,o,r,u),sr=!1,m=e.memoizedState,o.state=m,jl(e,r,o,i);var N=e.memoizedState;l!==p||m!==N||At.current||sr?(typeof I=="function"&&(Hh(e,n,I,r),N=e.memoizedState),(c=sr||fg(e,n,c,r,m,N,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Gh(t,e,n,r,s,i)}function Gh(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sg(e,n,!1),$n(t,e,s);r=e.stateNode,TA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,l,s)):pt(t,e,l,s),e.memoizedState=r.state,i&&sg(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),df(t,e.containerInfo)}function Eg(t,e,n,r,i){return us(),of(i),e.flags|=256,pt(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function yw(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Re,i&1),t===null)return zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ku(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return IA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&of(r),cs(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wc(Error(j(422))),Ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ku({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return Ha(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Wc(s,r,void 0),Ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),nn(r,t,i,-1))}return Cf(),r=Wc(Error(j(421))),Ha(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=_r(i.nextSibling),Lt=e,Ce=!0,Zt=null,t!==null&&(jt[Bt++]=Vn,jt[Bt++]=Ln,jt[Bt++]=hi,Vn=t.id,Ln=t.overflow,hi=e),e=wf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$h(t.return,e,n)}function qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _w(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SA(t,e,n){switch(e.tag){case 3:gw(e),us();break;case 5:Hv(e);break;case 1:Ct(e.type)&&Ll(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Fl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?yw(t,e,n):(Ee(Re,Re.current&1),t=$n(t,e,n),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return $n(t,e,n)}var vw,Xh,ww,Ew;vw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(mn.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ol)}Sh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AA(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Ct(e.type)&&Vl(),ot(e),null;case 3:return r=e.stateNode,hs(),Ae(At),Ae(ht),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(sd(Zt),Zt=null))),Xh(t,e),ot(e),null;case 5:ff(e);var i=ri(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ot(e),null}if(t=ri(mn.current),za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)Ie(so[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":xm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Om(r,s),Ie("invalid",r)}Sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",""+l]):ko.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Oa(r),Dm(r,s,!0);break;case"textarea":Oa(r),Vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Uo]=r,vw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)Ie(so[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":xm(t,r),i=vh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Om(t,r),i=Th(t,r),Ie("invalid",t);break;default:i=r}Sh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?J_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Y_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&No(t,u):typeof u=="number"&&No(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&$d(t,s,u,o))}switch(n){case"input":Oa(t),Dm(t,r,!1);break;case"textarea":Oa(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ri(Bo.current),ri(mn.current),za(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ot(e),null;case 13:if(Ae(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ot!==null&&e.mode&1&&!(e.flags&128))Uv(),us(),e.flags|=98560,s=!1;else if(s=za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[fn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else Zt!==null&&(sd(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?$e===0&&($e=3):Cf())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return hs(),Xh(t,e),t===null&&Mo(e.stateNode.containerInfo),ot(e),null;case 10:return uf(e.type._context),ot(e),null;case 17:return Ct(e.type)&&Vl(),ot(e),null;case 19:if(Ae(Re),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>fs&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ot(e),null}else 2*Le()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function CA(t,e){switch(sf(e),e.tag){case 1:return Ct(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),Ae(At),Ae(ht),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(Ae(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Re),null;case 4:return hs(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var Wa=!1,ut=!1,RA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Ig=!1;function PA(t,e){if(Lh=Nl,t=Cv(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bh={focusedElem:t,selectionRange:n},Nl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,P=N.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:Xt(e.type,k),P);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(V){Oe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return N=Ig,Ig=!1,N}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tw(t){var e=t.alternate;e!==null&&(t.alternate=null,Tw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Uo],delete e[Uh],delete e[cA],delete e[hA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Je=null,Jt=!1;function nr(t,e,n){for(n=n.child;n!==null;)Sw(t,e,n),n=n.sibling}function Sw(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:ut||Gi(n,e);case 6:var r=Je,i=Jt;Je=null,nr(t,e,n),Je=r,Jt=i,Je!==null&&(Jt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Jt?(t=Je,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),Vo(t)):Uc(Je,n.stateNode));break;case 4:r=Je,i=Jt,Je=n.stateNode.containerInfo,Jt=!0,nr(t,e,n),Je=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!ut&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,nr(t,e,n),ut=r):nr(t,e,n);break;default:nr(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RA),e.forEach(function(r){var i=MA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Jt=!1;break e;case 3:Je=l.stateNode.containerInfo,Jt=!0;break e;case 4:Je=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Je===null)throw Error(j(160));Sw(s,o,i),Je=null,Jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Aw(e,t),e=e.sibling}function Aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),cn(t),r&4){try{vo(3,t,t.return),Ru(3,t)}catch(k){Oe(t,t.return,k)}try{vo(5,t,t.return)}catch(k){Oe(t,t.return,k)}}break;case 1:Yt(e,t),cn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(Yt(e,t),cn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(k){Oe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&K_(i,s),Ah(l,o);var c=Ah(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?J_(i,p):d==="dangerouslySetInnerHTML"?Y_(i,p):d==="children"?No(i,p):$d(i,d,p,c)}switch(l){case"input":wh(i,s);break;case"textarea":G_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Yi(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?Yi(i,!!s.multiple,s.defaultValue,!0):Yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(k){Oe(t,t.return,k)}}break;case 6:if(Yt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Oe(t,t.return,k)}}break;case 3:if(Yt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(k){Oe(t,t.return,k)}break;case 4:Yt(e,t),cn(t);break;case 13:Yt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Le())),r&4&&Ag(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||d,Yt(e,t),ut=c):Yt(e,t),cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,I=m.child,m.tag){case 0:case 11:case 14:case 15:vo(4,m,m.return);break;case 1:Gi(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Gi(m,m.return);break;case 22:if(m.memoizedState!==null){Rg(p);continue}}I!==null?(I.return=m,q=I):Rg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=X_("display",o))}catch(k){Oe(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Oe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(e,t),cn(t),r&4&&Ag(t);break;case 21:break;default:Yt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=Sg(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);ed(t,l,o);break;default:throw Error(j(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kA(t,e,n){q=t,Cw(t)}function Cw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=Wa;var c=ut;if(Wa=o,(ut=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Pg(i):u!==null?(u.return=o,q=u):Pg(i);for(;s!==null;)q=s,Cw(s),s=s.sibling;q=i,Wa=l,ut=c}Cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Cg(t)}}function Cg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||e.flags&512&&Zh(e)}catch(m){Oe(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Rg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Pg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{Zh(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{Zh(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var NA=Math.ceil,Hl=Gn.ReactCurrentDispatcher,Ef=Gn.ReactCurrentOwner,Ht=Gn.ReactCurrentBatchConfig,pe=0,Xe=null,Me=null,tt=0,xt=0,Qi=Fr(0),$e=0,Wo=null,fi=0,Pu=0,Tf=0,wo=null,Tt=null,If=0,fs=1/0,Nn=null,Wl=!1,nd=null,wr=null,qa=!1,dr=null,ql=0,Eo=0,rd=null,dl=-1,fl=0;function mt(){return pe&6?Le():dl!==-1?dl:dl=Le()}function Er(t){return t.mode&1?pe&2&&tt!==0?tt&-tt:fA.transition!==null?(fl===0&&(fl=cv()),fl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:yv(t.type)),t):1}function nn(t,e,n,r){if(50<Eo)throw Eo=0,rd=null,Error(j(185));sa(t,n,r),(!(pe&2)||t!==Xe)&&(t===Xe&&(!(pe&2)&&(Pu|=n),$e===4&&ar(t,tt)),Rt(t,r),n===1&&pe===0&&!(e.mode&1)&&(fs=Le()+500,Su&&Ur()))}function Rt(t,e){var n=t.callbackNode;fS(t,e);var r=kl(t,t===Xe?tt:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?dA(kg.bind(null,t)):bv(kg.bind(null,t)),lA(function(){!(pe&6)&&Ur()}),n=null;else{switch(hv(r)){case 1:n=Gd;break;case 4:n=lv;break;case 16:n=Pl;break;case 536870912:n=uv;break;default:n=Pl}n=Vw(n,Rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rw(t,e){if(dl=-1,fl=0,pe&6)throw Error(j(327));var n=t.callbackNode;if(ts()&&t.callbackNode!==n)return null;var r=kl(t,t===Xe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var i=pe;pe|=2;var s=kw();(Xe!==t||tt!==e)&&(Nn=null,fs=Le()+500,ai(t,e));do try{OA();break}catch(l){Pw(t,l)}while(!0);lf(),Hl.current=s,pe=i,Me!==null?e=0:(Xe=null,tt=0,e=$e)}if(e!==0){if(e===2&&(i=Nh(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=Wo,ai(t,0),ar(t,r),Rt(t,Le()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!xA(i)&&(e=Kl(t,r),e===2&&(s=Nh(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=Wo,ai(t,0),ar(t,r),Rt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Zr(t,Tt,Nn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=If+500-Le(),10<e)){if(kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fh(Zr.bind(null,t,Tt,Nn),e);break}Zr(t,Tt,Nn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NA(r/1960))-r,10<r){t.timeoutHandle=Fh(Zr.bind(null,t,Tt,Nn),r);break}Zr(t,Tt,Nn);break;case 5:Zr(t,Tt,Nn);break;default:throw Error(j(329))}}}return Rt(t,Le()),t.callbackNode===n?Rw.bind(null,t):null}function id(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&sd(e)),t}function sd(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function xA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Tf,e&=~Pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function kg(t){if(pe&6)throw Error(j(327));ts();var e=kl(t,0);if(!(e&1))return Rt(t,Le()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=Nh(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=Wo,ai(t,0),ar(t,e),Rt(t,Le()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Tt,Nn),Rt(t,Le()),null}function Sf(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(fs=Le()+500,Su&&Ur())}}function pi(t){dr!==null&&dr.tag===0&&!(pe&6)&&ts();var e=pe;pe|=1;var n=Ht.transition,r=_e;try{if(Ht.transition=null,_e=1,t)return t()}finally{_e=r,Ht.transition=n,pe=e,!(pe&6)&&Ur()}}function Af(){xt=Qi.current,Ae(Qi)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aA(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:hs(),Ae(At),Ae(ht),pf();break;case 5:ff(r);break;case 4:hs();break;case 13:Ae(Re);break;case 19:Ae(Re);break;case 10:uf(r.type._context);break;case 22:case 23:Af()}n=n.return}if(Xe=t,Me=t=Tr(t.current,null),tt=xt=e,$e=0,Wo=null,Tf=Pu=fi=0,Tt=wo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function Pw(t,e){do{var n=Me;try{if(lf(),ul.current=$l,zl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(di=0,Ye=Be=ke=null,_o=!1,zo=0,Ef.current=null,n===null||n.return===null){$e=1,Wo=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=gg(o);if(I!==null){I.flags&=-257,yg(I,o,l,s,e),I.mode&1&&mg(s,c,e),e=I,u=c;var N=e.updateQueue;if(N===null){var k=new Set;k.add(u),e.updateQueue=k}else N.add(u);break e}else{if(!(e&1)){mg(s,c,e),Cf();break e}u=Error(j(426))}}else if(Ce&&l.mode&1){var P=gg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),yg(P,o,l,s,e),of(ds(u,l));break e}}s=u=ds(u,l),$e!==4&&($e=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=hw(s,u,e);ug(s,w);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(wr===null||!wr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=dw(s,l,e);ug(s,V);break e}}s=s.return}while(s!==null)}xw(n)}catch(M){e=M,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function kw(){var t=Hl.current;return Hl.current=$l,t===null?$l:t}function Cf(){($e===0||$e===3||$e===2)&&($e=4),Xe===null||!(fi&268435455)&&!(Pu&268435455)||ar(Xe,tt)}function Kl(t,e){var n=pe;pe|=2;var r=kw();(Xe!==t||tt!==e)&&(Nn=null,ai(t,e));do try{DA();break}catch(i){Pw(t,i)}while(!0);if(lf(),pe=n,Hl.current=r,Me!==null)throw Error(j(261));return Xe=null,tt=0,$e}function DA(){for(;Me!==null;)Nw(Me)}function OA(){for(;Me!==null&&!iS();)Nw(Me)}function Nw(t){var e=Ow(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?xw(t):Me=e,Ef.current=null}function xw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CA(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Me=null;return}}else if(n=AA(n,e,xt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);$e===0&&($e=5)}function Zr(t,e,n){var r=_e,i=Ht.transition;try{Ht.transition=null,_e=1,VA(t,e,n,r)}finally{Ht.transition=i,_e=r}return null}function VA(t,e,n,r){do ts();while(dr!==null);if(pe&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pS(t,s),t===Xe&&(Me=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Vw(Pl,function(){return ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=_e;_e=1;var l=pe;pe|=4,Ef.current=null,PA(t,n),Aw(n,t),eA(bh),Nl=!!Lh,bh=Lh=null,t.current=n,kA(n),sS(),pe=l,_e=o,Ht.transition=s}else t.current=n;if(qa&&(qa=!1,dr=t,ql=i),s=t.pendingLanes,s===0&&(wr=null),lS(n.stateNode),Rt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,t=nd,nd=null,t;return ql&1&&t.tag!==0&&ts(),s=t.pendingLanes,s&1?t===rd?Eo++:(Eo=0,rd=t):Eo=0,Ur(),null}function ts(){if(dr!==null){var t=hv(ql),e=Ht.transition,n=_e;try{if(Ht.transition=null,_e=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,ql=0,pe&6)throw Error(j(331));var i=pe;for(pe|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:vo(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,I=d.return;if(Tw(d),d===c){q=null;break}if(m!==null){m.return=I,q=m;break}q=I}}}var N=s.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,q=S;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ru(9,l)}}catch(M){Oe(l,l.return,M)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(pe=i,Ur(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(vu,t)}catch{}r=!0}return r}finally{_e=n,Ht.transition=e}}return!1}function Ng(t,e,n){e=ds(n,e),e=hw(t,e,1),t=vr(t,e,1),e=mt(),t!==null&&(sa(t,1,e),Rt(t,e))}function Oe(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=ds(n,t),t=dw(e,t,1),e=vr(e,t,1),t=mt(),e!==null&&(sa(e,1,t),Rt(e,t));break}}e=e.return}}function LA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(tt&n)===n&&($e===4||$e===3&&(tt&130023424)===tt&&500>Le()-If?ai(t,0):Tf|=n),Rt(t,e)}function Dw(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=mt();t=zn(t,e),t!==null&&(sa(t,e,n),Rt(t,n))}function bA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dw(t,n)}function MA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Dw(t,n)}var Ow;Ow=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,SA(t,e,n);St=!!(t.flags&131072)}else St=!1,Ce&&e.flags&1048576&&Mv(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=ls(e,ht.current);es(e,n),i=gf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(e),i.updater=Cu,e.stateNode=i,i._reactInternals=e,Wh(e,r,t,n),e=Gh(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&rf(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UA(r),t=Xt(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=_g(null,e,r,t,n);break e;case 14:e=vg(null,e,r,Xt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),wg(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$v(t,e),jl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(j(423)),e),e=Eg(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(j(424)),e),e=Eg(t,e,r,n,i);break e}else for(Ot=_r(e.stateNode.containerInfo.firstChild),Lt=e,Ce=!0,Zt=null,n=Bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=$n(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return Hv(e),t===null&&zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),mw(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&zh(e),null;case 13:return yw(t,e,n);case 4:return df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),_g(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Fl,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!At.current){e=$n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,es(e,n),i=qt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),vg(t,e,r,i,n);case 15:return fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),hl(t,e),e.tag=1,Ct(r)?(t=!0,Ll(e)):t=!1,es(e,n),cw(e,r,i),Wh(e,r,i,n),Gh(null,e,r,!0,t,n);case 19:return _w(t,e,n);case 22:return pw(t,e,n)}throw Error(j(156,e.tag))};function Vw(t,e){return av(t,e)}function FA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new FA(t,e,n,r)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UA(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===qd)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ui:return li(n.children,i,s,e);case Hd:o=8,i|=8;break;case mh:return t=$t(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=$t(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=$t(19,n,e,i),t.elementType=yh,t.lanes=s,t;case H_:return ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z_:o=10;break e;case $_:o=9;break e;case Wd:o=11;break e;case qd:o=14;break e;case ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function ku(t,e,n,r){return t=$t(22,t,r,e),t.elementType=H_,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,r,i,s,o,l,u){return t=new jA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function BA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lw(t){if(!t)return kr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Lv(t,n,e)}return e}function bw(t,e,n,r,i,s,o,l,u){return t=Pf(n,r,!0,t,i,s,o,l,u),t.context=Lw(null),n=t.current,r=mt(),i=Er(n),s=Fn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,sa(t,i,r),Rt(t,r),t}function Nu(t,e,n,r){var i=e.current,s=mt(),o=Er(i);return n=Lw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(nn(t,i,o,s),ll(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){xg(t,e),(t=t.alternate)&&xg(t,e)}function zA(){return null}var Mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}xu.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Nu(t,e,null,null)};xu.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){Nu(null,t,null,null)}),e[Bn]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&gv(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function $A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gl(o);s.call(c)}}var o=bw(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Bn]=o.current,Mo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Gl(u);l.call(c)}}var u=Pf(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=u,t[Bn]=u.current,Mo(t.nodeType===8?t.parentNode:t),pi(function(){Nu(e,u,n,r)}),u}function Ou(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gl(o);l.call(u)}}Nu(e,o,t,i)}else o=$A(n,e,t,i,r);return Gl(o)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(Qd(e,n|1),Rt(e,Le()),!(pe&6)&&(fs=Le()+500,Ur()))}break;case 13:pi(function(){var r=zn(t,1);if(r!==null){var i=mt();nn(r,t,1,i)}}),kf(t,1)}};Yd=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=mt();nn(e,t,134217728,n)}kf(t,134217728)}};fv=function(t){if(t.tag===13){var e=Er(t),n=zn(t,e);if(n!==null){var r=mt();nn(n,t,e,r)}kf(t,e)}};pv=function(){return _e};mv=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Rh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Iu(r);if(!i)throw Error(j(90));q_(r),wh(r,i)}}}break;case"textarea":G_(t,n);break;case"select":e=n.value,e!=null&&Yi(t,!!n.multiple,e,!1)}};tv=Sf;nv=pi;var HA={usingClientEntryPoint:!1,Events:[aa,$i,Iu,Z_,ev,Sf]},eo={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WA={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sv(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||zA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{vu=Ka.inject(WA),pn=Ka}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HA;Ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(j(200));return BA(t,e,null,n)};Ft.createRoot=function(t,e){if(!xf(t))throw Error(j(299));var n=!1,r="",i=Mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Mo(t.nodeType===8?t.parentNode:t),new Nf(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=sv(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return pi(t)};Ft.hydrate=function(t,e,n){if(!Du(e))throw Error(j(200));return Ou(null,t,e,!0,n)};Ft.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bw(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xu(e)};Ft.render=function(t,e,n){if(!Du(e))throw Error(j(200));return Ou(null,t,e,!1,n)};Ft.unmountComponentAtNode=function(t){if(!Du(t))throw Error(j(40));return t._reactRootContainer?(pi(function(){Ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Sf;Ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Du(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Ou(t,e,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function Fw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fw)}catch(t){console.error(t)}}Fw(),F_.exports=Ft;var qA=F_.exports,Og=qA;fh.createRoot=Og.createRoot,fh.hydrateRoot=Og.hydrateRoot;const Uw=O.createContext(void 0);function Vg(t){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=t==="auto"?e?"dark":"light":t;document.documentElement.setAttribute("data-theme",n)}const KA=({children:t})=>{const[e,n]=O.useState(()=>localStorage.getItem("theme")||"auto");O.useEffect(()=>{Vg(e),localStorage.setItem("theme",e)},[e]),O.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>{(localStorage.getItem("theme")||"auto")==="auto"&&Vg("auto")};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=O.useMemo(()=>({theme:e,setTheme:n}),[e]);return R.jsx(Uw.Provider,{value:r,children:t})};function GA(){const t=O.useContext(Uw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const jw=O.createContext(void 0),QA=({children:t})=>{const[e,n]=O.useState(()=>localStorage.getItem("layout")||"auto"),r=O.useMemo(()=>({layout:e,setLayout:i=>{localStorage.setItem("layout",i),n(i)}}),[e]);return R.jsx(jw.Provider,{value:r,children:t})};function Vu(){const t=O.useContext(jw);if(!t)throw new Error("useLayout must be used within LayoutProvider");return t}const YA=()=>{};var Lg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new JA;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const N=c<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZA=function(t){const e=Bw(t);return zw.encodeByteArray(e,!0)},Ql=function(t){return ZA(t).replace(/\./g,"")},$w=function(t){try{return zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=()=>eC().__FIREBASE_DEFAULTS__,nC=()=>{if(typeof process>"u"||typeof Lg>"u")return;const t=Lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$w(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return YA()||tC()||nC()||rC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hw=t=>{var e,n;return(n=(e=Lu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},iC=t=>{const e=Hw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ww=()=>{var t;return(t=Lu())==null?void 0:t.config},qw=t=>{var e;return(e=Lu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kw(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}const To={};function aC(){const t={prod:[],emulator:[]};for(const e of Object.keys(To))To[e]?t.emulator.push(e):t.prod.push(e);return t}function lC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let bg=!1;function Gw(t,e){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||To[t]===e||To[t]||bg)return;To[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=aC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{bg=!0,o()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=lC(r),I=n("text"),N=document.getElementById(I)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;l(S),d(P,k);const V=c();u(_,w),S.append(_,N,P,V),document.body.appendChild(S)}s?(N.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function cC(){var e;const t=(e=Lu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pC(){return!cC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Xw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function mC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function yC(t,e){return t.replace(_C,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _C=/\{\$([^}]+)}/g;function vC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mg(s)&&Mg(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wC(t,e){const n=new EC(t,e);return n.subscribe.bind(n)}class EC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qc),i.error===void 0&&(i.error=Qc),i.complete===void 0&&(i.complete=Qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,SC=2,AC=4*60*60*1e3,CC=.5;function Fg(t,e=IC,n=SC){const r=e*Math.pow(n,t),i=Math.round(CC*r*(Math.random()-.5)*2);return Math.min(AC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kC(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PC(t){return t===ei?void 0:t}function kC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const xC={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},DC=oe.INFO,OC={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},VC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=DC,this._logHandler=VC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const LC=(t,e)=>e.some(n=>t instanceof n);let Ug,jg;function bC(){return Ug||(Ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return jg||(jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jw=new WeakMap,od=new WeakMap,Zw=new WeakMap,Yc=new WeakMap,Df=new WeakMap;function FC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jw.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function UC(t){if(od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});od.set(t,e)}let ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jC(t){ad=t(ad)}function BC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xc(this),e,...n);return Zw.set(r,e.sort?e.sort():[e]),Ir(r)}:MC().includes(t)?function(...e){return t.apply(Xc(this),e),Ir(Jw.get(this))}:function(...e){return Ir(t.apply(Xc(this),e))}}function zC(t){return typeof t=="function"?BC(t):(t instanceof IDBTransaction&&UC(t),LC(t,bC())?new Proxy(t,ad):t)}function Ir(t){if(t instanceof IDBRequest)return FC(t);if(Yc.has(t))return Yc.get(t);const e=zC(t);return e!==t&&(Yc.set(t,e),Df.set(e,t)),e}const Xc=t=>Df.get(t);function eE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ir(o.result),u.oldVersion,u.newVersion,Ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const $C=["get","getKey","getAll","getAllKeys","count"],HC=["put","add","delete","clear"],Jc=new Map;function Bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$C.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Jc.set(e,s),s}jC(t=>({...t,get:(e,n,r)=>Bg(e,n)||t.get(e,n,r),has:(e,n)=>!!Bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",zg="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new bu("@firebase/app"),KC="@firebase/app-compat",GC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",e1="@firebase/database",t1="@firebase/data-connect",n1="@firebase/database-compat",r1="@firebase/functions",i1="@firebase/functions-compat",s1="@firebase/installations",o1="@firebase/installations-compat",a1="@firebase/messaging",l1="@firebase/messaging-compat",u1="@firebase/performance",c1="@firebase/performance-compat",h1="@firebase/remote-config",d1="@firebase/remote-config-compat",f1="@firebase/storage",p1="@firebase/storage-compat",m1="@firebase/firestore",g1="@firebase/ai",y1="@firebase/firestore-compat",_1="firebase",v1="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="[DEFAULT]",w1={[ld]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[GC]:"fire-analytics-compat",[XC]:"fire-app-check",[YC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[e1]:"fire-rtdb",[t1]:"fire-data-connect",[n1]:"fire-rtdb-compat",[r1]:"fire-fn",[i1]:"fire-fn-compat",[s1]:"fire-iid",[o1]:"fire-iid-compat",[a1]:"fire-fcm",[l1]:"fire-fcm-compat",[u1]:"fire-perf",[c1]:"fire-perf-compat",[h1]:"fire-rc",[d1]:"fire-rc-compat",[f1]:"fire-gcs",[p1]:"fire-gcs-compat",[m1]:"fire-fst",[y1]:"fire-fst-compat",[g1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map,E1=new Map,cd=new Map;function $g(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(cd.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,t);for(const n of Yl.values())$g(n,t);for(const n of E1.values())$g(n,t);return!0}function Ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new Si("app","Firebase",T1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=v1;function tE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ud,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=Ww()),!n)throw Sr.create("no-options");const s=Yl.get(i);if(s){if(Nr(n,s.options)&&Nr(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new NC(i);for(const u of cd.values())o.addComponent(u);const l=new I1(n,r,o);return Yl.set(i,l),l}function Of(t=ud){const e=Yl.get(t);if(!e&&t===ud&&Ww())return tE();if(!e)throw Sr.create("no-app",{appName:t});return e}function Wt(t,e,n){let r=w1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(o.join(" "));return}Tn(new on(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="firebase-heartbeat-database",A1=1,qo="firebase-heartbeat-store";let Zc=null;function nE(){return Zc||(Zc=eE(S1,A1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Zc}async function C1(t){try{const n=(await nE()).transaction(qo),r=await n.objectStore(qo).get(rE(t));return await n.done,r}catch(e){if(e instanceof an)Hn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Hg(t,e){try{const r=(await nE()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,rE(t)),await r.done}catch(n){if(n instanceof an)Hn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function rE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=1024,P1=30;class k1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new x1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>P1){const o=D1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wg(),{heartbeatsToSend:r,unsentEntries:i}=N1(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Hn.warn(n),""}}}function Wg(){return new Date().toISOString().substring(0,10)}function N1(t,e=R1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class x1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Xw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qg(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}function D1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){Tn(new on("platform-logger",e=>new WC(e),"PRIVATE")),Tn(new on("heartbeat",e=>new k1(e),"PRIVATE")),Wt(ld,zg,t),Wt(ld,zg,"esm2020"),Wt("fire-js","")}O1("");function iE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V1=iE,sE=new Si("auth","Firebase",iE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new bu("@firebase/auth");function L1(t,...e){Xl.logLevel<=oe.WARN&&Xl.warn(`Auth (${Ss}): ${t}`,...e)}function ml(t,...e){Xl.logLevel<=oe.ERROR&&Xl.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw Lf(t,...e)}function rn(t,...e){return Lf(t,...e)}function Vf(t,e,n){const r={...V1(),[e]:n};return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return Vf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),Vf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sE.create(t,...e)}function J(t,e,...n){if(!t)throw Lf(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function Wn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function M1(){return Kg()==="http:"||Kg()==="https:"}function Kg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M1()||Qw()||"connection"in navigator)?navigator.onLine:!0}function U1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=uC()||dC()}get(){return F1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],z1=new ca(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Br(t,e,n,r,i={}){return aE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ua({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return hC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Is(t.emulatorConfig.host)&&(c.credentials="include"),oE.fetch()(await lE(t,t.config.apiHost,n,l),c)})}async function aE(t,e,n){t._canInitEmulator=!1;const r={...j1,...e};try{const i=new H1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vf(t,d,c);Gt(t,d)}}catch(i){if(i instanceof an)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function ha(t,e,n,r,i={}){const s=await Br(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function lE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?bf(t.config,i):`${t.config.apiScheme}://${i}`;return B1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function $1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),z1.get())})}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function Gg(t){return t!==void 0&&t.enterprise!==void 0}class W1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function q1(t,e){return Br(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function Jl(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function G1(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Mf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(eh(i.auth_time)),issuedAtTime:Io(eh(i.iat)),expirationTime:Io(eh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eh(t){return Number(t)*1e3}function Mf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=$w(n);return i?JSON.parse(i):(ml("Failed to decode base64 JWT payload"),null)}catch(i){return ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qg(t){const e=Mf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&Q1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Q1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ko(t,Jl(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?uE(i.providerUserInfo):[],o=J1(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function X1(t){const e=qe(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function J1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(t,e){const n=await aE(t,{},async()=>{const r=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await lE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Is(t.emulatorConfig.host)&&(u.credentials="include"),oE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eR(t,e){return Br(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Z1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ns;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return G1(this,e)}reload(){return X1(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await Ko(this,K1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:N,stsTokenManager:k}=n;J(p&&k,e,"internal-error");const P=ns.fromJSON(this.name,k);J(typeof p=="string",e,"internal-error"),rr(r,e.name),rr(i,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof I=="boolean",e,"internal-error"),rr(s,e.name),rr(o,e.name),rr(l,e.name),rr(u,e.name),rr(c,e.name),rr(d,e.name);const w=new en({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return N&&Array.isArray(N)&&(w.providerData=N.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ns;i.updateFromServerResponse(n);const s=new en({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ns;l.updateFromIdToken(r);const u=new en({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;function Mn(t){Wn(t instanceof Function,"Expected a class definition");let e=Yg.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Xg=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gl(this.userKey,i.apiKey,s),this.fullPersistenceKey=gl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jl(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(Mn(Xg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mn(Xg);const o=gl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Jl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await en._fromGetAccountInfoResponse(e,m,d)}else p=en._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new rs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gE(e))return"Blackberry";if(yE(e))return"Webos";if(dE(e))return"Safari";if((e.includes("chrome/")||fE(e))&&!e.includes("edge/"))return"Chrome";if(mE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hE(t=dt()){return/firefox\//i.test(t)}function dE(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fE(t=dt()){return/crios\//i.test(t)}function pE(t=dt()){return/iemobile/i.test(t)}function mE(t=dt()){return/android/i.test(t)}function gE(t=dt()){return/blackberry/i.test(t)}function yE(t=dt()){return/webos/i.test(t)}function Ff(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tR(t=dt()){var e;return Ff(t)&&!!((e=window.navigator)!=null&&e.standalone)}function nR(){return fC()&&document.documentMode===10}function _E(t=dt()){return Ff(t)||mE(t)||yE(t)||gE(t)||/windows phone/i.test(t)||pE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e=[]){let n;switch(t){case"Browser":n=Jg(dt());break;case"Worker":n=`${Jg(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e={}){return Br(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=6;class oR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new rR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jl(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Un(this));const n=e?qe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iR(this),n=new oR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&L1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zr(t){return qe(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lR(t){Mu=t}function wE(t){return Mu.loadJS(t)}function uR(){return Mu.recaptchaEnterpriseScript}function cR(){return Mu.gapiScript}function hR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dR{constructor(){this.enterprise=new fR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class fR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const pR="recaptcha-enterprise",EE="NO_RECAPTCHA";class mR{constructor(e){this.type=pR,this.auth=zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{q1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new W1(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Gg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(EE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Gg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=uR();u.length!==0&&(u+=l),wE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ey(t,e,n,r=!1,i=!1){const s=new mR(t);let o;if(i)o=EE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ey(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ey(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){const n=Ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nr(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function yR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _R(t,e,n){const r=zr(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=TE(e),{host:o,port:l}=vR(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Nr(c,r.config.emulator)&&Nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Is(o)?(Kw(`${s}//${o}${u}`),Gw("Auth",!0)):wR()}function TE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vR(t){const e=TE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ty(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ty(o)}}}function ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function ER(t,e){return Br(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){return ha(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){return ha(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function SR(t,e){return ha(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Uf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,n,"signInWithPassword",TR);case"emailLink":return IR(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,r,"signUpPassword",ER);case"emailLink":return SR(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return ha(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="http://localhost";class mi extends Uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:AR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RR(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class jf{constructor(e){const n=oo(ao(e)),r=n.apiKey??null,i=n.oobCode??null,s=CR(n.mode??null);J(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RR(e);try{return new jf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jf.parseLink(n);return J(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends da{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mi._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends da{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends da{constructor(){super("twitter.com")}static credential(e,n){return mi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){return ha(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await en._fromIdTokenResponse(e,r,i),o=ny(r);return new gi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ny(r);return new gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends an{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eu(e,n,r,i)}}function IE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eu._fromErrorAndOperation(t,s,e,r):s})}async function kR(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const s=await Ko(t,IE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Mf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e,n=!1){if(Dt(t.app))return Promise.reject(Un(t));const r="signIn",i=await IE(t,r,e),s=await gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xR(t,e){return SE(zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t){const e=zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DR(t,e,n){if(Dt(t.app))return Promise.reject(Un(t));const r=zr(t),o=await fd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&AE(t),u}),l=await gi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OR(t,e,n){return Dt(t.app)?Promise.reject(Un(t)):xR(qe(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&AE(t),r})}function VR(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function LR(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function bR(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function MR(t){return qe(t).signOut()}const tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tu,"1"),this.storage.removeItem(tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=1e3,UR=10;class RE extends CE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const jR=RE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends CE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}PE.type="SESSION";const kE=PE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await BR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=zf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function $R(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function HR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qR(){return NE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebaseLocalStorageDb",KR=1,nu="firebaseLocalStorage",DE="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uu(t,e){return t.transaction([nu],e?"readwrite":"readonly").objectStore(nu)}function GR(){const t=indexedDB.deleteDatabase(xE);return new fa(t).toPromise()}function pd(){const t=indexedDB.open(xE,KR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nu,{keyPath:DE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nu)?e(r):(r.close(),await GR(),e(await pd()))})})}async function ry(t,e,n){const r=Uu(t,!0).put({[DE]:e,value:n});return new fa(r).toPromise()}async function QR(t,e){const n=Uu(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function iy(t,e){const n=Uu(t,!0).delete(e);return new fa(n).toPromise()}const YR=800,XR=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return NE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fu._getInstance(qR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HR(),!this.activeServiceWorker)return;this.sender=new zR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await ry(e,tu,"1"),await iy(e,tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ry(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uu(i,!1).getAll();return new fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const JR=OE;new ca(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){return e?Mn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends Uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZR(t){return SE(t.auth,new $f(t),t.bypassAuthState)}function eP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),NR(n,new $f(t),t.bypassAuthState)}async function tP(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),kR(n,new $f(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZR;case"linkViaPopup":case"linkViaRedirect":return tP;case"reauthViaPopup":case"reauthViaRedirect":return eP;default:Gt(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new ca(2e3,1e4);async function rP(t,e,n){if(Dt(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=zr(t);b1(t,e,Bf);const i=VE(r,n);return new ii(r,"signInViaPopup",e,i).executeNotNull()}class ii extends LE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nP.get())};e()}}ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="pendingRedirect",yl=new Map;class sP extends LE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=uP(e),r=lP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aP(t,e){yl.set(t._key(),e)}function lP(t){return Mn(t._redirectPersistence)}function uP(t){return gl(iP,t.config.apiKey,t.name)}async function cP(t,e,n=!1){if(Dt(t.app))return Promise.reject(Un(t));const r=zr(t),i=VE(r,e),o=await new sP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=10*60*1e3;class dP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(_P(n))return}catch{}Gt(t,"unauthorized-domain")}function _P(t){const e=hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gP.test(n))return!1;if(mP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new ca(3e4,6e4);function oy(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var i,s,o;function r(){oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oy(),n(rn(t,"network-request-failed"))},timeout:vP.get()})}if((s=(i=gn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const l=hR("iframefcb");return gn()[l]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},wE(`${cR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw _l=null,e})}let _l=null;function EP(t){return _l=_l||wP(t),_l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new ca(5e3,15e3),IP="__/auth/iframe",SP="emulator/auth/iframe",AP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RP(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bf(e,SP):`https://${t.config.authDomain}/${IP}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},i=CP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ua(r).slice(1)}`}async function PP(t){const e=await EP(t),n=gn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:RP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},TP.get());function u(){gn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,xP=600,DP="_blank",OP="http://localhost";class ay{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VP(t,e,n,r=NP,i=xP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...kP,width:r.toString(),height:i.toString(),top:s,left:o},c=dt().toLowerCase();n&&(l=fE(c)?DP:n),hE(c)&&(e=e||OP,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,N])=>`${m}${I}=${N},`,"");if(tR(c)&&l!=="_self")return LP(e||"",l),new ay(null);const p=window.open(e||"",l,d);J(p,t,"popup-blocked");try{p.focus()}catch{}return new ay(p)}function LP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="__/auth/handler",MP="emulator/auth/handler",FP=encodeURIComponent("fac");async function ly(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:i};if(e instanceof Bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof da){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${FP}=${encodeURIComponent(u)}`:"";return`${UP(t)}?${ua(l).slice(1)}${c}`}function UP({config:t}){return t.emulator?bf(t,MP):`https://${t.authDomain}/${bP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="webStorageSupport";class jP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kE,this._completeRedirectFn=cP,this._overrideRedirectResult=aP}async _openPopup(e,n,r,i){var o;Wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ly(e,n,r,hd(),i);return VP(e,s,zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ly(e,n,r,hd(),i);return $R(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PP(e),r=new dP(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(th,{type:th},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[th];s!==void 0&&n(!!s),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _E()||dE()||Ff()}}const BP=jP;var uy="@firebase/auth",cy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HP(t){Tn(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vE(t)},c=new aR(r,i,s,u);return yR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new on("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(r=>new zP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(uy,cy,$P(t)),Wt(uy,cy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=5*60,qP=qw("authIdTokenMaxAge")||WP;let hy=null;const KP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qP)return;const i=n==null?void 0:n.token;hy!==i&&(hy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GP(t=Of()){const e=Ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gR(t,{popupRedirectResolver:BP,persistence:[JR,jR,kE]}),r=qw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=KP(s.toString());LR(n,o,()=>o(n.currentUser)),VR(n,l=>o(l))}}const i=Hw("auth");return i&&_R(n,`http://${i}`),n}function QP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}lR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HP("Browser");var dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,ME;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(A,C,x){for(var T=Array(arguments.length-2),re=2;re<arguments.length;re++)T[re-2]=arguments[re];return y.prototype[C].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)A[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;C<16;++C)A[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],C=v.g[2];let x=v.g[3],T;T=y+(x^E&(C^x))+A[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=x+(C^y&(E^C))+A[1]+3905402710&4294967295,x=y+(T<<12&4294967295|T>>>20),T=C+(E^x&(y^E))+A[2]+606105819&4294967295,C=x+(T<<17&4294967295|T>>>15),T=E+(y^C&(x^y))+A[3]+3250441966&4294967295,E=C+(T<<22&4294967295|T>>>10),T=y+(x^E&(C^x))+A[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=x+(C^y&(E^C))+A[5]+1200080426&4294967295,x=y+(T<<12&4294967295|T>>>20),T=C+(E^x&(y^E))+A[6]+2821735955&4294967295,C=x+(T<<17&4294967295|T>>>15),T=E+(y^C&(x^y))+A[7]+4249261313&4294967295,E=C+(T<<22&4294967295|T>>>10),T=y+(x^E&(C^x))+A[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=x+(C^y&(E^C))+A[9]+2336552879&4294967295,x=y+(T<<12&4294967295|T>>>20),T=C+(E^x&(y^E))+A[10]+4294925233&4294967295,C=x+(T<<17&4294967295|T>>>15),T=E+(y^C&(x^y))+A[11]+2304563134&4294967295,E=C+(T<<22&4294967295|T>>>10),T=y+(x^E&(C^x))+A[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=x+(C^y&(E^C))+A[13]+4254626195&4294967295,x=y+(T<<12&4294967295|T>>>20),T=C+(E^x&(y^E))+A[14]+2792965006&4294967295,C=x+(T<<17&4294967295|T>>>15),T=E+(y^C&(x^y))+A[15]+1236535329&4294967295,E=C+(T<<22&4294967295|T>>>10),T=y+(C^x&(E^C))+A[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=x+(E^C&(y^E))+A[6]+3225465664&4294967295,x=y+(T<<9&4294967295|T>>>23),T=C+(y^E&(x^y))+A[11]+643717713&4294967295,C=x+(T<<14&4294967295|T>>>18),T=E+(x^y&(C^x))+A[0]+3921069994&4294967295,E=C+(T<<20&4294967295|T>>>12),T=y+(C^x&(E^C))+A[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=x+(E^C&(y^E))+A[10]+38016083&4294967295,x=y+(T<<9&4294967295|T>>>23),T=C+(y^E&(x^y))+A[15]+3634488961&4294967295,C=x+(T<<14&4294967295|T>>>18),T=E+(x^y&(C^x))+A[4]+3889429448&4294967295,E=C+(T<<20&4294967295|T>>>12),T=y+(C^x&(E^C))+A[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=x+(E^C&(y^E))+A[14]+3275163606&4294967295,x=y+(T<<9&4294967295|T>>>23),T=C+(y^E&(x^y))+A[3]+4107603335&4294967295,C=x+(T<<14&4294967295|T>>>18),T=E+(x^y&(C^x))+A[8]+1163531501&4294967295,E=C+(T<<20&4294967295|T>>>12),T=y+(C^x&(E^C))+A[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=x+(E^C&(y^E))+A[2]+4243563512&4294967295,x=y+(T<<9&4294967295|T>>>23),T=C+(y^E&(x^y))+A[7]+1735328473&4294967295,C=x+(T<<14&4294967295|T>>>18),T=E+(x^y&(C^x))+A[12]+2368359562&4294967295,E=C+(T<<20&4294967295|T>>>12),T=y+(E^C^x)+A[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=x+(y^E^C)+A[8]+2272392833&4294967295,x=y+(T<<11&4294967295|T>>>21),T=C+(x^y^E)+A[11]+1839030562&4294967295,C=x+(T<<16&4294967295|T>>>16),T=E+(C^x^y)+A[14]+4259657740&4294967295,E=C+(T<<23&4294967295|T>>>9),T=y+(E^C^x)+A[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=x+(y^E^C)+A[4]+1272893353&4294967295,x=y+(T<<11&4294967295|T>>>21),T=C+(x^y^E)+A[7]+4139469664&4294967295,C=x+(T<<16&4294967295|T>>>16),T=E+(C^x^y)+A[10]+3200236656&4294967295,E=C+(T<<23&4294967295|T>>>9),T=y+(E^C^x)+A[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=x+(y^E^C)+A[0]+3936430074&4294967295,x=y+(T<<11&4294967295|T>>>21),T=C+(x^y^E)+A[3]+3572445317&4294967295,C=x+(T<<16&4294967295|T>>>16),T=E+(C^x^y)+A[6]+76029189&4294967295,E=C+(T<<23&4294967295|T>>>9),T=y+(E^C^x)+A[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=x+(y^E^C)+A[12]+3873151461&4294967295,x=y+(T<<11&4294967295|T>>>21),T=C+(x^y^E)+A[15]+530742520&4294967295,C=x+(T<<16&4294967295|T>>>16),T=E+(C^x^y)+A[2]+3299628645&4294967295,E=C+(T<<23&4294967295|T>>>9),T=y+(C^(E|~x))+A[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=x+(E^(y|~C))+A[7]+1126891415&4294967295,x=y+(T<<10&4294967295|T>>>22),T=C+(y^(x|~E))+A[14]+2878612391&4294967295,C=x+(T<<15&4294967295|T>>>17),T=E+(x^(C|~y))+A[5]+4237533241&4294967295,E=C+(T<<21&4294967295|T>>>11),T=y+(C^(E|~x))+A[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=x+(E^(y|~C))+A[3]+2399980690&4294967295,x=y+(T<<10&4294967295|T>>>22),T=C+(y^(x|~E))+A[10]+4293915773&4294967295,C=x+(T<<15&4294967295|T>>>17),T=E+(x^(C|~y))+A[1]+2240044497&4294967295,E=C+(T<<21&4294967295|T>>>11),T=y+(C^(E|~x))+A[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=x+(E^(y|~C))+A[15]+4264355552&4294967295,x=y+(T<<10&4294967295|T>>>22),T=C+(y^(x|~E))+A[6]+2734768916&4294967295,C=x+(T<<15&4294967295|T>>>17),T=E+(x^(C|~y))+A[13]+1309151649&4294967295,E=C+(T<<21&4294967295|T>>>11),T=y+(C^(E|~x))+A[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=x+(E^(y|~C))+A[11]+3174756917&4294967295,x=y+(T<<10&4294967295|T>>>22),T=C+(y^(x|~E))+A[2]+718787259&4294967295,C=x+(T<<15&4294967295|T>>>17),T=E+(x^(C|~y))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+x&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,A=this.C;let C=this.h,x=0;for(;x<y;){if(C==0)for(;x<=E;)i(this,v,x),x+=this.blockSize;if(typeof v=="string"){for(;x<y;)if(A[C++]=v.charCodeAt(x++),C==this.blockSize){i(this,A),C=0;break}}else for(;x<y;)if(A[C++]=v[x++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)v[y++]=this.g[E]>>>A&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let A=!0;for(let C=v.length-1;C>=0;C--){const x=v[C]|0;A&&x==y||(E[C]=x,A=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return P(c(-v));const y=[];let E=1;for(let A=0;v>=E;A++)y[A]=v/E|0,E*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return P(d(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let A=p;for(let x=0;x<v.length;x+=8){var C=Math.min(8,v.length-x);const T=parseInt(v.substring(x,x+C),y);C<8?(C=c(Math.pow(y,C)),A=A.j(C).add(c(T))):(A=A.j(E),A=A.add(c(T)))}return A}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);v+=(A>=0?A:4294967296+A)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(k(this))return"-"+P(this).toString(v);const y=c(Math.pow(v,6));var E=this;let A="";for(;;){const C=V(E,y).g;E=w(E,C.j(y));let x=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=C,N(E))return x+A;for(;x.length<6;)x="0"+x;A=x+A}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function k(v){return v.h==-1}t.l=function(v){return v=w(this,v),k(v)?-1:N(v)?0:1};function P(v){const y=v.g.length,E=[];for(let A=0;A<y;A++)E[A]=~v.g[A];return new o(E,~v.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let A=0;for(let C=0;C<=y;C++){let x=A+(this.i(C)&65535)+(v.i(C)&65535),T=(x>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);A=T>>>16,x&=65535,T&=65535,E[C]=T<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(P(y))}t.j=function(v){if(N(this)||N(v))return p;if(k(this))return k(v)?P(this).j(P(v)):P(P(this).j(v));if(k(v))return P(this.j(P(v)));if(this.l(I)<0&&v.l(I)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let C=0;C<v.g.length;C++){const x=this.i(A)>>>16,T=this.i(A)&65535,re=v.i(C)>>>16,de=v.i(C)&65535;E[2*A+2*C]+=T*de,_(E,2*A+2*C),E[2*A+2*C+1]+=x*de,_(E,2*A+2*C+1),E[2*A+2*C+1]+=T*re,_(E,2*A+2*C+1),E[2*A+2*C+2]+=x*re,_(E,2*A+2*C+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function S(v,y){this.g=v,this.h=y}function V(v,y){if(N(y))throw Error("division by zero");if(N(v))return new S(p,p);if(k(v))return y=V(P(v),y),new S(P(y.g),P(y.h));if(k(y))return y=V(v,P(y)),new S(P(y.g),y.h);if(v.g.length>30){if(k(v)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(v)<=0;)E=M(E),A=M(A);var C=U(E,1),x=U(A,1);for(A=U(A,2),E=U(E,2);!N(A);){var T=x.add(A);T.l(v)<=0&&(C=C.add(E),x=T),A=U(A,1),E=U(E,1)}return y=w(v,C.j(y)),new S(C,y)}for(C=p;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),x=c(E),T=x.j(y);k(T)||T.l(v)>0;)E-=A,x=c(E),T=x.j(y);N(x)&&(x=m),C=C.add(x),v=w(v,T)}return new S(C,v)}t.B=function(v){return V(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&v.i(A);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|v.i(A);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^v.i(A);return new o(E,this.h^v.h)};function M(v){const y=v.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(E,v.h)}function U(v,y){const E=y>>5;y%=32;const A=v.g.length-E,C=[];for(let x=0;x<A;x++)C[x]=y>0?v.i(x+E)>>>y|v.i(x+E+1)<<32-y:v.i(x+E);return new o(C,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ME=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ar=o}).apply(typeof dy<"u"?dy:typeof self<"u"?self:typeof window<"u"?window:{});var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FE,lo,UE,vl,md,jE,BE,zE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qa=="object"&&Qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in f))break e;f=f[D]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,D,L){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return h.prototype[D].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let g=1;g<arguments.length;g++){const D=arguments[g];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=a.length||0;const L=D.length||0;a.length=f+L;for(let z=0;z<L;z++)a[f+z]=D[z]}else a.push(D)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function w(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const g=S.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new k(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function re(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(re,C),re.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&re.Z.h.call(this)},re.prototype.h=function(){re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),it=0;function Pt(a,h,f,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=D,this.key=++it,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function B(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Q(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function W(a){const h={};for(const f in a)h[f]=a[f];return h}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function An(a,h){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)a[f]=g[f];for(let L=0;L<ge.length;L++)f=ge[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function vt(a){this.src=a,this.g={},this.h=0}vt.prototype.add=function(a,h,f,g,D){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const z=kt(a,h,g,D);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Pt(h,this.src,L,!!g,D),h.fa=f,a.push(h)),h};function Cn(a,h){const f=h.type;if(f in a.g){var g=a.g[f],D=Array.prototype.indexOf.call(g,h,void 0),L;(L=D>=0)&&Array.prototype.splice.call(g,D,1),L&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function kt(a,h,f,g){for(let D=0;D<a.length;++D){const L=a[D];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==g)return D}return-1}var ce="closure_lm_"+(Math.random()*1e6|0),me={};function X(a,h,f,g,D){if(Array.isArray(h)){for(let L=0;L<h.length;L++)X(a,h[L],f,g,D);return null}return f=ne(f),a&&a[de]?a.J(h,f,l(g)?!!g.capture:!1,D):wt(a,h,f,!1,g,D)}function wt(a,h,f,g,D,L){if(!h)throw Error("Invalid event type");const z=l(D)?!!D.capture:!!D;let ie=fe(a);if(ie||(a[ce]=ie=new vt(a)),f=ie.add(h,f,g,z,L),f.proxy)return f;if(g=ue(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)x||(D=z),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(Qn(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ue(){function a(f){return h.call(a.src,a.listener,f)}const h=Wr;return a}function Rn(a,h,f,g,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)Rn(a,h[L],f,g,D);else g=l(g)?!!g.capture:!!g,f=ne(f),a&&a[de]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],f=kt(h,f,g,D),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=fe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=kt(h,f,g,D)),(f=a>-1?h[a]:null)&&Pn(f))}function Pn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[de])Cn(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Qn(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=fe(h))?(Cn(f,a),f.h==0&&(f.src=null,h[ce]=null)):$(a)}}}function Qn(a){return a in me?me[a]:me[a]="on"+a}function Wr(a,h){if(a.da)a=!0;else{h=new re(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Pn(a),a=f.call(g,h)}return a}function fe(a){return a=a[ce],a instanceof vt?a:null}var G="__closure_events_fn_"+(Math.random()*1e9>>>0);function ne(a){return typeof a=="function"?a:(a[G]||(a[G]=function(h){return a.handleEvent(h)}),a[G])}function we(){A.call(this),this.i=new vt(this),this.M=this,this.G=null}p(we,A),we.prototype[de]=!0,we.prototype.removeEventListener=function(a,h,f,g){Rn(this,a,h,f,g)};function Ke(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var D=h;h=new C(g,a),An(h,D)}D=!0;let L,z;if(f)for(z=f.length-1;z>=0;z--)L=h.g=f[z],D=Qt(L,g,!0,h)&&D;if(L=h.g=a,D=Qt(L,g,!0,h)&&D,D=Qt(L,g,!1,h)&&D,f)for(z=0;z<f.length;z++)L=h.g=f[z],D=Qt(L,g,!1,h)&&D}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)$(f[g]);delete a.g[h],a.h--}}this.G=null},we.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},we.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Qt(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let L=0;L<h.length;++L){const z=h[L];if(z&&!z.da&&z.capture==f){const ie=z.listener,je=z.ha||z.src;z.fa&&Cn(a.i,z),D=ie.call(je,g)!==!1&&D}}return D&&!g.defaultPrevented}function qI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function xp(a){a.g=qI(()=>{a.g=null,a.i&&(a.i=!1,xp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class KI extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:xp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(a){A.call(this),this.h=a,this.g={}}p(xs,A);var Dp=[];function Op(a){B(a.g,function(h,f){this.g.hasOwnProperty(f)&&Pn(h)},a),a.g={}}xs.prototype.N=function(){xs.Z.N.call(this),Op(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oc=o.JSON.stringify,GI=o.JSON.parse,QI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vp(){}function Lp(){}var Ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ac(){C.call(this,"d")}p(ac,C);function lc(){C.call(this,"c")}p(lc,C);var qr={},bp=null;function wa(){return bp=bp||new we}qr.Ia="serverreachability";function Mp(a){C.call(this,qr.Ia,a)}p(Mp,C);function Os(a){const h=wa();Ke(h,new Mp(h))}qr.STAT_EVENT="statevent";function Fp(a,h){C.call(this,qr.STAT_EVENT,a),this.stat=h}p(Fp,C);function ft(a){const h=wa();Ke(h,new Fp(h,a))}qr.Ja="timingevent";function Up(a,h){C.call(this,qr.Ja,a),this.size=h}p(Up,C);function Vs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ls(){this.g=!0}Ls.prototype.ua=function(){this.g=!1};function YI(a,h,f,g,D,L){a.info(function(){if(a.g)if(L){var z="",ie=L.split("&");for(let ve=0;ve<ie.length;ve++){var je=ie[ve].split("=");if(je.length>1){const Ge=je[0];je=je[1];const un=Ge.split("_");z=un.length>=2&&un[1]=="type"?z+(Ge+"="+je+"&"):z+(Ge+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+f+`
`+z})}function XI(a,h,f,g,D,L,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+f+`
`+L+" "+z})}function Ni(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ZI(a,f)+(g?" "+g:"")})}function JI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ls.prototype.info=function(){};function ZI(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var f=L[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var D=g[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return oc(L)}catch{return h}}var Ea={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Bp;function uc(){}p(uc,Vp),uc.prototype.g=function(){return new XMLHttpRequest},Bp=new uc;function bs(a){return encodeURIComponent(String(a))}function e0(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Yn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zp}function zp(){this.i=null,this.g="",this.h=!1}var $p={},cc={};function hc(a,h,f){a.M=1,a.A=Ia(ln(h)),a.u=f,a.R=!0,Hp(a,null)}function Hp(a,h){a.F=Date.now(),Ta(a),a.B=ln(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),rm(f.i,"t",g),a.C=0,f=a.j.L,a.h=new zp,a.g=Em(a.j,f?h:null,!a.u),a.P>0&&(a.O=new KI(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Dp[0]=D.toString()),D=Dp);for(let L=0;L<D.length;L++){const z=X(f,D[L],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?W(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Os(),YI(a.i,a.v,a.B,a.l,a.S,a.u)}Yn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Zn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const ie=Zn(this.g),je=this.g.ya(),ve=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||cm(this.g)))){this.K||ie!=4||je==7||(je==8||ve<=0?Os(3):Os(2)),dc(this);var h=this.g.ca();this.X=h;var f=t0(this);if(this.o=h==200,XI(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,D=this.g;if((g=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var L=g;break t}}L=null}if(a=L)Ni(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fc(this,a);else{this.o=!1,this.m=3,ft(12),Kr(this),Ms(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<f.length;)if(Ge=n0(this,f),Ge==cc){ie==4&&(this.m=4,ft(14),a=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==$p){this.m=4,ft(15),Ni(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ni(this.i,this.l,Ge,null),fc(this,Ge);if(Wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||f.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Ni(this.i,this.l,f,"[Invalid Chunked Response]"),Kr(this),Ms(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ec(z),z.P=!0,ft(11))}}else Ni(this.i,this.l,f,null),fc(this,f);ie==4&&Kr(this),this.o&&!this.K&&(ie==4?ym(this.j,this):(this.o=!1,Ta(this)))}else g0(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Kr(this),Ms(this)}}}catch{}finally{}};function t0(a){if(!Wp(a))return a.g.la();const h=cm(a.g);if(h==="")return"";let f="";const g=h.length,D=Zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kr(a),Ms(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<g;L++)a.h.h=!0,f+=a.h.i.decode(h[L],{stream:!(D&&L==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Wp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function n0(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?cc:(f=Number(h.substring(f,g)),isNaN(f)?$p:(g+=1,g+f>h.length?cc:(h=h.slice(g,g+f),a.C=g+f,h)))}Yn.prototype.cancel=function(){this.K=!0,Kr(this)};function Ta(a){a.T=Date.now()+a.H,qp(a,a.H)}function qp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vs(c(a.aa,a),h)}function dc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Yn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(JI(this.i,this.B),this.M!=2&&(Os(),ft(17)),Kr(this),this.m=2,Ms(this)):qp(this,this.T-a)};function Ms(a){a.j.I==0||a.K||ym(a.j,a)}function Kr(a){dc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Op(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function fc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||pc(f.h,a))){if(!a.L&&pc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Pa(f),Ca(f);else break e;wc(f),ft(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Vs(c(f.Va,f),6e3));Qp(f.h)<=1&&f.ta&&(f.ta=void 0)}else Qr(f,11)}else if((a.L||f.g==a)&&Pa(f),!T(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let ve=D[h];const Ge=ve[0];if(!(Ge<=f.K))if(f.K=Ge,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const un=ve[3];un!=null&&(f.ka=un,f.j.info("VER="+f.ka));const Yr=ve[4];Yr!=null&&(f.za=Yr,f.j.info("SVER="+f.za));const er=ve[5];er!=null&&typeof er=="number"&&er>0&&(g=1.5*er,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const tr=a.g;if(tr){const Na=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var L=g.h;L.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(mc(L,L.h),L.h=null))}if(g.G){const Tc=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Tc&&(g.wa=Tc,Te(g.J,g.G,Tc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=wm(g,g.L?g.ba:null,g.W),z.L){Yp(g.h,z);var ie=z,je=g.O;je&&(ie.H=je),ie.D&&(dc(ie),Ta(ie)),g.g=z}else mm(g);f.i.length>0&&Ra(f)}else ve[0]!="stop"&&ve[0]!="close"||Qr(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Qr(f,7):vc(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}Os(4)}catch{}}var r0=class{constructor(a,h){this.g=a,this.map=h}};function Kp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qp(a){return a.h?1:a.g?a.g.size:0}function pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function mc(a,h){a.g?a.g.add(h):a.h=h}function Yp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Kp.prototype.cancel=function(){if(this.i=Xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i0(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let D,L=null;g>=0?(D=a[f].substring(0,g),L=a[f].substring(g+1)):D=a[f],h(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Xn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Xn?(this.l=a.l,Fs(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.u),this.h=a.h,gc(this,im(a.i)),this.m=a.m):a&&(h=String(a).match(Jp))?(this.l=!1,Fs(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),Us(this,h[4]),this.h=js(h[5]||"",!0),gc(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}Xn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Bs(h,Zp,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bs(h,Zp,!0),"@"),a.push(bs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Bs(f,f.charAt(0)=="/"?a0:o0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Bs(f,u0)),a.join("")},Xn.prototype.resolve=function(a){const h=ln(this);let f=!!a.j;f?Fs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Us(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var D=h.h.lastIndexOf("/");D!=-1&&(g=h.h.slice(0,D+1)+g)}if(D=g,D==".."||D==".")g="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){g=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let z=0;z<D.length;){const ie=D[z++];ie=="."?g&&z==D.length&&L.push(""):ie==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),g&&z==D.length&&L.push("")):(L.push(ie),g=!0)}g=L.join("/")}else g=D}return f?h.h=g:f=a.i.toString()!=="",f?gc(h,im(a.i)):f=!!a.m,f&&(h.m=a.m),h};function ln(a){return new Xn(a)}function Fs(a,h,f){a.j=f?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function gc(a,h,f){h instanceof zs?(a.i=h,c0(a.i,a.l)):(f||(h=Bs(h,l0)),a.i=new zs(h,a.l))}function Te(a,h,f){a.i.set(h,f)}function Ia(a){return Te(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,s0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function s0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zp=/[#\/\?@]/g,o0=/[#\?:]/g,a0=/[#\?]/g,l0=/[#\?@]/g,u0=/#/g;function zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gr(a){a.g||(a.g=new Map,a.h=0,a.i&&i0(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=zs.prototype,t.add=function(a,h){Gr(this),this.i=null,a=xi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function em(a,h){Gr(a),h=xi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function tm(a,h){return Gr(a),h=xi(a,h),a.g.has(h)}t.forEach=function(a,h){Gr(this),this.g.forEach(function(f,g){f.forEach(function(D){a.call(h,D,g,this)},this)},this)};function nm(a,h){Gr(a);let f=[];if(typeof h=="string")tm(a,h)&&(f=f.concat(a.g.get(xi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Gr(this),this.i=null,a=xi(this,a),tm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=nm(this,a),a.length>0?String(a[0]):h):h};function rm(a,h,f){em(a,h),f.length>0&&(a.i=null,a.g.set(xi(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const D=bs(f);f=nm(this,f);for(let L=0;L<f.length;L++){let z=D;f[L]!==""&&(z+="="+bs(f[L])),a.push(z)}}return this.i=a.join("&")};function im(a){const h=new zs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function xi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function c0(a,h){h&&!a.j&&(Gr(a),a.i=null,a.g.forEach(function(f,g){const D=g.toLowerCase();g!=D&&(em(this,g),rm(this,D,f))},a)),a.j=h}function h0(a,h){const f=new Ls;if(o.Image){const g=new Image;g.onload=d(Jn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Jn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Jn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Jn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function d0(a,h){const f=new Ls,g=new AbortController,D=setTimeout(()=>{g.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(D),L.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function f0(){this.g=new QI}function yc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(yc,Vp),yc.prototype.g=function(){return new Sa(this.i,this.h)};function Sa(a,h){we.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Sa,we),t=Sa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$s(this):Hs(this),this.readyState==3&&sm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Na=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function om(a){let h="";return B(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function _c(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=om(f),typeof a=="string"?f!=null&&bs(f):Te(a,h,f))}function De(a){we.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(De,we);var p0=/^https?$/i,m0=["POST","PUT"];t=De.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){am(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(m0,h,void 0)>=0)||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of f)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){am(this,L)}};function am(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,lm(a),Aa(a)}function lm(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ke(this,"complete"),Ke(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?um(this):this.Xa())},t.Xa=function(){um(this)};function um(a){if(a.h&&typeof s<"u"){if(a.v&&Zn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ke(a,"readystatechange"),Zn(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=L===0){let z=String(a.D).match(Jp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!p0.test(z?z.toLowerCase():"")}f=g}if(f)Ke(a,"complete"),Ke(a,"success");else{a.o=6;try{var D=Zn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",lm(a)}}finally{Aa(a)}}}}function Aa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Ke(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),GI(h)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function g0(a){const h={};a=(a.g&&Zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var f=e0(a[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[D]||[];h[D]=L,L.push(f)}Q(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hm(a){this.za=0,this.i=[],this.j=new Ls,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ws("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ws("baseRetryDelayMs",5e3,a),this.Za=Ws("retryDelaySeedMs",1e4,a),this.Ta=Ws("forwardChannelMaxRetries",2,a),this.va=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Kp(a&&a.concurrentRequestLimit),this.Ba=new f0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){ft(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=wm(this,null,this.W),Ra(this)};function vc(a){if(dm(a),a.I==3){var h=a.V++,f=ln(a.J);if(Te(f,"SID",a.M),Te(f,"RID",h),Te(f,"TYPE","terminate"),qs(a,f),h=new Yn(a,a.j,h),h.M=2,h.A=Ia(ln(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Em(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ta(h)}vm(a)}function Ca(a){a.g&&(Ec(a),a.g.cancel(),a.g=null)}function dm(a){Ca(a),a.v&&(o.clearTimeout(a.v),a.v=null),Pa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ra(a){if(!Gp(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),U||(M(),U=!0),v.add(h,a),a.D=0}}function y0(a,h){return Qp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vs(c(a.Ea,a,h),_m(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Yn(this,this.j,a);let L=this.o;if(this.U&&(L?(L=W(L),An(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pm(this,D,h),f=ln(this.J),Te(f,"RID",a),Te(f,"CVER",22),this.G&&Te(f,"X-HTTP-Session-Id",this.G),qs(this,f),L&&(this.R?h="headers="+bs(om(L))+"&"+h:this.u&&_c(f,this.u,L)),mc(this.h,D),this.Ra&&Te(f,"TYPE","init"),this.S?(Te(f,"$req",h),Te(f,"SID","null"),D.U=!0,hc(D,f,null)):hc(D,f,h),this.I=2}}else this.I==3&&(a?fm(this,a):this.i.length==0||Gp(this.h)||fm(this))};function fm(a,h){var f;h?f=h.l:f=a.V++;const g=ln(a.J);Te(g,"SID",a.M),Te(g,"RID",f),Te(g,"AID",a.K),qs(a,g),a.u&&a.o&&_c(g,a.u,a.o),f=new Yn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=pm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),mc(a.h,f),hc(f,g,h)}function qs(a,h){a.H&&B(a.H,function(f,g){Te(h,g,f)}),a.l&&B({},function(f,g){Te(h,g,f)})}function pm(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ie=-1;for(;;){const je=["count="+f];ie==-1?f>0?(ie=D[0].g,je.push("ofs="+ie)):ie=0:je.push("ofs="+ie);let ve=!0;for(let Ge=0;Ge<f;Ge++){var L=D[Ge].g;const un=D[Ge].map;if(L-=ie,L<0)ie=Math.max(0,D[Ge].g-100),ve=!1;else try{L="req"+L+"_"||"";try{var z=un instanceof Map?un:Object.entries(un);for(const[Yr,er]of z){let tr=er;l(er)&&(tr=oc(er)),je.push(L+Yr+"="+encodeURIComponent(tr))}}catch(Yr){throw je.push(L+"type="+encodeURIComponent("_badmap")),Yr}}catch{g&&g(un)}}if(ve){z=je.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function mm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),U||(M(),U=!0),v.add(h,a),a.A=0}}function wc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vs(c(a.Da,a),_m(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),Ca(this),gm(this))};function Ec(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gm(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=ln(a.na);Te(h,"RID","rpc"),Te(h,"SID",a.M),Te(h,"AID",a.K),Te(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Te(h,"TO",a.ia),Te(h,"TYPE","xmlhttp"),qs(a,h),a.u&&a.o&&_c(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ia(ln(h)),f.u=null,f.R=!0,Hp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ca(this),wc(this),ft(19))};function Pa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ym(a,h){var f=null;if(a.g==h){Pa(a),Ec(a),a.g=null;var g=2}else if(pc(a.h,h))f=h.G,Yp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;g=wa(),Ke(g,new Up(g,f)),Ra(a)}else mm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(g==1&&y0(a,h)||g==2&&wc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Qr(a,5);break;case 4:Qr(a,10);break;case 3:Qr(a,6);break;default:Qr(a,2)}}}function _m(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Qr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const D=!g;g=new Xn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fs(g,"https"),Ia(g),D?h0(g.toString(),f):d0(g.toString(),f)}else ft(2);a.I=0,a.l&&a.l.pa(h),vm(a),dm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function vm(a){if(a.I=0,a.ja=[],a.l){const h=Xp(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function wm(a,h,f){var g=f instanceof Xn?ln(f):new Xn(f);if(g.g!="")h&&(g.g=h+"."+g.g),Us(g,g.u);else{var D=o.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const L=new Xn(null);g&&Fs(L,g),h&&(L.g=h),D&&Us(L,D),f&&(L.h=f),g=L}return f=a.G,h=a.wa,f&&h&&Te(g,f,h),Te(g,"VER",a.ka),qs(a,g),g}function Em(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new De(new yc({ab:f})):new De(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ka(){}ka.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){we.call(this),this.g=new hm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Di(this)}p(Nt,we),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){vc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=oc(a),a=f);h.i.push(new r0(h.Ya++,a)),h.I==3&&Ra(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,Nt.Z.N.call(this)};function Im(a){ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Im,ac);function Sm(){lc.call(this),this.status=1}p(Sm,lc);function Di(a){this.g=a}p(Di,Tm),Di.prototype.ra=function(){Ke(this.g,"a")},Di.prototype.qa=function(a){Ke(this.g,new Im(a))},Di.prototype.pa=function(a){Ke(this.g,new Sm)},Di.prototype.oa=function(){Ke(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,zE=function(){return new ka},BE=function(){return wa()},jE=qr,md={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,vl=Ea,jp.COMPLETE="complete",UE=jp,Lp.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",we.prototype.listen=we.prototype.J,lo=Lp,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,FE=De}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});const fy="@firebase/firestore",py="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new bu("@firebase/firestore");function Vi(){return yi.logLevel}function H(t,...e){if(yi.logLevel<=oe.DEBUG){const n=e.map(Hf);yi.debug(`Firestore (${Cs}): ${t}`,...n)}}function qn(t,...e){if(yi.logLevel<=oe.ERROR){const n=e.map(Hf);yi.error(`Firestore (${Cs}): ${t}`,...n)}}function ps(t,...e){if(yi.logLevel<=oe.WARN){const n=e.map(Hf);yi.warn(`Firestore (${Cs}): ${t}`,...n)}}function Hf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$E(t,r,n)}function $E(t,e,n){let r=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||$E(e,i,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class XP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JP{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new HE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class ZP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ek{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class my{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new my(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new my(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function gd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return nh(i)===nh(s)?ae(i,s):nh(i)?1:-1}return ae(t.length,e.length)}const rk=55296,ik=57343;function nh(t){const e=t.charCodeAt(0);return e>=rk&&e<=ik}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="__name__";class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=dn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),i=dn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?dn.extractNumericId(e).compare(dn.extractNumericId(n)):gd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class Pe extends dn{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const sk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends dn{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return sk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gy}static keyField(){return new et([gy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ak(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yy(t){if(!Y.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qf(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function pa(t,e){if(!WE(t))throw new K(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=-62135596800,vy=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vy);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_y)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vy}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pa(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Fe("string",Se._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Se(0,0))}static max(){return new ee(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=-1;function lk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new xr(i,Y.empty(),e)}function uk(t){return new xr(t.readTime,t.key,Qo)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(ee.min(),Y.empty(),Qo)}static max(){return new xr(ee.max(),Y.empty(),Qo)}}function ck(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==hk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ps(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ju.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=-1;function Bu(t){return t==null}function ru(t){return t===0&&1/t==-1/0}function pk(t){return typeof t=="number"&&Number.isInteger(t)&&!ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="";function mk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wy(e)),e=gk(t.get(n),e);return wy(e)}function gk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case qE:n+="";break;default:n+=s}}return n}function wy(t){return t+qE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new We(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GE("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const yk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=yk.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="server_timestamp",YE="__type__",XE="__previous_value__",JE="__local_write_time__";function Gf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[YE])==null?void 0:r.stringValue)===QE}function zu(t){const e=t.mapValue.fields[XE];return Gf(e)?zu(e):e}function Yo(t){const e=Dr(t.mapValue.fields[JE].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const iu="(default)";class Xo{constructor(e,n){this.projectId=e,this.database=n||iu}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database===iu}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="__type__",vk="__max__",Xa={mapValue:{}},eT="__vector__",su="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gf(t)?4:Ek(t)?9007199254740991:wk(t)?10:11:Z(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dr(i.timestampValue),l=Dr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Or(i.bytesValue).isEqual(Or(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?ru(o)===ru(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ey(o)!==Ey(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Jo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(Yo(t),Yo(e));case 5:return gd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Or(s),u=Or(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ae(l[c],u[c]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ve(s.latitude),Ve(o.latitude));return l!==0?l:ae(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,N,k;const l=s.fields||{},u=o.fields||{},c=(m=l[su])==null?void 0:m.arrayValue,d=(I=u[su])==null?void 0:I.arrayValue,p=ae(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:Sy(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Xa.mapValue&&o===Xa.mapValue)return 0;if(s===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=gd(u[p],d[p]);if(m!==0)return m;const I=gs(l[u[p]],c[d[p]]);if(I!==0)return I}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Dr(t),r=Dr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Sy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ys(t){return yd(t)}function yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yd(n.fields[o])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function wl(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+wl(e):16;case 5:return 2*t.stringValue.length;case 6:return Or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+wl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return $r(r.fields,(s,o)=>{i+=s.length+wl(o)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function _d(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Ay(t){return!!t&&"nullValue"in t}function Cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function wk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ZE])==null?void 0:r.stringValue)===eT}function So(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return{...t}}function Ek(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=So(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(So(this.value))}}function tT(t){const e=[];return $r(t.fields,(n,r)=>{const i=new et([n]);if(El(r)){const s=tT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,ee.min(),ee.min(),ee.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new ct(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ct(e,2,n,ee.min(),ee.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ee.min(),ee.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function Ry(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{}class ze extends nT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sk(e,n,r):n==="array-contains"?new Rk(e,r):n==="in"?new Pk(e,r):n==="not-in"?new kk(e,r):n==="array-contains-any"?new Nk(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ak(e,r):new Ck(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends nT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Sn(e,n)}matches(e){return rT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rT(t){return t.op==="and"}function iT(t){return Ik(t)&&rT(t)}function Ik(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function vd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(iT(t))return t.filters.map(e=>vd(e)).join(",");{const e=t.filters.map(n=>vd(n)).join(",");return`${t.op}(${e})`}}function sT(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&sT(o,i.filters[l]),!0):!1}(t,e):void Z(19439)}function oT(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(oT).join(" ,")+"}"}(t):"Filter"}class Sk extends ze{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ak extends ze{constructor(e,n){super(e,"in",n),this.keys=aT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ck extends ze{constructor(e,n){super(e,"not-in",n),this.keys=aT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Rk extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&Jo(n.arrayValue,this.value)}}class Pk extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class kk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Jo(this.value.arrayValue,n)}}class Nk extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function ky(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xk(t,e,n,r,i,s,o)}function Yf(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.Te=n}return e.Te}function Xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Py(t.startAt,e.startAt)&&Py(t.endAt,e.endAt)}function wd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Dk(t,e,n,r,i,s,o,l){return new $u(t,e,n,r,i,s,o,l)}function Jf(t){return new $u(t)}function Ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ok(t){return t.collectionGroup!==null}function Ao(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new au(s,r))}),n.has(et.keyField().canonicalString())||e.Ie.push(new au(et.keyField(),r))}return e.Ie}function yn(t){const e=te(t);return e.Ee||(e.Ee=Vk(e,Ao(t))),e.Ee}function Vk(t,e){if(t.limitType==="F")return ky(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new au(i.field,s)});const n=t.endAt?new ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ou(t.startAt.position,t.startAt.inclusive):null;return ky(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ed(t,e,n){return new $u(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Xf(yn(t),yn(e))&&t.limitType===e.limitType}function lT(t){return`${Yf(yn(t))}|lt:${t.limitType}`}function Li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oT(i)).join(", ")}]`),Bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ys(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ys(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ry(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ao(r),i)||r.endAt&&!function(o,l,u){const c=Ry(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ao(r),i))}(t,e)}function Lk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uT(t){return(e,n)=>{let r=!1;for(const i of Ao(t)){const s=bk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?gs(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new xe(Y.comparator);function Kn(){return Mk}const cT=new xe(Y.comparator);function uo(...t){let e=cT;for(const n of t)e=e.insert(n.key,n);return e}function hT(t){let e=cT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return Co()}function dT(){return Co()}function Co(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fk=new xe(Y.comparator),Uk=new We(Y.comparator);function le(...t){let e=Uk;for(const n of t)e=e.add(n);return e}const jk=new We(ae);function Bk(){return jk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ru(e)?"-0":e}}function fT(t){return{integerValue:""+t}}function zk(t,e){return pk(e)?fT(e):Zf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this._=void 0}}function $k(t,e,n){return t instanceof lu?function(i,s){const o={fields:{[YE]:{stringValue:QE},[JE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gf(s)&&(s=zu(s)),s&&(o.fields[XE]=s),{mapValue:o}}(n,e):t instanceof Zo?mT(t,e):t instanceof ea?gT(t,e):function(i,s){const o=pT(i,s),l=xy(o)+xy(i.Ae);return _d(o)&&_d(i.Ae)?fT(l):Zf(i.serializer,l)}(t,e)}function Hk(t,e,n){return t instanceof Zo?mT(t,e):t instanceof ea?gT(t,e):n}function pT(t,e){return t instanceof uu?function(r){return _d(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lu extends qu{}class Zo extends qu{constructor(e){super(),this.elements=e}}function mT(t,e){const n=yT(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends qu{constructor(e){super(),this.elements=e}}function gT(t,e){let n=yT(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class uu extends qu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function xy(t){return Ve(t.integerValue||t.doubleValue)}function yT(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zo&&i instanceof Zo||r instanceof ea&&i instanceof ea?ms(r.elements,i.elements,In):r instanceof uu&&i instanceof uu?In(r.Ae,i.Ae):r instanceof lu&&i instanceof lu}(t.transform,e.transform)}class qk{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ku{}function _T(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wT(t.key,_n.none()):new ma(t.key,t.data,_n.none());{const n=t.data,r=It.empty();let i=new We(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new Vt(i.toArray()),_n.none())}}function Kk(t,e,n){t instanceof ma?function(i,s,o){const l=i.value.clone(),u=Oy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!Tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Oy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(vT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof ma?function(s,o,l,u){if(!Tl(s.precondition,o))return l;const c=s.value.clone(),d=Vy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,l,u){if(!Tl(s.precondition,o))return l;const c=Vy(s.fieldTransforms,u,o),d=o.data;return d.setAll(vT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Gk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pT(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function Dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>Wk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends Ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends Ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Oy(t,e,n){const r=new Map;ye(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Hk(o,l,n[i]))}return r}function Vy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$k(s,o,e))}return r}class wT extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qk extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Kk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=_T(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Dy(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Dy(n,r))}}class ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Fk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ep(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,he;function Zk(t){switch(t){case F.OK:return Z(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function ET(t){if(t===void 0)return qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case be.OK:return F.OK;case be.CANCELLED:return F.CANCELLED;case be.UNKNOWN:return F.UNKNOWN;case be.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case be.INTERNAL:return F.INTERNAL;case be.UNAVAILABLE:return F.UNAVAILABLE;case be.UNAUTHENTICATED:return F.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case be.NOT_FOUND:return F.NOT_FOUND;case be.ALREADY_EXISTS:return F.ALREADY_EXISTS;case be.PERMISSION_DENIED:return F.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case be.ABORTED:return F.ABORTED;case be.OUT_OF_RANGE:return F.OUT_OF_RANGE;case be.UNIMPLEMENTED:return F.UNIMPLEMENTED;case be.DATA_LOSS:return F.DATA_LOSS;default:return Z(39323,{code:t})}}(he=be||(be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=new Ar([4294967295,4294967295],0);function Ly(t){const e=eN().encode(t),n=new ME;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([i,s],0)]}class tp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(r<0)throw new co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ar.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ar.fromNumber(r)));return i.compare(tN)===1&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ly(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ly(e),[r,i]=by(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(ee.min(),i,new xe(ae),Kn(),le())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class TT{constructor(e,n){this.targetId=e,this.Ce=n}}class IT{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class My{constructor(){this.ve=0,this.Fe=Fy(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new ga(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Fy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.Je=Ja(),this.He=Ja(),this.Ye=new xe(ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(wd(s))if(r===0){const o=new Y(s.path);this.et(n,o,ct.newNoDocument(o,ee.min()))}else ye(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(u){if(u instanceof GE)return ps("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tp(o,i,s)}catch(u){return ps(u instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&wd(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ct.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=le();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Ye,this.je,r);return this.je=Kn(),this.Je=Ja(),this.He=Ja(),this.Ye=new xe(ae),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new My,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new We(ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new My),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ja(){return new xe(Y.comparator)}function Fy(){return new xe(Y.comparator)}const rN={asc:"ASCENDING",desc:"DESCENDING"},iN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sN={and:"AND",or:"OR"};class oN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Td(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ST(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aN(t,e){return cu(t,e.toTimestamp())}function vn(t){return ye(!!t,49232),ee.fromTimestamp(function(n){const r=Dr(n);return new Se(r.seconds,r.nanos)}(t))}function np(t,e){return Id(t,e).canonicalString()}function Id(t,e){const n=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AT(t){const e=Pe.fromString(t);return ye(NT(e),10190,{key:e.toString()}),e}function Sd(t,e){return np(t.databaseId,e.path)}function rh(t,e){const n=AT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(RT(n))}function CT(t,e){return np(t.databaseId,e)}function lN(t){const e=AT(t);return e.length===4?Pe.emptyPath():RT(e)}function Ad(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RT(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Uy(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function uN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ye(d===void 0||typeof d=="string",58123),rt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:ET(c.code);return new K(d,c.message||"")}(o);n=new IT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rh(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ee.min(),l=new It({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Il(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rh(t,r.document),s=r.readTime?vn(r.readTime):ee.min(),o=ct.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Il([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rh(t,r.document),s=r.removedTargetIds||[];n=new Il([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Jk(i,s),l=r.targetId;n=new TT(l,o)}}return n}function cN(t,e){let n;if(e instanceof ma)n={update:Uy(t,e.key,e.value)};else if(e instanceof wT)n={delete:Sd(t,e.key)};else if(e instanceof Hr)n={update:Uy(t,e.key,e.data),updateMask:vN(e.fieldMask)};else{if(!(e instanceof Qk))return Z(16599,{Vt:e.type});n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(t,e.precondition)),n}function hN(t,e){return t&&t.length>0?(ye(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(ee.min())&&(o=vn(s)),new qk(o,i.transformResults||[])}(n,e))):[]}function dN(t,e){return{documents:[CT(t,e.path)]}}function fN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CT(t,i);const s=function(c){if(c.length!==0)return kT(Sn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:bi(m.field),direction:gN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Td(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function pN(t){let e=lN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=PT(p);return m instanceof Sn&&iT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(N){return new au(Mi(N.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Bu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new ou(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new ou(I,m)}(n.endAt)),Dk(e,i,o,s,l,"F",u,c)}function mN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Mi(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mi(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Mi(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>PT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function gN(t){return rN[t]}function yN(t){return iN[t]}function _N(t){return sN[t]}function bi(t){return{fieldPath:t.canonicalString()}}function Mi(t){return et.fromServerFormat(t.fieldPath)}function kT(t){return t instanceof ze?function(n){if(n.op==="=="){if(Cy(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NAN"}};if(Ay(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cy(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NAN"}};if(Ay(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bi(n.field),op:yN(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>kT(i));return r.length===1?r[0]:{compositeFilter:{op:_N(n.op),filters:r}}}(t):Z(54877,{filter:t})}function vN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.yt=e}}function EN(t){const e=pN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.Cn=new IN}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(xr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class IN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xT=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(xT,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _s(0)}static cr(){return new _s(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="LruGarbageCollector",SN=1048576;function zy([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class AN{constructor(e){this.Ir=e,this.buffer=new We(zy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(By,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ps(n)?H(By,"Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Vr(3e5)})}}class RN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(ju.ce);const r=new AN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(jy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Vi()<=oe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function PN(t,e){return new RN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ro(r.mutation,i,Vt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=uo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=Co(),l=function(){return Co()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Hr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ro(d.mutation,c,d.mutation.getFieldMask(),Se.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new NN(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new xe((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Vt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=dT();d.forEach(m=>{if(!s.has(m)){const I=_T(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ok(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(si());let l=Qo,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(d=>({batchId:l,changes:hT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=uo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new $u(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ct.newInvalidDocument(d)))});let l=uo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ro(d.mutation,c,Vt.empty(),Se.now()),Wu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:EN(i.bundledQuery),readTime:vn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.overlays=new xe(Y.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=si(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xk(n,r));let s=this.qr.get(n);s===void 0&&(s=le(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.Qr=new We(Qe.$r),this.Ur=new We(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new Pe([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new Pe([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=le();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||ae(e.Yr,n.Yr)}static Kr(e,n){return ae(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new We(Qe.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Kf:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ae);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new Y(s),0);let l=new We(ae);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),b.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.ri=e,this.docs=function(){return new xe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ct.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ck(uk(d),r)<=0||(i.has(d.key)||Wu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MN(this)}getSize(e){return b.resolve(this.size)}}class MN extends kN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.persistence=e,this.si=new Ci(n=>Yf(n),Xf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.oi=0,this._i=new rp,this.targetCount=0,this.ai=_s.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.ui={},this.overlays={},this.ci=new ju(0),this.li=!1,this.li=!0,this.hi=new VN,this.referenceDelegate=e(this),this.Pi=new FN(this),this.indexManager=new TN,this.remoteDocumentCache=function(i){return new bN(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new wN(n),this.Ii=new DN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ON,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new LN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new UN(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class UN extends dk{constructor(e){super(),this.currentSequenceNumber=e}}class ip{constructor(e){this.persistence=e,this.Ri=new rp,this.Vi=null}static mi(e){return new ip(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=Y.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class hu{constructor(e,n){this.persistence=e,this.pi=new Ci(r=>mk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=PN(this,n)}static mi(e,n){return new hu(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wl(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pC()?8:fk(dt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Vi()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Vi()<=oe.DEBUG&&H("QueryEngine","Query:",Li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Vi()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):b.resolve())}ys(e,n){if(Ny(n))return b.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ed(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Ed(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Ny(n)||i.isEqual(ee.min())?b.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?b.resolve(null):(Vi()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(n)),this.vs(e,o,n,lk(i,Qo)).next(l=>l))})}Ds(e,n){let r=new We(uT(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Vi()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Li(n)),this.ps.getDocumentsMatchingQuery(e,n,xr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="LocalStore",zN=3e8;class $N{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new xe(ae),this.xs=new Ci(s=>Yf(s),Xf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function HN(t,e,n,r){return new $N(t,e,n,r)}async function OT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function WN(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=b.resolve();return m.forEach(N=>{I=I.next(()=>d.getEntry(u,N)).next(k=>{const P=c.docVersions.get(N);ye(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function qN(t,e){const n=te(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(rt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,P,w){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=zN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,d)&&l.push(n.Pi.updateTargetData(s,I))});let u=Kn(),c=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(KN(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(ee.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function KN(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(op,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function GN(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QN(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=te(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ps(o))throw o;H(op,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function $y(t,e,n){const r=te(t);let i=ee.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=te(u),m=p.xs.get(d);return m!==void 0?b.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:le())).next(l=>(YN(r,Lk(e),l),{documents:l,Qs:s})))}function YN(t,e,n){let r=t.Os.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Hy{constructor(){this.activeTargetIds=Bk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XN{constructor(){this.Mo=new Hy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="ConnectivityMonitor";class qy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Wy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Wy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function Rd(){return Za===null?Za=function(){return 268435456+Math.round(2147483648*Math.random())}():Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="RestConnection",ZN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ex{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===iu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Rd(),l=this.zo(e,n.toUriEncodedString());H(ih,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=Is(c);return this.Jo(e,l,u,r,d).then(p=>(H(ih,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ps(ih,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=ZN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class nx extends ex{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Rd();return new Promise((l,u)=>{const c=new FE;c.setWithCredentials(!0),c.listenOnce(UE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vl.NO_ERROR:const p=c.getResponseJson();H(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case vl.TIMEOUT:H(at,`RPC '${e}' ${o} timed out`),u(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case vl.HTTP_ERROR:const m=c.getStatus();if(H(at,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const k=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(N.status);u(new K(k,N.message))}else u(new K(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(F.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(at,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(at,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Rd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zE(),l=BE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(at,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,I=!1;const N=new tx({Yo:P=>{I?H(at,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(at,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(at,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Zo:()=>p.close()}),k=(P,w,_)=>{P.listen(w,S=>{try{_(S)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,lo.EventType.OPEN,()=>{I||(H(at,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),k(p,lo.EventType.CLOSE,()=>{I||(I=!0,H(at,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(p))}),k(p,lo.EventType.ERROR,P=>{I||(I=!0,ps(at,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),N.a_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,lo.EventType.MESSAGE,P=>{var w;if(!I){const _=P.data[0];ye(!!_,16349);const S=_,V=(S==null?void 0:S.error)||((w=S[0])==null?void 0:w.error);if(V){H(at,`RPC '${e}' stream ${i} received error:`,V);const M=V.status;let U=function(E){const A=be[E];if(A!==void 0)return ET(A)}(M),v=V.message;U===void 0&&(U=F.INTERNAL,v="Unknown error status: "+M+" with message "+V.message),I=!0,N.a_(new K(U,v)),p.close()}else H(at,`RPC '${e}' stream ${i} received:`,_),N.u_(_)}}),k(l,jE.STAT_EVENT,P=>{P.stat===md.PROXY?H(at,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===md.NOPROXY&&H(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return new oN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="PersistentStream";class bT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rx extends bT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=uN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?vn(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ad(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wd(u)?{documents:dN(s,u)}:{query:fN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ST(s,o.resumeToken);const c=Td(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=cu(s,o.snapshotVersion.toTimestamp());const c=Td(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=mN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ad(this.serializer),n.removeTarget=e,this.q_(n)}}class ix extends bT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hN(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ad(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cN(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{}class ox extends sx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Id(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Id(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ax{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="RemoteStore";class lx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(H(vi,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ea.add(4),await ya(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Yu(c)}(this))})}),this.Ra=new ax(r,i)}}async function Yu(t){if(Ri(t))for(const e of t.da)await e(!0)}async function ya(t){for(const e of t.da)await e(!1)}function MT(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cp(n)?up(n):ks(n).O_()&&lp(n,e))}function ap(t,e){const n=te(t),r=ks(n);n.Ia.delete(e),r.O_()&&FT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ri(n)&&n.Ra.set("Unknown"))}function lp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ks(t).Y_(e)}function FT(t,e){t.Va.Ue(e),ks(t).Z_(e)}function up(t){t.Va=new nN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.Ra.ua()}function cp(t){return Ri(t)&&!ks(t).x_()&&t.Ia.size>0}function Ri(t){return te(t).Ea.size===0}function UT(t){t.Va=void 0}async function ux(t){t.Ra.set("Online")}async function cx(t){t.Ia.forEach((e,n)=>{lp(t,e)})}async function hx(t,e){UT(t),cp(t)?(t.Ra.ha(e),up(t)):t.Ra.set("Unknown")}async function dx(t,e,n){if(t.Ra.set("Online"),e instanceof IT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await du(t,r)}else if(e instanceof Il?t.Va.Ze(e):e instanceof TT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ee.min()))try{const r=await VT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),FT(s,u);const p=new fr(d.target,u,c,d.sequenceNumber);lp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(vi,"Failed to raise snapshot:",r),await du(t,r)}}async function du(t,e,n){if(!Ps(e))throw e;t.Ea.add(1),await ya(t),t.Ra.set("Offline"),n||(n=()=>VT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(vi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Yu(t)})}function jT(t,e){return e().catch(n=>du(t,n,e))}async function Xu(t){const e=te(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kf;for(;fx(e);)try{const i=await GN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,px(e,i)}catch(i){await du(e,i)}BT(e)&&zT(e)}function fx(t){return Ri(t)&&t.Ta.length<10}function px(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function BT(t){return Ri(t)&&!Lr(t).x_()&&t.Ta.length>0}function zT(t){Lr(t).start()}async function mx(t){Lr(t).ra()}async function gx(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function yx(t,e,n){const r=t.Ta.shift(),i=ep.from(r,e,n);await jT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function _x(t,e){e&&Lr(t).X_&&await async function(r,i){if(function(o){return Zk(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();Lr(r).B_(),await jT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xu(r)}}(t,e),BT(t)&&zT(t)}async function Gy(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H(vi,"RemoteStore received new credentials");const r=Ri(n);n.Ea.add(3),await ya(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Yu(n)}async function vx(t,e){const n=te(t);e?(n.Ea.delete(2),await Yu(n)):e||(n.Ea.add(2),await ya(n),n.Ra.set("Unknown"))}function ks(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new rx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:ux.bind(null,t),t_:cx.bind(null,t),r_:hx.bind(null,t),H_:dx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),cp(t)?up(t):t.Ra.set("Unknown")):(await t.ma.stop(),UT(t))})),t.ma}function Lr(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new ix(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:mx.bind(null,t),r_:_x.bind(null,t),ta:gx.bind(null,t),na:yx.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Xu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(vi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Ps(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.ga=new xe(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vs(e,n,ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ex{constructor(){this.queries=Yy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Yy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function Yy(){return new Ci(t=>lT(t),Hu)}async function Tx(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new wx,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dp(o,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&fp(n)}async function Ix(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Sx(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&fp(n)}function Ax(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function fp(t){t.Ca.forEach(e=>{e.next()})}var Pd,Xy;(Xy=Pd||(Pd={})).Ma="default",Xy.Cache="cache";class Cx{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.key=e}}class HT{constructor(e){this.key=e}}class Rx{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=le(),this.mutatedKeys=le(),this.eu=uT(e),this.tu=new ss(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Wu(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?N!==k&&(r.track({type:3,doc:I}),P=!0):this.su(m,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),P=!0):m&&!I&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,N){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Rt:P})}};return k(I)-k(N)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new vs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new HT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new $T(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pp="SyncEngine";class Px{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kx{constructor(e){this.key=e,this.hu=!1}}class Nx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ci(l=>lT(l),Hu),this.Iu=new Map,this.Eu=new Set,this.du=new xe(Y.comparator),this.Au=new Map,this.Ru=new rp,this.Vu={},this.mu=new Map,this.fu=_s.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xx(t,e,n=!0){const r=YT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await WT(r,e,n,!0),i}async function Dx(t,e){const n=YT(t);await WT(n,e,!0,!1)}async function WT(t,e,n,r){const i=await QN(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Ox(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&MT(t.remoteStore,i),l}async function Ox(t,e,n,r,i){t.pu=(p,m,I)=>async function(k,P,w,_){let S=P.view.ru(w);S.Cs&&(S=await $y(k.localStore,P.query,!1).then(({documents:v})=>P.view.ru(v,S)));const V=_&&_.targetChanges.get(P.targetId),M=_&&_.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(S,k.isPrimaryClient,V,M);return Zy(k,P.targetId,U.au),U.snapshot}(t,p,m,I);const s=await $y(t.localStore,e,!0),o=new Rx(e,s.Qs),l=o.ru(s.documents),u=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Zy(t,n,c.au);const d=new Px(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Vx(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ap(r.remoteStore,i.targetId),kd(r,i.targetId)}).catch(Rs)):(kd(r,i.targetId),await Cd(r.localStore,i.targetId,!0))}async function Lx(t,e){const n=te(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ap(n.remoteStore,r.targetId))}async function bx(t,e,n){const r=$x(t);try{const i=await function(o,l){const u=te(o),c=Se.now(),d=l.reduce((I,N)=>I.add(N.key),le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=Kn(),k=le();return u.Ns.getEntries(I,d).next(P=>{N=P,N.forEach((w,_)=>{_.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,N)).next(P=>{p=P;const w=[];for(const _ of l){const S=Gk(_,p.get(_.key).overlayedDocument);S!=null&&w.push(new Hr(_.key,S,tT(S.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:hT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new xe(ae)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await _a(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=dp(i,"Failed to persist write");n.reject(s)}}async function qT(t,e){const n=te(t);try{const r=await qN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ye(o.hu,14607):i.removedDocuments.size>0&&(ye(o.hu,42227),o.hu=!1))}),await _a(n,r,e)}catch(r){await Rs(r)}}function Jy(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&fp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mx(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new xe(Y.comparator);o=o.insert(s,ct.newNoDocument(s,ee.min()));const l=le().add(s),u=new Gu(ee.min(),new Map,new xe(ae),o,l);await qT(r,u),r.du=r.du.remove(s),r.Au.delete(e),mp(r)}else await Cd(r.localStore,e,!1).then(()=>kd(r,e,n)).catch(Rs)}async function Fx(t,e){const n=te(t),r=e.batch.batchId;try{const i=await WN(n.localStore,e);GT(n,r,null),KT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _a(n,i)}catch(i){await Rs(i)}}async function Ux(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ye(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GT(r,e,n),KT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _a(r,i)}catch(i){await Rs(i)}}function KT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function GT(t,e,n){const r=te(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function kd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||QT(t,r)})}function QT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ap(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),mp(t))}function Zy(t,e,n){for(const r of n)r instanceof $T?(t.Ru.addReference(r.key,e),jx(t,r)):r instanceof HT?(H(pp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||QT(t,r.key)):Z(19791,{wu:r})}function jx(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(pp,"New document in limbo: "+n),t.Eu.add(r),mp(t))}function mp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Pe.fromString(e)),r=t.fu.next();t.Au.set(r,new kx(n)),t.du=t.du.insert(n,r),MT(t.remoteStore,new fr(yn(Jf(n.path)),r,"TargetPurposeLimboResolution",ju.ce))}}async function _a(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=sp.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Es,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>b.forEach(m.ds,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Ps(p))throw p;H(op,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.Ms.get(m),N=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(N);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function Bx(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H(pp,"User change. New user:",e.toKey());const r=await OT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _a(n,r.Ls)}}function zx(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function YT(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mx.bind(null,e),e.Pu.H_=Sx.bind(null,e.eventManager),e.Pu.yu=Ax.bind(null,e.eventManager),e}function $x(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ux.bind(null,e),e}class fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return HN(this.persistence,new BN,e.initialUser,this.serializer)}Cu(e){return new DT(ip.mi,this.serializer)}Du(e){return new XN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fu.provider={build:()=>new fu};class Hx extends fu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof hu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new DT(r=>hu.mi(r,n),this.serializer)}}class Nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bx.bind(null,this.syncEngine),await vx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ex}()}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=function(s){return new nx(s)}(e.databaseInfo);return function(s,o,l,u){return new ox(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new lx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Jy(this.syncEngine,n,0),function(){return qy.v()?new qy:new JN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Nx(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H(vi,"RemoteStore shutting down."),s.Ea.add(5),await ya(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Nd.provider={build:()=>new Nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="FirestoreClient";class qx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=Wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oh(t,e){t.asyncQueue.verifyOperationInProgress(),H(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await OT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kx(t);H(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gy(e.remoteStore,i)),t._onlineComponents=e}async function Kx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(br,"Using user provided OfflineComponentProvider");try{await oh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await oh(t,new fu)}}else H(br,"Using default OfflineComponentProvider"),await oh(t,new Hx(void 0));return t._offlineComponents}async function XT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(br,"Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(H(br,"Using default OnlineComponentProvider"),await e_(t,new Nd))),t._onlineComponents}function Gx(t){return XT(t).then(e=>e.syncEngine)}async function Qx(t){const e=await XT(t),n=e.eventManager;return n.onListen=xx.bind(null,e.syncEngine),n.onUnlisten=Vx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Dx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Lx.bind(null,e.syncEngine),n}function Yx(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Wx({next:m=>{d.Nu(),o.enqueueAndForget(()=>Ix(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Cx(Jf(l.path),d,{includeMetadataChanges:!0,qa:!0});return Tx(s,p)}(await Qx(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firestore.googleapis.com",n_=!0;class r_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ZT,this.ssl=n_}else this.host=e.host,this.ssl=e.ssl??n_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SN)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ak("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YP;switch(r.type){case"firstParty":return new ek(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(H("ComponentProvider","Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}function Xx(t,e,n,r={}){var c;t=_i(t,gp);const i=Is(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Kw(`https://${l}`),Gw("Firestore",!0)),s.host!==ZT&&s.host!==l&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Nr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=lt.MOCK_USER;else{d=oC(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new lt(m)}t._authCredentials=new XP(new HE(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yp(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ta(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(pa(n,He._jsonSchema))return new He(e,r||null,new Y(Pe.fromString(n.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Fe("string",He._jsonSchemaVersion),referencePath:Fe("string")};class ta extends yp{constructor(e,n,r){super(e,n,Jf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new Y(e))}withConverter(e){return new ta(this.firestore,e,this._path)}}function el(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Wf.newId()),ok("doc","path",e),t instanceof gp){const r=Pe.fromString(e,...n);return yy(r),new He(t,null,new Y(r))}{if(!(t instanceof He||t instanceof ta))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return yy(r),new He(t.firestore,t instanceof ta?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="AsyncQueue";class s_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LT(this,"async_queue_retry"),this._c=()=>{const r=sh();r&&H(i_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Cr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ps(e))throw e;H(i_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,qn("INTERNAL UNHANDLED ERROR: ",o_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=hp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:o_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function o_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ju extends gp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new s_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new s_(e),this._firestoreClient=void 0,await e}}}function Jx(t,e){const n=typeof t=="object"?t:Of(),r=typeof t=="string"?t:iu,i=Ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iC("firestore");s&&Xx(i,...s)}return i}function eI(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Zx(t),t._firestoreClient}function Zx(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new _k(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,JT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new qx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(rt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pa(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Fe("string",zt._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wn._jsonSchemaVersion}}static fromJSON(e){if(pa(e,wn._jsonSchema))return new wn(e.latitude,e.longitude)}}wn._jsonSchemaVersion="firestore/geoPoint/1.0",wn._jsonSchema={type:Fe("string",wn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pa(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new En(e.vectorValues);throw new K(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:Fe("string",En._jsonSchemaVersion),vectorValues:Fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=/^__.*__$/;class tD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}class tI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new vp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(nI(this.Ac)&&eD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class nD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}Cc(e,n,r,i=!1){return new vp({Ac:e,methodName:n,Dc:r,path:et.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rI(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new nD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);wp("Data must be an object, but it was:",o,r);const l=iI(r,o);let u,c;if(s.merge)u=new Vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=xd(e,p,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oI(d,m)||d.push(m)}u=new Vt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new tD(new It(l),u,c)}class ec extends _p{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function iD(t,e,n,r){const i=t.Cc(1,e,n);wp("Data must be an object, but it was:",i,r);const s=[],o=It.empty();$r(r,(u,c)=>{const d=Ep(e,u,n);c=qe(c);const p=i.yc(d);if(c instanceof ec)s.push(d);else{const m=tc(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Vt(s);return new tI(o,l,i.fieldTransforms)}function sD(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[xd(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xd(e,s[m])),u.push(s[m+1]);const c=[],d=It.empty();for(let m=l.length-1;m>=0;--m)if(!oI(c,l[m])){const I=l[m];let N=u[m];N=qe(N);const k=o.yc(I);if(N instanceof ec)c.push(I);else{const P=tc(N,k);P!=null&&(c.push(I),d.set(I,P))}}const p=new Vt(c);return new tI(d,p,o.fieldTransforms)}function tc(t,e){if(sI(t=qe(t)))return wp("Unsupported field value:",e,t),iI(t,e);if(t instanceof _p)return function(r,i){if(!nI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=tc(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:cu(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cu(i.serializer,s)}}if(r instanceof wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:ST(i.serializer,r._byteString)};if(r instanceof He){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:np(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof En)return function(o,l){return{mapValue:{fields:{[ZE]:{stringValue:eT},[su]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Zf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${qf(r)}`)}(t,e)}function iI(t,e){const n={};return KE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=tc(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof wn||t instanceof zt||t instanceof He||t instanceof _p||t instanceof En)}function wp(t,e,n){if(!sI(n)||!WE(n)){const r=qf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function xd(t,e,n){if((e=qe(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return Ep(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const oD=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(oD)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zu(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function oI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aD extends aI{data(){return super.data()}}function lI(t,e){return typeof e=="string"?Ep(t,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}class lD{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[su].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new En(n)}convertGeoPoint(e){return new wn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ye(NT(r),9688,{name:e});const i=new Xo(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends aI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ui._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",ui._jsonSchema={type:Fe("string",ui._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class Sl extends ui{data(e={}){return super.data(e)}}class Po{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ho(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Sl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ho(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:cD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){t=_i(t,He);const e=_i(t.firestore,Ju);return Yx(eI(e),t._key).then(n=>fD(e,t,n))}Po._jsonSchemaVersion="firestore/querySnapshot/1.0",Po._jsonSchema={type:Fe("string",Po._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class hD extends lD{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function ah(t,e,n){t=_i(t,He);const r=_i(t.firestore,Ju),i=uD(t.converter,e);return uI(r,[rD(rI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_n.none())])}function dD(t,e,n,...r){t=_i(t,He);const i=_i(t.firestore,Ju),s=rI(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Zu?sD(s,"updateDoc",t._key,e,n,r):iD(s,"updateDoc",t._key,e),uI(i,[o.toMutation(t._key,_n.exists(!0))])}function uI(t,e){return function(r,i){const s=new Cr;return r.asyncQueue.enqueueAndForget(async()=>bx(await Gx(r),i,s)),s.promise}(eI(t),e)}function fD(t,e,n){const r=n.docs.get(e._key),i=new hD(t);return new ui(t,i,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Cs=i})(Ss),Tn(new on("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ju(new JP(r.getProvider("auth-internal")),new tk(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt(fy,py,e),Wt(fy,py,"esm2020")})();var pD="firebase",mD="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(pD,mD,"app");const cI="@firebase/installations",Tp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=1e4,dI=`w:${Tp}`,fI="FIS_v2",gD="https://firebaseinstallations.googleapis.com/v1",yD=60*60*1e3,_D="installations",vD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wi=new Si(_D,vD,wD);function pI(t){return t instanceof an&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI({projectId:t}){return`${gD}/projects/${t}/installations`}function gI(t){return{token:t.token,requestStatus:2,expiresIn:TD(t.expiresIn),creationTime:Date.now()}}async function yI(t,e){const r=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ED(t,{refreshToken:e}){const n=_I(t);return n.append("Authorization",ID(e)),n}async function vI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function TD(t){return Number(t.replace("s","000"))}function ID(t){return`${fI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mI(t),i=_I(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:fI,appId:t.appId,sdkVersion:dI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await vI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:gI(c.authToken)}}else throw await yI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^[cdef][\w-]{21}$/,Dd="";function RD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PD(t);return CD.test(n)?n:Dd}catch{return Dd}}function PD(t){return AD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new Map;function TI(t,e){const n=nc(t);II(n,e),kD(n,e)}function II(t,e){const n=EI.get(t);if(n)for(const r of n)r(e)}function kD(t,e){const n=ND();n&&n.postMessage({key:t,fid:e}),xD()}let oi=null;function ND(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{II(t.data.key,t.data.fid)}),oi}function xD(){EI.size===0&&oi&&(oi.close(),oi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD="firebase-installations-database",OD=1,Ei="firebase-installations-store";let lh=null;function Ip(){return lh||(lh=eE(DD,OD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}})),lh}async function mu(t,e){const n=nc(t),i=(await Ip()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&TI(t,e.fid),e}async function SI(t){const e=nc(t),r=(await Ip()).transaction(Ei,"readwrite");await r.objectStore(Ei).delete(e),await r.done}async function rc(t,e){const n=nc(t),i=(await Ip()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&TI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t){let e;const n=await rc(t.appConfig,r=>{const i=VD(r),s=LD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VD(t){const e=t||{fid:RD(),registrationStatus:0};return AI(e)}function LD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MD(t)}:{installationEntry:e}}async function bD(t,e){try{const n=await SD(t,e);return mu(t.appConfig,n)}catch(n){throw pI(n)&&n.customData.serverCode===409?await SI(t.appConfig):await mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MD(t){let e=await l_(t.appConfig);for(;e.registrationStatus===1;)await wI(100),e=await l_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sp(t);return r||n}return e}function l_(t){return rc(t,e=>{if(!e)throw wi.create("installation-not-found");return AI(e)})}function AI(t){return FD(t)?{fid:t.fid,registrationStatus:0}:t}function FD(t){return t.registrationStatus===1&&t.registrationTime+hI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD({appConfig:t,heartbeatServiceProvider:e},n){const r=jD(t,n),i=ED(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:dI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await vI(()=>fetch(r,l));if(u.ok){const c=await u.json();return gI(c)}else throw await yI("Generate Auth Token",u)}function jD(t,{fid:e}){return`${mI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e=!1){let n;const r=await rc(t.appConfig,s=>{if(!CI(s))throw wi.create("not-registered");const o=s.authToken;if(!e&&$D(o))return s;if(o.requestStatus===1)return n=BD(t,e),s;{if(!navigator.onLine)throw wi.create("app-offline");const l=WD(s);return n=zD(t,l),l}});return n?await n:r.authToken}async function BD(t,e){let n=await u_(t.appConfig);for(;n.authToken.requestStatus===1;)await wI(100),n=await u_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ap(t,e):r}function u_(t){return rc(t,e=>{if(!CI(e))throw wi.create("not-registered");const n=e.authToken;return qD(n)?{...e,authToken:{requestStatus:0}}:e})}async function zD(t,e){try{const n=await UD(t,e),r={...e,authToken:n};return await mu(t.appConfig,r),n}catch(n){if(pI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await SI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await mu(t.appConfig,r)}throw n}}function CI(t){return t!==void 0&&t.registrationStatus===2}function $D(t){return t.requestStatus===2&&!HD(t)}function HD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yD}function WD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function qD(t){return t.requestStatus===1&&t.requestTime+hI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sp(e);return r?r.catch(console.error):Ap(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e=!1){const n=t;return await QD(n),(await Ap(n,e)).token}async function QD(t){const{registrationPromise:e}=await Sp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){if(!t||!t.options)throw uh("App Configuration");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uh(t){return wi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="installations",XD="installations-internal",JD=t=>{const e=t.getProvider("app").getImmediate(),n=YD(e),r=Ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZD=t=>{const e=t.getProvider("app").getImmediate(),n=Ai(e,RI).getImmediate();return{getId:()=>KD(n),getToken:i=>GD(n,i)}};function e2(){Tn(new on(RI,JD,"PUBLIC")),Tn(new on(XD,ZD,"PRIVATE"))}e2();Wt(cI,Tp);Wt(cI,Tp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="analytics",t2="firebase_id",n2="origin",r2=60*1e3,i2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new bu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Si("analytics","Analytics",s2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){if(!t.startsWith(Cp)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function PI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function a2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function l2(t,e){const n=a2("firebase-js-sdk-policy",{createScriptURL:o2}),r=document.createElement("script"),i=`${Cp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function u2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function c2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await PI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){gt.error(l)}t("config",i,s)}async function h2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await PI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){gt.error(s)}}function d2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await h2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await c2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){gt.error(l)}}return i}function f2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=d2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function p2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=30,g2=1e3;class y2{constructor(e={},n=g2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kI=new y2;function _2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function v2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:_2(n)},i=i2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function w2(t,e=kI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw bt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new I2;return setTimeout(async()=>{l.abort()},r2),NI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function NI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=kI){var l;const{appId:s,measurementId:o}=t;try{await E2(r,e)}catch(u){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await v2(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!T2(c)){if(i.deleteThrottleMetadata(s),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Fg(n,i.intervalMillis,m2):Fg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),gt.debug(`Calling attemptFetch again in ${d} millis`),NI(t,p,r,i)}}function E2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function T2(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class I2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function S2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function A2(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(){if(Yw())try{await Xw()}catch(t){return gt.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function R2(t,e,n,r,i,s,o){const l=w2(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>gt.error(m)),e.push(l);const u=C2().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);p2(s)||l2(s,c.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[n2]="firebase",p.update=!0,d!=null&&(p[t2]=d),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.app=e}_delete(){return delete os[this.app.options.appId],Promise.resolve()}}let os={},c_=[];const h_={};let ch="dataLayer",k2="gtag",d_,Rp,f_=!1;function N2(){const t=[];if(Qw()&&t.push("This is a browser extension environment."),mC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function x2(t,e,n){N2();const r=t.options.appId;if(!r)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(os[r]!=null)throw bt.create("already-exists",{id:r});if(!f_){u2(ch);const{wrappedGtag:s,gtagCore:o}=f2(os,c_,h_,ch,k2);Rp=s,d_=o,f_=!0}return os[r]=R2(t,c_,h_,e,d_,ch,n),new P2(t)}function D2(t=Of()){t=qe(t);const e=Ai(t,gu);return e.isInitialized()?e.getImmediate():O2(t)}function O2(t,e={}){const n=Ai(t,gu);if(n.isInitialized()){const i=n.getImmediate();if(Nr(e,n.getOptions()))return i;throw bt.create("already-initialized")}return n.initialize({options:e})}function V2(t,e,n){t=qe(t),A2(Rp,os[t.app.options.appId],e,n).catch(r=>gt.error(r))}function L2(t,e,n,r){t=qe(t),S2(Rp,os[t.app.options.appId],e,n,r).catch(i=>gt.error(i))}const p_="@firebase/analytics",m_="0.10.19";function b2(){Tn(new on(gu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return x2(r,i,n)},"PUBLIC")),Tn(new on("analytics-internal",t,"PRIVATE")),Wt(p_,m_),Wt(p_,m_,"esm2020");function t(e){try{const n=e.getProvider(gu).getImmediate();return{logEvent:(r,i,s)=>L2(n,r,i,s),setUserProperties:(r,i)=>V2(n,r,i)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}b2();const M2={apiKey:"AIzaSyBDSsChB4e5ShbTO4c_uQeBW1a38CVSthI",authDomain:"medical-application-6bcb2.firebaseapp.com",projectId:"medical-application-6bcb2",storageBucket:"medical-application-6bcb2.firebasestorage.app",messagingSenderId:"958025231259",appId:"1:958025231259:web:d1675f0486d01cade24f3e",measurementId:"G-35SSLCBGFE"},Pp=tE(M2),to=GP(Pp),tl=Jx(Pp);typeof window<"u"&&D2(Pp);const xI=O.createContext(void 0);function DI(){const t=O.useContext(xI);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function F2({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0),l=async k=>{var P,w;try{const _=el(tl,"users",k.uid),S=await a_(_);if(S.exists()){const V=S.data();i({apiKeys:V.apiKeys||{},createdAt:(P=V.createdAt)==null?void 0:P.toDate(),updatedAt:(w=V.updatedAt)==null?void 0:w.toDate()})}else{const V={apiKeys:{},createdAt:new Date,updatedAt:new Date};await ah(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),i(V)}}catch(_){console.error("Error fetching user data:",_),i(null)}};O.useEffect(()=>bR(to,async P=>{n(P),P?await l(P):i(null),o(!1)}),[]);const N={currentUser:e,userData:r,loading:s,signUp:async(k,P)=>{const _=(await DR(to,k,P)).user,S=el(tl,"users",_.uid);await ah(S,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(_)},signIn:async(k,P)=>{await OR(to,k,P)},signInWithGoogle:async()=>{const k=new On,w=(await rP(to,k)).user,_=el(tl,"users",w.uid);(await a_(_)).exists()||await ah(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(w)},logout:async()=>{await MR(to),i(null)},updateApiKeys:async k=>{if(!e)throw new Error("User must be logged in to update API keys");try{const P=el(tl,"users",e.uid);await dD(P,{apiKeys:k,updatedAt:new Date}),i(w=>({...w,apiKeys:k,updatedAt:new Date}))}catch(P){throw console.error("Error updating API keys:",P),P}},refreshUserData:async()=>{e&&await l(e)}};return R.jsx(xI.Provider,{value:N,children:t})}const Od="medical-interview-realtime-keys",g_="You are playing the role of a patient in a clinical interview simulation. Answer as a real patient would, keeping responses concise but natural. If you need to clarify information, ask the interviewer a follow-up question.",Xr={openai:"",gemini:""},U2="gpt-4o-realtime-preview",j2="https://api.openai.com/v1/realtime",B2="gemini-live-2.5-flash-preview",z2="https://generativelanguage.googleapis.com/v1beta/models",$2={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};function nl(t){if(t)return{openai:t.openai??Xr.openai??"",gemini:t.gemini??Xr.gemini??""};if(typeof window>"u")return{...Xr};try{const e=window.localStorage.getItem(Od);if(!e)return{...Xr};const n=JSON.parse(e);return{openai:n.openai??Xr.openai??"",gemini:n.gemini??Xr.gemini??""}}catch{return{...Xr}}}const H2={openai:{id:"openai",label:"ChatGPT Realtime mini (OpenAI)",createAnswer:async({apiKey:t,offer:e,systemPrompt:n})=>{const r=`${j2}?model=${encodeURIComponent(U2)}`,i={"Content-Type":"application/sdp"};i.Authorization=`Bearer ${t}`;const s=await fetch(r,{method:"POST",headers:i,body:e.sdp??""}),o=await s.text();if(!s.ok)throw new Error(`OpenAI Realtime API error: ${o||s.statusText||"unknown error"}`);return o},dataChannelLabel:"oai-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"response.create",response:{conversation:"default",instructions:n}}))}catch(r){console.warn("Failed to send OpenAI instruction payload:",r)}},supportsFeedback:!0},gemini:{id:"gemini",label:"Gemini Live 2.5 Flash (Google)",createAnswer:async({apiKey:t,offer:e})=>{var u;const n=`${z2}/${encodeURIComponent(B2)}:connect`;let r=n;r=`${n}?key=${encodeURIComponent(t)}`;const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e.sdp??""});if((s.headers.get("content-type")??"").includes("application/json")){const c=await s.json();if(!s.ok){const p=((u=c==null?void 0:c.error)==null?void 0:u.message)||s.statusText||"unknown error";throw new Error(`Gemini live API error: ${p}`)}const d=(c==null?void 0:c.sdp)??(c==null?void 0:c.answer)??(c==null?void 0:c.sessionDescription);if(typeof d!="string"||!d)throw new Error("Gemini live API responded without a valid session description.");return d}const l=await s.text();if(!s.ok)throw new Error(`Gemini live API error: ${l||s.statusText||"unknown error"}`);return l},dataChannelLabel:"client-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"input_text",text:n}))}catch(r){console.warn("Failed to send Gemini instruction payload:",r);try{t.send(n)}catch(i){console.warn("Fallback Gemini instruction send failed:",i)}}},supportsFeedback:!0}};function OI(){const{currentUser:t,userData:e,updateApiKeys:n}=DI(),[r,i]=O.useState("openai"),[s,o]=O.useState("idle"),[l,u]=O.useState(null),[c,d]=O.useState(g_),p=O.useMemo(()=>t&&(e!=null&&e.apiKeys)?nl(e.apiKeys):nl(),[t,e]),[m,I]=O.useState(p),[N,k]=O.useState(null),[P,w]=O.useState(null),[_,S]=O.useState([]),[V,M]=O.useState([]),U=O.useRef(!1),v=O.useRef(null),y=O.useRef(null),E=O.useRef(null),A=O.useRef(null),C=O.useRef("openai"),x=O.useRef(g_),T=O.useRef(new Map),re=O.useRef(new Map);O.useEffect(()=>{if(t&&(e!=null&&e.apiKeys)){U.current=!0;const ce=nl(e.apiKeys);I(ce),setTimeout(()=>{U.current=!1},0)}else if(!t){U.current=!0;const ce=nl();I(ce),setTimeout(()=>{U.current=!1},0)}},[t,e]),O.useEffect(()=>{if(!U.current)if(t&&n)n(m).catch(ce=>{console.warn("Failed to save API keys to Firebase:",ce);try{typeof window<"u"&&window.localStorage.setItem(Od,JSON.stringify(m))}catch(me){console.warn("Failed to persist realtime API keys to localStorage:",me)}});else{if(typeof window>"u")return;try{window.localStorage.setItem(Od,JSON.stringify(m))}catch(ce){console.warn("Failed to persist realtime API keys:",ce)}}},[m,t,n]),O.useEffect(()=>{C.current=r},[r]),O.useEffect(()=>{x.current=c},[c]);const de=O.useCallback((ce="idle")=>{const me=v.current;if(me)try{me.onconnectionstatechange=null,me.onicecandidate=null,me.ontrack=null,me.close()}catch(X){console.warn("Peer connection close error:",X)}if(v.current=null,y.current)try{const X=y.current;X.onopen=null,X.onmessage=null,X.onclose=null,X.onerror=null,X.close()}catch(X){console.warn("Data channel close error:",X)}y.current=null,E.current&&E.current.getTracks().forEach(X=>X.stop()),E.current=null,w(null),A.current&&A.current.getTracks().forEach(X=>X.stop()),A.current=null,k(null),T.current.clear(),re.current.clear(),S([]),M([]),o(ce)},[o]),it=O.useCallback(()=>{u(null),de("idle")},[de]),Pt=O.useCallback(ce=>{var me;return!!((me=m[ce])!=null&&me.trim())},[m]),$=O.useCallback((ce,me)=>{I(X=>({...X,[ce]:me}))},[]),B=O.useCallback(ce=>{const me=y.current;if(!me||me.readyState!=="open")return;const X=ce.trim();if(!X)return;const wt=`The learner just said: """${X}""". Provide concise, constructive grammar and expression feedback in Japanese. Focus on one or two key corrections, and include a suggested improved sentence. Respond only as plain text, start your message with "[FEEDBACK]" and do not output audio.`;try{C.current==="openai"?me.send(JSON.stringify({type:"response.create",response:{conversation:"feedback",modalities:["text"],instructions:wt}})):me.send(JSON.stringify({type:"input_text",text:`[FEEDBACK_REQUEST] ${wt}`}))}catch(ue){console.warn("Failed to request feedback:",ue)}},[]),Q=O.useCallback(ce=>{S(me=>[...me,ce].slice(-50))},[]),W=O.useCallback(ce=>{M(me=>[...me,ce].slice(-50))},[]),ge=O.useCallback((ce,me)=>{var Rn,Pn,Qn,Wr;const X=ce.data;let wt=null;if(typeof X=="string")wt=X;else if(X instanceof ArrayBuffer)try{wt=new TextDecoder().decode(X)}catch{wt=null}if(!wt)return;let ue=null;try{ue=JSON.parse(wt)}catch{ue=null}if(!ue||typeof ue!="object"||!ue.type){const fe=wt.trim();fe.startsWith("[FEEDBACK]")&&W({id:`feedback-${Date.now()}`,provider:C.current,text:fe.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()});return}switch(ue.type){case"conversation.item.created":{const fe=(Rn=ue.item)==null?void 0:Rn.id;if(typeof fe=="string"){const G=(Pn=ue.item)==null?void 0:Pn.role;T.current.set(fe,{role:G==="user"||G==="assistant"||G==="system"?G:"assistant",text:""})}break}case"conversation.item.deleted":{const fe=ue.item_id;typeof fe=="string"&&T.current.delete(fe);break}case"conversation.item.input_audio_transcription.delta":{const fe=ue.item_id,G=ue.delta;if(typeof fe=="string"&&typeof G=="string"){const ne=T.current.get(fe)||{role:"assistant",text:""};ne.text=(ne.text||"")+G,T.current.set(fe,ne)}break}case"conversation.item.input_audio_transcription.completed":{const fe=ue.item_id;if(typeof fe=="string"){const G=T.current.get(fe);if((G==null?void 0:G.role)==="user"&&G.text.trim()){const ne=G.text.trim();Q({id:`${fe}-transcript`,role:"user",text:ne,timestamp:Date.now()}),me&&B(ne)}}break}case"response.output_text.delta":{const fe=typeof ue.response_id=="string"?ue.response_id:typeof((Qn=ue.response)==null?void 0:Qn.id)=="string"?ue.response.id:null,G=ue.delta;if(fe&&typeof G=="string"){const ne=re.current.get(fe)||{text:"",isFeedback:!1};ne.text+=G,!ne.isFeedback&&ne.text.trim().startsWith("[FEEDBACK]")&&(ne.isFeedback=!0),re.current.set(fe,ne)}break}case"response.completed":{const fe=typeof ue.response_id=="string"?ue.response_id:typeof((Wr=ue.response)==null?void 0:Wr.id)=="string"?ue.response.id:null;if(fe){const G=re.current.get(fe);if(G){const ne=G.text.trim();G.isFeedback&&ne?W({id:fe,provider:C.current,text:ne.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()}):ne&&Q({id:fe,role:"assistant",text:ne,timestamp:Date.now()}),re.current.delete(fe)}}break}}},[W,Q,B]),An=O.useCallback(async({provider:ce}={})=>{var Qn,Wr,fe;if(!((Qn=navigator.mediaDevices)!=null&&Qn.getUserMedia)){u("このブラウザではマイクへのアクセスがサポートされていません。"),o("error");return}const me=ce??r,X=H2[me];if(!X){u("対応していないプロバイダーが選択されています。"),o("error");return}const wt=(Wr=m[me])==null?void 0:Wr.trim();if(!wt){u("APIキーが設定されていません。設定後に再度お試しください。"),o("error");return}if(v.current){console.warn("Call already active; ignoring duplicate start request.");return}C.current=me,i(me),o("connecting"),u(null),S([]),M([]),T.current.clear(),re.current.clear();const ue=new RTCPeerConnection($2);v.current=ue,ue.addEventListener("connectionstatechange",()=>{if(!v.current)return;const G=v.current.connectionState;G==="connected"?o("connected"):G==="failed"?(u("接続が失敗しました。ネットワーク環境をご確認ください。"),de("error")):(G==="disconnected"||G==="closed")&&de("idle")}),ue.addEventListener("track",G=>{const[ne]=G.streams;ne&&(A.current=ne,k(ne))}),ue.addEventListener("datachannel",G=>{var Ke;const ne=G.channel;if(!ne)return;y.current=ne;const we=Qt=>ge(Qt,X.supportsFeedback);ne.addEventListener("message",we),ne.addEventListener("close",()=>{ne.removeEventListener("message",we),y.current===ne&&(y.current=null)}),ne.addEventListener("error",Qt=>{console.warn("Data channel error:",Qt)}),ne.readyState==="open"?(Ke=X.onDataChannelOpen)==null||Ke.call(X,ne,x.current):X.onDataChannelOpen&&ne.addEventListener("open",()=>{var Qt;return(Qt=X.onDataChannelOpen)==null?void 0:Qt.call(X,ne,x.current)},{once:!0})});try{const G=await navigator.mediaDevices.getUserMedia({audio:!0});E.current=G,w(G),G.getTracks().forEach(ne=>ue.addTrack(ne,E.current))}catch(G){console.error("Failed to obtain microphone:",G),u("マイクへアクセスできませんでした。権限設定をご確認ください。"),de("error");return}let Rn=null;if(X.dataChannelLabel)try{Rn=ue.createDataChannel(X.dataChannelLabel),y.current=Rn;const G=Rn,ne=we=>ge(we,X.supportsFeedback);G.addEventListener("message",ne),G.addEventListener("close",()=>{G.removeEventListener("message",ne),y.current===G&&(y.current=null)}),G.addEventListener("error",we=>{console.warn("Data channel error:",we)}),G.readyState==="open"?(fe=X.onDataChannelOpen)==null||fe.call(X,G,x.current):X.onDataChannelOpen&&G.addEventListener("open",()=>{var we;return(we=X.onDataChannelOpen)==null?void 0:we.call(X,G,x.current)},{once:!0})}catch(G){console.warn("Data channel creation failed:",G)}const Pn=await ue.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!1});await ue.setLocalDescription(Pn);try{const ne={type:"answer",sdp:await X.createAnswer({apiKey:wt,offer:Pn,systemPrompt:x.current})};await ue.setRemoteDescription(ne)}catch(G){console.error("Realtime call negotiation failed:",G),u(G instanceof Error?G.message:String(G)),de("error");return}},[m,de,ge,r,i]),vt=O.useCallback(()=>u(null),[]),Cn=O.useMemo(()=>({provider:r,status:s,error:l,remoteStream:N,localStream:P,systemPrompt:c,transcriptEntries:_,feedbackEntries:V}),[r,s,l,N,P,c,_,V]),kt=O.useCallback(ce=>m[ce]??"",[m]);return O.useEffect(()=>()=>{de("idle")},[de]),{...Cn,startCall:An,stopCall:it,setProvider:i,setSystemPrompt:d,hasApiKey:Pt,setApiKey:$,getApiKey:kt,clearError:vt,feedbackEntries:V,transcriptEntries:_}}const W2=({open:t,onClose:e,contentMode:n,setContentMode:r})=>{const{theme:i,setTheme:s}=GA(),{layout:o,setLayout:l}=Vu(),{currentUser:u,signUp:c,signIn:d,signInWithGoogle:p,logout:m}=DI(),{setApiKey:I,getApiKey:N}=OI(),[k,P]=O.useState(!1),[w,_]=O.useState(!1),[S,V]=O.useState(!1),[M,U]=O.useState(""),[v,y]=O.useState(""),[E,A]=O.useState(""),[C,x]=O.useState(""),[T,re]=O.useState(""),[de,it]=O.useState(!1);O.useEffect(()=>{if(w){const W=N("openai"),ge=N("gemini");A(W),x(ge)}else A(""),x("")},[w]);const Pt=()=>{I("openai",E),I("gemini",C),_(!1)},$=async W=>{W.preventDefault(),re(""),it(!0);try{S?await c(M,v):await d(M,v),U(""),y(""),P(!1),re("")}catch(ge){re(ge.message||"エラーが発生しました")}finally{it(!1)}},B=async()=>{re(""),it(!0);try{await p(),P(!1),re("")}catch(W){re(W.message||"Googleログインに失敗しました")}finally{it(!1)}},Q=async()=>{try{await m(),P(!1)}catch(W){re(W.message||"ログアウトに失敗しました")}};return t?R.jsx("div",{className:"settings-modal",onClick:W=>W.target===W.currentTarget&&e(),children:R.jsxs("div",{className:"settings-content",children:[R.jsxs("div",{className:"settings-header",children:[R.jsx("h2",{children:"設定"}),R.jsx("button",{className:"close-button",onClick:e,"aria-label":"閉じる",children:"×"})]}),R.jsxs("div",{className:"settings-item",children:[R.jsx("span",{className:"settings-label",children:"ダークモード"}),R.jsxs("label",{className:"toggle-switch",children:[R.jsx("input",{type:"checkbox",checked:i==="dark",onChange:W=>s(W.target.checked?"dark":"auto")}),R.jsx("span",{className:"toggle-slider"})]})]}),R.jsxs("div",{className:"settings-item",children:[R.jsx("span",{className:"settings-label",children:"コンテンツモード"}),R.jsx("div",{className:"layout-options",children:["react","html"].map(W=>R.jsxs("label",{className:"radio-option",children:[R.jsx("input",{type:"radio",name:"contentMode",value:W,checked:n===W,onChange:()=>r(W)}),R.jsx("span",{children:W==="react"?"React表示":"HTML表示"})]},W))})]}),R.jsxs("div",{className:"settings-item",children:[R.jsx("span",{className:"settings-label",children:"レイアウト"}),R.jsx("div",{className:"layout-options",children:["auto","two-column","single-column"].map(W=>R.jsxs("label",{className:"radio-option",children:[R.jsx("input",{type:"radio",name:"layoutMode",value:W,checked:o===W,onChange:()=>l(W)}),R.jsx("span",{children:W==="auto"?"自動":W==="two-column"?"2段組":"1段組"})]},W))})]}),R.jsxs("div",{className:"settings-item settings-api-keys-section",children:[R.jsxs("div",{className:"settings-auth-header",children:[R.jsx("span",{className:"settings-label",children:"APIキー"}),!w&&R.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{_(!0),re("")},children:"APIキーを設定"})]}),w&&R.jsxs("div",{className:"settings-auth-content",children:[R.jsxs("div",{className:"auth-field",children:[R.jsx("label",{htmlFor:"api-key-openai",className:"auth-label",children:"OpenAI APIキー"}),R.jsx("input",{id:"api-key-openai",type:"password",className:"auth-input",value:E,onChange:W=>A(W.target.value),placeholder:"sk- で始まるキーを入力",autoComplete:"off",spellCheck:!1}),R.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),R.jsxs("div",{className:"auth-field",children:[R.jsx("label",{htmlFor:"api-key-gemini",className:"auth-label",children:"Gemini APIキー"}),R.jsx("input",{id:"api-key-gemini",type:"password",className:"auth-input",value:C,onChange:W=>x(W.target.value),placeholder:"AI... で始まるキーを入力",autoComplete:"off",spellCheck:!1}),R.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),R.jsxs("div",{className:"settings-api-keys-actions",children:[R.jsx("button",{type:"button",className:"auth-button auth-button-primary",onClick:Pt,children:"保存"}),R.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{_(!1),re("")},children:"キャンセル"})]}),R.jsx("p",{className:"auth-hint",style:{marginTop:"12px",fontSize:"12px"},children:u?"ログイン中です。APIキーはFirebaseに保存されます。":"ログインしていません。APIキーはブラウザのLocalStorageにのみ保存されます。"})]})]}),R.jsxs("div",{className:"settings-item settings-auth-section",children:[R.jsxs("div",{className:"settings-auth-header",children:[R.jsx("span",{className:"settings-label",children:"アカウント"}),!k&&R.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{P(!0),re("")},children:u?"アカウント情報":"ログイン"})]}),k&&R.jsx("div",{className:"settings-auth-content",children:u?R.jsxs("div",{className:"auth-content",children:[R.jsxs("div",{className:"auth-user-info",children:[R.jsx("p",{className:"auth-email",children:u.email}),R.jsx("p",{className:"auth-hint",children:"ログイン中です。APIキーはFirebaseに保存されます。"})]}),R.jsx("button",{className:"auth-button auth-button-logout",onClick:Q,disabled:de,children:"ログアウト"}),R.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{P(!1),re("")},children:"閉じる"})]}):R.jsxs("div",{children:[R.jsxs("form",{onSubmit:$,className:"auth-form",children:[T&&R.jsx("div",{className:"auth-error",children:T}),R.jsxs("div",{className:"auth-field",children:[R.jsx("label",{htmlFor:"auth-email",className:"auth-label",children:"メールアドレス"}),R.jsx("input",{id:"auth-email",type:"email",className:"auth-input",value:M,onChange:W=>U(W.target.value),required:!0,autoComplete:"email",placeholder:"example@email.com"})]}),R.jsxs("div",{className:"auth-field",children:[R.jsx("label",{htmlFor:"auth-password",className:"auth-label",children:"パスワード"}),R.jsx("input",{id:"auth-password",type:"password",className:"auth-input",value:v,onChange:W=>y(W.target.value),required:!0,autoComplete:S?"new-password":"current-password",placeholder:"6文字以上",minLength:6})]}),R.jsx("button",{type:"submit",className:"auth-button auth-button-primary",disabled:de,children:de?"処理中...":S?"新規登録":"ログイン"}),R.jsx("div",{className:"auth-divider",children:R.jsx("span",{children:"または"})}),R.jsxs("button",{type:"button",className:"auth-button auth-button-google",onClick:B,disabled:de,children:[R.jsx("span",{className:"auth-google-icon",children:"🔍"}),"Googleでログイン"]}),R.jsx("div",{className:"auth-switch",children:R.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{V(!S),re("")},children:S?"既にアカウントをお持ちですか？ログイン":"アカウントをお持ちでない方は新規登録"})})]}),R.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{P(!1),re(""),U(""),y("")},children:"閉じる"})]})})]})]})}):null},q2=[{id:"openai",label:"ChatGPT Realtime mini",description:"OpenAI Realtime API を利用します。"},{id:"gemini",label:"Gemini Live 2.5 Flash",description:"Google Gemini Live API を利用します。"}],K2={idle:"未接続",connecting:"接続中…",connected:"通話中",error:"エラー"},G2=()=>{const[t,e]=O.useState(!1),{provider:n,status:r,error:i,remoteStream:s,localStream:o,systemPrompt:l,startCall:u,stopCall:c,setProvider:d,setSystemPrompt:p,hasApiKey:m,setApiKey:I,getApiKey:N,clearError:k,feedbackEntries:P,transcriptEntries:w}=OI(),_=O.useRef(null);O.useEffect(()=>{if(!_.current)return;const B=_.current;if(s){B.srcObject=s;const Q=()=>{B.play().catch(W=>console.warn("Autoplay prevented for remote stream:",W))};B.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA?Q():B.onloadedmetadata=Q}else B.pause(),B.srcObject=null},[s]);const S=O.useCallback(()=>{e(!0)},[]),V=O.useCallback(()=>{e(!1)},[]);O.useEffect(()=>{if(!t)return;const B=Q=>{Q.key==="Escape"&&V()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[t,V]);const M=O.useCallback(B=>{B.target===B.currentTarget&&V()},[V]),U=O.useCallback(B=>{k(),d(B)},[d,k]),v=O.useCallback(async()=>{await u({provider:n})},[u,n]),y=r==="connecting"||!m(n)||r==="connected",E=r!=="connected"&&r!=="connecting",A=O.useMemo(()=>K2[r]||r,[r]),C=N(n),x=O.useCallback(B=>{k(),I(n,B.target.value)},[n,I,k]),[T,re]=O.useState(0);O.useEffect(()=>{t&&re(P.length)},[t,P.length]);const de=Math.max(0,P.length-T),it=["call-launcher",r==="connected"?"is-active":"",de>0?"has-unread":""].filter(Boolean).join(" "),Pt=O.useCallback(()=>{c()},[c]),$=O.useCallback(B=>{const Q=new Date(B),W=Q.getHours().toString().padStart(2,"0"),ge=Q.getMinutes().toString().padStart(2,"0");return`${W}:${ge}`},[]);return R.jsxs(R.Fragment,{children:[R.jsxs("button",{type:"button",className:it,"aria-label":"音声ロールプレイを開始",onClick:S,children:["🎧",de>0&&R.jsx("span",{className:"call-launcher-badge",children:de>9?"9+":de})]}),(r==="connected"||r==="connecting")&&!t&&R.jsxs("div",{className:`call-mini-status call-mini-status-${r}`,children:[R.jsxs("div",{className:"call-mini-details",children:[R.jsx("span",{className:"call-mini-status-label",children:A}),de>0&&R.jsxs("span",{className:"call-mini-feedback",children:["フィードバック ",de]})]}),R.jsxs("div",{className:"call-mini-actions",children:[R.jsx("button",{type:"button",className:"call-mini-button",onClick:()=>e(!0),children:"設定を開く"}),R.jsx("button",{type:"button",className:"call-mini-button is-danger",onClick:Pt,disabled:r==="connecting",children:"終了"})]})]}),R.jsx("audio",{ref:_,className:"call-audio",autoPlay:!0,playsInline:!0,hidden:!0}),t&&R.jsx("div",{className:"call-modal",onMouseDown:M,children:R.jsxs("div",{className:"call-modal-content",role:"dialog","aria-modal":"true","aria-label":"音声ロールプレイ設定",children:[R.jsxs("div",{className:"call-modal-header",children:[R.jsxs("div",{children:[R.jsx("h2",{children:"音声ロールプレイ"}),R.jsx("p",{className:"call-subtitle",children:"右下のボタンから患者役との会話を開始できます。"})]}),R.jsx("button",{type:"button",className:"call-modal-close",onClick:V,"aria-label":"閉じる",children:"×"})]}),R.jsxs("div",{className:"call-status-row",children:[R.jsx("span",{className:`call-status-badge call-status-${r}`,children:A}),o&&r==="connected"&&R.jsx("span",{className:"call-mic-indicator",children:"🎤 マイク取得済み"})]}),R.jsxs("div",{className:"call-section",children:[R.jsx("h3",{children:"プロバイダー"}),R.jsx("div",{className:"call-provider-options",children:q2.map(B=>{const Q=B.id===n;return R.jsxs("button",{type:"button",className:`call-provider-button ${Q?"is-active":""}`,onClick:()=>U(B.id),children:[R.jsx("span",{className:"call-provider-label",children:B.label}),R.jsx("span",{className:"call-provider-description",children:B.description})]},B.id)})})]}),R.jsxs("div",{className:"call-section",children:[R.jsx("label",{className:"call-field-label",htmlFor:"call-api-key",children:"APIキー"}),R.jsx("input",{id:"call-api-key",className:"call-field-input",type:"password",placeholder:"sk- または AI... で始まるキーを入力",value:C,onChange:x,autoComplete:"off",spellCheck:!1}),R.jsx("p",{className:"call-hint",children:"入力したキーはブラウザの LocalStorage にのみ保存されます。 セキュリティ上、公開リポジトリへのコミットや画面共有などで漏洩しないよう十分ご注意ください。"})]}),R.jsxs("div",{className:"call-section",children:[R.jsx("label",{className:"call-field-label",htmlFor:"call-system-prompt",children:"患者の設定"}),R.jsx("textarea",{id:"call-system-prompt",className:"call-field-textarea",rows:6,value:l,onChange:B=>p(B.target.value)}),R.jsx("p",{className:"call-hint",children:"開始時にプロバイダーへ送信する指示です。診療科・性格・症状などを自由に設定できます。"})]}),w.length>0&&R.jsxs("div",{className:"call-section",children:[R.jsx("h3",{children:"会話ログ"}),R.jsx("ul",{className:"call-transcript-list",children:w.map(B=>R.jsxs("li",{className:"call-transcript-item",children:[R.jsxs("span",{className:"call-transcript-meta",children:[R.jsx("span",{className:`call-transcript-role role-${B.role}`,children:B.role==="user"?"医師":B.role==="assistant"?"患者":"システム"}),R.jsx("time",{dateTime:new Date(B.timestamp).toISOString(),children:$(B.timestamp)})]}),R.jsx("p",{className:"call-transcript-text",children:B.text})]},B.id))})]}),R.jsxs("div",{className:"call-section",children:[R.jsx("h3",{children:"リアルタイムフィードバック"}),P.length===0?R.jsx("p",{className:"call-hint",children:"通話中の発話内容に対するフィードバックがここに表示されます。 閉じている間も通話は継続されます。"}):R.jsx("ul",{className:"call-feedback-list",children:P.map(B=>R.jsxs("li",{className:"call-feedback-item",children:[R.jsxs("div",{className:"call-feedback-header",children:[R.jsx("span",{className:"call-feedback-provider",children:B.provider==="openai"?"OpenAI":"Gemini"}),R.jsx("time",{dateTime:new Date(B.timestamp).toISOString(),children:$(B.timestamp)})]}),R.jsx("p",{className:"call-feedback-text",children:B.text})]},B.id))})]}),i&&R.jsx("p",{className:"call-error",children:i}),R.jsxs("div",{className:"call-actions",children:[R.jsx("button",{type:"button",className:"call-button call-button-primary",onClick:v,disabled:y,children:r==="connecting"?"接続中…":"接続する"}),R.jsx("button",{type:"button",className:"call-button",onClick:c,disabled:E,children:"通話を終了"})]})]})})]})},hh=({title:t,level:e=2,defaultCollapsed:n=!0,children:r})=>{const[i,s]=O.useState(n),o=O.useId(),l=`h${e}`;return R.jsxs("div",{className:"section",children:[R.jsx(l,{className:i?"collapsed":"",role:"button","aria-expanded":!i,"aria-controls":o,onClick:()=>s(!i),children:t}),R.jsx("div",{id:o,className:`section-content ${i?"collapsed":"expanded"}`,"aria-hidden":i,children:r})]})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},na.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const y_="popstate";function Q2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Vd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yu(i)}return X2(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function VI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y2(){return Math.random().toString(36).substr(2,8)}function __(t,e){return{usr:t.state,key:t.key,idx:e}}function Vd(t,e,n,r){return n===void 0&&(n=null),na({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ns(e):e,{state:n,key:e&&e.key||r||Y2()})}function yu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function X2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=pr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(na({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=pr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:w})}function m(P,w){l=pr.Push;let _=Vd(k.location,P,w);c=d()+1;let S=__(_,c),V=k.createHref(_);try{o.pushState(S,"",V)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function I(P,w){l=pr.Replace;let _=Vd(k.location,P,w);c=d();let S=__(_,c),V=k.createHref(_);o.replaceState(S,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function N(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:yu(P);return _=_.replace(/ $/,"%20"),Ue(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(y_,p),u=P,()=>{i.removeEventListener(y_,p),u=null}},createHref(P){return e(i,P)},createURL:N,encodeLocation(P){let w=N(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(P){return o.go(P)}};return k}var v_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(v_||(v_={}));function J2(t,e,n){return n===void 0&&(n="/"),Z2(t,e,n)}function Z2(t,e,n,r){let i=typeof e=="string"?Ns(e):e,s=kp(i.pathname||"/",n);if(s==null)return null;let o=LI(t);eO(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=dO(s);l=uO(o[u],c)}return l}function LI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),LI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aO(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of bI(s.path))i(s,o,u)}),e}function bI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function eO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tO=/^:[\w-]+$/,nO=3,rO=2,iO=1,sO=10,oO=-2,w_=t=>t==="*";function aO(t,e){let n=t.split("/"),r=n.length;return n.some(w_)&&(r+=oO),e&&(r+=rO),n.filter(i=>!w_(i)).reduce((i,s)=>i+(tO.test(s)?nO:s===""?iO:sO),r)}function lO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uO(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=cO({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Rr([s,p.pathname]),pathnameBase:gO(Rr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Rr([s,p.pathnameBase]))}return o}function cO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const N=l[p];return I&&!N?c[m]=void 0:c[m]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function hO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),VI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dO(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return VI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ns(t):t;return{pathname:n?n.startsWith("/")?n:pO(n,e):e,search:yO(r),hash:_O(i)}}function pO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function MI(t,e){let n=mO(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function FI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ns(t):(i=na({},t),Ue(!i.pathname||!i.pathname.includes("?"),dh("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),dh("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),dh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=fO(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),gO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_O=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const UI=["post","put","patch","delete"];new Set(UI);const wO=["get",...UI];new Set(wO);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ra.apply(this,arguments)}const Np=O.createContext(null),EO=O.createContext(null),Pi=O.createContext(null),ic=O.createContext(null),ki=O.createContext({outlet:null,matches:[],isDataRoute:!1}),jI=O.createContext(null);function TO(t,e){let{relative:n}=e===void 0?{}:e;va()||Ue(!1);let{basename:r,navigator:i}=O.useContext(Pi),{hash:s,pathname:o,search:l}=zI(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function va(){return O.useContext(ic)!=null}function sc(){return va()||Ue(!1),O.useContext(ic).location}function BI(t){O.useContext(Pi).static||O.useLayoutEffect(t)}function IO(){let{isDataRoute:t}=O.useContext(ki);return t?bO():SO()}function SO(){va()||Ue(!1);let t=O.useContext(Np),{basename:e,future:n,navigator:r}=O.useContext(Pi),{matches:i}=O.useContext(ki),{pathname:s}=sc(),o=JSON.stringify(MI(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return BI(()=>{l.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=FI(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Rr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function zI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Pi),{matches:i}=O.useContext(ki),{pathname:s}=sc(),o=JSON.stringify(MI(i,r.v7_relativeSplatPath));return O.useMemo(()=>FI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function AO(t,e){return CO(t,e)}function CO(t,e,n,r){va()||Ue(!1);let{navigator:i}=O.useContext(Pi),{matches:s}=O.useContext(ki),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=sc(),d;if(e){var p;let P=typeof e=="string"?Ns(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Ue(!1),d=P}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let N=J2(t,{pathname:I}),k=xO(N&&N.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Rr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Rr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?O.createElement(ic.Provider,{value:{location:ra({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:pr.Pop}},k):k}function RO(){let t=LO(),e=vO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const PO=O.createElement(RO,null);class kO extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(ki.Provider,{value:this.props.routeContext},O.createElement(jI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NO(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Np);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ki.Provider,{value:e},r)}function xO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ue(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:I}=n,N=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,N=!1,k=null,P=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||PO,u&&(c<0&&m===0?(MO("route-fallback"),N=!0,P=null):c===m&&(N=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let S;return I?S=k:N?S=P:p.route.Component?S=O.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,O.createElement(NO,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(kO,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var $I=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($I||{}),HI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(HI||{});function DO(t){let e=O.useContext(Np);return e||Ue(!1),e}function OO(t){let e=O.useContext(EO);return e||Ue(!1),e}function VO(t){let e=O.useContext(ki);return e||Ue(!1),e}function WI(t){let e=VO(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function LO(){var t;let e=O.useContext(jI),n=OO(),r=WI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bO(){let{router:t}=DO($I.UseNavigateStable),e=WI(HI.UseNavigateStable),n=O.useRef(!1);return BI(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ra({fromRouteId:e},s)))},[t,e])}const E_={};function MO(t,e,n){E_[t]||(E_[t]=!0)}function FO(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function kn(t){Ue(!1)}function UO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:o=!1,future:l}=t;va()&&Ue(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:ra({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ns(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:N="default"}=r,k=O.useMemo(()=>{let P=kp(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:I,key:N},navigationType:i}},[u,d,p,m,I,N,i]);return k==null?null:O.createElement(Pi.Provider,{value:c},O.createElement(ic.Provider,{children:n,value:k}))}function jO(t){let{children:e,location:n}=t;return AO(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Ld(r.props.children,s));return}r.type!==kn&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ld(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bd.apply(this,arguments)}function BO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $O(t,e){return t.button===0&&(!e||e==="_self")&&!zO(t)}const HO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],WO="6";try{window.__reactRouterVersion=WO}catch{}const qO="startTransition",T_=L0[qO];function KO(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=Q2({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(p=>{c&&T_?T_(()=>u(p)):u(p)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>FO(r),[r]),O.createElement(UO,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const GO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xn=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=BO(e,HO),{basename:I}=O.useContext(Pi),N,k=!1;if(typeof c=="string"&&QO.test(c)&&(N=c,GO))try{let S=new URL(window.location.href),V=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=kp(V.pathname,I);V.origin===S.origin&&M!=null?c=M+V.search+V.hash:k=!0}catch{}let P=TO(c,{relative:i}),w=YO(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(S){r&&r(S),S.defaultPrevented||w(S)}return O.createElement("a",bd({},m,{href:N||P,onClick:k||s?r:_,ref:n,target:u}))});var I_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(I_||(I_={}));var S_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S_||(S_={}));function YO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=IO(),c=sc(),d=zI(t,{relative:o});return O.useCallback(p=>{if($O(p,n)){p.preventDefault();let m=r!==void 0?r:yu(c)===yu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const XO="/medical-interview-english/".replace(/\/$/,""),A_=t=>{const e=t.replace(/^\/+/,""),n=`${XO}/${e}`.replace(/^\/\//,"/");return n.startsWith("/")?n:`/${n}`};async function JO(t){const e=await fetch(t,{mode:"cors"});if(!e.ok)throw new Error(`Failed to fetch ${t}: ${e.status}`);return await e.text()}const ZO=({url:t,title:e,enableAudio:n=!1})=>{const r=O.useRef(null),[i,s]=O.useState(null),[o,l]=O.useState(!0);O.useEffect(()=>{let d=!0;return(async()=>{try{l(!0);const p=await JO(t);if(!d)return;const I=new DOMParser().parseFromString(p,"text/html").querySelector(".container");if(!I)throw new Error("container not found in external HTML");const N=I.querySelector(".back-link");N&&N.parentElement&&N.parentElement.removeChild(N);const k=I.querySelector("h1");k&&k.parentElement&&k.parentElement.removeChild(k),r.current&&(r.current.innerHTML=I.innerHTML,tV(r.current)),setTimeout(()=>{try{eV(r.current),n&&nV(r.current)}catch(P){console.error(P)}},0)}catch(p){console.error(p),s(p.message||String(p))}finally{l(!1)}})(),()=>{d=!1}},[t,n]);const{layout:u}=Vu(),c=u==="two-column"?"layout-two-column":u==="single-column"?"layout-single-column":"";return R.jsxs("div",{className:`container ${c}`,children:[R.jsx(xn,{to:"/",className:"back-link",children:"← トップページに戻る"}),R.jsx("h1",{children:e}),o&&R.jsx("p",{children:"読み込み中..."}),i&&R.jsxs("p",{className:"description",children:["読み込みエラー: ",i]}),R.jsx("div",{ref:r,className:"injected"})]})};function eV(t){const e=Array.from(t.querySelectorAll("h2, h3, h4"));e.forEach(u=>u.classList.add("collapsible"));function n(u){return u===2?/^H2$/:u===3?/^H[23]$/:/^H[234]$/}function r(u){return u==="H2"?2:u==="H3"?3:4}function i(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;p.style.display="none",p.style.maxHeight="0px",p.style.overflow="hidden",p.style.opacity="0",p.style.margin="0",d=d.nextElementSibling}return d}function s(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;if(/^H[2-4]$/.test(p.tagName)){p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="",p.classList.add("collapsed"),d=i(p.nextElementSibling,n(r(p.tagName)));continue}else p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="";d=d.nextElementSibling}}function o(u,c){const d=r(u.tagName),p=n(d);c?(u.classList.add("collapsed"),i(u.nextElementSibling,p)):(u.classList.remove("collapsed"),s(u.nextElementSibling,p))}function l(u){if(u._indentAnnotated)return;u._indentAnnotated=!0;const c=r(u.tagName);u.classList.add(`heading-l${c}`);const d=n(c);let p=u.nextElementSibling;const m=Math.max(0,c-2);for(;p&&!d.test(p.tagName);){const I=p;/^H[2-4]$/.test(I.tagName)||I.classList.add(`indent-${m}`),p=p.nextElementSibling}}e.forEach(u=>{u.classList.contains("initialized")||(u.classList.add("initialized"),l(u),o(u,!0),u.addEventListener("click",c=>{c.stopPropagation();const d=u.classList.contains("collapsed");o(u,!d)}))})}function tV(t){if(!t)return;const e=Array.from(t.querySelectorAll("li.question-item")),n=/\(([^()]+)\)/g;e.forEach(r=>{const i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,null),s=[];let o=i.nextNode();for(;o;)o.nodeType===Node.TEXT_NODE&&s.push(o),o=i.nextNode();s.forEach(l=>{const u=l.textContent??"";if(n.lastIndex=0,!n.test(u))return;n.lastIndex=0;const c=l.parentElement;if(!c||c.closest(".paraphrase"))return;const d=document.createDocumentFragment();let p=0,m;for(;(m=n.exec(u))!==null;){const I=m.index??0,N=I+m[0].length;I>p&&d.appendChild(document.createTextNode(u.slice(p,I)));const k=document.createElement("span");k.className="paraphrase",k.textContent=m[0],d.appendChild(k),p=N}p<u.length&&d.appendChild(document.createTextNode(u.slice(p))),c.replaceChild(d,l)})})}async function nV(t){const e=A_("audio/audio_map.json");let n={};try{n=await fetch(e).then(l=>l.json())}catch{console.warn("Failed to load audio_map.json; audio disabled");return}let r=null,i=null;function s(){i&&(i.pause(),i=null),r&&(r.classList.remove("playing"),r=null)}function o(l){const u=new Set,c=l.replace(/\s+/g," ").trim();c&&u.add(c);const d=c.replace(/\s*\(ai\)\s*$/i,"").trim();return d&&u.add(d),Array.from(u)}t.querySelectorAll("li.question-item").forEach(l=>{const u=l;u.addEventListener("click",()=>{var m;const c=u.dataset.text||((m=u.textContent)==null?void 0:m.trim())||"";let d;for(const I of o(c))if(n[I]){d=n[I];break}if(!d){console.warn("Audio not found for:",c);return}const p=A_(`audio/${d}`);if(r===u&&i&&!i.paused){i.pause(),u.classList.remove("playing");return}s(),i=new Audio(p),r=u,u.classList.add("playing"),i.addEventListener("ended",()=>s()),i.addEventListener("error",()=>s()),i.play()})})}const rV=({src:t,title:e})=>R.jsxs("div",{className:"iframe-wrapper",style:{height:"80vh"},children:[R.jsx("iframe",{title:e,src:t,style:{width:"100%",height:"100%",border:"1px solid var(--border-color)",borderRadius:8}}),R.jsx("p",{className:"description",children:"注意: 現段階は既存ページをiframeで内包しています。次段階でReactネイティブへ移植します。"})]}),iV=()=>{const{layout:t}=Vu();return R.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[R.jsx("h1",{children:"英語de診療"}),R.jsxs("div",{className:"sections-grid",children:[R.jsxs(xn,{to:"/medical-interview",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🗣️"}),R.jsx("div",{className:"section-title",children:"医療面接"}),R.jsx("div",{className:"section-subtitle",children:"Medical Interview"})]}),R.jsxs(xn,{to:"/head-neck",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🧑‍⚕️"}),R.jsx("div",{className:"section-title",children:"頭頸部"}),R.jsx("div",{className:"section-subtitle",children:"Head & Neck"})]}),R.jsxs(xn,{to:"/chest",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🫁"}),R.jsx("div",{className:"section-title",children:"胸部"}),R.jsx("div",{className:"section-subtitle",children:"Chest"})]}),R.jsxs(xn,{to:"/abdomen",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🫃"}),R.jsx("div",{className:"section-title",children:"腹部"}),R.jsx("div",{className:"section-subtitle",children:"Abdomen"})]}),R.jsxs(xn,{to:"/neurological",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🧠"}),R.jsx("div",{className:"section-title",children:"神経"}),R.jsx("div",{className:"section-subtitle",children:"Neurological"})]}),R.jsxs(xn,{to:"/presentation",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"📊"}),R.jsx("div",{className:"section-title",children:"プレゼン"}),R.jsx("div",{className:"section-subtitle",children:"Presentation"})]}),R.jsxs(xn,{to:"/debug",className:"section-card",children:[R.jsx("div",{className:"section-icon",children:"🧪"}),R.jsx("div",{className:"section-title",children:"デバッグ"}),R.jsx("div",{className:"section-subtitle",children:"Debug / Sandbox"})]})]})]})},sV=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(()=>{if(typeof window<"u"){const P=localStorage.getItem("contentMode");if(P==="html"||P==="react")return P}return"react"}),i=O.useRef(null),[s,o]=O.useState(null),l=O.useRef(null),u=O.useRef({dragging:!1,moved:!1,isTouch:!1}),c=O.useRef({startX:0,startY:0,startLeft:0,startTop:0}),d=P=>{l.current=P,o(P)};O.useEffect(()=>{const P=i.current;if(!P)return;const w="ontouchstart"in window||navigator.maxTouchPoints>0;if(u.current.isTouch=w,!w)try{const M=localStorage.getItem("settingsButtonPosition");if(M){const U=JSON.parse(M);typeof U.left=="number"&&typeof U.top=="number"&&d({left:U.left,top:U.top})}}catch(M){console.warn("Failed to restore settings button position:",M)}if(w)return;const _=M=>{u.current.dragging=!0,u.current.moved=!1,P.classList.add("dragging");const U=P.getBoundingClientRect();c.current={startX:M.clientX,startY:M.clientY,startLeft:U.left,startTop:U.top},M.preventDefault()},S=M=>{if(!u.current.dragging)return;const{startX:U,startY:v,startLeft:y,startTop:E}=c.current,A=M.clientX-U,C=M.clientY-v;!u.current.moved&&(Math.abs(A)>2||Math.abs(C)>2)&&(u.current.moved=!0);const x=y+A,T=E+C,re=window.innerWidth-P.offsetWidth,de=window.innerHeight-P.offsetHeight,it=Math.max(0,Math.min(x,re)),Pt=Math.max(0,Math.min(T,de));d({left:it,top:Pt})},V=()=>{if(!u.current.dragging)return;u.current.dragging=!1,P.classList.remove("dragging");const M=l.current;if(M)try{localStorage.setItem("settingsButtonPosition",JSON.stringify(M))}catch(U){console.warn("Failed to save settings button position:",U)}};return P.addEventListener("mousedown",_),document.addEventListener("mousemove",S),document.addEventListener("mouseup",V),()=>{P.removeEventListener("mousedown",_),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",V)}},[]);const p=()=>{if(u.current.moved){u.current.moved=!1;return}e(!0)};O.useEffect(()=>{try{localStorage.setItem("contentMode",n)}catch(P){console.warn("Failed to save content mode:",P)}},[n]);const m=s?{left:`${s.left}px`,top:`${s.top}px`,right:"auto"}:void 0,I="/medical-interview-english/".replace(/\/$/,""),N=P=>{const w=P.replace(/^\/+/,""),_=`${I}/${w}`.replace(/^\/\//,"/");return _.startsWith("/")?_:`/${_}`},k=(P,w,_)=>n==="react"?R.jsx(ZO,{title:`${P}(r)`,url:w,enableAudio:_==null?void 0:_.enableAudio}):R.jsx(rV,{title:`${P}（HTML版）`,src:w});return R.jsx(KA,{children:R.jsxs(QA,{children:[R.jsxs(KO,{basename:"/medical-interview-english/",children:[R.jsxs(jO,{children:[R.jsx(kn,{path:"/",element:R.jsx(iV,{})}),R.jsx(kn,{path:"/medical-interview",element:k("医療面接",N("legacy/medical-interview.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/head-neck",element:k("頭頸部",N("legacy/head-neck.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/chest",element:k("胸部",N("legacy/chest.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/abdomen",element:k("腹部",N("legacy/abdomen.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/neurological",element:k("神経",N("legacy/neurological.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/presentation",element:k("プレゼン",N("legacy/presentation.html"),{enableAudio:!0})}),R.jsx(kn,{path:"/debug",element:R.jsx(aV,{})})]}),R.jsx("button",{ref:i,style:m,className:"settings-button","aria-label":"設定",onClick:p,children:"⚙️"}),R.jsx(W2,{open:t,onClose:()=>e(!1),contentMode:n,setContentMode:r})]}),R.jsx(G2,{})]})})},oV=()=>R.jsx(F2,{children:R.jsx(sV,{})}),aV=()=>{const{layout:t}=Vu();return R.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[R.jsx(xn,{to:"/",className:"back-link",children:"← トップページに戻る"}),R.jsx("h1",{children:"デバッグ（UIコンポーネント検証）"}),R.jsxs(hh,{title:"総論（General Description）",level:2,children:[R.jsx("p",{className:"description",children:"コンポーネントの動作確認用ページです。h2/h3/h4 のトグルやレイアウト切替を試せます。"}),R.jsxs("ul",{className:"expanded",children:[R.jsx("li",{children:"ダークモード切替（auto/dark）"}),R.jsx("li",{children:"レイアウト（auto/2段/1段）"}),R.jsx("li",{children:"折りたたみ可能な見出し"})]}),R.jsxs(hh,{title:"デモ: h3 セクション",level:3,defaultCollapsed:!0,children:[R.jsx("p",{children:"h3 をクリックして展開/折りたたみできます。"}),R.jsxs("ul",{className:"expanded",children:[R.jsx("li",{children:"項目A"}),R.jsx("li",{children:"項目B"})]}),R.jsx(hh,{title:"デモ: h4 セクション",level:4,defaultCollapsed:!0,children:R.jsx("p",{children:"h4 セクションも同様に制御できます。"})})]})]})]})};fh.createRoot(document.getElementById("root")).render(R.jsx(b_.StrictMode,{children:R.jsx(oV,{})}));
