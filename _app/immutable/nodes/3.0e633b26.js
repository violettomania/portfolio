import{s as ne,f as y,g as D,h as x,d as _,j as $,i as E,a as k,e as W,c as w,r as se,v as m,A as te,l as G,m as J,G as ie,x as ce}from"../chunks/scheduler.98dcdc08.js";import{S as de,i as ue,a as A,t as V,g as re,c as ae,b as H,d as L,m as P,e as q}from"../chunks/index.bc2cb9f6.js";import{A as F,e as M,u as fe,b as he,g as pe}from"../chunks/index.9cf47963.js";import{C as me}from"../chunks/Card.a7be2a49.js";import{C as ge}from"../chunks/Chip.aa31d6e8.js";import{U as le}from"../chunks/UIcon.8b987cf1.js";import{g as _e}from"../chunks/helpers.2b95f7d2.js";const ve=[{degree:"Java developer (focusing on Spring)",description:"A 6-month backend developer bootcamp focused on Java, relational databases, Spring, and Agile.",location:"Budapest, Hungary",logo:F.Java,name:"",organization:"Braining Hub - Education Center",period:{from:new Date(2018,0,1),to:new Date(2018,7,1)},shortDescription:"Java developer bootcamp.",slug:"java-developer-bootcamp",subjects:["Algorithms and Data structures","Java","Spring","Relational databases","Agile"]},{degree:"Google Developer Challenge Scholarship",description:"A 4-month course organized by Udacity and Google. Studied Java and UI development for Android apps.",location:"Online",logo:F.Android,name:"Android scholarship",organization:"Google",period:{from:new Date(2017,0,1),to:new Date(2018,0,1)},shortDescription:"Android scholarship by Google and Udacity.",slug:"android-scholarship",subjects:["Java","Android","UI development"]},{degree:"Bachelor of Arts",description:"Hungarian Language and Literature",location:"Debrecen, Hungary",logo:F.University,name:"Bachelor of Arts",organization:"University of Debrecen",period:{from:new Date(2006,0,1),to:new Date(2010,0,1)},shortDescription:"Bachelor of Arts",slug:"faculty-of-humanities",subjects:["Grammar","Literature","Pedagogy"]}];function X(s,e,r){const t=s.slice();return t[1]=e[r],t[3]=r,t}function Y(s,e,r){const t=s.slice();return t[4]=e[r],t}function $e(s){let e,r,t=[],n=new Map,i,d,c=M(s[0]);const o=a=>a[1].slug;for(let a=0;a<c.length;a+=1){let l=X(s,c,a),b=o(l);n.set(b,t[a]=ee(b,l))}return{c(){e=y("div"),r=k();for(let a=0;a<t.length;a+=1)t[a].c();i=W(),this.h()},l(a){e=D(a,"DIV",{class:!0}),x(e).forEach(_),r=w(a);for(let l=0;l<t.length;l+=1)t[l].l(a);i=W(),this.h()},h(){$(e,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(a,l){E(a,e,l),E(a,r,l);for(let b=0;b<t.length;b+=1)t[b]&&t[b].m(a,l);E(a,i,l),d=!0},p(a,l){l&1&&(c=M(a[0]),re(),t=fe(t,l,o,1,a,c,n,i.parentNode,he,ee,i,X),ae())},i(a){if(!d){for(let l=0;l<c.length;l+=1)A(t[l]);d=!0}},o(a){for(let l=0;l<t.length;l+=1)V(t[l]);d=!1},d(a){a&&(_(e),_(r),_(i));for(let l=0;l<t.length;l+=1)t[l].d(a)}}}function be(s){let e,r,t,n,i="Could not find anything...",d;return r=new le({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){e=y("div"),H(r.$$.fragment),t=k(),n=y("p"),n.textContent=i,this.h()},l(c){e=D(c,"DIV",{class:!0});var o=x(e);L(r.$$.fragment,o),t=w(o),n=D(o,"P",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-1jyyf6v"&&(n.textContent=i),o.forEach(_),this.h()},h(){$(n,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,o){E(c,e,o),P(r,e,null),m(e,t),m(e,n),d=!0},p:te,i(c){d||(A(r.$$.fragment,c),d=!0)},o(c){V(r.$$.fragment,c),d=!1},d(c){c&&_(e),q(r)}}}function ye(s){let e=s[4]+"",r;return{c(){r=G(e)},l(t){r=J(t,e)},m(t,n){E(t,r,n)},p:te,d(t){t&&_(r)}}}function Z(s){let e,r;return e=new ge({props:{$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){H(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){P(e,t,n),r=!0},p(t,n){const i={};n&128&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function De(s){let e,r,t,n,i,d=s[1].degree+"",c,o,a,l=s[1].organization+"",b,v,g,I=s[1].location+"",j,R,K=_e(s[1].period.from,s[1].period.to)+"",N,O,C,z,U=M(s[1].subjects),u=[];for(let f=0;f<U.length;f+=1)u[f]=Z(Y(s,U,f));const oe=f=>V(u[f],1,1,()=>{u[f]=null});return{c(){e=y("div"),r=y("img"),n=k(),i=y("div"),c=G(d),o=k(),a=y("div"),b=G(l),v=k(),g=y("div"),j=G(I),R=G(" · "),N=G(K),O=k(),C=y("div");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=D(f,"DIV",{class:!0});var h=x(e);r=D(h,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),n=w(h),i=D(h,"DIV",{class:!0});var p=x(i);c=J(p,d),p.forEach(_),o=w(h),a=D(h,"DIV",{});var S=x(a);b=J(S,l),S.forEach(_),v=w(h),g=D(h,"DIV",{class:!0});var B=x(g);j=J(B,I),R=J(B," · "),N=J(B,K),B.forEach(_),O=w(h),C=D(h,"DIV",{class:!0});var Q=x(C);for(let T=0;T<u.length;T+=1)u[T].l(Q);Q.forEach(_),h.forEach(_),this.h()},h(){ie(r.src,t=pe(s[1].logo))||$(r,"src",t),$(r,"alt",s[1].organization),$(r,"height","50"),$(r,"width","50"),$(r,"class","mb-5"),$(i,"class","text-[1.3em]"),$(g,"class","text-[var(--accent-text)] text-[0.9em] font-200 mb-2"),$(C,"class","row flex-wrap gap-1"),$(e,"class","flex-1 col gap-2 items-stretch")},m(f,h){E(f,e,h),m(e,r),m(e,n),m(e,i),m(i,c),m(e,o),m(e,a),m(a,b),m(e,v),m(e,g),m(g,j),m(g,R),m(g,N),m(e,O),m(e,C);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(C,null);z=!0},p(f,h){if(h&1){U=M(f[1].subjects);let p;for(p=0;p<U.length;p+=1){const S=Y(f,U,p);u[p]?(u[p].p(S,h),A(u[p],1)):(u[p]=Z(S),u[p].c(),A(u[p],1),u[p].m(C,null))}for(re(),p=U.length;p<u.length;p+=1)oe(p);ae()}},i(f){if(!z){for(let h=0;h<U.length;h+=1)A(u[h]);z=!0}},o(f){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)V(u[h]);z=!1},d(f){f&&_(e),ce(u,f)}}}function ee(s,e){let r,t,n,i,d,c,o,a,l,b;return d=new le({props:{icon:"i-carbon-condition-point"}}),a=new me({props:{$$slots:{default:[De]},$$scope:{ctx:e}}}),{key:s,first:null,c(){r=y("div"),t=y("div"),n=k(),i=y("div"),H(d.$$.fragment),c=k(),o=y("div"),H(a.$$.fragment),l=k(),this.h()},l(v){r=D(v,"DIV",{class:!0});var g=x(r);t=D(g,"DIV",{class:!0}),x(t).forEach(_),n=w(g),i=D(g,"DIV",{class:!0});var I=x(i);L(d.$$.fragment,I),I.forEach(_),c=w(g),o=D(g,"DIV",{class:!0});var j=x(o);L(a.$$.fragment,j),j.forEach(_),l=w(g),g.forEach(_),this.h()},h(){$(t,"class","flex-1 hidden lg:flex"),$(i,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),$(o,"class","col flex-1 items-stretch"),$(r,"class",`flex ${e[3]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(v,g){E(v,r,g),m(r,t),m(r,n),m(r,i),P(d,i,null),m(r,c),m(r,o),P(a,o,null),m(r,l),b=!0},p(v,g){e=v;const I={};g&128&&(I.$$scope={dirty:g,ctx:e}),a.$set(I)},i(v){b||(A(d.$$.fragment,v),A(a.$$.fragment,v),b=!0)},o(v){V(d.$$.fragment,v),V(a.$$.fragment,v),b=!1},d(v){v&&_(r),q(d),q(a)}}}function xe(s){let e,r,t,n;const i=[be,$e],d=[];function c(o,a){return o[0].length===0?0:1}return r=c(s),t=d[r]=i[r](s),{c(){e=y("div"),t.c(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=x(e);t.l(a),a.forEach(_),this.h()},h(){$(e,"class","col items-center relative mt-10 flex-1 pt-5")},m(o,a){E(o,e,a),d[r].m(e,null),n=!0},p(o,[a]){t.p(o,a)},i(o){n||(A(t),n=!0)},o(o){V(t),n=!1},d(o){o&&_(e),d[r].d()}}}function ke(s){return[ve]}class je extends de{constructor(e){super(),ue(this,e,ke,xe,ne,{})}}export{je as component};