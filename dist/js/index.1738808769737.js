var w=Object.freeze,p=Object.defineProperty;var c=(e,s)=>w(p(e,"raw",{value:w(s||e.slice())}));import{j as A,a as g,r as d,S as v,F as C,u as P,b as B}from"./.pnpm.1738808769737.js";import{k as m}from"./@emotion.1738808769778.js";import"./hoist-non-react-statics.1738808769780.js";import"./react-is.1738808769780.js";import"./stylis.1738808769780.js";function iA(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&f(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();function Q(){const e=navigator.userAgent,s=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];for(let a=0;a<s.length;a++)if(e.indexOf(s[a])>0)return!1;return!0}const h="/assets/mb-kv-tvZp1rSN.png",M="data:image/png;base64,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",b="data:image/png;base64,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";function N(e){e.event_name==="pv"?fbq("track","PageView"):e.event_name==="ios_btn"?fbq("trackCustom","iOSButton"):fbq("trackCustom","GPButton")}function r(e){return{line:"https://line.me/ti/g2/AdrogOp_njALYtTIwGJBaDnmnuzkm0xyPdcYWA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",fb:"https://www.facebook.com/3KDfantasy/",naverGame:"https://game.naver.com/lounge/syungsyung/home",ios:"https://sgzhxzj.onelink.me/N6F7/aq0o056z",gp:"https://sgzhxzj.onelink.me/N6F7/aq0o056z",icon:"https://www.facebook.com/3KDfantasy/"}[e]}function o(e){const s={};s[e]=localStorage.getItem(e)!==null,s[e]||(s[e]=!0,localStorage.setItem(e,String(!0)),N({event_name:e}))}var x;function Y(){const e=m(x||(x=c(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]))),s=()=>{o("ios_btn"),window.open(r("ios"),"_blank")},a=()=>{o("google_btn"),window.open(r("gp"),"_blank")};return A.jsx(g,{triggerOnce:!0,keyframes:e,duration:1500,children:A.jsxs("div",{id:"mb-kv",children:[A.jsx("img",{className:"kv-role",src:h,alt:""}),A.jsx("button",{className:"icon-link",onClick:()=>{window.open("https://www.facebook.com/3KDfantasy/","_blank")}}),A.jsxs("div",{className:"kv-store",children:[A.jsx("img",{alt:"",src:M,className:"ios-btn",onClick:s}),A.jsx("img",{alt:"",src:b,className:"gp-btn",onClick:a})]})]})})}const k="/assets/a-CObZWFE_.png",I="/assets/b-8bKJJ6ec.png",R="/assets/c-CMUAiZWO.png",E="/assets/mb-BT-WtjXKA3D.png";var j;function y(){const e=m(j||(j=c(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 30px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));return A.jsx("div",{id:"mb-event",children:A.jsxs("div",{className:"mb-event-inner",children:[A.jsx("div",{className:"mb-event-rewards",children:A.jsxs(g,{keyframes:e,triggerOnce:!0,cascade:!0,children:[A.jsx("img",{className:"reward-a",alt:"",src:k}),A.jsx("img",{className:"reward-b",alt:"",src:I}),A.jsx("img",{className:"reward-c",alt:"",src:R})]})}),A.jsx("img",{className:"mb-event-btn",src:E,alt:"",onClick:()=>{window.open("https://www.hermesgames.com.tw/#/gameStoreCenter","_blank")}})]})})}const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAA1CAMAAADCgQ/mAAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMAIGDA8BCQ4FBvL9Cxf/qgBT/2Gwkk7FcMFdpGqsqc5yp6dpaIN9akW0M7xYxNtV7krjLSuoNmaunVF7MAAAq7SURBVGje3ZmJkqo4FIaPiIggICCouLX7vrf2//5PNgmJJni9Pd6pmqrp+aqmRbmQfMk5J4Gh37D30w/6H7AHWvQ/IABC+h+wBUr0k6ksPS8mGiMi2nnXVYN+It29j+EXO7jBJVplQDr5efm+cgHTaxNjhwX729gtTKD+s0w6PSCadsSXNTxx0P7K4E9/UHStj8AiJkmiym6jlsJN6Idw8DGfaZMDR32JP2H+kCr8BUyapOEXQslD1KUfgAHUqMDmaboQrek/z8rHkopMqZjbS6QvFsZasFQHLyjV6216YlBf8Y9FXQvjymHBP5wgkD/GQdCUHWE/6dyCR2Q4RvFUnOLrl7Qnw2ULomKEvjDTqcNSB4rQGsuWgIrsjnWv3lUY/MOELUuKPd34MInTx0U2MsRO9A0olv1ARc4VVuJ01KlPbDWp1r1OZTAPpDjB0zSNHBefTwd5owmQFD1CRO1XHu1FBM7xSpwZIEfAwkIOX2TkJA8Pgc3/jTXAQAuZjaYxVUEDcVdJJ/UTbVReIwerjEnRY4+AXnkMAFR7Y4ckE0QfcgHzS3wwq5AYj5bTKqfL52PahXkfn/YwKmnR29ZqL2On5/pJOdZzhjiWc9L7gZhNG1Gse5yBs7So+qIjYB+tRoRphTTaVR6+C9M0gcg0lwaisqDL5awgyNAPgmDA2/FgUfWREmOMtCxySDEHMNSqsQvn+/xQZAh0jzLKJICOEf+yrQ6BLbub5JbpIb+Dxo3HnEU1VJtMn83cUOtqs1bsJUP7pYXJux5LIFQeB+BetR1nCM9hmBiFnZLu0RCNeF6n5NQx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",H=()=>A.jsx("div",{className:"mb_footer",children:A.jsx("footer",{children:A.jsxs("div",{className:"footer_container columnFlex",children:[A.jsx("div",{className:"logo rowFlex",children:A.jsx("img",{className:"game_logo",src:O,alt:""})}),A.jsxs("ul",{className:"rowFlex link",children:[A.jsx("li",{children:A.jsx("a",{href:"https://www.hermesgames.com.tw/#/customerCenter?type=companyInfo",children:"公司介绍"})}),A.jsx("li",{className:"divider",children:"|"}),A.jsx("li",{children:A.jsx("a",{href:"https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=contactUs",children:"聯繫我們"})}),A.jsx("li",{className:"divider",children:"|"}),A.jsx("li",{children:A.jsx("a",{href:"https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=serviceTerms",children:"服務條款"})}),A.jsx("li",{className:"divider",children:"|"}),A.jsx("li",{children:A.jsx("a",{href:"https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=privacyPolicy",children:"隱私政策"})})]}),A.jsx("p",{className:"copyright",children:"Copyright © 2023 Hermes Game Co.,LTD 荷米斯遊戲有限公司 All Rights Reserved"}),A.jsxs("ul",{className:"tips",children:[A.jsx("li",{children:"※遊戲內容依遊戲軟體分級管理辦法第六條，列為「輔導12歲級」。"}),A.jsx("li",{children:"※本遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。"}),A.jsx("li",{children:"※因遊戲內容涉及「暴力」-有打鬥、攻擊等未達血腥之畫面與「性」–角色 穿著凸顯女性胸、臀性特徵之服飾。"}),A.jsx("li",{children:"※請注意遊戲時間，避免沉迷"}),A.jsx("li",{children:"※本遊戲由荷米斯遊戲有限公司代理，如有疑問，請與本遊戲客服管道聯繫。"})]})]})})}),l={"event-bg":"_event-bg_1u2ck_21","parent-scroll":"_parent-scroll_1u2ck_157","content-scroll":"_content-scroll_1u2ck_162"},W="/assets/mb-bg-CrGWHvVA.png",D="data:image/png;base64,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",q="/assets/attention-BViL-kDt.png",F=()=>{const e=()=>{window.open(r("fb"),"_blank")};return A.jsxs("div",{id:"m-attention",children:[A.jsx("img",{className:"attention-bg",alt:"",src:q}),A.jsx("img",{className:"facebook-link",alt:"",src:D,onClick:e})]})};function S(){return d.useEffect(()=>{window.scroll({top:0,behavior:"smooth"})},[]),A.jsx("div",{children:A.jsx("div",{className:l["parent-scroll"],children:A.jsxs("div",{className:l["content-scroll"],children:[A.jsx(Y,{}),A.jsx(y,{}),A.jsx(F,{}),A.jsx(H,{}),A.jsx("img",{alt:"",src:W,className:l["event-bg"]})]})})})}const Z="/assets/pc-kv-c-Dgmw8X8w.webp",U="/assets/pc-quoto-BQDIw1Oa.png",X="/assets/IOS-TWoRqH_L.png",G="/assets/gp-B2yC2bMw.png";function T(){const e=()=>{o("ios_btn"),window.open(r("ios"),"_blank")},s=()=>{o("google_btn"),window.open(r("gp"),"_blank")};return A.jsxs("div",{id:"pc-kv",children:[A.jsx("button",{className:"icon-link",onClick:()=>{window.open("https://www.facebook.com/3KDfantasy/","_blank")}}),A.jsx("img",{className:"kv-role",src:Z,alt:""}),A.jsx("img",{className:"kv-quoto",src:U,alt:""}),A.jsxs("div",{className:"pc-download",children:[A.jsx("img",{className:"ios",src:X,alt:"",onClick:e}),A.jsx("img",{className:"gp",src:G,alt:"",onClick:s})]})]})}const z="/assets/pc-bg-CrN3RBzS.png",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAA3CAMAAACcnu4ZAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMA8GDRUBGA4LCRIDBxwEAK/fqY56oGFxwOy8XXoPf0d+vdR6VDN+OIPGkpJFy7g1RmWZ22jS1LbXs0JE8GDwAACzpJREFUaN7c1u1yojAYBeATBAHBAopWxe/1q7XVrbptPfd/YSsESHDtzs7sL/v8Ykon5ORN3oivDCJxxjcyIH/iG3FIE9/IgfTwHXQeTLMDrBkG6L6/POOubX4Ijj8BTGgDb1NytmvgXs37ZOR2cWHwCMCa9Mkwvs8iPR7JcJhX450nZBprwfDUw915EeRxi9xStetgN+JsiTtzIpM5SltutMq9Mrqv26jjkKcASo9daPyQddyPS5zRHhVtVMzFPQVqUWxQFaNqOaKBPwWe10Hm2eviFsv7hWs9z0PK8wJouttsq+cvgU75vnc9SNdr4Es+R0tc+cBi34NmEUU3moJH5gPXqgW0LEgGRZHdKmZvkulri3xQI300Qx8XP8m3PI8oniZMUFGng0LNrk7Mi8I5lGe5IuiOomEXyhNnwb/nself50n4eTtP96nVFLz4QKrPdr6SB8bF4K3rPDU/tQcguHEcVb9OQl87SruyKi7ZPkOJ6WrtvZZJyEQ+jdiWD/Li2nF2lWfO8PFmnu2UqVlrgcw5LGY/Z2RlfyFXcvDnMo/UzPJ4A21qEx6huA1VKJLiWduz01Ctgs+vOPIeDrmv5nktvrM11+SLaZov5Ke5RczwuNs3KnfHHFia5lvIoWluELPglXmSesqQeZ44DSBZ4/EjSsYcyoxk0tF3nEq+NTM+6RuZFV/lw6KoZlLJsyAXt5bCh+AEFUHClQWHueZzyJMhWUBwECzMTJmnJ8r7f62PZtWhGcrvKQl//eX8uNdvfD1PjQNIhj0lV7Ztr8i2bYA0r0eN+Npp2YIj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",J="data:image/png;base64,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",V="/assets/tips-DX11cYcv.png",K="data:image/png;base64,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",_=()=>A.jsx("div",{id:"pc-footer",children:A.jsx("footer",{children:A.jsxs("div",{className:"footer_container",children:[A.jsxs("div",{className:"pc-footer-left",children:[A.jsx("img",{className:"pc-game_logo",src:L,alt:""}),A.jsxs("div",{className:"relative",children:[A.jsx("img",{className:"pc-link-img",alt:"",src:K}),A.jsxs("ul",{className:"pc-link",children:[A.jsx("li",{children:A.jsx("a",{target:"_blank",href:"https://www.hermesgames.com.tw/#/customerCenter?type=companyInfo"})}),A.jsx("li",{children:A.jsx("a",{target:"_blank",href:"https://www.hermesgames.com.tw/#/customerCenter?type=contactUs"})}),A.jsx("li",{children:A.jsx("a",{target:"_blank",href:"https://www.hermesgames.com.tw/#/customerCenter?type=serviceTerms"})}),A.jsx("li",{children:A.jsx("a",{target:"_blank",href:"https://www.hermesgames.com.tw/#/customerCenter?type=privacyPolicy"})})]})]})]}),A.jsxs("div",{className:"pc-footer-right",children:[A.jsx("img",{className:"pc-footer-age",alt:"",src:J}),A.jsx("img",{className:"pc-footer-tip",alt:"",src:V})]})]})})}),$="/assets/BT-myy1RwEm.png",AA="/assets/A-Cedi7cxZ.png",eA="/assets/b-45StsuRU.png",sA="/assets/c-CboBOVWH.png";var u;function tA(){const e=m(u||(u=c(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"])));return A.jsx("div",{id:"pc-event",children:A.jsx("div",{className:"event-inner",children:A.jsxs("div",{className:"pc-event-rewards",children:[A.jsx(g,{keyframes:e,delay:300,cascade:!0,triggerOnce:!0,children:A.jsx("div",{className:"pc-reward-top",children:A.jsx("img",{className:"reward-a",alt:"",src:AA})})}),A.jsxs("div",{className:"pc-reward-bottom",children:[A.jsx(v,{direction:"left",triggerOnce:!0,children:A.jsx("img",{className:"reward-b",alt:"",src:eA})}),A.jsx(v,{direction:"right",triggerOnce:!0,children:A.jsx("img",{className:"reward-c",alt:"",src:sA})})]}),A.jsx(C,{delay:300,triggerOnce:!0,children:A.jsx("img",{className:"event-btn",alt:"",src:$,onClick:()=>{window.open("https://www.hermesgames.com.tw/#/gameStoreCenter","_blank")}})})]})})})}const nA="/assets/attention-Cay8ef8H.png",aA=()=>{const e=()=>{window.open(r("fb"),"_blank")};return A.jsxs("div",{id:"attention",children:[A.jsx("img",{className:"attention-bg",alt:"",src:nA}),A.jsx("img",{className:"facebook-link",alt:"",src:D,onClick:e})]})},rA=()=>A.jsxs(A.Fragment,{children:[A.jsxs("div",{id:"device-pc",children:[A.jsx(T,{}),A.jsx(tA,{}),A.jsx(aA,{})]}),A.jsx("img",{alt:"",src:z,className:"pc-event-bg"}),A.jsx(_,{})]});function cA(){const[e,s]=d.useState(null),a=P(document.body);if(d.useEffect(()=>{s(Q())},[a]),e!==null)return e?A.jsx(rA,{}):A.jsx(A.Fragment,{children:A.jsx(S,{})})}B.createRoot(document.getElementById("root")).render(A.jsx(cA,{}));export{iA as __vite_legacy_guard};
