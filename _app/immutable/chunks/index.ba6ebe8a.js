import{w as b,b as y}from"./paths.9f66c6e2.js";const l="@riadh-adrani-theme",k=t=>{localStorage.setItem(l,JSON.stringify(t))},d=b(!1),p=t=>d.update(a=>{var n;const e=typeof t=="boolean"?t:!a;return k(e),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",e?"dark":"light"),e}),w=()=>{const t=localStorage.getItem(l);t?p(JSON.parse(t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?p(!0):p(!1)},c=t=>`${y}/logos/${t}`,s=(t,a)=>a?{dark:c(a),light:c(t)}:c(t),x={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.svg"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),MUI:s("mui.svg"),Webpack:s("webpack.png"),Figma:s("figma.svg"),Redux:s("redux.svg"),ReactTestingLibrary:s("rtl.svg"),Nightwatch:s("nightwatch.svg"),Git:s("git.png"),SVN:s("svn.svg"),Jenkins:s("jenkins.svg"),GitHubActions:s("gha.svg"),University:s("university.svg"),English:s("english.svg"),Writing:s("writing.svg"),Hungarian:s("hungarian.svg"),OddJobs:s("odd-job.svg"),Ngrx:s("ngrx.svg"),GitHub:s("github.svg")};let u;d.subscribe(t=>u=t);const J=t=>typeof t=="string"?t:u?t.dark:t.light;globalThis&&globalThis.__awaiter;export{x as A,p as a,J as g,w as o,d as t};