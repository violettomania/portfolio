import{s as C,f as g,g as v,h as w,d as l,j as i,i as m,A as D,l as b,m as x}from"../chunks/scheduler.3fa296d9.js";import{S as O,i as S,b as $,d as p,m as d,a as f,t as u,e as h}from"../chunks/index.e127cdc7.js";import{C as k}from"../chunks/Chip.377b2b09.js";import{C as V}from"../chunks/CommonPage.713a0056.js";const j="https://drive.google.com/file/d/1xoabIDeWScO41TYs7MY_F4_JnOyijF-U/view?usp=drive_link",A="Resumé";function E(r){let e,o;return e=new k({props:{$$slots:{default:[I]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}function F(r){let e,o,t;return o=new k({props:{size:"1.25em",$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){e=g("a"),$(o.$$.fragment),this.h()},l(n){e=v(n,"A",{href:!0,download:!0,class:!0});var a=w(e);p(o.$$.fragment,a),a.forEach(l),this.h()},h(){i(e,"href",j),i(e,"download",""),i(e,"class","svelte-wl30ce")},m(n,a){m(n,e,a),d(o,e,null),t=!0},i(n){t||(f(o.$$.fragment,n),t=!0)},o(n){u(o.$$.fragment,n),t=!1},d(n){n&&l(e),h(o)}}}function I(r){let e;return{c(){e=b("Ooops! No CV at the moment.")},l(o){e=x(o,"Ooops! No CV at the moment.")},m(o,t){m(o,e,t)},d(o){o&&l(e)}}}function N(r){let e;return{c(){e=b("Download")},l(o){e=x(o,"Download")},m(o,t){m(o,e,t)},d(o){o&&l(e)}}}function P(r){let e,o,t,n;const a=[F,E],_=[];function y(s,c){return 0}return o=y(),t=_[o]=a[o](r),{c(){e=g("div"),t.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var c=w(e);t.l(c),c.forEach(l),this.h()},h(){i(e,"class","resume svelte-wl30ce")},m(s,c){m(s,e,c),_[o].m(e,null),n=!0},p:D,i(s){n||(f(t),n=!0)},o(s){u(t),n=!1},d(s){s&&l(e),_[o].d()}}}function Y(r){let e,o;return e=new V({props:{title:A,$$slots:{default:[P]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(t){p(e.$$.fragment,t)},m(t,n){d(e,t,n),o=!0},p(t,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){u(e.$$.fragment,t),o=!1},d(t){h(e,t)}}}class R extends O{constructor(e){super(),S(this,e,null,Y,C,{})}}export{R as component};