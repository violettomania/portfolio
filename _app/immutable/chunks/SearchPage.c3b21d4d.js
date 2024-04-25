import{s as q,e as g,c as w,l as _,i as d,J as P,B as V,n as y,f as m,o as S,k as B,K as J,y as K,p as M,a as N,b as I,g as W,q as j,u as z,r as A,v as F}from"./scheduler.e906c390.js";import{S as C,i as E,c as k,a as D,m as L,t as b,b as v,d as U,f as G}from"./index.a3065792.js";import{C as H}from"./CommonPage.ef40c016.js";import{p as O}from"./stores.69f98009.js";import{b as Q}from"./paths.7f8c93b0.js";function X(n){let e,t,s;return{c(){e=g("input"),this.h()},l(o){e=w(o,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){_(e,"placeholder",n[1]),_(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(o,l){d(o,e,l),n[4](e),P(e,n[0]),t||(s=V(e,"input",n[5]),t=!0)},p(o,[l]){l&2&&_(e,"placeholder",o[1]),l&1&&e.value!==o[0]&&P(e,o[0])},i:y,o:y,d(o){o&&m(e),n[4](null),t=!1,s()}}}function Y(n,e,t){let{value:s=""}=e,{placeholder:o=""}=e,l;function f(){l.focus()}function p(u){S[u?"unshift":"push"](()=>{l=u,t(2,l)})}function h(){s=this.value,t(0,s)}return n.$$set=u=>{"value"in u&&t(0,s=u.value),"placeholder"in u&&t(1,o=u.placeholder)},[s,o,l,f,p,h]}class Z extends C{constructor(e){super(),E(this,e,Y,X,q,{value:0,placeholder:1,focus:3})}get focus(){return this.$$.ctx[3]}}function $(n){let e,t,s,o,l,f;function p(a){n[7](a)}let h={placeholder:"Search..."};n[0]!==void 0&&(h.value=n[0]),t=new Z({props:h}),n[6](t),S.push(()=>G(t,"value",p));const u=n[5].default,r=M(u,n,n[8],null);return{c(){e=g("div"),k(t.$$.fragment),o=N(),l=g("div"),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var c=I(e);D(t.$$.fragment,c),c.forEach(m),o=W(a),l=w(a,"DIV",{class:!0});var i=I(l);r&&r.l(i),i.forEach(m),this.h()},h(){_(e,"class","search-bar-width row"),_(l,"class","w-100% col flex-1")},m(a,c){d(a,e,c),L(t,e,null),d(a,o,c),d(a,l,c),r&&r.m(l,null),f=!0},p(a,c){const i={};!s&&c&1&&(s=!0,i.value=a[0],j(()=>s=!1)),t.$set(i),r&&r.p&&(!f||c&256)&&z(r,u,a,a[8],f?F(u,a[8],c,null):A(a[8]),null)},i(a){f||(b(t.$$.fragment,a),b(r,a),f=!0)},o(a){v(t.$$.fragment,a),v(r,a),f=!1},d(a){a&&(m(e),m(o),m(l)),n[6](null),U(t),r&&r.d(a)}}}function x(n){let e,t;return e=new H({props:{title:n[1],$$slots:{default:[$]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,o){L(e,s,o),t=!0},p(s,[o]){const l={};o&2&&(l.title=s[1]),o&261&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function ee(n,e,t){let s;B(n,O,i=>t(4,s=i));let{$$slots:o={},$$scope:l}=e,{title:f="Title"}=e,{search:p=""}=e,h;const u=J();let r=!1;K(()=>{let i=new URLSearchParams(window.location.search);t(0,p=i.get("q")??""),t(3,r=!0)});function a(i){S[i?"unshift":"push"](()=>{h=i,t(2,h)})}function c(i){p=i,t(0,p)}return n.$$set=i=>{"title"in i&&t(1,f=i.title),"search"in i&&t(0,p=i.search),"$$scope"in i&&t(8,l=i.$$scope)},n.$$.update=()=>{if(n.$$.dirty&1&&u("search",{search:p.trim().toLowerCase()}),n.$$.dirty&29&&r){let i=new URLSearchParams(window.location.search);i.set("q",p);const R=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${i.toString()}`,T=window.history.state;window.history.replaceState(T,"",R),s.url.pathname.startsWith(`${Q}/search`)&&h&&h.focus()}},[p,f,h,r,s,o,a,c,l]}class le extends C{constructor(e){super(),E(this,e,ee,x,q,{title:1,search:0})}}export{le as S};
