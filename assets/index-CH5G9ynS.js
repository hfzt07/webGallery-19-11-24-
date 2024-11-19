var Bk=Object.defineProperty;var Nk=(t,e,n)=>e in t?Bk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>Nk(t,typeof e!="symbol"?e+"":e,n);function Vk(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Uk(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var ty={exports:{}},Nc={},ny={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Hk=Symbol.for("react.portal"),Wk=Symbol.for("react.fragment"),Kk=Symbol.for("react.strict_mode"),Gk=Symbol.for("react.profiler"),Yk=Symbol.for("react.provider"),qk=Symbol.for("react.context"),Xk=Symbol.for("react.forward_ref"),Jk=Symbol.for("react.suspense"),Qk=Symbol.for("react.memo"),Zk=Symbol.for("react.lazy"),Ag=Symbol.iterator;function ew(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,sy={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||iy}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ay(){}ay.prototype=Zr.prototype;function Uf(t,e,n){this.props=t,this.context=e,this.refs=sy,this.updater=n||iy}var Hf=Uf.prototype=new ay;Hf.constructor=Uf;ry(Hf,Zr.prototype);Hf.isPureReactComponent=!0;var Og=Array.isArray,oy=Object.prototype.hasOwnProperty,Wf={current:null},ly={key:!0,ref:!0,__self:!0,__source:!0};function cy(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,i)&&!ly.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ba,type:t,key:s,ref:a,props:r,_owner:Wf.current}}function tw(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function nw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lg=/\/+/g;function Mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nw(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ba:case Hk:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mu(a,0):i,Og(r)?(n="",t!=null&&(n=t.replace(Lg,"$&/")+"/"),_l(r,e,n,"",function(c){return c})):r!=null&&(Kf(r)&&(r=tw(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Lg,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Og(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Mu(s,o);a+=_l(s,e,n,l,r)}else if(l=ew(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Mu(s,o++),a+=_l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},jl={transition:null},rw={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:jl,ReactCurrentOwner:Wf};function uy(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Zr;W.Fragment=Wk;W.Profiler=Gk;W.PureComponent=Uf;W.StrictMode=Kk;W.Suspense=Jk;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;W.act=uy;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ry({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)oy.call(e,l)&&!ly.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:a}};W.createContext=function(t){return t={$$typeof:qk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yk,_context:t},t.Consumer=t};W.createElement=cy;W.createFactory=function(t){var e=cy.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Xk,render:t}};W.isValidElement=Kf;W.lazy=function(t){return{$$typeof:Zk,_payload:{_status:-1,_result:t},_init:iw}};W.memo=function(t,e){return{$$typeof:Qk,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};W.unstable_act=uy;W.useCallback=function(t,e){return Qe.current.useCallback(t,e)};W.useContext=function(t){return Qe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Qe.current.useEffect(t,e)};W.useId=function(){return Qe.current.useId()};W.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Qe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};W.useRef=function(t){return Qe.current.useRef(t)};W.useState=function(t){return Qe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Qe.current.useTransition()};W.version="18.3.1";ny.exports=W;var j=ny.exports;const Le=Bc(j),Zd=Vk({__proto__:null,default:Le},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sw=j,aw=Symbol.for("react.element"),ow=Symbol.for("react.fragment"),lw=Object.prototype.hasOwnProperty,cw=sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uw={key:!0,ref:!0,__self:!0,__source:!0};function dy(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)lw.call(e,i)&&!uw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aw,type:t,key:s,ref:a,props:r,_owner:cw.current}}Nc.Fragment=ow;Nc.jsx=dy;Nc.jsxs=dy;ty.exports=Nc;var u=ty.exports,eh={},hy={exports:{}},kt={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,I){var $=O.length;O.push(I);e:for(;0<$;){var F=$-1>>>1,Q=O[F];if(0<r(Q,I))O[F]=I,O[$]=Q,$=F;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var I=O[0],$=O.pop();if($!==I){O[0]=$;e:for(var F=0,Q=O.length,ft=Q>>>1;F<ft;){var Ee=2*(F+1)-1,_t=O[Ee],be=Ee+1,xi=O[be];if(0>r(_t,$))be<Q&&0>r(xi,_t)?(O[F]=xi,O[be]=$,F=be):(O[F]=_t,O[Ee]=$,F=Ee);else if(be<Q&&0>r(xi,$))O[F]=xi,O[be]=$,F=be;else break e}}return I}function r(O,I){var $=O.sortIndex-I.sortIndex;return $!==0?$:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,g=!1,m=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=O)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function w(O){if(m=!1,b(O),!g)if(n(l)!==null)g=!0,N(_);else{var I=n(c);I!==null&&re(w,I.startTime-O)}}function _(O,I){g=!1,m&&(m=!1,v(P),P=-1),p=!0;var $=f;try{for(b(I),h=n(l);h!==null&&(!(h.expirationTime>I)||O&&!L());){var F=h.callback;if(typeof F=="function"){h.callback=null,f=h.priorityLevel;var Q=F(h.expirationTime<=I);I=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&i(l),b(I)}else i(l);h=n(l)}if(h!==null)var ft=!0;else{var Ee=n(c);Ee!==null&&re(w,Ee.startTime-I),ft=!1}return ft}finally{h=null,f=$,p=!1}}var C=!1,S=null,P=-1,T=5,M=-1;function L(){return!(t.unstable_now()-M<T)}function D(){if(S!==null){var O=t.unstable_now();M=O;var I=!0;try{I=S(!0,O)}finally{I?H():(C=!1,S=null)}}else C=!1}var H;if(typeof y=="function")H=function(){y(D)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,Y=J.port2;J.port1.onmessage=D,H=function(){Y.postMessage(null)}}else H=function(){k(D,0)};function N(O){S=O,C||(C=!0,H())}function re(O,I){P=k(function(){O(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,N(_))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var $=f;f=I;try{return O()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=f;f=O;try{return I()}finally{f=$}},t.unstable_scheduleCallback=function(O,I,$){var F=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?F+$:F):$=F,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,O={id:d++,callback:I,priorityLevel:O,startTime:$,expirationTime:Q,sortIndex:-1},$>F?(O.sortIndex=$,e(c,O),n(l)===null&&O===n(c)&&(m?(v(P),P=-1):m=!0,re(w,$-F))):(O.sortIndex=Q,e(l,O),g||p||(g=!0,N(_))),O},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(O){var I=f;return function(){var $=f;f=I;try{return O.apply(this,arguments)}finally{f=$}}}})(py);fy.exports=py;var dw=fy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hw=j,xt=dw;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gy=new Set,ra={};function Ji(t,e){Ir(t,e),Ir(t+"Capture",e)}function Ir(t,e){for(ra[t]=e,t=0;t<e.length;t++)gy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=Object.prototype.hasOwnProperty,fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rg={},Dg={};function pw(t){return th.call(Dg,t)?!0:th.call(Rg,t)?!1:fw.test(t)?Dg[t]=!0:(Rg[t]=!0,!1)}function gw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mw(t,e,n,i){if(e===null||typeof e>"u"||gw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Yf);Be[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Yf);Be[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Yf);Be[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,i){var r=Be.hasOwnProperty(e)?Be[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mw(e,n,r,i)&&(n=null),i||r===null?pw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mn=hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),hr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),yy=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),vy=Symbol.for("react.offscreen"),zg=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Au;function Ps(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Ou=!1;function Lu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function yw(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case hr:return"Portal";case nh:return"Profiler";case Xf:return"StrictMode";case ih:return"Suspense";case rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case Jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:sh(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return sh(t(e))}catch{}}return null}function vw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sh(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xw(t){var e=xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=xw(t))}function by(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xy(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ky(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function oh(t,e){ky(t,e);var n=oi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&lh(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $g(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lh(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Tr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Cs(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function wy(t,e){var n=oi(e.value),i=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _y(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_y(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,jy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bw=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){bw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function Sy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function Py(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sy(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kw=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(kw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function Zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ph=null,Er=null,Mr=null;function Ng(t){if(t=Ua(t)){if(typeof ph!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Kc(e),ph(t.stateNode,t.type,e))}}function Cy(t){Er?Mr?Mr.push(t):Mr=[t]:Er=t}function Ty(){if(Er){var t=Er,e=Mr;if(Mr=Er=null,Ng(t),e)for(t=0;t<e.length;t++)Ng(e[t])}}function Ey(t,e){return t(e)}function My(){}var Ru=!1;function Ay(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return Ey(t,e,n)}finally{Ru=!1,(Er!==null||Mr!==null)&&(My(),Ty())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var gh=!1;if(Sn)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){gh=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{gh=!1}function ww(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var $s=!1,Kl=null,Gl=!1,mh=null,_w={onError:function(t){$s=!0,Kl=t}};function jw(t,e,n,i,r,s,a,o,l){$s=!1,Kl=null,ww.apply(_w,arguments)}function Sw(t,e,n,i,r,s,a,o,l){if(jw.apply(this,arguments),$s){if($s){var c=Kl;$s=!1,Kl=null}else throw Error(A(198));Gl||(Gl=!0,mh=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Oy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vg(t){if(Qi(t)!==t)throw Error(A(188))}function Pw(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vg(r),t;if(s===i)return Vg(r),e;s=s.sibling}throw Error(A(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==i)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Ly(t){return t=Pw(t),t!==null?Ry(t):null}function Ry(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ry(t);if(e!==null)return e;t=t.sibling}return null}var Dy=xt.unstable_scheduleCallback,Ug=xt.unstable_cancelCallback,Cw=xt.unstable_shouldYield,Tw=xt.unstable_requestPaint,ke=xt.unstable_now,Ew=xt.unstable_getCurrentPriorityLevel,ep=xt.unstable_ImmediatePriority,zy=xt.unstable_UserBlockingPriority,Yl=xt.unstable_NormalPriority,Mw=xt.unstable_LowPriority,Iy=xt.unstable_IdlePriority,Vc=null,an=null;function Aw(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Rw,Ow=Math.log,Lw=Math.LN2;function Rw(t){return t>>>=0,t===0?32:31-(Ow(t)/Lw|0)|0}var lo=64,co=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ts(o):(s&=a,s!==0&&(i=Ts(s)))}else a=n&~r,a!==0?i=Ts(a):s!==0&&(i=Ts(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kt(e),r=1<<n,i|=t[n],e&=~r;return i}function Dw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kt(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Dw(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $y(){var t=lo;return lo<<=1,!(lo&4194240)&&(lo=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function Iw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kt(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kt(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ie=0;function Fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var By,np,Ny,Vy,Uy,vh=!1,uo=[],Xn=null,Jn=null,Qn=null,oa=new Map,la=new Map,Un=[],$w="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fw(t,e,n,i,r){switch(e){case"focusin":return Xn=us(Xn,t,e,n,i,r),!0;case"dragenter":return Jn=us(Jn,t,e,n,i,r),!0;case"mouseover":return Qn=us(Qn,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oa.set(s,us(oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,la.set(s,us(la.get(s)||null,t,e,n,i,r)),!0}return!1}function Hy(t){var e=Di(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=Oy(n),e!==null){t.blockedOn=e,Uy(t.priority,function(){Ny(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fh=i,n.target.dispatchEvent(i),fh=null}else return e=Ua(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){Sl(t)&&n.delete(e)}function Bw(){vh=!1,Xn!==null&&Sl(Xn)&&(Xn=null),Jn!==null&&Sl(Jn)&&(Jn=null),Qn!==null&&Sl(Qn)&&(Qn=null),oa.forEach(Wg),la.forEach(Wg)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Bw)))}function ca(t){function e(r){return ds(r,t)}if(0<uo.length){ds(uo[0],t);for(var n=1;n<uo.length;n++){var i=uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xn!==null&&ds(Xn,t),Jn!==null&&ds(Jn,t),Qn!==null&&ds(Qn,t),oa.forEach(e),la.forEach(e),n=0;n<Un.length;n++)i=Un[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Hy(n),n.blockedOn===null&&Un.shift()}var Ar=Mn.ReactCurrentBatchConfig,Xl=!0;function Nw(t,e,n,i){var r=ie,s=Ar.transition;Ar.transition=null;try{ie=1,ip(t,e,n,i)}finally{ie=r,Ar.transition=s}}function Vw(t,e,n,i){var r=ie,s=Ar.transition;Ar.transition=null;try{ie=4,ip(t,e,n,i)}finally{ie=r,Ar.transition=s}}function ip(t,e,n,i){if(Xl){var r=xh(t,e,n,i);if(r===null)Wu(t,e,i,Jl,n),Hg(t,i);else if(Fw(r,t,e,n,i))i.stopPropagation();else if(Hg(t,i),e&4&&-1<$w.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&By(s),s=xh(t,e,n,i),s===null&&Wu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var Jl=null;function xh(t,e,n,i){if(Jl=null,t=Zf(i),t=Di(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Oy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function Wy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ew()){case ep:return 1;case zy:return 4;case Yl:case Mw:return 16;case Iy:return 536870912;default:return 16}default:return 16}}var Kn=null,rp=null,Pl=null;function Ky(){if(Pl)return Pl;var t,e=rp,n=e.length,i,r="value"in Kn?Kn.value:Kn.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function Kg(){return!1}function wt(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:Kg,this.isPropagationStopped=Kg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=wt(es),Va=me({},es,{view:0,detail:0}),Uw=wt(Va),zu,Iu,hs,Uc=me({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(zu=t.screenX-hs.screenX,Iu=t.screenY-hs.screenY):Iu=zu=0,hs=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Gg=wt(Uc),Hw=me({},Uc,{dataTransfer:0}),Ww=wt(Hw),Kw=me({},Va,{relatedTarget:0}),$u=wt(Kw),Gw=me({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Yw=wt(Gw),qw=me({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xw=wt(qw),Jw=me({},es,{data:0}),Yg=wt(Jw),Qw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=e4[t])?!!e[t]:!1}function ap(){return t4}var n4=me({},Va,{key:function(t){if(t.key){var e=Qw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i4=wt(n4),r4=me({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=wt(r4),s4=me({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),a4=wt(s4),o4=me({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),l4=wt(o4),c4=me({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u4=wt(c4),d4=[9,13,27,32],op=Sn&&"CompositionEvent"in window,Fs=null;Sn&&"documentMode"in document&&(Fs=document.documentMode);var h4=Sn&&"TextEvent"in window&&!Fs,Gy=Sn&&(!op||Fs&&8<Fs&&11>=Fs),Xg=" ",Jg=!1;function Yy(t,e){switch(t){case"keyup":return d4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function f4(t,e){switch(t){case"compositionend":return qy(e);case"keypress":return e.which!==32?null:(Jg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Jg?null:t;default:return null}}function p4(t,e){if(pr)return t==="compositionend"||!op&&Yy(t,e)?(t=Ky(),Pl=rp=Kn=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gy&&e.locale!=="ko"?null:e.data;default:return null}}var g4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!g4[t.type]:e==="textarea"}function Xy(t,e,n,i){Cy(i),e=Ql(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bs=null,ua=null;function m4(t){ov(t,0)}function Hc(t){var e=yr(t);if(by(e))return t}function y4(t,e){if(t==="change")return e}var Jy=!1;if(Sn){var Fu;if(Sn){var Bu="oninput"in document;if(!Bu){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),Bu=typeof Zg.oninput=="function"}Fu=Bu}else Fu=!1;Jy=Fu&&(!document.documentMode||9<document.documentMode)}function em(){Bs&&(Bs.detachEvent("onpropertychange",Qy),ua=Bs=null)}function Qy(t){if(t.propertyName==="value"&&Hc(ua)){var e=[];Xy(e,ua,t,Zf(t)),Ay(m4,e)}}function v4(t,e,n){t==="focusin"?(em(),Bs=e,ua=n,Bs.attachEvent("onpropertychange",Qy)):t==="focusout"&&em()}function x4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(ua)}function b4(t,e){if(t==="click")return Hc(e)}function k4(t,e){if(t==="input"||t==="change")return Hc(e)}function w4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:w4;function da(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!th.call(e,r)||!Yt(t[r],e[r]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function Zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _4(t){var e=ev(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zy(n.ownerDocument.documentElement,n)){if(i!==null&&lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=nm(n,s);var a=nm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j4=Sn&&"documentMode"in document&&11>=document.documentMode,gr=null,bh=null,Ns=null,kh=!1;function im(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kh||gr==null||gr!==Wl(i)||(i=gr,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ns&&da(Ns,i)||(Ns=i,i=Ql(bh,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gr)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Nu={},tv={};Sn&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Wc(t){if(Nu[t])return Nu[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return Nu[t]=e[n];return t}var nv=Wc("animationend"),iv=Wc("animationiteration"),rv=Wc("animationstart"),sv=Wc("transitionend"),av=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){av.set(t,e),Ji(e,[t])}for(var Vu=0;Vu<rm.length;Vu++){var Uu=rm[Vu],S4=Uu.toLowerCase(),P4=Uu[0].toUpperCase()+Uu.slice(1);fi(S4,"on"+P4)}fi(nv,"onAnimationEnd");fi(iv,"onAnimationIteration");fi(rv,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(sv,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function sm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Sw(i,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;sm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;sm(r,o,c),s=l}}}if(Gl)throw t=mh,Gl=!1,mh=null,t}function le(t,e){var n=e[Ph];n===void 0&&(n=e[Ph]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function Hu(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[po]){t[po]=!0,gy.forEach(function(n){n!=="selectionchange"&&(C4.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Hu("selectionchange",!1,e))}}function lv(t,e,n,i){switch(Wy(e)){case 1:var r=Nw;break;case 4:r=Vw;break;default:r=ip}n=r.bind(null,e,n,t),r=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Di(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ay(function(){var c=s,d=Zf(n),h=[];e:{var f=av.get(t);if(f!==void 0){var p=sp,g=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":p=i4;break;case"focusin":g="focus",p=$u;break;case"focusout":g="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=a4;break;case nv:case iv:case rv:p=Yw;break;case sv:p=l4;break;case"scroll":p=Uw;break;case"wheel":p=u4;break;case"copy":case"cut":case"paste":p=Xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qg}var m=(e&4)!==0,k=!m&&t==="scroll",v=m?f!==null?f+"Capture":null:f;m=[];for(var y=c,b;y!==null;){b=y;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,v!==null&&(w=aa(y,v),w!=null&&m.push(fa(y,w,b)))),k)break;y=y.return}0<m.length&&(f=new p(f,g,null,n,d),h.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==fh&&(g=n.relatedTarget||n.fromElement)&&(Di(g)||g[Pn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Di(g):null,g!==null&&(k=Qi(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(m=Gg,w="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(m=qg,w="onPointerLeave",v="onPointerEnter",y="pointer"),k=p==null?f:yr(p),b=g==null?f:yr(g),f=new m(w,y+"leave",p,n,d),f.target=k,f.relatedTarget=b,w=null,Di(d)===c&&(m=new m(v,y+"enter",g,n,d),m.target=b,m.relatedTarget=k,w=m),k=w,p&&g)t:{for(m=p,v=g,y=0,b=m;b;b=sr(b))y++;for(b=0,w=v;w;w=sr(w))b++;for(;0<y-b;)m=sr(m),y--;for(;0<b-y;)v=sr(v),b--;for(;y--;){if(m===v||v!==null&&m===v.alternate)break t;m=sr(m),v=sr(v)}m=null}else m=null;p!==null&&am(h,f,p,m,!1),g!==null&&k!==null&&am(h,k,g,m,!0)}}e:{if(f=c?yr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var _=y4;else if(Qg(f))if(Jy)_=k4;else{_=x4;var C=v4}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=b4);if(_&&(_=_(t,c))){Xy(h,_,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&lh(f,"number",f.value)}switch(C=c?yr(c):window,t){case"focusin":(Qg(C)||C.contentEditable==="true")&&(gr=C,bh=c,Ns=null);break;case"focusout":Ns=bh=gr=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,im(h,n,d);break;case"selectionchange":if(j4)break;case"keydown":case"keyup":im(h,n,d)}var S;if(op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?Yy(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gy&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(S=Ky()):(Kn=d,rp="value"in Kn?Kn.value:Kn.textContent,pr=!0)),C=Ql(c,P),0<C.length&&(P=new Yg(P,t,null,n,d),h.push({event:P,listeners:C}),S?P.data=S:(S=qy(n),S!==null&&(P.data=S)))),(S=h4?f4(t,n):p4(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new Yg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=S))}ov(h,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=aa(t,n),s!=null&&i.unshift(fa(t,s,r)),s=aa(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=aa(n,s),l!=null&&a.unshift(fa(n,l,o))):r||(l=aa(n,s),l!=null&&a.push(fa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var T4=/\r\n?/g,E4=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(T4,`
`).replace(E4,"")}function go(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(A(425))}function Zl(){}var wh=null,_h=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,M4=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,A4=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(O4)}:Sh;function O4(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ca(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),sn="__reactFiber$"+ts,pa="__reactProps$"+ts,Pn="__reactContainer$"+ts,Ph="__reactEvents$"+ts,L4="__reactListeners$"+ts,R4="__reactHandles$"+ts;function Di(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[sn])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[sn]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Kc(t){return t[pa]||null}var Ch=[],vr=-1;function pi(t){return{current:t}}function ue(t){0>vr||(t.current=Ch[vr],Ch[vr]=null,vr--)}function ae(t,e){vr++,Ch[vr]=t.current,t.current=e}var li={},Ye=pi(li),lt=pi(!1),Wi=li;function $r(t,e){var n=t.type.contextTypes;if(!n)return li;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ct(t){return t=t.childContextTypes,t!=null}function ec(){ue(lt),ue(Ye)}function um(t,e,n){if(Ye.current!==li)throw Error(A(168));ae(Ye,e),ae(lt,n)}function cv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(A(108,vw(t)||"Unknown",r));return me({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,Wi=Ye.current,ae(Ye,t),ae(lt,lt.current),!0}function dm(t,e,n){var i=t.stateNode;if(!i)throw Error(A(169));n?(t=cv(t,e,Wi),i.__reactInternalMemoizedMergedChildContext=t,ue(lt),ue(Ye),ae(Ye,t)):ue(lt),ae(lt,n)}var yn=null,Gc=!1,Gu=!1;function uv(t){yn===null?yn=[t]:yn.push(t)}function D4(t){Gc=!0,uv(t)}function gi(){if(!Gu&&yn!==null){Gu=!0;var t=0,e=ie;try{var n=yn;for(ie=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yn=null,Gc=!1}catch(r){throw yn!==null&&(yn=yn.slice(t+1)),Dy(ep,gi),r}finally{ie=e,Gu=!1}}return null}var xr=[],br=0,nc=null,ic=0,Tt=[],Et=0,Ki=null,xn=1,bn="";function Pi(t,e){xr[br++]=ic,xr[br++]=nc,nc=t,ic=e}function dv(t,e,n){Tt[Et++]=xn,Tt[Et++]=bn,Tt[Et++]=Ki,Ki=t;var i=xn;t=bn;var r=32-Kt(i)-1;i&=~(1<<r),n+=1;var s=32-Kt(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,xn=1<<32-Kt(e)+r|n<<r|i,bn=s+t}else xn=1<<s|n<<r|i,bn=t}function cp(t){t.return!==null&&(Pi(t,1),dv(t,1,0))}function up(t){for(;t===nc;)nc=xr[--br],xr[br]=null,ic=xr[--br],xr[br]=null;for(;t===Ki;)Ki=Tt[--Et],Tt[Et]=null,bn=Tt[--Et],Tt[Et]=null,xn=Tt[--Et],Tt[Et]=null}var yt=null,mt=null,he=!1,Ht=null;function hv(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,mt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:xn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,mt=null,!0):!1;default:return!1}}function Th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eh(t){if(he){var e=mt;if(e){var n=e;if(!hm(t,e)){if(Th(t))throw Error(A(418));e=Zn(n.nextSibling);var i=yt;e&&hm(t,e)?hv(i,n):(t.flags=t.flags&-4097|2,he=!1,yt=t)}}else{if(Th(t))throw Error(A(418));t.flags=t.flags&-4097|2,he=!1,yt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function mo(t){if(t!==yt)return!1;if(!he)return fm(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=mt)){if(Th(t))throw fv(),Error(A(418));for(;e;)hv(t,e),e=Zn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=yt?Zn(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=mt;t;)t=Zn(t.nextSibling)}function Fr(){mt=yt=null,he=!1}function dp(t){Ht===null?Ht=[t]:Ht.push(t)}var z4=Mn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var i=n.stateNode}if(!i)throw Error(A(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function yo(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function pv(t){function e(v,y){if(t){var b=v.deletions;b===null?(v.deletions=[y],v.flags|=16):b.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function i(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function r(v,y){return v=ii(v,y),v.index=0,v.sibling=null,v}function s(v,y,b){return v.index=b,t?(b=v.alternate,b!==null?(b=b.index,b<y?(v.flags|=2,y):b):(v.flags|=2,y)):(v.flags|=1048576,y)}function a(v){return t&&v.alternate===null&&(v.flags|=2),v}function o(v,y,b,w){return y===null||y.tag!==6?(y=ed(b,v.mode,w),y.return=v,y):(y=r(y,b),y.return=v,y)}function l(v,y,b,w){var _=b.type;return _===fr?d(v,y,b.props.children,w,b.key):y!==null&&(y.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&pm(_)===y.type)?(w=r(y,b.props),w.ref=fs(v,y,b),w.return=v,w):(w=Rl(b.type,b.key,b.props,null,v.mode,w),w.ref=fs(v,y,b),w.return=v,w)}function c(v,y,b,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=td(b,v.mode,w),y.return=v,y):(y=r(y,b.children||[]),y.return=v,y)}function d(v,y,b,w,_){return y===null||y.tag!==7?(y=Vi(b,v.mode,w,_),y.return=v,y):(y=r(y,b),y.return=v,y)}function h(v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ed(""+y,v.mode,b),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return b=Rl(y.type,y.key,y.props,null,v.mode,b),b.ref=fs(v,null,y),b.return=v,b;case hr:return y=td(y,v.mode,b),y.return=v,y;case Fn:var w=y._init;return h(v,w(y._payload),b)}if(Cs(y)||ls(y))return y=Vi(y,v.mode,b,null),y.return=v,y;yo(v,y)}return null}function f(v,y,b,w){var _=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:o(v,y,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case so:return b.key===_?l(v,y,b,w):null;case hr:return b.key===_?c(v,y,b,w):null;case Fn:return _=b._init,f(v,y,_(b._payload),w)}if(Cs(b)||ls(b))return _!==null?null:d(v,y,b,w,null);yo(v,b)}return null}function p(v,y,b,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(b)||null,o(y,v,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return v=v.get(w.key===null?b:w.key)||null,l(y,v,w,_);case hr:return v=v.get(w.key===null?b:w.key)||null,c(y,v,w,_);case Fn:var C=w._init;return p(v,y,b,C(w._payload),_)}if(Cs(w)||ls(w))return v=v.get(b)||null,d(y,v,w,_,null);yo(y,w)}return null}function g(v,y,b,w){for(var _=null,C=null,S=y,P=y=0,T=null;S!==null&&P<b.length;P++){S.index>P?(T=S,S=null):T=S.sibling;var M=f(v,S,b[P],w);if(M===null){S===null&&(S=T);break}t&&S&&M.alternate===null&&e(v,S),y=s(M,y,P),C===null?_=M:C.sibling=M,C=M,S=T}if(P===b.length)return n(v,S),he&&Pi(v,P),_;if(S===null){for(;P<b.length;P++)S=h(v,b[P],w),S!==null&&(y=s(S,y,P),C===null?_=S:C.sibling=S,C=S);return he&&Pi(v,P),_}for(S=i(v,S);P<b.length;P++)T=p(S,v,P,b[P],w),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?P:T.key),y=s(T,y,P),C===null?_=T:C.sibling=T,C=T);return t&&S.forEach(function(L){return e(v,L)}),he&&Pi(v,P),_}function m(v,y,b,w){var _=ls(b);if(typeof _!="function")throw Error(A(150));if(b=_.call(b),b==null)throw Error(A(151));for(var C=_=null,S=y,P=y=0,T=null,M=b.next();S!==null&&!M.done;P++,M=b.next()){S.index>P?(T=S,S=null):T=S.sibling;var L=f(v,S,M.value,w);if(L===null){S===null&&(S=T);break}t&&S&&L.alternate===null&&e(v,S),y=s(L,y,P),C===null?_=L:C.sibling=L,C=L,S=T}if(M.done)return n(v,S),he&&Pi(v,P),_;if(S===null){for(;!M.done;P++,M=b.next())M=h(v,M.value,w),M!==null&&(y=s(M,y,P),C===null?_=M:C.sibling=M,C=M);return he&&Pi(v,P),_}for(S=i(v,S);!M.done;P++,M=b.next())M=p(S,v,P,M.value,w),M!==null&&(t&&M.alternate!==null&&S.delete(M.key===null?P:M.key),y=s(M,y,P),C===null?_=M:C.sibling=M,C=M);return t&&S.forEach(function(D){return e(v,D)}),he&&Pi(v,P),_}function k(v,y,b,w){if(typeof b=="object"&&b!==null&&b.type===fr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case so:e:{for(var _=b.key,C=y;C!==null;){if(C.key===_){if(_=b.type,_===fr){if(C.tag===7){n(v,C.sibling),y=r(C,b.props.children),y.return=v,v=y;break e}}else if(C.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&pm(_)===C.type){n(v,C.sibling),y=r(C,b.props),y.ref=fs(v,C,b),y.return=v,v=y;break e}n(v,C);break}else e(v,C);C=C.sibling}b.type===fr?(y=Vi(b.props.children,v.mode,w,b.key),y.return=v,v=y):(w=Rl(b.type,b.key,b.props,null,v.mode,w),w.ref=fs(v,y,b),w.return=v,v=w)}return a(v);case hr:e:{for(C=b.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(v,y.sibling),y=r(y,b.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=td(b,v.mode,w),y.return=v,v=y}return a(v);case Fn:return C=b._init,k(v,y,C(b._payload),w)}if(Cs(b))return g(v,y,b,w);if(ls(b))return m(v,y,b,w);yo(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(n(v,y.sibling),y=r(y,b),y.return=v,v=y):(n(v,y),y=ed(b,v.mode,w),y.return=v,v=y),a(v)):n(v,y)}return k}var Br=pv(!0),gv=pv(!1),rc=pi(null),sc=null,kr=null,hp=null;function fp(){hp=kr=sc=null}function pp(t){var e=rc.current;ue(rc),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Or(t,e){sc=t,hp=kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(hp!==t)if(t={context:t,memoizedValue:e,next:null},kr===null){if(sc===null)throw Error(A(308));kr=t,sc.dependencies={lanes:0,firstContext:t}}else kr=kr.next=t;return e}var zi=null;function gp(t){zi===null?zi=[t]:zi.push(t)}function mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Cn(t,i)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,X&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Cn(t,n)}return r=i.interleaved,r===null?(e.next=e,gp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Cn(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}function gm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;Bn=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,m=o;switch(f=e,p=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=me({},h,f);break e;case 2:Bn=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yi|=a,t.lanes=a,t.memoizedState=h}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(A(191,r));r.call(i)}}}var Ha={},on=pi(Ha),ga=pi(Ha),ma=pi(Ha);function Ii(t){if(t===Ha)throw Error(A(174));return t}function yp(t,e){switch(ae(ma,e),ae(ga,t),ae(on,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uh(e,t)}ue(on),ae(on,e)}function Nr(){ue(on),ue(ga),ue(ma)}function vv(t){Ii(ma.current);var e=Ii(on.current),n=uh(e,t.type);e!==n&&(ae(ga,t),ae(on,n))}function vp(t){ga.current===t&&(ue(on),ue(ga))}var fe=pi(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function xp(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var El=Mn.ReactCurrentDispatcher,qu=Mn.ReactCurrentBatchConfig,Gi=0,ge=null,Ce=null,Ae=null,lc=!1,Vs=!1,ya=0,I4=0;function Ne(){throw Error(A(321))}function bp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function kp(t,e,n,i,r,s){if(Gi=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?N4:V4,t=n(i,r),Vs){s=0;do{if(Vs=!1,ya=0,25<=s)throw Error(A(301));s+=1,Ae=Ce=null,e.updateQueue=null,El.current=U4,t=n(i,r)}while(Vs)}if(El.current=cc,e=Ce!==null&&Ce.next!==null,Gi=0,Ae=Ce=ge=null,lc=!1,e)throw Error(A(300));return t}function wp(){var t=ya!==0;return ya=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function zt(){if(Ce===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Ae===null?ge.memoizedState:Ae.next;if(e!==null)Ae=e,Ce=t;else{if(t===null)throw Error(A(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ae===null?ge.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function va(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=zt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var i=Ce,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Gi&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ge.lanes|=d,Yi|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Yt(i,e.memoizedState)||(ot=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ge.lanes|=s,Yi|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=zt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xv(){}function bv(t,e){var n=ge,i=zt(),r=e(),s=!Yt(i.memoizedState,r);if(s&&(i.memoizedState=r,ot=!0),i=i.queue,_p(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,xa(9,wv.bind(null,n,i,r,e),void 0,null),Re===null)throw Error(A(349));Gi&30||kv(n,e,r)}return r}function kv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,jv(e)&&Sv(t)}function _v(t,e,n){return n(function(){jv(e)&&Sv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function Sv(t){var e=Cn(t,1);e!==null&&Gt(e,t,1,-1)}function ym(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=B4.bind(null,ge,t),[e.memoizedState,t]}function xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Pv(){return zt().memoizedState}function Ml(t,e,n,i){var r=en();ge.flags|=t,r.memoizedState=xa(1|e,n,void 0,i===void 0?null:i)}function Yc(t,e,n,i){var r=zt();i=i===void 0?null:i;var s=void 0;if(Ce!==null){var a=Ce.memoizedState;if(s=a.destroy,i!==null&&bp(i,a.deps)){r.memoizedState=xa(e,n,s,i);return}}ge.flags|=t,r.memoizedState=xa(1|e,n,s,i)}function vm(t,e){return Ml(8390656,8,t,e)}function _p(t,e){return Yc(2048,8,t,e)}function Cv(t,e){return Yc(4,2,t,e)}function Tv(t,e){return Yc(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4,4,Ev.bind(null,e,t),n)}function jp(){}function Av(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lv(t,e,n){return Gi&21?(Yt(n,e)||(n=$y(),ge.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function $4(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var i=qu.transition;qu.transition={};try{t(!1),e()}finally{ie=n,qu.transition=i}}function Rv(){return zt().memoizedState}function F4(t,e,n){var i=ni(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Dv(t))zv(e,n);else if(n=mv(t,e,n,i),n!==null){var r=Je();Gt(n,t,i,r),Iv(n,e,i)}}function B4(t,e,n){var i=ni(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(t))zv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yt(o,a)){var l=e.interleaved;l===null?(r.next=r,gp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mv(t,e,r,i),n!==null&&(r=Je(),Gt(n,t,i,r),Iv(n,e,i))}}function Dv(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function zv(t,e){Vs=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}var cc={readContext:Dt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},N4={readContext:Dt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=en();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=F4.bind(null,ge,t),[i.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:jp,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=$4.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ge,r=en();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Re===null)throw Error(A(349));Gi&30||kv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vm(_v.bind(null,i,s,t),[t]),i.flags|=2048,xa(9,wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Re.identifierPrefix;if(he){var n=bn,i=xn;n=(i&~(1<<32-Kt(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V4={readContext:Dt,useCallback:Av,useContext:Dt,useEffect:_p,useImperativeHandle:Mv,useInsertionEffect:Cv,useLayoutEffect:Tv,useMemo:Ov,useReducer:Xu,useRef:Pv,useState:function(){return Xu(va)},useDebugValue:jp,useDeferredValue:function(t){var e=zt();return Lv(e,Ce.memoizedState,t)},useTransition:function(){var t=Xu(va)[0],e=zt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:bv,useId:Rv,unstable_isNewReconciler:!1},U4={readContext:Dt,useCallback:Av,useContext:Dt,useEffect:_p,useImperativeHandle:Mv,useInsertionEffect:Cv,useLayoutEffect:Tv,useMemo:Ov,useReducer:Ju,useRef:Pv,useState:function(){return Ju(va)},useDebugValue:jp,useDeferredValue:function(t){var e=zt();return Ce===null?e.memoizedState=t:Lv(e,Ce.memoizedState,t)},useTransition:function(){var t=Ju(va)[0],e=zt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:bv,useId:Rv,unstable_isNewReconciler:!1};function Nt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Je(),r=ni(t),s=wn(i,r);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,r),e!==null&&(Gt(e,t,r,i),Tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Je(),r=ni(t),s=wn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,r),e!==null&&(Gt(e,t,r,i),Tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Je(),i=ni(t),r=wn(n,i);r.tag=2,e!=null&&(r.callback=e),e=ei(t,r,i),e!==null&&(Gt(e,t,i,n),Tl(e,t,i))}};function xm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function $v(t,e,n){var i=!1,r=li,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(r=ct(e)?Wi:Ye.current,i=e.contextTypes,s=(i=i!=null)?$r(t,r):li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function Oh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dt(s):(s=ct(e)?Wi:Ye.current,r.context=$r(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e){try{var n="",i=e;do n+=yw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var H4=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,Uh=i),Lh(t,e)},n}function Bv(t,e,n){n=wn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof i!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new H4;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=r3.bind(null,t,e,n),e.then(t,t))}function wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var W4=Mn.ReactCurrentOwner,ot=!1;function Xe(t,e,n,i){e.child=t===null?gv(e,null,n,i):Br(e,t.child,n,i)}function jm(t,e,n,i,r){n=n.render;var s=e.ref;return Or(e,r),i=kp(t,e,n,i,s,r),n=wp(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tn(t,e,r)):(he&&n&&cp(e),e.flags|=1,Xe(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nv(t,e,s,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(a,i)&&t.ref===e.ref)return Tn(t,e,r)}return e.flags|=1,t=ii(s,i),t.ref=e.ref,t.return=e,e.child=t}function Nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(ot=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,Tn(t,e,r)}return Rh(t,e,n,i,r)}function Vv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(_r,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(_r,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ae(_r,gt),gt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ae(_r,gt),gt|=i;return Xe(t,e,r,n),e.child}function Uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,i,r){var s=ct(n)?Wi:Ye.current;return s=$r(e,s),Or(e,r),n=kp(t,e,n,i,s,r),i=wp(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tn(t,e,r)):(he&&i&&cp(e),e.flags|=1,Xe(t,e,n,r),e.child)}function Pm(t,e,n,i,r){if(ct(n)){var s=!0;tc(e)}else s=!1;if(Or(e,r),e.stateNode===null)Al(t,e),$v(e,n,i),Oh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=ct(n)?Wi:Ye.current,c=$r(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&bm(e,a,i,c),Bn=!1;var f=e.memoizedState;a.state=f,ac(e,i,a,r),l=e.memoizedState,o!==i||f!==l||lt.current||Bn?(typeof d=="function"&&(Ah(e,n,d,i),l=e.memoizedState),(o=Bn||xm(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Nt(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ct(n)?Wi:Ye.current,l=$r(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&bm(e,a,i,l),Bn=!1,f=e.memoizedState,a.state=f,ac(e,i,a,r);var g=e.memoizedState;o!==h||f!==g||lt.current||Bn?(typeof p=="function"&&(Ah(e,n,p,i),g=e.memoizedState),(c=Bn||xm(e,n,c,i,f,g,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Dh(t,e,n,i,s,r)}function Dh(t,e,n,i,r,s){Uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&dm(e,n,!1),Tn(t,e,s);i=e.stateNode,W4.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Br(e,t.child,null,s),e.child=Br(e,null,o,s)):Xe(t,e,o,s),e.memoizedState=i.state,r&&dm(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),yp(t,e.containerInfo)}function Cm(t,e,n,i,r){return Fr(),dp(r),e.flags|=256,Xe(t,e,n,i),e.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var i=e.pendingProps,r=fe.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ae(fe,r&1),t===null)return Eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Qc(a,i,0,null),t=Vi(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=zh,t):Sp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return K4(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ii(o,s):(s=Vi(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ih(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zh,i}return s=t.child,t=s.sibling,i=ii(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sp(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&dp(i),Br(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function K4(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(A(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=Vi(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Br(e,t.child,null,a),e.child.memoizedState=Ih(a),e.memoizedState=zh,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(A(419)),i=Qu(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ot||o){if(i=Re,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Cn(t,r),Gt(i,t,r,-1))}return Ap(),i=Qu(Error(A(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=s3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mt=Zn(r.nextSibling),yt=e,he=!0,Ht=null,t!==null&&(Tt[Et++]=xn,Tt[Et++]=bn,Tt[Et++]=Ki,xn=t.id,bn=t.overflow,Ki=e),e=Sp(e,i.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mh(t.return,e,n)}function Zu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Kv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xe(t,e,i.children,n),i=fe.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ae(fe,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zu(e,!0,n,null,s);break;case"together":Zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function G4(t,e,n){switch(e.tag){case 3:Hv(e),Fr();break;case 5:vv(e);break;case 1:ct(e.type)&&tc(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ae(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ae(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(ae(fe,fe.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);ae(fe,fe.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Kv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ae(fe,fe.current),i)break;return null;case 22:case 23:return e.lanes=0,Vv(t,e,n)}return Tn(t,e,n)}var Gv,$h,Yv,qv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};Yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ii(on.current);var s=null;switch(n){case"input":r=ah(t,r),i=ah(t,i),s=[];break;case"select":r=me({},r,{value:void 0}),i=me({},i,{value:void 0}),s=[];break;case"textarea":r=ch(t,r),i=ch(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}dh(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&le("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};qv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ps(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Y4(t,e,n){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return ct(e.type)&&ec(),Ve(e),null;case 3:return i=e.stateNode,Nr(),ue(lt),ue(Ye),xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(Kh(Ht),Ht=null))),$h(t,e),Ve(e),null;case 5:vp(e);var r=Ii(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(A(166));return Ve(e),null}if(t=Ii(on.current),mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[sn]=e,i[pa]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",i),le("close",i);break;case"iframe":case"object":case"embed":le("load",i);break;case"video":case"audio":for(r=0;r<Es.length;r++)le(Es[r],i);break;case"source":le("error",i);break;case"img":case"image":case"link":le("error",i),le("load",i);break;case"details":le("toggle",i);break;case"input":Ig(i,s),le("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},le("invalid",i);break;case"textarea":Fg(i,s),le("invalid",i)}dh(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):ra.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&le("scroll",i)}switch(n){case"input":ao(i),$g(i,s,!0);break;case"textarea":ao(i),Bg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_y(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[sn]=e,t[pa]=i,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(a=hh(n,i),n){case"dialog":le("cancel",t),le("close",t),r=i;break;case"iframe":case"object":case"embed":le("load",t),r=i;break;case"video":case"audio":for(r=0;r<Es.length;r++)le(Es[r],t);r=i;break;case"source":le("error",t),r=i;break;case"img":case"image":case"link":le("error",t),le("load",t),r=i;break;case"details":le("toggle",t),r=i;break;case"input":Ig(t,i),r=ah(t,i),le("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=me({},i,{value:void 0}),le("invalid",t);break;case"textarea":Fg(t,i),r=ch(t,i),le("invalid",t);break;default:r=i}dh(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Py(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&qf(t,s,l,a))}switch(n){case"input":ao(t),$g(t,i,!1);break;case"textarea":ao(t),Bg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+oi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Tr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Tr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(A(166));if(n=Ii(ma.current),Ii(on.current),mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[sn]=e,(s=i.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[sn]=e,e.stateNode=i}return Ve(e),null;case 13:if(ue(fe),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&mt!==null&&e.mode&1&&!(e.flags&128))fv(),Fr(),e.flags|=98560,s=!1;else if(s=mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[sn]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Ht!==null&&(Kh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Te===0&&(Te=3):Ap())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return Nr(),$h(t,e),t===null&&ha(e.stateNode.containerInfo),Ve(e),null;case 10:return pp(e.type._context),Ve(e),null;case 17:return ct(e.type)&&ec(),Ve(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return Ve(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ps(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=oc(t),a!==null){for(e.flags|=128,ps(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Ur&&(e.flags|=128,i=!0,ps(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!he)return Ve(e),null}else 2*ke()-s.renderingStartTime>Ur&&n!==1073741824&&(e.flags|=128,i=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=fe.current,ae(fe,i?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gt&1073741824&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function q4(t,e){switch(up(e),e.tag){case 1:return ct(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Nr(),ue(lt),ue(Ye),xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vp(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return Nr(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var xo=!1,Ke=!1,X4=typeof WeakSet=="function"?WeakSet:Set,R=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ye(t,e,i)}else n.current=null}function Fh(t,e,n){try{n()}catch(i){ye(t,e,i)}}var Em=!1;function J4(t,e){if(wh=Xl,t=ev(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},Xl=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,k=g.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?m:Nt(e.type,m),k);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){ye(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=Em,Em=!1,g}function Us(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fh(e,n,s)}r=r.next}while(r!==i)}}function Xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[pa],delete e[Ph],delete e[L4],delete e[R4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}function Vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}var Ie=null,Vt=!1;function An(t,e,n){for(n=n.child;n!==null;)Qv(t,e,n),n=n.sibling}function Qv(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:Ke||wr(n,e);case 6:var i=Ie,r=Vt;Ie=null,An(t,e,n),Ie=i,Vt=r,Ie!==null&&(Vt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Vt?(t=Ie,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),ca(t)):Ku(Ie,n.stateNode));break;case 4:i=Ie,r=Vt,Ie=n.stateNode.containerInfo,Vt=!0,An(t,e,n),Ie=i,Vt=r;break;case 0:case 11:case 14:case 15:if(!Ke&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fh(n,e,a),r=r.next}while(r!==i)}An(t,e,n);break;case 1:if(!Ke&&(wr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ye(n,e,o)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(Ke=(i=Ke)||n.memoizedState!==null,An(t,e,n),Ke=i):An(t,e,n);break;default:An(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new X4),e.forEach(function(i){var r=a3.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ie=o.stateNode,Vt=!1;break e;case 3:Ie=o.stateNode.containerInfo,Vt=!0;break e;case 4:Ie=o.stateNode.containerInfo,Vt=!0;break e}o=o.return}if(Ie===null)throw Error(A(160));Qv(s,a,r),Ie=null,Vt=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ye(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),qt(t),i&4){try{Us(3,t,t.return),Xc(3,t)}catch(m){ye(t,t.return,m)}try{Us(5,t,t.return)}catch(m){ye(t,t.return,m)}}break;case 1:Ft(e,t),qt(t),i&512&&n!==null&&wr(n,n.return);break;case 5:if(Ft(e,t),qt(t),i&512&&n!==null&&wr(n,n.return),t.flags&32){var r=t.stateNode;try{sa(r,"")}catch(m){ye(t,t.return,m)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&ky(r,s),hh(o,a);var c=hh(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Py(r,h):d==="dangerouslySetInnerHTML"?jy(r,h):d==="children"?sa(r,h):qf(r,d,h,c)}switch(o){case"input":oh(r,s);break;case"textarea":wy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Tr(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Tr(r,!!s.multiple,s.defaultValue,!0):Tr(r,!!s.multiple,s.multiple?[]:"",!1))}r[pa]=s}catch(m){ye(t,t.return,m)}}break;case 6:if(Ft(e,t),qt(t),i&4){if(t.stateNode===null)throw Error(A(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(m){ye(t,t.return,m)}}break;case 3:if(Ft(e,t),qt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(m){ye(t,t.return,m)}break;case 4:Ft(e,t),qt(t);break;case 13:Ft(e,t),qt(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Tp=ke())),i&4&&Am(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(c=Ke)||d,Ft(e,t),Ke=c):Ft(e,t),qt(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(h=R=d;R!==null;){switch(f=R,p=f.child,f.tag){case 0:case 11:case 14:case 15:Us(4,f,f.return);break;case 1:wr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(m){ye(i,n,m)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Lm(h);continue}}p!==null?(p.return=f,R=p):Lm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Sy("display",a))}catch(m){ye(t,t.return,m)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(m){ye(t,t.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),qt(t),i&4&&Am(t);break;case 21:break;default:Ft(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var i=n;break e}n=n.return}throw Error(A(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sa(r,""),i.flags&=-33);var s=Mm(t);Vh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mm(t);Nh(t,o,a);break;default:throw Error(A(161))}}catch(l){ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q4(t,e,n){R=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;R!==null;){var r=R,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Ke;o=xo;var c=Ke;if(xo=a,(Ke=l)&&!c)for(R=r;R!==null;)a=R,l=a.child,a.tag===22&&a.memoizedState!==null?Rm(r):l!==null?(l.return=a,R=l):Rm(r);for(;s!==null;)R=s,ex(s),s=s.sibling;R=r,xo=o,Ke=c}Om(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,R=s):Om(t)}}function Om(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ke)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ke||e.flags&512&&Bh(e)}catch(f){ye(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Lm(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Rm(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xc(4,e)}catch(l){ye(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ye(e,r,l)}}var s=e.return;try{Bh(e)}catch(l){ye(e,s,l)}break;case 5:var a=e.return;try{Bh(e)}catch(l){ye(e,a,l)}}}catch(l){ye(e,e.return,l)}if(e===t){R=null;break}var o=e.sibling;if(o!==null){o.return=e.return,R=o;break}R=e.return}}var Z4=Math.ceil,uc=Mn.ReactCurrentDispatcher,Pp=Mn.ReactCurrentOwner,Lt=Mn.ReactCurrentBatchConfig,X=0,Re=null,Pe=null,Fe=0,gt=0,_r=pi(0),Te=0,ba=null,Yi=0,Jc=0,Cp=0,Hs=null,it=null,Tp=0,Ur=1/0,mn=null,dc=!1,Uh=null,ti=null,bo=!1,Gn=null,hc=0,Ws=0,Hh=null,Ol=-1,Ll=0;function Je(){return X&6?ke():Ol!==-1?Ol:Ol=ke()}function ni(t){return t.mode&1?X&2&&Fe!==0?Fe&-Fe:z4.transition!==null?(Ll===0&&(Ll=$y()),Ll):(t=ie,t!==0||(t=window.event,t=t===void 0?16:Wy(t.type)),t):1}function Gt(t,e,n,i){if(50<Ws)throw Ws=0,Hh=null,Error(A(185));Na(t,n,i),(!(X&2)||t!==Re)&&(t===Re&&(!(X&2)&&(Jc|=n),Te===4&&Hn(t,Fe)),ut(t,i),n===1&&X===0&&!(e.mode&1)&&(Ur=ke()+500,Gc&&gi()))}function ut(t,e){var n=t.callbackNode;zw(t,e);var i=ql(t,t===Re?Fe:0);if(i===0)n!==null&&Ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ug(n),e===1)t.tag===0?D4(Dm.bind(null,t)):uv(Dm.bind(null,t)),A4(function(){!(X&6)&&gi()}),n=null;else{switch(Fy(i)){case 1:n=ep;break;case 4:n=zy;break;case 16:n=Yl;break;case 536870912:n=Iy;break;default:n=Yl}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Ol=-1,Ll=0,X&6)throw Error(A(327));var n=t.callbackNode;if(Lr()&&t.callbackNode!==n)return null;var i=ql(t,t===Re?Fe:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fc(t,i);else{e=i;var r=X;X|=2;var s=ix();(Re!==t||Fe!==e)&&(mn=null,Ur=ke()+500,Ni(t,e));do try{n3();break}catch(o){nx(t,o)}while(!0);fp(),uc.current=s,X=r,Pe!==null?e=0:(Re=null,Fe=0,e=Te)}if(e!==0){if(e===2&&(r=yh(t),r!==0&&(i=r,e=Wh(t,r))),e===1)throw n=ba,Ni(t,0),Hn(t,i),ut(t,ke()),n;if(e===6)Hn(t,i);else{if(r=t.current.alternate,!(i&30)&&!e3(r)&&(e=fc(t,i),e===2&&(s=yh(t),s!==0&&(i=s,e=Wh(t,s))),e===1))throw n=ba,Ni(t,0),Hn(t,i),ut(t,ke()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(A(345));case 2:Ci(t,it,mn);break;case 3:if(Hn(t,i),(i&130023424)===i&&(e=Tp+500-ke(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Je(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sh(Ci.bind(null,t,it,mn),e);break}Ci(t,it,mn);break;case 4:if(Hn(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kt(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Z4(i/1960))-i,10<i){t.timeoutHandle=Sh(Ci.bind(null,t,it,mn),i);break}Ci(t,it,mn);break;case 5:Ci(t,it,mn);break;default:throw Error(A(329))}}}return ut(t,ke()),t.callbackNode===n?tx.bind(null,t):null}function Wh(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(Ni(t,e).flags|=256),t=fc(t,e),t!==2&&(e=it,it=n,e!==null&&Kh(e)),t}function Kh(t){it===null?it=t:it.push.apply(it,t)}function e3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yt(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~Cp,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(X&6)throw Error(A(327));Lr();var e=ql(t,0);if(!(e&1))return ut(t,ke()),null;var n=fc(t,e);if(t.tag!==0&&n===2){var i=yh(t);i!==0&&(e=i,n=Wh(t,i))}if(n===1)throw n=ba,Ni(t,0),Hn(t,e),ut(t,ke()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,it,mn),ut(t,ke()),null}function Ep(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Ur=ke()+500,Gc&&gi())}}function qi(t){Gn!==null&&Gn.tag===0&&!(X&6)&&Lr();var e=X;X|=1;var n=Lt.transition,i=ie;try{if(Lt.transition=null,ie=1,t)return t()}finally{ie=i,Lt.transition=n,X=e,!(X&6)&&gi()}}function Mp(){gt=_r.current,ue(_r)}function Ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M4(n)),Pe!==null)for(n=Pe.return;n!==null;){var i=n;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:Nr(),ue(lt),ue(Ye),xp();break;case 5:vp(i);break;case 4:Nr();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:pp(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(Re=t,Pe=t=ii(t.current,null),Fe=gt=e,Te=0,ba=null,Cp=Jc=Yi=0,it=Hs=null,zi!==null){for(e=0;e<zi.length;e++)if(n=zi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}zi=null}return t}function nx(t,e){do{var n=Pe;try{if(fp(),El.current=cc,lc){for(var i=ge.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(Gi=0,Ae=Ce=ge=null,Vs=!1,ya=0,Pp.current=null,n===null||n.return===null){Te=1,ba=e,Pe=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Fe,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wm(a);if(p!==null){p.flags&=-257,_m(p,a,o,s,e),p.mode&1&&km(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var m=new Set;m.add(l),e.updateQueue=m}else g.add(l);break e}else{if(!(e&1)){km(s,c,e),Ap();break e}l=Error(A(426))}}else if(he&&o.mode&1){var k=wm(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),_m(k,a,o,s,e),dp(Vr(l,o));break e}}s=l=Vr(l,o),Te!==4&&(Te=2),Hs===null?Hs=[s]:Hs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Fv(s,l,e);gm(s,v);break e;case 1:o=l;var y=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Bv(s,o,e);gm(s,w);break e}}s=s.return}while(s!==null)}sx(n)}catch(_){e=_,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function ix(){var t=uc.current;return uc.current=cc,t===null?cc:t}function Ap(){(Te===0||Te===3||Te===2)&&(Te=4),Re===null||!(Yi&268435455)&&!(Jc&268435455)||Hn(Re,Fe)}function fc(t,e){var n=X;X|=2;var i=ix();(Re!==t||Fe!==e)&&(mn=null,Ni(t,e));do try{t3();break}catch(r){nx(t,r)}while(!0);if(fp(),X=n,uc.current=i,Pe!==null)throw Error(A(261));return Re=null,Fe=0,Te}function t3(){for(;Pe!==null;)rx(Pe)}function n3(){for(;Pe!==null&&!Cw();)rx(Pe)}function rx(t){var e=ox(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?sx(t):Pe=e,Pp.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q4(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,Pe=null;return}}else if(n=Y4(n,e,gt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Te===0&&(Te=5)}function Ci(t,e,n){var i=ie,r=Lt.transition;try{Lt.transition=null,ie=1,i3(t,e,n,i)}finally{Lt.transition=r,ie=i}return null}function i3(t,e,n,i){do Lr();while(Gn!==null);if(X&6)throw Error(A(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iw(t,s),t===Re&&(Pe=Re=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,lx(Yl,function(){return Lr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var a=ie;ie=1;var o=X;X|=4,Pp.current=null,J4(t,n),Zv(n,t),_4(_h),Xl=!!wh,_h=wh=null,t.current=n,Q4(n),Tw(),X=o,ie=a,Lt.transition=s}else t.current=n;if(bo&&(bo=!1,Gn=t,hc=r),s=t.pendingLanes,s===0&&(ti=null),Aw(n.stateNode),ut(t,ke()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=Uh,Uh=null,t;return hc&1&&t.tag!==0&&Lr(),s=t.pendingLanes,s&1?t===Hh?Ws++:(Ws=0,Hh=t):Ws=0,gi(),null}function Lr(){if(Gn!==null){var t=Fy(hc),e=Lt.transition,n=ie;try{if(Lt.transition=null,ie=16>t?16:t,Gn===null)var i=!1;else{if(t=Gn,Gn=null,hc=0,X&6)throw Error(A(331));var r=X;for(X|=4,R=t.current;R!==null;){var s=R,a=s.child;if(R.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Us(8,d,s)}var h=d.child;if(h!==null)h.return=d,R=h;else for(;R!==null;){d=R;var f=d.sibling,p=d.return;if(Xv(d),d===c){R=null;break}if(f!==null){f.return=p,R=f;break}R=p}}}var g=s.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var k=m.sibling;m.sibling=null,m=k}while(m!==null)}}R=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,R=a;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,R=v;break e}R=s.return}}var y=t.current;for(R=y;R!==null;){a=R;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,R=b;else e:for(a=y;R!==null;){if(o=R,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xc(9,o)}}catch(_){ye(o,o.return,_)}if(o===a){R=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,R=w;break e}R=o.return}}if(X=r,gi(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Vc,t)}catch{}i=!0}return i}finally{ie=n,Lt.transition=e}}return!1}function zm(t,e,n){e=Vr(n,e),e=Fv(t,e,1),t=ei(t,e,1),e=Je(),t!==null&&(Na(t,1,e),ut(t,e))}function ye(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ti===null||!ti.has(i))){t=Vr(n,t),t=Bv(e,t,1),e=ei(e,t,1),t=Je(),e!==null&&(Na(e,1,t),ut(e,t));break}}e=e.return}}function r3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Je(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Fe&n)===n&&(Te===4||Te===3&&(Fe&130023424)===Fe&&500>ke()-Tp?Ni(t,0):Cp|=n),ut(t,e)}function ax(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=Je();t=Cn(t,e),t!==null&&(Na(t,e,n),ut(t,n))}function s3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ax(t,n)}function a3(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(A(314))}i!==null&&i.delete(e),ax(t,n)}var ox;ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,G4(t,e,n);ot=!!(t.flags&131072)}else ot=!1,he&&e.flags&1048576&&dv(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Al(t,e),t=e.pendingProps;var r=$r(e,Ye.current);Or(e,n),r=kp(null,e,i,t,r,n);var s=wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mp(e),r.updater=qc,e.stateNode=r,r._reactInternals=e,Oh(e,i,t,n),e=Dh(null,e,i,!0,s,n)):(e.tag=0,he&&s&&cp(e),Xe(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=l3(i),t=Nt(i,t),r){case 0:e=Rh(null,e,i,t,n);break e;case 1:e=Pm(null,e,i,t,n);break e;case 11:e=jm(null,e,i,t,n);break e;case 14:e=Sm(null,e,i,Nt(i.type,t),n);break e}throw Error(A(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Rh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Pm(t,e,i,r,n);case 3:e:{if(Hv(e),t===null)throw Error(A(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yv(t,e),ac(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vr(Error(A(423)),e),e=Cm(t,e,i,n,r);break e}else if(i!==r){r=Vr(Error(A(424)),e),e=Cm(t,e,i,n,r);break e}else for(mt=Zn(e.stateNode.containerInfo.firstChild),yt=e,he=!0,Ht=null,n=gv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),i===r){e=Tn(t,e,n);break e}Xe(t,e,i,n)}e=e.child}return e;case 5:return vv(e),t===null&&Eh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,jh(i,r)?a=null:s!==null&&jh(i,s)&&(e.flags|=32),Uv(t,e),Xe(t,e,a,n),e.child;case 6:return t===null&&Eh(e),null;case 13:return Wv(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Br(e,null,i,n):Xe(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),jm(t,e,i,r,n);case 7:return Xe(t,e,e.pendingProps,n),e.child;case 8:return Xe(t,e,e.pendingProps.children,n),e.child;case 12:return Xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ae(rc,i._currentValue),i._currentValue=a,s!==null)if(Yt(s.value,a)){if(s.children===r.children&&!lt.current){e=Tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(A(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Mh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xe(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Or(e,n),r=Dt(r),i=i(r),e.flags|=1,Xe(t,e,i,n),e.child;case 14:return i=e.type,r=Nt(i,e.pendingProps),r=Nt(i.type,r),Sm(t,e,i,r,n);case 15:return Nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nt(i,r),Al(t,e),e.tag=1,ct(i)?(t=!0,tc(e)):t=!1,Or(e,n),$v(e,i,r),Oh(e,i,r,n),Dh(null,e,i,!0,t,n);case 19:return Kv(t,e,n);case 22:return Vv(t,e,n)}throw Error(A(156,e.tag))};function lx(t,e){return Dy(t,e)}function o3(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,i){return new o3(t,e,n,i)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function l3(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jf)return 11;if(t===Qf)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Op(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case fr:return Vi(n.children,r,s,e);case Xf:a=8,r|=8;break;case nh:return t=Mt(12,n,e,r|2),t.elementType=nh,t.lanes=s,t;case ih:return t=Mt(13,n,e,r),t.elementType=ih,t.lanes=s,t;case rh:return t=Mt(19,n,e,r),t.elementType=rh,t.lanes=s,t;case vy:return Qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:a=10;break e;case yy:a=9;break e;case Jf:a=11;break e;case Qf:a=14;break e;case Fn:a=16,i=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Mt(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vi(t,e,n,i){return t=Mt(7,t,i,e),t.lanes=n,t}function Qc(t,e,n,i){return t=Mt(22,t,i,e),t.elementType=vy,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function c3(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,i,r,s,a,o,l){return t=new c3(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function u3(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return li;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(ct(n))return cv(t,n,e)}return e}function ux(t,e,n,i,r,s,a,o,l){return t=Lp(n,i,!0,t,r,s,a,o,l),t.context=cx(null),n=t.current,i=Je(),r=ni(n),s=wn(i,r),s.callback=e??null,ei(n,s,r),t.current.lanes=r,Na(t,r,i),ut(t,i),t}function Zc(t,e,n,i){var r=e.current,s=Je(),a=ni(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ei(r,e,a),t!==null&&(Gt(t,r,a,s),Tl(t,r,a)),a}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){Im(t,e),(t=t.alternate)&&Im(t,e)}function d3(){return null}var dx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dp(t){this._internalRoot=t}eu.prototype.render=Dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Zc(t,e,null,null)};eu.prototype.unmount=Dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){Zc(null,t,null,null)}),e[Pn]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Hy(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function h3(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(a);s.call(c)}}var a=ux(e,i,t,0,null,!1,!1,"",$m);return t._reactRootContainer=a,t[Pn]=a.current,ha(t.nodeType===8?t.parentNode:t),qi(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=pc(l);o.call(c)}}var l=Lp(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=l,t[Pn]=l.current,ha(t.nodeType===8?t.parentNode:t),qi(function(){Zc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=pc(a);o.call(l)}}Zc(e,a,t,r)}else a=h3(n,e,t,r,i);return pc(a)}By=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(tp(e,n|1),ut(e,ke()),!(X&6)&&(Ur=ke()+500,gi()))}break;case 13:qi(function(){var i=Cn(t,1);if(i!==null){var r=Je();Gt(i,t,1,r)}}),Rp(t,1)}};np=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=Je();Gt(e,t,134217728,n)}Rp(t,134217728)}};Ny=function(t){if(t.tag===13){var e=ni(t),n=Cn(t,e);if(n!==null){var i=Je();Gt(n,t,e,i)}Rp(t,e)}};Vy=function(){return ie};Uy=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};ph=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(A(90));by(i),oh(i,r)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};Ey=Ep;My=qi;var f3={usingClientEntryPoint:!1,Events:[Ua,yr,Kc,Cy,Ty,Ep]},gs={findFiberByHostInstance:Di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p3={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ly(t),t===null?null:t.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||d3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Vc=ko.inject(p3),an=ko}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f3;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(A(200));return u3(t,e,null,n)};kt.createRoot=function(t,e){if(!zp(t))throw Error(A(299));var n=!1,i="",r=dx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,i,r),t[Pn]=e.current,ha(t.nodeType===8?t.parentNode:t),new Dp(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Ly(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return qi(t)};kt.hydrate=function(t,e,n){if(!tu(e))throw Error(A(200));return nu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(A(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=dx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,a),t[Pn]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};kt.render=function(t,e,n){if(!tu(e))throw Error(A(200));return nu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!tu(t))throw Error(A(40));return t._reactRootContainer?(qi(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};kt.unstable_batchedUpdates=Ep;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return nu(t,e,n,!1,i)};kt.version="18.3.1-next-f1338f8080-20240426";function hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hx)}catch(t){console.error(t)}}hx(),hy.exports=kt;var g3=hy.exports,Fm=g3;eh.createRoot=Fm.createRoot,eh.hydrateRoot=Fm.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ka.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const Bm="popstate";function m3(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Gh("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gc(r)}return v3(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function y3(){return Math.random().toString(36).substr(2,8)}function Nm(t,e){return{usr:t.state,key:t.key,idx:e}}function Gh(t,e,n,i){return n===void 0&&(n=null),ka({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ns(e):e,{state:n,key:e&&e.key||i||y3()})}function gc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function v3(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Yn.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(ka({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=Yn.Pop;let k=d(),v=k==null?null:k-c;c=k,l&&l({action:o,location:m.location,delta:v})}function f(k,v){o=Yn.Push;let y=Gh(m.location,k,v);c=d()+1;let b=Nm(y,c),w=m.createHref(y);try{a.pushState(b,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;r.location.assign(w)}s&&l&&l({action:o,location:m.location,delta:1})}function p(k,v){o=Yn.Replace;let y=Gh(m.location,k,v);c=d();let b=Nm(y,c),w=m.createHref(y);a.replaceState(b,"",w),s&&l&&l({action:o,location:m.location,delta:0})}function g(k){let v=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof k=="string"?k:gc(k);return y=y.replace(/ $/,"%20"),xe(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let m={get action(){return o},get location(){return t(r,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Bm,h),l=k,()=>{r.removeEventListener(Bm,h),l=null}},createHref(k){return e(r,k)},createURL:g,encodeLocation(k){let v=g(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:p,go(k){return a.go(k)}};return m}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function x3(t,e,n){return n===void 0&&(n="/"),b3(t,e,n,!1)}function b3(t,e,n,i){let r=typeof e=="string"?ns(e):e,s=Hr(r.pathname||"/",n);if(s==null)return null;let a=px(t);k3(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=O3(s);o=M3(a[l],c,i)}return o}function px(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(xe(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ri([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),px(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:T3(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of gx(s.path))r(s,a,l)}),e}function gx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=gx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function k3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:E3(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const w3=/^:[\w-]+$/,_3=3,j3=2,S3=1,P3=10,C3=-2,Um=t=>t==="*";function T3(t,e){let n=t.split("/"),i=n.length;return n.some(Um)&&(i+=C3),e&&(i+=j3),n.filter(r=>!Um(r)).reduce((r,s)=>r+(w3.test(s)?_3:s===""?S3:P3),i)}function E3(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function M3(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=mc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:ri([s,h.pathname]),pathnameBase:z3(ri([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=ri([s,h.pathnameBase]))}return a}function mc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=A3(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let m=o[h]||"";a=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const g=o[h];return p&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function A3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function O3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function L3(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ns(t):t;return{pathname:n?n.startsWith("/")?n:R3(n,e):e,search:I3(i),hash:$3(r)}}function R3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function nd(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D3(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mx(t,e){let n=D3(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function yx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ns(t):(r=ka({},t),xe(!r.pathname||!r.pathname.includes("?"),nd("?","pathname","search",r)),xe(!r.pathname||!r.pathname.includes("#"),nd("#","pathname","hash",r)),xe(!r.search||!r.search.includes("#"),nd("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=L3(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),z3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),I3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function F3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vx=["post","put","patch","delete"];new Set(vx);const B3=["get",...vx];new Set(B3);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wa.apply(this,arguments)}const iu=j.createContext(null),xx=j.createContext(null),mi=j.createContext(null),ru=j.createContext(null),yi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),bx=j.createContext(null);function N3(t,e){let{relative:n}=e===void 0?{}:e;Wa()||xe(!1);let{basename:i,navigator:r}=j.useContext(mi),{hash:s,pathname:a,search:o}=su(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:ri([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Wa(){return j.useContext(ru)!=null}function Ka(){return Wa()||xe(!1),j.useContext(ru).location}function kx(t){j.useContext(mi).static||j.useLayoutEffect(t)}function de(){let{isDataRoute:t}=j.useContext(yi);return t?n_():V3()}function V3(){Wa()||xe(!1);let t=j.useContext(iu),{basename:e,future:n,navigator:i}=j.useContext(mi),{matches:r}=j.useContext(yi),{pathname:s}=Ka(),a=JSON.stringify(mx(r,n.v7_relativeSplatPath)),o=j.useRef(!1);return kx(()=>{o.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=yx(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ri([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}const U3=j.createContext(null);function H3(t){let e=j.useContext(yi).outlet;return e&&j.createElement(U3.Provider,{value:t},e)}function su(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=j.useContext(mi),{matches:r}=j.useContext(yi),{pathname:s}=Ka(),a=JSON.stringify(mx(r,i.v7_relativeSplatPath));return j.useMemo(()=>yx(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function W3(t,e){return K3(t,e)}function K3(t,e,n,i){Wa()||xe(!1);let{navigator:r}=j.useContext(mi),{matches:s}=j.useContext(yi),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Ka(),d;if(e){var h;let k=typeof e=="string"?ns(e):e;l==="/"||(h=k.pathname)!=null&&h.startsWith(l)||xe(!1),d=k}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let g=x3(t,{pathname:p}),m=J3(g&&g.map(k=>Object.assign({},k,{params:Object.assign({},o,k.params),pathname:ri([l,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:ri([l,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,i);return e&&m?j.createElement(ru.Provider,{value:{location:wa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Yn.Pop}},m):m}function G3(){let t=t_(),e=F3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:r},n):null,null)}const Y3=j.createElement(G3,null);class q3 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(yi.Provider,{value:this.props.routeContext},j.createElement(bx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X3(t){let{routeContext:e,match:n,children:i}=t,r=j.useContext(iu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(yi.Provider,{value:e},i)}function J3(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||xe(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:p}=n,g=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let p,g=!1,m=null,k=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,m=h.route.errorElement||Y3,l&&(c<0&&f===0?(g=!0,k=null):c===f&&(g=!0,k=h.route.hydrateFallbackElement||null)));let v=e.concat(a.slice(0,f+1)),y=()=>{let b;return p?b=m:g?b=k:h.route.Component?b=j.createElement(h.route.Component,null):h.route.element?b=h.route.element:b=d,j.createElement(X3,{match:h,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:b})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?j.createElement(q3,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var wx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wx||{}),yc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yc||{});function Q3(t){let e=j.useContext(iu);return e||xe(!1),e}function Z3(t){let e=j.useContext(xx);return e||xe(!1),e}function e_(t){let e=j.useContext(yi);return e||xe(!1),e}function _x(t){let e=e_(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function t_(){var t;let e=j.useContext(bx),n=Z3(yc.UseRouteError),i=_x(yc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function n_(){let{router:t}=Q3(wx.UseNavigateStable),e=_x(yc.UseNavigateStable),n=j.useRef(!1);return kx(()=>{n.current=!0}),j.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,wa({fromRouteId:e},s)))},[t,e])}const Hm={};function i_(t,e){Hm[e]||(Hm[e]=!0,console.warn(e))}const Wm=(t,e,n)=>i_(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function r_(t,e){t!=null&&t.v7_startTransition||Wm("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Wm("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Ip(t){return H3(t.context)}function q(t){xe(!1)}function s_(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Yn.Pop,navigator:s,static:a=!1,future:o}=t;Wa()&&xe(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:a,future:wa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ns(i));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:g="default"}=i,m=j.useMemo(()=>{let k=Hr(d,l);return k==null?null:{location:{pathname:k,search:h,hash:f,state:p,key:g},navigationType:r}},[l,d,h,f,p,g,r]);return m==null?null:j.createElement(mi.Provider,{value:c},j.createElement(ru.Provider,{children:n,value:m}))}function a_(t){let{children:e,location:n}=t;return W3(Yh(e),n)}new Promise(()=>{});function Yh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(i,r)=>{if(!j.isValidElement(i))return;let s=[...e,r];if(i.type===j.Fragment){n.push.apply(n,Yh(i.props.children,s));return}i.type!==q&&xe(!1),!i.props.index||!i.props.children||xe(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Yh(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vc.apply(this,arguments)}function jx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function o_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function l_(t,e){return t.button===0&&(!e||e==="_self")&&!o_(t)}const c_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],u_=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],d_="6";try{window.__reactRouterVersion=d_}catch{}const h_=j.createContext({isTransitioning:!1}),f_="startTransition",Km=Zd[f_];function p_(t){let{basename:e,children:n,future:i,window:r}=t,s=j.useRef();s.current==null&&(s.current=m3({window:r,v5Compat:!0}));let a=s.current,[o,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=j.useCallback(h=>{c&&Km?Km(()=>l(h)):l(h)},[l,c]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.useEffect(()=>r_(i),[i]),j.createElement(s_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const g_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",m_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,au=j.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:h}=e,f=jx(e,c_),{basename:p}=j.useContext(mi),g,m=!1;if(typeof c=="string"&&m_.test(c)&&(g=c,g_))try{let b=new URL(window.location.href),w=c.startsWith("//")?new URL(b.protocol+c):new URL(c),_=Hr(w.pathname,p);w.origin===b.origin&&_!=null?c=_+w.search+w.hash:m=!0}catch{}let k=N3(c,{relative:r}),v=v_(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:h});function y(b){i&&i(b),b.defaultPrevented||v(b)}return j.createElement("a",vc({},f,{href:g||k,onClick:m||s?i:y,ref:n,target:l}))}),Sx=j.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:d}=e,h=jx(e,u_),f=su(l,{relative:h.relative}),p=Ka(),g=j.useContext(xx),{navigator:m,basename:k}=j.useContext(mi),v=g!=null&&x_(f)&&c===!0,y=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,b=p.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&k&&(w=Hr(w,k)||w);const _=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=b===y||!a&&b.startsWith(y)&&b.charAt(_)==="/",S=w!=null&&(w===y||!a&&w.startsWith(y)&&w.charAt(y.length)==="/"),P={isActive:C,isPending:S,isTransitioning:v},T=C?i:void 0,M;typeof s=="function"?M=s(P):M=[s,C?"active":null,S?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let L=typeof o=="function"?o(P):o;return j.createElement(au,vc({},h,{"aria-current":T,className:M,ref:n,style:L,to:l,viewTransition:c}),typeof d=="function"?d(P):d)});var qh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qh||(qh={}));var Gm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));function y_(t){let e=j.useContext(iu);return e||xe(!1),e}function v_(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=de(),c=Ka(),d=su(t,{relative:a});return j.useCallback(h=>{if(l_(h,n)){h.preventDefault();let f=i!==void 0?i:gc(c)===gc(d);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function x_(t,e){e===void 0&&(e={});let n=j.useContext(h_);n==null&&xe(!1);let{basename:i}=y_(qh.useViewTransitionState),r=su(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Hr(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Hr(n.nextLocation.pathname,i)||n.nextLocation.pathname;return mc(r.pathname,a)!=null||mc(r.pathname,s)!=null}function Xh(){return Xh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xh.apply(null,arguments)}function Px(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var b_=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,k_=Px(function(t){return b_.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),w_=!1;function __(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function j_(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var S_=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!w_:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(j_(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=__(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Ue="-ms-",xc="-moz-",Z="-webkit-",Cx="comm",$p="rule",Fp="decl",P_="@import",Tx="@keyframes",C_="@layer",T_=Math.abs,ou=String.fromCharCode,E_=Object.assign;function M_(t,e){return $e(t,0)^45?(((e<<2^$e(t,0))<<2^$e(t,1))<<2^$e(t,2))<<2^$e(t,3):0}function Ex(t){return t.trim()}function A_(t,e){return(t=e.exec(t))?t[0]:t}function ee(t,e,n){return t.replace(e,n)}function Jh(t,e){return t.indexOf(e)}function $e(t,e){return t.charCodeAt(e)|0}function _a(t,e,n){return t.slice(e,n)}function nn(t){return t.length}function Bp(t){return t.length}function wo(t,e){return e.push(t),t}function O_(t,e){return t.map(e).join("")}var lu=1,Wr=1,Mx=0,dt=0,Se=0,is="";function cu(t,e,n,i,r,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:lu,column:Wr,length:a,return:""}}function ms(t,e){return E_(cu("",null,null,"",null,null,0),t,{length:-t.length},e)}function L_(){return Se}function R_(){return Se=dt>0?$e(is,--dt):0,Wr--,Se===10&&(Wr=1,lu--),Se}function vt(){return Se=dt<Mx?$e(is,dt++):0,Wr++,Se===10&&(Wr=1,lu++),Se}function ln(){return $e(is,dt)}function Dl(){return dt}function Ga(t,e){return _a(is,t,e)}function ja(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ax(t){return lu=Wr=1,Mx=nn(is=t),dt=0,[]}function Ox(t){return is="",t}function zl(t){return Ex(Ga(dt-1,Qh(t===91?t+2:t===40?t+1:t)))}function D_(t){for(;(Se=ln())&&Se<33;)vt();return ja(t)>2||ja(Se)>3?"":" "}function z_(t,e){for(;--e&&vt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Ga(t,Dl()+(e<6&&ln()==32&&vt()==32))}function Qh(t){for(;vt();)switch(Se){case t:return dt;case 34:case 39:t!==34&&t!==39&&Qh(Se);break;case 40:t===41&&Qh(t);break;case 92:vt();break}return dt}function I_(t,e){for(;vt()&&t+Se!==57;)if(t+Se===84&&ln()===47)break;return"/*"+Ga(e,dt-1)+"*"+ou(t===47?t:vt())}function $_(t){for(;!ja(ln());)vt();return Ga(t,dt)}function F_(t){return Ox(Il("",null,null,null,[""],t=Ax(t),0,[0],t))}function Il(t,e,n,i,r,s,a,o,l){for(var c=0,d=0,h=a,f=0,p=0,g=0,m=1,k=1,v=1,y=0,b="",w=r,_=s,C=i,S=b;k;)switch(g=y,y=vt()){case 40:if(g!=108&&$e(S,h-1)==58){Jh(S+=ee(zl(y),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:S+=zl(y);break;case 9:case 10:case 13:case 32:S+=D_(g);break;case 92:S+=z_(Dl()-1,7);continue;case 47:switch(ln()){case 42:case 47:wo(B_(I_(vt(),Dl()),e,n),l);break;default:S+="/"}break;case 123*m:o[c++]=nn(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:k=0;case 59+d:v==-1&&(S=ee(S,/\f/g,"")),p>0&&nn(S)-h&&wo(p>32?qm(S+";",i,n,h-1):qm(ee(S," ","")+";",i,n,h-2),l);break;case 59:S+=";";default:if(wo(C=Ym(S,e,n,c,d,r,o,b,w=[],_=[],h),s),y===123)if(d===0)Il(S,e,C,C,w,s,h,o,_);else switch(f===99&&$e(S,3)===110?100:f){case 100:case 108:case 109:case 115:Il(t,C,C,i&&wo(Ym(t,C,C,0,0,r,o,b,r,w=[],h),_),r,_,h,o,i?w:_);break;default:Il(S,C,C,C,[""],_,0,o,_)}}c=d=p=0,m=v=1,b=S="",h=a;break;case 58:h=1+nn(S),p=g;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&R_()==125)continue}switch(S+=ou(y),y*m){case 38:v=d>0?1:(S+="\f",-1);break;case 44:o[c++]=(nn(S)-1)*v,v=1;break;case 64:ln()===45&&(S+=zl(vt())),f=ln(),d=h=nn(b=S+=$_(Dl())),y++;break;case 45:g===45&&nn(S)==2&&(m=0)}}return s}function Ym(t,e,n,i,r,s,a,o,l,c,d){for(var h=r-1,f=r===0?s:[""],p=Bp(f),g=0,m=0,k=0;g<i;++g)for(var v=0,y=_a(t,h+1,h=T_(m=a[g])),b=t;v<p;++v)(b=Ex(m>0?f[v]+" "+y:ee(y,/&\f/g,f[v])))&&(l[k++]=b);return cu(t,e,n,r===0?$p:o,l,c,d)}function B_(t,e,n){return cu(t,e,n,Cx,ou(L_()),_a(t,2,-2),0)}function qm(t,e,n,i){return cu(t,e,n,Fp,_a(t,0,i),_a(t,i+1,-1),i)}function Rr(t,e){for(var n="",i=Bp(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function N_(t,e,n,i){switch(t.type){case C_:if(t.children.length)break;case P_:case Fp:return t.return=t.return||t.value;case Cx:return"";case Tx:return t.return=t.value+"{"+Rr(t.children,i)+"}";case $p:t.value=t.props.join(",")}return nn(n=Rr(t.children,i))?t.return=t.value+"{"+n+"}":""}function V_(t){var e=Bp(t);return function(n,i,r,s){for(var a="",o=0;o<e;o++)a+=t[o](n,i,r,s)||"";return a}}function U_(t){return function(e){e.root||(e=e.return)&&t(e)}}var H_=function(e,n,i){for(var r=0,s=0;r=s,s=ln(),r===38&&s===12&&(n[i]=1),!ja(s);)vt();return Ga(e,dt)},W_=function(e,n){var i=-1,r=44;do switch(ja(r)){case 0:r===38&&ln()===12&&(n[i]=1),e[i]+=H_(dt-1,n,i);break;case 2:e[i]+=zl(r);break;case 4:if(r===44){e[++i]=ln()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=ou(r)}while(r=vt());return e},K_=function(e,n){return Ox(W_(Ax(e),n))},Xm=new WeakMap,G_=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Xm.get(i))&&!r){Xm.set(e,!0);for(var s=[],a=K_(n,s),o=i.props,l=0,c=0;l<a.length;l++)for(var d=0;d<o.length;d++,c++)e.props[c]=s[l]?a[l].replace(/&\f/g,o[d]):o[d]+" "+a[l]}}},Y_=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Lx(t,e){switch(M_(t,e)){case 5103:return Z+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+t+xc+t+Ue+t+t;case 6828:case 4268:return Z+t+Ue+t+t;case 6165:return Z+t+Ue+"flex-"+t+t;case 5187:return Z+t+ee(t,/(\w+).+(:[^]+)/,Z+"box-$1$2"+Ue+"flex-$1$2")+t;case 5443:return Z+t+Ue+"flex-item-"+ee(t,/flex-|-self/,"")+t;case 4675:return Z+t+Ue+"flex-line-pack"+ee(t,/align-content|flex-|-self/,"")+t;case 5548:return Z+t+Ue+ee(t,"shrink","negative")+t;case 5292:return Z+t+Ue+ee(t,"basis","preferred-size")+t;case 6060:return Z+"box-"+ee(t,"-grow","")+Z+t+Ue+ee(t,"grow","positive")+t;case 4554:return Z+ee(t,/([^-])(transform)/g,"$1"+Z+"$2")+t;case 6187:return ee(ee(ee(t,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),t,"")+t;case 5495:case 3959:return ee(t,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return ee(ee(t,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+t+t;case 4095:case 3583:case 4068:case 2532:return ee(t,/(.+)-inline(.+)/,Z+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(t)-1-e>6)switch($e(t,e+1)){case 109:if($e(t,e+4)!==45)break;case 102:return ee(t,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+xc+($e(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Jh(t,"stretch")?Lx(ee(t,"stretch","fill-available"),e)+t:t}break;case 4949:if($e(t,e+1)!==115)break;case 6444:switch($e(t,nn(t)-3-(~Jh(t,"!important")&&10))){case 107:return ee(t,":",":"+Z)+t;case 101:return ee(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+($e(t,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+Ue+"$2box$3")+t}break;case 5936:switch($e(t,e+11)){case 114:return Z+t+Ue+ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Z+t+Ue+ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Z+t+Ue+ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Z+t+Ue+t+t}return t}var q_=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Fp:e.return=Lx(e.value,e.length);break;case Tx:return Rr([ms(e,{value:ee(e.value,"@","@"+Z)})],r);case $p:if(e.length)return O_(e.props,function(s){switch(A_(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Rr([ms(e,{props:[ee(s,/:(read-\w+)/,":"+xc+"$1")]})],r);case"::placeholder":return Rr([ms(e,{props:[ee(s,/:(plac\w+)/,":"+Z+"input-$1")]}),ms(e,{props:[ee(s,/:(plac\w+)/,":"+xc+"$1")]}),ms(e,{props:[ee(s,/:(plac\w+)/,Ue+"input-$1")]})],r)}return""})}},X_=[q_],J_=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(m){var k=m.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var r=e.stylisPlugins||X_,s={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var k=m.getAttribute("data-emotion").split(" "),v=1;v<k.length;v++)s[k[v]]=!0;o.push(m)});var l,c=[G_,Y_];{var d,h=[N_,U_(function(m){d.insert(m)})],f=V_(c.concat(r,h)),p=function(k){return Rr(F_(k),f)};l=function(k,v,y,b){d=y,p(k?k+"{"+v.styles+"}":v.styles),b&&(g.inserted[v.name]=!0)}}var g={key:n,sheet:new S_({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return g.sheet.hydrate(o),g},Q_=!0;function Z_(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var Rx=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||Q_===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},e6=function(e,n,i){Rx(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function t6(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var n6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i6=!1,r6=/[A-Z]|^ms/g,s6=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dx=function(e){return e.charCodeAt(1)===45},Jm=function(e){return e!=null&&typeof e!="boolean"},id=Px(function(t){return Dx(t)?t:t.replace(r6,"-$&").toLowerCase()}),Qm=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(s6,function(i,r,s){return rn={name:r,styles:s,next:rn},r})}return n6[e]!==1&&!Dx(e)&&typeof n=="number"&&n!==0?n+"px":n},a6="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Sa(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return rn={name:r.name,styles:r.styles,next:rn},r.name;var s=n;if(s.styles!==void 0){var a=s.next;if(a!==void 0)for(;a!==void 0;)rn={name:a.name,styles:a.styles,next:rn},a=a.next;var o=s.styles+";";return o}return o6(t,e,n)}case"function":{if(t!==void 0){var l=rn,c=n(t);return rn=l,Sa(t,e,c)}break}}var d=n;if(e==null)return d;var h=e[d];return h!==void 0?h:d}function o6(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Sa(t,e,n[r])+";";else for(var s in n){var a=n[s];if(typeof a!="object"){var o=a;e!=null&&e[o]!==void 0?i+=s+"{"+e[o]+"}":Jm(o)&&(i+=id(s)+":"+Qm(s,o)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&i6)throw new Error(a6);if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var l=0;l<a.length;l++)Jm(a[l])&&(i+=id(s)+":"+Qm(s,a[l])+";");else{var c=Sa(t,e,a);switch(s){case"animation":case"animationName":{i+=id(s)+":"+c+";";break}default:i+=s+"{"+c+"}"}}}}return i}var Zm=/label:\s*([^\s;{]+)\s*(;|$)/g,rn;function l6(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";rn=void 0;var s=t[0];if(s==null||s.raw===void 0)i=!1,r+=Sa(n,e,s);else{var a=s;r+=a[0]}for(var o=1;o<t.length;o++)if(r+=Sa(n,e,t[o]),i){var l=s;r+=l[o]}Zm.lastIndex=0;for(var c="",d;(d=Zm.exec(r))!==null;)c+="-"+d[1];var h=t6(r)+c;return{name:h,styles:r,next:rn}}var c6=function(e){return e()},u6=Zd.useInsertionEffect?Zd.useInsertionEffect:!1,d6=u6||c6,zx=j.createContext(typeof HTMLElement<"u"?J_({key:"css"}):null);zx.Provider;var h6=function(e){return j.forwardRef(function(n,i){var r=j.useContext(zx);return e(n,r,i)})},f6=j.createContext({}),p6=k_,g6=function(e){return e!=="theme"},e0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?p6:g6},t0=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(a){return e.__emotion_forwardProp(a)&&s(a)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},m6=!1,y6=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Rx(n,i,r),d6(function(){return e6(n,i,r)}),null},v6=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,a;n!==void 0&&(s=n.label,a=n.target);var o=t0(e,n,i),l=o||e0(r),c=!l("as");return function(){var d=arguments,h=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var f=d.length,p=1;p<f;p++)h.push(d[p],d[0][p])}var g=h6(function(m,k,v){var y=c&&m.as||r,b="",w=[],_=m;if(m.theme==null){_={};for(var C in m)_[C]=m[C];_.theme=j.useContext(f6)}typeof m.className=="string"?b=Z_(k.registered,w,m.className):m.className!=null&&(b=m.className+" ");var S=l6(h.concat(w),k.registered,_);b+=k.key+"-"+S.name,a!==void 0&&(b+=" "+a);var P=c&&o===void 0?e0(y):l,T={};for(var M in m)c&&M==="as"||P(M)&&(T[M]=m[M]);return T.className=b,v&&(T.ref=v),j.createElement(j.Fragment,null,j.createElement(y6,{cache:k,serialized:S,isStringTag:typeof y=="string"}),j.createElement(y,T))});return g.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=r,g.__emotion_styles=h,g.__emotion_forwardProp=o,Object.defineProperty(g,"toString",{value:function(){return a===void 0&&m6?"NO_COMPONENT_SELECTOR":"."+a}}),g.withComponent=function(m,k){return t(m,Xh({},n,k,{shouldForwardProp:t0(g,k,!0)})).apply(void 0,h)},g}},x6=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],x=v6.bind();x6.forEach(function(t){x[t]=x(t)});const Ix=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),uu=j.createContext({}),du=j.createContext(null),hu=typeof document<"u",Np=hu?j.useLayoutEffect:j.useEffect,$x=j.createContext({strict:!1}),Vp=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),b6="framerAppearId",Fx="data-"+Vp(b6);function k6(t,e,n,i){const{visualElement:r}=j.useContext(uu),s=j.useContext($x),a=j.useContext(du),o=j.useContext(Ix).reducedMotion,l=j.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:o}));const c=l.current;j.useInsertionEffect(()=>{c&&c.update(n,a)});const d=j.useRef(!!(n[Fx]&&!window.HandoffComplete));return Np(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),j.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function jr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function w6(t,e,n){return j.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):jr(n)&&(n.current=i))},[e])}function Pa(t){return typeof t=="string"||Array.isArray(t)}function fu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Up];function pu(t){return fu(t.animate)||Hp.some(e=>Pa(t[e]))}function Bx(t){return!!(pu(t)||t.variants)}function _6(t,e){if(pu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Pa(n)?n:void 0,animate:Pa(i)?i:void 0}}return t.inherit!==!1?e:{}}function j6(t){const{initial:e,animate:n}=_6(t,j.useContext(uu));return j.useMemo(()=>({initial:e,animate:n}),[n0(e),n0(n)])}function n0(t){return Array.isArray(t)?t.join(" "):t}const i0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ca={};for(const t in i0)Ca[t]={isEnabled:e=>i0[t].some(n=>!!e[n])};function S6(t){for(const e in t)Ca[e]={...Ca[e],...t[e]}}const Wp=j.createContext({}),Nx=j.createContext({}),P6=Symbol.for("motionComponentSymbol");function C6({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&S6(t);function s(o,l){let c;const d={...j.useContext(Ix),...o,layoutId:T6(o)},{isStatic:h}=d,f=j6(o),p=i(o,h);if(!h&&hu){f.visualElement=k6(r,p,d,e);const g=j.useContext(Nx),m=j.useContext($x).strict;f.visualElement&&(c=f.visualElement.loadFeatures(d,m,t,g))}return j.createElement(uu.Provider,{value:f},c&&f.visualElement?j.createElement(c,{visualElement:f.visualElement,...d}):null,n(r,o,w6(p,f.visualElement,l),p,h,f.visualElement))}const a=j.forwardRef(s);return a[P6]=r,a}function T6({layoutId:t}){const e=j.useContext(Wp).id;return e&&t!==void 0?e+"-"+t:t}function E6(t){function e(i,r={}){return C6(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const M6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kp(t){return typeof t!="string"||t.includes("-")?!1:!!(M6.indexOf(t)>-1||/[A-Z]/.test(t))}const bc={};function A6(t){Object.assign(bc,t)}const Ya=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zi=new Set(Ya);function Vx(t,{layout:e,layoutId:n}){return Zi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!bc[t]||t==="opacity")}const ht=t=>!!(t&&t.getVelocity),O6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},L6=Ya.length;function R6(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let a=0;a<L6;a++){const o=Ya[a];if(t[o]!==void 0){const l=O6[o]||o;s+=`${l}(${t[o]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const Ux=t=>e=>typeof e=="string"&&e.startsWith(t),Hx=Ux("--"),Zh=Ux("var(--"),D6=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,z6=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ci=(t,e,n)=>Math.min(Math.max(n,t),e),er={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ks={...er,transform:t=>ci(0,1,t)},_o={...er,default:1},Gs=t=>Math.round(t*1e5)/1e5,gu=/(-)?([\d]*\.?[\d])+/g,Wx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,I6=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qa(t){return typeof t=="string"}const Xa=t=>({test:e=>qa(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Dn=Xa("deg"),cn=Xa("%"),B=Xa("px"),$6=Xa("vh"),F6=Xa("vw"),r0={...cn,parse:t=>cn.parse(t)/100,transform:t=>cn.transform(t*100)},s0={...er,transform:Math.round},Kx={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,radius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,size:B,top:B,right:B,bottom:B,left:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,rotate:Dn,rotateX:Dn,rotateY:Dn,rotateZ:Dn,scale:_o,scaleX:_o,scaleY:_o,scaleZ:_o,skew:Dn,skewX:Dn,skewY:Dn,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Ks,originX:r0,originY:r0,originZ:B,zIndex:s0,fillOpacity:Ks,strokeOpacity:Ks,numOctaves:s0};function Gp(t,e,n,i){const{style:r,vars:s,transform:a,transformOrigin:o}=t;let l=!1,c=!1,d=!0;for(const h in e){const f=e[h];if(Hx(h)){s[h]=f;continue}const p=Kx[h],g=z6(f,p);if(Zi.has(h)){if(l=!0,a[h]=g,!d)continue;f!==(p.default||0)&&(d=!1)}else h.startsWith("origin")?(c=!0,o[h]=g):r[h]=g}if(e.transform||(l||i?r.transform=R6(t.transform,n,d,i):r.transform&&(r.transform="none")),c){const{originX:h="50%",originY:f="50%",originZ:p=0}=o;r.transformOrigin=`${h} ${f} ${p}`}}const Yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Gx(t,e,n){for(const i in e)!ht(e[i])&&!Vx(i,n)&&(t[i]=e[i])}function B6({transformTemplate:t},e,n){return j.useMemo(()=>{const i=Yp();return Gp(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function N6(t,e,n){const i=t.style||{},r={};return Gx(r,i,t),Object.assign(r,B6(t,e,n)),t.transformValues?t.transformValues(r):r}function V6(t,e,n){const i={},r=N6(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const U6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function kc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||U6.has(t)}let Yx=t=>!kc(t);function H6(t){t&&(Yx=e=>e.startsWith("on")?!kc(e):t(e))}try{H6(require("@emotion/is-prop-valid").default)}catch{}function W6(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Yx(r)||n===!0&&kc(r)||!e&&!kc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function a0(t,e,n){return typeof t=="string"?t:B.transform(e+n*t)}function K6(t,e,n){const i=a0(e,t.x,t.width),r=a0(n,t.y,t.height);return`${i} ${r}`}const G6={offset:"stroke-dashoffset",array:"stroke-dasharray"},Y6={offset:"strokeDashoffset",array:"strokeDasharray"};function q6(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?G6:Y6;t[s.offset]=B.transform(-i);const a=B.transform(e),o=B.transform(n);t[s.array]=`${a} ${o}`}function qp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},d,h,f){if(Gp(t,c,d,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:m}=t;p.transform&&(m&&(g.transform=p.transform),delete p.transform),m&&(r!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=K6(m,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),a!==void 0&&q6(p,a,o,l,!1)}const qx=()=>({...Yp(),attrs:{}}),Xp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function X6(t,e,n,i){const r=j.useMemo(()=>{const s=qx();return qp(s,e,{enableHardwareAcceleration:!1},Xp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Gx(s,t.style,t),r.style={...s,...r.style}}return r}function J6(t=!1){return(n,i,r,{latestValues:s},a)=>{const l=(Kp(n)?X6:V6)(i,s,a,n),d={...W6(i,typeof n=="string",t),...l,ref:r},{children:h}=i,f=j.useMemo(()=>ht(h)?h.get():h,[h]);return j.createElement(n,{...d,children:f})}}function Xx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Jx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qx(t,e,n,i){Xx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Jx.has(r)?r:Vp(r),e.attrs[r])}function Jp(t,e){const{style:n}=t,i={};for(const r in n)(ht(n[r])||e.style&&ht(e.style[r])||Vx(r,t))&&(i[r]=n[r]);return i}function Zx(t,e){const n=Jp(t,e);for(const i in t)if(ht(t[i])||ht(e[i])){const r=Ya.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Qp(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function eb(t){const e=j.useRef(null);return e.current===null&&(e.current=t()),e.current}const wc=t=>Array.isArray(t),Q6=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Z6=t=>wc(t)?t[t.length-1]||0:t;function $l(t){const e=ht(t)?t.get():t;return Q6(e)?e.toValue():e}function e8({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const a={latestValues:t8(i,r,s,t),renderState:e()};return n&&(a.mount=o=>n(i,o,a)),a}const tb=t=>(e,n)=>{const i=j.useContext(uu),r=j.useContext(du),s=()=>e8(t,e,i,r);return n?s():eb(s)};function t8(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=$l(s[f]);let{initial:a,animate:o}=t;const l=pu(t),c=Bx(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const h=d?o:a;return h&&typeof h!="boolean"&&!fu(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const g=Qp(t,p);if(!g)return;const{transitionEnd:m,transition:k,...v}=g;for(const y in v){let b=v[y];if(Array.isArray(b)){const w=d?b.length-1:0;b=b[w]}b!==null&&(r[y]=b)}for(const y in m)r[y]=m[y]}),r}const we=t=>t;class o0{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function n8(t){let e=new o0,n=new o0,i=0,r=!1,s=!1;const a=new WeakSet,o={schedule:(l,c=!1,d=!1)=>{const h=d&&r,f=h?e:n;return c&&a.add(l),f.add(l)&&h&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const d=e.order[c];d(l),a.has(d)&&(o.schedule(d),t())}r=!1,s&&(s=!1,o.process(l))}};return o}const jo=["prepare","read","update","preRender","render","postRender"],i8=40;function r8(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=jo.reduce((h,f)=>(h[f]=n8(()=>n=!0),h),{}),a=h=>s[h].process(r),o=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,i8),1),r.timestamp=h,r.isProcessing=!0,jo.forEach(a),r.isProcessing=!1,n&&e&&(i=!1,t(o))},l=()=>{n=!0,i=!0,r.isProcessing||t(o)};return{schedule:jo.reduce((h,f)=>{const p=s[f];return h[f]=(g,m=!1,k=!1)=>(n||l(),p.schedule(g,m,k)),h},{}),cancel:h=>jo.forEach(f=>s[f].cancel(h)),state:r,steps:s}}const{schedule:oe,cancel:En,state:He,steps:rd}=r8(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),s8={useVisualState:tb({scrapeMotionValuesFromProps:Zx,createRenderState:qx,onMount:(t,e,{renderState:n,latestValues:i})=>{oe.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),oe.render(()=>{qp(n,i,{enableHardwareAcceleration:!1},Xp(e.tagName),t.transformTemplate),Qx(e,n)})}})},a8={useVisualState:tb({scrapeMotionValuesFromProps:Jp,createRenderState:Yp})};function o8(t,{forwardMotionProps:e=!1},n,i){return{...Kp(t)?s8:a8,preloadedFeatures:n,useRender:J6(e),createVisualElement:i,Component:t}}function kn(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const nb=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function mu(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const l8=t=>e=>nb(e)&&t(e,mu(e));function _n(t,e,n,i){return kn(t,e,l8(n),i)}const c8=(t,e)=>n=>e(t(n)),si=(...t)=>t.reduce(c8);function ib(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const l0=ib("dragHorizontal"),c0=ib("dragVertical");function rb(t){let e=!1;if(t==="y")e=c0();else if(t==="x")e=l0();else{const n=l0(),i=c0();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function sb(){const t=rb(!0);return t?(t(),!1):!0}class vi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function u0(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,a)=>{if(s.pointerType==="touch"||sb())return;const o=t.getProps();t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",e),o[i]&&oe.update(()=>o[i](s,a))};return _n(t.current,n,r,{passive:!t.getProps()[i]})}class u8 extends vi{mount(){this.unmount=si(u0(this.node,!0),u0(this.node,!1))}unmount(){}}class d8 extends vi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=si(kn(this.node.current,"focus",()=>this.onFocus()),kn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ab=(t,e)=>e?t===e?!0:ab(t,e.parentElement):!1;function sd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,mu(n))}class h8 extends vi{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=_n(window,"pointerup",(o,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:h}=this.node.getProps();oe.update(()=>{!h&&!ab(this.node.current,o.target)?d&&d(o,l):c&&c(o,l)})},{passive:!(i.onTap||i.onPointerUp)}),a=_n(window,"pointercancel",(o,l)=>this.cancelPress(o,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=si(s,a),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=o=>{o.key!=="Enter"||!this.checkPressEnd()||sd("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&oe.update(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=kn(this.node.current,"keyup",a),sd("down",(o,l)=>{this.startPress(o,l)})},n=kn(this.node.current,"keydown",e),i=()=>{this.isPressing&&sd("cancel",(s,a)=>this.cancelPress(s,a))},r=kn(this.node.current,"blur",i);this.removeAccessibleListeners=si(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&oe.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!sb()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&oe.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=_n(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=kn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=si(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ef=new WeakMap,ad=new WeakMap,f8=t=>{const e=ef.get(t.target);e&&e(t)},p8=t=>{t.forEach(f8)};function g8({root:t,...e}){const n=t||document;ad.has(n)||ad.set(n,{});const i=ad.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(p8,{root:t,...e})),i[r]}function m8(t,e,n){const i=g8(e);return ef.set(t,n),i.observe(t),()=>{ef.delete(t),i.unobserve(t)}}const y8={some:0,all:1};class v8 extends vi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:y8[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=c?d:h;f&&f(l)};return m8(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(x8(e,n))&&this.startObserver()}unmount(){}}function x8({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const b8={inView:{Feature:v8},tap:{Feature:h8},focus:{Feature:d8},hover:{Feature:u8}};function ob(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function k8(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function w8(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function yu(t,e,n){const i=t.getProps();return Qp(i,e,n!==void 0?n:i.custom,k8(t),w8(t))}let _c=we;const Ui=t=>t*1e3,jn=t=>t/1e3,_8={current:!1},lb=t=>Array.isArray(t)&&typeof t[0]=="number";function cb(t){return!!(!t||typeof t=="string"&&ub[t]||lb(t)||Array.isArray(t)&&t.every(cb))}const Ms=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ub={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ms([0,.65,.55,1]),circOut:Ms([.55,0,1,.45]),backIn:Ms([.31,.01,.66,-.59]),backOut:Ms([.33,1.53,.69,.99])};function db(t){if(t)return lb(t)?Ms(t):Array.isArray(t)?t.map(db):ub[t]}function j8(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:a="loop",ease:o,times:l}={}){const c={[e]:n};l&&(c.offset=l);const d=db(o);return Array.isArray(d)&&(c.easing=d),t.animate(c,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function S8(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const hb=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,P8=1e-7,C8=12;function T8(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=hb(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>P8&&++o<C8);return a}function Ja(t,e,n,i){if(t===e&&n===i)return we;const r=s=>T8(s,0,1,t,n);return s=>s===0||s===1?s:hb(r(s),e,i)}const E8=Ja(.42,0,1,1),M8=Ja(0,0,.58,1),fb=Ja(.42,0,.58,1),A8=t=>Array.isArray(t)&&typeof t[0]!="number",pb=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,gb=t=>e=>1-t(1-e),Zp=t=>1-Math.sin(Math.acos(t)),mb=gb(Zp),O8=pb(Zp),yb=Ja(.33,1.53,.69,.99),eg=gb(yb),L8=pb(eg),R8=t=>(t*=2)<1?.5*eg(t):.5*(2-Math.pow(2,-10*(t-1))),d0={linear:we,easeIn:E8,easeInOut:fb,easeOut:M8,circIn:Zp,circInOut:O8,circOut:mb,backIn:eg,backInOut:L8,backOut:yb,anticipate:R8},h0=t=>{if(Array.isArray(t)){_c(t.length===4);const[e,n,i,r]=t;return Ja(e,n,i,r)}else if(typeof t=="string")return _c(d0[t]!==void 0),d0[t];return t},tg=(t,e)=>n=>!!(qa(n)&&I6.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),vb=(t,e,n)=>i=>{if(!qa(i))return i;const[r,s,a,o]=i.match(gu);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},D8=t=>ci(0,255,t),od={...er,transform:t=>Math.round(D8(t))},$i={test:tg("rgb","red"),parse:vb("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+od.transform(t)+", "+od.transform(e)+", "+od.transform(n)+", "+Gs(Ks.transform(i))+")"};function z8(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const tf={test:tg("#"),parse:z8,transform:$i.transform},Sr={test:tg("hsl","hue"),parse:vb("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+cn.transform(Gs(e))+", "+cn.transform(Gs(n))+", "+Gs(Ks.transform(i))+")"},qe={test:t=>$i.test(t)||tf.test(t)||Sr.test(t),parse:t=>$i.test(t)?$i.parse(t):Sr.test(t)?Sr.parse(t):tf.parse(t),transform:t=>qa(t)?t:t.hasOwnProperty("red")?$i.transform(t):Sr.transform(t)},pe=(t,e,n)=>-n*t+n*e+t;function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function I8({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=ld(l,o,t+1/3),s=ld(l,o,t),a=ld(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}const cd=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},$8=[tf,$i,Sr],F8=t=>$8.find(e=>e.test(t));function f0(t){const e=F8(t);let n=e.parse(t);return e===Sr&&(n=I8(n)),n}const xb=(t,e)=>{const n=f0(t),i=f0(e),r={...n};return s=>(r.red=cd(n.red,i.red,s),r.green=cd(n.green,i.green,s),r.blue=cd(n.blue,i.blue,s),r.alpha=pe(n.alpha,i.alpha,s),$i.transform(r))};function B8(t){var e,n;return isNaN(t)&&qa(t)&&(((e=t.match(gu))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Wx))===null||n===void 0?void 0:n.length)||0)>0}const bb={regex:D6,countKey:"Vars",token:"${v}",parse:we},kb={regex:Wx,countKey:"Colors",token:"${c}",parse:qe.parse},wb={regex:gu,countKey:"Numbers",token:"${n}",parse:er.parse};function ud(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function jc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ud(n,bb),ud(n,kb),ud(n,wb),n}function _b(t){return jc(t).values}function jb(t){const{values:e,numColors:n,numVars:i,tokenised:r}=jc(t),s=e.length;return a=>{let o=r;for(let l=0;l<s;l++)l<i?o=o.replace(bb.token,a[l]):l<i+n?o=o.replace(kb.token,qe.transform(a[l])):o=o.replace(wb.token,Gs(a[l]));return o}}const N8=t=>typeof t=="number"?0:t;function V8(t){const e=_b(t);return jb(t)(e.map(N8))}const ui={test:B8,parse:_b,createTransformer:jb,getAnimatableNone:V8},Sb=(t,e)=>n=>`${n>0?e:t}`;function Pb(t,e){return typeof t=="number"?n=>pe(t,e,n):qe.test(t)?xb(t,e):t.startsWith("var(")?Sb(t,e):Tb(t,e)}const Cb=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,a)=>Pb(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}},U8=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Pb(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},Tb=(t,e)=>{const n=ui.createTransformer(e),i=jc(t),r=jc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?si(Cb(i.values,r.values),n):Sb(t,e)},Ta=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},p0=(t,e)=>n=>pe(t,e,n);function H8(t){return typeof t=="number"?p0:typeof t=="string"?qe.test(t)?xb:Tb:Array.isArray(t)?Cb:typeof t=="object"?U8:p0}function W8(t,e,n){const i=[],r=n||H8(t[0]),s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||we:e;o=si(l,o)}i.push(o)}return i}function Eb(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(_c(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=W8(e,i,r),o=a.length,l=c=>{let d=0;if(o>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const h=Ta(t[d],t[d+1],c);return a[d](h)};return n?c=>l(ci(t[0],t[s-1],c)):l}function K8(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ta(0,e,i);t.push(pe(n,1,r))}}function G8(t){const e=[0];return K8(e,t.length-1),e}function Y8(t,e){return t.map(n=>n*e)}function q8(t,e){return t.map(()=>e||fb).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=A8(i)?i.map(h0):h0(i),s={done:!1,value:e[0]},a=Y8(n&&n.length===e.length?n:G8(e),t),o=Eb(a,e,{ease:Array.isArray(r)?r:q8(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}function Mb(t,e){return e?t*(1e3/e):0}const X8=5;function Ab(t,e,n){const i=Math.max(e-X8,0);return Mb(n-t(i),e-i)}const dd=.001,J8=.01,Q8=10,Z8=.05,ej=1;function tj({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,a=1-e;a=ci(Z8,ej,a),t=ci(J8,Q8,jn(t)),a<1?(r=c=>{const d=c*a,h=d*t,f=d-n,p=nf(c,a),g=Math.exp(-h);return dd-f/p*g},s=c=>{const h=c*a*t,f=h*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,g=Math.exp(-h),m=nf(Math.pow(c,2),a);return(-r(c)+dd>0?-1:1)*((f-p)*g)/m}):(r=c=>{const d=Math.exp(-c*t),h=(c-n)*t+1;return-dd+d*h},s=c=>{const d=Math.exp(-c*t),h=(n-c)*(t*t);return d*h});const o=5/t,l=ij(r,s,o);if(t=Ui(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const nj=12;function ij(t,e,n){let i=n;for(let r=1;r<nj;r++)i=i-t(i)/e(i);return i}function nf(t,e){return t*Math.sqrt(1-e*e)}const rj=["duration","bounce"],sj=["stiffness","damping","mass"];function g0(t,e){return e.some(n=>t[n]!==void 0)}function aj(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!g0(t,sj)&&g0(t,rj)){const n=tj(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Ob({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],a={done:!1,value:r},{stiffness:o,damping:l,mass:c,duration:d,velocity:h,isResolvedFromDuration:f}=aj({...i,velocity:-jn(i.velocity||0)}),p=h||0,g=l/(2*Math.sqrt(o*c)),m=s-r,k=jn(Math.sqrt(o/c)),v=Math.abs(m)<5;n||(n=v?.01:2),e||(e=v?.005:.5);let y;if(g<1){const b=nf(k,g);y=w=>{const _=Math.exp(-g*k*w);return s-_*((p+g*k*m)/b*Math.sin(b*w)+m*Math.cos(b*w))}}else if(g===1)y=b=>s-Math.exp(-k*b)*(m+(p+k*m)*b);else{const b=k*Math.sqrt(g*g-1);y=w=>{const _=Math.exp(-g*k*w),C=Math.min(b*w,300);return s-_*((p+g*k*m)*Math.sinh(C)+b*m*Math.cosh(C))/b}}return{calculatedDuration:f&&d||null,next:b=>{const w=y(b);if(f)a.done=b>=d;else{let _=p;b!==0&&(g<1?_=Ab(y,b,w):_=0);const C=Math.abs(_)<=n,S=Math.abs(s-w)<=e;a.done=C&&S}return a.value=a.done?s:w,a}}}function m0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:d}){const h=t[0],f={done:!1,value:h},p=P=>o!==void 0&&P<o||l!==void 0&&P>l,g=P=>o===void 0?l:l===void 0||Math.abs(o-P)<Math.abs(l-P)?o:l;let m=n*e;const k=h+m,v=a===void 0?k:a(k);v!==k&&(m=v-h);const y=P=>-m*Math.exp(-P/i),b=P=>v+y(P),w=P=>{const T=y(P),M=b(P);f.done=Math.abs(T)<=c,f.value=f.done?v:M};let _,C;const S=P=>{p(f.value)&&(_=P,C=Ob({keyframes:[f.value,g(f.value)],velocity:Ab(b,P,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:d}))};return S(0),{calculatedDuration:null,next:P=>{let T=!1;return!C&&_===void 0&&(T=!0,w(P),S(P)),_!==void 0&&P>_?C.next(P-_):(!T&&w(P),f)}}}const oj=t=>{const e=({timestamp:n})=>t(n);return{start:()=>oe.update(e,!0),stop:()=>En(e),now:()=>He.isProcessing?He.timestamp:performance.now()}},y0=2e4;function v0(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<y0;)e+=n,i=t.next(e);return e>=y0?1/0:e}const lj={decay:m0,inertia:m0,tween:Sc,keyframes:Sc,spring:Ob};function Pc({autoplay:t=!0,delay:e=0,driver:n=oj,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:o="loop",onPlay:l,onStop:c,onComplete:d,onUpdate:h,...f}){let p=1,g=!1,m,k;const v=()=>{k=new Promise(F=>{m=F})};v();let y;const b=lj[r]||Sc;let w;b!==Sc&&typeof i[0]!="number"&&(w=Eb([0,100],i,{clamp:!1}),i=[0,100]);const _=b({...f,keyframes:i});let C;o==="mirror"&&(C=b({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let S="idle",P=null,T=null,M=null;_.calculatedDuration===null&&s&&(_.calculatedDuration=v0(_));const{calculatedDuration:L}=_;let D=1/0,H=1/0;L!==null&&(D=L+a,H=D*(s+1)-a);let J=0;const Y=F=>{if(T===null)return;p>0&&(T=Math.min(T,F)),p<0&&(T=Math.min(F-H/p,T)),P!==null?J=P:J=Math.round(F-T)*p;const Q=J-e*(p>=0?1:-1),ft=p>=0?Q<0:Q>H;J=Math.max(Q,0),S==="finished"&&P===null&&(J=H);let Ee=J,_t=_;if(s){const Eu=Math.min(J,H)/D;let io=Math.floor(Eu),bi=Eu%1;!bi&&Eu>=1&&(bi=1),bi===1&&io--,io=Math.min(io,s+1),!!(io%2)&&(o==="reverse"?(bi=1-bi,a&&(bi-=a/D)):o==="mirror"&&(_t=C)),Ee=ci(0,1,bi)*D}const be=ft?{done:!1,value:i[0]}:_t.next(Ee);w&&(be.value=w(be.value));let{done:xi}=be;!ft&&L!==null&&(xi=p>=0?J>=H:J<=0);const Fk=P===null&&(S==="finished"||S==="running"&&xi);return h&&h(be.value),Fk&&O(),be},N=()=>{y&&y.stop(),y=void 0},re=()=>{S="idle",N(),m(),v(),T=M=null},O=()=>{S="finished",d&&d(),N(),m()},I=()=>{if(g)return;y||(y=n(Y));const F=y.now();l&&l(),P!==null?T=F-P:(!T||S==="finished")&&(T=F),S==="finished"&&v(),M=T,P=null,S="running",y.start()};t&&I();const $={then(F,Q){return k.then(F,Q)},get time(){return jn(J)},set time(F){F=Ui(F),J=F,P!==null||!y||p===0?P=F:T=y.now()-F/p},get duration(){const F=_.calculatedDuration===null?v0(_):_.calculatedDuration;return jn(F)},get speed(){return p},set speed(F){F===p||!y||(p=F,$.time=jn(J))},get state(){return S},play:I,pause:()=>{S="paused",P=J},stop:()=>{g=!0,S!=="idle"&&(S="idle",c&&c(),re())},cancel:()=>{M!==null&&Y(M),re()},complete:()=>{S="finished"},sample:F=>(T=0,Y(F))};return $}function cj(t){let e;return()=>(e===void 0&&(e=t()),e)}const uj=cj(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),dj=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),So=10,hj=2e4,fj=(t,e)=>e.type==="spring"||t==="backgroundColor"||!cb(e.ease);function pj(t,e,{onUpdate:n,onComplete:i,...r}){if(!(uj()&&dj.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let a=!1,o,l,c=!1;const d=()=>{l=new Promise(b=>{o=b})};d();let{keyframes:h,duration:f=300,ease:p,times:g}=r;if(fj(e,r)){const b=Pc({...r,repeat:0,delay:0});let w={done:!1,value:h[0]};const _=[];let C=0;for(;!w.done&&C<hj;)w=b.sample(C),_.push(w.value),C+=So;g=void 0,h=_,f=C-So,p="linear"}const m=j8(t.owner.current,e,h,{...r,duration:f,ease:p,times:g}),k=()=>{c=!1,m.cancel()},v=()=>{c=!0,oe.update(k),o(),d()};return m.onfinish=()=>{c||(t.set(S8(h,r)),i&&i(),v())},{then(b,w){return l.then(b,w)},attachTimeline(b){return m.timeline=b,m.onfinish=null,we},get time(){return jn(m.currentTime||0)},set time(b){m.currentTime=Ui(b)},get speed(){return m.playbackRate},set speed(b){m.playbackRate=b},get duration(){return jn(f)},play:()=>{a||(m.play(),En(k))},pause:()=>m.pause(),stop:()=>{if(a=!0,m.playState==="idle")return;const{currentTime:b}=m;if(b){const w=Pc({...r,autoplay:!1});t.setWithVelocity(w.sample(b-So).value,w.sample(b).value,So)}v()},complete:()=>{c||m.finish()},cancel:v}}function gj({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:s=>(s(),Promise.resolve()),cancel:we,complete:we});return e?Pc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const mj={type:"spring",stiffness:500,damping:25,restSpeed:10},yj=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),vj={type:"keyframes",duration:.8},xj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bj=(t,{keyframes:e})=>e.length>2?vj:Zi.has(t)?t.startsWith("scale")?yj(e[1]):mj:xj,rf=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ui.test(e)||e==="0")&&!e.startsWith("url(")),kj=new Set(["brightness","contrast","saturate","opacity"]);function wj(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(gu)||[];if(!i)return t;const r=n.replace(i,"");let s=kj.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const _j=/([a-z-]*)\(.*?\)/g,sf={...ui,getAnimatableNone:t=>{const e=t.match(_j);return e?e.map(wj).join(" "):t}},jj={...Kx,color:qe,backgroundColor:qe,outlineColor:qe,fill:qe,stroke:qe,borderColor:qe,borderTopColor:qe,borderRightColor:qe,borderBottomColor:qe,borderLeftColor:qe,filter:sf,WebkitFilter:sf},ng=t=>jj[t];function Lb(t,e){let n=ng(t);return n!==sf&&(n=ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Rb=t=>/^0[^.\s]+$/.test(t);function Sj(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Rb(t)}function Pj(t,e,n,i){const r=rf(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=i.from!==void 0?i.from:t.get();let o;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?a:s[c-1]),Sj(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(o=s[c]);if(r&&l.length&&o)for(let c=0;c<l.length;c++){const d=l[c];s[d]=Lb(e,o)}return s}function Cj({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...d}){return!!Object.keys(d).length}function ig(t,e){return t[e]||t.default||t}const Tj={skipAnimations:!1},rg=(t,e,n,i={})=>r=>{const s=ig(i,t)||{},a=s.delay||i.delay||0;let{elapsed:o=0}=i;o=o-Ui(a);const l=Pj(e,t,n,s),c=l[0],d=l[l.length-1],h=rf(t,c),f=rf(t,d);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-o,onUpdate:g=>{e.set(g),s.onUpdate&&s.onUpdate(g)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(Cj(s)||(p={...p,...bj(t,p)}),p.duration&&(p.duration=Ui(p.duration)),p.repeatDelay&&(p.repeatDelay=Ui(p.repeatDelay)),!h||!f||_8.current||s.type===!1||Tj.skipAnimations)return gj(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const g=pj(e,t,p);if(g)return g}return Pc(p)};function Cc(t){return!!(ht(t)&&t.add)}const Db=t=>/^\-?\d*\.?\d+$/.test(t);function sg(t,e){t.indexOf(e)===-1&&t.push(e)}function ag(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class og{constructor(){this.subscriptions=[]}add(e){return sg(this.subscriptions,e),()=>ag(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ej=t=>!isNaN(parseFloat(t));class Mj{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:a}=He;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,oe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>oe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Ej(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new og);const i=this.events[e].add(n);return e==="change"?()=>{i(),oe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Mb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Kr(t,e){return new Mj(t,e)}const zb=t=>e=>e.test(t),Aj={test:t=>t==="auto",parse:t=>t},Ib=[er,B,cn,Dn,F6,$6,Aj],ys=t=>Ib.find(zb(t)),Oj=[...Ib,qe,ui],Lj=t=>Oj.find(zb(t));function Rj(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Kr(n))}function Dj(t,e){const n=yu(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const a in s){const o=Z6(s[a]);Rj(t,a,o)}}function zj(t,e,n){var i,r;const s=Object.keys(e).filter(o=>!t.hasValue(o)),a=s.length;if(a)for(let o=0;o<a;o++){const l=s[o],c=e[l];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),d!=null&&(typeof d=="string"&&(Db(d)||Rb(d))?d=parseFloat(d):!Lj(d)&&ui.test(c)&&(d=Lb(l,c)),t.addValue(l,Kr(d,{owner:t})),n[l]===void 0&&(n[l]=d),d!==null&&t.setBaseTarget(l,d))}}function Ij(t,e){return e?(e[t]||e.default||e).from:void 0}function $j(t,e,n){const i={};for(const r in t){const s=Ij(r,e);if(s!==void 0)i[r]=s;else{const a=n.getValue(r);a&&(i[r]=a.get())}}return i}function Fj({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Bj(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function $b(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:a,...o}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const h in o){const f=t.getValue(h),p=o[h];if(!f||p===void 0||d&&Fj(d,h))continue;const g={delay:n,elapsed:0,...ig(s||{},h)};if(window.HandoffAppearAnimations){const v=t.getProps()[Fx];if(v){const y=window.HandoffAppearAnimations(v,h,f,oe);y!==null&&(g.elapsed=y,g.isHandoff=!0)}}let m=!g.isHandoff&&!Bj(f,p);if(g.type==="spring"&&(f.getVelocity()||g.velocity)&&(m=!1),f.animation&&(m=!1),m)continue;f.start(rg(h,f,p,t.shouldReduceMotion&&Zi.has(h)?{type:!1}:g));const k=f.animation;Cc(l)&&(l.add(h),k.then(()=>l.remove(h))),c.push(k)}return a&&Promise.all(c).then(()=>{a&&Dj(t,a)}),c}function af(t,e,n={}){const i=yu(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all($b(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:h}=r;return Nj(t,e,c+l,d,h,n)}:()=>Promise.resolve(),{when:o}=r;if(o){const[l,c]=o==="beforeChildren"?[s,a]:[a,s];return l().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function Nj(t,e,n=0,i=0,r=1,s){const a=[],o=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(t.variantChildren).sort(Vj).forEach((c,d)=>{c.notify("AnimationStart",e),a.push(af(c,e,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function Vj(t,e){return t.sortNodePosition(e)}function Uj(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>af(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=af(t,e,n);else{const r=typeof e=="function"?yu(t,e,n.custom):e;i=Promise.all($b(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const Hj=[...Up].reverse(),Wj=Up.length;function Kj(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Uj(t,n,i)))}function Gj(t){let e=Kj(t);const n=qj();let i=!0;const r=(l,c)=>{const d=yu(t,c);if(d){const{transition:h,transitionEnd:f,...p}=d;l={...l,...p,...f}}return l};function s(l){e=l(t)}function a(l,c){const d=t.getProps(),h=t.getVariantContext(!0)||{},f=[],p=new Set;let g={},m=1/0;for(let v=0;v<Wj;v++){const y=Hj[v],b=n[y],w=d[y]!==void 0?d[y]:h[y],_=Pa(w),C=y===c?b.isActive:null;C===!1&&(m=v);let S=w===h[y]&&w!==d[y]&&_;if(S&&i&&t.manuallyAnimateOnMount&&(S=!1),b.protectedKeys={...g},!b.isActive&&C===null||!w&&!b.prevProp||fu(w)||typeof w=="boolean")continue;let T=Yj(b.prevProp,w)||y===c&&b.isActive&&!S&&_||v>m&&_,M=!1;const L=Array.isArray(w)?w:[w];let D=L.reduce(r,{});C===!1&&(D={});const{prevResolvedValues:H={}}=b,J={...H,...D},Y=N=>{T=!0,p.has(N)&&(M=!0,p.delete(N)),b.needsAnimating[N]=!0};for(const N in J){const re=D[N],O=H[N];if(g.hasOwnProperty(N))continue;let I=!1;wc(re)&&wc(O)?I=!ob(re,O):I=re!==O,I?re!==void 0?Y(N):p.add(N):re!==void 0&&p.has(N)?Y(N):b.protectedKeys[N]=!0}b.prevProp=w,b.prevResolvedValues=D,b.isActive&&(g={...g,...D}),i&&t.blockInitialAnimation&&(T=!1),T&&(!S||M)&&f.push(...L.map(N=>({animation:N,options:{type:y,...l}})))}if(p.size){const v={};p.forEach(y=>{const b=t.getBaseTarget(y);b!==void 0&&(v[y]=b)}),f.push({animation:v})}let k=!!f.length;return i&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(k=!1),i=!1,k?e(f):Promise.resolve()}function o(l,c,d){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const f=a(d,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n}}function Yj(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ob(e,t):!1}function ki(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qj(){return{animate:ki(!0),whileInView:ki(),whileHover:ki(),whileTap:ki(),whileDrag:ki(),whileFocus:ki(),exit:ki()}}class Xj extends vi{constructor(e){super(e),e.animationState||(e.animationState=Gj(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),fu(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Jj=0;class Qj extends vi{constructor(){super(...arguments),this.id=Jj++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Zj={animation:{Feature:Xj},exit:{Feature:Qj}},x0=(t,e)=>Math.abs(t-e);function eS(t,e){const n=x0(t.x,e.x),i=x0(t.y,e.y);return Math.sqrt(n**2+i**2)}class Fb{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=fd(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=eS(h.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=h,{timestamp:m}=He;this.history.push({...g,timestamp:m});const{onStart:k,onMove:v}=this.handlers;f||(k&&k(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=hd(f,this.transformPagePoint),oe.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=fd(h.type==="pointercancel"?this.lastMoveEventInfo:hd(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,k),g&&g(h,k)},!nb(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const a=mu(e),o=hd(a,this.transformPagePoint),{point:l}=o,{timestamp:c}=He;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(e,fd(o,this.history)),this.removeListeners=si(_n(this.contextWindow,"pointermove",this.handlePointerMove),_n(this.contextWindow,"pointerup",this.handlePointerUp),_n(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),En(this.updatePoint)}}function hd(t,e){return e?{point:e(t.point)}:t}function b0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function fd({point:t},e){return{point:t,delta:b0(t,Bb(e)),offset:b0(t,tS(e)),velocity:nS(e,.1)}}function tS(t){return t[0]}function Bb(t){return t[t.length-1]}function nS(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Bb(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ui(e)));)n--;if(!i)return{x:0,y:0};const s=jn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function bt(t){return t.max-t.min}function of(t,e=0,n=.01){return Math.abs(t-e)<=n}function k0(t,e,n,i=.5){t.origin=i,t.originPoint=pe(e.min,e.max,t.origin),t.scale=bt(n)/bt(e),(of(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=pe(n.min,n.max,t.origin)-t.originPoint,(of(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Ys(t,e,n,i){k0(t.x,e.x,n.x,i?i.originX:void 0),k0(t.y,e.y,n.y,i?i.originY:void 0)}function w0(t,e,n){t.min=n.min+e.min,t.max=t.min+bt(e)}function iS(t,e,n){w0(t.x,e.x,n.x),w0(t.y,e.y,n.y)}function _0(t,e,n){t.min=e.min-n.min,t.max=t.min+bt(e)}function qs(t,e,n){_0(t.x,e.x,n.x),_0(t.y,e.y,n.y)}function rS(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?pe(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?pe(n,t,i.max):Math.min(t,n)),t}function j0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function sS(t,{top:e,left:n,bottom:i,right:r}){return{x:j0(t.x,n,r),y:j0(t.y,e,i)}}function S0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function aS(t,e){return{x:S0(t.x,e.x),y:S0(t.y,e.y)}}function oS(t,e){let n=.5;const i=bt(t),r=bt(e);return r>i?n=Ta(e.min,e.max-i,t.min):i>r&&(n=Ta(t.min,t.max-r,e.min)),ci(0,1,n)}function lS(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lf=.35;function cS(t=lf){return t===!1?t=0:t===!0&&(t=lf),{x:P0(t,"left","right"),y:P0(t,"top","bottom")}}function P0(t,e,n){return{min:C0(t,e),max:C0(t,n)}}function C0(t,e){return typeof t=="number"?t:t[e]||0}const T0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Pr=()=>({x:T0(),y:T0()}),E0=()=>({min:0,max:0}),je=()=>({x:E0(),y:E0()});function Ct(t){return[t("x"),t("y")]}function Nb({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function uS({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function dS(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function pd(t){return t===void 0||t===1}function cf({scale:t,scaleX:e,scaleY:n}){return!pd(t)||!pd(e)||!pd(n)}function Ti(t){return cf(t)||Vb(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Vb(t){return M0(t.x)||M0(t.y)}function M0(t){return t&&t!=="0%"}function Tc(t,e,n){const i=t-n,r=e*i;return n+r}function A0(t,e,n,i,r){return r!==void 0&&(t=Tc(t,r,i)),Tc(t,n,i)+e}function uf(t,e=0,n=1,i,r){t.min=A0(t.min,e,n,i,r),t.max=A0(t.max,e,n,i,r)}function Ub(t,{x:e,y:n}){uf(t.x,e.translate,e.scale,e.originPoint),uf(t.y,n.translate,n.scale,n.originPoint)}function hS(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=n[o],a=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Cr(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,Ub(t,a)),i&&Ti(s.latestValues)&&Cr(t,s.latestValues))}e.x=O0(e.x),e.y=O0(e.y)}function O0(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Nn(t,e){t.min=t.min+e,t.max=t.max+e}function L0(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,a=pe(t.min,t.max,s);uf(t,e[n],e[i],a,e.scale)}const fS=["x","scaleX","originX"],pS=["y","scaleY","originY"];function Cr(t,e){L0(t.x,e,fS),L0(t.y,e,pS)}function Hb(t,e){return Nb(dS(t.getBoundingClientRect(),e))}function gS(t,e,n){const i=Hb(t,n),{scroll:r}=e;return r&&(Nn(i.x,r.offset.x),Nn(i.y,r.offset.y)),i}const Wb=({current:t})=>t?t.ownerDocument.defaultView:null,mS=new WeakMap;class yS{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(mu(d,"page").point)},s=(d,h)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=rb(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ct(k=>{let v=this.getAxisMotionValue(k).get()||0;if(cn.test(v)){const{projection:y}=this.visualElement;if(y&&y.layout){const b=y.layout.layoutBox[k];b&&(v=bt(b)*(parseFloat(v)/100))}}this.originPoint[k]=v}),g&&oe.update(()=>g(d,h),!1,!0);const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(d,h)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:m}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:k}=h;if(p&&this.currentDirection===null){this.currentDirection=vS(k),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",h.point,k),this.updateAxis("y",h.point,k),this.visualElement.render(),m&&m(d,h)},o=(d,h)=>this.stop(d,h),l=()=>Ct(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Fb(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Wb(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&oe.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Po(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=rS(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&jr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=sS(r.layoutBox,n):this.constraints=!1,this.elastic=cS(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ct(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=lS(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!jr(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=gS(i,r.root,this.visualElement.getTransformPagePoint());let a=aS(r.layout.layoutBox,s);if(n){const o=n(uS(a));this.hasMutatedConstraints=!!o,o&&(a=Nb(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Ct(d=>{if(!Po(d,n,this.currentDirection))return;let h=l&&l[d]||{};a&&(h={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[d]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(d,g)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(rg(e,i,0,n))}stopAnimation(){Ct(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ct(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ct(n=>{const{drag:i}=this.getProps();if(!Po(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n];s.set(e[n]-pe(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!jr(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ct(a=>{const o=this.getAxisMotionValue(a);if(o){const l=o.get();r[a]=oS({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ct(a=>{if(!Po(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(pe(l,c,r[a]))})}addListeners(){if(!this.visualElement.current)return;mS.set(this.visualElement,this);const e=this.visualElement.current,n=_n(e,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();jr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const a=kn(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ct(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=lf,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Po(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function vS(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class xS extends vi{constructor(e){super(e),this.removeGroupControls=we,this.removeListeners=we,this.controls=new yS(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const R0=t=>(e,n)=>{t&&oe.update(()=>t(e,n))};class bS extends vi{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(e){this.session=new Fb(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wb(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:R0(e),onStart:R0(n),onMove:i,onEnd:(s,a)=>{delete this.session,r&&oe.update(()=>r(s,a))}}}mount(){this.removePointerDownListener=_n(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function kS(){const t=j.useContext(du);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=j.useId();return j.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Fl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function D0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const vs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(B.test(t))t=parseFloat(t);else return t;const n=D0(t,e.target.x),i=D0(t,e.target.y);return`${n}% ${i}%`}},wS={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ui.parse(t);if(r.length>5)return i;const s=ui.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=pe(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}};class _S extends Le.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;A6(jS),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Fl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||oe.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Kb(t){const[e,n]=kS(),i=j.useContext(Wp);return Le.createElement(_S,{...t,layoutGroup:i,switchLayoutGroup:j.useContext(Nx),isPresent:e,safeToRemove:n})}const jS={borderRadius:{...vs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vs,borderTopRightRadius:vs,borderBottomLeftRadius:vs,borderBottomRightRadius:vs,boxShadow:wS},Gb=["TopLeft","TopRight","BottomLeft","BottomRight"],SS=Gb.length,z0=t=>typeof t=="string"?parseFloat(t):t,I0=t=>typeof t=="number"||B.test(t);function PS(t,e,n,i,r,s){r?(t.opacity=pe(0,n.opacity!==void 0?n.opacity:1,CS(i)),t.opacityExit=pe(e.opacity!==void 0?e.opacity:1,0,TS(i))):s&&(t.opacity=pe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<SS;a++){const o=`border${Gb[a]}Radius`;let l=$0(e,o),c=$0(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||I0(l)===I0(c)?(t[o]=Math.max(pe(z0(l),z0(c),i),0),(cn.test(c)||cn.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=pe(e.rotate||0,n.rotate||0,i))}function $0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const CS=Yb(0,.5,mb),TS=Yb(.5,.95,we);function Yb(t,e,n){return i=>i<t?0:i>e?1:n(Ta(t,e,i))}function F0(t,e){t.min=e.min,t.max=e.max}function jt(t,e){F0(t.x,e.x),F0(t.y,e.y)}function B0(t,e,n,i,r){return t-=e,t=Tc(t,1/n,i),r!==void 0&&(t=Tc(t,1/r,i)),t}function ES(t,e=0,n=1,i=.5,r,s=t,a=t){if(cn.test(e)&&(e=parseFloat(e),e=pe(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=pe(s.min,s.max,i);t===s&&(o-=e),t.min=B0(t.min,e,n,o,r),t.max=B0(t.max,e,n,o,r)}function N0(t,e,[n,i,r],s,a){ES(t,e[n],e[i],e[r],e.scale,s,a)}const MS=["x","scaleX","originX"],AS=["y","scaleY","originY"];function V0(t,e,n,i){N0(t.x,e,MS,n?n.x:void 0,i?i.x:void 0),N0(t.y,e,AS,n?n.y:void 0,i?i.y:void 0)}function U0(t){return t.translate===0&&t.scale===1}function qb(t){return U0(t.x)&&U0(t.y)}function OS(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Xb(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function H0(t){return bt(t.x)/bt(t.y)}class LS{constructor(){this.members=[]}add(e){sg(this.members,e),e.scheduleRender()}remove(e){if(ag(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function W0(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:d}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),d&&(i+=`rotateY(${d}deg) `)}const a=t.x.scale*e.x,o=t.y.scale*e.y;return(a!==1||o!==1)&&(i+=`scale(${a}, ${o})`),i||"none"}const RS=(t,e)=>t.depth-e.depth;class DS{constructor(){this.children=[],this.isDirty=!1}add(e){sg(this.children,e),this.isDirty=!0}remove(e){ag(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(RS),this.isDirty=!1,this.children.forEach(e)}}function zS(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(En(i),t(s-e))};return oe.read(i,!0),()=>En(i)}function IS(t){window.MotionDebug&&window.MotionDebug.record(t)}function $S(t){return t instanceof SVGElement&&t.tagName!=="svg"}function FS(t,e,n){const i=ht(t)?t:Kr(t);return i.start(rg("",i,e,n)),i.animation}const K0=["","X","Y","Z"],BS={visibility:"hidden"},G0=1e3;let NS=0;const Ei={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Jb({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=NS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ei.totalNodes=Ei.resolvedTargetDeltas=Ei.recalculatedProjection=0,this.nodes.forEach(HS),this.nodes.forEach(qS),this.nodes.forEach(XS),this.nodes.forEach(WS),IS(Ei)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new DS)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new og),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$S(a),this.instance=a;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),t){let h;const f=()=>this.root.updateBlockedByResize=!1;t(a,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=zS(f,250),Fl.hasAnimatedSinceResize&&(Fl.hasAnimatedSinceResize=!1,this.nodes.forEach(q0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||d.getDefaultTransition()||tP,{onLayoutAnimationStart:k,onLayoutAnimationComplete:v}=d.getProps(),y=!this.targetLayout||!Xb(this.targetLayout,g)||p,b=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||f&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,b);const w={...ig(m,"layout"),onPlay:k,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||q0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,En(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JS),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Y0);return}this.isUpdating||this.nodes.forEach(GS),this.isUpdating=!1,this.nodes.forEach(YS),this.nodes.forEach(VS),this.nodes.forEach(US),this.clearAllSnapshots();const o=performance.now();He.delta=ci(0,1e3/60,o-He.timestamp),He.timestamp=o,He.isProcessing=!0,rd.update.process(He),rd.preRender.process(He),rd.render.process(He),He.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(KS),this.sharedNodes.forEach(QS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform,o=this.projectionDelta&&!qb(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;a&&(o||Ti(this.latestValues)||d)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),nP(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return je();const o=a.measureViewportBox(),{scroll:l}=this.root;return l&&(Nn(o.x,l.offset.x),Nn(o.y,l.offset.y)),o}removeElementScroll(a){const o=je();jt(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:d,options:h}=c;if(c!==this.root&&d&&h.layoutScroll){if(d.isRoot){jt(o,a);const{scroll:f}=this.root;f&&(Nn(o.x,-f.offset.x),Nn(o.y,-f.offset.y))}Nn(o.x,d.offset.x),Nn(o.y,d.offset.y)}}return o}applyTransform(a,o=!1){const l=je();jt(l,a);for(let c=0;c<this.path.length;c++){const d=this.path[c];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Cr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ti(d.latestValues)&&Cr(l,d.latestValues)}return Ti(this.latestValues)&&Cr(l,this.latestValues),l}removeTransform(a){const o=je();jt(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ti(c.latestValues))continue;cf(c.latestValues)&&c.updateSnapshot();const d=je(),h=c.measurePageBox();jt(d,h),V0(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Ti(this.latestValues)&&V0(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==He.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=He.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),qs(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):jt(this.target,this.layout.layoutBox),Ub(this.target,this.targetDelta)):jt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),qs(this.relativeTargetOrigin,this.target,p.target),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ei.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cf(this.parent.latestValues)||Vb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===He.timestamp&&(c=!1),c)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;jt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;hS(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox);const{target:g}=o;if(!g){this.projectionTransform&&(this.projectionDelta=Pr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Pr(),this.projectionDeltaWithTransform=Pr());const m=this.projectionTransform;Ys(this.projectionDelta,this.layoutCorrected,g,this.latestValues),this.projectionTransform=W0(this.projectionDelta,this.treeScale),(this.projectionTransform!==m||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Ei.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},h=Pr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=je(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,m=p!==g,k=this.getStack(),v=!k||k.members.length<=1,y=!!(m&&!v&&this.options.crossfade===!0&&!this.path.some(eP));this.animationProgress=0;let b;this.mixTargetDelta=w=>{const _=w/1e3;X0(h.x,a.x,_),X0(h.y,a.y,_),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qs(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZS(this.relativeTarget,this.relativeTargetOrigin,f,_),b&&OS(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=je()),jt(b,this.relativeTarget)),m&&(this.animationValues=d,PS(d,c,this.latestValues,_,y,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(En(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=oe.update(()=>{Fl.hasAnimatedSinceResize=!0,this.currentAnimation=FS(0,G0,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(G0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:d}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&Qb(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||je();const h=bt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const f=bt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}jt(o,l),Cr(o,d),Ys(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new LS),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(o=!0),!o)return;const c={};for(let d=0;d<K0.length;d++){const h="rotate"+K0[d];l[h]&&(c[h]=l[h],a.setStaticValue(h,0))}a.render();for(const d in c)a.setStaticValue(d,c[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return BS;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$l(a==null?void 0:a.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=$l(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ti(this.latestValues)&&(m.transform=d?d({},""):"none",this.hasProjected=!1),m}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=W0(this.projectionDeltaWithTransform,this.treeScale,f),d&&(c.transform=d(f,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(o=f.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const m in bc){if(f[m]===void 0)continue;const{correct:k,applyTo:v}=bc[m],y=c.transform==="none"?f[m]:k(f[m],h);if(v){const b=v.length;for(let w=0;w<b;w++)c[v[w]]=y}else c[m]=y}return this.options.layoutId&&(c.pointerEvents=h===this?$l(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(Y0),this.root.sharedNodes.clear()}}}function VS(t){t.updateLayout()}function US(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=n.source!==t.layout.source;s==="size"?Ct(h=>{const f=a?n.measuredBox[h]:n.layoutBox[h],p=bt(f);f.min=i[h].min,f.max=f.min+p}):Qb(s,n.layoutBox,i)&&Ct(h=>{const f=a?n.measuredBox[h]:n.layoutBox[h],p=bt(i[h]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+p)});const o=Pr();Ys(o,i,n.layoutBox);const l=Pr();a?Ys(l,t.applyTransform(r,!0),n.measuredBox):Ys(l,i,n.layoutBox);const c=!qb(o);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=je();qs(g,n.layoutBox,f.layoutBox);const m=je();qs(m,i,p.layoutBox),Xb(g,m)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function HS(t){Ei.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function WS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function KS(t){t.clearSnapshot()}function Y0(t){t.clearMeasurements()}function GS(t){t.isLayoutDirty=!1}function YS(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function q0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function qS(t){t.resolveTargetDelta()}function XS(t){t.calcProjection()}function JS(t){t.resetRotation()}function QS(t){t.removeLeadSnapshot()}function X0(t,e,n){t.translate=pe(e.translate,0,n),t.scale=pe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function J0(t,e,n,i){t.min=pe(e.min,n.min,i),t.max=pe(e.max,n.max,i)}function ZS(t,e,n,i){J0(t.x,e.x,n.x,i),J0(t.y,e.y,n.y,i)}function eP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const tP={duration:.45,ease:[.4,0,.1,1]},Q0=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Z0=Q0("applewebkit/")&&!Q0("chrome/")?Math.round:we;function e1(t){t.min=Z0(t.min),t.max=Z0(t.max)}function nP(t){e1(t.x),e1(t.y)}function Qb(t,e,n){return t==="position"||t==="preserve-aspect"&&!of(H0(e),H0(n),.2)}const iP=Jb({attachResizeListener:(t,e)=>kn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gd={current:void 0},Zb=Jb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!gd.current){const t=new iP({});t.mount(window),t.setOptions({layoutScroll:!0}),gd.current=t}return gd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),rP={pan:{Feature:bS},drag:{Feature:xS,ProjectionNode:Zb,MeasureLayout:Kb}},sP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function aP(t){const e=sP.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function df(t,e,n=1){const[i,r]=aP(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return Db(a)?parseFloat(a):a}else return Zh(r)?df(r,e,n+1):r}function oP(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Zh(s))return;const a=df(s,i);a&&r.set(a)});for(const r in e){const s=e[r];if(!Zh(s))continue;const a=df(s,i);a&&(e[r]=a,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const lP=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),e5=t=>lP.has(t),cP=t=>Object.keys(t).some(e5),t1=t=>t===er||t===B,n1=(t,e)=>parseFloat(t.split(", ")[e]),i1=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return n1(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?n1(s[1],t):0}},uP=new Set(["x","y","z"]),dP=Ya.filter(t=>!uP.has(t));function hP(t){const e=[];return dP.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Gr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:i1(4,13),y:i1(5,14)};Gr.translateX=Gr.x;Gr.translateY=Gr.y;const fP=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:a}=s,o={};a==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{o[c]=Gr[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const d=e.getValue(c);d&&d.jump(o[c]),t[c]=Gr[c](l,s)}),t},pP=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(e5);let s=[],a=!1;const o=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let d=n[l],h=ys(d);const f=e[l];let p;if(wc(f)){const g=f.length,m=f[0]===null?1:0;d=f[m],h=ys(d);for(let k=m;k<g&&f[k]!==null;k++)p?_c(ys(f[k])===p):p=ys(f[k])}else p=ys(f);if(h!==p)if(t1(h)&&t1(p)){const g=c.get();typeof g=="string"&&c.set(parseFloat(g)),typeof f=="string"?e[l]=parseFloat(f):Array.isArray(f)&&p===B&&(e[l]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(d===0||f===0)?d===0?c.set(p.transform(d)):e[l]=h.transform(f):(a||(s=hP(t),a=!0),o.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(f))}),o.length){const l=o.indexOf("height")>=0?window.pageYOffset:null,c=fP(e,t,o);return s.length&&s.forEach(([d,h])=>{t.getValue(d).set(h)}),t.render(),hu&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function gP(t,e,n,i){return cP(e)?pP(t,e,n,i):{target:e,transitionEnd:i}}const mP=(t,e,n,i)=>{const r=oP(t,e,i);return e=r.target,i=r.transitionEnd,gP(t,e,n,i)},hf={current:null},t5={current:!1};function yP(){if(t5.current=!0,!!hu)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>hf.current=t.matches;t.addListener(e),e()}else hf.current=!1}function vP(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],a=n[r];if(ht(s))t.addValue(r,s),Cc(i)&&i.add(r);else if(ht(a))t.addValue(r,Kr(s,{owner:t})),Cc(i)&&i.remove(r);else if(a!==s)if(t.hasValue(r)){const o=t.getValue(r);!o.hasAnimated&&o.set(s)}else{const o=t.getStaticValue(r);t.addValue(r,Kr(o!==void 0?o:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const r1=new WeakMap,n5=Object.keys(Ca),xP=n5.length,s1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],bP=Hp.length;class kP{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>oe.render(this.render,!1,!0);const{latestValues:o,renderState:l}=s;this.latestValues=o,this.baseTarget={...o},this.initialValues=n.initial?{...o}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=pu(n),this.isVariantNode=Bx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const h in d){const f=d[h];o[h]!==void 0&&ht(f)&&(f.set(o[h],!1),Cc(c)&&c.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,r1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),t5.current||yP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:hf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){r1.delete(this.current),this.projection&&this.projection.unmount(),En(this.notifyUpdate),En(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Zi.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&oe.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let a,o;for(let l=0;l<xP;l++){const c=n5[l],{isEnabled:d,Feature:h,ProjectionNode:f,MeasureLayout:p}=Ca[c];f&&(a=f),d(n)&&(!this.features[c]&&h&&(this.features[c]=new h(this)),p&&(o=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||h&&jr(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:p})}return o}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<s1.length;i++){const r=s1[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=vP(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<bP;i++){const r=Hp[i],s=this.props[r];(Pa(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Kr(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Qp(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ht(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new og),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class i5 extends kP{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let a=$j(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),a&&(a=r(a))),s){zj(this,i,a);const o=mP(this,i,a,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function wP(t){return window.getComputedStyle(t)}class _P extends i5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Zi.has(n)){const i=ng(n);return i&&i.default||0}else{const i=wP(e),r=(Hx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Hb(e,n)}build(e,n,i,r){Gp(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Jp(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ht(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){Xx(e,n,i,r)}}class jP extends i5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Zi.has(n)){const i=ng(n);return i&&i.default||0}return n=Jx.has(n)?n:Vp(n),e.getAttribute(n)}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(e,n){return Zx(e,n)}build(e,n,i,r){qp(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Qx(e,n,i,r)}mount(e){this.isSVGTag=Xp(e.tagName),super.mount(e)}}const SP=(t,e)=>Kp(t)?new jP(e,{enableHardwareAcceleration:!1}):new _P(e,{enableHardwareAcceleration:!0}),PP={layout:{ProjectionNode:Zb,MeasureLayout:Kb}},CP={...Zj,...b8,...rP,...PP},E=E6((t,e)=>o8(t,e,CP,SP));function r5(){const t=j.useRef(!1);return Np(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function TP(){const t=r5(),[e,n]=j.useState(0),i=j.useCallback(()=>{t.current&&n(e+1)},[e]);return[j.useCallback(()=>oe.postRender(i),[i]),e]}class EP extends j.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function MP({children:t,isPresent:e}){const n=j.useId(),i=j.useRef(null),r=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:s,height:a,top:o,left:l}=r.current;if(e||!i.current||!s||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),j.createElement(EP,{isPresent:e,childRef:i,sizeRef:r},j.cloneElement(t,{ref:i}))}const md=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a})=>{const o=eb(AP),l=j.useId(),c=j.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:d=>{o.set(d,!0);for(const h of o.values())if(!h)return;i&&i()},register:d=>(o.set(d,!1),()=>o.delete(d))}),s?void 0:[n]);return j.useMemo(()=>{o.forEach((d,h)=>o.set(h,!1))},[n]),j.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),a==="popLayout"&&(t=j.createElement(MP,{isPresent:n},t)),j.createElement(du.Provider,{value:c},t)};function AP(){return new Map}function OP(t){return j.useEffect(()=>()=>t(),[])}const Mi=t=>t.key||"";function LP(t,e){t.forEach(n=>{const i=Mi(n);e.set(i,n)})}function RP(t){const e=[];return j.Children.forEach(t,n=>{j.isValidElement(n)&&e.push(n)}),e}const DP=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const o=j.useContext(Wp).forceRender||TP()[0],l=r5(),c=RP(t);let d=c;const h=j.useRef(new Map).current,f=j.useRef(d),p=j.useRef(new Map).current,g=j.useRef(!0);if(Np(()=>{g.current=!1,LP(c,p),f.current=d}),OP(()=>{g.current=!0,p.clear(),h.clear()}),g.current)return j.createElement(j.Fragment,null,d.map(y=>j.createElement(md,{key:Mi(y),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:a},y)));d=[...d];const m=f.current.map(Mi),k=c.map(Mi),v=m.length;for(let y=0;y<v;y++){const b=m[y];k.indexOf(b)===-1&&!h.has(b)&&h.set(b,void 0)}return a==="wait"&&h.size&&(d=[]),h.forEach((y,b)=>{if(k.indexOf(b)!==-1)return;const w=p.get(b);if(!w)return;const _=m.indexOf(b);let C=y;if(!C){const S=()=>{h.delete(b);const P=Array.from(p.keys()).filter(T=>!k.includes(T));if(P.forEach(T=>p.delete(T)),f.current=c.filter(T=>{const M=Mi(T);return M===b||P.includes(M)}),!h.size){if(l.current===!1)return;o(),i&&i()}};C=j.createElement(md,{key:Mi(w),isPresent:!1,onExitComplete:S,custom:e,presenceAffectsLayout:s,mode:a},w),h.set(b,C)}d.splice(_,0,C)}),d=d.map(y=>{const b=y.key;return h.has(b)?y:j.createElement(md,{key:Mi(y),isPresent:!0,presenceAffectsLayout:s,mode:a},y)}),j.createElement(j.Fragment,null,h.size?d:d.map(y=>j.cloneElement(y)))},zP="modulepreload",IP=function(t){return"/webGallery-19-11-24-/"+t},a1={},Yr=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=IP(l),l in a1)return;a1[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":zP,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},$P=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Yr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)};class lg extends Error{constructor(e,n="FunctionsError",i){super(e),this.name=n,this.context=i}}class FP extends lg{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class BP extends lg{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class NP extends lg{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var ff;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(ff||(ff={}));var VP=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};class UP{constructor(e,{headers:n={},customFetch:i,region:r=ff.Any}={}){this.url=e,this.headers=n,this.region=r,this.fetch=$P(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,n={}){var i;return VP(this,void 0,void 0,function*(){try{const{headers:r,method:s,body:a}=n;let o={},{region:l}=n;l||(l=this.region),l&&l!=="any"&&(o["x-region"]=l);let c;a&&(r&&!Object.prototype.hasOwnProperty.call(r,"Content-Type")||!r)&&(typeof Blob<"u"&&a instanceof Blob||a instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",c=a):typeof a=="string"?(o["Content-Type"]="text/plain",c=a):typeof FormData<"u"&&a instanceof FormData?c=a:(o["Content-Type"]="application/json",c=JSON.stringify(a)));const d=yield this.fetch(`${this.url}/${e}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),r),body:c}).catch(g=>{throw new FP(g)}),h=d.headers.get("x-relay-error");if(h&&h==="true")throw new BP(d);if(!d.ok)throw new NP(d);let f=((i=d.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),p;return f==="application/json"?p=yield d.json():f==="application/octet-stream"?p=yield d.blob():f==="text/event-stream"?p=d:f==="multipart/form-data"?p=yield d.formData():p=yield d.text(),{data:p,error:null}}catch(r){return{data:null,error:r}}})}}var rt={},cg={},vu={},Qa={},xu={},bu={},HP=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},qr=HP();const WP=qr.fetch,s5=qr.fetch.bind(qr),a5=qr.Headers,KP=qr.Request,GP=qr.Response,rs=Object.freeze(Object.defineProperty({__proto__:null,Headers:a5,Request:KP,Response:GP,default:s5,fetch:WP},Symbol.toStringTag,{value:"Module"})),YP=Uk(rs);var ku={};Object.defineProperty(ku,"__esModule",{value:!0});class qP extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}}ku.default=qP;var o5=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(bu,"__esModule",{value:!0});const XP=o5(YP),JP=o5(ku);let QP=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:typeof fetch>"u"?this.fetch=XP.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,n){return this.headers=Object.assign({},this.headers),this.headers[e]=n,this}then(e,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const i=this.fetch;let r=i(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var a,o,l;let c=null,d=null,h=null,f=s.status,p=s.statusText;if(s.ok){if(this.method!=="HEAD"){const v=await s.text();v===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?d=v:d=JSON.parse(v))}const m=(a=this.headers.Prefer)===null||a===void 0?void 0:a.match(/count=(exact|planned|estimated)/),k=(o=s.headers.get("content-range"))===null||o===void 0?void 0:o.split("/");m&&k&&k.length>1&&(h=parseInt(k[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(c={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,h=null,f=406,p="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const m=await s.text();try{c=JSON.parse(m),Array.isArray(c)&&s.status===404&&(d=[],c=null,f=200,p="OK")}catch{s.status===404&&m===""?(f=204,p="No Content"):c={message:m}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,f=200,p="OK"),c&&this.shouldThrowOnError)throw new JP.default(c)}return{error:c,data:d,count:h,status:f,statusText:p}});return this.shouldThrowOnError||(r=r.catch(s=>{var a,o,l;return{error:{message:`${(a=s==null?void 0:s.name)!==null&&a!==void 0?a:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(o=s==null?void 0:s.stack)!==null&&o!==void 0?o:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),r.then(e,n)}};bu.default=QP;var ZP=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(xu,"__esModule",{value:!0});const e7=ZP(bu);let t7=class extends e7.default{select(e){let n=!1;const i=(e??"*").split("").map(r=>/\s/.test(r)&&!n?"":(r==='"'&&(n=!n),r)).join("");return this.url.searchParams.set("select",i),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:n=!0,nullsFirst:i,foreignTable:r,referencedTable:s=r}={}){const a=s?`${s}.order`:"order",o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:""}${e}.${n?"asc":"desc"}${i===void 0?"":i?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:n,referencedTable:i=n}={}){const r=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,n,{foreignTable:i,referencedTable:r=i}={}){const s=typeof r>"u"?"offset":`${r}.offset`,a=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(s,`${e}`),this.url.searchParams.set(a,`${n-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:n=!1,settings:i=!1,buffers:r=!1,wal:s=!1,format:a="text"}={}){var o;const l=[e?"analyze":null,n?"verbose":null,i?"settings":null,r?"buffers":null,s?"wal":null].filter(Boolean).join("|"),c=(o=this.headers.Accept)!==null&&o!==void 0?o:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${a}; for="${c}"; options=${l};`,a==="json"?this:this}rollback(){var e;return((e=this.headers.Prefer)!==null&&e!==void 0?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};xu.default=t7;var n7=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Qa,"__esModule",{value:!0});const i7=n7(xu);let r7=class extends i7.default{eq(e,n){return this.url.searchParams.append(e,`eq.${n}`),this}neq(e,n){return this.url.searchParams.append(e,`neq.${n}`),this}gt(e,n){return this.url.searchParams.append(e,`gt.${n}`),this}gte(e,n){return this.url.searchParams.append(e,`gte.${n}`),this}lt(e,n){return this.url.searchParams.append(e,`lt.${n}`),this}lte(e,n){return this.url.searchParams.append(e,`lte.${n}`),this}like(e,n){return this.url.searchParams.append(e,`like.${n}`),this}likeAllOf(e,n){return this.url.searchParams.append(e,`like(all).{${n.join(",")}}`),this}likeAnyOf(e,n){return this.url.searchParams.append(e,`like(any).{${n.join(",")}}`),this}ilike(e,n){return this.url.searchParams.append(e,`ilike.${n}`),this}ilikeAllOf(e,n){return this.url.searchParams.append(e,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(e,n){return this.url.searchParams.append(e,`ilike(any).{${n.join(",")}}`),this}is(e,n){return this.url.searchParams.append(e,`is.${n}`),this}in(e,n){const i=Array.from(new Set(n)).map(r=>typeof r=="string"&&new RegExp("[,()]").test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(e,`in.(${i})`),this}contains(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cs.{${n.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(n)}`),this}containedBy(e,n){return typeof n=="string"?this.url.searchParams.append(e,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(e,`cd.{${n.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(n)}`),this}rangeGt(e,n){return this.url.searchParams.append(e,`sr.${n}`),this}rangeGte(e,n){return this.url.searchParams.append(e,`nxl.${n}`),this}rangeLt(e,n){return this.url.searchParams.append(e,`sl.${n}`),this}rangeLte(e,n){return this.url.searchParams.append(e,`nxr.${n}`),this}rangeAdjacent(e,n){return this.url.searchParams.append(e,`adj.${n}`),this}overlaps(e,n){return typeof n=="string"?this.url.searchParams.append(e,`ov.${n}`):this.url.searchParams.append(e,`ov.{${n.join(",")}}`),this}textSearch(e,n,{config:i,type:r}={}){let s="";r==="plain"?s="pl":r==="phrase"?s="ph":r==="websearch"&&(s="w");const a=i===void 0?"":`(${i})`;return this.url.searchParams.append(e,`${s}fts${a}.${n}`),this}match(e){return Object.entries(e).forEach(([n,i])=>{this.url.searchParams.append(n,`eq.${i}`)}),this}not(e,n,i){return this.url.searchParams.append(e,`not.${n}.${i}`),this}or(e,{foreignTable:n,referencedTable:i=n}={}){const r=i?`${i}.or`:"or";return this.url.searchParams.append(r,`(${e})`),this}filter(e,n,i){return this.url.searchParams.append(e,`${n}.${i}`),this}};Qa.default=r7;var s7=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(vu,"__esModule",{value:!0});const xs=s7(Qa);let a7=class{constructor(e,{headers:n={},schema:i,fetch:r}){this.url=e,this.headers=n,this.schema=i,this.fetch=r}select(e,{head:n=!1,count:i}={}){const r=n?"HEAD":"GET";let s=!1;const a=(e??"*").split("").map(o=>/\s/.test(o)&&!s?"":(o==='"'&&(s=!s),o)).join("");return this.url.searchParams.set("select",a),i&&(this.headers.Prefer=`count=${i}`),new xs.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:n,defaultToNull:i=!0}={}){const r="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),i||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(e)){const a=e.reduce((o,l)=>o.concat(Object.keys(l)),[]);if(a.length>0){const o=[...new Set(a)].map(l=>`"${l}"`);this.url.searchParams.set("columns",o.join(","))}}return new xs.default({method:r,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:n,ignoreDuplicates:i=!1,count:r,defaultToNull:s=!0}={}){const a="POST",o=[`resolution=${i?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&o.push(this.headers.Prefer),r&&o.push(`count=${r}`),s||o.push("missing=default"),this.headers.Prefer=o.join(","),Array.isArray(e)){const l=e.reduce((c,d)=>c.concat(Object.keys(d)),[]);if(l.length>0){const c=[...new Set(l)].map(d=>`"${d}"`);this.url.searchParams.set("columns",c.join(","))}}return new xs.default({method:a,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}update(e,{count:n}={}){const i="PATCH",r=[];return this.headers.Prefer&&r.push(this.headers.Prefer),n&&r.push(`count=${n}`),this.headers.Prefer=r.join(","),new xs.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){const n="DELETE",i=[];return e&&i.push(`count=${e}`),this.headers.Prefer&&i.unshift(this.headers.Prefer),this.headers.Prefer=i.join(","),new xs.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};vu.default=a7;var wu={},_u={};Object.defineProperty(_u,"__esModule",{value:!0});_u.version=void 0;_u.version="0.0.0-automated";Object.defineProperty(wu,"__esModule",{value:!0});wu.DEFAULT_HEADERS=void 0;const o7=_u;wu.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${o7.version}`};var l5=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(cg,"__esModule",{value:!0});const l7=l5(vu),c7=l5(Qa),u7=wu;let d7=class c5{constructor(e,{headers:n={},schema:i,fetch:r}={}){this.url=e,this.headers=Object.assign(Object.assign({},u7.DEFAULT_HEADERS),n),this.schemaName=i,this.fetch=r}from(e){const n=new URL(`${this.url}/${e}`);return new l7.default(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(e){return new c5(this.url,{headers:this.headers,schema:e,fetch:this.fetch})}rpc(e,n={},{head:i=!1,get:r=!1,count:s}={}){let a;const o=new URL(`${this.url}/rpc/${e}`);let l;i||r?(a=i?"HEAD":"GET",Object.entries(n).filter(([d,h])=>h!==void 0).map(([d,h])=>[d,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([d,h])=>{o.searchParams.append(d,h)})):(a="POST",l=n);const c=Object.assign({},this.headers);return s&&(c.Prefer=`count=${s}`),new c7.default({method:a,url:o,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};cg.default=d7;var ss=Rt&&Rt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(rt,"__esModule",{value:!0});rt.PostgrestError=rt.PostgrestBuilder=rt.PostgrestTransformBuilder=rt.PostgrestFilterBuilder=rt.PostgrestQueryBuilder=rt.PostgrestClient=void 0;const u5=ss(cg);rt.PostgrestClient=u5.default;const d5=ss(vu);rt.PostgrestQueryBuilder=d5.default;const h5=ss(Qa);rt.PostgrestFilterBuilder=h5.default;const f5=ss(xu);rt.PostgrestTransformBuilder=f5.default;const p5=ss(bu);rt.PostgrestBuilder=p5.default;const g5=ss(ku);rt.PostgrestError=g5.default;var h7=rt.default={PostgrestClient:u5.default,PostgrestQueryBuilder:d5.default,PostgrestFilterBuilder:h5.default,PostgrestTransformBuilder:f5.default,PostgrestBuilder:p5.default,PostgrestError:g5.default};const{PostgrestClient:f7,PostgrestQueryBuilder:H$,PostgrestFilterBuilder:W$,PostgrestTransformBuilder:K$,PostgrestBuilder:G$}=h7,p7="2.10.7",g7={"X-Client-Info":`realtime-js/${p7}`},m7="1.0.0",m5=1e4,y7=1e3;var Dr;(function(t){t[t.connecting=0]="connecting",t[t.open=1]="open",t[t.closing=2]="closing",t[t.closed=3]="closed"})(Dr||(Dr={}));var pt;(function(t){t.closed="closed",t.errored="errored",t.joined="joined",t.joining="joining",t.leaving="leaving"})(pt||(pt={}));var Ut;(function(t){t.close="phx_close",t.error="phx_error",t.join="phx_join",t.reply="phx_reply",t.leave="phx_leave",t.access_token="access_token"})(Ut||(Ut={}));var pf;(function(t){t.websocket="websocket"})(pf||(pf={}));var Ri;(function(t){t.Connecting="connecting",t.Open="open",t.Closing="closing",t.Closed="closed"})(Ri||(Ri={}));class v7{constructor(){this.HEADER_LENGTH=1}decode(e,n){return e.constructor===ArrayBuffer?n(this._binaryDecode(e)):n(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const n=new DataView(e),i=new TextDecoder;return this._decodeBroadcast(e,n,i)}_decodeBroadcast(e,n,i){const r=n.getUint8(1),s=n.getUint8(2);let a=this.HEADER_LENGTH+2;const o=i.decode(e.slice(a,a+r));a=a+r;const l=i.decode(e.slice(a,a+s));a=a+s;const c=JSON.parse(i.decode(e.slice(a,e.byteLength)));return{ref:null,topic:o,event:l,payload:c}}}class y5{constructor(e,n){this.callback=e,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var se;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(se||(se={}));const o1=(t,e,n={})=>{var i;const r=(i=n.skipTypes)!==null&&i!==void 0?i:[];return Object.keys(e).reduce((s,a)=>(s[a]=x7(a,t,e,r),s),{})},x7=(t,e,n,i)=>{const r=e.find(o=>o.name===t),s=r==null?void 0:r.type,a=n[t];return s&&!i.includes(s)?v5(s,a):gf(a)},v5=(t,e)=>{if(t.charAt(0)==="_"){const n=t.slice(1,t.length);return _7(e,n)}switch(t){case se.bool:return b7(e);case se.float4:case se.float8:case se.int2:case se.int4:case se.int8:case se.numeric:case se.oid:return k7(e);case se.json:case se.jsonb:return w7(e);case se.timestamp:return j7(e);case se.abstime:case se.date:case se.daterange:case se.int4range:case se.int8range:case se.money:case se.reltime:case se.text:case se.time:case se.timestamptz:case se.timetz:case se.tsrange:case se.tstzrange:return gf(e);default:return gf(e)}},gf=t=>t,b7=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},k7=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},w7=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch(e){return console.log(`JSON parse error: ${e}`),t}return t},_7=(t,e)=>{if(typeof t!="string")return t;const n=t.length-1,i=t[n];if(t[0]==="{"&&i==="}"){let s;const a=t.slice(1,n);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>v5(e,o))}return t},j7=t=>typeof t=="string"?t.replace(" ","T"):t,x5=t=>{let e=t;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")};class yd{constructor(e,n,i={},r=m5){this.channel=e,this.event=n,this.payload=i,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,n){var i;return this._hasReceived(e)&&n((i=this.receivedResp)===null||i===void 0?void 0:i.response),this.recHooks.push({status:e,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:n}){this.recHooks.filter(i=>i.status===e).forEach(i=>i.callback(n))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var l1;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(l1||(l1={}));class Xs{constructor(e,n){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const i=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(i.state,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Xs.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=Xs.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel._on(i.diff,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Xs.syncDiff(this.state,r,s,a),o())}),this.onJoin((r,s,a)=>{this.channel._trigger("presence",{event:"join",key:r,currentPresences:s,newPresences:a})}),this.onLeave((r,s,a)=>{this.channel._trigger("presence",{event:"leave",key:r,currentPresences:s,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,n,i,r){const s=this.cloneDeep(e),a=this.transformState(n),o={},l={};return this.map(s,(c,d)=>{a[c]||(l[c]=d)}),this.map(a,(c,d)=>{const h=s[c];if(h){const f=d.map(k=>k.presence_ref),p=h.map(k=>k.presence_ref),g=d.filter(k=>p.indexOf(k.presence_ref)<0),m=h.filter(k=>f.indexOf(k.presence_ref)<0);g.length>0&&(o[c]=g),m.length>0&&(l[c]=m)}else o[c]=d}),this.syncDiff(s,{joins:o,leaves:l},i,r)}static syncDiff(e,n,i,r){const{joins:s,leaves:a}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return i||(i=()=>{}),r||(r=()=>{}),this.map(s,(o,l)=>{var c;const d=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),d.length>0){const h=e[o].map(p=>p.presence_ref),f=d.filter(p=>h.indexOf(p.presence_ref)<0);e[o].unshift(...f)}i(o,d,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const d=l.map(h=>h.presence_ref);c=c.filter(h=>d.indexOf(h.presence_ref)<0),e[o]=c,r(o,c,l),c.length===0&&delete e[o]}),e}static map(e,n){return Object.getOwnPropertyNames(e).map(i=>n(i,e[i]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((n,i)=>{const r=e[i];return"metas"in r?n[i]=r.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[i]=r,n},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var c1;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(c1||(c1={}));var u1;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(u1||(u1={}));var d1;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(d1||(d1={}));class ug{constructor(e,n={config:{}},i){this.topic=e,this.params=n,this.socket=i,this.bindings={},this.state=pt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new yd(this,Ut.join,this.params,this.timeout),this.rejoinTimer=new y5(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=pt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=pt.closed,this.socket._remove(this)}),this._onError(r=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,r),this.state=pt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=pt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Ut.reply,{},(r,s)=>{this._trigger(this._replyEventName(s),r)}),this.presence=new Xs(this),this.broadcastEndpointURL=x5(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,n=this.timeout){var i,r;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:a,private:o}}=this.params;this._onError(d=>e&&e("CHANNEL_ERROR",d)),this._onClose(()=>e&&e("CLOSED"));const l={},c={broadcast:s,presence:a,postgres_changes:(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(d=>d.filter))!==null&&r!==void 0?r:[],private:o};this.socket.accessToken&&(l.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:c},l)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:d})=>{var h;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),d===void 0){e&&e("SUBSCRIBED");return}else{const f=this.bindings.postgres_changes,p=(h=f==null?void 0:f.length)!==null&&h!==void 0?h:0,g=[];for(let m=0;m<p;m++){const k=f[m],{filter:{event:v,schema:y,table:b,filter:w}}=k,_=d&&d[m];if(_&&_.event===v&&_.schema===y&&_.table===b&&_.filter===w)g.push(Object.assign(Object.assign({},k),{id:_.id}));else{this.unsubscribe(),e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=g,e&&e("SUBSCRIBED");return}}).receive("error",d=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{e&&e("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(e,n={}){return await this.send({type:"presence",event:"track",payload:e},n.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,n,i){return this._on(e,n,i)}async send(e,n={}){var i,r;if(!this._canPush()&&e.type==="broadcast"){const{event:s,payload:a}=e,o={method:"POST",headers:{Authorization:this.socket.accessToken?`Bearer ${this.socket.accessToken}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const l=await this._fetchWithTimeout(this.broadcastEndpointURL,o,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=l.body)===null||r===void 0?void 0:r.cancel()),l.ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this._push(e.type,e,n.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=pt.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Ut.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(i=>{const r=new yd(this,Ut.leave,{},e);r.receive("ok",()=>{n(),i("ok")}).receive("timeout",()=>{n(),i("timed out")}).receive("error",()=>{i("error")}),r.send(),this._canPush()||r.trigger("ok",{})})}async _fetchWithTimeout(e,n,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},n),{signal:r.signal}));return clearTimeout(s),a}_push(e,n,i=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let r=new yd(this,e,n,i);return this._canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}_onMessage(e,n,i){return n}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,n,i){var r,s;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:d}=Ut;if(i&&[o,l,c,d].indexOf(a)>=0&&i!==this._joinRef())return;let f=this._onMessage(a,n,i);if(n&&!f)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(r=this.bindings.postgres_changes)===null||r===void 0||r.filter(p=>{var g,m,k;return((g=p.filter)===null||g===void 0?void 0:g.event)==="*"||((k=(m=p.filter)===null||m===void 0?void 0:m.event)===null||k===void 0?void 0:k.toLocaleLowerCase())===a}).map(p=>p.callback(f,i)):(s=this.bindings[a])===null||s===void 0||s.filter(p=>{var g,m,k,v,y,b;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in p){const w=p.id,_=(g=p.filter)===null||g===void 0?void 0:g.event;return w&&((m=n.ids)===null||m===void 0?void 0:m.includes(w))&&(_==="*"||(_==null?void 0:_.toLocaleLowerCase())===((k=n.data)===null||k===void 0?void 0:k.type.toLocaleLowerCase()))}else{const w=(y=(v=p==null?void 0:p.filter)===null||v===void 0?void 0:v.event)===null||y===void 0?void 0:y.toLocaleLowerCase();return w==="*"||w===((b=n==null?void 0:n.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return p.type.toLocaleLowerCase()===a}).map(p=>{if(typeof f=="object"&&"ids"in f){const g=f.data,{schema:m,table:k,commit_timestamp:v,type:y,errors:b}=g;f=Object.assign(Object.assign({},{schema:m,table:k,commit_timestamp:v,eventType:y,new:{},old:{},errors:b}),this._getPayloadRecords(g))}p.callback(f,i)})}_isClosed(){return this.state===pt.closed}_isJoined(){return this.state===pt.joined}_isJoining(){return this.state===pt.joining}_isLeaving(){return this.state===pt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,n,i){const r=e.toLocaleLowerCase(),s={type:r,filter:n,callback:i};return this.bindings[r]?this.bindings[r].push(s):this.bindings[r]=[s],this}_off(e,n){const i=e.toLocaleLowerCase();return this.bindings[i]=this.bindings[i].filter(r=>{var s;return!(((s=r.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===i&&ug.isEqual(r.filter,n))}),this}static isEqual(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const i in e)if(e[i]!==n[i])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(Ut.close,{},e)}_onError(e){this._on(Ut.error,{},n=>e(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=pt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const n={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(n.new=o1(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(n.old=o1(e.columns,e.old_record)),n}}const S7=()=>{},P7=typeof WebSocket<"u",C7=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class T7{constructor(e,n){var i;this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=g7,this.params={},this.timeout=m5,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=S7,this.conn=null,this.sendBuffer=[],this.serializer=new v7,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let a;return s?a=s:typeof fetch>"u"?a=(...o)=>Yr(async()=>{const{default:l}=await Promise.resolve().then(()=>rs);return{default:l}},void 0).then(({default:l})=>l(...o)):a=fetch,(...o)=>a(...o)},this.endPoint=`${e}/${pf.websocket}`,this.httpEndpoint=x5(e),n!=null&&n.transport?this.transport=n.transport:this.transport=null,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const r=(i=n==null?void 0:n.params)===null||i===void 0?void 0:i.apikey;if(r&&(this.accessToken=r,this.apiKey=r),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,a)=>a(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new y5(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch),n!=null&&n.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(n==null?void 0:n.worker)||!1,this.workerUrl=n==null?void 0:n.workerUrl}}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(P7){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new E7(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),Yr(async()=>{const{default:e}=await import("./browser-B4Wbg7hd.js").then(n=>n.b);return{default:e}},[]).then(({default:e})=>{this.conn=new e(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(e,n){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){const n=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const e=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),e}log(e,n,i){this.logger(e,n,i)}connectionState(){switch(this.conn&&this.conn.readyState){case Dr.connecting:return Ri.Connecting;case Dr.open:return Ri.Open;case Dr.closing:return Ri.Closing;default:return Ri.Closed}}isConnected(){return this.connectionState()===Ri.Open}channel(e,n={config:{}}){const i=new ug(`realtime:${e}`,n,this);return this.channels.push(i),i}push(e){const{topic:n,event:i,payload:r,ref:s}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${n} ${i} (${s})`,r),this.isConnected()?a():this.sendBuffer.push(a)}setAuth(e){this.accessToken=e,this.channels.forEach(n=>{e&&n.updateJoinPayload({access_token:e}),n.joinedOnce&&n._isJoined()&&n._push(Ut.access_token,{access_token:e})})}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let n=this.channels.find(i=>i.topic===e&&(i._isJoined()||i._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${e}"`),n.unsubscribe())}_remove(e){this.channels=this.channels.filter(n=>n._joinRef()!==e._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:m7}))}_onConnMessage(e){this.decode(e.data,n=>{let{topic:i,event:r,payload:s,ref:a}=n;(a&&a===this.pendingHeartbeatRef||r===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${i} ${r} ${a&&"("+a+")"||""}`,s),this.channels.filter(o=>o._isMember(i)).forEach(o=>o._trigger(r,s,a)),this.stateChangeCallbacks.message.forEach(o=>o(n))})}async _onConnOpen(){if(this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this._sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(e=>e())}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(e))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger(Ut.error))}_appendParams(e,n){if(Object.keys(n).length===0)return e;const i=e.match(/\?/)?"&":"?",r=new URLSearchParams(n);return`${e}${i}${r}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(e=this.conn)===null||e===void 0||e.close(y7,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_workerObjectUrl(e){let n;if(e)n=e;else{const i=new Blob([C7],{type:"application/javascript"});n=URL.createObjectURL(i)}return n}}class E7{constructor(e,n,i){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=Dr.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=i.close}}class dg extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function Me(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}class M7 extends dg{constructor(e,n){super(e),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class mf extends dg{constructor(e,n){super(e),this.name="StorageUnknownError",this.originalError=n}}var A7=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};const b5=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Yr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)},O7=()=>A7(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Yr(()=>Promise.resolve().then(()=>rs),void 0)).Response:Response}),yf=t=>{if(Array.isArray(t))return t.map(n=>yf(n));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([n,i])=>{const r=n.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=yf(i)}),e};var tr=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};const vd=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),L7=(t,e,n)=>tr(void 0,void 0,void 0,function*(){const i=yield O7();t instanceof i&&!(n!=null&&n.noResolveJson)?t.json().then(r=>{e(new M7(vd(r),t.status||500))}).catch(r=>{e(new mf(vd(r),r))}):e(new mf(vd(t),t))}),R7=(t,e,n,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json"},e==null?void 0:e.headers),i&&(r.body=JSON.stringify(i)),Object.assign(Object.assign({},r),n))};function Za(t,e,n,i,r,s){return tr(this,void 0,void 0,function*(){return new Promise((a,o)=>{t(n,R7(e,i,r,s)).then(l=>{if(!l.ok)throw l;return i!=null&&i.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>L7(l,o,i))})})}function Ec(t,e,n,i){return tr(this,void 0,void 0,function*(){return Za(t,"GET",e,n,i)})}function Vn(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return Za(t,"POST",e,i,r,n)})}function D7(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return Za(t,"PUT",e,i,r,n)})}function z7(t,e,n,i){return tr(this,void 0,void 0,function*(){return Za(t,"HEAD",e,Object.assign(Object.assign({},n),{noResolveJson:!0}),i)})}function k5(t,e,n,i,r){return tr(this,void 0,void 0,function*(){return Za(t,"DELETE",e,i,r,n)})}var tt=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};const I7={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},h1={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class $7{constructor(e,n={},i,r){this.url=e,this.headers=n,this.bucketId=i,this.fetch=b5(r)}uploadOrUpdate(e,n,i,r){return tt(this,void 0,void 0,function*(){try{let s;const a=Object.assign(Object.assign({},h1),r);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&i instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",i)):typeof FormData<"u"&&i instanceof FormData?(s=i,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l))):(s=i,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),r!=null&&r.headers&&(o=Object.assign(Object.assign({},o),r.headers));const c=this._removeEmptyFolders(n),d=this._getFinalPath(c),h=yield this.fetch(`${this.url}/object/${d}`,Object.assign({method:e,body:s,headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{})),f=yield h.json();return h.ok?{data:{path:c,id:f.Id,fullPath:f.Key},error:null}:{data:null,error:f}}catch(s){if(Me(s))return{data:null,error:s};throw s}})}upload(e,n,i){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,n,i)})}uploadToSignedUrl(e,n,i,r){return tt(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),a=this._getFinalPath(s),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",n);try{let l;const c=Object.assign({upsert:h1.upsert},r),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&i instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",i)):typeof FormData<"u"&&i instanceof FormData?(l=i,l.append("cacheControl",c.cacheControl)):(l=i,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType);const h=yield this.fetch(o.toString(),{method:"PUT",body:l,headers:d}),f=yield h.json();return h.ok?{data:{path:s,fullPath:f.Key},error:null}:{data:null,error:f}}catch(l){if(Me(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,n){return tt(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e);const r=Object.assign({},this.headers);n!=null&&n.upsert&&(r["x-upsert"]="true");const s=yield Vn(this.fetch,`${this.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(this.url+s.url),o=a.searchParams.get("token");if(!o)throw new dg("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(i){if(Me(i))return{data:null,error:i};throw i}})}update(e,n,i){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,n,i)})}move(e,n,i){return tt(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:i==null?void 0:i.destinationBucket},{headers:this.headers}),error:null}}catch(r){if(Me(r))return{data:null,error:r};throw r}})}copy(e,n,i){return tt(this,void 0,void 0,function*(){try{return{data:{path:(yield Vn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:n,destinationBucket:i==null?void 0:i.destinationBucket},{headers:this.headers})).Key},error:null}}catch(r){if(Me(r))return{data:null,error:r};throw r}})}createSignedUrl(e,n,i){return tt(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e),s=yield Vn(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:n},i!=null&&i.transform?{transform:i.transform}:{}),{headers:this.headers});const a=i!=null&&i.download?`&download=${i.download===!0?"":i.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${a}`)},{data:s,error:null}}catch(r){if(Me(r))return{data:null,error:r};throw r}})}createSignedUrls(e,n,i){return tt(this,void 0,void 0,function*(){try{const r=yield Vn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:e},{headers:this.headers}),s=i!=null&&i.download?`&download=${i.download===!0?"":i.download}`:"";return{data:r.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${s}`):null})),error:null}}catch(r){if(Me(r))return{data:null,error:r};throw r}})}download(e,n){return tt(this,void 0,void 0,function*(){const r=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),a=s?`?${s}`:"";try{const o=this._getFinalPath(e);return{data:yield(yield Ec(this.fetch,`${this.url}/${r}/${o}${a}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(Me(o))return{data:null,error:o};throw o}})}info(e){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{const i=yield Ec(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:yf(i),error:null}}catch(i){if(Me(i))return{data:null,error:i};throw i}})}exists(e){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(e);try{return yield z7(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(i){if(Me(i)&&i instanceof mf){const r=i.originalError;if([400,404].includes(r==null?void 0:r.status))return{data:!1,error:i}}throw i}})}getPublicUrl(e,n){const i=this._getFinalPath(e),r=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&r.push(s);const o=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&r.push(l);let c=r.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${i}${c}`)}}}remove(e){return tt(this,void 0,void 0,function*(){try{return{data:yield k5(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(n){if(Me(n))return{data:null,error:n};throw n}})}list(e,n,i){return tt(this,void 0,void 0,function*(){try{const r=Object.assign(Object.assign(Object.assign({},I7),n),{prefix:e||""});return{data:yield Vn(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},i),error:null}}catch(r){if(Me(r))return{data:null,error:r};throw r}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const n=[];return e.width&&n.push(`width=${e.width}`),e.height&&n.push(`height=${e.height}`),e.resize&&n.push(`resize=${e.resize}`),e.format&&n.push(`format=${e.format}`),e.quality&&n.push(`quality=${e.quality}`),n.join("&")}}const F7="2.7.1",B7={"X-Client-Info":`storage-js/${F7}`};var ar=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};class N7{constructor(e,n={},i){this.url=e,this.headers=Object.assign(Object.assign({},B7),n),this.fetch=b5(i)}listBuckets(){return ar(this,void 0,void 0,function*(){try{return{data:yield Ec(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(Me(e))return{data:null,error:e};throw e}})}getBucket(e){return ar(this,void 0,void 0,function*(){try{return{data:yield Ec(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(n){if(Me(n))return{data:null,error:n};throw n}})}createBucket(e,n={public:!1}){return ar(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/bucket`,{id:e,name:e,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(Me(i))return{data:null,error:i};throw i}})}updateBucket(e,n){return ar(this,void 0,void 0,function*(){try{return{data:yield D7(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(Me(i))return{data:null,error:i};throw i}})}emptyBucket(e){return ar(this,void 0,void 0,function*(){try{return{data:yield Vn(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Me(n))return{data:null,error:n};throw n}})}deleteBucket(e){return ar(this,void 0,void 0,function*(){try{return{data:yield k5(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(n){if(Me(n))return{data:null,error:n};throw n}})}}class V7 extends N7{constructor(e,n={},i){super(e,n,i)}from(e){return new $7(this.url,this.headers,e,this.fetch)}}const U7="2.46.1";let As="";typeof Deno<"u"?As="deno":typeof document<"u"?As="web":typeof navigator<"u"&&navigator.product==="ReactNative"?As="react-native":As="node";const H7={"X-Client-Info":`supabase-js-${As}/${U7}`},W7={headers:H7},K7={schema:"public"},G7={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Y7={};var q7=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};const X7=t=>{let e;return t?e=t:typeof fetch>"u"?e=s5:e=fetch,(...n)=>e(...n)},J7=()=>typeof Headers>"u"?a5:Headers,Q7=(t,e,n)=>{const i=X7(n),r=J7();return(s,a)=>q7(void 0,void 0,void 0,function*(){var o;const l=(o=yield e())!==null&&o!==void 0?o:t;let c=new r(a==null?void 0:a.headers);return c.has("apikey")||c.set("apikey",t),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),i(s,Object.assign(Object.assign({},a),{headers:c}))})};var Z7=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};function eC(t){return t.replace(/\/$/,"")}function tC(t,e){const{db:n,auth:i,realtime:r,global:s}=t,{db:a,auth:o,realtime:l,global:c}=e,d={db:Object.assign(Object.assign({},a),n),auth:Object.assign(Object.assign({},o),i),realtime:Object.assign(Object.assign({},l),r),global:Object.assign(Object.assign({},c),s),accessToken:()=>Z7(this,void 0,void 0,function*(){return""})};return t.accessToken?d.accessToken=t.accessToken:delete d.accessToken,d}const w5="2.65.1",nC="http://localhost:9999",iC="supabase.auth.token",rC={"X-Client-Info":`gotrue-js/${w5}`},f1=10,vf="X-Supabase-Api-Version",_5={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}};function sC(t){return Math.round(Date.now()/1e3)+t}function aC(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const e=Math.random()*16|0;return(t=="x"?e:e&3|8).toString(16)})}const Bt=()=>typeof document<"u",wi={tested:!1,writable:!1},Js=()=>{if(!Bt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(wi.tested)return wi.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),wi.tested=!0,wi.writable=!0}catch{wi.tested=!0,wi.writable=!1}return wi.writable};function xd(t){const e={},n=new URL(t);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return n.searchParams.forEach((i,r)=>{e[r]=i}),e}const j5=t=>{let e;return t?e=t:typeof fetch>"u"?e=(...n)=>Yr(async()=>{const{default:i}=await Promise.resolve().then(()=>rs);return{default:i}},void 0).then(({default:i})=>i(...n)):e=fetch,(...n)=>e(...n)},oC=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",S5=async(t,e,n)=>{await t.setItem(e,JSON.stringify(n))},Co=async(t,e)=>{const n=await t.getItem(e);if(!n)return null;try{return JSON.parse(n)}catch{return n}},To=async(t,e)=>{await t.removeItem(e)};function lC(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",i,r,s,a,o,l,c,d=0;for(t=t.replace("-","+").replace("_","/");d<t.length;)a=e.indexOf(t.charAt(d++)),o=e.indexOf(t.charAt(d++)),l=e.indexOf(t.charAt(d++)),c=e.indexOf(t.charAt(d++)),i=a<<2|o>>4,r=(o&15)<<4|l>>2,s=(l&3)<<6|c,n=n+String.fromCharCode(i),l!=64&&r!=0&&(n=n+String.fromCharCode(r)),c!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class ju{constructor(){this.promise=new ju.promiseConstructor((e,n)=>{this.resolve=e,this.reject=n})}}ju.promiseConstructor=Promise;function p1(t){const e=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=t.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!e.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const i=n[1];return JSON.parse(lC(i))}async function cC(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function uC(t,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await t(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function dC(t){return("0"+t.toString(16)).substr(-2)}function hC(){const e=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=n.length;let r="";for(let s=0;s<56;s++)r+=n.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,dC).join("")}async function fC(t){const n=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",n),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}function pC(t){return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function gC(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const n=await fC(t);return pC(n)}async function or(t,e,n=!1){const i=hC();let r=i;n&&(r+="/PASSWORD_RECOVERY"),await S5(t,`${e}-code-verifier`,r);const s=await gC(i);return[s,i===s?"plain":"s256"]}const mC=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function yC(t){const e=t.headers.get(vf);if(!e||!e.match(mC))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}class hg extends Error{constructor(e,n,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=i}}function U(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class vC extends hg{constructor(e,n,i){super(e,n,i),this.name="AuthApiError",this.status=n,this.code=i}}function xC(t){return U(t)&&t.name==="AuthApiError"}class P5 extends hg{constructor(e,n){super(e),this.name="AuthUnknownError",this.originalError=n}}class nr extends hg{constructor(e,n,i,r){super(e,i,r),this.name=n,this.status=i}}class zn extends nr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function bC(t){return U(t)&&t.name==="AuthSessionMissingError"}class bd extends nr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Eo extends nr{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Mo extends nr{constructor(e,n=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class g1 extends nr{constructor(e,n=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class xf extends nr{constructor(e,n){super(e,"AuthRetryableFetchError",n,void 0)}}function kd(t){return U(t)&&t.name==="AuthRetryableFetchError"}class m1 extends nr{constructor(e,n,i){super(e,"AuthWeakPasswordError",n,"weak_password"),this.reasons=i}}var kC=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};const Ai=t=>t.msg||t.message||t.error_description||t.error||JSON.stringify(t),wC=[502,503,504];async function y1(t){var e;if(!oC(t))throw new xf(Ai(t),0);if(wC.includes(t.status))throw new xf(Ai(t),t.status);let n;try{n=await t.json()}catch(s){throw new P5(Ai(s),s)}let i;const r=yC(t);if(r&&r.getTime()>=_5["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?i=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(i=n.error_code),i){if(i==="weak_password")throw new m1(Ai(n),t.status,((e=n.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new zn}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new m1(Ai(n),t.status,n.weak_password.reasons);throw new vC(Ai(n),t.status||500,i)}const _C=(t,e,n,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),n))};async function K(t,e,n,i){var r;const s=Object.assign({},i==null?void 0:i.headers);s[vf]||(s[vf]=_5["2024-01-01"].name),i!=null&&i.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await jC(t,e,n+o,{headers:s,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function jC(t,e,n,i,r,s){const a=_C(e,i,r,s);let o;try{o=await t(n,Object.assign({},a))}catch(l){throw console.error(l),new xf(Ai(l),0)}if(o.ok||await y1(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await y1(l)}}function In(t){var e;let n=null;TC(t)&&(n=Object.assign({},t),t.expires_at||(n.expires_at=sC(t.expires_in)));const i=(e=t.user)!==null&&e!==void 0?e:t;return{data:{session:n,user:i},error:null}}function v1(t){const e=In(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((n,i)=>n&&typeof i=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Wn(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function SC(t){return{data:t,error:null}}function PC(t){const{action_link:e,email_otp:n,hashed_token:i,redirect_to:r,verification_type:s}=t,a=kC(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:n,hashed_token:i,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function CC(t){return t}function TC(t){return t.access_token&&t.refresh_token&&t.expires_in}var EC=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};class MC{constructor({url:e="",headers:n={},fetch:i}){this.url=e,this.headers=n,this.fetch=j5(i),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,n="global"){try{return await K(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(U(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,n={}){try{return await K(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:n}=e,i=EC(e,["options"]),r=Object.assign(Object.assign({},i),n);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await K(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:PC,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(U(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(e){try{return await K(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Wn})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async listUsers(e){var n,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await K(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(n=e==null?void 0:e.page)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:CC});if(d.error)throw d.error;const h=await d.json(),f=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(g=>{const m=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),k=JSON.parse(g.split(";")[1].split("=")[1]);c[`${k}Page`]=m}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(U(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){try{return await K(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Wn})}catch(n){if(U(n))return{data:{user:null},error:n};throw n}}async updateUserById(e,n){try{return await K(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:n,headers:this.headers,xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,n=!1){try{return await K(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:n},xform:Wn})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){try{const{data:n,error:i}=await K(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:n,error:i}}catch(n){if(U(n))return{data:null,error:n};throw n}}async _deleteFactor(e){try{return{data:await K(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}}const AC={getItem:t=>Js()?globalThis.localStorage.getItem(t):null,setItem:(t,e)=>{Js()&&globalThis.localStorage.setItem(t,e)},removeItem:t=>{Js()&&globalThis.localStorage.removeItem(t)}};function x1(t={}){return{getItem:e=>t[e]||null,setItem:(e,n)=>{t[e]=n},removeItem:e=>{delete t[e]}}}function OC(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const lr={debug:!!(globalThis&&Js()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class C5 extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class LC extends C5{}async function RC(t,e,n){lr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",t,e);const i=new globalThis.AbortController;return e>0&&setTimeout(()=>{i.abort(),lr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",t)},e),await globalThis.navigator.locks.request(t,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},async r=>{if(r){lr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",t,r.name);try{return await n()}finally{lr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",t,r.name)}}else{if(e===0)throw lr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",t),new LC(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);if(lr.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}})}OC();const DC={url:nC,storageKey:iC,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:rC,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},bs=30*1e3,b1=3;async function k1(t,e,n){return await n()}class Ea{constructor(e){var n,i;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ea.nextInstanceID,Ea.nextInstanceID+=1,this.instanceID>0&&Bt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},DC),e);if(this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new MC({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=j5(r.fetch),this.lock=r.lock||k1,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,r.lock?this.lock=r.lock:Bt()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=RC:this.lock=k1,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:Js()?this.storage=AC:(this.memoryStorage={},this.storage=x1(this.memoryStorage)):(this.memoryStorage={},this.storage=x1(this.memoryStorage)),Bt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),await this._notifyAllSubscribers(s.data.event,s.data.session,!1)})}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${w5}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const e=Bt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",e),e||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:i}=await this._getSessionFromURL(e);if(i)return this._debug("#_initialize()","error detecting session from URL",i),(i==null?void 0:i.code)==="identity_already_exists"?{error:i}:(await this._removeSession(),{error:i});const{session:r,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",r,"redirect type",s),await this._saveSession(r),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",r):await this._notifyAllSubscribers("SIGNED_IN",r)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return U(e)?{error:e}:{error:new P5("Unexpected error during initialization",e)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var n,i,r;try{const s=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:In}),{data:a,error:o}=s;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signUp(e){var n,i,r;try{let s;if("email"in e){const{email:d,password:h,options:f}=e;let p=null,g=null;this.flowType==="pkce"&&([p,g]=await or(this.storage,this.storageKey)),s=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f==null?void 0:f.emailRedirectTo,body:{email:d,password:h,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:p,code_challenge_method:g},xform:In})}else if("phone"in e){const{phone:d,password:h,options:f}=e;s=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(i=f==null?void 0:f.data)!==null&&i!==void 0?i:{},channel:(r=f==null?void 0:f.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:In})}else throw new Eo("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return{data:{user:null,session:null},error:o};const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(s){if(U(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(e){try{let n;if("email"in e){const{email:s,password:a,options:o}=e;n=await K(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:v1})}else if("phone"in e){const{phone:s,password:a,options:o}=e;n=await K(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:v1})}else throw new Eo("You must provide either an email or phone number and a password");const{data:i,error:r}=n;return r?{data:{user:null,session:null},error:r}:!i||!i.session||!i.user?{data:{user:null,session:null},error:new bd}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(e){var n,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(n=e.options)===null||n===void 0?void 0:n.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async _exchangeCodeForSession(e){const n=await Co(this.storage,`${this.storageKey}-code-verifier`),[i,r]=(n??"").split("/");try{const{data:s,error:a}=await K(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:In});if(await To(this.storage,`${this.storageKey}-code-verifier`),a)throw a;return!s||!s.session||!s.user?{data:{user:null,session:null,redirectType:null},error:new bd}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(U(s))return{data:{user:null,session:null,redirectType:null},error:s};throw s}}async signInWithIdToken(e){try{const{options:n,provider:i,token:r,access_token:s,nonce:a}=e,o=await K(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:In}),{data:l,error:c}=o;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new bd}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(e){var n,i,r,s,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,d=null;this.flowType==="pkce"&&([c,d]=await or(this.storage,this.storageKey));const{error:h}=await K(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:d}=await K(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:d}}throw new Eo("You must provide either an email or phone number.")}catch(o){if(U(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(e){var n,i;try{let r,s;"options"in e&&(r=(n=e.options)===null||n===void 0?void 0:n.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await K(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:In});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(r){if(U(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithSSO(e){var n,i,r;try{let s=null,a=null;return this.flowType==="pkce"&&([s,a]=await or(this.storage,this.storageKey)),await K(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(n=e.options)===null||n===void 0?void 0:n.redirectTo)!==null&&i!==void 0?i:void 0}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:a}),headers:this.headers,xform:SC})}catch(s){if(U(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:n},error:i}=e;if(i)throw i;if(!n)throw new zn;const{error:r}=await K(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:r}})}catch(e){if(U(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const n=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:s}=e,{error:a}=await K(this.fetch,"POST",n,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:a}}else if("phone"in e){const{phone:i,type:r,options:s}=e,{data:a,error:o}=await K(this.fetch,"POST",n,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o}}throw new Eo("You must provide either an email or phone number and a type")}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(e,n){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await n()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=n();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await e(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const n=await Co(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?e=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.storage.isServer){let a=this.suppressGetSessionWarning;e=new Proxy(e,{get:(l,c,d)=>(!a&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,d))})}return{data:{session:e},error:null}}const{session:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{session:null},error:s}:{data:{session:r},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await K(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Wn}):await this._useSession(async n=>{var i,r,s;const{data:a,error:o}=n;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new zn}:await K(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:Wn})})}catch(n){if(U(n))return bC(n)&&(await this._removeSession(),await To(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(e,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,n))}async _updateUser(e,n={}){try{return await this._useSession(async i=>{const{data:r,error:s}=i;if(s)throw s;if(!r.session)throw new zn;const a=r.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await or(this.storage,this.storageKey));const{data:c,error:d}=await K(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Wn});if(d)throw d;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),{data:{user:a.user},error:null}})}catch(i){if(U(i))return{data:{user:null},error:i};throw i}}_decodeJWT(e){return p1(e)}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new zn;const n=Date.now()/1e3;let i=n,r=!0,s=null;const a=p1(e.access_token);if(a.exp&&(i=a.exp,r=i<=n),r){const{session:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-n,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(U(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async n=>{var i;if(!e){const{data:a,error:o}=n;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new zn;const{session:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?{data:{user:null,session:null},error:s}:r?{data:{user:r.user,session:r},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(U(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(e){try{if(!Bt())throw new Mo("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Mo("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!e)throw new g1("Not a valid PKCE flow url.");const n=xd(window.location.href);if(e){if(!n.code)throw new g1("No code detected.");const{data:y,error:b}=await this._exchangeCodeForSession(n.code);if(b)throw b;const w=new URL(window.location.href);return w.searchParams.delete("code"),window.history.replaceState(window.history.state,"",w.toString()),{data:{session:y.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new Mo(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:i,provider_refresh_token:r,access_token:s,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=n;if(!s||!o||!a||!c)throw new Mo("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(o);let f=d+h;l&&(f=parseInt(l));const p=f-d;p*1e3<=bs&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`);const g=f-h;d-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,f,d):d-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,f,d);const{data:m,error:k}=await this._getUser(s);if(k)throw k;const v={provider_token:i,provider_refresh_token:r,access_token:s,expires_in:h,expires_at:f,refresh_token:a,token_type:c,user:m.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:v,redirectType:n.type},error:null}}catch(n){if(U(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const e=xd(window.location.href);return!!(Bt()&&(e.access_token||e.error_description))}async _isPKCEFlow(){const e=xd(window.location.href),n=await Co(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&n)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async n=>{var i;const{data:r,error:s}=n;if(s)return{error:s};const a=(i=r.session)===null||i===void 0?void 0:i.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(xC(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return e!=="others"&&(await this._removeSession(),await To(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const n=aC(),i={id:n,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,i),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async n=>{var i,r;try{const{data:{session:s},error:a}=n;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}})}async resetPasswordForEmail(e,n={}){let i=null,r=null;this.flowType==="pkce"&&([i,r]=await or(this.storage,this.storageKey,!0));try{return await K(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(U(s))return{data:null,error:s};throw s}}async getUserIdentities(){var e;try{const{data:n,error:i}=await this.getUser();if(i)throw i;return{data:{identities:(e=n.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(n){if(U(n))return{data:null,error:n};throw n}}async linkIdentity(e){var n;try{const{data:i,error:r}=await this._useSession(async s=>{var a,o,l,c,d;const{data:h,error:f}=s;if(f)throw f;const p=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await K(this.fetch,"GET",p,{headers:this.headers,jwt:(d=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0})});if(r)throw r;return Bt()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),{data:{provider:e.provider,url:i==null?void 0:i.url},error:null}}catch(i){if(U(i))return{data:{provider:e.provider,url:null},error:i};throw i}}async unlinkIdentity(e){try{return await this._useSession(async n=>{var i,r;const{data:s,error:a}=n;if(a)throw a;return await K(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _refreshAccessToken(e){const n=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(n,"begin");try{const i=Date.now();return await uC(async r=>(r>0&&await cC(200*Math.pow(2,r-1)),this._debug(n,"refreshing attempt",r),await K(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:In})),(r,s)=>{const a=200*Math.pow(2,r);return s&&kd(s)&&Date.now()+a-i<bs})}catch(i){if(this._debug(n,"error",i),U(i))return{data:{session:null,user:null},error:i};throw i}finally{this._debug(n,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,n){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",n,"url",i),Bt()&&!n.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await Co(this.storage,this.storageKey);if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const r=Math.round(Date.now()/1e3),s=((e=i.expires_at)!==null&&e!==void 0?e:1/0)<r+f1;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${f1}s`),s){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(console.error(a),kd(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var n,i;if(!e)throw new zn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,"begin");try{this.refreshingDeferred=new ju;const{data:s,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!s.session)throw new zn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const o={session:s.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(s){if(this._debug(r,"error",s),U(s)){const a={session:null,error:s};return kd(s)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,n,i=!0){const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",n,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:n});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,n)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await S5(this.storage,this.storageKey,e)}async _removeSession(){this._debug("#_removeSession()"),await To(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Bt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),bs);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async n=>{const{data:{session:i}}=n;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/bs);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${bs}ms, refresh threshold is ${b1} ticks`),r<=b1&&await this._callRefreshToken(i.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof C5)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Bt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const n=`#_onVisibilityChanged(${e})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,n,i){const r=[`provider=${encodeURIComponent(n)}`];if(i!=null&&i.redirectTo&&r.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i!=null&&i.scopes&&r.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[s,a]=await or(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(i!=null&&i.queryParams){const s=new URLSearchParams(i.queryParams);r.push(s.toString())}return i!=null&&i.skipBrowserRedirect&&r.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;return s?{data:null,error:s}:await K(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _enroll(e){try{return await this._useSession(async n=>{var i,r;const{data:s,error:a}=n;if(a)return{data:null,error:a};const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:l,error:c}=await K(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s==null?void 0:s.session)===null||i===void 0?void 0:i.access_token});return c?{data:null,error:c}:(e.factorType==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if(U(n))return{data:null,error:n};throw n}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;if(s)return{data:null,error:s};const{data:a,error:o}=await K(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:o})})}catch(n){if(U(n))return{data:null,error:n};throw n}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:s}=n;return s?{data:null,error:s}:await K(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(n){if(U(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(e){const{data:n,error:i}=await this._challenge({factorId:e.factorId});return i?{data:null,error:i}:await this._verify({factorId:e.factorId,challengeId:n.id,code:e.code})}async _listFactors(){const{data:{user:e},error:n}=await this.getUser();if(n)return{data:null,error:n};const i=(e==null?void 0:e.factors)||[],r=i.filter(a=>a.factor_type==="totp"&&a.status==="verified"),s=i.filter(a=>a.factor_type==="phone"&&a.status==="verified");return{data:{all:i,totp:r,phone:s},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var n,i;const{data:{session:r},error:s}=e;if(s)return{data:null,error:s};if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const a=this._decodeJWT(r.access_token);let o=null;a.aal&&(o=a.aal);let l=o;((i=(n=r.user.factors)===null||n===void 0?void 0:n.filter(h=>h.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(l="aal2");const d=a.amr||[];return{data:{currentLevel:o,nextLevel:l,currentAuthenticationMethods:d},error:null}}))}}Ea.nextInstanceID=0;const zC=Ea;class IC extends zC{constructor(e){super(e)}}var $C=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})};class FC{constructor(e,n,i){var r,s,a;if(this.supabaseUrl=e,this.supabaseKey=n,!e)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const o=eC(e);this.realtimeUrl=`${o}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${o}/auth/v1`,this.storageUrl=`${o}/storage/v1`,this.functionsUrl=`${o}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,c={db:K7,realtime:Y7,auth:Object.assign(Object.assign({},G7),{storageKey:l}),global:W7},d=tC(i??{},c);this.storageKey=(r=d.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(s=d.global.headers)!==null&&s!==void 0?s:{},d.accessToken?(this.accessToken=d.accessToken,this.auth=new Proxy({},{get:(h,f)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=d.auth)!==null&&a!==void 0?a:{},this.headers,d.global.fetch),this.fetch=Q7(n,this._getAccessToken.bind(this),d.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},d.realtime)),this.rest=new f7(`${o}/rest/v1`,{headers:this.headers,schema:d.db.schema,fetch:this.fetch}),d.accessToken||this._listenForAuthEvents()}get functions(){return new UP(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new V7(this.storageUrl,this.headers,this.fetch)}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,n={},i={}){return this.rest.rpc(e,n,i)}channel(e,n={config:{}}){return this.realtime.channel(e,n)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,n;return $C(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:i}=yield this.auth.getSession();return(n=(e=i.session)===null||e===void 0?void 0:e.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:n,detectSessionInUrl:i,storage:r,storageKey:s,flowType:a,lock:o,debug:l},c,d){var h;const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new IC({url:this.authUrl,headers:Object.assign(Object.assign({},f),c),storageKey:s,autoRefreshToken:e,persistSession:n,detectSessionInUrl:i,storage:r,flowType:a,lock:o,debug:l,fetch:d,hasCustomAuthorizationHeader:(h="Authorization"in this.headers)!==null&&h!==void 0?h:!1})}_initRealtimeClient(e){return new T7(this.realtimeUrl,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,i)=>{this._handleTokenChanged(n,"CLIENT",i==null?void 0:i.access_token)})}_handleTokenChanged(e,n,i){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==i?(this.realtime.setAuth(i??null),this.changedAccessToken=i):e==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const BC=(t,e,n)=>new FC(t,e,n),NC="https://nrxloisjnqevtjnswsja.supabase.co",VC="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGxvaXNqbnFldnRqbnN3c2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjgwODcsImV4cCI6MjA0NzUwNDA4N30.g1QePzTw2W43Pm88J-XBaTkHbQGut64XqePRRxQb9DM",st=BC(NC,VC),T5=j.createContext();function UC({children:t}){const[e,n]=j.useState(!1),[i,r]=j.useState(!1),[s,a]=j.useState(null),[o,l]=j.useState(!1),c=de();j.useEffect(()=>{const p=localStorage.getItem("user");if(p){const g=JSON.parse(p);a(g),n(!0)}},[]);const f={isLoggedIn:e,setIsLoggedIn:n,showLogin:i,setShowLogin:r,user:s,setUser:a,loading:o,handleLogin:async(p,g)=>{try{l(!0),console.log("Login attempt with:",{username:p,password:g});const{data:m,error:k}=await st.from("akun").select("*").eq("usernameAkun",p).eq("passwordAkun",g);if(console.log("Query result:",m),k)return console.error("Query error:",k),{success:!1,error:"Terjadi kesalahan saat login"};if(m&&m.length>0){const v={id:m[0].id,username:m[0].usernameAkun,role:m[0].jenisAkun};return console.log("Setting user info:",v),localStorage.setItem("user",JSON.stringify(v)),a(v),n(!0),r(!1),m[0].jenisAkun==="admin"?c("/admin"):m[0].jenisAkun==="moderator"?c("/moderator/dashboard"):c("/user"),{success:!0}}return{success:!1,error:"Username atau password salah"}}catch(m){return console.error("Login error:",m),{success:!1,error:"Terjadi kesalahan saat login"}}finally{l(!1)}},handleLogout:()=>{localStorage.removeItem("user"),a(null),n(!1),c("/")}};return u.jsx(T5.Provider,{value:f,children:t})}function dn(){return j.useContext(T5)}const HC=x.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  background-color: ${t=>t.scrolled?"rgba(26, 26, 46, 0.8)":"transparent"};
  backdrop-filter: ${t=>t.scrolled?"blur(15px)":"none"};
`,WC=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`,KC=x(au)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
`,GC=x.img`
  height: 50px;
  width: auto;
`,YC=x.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`,qC=x.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,w1=x.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,Xt=x(au)`
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
`,_1=x(E.button)`
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
`,XC=x.button`
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
`,JC=x.div`
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
`;x(E.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;function QC(){const[t,e]=j.useState(!1),[n,i]=j.useState(!1),{isLoggedIn:r,handleLogout:s,setShowLogin:a}=dn();j.useEffect(()=>{const l=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const c=document.getElementById(l);if(c){const f=c.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:f,behavior:"smooth"})}};return u.jsx(HC,{scrolled:t,children:u.jsxs(WC,{children:[u.jsxs(KC,{to:"/",onClick:()=>o("beranda"),children:[u.jsx(GC,{src:"../public/images/logo.png",alt:"SMKN 1 Bulan Logo"}),u.jsx(YC,{children:"SMKN 1 Bulan"})]}),u.jsx(XC,{onClick:()=>i(!n),children:n?"✕":"☰"}),u.jsxs(qC,{children:[u.jsxs(w1,{children:[u.jsx(Xt,{to:"/",onClick:()=>o("beranda"),children:"Beranda"}),u.jsx(Xt,{to:"/",onClick:()=>o("profil"),children:"Profil"}),u.jsx(Xt,{to:"/",onClick:()=>o("berita"),children:"Berita"}),u.jsx(Xt,{to:"/",onClick:()=>o("jurusan"),children:"Program"}),u.jsx(Xt,{to:"/",onClick:()=>o("fasilitas"),children:"Fasilitas"})]}),u.jsx(_1,{onClick:()=>{r?s():a(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]}),u.jsxs(JC,{isOpen:n,children:[u.jsxs(w1,{children:[u.jsx(Xt,{to:"/",onClick:()=>{o("beranda"),i(!1)},children:"Beranda"}),u.jsx(Xt,{to:"/",onClick:()=>{o("profil"),i(!1)},children:"Profil"}),u.jsx(Xt,{to:"/",onClick:()=>{o("berita"),i(!1)},children:"Berita"}),u.jsx(Xt,{to:"/",onClick:()=>{o("jurusan"),i(!1)},children:"Program"}),u.jsx(Xt,{to:"/",onClick:()=>{o("fasilitas"),i(!1)},children:"Fasilitas"})]}),u.jsx(_1,{onClick:()=>{r?s():a(!0),i(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:r?"Logout":"Login"})]})]})})}var E5={exports:{}},ZC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",eT=ZC,tT=eT;function M5(){}function A5(){}A5.resetWarningCache=M5;var nT=function(){function t(i,r,s,a,o,l){if(l!==tT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:A5,resetWarningCache:M5};return n.PropTypes=n,n};E5.exports=nT();var iT=E5.exports;const ze=Bc(iT);var rT=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!==0;){var a=s[r];if(!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n};const sT=Bc(rT);var bf={exports:{}},O5;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/O5=function(){var t={},e={};return t.on=function(n,i){var r={name:n,handler:i};return e[n]=e[n]||[],e[n].unshift(r),r},t.off=function(n){var i=e[n.name].indexOf(n);i!==-1&&e[n.name].splice(i,1)},t.trigger=function(n,i){var r=e[n],s;if(r)for(s=r.length;s--;)r[s].handler(i)},t};var aT=O5,kf={exports:{}},oT=function(e,n,i){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(i=n,n={}),n=n||{},i=i||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&lT(s,n.attrs),n.text&&(s.text=""+n.text);var a="onload"in s?j1:cT;a(s,i),s.onload||j1(s,i),r.appendChild(s)};function lT(t,e){for(var n in e)t.setAttribute(n,e[n])}function j1(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function cT(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=oT,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default=function(s){var a=new Promise(function(o){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){o(window.YT);return}else{var l=window.location.protocol==="http:"?"http:":"https:";(0,i.default)(l+"//www.youtube.com/iframe_api",function(d){d&&s.trigger("error",d)})}var c=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){c&&c(),o(window.YT)}});return a},t.exports=e.default})(kf,kf.exports);var uT=kf.exports,wf={exports:{}},_f={exports:{}},jf={exports:{}},Ma=1e3,Aa=Ma*60,Oa=Aa*60,La=Oa*24,dT=La*365.25,hT=function(t,e){e=e||{};var n=typeof t;if(n==="string"&&t.length>0)return fT(t);if(n==="number"&&isNaN(t)===!1)return e.long?gT(t):pT(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function fT(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),i=(e[2]||"ms").toLowerCase();switch(i){case"years":case"year":case"yrs":case"yr":case"y":return n*dT;case"days":case"day":case"d":return n*La;case"hours":case"hour":case"hrs":case"hr":case"h":return n*Oa;case"minutes":case"minute":case"mins":case"min":case"m":return n*Aa;case"seconds":case"second":case"secs":case"sec":case"s":return n*Ma;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function pT(t){return t>=La?Math.round(t/La)+"d":t>=Oa?Math.round(t/Oa)+"h":t>=Aa?Math.round(t/Aa)+"m":t>=Ma?Math.round(t/Ma)+"s":t+"ms"}function gT(t){return Ao(t,La,"day")||Ao(t,Oa,"hour")||Ao(t,Aa,"minute")||Ao(t,Ma,"second")||t+" ms"}function Ao(t,e,n){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}(function(t,e){e=t.exports=r.debug=r.default=r,e.coerce=l,e.disable=a,e.enable=s,e.enabled=o,e.humanize=hT,e.names=[],e.skips=[],e.formatters={};var n;function i(c){var d=0,h;for(h in c)d=(d<<5)-d+c.charCodeAt(h),d|=0;return e.colors[Math.abs(d)%e.colors.length]}function r(c){function d(){if(d.enabled){var h=d,f=+new Date,p=f-(n||f);h.diff=p,h.prev=n,h.curr=f,n=f;for(var g=new Array(arguments.length),m=0;m<g.length;m++)g[m]=arguments[m];g[0]=e.coerce(g[0]),typeof g[0]!="string"&&g.unshift("%O");var k=0;g[0]=g[0].replace(/%([a-zA-Z%])/g,function(y,b){if(y==="%%")return y;k++;var w=e.formatters[b];if(typeof w=="function"){var _=g[k];y=w.call(h,_),g.splice(k,1),k--}return y}),e.formatArgs.call(h,g);var v=d.log||e.log||console.log.bind(console);v.apply(h,g)}}return d.namespace=c,d.enabled=e.enabled(c),d.useColors=e.useColors(),d.color=i(c),typeof e.init=="function"&&e.init(d),d}function s(c){e.save(c),e.names=[],e.skips=[];for(var d=(typeof c=="string"?c:"").split(/[\s,]+/),h=d.length,f=0;f<h;f++)d[f]&&(c=d[f].replace(/\*/g,".*?"),c[0]==="-"?e.skips.push(new RegExp("^"+c.substr(1)+"$")):e.names.push(new RegExp("^"+c+"$")))}function a(){e.enable("")}function o(c){var d,h;for(d=0,h=e.skips.length;d<h;d++)if(e.skips[d].test(c))return!1;for(d=0,h=e.names.length;d<h;d++)if(e.names[d].test(c))return!0;return!1}function l(c){return c instanceof Error?c.stack||c.message:c}})(jf,jf.exports);var mT=jf.exports;(function(t,e){var n={};e=t.exports=mT,e.log=s,e.formatArgs=r,e.save=a,e.load=o,e.useColors=i,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:l(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function i(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(c){try{return JSON.stringify(c)}catch(d){return"[UnexpectedJSONParseError]: "+d.message}};function r(c){var d=this.useColors;if(c[0]=(d?"%c":"")+this.namespace+(d?" %c":" ")+c[0]+(d?"%c ":" ")+"+"+e.humanize(this.diff),!!d){var h="color: "+this.color;c.splice(1,0,h,"color: inherit");var f=0,p=0;c[0].replace(/%[a-zA-Z%]/g,function(g){g!=="%%"&&(f++,g==="%c"&&(p=f))}),c.splice(p,0,h)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(c){try{c==null?e.storage.removeItem("debug"):e.storage.debug=c}catch{}}function o(){var c;try{c=e.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=n.DEBUG),c}e.enable(o());function l(){try{return window.localStorage}catch{}}})(_f,_f.exports);var yT=_f.exports,Sf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(Sf,Sf.exports);var vT=Sf.exports,Pf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(Pf,Pf.exports);var xT=Pf.exports,Cf={exports:{}},Tf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(Tf,Tf.exports);var bT=Tf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=bT,i=r(n);function r(s){return s&&s.__esModule?s:{default:s}}e.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(Cf,Cf.exports);var kT=Cf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=yT,i=d(n),r=vT,s=d(r),a=xT,o=d(a),l=kT,c=d(l);function d(p){return p&&p.__esModule?p:{default:p}}var h=(0,i.default)("youtube-player"),f={};f.proxyEvents=function(p){var g={},m=function(S){var P="on"+S.slice(0,1).toUpperCase()+S.slice(1);g[P]=function(T){h('event "%s"',P,T),p.trigger(S,T)}},k=!0,v=!1,y=void 0;try{for(var b=o.default[Symbol.iterator](),w;!(k=(w=b.next()).done);k=!0){var _=w.value;m(_)}}catch(C){v=!0,y=C}finally{try{!k&&b.return&&b.return()}finally{if(v)throw y}}return g},f.promisifyPlayer=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m={},k=function(P){g&&c.default[P]?m[P]=function(){for(var T=arguments.length,M=Array(T),L=0;L<T;L++)M[L]=arguments[L];return p.then(function(D){var H=c.default[P],J=D.getPlayerState(),Y=D[P].apply(D,M);return H.stateChangeRequired||Array.isArray(H.acceptableStates)&&H.acceptableStates.indexOf(J)===-1?new Promise(function(N){var re=function O(){var I=D.getPlayerState(),$=void 0;typeof H.timeout=="number"&&($=setTimeout(function(){D.removeEventListener("onStateChange",O),N()},H.timeout)),Array.isArray(H.acceptableStates)&&H.acceptableStates.indexOf(I)!==-1&&(D.removeEventListener("onStateChange",O),clearTimeout($),N())};D.addEventListener("onStateChange",re)}).then(function(){return Y}):Y})}:m[P]=function(){for(var T=arguments.length,M=Array(T),L=0;L<T;L++)M[L]=arguments[L];return p.then(function(D){return D[P].apply(D,M)})}},v=!0,y=!1,b=void 0;try{for(var w=s.default[Symbol.iterator](),_;!(v=(_=w.next()).done);v=!0){var C=_.value;k(C)}}catch(S){y=!0,b=S}finally{try{!v&&w.return&&w.return()}finally{if(y)throw b}}return m},e.default=f,t.exports=e.default})(wf,wf.exports);var wT=wf.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},i=aT,r=c(i),s=uT,a=c(s),o=wT,l=c(o);function c(h){return h&&h.__esModule?h:{default:h}}var d=void 0;e.default=function(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,g=(0,r.default)();if(d||(d=(0,a.default)(g)),f.events)throw new Error("Event handlers cannot be overwritten.");if(typeof h=="string"&&!document.getElementById(h))throw new Error('Element "'+h+'" does not exist.');f.events=l.default.proxyEvents(g);var m=new Promise(function(v){if((typeof h>"u"?"undefined":n(h))==="object"&&h.playVideo instanceof Function){var y=h;v(y)}else d.then(function(b){var w=new b.Player(h,f);return g.on("ready",function(){v(w)}),null})}),k=l.default.promisifyPlayer(m,p);return k.on=g.on,k.off=g.off,k},t.exports=e.default})(bf,bf.exports);var _T=bf.exports;const jT=Bc(_T);var ST=Object.defineProperty,PT=Object.defineProperties,CT=Object.getOwnPropertyDescriptors,S1=Object.getOwnPropertySymbols,TT=Object.prototype.hasOwnProperty,ET=Object.prototype.propertyIsEnumerable,P1=(t,e,n)=>e in t?ST(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ef=(t,e)=>{for(var n in e||(e={}))TT.call(e,n)&&P1(t,n,e[n]);if(S1)for(var n of S1(e))ET.call(e,n)&&P1(t,n,e[n]);return t},Mf=(t,e)=>PT(t,CT(e)),MT=(t,e,n)=>new Promise((i,r)=>{var s=l=>{try{o(n.next(l))}catch(c){r(c)}},a=l=>{try{o(n.throw(l))}catch(c){r(c)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);o((n=n.apply(t,e)).next())});function AT(t,e){var n,i;if(t.videoId!==e.videoId)return!0;const r=((n=t.opts)==null?void 0:n.playerVars)||{},s=((i=e.opts)==null?void 0:i.playerVars)||{};return r.start!==s.start||r.end!==s.end}function C1(t={}){return Mf(Ef({},t),{height:0,width:0,playerVars:Mf(Ef({},t.playerVars),{autoplay:0,start:0,end:0})})}function OT(t,e){return t.videoId!==e.videoId||!sT(C1(t.opts),C1(e.opts))}function LT(t,e){var n,i,r,s;return t.id!==e.id||t.className!==e.className||((n=t.opts)==null?void 0:n.width)!==((i=e.opts)==null?void 0:i.width)||((r=t.opts)==null?void 0:r.height)!==((s=e.opts)==null?void 0:s.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var RT={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},DT={videoId:ze.string,id:ze.string,className:ze.string,iframeClassName:ze.string,style:ze.object,title:ze.string,loading:ze.oneOf(["lazy","eager"]),opts:ze.objectOf(ze.any),onReady:ze.func,onError:ze.func,onPlay:ze.func,onPause:ze.func,onEnd:ze.func,onStateChange:ze.func,onPlaybackRateChange:ze.func,onPlaybackQualityChange:ze.func},Bl=class extends Le.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var n,i;return(i=(n=this.props).onReady)==null?void 0:i.call(n,e)},this.onPlayerError=e=>{var n,i;return(i=(n=this.props).onError)==null?void 0:i.call(n,e)},this.onPlayerStateChange=e=>{var n,i,r,s,a,o,l,c;switch((i=(n=this.props).onStateChange)==null||i.call(n,e),e.data){case Bl.PlayerState.ENDED:(s=(r=this.props).onEnd)==null||s.call(r,e);break;case Bl.PlayerState.PLAYING:(o=(a=this.props).onPlay)==null||o.call(a,e);break;case Bl.PlayerState.PAUSED:(c=(l=this.props).onPause)==null||c.call(l,e);break}},this.onPlayerPlaybackRateChange=e=>{var n,i;return(i=(n=this.props).onPlaybackRateChange)==null?void 0:i.call(n,e)},this.onPlayerPlaybackQualityChange=e=>{var n,i;return(i=(n=this.props).onPlaybackQualityChange)==null?void 0:i.call(n,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=Mf(Ef({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=jT(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,n,i,r;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let s=!1;const a={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(a.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(a.endSeconds=this.props.opts.playerVars.end)),s){(i=this.internalPlayer)==null||i.loadVideoById(a);return}(r=this.internalPlayer)==null||r.cueVideoById(a)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return MT(this,null,function*(){LT(t,this.props)&&this.updatePlayer(),OT(t,this.props)&&(yield this.resetPlayer()),AT(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return Le.createElement("div",{className:this.props.className,style:this.props.style},Le.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Su=Bl;Su.propTypes=DT;Su.defaultProps=RT;Su.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var zT=Su;const IT=x.section`
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
`,$T=x.div`
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
`,FT=x(E.div)`
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
`;function BT(){const t={height:"100%",width:"100%",playerVars:{autoplay:1,mute:1,controls:0,showinfo:0,rel:0,enablejsapi:1,loop:1,playlist:"Grq4rhiO_Ko",playsinline:1,modestbranding:1}},e=i=>{i.target.playVideo(),document.addEventListener("click",()=>{i.target.unMute()},{once:!0})},n=i=>{i.data===0&&i.target.playVideo()};return u.jsxs(IT,{id:"beranda",children:[u.jsx($T,{children:u.jsx(zT,{videoId:"Grq4rhiO_Ko",opts:t,onReady:e,onStateChange:n,className:"youtube-player"})}),u.jsxs(FT,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},children:[u.jsx(E.h1,{animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:"Selamat Datang di SMKN 1 Bulan"}),u.jsx(E.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Membentuk Generasi Digital yang Inovatif dan Berkarakter"})]})]})}const NT=x.section`
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
`,VT=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,wd=x.h2`
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
`,UT=x.div`
  padding: 4rem 0;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('../public/images/jurusan.jpg');
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
`,HT=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,WT=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,KT=x(E.div)`
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
`,GT=x.div`
  padding: 4rem 0;
`,YT=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,qT=x.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,XT=x(E.div)`
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
`,JT=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  justify-content: space-between;
`,QT=x(E.div)`
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
`,ZT=x(E.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
`,e9=x.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 0 auto 5rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,t9=x(E.div)`
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
`,n9=x.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,T1=x(E.div)`
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
`;x.h3`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #60efff;
    text-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
  }
`;function i9(){const t=de(),e=[{nama:"Rekayasa Perangkat Lunak",deskripsi:"Program keahlian yang mempelajari pengembangan aplikasi dan software"},{nama:"Teknik Komputer dan Jaringan",deskripsi:"Program keahlian yang fokus pada infrastruktur jaringan dan hardware"},{nama:"Multimedia",deskripsi:"Program keahlian yang mempelajari desain grafis dan produksi konten digital"},{nama:"Bisnis Digital",deskripsi:"Program keahlian yang mempelajari pemasaran digital dan e-commerce"}],n=[{id:1,judul:"Prestasi Gemilang di Olimpiade Sains",tanggal:"15 Februari 2024",gambar:"/images/berita/berita1.jpg",ringkasan:"Siswa SMKN 1 Bulan meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika."},{id:2,judul:"Workshop Teknologi AI",tanggal:"10 Februari 2024",gambar:"/images/berita/berita2.jpg",ringkasan:"Mengadakan workshop teknologi AI untuk meningkatkan kompetensi siswa dalam era digital."},{id:3,judul:"Kerjasama dengan Industri",tanggal:"5 Februari 2024",gambar:"/images/berita/berita3.jpg",ringkasan:"Menjalin kerjasama dengan perusahaan teknologi untuk program magang siswa."},{id:4,judul:"Penghargaan Sekolah Adiwiyata",tanggal:"1 Februari 2024",gambar:"/images/berita/berita4.jpg",ringkasan:"SMKN 1 Bulan menerima penghargaan sebagai sekolah berwawasan lingkungan."},{id:5,judul:"Juara Umum Lomba Robotik",tanggal:"28 Januari 2024",gambar:"/images/berita/berita5.jpg",ringkasan:"Tim robotik sekolah berhasil meraih juara umum dalam kompetisi robotik tingkat nasional."},{id:6,judul:"Pelatihan Digital Marketing",tanggal:"25 Januari 2024",gambar:"/images/berita/berita6.jpg",ringkasan:"Siswa jurusan Bisnis Digital mengikuti pelatihan intensif bersama praktisi industri."}];return u.jsx(NT,{id:"profil",children:u.jsxs(VT,{children:[u.jsx(wd,{children:"Profil Sekolah"}),u.jsxs(e9,{children:[u.jsx(t9,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/school-detail"),style:{cursor:"pointer"},children:u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"SMKN 1 Bulan"}),u.jsx("p",{children:"Adalah lembaga pendidikan kejuruan unggulan yang berdiri sejak tahun 2005. Dengan fokus pada bidang teknologi informasi dan komunikasi, kami telah menghasilkan ribuan lulusan berkualitas yang kini berkarya di berbagai perusahaan teknologi terkemuka."})]})}),u.jsxs(n9,{children:[u.jsxs(T1,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>t("/kepsek-detail"),style:{cursor:"pointer"},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:"../public/images/kepsek.jpg",alt:"Kepala Sekolah"})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"Sambutan Kepala Sekolah"}),u.jsx("p",{children:'"Pengembangan karakter serta etika merupakan komitmen kami untuk menghasilkan lulusan yang berkualitas dan berakhlak mulia."'})]})]}),u.jsx(T1,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},whileHover:{scale:1.02},onClick:()=>t("/visi-misi"),style:{cursor:"pointer"},children:u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:"Visi & Misi"}),u.jsx("p",{children:"Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia untuk membangun masa depan Indonesia yang lebih baik."})]})})]})]}),u.jsx(GT,{id:"berita",children:u.jsxs(YT,{children:[u.jsx(wd,{children:"Berita Terkini"}),u.jsxs(qT,{children:[u.jsxs(XT,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{duration:.5},whileHover:{y:-10},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:n[0].gambar,alt:n[0].judul})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:n[0].judul}),u.jsx("div",{className:"date",children:n[0].tanggal}),u.jsx("p",{children:n[0].ringkasan}),u.jsx(ZT,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Baca Selengkapnya"})]})]}),u.jsx(JT,{children:n.slice(1,6).map((i,r)=>u.jsxs(QT,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},transition:{delay:r*.1},whileHover:{x:5},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:i.gambar,alt:i.judul})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:i.judul}),u.jsx("div",{className:"date",children:i.tanggal})]})]},i.id))})]})]})}),u.jsx(UT,{id:"jurusan",children:u.jsxs(HT,{children:[u.jsx(wd,{children:"Program Keahlian"}),u.jsx(WT,{children:e.map((i,r)=>u.jsxs(KT,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0, 255, 135, 0.2)"},children:[u.jsx("h3",{children:i.nama}),u.jsx("p",{children:i.deskripsi})]},r))})]})})]})})}const r9=x.section`
  padding: 4rem 2rem;
  overflow: hidden;
`,s9=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,St=x(E.div)`
  background: ${t=>`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${t.bgImage})`};
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${t=>`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${t.bgImage})`};
    background-size: cover;
    background-position: center;
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  p {
    color: #ffffff;
    line-height: 1.8;
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    opacity: 0.9;
    font-weight: 400;
  }
`,a9=x.h2`
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
`;function o9(){return u.jsxs(r9,{children:[u.jsx(a9,{children:"Ekstrakurikuler"}),u.jsxs(s9,{children:[u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/osis.jpg",children:[u.jsx("h3",{children:"OSIS"}),u.jsx("p",{children:"Organisasi siswa intra sekolah yang mengembangkan jiwa kepemimpinan dan manajemen organisasi."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/paskibra.jpg",children:[u.jsx("h3",{children:"Paskibra"}),u.jsx("p",{children:"Pasukan pengibar bendera yang melatih kedisiplinan dan jiwa nasionalisme."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/pramuka.jpg",children:[u.jsx("h3",{children:"Pramuka"}),u.jsx("p",{children:"Kegiatan kepanduan yang mengembangkan karakter dan keterampilan hidup."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/pmr.jpg",children:[u.jsx("h3",{children:"PMR"}),u.jsx("p",{children:"Palang Merah Remaja untuk pendidikan kesehatan dan pertolongan pertama."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/futsal.jpg",children:[u.jsx("h3",{children:"Futsal"}),u.jsx("p",{children:"Olahraga tim yang mengembangkan keterampilan sepak bola dan kerja sama tim."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/basket.jpg",children:[u.jsx("h3",{children:"Basket"}),u.jsx("p",{children:"Olahraga tim yang melatih koordinasi dan strategi permainan."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/volly.jpg",children:[u.jsx("h3",{children:"Voli"}),u.jsx("p",{children:"Olahraga tim yang mengembangkan kerjasama dan ketangkasan."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/silat.jpg",children:[u.jsx("h3",{children:"Pencak Silat"}),u.jsx("p",{children:"Seni bela diri tradisional yang mengajarkan disiplin dan ketangkasan."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/karate.jpg",children:[u.jsx("h3",{children:"Karate"}),u.jsx("p",{children:"Seni bela diri yang mengembangkan kekuatan fisik dan mental."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/paduan.jpg",children:[u.jsx("h3",{children:"Paduan Suara"}),u.jsx("p",{children:"Kegiatan musik vokal yang mengembangkan bakat dan harmonisasi."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/tari.jpg",children:[u.jsx("h3",{children:"Seni Tari"}),u.jsx("p",{children:"Pengembangan bakat dalam bidang tari tradisional dan modern."})]}),u.jsxs(St,{initial:{opacity:1},animate:{opacity:1},bgImage:"../public/images/ekstrakurikuler/english.jpg",children:[u.jsx("h3",{children:"English Club"}),u.jsx("p",{children:"Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa."})]})]})]})}const l9=x.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,c9=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,u9=x.h2`
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
`,d9=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`,_d=x(E.div)`
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
`;function h9(){const t=de();return u.jsx(l9,{id:"program",children:u.jsxs(c9,{children:[u.jsx(u9,{children:"Program Unggulan"}),u.jsxs(d9,{children:[u.jsxs(_d,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1},whileHover:{scale:1.05},onClick:()=>t("/akademik-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Program Akademik"}),u.jsx("p",{children:"Program pembelajaran berbasis industri dengan pendekatan teaching factory"})]}),u.jsxs(_d,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},whileHover:{scale:1.05},onClick:()=>t("/karakter-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Penguatan Karakter"}),u.jsx("p",{children:"Pembentukan karakter dan etika melalui berbagai program pembinaan"})]}),u.jsxs(_d,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.05},onClick:()=>t("/ekstrakurikuler-detail"),style:{cursor:"pointer"},children:[u.jsx("h3",{children:"Ekstrakurikuler"}),u.jsx("p",{children:"Pengembangan minat dan bakat melalui berbagai kegiatan ekstrakurikuler"})]})]}),u.jsx(o9,{})]})})}const f9=x.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,p9=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,g9=x.h2`
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
`,m9=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,y9=x(E.div)`
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
`;function v9(){const t=de(),e=[{nama:"Perpustakaan Digital",deskripsi:"Perpustakaan dengan koleksi buku digital dan area belajar yang nyaman",image:"../public/images/fasilitas/perpustakaan.jpg",path:"/perpus-detail"},{nama:"Laboratorium Komputer",deskripsi:"Lab komputer modern dengan perangkat terbaru untuk praktik pemrograman dan desain",image:"../public/images/fasilitas/lab-komputer.jpg",path:"/lab-komputer-detail"},{nama:"Studio Multimedia",deskripsi:"Studio produksi dengan peralatan profesional untuk praktik multimedia",image:"../public/images/fasilitas/studio.jpg",path:"/studio-detail"},{nama:"Ruang Praktik Jaringan",deskripsi:"Ruang praktik dengan peralatan jaringan lengkap untuk pembelajaran TKJ",image:"../public/images/fasilitas/lab-jaringan.jpg",path:"/jaringan-detail"},{nama:"Aula Serbaguna",deskripsi:"Ruang serba guna untuk berbagai kegiatan sekolah dan event",image:"../public/images/fasilitas/aula.jpg",path:"/aula-detail"},{nama:"Lapangan Olahraga",deskripsi:"Fasilitas olahraga lengkap untuk kegiatan fisik dan ekstrakurikuler",image:"../public/images/fasilitas/lapangan.jpg",path:"/lapangan-detail"},{nama:"Kantin Sehat",deskripsi:"Area makan yang bersih dan nyaman dengan menu sehat dan bergizi",image:"../public/images/fasilitas/kantin.jpg",path:"/kantin-detail"},{nama:"Taman Sosial",deskripsi:"Ruang terbuka hijau untuk interaksi sosial dan kegiatan outdoor",image:"../public/images/fasilitas/taman.jpg",path:"/taman-detail"},{nama:"Titik Internet",deskripsi:"Akses internet berkecepatan tinggi yang tersebar di seluruh area sekolah",image:"../public/images/fasilitas/wifi.jpg",path:"/internet-detail"}];return u.jsx(f9,{id:"fasilitas",children:u.jsxs(p9,{children:[u.jsx(g9,{children:"Fasilitas Sekolah"}),u.jsx(m9,{children:e.map((n,i)=>u.jsxs(y9,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},whileHover:{y:-10},onClick:()=>n.path&&t(n.path),style:{cursor:n.path?"pointer":"default"},children:[u.jsx("div",{className:"image-container",children:u.jsx("img",{src:n.image,alt:n.nama})}),u.jsxs("div",{className:"content",children:[u.jsx("h3",{children:n.nama}),u.jsx("p",{children:n.deskripsi})]})]},i))})]})})}var L5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E1=Le.createContext&&Le.createContext(L5),x9=["attr","size","title"];function b9(t,e){if(t==null)return{};var n=k9(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function k9(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function Mc(){return Mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mc.apply(this,arguments)}function M1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ac(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M1(Object(n),!0).forEach(function(i){w9(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function w9(t,e,n){return e=_9(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _9(t){var e=j9(t,"string");return typeof e=="symbol"?e:e+""}function j9(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R5(t){return t&&t.map((e,n)=>Le.createElement(e.tag,Ac({key:n},e.attr),R5(e.child)))}function z(t){return e=>Le.createElement(S9,Mc({attr:Ac({},t.attr)},e),R5(t.child))}function S9(t){var e=n=>{var{attr:i,size:r,title:s}=t,a=b9(t,x9),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Le.createElement("svg",Mc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Ac(Ac({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&Le.createElement("title",null,s),t.children)};return E1!==void 0?Le.createElement(E1.Consumer,null,n=>e(n)):e(L5)}function P9(t){return z({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function D5(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function z5(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(t)}function C9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function T9(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function et(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function I5(t){return z({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function E9(t){return z({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"},child:[]}]})(t)}function M9(t){return z({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function A9(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(t)}function O9(t){return z({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"},child:[]}]})(t)}function L9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(t)}function R9(t){return z({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(t)}function D9(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function $5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}function z9(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(t)}function I9(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function $9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(t)}function fg(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(t)}function F5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"},child:[]}]})(t)}function B5(t){return z({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(t)}function eo(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function F9(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(t)}function N5(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function V5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function U5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(t)}function B9(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"},child:[]}]})(t)}function N9(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function H5(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(t)}function V9(t){return z({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(t)}function U9(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function H9(t){return z({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function W5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(t)}function K5(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(t)}function G5(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}function W9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"},child:[]}]})(t)}function K9(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function G9(t){return z({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87 24.15 28.76z"},child:[]}]})(t)}function Y5(t){return z({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"},child:[]}]})(t)}function Y9(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function q9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function X9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function J9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(t)}function q5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function X5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function Q9(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(t)}function Z9(t){return z({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function J5(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(t)}function eE(t){return z({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(t)}function tE(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(t)}function nE(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(t)}function Q5(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(t)}function pg(t){return z({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function di(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}function iE(t){return z({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(t)}function rE(t){return z({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(t)}function sE(t){return z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"},child:[]}]})(t)}function gg(t){return z({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(t)}const aE=x.footer`
  background: #0f2027;
  color: white;
  padding: 4rem 2rem 2rem 2rem;
`,oE=x.div`
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
`,Oo=x.div`
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
`,lE=x.div`
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
`,cE=x.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`,jd=x(E.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`,uE=x.div`
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
`;function dE(){const t=new Date().getFullYear();return u.jsxs(aE,{id:"kontak",children:[u.jsxs(oE,{children:[u.jsxs(Oo,{children:[u.jsx("h3",{children:"SMKN 1 Bulan"}),u.jsx("p",{children:"Membentuk generasi digital yang inovatif dan berkarakter untuk masa depan Indonesia."}),u.jsxs(lE,{children:[u.jsx("a",{href:"https://www.facebook.com/grizelleana/",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:u.jsx(P9,{})}),u.jsx("a",{href:"https://www.instagram.com/bernadyaribka/",target:"_blank",rel:"noopener noreferrer",className:"instagram",children:u.jsx(D5,{})}),u.jsx("a",{href:"https://www.youtube.com/channel/UCY1bGdpom5tXC9M8-Ahu8dQ",target:"_blank",rel:"noopener noreferrer",className:"youtube",children:u.jsx(T9,{})}),u.jsx("a",{href:"https://www.tiktok.com/@bearnotber?",target:"_blank",rel:"noopener noreferrer",className:"tiktok",children:u.jsx(z5,{})})]})]}),u.jsxs(Oo,{children:[u.jsx("h3",{children:"Program Keahlian"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Rekayasa Perangkat Lunak"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Teknik Komputer dan Jaringan"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Multimedia"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Bisnis Digital"})})]})]}),u.jsxs(Oo,{children:[u.jsx("h3",{children:"Menu"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx("a",{href:"#beranda",children:"Beranda"})}),u.jsx("li",{children:u.jsx("a",{href:"#profil",children:"Profil"})}),u.jsx("li",{children:u.jsx("a",{href:"#berita",children:"Berita"})}),u.jsx("li",{children:u.jsx("a",{href:"#jurusan",children:"Program"})}),u.jsx("li",{children:u.jsx("a",{href:"#fasilitas",children:"Fasilitas"})})]})]}),u.jsxs(Oo,{children:[u.jsx("h3",{children:"Kontak Kami"}),u.jsxs(jd,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.1},children:[u.jsx("span",{children:"📍"}),u.jsx("p",{children:"Jl. Contoh No. 123, Kota Bulan"})]}),u.jsxs(jd,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.2},children:[u.jsx("span",{children:"📞"}),u.jsx("p",{children:"+62 123 4567 8900"})]}),u.jsxs(jd,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.3},children:[u.jsx("span",{children:"✉️"}),u.jsx("p",{children:"info@smkn1bulan.sch.id"})]})]})]}),u.jsxs(uE,{children:[u.jsx("h3",{className:"maps-title",children:"TEMUKAN KAMI"}),u.jsx("div",{className:"maps-wrapper",children:u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666667!2d106.82638889999999!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzUuMCJF!5e0!3m2!1sid!2sid!4v1234567890",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),u.jsx("br",{}),u.jsx("br",{})]}),u.jsx(cE,{children:u.jsxs("p",{children:["© ",t," SMKN 1 Bulan. Hak Cipta Dilindungi."]})})]})}const hE=x(E.div)`
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
`,fE=x(E.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;x.h2`
  color: #00ff87;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;const pE=x.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,A1=x.input`
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
`,gE=x(E.button)`
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
`,mE=x(E.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`,yE=x.p`
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
`,vE=x.div`
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
`;function xE(){const{showLogin:t,setShowLogin:e,handleLogin:n,loading:i}=dn(),[r,s]=j.useState(""),[a,o]=j.useState(""),[l,c]=j.useState(""),d=async h=>{h.preventDefault(),c("");try{const f=await n(r,a);f.success?(e(!1),s(""),o("")):c(f.error)}catch{c("Terjadi kesalahan. Silakan coba lagi.")}};return u.jsx(DP,{children:t&&u.jsx(hE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>e(!1),children:u.jsxs(fE,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:h=>h.stopPropagation(),children:[u.jsx(mE,{onClick:()=>e(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(Z9,{})}),u.jsxs(vE,{children:[u.jsx("img",{src:"../public/images/logo.png",alt:"Logo"}),u.jsx("h2",{children:"SMKN 1 Bulan"})]}),u.jsxs(pE,{onSubmit:d,children:[u.jsx(A1,{type:"text",placeholder:"Username",value:r,onChange:h=>s(h.target.value),required:!0}),u.jsx(A1,{type:"password",placeholder:"Password",value:a,onChange:h=>o(h.target.value),required:!0}),l&&u.jsx(yE,{children:l}),u.jsx(gE,{type:"submit",disabled:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:i?"Loading...":"Login"})]})]})})})}const bE={ADMIN:"admin",MODERATOR:"moderator",USER:"user"},kE=x.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`,wE=x.div`
  width: 250px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`,_E=x.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 250px;
`,jE=x.div`
  color: #00ff87;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,cr=x(au)`
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
`,SE=x(E.button)`
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
`;function PE(){const{user:t}=dn(),e=de();j.useEffect(()=>{(!t||t.role!==bE.ADMIN)&&e("/")},[t,e]);const n=()=>{e("/")};return u.jsxs(kE,{children:[u.jsxs(wE,{children:[u.jsx(jE,{children:"Admin Panel"}),u.jsxs(cr,{to:"/admin",children:[u.jsx(di,{})," Dashboard"]}),u.jsxs(cr,{to:"/admin/users",children:[u.jsx(di,{})," Moderator"]}),u.jsxs(cr,{to:"/admin/students-teachers",children:[u.jsx(Q5,{})," Siswa & Guru"]}),u.jsxs(cr,{to:"/admin/news",children:[u.jsx(G5,{})," Berita Sekolah"]}),u.jsxs(cr,{to:"/admin/program-news",children:[u.jsx(eo,{})," Berita Program Keahlian"]}),u.jsxs(cr,{to:"/admin/extra-news",children:[u.jsx(Y5,{})," Berita Ekstrakurikuler"]}),u.jsx(SE,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:n,children:"Logout"})]}),u.jsx(_E,{children:u.jsx(Ip,{})})]})}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function to(t){return t+.5|0}const qn=(t,e,n)=>Math.max(Math.min(t,n),e);function Os(t){return qn(to(t*2.55),0,255)}function ai(t){return qn(to(t*255),0,255)}function vn(t){return qn(to(t/2.55)/100,0,1)}function O1(t){return qn(to(t*100),0,100)}const Pt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Af=[..."0123456789ABCDEF"],CE=t=>Af[t&15],TE=t=>Af[(t&240)>>4]+Af[t&15],Lo=t=>(t&240)>>4===(t&15),EE=t=>Lo(t.r)&&Lo(t.g)&&Lo(t.b)&&Lo(t.a);function ME(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Pt[t[1]]*17,g:255&Pt[t[2]]*17,b:255&Pt[t[3]]*17,a:e===5?Pt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Pt[t[1]]<<4|Pt[t[2]],g:Pt[t[3]]<<4|Pt[t[4]],b:Pt[t[5]]<<4|Pt[t[6]],a:e===9?Pt[t[7]]<<4|Pt[t[8]]:255})),n}const AE=(t,e)=>t<255?e(t):"";function OE(t){var e=EE(t)?CE:TE;return t?"#"+e(t.r)+e(t.g)+e(t.b)+AE(t.a,e):void 0}const LE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Z5(t,e,n){const i=e*Math.min(n,1-n),r=(s,a=(s+t/30)%12)=>n-i*Math.max(Math.min(a-3,9-a,1),-1);return[r(0),r(8),r(4)]}function RE(t,e,n){const i=(r,s=(r+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function DE(t,e,n){const i=Z5(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function zE(t,e,n,i,r){return t===r?(e-n)/i+(e<n?6:0):e===r?(n-t)/i+2:(t-e)/i+4}function mg(t){const n=t.r/255,i=t.g/255,r=t.b/255,s=Math.max(n,i,r),a=Math.min(n,i,r),o=(s+a)/2;let l,c,d;return s!==a&&(d=s-a,c=o>.5?d/(2-s-a):d/(s+a),l=zE(n,i,r,d,s),l=l*60+.5),[l|0,c||0,o]}function yg(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ai)}function vg(t,e,n){return yg(Z5,t,e,n)}function IE(t,e,n){return yg(DE,t,e,n)}function $E(t,e,n){return yg(RE,t,e,n)}function ek(t){return(t%360+360)%360}function FE(t){const e=LE.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Os(+e[5]):ai(+e[5]));const r=ek(+e[2]),s=+e[3]/100,a=+e[4]/100;return e[1]==="hwb"?i=IE(r,s,a):e[1]==="hsv"?i=$E(r,s,a):i=vg(r,s,a),{r:i[0],g:i[1],b:i[2],a:n}}function BE(t,e){var n=mg(t);n[0]=ek(n[0]+e),n=vg(n),t.r=n[0],t.g=n[1],t.b=n[2]}function NE(t){if(!t)return;const e=mg(t),n=e[0],i=O1(e[1]),r=O1(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${vn(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const L1={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},R1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function VE(){const t={},e=Object.keys(R1),n=Object.keys(L1);let i,r,s,a,o;for(i=0;i<e.length;i++){for(a=o=e[i],r=0;r<n.length;r++)s=n[r],o=o.replace(s,L1[s]);s=parseInt(R1[a],16),t[o]=[s>>16&255,s>>8&255,s&255]}return t}let Ro;function UE(t){Ro||(Ro=VE(),Ro.transparent=[0,0,0,0]);const e=Ro[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const HE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function WE(t){const e=HE.exec(t);let n=255,i,r,s;if(e){if(e[7]!==i){const a=+e[7];n=e[8]?Os(a):qn(a*255,0,255)}return i=+e[1],r=+e[3],s=+e[5],i=255&(e[2]?Os(i):qn(i,0,255)),r=255&(e[4]?Os(r):qn(r,0,255)),s=255&(e[6]?Os(s):qn(s,0,255)),{r:i,g:r,b:s,a:n}}}function KE(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${vn(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Sd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,ur=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function GE(t,e,n){const i=ur(vn(t.r)),r=ur(vn(t.g)),s=ur(vn(t.b));return{r:ai(Sd(i+n*(ur(vn(e.r))-i))),g:ai(Sd(r+n*(ur(vn(e.g))-r))),b:ai(Sd(s+n*(ur(vn(e.b))-s))),a:t.a+n*(e.a-t.a)}}function Do(t,e,n){if(t){let i=mg(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=vg(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function tk(t,e){return t&&Object.assign(e||{},t)}function D1(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ai(t[3]))):(e=tk(t,{r:0,g:0,b:0,a:1}),e.a=ai(e.a)),e}function YE(t){return t.charAt(0)==="r"?WE(t):FE(t)}class Ra{constructor(e){if(e instanceof Ra)return e;const n=typeof e;let i;n==="object"?i=D1(e):n==="string"&&(i=ME(e)||UE(e)||YE(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=tk(this._rgb);return e&&(e.a=vn(e.a)),e}set rgb(e){this._rgb=D1(e)}rgbString(){return this._valid?KE(this._rgb):void 0}hexString(){return this._valid?OE(this._rgb):void 0}hslString(){return this._valid?NE(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,r=e.rgb;let s;const a=n===s?.5:n,o=2*a-1,l=i.a-r.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;s=1-c,i.r=255&c*i.r+s*r.r+.5,i.g=255&c*i.g+s*r.g+.5,i.b=255&c*i.b+s*r.b+.5,i.a=a*i.a+(1-a)*r.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=GE(this._rgb,e._rgb,n)),this}clone(){return new Ra(this.rgb)}alpha(e){return this._rgb.a=ai(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=to(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Do(this._rgb,2,e),this}darken(e){return Do(this._rgb,2,-e),this}saturate(e){return Do(this._rgb,1,e),this}desaturate(e){return Do(this._rgb,1,-e),this}rotate(e){return BE(this._rgb,e),this}}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function hn(){}const qE=(()=>{let t=0;return()=>t++})();function ve(t){return t===null||typeof t>"u"}function Oe(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function te(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function It(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Jt(t,e){return It(t)?t:e}function G(t,e){return typeof t>"u"?e:t}const XE=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ce(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function ne(t,e,n,i){let r,s,a;if(Oe(t))for(s=t.length,r=0;r<s;r++)e.call(n,t[r],r);else if(te(t))for(a=Object.keys(t),s=a.length,r=0;r<s;r++)e.call(n,t[a[r]],a[r])}function Oc(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function Lc(t){if(Oe(t))return t.map(Lc);if(te(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=Lc(t[n[r]]);return e}return t}function nk(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function JE(t,e,n,i){if(!nk(t))return;const r=e[t],s=n[t];te(r)&&te(s)?Da(r,s,i):e[t]=Lc(s)}function Da(t,e,n){const i=Oe(e)?e:[e],r=i.length;if(!te(t))return t;n=n||{};const s=n.merger||JE;let a;for(let o=0;o<r;++o){if(a=i[o],!te(a))continue;const l=Object.keys(a);for(let c=0,d=l.length;c<d;++c)s(l[c],t,a,n)}return t}function Qs(t,e){return Da(t,e,{merger:QE})}function QE(t,e,n){if(!nk(t))return;const i=e[t],r=n[t];te(i)&&te(r)?Qs(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Lc(r))}const z1={"":t=>t,x:t=>t.x,y:t=>t.y};function ZE(t){const e=t.split("."),n=[];let i="";for(const r of e)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function eM(t){const e=ZE(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Rc(t,e){return(z1[e]||(z1[e]=eM(e)))(t)}function xg(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Dc=t=>typeof t<"u",hi=t=>typeof t=="function",I1=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function tM(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const De=Math.PI,un=2*De,nM=un+De,zc=Number.POSITIVE_INFINITY,iM=De/180,Wt=De/2,_i=De/4,$1=De*2/3,Of=Math.log10,Xr=Math.sign;function Zs(t,e,n){return Math.abs(t-e)<n}function F1(t){const e=Math.round(t);t=Zs(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Of(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function rM(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((r,s)=>r-s).pop(),e}function za(t){return!isNaN(parseFloat(t))&&isFinite(t)}function sM(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function aM(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Fi(t){return t*(De/180)}function oM(t){return t*(180/De)}function B1(t){if(!It(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function lM(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*De&&(s+=un),{angle:s,distance:r}}function Lf(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function cM(t,e){return(t-e+nM)%un-De}function $n(t){return(t%un+un)%un}function ik(t,e,n,i){const r=$n(t),s=$n(e),a=$n(n),o=$n(s-r),l=$n(a-r),c=$n(r-s),d=$n(r-a);return r===s||r===a||i&&s===a||o>l&&c<d}function At(t,e,n){return Math.max(e,Math.min(n,t))}function uM(t){return At(t,-32768,32767)}function Ls(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function bg(t,e,n){n=n||(a=>t[a]<e);let i=t.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const Bi=(t,e,n,i)=>bg(t,n,i?r=>{const s=t[r][e];return s<n||s===n&&t[r+1][e]===n}:r=>t[r][e]<n),dM=(t,e,n)=>bg(t,n,i=>t[i][e]>=n);function hM(t,e,n){let i=0,r=t.length;for(;i<r&&t[i]<e;)i++;for(;r>i&&t[r-1]>n;)r--;return i>0||r<t.length?t.slice(i,r):t}const rk=["push","pop","shift","splice","unshift"];function fM(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),rk.forEach(n=>{const i="_onData"+xg(n),r=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const a=r.apply(this,s);return t._chartjs.listeners.forEach(o=>{typeof o[i]=="function"&&o[i](...s)}),a}})})}function N1(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),!(i.length>0)&&(rk.forEach(s=>{delete t[s]}),delete t._chartjs)}function pM(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const sk=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function ak(t,e){let n=[],i=!1;return function(...r){n=r,i||(i=!0,sk.call(window,()=>{i=!1,t.apply(e,n)}))}}function gM(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const kg=t=>t==="start"?"left":t==="end"?"right":"center",We=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,mM=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function yM(t,e,n){const i=e.length;let r=0,s=i;if(t._sorted){const{iScale:a,_parsed:o}=t,l=a.axis,{min:c,max:d,minDefined:h,maxDefined:f}=a.getUserBounds();h&&(r=At(Math.min(Bi(o,l,c).lo,n?i:Bi(e,l,a.getPixelForValue(c)).lo),0,i-1)),f?s=At(Math.max(Bi(o,a.axis,d,!0).hi+1,n?0:Bi(e,l,a.getPixelForValue(d),!0).hi+1),r,i)-r:s=i-r}return{start:r,count:s}}function vM(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const s=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const zo=t=>t===0||t===1,V1=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*un/n)),U1=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*un/n)+1,ea={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Wt)+1,easeOutSine:t=>Math.sin(t*Wt),easeInOutSine:t=>-.5*(Math.cos(De*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>zo(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>zo(t)?t:V1(t,.075,.3),easeOutElastic:t=>zo(t)?t:U1(t,.075,.3),easeInOutElastic(t){return zo(t)?t:t<.5?.5*V1(t*2,.1125,.45):.5+.5*U1(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-ea.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?ea.easeInBounce(t*2)*.5:ea.easeOutBounce(t*2-1)*.5+.5};function wg(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function H1(t){return wg(t)?t:new Ra(t)}function Pd(t){return wg(t)?t:new Ra(t).saturate(.5).darken(.1).hexString()}const xM=["x","y","borderWidth","radius","tension"],bM=["color","borderColor","backgroundColor"];function kM(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:bM},numbers:{type:"number",properties:xM}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function wM(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const W1=new Map;function _M(t,e){e=e||{};const n=t+JSON.stringify(e);let i=W1.get(n);return i||(i=new Intl.NumberFormat(t,e),W1.set(n,i)),i}function ok(t,e,n){return _M(e,n).format(t)}const lk={values(t){return Oe(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(r="scientific"),s=jM(t,n)}const a=Of(Math.abs(s)),o=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:r,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),ok(t,i,l)},logarithmic(t,e,n){if(t===0)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(Of(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?lk.numeric.call(this,t,e,n):""}};function jM(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var ck={formatters:lk};function SM(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:ck.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Xi=Object.create(null),Rf=Object.create(null);function ta(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];t=t[s]||(t[s]=Object.create(null))}return t}function Cd(t,e,n){return typeof e=="string"?Da(ta(t,e),n):Da(ta(t,""),e)}class PM{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>Pd(r.backgroundColor),this.hoverBorderColor=(i,r)=>Pd(r.borderColor),this.hoverColor=(i,r)=>Pd(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Cd(this,e,n)}get(e){return ta(this,e)}describe(e,n){return Cd(Rf,e,n)}override(e,n){return Cd(Xi,e,n)}route(e,n,i,r){const s=ta(this,e),a=ta(this,i),o="_"+n;Object.defineProperties(s,{[o]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[o],c=a[r];return te(l)?Object.assign({},c,l):G(l,c)},set(l){this[o]=l}}})}apply(e){e.forEach(n=>n(this))}}var _e=new PM({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[kM,wM,SM]);function CM(t){return!t||ve(t.size)||ve(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function K1(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function ji(t,e,n){const i=t.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function G1(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Df(t,e,n,i){uk(t,e,n,i,null)}function uk(t,e,n,i,r){let s,a,o,l,c,d,h,f;const p=e.pointStyle,g=e.rotation,m=e.radius;let k=(g||0)*iM;if(p&&typeof p=="object"&&(s=p.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(k),t.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),t.restore();return}if(!(isNaN(m)||m<=0)){switch(t.beginPath(),p){default:r?t.ellipse(n,i,r/2,m,0,0,un):t.arc(n,i,m,0,un),t.closePath();break;case"triangle":d=r?r/2:m,t.moveTo(n+Math.sin(k)*d,i-Math.cos(k)*m),k+=$1,t.lineTo(n+Math.sin(k)*d,i-Math.cos(k)*m),k+=$1,t.lineTo(n+Math.sin(k)*d,i-Math.cos(k)*m),t.closePath();break;case"rectRounded":c=m*.516,l=m-c,a=Math.cos(k+_i)*l,h=Math.cos(k+_i)*(r?r/2-c:l),o=Math.sin(k+_i)*l,f=Math.sin(k+_i)*(r?r/2-c:l),t.arc(n-h,i-o,c,k-De,k-Wt),t.arc(n+f,i-a,c,k-Wt,k),t.arc(n+h,i+o,c,k,k+Wt),t.arc(n-f,i+a,c,k+Wt,k+De),t.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,d=r?r/2:l,t.rect(n-d,i-l,2*d,2*l);break}k+=_i;case"rectRot":h=Math.cos(k)*(r?r/2:m),a=Math.cos(k)*m,o=Math.sin(k)*m,f=Math.sin(k)*(r?r/2:m),t.moveTo(n-h,i-o),t.lineTo(n+f,i-a),t.lineTo(n+h,i+o),t.lineTo(n-f,i+a),t.closePath();break;case"crossRot":k+=_i;case"cross":h=Math.cos(k)*(r?r/2:m),a=Math.cos(k)*m,o=Math.sin(k)*m,f=Math.sin(k)*(r?r/2:m),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a);break;case"star":h=Math.cos(k)*(r?r/2:m),a=Math.cos(k)*m,o=Math.sin(k)*m,f=Math.sin(k)*(r?r/2:m),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a),k+=_i,h=Math.cos(k)*(r?r/2:m),a=Math.cos(k)*m,o=Math.sin(k)*m,f=Math.sin(k)*(r?r/2:m),t.moveTo(n-h,i-o),t.lineTo(n+h,i+o),t.moveTo(n+f,i-a),t.lineTo(n-f,i+a);break;case"line":a=r?r/2:Math.cos(k)*m,o=Math.sin(k)*m,t.moveTo(n-a,i-o),t.lineTo(n+a,i+o);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(k)*(r?r/2:m),i+Math.sin(k)*m);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Ia(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function _g(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function jg(t){t.restore()}function TM(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else r==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function EM(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function MM(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),ve(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function AM(t,e,n,i,r){if(r.strikethrough||r.underline){const s=t.measureText(i),a=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,l=n-s.actualBoundingBoxAscent,c=n+s.actualBoundingBoxDescent,d=r.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(a,d),t.lineTo(o,d),t.stroke()}}function OM(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function $a(t,e,n,i,r,s={}){const a=Oe(e)?e:[e],o=s.strokeWidth>0&&s.strokeColor!=="";let l,c;for(t.save(),t.font=r.string,MM(t,s),l=0;l<a.length;++l)c=a[l],s.backdrop&&OM(t,s.backdrop),o&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),ve(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,n,i,s.maxWidth)),t.fillText(c,n,i,s.maxWidth),AM(t,n,i,c,s),i+=Number(r.lineHeight);t.restore()}function zf(t,e){const{x:n,y:i,w:r,h:s,radius:a}=e;t.arc(n+a.topLeft,i+a.topLeft,a.topLeft,1.5*De,De,!0),t.lineTo(n,i+s-a.bottomLeft),t.arc(n+a.bottomLeft,i+s-a.bottomLeft,a.bottomLeft,De,Wt,!0),t.lineTo(n+r-a.bottomRight,i+s),t.arc(n+r-a.bottomRight,i+s-a.bottomRight,a.bottomRight,Wt,0,!0),t.lineTo(n+r,i+a.topRight),t.arc(n+r-a.topRight,i+a.topRight,a.topRight,0,-Wt,!0),t.lineTo(n+a.topLeft,i)}const LM=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,RM=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function DM(t,e){const n=(""+t).match(LM);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const zM=t=>+t||0;function dk(t,e){const n={},i=te(e),r=i?Object.keys(e):e,s=te(t)?i?a=>G(t[a],t[e[a]]):a=>t[a]:()=>t;for(const a of r)n[a]=zM(s(a));return n}function IM(t){return dk(t,{top:"y",right:"x",bottom:"y",left:"x"})}function na(t){return dk(t,["topLeft","topRight","bottomLeft","bottomRight"])}function $t(t){const e=IM(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Ge(t,e){t=t||{},e=e||_e.font;let n=G(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=G(t.style,e.style);i&&!(""+i).match(RM)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:G(t.family,e.family),lineHeight:DM(G(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:G(t.weight,e.weight),string:""};return r.string=CM(r),r}function Io(t,e,n,i){let r,s,a;for(r=0,s=t.length;r<s;++r)if(a=t[r],a!==void 0&&a!==void 0)return a}function $M(t,e,n){const{min:i,max:r}=t,s=XE(e,(r-i)/2),a=(o,l)=>n&&o===0?0:o+l;return{min:a(i,-Math.abs(s)),max:a(r,s)}}function ir(t,e){return Object.assign(Object.create(t),e)}function Sg(t,e=[""],n,i,r=()=>t[0]){const s=n||t;typeof i>"u"&&(i=gk("_fallback",t));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:i,_getTarget:r,override:o=>Sg([o,...t],e,s,i)};return new Proxy(a,{deleteProperty(o,l){return delete o[l],delete o._keys,delete t[0][l],!0},get(o,l){return fk(o,l,()=>KM(l,e,t,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(o,l){return q1(o).includes(l)},ownKeys(o){return q1(o)},set(o,l,c){const d=o._storage||(o._storage=r());return o[l]=d[l]=c,delete o._keys,!0}})}function Jr(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:hk(t,i),setContext:s=>Jr(t,s,n,i),override:s=>Jr(t.override(s),e,n,i)};return new Proxy(r,{deleteProperty(s,a){return delete s[a],delete t[a],!0},get(s,a,o){return fk(s,a,()=>BM(s,a,o))},getOwnPropertyDescriptor(s,a){return s._descriptors.allKeys?Reflect.has(t,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,a)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,a){return Reflect.has(t,a)},ownKeys(){return Reflect.ownKeys(t)},set(s,a,o){return t[a]=o,delete s[a],!0}})}function hk(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:hi(n)?n:()=>n,isIndexable:hi(i)?i:()=>i}}const FM=(t,e)=>t?t+xg(e):e,Pg=(t,e)=>te(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function fk(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function BM(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:a}=t;let o=i[e];return hi(o)&&a.isScriptable(e)&&(o=NM(e,o,t,n)),Oe(o)&&o.length&&(o=VM(e,o,t,a.isIndexable)),Pg(e,o)&&(o=Jr(o,r,s&&s[e],a)),o}function NM(t,e,n,i){const{_proxy:r,_context:s,_subProxy:a,_stack:o}=n;if(o.has(t))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);o.add(t);let l=e(s,a||i);return o.delete(t),Pg(t,l)&&(l=Cg(r._scopes,r,t,l)),l}function VM(t,e,n,i){const{_proxy:r,_context:s,_subProxy:a,_descriptors:o}=n;if(typeof s.index<"u"&&i(t))return e[s.index%e.length];if(te(e[0])){const l=e,c=r._scopes.filter(d=>d!==l);e=[];for(const d of l){const h=Cg(c,r,t,d);e.push(Jr(h,s,a&&a[t],o))}}return e}function pk(t,e,n){return hi(t)?t(e,n):t}const UM=(t,e)=>t===!0?e:typeof t=="string"?Rc(e,t):void 0;function HM(t,e,n,i,r){for(const s of e){const a=UM(n,s);if(a){t.add(a);const o=pk(a._fallback,n,r);if(typeof o<"u"&&o!==n&&o!==i)return o}else if(a===!1&&typeof i<"u"&&n!==i)return null}return!1}function Cg(t,e,n,i){const r=e._rootScopes,s=pk(e._fallback,n,i),a=[...t,...r],o=new Set;o.add(i);let l=Y1(o,a,n,s||n,i);return l===null||typeof s<"u"&&s!==n&&(l=Y1(o,a,s,l,i),l===null)?!1:Sg(Array.from(o),[""],r,s,()=>WM(e,n,i))}function Y1(t,e,n,i,r){for(;n;)n=HM(t,e,n,i,r);return n}function WM(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return Oe(r)&&te(n)?n:r||{}}function KM(t,e,n,i){let r;for(const s of e)if(r=gk(FM(s,t),n),typeof r<"u")return Pg(t,r)?Cg(n,i,t,r):r}function gk(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function q1(t){let e=t._keys;return e||(e=t._keys=GM(t._scopes)),e}function GM(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))e.add(i);return Array.from(e)}const YM=Number.EPSILON||1e-14,Qr=(t,e)=>e<t.length&&!t[e].skip&&t[e],mk=t=>t==="x"?"y":"x";function qM(t,e,n,i){const r=t.skip?e:t,s=e,a=n.skip?e:n,o=Lf(s,r),l=Lf(a,s);let c=o/(o+l),d=l/(o+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=i*c,f=i*d;return{previous:{x:s.x-h*(a.x-r.x),y:s.y-h*(a.y-r.y)},next:{x:s.x+f*(a.x-r.x),y:s.y+f*(a.y-r.y)}}}function XM(t,e,n){const i=t.length;let r,s,a,o,l,c=Qr(t,0);for(let d=0;d<i-1;++d)if(l=c,c=Qr(t,d+1),!(!l||!c)){if(Zs(e[d],0,YM)){n[d]=n[d+1]=0;continue}r=n[d]/e[d],s=n[d+1]/e[d],o=Math.pow(r,2)+Math.pow(s,2),!(o<=9)&&(a=3/Math.sqrt(o),n[d]=r*a*e[d],n[d+1]=s*a*e[d])}}function JM(t,e,n="x"){const i=mk(n),r=t.length;let s,a,o,l=Qr(t,0);for(let c=0;c<r;++c){if(a=o,o=l,l=Qr(t,c+1),!o)continue;const d=o[n],h=o[i];a&&(s=(d-a[n])/3,o[`cp1${n}`]=d-s,o[`cp1${i}`]=h-s*e[c]),l&&(s=(l[n]-d)/3,o[`cp2${n}`]=d+s,o[`cp2${i}`]=h+s*e[c])}}function QM(t,e="x"){const n=mk(e),i=t.length,r=Array(i).fill(0),s=Array(i);let a,o,l,c=Qr(t,0);for(a=0;a<i;++a)if(o=l,l=c,c=Qr(t,a+1),!!l){if(c){const d=c[e]-l[e];r[a]=d!==0?(c[n]-l[n])/d:0}s[a]=o?c?Xr(r[a-1])!==Xr(r[a])?0:(r[a-1]+r[a])/2:r[a-1]:r[a]}XM(t,r,s),JM(t,s,e)}function $o(t,e,n){return Math.max(Math.min(t,n),e)}function ZM(t,e){let n,i,r,s,a,o=Ia(t[0],e);for(n=0,i=t.length;n<i;++n)a=s,s=o,o=n<i-1&&Ia(t[n+1],e),s&&(r=t[n],a&&(r.cp1x=$o(r.cp1x,e.left,e.right),r.cp1y=$o(r.cp1y,e.top,e.bottom)),o&&(r.cp2x=$o(r.cp2x,e.left,e.right),r.cp2y=$o(r.cp2y,e.top,e.bottom)))}function eA(t,e,n,i,r){let s,a,o,l;if(e.spanGaps&&(t=t.filter(c=>!c.skip)),e.cubicInterpolationMode==="monotone")QM(t,r);else{let c=i?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)o=t[s],l=qM(c,o,t[Math.min(s+1,a-(i?0:1))%a],e.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}e.capBezierPoints&&ZM(t,n)}function Tg(){return typeof window<"u"&&typeof document<"u"}function Eg(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Ic(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Pu=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function tA(t,e){return Pu(t).getPropertyValue(e)}const nA=["top","right","bottom","left"];function Hi(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=nA[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const iA=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function rA(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:r,offsetY:s}=i;let a=!1,o,l;if(iA(r,s,t.target))o=r,l=s;else{const c=e.getBoundingClientRect();o=i.clientX-c.left,l=i.clientY-c.top,a=!0}return{x:o,y:l,box:a}}function Oi(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,r=Pu(n),s=r.boxSizing==="border-box",a=Hi(r,"padding"),o=Hi(r,"border","width"),{x:l,y:c,box:d}=rA(t,n),h=a.left+(d&&o.left),f=a.top+(d&&o.top);let{width:p,height:g}=e;return s&&(p-=a.width+o.width,g-=a.height+o.height),{x:Math.round((l-h)/p*n.width/i),y:Math.round((c-f)/g*n.height/i)}}function sA(t,e,n){let i,r;if(e===void 0||n===void 0){const s=t&&Eg(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const a=s.getBoundingClientRect(),o=Pu(s),l=Hi(o,"border","width"),c=Hi(o,"padding");e=a.width-c.width-l.width,n=a.height-c.height-l.height,i=Ic(o.maxWidth,s,"clientWidth"),r=Ic(o.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:i||zc,maxHeight:r||zc}}const Fo=t=>Math.round(t*10)/10;function aA(t,e,n,i){const r=Pu(t),s=Hi(r,"margin"),a=Ic(r.maxWidth,t,"clientWidth")||zc,o=Ic(r.maxHeight,t,"clientHeight")||zc,l=sA(t,e,n);let{width:c,height:d}=l;if(r.boxSizing==="content-box"){const f=Hi(r,"border","width"),p=Hi(r,"padding");c-=p.width+f.width,d-=p.height+f.height}return c=Math.max(0,c-s.width),d=Math.max(0,i?c/i:d-s.height),c=Fo(Math.min(c,a,l.maxWidth)),d=Fo(Math.min(d,o,l.maxHeight)),c&&!d&&(d=Fo(c/2)),(e!==void 0||n!==void 0)&&i&&l.height&&d>l.height&&(d=l.height,c=Fo(Math.floor(d*i))),{width:c,height:d}}function X1(t,e,n){const i=e||1,r=Math.floor(t.height*i),s=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||a.height!==r||a.width!==s?(t.currentDevicePixelRatio=i,a.height=r,a.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const oA=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Tg()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function J1(t,e){const n=tA(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Li(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function lA(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function cA(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=Li(t,r,n),o=Li(r,s,n),l=Li(s,e,n),c=Li(a,o,n),d=Li(o,l,n);return Li(c,d,n)}const uA=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},dA=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function zr(t,e,n){return t?uA(e,n):dA()}function yk(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function vk(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function xk(t){return t==="angle"?{between:ik,compare:cM,normalize:$n}:{between:Ls,compare:(e,n)=>e-n,normalize:e=>e}}function Q1({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function hA(t,e,n){const{property:i,start:r,end:s}=n,{between:a,normalize:o}=xk(i),l=e.length;let{start:c,end:d,loop:h}=t,f,p;if(h){for(c+=l,d+=l,f=0,p=l;f<p&&a(o(e[c%l][i]),r,s);++f)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:t.style}}function fA(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,a=e.length,{compare:o,between:l,normalize:c}=xk(i),{start:d,end:h,loop:f,style:p}=hA(t,e,n),g=[];let m=!1,k=null,v,y,b;const w=()=>l(r,b,v)&&o(r,b)!==0,_=()=>o(s,v)===0||l(s,b,v),C=()=>m||w(),S=()=>!m||_();for(let P=d,T=d;P<=h;++P)y=e[P%a],!y.skip&&(v=c(y[i]),v!==b&&(m=l(v,r,s),k===null&&C()&&(k=o(v,r)===0?P:T),k!==null&&S()&&(g.push(Q1({start:k,end:P,loop:f,count:a,style:p})),k=null),T=P,b=v));return k!==null&&g.push(Q1({start:k,end:h,loop:f,count:a,style:p})),g}function pA(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=fA(i[r],t.points,e);s.length&&n.push(...s)}return n}function gA(t,e,n,i){let r=0,s=e-1;if(n&&!i)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,n&&(s+=r);s>r&&t[s%e].skip;)s--;return s%=e,{start:r,end:s}}function mA(t,e,n,i){const r=t.length,s=[];let a=e,o=t[e],l;for(l=e+1;l<=n;++l){const c=t[l%r];c.skip||c.stop?o.skip||(i=!1,s.push({start:e%r,end:(l-1)%r,loop:i}),e=a=c.stop?l:null):(a=l,o.skip&&(e=l)),o=c}return a!==null&&s.push({start:e%r,end:a%r,loop:i}),s}function yA(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:a,end:o}=gA(n,r,s,i);if(i===!0)return Z1(t,[{start:a,end:o,loop:s}],n,e);const l=o<a?o+r:o,c=!!t._fullLoop&&a===0&&o===r-1;return Z1(t,mA(n,a,l,c),n,e)}function Z1(t,e,n,i){return!i||!i.setContext||!n?e:vA(t,e,n,i)}function vA(t,e,n,i){const r=t._chart.getContext(),s=e2(t.options),{_datasetIndex:a,options:{spanGaps:o}}=t,l=n.length,c=[];let d=s,h=e[0].start,f=h;function p(g,m,k,v){const y=o?-1:1;if(g!==m){for(g+=l;n[g%l].skip;)g-=y;for(;n[m%l].skip;)m+=y;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:k,style:v}),d=v,h=m%l)}}for(const g of e){h=o?h:g.start;let m=n[h%l],k;for(f=h+1;f<=g.end;f++){const v=n[f%l];k=e2(i.setContext(ir(r,{type:"segment",p0:m,p1:v,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:a}))),xA(k,d)&&p(h,f-1,g.loop,d),m=v,d=k}h<f-1&&p(h,f-1,g.loop,d)}return c}function e2(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function xA(t,e){if(!e)return!1;const n=[],i=function(r,s){return wg(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,i)!==JSON.stringify(e,i)}/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class bA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,r){const s=n.listeners[r],a=n.duration;s.forEach(o=>o({chart:e,initial:n.initial,numSteps:a,currentStep:Math.min(i-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=sk.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let a=s.length-1,o=!1,l;for(;a>=0;--a)l=s[a],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(e),o=!0):(s[a]=s[s.length-1],s.pop());o&&(r.draw(),this._notify(r,i,e,"progress")),s.length||(i.running=!1,this._notify(r,i,e,"complete"),i.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var pn=new bA;const t2="transparent",kA={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=H1(t||t2),r=i.valid&&H1(e||t2);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class wA{constructor(e,n,i,r){const s=n[i];r=Io([e.to,r,s,e.from]);const a=Io([e.from,s,r]);this._active=!0,this._fn=e.fn||kA[e.type||typeof a],this._easing=ea[e.easing]||ea.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,a=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=Io([e.to,n,r,e.from]),this._from=Io([e.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,r=this._prop,s=this._from,a=this._loop,o=this._to;let l;if(this._active=s!==o&&(a||n<i),!this._active){this._target[r]=o,this._notify(!0);return}if(n<0){this._target[r]=s;return}l=n/i%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(s,o,l)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class bk{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!te(e))return;const n=Object.keys(_e.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{const s=e[r];if(!te(s))return;const a={};for(const o of n)a[o]=s[o];(Oe(s.properties)&&s.properties||[r]).forEach(o=>{(o===r||!i.has(o))&&i.set(o,a)})})}_animateOptions(e,n){const i=n.options,r=jA(e,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&_A(e.options.$animations,i).then(()=>{e.options=i},()=>{}),s}_createAnimations(e,n){const i=this._properties,r=[],s=e.$animations||(e.$animations={}),a=Object.keys(n),o=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){r.push(...this._animateOptions(e,n));continue}const d=n[c];let h=s[c];const f=i.get(c);if(h)if(f&&h.active()){h.update(f,d,o);continue}else h.cancel();if(!f||!f.duration){e[c]=d;continue}s[c]=h=new wA(f,e,c,d),r.push(h)}return r}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return pn.add(this._chart,i),!0}}function _A(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const s=t[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function jA(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function n2(t,e){const n=t&&t.options||{},i=n.reverse,r=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:i?s:r,end:i?r:s}}function SA(t,e,n){if(n===!1)return!1;const i=n2(t,n),r=n2(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function PA(t){let e,n,i,r;return te(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r,disabled:t===!1}}function kk(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function i2(t,e,n,i={}){const r=t.keys,s=i.mode==="single";let a,o,l,c;if(e===null)return;let d=!1;for(a=0,o=r.length;a<o;++a){if(l=+r[a],l===n){if(d=!0,i.all)continue;break}c=t.values[l],It(c)&&(s||e===0||Xr(e)===Xr(c))&&(e+=c)}return!d&&!i.all?0:e}function CA(t,e){const{iScale:n,vScale:i}=e,r=n.axis==="x"?"x":"y",s=i.axis==="x"?"x":"y",a=Object.keys(t),o=new Array(a.length);let l,c,d;for(l=0,c=a.length;l<c;++l)d=a[l],o[l]={[r]:d,[s]:t[d]};return o}function Td(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function TA(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function EA(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function MA(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function r2(t,e,n,i){for(const r of e.getMatchingVisibleMetas(i).reverse()){const s=t[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function s2(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:a,index:o}=i,l=s.axis,c=a.axis,d=TA(s,a,i),h=e.length;let f;for(let p=0;p<h;++p){const g=e[p],{[l]:m,[c]:k}=g,v=g._stacks||(g._stacks={});f=v[c]=MA(r,d,m),f[o]=k,f._top=r2(f,a,!0,i.type),f._bottom=r2(f,a,!1,i.type);const y=f._visualValues||(f._visualValues={});y[o]=k}}function Ed(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function AA(t,e){return ir(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function OA(t,e,n){return ir(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function ks(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const r of e){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n],s[i]._visualValues!==void 0&&s[i]._visualValues[n]!==void 0&&delete s[i]._visualValues[n]}}}const Md=t=>t==="reset"||t==="none",a2=(t,e)=>e?t:Object.assign({},t),LA=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:kk(n,!0),values:null};class ia{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Td(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&ks(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(h,f,p,g)=>h==="x"?f:h==="r"?g:p,s=n.xAxisID=G(i.xAxisID,Ed(e,"x")),a=n.yAxisID=G(i.yAxisID,Ed(e,"y")),o=n.rAxisID=G(i.rAxisID,Ed(e,"r")),l=n.indexAxis,c=n.iAxisID=r(l,s,a,o),d=n.vAxisID=r(l,a,s,o);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(o),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&N1(this._data,this),e._stacked&&ks(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(te(n)){const r=this._cachedMeta;this._data=CA(n,r)}else if(i!==n){if(i){N1(i,this);const r=this._cachedMeta;ks(r),r._parsed=[]}n&&Object.isExtensible(n)&&fM(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=Td(n.vScale,n),n.stack!==i.stack&&(r=!0,ks(n),n.stack=i.stack),this._resyncElements(e),(r||s!==n._stacked)&&(s2(this,n._parsed),n._stacked=Td(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:a}=i,o=s.axis;let l=e===0&&n===r.length?!0:i._sorted,c=e>0&&i._parsed[e-1],d,h,f;if(this._parsing===!1)i._parsed=r,i._sorted=!0,f=r;else{Oe(r[e])?f=this.parseArrayData(i,r,e,n):te(r[e])?f=this.parseObjectData(i,r,e,n):f=this.parsePrimitiveData(i,r,e,n);const p=()=>h[o]===null||c&&h[o]<c[o];for(d=0;d<n;++d)i._parsed[d+e]=h=f[d],l&&(p()&&(l=!1),c=h);i._sorted=l}a&&s2(this,f)}parsePrimitiveData(e,n,i,r){const{iScale:s,vScale:a}=e,o=s.axis,l=a.axis,c=s.getLabels(),d=s===a,h=new Array(r);let f,p,g;for(f=0,p=r;f<p;++f)g=f+i,h[f]={[o]:d||s.parse(c[g],g),[l]:a.parse(n[g],g)};return h}parseArrayData(e,n,i,r){const{xScale:s,yScale:a}=e,o=new Array(r);let l,c,d,h;for(l=0,c=r;l<c;++l)d=l+i,h=n[d],o[l]={x:s.parse(h[0],d),y:a.parse(h[1],d)};return o}parseObjectData(e,n,i,r){const{xScale:s,yScale:a}=e,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(r);let d,h,f,p;for(d=0,h=r;d<h;++d)f=d+i,p=n[f],c[d]={x:s.parse(Rc(p,o),f),y:a.parse(Rc(p,l),f)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const r=this.chart,s=this._cachedMeta,a=n[e.axis],o={keys:kk(r,!0),values:n._stacks[e.axis]._visualValues};return i2(o,a,s.index,{mode:i})}updateRangeFromParsed(e,n,i,r){const s=i[n.axis];let a=s===null?NaN:s;const o=r&&i._stacks[n.axis];r&&o&&(r.values=o,a=i2(r,s,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&e===i.iScale,a=r.length,o=this._getOtherScale(e),l=LA(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=EA(o);let f,p;function g(){p=r[f];const m=p[o.axis];return!It(p[e.axis])||d>m||h<m}for(f=0;f<a&&!(!g()&&(this.updateRangeFromParsed(c,e,p,l),s));++f);if(s){for(f=a-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(c,e,p,l);break}}return c}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let r,s,a;for(r=0,s=n.length;r<s;++r)a=n[r][e.axis],It(a)&&i.push(a);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(e);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=PA(G(this.options.clip,SA(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(e,s,o,l),d=o;d<o+l;++d){const h=r[d];h.hidden||(h.active&&c?a.push(h):h.draw(e,s))}for(d=0;d<a.length;++d)a[d].draw(e,s)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const r=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const a=this._cachedMeta.data[e];s=a.$context||(a.$context=OA(this.getContext(),e,a)),s.parsed=this.getParsed(e),s.raw=r.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=AA(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const r=n==="active",s=this._cachedDataOpts,a=e+"-"+n,o=s[a],l=this.enableOptionSharing&&Dc(i);if(o)return a2(o,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,e),h=r?[`${e}Hover`,"hover",e,""]:[e,""],f=c.getOptionScopes(this.getDataset(),d),p=Object.keys(_e.elements[e]),g=()=>this.getContext(i,r,n),m=c.resolveNamedOptions(f,p,g,h);return m.$shared&&(m.$shared=l,s[a]=Object.freeze(a2(m,l))),m}_resolveAnimations(e,n,i){const r=this.chart,s=this._cachedDataOpts,a=`animation-${n}`,o=s[a];if(o)return o;let l;if(r.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,n),f=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(f,this.getContext(e,i,n))}const c=new bk(r,l&&l.animations);return l&&l._cacheable&&(s[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Md(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),r=this._sharedOptions,s=this.getSharedOptions(i),a=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:a}}updateElement(e,n,i,r){Md(r)?Object.assign(e,i):this._resolveAnimations(n,r).update(e,i)}updateSharedOptions(e,n,i){e&&!Md(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,r){e.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(e,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const r=i.length,s=n.length,a=Math.min(s,r);a&&this.parse(0,a),s>r?this._insertElements(r,s-r,e):s<r&&this._removeElements(s,r-s)}_insertElements(e,n,i=!0){const r=this._cachedMeta,s=r.data,a=e+n;let o;const l=c=>{for(c.length+=n,o=c.length-1;o>=a;o--)c[o]=c[o-n]};for(l(s),o=e;o<a;++o)s[o]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(e,n),i&&this.updateElements(s,e,n,"reset")}updateElements(e,n,i,r){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(e,n);i._stacked&&ks(i,r)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,r]=e;this[n](i,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}V(ia,"defaults",{}),V(ia,"datasetElementType",null),V(ia,"dataElementType",null);class Nl extends ia{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,a=this.chart._animationsDisabled;let{start:o,count:l}=yM(n,r,a);this._drawStart=o,this._drawCount=l,vM(n)&&(o=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=r;const c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:c},e),this.updateElements(r,o,l,e)}updateElements(e,n,i,r){const s=r==="reset",{iScale:a,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(n,r),f=a.axis,p=o.axis,{spanGaps:g,segment:m}=this.options,k=za(g)?g:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||s||r==="none",y=n+i,b=e.length;let w=n>0&&this.getParsed(n-1);for(let _=0;_<b;++_){const C=e[_],S=v?C:{};if(_<n||_>=y){S.skip=!0;continue}const P=this.getParsed(_),T=ve(P[p]),M=S[f]=a.getPixelForValue(P[f],_),L=S[p]=s||T?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,P,l):P[p],_);S.skip=isNaN(M)||isNaN(L)||T,S.stop=_>0&&Math.abs(P[f]-w[f])>k,m&&(S.parsed=P,S.raw=c.data[_]),h&&(S.options=d||this.resolveDataElementOptions(_,C.active?"active":r)),v||this.updateElement(C,_,S,r),w=P}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return i;const s=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,s,a)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}V(Nl,"id","line"),V(Nl,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),V(Nl,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Si(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Mg{constructor(e){V(this,"options");this.options=e||{}}static override(e){Object.assign(Mg.prototype,e)}init(){}formats(){return Si()}parse(){return Si()}format(){return Si()}add(){return Si()}diff(){return Si()}startOf(){return Si()}endOf(){return Si()}}var RA={_date:Mg};function DA(t,e,n,i){const{controller:r,data:s,_sorted:a}=t,o=r._cachedMeta.iScale;if(o&&e===o.axis&&e!=="r"&&a&&s.length){const l=o._reversePixels?dM:Bi;if(i){if(r._sharedOptions){const c=s[0],d=typeof c.getRange=="function"&&c.getRange(e);if(d){const h=l(s,e,n-d),f=l(s,e,n+d);return{lo:h.lo,hi:f.hi}}}}else return l(s,e,n)}return{lo:0,hi:s.length-1}}function no(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),a=n[e];for(let o=0,l=s.length;o<l;++o){const{index:c,data:d}=s[o],{lo:h,hi:f}=DA(s[o],e,a,r);for(let p=h;p<=f;++p){const g=d[p];g.skip||i(g,c,p)}}}function zA(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,r){const s=e?Math.abs(i.x-r.x):0,a=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(a,2))}}function Ad(t,e,n,i,r){const s=[];return!r&&!t.isPointInArea(e)||no(t,n,e,function(o,l,c){!r&&!Ia(o,t.chartArea,0)||o.inRange(e.x,e.y,i)&&s.push({element:o,datasetIndex:l,index:c})},!0),s}function IA(t,e,n,i){let r=[];function s(a,o,l){const{startAngle:c,endAngle:d}=a.getProps(["startAngle","endAngle"],i),{angle:h}=lM(a,{x:e.x,y:e.y});ik(h,c,d)&&r.push({element:a,datasetIndex:o,index:l})}return no(t,n,e,s),r}function $A(t,e,n,i,r,s){let a=[];const o=zA(n);let l=Number.POSITIVE_INFINITY;function c(d,h,f){const p=d.inRange(e.x,e.y,r);if(i&&!p)return;const g=d.getCenterPoint(r);if(!(!!s||t.isPointInArea(g))&&!p)return;const k=o(e,g);k<l?(a=[{element:d,datasetIndex:h,index:f}],l=k):k===l&&a.push({element:d,datasetIndex:h,index:f})}return no(t,n,e,c),a}function Od(t,e,n,i,r,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!i?IA(t,e,n,r):$A(t,e,n,i,r,s)}function o2(t,e,n,i,r){const s=[],a=n==="x"?"inXRange":"inYRange";let o=!1;return no(t,n,e,(l,c,d)=>{l[a]&&l[a](e[n],r)&&(s.push({element:l,datasetIndex:c,index:d}),o=o||l.inRange(e.x,e.y,r))}),i&&!o?[]:s}var FA={evaluateInteractionItems:no,modes:{index(t,e,n,i){const r=Oi(e,t),s=n.axis||"x",a=n.includeInvisible||!1,o=n.intersect?Ad(t,r,s,i,a):Od(t,r,s,!1,i,a),l=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(c=>{const d=o[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(t,e,n,i){const r=Oi(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;let o=n.intersect?Ad(t,r,s,i,a):Od(t,r,s,!1,i,a);if(o.length>0){const l=o[0].datasetIndex,c=t.getDatasetMeta(l).data;o=[];for(let d=0;d<c.length;++d)o.push({element:c[d],datasetIndex:l,index:d})}return o},point(t,e,n,i){const r=Oi(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;return Ad(t,r,s,i,a)},nearest(t,e,n,i){const r=Oi(e,t),s=n.axis||"xy",a=n.includeInvisible||!1;return Od(t,r,s,n.intersect,i,a)},x(t,e,n,i){const r=Oi(e,t);return o2(t,r,"x",n.intersect,i)},y(t,e,n,i){const r=Oi(e,t);return o2(t,r,"y",n.intersect,i)}}};const wk=["left","top","right","bottom"];function ws(t,e){return t.filter(n=>n.pos===e)}function l2(t,e){return t.filter(n=>wk.indexOf(n.pos)===-1&&n.box.axis===e)}function _s(t,e){return t.sort((n,i)=>{const r=e?i:n,s=e?n:i;return r.weight===s.weight?r.index-s.index:r.weight-s.weight})}function BA(t){const e=[];let n,i,r,s,a,o;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],{position:s,options:{stack:a,stackWeight:o=1}}=r,e.push({index:n,box:r,pos:s,horizontal:r.isHorizontal(),weight:r.weight,stack:a&&s+a,stackWeight:o});return e}function NA(t){const e={};for(const n of t){const{stack:i,pos:r,stackWeight:s}=n;if(!i||!wk.includes(r))continue;const a=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=s}return e}function VA(t,e){const n=NA(t),{vBoxMaxWidth:i,hBoxMaxHeight:r}=e;let s,a,o;for(s=0,a=t.length;s<a;++s){o=t[s];const{fullSize:l}=o.box,c=n[o.stack],d=c&&o.stackWeight/c.weight;o.horizontal?(o.width=d?d*i:l&&e.availableWidth,o.height=r):(o.width=i,o.height=d?d*r:l&&e.availableHeight)}return n}function UA(t){const e=BA(t),n=_s(e.filter(c=>c.box.fullSize),!0),i=_s(ws(e,"left"),!0),r=_s(ws(e,"right")),s=_s(ws(e,"top"),!0),a=_s(ws(e,"bottom")),o=l2(e,"x"),l=l2(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(l).concat(a).concat(o),chartArea:ws(e,"chartArea"),vertical:i.concat(r).concat(l),horizontal:s.concat(a).concat(o)}}function c2(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function _k(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function HA(t,e,n,i){const{pos:r,box:s}=n,a=t.maxPadding;if(!te(r)){n.size&&(t[r]-=n.size);const h=i[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?s.height:s.width),n.size=h.size/h.count,t[r]+=n.size}s.getPadding&&_k(a,s.getPadding());const o=Math.max(0,e.outerWidth-c2(a,t,"left","right")),l=Math.max(0,e.outerHeight-c2(a,t,"top","bottom")),c=o!==t.w,d=l!==t.h;return t.w=o,t.h=l,n.horizontal?{same:c,other:d}:{same:d,other:c}}function WA(t){const e=t.maxPadding;function n(i){const r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function KA(t,e){const n=e.maxPadding;function i(r){const s={left:0,top:0,right:0,bottom:0};return r.forEach(a=>{s[a]=Math.max(e[a],n[a])}),s}return i(t?["left","right"]:["top","bottom"])}function Rs(t,e,n,i){const r=[];let s,a,o,l,c,d;for(s=0,a=t.length,c=0;s<a;++s){o=t[s],l=o.box,l.update(o.width||e.w,o.height||e.h,KA(o.horizontal,e));const{same:h,other:f}=HA(e,n,o,i);c|=h&&r.length,d=d||f,l.fullSize||r.push(o)}return c&&Rs(r,e,n,i)||d}function Bo(t,e,n,i,r){t.top=n,t.left=e,t.right=e+i,t.bottom=n+r,t.width=i,t.height=r}function u2(t,e,n,i){const r=n.padding;let{x:s,y:a}=e;for(const o of t){const l=o.box,c=i[o.stack]||{count:1,placed:0,weight:1},d=o.stackWeight/c.weight||1;if(o.horizontal){const h=e.w*d,f=c.size||l.height;Dc(c.start)&&(a=c.start),l.fullSize?Bo(l,r.left,a,n.outerWidth-r.right-r.left,f):Bo(l,e.left+c.placed,a,h,f),c.start=a,c.placed+=h,a=l.bottom}else{const h=e.h*d,f=c.size||l.width;Dc(c.start)&&(s=c.start),l.fullSize?Bo(l,s,r.top,f,n.outerHeight-r.bottom-r.top):Bo(l,s,e.top+c.placed,f,h),c.start=s,c.placed+=h,s=l.right}}e.x=s,e.y=a}var Ot={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=$t(t.options.layout.padding),s=Math.max(e-r.width,0),a=Math.max(n-r.height,0),o=UA(t.boxes),l=o.vertical,c=o.horizontal;ne(t.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=l.reduce((m,k)=>k.box.options&&k.box.options.display===!1?m:m+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/d,hBoxMaxHeight:a/2}),f=Object.assign({},r);_k(f,$t(i));const p=Object.assign({maxPadding:f,w:s,h:a,x:r.left,y:r.top},r),g=VA(l.concat(c),h);Rs(o.fullSize,p,h,g),Rs(l,p,h,g),Rs(c,p,h,g)&&Rs(l,p,h,g),WA(p),u2(o.leftAndTop,p,h,g),p.x+=p.w,p.y+=p.h,u2(o.rightAndBottom,p,h,g),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},ne(o.chartArea,m=>{const k=m.box;Object.assign(k,t.chartArea),k.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class jk{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,r){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(e){return!0}updateConfig(e){}}class GA extends jk{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Vl="$chartjs",YA={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},d2=t=>t===null||t==="";function qA(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[Vl]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",d2(r)){const s=J1(t,"width");s!==void 0&&(t.width=s)}if(d2(i))if(t.style.height==="")t.height=t.width/(e||2);else{const s=J1(t,"height");s!==void 0&&(t.height=s)}return t}const Sk=oA?{passive:!0}:!1;function XA(t,e,n){t&&t.addEventListener(e,n,Sk)}function JA(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,Sk)}function QA(t,e){const n=YA[t.type]||t.type,{x:i,y:r}=Oi(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:r!==void 0?r:null}}function $c(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function ZA(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let a=!1;for(const o of s)a=a||$c(o.addedNodes,i),a=a&&!$c(o.removedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function eO(t,e,n){const i=t.canvas,r=new MutationObserver(s=>{let a=!1;for(const o of s)a=a||$c(o.removedNodes,i),a=a&&!$c(o.addedNodes,i);a&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const Fa=new Map;let h2=0;function Pk(){const t=window.devicePixelRatio;t!==h2&&(h2=t,Fa.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function tO(t,e){Fa.size||window.addEventListener("resize",Pk),Fa.set(t,e)}function nO(t){Fa.delete(t),Fa.size||window.removeEventListener("resize",Pk)}function iO(t,e,n){const i=t.canvas,r=i&&Eg(i);if(!r)return;const s=ak((o,l)=>{const c=r.clientWidth;n(o,l),c<r.clientWidth&&n()},window),a=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||s(c,d)});return a.observe(r),tO(t,s),a}function Ld(t,e,n){n&&n.disconnect(),e==="resize"&&nO(t)}function rO(t,e,n){const i=t.canvas,r=ak(s=>{t.ctx!==null&&n(QA(s,t))},t);return XA(i,e,r),r}class sO extends jk{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(qA(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Vl])return!1;const i=n[Vl].initial;["height","width"].forEach(s=>{const a=i[s];ve(a)?n.removeAttribute(s):n.setAttribute(s,a)});const r=i.style||{};return Object.keys(r).forEach(s=>{n.style[s]=r[s]}),n.width=n.width,delete n[Vl],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const r=e.$proxies||(e.$proxies={}),a={attach:ZA,detach:eO,resize:iO}[n]||rO;r[n]=a(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),r=i[n];if(!r)return;({attach:Ld,detach:Ld,resize:Ld}[n]||JA)(e,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,r){return aA(e,n,i,r)}isAttached(e){const n=e&&Eg(e);return!!(n&&n.isConnected)}}function aO(t){return!Tg()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?GA:sO}var wl;let rr=(wl=class{constructor(){V(this,"x");V(this,"y");V(this,"active",!1);V(this,"options");V(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return za(this.x)&&za(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const r={};return e.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}},V(wl,"defaults",{}),V(wl,"defaultRoutes"),wl);function oO(t,e){const n=t.options.ticks,i=lO(t),r=Math.min(n.maxTicksLimit||i,i),s=n.major.enabled?uO(e):[],a=s.length,o=s[0],l=s[a-1],c=[];if(a>r)return dO(e,c,s,a/r),c;const d=cO(s,e,r);if(a>0){let h,f;const p=a>1?Math.round((l-o)/(a-1)):null;for(No(e,c,d,ve(p)?0:o-p,o),h=0,f=a-1;h<f;h++)No(e,c,d,s[h],s[h+1]);return No(e,c,d,l,ve(p)?e.length:l+p),c}return No(e,c,d),c}function lO(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function cO(t,e,n){const i=hO(t),r=e.length/n;if(!i)return Math.max(r,1);const s=rM(i);for(let a=0,o=s.length-1;a<o;a++){const l=s[a];if(l>r)return l}return Math.max(r,1)}function uO(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function dO(t,e,n,i){let r=0,s=n[0],a;for(i=Math.ceil(i),a=0;a<t.length;a++)a===s&&(e.push(t[a]),r++,s=n[r*i])}function No(t,e,n,i,r){const s=G(i,0),a=Math.min(G(r,t.length),t.length);let o=0,l,c,d;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),d=s;d<0;)o++,d=Math.round(s+o*n);for(c=Math.max(s,0);c<a;c++)c===d&&(e.push(t[c]),o++,d=Math.round(s+o*n))}function hO(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const fO=t=>t==="left"?"right":t==="right"?"left":t,f2=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,p2=(t,e)=>Math.min(e||t,t);function g2(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function pO(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,a=t._endPixel,o=1e-6;let l=t.getPixelForTick(r),c;if(!(n&&(i===1?c=Math.max(l-s,a-l):e===0?c=(t.getPixelForTick(1)-l)/2:c=(l-t.getPixelForTick(r-1))/2,l+=r<e?c:-c,l<s-o||l>a+o)))return l}function gO(t,e){ne(t,n=>{const i=n.gc,r=i.length/2;let s;if(r>e){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function js(t){return t.drawTicks?t.tickLength:0}function m2(t,e){if(!t.display)return 0;const n=Ge(t.font,e),i=$t(t.padding);return(Oe(t.text)?t.text.length:1)*n.lineHeight+i.height}function mO(t,e){return ir(t,{scale:e,type:"scale"})}function yO(t,e,n){return ir(t,{tick:n,index:e,type:"tick"})}function vO(t,e,n){let i=kg(t);return(n&&e!=="right"||!n&&e==="right")&&(i=fO(i)),i}function xO(t,e,n,i){const{top:r,left:s,bottom:a,right:o,chart:l}=t,{chartArea:c,scales:d}=l;let h=0,f,p,g;const m=a-r,k=o-s;if(t.isHorizontal()){if(p=We(i,s,o),te(n)){const v=Object.keys(n)[0],y=n[v];g=d[v].getPixelForValue(y)+m-e}else n==="center"?g=(c.bottom+c.top)/2+m-e:g=f2(t,n,e);f=o-s}else{if(te(n)){const v=Object.keys(n)[0],y=n[v];p=d[v].getPixelForValue(y)-k+e}else n==="center"?p=(c.left+c.right)/2-k+e:p=f2(t,n,e);g=We(i,a,r),h=n==="left"?-Wt:Wt}return{titleX:p,titleY:g,maxWidth:f,rotation:h}}class as extends rr{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return e=Jt(e,Number.POSITIVE_INFINITY),n=Jt(n,Number.NEGATIVE_INFINITY),i=Jt(i,Number.POSITIVE_INFINITY),r=Jt(r,Number.NEGATIVE_INFINITY),{min:Jt(e,i),max:Jt(n,r),minDefined:It(e),maxDefined:It(n)}}getMinMax(e){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),a;if(r&&s)return{min:n,max:i};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)a=o[l].controller.getMinMax(this,e),r||(n=Math.min(n,a.min)),s||(i=Math.max(i,a.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:Jt(n,Jt(i,n)),max:Jt(i,Jt(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ce(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:r,grace:s,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=$M(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?g2(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=oO(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ce(this.options.afterUpdate,[this])}beforeSetDimensions(){ce(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ce(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),ce(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ce(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i],s.label=ce(n.callback,[s.value,i,e],this)}afterTickToLabelConversion(){ce(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ce(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=p2(this.ticks.length,e.ticks.maxTicksLimit),r=n.minRotation||0,s=n.maxRotation;let a=r,o,l,c;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,p=At(this.chart.width-h,0,this.maxWidth);o=e.offset?this.maxWidth/i:p/(i-1),h+6>o&&(o=p/(i-(e.offset?.5:1)),l=this.maxHeight-js(e.grid)-n.padding-m2(e.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),a=oM(Math.min(Math.asin(At((d.highest.height+6)/o,-1,1)),Math.asin(At(l/c,-1,1))-Math.asin(At(f/c,-1,1)))),a=Math.max(r,Math.min(s,a))),this.labelRotation=a}afterCalculateLabelRotation(){ce(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ce(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){const l=m2(r,n.options.font);if(o?(e.width=this.maxWidth,e.height=js(s)+l):(e.height=this.maxHeight,e.width=js(s)+l),i.display&&this.ticks.length){const{first:c,last:d,widest:h,highest:f}=this._getLabelSizes(),p=i.padding*2,g=Fi(this.labelRotation),m=Math.cos(g),k=Math.sin(g);if(o){const v=i.mirror?0:k*h.width+m*f.height;e.height=Math.min(this.maxHeight,e.height+v+p)}else{const v=i.mirror?0:m*h.width+k*f.height;e.width=Math.min(this.maxWidth,e.width+v+p)}this._calculatePadding(c,d,k,m)}}this._handleMargins(),o?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,r){const{ticks:{align:s,padding:a},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,p=0;l?c?(f=r*e.width,p=i*n.height):(f=i*e.height,p=r*n.width):s==="start"?p=n.width:s==="end"?f=e.width:s!=="inner"&&(f=e.width/2,p=n.width/2),this.paddingLeft=Math.max((f-d+a)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+a)*this.width/(this.width-h),0)}else{let d=n.height/2,h=e.height/2;s==="start"?(d=0,h=e.height):s==="end"&&(d=n.height,h=0),this.paddingTop=d+a,this.paddingBottom=h+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ce(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)ve(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=g2(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:r,_longestTextCache:s}=this,a=[],o=[],l=Math.floor(n/p2(n,i));let c=0,d=0,h,f,p,g,m,k,v,y,b,w,_;for(h=0;h<n;h+=l){if(g=e[h].label,m=this._resolveTickFontOptions(h),r.font=k=m.string,v=s[k]=s[k]||{data:{},gc:[]},y=m.lineHeight,b=w=0,!ve(g)&&!Oe(g))b=K1(r,v.data,v.gc,b,g),w=y;else if(Oe(g))for(f=0,p=g.length;f<p;++f)_=g[f],!ve(_)&&!Oe(_)&&(b=K1(r,v.data,v.gc,b,_),w+=y);a.push(b),o.push(w),c=Math.max(b,c),d=Math.max(w,d)}gO(s,n);const C=a.indexOf(c),S=o.indexOf(d),P=T=>({width:a[T]||0,height:o[T]||0});return{first:P(0),last:P(n-1),widest:P(C),highest:P(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return uM(this._alignToPixels?ji(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=yO(this.getContext(),e,i))}return this.$context||(this.$context=mO(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Fi(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),a=e.autoSkipPadding||0,o=s?s.widest.width+a:0,l=s?s.highest.height+a:0;return this.isHorizontal()?l*i>o*r?o/i:l/r:l*r<o*i?l/i:o/r}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:a,border:o}=r,l=s.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=js(s),p=[],g=o.setContext(this.getContext()),m=g.display?g.width:0,k=m/2,v=function(N){return ji(i,N,m)};let y,b,w,_,C,S,P,T,M,L,D,H;if(a==="top")y=v(this.bottom),S=this.bottom-f,T=y-k,L=v(e.top)+k,H=e.bottom;else if(a==="bottom")y=v(this.top),L=e.top,H=v(e.bottom)-k,S=y+k,T=this.top+f;else if(a==="left")y=v(this.right),C=this.right-f,P=y-k,M=v(e.left)+k,D=e.right;else if(a==="right")y=v(this.left),M=e.left,D=v(e.right)-k,C=y+k,P=this.left+f;else if(n==="x"){if(a==="center")y=v((e.top+e.bottom)/2+.5);else if(te(a)){const N=Object.keys(a)[0],re=a[N];y=v(this.chart.scales[N].getPixelForValue(re))}L=e.top,H=e.bottom,S=y+k,T=S+f}else if(n==="y"){if(a==="center")y=v((e.left+e.right)/2);else if(te(a)){const N=Object.keys(a)[0],re=a[N];y=v(this.chart.scales[N].getPixelForValue(re))}C=y-k,P=C-f,M=e.left,D=e.right}const J=G(r.ticks.maxTicksLimit,h),Y=Math.max(1,Math.ceil(h/J));for(b=0;b<h;b+=Y){const N=this.getContext(b),re=s.setContext(N),O=o.setContext(N),I=re.lineWidth,$=re.color,F=O.dash||[],Q=O.dashOffset,ft=re.tickWidth,Ee=re.tickColor,_t=re.tickBorderDash||[],be=re.tickBorderDashOffset;w=pO(this,b,l),w!==void 0&&(_=ji(i,w,I),c?C=P=M=D=_:S=T=L=H=_,p.push({tx1:C,ty1:S,tx2:P,ty2:T,x1:M,y1:L,x2:D,y2:H,width:I,color:$,borderDash:F,borderDashOffset:Q,tickWidth:ft,tickColor:Ee,tickBorderDash:_t,tickBorderDashOffset:be}))}return this._ticksLength=h,this._borderValue=y,p}_computeLabelItems(e){const n=this.axis,i=this.options,{position:r,ticks:s}=i,a=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=s,f=js(i.grid),p=f+d,g=h?-d:p,m=-Fi(this.labelRotation),k=[];let v,y,b,w,_,C,S,P,T,M,L,D,H="middle";if(r==="top")C=this.bottom-g,S=this._getXAxisLabelAlignment();else if(r==="bottom")C=this.top+g,S=this._getXAxisLabelAlignment();else if(r==="left"){const Y=this._getYAxisLabelAlignment(f);S=Y.textAlign,_=Y.x}else if(r==="right"){const Y=this._getYAxisLabelAlignment(f);S=Y.textAlign,_=Y.x}else if(n==="x"){if(r==="center")C=(e.top+e.bottom)/2+p;else if(te(r)){const Y=Object.keys(r)[0],N=r[Y];C=this.chart.scales[Y].getPixelForValue(N)+p}S=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")_=(e.left+e.right)/2-p;else if(te(r)){const Y=Object.keys(r)[0],N=r[Y];_=this.chart.scales[Y].getPixelForValue(N)}S=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?H="top":l==="end"&&(H="bottom"));const J=this._getLabelSizes();for(v=0,y=o.length;v<y;++v){b=o[v],w=b.label;const Y=s.setContext(this.getContext(v));P=this.getPixelForTick(v)+s.labelOffset,T=this._resolveTickFontOptions(v),M=T.lineHeight,L=Oe(w)?w.length:1;const N=L/2,re=Y.color,O=Y.textStrokeColor,I=Y.textStrokeWidth;let $=S;a?(_=P,S==="inner"&&(v===y-1?$=this.options.reverse?"left":"right":v===0?$=this.options.reverse?"right":"left":$="center"),r==="top"?c==="near"||m!==0?D=-L*M+M/2:c==="center"?D=-J.highest.height/2-N*M+M:D=-J.highest.height+M/2:c==="near"||m!==0?D=M/2:c==="center"?D=J.highest.height/2-N*M:D=J.highest.height-L*M,h&&(D*=-1),m!==0&&!Y.showLabelBackdrop&&(_+=M/2*Math.sin(m))):(C=P,D=(1-L)*M/2);let F;if(Y.showLabelBackdrop){const Q=$t(Y.backdropPadding),ft=J.heights[v],Ee=J.widths[v];let _t=D-Q.top,be=0-Q.left;switch(H){case"middle":_t-=ft/2;break;case"bottom":_t-=ft;break}switch(S){case"center":be-=Ee/2;break;case"right":be-=Ee;break;case"inner":v===y-1?be-=Ee:v>0&&(be-=Ee/2);break}F={left:be,top:_t,width:Ee+Q.width,height:ft+Q.height,color:Y.backdropColor}}k.push({label:w,font:T,textOffset:D,options:{rotation:m,color:re,strokeColor:O,strokeWidth:I,textAlign:$,textBaseline:H,translation:[_,C],backdrop:F}})}return k}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Fi(this.labelRotation))return e==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,a=this._getLabelSizes(),o=e+s,l=a.widest.width;let c,d;return n==="left"?r?(d=this.right+s,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-o,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d=this.left)):n==="right"?r?(d=this.left+s,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+o,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:r,width:s,height:a}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,r,s,a),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===e);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,a;const o=(l,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(s=0,a=r.length;s<a;++s){const l=r[s];n.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:r}}=this,s=i.setContext(this.getContext()),a=i.display?s.width:0;if(!a)return;const o=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,h,f;this.isHorizontal()?(c=ji(e,this.left,a)-a/2,d=ji(e,this.right,o)+o/2,h=f=l):(h=ji(e,this.top,a)-a/2,f=ji(e,this.bottom,o)+o/2,c=d=l),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(c,h),n.lineTo(d,f),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&_g(i,r);const s=this.getLabelItems(e);for(const a of s){const o=a.options,l=a.font,c=a.label,d=a.textOffset;$a(i,c,0,d,l,o)}r&&jg(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=Ge(i.font),a=$t(i.padding),o=i.align;let l=s.lineHeight/2;n==="bottom"||n==="center"||te(n)?(l+=a.bottom,Oe(i.text)&&(l+=s.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:c,titleY:d,maxWidth:h,rotation:f}=xO(this,l,n,o);$a(e,i.text,0,0,s,{color:i.color,maxWidth:h,rotation:f,textAlign:vO(o,n,r),textBaseline:"middle",translation:[c,d]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=G(e.grid&&e.grid.z,-1),r=G(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==as.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:i,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,a;for(s=0,a=n.length;s<a;++s){const o=n[s];o[i]===this.id&&(!e||o.type===e)&&r.push(o)}return r}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return Ge(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Vo{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;wO(n)&&(i=this.register(n));const r=this.items,s=e.id,a=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in r||(r[s]=e,bO(e,a,i),this.override&&_e.override(e.id,e.overrides)),a}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,r=this.scope;i in n&&delete n[i],r&&i in _e[r]&&(delete _e[r][i],this.override&&delete Xi[i])}}function bO(t,e,n){const i=Da(Object.create(null),[n?_e.get(n):{},_e.get(e),t.defaults]);_e.set(e,i),t.defaultRoutes&&kO(e,t.defaultRoutes),t.descriptors&&_e.describe(e,t.descriptors)}function kO(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),a=e[n].split("."),o=a.pop(),l=a.join(".");_e.route(s,r,l,o)})}function wO(t){return"id"in t&&"defaults"in t}class _O{constructor(){this.controllers=new Vo(ia,"datasets",!0),this.elements=new Vo(rr,"elements"),this.plugins=new Vo(Object,"plugins"),this.scales=new Vo(as,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(e,s,r):ne(r,a=>{const o=i||this._getRegistryForType(a);this._exec(e,o,a)})})}_exec(e,n,i){const r=xg(e);ce(i["before"+r],[],i),n[e](i),ce(i["after"+r],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const r=n.get(e);if(r===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return r}}var tn=new _O;class jO{constructor(){this._init=[]}notify(e,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install"));const s=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(s,e,n,i);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall")),a}_notify(e,n,i,r){r=r||{};for(const s of e){const a=s.plugin,o=a[i],l=[n,r,s.options];if(ce(o,l,a)===!1&&r.cancelable)return!1}return!0}invalidate(){ve(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,r=G(i.options&&i.options.plugins,{}),s=SO(i);return r===!1&&!n?[]:CO(e,s,r,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,r=(s,a)=>s.filter(o=>!a.some(l=>o.plugin.id===l.plugin.id));this._notify(r(n,i),e,"stop"),this._notify(r(i,n),e,"start")}}function SO(t){const e={},n=[],i=Object.keys(tn.plugins.items);for(let s=0;s<i.length;s++)n.push(tn.getPlugin(i[s]));const r=t.plugins||[];for(let s=0;s<r.length;s++){const a=r[s];n.indexOf(a)===-1&&(n.push(a),e[a.id]=!0)}return{plugins:n,localIds:e}}function PO(t,e){return!e&&t===!1?null:t===!0?{}:t}function CO(t,{plugins:e,localIds:n},i,r){const s=[],a=t.getContext();for(const o of e){const l=o.id,c=PO(i[l],r);c!==null&&s.push({plugin:o,options:TO(t.config,{plugin:o,local:n[l]},c,a)})}return s}function TO(t,{plugin:e,local:n},i,r){const s=t.pluginScopeKeys(e),a=t.getOptionScopes(i,s);return n&&e.defaults&&a.push(e.defaults),t.createResolver(a,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function If(t,e){const n=_e.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function EO(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function MO(t,e){return t===e?"_index_":"_value_"}function y2(t){if(t==="x"||t==="y"||t==="r")return t}function AO(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function $f(t,...e){if(y2(t))return t;for(const n of e){const i=n.axis||AO(n.position)||t.length>1&&y2(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function v2(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function OO(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return v2(t,"x",n[0])||v2(t,"y",n[0])}return{}}function LO(t,e){const n=Xi[t.type]||{scales:{}},i=e.scales||{},r=If(t.type,e),s=Object.create(null);return Object.keys(i).forEach(a=>{const o=i[a];if(!te(o))return console.error(`Invalid scale configuration for scale: ${a}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=$f(a,o,OO(a,t),_e.scales[o.type]),c=MO(l,r),d=n.scales||{};s[a]=Qs(Object.create(null),[{axis:l},o,d[l],d[c]])}),t.data.datasets.forEach(a=>{const o=a.type||t.type,l=a.indexAxis||If(o,e),d=(Xi[o]||{}).scales||{};Object.keys(d).forEach(h=>{const f=EO(h,l),p=a[f+"AxisID"]||f;s[p]=s[p]||Object.create(null),Qs(s[p],[{axis:f},i[p],d[h]])})}),Object.keys(s).forEach(a=>{const o=s[a];Qs(o,[_e.scales[o.type],_e.scale])}),s}function Ck(t){const e=t.options||(t.options={});e.plugins=G(e.plugins,{}),e.scales=LO(t,e)}function Tk(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function RO(t){return t=t||{},t.data=Tk(t.data),Ck(t),t}const x2=new Map,Ek=new Set;function Uo(t,e){let n=x2.get(t);return n||(n=e(),x2.set(t,n),Ek.add(n)),n}const Ss=(t,e,n)=>{const i=Rc(e,n);i!==void 0&&t.add(i)};class DO{constructor(e){this._config=RO(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Tk(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),Ck(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Uo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return Uo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return Uo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return Uo(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let r=i.get(e);return(!r||n)&&(r=new Map,i.set(e,r)),r}getOptionScopes(e,n,i){const{options:r,type:s}=this,a=this._cachedScopes(e,i),o=a.get(n);if(o)return o;const l=new Set;n.forEach(d=>{e&&(l.add(e),d.forEach(h=>Ss(l,e,h))),d.forEach(h=>Ss(l,r,h)),d.forEach(h=>Ss(l,Xi[s]||{},h)),d.forEach(h=>Ss(l,_e,h)),d.forEach(h=>Ss(l,Rf,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Ek.has(n)&&a.set(n,c),c}chartOptionScopes(){const{options:e,type:n}=this;return[e,Xi[n]||{},_e.datasets[n]||{},{type:n},_e,Rf]}resolveNamedOptions(e,n,i,r=[""]){const s={$shared:!0},{resolver:a,subPrefixes:o}=b2(this._resolverCache,e,r);let l=a;if(IO(a,n)){s.$shared=!1,i=hi(i)?i():i;const c=this.createResolver(e,i,o);l=Jr(a,i,c)}for(const c of n)s[c]=l[c];return s}createResolver(e,n,i=[""],r){const{resolver:s}=b2(this._resolverCache,e,i);return te(n)?Jr(s,n,void 0,r):s}}function b2(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);return s||(s={resolver:Sg(e,n),subPrefixes:n.filter(o=>!o.toLowerCase().includes("hover"))},i.set(r,s)),s}const zO=t=>te(t)&&Object.getOwnPropertyNames(t).some(e=>hi(t[e]));function IO(t,e){const{isScriptable:n,isIndexable:i}=hk(t);for(const r of e){const s=n(r),a=i(r),o=(a||s)&&t[r];if(s&&(hi(o)||zO(o))||a&&Oe(o))return!0}return!1}var $O="4.4.6";const FO=["top","bottom","left","right","chartArea"];function k2(t,e){return t==="top"||t==="bottom"||FO.indexOf(t)===-1&&e==="x"}function w2(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function _2(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ce(n&&n.onComplete,[t],e)}function BO(t){const e=t.chart,n=e.options.animation;ce(n&&n.onProgress,[t],e)}function Mk(t){return Tg()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ul={},j2=t=>{const e=Mk(t);return Object.values(Ul).filter(n=>n.canvas===e).pop()};function NO(t,e,n){const i=Object.keys(t);for(const r of i){const s=+r;if(s>=e){const a=t[r];delete t[r],(n>0||s>e)&&(t[s+n]=a)}}}function VO(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}function Ho(t,e,n){return t.options.clip?t[n]:e[n]}function UO(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:Ho(n,e,"left"),right:Ho(n,e,"right"),top:Ho(i,e,"top"),bottom:Ho(i,e,"bottom")}:e}var Rn;let Cu=(Rn=class{static register(...e){tn.add(...e),S2()}static unregister(...e){tn.remove(...e),S2()}constructor(e,n){const i=this.config=new DO(n),r=Mk(e),s=j2(r);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const a=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||aO(r)),this.platform.updateConfig(i);const o=this.platform.acquireContext(r,a.aspectRatio),l=o&&o.canvas,c=l&&l.height,d=l&&l.width;if(this.id=qE(),this.ctx=o,this.canvas=l,this.width=d,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new jO,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=gM(h=>this.update(h),a.resizeDelay||0),this._dataChanges=[],Ul[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}pn.listen(this,"complete",_2),pn.listen(this,"progress",BO),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:r,_aspectRatio:s}=this;return ve(e)?n&&s?s:r?i/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return tn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():X1(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return G1(this.canvas,this.ctx),this}stop(){return pn.stop(this),this}resize(e,n){pn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,r=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,n,s),o=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,X1(this,o,!0)&&(this.notifyPlugins("resize",{size:a}),ce(i.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ne(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,r=Object.keys(i).reduce((a,o)=>(a[o]=!1,a),{});let s=[];n&&(s=s.concat(Object.keys(n).map(a=>{const o=n[a],l=$f(a,o),c=l==="r",d=l==="x";return{options:o,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),ne(s,a=>{const o=a.options,l=o.id,c=$f(l,o),d=G(o.type,a.dtype);(o.position===void 0||k2(o.position,c)!==k2(a.dposition))&&(o.position=a.dposition),r[l]=!0;let h=null;if(l in i&&i[l].type===d)h=i[l];else{const f=tn.getScale(d);h=new f({id:l,type:d,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(o,e)}),ne(r,(a,o)=>{a||delete i[o]}),ne(i,a=>{Ot.configure(this,a,a.options),Ot.addBox(this,a)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((r,s)=>r.index-s.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(w2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,r)=>{n.filter(s=>s===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const s=n[i];let a=this.getDatasetMeta(i);const o=s.type||this.config.type;if(a.type&&a.type!==o&&(this._destroyDatasetMeta(i),a=this.getDatasetMeta(i)),a.type=o,a.indexAxis=s.indexAxis||If(o,this.options),a.order=s.order||0,a.index=i,a.label=""+s.label,a.visible=this.isDatasetVisible(i),a.controller)a.controller.updateIndex(i),a.controller.linkScales();else{const l=tn.getController(o),{datasetElementType:c,dataElementType:d}=_e.datasets[o];Object.assign(l,{dataElementType:tn.getElement(d),datasetElementType:c&&tn.getElement(c)}),a.controller=new l(this,i),e.push(a.controller)}}return this._updateMetasets(),e}_resetElements(){ne(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:h}=this.getDatasetMeta(c),f=!r&&s.indexOf(h)===-1;h.buildOrUpdateElements(f),a=Math.max(+h.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),r||ne(s,c=>{c.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(w2("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){ne(this.scales,e=>{Ot.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!I1(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:s}of n){const a=i==="_removeElements"?-s:s;NO(e,r,a)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=s=>new Set(e.filter(a=>a[0]===s).map((a,o)=>o+","+a.splice(1).join(","))),r=i(0);for(let s=1;s<n;s++)if(!I1(r,i(s)))return;return Array.from(r).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ot.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],ne(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,s)=>{r._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,hi(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),r={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(pn.has(this)?this.attached&&!pn.running(this)&&pn.start(this):(this.draw(),_2({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let r,s;for(r=0,s=n.length;r<s;++r){const a=n[r];(!e||a.visible)&&i.push(a)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i=e._clip,r=!i.disabled,s=UO(e,this.chartArea),a={meta:e,index:e.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(r&&_g(n,{left:i.left===!1?0:s.left-i.left,right:i.right===!1?this.width:s.right+i.right,top:i.top===!1?0:s.top-i.top,bottom:i.bottom===!1?this.height:s.bottom+i.bottom}),e.controller.draw(),r&&jg(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(e){return Ia(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,r){const s=FA.modes[n];return typeof s=="function"?s(this,e,i,r):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let r=i.filter(s=>s&&s._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=ir(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const r=i?"show":"hide",s=this.getDatasetMeta(e),a=s.controller._resolveAnimations(void 0,r);Dc(n)?(s.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),a.update(s,{visible:i}),this.update(o=>o.datasetIndex===e?r:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),pn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),G1(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Ul[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(s,a)=>{n.addEventListener(this,s,a),e[s]=a},r=(s,a,o)=>{s.offsetX=a,s.offsetY=o,this._eventHandler(s)};ne(this.options.events,s=>i(s,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},r=(l,c)=>{e[l]&&(n.removeEventListener(this,l,c),delete e[l])},s=(l,c)=>{this.canvas&&this.resize(l,c)};let a;const o=()=>{r("attach",o),this.attached=!0,this.resize(),i("resize",s),i("detach",a)};a=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),i("attach",o)},n.isAttached(this.canvas)?o():a()}unbindEvents(){ne(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},ne(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const r=i?"set":"remove";let s,a,o,l;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+r+"DatasetHoverStyle"]()),o=0,l=e.length;o<l;++o){a=e[o];const c=a&&this.getDatasetMeta(a.datasetIndex).controller;c&&c[r+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:s,index:a})=>{const o=this.getDatasetMeta(s);if(!o)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:o.data[a],index:a}});!Oc(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const r=this.options.hover,s=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),a=s(n,e),o=i?e:s(e,n);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},r=a=>(a.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const s=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(s||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:r=[],options:s}=this,a=n,o=this._getActiveElements(e,r,i,a),l=tM(e),c=VO(e,this._lastEvent,i,l);i&&(this._lastEvent=null,ce(s.onHover,[e,o,this],this),l&&ce(s.onClick,[e,o,this],this));const d=!Oc(o,r);return(d||n)&&(this._active=o,this._updateHoverStyles(o,r,n)),this._lastEvent=c,d}_getActiveElements(e,n,i,r){if(e.type==="mouseout")return[];if(!i)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,r)}},V(Rn,"defaults",_e),V(Rn,"instances",Ul),V(Rn,"overrides",Xi),V(Rn,"registry",tn),V(Rn,"version",$O),V(Rn,"getChart",j2),Rn);function S2(){return ne(Cu.instances,t=>t._plugins.invalidate())}function Ak(t,e,n=e){t.lineCap=G(n.borderCapStyle,e.borderCapStyle),t.setLineDash(G(n.borderDash,e.borderDash)),t.lineDashOffset=G(n.borderDashOffset,e.borderDashOffset),t.lineJoin=G(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=G(n.borderWidth,e.borderWidth),t.strokeStyle=G(n.borderColor,e.borderColor)}function HO(t,e,n){t.lineTo(n.x,n.y)}function WO(t){return t.stepped?TM:t.tension||t.cubicInterpolationMode==="monotone"?EM:HO}function Ok(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:a,end:o}=e,l=Math.max(r,a),c=Math.min(s,o),d=r<a&&s<a||r>o&&s>o;return{count:i,start:l,loop:e.loop,ilen:c<l&&!d?i+c-l:c-l}}function KO(t,e,n,i){const{points:r,options:s}=e,{count:a,start:o,loop:l,ilen:c}=Ok(r,n,i),d=WO(s);let{move:h=!0,reverse:f}=i||{},p,g,m;for(p=0;p<=c;++p)g=r[(o+(f?c-p:p))%a],!g.skip&&(h?(t.moveTo(g.x,g.y),h=!1):d(t,m,g,f,s.stepped),m=g);return l&&(g=r[(o+(f?c:0))%a],d(t,m,g,f,s.stepped)),!!l}function GO(t,e,n,i){const r=e.points,{count:s,start:a,ilen:o}=Ok(r,n,i),{move:l=!0,reverse:c}=i||{};let d=0,h=0,f,p,g,m,k,v;const y=w=>(a+(c?o-w:w))%s,b=()=>{m!==k&&(t.lineTo(d,k),t.lineTo(d,m),t.lineTo(d,v))};for(l&&(p=r[y(0)],t.moveTo(p.x,p.y)),f=0;f<=o;++f){if(p=r[y(f)],p.skip)continue;const w=p.x,_=p.y,C=w|0;C===g?(_<m?m=_:_>k&&(k=_),d=(h*d+w)/++h):(b(),t.lineTo(w,_),g=C,h=0,m=k=_),v=_}b()}function Ff(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?GO:KO}function YO(t){return t.stepped?lA:t.tension||t.cubicInterpolationMode==="monotone"?cA:Li}function qO(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),Ak(t,e.options),t.stroke(r)}function XO(t,e,n,i){const{segments:r,options:s}=e,a=Ff(e);for(const o of r)Ak(t,s,o.style),t.beginPath(),a(t,e,o,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const JO=typeof Path2D=="function";function QO(t,e,n,i){JO&&!e.options.segment?qO(t,e,n,i):XO(t,e,n,i)}class Ds extends rr{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;eA(this._points,i,e,r,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=yA(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,r=e[n],s=this.points,a=pA(this,{property:n,start:r,end:r});if(!a.length)return;const o=[],l=YO(i);let c,d;for(c=0,d=a.length;c<d;++c){const{start:h,end:f}=a[c],p=s[h],g=s[f];if(p===g){o.push(p);continue}const m=Math.abs((r-p[n])/(g[n]-p[n])),k=l(p,g,m,i.stepped);k[n]=e[n],o.push(k)}return o.length===1?o[0]:o}pathSegment(e,n,i){return Ff(this)(e,this,n,i)}path(e,n,i){const r=this.segments,s=Ff(this);let a=this._loop;n=n||0,i=i||this.points.length-n;for(const o of r)a&=s(e,this,o,{start:n,end:n+i-1});return!!a}draw(e,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),QO(e,this,i,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}V(Ds,"id","line"),V(Ds,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),V(Ds,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),V(Ds,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function P2(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}class Hl extends rr{constructor(n){super();V(this,"parsed");V(this,"skip");V(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const s=this.options,{x:a,y:o}=this.getProps(["x","y"],r);return Math.pow(n-a,2)+Math.pow(i-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,i){return P2(this,n,"x",i)}inYRange(n,i){return P2(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!Ia(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,Df(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}V(Hl,"id","point"),V(Hl,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),V(Hl,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const C2=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},ZO=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class T2 extends rr{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=ce(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,r)=>e.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,r=Ge(i.font),s=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=C2(i,s);let c,d;n.font=r.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(a,s,o,l)+10):(d=this.maxHeight,c=this._fitCols(a,r,o,l)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(d,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,r){const{ctx:s,maxWidth:a,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=r+o;let h=e;s.textAlign="left",s.textBaseline="middle";let f=-1,p=-d;return this.legendItems.forEach((g,m)=>{const k=i+n/2+s.measureText(g.text).width;(m===0||c[c.length-1]+k+2*o>a)&&(h+=d,c[c.length-(m>0?0:1)]=0,p+=d,f++),l[m]={left:0,top:p,row:f,width:k,height:r},c[c.length-1]+=k+o}),h}_fitCols(e,n,i,r){const{ctx:s,maxHeight:a,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=a-e;let h=o,f=0,p=0,g=0,m=0;return this.legendItems.forEach((k,v)=>{const{itemWidth:y,itemHeight:b}=eL(i,n,s,k,r);v>0&&p+b+2*o>d&&(h+=f+o,c.push({width:f,height:p}),g+=f+o,m++,f=p=0),l[v]={left:g,top:p,col:m,width:y,height:b},f=Math.max(f,y),p+=b+o}),h+=f,c.push({width:f,height:p}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:s}}=this,a=zr(s,this.left,this.width);if(this.isHorizontal()){let o=0,l=We(i,this.left+r,this.right-this.lineWidths[o]);for(const c of n)o!==c.row&&(o=c.row,l=We(i,this.left+r,this.right-this.lineWidths[o])),c.top+=this.top+e+r,c.left=a.leftForLtr(a.x(l),c.width),l+=c.width+r}else{let o=0,l=We(i,this.top+e+r,this.bottom-this.columnSizes[o].height);for(const c of n)c.col!==o&&(o=c.col,l=We(i,this.top+e+r,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+r,c.left=a.leftForLtr(a.x(c.left),c.width),l+=c.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;_g(e,this),this._draw(),jg(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:r}=this,{align:s,labels:a}=e,o=_e.color,l=zr(e.rtl,this.left,this.width),c=Ge(a.font),{padding:d}=a,h=c.size,f=h/2;let p;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=c.string;const{boxWidth:g,boxHeight:m,itemHeight:k}=C2(a,h),v=function(C,S,P){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;r.save();const T=G(P.lineWidth,1);if(r.fillStyle=G(P.fillStyle,o),r.lineCap=G(P.lineCap,"butt"),r.lineDashOffset=G(P.lineDashOffset,0),r.lineJoin=G(P.lineJoin,"miter"),r.lineWidth=T,r.strokeStyle=G(P.strokeStyle,o),r.setLineDash(G(P.lineDash,[])),a.usePointStyle){const M={radius:m*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:T},L=l.xPlus(C,g/2),D=S+f;uk(r,M,L,D,a.pointStyleWidth&&g)}else{const M=S+Math.max((h-m)/2,0),L=l.leftForLtr(C,g),D=na(P.borderRadius);r.beginPath(),Object.values(D).some(H=>H!==0)?zf(r,{x:L,y:M,w:g,h:m,radius:D}):r.rect(L,M,g,m),r.fill(),T!==0&&r.stroke()}r.restore()},y=function(C,S,P){$a(r,P.text,C,S+k/2,c,{strikethrough:P.hidden,textAlign:l.textAlign(P.textAlign)})},b=this.isHorizontal(),w=this._computeTitleHeight();b?p={x:We(s,this.left+d,this.right-i[0]),y:this.top+d+w,line:0}:p={x:this.left+d,y:We(s,this.top+w+d,this.bottom-n[0].height),line:0},yk(this.ctx,e.textDirection);const _=k+d;this.legendItems.forEach((C,S)=>{r.strokeStyle=C.fontColor,r.fillStyle=C.fontColor;const P=r.measureText(C.text).width,T=l.textAlign(C.textAlign||(C.textAlign=a.textAlign)),M=g+f+P;let L=p.x,D=p.y;l.setWidth(this.width),b?S>0&&L+M+d>this.right&&(D=p.y+=_,p.line++,L=p.x=We(s,this.left+d,this.right-i[p.line])):S>0&&D+_>this.bottom&&(L=p.x=L+n[p.line].width+d,p.line++,D=p.y=We(s,this.top+w+d,this.bottom-n[p.line].height));const H=l.x(L);if(v(H,D,C),L=mM(T,L+g+f,b?L+M:this.right,e.rtl),y(l.x(L),D,C),b)p.x+=M+d;else if(typeof C.text!="string"){const J=c.lineHeight;p.y+=Lk(C,J)+d}else p.y+=_}),vk(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=Ge(n.font),r=$t(n.padding);if(!n.display)return;const s=zr(e.rtl,this.left,this.width),a=this.ctx,o=n.position,l=i.size/2,c=r.top+l;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,h=We(e.align,h,this.right-f);else{const g=this.columnSizes.reduce((m,k)=>Math.max(m,k.height),0);d=c+We(e.align,this.top,this.bottom-g-e.labels.padding-this._computeTitleHeight())}const p=We(o,h,h+f);a.textAlign=s.textAlign(kg(o)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=i.string,$a(a,n.text,p,d,i)}_computeTitleHeight(){const e=this.options.title,n=Ge(e.font),i=$t(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,r,s;if(Ls(e,this.left,this.right)&&Ls(n,this.top,this.bottom)){for(s=this.legendHitBoxes,i=0;i<s.length;++i)if(r=s[i],Ls(e,r.left,r.left+r.width)&&Ls(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!iL(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const r=this._hoveredItem,s=ZO(r,i);r&&!s&&ce(n.onLeave,[e,r,this],this),this._hoveredItem=i,i&&!s&&ce(n.onHover,[e,i,this],this)}else i&&ce(n.onClick,[e,i,this],this)}}function eL(t,e,n,i,r){const s=tL(i,t,e,n),a=nL(r,i,e.lineHeight);return{itemWidth:s,itemHeight:a}}function tL(t,e,n,i){let r=t.text;return r&&typeof r!="string"&&(r=r.reduce((s,a)=>s.length>a.length?s:a)),e+n.size/2+i.measureText(r).width}function nL(t,e,n){let i=t;return typeof e.text!="string"&&(i=Lk(e,n)),i}function Lk(t,e){const n=t.text?t.text.length:0;return e*n}function iL(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var rL={id:"legend",_element:T2,start(t,e,n){const i=t.legend=new T2({ctx:t.ctx,options:n,chart:t});Ot.configure(t,i,n),Ot.addBox(t,i)},stop(t){Ot.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Ot.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:s,useBorderRadius:a,borderRadius:o}}=t.legend.options;return t._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),d=$t(c.borderWidth);return{text:e[l.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:r||c.textAlign,borderRadius:a&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};let Rk=class extends rr{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const r=Oe(i.text)?i.text.length:1;this._padding=$t(i.padding);const s=r*Ge(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:r,right:s,options:a}=this,o=a.align;let l=0,c,d,h;return this.isHorizontal()?(d=We(o,i,s),h=n+e,c=s-i):(a.position==="left"?(d=i+e,h=We(o,r,n),l=De*-.5):(d=s-e,h=We(o,n,r),l=De*.5),c=r-n),{titleX:d,titleY:h,maxWidth:c,rotation:l}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=Ge(n.font),s=i.lineHeight/2+this._padding.top,{titleX:a,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(s);$a(e,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:kg(n.align),textBaseline:"middle",translation:[a,o]})}};function sL(t,e){const n=new Rk({ctx:t.ctx,options:e,chart:t});Ot.configure(t,n,e),Ot.addBox(t,n),t.titleBlock=n}var aL={id:"title",_element:Rk,start(t,e,n){sL(t,n)},stop(t){const e=t.titleBlock;Ot.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Ot.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const zs={average(t){if(!t.length)return!1;let e,n,i=new Set,r=0,s=0;for(e=0,n=t.length;e<n;++e){const o=t[e].element;if(o&&o.hasValue()){const l=o.tooltipPosition();i.add(l.x),r+=l.y,++s}}return s===0||i.size===0?!1:{x:[...i].reduce((o,l)=>o+l)/i.size,y:r/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,r=Number.POSITIVE_INFINITY,s,a,o;for(s=0,a=t.length;s<a;++s){const l=t[s].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=Lf(e,c);d<r&&(r=d,o=l)}}if(o){const l=o.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Zt(t,e){return e&&(Oe(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function gn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function oL(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:a,value:o}=s.getLabelAndValue(r);return{chart:t,label:a,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:o,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function E2(t,e){const n=t.chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:a,boxHeight:o}=e,l=Ge(e.bodyFont),c=Ge(e.titleFont),d=Ge(e.footerFont),h=s.length,f=r.length,p=i.length,g=$t(e.padding);let m=g.height,k=0,v=i.reduce((w,_)=>w+_.before.length+_.lines.length+_.after.length,0);if(v+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),v){const w=e.displayColors?Math.max(o,l.lineHeight):l.lineHeight;m+=p*w+(v-p)*l.lineHeight+(v-1)*e.bodySpacing}f&&(m+=e.footerMarginTop+f*d.lineHeight+(f-1)*e.footerSpacing);let y=0;const b=function(w){k=Math.max(k,n.measureText(w).width+y)};return n.save(),n.font=c.string,ne(t.title,b),n.font=l.string,ne(t.beforeBody.concat(t.afterBody),b),y=e.displayColors?a+2+e.boxPadding:0,ne(i,w=>{ne(w.before,b),ne(w.lines,b),ne(w.after,b)}),y=0,n.font=d.string,ne(t.footer,b),n.restore(),k+=g.width,{width:k,height:m}}function lL(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function cL(t,e,n,i){const{x:r,width:s}=i,a=n.caretSize+n.caretPadding;if(t==="left"&&r+s+a>e.width||t==="right"&&r-s-a<0)return!0}function uL(t,e,n,i){const{x:r,width:s}=n,{width:a,chartArea:{left:o,right:l}}=t;let c="center";return i==="center"?c=r<=(o+l)/2?"left":"right":r<=s/2?c="left":r>=a-s/2&&(c="right"),cL(c,t,e,n)&&(c="center"),c}function M2(t,e,n){const i=n.yAlign||e.yAlign||lL(t,n);return{xAlign:n.xAlign||e.xAlign||uL(t,e,n,i),yAlign:i}}function dL(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function hL(t,e,n){let{y:i,height:r}=t;return e==="top"?i+=n:e==="bottom"?i-=r+n:i-=r/2,i}function A2(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:a}=t,{xAlign:o,yAlign:l}=n,c=r+s,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:p}=na(a);let g=dL(e,o);const m=hL(e,l,c);return l==="center"?o==="left"?g+=c:o==="right"&&(g-=c):o==="left"?g-=Math.max(d,f)+r:o==="right"&&(g+=Math.max(h,p)+r),{x:At(g,0,i.width-e.width),y:At(m,0,i.height-e.height)}}function Wo(t,e,n){const i=$t(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function O2(t){return Zt([],gn(t))}function fL(t,e,n){return ir(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function L2(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Dk={beforeTitle:hn,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:hn,beforeBody:hn,beforeLabel:hn,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return ve(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:hn,afterBody:hn,beforeFooter:hn,footer:hn,afterFooter:hn};function nt(t,e,n,i){const r=t[e].call(n,i);return typeof r>"u"?Dk[e].call(n,i):r}class Bf extends rr{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new bk(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=fL(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,r=nt(i,"beforeTitle",this,e),s=nt(i,"title",this,e),a=nt(i,"afterTitle",this,e);let o=[];return o=Zt(o,gn(r)),o=Zt(o,gn(s)),o=Zt(o,gn(a)),o}getBeforeBody(e,n){return O2(nt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,r=[];return ne(e,s=>{const a={before:[],lines:[],after:[]},o=L2(i,s);Zt(a.before,gn(nt(o,"beforeLabel",this,s))),Zt(a.lines,nt(o,"label",this,s)),Zt(a.after,gn(nt(o,"afterLabel",this,s))),r.push(a)}),r}getAfterBody(e,n){return O2(nt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,r=nt(i,"beforeFooter",this,e),s=nt(i,"footer",this,e),a=nt(i,"afterFooter",this,e);let o=[];return o=Zt(o,gn(r)),o=Zt(o,gn(s)),o=Zt(o,gn(a)),o}_createItems(e){const n=this._active,i=this.chart.data,r=[],s=[],a=[];let o=[],l,c;for(l=0,c=n.length;l<c;++l)o.push(oL(this.chart,n[l]));return e.filter&&(o=o.filter((d,h,f)=>e.filter(d,h,f,i))),e.itemSort&&(o=o.sort((d,h)=>e.itemSort(d,h,i))),ne(o,d=>{const h=L2(e.callbacks,d);r.push(nt(h,"labelColor",this,d)),s.push(nt(h,"labelPointStyle",this,d)),a.push(nt(h,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=a,this.dataPoints=o,o}update(e,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,a=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const o=zs[i.position].call(this,r,this._eventPosition);a=this._createItems(i),this.title=this.getTitle(a,i),this.beforeBody=this.getBeforeBody(a,i),this.body=this.getBody(a,i),this.afterBody=this.getAfterBody(a,i),this.footer=this.getFooter(a,i);const l=this._size=E2(this,i),c=Object.assign({},o,l),d=M2(this.chart,i,c),h=A2(i,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,s={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=a,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,r){const s=this.getCaretPosition(e,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:a,cornerRadius:o}=i,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=na(o),{x:f,y:p}=e,{width:g,height:m}=n;let k,v,y,b,w,_;return s==="center"?(w=p+m/2,r==="left"?(k=f,v=k-a,b=w+a,_=w-a):(k=f+g,v=k+a,b=w-a,_=w+a),y=k):(r==="left"?v=f+Math.max(l,d)+a:r==="right"?v=f+g-Math.max(c,h)-a:v=this.caretX,s==="top"?(b=p,w=b-a,k=v-a,y=v+a):(b=p+m,w=b+a,k=v+a,y=v-a),_=b),{x1:k,x2:v,x3:y,y1:b,y2:w,y3:_}}drawTitle(e,n,i){const r=this.title,s=r.length;let a,o,l;if(s){const c=zr(i.rtl,this.x,this.width);for(e.x=Wo(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",a=Ge(i.titleFont),o=i.titleSpacing,n.fillStyle=i.titleColor,n.font=a.string,l=0;l<s;++l)n.fillText(r[l],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,l+1===s&&(e.y+=i.titleMarginBottom-o)}}_drawColorBox(e,n,i,r,s){const a=this.labelColors[i],o=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=s,d=Ge(s.bodyFont),h=Wo(this,"left",s),f=r.x(h),p=l<d.lineHeight?(d.lineHeight-l)/2:0,g=n.y+p;if(s.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},k=r.leftForLtr(f,c)+c/2,v=g+l/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,Df(e,m,k,v),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,Df(e,m,k,v)}else{e.lineWidth=te(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;const m=r.leftForLtr(f,c),k=r.leftForLtr(r.xPlus(f,1),c-2),v=na(a.borderRadius);Object.values(v).some(y=>y!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,zf(e,{x:m,y:g,w:c,h:l,radius:v}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),zf(e,{x:k,y:g+1,w:c-2,h:l-2,radius:v}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(m,g,c,l),e.strokeRect(m,g,c,l),e.fillStyle=a.backgroundColor,e.fillRect(k,g+1,c-2,l-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:a,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:d}=i,h=Ge(i.bodyFont);let f=h.lineHeight,p=0;const g=zr(i.rtl,this.x,this.width),m=function(P){n.fillText(P,g.x(e.x+p),e.y+f/2),e.y+=f+s},k=g.textAlign(a);let v,y,b,w,_,C,S;for(n.textAlign=a,n.textBaseline="middle",n.font=h.string,e.x=Wo(this,k,i),n.fillStyle=i.bodyColor,ne(this.beforeBody,m),p=o&&k!=="right"?a==="center"?c/2+d:c+2+d:0,w=0,C=r.length;w<C;++w){for(v=r[w],y=this.labelTextColors[w],n.fillStyle=y,ne(v.before,m),b=v.lines,o&&b.length&&(this._drawColorBox(n,e,w,g,i),f=Math.max(h.lineHeight,l)),_=0,S=b.length;_<S;++_)m(b[_]),f=h.lineHeight;ne(v.after,m)}p=0,f=h.lineHeight,ne(this.afterBody,m),e.y-=s}drawFooter(e,n,i){const r=this.footer,s=r.length;let a,o;if(s){const l=zr(i.rtl,this.x,this.width);for(e.x=Wo(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",a=Ge(i.footerFont),n.fillStyle=i.footerColor,n.font=a.string,o=0;o<s;++o)n.fillText(r[o],l.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+i.footerSpacing}}drawBackground(e,n,i,r){const{xAlign:s,yAlign:a}=this,{x:o,y:l}=e,{width:c,height:d}=i,{topLeft:h,topRight:f,bottomLeft:p,bottomRight:g}=na(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(o+h,l),a==="top"&&this.drawCaret(e,n,i,r),n.lineTo(o+c-f,l),n.quadraticCurveTo(o+c,l,o+c,l+f),a==="center"&&s==="right"&&this.drawCaret(e,n,i,r),n.lineTo(o+c,l+d-g),n.quadraticCurveTo(o+c,l+d,o+c-g,l+d),a==="bottom"&&this.drawCaret(e,n,i,r),n.lineTo(o+p,l+d),n.quadraticCurveTo(o,l+d,o,l+d-p),a==="center"&&s==="left"&&this.drawCaret(e,n,i,r),n.lineTo(o,l+h),n.quadraticCurveTo(o,l,o+h,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const a=zs[e.position].call(this,this._active,this._eventPosition);if(!a)return;const o=this._size=E2(this,e),l=Object.assign({},a,this._size),c=M2(n,e,l),d=A2(e,l,c,n);(r._to!==d.x||s._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const a=$t(n.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&o&&(e.save(),e.globalAlpha=i,this.drawBackground(s,e,r,n),yk(e,n.textDirection),s.y+=a.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),vk(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,r=e.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),s=!Oc(i,r),a=this._positionChanged(r,n);(s||a)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],a=this._getActiveElements(e,s,n,i),o=this._positionChanged(a,e),l=n||!Oc(a,s)||o;return l&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),l}_getActiveElements(e,n,i,r){const s=this.options;if(e.type==="mouseout")return[];if(!r)return n.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const a=this.chart.getElementsAtEventForMode(e,s.mode,s,i);return s.reverse&&a.reverse(),a}_positionChanged(e,n){const{caretX:i,caretY:r,options:s}=this,a=zs[s.position].call(this,e,n);return a!==!1&&(i!==a.x||r!==a.y)}}V(Bf,"positioners",zs);var pL={id:"tooltip",_element:Bf,positioners:zs,afterInit(t,e,n){n&&(t.tooltip=new Bf({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Dk},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const gL=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function mL(t,e,n,i){const r=t.indexOf(e);if(r===-1)return gL(t,e,n,i);const s=t.lastIndexOf(e);return r!==s?n:r}const yL=(t,e)=>t===null?null:At(Math.round(t),0,e);function R2(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Nf extends as{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:s}of n)i[r]===s&&i.splice(r,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(ve(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:mL(i,e,G(n,e),this._addedLabels),yL(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,r=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let a=e;a<=n;a++)r.push({value:a});return r}getLabelForValue(e){return R2.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}V(Nf,"id","category"),V(Nf,"defaults",{ticks:{callback:R2}});function vL(t,e){const n=[],{bounds:r,step:s,min:a,max:o,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:f}=t,p=s||1,g=d-1,{min:m,max:k}=e,v=!ve(a),y=!ve(o),b=!ve(c),w=(k-m)/(h+1);let _=F1((k-m)/g/p)*p,C,S,P,T;if(_<1e-14&&!v&&!y)return[{value:m},{value:k}];T=Math.ceil(k/_)-Math.floor(m/_),T>g&&(_=F1(T*_/g/p)*p),ve(l)||(C=Math.pow(10,l),_=Math.ceil(_*C)/C),r==="ticks"?(S=Math.floor(m/_)*_,P=Math.ceil(k/_)*_):(S=m,P=k),v&&y&&s&&sM((o-a)/s,_/1e3)?(T=Math.round(Math.min((o-a)/_,d)),_=(o-a)/T,S=a,P=o):b?(S=v?a:S,P=y?o:P,T=c-1,_=(P-S)/T):(T=(P-S)/_,Zs(T,Math.round(T),_/1e3)?T=Math.round(T):T=Math.ceil(T));const M=Math.max(B1(_),B1(S));C=Math.pow(10,ve(l)?M:l),S=Math.round(S*C)/C,P=Math.round(P*C)/C;let L=0;for(v&&(f&&S!==a?(n.push({value:a}),S<a&&L++,Zs(Math.round((S+L*_)*C)/C,a,D2(a,w,t))&&L++):S<a&&L++);L<T;++L){const D=Math.round((S+L*_)*C)/C;if(y&&D>o)break;n.push({value:D})}return y&&f&&P!==o?n.length&&Zs(n[n.length-1].value,o,D2(o,w,t))?n[n.length-1].value=o:n.push({value:o}):(!y||P===o)&&n.push({value:P}),n}function D2(t,e,{horizontal:n,minRotation:i}){const r=Fi(i),s=(n?Math.sin(r):Math.cos(r))||.001,a=.75*e*(""+t).length;return Math.min(e/s,a)}class xL extends as{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return ve(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const a=l=>r=n?r:l,o=l=>s=i?s:l;if(e){const l=Xr(r),c=Xr(s);l<0&&c<0?o(0):l>0&&c>0&&a(0)}if(r===s){let l=s===0?1:Math.abs(s*.05);o(s+l),e||a(r-l)}this.min=r,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,a=vL(r,s);return e.bounds==="ticks"&&aM(a,this,"value"),e.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const r=(i-n)/Math.max(e.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return ok(e,this.chart.options.locale,this.options.ticks.format)}}class Vf extends xL{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=It(e)?e:0,this.max=It(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Fi(this.options.ticks.minRotation),r=(e?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}V(Vf,"id","linear"),V(Vf,"defaults",{ticks:{callback:ck.formatters.numeric}});const Tu={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},at=Object.keys(Tu);function z2(t,e){return t-e}function I2(t,e){if(ve(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let a=e;return typeof i=="function"&&(a=i(a)),It(a)||(a=typeof i=="string"?n.parse(a,i):n.parse(a)),a===null?null:(r&&(a=r==="week"&&(za(s)||s===!0)?n.startOf(a,"isoWeek",s):n.startOf(a,r)),+a)}function $2(t,e,n,i){const r=at.length;for(let s=at.indexOf(t);s<r-1;++s){const a=Tu[at[s]],o=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-e)/(o*a.size))<=i)return at[s]}return at[r-1]}function bL(t,e,n,i,r){for(let s=at.length-1;s>=at.indexOf(n);s--){const a=at[s];if(Tu[a].common&&t._adapter.diff(r,i,a)>=e-1)return a}return at[n?at.indexOf(n):0]}function kL(t){for(let e=at.indexOf(t)+1,n=at.length;e<n;++e)if(Tu[at[e]].common)return at[e]}function F2(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:r}=bg(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}function wL(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),a=e[e.length-1].value;let o,l;for(o=s;o<=a;o=+r.add(o,1,i))l=n[o],l>=0&&(e[l].major=!0);return e}function B2(t,e,n){const i=[],r={},s=e.length;let a,o;for(a=0;a<s;++a)o=e[a],r[o]=a,i.push({value:o,major:!1});return s===0||!n?i:wL(t,i,r,n)}class Fc extends as{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),r=this._adapter=new RA._date(e.adapters.date);r.init(n),Qs(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:I2(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:r,max:s,minDefined:a,maxDefined:o}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(r=Math.min(r,c.min)),!o&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!a||!o)&&(l(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=It(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=It(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,a=this.max,o=hM(r,s,a);return this._unit=n.unit||(i.autoSkip?$2(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):bL(this,o.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:kL(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),B2(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,r,s;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),e.length===1?n=1-r:n=(this.getDecimalForValue(e[1])-r)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?i=s:i=(s-this.getDecimalForValue(e[e.length-2]))/2);const a=e.length<3?.5:.25;n=At(n,0,a),i=At(i,0,a),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,a=s.unit||$2(s.minUnit,n,i,this._getLabelCapacity(n)),o=G(r.ticks.stepSize,1),l=a==="week"?s.isoWeekday:!1,c=za(l)||l===!0,d={};let h=n,f,p;if(c&&(h=+e.startOf(h,"isoWeek",l)),h=+e.startOf(h,c?"day":a),e.diff(i,n,a)>1e5*o)throw new Error(n+" and "+i+" are too far apart with stepSize of "+o+" "+a);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,p=0;f<i;f=+e.add(f,o,a),p++)F2(d,f,g);return(f===i||r.bounds==="ticks"||p===1)&&F2(d,f,g),Object.keys(d).sort(z2).map(m=>+m)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const r=this.options.time.displayFormats,s=this._unit,a=n||r[s];return this._adapter.format(e,a)}_tickFormatFunction(e,n,i,r){const s=this.options,a=s.ticks.callback;if(a)return ce(a,[e,n,i],this);const o=s.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&o[l],h=c&&o[c],f=i[n],p=c&&h&&f&&f.major;return this._adapter.format(e,r||(p?h:d))}generateTickLabels(e){let n,i,r;for(n=0,i=e.length;n<i;++n)r=e[n],r.label=this._tickFormatFunction(r.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,r=Fi(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:i*s+o*a,h:i*a+o*s}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(e,0,B2(this,[e],this._majorUnit),r),a=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)e=e.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)e.push(I2(this,r[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return pM(e.sort(z2))}}V(Fc,"id","time"),V(Fc,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ko(t,e,n){let i=0,r=t.length-1,s,a,o,l;n?(e>=t[i].pos&&e<=t[r].pos&&({lo:i,hi:r}=Bi(t,"pos",e)),{pos:s,time:o}=t[i],{pos:a,time:l}=t[r]):(e>=t[i].time&&e<=t[r].time&&({lo:i,hi:r}=Bi(t,"time",e)),{time:s,pos:o}=t[i],{time:a,pos:l}=t[r]);const c=a-s;return c?o+(l-o)*(e-s)/c:o}class N2 extends Fc{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=Ko(n,this.min),this._tableRange=Ko(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,r=[],s=[];let a,o,l,c,d;for(a=0,o=e.length;a<o;++a)c=e[a],c>=n&&c<=i&&r.push(c);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(a=0,o=r.length;a<o;++a)d=r[a+1],l=r[a-1],c=r[a],Math.round((d+l)/2)!==c&&s.push({time:c,pos:a/(o-1)});return s}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,s)=>r-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(Ko(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return Ko(this._table,i*this._tableRange+this._minPos,!0)}}V(N2,"id","timeseries"),V(N2,"defaults",Fc.defaults);const zk="label";function V2(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function _L(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Ik(t,e){t.labels=e}function $k(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:zk;const i=[];t.datasets=e.map(r=>{const s=t.datasets.find(a=>a[n]===r[n]);return!s||!r.data||i.includes(s)?{...r}:(i.push(s),Object.assign(s,r),s)})}function jL(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zk;const n={labels:[],datasets:[]};return Ik(n,t.labels),$k(n,t.datasets,e),n}function SL(t,e){const{height:n=150,width:i=300,redraw:r=!1,datasetIdKey:s,type:a,data:o,options:l,plugins:c=[],fallbackContent:d,updateMode:h,...f}=t,p=j.useRef(null),g=j.useRef(),m=()=>{p.current&&(g.current=new Cu(p.current,{type:a,data:jL(o,s),options:l&&{...l},plugins:c}),V2(e,g.current))},k=()=>{V2(e,null),g.current&&(g.current.destroy(),g.current=null)};return j.useEffect(()=>{!r&&g.current&&l&&_L(g.current,l)},[r,l]),j.useEffect(()=>{!r&&g.current&&Ik(g.current.config.data,o.labels)},[r,o.labels]),j.useEffect(()=>{!r&&g.current&&o.datasets&&$k(g.current.config.data,o.datasets,s)},[r,o.datasets]),j.useEffect(()=>{g.current&&(r?(k(),setTimeout(m)):g.current.update(h))},[r,l,o.labels,o.datasets,h]),j.useEffect(()=>{g.current&&(k(),setTimeout(m))},[a]),j.useEffect(()=>(m(),()=>k()),[]),Le.createElement("canvas",Object.assign({ref:p,role:"img",height:n,width:i},f),d)}const PL=j.forwardRef(SL);function CL(t,e){return Cu.register(e),j.forwardRef((n,i)=>Le.createElement(PL,Object.assign({},n,{ref:i,type:t})))}const TL=CL("line",Nl),os=x.h2`
  color: white;
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  font-weight: 600;
`;Cu.register(Nf,Vf,Hl,Ds,aL,pL,rL);const EL=x.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,ML=x.div`
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
`,dr=x.div`
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
`,AL=x.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: calc(100vh - 300px); // Mengambil sisa tinggi viewport
`,OL=x.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,U2=x.select`
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
`,LL=x.div`
  margin-top: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,RL=x.h3`
  color: #00ff87;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`,DL=x(E.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`,zL=x(E.div)`
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
`;function IL(){const[t,e]=j.useState("2024"),[n,i]=j.useState("all"),r={2024:{Jan:1200,Feb:1900,Mar:3e3,Apr:5e3,Mei:4e3,Jun:3e3,Jul:6e3,Agu:7e3,Sep:4500,Okt:5500,Nov:6500,Des:8e3},2023:{Jan:800,Feb:1200,Mar:2e3,Apr:3e3,Mei:3500,Jun:2500,Jul:4e3,Agu:5e3,Sep:3500,Okt:4e3,Nov:4500,Des:5e3}},s=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],a=["2023","2024"],l=(()=>{const f=r[t];return n==="all"?{labels:s,data:s.map(p=>f[p])}:{labels:[n],data:[f[n]]}})(),c={labels:l.labels,datasets:[{label:"Pengunjung Website",data:l.data,borderColor:"#00ff87",backgroundColor:"rgba(0, 255, 135, 0.1)",tension:.4,fill:!0}]},d={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white"}},title:{display:!0,text:`Statistik Pengunjung Website Tahun ${t}${n!=="all"?` - Bulan ${n}`:""}`,color:"white",font:{size:16}}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}},x:{grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"white"}}}},h=[{name:"Robotika",description:"Pengembangan dan pemrograman robot",members:25},{name:"English Club",description:"Peningkatan kemampuan bahasa Inggris",members:30},{name:"Pramuka",description:"Pembentukan karakter dan kepemimpinan",members:45},{name:"Futsal",description:"Olahraga tim dan kompetisi",members:20},{name:"Seni Musik",description:"Pengembangan bakat musik dan vokal",members:15},{name:"Fotografi",description:"Teknik fotografi dan editing",members:18},{name:"PMR",description:"Palang Merah Remaja",members:22},{name:"Basket",description:"Olahraga tim dan strategi",members:24},{name:"Teater",description:"Seni peran dan drama",members:16},{name:"Jurnalistik",description:"Penulisan dan media sekolah",members:20}];return u.jsxs(EL,{children:[u.jsx(os,{children:"Dashboard"}),u.jsxs(ML,{children:[u.jsxs(dr,{children:[u.jsx("h3",{children:"Total Moderator"}),u.jsx("p",{children:"25"})]}),u.jsxs(dr,{children:[u.jsx("h3",{children:"Total Guru"}),u.jsx("p",{children:"45"})]}),u.jsxs(dr,{children:[u.jsx("h3",{children:"Total Siswa"}),u.jsx("p",{children:"520"})]}),u.jsxs(dr,{children:[u.jsx("h3",{children:"Berita Sekolah"}),u.jsx("p",{children:"12"})]}),u.jsxs(dr,{children:[u.jsx("h3",{children:"Berita Program Keahlian"}),u.jsx("p",{children:"4"})]}),u.jsxs(dr,{children:[u.jsx("h3",{children:"Berita Ekstrakurikuler"}),u.jsx("p",{children:"3"})]})]}),u.jsxs(LL,{children:[u.jsx(RL,{children:"Ekstrakurikuler Aktif"}),u.jsx(DL,{animate:{x:[0,-1500]},transition:{x:{repeat:1/0,repeatType:"loop",duration:30,ease:"linear"}},children:[...h,...h].map((f,p)=>u.jsxs(zL,{children:[u.jsx("h4",{children:f.name}),u.jsx("p",{children:f.description}),u.jsxs("div",{className:"members",children:[f.members," Anggota Aktif"]})]},p))})]}),u.jsxs(AL,{children:[u.jsxs(OL,{children:[u.jsx(U2,{value:t,onChange:f=>e(f.target.value),children:a.map(f=>u.jsxs("option",{value:f,children:["Tahun ",f]},f))}),u.jsxs(U2,{value:n,onChange:f=>i(f.target.value),children:[u.jsx("option",{value:"all",children:"Semua Bulan"}),s.map(f=>u.jsx("option",{value:f,children:f},f))]})]}),u.jsx(TL,{data:c,options:d})]})]})}const $L=x.div`
  padding: 2rem;
  color: white;
`;x.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const FL=x.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
`,BL=x(E.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,H2=x(E.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  background: ${t=>t.delete?"#ff4444":"#00ff87"};
  color: white;
`,NL=x(E.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function VL(){const[t,e]=j.useState([{id:1,username:"admin",role:"Administrator"},{id:2,username:"moderator",role:"Moderator"},{id:3,username:"user1",role:"User"}]);return u.jsxs($L,{children:[u.jsx(os,{children:"Manajemen Moderator"}),u.jsx(NL,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Moderator"}),u.jsx(FL,{children:t.map(n=>u.jsxs(BL,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsxs("div",{children:[u.jsx("h3",{children:n.username}),u.jsx("p",{children:n.role})]}),u.jsxs("div",{children:[u.jsx(H2,{whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),u.jsx(H2,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const UL=x.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`,HL=x.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,W2=x.button`
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
`,WL=x.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,KL=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,GL=x(E.div)`
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
`,YL=x.input`
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
`,qL=x.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`,K2=x.div`
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
`,XL=x(E.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;function JL(){const[t,e]=Le.useState("students"),[n,i]=Le.useState(""),r=[{id:1,name:"Ahmad Rizki",kelas:"XII RPL 1",nis:"12345",status:"Aktif"},{id:2,name:"Siti Nurhaliza",kelas:"XII RPL 1",nis:"12346",status:"Aktif"},{id:3,name:"Budi Santoso",kelas:"XII RPL 2",nis:"12347",status:"Aktif"},{id:4,name:"Dewi Putri",kelas:"XII RPL 2",nis:"12348",status:"Tidak Aktif"},{id:5,name:"Eko Prasetyo",kelas:"XII RPL 3",nis:"12349",status:"Aktif"},{id:6,name:"Fitri Handayani",kelas:"XII RPL 3",nis:"12350",status:"Aktif"}],s=[{id:1,name:"Drs. Suryanto",mapel:"Matematika",nip:"198501012010011001",status:"Aktif"},{id:2,name:"Sri Wahyuni, S.Pd",mapel:"Bahasa Indonesia",nip:"198601022010012002",status:"Aktif"},{id:3,name:"Ahmad Hidayat, M.Pd",mapel:"Pemrograman Web",nip:"198701032010013003",status:"Aktif"},{id:4,name:"Rina Susanti, S.Kom",mapel:"Basis Data",nip:"198801042010014004",status:"Tidak Aktif"},{id:5,name:"Dr. Bambang Kusuma",mapel:"Sistem Operasi",nip:"198901052010015005",status:"Aktif"}],a=r.filter(c=>c.status==="Aktif").length,o=s.filter(c=>c.status==="Aktif").length,l=t==="students"?r.filter(c=>c.name.toLowerCase().includes(n.toLowerCase())||c.nis.includes(n)):s.filter(c=>c.name.toLowerCase().includes(n.toLowerCase())||c.nip.includes(n));return u.jsxs(UL,{children:[u.jsx(os,{children:"Manajemen Siswa & Guru"}),u.jsxs(qL,{children:[u.jsxs(K2,{children:[u.jsx("h4",{children:"Total Siswa"}),u.jsx("p",{children:r.length}),u.jsxs("div",{className:"sub-text",children:["Aktif: ",a]})]}),u.jsxs(K2,{children:[u.jsx("h4",{children:"Total Guru"}),u.jsx("p",{children:s.length}),u.jsxs("div",{className:"sub-text",children:["Aktif: ",o]})]})]}),u.jsxs(HL,{children:[u.jsx(W2,{active:t==="students",onClick:()=>e("students"),children:"Data Siswa"}),u.jsx(W2,{active:t==="teachers",onClick:()=>e("teachers"),children:"Data Guru"})]}),u.jsxs(XL,{whileHover:{scale:1.02},whileTap:{scale:.98},children:["Add New ",t==="students"?"Siswa":"Guru"]}),u.jsxs(WL,{children:[u.jsx(YL,{type:"text",placeholder:`Cari ${t==="students"?"siswa":"guru"}...`,value:n,onChange:c=>i(c.target.value)}),u.jsx(KL,{children:l.map(c=>u.jsxs(GL,{status:c.status,whileHover:{scale:1.01},whileTap:{scale:.99},children:[u.jsxs("div",{className:"card-content",children:[u.jsx("h3",{children:c.name}),t==="students"?u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Kelas: ",c.kelas]}),u.jsxs("p",{children:["NIS: ",c.nis]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("p",{children:["Mata Pelajaran: ",c.mapel]}),u.jsxs("p",{children:["NIP: ",c.nip]})]})]}),u.jsx("div",{className:"card-status",children:u.jsx("div",{className:"status",children:c.status})})]},c.id))})]})]})}const QL=x.div`
  padding: 2rem;
  color: white;
`,ZL=x.div`
  display: grid;
  gap: 1rem;
`,eR=x(E.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,tR=x.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,nR=x.div`
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
`,iR=x.div`
  display: flex;
  gap: 0.5rem;
`,G2=x(E.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.delete?"#ff4444":t.edit?"#ffbb33":"#00ff87"};
  color: white;
`,rR=x(E.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;function sR(){const[t,e]=j.useState([{id:1,title:"Prestasi Gemilang di Olimpiade Sains",date:"15 Februari 2024",image:"/images/berita/berita1.jpg",excerpt:"Siswa SMKN 1 Bulan meraih medali emas..."}]);return u.jsxs(QL,{children:[u.jsx(os,{children:"Berita Sekolah"}),u.jsx(rR,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Add New Article"}),u.jsx(ZL,{children:t.map(n=>u.jsxs(eR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(tR,{src:n.image,alt:n.title}),u.jsxs(nR,{children:[u.jsx("h3",{children:n.title}),u.jsx("div",{className:"date",children:n.date}),u.jsx("p",{children:n.excerpt})]}),u.jsxs(iR,{children:[u.jsx(G2,{edit:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Edit"}),u.jsx(G2,{delete:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Delete"})]})]},n.id))})]})}const aR=x.div`
  padding: 2rem;
  color: white;
`,oR=x.div`
  display: grid;
  gap: 1rem;
`,lR=x(E.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,cR=x.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,uR=x.div`
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
`,dR=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Rd=x(E.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function hR(){const[t]=j.useState([{id:1,title:"Prestasi RPL di Lomba Coding",author:"Moderator RPL",status:"pending",category:"Rekayasa Perangkat Lunak",image:"/images/program/rpl.jpg",description:"Tim RPL berhasil meraih juara dalam kompetisi coding tingkat nasional."},{id:2,title:"Workshop Jaringan Cisco",author:"Moderator TKJ",status:"approved",category:"Teknik Komputer dan Jaringan",image:"/images/program/tkj.jpg",description:"Siswa TKJ mengikuti workshop sertifikasi Cisco."},{id:3,title:"Proyek Multimedia Interaktif",author:"Moderator MM",status:"pending",category:"Multimedia",image:"/images/program/mm.jpg",description:"Karya siswa MM dipamerkan dalam expo teknologi."}]);return u.jsxs(aR,{children:[u.jsx(os,{children:"Berita Program Keahlian"}),u.jsx(oR,{children:t.map(e=>u.jsxs(lR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(cR,{src:e.image,alt:e.title}),u.jsxs(uR,{status:e.status,children:[u.jsx("h3",{children:e.title}),u.jsx("div",{className:"status",children:e.status.toUpperCase()}),u.jsxs("div",{className:"author",children:["By: ",e.author]}),u.jsx("div",{className:"category",children:e.category}),u.jsx("p",{children:e.description})]}),u.jsxs(dR,{children:[u.jsx(Rd,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&u.jsxs(u.Fragment,{children:[u.jsx(Rd,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),u.jsx(Rd,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const fR=x.div`
  padding: 2rem;
  color: white;
`;x.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;const pR=x.div`
  display: grid;
  gap: 1rem;
`,gR=x(E.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`,mR=x.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`,yR=x.div`
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
`,vR=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Dd=x(E.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${t=>t.approve?"#00ff87":t.reject?"#ff4444":t.view?"#60efff":"rgba(255, 255, 255, 0.1)"};
  color: white;
  width: 100px;
`;function xR(){const[t]=j.useState([{id:1,title:"Lomba Futsal Antar Sekolah",author:"Moderator Olahraga",status:"pending",image:"/images/extra/futsal.jpg",description:"Tim futsal sekolah akan mengikuti turnamen antar SMK se-Kota."},{id:2,title:"Festival Seni Tahunan",author:"Moderator Seni",status:"approved",image:"/images/extra/seni.jpg",description:"Penampilan spektakuler dari klub seni dalam festival tahunan."},{id:3,title:"Kompetisi Robotik",author:"Moderator Robotik",status:"rejected",image:"/images/extra/robotik.jpg",description:"Persiapan tim robotik menghadapi kompetisi nasional."}]);return u.jsxs(fR,{children:[u.jsx(os,{children:"Berita Ekstrakurikuler"}),u.jsx(pR,{children:t.map((e,n)=>u.jsxs(gR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[u.jsx(mR,{src:e.image,alt:e.title}),u.jsxs(yR,{status:e.status,children:[u.jsx("h3",{children:e.title}),u.jsx("div",{className:"status",children:e.status.toUpperCase()}),u.jsxs("div",{className:"author",children:["By: ",e.author]}),u.jsx("p",{children:e.description})]}),u.jsxs(vR,{children:[u.jsx(Dd,{view:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View"}),e.status==="pending"&&u.jsxs(u.Fragment,{children:[u.jsx(Dd,{approve:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Approve"}),u.jsx(Dd,{reject:!0,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Reject"})]})]})]},e.id))})]})}const bR=x.div`
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
`,kR=x.div`
  text-align: center;
  margin-bottom: 3rem;
`,wR=x.div`
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
`,_R=x.h2`
  color: #00ff87;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,jR=x.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`,SR=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,Y2=x(Sx)`
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
`,PR=x.button`
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
`;function CR(){const{user:t,handleLogout:e}=dn(),[n,i]=j.useState({namaLengkap:"",kelasAkun:"",profileImage:"/default-avatar.jpg"});j.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{data:a,error:o}=await st.from("akun").select("namaLengkap, kelasAkun, profileImage").eq("id",t.id).single();if(o)throw o;a&&i(l=>({...l,namaLengkap:a.namaLengkap||"Nama Belum Diatur",kelasAkun:a.kelasAkun||"Kelas Belum Diatur",profileImage:a.profileImage||"/default-avatar.jpg"}))}catch(a){console.error("Error:",a)}})()},[t]);const r=()=>{e(),navigate("/")};return u.jsxs(bR,{children:[u.jsxs(kR,{children:[u.jsx(wR,{children:u.jsx("img",{src:n.profileImage||"/default-avatar.jpg",alt:"Profile"})}),u.jsx(_R,{children:n.namaLengkap||"Belum diatur"}),u.jsx(jR,{children:n.kelasAkun||"Kelas belum diatur"})]}),u.jsxs(SR,{children:[u.jsxs(Y2,{to:"/user/profile",children:[u.jsx(pg,{})," Profil"]}),u.jsxs(Y2,{to:"/user/gallery",children:[u.jsx(B9,{})," Galeri"]})]}),u.jsxs(PR,{onClick:r,children:[u.jsx(X5,{})," Logout"]})]})}const TR=x.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,ER=x.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;function MR(){return u.jsxs(TR,{children:[u.jsx(CR,{}),u.jsx(ER,{children:u.jsx(Ip,{})})]})}const AR=x.div`
  color: white;
  max-width: 800px;
  margin: 0 auto;
`,OR=x.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`,LR=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,RR=x(E.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`,DR=x.div`
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
`,zR=x.div`
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
`,IR=x.div`
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
`,$R=x.div`
  padding: 0 1rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  
  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`,FR=()=>{const t=[{id:1,username:"john_doe",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan1.jpg",caption:"Kegiatan praktek di lab komputer 🖥️",likes:124,comments:8,timestamp:"2 jam yang lalu"},{id:2,username:"jane_smith",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile2.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan2.jpg",caption:"Workshop UI/UX Design bersama praktisi industri 🎨",likes:89,comments:5,timestamp:"5 jam yang lalu"},{id:3,username:"mike_wilson",avatar:"https://raw.githubusercontent.com/hfzt07/dbweb/main/profile3.jpg",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan3.jpg",caption:"Presentasi project akhir semester 📊",likes:156,comments:12,timestamp:"8 jam yang lalu"}];return u.jsxs(AR,{children:[u.jsx(OR,{children:"Beranda"}),u.jsx(LR,{children:t.map(e=>u.jsxs(RR,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:[u.jsxs(DR,{children:[u.jsx("div",{className:"avatar",children:u.jsx("img",{src:e.avatar,alt:e.username})}),u.jsxs("div",{className:"user-info",children:[u.jsx("div",{className:"username",children:e.username}),u.jsx("div",{className:"timestamp",children:e.timestamp})]})]}),u.jsx(zR,{children:u.jsx("img",{src:e.image,alt:"Post"})}),u.jsxs(IR,{children:[u.jsxs("button",{children:[u.jsx(V5,{})," ",u.jsx("span",{children:e.likes})]}),u.jsxs("button",{children:[u.jsx($9,{})," ",u.jsx("span",{children:e.comments})]}),u.jsx("button",{children:u.jsx(J9,{})})]}),u.jsxs($R,{children:[u.jsx("span",{className:"username",children:e.username}),e.caption]})]},e.id))})]})},q2=x.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`,BR=x.section`
  margin-bottom: 44px;
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`,NR=x.div`
  width: 150px;
  flex-shrink: 0;
`,VR=x.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,UR=x.div`
  flex: 1;
`,HR=x.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,WR=x.h2`
  font-size: 28px;
  font-weight: 300;
  color: white;
`,KR=x.button`
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: transparent;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,GR=x.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  margin-bottom: 20px;
`,zd=x.li`
  color: white;
  font-size: 16px;

  span {
    font-weight: 600;
  }
`,YR=x.div`
  color: white;

  .fullname {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .bio {
    margin-top: 4px;
    white-space: pre-line;
  }
`,qR=x.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`,XR=x.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`,X2=x.button`
  border: none;
  background: none;
  padding: 12px 0;
  color: ${t=>t.active?"white":"rgba(255, 255, 255, 0.5)"};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${t=>t.active?"white":"transparent"};
  }

  svg {
    font-size: 12px;
  }
`,JR=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding-top: 28px;

  @media (max-width: 768px) {
    gap: 3px;
  }
`,QR=x.div`
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
`,ZR=x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.2s ease;

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
`;function eD(){const t=de(),{user:e}=dn(),[n,i]=j.useState("posts"),[r,s]=j.useState(null),[a,o]=j.useState([]),[l,c]=j.useState(!0);return j.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:h,error:f}=await st.from("akun").select("*").eq("id",e.id).single();if(f)throw f;const{data:p,error:g}=await st.from("posts").select("*").eq("user_id",e.id).eq("category","public").order("created_at",{ascending:!1});if(g)throw g;s(h),o(p||[])}catch(h){console.error("Error:",h)}finally{c(!1)}})()},[e]),l?u.jsx(q2,{children:"Loading..."}):u.jsxs(q2,{children:[u.jsxs(BR,{children:[u.jsx(NR,{children:u.jsx(VR,{children:u.jsx("img",{src:(r==null?void 0:r.profileImage)||"/default-avatar.jpg",alt:"Profile"})})}),u.jsxs(UR,{children:[u.jsxs(HR,{children:[u.jsx(WR,{children:r==null?void 0:r.namaLengkap}),u.jsx(KR,{onClick:()=>t("/user/profile/settings"),children:"Edit Profile"})]}),u.jsxs(GR,{children:[u.jsxs(zd,{children:[u.jsx("span",{children:a.length})," posts"]}),u.jsxs(zd,{children:[u.jsx("span",{children:"0"})," followers"]}),u.jsxs(zd,{children:[u.jsx("span",{children:"0"})," following"]})]}),u.jsxs(YR,{children:[u.jsx("div",{className:"fullname",children:r==null?void 0:r.namaLengkap}),u.jsx("div",{children:r==null?void 0:r.kelasAkun}),(r==null?void 0:r.bioAkun)&&u.jsx("div",{className:"bio",children:r.bioAkun})]})]})]}),u.jsxs(qR,{children:[u.jsxs(XR,{children:[u.jsxs(X2,{active:n==="posts",onClick:()=>i("posts"),children:[u.jsx(Q9,{})," POSTS"]}),u.jsxs(X2,{active:n==="saved",onClick:()=>i("saved"),children:[u.jsx(O9,{})," SAVED"]})]}),n==="posts"&&u.jsx(JR,{children:a.map(d=>u.jsxs(QR,{children:[u.jsx("img",{src:d.image_url,alt:d.title||"Post"}),u.jsx(ZR,{className:"overlay",children:u.jsxs("div",{className:"stats",children:[u.jsx("span",{children:"❤️ 0"}),u.jsx("span",{children:"💬 0"})]})})]},d.id))})]})]})}const tD=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,nD=x(E.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,iD=x.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,rD=x.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,fn=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Qt=x.label`
  color: #00ff87;
  font-size: 0.9rem;
`,On=x.input`
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
`,sD=x.textarea`
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
`,aD=x(E.button)`
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
`,Ln=x.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,oD=x.div`
  text-align: center;
  margin-bottom: 2rem;
`,lD=x.div`
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
`,cD=x.div`
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
`,uD=x.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;function dD(){const t=de(),{user:e}=dn(),[n,i]=j.useState(!1),[r,s]=j.useState(null),[a,o]=j.useState("/default-avatar.jpg"),[l,c]=j.useState({namaLengkap:"",kelasAkun:"",bioAkun:"",emailAkun:"",noTelpAkun:"",alamatAkun:"",instagramAkun:"",tiktokAkun:"",twitterAkun:""});j.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:p,error:g}=await st.from("akun").select("*").eq("id",e.id).single();if(g)throw g;p&&(c({namaLengkap:p.namaLengkap||"",kelasAkun:p.kelasAkun||"",bioAkun:p.bioAkun||"",emailAkun:p.emailAkun||"",noTelpAkun:p.noTelpAkun||"",alamatAkun:p.alamatAkun||"",instagramAkun:p.instagramAkun||"",tiktokAkun:p.tiktokAkun||"",twitterAkun:p.twitterAkun||""}),p.profileImage&&o(p.profileImage))}catch(p){console.error("Error:",p)}})()},[e]);const d=f=>{const p=f.target.files[0];if(p){s(p);const g=new FileReader;g.onloadend=()=>{o(g.result)},g.readAsDataURL(p)}},h=async f=>{f.preventDefault(),i(!0);try{let p=a;if(r){const m=r.name.split(".").pop(),v=`profiles/${`${e.id}/profile.${m}`}`;try{const{data:w}=await st.storage.from("galery").list(`profiles/${e.id}`);(w==null?void 0:w.length)>0&&await st.storage.from("galery").remove(w.map(_=>`profiles/${e.id}/${_.name}`))}catch{console.log("No existing profile picture")}const{error:y}=await st.storage.from("galery").upload(v,r,{cacheControl:"3600",upsert:!0});if(y)throw y;const{data:b}=st.storage.from("galery").getPublicUrl(v);p=b.publicUrl}const{error:g}=await st.from("akun").update({namaLengkap:l.namaLengkap,kelasAkun:l.kelasAkun,bioAkun:l.bioAkun,emailAkun:l.emailAkun,noTelpAkun:l.noTelpAkun,alamatAkun:l.alamatAkun,profileImage:p,instagramAkun:l.instagramAkun,tiktokAkun:l.tiktokAkun,twitterAkun:l.twitterAkun}).eq("id",e.id);if(g)throw console.error("Update error:",g),g;alert("Profil berhasil disimpan!"),t("/user/profile")}catch(p){console.error("Error:",p),alert("Terjadi kesalahan saat menyimpan profil")}finally{i(!1)}};return u.jsx(tD,{children:u.jsxs(nD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[u.jsx(iD,{children:"Edit Profil"}),u.jsxs(rD,{onSubmit:h,children:[u.jsxs(oD,{children:[u.jsxs(Qt,{children:["Foto Profil ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsxs(lD,{onClick:()=>document.getElementById("profileImage").click(),children:[u.jsx("img",{src:a,alt:"Profile"}),u.jsxs(cD,{className:"overlay",children:[u.jsx(pg,{})," Ubah Foto"]})]}),u.jsx("input",{id:"profileImage",type:"file",accept:"image/*",onChange:d,style:{display:"none"}})]}),u.jsxs(fn,{children:[u.jsx(Qt,{children:"Nama Lengkap"}),u.jsx(On,{type:"text",value:l.namaLengkap,onChange:f=>c({...l,namaLengkap:f.target.value}),placeholder:"Masukkan nama lengkap",required:!0})]}),u.jsxs(fn,{children:[u.jsx(Qt,{children:"Kelas"}),u.jsx(On,{type:"text",value:l.kelasAkun,onChange:f=>c({...l,kelasAkun:f.target.value}),placeholder:"Contoh: XII RPL 1",required:!0})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:["Bio ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(sD,{value:l.bioAkun,onChange:f=>c({...l,bioAkun:f.target.value}),placeholder:"Ceritakan tentang dirimu..."})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:["Email ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"email",value:l.emailAkun,onChange:f=>c({...l,emailAkun:f.target.value}),placeholder:"Masukkan email"})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:["Nomor Telepon ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"tel",value:l.noTelpAkun,onChange:f=>c({...l,noTelpAkun:f.target.value}),placeholder:"Masukkan nomor telepon"})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:["Alamat ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"text",value:l.alamatAkun,onChange:f=>c({...l,alamatAkun:f.target.value}),placeholder:"Masukkan alamat"})]}),u.jsxs(uD,{children:[u.jsxs(fn,{children:[u.jsxs(Qt,{children:[u.jsx(D5,{})," Instagram ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"text",value:l.instagramAkun,onChange:f=>c({...l,instagramAkun:f.target.value}),placeholder:"Username Instagram (tanpa @)"})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:[u.jsx(z5,{})," TikTok ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"text",value:l.tiktokAkun,onChange:f=>c({...l,tiktokAkun:f.target.value}),placeholder:"Username TikTok (tanpa @)"})]}),u.jsxs(fn,{children:[u.jsxs(Qt,{children:[u.jsx(C9,{})," Twitter ",u.jsx(Ln,{children:"(opsional)"})]}),u.jsx(On,{type:"text",value:l.twitterAkun,onChange:f=>c({...l,twitterAkun:f.target.value}),placeholder:"Username Twitter (tanpa @)"})]})]}),u.jsxs(aD,{type:"submit",disabled:n,whileHover:{scale:n?1:1.02},whileTap:{scale:n?1:.98},children:[u.jsx(Y9,{}),n?"Menyimpan...":"Simpan Profil"]})]})]})})}const hD=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,fD=x(E.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
`,pD=x.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,gD=x.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,mD=x.div`
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
`,yD=x.div`
  max-width: 300px;
  margin: 1rem auto;
  
  img {
    width: 100%;
    border-radius: 8px;
  }
`,Id=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$d=x.label`
  color: #00ff87;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
  }
`,J2=x.input`
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
`,vD=x.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,Q2=x.button`
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
`,xD=x(E.button)`
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
`,bD=x.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
`,kD=x.div`
  height: 100%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border-radius: 10px;
  transition: width 0.3s ease;
`,wD=x.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;function _D(){const t=de(),{user:e}=dn(),[n,i]=j.useState(null),[r,s]=j.useState(null),[a,o]=j.useState(""),[l,c]=j.useState(""),[d,h]=j.useState("private"),[f,p]=j.useState(!1),[g,m]=j.useState(0),k=y=>{const b=y.target.files[0];if(b){i(b);const w=new FileReader;w.onloadend=()=>{s(w.result)},w.readAsDataURL(b)}},v=async y=>{if(y.preventDefault(),!(!n||!(e!=null&&e.id))){p(!0);try{const b=new Date().getTime(),w=n.name.split(".").pop(),_=`${b}_${Math.random()}.${w}`,S=`${d==="private"?"gallery":"post"}/${e.id}/${_}`,{error:P}=await st.storage.from("galery").upload(S,n,{cacheControl:"3600",upsert:!1});if(P)throw P;const{data:T}=st.storage.from("galery").getPublicUrl(S),{error:M}=await st.from("posts").insert({user_id:e.id,image_path:S,image_url:T.publicUrl,title:a||null,caption:l||null,category:d,created_at:new Date().toISOString()});if(M)throw M;alert("Foto berhasil diupload!"),t(d==="private"?"/user/gallery":"/user/profile")}catch(b){console.error("Error:",b),alert("Terjadi kesalahan saat upload foto")}finally{p(!1)}}};return u.jsx(hD,{children:u.jsxs(fD,{children:[u.jsx(pD,{children:"Upload Foto"}),u.jsxs(gD,{onSubmit:v,children:[u.jsxs(mD,{onClick:()=>document.getElementById("fileInput").click(),children:[r?u.jsx(yD,{children:u.jsx("img",{src:r,alt:"Preview"})}):u.jsxs("div",{children:[u.jsx(U5,{size:40,color:"#00ff87"}),u.jsx("p",{style:{color:"white",marginTop:"1rem"},children:"Klik untuk pilih foto"})]}),u.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:k})]}),u.jsxs(Id,{children:[u.jsxs($d,{children:["Judul Foto ",u.jsx("span",{children:"(opsional)"})]}),u.jsx(J2,{type:"text",value:a,onChange:y=>o(y.target.value),placeholder:"Masukkan judul foto..."})]}),u.jsxs(Id,{children:[u.jsxs($d,{children:["Caption ",u.jsx("span",{children:"(opsional)"})]}),u.jsx(J2,{type:"text",value:l,onChange:y=>c(y.target.value),placeholder:"Tulis caption untuk foto ini..."})]}),u.jsxs(Id,{children:[u.jsx($d,{children:"Kategori"}),u.jsxs(vD,{children:[u.jsxs(Q2,{type:"button",selected:d==="private",onClick:()=>h("private"),children:[u.jsx(U9,{})," Private Gallery"]}),u.jsxs(Q2,{type:"button",selected:d==="public",onClick:()=>h("public"),children:[u.jsx(B5,{})," Public Post"]})]})]}),f&&u.jsxs(bD,{children:[u.jsx(kD,{style:{width:`${g}%`}}),u.jsxs(wD,{children:[Math.round(g),"%"]})]}),u.jsxs(xD,{type:"submit",disabled:f||!n,whileHover:{scale:f?1:1.02},whileTap:{scale:f?1:.98},children:[u.jsx(nE,{}),f?"Uploading...":"Upload Foto"]})]})]})})}const jD=x.aside`
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
`,SD=x.div`
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
`,PD=x.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`,Z2=x(Sx)`
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
`,CD=x.button`
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
`;function TD(){const{handleLogout:t}=dn();return u.jsxs(jD,{children:[u.jsxs(SD,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),u.jsx("h1",{children:"SMKN 1 Bulan"})]}),u.jsxs(PD,{children:[u.jsxs(Z2,{to:"/moderator/profile",children:[u.jsx(pg,{})," Profil"]}),u.jsxs(Z2,{to:"/moderator/posting-berita",children:[u.jsx(G5,{})," Posting Berita"]}),u.jsxs(CD,{onClick:t,children:[u.jsx(X5,{})," Logout"]})]})]})}const ED=x.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,MD=x.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;function AD(){return u.jsxs(ED,{children:[u.jsx(TD,{}),u.jsx(MD,{children:u.jsx(Ip,{})})]})}const OD=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,LD=x(E.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,RD=x(E.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,DD=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
`,Go=x.div`
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
`,zD=x.span`
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;function ID(){const{user:t}=dn();return u.jsxs(OD,{children:[u.jsx(LD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Profil Moderator"}),u.jsx(RD,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:u.jsxs(DD,{children:[u.jsxs(Go,{children:[u.jsx("label",{children:"Username"}),u.jsx("p",{children:(t==null?void 0:t.username)||"Tidak tersedia"})]}),u.jsxs(Go,{children:[u.jsx("label",{children:"Role"}),u.jsx(zD,{children:(t==null?void 0:t.role)||"Moderator"})]}),u.jsxs(Go,{children:[u.jsx("label",{children:"Status"}),u.jsx("p",{children:"Aktif"})]}),u.jsxs(Go,{children:[u.jsx("label",{children:"Bergabung Sejak"}),u.jsx("p",{children:"Januari 2024"})]})]})})]})}const $D=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,FD=x(E.h2)`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,BD=x.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Fd=x.div`
  margin-bottom: 1.5rem;
`,Bd=x.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
`,ND=x.input`
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
`,VD=x.textarea`
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
`,UD=x.div`
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
`,HD=x.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-top: 1rem;
`,WD=x(E.button)`
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
`;function KD(){const[t,e]=j.useState(""),[n,i]=j.useState(""),[r,s]=j.useState(null),[a,o]=j.useState(null),[l,c]=j.useState(!1),d=f=>{const p=f.target.files[0];if(p){if(p.size>5*1024*1024){alert("File terlalu besar! Maksimal 5MB");return}s(p);const g=new FileReader;g.onloadend=()=>{o(g.result)},g.readAsDataURL(p)}},h=async f=>{f.preventDefault(),c(!0);try{await new Promise(p=>setTimeout(p,1500)),console.log("Berita Data:",{title:t,content:n,image:r}),e(""),i(""),s(null),o(null),alert("Berita berhasil diposting! (simulasi)")}catch(p){console.error("Error:",p),alert("Gagal memposting berita. Silakan coba lagi.")}finally{c(!1)}};return u.jsxs($D,{children:[u.jsx(FD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Posting Berita"}),u.jsxs(BD,{onSubmit:h,children:[u.jsxs(Fd,{children:[u.jsx(Bd,{children:"Judul Berita"}),u.jsx(ND,{type:"text",value:t,onChange:f=>e(f.target.value),required:!0,placeholder:"Masukkan judul berita..."})]}),u.jsxs(Fd,{children:[u.jsx(Bd,{children:"Gambar Berita"}),u.jsxs(UD,{onClick:()=>document.getElementById("imageInput").click(),children:[u.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:d,style:{display:"none"}}),a?u.jsx(HD,{src:a,alt:"Preview"}):u.jsxs(u.Fragment,{children:[u.jsx(U5,{style:{fontSize:"2rem",color:"#00ff87",marginBottom:"1rem"}}),u.jsx("p",{style:{color:"white"},children:"Klik untuk upload gambar"})]})]})]}),u.jsxs(Fd,{children:[u.jsx(Bd,{children:"Isi Berita"}),u.jsx(VD,{value:n,onChange:f=>i(f.target.value),required:!0,placeholder:"Tulis isi berita..."})]}),u.jsx(WD,{type:"submit",disabled:l||!t||!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:l?"Memposting...":"Posting Berita"})]})]})}const GD=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,YD=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,qD=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,XD=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,JD=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,QD=x.h2`
  color: #00ff87;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`,Yo=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
`,ZD=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,qo=x(E.div)`
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
`,ez=x(E.button)`
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
`,tz=x.img`
  width: 150px;
  height: 150px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
`;function nz(){const t=de();return u.jsxs(GD,{children:[u.jsx(ez,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(YD,{children:[u.jsxs(qD,{children:[u.jsx(XD,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"SMKN 1 Bulan"}),u.jsx(tz,{src:"../public/images/logo.png",alt:"Logo SMKN 1 Bulan"})]}),u.jsxs(ZD,{children:[u.jsxs(qo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(eo,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Lulusan"})]}),u.jsxs(qo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(di,{}),u.jsx("h3",{children:"50+"}),u.jsx("p",{children:"Guru & Staff"})]}),u.jsxs(qo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(tE,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Prestasi"})]}),u.jsxs(qo,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(N5,{}),u.jsx("h3",{children:"25+"}),u.jsx("p",{children:"Mitra Industri"})]})]}),u.jsxs(JD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[u.jsx(QD,{children:"Sejarah"}),u.jsx(Yo,{children:"SMKN 1 Bulan didirikan pada tahun 2005 sebagai respons terhadap kebutuhan akan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Berawal dari visi untuk menciptakan generasi yang kompeten dan berakhlak mulia, sekolah ini dibangun di atas lahan seluas 2 hektar yang sebelumnya merupakan area perkebunan. Dengan dukungan penuh dari pemerintah daerah dan masyarakat sekitar, pembangunan fasilitas pendidikan dimulai dengan tiga program keahlian utama: Rekayasa Perangkat Lunak, Teknik Komputer dan Jaringan, serta Multimedia."}),u.jsx(Yo,{children:"Dalam perjalanannya selama lima tahun pertama, SMKN 1 Bulan terus mengembangkan infrastruktur dan kualitas pendidikannya. Laboratorium komputer dilengkapi dengan perangkat terkini, perpustakaan digital dibangun untuk mendukung pembelajaran, dan kerjasama dengan berbagai perusahaan teknologi mulai dijalin. Prestasi demi prestasi mulai diraih oleh para siswa dalam berbagai kompetisi tingkat kabupaten, provinsi, hingga nasional. Hal ini semakin memantapkan posisi SMKN 1 Bulan sebagai salah satu sekolah kejuruan unggulan di bidang teknologi informasi."}),u.jsx(Yo,{children:"Memasuki dekade kedua, SMKN 1 Bulan mengembangkan sayapnya dengan membuka program keahlian baru yaitu Bisnis Digital, merespons perkembangan era digital dan e-commerce. Inovasi pembelajaran terus dilakukan dengan mengadopsi teknologi terbaru dan metode pengajaran yang lebih interaktif. Program magang dan sertifikasi kompetensi diperkuat melalui kerjasama dengan lebih dari 25 mitra industri, memberikan kesempatan bagi siswa untuk mendapatkan pengalaman kerja nyata dan meningkatkan prospek karir mereka setelah lulus."}),u.jsx(Yo,{children:"Hingga saat ini, SMKN 1 Bulan telah menghasilkan lebih dari 1000 lulusan yang tersebar di berbagai perusahaan teknologi terkemuka, baik di dalam maupun luar negeri. Beberapa alumni bahkan telah sukses mendirikan startup teknologi mereka sendiri. Dengan dukungan lebih dari 50 tenaga pendidik dan staff yang berkualitas, SMKN 1 Bulan terus berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan siap menghadapi tantangan di era digital."})]})]})]})}const iz=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,rz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,sz=x.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,az=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,oz=x.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem 0;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`,lz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Xo=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,cz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Nd=x(E.div)`
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
`,uz=x(E.button)`
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
`;function dz(){const t=de();return u.jsxs(iz,{children:[u.jsx(uz,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(rz,{children:[u.jsxs(sz,{children:[u.jsx(az,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kepala Sekolah"}),u.jsx(oz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"}),u.jsx("h2",{style:{color:"#00ff87",marginTop:"1rem"},children:"Dr. Ahmad Sulaiman, M.Pd"})]}),u.jsxs(cz,{children:[u.jsxs(Nd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(eo,{}),u.jsx("h3",{children:"25+"}),u.jsx("p",{children:"Tahun Pengalaman"})]}),u.jsxs(Nd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(I5,{}),u.jsx("h3",{children:"15+"}),u.jsx("p",{children:"Penghargaan"})]}),u.jsxs(Nd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(L9,{}),u.jsx("h3",{children:"10+"}),u.jsx("p",{children:"Program Inovasi"})]})]}),u.jsxs(lz,{children:[u.jsx(Xo,{children:"Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Sebagai Kepala SMKN 1 Bulan, saya menyambut baik dan merasa bangga atas kepercayaan yang diberikan untuk memimpin lembaga pendidikan yang fokus pada pengembangan teknologi dan keterampilan digital ini."}),u.jsx(Xo,{children:"SMKN 1 Bulan hadir sebagai solusi atas kebutuhan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan berakhlak mulia. Melalui berbagai program inovatif dan kerjasama dengan industri, kami terus berupaya meningkatkan kualitas pembelajaran dan pengembangan siswa."}),u.jsx(Xo,{children:"Kepada seluruh siswa, saya mengajak untuk terus semangat dalam menuntut ilmu dan mengembangkan diri. Jadikan masa sekolah ini sebagai kesempatan emas untuk mempersiapkan diri menghadapi tantangan di era digital. Kepada para guru dan staff, mari kita bersama-sama menciptakan lingkungan belajar yang kondusif dan inspiratif bagi seluruh warga sekolah."}),u.jsx(Xo,{children:"Akhir kata, saya mengucapkan terima kasih atas dukungan semua pihak dalam memajukan SMKN 1 Bulan. Mari kita bersama-sama mewujudkan visi sekolah untuk menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Wassalamu'alaikum Warahmatullahi Wabarakatuh."})]})]})]})}const hz=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,fz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,pz=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,gz=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,mz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Jo=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,yz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Vd=x(E.div)`
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
`,vz=x(E.button)`
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
`;function xz(){const t=de();return u.jsxs(hz,{children:[u.jsx(vz,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(fz,{children:[u.jsx(pz,{children:u.jsx(gz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Visi & Misi"})}),u.jsxs(yz,{children:[u.jsxs(Vd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(V9,{}),u.jsx("h3",{children:"Visi"}),u.jsx("p",{children:"Terdepan dalam Inovasi"})]}),u.jsxs(Vd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(R9,{}),u.jsx("h3",{children:"Misi"}),u.jsx("p",{children:"Pengembangan Berkelanjutan"})]}),u.jsxs(Vd,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[u.jsx(N5,{}),u.jsx("h3",{children:"Nilai"}),u.jsx("p",{children:"Integritas & Profesional"})]})]}),u.jsxs(mz,{children:[u.jsx(Jo,{children:"Visi SMKN 1 Bulan adalah menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Kami berkomitmen untuk menciptakan lingkungan pembelajaran yang mendukung pengembangan potensi setiap siswa, baik dalam aspek akademik maupun karakter."}),u.jsx(Jo,{children:"Dalam mewujudkan visi tersebut, kami menjalankan misi untuk menyelenggarakan pendidikan berkualitas berbasis teknologi yang relevan dengan kebutuhan industri. Kami juga fokus pada pengembangan karakter dan kepribadian siswa melalui berbagai program pembinaan dan kegiatan ekstrakurikuler yang terarah."}),u.jsx(Jo,{children:"Misi kami juga mencakup upaya membangun kerjasama yang kuat dengan industri dan masyarakat. Hal ini penting untuk memastikan bahwa kurikulum dan program pembelajaran kami selalu sejalan dengan perkembangan teknologi dan kebutuhan dunia kerja. Selain itu, kami terus meningkatkan kompetensi guru dan staff melalui berbagai program pengembangan profesional."}),u.jsx(Jo,{children:"Dengan visi dan misi yang jelas ini, SMKN 1 Bulan berkomitmen untuk terus berkembang dan berinovasi dalam menghadapi tantangan pendidikan di era digital. Kami percaya bahwa dengan fondasi yang kuat dalam nilai-nilai integritas, profesionalisme, dan inovasi, kami dapat menghasilkan lulusan yang siap berkontribusi positif bagi masyarakat dan industri."})]})]})]})}const bz=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,kz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,wz=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,_z=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,jz=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Sz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Qo=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Pz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Zo=x(E.div)`
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
`,Cz=x(E.button)`
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
`;function Tz(){const t=de();return u.jsxs(bz,{children:[u.jsx(Cz,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(kz,{children:[u.jsxs(wz,{children:[u.jsx(_z,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Akademik"}),u.jsx(jz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/akademik.jpg",alt:"Program Akademik"})]}),u.jsxs(Pz,{children:[u.jsxs(Zo,{children:[u.jsx(N9,{}),u.jsx("h3",{children:"Praktik Industri"}),u.jsx("p",{children:"Pengalaman Kerja Nyata"})]}),u.jsxs(Zo,{children:[u.jsx(z9,{}),u.jsx("h3",{children:"Teaching Factory"}),u.jsx("p",{children:"Pembelajaran Berbasis Produk"})]}),u.jsxs(Zo,{children:[u.jsx(eo,{}),u.jsx("h3",{children:"Sertifikasi"}),u.jsx("p",{children:"Kompetensi Terstandar"})]}),u.jsxs(Zo,{children:[u.jsx(I5,{}),u.jsx("h3",{children:"Kompetisi"}),u.jsx("p",{children:"Prestasi Nasional"})]})]}),u.jsxs(Sz,{children:[u.jsx(Qo,{children:"Program akademik di SMKN 1 Bulan dirancang untuk mempersiapkan siswa menghadapi tantangan industri digital. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, siswa tidak hanya belajar teori tetapi juga praktik langsung menggunakan teknologi terkini."}),u.jsx(Qo,{children:"Teaching Factory menjadi salah satu program unggulan dimana siswa belajar dalam lingkungan yang menyerupai industri sesungguhnya. Mereka mengerjakan proyek nyata dari klien dan belajar mengelola proyek dari awal hingga akhir."}),u.jsx(Qo,{children:"Program sertifikasi kompetensi memastikan lulusan memiliki kualifikasi yang diakui industri. Kami bekerjasama dengan berbagai lembaga sertifikasi untuk memberikan kesempatan siswa mendapatkan sertifikat kompetensi di bidangnya."}),u.jsx(Qo,{children:"Siswa juga didorong untuk aktif mengikuti berbagai kompetisi tingkat daerah hingga nasional. Hal ini membantu mengasah kemampuan teknis dan soft skill mereka, serta membuka peluang networking dengan industri."})]})]})]})}const Ez=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Mz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,Az=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,Oz=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Lz=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Rz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,el=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Dz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,tl=x(E.div)`
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
`,zz=x(E.button)`
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
`;function Iz(){const t=de();return u.jsxs(Ez,{children:[u.jsx(zz,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(Mz,{children:[u.jsxs(Az,{children:[u.jsx(Oz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Penguatan Karakter"}),u.jsx(Lz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/karakter.jpg",alt:"Penguatan Karakter"})]}),u.jsxs(Dz,{children:[u.jsxs(tl,{children:[u.jsx(G9,{}),u.jsx("h3",{children:"Religius"}),u.jsx("p",{children:"Penguatan Nilai Agama"})]}),u.jsxs(tl,{children:[u.jsx(V5,{}),u.jsx("h3",{children:"Integritas"}),u.jsx("p",{children:"Pembentukan Karakter"})]}),u.jsxs(tl,{children:[u.jsx(F9,{}),u.jsx("h3",{children:"Gotong Royong"}),u.jsx("p",{children:"Kerjasama Tim"})]}),u.jsxs(tl,{children:[u.jsx(di,{}),u.jsx("h3",{children:"Sosial"}),u.jsx("p",{children:"Kepedulian Masyarakat"})]})]}),u.jsxs(Rz,{children:[u.jsx(el,{children:"Program penguatan karakter di SMKN 1 Bulan berfokus pada pembentukan kepribadian siswa yang berakhlak mulia. Melalui berbagai kegiatan keagamaan, siswa diajak untuk mendalami dan mengamalkan nilai-nilai spiritual dalam kehidupan sehari-hari."}),u.jsx(el,{children:"Pembentukan integritas menjadi fokus utama melalui program-program seperti leadership camp, outbound training, dan mentoring karakter. Siswa dilatih untuk menjadi pribadi yang jujur, bertanggung jawab, dan memiliki etika yang baik."}),u.jsx(el,{children:"Nilai gotong royong dan kerjasama tim ditanamkan melalui berbagai kegiatan kelompok dan proyek sosial. Siswa belajar untuk bekerja dalam tim, menghargai perbedaan, dan berkontribusi untuk kepentingan bersama."}),u.jsx(el,{children:"Kepedulian sosial dikembangkan melalui program bakti sosial, kunjungan ke panti asuhan, dan berbagai kegiatan kemasyarakatan lainnya. Hal ini membantu siswa memahami pentingnya empati dan kontribusi positif kepada masyarakat."})]})]})]})}const $z=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Fz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,Bz=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,Nz=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Vz=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Uz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,nl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Hz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,il=x(E.div)`
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
`,Wz=x(E.button)`
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
`;function Kz(){const t=de();return u.jsxs($z,{children:[u.jsx(Wz,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(Fz,{children:[u.jsxs(Bz,{children:[u.jsx(Nz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Ekstrakurikuler"}),u.jsx(Vz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/program-ekstrakurikuler.jpg",alt:"Program Ekstrakurikuler"})]}),u.jsxs(Hz,{children:[u.jsxs(il,{children:[u.jsx(F5,{}),u.jsx("h3",{children:"Olahraga"}),u.jsx("p",{children:"Pengembangan Fisik"})]}),u.jsxs(il,{children:[u.jsx(W5,{}),u.jsx("h3",{children:"Seni"}),u.jsx("p",{children:"Kreativitas & Budaya"})]}),u.jsxs(il,{children:[u.jsx(W9,{}),u.jsx("h3",{children:"Jurnalistik"}),u.jsx("p",{children:"Media & Komunikasi"})]}),u.jsxs(il,{children:[u.jsx(I9,{}),u.jsx("h3",{children:"Coding Club"}),u.jsx("p",{children:"Pemrograman"})]})]}),u.jsxs(Uz,{children:[u.jsx(nl,{children:"Program ekstrakurikuler di SMKN 1 Bulan dirancang untuk mengembangkan bakat dan minat siswa di luar jam pelajaran. Melalui berbagai kegiatan ekstrakurikuler, siswa dapat mengeksplorasi dan mengembangkan potensi diri dalam bidang yang mereka minati."}),u.jsx(nl,{children:"Dalam bidang olahraga, kami memiliki berbagai cabang seperti futsal, basket, dan bulu tangkis. Kegiatan ini tidak hanya melatih fisik tetapi juga mengajarkan nilai-nilai sportivitas, kerjasama tim, dan disiplin."}),u.jsx(nl,{children:"Bidang seni dan budaya diwadahi melalui ekstrakurikuler musik, tari, dan teater. Siswa dapat mengekspresikan kreativitas mereka sekaligus melestarikan budaya lokal melalui berbagai pertunjukan dan festival seni."}),u.jsx(nl,{children:"Untuk mengembangkan kemampuan di bidang teknologi, Coding Club menjadi wadah bagi siswa yang tertarik dengan pemrograman dan pengembangan software. Mereka dapat berkolaborasi dalam berbagai proyek dan mengikuti kompetisi programming."})]})]})]})}const Gz=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Yz=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,qz=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,Xz=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Jz=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Qz=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,rl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Zz=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,sl=x(E.div)`
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
`,eI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ud=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,tI=x(E.button)`
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
`;function nI(){const t=de();return u.jsxs(Gz,{children:[u.jsx(tI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(Yz,{children:[u.jsxs(qz,{children:[u.jsx(Xz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Perpustakaan Digital"}),u.jsx(Jz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus1.jpg",alt:"Perpustakaan Digital"})]}),u.jsxs(Zz,{children:[u.jsxs(sl,{children:[u.jsx(A9,{}),u.jsx("h3",{children:"10.000+"}),u.jsx("p",{children:"Koleksi Digital"})]}),u.jsxs(sl,{children:[u.jsx(fg,{}),u.jsx("h3",{children:"24/7"}),u.jsx("p",{children:"Akses Online"})]}),u.jsxs(sl,{children:[u.jsx(q9,{}),u.jsx("h3",{children:"Mudah"}),u.jsx("p",{children:"Pencarian Cepat"})]}),u.jsxs(sl,{children:[u.jsx(di,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Pengguna Aktif"})]})]}),u.jsxs(Qz,{children:[u.jsx(rl,{children:"Perpustakaan Digital SMKN 1 Bulan merupakan inovasi dalam penyediaan sumber belajar yang dapat diakses kapan saja dan dimana saja. Dengan koleksi digital yang komprehensif, siswa dapat dengan mudah mengakses berbagai referensi untuk mendukung pembelajaran mereka."}),u.jsx(rl,{children:"Sistem perpustakaan digital kami dilengkapi dengan fitur pencarian canggih yang memudahkan siswa menemukan materi yang mereka butuhkan. Koleksi digital mencakup buku teks, jurnal, majalah, dan berbagai sumber belajar digital lainnya yang relevan dengan kurikulum."}),u.jsx(rl,{children:"Selain itu, perpustakaan digital juga terintegrasi dengan sistem pembelajaran online sekolah, memungkinkan guru untuk membuat referensi digital dan membagikannya kepada siswa. Hal ini mendukung proses pembelajaran yang lebih efektif dan interaktif."}),u.jsx(rl,{children:"Kami terus mengembangkan koleksi dan layanan perpustakaan digital untuk memastikan siswa memiliki akses ke sumber belajar terkini yang mendukung pengembangan kompetensi mereka di era digital."}),u.jsxs(eI,{children:[u.jsx(Ud,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus2.jpg",alt:"Area Baca"}),u.jsx(Ud,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus3.jpg",alt:"Ruang Komputer"}),u.jsx(Ud,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus4.jpg",alt:"Koleksi Digital"})]})]})]})]})}const iI=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,rI=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,sI=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,aI=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,oI=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,lI=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,al=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,cI=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,ol=x(E.div)`
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
`,uI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Hd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,dI=x(E.button)`
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
`;function hI(){const t=de();return u.jsxs(iI,{children:[u.jsx(dI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(rI,{children:[u.jsxs(sI,{children:[u.jsx(aI,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Laboratorium Komputer"}),u.jsx(oI,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab1.jpg",alt:"Lab Komputer"})]}),u.jsxs(cI,{children:[u.jsxs(ol,{children:[u.jsx(fg,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Unit Komputer"})]}),u.jsxs(ol,{children:[u.jsx(K5,{}),u.jsx("h3",{children:"1 Gbps"}),u.jsx("p",{children:"Koneksi Internet"})]}),u.jsxs(ol,{children:[u.jsx(J5,{}),u.jsx("h3",{children:"Modern"}),u.jsx("p",{children:"Perangkat Terkini"})]}),u.jsxs(ol,{children:[u.jsx(Q5,{}),u.jsx("h3",{children:"40"}),u.jsx("p",{children:"Kapasitas/Lab"})]})]}),u.jsxs(lI,{children:[u.jsx(al,{children:"Laboratorium Komputer SMKN 1 Bulan dilengkapi dengan perangkat keras dan lunak terkini untuk mendukung pembelajaran praktik siswa. Setiap komputer dilengkapi dengan spesifikasi yang memadai untuk menjalankan berbagai software pengembangan dan desain."}),u.jsx(al,{children:"Fasilitas ini terdiri dari tiga ruang laboratorium yang masing-masing memiliki kapasitas 40 siswa. Setiap lab dilengkapi dengan proyektor, AC, dan jaringan internet berkecepatan tinggi untuk mendukung pembelajaran online dan praktik pemrograman."}),u.jsx(al,{children:"Software yang tersedia mencakup berbagai IDE untuk pemrograman, tools desain grafis, aplikasi office, dan software khusus sesuai kebutuhan jurusan. Semua komputer terhubung dalam jaringan lokal yang memungkinkan sharing resource dan praktik jaringan."}),u.jsx(al,{children:"Laboratorium juga dilengkapi dengan sistem monitoring yang memungkinkan guru untuk memantau dan mengendalikan aktivitas siswa selama pembelajaran praktik. Hal ini memastikan efektivitas pembelajaran dan penggunaan fasilitas yang optimal."}),u.jsxs(uI,{children:[u.jsx(Hd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab2.jpg",alt:"Ruang Praktik"}),u.jsx(Hd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab3.jpg",alt:"Area Diskusi"}),u.jsx(Hd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab4.jpg",alt:"Peralatan Lab"})]})]})]})]})}const fI=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,pI=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,gI=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,mI=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,yI=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,vI=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ll=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,xI=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,cl=x(E.div)`
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
`,bI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Wd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,kI=x(E.button)`
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
`;function wI(){const t=de();return u.jsxs(fI,{children:[u.jsx(kI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(pI,{children:[u.jsxs(gI,{children:[u.jsx(mI,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Studio Multimedia"}),u.jsx(yI,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio1.jpg",alt:"Studio Multimedia"})]}),u.jsxs(xI,{children:[u.jsxs(cl,{children:[u.jsx($5,{}),u.jsx("h3",{children:"Pro"}),u.jsx("p",{children:"Peralatan Fotografi"})]}),u.jsxs(cl,{children:[u.jsx(rE,{}),u.jsx("h3",{children:"4K"}),u.jsx("p",{children:"Kualitas Video"})]}),u.jsxs(cl,{children:[u.jsx(H9,{}),u.jsx("h3",{children:"Studio"}),u.jsx("p",{children:"Recording Audio"})]}),u.jsxs(cl,{children:[u.jsx(fg,{}),u.jsx("h3",{children:"Editing"}),u.jsx("p",{children:"Workstation"})]})]}),u.jsxs(vI,{children:[u.jsx(ll,{children:"Studio Multimedia SMKN 1 Bulan dilengkapi dengan peralatan profesional untuk mendukung pembelajaran praktik siswa jurusan Multimedia. Studio ini dirancang untuk memberikan pengalaman produksi konten digital yang setara dengan standar industri kreatif."}),u.jsx(ll,{children:"Area fotografi dilengkapi dengan berbagai peralatan lighting, backdrop, dan kamera DSLR profesional. Siswa dapat belajar teknik fotografi studio, product photography, dan portrait photography dalam lingkungan yang ideal untuk menghasilkan karya berkualitas tinggi."}),u.jsx(ll,{children:"Studio video production kami memiliki green screen, lighting setup profesional, dan peralatan videografi 4K. Ruang recording audio yang kedap suara memungkinkan siswa untuk memproduksi konten audio berkualitas, mulai dari voice over hingga podcast."}),u.jsx(ll,{children:"Untuk post-production, tersedia workstation editing yang dilengkapi dengan software industri terkini seperti Adobe Creative Suite, DaVinci Resolve, dan berbagai tools profesional lainnya. Siswa dapat mengedit foto, video, dan audio dalam lingkungan yang optimal."}),u.jsxs(bI,{children:[u.jsx(Wd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio2.jpg",alt:"Area Fotografi"}),u.jsx(Wd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio3.jpg",alt:"Video Production"}),u.jsx(Wd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio4.jpg",alt:"Editing Room"})]})]})]})]})}const _I=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,jI=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,SI=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,PI=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,CI=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,TI=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ul=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,EI=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,dl=x(E.div)`
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
`,MI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Kd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,AI=x(E.button)`
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
`;function OI(){const t=de();return u.jsxs(_I,{children:[u.jsx(AI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(jI,{children:[u.jsxs(SI,{children:[u.jsx(PI,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Ruang Praktik Jaringan"}),u.jsx(CI,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan1.jpg",alt:"Ruang Praktik Jaringan"})]}),u.jsxs(EI,{children:[u.jsxs(dl,{children:[u.jsx(K5,{}),u.jsx("h3",{children:"50+"}),u.jsx("p",{children:"Unit Perangkat"})]}),u.jsxs(dl,{children:[u.jsx(X9,{}),u.jsx("h3",{children:"10+"}),u.jsx("p",{children:"Server Praktik"})]}),u.jsxs(dl,{children:[u.jsx(gg,{}),u.jsx("h3",{children:"Gigabit"}),u.jsx("p",{children:"Koneksi Jaringan"})]}),u.jsxs(dl,{children:[u.jsx(J5,{}),u.jsx("h3",{children:"Lengkap"}),u.jsx("p",{children:"Tools Jaringan"})]})]}),u.jsxs(TI,{children:[u.jsx(ul,{children:"Ruang Praktik Jaringan SMKN 1 Bulan dilengkapi dengan berbagai perangkat jaringan modern untuk mendukung pembelajaran praktis siswa jurusan Teknik Komputer dan Jaringan. Fasilitas ini dirancang untuk memberikan pengalaman hands-on dalam mengelola dan mengkonfigurasi infrastruktur jaringan."}),u.jsx(ul,{children:"Lab ini dilengkapi dengan berbagai perangkat jaringan seperti router, switch, access point, dan server yang memungkinkan siswa untuk mempelajari dan mempraktikkan konfigurasi jaringan secara langsung. Setiap workstation dilengkapi dengan tools dan software jaringan terkini untuk simulasi dan monitoring jaringan."}),u.jsx(ul,{children:"Siswa dapat melakukan praktik instalasi dan konfigurasi berbagai jenis jaringan, mulai dari LAN, WLAN, hingga WAN. Mereka juga belajar tentang keamanan jaringan, manajemen server, dan troubleshooting melalui proyek-proyek praktis yang mensimulasikan skenario dunia nyata."}),u.jsx(ul,{children:"Dengan fasilitas yang lengkap ini, siswa dapat mengembangkan keterampilan teknis yang dibutuhkan industri, seperti administrasi jaringan, cloud computing, dan cybersecurity. Pengalaman praktis ini sangat berharga untuk mempersiapkan mereka memasuki dunia kerja di bidang IT."}),u.jsxs(MI,{children:[u.jsx(Kd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan2.jpg",alt:"Area Server"}),u.jsx(Kd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan3.jpg",alt:"Workstation"}),u.jsx(Kd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan4.jpg",alt:"Peralatan Jaringan"})]})]})]})]})}const LI=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,RI=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,DI=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,zI=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,II=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,$I=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,hl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,FI=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,fl=x(E.div)`
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
`,BI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,NI=x(E.button)`
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
`;function VI(){const t=de();return u.jsxs(LI,{children:[u.jsx(NI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(RI,{children:[u.jsxs(DI,{children:[u.jsx(zI,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Aula Serbaguna"}),u.jsx(II,{src:"../public/images/fasilitas/aula1.jpg",alt:"Aula Serbaguna"})]}),u.jsxs(FI,{children:[u.jsxs(fl,{children:[u.jsx(di,{}),u.jsx("h3",{children:"1000+"}),u.jsx("p",{children:"Kapasitas"})]}),u.jsxs(fl,{children:[u.jsx(W5,{}),u.jsx("h3",{children:"Modern"}),u.jsx("p",{children:"Sound System"})]}),u.jsxs(fl,{children:[u.jsx(eo,{}),u.jsx("h3",{children:"Multi"}),u.jsx("p",{children:"Fungsi"})]}),u.jsxs(fl,{children:[u.jsx(D9,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Event per Tahun"})]})]}),u.jsxs($I,{children:[u.jsx(hl,{children:"Aula Serbaguna SMKN 1 Bulan merupakan fasilitas modern yang dirancang untuk mendukung berbagai kegiatan sekolah dan event berskala besar. Dengan kapasitas lebih dari 1000 orang, aula ini dilengkapi dengan sistem tata suara dan pencahayaan profesional untuk mendukung berbagai jenis acara."}),u.jsx(hl,{children:"Ruangan ini dilengkapi dengan panggung permanen yang luas, layar proyeksi berukuran besar, dan sistem audio visual terkini. Area backstage dan ruang persiapan yang nyaman memastikan kelancaran setiap acara yang diselenggarakan, mulai dari upacara hingga pertunjukan seni."}),u.jsx(hl,{children:"Sistem pendingin udara yang optimal dan tata akustik yang dirancang khusus menciptakan kenyamanan maksimal bagi peserta acara. Aula ini juga dilengkapi dengan area lobby yang luas untuk registrasi dan area pameran temporer, serta toilet yang memadai untuk mendukung acara berskala besar."}),u.jsx(hl,{children:"Setiap tahun, aula ini menjadi tempat penyelenggaraan berbagai event penting seperti wisuda, seminar, workshop, pentas seni, dan berbagai kompetisi tingkat sekolah hingga nasional. Fleksibilitas ruangan memungkinkan konfigurasi yang berbeda-beda sesuai kebutuhan acara."}),u.jsxs(BI,{children:[u.jsx(Gd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula2.jpg",alt:"Panggung Utama"}),u.jsx(Gd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula3.jpg",alt:"Area Duduk"}),u.jsx(Gd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula4.jpg",alt:"Lobby Aula"})]})]})]})]})}const UI=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,HI=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,WI=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,KI=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,GI=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,YI=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,pl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,qI=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,gl=x(E.div)`
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
`,XI=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,JI=x(E.button)`
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
`;function QI(){const t=de();return u.jsxs(UI,{children:[u.jsx(JI,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(HI,{children:[u.jsxs(WI,{children:[u.jsx(KI,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Lapangan Olahraga"}),u.jsx(GI,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan1.jpg",alt:"Lapangan Olahraga"})]}),u.jsxs(qI,{children:[u.jsxs(gl,{children:[u.jsx(F5,{}),u.jsx("h3",{children:"Futsal"}),u.jsx("p",{children:"Lapangan Indoor"})]}),u.jsxs(gl,{children:[u.jsx(sE,{}),u.jsx("h3",{children:"Voli"}),u.jsx("p",{children:"Standar Nasional"})]}),u.jsxs(gl,{children:[u.jsx(E9,{}),u.jsx("h3",{children:"Basket"}),u.jsx("p",{children:"Full Court"})]}),u.jsxs(gl,{children:[u.jsx(Y5,{}),u.jsx("h3",{children:"Atletik"}),u.jsx("p",{children:"Lintasan Lari"})]})]}),u.jsxs(YI,{children:[u.jsx(pl,{children:"Fasilitas olahraga SMKN 1 Bulan dirancang untuk mendukung pengembangan fisik dan bakat olahraga siswa. Dengan area yang luas dan peralatan standar nasional, siswa dapat berlatih dan berkompetisi dalam berbagai cabang olahraga dengan optimal."}),u.jsx(pl,{children:"Lapangan indoor multifungsi dapat digunakan untuk berbagai aktivitas seperti futsal, badminton, dan kegiatan indoor lainnya. Dilengkapi dengan sistem pencahayaan dan ventilasi yang baik, lapangan ini dapat digunakan dalam berbagai kondisi cuaca."}),u.jsx(pl,{children:"Area outdoor terdiri dari lapangan basket full-court dan lapangan voli yang memenuhi standar kompetisi. Lintasan atletik yang mengelilingi lapangan utama memungkinkan siswa untuk berlatih berbagai nomor atletik seperti lari jarak pendek, menengah, dan jauh."}),u.jsx(pl,{children:"Seluruh fasilitas olahraga dilengkapi dengan ruang ganti, toilet, dan area penyimpanan peralatan yang memadai. Perawatan rutin dilakukan untuk memastikan keamanan dan kenyamanan pengguna, serta menjaga kualitas fasilitas tetap optimal."}),u.jsxs(XI,{children:[u.jsx(Yd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan2.jpg",alt:"Lapangan Basket"}),u.jsx(Yd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan3.jpg",alt:"Lapangan Voli"}),u.jsx(Yd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan4.jpg",alt:"Lintasan Atletik"})]})]})]})]})}const ZI=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,e$=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,t$=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,n$=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,i$=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,r$=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ml=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,s$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,yl=x(E.div)`
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
`,a$=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,o$=x(E.button)`
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
`;function l$(){const t=de();return u.jsxs(ZI,{children:[u.jsx(o$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(e$,{children:[u.jsxs(t$,{children:[u.jsx(n$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kantin Sehat"}),u.jsx(i$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin1.jpg",alt:"Kantin Sehat"})]}),u.jsxs(s$,{children:[u.jsxs(yl,{children:[u.jsx(iE,{}),u.jsx("h3",{children:"Bersih"}),u.jsx("p",{children:"Standar Higenis"})]}),u.jsxs(yl,{children:[u.jsx(H5,{}),u.jsx("h3",{children:"Sehat"}),u.jsx("p",{children:"Menu Bergizi"})]}),u.jsxs(yl,{children:[u.jsx(q5,{}),u.jsx("h3",{children:"Aman"}),u.jsx("p",{children:"Terjamin Mutunya"})]}),u.jsxs(yl,{children:[u.jsx(di,{}),u.jsx("h3",{children:"200+"}),u.jsx("p",{children:"Kapasitas"})]})]}),u.jsxs(r$,{children:[u.jsx(ml,{children:"Kantin Sehat SMKN 1 Bulan merupakan fasilitas yang dirancang untuk menyediakan makanan dan minuman yang sehat, bersih, dan bergizi bagi seluruh warga sekolah. Dengan menerapkan standar kebersihan yang ketat, kami memastikan setiap makanan yang disajikan aman untuk dikonsumsi."}),u.jsx(ml,{children:"Area makan yang nyaman dan bersih dilengkapi dengan ventilasi yang baik dan pencahayaan yang memadai. Meja dan kursi ditata dengan rapi untuk menciptakan suasana yang kondusif bagi siswa dan guru untuk menikmati makanan mereka."}),u.jsx(ml,{children:"Menu yang disediakan bervariasi dan memenuhi standar gizi seimbang. Setiap penjual di kantin harus mengikuti pelatihan penanganan makanan dan mendapatkan sertifikasi dari Dinas Kesehatan. Hal ini untuk memastikan kualitas dan keamanan makanan yang dijual."}),u.jsx(ml,{children:"Kantin juga dilengkapi dengan fasilitas cuci tangan dan tempat sampah yang memadai untuk mendukung kebersihan lingkungan. Pemantauan rutin dilakukan untuk memastikan standar kebersihan dan kualitas makanan tetap terjaga."}),u.jsxs(a$,{children:[u.jsx(qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin2.jpg",alt:"Area Makan"}),u.jsx(qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin3.jpg",alt:"Counter Makanan"}),u.jsx(qd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin4.jpg",alt:"Menu Sehat"})]})]})]})]})}const c$=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,u$=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,d$=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,h$=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,f$=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,p$=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,vl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,g$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,xl=x(E.div)`
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
`,m$=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,y$=x(E.button)`
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
`;function v$(){const t=de();return u.jsxs(c$,{children:[u.jsx(y$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(u$,{children:[u.jsxs(d$,{children:[u.jsx(h$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Taman Sosial"}),u.jsx(f$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman1.jpg",alt:"Taman Sosial"})]}),u.jsxs(g$,{children:[u.jsxs(xl,{children:[u.jsx(eE,{}),u.jsx("h3",{children:"Hijau"}),u.jsx("p",{children:"Area Terbuka"})]}),u.jsxs(xl,{children:[u.jsx(gg,{}),u.jsx("h3",{children:"Free"}),u.jsx("p",{children:"Wifi Area"})]}),u.jsxs(xl,{children:[u.jsx(di,{}),u.jsx("h3",{children:"Nyaman"}),u.jsx("p",{children:"Area Diskusi"})]}),u.jsxs(xl,{children:[u.jsx(H5,{}),u.jsx("h3",{children:"Asri"}),u.jsx("p",{children:"Taman Edukasi"})]})]}),u.jsxs(p$,{children:[u.jsx(vl,{children:"Taman Sosial SMKN 1 Bulan merupakan ruang terbuka hijau yang dirancang sebagai area interaksi dan pembelajaran outdoor bagi seluruh warga sekolah. Dengan konsep eco-friendly, taman ini dilengkapi dengan berbagai fasilitas yang mendukung kegiatan belajar dan bersosialisasi."}),u.jsx(vl,{children:"Area ini dilengkapi dengan gazebo dan bangku taman yang nyaman untuk kegiatan diskusi kelompok atau sekedar bersantai di waktu istirahat. Koneksi wifi yang tersedia memungkinkan siswa untuk mengakses materi pembelajaran digital sambil menikmati suasana alam yang asri."}),u.jsx(vl,{children:"Taman ini juga berfungsi sebagai laboratorium alam, dengan berbagai jenis tanaman yang diberi label nama ilmiah untuk pembelajaran biologi. Desain taman yang artistik menjadikannya lokasi favorit untuk kegiatan fotografi dan pembuatan konten kreatif siswa."}),u.jsx(vl,{children:"Sebagai bagian dari program sekolah adiwiyata, taman ini juga menjadi contoh penerapan konsep sekolah hijau dan pelestarian lingkungan. Siswa terlibat aktif dalam pemeliharaan taman melalui program piket dan kegiatan ekstrakurikuler pecinta alam."}),u.jsxs(m$,{children:[u.jsx(Xd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman2.jpg",alt:"Area Gazebo"}),u.jsx(Xd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman3.jpg",alt:"Taman Edukasi"}),u.jsx(Xd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman4.jpg",alt:"Area Diskusi"})]})]})]})]})}const x$=x.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,b$=x.div`
  max-width: 1200px;
  margin: 0 auto;
`,k$=x.div`
  text-align: center;
  margin-bottom: 4rem;
`,w$=x(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,_$=x.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,j$=x(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,bl=x.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,S$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,kl=x(E.div)`
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
`,P$=x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Jd=x.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,C$=x(E.button)`
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
`;function T$(){const t=de();return u.jsxs(x$,{children:[u.jsx(C$,{onClick:()=>t("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(et,{})}),u.jsxs(b$,{children:[u.jsxs(k$,{children:[u.jsx(w$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Titik Internet"}),u.jsx(_$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi1.jpg",alt:"Titik Internet"})]}),u.jsxs(S$,{children:[u.jsxs(kl,{children:[u.jsx(gg,{}),u.jsx("h3",{children:"100+"}),u.jsx("p",{children:"Titik Akses"})]}),u.jsxs(kl,{children:[u.jsx(M9,{}),u.jsx("h3",{children:"1 Gbps"}),u.jsx("p",{children:"Kecepatan"})]}),u.jsxs(kl,{children:[u.jsx(B5,{}),u.jsx("h3",{children:"24/7"}),u.jsx("p",{children:"Akses Internet"})]}),u.jsxs(kl,{children:[u.jsx(q5,{}),u.jsx("h3",{children:"Aman"}),u.jsx("p",{children:"Koneksi Terlindungi"})]})]}),u.jsxs(j$,{children:[u.jsx(bl,{children:"Fasilitas internet di SMKN 1 Bulan dirancang untuk memberikan akses internet berkecepatan tinggi yang dapat diandalkan di seluruh area sekolah. Dengan lebih dari 100 titik akses yang strategis, siswa dan guru dapat terhubung ke internet kapan saja dan di mana saja dalam lingkungan sekolah."}),u.jsx(bl,{children:"Setiap titik akses dilengkapi dengan teknologi terkini yang mendukung koneksi gigabit, memastikan kecepatan dan stabilitas yang optimal untuk berbagai kebutuhan pembelajaran digital. Sistem load balancing memastikan distribusi bandwidth yang merata ke seluruh pengguna."}),u.jsx(bl,{children:"Keamanan jaringan menjadi prioritas utama dengan implementasi sistem autentikasi terpusat dan enkripsi data. Setiap pengguna memiliki akun pribadi dengan kuota yang dapat dipantau, serta akses ke layanan dan konten yang sesuai dengan kebijakan sekolah."}),u.jsx(bl,{children:"Infrastruktur internet ini mendukung berbagai kegiatan pembelajaran digital, mulai dari akses ke perpustakaan digital, pembelajaran online, hingga praktik pemrograman dan pengembangan aplikasi. Tim IT support kami siap memberikan bantuan teknis untuk memastikan konektivitas yang lancar."}),u.jsxs(P$,{children:[u.jsx(Jd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi2.jpg",alt:"Area Hotspot"}),u.jsx(Jd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi3.jpg",alt:"Ruang Server"}),u.jsx(Jd,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi4.jpg",alt:"Monitoring System"})]})]})]})]})}const Qd=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,E$=x.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,M$=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,A$=x(E.div)`
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
`,O$=x.div`
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
`,L$=x(E.button)`
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
`,ey=x.div`
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
`,R$=x(E.button)`
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
`;function D$(){const t=de(),{user:e}=dn(),[n,i]=j.useState([]),[r,s]=j.useState(!0);return j.useEffect(()=>{(async()=>{if(e!=null&&e.id)try{const{data:o,error:l}=await st.from("posts").select("*").eq("user_id",e.id).eq("category","private").order("created_at",{ascending:!1});if(l)throw l;i(o||[])}catch(o){console.error("Error:",o)}finally{s(!1)}})()},[e]),r?u.jsx(Qd,{children:u.jsx(ey,{children:"Loading..."})}):n.length===0?u.jsx(Qd,{children:u.jsxs(ey,{children:[u.jsx("h3",{children:"Belum ada foto"}),u.jsx("p",{children:"Mulai posting foto pertama Anda"}),u.jsxs(R$,{onClick:()=>t("/user/posting"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsx($5,{})," Posting Foto"]})]})}):u.jsxs(Qd,{children:[u.jsx(E$,{children:"Galeri Foto Saya"}),u.jsx(M$,{children:n.map(a=>u.jsxs(A$,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[u.jsx("img",{src:a.image_url,alt:a.title||"Gallery Image"}),u.jsxs(O$,{className:"info",children:[u.jsx("h3",{children:a.title||"Untitled"}),u.jsx("p",{children:a.caption||""})]})]},a.id))}),u.jsx(L$,{onClick:()=>t("/user/posting"),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(K9,{})})]})}function z$(){return u.jsx(UC,{children:u.jsxs("div",{className:"App",style:{background:"#1a1a2e"},children:[u.jsxs(a_,{children:[u.jsx(q,{path:"/",element:u.jsxs(u.Fragment,{children:[u.jsx(QC,{}),u.jsx(BT,{}),u.jsx(i9,{}),u.jsx(h9,{}),u.jsx(v9,{}),u.jsx(dE,{})]})}),u.jsxs(q,{path:"/admin/*",element:u.jsx(PE,{}),children:[u.jsx(q,{index:!0,element:u.jsx(IL,{})}),u.jsx(q,{path:"users",element:u.jsx(VL,{})}),u.jsx(q,{path:"students-teachers",element:u.jsx(JL,{})}),u.jsx(q,{path:"news",element:u.jsx(sR,{})}),u.jsx(q,{path:"program-news",element:u.jsx(hR,{})}),u.jsx(q,{path:"extra-news",element:u.jsx(xR,{})})]}),u.jsxs(q,{path:"/user/*",element:u.jsx(MR,{}),children:[u.jsx(q,{index:!0,element:u.jsx(FR,{})}),u.jsx(q,{path:"profile",element:u.jsx(eD,{})}),u.jsx(q,{path:"profile/settings",element:u.jsx(dD,{})}),u.jsx(q,{path:"posting",element:u.jsx(_D,{})}),u.jsx(q,{path:"gallery",element:u.jsx(D$,{})})]}),u.jsxs(q,{path:"/moderator/*",element:u.jsx(AD,{}),children:[u.jsx(q,{path:"profile",element:u.jsx(ID,{})}),u.jsx(q,{path:"posting-berita",element:u.jsx(KD,{})})]}),u.jsx(q,{path:"/school-detail",element:u.jsx(nz,{})}),u.jsx(q,{path:"/kepsek-detail",element:u.jsx(dz,{})}),u.jsx(q,{path:"/visi-misi",element:u.jsx(xz,{})}),u.jsx(q,{path:"/akademik-detail",element:u.jsx(Tz,{})}),u.jsx(q,{path:"/karakter-detail",element:u.jsx(Iz,{})}),u.jsx(q,{path:"/ekstrakurikuler-detail",element:u.jsx(Kz,{})}),u.jsx(q,{path:"/perpus-detail",element:u.jsx(nI,{})}),u.jsx(q,{path:"/lab-komputer-detail",element:u.jsx(hI,{})}),u.jsx(q,{path:"/studio-detail",element:u.jsx(wI,{})}),u.jsx(q,{path:"/jaringan-detail",element:u.jsx(OI,{})}),u.jsx(q,{path:"/aula-detail",element:u.jsx(VI,{})}),u.jsx(q,{path:"/lapangan-detail",element:u.jsx(QI,{})}),u.jsx(q,{path:"/kantin-detail",element:u.jsx(l$,{})}),u.jsx(q,{path:"/taman-detail",element:u.jsx(v$,{})}),u.jsx(q,{path:"/internet-detail",element:u.jsx(T$,{})})]}),u.jsx(xE,{})]})})}eh.createRoot(document.getElementById("root")).render(u.jsx(Le.StrictMode,{children:u.jsx(p_,{children:u.jsx(z$,{})})}));export{Bc as g};
