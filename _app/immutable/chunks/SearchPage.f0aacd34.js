import{s as C,f as g,g as w,j as _,i as d,P,w as V,A as I,d as m,p as S,z as j,Q as z,o as A,C as F,a as M,h as y,c as N,R as Q,D as W,E as B,F as G}from"./scheduler.98dcdc08.js";import{S as E,i as D,b as q,d as L,m as R,a as b,t as v,e as U,f as H}from"./index.bc2cb9f6.js";import{C as J}from"./CommonPage.a7f74a1e.js";import{p as K}from"./stores.9b1c6c14.js";import{b as O}from"./paths.5d1ac2b9.js";function X(n){let e,t,s;return{c(){e=g("input"),this.h()},l(o){e=w(o,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){_(e,"placeholder",n[1]),_(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(o,l){d(o,e,l),n[4](e),P(e,n[0]),t||(s=V(e,"input",n[5]),t=!0)},p(o,[l]){l&2&&_(e,"placeholder",o[1]),l&1&&e.value!==o[0]&&P(e,o[0])},i:I,o:I,d(o){o&&m(e),n[4](null),t=!1,s()}}}function Y(n,e,t){let{value:s=""}=e,{placeholder:o=""}=e,l;function f(){l.focus()}function p(u){S[u?"unshift":"push"](()=>{l=u,t(2,l)})}function h(){s=this.value,t(0,s)}return n.$$set=u=>{"value"in u&&t(0,s=u.value),"placeholder"in u&&t(1,o=u.placeholder)},[s,o,l,f,p,h]}class Z extends E{constructor(e){super(),D(this,e,Y,X,C,{value:0,placeholder:1,focus:3})}get focus(){return this.$$.ctx[3]}}function $(n){let e,t,s,o,l,f;function p(a){n[7](a)}let h={placeholder:"Search..."};n[0]!==void 0&&(h.value=n[0]),t=new Z({props:h}),n[6](t),S.push(()=>H(t,"value",p));const u=n[5].default,r=F(u,n,n[8],null);return{c(){e=g("div"),q(t.$$.fragment),o=M(),l=g("div"),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var c=y(e);L(t.$$.fragment,c),c.forEach(m),o=N(a),l=w(a,"DIV",{class:!0});var i=y(l);r&&r.l(i),i.forEach(m),this.h()},h(){_(e,"class","w-100% row"),_(l,"class","w-100% col flex-1")},m(a,c){d(a,e,c),R(t,e,null),d(a,o,c),d(a,l,c),r&&r.m(l,null),f=!0},p(a,c){const i={};!s&&c&1&&(s=!0,i.value=a[0],Q(()=>s=!1)),t.$set(i),r&&r.p&&(!f||c&256)&&W(r,u,a,a[8],f?G(u,a[8],c,null):B(a[8]),null)},i(a){f||(b(t.$$.fragment,a),b(r,a),f=!0)},o(a){v(t.$$.fragment,a),v(r,a),f=!1},d(a){a&&(m(e),m(o),m(l)),n[6](null),U(t),r&&r.d(a)}}}function x(n){let e,t;return e=new J({props:{title:n[1],$$slots:{default:[$]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,o){R(e,s,o),t=!0},p(s,[o]){const l={};o&2&&(l.title=s[1]),o&261&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function ee(n,e,t){let s;j(n,K,i=>t(4,s=i));let{$$slots:o={},$$scope:l}=e,{title:f="Title"}=e,{search:p=""}=e,h;const u=z();let r=!1;A(()=>{let i=new URLSearchParams(window.location.search);t(0,p=i.get("q")??""),t(3,r=!0)});function a(i){S[i?"unshift":"push"](()=>{h=i,t(2,h)})}function c(i){p=i,t(0,p)}return n.$$set=i=>{"title"in i&&t(1,f=i.title),"search"in i&&t(0,p=i.search),"$$scope"in i&&t(8,l=i.$$scope)},n.$$.update=()=>{if(n.$$.dirty&1&&u("search",{search:p.trim().toLowerCase()}),n.$$.dirty&29&&r){let i=new URLSearchParams(window.location.search);i.set("q",p);const k=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${i.toString()}`,T=window.history.state;window.history.replaceState(T,"",k),s.url.pathname.startsWith(`${O}/search`)&&h&&h.focus()}},[p,f,h,r,s,o,a,c,l]}class le extends E{constructor(e){super(),D(this,e,ee,x,C,{title:1,search:0})}}export{le as S};
