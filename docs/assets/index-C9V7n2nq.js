function A0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function C0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uv={exports:{}},Vu={},zv={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),k0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),O0=Symbol.for("react.forward_ref"),b0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Lm=Symbol.iterator;function M0(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Bv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,Hv={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||Bv}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=Fs.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||Bv}var nf=tf.prototype=new Wv;nf.constructor=tf;$v(nf,Fs.prototype);nf.isPureReactComponent=!0;var Vm=Array.isArray,qv=Object.prototype.hasOwnProperty,rf={current:null},Kv={key:!0,ref:!0,__self:!0,__source:!0};function Gv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qv.call(e,r)&&!Kv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_a,type:t,key:s,ref:o,props:i,_owner:rf.current}}function F0(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function j0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j0(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case k0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zc(o,0):r,Vm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),wl(i,e,n,"",function(c){return c})):i!=null&&(sf(i)&&(i=F0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+zc(s,l);o+=wl(s,e,n,u,i)}else if(u=M0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+zc(s,l++),o+=wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function U0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},El={transition:null},z0={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:El,ReactCurrentOwner:rf};function Qv(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Fs;ue.Fragment=R0;ue.Profiler=N0;ue.PureComponent=tf;ue.StrictMode=P0;ue.Suspense=b0;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;ue.act=Qv;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qv.call(e,u)&&!Kv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_a,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:D0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x0,_context:t},t.Consumer=t};ue.createElement=Gv;ue.createFactory=function(t){var e=Gv.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:O0,render:t}};ue.isValidElement=sf;ue.lazy=function(t){return{$$typeof:V0,_payload:{_status:-1,_result:t},_init:U0}};ue.memo=function(t,e){return{$$typeof:L0,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};ue.unstable_act=Qv;ue.useCallback=function(t,e){return xt.current.useCallback(t,e)};ue.useContext=function(t){return xt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return xt.current.useEffect(t,e)};ue.useId=function(){return xt.current.useId()};ue.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return xt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};ue.useRef=function(t){return xt.current.useRef(t)};ue.useState=function(t){return xt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return xt.current.useTransition()};ue.version="18.3.1";zv.exports=ue;var x=zv.exports;const Yv=C0(x),B0=A0({__proto__:null,default:Yv},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=x,H0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,K0=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G0={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)q0.call(e,r)&&!G0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:H0,type:t,key:s,ref:o,props:i,_owner:K0.current}}Vu.Fragment=W0;Vu.jsx=Xv;Vu.jsxs=Xv;Uv.exports=Vu;var g=Uv.exports,Dh={},Jv={exports:{}},Xt={},Zv={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,B){var Z=$.length;$.push(B);e:for(;0<Z;){var me=Z-1>>>1,re=$[me];if(0<i(re,B))$[me]=B,$[Z]=re,Z=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var B=$[0],Z=$.pop();if(Z!==B){$[0]=Z;e:for(var me=0,re=$.length,lt=re>>>1;me<lt;){var $e=2*(me+1)-1,je=$[$e],ut=$e+1,Qe=$[ut];if(0>i(je,Z))ut<re&&0>i(Qe,je)?($[me]=Qe,$[ut]=Z,me=ut):($[me]=je,$[$e]=Z,me=$e);else if(ut<re&&0>i(Qe,Z))$[me]=Qe,$[ut]=Z,me=ut;else break e}}return B}function i($,B){var Z=$.sortIndex-B.sortIndex;return Z!==0?Z:$.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,N=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var B=n(c);B!==null;){if(B.callback===null)r(c);else if(B.startTime<=$)r(c),B.sortIndex=B.expirationTime,e(u,B);else break;B=n(c)}}function b($){if(k=!1,C($),!N)if(n(u)!==null)N=!0,Fe(M);else{var B=n(c);B!==null&&at(b,B.startTime-$)}}function M($,B){N=!1,k&&(k=!1,w(v),v=-1),I=!0;var Z=m;try{for(C(B),p=n(u);p!==null&&(!(p.expirationTime>B)||$&&!R());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var re=me(p.expirationTime<=B);B=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),C(B)}else r(u);p=n(u)}if(p!==null)var lt=!0;else{var $e=n(c);$e!==null&&at(b,$e.startTime-B),lt=!1}return lt}finally{p=null,m=Z,I=!1}}var F=!1,E=null,v=-1,T=5,A=-1;function R(){return!(t.unstable_now()-A<T)}function D(){if(E!==null){var $=t.unstable_now();A=$;var B=!0;try{B=E(!0,$)}finally{B?S():(F=!1,E=null)}}else F=!1}var S;if(typeof _=="function")S=function(){_(D)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Pe=ye.port2;ye.port1.onmessage=D,S=function(){Pe.postMessage(null)}}else S=function(){P(D,0)};function Fe($){E=$,F||(F=!0,S())}function at($,B){v=P(function(){$(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,Fe(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var Z=m;m=B;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,B){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return B()}finally{m=Z}},t.unstable_scheduleCallback=function($,B,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,$={id:d++,callback:B,priorityLevel:$,startTime:Z,expirationTime:re,sortIndex:-1},Z>me?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(k?(w(v),v=-1):k=!0,at(b,Z-me))):($.sortIndex=re,e(u,$),N||I||(N=!0,Fe(M))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var B=m;return function(){var Z=m;m=B;try{return $.apply(this,arguments)}finally{m=Z}}}})(e_);Zv.exports=e_;var Q0=Zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0=x,Yt=Q0;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,Ho={};function Mi(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Ho[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oh=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},jm={};function J0(t){return Oh.call(jm,t)?!0:Oh.call(Fm,t)?!1:X0.test(t)?jm[t]=!0:(Fm[t]=!0,!1)}function Z0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eS(t,e,n,r){if(e===null||typeof e>"u"||Z0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,af);mt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,af);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,af);mt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eS(e,n,i,r)&&(n=null),r||i===null?J0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),bh=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),Um=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Bc;function vo(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var $c=!1;function Hc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function tS(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case bh:return"Profiler";case uf:return"StrictMode";case Lh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function nS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rS(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=rS(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fh(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function jh(t,e){a_(t,e);var n=Wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_o(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function l_(t,e){var n=Wr(e.value),r=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,c_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iS=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){iS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function h_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function d_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=h_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sS=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $h(t,e){if(e){if(sS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wh=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,ms=null,gs=null;function Wm(t){if(t=Ta(t)){if(typeof qh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=zu(e),qh(t.stateNode,t.type,e))}}function f_(t){ms?gs?gs.push(t):gs=[t]:ms=t}function p_(){if(ms){var t=ms,e=gs;if(gs=ms=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function m_(t,e){return t(e)}function g_(){}var Wc=!1;function y_(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return m_(t,e,n)}finally{Wc=!1,(ms!==null||gs!==null)&&(g_(),p_())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Kh=!1;if(er)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Kh=!1}function oS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Po=!1,Hl=null,Wl=!1,Gh=null,aS={onError:function(t){Po=!0,Hl=t}};function lS(t,e,n,r,i,s,o,l,u){Po=!1,Hl=null,oS.apply(aS,arguments)}function uS(t,e,n,r,i,s,o,l,u){if(lS.apply(this,arguments),Po){if(Po){var c=Hl;Po=!1,Hl=null}else throw Error(U(198));Wl||(Wl=!0,Gh=c)}}function Fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(Fi(t)!==t)throw Error(U(188))}function cS(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function __(t){return t=cS(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var E_=Yt.unstable_scheduleCallback,Km=Yt.unstable_cancelCallback,hS=Yt.unstable_shouldYield,dS=Yt.unstable_requestPaint,Be=Yt.unstable_now,fS=Yt.unstable_getCurrentPriorityLevel,ff=Yt.unstable_ImmediatePriority,T_=Yt.unstable_UserBlockingPriority,ql=Yt.unstable_NormalPriority,pS=Yt.unstable_LowPriority,I_=Yt.unstable_IdlePriority,Mu=null,Nn=null;function mS(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:vS,gS=Math.log,yS=Math.LN2;function vS(t){return t>>>=0,t===0?32:31-(gS(t)/yS|0)|0}var Ja=64,Za=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wo(l):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function _S(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_S(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S_(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function ES(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function A_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var C_,mf,k_,R_,P_,Yh=!1,el=[],Dr=null,Or=null,br=null,Ko=new Map,Go=new Map,Ir=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ta(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function IS(t,e,n,r,i){switch(e){case"focusin":return Dr=co(Dr,t,e,n,r,i),!0;case"dragenter":return Or=co(Or,t,e,n,r,i),!0;case"mouseover":return br=co(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ko.set(s,co(Ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Go.set(s,co(Go.get(s)||null,t,e,n,r,i)),!0}return!1}function N_(t){var e=gi(t.target);if(e!==null){var n=Fi(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,P_(t.priority,function(){k_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wh=r,n.target.dispatchEvent(r),Wh=null}else return e=Ta(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){Tl(t)&&n.delete(e)}function SS(){Yh=!1,Dr!==null&&Tl(Dr)&&(Dr=null),Or!==null&&Tl(Or)&&(Or=null),br!==null&&Tl(br)&&(br=null),Ko.forEach(Qm),Go.forEach(Qm)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,Yh||(Yh=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,SS)))}function Qo(t){function e(i){return ho(i,t)}if(0<el.length){ho(el[0],t);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&ho(Dr,t),Or!==null&&ho(Or,t),br!==null&&ho(br,t),Ko.forEach(e),Go.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&Ir.shift()}var ys=lr.ReactCurrentBatchConfig,Gl=!0;function AS(t,e,n,r){var i=Ee,s=ys.transition;ys.transition=null;try{Ee=1,gf(t,e,n,r)}finally{Ee=i,ys.transition=s}}function CS(t,e,n,r){var i=Ee,s=ys.transition;ys.transition=null;try{Ee=4,gf(t,e,n,r)}finally{Ee=i,ys.transition=s}}function gf(t,e,n,r){if(Gl){var i=Xh(t,e,n,r);if(i===null)nh(t,e,r,Ql,n),Gm(t,r);else if(IS(i,t,e,n,r))r.stopPropagation();else if(Gm(t,r),e&4&&-1<TS.indexOf(t)){for(;i!==null;){var s=Ta(i);if(s!==null&&C_(s),s=Xh(t,e,n,r),s===null&&nh(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nh(t,e,r,null,n)}}var Ql=null;function Xh(t,e,n,r){if(Ql=null,t=df(r),t=gi(t),t!==null)if(e=Fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function x_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fS()){case ff:return 1;case T_:return 4;case ql:case pS:return 16;case I_:return 536870912;default:return 16}default:return 16}}var Rr=null,yf=null,Il=null;function D_(){if(Il)return Il;var t,e=yf,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Ym(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Ym,this.isPropagationStopped=Ym,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=Jt(js),Ea=be({},js,{view:0,detail:0}),kS=Jt(Ea),Kc,Gc,fo,Fu=be({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Kc=t.screenX-fo.screenX,Gc=t.screenY-fo.screenY):Gc=Kc=0,fo=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Xm=Jt(Fu),RS=be({},Fu,{dataTransfer:0}),PS=Jt(RS),NS=be({},Ea,{relatedTarget:0}),Qc=Jt(NS),xS=be({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=Jt(xS),OS=be({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Jt(OS),LS=be({},js,{data:0}),Jm=Jt(LS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FS[t])?!!e[t]:!1}function _f(){return jS}var US=be({},Ea,{key:function(t){if(t.key){var e=VS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zS=Jt(US),BS=be({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Jt(BS),$S=be({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),HS=Jt($S),WS=be({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=Jt(WS),KS=be({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GS=Jt(KS),QS=[9,13,27,32],wf=er&&"CompositionEvent"in window,No=null;er&&"documentMode"in document&&(No=document.documentMode);var YS=er&&"TextEvent"in window&&!No,O_=er&&(!wf||No&&8<No&&11>=No),eg=" ",tg=!1;function b_(t,e){switch(t){case"keyup":return QS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function XS(t,e){switch(t){case"compositionend":return L_(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function JS(t,e){if(is)return t==="compositionend"||!wf&&b_(t,e)?(t=D_(),Il=yf=Rr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O_&&e.locale!=="ko"?null:e.data;default:return null}}var ZS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZS[t.type]:e==="textarea"}function V_(t,e,n,r){f_(r),e=Yl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Yo=null;function eA(t){K_(t,0)}function ju(t){var e=as(t);if(o_(e))return t}function tA(t,e){if(t==="change")return e}var M_=!1;if(er){var Yc;if(er){var Xc="oninput"in document;if(!Xc){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),Xc=typeof rg.oninput=="function"}Yc=Xc}else Yc=!1;M_=Yc&&(!document.documentMode||9<document.documentMode)}function ig(){xo&&(xo.detachEvent("onpropertychange",F_),Yo=xo=null)}function F_(t){if(t.propertyName==="value"&&ju(Yo)){var e=[];V_(e,Yo,t,df(t)),y_(eA,e)}}function nA(t,e,n){t==="focusin"?(ig(),xo=e,Yo=n,xo.attachEvent("onpropertychange",F_)):t==="focusout"&&ig()}function rA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Yo)}function iA(t,e){if(t==="click")return ju(e)}function sA(t,e){if(t==="input"||t==="change")return ju(e)}function oA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:oA;function Xo(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oh.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aA(t){var e=U_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j_(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=og(n,s);var o=og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lA=er&&"documentMode"in document&&11>=document.documentMode,ss=null,Jh=null,Do=null,Zh=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zh||ss==null||ss!==$l(r)||(r=ss,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&Xo(Do,r)||(Do=r,r=Yl(Jh,"onSelect"),0<r.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Jc={},z_={};er&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Uu(t){if(Jc[t])return Jc[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return Jc[t]=e[n];return t}var B_=Uu("animationend"),$_=Uu("animationiteration"),H_=Uu("animationstart"),W_=Uu("transitionend"),q_=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){q_.set(t,e),Mi(e,[t])}for(var Zc=0;Zc<lg.length;Zc++){var eh=lg[Zc],uA=eh.toLowerCase(),cA=eh[0].toUpperCase()+eh.slice(1);ei(uA,"on"+cA)}ei(B_,"onAnimationEnd");ei($_,"onAnimationIteration");ei(H_,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(W_,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uS(r,e,void 0,t),t.currentTarget=null}function K_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ug(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ug(i,l,c),s=u}}}if(Wl)throw t=Gh,Wl=!1,Gh=null,t}function Ce(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var r=t+"__bubble";n.has(r)||(G_(e,t,2,!1),n.add(r))}function th(t,e,n){var r=0;e&&(r|=4),G_(n,t,r,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[rl]){t[rl]=!0,t_.forEach(function(n){n!=="selectionchange"&&(hA.has(n)||th(n,!1,t),th(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,th("selectionchange",!1,e))}}function G_(t,e,n,r){switch(x_(e)){case 1:var i=AS;break;case 4:i=CS;break;default:i=gf}n=i.bind(null,e,n,t),i=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}y_(function(){var c=s,d=df(n),p=[];e:{var m=q_.get(t);if(m!==void 0){var I=vf,N=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":I=zS;break;case"focusin":N="focus",I=Qc;break;case"focusout":N="blur",I=Qc;break;case"beforeblur":case"afterblur":I=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=HS;break;case B_:case $_:case H_:I=DS;break;case W_:I=qS;break;case"scroll":I=kS;break;case"wheel":I=GS;break;case"copy":case"cut":case"paste":I=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Zm}var k=(e&4)!==0,P=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,C;_!==null;){C=_;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,w!==null&&(b=qo(_,w),b!=null&&k.push(Zo(_,b,C)))),P)break;_=_.return}0<k.length&&(m=new I(m,N,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Wh&&(N=n.relatedTarget||n.fromElement)&&(gi(N)||N[tr]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(N=n.relatedTarget||n.toElement,I=c,N=N?gi(N):null,N!==null&&(P=Fi(N),N!==P||N.tag!==5&&N.tag!==6)&&(N=null)):(I=null,N=c),I!==N)){if(k=Xm,b="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Zm,b="onPointerLeave",w="onPointerEnter",_="pointer"),P=I==null?m:as(I),C=N==null?m:as(N),m=new k(b,_+"leave",I,n,d),m.target=P,m.relatedTarget=C,b=null,gi(d)===c&&(k=new k(w,_+"enter",N,n,d),k.target=C,k.relatedTarget=P,b=k),P=b,I&&N)t:{for(k=I,w=N,_=0,C=k;C;C=Xi(C))_++;for(C=0,b=w;b;b=Xi(b))C++;for(;0<_-C;)k=Xi(k),_--;for(;0<C-_;)w=Xi(w),C--;for(;_--;){if(k===w||w!==null&&k===w.alternate)break t;k=Xi(k),w=Xi(w)}k=null}else k=null;I!==null&&cg(p,m,I,k,!1),N!==null&&P!==null&&cg(p,P,N,k,!0)}}e:{if(m=c?as(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=tA;else if(ng(m))if(M_)M=sA;else{M=rA;var F=nA}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=iA);if(M&&(M=M(t,c))){V_(p,M,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Uh(m,"number",m.value)}switch(F=c?as(c):window,t){case"focusin":(ng(F)||F.contentEditable==="true")&&(ss=F,Jh=c,Do=null);break;case"focusout":Do=Jh=ss=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,ag(p,n,d);break;case"selectionchange":if(lA)break;case"keydown":case"keyup":ag(p,n,d)}var E;if(wf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else is?b_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(O_&&n.locale!=="ko"&&(is||v!=="onCompositionStart"?v==="onCompositionEnd"&&is&&(E=D_()):(Rr=d,yf="value"in Rr?Rr.value:Rr.textContent,is=!0)),F=Yl(c,v),0<F.length&&(v=new Jm(v,t,null,n,d),p.push({event:v,listeners:F}),E?v.data=E:(E=L_(n),E!==null&&(v.data=E)))),(E=YS?XS(t,n):JS(t,n))&&(c=Yl(c,"onBeforeInput"),0<c.length&&(d=new Jm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}K_(p,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qo(t,n),s!=null&&r.unshift(Zo(t,s,i)),s=qo(t,e),s!=null&&r.push(Zo(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qo(n,s),u!=null&&o.unshift(Zo(n,u,l))):i||(u=qo(n,s),u!=null&&o.push(Zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dA=/\r\n?/g,fA=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(dA,`
`).replace(fA,"")}function il(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(U(425))}function Xl(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,pA=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,mA=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(gA)}:rd;function gA(t){setTimeout(function(){throw t})}function rh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Us,ea="__reactProps$"+Us,tr="__reactContainer$"+Us,id="__reactEvents$"+Us,yA="__reactListeners$"+Us,vA="__reactHandles$"+Us;function gi(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[Pn])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[Pn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function zu(t){return t[ea]||null}var sd=[],ls=-1;function ti(t){return{current:t}}function Re(t){0>ls||(t.current=sd[ls],sd[ls]=null,ls--)}function Se(t,e){ls++,sd[ls]=t.current,t.current=e}var qr={},St=ti(qr),Mt=ti(!1),Ai=qr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Jl(){Re(Mt),Re(St)}function pg(t,e,n){if(St.current!==qr)throw Error(U(168));Se(St,e),Se(Mt,n)}function Q_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,nS(t)||"Unknown",i));return be({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Ai=St.current,Se(St,t),Se(Mt,Mt.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Q_(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Re(Mt),Re(St),Se(St,t)):Re(Mt),Se(Mt,n)}var qn=null,Bu=!1,ih=!1;function Y_(t){qn===null?qn=[t]:qn.push(t)}function _A(t){Bu=!0,Y_(t)}function ni(){if(!ih&&qn!==null){ih=!0;var t=0,e=Ee;try{var n=qn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Bu=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),E_(ff,ni),i}finally{Ee=e,ih=!1}}return null}var us=[],cs=0,eu=null,tu=0,en=[],tn=0,Ci=null,Gn=1,Qn="";function fi(t,e){us[cs++]=tu,us[cs++]=eu,eu=t,tu=e}function X_(t,e,n){en[tn++]=Gn,en[tn++]=Qn,en[tn++]=Ci,Ci=t;var r=Gn;t=Qn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-yn(e)+i|n<<i|r,Qn=s+t}else Gn=1<<s|n<<i|r,Qn=t}function Tf(t){t.return!==null&&(fi(t,1),X_(t,1,0))}function If(t){for(;t===eu;)eu=us[--cs],us[cs]=null,tu=us[--cs],us[cs]=null;for(;t===Ci;)Ci=en[--tn],en[tn]=null,Qn=en[--tn],en[tn]=null,Gn=en[--tn],en[tn]=null}var Gt=null,qt=null,Ne=!1,mn=null;function J_(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,qt=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Gn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,qt=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(Ne){var e=qt;if(e){var n=e;if(!gg(t,e)){if(od(t))throw Error(U(418));e=Lr(n.nextSibling);var r=Gt;e&&gg(t,e)?J_(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Gt=t)}}else{if(od(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ne=!1,Gt=t}}}function yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function sl(t){if(t!==Gt)return!1;if(!Ne)return yg(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=qt)){if(od(t))throw Z_(),Error(U(418));for(;e;)J_(t,e),e=Lr(e.nextSibling)}if(yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Gt?Lr(t.stateNode.nextSibling):null;return!0}function Z_(){for(var t=qt;t;)t=Lr(t.nextSibling)}function ks(){qt=Gt=null,Ne=!1}function Sf(t){mn===null?mn=[t]:mn.push(t)}var wA=lr.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function ew(t){function e(w,_){if(t){var C=w.deletions;C===null?(w.deletions=[_],w.flags|=16):C.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=jr(w,_),w.index=0,w.sibling=null,w}function s(w,_,C){return w.index=C,t?(C=w.alternate,C!==null?(C=C.index,C<_?(w.flags|=2,_):C):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,C,b){return _===null||_.tag!==6?(_=hh(C,w.mode,b),_.return=w,_):(_=i(_,C),_.return=w,_)}function u(w,_,C,b){var M=C.type;return M===rs?d(w,_,C.props.children,b,C.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Er&&vg(M)===_.type)?(b=i(_,C.props),b.ref=po(w,_,C),b.return=w,b):(b=xl(C.type,C.key,C.props,null,w.mode,b),b.ref=po(w,_,C),b.return=w,b)}function c(w,_,C,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==C.containerInfo||_.stateNode.implementation!==C.implementation?(_=dh(C,w.mode,b),_.return=w,_):(_=i(_,C.children||[]),_.return=w,_)}function d(w,_,C,b,M){return _===null||_.tag!==7?(_=Ii(C,w.mode,b,M),_.return=w,_):(_=i(_,C),_.return=w,_)}function p(w,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hh(""+_,w.mode,C),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qa:return C=xl(_.type,_.key,_.props,null,w.mode,C),C.ref=po(w,null,_),C.return=w,C;case ns:return _=dh(_,w.mode,C),_.return=w,_;case Er:var b=_._init;return p(w,b(_._payload),C)}if(_o(_)||lo(_))return _=Ii(_,w.mode,C,null),_.return=w,_;ol(w,_)}return null}function m(w,_,C,b){var M=_!==null?_.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:l(w,_,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Qa:return C.key===M?u(w,_,C,b):null;case ns:return C.key===M?c(w,_,C,b):null;case Er:return M=C._init,m(w,_,M(C._payload),b)}if(_o(C)||lo(C))return M!==null?null:d(w,_,C,b,null);ol(w,C)}return null}function I(w,_,C,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(C)||null,l(_,w,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Qa:return w=w.get(b.key===null?C:b.key)||null,u(_,w,b,M);case ns:return w=w.get(b.key===null?C:b.key)||null,c(_,w,b,M);case Er:var F=b._init;return I(w,_,C,F(b._payload),M)}if(_o(b)||lo(b))return w=w.get(C)||null,d(_,w,b,M,null);ol(_,b)}return null}function N(w,_,C,b){for(var M=null,F=null,E=_,v=_=0,T=null;E!==null&&v<C.length;v++){E.index>v?(T=E,E=null):T=E.sibling;var A=m(w,E,C[v],b);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(w,E),_=s(A,_,v),F===null?M=A:F.sibling=A,F=A,E=T}if(v===C.length)return n(w,E),Ne&&fi(w,v),M;if(E===null){for(;v<C.length;v++)E=p(w,C[v],b),E!==null&&(_=s(E,_,v),F===null?M=E:F.sibling=E,F=E);return Ne&&fi(w,v),M}for(E=r(w,E);v<C.length;v++)T=I(E,w,v,C[v],b),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),_=s(T,_,v),F===null?M=T:F.sibling=T,F=T);return t&&E.forEach(function(R){return e(w,R)}),Ne&&fi(w,v),M}function k(w,_,C,b){var M=lo(C);if(typeof M!="function")throw Error(U(150));if(C=M.call(C),C==null)throw Error(U(151));for(var F=M=null,E=_,v=_=0,T=null,A=C.next();E!==null&&!A.done;v++,A=C.next()){E.index>v?(T=E,E=null):T=E.sibling;var R=m(w,E,A.value,b);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(w,E),_=s(R,_,v),F===null?M=R:F.sibling=R,F=R,E=T}if(A.done)return n(w,E),Ne&&fi(w,v),M;if(E===null){for(;!A.done;v++,A=C.next())A=p(w,A.value,b),A!==null&&(_=s(A,_,v),F===null?M=A:F.sibling=A,F=A);return Ne&&fi(w,v),M}for(E=r(w,E);!A.done;v++,A=C.next())A=I(E,w,v,A.value,b),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?v:A.key),_=s(A,_,v),F===null?M=A:F.sibling=A,F=A);return t&&E.forEach(function(D){return e(w,D)}),Ne&&fi(w,v),M}function P(w,_,C,b){if(typeof C=="object"&&C!==null&&C.type===rs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Qa:e:{for(var M=C.key,F=_;F!==null;){if(F.key===M){if(M=C.type,M===rs){if(F.tag===7){n(w,F.sibling),_=i(F,C.props.children),_.return=w,w=_;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Er&&vg(M)===F.type){n(w,F.sibling),_=i(F,C.props),_.ref=po(w,F,C),_.return=w,w=_;break e}n(w,F);break}else e(w,F);F=F.sibling}C.type===rs?(_=Ii(C.props.children,w.mode,b,C.key),_.return=w,w=_):(b=xl(C.type,C.key,C.props,null,w.mode,b),b.ref=po(w,_,C),b.return=w,w=b)}return o(w);case ns:e:{for(F=C.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===C.containerInfo&&_.stateNode.implementation===C.implementation){n(w,_.sibling),_=i(_,C.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=dh(C,w.mode,b),_.return=w,w=_}return o(w);case Er:return F=C._init,P(w,_,F(C._payload),b)}if(_o(C))return N(w,_,C,b);if(lo(C))return k(w,_,C,b);ol(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,C),_.return=w,w=_):(n(w,_),_=hh(C,w.mode,b),_.return=w,w=_),o(w)):n(w,_)}return P}var Rs=ew(!0),tw=ew(!1),nu=ti(null),ru=null,hs=null,Af=null;function Cf(){Af=hs=ru=null}function kf(t){var e=nu.current;Re(nu),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){ru=t,Af=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(ru===null)throw Error(U(308));hs=t,ru.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var yi=null;function Rf(t){yi===null?yi=[t]:yi.push(t)}function nw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rf(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,Rf(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pf(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,k=l;switch(m=e,I=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){p=N.call(I,p,m);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,m=typeof N=="function"?N.call(I,p,m):N,m==null)break e;p=be({},p,m);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ri|=o,t.lanes=o,t.memoizedState=p}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ia={},xn=ti(Ia),ta=ti(Ia),na=ti(Ia);function vi(t){if(t===Ia)throw Error(U(174));return t}function Nf(t,e){switch(Se(na,e),Se(ta,t),Se(xn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}Re(xn),Se(xn,e)}function Ps(){Re(xn),Re(ta),Re(na)}function iw(t){vi(na.current);var e=vi(xn.current),n=Bh(e,t.type);e!==n&&(Se(ta,t),Se(xn,n))}function xf(t){ta.current===t&&(Re(xn),Re(ta))}var xe=ti(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sh=[];function Df(){for(var t=0;t<sh.length;t++)sh[t]._workInProgressVersionPrimary=null;sh.length=0}var Cl=lr.ReactCurrentDispatcher,oh=lr.ReactCurrentBatchConfig,ki=0,Oe=null,Xe=null,st=null,ou=!1,Oo=!1,ra=0,EA=0;function vt(){throw Error(U(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,i,s){if(ki=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?AA:CA,t=n(r,i),Oo){s=0;do{if(Oo=!1,ra=0,25<=s)throw Error(U(301));s+=1,st=Xe=null,e.updateQueue=null,Cl.current=kA,t=n(r,i)}while(Oo)}if(Cl.current=au,e=Xe!==null&&Xe.next!==null,ki=0,st=Xe=Oe=null,ou=!1,e)throw Error(U(300));return t}function Lf(){var t=ra!==0;return ra=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Oe.memoizedState=st=t:st=st.next=t,st}function ln(){if(Xe===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=st===null?Oe.memoizedState:st.next;if(e!==null)st=e,Xe=t;else{if(t===null)throw Error(U(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},st===null?Oe.memoizedState=st=t:st=st.next=t}return st}function ia(t,e){return typeof e=="function"?e(t):e}function ah(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ki&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Oe.lanes|=d,Ri|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,wn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,Ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lh(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sw(){}function ow(t,e){var n=Oe,r=ln(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,Vf(uw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,sa(9,lw.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(U(349));ki&30||aw(n,e,i)}return i}function aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lw(t,e,n,r){e.value=n,e.getSnapshot=r,cw(e)&&hw(t)}function uw(t,e,n){return n(function(){cw(e)&&hw(t)})}function cw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function hw(t){var e=nr(t,1);e!==null&&vn(e,t,1,-1)}function Eg(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=SA.bind(null,Oe,t),[e.memoizedState,t]}function sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dw(){return ln().memoizedState}function kl(t,e,n,r){var i=kn();Oe.flags|=t,i.memoizedState=sa(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&Of(r,o.deps)){i.memoizedState=sa(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=sa(1|e,n,s,r)}function Tg(t,e){return kl(8390656,8,t,e)}function Vf(t,e){return $u(2048,8,t,e)}function fw(t,e){return $u(4,2,t,e)}function pw(t,e){return $u(4,4,t,e)}function mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gw(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,mw.bind(null,e,t),n)}function Mf(){}function yw(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vw(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _w(t,e,n){return ki&21?(wn(n,e)||(n=S_(),Oe.lanes|=n,Ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function TA(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=oh.transition;oh.transition={};try{t(!1),e()}finally{Ee=n,oh.transition=r}}function ww(){return ln().memoizedState}function IA(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ew(t))Tw(e,n);else if(n=nw(t,e,n,r),n!==null){var i=Pt();vn(n,t,r,i),Iw(n,e,r)}}function SA(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ew(t))Tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,wn(l,o)){var u=e.interleaved;u===null?(i.next=i,Rf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=nw(t,e,i,r),n!==null&&(i=Pt(),vn(n,t,r,i),Iw(n,e,r))}}function Ew(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function Tw(t,e){Oo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pf(t,n)}}var au={readContext:an,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},AA={readContext:an,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:Tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IA.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Eg,useDebugValue:Mf,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Eg(!1),e=t[0];return t=TA.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=kn();if(Ne){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ot===null)throw Error(U(349));ki&30||aw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tg(uw.bind(null,r,s,t),[t]),r.flags|=2048,sa(9,lw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=ot.identifierPrefix;if(Ne){var n=Qn,r=Gn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CA={readContext:an,useCallback:yw,useContext:an,useEffect:Vf,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:vw,useReducer:ah,useRef:dw,useState:function(){return ah(ia)},useDebugValue:Mf,useDeferredValue:function(t){var e=ln();return _w(e,Xe.memoizedState,t)},useTransition:function(){var t=ah(ia)[0],e=ln().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1},kA={readContext:an,useCallback:yw,useContext:an,useEffect:Vf,useImperativeHandle:gw,useInsertionEffect:fw,useLayoutEffect:pw,useMemo:vw,useReducer:lh,useRef:dw,useState:function(){return lh(ia)},useDebugValue:Mf,useDeferredValue:function(t){var e=ln();return Xe===null?e.memoizedState=t:_w(e,Xe.memoizedState,t)},useTransition:function(){var t=lh(ia)[0],e=ln().memoizedState;return[t,e]},useMutableSource:sw,useSyncExternalStore:ow,useId:ww,unstable_isNewReconciler:!1};function fn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(vn(e,t,i,r),Al(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(vn(e,t,i,r),Al(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Fr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(vn(e,t,r,n),Al(e,t,r))}};function Ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function Sw(t,e,n){var r=!1,i=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Ft(e)?Ai:St.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Ft(e)?Ai:St.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hu.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=tS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RA=typeof WeakMap=="function"?WeakMap:Map;function Aw(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Ed=r),hd(t,e)},n}function Cw(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BA.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var PA=lr.ReactCurrentOwner,Vt=!1;function Rt(t,e,n,r){e.child=t===null?tw(e,null,n,r):Rs(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return vs(e,i),r=bf(t,e,n,r,s,i),n=Lf(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ne&&n&&Tf(e),e.flags|=1,Rt(t,e,r,i),e.child)}function Pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kw(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function kw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xo(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,rr(t,e,i)}return dd(t,e,n,r,i)}function Rw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(fs,Ht),Ht|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(fs,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(fs,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(fs,Ht),Ht|=r;return Rt(t,e,i,n),e.child}function Pw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,r,i){var s=Ft(n)?Ai:St.current;return s=Cs(e,s),vs(e,i),n=bf(t,e,n,r,s,i),r=Lf(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ne&&r&&Tf(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Ng(t,e,n,r,i){if(Ft(n)){var s=!0;Zl(e)}else s=!1;if(vs(e,i),e.stateNode===null)Rl(t,e),Sw(e,n,r),cd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=Ft(n)?Ai:St.current,c=Cs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Sg(e,o,r,c),Tr=!1;var m=e.memoizedState;o.state=m,iu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Mt.current||Tr?(typeof d=="function"&&(ud(e,n,d,r),u=e.memoizedState),(l=Tr||Ig(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,rw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:fn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Ft(n)?Ai:St.current,u=Cs(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Sg(e,o,r,u),Tr=!1,m=e.memoizedState,o.state=m,iu(e,r,o,i);var N=e.memoizedState;l!==p||m!==N||Mt.current||Tr?(typeof I=="function"&&(ud(e,n,I,r),N=e.memoizedState),(c=Tr||Ig(e,n,c,r,m,N,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return fd(t,e,n,r,s,i)}function fd(t,e,n,r,i,s){Pw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mg(e,n,!1),rr(t,e,s);r=e.stateNode,PA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,l,s)):Rt(t,e,l,s),e.memoizedState=r.state,i&&mg(e,n,!0),e.child}function Nw(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),Nf(t,e.containerInfo)}function xg(t,e,n,r,i){return ks(),Sf(i),e.flags|=256,Rt(t,e,n,r),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function xw(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(xe,i&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=pd,t):Ff(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=jr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=jr(l,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pd,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ff(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,r){return r!==null&&Sf(r),Rs(e,t.child,null,n),t=Ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uh(Error(U(422))),al(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ku({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=md(o),e.memoizedState=pd,s);if(!(e.mode&1))return al(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=uh(s,r,void 0),al(t,e,o,r)}if(l=(o&t.childLanes)!==0,Vt||l){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),vn(r,t,i,-1))}return Hf(),r=uh(Error(U(421))),al(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$A.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Lr(i.nextSibling),Gt=e,Ne=!0,mn=null,t!==null&&(en[tn++]=Gn,en[tn++]=Qn,en[tn++]=Ci,Gn=t.id,Qn=t.overflow,Ci=e),e=Ff(e,r.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ld(t.return,e,n)}function ch(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ch(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ch(e,!0,n,null,s);break;case"together":ch(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xA(t,e,n){switch(e.tag){case 3:Nw(e),ks();break;case 5:iw(e);break;case 1:Ft(e.type)&&Zl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?xw(t,e,n):(Se(xe,xe.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Se(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Rw(t,e,n)}return rr(t,e,n)}var Ow,gd,bw,Lw;Ow=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};bw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vi(xn.current);var s=null;switch(n){case"input":i=Fh(t,i),r=Fh(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}$h(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DA(t,e,n){var r=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ft(e.type)&&Jl(),_t(e),null;case 3:return r=e.stateNode,Ps(),Re(Mt),Re(St),Df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(Sd(mn),mn=null))),gd(t,e),_t(e),null;case 5:xf(e);var i=vi(na.current);if(n=e.type,t!==null&&e.stateNode!=null)bw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return _t(e),null}if(t=vi(xn.current),sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[ea]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)Ce(Eo[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":zm(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":$m(r,s),Ce("invalid",r)}$h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&il(r.textContent,l,t),i=["children",""+l]):Ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ya(r),Bm(r,s,!0);break;case"textarea":Ya(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[ea]=r,Ow(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hh(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)Ce(Eo[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":zm(t,r),i=Fh(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":$m(t,r),i=zh(t,r),Ce("invalid",t);break;default:i=r}$h(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?d_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&c_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(t,u):typeof u=="number"&&Wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&lf(t,s,u,o))}switch(n){case"input":Ya(t),Bm(t,r,!1);break;case"textarea":Ya(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)Lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=vi(na.current),vi(xn.current),sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return _t(e),null;case 13:if(Re(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&qt!==null&&e.mode&1&&!(e.flags&128))Z_(),ks(),e.flags|=98560,s=!1;else if(s=sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Pn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else mn!==null&&(Sd(mn),mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Ze===0&&(Ze=3):Hf())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ps(),gd(t,e),t===null&&Jo(e.stateNode.containerInfo),_t(e),null;case 10:return kf(e.type._context),_t(e),null;case 17:return Ft(e.type)&&Jl(),_t(e),null;case 19:if(Re(xe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mo(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>xs&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return _t(e),null}else 2*Be()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=xe.current,Se(xe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return $f(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function OA(t,e){switch(If(e),e.tag){case 1:return Ft(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),Re(Mt),Re(St),Df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(Re(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(xe),null;case 4:return Ps(),null;case 10:return kf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ll=!1,Tt=!1,bA=typeof WeakSet=="function"?WeakSet:Set,K=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function yd(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Og=!1;function LA(t,e){if(ed=Gl,t=U_(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},Gl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,P=N.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:fn(e.type,k),P);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Me(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return N=Og,Og=!1,N}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yd(e,n,s)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vw(t){var e=t.alternate;e!==null&&(t.alternate=null,Vw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[ea],delete e[id],delete e[yA],delete e[vA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mw(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var ht=null,pn=!1;function _r(t,e,n){for(n=n.child;n!==null;)Fw(t,e,n),n=n.sibling}function Fw(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:Tt||ds(n,e);case 6:var r=ht,i=pn;ht=null,_r(t,e,n),ht=r,pn=i,ht!==null&&(pn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(pn?(t=ht,n=n.stateNode,t.nodeType===8?rh(t.parentNode,n):t.nodeType===1&&rh(t,n),Qo(t)):rh(ht,n.stateNode));break;case 4:r=ht,i=pn,ht=n.stateNode.containerInfo,pn=!0,_r(t,e,n),ht=r,pn=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yd(n,e,o),i=i.next}while(i!==r)}_r(t,e,n);break;case 1:if(!Tt&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}_r(t,e,n);break;case 21:_r(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,_r(t,e,n),Tt=r):_r(t,e,n);break;default:_r(t,e,n)}}function Lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bA),e.forEach(function(r){var i=HA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,pn=!1;break e;case 3:ht=l.stateNode.containerInfo,pn=!0;break e;case 4:ht=l.stateNode.containerInfo,pn=!0;break e}l=l.return}if(ht===null)throw Error(U(160));Fw(s,o,i),ht=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jw(e,t),e=e.sibling}function jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Cn(t),r&4){try{bo(3,t,t.return),Wu(3,t)}catch(k){Me(t,t.return,k)}try{bo(5,t,t.return)}catch(k){Me(t,t.return,k)}}break;case 1:dn(e,t),Cn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(dn(e,t),Cn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{Wo(i,"")}catch(k){Me(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&a_(i,s),Hh(l,o);var c=Hh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?d_(i,p):d==="dangerouslySetInnerHTML"?c_(i,p):d==="children"?Wo(i,p):lf(i,d,p,c)}switch(l){case"input":jh(i,s);break;case"textarea":l_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ps(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[ea]=s}catch(k){Me(t,t.return,k)}}break;case 6:if(dn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Me(t,t.return,k)}}break;case 3:if(dn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(k){Me(t,t.return,k)}break;case 4:dn(e,t),Cn(t);break;case 13:dn(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zf=Be())),r&4&&Lg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(c=Tt)||d,dn(e,t),Tt=c):dn(e,t),Cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,I=m.child,m.tag){case 0:case 11:case 14:case 15:bo(4,m,m.return);break;case 1:ds(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(k){Me(r,n,k)}}break;case 5:ds(m,m.return);break;case 22:if(m.memoizedState!==null){Mg(p);continue}}I!==null?(I.return=m,K=I):Mg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=h_("display",o))}catch(k){Me(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Me(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dn(e,t),Cn(t),r&4&&Lg(t);break;case 21:break;default:dn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wo(i,""),r.flags&=-33);var s=bg(t);wd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(t);_d(t,l,o);break;default:throw Error(U(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VA(t,e,n){K=t,Uw(t)}function Uw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Tt;l=ll;var c=Tt;if(ll=o,(Tt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Fg(i):u!==null?(u.return=o,K=u):Fg(i);for(;s!==null;)K=s,Uw(s),s=s.sibling;K=i,ll=l,Tt=c}Vg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Vg(t)}}function Vg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Tt||e.flags&512&&vd(e)}catch(m){Me(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Mg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Fg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{vd(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{vd(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var MA=Math.ceil,lu=lr.ReactCurrentDispatcher,jf=lr.ReactCurrentOwner,sn=lr.ReactCurrentBatchConfig,ge=0,ot=null,qe=null,pt=0,Ht=0,fs=ti(0),Ze=0,oa=null,Ri=0,qu=0,Uf=0,Lo=null,bt=null,zf=0,xs=1/0,Hn=null,uu=!1,Ed=null,Mr=null,ul=!1,Pr=null,cu=0,Vo=0,Td=null,Pl=-1,Nl=0;function Pt(){return ge&6?Be():Pl!==-1?Pl:Pl=Be()}function Fr(t){return t.mode&1?ge&2&&pt!==0?pt&-pt:wA.transition!==null?(Nl===0&&(Nl=S_()),Nl):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:x_(t.type)),t):1}function vn(t,e,n,r){if(50<Vo)throw Vo=0,Td=null,Error(U(185));wa(t,n,r),(!(ge&2)||t!==ot)&&(t===ot&&(!(ge&2)&&(qu|=n),Ze===4&&Sr(t,pt)),jt(t,r),n===1&&ge===0&&!(e.mode&1)&&(xs=Be()+500,Bu&&ni()))}function jt(t,e){var n=t.callbackNode;wS(t,e);var r=Kl(t,t===ot?pt:0);if(r===0)n!==null&&Km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Km(n),e===1)t.tag===0?_A(jg.bind(null,t)):Y_(jg.bind(null,t)),mA(function(){!(ge&6)&&ni()}),n=null;else{switch(A_(r)){case 1:n=ff;break;case 4:n=T_;break;case 16:n=ql;break;case 536870912:n=I_;break;default:n=ql}n=Gw(n,zw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zw(t,e){if(Pl=-1,Nl=0,ge&6)throw Error(U(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Kl(t,t===ot?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var i=ge;ge|=2;var s=$w();(ot!==t||pt!==e)&&(Hn=null,xs=Be()+500,Ti(t,e));do try{UA();break}catch(l){Bw(t,l)}while(!0);Cf(),lu.current=s,ge=i,qe!==null?e=0:(ot=null,pt=0,e=Ze)}if(e!==0){if(e===2&&(i=Qh(t),i!==0&&(r=i,e=Id(t,i))),e===1)throw n=oa,Ti(t,0),Sr(t,r),jt(t,Be()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FA(i)&&(e=hu(t,r),e===2&&(s=Qh(t),s!==0&&(r=s,e=Id(t,s))),e===1))throw n=oa,Ti(t,0),Sr(t,r),jt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:pi(t,bt,Hn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=zf+500-Be(),10<e)){if(Kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rd(pi.bind(null,t,bt,Hn),e);break}pi(t,bt,Hn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MA(r/1960))-r,10<r){t.timeoutHandle=rd(pi.bind(null,t,bt,Hn),r);break}pi(t,bt,Hn);break;case 5:pi(t,bt,Hn);break;default:throw Error(U(329))}}}return jt(t,Be()),t.callbackNode===n?zw.bind(null,t):null}function Id(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(Ti(t,e).flags|=256),t=hu(t,e),t!==2&&(e=bt,bt=n,e!==null&&Sd(e)),t}function Sd(t){bt===null?bt=t:bt.push.apply(bt,t)}function FA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Uf,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function jg(t){if(ge&6)throw Error(U(327));_s();var e=Kl(t,0);if(!(e&1))return jt(t,Be()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=Qh(t);r!==0&&(e=r,n=Id(t,r))}if(n===1)throw n=oa,Ti(t,0),Sr(t,e),jt(t,Be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t,bt,Hn),jt(t,Be()),null}function Bf(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(xs=Be()+500,Bu&&ni())}}function Pi(t){Pr!==null&&Pr.tag===0&&!(ge&6)&&_s();var e=ge;ge|=1;var n=sn.transition,r=Ee;try{if(sn.transition=null,Ee=1,t)return t()}finally{Ee=r,sn.transition=n,ge=e,!(ge&6)&&ni()}}function $f(){Ht=fs.current,Re(fs)}function Ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pA(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(If(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:Ps(),Re(Mt),Re(St),Df();break;case 5:xf(r);break;case 4:Ps();break;case 13:Re(xe);break;case 19:Re(xe);break;case 10:kf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(ot=t,qe=t=jr(t.current,null),pt=Ht=e,Ze=0,oa=null,Uf=qu=Ri=0,bt=Lo=null,yi!==null){for(e=0;e<yi.length;e++)if(n=yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yi=null}return t}function Bw(t,e){do{var n=qe;try{if(Cf(),Cl.current=au,ou){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(ki=0,st=Xe=Oe=null,Oo=!1,ra=0,jf.current=null,n===null||n.return===null){Ze=1,oa=e,qe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=pt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=Cg(o);if(I!==null){I.flags&=-257,kg(I,o,l,s,e),I.mode&1&&Ag(s,c,e),e=I,u=c;var N=e.updateQueue;if(N===null){var k=new Set;k.add(u),e.updateQueue=k}else N.add(u);break e}else{if(!(e&1)){Ag(s,c,e),Hf();break e}u=Error(U(426))}}else if(Ne&&l.mode&1){var P=Cg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),kg(P,o,l,s,e),Sf(Ns(u,l));break e}}s=u=Ns(u,l),Ze!==4&&(Ze=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Aw(s,u,e);_g(s,w);break e;case 1:l=u;var _=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Mr===null||!Mr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Cw(s,l,e);_g(s,b);break e}}s=s.return}while(s!==null)}Ww(n)}catch(M){e=M,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function $w(){var t=lu.current;return lu.current=au,t===null?au:t}function Hf(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(Ri&268435455)&&!(qu&268435455)||Sr(ot,pt)}function hu(t,e){var n=ge;ge|=2;var r=$w();(ot!==t||pt!==e)&&(Hn=null,Ti(t,e));do try{jA();break}catch(i){Bw(t,i)}while(!0);if(Cf(),ge=n,lu.current=r,qe!==null)throw Error(U(261));return ot=null,pt=0,Ze}function jA(){for(;qe!==null;)Hw(qe)}function UA(){for(;qe!==null&&!hS();)Hw(qe)}function Hw(t){var e=Kw(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?Ww(t):qe=e,jf.current=null}function Ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OA(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,qe=null;return}}else if(n=DA(n,e,Ht),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Ze===0&&(Ze=5)}function pi(t,e,n){var r=Ee,i=sn.transition;try{sn.transition=null,Ee=1,zA(t,e,n,r)}finally{sn.transition=i,Ee=r}return null}function zA(t,e,n,r){do _s();while(Pr!==null);if(ge&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ES(t,s),t===ot&&(qe=ot=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Gw(ql,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=Ee;Ee=1;var l=ge;ge|=4,jf.current=null,LA(t,n),jw(n,t),aA(td),Gl=!!ed,td=ed=null,t.current=n,VA(n),dS(),ge=l,Ee=o,sn.transition=s}else t.current=n;if(ul&&(ul=!1,Pr=t,cu=i),s=t.pendingLanes,s===0&&(Mr=null),mS(n.stateNode),jt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Ed,Ed=null,t;return cu&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Td?Vo++:(Vo=0,Td=t):Vo=0,ni(),null}function _s(){if(Pr!==null){var t=A_(cu),e=sn.transition,n=Ee;try{if(sn.transition=null,Ee=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,cu=0,ge&6)throw Error(U(331));var i=ge;for(ge|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,I=d.return;if(Vw(d),d===c){K=null;break}if(m!==null){m.return=I,K=m;break}K=I}}}var N=s.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,K=w;break e}K=s.return}}var _=t.current;for(K=_;K!==null;){o=K;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,K=C;else e:for(o=_;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(M){Me(l,l.return,M)}if(l===o){K=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,K=b;break e}K=l.return}}if(ge=i,ni(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Mu,t)}catch{}r=!0}return r}finally{Ee=n,sn.transition=e}}return!1}function Ug(t,e,n){e=Ns(n,e),e=Aw(t,e,1),t=Vr(t,e,1),e=Pt(),t!==null&&(wa(t,1,e),jt(t,e))}function Me(t,e,n){if(t.tag===3)Ug(t,t,n);else for(;e!==null;){if(e.tag===3){Ug(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=Ns(n,t),t=Cw(e,t,1),e=Vr(e,t,1),t=Pt(),e!==null&&(wa(e,1,t),jt(e,t));break}}e=e.return}}function BA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(pt&n)===n&&(Ze===4||Ze===3&&(pt&130023424)===pt&&500>Be()-zf?Ti(t,0):Uf|=n),jt(t,e)}function qw(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=Pt();t=nr(t,e),t!==null&&(wa(t,e,n),jt(t,n))}function $A(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qw(t,n)}function HA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),qw(t,n)}var Kw;Kw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,xA(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Ne&&e.flags&1048576&&X_(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=Cs(e,St.current);vs(e,n),i=bf(null,e,r,t,i,n);var s=Lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pf(e),i.updater=Hu,e.stateNode=i,i._reactInternals=e,cd(e,r,t,n),e=fd(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Tf(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qA(r),t=fn(r,t),i){case 0:e=dd(null,e,r,t,n);break e;case 1:e=Ng(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=Pg(null,e,r,fn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Ng(t,e,r,i,n);case 3:e:{if(Nw(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,rw(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(U(423)),e),e=xg(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(U(424)),e),e=xg(t,e,r,n,i);break e}else for(qt=Lr(e.stateNode.containerInfo.firstChild),Gt=e,Ne=!0,mn=null,n=tw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=rr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return iw(e),t===null&&ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nd(r,i)?o=null:s!==null&&nd(r,s)&&(e.flags|=32),Pw(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&ad(e),null;case 13:return xw(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Rg(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(nu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Mt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Jn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ld(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vs(e,n),i=an(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Pg(t,e,r,i,n);case 15:return kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Rl(t,e),e.tag=1,Ft(r)?(t=!0,Zl(e)):t=!1,vs(e,n),Sw(e,r,i),cd(e,r,i,n),fd(null,e,r,!0,t,n);case 19:return Dw(t,e,n);case 22:return Rw(t,e,n)}throw Error(U(156,e.tag))};function Gw(t,e){return E_(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new WA(t,e,n,r)}function Wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qA(t){if(typeof t=="function")return Wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===hf)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ii(n.children,i,s,e);case uf:o=8,i|=8;break;case bh:return t=rn(12,n,e,i|2),t.elementType=bh,t.lanes=s,t;case Lh:return t=rn(13,n,e,i),t.elementType=Lh,t.lanes=s,t;case Vh:return t=rn(19,n,e,i),t.elementType=Vh,t.lanes=s,t;case i_:return Ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:o=10;break e;case r_:o=9;break e;case cf:o=11;break e;case hf:o=14;break e;case Er:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=rn(22,t,r,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function hh(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function dh(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qf(t,e,n,r,i,s,o,l,u){return t=new KA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function GA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qw(t){if(!t)return qr;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ft(n))return Q_(t,n,e)}return e}function Yw(t,e,n,r,i,s,o,l,u){return t=qf(n,r,!0,t,i,s,o,l,u),t.context=Qw(null),n=t.current,r=Pt(),i=Fr(n),s=Jn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,wa(t,i,r),jt(t,r),t}function Gu(t,e,n,r){var i=e.current,s=Pt(),o=Fr(i);return n=Qw(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(vn(t,i,o,s),Al(t,i,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kf(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function QA(){return null}var Xw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}Qu.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Gu(t,e,null,null)};Qu.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){Gu(null,t,null,null)}),e[tr]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&N_(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function YA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=du(o);s.call(c)}}var o=Yw(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[tr]=o.current,Jo(t.nodeType===8?t.parentNode:t),Pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=du(u);l.call(c)}}var u=qf(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=u,t[tr]=u.current,Jo(t.nodeType===8?t.parentNode:t),Pi(function(){Gu(e,u,n,r)}),u}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=du(o);l.call(u)}}Gu(e,o,t,i)}else o=YA(n,e,t,i,r);return du(o)}C_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(pf(e,n|1),jt(e,Be()),!(ge&6)&&(xs=Be()+500,ni()))}break;case 13:Pi(function(){var r=nr(t,1);if(r!==null){var i=Pt();vn(r,t,1,i)}}),Kf(t,1)}};mf=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Pt();vn(e,t,134217728,n)}Kf(t,134217728)}};k_=function(t){if(t.tag===13){var e=Fr(t),n=nr(t,e);if(n!==null){var r=Pt();vn(n,t,e,r)}Kf(t,e)}};R_=function(){return Ee};P_=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};qh=function(t,e,n){switch(e){case"input":if(jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(U(90));o_(r),jh(r,i)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};m_=Bf;g_=Pi;var XA={usingClientEntryPoint:!1,Events:[Ta,as,zu,f_,p_,Bf]},go={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JA={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||QA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Mu=cl.inject(JA),Nn=cl}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XA;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(U(200));return GA(t,e,null,n)};Xt.createRoot=function(t,e){if(!Qf(t))throw Error(U(299));var n=!1,r="",i=Xw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qf(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Gf(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Pi(t)};Xt.hydrate=function(t,e,n){if(!Yu(e))throw Error(U(200));return Xu(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yw(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,Jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qu(e)};Xt.render=function(t,e,n){if(!Yu(e))throw Error(U(200));return Xu(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(U(40));return t._reactRootContainer?(Pi(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Xt.unstable_batchedUpdates=Bf;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Xu(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function Jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jw)}catch(t){console.error(t)}}Jw(),Jv.exports=Xt;var ZA=Jv.exports,$g=ZA;Dh.createRoot=$g.createRoot,Dh.hydrateRoot=$g.hydrateRoot;const Zw=x.createContext(void 0);function Hg(t){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=t==="auto"?e?"dark":"light":t;document.documentElement.setAttribute("data-theme",n)}const eC=({children:t})=>{const[e,n]=x.useState(()=>localStorage.getItem("theme")||"auto");x.useEffect(()=>{Hg(e),localStorage.setItem("theme",e)},[e]),x.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>{(localStorage.getItem("theme")||"auto")==="auto"&&Hg("auto")};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=x.useMemo(()=>({theme:e,setTheme:n}),[e]);return g.jsx(Zw.Provider,{value:r,children:t})};function tC(){const t=x.useContext(Zw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const eE=x.createContext(void 0),nC=({children:t})=>{const[e,n]=x.useState(()=>localStorage.getItem("layout")||"auto"),r=x.useMemo(()=>({layout:e,setLayout:i=>{localStorage.setItem("layout",i),n(i)}}),[e]);return g.jsx(eE.Provider,{value:r,children:t})};function Ju(){const t=x.useContext(eE);if(!t)throw new Error("useLayout must be used within LayoutProvider");return t}const rC=()=>{};var Wg={};/**
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
 */const tE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new sC;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const N=c<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oC=function(t){const e=tE(t);return nE.encodeByteArray(e,!0)},fu=function(t){return oC(t).replace(/\./g,"")},rE=function(t){try{return nE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lC=()=>aC().__FIREBASE_DEFAULTS__,uC=()=>{if(typeof process>"u"||typeof Wg>"u")return;const t=Wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rE(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return rC()||lC()||uC()||cC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iE=t=>{var e,n;return(n=(e=Zu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},hC=t=>{const e=iE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=Zu())==null?void 0:t.config},oE=t=>{var e;return(e=Zu())==null?void 0:e[`_${t}`]};/**
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
 */class dC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function fC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}const Mo={};function pC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mo))Mo[e]?t.emulator.push(e):t.prod.push(e);return t}function mC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qg=!1;function lE(t,e){if(typeof window>"u"||typeof document>"u"||!zs(window.location.host)||Mo[t]===e||Mo[t]||qg)return;Mo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=pC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{qg=!0,o()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=mC(r),I=n("text"),N=document.getElementById(I)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;l(C),d(P,k);const b=c();u(_,w),C.append(_,N,P,b),document.body.appendChild(C)}s?(N.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function yC(){var e;const t=(e=Zu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _C(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wC(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EC(){return!yC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cE(){try{return typeof indexedDB=="object"}catch{return!1}}function hE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function TC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const IC="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IC,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function SC(t,e){return t.replace(AC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AC=/\{\$([^}]+)}/g;function CC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kg(s)&&Kg(o)){if(!Kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kg(t){return t!==null&&typeof t=="object"}/**
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
 */function Sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kC(t,e){const n=new RC(t,e);return n.subscribe.bind(n)}class RC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fh),i.error===void 0&&(i.error=fh),i.complete===void 0&&(i.complete=fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fh(){}/**
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
 */const NC=1e3,xC=2,DC=4*60*60*1e3,OC=.5;function Gg(t,e=NC,n=xC){const r=e*Math.pow(n,t),i=Math.round(OC*r*(Math.random()-.5)*2);return Math.min(DC,r+i)}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mi="[DEFAULT]";/**
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
 */class bC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VC(e))try{this.getOrInitializeService({instanceIdentifier:mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mi){return this.instances.has(e)}getOptions(e=mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mi){return this.component?this.component.multipleInstances?e:mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LC(t){return t===mi?void 0:t}function VC(t){return t.instantiationMode==="EAGER"}/**
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
 */class MC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const FC={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},jC=ce.INFO,UC={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},zC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=jC,this._logHandler=zC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const BC=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function $C(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HC(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dE=new WeakMap,Ad=new WeakMap,fE=new WeakMap,ph=new WeakMap,Yf=new WeakMap;function WC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dE.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function qC(t){if(Ad.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ad.set(t,e)}let Cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ad.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KC(t){Cd=t(Cd)}function GC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mh(this),e,...n);return fE.set(r,e.sort?e.sort():[e]),Ur(r)}:HC().includes(t)?function(...e){return t.apply(mh(this),e),Ur(dE.get(this))}:function(...e){return Ur(t.apply(mh(this),e))}}function QC(t){return typeof t=="function"?GC(t):(t instanceof IDBTransaction&&qC(t),BC(t,$C())?new Proxy(t,Cd):t)}function Ur(t){if(t instanceof IDBRequest)return WC(t);if(ph.has(t))return ph.get(t);const e=QC(t);return e!==t&&(ph.set(t,e),Yf.set(e,t)),e}const mh=t=>Yf.get(t);function pE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ur(o.result),u.oldVersion,u.newVersion,Ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const YC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],gh=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gh.get(e))return gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return gh.set(e,s),s}KC(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
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
 */class JC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",Jg="0.14.5";/**
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
 */const ir=new ec("@firebase/app"),e1="@firebase/app-compat",t1="@firebase/analytics-compat",n1="@firebase/analytics",r1="@firebase/app-check-compat",i1="@firebase/app-check",s1="@firebase/auth",o1="@firebase/auth-compat",a1="@firebase/database",l1="@firebase/data-connect",u1="@firebase/database-compat",c1="@firebase/functions",h1="@firebase/functions-compat",d1="@firebase/installations",f1="@firebase/installations-compat",p1="@firebase/messaging",m1="@firebase/messaging-compat",g1="@firebase/performance",y1="@firebase/performance-compat",v1="@firebase/remote-config",_1="@firebase/remote-config-compat",w1="@firebase/storage",E1="@firebase/storage-compat",T1="@firebase/firestore",I1="@firebase/ai",S1="@firebase/firestore-compat",A1="firebase",C1="12.5.0";/**
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
 */const Rd="[DEFAULT]",k1={[kd]:"fire-core",[e1]:"fire-core-compat",[n1]:"fire-analytics",[t1]:"fire-analytics-compat",[i1]:"fire-app-check",[r1]:"fire-app-check-compat",[s1]:"fire-auth",[o1]:"fire-auth-compat",[a1]:"fire-rtdb",[l1]:"fire-data-connect",[u1]:"fire-rtdb-compat",[c1]:"fire-fn",[h1]:"fire-fn-compat",[d1]:"fire-iid",[f1]:"fire-iid-compat",[p1]:"fire-fcm",[m1]:"fire-fcm-compat",[g1]:"fire-perf",[y1]:"fire-perf-compat",[v1]:"fire-rc",[_1]:"fire-rc-compat",[w1]:"fire-gcs",[E1]:"fire-gcs-compat",[T1]:"fire-fst",[S1]:"fire-fst-compat",[I1]:"fire-vertex","fire-js":"fire-js",[A1]:"fire-js-all"};/**
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
 */const pu=new Map,R1=new Map,Pd=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Pd.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of pu.values())Zg(n,t);for(const n of R1.values())Zg(n,t);return!0}function Ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const P1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new ji("app","Firebase",P1);/**
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
 */class N1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=C1;function mE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw zr.create("no-options");const s=pu.get(i);if(s){if(Kr(n,s.options)&&Kr(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new MC(i);for(const u of Pd.values())o.addComponent(u);const l=new N1(n,r,o);return pu.set(i,l),l}function Xf(t=Rd){const e=pu.get(t);if(!e&&t===Rd&&sE())return mE();if(!e)throw zr.create("no-app",{appName:t});return e}function on(t,e,n){let r=k1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(o.join(" "));return}Fn(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",D1=1,aa="firebase-heartbeat-store";let yh=null;function gE(){return yh||(yh=pE(x1,D1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),yh}async function O1(t){try{const n=(await gE()).transaction(aa),r=await n.objectStore(aa).get(yE(t));return await n.done,r}catch(e){if(e instanceof Tn)ir.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function ey(t,e){try{const r=(await gE()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,yE(t)),await r.done}catch(n){if(n instanceof Tn)ir.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function yE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const b1=1024,L1=30;class V1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ty();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>L1){const o=j1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ty(),{heartbeatsToSend:r,unsentEntries:i}=M1(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function ty(){return new Date().toISOString().substring(0,10)}function M1(t,e=b1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ny(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?hE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ny(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}function j1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function U1(t){Fn(new En("platform-logger",e=>new JC(e),"PRIVATE")),Fn(new En("heartbeat",e=>new V1(e),"PRIVATE")),on(kd,Jg,t),on(kd,Jg,"esm2020"),on("fire-js","")}U1("");function vE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z1=vE,_E=new ji("auth","Firebase",vE());/**
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
 */const mu=new ec("@firebase/auth");function B1(t,...e){mu.logLevel<=ce.WARN&&mu.warn(`Auth (${Bs}): ${t}`,...e)}function Dl(t,...e){mu.logLevel<=ce.ERROR&&mu.error(`Auth (${Bs}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Zf(t,...e)}function _n(t,...e){return Zf(t,...e)}function Jf(t,e,n){const r={...z1(),[e]:n};return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return Jf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),Jf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _E.create(t,...e)}function X(t,e,...n){if(!t)throw Zf(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function sr(t,e){t||Yn(e)}/**
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
 */function Nd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function H1(){return ry()==="http:"||ry()==="https:"}function ry(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function W1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H1()||uE()||"connection"in navigator)?navigator.onLine:!0}function q1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=gC()||_C()}get(){return W1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ep(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const K1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const G1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Q1=new Aa(3e4,6e4);function ri(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ii(t,e,n,r,i={}){return EE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Sa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return vC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&zs(t.emulatorConfig.host)&&(c.credentials="include"),wE.fetch()(await TE(t,t.config.apiHost,n,l),c)})}async function EE(t,e,n){t._canInitEmulator=!1;const r={...K1,...e};try{const i=new X1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jf(t,d,c);un(t,d)}}catch(i){if(i instanceof Tn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Ca(t,e,n,r,i={}){const s=await ii(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function TE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ep(t.config,i):`${t.config.apiScheme}://${i}`;return G1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Y1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),Q1.get())})}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}function iy(t){return t!==void 0&&t.enterprise!==void 0}class J1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Y1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Z1(t,e){return ii(t,"GET","/v2/recaptchaConfig",ri(t,e))}/**
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
 */async function ek(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function gu(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tk(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=tp(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(vh(i.auth_time)),issuedAtTime:Fo(vh(i.iat)),expirationTime:Fo(vh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vh(t){return Number(t)*1e3}function tp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=rE(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sy(t){const e=tp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function la(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await la(t,gu(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?IE(i.providerUserInfo):[],o=sk(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function ik(t){const e=nt(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function IE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ok(t,e){const n=await EE(t,{},async()=>{const r=Sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await TE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&zs(t.emulatorConfig.host)&&(u.credentials="include"),wE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ak(t,e){return ii(t,"POST","/v2/accounts:revokeToken",ri(t,e))}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ok(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function wr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await la(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tk(this,e)}reload(){return ik(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await la(this,ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:N,stsTokenManager:k}=n;X(p&&k,e,"internal-error");const P=ws.fromJSON(this.name,k);X(typeof p=="string",e,"internal-error"),wr(r,e.name),wr(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof I=="boolean",e,"internal-error"),wr(s,e.name),wr(o,e.name),wr(l,e.name),wr(u,e.name),wr(c,e.name),wr(d,e.name);const w=new gn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return N&&Array.isArray(N)&&(w.providerData=N.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?IE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ws;l.updateFromIdToken(r);const u=new gn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const oy=new Map;function Xn(t){sr(t instanceof Function,"Expected a class definition");let e=oy.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oy.set(t,e),e)}/**
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
 */class SE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}SE.type="NONE";const ay=SE;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gu(this.auth,{idToken:e}).catch(()=>{});return n?gn._fromGetAccountInfoResponse(this.auth,n,e):null}return gn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(Xn(ay),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(ay);const o=Ol(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await gu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await gn._fromGetAccountInfoResponse(e,m,d)}else p=gn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Es(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Es(s,e,r))}}/**
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
 */function ly(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NE(e))return"Blackberry";if(xE(e))return"Webos";if(CE(e))return"Safari";if((e.includes("chrome/")||kE(e))&&!e.includes("edge/"))return"Chrome";if(PE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AE(t=At()){return/firefox\//i.test(t)}function CE(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kE(t=At()){return/crios\//i.test(t)}function RE(t=At()){return/iemobile/i.test(t)}function PE(t=At()){return/android/i.test(t)}function NE(t=At()){return/blackberry/i.test(t)}function xE(t=At()){return/webos/i.test(t)}function np(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lk(t=At()){var e;return np(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uk(){return wC()&&document.documentMode===10}function DE(t=At()){return np(t)||PE(t)||xE(t)||NE(t)||/windows phone/i.test(t)||RE(t)}/**
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
 */function OE(t,e=[]){let n;switch(t){case"Browser":n=ly(At());break;case"Worker":n=`${ly(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
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
 */class ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hk(t,e={}){return ii(t,"GET","/v2/passwordPolicy",ri(t,e))}/**
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
 */const dk=6;class fk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class pk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_E,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gu(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Zn(this));const n=e?nt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hk(this),n=new fk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ak(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&B1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function si(t){return nt(t)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=kC(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mk(t){tc=t}function bE(t){return tc.loadJS(t)}function gk(){return tc.recaptchaEnterpriseScript}function yk(){return tc.gapiScript}function vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _k{constructor(){this.enterprise=new wk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ek="recaptcha-enterprise",LE="NO_RECAPTCHA";class Tk{constructor(e){this.type=Ek,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Z1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new J1(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;iy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(LE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _k().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&iy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gk();u.length!==0&&(u+=l),bE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function cy(t,e,n,r=!1,i=!1){const s=new Tk(t);let o;if(i)o=LE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Ik(t,e){const n=Ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kr(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function Sk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ak(t,e,n){const r=si(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VE(e),{host:o,port:l}=Ck(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Kr(c,r.config.emulator)&&Kr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,zs(o)?(aE(`${s}//${o}${u}`),lE("Auth",!0)):kk()}function VE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ck(t){const e=VE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hy(o)}}}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function Rk(t,e){return ii(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Pk(t,e){return Ca(t,"POST","/v1/accounts:signInWithPassword",ri(t,e))}/**
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
 */async function Nk(t,e){return Ca(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}async function xk(t,e){return Ca(t,"POST","/v1/accounts:signInWithEmailLink",ri(t,e))}/**
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
 */class ua extends rp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,n,"signInWithPassword",Pk);case"emailLink":return Nk(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(e,r,"signUpPassword",Rk);case"emailLink":return xk(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return Ca(t,"POST","/v1/accounts:signInWithIdp",ri(t,e))}/**
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
 */const Dk="http://localhost";class Ni extends rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:Dk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sa(n)}return e}}/**
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
 */function Ok(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bk(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class ip{constructor(e){const n=To(Io(e)),r=n.apiKey??null,i=n.oobCode??null,s=Ok(n.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bk(e);try{return new ip(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ip.parseLink(n);return X(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends sp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends ka{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Cr extends ka{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
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
 */class kr extends ka{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */async function Lk(t,e){return Ca(t,"POST","/v1/accounts:signUp",ri(t,e))}/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=dy(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dy(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vu extends Tn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vu(e,n,r,i)}}function ME(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,s,e,r):s})}async function Vk(t,e,n=!1){const r=await la(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
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
 */async function Mk(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await la(t,ME(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=tp(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
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
 */async function FE(t,e,n=!1){if(Wt(t.app))return Promise.reject(Zn(t));const r="signIn",i=await ME(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Fk(t,e){return FE(si(t),e)}/**
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
 */async function jE(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jk(t,e,n){if(Wt(t.app))return Promise.reject(Zn(t));const r=si(t),o=await Dd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jE(t),u}),l=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Uk(t,e,n){return Wt(t.app)?Promise.reject(Zn(t)):Fk(nt(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jE(t),r})}function zk(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function Bk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function $k(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function Hk(t){return nt(t).signOut()}const _u="__sak";/**
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
 */class UE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_u,"1"),this.storage.removeItem(_u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Wk=1e3,qk=10;class zE extends UE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=DE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zE.type="LOCAL";const Kk=zE;/**
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
 */class BE extends UE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const $E=BE;/**
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
 */function Gk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Gk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=op("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dn(){return window}function Yk(t){Dn().location.href=t}/**
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
 */function HE(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function Xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Zk(){return HE()?self:null}/**
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
 */const WE="firebaseLocalStorageDb",eR=1,wu="firebaseLocalStorage",qE="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function tR(){const t=indexedDB.deleteDatabase(WE);return new Ra(t).toPromise()}function Od(){const t=indexedDB.open(WE,eR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:qE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await tR(),e(await Od()))})})}async function fy(t,e,n){const r=rc(t,!0).put({[qE]:e,value:n});return new Ra(r).toPromise()}async function nR(t,e){const n=rc(t,!1).get(e),r=await new Ra(n).toPromise();return r===void 0?null:r.value}function py(t,e){const n=rc(t,!0).delete(e);return new Ra(n).toPromise()}const rR=800,iR=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(Zk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Xk(),!this.activeServiceWorker)return;this.sender=new Qk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await fy(e,_u,"1"),await py(e,_u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rc(i,!1).getAll();return new Ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const sR=KE;new Aa(3e4,6e4);/**
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
 */function GE(t,e){return e?Xn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ap extends rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oR(t){return FE(t.auth,new ap(t),t.bypassAuthState)}function aR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Mk(n,new ap(t),t.bypassAuthState)}async function lR(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Vk(n,new ap(t),t.bypassAuthState)}/**
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
 */class QE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return aR;default:un(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new Aa(2e3,1e4);async function cR(t,e,n){if(Wt(t.app))return Promise.reject(_n(t,"operation-not-supported-in-this-environment"));const r=si(t);$1(t,e,sp);const i=GE(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends QE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}_i.currentPopupAction=null;/**
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
 */const hR="pendingRedirect",bl=new Map;class dR extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(t,e){const n=gR(e),r=mR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pR(t,e){bl.set(t._key(),e)}function mR(t){return Xn(t._redirectPersistence)}function gR(t){return Ol(hR,t.config.apiKey,t.name)}async function yR(t,e,n=!1){if(Wt(t.app))return Promise.reject(Zn(t));const r=si(t),i=GE(r,e),o=await new dR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YE(t);default:return!1}}/**
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
 */async function ER(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function SR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ER(t);for(const n of e)try{if(AR(n))return}catch{}un(t,"unauthorized-domain")}function AR(t){const e=Nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IR.test(n))return!1;if(TR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CR=new Aa(3e4,6e4);function gy(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kR(t){return new Promise((e,n)=>{var i,s,o;function r(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),n(_n(t,"network-request-failed"))},timeout:CR.get()})}if((s=(i=Dn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Dn().gapi)!=null&&o.load)r();else{const l=vk("iframefcb");return Dn()[l]=()=>{gapi.load?r():n(_n(t,"network-request-failed"))},bE(`${yk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function RR(t){return Ll=Ll||kR(t),Ll}/**
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
 */const PR=new Aa(5e3,15e3),NR="__/auth/iframe",xR="emulator/auth/iframe",DR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bR(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ep(e,xR):`https://${t.config.authDomain}/${NR}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},i=OR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sa(r).slice(1)}`}async function LR(t){const e=await RR(t),n=Dn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:bR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=Dn().setTimeout(()=>{s(o)},PR.get());function u(){Dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const VR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,FR=600,jR="_blank",UR="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=MR,i=FR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...VR,width:r.toString(),height:i.toString(),top:s,left:o},c=At().toLowerCase();n&&(l=kE(c)?jR:n),AE(c)&&(e=e||UR,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,N])=>`${m}${I}=${N},`,"");if(lk(c)&&l!=="_self")return BR(e||"",l),new yy(null);const p=window.open(e||"",l,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new yy(p)}function BR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $R="__/auth/handler",HR="emulator/auth/handler",WR=encodeURIComponent("fac");async function vy(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:i};if(e instanceof sp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ka){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${WR}=${encodeURIComponent(u)}`:"";return`${qR(t)}?${Sa(l).slice(1)}${c}`}function qR({config:t}){return t.emulator?ep(t,HR):`https://${t.authDomain}/${$R}`}/**
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
 */const _h="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$E,this._completeRedirectFn=yR,this._overrideRedirectResult=pR}async _openPopup(e,n,r,i){var o;sr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await vy(e,n,r,Nd(),i);return zR(e,s,op())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vy(e,n,r,Nd(),i);return Yk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LR(e),r=new _R(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[_h];s!==void 0&&n(!!s),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return DE()||CE()||np()}}const GR=KR;var _y="@firebase/auth",wy="1.11.1";/**
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
 */class QR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(t){Fn(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OE(t)},c=new pk(r,i,s,u);return Sk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new En("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new QR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(_y,wy,YR(t)),on(_y,wy,"esm2020")}/**
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
 */const JR=5*60,ZR=oE("authIdTokenMaxAge")||JR;let Ey=null;const eP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZR)return;const i=n==null?void 0:n.token;Ey!==i&&(Ey=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tP(t=Xf()){const e=Ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ik(t,{popupRedirectResolver:GR,persistence:[sR,Kk,$E]}),r=oE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eP(s.toString());Bk(n,o,()=>o(n.currentUser)),zk(n,l=>o(l))}}const i=iE("auth");return i&&Ak(n,`http://${i}`),n}function nP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,XE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function T(){}T.prototype=v.prototype,E.F=v.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(A,R,D){for(var S=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)S[ye-2]=arguments[ye];return v.prototype[R].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,T){T||(T=0);const A=Array(16);if(typeof v=="string")for(var R=0;R<16;++R)A[R]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(R=0;R<16;++R)A[R]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=E.g[0],T=E.g[1],R=E.g[2];let D=E.g[3],S;S=v+(D^T&(R^D))+A[0]+3614090360&4294967295,v=T+(S<<7&4294967295|S>>>25),S=D+(R^v&(T^R))+A[1]+3905402710&4294967295,D=v+(S<<12&4294967295|S>>>20),S=R+(T^D&(v^T))+A[2]+606105819&4294967295,R=D+(S<<17&4294967295|S>>>15),S=T+(v^R&(D^v))+A[3]+3250441966&4294967295,T=R+(S<<22&4294967295|S>>>10),S=v+(D^T&(R^D))+A[4]+4118548399&4294967295,v=T+(S<<7&4294967295|S>>>25),S=D+(R^v&(T^R))+A[5]+1200080426&4294967295,D=v+(S<<12&4294967295|S>>>20),S=R+(T^D&(v^T))+A[6]+2821735955&4294967295,R=D+(S<<17&4294967295|S>>>15),S=T+(v^R&(D^v))+A[7]+4249261313&4294967295,T=R+(S<<22&4294967295|S>>>10),S=v+(D^T&(R^D))+A[8]+1770035416&4294967295,v=T+(S<<7&4294967295|S>>>25),S=D+(R^v&(T^R))+A[9]+2336552879&4294967295,D=v+(S<<12&4294967295|S>>>20),S=R+(T^D&(v^T))+A[10]+4294925233&4294967295,R=D+(S<<17&4294967295|S>>>15),S=T+(v^R&(D^v))+A[11]+2304563134&4294967295,T=R+(S<<22&4294967295|S>>>10),S=v+(D^T&(R^D))+A[12]+1804603682&4294967295,v=T+(S<<7&4294967295|S>>>25),S=D+(R^v&(T^R))+A[13]+4254626195&4294967295,D=v+(S<<12&4294967295|S>>>20),S=R+(T^D&(v^T))+A[14]+2792965006&4294967295,R=D+(S<<17&4294967295|S>>>15),S=T+(v^R&(D^v))+A[15]+1236535329&4294967295,T=R+(S<<22&4294967295|S>>>10),S=v+(R^D&(T^R))+A[1]+4129170786&4294967295,v=T+(S<<5&4294967295|S>>>27),S=D+(T^R&(v^T))+A[6]+3225465664&4294967295,D=v+(S<<9&4294967295|S>>>23),S=R+(v^T&(D^v))+A[11]+643717713&4294967295,R=D+(S<<14&4294967295|S>>>18),S=T+(D^v&(R^D))+A[0]+3921069994&4294967295,T=R+(S<<20&4294967295|S>>>12),S=v+(R^D&(T^R))+A[5]+3593408605&4294967295,v=T+(S<<5&4294967295|S>>>27),S=D+(T^R&(v^T))+A[10]+38016083&4294967295,D=v+(S<<9&4294967295|S>>>23),S=R+(v^T&(D^v))+A[15]+3634488961&4294967295,R=D+(S<<14&4294967295|S>>>18),S=T+(D^v&(R^D))+A[4]+3889429448&4294967295,T=R+(S<<20&4294967295|S>>>12),S=v+(R^D&(T^R))+A[9]+568446438&4294967295,v=T+(S<<5&4294967295|S>>>27),S=D+(T^R&(v^T))+A[14]+3275163606&4294967295,D=v+(S<<9&4294967295|S>>>23),S=R+(v^T&(D^v))+A[3]+4107603335&4294967295,R=D+(S<<14&4294967295|S>>>18),S=T+(D^v&(R^D))+A[8]+1163531501&4294967295,T=R+(S<<20&4294967295|S>>>12),S=v+(R^D&(T^R))+A[13]+2850285829&4294967295,v=T+(S<<5&4294967295|S>>>27),S=D+(T^R&(v^T))+A[2]+4243563512&4294967295,D=v+(S<<9&4294967295|S>>>23),S=R+(v^T&(D^v))+A[7]+1735328473&4294967295,R=D+(S<<14&4294967295|S>>>18),S=T+(D^v&(R^D))+A[12]+2368359562&4294967295,T=R+(S<<20&4294967295|S>>>12),S=v+(T^R^D)+A[5]+4294588738&4294967295,v=T+(S<<4&4294967295|S>>>28),S=D+(v^T^R)+A[8]+2272392833&4294967295,D=v+(S<<11&4294967295|S>>>21),S=R+(D^v^T)+A[11]+1839030562&4294967295,R=D+(S<<16&4294967295|S>>>16),S=T+(R^D^v)+A[14]+4259657740&4294967295,T=R+(S<<23&4294967295|S>>>9),S=v+(T^R^D)+A[1]+2763975236&4294967295,v=T+(S<<4&4294967295|S>>>28),S=D+(v^T^R)+A[4]+1272893353&4294967295,D=v+(S<<11&4294967295|S>>>21),S=R+(D^v^T)+A[7]+4139469664&4294967295,R=D+(S<<16&4294967295|S>>>16),S=T+(R^D^v)+A[10]+3200236656&4294967295,T=R+(S<<23&4294967295|S>>>9),S=v+(T^R^D)+A[13]+681279174&4294967295,v=T+(S<<4&4294967295|S>>>28),S=D+(v^T^R)+A[0]+3936430074&4294967295,D=v+(S<<11&4294967295|S>>>21),S=R+(D^v^T)+A[3]+3572445317&4294967295,R=D+(S<<16&4294967295|S>>>16),S=T+(R^D^v)+A[6]+76029189&4294967295,T=R+(S<<23&4294967295|S>>>9),S=v+(T^R^D)+A[9]+3654602809&4294967295,v=T+(S<<4&4294967295|S>>>28),S=D+(v^T^R)+A[12]+3873151461&4294967295,D=v+(S<<11&4294967295|S>>>21),S=R+(D^v^T)+A[15]+530742520&4294967295,R=D+(S<<16&4294967295|S>>>16),S=T+(R^D^v)+A[2]+3299628645&4294967295,T=R+(S<<23&4294967295|S>>>9),S=v+(R^(T|~D))+A[0]+4096336452&4294967295,v=T+(S<<6&4294967295|S>>>26),S=D+(T^(v|~R))+A[7]+1126891415&4294967295,D=v+(S<<10&4294967295|S>>>22),S=R+(v^(D|~T))+A[14]+2878612391&4294967295,R=D+(S<<15&4294967295|S>>>17),S=T+(D^(R|~v))+A[5]+4237533241&4294967295,T=R+(S<<21&4294967295|S>>>11),S=v+(R^(T|~D))+A[12]+1700485571&4294967295,v=T+(S<<6&4294967295|S>>>26),S=D+(T^(v|~R))+A[3]+2399980690&4294967295,D=v+(S<<10&4294967295|S>>>22),S=R+(v^(D|~T))+A[10]+4293915773&4294967295,R=D+(S<<15&4294967295|S>>>17),S=T+(D^(R|~v))+A[1]+2240044497&4294967295,T=R+(S<<21&4294967295|S>>>11),S=v+(R^(T|~D))+A[8]+1873313359&4294967295,v=T+(S<<6&4294967295|S>>>26),S=D+(T^(v|~R))+A[15]+4264355552&4294967295,D=v+(S<<10&4294967295|S>>>22),S=R+(v^(D|~T))+A[6]+2734768916&4294967295,R=D+(S<<15&4294967295|S>>>17),S=T+(D^(R|~v))+A[13]+1309151649&4294967295,T=R+(S<<21&4294967295|S>>>11),S=v+(R^(T|~D))+A[4]+4149444226&4294967295,v=T+(S<<6&4294967295|S>>>26),S=D+(T^(v|~R))+A[11]+3174756917&4294967295,D=v+(S<<10&4294967295|S>>>22),S=R+(v^(D|~T))+A[2]+718787259&4294967295,R=D+(S<<15&4294967295|S>>>17),S=T+(D^(R|~v))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+D&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const T=v-this.blockSize,A=this.C;let R=this.h,D=0;for(;D<v;){if(R==0)for(;D<=T;)i(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<v;)if(A[R++]=E.charCodeAt(D++),R==this.blockSize){i(this,A),R=0;break}}else for(;D<v;)if(A[R++]=E[D++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)E[v++]=this.g[T]>>>A&255;return E};function s(E,v){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=v(E)}function o(E,v){this.h=v;const T=[];let A=!0;for(let R=E.length-1;R>=0;R--){const D=E[R]|0;A&&D==v||(T[R]=D,A=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(c(-E));const v=[];let T=1;for(let A=0;E>=T;A++)v[A]=E/T|0,T*=4294967296;return new o(v,0)}function d(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return P(d(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(v,8));let A=p;for(let D=0;D<E.length;D+=8){var R=Math.min(8,E.length-D);const S=parseInt(E.substring(D,D+R),v);R<8?(R=c(Math.pow(v,R)),A=A.j(R).add(c(S))):(A=A.j(T),A=A.add(c(S)))}return A}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let E=0,v=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);E+=(A>=0?A:4294967296+A)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(k(this))return"-"+P(this).toString(E);const v=c(Math.pow(E,6));var T=this;let A="";for(;;){const R=b(T,v).g;T=w(T,R.j(v));let D=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=R,N(T))return D+A;for(;D.length<6;)D="0"+D;A=D+A}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:N(E)?0:1};function P(E){const v=E.g.length,T=[];for(let A=0;A<v;A++)T[A]=~E.g[A];return new o(T,~E.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),T=[];let A=0;for(let R=0;R<=v;R++){let D=A+(this.i(R)&65535)+(E.i(R)&65535),S=(D>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=S>>>16,D&=65535,S&=65535,T[R]=S<<16|D}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,v){return E.add(P(v))}t.j=function(E){if(N(this)||N(E))return p;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(this.l(I)<0&&E.l(I)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,T=[];for(var A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<E.g.length;R++){const D=this.i(A)>>>16,S=this.i(A)&65535,ye=E.i(R)>>>16,Pe=E.i(R)&65535;T[2*A+2*R]+=S*Pe,_(T,2*A+2*R),T[2*A+2*R+1]+=D*Pe,_(T,2*A+2*R+1),T[2*A+2*R+1]+=S*ye,_(T,2*A+2*R+1),T[2*A+2*R+2]+=D*ye,_(T,2*A+2*R+2)}for(E=0;E<v;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=v;E<2*v;E++)T[E]=0;return new o(T,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function C(E,v){this.g=E,this.h=v}function b(E,v){if(N(v))throw Error("division by zero");if(N(E))return new C(p,p);if(k(E))return v=b(P(E),v),new C(P(v.g),P(v.h));if(k(v))return v=b(E,P(v)),new C(P(v.g),v.h);if(E.g.length>30){if(k(E)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=v;A.l(E)<=0;)T=M(T),A=M(A);var R=F(T,1),D=F(A,1);for(A=F(A,2),T=F(T,2);!N(A);){var S=D.add(A);S.l(E)<=0&&(R=R.add(T),D=S),A=F(A,1),T=F(T,1)}return v=w(E,R.j(v)),new C(R,v)}for(R=p;E.l(v)>=0;){for(T=Math.max(1,Math.floor(E.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),D=c(T),S=D.j(v);k(S)||S.l(E)>0;)T-=A,D=c(T),S=D.j(v);N(D)&&(D=m),R=R.add(D),E=w(E,S)}return new C(R,E)}t.B=function(E){return b(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<v;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function M(E){const v=E.g.length+1,T=[];for(let A=0;A<v;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function F(E,v){const T=v>>5;v%=32;const A=E.g.length-T,R=[];for(let D=0;D<A;D++)R[D]=v>0?E.i(D+T)>>>v|E.i(D+T+1)<<32-v:E.i(D+T);return new o(R,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,XE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Br=o}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var JE,So,ZE,Vl,bd,eT,tT,nT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dl=="object"&&dl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in f))break e;f=f[O]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,O,L){for(var H=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)H[ie-2]=arguments[ie];return h.prototype[O].apply(y,H)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function N(a,h){for(let y=1;y<arguments.length;y++){const O=arguments[y];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const L=O.length||0;a.length=f+L;for(let H=0;H<L;H++)a[f+H]=O[H]}else a.push(O)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const y=C.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var C=new k(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,E=new _,v=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ye,R),ye.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),Fe=0;function at(a,h,f,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=O,this.key=++Fe,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function B(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(a,h){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)a[f]=y[f];for(let L=0;L<re.length;L++)f=re[L],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function $e(a){this.src=a,this.g={},this.h=0}$e.prototype.add=function(a,h,f,y,O){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const H=ut(a,h,y,O);return H>-1?(h=a[H],f||(h.fa=!1)):(h=new at(h,this.src,L,!!y,O),h.fa=f,a.push(h)),h};function je(a,h){const f=h.type;if(f in a.g){var y=a.g[f],O=Array.prototype.indexOf.call(y,h,void 0),L;(L=O>=0)&&Array.prototype.splice.call(y,O,1),L&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ut(a,h,f,y){for(let O=0;O<a.length;++O){const L=a[O];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==y)return O}return-1}var Qe="closure_lm_"+(Math.random()*1e6|0),Ut={};function Zt(a,h,f,y,O){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Zt(a,h[L],f,y,O);return null}return f=Qs(f),a&&a[Pe]?a.J(h,f,l(y)?!!y.capture:!1,O):In(a,h,f,!1,y,O)}function In(a,h,f,y,O,L){if(!h)throw Error("Invalid event type");const H=l(O)?!!O.capture:!!O;let ie=ur(a);if(ie||(a[Qe]=ie=new $e(a)),f=ie.add(h,f,y,H,L),f.proxy)return f;if(y=cn(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)D||(O=H),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(Ct(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cn(){function a(f){return h.call(a.src,a.listener,f)}const h=yt;return a}function z(a,h,f,y,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)z(a,h[L],f,y,O);else y=l(y)?!!y.capture:!!y,f=Qs(f),a&&a[Pe]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],f=ut(h,f,y,O),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=ur(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ut(h,f,y,O)),(f=a>-1?h[a]:null)&&_e(f))}function _e(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Pe])je(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Ct(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=ur(h))?(je(f,a),f.h==0&&(f.src=null,h[Qe]=null)):$(a)}}}function Ct(a){return a in Ut?Ut[a]:Ut[a]="on"+a}function yt(a,h){if(a.da)a=!0;else{h=new ye(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&_e(a),a=f.call(y,h)}return a}function ur(a){return a=a[Qe],a instanceof $e?a:null}var cr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qs(a){return typeof a=="function"?a:(a[cr]||(a[cr]=function(h){return a.handleEvent(h)}),a[cr])}function we(){A.call(this),this.i=new $e(this),this.M=this,this.G=null}p(we,A),we.prototype[Pe]=!0,we.prototype.removeEventListener=function(a,h,f,y){z(this,a,h,f,y)};function He(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var O=h;h=new R(y,a),lt(h,O)}O=!0;let L,H;if(f)for(H=f.length-1;H>=0;H--)L=h.g=f[H],O=Wi(L,y,!0,h)&&O;if(L=h.g=a,O=Wi(L,y,!0,h)&&O,O=Wi(L,y,!1,h)&&O,f)for(H=0;H<f.length;H++)L=h.g=f[H],O=Wi(L,y,!1,h)&&O}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)$(f[y]);delete a.g[h],a.h--}}this.G=null},we.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},we.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Wi(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let L=0;L<h.length;++L){const H=h[L];if(H&&!H.da&&H.capture==f){const ie=H.listener,Ye=H.ha||H.src;H.fa&&je(a.i,H),O=ie.call(Ye,y)!==!1&&O}}return O&&!y.defaultPrevented}function Sc(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function La(a){a.g=Sc(()=>{a.g=null,a.i&&(a.i=!1,La(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Va extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:La(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(a){A.call(this),this.h=a,this.g={}}p(zn,A);var qi=[];function Ki(a){B(a.g,function(h,f){this.g.hasOwnProperty(f)&&_e(h)},a),a.g={}}zn.prototype.N=function(){zn.Z.N.call(this),Ki(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ys=o.JSON.stringify,Ac=o.JSON.parse,Cc=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ma(){}function oe(){}var ae={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function le(){R.call(this,"d")}p(le,R);function fe(){R.call(this,"c")}p(fe,R);var se={},ct=null;function zt(){return ct=ct||new we}se.Ia="serverreachability";function Bn(a){R.call(this,se.Ia,a)}p(Bn,R);function hn(a){const h=zt();He(h,new Bn(h))}se.STAT_EVENT="statevent";function hr(a,h){R.call(this,se.STAT_EVENT,a),this.stat=h}p(hr,R);function Ue(a){const h=zt();He(h,new hr(h,a))}se.Ja="timingevent";function dr(a,h){R.call(this,se.Ja,a),this.size=h}p(dr,R);function W(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Q(){this.g=!0}Q.prototype.ua=function(){this.g=!1};function ne(a,h,f,y,O,L){a.info(function(){if(a.g)if(L){var H="",ie=L.split("&");for(let Ie=0;Ie<ie.length;Ie++){var Ye=ie[Ie].split("=");if(Ye.length>1){const rt=Ye[0];Ye=Ye[1];const An=rt.split("_");H=An.length>=2&&An[1]=="type"?H+(rt+"="+Ye+"&"):H+(rt+"=redacted&")}}}else H=null;else H=L;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+f+`
`+H})}function Bt(a,h,f,y,O,L,H){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+f+`
`+L+" "+H})}function Te(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+kt(a,f)+(y?" "+y:"")})}function Gi(a,h){a.info(function(){return"TIMEOUT: "+h})}Q.prototype.info=function(){};function kt(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var f=L[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var O=y[0];if(O!="noop"&&O!="stop"&&O!="close")for(let H=1;H<y.length;H++)y[H]=""}}}}return Ys(L)}catch{return h}}var Fa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xp;function kc(){}p(kc,Ma),kc.prototype.g=function(){return new XMLHttpRequest},Xp=new kc;function Xs(a){return encodeURIComponent(String(a))}function a0(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function fr(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new zn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Jp}function Jp(){this.i=null,this.g="",this.h=!1}var Zp={},Rc={};function Pc(a,h,f){a.M=1,a.A=Ua(Sn(h)),a.u=f,a.R=!0,em(a,null)}function em(a,h){a.F=Date.now(),ja(a),a.B=Sn(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),fm(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Jp,a.g=xm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Va(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(qi[0]=O.toString()),O=qi);for(let L=0;L<O.length;L++){const H=Zt(f,O[L],y||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),hn(),ne(a.i,a.v,a.B,a.l,a.S,a.u)}fr.prototype.ba=function(a){a=a.target;const h=this.O;h&&gr(a)==3?h.j():this.Y(a)},fr.prototype.Y=function(a){try{if(a==this.g)e:{const ie=gr(this.g),Ye=this.g.ya(),Ie=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||wm(this.g)))){this.K||ie!=4||Ye==7||(Ye==8||Ie<=0?hn(3):hn(2)),Nc(this);var h=this.g.ca();this.X=h;var f=l0(this);if(this.o=h==200,Bt(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,O=this.g;if((y=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(y)){var L=y;break t}}L=null}if(a=L)Te(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xc(this,a);else{this.o=!1,this.m=3,Ue(12),li(this),Js(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<f.length;)if(rt=u0(this,f),rt==Rc){ie==4&&(this.m=4,Ue(14),a=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Zp){this.m=4,Ue(15),Te(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Te(this.i,this.l,rt,null),xc(this,rt);if(tm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||f.length!=0||this.h.h||(this.m=1,Ue(16),a=!1),this.o=this.o&&a,!a)Te(this.i,this.l,f,"[Invalid Chunked Response]"),li(this),Js(this);else if(f.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),jc(H),H.P=!0,Ue(11))}}else Te(this.i,this.l,f,null),xc(this,f);ie==4&&li(this),this.o&&!this.K&&(ie==4?km(this.j,this):(this.o=!1,ja(this)))}else I0(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),li(this),Js(this)}}}catch{}finally{}};function l0(a){if(!tm(a))return a.g.la();const h=wm(a.g);if(h==="")return"";let f="";const y=h.length,O=gr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return li(a),Js(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,f+=a.h.i.decode(h[L],{stream:!(O&&L==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function tm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function u0(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Rc:(f=Number(h.substring(f,y)),isNaN(f)?Zp:(y+=1,y+f>h.length?Rc:(h=h.slice(y,y+f),a.C=y+f,h)))}fr.prototype.cancel=function(){this.K=!0,li(this)};function ja(a){a.T=Date.now()+a.H,nm(a,a.H)}function nm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=W(c(a.aa,a),h)}function Nc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}fr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Gi(this.i,this.B),this.M!=2&&(hn(),Ue(17)),li(this),this.m=2,Js(this)):nm(this,this.T-a)};function Js(a){a.j.I==0||a.K||km(a.j,a)}function li(a){Nc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ki(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function xc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Dc(f.h,a))){if(!a.L&&Dc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Wa(f),$a(f);else break e;Fc(f),Ue(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=W(c(f.Va,f),6e3));sm(f.h)<=1&&f.ta&&(f.ta=void 0)}else ci(f,11)}else if((a.L||f.g==a)&&Wa(f),!S(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let Ie=O[h];const rt=Ie[0];if(!(rt<=f.K))if(f.K=rt,Ie=Ie[1],f.I==2)if(Ie[0]=="c"){f.M=Ie[1],f.ba=Ie[2];const An=Ie[3];An!=null&&(f.ka=An,f.j.info("VER="+f.ka));const hi=Ie[4];hi!=null&&(f.za=hi,f.j.info("SVER="+f.za));const yr=Ie[5];yr!=null&&typeof yr=="number"&&yr>0&&(y=1.5*yr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const vr=a.g;if(vr){const Ka=vr.g?vr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ka){var L=y.h;L.g||Ka.indexOf("spdy")==-1&&Ka.indexOf("quic")==-1&&Ka.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Oc(L,L.h),L.h=null))}if(y.G){const Uc=vr.g?vr.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(y.wa=Uc,Ae(y.J,y.G,Uc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var H=a;if(y.na=Nm(y,y.L?y.ba:null,y.W),H.L){om(y.h,H);var ie=H,Ye=y.O;Ye&&(ie.H=Ye),ie.D&&(Nc(ie),ja(ie)),y.g=H}else Am(y);f.i.length>0&&Ha(f)}else Ie[0]!="stop"&&Ie[0]!="close"||ci(f,7);else f.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?ci(f,7):Mc(f):Ie[0]!="noop"&&f.l&&f.l.qa(Ie),f.A=0)}}hn(4)}catch{}}var c0=class{constructor(a,h){this.g=a,this.map=h}};function rm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function im(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sm(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function om(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rm.prototype.cancel=function(){if(this.i=am(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function am(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h0(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let O,L=null;y>=0?(O=a[f].substring(0,y),L=a[f].substring(y+1)):O=a[f],h(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function pr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof pr?(this.l=a.l,Zs(this,a.j),this.o=a.o,this.g=a.g,eo(this,a.u),this.h=a.h,bc(this,pm(a.i)),this.m=a.m):a&&(h=String(a).match(lm))?(this.l=!1,Zs(this,h[1]||"",!0),this.o=to(h[2]||""),this.g=to(h[3]||"",!0),eo(this,h[4]),this.h=to(h[5]||"",!0),bc(this,h[6]||"",!0),this.m=to(h[7]||"")):(this.l=!1,this.i=new ro(null,this.l))}pr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(no(h,um,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(no(h,um,!0),"@"),a.push(Xs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(no(f,f.charAt(0)=="/"?p0:f0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",no(f,g0)),a.join("")},pr.prototype.resolve=function(a){const h=Sn(this);let f=!!a.j;f?Zs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)eo(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var O=h.h.lastIndexOf("/");O!=-1&&(y=h.h.slice(0,O+1)+y)}if(O=y,O==".."||O==".")y="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){y=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let H=0;H<O.length;){const ie=O[H++];ie=="."?y&&H==O.length&&L.push(""):ie==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&H==O.length&&L.push("")):(L.push(ie),y=!0)}y=L.join("/")}else y=O}return f?h.h=y:f=a.i.toString()!=="",f?bc(h,pm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Sn(a){return new pr(a)}function Zs(a,h,f){a.j=f?to(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function eo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function bc(a,h,f){h instanceof ro?(a.i=h,y0(a.i,a.l)):(f||(h=no(h,m0)),a.i=new ro(h,a.l))}function Ae(a,h,f){a.i.set(h,f)}function Ua(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function to(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function no(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,d0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function d0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var um=/[#\/\?@]/g,f0=/[#\?:]/g,p0=/[#\?]/g,m0=/[#\?@]/g,g0=/#/g;function ro(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ui(a){a.g||(a.g=new Map,a.h=0,a.i&&h0(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ro.prototype,t.add=function(a,h){ui(this),this.i=null,a=Qi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function cm(a,h){ui(a),h=Qi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hm(a,h){return ui(a),h=Qi(a,h),a.g.has(h)}t.forEach=function(a,h){ui(this),this.g.forEach(function(f,y){f.forEach(function(O){a.call(h,O,y,this)},this)},this)};function dm(a,h){ui(a);let f=[];if(typeof h=="string")hm(a,h)&&(f=f.concat(a.g.get(Qi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return ui(this),this.i=null,a=Qi(this,a),hm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=dm(this,a),a.length>0?String(a[0]):h):h};function fm(a,h,f){cm(a,h),f.length>0&&(a.i=null,a.g.set(Qi(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const O=Xs(f);f=dm(this,f);for(let L=0;L<f.length;L++){let H=O;f[L]!==""&&(H+="="+Xs(f[L])),a.push(H)}}return this.i=a.join("&")};function pm(a){const h=new ro;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Qi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function y0(a,h){h&&!a.j&&(ui(a),a.i=null,a.g.forEach(function(f,y){const O=y.toLowerCase();y!=O&&(cm(this,y),fm(this,O,f))},a)),a.j=h}function v0(a,h){const f=new Q;if(o.Image){const y=new Image;y.onload=d(mr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(mr,f,"TestLoadImage: error",!1,h,y),y.onabort=d(mr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(mr,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function _0(a,h){const f=new Q,y=new AbortController,O=setTimeout(()=>{y.abort(),mr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(O),L.ok?mr(f,"TestPingServer: ok",!0,h):mr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),mr(f,"TestPingServer: error",!1,h)})}function mr(a,h,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function w0(){this.g=new Cc}function Lc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Lc,Ma),Lc.prototype.g=function(){return new za(this.i,this.h)};function za(a,h){we.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(za,we),t=za.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,so(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,io(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?io(this):so(this),this.readyState==3&&mm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,io(this))},t.Na=function(a){this.g&&(this.response=a,io(this))},t.ga=function(){this.g&&io(this)};function io(a){a.readyState=4,a.l=null,a.j=null,a.B=null,so(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function so(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gm(a){let h="";return B(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Vc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=gm(f),typeof a=="string"?f!=null&&Xs(f):Ae(a,h,f))}function Ve(a){we.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,we);var E0=/^https?$/i,T0=["POST","PUT"];t=Ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){ym(this,L);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())f.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(T0,h,void 0)>=0)||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of f)this.g.setRequestHeader(L,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){ym(this,L)}};function ym(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,vm(a),Ba(a)}function vm(a){a.A||(a.A=!0,He(a,"complete"),He(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,He(this,"complete"),He(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_m(this):this.Xa())},t.Xa=function(){_m(this)};function _m(a){if(a.h&&typeof s<"u"){if(a.v&&gr(a)==4)setTimeout(a.Ca.bind(a),0);else if(He(a,"readystatechange"),gr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=L===0){let H=String(a.D).match(lm)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),y=!E0.test(H?H.toLowerCase():"")}f=y}if(f)He(a,"complete"),He(a,"success");else{a.o=6;try{var O=gr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",vm(a)}}finally{Ba(a)}}}}function Ba(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||He(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function gr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return gr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ac(h)}};function wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function I0(a){const h={};a=(a.g&&gr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var f=a0(a[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[O]||[];h[O]=L,L.push(f)}Z(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Em(a){this.za=0,this.i=[],this.j=new Q,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=oo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=oo("baseRetryDelayMs",5e3,a),this.Za=oo("retryDelaySeedMs",1e4,a),this.Ta=oo("forwardChannelMaxRetries",2,a),this.va=oo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rm(a&&a.concurrentRequestLimit),this.Ba=new w0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Em.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){Ue(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Nm(this,null,this.W),Ha(this)};function Mc(a){if(Tm(a),a.I==3){var h=a.V++,f=Sn(a.J);if(Ae(f,"SID",a.M),Ae(f,"RID",h),Ae(f,"TYPE","terminate"),ao(a,f),h=new fr(a,a.j,h),h.M=2,h.A=Ua(Sn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=xm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ja(h)}Pm(a)}function $a(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function Tm(a){$a(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ha(a){if(!im(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||v(),F||(M(),F=!0),E.add(h,a),a.D=0}}function S0(a,h){return sm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=W(c(a.Ea,a,h),Rm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new fr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=me(L),lt(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Sm(this,O,h),f=Sn(this.J),Ae(f,"RID",a),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),ao(this,f),L&&(this.R?h="headers="+Xs(gm(L))+"&"+h:this.u&&Vc(f,this.u,L)),Oc(this.h,O),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",h),Ae(f,"SID","null"),O.U=!0,Pc(O,f,null)):Pc(O,f,h),this.I=2}}else this.I==3&&(a?Im(this,a):this.i.length==0||im(this.h)||Im(this))};function Im(a,h){var f;h?f=h.l:f=a.V++;const y=Sn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",f),Ae(y,"AID",a.K),ao(a,y),a.u&&a.o&&Vc(y,a.u,a.o),f=new fr(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Sm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oc(a.h,f),Pc(f,y,h)}function ao(a,h){a.H&&B(a.H,function(f,y){Ae(h,y,f)}),a.l&&B({},function(f,y){Ae(h,y,f)})}function Sm(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ie=-1;for(;;){const Ye=["count="+f];ie==-1?f>0?(ie=O[0].g,Ye.push("ofs="+ie)):ie=0:Ye.push("ofs="+ie);let Ie=!0;for(let rt=0;rt<f;rt++){var L=O[rt].g;const An=O[rt].map;if(L-=ie,L<0)ie=Math.max(0,O[rt].g-100),Ie=!1;else try{L="req"+L+"_"||"";try{var H=An instanceof Map?An:Object.entries(An);for(const[hi,yr]of H){let vr=yr;l(yr)&&(vr=Ys(yr)),Ye.push(L+hi+"="+encodeURIComponent(vr))}}catch(hi){throw Ye.push(L+"type="+encodeURIComponent("_badmap")),hi}}catch{y&&y(An)}}if(Ie){H=Ye.join("&");break e}}H=void 0}return a=a.i.splice(0,f),h.G=a,H}function Am(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||v(),F||(M(),F=!0),E.add(h,a),a.A=0}}function Fc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=W(c(a.Da,a),Rm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=W(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),$a(this),Cm(this))};function jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cm(a){a.g=new fr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Sn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),ao(a,h),a.u&&a.o&&Vc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ua(Sn(h)),f.u=null,f.R=!0,em(f,a)}t.Va=function(){this.C!=null&&(this.C=null,$a(this),Fc(this),Ue(19))};function Wa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function km(a,h){var f=null;if(a.g==h){Wa(a),jc(a),a.g=null;var y=2}else if(Dc(a.h,h))f=h.G,om(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;y=zt(),He(y,new dr(y,f)),Ha(a)}else Am(a);else if(O=h.m,O==3||O==0&&h.X>0||!(y==1&&S0(a,h)||y==2&&Fc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),O){case 1:ci(a,5);break;case 4:ci(a,10);break;case 3:ci(a,6);break;default:ci(a,2)}}}function Rm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function ci(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const O=!y;y=new pr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zs(y,"https"),Ua(y),O?v0(y.toString(),f):_0(y.toString(),f)}else Ue(2);a.I=0,a.l&&a.l.pa(h),Pm(a),Tm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Pm(a){if(a.I=0,a.ja=[],a.l){const h=am(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Nm(a,h,f){var y=f instanceof pr?Sn(f):new pr(f);if(y.g!="")h&&(y.g=h+"."+y.g),eo(y,y.u);else{var O=o.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const L=new pr(null);y&&Zs(L,y),h&&(L.g=h),O&&eo(L,O),f&&(L.h=f),y=L}return f=a.G,h=a.wa,f&&h&&Ae(y,f,h),Ae(y,"VER",a.ka),ao(a,y),y}function xm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ve(new Lc({ab:f})):new Ve(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dm(){}t=Dm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function qa(){}qa.prototype.g=function(a,h){return new $t(a,h)};function $t(a,h){we.call(this),this.g=new Em(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Yi(this)}p($t,we),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Mc(this.g)},$t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Ys(a),a=f);h.i.push(new c0(h.Ya++,a)),h.I==3&&Ha(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,$t.Z.N.call(this)};function Om(a){le.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Om,le);function bm(){fe.call(this),this.status=1}p(bm,fe);function Yi(a){this.g=a}p(Yi,Dm),Yi.prototype.ra=function(){He(this.g,"a")},Yi.prototype.qa=function(a){He(this.g,new Om(a))},Yi.prototype.pa=function(a){He(this.g,new bm)},Yi.prototype.oa=function(){He(this.g,"b")},qa.prototype.createWebChannel=qa.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,nT=function(){return new qa},tT=function(){return zt()},eT=se,bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Vl=Fa,Yp.COMPLETE="complete",ZE=Yp,oe.EventType=ae,ae.OPEN="a",ae.CLOSE="b",ae.ERROR="c",ae.MESSAGE="d",we.prototype.listen=we.prototype.J,So=oe,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,JE=Ve}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore",Sy="4.9.2";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let Hs="12.3.0";/**
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
 */const Di=new ec("@firebase/firestore");function Ji(){return Di.logLevel}function q(t,...e){if(Di.logLevel<=ce.DEBUG){const n=e.map(lp);Di.debug(`Firestore (${Hs}): ${t}`,...n)}}function or(t,...e){if(Di.logLevel<=ce.ERROR){const n=e.map(lp);Di.error(`Firestore (${Hs}): ${t}`,...n)}}function Ds(t,...e){if(Di.logLevel<=ce.WARN){const n=e.map(lp);Di.warn(`Firestore (${Hs}): ${t}`,...n)}}function lp(t){if(typeof t=="string")return t;try{/**
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,rT(t,r,n)}function rT(t,e,n){let r=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function ve(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||rT(e,i,r)}function te(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class iT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class iP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sP{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new iT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class oP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class up{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Ld(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return wh(i)===wh(s)?he(i,s):wh(i)?1:-1}return he(t.length,e.length)}const cP=55296,hP=57343;function wh(t){const e=t.charCodeAt(0);return e>=cP&&e<=hP}function Os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Cy="__name__";class Rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Rn.isNumericId(e),i=Rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):Ld(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class De extends Rn{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const dP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Rn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return dP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cy}static keyField(){return new ft([Cy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(De.fromString(e))}static fromName(e){return new Y(De.fromString(e).popFirst(5))}static empty(){return new Y(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new De(e.slice()))}}/**
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
 */function fP(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pP(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!Y.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function cp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cp(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pa(t,e){if(!sT(t))throw new G(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ry=-62135596800,Py=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Py);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ry)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Py}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pa(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ke("string",ke._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ke(0,0))}static max(){return new ee(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ca=-1;function mP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Gr(i,Y.empty(),e)}function gP(t){return new Gr(t.readTime,t.key,ca)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(ee.min(),Y.empty(),ca)}static max(){return new Gr(ee.max(),Y.empty(),ca)}}function yP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const vP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ws(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==vP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
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
 */const hp=-1;function sc(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function EP(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const oT="";function TP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ny(e)),e=IP(t.get(n),e);return Ny(e)}function IP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case oT:n+="";break;default:n+=s}}return n}function Ny(t){return t+oT+""}/**
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
 */function xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new tt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lT("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const SP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=SP.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */const uT="server_timestamp",cT="__type__",hT="__previous_value__",dT="__local_write_time__";function dp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[cT])==null?void 0:r.stringValue)===uT}function oc(t){const e=t.mapValue.fields[hT];return dp(e)?oc(e):e}function ha(t){const e=Qr(t.mapValue.fields[dT].timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class AP{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Tu="(default)";class da{constructor(e,n){this.projectId=e,this.database=n||Tu}static empty(){return new da("","")}get isDefaultDatabase(){return this.database===Tu}isEqual(e){return e instanceof da&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fT="__type__",CP="__max__",pl={mapValue:{}},pT="__vector__",Iu="value";function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dp(t)?4:RP(t)?9007199254740991:kP(t)?10:11:J(28295,{value:t})}function jn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qr(i.timestampValue),l=Qr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yr(i.bytesValue).isEqual(Yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?Eu(o)===Eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xy(o)!==xy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!jn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function fa(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(ha(t),ha(e));case 5:return Ld(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Yr(s),u=Yr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=he(l[c],u[c]);if(d!==0)return d}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(ze(s.latitude),ze(o.latitude));return l!==0?l:he(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return by(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,N,k;const l=s.fields||{},u=o.fields||{},c=(m=l[Iu])==null?void 0:m.arrayValue,d=(I=u[Iu])==null?void 0:I.arrayValue,p=he(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:by(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pl.mapValue&&o===pl.mapValue)return 0;if(s===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Ld(u[p],d[p]);if(m!==0)return m;const I=bs(l[u[p]],c[d[p]]);if(I!==0)return I}return he(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Qr(t),r=Qr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function by(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bs(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Ls(t){return Vd(t)}function Vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vd(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Ml(t){switch(Xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+Ml(e):16;case 5:return 2*t.stringValue.length;case 6:return Yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ml(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return oi(r.fields,(s,o)=>{i+=s.length+Ml(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Md(t){return!!t&&"integerValue"in t}function fp(t){return!!t&&"arrayValue"in t}function Ly(t){return!!t&&"nullValue"in t}function Vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function kP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[fT])==null?void 0:r.stringValue)===pT}function jo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jo(t.arrayValue.values[n]);return e}return{...t}}function RP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CP}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jo(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=jo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(jo(this.value))}}function mT(t){const e=[];return oi(t.fields,(n,r)=>{const i=new ft([n]);if(Fl(r)){const s=mT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
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
 */class It{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new It(e,0,ee.min(),ee.min(),ee.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new It(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new It(e,2,n,ee.min(),ee.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,ee.min(),ee.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Su{constructor(e,n){this.position=e,this.inclusive=n}}function My(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function PP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gT{}class Je extends gT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xP(e,n,r):n==="array-contains"?new bP(e,r):n==="in"?new LP(e,r):n==="not-in"?new VP(e,r):n==="array-contains-any"?new MP(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DP(e,r):new OP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bs(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends gT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Un(e,n)}matches(e){return yT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yT(t){return t.op==="and"}function vT(t){return NP(t)&&yT(t)}function NP(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Fd(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(vT(t))return t.filters.map(e=>Fd(e)).join(",");{const e=t.filters.map(n=>Fd(n)).join(",");return`${t.op}(${e})`}}function _T(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&jn(r.value,i.value)}(t,e):t instanceof Un?function(r,i){return i instanceof Un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&_T(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function wT(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(wT).join(" ,")+"}"}(t):"Filter"}class xP extends Je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class DP extends Je{constructor(e,n){super(e,"in",n),this.keys=ET("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OP extends Je{constructor(e,n){super(e,"not-in",n),this.keys=ET("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ET(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class bP extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fp(n)&&fa(n.arrayValue,this.value)}}class LP extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class VP extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fa(this.value.arrayValue,n)}}class MP extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class FP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function jy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FP(t,e,n,r,i,s,o)}function pp(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.Te=n}return e.Te}function mp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_T(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fy(t.startAt,e.startAt)&&Fy(t.endAt,e.endAt)}function jd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ac{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jP(t,e,n,r,i,s,o,l){return new ac(t,e,n,r,i,s,o,l)}function gp(t){return new ac(t)}function Uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UP(t){return t.collectionGroup!==null}function Uo(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Au(s,r))}),n.has(ft.keyField().canonicalString())||e.Ie.push(new Au(ft.keyField(),r))}return e.Ie}function On(t){const e=te(t);return e.Ee||(e.Ee=zP(e,Uo(t))),e.Ee}function zP(t,e){if(t.limitType==="F")return jy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Au(i.field,s)});const n=t.endAt?new Su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Su(t.startAt.position,t.startAt.inclusive):null;return jy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ud(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return mp(On(t),On(e))&&t.limitType===e.limitType}function TT(t){return`${pp(On(t))}|lt:${t.limitType}`}function Zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wT(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ls(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=My(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Uo(r),i)||r.endAt&&!function(o,l,u){const c=My(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Uo(r),i))}(t,e)}function BP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function IT(t){return(e,n)=>{let r=!1;for(const i of Uo(t)){const s=$P(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $P(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?bs(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aT(this.inner)}size(){return this.innerSize}}/**
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
 */const HP=new Le(Y.comparator);function ar(){return HP}const ST=new Le(Y.comparator);function Ao(...t){let e=ST;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=ST;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wi(){return zo()}function CT(){return zo()}function zo(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const WP=new Le(Y.comparator),qP=new tt(Y.comparator);function de(...t){let e=qP;for(const n of t)e=e.add(n);return e}const KP=new tt(he);function GP(){return KP}/**
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
 */function yp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function QP(t,e){return EP(e)?kT(e):yp(t,e)}/**
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
 */class cc{constructor(){this._=void 0}}function YP(t,e,n){return t instanceof Cu?function(i,s){const o={fields:{[cT]:{stringValue:uT},[dT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dp(s)&&(s=oc(s)),s&&(o.fields[hT]=s),{mapValue:o}}(n,e):t instanceof pa?PT(t,e):t instanceof ma?NT(t,e):function(i,s){const o=RT(i,s),l=zy(o)+zy(i.Ae);return Md(o)&&Md(i.Ae)?kT(l):yp(i.serializer,l)}(t,e)}function XP(t,e,n){return t instanceof pa?PT(t,e):t instanceof ma?NT(t,e):n}function RT(t,e){return t instanceof ku?function(r){return Md(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cu extends cc{}class pa extends cc{constructor(e){super(),this.elements=e}}function PT(t,e){const n=xT(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ma extends cc{constructor(e){super(),this.elements=e}}function NT(t,e){let n=xT(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class ku extends cc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function zy(t){return ze(t.integerValue||t.doubleValue)}function xT(t){return fp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof pa&&i instanceof pa||r instanceof ma&&i instanceof ma?Os(r.elements,i.elements,jn):r instanceof ku&&i instanceof ku?jn(r.Ae,i.Ae):r instanceof Cu&&i instanceof Cu}(t.transform,e.transform)}class ZP{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function DT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bT(t.key,bn.none()):new Na(t.key,t.data,bn.none());{const n=t.data,r=Lt.empty();let i=new tt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Kt(i.toArray()),bn.none())}}function eN(t,e,n){t instanceof Na?function(i,s,o){const l=i.value.clone(),u=$y(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$y(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(OT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof Na?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=s.value.clone(),d=Hy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=Hy(s.fieldTransforms,u,o),d=o.data;return d.setAll(OT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RT(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function By(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Os(r,i,(s,o)=>JP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends hc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends hc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function OT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $y(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,XP(o,l,n[i]))}return r}function Hy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YP(s,o,e))}return r}class bT extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nN extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=DT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>By(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>By(n,r))}}class vp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return WP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vp(e,n,r,i)}}/**
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
 */class iN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,pe;function oN(t){switch(t){case j.OK:return J(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function LT(t){if(t===void 0)return or("GRPC error has no .code"),j.UNKNOWN;switch(t){case We.OK:return j.OK;case We.CANCELLED:return j.CANCELLED;case We.UNKNOWN:return j.UNKNOWN;case We.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case We.INTERNAL:return j.INTERNAL;case We.UNAVAILABLE:return j.UNAVAILABLE;case We.UNAUTHENTICATED:return j.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case We.NOT_FOUND:return j.NOT_FOUND;case We.ALREADY_EXISTS:return j.ALREADY_EXISTS;case We.PERMISSION_DENIED:return j.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case We.ABORTED:return j.ABORTED;case We.OUT_OF_RANGE:return j.OUT_OF_RANGE;case We.UNIMPLEMENTED:return j.UNIMPLEMENTED;case We.DATA_LOSS:return j.DATA_LOSS;default:return J(39323,{code:t})}}(pe=We||(We={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aN(){return new TextEncoder}/**
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
 */const lN=new Br([4294967295,4294967295],0);function Wy(t){const e=aN().encode(t),n=new XE;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Br([n,r],0),new Br([i,s],0)]}class _p{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Co(`Invalid padding: ${n}`);if(r<0)throw new Co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Co(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Br.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Br.fromNumber(r)));return i.compare(lN)===1&&(i=new Br([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Wy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _p(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Wy(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(ee.min(),i,new Le(he),ar(),de())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,de(),de(),de())}}/**
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
 */class Ul{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class VT{constructor(e,n){this.targetId=e,this.Ce=n}}class MT{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ky{constructor(){this.ve=0,this.Fe=Gy(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new xa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Gy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class uN{constructor(e){this.Ge=e,this.ze=new Map,this.je=ar(),this.Je=ml(),this.He=ml(),this.Ye=new Le(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(jd(s))if(r===0){const o=new Y(s.path);this.et(n,o,It.newNoDocument(o,ee.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(u){if(u instanceof lT)return Ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _p(o,i,s)}catch(u){return Ds(u instanceof Co?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&jd(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,It.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new dc(e,n,this.Ye,this.je,r);return this.je=ar(),this.Je=ml(),this.He=ml(),this.Ye=new Le(he),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ky,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ky),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ml(){return new Le(Y.comparator)}function Gy(){return new Le(Y.comparator)}const cN={asc:"ASCENDING",desc:"DESCENDING"},hN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dN={and:"AND",or:"OR"};class fN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zd(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function Ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pN(t,e){return Ru(t,e.toTimestamp())}function Ln(t){return ve(!!t,49232),ee.fromTimestamp(function(n){const r=Qr(n);return new ke(r.seconds,r.nanos)}(t))}function wp(t,e){return Bd(t,e).canonicalString()}function Bd(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jT(t){const e=De.fromString(t);return ve(HT(e),10190,{key:e.toString()}),e}function $d(t,e){return wp(t.databaseId,e.path)}function Eh(t,e){const n=jT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(zT(n))}function UT(t,e){return wp(t.databaseId,e)}function mN(t){const e=jT(t);return e.length===4?De.emptyPath():zT(e)}function Hd(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zT(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qy(t,e,n){return{name:$d(t,e),fields:n.value.mapValue.fields}}function gN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string",58123),gt.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:LT(c.code);return new G(d,c.message||"")}(o);n=new MT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Eh(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):ee.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=It.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ul(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Eh(t,r.document),s=r.readTime?Ln(r.readTime):ee.min(),o=It.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Eh(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return J(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sN(i,s),l=r.targetId;n=new VT(l,o)}}return n}function yN(t,e){let n;if(e instanceof Na)n={update:Qy(t,e.key,e.value)};else if(e instanceof bT)n={delete:$d(t,e.key)};else if(e instanceof ai)n={update:Qy(t,e.key,e.data),updateMask:CN(e.fieldMask)};else{if(!(e instanceof nN))return J(16599,{Vt:e.type});n={verify:$d(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Cu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ku)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function vN(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(ee.min())&&(o=Ln(s)),new ZP(o,i.transformResults||[])}(n,e))):[]}function _N(t,e){return{documents:[UT(t,e.path)]}}function wN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=UT(t,i);const s=function(c){if(c.length!==0)return $T(Un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:es(m.field),direction:IN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=zd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function EN(t){let e=mN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=BT(p);return m instanceof Un&&vT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(N){return new Au(ts(N.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,sc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new Su(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new Su(I,m)}(n.endAt)),jP(e,i,o,s,l,"F",u,c)}function TN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>BT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function IN(t){return cN[t]}function SN(t){return hN[t]}function AN(t){return dN[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return ft.fromServerFormat(t.fieldPath)}function $T(t){return t instanceof Je?function(n){if(n.op==="=="){if(Vy(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(Ly(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vy(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(Ly(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:SN(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(i=>$T(i));return r.length===1?r[0]:{compositeFilter:{op:AN(n.op),filters:r}}}(t):J(54877,{filter:t})}function CN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kN{constructor(e){this.yt=e}}function RN(t){const e=EN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ud(e,e.limit,"L"):e}/**
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
 */class PN{constructor(){this.Cn=new NN}addToCollectionParentIndex(e,n){return this.Cn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Gr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class NN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(De.comparator)).toArray()}}/**
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
 */const Yy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},WT=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(WT,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */class Vs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Vs(0)}static cr(){return new Vs(-1)}}/**
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
 */const Xy="LruGarbageCollector",xN=1048576;function Jy([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class DN{constructor(e){this.Ir=e,this.buffer=new tt(Jy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Jy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ON{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Xy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?q(Xy,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Vr(3e5)})}}class bN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(ic.ce);const r=new DN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Yy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ji()<=ce.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function LN(t,e){return new bN(t,e)}/**
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
 */class VN{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class FN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bo(r.mutation,i,Kt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ar();const o=zo(),l=function(){return zo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ai)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Bo(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new MN(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=zo();let i=new Le((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Kt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||de()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=CT();d.forEach(m=>{if(!s.has(m)){const I=DT(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(wi());let l=ca,u=s;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,de())).next(d=>({batchId:l,changes:AT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new ac(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,It.newInvalidDocument(d)))});let l=Ao();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Bo(d.mutation,c,Kt.empty(),ke.now()),uc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class jN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:RN(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),V.resolve()}}/**
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
 */class UN{constructor(){this.overlays=new Le(Y.comparator),this.qr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wi();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=wi(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=wi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=wi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iN(n,r));let s=this.qr.get(n);s===void 0&&(s=de(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class zN{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Ep{constructor(){this.Qr=new tt(it.$r),this.Ur=new tt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new De([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new De([])),r=new it(n,e),i=new it(n,e+1);let s=de();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
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
 */class BN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(it.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new it(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?hp:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(he);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new it(new Y(s),0);let l=new tt(he);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),V.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new it(n,0),i=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $N{constructor(e){this.ri=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():It.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ar();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yP(gP(d),r)<=0||(i.has(d.key)||uc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ii(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HN(this)}getSize(e){return V.resolve(this.size)}}class HN extends VN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class WN{constructor(e){this.persistence=e,this.si=new zi(n=>pp(n),mp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.oi=0,this._i=new Ep,this.targetCount=0,this.ai=Vs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Pr(n),V.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this._i.containsKey(n))}}/**
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
 */class qT{constructor(e,n){this.ui={},this.overlays={},this.ci=new ic(0),this.li=!1,this.li=!0,this.hi=new zN,this.referenceDelegate=e(this),this.Pi=new WN(this),this.indexManager=new PN,this.remoteDocumentCache=function(i){return new $N(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new kN(n),this.Ii=new jN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new BN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new qN(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class qN extends _P{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.Ri=new Ep,this.Vi=null}static mi(e){return new Tp(e)}get fi(){if(this.Vi)return this.Vi;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const i=Y.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pu{constructor(e,n){this.persistence=e,this.pi=new zi(r=>TP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=LN(this,n)}static mi(e,n){return new Pu(e,n)}Ei(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return V.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ml(e.data.value)),n}br(e,n,r){return V.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ip(e,n.fromCache,r,i)}}/**
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
 */class KN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class GN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return EC()?8:wP(At())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ji()<=ce.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Ji()<=ce.DEBUG&&q("QueryEngine","Query:",Zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ji()<=ce.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):V.resolve())}ys(e,n){if(Uy(n))return V.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ud(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Ud(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Uy(n)||i.isEqual(ee.min())?V.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?V.resolve(null):(Ji()<=ce.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zi(n)),this.vs(e,o,n,mP(i,ca)).next(l=>l))})}Ds(e,n){let r=new tt(IT(e));return n.forEach((i,s)=>{uc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ji()<=ce.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Zi(n)),this.ps.getDocumentsMatchingQuery(e,n,Gr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Sp="LocalStore",QN=3e8;class YN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Le(he),this.xs=new zi(s=>pp(s),mp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function XN(t,e,n,r){return new YN(t,e,n,r)}async function KT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=de();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function JN(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=V.resolve();return m.forEach(N=>{I=I.next(()=>d.getEntry(u,N)).next(k=>{const P=c.docVersions.get(N);ve(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function ZN(t,e){const n=te(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(gt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,P,w){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=QN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,d)&&l.push(n.Pi.updateTargetData(s,I))});let u=ar(),c=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(ex(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(ee.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function ex(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(Sp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function tx(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nx(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Wd(t,e,n){const r=te(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qs(o))throw o;q(Sp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Zy(t,e,n){const r=te(t);let i=ee.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=te(u),m=p.xs.get(d);return m!==void 0?V.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,On(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:de())).next(l=>(rx(r,BP(e),l),{documents:l,Qs:s})))}function rx(t,e,n){let r=t.Os.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class ev{constructor(){this.activeTargetIds=GP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ix{constructor(){this.Mo=new ev,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ev,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sx{Oo(e){}shutdown(){}}/**
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
 */const tv="ConnectivityMonitor";class nv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(tv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(tv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gl=null;function qd(){return gl===null?gl=function(){return 268435456+Math.round(2147483648*Math.random())}():gl++,"0x"+gl.toString(16)}/**
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
 */const Th="RestConnection",ox={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ax{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Tu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=qd(),l=this.zo(e,n.toUriEncodedString());q(Th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=zs(c);return this.Jo(e,l,u,r,d).then(p=>(q(Th,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ds(Th,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=ox[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class lx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const wt="WebChannelConnection";class ux extends ax{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=qd();return new Promise((l,u)=>{const c=new JE;c.setWithCredentials(!0),c.listenOnce(ZE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vl.NO_ERROR:const p=c.getResponseJson();q(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Vl.TIMEOUT:q(wt,`RPC '${e}' ${o} timed out`),u(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const m=c.getStatus();if(q(wt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const k=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(N.status);u(new G(k,N.message))}else u(new G(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new G(j.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(wt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(wt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=qd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nT(),l=tT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(wt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,I=!1;const N=new lx({Yo:P=>{I?q(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(q(wt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(wt,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Zo:()=>p.close()}),k=(P,w,_)=>{P.listen(w,C=>{try{_(C)}catch(b){setTimeout(()=>{throw b},0)}})};return k(p,So.EventType.OPEN,()=>{I||(q(wt,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),k(p,So.EventType.CLOSE,()=>{I||(I=!0,q(wt,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(p))}),k(p,So.EventType.ERROR,P=>{I||(I=!0,Ds(wt,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),N.a_(new G(j.UNAVAILABLE,"The operation could not be completed")))}),k(p,So.EventType.MESSAGE,P=>{var w;if(!I){const _=P.data[0];ve(!!_,16349);const C=_,b=(C==null?void 0:C.error)||((w=C[0])==null?void 0:w.error);if(b){q(wt,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let F=function(T){const A=We[T];if(A!==void 0)return LT(A)}(M),E=b.message;F===void 0&&(F=j.INTERNAL,E="Unknown error status: "+M+" with message "+b.message),I=!0,N.a_(new G(F,E)),p.close()}else q(wt,`RPC '${e}' stream ${i} received:`,_),N.u_(_)}}),k(l,eT.STAT_EVENT,P=>{P.stat===bd.PROXY?q(wt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===bd.NOPROXY&&q(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ih(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new fN(t,!0)}/**
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
 */class QT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const rv="PersistentStream";class YT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new QT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(rv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(q(rv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cx extends YT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=gN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ln(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Hd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=jd(u)?{documents:_N(s,u)}:{query:wN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=FT(s,o.resumeToken);const c=zd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Ru(s,o.snapshotVersion.toTimestamp());const c=zd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=TN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Hd(this.serializer),n.removeTarget=e,this.q_(n)}}class hx extends YT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=vN(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Hd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yN(this.serializer,r))};this.q_(n)}}/**
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
 */class dx{}class fx extends dx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Bd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(j.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Bd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class px{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const bi="RemoteStore";class mx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(q(bi,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ea.add(4),await Da(c),c.Ra.set("Unknown"),c.Ea.delete(4),await pc(c)}(this))})}),this.Ra=new px(r,i)}}async function pc(t){if(Bi(t))for(const e of t.da)await e(!0)}async function Da(t){for(const e of t.da)await e(!1)}function XT(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Rp(n)?kp(n):Ks(n).O_()&&Cp(n,e))}function Ap(t,e){const n=te(t),r=Ks(n);n.Ia.delete(e),r.O_()&&JT(n,e),n.Ia.size===0&&(r.O_()?r.L_():Bi(n)&&n.Ra.set("Unknown"))}function Cp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ks(t).Y_(e)}function JT(t,e){t.Va.Ue(e),Ks(t).Z_(e)}function kp(t){t.Va=new uN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ks(t).start(),t.Ra.ua()}function Rp(t){return Bi(t)&&!Ks(t).x_()&&t.Ia.size>0}function Bi(t){return te(t).Ea.size===0}function ZT(t){t.Va=void 0}async function gx(t){t.Ra.set("Online")}async function yx(t){t.Ia.forEach((e,n)=>{Cp(t,e)})}async function vx(t,e){ZT(t),Rp(t)?(t.Ra.ha(e),kp(t)):t.Ra.set("Unknown")}async function _x(t,e,n){if(t.Ra.set("Online"),e instanceof MT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){q(bi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Ul?t.Va.Ze(e):e instanceof VT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ee.min()))try{const r=await GT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),JT(s,u);const p=new Nr(d.target,u,c,d.sequenceNumber);Cp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(bi,"Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!qs(e))throw e;t.Ea.add(1),await Da(t),t.Ra.set("Offline"),n||(n=()=>GT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(bi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pc(t)})}function eI(t,e){return e().catch(n=>Nu(t,n,e))}async function mc(t){const e=te(t),n=Jr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:hp;for(;wx(e);)try{const i=await tx(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Ex(e,i)}catch(i){await Nu(e,i)}tI(e)&&nI(e)}function wx(t){return Bi(t)&&t.Ta.length<10}function Ex(t,e){t.Ta.push(e);const n=Jr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function tI(t){return Bi(t)&&!Jr(t).x_()&&t.Ta.length>0}function nI(t){Jr(t).start()}async function Tx(t){Jr(t).ra()}async function Ix(t){const e=Jr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Sx(t,e,n){const r=t.Ta.shift(),i=vp.from(r,e,n);await eI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function Ax(t,e){e&&Jr(t).X_&&await async function(r,i){if(function(o){return oN(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();Jr(r).B_(),await eI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),tI(t)&&nI(t)}async function iv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),q(bi,"RemoteStore received new credentials");const r=Bi(n);n.Ea.add(3),await Da(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pc(n)}async function Cx(t,e){const n=te(t);e?(n.Ea.delete(2),await pc(n)):e||(n.Ea.add(2),await Da(n),n.Ra.set("Unknown"))}function Ks(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:gx.bind(null,t),t_:yx.bind(null,t),r_:vx.bind(null,t),H_:_x.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Rp(t)?kp(t):t.Ra.set("Unknown")):(await t.ma.stop(),ZT(t))})),t.ma}function Jr(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new hx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Tx.bind(null,t),r_:Ax.bind(null,t),ta:Ix.bind(null,t),na:Sx.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await mc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(bi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(t,e){if(or("AsyncQueue",`${e}: ${t}`),qs(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class sv{constructor(){this.ga=new Le(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ms(e,n,Is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Rx{constructor(){this.queries=ov(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=ov(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function ov(){return new zi(t=>TT(t),lc)}async function Px(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new kx,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Np(o,`Initialization of query '${Zi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&xp(n)}async function Nx(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xx(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&xp(n)}function Dx(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function xp(t){t.Ca.forEach(e=>{e.next()})}var Kd,av;(av=Kd||(Kd={})).Ma="default",av.Cache="cache";class Ox{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kd.Cache}}/**
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
 */class rI{constructor(e){this.key=e}}class iI{constructor(e){this.key=e}}class bx{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=IT(e),this.tu=new Is(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new sv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=uc(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?N!==k&&(r.track({type:3,doc:I}),P=!0):this.su(m,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),P=!0):m&&!I&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,N){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Rt:P})}};return k(I)-k(N)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ms(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new iI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new rI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Dp="SyncEngine";class Lx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Vx{constructor(e){this.key=e,this.hu=!1}}class Mx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new zi(l=>TT(l),lc),this.Iu=new Map,this.Eu=new Set,this.du=new Le(Y.comparator),this.Au=new Map,this.Ru=new Ep,this.Vu={},this.mu=new Map,this.fu=Vs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fx(t,e,n=!0){const r=cI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await sI(r,e,n,!0),i}async function jx(t,e){const n=cI(t);await sI(n,e,!0,!1)}async function sI(t,e,n,r){const i=await nx(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Ux(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&XT(t.remoteStore,i),l}async function Ux(t,e,n,r,i){t.pu=(p,m,I)=>async function(k,P,w,_){let C=P.view.ru(w);C.Cs&&(C=await Zy(k.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,C)));const b=_&&_.targetChanges.get(P.targetId),M=_&&_.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(C,k.isPrimaryClient,b,M);return uv(k,P.targetId,F.au),F.snapshot}(t,p,m,I);const s=await Zy(t.localStore,e,!0),o=new bx(e,s.Qs),l=o.ru(s.documents),u=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);uv(t,n,c.au);const d=new Lx(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function zx(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!lc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Wd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ap(r.remoteStore,i.targetId),Gd(r,i.targetId)}).catch(Ws)):(Gd(r,i.targetId),await Wd(r.localStore,i.targetId,!0))}async function Bx(t,e){const n=te(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ap(n.remoteStore,r.targetId))}async function $x(t,e,n){const r=Yx(t);try{const i=await function(o,l){const u=te(o),c=ke.now(),d=l.reduce((I,N)=>I.add(N.key),de());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=ar(),k=de();return u.Ns.getEntries(I,d).next(P=>{N=P,N.forEach((w,_)=>{_.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,N)).next(P=>{p=P;const w=[];for(const _ of l){const C=tN(_,p.get(_.key).overlayedDocument);C!=null&&w.push(new ai(_.key,C,mT(C.value.mapValue),bn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:AT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Le(he)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Oa(r,i.changes),await mc(r.remoteStore)}catch(i){const s=Np(i,"Failed to persist write");n.reject(s)}}async function oI(t,e){const n=te(t);try{const r=await ZN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ve(o.hu,14607):i.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Oa(n,r,e)}catch(r){await Ws(r)}}function lv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&xp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hx(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(Y.comparator);o=o.insert(s,It.newNoDocument(s,ee.min()));const l=de().add(s),u=new dc(ee.min(),new Map,new Le(he),o,l);await oI(r,u),r.du=r.du.remove(s),r.Au.delete(e),Op(r)}else await Wd(r.localStore,e,!1).then(()=>Gd(r,e,n)).catch(Ws)}async function Wx(t,e){const n=te(t),r=e.batch.batchId;try{const i=await JN(n.localStore,e);lI(n,r,null),aI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oa(n,i)}catch(i){await Ws(i)}}async function qx(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ve(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);lI(r,e,n),aI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oa(r,i)}catch(i){await Ws(i)}}function aI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function lI(t,e,n){const r=te(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||uI(t,r)})}function uI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ap(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Op(t))}function uv(t,e,n){for(const r of n)r instanceof rI?(t.Ru.addReference(r.key,e),Kx(t,r)):r instanceof iI?(q(Dp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||uI(t,r.key)):J(19791,{wu:r})}function Kx(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(q(Dp,"New document in limbo: "+n),t.Eu.add(r),Op(t))}function Op(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(De.fromString(e)),r=t.fu.next();t.Au.set(r,new Vx(n)),t.du=t.du.insert(n,r),XT(t.remoteStore,new Nr(On(gp(n.path)),r,"TargetPurposeLimboResolution",ic.ce))}}async function Oa(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Ip.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.Es,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>V.forEach(m.ds,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!qs(p))throw p;q(Sp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.Ms.get(m),N=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(N);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function Gx(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){q(Dp,"User change. New user:",e.toKey());const r=await KT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oa(n,r.Ls)}}function Qx(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function cI(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hx.bind(null,e),e.Pu.H_=xx.bind(null,e.eventManager),e.Pu.yu=Dx.bind(null,e.eventManager),e}function Yx(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qx.bind(null,e),e}class xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return XN(this.persistence,new GN,e.initialUser,this.serializer)}Cu(e){return new qT(Tp.mi,this.serializer)}Du(e){return new ix}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xu.provider={build:()=>new xu};class Xx extends xu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof Pu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ON(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new qT(r=>Pu.mi(r,n),this.serializer)}}class Qd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gx.bind(null,this.syncEngine),await Cx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rx}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new ux(s)}(e.databaseInfo);return function(s,o,l,u){return new fx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new mx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>lv(this.syncEngine,n,0),function(){return nv.v()?new nv:new sx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Mx(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);q(bi,"RemoteStore shutting down."),s.Ea.add(5),await Da(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Qd.provider={build:()=>new Qd};/**
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
 */class Jx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Zr="FirestoreClient";class Zx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=up.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(Zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Np(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sh(t,e){t.asyncQueue.verifyOperationInProgress(),q(Zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eD(t);q(Zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iv(e.remoteStore,i)),t._onlineComponents=e}async function eD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Zr,"Using user provided OfflineComponentProvider");try{await Sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Sh(t,new xu)}}else q(Zr,"Using default OfflineComponentProvider"),await Sh(t,new Xx(void 0));return t._offlineComponents}async function hI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Zr,"Using user provided OnlineComponentProvider"),await cv(t,t._uninitializedComponentsProvider._online)):(q(Zr,"Using default OnlineComponentProvider"),await cv(t,new Qd))),t._onlineComponents}function tD(t){return hI(t).then(e=>e.syncEngine)}async function nD(t){const e=await hI(t),n=e.eventManager;return n.onListen=Fx.bind(null,e.syncEngine),n.onUnlisten=zx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Bx.bind(null,e.syncEngine),n}function rD(t,e,n={}){const r=new $r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Jx({next:m=>{d.Nu(),o.enqueueAndForget(()=>Nx(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Ox(gp(l.path),d,{includeMetadataChanges:!0,qa:!0});return Px(s,p)}(await nD(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hv=new Map;/**
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
 */const fI="firestore.googleapis.com",dv=!0;class fv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fI,this.ssl=dv}else this.host=e.host,this.ssl=e.ssl??dv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=WT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xN)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rP;switch(r.type){case"firstParty":return new aP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hv.get(n);r&&(q("ComponentProvider","Removing Datastore"),hv.delete(n),r.terminate())}(this),Promise.resolve()}}function iD(t,e,n,r={}){var c;t=Oi(t,bp);const i=zs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(aE(`https://${l}`),lE("Firestore",!0)),s.host!==fI&&s.host!==l&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Kr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Et.MOCK_USER;else{d=fC(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Et(m)}t._authCredentials=new iP(new iT(d,p))}}/**
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
 */class Lp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lp(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ga(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pa(n,et._jsonSchema))return new et(e,r||null,new Y(De.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Ke("string",et._jsonSchemaVersion),referencePath:Ke("string")};class ga extends Lp{constructor(e,n,r){super(e,n,gp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new Y(e))}withConverter(e){return new ga(this.firestore,e,this._path)}}function yl(t,e,...n){if(t=nt(t),arguments.length===1&&(e=up.newId()),fP("doc","path",e),t instanceof bp){const r=De.fromString(e,...n);return ky(r),new et(t,null,new Y(r))}{if(!(t instanceof et||t instanceof ga))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return ky(r),new et(t.firestore,t instanceof ga?t.converter:null,new Y(r))}}/**
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
 */const pv="AsyncQueue";class mv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new QT(this,"async_queue_retry"),this._c=()=>{const r=Ih();r&&q(pv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ih();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new $r;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;q(pv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",gv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Pp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:gv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gc extends bp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mv(e),this._firestoreClient=void 0,await e}}}function sD(t,e){const n=typeof t=="object"?t:Xf(),r=typeof t=="string"?t:Tu,i=Ui(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hC("firestore");s&&iD(i,...s)}return i}function pI(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oD(t),t._firestoreClient}function oD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new AP(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Zx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(gt.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pa(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:Ke("string",nn._jsonSchemaVersion),bytes:Ke("string")};/**
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
 */class yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vp{constructor(e){this._methodName=e}}/**
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
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(Pa(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:Ke("string",Vn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
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
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pa(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new G(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:Ke("string",Mn._jsonSchemaVersion),vectorValues:Ke("object")};/**
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
 */const aD=/^__.*__$/;class lD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}class mI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ac:t})}}class Mp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Mp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Du(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(gI(this.Ac)&&aD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class uD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Cc(e,n,r,i=!1){return new Mp({Ac:e,methodName:n,Dc:r,path:ft.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yI(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new uD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Fp("Data must be an object, but it was:",o,r);const l=vI(r,o);let u,c;if(s.merge)u=new Kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Yd(e,p,n);if(!o.contains(m))throw new G(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wI(d,m)||d.push(m)}u=new Kt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new lD(new Lt(l),u,c)}class vc extends Vp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function hD(t,e,n,r){const i=t.Cc(1,e,n);Fp("Data must be an object, but it was:",i,r);const s=[],o=Lt.empty();oi(r,(u,c)=>{const d=jp(e,u,n);c=nt(c);const p=i.yc(d);if(c instanceof vc)s.push(d);else{const m=_c(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Kt(s);return new mI(o,l,i.fieldTransforms)}function dD(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Yd(e,r,n)],u=[i];if(s.length%2!=0)throw new G(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Yd(e,s[m])),u.push(s[m+1]);const c=[],d=Lt.empty();for(let m=l.length-1;m>=0;--m)if(!wI(c,l[m])){const I=l[m];let N=u[m];N=nt(N);const k=o.yc(I);if(N instanceof vc)c.push(I);else{const P=_c(N,k);P!=null&&(c.push(I),d.set(I,P))}}const p=new Kt(c);return new mI(d,p,o.fieldTransforms)}function _c(t,e){if(_I(t=nt(t)))return Fp("Unsupported field value:",e,t),vI(t,e);if(t instanceof Vp)return function(r,i){if(!gI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_c(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Ru(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ru(i.serializer,s)}}if(r instanceof Vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:FT(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,l){return{mapValue:{fields:{[fT]:{stringValue:pT},[Iu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return yp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${cp(r)}`)}(t,e)}function vI(t,e){const n={};return aT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=_c(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _I(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Vn||t instanceof nn||t instanceof et||t instanceof Vp||t instanceof Mn)}function Fp(t,e,n){if(!_I(n)||!sT(n)){const r=cp(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Yd(t,e,n){if((e=nt(e))instanceof yc)return e._internalPath;if(typeof e=="string")return jp(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const fD=new RegExp("[~\\*/\\[\\]]");function jp(t,e,n){if(e.search(fD)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yc(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(j.INVALID_ARGUMENT,l+t+u)}function wI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class EI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(TI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pD extends EI{data(){return super.data()}}function TI(t,e){return typeof e=="string"?jp(t,e):e instanceof yc?e._internalPath:e._delegate._internalPath}class mD{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Iu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>ze(o.doubleValue));return new Mn(n)}convertGeoPoint(e){return new Vn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);ve(HT(r),9688,{name:e});const i=new da(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function gD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Si extends EI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(TI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Si._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Si._jsonSchemaVersion="firestore/documentSnapshot/1.0",Si._jsonSchema={type:Ke("string",Si._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class zl extends Si{data(e={}){return super.data(e)}}class $o{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ko(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ko(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:yD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=up.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */function yv(t){t=Oi(t,et);const e=Oi(t.firestore,gc);return rD(pI(e),t._key).then(n=>wD(e,t,n))}$o._jsonSchemaVersion="firestore/querySnapshot/1.0",$o._jsonSchema={type:Ke("string",$o._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class vD extends mD{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Ah(t,e,n){t=Oi(t,et);const r=Oi(t.firestore,gc),i=gD(t.converter,e);return II(r,[cD(yI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,bn.none())])}function _D(t,e,n,...r){t=Oi(t,et);const i=Oi(t.firestore,gc),s=yI(i);let o;return o=typeof(e=nt(e))=="string"||e instanceof yc?dD(s,"updateDoc",t._key,e,n,r):hD(s,"updateDoc",t._key,e),II(i,[o.toMutation(t._key,bn.exists(!0))])}function II(t,e){return function(r,i){const s=new $r;return r.asyncQueue.enqueueAndForget(async()=>$x(await tD(r),i,s)),s.promise}(pI(t),e)}function wD(t,e,n){const r=n.docs.get(e._key),i=new vD(t);return new Si(t,i,e._key,r,new ko(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Hs=i})(Bs),Fn(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gc(new sP(r.getProvider("auth-internal")),new lP(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),on(Iy,Sy,e),on(Iy,Sy,"esm2020")})();var ED="firebase",TD="12.5.0";/**
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
 */on(ED,TD,"app");const SI="@firebase/installations",Up="0.6.19";/**
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
 */const AI=1e4,CI=`w:${Up}`,kI="FIS_v2",ID="https://firebaseinstallations.googleapis.com/v1",SD=60*60*1e3,AD="installations",CD="Installations";/**
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
 */const kD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Li=new ji(AD,CD,kD);function RI(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
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
 */function PI({projectId:t}){return`${ID}/projects/${t}/installations`}function NI(t){return{token:t.token,requestStatus:2,expiresIn:PD(t.expiresIn),creationTime:Date.now()}}async function xI(t,e){const r=(await e.json()).error;return Li.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RD(t,{refreshToken:e}){const n=DI(t);return n.append("Authorization",ND(e)),n}async function OI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function PD(t){return Number(t.replace("s","000"))}function ND(t){return`${kI} ${t}`}/**
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
 */async function xD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=PI(t),i=DI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:kI,appId:t.appId,sdkVersion:CI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await OI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:NI(c.authToken)}}else throw await xI("Create Installation",u)}/**
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
 */function bI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function DD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const OD=/^[cdef][\w-]{21}$/,Xd="";function bD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LD(t);return OD.test(n)?n:Xd}catch{return Xd}}function LD(t){return DD(t).substr(0,22)}/**
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
 */function wc(t){return`${t.appName}!${t.appId}`}/**
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
 */const LI=new Map;function VI(t,e){const n=wc(t);MI(n,e),VD(n,e)}function MI(t,e){const n=LI.get(t);if(n)for(const r of n)r(e)}function VD(t,e){const n=MD();n&&n.postMessage({key:t,fid:e}),FD()}let Ei=null;function MD(){return!Ei&&"BroadcastChannel"in self&&(Ei=new BroadcastChannel("[Firebase] FID Change"),Ei.onmessage=t=>{MI(t.data.key,t.data.fid)}),Ei}function FD(){LI.size===0&&Ei&&(Ei.close(),Ei=null)}/**
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
 */const jD="firebase-installations-database",UD=1,Vi="firebase-installations-store";let Ch=null;function zp(){return Ch||(Ch=pE(jD,UD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}})),Ch}async function Ou(t,e){const n=wc(t),i=(await zp()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VI(t,e.fid),e}async function FI(t){const e=wc(t),r=(await zp()).transaction(Vi,"readwrite");await r.objectStore(Vi).delete(e),await r.done}async function Ec(t,e){const n=wc(t),i=(await zp()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&VI(t,l.fid),l}/**
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
 */async function Bp(t){let e;const n=await Ec(t.appConfig,r=>{const i=zD(r),s=BD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Xd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zD(t){const e=t||{fid:bD(),registrationStatus:0};return jI(e)}function BD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=$D(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:HD(t)}:{installationEntry:e}}async function $D(t,e){try{const n=await xD(t,e);return Ou(t.appConfig,n)}catch(n){throw RI(n)&&n.customData.serverCode===409?await FI(t.appConfig):await Ou(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function HD(t){let e=await vv(t.appConfig);for(;e.registrationStatus===1;)await bI(100),e=await vv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bp(t);return r||n}return e}function vv(t){return Ec(t,e=>{if(!e)throw Li.create("installation-not-found");return jI(e)})}function jI(t){return WD(t)?{fid:t.fid,registrationStatus:0}:t}function WD(t){return t.registrationStatus===1&&t.registrationTime+AI<Date.now()}/**
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
 */async function qD({appConfig:t,heartbeatServiceProvider:e},n){const r=KD(t,n),i=RD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:CI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await OI(()=>fetch(r,l));if(u.ok){const c=await u.json();return NI(c)}else throw await xI("Generate Auth Token",u)}function KD(t,{fid:e}){return`${PI(t)}/${e}/authTokens:generate`}/**
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
 */async function $p(t,e=!1){let n;const r=await Ec(t.appConfig,s=>{if(!UI(s))throw Li.create("not-registered");const o=s.authToken;if(!e&&YD(o))return s;if(o.requestStatus===1)return n=GD(t,e),s;{if(!navigator.onLine)throw Li.create("app-offline");const l=JD(s);return n=QD(t,l),l}});return n?await n:r.authToken}async function GD(t,e){let n=await _v(t.appConfig);for(;n.authToken.requestStatus===1;)await bI(100),n=await _v(t.appConfig);const r=n.authToken;return r.requestStatus===0?$p(t,e):r}function _v(t){return Ec(t,e=>{if(!UI(e))throw Li.create("not-registered");const n=e.authToken;return ZD(n)?{...e,authToken:{requestStatus:0}}:e})}async function QD(t,e){try{const n=await qD(t,e),r={...e,authToken:n};return await Ou(t.appConfig,r),n}catch(n){if(RI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await FI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ou(t.appConfig,r)}throw n}}function UI(t){return t!==void 0&&t.registrationStatus===2}function YD(t){return t.requestStatus===2&&!XD(t)}function XD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SD}function JD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function ZD(t){return t.requestStatus===1&&t.requestTime+AI<Date.now()}/**
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
 */async function e2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bp(e);return r?r.catch(console.error):$p(e).catch(console.error),n.fid}/**
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
 */async function t2(t,e=!1){const n=t;return await n2(n),(await $p(n,e)).token}async function n2(t){const{registrationPromise:e}=await Bp(t);e&&await e}/**
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
 */function r2(t){if(!t||!t.options)throw kh("App Configuration");if(!t.name)throw kh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kh(t){return Li.create("missing-app-config-values",{valueName:t})}/**
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
 */const zI="installations",i2="installations-internal",s2=t=>{const e=t.getProvider("app").getImmediate(),n=r2(e),r=Ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},o2=t=>{const e=t.getProvider("app").getImmediate(),n=Ui(e,zI).getImmediate();return{getId:()=>e2(n),getToken:i=>t2(n,i)}};function a2(){Fn(new En(zI,s2,"PUBLIC")),Fn(new En(i2,o2,"PRIVATE"))}a2();on(SI,Up);on(SI,Up,"esm2020");/**
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
 */const bu="analytics",l2="firebase_id",u2="origin",c2=60*1e3,h2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hp="https://www.googletagmanager.com/gtag/js";/**
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
 */const Nt=new ec("@firebase/analytics");/**
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
 */const d2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new ji("analytics","Analytics",d2);/**
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
 */function f2(t){if(!t.startsWith(Hp)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function BI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function p2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function m2(t,e){const n=p2("firebase-js-sdk-policy",{createScriptURL:f2}),r=document.createElement("script"),i=`${Hp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function g2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function y2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await BI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){Nt.error(l)}t("config",i,s)}async function v2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await BI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Nt.error(s)}}function _2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await v2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await y2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Nt.error(l)}}return i}function w2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=_2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function E2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hp)&&n.src.includes(t))return n;return null}/**
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
 */const T2=30,I2=1e3;class S2{constructor(e={},n=I2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $I=new S2;function A2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function C2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:A2(n)},i=h2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function k2(t,e=$I,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new N2;return setTimeout(async()=>{l.abort()},c2),HI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function HI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$I){var l;const{appId:s,measurementId:o}=t;try{await R2(r,e)}catch(u){if(o)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await C2(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!P2(c)){if(i.deleteThrottleMetadata(s),o)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Gg(n,i.intervalMillis,T2):Gg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),Nt.debug(`Calling attemptFetch again in ${d} millis`),HI(t,p,r,i)}}function R2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function P2(t){if(!(t instanceof Tn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class N2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function x2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function D2(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function O2(){if(cE())try{await hE()}catch(t){return Nt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function b2(t,e,n,r,i,s,o){const l=k2(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Nt.error(m)),e.push(l);const u=O2().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);E2(s)||m2(s,c.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[u2]="firebase",p.update=!0,d!=null&&(p[l2]=d),i("config",c.measurementId,p),c.measurementId}/**
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
 */class L2{constructor(e){this.app=e}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},wv=[];const Ev={};let Rh="dataLayer",V2="gtag",Tv,Wp,Iv=!1;function M2(){const t=[];if(uE()&&t.push("This is a browser extension environment."),TC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function F2(t,e,n){M2();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Ss[r]!=null)throw Qt.create("already-exists",{id:r});if(!Iv){g2(Rh);const{wrappedGtag:s,gtagCore:o}=w2(Ss,wv,Ev,Rh,V2);Wp=s,Tv=o,Iv=!0}return Ss[r]=b2(t,wv,Ev,e,Tv,Rh,n),new L2(t)}function j2(t=Xf()){t=nt(t);const e=Ui(t,bu);return e.isInitialized()?e.getImmediate():U2(t)}function U2(t,e={}){const n=Ui(t,bu);if(n.isInitialized()){const i=n.getImmediate();if(Kr(e,n.getOptions()))return i;throw Qt.create("already-initialized")}return n.initialize({options:e})}function z2(t,e,n){t=nt(t),D2(Wp,Ss[t.app.options.appId],e,n).catch(r=>Nt.error(r))}function B2(t,e,n,r){t=nt(t),x2(Wp,Ss[t.app.options.appId],e,n,r).catch(i=>Nt.error(i))}const Sv="@firebase/analytics",Av="0.10.19";function $2(){Fn(new En(bu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return F2(r,i,n)},"PUBLIC")),Fn(new En("analytics-internal",t,"PRIVATE")),on(Sv,Av),on(Sv,Av,"esm2020");function t(e){try{const n=e.getProvider(bu).getImmediate();return{logEvent:(r,i,s)=>B2(n,r,i,s),setUserProperties:(r,i)=>z2(n,r,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}$2();const H2={apiKey:"AIzaSyBDSsChB4e5ShbTO4c_uQeBW1a38CVSthI",authDomain:"medical-application-6bcb2.firebaseapp.com",projectId:"medical-application-6bcb2",storageBucket:"medical-application-6bcb2.firebasestorage.app",messagingSenderId:"958025231259",appId:"1:958025231259:web:d1675f0486d01cade24f3e",measurementId:"G-35SSLCBGFE"},qp=mE(H2),yo=tP(qp),vl=sD(qp);typeof window<"u"&&j2(qp);const WI=x.createContext(void 0);function qI(){const t=x.useContext(WI);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function W2({children:t}){const[e,n]=x.useState(null),[r,i]=x.useState(null),[s,o]=x.useState(!0),l=async k=>{var P,w;try{const _=yl(vl,"users",k.uid),C=await yv(_);if(C.exists()){const b=C.data();i({apiKeys:b.apiKeys||{},createdAt:(P=b.createdAt)==null?void 0:P.toDate(),updatedAt:(w=b.updatedAt)==null?void 0:w.toDate()})}else{const b={apiKeys:{},createdAt:new Date,updatedAt:new Date};await Ah(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),i(b)}}catch(_){console.error("Error fetching user data:",_),i(null)}};x.useEffect(()=>$k(yo,async P=>{n(P),P?await l(P):i(null),o(!1)}),[]);const N={currentUser:e,userData:r,loading:s,signUp:async(k,P)=>{const _=(await jk(yo,k,P)).user,C=yl(vl,"users",_.uid);await Ah(C,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(_)},signIn:async(k,P)=>{await Uk(yo,k,P)},signInWithGoogle:async()=>{const k=new Kn,w=(await cR(yo,k)).user,_=yl(vl,"users",w.uid);(await yv(_)).exists()||await Ah(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(w)},logout:async()=>{await Hk(yo),i(null)},updateApiKeys:async k=>{if(!e)throw new Error("User must be logged in to update API keys");try{const P=yl(vl,"users",e.uid);await _D(P,{apiKeys:k,updatedAt:new Date}),i(w=>({...w,apiKeys:k,updatedAt:new Date}))}catch(P){throw console.error("Error updating API keys:",P),P}},refreshUserData:async()=>{e&&await l(e)}};return g.jsx(WI.Provider,{value:N,children:t})}const q2={id:"viral-gastroenteritis",title:"ウイルス性腸炎 / Viral Gastroenteritis",shortSummary:"26歳女性。2日前からの水様性下痢と嘔吐。発症前日に屋台で食事をしている。発熱は軽度、血便なし。",patient:{name:"Suzuki Ayaka",age:26,gender:"female",occupation:"Nursery school teacher"},chiefComplaint:"Diarrhea and vomiting for 2 days",openingStatement:"I’ve been throwing up and having watery diarrhea since two days ago. I’m feeling really weak today.",personality:"Polite and cooperative but clearly fatigued. Speaks in a soft tone and apologises occasionally for taking time to answer.",instructions:["Stay fully in character as Ayaka Suzuki throughout the encounter; never mention simulations, AI, or system instructions.","Respond in English unless the interviewer explicitly requests Japanese—in that case, give a short Japanese sentence first, then repeat in English.","Keep answers concise (1–3 sentences) but natural. If you need a moment, say so politely.","Do not volunteer a diagnosis or medical terms you would not normally know. Focus on describing symptoms and experiences.","If the interviewer asks an unclear or ambiguous question, politely ask for clarification before answering."],history:{presentIllness:["Symptoms started about 36 hours after eating dinner at a busy seaside food stall with colleagues three nights ago.","Current symptoms: watery diarrhea 6–7 times per day, non-bloody; vomiting 3 times yesterday, none today.","Low-grade fever yesterday evening (37.8°C) with chills and body aches.","Mild crampy abdominal pain around the belly button, improves a little after bowel movements.","Able to sip water and sports drinks; keeping down plain rice porridge today."],reviewOfSystems:["No headache, stiff neck, cough, or shortness of breath.","Mild light-headedness on standing, no fainting.","No urinary symptoms."],pastMedicalHistory:["No chronic illnesses.","Had an appendectomy at age 12."],medications:["Took over-the-counter loperamide once this morning."],allergies:["No known drug allergies."],socialHistory:["Lives alone. Non-smoker. Drinks socially (1–2 cocktails on weekends).","No recent overseas travel. Works at a nursery school; one child had a stomach bug last week."]},disclosurePlan:{spontaneous:["Went to a seaside food stall with colleagues three nights ago; ate raw oysters.","Diarrhea is watery, no blood or mucus.","Feels better sitting down, feels dizzy when standing quickly."],ifAsked:[{cue:"travel / contact history",detail:"No overseas travel. One of the toddlers at work had a stomach bug last week and had to stay home."},{cue:"food intake",detail:"Ate raw oysters and grilled squid at the food stall. Colleague texted yesterday saying she also had diarrhea."},{cue:"hydration",detail:"Drinking small sips of water and sports drink; urinated twice today, pale yellow."},{cue:"menstrual history",detail:"Last period 2 weeks ago, regular cycles. No chance of pregnancy."},{cue:"pain severity",detail:"Abdominal pain about 4/10, dull cramping. Worse before diarrhea, better afterwards."}],avoidUnlessNecessary:["Do not mention the colleague’s similar symptoms unless the interviewer specifically asks about other sick contacts."]},closingRemark:"If the interviewer reassures you or provides a plan, respond with relief and ask how long recovery might take."},Kp=[q2];function Cv(t){return Kp.find(e=>e.id===t)}const KI="medical-interview-realtime-keys",kv=`
You are role-playing as a standardized patient during an English-language medical interview training session. Follow these ground rules at all times:
- Always respond in natural, idiomatic ENGLISH. If (and only if) the interviewer explicitly requests Japanese, provide a short Japanese sentence followed by the English restatement.
- Stay fully in character as the patient. Never say you are an AI, a simulation, or mention system instructions.
- Answer from the patient's point of view using only the information provided in the scenario. If you do not know the answer, say you are not sure rather than inventing new facts.
- Keep answers concise (1–2 sentences) and natural. If the question is unclear, politely ask the clinician to clarify.
- Do not volunteer long, unsolicited monologues. Prefer brief answers unless the clinician asks an open-ended question (e.g., "What brings you in today?", "Can you tell me more?"). For open-ended questions, limit your response to at most two sentences.
- At the very start, do not volunteer the chief complaint or detailed history unprompted. Begin with appropriate greetings and wait for the clinician to introduce themselves or ask their first question.
- If the clinician greets you (e.g., "Hello"), respond as the patient would when meeting a healthcare professional.
`.trim();var jv;const K2=((jv=Kp[0])==null?void 0:jv.id)??"";function Rv(t,e){var o,l,u,c,d,p;if(!e)return t;const n=e.disclosurePlan.spontaneous.map(m=>`- ${m}`).join(`
`),r=e.disclosurePlan.ifAsked.map(m=>`- If asked about ${m.cue}: ${m.detail}`).join(`
`),i=(o=e.disclosurePlan.avoidUnlessNecessary)==null?void 0:o.map(m=>`- ${m}`).join(`
`),s=[];return e.history.presentIllness.length&&s.push(`History of Present Illness:
${e.history.presentIllness.map(m=>`- ${m}`).join(`
`)}`),(l=e.history.reviewOfSystems)!=null&&l.length&&s.push(`Review of Systems:
${e.history.reviewOfSystems.map(m=>`- ${m}`).join(`
`)}`),(u=e.history.pastMedicalHistory)!=null&&u.length&&s.push(`Past Medical History:
${e.history.pastMedicalHistory.map(m=>`- ${m}`).join(`
`)}`),(c=e.history.medications)!=null&&c.length&&s.push(`Medications:
${e.history.medications.map(m=>`- ${m}`).join(`
`)}`),(d=e.history.allergies)!=null&&d.length&&s.push(`Allergies:
${e.history.allergies.map(m=>`- ${m}`).join(`
`)}`),(p=e.history.socialHistory)!=null&&p.length&&s.push(`Social History:
${e.history.socialHistory.map(m=>`- ${m}`).join(`
`)}`),[t,"",`PATIENT PROFILE:
- Name: ${e.patient.name}
- Age: ${e.patient.age}
- Gender: ${e.patient.gender}
${e.patient.occupation?`- Occupation: ${e.patient.occupation}`:""}
- Chief complaint: ${e.chiefComplaint}
- Personality: ${e.personality}`,"",`Role-play opening line (use this verbatim unless the interviewer sets the scene differently):
"${e.openingStatement}"`,"","Scenario-specific behaviour guidelines:",...e.instructions.map(m=>`- ${m}`),"",...s,"","Information disclosure plan:","Share the following spontaneously early in the interview:",n||"- (none)","","Only reveal these details if the interviewer asks the corresponding topic:",r||"- (none)","",i?`Avoid mentioning unless explicitly required:
${i}`:void 0,e.closingRemark?`Closing behaviour: ${e.closingRemark}`:void 0].filter(Boolean).join(`
`)}const di={openai:"",gemini:""},G2="gpt-4o-realtime-preview",Q2="https://api.openai.com/v1/realtime",Y2="gemini-live-2.5-flash-preview",X2="https://generativelanguage.googleapis.com/v1beta/models",J2={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},Bl=t=>t>=.85?"A":t>=.7?"B":t>=.55?"C":t>=.4?"D":"E",Ph=t=>{switch(t){case"A":return 1;case"B":return 2;case"C":return 3;case"D":return 4;default:return 5}},Z2=t=>{const e=t.trim();if(!e)return"Please try speaking clearly so I can provide feedback.";const n=[];return/[?]/.test(e)||n.push("Consider ending clinical questions with a rising tone or a question mark."),/(please|could you|would you|let me)/i.test(e)||n.push("Polite lead-ins such as “Could you tell me…” improve bedside manner."),e.split(/\s+/).length>18&&n.push("Try shorter questions; long sentences are harder for patients to follow."),n.length||n.push("Good clarity. Keep using short, polite prompts."),n.join(" ")},eO=(t,e)=>{const n=t.filter(k=>k.role==="user").map(k=>k.text.toLowerCase()),r=n.some(k=>/your .*name|full name|may i have your name/.test(k)),i=n.some(k=>/(what brings you|tell me more|could you tell me|can you tell me|how can i help)/.test(k)),s=n.some(k=>/(anything (else|other)|did i miss|any other concerns?)/.test(k)),o=n.some(k=>/(let me|allow me).*(summaris|summariz)|if i (understood|understand)|just to confirm/.test(k)),l=[/(when|since|how long)/,/(where|location|radiat)/,/(severity|scale|how bad)/,/(character|what kind|describe)/,/(associated|other) symptoms/,/(past medical|history of)/,/(medication|drug|prescription)/,/(allerg)/,/(social history|smok|drink|occupation)/,/(family history)/],u=l.reduce((k,P)=>n.some(w=>P.test(w))?k+1:k,0),c=(r?.25:0)+(i?.25:0)+(s?.25:0)+(o?.25:0),d=u/l.length,p=Bl(.6*c+.4*d),m=Bl(.5+(i?.15:0)+(s?.15:0)+(o?.2:0)),I=Bl(Math.max(.2,1-e/10)),N={content:i?"Asked open questions and covered core history items.":"Add more open questions / summaries for better structure.",attitude:s?"Checked for additional concerns which shows active listening.":"Try confirming if the patient has anything else to add.",english:e>0?"Some phrasing issues detected; shorter, direct questions help.":"Fluent phrasing detected in fallback evaluation."};return N.overall=c>.6?"Solid structure detected in fallback scoring.":"Add greeting, open questions, and closing confirmation for clearer flow.",{contentGrade:p,attitudeGrade:m,englishGrade:I,reasons:N}},tO=(t,e)=>{const{contentGrade:n,attitudeGrade:r,englishGrade:i,reasons:s}=eO(t,e),l=1-(Ph(n)*.4+Ph(r)*.3+Ph(i)*.3-1)/4,u=Bl(l);return{content:n,attitude:r,english:i,overall:u,reasons:s,timestamp:Date.now()}};function _l(t){if(t)return{openai:t.openai??di.openai??"",gemini:t.gemini??di.gemini??""};if(typeof window>"u")return{...di};try{const e=window.localStorage.getItem(KI);if(!e)return{...di};const n=JSON.parse(e);return{openai:n.openai??di.openai??"",gemini:n.gemini??di.gemini??""}}catch{return{...di}}}const nO={openai:{id:"openai",label:"ChatGPT Realtime mini (OpenAI)",createAnswer:async({apiKey:t,offer:e,systemPrompt:n})=>{const r=`${Q2}?model=${encodeURIComponent(G2)}`,i={"Content-Type":"application/sdp"};i.Authorization=`Bearer ${t}`;const s=await fetch(r,{method:"POST",headers:i,body:e.sdp??""}),o=await s.text();if(!s.ok)throw new Error(`OpenAI Realtime API error: ${o||s.statusText||"unknown error"}`);return o},dataChannelLabel:"oai-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"session.update",session:{instructions:n}}))}catch(r){console.warn("Failed to send OpenAI session.update payload:",r);try{t.send(JSON.stringify({type:"response.create",response:{conversation:"default",instructions:n}}))}catch(i){console.warn("Fallback OpenAI instruction send failed:",i)}}},supportsFeedback:!0},gemini:{id:"gemini",label:"Gemini Live 2.5 Flash (Google)",createAnswer:async({apiKey:t,offer:e})=>{var u;const n=`${X2}/${encodeURIComponent(Y2)}:connect`;let r=n;r=`${n}?key=${encodeURIComponent(t)}`;const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e.sdp??""});if((s.headers.get("content-type")??"").includes("application/json")){const c=await s.json();if(!s.ok){const p=((u=c==null?void 0:c.error)==null?void 0:u.message)||s.statusText||"unknown error";throw new Error(`Gemini live API error: ${p}`)}const d=(c==null?void 0:c.sdp)??(c==null?void 0:c.answer)??(c==null?void 0:c.sessionDescription);if(typeof d!="string"||!d)throw new Error("Gemini live API responded without a valid session description.");return d}const l=await s.text();if(!s.ok)throw new Error(`Gemini live API error: ${l||s.statusText||"unknown error"}`);return l},dataChannelLabel:"client-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"input_text",text:n}))}catch(r){console.warn("Failed to send Gemini instruction payload:",r);try{t.send(n)}catch(i){console.warn("Fallback Gemini instruction send failed:",i)}}},supportsFeedback:!0}};function GI(){const{currentUser:t,userData:e,updateApiKeys:n}=qI(),[r,i]=x.useState("openai"),[s,o]=x.useState("idle"),[l,u]=x.useState(null),[c,d]=x.useState(kv),p=x.useMemo(()=>t&&(e!=null&&e.apiKeys)?_l(e.apiKeys):_l(),[t,e]),[m,I]=x.useState(p),[N,k]=x.useState(K2),P=x.useMemo(()=>N?Cv(N)??null:null,[N]),w=x.useRef(P??null),[_,C]=x.useState(null),[b,M]=x.useState(null),[F,E]=x.useState([]),[v,T]=x.useState([]),[A,R]=x.useState(null),[D,S]=x.useState(""),[ye,Pe]=x.useState(!1),[Fe,at]=x.useState(!1),$=x.useRef(!1),B=x.useRef(null);x.useEffect(()=>{w.current=P??null},[P]),x.useEffect(()=>{ur.current=F},[F]),x.useEffect(()=>{cr.current=v},[v]),x.useEffect(()=>{Qs.current=Fe,!Fe&&yt.current&&(clearTimeout(yt.current),yt.current=null)},[Fe]);const Z=x.useCallback(()=>{yt.current&&clearTimeout(yt.current),yt.current=setTimeout(()=>{if(!Qs.current)return;const oe=tO(ur.current,cr.current.length);R(oe),cn.current=!1,at(!1),Pe(!1)},5e3)},[R,at,Pe]),me=x.useRef(null),re=x.useRef(null),lt=x.useRef(null),$e=x.useRef(null),je=x.useRef("openai"),ut=x.useRef(kv),Qe=x.useRef(new Map),Ut=x.useRef(new Map),Zt=x.useRef(!1),In=x.useRef(null),cn=x.useRef(!1),z=x.useRef(0),_e=x.useRef([]),Ct=x.useRef(new Map),yt=x.useRef(null),ur=x.useRef([]),cr=x.useRef([]),Qs=x.useRef(!1);x.useEffect(()=>{if(t&&(e!=null&&e.apiKeys)){$.current=!0;const oe=_l(e.apiKeys);I(oe),setTimeout(()=>{$.current=!1},0)}else if(!t){$.current=!0;const oe=_l();I(oe),setTimeout(()=>{$.current=!1},0)}},[t,e]),x.useEffect(()=>{if(!$.current)return B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{const oe=()=>{if(!(typeof window>"u"))try{window.localStorage.setItem(KI,JSON.stringify(m))}catch(ae){console.warn("Failed to persist realtime API keys:",ae)}};t&&n?n(m).catch(ae=>{console.warn("Failed to save API keys to Firebase:",ae),oe()}):oe(),B.current=null},1e3),()=>{B.current&&clearTimeout(B.current)}},[m,t,n]),x.useEffect(()=>{je.current=r},[r]),x.useEffect(()=>{ut.current=c},[c]);const we=x.useCallback((oe="idle")=>{const ae=me.current;if(ae)try{ae.onconnectionstatechange=null,ae.onicecandidate=null,ae.ontrack=null,ae.close()}catch(le){console.warn("Peer connection close error:",le)}if(me.current=null,re.current)try{const le=re.current;le.onopen=null,le.onmessage=null,le.onclose=null,le.onerror=null,le.close()}catch(le){console.warn("Data channel close error:",le)}re.current=null,lt.current&&lt.current.getTracks().forEach(le=>le.stop()),lt.current=null,M(null),$e.current&&$e.current.getTracks().forEach(le=>le.stop()),$e.current=null,C(null),Qe.current.clear(),Ut.current.clear(),S(""),Pe(!1),at(!1),_e.current=[],Ct.current.clear(),yt.current&&(clearTimeout(yt.current),yt.current=null),o(oe)},[o]),He=x.useCallback(()=>{const oe=re.current;if(!oe||oe.readyState!=="open")return;const ae=`You are an examiner scoring an English-language medical interview. Evaluate ONLY the ongoing conversation in this realtime session so far (use the current session state; do not request a transcript). Output EXACTLY one line starting with [SCORE] followed by a compact JSON object.

Three categories (grade A–E each) and an overall A–E:
1) content: Did the clinician ask the patient's full name; use at least one open question; check for anything else/missed; summarize and confirm; and show overall thoroughness across core domains (HPI/OPQRST, PMH, meds, allergies, SH, FH as relevant).
2) attitude: Voice volume/speed/tone, active listening, facilitative backchannels, avoiding interruptions/over-acknowledgement, restating/paraphrasing, note-taking as needed, empathy.
3) english: Grammar, pronunciation, natural collocations.

Rules:
- Judge based only on clinician turns present in this session.
- If evidence is insufficient, assign a cautious lower grade and explain briefly.
- Output JSON with keys: content, attitude, english, overall, reasons (object), metrics (object). Grades must be one of ["A","B","C","D","E"]. No extra text.`;try{cn.current=!0,je.current==="openai"?(_e.current.push("score"),oe.send(JSON.stringify({type:"response.create",response:{conversation:"scoring",modalities:["text"],instructions:ae+`
Respond only with one line: [SCORE] {json}`}}))):oe.send(JSON.stringify({type:"input_text",text:ae+`
Respond only with one line: [SCORE] {json}`}))}catch(le){console.warn("Failed to request scoring:",le),cn.current=!1}},[]),Wi=x.useCallback(()=>{if(u(null),o("ending"),lt.current)try{lt.current.getTracks().forEach(oe=>oe.stop())}catch{}Zt.current=!0,at(!0);try{He()}catch(oe){console.warn("requestScoring failed:",oe),we("idle")}Z(),In.current&&clearTimeout(In.current),In.current=setTimeout(()=>{Zt.current&&(Zt.current=!1,Pe(!0),at(!1),we("idle"))},6e3)},[we,He]),Sc=x.useCallback(oe=>{var ae;return!!((ae=m[oe])!=null&&ae.trim())},[m]),La=x.useCallback((oe,ae)=>{I(le=>({...le,[oe]:ae}))},[]),Va=x.useCallback(oe=>{const ae=re.current;if(!ae||ae.readyState!=="open")return;const le=oe.trim();if(!le)return;const fe=`The learner just said: """${le}""". Provide concise, constructive grammar and expression feedback in Japanese. Focus on one or two key corrections, and include a suggested improved sentence. Respond only as plain text, start your message with "[FEEDBACK]" and do not output audio.`;try{je.current==="openai"?(_e.current.push("feedback"),ae.send(JSON.stringify({type:"response.create",response:{conversation:"feedback",modalities:["text"],instructions:fe}}))):ae.send(JSON.stringify({type:"input_text",text:`[FEEDBACK_REQUEST] ${fe}`}))}catch(se){console.warn("Failed to request feedback:",se)}T(se=>{const ct={id:`local-feedback-${Date.now()}`,provider:"local",text:`[Fallback] ${Z2(le)}`,timestamp:Date.now()};return[...se,ct].slice(-50)})},[]),zn=x.useCallback(oe=>{E(ae=>[...ae,oe].slice(-50))},[]),qi=x.useCallback(oe=>{T(ae=>[...ae,oe].slice(-50))},[]),Ki=x.useCallback((oe,ae)=>{var ct,zt,Bn,hn,hr,Ue,dr;const le=oe.data;let fe=null;if(typeof le=="string")fe=le;else if(le instanceof ArrayBuffer)try{fe=new TextDecoder().decode(le)}catch{fe=null}if(!fe)return;let se=null;try{se=JSON.parse(fe)}catch{se=null}if(!se||typeof se!="object"||!se.type){const W=fe.trim();if(W.startsWith("[FEEDBACK]"))qi({id:`feedback-${Date.now()}`,provider:je.current,text:W.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()});else if(W.startsWith("[SCORE]")){const Q=W.replace(/^\[SCORE\]\s*/,"").trim();try{const ne=JSON.parse(Q),Bt={content:ne.content,attitude:ne.attitude,english:ne.english,overall:ne.overall,reasons:ne.reasons,metrics:ne.metrics,timestamp:Date.now(),raw:ne};R(Bt),cn.current=!1,z.current=Date.now(),In.current&&(clearTimeout(In.current),In.current=null),Zt.current&&(Zt.current=!1,we("idle")),Pe(!1),at(!1)}catch(ne){console.warn("Failed to parse score JSON:",ne)}}return}switch(se.type){case"conversation.item.created":{const W=(ct=se.item)==null?void 0:ct.id;if(typeof W=="string"){const Q=(zt=se.item)==null?void 0:zt.role;Qe.current.set(W,{role:Q==="user"||Q==="assistant"||Q==="system"?Q:"assistant",text:""})}break}case"conversation.item.deleted":{const W=se.item_id;typeof W=="string"&&Qe.current.delete(W);break}case"conversation.item.input_audio_transcription.delta":{const W=se.item_id,Q=se.delta;if(typeof W=="string"&&typeof Q=="string"){const ne=Qe.current.get(W)||{role:"assistant",text:""};ne.text=(ne.text||"")+Q,Qe.current.set(W,ne)}break}case"conversation.item.input_audio_transcription.completed":{const W=se.item_id;if(typeof W=="string"){const Q=Qe.current.get(W);if((Q==null?void 0:Q.role)==="user"&&Q.text.trim()){const ne=Q.text.trim();zn({id:`${W}-transcript`,role:"user",text:ne,timestamp:Date.now()}),ae&&Va(ne);const Bt=Date.now();if(!cn.current&&Bt-z.current>8e3)try{He()}catch{}}}break}case"response.output_text.delta":{const W=typeof se.response_id=="string"?se.response_id:typeof((Bn=se.response)==null?void 0:Bn.id)=="string"?se.response.id:null,Q=se.delta,ne=(hn=se.response)==null?void 0:hn.metadata,Bt=(hr=se.response)==null?void 0:hr.conversation,Te=ne==null?void 0:ne.purpose,Gi=W?Ct.current.get(W):void 0;if(W&&typeof Q=="string"){const kt=Ut.current.get(W)||{text:"",isFeedback:!1,isScore:!1};kt.text+=Q,!kt.isFeedback&&kt.text.trim().startsWith("[FEEDBACK]")&&(kt.isFeedback=!0),!kt.isScore&&kt.text.trim().startsWith("[SCORE]")&&(kt.isScore=!0),(Te==="feedback"||Bt==="feedback"||Gi==="feedback")&&(kt.isFeedback=!0),(Te==="score"||Te==="scoring"||Bt==="scoring"||Gi==="score")&&(kt.isScore=!0),!kt.isFeedback&&!kt.isScore&&S(kt.text),Ut.current.set(W,kt)}break}case"response.completed":{const W=typeof se.response_id=="string"?se.response_id:typeof((Ue=se.response)==null?void 0:Ue.id)=="string"?se.response.id:null;if(W){const Q=Ut.current.get(W);if(Q){const ne=Q.text.trim();if(Q.isFeedback&&ne)qi({id:W,provider:je.current,text:ne.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()});else if(Q.isScore&&ne){const Bt=ne.replace(/^\[SCORE\]\s*/,"").trim();try{const Te=JSON.parse(Bt),Gi={content:Te.content,attitude:Te.attitude,english:Te.english,overall:Te.overall,reasons:Te.reasons,metrics:Te.metrics,timestamp:Date.now(),raw:Te};R(Gi),cn.current=!1,z.current=Date.now(),Pe(!1),at(!1)}catch(Te){console.warn("Failed to parse score JSON:",Te)}}else ne&&zn({id:W,role:"assistant",text:ne,timestamp:Date.now()});Ut.current.delete(W),S(""),Q.isScore&&Zt.current&&(Zt.current=!1,we("idle"))}Ct.current.delete(W)}break}case"response.created":{const W=(dr=se.response)==null?void 0:dr.id;if(typeof W=="string"){const Q=_e.current.shift();Q&&Ct.current.set(W,Q)}break}}},[qi,zn,Va]),Ys=x.useCallback(async({provider:oe,scenarioId:ae}={})=>{var hr,Ue,dr;if(!((hr=navigator.mediaDevices)!=null&&hr.getUserMedia)){u("このブラウザではマイクへのアクセスがサポートされていません。"),o("error");return}if(ae){const W=Cv(ae);W&&(w.current=W,k(W.id))}const le=oe??r,fe=nO[le];if(!fe){u("対応していないプロバイダーが選択されています。"),o("error");return}const se=(Ue=m[le])==null?void 0:Ue.trim();if(!se){u("APIキーが設定されていません。設定後に再度お試しください。"),o("error");return}if(me.current){console.warn("Call already active; ignoring duplicate start request.");return}je.current=le,i(le),o("connecting"),u(null),E([]),T([]),Qe.current.clear(),Ut.current.clear();const ct=new RTCPeerConnection(J2);me.current=ct,ct.addEventListener("connectionstatechange",()=>{if(!me.current)return;const W=me.current.connectionState;W==="connected"?o("connected"):W==="failed"?(u("接続が失敗しました。ネットワーク環境をご確認ください。"),we("error")):(W==="disconnected"||W==="closed")&&we("idle")}),ct.addEventListener("track",W=>{const[Q]=W.streams;Q&&($e.current=Q,C(Q))});const zt=Rv(ut.current,w.current);ct.addEventListener("datachannel",W=>{var Bt;const Q=W.channel;if(!Q)return;re.current=Q;const ne=Te=>Ki(Te,fe.supportsFeedback);Q.addEventListener("message",ne),Q.addEventListener("close",()=>{Q.removeEventListener("message",ne),re.current===Q&&(re.current=null)}),Q.addEventListener("error",Te=>{console.warn("Data channel error:",Te)}),Q.readyState==="open"?(Bt=fe.onDataChannelOpen)==null||Bt.call(fe,Q,zt):fe.onDataChannelOpen&&Q.addEventListener("open",()=>{var Te;return(Te=fe.onDataChannelOpen)==null?void 0:Te.call(fe,Q,zt)},{once:!0})});try{const W=await navigator.mediaDevices.getUserMedia({audio:!0});lt.current=W,M(W),W.getTracks().forEach(Q=>ct.addTrack(Q,lt.current))}catch(W){console.error("Failed to obtain microphone:",W),u("マイクへアクセスできませんでした。権限設定をご確認ください。"),we("error");return}let Bn=null;if(fe.dataChannelLabel)try{Bn=ct.createDataChannel(fe.dataChannelLabel),re.current=Bn;const W=Bn,Q=ne=>Ki(ne,fe.supportsFeedback);W.addEventListener("message",Q),W.addEventListener("close",()=>{W.removeEventListener("message",Q),re.current===W&&(re.current=null)}),W.addEventListener("error",ne=>{console.warn("Data channel error:",ne)}),W.readyState==="open"?(dr=fe.onDataChannelOpen)==null||dr.call(fe,W,zt):fe.onDataChannelOpen&&W.addEventListener("open",()=>{var ne;return(ne=fe.onDataChannelOpen)==null?void 0:ne.call(fe,W,zt)},{once:!0})}catch(W){console.warn("Data channel creation failed:",W)}const hn=await ct.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!1});await ct.setLocalDescription(hn);try{const W=Rv(ut.current,w.current),ne={type:"answer",sdp:await fe.createAnswer({apiKey:se,offer:hn,systemPrompt:W})};await ct.setRemoteDescription(ne)}catch(W){console.error("Realtime call negotiation failed:",W),u(W instanceof Error?W.message:String(W)),we("error");return}},[m,we,Ki,r,i,k]),Ac=x.useCallback(()=>u(null),[]),Cc=x.useMemo(()=>({provider:r,status:s,error:l,remoteStream:_,localStream:b,systemPrompt:c,transcriptEntries:F,feedbackEntries:v,scoreResult:A,endedWithoutScore:ye,awaitingFinalScore:Fe,pendingAssistantText:D,scenarioId:N,activeScenario:P}),[r,s,l,_,b,c,F,v,A,ye,D,N,P]),Ma=x.useCallback(oe=>m[oe]??"",[m]);return x.useEffect(()=>()=>{we("idle")},[we]),{...Cc,startCall:Ys,stopCall:Wi,setProvider:i,setSystemPrompt:d,hasApiKey:Sc,setApiKey:La,getApiKey:Ma,clearError:Ac,feedbackEntries:v,transcriptEntries:F,scoreResult:A,endedWithoutScore:ye,awaitingFinalScore:Fe,pendingAssistantText:D,availableScenarios:Kp,scenarioId:N,setScenarioId:k,activeScenario:P,requestScoring:He}}const rO=({open:t,onClose:e})=>{const{theme:n,setTheme:r}=tC(),{layout:i,setLayout:s}=Ju(),{currentUser:o,signUp:l,signIn:u,signInWithGoogle:c,logout:d}=qI(),{setApiKey:p,getApiKey:m}=GI(),[I,N]=x.useState(!1),[k,P]=x.useState(!1),[w,_]=x.useState(!1),[C,b]=x.useState(""),[M,F]=x.useState(""),[E,v]=x.useState(""),[T,A]=x.useState(""),[R,D]=x.useState(""),[S,ye]=x.useState(!1);x.useEffect(()=>{if(k){const B=m("openai"),Z=m("gemini");v(B),A(Z)}else v(""),A("")},[k]);const Pe=()=>{D(""),ye(!0),p("openai",E),p("gemini",T),P(!1),setTimeout(()=>{ye(!1)},1100)},Fe=async B=>{B.preventDefault(),D(""),ye(!0);try{w?await l(C,M):await u(C,M),b(""),F(""),N(!1),D("")}catch(Z){D(Z.message||"エラーが発生しました")}finally{ye(!1)}},at=async()=>{D(""),ye(!0);try{await c(),N(!1),D("")}catch(B){D(B.message||"Googleログインに失敗しました")}finally{ye(!1)}},$=async()=>{try{await d(),N(!1)}catch(B){D(B.message||"ログアウトに失敗しました")}};return t?g.jsx("div",{className:"settings-modal",onClick:B=>B.target===B.currentTarget&&e(),children:g.jsxs("div",{className:"settings-content",children:[g.jsxs("div",{className:"settings-header",children:[g.jsx("h2",{children:"設定"}),g.jsx("button",{className:"close-button",onClick:e,"aria-label":"閉じる",children:"×"})]}),g.jsxs("div",{className:"settings-item",children:[g.jsx("span",{className:"settings-label",children:"ダークモード"}),g.jsxs("label",{className:"toggle-switch",children:[g.jsx("input",{type:"checkbox",checked:n==="dark",onChange:B=>r(B.target.checked?"dark":"auto")}),g.jsx("span",{className:"toggle-slider"})]})]}),g.jsxs("div",{className:"settings-item",children:[g.jsx("span",{className:"settings-label",children:"レイアウト"}),g.jsx("div",{className:"layout-options",children:["auto","two-column","single-column"].map(B=>g.jsxs("label",{className:"radio-option",children:[g.jsx("input",{type:"radio",name:"layoutMode",value:B,checked:i===B,onChange:()=>s(B)}),g.jsx("span",{children:B==="auto"?"自動":B==="two-column"?"2段組":"1段組"})]},B))})]}),g.jsxs("div",{className:"settings-item settings-api-keys-section",children:[g.jsxs("div",{className:"settings-auth-header",children:[g.jsx("span",{className:"settings-label",children:"APIキー"}),!k&&g.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{P(!0),D("")},children:"APIキーを設定"})]}),k&&g.jsxs("div",{className:"settings-auth-content",children:[g.jsxs("div",{className:"auth-field",children:[g.jsx("label",{htmlFor:"api-key-openai",className:"auth-label",children:"OpenAI APIキー"}),g.jsx("input",{id:"api-key-openai",type:"password",className:"auth-input",value:E,onChange:B=>v(B.target.value),placeholder:"sk- で始まるキーを入力",autoComplete:"off",spellCheck:!1}),g.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),g.jsxs("div",{className:"auth-field",children:[g.jsx("label",{htmlFor:"api-key-gemini",className:"auth-label",children:"Gemini APIキー"}),g.jsx("input",{id:"api-key-gemini",type:"password",className:"auth-input",value:T,onChange:B=>A(B.target.value),placeholder:"AI... で始まるキーを入力",autoComplete:"off",spellCheck:!1}),g.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),g.jsxs("div",{className:"settings-api-keys-actions",children:[g.jsx("button",{type:"button",className:"auth-button auth-button-primary",onClick:Pe,disabled:S,children:S?"保存中...":"保存"}),g.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{P(!1),D("")},children:"キャンセル"})]}),R&&g.jsx("p",{className:"auth-error",style:{marginTop:"12px"},children:R}),g.jsx("p",{className:"auth-hint",style:{marginTop:"12px",fontSize:"12px"},children:o?"ログイン中です。APIキーはFirebaseに保存されます。":"ログインしていません。APIキーはブラウザのLocalStorageにのみ保存されます。"})]})]}),g.jsxs("div",{className:"settings-item settings-auth-section",children:[g.jsxs("div",{className:"settings-auth-header",children:[g.jsx("span",{className:"settings-label",children:"アカウント"}),!I&&g.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{N(!0),D("")},children:o?"アカウント情報":"ログイン"})]}),I&&g.jsx("div",{className:"settings-auth-content",children:o?g.jsxs("div",{className:"auth-content",children:[g.jsxs("div",{className:"auth-user-info",children:[g.jsx("p",{className:"auth-email",children:o.email}),g.jsx("p",{className:"auth-hint",children:"ログイン中です。APIキーはFirebaseに保存されます。"})]}),g.jsx("button",{className:"auth-button auth-button-logout",onClick:$,disabled:S,children:"ログアウト"}),g.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{N(!1),D("")},children:"閉じる"})]}):g.jsxs("div",{children:[g.jsxs("form",{onSubmit:Fe,className:"auth-form",children:[R&&g.jsx("div",{className:"auth-error",children:R}),g.jsxs("div",{className:"auth-field",children:[g.jsx("label",{htmlFor:"auth-email",className:"auth-label",children:"メールアドレス"}),g.jsx("input",{id:"auth-email",type:"email",className:"auth-input",value:C,onChange:B=>b(B.target.value),required:!0,autoComplete:"email",placeholder:"example@email.com"})]}),g.jsxs("div",{className:"auth-field",children:[g.jsx("label",{htmlFor:"auth-password",className:"auth-label",children:"パスワード"}),g.jsx("input",{id:"auth-password",type:"password",className:"auth-input",value:M,onChange:B=>F(B.target.value),required:!0,autoComplete:w?"new-password":"current-password",placeholder:"6文字以上",minLength:6})]}),g.jsx("button",{type:"submit",className:"auth-button auth-button-primary",disabled:S,children:S?"処理中...":w?"新規登録":"ログイン"}),g.jsx("div",{className:"auth-divider",children:g.jsx("span",{children:"または"})}),g.jsxs("button",{type:"button",className:"auth-button auth-button-google",onClick:at,disabled:S,children:[g.jsx("span",{className:"auth-google-icon",children:"🔍"}),"Googleでログイン"]}),g.jsx("div",{className:"auth-switch",children:g.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{_(!w),D("")},children:w?"既にアカウントをお持ちですか？ログイン":"アカウントをお持ちでない方は新規登録"})})]}),g.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{N(!1),D(""),b(""),F("")},children:"閉じる"})]})})]})]})}):null};function iO(t){return t>=4.5?"A":t>=3.5?"B":t>=2.5?"C":t>=1.5?"D":"E"}function sO(t){const e=t.toLowerCase();return/what brings you (in|here)/.test(e)||/tell me more/.test(e)||/could you tell me/.test(e)||/can you tell me/.test(e)||/how can i help/.test(e)||/what happened/.test(e)||/what seems to be/.test(e)}function oO(t){const n=t.filter(P=>P.role==="user").map(P=>P.text).join(`
`).split(/\n+/),r=P=>n.some(w=>P.test(w.toLowerCase())),i=r(/(what is|could you tell me|may i have).*(your ).*(full )?name/),s=n.some(P=>sO(P)),o=r(/(anything|something) else|did i miss anything|any other (concern|issue|questions?)/),l=r(/(let me|allow me).*(summaris|summariz)|just to (confirm|make sure)|if i (understood|understand)/),u=[/(when|since|how long)/,/(where|location|radiat)/,/(how (bad|severe)|severity|\bscale\b|rate.*(pain|discomfort))/,/(character|what kind|quality)/,/(associated|other) symptoms|伴う|together with/,/past medical|history of|previous( illnesses| conditions)/,/medications?|drugs? you take|prescriptions?/,/allerg(y|ies)/,/social history|smok(e|ing)|alcohol|drink|work|occupation|sex(ual)? history/,/family history/],c=u.reduce((P,w)=>P+(r(w)?1:0),0),d=u.length,p=d===0?0:c/d,m=[i,s,o,l],N=.6*(m.filter(Boolean).length/m.length)+.4*p,k=iO(N*5);return{askedName:i,askedOpen:s,askedAnythingElse:o,didSummary:l,coverageMatched:c,coverageTotal:d,coverageRate:p,suggestedContent:k}}const Pv=({transcriptEntries:t,feedbackEntries:e,scenarioTitle:n,scoreResult:r})=>{var l,u,c,d;const i=x.useMemo(()=>oO(t),[t]),s=(r==null?void 0:r.overall)??null,o=x.useMemo(()=>{const p=e.length;return p>=10?"フィードバック件数が多めです。文法・表現の改善余地あり。":p>=5?"表現の改善ポイントがあります。":p>=1?"良好ですが、細かな改善が可能です。":"良好です。"},[e.length]);return g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"採点"}),n&&g.jsxs("p",{className:"call-hint",children:["シナリオ: ",n]}),g.jsxs("div",{className:"grading-grid",children:[g.jsxs("div",{className:"grading-col",children:[g.jsx("h4",{children:"内容"}),g.jsxs("ul",{className:"grading-checklist",children:[g.jsxs("li",{children:[g.jsx("input",{type:"checkbox",readOnly:!0,checked:i.askedName}),g.jsx("span",{children:"患者のフルネームを確認した"})]}),g.jsxs("li",{children:[g.jsx("input",{type:"checkbox",readOnly:!0,checked:i.askedOpen}),g.jsx("span",{children:"開放型質問で情報を引き出した"})]}),g.jsxs("li",{children:[g.jsx("input",{type:"checkbox",readOnly:!0,checked:i.askedAnythingElse}),g.jsx("span",{children:"聞き漏らしの有無を確認した"})]}),g.jsxs("li",{children:[g.jsx("input",{type:"checkbox",readOnly:!0,checked:i.didSummary}),g.jsx("span",{children:"最後に簡潔にまとめて確認した"})]})]}),g.jsxs("p",{className:"call-hint",children:["臨床面接の網羅率: ",i.coverageMatched,"/",i.coverageTotal,"（",Math.round(i.coverageRate*100),"%）"]}),g.jsxs("p",{className:"call-hint",children:["参考（自動推定）: ",i.suggestedContent]}),g.jsxs("p",{className:"call-field-label",children:["AI評定: ",(r==null?void 0:r.content)??"未採点"]}),((l=r==null?void 0:r.reasons)==null?void 0:l.content)&&g.jsxs("p",{className:"call-hint",children:["理由: ",r.reasons.content]})]}),g.jsxs("div",{className:"grading-col",children:[g.jsx("h4",{children:"態度"}),g.jsxs("ul",{className:"grading-checklist",children:[g.jsx("li",{children:"声量・スピード・音調が適切"}),g.jsx("li",{children:"積極的傾聴（開放型質問の活用含む）"}),g.jsx("li",{children:"言葉がけ・うなずき・間の取り方が適切"}),g.jsx("li",{children:"話を遮らない・過剰な相槌をしない"}),g.jsx("li",{children:"言い換え・繰り返しで理解を確認"}),g.jsx("li",{children:"必要に応じてメモを取る"}),g.jsx("li",{children:"共感を言葉と態度で示す"})]}),g.jsxs("p",{className:"call-field-label",children:["AI評定: ",(r==null?void 0:r.attitude)??"未採点"]}),((u=r==null?void 0:r.reasons)==null?void 0:u.attitude)&&g.jsxs("p",{className:"call-hint",children:["理由: ",r.reasons.attitude]})]}),g.jsxs("div",{className:"grading-col",children:[g.jsx("h4",{children:"英語表現"}),g.jsx("p",{className:"call-hint",children:"採点観点: 文法・発音・自然なコロケーション"}),g.jsxs("p",{className:"call-hint",children:["自動フィードバック件数: ",e.length]}),g.jsxs("p",{className:"call-hint",children:["ヒント: ",o]}),g.jsxs("p",{className:"call-field-label",children:["AI評定: ",(r==null?void 0:r.english)??"未採点"]}),((c=r==null?void 0:r.reasons)==null?void 0:c.english)&&g.jsxs("p",{className:"call-hint",children:["理由: ",r.reasons.english]})]})]}),g.jsxs("div",{className:"grading-overall",children:[g.jsx("span",{className:"grading-overall-label",children:"総合評価:"}),s?g.jsx("span",{className:`grading-overall-grade grade-${s.toLowerCase()}`,children:s}):g.jsx("span",{className:"call-hint",children:"未採点"}),((d=r==null?void 0:r.reasons)==null?void 0:d.overall)&&g.jsxs("span",{className:"call-hint",children:["理由: ",r.reasons.overall]})]})]})},aO=({open:t,onClose:e,result:n,awaiting:r,failed:i})=>{var s,o,l;return t?g.jsx("div",{className:"call-modal",role:"dialog","aria-modal":"true","aria-label":"採点結果",children:g.jsxs("div",{className:"call-modal-content",children:[g.jsxs("div",{className:"call-modal-header",children:[g.jsxs("div",{children:[g.jsx("h2",{children:"採点結果"}),g.jsx("p",{className:"call-subtitle",children:"会話の終了時点での評価"})]}),g.jsx("button",{type:"button",className:"call-modal-close",onClick:e,"aria-label":"閉じる",children:"×"})]}),r&&!n?g.jsx("div",{className:"call-section",children:g.jsx("p",{className:"call-hint",children:"採点結果を取得しています…"})}):n?g.jsxs("div",{className:"call-section",children:[g.jsxs("h3",{children:["総合評価: ",g.jsx("span",{className:`grading-overall-grade grade-${n.overall.toLowerCase()}`,children:n.overall})]}),g.jsxs("ul",{className:"grading-checklist",children:[g.jsxs("li",{children:["内容: ",n.content," ",(s=n.reasons)!=null&&s.content?`— ${n.reasons.content}`:""]}),g.jsxs("li",{children:["態度: ",n.attitude," ",(o=n.reasons)!=null&&o.attitude?`— ${n.reasons.attitude}`:""]}),g.jsxs("li",{children:["英語: ",n.english," ",(l=n.reasons)!=null&&l.english?`— ${n.reasons.english}`:""]})]})]}):i?g.jsx("div",{className:"call-section",children:g.jsx("p",{className:"call-hint",children:"最終採点を取得できませんでした。ネットワークやAPIの設定をご確認ください。"})}):null]})}):null},lO={idle:"未接続",connecting:"接続中…",connected:"通話中",ending:"終了処理中…",error:"エラー"},uO=()=>{const[t,e]=x.useState(!1),{provider:n,status:r,error:i,remoteStream:s,localStream:o,startCall:l,stopCall:u,setProvider:c,hasApiKey:d,setApiKey:p,getApiKey:m,clearError:I,feedbackEntries:N,transcriptEntries:k,scoreResult:P,endedWithoutScore:w,awaitingFinalScore:_,availableScenarios:C,scenarioId:b,setScenarioId:M,activeScenario:F,pendingAssistantText:E}=GI(),[v,T]=x.useState(()=>{if(typeof window>"u")return!1;const z=window.innerWidth,_e=window.innerHeight||1;return z/_e>1.2});x.useEffect(()=>{const z=()=>{const _e=window.innerWidth,Ct=window.innerHeight||1;T(_e/Ct>1.2)};return window.addEventListener("resize",z),window.addEventListener("orientationchange",z),()=>{window.removeEventListener("resize",z),window.removeEventListener("orientationchange",z)}},[]);const[A,R]=x.useState(Math.min(520,Math.floor((typeof window<"u"?window.innerWidth:1200)*.45)));x.useEffect(()=>{if(!(t&&v||(r==="connected"||r==="connecting"||r==="ending")&&v)){document.body.style.marginRight="";return}return document.body.style.marginRight=`${A}px`,()=>{document.body.style.marginRight=""}},[t,v,r,A]);const D=t&&v||(r==="connected"||r==="connecting"||r==="ending")&&v;x.useEffect(()=>{if(typeof window>"u")return;const z=Math.max(320,Math.floor(window.innerWidth*.8));R(_e=>Math.min(Math.max(320,_e),z))},[v]);const S=x.useRef(!1),ye=x.useCallback(z=>{S.current=!0,z.preventDefault()},[]);x.useEffect(()=>{const z=Ct=>{if(!S.current)return;const yt=window.innerWidth,ur=Ct.clientX,cr=Math.max(320,Math.min(yt-200,yt-ur));R(cr)},_e=()=>{S.current=!1};return window.addEventListener("mousemove",z),window.addEventListener("mouseup",_e),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",_e)}},[]);const Pe=x.useRef(null);x.useEffect(()=>{if(!Pe.current)return;const z=Pe.current;if(s){z.srcObject=s;const _e=()=>{z.play().catch(Ct=>console.warn("Autoplay prevented for remote stream:",Ct))};z.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA?_e():z.onloadedmetadata=_e}else z.pause(),z.srcObject=null},[s]),x.useCallback(()=>{e(!0)},[]);const Fe=x.useCallback(()=>{e(!1)},[]);x.useEffect(()=>{if(!t)return;const z=_e=>{_e.key==="Escape"&&Fe()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[t,Fe]);const at=x.useCallback(z=>{z.target===z.currentTarget&&Fe()},[Fe]);x.useCallback(z=>{I(),c(z)},[c,I]),x.useCallback(async()=>{await l({provider:n})},[l,n]),r==="connecting"||d(n);const $=x.useMemo(()=>lO[r]||r,[r]);m(n),x.useCallback(z=>{I(),p(n,z.target.value)},[n,p,I]);const B=x.useCallback(z=>{I(),M(z.target.value)},[I,M]),[Z,me]=x.useState(0);x.useEffect(()=>{t&&me(N.length)},[t,N.length]);const re=Math.max(0,N.length-Z),lt=["call-launcher",r==="connected"?"is-active":"",re>0?"has-unread":""].filter(Boolean).join(" "),$e=x.useCallback(()=>{u()},[u]),je=x.useCallback(z=>{const _e=new Date(z),Ct=_e.getHours().toString().padStart(2,"0"),yt=_e.getMinutes().toString().padStart(2,"0");return`${Ct}:${yt}`},[]),ut=x.useMemo(()=>{for(let z=k.length-1;z>=0;z--){const _e=k[z];if(_e.role==="assistant"&&_e.text)return _e.text}return""},[k]),Qe=E||ut,Ut=x.useCallback(z=>z==="openai"?"OpenAI":z==="gemini"?"Gemini":"Local",[]),Zt=x.useCallback(()=>{if(r==="connecting"||r==="connected"||r==="ending"){u();return}if(!t){e(!0);return}(r==="idle"||r==="error")&&l({provider:n})},[r,t,l,u,n]),[In,cn]=x.useState(!1);return x.useEffect(()=>{(_||P||w)&&(r==="idle"||r==="ending")&&cn(!0)},[_,P,w,r]),g.jsxs(g.Fragment,{children:[g.jsxs("button",{type:"button",className:lt,"aria-label":"音声ロールプレイを開始",onClick:Zt,children:["🎧",re>0&&g.jsx("span",{className:"call-launcher-badge",children:re>9?"9+":re})]}),(r==="connected"||r==="connecting"||r==="ending")&&!t&&g.jsxs("div",{className:`call-mini-status call-mini-status-${r}`,children:[g.jsxs("div",{className:"call-mini-details",children:[g.jsx("span",{className:"call-mini-status-label",children:$}),re>0&&g.jsxs("span",{className:"call-mini-feedback",children:["フィードバック ",re]})]}),g.jsxs("div",{className:"call-mini-actions",children:[g.jsx("button",{type:"button",className:"call-mini-button",onClick:()=>e(!0),children:"設定を開く"}),g.jsx("button",{type:"button",className:"call-mini-button is-danger",onClick:$e,disabled:r==="connecting",children:"終了"})]})]}),g.jsx("audio",{ref:Pe,className:"call-audio",autoPlay:!0,playsInline:!0,hidden:!0}),t&&!D&&g.jsx("div",{className:"call-modal",onMouseDown:at,children:g.jsxs("div",{className:"call-modal-content",role:"dialog","aria-modal":"true","aria-label":"音声ロールプレイ設定",children:[g.jsxs("div",{className:"call-modal-header",children:[g.jsxs("div",{children:[g.jsx("h2",{children:"音声ロールプレイ"}),g.jsx("p",{className:"call-subtitle",children:"右下のボタンから患者役との会話を開始できます。"})]}),g.jsx("button",{type:"button",className:"call-modal-close",onClick:Fe,"aria-label":"閉じる",children:"×"})]}),g.jsxs("div",{className:"call-status-row",children:[g.jsx("span",{className:`call-status-badge call-status-${r}`,children:$}),o&&r==="connected"&&g.jsx("span",{className:"call-mic-indicator",children:"🎤 マイク取得済み"})]}),g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"シナリオ"}),g.jsx("label",{className:"call-field-label",htmlFor:"call-scenario-select",children:"臨床ストーリー"}),g.jsx("select",{id:"call-scenario-select",className:"call-field-input",value:b,onChange:B,children:C.map(z=>g.jsx("option",{value:z.id,children:z.title},z.id))}),F&&g.jsxs("div",{className:"call-scenario-summary",children:[g.jsx("p",{className:"call-scenario-title",children:F.shortSummary}),g.jsxs("ul",{className:"call-scenario-list",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Chief complaint:"})," ",F.chiefComplaint]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Patient:"})," ",`${F.patient.age}歳 ${F.patient.gender==="female"?"女性":F.patient.gender==="male"?"男性":F.patient.gender}`,F.patient.occupation?` / ${F.patient.occupation}`:""]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Opening line:"})," ",F.openingStatement]})]}),g.jsx("p",{className:"call-hint",children:"追加の医療設定は下のテキストエリアで編集できます。"})]})]}),(k.length>0||E)&&g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"会話ログ"}),g.jsxs("ul",{className:"call-transcript-list",children:[k.map(z=>g.jsxs("li",{className:"call-transcript-item",children:[g.jsxs("span",{className:"call-transcript-meta",children:[g.jsx("span",{className:`call-transcript-role role-${z.role}`,children:z.role==="user"?"医師":z.role==="assistant"?"患者":"システム"}),g.jsx("time",{dateTime:new Date(z.timestamp).toISOString(),children:je(z.timestamp)})]}),g.jsx("p",{className:"call-transcript-text",children:z.text})]},z.id)),E&&g.jsxs("li",{className:"call-transcript-item",children:[g.jsxs("span",{className:"call-transcript-meta",children:[g.jsx("span",{className:"call-transcript-role role-assistant",children:"患者"}),g.jsx("time",{children:je(Date.now())})]}),g.jsx("p",{className:"call-transcript-text",children:E})]})]})]}),g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"リアルタイムフィードバック"}),N.length===0?g.jsx("p",{className:"call-hint",children:"通話中の発話内容に対するフィードバックがここに表示されます。 閉じている間も通話は継続されます。"}):g.jsx("ul",{className:"call-feedback-list",children:N.map(z=>g.jsxs("li",{className:"call-feedback-item",children:[g.jsxs("div",{className:"call-feedback-header",children:[g.jsx("span",{className:"call-feedback-provider",children:Ut(z.provider)}),g.jsx("time",{dateTime:new Date(z.timestamp).toISOString(),children:je(z.timestamp)})]}),g.jsx("p",{className:"call-feedback-text",children:z.text})]},z.id))})]}),g.jsx(Pv,{transcriptEntries:k,feedbackEntries:N,scenarioTitle:F==null?void 0:F.title,scoreResult:P}),i&&g.jsx("p",{className:"call-error",children:i}),g.jsxs("div",{className:"call-actions",children:[g.jsx("button",{type:"button",className:"call-button call-button-primary",onClick:()=>l({provider:n}),disabled:r==="connecting"||r==="connected",children:r==="connecting"?"接続中…":r==="connected"?"通話中":"通話を開始"}),g.jsx("button",{type:"button",className:"call-button",onClick:u,disabled:r!=="connected"&&r!=="connecting",children:"通話を終了"})]})]})}),D&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"call-dock",style:{width:A},children:[g.jsxs("div",{className:"call-dock-header",children:[g.jsx("strong",{children:"音声ロールプレイ"}),g.jsx("div",{className:"spacer"}),g.jsx("span",{className:`call-status-badge call-status-${r}`,children:$}),g.jsx("button",{type:"button",className:"call-modal-close",onClick:$e,"aria-label":"終了",children:"×"})]}),g.jsxs("div",{className:"call-dock-body",children:[g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"シナリオ"}),g.jsx("label",{className:"call-field-label",htmlFor:"call-scenario-select-dock",children:"臨床ストーリー"}),g.jsx("select",{id:"call-scenario-select-dock",className:"call-field-input",value:b,onChange:B,children:C.map(z=>g.jsx("option",{value:z.id,children:z.title},z.id))})]}),(k.length>0||E)&&g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"会話ログ"}),g.jsxs("ul",{className:"call-transcript-list",children:[k.map(z=>g.jsxs("li",{className:"call-transcript-item",children:[g.jsxs("span",{className:"call-transcript-meta",children:[g.jsx("span",{className:`call-transcript-role role-${z.role}`,children:z.role==="user"?"医師":z.role==="assistant"?"患者":"システム"}),g.jsx("time",{dateTime:new Date(z.timestamp).toISOString(),children:je(z.timestamp)})]}),g.jsx("p",{className:"call-transcript-text",children:z.text})]},z.id)),E&&g.jsxs("li",{className:"call-transcript-item",children:[g.jsxs("span",{className:"call-transcript-meta",children:[g.jsx("span",{className:"call-transcript-role role-assistant",children:"患者"}),g.jsx("time",{children:je(Date.now())})]}),g.jsx("p",{className:"call-transcript-text",children:E})]})]})]}),g.jsxs("div",{className:"call-section",children:[g.jsx("h3",{children:"リアルタイムフィードバック"}),N.length===0?g.jsx("p",{className:"call-hint",children:"通話中の発話内容に対するフィードバックがここに表示されます。"}):g.jsx("ul",{className:"call-feedback-list",children:N.map(z=>g.jsxs("li",{className:"call-feedback-item",children:[g.jsxs("div",{className:"call-feedback-header",children:[g.jsx("span",{className:"call-feedback-provider",children:Ut(z.provider)}),g.jsx("time",{dateTime:new Date(z.timestamp).toISOString(),children:je(z.timestamp)})]}),g.jsx("p",{className:"call-feedback-text",children:z.text})]},z.id))})]}),g.jsx(Pv,{transcriptEntries:k,feedbackEntries:N,scenarioTitle:F==null?void 0:F.title,scoreResult:P})]})]}),g.jsx("div",{className:"call-dock-resizer",style:{left:`calc(100vw - ${A+4}px)`},onMouseDown:ye})]}),(r==="connected"||r==="connecting")&&Qe&&g.jsx("div",{className:"call-subtitles",children:Qe}),g.jsx(aO,{open:In,onClose:()=>cn(!1),result:P,awaiting:_&&!P&&!w,failed:w&&!P})]})},Nh=({title:t,level:e=2,defaultCollapsed:n=!0,children:r})=>{const[i,s]=x.useState(n),o=x.useId(),l=`h${e}`;return g.jsxs("div",{className:"section",children:[g.jsx(l,{className:i?"collapsed":"",role:"button","aria-expanded":!i,"aria-controls":o,onClick:()=>s(!i),children:t}),g.jsx("div",{id:o,className:`section-content ${i?"collapsed":"expanded"}`,"aria-hidden":i,children:r})]})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const Nv="popstate";function cO(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Jd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lu(i)}return dO(e,n,null,t)}function Ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function QI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hO(){return Math.random().toString(36).substr(2,8)}function xv(t,e){return{usr:t.state,key:t.key,idx:e}}function Jd(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gs(e):e,{state:n,key:e&&e.key||r||hO()})}function Lu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=xr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ya({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=xr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:w})}function m(P,w){l=xr.Push;let _=Jd(k.location,P,w);c=d()+1;let C=xv(_,c),b=k.createHref(_);try{o.pushState(C,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&u&&u({action:l,location:k.location,delta:1})}function I(P,w){l=xr.Replace;let _=Jd(k.location,P,w);c=d();let C=xv(_,c),b=k.createHref(_);o.replaceState(C,"",b),s&&u&&u({action:l,location:k.location,delta:0})}function N(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:Lu(P);return _=_.replace(/ $/,"%20"),Ge(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Nv,p),u=P,()=>{i.removeEventListener(Nv,p),u=null}},createHref(P){return e(i,P)},createURL:N,encodeLocation(P){let w=N(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(P){return o.go(P)}};return k}var Dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dv||(Dv={}));function fO(t,e,n){return n===void 0&&(n="/"),pO(t,e,n)}function pO(t,e,n,r){let i=typeof e=="string"?Gs(e):e,s=Gp(i.pathname||"/",n);if(s==null)return null;let o=YI(t);mO(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=kO(s);l=SO(o[u],c)}return l}function YI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Hr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),YI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:TO(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of XI(s.path))i(s,o,u)}),e}function XI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=XI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function mO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gO=/^:[\w-]+$/,yO=3,vO=2,_O=1,wO=10,EO=-2,Ov=t=>t==="*";function TO(t,e){let n=t.split("/"),r=n.length;return n.some(Ov)&&(r+=EO),e&&(r+=vO),n.filter(i=>!Ov(i)).reduce((i,s)=>i+(gO.test(s)?yO:s===""?_O:wO),r)}function IO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SO(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=AO({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Hr([s,p.pathname]),pathnameBase:xO(Hr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Hr([s,p.pathnameBase]))}return o}function AO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const N=l[p];return I&&!N?c[m]=void 0:c[m]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function CO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),QI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kO(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return QI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gs(t):t;return{pathname:n?n.startsWith("/")?n:PO(n,e):e,search:DO(r),hash:OO(i)}}function PO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function JI(t,e){let n=NO(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ZI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gs(t):(i=ya({},t),Ge(!i.pathname||!i.pathname.includes("?"),xh("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),xh("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=RO(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),xO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e0=["post","put","patch","delete"];new Set(e0);const LO=["get",...e0];new Set(LO);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const Qp=x.createContext(null),VO=x.createContext(null),$i=x.createContext(null),Tc=x.createContext(null),Hi=x.createContext({outlet:null,matches:[],isDataRoute:!1}),t0=x.createContext(null);function MO(t,e){let{relative:n}=e===void 0?{}:e;ba()||Ge(!1);let{basename:r,navigator:i}=x.useContext($i),{hash:s,pathname:o,search:l}=r0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ba(){return x.useContext(Tc)!=null}function Ic(){return ba()||Ge(!1),x.useContext(Tc).location}function n0(t){x.useContext($i).static||x.useLayoutEffect(t)}function FO(){let{isDataRoute:t}=x.useContext(Hi);return t?XO():jO()}function jO(){ba()||Ge(!1);let t=x.useContext(Qp),{basename:e,future:n,navigator:r}=x.useContext($i),{matches:i}=x.useContext(Hi),{pathname:s}=Ic(),o=JSON.stringify(JI(i,n.v7_relativeSplatPath)),l=x.useRef(!1);return n0(()=>{l.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=ZI(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Hr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function r0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=x.useContext($i),{matches:i}=x.useContext(Hi),{pathname:s}=Ic(),o=JSON.stringify(JI(i,r.v7_relativeSplatPath));return x.useMemo(()=>ZI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function UO(t,e){return zO(t,e)}function zO(t,e,n,r){ba()||Ge(!1);let{navigator:i}=x.useContext($i),{matches:s}=x.useContext(Hi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ic(),d;if(e){var p;let P=typeof e=="string"?Gs(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Ge(!1),d=P}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let N=fO(t,{pathname:I}),k=qO(N&&N.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Hr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Hr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?x.createElement(Tc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xr.Pop}},k):k}function BO(){let t=YO(),e=bO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const $O=x.createElement(BO,null);class HO extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(Hi.Provider,{value:this.props.routeContext},x.createElement(t0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WO(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Qp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Hi.Provider,{value:e},r)}function qO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:I}=n,N=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,N=!1,k=null,P=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||$O,u&&(c<0&&m===0?(JO("route-fallback"),N=!0,P=null):c===m&&(N=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let C;return I?C=k:N?C=P:p.route.Component?C=x.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=d,x.createElement(WO,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:C})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?x.createElement(HO,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var i0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(i0||{}),s0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(s0||{});function KO(t){let e=x.useContext(Qp);return e||Ge(!1),e}function GO(t){let e=x.useContext(VO);return e||Ge(!1),e}function QO(t){let e=x.useContext(Hi);return e||Ge(!1),e}function o0(t){let e=QO(),n=e.matches[e.matches.length-1];return n.route.id||Ge(!1),n.route.id}function YO(){var t;let e=x.useContext(t0),n=GO(),r=o0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function XO(){let{router:t}=KO(i0.UseNavigateStable),e=o0(s0.UseNavigateStable),n=x.useRef(!1);return n0(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}const bv={};function JO(t,e,n){bv[t]||(bv[t]=!0)}function ZO(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function $n(t){Ge(!1)}function eb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xr.Pop,navigator:s,static:o=!1,future:l}=t;ba()&&Ge(!1);let u=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:u,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gs(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:N="default"}=r,k=x.useMemo(()=>{let P=Gp(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:I,key:N},navigationType:i}},[u,d,p,m,I,N,i]);return k==null?null:x.createElement($i.Provider,{value:c},x.createElement(Tc.Provider,{children:n,value:k}))}function tb(t){let{children:e,location:n}=t;return UO(Zd(e),n)}new Promise(()=>{});function Zd(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Zd(r.props.children,s));return}r.type!==$n&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ef(){return ef=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ef.apply(this,arguments)}function nb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ib(t,e){return t.button===0&&(!e||e==="_self")&&!rb(t)}const sb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ob="6";try{window.__reactRouterVersion=ob}catch{}const ab="startTransition",Lv=B0[ab];function lb(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=cO({window:i,v5Compat:!0}));let o=s.current,[l,u]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=x.useCallback(p=>{c&&Lv?Lv(()=>u(p)):u(p)},[u,c]);return x.useLayoutEffect(()=>o.listen(d),[o,d]),x.useEffect(()=>ZO(r),[r]),x.createElement(eb,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=nb(e,sb),{basename:I}=x.useContext($i),N,k=!1;if(typeof c=="string"&&cb.test(c)&&(N=c,ub))try{let C=new URL(window.location.href),b=c.startsWith("//")?new URL(C.protocol+c):new URL(c),M=Gp(b.pathname,I);b.origin===C.origin&&M!=null?c=M+b.search+b.hash:k=!0}catch{}let P=MO(c,{relative:i}),w=hb(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(C){r&&r(C),C.defaultPrevented||w(C)}return x.createElement("a",ef({},m,{href:N||P,onClick:k||s?r:_,ref:n,target:u}))});var Vv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vv||(Vv={}));var Mv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mv||(Mv={}));function hb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=FO(),c=Ic(),d=r0(t,{relative:o});return x.useCallback(p=>{if(ib(p,n)){p.preventDefault();let m=r!==void 0?r:Lu(c)===Lu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const db="/medical-interview-english/".replace(/\/$/,""),Fv=t=>{const e=t.replace(/^\/+/,""),n=`${db}/${e}`.replace(/^\/\//,"/");return n.startsWith("/")?n:`/${n}`};async function fb(t){const e=await fetch(t,{mode:"cors"});if(!e.ok)throw new Error(`Failed to fetch ${t}: ${e.status}`);return await e.text()}const pb=({url:t,title:e,enableAudio:n=!1})=>{const r=x.useRef(null),[i,s]=x.useState(null),[o,l]=x.useState(!0);x.useEffect(()=>{let d=!0;return(async()=>{try{l(!0);const p=await fb(t);if(!d)return;const I=new DOMParser().parseFromString(p,"text/html").querySelector(".container");if(!I)throw new Error("container not found in external HTML");const N=I.querySelector(".back-link");N&&N.parentElement&&N.parentElement.removeChild(N);const k=I.querySelector("h1");k&&k.parentElement&&k.parentElement.removeChild(k),r.current&&(r.current.innerHTML=I.innerHTML,gb(r.current)),setTimeout(()=>{try{mb(r.current),n&&yb(r.current)}catch(P){console.error(P)}},0)}catch(p){console.error(p),s(p.message||String(p))}finally{l(!1)}})(),()=>{d=!1}},[t,n]);const{layout:u}=Ju(),c=u==="two-column"?"layout-two-column":u==="single-column"?"layout-single-column":"";return g.jsxs("div",{className:`container ${c}`,children:[g.jsx(Wn,{to:"/",className:"back-link",children:"← トップページに戻る"}),g.jsx("h1",{children:e}),o&&g.jsx("p",{children:"読み込み中..."}),i&&g.jsxs("p",{className:"description",children:["読み込みエラー: ",i]}),g.jsx("div",{ref:r,className:"injected"})]})};function mb(t){const e=Array.from(t.querySelectorAll("h2, h3, h4"));e.forEach(u=>u.classList.add("collapsible"));function n(u){return u===2?/^H2$/:u===3?/^H[23]$/:/^H[234]$/}function r(u){return u==="H2"?2:u==="H3"?3:4}function i(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;p.style.display="none",p.style.maxHeight="0px",p.style.overflow="hidden",p.style.opacity="0",p.style.margin="0",d=d.nextElementSibling}return d}function s(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;if(/^H[2-4]$/.test(p.tagName)){p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="",p.classList.add("collapsed"),d=i(p.nextElementSibling,n(r(p.tagName)));continue}else p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="";d=d.nextElementSibling}}function o(u,c){const d=r(u.tagName),p=n(d);c?(u.classList.add("collapsed"),i(u.nextElementSibling,p)):(u.classList.remove("collapsed"),s(u.nextElementSibling,p))}function l(u){if(u._indentAnnotated)return;u._indentAnnotated=!0;const c=r(u.tagName);u.classList.add(`heading-l${c}`);const d=n(c);let p=u.nextElementSibling;const m=Math.max(0,c-2);for(;p&&!d.test(p.tagName);){const I=p;/^H[2-4]$/.test(I.tagName)||I.classList.add(`indent-${m}`),p=p.nextElementSibling}}e.forEach(u=>{u.classList.contains("initialized")||(u.classList.add("initialized"),l(u),o(u,!0),u.addEventListener("click",c=>{c.stopPropagation();const d=u.classList.contains("collapsed");o(u,!d)}))})}function gb(t){if(!t)return;const e=Array.from(t.querySelectorAll("li.question-item")),n=/\(([^()]+)\)/g;e.forEach(r=>{const i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,null),s=[];let o=i.nextNode();for(;o;)o.nodeType===Node.TEXT_NODE&&s.push(o),o=i.nextNode();s.forEach(l=>{const u=l.textContent??"";if(n.lastIndex=0,!n.test(u))return;n.lastIndex=0;const c=l.parentElement;if(!c||c.closest(".paraphrase"))return;const d=document.createDocumentFragment();let p=0,m;for(;(m=n.exec(u))!==null;){const I=m.index??0,N=I+m[0].length;I>p&&d.appendChild(document.createTextNode(u.slice(p,I)));const k=document.createElement("span");k.className="paraphrase",k.textContent=m[0],d.appendChild(k),p=N}p<u.length&&d.appendChild(document.createTextNode(u.slice(p))),c.replaceChild(d,l)})})}async function yb(t){const e=Fv("audio/audio_map.json");let n={};try{n=await fetch(e).then(l=>l.json())}catch{console.warn("Failed to load audio_map.json; audio disabled");return}let r=null,i=null;function s(){i&&(i.pause(),i=null),r&&(r.classList.remove("playing"),r=null)}function o(l){const u=new Set,c=l.replace(/\s+/g," ").trim();c&&u.add(c);const d=c.replace(/\s*\(ai\)\s*$/i,"").trim();return d&&u.add(d),Array.from(u)}t.querySelectorAll("li.question-item").forEach(l=>{const u=l;u.addEventListener("click",()=>{var m;const c=u.dataset.text||((m=u.textContent)==null?void 0:m.trim())||"";let d;for(const I of o(c))if(n[I]){d=n[I];break}if(!d){console.warn("Audio not found for:",c);return}const p=Fv(`audio/${d}`);if(r===u&&i&&!i.paused){i.pause(),u.classList.remove("playing");return}s(),i=new Audio(p),r=u,u.classList.add("playing"),i.addEventListener("ended",()=>s()),i.addEventListener("error",()=>s()),i.play()})})}const vb=()=>{const{layout:t}=Ju();return g.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[g.jsx("h1",{children:"英語de診療"}),g.jsxs("div",{className:"sections-grid",children:[g.jsxs(Wn,{to:"/medical-interview",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🗣️"}),g.jsx("div",{className:"section-title",children:"医療面接"}),g.jsx("div",{className:"section-subtitle",children:"Medical Interview"})]}),g.jsxs(Wn,{to:"/head-neck",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🧑‍⚕️"}),g.jsx("div",{className:"section-title",children:"頭頸部"}),g.jsx("div",{className:"section-subtitle",children:"Head & Neck"})]}),g.jsxs(Wn,{to:"/chest",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🫁"}),g.jsx("div",{className:"section-title",children:"胸部"}),g.jsx("div",{className:"section-subtitle",children:"Chest"})]}),g.jsxs(Wn,{to:"/abdomen",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🫃"}),g.jsx("div",{className:"section-title",children:"腹部"}),g.jsx("div",{className:"section-subtitle",children:"Abdomen"})]}),g.jsxs(Wn,{to:"/neurological",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🧠"}),g.jsx("div",{className:"section-title",children:"神経"}),g.jsx("div",{className:"section-subtitle",children:"Neurological"})]}),g.jsxs(Wn,{to:"/presentation",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"📊"}),g.jsx("div",{className:"section-title",children:"プレゼン"}),g.jsx("div",{className:"section-subtitle",children:"Presentation"})]}),g.jsxs(Wn,{to:"/debug",className:"section-card",children:[g.jsx("div",{className:"section-icon",children:"🧪"}),g.jsx("div",{className:"section-title",children:"デバッグ"}),g.jsx("div",{className:"section-subtitle",children:"Debug / Sandbox"})]})]})]})},_b=()=>{const[t,e]=x.useState(!1),n=x.useRef(null),[r,i]=x.useState(null),s=x.useRef(null),o=x.useRef({dragging:!1,moved:!1,isTouch:!1}),l=x.useRef({startX:0,startY:0,startLeft:0,startTop:0}),u=k=>{const P=n.current;if(!P)return k;const w=8,_=Math.max(w,window.innerWidth-P.offsetWidth-w),C=Math.max(w,window.innerHeight-P.offsetHeight-w),b=Math.min(Math.max(k.left,w),_),M=Math.min(Math.max(k.top,w),C);return{left:b,top:M}},c=k=>{const P=u(k);s.current=P,i(P)};x.useEffect(()=>{const k=n.current;if(!k)return;const P="ontouchstart"in window||navigator.maxTouchPoints>0;if(o.current.isTouch=P,!P)try{const b=localStorage.getItem("settingsButtonPosition");if(b){const M=JSON.parse(b);typeof M.left=="number"&&typeof M.top=="number"&&c({left:M.left,top:M.top})}}catch(b){console.warn("Failed to restore settings button position:",b)}if(P)return;const w=b=>{o.current.dragging=!0,o.current.moved=!1,k.classList.add("dragging");const M=k.getBoundingClientRect();l.current={startX:b.clientX,startY:b.clientY,startLeft:M.left,startTop:M.top},b.preventDefault()},_=b=>{if(!o.current.dragging)return;const{startX:M,startY:F,startLeft:E,startTop:v}=l.current,T=b.clientX-M,A=b.clientY-F;!o.current.moved&&(Math.abs(T)>2||Math.abs(A)>2)&&(o.current.moved=!0);const R=E+T,D=v+A,S=window.innerWidth-k.offsetWidth,ye=window.innerHeight-k.offsetHeight,Pe=Math.max(0,Math.min(R,S)),Fe=Math.max(0,Math.min(D,ye));c({left:Pe,top:Fe})},C=()=>{if(!o.current.dragging)return;o.current.dragging=!1,k.classList.remove("dragging");const b=s.current;if(b)try{localStorage.setItem("settingsButtonPosition",JSON.stringify(b))}catch(M){console.warn("Failed to save settings button position:",M)}};return k.addEventListener("mousedown",w),document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),()=>{k.removeEventListener("mousedown",w),document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C)}},[]);const d=()=>{if(o.current.moved){o.current.moved=!1;return}e(!0)},p=r?{left:`${r.left}px`,top:`${r.top}px`,right:"auto"}:void 0,m="/medical-interview-english/".replace(/\/$/,""),I=k=>{const P=k.replace(/^\/+/,""),w=`${m}/${P}`.replace(/^\/\//,"/");return w.startsWith("/")?w:`/${w}`},N=(k,P,w)=>g.jsx(pb,{title:k,url:P,enableAudio:w==null?void 0:w.enableAudio});return g.jsx(eC,{children:g.jsxs(nC,{children:[g.jsxs(lb,{basename:"/medical-interview-english/",children:[g.jsxs(tb,{children:[g.jsx($n,{path:"/",element:g.jsx(vb,{})}),g.jsx($n,{path:"/medical-interview",element:N("医療面接",I("legacy/medical-interview.html"),{enableAudio:!0})}),g.jsx($n,{path:"/head-neck",element:N("頭頸部",I("legacy/head-neck.html"),{enableAudio:!0})}),g.jsx($n,{path:"/chest",element:N("胸部",I("legacy/chest.html"),{enableAudio:!0})}),g.jsx($n,{path:"/abdomen",element:N("腹部",I("legacy/abdomen.html"),{enableAudio:!0})}),g.jsx($n,{path:"/neurological",element:N("神経",I("legacy/neurological.html"),{enableAudio:!0})}),g.jsx($n,{path:"/presentation",element:N("プレゼン",I("legacy/presentation.html"),{enableAudio:!0})}),g.jsx($n,{path:"/debug",element:g.jsx(Eb,{})})]}),g.jsx("button",{ref:n,style:p,className:"settings-button","aria-label":"設定",onClick:d,children:"⚙️"}),g.jsx(rO,{open:t,onClose:()=>e(!1)})]}),g.jsx(uO,{})]})})},wb=()=>g.jsx(W2,{children:g.jsx(_b,{})}),Eb=()=>{const{layout:t}=Ju();return g.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[g.jsx(Wn,{to:"/",className:"back-link",children:"← トップページに戻る"}),g.jsx("h1",{children:"デバッグ（UIコンポーネント検証）"}),g.jsxs(Nh,{title:"総論（General Description）",level:2,children:[g.jsx("p",{className:"description",children:"コンポーネントの動作確認用ページです。h2/h3/h4 のトグルやレイアウト切替を試せます。"}),g.jsxs("ul",{className:"expanded",children:[g.jsx("li",{children:"ダークモード切替（auto/dark）"}),g.jsx("li",{children:"レイアウト（auto/2段/1段）"}),g.jsx("li",{children:"折りたたみ可能な見出し"})]}),g.jsxs(Nh,{title:"デモ: h3 セクション",level:3,defaultCollapsed:!0,children:[g.jsx("p",{children:"h3 をクリックして展開/折りたたみできます。"}),g.jsxs("ul",{className:"expanded",children:[g.jsx("li",{children:"項目A"}),g.jsx("li",{children:"項目B"})]}),g.jsx(Nh,{title:"デモ: h4 セクション",level:4,defaultCollapsed:!0,children:g.jsx("p",{children:"h4 セクションも同様に制御できます。"})})]})]})]})};Dh.createRoot(document.getElementById("root")).render(g.jsx(Yv.StrictMode,{children:g.jsx(wb,{})}));
