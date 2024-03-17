import{A as e}from"./index.9cf47963.js";function i(l,...g){const r=Object.assign({},l);return Object.keys(r).forEach(s=>{g.includes(s)&&delete r[s]}),r}const a=l=>l,m=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Languages",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Build Tools & Bundlers",slug:"build-tool/bundler"}),a({name:"VCS",slug:"vcs"}),a({name:"Design",slug:"design"}),a({name:"Languages",slug:"language"})],o=l=>{const g=i(l,"category");return l.category&&(g.category=m.find(r=>r.slug===l.category)),g},c=[o({slug:"reactjs",color:"cyan",logo:e.ReactJs,name:"React Js",category:"library"}),o({slug:"redux",color:"purple",logo:e.Redux,name:"Redux",category:"library"}),o({slug:"js",color:"yellow",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"java",color:"red",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"css",color:"blue",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"sass",color:"pink",logo:e.Sass,name:"Sass",category:"markup-style"}),o({slug:"tailwind",color:"teal",logo:e.Tailwind,name:"Tailwind",category:"markup-style"}),o({slug:"mui",color:"blue",logo:e.MUI,name:"MUI",category:"markup-style"}),o({slug:"docker",color:"blue",logo:e.Docker,name:"Docker",category:"devops"}),o({slug:"kubernetes",color:"blue",logo:e.Kubernetes,name:"Kubernetes",category:"devops"}),o({slug:"gha",color:"blue",logo:e.GitHubActions,name:"GitHub Actions",category:"devops"}),o({slug:"jenkins",color:"red",logo:e.Jenkins,name:"Jenkins",category:"devops"}),o({slug:"rtl",color:"red",logo:e.ReactTestingLibrary,name:"React Testing Library",category:"test"}),o({slug:"jest",color:"red",logo:e.Jest,name:"Jest",category:"test"}),o({slug:"nightwatch",color:"brown",logo:e.Nightwatch,name:"Nightwatch",category:"test"}),o({slug:"webpack",color:"blue",logo:e.Webpack,name:"Webpack",category:"build-tool/bundler"}),o({slug:"vite",color:"yellow",logo:e.Vite,name:"Vite",category:"build-tool/bundler"}),o({slug:"git",color:"red",logo:e.Git,name:"Git",category:"vcs"}),o({slug:"svn",color:"blue",logo:e.SVN,name:"Subversion",category:"vcs"}),o({slug:"figma",color:"pink",logo:e.Figma,name:"Figma",category:"design"}),o({slug:"english",color:"red",logo:e.English,name:"English",category:"language"}),o({slug:"hungarian",color:"red",logo:e.Hungarian,name:"Hungarian",category:"language"})],d="Skills",p=(...l)=>c.filter(g=>l.includes(g.slug)),b=l=>{const g=[],r=[];return c.forEach(s=>{if(l.trim()&&!s.name.toLowerCase().includes(l.trim().toLowerCase()))return;if(!s.category){console.log(s.category),r.push(s);return}let t=g.find(u=>{var n;return u.category.slug===((n=s.category)==null?void 0:n.slug)});t||(t={items:[],category:s.category},g.push(t)),t.items.push(s)}),r.length!==0&&g.push({category:{name:"Others",slug:"others"},items:r}),g};export{b as a,p as g,c as i,d as t};