import{i as G,t as S}from"../chunks/posts.d237ff41.js";import{s as H,a as M,f as v,c as P,g,h as x,d as m,j as h,i as C,v as _,r as A,A as B,l as O,m as q,n as L}from"../chunks/scheduler.1154bfde.js";import{S as J,i as K,b as D,d as E,m as I,t as b,c as N,a as k,e as V,g as R}from"../chunks/index.b13f2865.js";import{g as U}from"../chunks/index.673cf77c.js";import{M as Q}from"../chunks/app.dc196c91.js";import{M as W}from"../chunks/Markdown.f75fa696.js";import{T as X}from"../chunks/TabTitle.79309378.js";import{B as Y}from"../chunks/Banner.051261ac.js";import{U as F}from"../chunks/UIcon.d68614bb.js";import{C as Z}from"../chunks/CardDivider.df3e675b.js";function tt({params:c}){if(c.slug)return{post:G.find(n=>n.slug===c.slug)}}const ht=Object.freeze(Object.defineProperty({__proto__:null,load:tt},Symbol.toStringTag,{value:"Module"}));function et(c){let t,n,r,e,o,l,a,i,f,s,u;n=new Y({props:{img:U(c[0].post.logo),$$slots:{default:[st]},$$scope:{ctx:c}}});const w=[ot,at],$=[];function j(p,d){return p[0].post.description?0:1}return l=j(c),a=$[l]=w[l](c),s=new Z({}),{c(){t=v("div"),D(n.$$.fragment),r=M(),e=v("div"),o=v("div"),a.c(),i=M(),f=v("div"),D(s.$$.fragment),this.h()},l(p){t=g(p,"DIV",{class:!0});var d=x(t);E(n.$$.fragment,d),r=P(d),e=g(d,"DIV",{class:!0});var y=x(e);o=g(y,"DIV",{class:!0});var T=x(o);a.l(T),T.forEach(m),i=P(y),f=g(y,"DIV",{class:!0});var z=x(f);E(s.$$.fragment,z),z.forEach(m),y.forEach(m),d.forEach(m),this.h()},h(){h(o,"class","px-10px m-y-5"),h(f,"class","w-100% m-t-8"),h(e,"class","pt-3 pb-1 overflow-x-hidden w-full wrapper svelte-1i1zhnk"),h(t,"class","flex flex-col items-center overflow-x-hidden wrapper svelte-1i1zhnk")},m(p,d){C(p,t,d),I(n,t,null),_(t,r),_(t,e),_(e,o),$[l].m(o,null),_(e,i),_(e,f),I(s,f,null),u=!0},p(p,d){const y={};d&1&&(y.img=U(p[0].post.logo)),d&5&&(y.$$scope={dirty:d,ctx:p}),n.$set(y);let T=l;l=j(p),l===T?$[l].p(p,d):(R(),b($[T],1,1,()=>{$[T]=null}),N(),a=$[l],a?a.p(p,d):(a=$[l]=w[l](p),a.c()),k(a,1),a.m(o,null))},i(p){u||(k(n.$$.fragment,p),k(a),k(s.$$.fragment,p),u=!0)},o(p){b(n.$$.fragment,p),b(a),b(s.$$.fragment,p),u=!1},d(p){p&&m(t),V(n),$[l].d(),V(s)}}}function nt(c){let t,n,r,e,o="Could not load post data...",l;return n=new F({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=v("div"),D(n.$$.fragment),r=M(),e=v("p"),e.textContent=o,this.h()},l(a){t=g(a,"DIV",{class:!0});var i=x(t);E(n.$$.fragment,i),r=P(i),e=g(i,"P",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-19z7xtc"&&(e.textContent=o),i.forEach(m),this.h()},h(){h(e,"class","font-300"),h(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,i){C(a,t,i),I(n,t,null),_(t,r),_(t,e),l=!0},p:B,i(a){l||(k(n.$$.fragment,a),l=!0)},o(a){b(n.$$.fragment,a),l=!1},d(a){a&&m(t),V(n)}}}function rt(c){let t=c[0].post.name+"",n;return{c(){n=O(t)},l(r){n=q(r,t)},m(r,e){C(r,n,e)},p(r,e){e&1&&t!==(t=r[0].post.name+"")&&L(n,t)},d(r){r&&m(n)}}}function st(c){let t,n,r,e,o,l=c[0].post.type+"",a,i;return r=new Q({props:{$$slots:{default:[rt]},$$scope:{ctx:c}}}),{c(){t=v("div"),n=v("div"),D(r.$$.fragment),e=M(),o=v("p"),a=O(l),this.h()},l(f){t=g(f,"DIV",{class:!0});var s=x(t);n=g(s,"DIV",{class:!0});var u=x(n);E(r.$$.fragment,u),u.forEach(m),e=P(s),o=g(s,"P",{class:!0});var w=x(o);a=q(w,l),w.forEach(m),s.forEach(m),this.h()},h(){h(n,"class","text-0.9em"),h(o,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),h(t,"class","col-center p-y-20")},m(f,s){C(f,t,s),_(t,n),I(r,n,null),_(t,e),_(t,o),_(o,a),i=!0},p(f,s){const u={};s&5&&(u.$$scope={dirty:s,ctx:f}),r.$set(u),(!i||s&1)&&l!==(l=f[0].post.type+"")&&L(a,l)},i(f){i||(k(r.$$.fragment,f),i=!0)},o(f){b(r.$$.fragment,f),i=!1},d(f){f&&m(t),V(r)}}}function at(c){let t,n,r,e,o="No description",l;return n=new F({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){t=v("div"),D(n.$$.fragment),r=M(),e=v("p"),e.textContent=o,this.h()},l(a){t=g(a,"DIV",{class:!0});var i=x(t);E(n.$$.fragment,i),r=P(i),e=g(i,"P",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1ugej71"&&(e.textContent=o),i.forEach(m),this.h()},h(){h(e,"class","font-300"),h(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,i){C(a,t,i),I(n,t,null),_(t,r),_(t,e),l=!0},p:B,i(a){l||(k(n.$$.fragment,a),l=!0)},o(a){b(n.$$.fragment,a),l=!1},d(a){a&&m(t),V(n)}}}function ot(c){let t,n;return t=new W({props:{content:c[0].post.description}}),{c(){D(t.$$.fragment)},l(r){E(t.$$.fragment,r)},m(r,e){I(t,r,e),n=!0},p(r,e){const o={};e&1&&(o.content=r[0].post.description),t.$set(o)},i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){V(t,r)}}}function lt(c){let t,n,r,e,o,l;t=new X({props:{title:c[1]}});const a=[nt,et],i=[];function f(s,u){return s[0].post===void 0?0:1}return e=f(c),o=i[e]=a[e](c),{c(){D(t.$$.fragment),n=M(),r=v("div"),o.c(),this.h()},l(s){E(t.$$.fragment,s),n=P(s),r=g(s,"DIV",{class:!0});var u=x(r);o.l(u),u.forEach(m),this.h()},h(){h(r,"class","pb-10 overflow-x-hidden col flex-1")},m(s,u){I(t,s,u),C(s,n,u),C(s,r,u),i[e].m(r,null),l=!0},p(s,[u]){const w={};u&2&&(w.title=s[1]),t.$set(w);let $=e;e=f(s),e===$?i[e].p(s,u):(R(),b(i[$],1,1,()=>{i[$]=null}),N(),o=i[e],o?o.p(s,u):(o=i[e]=a[e](s),o.c()),k(o,1),o.m(r,null))},i(s){l||(k(t.$$.fragment,s),k(o),l=!0)},o(s){b(t.$$.fragment,s),b(o),l=!1},d(s){s&&(m(n),m(r)),V(t,s),i[e].d()}}}function it(c,t,n){let r,{data:e}=t;return c.$$set=o=>{"data"in o&&n(0,e=o.data)},c.$$.update=()=>{c.$$.dirty&1&&n(1,r=e.post?`${e.post.name} - ${S}`:S)},[e,r]}class bt extends J{constructor(t){super(),K(this,t,it,lt,H,{data:0})}}export{bt as component,ht as universal};
