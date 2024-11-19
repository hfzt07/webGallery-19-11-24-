var _w=Object.defineProperty;var Sw=(t,e,n)=>e in t?_w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>Sw(t,typeof e!="symbol"?e+"":e,n);function Pw(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Cw(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var By={exports:{}},Xc={},Ny={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Tw=Symbol.for("react.portal"),Ew=Symbol.for("react.fragment"),Mw=Symbol.for("react.strict_mode"),Aw=Symbol.for("react.profiler"),Lw=Symbol.for("react.provider"),Ow=Symbol.for("react.context"),zw=Symbol.for("react.forward_ref"),Iw=Symbol.for("react.suspense"),Rw=Symbol.for("react.memo"),Dw=Symbol.for("react.lazy"),rm=Symbol.iterator;function $w(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hy=Object.assign,Uy={};function es(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||Vy}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wy(){}Wy.prototype=es.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||Vy}var mp=gp.prototype=new Wy;mp.constructor=gp;Hy(mp,es.prototype);mp.isPureReactComponent=!0;var sm=Array.isArray,Ky=Object.prototype.hasOwnProperty,yp={current:null},Gy={key:!0,ref:!0,__self:!0,__source:!0};function Yy(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ky.call(e,i)&&!Gy.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:yp.current}}function Fw(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Bw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function $u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bw(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case Tw:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+$u(a,0):i,sm(r)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),Al(r,e,n,"",function(u){return u})):r!=null&&(vp(r)&&(r=Fw(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(am,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+$u(s,o);a+=Al(s,e,n,l,r)}else if(l=$w(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+$u(s,o++),a+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Nw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},Ll={transition:null},Vw={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:yp};function Xy(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=es;K.Fragment=Ew;K.Profiler=Aw;K.PureComponent=gp;K.StrictMode=Mw;K.Suspense=Iw;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;K.act=Xy;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hy({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ky.call(e,l)&&!Gy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};K.createContext=function(t){return t={$$typeof:Ow,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lw,_context:t},t.Consumer=t};K.createElement=Yy;K.createFactory=function(t){var e=Yy.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:zw,render:t}};K.isValidElement=vp;K.lazy=function(t){return{$$typeof:Dw,_payload:{_status:-1,_result:t},_init:Nw}};K.memo=function(t,e){return{$$typeof:Rw,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};K.unstable_act=Xy;K.useCallback=function(t,e){return Ze.current.useCallback(t,e)};K.useContext=function(t){return Ze.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};K.useEffect=function(t,e){return Ze.current.useEffect(t,e)};K.useId=function(){return Ze.current.useId()};K.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Ze.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};K.useRef=function(t){return Ze.current.useRef(t)};K.useState=function(t){return Ze.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Ze.current.useTransition()};K.version="18.3.1";Ny.exports=K;var _=Ny.exports;const ze=Yc(_),Sh=Pw({__proto__:null,default:ze},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw=_,Uw=Symbol.for("react.element"),Ww=Symbol.for("react.fragment"),Kw=Object.prototype.hasOwnProperty,Gw=Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yw={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Kw.call(e,i)&&!Yw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uw,type:t,key:s,ref:a,props:r,_owner:Gw.current}}Xc.Fragment=Ww;Xc.jsx=qy;Xc.jsxs=qy;By.exports=Xc;var c=By.exports,Ph={},Jy={exports:{}},wt={},Qy={exports:{}},Zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,D){var $=L.length;L.push(D);e:for(;0<$;){var F=$-1>>>1,Z=L[F];if(0<r(Z,D))L[F]=D,L[$]=Z,$=F;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var D=L[0],$=L.pop();if($!==D){L[0]=$;e:for(var F=0,Z=L.length,pt=Z>>>1;F<pt;){var Me=2*(F+1)-1,_t=L[Me],be=Me+1,vi=L[be];if(0>r(_t,$))be<Z&&0>r(vi,_t)?(L[F]=vi,L[be]=$,F=be):(L[F]=_t,L[Me]=$,F=Me);else if(be<Z&&0>r(vi,$))L[F]=vi,L[be]=$,F=be;else break e}}return D}function r(L,D){var $=L.sortIndex-D.sortIndex;return $!==0?$:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,h=null,f=3,p=!1,m=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var D=n(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=L)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(L){if(y=!1,b(L),!m)if(n(l)!==null)m=!0,N(j);else{var D=n(u);D!==null&&se(w,D.startTime-L)}}function j(L,D){m=!1,y&&(y=!1,x(P),P=-1),p=!0;var $=f;try{for(b(D),h=n(l);h!==null&&(!(h.expirationTime>D)||L&&!O());){var F=h.callback;if(typeof F=="function"){h.callback=null,f=h.priorityLevel;var Z=F(h.expirationTime<=D);D=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(l)&&i(l),b(D)}else i(l);h=n(l)}if(h!==null)var pt=!0;else{var Me=n(u);Me!==null&&se(w,Me.startTime-D),pt=!1}return pt}finally{h=null,f=$,p=!1}}var C=!1,S=null,P=-1,E=5,M=-1;function O(){return!(t.unstable_now()-M<E)}function R(){if(S!==null){var L=t.unstable_now();M=L;var D=!0;try{D=S(!0,L)}finally{D?W():(C=!1,S=null)}}else C=!1}var W;if(typeof v=="function")W=function(){v(R)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,X=Q.port2;Q.port1.onmessage=R,W=function(){X.postMessage(null)}}else W=function(){k(R,0)};function N(L){S=L,C||(C=!0,W())}function se(L,D){P=k(function(){L(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,N(j))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var $=f;f=D;try{return L()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=f;f=L;try{return D()}finally{f=$}},t.unstable_scheduleCallback=function(L,D,$){var F=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?F+$:F):$=F,L){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,L={id:d++,callback:D,priorityLevel:L,startTime:$,expirationTime:Z,sortIndex:-1},$>F?(L.sortIndex=$,e(u,L),n(l)===null&&L===n(u)&&(y?(x(P),P=-1):y=!0,se(w,$-F))):(L.sortIndex=Z,e(l,L),m||p||(m=!0,N(j))),L},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(L){var D=f;return function(){var $=f;f=D;try{return L.apply(this,arguments)}finally{f=$}}}})(Zy);Qy.exports=Zy;var Xw=Qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=_,bt=Xw;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ev=new Set,aa={};function qi(t,e){$r(t,e),$r(t+"Capture",e)}function $r(t,e){for(aa[t]=e,t=0;t<e.length;t++)ev.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,Jw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},lm={};function Qw(t){return Ch.call(lm,t)?!0:Ch.call(om,t)?!1:Jw.test(t)?lm[t]=!0:(om[t]=!0,!1)}function Zw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e4(t,e,n,i){if(e===null||typeof e>"u"||Zw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function et(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new et(t,5,!1,t.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xp,bp);Ne[e]=new et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xp,bp);Ne[e]=new et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xp,bp);Ne[e]=new et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new et(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new et(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,i){var r=Ne.hasOwnProperty(e)?Ne[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e4(e,n,r,i)&&(n=null),i||r===null?Qw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var En=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),iv=Symbol.for("react.offscreen"),cm=Symbol.iterator;function us(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Fu;function Ts(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Bu=!1;function Nu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function t4(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pr:return"Fragment";case fr:return"Portal";case Th:return"Profiler";case wp:return"StrictMode";case Eh:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nv:return(t.displayName||"Context")+".Consumer";case tv:return(t._context.displayName||"Context")+".Provider";case jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function n4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i4(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=i4(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function av(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function Oh(t,e){av(t,e);var n=oi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&zh(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zh(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function Er(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Es(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function ov(t,e){var n=oi(e.value),i=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r4=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){r4.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function dv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=uv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s4=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(s4[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bh=null,Mr=null,Ar=null;function pm(t){if(t=Wa(t)){if(typeof Bh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=eu(e),Bh(t.stateNode,t.type,e))}}function hv(t){Mr?Ar?Ar.push(t):Ar=[t]:Mr=t}function fv(){if(Mr){var t=Mr,e=Ar;if(Ar=Mr=null,pm(t),e)for(t=0;t<e.length;t++)pm(e[t])}}function pv(t,e){return t(e)}function gv(){}var Vu=!1;function mv(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return pv(t,e,n)}finally{Vu=!1,(Mr!==null||Ar!==null)&&(gv(),fv())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=eu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Nh=!1;if(_n)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Nh=!1}function a4(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Bs=!1,ec=null,tc=!1,Vh=null,o4={onError:function(t){Bs=!0,ec=t}};function l4(t,e,n,i,r,s,a,o,l){Bs=!1,ec=null,a4.apply(o4,arguments)}function c4(t,e,n,i,r,s,a,o,l){if(l4.apply(this,arguments),Bs){if(Bs){var u=ec;Bs=!1,ec=null}else throw Error(A(198));tc||(tc=!0,Vh=u)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gm(t){if(Ji(t)!==t)throw Error(A(188))}function u4(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gm(r),t;if(s===i)return gm(r),e;s=s.sibling}throw Error(A(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==i)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function vv(t){return t=u4(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var bv=bt.unstable_scheduleCallback,mm=bt.unstable_cancelCallback,d4=bt.unstable_shouldYield,h4=bt.unstable_requestPaint,ke=bt.unstable_now,f4=bt.unstable_getCurrentPriorityLevel,Pp=bt.unstable_ImmediatePriority,kv=bt.unstable_UserBlockingPriority,nc=bt.unstable_NormalPriority,p4=bt.unstable_LowPriority,wv=bt.unstable_IdlePriority,qc=null,an=null;function g4(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:v4,m4=Math.log,y4=Math.LN2;function v4(t){return t>>>=0,t===0?32:31-(m4(t)/y4|0)|0}var uo=64,ho=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ms(o):(s&=a,s!==0&&(i=Ms(s)))}else a=n&~r,a!==0?i=Ms(a):s!==0&&(i=Ms(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kt(e),r=1<<n,i|=t[n],e&=~r;return i}function x4(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b4(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kt(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=x4(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jv(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function k4(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kt(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kt(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var re=0;function _v(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sv,Tp,Pv,Cv,Tv,Uh=!1,fo=[],qn=null,Jn=null,Qn=null,ca=new Map,ua=new Map,Hn=[],w4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ym(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j4(t,e,n,i,r){switch(e){case"focusin":return qn=hs(qn,t,e,n,i,r),!0;case"dragenter":return Jn=hs(Jn,t,e,n,i,r),!0;case"mouseover":return Qn=hs(Qn,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,hs(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,hs(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Ev(t){var e=zi(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,Tv(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fh=i,n.target.dispatchEvent(i),Fh=null}else return e=Wa(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){Ol(t)&&n.delete(e)}function _4(){Uh=!1,qn!==null&&Ol(qn)&&(qn=null),Jn!==null&&Ol(Jn)&&(Jn=null),Qn!==null&&Ol(Qn)&&(Qn=null),ca.forEach(vm),ua.forEach(vm)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,_4)))}function da(t){function e(r){return fs(r,t)}if(0<fo.length){fs(fo[0],t);for(var n=1;n<fo.length;n++){var i=fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qn!==null&&fs(qn,t),Jn!==null&&fs(Jn,t),Qn!==null&&fs(Qn,t),ca.forEach(e),ua.forEach(e),n=0;n<Hn.length;n++)i=Hn[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&Hn.shift()}var Lr=En.ReactCurrentBatchConfig,rc=!0;function S4(t,e,n,i){var r=re,s=Lr.transition;Lr.transition=null;try{re=1,Ep(t,e,n,i)}finally{re=r,Lr.transition=s}}function P4(t,e,n,i){var r=re,s=Lr.transition;Lr.transition=null;try{re=4,Ep(t,e,n,i)}finally{re=r,Lr.transition=s}}function Ep(t,e,n,i){if(rc){var r=Wh(t,e,n,i);if(r===null)Zu(t,e,i,sc,n),ym(t,i);else if(j4(r,t,e,n,i))i.stopPropagation();else if(ym(t,i),e&4&&-1<w4.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&Sv(s),s=Wh(t,e,n,i),s===null&&Zu(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var sc=null;function Wh(t,e,n,i){if(sc=null,t=Sp(i),t=zi(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f4()){case Pp:return 1;case kv:return 4;case nc:case p4:return 16;case wv:return 536870912;default:return 16}default:return 16}}var Kn=null,Mp=null,zl=null;function Av(){if(zl)return zl;var t,e=Mp,n=e.length,i,r="value"in Kn?Kn.value:Kn.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function xm(){return!1}function jt(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:xm,this.isPropagationStopped=xm,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=jt(ts),Ua=me({},ts,{view:0,detail:0}),C4=jt(Ua),Uu,Wu,ps,Jc=me({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Uu=t.screenX-ps.screenX,Wu=t.screenY-ps.screenY):Wu=Uu=0,ps=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),bm=jt(Jc),T4=me({},Jc,{dataTransfer:0}),E4=jt(T4),M4=me({},Ua,{relatedTarget:0}),Ku=jt(M4),A4=me({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),L4=jt(A4),O4=me({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z4=jt(O4),I4=me({},ts,{data:0}),km=jt(I4),R4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$4[t])?!!e[t]:!1}function Lp(){return F4}var B4=me({},Ua,{key:function(t){if(t.key){var e=R4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N4=jt(B4),V4=me({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=jt(V4),H4=me({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),U4=jt(H4),W4=me({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),K4=jt(W4),G4=me({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y4=jt(G4),X4=[9,13,27,32],Op=_n&&"CompositionEvent"in window,Ns=null;_n&&"documentMode"in document&&(Ns=document.documentMode);var q4=_n&&"TextEvent"in window&&!Ns,Lv=_n&&(!Op||Ns&&8<Ns&&11>=Ns),jm=" ",_m=!1;function Ov(t,e){switch(t){case"keyup":return X4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function J4(t,e){switch(t){case"compositionend":return zv(e);case"keypress":return e.which!==32?null:(_m=!0,jm);case"textInput":return t=e.data,t===jm&&_m?null:t;default:return null}}function Q4(t,e){if(gr)return t==="compositionend"||!Op&&Ov(t,e)?(t=Av(),zl=Mp=Kn=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var Z4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z4[t.type]:e==="textarea"}function Iv(t,e,n,i){hv(i),e=ac(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Vs=null,ha=null;function e3(t){Kv(t,0)}function Qc(t){var e=vr(t);if(sv(e))return t}function t3(t,e){if(t==="change")return e}var Rv=!1;if(_n){var Gu;if(_n){var Yu="oninput"in document;if(!Yu){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Yu=typeof Pm.oninput=="function"}Gu=Yu}else Gu=!1;Rv=Gu&&(!document.documentMode||9<document.documentMode)}function Cm(){Vs&&(Vs.detachEvent("onpropertychange",Dv),ha=Vs=null)}function Dv(t){if(t.propertyName==="value"&&Qc(ha)){var e=[];Iv(e,ha,t,Sp(t)),mv(e3,e)}}function n3(t,e,n){t==="focusin"?(Cm(),Vs=e,ha=n,Vs.attachEvent("onpropertychange",Dv)):t==="focusout"&&Cm()}function i3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(ha)}function r3(t,e){if(t==="click")return Qc(e)}function s3(t,e){if(t==="input"||t==="change")return Qc(e)}function a3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:a3;function fa(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ch.call(e,r)||!Yt(t[r],e[r]))return!1}return!0}function Tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,e){var n=Tm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tm(n)}}function $v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o3(t){var e=Fv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$v(n.ownerDocument.documentElement,n)){if(i!==null&&zp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Em(n,s);var a=Em(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l3=_n&&"documentMode"in document&&11>=document.documentMode,mr=null,Kh=null,Hs=null,Gh=!1;function Mm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||mr==null||mr!==Zl(i)||(i=mr,"selectionStart"in i&&zp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&fa(Hs,i)||(Hs=i,i=ac(Kh,"onSelect"),0<i.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=mr)))}function go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},Xu={},Bv={};_n&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Zc(t){if(Xu[t])return Xu[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return Xu[t]=e[n];return t}var Nv=Zc("animationend"),Vv=Zc("animationiteration"),Hv=Zc("animationstart"),Uv=Zc("transitionend"),Wv=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(t,e){Wv.set(t,e),qi(e,[t])}for(var qu=0;qu<Am.length;qu++){var Ju=Am[qu],c3=Ju.toLowerCase(),u3=Ju[0].toUpperCase()+Ju.slice(1);hi(c3,"on"+u3)}hi(Nv,"onAnimationEnd");hi(Vv,"onAnimationIteration");hi(Hv,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(Uv,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d3=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function Lm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c4(i,e,void 0,t),t.currentTarget=null}function Kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Lm(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Lm(r,o,u),s=l}}}if(tc)throw t=Vh,tc=!1,Vh=null,t}function ce(t,e){var n=e[Qh];n===void 0&&(n=e[Qh]=new Set);var i=t+"__bubble";n.has(i)||(Gv(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),Gv(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[mo]){t[mo]=!0,ev.forEach(function(n){n!=="selectionchange"&&(d3.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Qu("selectionchange",!1,e))}}function Gv(t,e,n,i){switch(Mv(e)){case 1:var r=S4;break;case 4:r=P4;break;default:r=Ep}n=r.bind(null,e,n,t),r=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zi(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}mv(function(){var u=s,d=Sp(n),h=[];e:{var f=Wv.get(t);if(f!==void 0){var p=Ap,m=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=N4;break;case"focusin":m="focus",p=Ku;break;case"focusout":m="blur",p=Ku;break;case"beforeblur":case"afterblur":p=Ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=E4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=U4;break;case Nv:case Vv:case Hv:p=L4;break;case Uv:p=K4;break;case"scroll":p=C4;break;case"wheel":p=Y4;break;case"copy":case"cut":case"paste":p=z4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wm}var y=(e&4)!==0,k=!y&&t==="scroll",x=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,b;v!==null;){b=v;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,x!==null&&(w=la(v,x),w!=null&&y.push(ga(v,w,b)))),k)break;v=v.return}0<y.length&&(f=new p(f,m,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Fh&&(m=n.relatedTarget||n.fromElement)&&(zi(m)||m[Sn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?zi(m):null,m!==null&&(k=Ji(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=bm,w="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=wm,w="onPointerLeave",x="onPointerEnter",v="pointer"),k=p==null?f:vr(p),b=m==null?f:vr(m),f=new y(w,v+"leave",p,n,d),f.target=k,f.relatedTarget=b,w=null,zi(d)===u&&(y=new y(x,v+"enter",m,n,d),y.target=b,y.relatedTarget=k,w=y),k=w,p&&m)t:{for(y=p,x=m,v=0,b=y;b;b=ar(b))v++;for(b=0,w=x;w;w=ar(w))b++;for(;0<v-b;)y=ar(y),v--;for(;0<b-v;)x=ar(x),b--;for(;v--;){if(y===x||x!==null&&y===x.alternate)break t;y=ar(y),x=ar(x)}y=null}else y=null;p!==null&&Om(h,f,p,y,!1),m!==null&&k!==null&&Om(h,k,m,y,!0)}}e:{if(f=u?vr(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var j=t3;else if(Sm(f))if(Rv)j=s3;else{j=i3;var C=n3}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=r3);if(j&&(j=j(t,u))){Iv(h,j,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&zh(f,"number",f.value)}switch(C=u?vr(u):window,t){case"focusin":(Sm(C)||C.contentEditable==="true")&&(mr=C,Kh=u,Hs=null);break;case"focusout":Hs=Kh=mr=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,Mm(h,n,d);break;case"selectionchange":if(l3)break;case"keydown":case"keyup":Mm(h,n,d)}var S;if(Op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else gr?Ov(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Lv&&n.locale!=="ko"&&(gr||P!=="onCompositionStart"?P==="onCompositionEnd"&&gr&&(S=Av()):(Kn=d,Mp="value"in Kn?Kn.value:Kn.textContent,gr=!0)),C=ac(u,P),0<C.length&&(P=new km(P,t,null,n,d),h.push({event:P,listeners:C}),S?P.data=S:(S=zv(n),S!==null&&(P.data=S)))),(S=q4?J4(t,n):Q4(t,n))&&(u=ac(u,"onBeforeInput"),0<u.length&&(d=new km("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=S))}Kv(h,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ga(t,s,r)),s=la(t,e),s!=null&&i.push(ga(t,s,r))),t=t.return}return i}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Om(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=la(n,s),l!=null&&a.unshift(ga(n,l,o))):r||(l=la(n,s),l!=null&&a.push(ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var h3=/\r\n?/g,f3=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(h3,`
`).replace(f3,"")}function yo(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(A(425))}function oc(){}var Yh=null,Xh=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,p3=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,g3=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(t){return Im.resolve(null).then(t).catch(m3)}:Jh;function m3(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),sn="__reactFiber$"+ns,ma="__reactProps$"+ns,Sn="__reactContainer$"+ns,Qh="__reactEvents$"+ns,y3="__reactListeners$"+ns,v3="__reactHandles$"+ns;function zi(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rm(t);t!==null;){if(n=t[sn])return n;t=Rm(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[sn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function eu(t){return t[ma]||null}var Zh=[],xr=-1;function fi(t){return{current:t}}function de(t){0>xr||(t.current=Zh[xr],Zh[xr]=null,xr--)}function oe(t,e){xr++,Zh[xr]=t.current,t.current=e}var li={},Xe=fi(li),lt=fi(!1),Ui=li;function Fr(t,e){var n=t.type.contextTypes;if(!n)return li;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ct(t){return t=t.childContextTypes,t!=null}function lc(){de(lt),de(Xe)}function Dm(t,e,n){if(Xe.current!==li)throw Error(A(168));oe(Xe,e),oe(lt,n)}function Yv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(A(108,n4(t)||"Unknown",r));return me({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,Ui=Xe.current,oe(Xe,t),oe(lt,lt.current),!0}function $m(t,e,n){var i=t.stateNode;if(!i)throw Error(A(169));n?(t=Yv(t,e,Ui),i.__reactInternalMemoizedMergedChildContext=t,de(lt),de(Xe),oe(Xe,t)):de(lt),oe(lt,n)}var mn=null,tu=!1,td=!1;function Xv(t){mn===null?mn=[t]:mn.push(t)}function x3(t){tu=!0,Xv(t)}function pi(){if(!td&&mn!==null){td=!0;var t=0,e=re;try{var n=mn;for(re=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mn=null,tu=!1}catch(r){throw mn!==null&&(mn=mn.slice(t+1)),bv(Pp,pi),r}finally{re=e,td=!1}}return null}var br=[],kr=0,uc=null,dc=0,Tt=[],Et=0,Wi=null,vn=1,xn="";function Si(t,e){br[kr++]=dc,br[kr++]=uc,uc=t,dc=e}function qv(t,e,n){Tt[Et++]=vn,Tt[Et++]=xn,Tt[Et++]=Wi,Wi=t;var i=vn;t=xn;var r=32-Kt(i)-1;i&=~(1<<r),n+=1;var s=32-Kt(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vn=1<<32-Kt(e)+r|n<<r|i,xn=s+t}else vn=1<<s|n<<r|i,xn=t}function Ip(t){t.return!==null&&(Si(t,1),qv(t,1,0))}function Rp(t){for(;t===uc;)uc=br[--kr],br[kr]=null,dc=br[--kr],br[kr]=null;for(;t===Wi;)Wi=Tt[--Et],Tt[Et]=null,xn=Tt[--Et],Tt[Et]=null,vn=Tt[--Et],Tt[Et]=null}var vt=null,yt=null,he=!1,Ut=null;function Jv(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wi!==null?{id:vn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(he){var e=yt;if(e){var n=e;if(!Fm(t,e)){if(ef(t))throw Error(A(418));e=Zn(n.nextSibling);var i=vt;e&&Fm(t,e)?Jv(i,n):(t.flags=t.flags&-4097|2,he=!1,vt=t)}}else{if(ef(t))throw Error(A(418));t.flags=t.flags&-4097|2,he=!1,vt=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function vo(t){if(t!==vt)return!1;if(!he)return Bm(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=yt)){if(ef(t))throw Qv(),Error(A(418));for(;e;)Jv(t,e),e=Zn(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?Zn(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=yt;t;)t=Zn(t.nextSibling)}function Br(){yt=vt=null,he=!1}function Dp(t){Ut===null?Ut=[t]:Ut.push(t)}var b3=En.ReactCurrentBatchConfig;function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var i=n.stateNode}if(!i)throw Error(A(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function Zv(t){function e(x,v){if(t){var b=x.deletions;b===null?(x.deletions=[v],x.flags|=16):b.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function i(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function r(x,v){return x=ii(x,v),x.index=0,x.sibling=null,x}function s(x,v,b){return x.index=b,t?(b=x.alternate,b!==null?(b=b.index,b<v?(x.flags|=2,v):b):(x.flags|=2,v)):(x.flags|=1048576,v)}function a(x){return t&&x.alternate===null&&(x.flags|=2),x}function o(x,v,b,w){return v===null||v.tag!==6?(v=ld(b,x.mode,w),v.return=x,v):(v=r(v,b),v.return=x,v)}function l(x,v,b,w){var j=b.type;return j===pr?d(x,v,b.props.children,w,b.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&Nm(j)===v.type)?(w=r(v,b.props),w.ref=gs(x,v,b),w.return=x,w):(w=Vl(b.type,b.key,b.props,null,x.mode,w),w.ref=gs(x,v,b),w.return=x,w)}function u(x,v,b,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=cd(b,x.mode,w),v.return=x,v):(v=r(v,b.children||[]),v.return=x,v)}function d(x,v,b,w,j){return v===null||v.tag!==7?(v=Ni(b,x.mode,w,j),v.return=x,v):(v=r(v,b),v.return=x,v)}function h(x,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ld(""+v,x.mode,b),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return b=Vl(v.type,v.key,v.props,null,x.mode,b),b.ref=gs(x,null,v),b.return=x,b;case fr:return v=cd(v,x.mode,b),v.return=x,v;case Fn:var w=v._init;return h(x,w(v._payload),b)}if(Es(v)||us(v))return v=Ni(v,x.mode,b,null),v.return=x,v;xo(x,v)}return null}function f(x,v,b,w){var j=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return j!==null?null:o(x,v,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:return b.key===j?l(x,v,b,w):null;case fr:return b.key===j?u(x,v,b,w):null;case Fn:return j=b._init,f(x,v,j(b._payload),w)}if(Es(b)||us(b))return j!==null?null:d(x,v,b,w,null);xo(x,b)}return null}function p(x,v,b,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return x=x.get(b)||null,o(v,x,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return x=x.get(w.key===null?b:w.key)||null,l(v,x,w,j);case fr:return x=x.get(w.key===null?b:w.key)||null,u(v,x,w,j);case Fn:var C=w._init;return p(x,v,b,C(w._payload),j)}if(Es(w)||us(w))return x=x.get(b)||null,d(v,x,w,j,null);xo(v,w)}return null}function m(x,v,b,w){for(var j=null,C=null,S=v,P=v=0,E=null;S!==null&&P<b.length;P++){S.index>P?(E=S,S=null):E=S.sibling;var M=f(x,S,b[P],w);if(M===null){S===null&&(S=E);break}t&&S&&M.alternate===null&&e(x,S),v=s(M,v,P),C===null?j=M:C.sibling=M,C=M,S=E}if(P===b.length)return n(x,S),he&&Si(x,P),j;if(S===null){for(;P<b.length;P++)S=h(x,b[P],w),S!==null&&(v=s(S,v,P),C===null?j=S:C.sibling=S,C=S);return he&&Si(x,P),j}for(S=i(x,S);P<b.length;P++)E=p(S,x,P,b[P],w),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?P:E.key),v=s(E,v,P),C===null?j=E:C.sibling=E,C=E);return t&&S.forEach(function(O){return e(x,O)}),he&&Si(x,P),j}function y(x,v,b,w){var j=us(b);if(typeof j!="function")throw Error(A(150));if(b=j.call(b),b==null)throw Error(A(151));for(var C=j=null,S=v,P=v=0,E=null,M=b.next();S!==null&&!M.done;P++,M=b.next()){S.index>P?(E=S,S=null):E=S.sibling;var O=f(x,S,M.value,w);if(O===null){S===null&&(S=E);break}t&&S&&O.alternate===null&&e(x,S),v=s(O,v,P),C===null?j=O:C.sibling=O,C=O,S=E}if(M.done)return n(x,S),he&&Si(x,P),j;if(S===null){for(;!M.done;P++,M=b.next())M=h(x,M.value,w),M!==null&&(v=s(M,v,P),C===null?j=M:C.sibling=M,C=M);return he&&Si(x,P),j}for(S=i(x,S);!M.done;P++,M=b.next())M=p(S,x,P,M.value,w),M!==null&&(t&&M.alternate!==null&&S.delete(M.key===null?P:M.key),v=s(M,v,P),C===null?j=M:C.sibling=M,C=M);return t&&S.forEach(function(R){return e(x,R)}),he&&Si(x,P),j}function k(x,v,b,w){if(typeof b=="object"&&b!==null&&b.type===pr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:e:{for(var j=b.key,C=v;C!==null;){if(C.key===j){if(j=b.type,j===pr){if(C.tag===7){n(x,C.sibling),v=r(C,b.props.children),v.return=x,x=v;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&Nm(j)===C.type){n(x,C.sibling),v=r(C,b.props),v.ref=gs(x,C,b),v.return=x,x=v;break e}n(x,C);break}else e(x,C);C=C.sibling}b.type===pr?(v=Ni(b.props.children,x.mode,w,b.key),v.return=x,x=v):(w=Vl(b.type,b.key,b.props,null,x.mode,w),w.ref=gs(x,v,b),w.return=x,x=w)}return a(x);case fr:e:{for(C=b.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(x,v.sibling),v=r(v,b.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=cd(b,x.mode,w),v.return=x,x=v}return a(x);case Fn:return C=b._init,k(x,v,C(b._payload),w)}if(Es(b))return m(x,v,b,w);if(us(b))return y(x,v,b,w);xo(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(x,v.sibling),v=r(v,b),v.return=x,x=v):(n(x,v),v=ld(b,x.mode,w),v.return=x,x=v),a(x)):n(x,v)}return k}var Nr=Zv(!0),ex=Zv(!1),hc=fi(null),fc=null,wr=null,$p=null;function Fp(){$p=wr=fc=null}function Bp(t){var e=hc.current;de(hc),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Or(t,e){fc=t,$p=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if($p!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(fc===null)throw Error(A(308));wr=t,fc.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Ii=null;function Np(t){Ii===null?Ii=[t]:Ii.push(t)}function tx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Np(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pn(t,i)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,q&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pn(t,n)}return r=i.interleaved,r===null?(e.next=e,Np(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cp(t,n)}}function Vm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;Bn=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,y=o;switch(f=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=me({},h,f);break e;case 2:Bn=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gi|=a,t.lanes=a,t.memoizedState=h}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(A(191,r));r.call(i)}}}var Ka={},on=fi(Ka),ya=fi(Ka),va=fi(Ka);function Ri(t){if(t===Ka)throw Error(A(174));return t}function Hp(t,e){switch(oe(va,e),oe(ya,t),oe(on,Ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}de(on),oe(on,e)}function Vr(){de(on),de(ya),de(va)}function ix(t){Ri(va.current);var e=Ri(on.current),n=Rh(e,t.type);e!==n&&(oe(ya,t),oe(on,n))}function Up(t){ya.current===t&&(de(on),de(ya))}var fe=fi(0);function gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function Wp(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var Dl=En.ReactCurrentDispatcher,id=En.ReactCurrentBatchConfig,Ki=0,ge=null,Te=null,Le=null,mc=!1,Us=!1,xa=0,k3=0;function Ve(){throw Error(A(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,s){if(Ki=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?S3:P3,t=n(i,r),Us){s=0;do{if(Us=!1,xa=0,25<=s)throw Error(A(301));s+=1,Le=Te=null,e.updateQueue=null,Dl.current=C3,t=n(i,r)}while(Us)}if(Dl.current=yc,e=Te!==null&&Te.next!==null,Ki=0,Le=Te=ge=null,mc=!1,e)throw Error(A(300));return t}function Yp(){var t=xa!==0;return xa=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ge.memoizedState=Le=t:Le=Le.next=t,Le}function Rt(){if(Te===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Le===null?ge.memoizedState:Le.next;if(e!==null)Le=e,Te=t;else{if(t===null)throw Error(A(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?ge.memoizedState=Le=t:Le=Le.next=t}return Le}function ba(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=Rt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var i=Te,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Ki&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ge.lanes|=d,Gi|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Yt(i,e.memoizedState)||(ot=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ge.lanes|=s,Gi|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sd(t){var e=Rt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rx(){}function sx(t,e){var n=ge,i=Rt(),r=e(),s=!Yt(i.memoizedState,r);if(s&&(i.memoizedState=r,ot=!0),i=i.queue,Xp(lx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ka(9,ox.bind(null,n,i,r,e),void 0,null),Ie===null)throw Error(A(349));Ki&30||ax(n,e,r)}return r}function ax(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ox(t,e,n,i){e.value=n,e.getSnapshot=i,cx(e)&&ux(t)}function lx(t,e,n){return n(function(){cx(e)&&ux(t)})}function cx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function ux(t){var e=Pn(t,1);e!==null&&Gt(e,t,1,-1)}function Um(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=_3.bind(null,ge,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dx(){return Rt().memoizedState}function $l(t,e,n,i){var r=en();ge.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function nu(t,e,n,i){var r=Rt();i=i===void 0?null:i;var s=void 0;if(Te!==null){var a=Te.memoizedState;if(s=a.destroy,i!==null&&Kp(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}ge.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Wm(t,e){return $l(8390656,8,t,e)}function Xp(t,e){return nu(2048,8,t,e)}function hx(t,e){return nu(4,2,t,e)}function fx(t,e){return nu(4,4,t,e)}function px(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gx(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,px.bind(null,e,t),n)}function qp(){}function mx(t,e){var n=Rt();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yx(t,e){var n=Rt();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vx(t,e,n){return Ki&21?(Yt(n,e)||(n=jv(),ge.lanes|=n,Gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function w3(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var i=id.transition;id.transition={};try{t(!1),e()}finally{re=n,id.transition=i}}function xx(){return Rt().memoizedState}function j3(t,e,n){var i=ni(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},bx(t))kx(e,n);else if(n=tx(t,e,n,i),n!==null){var r=Qe();Gt(n,t,i,r),wx(n,e,i)}}function _3(t,e,n){var i=ni(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(bx(t))kx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yt(o,a)){var l=e.interleaved;l===null?(r.next=r,Np(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tx(t,e,r,i),n!==null&&(r=Qe(),Gt(n,t,i,r),wx(n,e,i))}}function bx(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function kx(t,e){Us=mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cp(t,n)}}var yc={readContext:It,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},S3={readContext:It,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,px.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=en();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=j3.bind(null,ge,t),[i.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Um,useDebugValue:qp,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Um(!1),e=t[0];return t=w3.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ge,r=en();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ie===null)throw Error(A(349));Ki&30||ax(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wm(lx.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,ox.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ie.identifierPrefix;if(he){var n=xn,i=vn;n=(i&~(1<<32-Kt(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},P3={readContext:It,useCallback:mx,useContext:It,useEffect:Xp,useImperativeHandle:gx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:yx,useReducer:rd,useRef:dx,useState:function(){return rd(ba)},useDebugValue:qp,useDeferredValue:function(t){var e=Rt();return vx(e,Te.memoizedState,t)},useTransition:function(){var t=rd(ba)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:rx,useSyncExternalStore:sx,useId:xx,unstable_isNewReconciler:!1},C3={readContext:It,useCallback:mx,useContext:It,useEffect:Xp,useImperativeHandle:gx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:yx,useReducer:sd,useRef:dx,useState:function(){return sd(ba)},useDebugValue:qp,useDeferredValue:function(t){var e=Rt();return Te===null?e.memoizedState=t:vx(e,Te.memoizedState,t)},useTransition:function(){var t=sd(ba)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:rx,useSyncExternalStore:sx,useId:xx,unstable_isNewReconciler:!1};function Nt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qe(),r=ni(t),s=kn(i,r);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,r),e!==null&&(Gt(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qe(),r=ni(t),s=kn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,r),e!==null&&(Gt(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),i=ni(t),r=kn(n,i);r.tag=2,e!=null&&(r.callback=e),e=ei(t,r,i),e!==null&&(Gt(e,t,i,n),Rl(e,t,i))}};function Km(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function jx(t,e,n){var i=!1,r=li,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(r=ct(e)?Ui:Xe.current,i=e.contextTypes,s=(i=i!=null)?Fr(t,r):li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=It(s):(s=ct(e)?Ui:Xe.current,r.context=Fr(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&iu.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,e){try{var n="",i=e;do n+=t4(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ad(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T3=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xc||(xc=!0,mf=i),af(t,e)},n}function Sx(t,e,n){n=kn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new T3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=V3.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var E3=En.ReactCurrentOwner,ot=!1;function Je(t,e,n,i){e.child=t===null?ex(e,null,n,i):Nr(e,t.child,n,i)}function Jm(t,e,n,i,r){n=n.render;var s=e.ref;return Or(e,r),i=Gp(t,e,n,i,s,r),n=Yp(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cn(t,e,r)):(he&&n&&Ip(e),e.flags|=1,Je(t,e,i,r),e.child)}function Qm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Px(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(a,i)&&t.ref===e.ref)return Cn(t,e,r)}return e.flags|=1,t=ii(s,i),t.ref=e.ref,t.return=e,e.child=t}function Px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(ot=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,Cn(t,e,r)}return of(t,e,n,i,r)}function Cx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(_r,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(_r,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,oe(_r,mt),mt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,oe(_r,mt),mt|=i;return Je(t,e,r,n),e.child}function Tx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,i,r){var s=ct(n)?Ui:Xe.current;return s=Fr(e,s),Or(e,r),n=Gp(t,e,n,i,s,r),i=Yp(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Cn(t,e,r)):(he&&i&&Ip(e),e.flags|=1,Je(t,e,n,r),e.child)}function Zm(t,e,n,i,r){if(ct(n)){var s=!0;cc(e)}else s=!1;if(Or(e,r),e.stateNode===null)Fl(t,e),jx(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ct(n)?Ui:Xe.current,u=Fr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Gm(e,a,i,u),Bn=!1;var f=e.memoizedState;a.state=f,pc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||lt.current||Bn?(typeof d=="function"&&(rf(e,n,d,i),l=e.memoizedState),(o=Bn||Km(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,nx(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Nt(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=ct(n)?Ui:Xe.current,l=Fr(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Gm(e,a,i,l),Bn=!1,f=e.memoizedState,a.state=f,pc(e,i,a,r);var m=e.memoizedState;o!==h||f!==m||lt.current||Bn?(typeof p=="function"&&(rf(e,n,p,i),m=e.memoizedState),(u=Bn||Km(e,n,u,i,f,m,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){Tx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&$m(e,n,!1),Cn(t,e,s);i=e.stateNode,E3.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,o,s)):Je(t,e,o,s),e.memoizedState=i.state,r&&$m(e,n,!0),e.child}function Ex(t){var e=t.stateNode;e.pendingContext?Dm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dm(t,e.context,!1),Hp(t,e.containerInfo)}function e0(t,e,n,i,r){return Br(),Dp(r),e.flags|=256,Je(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mx(t,e,n){var i=e.pendingProps,r=fe.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),oe(fe,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=au(a,i,0,null),t=Ni(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):Jp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return M3(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ii(o,s):(s=Ni(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?uf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=ii(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jp(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&Dp(i),Nr(e,t.child,null,n),t=Jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M3(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ad(Error(A(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=au({mode:"visible",children:i.children},r,0,null),s=Ni(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Nr(e,t.child,null,a),e.child.memoizedState=uf(a),e.memoizedState=cf,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(A(419)),i=ad(s,i,void 0),bo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ot||o){if(i=Ie,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pn(t,r),Gt(i,t,r,-1))}return ig(),i=ad(Error(A(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yt=Zn(r.nextSibling),vt=e,he=!0,Ut=null,t!==null&&(Tt[Et++]=vn,Tt[Et++]=xn,Tt[Et++]=Wi,vn=t.id,xn=t.overflow,Wi=e),e=Jp(e,i.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function od(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ax(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Je(t,e,i.children,n),i=fe.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(oe(fe,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),od(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function A3(t,e,n){switch(e.tag){case 3:Ex(e),Br();break;case 5:ix(e);break;case 1:ct(e.type)&&cc(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;oe(hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(oe(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?Mx(t,e,n):(oe(fe,fe.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);oe(fe,fe.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ax(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(fe,fe.current),i)break;return null;case 22:case 23:return e.lanes=0,Cx(t,e,n)}return Cn(t,e,n)}var Lx,df,Ox,zx;Lx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};Ox=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ri(on.current);var s=null;switch(n){case"input":r=Lh(t,r),i=Lh(t,i),s=[];break;case"select":r=me({},r,{value:void 0}),i=me({},i,{value:void 0}),s=[];break;case"textarea":r=Ih(t,r),i=Ih(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}Dh(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ce("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ms(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L3(t,e,n){var i=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return ct(e.type)&&lc(),He(e),null;case 3:return i=e.stateNode,Vr(),de(lt),de(Xe),Wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(xf(Ut),Ut=null))),df(t,e),He(e),null;case 5:Up(e);var r=Ri(va.current);if(n=e.type,t!==null&&e.stateNode!=null)Ox(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(A(166));return He(e),null}if(t=Ri(on.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sn]=e,i[ma]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",i),ce("close",i);break;case"iframe":case"object":case"embed":ce("load",i);break;case"video":case"audio":for(r=0;r<As.length;r++)ce(As[r],i);break;case"source":ce("error",i);break;case"img":case"image":case"link":ce("error",i),ce("load",i);break;case"details":ce("toggle",i);break;case"input":um(i,s),ce("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ce("invalid",i);break;case"textarea":hm(i,s),ce("invalid",i)}Dh(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&yo(i.textContent,o,t),r=["children",""+o]):aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ce("scroll",i)}switch(n){case"input":lo(i),dm(i,s,!0);break;case"textarea":lo(i),fm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[sn]=e,t[ma]=i,Lx(t,e,!1,!1),e.stateNode=t;e:{switch(a=$h(n,i),n){case"dialog":ce("cancel",t),ce("close",t),r=i;break;case"iframe":case"object":case"embed":ce("load",t),r=i;break;case"video":case"audio":for(r=0;r<As.length;r++)ce(As[r],t);r=i;break;case"source":ce("error",t),r=i;break;case"img":case"image":case"link":ce("error",t),ce("load",t),r=i;break;case"details":ce("toggle",t),r=i;break;case"input":um(t,i),r=Lh(t,i),ce("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=me({},i,{value:void 0}),ce("invalid",t);break;case"textarea":hm(t,i),r=Ih(t,i),ce("invalid",t);break;default:r=i}Dh(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?dv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ce("scroll",t):l!=null&&kp(t,s,l,a))}switch(n){case"input":lo(t),dm(t,i,!1);break;case"textarea":lo(t),fm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+oi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Er(t,!!i.multiple,s,!1):i.defaultValue!=null&&Er(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)zx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(A(166));if(n=Ri(va.current),Ri(on.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[sn]=e,(s=i.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sn]=e,e.stateNode=i}return He(e),null;case 13:if(de(fe),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&yt!==null&&e.mode&1&&!(e.flags&128))Qv(),Br(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[sn]=e}else Br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Ut!==null&&(xf(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Ee===0&&(Ee=3):ig())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Vr(),df(t,e),t===null&&pa(e.stateNode.containerInfo),He(e),null;case 10:return Bp(e.type._context),He(e),null;case 17:return ct(e.type)&&lc(),He(e),null;case 19:if(de(fe),s=e.memoizedState,s===null)return He(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ms(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=gc(t),a!==null){for(e.flags|=128,ms(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Ur&&(e.flags|=128,i=!0,ms(s,!1),e.lanes=4194304)}else{if(!i)if(t=gc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return He(e),null}else 2*ke()-s.renderingStartTime>Ur&&n!==1073741824&&(e.flags|=128,i=!0,ms(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=fe.current,oe(fe,i?n&1|2:n&1),e):(He(e),null);case 22:case 23:return ng(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function O3(t,e){switch(Rp(e),e.tag){case 1:return ct(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vr(),de(lt),de(Xe),Wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Up(e),null;case 13:if(de(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(fe),null;case 4:return Vr(),null;case 10:return Bp(e.type._context),null;case 22:case 23:return ng(),null;case 24:return null;default:return null}}var ko=!1,Ge=!1,z3=typeof WeakSet=="function"?WeakSet:Set,z=null;function jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ye(t,e,i)}else n.current=null}function hf(t,e,n){try{n()}catch(i){ye(t,e,i)}}var n0=!1;function I3(t,e){if(Yh=rc,t=Fv(),zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xh={focusedElem:t,selectionRange:n},rc=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,k=m.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nt(e.type,y),k);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ye(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return m=n0,n0=!1,m}function Ws(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,n,s)}r=r.next}while(r!==i)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ix(t){var e=t.alternate;e!==null&&(t.alternate=null,Ix(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[ma],delete e[Qh],delete e[y3],delete e[v3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rx(t){return t.tag===5||t.tag===3||t.tag===4}function i0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var $e=null,Vt=!1;function An(t,e,n){for(n=n.child;n!==null;)Dx(t,e,n),n=n.sibling}function Dx(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:Ge||jr(n,e);case 6:var i=$e,r=Vt;$e=null,An(t,e,n),$e=i,Vt=r,$e!==null&&(Vt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Vt?(t=$e,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),da(t)):ed($e,n.stateNode));break;case 4:i=$e,r=Vt,$e=n.stateNode.containerInfo,Vt=!0,An(t,e,n),$e=i,Vt=r;break;case 0:case 11:case 14:case 15:if(!Ge&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hf(n,e,a),r=r.next}while(r!==i)}An(t,e,n);break;case 1:if(!Ge&&(jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ye(n,e,o)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(Ge=(i=Ge)||n.memoizedState!==null,An(t,e,n),Ge=i):An(t,e,n);break;default:An(t,e,n)}}function r0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new z3),e.forEach(function(i){var r=U3.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$e=o.stateNode,Vt=!1;break e;case 3:$e=o.stateNode.containerInfo,Vt=!0;break e;case 4:$e=o.stateNode.containerInfo,Vt=!0;break e}o=o.return}if($e===null)throw Error(A(160));Dx(s,a,r),$e=null,Vt=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ye(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$x(e,t),e=e.sibling}function $x(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Xt(t),i&4){try{Ws(3,t,t.return),ru(3,t)}catch(y){ye(t,t.return,y)}try{Ws(5,t,t.return)}catch(y){ye(t,t.return,y)}}break;case 1:Ft(e,t),Xt(t),i&512&&n!==null&&jr(n,n.return);break;case 5:if(Ft(e,t),Xt(t),i&512&&n!==null&&jr(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(y){ye(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&av(r,s),$h(o,a);var u=$h(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?dv(r,h):d==="dangerouslySetInnerHTML"?cv(r,h):d==="children"?oa(r,h):kp(r,d,h,u)}switch(o){case"input":Oh(r,s);break;case"textarea":ov(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Er(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Er(r,!!s.multiple,s.defaultValue,!0):Er(r,!!s.multiple,s.multiple?[]:"",!1))}r[ma]=s}catch(y){ye(t,t.return,y)}}break;case 6:if(Ft(e,t),Xt(t),i&4){if(t.stateNode===null)throw Error(A(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ye(t,t.return,y)}}break;case 3:if(Ft(e,t),Xt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){ye(t,t.return,y)}break;case 4:Ft(e,t),Xt(t);break;case 13:Ft(e,t),Xt(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(eg=ke())),i&4&&r0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||d,Ft(e,t),Ge=u):Ft(e,t),Xt(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(z=t,d=t.child;d!==null;){for(h=z=d;z!==null;){switch(f=z,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ws(4,f,f.return);break;case 1:jr(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){ye(i,n,y)}}break;case 5:jr(f,f.return);break;case 22:if(f.memoizedState!==null){a0(h);continue}}p!==null?(p.return=f,z=p):a0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=uv("display",a))}catch(y){ye(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ye(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),Xt(t),i&4&&r0(t);break;case 21:break;default:Ft(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rx(n)){var i=n;break e}n=n.return}throw Error(A(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=i0(t);gf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=i0(t);pf(t,o,a);break;default:throw Error(A(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function R3(t,e,n){z=t,Fx(t)}function Fx(t,e,n){for(var i=(t.mode&1)!==0;z!==null;){var r=z,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ge;o=ko;var u=Ge;if(ko=a,(Ge=l)&&!u)for(z=r;z!==null;)a=z,l=a.child,a.tag===22&&a.memoizedState!==null?o0(r):l!==null?(l.return=a,z=l):o0(r);for(;s!==null;)z=s,Fx(s),s=s.sibling;z=r,ko=o,Ge=u}s0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,z=s):s0(t)}}function s0(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ge)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&da(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ge||e.flags&512&&ff(e)}catch(f){ye(e,e.return,f)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function a0(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function o0(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(l){ye(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ye(e,r,l)}}var s=e.return;try{ff(e)}catch(l){ye(e,s,l)}break;case 5:var a=e.return;try{ff(e)}catch(l){ye(e,a,l)}}}catch(l){ye(e,e.return,l)}if(e===t){z=null;break}var o=e.sibling;if(o!==null){o.return=e.return,z=o;break}z=e.return}}var D3=Math.ceil,vc=En.ReactCurrentDispatcher,Qp=En.ReactCurrentOwner,Ot=En.ReactCurrentBatchConfig,q=0,Ie=null,Ce=null,Be=0,mt=0,_r=fi(0),Ee=0,wa=null,Gi=0,su=0,Zp=0,Ks=null,it=null,eg=0,Ur=1/0,gn=null,xc=!1,mf=null,ti=null,wo=!1,Gn=null,bc=0,Gs=0,yf=null,Bl=-1,Nl=0;function Qe(){return q&6?ke():Bl!==-1?Bl:Bl=ke()}function ni(t){return t.mode&1?q&2&&Be!==0?Be&-Be:b3.transition!==null?(Nl===0&&(Nl=jv()),Nl):(t=re,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function Gt(t,e,n,i){if(50<Gs)throw Gs=0,yf=null,Error(A(185));Ha(t,n,i),(!(q&2)||t!==Ie)&&(t===Ie&&(!(q&2)&&(su|=n),Ee===4&&Un(t,Be)),ut(t,i),n===1&&q===0&&!(e.mode&1)&&(Ur=ke()+500,tu&&pi()))}function ut(t,e){var n=t.callbackNode;b4(t,e);var i=ic(t,t===Ie?Be:0);if(i===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?x3(l0.bind(null,t)):Xv(l0.bind(null,t)),g3(function(){!(q&6)&&pi()}),n=null;else{switch(_v(i)){case 1:n=Pp;break;case 4:n=kv;break;case 16:n=nc;break;case 536870912:n=wv;break;default:n=nc}n=Gx(n,Bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bx(t,e){if(Bl=-1,Nl=0,q&6)throw Error(A(327));var n=t.callbackNode;if(zr()&&t.callbackNode!==n)return null;var i=ic(t,t===Ie?Be:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kc(t,i);else{e=i;var r=q;q|=2;var s=Vx();(Ie!==t||Be!==e)&&(gn=null,Ur=ke()+500,Bi(t,e));do try{B3();break}catch(o){Nx(t,o)}while(!0);Fp(),vc.current=s,q=r,Ce!==null?e=0:(Ie=null,Be=0,e=Ee)}if(e!==0){if(e===2&&(r=Hh(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=wa,Bi(t,0),Un(t,i),ut(t,ke()),n;if(e===6)Un(t,i);else{if(r=t.current.alternate,!(i&30)&&!$3(r)&&(e=kc(t,i),e===2&&(s=Hh(t),s!==0&&(i=s,e=vf(t,s))),e===1))throw n=wa,Bi(t,0),Un(t,i),ut(t,ke()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(A(345));case 2:Pi(t,it,gn);break;case 3:if(Un(t,i),(i&130023424)===i&&(e=eg+500-ke(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qe(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jh(Pi.bind(null,t,it,gn),e);break}Pi(t,it,gn);break;case 4:if(Un(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kt(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*D3(i/1960))-i,10<i){t.timeoutHandle=Jh(Pi.bind(null,t,it,gn),i);break}Pi(t,it,gn);break;case 5:Pi(t,it,gn);break;default:throw Error(A(329))}}}return ut(t,ke()),t.callbackNode===n?Bx.bind(null,t):null}function vf(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=kc(t,e),t!==2&&(e=it,it=n,e!==null&&xf(e)),t}function xf(t){it===null?it=t:it.push.apply(it,t)}function $3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yt(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Zp,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),i=1<<n;t[n]=-1,e&=~i}}function l0(t){if(q&6)throw Error(A(327));zr();var e=ic(t,0);if(!(e&1))return ut(t,ke()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var i=Hh(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=wa,Bi(t,0),Un(t,e),ut(t,ke()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pi(t,it,gn),ut(t,ke()),null}function tg(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Ur=ke()+500,tu&&pi())}}function Yi(t){Gn!==null&&Gn.tag===0&&!(q&6)&&zr();var e=q;q|=1;var n=Ot.transition,i=re;try{if(Ot.transition=null,re=1,t)return t()}finally{re=i,Ot.transition=n,q=e,!(q&6)&&pi()}}function ng(){mt=_r.current,de(_r)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p3(n)),Ce!==null)for(n=Ce.return;n!==null;){var i=n;switch(Rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:Vr(),de(lt),de(Xe),Wp();break;case 5:Up(i);break;case 4:Vr();break;case 13:de(fe);break;case 19:de(fe);break;case 10:Bp(i.type._context);break;case 22:case 23:ng()}n=n.return}if(Ie=t,Ce=t=ii(t.current,null),Be=mt=e,Ee=0,wa=null,Zp=su=Gi=0,it=Ks=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ii=null}return t}function Nx(t,e){do{var n=Ce;try{if(Fp(),Dl.current=yc,mc){for(var i=ge.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(Ki=0,Le=Te=ge=null,Us=!1,xa=0,Qp.current=null,n===null||n.return===null){Ee=1,wa=e,Ce=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Be,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Xm(a);if(p!==null){p.flags&=-257,qm(p,a,o,s,e),p.mode&1&&Ym(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Ym(s,u,e),ig();break e}l=Error(A(426))}}else if(he&&o.mode&1){var k=Xm(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),qm(k,a,o,s,e),Dp(Hr(l,o));break e}}s=l=Hr(l,o),Ee!==4&&(Ee=2),Ks===null?Ks=[s]:Ks.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=_x(s,l,e);Vm(s,x);break e;case 1:o=l;var v=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Sx(s,o,e);Vm(s,w);break e}}s=s.return}while(s!==null)}Ux(n)}catch(j){e=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Vx(){var t=vc.current;return vc.current=yc,t===null?yc:t}function ig(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ie===null||!(Gi&268435455)&&!(su&268435455)||Un(Ie,Be)}function kc(t,e){var n=q;q|=2;var i=Vx();(Ie!==t||Be!==e)&&(gn=null,Bi(t,e));do try{F3();break}catch(r){Nx(t,r)}while(!0);if(Fp(),q=n,vc.current=i,Ce!==null)throw Error(A(261));return Ie=null,Be=0,Ee}function F3(){for(;Ce!==null;)Hx(Ce)}function B3(){for(;Ce!==null&&!d4();)Hx(Ce)}function Hx(t){var e=Kx(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Ux(t):Ce=e,Qp.current=null}function Ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O3(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,Ce=null;return}}else if(n=L3(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ee===0&&(Ee=5)}function Pi(t,e,n){var i=re,r=Ot.transition;try{Ot.transition=null,re=1,N3(t,e,n,i)}finally{Ot.transition=r,re=i}return null}function N3(t,e,n,i){do zr();while(Gn!==null);if(q&6)throw Error(A(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k4(t,s),t===Ie&&(Ce=Ie=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Gx(nc,function(){return zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var a=re;re=1;var o=q;q|=4,Qp.current=null,I3(t,n),$x(n,t),o3(Xh),rc=!!Yh,Xh=Yh=null,t.current=n,R3(n),h4(),q=o,re=a,Ot.transition=s}else t.current=n;if(wo&&(wo=!1,Gn=t,bc=r),s=t.pendingLanes,s===0&&(ti=null),g4(n.stateNode),ut(t,ke()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xc)throw xc=!1,t=mf,mf=null,t;return bc&1&&t.tag!==0&&zr(),s=t.pendingLanes,s&1?t===yf?Gs++:(Gs=0,yf=t):Gs=0,pi(),null}function zr(){if(Gn!==null){var t=_v(bc),e=Ot.transition,n=re;try{if(Ot.transition=null,re=16>t?16:t,Gn===null)var i=!1;else{if(t=Gn,Gn=null,bc=0,q&6)throw Error(A(331));var r=q;for(q|=4,z=t.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Ws(8,d,s)}var h=d.child;if(h!==null)h.return=d,z=h;else for(;z!==null;){d=z;var f=d.sibling,p=d.return;if(Ix(d),d===u){z=null;break}if(f!==null){f.return=p,z=f;break}z=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}var v=t.current;for(z=v;z!==null;){a=z;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,z=b;else e:for(a=v;z!==null;){if(o=z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ru(9,o)}}catch(j){ye(o,o.return,j)}if(o===a){z=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,z=w;break e}z=o.return}}if(q=r,pi(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(qc,t)}catch{}i=!0}return i}finally{re=n,Ot.transition=e}}return!1}function c0(t,e,n){e=Hr(n,e),e=_x(t,e,1),t=ei(t,e,1),e=Qe(),t!==null&&(Ha(t,1,e),ut(t,e))}function ye(t,e,n){if(t.tag===3)c0(t,t,n);else for(;e!==null;){if(e.tag===3){c0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ti===null||!ti.has(i))){t=Hr(n,t),t=Sx(e,t,1),e=ei(e,t,1),t=Qe(),e!==null&&(Ha(e,1,t),ut(e,t));break}}e=e.return}}function V3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Be&n)===n&&(Ee===4||Ee===3&&(Be&130023424)===Be&&500>ke()-eg?Bi(t,0):Zp|=n),ut(t,e)}function Wx(t,e){e===0&&(t.mode&1?(e=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):e=1);var n=Qe();t=Pn(t,e),t!==null&&(Ha(t,e,n),ut(t,n))}function H3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wx(t,n)}function U3(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(e),Wx(t,n)}var Kx;Kx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,A3(t,e,n);ot=!!(t.flags&131072)}else ot=!1,he&&e.flags&1048576&&qv(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=Fr(e,Xe.current);Or(e,n),r=Gp(null,e,i,t,r,n);var s=Yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vp(e),r.updater=iu,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,he&&s&&Ip(e),Je(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=K3(i),t=Nt(i,t),r){case 0:e=of(null,e,i,t,n);break e;case 1:e=Zm(null,e,i,t,n);break e;case 11:e=Jm(null,e,i,t,n);break e;case 14:e=Qm(null,e,i,Nt(i.type,t),n);break e}throw Error(A(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Zm(t,e,i,r,n);case 3:e:{if(Ex(e),t===null)throw Error(A(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nx(t,e),pc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hr(Error(A(423)),e),e=e0(t,e,i,n,r);break e}else if(i!==r){r=Hr(Error(A(424)),e),e=e0(t,e,i,n,r);break e}else for(yt=Zn(e.stateNode.containerInfo.firstChild),vt=e,he=!0,Ut=null,n=ex(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),i===r){e=Cn(t,e,n);break e}Je(t,e,i,n)}e=e.child}return e;case 5:return ix(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,qh(i,r)?a=null:s!==null&&qh(i,s)&&(e.flags|=32),Tx(t,e),Je(t,e,a,n),e.child;case 6:return t===null&&tf(e),null;case 13:return Mx(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Nr(e,null,i,n):Je(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Jm(t,e,i,r,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,oe(hc,i._currentValue),i._currentValue=a,s!==null)if(Yt(s.value,a)){if(s.children===r.children&&!lt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=kn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(A(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Je(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Or(e,n),r=It(r),i=i(r),e.flags|=1,Je(t,e,i,n),e.child;case 14:return i=e.type,r=Nt(i,e.pendingProps),r=Nt(i.type,r),Qm(t,e,i,r,n);case 15:return Px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Fl(t,e),e.tag=1,ct(i)?(t=!0,cc(e)):t=!1,Or(e,n),jx(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return Ax(t,e,n);case 22:return Cx(t,e,n)}throw Error(A(156,e.tag))};function Gx(t,e){return bv(t,e)}function W3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,i){return new W3(t,e,n,i)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K3(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jp)return 11;if(t===_p)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")rg(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case pr:return Ni(n.children,r,s,e);case wp:a=8,r|=8;break;case Th:return t=Mt(12,n,e,r|2),t.elementType=Th,t.lanes=s,t;case Eh:return t=Mt(13,n,e,r),t.elementType=Eh,t.lanes=s,t;case Mh:return t=Mt(19,n,e,r),t.elementType=Mh,t.lanes=s,t;case iv:return au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tv:a=10;break e;case nv:a=9;break e;case jp:a=11;break e;case _p:a=14;break e;case Fn:a=16,i=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Mt(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ni(t,e,n,i){return t=Mt(7,t,i,e),t.lanes=n,t}function au(t,e,n,i){return t=Mt(22,t,i,e),t.elementType=iv,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function cd(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G3(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sg(t,e,n,i,r,s,a,o,l){return t=new G3(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function Y3(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Yx(t){if(!t)return li;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(ct(n))return Yv(t,n,e)}return e}function Xx(t,e,n,i,r,s,a,o,l){return t=sg(n,i,!0,t,r,s,a,o,l),t.context=Yx(null),n=t.current,i=Qe(),r=ni(n),s=kn(i,r),s.callback=e??null,ei(n,s,r),t.current.lanes=r,Ha(t,r,i),ut(t,i),t}function ou(t,e,n,i){var r=e.current,s=Qe(),a=ni(r);return n=Yx(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ei(r,e,a),t!==null&&(Gt(t,r,a,s),Rl(t,r,a)),a}function wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ag(t,e){u0(t,e),(t=t.alternate)&&u0(t,e)}function X3(){return null}var qx=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}lu.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));ou(t,e,null,null)};lu.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){ou(null,t,null,null)}),e[Sn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Ev(t)}};function lg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function q3(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=wc(a);s.call(u)}}var a=Xx(e,i,t,0,null,!1,!1,"",d0);return t._reactRootContainer=a,t[Sn]=a.current,pa(t.nodeType===8?t.parentNode:t),Yi(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=wc(l);o.call(u)}}var l=sg(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=l,t[Sn]=l.current,pa(t.nodeType===8?t.parentNode:t),Yi(function(){ou(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wc(a);o.call(l)}}ou(e,a,t,r)}else a=q3(n,e,t,r,i);return wc(a)}Sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Cp(e,n|1),ut(e,ke()),!(q&6)&&(Ur=ke()+500,pi()))}break;case 13:Yi(function(){var i=Pn(t,1);if(i!==null){var r=Qe();Gt(i,t,1,r)}}),ag(t,1)}};Tp=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=Qe();Gt(e,t,134217728,n)}ag(t,134217728)}};Pv=function(t){if(t.tag===13){var e=ni(t),n=Pn(t,e);if(n!==null){var i=Qe();Gt(n,t,e,i)}ag(t,e)}};Cv=function(){return re};Tv=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Bh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=eu(i);if(!r)throw Error(A(90));sv(i),Oh(i,r)}}}break;case"textarea":ov(t,n);break;case"select":e=n.value,e!=null&&Er(t,!!n.multiple,e,!1)}};pv=tg;gv=Yi;var J3={usingClientEntryPoint:!1,Events:[Wa,vr,eu,hv,fv,tg]},ys={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q3={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||X3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{qc=jo.inject(Q3),an=jo}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J3;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lg(e))throw Error(A(200));return Y3(t,e,null,n)};wt.createRoot=function(t,e){if(!lg(t))throw Error(A(299));var n=!1,i="",r=qx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sg(t,1,!1,null,null,n,!1,i,r),t[Sn]=e.current,pa(t.nodeType===8?t.parentNode:t),new og(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Yi(t)};wt.hydrate=function(t,e,n){if(!cu(e))throw Error(A(200));return uu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!lg(t))throw Error(A(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=qx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Xx(e,null,t,1,n??null,r,!1,s,a),t[Sn]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lu(e)};wt.render=function(t,e,n){if(!cu(e))throw Error(A(200));return uu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!cu(t))throw Error(A(40));return t._reactRootContainer?(Yi(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};wt.unstable_batchedUpdates=tg;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return uu(t,e,n,!1,i)};wt.version="18.3.1-next-f1338f8080-20240426";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(t){console.error(t)}}Jx(),Jy.exports=wt;var Z3=Jy.exports,h0=Z3;Ph.createRoot=h0.createRoot,Ph.hydrateRoot=h0.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ja.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const f0="popstate";function ej(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Qi(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),bf("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof s=="string"?s:jc(s))}function i(r,s){cg(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return nj(e,n,i,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tj(){return Math.random().toString(36).substr(2,8)}function p0(t,e){return{usr:t.state,key:t.key,idx:e}}function bf(t,e,n,i){return n===void 0&&(n=null),ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qi(e):e,{state:n,key:e&&e.key||i||tj()})}function jc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Qi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function nj(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Yn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(ja({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=Yn.Pop;let k=d(),x=k==null?null:k-u;u=k,l&&l({action:o,location:y.location,delta:x})}function f(k,x){o=Yn.Push;let v=bf(y.location,k,x);n&&n(v,k),u=d()+1;let b=p0(v,u),w=y.createHref(v);try{a.pushState(b,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;r.location.assign(w)}s&&l&&l({action:o,location:y.location,delta:1})}function p(k,x){o=Yn.Replace;let v=bf(y.location,k,x);n&&n(v,k),u=d();let b=p0(v,u),w=y.createHref(v);a.replaceState(b,"",w),s&&l&&l({action:o,location:y.location,delta:0})}function m(k){let x=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof k=="string"?k:jc(k);return v=v.replace(/ $/,"%20"),xe(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let y={get action(){return o},get location(){return t(r,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(f0,h),l=k,()=>{r.removeEventListener(f0,h),l=null}},createHref(k){return e(r,k)},createURL:m,encodeLocation(k){let x=m(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:p,go(k){return a.go(k)}};return y}var g0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(g0||(g0={}));function ij(t,e,n){return n===void 0&&(n="/"),rj(t,e,n,!1)}function rj(t,e,n,i){let r=typeof e=="string"?Qi(e):e,s=Wr(r.pathname||"/",n);if(s==null)return null;let a=Qx(t);sj(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=mj(s);o=pj(a[l],u,i)}return o}function Qx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ri([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qx(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:hj(u,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Zx(s.path))r(s,a,l)}),e}function Zx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Zx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function sj(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fj(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aj=/^:[\w-]+$/,oj=3,lj=2,cj=1,uj=10,dj=-2,m0=t=>t==="*";function hj(t,e){let n=t.split("/"),i=n.length;return n.some(m0)&&(i+=dj),e&&(i+=lj),n.filter(r=>!m0(r)).reduce((r,s)=>r+(aj.test(s)?oj:s===""?cj:uj),i)}function fj(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function pj(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=_c({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!h&&u&&n&&!i[i.length-1].route.index&&(h=_c({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:ri([s,h.pathname]),pathnameBase:bj(ri([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=ri([s,h.pathnameBase]))}return a}function _c(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gj(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let y=o[h]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=o[h];return p&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function gj(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function mj(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function yj(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Qi(t):t;return{pathname:n?n.startsWith("/")?n:vj(n,e):e,search:kj(i),hash:wj(r)}}function vj(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ud(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xj(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function eb(t,e){let n=xj(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function tb(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Qi(t):(r=ja({},t),xe(!r.pathname||!r.pathname.includes("?"),ud("?","pathname","search",r)),xe(!r.pathname||!r.pathname.includes("#"),ud("#","pathname","hash",r)),xe(!r.search||!r.search.includes("#"),ud("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=yj(r,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),bj=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kj=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wj=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jj(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nb=["post","put","patch","delete"];new Set(nb);const _j=["get",...nb];new Set(_j);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_a.apply(this,arguments)}const du=_.createContext(null),ib=_.createContext(null),gi=_.createContext(null),hu=_.createContext(null),mi=_.createContext({outlet:null,matches:[],isDataRoute:!1}),rb=_.createContext(null);function Sj(t,e){let{relative:n}=e===void 0?{}:e;Ga()||xe(!1);let{basename:i,navigator:r}=_.useContext(gi),{hash:s,pathname:a,search:o}=fu(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:ri([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ga(){return _.useContext(hu)!=null}function Ya(){return Ga()||xe(!1),_.useContext(hu).location}function sb(t){_.useContext(gi).static||_.useLayoutEffect(t)}function J(){let{isDataRoute:t}=_.useContext(mi);return t?Bj():Pj()}function Pj(){Ga()||xe(!1);let t=_.useContext(du),{basename:e,future:n,navigator:i}=_.useContext(gi),{matches:r}=_.useContext(mi),{pathname:s}=Ya(),a=JSON.stringify(eb(r,n.v7_relativeSplatPath)),o=_.useRef(!1);return sb(()=>{o.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let h=tb(u,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ri([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}const Cj=_.createContext(null);function Tj(t){let e=_.useContext(mi).outlet;return e&&_.createElement(Cj.Provider,{value:t},e)}function fu(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=_.useContext(gi),{matches:r}=_.useContext(mi),{pathname:s}=Ya(),a=JSON.stringify(eb(r,i.v7_relativeSplatPath));return _.useMemo(()=>tb(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function Ej(t,e){return Mj(t,e)}function Mj(t,e,n,i){Ga()||xe(!1);let{navigator:r}=_.useContext(gi),{matches:s}=_.useContext(mi),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ya(),d;if(e){var h;let k=typeof e=="string"?Qi(e):e;l==="/"||(h=k.pathname)!=null&&h.startsWith(l)||xe(!1),d=k}else d=u;let f=d.pathname||"/",p=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let m=ij(t,{pathname:p}),y=Ij(m&&m.map(k=>Object.assign({},k,{params:Object.assign({},o,k.params),pathname:ri([l,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:ri([l,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,i);return e&&y?_.createElement(hu.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},y):y}function Aj(){let t=Fj(),e=jj(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:r},n):null,null)}const Lj=_.createElement(Aj,null);class Oj extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?_.createElement(mi.Provider,{value:this.props.routeContext},_.createElement(rb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zj(t){let{routeContext:e,match:n,children:i}=t,r=_.useContext(du);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(mi.Provider,{value:e},i)}function Ij(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||xe(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:p}=n,m=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||m){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let p,m=!1,y=null,k=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||Lj,l&&(u<0&&f===0?(m=!0,k=null):u===f&&(m=!0,k=h.route.hydrateFallbackElement||null)));let x=e.concat(a.slice(0,f+1)),v=()=>{let b;return p?b=y:m?b=k:h.route.Component?b=_.createElement(h.route.Component,null):h.route.element?b=h.route.element:b=d,_.createElement(zj,{match:h,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:b})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?_.createElement(Oj,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var ab=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ab||{}),Sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Sc||{});function Rj(t){let e=_.useContext(du);return e||xe(!1),e}function Dj(t){let e=_.useContext(ib);return e||xe(!1),e}function $j(t){let e=_.useContext(mi);return e||xe(!1),e}function ob(t){let e=$j(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function Fj(){var t;let e=_.useContext(rb),n=Dj(Sc.UseRouteError),i=ob(Sc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Bj(){let{router:t}=Rj(ab.UseNavigateStable),e=ob(Sc.UseNavigateStable),n=_.useRef(!1);return sb(()=>{n.current=!0}),_.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,_a({fromRouteId:e},s)))},[t,e])}const y0={};function Nj(t,e){y0[e]||(y0[e]=!0,console.warn(e))}const v0=(t,e,n)=>Nj(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Vj(t,e){t!=null&&t.v7_startTransition||v0("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&v0("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ug(t){return Tj(t.context)}function H(t){xe(!1)}function Hj(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Yn.Pop,navigator:s,static:a=!1,future:o}=t;Ga()&&xe(!1);let l=e.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:l,navigator:s,static:a,future:_a({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Qi(i));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:m="default"}=i,y=_.useMemo(()=>{let k=Wr(d,l);return k==null?null:{location:{pathname:k,search:h,hash:f,state:p,key:m},navigationType:r}},[l,d,h,f,p,m,r]);return y==null?null:_.createElement(gi.Provider,{value:u},_.createElement(hu.Provider,{children:n,value:y}))}function Uj(t){let{children:e,location:n}=t;return Ej(kf(e),n)}new Promise(()=>{});function kf(t,e){e===void 0&&(e=[]);let n=[];return _.Children.forEach(t,(i,r)=>{if(!_.isValidElement(i))return;let s=[...e,r];if(i.type===_.Fragment){n.push.apply(n,kf(i.props.children,s));return}i.type!==H&&xe(!1),!i.props.index||!i.props.children||xe(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=kf(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pc(){return Pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pc.apply(this,arguments)}function lb(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Wj(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Kj(t,e){return t.button===0&&(!e||e==="_self")&&!Wj(t)}const Gj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yj=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Xj="6";try{window.__reactRouterVersion=Xj}catch{}const qj=_.createContext({isTransitioning:!1}),Jj="startTransition",x0=Sh[Jj];function Qj(t){let{basename:e,children:n,future:i,window:r}=t,s=_.useRef();s.current==null&&(s.current=ej({window:r,v5Compat:!0}));let a=s.current,[o,l]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},d=_.useCallback(h=>{u&&x0?x0(()=>l(h)):l(h)},[l,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>Vj(i),[i]),_.createElement(Hj,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const Zj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pu=_.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:d,viewTransition:h}=e,f=lb(e,Gj),{basename:p}=_.useContext(gi),m,y=!1;if(typeof u=="string"&&e_.test(u)&&(m=u,Zj))try{let b=new URL(window.location.href),w=u.startsWith("//")?new URL(b.protocol+u):new URL(u),j=Wr(w.pathname,p);w.origin===b.origin&&j!=null?u=j+w.search+w.hash:y=!0}catch{}let k=Sj(u,{relative:r}),x=n_(u,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:h});function v(b){i&&i(b),b.defaultPrevented||x(b)}return _.createElement("a",Pc({},f,{href:m||k,onClick:y||s?i:v,ref:n,target:l}))}),cb=_.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:u,children:d}=e,h=lb(e,Yj),f=fu(l,{relative:h.relative}),p=Ya(),m=_.useContext(ib),{navigator:y,basename:k}=_.useContext(gi),x=m!=null&&i_(f)&&u===!0,v=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,b=p.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;r||(b=b.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&k&&(w=Wr(w,k)||w);const j=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let C=b===v||!a&&b.startsWith(v)&&b.charAt(j)==="/",S=w!=null&&(w===v||!a&&w.startsWith(v)&&w.charAt(v.length)==="/"),P={isActive:C,isPending:S,isTransitioning:x},E=C?i:void 0,M;typeof s=="function"?M=s(P):M=[s,C?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let O=typeof o=="function"?o(P):o;return _.createElement(pu,Pc({},h,{"aria-current":E,className:M,ref:n,style:O,to:l,viewTransition:u}),typeof d=="function"?d(P):d)});var wf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wf||(wf={}));var b0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(b0||(b0={}));function t_(t){let e=_.useContext(du);return e||xe(!1),e}function n_(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=J(),u=Ya(),d=fu(t,{relative:a});return _.useCallback(h=>{if(Kj(h,n)){h.preventDefault();let f=i!==void 0?i:jc(u)===jc(d);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,d,i,r,n,t,s,a,o])}function i_(t,e){e===void 0&&(e={});let n=_.useContext(qj);n==null&&xe(!1);let{basename:i}=t_(wf.useViewTransitionState),r=fu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Wr(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Wr(n.nextLocation.pathname,i)||n.nextLocation.pathname;return _c(r.pathname,a)!=null||_c(r.pathname,s)!=null}function jf(){return jf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jf.apply(null,arguments)}function ub(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var r_=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s_=ub(function(t){return r_.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),a_=!1;function o_(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function l_(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var c_=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!a_:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(l_(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=o_(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Ue="-ms-",Cc="-moz-",ee="-webkit-",db="comm",dg="rule",hg="decl",u_="@import",hb="@keyframes",d_="@layer",h_=Math.abs,gu=String.fromCharCode,f_=Object.assign;function p_(t,e){return Fe(t,0)^45?(((e<<2^Fe(t,0))<<2^Fe(t,1))<<2^Fe(t,2))<<2^Fe(t,3):0}function fb(t){return t.trim()}function g_(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function _f(t,e){return t.indexOf(e)}function Fe(t,e){return t.charCodeAt(e)|0}function Sa(t,e,n){return t.slice(e,n)}function nn(t){return t.length}function fg(t){return t.length}function _o(t,e){return e.push(t),t}function m_(t,e){return t.map(e).join("")}var mu=1,Kr=1,pb=0,dt=0,Pe=0,is="";function yu(t,e,n,i,r,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:mu,column:Kr,length:a,return:""}}function vs(t,e){return f_(yu("",null,null,"",null,null,0),t,{length:-t.length},e)}function y_(){return Pe}function v_(){return Pe=dt>0?Fe(is,--dt):0,Kr--,Pe===10&&(Kr=1,mu--),Pe}function xt(){return Pe=dt<pb?Fe(is,dt++):0,Kr++,Pe===10&&(Kr=1,mu++),Pe}function ln(){return Fe(is,dt)}function Hl(){return dt}function Xa(t,e){return Sa(is,t,e)}function Pa(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gb(t){return mu=Kr=1,pb=nn(is=t),dt=0,[]}function mb(t){return is="",t}function Ul(t){return fb(Xa(dt-1,Sf(t===91?t+2:t===40?t+1:t)))}function x_(t){for(;(Pe=ln())&&Pe<33;)xt();return Pa(t)>2||Pa(Pe)>3?"":" "}function b_(t,e){for(;--e&&xt()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Xa(t,Hl()+(e<6&&ln()==32&&xt()==32))}function Sf(t){for(;xt();)switch(Pe){case t:return dt;case 34:case 39:t!==34&&t!==39&&Sf(Pe);break;case 40:t===41&&Sf(t);break;case 92:xt();break}return dt}function k_(t,e){for(;xt()&&t+Pe!==57;)if(t+Pe===84&&ln()===47)break;return"/*"+Xa(e,dt-1)+"*"+gu(t===47?t:xt())}function w_(t){for(;!Pa(ln());)xt();return Xa(t,dt)}function j_(t){return mb(Wl("",null,null,null,[""],t=gb(t),0,[0],t))}function Wl(t,e,n,i,r,s,a,o,l){for(var u=0,d=0,h=a,f=0,p=0,m=0,y=1,k=1,x=1,v=0,b="",w=r,j=s,C=i,S=b;k;)switch(m=v,v=xt()){case 40:if(m!=108&&Fe(S,h-1)==58){_f(S+=te(Ul(v),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:S+=Ul(v);break;case 9:case 10:case 13:case 32:S+=x_(m);break;case 92:S+=b_(Hl()-1,7);continue;case 47:switch(ln()){case 42:case 47:_o(__(k_(xt(),Hl()),e,n),l);break;default:S+="/"}break;case 123*y:o[u++]=nn(S)*x;case 125*y:case 59:case 0:switch(v){case 0:case 125:k=0;case 59+d:x==-1&&(S=te(S,/\f/g,"")),p>0&&nn(S)-h&&_o(p>32?w0(S+";",i,n,h-1):w0(te(S," ","")+";",i,n,h-2),l);break;case 59:S+=";";default:if(_o(C=k0(S,e,n,u,d,r,o,b,w=[],j=[],h),s),v===123)if(d===0)Wl(S,e,C,C,w,s,h,o,j);else switch(f===99&&Fe(S,3)===110?100:f){case 100:case 108:case 109:case 115:Wl(t,C,C,i&&_o(k0(t,C,C,0,0,r,o,b,r,w=[],h),j),r,j,h,o,i?w:j);break;default:Wl(S,C,C,C,[""],j,0,o,j)}}u=d=p=0,y=x=1,b=S="",h=a;break;case 58:h=1+nn(S),p=m;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&v_()==125)continue}switch(S+=gu(v),v*y){case 38:x=d>0?1:(S+="\f",-1);break;case 44:o[u++]=(nn(S)-1)*x,x=1;break;case 64:ln()===45&&(S+=Ul(xt())),f=ln(),d=h=nn(b=S+=w_(Hl())),v++;break;case 45:m===45&&nn(S)==2&&(y=0)}}return s}function k0(t,e,n,i,r,s,a,o,l,u,d){for(var h=r-1,f=r===0?s:[""],p=fg(f),m=0,y=0,k=0;m<i;++m)for(var x=0,v=Sa(t,h+1,h=h_(y=a[m])),b=t;x<p;++x)(b=fb(y>0?f[x]+" "+v:te(v,/&\f/g,f[x])))&&(l[k++]=b);return yu(t,e,n,r===0?dg:o,l,u,d)}function __(t,e,n){return yu(t,e,n,db,gu(y_()),Sa(t,2,-2),0)}function w0(t,e,n,i){return yu(t,e,n,hg,Sa(t,0,i),Sa(t,i+1,-1),i)}function Ir(t,e){for(var n="",i=fg(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function S_(t,e,n,i){switch(t.type){case d_:if(t.children.length)break;case u_:case hg:return t.return=t.return||t.value;case db:return"";case hb:return t.return=t.value+"{"+Ir(t.children,i)+"}";case dg:t.value=t.props.join(",")}return nn(n=Ir(t.children,i))?t.return=t.value+"{"+n+"}":""}function P_(t){var e=fg(t);return function(n,i,r,s){for(var a="",o=0;o<e;o++)a+=t[o](n,i,r,s)||"";return a}}function C_(t){return function(e){e.root||(e=e.return)&&t(e)}}var T_=function(e,n,i){for(var r=0,s=0;r=s,s=ln(),r===38&&s===12&&(n[i]=1),!Pa(s);)xt();return Xa(e,dt)},E_=function(e,n){var i=-1,r=44;do switch(Pa(r)){case 0:r===38&&ln()===12&&(n[i]=1),e[i]+=T_(dt-1,n,i);break;case 2:e[i]+=Ul(r);break;case 4:if(r===44){e[++i]=ln()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=gu(r)}while(r=xt());return e},M_=function(e,n){return mb(E_(gb(e),n))},j0=new WeakMap,A_=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!j0.get(i))&&!r){j0.set(e,!0);for(var s=[],a=M_(n,s),o=i.props,l=0,u=0;l<a.length;l++)for(var d=0;d<o.length;d++,u++)e.props[u]=s[l]?a[l].replace(/&\f/g,o[d]):o[d]+" "+a[l]}}},L_=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function yb(t,e){switch(p_(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+Cc+t+Ue+t+t;case 6828:case 4268:return ee+t+Ue+t+t;case 6165:return ee+t+Ue+"flex-"+t+t;case 5187:return ee+t+te(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+Ue+"flex-$1$2")+t;case 5443:return ee+t+Ue+"flex-item-"+te(t,/flex-|-self/,"")+t;case 4675:return ee+t+Ue+"flex-line-pack"+te(t,/align-content|flex-|-self/,"")+t;case 5548:return ee+t+Ue+te(t,"shrink","negative")+t;case 5292:return ee+t+Ue+te(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+te(t,"-grow","")+ee+t+Ue+te(t,"grow","positive")+t;case 4554:return ee+te(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(t)-1-e>6)switch(Fe(t,e+1)){case 109:if(Fe(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Cc+(Fe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_f(t,"stretch")?yb(te(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Fe(t,e+1)!==115)break;case 6444:switch(Fe(t,nn(t)-3-(~_f(t,"!important")&&10))){case 107:return te(t,":",":"+ee)+t;case 101:return te(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(Fe(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+Ue+"$2box$3")+t}break;case 5936:switch(Fe(t,e+11)){case 114:return ee+t+Ue+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+Ue+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+Ue+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ee+t+Ue+t+t}return t}var O_=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case hg:e.return=yb(e.value,e.length);break;case hb:return Ir([vs(e,{value:te(e.value,"@","@"+ee)})],r);case dg:if(e.length)return m_(e.props,function(s){switch(g_(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ir([vs(e,{props:[te(s,/:(read-\w+)/,":"+Cc+"$1")]})],r);case"::placeholder":return Ir([vs(e,{props:[te(s,/:(plac\w+)/,":"+ee+"input-$1")]}),vs(e,{props:[te(s,/:(plac\w+)/,":"+Cc+"$1")]}),vs(e,{props:[te(s,/:(plac\w+)/,Ue+"input-$1")]})],r)}return""})}},z_=[O_],I_=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(y){var k=y.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var r=e.stylisPlugins||z_,s={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var k=y.getAttribute("data-emotion").split(" "),x=1;x<k.length;x++)s[k[x]]=!0;o.push(y)});var l,u=[A_,L_];{var d,h=[S_,C_(function(y){d.insert(y)})],f=P_(u.concat(r,h)),p=function(k){return Ir(j_(k),f)};l=function(k,x,v,b){d=v,p(k?k+"{"+x.styles+"}":x.styles),b&&(m.inserted[x.name]=!0)}}var m={key:n,sheet:new c_({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return m.sheet.hydrate(o),m},R_=!0;function D_(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var vb=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||R_===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},$_=function(e,n,i){vb(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function F_(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var B_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},N_=!1,V_=/[A-Z]|^ms/g,H_=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xb=function(e){return e.charCodeAt(1)===45},_0=function(e){return e!=null&&typeof e!="boolean"},dd=ub(function(t){return xb(t)?t:t.replace(V_,"-$&").toLowerCase()}),S0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(H_,function(i,r,s){return rn={name:r,styles:s,next:rn},r})}return B_[e]!==1&&!xb(e)&&typeof n=="number"&&n!==0?n+"px":n},U_="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Ca(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return rn={name:r.name,styles:r.styles,next:rn},r.name;var s=n;if(s.styles!==void 0){var a=s.next;if(a!==void 0)for(;a!==void 0;)rn={name:a.name,styles:a.styles,next:rn},a=a.next;var o=s.styles+";";return o}return W_(t,e,n)}case"function":{if(t!==void 0){var l=rn,u=n(t);return rn=l,Ca(t,e,u)}break}}var d=n;if(e==null)return d;var h=e[d];return h!==void 0?h:d}function W_(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Ca(t,e,n[r])+";";else for(var s in n){var a=n[s];if(typeof a!="object"){var o=a;e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":_0(o)&&(i+=dd(s)+":"+S0(s,o)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&N_)throw new Error(U_);if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var l=0;l<a.length;l++)_0(a[l])&&(i+=dd(s)+":"+S0(s,a[l])+";");else{var u=Ca(t,e,a);switch(s){case"animation":case"animationName":{i+=dd(s)+":"+u+";";break}default:i+=s+"{"+u+"}"}}}}return i}var P0=/label:\s*([^\s;{]+)\s*(;|$)/g,rn;function K_(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";rn=void 0;var s=t[0];if(s==null||s.raw===void 0)i=!1,r+=Ca(n,e,s);else{var a=s;r+=a[0]}for(var o=1;o<t.length;o++)if(r+=Ca(n,e,t[o]),i){var l=s;r+=l[o]}P0.lastIndex=0;for(var u="",d;(d=P0.exec(r))!==null;)u+="-"+d[1];var h=F_(r)+u;return{name:h,styles:r,next:rn}}var G_=function(e){return e()},Y_=Sh.useInsertionEffect?Sh.useInsertionEffect:!1,X_=Y_||G_,bb=_.createContext(typeof HTMLElement<"u"?I_({key:"css"}):null);bb.Provider;var q_=function(e){return _.forwardRef(function(n,i){var r=_.useContext(bb);return e(n,r,i)})},J_=_.createContext({}),Q_=s_,Z_=function(e){return e!=="theme"},C0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Q_:Z_},T0=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(a){return e.__emotion_forwardProp(a)&&s(a)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},e8=!1,t8=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return vb(n,i,r),X_(function(){return $_(n,i,r)}),null},n8=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,a;n!==void 0&&(s=n.label,a=n.target);var o=T0(e,n,i),l=o||C0(r),u=!l("as");return function(){var d=arguments,h=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var f=d.length,p=1;p<f;p++)h.push(d[p],d[0][p])}var m=q_(function(y,k,x){var v=u&&y.as||r,b="",w=[],j=y;if(y.theme==null){j={};for(var C in y)j[C]=y[C];j.theme=_.useContext(J_)}typeof y.className=="string"?b=D_(k.registered,w,y.className):y.className!=null&&(b=y.className+" ");var S=K_(h.concat(w),k.registered,j);b+=k.key+"-"+S.name,a!==void 0&&(b+=" "+a);var P=u&&o===void 0?C0(v):l,E={};for(var M in y)u&&M==="as"||P(M)&&(E[M]=y[M]);return E.className=b,x&&(E.ref=x),_.createElement(_.Fragment,null,_.createElement(t8,{cache:k,serialized:S,isStringTag:typeof v=="string"}),_.createElement(v,E))});return m.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=r,m.__emotion_styles=h,m.__emotion_forwardProp=o,Object.defineProperty(m,"toString",{value:function(){return a===void 0&&e8?"NO_COMPONENT_SELECTOR":"."+a}}),m.withComponent=function(y,k){return t(y,jf({},n,k,{shouldForwardProp:T0(m,k,!0)})).apply(void 0,h)},m}},i8=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],g=n8.bind();i8.forEach(function(t){g[t]=g(t)});const kb=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),vu=_.createContext({}),xu=_.createContext(null),bu=typeof document<"u",pg=bu?_.useLayoutEffect:_.useEffect,wb=_.createContext({strict:!1}),gg=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r8="framerAppearId",jb="data-"+gg(r8);function s8(t,e,n,i){const{visualElement:r}=_.useContext(vu),s=_.useContext(wb),a=_.useContext(xu),o=_.useContext(kb).reducedMotion,l=_.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:o}));const u=l.current;_.useInsertionEffect(()=>{u&&u.update(n,a)});const d=_.useRef(!!(n[jb]&&!window.HandoffComplete));return pg(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),_.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Sr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function a8(t,e,n){return _.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Sr(n)&&(n.current=i))},[e])}function Ta(t){return typeof t=="string"||Array.isArray(t)}function ku(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const mg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yg=["initial",...mg];function wu(t){return ku(t.animate)||yg.some(e=>Ta(t[e]))}function _b(t){return!!(wu(t)||t.variants)}function o8(t,e){if(wu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ta(n)?n:void 0,animate:Ta(i)?i:void 0}}return t.inherit!==!1?e:{}}function l8(t){const{initial:e,animate:n}=o8(t,_.useContext(vu));return _.useMemo(()=>({initial:e,animate:n}),[E0(e),E0(n)])}function E0(t){return Array.isArray(t)?t.join(" "):t}const M0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ea={};for(const t in M0)Ea[t]={isEnabled:e=>M0[t].some(n=>!!e[n])};function c8(t){for(const e in t)Ea[e]={...Ea[e],...t[e]}}const vg=_.createContext({}),Sb=_.createContext({}),u8=Symbol.for("motionComponentSymbol");function d8({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&c8(t);function s(o,l){let u;const d={..._.useContext(kb),...o,layoutId:h8(o)},{isStatic:h}=d,f=l8(o),p=i(o,h);if(!h&&bu){f.visualElement=s8(r,p,d,e);const m=_.useContext(Sb),y=_.useContext(wb).strict;f.visualElement&&(u=f.visualElement.loadFeatures(d,y,t,m))}return _.createElement(vu.Provider,{value:f},u&&f.visualElement?_.createElement(u,{visualElement:f.visualElement,...d}):null,n(r,o,a8(p,f.visualElement,l),p,h,f.visualElement))}const a=_.forwardRef(s);return a[u8]=r,a}function h8({layoutId:t}){const e=_.useContext(vg).id;return e&&t!==void 0?e+"-"+t:t}function f8(t){function e(i,r={}){return d8(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const p8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xg(t){return typeof t!="string"||t.includes("-")?!1:!!(p8.indexOf(t)>-1||/[A-Z]/.test(t))}const Tc={};function g8(t){Object.assign(Tc,t)}const qa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zi=new Set(qa);function Pb(t,{layout:e,layoutId:n}){return Zi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Tc[t]||t==="opacity")}const ht=t=>!!(t&&t.getVelocity),m8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},y8=qa.length;function v8(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let a=0;a<y8;a++){const o=qa[a];if(t[o]!==void 0){const l=m8[o]||o;s+=`${l}(${t[o]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const Cb=t=>e=>typeof e=="string"&&e.startsWith(t),Tb=Cb("--"),Pf=Cb("var(--"),x8=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,b8=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ci=(t,e,n)=>Math.min(Math.max(n,t),e),er={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ys={...er,transform:t=>ci(0,1,t)},So={...er,default:1},Xs=t=>Math.round(t*1e5)/1e5,ju=/(-)?([\d]*\.?[\d])+/g,Eb=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,k8=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ja(t){return typeof t=="string"}const Qa=t=>({test:e=>Ja(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),In=Qa("deg"),cn=Qa("%"),B=Qa("px"),w8=Qa("vh"),j8=Qa("vw"),A0={...cn,parse:t=>cn.parse(t)/100,transform:t=>cn.transform(t*100)},L0={...er,transform:Math.round},Mb={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:So,scaleX:So,scaleY:So,scaleZ:So,skew:In,skewX:In,skewY:In,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Ys,originX:A0,originY:A0,originZ:B,zIndex:L0,fillOpacity:Ys,strokeOpacity:Ys,numOctaves:L0};function bg(t,e,n,i){const{style:r,vars:s,transform:a,transformOrigin:o}=t;let l=!1,u=!1,d=!0;for(const h in e){const f=e[h];if(Tb(h)){s[h]=f;continue}const p=Mb[h],m=b8(f,p);if(Zi.has(h)){if(l=!0,a[h]=m,!d)continue;f!==(p.default||0)&&(d=!1)}else h.startsWith("origin")?(u=!0,o[h]=m):r[h]=m}if(e.transform||(l||i?r.transform=v8(t.transform,n,d,i):r.transform&&(r.transform="none")),u){const{originX:h="50%",originY:f="50%",originZ:p=0}=o;r.transformOrigin=`${h} ${f} ${p}`}}const kg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ab(t,e,n){for(const i in e)!ht(e[i])&&!Pb(i,n)&&(t[i]=e[i])}function _8({transformTemplate:t},e,n){return _.useMemo(()=>{const i=kg();return bg(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function S8(t,e,n){const i=t.style||{},r={};return Ab(r,i,t),Object.assign(r,_8(t,e,n)),t.transformValues?t.transformValues(r):r}function P8(t,e,n){const i={},r=S8(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const C8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ec(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||C8.has(t)}let Lb=t=>!Ec(t);function T8(t){t&&(Lb=e=>e.startsWith("on")?!Ec(e):t(e))}try{T8(require("@emotion/is-prop-valid").default)}catch{}function E8(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Lb(r)||n===!0&&Ec(r)||!e&&!Ec(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function O0(t,e,n){return typeof t=="string"?t:B.transform(e+n*t)}function M8(t,e,n){const i=O0(e,t.x,t.width),r=O0(n,t.y,t.height);return`${i} ${r}`}const A8={offset:"stroke-dashoffset",array:"stroke-dasharray"},L8={offset:"strokeDashoffset",array:"strokeDasharray"};function O8(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?A8:L8;t[s.offset]=B.transform(-i);const a=B.transform(e),o=B.transform(n);t[s.array]=`${a} ${o}`}function wg(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,h,f){if(bg(t,u,d,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:y}=t;p.transform&&(y&&(m.transform=p.transform),delete p.transform),y&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=M8(y,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),a!==void 0&&O8(p,a,o,l,!1)}const Ob=()=>({...kg(),attrs:{}}),jg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function z8(t,e,n,i){const r=_.useMemo(()=>{const s=Ob();return wg(s,e,{enableHardwareAcceleration:!1},jg(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Ab(s,t.style,t),r.style={...s,...r.style}}return r}function I8(t=!1){return(n,i,r,{latestValues:s},a)=>{const l=(xg(n)?z8:P8)(i,s,a,n),d={...E8(i,typeof n=="string",t),...l,ref:r},{children:h}=i,f=_.useMemo(()=>ht(h)?h.get():h,[h]);return _.createElement(n,{...d,children:f})}}function zb(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Ib=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rb(t,e,n,i){zb(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Ib.has(r)?r:gg(r),e.attrs[r])}function _g(t,e){const{style:n}=t,i={};for(const r in n)(ht(n[r])||e.style&&ht(e.style[r])||Pb(r,t))&&(i[r]=n[r]);return i}function Db(t,e){const n=_g(t,e);for(const i in t)if(ht(t[i])||ht(e[i])){const r=qa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Sg(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function $b(t){const e=_.useRef(null);return e.current===null&&(e.current=t()),e.current}const Mc=t=>Array.isArray(t),R8=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),D8=t=>Mc(t)?t[t.length-1]||0:t;function Kl(t){const e=ht(t)?t.get():t;return R8(e)?e.toValue():e}function $8({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const a={latestValues:F8(i,r,s,t),renderState:e()};return n&&(a.mount=o=>n(i,o,a)),a}const Fb=t=>(e,n)=>{const i=_.useContext(vu),r=_.useContext(xu),s=()=>$8(t,e,i,r);return n?s():$b(s)};function F8(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Kl(s[f]);let{initial:a,animate:o}=t;const l=wu(t),u=_b(t);e&&u&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const h=d?o:a;return h&&typeof h!="boolean"&&!ku(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const m=Sg(t,p);if(!m)return;const{transitionEnd:y,transition:k,...x}=m;for(const v in x){let b=x[v];if(Array.isArray(b)){const w=d?b.length-1:0;b=b[w]}b!==null&&(r[v]=b)}for(const v in y)r[v]=y[v]}),r}const we=t=>t;class z0{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function B8(t){let e=new z0,n=new z0,i=0,r=!1,s=!1;const a=new WeakSet,o={schedule:(l,u=!1,d=!1)=>{const h=d&&r,f=h?e:n;return u&&a.add(l),f.add(l)&&h&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let u=0;u<i;u++){const d=e.order[u];d(l),a.has(d)&&(o.schedule(d),t())}r=!1,s&&(s=!1,o.process(l))}};return o}const Po=["prepare","read","update","preRender","render","postRender"],N8=40;function V8(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Po.reduce((h,f)=>(h[f]=B8(()=>n=!0),h),{}),a=h=>s[h].process(r),o=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,N8),1),r.timestamp=h,r.isProcessing=!0,Po.forEach(a),r.isProcessing=!1,n&&e&&(i=!1,t(o))},l=()=>{n=!0,i=!0,r.isProcessing||t(o)};return{schedule:Po.reduce((h,f)=>{const p=s[f];return h[f]=(m,y=!1,k=!1)=>(n||l(),p.schedule(m,y,k)),h},{}),cancel:h=>Po.forEach(f=>s[f].cancel(h)),state:r,steps:s}}const{schedule:le,cancel:Tn,state:We,steps:hd}=V8(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),H8={useVisualState:Fb({scrapeMotionValuesFromProps:Db,createRenderState:Ob,onMount:(t,e,{renderState:n,latestValues:i})=>{le.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),le.render(()=>{wg(n,i,{enableHardwareAcceleration:!1},jg(e.tagName),t.transformTemplate),Rb(e,n)})}})},U8={useVisualState:Fb({scrapeMotionValuesFromProps:_g,createRenderState:kg})};function W8(t,{forwardMotionProps:e=!1},n,i){return{...xg(t)?H8:U8,preloadedFeatures:n,useRender:I8(e),createVisualElement:i,Component:t}}function bn(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Bb=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function _u(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const K8=t=>e=>Bb(e)&&t(e,_u(e));function wn(t,e,n,i){return bn(t,e,K8(n),i)}const G8=(t,e)=>n=>e(t(n)),si=(...t)=>t.reduce(G8);function Nb(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const I0=Nb("dragHorizontal"),R0=Nb("dragVertical");function Vb(t){let e=!1;if(t==="y")e=R0();else if(t==="x")e=I0();else{const n=I0(),i=R0();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Hb(){const t=Vb(!0);return t?(t(),!1):!0}class yi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function D0(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,a)=>{if(s.pointerType==="touch"||Hb())return;const o=t.getProps();t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",e),o[i]&&le.update(()=>o[i](s,a))};return wn(t.current,n,r,{passive:!t.getProps()[i]})}class Y8 extends yi{mount(){this.unmount=si(D0(this.node,!0),D0(this.node,!1))}unmount(){}}class X8 extends yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=si(bn(this.node.current,"focus",()=>this.onFocus()),bn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ub=(t,e)=>e?t===e?!0:Ub(t,e.parentElement):!1;function fd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,_u(n))}class q8 extends yi{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=wn(window,"pointerup",(o,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:h}=this.node.getProps();le.update(()=>{!h&&!Ub(this.node.current,o.target)?d&&d(o,l):u&&u(o,l)})},{passive:!(i.onTap||i.onPointerUp)}),a=wn(window,"pointercancel",(o,l)=>this.cancelPress(o,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=si(s,a),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=o=>{o.key!=="Enter"||!this.checkPressEnd()||fd("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&le.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=bn(this.node.current,"keyup",a),fd("down",(o,l)=>{this.startPress(o,l)})},n=bn(this.node.current,"keydown",e),i=()=>{this.isPressing&&fd("cancel",(s,a)=>this.cancelPress(s,a))},r=bn(this.node.current,"blur",i);this.removeAccessibleListeners=si(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&le.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Hb()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&le.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=wn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=bn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=si(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Cf=new WeakMap,pd=new WeakMap,J8=t=>{const e=Cf.get(t.target);e&&e(t)},Q8=t=>{t.forEach(J8)};function Z8({root:t,...e}){const n=t||document;pd.has(n)||pd.set(n,{});const i=pd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Q8,{root:t,...e})),i[r]}function e6(t,e,n){const i=Z8(e);return Cf.set(t,n),i.observe(t),()=>{Cf.delete(t),i.unobserve(t)}}const t6={some:0,all:1};class n6 extends yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:t6[r]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(l)};return e6(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(i6(e,n))&&this.startObserver()}unmount(){}}function i6({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const r6={inView:{Feature:n6},tap:{Feature:q8},focus:{Feature:X8},hover:{Feature:Y8}};function Wb(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function s6(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function a6(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Su(t,e,n){const i=t.getProps();return Sg(i,e,n!==void 0?n:i.custom,s6(t),a6(t))}let Ac=we;const Vi=t=>t*1e3,jn=t=>t/1e3,o6={current:!1},Kb=t=>Array.isArray(t)&&typeof t[0]=="number";function Gb(t){return!!(!t||typeof t=="string"&&Yb[t]||Kb(t)||Array.isArray(t)&&t.every(Gb))}const Ls=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Yb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function Xb(t){if(t)return Kb(t)?Ls(t):Array.isArray(t)?t.map(Xb):Yb[t]}function l6(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:a="loop",ease:o,times:l}={}){const u={[e]:n};l&&(u.offset=l);const d=Xb(o);return Array.isArray(d)&&(u.easing=d),t.animate(u,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function c6(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const qb=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,u6=1e-7,d6=12;function h6(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=qb(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>u6&&++o<d6);return a}function Za(t,e,n,i){if(t===e&&n===i)return we;const r=s=>h6(s,0,1,t,n);return s=>s===0||s===1?s:qb(r(s),e,i)}const f6=Za(.42,0,1,1),p6=Za(0,0,.58,1),Jb=Za(.42,0,.58,1),g6=t=>Array.isArray(t)&&typeof t[0]!="number",Qb=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Zb=t=>e=>1-t(1-e),Pg=t=>1-Math.sin(Math.acos(t)),e5=Zb(Pg),m6=Qb(Pg),t5=Za(.33,1.53,.69,.99),Cg=Zb(t5),y6=Qb(Cg),v6=t=>(t*=2)<1?.5*Cg(t):.5*(2-Math.pow(2,-10*(t-1))),$0={linear:we,easeIn:f6,easeInOut:Jb,easeOut:p6,circIn:Pg,circInOut:m6,circOut:e5,backIn:Cg,backInOut:y6,backOut:t5,anticipate:v6},F0=t=>{if(Array.isArray(t)){Ac(t.length===4);const[e,n,i,r]=t;return Za(e,n,i,r)}else if(typeof t=="string")return Ac($0[t]!==void 0),$0[t];return t},Tg=(t,e)=>n=>!!(Ja(n)&&k8.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),n5=(t,e,n)=>i=>{if(!Ja(i))return i;const[r,s,a,o]=i.match(ju);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},x6=t=>ci(0,255,t),gd={...er,transform:t=>Math.round(x6(t))},Di={test:Tg("rgb","red"),parse:n5("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+gd.transform(t)+", "+gd.transform(e)+", "+gd.transform(n)+", "+Xs(Ys.transform(i))+")"};function b6(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Tf={test:Tg("#"),parse:b6,transform:Di.transform},Pr={test:Tg("hsl","hue"),parse:n5("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+cn.transform(Xs(e))+", "+cn.transform(Xs(n))+", "+Xs(Ys.transform(i))+")"},qe={test:t=>Di.test(t)||Tf.test(t)||Pr.test(t),parse:t=>Di.test(t)?Di.parse(t):Pr.test(t)?Pr.parse(t):Tf.parse(t),transform:t=>Ja(t)?t:t.hasOwnProperty("red")?Di.transform(t):Pr.transform(t)},pe=(t,e,n)=>-n*t+n*e+t;function md(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function k6({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=md(l,o,t+1/3),s=md(l,o,t),a=md(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}const yd=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},w6=[Tf,Di,Pr],j6=t=>w6.find(e=>e.test(t));function B0(t){const e=j6(t);let n=e.parse(t);return e===Pr&&(n=k6(n)),n}const i5=(t,e)=>{const n=B0(t),i=B0(e),r={...n};return s=>(r.red=yd(n.red,i.red,s),r.green=yd(n.green,i.green,s),r.blue=yd(n.blue,i.blue,s),r.alpha=pe(n.alpha,i.alpha,s),Di.transform(r))};function _6(t){var e,n;return isNaN(t)&&Ja(t)&&(((e=t.match(ju))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Eb))===null||n===void 0?void 0:n.length)||0)>0}const r5={regex:x8,countKey:"Vars",token:"${v}",parse:we},s5={regex:Eb,countKey:"Colors",token:"${c}",parse:qe.parse},a5={regex:ju,countKey:"Numbers",token:"${n}",parse:er.parse};function vd(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function Lc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&vd(n,r5),vd(n,s5),vd(n,a5),n}function o5(t){return Lc(t).values}function l5(t){const{values:e,numColors:n,numVars:i,tokenised:r}=Lc(t),s=e.length;return a=>{let o=r;for(let l=0;l<s;l++)l<i?o=o.replace(r5.token,a[l]):l<i+n?o=o.replace(s5.token,qe.transform(a[l])):o=o.replace(a5.token,Xs(a[l]));return o}}const S6=t=>typeof t=="number"?0:t;function P6(t){const e=o5(t);return l5(t)(e.map(S6))}const ui={test:_6,parse:o5,createTransformer:l5,getAnimatableNone:P6},c5=(t,e)=>n=>`${n>0?e:t}`;function u5(t,e){return typeof t=="number"?n=>pe(t,e,n):qe.test(t)?i5(t,e):t.startsWith("var(")?c5(t,e):h5(t,e)}const d5=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,a)=>u5(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}},C6=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=u5(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},h5=(t,e)=>{const n=ui.createTransformer(e),i=Lc(t),r=Lc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?si(d5(i.values,r.values),n):c5(t,e)},Ma=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},N0=(t,e)=>n=>pe(t,e,n);function T6(t){return typeof t=="number"?N0:typeof t=="string"?qe.test(t)?i5:h5:Array.isArray(t)?d5:typeof t=="object"?C6:N0}function E6(t,e,n){const i=[],r=n||T6(t[0]),s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||we:e;o=si(l,o)}i.push(o)}return i}function f5(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ac(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=E6(e,i,r),o=a.length,l=u=>{let d=0;if(o>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=Ma(t[d],t[d+1],u);return a[d](h)};return n?u=>l(ci(t[0],t[s-1],u)):l}function M6(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ma(0,e,i);t.push(pe(n,1,r))}}function A6(t){const e=[0];return M6(e,t.length-1),e}function L6(t,e){return t.map(n=>n*e)}function O6(t,e){return t.map(()=>e||Jb).splice(0,t.length-1)}function Oc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=g6(i)?i.map(F0):F0(i),s={done:!1,value:e[0]},a=L6(n&&n.length===e.length?n:A6(e),t),o=f5(a,e,{ease:Array.isArray(r)?r:O6(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}function p5(t,e){return e?t*(1e3/e):0}const z6=5;function g5(t,e,n){const i=Math.max(e-z6,0);return p5(n-t(i),e-i)}const xd=.001,I6=.01,R6=10,D6=.05,$6=1;function F6({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,a=1-e;a=ci(D6,$6,a),t=ci(I6,R6,jn(t)),a<1?(r=u=>{const d=u*a,h=d*t,f=d-n,p=Ef(u,a),m=Math.exp(-h);return xd-f/p*m},s=u=>{const h=u*a*t,f=h*n+n,p=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-h),y=Ef(Math.pow(u,2),a);return(-r(u)+xd>0?-1:1)*((f-p)*m)/y}):(r=u=>{const d=Math.exp(-u*t),h=(u-n)*t+1;return-xd+d*h},s=u=>{const d=Math.exp(-u*t),h=(n-u)*(t*t);return d*h});const o=5/t,l=N6(r,s,o);if(t=Vi(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:a*2*Math.sqrt(i*u),duration:t}}}const B6=12;function N6(t,e,n){let i=n;for(let r=1;r<B6;r++)i=i-t(i)/e(i);return i}function Ef(t,e){return t*Math.sqrt(1-e*e)}const V6=["duration","bounce"],H6=["stiffness","damping","mass"];function V0(t,e){return e.some(n=>t[n]!==void 0)}function U6(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!V0(t,H6)&&V0(t,V6)){const n=F6(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function m5({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],a={done:!1,value:r},{stiffness:o,damping:l,mass:u,duration:d,velocity:h,isResolvedFromDuration:f}=U6({...i,velocity:-jn(i.velocity||0)}),p=h||0,m=l/(2*Math.sqrt(o*u)),y=s-r,k=jn(Math.sqrt(o/u)),x=Math.abs(y)<5;n||(n=x?.01:2),e||(e=x?.005:.5);let v;if(m<1){const b=Ef(k,m);v=w=>{const j=Math.exp(-m*k*w);return s-j*((p+m*k*y)/b*Math.sin(b*w)+y*Math.cos(b*w))}}else if(m===1)v=b=>s-Math.exp(-k*b)*(y+(p+k*y)*b);else{const b=k*Math.sqrt(m*m-1);v=w=>{const j=Math.exp(-m*k*w),C=Math.min(b*w,300);return s-j*((p+m*k*y)*Math.sinh(C)+b*y*Math.cosh(C))/b}}return{calculatedDuration:f&&d||null,next:b=>{const w=v(b);if(f)a.done=b>=d;else{let j=p;b!==0&&(m<1?j=g5(v,b,w):j=0);const C=Math.abs(j)<=n,S=Math.abs(s-w)<=e;a.done=C&&S}return a.value=a.done?s:w,a}}}function H0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const h=t[0],f={done:!1,value:h},p=P=>o!==void 0&&P<o||l!==void 0&&P>l,m=P=>o===void 0?l:l===void 0||Math.abs(o-P)<Math.abs(l-P)?o:l;let y=n*e;const k=h+y,x=a===void 0?k:a(k);x!==k&&(y=x-h);const v=P=>-y*Math.exp(-P/i),b=P=>x+v(P),w=P=>{const E=v(P),M=b(P);f.done=Math.abs(E)<=u,f.value=f.done?x:M};let j,C;const S=P=>{p(f.value)&&(j=P,C=m5({keyframes:[f.value,m(f.value)],velocity:g5(b,P,f.value),damping:r,stiffness:s,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:P=>{let E=!1;return!C&&j===void 0&&(E=!0,w(P),S(P)),j!==void 0&&P>j?C.next(P-j):(!E&&w(P),f)}}}const W6=t=>{const e=({timestamp:n})=>t(n);return{start:()=>le.update(e,!0),stop:()=>Tn(e),now:()=>We.isProcessing?We.timestamp:performance.now()}},U0=2e4;function W0(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<U0;)e+=n,i=t.next(e);return e>=U0?1/0:e}const K6={decay:H0,inertia:H0,tween:Oc,keyframes:Oc,spring:m5};function zc({autoplay:t=!0,delay:e=0,driver:n=W6,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:o="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:h,...f}){let p=1,m=!1,y,k;const x=()=>{k=new Promise(F=>{y=F})};x();let v;const b=K6[r]||Oc;let w;b!==Oc&&typeof i[0]!="number"&&(w=f5([0,100],i,{clamp:!1}),i=[0,100]);const j=b({...f,keyframes:i});let C;o==="mirror"&&(C=b({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let S="idle",P=null,E=null,M=null;j.calculatedDuration===null&&s&&(j.calculatedDuration=W0(j));const{calculatedDuration:O}=j;let R=1/0,W=1/0;O!==null&&(R=O+a,W=R*(s+1)-a);let Q=0;const X=F=>{if(E===null)return;p>0&&(E=Math.min(E,F)),p<0&&(E=Math.min(F-W/p,E)),P!==null?Q=P:Q=Math.round(F-E)*p;const Z=Q-e*(p>=0?1:-1),pt=p>=0?Z<0:Z>W;Q=Math.max(Z,0),S==="finished"&&P===null&&(Q=W);let Me=Q,_t=j;if(s){const Du=Math.min(Q,W)/R;let so=Math.floor(Du),xi=Du%1;!xi&&Du>=1&&(xi=1),xi===1&&so--,so=Math.min(so,s+1),!!(so%2)&&(o==="reverse"?(xi=1-xi,a&&(xi-=a/R)):o==="mirror"&&(_t=C)),Me=ci(0,1,xi)*R}const be=pt?{done:!1,value:i[0]}:_t.next(Me);w&&(be.value=w(be.value));let{done:vi}=be;!pt&&O!==null&&(vi=p>=0?Q>=W:Q<=0);const jw=P===null&&(S==="finished"||S==="running"&&vi);return h&&h(be.value),jw&&L(),be},N=()=>{v&&v.stop(),v=void 0},se=()=>{S="idle",N(),y(),x(),E=M=null},L=()=>{S="finished",d&&d(),N(),y()},D=()=>{if(m)return;v||(v=n(X));const F=v.now();l&&l(),P!==null?E=F-P:(!E||S==="finished")&&(E=F),S==="finished"&&x(),M=E,P=null,S="running",v.start()};t&&D();const $={then(F,Z){return k.then(F,Z)},get time(){return jn(Q)},set time(F){F=Vi(F),Q=F,P!==null||!v||p===0?P=F:E=v.now()-F/p},get duration(){const F=j.calculatedDuration===null?W0(j):j.calculatedDuration;return jn(F)},get speed(){return p},set speed(F){F===p||!v||(p=F,$.time=jn(Q))},get state(){return S},play:D,pause:()=>{S="paused",P=Q},stop:()=>{m=!0,S!=="idle"&&(S="idle",u&&u(),se())},cancel:()=>{M!==null&&X(M),se()},complete:()=>{S="finished"},sample:F=>(E=0,X(F))};return $}function G6(t){let e;return()=>(e===void 0&&(e=t()),e)}const Y6=G6(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),X6=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Co=10,q6=2e4,J6=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Gb(e.ease);function Q6(t,e,{onUpdate:n,onComplete:i,...r}){if(!(Y6()&&X6.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let a=!1,o,l,u=!1;const d=()=>{l=new Promise(b=>{o=b})};d();let{keyframes:h,duration:f=300,ease:p,times:m}=r;if(J6(e,r)){const b=zc({...r,repeat:0,delay:0});let w={done:!1,value:h[0]};const j=[];let C=0;for(;!w.done&&C<q6;)w=b.sample(C),j.push(w.value),C+=Co;m=void 0,h=j,f=C-Co,p="linear"}const y=l6(t.owner.current,e,h,{...r,duration:f,ease:p,times:m}),k=()=>{u=!1,y.cancel()},x=()=>{u=!0,le.update(k),o(),d()};return y.onfinish=()=>{u||(t.set(c6(h,r)),i&&i(),x())},{then(b,w){return l.then(b,w)},attachTimeline(b){return y.timeline=b,y.onfinish=null,we},get time(){return jn(y.currentTime||0)},set time(b){y.currentTime=Vi(b)},get speed(){return y.playbackRate},set speed(b){y.playbackRate=b},get duration(){return jn(f)},play:()=>{a||(y.play(),Tn(k))},pause:()=>y.pause(),stop:()=>{if(a=!0,y.playState==="idle")return;const{currentTime:b}=y;if(b){const w=zc({...r,autoplay:!1});t.setWithVelocity(w.sample(b-Co).value,w.sample(b).value,Co)}x()},complete:()=>{u||y.finish()},cancel:x}}function Z6({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:s=>(s(),Promise.resolve()),cancel:we,complete:we});return e?zc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const eS={type:"spring",stiffness:500,damping:25,restSpeed:10},tS=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),nS={type:"keyframes",duration:.8},iS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rS=(t,{keyframes:e})=>e.length>2?nS:Zi.has(t)?t.startsWith("scale")?tS(e[1]):eS:iS,Mf=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ui.test(e)||e==="0")&&!e.startsWith("url(")),sS=new Set(["brightness","contrast","saturate","opacity"]);function aS(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(ju)||[];if(!i)return t;const r=n.replace(i,"");let s=sS.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const oS=/([a-z-]*)\(.*?\)/g,Af={...ui,getAnimatableNone:t=>{const e=t.match(oS);return e?e.map(aS).join(" "):t}},lS={...Mb,color:qe,backgroundColor:qe,outlineColor:qe,fill:qe,stroke:qe,borderColor:qe,borderTopColor:qe,borderRightColor:qe,borderBottomColor:qe,borderLeftColor:qe,filter:Af,WebkitFilter:Af},Eg=t=>lS[t];function y5(t,e){let n=Eg(t);return n!==Af&&(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const v5=t=>/^0[^.\s]+$/.test(t);function cS(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||v5(t)}function uS(t,e,n,i){const r=Mf(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=i.from!==void 0?i.from:t.get();let o;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?a:s[u-1]),cS(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(o=s[u]);if(r&&l.length&&o)for(let u=0;u<l.length;u++){const d=l[u];s[d]=y5(e,o)}return s}function dS({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function Mg(t,e){return t[e]||t.default||t}const hS={skipAnimations:!1},Ag=(t,e,n,i={})=>r=>{const s=Mg(i,t)||{},a=s.delay||i.delay||0;let{elapsed:o=0}=i;o=o-Vi(a);const l=uS(e,t,n,s),u=l[0],d=l[l.length-1],h=Mf(t,u),f=Mf(t,d);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-o,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(dS(s)||(p={...p,...rS(t,p)}),p.duration&&(p.duration=Vi(p.duration)),p.repeatDelay&&(p.repeatDelay=Vi(p.repeatDelay)),!h||!f||o6.current||s.type===!1||hS.skipAnimations)return Z6(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=Q6(e,t,p);if(m)return m}return zc(p)};function Ic(t){return!!(ht(t)&&t.add)}const x5=t=>/^\-?\d*\.?\d+$/.test(t);function Lg(t,e){t.indexOf(e)===-1&&t.push(e)}function Og(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class zg{constructor(){this.subscriptions=[]}add(e){return Lg(this.subscriptions,e),()=>Og(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fS=t=>!isNaN(parseFloat(t));class pS{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:a}=We;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,le.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>le.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=fS(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new zg);const i=this.events[e].add(n);return e==="change"?()=>{i(),le.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?p5(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Gr(t,e){return new pS(t,e)}const b5=t=>e=>e.test(t),gS={test:t=>t==="auto",parse:t=>t},k5=[er,B,cn,In,j8,w8,gS],xs=t=>k5.find(b5(t)),mS=[...k5,qe,ui],yS=t=>mS.find(b5(t));function vS(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Gr(n))}function xS(t,e){const n=Su(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const a in s){const o=D8(s[a]);vS(t,a,o)}}function bS(t,e,n){var i,r;const s=Object.keys(e).filter(o=>!t.hasValue(o)),a=s.length;if(a)for(let o=0;o<a;o++){const l=s[o],u=e[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),d!=null&&(typeof d=="string"&&(x5(d)||v5(d))?d=parseFloat(d):!yS(d)&&ui.test(u)&&(d=y5(l,u)),t.addValue(l,Gr(d,{owner:t})),n[l]===void 0&&(n[l]=d),d!==null&&t.setBaseTarget(l,d))}}function kS(t,e){return e?(e[t]||e.default||e).from:void 0}function wS(t,e,n){const i={};for(const r in t){const s=kS(r,e);if(s!==void 0)i[r]=s;else{const a=n.getValue(r);a&&(i[r]=a.get())}}return i}function jS({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function _S(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function w5(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:a,...o}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const h in o){const f=t.getValue(h),p=o[h];if(!f||p===void 0||d&&jS(d,h))continue;const m={delay:n,elapsed:0,...Mg(s||{},h)};if(window.HandoffAppearAnimations){const x=t.getProps()[jb];if(x){const v=window.HandoffAppearAnimations(x,h,f,le);v!==null&&(m.elapsed=v,m.isHandoff=!0)}}let y=!m.isHandoff&&!_S(f,p);if(m.type==="spring"&&(f.getVelocity()||m.velocity)&&(y=!1),f.animation&&(y=!1),y)continue;f.start(Ag(h,f,p,t.shouldReduceMotion&&Zi.has(h)?{type:!1}:m));const k=f.animation;Ic(l)&&(l.add(h),k.then(()=>l.remove(h))),u.push(k)}return a&&Promise.all(u).then(()=>{a&&xS(t,a)}),u}function Lf(t,e,n={}){const i=Su(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(w5(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=r;return SS(t,e,u+l,d,h,n)}:()=>Promise.resolve(),{when:o}=r;if(o){const[l,u]=o==="beforeChildren"?[s,a]:[a,s];return l().then(()=>u())}else return Promise.all([s(),a(n.delay)])}function SS(t,e,n=0,i=0,r=1,s){const a=[],o=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>o-u*i;return Array.from(t.variantChildren).sort(PS).forEach((u,d)=>{u.notify("AnimationStart",e),a.push(Lf(u,e,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(a)}function PS(t,e){return t.sortNodePosition(e)}function CS(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Lf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Lf(t,e,n);else{const r=typeof e=="function"?Su(t,e,n.custom):e;i=Promise.all(w5(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const TS=[...mg].reverse(),ES=mg.length;function MS(t){return e=>Promise.all(e.map(({animation:n,options:i})=>CS(t,n,i)))}function AS(t){let e=MS(t);const n=OS();let i=!0;const r=(l,u)=>{const d=Su(t,u);if(d){const{transition:h,transitionEnd:f,...p}=d;l={...l,...p,...f}}return l};function s(l){e=l(t)}function a(l,u){const d=t.getProps(),h=t.getVariantContext(!0)||{},f=[],p=new Set;let m={},y=1/0;for(let x=0;x<ES;x++){const v=TS[x],b=n[v],w=d[v]!==void 0?d[v]:h[v],j=Ta(w),C=v===u?b.isActive:null;C===!1&&(y=x);let S=w===h[v]&&w!==d[v]&&j;if(S&&i&&t.manuallyAnimateOnMount&&(S=!1),b.protectedKeys={...m},!b.isActive&&C===null||!w&&!b.prevProp||ku(w)||typeof w=="boolean")continue;let E=LS(b.prevProp,w)||v===u&&b.isActive&&!S&&j||x>y&&j,M=!1;const O=Array.isArray(w)?w:[w];let R=O.reduce(r,{});C===!1&&(R={});const{prevResolvedValues:W={}}=b,Q={...W,...R},X=N=>{E=!0,p.has(N)&&(M=!0,p.delete(N)),b.needsAnimating[N]=!0};for(const N in Q){const se=R[N],L=W[N];if(m.hasOwnProperty(N))continue;let D=!1;Mc(se)&&Mc(L)?D=!Wb(se,L):D=se!==L,D?se!==void 0?X(N):p.add(N):se!==void 0&&p.has(N)?X(N):b.protectedKeys[N]=!0}b.prevProp=w,b.prevResolvedValues=R,b.isActive&&(m={...m,...R}),i&&t.blockInitialAnimation&&(E=!1),E&&(!S||M)&&f.push(...O.map(N=>({animation:N,options:{type:v,...l}})))}if(p.size){const x={};p.forEach(v=>{const b=t.getBaseTarget(v);b!==void 0&&(x[v]=b)}),f.push({animation:x})}let k=!!f.length;return i&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(k=!1),i=!1,k?e(f):Promise.resolve()}function o(l,u,d){var h;if(n[l].isActive===u)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=a(d,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n}}function LS(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Wb(e,t):!1}function bi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function OS(){return{animate:bi(!0),whileInView:bi(),whileHover:bi(),whileTap:bi(),whileDrag:bi(),whileFocus:bi(),exit:bi()}}class zS extends yi{constructor(e){super(e),e.animationState||(e.animationState=AS(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),ku(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let IS=0;class RS extends yi{constructor(){super(...arguments),this.id=IS++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const DS={animation:{Feature:zS},exit:{Feature:RS}},K0=(t,e)=>Math.abs(t-e);function $S(t,e){const n=K0(t.x,e.x),i=K0(t.y,e.y);return Math.sqrt(n**2+i**2)}class j5{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=kd(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=$S(h.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:m}=h,{timestamp:y}=We;this.history.push({...m,timestamp:y});const{onStart:k,onMove:x}=this.handlers;f||(k&&k(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=bd(f,this.transformPagePoint),le.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=kd(h.type==="pointercancel"?this.lastMoveEventInfo:bd(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,k),m&&m(h,k)},!Bb(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const a=_u(e),o=bd(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=We;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(e,kd(o,this.history)),this.removeListeners=si(wn(this.contextWindow,"pointermove",this.handlePointerMove),wn(this.contextWindow,"pointerup",this.handlePointerUp),wn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Tn(this.updatePoint)}}function bd(t,e){return e?{point:e(t.point)}:t}function G0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function kd({point:t},e){return{point:t,delta:G0(t,_5(e)),offset:G0(t,FS(e)),velocity:BS(e,.1)}}function FS(t){return t[0]}function _5(t){return t[t.length-1]}function BS(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_5(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Vi(e)));)n--;if(!i)return{x:0,y:0};const s=jn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function kt(t){return t.max-t.min}function Of(t,e=0,n=.01){return Math.abs(t-e)<=n}function Y0(t,e,n,i=.5){t.origin=i,t.originPoint=pe(e.min,e.max,t.origin),t.scale=kt(n)/kt(e),(Of(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=pe(n.min,n.max,t.origin)-t.originPoint,(Of(t.translate)||isNaN(t.translate))&&(t.translate=0)}function qs(t,e,n,i){Y0(t.x,e.x,n.x,i?i.originX:void 0),Y0(t.y,e.y,n.y,i?i.originY:void 0)}function X0(t,e,n){t.min=n.min+e.min,t.max=t.min+kt(e)}function NS(t,e,n){X0(t.x,e.x,n.x),X0(t.y,e.y,n.y)}function q0(t,e,n){t.min=e.min-n.min,t.max=t.min+kt(e)}function Js(t,e,n){q0(t.x,e.x,n.x),q0(t.y,e.y,n.y)}function VS(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?pe(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?pe(n,t,i.max):Math.min(t,n)),t}function J0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function HS(t,{top:e,left:n,bottom:i,right:r}){return{x:J0(t.x,n,r),y:J0(t.y,e,i)}}function Q0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function US(t,e){return{x:Q0(t.x,e.x),y:Q0(t.y,e.y)}}function WS(t,e){let n=.5;const i=kt(t),r=kt(e);return r>i?n=Ma(e.min,e.max-i,t.min):i>r&&(n=Ma(t.min,t.max-r,e.min)),ci(0,1,n)}function KS(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const zf=.35;function GS(t=zf){return t===!1?t=0:t===!0&&(t=zf),{x:Z0(t,"left","right"),y:Z0(t,"top","bottom")}}function Z0(t,e,n){return{min:e1(t,e),max:e1(t,n)}}function e1(t,e){return typeof t=="number"?t:t[e]||0}const t1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Cr=()=>({x:t1(),y:t1()}),n1=()=>({min:0,max:0}),Se=()=>({x:n1(),y:n1()});function Ct(t){return[t("x"),t("y")]}function S5({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function YS({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function XS(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function wd(t){return t===void 0||t===1}function If({scale:t,scaleX:e,scaleY:n}){return!wd(t)||!wd(e)||!wd(n)}function Ci(t){return If(t)||P5(t)||t.z||t.rotate||t.rotateX||t.rotateY}function P5(t){return i1(t.x)||i1(t.y)}function i1(t){return t&&t!=="0%"}function Rc(t,e,n){const i=t-n,r=e*i;return n+r}function r1(t,e,n,i,r){return r!==void 0&&(t=Rc(t,r,i)),Rc(t,n,i)+e}function Rf(t,e=0,n=1,i,r){t.min=r1(t.min,e,n,i,r),t.max=r1(t.max,e,n,i,r)}function C5(t,{x:e,y:n}){Rf(t.x,e.translate,e.scale,e.originPoint),Rf(t.y,n.translate,n.scale,n.originPoint)}function qS(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=n[o],a=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Tr(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,C5(t,a)),i&&Ci(s.latestValues)&&Tr(t,s.latestValues))}e.x=s1(e.x),e.y=s1(e.y)}function s1(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Nn(t,e){t.min=t.min+e,t.max=t.max+e}function a1(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,a=pe(t.min,t.max,s);Rf(t,e[n],e[i],a,e.scale)}const JS=["x","scaleX","originX"],QS=["y","scaleY","originY"];function Tr(t,e){a1(t.x,e,JS),a1(t.y,e,QS)}function T5(t,e){return S5(XS(t.getBoundingClientRect(),e))}function ZS(t,e,n){const i=T5(t,n),{scroll:r}=e;return r&&(Nn(i.x,r.offset.x),Nn(i.y,r.offset.y)),i}const E5=({current:t})=>t?t.ownerDocument.defaultView:null,eP=new WeakMap;class tP{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Se(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(_u(d,"page").point)},s=(d,h)=>{const{drag:f,dragPropagation:p,onDragStart:m}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Vb(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ct(k=>{let x=this.getAxisMotionValue(k).get()||0;if(cn.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const b=v.layout.layoutBox[k];b&&(x=kt(b)*(parseFloat(x)/100))}}this.originPoint[k]=x}),m&&le.update(()=>m(d,h),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,h)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:m,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:k}=h;if(p&&this.currentDirection===null){this.currentDirection=nP(k),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,k),this.updateAxis("y",h.point,k),this.visualElement.render(),y&&y(d,h)},o=(d,h)=>this.stop(d,h),l=()=>Ct(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new j5(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:E5(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&le.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!To(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=VS(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Sr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=HS(r.layoutBox,n):this.constraints=!1,this.elastic=GS(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ct(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=KS(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Sr(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=ZS(i,r.root,this.visualElement.getTransformPagePoint());let a=US(r.layout.layoutBox,s);if(n){const o=n(YS(a));this.hasMutatedConstraints=!!o,o&&(a=S5(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Ct(d=>{if(!To(d,n,this.currentDirection))return;let h=l&&l[d]||{};a&&(h={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[d]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(Ag(e,i,0,n))}stopAnimation(){Ct(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ct(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ct(n=>{const{drag:i}=this.getProps();if(!To(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n];s.set(e[n]-pe(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Sr(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ct(a=>{const o=this.getAxisMotionValue(a);if(o){const l=o.get();r[a]=WS({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ct(a=>{if(!To(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(pe(l,u,r[a]))})}addListeners(){if(!this.visualElement.current)return;eP.set(this.visualElement,this);const e=this.visualElement.current,n=wn(e,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Sr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const a=bn(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ct(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=zf,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function To(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function nP(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class iP extends yi{constructor(e){super(e),this.removeGroupControls=we,this.removeListeners=we,this.controls=new tP(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const o1=t=>(e,n)=>{t&&le.update(()=>t(e,n))};class rP extends yi{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(e){this.session=new j5(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E5(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:o1(e),onStart:o1(n),onMove:i,onEnd:(s,a)=>{delete this.session,r&&le.update(()=>r(s,a))}}}mount(){this.removePointerDownListener=wn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function sP(){const t=_.useContext(xu);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=_.useId();return _.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Gl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function l1(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(B.test(t))t=parseFloat(t);else return t;const n=l1(t,e.target.x),i=l1(t,e.target.y);return`${n}% ${i}%`}},aP={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const u=pe(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=u),typeof r[3+a]=="number"&&(r[3+a]/=u),s(r)}};class oP extends ze.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;g8(lP),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Gl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||le.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function M5(t){const[e,n]=sP(),i=_.useContext(vg);return ze.createElement(oP,{...t,layoutGroup:i,switchLayoutGroup:_.useContext(Sb),isPresent:e,safeToRemove:n})}const lP={borderRadius:{...bs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bs,borderTopRightRadius:bs,borderBottomLeftRadius:bs,borderBottomRightRadius:bs,boxShadow:aP},A5=["TopLeft","TopRight","BottomLeft","BottomRight"],cP=A5.length,c1=t=>typeof t=="string"?parseFloat(t):t,u1=t=>typeof t=="number"||B.test(t);function uP(t,e,n,i,r,s){r?(t.opacity=pe(0,n.opacity!==void 0?n.opacity:1,dP(i)),t.opacityExit=pe(e.opacity!==void 0?e.opacity:1,0,hP(i))):s&&(t.opacity=pe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<cP;a++){const o=`border${A5[a]}Radius`;let l=d1(e,o),u=d1(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||u1(l)===u1(u)?(t[o]=Math.max(pe(c1(l),c1(u),i),0),(cn.test(u)||cn.test(l))&&(t[o]+="%")):t[o]=u}(e.rotate||n.rotate)&&(t.rotate=pe(e.rotate||0,n.rotate||0,i))}function d1(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const dP=L5(0,.5,e5),hP=L5(.5,.95,we);function L5(t,e,n){return i=>i<t?0:i>e?1:n(Ma(t,e,i))}function h1(t,e){t.min=e.min,t.max=e.max}function St(t,e){h1(t.x,e.x),h1(t.y,e.y)}function f1(t,e,n,i,r){return t-=e,t=Rc(t,1/n,i),r!==void 0&&(t=Rc(t,1/r,i)),t}function fP(t,e=0,n=1,i=.5,r,s=t,a=t){if(cn.test(e)&&(e=parseFloat(e),e=pe(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=pe(s.min,s.max,i);t===s&&(o-=e),t.min=f1(t.min,e,n,o,r),t.max=f1(t.max,e,n,o,r)}function p1(t,e,[n,i,r],s,a){fP(t,e[n],e[i],e[r],e.scale,s,a)}const pP=["x","scaleX","originX"],gP=["y","scaleY","originY"];function g1(t,e,n,i){p1(t.x,e,pP,n?n.x:void 0,i?i.x:void 0),p1(t.y,e,gP,n?n.y:void 0,i?i.y:void 0)}function m1(t){return t.translate===0&&t.scale===1}function O5(t){return m1(t.x)&&m1(t.y)}function mP(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function z5(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function y1(t){return kt(t.x)/kt(t.y)}class yP{constructor(){this.members=[]}add(e){Lg(this.members,e),e.scheduleRender()}remove(e){if(Og(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function v1(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),d&&(i+=`rotateY(${d}deg) `)}const a=t.x.scale*e.x,o=t.y.scale*e.y;return(a!==1||o!==1)&&(i+=`scale(${a}, ${o})`),i||"none"}const vP=(t,e)=>t.depth-e.depth;class xP{constructor(){this.children=[],this.isDirty=!1}add(e){Lg(this.children,e),this.isDirty=!0}remove(e){Og(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(vP),this.isDirty=!1,this.children.forEach(e)}}function bP(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Tn(i),t(s-e))};return le.read(i,!0),()=>Tn(i)}function kP(t){window.MotionDebug&&window.MotionDebug.record(t)}function wP(t){return t instanceof SVGElement&&t.tagName!=="svg"}function jP(t,e,n){const i=ht(t)?t:Gr(t);return i.start(Ag("",i,e,n)),i.animation}const x1=["","X","Y","Z"],_P={visibility:"hidden"},b1=1e3;let SP=0;const Ti={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function I5({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=SP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ti.totalNodes=Ti.resolvedTargetDeltas=Ti.recalculatedProjection=0,this.nodes.forEach(TP),this.nodes.forEach(OP),this.nodes.forEach(zP),this.nodes.forEach(EP),kP(Ti)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new xP)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new zg),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=wP(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(a,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=bP(f,250),Gl.hasAnimatedSinceResize&&(Gl.hasAnimatedSinceResize=!1,this.nodes.forEach(w1))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||FP,{onLayoutAnimationStart:k,onLayoutAnimationComplete:x}=d.getProps(),v=!this.targetLayout||!z5(this.targetLayout,m)||p,b=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,b);const w={...Mg(y,"layout"),onPlay:k,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||w1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(IP),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(k1);return}this.isUpdating||this.nodes.forEach(AP),this.isUpdating=!1,this.nodes.forEach(LP),this.nodes.forEach(PP),this.nodes.forEach(CP),this.clearAllSnapshots();const o=performance.now();We.delta=ci(0,1e3/60,o-We.timestamp),We.timestamp=o,We.isProcessing=!0,hd.update.process(We),hd.preRender.process(We),hd.render.process(We),We.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(MP),this.sharedNodes.forEach(RP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform,o=this.projectionDelta&&!O5(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||Ci(this.latestValues)||d)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),BP(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return Se();const o=a.measureViewportBox(),{scroll:l}=this.root;return l&&(Nn(o.x,l.offset.x),Nn(o.y,l.offset.y)),o}removeElementScroll(a){const o=Se();St(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:h}=u;if(u!==this.root&&d&&h.layoutScroll){if(d.isRoot){St(o,a);const{scroll:f}=this.root;f&&(Nn(o.x,-f.offset.x),Nn(o.y,-f.offset.y))}Nn(o.x,d.offset.x),Nn(o.y,d.offset.y)}}return o}applyTransform(a,o=!1){const l=Se();St(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Tr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ci(d.latestValues)&&Tr(l,d.latestValues)}return Ci(this.latestValues)&&Tr(l,this.latestValues),l}removeTransform(a){const o=Se();St(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ci(u.latestValues))continue;If(u.latestValues)&&u.updateSnapshot();const d=Se(),h=u.measurePageBox();St(d,h),g1(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Ci(this.latestValues)&&g1(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==We.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=We.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),Js(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Se(),this.targetWithTransforms=Se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),C5(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),Js(this.relativeTargetOrigin,this.target,p.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ti.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||If(this.parent.latestValues)||P5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===We.timestamp&&(u=!1),u)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;St(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;qS(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox);const{target:m}=o;if(!m){this.projectionTransform&&(this.projectionDelta=Cr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Cr(),this.projectionDeltaWithTransform=Cr());const y=this.projectionTransform;qs(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=v1(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Ti.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},h=Cr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=Se(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,y=p!==m,k=this.getStack(),x=!k||k.members.length<=1,v=!!(y&&!x&&this.options.crossfade===!0&&!this.path.some($P));this.animationProgress=0;let b;this.mixTargetDelta=w=>{const j=w/1e3;j1(h.x,a.x,j),j1(h.y,a.y,j),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Js(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),DP(this.relativeTarget,this.relativeTargetOrigin,f,j),b&&mP(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Se()),St(b,this.relativeTarget)),y&&(this.animationValues=d,uP(d,u,this.latestValues,j,v,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=le.update(()=>{Gl.hasAnimatedSinceResize=!0,this.currentAnimation=jP(0,b1,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(b1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&R5(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Se();const h=kt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const f=kt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}St(o,l),Tr(o,d),qs(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new yP),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(o=!0),!o)return;const u={};for(let d=0;d<x1.length;d++){const h="rotate"+x1[d];l[h]&&(u[h]=l[h],a.setStaticValue(h,0))}a.render();for(const d in u)a.setStaticValue(d,u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return _P;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Kl(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Kl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ci(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=v1(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,h.animationValues?u.opacity=h===this?(l=(o=f.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Tc){if(f[y]===void 0)continue;const{correct:k,applyTo:x}=Tc[y],v=u.transform==="none"?f[y]:k(f[y],h);if(x){const b=x.length;for(let w=0;w<b;w++)u[x[w]]=v}else u[y]=v}return this.options.layoutId&&(u.pointerEvents=h===this?Kl(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(k1),this.root.sharedNodes.clear()}}}function PP(t){t.updateLayout()}function CP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=n.source!==t.layout.source;s==="size"?Ct(h=>{const f=a?n.measuredBox[h]:n.layoutBox[h],p=kt(f);f.min=i[h].min,f.max=f.min+p}):R5(s,n.layoutBox,i)&&Ct(h=>{const f=a?n.measuredBox[h]:n.layoutBox[h],p=kt(i[h]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const o=Cr();qs(o,i,n.layoutBox);const l=Cr();a?qs(l,t.applyTransform(r,!0),n.measuredBox):qs(l,i,n.layoutBox);const u=!O5(o);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const m=Se();Js(m,n.layoutBox,f.layoutBox);const y=Se();Js(y,i,p.layoutBox),z5(m,y)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=m,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function TP(t){Ti.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function EP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function MP(t){t.clearSnapshot()}function k1(t){t.clearMeasurements()}function AP(t){t.isLayoutDirty=!1}function LP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function w1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function OP(t){t.resolveTargetDelta()}function zP(t){t.calcProjection()}function IP(t){t.resetRotation()}function RP(t){t.removeLeadSnapshot()}function j1(t,e,n){t.translate=pe(e.translate,0,n),t.scale=pe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _1(t,e,n,i){t.min=pe(e.min,n.min,i),t.max=pe(e.max,n.max,i)}function DP(t,e,n,i){_1(t.x,e.x,n.x,i),_1(t.y,e.y,n.y,i)}function $P(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const FP={duration:.45,ease:[.4,0,.1,1]},S1=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),P1=S1("applewebkit/")&&!S1("chrome/")?Math.round:we;function C1(t){t.min=P1(t.min),t.max=P1(t.max)}function BP(t){C1(t.x),C1(t.y)}function R5(t,e,n){return t==="position"||t==="preserve-aspect"&&!Of(y1(e),y1(n),.2)}const NP=I5({attachResizeListener:(t,e)=>bn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jd={current:void 0},D5=I5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!jd.current){const t=new NP({});t.mount(window),t.setOptions({layoutScroll:!0}),jd.current=t}return jd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),VP={pan:{Feature:rP},drag:{Feature:iP,ProjectionNode:D5,MeasureLayout:M5}},HP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function UP(t){const e=HP.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Df(t,e,n=1){const[i,r]=UP(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return x5(a)?parseFloat(a):a}else return Pf(r)?Df(r,e,n+1):r}function WP(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Pf(s))return;const a=Df(s,i);a&&r.set(a)});for(const r in e){const s=e[r];if(!Pf(s))continue;const a=Df(s,i);a&&(e[r]=a,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const KP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),$5=t=>KP.has(t),GP=t=>Object.keys(t).some($5),T1=t=>t===er||t===B,E1=(t,e)=>parseFloat(t.split(", ")[e]),M1=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return E1(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?E1(s[1],t):0}},YP=new Set(["x","y","z"]),XP=qa.filter(t=>!YP.has(t));function qP(t){const e=[];return XP.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Yr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:M1(4,13),y:M1(5,14)};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const JP=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:a}=s,o={};a==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{o[u]=Yr[u](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const d=e.getValue(u);d&&d.jump(o[u]),t[u]=Yr[u](l,s)}),t},QP=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter($5);let s=[],a=!1;const o=[];if(r.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let d=n[l],h=xs(d);const f=e[l];let p;if(Mc(f)){const m=f.length,y=f[0]===null?1:0;d=f[y],h=xs(d);for(let k=y;k<m&&f[k]!==null;k++)p?Ac(xs(f[k])===p):p=xs(f[k])}else p=xs(f);if(h!==p)if(T1(h)&&T1(p)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof f=="string"?e[l]=parseFloat(f):Array.isArray(f)&&p===B&&(e[l]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(d===0||f===0)?d===0?u.set(p.transform(d)):e[l]=h.transform(f):(a||(s=qP(t),a=!0),o.push(l),i[l]=i[l]!==void 0?i[l]:e[l],u.jump(f))}),o.length){const l=o.indexOf("height")>=0?window.pageYOffset:null,u=JP(e,t,o);return s.length&&s.forEach(([d,h])=>{t.getValue(d).set(h)}),t.render(),bu&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:e,transitionEnd:i}};function ZP(t,e,n,i){return GP(e)?QP(t,e,n,i):{target:e,transitionEnd:i}}const e7=(t,e,n,i)=>{const r=WP(t,e,i);return e=r.target,i=r.transitionEnd,ZP(t,e,n,i)},$f={current:null},F5={current:!1};function t7(){if(F5.current=!0,!!bu)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>$f.current=t.matches;t.addListener(e),e()}else $f.current=!1}function n7(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],a=n[r];if(ht(s))t.addValue(r,s),Ic(i)&&i.add(r);else if(ht(a))t.addValue(r,Gr(s,{owner:t})),Ic(i)&&i.remove(r);else if(a!==s)if(t.hasValue(r)){const o=t.getValue(r);!o.hasAnimated&&o.set(s)}else{const o=t.getStaticValue(r);t.addValue(r,Gr(o!==void 0?o:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const A1=new WeakMap,B5=Object.keys(Ea),i7=B5.length,L1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],r7=yg.length;class s7{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>le.render(this.render,!1,!0);const{latestValues:o,renderState:l}=s;this.latestValues=o,this.baseTarget={...o},this.initialValues=n.initial?{...o}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=wu(n),this.isVariantNode=_b(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const h in d){const f=d[h];o[h]!==void 0&&ht(f)&&(f.set(o[h],!1),Ic(u)&&u.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,A1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),F5.current||t7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$f.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){A1.delete(this.current),this.projection&&this.projection.unmount(),Tn(this.notifyUpdate),Tn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Zi.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&le.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let a,o;for(let l=0;l<i7;l++){const u=B5[l],{isEnabled:d,Feature:h,ProjectionNode:f,MeasureLayout:p}=Ea[u];f&&(a=f),d(n)&&(!this.features[u]&&h&&(this.features[u]=new h(this)),p&&(o=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||h&&Sr(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:p})}return o}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Se()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<L1.length;i++){const r=L1[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=n7(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<r7;i++){const r=yg[i],s=this.props[r];(Ta(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Gr(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Sg(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ht(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new zg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class N5 extends s7{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let a=wS(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),a&&(a=r(a))),s){bS(this,i,a);const o=e7(this,i,a,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function a7(t){return window.getComputedStyle(t)}class o7 extends N5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Zi.has(n)){const i=Eg(n);return i&&i.default||0}else{const i=a7(e),r=(Tb(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return T5(e,n)}build(e,n,i,r){bg(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return _g(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ht(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){zb(e,n,i,r)}}class l7 extends N5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Zi.has(n)){const i=Eg(n);return i&&i.default||0}return n=Ib.has(n)?n:gg(n),e.getAttribute(n)}measureInstanceViewportBox(){return Se()}scrapeMotionValuesFromProps(e,n){return Db(e,n)}build(e,n,i,r){wg(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Rb(e,n,i,r)}mount(e){this.isSVGTag=jg(e.tagName),super.mount(e)}}const c7=(t,e)=>xg(t)?new l7(e,{enableHardwareAcceleration:!1}):new o7(e,{enableHardwareAcceleration:!0}),u7={layout:{ProjectionNode:D5,MeasureLayout:M5}},d7={...DS,...r6,...VP,...u7},T=f8((t,e)=>W8(t,e,d7,c7));function V5(){const t=_.useRef(!1);return pg(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function h7(){const t=V5(),[e,n]=_.useState(0),i=_.useCallback(()=>{t.current&&n(e+1)},[e]);return[_.useCallback(()=>le.postRender(i),[i]),e]}class f7 extends _.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p7({children:t,isPresent:e}){const n=_.useId(),i=_.useRef(null),r=_.useRef({width:0,height:0,top:0,left:0});return _.useInsertionEffect(()=>{const{width:s,height:a,top:o,left:l}=r.current;if(e||!i.current||!s||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),_.createElement(f7,{isPresent:e,childRef:i,sizeRef:r},_.cloneElement(t,{ref:i}))}const _d=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a})=>{const o=$b(g7),l=_.useId(),u=_.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:d=>{o.set(d,!0);for(const h of o.values())if(!h)return;i&&i()},register:d=>(o.set(d,!1),()=>o.delete(d))}),s?void 0:[n]);return _.useMemo(()=>{o.forEach((d,h)=>o.set(h,!1))},[n]),_.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),a==="popLayout"&&(t=_.createElement(p7,{isPresent:n},t)),_.createElement(xu.Provider,{value:u},t)};function g7(){return new Map}function m7(t){return _.useEffect(()=>()=>t(),[])}const Ei=t=>t.key||"";function y7(t,e){t.forEach(n=>{const i=Ei(n);e.set(i,n)})}function v7(t){const e=[];return _.Children.forEach(t,n=>{_.isValidElement(n)&&e.push(n)}),e}const x7=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const o=_.useContext(vg).forceRender||h7()[0],l=V5(),u=v7(t);let d=u;const h=_.useRef(new Map).current,f=_.useRef(d),p=_.useRef(new Map).current,m=_.useRef(!0);if(pg(()=>{m.current=!1,y7(u,p),f.current=d}),m7(()=>{m.current=!0,p.clear(),h.clear()}),m.current)return _.createElement(_.Fragment,null,d.map(v=>_.createElement(_d,{key:Ei(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:a},v)));d=[...d];const y=f.current.map(Ei),k=u.map(Ei),x=y.length;for(let v=0;v<x;v++){const b=y[v];k.indexOf(b)===-1&&!h.has(b)&&h.set(b,void 0)}return a==="wait"&&h.size&&(d=[]),h.forEach((v,b)=>{if(k.indexOf(b)!==-1)return;const w=p.get(b);if(!w)return;const j=y.indexOf(b);let C=v;if(!C){const S=()=>{h.delete(b);const P=Array.from(p.keys()).filter(E=>!k.includes(E));if(P.forEach(E=>p.delete(E)),f.current=u.filter(E=>{const M=Ei(E);return M===b||P.includes(M)}),!h.size){if(l.current===!1)return;o(),i&&i()}};C=_.createElement(_d,{key:Ei(w),isPresent:!1,onExitComplete:S,custom:e,presenceAffectsLayout:s,mode:a},w),h.set(b,C)}d.splice(j,0,C)}),d=d.map(v=>{const b=v.key;return h.has(b)?v:_.createElement(_d,{key:Ei(v),isPresent:!0,presenceAffectsLayout:s,mode:a},v)}),_.createElement(_.Fragment,null,h.size?d:d.map(v=>_.cloneElement(v)))},b7="modulepreload",k7=function(t){return"/webGallery-test-2-/"+t},O1={},Xr=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=k7(l),l in O1)return;O1[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":b7,u||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},w7=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Xr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)};class Ig extends Error{constructor(e,n="FunctionsError",i){super(e),this.name=n,this.context=i}}class j7 extends Ig{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class _7 extends Ig{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class S7 extends Ig{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Ff;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Ff||(Ff={}));var P7=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};class C7{constructor(e,{headers:n={},customFetch:i,region:r=Ff.Any}={}){this.url=e,this.headers=n,this.region=r,this.fetch=w7(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,n={}){var i;return P7(this,void 0,void 0,function*(){try{const{headers:r,method:s,body:a}=n;let o={},{region:l}=n;l||(l=this.region),l&&l!=="any"&&(o["x-region"]=l);let u;a&&(r&&!Object.prototype.hasOwnProperty.call(r,"Content-Type")||!r)&&(typeof Blob<"u"&&a instanceof Blob||a instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",u=a):typeof a=="string"?(o["Content-Type"]="text/plain",u=a):typeof FormData<"u"&&a instanceof FormData?u=a:(o["Content-Type"]="application/json",u=JSON.stringify(a)));const d=yield this.fetch(`${this.url}/${e}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),r),body:u}).catch(m=>{throw new j7(m)}),h=d.headers.get("x-relay-error");if(h&&h==="true")throw new _7(d);if(!d.ok)throw new S7(d);let f=((i=d.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),p;return f==="application/json"?p=yield d.json():f==="application/octet-stream"?p=yield d.blob():f==="text/event-stream"?p=d:f==="multipart/form-data"?p=yield d.formData():p=yield d.text(),{data:p,error:null}}catch(r){return{data:null,error:r}}})}}var rt={},Rg={},Pu={},eo={},Cu={},Tu={},T7=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},qr=T7();const E7=qr.fetch,H5=qr.fetch.bind(qr),U5=qr.Headers,M7=qr.Request,A7=qr.Response,rs=Object.freeze(Object.defineProperty({__proto__:null,Headers:U5,Request:M7,Response:A7,default:H5,fetch:E7},Symbol.toStringTag,{value:"Module"})),L7=Cw(rs);var Eu={};Object.defineProperty(Eu,"__esModule",{value:!0});class O7 extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}}Eu.default=O7;var W5=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Tu,"__esModule",{value:!0});const z7=W5(L7),I7=W5(Eu);let R7=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=z7.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,n){return this.headers=Object.assign({},this.headers),this.headers[e]=n,this}then(e,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const i=this.fetch;let r=i(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var a,o,l;let u=null,d=null,h=null,f=s.status,p=s.statusText;if(s.ok){if(this.method!=="HEAD"){const x=await s.text();x===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?d=x:d=JSON.parse(x))}const y=(a=this.headers.Prefer)===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),k=(o=s.headers.get("content-range"))===null||o===void 0?void 0:o.split("/");y&&k&&k.length>1&&(h=parseInt(k[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(u={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,h=null,f=406,p="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const y=await s.text();try{u=JSON.parse(y),Array.isArray(u)&&s.status===404&&(d=[],u=null,f=200,p="OK")}catch{s.status===404&&y===""?(f=204,p="No Content"):u={message:y}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,f=200,p="OK"),u&&this.shouldThrowOnError)throw new I7.default(u)}return{error:u,data:d,count:h,status:f,statusText:p}});return this.shouldThrowOnError||(r=r.catch(s=>{var a,o,l;return{error:{message:`${(a=s==null?void 0:s.name)!==null&&a!==void 0?a:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(o=s==null?void 0:s.stack)!==null&&o!==void 0?o:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),r.then(e,n)}};Tu.default=R7;var D7=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Cu,"__esModule",{value:!0});const $7=D7(Tu);let F7=class extends $7.default{select(e){let n=!1;const i=(e??"*").split("").map(r=>/\s/.test(r)&&!n?"":(r==='"'&&(n=!n),r)).join("");return this.url.searchParams.set("select",i),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:n=!0,nullsFirst:i,foreignTable:r,referencedTable:s=r}={}){const a=s?`${s}.order`:"order",o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:""}${e}.${n?"asc":"desc"}${i===void 0?"":i?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:n,referencedTable:i=n}={}){const r=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,n,{foreignTable:i,referencedTable:r=i}={}){const s=typeof r>"u"?"offset":`${r}.offset`,a=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(s,`${e}`),this.url.searchParams.set(a,`${n-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:n=!1,settings:i=!1,buffers:r=!1,wal:s=!1,format:a="text"}={}){var o;const l=[e?"analyze":null,n?"verbose":null,i?"settings":null,r?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(o=this.headers.Accept)!==null&&o!==void 0?o:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${a}; for="${u}"; options=${l};`,a==="json"?this:this}rollback(){var e;return((e=this.headers.Prefer)!==null&&e!==void 0?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};Cu.default=F7;var B7=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(eo,"__esModule",{value:!0});const N7=B7(Cu);let V7=class extends N7.default{eq(e,n){return this.url.searchParams.append(e,`eq.${n}`),this}neq(e,n){return this.url.searchParams.append(e,`neq.${n}`),this}gt(e,n){return this.url.searchParams.append(e,`gt.${n}`),this}gte(e,n){return this.url.searchParams.append(e,`gte.${n}`),this}lt(e,n){return this.url.searchParams.append(e,`lt.${n}`),this}lte(e,n){return this.url.searchParams.append(e,`lte.${n}`),this}like(e,n){return this.url.searchParams.append(e,`like.${n}`),this}likeAllOf(e,n){return this.url.searchParams.append(e,`like(all).{${n.join(",")}}`),this}likeAnyOf(e,n){return this.url.searchParams.append(e,`like(any).{${n.join(",")}}`),this}ilike(e,n){return this.url.searchParams.append(e,`ilike.${n}`),this}ilikeAllOf(e,n){return this.url.searchParams.append(e,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(e,n){return this.url.searchParams.append(e,`ilike(any).{${n.join(",")}}`),this}is(e,n){return this.url.searchParams.append(e,`is.${n}`),this}in(e,n){const i=Array.from(new Set(n)).map(r=>typeof r=="string"&&new RegExp("[,()]").test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(e,`in.(${i})`),this}contains(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cs.{${n.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(n)}`),this}containedBy(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cd.{${n.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(n)}`),this}rangeGt(e,n){return this.url.searchParams.append(e,`sr.${n}`),this}rangeGte(e,n){return this.url.searchParams.append(e,`nxl.${n}`),this}rangeLt(e,n){return this.url.searchParams.append(e,`sl.${n}`),this}rangeLte(e,n){return this.url.searchParams.append(e,`nxr.${n}`),this}rangeAdjacent(e,n){return this.url.searchParams.append(e,`adj.${n}`),this}overlaps(e,n){return typeof n=="string"?this.url.searchParams.append(e,`ov.${n}`):this.url.searchParams.append(e,`ov.{${n.join(",")}}`),this}textSearch(e,n,{config:i,type:r}={}){let s="";r==="plain"?s="pl":r==="phrase"?s="ph":r==="websearch"&&(s="w");const a=i===void 0?"":`(${i})`;return this.url.searchParams.append(e,`${s}fts${a}.${n}`),this}match(e){return Object.entries(e).forEach(([n,i])=>{this.url.searchParams.append(n,`eq.${i}`)}),this}not(e,n,i){return this.url.searchParams.append(e,`not.${n}.${i}`),this}or(e,{foreignTable:n,referencedTable:i=n}={}){const r=i?`${i}.or`:"or";return this.url.searchParams.append(r,`(${e})`),this}filter(e,n,i){return this.url.searchParams.append(e,`${n}.${i}`),this}};eo.default=V7;var H7=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Pu,"__esModule",{value:!0});const ks=H7(eo);let U7=class{constructor(e,{headers:n={},schema:i,fetch:r}){this.url=e,this.headers=n,this.schema=i,this.fetch=r}select(e,{head:n=!1,count:i}={}){const r=n?"HEAD":"GET";let s=!1;const a=(e??"*").split("").map(o=>/\s/.test(o)&&!s?"":(o==='"'&&(s=!s),o)).join("");return this.url.searchParams.set("select",a),i&&(this.headers.Prefer=`count=${i}`),new ks.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:n,defaultToNull:i=!0}={}){const r="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),i||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(e)){const a=e.reduce((o,l)=>o.concat(Object.keys(l)),[]);if(a.length>0){const o=[...new Set(a)].map(l=>`"${l}"`);this.url.searchParams.set("columns",o.join(","))}}return new ks.default({method:r,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:n,ignoreDuplicates:i=!1,count:r,defaultToNull:s=!0}={}){const a="POST",o=[`resolution=${i?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),s||o.push("missing=default"),this.headers.Prefer=o.join(","),Array.isArray(e)){const l=e.reduce((u,d)=>u.concat(Object.keys(d)),[]);if(l.length>0){const u=[...new Set(l)].map(d=>`"${d}"`);this.url.searchParams.set("columns",u.join(","))}}return new ks.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}update(e,{count:n}={}){const i="PATCH",r=[];return this.headers.Prefer&&r.push(this.headers.Prefer),n&&r.push(`count=${n}`),this.headers.Prefer=r.join(","),new ks.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){const n="DELETE",i=[];return e&&i.push(`count=${e}`),this.headers.Prefer&&i.unshift(this.headers.Prefer),this.headers.Prefer=i.join(","),new ks.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Pu.default=U7;var Mu={},Au={};Object.defineProperty(Au,"__esModule",{value:!0});Au.version=void 0;Au.version="0.0.0-automated";Object.defineProperty(Mu,"__esModule",{value:!0});Mu.DEFAULT_HEADERS=void 0;const W7=Au;Mu.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${W7.version}`};var K5=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Rg,"__esModule",{value:!0});const K7=K5(Pu),G7=K5(eo),Y7=Mu;let X7=class G5{constructor(e,{headers:n={},schema:i,fetch:r}={}){this.url=e,this.headers=Object.assign(Object.assign({},Y7.DEFAULT_HEADERS),n),this.schemaName=i,this.fetch=r}from(e){const n=new URL(`${this.url}/${e}`);return new K7.default(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new G5(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,n={},{head:i=!1,get:r=!1,count:s}={}){let a;const o=new URL(`${this.url}/rpc/${e}`);let l;i||r?(a=i?"HEAD":"GET",Object.entries(n).filter(([d,h])=>h!==void 0).map(([d,h])=>[d,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([d,h])=>{o.searchParams.append(d,h)})):(a="POST",l=n);const u=Object.assign({},this.headers);return s&&(u.Prefer=`count=${s}`),new G7.default({method:a,url:o,headers:u,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};Rg.default=X7;var ss=zt&&zt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(rt,"__esModule",{value:!0});rt.PostgrestError=rt.PostgrestBuilder=rt.PostgrestTransformBuilder=rt.PostgrestFilterBuilder=rt.PostgrestQueryBuilder=rt.PostgrestClient=void 0;const Y5=ss(Rg);rt.PostgrestClient=Y5.default;const X5=ss(Pu);rt.PostgrestQueryBuilder=X5.default;const q5=ss(eo);rt.PostgrestFilterBuilder=q5.default;const J5=ss(Cu);rt.PostgrestTransformBuilder=J5.default;const Q5=ss(Tu);rt.PostgrestBuilder=Q5.default;const Z5=ss(Eu);rt.PostgrestError=Z5.default;var q7=rt.default={PostgrestClient:Y5.default,PostgrestQueryBuilder:X5.default,PostgrestFilterBuilder:q5.default,PostgrestTransformBuilder:J5.default,PostgrestBuilder:Q5.default,PostgrestError:Z5.default};const{PostgrestClient:J7,PostgrestQueryBuilder:GB,PostgrestFilterBuilder:YB,PostgrestTransformBuilder:XB,PostgrestBuilder:qB}=q7,Q7="2.10.7",Z7={"X-Client-Info":`realtime-js/${Q7}`},eC="1.0.0",ek=1e4,tC=1e3;var Rr;(function(t){t[t.connecting=0]="connecting",t[t.open=1]="open",t[t.closing=2]="closing",t[t.closed=3]="closed"})(Rr||(Rr={}));var gt;(function(t){t.closed="closed",t.errored="errored",t.joined="joined",t.joining="joining",t.leaving="leaving"})(gt||(gt={}));var Ht;(function(t){t.close="phx_close",t.error="phx_error",t.join="phx_join",t.reply="phx_reply",t.leave="phx_leave",t.access_token="access_token"})(Ht||(Ht={}));var Bf;(function(t){t.websocket="websocket"})(Bf||(Bf={}));var Oi;(function(t){t.Connecting="connecting",t.Open="open",t.Closing="closing",t.Closed="closed"})(Oi||(Oi={}));class nC{constructor(){this.HEADER_LENGTH=1}decode(e,n){return e.constructor===ArrayBuffer?n(this._binaryDecode(e)):n(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const n=new DataView(e),i=new TextDecoder;return this._decodeBroadcast(e,n,i)}_decodeBroadcast(e,n,i){const r=n.getUint8(1),s=n.getUint8(2);let a=this.HEADER_LENGTH+2;const o=i.decode(e.slice(a,a+r));a=a+r;const l=i.decode(e.slice(a,a+s));a=a+s;const u=JSON.parse(i.decode(e.slice(a,e.byteLength)));return{ref:null,topic:o,event:l,payload:u}}}class tk{constructor(e,n){this.callback=e,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ae;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(ae||(ae={}));const z1=(t,e,n={})=>{var i;const r=(i=n.skipTypes)!==null&&i!==void 0?i:[];return Object.keys(e).reduce((s,a)=>(s[a]=iC(a,t,e,r),s),{})},iC=(t,e,n,i)=>{const r=e.find(o=>o.name===t),s=r==null?void 0:r.type,a=n[t];return s&&!i.includes(s)?nk(s,a):Nf(a)},nk=(t,e)=>{if(t.charAt(0)==="_"){const n=t.slice(1,t.length);return oC(e,n)}switch(t){case ae.bool:return rC(e);case ae.float4:case ae.float8:case ae.int2:case ae.int4:case ae.int8:case ae.numeric:case ae.oid:return sC(e);case ae.json:case ae.jsonb:return aC(e);case ae.timestamp:return lC(e);case ae.abstime:case ae.date:case ae.daterange:case ae.int4range:case ae.int8range:case ae.money:case ae.reltime:case ae.text:case ae.time:case ae.timestamptz:case ae.timetz:case ae.tsrange:case ae.tstzrange:return Nf(e);default:return Nf(e)}},Nf=t=>t,rC=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},sC=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},aC=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){return console.log(`JSON parse error: ${e}`),t}return t},oC=(t,e)=>{if(typeof t!="string")return t;const n=t.length-1,i=t[n];if(t[0]==="{"&&i==="}"){let s;const a=t.slice(1,n);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>nk(e,o))}return t},lC=t=>typeof t=="string"?t.replace(" ","T"):t,ik=t=>{let e=t;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")};class Sd{constructor(e,n,i={},r=ek){this.channel=e,this.event=n,this.payload=i,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,n){var i;return this._hasReceived(e)&&n((i=this.receivedResp)===null||i===void 0?void 0:i.response),this.recHooks.push({status:e,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:n}){this.recHooks.filter(i=>i.status===e).forEach(i=>i.callback(n))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var I1;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(I1||(I1={}));class Qs{constructor(e,n){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const i=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(i.state,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Qs.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=Qs.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel._on(i.diff,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Qs.syncDiff(this.state,r,s,a),o())}),this.onJoin((r,s,a)=>{this.channel._trigger("presence",{event:"join",key:r,currentPresences:s,newPresences:a})}),this.onLeave((r,s,a)=>{this.channel._trigger("presence",{event:"leave",key:r,currentPresences:s,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,n,i,r){const s=this.cloneDeep(e),a=this.transformState(n),o={},l={};return this.map(s,(u,d)=>{a[u]||(l[u]=d)}),this.map(a,(u,d)=>{const h=s[u];if(h){const f=d.map(k=>k.presence_ref),p=h.map(k=>k.presence_ref),m=d.filter(k=>p.indexOf(k.presence_ref)<0),y=h.filter(k=>f.indexOf(k.presence_ref)<0);m.length>0&&(o[u]=m),y.length>0&&(l[u]=y)}else o[u]=d}),this.syncDiff(s,{joins:o,leaves:l},i,r)}static syncDiff(e,n,i,r){const{joins:s,leaves:a}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return i||(i=()=>{}),r||(r=()=>{}),this.map(s,(o,l)=>{var u;const d=(u=e[o])!==null&&u!==void 0?u:[];if(e[o]=this.cloneDeep(l),d.length>0){const h=e[o].map(p=>p.presence_ref),f=d.filter(p=>h.indexOf(p.presence_ref)<0);e[o].unshift(...f)}i(o,d,l)}),this.map(a,(o,l)=>{let u=e[o];if(!u)return;const d=l.map(h=>h.presence_ref);u=u.filter(h=>d.indexOf(h.presence_ref)<0),e[o]=u,r(o,u,l),u.length===0&&delete e[o]}),e}static map(e,n){return Object.getOwnPropertyNames(e).map(i=>n(i,e[i]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((n,i)=>{const r=e[i];return"metas"in r?n[i]=r.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[i]=r,n},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var R1;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(R1||(R1={}));var D1;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(D1||(D1={}));var $1;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})($1||($1={}));class Dg{constructor(e,n={config:{}},i){this.topic=e,this.params=n,this.socket=i,this.bindings={},this.state=gt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new Sd(this,Ht.join,this.params,this.timeout),this.rejoinTimer=new tk(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=gt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=gt.closed,this.socket._remove(this)}),this._onError(r=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,r),this.state=gt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=gt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Ht.reply,{},(r,s)=>{this._trigger(this._replyEventName(s),r)}),this.presence=new Qs(this),this.broadcastEndpointURL=ik(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,n=this.timeout){var i,r;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:a,private:o}}=this.params;this._onError(d=>e&&e("CHANNEL_ERROR",d)),this._onClose(()=>e&&e("CLOSED"));const l={},u={broadcast:s,presence:a,postgres_changes:(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(d=>d.filter))!==null&&r!==void 0?r:[],private:o};this.socket.accessToken&&(l.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:u},l)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:d})=>{var h;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),d===void 0){e&&e("SUBSCRIBED");return}else{const f=this.bindings.postgres_changes,p=(h=f==null?void 0:f.length)!==null&&h!==void 0?h:0,m=[];for(let y=0;y<p;y++){const k=f[y],{filter:{event:x,schema:v,table:b,filter:w}}=k,j=d&&d[y];if(j&&j.event===x&&j.schema===v&&j.table===b&&j.filter===w)m.push(Object.assign(Object.assign({},k),{id:j.id}));else{this.unsubscribe(),e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=m,e&&e("SUBSCRIBED");return}}).receive("error",d=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{e&&e("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(e,n={}){return await this.send({type:"presence",event:"track",payload:e},n.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,n,i){return this._on(e,n,i)}async send(e,n={}){var i,r;if(!this._canPush()&&e.type==="broadcast"){const{event:s,payload:a}=e,o={method:"POST",headers:{Authorization:this.socket.accessToken?`Bearer ${this.socket.accessToken}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const l=await this._fetchWithTimeout(this.broadcastEndpointURL,o,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=l.body)===null||r===void 0?void 0:r.cancel()),l.ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const u=this._push(e.type,e,n.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("error",()=>s("error")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=gt.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Ht.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(i=>{const r=new Sd(this,Ht.leave,{},e);r.receive("ok",()=>{n(),i("ok")}).receive("timeout",()=>{n(),i("timed out")}).receive("error",()=>{i("error")}),r.send(),this._canPush()||r.trigger("ok",{})})}async _fetchWithTimeout(e,n,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},n),{signal:r.signal}));return clearTimeout(s),a}_push(e,n,i=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let r=new Sd(this,e,n,i);return this._canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}_onMessage(e,n,i){return n}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,n,i){var r,s;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:u,join:d}=Ht;if(i&&[o,l,u,d].indexOf(a)>=0&&i!==this._joinRef())return;let f=this._onMessage(a,n,i);if(n&&!f)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(r=this.bindings.postgres_changes)===null||r===void 0||r.filter(p=>{var m,y,k;return((m=p.filter)===null||m===void 0?void 0:m.event)==="*"||((k=(y=p.filter)===null||y===void 0?void 0:y.event)===null||k===void 0?void 0:k.toLocaleLowerCase())===a}).map(p=>p.callback(f,i)):(s=this.bindings[a])===null||s===void 0||s.filter(p=>{var m,y,k,x,v,b;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in p){const w=p.id,j=(m=p.filter)===null||m===void 0?void 0:m.event;return w&&((y=n.ids)===null||y===void 0?void 0:y.includes(w))&&(j==="*"||(j==null?void 0:j.toLocaleLowerCase())===((k=n.data)===null||k===void 0?void 0:k.type.toLocaleLowerCase()))}else{const w=(v=(x=p==null?void 0:p.filter)===null||x===void 0?void 0:x.event)===null||v===void 0?void 0:v.toLocaleLowerCase();return w==="*"||w===((b=n==null?void 0:n.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return p.type.toLocaleLowerCase()===a}).map(p=>{if(typeof f=="object"&&"ids"in f){const m=f.data,{schema:y,table:k,commit_timestamp:x,type:v,errors:b}=m;f=Object.assign(Object.assign({},{schema:y,table:k,commit_timestamp:x,eventType:v,new:{},old:{},errors:b}),this._getPayloadRecords(m))}p.callback(f,i)})}_isClosed(){return this.state===gt.closed}_isJoined(){return this.state===gt.joined}_isJoining(){return this.state===gt.joining}_isLeaving(){return this.state===gt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,n,i){const r=e.toLocaleLowerCase(),s={type:r,filter:n,callback:i};return this.bindings[r]?this.bindings[r].push(s):this.bindings[r]=[s],this}_off(e,n){const i=e.toLocaleLowerCase();return this.bindings[i]=this.bindings[i].filter(r=>{var s;return!(((s=r.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===i&&Dg.isEqual(r.filter,n))}),this}static isEqual(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const i in e)if(e[i]!==n[i])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Ht.close,{},e)}_onError(e){this._on(Ht.error,{},n=>e(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=gt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const n={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(n.new=z1(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(n.old=z1(e.columns,e.old_record)),n}}const cC=()=>{},uC=typeof WebSocket<"u",dC=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class hC{constructor(e,n){var i;this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=Z7,this.params={},this.timeout=ek,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=cC,this.conn=null,this.sendBuffer=[],this.serializer=new nC,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let a;return s?a=s:typeof fetch>"u"?a=(...o)=>Xr(async()=>{const{default:l}=await Promise.resolve().then(()=>rs);return{default:l}},void 0).then(({default:l})=>l(...o)):a=fetch,(...o)=>a(...o)},this.endPoint=`${e}/${Bf.websocket}`,this.httpEndpoint=ik(e),n!=null&&n.transport?this.transport=n.transport:this.transport=null,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const r=(i=n==null?void 0:n.params)===null||i===void 0?void 0:i.apikey;if(r&&(this.accessToken=r,this.apiKey=r),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,a)=>a(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new tk(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch),n!=null&&n.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(n==null?void 0:n.worker)||!1,this.workerUrl=n==null?void 0:n.workerUrl}}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(uC){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new fC(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),Xr(async()=>{const{default:e}=await import("./browser-C03oVm1l.js").then(n=>n.b);return{default:e}},[]).then(({default:e})=>{this.conn=new e(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(e,n){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){const n=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const e=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),e}log(e,n,i){this.logger(e,n,i)}connectionState(){switch(this.conn&&this.conn.readyState){case Rr.connecting:return Oi.Connecting;case Rr.open:return Oi.Open;case Rr.closing:return Oi.Closing;default:return Oi.Closed}}isConnected(){return this.connectionState()===Oi.Open}channel(e,n={config:{}}){const i=new Dg(`realtime:${e}`,n,this);return this.channels.push(i),i}push(e){const{topic:n,event:i,payload:r,ref:s}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${n} ${i} (${s})`,r),this.isConnected()?a():this.sendBuffer.push(a)}setAuth(e){this.accessToken=e,this.channels.forEach(n=>{e&&n.updateJoinPayload({access_token:e}),n.joinedOnce&&n._isJoined()&&n._push(Ht.access_token,{access_token:e})})}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let n=this.channels.find(i=>i.topic===e&&(i._isJoined()||i._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${e}"`),n.unsubscribe())}_remove(e){this.channels=this.channels.filter(n=>n._joinRef()!==e._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:eC}))}_onConnMessage(e){this.decode(e.data,n=>{let{topic:i,event:r,payload:s,ref:a}=n;(a&&a===this.pendingHeartbeatRef||r===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${i} ${r} ${a&&"("+a+")"||""}`,s),this.channels.filter(o=>o._isMember(i)).forEach(o=>o._trigger(r,s,a)),this.stateChangeCallbacks.message.forEach(o=>o(n))})}async _onConnOpen(){if(this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this._sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(e=>e())}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(e))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger(Ht.error))}_appendParams(e,n){if(Object.keys(n).length===0)return e;const i=e.match(/\?/)?"&":"?",r=new URLSearchParams(n);return`${e}${i}${r}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(e=this.conn)===null||e===void 0||e.close(tC,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_workerObjectUrl(e){let n;if(e)n=e;else{const i=new Blob([dC],{type:"application/javascript"});n=URL.createObjectURL(i)}return n}}class fC{constructor(e,n,i){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=Rr.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=i.close}}class $g extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function Ae(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}class pC extends $g{constructor(e,n){super(e),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Vf extends $g{constructor(e,n){super(e),this.name="StorageUnknownError",this.originalError=n}}var gC=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};const rk=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Xr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)},mC=()=>gC(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Xr(()=>Promise.resolve().then(()=>rs),void 0)).Response:Response}),Hf=t=>{if(Array.isArray(t))return t.map(n=>Hf(n));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([n,i])=>{const r=n.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Hf(i)}),e};var tr=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};const Pd=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),yC=(t,e,n)=>tr(void 0,void 0,void 0,function*(){const i=yield mC();t instanceof i&&!(n!=null&&n.noResolveJson)?t.json().then(r=>{e(new pC(Pd(r),t.status||500))}).catch(r=>{e(new Vf(Pd(r),r))}):e(new Vf(Pd(t),t))}),vC=(t,e,n,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i&&(r.body=JSON.stringify(i)),Object.assign(Object.assign({},r),n))};function to(t,e,n,i,r,s){return tr(this,void 0,void 0,function*(){return new Promise((a,o)=>{t(n,vC(e,i,r,s)).then(l=>{if(!l.ok)throw l;return i!=null&&i.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>yC(l,o,i))})})}function Dc(t,e,n,i){return tr(this,void 0,void 0,function*(){return to(t,"GET",e,n,i)})}function Vn(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return to(t,"POST",e,i,r,n)})}function xC(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return to(t,"PUT",e,i,r,n)})}function bC(t,e,n,i){return tr(this,void 0,void 0,function*(){return to(t,"HEAD",e,Object.assign(Object.assign({},n),{noResolveJson:!0}),i)})}function sk(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return to(t,"DELETE",e,i,r,n)})}var tt=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};const kC={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},F1={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class wC{constructor(e,n={},i,r){this.url=e,this.headers=n,this.bucketId=i,this.fetch=rk(r)}uploadOrUpdate(e,n,i,r){return tt(this,void 0,void 0,function*(){try{let s;const a=Object.assign(Object.assign({},F1),r);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&i instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",i)):typeof FormData<"u"&&i instanceof FormData?(s=i,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l))):(s=i,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),r!=null&&r.headers&&(o=Object.assign(Object.assign({},o),r.headers));const u=this._removeEmptyFolders(n),d=this._getFinalPath(u),h=yield this.fetch(`${this.url}/object/${d}`,Object.assign({method:e,body:s,headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{})),f=yield h.json();return h.ok?{data:{path:u,id:f.Id,fullPath:f.Key},error:null}:{data:null,error:f}}catch(s){if(Ae(s))return{data:null,error:s};throw s}})}upload(e,n,i){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,n,i)})}uploadToSignedUrl(e,n,i,r){return tt(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),a=this._getFinalPath(s),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:F1.upsert},r),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&i instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",i)):typeof FormData<"u"&&i instanceof FormData?(l=i,l.append("cacheControl",u.cacheControl)):(l=i,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType);const h=yield this.fetch(o.toString(),{method:"PUT",body:l,headers:d}),f=yield h.json();return h.ok?{data:{path:s,fullPath:f.Key},error:null}:{data:null,error:f}}catch(l){if(Ae(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,n){return tt(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e);const r=Object.assign({},this.headers);n!=null&&n.upsert&&(r["x-upsert"]="true");const s=yield Vn(this.fetch,`${this.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(this.url+s.url),o=a.searchParams.get("token");if(!o)throw new $g("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(i){if(Ae(i))return{data:null,error:i};throw i}})}update(e,n,i){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,n,i)})}move(e,n,i){return tt(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:i==null?void 0:i.destinationBucket},{headers:this.headers}),error:null}}catch(r){if(Ae(r))return{data:null,error:r};throw r}})}copy(e,n,i){return tt(this,void 0,void 0,function*(){try{return{data:{path:(yield Vn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:i==null?void 0:i.destinationBucket},{headers:this.headers})).Key},error:null}}catch(r){if(Ae(r))return{data:null,error:r};throw r}})}createSignedUrl(e,n,i){return tt(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e),s=yield Vn(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:n},i!=null&&i.transform?{transform:i.transform}:{}),{headers:this.headers});const a=i!=null&&i.download?`&download=${i.download===!0?"":i.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${a}`)},{data:s,error:null}}catch(r){if(Ae(r))return{data:null,error:r};throw r}})}createSignedUrls(e,n,i){return tt(this,void 0,void 0,function*(){try{const r=yield Vn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:e},{headers:this.headers}),s=i!=null&&i.download?`&download=${i.download===!0?"":i.download}`:"";return{data:r.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${s}`):null})),error:null}}catch(r){if(Ae(r))return{data:null,error:r};throw r}})}download(e,n){return tt(this,void 0,void 0,function*(){const r=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),a=s?`?${s}`:"";try{const o=this._getFinalPath(e);return{data:yield(yield Dc(this.fetch,`${this.url}/${r}/${o}${a}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(Ae(o))return{data:null,error:o};throw o}})}info(e){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{const i=yield Dc(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:Hf(i),error:null}}catch(i){if(Ae(i))return{data:null,error:i};throw i}})}exists(e){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{return yield bC(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(i){if(Ae(i)&&i instanceof Vf){const r=i.originalError;if([400,404].includes(r==null?void 0:r.status))return{data:!1,error:i}}throw i}})}getPublicUrl(e,n){const i=this._getFinalPath(e),r=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&r.push(s);const o=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&r.push(l);let u=r.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${i}${u}`)}}}remove(e){return tt(this,void 0,void 0,function*(){try{return{data:yield sk(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(n){if(Ae(n))return{data:null,error:n};throw n}})}list(e,n,i){return tt(this,void 0,void 0,function*(){try{const r=Object.assign(Object.assign(Object.assign({},kC),n),{prefix:e||""});return{data:yield Vn(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},i),error:null}}catch(r){if(Ae(r))return{data:null,error:r};throw r}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const n=[];return e.width&&n.push(`width=${e.width}`),e.height&&n.push(`height=${e.height}`),e.resize&&n.push(`resize=${e.resize}`),e.format&&n.push(`format=${e.format}`),e.quality&&n.push(`quality=${e.quality}`),n.join("&")}}const jC="2.7.1",_C={"X-Client-Info":`storage-js/${jC}`};var or=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};class SC{constructor(e,n={},i){this.url=e,this.headers=Object.assign(Object.assign({},_C),n),this.fetch=rk(i)}listBuckets(){return or(this,void 0,void 0,function*(){try{return{data:yield Dc(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(Ae(e))return{data:null,error:e};throw e}})}getBucket(e){return or(this,void 0,void 0,function*(){try{return{data:yield Dc(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(n){if(Ae(n))return{data:null,error:n};throw n}})}createBucket(e,n={public:!1}){return or(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/bucket`,{id:e,name:e,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(Ae(i))return{data:null,error:i};throw i}})}updateBucket(e,n){return or(this,void 0,void 0,function*(){try{return{data:yield xC(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(Ae(i))return{data:null,error:i};throw i}})}emptyBucket(e){return or(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Ae(n))return{data:null,error:n};throw n}})}deleteBucket(e){return or(this,void 0,void 0,function*(){try{return{data:yield sk(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(n){if(Ae(n))return{data:null,error:n};throw n}})}}class PC extends SC{constructor(e,n={},i){super(e,n,i)}from(e){return new wC(this.url,this.headers,e,this.fetch)}}const CC="2.46.1";let Os="";typeof Deno<"u"?Os="deno":typeof document<"u"?Os="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Os="react-native":Os="node";const TC={"X-Client-Info":`supabase-js-${Os}/${CC}`},EC={headers:TC},MC={schema:"public"},AC={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},LC={};var OC=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};const zC=t=>{let e;return t?e=t:typeof fetch>"u"?e=H5:e=fetch,(...n)=>e(...n)},IC=()=>typeof Headers>"u"?U5:Headers,RC=(t,e,n)=>{const i=zC(n),r=IC();return(s,a)=>OC(void 0,void 0,void 0,function*(){var o;const l=(o=yield e())!==null&&o!==void 0?o:t;let u=new r(a==null?void 0:a.headers);return u.has("apikey")||u.set("apikey",t),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),i(s,Object.assign(Object.assign({},a),{headers:u}))})};var DC=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};function $C(t){return t.replace(/\/$/,"")}function FC(t,e){const{db:n,auth:i,realtime:r,global:s}=t,{db:a,auth:o,realtime:l,global:u}=e,d={db:Object.assign(Object.assign({},a),n),auth:Object.assign(Object.assign({},o),i),realtime:Object.assign(Object.assign({},l),r),global:Object.assign(Object.assign({},u),s),accessToken:()=>DC(this,void 0,void 0,function*(){return""})};return t.accessToken?d.accessToken=t.accessToken:delete d.accessToken,d}const ak="2.65.1",BC="http://localhost:9999",NC="supabase.auth.token",VC={"X-Client-Info":`gotrue-js/${ak}`},B1=10,Uf="X-Supabase-Api-Version",ok={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}};function HC(t){return Math.round(Date.now()/1e3)+t}function UC(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t=="x"?e:e&3|8).toString(16)})}const Bt=()=>typeof document<"u",ki={tested:!1,writable:!1},Zs=()=>{if(!Bt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ki.tested)return ki.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),ki.tested=!0,ki.writable=!0}catch{ki.tested=!0,ki.writable=!1}return ki.writable};function Cd(t){const e={},n=new URL(t);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return n.searchParams.forEach((i,r)=>{e[r]=i}),e}const lk=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Xr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)},WC=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",ck=async(t,e,n)=>{await t.setItem(e,JSON.stringify(n))},Eo=async(t,e)=>{const n=await t.getItem(e);if(!n)return null;try{return JSON.parse(n)}catch{return n}},Mo=async(t,e)=>{await t.removeItem(e)};function KC(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",i,r,s,a,o,l,u,d=0;for(t=t.replace("-","+").replace("_","/");d<t.length;)a=e.indexOf(t.charAt(d++)),o=e.indexOf(t.charAt(d++)),l=e.indexOf(t.charAt(d++)),u=e.indexOf(t.charAt(d++)),i=a<<2|o>>4,r=(o&15)<<4|l>>2,s=(l&3)<<6|u,n=n+String.fromCharCode(i),l!=64&&r!=0&&(n=n+String.fromCharCode(r)),u!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class Lu{constructor(){this.promise=new Lu.promiseConstructor((e,n)=>{this.resolve=e,this.reject=n})}}Lu.promiseConstructor=Promise;function N1(t){const e=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=t.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!e.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const i=n[1];return JSON.parse(KC(i))}async function GC(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function YC(t,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await t(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function XC(t){return("0"+t.toString(16)).substr(-2)}function qC(){const e=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=n.length;let r="";for(let s=0;s<56;s++)r+=n.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,XC).join("")}async function JC(t){const n=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",n),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}function QC(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ZC(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const n=await JC(t);return QC(n)}async function lr(t,e,n=!1){const i=qC();let r=i;n&&(r+="/PASSWORD_RECOVERY"),await ck(t,`${e}-code-verifier`,r);const s=await ZC(i);return[s,i===s?"plain":"s256"]}const eT=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function tT(t){const e=t.headers.get(Uf);if(!e||!e.match(eT))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}class Fg extends Error{constructor(e,n,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=i}}function U(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class nT extends Fg{constructor(e,n,i){super(e,n,i),this.name="AuthApiError",this.status=n,this.code=i}}function iT(t){return U(t)&&t.name==="AuthApiError"}class uk extends Fg{constructor(e,n){super(e),this.name="AuthUnknownError",this.originalError=n}}class nr extends Fg{constructor(e,n,i,r){super(e,i,r),this.name=n,this.status=i}}class Rn extends nr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function rT(t){return U(t)&&t.name==="AuthSessionMissingError"}class Td extends nr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Ao extends nr{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Lo extends nr{constructor(e,n=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class V1 extends nr{constructor(e,n=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Wf extends nr{constructor(e,n){super(e,"AuthRetryableFetchError",n,void 0)}}function Ed(t){return U(t)&&t.name==="AuthRetryableFetchError"}class H1 extends nr{constructor(e,n,i){super(e,"AuthWeakPasswordError",n,"weak_password"),this.reasons=i}}var sT=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const Mi=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),aT=[502,503,504];async function U1(t){var e;if(!WC(t))throw new Wf(Mi(t),0);if(aT.includes(t.status))throw new Wf(Mi(t),t.status);let n;try{n=await t.json()}catch(s){throw new uk(Mi(s),s)}let i;const r=tT(t);if(r&&r.getTime()>=ok["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?i=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(i=n.error_code),i){if(i==="weak_password")throw new H1(Mi(n),t.status,((e=n.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new Rn}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new H1(Mi(n),t.status,n.weak_password.reasons);throw new nT(Mi(n),t.status||500,i)}const oT=(t,e,n,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),n))};async function G(t,e,n,i){var r;const s=Object.assign({},i==null?void 0:i.headers);s[Uf]||(s[Uf]=ok["2024-01-01"].name),i!=null&&i.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await lT(t,e,n+o,{headers:s,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function lT(t,e,n,i,r,s){const a=oT(e,i,r,s);let o;try{o=await t(n,Object.assign({},a))}catch(l){throw console.error(l),new Wf(Mi(l),0)}if(o.ok||await U1(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await U1(l)}}function Dn(t){var e;let n=null;hT(t)&&(n=Object.assign({},t),t.expires_at||(n.expires_at=HC(t.expires_in)));const i=(e=t.user)!==null&&e!==void 0?e:t;return{data:{session:n,user:i},error:null}}function W1(t){const e=Dn(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((n,i)=>n&&typeof i=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Wn(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function cT(t){return{data:t,error:null}}function uT(t){const{action_link:e,email_otp:n,hashed_token:i,redirect_to:r,verification_type:s}=t,a=sT(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:n,hashed_token:i,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function dT(t){return t}function hT(t){return t.access_token&&t.refresh_token&&t.expires_in}var fT=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};class pT{constructor({url:e="",headers:n={},fetch:i}){this.url=e,this.headers=n,this.fetch=lk(i),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,n="global"){try{return await G(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(U(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,n={}){try{return await G(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:n}=e,i=fT(e,["options"]),r=Object.assign(Object.assign({},i),n);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await G(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:uT,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(U(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(e){try{return await G(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Wn})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async listUsers(e){var n,i,r,s,a,o,l;try{const u={nextPage:null,lastPage:0,total:0},d=await G(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(n=e==null?void 0:e.page)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:dT});if(d.error)throw d.error;const h=await d.json(),f=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(m=>{const y=parseInt(m.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(m.split(";")[1].split("=")[1]);u[`${k}Page`]=y}),u.total=parseInt(f)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(U(u))return{data:{users:[]},error:u};throw u}}async getUserById(e){try{return await G(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Wn})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async updateUserById(e,n){try{return await G(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:n,headers:this.headers,xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,n=!1){try{return await G(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:n},xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){try{const{data:n,error:i}=await G(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:n,error:i}}catch(n){if(U(n))return{data:null,error:n};throw n}}async _deleteFactor(e){try{return{data:await G(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}}const gT={getItem:t=>Zs()?globalThis.localStorage.getItem(t):null,setItem:(t,e)=>{Zs()&&globalThis.localStorage.setItem(t,e)},removeItem:t=>{Zs()&&globalThis.localStorage.removeItem(t)}};function K1(t={}){return{getItem:e=>t[e]||null,setItem:(e,n)=>{t[e]=n},removeItem:e=>{delete t[e]}}}function mT(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const cr={debug:!!(globalThis&&Zs()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class dk extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class yT extends dk{}async function vT(t,e,n){cr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",t,e);const i=new globalThis.AbortController;return e>0&&setTimeout(()=>{i.abort(),cr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",t)},e),await globalThis.navigator.locks.request(t,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},async r=>{if(r){cr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",t,r.name);try{return await n()}finally{cr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",t,r.name)}}else{if(e===0)throw cr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",t),new yT(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);if(cr.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}})}mT();const xT={url:BC,storageKey:NC,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:VC,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},ws=30*1e3,G1=3;async function Y1(t,e,n){return await n()}class Aa{constructor(e){var n,i;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Aa.nextInstanceID,Aa.nextInstanceID+=1,this.instanceID>0&&Bt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},xT),e);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new pT({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=lk(r.fetch),this.lock=r.lock||Y1,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,r.lock?this.lock=r.lock:Bt()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=vT:this.lock=Y1,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:Zs()?this.storage=gT:(this.memoryStorage={},this.storage=K1(this.memoryStorage)):(this.memoryStorage={},this.storage=K1(this.memoryStorage)),Bt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),await this._notifyAllSubscribers(s.data.event,s.data.session,!1)})}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${ak}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const e=Bt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",e),e||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:i}=await this._getSessionFromURL(e);if(i)return this._debug("#_initialize()","error detecting session from URL",i),(i==null?void 0:i.code)==="identity_already_exists"?{error:i}:(await this._removeSession(),{error:i});const{session:r,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",r,"redirect type",s),await this._saveSession(r),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",r):await this._notifyAllSubscribers("SIGNED_IN",r)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return U(e)?{error:e}:{error:new uk("Unexpected error during initialization",e)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var n,i,r;try{const s=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:Dn}),{data:a,error:o}=s;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,u=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signUp(e){var n,i,r;try{let s;if("email"in e){const{email:d,password:h,options:f}=e;let p=null,m=null;this.flowType==="pkce"&&([p,m]=await lr(this.storage,this.storageKey)),s=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f==null?void 0:f.emailRedirectTo,body:{email:d,password:h,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:p,code_challenge_method:m},xform:Dn})}else if("phone"in e){const{phone:d,password:h,options:f}=e;s=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(i=f==null?void 0:f.data)!==null&&i!==void 0?i:{},channel:(r=f==null?void 0:f.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Dn})}else throw new Ao("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,u=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(e){try{let n;if("email"in e){const{email:s,password:a,options:o}=e;n=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:W1})}else if("phone"in e){const{phone:s,password:a,options:o}=e;n=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:W1})}else throw new Ao("You must provide either an email or phone number and a password");const{data:i,error:r}=n;return r?{data:{user:null,session:null},error:r}:!i||!i.session||!i.user?{data:{user:null,session:null},error:new Td}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(e){var n,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async _exchangeCodeForSession(e){const n=await Eo(this.storage,`${this.storageKey}-code-verifier`),[i,r]=(n??"").split("/");try{const{data:s,error:a}=await G(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:Dn});if(await Mo(this.storage,`${this.storageKey}-code-verifier`),a)throw a;return!s||!s.session||!s.user?{data:{user:null,session:null,redirectType:null},error:new Td}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(U(s))return{data:{user:null,session:null,redirectType:null},error:s};throw s}}async signInWithIdToken(e){try{const{options:n,provider:i,token:r,access_token:s,nonce:a}=e,o=await G(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:Dn}),{data:l,error:u}=o;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new Td}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(e){var n,i,r,s,a;try{if("email"in e){const{email:o,options:l}=e;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await lr(this.storage,this.storageKey));const{error:h}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in e){const{phone:o,options:l}=e,{data:u,error:d}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:d}}throw new Ao("You must provide either an email or phone number.")}catch(o){if(U(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(e){var n,i;try{let r,s;"options"in e&&(r=(n=e.options)===null||n===void 0?void 0:n.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await G(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:Dn});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,u=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithSSO(e){var n,i,r;try{let s=null,a=null;return this.flowType==="pkce"&&([s,a]=await lr(this.storage,this.storageKey)),await G(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(n=e.options)===null||n===void 0?void 0:n.redirectTo)!==null&&i!==void 0?i:void 0}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:a}),headers:this.headers,xform:cT})}catch(s){if(U(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:n},error:i}=e;if(i)throw i;if(!n)throw new Rn;const{error:r}=await G(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:r}})}catch(e){if(U(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const n=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:s}=e,{error:a}=await G(this.fetch,"POST",n,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in e){const{phone:i,type:r,options:s}=e,{data:a,error:o}=await G(this.fetch,"POST",n,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o}}throw new Ao("You must provide either an email or phone number and a type")}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(e,n){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await n()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=n();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await e(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const n=await Eo(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?e=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.storage.isServer){let a=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,u,d)=>(!a&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,d))})}return{data:{session:e},error:null}}const{session:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{session:null},error:s}:{data:{session:r},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Wn}):await this._useSession(async n=>{var i,r,s;const{data:a,error:o}=n;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Rn}:await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:Wn})})}catch(n){if(U(n))return rT(n)&&(await this._removeSession(),await Mo(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(e,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,n))}async _updateUser(e,n={}){try{return await this._useSession(async i=>{const{data:r,error:s}=i;if(s)throw s;if(!r.session)throw new Rn;const a=r.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await lr(this.storage,this.storageKey));const{data:u,error:d}=await G(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Wn});if(d)throw d;return a.user=u.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}_decodeJWT(e){return N1(e)}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Rn;const n=Date.now()/1e3;let i=n,r=!0,s=null;const a=N1(e.access_token);if(a.exp&&(i=a.exp,r=i<=n),r){const{session:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-n,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(U(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async n=>{var i;if(!e){const{data:a,error:o}=n;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new Rn;const{session:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{user:null,session:null},error:s}:r?{data:{user:r.user,session:r},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(e){try{if(!Bt())throw new Lo("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Lo("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!e)throw new V1("Not a valid PKCE flow url.");const n=Cd(window.location.href);if(e){if(!n.code)throw new V1("No code detected.");const{data:v,error:b}=await this._exchangeCodeForSession(n.code);if(b)throw b;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:v.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new Lo(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:i,provider_refresh_token:r,access_token:s,refresh_token:a,expires_in:o,expires_at:l,token_type:u}=n;if(!s||!o||!a||!u)throw new Lo("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(o);let f=d+h;l&&(f=parseInt(l));const p=f-d;p*1e3<=ws&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`);const m=f-h;d-m>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",m,f,d):d-m<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",m,f,d);const{data:y,error:k}=await this._getUser(s);if(k)throw k;const x={provider_token:i,provider_refresh_token:r,access_token:s,expires_in:h,expires_at:f,refresh_token:a,token_type:u,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:x,redirectType:n.type},error:null}}catch(n){if(U(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const e=Cd(window.location.href);return!!(Bt()&&(e.access_token||e.error_description))}async _isPKCEFlow(){const e=Cd(window.location.href),n=await Eo(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&n)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async n=>{var i;const{data:r,error:s}=n;if(s)return{error:s};const a=(i=r.session)===null||i===void 0?void 0:i.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(iT(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return e!=="others"&&(await this._removeSession(),await Mo(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const n=UC(),i={id:n,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,i),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async n=>{var i,r;try{const{data:{session:s},error:a}=n;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}})}async resetPasswordForEmail(e,n={}){let i=null,r=null;this.flowType==="pkce"&&([i,r]=await lr(this.storage,this.storageKey,!0));try{return await G(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(U(s))return{data:null,error:s};throw s}}async getUserIdentities(){var e;try{const{data:n,error:i}=await this.getUser();if(i)throw i;return{data:{identities:(e=n.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}async linkIdentity(e){var n;try{const{data:i,error:r}=await this._useSession(async s=>{var a,o,l,u,d;const{data:h,error:f}=s;if(f)throw f;const p=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await G(this.fetch,"GET",p,{headers:this.headers,jwt:(d=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(r)throw r;return Bt()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),{data:{provider:e.provider,url:i==null?void 0:i.url},error:null}}catch(i){if(U(i))return{data:{provider:e.provider,url:null},error:i};throw i}}async unlinkIdentity(e){try{return await this._useSession(async n=>{var i,r;const{data:s,error:a}=n;if(a)throw a;return await G(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _refreshAccessToken(e){const n=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(n,"begin");try{const i=Date.now();return await YC(async r=>(r>0&&await GC(200*Math.pow(2,r-1)),this._debug(n,"refreshing attempt",r),await G(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Dn})),(r,s)=>{const a=200*Math.pow(2,r);return s&&Ed(s)&&Date.now()+a-i<ws})}catch(i){if(this._debug(n,"error",i),U(i))return{data:{session:null,user:null},error:i};throw i}finally{this._debug(n,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,n){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",n,"url",i),Bt()&&!n.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await Eo(this.storage,this.storageKey);if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const r=Math.round(Date.now()/1e3),s=((e=i.expires_at)!==null&&e!==void 0?e:1/0)<r+B1;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${B1}s`),s){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(console.error(a),Ed(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var n,i;if(!e)throw new Rn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,"begin");try{this.refreshingDeferred=new Lu;const{data:s,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!s.session)throw new Rn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const o={session:s.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(s){if(this._debug(r,"error",s),U(s)){const a={session:null,error:s};return Ed(s)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,n,i=!0){const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",n,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:n});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,n)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await ck(this.storage,this.storageKey,e)}async _removeSession(){this._debug("#_removeSession()"),await Mo(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Bt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ws);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async n=>{const{data:{session:i}}=n;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/ws);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${ws}ms, refresh threshold is ${G1} ticks`),r<=G1&&await this._callRefreshToken(i.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof dk)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Bt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const n=`#_onVisibilityChanged(${e})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,n,i){const r=[`provider=${encodeURIComponent(n)}`];if(i!=null&&i.redirectTo&&r.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i!=null&&i.scopes&&r.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[s,a]=await lr(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(i!=null&&i.queryParams){const s=new URLSearchParams(i.queryParams);r.push(s.toString())}return i!=null&&i.skipBrowserRedirect&&r.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;return s?{data:null,error:s}:await G(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _enroll(e){try{return await this._useSession(async n=>{var i,r;const{data:s,error:a}=n;if(a)return{data:null,error:a};const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:u}=await G(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s==null?void 0:s.session)===null||i===void 0?void 0:i.access_token});return u?{data:null,error:u}:(e.factorType==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;if(s)return{data:null,error:s};const{data:a,error:o}=await G(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:o})})}catch(n){if(U(n))return{data:null,error:n};throw n}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;return s?{data:null,error:s}:await G(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(n){if(U(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(e){const{data:n,error:i}=await this._challenge({factorId:e.factorId});return i?{data:null,error:i}:await this._verify({factorId:e.factorId,challengeId:n.id,code:e.code})}async _listFactors(){const{data:{user:e},error:n}=await this.getUser();if(n)return{data:null,error:n};const i=(e==null?void 0:e.factors)||[],r=i.filter(a=>a.factor_type==="totp"&&a.status==="verified"),s=i.filter(a=>a.factor_type==="phone"&&a.status==="verified");return{data:{all:i,totp:r,phone:s},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var n,i;const{data:{session:r},error:s}=e;if(s)return{data:null,error:s};if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const a=this._decodeJWT(r.access_token);let o=null;a.aal&&(o=a.aal);let l=o;((i=(n=r.user.factors)===null||n===void 0?void 0:n.filter(h=>h.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(l="aal2");const d=a.amr||[];return{data:{currentLevel:o,nextLevel:l,currentAuthenticationMethods:d},error:null}}))}}Aa.nextInstanceID=0;const bT=Aa;class kT extends bT{constructor(e){super(e)}}var wT=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{u(i.next(d))}catch(h){a(h)}}function l(d){try{u(i.throw(d))}catch(h){a(h)}}function u(d){d.done?s(d.value):r(d.value).then(o,l)}u((i=i.apply(t,e||[])).next())})};class jT{constructor(e,n,i){var r,s,a;if(this.supabaseUrl=e,this.supabaseKey=n,!e)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const o=$C(e);this.realtimeUrl=`${o}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${o}/auth/v1`,this.storageUrl=`${o}/storage/v1`,this.functionsUrl=`${o}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,u={db:MC,realtime:LC,auth:Object.assign(Object.assign({},AC),{storageKey:l}),global:EC},d=FC(i??{},u);this.storageKey=(r=d.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(s=d.global.headers)!==null&&s!==void 0?s:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(h,f)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=d.auth)!==null&&a!==void 0?a:{},this.headers,d.global.fetch),this.fetch=RC(n,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},d.realtime)),this.rest=new J7(`${o}/rest/v1`,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),d.accessToken||this._listenForAuthEvents()}get functions(){return new C7(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new PC(this.storageUrl,this.headers,this.fetch)}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,n={},i={}){return this.rest.rpc(e,n,i)}channel(e,n={config:{}}){return this.realtime.channel(e,n)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,n;return wT(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:i}=yield this.auth.getSession();return(n=(e=i.session)===null||e===void 0?void 0:e.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:n,detectSessionInUrl:i,storage:r,storageKey:s,flowType:a,lock:o,debug:l},u,d){var h;const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new kT({url:this.authUrl,headers:Object.assign(Object.assign({},f),u),storageKey:s,autoRefreshToken:e,persistSession:n,detectSessionInUrl:i,storage:r,flowType:a,lock:o,debug:l,fetch:d,hasCustomAuthorizationHeader:(h="Authorization"in this.headers)!==null&&h!==void 0?h:!1})}_initRealtimeClient(e){return new hC(this.realtimeUrl,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,i)=>{this._handleTokenChanged(n,"CLIENT",i==null?void 0:i.access_token)})}_handleTokenChanged(e,n,i){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==i?(this.realtime.setAuth(i??null),this.changedAccessToken=i):e==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const _T=(t,e,n)=>new jT(t,e,n),ST="https://nrxloisjnqevtjnswsja.supabase.co",PT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGxvaXNqbnFldnRqbnN3c2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjgwODcsImV4cCI6MjA0NzUwNDA4N30.g1QePzTw2W43Pm88J-XBaTkHbQGut64XqePRRxQb9DM",st=_T(ST,PT),hk=_.createContext();function CT({children:t}){const[e,n]=_.useState(!1),[i,r]=_.useState(!1),[s,a]=_.useState(null),[o,l]=_.useState(!1),u=J();_.useEffect(()=>{const p=localStorage.getItem("user");if(p){const m=JSON.parse(p);a(m),n(!0)}},[]);const f={isLoggedIn:e,setIsLoggedIn:n,showLogin:i,setShowLogin:r,user:s,setUser:a,loading:o,handleLogin:async(p,m)=>{try{l(!0),console.log("Login attempt with:",{username:p,password:m});const{data:y,error:k}=await st.from("akun").select("*").eq("usernameAkun",p).eq("passwordAkun",m);if(console.log("Query result:",y),k)return console.error("Query error:",k),{success:!1,error:"Terjadi kesalahan saat login"};if(y&&y.length>0){const x={id:y[0].id,username:y[0].usernameAkun,role:y[0].jenisAkun};return console.log("Setting user info:",x),localStorage.setItem("user",JSON.stringify(x)),a(x),n(!0),r(!1),y[0].jenisAkun==="admin"?u("/admin"):y[0].jenisAkun==="moderator"?u("/moderator/dashboard"):u("/user"),{success:!0}}return{success:!1,error:"Username atau password salah"}}catch(y){return console.error("Login error:",y),{success:!1,error:"Terjadi kesalahan saat login"}}finally{l(!1)}},handleLogout:()=>{localStorage.removeItem("user"),a(null),n(!1),u("/")}};return c.jsx(hk.Provider,{value:f,children:t})}function Mn(){return _.useContext(hk)}const TT=g.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  background-color: ${t=>t.scrolled?"rgba(26, 26, 46, 0.8)":"transparent"};
  backdrop-filter: ${t=>t.scrolled?"blur(15px)":"none"};
`,ET=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`,MT=g(pu)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
`,AT=g.img`
  height: 50px;
  width: auto;
`,LT=g.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`,OT=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,X1=g.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,qt=g(pu)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(to right, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,q1=g(T.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 30px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 135, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 200px;
  }
`,zT=g.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,IT=g.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${t=>t.isOpen?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;g(T.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;function RT(){const[t,e]=_.useState(!1),[n,i]=_.useState(!1),{isLoggedIn:r,handleLogout:s,setShowLogin:a}=Mn();_.useEffect(()=>{const l=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const u=document.getElementById(l);if(u){const f=u.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:f,behavior:"smooth"})}};return c.jsx(TT,{scrolled:t,children:c.jsxs(ET,{children:[c.jsxs(MT,{to:"/",onClick:()=>o("beranda"),children:[c.jsx(AT,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"SMKN 1 Bulan Logo"}),c.jsx(LT,{children:"SMKN 1 Bulan"})]}),c.jsx(zT,{onClick:()=>i(!n),children:n?"✕":"☰"}),c.jsxs(OT,{children:[c.jsxs(X1,{children:[c.jsx(qt,{to:"/",onClick:()=>o("beranda"),children:"Beranda"}),c.jsx(qt,{to:"/",onClick:()=>o("profil"),children:"Profil"}),c.jsx(qt,{to:"/",onClick:()=>o("berita"),children:"Berita"}),c.jsx(qt,{to:"/",onClick:()=>o("jurusan"),children:"Program"}),c.jsx(qt,{to:"/",onClick:()=>o("fasilitas"),children:"Fasilitas"})]}),c.jsx(q1,{onClick:()=>{r?s():a(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]}),c.jsxs(IT,{isOpen:n,children:[c.jsxs(X1,{children:[c.jsx(qt,{to:"/",onClick:()=>{o("beranda"),i(!1)},children:"Beranda"}),c.jsx(qt,{to:"/",onClick:()=>{o("profil"),i(!1)},children:"Profil"}),c.jsx(qt,{to:"/",onClick:()=>{o("berita"),i(!1)},children:"Berita"}),c.jsx(qt,{to:"/",onClick:()=>{o("jurusan"),i(!1)},children:"Program"}),c.jsx(qt,{to:"/",onClick:()=>{o("fasilitas"),i(!1)},children:"Fasilitas"})]}),c.jsx(q1,{onClick:()=>{r?s():a(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]})]})})}var fk={exports:{}},DT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$T=DT,FT=$T;function pk(){}function gk(){}gk.resetWarningCache=pk;var BT=function(){function t(i,r,s,a,o,l){if(l!==FT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gk,resetWarningCache:pk};return n.PropTypes=n,n};fk.exports=BT();var NT=fk.exports;const De=Yc(NT);var VT=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!==0;){var a=s[r];if(!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n};const HT=Yc(VT);var Kf={exports:{}},mk;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/mk=function(){var t={},e={};return t.on=function(n,i){var r={name:n,handler:i};return e[n]=e[n]||[],e[n].unshift(r),r},t.off=function(n){var i=e[n.name].indexOf(n);i!==-1&&e[n.name].splice(i,1)},t.trigger=function(n,i){var r=e[n],s;if(r)for(s=r.length;s--;)r[s].handler(i)},t};var UT=mk,Gf={exports:{}},WT=function(e,n,i){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(i=n,n={}),n=n||{},i=i||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&KT(s,n.attrs),n.text&&(s.text=""+n.text);var a="onload"in s?J1:GT;a(s,i),s.onload||J1(s,i),r.appendChild(s)};function KT(t,e){for(var n in e)t.setAttribute(n,e[n])}function J1(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function GT(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=WT,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default=function(s){var a=new Promise(function(o){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){o(window.YT);return}else{var l=window.location.protocol==="http:"?"http:":"https:";(0,i.default)(l+"//www.youtube.com/iframe_api",function(d){d&&s.trigger("error",d)})}var u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){u&&u(),o(window.YT)}});return a},t.exports=e.default})(Gf,Gf.exports);var YT=Gf.exports,Yf={exports:{}},Xf={exports:{}},qf={exports:{}},La=1e3,Oa=La*60,za=Oa*60,Ia=za*24,XT=Ia*365.25,qT=function(t,e){e=e||{};var n=typeof t;if(n==="string"&&t.length>0)return JT(t);if(n==="number"&&isNaN(t)===!1)return e.long?ZT(t):QT(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function JT(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),i=(e[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return n*XT;case"days":case"day":case"d":return n*Ia;case"hours":case"hour":case"hrs":case"hr":case"h":return n*za;case"minutes":case"minute":case"mins":case"min":case"m":return n*Oa;case"seconds":case"second":case"secs":case"sec":case"s":return n*La;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function QT(t){return t>=Ia?Math.round(t/Ia)+"d":t>=za?Math.round(t/za)+"h":t>=Oa?Math.round(t/Oa)+"m":t>=La?Math.round(t/La)+"s":t+"ms"}function ZT(t){return Oo(t,Ia,"day")||Oo(t,za,"hour")||Oo(t,Oa,"minute")||Oo(t,La,"second")||t+" ms"}function Oo(t,e,n){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}(function(t,e){e=t.exports=r.debug=r.default=r,e.coerce=l,e.disable=a,e.enable=s,e.enabled=o,e.humanize=qT,e.names=[],e.skips=[],e.formatters={};var n;function i(u){var d=0,h;for(h in u)d=(d<<5)-d+u.charCodeAt(h),d|=0;return e.colors[Math.abs(d)%e.colors.length]}function r(u){function d(){if(d.enabled){var h=d,f=+new Date,p=f-(n||f);h.diff=p,h.prev=n,h.curr=f,n=f;for(var m=new Array(arguments.length),y=0;y<m.length;y++)m[y]=arguments[y];m[0]=e.coerce(m[0]),typeof m[0]!="string"&&m.unshift("%O");var k=0;m[0]=m[0].replace(/%([a-zA-Z%])/g,function(v,b){if(v==="%%")return v;k++;var w=e.formatters[b];if(typeof w=="function"){var j=m[k];v=w.call(h,j),m.splice(k,1),k--}return v}),e.formatArgs.call(h,m);var x=d.log||e.log||console.log.bind(console);x.apply(h,m)}}return d.namespace=u,d.enabled=e.enabled(u),d.useColors=e.useColors(),d.color=i(u),typeof e.init=="function"&&e.init(d),d}function s(u){e.save(u),e.names=[],e.skips=[];for(var d=(typeof u=="string"?u:"").split(/[\s,]+/),h=d.length,f=0;f<h;f++)d[f]&&(u=d[f].replace(/\*/g,".*?"),u[0]==="-"?e.skips.push(new RegExp("^"+u.substr(1)+"$")):e.names.push(new RegExp("^"+u+"$")))}function a(){e.enable("")}function o(u){var d,h;for(d=0,h=e.skips.length;d<h;d++)if(e.skips[d].test(u))return!1;for(d=0,h=e.names.length;d<h;d++)if(e.names[d].test(u))return!0;return!1}function l(u){return u instanceof Error?u.stack||u.message:u}})(qf,qf.exports);var e9=qf.exports;(function(t,e){var n={};e=t.exports=e9,e.log=s,e.formatArgs=r,e.save=a,e.load=o,e.useColors=i,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:l(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(u){try{return JSON.stringify(u)}catch(d){return"[UnexpectedJSONParseError]: "+d.message}};function r(u){var d=this.useColors;if(u[0]=(d?"%c":"")+this.namespace+(d?" %c":" ")+u[0]+(d?"%c ":" ")+"+"+e.humanize(this.diff),!!d){var h="color: "+this.color;u.splice(1,0,h,"color: inherit");var f=0,p=0;u[0].replace(/%[a-zA-Z%]/g,function(m){m!=="%%"&&(f++,m==="%c"&&(p=f))}),u.splice(p,0,h)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(u){try{u==null?e.storage.removeItem("debug"):e.storage.debug=u}catch{}}function o(){var u;try{u=e.storage.debug}catch{}return!u&&typeof process<"u"&&"env"in process&&(u=n.DEBUG),u}e.enable(o());function l(){try{return window.localStorage}catch{}}})(Xf,Xf.exports);var t9=Xf.exports,Jf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(Jf,Jf.exports);var n9=Jf.exports,Qf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(Qf,Qf.exports);var i9=Qf.exports,Zf={exports:{}},ep={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(ep,ep.exports);var r9=ep.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=r9,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(Zf,Zf.exports);var s9=Zf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=t9,i=d(n),r=n9,s=d(r),a=i9,o=d(a),l=s9,u=d(l);function d(p){return p&&p.__esModule?p:{default:p}}var h=(0,i.default)("youtube-player"),f={};f.proxyEvents=function(p){var m={},y=function(S){var P="on"+S.slice(0,1).toUpperCase()+S.slice(1);m[P]=function(E){h('event "%s"',P,E),p.trigger(S,E)}},k=!0,x=!1,v=void 0;try{for(var b=o.default[Symbol.iterator](),w;!(k=(w=b.next()).done);k=!0){var j=w.value;y(j)}}catch(C){x=!0,v=C}finally{try{!k&&b.return&&b.return()}finally{if(x)throw v}}return m},f.promisifyPlayer=function(p){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y={},k=function(P){m&&u.default[P]?y[P]=function(){for(var E=arguments.length,M=Array(E),O=0;O<E;O++)M[O]=arguments[O];return p.then(function(R){var W=u.default[P],Q=R.getPlayerState(),X=R[P].apply(R,M);return W.stateChangeRequired||Array.isArray(W.acceptableStates)&&W.acceptableStates.indexOf(Q)===-1?new Promise(function(N){var se=function L(){var D=R.getPlayerState(),$=void 0;typeof W.timeout=="number"&&($=setTimeout(function(){R.removeEventListener("onStateChange",L),N()},W.timeout)),Array.isArray(W.acceptableStates)&&W.acceptableStates.indexOf(D)!==-1&&(R.removeEventListener("onStateChange",L),clearTimeout($),N())};R.addEventListener("onStateChange",se)}).then(function(){return X}):X})}:y[P]=function(){for(var E=arguments.length,M=Array(E),O=0;O<E;O++)M[O]=arguments[O];return p.then(function(R){return R[P].apply(R,M)})}},x=!0,v=!1,b=void 0;try{for(var w=s.default[Symbol.iterator](),j;!(x=(j=w.next()).done);x=!0){var C=j.value;k(C)}}catch(S){v=!0,b=S}finally{try{!x&&w.return&&w.return()}finally{if(v)throw b}}return y},e.default=f,t.exports=e.default})(Yf,Yf.exports);var a9=Yf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},i=UT,r=u(i),s=YT,a=u(s),o=a9,l=u(o);function u(h){return h&&h.__esModule?h:{default:h}}var d=void 0;e.default=function(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,m=(0,r.default)();if(d||(d=(0,a.default)(m)),f.events)throw new Error("Event handlers cannot be overwritten.");if(typeof h=="string"&&!document.getElementById(h))throw new Error('Element "'+h+'" does not exist.');f.events=l.default.proxyEvents(m);var y=new Promise(function(x){if((typeof h>"u"?"undefined":n(h))==="object"&&h.playVideo instanceof Function){var v=h;x(v)}else d.then(function(b){var w=new b.Player(h,f);return m.on("ready",function(){x(w)}),null})}),k=l.default.promisifyPlayer(y,p);return k.on=m.on,k.off=m.off,k},t.exports=e.default})(Kf,Kf.exports);var o9=Kf.exports;const l9=Yc(o9);var c9=Object.defineProperty,u9=Object.defineProperties,d9=Object.getOwnPropertyDescriptors,Q1=Object.getOwnPropertySymbols,h9=Object.prototype.hasOwnProperty,f9=Object.prototype.propertyIsEnumerable,Z1=(t,e,n)=>e in t?c9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,tp=(t,e)=>{for(var n in e||(e={}))h9.call(e,n)&&Z1(t,n,e[n]);if(Q1)for(var n of Q1(e))f9.call(e,n)&&Z1(t,n,e[n]);return t},np=(t,e)=>u9(t,d9(e)),p9=(t,e,n)=>new Promise((i,r)=>{var s=l=>{try{o(n.next(l))}catch(u){r(u)}},a=l=>{try{o(n.throw(l))}catch(u){r(u)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);o((n=n.apply(t,e)).next())});function g9(t,e){var n,i;if(t.videoId!==e.videoId)return!0;const r=((n=t.opts)==null?void 0:n.playerVars)||{},s=((i=e.opts)==null?void 0:i.playerVars)||{};return r.start!==s.start||r.end!==s.end}function e2(t={}){return np(tp({},t),{height:0,width:0,playerVars:np(tp({},t.playerVars),{autoplay:0,start:0,end:0})})}function m9(t,e){return t.videoId!==e.videoId||!HT(e2(t.opts),e2(e.opts))}function y9(t,e){var n,i,r,s;return t.id!==e.id||t.className!==e.className||((n=t.opts)==null?void 0:n.width)!==((i=e.opts)==null?void 0:i.width)||((r=t.opts)==null?void 0:r.height)!==((s=e.opts)==null?void 0:s.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var v9={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},x9={videoId:De.string,id:De.string,className:De.string,iframeClassName:De.string,style:De.object,title:De.string,loading:De.oneOf(["lazy","eager"]),opts:De.objectOf(De.any),onReady:De.func,onError:De.func,onPlay:De.func,onPause:De.func,onEnd:De.func,onStateChange:De.func,onPlaybackRateChange:De.func,onPlaybackQualityChange:De.func},Yl=class extends ze.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var n,i;return(i=(n=this.props).onReady)==null?void 0:i.call(n,e)},this.onPlayerError=e=>{var n,i;return(i=(n=this.props).onError)==null?void 0:i.call(n,e)},this.onPlayerStateChange=e=>{var n,i,r,s,a,o,l,u;switch((i=(n=this.props).onStateChange)==null||i.call(n,e),e.data){case Yl.PlayerState.ENDED:(s=(r=this.props).onEnd)==null||s.call(r,e);break;case Yl.PlayerState.PLAYING:(o=(a=this.props).onPlay)==null||o.call(a,e);break;case Yl.PlayerState.PAUSED:(u=(l=this.props).onPause)==null||u.call(l,e);break}},this.onPlayerPlaybackRateChange=e=>{var n,i;return(i=(n=this.props).onPlaybackRateChange)==null?void 0:i.call(n,e)},this.onPlayerPlaybackQualityChange=e=>{var n,i;return(i=(n=this.props).onPlaybackQualityChange)==null?void 0:i.call(n,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=np(tp({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=l9(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,n,i,r;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let s=!1;const a={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(a.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(a.endSeconds=this.props.opts.playerVars.end)),s){(i=this.internalPlayer)==null||i.loadVideoById(a);return}(r=this.internalPlayer)==null||r.cueVideoById(a)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return p9(this,null,function*(){y9(t,this.props)&&this.updatePlayer(),m9(t,this.props)&&(yield this.resetPlayer()),g9(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return ze.createElement("div",{className:this.props.className,style:this.props.style},ze.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Ou=Yl;Ou.propTypes=x9;Ou.defaultProps=v9;Ou.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var b9=Ou;const k9=g.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`,w9=g.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(15, 32, 39, 0.7) 0%,
      rgba(15, 32, 39, 0.7) 80%,
      rgba(15, 32, 39, 0.9) 97%,
      rgba(15, 32, 39, 1) 100%
    );
    z-index: 2;
  }

  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }

  @media (max-width: 768px) {
    iframe {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`,j9=g(T.div)`
  z-index: 3;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin-top: 150px;
  position: relative;
  padding-bottom: 250px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 1rem;
    padding-bottom: 150px;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }
`;function _9(){const t={height:"100%",width:"100%",playerVars:{autoplay:1,mute:1,controls:0,showinfo:0,rel:0,enablejsapi:1,loop:1,playlist:"Grq4rhiO_Ko",playsinline:1,modestbranding:1}},e=i=>{i.target.playVideo(),document.addEventListener("click",()=>{i.target.unMute()},{once:!0})},n=i=>{i.data===0&&i.target.playVideo()};return c.jsxs(k9,{id:"beranda",children:[c.jsx(w9,{children:c.jsx(b9,{videoId:"Grq4rhiO_Ko",opts:t,onReady:e,onStateChange:n,className:"youtube-player"})}),c.jsxs(j9,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},children:[c.jsx(T.h1,{animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:"Selamat Datang di SMKN 1 Bulan"}),c.jsx(T.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Membentuk Generasi Digital yang Inovatif dan Berkarakter"})]})]})}const S9=g.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 46, 0),
      rgba(26, 26, 46, 0.8) 40%,
      rgba(26, 26, 46, 1) 70%
    );
    pointer-events: none;
    z-index: 2;
  }
`,P9=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,Md=g.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,C9=g.div`
  padding: 4rem 0;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('https://raw.githubusercontent.com/hfzt07/dbweb/main/jurusan.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }
`,T9=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,E9=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,M9=g(T.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
  }
`,A9=g.div`
  padding: 4rem 0;
`,L9=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,O9=g.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,z9=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`,I9=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  justify-content: space-between;
`,R9=g(T.div)`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 90px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 90px;
    height: 90px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 0.8rem 1rem 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`,D9=g(T.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
`,$9=g.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 0 auto 5rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,F9=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;
  }

  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgba(0, 255, 135, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.8rem;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.15rem;
    letter-spacing: 0.3px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }
`,B9=g.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,t2=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.8rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 2.5rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;

    h3 {
      color: #00ff87;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      font-size: 1.1rem;
      letter-spacing: 0.3px;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .image-container {
    width: 180px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    border: none;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 3px;
      border-radius: 15px;
      background: linear-gradient(
        45deg,
        #00ff87,
        #60efff,
        #00ff87
      );
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: borderRotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 255, 135, 0.1) 100%
      );
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      filter: contrast(1.1) brightness(1.1);
    }

    &:hover img {
      transform: scale(1.15);
    }
  }

  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    gap: 2rem;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .content p {
      text-align: justify;
    }
    
    .image-container {
      width: 140px;
      height: 140px;
    }
  }
`;g.h3`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #60efff;
    text-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
  }
`;function N9(){const t=J(),e=[{nama:"Rekayasa Perangkat Lunak",deskripsi:"Program keahlian yang mempelajari pengembangan aplikasi dan software"},{nama:"Teknik Komputer dan Jaringan",deskripsi:"Program keahlian yang fokus pada infrastruktur jaringan dan hardware"},{nama:"Multimedia",deskripsi:"Program keahlian yang mempelajari desain grafis dan produksi konten digital"},{nama:"Bisnis Digital",deskripsi:"Program keahlian yang mempelajari pemasaran digital dan e-commerce"}],n=[{id:1,judul:"Prestasi Gemilang di Olimpiade Sains",tanggal:"15 Februari 2024",gambar:"/images/berita/berita1.jpg",ringkasan:"Siswa SMKN 1 Bulan meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika."},{id:2,judul:"Workshop Teknologi AI",tanggal:"10 Februari 2024",gambar:"/images/berita/berita2.jpg",ringkasan:"Mengadakan workshop teknologi AI untuk meningkatkan kompetensi siswa dalam era digital."},{id:3,judul:"Kerjasama dengan Industri",tanggal:"5 Februari 2024",gambar:"/images/berita/berita3.jpg",ringkasan:"Menjalin kerjasama dengan perusahaan teknologi untuk program magang siswa."},{id:4,judul:"Penghargaan Sekolah Adiwiyata",tanggal:"1 Februari 2024",gambar:"/images/berita/berita4.jpg",ringkasan:"SMKN 1 Bulan menerima penghargaan sebagai sekolah berwawasan lingkungan."},{id:5,judul:"Juara Umum Lomba Robotik",tanggal:"28 Januari 2024",gambar:"/images/berita/berita5.jpg",ringkasan:"Tim robotik sekolah berhasil meraih juara umum dalam kompetisi robotik tingkat nasional."},{id:6,judul:"Pelatihan Digital Marketing",tanggal:"25 Januari 2024",gambar:"/images/berita/berita6.jpg",ringkasan:"Siswa jurusan Bisnis Digital mengikuti pelatihan intensif bersama praktisi industri."}];return c.jsx(S9,{id:"profil",children:c.jsxs(P9,{children:[c.jsx(Md,{children:"Profil Sekolah"}),c.jsxs($9,{children:[c.jsx(F9,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/school-detail"),style:{cursor:"pointer"},children:c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:"SMKN 1 Bulan"}),c.jsx("p",{children:"Adalah lembaga pendidikan kejuruan unggulan yang berdiri sejak tahun 2005. Dengan fokus pada bidang teknologi informasi dan komunikasi, kami telah menghasilkan ribuan lulusan berkualitas yang kini berkarya di berbagai perusahaan teknologi terkemuka."})]})}),c.jsxs(B9,{children:[c.jsxs(t2,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/kepsek-detail"),style:{cursor:"pointer"},children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"})}),c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:"Sambutan Kepala Sekolah"}),c.jsx("p",{children:'"Pengembangan karakter serta etika merupakan komitmen kami untuk menghasilkan lulusan yang berkualitas dan berakhlak mulia."'})]})]}),c.jsx(t2,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},whileHover:{scale:1.02},onClick:()=>t("/visi-misi"),style:{cursor:"pointer"},children:c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:"Visi & Misi"}),c.jsx("p",{children:"Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia untuk membangun masa depan Indonesia yang lebih baik."})]})})]})]}),c.jsx(A9,{id:"berita",children:c.jsxs(L9,{children:[c.jsx(Md,{children:"Berita Terkini"}),c.jsxs(O9,{children:[c.jsxs(z9,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5},whileHover:{y:-10},children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:n[0].gambar,alt:n[0].judul})}),c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:n[0].judul}),c.jsx("div",{className:"date",children:n[0].tanggal}),c.jsx("p",{children:n[0].ringkasan}),c.jsx(D9,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Baca Selengkapnya"})]})]}),c.jsx(I9,{children:n.slice(1,6).map((i,r)=>c.jsxs(R9,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},transition:{delay:r*.1},whileHover:{x:5},children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:i.gambar,alt:i.judul})}),c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:i.judul}),c.jsx("div",{className:"date",children:i.tanggal})]})]},i.id))})]})]})}),c.jsx(C9,{id:"jurusan",children:c.jsxs(T9,{children:[c.jsx(Md,{children:"Program Keahlian"}),c.jsx(E9,{children:e.map((i,r)=>c.jsxs(M9,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0, 255, 135, 0.2)"},children:[c.jsx("h3",{children:i.nama}),c.jsx("p",{children:i.deskripsi})]},r))})]})})]})})}const V9=g.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,H9=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,U9=g.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);
`,W9=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,K9=g(T.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${t=>`url(${t.bgImage})`};
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    opacity: 0.5;
  }

  h3 {
    color: #00ff87;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    position: relative;
    z-index: 2;
    max-width: 90%;
    margin: 0 auto;
  }
`;function G9(){const t=J(),e=[{nama:"Pramuka",deskripsi:"Kegiatan kepanduan yang mengembangkan karakter dan keterampilan",path:"pramuka",image:"/images/ekstrakurikuler/pramuka.jpg"},{nama:"Futsal",deskripsi:"Olahraga tim yang mengembangkan kerjasama dan kebugaran",path:"futsal",image:"/images/ekstrakurikuler/futsal.jpg"},{nama:"PMR",deskripsi:"Palang Merah Remaja untuk pembelajaran pertolongan pertama",path:"pmr",image:"/images/ekstrakurikuler/pmr.jpg"},{nama:"Paskibra",deskripsi:"Pasukan pengibar bendera untuk meningkatkan kedisiplinan",path:"paskibra",image:"/images/ekstrakurikuler/paskibra.jpg"},{nama:"OSIS",deskripsi:"Organisasi siswa intra sekolah untuk pengembangan kepemimpinan",path:"osis",image:"/images/ekstrakurikuler/osis.jpg"},{nama:"English Club",deskripsi:"Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa",path:"english-club",image:"/images/ekstrakurikuler/english.jpg"}];return c.jsx(V9,{id:"ekskul",children:c.jsxs(H9,{children:[c.jsx(U9,{children:"Ekstrakurikuler"}),c.jsx(W9,{children:e.map((n,i)=>c.jsxs(K9,{bgImage:n.image,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0, 255, 135, 0.2)"},onClick:()=>t(n.path),children:[c.jsx("h3",{children:n.nama}),c.jsx("p",{children:n.deskripsi})]},i))})]})})}const Y9=g.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,X9=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,q9=g.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,J9=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`,Ad=g(T.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;function Q9(){const t=J();return c.jsx(Y9,{id:"program",children:c.jsxs(X9,{children:[c.jsx(q9,{children:"Program Unggulan"}),c.jsxs(J9,{children:[c.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1},whileHover:{scale:1.05},onClick:()=>t("/akademik-detail"),style:{cursor:"pointer"},children:[c.jsx("h3",{children:"Program Akademik"}),c.jsx("p",{children:"Program pembelajaran berbasis industri dengan pendekatan teaching factory"})]}),c.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},whileHover:{scale:1.05},onClick:()=>t("/karakter-detail"),style:{cursor:"pointer"},children:[c.jsx("h3",{children:"Penguatan Karakter"}),c.jsx("p",{children:"Pembentukan karakter dan etika melalui berbagai program pembinaan"})]}),c.jsxs(Ad,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.05},onClick:()=>t("/ekstrakurikuler-detail"),style:{cursor:"pointer"},children:[c.jsx("h3",{children:"Ekstrakurikuler"}),c.jsx("p",{children:"Pengembangan minat dan bakat melalui berbagai kegiatan ekstrakurikuler"})]})]}),c.jsx(G9,{})]})})}const Z9=g.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,eE=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,tE=g.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,nE=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,iE=g(T.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;function rE(){const t=J(),e=[{nama:"Perpustakaan Digital",deskripsi:"Perpustakaan dengan koleksi buku digital dan area belajar yang nyaman",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpustakaan.jpg",path:"/perpus-detail"},{nama:"Laboratorium Komputer",deskripsi:"Lab komputer modern dengan perangkat terbaru untuk praktik pemrograman dan desain",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-komputer.jpg",path:"/lab-komputer-detail"},{nama:"Studio Multimedia",deskripsi:"Studio produksi dengan peralatan profesional untuk praktik multimedia",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio.jpg",path:"/studio-detail"},{nama:"Ruang Praktik Jaringan",deskripsi:"Ruang praktik dengan peralatan jaringan lengkap untuk pembelajaran TKJ",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-jaringan.jpg",path:"/jaringan-detail"},{nama:"Aula Serbaguna",deskripsi:"Ruang serba guna untuk berbagai kegiatan sekolah dan event",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula.jpg",path:"/aula-detail"},{nama:"Lapangan Olahraga",deskripsi:"Fasilitas olahraga lengkap untuk kegiatan fisik dan ekstrakurikuler",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan.jpg",path:"/lapangan-detail"},{nama:"Kantin Sehat",deskripsi:"Area makan yang bersih dan nyaman dengan menu sehat dan bergizi",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin.jpg",path:"/kantin-detail"},{nama:"Taman Sosial",deskripsi:"Ruang terbuka hijau untuk interaksi sosial dan kegiatan outdoor",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman.jpg",path:"/taman-detail"},{nama:"Titik Internet",deskripsi:"Akses internet berkecepatan tinggi yang tersebar di seluruh area sekolah",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi.jpg",path:"/internet-detail"}];return c.jsx(Z9,{id:"fasilitas",children:c.jsxs(eE,{children:[c.jsx(tE,{children:"Fasilitas Sekolah"}),c.jsx(nE,{children:e.map((n,i)=>c.jsxs(iE,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},whileHover:{y:-10},onClick:()=>n.path&&t(n.path),style:{cursor:n.path?"pointer":"default"},children:[c.jsx("div",{className:"image-container",children:c.jsx("img",{src:n.image,alt:n.nama})}),c.jsxs("div",{className:"content",children:[c.jsx("h3",{children:n.nama}),c.jsx("p",{children:n.deskripsi})]})]},i))})]})})}var yk={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n2=ze.createContext&&ze.createContext(yk),sE=["attr","size","title"];function aE(t,e){if(t==null)return{};var n=oE(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function oE(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function $c(){return $c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$c.apply(this,arguments)}function i2(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Fc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?i2(Object(n),!0).forEach(function(i){lE(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i2(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function lE(t,e,n){return e=cE(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cE(t){var e=uE(t,"string");return typeof e=="symbol"?e:e+""}function uE(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vk(t){return t&&t.map((e,n)=>ze.createElement(e.tag,Fc({key:n},e.attr),vk(e.child)))}function I(t){return e=>ze.createElement(dE,$c({attr:Fc({},t.attr)},e),vk(t.child))}function dE(t){var e=n=>{var{attr:i,size:r,title:s}=t,a=aE(t,sE),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ze.createElement("svg",$c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Fc(Fc({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&ze.createElement("title",null,s),t.children)};return n2!==void 0?ze.createElement(n2.Consumer,null,n=>e(n)):e(yk)}function hE(t){return I({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function xk(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function bk(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(t)}function fE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function pE(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function _e(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function kk(t){return I({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function gE(t){return I({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"},child:[]}]})(t)}function mE(t){return I({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function yE(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function vE(t){return I({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"},child:[]}]})(t)}function xE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function bE(t){return I({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(t)}function kE(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function as(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function wk(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}function wE(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(t)}function jE(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function _E(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(t)}function Bg(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(t)}function SE(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(t)}function jk(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"},child:[]}]})(t)}function _k(t){return I({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(t)}function no(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function PE(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(t)}function Sk(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function Pk(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function Ck(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(t)}function CE(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"},child:[]}]})(t)}function TE(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function Tk(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(t)}function EE(t){return I({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(t)}function ME(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function os(t){return I({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function AE(t){return I({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function Ek(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(t)}function Mk(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(t)}function Ak(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}function LE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"},child:[]}]})(t)}function OE(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function zE(t){return I({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87 24.15 28.76z"},child:[]}]})(t)}function Lk(t){return I({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"},child:[]}]})(t)}function IE(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function RE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function DE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function $E(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(t)}function Ok(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function zk(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function FE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(t)}function BE(t){return I({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function Ik(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(t)}function NE(t){return I({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(t)}function ir(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(t)}function VE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(t)}function Rk(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(t)}function Ng(t){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function ft(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}function HE(t){return I({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(t)}function UE(t){return I({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(t)}function WE(t){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"},child:[]}]})(t)}function Vg(t){return I({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(t)}const KE=g.footer`
  background: #0f2027;
  color: white;
  padding: 4rem 2rem 2rem 2rem;
`,GE=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,zo=g.div`
  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.6;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff87;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }
`,YE=g.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    &:hover {
      background: #00ff87;
      transform: translateY(-3px);
    }

    &.facebook:hover {
      background: #1877f2;
    }

    &.instagram:hover {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    &.youtube:hover {
      background: #ff0000;
    }

    &.tiktok:hover {
      background: #000000;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,XE=g.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`,Ld=g(T.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`,qE=g.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 3rem auto 0;
  
  .maps-title {
    color: #00ff87;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .maps-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 21/9;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    .maps-wrapper {
      aspect-ratio: 16/9;
    }
  }
`;function JE(){const t=new Date().getFullYear();return c.jsxs(KE,{id:"kontak",children:[c.jsxs(GE,{children:[c.jsxs(zo,{children:[c.jsx("h3",{children:"SMKN 1 Bulan"}),c.jsx("p",{children:"Membentuk generasi digital yang inovatif dan berkarakter untuk masa depan Indonesia."}),c.jsxs(YE,{children:[c.jsx("a",{href:"https://www.facebook.com/grizelleana/",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:c.jsx(hE,{})}),c.jsx("a",{href:"https://www.instagram.com/bernadyaribka/",target:"_blank",rel:"noopener noreferrer",className:"instagram",children:c.jsx(xk,{})}),c.jsx("a",{href:"https://www.youtube.com/channel/UCY1bGdpom5tXC9M8-Ahu8dQ",target:"_blank",rel:"noopener noreferrer",className:"youtube",children:c.jsx(pE,{})}),c.jsx("a",{href:"https://www.tiktok.com/@bearnotber?",target:"_blank",rel:"noopener noreferrer",className:"tiktok",children:c.jsx(bk,{})})]})]}),c.jsxs(zo,{children:[c.jsx("h3",{children:"Program Keahlian"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#jurusan",children:"Rekayasa Perangkat Lunak"})}),c.jsx("li",{children:c.jsx("a",{href:"#jurusan",children:"Teknik Komputer dan Jaringan"})}),c.jsx("li",{children:c.jsx("a",{href:"#jurusan",children:"Multimedia"})}),c.jsx("li",{children:c.jsx("a",{href:"#jurusan",children:"Bisnis Digital"})})]})]}),c.jsxs(zo,{children:[c.jsx("h3",{children:"Menu"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#beranda",children:"Beranda"})}),c.jsx("li",{children:c.jsx("a",{href:"#profil",children:"Profil"})}),c.jsx("li",{children:c.jsx("a",{href:"#berita",children:"Berita"})}),c.jsx("li",{children:c.jsx("a",{href:"#jurusan",children:"Program"})}),c.jsx("li",{children:c.jsx("a",{href:"#fasilitas",children:"Fasilitas"})})]})]}),c.jsxs(zo,{children:[c.jsx("h3",{children:"Kontak Kami"}),c.jsxs(Ld,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.1},children:[c.jsx("span",{children:"📍"}),c.jsx("p",{children:"Jl. Contoh No. 123, Kota Bulan"})]}),c.jsxs(Ld,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.2},children:[c.jsx("span",{children:"📞"}),c.jsx("p",{children:"+62 123 4567 8900"})]}),c.jsxs(Ld,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.3},children:[c.jsx("span",{children:"✉️"}),c.jsx("p",{children:"info@smkn1bulan.sch.id"})]})]})]}),c.jsxs(qE,{children:[c.jsx("h3",{className:"maps-title",children:"TEMUKAN KAMI"}),c.jsx("div",{className:"maps-wrapper",children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666667!2d106.82638889999999!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzUuMCJF!5e0!3m2!1sid!2sid!4v1234567890",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),c.jsx("br",{}),c.jsx("br",{})]}),c.jsx(XE,{children:c.jsxs("p",{children:["© ",t," SMKN 1 Bulan. Hak Cipta Dilindungi."]})})]})}const QE=g(T.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,ZE=g(T.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;g.h2`
  color: #00ff87;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;const eM=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,r2=g.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00ff87;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,tM=g(T.button)`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to right, #00ff87, #60efff);
  color: #1a1a2e;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,nM=g(T.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`,iM=g.p`
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
`,rM=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -1rem;

  img {
    width: 80px;
    height: auto;
    margin-bottom: -1rem;
  }

  h2 {
    color: #00ff87;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
`;function sM(){const{showLogin:t,setShowLogin:e,handleLogin:n,loading:i}=Mn(),[r,s]=_.useState(""),[a,o]=_.useState(""),[l,u]=_.useState(""),d=async h=>{h.preventDefault(),u("");try{const f=await n(r,a);f.success?(e(!1),s(""),o("")):u(f.error)}catch{u("Terjadi kesalahan. Silakan coba lagi.")}};return c.jsx(x7,{children:t&&c.jsx(QE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>e(!1),children:c.jsxs(ZE,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:h=>h.stopPropagation(),children:[c.jsx(nM,{onClick:()=>e(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(BE,{})}),c.jsxs(rM,{children:[c.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),c.jsx("h2",{children:"SMKN 1 Bulan"})]}),c.jsxs(eM,{onSubmit:d,children:[c.jsx(r2,{type:"text",placeholder:"Username",value:r,onChange:h=>s(h.target.value),required:!0}),c.jsx(r2,{type:"password",placeholder:"Password",value:a,onChange:h=>o(h.target.value),required:!0}),l&&c.jsx(iM,{children:l}),c.jsx(tM,{type:"submit",disabled:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:i?"Loading...":"Login"})]})]})})})}const aM=g.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`,oM=g.div`
  width: 250px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`,lM=g.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 250px;
`,cM=g.div`
  color: #00ff87;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,ur=g(pu)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: linear-gradient(to right, #00ff87, #60efff);
    color: #1a1a2e;
  }
`,uM=g(T.button)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 59, 48, 0.1);
  border: none;
  border-radius: 8px;
  color: #ff3b30;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 59, 48, 0.2);
  }
`;function dM(){const t=J(),e=()=>{t("/")};return c.jsxs(aM,{children:[c.jsxs(oM,{children:[c.jsx(cM,{children:"Admin Panel"}),c.jsxs(ur,{to:"/admin",children:[c.jsx(ft,{})," Dashboard"]}),c.jsxs(ur,{to:"/admin/users",children:[c.jsx(ft,{})," Moderator"]}),c.jsxs(ur,{to:"/admin/students-teachers",children:[c.jsx(Rk,{})," Siswa & Guru"]}),c.jsxs(ur,{to:"/admin/news",children:[c.jsx(Ak,{})," Berita Sekolah"]}),c.jsxs(ur,{to:"/admin/program-news",children:[c.jsx(no,{})," Berita Program Keahlian"]}),c.jsxs(ur,{to:"/admin/extra-news",children:[c.jsx(Lk,{})," Berita Ekstrakurikuler"]}),c.jsx(uM,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:e,children:"Logout"})]}),c.jsx(lM,{children:c.jsx(ug,{})})]})}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function io(t){return t+.5|0}const Xn=(t,e,n)=>Math.max(Math.min(t,n),e);function zs(t){return Xn(io(t*2.55),0,255)}function ai(t){return Xn(io(t*255),0,255)}function yn(t){return Xn(io(t/2.55)/100,0,1)}function s2(t){return Xn(io(t*100),0,100)}const Pt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ip=[..."0123456789ABCDEF"],hM=t=>ip[t&15],fM=t=>ip[(t&240)>>4]+ip[t&15],Io=t=>(t&240)>>4===(t&15),pM=t=>Io(t.r)&&Io(t.g)&&Io(t.b)&&Io(t.a);function gM(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Pt[t[1]]*17,g:255&Pt[t[2]]*17,b:255&Pt[t[3]]*17,a:e===5?Pt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Pt[t[1]]<<4|Pt[t[2]],g:Pt[t[3]]<<4|Pt[t[4]],b:Pt[t[5]]<<4|Pt[t[6]],a:e===9?Pt[t[7]]<<4|Pt[t[8]]:255})),n}const mM=(t,e)=>t<255?e(t):"";function yM(t){var e=pM(t)?hM:fM;return t?"#"+e(t.r)+e(t.g)+e(t.b)+mM(t.a,e):void 0}const vM=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Dk(t,e,n){const i=e*Math.min(n,1-n),r=(s,a=(s+t/30)%12)=>n-i*Math.max(Math.min(a-3,9-a,1),-1);return[r(0),r(8),r(4)]}function xM(t,e,n){const i=(r,s=(r+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function bM(t,e,n){const i=Dk(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function kM(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function Hg(t){const n=t.r/255,i=t.g/255,r=t.b/255,s=Math.max(n,i,r),a=Math.min(n,i,r),o=(s+a)/2;let l,u,d;return s!==a&&(d=s-a,u=o>.5?d/(2-s-a):d/(s+a),l=kM(n,i,r,d,s),l=l*60+.5),[l|0,u||0,o]}function Ug(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ai)}function Wg(t,e,n){return Ug(Dk,t,e,n)}function wM(t,e,n){return Ug(bM,t,e,n)}function jM(t,e,n){return Ug(xM,t,e,n)}function $k(t){return(t%360+360)%360}function _M(t){const e=vM.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?zs(+e[5]):ai(+e[5]));const r=$k(+e[2]),s=+e[3]/100,a=+e[4]/100;return e[1]==="hwb"?i=wM(r,s,a):e[1]==="hsv"?i=jM(r,s,a):i=Wg(r,s,a),{r:i[0],g:i[1],b:i[2],a:n}}function SM(t,e){var n=Hg(t);n[0]=$k(n[0]+e),n=Wg(n),t.r=n[0],t.g=n[1],t.b=n[2]}function PM(t){if(!t)return;const e=Hg(t),n=e[0],i=s2(e[1]),r=s2(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${yn(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const a2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},o2={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function CM(){const t={},e=Object.keys(o2),n=Object.keys(a2);let i,r,s,a,o;for(i=0;i<e.length;i++){for(a=o=e[i],r=0;r<n.length;r++)s=n[r],o=o.replace(s,a2[s]);s=parseInt(o2[a],16),t[o]=[s>>16&255,s>>8&255,s&255]}return t}let Ro;function TM(t){Ro||(Ro=CM(),Ro.transparent=[0,0,0,0]);const e=Ro[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const EM=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function MM(t){const e=EM.exec(t);let n=255,i,r,s;if(e){if(e[7]!==i){const a=+e[7];n=e[8]?zs(a):Xn(a*255,0,255)}return i=+e[1],r=+e[3],s=+e[5],i=255&(e[2]?zs(i):Xn(i,0,255)),r=255&(e[4]?zs(r):Xn(r,0,255)),s=255&(e[6]?zs(s):Xn(s,0,255)),{r:i,g:r,b:s,a:n}}}function AM(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${yn(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Od=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,dr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function LM(t,e,n){const i=dr(yn(t.r)),r=dr(yn(t.g)),s=dr(yn(t.b));return{r:ai(Od(i+n*(dr(yn(e.r))-i))),g:ai(Od(r+n*(dr(yn(e.g))-r))),b:ai(Od(s+n*(dr(yn(e.b))-s))),a:t.a+n*(e.a-t.a)}}function Do(t,e,n){if(t){let i=Hg(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Wg(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Fk(t,e){return t&&Object.assign(e||{},t)}function l2(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ai(t[3]))):(e=Fk(t,{r:0,g:0,b:0,a:1}),e.a=ai(e.a)),e}function OM(t){return t.charAt(0)==="r"?MM(t):_M(t)}class Ra{constructor(e){if(e instanceof Ra)return e;const n=typeof e;let i;n==="object"?i=l2(e):n==="string"&&(i=gM(e)||TM(e)||OM(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Fk(this._rgb);return e&&(e.a=yn(e.a)),e}set rgb(e){this._rgb=l2(e)}rgbString(){return this._valid?AM(this._rgb):void 0}hexString(){return this._valid?yM(this._rgb):void 0}hslString(){return this._valid?PM(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,r=e.rgb;let s;const a=n===s?.5:n,o=2*a-1,l=i.a-r.a,u=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;s=1-u,i.r=255&u*i.r+s*r.r+.5,i.g=255&u*i.g+s*r.g+.5,i.b=255&u*i.b+s*r.b+.5,i.a=a*i.a+(1-a)*r.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=LM(this._rgb,e._rgb,n)),this}clone(){return new Ra(this.rgb)}alpha(e){return this._rgb.a=ai(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=io(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Do(this._rgb,2,e),this}darken(e){return Do(this._rgb,2,-e),this}saturate(e){return Do(this._rgb,1,e),this}desaturate(e){return Do(this._rgb,1,-e),this}rotate(e){return SM(this._rgb,e),this}}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function dn(){}const zM=(()=>{let t=0;return()=>t++})();function ve(t){return t===null||typeof t>"u"}function Oe(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function ne(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Dt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Jt(t,e){return Dt(t)?t:e}function Y(t,e){return typeof t>"u"?e:t}const IM=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ue(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function ie(t,e,n,i){let r,s,a;if(Oe(t))for(s=t.length,r=0;r<s;r++)e.call(n,t[r],r);else if(ne(t))for(a=Object.keys(t),s=a.length,r=0;r<s;r++)e.call(n,t[a[r]],a[r])}function Bc(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function Nc(t){if(Oe(t))return t.map(Nc);if(ne(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=Nc(t[n[r]]);return e}return t}function Bk(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function RM(t,e,n,i){if(!Bk(t))return;const r=e[t],s=n[t];ne(r)&&ne(s)?Da(r,s,i):e[t]=Nc(s)}function Da(t,e,n){const i=Oe(e)?e:[e],r=i.length;if(!ne(t))return t;n=n||{};const s=n.merger||RM;let a;for(let o=0;o<r;++o){if(a=i[o],!ne(a))continue;const l=Object.keys(a);for(let u=0,d=l.length;u<d;++u)s(l[u],t,a,n)}return t}function ea(t,e){return Da(t,e,{merger:DM})}function DM(t,e,n){if(!Bk(t))return;const i=e[t],r=n[t];ne(i)&&ne(r)?ea(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Nc(r))}const c2={"":t=>t,x:t=>t.x,y:t=>t.y};function $M(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function FM(t){const e=$M(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Vc(t,e){return(c2[e]||(c2[e]=FM(e)))(t)}function Kg(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Hc=t=>typeof t<"u",di=t=>typeof t=="function",u2=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function BM(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Re=Math.PI,un=2*Re,NM=un+Re,Uc=Number.POSITIVE_INFINITY,VM=Re/180,Wt=Re/2,wi=Re/4,d2=Re*2/3,rp=Math.log10,Jr=Math.sign;function ta(t,e,n){return Math.abs(t-e)<n}function h2(t){const e=Math.round(t);t=ta(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(rp(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function HM(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((r,s)=>r-s).pop(),e}function $a(t){return!isNaN(parseFloat(t))&&isFinite(t)}function UM(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function WM(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function $i(t){return t*(Re/180)}function KM(t){return t*(180/Re)}function f2(t){if(!Dt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function GM(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*Re&&(s+=un),{angle:s,distance:r}}function sp(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function YM(t,e){return(t-e+NM)%un-Re}function $n(t){return(t%un+un)%un}function Nk(t,e,n,i){const r=$n(t),s=$n(e),a=$n(n),o=$n(s-r),l=$n(a-r),u=$n(r-s),d=$n(r-a);return r===s||r===a||i&&s===a||o>l&&u<d}function At(t,e,n){return Math.max(e,Math.min(n,t))}function XM(t){return At(t,-32768,32767)}function Is(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Gg(t,e,n){n=n||(a=>t[a]<e);let i=t.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const Fi=(t,e,n,i)=>Gg(t,n,i?r=>{const s=t[r][e];return s<n||s===n&&t[r+1][e]===n}:r=>t[r][e]<n),qM=(t,e,n)=>Gg(t,n,i=>t[i][e]>=n);function JM(t,e,n){let i=0,r=t.length;for(;i<r&&t[i]<e;)i++;for(;r>i&&t[r-1]>n;)r--;return i>0||r<t.length?t.slice(i,r):t}const Vk=["push","pop","shift","splice","unshift"];function QM(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Vk.forEach(n=>{const i="_onData"+Kg(n),r=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const a=r.apply(this,s);return t._chartjs.listeners.forEach(o=>{typeof o[i]=="function"&&o[i](...s)}),a}})})}function p2(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),!(i.length>0)&&(Vk.forEach(s=>{delete t[s]}),delete t._chartjs)}function ZM(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Hk=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function Uk(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,Hk.call(window,()=>{i=!1,t.apply(e,n)}))}}function eA(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Yg=t=>t==="start"?"left":t==="end"?"right":"center",Ke=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,tA=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function nA(t,e,n){const i=e.length;let r=0,s=i;if(t._sorted){const{iScale:a,_parsed:o}=t,l=a.axis,{min:u,max:d,minDefined:h,maxDefined:f}=a.getUserBounds();h&&(r=At(Math.min(Fi(o,l,u).lo,n?i:Fi(e,l,a.getPixelForValue(u)).lo),0,i-1)),f?s=At(Math.max(Fi(o,a.axis,d,!0).hi+1,n?0:Fi(e,l,a.getPixelForValue(d),!0).hi+1),r,i)-r:s=i-r}return{start:r,count:s}}function iA(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const s=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const $o=t=>t===0||t===1,g2=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*un/n)),m2=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*un/n)+1,na={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Wt)+1,easeOutSine:t=>Math.sin(t*Wt),easeInOutSine:t=>-.5*(Math.cos(Re*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>$o(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>$o(t)?t:g2(t,.075,.3),easeOutElastic:t=>$o(t)?t:m2(t,.075,.3),easeInOutElastic(t){return $o(t)?t:t<.5?.5*g2(t*2,.1125,.45):.5+.5*m2(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-na.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?na.easeInBounce(t*2)*.5:na.easeOutBounce(t*2-1)*.5+.5};function Xg(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function y2(t){return Xg(t)?t:new Ra(t)}function zd(t){return Xg(t)?t:new Ra(t).saturate(.5).darken(.1).hexString()}const rA=["x","y","borderWidth","radius","tension"],sA=["color","borderColor","backgroundColor"];function aA(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:sA},numbers:{type:"number",properties:rA}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function oA(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const v2=new Map;function lA(t,e){e=e||{};const n=t+JSON.stringify(e);let i=v2.get(n);return i||(i=new Intl.NumberFormat(t,e),v2.set(n,i)),i}function Wk(t,e,n){return lA(e,n).format(t)}const Kk={values(t){return Oe(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const u=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(u<1e-4||u>1e15)&&(r="scientific"),s=cA(t,n)}const a=rp(Math.abs(s)),o=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:r,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),Wk(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(rp(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?Kk.numeric.call(this,t,e,n):""}};function cA(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Gk={formatters:Kk};function uA(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Gk.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Xi=Object.create(null),ap=Object.create(null);function ia(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];t=t[s]||(t[s]=Object.create(null))}return t}function Id(t,e,n){return typeof e=="string"?Da(ia(t,e),n):Da(ia(t,""),e)}class dA{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>zd(r.backgroundColor),this.hoverBorderColor=(i,r)=>zd(r.borderColor),this.hoverColor=(i,r)=>zd(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Id(this,e,n)}get(e){return ia(this,e)}describe(e,n){return Id(ap,e,n)}override(e,n){return Id(Xi,e,n)}route(e,n,i,r){const s=ia(this,e),a=ia(this,i),o="_"+n;Object.defineProperties(s,{[o]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[o],u=a[r];return ne(l)?Object.assign({},u,l):Y(l,u)},set(l){this[o]=l}}})}apply(e){e.forEach(n=>n(this))}}var je=new dA({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[aA,oA,uA]);function hA(t){return!t||ve(t.size)||ve(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function x2(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function ji(t,e,n){const i=t.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function b2(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function op(t,e,n,i){Yk(t,e,n,i,null)}function Yk(t,e,n,i,r){let s,a,o,l,u,d,h,f;const p=e.pointStyle,m=e.rotation,y=e.radius;let k=(m||0)*VM;if(p&&typeof p=="object"&&(s=p.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(k),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),t.restore();return}if(!(isNaN(y)||y<=0)){switch(t.beginPath(),p){default:r?t.ellipse(n,i,r/2,y,0,0,un):t.arc(n,i,y,0,un),t.closePath();break;case"triangle":d=r?r/2:y,t.moveTo(n+Math.sin(k)*d,i-Math.cos(k)*y),k+=d2,t.lineTo(n+Math.sin(k)*d,i-Math.cos(k)*y),k+=d2,t.lineTo(n+Math.sin(k)*d,i-Math.cos(k)*y),t.closePath();break;case"rectRounded":u=y*.516,l=y-u,a=Math.cos(k+wi)*l,h=Math.cos(k+wi)*(r?r/2-u:l),o=Math.sin(k+wi)*l,f=Math.sin(k+wi)*(r?r/2-u:l),t.arc(n-h,i-o,u,k-Re,k-Wt),t.arc(n+f,i-a,u,k-Wt,k),t.arc(n+h,i+o,u,k,k+Wt),t.arc(n-f,i+a,u,k+Wt,k+Re),t.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*y,d=r?r/2:l,t.rect(n-d,i-l,2*d,2*l);break}k+=wi;case"rectRot":h=Math.cos(k)*(r?r/2:y),a=Math.cos(k)*y,o=Math.sin(k)*y,f=Math.sin(k)*(r?r/2:y),t.moveTo(n-h,i-o),t.lineTo(n+f,i-a),t.lineTo(n+h,i+o),t.lineTo(n-f,i+a),t.closePath();break;case"crossRot":k+=wi;case"cross":h=Math.cos(k)*(r?r/2:y),a=Math.cos(k)*y,o=Math.sin(k)*y,f=Math.sin(k)*(r?r/2:y),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a);break;case"star":h=Math.cos(k)*(r?r/2:y),a=Math.cos(k)*y,o=Math.sin(k)*y,f=Math.sin(k)*(r?r/2:y),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a),k+=wi,h=Math.cos(k)*(r?r/2:y),a=Math.cos(k)*y,o=Math.sin(k)*y,f=Math.sin(k)*(r?r/2:y),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a);break;case"line":a=r?r/2:Math.cos(k)*y,o=Math.sin(k)*y,t.moveTo(n-a,i-o),t.lineTo(n+a,i+o);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(k)*(r?r/2:y),i+Math.sin(k)*y);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Fa(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function qg(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Jg(t){t.restore()}function fA(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else r==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function pA(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function gA(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),ve(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function mA(t,e,n,i,r){if(r.strikethrough||r.underline){const s=t.measureText(i),a=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,u=n+s.actualBoundingBoxDescent,d=r.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(a,d),t.lineTo(o,d),t.stroke()}}function yA(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Ba(t,e,n,i,r,s={}){const a=Oe(e)?e:[e],o=s.strokeWidth>0&&s.strokeColor!=="";let l,u;for(t.save(),t.font=r.string,gA(t,s),l=0;l<a.length;++l)u=a[l],s.backdrop&&yA(t,s.backdrop),o&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),ve(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(u,n,i,s.maxWidth)),t.fillText(u,n,i,s.maxWidth),mA(t,n,i,u,s),i+=Number(r.lineHeight);t.restore()}function lp(t,e){const{x:n,y:i,w:r,h:s,radius:a}=e;t.arc(n+a.topLeft,i+a.topLeft,a.topLeft,1.5*Re,Re,!0),t.lineTo(n,i+s-a.bottomLeft),t.arc(n+a.bottomLeft,i+s-a.bottomLeft,a.bottomLeft,Re,Wt,!0),t.lineTo(n+r-a.bottomRight,i+s),t.arc(n+r-a.bottomRight,i+s-a.bottomRight,a.bottomRight,Wt,0,!0),t.lineTo(n+r,i+a.topRight),t.arc(n+r-a.topRight,i+a.topRight,a.topRight,0,-Wt,!0),t.lineTo(n+a.topLeft,i)}const vA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,xA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function bA(t,e){const n=(""+t).match(vA);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const kA=t=>+t||0;function Xk(t,e){const n={},i=ne(e),r=i?Object.keys(e):e,s=ne(t)?i?a=>Y(t[a],t[e[a]]):a=>t[a]:()=>t;for(const a of r)n[a]=kA(s(a));return n}function wA(t){return Xk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ra(t){return Xk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function $t(t){const e=wA(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ye(t,e){t=t||{},e=e||je.font;let n=Y(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=Y(t.style,e.style);i&&!(""+i).match(xA)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:Y(t.family,e.family),lineHeight:bA(Y(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Y(t.weight,e.weight),string:""};return r.string=hA(r),r}function Fo(t,e,n,i){let r,s,a;for(r=0,s=t.length;r<s;++r)if(a=t[r],a!==void 0&&a!==void 0)return a}function jA(t,e,n){const{min:i,max:r}=t,s=IM(e,(r-i)/2),a=(o,l)=>n&&o===0?0:o+l;return{min:a(i,-Math.abs(s)),max:a(r,s)}}function rr(t,e){return Object.assign(Object.create(t),e)}function Qg(t,e=[""],n,i,r=()=>t[0]){const s=n||t;typeof i>"u"&&(i=Zk("_fallback",t));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:i,_getTarget:r,override:o=>Qg([o,...t],e,s,i)};return new Proxy(a,{deleteProperty(o,l){return delete o[l],delete o._keys,delete t[0][l],!0},get(o,l){return Jk(o,l,()=>AA(l,e,t,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(o,l){return w2(o).includes(l)},ownKeys(o){return w2(o)},set(o,l,u){const d=o._storage||(o._storage=r());return o[l]=d[l]=u,delete o._keys,!0}})}function Qr(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:qk(t,i),setContext:s=>Qr(t,s,n,i),override:s=>Qr(t.override(s),e,n,i)};return new Proxy(r,{deleteProperty(s,a){return delete s[a],delete t[a],!0},get(s,a,o){return Jk(s,a,()=>SA(s,a,o))},getOwnPropertyDescriptor(s,a){return s._descriptors.allKeys?Reflect.has(t,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,a)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,a){return Reflect.has(t,a)},ownKeys(){return Reflect.ownKeys(t)},set(s,a,o){return t[a]=o,delete s[a],!0}})}function qk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:di(n)?n:()=>n,isIndexable:di(i)?i:()=>i}}const _A=(t,e)=>t?t+Kg(e):e,Zg=(t,e)=>ne(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Jk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function SA(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:a}=t;let o=i[e];return di(o)&&a.isScriptable(e)&&(o=PA(e,o,t,n)),Oe(o)&&o.length&&(o=CA(e,o,t,a.isIndexable)),Zg(e,o)&&(o=Qr(o,r,s&&s[e],a)),o}function PA(t,e,n,i){const{_proxy:r,_context:s,_subProxy:a,_stack:o}=n;if(o.has(t))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);o.add(t);let l=e(s,a||i);return o.delete(t),Zg(t,l)&&(l=em(r._scopes,r,t,l)),l}function CA(t,e,n,i){const{_proxy:r,_context:s,_subProxy:a,_descriptors:o}=n;if(typeof s.index<"u"&&i(t))return e[s.index%e.length];if(ne(e[0])){const l=e,u=r._scopes.filter(d=>d!==l);e=[];for(const d of l){const h=em(u,r,t,d);e.push(Qr(h,s,a&&a[t],o))}}return e}function Qk(t,e,n){return di(t)?t(e,n):t}const TA=(t,e)=>t===!0?e:typeof t=="string"?Vc(e,t):void 0;function EA(t,e,n,i,r){for(const s of e){const a=TA(n,s);if(a){t.add(a);const o=Qk(a._fallback,n,r);if(typeof o<"u"&&o!==n&&o!==i)return o}else if(a===!1&&typeof i<"u"&&n!==i)return null}return!1}function em(t,e,n,i){const r=e._rootScopes,s=Qk(e._fallback,n,i),a=[...t,...r],o=new Set;o.add(i);let l=k2(o,a,n,s||n,i);return l===null||typeof s<"u"&&s!==n&&(l=k2(o,a,s,l,i),l===null)?!1:Qg(Array.from(o),[""],r,s,()=>MA(e,n,i))}function k2(t,e,n,i,r){for(;n;)n=EA(t,e,n,i,r);return n}function MA(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return Oe(r)&&ne(n)?n:r||{}}function AA(t,e,n,i){let r;for(const s of e)if(r=Zk(_A(s,t),n),typeof r<"u")return Zg(t,r)?em(n,i,t,r):r}function Zk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function w2(t){let e=t._keys;return e||(e=t._keys=LA(t._scopes)),e}function LA(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))e.add(i);return Array.from(e)}const OA=Number.EPSILON||1e-14,Zr=(t,e)=>e<t.length&&!t[e].skip&&t[e],ew=t=>t==="x"?"y":"x";function zA(t,e,n,i){const r=t.skip?e:t,s=e,a=n.skip?e:n,o=sp(s,r),l=sp(a,s);let u=o/(o+l),d=l/(o+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;const h=i*u,f=i*d;return{previous:{x:s.x-h*(a.x-r.x),y:s.y-h*(a.y-r.y)},next:{x:s.x+f*(a.x-r.x),y:s.y+f*(a.y-r.y)}}}function IA(t,e,n){const i=t.length;let r,s,a,o,l,u=Zr(t,0);for(let d=0;d<i-1;++d)if(l=u,u=Zr(t,d+1),!(!l||!u)){if(ta(e[d],0,OA)){n[d]=n[d+1]=0;continue}r=n[d]/e[d],s=n[d+1]/e[d],o=Math.pow(r,2)+Math.pow(s,2),!(o<=9)&&(a=3/Math.sqrt(o),n[d]=r*a*e[d],n[d+1]=s*a*e[d])}}function RA(t,e,n="x"){const i=ew(n),r=t.length;let s,a,o,l=Zr(t,0);for(let u=0;u<r;++u){if(a=o,o=l,l=Zr(t,u+1),!o)continue;const d=o[n],h=o[i];a&&(s=(d-a[n])/3,o[`cp1${n}`]=d-s,o[`cp1${i}`]=h-s*e[u]),l&&(s=(l[n]-d)/3,o[`cp2${n}`]=d+s,o[`cp2${i}`]=h+s*e[u])}}function DA(t,e="x"){const n=ew(e),i=t.length,r=Array(i).fill(0),s=Array(i);let a,o,l,u=Zr(t,0);for(a=0;a<i;++a)if(o=l,l=u,u=Zr(t,a+1),!!l){if(u){const d=u[e]-l[e];r[a]=d!==0?(u[n]-l[n])/d:0}s[a]=o?u?Jr(r[a-1])!==Jr(r[a])?0:(r[a-1]+r[a])/2:r[a-1]:r[a]}IA(t,r,s),RA(t,s,e)}function Bo(t,e,n){return Math.max(Math.min(t,n),e)}function $A(t,e){let n,i,r,s,a,o=Fa(t[0],e);for(n=0,i=t.length;n<i;++n)a=s,s=o,o=n<i-1&&Fa(t[n+1],e),s&&(r=t[n],a&&(r.cp1x=Bo(r.cp1x,e.left,e.right),r.cp1y=Bo(r.cp1y,e.top,e.bottom)),o&&(r.cp2x=Bo(r.cp2x,e.left,e.right),r.cp2y=Bo(r.cp2y,e.top,e.bottom)))}function FA(t,e,n,i,r){let s,a,o,l;if(e.spanGaps&&(t=t.filter(u=>!u.skip)),e.cubicInterpolationMode==="monotone")DA(t,r);else{let u=i?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)o=t[s],l=zA(u,o,t[Math.min(s+1,a-(i?0:1))%a],e.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,u=o}e.capBezierPoints&&$A(t,n)}function tm(){return typeof window<"u"&&typeof document<"u"}function nm(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Wc(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const zu=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function BA(t,e){return zu(t).getPropertyValue(e)}const NA=["top","right","bottom","left"];function Hi(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=NA[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const VA=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function HA(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:s}=i;let a=!1,o,l;if(VA(r,s,t.target))o=r,l=s;else{const u=e.getBoundingClientRect();o=i.clientX-u.left,l=i.clientY-u.top,a=!0}return{x:o,y:l,box:a}}function Ai(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=zu(n),s=r.boxSizing==="border-box",a=Hi(r,"padding"),o=Hi(r,"border","width"),{x:l,y:u,box:d}=HA(t,n),h=a.left+(d&&o.left),f=a.top+(d&&o.top);let{width:p,height:m}=e;return s&&(p-=a.width+o.width,m-=a.height+o.height),{x:Math.round((l-h)/p*n.width/i),y:Math.round((u-f)/m*n.height/i)}}function UA(t,e,n){let i,r;if(e===void 0||n===void 0){const s=t&&nm(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const a=s.getBoundingClientRect(),o=zu(s),l=Hi(o,"border","width"),u=Hi(o,"padding");e=a.width-u.width-l.width,n=a.height-u.height-l.height,i=Wc(o.maxWidth,s,"clientWidth"),r=Wc(o.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:i||Uc,maxHeight:r||Uc}}const No=t=>Math.round(t*10)/10;function WA(t,e,n,i){const r=zu(t),s=Hi(r,"margin"),a=Wc(r.maxWidth,t,"clientWidth")||Uc,o=Wc(r.maxHeight,t,"clientHeight")||Uc,l=UA(t,e,n);let{width:u,height:d}=l;if(r.boxSizing==="content-box"){const f=Hi(r,"border","width"),p=Hi(r,"padding");u-=p.width+f.width,d-=p.height+f.height}return u=Math.max(0,u-s.width),d=Math.max(0,i?u/i:d-s.height),u=No(Math.min(u,a,l.maxWidth)),d=No(Math.min(d,o,l.maxHeight)),u&&!d&&(d=No(u/2)),(e!==void 0||n!==void 0)&&i&&l.height&&d>l.height&&(d=l.height,u=No(Math.floor(d*i))),{width:u,height:d}}function j2(t,e,n){const i=e||1,r=Math.floor(t.height*i),s=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||a.height!==r||a.width!==s?(t.currentDevicePixelRatio=i,a.height=r,a.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const KA=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};tm()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function _2(t,e){const n=BA(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Li(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function GA(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function YA(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=Li(t,r,n),o=Li(r,s,n),l=Li(s,e,n),u=Li(a,o,n),d=Li(o,l,n);return Li(u,d,n)}const XA=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},qA=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Dr(t,e,n){return t?XA(e,n):qA()}function tw(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function nw(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function iw(t){return t==="angle"?{between:Nk,compare:YM,normalize:$n}:{between:Is,compare:(e,n)=>e-n,normalize:e=>e}}function S2({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function JA(t,e,n){const{property:i,start:r,end:s}=n,{between:a,normalize:o}=iw(i),l=e.length;let{start:u,end:d,loop:h}=t,f,p;if(h){for(u+=l,d+=l,f=0,p=l;f<p&&a(o(e[u%l][i]),r,s);++f)u--,d--;u%=l,d%=l}return d<u&&(d+=l),{start:u,end:d,loop:h,style:t.style}}function QA(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,a=e.length,{compare:o,between:l,normalize:u}=iw(i),{start:d,end:h,loop:f,style:p}=JA(t,e,n),m=[];let y=!1,k=null,x,v,b;const w=()=>l(r,b,x)&&o(r,b)!==0,j=()=>o(s,x)===0||l(s,b,x),C=()=>y||w(),S=()=>!y||j();for(let P=d,E=d;P<=h;++P)v=e[P%a],!v.skip&&(x=u(v[i]),x!==b&&(y=l(x,r,s),k===null&&C()&&(k=o(x,r)===0?P:E),k!==null&&S()&&(m.push(S2({start:k,end:P,loop:f,count:a,style:p})),k=null),E=P,b=x));return k!==null&&m.push(S2({start:k,end:h,loop:f,count:a,style:p})),m}function ZA(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=QA(i[r],t.points,e);s.length&&n.push(...s)}return n}function eL(t,e,n,i){let r=0,s=e-1;if(n&&!i)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,n&&(s+=r);s>r&&t[s%e].skip;)s--;return s%=e,{start:r,end:s}}function tL(t,e,n,i){const r=t.length,s=[];let a=e,o=t[e],l;for(l=e+1;l<=n;++l){const u=t[l%r];u.skip||u.stop?o.skip||(i=!1,s.push({start:e%r,end:(l-1)%r,loop:i}),e=a=u.stop?l:null):(a=l,o.skip&&(e=l)),o=u}return a!==null&&s.push({start:e%r,end:a%r,loop:i}),s}function nL(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:a,end:o}=eL(n,r,s,i);if(i===!0)return P2(t,[{start:a,end:o,loop:s}],n,e);const l=o<a?o+r:o,u=!!t._fullLoop&&a===0&&o===r-1;return P2(t,tL(n,a,l,u),n,e)}function P2(t,e,n,i){return!i||!i.setContext||!n?e:iL(t,e,n,i)}function iL(t,e,n,i){const r=t._chart.getContext(),s=C2(t.options),{_datasetIndex:a,options:{spanGaps:o}}=t,l=n.length,u=[];let d=s,h=e[0].start,f=h;function p(m,y,k,x){const v=o?-1:1;if(m!==y){for(m+=l;n[m%l].skip;)m-=v;for(;n[y%l].skip;)y+=v;m%l!==y%l&&(u.push({start:m%l,end:y%l,loop:k,style:x}),d=x,h=y%l)}}for(const m of e){h=o?h:m.start;let y=n[h%l],k;for(f=h+1;f<=m.end;f++){const x=n[f%l];k=C2(i.setContext(rr(r,{type:"segment",p0:y,p1:x,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:a}))),rL(k,d)&&p(h,f-1,m.loop,d),y=x,d=k}h<f-1&&p(h,f-1,m.loop,d)}return u}function C2(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function rL(t,e){if(!e)return!1;const n=[],i=function(r,s){return Xg(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class sL{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,r){const s=n.listeners[r],a=n.duration;s.forEach(o=>o({chart:e,initial:n.initial,numSteps:a,currentStep:Math.min(i-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=Hk.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let a=s.length-1,o=!1,l;for(;a>=0;--a)l=s[a],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),o=!0):(s[a]=s[s.length-1],s.pop());o&&(r.draw(),this._notify(r,i,e,"progress")),s.length||(i.running=!1,this._notify(r,i,e,"complete"),i.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var fn=new sL;const T2="transparent",aL={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=y2(t||T2),r=i.valid&&y2(e||T2);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class oL{constructor(e,n,i,r){const s=n[i];r=Fo([e.to,r,s,e.from]);const a=Fo([e.from,s,r]);this._active=!0,this._fn=e.fn||aL[e.type||typeof a],this._easing=na[e.easing]||na.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,a=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=Fo([e.to,n,r,e.from]),this._from=Fo([e.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,r=this._prop,s=this._from,a=this._loop,o=this._to;let l;if(this._active=s!==o&&(a||n<i),!this._active){this._target[r]=o,this._notify(!0);return}if(n<0){this._target[r]=s;return}l=n/i%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(s,o,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class rw{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!ne(e))return;const n=Object.keys(je.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(!ne(s))return;const a={};for(const o of n)a[o]=s[o];(Oe(s.properties)&&s.properties||[r]).forEach(o=>{(o===r||!i.has(o))&&i.set(o,a)})})}_animateOptions(e,n){const i=n.options,r=cL(e,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&lL(e.options.$animations,i).then(()=>{e.options=i},()=>{}),s}_createAnimations(e,n){const i=this._properties,r=[],s=e.$animations||(e.$animations={}),a=Object.keys(n),o=Date.now();let l;for(l=a.length-1;l>=0;--l){const u=a[l];if(u.charAt(0)==="$")continue;if(u==="options"){r.push(...this._animateOptions(e,n));continue}const d=n[u];let h=s[u];const f=i.get(u);if(h)if(f&&h.active()){h.update(f,d,o);continue}else h.cancel();if(!f||!f.duration){e[u]=d;continue}s[u]=h=new oL(f,e,u,d),r.push(h)}return r}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return fn.add(this._chart,i),!0}}function lL(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const s=t[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function cL(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function E2(t,e){const n=t&&t.options||{},i=n.reverse,r=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:i?s:r,end:i?r:s}}function uL(t,e,n){if(n===!1)return!1;const i=E2(t,n),r=E2(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function dL(t){let e,n,i,r;return ne(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:t===!1}}function sw(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function M2(t,e,n,i={}){const r=t.keys,s=i.mode==="single";let a,o,l,u;if(e===null)return;let d=!1;for(a=0,o=r.length;a<o;++a){if(l=+r[a],l===n){if(d=!0,i.all)continue;break}u=t.values[l],Dt(u)&&(s||e===0||Jr(e)===Jr(u))&&(e+=u)}return!d&&!i.all?0:e}function hL(t,e){const{iScale:n,vScale:i}=e,r=n.axis==="x"?"x":"y",s=i.axis==="x"?"x":"y",a=Object.keys(t),o=new Array(a.length);let l,u,d;for(l=0,u=a.length;l<u;++l)d=a[l],o[l]={[r]:d,[s]:t[d]};return o}function Rd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function fL(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function pL(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function gL(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function A2(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const s=t[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function L2(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:a,index:o}=i,l=s.axis,u=a.axis,d=fL(s,a,i),h=e.length;let f;for(let p=0;p<h;++p){const m=e[p],{[l]:y,[u]:k}=m,x=m._stacks||(m._stacks={});f=x[u]=gL(r,d,y),f[o]=k,f._top=A2(f,a,!0,i.type),f._bottom=A2(f,a,!1,i.type);const v=f._visualValues||(f._visualValues={});v[o]=k}}function Dd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function mL(t,e){return rr(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function yL(t,e,n){return rr(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function js(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const r of e){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n],s[i]._visualValues!==void 0&&s[i]._visualValues[n]!==void 0&&delete s[i]._visualValues[n]}}}const $d=t=>t==="reset"||t==="none",O2=(t,e)=>e?t:Object.assign({},t),vL=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:sw(n,!0),values:null};class sa{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Rd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&js(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(h,f,p,m)=>h==="x"?f:h==="r"?m:p,s=n.xAxisID=Y(i.xAxisID,Dd(e,"x")),a=n.yAxisID=Y(i.yAxisID,Dd(e,"y")),o=n.rAxisID=Y(i.rAxisID,Dd(e,"r")),l=n.indexAxis,u=n.iAxisID=r(l,s,a,o),d=n.vAxisID=r(l,a,s,o);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(o),n.iScale=this.getScaleForId(u),n.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&p2(this._data,this),e._stacked&&js(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(ne(n)){const r=this._cachedMeta;this._data=hL(n,r)}else if(i!==n){if(i){p2(i,this);const r=this._cachedMeta;js(r),r._parsed=[]}n&&Object.isExtensible(n)&&QM(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=Rd(n.vScale,n),n.stack!==i.stack&&(r=!0,js(n),n.stack=i.stack),this._resyncElements(e),(r||s!==n._stacked)&&(L2(this,n._parsed),n._stacked=Rd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:a}=i,o=s.axis;let l=e===0&&n===r.length?!0:i._sorted,u=e>0&&i._parsed[e-1],d,h,f;if(this._parsing===!1)i._parsed=r,i._sorted=!0,f=r;else{Oe(r[e])?f=this.parseArrayData(i,r,e,n):ne(r[e])?f=this.parseObjectData(i,r,e,n):f=this.parsePrimitiveData(i,r,e,n);const p=()=>h[o]===null||u&&h[o]<u[o];for(d=0;d<n;++d)i._parsed[d+e]=h=f[d],l&&(p()&&(l=!1),u=h);i._sorted=l}a&&L2(this,f)}parsePrimitiveData(e,n,i,r){const{iScale:s,vScale:a}=e,o=s.axis,l=a.axis,u=s.getLabels(),d=s===a,h=new Array(r);let f,p,m;for(f=0,p=r;f<p;++f)m=f+i,h[f]={[o]:d||s.parse(u[m],m),[l]:a.parse(n[m],m)};return h}parseArrayData(e,n,i,r){const{xScale:s,yScale:a}=e,o=new Array(r);let l,u,d,h;for(l=0,u=r;l<u;++l)d=l+i,h=n[d],o[l]={x:s.parse(h[0],d),y:a.parse(h[1],d)};return o}parseObjectData(e,n,i,r){const{xScale:s,yScale:a}=e,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,u=new Array(r);let d,h,f,p;for(d=0,h=r;d<h;++d)f=d+i,p=n[f],u[d]={x:s.parse(Vc(p,o),f),y:a.parse(Vc(p,l),f)};return u}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const r=this.chart,s=this._cachedMeta,a=n[e.axis],o={keys:sw(r,!0),values:n._stacks[e.axis]._visualValues};return M2(o,a,s.index,{mode:i})}updateRangeFromParsed(e,n,i,r){const s=i[n.axis];let a=s===null?NaN:s;const o=r&&i._stacks[n.axis];r&&o&&(r.values=o,a=M2(r,s,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&e===i.iScale,a=r.length,o=this._getOtherScale(e),l=vL(n,i,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=pL(o);let f,p;function m(){p=r[f];const y=p[o.axis];return!Dt(p[e.axis])||d>y||h<y}for(f=0;f<a&&!(!m()&&(this.updateRangeFromParsed(u,e,p,l),s));++f);if(s){for(f=a-1;f>=0;--f)if(!m()){this.updateRangeFromParsed(u,e,p,l);break}}return u}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let r,s,a;for(r=0,s=n.length;r<s;++r)a=n[r][e.axis],Dt(a)&&i.push(a);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(e);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=dL(Y(this.options.clip,uL(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||r.length-o,u=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(e,s,o,l),d=o;d<o+l;++d){const h=r[d];h.hidden||(h.active&&u?a.push(h):h.draw(e,s))}for(d=0;d<a.length;++d)a[d].draw(e,s)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const r=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const a=this._cachedMeta.data[e];s=a.$context||(a.$context=yL(this.getContext(),e,a)),s.parsed=this.getParsed(e),s.raw=r.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=mL(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const r=n==="active",s=this._cachedDataOpts,a=e+"-"+n,o=s[a],l=this.enableOptionSharing&&Hc(i);if(o)return O2(o,l);const u=this.chart.config,d=u.datasetElementScopeKeys(this._type,e),h=r?[`${e}Hover`,"hover",e,""]:[e,""],f=u.getOptionScopes(this.getDataset(),d),p=Object.keys(je.elements[e]),m=()=>this.getContext(i,r,n),y=u.resolveNamedOptions(f,p,m,h);return y.$shared&&(y.$shared=l,s[a]=Object.freeze(O2(y,l))),y}_resolveAnimations(e,n,i){const r=this.chart,s=this._cachedDataOpts,a=`animation-${n}`,o=s[a];if(o)return o;let l;if(r.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,n),f=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(f,this.getContext(e,i,n))}const u=new rw(r,l&&l.animations);return l&&l._cacheable&&(s[a]=Object.freeze(u)),u}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||$d(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),r=this._sharedOptions,s=this.getSharedOptions(i),a=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:a}}updateElement(e,n,i,r){$d(r)?Object.assign(e,i):this._resolveAnimations(n,r).update(e,i)}updateSharedOptions(e,n,i){e&&!$d(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,r){e.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(e,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[o,l,u]of this._syncList)this[o](l,u);this._syncList=[];const r=i.length,s=n.length,a=Math.min(s,r);a&&this.parse(0,a),s>r?this._insertElements(r,s-r,e):s<r&&this._removeElements(s,r-s)}_insertElements(e,n,i=!0){const r=this._cachedMeta,s=r.data,a=e+n;let o;const l=u=>{for(u.length+=n,o=u.length-1;o>=a;o--)u[o]=u[o-n]};for(l(s),o=e;o<a;++o)s[o]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(e,n),i&&this.updateElements(s,e,n,"reset")}updateElements(e,n,i,r){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(e,n);i._stacked&&js(i,r)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,r]=e;this[n](i,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}V(sa,"defaults",{}),V(sa,"datasetElementType",null),V(sa,"dataElementType",null);class Xl extends sa{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,a=this.chart._animationsDisabled;let{start:o,count:l}=nA(n,r,a);this._drawStart=o,this._drawCount=l,iA(n)&&(o=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=r;const u=this.resolveDatasetElementOptions(e);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:u},e),this.updateElements(r,o,l,e)}updateElements(e,n,i,r){const s=r==="reset",{iScale:a,vScale:o,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(n,r),f=a.axis,p=o.axis,{spanGaps:m,segment:y}=this.options,k=$a(m)?m:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||s||r==="none",v=n+i,b=e.length;let w=n>0&&this.getParsed(n-1);for(let j=0;j<b;++j){const C=e[j],S=x?C:{};if(j<n||j>=v){S.skip=!0;continue}const P=this.getParsed(j),E=ve(P[p]),M=S[f]=a.getPixelForValue(P[f],j),O=S[p]=s||E?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,P,l):P[p],j);S.skip=isNaN(M)||isNaN(O)||E,S.stop=j>0&&Math.abs(P[f]-w[f])>k,y&&(S.parsed=P,S.raw=u.data[j]),h&&(S.options=d||this.resolveDataElementOptions(j,C.active?"active":r)),x||this.updateElement(C,j,S,r),w=P}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return i;const s=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,s,a)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}V(Xl,"id","line"),V(Xl,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),V(Xl,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function _i(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class im{constructor(e){V(this,"options");this.options=e||{}}static override(e){Object.assign(im.prototype,e)}init(){}formats(){return _i()}parse(){return _i()}format(){return _i()}add(){return _i()}diff(){return _i()}startOf(){return _i()}endOf(){return _i()}}var xL={_date:im};function bL(t,e,n,i){const{controller:r,data:s,_sorted:a}=t,o=r._cachedMeta.iScale;if(o&&e===o.axis&&e!=="r"&&a&&s.length){const l=o._reversePixels?qM:Fi;if(i){if(r._sharedOptions){const u=s[0],d=typeof u.getRange=="function"&&u.getRange(e);if(d){const h=l(s,e,n-d),f=l(s,e,n+d);return{lo:h.lo,hi:f.hi}}}}else return l(s,e,n)}return{lo:0,hi:s.length-1}}function ro(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),a=n[e];for(let o=0,l=s.length;o<l;++o){const{index:u,data:d}=s[o],{lo:h,hi:f}=bL(s[o],e,a,r);for(let p=h;p<=f;++p){const m=d[p];m.skip||i(m,u,p)}}}function kL(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,r){const s=e?Math.abs(i.x-r.x):0,a=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(a,2))}}function Fd(t,e,n,i,r){const s=[];return!r&&!t.isPointInArea(e)||ro(t,n,e,function(o,l,u){!r&&!Fa(o,t.chartArea,0)||o.inRange(e.x,e.y,i)&&s.push({element:o,datasetIndex:l,index:u})},!0),s}function wL(t,e,n,i){let r=[];function s(a,o,l){const{startAngle:u,endAngle:d}=a.getProps(["startAngle","endAngle"],i),{angle:h}=GM(a,{x:e.x,y:e.y});Nk(h,u,d)&&r.push({element:a,datasetIndex:o,index:l})}return ro(t,n,e,s),r}function jL(t,e,n,i,r,s){let a=[];const o=kL(n);let l=Number.POSITIVE_INFINITY;function u(d,h,f){const p=d.inRange(e.x,e.y,r);if(i&&!p)return;const m=d.getCenterPoint(r);if(!(!!s||t.isPointInArea(m))&&!p)return;const k=o(e,m);k<l?(a=[{element:d,datasetIndex:h,index:f}],l=k):k===l&&a.push({element:d,datasetIndex:h,index:f})}return ro(t,n,e,u),a}function Bd(t,e,n,i,r,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!i?wL(t,e,n,r):jL(t,e,n,i,r,s)}function z2(t,e,n,i,r){const s=[],a=n==="x"?"inXRange":"inYRange";let o=!1;return ro(t,n,e,(l,u,d)=>{l[a]&&l[a](e[n],r)&&(s.push({element:l,datasetIndex:u,index:d}),o=o||l.inRange(e.x,e.y,r))}),i&&!o?[]:s}var _L={evaluateInteractionItems:ro,modes:{index(t,e,n,i){const r=Ai(e,t),s=n.axis||"x",a=n.includeInvisible||!1,o=n.intersect?Fd(t,r,s,i,a):Bd(t,r,s,!1,i,a),l=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(u=>{const d=o[0].index,h=u.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:u.index,index:d})}),l):[]},dataset(t,e,n,i){const r=Ai(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;let o=n.intersect?Fd(t,r,s,i,a):Bd(t,r,s,!1,i,a);if(o.length>0){const l=o[0].datasetIndex,u=t.getDatasetMeta(l).data;o=[];for(let d=0;d<u.length;++d)o.push({element:u[d],datasetIndex:l,index:d})}return o},point(t,e,n,i){const r=Ai(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;return Fd(t,r,s,i,a)},nearest(t,e,n,i){const r=Ai(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;return Bd(t,r,s,n.intersect,i,a)},x(t,e,n,i){const r=Ai(e,t);return z2(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=Ai(e,t);return z2(t,r,"y",n.intersect,i)}}};const aw=["left","top","right","bottom"];function _s(t,e){return t.filter(n=>n.pos===e)}function I2(t,e){return t.filter(n=>aw.indexOf(n.pos)===-1&&n.box.axis===e)}function Ss(t,e){return t.sort((n,i)=>{const r=e?i:n,s=e?n:i;return r.weight===s.weight?r.index-s.index:r.weight-s.weight})}function SL(t){const e=[];let n,i,r,s,a,o;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],{position:s,options:{stack:a,stackWeight:o=1}}=r,e.push({index:n,box:r,pos:s,horizontal:r.isHorizontal(),weight:r.weight,stack:a&&s+a,stackWeight:o});return e}function PL(t){const e={};for(const n of t){const{stack:i,pos:r,stackWeight:s}=n;if(!i||!aw.includes(r))continue;const a=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=s}return e}function CL(t,e){const n=PL(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let s,a,o;for(s=0,a=t.length;s<a;++s){o=t[s];const{fullSize:l}=o.box,u=n[o.stack],d=u&&o.stackWeight/u.weight;o.horizontal?(o.width=d?d*i:l&&e.availableWidth,o.height=r):(o.width=i,o.height=d?d*r:l&&e.availableHeight)}return n}function TL(t){const e=SL(t),n=Ss(e.filter(u=>u.box.fullSize),!0),i=Ss(_s(e,"left"),!0),r=Ss(_s(e,"right")),s=Ss(_s(e,"top"),!0),a=Ss(_s(e,"bottom")),o=I2(e,"x"),l=I2(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(l).concat(a).concat(o),chartArea:_s(e,"chartArea"),vertical:i.concat(r).concat(l),horizontal:s.concat(a).concat(o)}}function R2(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ow(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function EL(t,e,n,i){const{pos:r,box:s}=n,a=t.maxPadding;if(!ne(r)){n.size&&(t[r]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?s.height:s.width),n.size=h.size/h.count,t[r]+=n.size}s.getPadding&&ow(a,s.getPadding());const o=Math.max(0,e.outerWidth-R2(a,t,"left","right")),l=Math.max(0,e.outerHeight-R2(a,t,"top","bottom")),u=o!==t.w,d=l!==t.h;return t.w=o,t.h=l,n.horizontal?{same:u,other:d}:{same:d,other:u}}function ML(t){const e=t.maxPadding;function n(i){const r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function AL(t,e){const n=e.maxPadding;function i(r){const s={left:0,top:0,right:0,bottom:0};return r.forEach(a=>{s[a]=Math.max(e[a],n[a])}),s}return i(t?["left","right"]:["top","bottom"])}function Rs(t,e,n,i){const r=[];let s,a,o,l,u,d;for(s=0,a=t.length,u=0;s<a;++s){o=t[s],l=o.box,l.update(o.width||e.w,o.height||e.h,AL(o.horizontal,e));const{same:h,other:f}=EL(e,n,o,i);u|=h&&r.length,d=d||f,l.fullSize||r.push(o)}return u&&Rs(r,e,n,i)||d}function Vo(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function D2(t,e,n,i){const r=n.padding;let{x:s,y:a}=e;for(const o of t){const l=o.box,u=i[o.stack]||{count:1,placed:0,weight:1},d=o.stackWeight/u.weight||1;if(o.horizontal){const h=e.w*d,f=u.size||l.height;Hc(u.start)&&(a=u.start),l.fullSize?Vo(l,r.left,a,n.outerWidth-r.right-r.left,f):Vo(l,e.left+u.placed,a,h,f),u.start=a,u.placed+=h,a=l.bottom}else{const h=e.h*d,f=u.size||l.width;Hc(u.start)&&(s=u.start),l.fullSize?Vo(l,s,r.top,f,n.outerHeight-r.bottom-r.top):Vo(l,s,e.top+u.placed,f,h),u.start=s,u.placed+=h,s=l.right}}e.x=s,e.y=a}var Lt={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=$t(t.options.layout.padding),s=Math.max(e-r.width,0),a=Math.max(n-r.height,0),o=TL(t.boxes),l=o.vertical,u=o.horizontal;ie(t.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const d=l.reduce((y,k)=>k.box.options&&k.box.options.display===!1?y:y+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/d,hBoxMaxHeight:a/2}),f=Object.assign({},r);ow(f,$t(i));const p=Object.assign({maxPadding:f,w:s,h:a,x:r.left,y:r.top},r),m=CL(l.concat(u),h);Rs(o.fullSize,p,h,m),Rs(l,p,h,m),Rs(u,p,h,m)&&Rs(l,p,h,m),ML(p),D2(o.leftAndTop,p,h,m),p.x+=p.w,p.y+=p.h,D2(o.rightAndBottom,p,h,m),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},ie(o.chartArea,y=>{const k=y.box;Object.assign(k,t.chartArea),k.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class lw{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,r){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(e){return!0}updateConfig(e){}}class LL extends lw{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ql="$chartjs",OL={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},$2=t=>t===null||t==="";function zL(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[ql]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",$2(r)){const s=_2(t,"width");s!==void 0&&(t.width=s)}if($2(i))if(t.style.height==="")t.height=t.width/(e||2);else{const s=_2(t,"height");s!==void 0&&(t.height=s)}return t}const cw=KA?{passive:!0}:!1;function IL(t,e,n){t&&t.addEventListener(e,n,cw)}function RL(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,cw)}function DL(t,e){const n=OL[t.type]||t.type,{x:i,y:r}=Ai(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:r!==void 0?r:null}}function Kc(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function $L(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let a=!1;for(const o of s)a=a||Kc(o.addedNodes,i),a=a&&!Kc(o.removedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function FL(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let a=!1;for(const o of s)a=a||Kc(o.removedNodes,i),a=a&&!Kc(o.addedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const Na=new Map;let F2=0;function uw(){const t=window.devicePixelRatio;t!==F2&&(F2=t,Na.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function BL(t,e){Na.size||window.addEventListener("resize",uw),Na.set(t,e)}function NL(t){Na.delete(t),Na.size||window.removeEventListener("resize",uw)}function VL(t,e,n){const i=t.canvas,r=i&&nm(i);if(!r)return;const s=Uk((o,l)=>{const u=r.clientWidth;n(o,l),u<r.clientWidth&&n()},window),a=new ResizeObserver(o=>{const l=o[0],u=l.contentRect.width,d=l.contentRect.height;u===0&&d===0||s(u,d)});return a.observe(r),BL(t,s),a}function Nd(t,e,n){n&&n.disconnect(),e==="resize"&&NL(t)}function HL(t,e,n){const i=t.canvas,r=Uk(s=>{t.ctx!==null&&n(DL(s,t))},t);return IL(i,e,r),r}class UL extends lw{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(zL(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[ql])return!1;const i=n[ql].initial;["height","width"].forEach(s=>{const a=i[s];ve(a)?n.removeAttribute(s):n.setAttribute(s,a)});const r=i.style||{};return Object.keys(r).forEach(s=>{n.style[s]=r[s]}),n.width=n.width,delete n[ql],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const r=e.$proxies||(e.$proxies={}),a={attach:$L,detach:FL,resize:VL}[n]||HL;r[n]=a(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),r=i[n];if(!r)return;({attach:Nd,detach:Nd,resize:Nd}[n]||RL)(e,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,r){return WA(e,n,i,r)}isAttached(e){const n=e&&nm(e);return!!(n&&n.isConnected)}}function WL(t){return!tm()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?LL:UL}var Ml;let sr=(Ml=class{constructor(){V(this,"x");V(this,"y");V(this,"active",!1);V(this,"options");V(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return $a(this.x)&&$a(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const r={};return e.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}},V(Ml,"defaults",{}),V(Ml,"defaultRoutes"),Ml);function KL(t,e){const n=t.options.ticks,i=GL(t),r=Math.min(n.maxTicksLimit||i,i),s=n.major.enabled?XL(e):[],a=s.length,o=s[0],l=s[a-1],u=[];if(a>r)return qL(e,u,s,a/r),u;const d=YL(s,e,r);if(a>0){let h,f;const p=a>1?Math.round((l-o)/(a-1)):null;for(Ho(e,u,d,ve(p)?0:o-p,o),h=0,f=a-1;h<f;h++)Ho(e,u,d,s[h],s[h+1]);return Ho(e,u,d,l,ve(p)?e.length:l+p),u}return Ho(e,u,d),u}function GL(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function YL(t,e,n){const i=JL(t),r=e.length/n;if(!i)return Math.max(r,1);const s=HM(i);for(let a=0,o=s.length-1;a<o;a++){const l=s[a];if(l>r)return l}return Math.max(r,1)}function XL(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function qL(t,e,n,i){let r=0,s=n[0],a;for(i=Math.ceil(i),a=0;a<t.length;a++)a===s&&(e.push(t[a]),r++,s=n[r*i])}function Ho(t,e,n,i,r){const s=Y(i,0),a=Math.min(Y(r,t.length),t.length);let o=0,l,u,d;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),d=s;d<0;)o++,d=Math.round(s+o*n);for(u=Math.max(s,0);u<a;u++)u===d&&(e.push(t[u]),o++,d=Math.round(s+o*n))}function JL(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const QL=t=>t==="left"?"right":t==="right"?"left":t,B2=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,N2=(t,e)=>Math.min(e||t,t);function V2(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function ZL(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,a=t._endPixel,o=1e-6;let l=t.getPixelForTick(r),u;if(!(n&&(i===1?u=Math.max(l-s,a-l):e===0?u=(t.getPixelForTick(1)-l)/2:u=(l-t.getPixelForTick(r-1))/2,l+=r<e?u:-u,l<s-o||l>a+o)))return l}function eO(t,e){ie(t,n=>{const i=n.gc,r=i.length/2;let s;if(r>e){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function Ps(t){return t.drawTicks?t.tickLength:0}function H2(t,e){if(!t.display)return 0;const n=Ye(t.font,e),i=$t(t.padding);return(Oe(t.text)?t.text.length:1)*n.lineHeight+i.height}function tO(t,e){return rr(t,{scale:e,type:"scale"})}function nO(t,e,n){return rr(t,{tick:n,index:e,type:"tick"})}function iO(t,e,n){let i=Yg(t);return(n&&e!=="right"||!n&&e==="right")&&(i=QL(i)),i}function rO(t,e,n,i){const{top:r,left:s,bottom:a,right:o,chart:l}=t,{chartArea:u,scales:d}=l;let h=0,f,p,m;const y=a-r,k=o-s;if(t.isHorizontal()){if(p=Ke(i,s,o),ne(n)){const x=Object.keys(n)[0],v=n[x];m=d[x].getPixelForValue(v)+y-e}else n==="center"?m=(u.bottom+u.top)/2+y-e:m=B2(t,n,e);f=o-s}else{if(ne(n)){const x=Object.keys(n)[0],v=n[x];p=d[x].getPixelForValue(v)-k+e}else n==="center"?p=(u.left+u.right)/2-k+e:p=B2(t,n,e);m=Ke(i,a,r),h=n==="left"?-Wt:Wt}return{titleX:p,titleY:m,maxWidth:f,rotation:h}}class ls extends sr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return e=Jt(e,Number.POSITIVE_INFINITY),n=Jt(n,Number.NEGATIVE_INFINITY),i=Jt(i,Number.POSITIVE_INFINITY),r=Jt(r,Number.NEGATIVE_INFINITY),{min:Jt(e,i),max:Jt(n,r),minDefined:Dt(e),maxDefined:Dt(n)}}getMinMax(e){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),a;if(r&&s)return{min:n,max:i};const o=this.getMatchingVisibleMetas();for(let l=0,u=o.length;l<u;++l)a=o[l].controller.getMinMax(this,e),r||(n=Math.min(n,a.min)),s||(i=Math.max(i,a.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:Jt(n,Jt(i,n)),max:Jt(i,Jt(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ue(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:r,grace:s,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=jA(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?V2(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=KL(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ue(this.options.afterUpdate,[this])}beforeSetDimensions(){ue(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ue(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),ue(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ue(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i],s.label=ue(n.callback,[s.value,i,e],this)}afterTickToLabelConversion(){ue(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ue(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=N2(this.ticks.length,e.ticks.maxTicksLimit),r=n.minRotation||0,s=n.maxRotation;let a=r,o,l,u;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,p=At(this.chart.width-h,0,this.maxWidth);o=e.offset?this.maxWidth/i:p/(i-1),h+6>o&&(o=p/(i-(e.offset?.5:1)),l=this.maxHeight-Ps(e.grid)-n.padding-H2(e.title,this.chart.options.font),u=Math.sqrt(h*h+f*f),a=KM(Math.min(Math.asin(At((d.highest.height+6)/o,-1,1)),Math.asin(At(l/u,-1,1))-Math.asin(At(f/u,-1,1)))),a=Math.max(r,Math.min(s,a))),this.labelRotation=a}afterCalculateLabelRotation(){ue(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ue(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){const l=H2(r,n.options.font);if(o?(e.width=this.maxWidth,e.height=Ps(s)+l):(e.height=this.maxHeight,e.width=Ps(s)+l),i.display&&this.ticks.length){const{first:u,last:d,widest:h,highest:f}=this._getLabelSizes(),p=i.padding*2,m=$i(this.labelRotation),y=Math.cos(m),k=Math.sin(m);if(o){const x=i.mirror?0:k*h.width+y*f.height;e.height=Math.min(this.maxHeight,e.height+x+p)}else{const x=i.mirror?0:y*h.width+k*f.height;e.width=Math.min(this.maxWidth,e.width+x+p)}this._calculatePadding(u,d,k,y)}}this._handleMargins(),o?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,r){const{ticks:{align:s,padding:a},position:o}=this.options,l=this.labelRotation!==0,u=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,p=0;l?u?(f=r*e.width,p=i*n.height):(f=i*e.height,p=r*n.width):s==="start"?p=n.width:s==="end"?f=e.width:s!=="inner"&&(f=e.width/2,p=n.width/2),this.paddingLeft=Math.max((f-d+a)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+a)*this.width/(this.width-h),0)}else{let d=n.height/2,h=e.height/2;s==="start"?(d=0,h=e.height):s==="end"&&(d=n.height,h=0),this.paddingTop=d+a,this.paddingBottom=h+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ue(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)ve(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=V2(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:r,_longestTextCache:s}=this,a=[],o=[],l=Math.floor(n/N2(n,i));let u=0,d=0,h,f,p,m,y,k,x,v,b,w,j;for(h=0;h<n;h+=l){if(m=e[h].label,y=this._resolveTickFontOptions(h),r.font=k=y.string,x=s[k]=s[k]||{data:{},gc:[]},v=y.lineHeight,b=w=0,!ve(m)&&!Oe(m))b=x2(r,x.data,x.gc,b,m),w=v;else if(Oe(m))for(f=0,p=m.length;f<p;++f)j=m[f],!ve(j)&&!Oe(j)&&(b=x2(r,x.data,x.gc,b,j),w+=v);a.push(b),o.push(w),u=Math.max(b,u),d=Math.max(w,d)}eO(s,n);const C=a.indexOf(u),S=o.indexOf(d),P=E=>({width:a[E]||0,height:o[E]||0});return{first:P(0),last:P(n-1),widest:P(C),highest:P(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return XM(this._alignToPixels?ji(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=nO(this.getContext(),e,i))}return this.$context||(this.$context=tO(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=$i(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),a=e.autoSkipPadding||0,o=s?s.widest.width+a:0,l=s?s.highest.height+a:0;return this.isHorizontal()?l*i>o*r?o/i:l/r:l*r<o*i?l/i:o/r}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:a,border:o}=r,l=s.offset,u=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=Ps(s),p=[],m=o.setContext(this.getContext()),y=m.display?m.width:0,k=y/2,x=function(N){return ji(i,N,y)};let v,b,w,j,C,S,P,E,M,O,R,W;if(a==="top")v=x(this.bottom),S=this.bottom-f,E=v-k,O=x(e.top)+k,W=e.bottom;else if(a==="bottom")v=x(this.top),O=e.top,W=x(e.bottom)-k,S=v+k,E=this.top+f;else if(a==="left")v=x(this.right),C=this.right-f,P=v-k,M=x(e.left)+k,R=e.right;else if(a==="right")v=x(this.left),M=e.left,R=x(e.right)-k,C=v+k,P=this.left+f;else if(n==="x"){if(a==="center")v=x((e.top+e.bottom)/2+.5);else if(ne(a)){const N=Object.keys(a)[0],se=a[N];v=x(this.chart.scales[N].getPixelForValue(se))}O=e.top,W=e.bottom,S=v+k,E=S+f}else if(n==="y"){if(a==="center")v=x((e.left+e.right)/2);else if(ne(a)){const N=Object.keys(a)[0],se=a[N];v=x(this.chart.scales[N].getPixelForValue(se))}C=v-k,P=C-f,M=e.left,R=e.right}const Q=Y(r.ticks.maxTicksLimit,h),X=Math.max(1,Math.ceil(h/Q));for(b=0;b<h;b+=X){const N=this.getContext(b),se=s.setContext(N),L=o.setContext(N),D=se.lineWidth,$=se.color,F=L.dash||[],Z=L.dashOffset,pt=se.tickWidth,Me=se.tickColor,_t=se.tickBorderDash||[],be=se.tickBorderDashOffset;w=ZL(this,b,l),w!==void 0&&(j=ji(i,w,D),u?C=P=M=R=j:S=E=O=W=j,p.push({tx1:C,ty1:S,tx2:P,ty2:E,x1:M,y1:O,x2:R,y2:W,width:D,color:$,borderDash:F,borderDashOffset:Z,tickWidth:pt,tickColor:Me,tickBorderDash:_t,tickBorderDashOffset:be}))}return this._ticksLength=h,this._borderValue=v,p}_computeLabelItems(e){const n=this.axis,i=this.options,{position:r,ticks:s}=i,a=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:u,padding:d,mirror:h}=s,f=Ps(i.grid),p=f+d,m=h?-d:p,y=-$i(this.labelRotation),k=[];let x,v,b,w,j,C,S,P,E,M,O,R,W="middle";if(r==="top")C=this.bottom-m,S=this._getXAxisLabelAlignment();else if(r==="bottom")C=this.top+m,S=this._getXAxisLabelAlignment();else if(r==="left"){const X=this._getYAxisLabelAlignment(f);S=X.textAlign,j=X.x}else if(r==="right"){const X=this._getYAxisLabelAlignment(f);S=X.textAlign,j=X.x}else if(n==="x"){if(r==="center")C=(e.top+e.bottom)/2+p;else if(ne(r)){const X=Object.keys(r)[0],N=r[X];C=this.chart.scales[X].getPixelForValue(N)+p}S=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")j=(e.left+e.right)/2-p;else if(ne(r)){const X=Object.keys(r)[0],N=r[X];j=this.chart.scales[X].getPixelForValue(N)}S=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?W="top":l==="end"&&(W="bottom"));const Q=this._getLabelSizes();for(x=0,v=o.length;x<v;++x){b=o[x],w=b.label;const X=s.setContext(this.getContext(x));P=this.getPixelForTick(x)+s.labelOffset,E=this._resolveTickFontOptions(x),M=E.lineHeight,O=Oe(w)?w.length:1;const N=O/2,se=X.color,L=X.textStrokeColor,D=X.textStrokeWidth;let $=S;a?(j=P,S==="inner"&&(x===v-1?$=this.options.reverse?"left":"right":x===0?$=this.options.reverse?"right":"left":$="center"),r==="top"?u==="near"||y!==0?R=-O*M+M/2:u==="center"?R=-Q.highest.height/2-N*M+M:R=-Q.highest.height+M/2:u==="near"||y!==0?R=M/2:u==="center"?R=Q.highest.height/2-N*M:R=Q.highest.height-O*M,h&&(R*=-1),y!==0&&!X.showLabelBackdrop&&(j+=M/2*Math.sin(y))):(C=P,R=(1-O)*M/2);let F;if(X.showLabelBackdrop){const Z=$t(X.backdropPadding),pt=Q.heights[x],Me=Q.widths[x];let _t=R-Z.top,be=0-Z.left;switch(W){case"middle":_t-=pt/2;break;case"bottom":_t-=pt;break}switch(S){case"center":be-=Me/2;break;case"right":be-=Me;break;case"inner":x===v-1?be-=Me:x>0&&(be-=Me/2);break}F={left:be,top:_t,width:Me+Z.width,height:pt+Z.height,color:X.backdropColor}}k.push({label:w,font:E,textOffset:R,options:{rotation:y,color:se,strokeColor:L,strokeWidth:D,textAlign:$,textBaseline:W,translation:[j,C],backdrop:F}})}return k}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-$i(this.labelRotation))return e==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,a=this._getLabelSizes(),o=e+s,l=a.widest.width;let u,d;return n==="left"?r?(d=this.right+s,i==="near"?u="left":i==="center"?(u="center",d+=l/2):(u="right",d+=l)):(d=this.right-o,i==="near"?u="right":i==="center"?(u="center",d-=l/2):(u="left",d=this.left)):n==="right"?r?(d=this.left+s,i==="near"?u="right":i==="center"?(u="center",d-=l/2):(u="left",d-=l)):(d=this.left+o,i==="near"?u="left":i==="center"?(u="center",d+=l/2):(u="right",d=this.right)):u="right",{textAlign:u,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:r,width:s,height:a}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,r,s,a),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===e);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,a;const o=(l,u,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(u.x,u.y),i.stroke(),i.restore())};if(n.display)for(s=0,a=r.length;s<a;++s){const l=r[s];n.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:r}}=this,s=i.setContext(this.getContext()),a=i.display?s.width:0;if(!a)return;const o=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,d,h,f;this.isHorizontal()?(u=ji(e,this.left,a)-a/2,d=ji(e,this.right,o)+o/2,h=f=l):(h=ji(e,this.top,a)-a/2,f=ji(e,this.bottom,o)+o/2,u=d=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(u,h),n.lineTo(d,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&qg(i,r);const s=this.getLabelItems(e);for(const a of s){const o=a.options,l=a.font,u=a.label,d=a.textOffset;Ba(i,u,0,d,l,o)}r&&Jg(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=Ye(i.font),a=$t(i.padding),o=i.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||ne(n)?(l+=a.bottom,Oe(i.text)&&(l+=s.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:u,titleY:d,maxWidth:h,rotation:f}=rO(this,l,n,o);Ba(e,i.text,0,0,s,{color:i.color,maxWidth:h,rotation:f,textAlign:iO(o,n,r),textBaseline:"middle",translation:[u,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=Y(e.grid&&e.grid.z,-1),r=Y(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==ls.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:i,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,a;for(s=0,a=n.length;s<a;++s){const o=n[s];o[i]===this.id&&(!e||o.type===e)&&r.push(o)}return r}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Ye(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Uo{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;oO(n)&&(i=this.register(n));const r=this.items,s=e.id,a=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in r||(r[s]=e,sO(e,a,i),this.override&&je.override(e.id,e.overrides)),a}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,r=this.scope;i in n&&delete n[i],r&&i in je[r]&&(delete je[r][i],this.override&&delete Xi[i])}}function sO(t,e,n){const i=Da(Object.create(null),[n?je.get(n):{},je.get(e),t.defaults]);je.set(e,i),t.defaultRoutes&&aO(e,t.defaultRoutes),t.descriptors&&je.describe(e,t.descriptors)}function aO(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),a=e[n].split("."),o=a.pop(),l=a.join(".");je.route(s,r,l,o)})}function oO(t){return"id"in t&&"defaults"in t}class lO{constructor(){this.controllers=new Uo(sa,"datasets",!0),this.elements=new Uo(sr,"elements"),this.plugins=new Uo(Object,"plugins"),this.scales=new Uo(ls,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(e,s,r):ie(r,a=>{const o=i||this._getRegistryForType(a);this._exec(e,o,a)})})}_exec(e,n,i){const r=Kg(e);ue(i["before"+r],[],i),n[e](i),ue(i["after"+r],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const r=n.get(e);if(r===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return r}}var tn=new lO;class cO{constructor(){this._init=[]}notify(e,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(s,e,n,i);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),a}_notify(e,n,i,r){r=r||{};for(const s of e){const a=s.plugin,o=a[i],l=[n,r,s.options];if(ue(o,l,a)===!1&&r.cancelable)return!1}return!0}invalidate(){ve(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,r=Y(i.options&&i.options.plugins,{}),s=uO(i);return r===!1&&!n?[]:hO(e,s,r,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,r=(s,a)=>s.filter(o=>!a.some(l=>o.plugin.id===l.plugin.id));this._notify(r(n,i),e,"stop"),this._notify(r(i,n),e,"start")}}function uO(t){const e={},n=[],i=Object.keys(tn.plugins.items);for(let s=0;s<i.length;s++)n.push(tn.getPlugin(i[s]));const r=t.plugins||[];for(let s=0;s<r.length;s++){const a=r[s];n.indexOf(a)===-1&&(n.push(a),e[a.id]=!0)}return{plugins:n,localIds:e}}function dO(t,e){return!e&&t===!1?null:t===!0?{}:t}function hO(t,{plugins:e,localIds:n},i,r){const s=[],a=t.getContext();for(const o of e){const l=o.id,u=dO(i[l],r);u!==null&&s.push({plugin:o,options:fO(t.config,{plugin:o,local:n[l]},u,a)})}return s}function fO(t,{plugin:e,local:n},i,r){const s=t.pluginScopeKeys(e),a=t.getOptionScopes(i,s);return n&&e.defaults&&a.push(e.defaults),t.createResolver(a,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function cp(t,e){const n=je.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function pO(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function gO(t,e){return t===e?"_index_":"_value_"}function U2(t){if(t==="x"||t==="y"||t==="r")return t}function mO(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function up(t,...e){if(U2(t))return t;for(const n of e){const i=n.axis||mO(n.position)||t.length>1&&U2(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function W2(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function yO(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return W2(t,"x",n[0])||W2(t,"y",n[0])}return{}}function vO(t,e){const n=Xi[t.type]||{scales:{}},i=e.scales||{},r=cp(t.type,e),s=Object.create(null);return Object.keys(i).forEach(a=>{const o=i[a];if(!ne(o))return console.error(`Invalid scale configuration for scale: ${a}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=up(a,o,yO(a,t),je.scales[o.type]),u=gO(l,r),d=n.scales||{};s[a]=ea(Object.create(null),[{axis:l},o,d[l],d[u]])}),t.data.datasets.forEach(a=>{const o=a.type||t.type,l=a.indexAxis||cp(o,e),d=(Xi[o]||{}).scales||{};Object.keys(d).forEach(h=>{const f=pO(h,l),p=a[f+"AxisID"]||f;s[p]=s[p]||Object.create(null),ea(s[p],[{axis:f},i[p],d[h]])})}),Object.keys(s).forEach(a=>{const o=s[a];ea(o,[je.scales[o.type],je.scale])}),s}function dw(t){const e=t.options||(t.options={});e.plugins=Y(e.plugins,{}),e.scales=vO(t,e)}function hw(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function xO(t){return t=t||{},t.data=hw(t.data),dw(t),t}const K2=new Map,fw=new Set;function Wo(t,e){let n=K2.get(t);return n||(n=e(),K2.set(t,n),fw.add(n)),n}const Cs=(t,e,n)=>{const i=Vc(e,n);i!==void 0&&t.add(i)};class bO{constructor(e){this._config=xO(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=hw(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),dw(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Wo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Wo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Wo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return Wo(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let r=i.get(e);return(!r||n)&&(r=new Map,i.set(e,r)),r}getOptionScopes(e,n,i){const{options:r,type:s}=this,a=this._cachedScopes(e,i),o=a.get(n);if(o)return o;const l=new Set;n.forEach(d=>{e&&(l.add(e),d.forEach(h=>Cs(l,e,h))),d.forEach(h=>Cs(l,r,h)),d.forEach(h=>Cs(l,Xi[s]||{},h)),d.forEach(h=>Cs(l,je,h)),d.forEach(h=>Cs(l,ap,h))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),fw.has(n)&&a.set(n,u),u}chartOptionScopes(){const{options:e,type:n}=this;return[e,Xi[n]||{},je.datasets[n]||{},{type:n},je,ap]}resolveNamedOptions(e,n,i,r=[""]){const s={$shared:!0},{resolver:a,subPrefixes:o}=G2(this._resolverCache,e,r);let l=a;if(wO(a,n)){s.$shared=!1,i=di(i)?i():i;const u=this.createResolver(e,i,o);l=Qr(a,i,u)}for(const u of n)s[u]=l[u];return s}createResolver(e,n,i=[""],r){const{resolver:s}=G2(this._resolverCache,e,i);return ne(n)?Qr(s,n,void 0,r):s}}function G2(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);return s||(s={resolver:Qg(e,n),subPrefixes:n.filter(o=>!o.toLowerCase().includes("hover"))},i.set(r,s)),s}const kO=t=>ne(t)&&Object.getOwnPropertyNames(t).some(e=>di(t[e]));function wO(t,e){const{isScriptable:n,isIndexable:i}=qk(t);for(const r of e){const s=n(r),a=i(r),o=(a||s)&&t[r];if(s&&(di(o)||kO(o))||a&&Oe(o))return!0}return!1}var jO="4.4.6";const _O=["top","bottom","left","right","chartArea"];function Y2(t,e){return t==="top"||t==="bottom"||_O.indexOf(t)===-1&&e==="x"}function X2(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function q2(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ue(n&&n.onComplete,[t],e)}function SO(t){const e=t.chart,n=e.options.animation;ue(n&&n.onProgress,[t],e)}function pw(t){return tm()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Jl={},J2=t=>{const e=pw(t);return Object.values(Jl).filter(n=>n.canvas===e).pop()};function PO(t,e,n){const i=Object.keys(t);for(const r of i){const s=+r;if(s>=e){const a=t[r];delete t[r],(n>0||s>e)&&(t[s+n]=a)}}}function CO(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Ko(t,e,n){return t.options.clip?t[n]:e[n]}function TO(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:Ko(n,e,"left"),right:Ko(n,e,"right"),top:Ko(i,e,"top"),bottom:Ko(i,e,"bottom")}:e}var zn;let Iu=(zn=class{static register(...e){tn.add(...e),Q2()}static unregister(...e){tn.remove(...e),Q2()}constructor(e,n){const i=this.config=new bO(n),r=pw(e),s=J2(r);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const a=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||WL(r)),this.platform.updateConfig(i);const o=this.platform.acquireContext(r,a.aspectRatio),l=o&&o.canvas,u=l&&l.height,d=l&&l.width;if(this.id=zM(),this.ctx=o,this.canvas=l,this.width=d,this.height=u,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new cO,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=eA(h=>this.update(h),a.resizeDelay||0),this._dataChanges=[],Jl[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}fn.listen(this,"complete",q2),fn.listen(this,"progress",SO),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:r,_aspectRatio:s}=this;return ve(e)?n&&s?s:r?i/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return tn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():j2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return b2(this.canvas,this.ctx),this}stop(){return fn.stop(this),this}resize(e,n){fn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,r=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,n,s),o=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,j2(this,o,!0)&&(this.notifyPlugins("resize",{size:a}),ue(i.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ie(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,r=Object.keys(i).reduce((a,o)=>(a[o]=!1,a),{});let s=[];n&&(s=s.concat(Object.keys(n).map(a=>{const o=n[a],l=up(a,o),u=l==="r",d=l==="x";return{options:o,dposition:u?"chartArea":d?"bottom":"left",dtype:u?"radialLinear":d?"category":"linear"}}))),ie(s,a=>{const o=a.options,l=o.id,u=up(l,o),d=Y(o.type,a.dtype);(o.position===void 0||Y2(o.position,u)!==Y2(a.dposition))&&(o.position=a.dposition),r[l]=!0;let h=null;if(l in i&&i[l].type===d)h=i[l];else{const f=tn.getScale(d);h=new f({id:l,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(o,e)}),ie(r,(a,o)=>{a||delete i[o]}),ie(i,a=>{Lt.configure(this,a,a.options),Lt.addBox(this,a)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((r,s)=>r.index-s.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(X2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,r)=>{n.filter(s=>s===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const s=n[i];let a=this.getDatasetMeta(i);const o=s.type||this.config.type;if(a.type&&a.type!==o&&(this._destroyDatasetMeta(i),a=this.getDatasetMeta(i)),a.type=o,a.indexAxis=s.indexAxis||cp(o,this.options),a.order=s.order||0,a.index=i,a.label=""+s.label,a.visible=this.isDatasetVisible(i),a.controller)a.controller.updateIndex(i),a.controller.linkScales();else{const l=tn.getController(o),{datasetElementType:u,dataElementType:d}=je.datasets[o];Object.assign(l,{dataElementType:tn.getElement(d),datasetElementType:u&&tn.getElement(u)}),a.controller=new l(this,i),e.push(a.controller)}}return this._updateMetasets(),e}_resetElements(){ie(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let u=0,d=this.data.datasets.length;u<d;u++){const{controller:h}=this.getDatasetMeta(u),f=!r&&s.indexOf(h)===-1;h.buildOrUpdateElements(f),a=Math.max(+h.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),r||ie(s,u=>{u.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(X2("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){ie(this.scales,e=>{Lt.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!u2(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:s}of n){const a=i==="_removeElements"?-s:s;PO(e,r,a)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=s=>new Set(e.filter(a=>a[0]===s).map((a,o)=>o+","+a.splice(1).join(","))),r=i(0);for(let s=1;s<n;s++)if(!u2(r,i(s)))return;return Array.from(r).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Lt.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],ie(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,s)=>{r._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,di(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),r={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(fn.has(this)?this.attached&&!fn.running(this)&&fn.start(this):(this.draw(),q2({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let r,s;for(r=0,s=n.length;r<s;++r){const a=n[r];(!e||a.visible)&&i.push(a)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,r=!i.disabled,s=TO(e,this.chartArea),a={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(r&&qg(n,{left:i.left===!1?0:s.left-i.left,right:i.right===!1?this.width:s.right+i.right,top:i.top===!1?0:s.top-i.top,bottom:i.bottom===!1?this.height:s.bottom+i.bottom}),e.controller.draw(),r&&Jg(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(e){return Fa(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,r){const s=_L.modes[n];return typeof s=="function"?s(this,e,i,r):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let r=i.filter(s=>s&&s._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=rr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const r=i?"show":"hide",s=this.getDatasetMeta(e),a=s.controller._resolveAnimations(void 0,r);Hc(n)?(s.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),a.update(s,{visible:i}),this.update(o=>o.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),fn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),b2(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Jl[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(s,a)=>{n.addEventListener(this,s,a),e[s]=a},r=(s,a,o)=>{s.offsetX=a,s.offsetY=o,this._eventHandler(s)};ie(this.options.events,s=>i(s,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,u)=>{n.addEventListener(this,l,u),e[l]=u},r=(l,u)=>{e[l]&&(n.removeEventListener(this,l,u),delete e[l])},s=(l,u)=>{this.canvas&&this.resize(l,u)};let a;const o=()=>{r("attach",o),this.attached=!0,this.resize(),i("resize",s),i("detach",a)};a=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),i("attach",o)},n.isAttached(this.canvas)?o():a()}unbindEvents(){ie(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},ie(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const r=i?"set":"remove";let s,a,o,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+r+"DatasetHoverStyle"]()),o=0,l=e.length;o<l;++o){a=e[o];const u=a&&this.getDatasetMeta(a.datasetIndex).controller;u&&u[r+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:s,index:a})=>{const o=this.getDatasetMeta(s);if(!o)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:o.data[a],index:a}});!Bc(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const r=this.options.hover,s=(l,u)=>l.filter(d=>!u.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),a=s(n,e),o=i?e:s(e,n);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=a=>(a.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const s=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(s||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:r=[],options:s}=this,a=n,o=this._getActiveElements(e,r,i,a),l=BM(e),u=CO(e,this._lastEvent,i,l);i&&(this._lastEvent=null,ue(s.onHover,[e,o,this],this),l&&ue(s.onClick,[e,o,this],this));const d=!Bc(o,r);return(d||n)&&(this._active=o,this._updateHoverStyles(o,r,n)),this._lastEvent=u,d}_getActiveElements(e,n,i,r){if(e.type==="mouseout")return[];if(!i)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,r)}},V(zn,"defaults",je),V(zn,"instances",Jl),V(zn,"overrides",Xi),V(zn,"registry",tn),V(zn,"version",jO),V(zn,"getChart",J2),zn);function Q2(){return ie(Iu.instances,t=>t._plugins.invalidate())}function gw(t,e,n=e){t.lineCap=Y(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Y(n.borderDash,e.borderDash)),t.lineDashOffset=Y(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Y(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Y(n.borderWidth,e.borderWidth),t.strokeStyle=Y(n.borderColor,e.borderColor)}function EO(t,e,n){t.lineTo(n.x,n.y)}function MO(t){return t.stepped?fA:t.tension||t.cubicInterpolationMode==="monotone"?pA:EO}function mw(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:a,end:o}=e,l=Math.max(r,a),u=Math.min(s,o),d=r<a&&s<a||r>o&&s>o;return{count:i,start:l,loop:e.loop,ilen:u<l&&!d?i+u-l:u-l}}function AO(t,e,n,i){const{points:r,options:s}=e,{count:a,start:o,loop:l,ilen:u}=mw(r,n,i),d=MO(s);let{move:h=!0,reverse:f}=i||{},p,m,y;for(p=0;p<=u;++p)m=r[(o+(f?u-p:p))%a],!m.skip&&(h?(t.moveTo(m.x,m.y),h=!1):d(t,y,m,f,s.stepped),y=m);return l&&(m=r[(o+(f?u:0))%a],d(t,y,m,f,s.stepped)),!!l}function LO(t,e,n,i){const r=e.points,{count:s,start:a,ilen:o}=mw(r,n,i),{move:l=!0,reverse:u}=i||{};let d=0,h=0,f,p,m,y,k,x;const v=w=>(a+(u?o-w:w))%s,b=()=>{y!==k&&(t.lineTo(d,k),t.lineTo(d,y),t.lineTo(d,x))};for(l&&(p=r[v(0)],t.moveTo(p.x,p.y)),f=0;f<=o;++f){if(p=r[v(f)],p.skip)continue;const w=p.x,j=p.y,C=w|0;C===m?(j<y?y=j:j>k&&(k=j),d=(h*d+w)/++h):(b(),t.lineTo(w,j),m=C,h=0,y=k=j),x=j}b()}function dp(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?LO:AO}function OO(t){return t.stepped?GA:t.tension||t.cubicInterpolationMode==="monotone"?YA:Li}function zO(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),gw(t,e.options),t.stroke(r)}function IO(t,e,n,i){const{segments:r,options:s}=e,a=dp(e);for(const o of r)gw(t,s,o.style),t.beginPath(),a(t,e,o,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const RO=typeof Path2D=="function";function DO(t,e,n,i){RO&&!e.options.segment?zO(t,e,n,i):IO(t,e,n,i)}class Ds extends sr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;FA(this._points,i,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=nL(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,r=e[n],s=this.points,a=ZA(this,{property:n,start:r,end:r});if(!a.length)return;const o=[],l=OO(i);let u,d;for(u=0,d=a.length;u<d;++u){const{start:h,end:f}=a[u],p=s[h],m=s[f];if(p===m){o.push(p);continue}const y=Math.abs((r-p[n])/(m[n]-p[n])),k=l(p,m,y,i.stepped);k[n]=e[n],o.push(k)}return o.length===1?o[0]:o}pathSegment(e,n,i){return dp(this)(e,this,n,i)}path(e,n,i){const r=this.segments,s=dp(this);let a=this._loop;n=n||0,i=i||this.points.length-n;for(const o of r)a&=s(e,this,o,{start:n,end:n+i-1});return!!a}draw(e,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),DO(e,this,i,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}V(Ds,"id","line"),V(Ds,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),V(Ds,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),V(Ds,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Z2(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}class Ql extends sr{constructor(n){super();V(this,"parsed");V(this,"skip");V(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const s=this.options,{x:a,y:o}=this.getProps(["x","y"],r);return Math.pow(n-a,2)+Math.pow(i-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,i){return Z2(this,n,"x",i)}inYRange(n,i){return Z2(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!Fa(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,op(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}V(Ql,"id","point"),V(Ql,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),V(Ql,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const ey=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},$O=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class ty extends sr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=ue(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,r)=>e.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,r=Ye(i.font),s=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=ey(i,s);let u,d;n.font=r.string,this.isHorizontal()?(u=this.maxWidth,d=this._fitRows(a,s,o,l)+10):(d=this.maxHeight,u=this._fitCols(a,r,o,l)+10),this.width=Math.min(u,e.maxWidth||this.maxWidth),this.height=Math.min(d,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,r){const{ctx:s,maxWidth:a,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],d=r+o;let h=e;s.textAlign="left",s.textBaseline="middle";let f=-1,p=-d;return this.legendItems.forEach((m,y)=>{const k=i+n/2+s.measureText(m.text).width;(y===0||u[u.length-1]+k+2*o>a)&&(h+=d,u[u.length-(y>0?0:1)]=0,p+=d,f++),l[y]={left:0,top:p,row:f,width:k,height:r},u[u.length-1]+=k+o}),h}_fitCols(e,n,i,r){const{ctx:s,maxHeight:a,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],d=a-e;let h=o,f=0,p=0,m=0,y=0;return this.legendItems.forEach((k,x)=>{const{itemWidth:v,itemHeight:b}=FO(i,n,s,k,r);x>0&&p+b+2*o>d&&(h+=f+o,u.push({width:f,height:p}),m+=f+o,y++,f=p=0),l[x]={left:m,top:p,col:y,width:v,height:b},f=Math.max(f,v),p+=b+o}),h+=f,u.push({width:f,height:p}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:s}}=this,a=Dr(s,this.left,this.width);if(this.isHorizontal()){let o=0,l=Ke(i,this.left+r,this.right-this.lineWidths[o]);for(const u of n)o!==u.row&&(o=u.row,l=Ke(i,this.left+r,this.right-this.lineWidths[o])),u.top+=this.top+e+r,u.left=a.leftForLtr(a.x(l),u.width),l+=u.width+r}else{let o=0,l=Ke(i,this.top+e+r,this.bottom-this.columnSizes[o].height);for(const u of n)u.col!==o&&(o=u.col,l=Ke(i,this.top+e+r,this.bottom-this.columnSizes[o].height)),u.top=l,u.left+=this.left+r,u.left=a.leftForLtr(a.x(u.left),u.width),l+=u.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;qg(e,this),this._draw(),Jg(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:r}=this,{align:s,labels:a}=e,o=je.color,l=Dr(e.rtl,this.left,this.width),u=Ye(a.font),{padding:d}=a,h=u.size,f=h/2;let p;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=u.string;const{boxWidth:m,boxHeight:y,itemHeight:k}=ey(a,h),x=function(C,S,P){if(isNaN(m)||m<=0||isNaN(y)||y<0)return;r.save();const E=Y(P.lineWidth,1);if(r.fillStyle=Y(P.fillStyle,o),r.lineCap=Y(P.lineCap,"butt"),r.lineDashOffset=Y(P.lineDashOffset,0),r.lineJoin=Y(P.lineJoin,"miter"),r.lineWidth=E,r.strokeStyle=Y(P.strokeStyle,o),r.setLineDash(Y(P.lineDash,[])),a.usePointStyle){const M={radius:y*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:E},O=l.xPlus(C,m/2),R=S+f;Yk(r,M,O,R,a.pointStyleWidth&&m)}else{const M=S+Math.max((h-y)/2,0),O=l.leftForLtr(C,m),R=ra(P.borderRadius);r.beginPath(),Object.values(R).some(W=>W!==0)?lp(r,{x:O,y:M,w:m,h:y,radius:R}):r.rect(O,M,m,y),r.fill(),E!==0&&r.stroke()}r.restore()},v=function(C,S,P){Ba(r,P.text,C,S+k/2,u,{strikethrough:P.hidden,textAlign:l.textAlign(P.textAlign)})},b=this.isHorizontal(),w=this._computeTitleHeight();b?p={x:Ke(s,this.left+d,this.right-i[0]),y:this.top+d+w,line:0}:p={x:this.left+d,y:Ke(s,this.top+w+d,this.bottom-n[0].height),line:0},tw(this.ctx,e.textDirection);const j=k+d;this.legendItems.forEach((C,S)=>{r.strokeStyle=C.fontColor,r.fillStyle=C.fontColor;const P=r.measureText(C.text).width,E=l.textAlign(C.textAlign||(C.textAlign=a.textAlign)),M=m+f+P;let O=p.x,R=p.y;l.setWidth(this.width),b?S>0&&O+M+d>this.right&&(R=p.y+=j,p.line++,O=p.x=Ke(s,this.left+d,this.right-i[p.line])):S>0&&R+j>this.bottom&&(O=p.x=O+n[p.line].width+d,p.line++,R=p.y=Ke(s,this.top+w+d,this.bottom-n[p.line].height));const W=l.x(O);if(x(W,R,C),O=tA(E,O+m+f,b?O+M:this.right,e.rtl),v(l.x(O),R,C),b)p.x+=M+d;else if(typeof C.text!="string"){const Q=u.lineHeight;p.y+=yw(C,Q)+d}else p.y+=j}),nw(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Ye(n.font),r=$t(n.padding);if(!n.display)return;const s=Dr(e.rtl,this.left,this.width),a=this.ctx,o=n.position,l=i.size/2,u=r.top+l;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+u,h=Ke(e.align,h,this.right-f);else{const m=this.columnSizes.reduce((y,k)=>Math.max(y,k.height),0);d=u+Ke(e.align,this.top,this.bottom-m-e.labels.padding-this._computeTitleHeight())}const p=Ke(o,h,h+f);a.textAlign=s.textAlign(Yg(o)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=i.string,Ba(a,n.text,p,d,i)}_computeTitleHeight(){const e=this.options.title,n=Ye(e.font),i=$t(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,r,s;if(Is(e,this.left,this.right)&&Is(n,this.top,this.bottom)){for(s=this.legendHitBoxes,i=0;i<s.length;++i)if(r=s[i],Is(e,r.left,r.left+r.width)&&Is(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!VO(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const r=this._hoveredItem,s=$O(r,i);r&&!s&&ue(n.onLeave,[e,r,this],this),this._hoveredItem=i,i&&!s&&ue(n.onHover,[e,i,this],this)}else i&&ue(n.onClick,[e,i,this],this)}}function FO(t,e,n,i,r){const s=BO(i,t,e,n),a=NO(r,i,e.lineHeight);return{itemWidth:s,itemHeight:a}}function BO(t,e,n,i){let r=t.text;return r&&typeof r!="string"&&(r=r.reduce((s,a)=>s.length>a.length?s:a)),e+n.size/2+i.measureText(r).width}function NO(t,e,n){let i=t;return typeof e.text!="string"&&(i=yw(e,n)),i}function yw(t,e){const n=t.text?t.text.length:0;return e*n}function VO(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var HO={id:"legend",_element:ty,start(t,e,n){const i=t.legend=new ty({ctx:t.ctx,options:n,chart:t});Lt.configure(t,i,n),Lt.addBox(t,i)},stop(t){Lt.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Lt.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:s,useBorderRadius:a,borderRadius:o}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(n?0:void 0),d=$t(u.borderWidth);return{text:e[l.index].label,fillStyle:u.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:u.borderColor,pointStyle:i||u.pointStyle,rotation:u.rotation,textAlign:r||u.textAlign,borderRadius:a&&(o||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};let vw=class extends sr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const r=Oe(i.text)?i.text.length:1;this._padding=$t(i.padding);const s=r*Ye(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:r,right:s,options:a}=this,o=a.align;let l=0,u,d,h;return this.isHorizontal()?(d=Ke(o,i,s),h=n+e,u=s-i):(a.position==="left"?(d=i+e,h=Ke(o,r,n),l=Re*-.5):(d=s-e,h=Ke(o,n,r),l=Re*.5),u=r-n),{titleX:d,titleY:h,maxWidth:u,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Ye(n.font),s=i.lineHeight/2+this._padding.top,{titleX:a,titleY:o,maxWidth:l,rotation:u}=this._drawArgs(s);Ba(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:u,textAlign:Yg(n.align),textBaseline:"middle",translation:[a,o]})}};function UO(t,e){const n=new vw({ctx:t.ctx,options:e,chart:t});Lt.configure(t,n,e),Lt.addBox(t,n),t.titleBlock=n}var WO={id:"title",_element:vw,start(t,e,n){UO(t,n)},stop(t){const e=t.titleBlock;Lt.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Lt.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const $s={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,s=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const l=o.tooltipPosition();i.add(l.x),r+=l.y,++s}}return s===0||i.size===0?!1:{x:[...i].reduce((o,l)=>o+l)/i.size,y:r/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,r=Number.POSITIVE_INFINITY,s,a,o;for(s=0,a=t.length;s<a;++s){const l=t[s].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),d=sp(e,u);d<r&&(r=d,o=l)}}if(o){const l=o.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Zt(t,e){return e&&(Oe(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function pn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function KO(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:a,value:o}=s.getLabelAndValue(r);return{chart:t,label:a,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:o,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function ny(t,e){const n=t.chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:a,boxHeight:o}=e,l=Ye(e.bodyFont),u=Ye(e.titleFont),d=Ye(e.footerFont),h=s.length,f=r.length,p=i.length,m=$t(e.padding);let y=m.height,k=0,x=i.reduce((w,j)=>w+j.before.length+j.lines.length+j.after.length,0);if(x+=t.beforeBody.length+t.afterBody.length,h&&(y+=h*u.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),x){const w=e.displayColors?Math.max(o,l.lineHeight):l.lineHeight;y+=p*w+(x-p)*l.lineHeight+(x-1)*e.bodySpacing}f&&(y+=e.footerMarginTop+f*d.lineHeight+(f-1)*e.footerSpacing);let v=0;const b=function(w){k=Math.max(k,n.measureText(w).width+v)};return n.save(),n.font=u.string,ie(t.title,b),n.font=l.string,ie(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?a+2+e.boxPadding:0,ie(i,w=>{ie(w.before,b),ie(w.lines,b),ie(w.after,b)}),v=0,n.font=d.string,ie(t.footer,b),n.restore(),k+=m.width,{width:k,height:y}}function GO(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function YO(t,e,n,i){const{x:r,width:s}=i,a=n.caretSize+n.caretPadding;if(t==="left"&&r+s+a>e.width||t==="right"&&r-s-a<0)return!0}function XO(t,e,n,i){const{x:r,width:s}=n,{width:a,chartArea:{left:o,right:l}}=t;let u="center";return i==="center"?u=r<=(o+l)/2?"left":"right":r<=s/2?u="left":r>=a-s/2&&(u="right"),YO(u,t,e,n)&&(u="center"),u}function iy(t,e,n){const i=n.yAlign||e.yAlign||GO(t,n);return{xAlign:n.xAlign||e.xAlign||XO(t,e,n,i),yAlign:i}}function qO(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function JO(t,e,n){let{y:i,height:r}=t;return e==="top"?i+=n:e==="bottom"?i-=r+n:i-=r/2,i}function ry(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:a}=t,{xAlign:o,yAlign:l}=n,u=r+s,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:p}=ra(a);let m=qO(e,o);const y=JO(e,l,u);return l==="center"?o==="left"?m+=u:o==="right"&&(m-=u):o==="left"?m-=Math.max(d,f)+r:o==="right"&&(m+=Math.max(h,p)+r),{x:At(m,0,i.width-e.width),y:At(y,0,i.height-e.height)}}function Go(t,e,n){const i=$t(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function sy(t){return Zt([],pn(t))}function QO(t,e,n){return rr(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function ay(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const xw={beforeTitle:dn,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:dn,beforeBody:dn,beforeLabel:dn,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return ve(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:dn,afterBody:dn,beforeFooter:dn,footer:dn,afterFooter:dn};function nt(t,e,n,i){const r=t[e].call(n,i);return typeof r>"u"?xw[e].call(n,i):r}class hp extends sr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new rw(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=QO(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,r=nt(i,"beforeTitle",this,e),s=nt(i,"title",this,e),a=nt(i,"afterTitle",this,e);let o=[];return o=Zt(o,pn(r)),o=Zt(o,pn(s)),o=Zt(o,pn(a)),o}getBeforeBody(e,n){return sy(nt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,r=[];return ie(e,s=>{const a={before:[],lines:[],after:[]},o=ay(i,s);Zt(a.before,pn(nt(o,"beforeLabel",this,s))),Zt(a.lines,nt(o,"label",this,s)),Zt(a.after,pn(nt(o,"afterLabel",this,s))),r.push(a)}),r}getAfterBody(e,n){return sy(nt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,r=nt(i,"beforeFooter",this,e),s=nt(i,"footer",this,e),a=nt(i,"afterFooter",this,e);let o=[];return o=Zt(o,pn(r)),o=Zt(o,pn(s)),o=Zt(o,pn(a)),o}_createItems(e){const n=this._active,i=this.chart.data,r=[],s=[],a=[];let o=[],l,u;for(l=0,u=n.length;l<u;++l)o.push(KO(this.chart,n[l]));return e.filter&&(o=o.filter((d,h,f)=>e.filter(d,h,f,i))),e.itemSort&&(o=o.sort((d,h)=>e.itemSort(d,h,i))),ie(o,d=>{const h=ay(e.callbacks,d);r.push(nt(h,"labelColor",this,d)),s.push(nt(h,"labelPointStyle",this,d)),a.push(nt(h,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=a,this.dataPoints=o,o}update(e,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,a=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const o=$s[i.position].call(this,r,this._eventPosition);a=this._createItems(i),this.title=this.getTitle(a,i),this.beforeBody=this.getBeforeBody(a,i),this.body=this.getBody(a,i),this.afterBody=this.getAfterBody(a,i),this.footer=this.getFooter(a,i);const l=this._size=ny(this,i),u=Object.assign({},o,l),d=iy(this.chart,i,u),h=ry(i,u,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,s={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=a,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,r){const s=this.getCaretPosition(e,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:a,cornerRadius:o}=i,{topLeft:l,topRight:u,bottomLeft:d,bottomRight:h}=ra(o),{x:f,y:p}=e,{width:m,height:y}=n;let k,x,v,b,w,j;return s==="center"?(w=p+y/2,r==="left"?(k=f,x=k-a,b=w+a,j=w-a):(k=f+m,x=k+a,b=w-a,j=w+a),v=k):(r==="left"?x=f+Math.max(l,d)+a:r==="right"?x=f+m-Math.max(u,h)-a:x=this.caretX,s==="top"?(b=p,w=b-a,k=x-a,v=x+a):(b=p+y,w=b+a,k=x+a,v=x-a),j=b),{x1:k,x2:x,x3:v,y1:b,y2:w,y3:j}}drawTitle(e,n,i){const r=this.title,s=r.length;let a,o,l;if(s){const u=Dr(i.rtl,this.x,this.width);for(e.x=Go(this,i.titleAlign,i),n.textAlign=u.textAlign(i.titleAlign),n.textBaseline="middle",a=Ye(i.titleFont),o=i.titleSpacing,n.fillStyle=i.titleColor,n.font=a.string,l=0;l<s;++l)n.fillText(r[l],u.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,l+1===s&&(e.y+=i.titleMarginBottom-o)}}_drawColorBox(e,n,i,r,s){const a=this.labelColors[i],o=this.labelPointStyles[i],{boxHeight:l,boxWidth:u}=s,d=Ye(s.bodyFont),h=Go(this,"left",s),f=r.x(h),p=l<d.lineHeight?(d.lineHeight-l)/2:0,m=n.y+p;if(s.usePointStyle){const y={radius:Math.min(u,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},k=r.leftForLtr(f,u)+u/2,x=m+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,op(e,y,k,x),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,op(e,y,k,x)}else{e.lineWidth=ne(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;const y=r.leftForLtr(f,u),k=r.leftForLtr(r.xPlus(f,1),u-2),x=ra(a.borderRadius);Object.values(x).some(v=>v!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,lp(e,{x:y,y:m,w:u,h:l,radius:x}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),lp(e,{x:k,y:m+1,w:u-2,h:l-2,radius:x}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(y,m,u,l),e.strokeRect(y,m,u,l),e.fillStyle=a.backgroundColor,e.fillRect(k,m+1,u-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:a,displayColors:o,boxHeight:l,boxWidth:u,boxPadding:d}=i,h=Ye(i.bodyFont);let f=h.lineHeight,p=0;const m=Dr(i.rtl,this.x,this.width),y=function(P){n.fillText(P,m.x(e.x+p),e.y+f/2),e.y+=f+s},k=m.textAlign(a);let x,v,b,w,j,C,S;for(n.textAlign=a,n.textBaseline="middle",n.font=h.string,e.x=Go(this,k,i),n.fillStyle=i.bodyColor,ie(this.beforeBody,y),p=o&&k!=="right"?a==="center"?u/2+d:u+2+d:0,w=0,C=r.length;w<C;++w){for(x=r[w],v=this.labelTextColors[w],n.fillStyle=v,ie(x.before,y),b=x.lines,o&&b.length&&(this._drawColorBox(n,e,w,m,i),f=Math.max(h.lineHeight,l)),j=0,S=b.length;j<S;++j)y(b[j]),f=h.lineHeight;ie(x.after,y)}p=0,f=h.lineHeight,ie(this.afterBody,y),e.y-=s}drawFooter(e,n,i){const r=this.footer,s=r.length;let a,o;if(s){const l=Dr(i.rtl,this.x,this.width);for(e.x=Go(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",a=Ye(i.footerFont),n.fillStyle=i.footerColor,n.font=a.string,o=0;o<s;++o)n.fillText(r[o],l.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+i.footerSpacing}}drawBackground(e,n,i,r){const{xAlign:s,yAlign:a}=this,{x:o,y:l}=e,{width:u,height:d}=i,{topLeft:h,topRight:f,bottomLeft:p,bottomRight:m}=ra(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(o+h,l),a==="top"&&this.drawCaret(e,n,i,r),n.lineTo(o+u-f,l),n.quadraticCurveTo(o+u,l,o+u,l+f),a==="center"&&s==="right"&&this.drawCaret(e,n,i,r),n.lineTo(o+u,l+d-m),n.quadraticCurveTo(o+u,l+d,o+u-m,l+d),a==="bottom"&&this.drawCaret(e,n,i,r),n.lineTo(o+p,l+d),n.quadraticCurveTo(o,l+d,o,l+d-p),a==="center"&&s==="left"&&this.drawCaret(e,n,i,r),n.lineTo(o,l+h),n.quadraticCurveTo(o,l,o+h,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const a=$s[e.position].call(this,this._active,this._eventPosition);if(!a)return;const o=this._size=ny(this,e),l=Object.assign({},a,this._size),u=iy(n,e,l),d=ry(e,l,u,n);(r._to!==d.x||s._to!==d.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=o.width,this.height=o.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const a=$t(n.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&o&&(e.save(),e.globalAlpha=i,this.drawBackground(s,e,r,n),tw(e,n.textDirection),s.y+=a.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),nw(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,r=e.map(({datasetIndex:o,index:l})=>{const u=this.chart.getDatasetMeta(o);if(!u)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:u.data[l],index:l}}),s=!Bc(i,r),a=this._positionChanged(r,n);(s||a)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],a=this._getActiveElements(e,s,n,i),o=this._positionChanged(a,e),l=n||!Bc(a,s)||o;return l&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,r){const s=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const a=this.chart.getElementsAtEventForMode(e,s.mode,s,i);return s.reverse&&a.reverse(),a}_positionChanged(e,n){const{caretX:i,caretY:r,options:s}=this,a=$s[s.position].call(this,e,n);return a!==!1&&(i!==a.x||r!==a.y)}}V(hp,"positioners",$s);var ZO={id:"tooltip",_element:hp,positioners:$s,afterInit(t,e,n){n&&(t.tooltip=new hp({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:xw},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const ez=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function tz(t,e,n,i){const r=t.indexOf(e);if(r===-1)return ez(t,e,n,i);const s=t.lastIndexOf(e);return r!==s?n:r}const nz=(t,e)=>t===null?null:At(Math.round(t),0,e);function oy(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class fp extends ls{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:s}of n)i[r]===s&&i.splice(r,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(ve(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:tz(i,e,Y(n,e),this._addedLabels),nz(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,r=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let a=e;a<=n;a++)r.push({value:a});return r}getLabelForValue(e){return oy.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}V(fp,"id","category"),V(fp,"defaults",{ticks:{callback:oy}});function iz(t,e){const n=[],{bounds:r,step:s,min:a,max:o,precision:l,count:u,maxTicks:d,maxDigits:h,includeBounds:f}=t,p=s||1,m=d-1,{min:y,max:k}=e,x=!ve(a),v=!ve(o),b=!ve(u),w=(k-y)/(h+1);let j=h2((k-y)/m/p)*p,C,S,P,E;if(j<1e-14&&!x&&!v)return[{value:y},{value:k}];E=Math.ceil(k/j)-Math.floor(y/j),E>m&&(j=h2(E*j/m/p)*p),ve(l)||(C=Math.pow(10,l),j=Math.ceil(j*C)/C),r==="ticks"?(S=Math.floor(y/j)*j,P=Math.ceil(k/j)*j):(S=y,P=k),x&&v&&s&&UM((o-a)/s,j/1e3)?(E=Math.round(Math.min((o-a)/j,d)),j=(o-a)/E,S=a,P=o):b?(S=x?a:S,P=v?o:P,E=u-1,j=(P-S)/E):(E=(P-S)/j,ta(E,Math.round(E),j/1e3)?E=Math.round(E):E=Math.ceil(E));const M=Math.max(f2(j),f2(S));C=Math.pow(10,ve(l)?M:l),S=Math.round(S*C)/C,P=Math.round(P*C)/C;let O=0;for(x&&(f&&S!==a?(n.push({value:a}),S<a&&O++,ta(Math.round((S+O*j)*C)/C,a,ly(a,w,t))&&O++):S<a&&O++);O<E;++O){const R=Math.round((S+O*j)*C)/C;if(v&&R>o)break;n.push({value:R})}return v&&f&&P!==o?n.length&&ta(n[n.length-1].value,o,ly(o,w,t))?n[n.length-1].value=o:n.push({value:o}):(!v||P===o)&&n.push({value:P}),n}function ly(t,e,{horizontal:n,minRotation:i}){const r=$i(i),s=(n?Math.sin(r):Math.cos(r))||.001,a=.75*e*(""+t).length;return Math.min(e/s,a)}class rz extends ls{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return ve(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const a=l=>r=n?r:l,o=l=>s=i?s:l;if(e){const l=Jr(r),u=Jr(s);l<0&&u<0?o(0):l>0&&u>0&&a(0)}if(r===s){let l=s===0?1:Math.abs(s*.05);o(s+l),e||a(r-l)}this.min=r,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,a=iz(r,s);return e.bounds==="ticks"&&WM(a,this,"value"),e.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const r=(i-n)/Math.max(e.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Wk(e,this.chart.options.locale,this.options.ticks.format)}}class pp extends rz{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Dt(e)?e:0,this.max=Dt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=$i(this.options.ticks.minRotation),r=(e?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}V(pp,"id","linear"),V(pp,"defaults",{ticks:{callback:Gk.formatters.numeric}});const Ru={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},at=Object.keys(Ru);function cy(t,e){return t-e}function uy(t,e){if(ve(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let a=e;return typeof i=="function"&&(a=i(a)),Dt(a)||(a=typeof i=="string"?n.parse(a,i):n.parse(a)),a===null?null:(r&&(a=r==="week"&&($a(s)||s===!0)?n.startOf(a,"isoWeek",s):n.startOf(a,r)),+a)}function dy(t,e,n,i){const r=at.length;for(let s=at.indexOf(t);s<r-1;++s){const a=Ru[at[s]],o=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-e)/(o*a.size))<=i)return at[s]}return at[r-1]}function sz(t,e,n,i,r){for(let s=at.length-1;s>=at.indexOf(n);s--){const a=at[s];if(Ru[a].common&&t._adapter.diff(r,i,a)>=e-1)return a}return at[n?at.indexOf(n):0]}function az(t){for(let e=at.indexOf(t)+1,n=at.length;e<n;++e)if(Ru[at[e]].common)return at[e]}function hy(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:r}=Gg(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}function oz(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),a=e[e.length-1].value;let o,l;for(o=s;o<=a;o=+r.add(o,1,i))l=n[o],l>=0&&(e[l].major=!0);return e}function fy(t,e,n){const i=[],r={},s=e.length;let a,o;for(a=0;a<s;++a)o=e[a],r[o]=a,i.push({value:o,major:!1});return s===0||!n?i:oz(t,i,r,n)}class Gc extends ls{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),r=this._adapter=new xL._date(e.adapters.date);r.init(n),ea(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:uy(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:r,max:s,minDefined:a,maxDefined:o}=this.getUserBounds();function l(u){!a&&!isNaN(u.min)&&(r=Math.min(r,u.min)),!o&&!isNaN(u.max)&&(s=Math.max(s,u.max))}(!a||!o)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=Dt(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=Dt(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,a=this.max,o=JM(r,s,a);return this._unit=n.unit||(i.autoSkip?dy(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):sz(this,o.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:az(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),fy(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,r,s;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?i=s:i=(s-this.getDecimalForValue(e[e.length-2]))/2);const a=e.length<3?.5:.25;n=At(n,0,a),i=At(i,0,a),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,a=s.unit||dy(s.minUnit,n,i,this._getLabelCapacity(n)),o=Y(r.ticks.stepSize,1),l=a==="week"?s.isoWeekday:!1,u=$a(l)||l===!0,d={};let h=n,f,p;if(u&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,u?"day":a),e.diff(i,n,a)>1e5*o)throw new Error(n+" and "+i+" are too far apart with stepSize of "+o+" "+a);const m=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,p=0;f<i;f=+e.add(f,o,a),p++)hy(d,f,m);return(f===i||r.bounds==="ticks"||p===1)&&hy(d,f,m),Object.keys(d).sort(cy).map(y=>+y)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const r=this.options.time.displayFormats,s=this._unit,a=n||r[s];return this._adapter.format(e,a)}_tickFormatFunction(e,n,i,r){const s=this.options,a=s.ticks.callback;if(a)return ue(a,[e,n,i],this);const o=s.time.displayFormats,l=this._unit,u=this._majorUnit,d=l&&o[l],h=u&&o[u],f=i[n],p=u&&h&&f&&f.major;return this._adapter.format(e,r||(p?h:d))}generateTickLabels(e){let n,i,r;for(n=0,i=e.length;n<i;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,r=$i(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:i*s+o*a,h:i*a+o*s}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(e,0,fy(this,[e],this._majorUnit),r),a=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)e.push(uy(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return ZM(e.sort(cy))}}V(Gc,"id","time"),V(Gc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Yo(t,e,n){let i=0,r=t.length-1,s,a,o,l;n?(e>=t[i].pos&&e<=t[r].pos&&({lo:i,hi:r}=Fi(t,"pos",e)),{pos:s,time:o}=t[i],{pos:a,time:l}=t[r]):(e>=t[i].time&&e<=t[r].time&&({lo:i,hi:r}=Fi(t,"time",e)),{time:s,pos:o}=t[i],{time:a,pos:l}=t[r]);const u=a-s;return u?o+(l-o)*(e-s)/u:o}class py extends Gc{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Yo(n,this.min),this._tableRange=Yo(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,r=[],s=[];let a,o,l,u,d;for(a=0,o=e.length;a<o;++a)u=e[a],u>=n&&u<=i&&r.push(u);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(a=0,o=r.length;a<o;++a)d=r[a+1],l=r[a-1],u=r[a],Math.round((d+l)/2)!==u&&s.push({time:u,pos:a/(o-1)});return s}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,s)=>r-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(Yo(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return Yo(this._table,i*this._tableRange+this._minPos,!0)}}V(py,"id","timeseries"),V(py,"defaults",Gc.defaults);const bw="label";function gy(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function lz(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function kw(t,e){t.labels=e}function ww(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:bw;const i=[];t.datasets=e.map(r=>{const s=t.datasets.find(a=>a[n]===r[n]);return!s||!r.data||i.includes(s)?{...r}:(i.push(s),Object.assign(s,r),s)})}function cz(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bw;const n={labels:[],datasets:[]};return kw(n,t.labels),ww(n,t.datasets,e),n}function uz(t,e){const{height:n=150,width:i=300,redraw:r=!1,datasetIdKey:s,type:a,data:o,options:l,plugins:u=[],fallbackContent:d,updateMode:h,...f}=t,p=_.useRef(null),m=_.useRef(),y=()=>{p.current&&(m.current=new Iu(p.current,{type:a,data:cz(o,s),options:l&&{...l},plugins:u}),gy(e,m.current))},k=()=>{gy(e,null),m.current&&(m.current.destroy(),m.current=null)};return _.useEffect(()=>{!r&&m.current&&l&&lz(m.current,l)},[r,l]),_.useEffect(()=>{!r&&m.current&&kw(m.current.config.data,o.labels)},[r,o.labels]),_.useEffect(()=>{!r&&m.current&&o.datasets&&ww(m.current.config.data,o.datasets,s)},[r,o.datasets]),_.useEffect(()=>{m.current&&(r?(k(),setTimeout(y)):m.current.update(h))},[r,l,o.labels,o.datasets,h]),_.useEffect(()=>{m.current&&(k(),setTimeout(y))},[a]),_.useEffect(()=>(y(),()=>k()),[]),ze.createElement("canvas",Object.assign({ref:p,role:"img",height:n,width:i},f),d)}const dz=_.forwardRef(uz);function hz(t,e){return Iu.register(e),_.forwardRef((n,i)=>ze.createElement(dz,Object.assign({},n,{ref:i,type:t})))}const fz=hz("line",Xl),cs=g.h2`
  color: white;
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  font-weight: 600;
`;Iu.register(fp,pp,Ql,Ds,WO,ZO,HO);const pz=g.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,gz=g.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,hr=g.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`,mz=g.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: calc(100vh - 300px); // Mengambil sisa tinggi viewport
`,yz=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,my=g.select`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;

  option {
    background: #1a1a2e;
    color: white;
  }
`,vz=g.div`
  margin-top: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,xz=g.h3`
  color: #00ff87;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`,bz=g(T.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`,kz=g(T.div)`
  min-width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  .members {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
  }
`;function wz(){const[t,e]=_.useState("2024"),[n,i]=_.useState("all"),r={2024:{Jan:1200,Feb:1900,Mar:3e3,Apr:5e3,Mei:4e3,Jun:3e3,Jul:6e3,Agu:7e3,Sep:4500,Okt:5500,Nov:6500,Des:8e3},2023:{Jan:800,Feb:1200,Mar:2e3,Apr:3e3,Mei:3500,Jun:2500,Jul:4e3,Agu:5e3,Sep:3500,Okt:4e3,Nov:4500,Des:5e3}},s=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["2023","2024"],l=(()=>{const f=r[t];return n==="all"?{labels:s,data:s.map(p=>f[p])}:{labels:[n],data:[f[n]]}})(),u={labels:l.labels,datasets:[{label:"Pengunjung Website",data:l.data,borderColor:"#00ff87",backgroundColor:"rgba(0, 255, 135, 0.1)",tension:.4,fill:!0}]},d={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white"}},title:{display:!0,text:`Statistik Pengunjung Website Tahun ${t}${n!=="all"?` - Bulan ${n}`:""}`,color:"white",font:{size:16}}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}},x:{grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}}}},h=[{name:"Robotika",description:"Pengembangan dan pemrograman robot",members:25},{name:"English Club",description:"Peningkatan kemampuan bahasa Inggris",members:30},{name:"Pramuka",description:"Pembentukan karakter dan kepemimpinan",members:45},{name:"Futsal",description:"Olahraga tim dan kompetisi",members:20},{name:"Seni Musik",description:"Pengembangan bakat musik dan vokal",members:15},{name:"Fotografi",description:"Teknik fotografi dan editing",members:18},{name:"PMR",description:"Palang Merah Remaja",members:22},{name:"Basket",description:"Olahraga tim dan strategi",members:24},{name:"Teater",description:"Seni peran dan drama",members:16},{name:"Jurnalistik",description:"Penulisan dan media sekolah",members:20}];return c.jsxs(pz,{children:[c.jsx(cs,{children:"Dashboard"}),c.jsxs(gz,{children:[c.jsxs(hr,{children:[c.jsx("h3",{children:"Total Moderator"}),c.jsx("p",{children:"25"})]}),c.jsxs(hr,{children:[c.jsx("h3",{children:"Total Guru"}),c.jsx("p",{children:"45"})]}),c.jsxs(hr,{children:[c.jsx("h3",{children:"Total Siswa"}),c.jsx("p",{children:"520"})]}),c.jsxs(hr,{children:[c.jsx("h3",{children:"Berita Sekolah"}),c.jsx("p",{children:"12"})]}),c.jsxs(hr,{children:[c.jsx("h3",{children:"Berita Program Keahlian"}),c.jsx("p",{children:"4"})]}),c.jsxs(hr,{children:[c.jsx("h3",{children:"Berita Ekstrakurikuler"}),c.jsx("p",{children:"3"})]})]}),c.jsxs(vz,{children:[c.jsx(xz,{children:"Ekstrakurikuler Aktif"}),c.jsx(bz,{animate:{x:[0,-1500]},transition:{x:{repeat:1/0,repeatType:"loop",duration:30,ease:"linear"}},children:[...h,...h].map((f,p)=>c.jsxs(kz,{children:[c.jsx("h4",{children:f.name}),c.jsx("p",{children:f.description}),c.jsxs("div",{className:"members",children:[f.members," Anggota Aktif"]})]},p))})]}),c.jsxs(mz,{children:[c.jsxs(yz,{children:[c.jsx(my,{value:t,onChange:f=>e(f.target.value),children:a.map(f=>c.jsxs("option",{value:f,children:["Tahun ",f]},f))}),c.jsxs(my,{value:n,onChange:f=>i(f.target.value),children:[c.jsx("option",{value:"all",children:"Semua Bulan"}),s.map(f=>c.jsx("option",{value:f,children:f},f))]})]}),c.jsx(fz,{data:u,options:d})]})]})}const jz=g.div`
  padding: 2rem;
  color: white;
`;g.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const _z=g.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
`,Sz=g(T.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,yy=g(T.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  background: ${t=>t.delete?"#ff4444":"#00ff87"};
  color: white;
`,Pz=g(T.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function Cz(){const[t,e]=_.useState([{id:1,username:"admin",role:"Administrator"},{id:2,username:"moderator",role:"Moderator"},{id:3,username:"user1",role:"User"}]);return c.jsxs(jz,{children:[c.jsx(cs,{children:"Manajemen Moderator"}),c.jsx(Pz,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Moderator"}),c.jsx(_z,{children:t.map(n=>c.jsxs(Sz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[c.jsxs("div",{children:[c.jsx("h3",{children:n.username}),c.jsx("p",{children:n.role})]}),c.jsxs("div",{children:[c.jsx(yy,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),c.jsx(yy,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const Tz=g.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,Ez=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,vy=g.button`
  padding: 0.8rem 1.5rem;
  background: ${t=>t.active?"rgba(0, 255, 135, 0.2)":"rgba(255, 255, 255, 0.1)"};
  color: ${t=>t.active?"#00ff87":"white"};
  border: 1px solid ${t=>t.active?"#00ff87":"rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }
`,Mz=g.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Az=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,Lz=g(T.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-top: 1rem;
    background: ${t=>t.status==="Aktif"?"rgba(0, 255, 135, 0.2)":"rgba(255, 59, 48, 0.2)"};
    color: ${t=>t.status==="Aktif"?"#00ff87":"#ff3b30"};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-content {
    flex: 1;
  }

  .card-status {
    margin-left: 2rem;
  }
`,Oz=g.input`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  width: 300px;
  margin-bottom: 1.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,zz=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,xy=g.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 200px;

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
  }

  .sub-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.5rem;
  }
`,Iz=g(T.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;function Rz(){const[t,e]=ze.useState("students"),[n,i]=ze.useState(""),r=[{id:1,name:"Ahmad Rizki",kelas:"XII RPL 1",nis:"12345",status:"Aktif"},{id:2,name:"Siti Nurhaliza",kelas:"XII RPL 1",nis:"12346",status:"Aktif"},{id:3,name:"Budi Santoso",kelas:"XII RPL 2",nis:"12347",status:"Aktif"},{id:4,name:"Dewi Putri",kelas:"XII RPL 2",nis:"12348",status:"Tidak Aktif"},{id:5,name:"Eko Prasetyo",kelas:"XII RPL 3",nis:"12349",status:"Aktif"},{id:6,name:"Fitri Handayani",kelas:"XII RPL 3",nis:"12350",status:"Aktif"}],s=[{id:1,name:"Drs. Suryanto",mapel:"Matematika",nip:"198501012010011001",status:"Aktif"},{id:2,name:"Sri Wahyuni, S.Pd",mapel:"Bahasa Indonesia",nip:"198601022010012002",status:"Aktif"},{id:3,name:"Ahmad Hidayat, M.Pd",mapel:"Pemrograman Web",nip:"198701032010013003",status:"Aktif"},{id:4,name:"Rina Susanti, S.Kom",mapel:"Basis Data",nip:"198801042010014004",status:"Tidak Aktif"},{id:5,name:"Dr. Bambang Kusuma",mapel:"Sistem Operasi",nip:"198901052010015005",status:"Aktif"}],a=r.filter(u=>u.status==="Aktif").length,o=s.filter(u=>u.status==="Aktif").length,l=t==="students"?r.filter(u=>u.name.toLowerCase().includes(n.toLowerCase())||u.nis.includes(n)):s.filter(u=>u.name.toLowerCase().includes(n.toLowerCase())||u.nip.includes(n));return c.jsxs(Tz,{children:[c.jsx(cs,{children:"Manajemen Siswa & Guru"}),c.jsxs(zz,{children:[c.jsxs(xy,{children:[c.jsx("h4",{children:"Total Siswa"}),c.jsx("p",{children:r.length}),c.jsxs("div",{className:"sub-text",children:["Aktif: ",a]})]}),c.jsxs(xy,{children:[c.jsx("h4",{children:"Total Guru"}),c.jsx("p",{children:s.length}),c.jsxs("div",{className:"sub-text",children:["Aktif: ",o]})]})]}),c.jsxs(Ez,{children:[c.jsx(vy,{active:t==="students",onClick:()=>e("students"),children:"Data Siswa"}),c.jsx(vy,{active:t==="teachers",onClick:()=>e("teachers"),children:"Data Guru"})]}),c.jsxs(Iz,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["Add New ",t==="students"?"Siswa":"Guru"]}),c.jsxs(Mz,{children:[c.jsx(Oz,{type:"text",placeholder:`Cari ${t==="students"?"siswa":"guru"}...`,value:n,onChange:u=>i(u.target.value)}),c.jsx(Az,{children:l.map(u=>c.jsxs(Lz,{status:u.status,whileHover:{scale:1.01},whileTap:{scale:.99},children:[c.jsxs("div",{className:"card-content",children:[c.jsx("h3",{children:u.name}),t==="students"?c.jsxs(c.Fragment,{children:[c.jsxs("p",{children:["Kelas: ",u.kelas]}),c.jsxs("p",{children:["NIS: ",u.nis]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("p",{children:["Mata Pelajaran: ",u.mapel]}),c.jsxs("p",{children:["NIP: ",u.nip]})]})]}),c.jsx("div",{className:"card-status",children:c.jsx("div",{className:"status",children:u.status})})]},u.id))})]})]})}const Dz=g.div`
  padding: 2rem;
  color: white;
`,$z=g.div`
  display: grid;
  gap: 1rem;
`,Fz=g(T.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,Bz=g.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,Nz=g.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .date {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`,Vz=g.div`
  display: flex;
  gap: 0.5rem;
`,by=g(T.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.delete?"#ff4444":t.edit?"#ffbb33":"#00ff87"};
  color: white;
`,Hz=g(T.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function Uz(){const[t,e]=_.useState([{id:1,title:"Prestasi Gemilang di Olimpiade Sains",date:"15 Februari 2024",image:"/images/berita/berita1.jpg",excerpt:"Siswa SMKN 1 Bulan meraih medali emas..."}]);return c.jsxs(Dz,{children:[c.jsx(cs,{children:"Berita Sekolah"}),c.jsx(Hz,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Article"}),c.jsx($z,{children:t.map(n=>c.jsxs(Fz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[c.jsx(Bz,{src:n.image,alt:n.title}),c.jsxs(Nz,{children:[c.jsx("h3",{children:n.title}),c.jsx("div",{className:"date",children:n.date}),c.jsx("p",{children:n.excerpt})]}),c.jsxs(Vz,{children:[c.jsx(by,{edit:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),c.jsx(by,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const Wz=g.div`
  padding: 2rem;
  color: white;
`,Kz=g.div`
  display: grid;
  gap: 1rem;
`,Gz=g(T.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,Yz=g.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,Xz=g.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    background: ${t=>t.status==="pending"?"#ffd700":t.status==="approved"?"#00ff87":"#ff4444"};
    color: #1a1a2e;
  }

  .author {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }

  .category {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,qz=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Vd=g(T.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function Jz(){const[t]=_.useState([{id:1,title:"Prestasi RPL di Lomba Coding",author:"Moderator RPL",status:"pending",category:"Rekayasa Perangkat Lunak",image:"/images/program/rpl.jpg",description:"Tim RPL berhasil meraih juara dalam kompetisi coding tingkat nasional."},{id:2,title:"Workshop Jaringan Cisco",author:"Moderator TKJ",status:"approved",category:"Teknik Komputer dan Jaringan",image:"/images/program/tkj.jpg",description:"Siswa TKJ mengikuti workshop sertifikasi Cisco."},{id:3,title:"Proyek Multimedia Interaktif",author:"Moderator MM",status:"pending",category:"Multimedia",image:"/images/program/mm.jpg",description:"Karya siswa MM dipamerkan dalam expo teknologi."}]);return c.jsxs(Wz,{children:[c.jsx(cs,{children:"Berita Program Keahlian"}),c.jsx(Kz,{children:t.map(e=>c.jsxs(Gz,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[c.jsx(Yz,{src:e.image,alt:e.title}),c.jsxs(Xz,{status:e.status,children:[c.jsx("h3",{children:e.title}),c.jsx("div",{className:"status",children:e.status.toUpperCase()}),c.jsxs("div",{className:"author",children:["By: ",e.author]}),c.jsx("div",{className:"category",children:e.category}),c.jsx("p",{children:e.description})]}),c.jsxs(qz,{children:[c.jsx(Vd,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&c.jsxs(c.Fragment,{children:[c.jsx(Vd,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),c.jsx(Vd,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const Qz=g.div`
  padding: 2rem;
  color: white;
`;g.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const Zz=g.div`
  display: grid;
  gap: 1rem;
`,eI=g(T.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,tI=g.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,nI=g.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    background: ${t=>t.status==="pending"?"#ffd700":t.status==="approved"?"#00ff87":"#ff4444"};
    color: #1a1a2e;
  }

  .author {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`,iI=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Hd=g(T.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function rI(){const[t]=_.useState([{id:1,title:"Lomba Futsal Antar Sekolah",author:"Moderator Olahraga",status:"pending",image:"/images/extra/futsal.jpg",description:"Tim futsal sekolah akan mengikuti turnamen antar SMK se-Kota."},{id:2,title:"Festival Seni Tahunan",author:"Moderator Seni",status:"approved",image:"/images/extra/seni.jpg",description:"Penampilan spektakuler dari klub seni dalam festival tahunan."},{id:3,title:"Kompetisi Robotik",author:"Moderator Robotik",status:"rejected",image:"/images/extra/robotik.jpg",description:"Persiapan tim robotik menghadapi kompetisi nasional."}]);return c.jsxs(Qz,{children:[c.jsx(cs,{children:"Berita Ekstrakurikuler"}),c.jsx(Zz,{children:t.map((e,n)=>c.jsxs(eI,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[c.jsx(tI,{src:e.image,alt:e.title}),c.jsxs(nI,{status:e.status,children:[c.jsx("h3",{children:e.title}),c.jsx("div",{className:"status",children:e.status.toUpperCase()}),c.jsxs("div",{className:"author",children:["By: ",e.author]}),c.jsx("p",{children:e.description})]}),c.jsxs(iI,{children:[c.jsx(Hd,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&c.jsxs(c.Fragment,{children:[c.jsx(Hd,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),c.jsx(Hd,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const sI=g.div`
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
`,aI=g.div`
  text-align: center;
  margin-bottom: 3rem;
`,oI=g.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 3px solid #00ff87;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,lI=g.h2`
  color: #00ff87;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,cI=g.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`,uI=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,ky=g(cb)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  &.active {
    background: rgba(0, 255, 135, 0.2);
    color: #00ff87;
  }
`,dI=g.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ff4d4d;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    background: rgba(255, 77, 77, 0.1);
    border-color: #ff4d4d;
  }
`;function hI(){const{user:t,handleLogout:e}=Mn(),[n,i]=_.useState({namaLengkap:"",kelasAkun:"",profileImage:"/default-avatar.jpg"});_.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{data:a,error:o}=await st.from("akun").select("namaLengkap, kelasAkun, profileImage").eq("id",t.id).single();if(o)throw o;a&&i(l=>({...l,namaLengkap:a.namaLengkap||"Nama Belum Diatur",kelasAkun:a.kelasAkun||"Kelas Belum Diatur",profileImage:a.profileImage||"/default-avatar.jpg"}))}catch(a){console.error("Error:",a)}})()},[t]);const r=()=>{e(),navigate("/")};return c.jsxs(sI,{children:[c.jsxs(aI,{children:[c.jsx(oI,{children:c.jsx("img",{src:n.profileImage||"/default-avatar.jpg",alt:"Profile"})}),c.jsx(lI,{children:n.namaLengkap||"Belum diatur"}),c.jsx(cI,{children:n.kelasAkun||"Kelas belum diatur"})]}),c.jsxs(uI,{children:[c.jsxs(ky,{to:"/user/profile",children:[c.jsx(Ng,{})," Profil"]}),c.jsxs(ky,{to:"/user/gallery",children:[c.jsx(CE,{})," Galeri"]})]}),c.jsxs(dI,{onClick:r,children:[c.jsx(zk,{})," Logout"]})]})}const fI=g.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,pI=g.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
  background: #1a1a2e;
  min-height: 100vh;
  color: white;
`;function gI(){return c.jsxs(fI,{children:[c.jsx(hI,{}),c.jsx(pI,{children:c.jsx(ug,{})})]})}const mI=g.div`
  color: white;
  max-width: 800px;
  margin: 0 auto;
`,yI=g.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,vI=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,xI=g(T.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`,bI=g.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    flex: 1;
    
    .username {
      font-weight: 600;
      color: #00ff87;
    }
    
    .timestamp {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`,kI=g.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,wI=g.div`
  padding: 1rem;
  display: flex;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    span {
      font-size: 0.9rem;
    }

    &:hover {
      color: #00ff87;
    }
  }
`,jI=g.div`
  padding: 0 1rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  
  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`,_I=()=>{const t=[{id:1,username:"john_doe",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan1.jpg",caption:"Kegiatan praktek di lab komputer 🖥️",likes:124,comments:8,timestamp:"2 jam yang lalu"},{id:2,username:"jane_smith",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile2.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan2.jpg",caption:"Workshop UI/UX Design bersama praktisi industri 🎨",likes:89,comments:5,timestamp:"5 jam yang lalu"},{id:3,username:"mike_wilson",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile3.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan3.jpg",caption:"Presentasi project akhir semester 📊",likes:156,comments:12,timestamp:"8 jam yang lalu"}];return c.jsxs(mI,{children:[c.jsx(yI,{children:"Beranda"}),c.jsx(vI,{children:t.map(e=>c.jsxs(xI,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(bI,{children:[c.jsx("div",{className:"avatar",children:c.jsx("img",{src:e.avatar,alt:e.username})}),c.jsxs("div",{className:"user-info",children:[c.jsx("div",{className:"username",children:e.username}),c.jsx("div",{className:"timestamp",children:e.timestamp})]})]}),c.jsx(kI,{children:c.jsx("img",{src:e.image,alt:"Post"})}),c.jsxs(wI,{children:[c.jsxs("button",{children:[c.jsx(Pk,{})," ",c.jsx("span",{children:e.likes})]}),c.jsxs("button",{children:[c.jsx(_E,{})," ",c.jsx("span",{children:e.comments})]}),c.jsx("button",{children:c.jsx($E,{})})]}),c.jsxs(jI,{children:[c.jsx("span",{className:"username",children:e.username}),e.caption]})]},e.id))})]})},wy=g(T.div)`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`,SI=g(T.header)`
  display: flex;
  margin-bottom: 44px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }
`,PI=g(T.div)`
  margin-right: 80px;
  width: 150px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin: 0 0 32px 0;
  }
`,CI=g(T.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.2);
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #60efff;
    box-shadow: 0 0 30px rgba(96, 239, 255, 0.3);
    
    img {
      transform: scale(1.05);
    }
  }
`,TI=g.section`
  flex: 1;
`,EI=g.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`,MI=g.h2`
  font-size: 28px;
  font-weight: 300;
  color: #fff;
  margin-right: 20px;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 255, 135, 0.3);
`,AI=g(T.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  color: #1a1a2e;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.3);
  }
`,LI=g.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 20px;
  margin-bottom: 24px;
  gap: 40px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Ud=g(T.li)`
  font-size: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  span {
    font-size: 20px;
    font-weight: 600;
    color: #00ff87;
    margin-bottom: 4px;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    transform: translateY(-2px);
  }
`,OI=g.div`
  color: #fff;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  .fullname {
    font-weight: 600;
    margin-bottom: 8px;
    color: #00ff87;
  }
  
  .bio-text {
    margin-top: 8px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
  }
`,zI=g.div`
  border-top: 1px solid #262626;
  margin-top: 44px;
`,II=g.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`,jy=g.button`
  background: none;
  border: none;
  color: ${t=>t.active?"#fff":"#8e8e8e"};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${t=>t.active?"#fff":"transparent"};
  }

  svg {
    font-size: 12px;
  }
`,RI=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 28px;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`,DI=g.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,$I=g.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  .stats {
    display: flex;
    gap: 30px;
    color: white;
    font-weight: 600;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;function FI(){const t=J(),{user:e}=Mn(),[n,i]=_.useState("posts"),[r,s]=_.useState(null),[a,o]=_.useState([]),[l,u]=_.useState(!0);return _.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:h,error:f}=await st.from("akun").select("*").eq("id",e.id).single();if(f)throw f;const{data:p,error:m}=await st.from("posts").select("*").eq("user_id",e.id).eq("category","public").order("created_at",{ascending:!1});if(m)throw m;s(h),o(p||[])}catch(h){console.error("Error:",h)}finally{u(!1)}})()},[e]),l?c.jsx(wy,{children:"Loading..."}):c.jsxs(wy,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(SI,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[c.jsx(PI,{children:c.jsx(CI,{whileHover:{scale:1.05},children:c.jsx("img",{src:(r==null?void 0:r.profileImage)||"/default-avatar.jpg",alt:"Profile"})})}),c.jsxs(TI,{children:[c.jsxs(EI,{children:[c.jsx(MI,{children:r==null?void 0:r.namaLengkap}),c.jsxs(AI,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("/user/profile/settings"),children:[c.jsx(SE,{})," Edit Profile"]})]}),c.jsxs(LI,{children:[c.jsxs(Ud,{whileHover:{scale:1.05},children:[c.jsx("span",{children:a.length}),c.jsx("p",{children:"posts"})]}),c.jsxs(Ud,{whileHover:{scale:1.05},children:[c.jsx("span",{children:"0"}),c.jsx("p",{children:"followers"})]}),c.jsxs(Ud,{whileHover:{scale:1.05},children:[c.jsx("span",{children:"0"}),c.jsx("p",{children:"following"})]})]}),c.jsxs(OI,{children:[c.jsx("div",{className:"fullname",children:r==null?void 0:r.namaLengkap}),c.jsx("div",{children:r==null?void 0:r.kelasAkun}),(r==null?void 0:r.bioAkun)&&c.jsx("div",{className:"bio-text",children:r.bioAkun})]})]})]}),c.jsxs(zI,{children:[c.jsxs(II,{children:[c.jsxs(jy,{active:n==="posts",onClick:()=>i("posts"),children:[c.jsx(FE,{})," POSTS"]}),c.jsxs(jy,{active:n==="saved",onClick:()=>i("saved"),children:[c.jsx(vE,{})," SAVED"]})]}),n==="posts"&&c.jsx(RI,{children:a.map(d=>c.jsxs(DI,{children:[c.jsx("img",{src:d.image_url,alt:d.title||"Post"}),c.jsx($I,{className:"overlay",children:c.jsxs("div",{className:"stats",children:[c.jsx("span",{children:"❤️ 0"}),c.jsx("span",{children:"💬 0"})]})})]},d.id))})]})]})}const BI=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,NI=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,VI=g.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,HI=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,hn=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Qt=g.label`
  color: #00ff87;
  font-size: 0.9rem;
`,Ln=g.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,UI=g.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,WI=g(T.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,On=g.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,KI=g.div`
  text-align: center;
  margin-bottom: 2rem;
`,GI=g.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 3px solid #00ff87;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,YI=g.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`,XI=g.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;function qI(){const t=J(),{user:e}=Mn(),[n,i]=_.useState(!1),[r,s]=_.useState(null),[a,o]=_.useState("/default-avatar.jpg"),[l,u]=_.useState({namaLengkap:"",kelasAkun:"",bioAkun:"",emailAkun:"",noTelpAkun:"",alamatAkun:"",instagramAkun:"",tiktokAkun:"",twitterAkun:""});_.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:p,error:m}=await st.from("akun").select("*").eq("id",e.id).single();if(m)throw m;p&&(u({namaLengkap:p.namaLengkap||"",kelasAkun:p.kelasAkun||"",bioAkun:p.bioAkun||"",emailAkun:p.emailAkun||"",noTelpAkun:p.noTelpAkun||"",alamatAkun:p.alamatAkun||"",instagramAkun:p.instagramAkun||"",tiktokAkun:p.tiktokAkun||"",twitterAkun:p.twitterAkun||""}),p.profileImage&&o(p.profileImage))}catch(p){console.error("Error:",p)}})()},[e]);const d=f=>{const p=f.target.files[0];if(p){s(p);const m=new FileReader;m.onloadend=()=>{o(m.result)},m.readAsDataURL(p)}},h=async f=>{f.preventDefault(),i(!0);try{let p=a;if(r){const y=r.name.split(".").pop(),x=`profiles/${`${e.id}/profile.${y}`}`;try{const{data:w}=await st.storage.from("galery").list(`profiles/${e.id}`);(w==null?void 0:w.length)>0&&await st.storage.from("galery").remove(w.map(j=>`profiles/${e.id}/${j.name}`))}catch{console.log("No existing profile picture")}const{error:v}=await st.storage.from("galery").upload(x,r,{cacheControl:"3600",upsert:!0});if(v)throw v;const{data:b}=st.storage.from("galery").getPublicUrl(x);p=b.publicUrl}const{error:m}=await st.from("akun").update({namaLengkap:l.namaLengkap,kelasAkun:l.kelasAkun,bioAkun:l.bioAkun,emailAkun:l.emailAkun,noTelpAkun:l.noTelpAkun,alamatAkun:l.alamatAkun,profileImage:p,instagramAkun:l.instagramAkun,tiktokAkun:l.tiktokAkun,twitterAkun:l.twitterAkun}).eq("id",e.id);if(m)throw console.error("Update error:",m),m;alert("Profil berhasil disimpan!"),t("/user/profile")}catch(p){console.error("Error:",p),alert("Terjadi kesalahan saat menyimpan profil")}finally{i(!1)}};return c.jsx(BI,{children:c.jsxs(NI,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsx(VI,{children:"Edit Profil"}),c.jsxs(HI,{onSubmit:h,children:[c.jsxs(KI,{children:[c.jsxs(Qt,{children:["Foto Profil ",c.jsx(On,{children:"(opsional)"})]}),c.jsxs(GI,{onClick:()=>document.getElementById("profileImage").click(),children:[c.jsx("img",{src:a,alt:"Profile"}),c.jsxs(YI,{className:"overlay",children:[c.jsx(Ng,{})," Ubah Foto"]})]}),c.jsx("input",{id:"profileImage",type:"file",accept:"image/*",onChange:d,style:{display:"none"}})]}),c.jsxs(hn,{children:[c.jsx(Qt,{children:"Nama Lengkap"}),c.jsx(Ln,{type:"text",value:l.namaLengkap,onChange:f=>u({...l,namaLengkap:f.target.value}),placeholder:"Masukkan nama lengkap",required:!0})]}),c.jsxs(hn,{children:[c.jsx(Qt,{children:"Kelas"}),c.jsx(Ln,{type:"text",value:l.kelasAkun,onChange:f=>u({...l,kelasAkun:f.target.value}),placeholder:"Contoh: XII RPL 1",required:!0})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:["Bio ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(UI,{value:l.bioAkun,onChange:f=>u({...l,bioAkun:f.target.value}),placeholder:"Ceritakan tentang dirimu..."})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:["Email ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"email",value:l.emailAkun,onChange:f=>u({...l,emailAkun:f.target.value}),placeholder:"Masukkan email"})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:["Nomor Telepon ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"tel",value:l.noTelpAkun,onChange:f=>u({...l,noTelpAkun:f.target.value}),placeholder:"Masukkan nomor telepon"})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:["Alamat ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"text",value:l.alamatAkun,onChange:f=>u({...l,alamatAkun:f.target.value}),placeholder:"Masukkan alamat"})]}),c.jsxs(XI,{children:[c.jsxs(hn,{children:[c.jsxs(Qt,{children:[c.jsx(xk,{})," Instagram ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"text",value:l.instagramAkun,onChange:f=>u({...l,instagramAkun:f.target.value}),placeholder:"Username Instagram (tanpa @)"})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:[c.jsx(bk,{})," TikTok ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"text",value:l.tiktokAkun,onChange:f=>u({...l,tiktokAkun:f.target.value}),placeholder:"Username TikTok (tanpa @)"})]}),c.jsxs(hn,{children:[c.jsxs(Qt,{children:[c.jsx(fE,{})," Twitter ",c.jsx(On,{children:"(opsional)"})]}),c.jsx(Ln,{type:"text",value:l.twitterAkun,onChange:f=>u({...l,twitterAkun:f.target.value}),placeholder:"Username Twitter (tanpa @)"})]})]}),c.jsxs(WI,{type:"submit",disabled:n,whileHover:{scale:n?1:1.02},whileTap:{scale:n?1:.98},children:[c.jsx(IE,{}),n?"Menyimpan...":"Simpan Profil"]})]})]})})}const JI=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,QI=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
`,ZI=g.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,eR=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,tR=g.div`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }

  input {
    display: none;
  }
`,nR=g.div`
  max-width: 300px;
  margin: 1rem auto;
  
  img {
    width: 100%;
    border-radius: 8px;
  }
`,Wd=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Kd=g.label`
  color: #00ff87;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
  }
`,_y=g.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,iR=g.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Sy=g.button`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${t=>t.selected?"rgba(0, 255, 135, 0.2)":"transparent"};
  color: ${t=>t.selected?"#00ff87":"white"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
  }
`,rR=g(T.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,sR=g.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
`,aR=g.div`
  height: 100%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border-radius: 10px;
  transition: width 0.3s ease;
`,oR=g.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;function lR(){const t=J(),{user:e}=Mn(),[n,i]=_.useState(null),[r,s]=_.useState(null),[a,o]=_.useState(""),[l,u]=_.useState(""),[d,h]=_.useState("private"),[f,p]=_.useState(!1),[m,y]=_.useState(0),k=v=>{const b=v.target.files[0];if(b){i(b);const w=new FileReader;w.onloadend=()=>{s(w.result)},w.readAsDataURL(b)}},x=async v=>{if(v.preventDefault(),!(!n||!(e!=null&&e.id))){p(!0);try{const b=new Date().getTime(),w=n.name.split(".").pop(),j=`${b}_${Math.random()}.${w}`,S=`${d==="private"?"gallery":"post"}/${e.id}/${j}`,{error:P}=await st.storage.from("galery").upload(S,n,{cacheControl:"3600",upsert:!1});if(P)throw P;const{data:E}=st.storage.from("galery").getPublicUrl(S),{error:M}=await st.from("posts").insert({user_id:e.id,image_path:S,image_url:E.publicUrl,title:a||null,caption:l||null,category:d,created_at:new Date().toISOString()});if(M)throw M;alert("Foto berhasil diupload!"),t(d==="private"?"/user/gallery":"/user/profile")}catch(b){console.error("Error:",b),alert("Terjadi kesalahan saat upload foto")}finally{p(!1)}}};return c.jsx(JI,{children:c.jsxs(QI,{children:[c.jsx(ZI,{children:"Upload Foto"}),c.jsxs(eR,{onSubmit:x,children:[c.jsxs(tR,{onClick:()=>document.getElementById("fileInput").click(),children:[r?c.jsx(nR,{children:c.jsx("img",{src:r,alt:"Preview"})}):c.jsxs("div",{children:[c.jsx(Ck,{size:40,color:"#00ff87"}),c.jsx("p",{style:{color:"white",marginTop:"1rem"},children:"Klik untuk pilih foto"})]}),c.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:k})]}),c.jsxs(Wd,{children:[c.jsxs(Kd,{children:["Judul Foto ",c.jsx("span",{children:"(opsional)"})]}),c.jsx(_y,{type:"text",value:a,onChange:v=>o(v.target.value),placeholder:"Masukkan judul foto..."})]}),c.jsxs(Wd,{children:[c.jsxs(Kd,{children:["Caption ",c.jsx("span",{children:"(opsional)"})]}),c.jsx(_y,{type:"text",value:l,onChange:v=>u(v.target.value),placeholder:"Tulis caption untuk foto ini..."})]}),c.jsxs(Wd,{children:[c.jsx(Kd,{children:"Kategori"}),c.jsxs(iR,{children:[c.jsxs(Sy,{type:"button",selected:d==="private",onClick:()=>h("private"),children:[c.jsx(ME,{})," Private Gallery"]}),c.jsxs(Sy,{type:"button",selected:d==="public",onClick:()=>h("public"),children:[c.jsx(_k,{})," Public Post"]})]})]}),f&&c.jsxs(sR,{children:[c.jsx(aR,{style:{width:`${m}%`}}),c.jsxs(oR,{children:[Math.round(m),"%"]})]}),c.jsxs(rR,{type:"submit",disabled:f||!n,whileHover:{scale:f?1:1.02},whileTap:{scale:f?1:.98},children:[c.jsx(VE,{}),f?"Uploading...":"Upload Foto"]})]})]})})}const cR=g.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`,uR=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`,dR=g.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`,Py=g(cb)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`,hR=g.button`
  background-color: #ff4444;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: calc(100% - 2rem);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;function fR(){const{handleLogout:t}=Mn();return c.jsxs(cR,{children:[c.jsxs(uR,{children:[c.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),c.jsx("h1",{children:"SMKN 1 Bulan"})]}),c.jsxs(dR,{children:[c.jsxs(Py,{to:"/moderator/profile",children:[c.jsx(Ng,{})," Profil"]}),c.jsxs(Py,{to:"/moderator/posting-berita",children:[c.jsx(Ak,{})," Posting Berita"]}),c.jsxs(hR,{onClick:t,children:[c.jsx(zk,{})," Logout"]})]})]})}const pR=g.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,gR=g.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;function mR(){return c.jsxs(pR,{children:[c.jsx(fR,{}),c.jsx(gR,{children:c.jsx(ug,{})})]})}const yR=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,vR=g(T.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,xR=g(T.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,bR=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
`,Xo=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  p {
    font-size: 1.1rem;
    color: #00ff87;
  }
`,kR=g.span`
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;function wR(){const{user:t}=Mn();return c.jsxs(yR,{children:[c.jsx(vR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Profil Moderator"}),c.jsx(xR,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:c.jsxs(bR,{children:[c.jsxs(Xo,{children:[c.jsx("label",{children:"Username"}),c.jsx("p",{children:(t==null?void 0:t.username)||"Tidak tersedia"})]}),c.jsxs(Xo,{children:[c.jsx("label",{children:"Role"}),c.jsx(kR,{children:(t==null?void 0:t.role)||"Moderator"})]}),c.jsxs(Xo,{children:[c.jsx("label",{children:"Status"}),c.jsx("p",{children:"Aktif"})]}),c.jsxs(Xo,{children:[c.jsx("label",{children:"Bergabung Sejak"}),c.jsx("p",{children:"Januari 2024"})]})]})})]})}const Gd=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,jR=g.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,_R=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,SR=g(T.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .info {
    opacity: 1;
  }
`,PR=g.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`,CR=g(T.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  color: #1a1a2e;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 255, 135, 0.3);
  z-index: 100;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.4);
  }
`,Cy=g.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);

  h3 {
    margin-bottom: 1rem;
    color: #00ff87;
  }

  p {
    margin-bottom: 2rem;
  }
`,TR=g(T.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.3);
  }
`;function ER(){const t=J(),{user:e}=Mn(),[n,i]=_.useState([]),[r,s]=_.useState(!0);return _.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:o,error:l}=await st.from("posts").select("*").eq("user_id",e.id).eq("category","private").order("created_at",{ascending:!1});if(l)throw l;i(o||[])}catch(o){console.error("Error:",o)}finally{s(!1)}})()},[e]),r?c.jsx(Gd,{children:c.jsx(Cy,{children:"Loading..."})}):n.length===0?c.jsx(Gd,{children:c.jsxs(Cy,{children:[c.jsx("h3",{children:"Belum ada foto"}),c.jsx("p",{children:"Mulai posting foto pertama Anda"}),c.jsxs(TR,{onClick:()=>t("/user/posting"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[c.jsx(wk,{})," Posting Foto"]})]})}):c.jsxs(Gd,{children:[c.jsx(jR,{children:"Galeri Foto Saya"}),c.jsx(_R,{children:n.map(a=>c.jsxs(SR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[c.jsx("img",{src:a.image_url,alt:a.title||"Gallery Image"}),c.jsxs(PR,{className:"info",children:[c.jsx("h3",{children:a.title||"Untitled"}),c.jsx("p",{children:a.caption||""})]})]},a.id))}),c.jsx(CR,{onClick:()=>t("/user/gallery/posting"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(OE,{})})]})}const MR=g.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,AR=g(T.h2)`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,LR=g.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Yd=g.div`
  margin-bottom: 1.5rem;
`,Xd=g.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
`,OR=g.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,zR=g.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  min-height: 200px;
  resize: vertical;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,IR=g.div`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }
`,RR=g.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-top: 1rem;
`,DR=g(T.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;function $R(){const[t,e]=_.useState(""),[n,i]=_.useState(""),[r,s]=_.useState(null),[a,o]=_.useState(null),[l,u]=_.useState(!1),d=f=>{const p=f.target.files[0];if(p){if(p.size>5*1024*1024){alert("File terlalu besar! Maksimal 5MB");return}s(p);const m=new FileReader;m.onloadend=()=>{o(m.result)},m.readAsDataURL(p)}},h=async f=>{f.preventDefault(),u(!0);try{await new Promise(p=>setTimeout(p,1500)),console.log("Berita Data:",{title:t,content:n,image:r}),e(""),i(""),s(null),o(null),alert("Berita berhasil diposting! (simulasi)")}catch(p){console.error("Error:",p),alert("Gagal memposting berita. Silakan coba lagi.")}finally{u(!1)}};return c.jsxs(MR,{children:[c.jsx(AR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Posting Berita"}),c.jsxs(LR,{onSubmit:h,children:[c.jsxs(Yd,{children:[c.jsx(Xd,{children:"Judul Berita"}),c.jsx(OR,{type:"text",value:t,onChange:f=>e(f.target.value),required:!0,placeholder:"Masukkan judul berita..."})]}),c.jsxs(Yd,{children:[c.jsx(Xd,{children:"Gambar Berita"}),c.jsxs(IR,{onClick:()=>document.getElementById("imageInput").click(),children:[c.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:d,style:{display:"none"}}),a?c.jsx(RR,{src:a,alt:"Preview"}):c.jsxs(c.Fragment,{children:[c.jsx(Ck,{style:{fontSize:"2rem",color:"#00ff87",marginBottom:"1rem"}}),c.jsx("p",{style:{color:"white"},children:"Klik untuk upload gambar"})]})]})]}),c.jsxs(Yd,{children:[c.jsx(Xd,{children:"Isi Berita"}),c.jsx(zR,{value:n,onChange:f=>i(f.target.value),required:!0,placeholder:"Tulis isi berita..."})]}),c.jsx(DR,{type:"submit",disabled:l||!t||!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:l?"Memposting...":"Posting Berita"})]})]})}const FR=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,BR=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,NR=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,VR=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,HR=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,UR=g.h2`
  color: #00ff87;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`,qo=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
`,WR=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Jo=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,KR=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,GR=g.img`
  width: 150px;
  height: 150px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
`;function YR(){const t=J();return c.jsxs(FR,{children:[c.jsx(KR,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(BR,{children:[c.jsxs(NR,{children:[c.jsx(VR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"SMKN 1 Bulan"}),c.jsx(GR,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo SMKN 1 Bulan"})]}),c.jsxs(WR,{children:[c.jsxs(Jo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(no,{}),c.jsx("h3",{children:"1000+"}),c.jsx("p",{children:"Lulusan"})]}),c.jsxs(Jo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(ft,{}),c.jsx("h3",{children:"50+"}),c.jsx("p",{children:"Guru & Staff"})]}),c.jsxs(Jo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(ir,{}),c.jsx("h3",{children:"100+"}),c.jsx("p",{children:"Prestasi"})]}),c.jsxs(Jo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(Sk,{}),c.jsx("h3",{children:"25+"}),c.jsx("p",{children:"Mitra Industri"})]})]}),c.jsxs(HR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[c.jsx(UR,{children:"Sejarah"}),c.jsx(qo,{children:"SMKN 1 Bulan didirikan pada tahun 2005 sebagai respons terhadap kebutuhan akan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Berawal dari visi untuk menciptakan generasi yang kompeten dan berakhlak mulia, sekolah ini dibangun di atas lahan seluas 2 hektar yang sebelumnya merupakan area perkebunan. Dengan dukungan penuh dari pemerintah daerah dan masyarakat sekitar, pembangunan fasilitas pendidikan dimulai dengan tiga program keahlian utama: Rekayasa Perangkat Lunak, Teknik Komputer dan Jaringan, serta Multimedia."}),c.jsx(qo,{children:"Dalam perjalanannya selama lima tahun pertama, SMKN 1 Bulan terus mengembangkan infrastruktur dan kualitas pendidikannya. Laboratorium komputer dilengkapi dengan perangkat terkini, perpustakaan digital dibangun untuk mendukung pembelajaran, dan kerjasama dengan berbagai perusahaan teknologi mulai dijalin. Prestasi demi prestasi mulai diraih oleh para siswa dalam berbagai kompetisi tingkat kabupaten, provinsi, hingga nasional. Hal ini semakin memantapkan posisi SMKN 1 Bulan sebagai salah satu sekolah kejuruan unggulan di bidang teknologi informasi."}),c.jsx(qo,{children:"Memasuki dekade kedua, SMKN 1 Bulan mengembangkan sayapnya dengan membuka program keahlian baru yaitu Bisnis Digital, merespons perkembangan era digital dan e-commerce. Inovasi pembelajaran terus dilakukan dengan mengadopsi teknologi terbaru dan metode pengajaran yang lebih interaktif. Program magang dan sertifikasi kompetensi diperkuat melalui kerjasama dengan lebih dari 25 mitra industri, memberikan kesempatan bagi siswa untuk mendapatkan pengalaman kerja nyata dan meningkatkan prospek karir mereka setelah lulus."}),c.jsx(qo,{children:"Hingga saat ini, SMKN 1 Bulan telah menghasilkan lebih dari 1000 lulusan yang tersebar di berbagai perusahaan teknologi terkemuka, baik di dalam maupun luar negeri. Beberapa alumni bahkan telah sukses mendirikan startup teknologi mereka sendiri. Dengan dukungan lebih dari 50 tenaga pendidik dan staff yang berkualitas, SMKN 1 Bulan terus berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan siap menghadapi tantangan di era digital."})]})]})]})}const XR=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,qR=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,JR=g.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,QR=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,ZR=g.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem 0;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`,eD=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Qo=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,tD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,qd=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,nD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function iD(){const t=J();return c.jsxs(XR,{children:[c.jsx(nD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(qR,{children:[c.jsxs(JR,{children:[c.jsx(QR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kepala Sekolah"}),c.jsx(ZR,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"}),c.jsx("h2",{style:{color:"#00ff87",marginTop:"1rem"},children:"Dr. Ahmad Sulaiman, M.Pd"})]}),c.jsxs(tD,{children:[c.jsxs(qd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(no,{}),c.jsx("h3",{children:"25+"}),c.jsx("p",{children:"Tahun Pengalaman"})]}),c.jsxs(qd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(kk,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Penghargaan"})]}),c.jsxs(qd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(xE,{}),c.jsx("h3",{children:"10+"}),c.jsx("p",{children:"Program Inovasi"})]})]}),c.jsxs(eD,{children:[c.jsx(Qo,{children:"Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Sebagai Kepala SMKN 1 Bulan, saya menyambut baik dan merasa bangga atas kepercayaan yang diberikan untuk memimpin lembaga pendidikan yang fokus pada pengembangan teknologi dan keterampilan digital ini."}),c.jsx(Qo,{children:"SMKN 1 Bulan hadir sebagai solusi atas kebutuhan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan berakhlak mulia. Melalui berbagai program inovatif dan kerjasama dengan industri, kami terus berupaya meningkatkan kualitas pembelajaran dan pengembangan siswa."}),c.jsx(Qo,{children:"Kepada seluruh siswa, saya mengajak untuk terus semangat dalam menuntut ilmu dan mengembangkan diri. Jadikan masa sekolah ini sebagai kesempatan emas untuk mempersiapkan diri menghadapi tantangan di era digital. Kepada para guru dan staff, mari kita bersama-sama menciptakan lingkungan belajar yang kondusif dan inspiratif bagi seluruh warga sekolah."}),c.jsx(Qo,{children:"Akhir kata, saya mengucapkan terima kasih atas dukungan semua pihak dalam memajukan SMKN 1 Bulan. Mari kita bersama-sama mewujudkan visi sekolah untuk menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Wassalamu'alaikum Warahmatullahi Wabarakatuh."})]})]})]})}const rD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,sD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,aD=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,oD=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,lD=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Zo=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,cD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Jd=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,uD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function dD(){const t=J();return c.jsxs(rD,{children:[c.jsx(uD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(sD,{children:[c.jsx(aD,{children:c.jsx(oD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Visi & Misi"})}),c.jsxs(cD,{children:[c.jsxs(Jd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(EE,{}),c.jsx("h3",{children:"Visi"}),c.jsx("p",{children:"Terdepan dalam Inovasi"})]}),c.jsxs(Jd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(bE,{}),c.jsx("h3",{children:"Misi"}),c.jsx("p",{children:"Pengembangan Berkelanjutan"})]}),c.jsxs(Jd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[c.jsx(Sk,{}),c.jsx("h3",{children:"Nilai"}),c.jsx("p",{children:"Integritas & Profesional"})]})]}),c.jsxs(lD,{children:[c.jsx(Zo,{children:"Visi SMKN 1 Bulan adalah menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Kami berkomitmen untuk menciptakan lingkungan pembelajaran yang mendukung pengembangan potensi setiap siswa, baik dalam aspek akademik maupun karakter."}),c.jsx(Zo,{children:"Dalam mewujudkan visi tersebut, kami menjalankan misi untuk menyelenggarakan pendidikan berkualitas berbasis teknologi yang relevan dengan kebutuhan industri. Kami juga fokus pada pengembangan karakter dan kepribadian siswa melalui berbagai program pembinaan dan kegiatan ekstrakurikuler yang terarah."}),c.jsx(Zo,{children:"Misi kami juga mencakup upaya membangun kerjasama yang kuat dengan industri dan masyarakat. Hal ini penting untuk memastikan bahwa kurikulum dan program pembelajaran kami selalu sejalan dengan perkembangan teknologi dan kebutuhan dunia kerja. Selain itu, kami terus meningkatkan kompetensi guru dan staff melalui berbagai program pengembangan profesional."}),c.jsx(Zo,{children:"Dengan visi dan misi yang jelas ini, SMKN 1 Bulan berkomitmen untuk terus berkembang dan berinovasi dalam menghadapi tantangan pendidikan di era digital. Kami percaya bahwa dengan fondasi yang kuat dalam nilai-nilai integritas, profesionalisme, dan inovasi, kami dapat menghasilkan lulusan yang siap berkontribusi positif bagi masyarakat dan industri."})]})]})]})}const hD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,fD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,pD=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,gD=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,mD=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,yD=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,el=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,vD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,tl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,xD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function bD(){const t=J();return c.jsxs(hD,{children:[c.jsx(xD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(fD,{children:[c.jsxs(pD,{children:[c.jsx(gD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Akademik"}),c.jsx(mD,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/akademik.jpg",alt:"Program Akademik"})]}),c.jsxs(vD,{children:[c.jsxs(tl,{children:[c.jsx(TE,{}),c.jsx("h3",{children:"Praktik Industri"}),c.jsx("p",{children:"Pengalaman Kerja Nyata"})]}),c.jsxs(tl,{children:[c.jsx(wE,{}),c.jsx("h3",{children:"Teaching Factory"}),c.jsx("p",{children:"Pembelajaran Berbasis Produk"})]}),c.jsxs(tl,{children:[c.jsx(no,{}),c.jsx("h3",{children:"Sertifikasi"}),c.jsx("p",{children:"Kompetensi Terstandar"})]}),c.jsxs(tl,{children:[c.jsx(kk,{}),c.jsx("h3",{children:"Kompetisi"}),c.jsx("p",{children:"Prestasi Nasional"})]})]}),c.jsxs(yD,{children:[c.jsx(el,{children:"Program akademik di SMKN 1 Bulan dirancang untuk mempersiapkan siswa menghadapi tantangan industri digital. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, siswa tidak hanya belajar teori tetapi juga praktik langsung menggunakan teknologi terkini."}),c.jsx(el,{children:"Teaching Factory menjadi salah satu program unggulan dimana siswa belajar dalam lingkungan yang menyerupai industri sesungguhnya. Mereka mengerjakan proyek nyata dari klien dan belajar mengelola proyek dari awal hingga akhir."}),c.jsx(el,{children:"Program sertifikasi kompetensi memastikan lulusan memiliki kualifikasi yang diakui industri. Kami bekerjasama dengan berbagai lembaga sertifikasi untuk memberikan kesempatan siswa mendapatkan sertifikat kompetensi di bidangnya."}),c.jsx(el,{children:"Siswa juga didorong untuk aktif mengikuti berbagai kompetisi tingkat daerah hingga nasional. Hal ini membantu mengasah kemampuan teknis dan soft skill mereka, serta membuka peluang networking dengan industri."})]})]})]})}const kD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,wD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,jD=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,_D=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,SD=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,PD=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,nl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,CD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,il=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,TD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function ED(){const t=J();return c.jsxs(kD,{children:[c.jsx(TD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(wD,{children:[c.jsxs(jD,{children:[c.jsx(_D,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Penguatan Karakter"}),c.jsx(SD,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/karakter.jpg",alt:"Penguatan Karakter"})]}),c.jsxs(CD,{children:[c.jsxs(il,{children:[c.jsx(zE,{}),c.jsx("h3",{children:"Religius"}),c.jsx("p",{children:"Penguatan Nilai Agama"})]}),c.jsxs(il,{children:[c.jsx(Pk,{}),c.jsx("h3",{children:"Integritas"}),c.jsx("p",{children:"Pembentukan Karakter"})]}),c.jsxs(il,{children:[c.jsx(PE,{}),c.jsx("h3",{children:"Gotong Royong"}),c.jsx("p",{children:"Kerjasama Tim"})]}),c.jsxs(il,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"Sosial"}),c.jsx("p",{children:"Kepedulian Masyarakat"})]})]}),c.jsxs(PD,{children:[c.jsx(nl,{children:"Program penguatan karakter di SMKN 1 Bulan berfokus pada pembentukan kepribadian siswa yang berakhlak mulia. Melalui berbagai kegiatan keagamaan, siswa diajak untuk mendalami dan mengamalkan nilai-nilai spiritual dalam kehidupan sehari-hari."}),c.jsx(nl,{children:"Pembentukan integritas menjadi fokus utama melalui program-program seperti leadership camp, outbound training, dan mentoring karakter. Siswa dilatih untuk menjadi pribadi yang jujur, bertanggung jawab, dan memiliki etika yang baik."}),c.jsx(nl,{children:"Nilai gotong royong dan kerjasama tim ditanamkan melalui berbagai kegiatan kelompok dan proyek sosial. Siswa belajar untuk bekerja dalam tim, menghargai perbedaan, dan berkontribusi untuk kepentingan bersama."}),c.jsx(nl,{children:"Kepedulian sosial dikembangkan melalui program bakti sosial, kunjungan ke panti asuhan, dan berbagai kegiatan kemasyarakatan lainnya. Hal ini membantu siswa memahami pentingnya empati dan kontribusi positif kepada masyarakat."})]})]})]})}const MD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,AD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,LD=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,OD=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,zD=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,ID=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,rl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,RD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,sl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,DD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function $D(){const t=J();return c.jsxs(MD,{children:[c.jsx(DD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(AD,{children:[c.jsxs(LD,{children:[c.jsx(OD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Ekstrakurikuler"}),c.jsx(zD,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/program-ekstrakurikuler.jpg",alt:"Program Ekstrakurikuler"})]}),c.jsxs(RD,{children:[c.jsxs(sl,{children:[c.jsx(jk,{}),c.jsx("h3",{children:"Olahraga"}),c.jsx("p",{children:"Pengembangan Fisik"})]}),c.jsxs(sl,{children:[c.jsx(Ek,{}),c.jsx("h3",{children:"Seni"}),c.jsx("p",{children:"Kreativitas & Budaya"})]}),c.jsxs(sl,{children:[c.jsx(LE,{}),c.jsx("h3",{children:"Jurnalistik"}),c.jsx("p",{children:"Media & Komunikasi"})]}),c.jsxs(sl,{children:[c.jsx(jE,{}),c.jsx("h3",{children:"Coding Club"}),c.jsx("p",{children:"Pemrograman"})]})]}),c.jsxs(ID,{children:[c.jsx(rl,{children:"Program ekstrakurikuler di SMKN 1 Bulan dirancang untuk mengembangkan bakat dan minat siswa di luar jam pelajaran. Melalui berbagai kegiatan ekstrakurikuler, siswa dapat mengeksplorasi dan mengembangkan potensi diri dalam bidang yang mereka minati."}),c.jsx(rl,{children:"Dalam bidang olahraga, kami memiliki berbagai cabang seperti futsal, basket, dan bulu tangkis. Kegiatan ini tidak hanya melatih fisik tetapi juga mengajarkan nilai-nilai sportivitas, kerjasama tim, dan disiplin."}),c.jsx(rl,{children:"Bidang seni dan budaya diwadahi melalui ekstrakurikuler musik, tari, dan teater. Siswa dapat mengekspresikan kreativitas mereka sekaligus melestarikan budaya lokal melalui berbagai pertunjukan dan festival seni."}),c.jsx(rl,{children:"Untuk mengembangkan kemampuan di bidang teknologi, Coding Club menjadi wadah bagi siswa yang tertarik dengan pemrograman dan pengembangan software. Mereka dapat berkolaborasi dalam berbagai proyek dan mengikuti kompetisi programming."})]})]})]})}const FD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,BD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,ND=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,VD=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,HD=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,UD=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,al=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,WD=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,ol=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,KD=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qd=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,GD=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function YD(){const t=J();return c.jsxs(FD,{children:[c.jsx(GD,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(BD,{children:[c.jsxs(ND,{children:[c.jsx(VD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Perpustakaan Digital"}),c.jsx(HD,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus1.jpg",alt:"Perpustakaan Digital"})]}),c.jsxs(WD,{children:[c.jsxs(ol,{children:[c.jsx(yE,{}),c.jsx("h3",{children:"10.000+"}),c.jsx("p",{children:"Koleksi Digital"})]}),c.jsxs(ol,{children:[c.jsx(Bg,{}),c.jsx("h3",{children:"24/7"}),c.jsx("p",{children:"Akses Online"})]}),c.jsxs(ol,{children:[c.jsx(RE,{}),c.jsx("h3",{children:"Mudah"}),c.jsx("p",{children:"Pencarian Cepat"})]}),c.jsxs(ol,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"1000+"}),c.jsx("p",{children:"Pengguna Aktif"})]})]}),c.jsxs(UD,{children:[c.jsx(al,{children:"Perpustakaan Digital SMKN 1 Bulan merupakan inovasi dalam penyediaan sumber belajar yang dapat diakses kapan saja dan dimana saja. Dengan koleksi digital yang komprehensif, siswa dapat dengan mudah mengakses berbagai referensi untuk mendukung pembelajaran mereka."}),c.jsx(al,{children:"Sistem perpustakaan digital kami dilengkapi dengan fitur pencarian canggih yang memudahkan siswa menemukan materi yang mereka butuhkan. Koleksi digital mencakup buku teks, jurnal, majalah, dan berbagai sumber belajar digital lainnya yang relevan dengan kurikulum."}),c.jsx(al,{children:"Selain itu, perpustakaan digital juga terintegrasi dengan sistem pembelajaran online sekolah, memungkinkan guru untuk membuat referensi digital dan membagikannya kepada siswa. Hal ini mendukung proses pembelajaran yang lebih efektif dan interaktif."}),c.jsx(al,{children:"Kami terus mengembangkan koleksi dan layanan perpustakaan digital untuk memastikan siswa memiliki akses ke sumber belajar terkini yang mendukung pengembangan kompetensi mereka di era digital."}),c.jsxs(KD,{children:[c.jsx(Qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus2.jpg",alt:"Area Baca"}),c.jsx(Qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus3.jpg",alt:"Ruang Komputer"}),c.jsx(Qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus4.jpg",alt:"Koleksi Digital"})]})]})]})]})}const XD=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,qD=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,JD=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,QD=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,ZD=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,e$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ll=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,t$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,cl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,n$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zd=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,i$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function r$(){const t=J();return c.jsxs(XD,{children:[c.jsx(i$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(qD,{children:[c.jsxs(JD,{children:[c.jsx(QD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Laboratorium Komputer"}),c.jsx(ZD,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab1.jpg",alt:"Lab Komputer"})]}),c.jsxs(t$,{children:[c.jsxs(cl,{children:[c.jsx(Bg,{}),c.jsx("h3",{children:"100+"}),c.jsx("p",{children:"Unit Komputer"})]}),c.jsxs(cl,{children:[c.jsx(Mk,{}),c.jsx("h3",{children:"1 Gbps"}),c.jsx("p",{children:"Koneksi Internet"})]}),c.jsxs(cl,{children:[c.jsx(Ik,{}),c.jsx("h3",{children:"Modern"}),c.jsx("p",{children:"Perangkat Terkini"})]}),c.jsxs(cl,{children:[c.jsx(Rk,{}),c.jsx("h3",{children:"40"}),c.jsx("p",{children:"Kapasitas/Lab"})]})]}),c.jsxs(e$,{children:[c.jsx(ll,{children:"Laboratorium Komputer SMKN 1 Bulan dilengkapi dengan perangkat keras dan lunak terkini untuk mendukung pembelajaran praktik siswa. Setiap komputer dilengkapi dengan spesifikasi yang memadai untuk menjalankan berbagai software pengembangan dan desain."}),c.jsx(ll,{children:"Fasilitas ini terdiri dari tiga ruang laboratorium yang masing-masing memiliki kapasitas 40 siswa. Setiap lab dilengkapi dengan proyektor, AC, dan jaringan internet berkecepatan tinggi untuk mendukung pembelajaran online dan praktik pemrograman."}),c.jsx(ll,{children:"Software yang tersedia mencakup berbagai IDE untuk pemrograman, tools desain grafis, aplikasi office, dan software khusus sesuai kebutuhan jurusan. Semua komputer terhubung dalam jaringan lokal yang memungkinkan sharing resource dan praktik jaringan."}),c.jsx(ll,{children:"Laboratorium juga dilengkapi dengan sistem monitoring yang memungkinkan guru untuk memantau dan mengendalikan aktivitas siswa selama pembelajaran praktik. Hal ini memastikan efektivitas pembelajaran dan penggunaan fasilitas yang optimal."}),c.jsxs(n$,{children:[c.jsx(Zd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab2.jpg",alt:"Ruang Praktik"}),c.jsx(Zd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab3.jpg",alt:"Area Diskusi"}),c.jsx(Zd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab4.jpg",alt:"Peralatan Lab"})]})]})]})]})}const s$=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,a$=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,o$=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,l$=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,c$=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,u$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ul=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,d$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,dl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,h$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,eh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,f$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function p$(){const t=J();return c.jsxs(s$,{children:[c.jsx(f$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(a$,{children:[c.jsxs(o$,{children:[c.jsx(l$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Studio Multimedia"}),c.jsx(c$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio1.jpg",alt:"Studio Multimedia"})]}),c.jsxs(d$,{children:[c.jsxs(dl,{children:[c.jsx(wk,{}),c.jsx("h3",{children:"Pro"}),c.jsx("p",{children:"Peralatan Fotografi"})]}),c.jsxs(dl,{children:[c.jsx(UE,{}),c.jsx("h3",{children:"4K"}),c.jsx("p",{children:"Kualitas Video"})]}),c.jsxs(dl,{children:[c.jsx(AE,{}),c.jsx("h3",{children:"Studio"}),c.jsx("p",{children:"Recording Audio"})]}),c.jsxs(dl,{children:[c.jsx(Bg,{}),c.jsx("h3",{children:"Editing"}),c.jsx("p",{children:"Workstation"})]})]}),c.jsxs(u$,{children:[c.jsx(ul,{children:"Studio Multimedia SMKN 1 Bulan dilengkapi dengan peralatan profesional untuk mendukung pembelajaran praktik siswa jurusan Multimedia. Studio ini dirancang untuk memberikan pengalaman produksi konten digital yang setara dengan standar industri kreatif."}),c.jsx(ul,{children:"Area fotografi dilengkapi dengan berbagai peralatan lighting, backdrop, dan kamera DSLR profesional. Siswa dapat belajar teknik fotografi studio, product photography, dan portrait photography dalam lingkungan yang ideal untuk menghasilkan karya berkualitas tinggi."}),c.jsx(ul,{children:"Studio video production kami memiliki green screen, lighting setup profesional, dan peralatan videografi 4K. Ruang recording audio yang kedap suara memungkinkan siswa untuk memproduksi konten audio berkualitas, mulai dari voice over hingga podcast."}),c.jsx(ul,{children:"Untuk post-production, tersedia workstation editing yang dilengkapi dengan software industri terkini seperti Adobe Creative Suite, DaVinci Resolve, dan berbagai tools profesional lainnya. Siswa dapat mengedit foto, video, dan audio dalam lingkungan yang optimal."}),c.jsxs(h$,{children:[c.jsx(eh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio2.jpg",alt:"Area Fotografi"}),c.jsx(eh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio3.jpg",alt:"Video Production"}),c.jsx(eh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio4.jpg",alt:"Editing Room"})]})]})]})]})}const g$=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,m$=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,y$=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,v$=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,x$=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,b$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,hl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,k$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,fl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,w$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,th=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,j$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function _$(){const t=J();return c.jsxs(g$,{children:[c.jsx(j$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(m$,{children:[c.jsxs(y$,{children:[c.jsx(v$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Ruang Praktik Jaringan"}),c.jsx(x$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan1.jpg",alt:"Ruang Praktik Jaringan"})]}),c.jsxs(k$,{children:[c.jsxs(fl,{children:[c.jsx(Mk,{}),c.jsx("h3",{children:"50+"}),c.jsx("p",{children:"Unit Perangkat"})]}),c.jsxs(fl,{children:[c.jsx(DE,{}),c.jsx("h3",{children:"10+"}),c.jsx("p",{children:"Server Praktik"})]}),c.jsxs(fl,{children:[c.jsx(Vg,{}),c.jsx("h3",{children:"Gigabit"}),c.jsx("p",{children:"Koneksi Jaringan"})]}),c.jsxs(fl,{children:[c.jsx(Ik,{}),c.jsx("h3",{children:"Lengkap"}),c.jsx("p",{children:"Tools Jaringan"})]})]}),c.jsxs(b$,{children:[c.jsx(hl,{children:"Ruang Praktik Jaringan SMKN 1 Bulan dilengkapi dengan berbagai perangkat jaringan modern untuk mendukung pembelajaran praktis siswa jurusan Teknik Komputer dan Jaringan. Fasilitas ini dirancang untuk memberikan pengalaman hands-on dalam mengelola dan mengkonfigurasi infrastruktur jaringan."}),c.jsx(hl,{children:"Lab ini dilengkapi dengan berbagai perangkat jaringan seperti router, switch, access point, dan server yang memungkinkan siswa untuk mempelajari dan mempraktikkan konfigurasi jaringan secara langsung. Setiap workstation dilengkapi dengan tools dan software jaringan terkini untuk simulasi dan monitoring jaringan."}),c.jsx(hl,{children:"Siswa dapat melakukan praktik instalasi dan konfigurasi berbagai jenis jaringan, mulai dari LAN, WLAN, hingga WAN. Mereka juga belajar tentang keamanan jaringan, manajemen server, dan troubleshooting melalui proyek-proyek praktis yang mensimulasikan skenario dunia nyata."}),c.jsx(hl,{children:"Dengan fasilitas yang lengkap ini, siswa dapat mengembangkan keterampilan teknis yang dibutuhkan industri, seperti administrasi jaringan, cloud computing, dan cybersecurity. Pengalaman praktis ini sangat berharga untuk mempersiapkan mereka memasuki dunia kerja di bidang IT."}),c.jsxs(w$,{children:[c.jsx(th,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan2.jpg",alt:"Area Server"}),c.jsx(th,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan3.jpg",alt:"Workstation"}),c.jsx(th,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan4.jpg",alt:"Peralatan Jaringan"})]})]})]})]})}const S$=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,P$=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,C$=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,T$=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,E$=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,M$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,pl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,A$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,gl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,L$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,nh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,O$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function z$(){const t=J();return c.jsxs(S$,{children:[c.jsx(O$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(P$,{children:[c.jsxs(C$,{children:[c.jsx(T$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Aula Serbaguna"}),c.jsx(E$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula1.jpg",alt:"Aula Serbaguna"})]}),c.jsxs(A$,{children:[c.jsxs(gl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"1000+"}),c.jsx("p",{children:"Kapasitas"})]}),c.jsxs(gl,{children:[c.jsx(Ek,{}),c.jsx("h3",{children:"Modern"}),c.jsx("p",{children:"Sound System"})]}),c.jsxs(gl,{children:[c.jsx(no,{}),c.jsx("h3",{children:"Multi"}),c.jsx("p",{children:"Fungsi"})]}),c.jsxs(gl,{children:[c.jsx(kE,{}),c.jsx("h3",{children:"100+"}),c.jsx("p",{children:"Event per Tahun"})]})]}),c.jsxs(M$,{children:[c.jsx(pl,{children:"Aula Serbaguna SMKN 1 Bulan merupakan fasilitas modern yang dirancang untuk mendukung berbagai kegiatan sekolah dan event berskala besar. Dengan kapasitas lebih dari 1000 orang, aula ini dilengkapi dengan sistem tata suara dan pencahayaan profesional untuk mendukung berbagai jenis acara."}),c.jsx(pl,{children:"Ruangan ini dilengkapi dengan panggung permanen yang luas, layar proyeksi berukuran besar, dan sistem audio visual terkini. Area backstage dan ruang persiapan yang nyaman memastikan kelancaran setiap acara yang diselenggarakan, mulai dari upacara hingga pertunjukan seni."}),c.jsx(pl,{children:"Sistem pendingin udara yang optimal dan tata akustik yang dirancang khusus menciptakan kenyamanan maksimal bagi peserta acara. Aula ini juga dilengkapi dengan area lobby yang luas untuk registrasi dan area pameran temporer, serta toilet yang memadai untuk mendukung acara berskala besar."}),c.jsx(pl,{children:"Setiap tahun, aula ini menjadi tempat penyelenggaraan berbagai event penting seperti wisuda, seminar, workshop, pentas seni, dan berbagai kompetisi tingkat sekolah hingga nasional. Fleksibilitas ruangan memungkinkan konfigurasi yang berbeda-beda sesuai kebutuhan acara."}),c.jsxs(L$,{children:[c.jsx(nh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula2.jpg",alt:"Panggung Utama"}),c.jsx(nh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula3.jpg",alt:"Area Duduk"}),c.jsx(nh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula4.jpg",alt:"Lobby Aula"})]})]})]})]})}const I$=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,R$=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,D$=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,$$=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,F$=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,B$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ml=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,N$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,yl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,V$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ih=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,H$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function U$(){const t=J();return c.jsxs(I$,{children:[c.jsx(H$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(R$,{children:[c.jsxs(D$,{children:[c.jsx($$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Lapangan Olahraga"}),c.jsx(F$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan1.jpg",alt:"Lapangan Olahraga"})]}),c.jsxs(N$,{children:[c.jsxs(yl,{children:[c.jsx(jk,{}),c.jsx("h3",{children:"Futsal"}),c.jsx("p",{children:"Lapangan Indoor"})]}),c.jsxs(yl,{children:[c.jsx(WE,{}),c.jsx("h3",{children:"Voli"}),c.jsx("p",{children:"Standar Nasional"})]}),c.jsxs(yl,{children:[c.jsx(gE,{}),c.jsx("h3",{children:"Basket"}),c.jsx("p",{children:"Full Court"})]}),c.jsxs(yl,{children:[c.jsx(Lk,{}),c.jsx("h3",{children:"Atletik"}),c.jsx("p",{children:"Lintasan Lari"})]})]}),c.jsxs(B$,{children:[c.jsx(ml,{children:"Fasilitas olahraga SMKN 1 Bulan dirancang untuk mendukung pengembangan fisik dan bakat olahraga siswa. Dengan area yang luas dan peralatan standar nasional, siswa dapat berlatih dan berkompetisi dalam berbagai cabang olahraga dengan optimal."}),c.jsx(ml,{children:"Lapangan indoor multifungsi dapat digunakan untuk berbagai aktivitas seperti futsal, badminton, dan kegiatan indoor lainnya. Dilengkapi dengan sistem pencahayaan dan ventilasi yang baik, lapangan ini dapat digunakan dalam berbagai kondisi cuaca."}),c.jsx(ml,{children:"Area outdoor terdiri dari lapangan basket full-court dan lapangan voli yang memenuhi standar kompetisi. Lintasan atletik yang mengelilingi lapangan utama memungkinkan siswa untuk berlatih berbagai nomor atletik seperti lari jarak pendek, menengah, dan jauh."}),c.jsx(ml,{children:"Seluruh fasilitas olahraga dilengkapi dengan ruang ganti, toilet, dan area penyimpanan peralatan yang memadai. Perawatan rutin dilakukan untuk memastikan keamanan dan kenyamanan pengguna, serta menjaga kualitas fasilitas tetap optimal."}),c.jsxs(V$,{children:[c.jsx(ih,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan2.jpg",alt:"Lapangan Basket"}),c.jsx(ih,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan3.jpg",alt:"Lapangan Voli"}),c.jsx(ih,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan4.jpg",alt:"Lintasan Atletik"})]})]})]})]})}const W$=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,K$=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,G$=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,Y$=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,X$=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,q$=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,vl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,J$=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,xl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,Q$=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Z$=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function eF(){const t=J();return c.jsxs(W$,{children:[c.jsx(Z$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(K$,{children:[c.jsxs(G$,{children:[c.jsx(Y$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kantin Sehat"}),c.jsx(X$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin1.jpg",alt:"Kantin Sehat"})]}),c.jsxs(J$,{children:[c.jsxs(xl,{children:[c.jsx(HE,{}),c.jsx("h3",{children:"Bersih"}),c.jsx("p",{children:"Standar Higenis"})]}),c.jsxs(xl,{children:[c.jsx(Tk,{}),c.jsx("h3",{children:"Sehat"}),c.jsx("p",{children:"Menu Bergizi"})]}),c.jsxs(xl,{children:[c.jsx(Ok,{}),c.jsx("h3",{children:"Aman"}),c.jsx("p",{children:"Terjamin Mutunya"})]}),c.jsxs(xl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"200+"}),c.jsx("p",{children:"Kapasitas"})]})]}),c.jsxs(q$,{children:[c.jsx(vl,{children:"Kantin Sehat SMKN 1 Bulan merupakan fasilitas yang dirancang untuk menyediakan makanan dan minuman yang sehat, bersih, dan bergizi bagi seluruh warga sekolah. Dengan menerapkan standar kebersihan yang ketat, kami memastikan setiap makanan yang disajikan aman untuk dikonsumsi."}),c.jsx(vl,{children:"Area makan yang nyaman dan bersih dilengkapi dengan ventilasi yang baik dan pencahayaan yang memadai. Meja dan kursi ditata dengan rapi untuk menciptakan suasana yang kondusif bagi siswa dan guru untuk menikmati makanan mereka."}),c.jsx(vl,{children:"Menu yang disediakan bervariasi dan memenuhi standar gizi seimbang. Setiap penjual di kantin harus mengikuti pelatihan penanganan makanan dan mendapatkan sertifikasi dari Dinas Kesehatan. Hal ini untuk memastikan kualitas dan keamanan makanan yang dijual."}),c.jsx(vl,{children:"Kantin juga dilengkapi dengan fasilitas cuci tangan dan tempat sampah yang memadai untuk mendukung kebersihan lingkungan. Pemantauan rutin dilakukan untuk memastikan standar kebersihan dan kualitas makanan tetap terjaga."}),c.jsxs(Q$,{children:[c.jsx(rh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin2.jpg",alt:"Area Makan"}),c.jsx(rh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin3.jpg",alt:"Counter Makanan"}),c.jsx(rh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin4.jpg",alt:"Menu Sehat"})]})]})]})]})}const tF=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,nF=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,iF=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,rF=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,sF=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,aF=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,bl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,oF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,kl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,lF=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,sh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,cF=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function uF(){const t=J();return c.jsxs(tF,{children:[c.jsx(cF,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(nF,{children:[c.jsxs(iF,{children:[c.jsx(rF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Taman Sosial"}),c.jsx(sF,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman1.jpg",alt:"Taman Sosial"})]}),c.jsxs(oF,{children:[c.jsxs(kl,{children:[c.jsx(NE,{}),c.jsx("h3",{children:"Hijau"}),c.jsx("p",{children:"Area Terbuka"})]}),c.jsxs(kl,{children:[c.jsx(Vg,{}),c.jsx("h3",{children:"Free"}),c.jsx("p",{children:"Wifi Area"})]}),c.jsxs(kl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"Nyaman"}),c.jsx("p",{children:"Area Diskusi"})]}),c.jsxs(kl,{children:[c.jsx(Tk,{}),c.jsx("h3",{children:"Asri"}),c.jsx("p",{children:"Taman Edukasi"})]})]}),c.jsxs(aF,{children:[c.jsx(bl,{children:"Taman Sosial SMKN 1 Bulan merupakan ruang terbuka hijau yang dirancang sebagai area interaksi dan pembelajaran outdoor bagi seluruh warga sekolah. Dengan konsep eco-friendly, taman ini dilengkapi dengan berbagai fasilitas yang mendukung kegiatan belajar dan bersosialisasi."}),c.jsx(bl,{children:"Area ini dilengkapi dengan gazebo dan bangku taman yang nyaman untuk kegiatan diskusi kelompok atau sekedar bersantai di waktu istirahat. Koneksi wifi yang tersedia memungkinkan siswa untuk mengakses materi pembelajaran digital sambil menikmati suasana alam yang asri."}),c.jsx(bl,{children:"Taman ini juga berfungsi sebagai laboratorium alam, dengan berbagai jenis tanaman yang diberi label nama ilmiah untuk pembelajaran biologi. Desain taman yang artistik menjadikannya lokasi favorit untuk kegiatan fotografi dan pembuatan konten kreatif siswa."}),c.jsx(bl,{children:"Sebagai bagian dari program sekolah adiwiyata, taman ini juga menjadi contoh penerapan konsep sekolah hijau dan pelestarian lingkungan. Siswa terlibat aktif dalam pemeliharaan taman melalui program piket dan kegiatan ekstrakurikuler pecinta alam."}),c.jsxs(lF,{children:[c.jsx(sh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman2.jpg",alt:"Area Gazebo"}),c.jsx(sh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman3.jpg",alt:"Taman Edukasi"}),c.jsx(sh,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman4.jpg",alt:"Area Diskusi"})]})]})]})]})}const dF=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,hF=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,fF=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,pF=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,gF=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,mF=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,wl=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,yF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,jl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,vF=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ah=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,xF=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function bF(){const t=J();return c.jsxs(dF,{children:[c.jsx(xF,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(hF,{children:[c.jsxs(fF,{children:[c.jsx(pF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Titik Internet"}),c.jsx(gF,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi1.jpg",alt:"Titik Internet"})]}),c.jsxs(yF,{children:[c.jsxs(jl,{children:[c.jsx(Vg,{}),c.jsx("h3",{children:"100+"}),c.jsx("p",{children:"Titik Akses"})]}),c.jsxs(jl,{children:[c.jsx(mE,{}),c.jsx("h3",{children:"1 Gbps"}),c.jsx("p",{children:"Kecepatan"})]}),c.jsxs(jl,{children:[c.jsx(_k,{}),c.jsx("h3",{children:"24/7"}),c.jsx("p",{children:"Akses Internet"})]}),c.jsxs(jl,{children:[c.jsx(Ok,{}),c.jsx("h3",{children:"Aman"}),c.jsx("p",{children:"Koneksi Terlindungi"})]})]}),c.jsxs(mF,{children:[c.jsx(wl,{children:"Fasilitas internet di SMKN 1 Bulan dirancang untuk memberikan akses internet berkecepatan tinggi yang dapat diandalkan di seluruh area sekolah. Dengan lebih dari 100 titik akses yang strategis, siswa dan guru dapat terhubung ke internet kapan saja dan di mana saja dalam lingkungan sekolah."}),c.jsx(wl,{children:"Setiap titik akses dilengkapi dengan teknologi terkini yang mendukung koneksi gigabit, memastikan kecepatan dan stabilitas yang optimal untuk berbagai kebutuhan pembelajaran digital. Sistem load balancing memastikan distribusi bandwidth yang merata ke seluruh pengguna."}),c.jsx(wl,{children:"Keamanan jaringan menjadi prioritas utama dengan implementasi sistem autentikasi terpusat dan enkripsi data. Setiap pengguna memiliki akun pribadi dengan kuota yang dapat dipantau, serta akses ke layanan dan konten yang sesuai dengan kebijakan sekolah."}),c.jsx(wl,{children:"Infrastruktur internet ini mendukung berbagai kegiatan pembelajaran digital, mulai dari akses ke perpustakaan digital, pembelajaran online, hingga praktik pemrograman dan pengembangan aplikasi. Tim IT support kami siap memberikan bantuan teknis untuk memastikan konektivitas yang lancar."}),c.jsxs(vF,{children:[c.jsx(ah,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi2.jpg",alt:"Area Hotspot"}),c.jsx(ah,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi3.jpg",alt:"Ruang Server"}),c.jsx(ah,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi4.jpg",alt:"Monitoring System"})]})]})]})]})}const kF=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,wF=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,jF=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,_F=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,SF=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,PF=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,CF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,_l=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,TF=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,oh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,EF=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Ty=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Ey=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,MF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,ch=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,AF=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function LF(){const t=J();return c.jsxs(kF,{children:[c.jsx(jF,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(wF,{children:[c.jsxs(_F,{children:[c.jsx(SF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx(PF,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs(Ty,{children:[c.jsx(Ey,{children:"Informasi Pengurus"}),c.jsxs(MF,{children:[c.jsxs(ch,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(ch,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(ch,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs(Ty,{children:[c.jsx(Ey,{children:"Jadwal Latihan"}),c.jsx(AF,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(CF,{children:[c.jsxs(_l,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(_l,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(_l,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(_l,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(TF,{children:[c.jsx(oh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(oh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(oh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(EF,{children:[c.jsx(lh,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(lh,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(lh,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const OF=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,zF=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,IF=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,RF=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,DF=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,$F=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,FF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Sl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,BF=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,uh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,NF=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,dh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,My=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Ay=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,VF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,hh=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,HF=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function UF(){const t=J();return c.jsxs(OF,{children:[c.jsx(IF,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(zF,{children:[c.jsxs(RF,{children:[c.jsx(DF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx($F,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs(My,{children:[c.jsx(Ay,{children:"Informasi Pengurus"}),c.jsxs(VF,{children:[c.jsxs(hh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(hh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(hh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs(My,{children:[c.jsx(Ay,{children:"Jadwal Latihan"}),c.jsx(HF,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(FF,{children:[c.jsxs(Sl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(Sl,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(Sl,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(Sl,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(BF,{children:[c.jsx(uh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(uh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(uh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(NF,{children:[c.jsx(dh,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(dh,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(dh,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const WF=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,KF=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,GF=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,YF=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,XF=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,qF=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,JF=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Pl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,QF=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,fh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,ZF=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ph=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Ly=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Oy=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,eB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,gh=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,tB=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function nB(){const t=J();return c.jsxs(WF,{children:[c.jsx(GF,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(KF,{children:[c.jsxs(YF,{children:[c.jsx(XF,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx(qF,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs(Ly,{children:[c.jsx(Oy,{children:"Informasi Pengurus"}),c.jsxs(eB,{children:[c.jsxs(gh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(gh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(gh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs(Ly,{children:[c.jsx(Oy,{children:"Jadwal Latihan"}),c.jsx(tB,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(JF,{children:[c.jsxs(Pl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(Pl,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(Pl,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(Pl,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(QF,{children:[c.jsx(fh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(fh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(fh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(ZF,{children:[c.jsx(ph,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(ph,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(ph,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const iB=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,rB=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,sB=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,aB=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,oB=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,lB=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,cB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Cl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,uB=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,mh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,dB=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,yh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,zy=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Iy=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,hB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,vh=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,fB=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function pB(){const t=J();return c.jsxs(iB,{children:[c.jsx(sB,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(rB,{children:[c.jsxs(aB,{children:[c.jsx(oB,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx(lB,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs(zy,{children:[c.jsx(Iy,{children:"Informasi Pengurus"}),c.jsxs(hB,{children:[c.jsxs(vh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(vh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(vh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs(zy,{children:[c.jsx(Iy,{children:"Jadwal Latihan"}),c.jsx(fB,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(cB,{children:[c.jsxs(Cl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(Cl,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(Cl,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(Cl,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(uB,{children:[c.jsx(mh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(mh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(mh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(dB,{children:[c.jsx(yh,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(yh,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(yh,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const gB=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,mB=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,yB=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,vB=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,xB=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,bB=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,kB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Tl=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,wB=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,xh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,jB=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,bh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Ry=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Dy=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,_B=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,kh=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,SB=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function PB(){const t=J();return c.jsxs(gB,{children:[c.jsx(yB,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(mB,{children:[c.jsxs(vB,{children:[c.jsx(xB,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx(bB,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs(Ry,{children:[c.jsx(Dy,{children:"Informasi Pengurus"}),c.jsxs(_B,{children:[c.jsxs(kh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(kh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(kh,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs(Ry,{children:[c.jsx(Dy,{children:"Jadwal Latihan"}),c.jsx(SB,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(kB,{children:[c.jsxs(Tl,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(Tl,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(Tl,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(Tl,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(wB,{children:[c.jsx(xh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(xh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(xh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(jB,{children:[c.jsx(bh,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(bh,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(bh,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const CB=g.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,TB=g.div`
  max-width: 1200px;
  margin: 0 auto;
`,EB=g(T.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,MB=g.div`
  text-align: center;
  margin-bottom: 4rem;
`,AB=g(T.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,LB=g.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,OB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,El=g(T.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,zB=g(T.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,wh=g.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,IB=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,jh=g.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,$y=g.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Fy=g.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,RB=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,_h=g.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,DB=g.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function $B(){const t=J();return c.jsxs(CB,{children:[c.jsx(EB,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:c.jsx(_e,{})}),c.jsxs(TB,{children:[c.jsxs(MB,{children:[c.jsx(AB,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),c.jsx(LB,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),c.jsxs($y,{children:[c.jsx(Fy,{children:"Informasi Pengurus"}),c.jsxs(RB,{children:[c.jsxs(_h,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),c.jsx("h4",{children:"Pembina"}),c.jsx("p",{children:"Mrs. Sarah Johnson"}),c.jsx("p",{children:"Guru Bahasa Inggris"})]}),c.jsxs(_h,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),c.jsx("h4",{children:"Ketua"}),c.jsx("p",{children:"John Doe"}),c.jsx("p",{children:"XII RPL 1"})]}),c.jsxs(_h,{children:[c.jsx("div",{className:"profile-image",children:c.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),c.jsx("h4",{children:"Wakil Ketua"}),c.jsx("p",{children:"Jane Smith"}),c.jsx("p",{children:"XI RPL 2"})]})]})]}),c.jsxs($y,{children:[c.jsx(Fy,{children:"Jadwal Latihan"}),c.jsx(DB,{children:c.jsx("p",{children:"Selasa dan Jumat"})})]}),c.jsxs(OB,{children:[c.jsxs(El,{children:[c.jsx(ft,{}),c.jsx("h3",{children:"40+"}),c.jsx("p",{children:"Active Members"})]}),c.jsxs(El,{children:[c.jsx(as,{}),c.jsx("h3",{children:"2x"}),c.jsx("p",{children:"Weekly Meeting"})]}),c.jsxs(El,{children:[c.jsx(ir,{}),c.jsx("h3",{children:"15+"}),c.jsx("p",{children:"Achievements"})]}),c.jsxs(El,{children:[c.jsx(os,{}),c.jsx("h3",{children:"Lab"}),c.jsx("p",{children:"Meeting Point"})]})]}),c.jsxs(zB,{children:[c.jsx(wh,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),c.jsx(wh,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),c.jsx(wh,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),c.jsxs(IB,{children:[c.jsx(jh,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),c.jsx(jh,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),c.jsx(jh,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}function FB(){return c.jsx(CT,{children:c.jsxs("div",{className:"App",style:{background:"#1a1a2e"},children:[c.jsxs(Uj,{children:[c.jsx(H,{path:"/",element:c.jsxs(c.Fragment,{children:[c.jsx(RT,{}),c.jsx(_9,{}),c.jsx(N9,{}),c.jsx(Q9,{}),c.jsx(rE,{}),c.jsx(JE,{})]})}),c.jsxs(H,{path:"/admin/*",element:c.jsx(dM,{}),children:[c.jsx(H,{index:!0,element:c.jsx(wz,{})}),c.jsx(H,{path:"users",element:c.jsx(Cz,{})}),c.jsx(H,{path:"students-teachers",element:c.jsx(Rz,{})}),c.jsx(H,{path:"news",element:c.jsx(Uz,{})}),c.jsx(H,{path:"program-news",element:c.jsx(Jz,{})}),c.jsx(H,{path:"extra-news",element:c.jsx(rI,{})})]}),c.jsxs(H,{path:"/user/*",element:c.jsx(gI,{}),children:[c.jsx(H,{index:!0,element:c.jsx(_I,{})}),c.jsx(H,{path:"profile",element:c.jsx(FI,{}),children:c.jsx(H,{path:"settings",element:c.jsx(qI,{})})}),c.jsx(H,{path:"gallery",element:c.jsx(ER,{}),children:c.jsx(H,{path:"posting",element:c.jsx(lR,{})})})]}),c.jsxs(H,{path:"/moderator/*",element:c.jsx(mR,{}),children:[c.jsx(H,{path:"profile",element:c.jsx(wR,{})}),c.jsx(H,{path:"posting-berita",element:c.jsx($R,{})})]}),c.jsx(H,{path:"/school-detail",element:c.jsx(YR,{})}),c.jsx(H,{path:"/kepsek-detail",element:c.jsx(iD,{})}),c.jsx(H,{path:"/visi-misi",element:c.jsx(dD,{})}),c.jsx(H,{path:"/akademik-detail",element:c.jsx(bD,{})}),c.jsx(H,{path:"/karakter-detail",element:c.jsx(ED,{})}),c.jsx(H,{path:"/ekstrakurikuler-detail",element:c.jsx($D,{})}),c.jsx(H,{path:"/perpus-detail",element:c.jsx(YD,{})}),c.jsx(H,{path:"/lab-komputer-detail",element:c.jsx(r$,{})}),c.jsx(H,{path:"/studio-detail",element:c.jsx(p$,{})}),c.jsx(H,{path:"/jaringan-detail",element:c.jsx(_$,{})}),c.jsx(H,{path:"/aula-detail",element:c.jsx(z$,{})}),c.jsx(H,{path:"/lapangan-detail",element:c.jsx(U$,{})}),c.jsx(H,{path:"/kantin-detail",element:c.jsx(eF,{})}),c.jsx(H,{path:"/taman-detail",element:c.jsx(uF,{})}),c.jsx(H,{path:"/internet-detail",element:c.jsx(bF,{})}),c.jsx(H,{path:"/pramuka",element:c.jsx(LF,{})}),c.jsx(H,{path:"/futsal",element:c.jsx(UF,{})}),c.jsx(H,{path:"/pmr",element:c.jsx(nB,{})}),c.jsx(H,{path:"/paskibra",element:c.jsx(pB,{})}),c.jsx(H,{path:"/osis",element:c.jsx(PB,{})}),c.jsx(H,{path:"/english-club",element:c.jsx($B,{})})]}),c.jsx(sM,{})]})})}Ph.createRoot(document.getElementById("root")).render(c.jsx(ze.StrictMode,{children:c.jsx(Qj,{children:c.jsx(FB,{})})}));export{Yc as g};
