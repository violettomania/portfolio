import{s as m,e as _,c as g,l,x as f,i as d,n as h,f as o}from"./scheduler.e906c390.js";import{S as q,i as z}from"./index.a3065792.js";function w(r){let e,a,n;return{c(){e=_("img"),this.h()},l(s){e=g(s,"IMG",{class:!0,src:!0,alt:!0,height:!0,width:!0}),this.h()},h(){l(e,"class",a=`rounded-${r[3]} ${r[4]} aspect-square`),f(e.src,n=r[0])||l(e,"src",n),l(e,"alt",r[1]),l(e,"height",r[2]),l(e,"width",r[2])},m(s,i){d(s,e,i)},p(s,[i]){i&24&&a!==(a=`rounded-${s[3]} ${s[4]} aspect-square`)&&l(e,"class",a),i&1&&!f(e.src,n=s[0])&&l(e,"src",n),i&2&&l(e,"alt",s[1]),i&4&&l(e,"height",s[2]),i&4&&l(e,"width",s[2])},i:h,o:h,d(s){s&&o(e)}}}function C(r,e,a){let{src:n}=e,{alt:s}=e,{size:i=50}=e,{radius:u="15px"}=e,{classes:c=""}=e;return r.$$set=t=>{"src"in t&&a(0,n=t.src),"alt"in t&&a(1,s=t.alt),"size"in t&&a(2,i=t.size),"radius"in t&&a(3,u=t.radius),"classes"in t&&a(4,c=t.classes)},[n,s,i,u,c]}class I extends q{constructor(e){super(),z(this,e,C,w,m,{src:0,alt:1,size:2,radius:3,classes:4})}}export{I as C};
