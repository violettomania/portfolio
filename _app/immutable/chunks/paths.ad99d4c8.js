import{A as c,s as q}from"./scheduler.3fa296d9.js";const e=[];function g(i,l=c){let n;const o=new Set;function r(t){if(q(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,f)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_7x2qxq)==null?void 0:u.base)??"";var a;const x=((a=globalThis.__sveltekit_7x2qxq)==null?void 0:a.assets)??h;export{x as a,h as b,g as w};
