import{A as b,s as g}from"./scheduler.98dcdc08.js";const e=[];function d(o,a=b){let i;const n=new Set;function r(t){if(g(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=a(r,u)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_sjungw)==null?void 0:f.base)??"/slick-portfolio-svelte";var l;const w=((l=globalThis.__sveltekit_sjungw)==null?void 0:l.assets)??p;export{w as a,p as b,d as w};
