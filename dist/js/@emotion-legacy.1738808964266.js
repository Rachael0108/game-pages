!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./hoist-non-react-statics-legacy.1738808964269.js","./.pnpm-legacy.1738808964210.js","./stylis-legacy.1738808964269.js"],(function(t,r){"use strict";var n,a,s,i,o,c,l,u,f,d,h,p,v,y,m,g,b,w,x,$,k,S,C,A,_,E,O,N,P,R;return{setters:[null,function(e){n=e.R,a=e.r},function(e){s=e.s,i=e.c,o=e.m,c=e.a,l=e.r,u=e.R,f=e.b,d=e.K,h=e.d,p=e.e,v=e.W,y=e.D,m=e.f,g=e.g,b=e.h,w=e.i,x=e.M,$=e.j,k=e.k,S=e.l,C=e.n,A=e.o,_=e.t,E=e.p,O=e.q,N=e.u,P=e.v,R=e.w}],execute:function(){t("k",(function(){var e=fe.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}));var r=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}();function T(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var j=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!_(a);)A();return P(e,R)},I=function(e,t){return m(function(e,t){var r=-1,n=44;do{switch(_(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=j(R-1,t,r);break;case 2:e[r]+=N(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=E(n)}}while(n=A());return e}(g(e),t))},M=new WeakMap,z=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||M.get(r))&&!n){M.set(e,!0);for(var a=[],s=I(t,a),i=r.props,o=0,c=0;o<s.length;o++)for(var l=0;l<i.length;l++,c++)e.props[c]=a[o]?s[o].replace(/&\f/g,i[l]):i[l]+" "+s[o]}}},G=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function W(e,t){switch(b(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+S+e+x+e+e;case 6828:case 4268:return v+e+x+e+e;case 6165:return v+e+x+"flex-"+e+e;case 5187:return v+e+p(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+x+"flex-$1$2")+e;case 5443:return v+e+x+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return v+e+x+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return v+e+x+p(e,"shrink","negative")+e;case 5292:return v+e+x+p(e,"basis","preferred-size")+e;case 6060:return v+"box-"+p(e,"-grow","")+v+e+x+p(e,"grow","positive")+e;case 4554:return v+p(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+x+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+S+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch")?W(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==w(e,t+1))break;case 6444:switch(w(e,$(e)-3-(~k(e,"!important")&&10))){case 107:return p(e,":",":"+v)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(45===w(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+x+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return v+e+x+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+x+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+x+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return v+e+x+e+e}return e}var D=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case y:e.return=W(e.value,e.length);break;case d:return s([h(e,{value:p(e.value,"@","@"+v)})],n);case u:if(e.length)return f(e.props,(function(t){switch(C(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return s([h(e,{props:[p(t,/:(read-\w+)/,":"+S+"$1")]})],n);case"::placeholder":return s([h(e,{props:[p(t,/:(plac\w+)/,":"+v+"input-$1")]}),h(e,{props:[p(t,/:(plac\w+)/,":"+S+"$1")]}),h(e,{props:[p(t,/:(plac\w+)/,x+"input-$1")]})],n)}return""}))}}],L=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,u,f=e.stylisPlugins||D,d={},h=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)d[t[r]]=!0;h.push(e)}));var p,v=[z,G],y=[c,l((function(e){p.insert(e)}))],m=o(v.concat(f,y));u=function(e,t,r,n){var a;p=r,a=e?e+"{"+t.styles+"}":t.styles,s(i(a),m),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:d,registered:{},insert:u};return g.sheet.hydrate(h),g};var q=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)};var F={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},H=/[A-Z]|^ms/g,J=/_EMO_([^_]+?)_([^]*?)_EMO_/g,X=function(e){return 45===e.charCodeAt(1)},B=function(e){return null!=e&&"boolean"!=typeof e},K=T((function(e){return X(e)?e:e.replace(H,"-$&").toLowerCase()})),U=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(J,(function(e,t,r){return Z={name:t,styles:r,next:Z},t}))}return 1===F[e]||X(e)||"number"!=typeof t||0===t?t:t+"px"};function Y(t,r,n){if(null==n)return"";var a=n;if(void 0!==a.__emotion_styles)return a;switch(e(n)){case"boolean":return"";case"object":var s=n;if(1===s.anim)return Z={name:s.name,styles:s.styles,next:Z},s.name;var i=n;if(void 0!==i.styles){var o=i.next;if(void 0!==o)for(;void 0!==o;)Z={name:o.name,styles:o.styles,next:Z},o=o.next;return i.styles+";"}return function(t,r,n){var a="";if(Array.isArray(n))for(var s=0;s<n.length;s++)a+=Y(t,r,n[s])+";";else for(var i in n){var o=n[i];if("object"!==e(o)){var c=o;B(c)&&(a+=K(i)+":"+U(i,c)+";")}else if(Array.isArray(o)&&"string"==typeof o[0]&&null==r)for(var l=0;l<o.length;l++)B(o[l])&&(a+=K(i)+":"+U(i,o[l])+";");else{var u=Y(t,r,o);switch(i){case"animation":case"animationName":a+=K(i)+":"+u+";";break;default:a+=i+"{"+u+"}"}}}return a}(t,r,n);case"function":if(void 0!==t){var c=Z,l=n(t);return Z=c,Y(t,r,l)}}return n}var Z,Q=/label:\s*([^\s;{]+)\s*(;|$)/g;function V(t,r,n){if(1===t.length&&"object"===e(t[0])&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a=!0,s="";Z=void 0;var i=t[0];null==i||void 0===i.raw?(a=!1,s+=Y(n,r,i)):s+=i[0];for(var o=1;o<t.length;o++){if(s+=Y(n,r,t[o]),a)s+=i[o]}Q.lastIndex=0;for(var c,l="";null!==(c=Q.exec(s));)l+="-"+c[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(s)+l;return{name:u,styles:s,next:Z}}var ee=!!n.useInsertionEffect&&n.useInsertionEffect||function(e){return e()},te=a.createContext("undefined"!=typeof HTMLElement?L({key:"css"}):null);te.Provider;var re,ne,ae=function(e){return a.forwardRef((function(t,r){var n=a.useContext(te);return e(t,n,r)}))},se=a.createContext({}),ie={}.hasOwnProperty,oe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ce=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return q(t,r,n),ee((function(){return function(e,t,r){q(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)})),null},le=ae((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var s=e[oe],i=[n],o="";"string"==typeof e.className?o=function(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")})),n}(t.registered,i,e.className):null!=e.className&&(o=e.className+" ");var c=V(i,void 0,a.useContext(se));o+=t.key+"-"+c.name;var l={};for(var u in e)ie.call(e,u)&&"css"!==u&&u!==oe&&(l[u]=e[u]);return l.className=o,r&&(l.ref=r),a.createElement(a.Fragment,null,a.createElement(ce,{cache:t,serialized:c,isStringTag:"string"==typeof s}),a.createElement(s,l))})),ue=function(e,t){var r=arguments;if(null==t||!ie.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,s=new Array(n);s[0]=le,s[1]=function(e,t){var r={};for(var n in t)ie.call(t,n)&&(r[n]=t[n]);return r[oe]=e,r}(e,t);for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)};function fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return V(t)}re=ue||(ue={}),ne||(ne=re.JSX||(re.JSX={}))}}}))}();
