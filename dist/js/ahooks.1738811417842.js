import{r as u}from"./react.1738811417842.js";import{_ as m}from"./tslib.1738811417845.js";import{i as W}from"./resize-observer-polyfill.1738811417845.js";var _=function(e){return typeof e=="function"};function h(e,r){if(e===r)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],r[n]))return!1;return!0}function S(e){var r=u.useRef(e);return r.current=e,r}var E=function(e){var r=S(e);u.useEffect(function(){return function(){r.current()}},[])},R=!!(typeof window<"u"&&window.document&&window.document.createElement);function d(e,r){if(R){if(!e)return r;var n;return _(e)?n=e():"current"in e?n=e.current:n=e,n}}var w=function(e){var r=function(n,o,t){var a=u.useRef(!1),c=u.useRef([]),s=u.useRef([]),i=u.useRef();e(function(){var f,v=Array.isArray(t)?t:[t],l=v.map(function(g){return d(g)});if(!a.current){a.current=!0,c.current=l,s.current=o,i.current=n();return}(l.length!==c.current.length||!h(c.current,l)||!h(s.current,o))&&((f=i.current)===null||f===void 0||f.call(i),c.current=l,s.current=o,i.current=n())}),E(function(){var f;(f=i.current)===null||f===void 0||f.call(i),a.current=!1})};return r},p=w(u.useEffect);function y(e){var r=u.useRef(0),n=m(u.useState(e),2),o=n[0],t=n[1],a=u.useCallback(function(c){cancelAnimationFrame(r.current),r.current=requestAnimationFrame(function(){t(c)})},[]);return E(function(){cancelAnimationFrame(r.current)}),[o,a]}var A=w(u.useLayoutEffect),T=R?A:p;function x(e){var r=m(y(function(){var t=d(e);return t?{width:t.clientWidth,height:t.clientHeight}:void 0}),2),n=r[0],o=r[1];return T(function(){var t=d(e);if(t){var a=new W(function(c){c.forEach(function(s){var i=s.target,f=i.clientWidth,v=i.clientHeight;o({width:f,height:v})})});return a.observe(t),function(){a.disconnect()}}},[],e),n}export{x as u};
