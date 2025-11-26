const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/flyonui-Ddw2xcgZ.js","assets/chunk-OIYGIGL5-CLJXsUgI.js"])))=>i.map(i=>d[i]);
import{q as r,r as i,w as c,t as l,v as d,p as e,M as m,L as h,S as x,x as u,O as p,i as f}from"./chunk-OIYGIGL5-CLJXsUgI.js";import{_ as g}from"./preload-helper-CfvimvJD.js";function j(){const t=r();i.useEffect(()=>{(async()=>{await g(()=>import("./flyonui-Ddw2xcgZ.js").then(a=>a.f),__vite__mapDeps([0,1])),window.HSStaticMethods&&window.HSStaticMethods.autoInit()})()},[t.pathname])}const w=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},{rel:"icon",type:"image/x-icon",href:"/vladyslav-keidaliuk/favicon.ico"}];function k({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(m,{}),e.jsx(h,{}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                // Default to dark theme since site was designed for dark
                const isDark = theme === 'dark' || (!theme && !prefersLight);
                const root = document.documentElement;
                if (isDark) {
                  root.classList.add('dark');
                  root.setAttribute('data-theme', 'dark');
                } else {
                  root.classList.remove('dark');
                  root.setAttribute('data-theme', 'light');
                }
              })();
            `}})]}),e.jsxs("body",{suppressHydrationWarning:!0,children:[t,e.jsx(x,{}),e.jsx(u,{}),e.jsx("script",{src:"/vladyslav-keidaliuk/flyonui.js"})]})]})}const v=c(function(){return e.jsx("div",{className:"min-h-screen bg-base-100 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"loading loading-spinner loading-lg text-primary mb-4"}),e.jsx("p",{className:"text-base-content/70",children:"Loading..."})]})})}),N=l(function(){return j(),e.jsx(p,{})}),E=d(function({error:s}){let a="Oops!",o="An unexpected error occurred.",n;return f(s)&&(a=s.status===404?"404 - Page Not Found":"Error",o=s.status===404?"The requested page could not be found.":s.statusText||o),e.jsx("div",{className:"min-h-screen bg-base-100 flex items-center justify-center px-4",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"text-6xl mb-4",children:"😵"}),e.jsx("h1",{className:"text-4xl font-bold mb-4 text-base-content",children:a}),e.jsx("p",{className:"text-lg text-base-content/70 mb-8",children:o}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsx("a",{href:"/",className:"btn btn-primary",children:"Go Home"}),e.jsx("a",{href:"/portfolio",className:"btn btn-outline",children:"View Portfolio"})]}),n]})})});export{E as ErrorBoundary,v as HydrateFallback,k as Layout,N as default,w as links};
