var B=Object.freeze,Or=Object.defineProperty;var r=(t,e)=>B(Or(t,"raw",{value:B(e||t.slice())}));import{j as y,C as X,F as Cr,k as a,c as Rr}from"./@emotion.1738809819676.js";import{r as S}from"./react.1738809819679.js";var Yr=Object.defineProperty,$r=(t,e,o)=>e in t?Yr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Y=(t,e,o)=>$r(t,typeof e!="symbol"?e+"":e,o),_=new Map,$=new WeakMap,L=0,zr=void 0;function Xr(t){return t?($.has(t)||(L+=1,$.set(t,L.toString())),$.get(t)):"0"}function kr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>"".concat(e,"_").concat(e==="root"?Xr(t.root):t[e])).toString()}function _r(t){const e=kr(t);let o=_.get(e);if(!o){const i=new Map;let f;const d=new IntersectionObserver(l=>{l.forEach(m=>{var p;const u=m.isIntersecting&&f.some(g=>m.intersectionRatio>=g);t.trackVisibility&&typeof m.isVisible>"u"&&(m.isVisible=u),(p=i.get(m.target))==null||p.forEach(g=>{g(u,m)})})},t);f=d.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),o={id:e,observer:d,elements:i},_.set(e,o)}return o}function vr(t,e,o={},i=zr){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const p=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:f,observer:d,elements:l}=_r(o),m=l.get(t)||[];return l.has(t)||l.set(t,m),m.push(e),d.observe(t),function(){m.splice(m.indexOf(e),1),m.length===0&&(l.delete(t),d.unobserve(t)),l.size===0&&(d.disconnect(),_.delete(f))}}function Nr(t){return typeof t.children!="function"}var D=class extends S.Component{constructor(t){super(t),Y(this,"node",null),Y(this,"_unobserveCb",null),Y(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Y(this,"handleChange",(e,o)=>{e&&this.props.triggerOnce&&this.unobserve(),Nr(this.props)||this.setState({inView:e,entry:o}),this.props.onChange&&this.props.onChange(e,o)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:o,trackVisibility:i,delay:f,fallbackInView:d}=this.props;this._unobserveCb=vr(this.node,this.handleChange,{threshold:t,root:e,rootMargin:o,trackVisibility:i,delay:f},d)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:w,entry:x}=this.state;return t({inView:w,entry:x,ref:this.handleNode})}const{as:e,triggerOnce:o,threshold:i,root:f,rootMargin:d,onChange:l,skip:m,trackVisibility:p,delay:u,initialInView:g,fallbackInView:b,...h}=this.props;return S.createElement(e||"div",{ref:this.handleNode,...h},t)}};function wr({threshold:t,delay:e,trackVisibility:o,rootMargin:i,root:f,triggerOnce:d,skip:l,initialInView:m,fallbackInView:p,onChange:u}={}){var g;const[b,h]=S.useState(null),w=S.useRef(u),[x,s]=S.useState({inView:!!m,entry:void 0});w.current=u,S.useEffect(()=>{if(l||!b)return;let I;return I=vr(b,(C,z)=>{s({inView:C,entry:z}),w.current&&w.current(C,z),z.isIntersecting&&d&&I&&(I(),I=void 0)},{root:f,rootMargin:i,threshold:t,trackVisibility:o,delay:e},p),()=>{I&&I()}},[Array.isArray(t)?t.toString():t,b,f,i,d,l,o,p,e]);const n=(g=x.entry)==null?void 0:g.target,O=S.useRef(void 0);!b&&n&&!d&&!l&&O.current!==n&&(O.current=n,s({inView:!!m,entry:void 0}));const v=[h,x.inView,x.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var k={exports:{}},c={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j;function Vr(){if(j)return c;j=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),m=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function s(n){if(typeof n=="object"&&n!==null){var O=n.$$typeof;switch(O){case t:switch(n=n.type,n){case o:case f:case i:case u:case g:return n;default:switch(n=n&&n.$$typeof,n){case m:case l:case p:case h:case b:case d:return n;default:return O}}case e:return O}}}return c.ContextConsumer=l,c.ContextProvider=d,c.Element=t,c.ForwardRef=p,c.Fragment=o,c.Lazy=h,c.Memo=b,c.Portal=e,c.Profiler=f,c.StrictMode=i,c.Suspense=u,c.SuspenseList=g,c.isAsyncMode=function(){return!1},c.isConcurrentMode=function(){return!1},c.isContextConsumer=function(n){return s(n)===l},c.isContextProvider=function(n){return s(n)===d},c.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===t},c.isForwardRef=function(n){return s(n)===p},c.isFragment=function(n){return s(n)===o},c.isLazy=function(n){return s(n)===h},c.isMemo=function(n){return s(n)===b},c.isPortal=function(n){return s(n)===e},c.isProfiler=function(n){return s(n)===f},c.isStrictMode=function(n){return s(n)===i},c.isSuspense=function(n){return s(n)===u},c.isSuspenseList=function(n){return s(n)===g},c.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===o||n===f||n===i||n===u||n===g||n===w||typeof n=="object"&&n!==null&&(n.$$typeof===h||n.$$typeof===b||n.$$typeof===d||n.$$typeof===l||n.$$typeof===p||n.$$typeof===x||n.getModuleId!==void 0)},c.typeOf=s,c}var E;function Mr(){return E||(E=1,k.exports=Vr()),k.exports}var Br=Mr(),F;a(F||(F=r(["\n  from,\n  20%,\n  53%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n"])));var T;a(T||(T=r(["\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n"])));var U;a(U||(U=r(["\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n"])));var A;a(A||(A=r(["\n  0% {\n    transform: scale(1);\n  }\n\n  14% {\n    transform: scale(1.3);\n  }\n\n  28% {\n    transform: scale(1);\n  }\n\n  42% {\n    transform: scale(1.3);\n  }\n\n  70% {\n    transform: scale(1);\n  }\n"])));var q;a(q||(q=r(["\n  from,\n  11.1%,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n"])));var P;a(P||(P=r(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));var W;a(W||(W=r(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));var G;a(G||(G=r(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n"])));var H;a(H||(H=r(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(10px, 0, 0);\n  }\n"])));var J;a(J||(J=r(["\n  from,\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(0, 10px, 0);\n  }\n"])));var K;a(K||(K=r(["\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n"])));var Q;a(Q||(Q=r(["\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"])));var Z;a(Z||(Z=r(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var tt;const Lr=a(tt||(tt=r(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"])));var rt;const Dr=a(rt||(rt=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var at;const jr=a(at||(at=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var et;const Er=a(et||(et=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var nt;const Fr=a(nt||(nt=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var ot;const V=a(ot||(ot=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var st;const Tr=a(st||(st=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var it;const Ur=a(it||(it=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var ct;const Ar=a(ct||(ct=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var ft;const qr=a(ft||(ft=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var dt;const Pr=a(dt||(dt=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(100%, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var mt;const Wr=a(mt||(mt=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var lt;const Gr=a(lt||(lt=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var pt;function Hr({duration:t=1e3,delay:e=0,timingFunction:o="ease",keyframes:i=V,iterationCount:f=1}){return Rr(pt||(pt=r(["\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n    animation-delay: ","ms;\n    animation-name: ",";\n    animation-direction: normal;\n    animation-fill-mode: both;\n    animation-iteration-count: ",";\n\n    @media (prefers-reduced-motion: reduce) {\n      animation: none;\n    }\n  "])),t,o,e,i,f)}function Jr(t){return t==null}function Kr(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Sr(t,e){return o=>o?t():e()}function R(t){return Sr(t,()=>null)}function N(t){return R(()=>({opacity:0}))(t)}const M=t=>{const{cascade:e=!1,damping:o=.5,delay:i=0,duration:f=1e3,fraction:d=0,keyframes:l=V,triggerOnce:m=!1,className:p,style:u,childClassName:g,childStyle:b,children:h,onVisibilityChange:w}=t,x=S.useMemo(()=>Hr({keyframes:l,duration:f}),[f,l]);return Jr(h)?null:Kr(h)?y(Zr,{...t,animationStyles:x,children:String(h)}):Br.isFragment(h)?y(Ir,{...t,animationStyles:x}):y(Cr,{children:S.Children.map(h,(s,n)=>{if(!S.isValidElement(s))return null;const O=i+(e?n*f*o:0);switch(s.type){case"ol":case"ul":return y(X,{children:({cx:v})=>y(s.type,{...s.props,className:v(p,s.props.className),style:Object.assign({},u,s.props.style),children:y(M,{...t,children:s.props.children})})});case"li":return y(D,{threshold:d,triggerOnce:m,onChange:w,children:({inView:v,ref:I})=>y(X,{children:({cx:C})=>y(s.type,{...s.props,ref:I,className:C(g,s.props.className),css:R(()=>x)(v),style:Object.assign({},b,s.props.style,N(!v),{animationDelay:O+"ms"})})})});default:return y(D,{threshold:d,triggerOnce:m,onChange:w,children:({inView:v,ref:I})=>y("div",{ref:I,className:p,css:R(()=>x)(v),style:Object.assign({},u,N(!v),{animationDelay:O+"ms"}),children:y(X,{children:({cx:C})=>y(s.type,{...s.props,className:C(g,s.props.className),style:Object.assign({},b,s.props.style)})})})})}})})},Qr={display:"inline-block",whiteSpace:"pre"},Zr=t=>{const{animationStyles:e,cascade:o=!1,damping:i=.5,delay:f=0,duration:d=1e3,fraction:l=0,triggerOnce:m=!1,className:p,style:u,children:g,onVisibilityChange:b}=t,{ref:h,inView:w}=wr({triggerOnce:m,threshold:l,onChange:b});return Sr(()=>y("div",{ref:h,className:p,style:Object.assign({},u,Qr),children:g.split("").map((x,s)=>y("span",{css:R(()=>e)(w),style:{animationDelay:f+s*d*i+"ms"},children:x},s))}),()=>y(Ir,{...t,children:g}))(o)},Ir=t=>{const{animationStyles:e,fraction:o=0,triggerOnce:i=!1,className:f,style:d,children:l,onVisibilityChange:m}=t,{ref:p,inView:u}=wr({triggerOnce:i,threshold:o,onChange:m});return y("div",{ref:p,className:f,css:R(()=>e)(u),style:Object.assign({},d,N(!u)),children:l})};var ut;a(ut||(ut=r(["\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n"])));var yt;a(yt||(yt=r(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0) scaleY(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var gt;a(gt||(gt=r(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var ht;a(ht||(ht=r(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var bt;a(bt||(bt=r(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var xt;a(xt||(xt=r(["\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"])));var vt;a(vt||(vt=r(["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"])));var wt;a(wt||(wt=r(["\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0) scaleX(2);\n  }\n"])));var St;a(St||(St=r(["\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0) scaleX(2);\n  }\n"])));var It;a(It||(It=r(["\n  20% {\n    transform: translate3d(0, -10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0) scaleY(3);\n  }\n"])));var Ot;const ta=a(Ot||(Ot=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"])));var Ct;const ra=a(Ct||(Ct=r(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 100%, 0);\n  }\n"])));var Rt;const aa=a(Rt||(Rt=r(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 100%, 0);\n  }\n"])));var Yt;const ea=a(Yt||(Yt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n"])));var $t;const na=a($t||($t=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n"])));var zt;const oa=a(zt||(zt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n"])));var Xt;const sa=a(Xt||(Xt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n"])));var kt;const ia=a(kt||(kt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n"])));var _t;const ca=a(_t||(_t=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n"])));var Nt;const fa=a(Nt||(Nt=r(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, -100%, 0);\n  }\n"])));var Vt;const da=a(Vt||(Vt=r(["\n  from {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, -100%, 0);\n  }\n"])));var Mt;const ma=a(Mt||(Mt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n"])));var Bt;const la=a(Bt||(Bt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n"])));function pa(t,e,o){switch(o){case"bottom-left":return e?ra:Dr;case"bottom-right":return e?aa:jr;case"down":return t?e?na:Fr:e?ea:Er;case"left":return t?e?sa:Tr:e?oa:V;case"right":return t?e?ca:Ar:e?ia:Ur;case"top-left":return e?fa:qr;case"top-right":return e?da:Pr;case"up":return t?e?la:Gr:e?ma:Wr;default:return e?ta:Lr}}const Ra=t=>{const{big:e=!1,direction:o,reverse:i=!1,...f}=t,d=S.useMemo(()=>pa(e,i,o),[e,o,i]);return y(M,{keyframes:d,...f})};var Lt;a(Lt||(Lt=r(["\n  from {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    animation-timing-function: ease-in;\n  }\n"])));var Dt;a(Dt||(Dt=r(["\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n"])));var jt;a(jt||(jt=r(["\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n"])));var Et;a(Et||(Et=r(["\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n"])));var Ft;a(Ft||(Ft=r(["\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n"])));var Tt;a(Tt||(Tt=r(["\n  0% {\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n"])));var Ut;a(Ut||(Ut=r(["\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"])));var At;a(At||(At=r(["\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));var qt;a(qt||(qt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n"])));var Pt;a(Pt||(Pt=r(["\n  from {\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));var Wt;a(Wt||(Wt=r(["\n  from {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));var Gt;a(Gt||(Gt=r(["\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));var Ht;a(Ht||(Ht=r(["\n  from {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));var Jt;a(Jt||(Jt=r(["\n  from {\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])));var Kt;a(Kt||(Kt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n"])));var Qt;a(Qt||(Qt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n"])));var Zt;a(Zt||(Zt=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n"])));var tr;a(tr||(tr=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n"])));var rr;a(rr||(rr=r(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n"])));var ar;const ua=a(ar||(ar=r(["\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var er;const ya=a(er||(er=r(["\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var nr;const ga=a(nr||(nr=r(["\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var or;const ha=a(or||(or=r(["\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));var sr;const ba=a(sr||(sr=r(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n"])));var ir;const xa=a(ir||(ir=r(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n"])));var cr;const va=a(cr||(cr=r(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n"])));var fr;const wa=a(fr||(fr=r(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n"])));function Sa(t,e){switch(e){case"down":return t?ba:ua;case"right":return t?va:ga;case"up":return t?wa:ha;case"left":default:return t?xa:ya}}const Ya=t=>{const{direction:e,reverse:o=!1,...i}=t,f=S.useMemo(()=>Sa(o,e),[e,o]);return y(M,{keyframes:f,...i})};var dr;a(dr||(dr=r(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n"])));var mr;a(mr||(mr=r(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));var lr;a(lr||(lr=r(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));var pr;a(pr||(pr=r(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));var ur;a(ur||(ur=r(["\n  from {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));var yr;a(yr||(yr=r(["\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n"])));var gr;a(gr||(gr=r(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));var hr;a(hr||(hr=r(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n  }\n"])));var br;a(br||(br=r(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n  }\n"])));var xr;a(xr||(xr=r(["\n  40% {\n    opacity: 1;\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n"])));export{Ra as F,M as R,Ya as S};
