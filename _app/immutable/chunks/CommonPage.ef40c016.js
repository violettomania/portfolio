import{s as V,o as j,p as P,a as v,e as T,g as y,c as C,b as k,f as u,l as q,i as g,h as w,q as z,u as A,r as B,v as F,t as G,d as H,j as J}from"./scheduler.e906c390.js";import{S as K,i as L,f as N,c as D,a as E,m as I,t as d,b as $,d as M}from"./index.a3065792.js";import{T as O,M as Q}from"./TabTitle.677a9d5c.js";function R(l){let e;return{c(){e=G(l[0])},l(s){e=H(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&J(e,s[0])},d(s){s&&u(e)}}}function U(l){let e,s,r,f,i,m,n,_;function S(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new O({props:b}),j.push(()=>N(e,"title",S)),i=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:l}}});const p=l[1].default,o=P(p,l,l[3],null);return{c(){D(e.$$.fragment),r=v(),f=T("div"),D(i.$$.fragment),m=v(),n=T("div"),o&&o.c(),this.h()},l(t){E(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var a=k(f);E(i.$$.fragment,a),m=y(a),n=C(a,"DIV",{class:!0});var c=k(n);o&&o.l(c),c.forEach(u),a.forEach(u),this.h()},h(){q(n,"class","col gap-5 flex-1"),q(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){I(e,t,a),g(t,r,a),g(t,f,a),I(i,f,null),w(f,m),w(f,n),o&&o.m(n,null),_=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],z(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!_||a&8)&&A(o,p,t,t[3],_?F(p,t[3],a,null):B(t[3]),null)},i(t){_||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),_=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),_=!1},d(t){t&&(u(r),u(f)),M(e,t),M(i),o&&o.d(t)}}}function W(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function m(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,m,f]}class x extends K{constructor(e){super(),L(this,e,W,U,V,{title:0})}}export{x as C};
