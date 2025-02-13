import{g as re}from"./dayjs.1739435914287.js";function ne(p,S){for(var h=0;h<S.length;h++){const _=S[h];if(typeof _!="string"&&!Array.isArray(_)){for(const m in _)if(m!=="default"&&!(m in p)){const v=Object.getOwnPropertyDescriptor(_,m);v&&Object.defineProperty(p,m,v.get?v:{enumerable:!0,get:()=>_[m]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}},w={},F={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H;function ue(){if(H)return r;H=1;var p=Symbol.for("react.element"),S=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),j=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),R=Symbol.iterator;function b(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,N={};function E(e,t,n){this.props=e,this.context=t,this.refs=N,this.updater=n||k}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=E.prototype;function P(e,t,n){this.props=e,this.context=t,this.refs=N,this.updater=n||k}var q=P.prototype=new U;q.constructor=P,L(q,E.prototype),q.isPureReactComponent=!0;var V=Array.isArray,J=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,n){var o,u={},f=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(f=""+t.key),t)J.call(t,o)&&!M.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){for(var i=Array(c),d=0;d<c;d++)i[d]=arguments[d+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)u[o]===void 0&&(u[o]=c[o]);return{$$typeof:p,type:e,key:f,ref:s,props:u,_owner:I.current}}function X(e,t){return{$$typeof:p,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function Z(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var B=/\/+/g;function D(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):t.toString(36)}function $(e,t,n,o,u){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(f){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case p:case S:s=!0}}if(s)return s=e,u=u(s),e=o===""?"."+D(s,0):o,V(u)?(n="",e!=null&&(n=e.replace(B,"$&/")+"/"),$(u,t,n,"",function(d){return d})):u!=null&&(T(u)&&(u=X(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(B,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=o===""?".":o+":",V(e))for(var c=0;c<e.length;c++){f=e[c];var i=o+D(f,c);s+=$(f,t,n,i,u)}else if(i=b(e),typeof i=="function")for(e=i.call(e),c=0;!(f=e.next()).done;)f=f.value,i=o+D(f,c++),s+=$(f,t,n,i,u);else if(f==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function g(e,t,n){if(e==null)return e;var o=[],u=0;return $(e,o,"","",function(f){return t.call(n,f,u++)}),o}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},C={transition:null},te={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:C,ReactCurrentOwner:I};return r.Children={map:g,forEach:function(e,t,n){g(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return g(e,function(){t++}),t},toArray:function(e){return g(e,function(t){return t})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=E,r.Fragment=h,r.Profiler=m,r.PureComponent=P,r.StrictMode=_,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=L({},e.props),u=e.key,f=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,s=I.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)J.call(t,i)&&!M.hasOwnProperty(i)&&(o[i]=t[i]===void 0&&c!==void 0?c[i]:t[i])}var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){c=Array(i);for(var d=0;d<i;d++)c[d]=arguments[d+2];o.children=c}return{$$typeof:p,type:e.type,key:u,ref:f,props:o,_owner:s}},r.createContext=function(e){return e={$$typeof:j,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v,_context:e},e.Consumer=e},r.createElement=z,r.createFactory=function(e){var t=z.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:x,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:ee}},r.memo=function(e,t){return{$$typeof:O,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=C.transition;C.transition={};try{e()}finally{C.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return l.current.useCallback(e,t)},r.useContext=function(e){return l.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return l.current.useDeferredValue(e)},r.useEffect=function(e,t){return l.current.useEffect(e,t)},r.useId=function(){return l.current.useId()},r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return l.current.useMemo(e,t)},r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)},r.useRef=function(e){return l.current.useRef(e)},r.useState=function(e){return l.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return l.current.useTransition()},r.version="18.2.0",r}var W;function K(){return W||(W=1,F.exports=ue()),F.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y;function oe(){if(Y)return w;Y=1;var p=K(),S=Symbol.for("react.element"),h=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,m=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function j(x,a,O){var y,R={},b=null,k=null;O!==void 0&&(b=""+O),a.key!==void 0&&(b=""+a.key),a.ref!==void 0&&(k=a.ref);for(y in a)_.call(a,y)&&!v.hasOwnProperty(y)&&(R[y]=a[y]);if(x&&x.defaultProps)for(y in a=x.defaultProps,a)R[y]===void 0&&(R[y]=a[y]);return{$$typeof:S,type:x,key:b,ref:k,props:R,_owner:m.current}}return w.Fragment=h,w.jsx=j,w.jsxs=j,w}var G;function ie(){return G||(G=1,A.exports=oe()),A.exports}var se=ie(),Q=K();const fe=re(Q),le=ne({__proto__:null,default:fe},[Q]);export{le as R,K as a,se as j,Q as r};
