!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./hoist-non-react-statics-legacy.1738811411853.js","./react-legacy.1738811411853.js","./stylis-legacy.1738811411853.js"],(function(t,r){"use strict";var n,a,s,i,o,c,l,u,f,d,h,v,p,y,m,g,b,x,w,k,$,A,S,C,E,_,O,j,N,P,R;return{setters:[null,function(e){n=e.R,a=e.r,s=e.j},function(e){i=e.s,o=e.c,c=e.m,l=e.a,u=e.r,f=e.R,d=e.b,h=e.K,v=e.d,p=e.e,y=e.W,m=e.D,g=e.f,b=e.g,x=e.h,w=e.i,k=e.M,$=e.j,A=e.k,S=e.l,C=e.n,E=e.o,_=e.t,O=e.p,j=e.q,N=e.u,P=e.v,R=e.w}],execute:function(){t({c:pe,k:function(){var e=pe.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}();function T(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var z=function(e,t,r){for(var n=0,a=0;n=a,a=j(),38===n&&12===a&&(t[r]=1),!_(a);)E();return P(e,R)},I=function(e,t){return g(function(e,t){var r=-1,n=44;do{switch(_(n)){case 0:38===n&&12===j()&&(t[r]=1),e[r]+=z(R-1,t,r);break;case 2:e[r]+=N(n);break;case 4:if(44===n){e[++r]=58===j()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=O(n)}}while(n=E());return e}(b(e),t))},M=new WeakMap,G=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||M.get(r))&&!n){M.set(e,!0);for(var a=[],s=I(t,a),i=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<i.length;l++,c++)e.props[c]=a[o]?s[o].replace(/&\f/g,i[l]):i[l]+" "+s[o]}}},F=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function W(e,t){switch(x(e,t)){case 5103:return y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+S+e+k+e+e;case 6828:case 4268:return y+e+k+e+e;case 6165:return y+e+k+"flex-"+e+e;case 5187:return y+e+p(e,/(\w+).+(:[^]+)/,y+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return y+e+k+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return y+e+k+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return y+e+k+p(e,"shrink","negative")+e;case 5292:return y+e+k+p(e,"basis","preferred-size")+e;case 6060:return y+"box-"+p(e,"-grow","")+y+e+k+p(e,"grow","positive")+e;case 4554:return y+p(e,/([^-])(transform)/g,"$1"+y+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+S+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~A(e,"stretch")?W(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==w(e,t+1))break;case 6444:switch(w(e,$(e)-3-(~A(e,"!important")&&10))){case 107:return p(e,":",":"+y)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+y+(45===w(e,14)?"inline-":"")+"box$3$1"+y+"$2$3$1"+k+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return y+e+k+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return y+e+k+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return y+e+k+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return y+e+k+e+e}return e}var D=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case m:e.return=W(e.value,e.length);break;case h:return i([v(e,{value:p(e.value,"@","@"+y)})],n);case f:if(e.length)return d(e.props,(function(t){switch(C(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return i([v(e,{props:[p(t,/:(read-\w+)/,":"+S+"$1")]})],n);case"::placeholder":return i([v(e,{props:[p(t,/:(plac\w+)/,":"+y+"input-$1")]}),v(e,{props:[p(t,/:(plac\w+)/,":"+S+"$1")]}),v(e,{props:[p(t,/:(plac\w+)/,k+"input-$1")]})],n)}return""}))}}],L=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,s,f=e.stylisPlugins||D,d={},h=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)d[t[r]]=!0;h.push(e)}));var v,p=[G,F],y=[l,u((function(e){v.insert(e)}))],m=c(p.concat(f,y));s=function(e,t,r,n){var a;v=r,a=e?e+"{"+t.styles+"}":t.styles,i(o(a),m),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:d,registered:{},insert:s};return g.sheet.hydrate(h),g};function q(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")})),n}var H=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},J=function(e,t,r){H(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var X={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},B=/[A-Z]|^ms/g,K=/_EMO_([^_]+?)_([^]*?)_EMO_/g,U=function(e){return 45===e.charCodeAt(1)},Y=function(e){return null!=e&&"boolean"!=typeof e},Z=T((function(e){return U(e)?e:e.replace(B,"-$&").toLowerCase()})),Q=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(K,(function(e,t,r){return ee={name:t,styles:r,next:ee},t}))}return 1===X[e]||U(e)||"number"!=typeof t||0===t?t:t+"px"};function V(t,r,n){if(null==n)return"";var a=n;if(void 0!==a.__emotion_styles)return a;switch(e(n)){case"boolean":return"";case"object":var s=n;if(1===s.anim)return ee={name:s.name,styles:s.styles,next:ee},s.name;var i=n;if(void 0!==i.styles){var o=i.next;if(void 0!==o)for(;void 0!==o;)ee={name:o.name,styles:o.styles,next:ee},o=o.next;return i.styles+";"}return function(t,r,n){var a="";if(Array.isArray(n))for(var s=0;s<n.length;s++)a+=V(t,r,n[s])+";";else for(var i in n){var o=n[i];if("object"!==e(o)){var c=o;null!=r&&void 0!==r[c]?a+=i+"{"+r[c]+"}":Y(c)&&(a+=Z(i)+":"+Q(i,c)+";")}else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=r&&void 0!==r[o[0]]){var l=V(t,r,o);switch(i){case"animation":case"animationName":a+=Z(i)+":"+l+";";break;default:a+=i+"{"+l+"}"}}else for(var u=0;u<o.length;u++)Y(o[u])&&(a+=Z(i)+":"+Q(i,o[u])+";")}return a}(t,r,n);case"function":if(void 0!==t){var c=ee,l=n(t);return ee=c,V(t,r,l)}}var u=n;if(null==r)return u;var f=r[u];return void 0!==f?f:u}var ee,te=/label:\s*([^\s;{]+)\s*(;|$)/g;function re(t,r,n){if(1===t.length&&"object"===e(t[0])&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a=!0,s="";ee=void 0;var i=t[0];null==i||void 0===i.raw?(a=!1,s+=V(n,r,i)):s+=i[0];for(var o=1;o<t.length;o++){if(s+=V(n,r,t[o]),a)s+=i[o]}te.lastIndex=0;for(var c,l="";null!==(c=te.exec(s));)l+="-"+c[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(s)+l;return{name:u,styles:s,next:ee}}var ne=!!n.useInsertionEffect&&n.useInsertionEffect||function(e){return e()},ae=a.createContext("undefined"!=typeof HTMLElement?L({key:"css"}):null);ae.Provider;var se,ie,oe=function(e){return a.forwardRef((function(t,r){var n=a.useContext(ae);return e(t,n,r)}))},ce=a.createContext({}),le={}.hasOwnProperty,ue="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fe=function(e,t){var r={};for(var n in t)le.call(t,n)&&(r[n]=t[n]);return r[ue]=e,r},de=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return H(t,r,n),ne((function(){return J(t,r,n)})),null},he=oe((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var s=e[ue],i=[n],o="";"string"==typeof e.className?o=q(t.registered,i,e.className):null!=e.className&&(o=e.className+" ");var c=re(i,void 0,a.useContext(ce));o+=t.key+"-"+c.name;var l={};for(var u in e)le.call(e,u)&&"css"!==u&&u!==ue&&(l[u]=e[u]);return l.className=o,r&&(l.ref=r),a.createElement(a.Fragment,null,a.createElement(de,{cache:t,serialized:c,isStringTag:"string"==typeof s}),a.createElement(s,l))})),ve=(t("F",s.Fragment),t("j",(function(e,t,r){return le.call(t,"css")?s.jsx(he,fe(e,t),r):s.jsx(e,t,r)})),function(e,t){var r=arguments;if(null==t||!le.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,s=new Array(n);s[0]=he,s[1]=fe(e,t);for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)});function pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return re(t)}se=ve||(ve={}),ie||(ie=se.JSX||(se.JSX={}));var ye=function t(r){for(var n=r.length,a=0,s="";a<n;a++){var i=r[a];if(null!=i){var o=void 0;switch(e(i)){case"boolean":break;case"object":if(Array.isArray(i))o=t(i);else for(var c in o="",i)i[c]&&c&&(o&&(o+=" "),o+=c);break;default:o=i}o&&(s&&(s+=" "),s+=o)}}return s};var me=function(e){var t=e.cache,r=e.serializedArr;return ne((function(){for(var e=0;e<r.length;e++)J(t,r[e],!1)})),null};t("C",oe((function(e,t){var r=[],n=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var s=re(n,t.registered);return r.push(s),H(t,s,!1),t.key+"-"+s.name},s={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(e,t,r){var n=[],a=q(e,n,r);return n.length<2?r:a+t(n)}(t.registered,n,ye(r))},theme:a.useContext(ce)},i=e.children(s);return a.createElement(a.Fragment,null,a.createElement(me,{cache:t,serializedArr:r}),i)})))}}}))}();
