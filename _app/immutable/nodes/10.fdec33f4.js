import{s as y,f as g,g as v,h as w,d as l,j as i,i as m,A as D,l as b,m as k}from"../chunks/scheduler.3fa296d9.js";import{S as N,i as S,b as $,d as p,m as d,a as f,t as u,e as h}from"../chunks/index.e127cdc7.js";import{C as x}from"../chunks/Chip.429c75cc.js";import{C as V}from"../chunks/CommonPage.c79c8c03.js";const A="https://drive.google.com/file/d/1HglLl4Ruewvu6252B853KmNBDKC04Sab/view?usp=drive_link",B="Resumé";function E(r){let e,o;return e=new x({props:{$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}function K(r){let e,o,t;return o=new x({props:{size:"1.25em",$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){e=g("a"),$(o.$$.fragment),this.h()},l(n){e=v(n,"A",{href:!0,download:!0,class:!0});var a=w(e);p(o.$$.fragment,a),a.forEach(l),this.h()},h(){i(e,"href",A),i(e,"download",""),i(e,"class","svelte-wl30ce")},m(n,a){m(n,e,a),d(o,e,null),t=!0},i(n){t||(f(o.$$.fragment,n),t=!0)},o(n){u(o.$$.fragment,n),t=!1},d(n){n&&l(e),h(o)}}}function O(r){let e;return{c(){e=b("Ooops! No CV at the moment.")},l(o){e=k(o,"Ooops! No CV at the moment.")},m(o,t){m(o,e,t)},d(o){o&&l(e)}}}function P(r){let e;return{c(){e=b("Download")},l(o){e=k(o,"Download")},m(o,t){m(o,e,t)},d(o){o&&l(e)}}}function R(r){let e,o,t,n;const a=[K,E],_=[];function C(s,c){return 0}return o=C(),t=_[o]=a[o](r),{c(){e=g("div"),t.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=w(e);t.l(c),c.forEach(l),this.h()},h(){i(e,"class","resume svelte-wl30ce")},m(s,c){m(s,e,c),_[o].m(e,null),n=!0},p:D,i(s){n||(f(t),n=!0)},o(s){u(t),n=!1},d(s){s&&l(e),_[o].d()}}}function j(r){let e,o;return e=new V({props:{title:B,$$slots:{default:[R]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}class L extends N{constructor(e){super(),S(this,e,null,j,y,{})}}export{L as component};