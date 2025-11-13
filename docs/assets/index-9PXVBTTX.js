function T0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function I0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x_={exports:{}},Tu={},D_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),S0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),O0=Symbol.for("react.lazy"),Rm=Symbol.iterator;function V0(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var O_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V_=Object.assign,L_={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||O_}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b_(){}b_.prototype=Ts.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||O_}var zd=Bd.prototype=new b_;zd.constructor=Bd;V_(zd,Ts.prototype);zd.isPureReactComponent=!0;var Pm=Array.isArray,M_=Object.prototype.hasOwnProperty,$d={current:null},F_={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M_.call(e,r)&&!F_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:$d.current}}function L0(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function b0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b0(""+t.key):e.toString(36)}function al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case S0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pc(o,0):r,Pm(i)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),al(i,e,n,"",function(c){return c})):i!=null&&(Hd(i)&&(i=L0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(km,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Pc(s,l);o+=al(s,e,n,u,i)}else if(u=V0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Pc(s,l++),o+=al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var r=[],i=0;return al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function M0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},ll={transition:null},F0={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:ll,ReactCurrentOwner:$d};function j_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ts;ie.Fragment=A0;ie.Profiler=R0;ie.PureComponent=Bd;ie.StrictMode=C0;ie.Suspense=x0;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;ie.act=j_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=V_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$d.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)M_.call(e,u)&&!F_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:k0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};ie.createElement=U_;ie.createFactory=function(t){var e=U_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:N0,render:t}};ie.isValidElement=Hd;ie.lazy=function(t){return{$$typeof:O0,_payload:{_status:-1,_result:t},_init:M0}};ie.memo=function(t,e){return{$$typeof:D0,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};ie.unstable_act=j_;ie.useCallback=function(t,e){return At.current.useCallback(t,e)};ie.useContext=function(t){return At.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ie.useEffect=function(t,e){return At.current.useEffect(t,e)};ie.useId=function(){return At.current.useId()};ie.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return At.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};ie.useRef=function(t){return At.current.useRef(t)};ie.useState=function(t){return At.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return At.current.useTransition()};ie.version="18.3.1";D_.exports=ie;var D=D_.exports;const B_=I0(D),U0=T0({__proto__:null,default:B_},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=D,B0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,H0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$0.call(e,r)&&!W0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B0,type:t,key:s,ref:o,props:i,_owner:H0.current}}Tu.Fragment=z0;Tu.jsx=z_;Tu.jsxs=z_;x_.exports=Tu;var C=x_.exports,_h={},$_={exports:{}},Ht={},H_={exports:{}},W_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var K=B.length;B.push(Q);e:for(;0<K;){var W=K-1>>>1,ge=B[W];if(0<i(ge,Q))B[W]=Q,B[K]=ge,K=W;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],K=B.pop();if(K!==Q){B[0]=K;e:for(var W=0,ge=B.length,qt=ge>>>1;W<qt;){var q=2*(W+1)-1,Ue=B[q],Ke=q+1,Rt=B[Ke];if(0>i(Ue,K))Ke<ge&&0>i(Rt,Ue)?(B[W]=Rt,B[Ke]=K,W=Ke):(B[W]=Ue,B[q]=K,W=q);else if(Ke<ge&&0>i(Rt,K))B[W]=Rt,B[Ke]=K,W=Ke;else break e}}return Q}function i(B,Q){var K=B.sortIndex-Q.sortIndex;return K!==0?K:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,S=!1,N=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V(B){if(P=!1,T(B),!N)if(n(u)!==null)N=!0,be(M);else{var Q=n(c);Q!==null&&wt(V,Q.startTime-B)}}function M(B,Q){N=!1,P&&(P=!1,v(y),y=-1),S=!0;var K=m;try{for(T(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!R());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var ge=W(p.expirationTime<=Q);Q=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(u)&&r(u),T(Q)}else r(u);p=n(u)}if(p!==null)var qt=!0;else{var q=n(c);q!==null&&wt(V,q.startTime-Q),qt=!1}return qt}finally{p=null,m=K,S=!1}}var F=!1,w=null,y=-1,I=5,A=-1;function R(){return!(t.unstable_now()-A<I)}function x(){if(w!==null){var B=t.unstable_now();A=B;var Q=!0;try{Q=w(!0,B)}finally{Q?E():(F=!1,w=null)}}else F=!1}var E;if(typeof _=="function")E=function(){_(x)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Te=te.port2;te.port1.onmessage=x,E=function(){Te.postMessage(null)}}else E=function(){k(x,0)};function be(B){w=B,F||(F=!0,E())}function wt(B,Q){y=k(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||S||(N=!0,be(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var K=m;m=Q;try{return B()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=m;m=B;try{return Q()}finally{m=K}},t.unstable_scheduleCallback=function(B,Q,K){var W=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?W+K:W):K=W,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=K+ge,B={id:d++,callback:Q,priorityLevel:B,startTime:K,expirationTime:ge,sortIndex:-1},K>W?(B.sortIndex=K,e(c,B),n(u)===null&&B===n(c)&&(P?(v(y),y=-1):P=!0,wt(V,K-W))):(B.sortIndex=ge,e(u,B),N||S||(N=!0,be(M))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var Q=m;return function(){var K=m;m=Q;try{return B.apply(this,arguments)}finally{m=K}}}})(W_);H_.exports=W_;var q0=H_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=D,$t=q0;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q_=new Set,Do={};function Si(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(Do[t]=e,t=0;t<e.length;t++)q_.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,G0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},xm={};function Q0(t){return vh.call(xm,t)?!0:vh.call(Nm,t)?!1:G0.test(t)?xm[t]=!0:(Nm[t]=!0,!1)}function Y0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X0(t,e,n,r){if(e===null||typeof e>"u"||Y0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,qd);ut[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,qd);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,qd);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X0(e,n,i,r)&&(n=null),r||i===null?Q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),ji=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),G_=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),Dm=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,kc;function so(t){if(kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kc=e&&e[1]||""}return`
`+kc+t}var Nc=!1;function xc(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function J0(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case ji:return"Portal";case wh:return"Profiler";case Gd:return"StrictMode";case Eh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function Z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=Y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=eS(t))}function X_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J_(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Ah(t,e){J_(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(oo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function Z_(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nS=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Zi=null,es=null;function Mm(t){if(t=ca(t)){if(typeof Dh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ru(e),Dh(t.stateNode,t.type,e))}}function iv(t){Zi?es?es.push(t):es=[t]:Zi=t}function sv(){if(Zi){var t=Zi,e=es;if(es=Zi=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function ov(t,e){return t(e)}function av(){}var Dc=!1;function lv(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return ov(t,e,n)}finally{Dc=!1,(Zi!==null||es!==null)&&(av(),sv())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ru(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Oh=!1;if(Hn)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Oh=!1}function rS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var yo=!1,Nl=null,xl=!1,Vh=null,iS={onError:function(t){yo=!0,Nl=t}};function sS(t,e,n,r,i,s,o,l,u){yo=!1,Nl=null,rS.apply(iS,arguments)}function oS(t,e,n,r,i,s,o,l,u){if(sS.apply(this,arguments),yo){if(yo){var c=Nl;yo=!1,Nl=null}else throw Error(j(198));xl||(xl=!0,Vh=c)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(Ai(t)!==t)throw Error(j(188))}function aS(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fm(i),t;if(s===r)return Fm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function cv(t){return t=aS(t),t!==null?hv(t):null}function hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hv(t);if(e!==null)return e;t=t.sibling}return null}var dv=$t.unstable_scheduleCallback,Um=$t.unstable_cancelCallback,lS=$t.unstable_shouldYield,uS=$t.unstable_requestPaint,ze=$t.unstable_now,cS=$t.unstable_getCurrentPriorityLevel,Jd=$t.unstable_ImmediatePriority,fv=$t.unstable_UserBlockingPriority,Dl=$t.unstable_NormalPriority,hS=$t.unstable_LowPriority,pv=$t.unstable_IdlePriority,Iu=null,Tn=null;function dS(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:mS,fS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(fS(t)/pS|0)|0}var Ua=64,ja=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ao(l):(s&=o,s!==0&&(r=ao(s)))}else o=n&~i,o!==0?r=ao(o):s!==0&&(r=ao(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=gS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function _S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,ef,_v,vv,wv,bh=!1,Ba=[],_r=null,vr=null,wr=null,Lo=new Map,bo=new Map,ur=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wS(t,e,n,r,i){switch(e){case"focusin":return _r=Js(_r,t,e,n,r,i),!0;case"dragenter":return vr=Js(vr,t,e,n,r,i),!0;case"mouseover":return wr=Js(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,Js(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bo.set(s,Js(bo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ev(t){var e=ri(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=ca(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){ul(t)&&n.delete(e)}function ES(){bh=!1,_r!==null&&ul(_r)&&(_r=null),vr!==null&&ul(vr)&&(vr=null),wr!==null&&ul(wr)&&(wr=null),Lo.forEach(Bm),bo.forEach(Bm)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,ES)))}function Mo(t){function e(i){return Zs(i,t)}if(0<Ba.length){Zs(Ba[0],t);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&Zs(_r,t),vr!==null&&Zs(vr,t),wr!==null&&Zs(wr,t),Lo.forEach(e),bo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&ur.shift()}var ts=Jn.ReactCurrentBatchConfig,Vl=!0;function TS(t,e,n,r){var i=ye,s=ts.transition;ts.transition=null;try{ye=1,tf(t,e,n,r)}finally{ye=i,ts.transition=s}}function IS(t,e,n,r){var i=ye,s=ts.transition;ts.transition=null;try{ye=4,tf(t,e,n,r)}finally{ye=i,ts.transition=s}}function tf(t,e,n,r){if(Vl){var i=Mh(t,e,n,r);if(i===null)$c(t,e,r,Ll,n),jm(t,r);else if(wS(i,t,e,n,r))r.stopPropagation();else if(jm(t,r),e&4&&-1<vS.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&yv(s),s=Mh(t,e,n,r),s===null&&$c(t,e,r,Ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var Ll=null;function Mh(t,e,n,r){if(Ll=null,t=Xd(r),t=ri(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function Tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cS()){case Jd:return 1;case fv:return 4;case Dl:case hS:return 16;case pv:return 536870912;default:return 16}default:return 16}}var pr=null,nf=null,cl=null;function Iv(){if(cl)return cl;var t,e=nf,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function zm(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:zm,this.isPropagationStopped=zm,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=Wt(Is),ua=Ve({},Is,{view:0,detail:0}),SS=Wt(ua),Vc,Lc,eo,Su=Ve({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Vc=t.screenX-eo.screenX,Lc=t.screenY-eo.screenY):Lc=Vc=0,eo=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),$m=Wt(Su),AS=Ve({},Su,{dataTransfer:0}),CS=Wt(AS),RS=Ve({},ua,{relatedTarget:0}),bc=Wt(RS),PS=Ve({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=Wt(PS),NS=Ve({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xS=Wt(NS),DS=Ve({},Is,{data:0}),Hm=Wt(DS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LS[t])?!!e[t]:!1}function sf(){return bS}var MS=Ve({},ua,{key:function(t){if(t.key){var e=OS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?VS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=Wt(MS),US=Ve({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Wt(US),jS=Ve({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),BS=Wt(jS),zS=Ve({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),$S=Wt(zS),HS=Ve({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Wt(HS),qS=[9,13,27,32],of=Hn&&"CompositionEvent"in window,_o=null;Hn&&"documentMode"in document&&(_o=document.documentMode);var KS=Hn&&"TextEvent"in window&&!_o,Sv=Hn&&(!of||_o&&8<_o&&11>=_o),qm=" ",Km=!1;function Av(t,e){switch(t){case"keyup":return qS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function GS(t,e){switch(t){case"compositionend":return Cv(e);case"keypress":return e.which!==32?null:(Km=!0,qm);case"textInput":return t=e.data,t===qm&&Km?null:t;default:return null}}function QS(t,e){if(zi)return t==="compositionend"||!of&&Av(t,e)?(t=Iv(),cl=nf=pr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YS[t.type]:e==="textarea"}function Rv(t,e,n,r){iv(r),e=bl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vo=null,Fo=null;function XS(t){Fv(t,0)}function Au(t){var e=Wi(t);if(X_(e))return t}function JS(t,e){if(t==="change")return e}var Pv=!1;if(Hn){var Mc;if(Hn){var Fc="oninput"in document;if(!Fc){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Fc=typeof Qm.oninput=="function"}Mc=Fc}else Mc=!1;Pv=Mc&&(!document.documentMode||9<document.documentMode)}function Ym(){vo&&(vo.detachEvent("onpropertychange",kv),Fo=vo=null)}function kv(t){if(t.propertyName==="value"&&Au(Fo)){var e=[];Rv(e,Fo,t,Xd(t)),lv(XS,e)}}function ZS(t,e,n){t==="focusin"?(Ym(),vo=e,Fo=n,vo.attachEvent("onpropertychange",kv)):t==="focusout"&&Ym()}function eA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(Fo)}function tA(t,e){if(t==="click")return Au(e)}function nA(t,e){if(t==="input"||t==="change")return Au(e)}function rA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:rA;function Uo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function Nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xv(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iA(t){var e=xv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nv(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jm(n,s);var o=Jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sA=Hn&&"documentMode"in document&&11>=document.documentMode,$i=null,Fh=null,wo=null,Uh=!1;function Zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uh||$i==null||$i!==kl(r)||(r=$i,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&Uo(wo,r)||(wo=r,r=bl(Fh,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$i)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},Uc={},Dv={};Hn&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Cu(t){if(Uc[t])return Uc[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dv)return Uc[t]=e[n];return t}var Ov=Cu("animationend"),Vv=Cu("animationiteration"),Lv=Cu("animationstart"),bv=Cu("transitionend"),Mv=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Mv.set(t,e),Si(e,[t])}for(var jc=0;jc<eg.length;jc++){var Bc=eg[jc],oA=Bc.toLowerCase(),aA=Bc[0].toUpperCase()+Bc.slice(1);jr(oA,"on"+aA)}jr(Ov,"onAnimationEnd");jr(Vv,"onAnimationIteration");jr(Lv,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(bv,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lA=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,oS(r,e,void 0,t),t.currentTarget=null}function Fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tg(i,l,c),s=u}}}if(xl)throw t=Vh,xl=!1,Vh=null,t}function Ae(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(Uv(e,t,2,!1),n.add(r))}function zc(t,e,n){var r=0;e&&(r|=4),Uv(n,t,r,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Ha]){t[Ha]=!0,q_.forEach(function(n){n!=="selectionchange"&&(lA.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,zc("selectionchange",!1,e))}}function Uv(t,e,n,r){switch(Tv(e)){case 1:var i=TS;break;case 4:i=IS;break;default:i=tf}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ri(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lv(function(){var c=s,d=Xd(n),p=[];e:{var m=Mv.get(t);if(m!==void 0){var S=rf,N=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":S=FS;break;case"focusin":N="focus",S=bc;break;case"focusout":N="blur",S=bc;break;case"beforeblur":case"afterblur":S=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=BS;break;case Ov:case Vv:case Lv:S=kS;break;case bv:S=$S;break;case"scroll":S=SS;break;case"wheel":S=WS;break;case"copy":case"cut":case"paste":S=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Wm}var P=(e&4)!==0,k=!P&&t==="scroll",v=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,T;_!==null;){T=_;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,v!==null&&(V=Vo(_,v),V!=null&&P.push(Bo(_,V,T)))),k)break;_=_.return}0<P.length&&(m=new S(m,N,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==xh&&(N=n.relatedTarget||n.fromElement)&&(ri(N)||N[Wn]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=c,N=N?ri(N):null,N!==null&&(k=Ai(N),N!==k||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=c),S!==N)){if(P=$m,V="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Wm,V="onPointerLeave",v="onPointerEnter",_="pointer"),k=S==null?m:Wi(S),T=N==null?m:Wi(N),m=new P(V,_+"leave",S,n,d),m.target=k,m.relatedTarget=T,V=null,ri(d)===c&&(P=new P(v,_+"enter",N,n,d),P.target=T,P.relatedTarget=k,V=P),k=V,S&&N)t:{for(P=S,v=N,_=0,T=P;T;T=Li(T))_++;for(T=0,V=v;V;V=Li(V))T++;for(;0<_-T;)P=Li(P),_--;for(;0<T-_;)v=Li(v),T--;for(;_--;){if(P===v||v!==null&&P===v.alternate)break t;P=Li(P),v=Li(v)}P=null}else P=null;S!==null&&ng(p,m,S,P,!1),N!==null&&k!==null&&ng(p,k,N,P,!0)}}e:{if(m=c?Wi(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var M=JS;else if(Gm(m))if(Pv)M=nA;else{M=eA;var F=ZS}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=tA);if(M&&(M=M(t,c))){Rv(p,M,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Ch(m,"number",m.value)}switch(F=c?Wi(c):window,t){case"focusin":(Gm(F)||F.contentEditable==="true")&&($i=F,Fh=c,wo=null);break;case"focusout":wo=Fh=$i=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,Zm(p,n,d);break;case"selectionchange":if(sA)break;case"keydown":case"keyup":Zm(p,n,d)}var w;if(of)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zi?Av(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Sv&&n.locale!=="ko"&&(zi||y!=="onCompositionStart"?y==="onCompositionEnd"&&zi&&(w=Iv()):(pr=d,nf="value"in pr?pr.value:pr.textContent,zi=!0)),F=bl(c,y),0<F.length&&(y=new Hm(y,t,null,n,d),p.push({event:y,listeners:F}),w?y.data=w:(w=Cv(n),w!==null&&(y.data=w)))),(w=KS?GS(t,n):QS(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new Hm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}Fv(p,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=Vo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ng(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Vo(n,s),u!=null&&o.unshift(Bo(n,u,l))):i||(u=Vo(n,s),u!=null&&o.push(Bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uA=/\r\n?/g,cA=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(uA,`
`).replace(cA,"")}function Wa(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(j(425))}function Ml(){}var jh=null,Bh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,dA=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(fA)}:$h;function fA(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),En="__reactFiber$"+Ss,zo="__reactProps$"+Ss,Wn="__reactContainer$"+Ss,Hh="__reactEvents$"+Ss,pA="__reactListeners$"+Ss,mA="__reactHandles$"+Ss;function ri(t){var e=t[En];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[En]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sg(t);t!==null;){if(n=t[En])return n;t=sg(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[En]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ru(t){return t[zo]||null}var Wh=[],qi=-1;function Br(t){return{current:t}}function Re(t){0>qi||(t.current=Wh[qi],Wh[qi]=null,qi--)}function Ee(t,e){qi++,Wh[qi]=t.current,t.current=e}var Dr={},_t=Br(Dr),Ot=Br(!1),di=Dr;function cs(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function Fl(){Re(Ot),Re(_t)}function og(t,e,n){if(_t.current!==Dr)throw Error(j(168));Ee(_t,e),Ee(Ot,n)}function jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Z0(t)||"Unknown",i));return Ve({},n,r)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,di=_t.current,Ee(_t,t),Ee(Ot,Ot.current),!0}function ag(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=jv(t,e,di),r.__reactInternalMemoizedMergedChildContext=t,Re(Ot),Re(_t),Ee(_t,t)):Re(Ot),Ee(Ot,n)}var bn=null,Pu=!1,Wc=!1;function Bv(t){bn===null?bn=[t]:bn.push(t)}function gA(t){Pu=!0,Bv(t)}function zr(){if(!Wc&&bn!==null){Wc=!0;var t=0,e=ye;try{var n=bn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Pu=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),dv(Jd,zr),i}finally{ye=e,Wc=!1}}return null}var Ki=[],Gi=0,jl=null,Bl=0,Kt=[],Gt=0,fi=null,Fn=1,Un="";function ei(t,e){Ki[Gi++]=Bl,Ki[Gi++]=jl,jl=t,Bl=e}function zv(t,e,n){Kt[Gt++]=Fn,Kt[Gt++]=Un,Kt[Gt++]=fi,fi=t;var r=Fn;t=Un;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-ln(e)+i|n<<i|r,Un=s+t}else Fn=1<<s|n<<i|r,Un=t}function lf(t){t.return!==null&&(ei(t,1),zv(t,1,0))}function uf(t){for(;t===jl;)jl=Ki[--Gi],Ki[Gi]=null,Bl=Ki[--Gi],Ki[Gi]=null;for(;t===fi;)fi=Kt[--Gt],Kt[Gt]=null,Un=Kt[--Gt],Kt[Gt]=null,Fn=Kt[--Gt],Kt[Gt]=null}var Bt=null,Ut=null,Pe=!1,on=null;function $v(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fi!==null?{id:Fn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(Pe){var e=Ut;if(e){var n=e;if(!lg(t,e)){if(qh(t))throw Error(j(418));e=Er(n.nextSibling);var r=Bt;e&&lg(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Bt=t)}}else{if(qh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Pe=!1,Bt=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function qa(t){if(t!==Bt)return!1;if(!Pe)return ug(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=Ut)){if(qh(t))throw Hv(),Error(j(418));for(;e;)$v(t,e),e=Er(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?Er(t.stateNode.nextSibling):null;return!0}function Hv(){for(var t=Ut;t;)t=Er(t.nextSibling)}function hs(){Ut=Bt=null,Pe=!1}function cf(t){on===null?on=[t]:on.push(t)}var yA=Jn.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function Wv(t){function e(v,_){if(t){var T=v.deletions;T===null?(v.deletions=[_],v.flags|=16):T.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=Ar(v,_),v.index=0,v.sibling=null,v}function s(v,_,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<_?(v.flags|=2,_):T):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,T,V){return _===null||_.tag!==6?(_=Jc(T,v.mode,V),_.return=v,_):(_=i(_,T),_.return=v,_)}function u(v,_,T,V){var M=T.type;return M===Bi?d(v,_,T.props.children,V,T.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&cg(M)===_.type)?(V=i(_,T.props),V.ref=to(v,_,T),V.return=v,V):(V=_l(T.type,T.key,T.props,null,v.mode,V),V.ref=to(v,_,T),V.return=v,V)}function c(v,_,T,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Zc(T,v.mode,V),_.return=v,_):(_=i(_,T.children||[]),_.return=v,_)}function d(v,_,T,V,M){return _===null||_.tag!==7?(_=ci(T,v.mode,V,M),_.return=v,_):(_=i(_,T),_.return=v,_)}function p(v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jc(""+_,v.mode,T),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ba:return T=_l(_.type,_.key,_.props,null,v.mode,T),T.ref=to(v,null,_),T.return=v,T;case ji:return _=Zc(_,v.mode,T),_.return=v,_;case ar:var V=_._init;return p(v,V(_._payload),T)}if(oo(_)||Ys(_))return _=ci(_,v.mode,T,null),_.return=v,_;Ka(v,_)}return null}function m(v,_,T,V){var M=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return M!==null?null:l(v,_,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ba:return T.key===M?u(v,_,T,V):null;case ji:return T.key===M?c(v,_,T,V):null;case ar:return M=T._init,m(v,_,M(T._payload),V)}if(oo(T)||Ys(T))return M!==null?null:d(v,_,T,V,null);Ka(v,T)}return null}function S(v,_,T,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return v=v.get(T)||null,l(_,v,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ba:return v=v.get(V.key===null?T:V.key)||null,u(_,v,V,M);case ji:return v=v.get(V.key===null?T:V.key)||null,c(_,v,V,M);case ar:var F=V._init;return S(v,_,T,F(V._payload),M)}if(oo(V)||Ys(V))return v=v.get(T)||null,d(_,v,V,M,null);Ka(_,V)}return null}function N(v,_,T,V){for(var M=null,F=null,w=_,y=_=0,I=null;w!==null&&y<T.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var A=m(v,w,T[y],V);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(v,w),_=s(A,_,y),F===null?M=A:F.sibling=A,F=A,w=I}if(y===T.length)return n(v,w),Pe&&ei(v,y),M;if(w===null){for(;y<T.length;y++)w=p(v,T[y],V),w!==null&&(_=s(w,_,y),F===null?M=w:F.sibling=w,F=w);return Pe&&ei(v,y),M}for(w=r(v,w);y<T.length;y++)I=S(w,v,y,T[y],V),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),F===null?M=I:F.sibling=I,F=I);return t&&w.forEach(function(R){return e(v,R)}),Pe&&ei(v,y),M}function P(v,_,T,V){var M=Ys(T);if(typeof M!="function")throw Error(j(150));if(T=M.call(T),T==null)throw Error(j(151));for(var F=M=null,w=_,y=_=0,I=null,A=T.next();w!==null&&!A.done;y++,A=T.next()){w.index>y?(I=w,w=null):I=w.sibling;var R=m(v,w,A.value,V);if(R===null){w===null&&(w=I);break}t&&w&&R.alternate===null&&e(v,w),_=s(R,_,y),F===null?M=R:F.sibling=R,F=R,w=I}if(A.done)return n(v,w),Pe&&ei(v,y),M;if(w===null){for(;!A.done;y++,A=T.next())A=p(v,A.value,V),A!==null&&(_=s(A,_,y),F===null?M=A:F.sibling=A,F=A);return Pe&&ei(v,y),M}for(w=r(v,w);!A.done;y++,A=T.next())A=S(w,v,y,A.value,V),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?y:A.key),_=s(A,_,y),F===null?M=A:F.sibling=A,F=A);return t&&w.forEach(function(x){return e(v,x)}),Pe&&ei(v,y),M}function k(v,_,T,V){if(typeof T=="object"&&T!==null&&T.type===Bi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ba:e:{for(var M=T.key,F=_;F!==null;){if(F.key===M){if(M=T.type,M===Bi){if(F.tag===7){n(v,F.sibling),_=i(F,T.props.children),_.return=v,v=_;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&cg(M)===F.type){n(v,F.sibling),_=i(F,T.props),_.ref=to(v,F,T),_.return=v,v=_;break e}n(v,F);break}else e(v,F);F=F.sibling}T.type===Bi?(_=ci(T.props.children,v.mode,V,T.key),_.return=v,v=_):(V=_l(T.type,T.key,T.props,null,v.mode,V),V.ref=to(v,_,T),V.return=v,v=V)}return o(v);case ji:e:{for(F=T.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(v,_.sibling),_=i(_,T.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Zc(T,v.mode,V),_.return=v,v=_}return o(v);case ar:return F=T._init,k(v,_,F(T._payload),V)}if(oo(T))return N(v,_,T,V);if(Ys(T))return P(v,_,T,V);Ka(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,T),_.return=v,v=_):(n(v,_),_=Jc(T,v.mode,V),_.return=v,v=_),o(v)):n(v,_)}return k}var ds=Wv(!0),qv=Wv(!1),zl=Br(null),$l=null,Qi=null,hf=null;function df(){hf=Qi=$l=null}function ff(t){var e=zl.current;Re(zl),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){$l=t,hf=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if($l===null)throw Error(j(308));Qi=t,$l.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var ii=null;function pf(t){ii===null?ii=[t]:ii.push(t)}function Kv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pf(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,pf(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,P=l;switch(m=e,S=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){p=N.call(S,p,m);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,m=typeof N=="function"?N.call(S,p,m):N,m==null)break e;p=Ve({},p,m);break e;case 2:lr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=S,u=p):d=d.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=p}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ha={},In=Br(ha),$o=Br(ha),Ho=Br(ha);function si(t){if(t===ha)throw Error(j(174));return t}function gf(t,e){switch(Ee(Ho,e),Ee($o,t),Ee(In,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}Re(In),Ee(In,e)}function fs(){Re(In),Re($o),Re(Ho)}function Qv(t){si(Ho.current);var e=si(In.current),n=Ph(e,t.type);e!==n&&(Ee($o,t),Ee(In,n))}function yf(t){$o.current===t&&(Re(In),Re($o))}var xe=Br(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function _f(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var fl=Jn.ReactCurrentDispatcher,Kc=Jn.ReactCurrentBatchConfig,pi=0,Oe=null,Qe=null,rt=null,ql=!1,Eo=!1,Wo=0,_A=0;function dt(){throw Error(j(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,i,s){if(pi=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?TA:IA,t=n(r,i),Eo){s=0;do{if(Eo=!1,Wo=0,25<=s)throw Error(j(301));s+=1,rt=Qe=null,e.updateQueue=null,fl.current=SA,t=n(r,i)}while(Eo)}if(fl.current=Kl,e=Qe!==null&&Qe.next!==null,pi=0,rt=Qe=Oe=null,ql=!1,e)throw Error(j(300));return t}function Ef(){var t=Wo!==0;return Wo=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Oe.memoizedState=rt=t:rt=rt.next=t,rt}function en(){if(Qe===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=rt===null?Oe.memoizedState:rt.next;if(e!==null)rt=e,Qe=t;else{if(t===null)throw Error(j(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},rt===null?Oe.memoizedState=rt=t:rt=rt.next=t}return rt}function qo(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((pi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Oe.lanes|=d,mi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yv(){}function Xv(t,e){var n=Oe,r=en(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Tf(ew.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Zv.bind(null,n,r,i,e),void 0,null),it===null)throw Error(j(349));pi&30||Jv(n,e,i)}return i}function Jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,r){e.value=n,e.getSnapshot=r,tw(e)&&nw(t)}function ew(t,e,n){return n(function(){tw(e)&&nw(t)})}function tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function nw(t){var e=qn(t,1);e!==null&&un(e,t,1,-1)}function fg(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=EA.bind(null,Oe,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rw(){return en().memoizedState}function pl(t,e,n,r){var i=vn();Oe.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function ku(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&vf(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function pg(t,e){return pl(8390656,8,t,e)}function Tf(t,e){return ku(2048,8,t,e)}function iw(t,e){return ku(4,2,t,e)}function sw(t,e){return ku(4,4,t,e)}function ow(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aw(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,ow.bind(null,e,t),n)}function If(){}function lw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uw(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cw(t,e,n){return pi&21?(hn(n,e)||(n=mv(),Oe.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function vA(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ye=n,Kc.transition=r}}function hw(){return en().memoizedState}function wA(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dw(t))fw(e,n);else if(n=Kv(t,e,n,r),n!==null){var i=It();un(n,t,r,i),pw(n,e,r)}}function EA(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dw(t))fw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,pf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Kv(t,e,i,r),n!==null&&(i=It(),un(n,t,r,i),pw(n,e,r))}}function dw(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function fw(t,e){Eo=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}var Kl={readContext:Zt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},TA={readContext:Zt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,ow.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wA.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:If,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=vA.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=vn();if(Pe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),it===null)throw Error(j(349));pi&30||Jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pg(ew.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,Zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=it.identifierPrefix;if(Pe){var n=Un,r=Fn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IA={readContext:Zt,useCallback:lw,useContext:Zt,useEffect:Tf,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:uw,useReducer:Gc,useRef:rw,useState:function(){return Gc(qo)},useDebugValue:If,useDeferredValue:function(t){var e=en();return cw(e,Qe.memoizedState,t)},useTransition:function(){var t=Gc(qo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:hw,unstable_isNewReconciler:!1},SA={readContext:Zt,useCallback:lw,useContext:Zt,useEffect:Tf,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:uw,useReducer:Qc,useRef:rw,useState:function(){return Qc(qo)},useDebugValue:If,useDeferredValue:function(t){var e=en();return Qe===null?e.memoizedState=t:cw(e,Qe.memoizedState,t)},useTransition:function(){var t=Qc(qo)[0],e=en().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Xv,useId:hw,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nu={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Sr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(un(e,t,i,r),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Sr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(un(e,t,i,r),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Sr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(un(e,t,r,n),dl(e,t,r))}};function mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function mw(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Vt(e)?di:_t.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nu.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Vt(e)?di:_t.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nu.enqueueReplaceState(i,i.state,null),Hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",r=e;do n+=J0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AA=typeof WeakMap=="function"?WeakMap:Map;function gw(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ql||(Ql=!0,ad=r),Xh(t,e)},n}function yw(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xh(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UA.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var CA=Jn.ReactCurrentOwner,Dt=!1;function Tt(t,e,n,r){e.child=t===null?qv(e,null,n,r):ds(e,t.child,n,r)}function wg(t,e,n,r,i){n=n.render;var s=e.ref;return ns(e,i),r=wf(t,e,n,r,s,i),n=Ef(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Pe&&n&&lf(e),e.flags|=1,Tt(t,e,r,i),e.child)}function Eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=_l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return Jh(t,e,n,r,i)}function vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Xi,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Xi,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Xi,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Xi,Mt),Mt|=r;return Tt(t,e,i,n),e.child}function ww(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,n,r,i){var s=Vt(n)?di:_t.current;return s=cs(e,s),ns(e,i),n=wf(t,e,n,r,s,i),r=Ef(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(Pe&&r&&lf(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Tg(t,e,n,r,i){if(Vt(n)){var s=!0;Ul(e)}else s=!1;if(ns(e,i),e.stateNode===null)ml(t,e),mw(e,n,r),Yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zt(c):(c=Vt(n)?di:_t.current,c=cs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&gg(e,o,r,c),lr=!1;var m=e.memoizedState;o.state=m,Hl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Ot.current||lr?(typeof d=="function"&&(Qh(e,n,d,r),u=e.memoizedState),(l=lr||mg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:rn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Vt(n)?di:_t.current,u=cs(e,u));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&gg(e,o,r,u),lr=!1,m=e.memoizedState,o.state=m,Hl(e,r,o,i);var N=e.memoizedState;l!==p||m!==N||Ot.current||lr?(typeof S=="function"&&(Qh(e,n,S,r),N=e.memoizedState),(c=lr||mg(e,n,c,r,m,N,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Zh(t,e,n,r,s,i)}function Zh(t,e,n,r,i,s){ww(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ag(e,n,!1),Kn(t,e,s);r=e.stateNode,CA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,l,s)):Tt(t,e,l,s),e.memoizedState=r.state,i&&ag(e,n,!0),e.child}function Ew(t){var e=t.stateNode;e.pendingContext?og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&og(t,e.context,!1),gf(t,e.containerInfo)}function Ig(t,e,n,r,i){return hs(),cf(i),e.flags|=256,Tt(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tw(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(xe,i&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ou(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return RA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ar(l,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&cf(r),ds(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yc(Error(j(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ou({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return Ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Yc(s,r,void 0),Ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,Dt||l){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),un(r,t,i,-1))}return Nf(),r=Yc(Error(j(421))),Ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Er(i.nextSibling),Bt=e,Pe=!0,on=null,t!==null&&(Kt[Gt++]=Fn,Kt[Gt++]=Un,Kt[Gt++]=fi,Fn=t.id,Un=t.overflow,fi=e),e=Sf(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gh(t.return,e,n)}function Xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Iw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PA(t,e,n){switch(e.tag){case 3:Ew(e),hs();break;case 5:Qv(e);break;case 1:Vt(e.type)&&Ul(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?Tw(t,e,n):(Ee(xe,xe.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);Ee(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,vw(t,e,n)}return Kn(t,e,n)}var Sw,nd,Aw,Cw;Sw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(In.current);var s=null;switch(n){case"input":i=Sh(t,i),r=Sh(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Rh(t,i),r=Rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ml)}kh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Do.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Do.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function no(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kA(t,e,n){var r=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Vt(e.type)&&Fl(),ft(e),null;case 3:return r=e.stateNode,fs(),Re(Ot),Re(_t),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(cd(on),on=null))),nd(t,e),ft(e),null;case 5:yf(e);var i=si(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)Aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ft(e),null}if(t=si(In.current),qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[En]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<lo.length;i++)Ae(lo[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Om(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":Lm(r,s),Ae("invalid",r)}kh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",""+l]):Do.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Ma(r),Vm(r,s,!0);break;case"textarea":Ma(r),bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[En]=e,t[zo]=r,Sw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<lo.length;i++)Ae(lo[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":Om(t,r),i=Sh(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Lm(t,r),i=Rh(t,r),Ae("invalid",t);break;default:i=r}kh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oo(t,u):typeof u=="number"&&Oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&Kd(t,s,u,o))}switch(n){case"input":Ma(t),Vm(t,r,!1);break;case"textarea":Ma(t),bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=si(Ho.current),si(In.current),qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[En]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[En]=e,e.stateNode=r}return ft(e),null;case 13:if(Re(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Ut!==null&&e.mode&1&&!(e.flags&128))Hv(),hs(),e.flags|=98560,s=!1;else if(s=qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[En]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else on!==null&&(cd(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Xe===0&&(Xe=3):Nf())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return fs(),nd(t,e),t===null&&jo(e.stateNode.containerInfo),ft(e),null;case 10:return ff(e.type._context),ft(e),null;case 17:return Vt(e.type)&&Fl(),ft(e),null;case 19:if(Re(xe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)no(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,no(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>ms&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return ft(e),null}else 2*ze()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=xe.current,Ee(xe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function NA(t,e){switch(uf(e),e.tag){case 1:return Vt(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),Re(Ot),Re(_t),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(Re(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(xe),null;case 4:return fs(),null;case 10:return ff(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Qa=!1,gt=!1,xA=typeof WeakSet=="function"?WeakSet:Set,H=null;function Yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Ag=!1;function DA(t,e){if(jh=Vl,t=xv(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},Vl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,k=N.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:rn(e.type,P),k);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(V){Fe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=Ag,Ag=!1,N}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rd(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rw(t){var e=t.alternate;e!==null&&(t.alternate=null,Rw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[En],delete e[zo],delete e[Hh],delete e[pA],delete e[mA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pw(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var st=null,sn=!1;function sr(t,e,n){for(n=n.child;n!==null;)kw(t,e,n),n=n.sibling}function kw(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:gt||Yi(n,e);case 6:var r=st,i=sn;st=null,sr(t,e,n),st=r,sn=i,st!==null&&(sn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(sn?(t=st,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Mo(t)):Hc(st,n.stateNode));break;case 4:r=st,i=sn,st=n.stateNode.containerInfo,sn=!0,sr(t,e,n),st=r,sn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!gt&&(Yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,sr(t,e,n),gt=r):sr(t,e,n);break;default:sr(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xA),e.forEach(function(r){var i=BA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,sn=!1;break e;case 3:st=l.stateNode.containerInfo,sn=!0;break e;case 4:st=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(st===null)throw Error(j(160));kw(s,o,i),st=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Fe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nw(e,t),e=e.sibling}function Nw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),_n(t),r&4){try{To(3,t,t.return),xu(3,t)}catch(P){Fe(t,t.return,P)}try{To(5,t,t.return)}catch(P){Fe(t,t.return,P)}}break;case 1:nn(e,t),_n(t),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(nn(e,t),_n(t),r&512&&n!==null&&Yi(n,n.return),t.flags&32){var i=t.stateNode;try{Oo(i,"")}catch(P){Fe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&J_(i,s),Nh(l,o);var c=Nh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?rv(i,p):d==="dangerouslySetInnerHTML"?tv(i,p):d==="children"?Oo(i,p):Kd(i,d,p,c)}switch(l){case"input":Ah(i,s);break;case"textarea":Z_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Ji(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ji(i,!!s.multiple,s.defaultValue,!0):Ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(P){Fe(t,t.return,P)}}break;case 6:if(nn(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Fe(t,t.return,P)}}break;case 3:if(nn(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(P){Fe(t,t.return,P)}break;case 4:nn(e,t),_n(t);break;case 13:nn(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rf=ze())),r&4&&Rg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||d,nn(e,t),gt=c):nn(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,S=m.child,m.tag){case 0:case 11:case 14:case 15:To(4,m,m.return);break;case 1:Yi(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(P){Fe(r,n,P)}}break;case 5:Yi(m,m.return);break;case 22:if(m.memoizedState!==null){kg(p);continue}}S!==null?(S.return=m,H=S):kg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nv("display",o))}catch(P){Fe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Fe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),_n(t),r&4&&Rg(t);break;case 21:break;default:nn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oo(i,""),r.flags&=-33);var s=Cg(t);od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cg(t);sd(t,l,o);break;default:throw Error(j(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OA(t,e,n){H=t,xw(t)}function xw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||gt;l=Qa;var c=gt;if(Qa=o,(gt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Ng(i):u!==null?(u.return=o,H=u):Ng(i);for(;s!==null;)H=s,xw(s),s=s.sibling;H=i,Qa=l,gt=c}Pg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Pg(t)}}function Pg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}gt||e.flags&512&&id(e)}catch(m){Fe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function kg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Ng(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Fe(e,i,u)}}var s=e.return;try{id(e)}catch(u){Fe(e,s,u)}break;case 5:var o=e.return;try{id(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var VA=Math.ceil,Gl=Jn.ReactCurrentDispatcher,Af=Jn.ReactCurrentOwner,Xt=Jn.ReactCurrentBatchConfig,he=0,it=null,He=null,lt=0,Mt=0,Xi=Br(0),Xe=0,Go=null,mi=0,Du=0,Cf=0,Io=null,Nt=null,Rf=0,ms=1/0,Vn=null,Ql=!1,ad=null,Ir=null,Ya=!1,mr=null,Yl=0,So=0,ld=null,gl=-1,yl=0;function It(){return he&6?ze():gl!==-1?gl:gl=ze()}function Sr(t){return t.mode&1?he&2&&lt!==0?lt&-lt:yA.transition!==null?(yl===0&&(yl=mv()),yl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:Tv(t.type)),t):1}function un(t,e,n,r){if(50<So)throw So=0,ld=null,Error(j(185));la(t,n,r),(!(he&2)||t!==it)&&(t===it&&(!(he&2)&&(Du|=n),Xe===4&&cr(t,lt)),Lt(t,r),n===1&&he===0&&!(e.mode&1)&&(ms=ze()+500,Pu&&zr()))}function Lt(t,e){var n=t.callbackNode;yS(t,e);var r=Ol(t,t===it?lt:0);if(r===0)n!==null&&Um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Um(n),e===1)t.tag===0?gA(xg.bind(null,t)):Bv(xg.bind(null,t)),dA(function(){!(he&6)&&zr()}),n=null;else{switch(gv(r)){case 1:n=Jd;break;case 4:n=fv;break;case 16:n=Dl;break;case 536870912:n=pv;break;default:n=Dl}n=Uw(n,Dw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dw(t,e){if(gl=-1,yl=0,he&6)throw Error(j(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var r=Ol(t,t===it?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xl(t,r);else{e=r;var i=he;he|=2;var s=Vw();(it!==t||lt!==e)&&(Vn=null,ms=ze()+500,ui(t,e));do try{MA();break}catch(l){Ow(t,l)}while(!0);df(),Gl.current=s,he=i,He!==null?e=0:(it=null,lt=0,e=Xe)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(r=i,e=ud(t,i))),e===1)throw n=Go,ui(t,0),cr(t,r),Lt(t,ze()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!LA(i)&&(e=Xl(t,r),e===2&&(s=Lh(t),s!==0&&(r=s,e=ud(t,s))),e===1))throw n=Go,ui(t,0),cr(t,r),Lt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ti(t,Nt,Vn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=Rf+500-ze(),10<e)){if(Ol(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$h(ti.bind(null,t,Nt,Vn),e);break}ti(t,Nt,Vn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VA(r/1960))-r,10<r){t.timeoutHandle=$h(ti.bind(null,t,Nt,Vn),r);break}ti(t,Nt,Vn);break;case 5:ti(t,Nt,Vn);break;default:throw Error(j(329))}}}return Lt(t,ze()),t.callbackNode===n?Dw.bind(null,t):null}function ud(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&cd(e)),t}function cd(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function LA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Cf,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function xg(t){if(he&6)throw Error(j(327));rs();var e=Ol(t,0);if(!(e&1))return Lt(t,ze()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=Go,ui(t,0),cr(t,e),Lt(t,ze()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,Nt,Vn),Lt(t,ze()),null}function Pf(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ms=ze()+500,Pu&&zr())}}function gi(t){mr!==null&&mr.tag===0&&!(he&6)&&rs();var e=he;he|=1;var n=Xt.transition,r=ye;try{if(Xt.transition=null,ye=1,t)return t()}finally{ye=r,Xt.transition=n,he=e,!(he&6)&&zr()}}function kf(){Mt=Xi.current,Re(Xi)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hA(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:fs(),Re(Ot),Re(_t),_f();break;case 5:yf(r);break;case 4:fs();break;case 13:Re(xe);break;case 19:Re(xe);break;case 10:ff(r.type._context);break;case 22:case 23:kf()}n=n.return}if(it=t,He=t=Ar(t.current,null),lt=Mt=e,Xe=0,Go=null,Cf=Du=mi=0,Nt=Io=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function Ow(t,e){do{var n=He;try{if(df(),fl.current=Kl,ql){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ql=!1}if(pi=0,rt=Qe=Oe=null,Eo=!1,Wo=0,Af.current=null,n===null||n.return===null){Xe=1,Go=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=lt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=_g(o);if(S!==null){S.flags&=-257,vg(S,o,l,s,e),S.mode&1&&yg(s,c,e),e=S,u=c;var N=e.updateQueue;if(N===null){var P=new Set;P.add(u),e.updateQueue=P}else N.add(u);break e}else{if(!(e&1)){yg(s,c,e),Nf();break e}u=Error(j(426))}}else if(Pe&&l.mode&1){var k=_g(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),vg(k,o,l,s,e),cf(ps(u,l));break e}}s=u=ps(u,l),Xe!==4&&(Xe=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=gw(s,u,e);hg(s,v);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ir===null||!Ir.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=yw(s,l,e);hg(s,V);break e}}s=s.return}while(s!==null)}bw(n)}catch(M){e=M,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function Vw(){var t=Gl.current;return Gl.current=Kl,t===null?Kl:t}function Nf(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),it===null||!(mi&268435455)&&!(Du&268435455)||cr(it,lt)}function Xl(t,e){var n=he;he|=2;var r=Vw();(it!==t||lt!==e)&&(Vn=null,ui(t,e));do try{bA();break}catch(i){Ow(t,i)}while(!0);if(df(),he=n,Gl.current=r,He!==null)throw Error(j(261));return it=null,lt=0,Xe}function bA(){for(;He!==null;)Lw(He)}function MA(){for(;He!==null&&!lS();)Lw(He)}function Lw(t){var e=Fw(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?bw(t):He=e,Af.current=null}function bw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NA(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,He=null;return}}else if(n=kA(n,e,Mt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Xe===0&&(Xe=5)}function ti(t,e,n){var r=ye,i=Xt.transition;try{Xt.transition=null,ye=1,FA(t,e,n,r)}finally{Xt.transition=i,ye=r}return null}function FA(t,e,n,r){do rs();while(mr!==null);if(he&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_S(t,s),t===it&&(He=it=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,Uw(Dl,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=ye;ye=1;var l=he;he|=4,Af.current=null,DA(t,n),Nw(n,t),iA(Bh),Vl=!!jh,Bh=jh=null,t.current=n,OA(n),uS(),he=l,ye=o,Xt.transition=s}else t.current=n;if(Ya&&(Ya=!1,mr=t,Yl=i),s=t.pendingLanes,s===0&&(Ir=null),dS(n.stateNode),Lt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ql)throw Ql=!1,t=ad,ad=null,t;return Yl&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===ld?So++:(So=0,ld=t):So=0,zr(),null}function rs(){if(mr!==null){var t=gv(Yl),e=Xt.transition,n=ye;try{if(Xt.transition=null,ye=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Yl=0,he&6)throw Error(j(331));var i=he;for(he|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:To(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,S=d.return;if(Rw(d),d===c){H=null;break}if(m!==null){m.return=S,H=m;break}H=S}}}var N=s.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,H=v;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xu(9,l)}}catch(M){Fe(l,l.return,M)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(he=i,zr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{ye=n,Xt.transition=e}}return!1}function Dg(t,e,n){e=ps(n,e),e=gw(t,e,1),t=Tr(t,e,1),e=It(),t!==null&&(la(t,1,e),Lt(t,e))}function Fe(t,e,n){if(t.tag===3)Dg(t,t,n);else for(;e!==null;){if(e.tag===3){Dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ps(n,t),t=yw(e,t,1),e=Tr(e,t,1),t=It(),e!==null&&(la(e,1,t),Lt(e,t));break}}e=e.return}}function UA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(lt&n)===n&&(Xe===4||Xe===3&&(lt&130023424)===lt&&500>ze()-Rf?ui(t,0):Cf|=n),Lt(t,e)}function Mw(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=It();t=qn(t,e),t!==null&&(la(t,e,n),Lt(t,n))}function jA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mw(t,n)}function BA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Mw(t,n)}var Fw;Fw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,PA(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Pe&&e.flags&1048576&&zv(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ml(t,e),t=e.pendingProps;var i=cs(e,_t.current);ns(e,n),i=wf(null,e,r,t,i,n);var s=Ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,Ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mf(e),i.updater=Nu,e.stateNode=i,i._reactInternals=e,Yh(e,r,t,n),e=Zh(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&lf(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$A(r),t=rn(r,t),i){case 0:e=Jh(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Tg(t,e,r,i,n);case 3:e:{if(Ew(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gv(t,e),Hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(j(423)),e),e=Ig(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(j(424)),e),e=Ig(t,e,r,n,i);break e}else for(Ut=Er(e.stateNode.containerInfo.firstChild),Bt=e,Pe=!0,on=null,n=qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=Kn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Qv(e),t===null&&Kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zh(r,i)?o=null:s!==null&&zh(r,s)&&(e.flags|=32),ww(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return Tw(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),wg(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(zl,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Ot.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ns(e,n),i=Zt(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Eg(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),ml(t,e),e.tag=1,Vt(r)?(t=!0,Ul(e)):t=!1,ns(e,n),mw(e,r,i),Yh(e,r,i,n),Zh(null,e,r,!0,t,n);case 19:return Iw(t,e,n);case 22:return vw(t,e,n)}throw Error(j(156,e.tag))};function Uw(t,e){return dv(t,e)}function zA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new zA(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $A(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Yd)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ci(n.children,i,s,e);case Gd:o=8,i|=8;break;case wh:return t=Yt(12,n,e,i|2),t.elementType=wh,t.lanes=s,t;case Eh:return t=Yt(13,n,e,i),t.elementType=Eh,t.lanes=s,t;case Th:return t=Yt(19,n,e,i),t.elementType=Th,t.lanes=s,t;case Q_:return Ou(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case G_:o=9;break e;case Qd:o=11;break e;case Yd:o=14;break e;case ar:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function Ou(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,i,s,o,l,u){return t=new HA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function WA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jw(t){if(!t)return Dr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Vt(n))return jv(t,n,e)}return e}function Bw(t,e,n,r,i,s,o,l,u){return t=Df(n,r,!0,t,i,s,o,l,u),t.context=jw(null),n=t.current,r=It(),i=Sr(n),s=zn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,la(t,i,r),Lt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=It(),o=Sr(i);return n=jw(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(un(t,i,o,s),dl(t,i,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function qA(){return null}var zw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Lu.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Vu(t,e,null,null)};Lu.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){Vu(null,t,null,null)}),e[Wn]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&Ev(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function KA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Jl(o);s.call(c)}}var o=Bw(e,r,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Wn]=o.current,jo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Jl(u);l.call(c)}}var u=Df(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=u,t[Wn]=u.current,jo(t.nodeType===8?t.parentNode:t),gi(function(){Vu(e,u,n,r)}),u}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Jl(o);l.call(u)}}Vu(e,o,t,i)}else o=KA(n,e,t,i,r);return Jl(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Zd(e,n|1),Lt(e,ze()),!(he&6)&&(ms=ze()+500,zr()))}break;case 13:gi(function(){var r=qn(t,1);if(r!==null){var i=It();un(r,t,1,i)}}),Of(t,1)}};ef=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=It();un(e,t,134217728,n)}Of(t,134217728)}};_v=function(t){if(t.tag===13){var e=Sr(t),n=qn(t,e);if(n!==null){var r=It();un(n,t,e,r)}Of(t,e)}};vv=function(){return ye};wv=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Dh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ru(r);if(!i)throw Error(j(90));X_(r),Ah(r,i)}}}break;case"textarea":Z_(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};ov=Pf;av=gi;var GA={usingClientEntryPoint:!1,Events:[ca,Wi,Ru,iv,sv,Pf]},ro={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QA={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||qA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Iu=Xa.inject(QA),Tn=Xa}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GA;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(j(200));return WA(t,e,null,n)};Ht.createRoot=function(t,e){if(!Lf(t))throw Error(j(299));var n=!1,r="",i=zw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,jo(t.nodeType===8?t.parentNode:t),new Vf(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return gi(t)};Ht.hydrate=function(t,e,n){if(!bu(e))throw Error(j(200));return Mu(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bw(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lu(e)};Ht.render=function(t,e,n){if(!bu(e))throw Error(j(200));return Mu(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!bu(t))throw Error(j(40));return t._reactRootContainer?(gi(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Pf;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Mu(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),$_.exports=Ht;var YA=$_.exports,Lg=YA;_h.createRoot=Lg.createRoot,_h.hydrateRoot=Lg.hydrateRoot;const Hw=D.createContext(void 0);function bg(t){const e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=t==="auto"?e?"dark":"light":t;document.documentElement.setAttribute("data-theme",n)}const XA=({children:t})=>{const[e,n]=D.useState(()=>localStorage.getItem("theme")||"auto");D.useEffect(()=>{bg(e),localStorage.setItem("theme",e)},[e]),D.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>{(localStorage.getItem("theme")||"auto")==="auto"&&bg("auto")};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=D.useMemo(()=>({theme:e,setTheme:n}),[e]);return C.jsx(Hw.Provider,{value:r,children:t})};function JA(){const t=D.useContext(Hw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const Ww=D.createContext(void 0),ZA=({children:t})=>{const[e,n]=D.useState(()=>localStorage.getItem("layout")||"auto"),r=D.useMemo(()=>({layout:e,setLayout:i=>{localStorage.setItem("layout",i),n(i)}}),[e]);return C.jsx(Ww.Provider,{value:r,children:t})};function Fu(){const t=D.useContext(Ww);if(!t)throw new Error("useLayout must be used within LayoutProvider");return t}const eC=()=>{};var Mg={};/**
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
 */const qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[d],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new nC;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const N=c<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(t){const e=qw(t);return Kw.encodeByteArray(e,!0)},Zl=function(t){return rC(t).replace(/\./g,"")},Gw=function(t){try{return Kw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sC=()=>iC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gw(t[1]);return e&&JSON.parse(e)},Uu=()=>{try{return eC()||sC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>{var e,n;return(n=(e=Uu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lC=t=>{const e=Qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yw=()=>{var t;return(t=Uu())==null?void 0:t.config},Xw=t=>{var e;return(e=Uu())==null?void 0:e[`_${t}`]};/**
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
 */class uC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function As(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jw(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),""].join(".")}const Ao={};function hC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ao))Ao[e]?t.emulator.push(e):t.prod.push(e);return t}function dC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fg=!1;function Zw(t,e){if(typeof window>"u"||typeof document>"u"||!As(window.location.host)||Ao[t]===e||Ao[t]||Fg)return;Ao[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=hC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Fg=!0,o()},m}function d(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=dC(r),S=n("text"),N=document.getElementById(S)||document.createElement("span"),P=n("learnmore"),k=document.getElementById(P)||document.createElement("a"),v=n("preprendIcon"),_=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),d(k,P);const V=c();u(_,v),T.append(_,N,k,V),document.body.appendChild(T)}s?(N.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function pC(){var e;const t=(e=Uu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yC(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _C(){return!pC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tE(){try{return typeof indexedDB=="object"}catch{return!1}}function nE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function vC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wC="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wC,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?EC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new fn(i,l,r)}}function EC(t,e){return t.replace(TC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TC=/\{\$([^}]+)}/g;function IC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ug(s)&&Ug(o)){if(!Or(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
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
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SC(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
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
 */const RC=1e3,PC=2,kC=4*60*60*1e3,NC=.5;function jg(t,e=RC,n=PC){const r=e*Math.pow(n,t),i=Math.round(NC*r*(Math.random()-.5)*2);return Math.min(kC,r+i)}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ni="[DEFAULT]";/**
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
 */class xC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OC(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DC(t){return t===ni?void 0:t}function OC(t){return t.instantiationMode==="EAGER"}/**
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
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const LC={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},bC=se.INFO,MC={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},FC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=bC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const UC=(t,e)=>e.some(n=>t instanceof n);let Bg,zg;function jC(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BC(){return zg||(zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rE=new WeakMap,hd=new WeakMap,iE=new WeakMap,th=new WeakMap,bf=new WeakMap;function zC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rE.set(n,t)}).catch(()=>{}),bf.set(e,t),e}function $C(t){if(hd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hd.set(t,e)}let dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HC(t){dd=t(dd)}function WC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return iE.set(r,e.sort?e.sort():[e]),Cr(r)}:BC().includes(t)?function(...e){return t.apply(nh(this),e),Cr(rE.get(this))}:function(...e){return Cr(t.apply(nh(this),e))}}function qC(t){return typeof t=="function"?WC(t):(t instanceof IDBTransaction&&$C(t),UC(t,jC())?new Proxy(t,dd):t)}function Cr(t){if(t instanceof IDBRequest)return zC(t);if(th.has(t))return th.get(t);const e=qC(t);return e!==t&&(th.set(t,e),bf.set(e,t)),e}const nh=t=>bf.get(t);function sE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const KC=["get","getKey","getAll","getAllKeys","count"],GC=["put","add","delete","clear"],rh=new Map;function $g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}HC(t=>({...t,get:(e,n,r)=>$g(e,n)||t.get(e,n,r),has:(e,n)=>!!$g(e,n)||t.has(e,n)}));/**
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
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",Hg="0.14.5";/**
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
 */const Gn=new ju("@firebase/app"),XC="@firebase/app-compat",JC="@firebase/analytics-compat",ZC="@firebase/analytics",e1="@firebase/app-check-compat",t1="@firebase/app-check",n1="@firebase/auth",r1="@firebase/auth-compat",i1="@firebase/database",s1="@firebase/data-connect",o1="@firebase/database-compat",a1="@firebase/functions",l1="@firebase/functions-compat",u1="@firebase/installations",c1="@firebase/installations-compat",h1="@firebase/messaging",d1="@firebase/messaging-compat",f1="@firebase/performance",p1="@firebase/performance-compat",m1="@firebase/remote-config",g1="@firebase/remote-config-compat",y1="@firebase/storage",_1="@firebase/storage-compat",v1="@firebase/firestore",w1="@firebase/ai",E1="@firebase/firestore-compat",T1="firebase",I1="12.5.0";/**
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
 */const pd="[DEFAULT]",S1={[fd]:"fire-core",[XC]:"fire-core-compat",[ZC]:"fire-analytics",[JC]:"fire-analytics-compat",[t1]:"fire-app-check",[e1]:"fire-app-check-compat",[n1]:"fire-auth",[r1]:"fire-auth-compat",[i1]:"fire-rtdb",[s1]:"fire-data-connect",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[l1]:"fire-fn-compat",[u1]:"fire-iid",[c1]:"fire-iid-compat",[h1]:"fire-fcm",[d1]:"fire-fcm-compat",[f1]:"fire-perf",[p1]:"fire-perf-compat",[m1]:"fire-rc",[g1]:"fire-rc-compat",[y1]:"fire-gcs",[_1]:"fire-gcs-compat",[v1]:"fire-fst",[E1]:"fire-fst-compat",[w1]:"fire-vertex","fire-js":"fire-js",[T1]:"fire-js-all"};/**
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
 */const eu=new Map,A1=new Map,md=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(md.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,t);for(const n of eu.values())Wg(n,t);for(const n of A1.values())Wg(n,t);return!0}function Ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const C1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new Ci("app","Firebase",C1);/**
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
 */class R1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=I1;function oE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=Yw()),!n)throw Rr.create("no-options");const s=eu.get(i);if(s){if(Or(n,s.options)&&Or(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new VC(i);for(const u of md.values())o.addComponent(u);const l=new R1(n,r,o);return eu.set(i,l),l}function Mf(t=pd){const e=eu.get(t);if(!e&&t===pd&&Yw())return oE();if(!e)throw Rr.create("no-app",{appName:t});return e}function Jt(t,e,n){let r=S1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(o.join(" "));return}Nn(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const P1="firebase-heartbeat-database",k1=1,Qo="firebase-heartbeat-store";let ih=null;function aE(){return ih||(ih=sE(P1,k1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function N1(t){try{const n=(await aE()).transaction(Qo),r=await n.objectStore(Qo).get(lE(t));return await n.done,r}catch(e){if(e instanceof fn)Gn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function qg(t,e){try{const r=(await aE()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,lE(t)),await r.done}catch(n){if(n instanceof fn)Gn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function lE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const x1=1024,D1=30;class O1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>D1){const o=b1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kg(),{heartbeatsToSend:r,unsentEntries:i}=V1(this._heartbeatsCache.heartbeats),s=Zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function V1(t,e=x1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tE()?nE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gg(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}function b1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function M1(t){Nn(new dn("platform-logger",e=>new QC(e),"PRIVATE")),Nn(new dn("heartbeat",e=>new O1(e),"PRIVATE")),Jt(fd,Hg,t),Jt(fd,Hg,"esm2020"),Jt("fire-js","")}M1("");function uE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F1=uE,cE=new Ci("auth","Firebase",uE());/**
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
 */const tu=new ju("@firebase/auth");function U1(t,...e){tu.logLevel<=se.WARN&&tu.warn(`Auth (${Cs}): ${t}`,...e)}function vl(t,...e){tu.logLevel<=se.ERROR&&tu.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw Uf(t,...e)}function cn(t,...e){return Uf(t,...e)}function Ff(t,e,n){const r={...F1(),[e]:n};return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Ff(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function j1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),Ff(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cE.create(t,...e)}function X(t,e,...n){if(!t)throw Uf(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function Qn(t,e){t||jn(e)}/**
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
 */function gd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function B1(){return Qg()==="http:"||Qg()==="https:"}function Qg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function z1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B1()||eE()||"connection"in navigator)?navigator.onLine:!0}function $1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=fC()||gC()}get(){return z1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jf(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const H1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const W1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q1=new fa(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hr(t,e,n,r,i={}){return dE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=da({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return mC()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&As(t.emulatorConfig.host)&&(c.credentials="include"),hE.fetch()(await fE(t,t.config.apiHost,n,l),c)})}async function dE(t,e,n){t._canInitEmulator=!1;const r={...H1,...e};try{const i=new G1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ff(t,d,c);tn(t,d)}}catch(i){if(i instanceof fn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await Hr(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function fE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?jf(t.config,i):`${t.config.apiScheme}://${i}`;return W1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function K1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class G1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),q1.get())})}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function Yg(t){return t!==void 0&&t.enterprise!==void 0}class Q1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return K1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Y1(t,e){return Hr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function X1(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function nu(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J1(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Bf(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Co(sh(i.auth_time)),issuedAtTime:Co(sh(i.iat)),expirationTime:Co(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function Bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gw(n);return i?JSON.parse(i):(vl("Failed to decode base64 JWT payload"),null)}catch(i){return vl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xg(t){const e=Bf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&Z1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Z1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ru(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Yo(t,nu(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?pE(i.providerUserInfo):[],o=nR(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function tR(t){const e=et(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function rR(t,e){const n=await dE(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await fE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&As(t.emulatorConfig.host)&&(u.credentials="include"),hE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iR(t,e){return Hr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Xg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new is;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function or(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new eR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J1(this,e)}reload(){return tR(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Yo(this,X1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:S,providerData:N,stsTokenManager:P}=n;X(p&&P,e,"internal-error");const k=is.fromJSON(this.name,P);X(typeof p=="string",e,"internal-error"),or(r,e.name),or(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof S=="boolean",e,"internal-error"),or(s,e.name),or(o,e.name),or(l,e.name),or(u,e.name),or(c,e.name),or(d,e.name);const v=new an({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:k,createdAt:c,lastLoginAt:d});return N&&Array.isArray(N)&&(v.providerData=N.map(_=>({..._}))),u&&(v._redirectEventId=u),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new is;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new is;l.updateFromIdToken(r);const u=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Jg=new Map;function Bn(t){Qn(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
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
 */class mE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mE.type="NONE";const Zg=mE;/**
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
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wl(this.userKey,i.apiKey,s),this.fullPersistenceKey=wl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nu(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(Bn(Zg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn(Zg);const o=wl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await nu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await an._fromGetAccountInfoResponse(e,m,d)}else p=an._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ss(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function ey(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(TE(e))return"Webos";if(yE(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(wE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gE(t=vt()){return/firefox\//i.test(t)}function yE(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=vt()){return/crios\//i.test(t)}function vE(t=vt()){return/iemobile/i.test(t)}function wE(t=vt()){return/android/i.test(t)}function EE(t=vt()){return/blackberry/i.test(t)}function TE(t=vt()){return/webos/i.test(t)}function zf(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sR(t=vt()){var e;return zf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function oR(){return yC()&&document.documentMode===10}function IE(t=vt()){return zf(t)||wE(t)||TE(t)||EE(t)||/windows phone/i.test(t)||vE(t)}/**
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
 */function SE(t,e=[]){let n;switch(t){case"Browser":n=ey(vt());break;case"Worker":n=`${ey(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
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
 */class aR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lR(t,e={}){return Hr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const uR=6;class cR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ty(this),this.idTokenSubscription=new ty(this),this.beforeStateQueue=new aR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nu(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject($n(this));const n=e?et(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lR(this),n=new cR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&U1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Wr(t){return et(t)}class ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=SC(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dR(t){Bu=t}function AE(t){return Bu.loadJS(t)}function fR(){return Bu.recaptchaEnterpriseScript}function pR(){return Bu.gapiScript}function mR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gR{constructor(){this.enterprise=new yR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const _R="recaptcha-enterprise",CE="NO_RECAPTCHA";class vR{constructor(e){this.type=_R,this.auth=Wr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Y1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Q1(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Yg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(CE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Yg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fR();u.length!==0&&(u+=l),AE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ny(t,e,n,r=!1,i=!1){const s=new vR(t);let o;if(i)o=CE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _d(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ny(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ny(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function wR(t,e){const n=Ri(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Or(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function ER(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TR(t,e,n){const r=Wr(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RE(e),{host:o,port:l}=IR(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Or(c,r.config.emulator)&&Or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,As(o)?(Jw(`${s}//${o}${u}`),Zw("Auth",!0)):SR()}function RE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IR(t){const e=RE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ry(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ry(o)}}}function ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function AR(t,e){return Hr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CR(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function RR(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function PR(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class Xo extends $f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,n,"signInWithPassword",CR);case"emailLink":return RR(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,r,"signUpPassword",AR);case"emailLink":return PR(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function os(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const kR="http://localhost";class yi extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
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
 */function NR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xR(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class Hf{constructor(e){const n=uo(co(e)),r=n.apiKey??null,i=n.oobCode??null,s=NR(n.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xR(e);try{return new Hf(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hf.parseLink(n);return X(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends Wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends ma{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class dr extends ma{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class fr extends ma{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */async function DR(t,e){return pa(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),o=iy(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iy(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class iu extends fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,iu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new iu(e,n,r,i)}}function PE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?iu._fromErrorAndOperation(t,s,e,r):s})}async function OR(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function VR(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject($n(r));const i="reauthenticate";try{const s=await Yo(t,PE(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Bf(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function kE(t,e,n=!1){if(Ft(t.app))return Promise.reject($n(t));const r="signIn",i=await PE(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LR(t,e){return kE(Wr(t),e)}/**
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
 */async function NE(t){const e=Wr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bR(t,e,n){if(Ft(t.app))return Promise.reject($n(t));const r=Wr(t),o=await _d(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&NE(t),u}),l=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function MR(t,e,n){return Ft(t.app)?Promise.reject($n(t)):LR(et(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NE(t),r})}function FR(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function UR(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function jR(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function BR(t){return et(t).signOut()}const su="__sak";/**
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
 */class xE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zR=1e3,$R=10;class DE extends xE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$R):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const HR=DE;/**
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
 */class OE extends xE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const VE=OE;/**
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
 */function WR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await WR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
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
 */function qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=qf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Sn(){return window}function KR(t){Sn().location.href=t}/**
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
 */function LE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function GR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function YR(){return LE()?self:null}/**
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
 */const bE="firebaseLocalStorageDb",XR=1,ou="firebaseLocalStorage",ME="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function JR(){const t=indexedDB.deleteDatabase(bE);return new ga(t).toPromise()}function vd(){const t=indexedDB.open(bE,XR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await JR(),e(await vd()))})})}async function sy(t,e,n){const r=$u(t,!0).put({[ME]:e,value:n});return new ga(r).toPromise()}async function ZR(t,e){const n=$u(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function oy(t,e){const n=$u(t,!0).delete(e);return new ga(n).toPromise()}const eP=800,tP=3;class FE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(YR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await GR(),!this.activeServiceWorker)return;this.sender=new qR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await sy(e,su,"1"),await oy(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FE.type="LOCAL";const nP=FE;new fa(3e4,6e4);/**
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
 */function UE(t,e){return e?Bn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kf extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rP(t){return kE(t.auth,new Kf(t),t.bypassAuthState)}function iP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),VR(n,new Kf(t),t.bypassAuthState)}async function sP(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),OR(n,new Kf(t),t.bypassAuthState)}/**
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
 */class jE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rP;case"linkViaPopup":case"linkViaRedirect":return sP;case"reauthViaPopup":case"reauthViaRedirect":return iP;default:tn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oP=new fa(2e3,1e4);async function aP(t,e,n){if(Ft(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=Wr(t);j1(t,e,Wf);const i=UE(r,n);return new oi(r,"signInViaPopup",e,i).executeNotNull()}class oi extends jE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oP.get())};e()}}oi.currentPopupAction=null;/**
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
 */const lP="pendingRedirect",El=new Map;class uP extends jE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await cP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cP(t,e){const n=fP(e),r=dP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hP(t,e){El.set(t._key(),e)}function dP(t){return Bn(t._redirectPersistence)}function fP(t){return wl(lP,t.config.apiKey,t.name)}async function pP(t,e,n=!1){if(Ft(t.app))return Promise.reject($n(t));const r=Wr(t),i=UE(r,e),o=await new uP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const mP=10*60*1e3;class gP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ay(e))}saveEventToCache(e){this.cachedEventUids.add(ay(e)),this.lastProcessedEventTime=Date.now()}}function ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(t);default:return!1}}/**
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
 */async function _P(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
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
 */const vP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wP=/^https?/;async function EP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _P(t);for(const n of e)try{if(TP(n))return}catch{}tn(t,"unauthorized-domain")}function TP(t){const e=gd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wP.test(n))return!1;if(vP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const IP=new fa(3e4,6e4);function ly(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SP(t){return new Promise((e,n)=>{var i,s,o;function r(){ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ly(),n(cn(t,"network-request-failed"))},timeout:IP.get()})}if((s=(i=Sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Sn().gapi)!=null&&o.load)r();else{const l=mR("iframefcb");return Sn()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},AE(`${pR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function AP(t){return Tl=Tl||SP(t),Tl}/**
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
 */const CP=new fa(5e3,15e3),RP="__/auth/iframe",PP="emulator/auth/iframe",kP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xP(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jf(e,PP):`https://${t.config.authDomain}/${RP}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},i=NP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${da(r).slice(1)}`}async function DP(t){const e=await AP(t),n=Sn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:xP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=Sn().setTimeout(()=>{s(o)},CP.get());function u(){Sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const OP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VP=500,LP=600,bP="_blank",MP="http://localhost";class uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FP(t,e,n,r=VP,i=LP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...OP,width:r.toString(),height:i.toString(),top:s,left:o},c=vt().toLowerCase();n&&(l=_E(c)?bP:n),gE(c)&&(e=e||MP,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[S,N])=>`${m}${S}=${N},`,"");if(sR(c)&&l!=="_self")return UP(e||"",l),new uy(null);const p=window.open(e||"",l,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new uy(p)}function UP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jP="__/auth/handler",BP="emulator/auth/handler",zP=encodeURIComponent("fac");async function cy(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:i};if(e instanceof Wf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ma){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${zP}=${encodeURIComponent(u)}`:"";return`${$P(t)}?${da(l).slice(1)}${c}`}function $P({config:t}){return t.emulator?jf(t,BP):`https://${t.authDomain}/${jP}`}/**
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
 */const oh="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VE,this._completeRedirectFn=pP,this._overrideRedirectResult=hP}async _openPopup(e,n,r,i){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await cy(e,n,r,gd(),i);return FP(e,s,qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cy(e,n,r,gd(),i);return KR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DP(e),r=new gP(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[oh];s!==void 0&&n(!!s),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IE()||yE()||zf()}}const WP=HP;var hy="@firebase/auth",dy="1.11.1";/**
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
 */class qP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GP(t){Nn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SE(t)},c=new hR(r,i,s,u);return ER(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new dn("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(r=>new qP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(hy,dy,KP(t)),Jt(hy,dy,"esm2020")}/**
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
 */const QP=5*60,YP=Xw("authIdTokenMaxAge")||QP;let fy=null;const XP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YP)return;const i=n==null?void 0:n.token;fy!==i&&(fy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JP(t=Mf()){const e=Ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wR(t,{popupRedirectResolver:WP,persistence:[nP,HR,VE]}),r=Xw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=XP(s.toString());UR(n,o,()=>o(n.currentUser)),FR(n,l=>o(l))}}const i=Qw("auth");return i&&TR(n,`http://${i}`),n}function ZP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}dR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ZP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GP("Browser");var py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,zE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.F=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(A,R,x){for(var E=Array(arguments.length-2),te=2;te<arguments.length;te++)E[te-2]=arguments[te];return y.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);const A=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)A[R]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(R=0;R<16;++R)A[R]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],R=w.g[2];let x=w.g[3],E;E=y+(x^I&(R^x))+A[0]+3614090360&4294967295,y=I+(E<<7&4294967295|E>>>25),E=x+(R^y&(I^R))+A[1]+3905402710&4294967295,x=y+(E<<12&4294967295|E>>>20),E=R+(I^x&(y^I))+A[2]+606105819&4294967295,R=x+(E<<17&4294967295|E>>>15),E=I+(y^R&(x^y))+A[3]+3250441966&4294967295,I=R+(E<<22&4294967295|E>>>10),E=y+(x^I&(R^x))+A[4]+4118548399&4294967295,y=I+(E<<7&4294967295|E>>>25),E=x+(R^y&(I^R))+A[5]+1200080426&4294967295,x=y+(E<<12&4294967295|E>>>20),E=R+(I^x&(y^I))+A[6]+2821735955&4294967295,R=x+(E<<17&4294967295|E>>>15),E=I+(y^R&(x^y))+A[7]+4249261313&4294967295,I=R+(E<<22&4294967295|E>>>10),E=y+(x^I&(R^x))+A[8]+1770035416&4294967295,y=I+(E<<7&4294967295|E>>>25),E=x+(R^y&(I^R))+A[9]+2336552879&4294967295,x=y+(E<<12&4294967295|E>>>20),E=R+(I^x&(y^I))+A[10]+4294925233&4294967295,R=x+(E<<17&4294967295|E>>>15),E=I+(y^R&(x^y))+A[11]+2304563134&4294967295,I=R+(E<<22&4294967295|E>>>10),E=y+(x^I&(R^x))+A[12]+1804603682&4294967295,y=I+(E<<7&4294967295|E>>>25),E=x+(R^y&(I^R))+A[13]+4254626195&4294967295,x=y+(E<<12&4294967295|E>>>20),E=R+(I^x&(y^I))+A[14]+2792965006&4294967295,R=x+(E<<17&4294967295|E>>>15),E=I+(y^R&(x^y))+A[15]+1236535329&4294967295,I=R+(E<<22&4294967295|E>>>10),E=y+(R^x&(I^R))+A[1]+4129170786&4294967295,y=I+(E<<5&4294967295|E>>>27),E=x+(I^R&(y^I))+A[6]+3225465664&4294967295,x=y+(E<<9&4294967295|E>>>23),E=R+(y^I&(x^y))+A[11]+643717713&4294967295,R=x+(E<<14&4294967295|E>>>18),E=I+(x^y&(R^x))+A[0]+3921069994&4294967295,I=R+(E<<20&4294967295|E>>>12),E=y+(R^x&(I^R))+A[5]+3593408605&4294967295,y=I+(E<<5&4294967295|E>>>27),E=x+(I^R&(y^I))+A[10]+38016083&4294967295,x=y+(E<<9&4294967295|E>>>23),E=R+(y^I&(x^y))+A[15]+3634488961&4294967295,R=x+(E<<14&4294967295|E>>>18),E=I+(x^y&(R^x))+A[4]+3889429448&4294967295,I=R+(E<<20&4294967295|E>>>12),E=y+(R^x&(I^R))+A[9]+568446438&4294967295,y=I+(E<<5&4294967295|E>>>27),E=x+(I^R&(y^I))+A[14]+3275163606&4294967295,x=y+(E<<9&4294967295|E>>>23),E=R+(y^I&(x^y))+A[3]+4107603335&4294967295,R=x+(E<<14&4294967295|E>>>18),E=I+(x^y&(R^x))+A[8]+1163531501&4294967295,I=R+(E<<20&4294967295|E>>>12),E=y+(R^x&(I^R))+A[13]+2850285829&4294967295,y=I+(E<<5&4294967295|E>>>27),E=x+(I^R&(y^I))+A[2]+4243563512&4294967295,x=y+(E<<9&4294967295|E>>>23),E=R+(y^I&(x^y))+A[7]+1735328473&4294967295,R=x+(E<<14&4294967295|E>>>18),E=I+(x^y&(R^x))+A[12]+2368359562&4294967295,I=R+(E<<20&4294967295|E>>>12),E=y+(I^R^x)+A[5]+4294588738&4294967295,y=I+(E<<4&4294967295|E>>>28),E=x+(y^I^R)+A[8]+2272392833&4294967295,x=y+(E<<11&4294967295|E>>>21),E=R+(x^y^I)+A[11]+1839030562&4294967295,R=x+(E<<16&4294967295|E>>>16),E=I+(R^x^y)+A[14]+4259657740&4294967295,I=R+(E<<23&4294967295|E>>>9),E=y+(I^R^x)+A[1]+2763975236&4294967295,y=I+(E<<4&4294967295|E>>>28),E=x+(y^I^R)+A[4]+1272893353&4294967295,x=y+(E<<11&4294967295|E>>>21),E=R+(x^y^I)+A[7]+4139469664&4294967295,R=x+(E<<16&4294967295|E>>>16),E=I+(R^x^y)+A[10]+3200236656&4294967295,I=R+(E<<23&4294967295|E>>>9),E=y+(I^R^x)+A[13]+681279174&4294967295,y=I+(E<<4&4294967295|E>>>28),E=x+(y^I^R)+A[0]+3936430074&4294967295,x=y+(E<<11&4294967295|E>>>21),E=R+(x^y^I)+A[3]+3572445317&4294967295,R=x+(E<<16&4294967295|E>>>16),E=I+(R^x^y)+A[6]+76029189&4294967295,I=R+(E<<23&4294967295|E>>>9),E=y+(I^R^x)+A[9]+3654602809&4294967295,y=I+(E<<4&4294967295|E>>>28),E=x+(y^I^R)+A[12]+3873151461&4294967295,x=y+(E<<11&4294967295|E>>>21),E=R+(x^y^I)+A[15]+530742520&4294967295,R=x+(E<<16&4294967295|E>>>16),E=I+(R^x^y)+A[2]+3299628645&4294967295,I=R+(E<<23&4294967295|E>>>9),E=y+(R^(I|~x))+A[0]+4096336452&4294967295,y=I+(E<<6&4294967295|E>>>26),E=x+(I^(y|~R))+A[7]+1126891415&4294967295,x=y+(E<<10&4294967295|E>>>22),E=R+(y^(x|~I))+A[14]+2878612391&4294967295,R=x+(E<<15&4294967295|E>>>17),E=I+(x^(R|~y))+A[5]+4237533241&4294967295,I=R+(E<<21&4294967295|E>>>11),E=y+(R^(I|~x))+A[12]+1700485571&4294967295,y=I+(E<<6&4294967295|E>>>26),E=x+(I^(y|~R))+A[3]+2399980690&4294967295,x=y+(E<<10&4294967295|E>>>22),E=R+(y^(x|~I))+A[10]+4293915773&4294967295,R=x+(E<<15&4294967295|E>>>17),E=I+(x^(R|~y))+A[1]+2240044497&4294967295,I=R+(E<<21&4294967295|E>>>11),E=y+(R^(I|~x))+A[8]+1873313359&4294967295,y=I+(E<<6&4294967295|E>>>26),E=x+(I^(y|~R))+A[15]+4264355552&4294967295,x=y+(E<<10&4294967295|E>>>22),E=R+(y^(x|~I))+A[6]+2734768916&4294967295,R=x+(E<<15&4294967295|E>>>17),E=I+(x^(R|~y))+A[13]+1309151649&4294967295,I=R+(E<<21&4294967295|E>>>11),E=y+(R^(I|~x))+A[4]+4149444226&4294967295,y=I+(E<<6&4294967295|E>>>26),E=x+(I^(y|~R))+A[11]+3174756917&4294967295,x=y+(E<<10&4294967295|E>>>22),E=R+(y^(x|~I))+A[2]+718787259&4294967295,R=x+(E<<15&4294967295|E>>>17),E=I+(x^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const I=y-this.blockSize,A=this.C;let R=this.h,x=0;for(;x<y;){if(R==0)for(;x<=I;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<y;)if(A[R++]=w.charCodeAt(x++),R==this.blockSize){i(this,A),R=0;break}}else for(;x<y;)if(A[R++]=w[x++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)w[y++]=this.g[I]>>>A&255;return w};function s(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;const I=[];let A=!0;for(let R=w.length-1;R>=0;R--){const x=w[R]|0;A&&x==y||(I[R]=x,A=!1)}this.g=I}var l={};function u(w){return-128<=w&&w<128?s(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(c(-w));const y=[];let I=1;for(let A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(d(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(y,8));let A=p;for(let x=0;x<w.length;x+=8){var R=Math.min(8,w.length-x);const E=parseInt(w.substring(x,x+R),y);R<8?(R=c(Math.pow(y,R)),A=A.j(R).add(c(E))):(A=A.j(I),A=A.add(c(E)))}return A}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();let w=0,y=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);w+=(A>=0?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(P(this))return"-"+k(this).toString(w);const y=c(Math.pow(w,6));var I=this;let A="";for(;;){const R=V(I,y).g;I=v(I,R.j(y));let x=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=R,N(I))return x+A;for(;x.length<6;)x="0"+x;A=x+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=v(this,w),P(w)?-1:N(w)?0:1};function k(w){const y=w.g.length,I=[];for(let A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return P(this)?k(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),I=[];let A=0;for(let R=0;R<=y;R++){let x=A+(this.i(R)&65535)+(w.i(R)&65535),E=(x>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,x&=65535,E&=65535,I[R]=E<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function v(w,y){return w.add(k(y))}t.j=function(w){if(N(this)||N(w))return p;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(this.l(S)<0&&w.l(S)<0)return c(this.m()*w.m());const y=this.g.length+w.g.length,I=[];for(var A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<w.g.length;R++){const x=this.i(A)>>>16,E=this.i(A)&65535,te=w.i(R)>>>16,Te=w.i(R)&65535;I[2*A+2*R]+=E*Te,_(I,2*A+2*R),I[2*A+2*R+1]+=x*Te,_(I,2*A+2*R+1),I[2*A+2*R+1]+=E*te,_(I,2*A+2*R+1),I[2*A+2*R+2]+=x*te,_(I,2*A+2*R+2)}for(w=0;w<y;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=y;w<2*y;w++)I[w]=0;return new o(I,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function V(w,y){if(N(y))throw Error("division by zero");if(N(w))return new T(p,p);if(P(w))return y=V(k(w),y),new T(k(y.g),k(y.h));if(P(y))return y=V(w,k(y)),new T(k(y.g),y.h);if(w.g.length>30){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;A.l(w)<=0;)I=M(I),A=M(A);var R=F(I,1),x=F(A,1);for(A=F(A,2),I=F(I,2);!N(A);){var E=x.add(A);E.l(w)<=0&&(R=R.add(I),x=E),A=F(A,1),I=F(I,1)}return y=v(w,R.j(y)),new T(R,y)}for(R=p;w.l(y)>=0;){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),x=c(I),E=x.j(y);P(E)||E.l(w)>0;)I-=A,x=c(I),E=x.j(y);N(x)&&(x=m),R=R.add(x),w=v(w,E)}return new T(R,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function M(w){const y=w.g.length+1,I=[];for(let A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function F(w,y){const I=y>>5;y%=32;const A=w.g.length-I,R=[];for(let x=0;x<A;x++)R[x]=y>0?w.i(x+I)>>>y|w.i(x+I+1)<<32-y:w.i(x+I);return new o(R,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,zE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Pr=o}).apply(typeof py<"u"?py:typeof self<"u"?self:typeof window<"u"?window:{});var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $E,ho,HE,Il,wd,WE,qE,KE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Za=="object"&&Za];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in f))break e;f=f[O]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,O,L){for(var z=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)z[ne-2]=arguments[ne];return h.prototype[O].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let g=1;g<arguments.length;g++){const O=arguments[g];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const L=O.length||0;a.length=f+L;for(let z=0;z<L;z++)a[f+z]=O[z]}else a.push(O)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function v(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const g=T.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,w=new _,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(I)}};function I(){for(var a;a=v();){try{a.h.call(a.g)}catch(f){k(f)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function te(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(te,R),te.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Te="closure_listenable_"+(Math.random()*1e6|0),be=0;function wt(a,h,f,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=O,this.key=++be,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function K(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function W(a){const h={};for(const f in a)h[f]=a[f];return h}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qt(a,h){let f,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(f in g)a[f]=g[f];for(let L=0;L<ge.length;L++)f=ge[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function q(a){this.src=a,this.g={},this.h=0}q.prototype.add=function(a,h,f,g,O){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const z=Ke(a,h,g,O);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new wt(h,this.src,L,!!g,O),h.fa=f,a.push(h)),h};function Ue(a,h){const f=h.type;if(f in a.g){var g=a.g[f],O=Array.prototype.indexOf.call(g,h,void 0),L;(L=O>=0)&&Array.prototype.splice.call(g,O,1),L&&(B(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ke(a,h,f,g){for(let O=0;O<a.length;++O){const L=a[O];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==g)return O}return-1}var Rt="closure_lm_"+(Math.random()*1e6|0),Os={};function Ia(a,h,f,g,O){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Ia(a,h[L],f,g,O);return null}return f=pn(f),a&&a[Te]?a.J(h,f,l(g)?!!g.capture:!1,O):cc(a,h,f,!1,g,O)}function cc(a,h,f,g,O,L){if(!h)throw Error("Invalid event type");const z=l(O)?!!O.capture:!!O;let ne=pe(a);if(ne||(a[Rt]=ne=new q(a)),f=ne.add(h,f,g,z,L),f.proxy)return f;if(g=hc(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)x||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(ce(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function hc(){function a(f){return h.call(a.src,a.listener,f)}const h=fe;return a}function _e(a,h,f,g,O){if(Array.isArray(h))for(var L=0;L<h.length;L++)_e(a,h[L],f,g,O);else g=l(g)?!!g.capture:!!g,f=pn(f),a&&a[Te]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],f=Ke(h,f,g,O),f>-1&&(B(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=pe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ke(h,f,g,O)),(f=a>-1?h[a]:null)&&de(f))}function de(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Te])Ue(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(ce(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=pe(h))?(Ue(f,a),f.h==0&&(f.src=null,h[Rt]=null)):B(a)}}}function ce(a){return a in Os?Os[a]:Os[a]="on"+a}function fe(a,h){if(a.da)a=!0;else{h=new te(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&de(a),a=f.call(g,h)}return a}function pe(a){return a=a[Rt],a instanceof q?a:null}var ht="__closure_events_fn_"+(Math.random()*1e9>>>0);function pn(a){return typeof a=="function"?a:(a[ht]||(a[ht]=function(h){return a.handleEvent(h)}),a[ht])}function ke(){A.call(this),this.i=new q(this),this.M=this,this.G=null}p(ke,A),ke.prototype[Te]=!0,ke.prototype.removeEventListener=function(a,h,f,g){_e(this,a,h,f,g)};function je(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var O=h;h=new R(g,a),qt(h,O)}O=!0;let L,z;if(f)for(z=f.length-1;z>=0;z--)L=h.g=f[z],O=le(L,g,!0,h)&&O;if(L=h.g=a,O=le(L,g,!0,h)&&O,O=le(L,g,!1,h)&&O,f)for(z=0;z<f.length;z++)L=h.g=f[z],O=le(L,g,!1,h)&&O}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)B(f[g]);delete a.g[h],a.h--}}this.G=null},ke.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ke.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function le(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let L=0;L<h.length;++L){const z=h[L];if(z&&!z.da&&z.capture==f){const ne=z.listener,Ge=z.ha||z.src;z.fa&&Ue(a.i,z),O=ne.call(Ge,g)!==!1&&O}}return O&&!g.defaultPrevented}function Ie(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Ne(a){a.g=Ie(()=>{a.g=null,a.i&&(a.i=!1,Ne(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ne(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(a){A.call(this),this.h=a,this.g={}}p(ve,A);var Pt=[];function Vs(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&de(h)},a),a.g={}}ve.prototype.N=function(){ve.Z.N.call(this),Vs(this)},ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mn=o.JSON.stringify,JI=o.JSON.parse,ZI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bp(){}function Mp(){}var Ls={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function dc(){R.call(this,"d")}p(dc,R);function fc(){R.call(this,"c")}p(fc,R);var Gr={},Fp=null;function Sa(){return Fp=Fp||new ke}Gr.Ia="serverreachability";function Up(a){R.call(this,Gr.Ia,a)}p(Up,R);function bs(a){const h=Sa();je(h,new Up(h))}Gr.STAT_EVENT="statevent";function jp(a,h){R.call(this,Gr.STAT_EVENT,a),this.stat=h}p(jp,R);function Et(a){const h=Sa();je(h,new jp(h,a))}Gr.Ja="timingevent";function Bp(a,h){R.call(this,Gr.Ja,a),this.size=h}p(Bp,R);function Ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.ua=function(){this.g=!1};function e0(a,h,f,g,O,L){a.info(function(){if(a.g)if(L){var z="",ne=L.split("&");for(let we=0;we<ne.length;we++){var Ge=ne[we].split("=");if(Ge.length>1){const tt=Ge[0];Ge=Ge[1];const yn=tt.split("_");z=yn.length>=2&&yn[1]=="type"?z+(tt+"="+Ge+"&"):z+(tt+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+f+`
`+z})}function t0(a,h,f,g,O,L,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+f+`
`+L+" "+z})}function Di(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+r0(a,f)+(g?" "+g:"")})}function n0(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function r0(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var f=L[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var O=g[0];if(O!="noop"&&O!="stop"&&O!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return mn(L)}catch{return h}}var Aa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$p;function pc(){}p(pc,bp),pc.prototype.g=function(){return new XMLHttpRequest},$p=new pc;function Us(a){return encodeURIComponent(String(a))}function i0(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Zn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new ve(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var Wp={},mc={};function gc(a,h,f){a.M=1,a.A=Ra(gn(h)),a.u=f,a.R=!0,qp(a,null)}function qp(a,h){a.F=Date.now(),Ca(a),a.B=gn(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),sm(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Hp,a.g=Im(a.j,f?h:null,!a.u),a.P>0&&(a.O=new re(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(Pt[0]=O.toString()),O=Pt);for(let L=0;L<O.length;L++){const z=Ia(f,O[L],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?W(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),bs(),e0(a.i,a.v,a.B,a.l,a.S,a.u)}Zn.prototype.ba=function(a){a=a.target;const h=this.O;h&&nr(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const ne=nr(this.g),Ge=this.g.ya(),we=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||dm(this.g)))){this.K||ne!=4||Ge==7||(Ge==8||we<=0?bs(3):bs(2)),yc(this);var h=this.g.ca();this.X=h;var f=s0(this);if(this.o=h==200,t0(this.i,this.v,this.B,this.l,this.S,ne,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,O=this.g;if((g=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var L=g;break t}}L=null}if(a=L)Di(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_c(this,a);else{this.o=!1,this.m=3,Et(12),Qr(this),js(this);break e}}if(this.R){a=!0;let tt;for(;!this.K&&this.C<f.length;)if(tt=o0(this,f),tt==mc){ne==4&&(this.m=4,Et(14),a=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Wp){this.m=4,Et(15),Di(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Di(this.i,this.l,tt,null),_c(this,tt);if(Kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||f.length!=0||this.h.h||(this.m=1,Et(16),a=!1),this.o=this.o&&a,!a)Di(this.i,this.l,f,"[Invalid Chunked Response]"),Qr(this),js(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Cc(z),z.P=!0,Et(11))}}else Di(this.i,this.l,f,null),_c(this,f);ne==4&&Qr(this),this.o&&!this.K&&(ne==4?vm(this.j,this):(this.o=!1,Ca(this)))}else w0(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),Qr(this),js(this)}}}catch{}finally{}};function s0(a){if(!Kp(a))return a.g.la();const h=dm(a.g);if(h==="")return"";let f="";const g=h.length,O=nr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Qr(a),js(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<g;L++)a.h.h=!0,f+=a.h.i.decode(h[L],{stream:!(O&&L==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Kp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function o0(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?mc:(f=Number(h.substring(f,g)),isNaN(f)?Wp:(g+=1,g+f>h.length?mc:(h=h.slice(g,g+f),a.C=g+f,h)))}Zn.prototype.cancel=function(){this.K=!0,Qr(this)};function Ca(a){a.T=Date.now()+a.H,Gp(a,a.H)}function Gp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ms(c(a.aa,a),h)}function yc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(n0(this.i,this.B),this.M!=2&&(bs(),Et(17)),Qr(this),this.m=2,js(this)):Gp(this,this.T-a)};function js(a){a.j.I==0||a.K||vm(a.j,a)}function Qr(a){yc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Vs(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _c(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||vc(f.h,a))){if(!a.L&&vc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Da(f),Na(f);else break e;Ac(f),Et(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ms(c(f.Va,f),6e3));Xp(f.h)<=1&&f.ta&&(f.ta=void 0)}else Xr(f,11)}else if((a.L||f.g==a)&&Da(f),!E(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let we=O[h];const tt=we[0];if(!(tt<=f.K))if(f.K=tt,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const yn=we[3];yn!=null&&(f.ka=yn,f.j.info("VER="+f.ka));const Jr=we[4];Jr!=null&&(f.za=Jr,f.j.info("SVER="+f.za));const rr=we[5];rr!=null&&typeof rr=="number"&&rr>0&&(g=1.5*rr,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ir=a.g;if(ir){const Va=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Va){var L=g.h;L.g||Va.indexOf("spdy")==-1&&Va.indexOf("quic")==-1&&Va.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(wc(L,L.h),L.h=null))}if(g.G){const Rc=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(g.wa=Rc,Se(g.J,g.G,Rc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=Tm(g,g.L?g.ba:null,g.W),z.L){Jp(g.h,z);var ne=z,Ge=g.O;Ge&&(ne.H=Ge),ne.D&&(yc(ne),Ca(ne)),g.g=z}else ym(g);f.i.length>0&&xa(f)}else we[0]!="stop"&&we[0]!="close"||Xr(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Xr(f,7):Sc(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}bs(4)}catch{}}var a0=class{constructor(a,h){this.g=a,this.map=h}};function Qp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xp(a){return a.h?1:a.g?a.g.size:0}function vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function Jp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qp.prototype.cancel=function(){if(this.i=Zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l0(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let O,L=null;g>=0?(O=a[f].substring(0,g),L=a[f].substring(g+1)):O=a[f],h(O,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof er?(this.l=a.l,Bs(this,a.j),this.o=a.o,this.g=a.g,zs(this,a.u),this.h=a.h,Ec(this,om(a.i)),this.m=a.m):a&&(h=String(a).match(em))?(this.l=!1,Bs(this,h[1]||"",!0),this.o=$s(h[2]||""),this.g=$s(h[3]||"",!0),zs(this,h[4]),this.h=$s(h[5]||"",!0),Ec(this,h[6]||"",!0),this.m=$s(h[7]||"")):(this.l=!1,this.i=new Ws(null,this.l))}er.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Hs(h,tm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,tm,!0),"@"),a.push(Us(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Hs(f,f.charAt(0)=="/"?h0:c0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Hs(f,f0)),a.join("")},er.prototype.resolve=function(a){const h=gn(this);let f=!!a.j;f?Bs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)zs(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var O=h.h.lastIndexOf("/");O!=-1&&(g=h.h.slice(0,O+1)+g)}if(O=g,O==".."||O==".")g="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){g=O.lastIndexOf("/",0)==0,O=O.split("/");const L=[];for(let z=0;z<O.length;){const ne=O[z++];ne=="."?g&&z==O.length&&L.push(""):ne==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),g&&z==O.length&&L.push("")):(L.push(ne),g=!0)}g=L.join("/")}else g=O}return f?h.h=g:f=a.i.toString()!=="",f?Ec(h,om(a.i)):f=!!a.m,f&&(h.m=a.m),h};function gn(a){return new er(a)}function Bs(a,h,f){a.j=f?$s(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function zs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ec(a,h,f){h instanceof Ws?(a.i=h,p0(a.i,a.l)):(f||(h=Hs(h,d0)),a.i=new Ws(h,a.l))}function Se(a,h,f){a.i.set(h,f)}function Ra(a){return Se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function $s(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,u0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function u0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tm=/[#\/\?@]/g,c0=/[#\?:]/g,h0=/[#\?]/g,d0=/[#\?@]/g,f0=/#/g;function Ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&l0(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ws.prototype,t.add=function(a,h){Yr(this),this.i=null,a=Oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function nm(a,h){Yr(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rm(a,h){return Yr(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Yr(this),this.g.forEach(function(f,g){f.forEach(function(O){a.call(h,O,g,this)},this)},this)};function im(a,h){Yr(a);let f=[];if(typeof h=="string")rm(a,h)&&(f=f.concat(a.g.get(Oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Yr(this),this.i=null,a=Oi(this,a),rm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=im(this,a),a.length>0?String(a[0]):h):h};function sm(a,h,f){nm(a,h),f.length>0&&(a.i=null,a.g.set(Oi(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const O=Us(f);f=im(this,f);for(let L=0;L<f.length;L++){let z=O;f[L]!==""&&(z+="="+Us(f[L])),a.push(z)}}return this.i=a.join("&")};function om(a){const h=new Ws;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function p0(a,h){h&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(f,g){const O=g.toLowerCase();g!=O&&(nm(this,g),sm(this,O,f))},a)),a.j=h}function m0(a,h){const f=new Fs;if(o.Image){const g=new Image;g.onload=d(tr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(tr,f,"TestLoadImage: error",!1,h,g),g.onabort=d(tr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(tr,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function g0(a,h){const f=new Fs,g=new AbortController,O=setTimeout(()=>{g.abort(),tr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(O),L.ok?tr(f,"TestPingServer: ok",!0,h):tr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),tr(f,"TestPingServer: error",!1,h)})}function tr(a,h,f,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(f)}catch{}}function y0(){this.g=new ZI}function Tc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Tc,bp),Tc.prototype.g=function(){return new Pa(this.i,this.h)};function Pa(a,h){ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Pa,ke),t=Pa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;am(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function am(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Ks(this),this.readyState==3&&am(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Na=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ks(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lm(a){let h="";return Q(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ic(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=lm(f),typeof a=="string"?f!=null&&Us(f):Se(a,h,f))}function Me(a){ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Me,ke);var _0=/^https?$/i,v0=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$p.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){um(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)f.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(v0,h,void 0)>=0)||g||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of f)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){um(this,L)}};function um(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,cm(a),ka(a)}function cm(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?hm(this):this.Xa())},t.Xa=function(){hm(this)};function hm(a){if(a.h&&typeof s<"u"){if(a.v&&nr(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),nr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=L===0){let z=String(a.D).match(em)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!_0.test(z?z.toLowerCase():"")}f=g}if(f)je(a,"complete"),je(a,"success");else{a.o=6;try{var O=nr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",cm(a)}}finally{ka(a)}}}}function ka(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||je(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),JI(h)}};function dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function w0(a){const h={};a=(a.g&&nr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=i0(a[g]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[O]||[];h[O]=L,L.push(f)}K(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fm(a){this.za=0,this.i=[],this.j=new Fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gs("baseRetryDelayMs",5e3,a),this.Za=Gs("retryDelaySeedMs",1e4,a),this.Ta=Gs("forwardChannelMaxRetries",2,a),this.va=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qp(a&&a.concurrentRequestLimit),this.Ba=new y0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=fm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){Et(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Tm(this,null,this.W),xa(this)};function Sc(a){if(pm(a),a.I==3){var h=a.V++,f=gn(a.J);if(Se(f,"SID",a.M),Se(f,"RID",h),Se(f,"TYPE","terminate"),Qs(a,f),h=new Zn(a,a.j,h),h.M=2,h.A=Ra(gn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Im(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ca(h)}Em(a)}function Na(a){a.g&&(Cc(a),a.g.cancel(),a.g=null)}function pm(a){Na(a),a.v&&(o.clearTimeout(a.v),a.v=null),Da(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function xa(a){if(!Yp(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),F||(M(),F=!0),w.add(h,a),a.D=0}}function E0(a,h){return Xp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ms(c(a.Ea,a,h),wm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Zn(this,this.j,a);let L=this.o;if(this.U&&(L?(L=W(L),qt(L,this.U)):L=this.U),this.u!==null||this.R||(O.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gm(this,O,h),f=gn(this.J),Se(f,"RID",a),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),Qs(this,f),L&&(this.R?h="headers="+Us(lm(L))+"&"+h:this.u&&Ic(f,this.u,L)),wc(this.h,O),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",h),Se(f,"SID","null"),O.U=!0,gc(O,f,null)):gc(O,f,h),this.I=2}}else this.I==3&&(a?mm(this,a):this.i.length==0||Yp(this.h)||mm(this))};function mm(a,h){var f;h?f=h.l:f=a.V++;const g=gn(a.J);Se(g,"SID",a.M),Se(g,"RID",f),Se(g,"AID",a.K),Qs(a,g),a.u&&a.o&&Ic(g,a.u,a.o),f=new Zn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=gm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wc(a.h,f),gc(f,g,h)}function Qs(a,h){a.H&&Q(a.H,function(f,g){Se(h,g,f)}),a.l&&Q({},function(f,g){Se(h,g,f)})}function gm(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ne=-1;for(;;){const Ge=["count="+f];ne==-1?f>0?(ne=O[0].g,Ge.push("ofs="+ne)):ne=0:Ge.push("ofs="+ne);let we=!0;for(let tt=0;tt<f;tt++){var L=O[tt].g;const yn=O[tt].map;if(L-=ne,L<0)ne=Math.max(0,O[tt].g-100),we=!1;else try{L="req"+L+"_"||"";try{var z=yn instanceof Map?yn:Object.entries(yn);for(const[Jr,rr]of z){let ir=rr;l(rr)&&(ir=mn(rr)),Ge.push(L+Jr+"="+encodeURIComponent(ir))}}catch(Jr){throw Ge.push(L+"type="+encodeURIComponent("_badmap")),Jr}}catch{g&&g(yn)}}if(we){z=Ge.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function ym(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),F||(M(),F=!0),w.add(h,a),a.A=0}}function Ac(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ms(c(a.Da,a),wm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ms(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Na(this),_m(this))};function Cc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _m(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=gn(a.na);Se(h,"RID","rpc"),Se(h,"SID",a.M),Se(h,"AID",a.K),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Se(h,"TO",a.ia),Se(h,"TYPE","xmlhttp"),Qs(a,h),a.u&&a.o&&Ic(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ra(gn(h)),f.u=null,f.R=!0,qp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Na(this),Ac(this),Et(19))};function Da(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function vm(a,h){var f=null;if(a.g==h){Da(a),Cc(a),a.g=null;var g=2}else if(vc(a.h,h))f=h.G,Jp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;g=Sa(),je(g,new Bp(g,f)),xa(a)}else ym(a);else if(O=h.m,O==3||O==0&&h.X>0||!(g==1&&E0(a,h)||g==2&&Ac(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function wm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const O=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Bs(g,"https"),Ra(g),O?m0(g.toString(),f):g0(g.toString(),f)}else Et(2);a.I=0,a.l&&a.l.pa(h),Em(a),pm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Em(a){if(a.I=0,a.ja=[],a.l){const h=Zp(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Tm(a,h,f){var g=f instanceof er?gn(f):new er(f);if(g.g!="")h&&(g.g=h+"."+g.g),zs(g,g.u);else{var O=o.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const L=new er(null);g&&Bs(L,g),h&&(L.g=h),O&&zs(L,O),f&&(L.h=f),g=L}return f=a.G,h=a.wa,f&&h&&Se(g,f,h),Se(g,"VER",a.ka),Qs(a,g),g}function Im(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Me(new Tc({ab:f})):new Me(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oa(){}Oa.prototype.g=function(a,h){return new bt(a,h)};function bt(a,h){ke.call(this),this.g=new fm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vi(this)}p(bt,ke),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Sc(this.g)},bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=mn(a),a=f);h.i.push(new a0(h.Ya++,a)),h.I==3&&xa(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,bt.Z.N.call(this)};function Am(a){dc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Am,dc);function Cm(){fc.call(this),this.status=1}p(Cm,fc);function Vi(a){this.g=a}p(Vi,Sm),Vi.prototype.ra=function(){je(this.g,"a")},Vi.prototype.qa=function(a){je(this.g,new Am(a))},Vi.prototype.pa=function(a){je(this.g,new Cm)},Vi.prototype.oa=function(){je(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,KE=function(){return new Oa},qE=function(){return Sa()},WE=Gr,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Aa.NO_ERROR=0,Aa.TIMEOUT=8,Aa.HTTP_ERROR=6,Il=Aa,zp.COMPLETE="complete",HE=zp,Mp.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",ke.prototype.listen=ke.prototype.J,ho=Mp,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,$E=Me}).apply(typeof Za<"u"?Za:typeof self<"u"?self:typeof window<"u"?window:{});const my="@firebase/firestore",gy="4.9.2";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Ps="12.3.0";/**
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
 */const vi=new ju("@firebase/firestore");function bi(){return vi.logLevel}function $(t,...e){if(vi.logLevel<=se.DEBUG){const n=e.map(Gf);vi.debug(`Firestore (${Ps}): ${t}`,...n)}}function Yn(t,...e){if(vi.logLevel<=se.ERROR){const n=e.map(Gf);vi.error(`Firestore (${Ps}): ${t}`,...n)}}function gs(t,...e){if(vi.logLevel<=se.WARN){const n=e.map(Gf);vi.warn(`Firestore (${Ps}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{/**
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,GE(t,r,n)}function GE(t,e,n){let r=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function me(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||GE(e,i,r)}function ee(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class QE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new QE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class rk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ik{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new rk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ok(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ok(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ah(i)===ah(s)?oe(i,s):ah(i)?1:-1}return oe(t.length,e.length)}const ak=55296,lk=57343;function ah(t){const e=t.charCodeAt(0);return e>=ak&&e<=lk}function ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const _y="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return oe(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),i=wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pr.fromString(e.substring(4,e.length-2))}}class De extends wn{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends wn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return uk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_y}static keyField(){return new at([_y])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */function ck(t,e,n){if(!n)throw new G(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hk(t,e,n,r){if(e===!0&&r===!0)throw new G(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vy(t){if(!Y.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function YE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yf(t);throw new G(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function ya(t,e){if(!YE(t))throw new G(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const wy=-62135596800,Ey=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ey);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wy)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ey}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ya(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:We("string",Ce._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ce(0,0))}static max(){return new Z(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jo=-1;function dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Vr(i,Y.empty(),e)}function fk(t){return new Vr(t.readTime,t.key,Jo)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(Z.min(),Y.empty(),Jo)}static max(){return new Vr(Z.max(),Y.empty(),Jo)}}function pk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ks(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==mk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hu.ce=-1;/**
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
 */const Xf=-1;function Wu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function _k(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const XE="";function vk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ty(e)),e=wk(t.get(n),e);return Ty(e)}function wk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case XE:n+="";break;default:n+=s}}return n}function Ty(t){return t+XE+""}/**
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
 */function Iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}}class el{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sy(this.data.getIterator())}getIteratorFrom(e){return new Sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Ze(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZE("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=Ek.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */const eT="server_timestamp",tT="__type__",nT="__previous_value__",rT="__local_write_time__";function Jf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tT])==null?void 0:r.stringValue)===eT}function qu(t){const e=t.mapValue.fields[nT];return Jf(e)?qu(e):e}function Zo(t){const e=Lr(t.mapValue.fields[rT].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class Tk{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const lu="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const iT="__type__",Ik="__max__",tl={mapValue:{}},sT="__vector__",uu="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:Ak(t)?9007199254740991:Sk(t)?10:11:J(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return br(i.bytesValue).isEqual(br(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?au(o)===au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iy(o)!==Iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function ta(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ay(t.timestampValue,e.timestampValue);case 4:return Ay(Zo(t),Zo(e));case 5:return Ed(t.stringValue,e.stringValue);case 6:return function(s,o){const l=br(s),u=br(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=oe(l[c],u[c]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Be(s.latitude),Be(o.latitude));return l!==0?l:oe(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Cy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,S,N,P;const l=s.fields||{},u=o.fields||{},c=(m=l[uu])==null?void 0:m.arrayValue,d=(S=u[uu])==null?void 0:S.arrayValue,p=oe(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:Cy(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===tl.mapValue&&o===tl.mapValue)return 0;if(s===tl.mapValue)return 1;if(o===tl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Ed(u[p],d[p]);if(m!==0)return m;const S=_s(l[u[p]],c[d[p]]);if(S!==0)return S}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function Ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Lr(t),r=Lr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Cy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_s(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function vs(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Sl(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qu(t);return e?16+Sl(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Sl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return qr(r.fields,(s,o)=>{i+=s.length+Sl(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Id(t){return!!t&&"integerValue"in t}function Zf(t){return!!t&&"arrayValue"in t}function Ry(t){return!!t&&"nullValue"in t}function Py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function Sk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[iT])==null?void 0:r.stringValue)===sT}function Ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return{...t}}function Ak(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ik}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Ro(this.value))}}function oT(t){const e=[];return qr(t.fields,(n,r)=>{const i=new at([n]);if(Al(r)){const s=oT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
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
 */class yt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ny(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ck(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class aT{}class Ye extends aT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Pk(e,n,r):n==="array-contains"?new xk(e,r):n==="in"?new Dk(e,r):n==="not-in"?new Ok(e,r):n==="array-contains-any"?new Vk(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kk(e,r):new Nk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_s(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends aT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return lT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lT(t){return t.op==="and"}function uT(t){return Rk(t)&&lT(t)}function Rk(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Sd(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(uT(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function cT(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&cT(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function hT(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(hT).join(" ,")+"}"}(t):"Filter"}class Pk extends Ye{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class kk extends Ye{constructor(e,n){super(e,"in",n),this.keys=dT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nk extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=dT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class xk extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zf(n)&&ta(n.arrayValue,this.value)}}class Dk extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class Ok extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ta(this.value.arrayValue,n)}}class Vk extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
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
 */class Lk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function xy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lk(t,e,n,r,i,s,o)}function ep(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.Te=n}return e.Te}function tp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ck(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ny(t.startAt,e.startAt)&&Ny(t.endAt,e.endAt)}function Ad(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ku{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bk(t,e,n,r,i,s,o,l){return new Ku(t,e,n,r,i,s,o,l)}function np(t){return new Ku(t)}function Dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mk(t){return t.collectionGroup!==null}function Po(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new hu(s,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new hu(at.keyField(),r))}return e.Ie}function An(t){const e=ee(t);return e.Ee||(e.Ee=Fk(e,Po(t))),e.Ee}function Fk(t,e){if(t.limitType==="F")return xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hu(i.field,s)});const n=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;return xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e,n){return new Ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gu(t,e){return tp(An(t),An(e))&&t.limitType===e.limitType}function fT(t){return`${ep(An(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hT(i)).join(", ")}]`),Wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Qu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Po(r),i)||r.endAt&&!function(o,l,u){const c=ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Po(r),i))}(t,e)}function Uk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pT(t){return(e,n)=>{let r=!1;for(const i of Po(t)){const s=jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?_s(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return JE(this.inner)}size(){return this.innerSize}}/**
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
 */const Bk=new Le(Y.comparator);function Xn(){return Bk}const mT=new Le(Y.comparator);function fo(...t){let e=mT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=mT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ai(){return ko()}function yT(){return ko()}function ko(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const zk=new Le(Y.comparator),$k=new Ze(Y.comparator);function ae(...t){let e=$k;for(const n of t)e=e.add(n);return e}const Hk=new Ze(oe);function Wk(){return Hk}/**
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
 */function rp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function qk(t,e){return _k(e)?_T(e):rp(t,e)}/**
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
 */class Yu{constructor(){this._=void 0}}function Kk(t,e,n){return t instanceof du?function(i,s){const o={fields:{[tT]:{stringValue:eT},[rT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jf(s)&&(s=qu(s)),s&&(o.fields[nT]=s),{mapValue:o}}(n,e):t instanceof na?wT(t,e):t instanceof ra?ET(t,e):function(i,s){const o=vT(i,s),l=Oy(o)+Oy(i.Ae);return Id(o)&&Id(i.Ae)?_T(l):rp(i.serializer,l)}(t,e)}function Gk(t,e,n){return t instanceof na?wT(t,e):t instanceof ra?ET(t,e):n}function vT(t,e){return t instanceof fu?function(r){return Id(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class du extends Yu{}class na extends Yu{constructor(e){super(),this.elements=e}}function wT(t,e){const n=TT(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends Yu{constructor(e){super(),this.elements=e}}function ET(t,e){let n=TT(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class fu extends Yu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Oy(t){return Be(t.integerValue||t.doubleValue)}function TT(t){return Zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?ys(r.elements,i.elements,xn):r instanceof fu&&i instanceof fu?xn(r.Ae,i.Ae):r instanceof du&&i instanceof du}(t.transform,e.transform)}class Yk{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function IT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AT(t.key,Cn.none()):new _a(t.key,t.data,Cn.none());{const n=t.data,r=xt.empty();let i=new Ze(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new jt(i.toArray()),Cn.none())}}function Xk(t,e,n){t instanceof _a?function(i,s,o){const l=i.value.clone(),u=Ly(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!Cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ly(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ST(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof _a?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=s.value.clone(),d=by(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,l,u){if(!Cl(s.precondition,o))return l;const c=by(s.fieldTransforms,u,o),d=o.data;return d.setAll(ST(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vT(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function Vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ys(r,i,(s,o)=>Qk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _a extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ST(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ly(t,e,n){const r=new Map;me(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Gk(o,l,n[i]))}return r}function by(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Kk(s,o,e))}return r}class AT extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zk extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Xk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=IT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>Vy(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>Vy(n,r))}}class ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return zk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ip(e,n,r,i)}}/**
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
 */class tN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ue;function rN(t){switch(t){case U.OK:return J(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function CT(t){if(t===void 0)return Yn("GRPC error has no .code"),U.UNKNOWN;switch(t){case $e.OK:return U.OK;case $e.CANCELLED:return U.CANCELLED;case $e.UNKNOWN:return U.UNKNOWN;case $e.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case $e.INTERNAL:return U.INTERNAL;case $e.UNAVAILABLE:return U.UNAVAILABLE;case $e.UNAUTHENTICATED:return U.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case $e.NOT_FOUND:return U.NOT_FOUND;case $e.ALREADY_EXISTS:return U.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return U.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case $e.ABORTED:return U.ABORTED;case $e.OUT_OF_RANGE:return U.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return U.UNIMPLEMENTED;case $e.DATA_LOSS:return U.DATA_LOSS;default:return J(39323,{code:t})}}(ue=$e||($e={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iN(){return new TextEncoder}/**
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
 */const sN=new Pr([4294967295,4294967295],0);function My(t){const e=iN().encode(t),n=new zE;return n.update(e),new Uint8Array(n.digest())}function Fy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Pr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(sN)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=My(e),[r,i]=Fy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=My(e),[r,i]=Fy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ju(Z.min(),i,new Le(oe),Xn(),ae())}}class va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new va(r,n,ae(),ae(),ae())}}/**
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
 */class Rl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class RT{constructor(e,n){this.targetId=e,this.Ce=n}}class PT{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uy{constructor(){this.ve=0,this.Fe=jy(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new va(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=jy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class oN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xn(),this.Je=nl(),this.He=nl(),this.Ye=new Le(oe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ad(s))if(r===0){const o=new Y(s.path);this.et(n,o,yt.newNoDocument(o,Z.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(u){if(u instanceof ZE)return gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sp(o,i,s)}catch(u){return gs(u instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ad(l.target)){const u=new Y(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,yt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ae();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ju(e,n,this.Ye,this.je,r);return this.je=Xn(),this.Je=nl(),this.He=nl(),this.Ye=new Le(oe),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Uy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ze(oe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Uy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nl(){return new Le(Y.comparator)}function jy(){return new Le(Y.comparator)}const aN={asc:"ASCENDING",desc:"DESCENDING"},lN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uN={and:"AND",or:"OR"};class cN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Wu(e)?e:{value:e}}function pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hN(t,e){return pu(t,e.toTimestamp())}function Rn(t){return me(!!t,49232),Z.fromTimestamp(function(n){const r=Lr(n);return new Ce(r.seconds,r.nanos)}(t))}function op(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NT(t){const e=De.fromString(t);return me(LT(e),10190,{key:e.toString()}),e}function kd(t,e){return op(t.databaseId,e.path)}function lh(t,e){const n=NT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(DT(n))}function xT(t,e){return op(t.databaseId,e)}function dN(t){const e=NT(t);return e.length===4?De.emptyPath():DT(e)}function Nd(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DT(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function By(t,e,n){return{name:kd(t,e),fields:n.value.mapValue.fields}}function fN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string",58123),ct.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?U.UNKNOWN:CT(c.code);return new G(d,c.message||"")}(o);n=new PT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):Z.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Rl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?Rn(r.readTime):Z.min(),o=yt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new Rl([],s,i,null)}else{if(!("filter"in e))return J(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nN(i,s),l=r.targetId;n=new RT(l,o)}}return n}function pN(t,e){let n;if(e instanceof _a)n={update:By(t,e.key,e.value)};else if(e instanceof AT)n={delete:kd(t,e.key)};else if(e instanceof Kr)n={update:By(t,e.key,e.data),updateMask:IN(e.fieldMask)};else{if(!(e instanceof Zk))return J(16599,{Vt:e.type});n={verify:kd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function mN(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Rn(i.updateTime):Rn(s);return o.isEqual(Z.min())&&(o=Rn(s)),new Yk(o,i.transformResults||[])}(n,e))):[]}function gN(t,e){return{documents:[xT(t,e.path)]}}function yN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xT(t,i);const s=function(c){if(c.length!==0)return VT(Dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Fi(m.field),direction:wN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function _N(t){let e=dN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=OT(p);return m instanceof Dn&&uT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(N){return new hu(Ui(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Wu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new cu(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new cu(S,m)}(n.endAt)),bk(e,i,o,s,l,"F",u,c)}function vN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ui(n.unaryFilter.field);return Ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>OT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function wN(t){return aN[t]}function EN(t){return lN[t]}function TN(t){return uN[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return at.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Py(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(Ry(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Py(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(Ry(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:EN(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>VT(i));return r.length===1?r[0]:{compositeFilter:{op:TN(n.op),filters:r}}}(t):J(54877,{filter:t})}function IN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function LT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SN{constructor(e){this.yt=e}}function AN(t){const e=_N({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cd(e,e.limit,"L"):e}/**
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
 */class CN{constructor(){this.Cn=new RN}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Vr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class RN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(De.comparator)).toArray()}}/**
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
 */const zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bT=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(bT,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class ws{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ws(0)}static cr(){return new ws(-1)}}/**
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
 */const $y="LruGarbageCollector",PN=1048576;function Hy([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class kN{constructor(e){this.Ir=e,this.buffer=new Ze(Hy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$($y,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?$($y,"Ignoring IndexedDB error during garbage collection: ",n):await ks(n)}await this.Vr(3e5)})}}class xN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Hu.ce);const r=new kN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(zy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),bi()<=se.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function DN(t,e){return new xN(t,e)}/**
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
 */class ON{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&No(r.mutation,i,jt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Xn();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Kr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),No(d.mutation,c,d.mutation.getFieldMask(),Ce.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new VN(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Le((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=yT();d.forEach(m=>{if(!s.has(m)){const S=IT(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(ai());let l=Jo,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(d=>({batchId:l,changes:gT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new Ku(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let l=fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&No(d.mutation,c,jt.empty(),Ce.now()),Qu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class bN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:AN(i.bundledQuery),readTime:Rn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class MN{constructor(){this.overlays=new Le(Y.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ai();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=ai(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ai(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tN(n,r));let s=this.qr.get(n);s===void 0&&(s=ae(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class FN{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class ap{constructor(){this.Qr=new Ze(nt.$r),this.Ur=new Ze(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new nt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new De([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new De([])),r=new nt(n,e),i=new nt(n,e+1);let s=ae();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||oe(e.Yr,n.Yr)}static Kr(e,n){return oe(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
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
 */class UN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(nt.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new nt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Xf:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(oe);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new nt(new Y(s),0);let l=new Ze(oe);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),b.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new nt(n,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jN{constructor(e){this.ri=e,this.docs=function(){return new Le(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pk(fk(d),r)<=0||(i.has(d.key)||Qu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BN(this)}getSize(e){return b.resolve(this.size)}}class BN extends ON{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class zN{constructor(e){this.persistence=e,this.si=new Pi(n=>ep(n),tp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.oi=0,this._i=new ap,this.targetCount=0,this.ai=ws.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
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
 */class MT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Hu(0),this.li=!1,this.li=!0,this.hi=new FN,this.referenceDelegate=e(this),this.Pi=new zN(this),this.indexManager=new CN,this.remoteDocumentCache=function(i){return new jN(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new SN(n),this.Ii=new bN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new UN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new $N(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class $N extends gk{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Ri=new ap,this.Vi=null}static mi(e){return new lp(e)}get fi(){if(this.Vi)return this.Vi;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=Y.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.pi=new Pi(r=>vk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=DN(this,n)}static mi(e,n){return new mu(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Sl(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new up(e,n.fromCache,r,i)}}/**
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
 */class HN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return _C()?8:yk(vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(bi()<=se.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(bi()<=se.DEBUG&&$("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(bi()<=se.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):b.resolve())}ys(e,n){if(Dy(n))return b.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cd(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Cd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Dy(n)||i.isEqual(Z.min())?b.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?b.resolve(null):(bi()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.vs(e,o,n,dk(i,Jo)).next(l=>l))})}Ds(e,n){let r=new Ze(pT(e));return n.forEach((i,s)=>{Qu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return bi()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.ps.getDocumentsMatchingQuery(e,n,Vr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const cp="LocalStore",qN=3e8;class KN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Le(oe),this.xs=new Pi(s=>ep(s),tp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function GN(t,e,n,r){return new KN(t,e,n,r)}async function FT(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function QN(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let S=b.resolve();return m.forEach(N=>{S=S.next(()=>d.getEntry(u,N)).next(P=>{const k=c.docVersions.get(N);me(k!==null,48541),P.version.compareTo(k)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UT(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function YN(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(ct.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),i=i.insert(p,S),function(P,k,v){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=qN?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,S,d)&&l.push(n.Pi.updateTargetData(s,S))});let u=Xn(),c=ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(XN(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Z.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function XN(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(cp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function JN(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZN(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function xd(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ns(o))throw o;$(cp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Wy(t,e,n){const r=ee(t);let i=Z.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.xs.get(d);return m!==void 0?b.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,An(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ae())).next(l=>(ex(r,Uk(e),l),{documents:l,Qs:s})))}function ex(t,e,n){let r=t.Os.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class qy{constructor(){this.activeTargetIds=Wk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tx{constructor(){this.Mo=new qy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nx{Oo(e){}shutdown(){}}/**
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
 */const Ky="ConnectivityMonitor";class Gy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Ky,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Ky,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rl=null;function Dd(){return rl===null?rl=function(){return 268435456+Math.round(2147483648*Math.random())}():rl++,"0x"+rl.toString(16)}/**
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
 */const uh="RestConnection",rx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ix{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===lu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Dd(),l=this.zo(e,n.toUriEncodedString());$(uh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=As(c);return this.Jo(e,l,u,r,d).then(p=>($(uh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw gs(uh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=rx[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class sx{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const pt="WebChannelConnection";class ox extends ix{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Dd();return new Promise((l,u)=>{const c=new $E;c.setWithCredentials(!0),c.listenOnce(HE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Il.NO_ERROR:const p=c.getResponseJson();$(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Il.TIMEOUT:$(pt,`RPC '${e}' ${o} timed out`),u(new G(U.DEADLINE_EXCEEDED,"Request time out"));break;case Il.HTTP_ERROR:const m=c.getStatus();if($(pt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const P=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(N.status);u(new G(P,N.message))}else u(new G(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new G(U.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(pt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);$(pt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Dd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KE(),l=qE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");$(pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,S=!1;const N=new sx({Yo:k=>{S?$(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||($(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),$(pt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Zo:()=>p.close()}),P=(k,v,_)=>{k.listen(v,T=>{try{_(T)}catch(V){setTimeout(()=>{throw V},0)}})};return P(p,ho.EventType.OPEN,()=>{S||($(pt,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),P(p,ho.EventType.CLOSE,()=>{S||(S=!0,$(pt,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(p))}),P(p,ho.EventType.ERROR,k=>{S||(S=!0,gs(pt,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),N.a_(new G(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,ho.EventType.MESSAGE,k=>{var v;if(!S){const _=k.data[0];me(!!_,16349);const T=_,V=(T==null?void 0:T.error)||((v=T[0])==null?void 0:v.error);if(V){$(pt,`RPC '${e}' stream ${i} received error:`,V);const M=V.status;let F=function(I){const A=$e[I];if(A!==void 0)return CT(A)}(M),w=V.message;F===void 0&&(F=U.INTERNAL,w="Unknown error status: "+M+" with message "+V.message),S=!0,N.a_(new G(F,w)),p.close()}else $(pt,`RPC '${e}' stream ${i} received:`,_),N.u_(_)}}),P(l,WE.STAT_EVENT,k=>{k.stat===wd.PROXY?$(pt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===wd.NOPROXY&&$(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ch(){return typeof document<"u"?document:null}/**
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
 */function Zu(t){return new cN(t,!0)}/**
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
 */class jT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Qy="PersistentStream";class BT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Qy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(Qy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ax extends BT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=fN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Rn(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ad(u)?{documents:gN(s,u)}:{query:yN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kT(s,o.resumeToken);const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=pu(s,o.snapshotVersion.toTimestamp());const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=vN(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.q_(n)}}class lx extends BT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=mN(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pN(this.serializer,r))};this.q_(n)}}/**
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
 */class ux{}class cx extends ux{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(U.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class hx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ei="RemoteStore";class dx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ki(this)&&($(Ei,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ea.add(4),await wa(c),c.Ra.set("Unknown"),c.Ea.delete(4),await ec(c)}(this))})}),this.Ra=new hx(r,i)}}async function ec(t){if(ki(t))for(const e of t.da)await e(!0)}async function wa(t){for(const e of t.da)await e(!1)}function zT(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),pp(n)?fp(n):xs(n).O_()&&dp(n,e))}function hp(t,e){const n=ee(t),r=xs(n);n.Ia.delete(e),r.O_()&&$T(n,e),n.Ia.size===0&&(r.O_()?r.L_():ki(n)&&n.Ra.set("Unknown"))}function dp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).Y_(e)}function $T(t,e){t.Va.Ue(e),xs(t).Z_(e)}function fp(t){t.Va=new oN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.Ra.ua()}function pp(t){return ki(t)&&!xs(t).x_()&&t.Ia.size>0}function ki(t){return ee(t).Ea.size===0}function HT(t){t.Va=void 0}async function fx(t){t.Ra.set("Online")}async function px(t){t.Ia.forEach((e,n)=>{dp(t,e)})}async function mx(t,e){HT(t),pp(t)?(t.Ra.ha(e),fp(t)):t.Ra.set("Unknown")}async function gx(t,e,n){if(t.Ra.set("Online"),e instanceof PT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(Ei,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof Rl?t.Va.Ze(e):e instanceof RT?t.Va.st(e):t.Va.tt(e),!n.isEqual(Z.min()))try{const r=await UT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),$T(s,u);const p=new gr(d.target,u,c,d.sequenceNumber);dp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(Ei,"Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!Ns(e))throw e;t.Ea.add(1),await wa(t),t.Ra.set("Offline"),n||(n=()=>UT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Ei,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ec(t)})}function WT(t,e){return e().catch(n=>gu(t,n,e))}async function tc(t){const e=ee(t),n=Fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xf;for(;yx(e);)try{const i=await JN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,_x(e,i)}catch(i){await gu(e,i)}qT(e)&&KT(e)}function yx(t){return ki(t)&&t.Ta.length<10}function _x(t,e){t.Ta.push(e);const n=Fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function qT(t){return ki(t)&&!Fr(t).x_()&&t.Ta.length>0}function KT(t){Fr(t).start()}async function vx(t){Fr(t).ra()}async function wx(t){const e=Fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Ex(t,e,n){const r=t.Ta.shift(),i=ip.from(r,e,n);await WT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await tc(t)}async function Tx(t,e){e&&Fr(t).X_&&await async function(r,i){if(function(o){return rN(o)&&o!==U.ABORTED}(i.code)){const s=r.Ta.shift();Fr(r).B_(),await WT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await tc(r)}}(t,e),qT(t)&&KT(t)}async function Yy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$(Ei,"RemoteStore received new credentials");const r=ki(n);n.Ea.add(3),await wa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ec(n)}async function Ix(t,e){const n=ee(t);e?(n.Ea.delete(2),await ec(n)):e||(n.Ea.add(2),await wa(n),n.Ra.set("Unknown"))}function xs(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new ax(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:fx.bind(null,t),t_:px.bind(null,t),r_:mx.bind(null,t),H_:gx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),pp(t)?fp(t):t.Ra.set("Unknown")):(await t.ma.stop(),HT(t))})),t.ma}function Fr(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new lx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:vx.bind(null,t),r_:Tx.bind(null,t),ta:wx.bind(null,t),na:Ex.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await tc(t)):(await t.fa.stop(),t.Ta.length>0&&($(Ei,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class mp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new mp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gp(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ns(t))return new G(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class as{static emptySet(e){return new as(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xy{constructor(){this.ga=new Le(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Es(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Sx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ax{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Jy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new G(U.ABORTED,"Firestore shutting down"))}}function Jy(){return new Pi(t=>fT(t),Gu)}async function Cx(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Sx,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=gp(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&yp(n)}async function Rx(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Px(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&yp(n)}function kx(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function yp(t){t.Ca.forEach(e=>{e.next()})}var Od,Zy;(Zy=Od||(Od={})).Ma="default",Zy.Cache="cache";class Nx{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Od.Cache}}/**
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
 */class GT{constructor(e){this.key=e}}class QT{constructor(e){this.key=e}}class xx{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ae(),this.mutatedKeys=ae(),this.eu=pT(e),this.tu=new as(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Xy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),S=Qu(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;m&&S?m.data.isEqual(S.data)?N!==P&&(r.track({type:3,doc:S}),k=!0):this.su(m,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),k=!0):m&&!S&&(r.track({type:1,doc:m}),k=!0,(u||c)&&(l=!0)),k&&(S?(o=o.add(S),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(S,N){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Rt:k})}};return P(S)-P(N)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Es(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new QT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new GT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const _p="SyncEngine";class Dx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ox{constructor(e){this.key=e,this.hu=!1}}class Vx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Pi(l=>fT(l),Gu),this.Iu=new Map,this.Eu=new Set,this.du=new Le(Y.comparator),this.Au=new Map,this.Ru=new ap,this.Vu={},this.mu=new Map,this.fu=ws.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Lx(t,e,n=!0){const r=tI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await YT(r,e,n,!0),i}async function bx(t,e){const n=tI(t);await YT(n,e,!0,!1)}async function YT(t,e,n,r){const i=await ZN(t.localStore,An(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Mx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&zT(t.remoteStore,i),l}async function Mx(t,e,n,r,i){t.pu=(p,m,S)=>async function(P,k,v,_){let T=k.view.ru(v);T.Cs&&(T=await Wy(P.localStore,k.query,!1).then(({documents:w})=>k.view.ru(w,T)));const V=_&&_.targetChanges.get(k.targetId),M=_&&_.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(T,P.isPrimaryClient,V,M);return t_(P,k.targetId,F.au),F.snapshot}(t,p,m,S);const s=await Wy(t.localStore,e,!0),o=new xx(e,s.Qs),l=o.ru(s.documents),u=va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);t_(t,n,c.au);const d=new Dx(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Fx(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Gu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hp(r.remoteStore,i.targetId),Vd(r,i.targetId)}).catch(ks)):(Vd(r,i.targetId),await xd(r.localStore,i.targetId,!0))}async function Ux(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function jx(t,e,n){const r=Kx(t);try{const i=await function(o,l){const u=ee(o),c=Ce.now(),d=l.reduce((S,N)=>S.add(N.key),ae());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=Xn(),P=ae();return u.Ns.getEntries(S,d).next(k=>{N=k,N.forEach((v,_)=>{_.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,N)).next(k=>{p=k;const v=[];for(const _ of l){const T=Jk(_,p.get(_.key).overlayedDocument);T!=null&&v.push(new Kr(_.key,T,oT(T.value.mapValue),Cn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,v,l)}).next(k=>{m=k;const v=k.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(S,k.batchId,v)})}).then(()=>({batchId:m.batchId,changes:gT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Le(oe)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ea(r,i.changes),await tc(r.remoteStore)}catch(i){const s=gp(i,"Failed to persist write");n.reject(s)}}async function XT(t,e){const n=ee(t);try{const r=await YN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?me(o.hu,14607):i.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await Ea(n,r,e)}catch(r){await ks(r)}}function e_(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&yp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bx(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(Y.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const l=ae().add(s),u=new Ju(Z.min(),new Map,new Le(oe),o,l);await XT(r,u),r.du=r.du.remove(s),r.Au.delete(e),vp(r)}else await xd(r.localStore,e,!1).then(()=>Vd(r,e,n)).catch(ks)}async function zx(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await QN(n.localStore,e);ZT(n,r,null),JT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,i)}catch(i){await ks(i)}}async function $x(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(me(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);ZT(r,e,n),JT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,i)}catch(i){await ks(i)}}function JT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ZT(t,e,n){const r=ee(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||eI(t,r)})}function eI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(hp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),vp(t))}function t_(t,e,n){for(const r of n)r instanceof GT?(t.Ru.addReference(r.key,e),Hx(t,r)):r instanceof QT?($(_p,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||eI(t,r.key)):J(19791,{wu:r})}function Hx(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(_p,"New document in limbo: "+n),t.Eu.add(r),vp(t))}function vp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(De.fromString(e)),r=t.fu.next();t.Au.set(r,new Ox(n)),t.du=t.du.insert(n,r),zT(t.remoteStore,new gr(An(np(n.path)),r,"TargetPurposeLimboResolution",Hu.ce))}}async function Ea(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=up.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Es,S=>d.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>b.forEach(m.ds,S=>d.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!Ns(p))throw p;$(cp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=d.Ms.get(m),N=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(N);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,s))}async function Wx(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$(_p,"User change. New user:",e.toKey());const r=await FT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(U.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.Ls)}}function qx(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let i=ae();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function tI(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bx.bind(null,e),e.Pu.H_=Px.bind(null,e.eventManager),e.Pu.yu=kx.bind(null,e.eventManager),e}function Kx(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$x.bind(null,e),e}class yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return GN(this.persistence,new WN,e.initialUser,this.serializer)}Cu(e){return new MT(lp.mi,this.serializer)}Du(e){return new tx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yu.provider={build:()=>new yu};class Gx extends yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof mu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new NN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new MT(r=>mu.mi(r,n),this.serializer)}}class Ld{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>e_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wx.bind(null,this.syncEngine),await Ix(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ax}()}createDatastore(e){const n=Zu(e.databaseInfo.databaseId),r=function(s){return new ox(s)}(e.databaseInfo);return function(s,o,l,u){return new cx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new dx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>e_(this.syncEngine,n,0),function(){return Gy.v()?new Gy:new nx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Vx(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);$(Ei,"RemoteStore shutting down."),s.Ea.add(5),await wa(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ld.provider={build:()=>new Ld};/**
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
 */class Qx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ur="FirestoreClient";class Yx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function n_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xx(t);$(Ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yy(e.remoteStore,i)),t._onlineComponents=e}async function Xx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ur,"Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new yu)}}else $(Ur,"Using default OfflineComponentProvider"),await hh(t,new Gx(void 0));return t._offlineComponents}async function nI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ur,"Using user provided OnlineComponentProvider"),await n_(t,t._uninitializedComponentsProvider._online)):($(Ur,"Using default OnlineComponentProvider"),await n_(t,new Ld))),t._onlineComponents}function Jx(t){return nI(t).then(e=>e.syncEngine)}async function Zx(t){const e=await nI(t),n=e.eventManager;return n.onListen=Lx.bind(null,e.syncEngine),n.onUnlisten=Fx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ux.bind(null,e.syncEngine),n}function eD(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Qx({next:m=>{d.Nu(),o.enqueueAndForget(()=>Rx(s,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new G(U.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new G(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Nx(np(l.path),d,{includeMetadataChanges:!0,qa:!0});return Cx(s,p)}(await Zx(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function rI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const r_=new Map;/**
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
 */const iI="firestore.googleapis.com",i_=!0;class s_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iI,this.ssl=i_}else this.host=e.host,this.ssl=e.ssl??i_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PN)throw new G(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ek;switch(r.type){case"firstParty":return new ik(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=r_.get(n);r&&($("ComponentProvider","Removing Datastore"),r_.delete(n),r.terminate())}(this),Promise.resolve()}}function tD(t,e,n,r={}){var c;t=wi(t,wp);const i=As(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Jw(`https://${l}`),Zw("Firestore",!0)),s.host!==iI&&s.host!==l&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Or(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=mt.MOCK_USER;else{d=cC(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new mt(m)}t._authCredentials=new tk(new QE(d,p))}}/**
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
 */class Ep{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ep(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ya(n,Je._jsonSchema))return new Je(e,r||null,new Y(De.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:We("string",Je._jsonSchemaVersion),referencePath:We("string")};class ia extends Ep{constructor(e,n,r){super(e,n,np(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Y(e))}withConverter(e){return new ia(this.firestore,e,this._path)}}function il(t,e,...n){if(t=et(t),arguments.length===1&&(e=Qf.newId()),ck("doc","path",e),t instanceof wp){const r=De.fromString(e,...n);return vy(r),new Je(t,null,new Y(r))}{if(!(t instanceof Je||t instanceof ia))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return vy(r),new Je(t.firestore,t instanceof ia?t.converter:null,new Y(r))}}/**
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
 */const o_="AsyncQueue";class a_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jT(this,"async_queue_retry"),this._c=()=>{const r=ch();r&&$(o_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new kr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ns(e))throw e;$(o_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Yn("INTERNAL UNHANDLED ERROR: ",l_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=mp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:l_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function l_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class nc extends wp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new a_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new a_(e),this._firestoreClient=void 0,await e}}}function nD(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:lu,i=Ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lC("firestore");s&&tD(i,...s)}return i}function sI(t){if(t._terminated)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rD(t),t._firestoreClient}function rD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new Tk(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,rI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Yx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(ct.fromBase64String(e))}catch(n){throw new G(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ya(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:We("string",Qt._jsonSchemaVersion),bytes:We("string")};/**
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
 */class rc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tp{constructor(e){this._methodName=e}}/**
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
 */class Pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(ya(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:We("string",Pn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ya(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new G(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:We("string",kn._jsonSchemaVersion),vectorValues:We("object")};/**
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
 */const iD=/^__.*__$/;class sD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}class oI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ac:t})}}class Ip{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ip({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _u(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aI(this.Ac)&&iD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zu(e)}Cc(e,n,r,i=!1){return new Ip({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lI(t){const e=t._freezeSettings(),n=Zu(t._databaseId);return new oD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Sp("Data must be an object, but it was:",o,r);const l=uI(r,o);let u,c;if(s.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=bd(e,p,n);if(!o.contains(m))throw new G(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hI(d,m)||d.push(m)}u=new jt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new sD(new xt(l),u,c)}class ic extends Tp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ic}}function lD(t,e,n,r){const i=t.Cc(1,e,n);Sp("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();qr(r,(u,c)=>{const d=Ap(e,u,n);c=et(c);const p=i.yc(d);if(c instanceof ic)s.push(d);else{const m=sc(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new jt(s);return new oI(o,l,i.fieldTransforms)}function uD(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[bd(e,r,n)],u=[i];if(s.length%2!=0)throw new G(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(bd(e,s[m])),u.push(s[m+1]);const c=[],d=xt.empty();for(let m=l.length-1;m>=0;--m)if(!hI(c,l[m])){const S=l[m];let N=u[m];N=et(N);const P=o.yc(S);if(N instanceof ic)c.push(S);else{const k=sc(N,P);k!=null&&(c.push(S),d.set(S,k))}}const p=new jt(c);return new oI(d,p,o.fieldTransforms)}function sc(t,e){if(cI(t=et(t)))return Sp("Unsupported field value:",e,t),uI(t,e);if(t instanceof Tp)return function(r,i){if(!aI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=sc(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:pu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(i.serializer,s)}}if(r instanceof Pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:kT(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:op(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kn)return function(o,l){return{mapValue:{fields:{[iT]:{stringValue:sT},[uu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return rp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Yf(r)}`)}(t,e)}function uI(t,e){const n={};return JE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,i)=>{const s=sc(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Pn||t instanceof Qt||t instanceof Je||t instanceof Tp||t instanceof kn)}function Sp(t,e,n){if(!cI(n)||!YE(n)){const r=Yf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function bd(t,e,n){if((e=et(e))instanceof rc)return e._internalPath;if(typeof e=="string")return Ap(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function Ap(t,e,n){if(e.search(cD)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rc(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(U.INVALID_ARGUMENT,l+t+u)}function hI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hD extends dI{data(){return super.data()}}function fI(t,e){return typeof e=="string"?Ap(t,e):e instanceof rc?e._internalPath:e._delegate._internalPath}class dD{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[uu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Be(o.doubleValue));return new kn(n)}convertGeoPoint(e){return new Pn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);me(LT(r),9688,{name:e});const i=new ea(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function fD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hi extends dI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:We("string",hi._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class Pl extends hi{data(e={}){return super.data(e)}}class xo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Pl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Pl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:pD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */function u_(t){t=wi(t,Je);const e=wi(t.firestore,nc);return eD(sI(e),t._key).then(n=>yD(e,t,n))}xo._jsonSchemaVersion="firestore/querySnapshot/1.0",xo._jsonSchema={type:We("string",xo._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class mD extends dD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function dh(t,e,n){t=wi(t,Je);const r=wi(t.firestore,nc),i=fD(t.converter,e);return pI(r,[aD(lI(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function gD(t,e,n,...r){t=wi(t,Je);const i=wi(t.firestore,nc),s=lI(i);let o;return o=typeof(e=et(e))=="string"||e instanceof rc?uD(s,"updateDoc",t._key,e,n,r):lD(s,"updateDoc",t._key,e),pI(i,[o.toMutation(t._key,Cn.exists(!0))])}function pI(t,e){return function(r,i){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>jx(await Jx(r),i,s)),s.promise}(sI(t),e)}function yD(t,e,n){const r=n.docs.get(e._key),i=new mD(t);return new hi(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ps=i})(Cs),Nn(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new nc(new nk(r.getProvider("auth-internal")),new sk(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Jt(my,gy,e),Jt(my,gy,"esm2020")})();var _D="firebase",vD="12.5.0";/**
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
 */Jt(_D,vD,"app");const mI="@firebase/installations",Cp="0.6.19";/**
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
 */const gI=1e4,yI=`w:${Cp}`,_I="FIS_v2",wD="https://firebaseinstallations.googleapis.com/v1",ED=60*60*1e3,TD="installations",ID="Installations";/**
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
 */const SD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ti=new Ci(TD,ID,SD);function vI(t){return t instanceof fn&&t.code.includes("request-failed")}/**
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
 */function wI({projectId:t}){return`${wD}/projects/${t}/installations`}function EI(t){return{token:t.token,requestStatus:2,expiresIn:CD(t.expiresIn),creationTime:Date.now()}}async function TI(t,e){const r=(await e.json()).error;return Ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function II({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AD(t,{refreshToken:e}){const n=II(t);return n.append("Authorization",RD(e)),n}async function SI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function CD(t){return Number(t.replace("s","000"))}function RD(t){return`${_I} ${t}`}/**
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
 */async function PD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wI(t),i=II(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:_I,appId:t.appId,sdkVersion:yI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await SI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:EI(c.authToken)}}else throw await TI("Create Installation",u)}/**
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
 */function AI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ND=/^[cdef][\w-]{21}$/,Md="";function xD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=DD(t);return ND.test(n)?n:Md}catch{return Md}}function DD(t){return kD(t).substr(0,22)}/**
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
 */function oc(t){return`${t.appName}!${t.appId}`}/**
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
 */const CI=new Map;function RI(t,e){const n=oc(t);PI(n,e),OD(n,e)}function PI(t,e){const n=CI.get(t);if(n)for(const r of n)r(e)}function OD(t,e){const n=VD();n&&n.postMessage({key:t,fid:e}),LD()}let li=null;function VD(){return!li&&"BroadcastChannel"in self&&(li=new BroadcastChannel("[Firebase] FID Change"),li.onmessage=t=>{PI(t.data.key,t.data.fid)}),li}function LD(){CI.size===0&&li&&(li.close(),li=null)}/**
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
 */const bD="firebase-installations-database",MD=1,Ii="firebase-installations-store";let fh=null;function Rp(){return fh||(fh=sE(bD,MD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),fh}async function vu(t,e){const n=oc(t),i=(await Rp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&RI(t,e.fid),e}async function kI(t){const e=oc(t),r=(await Rp()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function ac(t,e){const n=oc(t),i=(await Rp()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&RI(t,l.fid),l}/**
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
 */async function Pp(t){let e;const n=await ac(t.appConfig,r=>{const i=FD(r),s=UD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Md?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FD(t){const e=t||{fid:xD(),registrationStatus:0};return NI(e)}function UD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BD(t)}:{installationEntry:e}}async function jD(t,e){try{const n=await PD(t,e);return vu(t.appConfig,n)}catch(n){throw vI(n)&&n.customData.serverCode===409?await kI(t.appConfig):await vu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BD(t){let e=await c_(t.appConfig);for(;e.registrationStatus===1;)await AI(100),e=await c_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pp(t);return r||n}return e}function c_(t){return ac(t,e=>{if(!e)throw Ti.create("installation-not-found");return NI(e)})}function NI(t){return zD(t)?{fid:t.fid,registrationStatus:0}:t}function zD(t){return t.registrationStatus===1&&t.registrationTime+gI<Date.now()}/**
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
 */async function $D({appConfig:t,heartbeatServiceProvider:e},n){const r=HD(t,n),i=AD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:yI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await SI(()=>fetch(r,l));if(u.ok){const c=await u.json();return EI(c)}else throw await TI("Generate Auth Token",u)}function HD(t,{fid:e}){return`${wI(t)}/${e}/authTokens:generate`}/**
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
 */async function kp(t,e=!1){let n;const r=await ac(t.appConfig,s=>{if(!xI(s))throw Ti.create("not-registered");const o=s.authToken;if(!e&&KD(o))return s;if(o.requestStatus===1)return n=WD(t,e),s;{if(!navigator.onLine)throw Ti.create("app-offline");const l=QD(s);return n=qD(t,l),l}});return n?await n:r.authToken}async function WD(t,e){let n=await h_(t.appConfig);for(;n.authToken.requestStatus===1;)await AI(100),n=await h_(t.appConfig);const r=n.authToken;return r.requestStatus===0?kp(t,e):r}function h_(t){return ac(t,e=>{if(!xI(e))throw Ti.create("not-registered");const n=e.authToken;return YD(n)?{...e,authToken:{requestStatus:0}}:e})}async function qD(t,e){try{const n=await $D(t,e),r={...e,authToken:n};return await vu(t.appConfig,r),n}catch(n){if(vI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await vu(t.appConfig,r)}throw n}}function xI(t){return t!==void 0&&t.registrationStatus===2}function KD(t){return t.requestStatus===2&&!GD(t)}function GD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ED}function QD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function YD(t){return t.requestStatus===1&&t.requestTime+gI<Date.now()}/**
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
 */async function XD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pp(e);return r?r.catch(console.error):kp(e).catch(console.error),n.fid}/**
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
 */async function JD(t,e=!1){const n=t;return await ZD(n),(await kp(n,e)).token}async function ZD(t){const{registrationPromise:e}=await Pp(t);e&&await e}/**
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
 */function e2(t){if(!t||!t.options)throw ph("App Configuration");if(!t.name)throw ph("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ph(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ph(t){return Ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const DI="installations",t2="installations-internal",n2=t=>{const e=t.getProvider("app").getImmediate(),n=e2(e),r=Ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},r2=t=>{const e=t.getProvider("app").getImmediate(),n=Ri(e,DI).getImmediate();return{getId:()=>XD(n),getToken:i=>JD(n,i)}};function i2(){Nn(new dn(DI,n2,"PUBLIC")),Nn(new dn(t2,r2,"PRIVATE"))}i2();Jt(mI,Cp);Jt(mI,Cp,"esm2020");/**
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
 */const wu="analytics",s2="firebase_id",o2="origin",a2=60*1e3,l2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Np="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new ju("@firebase/analytics");/**
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
 */const u2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new Ci("analytics","Analytics",u2);/**
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
 */function c2(t){if(!t.startsWith(Np)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function OI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function h2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function d2(t,e){const n=h2("firebase-js-sdk-policy",{createScriptURL:c2}),r=document.createElement("script"),i=`${Np}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function f2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function p2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await OI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){St.error(l)}t("config",i,s)}async function m2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await OI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function g2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await m2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await p2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){St.error(l)}}return i}function y2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=g2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function _2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Np)&&n.src.includes(t))return n;return null}/**
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
 */const v2=30,w2=1e3;class E2{constructor(e={},n=w2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VI=new E2;function T2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function I2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:T2(n)},i=l2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function S2(t,e=VI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new R2;return setTimeout(async()=>{l.abort()},a2),LI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function LI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VI){var l;const{appId:s,measurementId:o}=t;try{await A2(r,e)}catch(u){if(o)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await I2(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!C2(c)){if(i.deleteThrottleMetadata(s),o)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?jg(n,i.intervalMillis,v2):jg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),St.debug(`Calling attemptFetch again in ${d} millis`),LI(t,p,r,i)}}function A2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function C2(t){if(!(t instanceof fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class R2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function k2(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function N2(){if(tE())try{await nE()}catch(t){return St.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function x2(t,e,n,r,i,s,o){const l=S2(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>St.error(m)),e.push(l);const u=N2().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);_2(s)||d2(s,c.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[o2]="firebase",p.update=!0,d!=null&&(p[s2]=d),i("config",c.measurementId,p),c.measurementId}/**
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
 */class D2{constructor(e){this.app=e}_delete(){return delete ls[this.app.options.appId],Promise.resolve()}}let ls={},d_=[];const f_={};let mh="dataLayer",O2="gtag",p_,xp,m_=!1;function V2(){const t=[];if(eE()&&t.push("This is a browser extension environment."),vC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function L2(t,e,n){V2();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(ls[r]!=null)throw zt.create("already-exists",{id:r});if(!m_){f2(mh);const{wrappedGtag:s,gtagCore:o}=y2(ls,d_,f_,mh,O2);xp=s,p_=o,m_=!0}return ls[r]=x2(t,d_,f_,e,p_,mh,n),new D2(t)}function b2(t=Mf()){t=et(t);const e=Ri(t,wu);return e.isInitialized()?e.getImmediate():M2(t)}function M2(t,e={}){const n=Ri(t,wu);if(n.isInitialized()){const i=n.getImmediate();if(Or(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function F2(t,e,n){t=et(t),k2(xp,ls[t.app.options.appId],e,n).catch(r=>St.error(r))}function U2(t,e,n,r){t=et(t),P2(xp,ls[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const g_="@firebase/analytics",y_="0.10.19";function j2(){Nn(new dn(wu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return L2(r,i,n)},"PUBLIC")),Nn(new dn("analytics-internal",t,"PRIVATE")),Jt(g_,y_),Jt(g_,y_,"esm2020");function t(e){try{const n=e.getProvider(wu).getImmediate();return{logEvent:(r,i,s)=>U2(n,r,i,s),setUserProperties:(r,i)=>F2(n,r,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}j2();const B2={apiKey:"AIzaSyBDSsChB4e5ShbTO4c_uQeBW1a38CVSthI",authDomain:"medical-application-6bcb2.firebaseapp.com",projectId:"medical-application-6bcb2",storageBucket:"medical-application-6bcb2.firebasestorage.app",messagingSenderId:"958025231259",appId:"1:958025231259:web:d1675f0486d01cade24f3e",measurementId:"G-35SSLCBGFE"},Dp=oE(B2),io=JP(Dp),sl=nD(Dp);typeof window<"u"&&b2(Dp);const bI=D.createContext(void 0);function MI(){const t=D.useContext(bI);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function z2({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),l=async P=>{var k,v;try{const _=il(sl,"users",P.uid),T=await u_(_);if(T.exists()){const V=T.data();i({apiKeys:V.apiKeys||{},createdAt:(k=V.createdAt)==null?void 0:k.toDate(),updatedAt:(v=V.updatedAt)==null?void 0:v.toDate()})}else{const V={apiKeys:{},createdAt:new Date,updatedAt:new Date};await dh(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),i(V)}}catch(_){console.error("Error fetching user data:",_),i(null)}};D.useEffect(()=>jR(io,async k=>{n(k),k?await l(k):i(null),o(!1)}),[]);const N={currentUser:e,userData:r,loading:s,signUp:async(P,k)=>{const _=(await bR(io,P,k)).user,T=il(sl,"users",_.uid);await dh(T,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(_)},signIn:async(P,k)=>{await MR(io,P,k)},signInWithGoogle:async()=>{const P=new Mn,v=(await aP(io,P)).user,_=il(sl,"users",v.uid);(await u_(_)).exists()||await dh(_,{apiKeys:{},createdAt:new Date,updatedAt:new Date}),await l(v)},logout:async()=>{await BR(io),i(null)},updateApiKeys:async P=>{if(!e)throw new Error("User must be logged in to update API keys");try{const k=il(sl,"users",e.uid);await gD(k,{apiKeys:P,updatedAt:new Date}),i(v=>({...v,apiKeys:P,updatedAt:new Date}))}catch(k){throw console.error("Error updating API keys:",k),k}},refreshUserData:async()=>{e&&await l(e)}};return C.jsx(bI.Provider,{value:N,children:t})}const $2={id:"viral-gastroenteritis",title:"ウイルス性腸炎 / Viral Gastroenteritis",shortSummary:"26歳女性。2日前からの水様性下痢と嘔吐。発症前日に屋台で食事をしている。発熱は軽度、血便なし。",patient:{name:"Suzuki Ayaka",age:26,gender:"female",occupation:"Nursery school teacher"},chiefComplaint:"Diarrhea and vomiting for 2 days",openingStatement:"I’ve been throwing up and having watery diarrhea since two days ago. I’m feeling really weak today.",personality:"Polite and cooperative but clearly fatigued. Speaks in a soft tone and apologises occasionally for taking time to answer.",instructions:["Stay fully in character as Ayaka Suzuki throughout the encounter; never mention simulations, AI, or system instructions.","Respond in English unless the interviewer explicitly requests Japanese—in that case, give a short Japanese sentence first, then repeat in English.","Keep answers concise (1–3 sentences) but natural. If you need a moment, say so politely.","Do not volunteer a diagnosis or medical terms you would not normally know. Focus on describing symptoms and experiences.","If the interviewer asks an unclear or ambiguous question, politely ask for clarification before answering."],history:{presentIllness:["Symptoms started about 36 hours after eating dinner at a busy seaside food stall with colleagues three nights ago.","Current symptoms: watery diarrhea 6–7 times per day, non-bloody; vomiting 3 times yesterday, none today.","Low-grade fever yesterday evening (37.8°C) with chills and body aches.","Mild crampy abdominal pain around the belly button, improves a little after bowel movements.","Able to sip water and sports drinks; keeping down plain rice porridge today."],reviewOfSystems:["No headache, stiff neck, cough, or shortness of breath.","Mild light-headedness on standing, no fainting.","No urinary symptoms."],pastMedicalHistory:["No chronic illnesses.","Had an appendectomy at age 12."],medications:["Took over-the-counter loperamide once this morning."],allergies:["No known drug allergies."],socialHistory:["Lives alone. Non-smoker. Drinks socially (1–2 cocktails on weekends).","No recent overseas travel. Works at a nursery school; one child had a stomach bug last week."]},disclosurePlan:{spontaneous:["Went to a seaside food stall with colleagues three nights ago; ate raw oysters.","Diarrhea is watery, no blood or mucus.","Feels better sitting down, feels dizzy when standing quickly."],ifAsked:[{cue:"travel / contact history",detail:"No overseas travel. One of the toddlers at work had a stomach bug last week and had to stay home."},{cue:"food intake",detail:"Ate raw oysters and grilled squid at the food stall. Colleague texted yesterday saying she also had diarrhea."},{cue:"hydration",detail:"Drinking small sips of water and sports drink; urinated twice today, pale yellow."},{cue:"menstrual history",detail:"Last period 2 weeks ago, regular cycles. No chance of pregnancy."},{cue:"pain severity",detail:"Abdominal pain about 4/10, dull cramping. Worse before diarrhea, better afterwards."}],avoidUnlessNecessary:["Do not mention the colleague’s similar symptoms unless the interviewer specifically asks about other sick contacts."]},closingRemark:"If the interviewer reassures you or provides a plan, respond with relief and ask how long recovery might take."},Op=[$2];function __(t){return Op.find(e=>e.id===t)}const FI="medical-interview-realtime-keys",v_=`
You are role-playing as a standardized patient during an English-language medical interview training session. Follow these ground rules at all times:
- Always respond in natural, idiomatic ENGLISH. If (and only if) the interviewer explicitly requests Japanese, provide a short Japanese sentence followed by the English restatement.
- Stay fully in character as the patient. Never say you are an AI, a simulation, or mention system instructions.
- Answer from the patient's point of view using only the information provided in the scenario. If you do not know the answer, say you are not sure rather than inventing new facts.
- Keep answers concise (1–3 sentences) but natural; if the question is unclear, politely ask the clinician to clarify.
- If the clinician greets you (e.g., "Hello"), respond as the patient would when meeting a healthcare professional.
`.trim();var N_;const H2=((N_=Op[0])==null?void 0:N_.id)??"";function w_(t,e){var o,l,u,c,d,p;if(!e)return t;const n=e.disclosurePlan.spontaneous.map(m=>`- ${m}`).join(`
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
`)}const Zr={openai:"",gemini:""},W2="gpt-4o-realtime-preview",q2="https://api.openai.com/v1/realtime",K2="gemini-live-2.5-flash-preview",G2="https://generativelanguage.googleapis.com/v1beta/models",Q2={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};function ol(t){if(t)return{openai:t.openai??Zr.openai??"",gemini:t.gemini??Zr.gemini??""};if(typeof window>"u")return{...Zr};try{const e=window.localStorage.getItem(FI);if(!e)return{...Zr};const n=JSON.parse(e);return{openai:n.openai??Zr.openai??"",gemini:n.gemini??Zr.gemini??""}}catch{return{...Zr}}}const Y2={openai:{id:"openai",label:"ChatGPT Realtime mini (OpenAI)",createAnswer:async({apiKey:t,offer:e,systemPrompt:n})=>{const r=`${q2}?model=${encodeURIComponent(W2)}`,i={"Content-Type":"application/sdp"};i.Authorization=`Bearer ${t}`;const s=await fetch(r,{method:"POST",headers:i,body:e.sdp??""}),o=await s.text();if(!s.ok)throw new Error(`OpenAI Realtime API error: ${o||s.statusText||"unknown error"}`);return o},dataChannelLabel:"oai-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"response.create",response:{conversation:"default",instructions:n}}))}catch(r){console.warn("Failed to send OpenAI instruction payload:",r)}},supportsFeedback:!0},gemini:{id:"gemini",label:"Gemini Live 2.5 Flash (Google)",createAnswer:async({apiKey:t,offer:e})=>{var u;const n=`${G2}/${encodeURIComponent(K2)}:connect`;let r=n;r=`${n}?key=${encodeURIComponent(t)}`;const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/sdp"},body:e.sdp??""});if((s.headers.get("content-type")??"").includes("application/json")){const c=await s.json();if(!s.ok){const p=((u=c==null?void 0:c.error)==null?void 0:u.message)||s.statusText||"unknown error";throw new Error(`Gemini live API error: ${p}`)}const d=(c==null?void 0:c.sdp)??(c==null?void 0:c.answer)??(c==null?void 0:c.sessionDescription);if(typeof d!="string"||!d)throw new Error("Gemini live API responded without a valid session description.");return d}const l=await s.text();if(!s.ok)throw new Error(`Gemini live API error: ${l||s.statusText||"unknown error"}`);return l},dataChannelLabel:"client-events",onDataChannelOpen:(t,e)=>{const n=e.trim();if(n)try{t.send(JSON.stringify({type:"input_text",text:n}))}catch(r){console.warn("Failed to send Gemini instruction payload:",r);try{t.send(n)}catch(i){console.warn("Fallback Gemini instruction send failed:",i)}}},supportsFeedback:!0}};function UI(){const{currentUser:t,userData:e,updateApiKeys:n}=MI(),[r,i]=D.useState("openai"),[s,o]=D.useState("idle"),[l,u]=D.useState(null),[c,d]=D.useState(v_),p=D.useMemo(()=>t&&(e!=null&&e.apiKeys)?ol(e.apiKeys):ol(),[t,e]),[m,S]=D.useState(p),[N,P]=D.useState(H2),k=D.useMemo(()=>N?__(N)??null:null,[N]),v=D.useRef(k??null),[_,T]=D.useState(null),[V,M]=D.useState(null),[F,w]=D.useState([]),[y,I]=D.useState([]),A=D.useRef(!1),R=D.useRef(null);D.useEffect(()=>{v.current=k??null},[k]);const x=D.useRef(null),E=D.useRef(null),te=D.useRef(null),Te=D.useRef(null),be=D.useRef("openai"),wt=D.useRef(v_),B=D.useRef(new Map),Q=D.useRef(new Map);D.useEffect(()=>{if(t&&(e!=null&&e.apiKeys)){A.current=!0;const _e=ol(e.apiKeys);S(_e),setTimeout(()=>{A.current=!1},0)}else if(!t){A.current=!0;const _e=ol();S(_e),setTimeout(()=>{A.current=!1},0)}},[t,e]),D.useEffect(()=>{if(!A.current)return R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{const _e=()=>{if(!(typeof window>"u"))try{window.localStorage.setItem(FI,JSON.stringify(m))}catch(de){console.warn("Failed to persist realtime API keys:",de)}};t&&n?n(m).catch(de=>{console.warn("Failed to save API keys to Firebase:",de),_e()}):_e(),R.current=null},1e3),()=>{R.current&&clearTimeout(R.current)}},[m,t,n]),D.useEffect(()=>{be.current=r},[r]),D.useEffect(()=>{wt.current=c},[c]);const K=D.useCallback((_e="idle")=>{const de=x.current;if(de)try{de.onconnectionstatechange=null,de.onicecandidate=null,de.ontrack=null,de.close()}catch(ce){console.warn("Peer connection close error:",ce)}if(x.current=null,E.current)try{const ce=E.current;ce.onopen=null,ce.onmessage=null,ce.onclose=null,ce.onerror=null,ce.close()}catch(ce){console.warn("Data channel close error:",ce)}E.current=null,te.current&&te.current.getTracks().forEach(ce=>ce.stop()),te.current=null,M(null),Te.current&&Te.current.getTracks().forEach(ce=>ce.stop()),Te.current=null,T(null),B.current.clear(),Q.current.clear(),w([]),I([]),o(_e)},[o]),W=D.useCallback(()=>{u(null),K("idle")},[K]),ge=D.useCallback(_e=>{var de;return!!((de=m[_e])!=null&&de.trim())},[m]),qt=D.useCallback((_e,de)=>{S(ce=>({...ce,[_e]:de}))},[]),q=D.useCallback(_e=>{const de=E.current;if(!de||de.readyState!=="open")return;const ce=_e.trim();if(!ce)return;const fe=`The learner just said: """${ce}""". Provide concise, constructive grammar and expression feedback in Japanese. Focus on one or two key corrections, and include a suggested improved sentence. Respond only as plain text, start your message with "[FEEDBACK]" and do not output audio.`;try{be.current==="openai"?de.send(JSON.stringify({type:"response.create",response:{conversation:"feedback",modalities:["text"],instructions:fe}})):de.send(JSON.stringify({type:"input_text",text:`[FEEDBACK_REQUEST] ${fe}`}))}catch(pe){console.warn("Failed to request feedback:",pe)}},[]),Ue=D.useCallback(_e=>{w(de=>[...de,_e].slice(-50))},[]),Ke=D.useCallback(_e=>{I(de=>[...de,_e].slice(-50))},[]),Rt=D.useCallback((_e,de)=>{var ht,pn,ke,je;const ce=_e.data;let fe=null;if(typeof ce=="string")fe=ce;else if(ce instanceof ArrayBuffer)try{fe=new TextDecoder().decode(ce)}catch{fe=null}if(!fe)return;let pe=null;try{pe=JSON.parse(fe)}catch{pe=null}if(!pe||typeof pe!="object"||!pe.type){const le=fe.trim();le.startsWith("[FEEDBACK]")&&Ke({id:`feedback-${Date.now()}`,provider:be.current,text:le.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()});return}switch(pe.type){case"conversation.item.created":{const le=(ht=pe.item)==null?void 0:ht.id;if(typeof le=="string"){const Ie=(pn=pe.item)==null?void 0:pn.role;B.current.set(le,{role:Ie==="user"||Ie==="assistant"||Ie==="system"?Ie:"assistant",text:""})}break}case"conversation.item.deleted":{const le=pe.item_id;typeof le=="string"&&B.current.delete(le);break}case"conversation.item.input_audio_transcription.delta":{const le=pe.item_id,Ie=pe.delta;if(typeof le=="string"&&typeof Ie=="string"){const Ne=B.current.get(le)||{role:"assistant",text:""};Ne.text=(Ne.text||"")+Ie,B.current.set(le,Ne)}break}case"conversation.item.input_audio_transcription.completed":{const le=pe.item_id;if(typeof le=="string"){const Ie=B.current.get(le);if((Ie==null?void 0:Ie.role)==="user"&&Ie.text.trim()){const Ne=Ie.text.trim();Ue({id:`${le}-transcript`,role:"user",text:Ne,timestamp:Date.now()}),de&&q(Ne)}}break}case"response.output_text.delta":{const le=typeof pe.response_id=="string"?pe.response_id:typeof((ke=pe.response)==null?void 0:ke.id)=="string"?pe.response.id:null,Ie=pe.delta;if(le&&typeof Ie=="string"){const Ne=Q.current.get(le)||{text:"",isFeedback:!1};Ne.text+=Ie,!Ne.isFeedback&&Ne.text.trim().startsWith("[FEEDBACK]")&&(Ne.isFeedback=!0),Q.current.set(le,Ne)}break}case"response.completed":{const le=typeof pe.response_id=="string"?pe.response_id:typeof((je=pe.response)==null?void 0:je.id)=="string"?pe.response.id:null;if(le){const Ie=Q.current.get(le);if(Ie){const Ne=Ie.text.trim();Ie.isFeedback&&Ne?Ke({id:le,provider:be.current,text:Ne.replace(/^\[FEEDBACK\]\s*/,"").trim(),timestamp:Date.now()}):Ne&&Ue({id:le,role:"assistant",text:Ne,timestamp:Date.now()}),Q.current.delete(le)}}break}}},[Ke,Ue,q]),Os=D.useCallback(async({provider:_e,scenarioId:de}={})=>{var le,Ie,Ne;if(!((le=navigator.mediaDevices)!=null&&le.getUserMedia)){u("このブラウザではマイクへのアクセスがサポートされていません。"),o("error");return}if(de){const re=__(de);re&&(v.current=re,P(re.id))}const ce=_e??r,fe=Y2[ce];if(!fe){u("対応していないプロバイダーが選択されています。"),o("error");return}const pe=(Ie=m[ce])==null?void 0:Ie.trim();if(!pe){u("APIキーが設定されていません。設定後に再度お試しください。"),o("error");return}if(x.current){console.warn("Call already active; ignoring duplicate start request.");return}be.current=ce,i(ce),o("connecting"),u(null),w([]),I([]),B.current.clear(),Q.current.clear();const ht=new RTCPeerConnection(Q2);x.current=ht,ht.addEventListener("connectionstatechange",()=>{if(!x.current)return;const re=x.current.connectionState;re==="connected"?o("connected"):re==="failed"?(u("接続が失敗しました。ネットワーク環境をご確認ください。"),K("error")):(re==="disconnected"||re==="closed")&&K("idle")}),ht.addEventListener("track",re=>{const[ve]=re.streams;ve&&(Te.current=ve,T(ve))});const pn=w_(wt.current,v.current);ht.addEventListener("datachannel",re=>{var Vs;const ve=re.channel;if(!ve)return;E.current=ve;const Pt=mn=>Rt(mn,fe.supportsFeedback);ve.addEventListener("message",Pt),ve.addEventListener("close",()=>{ve.removeEventListener("message",Pt),E.current===ve&&(E.current=null)}),ve.addEventListener("error",mn=>{console.warn("Data channel error:",mn)}),ve.readyState==="open"?(Vs=fe.onDataChannelOpen)==null||Vs.call(fe,ve,pn):fe.onDataChannelOpen&&ve.addEventListener("open",()=>{var mn;return(mn=fe.onDataChannelOpen)==null?void 0:mn.call(fe,ve,pn)},{once:!0})});try{const re=await navigator.mediaDevices.getUserMedia({audio:!0});te.current=re,M(re),re.getTracks().forEach(ve=>ht.addTrack(ve,te.current))}catch(re){console.error("Failed to obtain microphone:",re),u("マイクへアクセスできませんでした。権限設定をご確認ください。"),K("error");return}let ke=null;if(fe.dataChannelLabel)try{ke=ht.createDataChannel(fe.dataChannelLabel),E.current=ke;const re=ke,ve=Pt=>Rt(Pt,fe.supportsFeedback);re.addEventListener("message",ve),re.addEventListener("close",()=>{re.removeEventListener("message",ve),E.current===re&&(E.current=null)}),re.addEventListener("error",Pt=>{console.warn("Data channel error:",Pt)}),re.readyState==="open"?(Ne=fe.onDataChannelOpen)==null||Ne.call(fe,re,pn):fe.onDataChannelOpen&&re.addEventListener("open",()=>{var Pt;return(Pt=fe.onDataChannelOpen)==null?void 0:Pt.call(fe,re,pn)},{once:!0})}catch(re){console.warn("Data channel creation failed:",re)}const je=await ht.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!1});await ht.setLocalDescription(je);try{const re=w_(wt.current,v.current),Pt={type:"answer",sdp:await fe.createAnswer({apiKey:pe,offer:je,systemPrompt:re})};await ht.setRemoteDescription(Pt)}catch(re){console.error("Realtime call negotiation failed:",re),u(re instanceof Error?re.message:String(re)),K("error");return}},[m,K,Rt,r,i,P]),Ia=D.useCallback(()=>u(null),[]),cc=D.useMemo(()=>({provider:r,status:s,error:l,remoteStream:_,localStream:V,systemPrompt:c,transcriptEntries:F,feedbackEntries:y,scenarioId:N,activeScenario:k}),[r,s,l,_,V,c,F,y,N,k]),hc=D.useCallback(_e=>m[_e]??"",[m]);return D.useEffect(()=>()=>{K("idle")},[K]),{...cc,startCall:Os,stopCall:W,setProvider:i,setSystemPrompt:d,hasApiKey:ge,setApiKey:qt,getApiKey:hc,clearError:Ia,feedbackEntries:y,transcriptEntries:F,availableScenarios:Op,scenarioId:N,setScenarioId:P,activeScenario:k}}const X2=({open:t,onClose:e,contentMode:n,setContentMode:r})=>{const{theme:i,setTheme:s}=JA(),{layout:o,setLayout:l}=Fu(),{currentUser:u,signUp:c,signIn:d,signInWithGoogle:p,logout:m}=MI(),{setApiKey:S,getApiKey:N}=UI(),[P,k]=D.useState(!1),[v,_]=D.useState(!1),[T,V]=D.useState(!1),[M,F]=D.useState(""),[w,y]=D.useState(""),[I,A]=D.useState(""),[R,x]=D.useState(""),[E,te]=D.useState(""),[Te,be]=D.useState(!1);D.useEffect(()=>{if(v){const W=N("openai"),ge=N("gemini");A(W),x(ge)}else A(""),x("")},[v]);const wt=()=>{te(""),be(!0),S("openai",I),S("gemini",R),_(!1),setTimeout(()=>{be(!1)},1100)},B=async W=>{W.preventDefault(),te(""),be(!0);try{T?await c(M,w):await d(M,w),F(""),y(""),k(!1),te("")}catch(ge){te(ge.message||"エラーが発生しました")}finally{be(!1)}},Q=async()=>{te(""),be(!0);try{await p(),k(!1),te("")}catch(W){te(W.message||"Googleログインに失敗しました")}finally{be(!1)}},K=async()=>{try{await m(),k(!1)}catch(W){te(W.message||"ログアウトに失敗しました")}};return t?C.jsx("div",{className:"settings-modal",onClick:W=>W.target===W.currentTarget&&e(),children:C.jsxs("div",{className:"settings-content",children:[C.jsxs("div",{className:"settings-header",children:[C.jsx("h2",{children:"設定"}),C.jsx("button",{className:"close-button",onClick:e,"aria-label":"閉じる",children:"×"})]}),C.jsxs("div",{className:"settings-item",children:[C.jsx("span",{className:"settings-label",children:"ダークモード"}),C.jsxs("label",{className:"toggle-switch",children:[C.jsx("input",{type:"checkbox",checked:i==="dark",onChange:W=>s(W.target.checked?"dark":"auto")}),C.jsx("span",{className:"toggle-slider"})]})]}),C.jsxs("div",{className:"settings-item",children:[C.jsx("span",{className:"settings-label",children:"コンテンツモード"}),C.jsx("div",{className:"layout-options",children:["react","html"].map(W=>C.jsxs("label",{className:"radio-option",children:[C.jsx("input",{type:"radio",name:"contentMode",value:W,checked:n===W,onChange:()=>r(W)}),C.jsx("span",{children:W==="react"?"React表示":"HTML表示"})]},W))})]}),C.jsxs("div",{className:"settings-item",children:[C.jsx("span",{className:"settings-label",children:"レイアウト"}),C.jsx("div",{className:"layout-options",children:["auto","two-column","single-column"].map(W=>C.jsxs("label",{className:"radio-option",children:[C.jsx("input",{type:"radio",name:"layoutMode",value:W,checked:o===W,onChange:()=>l(W)}),C.jsx("span",{children:W==="auto"?"自動":W==="two-column"?"2段組":"1段組"})]},W))})]}),C.jsxs("div",{className:"settings-item settings-api-keys-section",children:[C.jsxs("div",{className:"settings-auth-header",children:[C.jsx("span",{className:"settings-label",children:"APIキー"}),!v&&C.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{_(!0),te("")},children:"APIキーを設定"})]}),v&&C.jsxs("div",{className:"settings-auth-content",children:[C.jsxs("div",{className:"auth-field",children:[C.jsx("label",{htmlFor:"api-key-openai",className:"auth-label",children:"OpenAI APIキー"}),C.jsx("input",{id:"api-key-openai",type:"password",className:"auth-input",value:I,onChange:W=>A(W.target.value),placeholder:"sk- で始まるキーを入力",autoComplete:"off",spellCheck:!1}),C.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),C.jsxs("div",{className:"auth-field",children:[C.jsx("label",{htmlFor:"api-key-gemini",className:"auth-label",children:"Gemini APIキー"}),C.jsx("input",{id:"api-key-gemini",type:"password",className:"auth-input",value:R,onChange:W=>x(W.target.value),placeholder:"AI... で始まるキーを入力",autoComplete:"off",spellCheck:!1}),C.jsx("p",{className:"auth-hint",children:"リアルタイム通話機能で使用します"})]}),C.jsxs("div",{className:"settings-api-keys-actions",children:[C.jsx("button",{type:"button",className:"auth-button auth-button-primary",onClick:wt,disabled:Te,children:Te?"保存中...":"保存"}),C.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{_(!1),te("")},children:"キャンセル"})]}),E&&C.jsx("p",{className:"auth-error",style:{marginTop:"12px"},children:E}),C.jsx("p",{className:"auth-hint",style:{marginTop:"12px",fontSize:"12px"},children:u?"ログイン中です。APIキーはFirebaseに保存されます。":"ログインしていません。APIキーはブラウザのLocalStorageにのみ保存されます。"})]})]}),C.jsxs("div",{className:"settings-item settings-auth-section",children:[C.jsxs("div",{className:"settings-auth-header",children:[C.jsx("span",{className:"settings-label",children:"アカウント"}),!P&&C.jsx("button",{type:"button",className:"settings-auth-toggle",onClick:()=>{k(!0),te("")},children:u?"アカウント情報":"ログイン"})]}),P&&C.jsx("div",{className:"settings-auth-content",children:u?C.jsxs("div",{className:"auth-content",children:[C.jsxs("div",{className:"auth-user-info",children:[C.jsx("p",{className:"auth-email",children:u.email}),C.jsx("p",{className:"auth-hint",children:"ログイン中です。APIキーはFirebaseに保存されます。"})]}),C.jsx("button",{className:"auth-button auth-button-logout",onClick:K,disabled:Te,children:"ログアウト"}),C.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{k(!1),te("")},children:"閉じる"})]}):C.jsxs("div",{children:[C.jsxs("form",{onSubmit:B,className:"auth-form",children:[E&&C.jsx("div",{className:"auth-error",children:E}),C.jsxs("div",{className:"auth-field",children:[C.jsx("label",{htmlFor:"auth-email",className:"auth-label",children:"メールアドレス"}),C.jsx("input",{id:"auth-email",type:"email",className:"auth-input",value:M,onChange:W=>F(W.target.value),required:!0,autoComplete:"email",placeholder:"example@email.com"})]}),C.jsxs("div",{className:"auth-field",children:[C.jsx("label",{htmlFor:"auth-password",className:"auth-label",children:"パスワード"}),C.jsx("input",{id:"auth-password",type:"password",className:"auth-input",value:w,onChange:W=>y(W.target.value),required:!0,autoComplete:T?"new-password":"current-password",placeholder:"6文字以上",minLength:6})]}),C.jsx("button",{type:"submit",className:"auth-button auth-button-primary",disabled:Te,children:Te?"処理中...":T?"新規登録":"ログイン"}),C.jsx("div",{className:"auth-divider",children:C.jsx("span",{children:"または"})}),C.jsxs("button",{type:"button",className:"auth-button auth-button-google",onClick:Q,disabled:Te,children:[C.jsx("span",{className:"auth-google-icon",children:"🔍"}),"Googleでログイン"]}),C.jsx("div",{className:"auth-switch",children:C.jsx("button",{type:"button",className:"auth-switch-link",onClick:()=>{V(!T),te("")},children:T?"既にアカウントをお持ちですか？ログイン":"アカウントをお持ちでない方は新規登録"})})]}),C.jsx("button",{type:"button",className:"settings-auth-close",onClick:()=>{k(!1),te(""),F(""),y("")},children:"閉じる"})]})})]})]})}):null},J2=[{id:"openai",label:"ChatGPT Realtime mini",description:"OpenAI Realtime API を利用します。"},{id:"gemini",label:"Gemini Live 2.5 Flash",description:"Google Gemini Live API を利用します。"}],Z2={idle:"未接続",connecting:"接続中…",connected:"通話中",error:"エラー"},eO=()=>{const[t,e]=D.useState(!1),{provider:n,status:r,error:i,remoteStream:s,localStream:o,systemPrompt:l,startCall:u,stopCall:c,setProvider:d,setSystemPrompt:p,hasApiKey:m,setApiKey:S,getApiKey:N,clearError:P,feedbackEntries:k,transcriptEntries:v,availableScenarios:_,scenarioId:T,setScenarioId:V,activeScenario:M}=UI(),F=D.useRef(null);D.useEffect(()=>{if(!F.current)return;const q=F.current;if(s){q.srcObject=s;const Ue=()=>{q.play().catch(Ke=>console.warn("Autoplay prevented for remote stream:",Ke))};q.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA?Ue():q.onloadedmetadata=Ue}else q.pause(),q.srcObject=null},[s]);const w=D.useCallback(()=>{e(!0)},[]),y=D.useCallback(()=>{e(!1)},[]);D.useEffect(()=>{if(!t)return;const q=Ue=>{Ue.key==="Escape"&&y()};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[t,y]);const I=D.useCallback(q=>{q.target===q.currentTarget&&y()},[y]),A=D.useCallback(q=>{P(),d(q)},[d,P]),R=D.useCallback(async()=>{await u({provider:n})},[u,n]),x=r==="connecting"||!m(n)||r==="connected",E=r!=="connected"&&r!=="connecting",te=D.useMemo(()=>Z2[r]||r,[r]),Te=N(n),be=D.useCallback(q=>{P(),S(n,q.target.value)},[n,S,P]),wt=D.useCallback(q=>{P(),V(q.target.value)},[P,V]),[B,Q]=D.useState(0);D.useEffect(()=>{t&&Q(k.length)},[t,k.length]);const K=Math.max(0,k.length-B),W=["call-launcher",r==="connected"?"is-active":"",K>0?"has-unread":""].filter(Boolean).join(" "),ge=D.useCallback(()=>{c()},[c]),qt=D.useCallback(q=>{const Ue=new Date(q),Ke=Ue.getHours().toString().padStart(2,"0"),Rt=Ue.getMinutes().toString().padStart(2,"0");return`${Ke}:${Rt}`},[]);return C.jsxs(C.Fragment,{children:[C.jsxs("button",{type:"button",className:W,"aria-label":"音声ロールプレイを開始",onClick:w,children:["🎧",K>0&&C.jsx("span",{className:"call-launcher-badge",children:K>9?"9+":K})]}),(r==="connected"||r==="connecting")&&!t&&C.jsxs("div",{className:`call-mini-status call-mini-status-${r}`,children:[C.jsxs("div",{className:"call-mini-details",children:[C.jsx("span",{className:"call-mini-status-label",children:te}),K>0&&C.jsxs("span",{className:"call-mini-feedback",children:["フィードバック ",K]})]}),C.jsxs("div",{className:"call-mini-actions",children:[C.jsx("button",{type:"button",className:"call-mini-button",onClick:()=>e(!0),children:"設定を開く"}),C.jsx("button",{type:"button",className:"call-mini-button is-danger",onClick:ge,disabled:r==="connecting",children:"終了"})]})]}),C.jsx("audio",{ref:F,className:"call-audio",autoPlay:!0,playsInline:!0,hidden:!0}),t&&C.jsx("div",{className:"call-modal",onMouseDown:I,children:C.jsxs("div",{className:"call-modal-content",role:"dialog","aria-modal":"true","aria-label":"音声ロールプレイ設定",children:[C.jsxs("div",{className:"call-modal-header",children:[C.jsxs("div",{children:[C.jsx("h2",{children:"音声ロールプレイ"}),C.jsx("p",{className:"call-subtitle",children:"右下のボタンから患者役との会話を開始できます。"})]}),C.jsx("button",{type:"button",className:"call-modal-close",onClick:y,"aria-label":"閉じる",children:"×"})]}),C.jsxs("div",{className:"call-status-row",children:[C.jsx("span",{className:`call-status-badge call-status-${r}`,children:te}),o&&r==="connected"&&C.jsx("span",{className:"call-mic-indicator",children:"🎤 マイク取得済み"})]}),C.jsxs("div",{className:"call-section",children:[C.jsx("h3",{children:"プロバイダー"}),C.jsx("div",{className:"call-provider-options",children:J2.map(q=>{const Ue=q.id===n;return C.jsxs("button",{type:"button",className:`call-provider-button ${Ue?"is-active":""}`,onClick:()=>A(q.id),children:[C.jsx("span",{className:"call-provider-label",children:q.label}),C.jsx("span",{className:"call-provider-description",children:q.description})]},q.id)})})]}),C.jsxs("div",{className:"call-section",children:[C.jsx("h3",{children:"シナリオ"}),C.jsx("label",{className:"call-field-label",htmlFor:"call-scenario-select",children:"臨床ストーリー"}),C.jsx("select",{id:"call-scenario-select",className:"call-field-input",value:T,onChange:wt,children:_.map(q=>C.jsx("option",{value:q.id,children:q.title},q.id))}),M&&C.jsxs("div",{className:"call-scenario-summary",children:[C.jsx("p",{className:"call-scenario-title",children:M.shortSummary}),C.jsxs("ul",{className:"call-scenario-list",children:[C.jsxs("li",{children:[C.jsx("strong",{children:"Chief complaint:"})," ",M.chiefComplaint]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Patient:"})," ",`${M.patient.age}歳 ${M.patient.gender==="female"?"女性":M.patient.gender==="male"?"男性":M.patient.gender}`,M.patient.occupation?` / ${M.patient.occupation}`:""]}),C.jsxs("li",{children:[C.jsx("strong",{children:"Opening line:"})," ",M.openingStatement]})]}),C.jsx("p",{className:"call-hint",children:"追加の医療設定は下のテキストエリアで編集できます。"})]})]}),C.jsxs("div",{className:"call-section",children:[C.jsx("label",{className:"call-field-label",htmlFor:"call-api-key",children:"APIキー"}),C.jsx("input",{id:"call-api-key",className:"call-field-input",type:"password",placeholder:"sk- または AI... で始まるキーを入力",value:Te,onChange:be,autoComplete:"off",spellCheck:!1}),C.jsx("p",{className:"call-hint",children:"入力したキーはブラウザの LocalStorage にのみ保存されます。 セキュリティ上、公開リポジトリへのコミットや画面共有などで漏洩しないよう十分ご注意ください。"})]}),C.jsxs("div",{className:"call-section",children:[C.jsx("label",{className:"call-field-label",htmlFor:"call-system-prompt",children:"患者の設定"}),C.jsx("textarea",{id:"call-system-prompt",className:"call-field-textarea",rows:6,value:l,onChange:q=>p(q.target.value)}),C.jsx("p",{className:"call-hint",children:"開始時にプロバイダーへ送信する指示です。診療科・性格・症状などを自由に設定できます。"})]}),v.length>0&&C.jsxs("div",{className:"call-section",children:[C.jsx("h3",{children:"会話ログ"}),C.jsx("ul",{className:"call-transcript-list",children:v.map(q=>C.jsxs("li",{className:"call-transcript-item",children:[C.jsxs("span",{className:"call-transcript-meta",children:[C.jsx("span",{className:`call-transcript-role role-${q.role}`,children:q.role==="user"?"医師":q.role==="assistant"?"患者":"システム"}),C.jsx("time",{dateTime:new Date(q.timestamp).toISOString(),children:qt(q.timestamp)})]}),C.jsx("p",{className:"call-transcript-text",children:q.text})]},q.id))})]}),C.jsxs("div",{className:"call-section",children:[C.jsx("h3",{children:"リアルタイムフィードバック"}),k.length===0?C.jsx("p",{className:"call-hint",children:"通話中の発話内容に対するフィードバックがここに表示されます。 閉じている間も通話は継続されます。"}):C.jsx("ul",{className:"call-feedback-list",children:k.map(q=>C.jsxs("li",{className:"call-feedback-item",children:[C.jsxs("div",{className:"call-feedback-header",children:[C.jsx("span",{className:"call-feedback-provider",children:q.provider==="openai"?"OpenAI":"Gemini"}),C.jsx("time",{dateTime:new Date(q.timestamp).toISOString(),children:qt(q.timestamp)})]}),C.jsx("p",{className:"call-feedback-text",children:q.text})]},q.id))})]}),i&&C.jsx("p",{className:"call-error",children:i}),C.jsxs("div",{className:"call-actions",children:[C.jsx("button",{type:"button",className:"call-button call-button-primary",onClick:R,disabled:x,children:r==="connecting"?"接続中…":"接続する"}),C.jsx("button",{type:"button",className:"call-button",onClick:c,disabled:E,children:"通話を終了"})]})]})})]})},gh=({title:t,level:e=2,defaultCollapsed:n=!0,children:r})=>{const[i,s]=D.useState(n),o=D.useId(),l=`h${e}`;return C.jsxs("div",{className:"section",children:[C.jsx(l,{className:i?"collapsed":"",role:"button","aria-expanded":!i,"aria-controls":o,onClick:()=>s(!i),children:t}),C.jsx("div",{id:o,className:`section-content ${i?"collapsed":"expanded"}`,"aria-hidden":i,children:r})]})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const E_="popstate";function tO(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Fd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Eu(i)}return rO(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nO(){return Math.random().toString(36).substr(2,8)}function T_(t,e){return{usr:t.state,key:t.key,idx:e}}function Fd(t,e,n,r){return n===void 0&&(n=null),sa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||nO()})}function Eu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rO(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=yr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(sa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=yr.Pop;let k=d(),v=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:v})}function m(k,v){l=yr.Push;let _=Fd(P.location,k,v);c=d()+1;let T=T_(_,c),V=P.createHref(_);try{o.pushState(T,"",V)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(V)}s&&u&&u({action:l,location:P.location,delta:1})}function S(k,v){l=yr.Replace;let _=Fd(P.location,k,v);c=d();let T=T_(_,c),V=P.createHref(_);o.replaceState(T,"",V),s&&u&&u({action:l,location:P.location,delta:0})}function N(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof k=="string"?k:Eu(k);return _=_.replace(/ $/,"%20"),qe(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let P={get action(){return l},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(E_,p),u=k,()=>{i.removeEventListener(E_,p),u=null}},createHref(k){return e(i,k)},createURL:N,encodeLocation(k){let v=N(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:S,go(k){return o.go(k)}};return P}var I_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(I_||(I_={}));function iO(t,e,n){return n===void 0&&(n="/"),sO(t,e,n)}function sO(t,e,n,r){let i=typeof e=="string"?Ds(e):e,s=Vp(i.pathname||"/",n);if(s==null)return null;let o=BI(t);oO(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=_O(s);l=mO(o[u],c)}return l}function BI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),BI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:fO(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of zI(s.path))i(s,o,u)}),e}function zI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function oO(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aO=/^:[\w-]+$/,lO=3,uO=2,cO=1,hO=10,dO=-2,S_=t=>t==="*";function fO(t,e){let n=t.split("/"),r=n.length;return n.some(S_)&&(r+=dO),e&&(r+=uO),n.filter(i=>!S_(i)).reduce((i,s)=>i+(aO.test(s)?lO:s===""?cO:hO),r)}function pO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mO(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=gO({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:TO(Nr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return o}function gO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const N=l[p];return S&&!N?c[m]=void 0:c[m]=(N||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function yO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _O(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:wO(n,e):e,search:IO(r),hash:SO(i)}}function wO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function EO(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $I(t,e){let n=EO(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function HI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=sa({},t),qe(!i.pathname||!i.pathname.includes("?"),yh("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),yh("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),yh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=vO(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),TO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const WI=["post","put","patch","delete"];new Set(WI);const CO=["get",...WI];new Set(CO);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const Lp=D.createContext(null),RO=D.createContext(null),Ni=D.createContext(null),lc=D.createContext(null),xi=D.createContext({outlet:null,matches:[],isDataRoute:!1}),qI=D.createContext(null);function PO(t,e){let{relative:n}=e===void 0?{}:e;Ta()||qe(!1);let{basename:r,navigator:i}=D.useContext(Ni),{hash:s,pathname:o,search:l}=GI(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Nr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ta(){return D.useContext(lc)!=null}function uc(){return Ta()||qe(!1),D.useContext(lc).location}function KI(t){D.useContext(Ni).static||D.useLayoutEffect(t)}function kO(){let{isDataRoute:t}=D.useContext(xi);return t?zO():NO()}function NO(){Ta()||qe(!1);let t=D.useContext(Lp),{basename:e,future:n,navigator:r}=D.useContext(Ni),{matches:i}=D.useContext(xi),{pathname:s}=uc(),o=JSON.stringify($I(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return KI(()=>{l.current=!0}),D.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=HI(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Nr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function GI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Ni),{matches:i}=D.useContext(xi),{pathname:s}=uc(),o=JSON.stringify($I(i,r.v7_relativeSplatPath));return D.useMemo(()=>HI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function xO(t,e){return DO(t,e)}function DO(t,e,n,r){Ta()||qe(!1);let{navigator:i}=D.useContext(Ni),{matches:s}=D.useContext(xi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=uc(),d;if(e){var p;let k=typeof e=="string"?Ds(e):e;u==="/"||(p=k.pathname)!=null&&p.startsWith(u)||qe(!1),d=k}else d=c;let m=d.pathname||"/",S=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let N=iO(t,{pathname:S}),P=MO(N&&N.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Nr([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Nr([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&P?D.createElement(lc.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yr.Pop}},P):P}function OO(){let t=BO(),e=AO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const VO=D.createElement(OO,null);class LO extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(xi.Provider,{value:this.props.routeContext},D.createElement(qI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bO(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(xi.Provider,{value:e},r)}function MO(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||qe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:S}=n,N=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||N){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let S,N=!1,P=null,k=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||VO,u&&(c<0&&m===0?($O("route-fallback"),N=!0,k=null):c===m&&(N=!0,k=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let T;return S?T=P:N?T=k:p.route.Component?T=D.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,D.createElement(bO,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?D.createElement(LO,{location:n.location,revalidation:n.revalidation,component:P,error:S,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var QI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(QI||{}),YI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(YI||{});function FO(t){let e=D.useContext(Lp);return e||qe(!1),e}function UO(t){let e=D.useContext(RO);return e||qe(!1),e}function jO(t){let e=D.useContext(xi);return e||qe(!1),e}function XI(t){let e=jO(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function BO(){var t;let e=D.useContext(qI),n=UO(),r=XI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zO(){let{router:t}=FO(QI.UseNavigateStable),e=XI(YI.UseNavigateStable),n=D.useRef(!1);return KI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oa({fromRouteId:e},s)))},[t,e])}const A_={};function $O(t,e,n){A_[t]||(A_[t]=!0)}function HO(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function On(t){qe(!1)}function WO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1,future:l}=t;Ta()&&qe(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:oa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:d="/",search:p="",hash:m="",state:S=null,key:N="default"}=r,P=D.useMemo(()=>{let k=Vp(d,u);return k==null?null:{location:{pathname:k,search:p,hash:m,state:S,key:N},navigationType:i}},[u,d,p,m,S,N,i]);return P==null?null:D.createElement(Ni.Provider,{value:c},D.createElement(lc.Provider,{children:n,value:P}))}function qO(t){let{children:e,location:n}=t;return xO(Ud(e),n)}new Promise(()=>{});function Ud(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Ud(r.props.children,s));return}r.type!==On&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ud(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jd.apply(this,arguments)}function KO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QO(t,e){return t.button===0&&(!e||e==="_self")&&!GO(t)}const YO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XO="6";try{window.__reactRouterVersion=XO}catch{}const JO="startTransition",C_=U0[JO];function ZO(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=tO({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=D.useCallback(p=>{c&&C_?C_(()=>u(p)):u(p)},[u,c]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>HO(r),[r]),D.createElement(WO,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const eV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tV=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ln=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=KO(e,YO),{basename:S}=D.useContext(Ni),N,P=!1;if(typeof c=="string"&&tV.test(c)&&(N=c,eV))try{let T=new URL(window.location.href),V=c.startsWith("//")?new URL(T.protocol+c):new URL(c),M=Vp(V.pathname,S);V.origin===T.origin&&M!=null?c=M+V.search+V.hash:P=!0}catch{}let k=PO(c,{relative:i}),v=nV(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(T){r&&r(T),T.defaultPrevented||v(T)}return D.createElement("a",jd({},m,{href:N||k,onClick:P||s?r:_,ref:n,target:u}))});var R_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(R_||(R_={}));var P_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(P_||(P_={}));function nV(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=kO(),c=uc(),d=GI(t,{relative:o});return D.useCallback(p=>{if(QO(p,n)){p.preventDefault();let m=r!==void 0?r:Eu(c)===Eu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const rV="/medical-interview-english/".replace(/\/$/,""),k_=t=>{const e=t.replace(/^\/+/,""),n=`${rV}/${e}`.replace(/^\/\//,"/");return n.startsWith("/")?n:`/${n}`};async function iV(t){const e=await fetch(t,{mode:"cors"});if(!e.ok)throw new Error(`Failed to fetch ${t}: ${e.status}`);return await e.text()}const sV=({url:t,title:e,enableAudio:n=!1})=>{const r=D.useRef(null),[i,s]=D.useState(null),[o,l]=D.useState(!0);D.useEffect(()=>{let d=!0;return(async()=>{try{l(!0);const p=await iV(t);if(!d)return;const S=new DOMParser().parseFromString(p,"text/html").querySelector(".container");if(!S)throw new Error("container not found in external HTML");const N=S.querySelector(".back-link");N&&N.parentElement&&N.parentElement.removeChild(N);const P=S.querySelector("h1");P&&P.parentElement&&P.parentElement.removeChild(P),r.current&&(r.current.innerHTML=S.innerHTML,aV(r.current)),setTimeout(()=>{try{oV(r.current),n&&lV(r.current)}catch(k){console.error(k)}},0)}catch(p){console.error(p),s(p.message||String(p))}finally{l(!1)}})(),()=>{d=!1}},[t,n]);const{layout:u}=Fu(),c=u==="two-column"?"layout-two-column":u==="single-column"?"layout-single-column":"";return C.jsxs("div",{className:`container ${c}`,children:[C.jsx(Ln,{to:"/",className:"back-link",children:"← トップページに戻る"}),C.jsx("h1",{children:e}),o&&C.jsx("p",{children:"読み込み中..."}),i&&C.jsxs("p",{className:"description",children:["読み込みエラー: ",i]}),C.jsx("div",{ref:r,className:"injected"})]})};function oV(t){const e=Array.from(t.querySelectorAll("h2, h3, h4"));e.forEach(u=>u.classList.add("collapsible"));function n(u){return u===2?/^H2$/:u===3?/^H[23]$/:/^H[234]$/}function r(u){return u==="H2"?2:u==="H3"?3:4}function i(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;p.style.display="none",p.style.maxHeight="0px",p.style.overflow="hidden",p.style.opacity="0",p.style.margin="0",d=d.nextElementSibling}return d}function s(u,c){let d=u;for(;d&&!c.test(d.tagName);){const p=d;if(/^H[2-4]$/.test(p.tagName)){p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="",p.classList.add("collapsed"),d=i(p.nextElementSibling,n(r(p.tagName)));continue}else p.style.display="",p.style.maxHeight="",p.style.overflow="",p.style.opacity="",p.style.margin="";d=d.nextElementSibling}}function o(u,c){const d=r(u.tagName),p=n(d);c?(u.classList.add("collapsed"),i(u.nextElementSibling,p)):(u.classList.remove("collapsed"),s(u.nextElementSibling,p))}function l(u){if(u._indentAnnotated)return;u._indentAnnotated=!0;const c=r(u.tagName);u.classList.add(`heading-l${c}`);const d=n(c);let p=u.nextElementSibling;const m=Math.max(0,c-2);for(;p&&!d.test(p.tagName);){const S=p;/^H[2-4]$/.test(S.tagName)||S.classList.add(`indent-${m}`),p=p.nextElementSibling}}e.forEach(u=>{u.classList.contains("initialized")||(u.classList.add("initialized"),l(u),o(u,!0),u.addEventListener("click",c=>{c.stopPropagation();const d=u.classList.contains("collapsed");o(u,!d)}))})}function aV(t){if(!t)return;const e=Array.from(t.querySelectorAll("li.question-item")),n=/\(([^()]+)\)/g;e.forEach(r=>{const i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,null),s=[];let o=i.nextNode();for(;o;)o.nodeType===Node.TEXT_NODE&&s.push(o),o=i.nextNode();s.forEach(l=>{const u=l.textContent??"";if(n.lastIndex=0,!n.test(u))return;n.lastIndex=0;const c=l.parentElement;if(!c||c.closest(".paraphrase"))return;const d=document.createDocumentFragment();let p=0,m;for(;(m=n.exec(u))!==null;){const S=m.index??0,N=S+m[0].length;S>p&&d.appendChild(document.createTextNode(u.slice(p,S)));const P=document.createElement("span");P.className="paraphrase",P.textContent=m[0],d.appendChild(P),p=N}p<u.length&&d.appendChild(document.createTextNode(u.slice(p))),c.replaceChild(d,l)})})}async function lV(t){const e=k_("audio/audio_map.json");let n={};try{n=await fetch(e).then(l=>l.json())}catch{console.warn("Failed to load audio_map.json; audio disabled");return}let r=null,i=null;function s(){i&&(i.pause(),i=null),r&&(r.classList.remove("playing"),r=null)}function o(l){const u=new Set,c=l.replace(/\s+/g," ").trim();c&&u.add(c);const d=c.replace(/\s*\(ai\)\s*$/i,"").trim();return d&&u.add(d),Array.from(u)}t.querySelectorAll("li.question-item").forEach(l=>{const u=l;u.addEventListener("click",()=>{var m;const c=u.dataset.text||((m=u.textContent)==null?void 0:m.trim())||"";let d;for(const S of o(c))if(n[S]){d=n[S];break}if(!d){console.warn("Audio not found for:",c);return}const p=k_(`audio/${d}`);if(r===u&&i&&!i.paused){i.pause(),u.classList.remove("playing");return}s(),i=new Audio(p),r=u,u.classList.add("playing"),i.addEventListener("ended",()=>s()),i.addEventListener("error",()=>s()),i.play()})})}const uV=({src:t,title:e})=>C.jsxs("div",{className:"iframe-wrapper",style:{height:"80vh"},children:[C.jsx("iframe",{title:e,src:t,style:{width:"100%",height:"100%",border:"1px solid var(--border-color)",borderRadius:8}}),C.jsx("p",{className:"description",children:"注意: 現段階は既存ページをiframeで内包しています。次段階でReactネイティブへ移植します。"})]}),cV=()=>{const{layout:t}=Fu();return C.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[C.jsx("h1",{children:"英語de診療"}),C.jsxs("div",{className:"sections-grid",children:[C.jsxs(Ln,{to:"/medical-interview",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🗣️"}),C.jsx("div",{className:"section-title",children:"医療面接"}),C.jsx("div",{className:"section-subtitle",children:"Medical Interview"})]}),C.jsxs(Ln,{to:"/head-neck",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🧑‍⚕️"}),C.jsx("div",{className:"section-title",children:"頭頸部"}),C.jsx("div",{className:"section-subtitle",children:"Head & Neck"})]}),C.jsxs(Ln,{to:"/chest",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🫁"}),C.jsx("div",{className:"section-title",children:"胸部"}),C.jsx("div",{className:"section-subtitle",children:"Chest"})]}),C.jsxs(Ln,{to:"/abdomen",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🫃"}),C.jsx("div",{className:"section-title",children:"腹部"}),C.jsx("div",{className:"section-subtitle",children:"Abdomen"})]}),C.jsxs(Ln,{to:"/neurological",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🧠"}),C.jsx("div",{className:"section-title",children:"神経"}),C.jsx("div",{className:"section-subtitle",children:"Neurological"})]}),C.jsxs(Ln,{to:"/presentation",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"📊"}),C.jsx("div",{className:"section-title",children:"プレゼン"}),C.jsx("div",{className:"section-subtitle",children:"Presentation"})]}),C.jsxs(Ln,{to:"/debug",className:"section-card",children:[C.jsx("div",{className:"section-icon",children:"🧪"}),C.jsx("div",{className:"section-title",children:"デバッグ"}),C.jsx("div",{className:"section-subtitle",children:"Debug / Sandbox"})]})]})]})},hV=()=>{const[t,e]=D.useState(!1),[n,r]=D.useState(()=>{if(typeof window<"u"){const v=localStorage.getItem("contentMode");if(v==="html"||v==="react")return v}return"react"}),i=D.useRef(null),[s,o]=D.useState(null),l=D.useRef(null),u=D.useRef({dragging:!1,moved:!1,isTouch:!1}),c=D.useRef({startX:0,startY:0,startLeft:0,startTop:0}),d=v=>{const _=i.current;if(!_)return v;const T=8,V=Math.max(T,window.innerWidth-_.offsetWidth-T),M=Math.max(T,window.innerHeight-_.offsetHeight-T),F=Math.min(Math.max(v.left,T),V),w=Math.min(Math.max(v.top,T),M);return{left:F,top:w}},p=v=>{const _=d(v);l.current=_,o(_)};D.useEffect(()=>{const v=i.current;if(!v)return;const _="ontouchstart"in window||navigator.maxTouchPoints>0;if(u.current.isTouch=_,!_)try{const F=localStorage.getItem("settingsButtonPosition");if(F){const w=JSON.parse(F);typeof w.left=="number"&&typeof w.top=="number"&&p({left:w.left,top:w.top})}}catch(F){console.warn("Failed to restore settings button position:",F)}if(_)return;const T=F=>{u.current.dragging=!0,u.current.moved=!1,v.classList.add("dragging");const w=v.getBoundingClientRect();c.current={startX:F.clientX,startY:F.clientY,startLeft:w.left,startTop:w.top},F.preventDefault()},V=F=>{if(!u.current.dragging)return;const{startX:w,startY:y,startLeft:I,startTop:A}=c.current,R=F.clientX-w,x=F.clientY-y;!u.current.moved&&(Math.abs(R)>2||Math.abs(x)>2)&&(u.current.moved=!0);const E=I+R,te=A+x,Te=window.innerWidth-v.offsetWidth,be=window.innerHeight-v.offsetHeight,wt=Math.max(0,Math.min(E,Te)),B=Math.max(0,Math.min(te,be));p({left:wt,top:B})},M=()=>{if(!u.current.dragging)return;u.current.dragging=!1,v.classList.remove("dragging");const F=l.current;if(F)try{localStorage.setItem("settingsButtonPosition",JSON.stringify(F))}catch(w){console.warn("Failed to save settings button position:",w)}};return v.addEventListener("mousedown",T),document.addEventListener("mousemove",V),document.addEventListener("mouseup",M),()=>{v.removeEventListener("mousedown",T),document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",M)}},[]);const m=()=>{if(u.current.moved){u.current.moved=!1;return}e(!0)};D.useEffect(()=>{try{localStorage.setItem("contentMode",n)}catch(v){console.warn("Failed to save content mode:",v)}},[n]);const S=s?{left:`${s.left}px`,top:`${s.top}px`,right:"auto"}:void 0,N="/medical-interview-english/".replace(/\/$/,""),P=v=>{const _=v.replace(/^\/+/,""),T=`${N}/${_}`.replace(/^\/\//,"/");return T.startsWith("/")?T:`/${T}`},k=(v,_,T)=>n==="react"?C.jsx(sV,{title:`${v}(r)`,url:_,enableAudio:T==null?void 0:T.enableAudio}):C.jsx(uV,{title:`${v}（HTML版）`,src:_});return C.jsx(XA,{children:C.jsxs(ZA,{children:[C.jsxs(ZO,{basename:"/medical-interview-english/",children:[C.jsxs(qO,{children:[C.jsx(On,{path:"/",element:C.jsx(cV,{})}),C.jsx(On,{path:"/medical-interview",element:k("医療面接",P("legacy/medical-interview.html"),{enableAudio:!0})}),C.jsx(On,{path:"/head-neck",element:k("頭頸部",P("legacy/head-neck.html"),{enableAudio:!0})}),C.jsx(On,{path:"/chest",element:k("胸部",P("legacy/chest.html"),{enableAudio:!0})}),C.jsx(On,{path:"/abdomen",element:k("腹部",P("legacy/abdomen.html"),{enableAudio:!0})}),C.jsx(On,{path:"/neurological",element:k("神経",P("legacy/neurological.html"),{enableAudio:!0})}),C.jsx(On,{path:"/presentation",element:k("プレゼン",P("legacy/presentation.html"),{enableAudio:!0})}),C.jsx(On,{path:"/debug",element:C.jsx(fV,{})})]}),C.jsx("button",{ref:i,style:S,className:"settings-button","aria-label":"設定",onClick:m,children:"⚙️"}),C.jsx(X2,{open:t,onClose:()=>e(!1),contentMode:n,setContentMode:r})]}),C.jsx(eO,{})]})})},dV=()=>C.jsx(z2,{children:C.jsx(hV,{})}),fV=()=>{const{layout:t}=Fu();return C.jsxs("div",{className:`container ${t==="two-column"?"layout-two-column":t==="single-column"?"layout-single-column":""}`,children:[C.jsx(Ln,{to:"/",className:"back-link",children:"← トップページに戻る"}),C.jsx("h1",{children:"デバッグ（UIコンポーネント検証）"}),C.jsxs(gh,{title:"総論（General Description）",level:2,children:[C.jsx("p",{className:"description",children:"コンポーネントの動作確認用ページです。h2/h3/h4 のトグルやレイアウト切替を試せます。"}),C.jsxs("ul",{className:"expanded",children:[C.jsx("li",{children:"ダークモード切替（auto/dark）"}),C.jsx("li",{children:"レイアウト（auto/2段/1段）"}),C.jsx("li",{children:"折りたたみ可能な見出し"})]}),C.jsxs(gh,{title:"デモ: h3 セクション",level:3,defaultCollapsed:!0,children:[C.jsx("p",{children:"h3 をクリックして展開/折りたたみできます。"}),C.jsxs("ul",{className:"expanded",children:[C.jsx("li",{children:"項目A"}),C.jsx("li",{children:"項目B"})]}),C.jsx(gh,{title:"デモ: h4 セクション",level:4,defaultCollapsed:!0,children:C.jsx("p",{children:"h4 セクションも同様に制御できます。"})})]})]})]})};_h.createRoot(document.getElementById("root")).render(C.jsx(B_.StrictMode,{children:C.jsx(dV,{})}));
