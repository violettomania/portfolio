import{s as y,f as g,g as v,h as w,d as l,j as i,i as f,A as D,l as k,m as x}from"../chunks/scheduler.3fa296d9.js";import{S as q,i as E,b as p,d as $,m as d,a as m,t as u,e as h}from"../chunks/index.e127cdc7.js";import{C as b}from"../chunks/Chip.429c75cc.js";import{C as V}from"../chunks/CommonPage.c79c8c03.js";const A="https://drive.google.com/file/d/1GD_xgadeqsfcL4T-fBGRvpEFnkIDqJgc/view?usp=drive_link",G="Resumé";function I(r){let e,o;return e=new b({props:{$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){p(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}function N(r){let e,o,t;return o=new b({props:{size:"1.25em",$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){e=g("a"),p(o.$$.fragment),this.h()},l(n){e=v(n,"A",{href:!0,download:!0,class:!0});var a=w(e);$(o.$$.fragment,a),a.forEach(l),this.h()},h(){i(e,"href",A),i(e,"download",""),i(e,"class","svelte-wl30ce")},m(n,a){f(n,e,a),d(o,e,null),t=!0},i(n){t||(m(o.$$.fragment,n),t=!0)},o(n){u(o.$$.fragment,n),t=!1},d(n){n&&l(e),h(o)}}}function O(r){let e;return{c(){e=k("Ooops! No CV at the moment.")},l(o){e=x(o,"Ooops! No CV at the moment.")},m(o,t){f(o,e,t)},d(o){o&&l(e)}}}function P(r){let e;return{c(){e=k("Download")},l(o){e=x(o,"Download")},m(o,t){f(o,e,t)},d(o){o&&l(e)}}}function R(r){let e,o,t,n;const a=[N,I],_=[];function C(s,c){return 0}return o=C(),t=_[o]=a[o](r),{c(){e=g("div"),t.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=w(e);t.l(c),c.forEach(l),this.h()},h(){i(e,"class","resume svelte-wl30ce")},m(s,c){f(s,e,c),_[o].m(e,null),n=!0},p:D,i(s){n||(m(t),n=!0)},o(s){u(t),n=!1},d(s){s&&l(e),_[o].d()}}}function S(r){let e,o;return e=new V({props:{title:G,$$slots:{default:[R]},$$scope:{ctx:r}}}),{c(){p(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}class J extends q{constructor(e){super(),E(this,e,null,S,y,{})}}export{J as component};