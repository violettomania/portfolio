import{A as b,s as h}from"./scheduler.3fa296d9.js";const e=[];function q(i,l=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=l(r,f)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_8kc3q3)==null?void 0:u.base)??"";var a;const d=((a=globalThis.__sveltekit_8kc3q3)==null?void 0:a.assets)??p;export{d as a,p as b,q as w};
