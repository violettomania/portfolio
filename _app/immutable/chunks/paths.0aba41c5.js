import{A as b,s as p}from"./scheduler.98dcdc08.js";const e=[];function d(i,l=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=l(r,f)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1v5c9si)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_1v5c9si)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
