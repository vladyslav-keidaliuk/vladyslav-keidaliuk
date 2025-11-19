import{w as o,q as i,t as c,p as e,M as l,L as d,S as m,v as h,O as x,i as u}from"./chunk-OIYGIGL5-Cms7XLg0.js";const f=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function g({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(d,{}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})]}),e.jsxs("body",{suppressHydrationWarning:!0,children:[t,e.jsx(m,{}),e.jsx(h,{}),e.jsx("script",{src:"/vladyslav-keidaliuk/flyonui.js"})]})]})}const j=o(function(){return e.jsx("div",{className:"min-h-screen bg-base-100 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"loading loading-spinner loading-lg text-primary mb-4"}),e.jsx("p",{className:"text-base-content/70",children:"Loading..."})]})})}),b=i(function(){return e.jsx(x,{})}),y=c(function({error:s}){let r="Oops!",a="An unexpected error occurred.",n;return u(s)&&(r=s.status===404?"404 - Page Not Found":"Error",a=s.status===404?"The requested page could not be found.":s.statusText||a),e.jsx("div",{className:"min-h-screen bg-base-100 flex items-center justify-center px-4",children:e.jsxs("div",{className:"text-center max-w-md",children:[e.jsx("div",{className:"text-6xl mb-4",children:"😵"}),e.jsx("h1",{className:"text-4xl font-bold mb-4 text-base-content",children:r}),e.jsx("p",{className:"text-lg text-base-content/70 mb-8",children:a}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsx("a",{href:"/",className:"btn btn-primary",children:"Go Home"}),e.jsx("a",{href:"/portfolio",className:"btn btn-outline",children:"View Portfolio"})]}),n]})})});export{y as ErrorBoundary,j as HydrateFallback,g as Layout,b as default,f as links};
