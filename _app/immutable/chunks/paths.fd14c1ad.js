import{A as c,s as h}from"./scheduler.3fa296d9.js";const t=[];function g(i,l=c){let n;const o=new Set;function r(e){if(h(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=l(r,a)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var f;const k=((f=globalThis.__sveltekit_1vkarek)==null?void 0:f.base)??"";var u;const d=((u=globalThis.__sveltekit_1vkarek)==null?void 0:u.assets)??k;export{d as a,k as b,g as w};
