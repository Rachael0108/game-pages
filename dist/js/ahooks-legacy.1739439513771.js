System.register(["./react-legacy.1739439513771.js","./tslib-legacy.1739439513776.js","./resize-observer-polyfill-legacy.1739439513776.js"],(function(n,e){"use strict";var r,t,u;return{setters:[function(n){r=n.r},function(n){t=n._},function(n){u=n.i}],execute:function(){n("u",(function(n){var e=t(function(n){var e=r.useRef(0),u=t(r.useState(n),2),c=u[0],f=u[1],o=r.useCallback((function(n){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){f(n)}))}),[]);return i((function(){cancelAnimationFrame(e.current)})),[c,o]}((function(){var e=o(n);return e?{width:e.clientWidth,height:e.clientHeight}:void 0})),2),c=e[0],f=e[1];return v((function(){var e=o(n);if(e){var r=new u((function(n){n.forEach((function(n){var e=n.target,r=e.clientWidth,t=e.clientHeight;f({width:r,height:t})}))}));return r.observe(e),function(){r.disconnect()}}}),[],n),c}));var e=function(n){return"function"==typeof n};function c(n,e){if(n===e)return!0;for(var r=0;r<n.length;r++)if(!Object.is(n[r],e[r]))return!1;return!0}var i=function(n){var e,t,u=(e=n,(t=r.useRef(e)).current=e,t);r.useEffect((function(){return function(){u.current()}}),[])},f=!("undefined"==typeof window||!window.document||!window.document.createElement);function o(n,r){if(f)return n?e(n)?n():"current"in n?n.current:n:r}var a=function(n){return function(e,t,u){var f=r.useRef(!1),a=r.useRef([]),s=r.useRef([]),l=r.useRef();n((function(){var n,r=(Array.isArray(u)?u:[u]).map((function(n){return o(n)}));if(!f.current)return f.current=!0,a.current=r,s.current=t,void(l.current=e());r.length===a.current.length&&c(a.current,r)&&c(s.current,t)||(null===(n=l.current)||void 0===n||n.call(l),a.current=r,s.current=t,l.current=e())})),i((function(){var n;null===(n=l.current)||void 0===n||n.call(l),f.current=!1}))}},s=a(r.useEffect),l=a(r.useLayoutEffect),v=f?l:s}}}));
