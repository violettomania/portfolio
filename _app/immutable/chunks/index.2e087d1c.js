import{t as D,a as L}from"./index.bc2cb9f6.js";import{y as I}from"./scheduler.98dcdc08.js";import{w as P,b as U}from"./paths.60365c14.js";function V(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function $(e,a){D(e,1,1,()=>{a.delete(e.key)})}function B(e,a,o,c,y,d,g,b,h,v,n,f){let p=e.length,u=d.length,l=p;const S={};for(;l--;)S[e[l].key]=l;const m=[],k=new Map,x=new Map,N=[];for(l=u;l--;){const t=f(y,d,l),i=o(t);let r=g.get(i);r?c&&N.push(()=>r.p(t,a)):(r=v(i,t),r.c()),k.set(i,m[l]=r),i in S&&x.set(i,Math.abs(l-S[i]))}const R=new Set,T=new Set;function J(t){L(t,1),t.m(b,n),g.set(t.key,t),n=t.first,u--}for(;p&&u;){const t=m[u-1],i=e[p-1],r=t.key,w=i.key;t===i?(n=t.first,p--,u--):k.has(w)?!g.has(r)||R.has(r)?J(t):T.has(w)?p--:x.get(r)>x.get(w)?(T.add(r),J(t)):(R.add(w),p--):(h(i,g),p--)}for(;p--;){const t=e[p];k.has(t.key)||h(t,g)}for(;u;)J(m[u-1]);return I(N),m}const j="@riadh-adrani-theme",q=e=>{localStorage.setItem(j,JSON.stringify(e))},F=P(!0),A=e=>F.update(a=>{var c;const o=typeof e=="boolean"?e:!a;return q(o),(c=document.querySelector(":root"))==null||c.setAttribute("data-theme",o?"dark":"light"),o}),H=()=>{const e=localStorage.getItem(j);e?A(JSON.parse(e)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,A(!0))},M=e=>`${U}/logos/${e}`,s=(e,a)=>a?{dark:M(a),light:M(e)}:M(e),O={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),MUI:s("mui.svg"),Webpack:s("webpack.png"),Figma:s("figma.svg"),Redux:s("redux.svg"),ReactTestingLibrary:s("rtl.svg"),Nightwatch:s("nightwatch.svg")};let C;F.subscribe(e=>C=e);const W=e=>typeof e=="string"?e:C?e.dark:e.light;globalThis&&globalThis.__awaiter;export{O as A,A as a,$ as b,V as e,W as g,H as o,F as t,B as u};