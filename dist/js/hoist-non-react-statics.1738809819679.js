import{r as w}from"./react-is.1738809819686.js";var c,d;function A(){if(d)return c;d=1;var u=w(),g={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},N={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[u.ForwardRef]=N,p[u.Memo]=f;function y(r){return u.isMemo(r)?f:p[r.$$typeof]||g}var R=Object.defineProperty,j=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,T=Object.prototype;function O(r,t,o){if(typeof t!="string"){if(T){var i=_(t);i&&i!==T&&O(r,i,o)}var a=j(t);v&&(a=a.concat(v(t)));for(var P=y(r),S=y(t),s=0;s<a.length;++s){var e=a[s];if(!l[e]&&!(o&&o[e])&&!(S&&S[e])&&!(P&&P[e])){var b=n(t,e);try{R(r,e,b)}catch(I){}}}}return r}return c=O,c}A();
