import{s as se,f as g,a as x,e as Z,E as ce,g as _,d as m,c as y,j as f,v as c,i as A,o as fe,h as v,z as me,x as le,l as ee,m as te,u as oe}from"../chunks/scheduler.e67d60ea.js";import{S as de,i as he,a as w,t as E,c as ue,f as ae,b as C,d as F,m as H,e as z,g as pe}from"../chunks/index.f857a1c9.js";import{e as re}from"../chunks/each.e59479a4.js";import{I as B}from"../chunks/Icon.60a46965.js";import{g as ge,a as _e,l as be}from"../chunks/firebase.602778a6.js";import{b as ne}from"../chunks/index.4aa9c8b0.js";const ve=[{id:1,title:"Lekh",description:"Lekh is a social media application where the writer can post literatures.",stack:[{logo:"logos:svelte-icon",name:"Svelte"},{logo:"logos:tailwindcss-icon",name:"Tailwind"},{logo:"fa6-brands:golang",name:"Fiber Golang"}],imageLink:"/static/data/Images/lekh.jpg",projectLink:"",github:"https://github.com/nabinkhanal00/lekh"},{id:2,title:"Rubiks",description:"Rubiks is a 3D visualization of rubiks cube made using OpenGL.",stack:[{logo:"tabler:brand-cpp",name:"C++"},{logo:"logos:opengl",name:"OpenGL"}],imageLink:"/static/data/Images/rubiks.gif",projectLink:"",github:"https://github.com/nabinkhanal00/rubiks"},{id:3,title:"Jobs API",description:"Jobs API is a backend application which provides acts as a service for a company which finds different clients, the appropriate job they are looking for.",stack:[{logo:"logos:nodejs-icon",name:"Node JS"},{logo:"skill-icons:expressjs-dark",name:"Express JS"}],imageLink:"",projectLink:"",github:"https://github.com/nabinkhanal00/jobs-api"},{id:4,title:"TODO",description:"TODO is a full stack application written using Golang, HTMX and Tailwindcss.",stack:[{logo:"fa6-brands:golang",name:"Fiber Golang"},{logo:"logos:tailwindcss-icon",name:"Tailwind"}],imageLink:"",projectLink:"https://todo.nabinkhanal00.com.np",github:"https://github.com/nabinkhanal00/todo-go-htmx"}];function ke(d,e,a){const t=d.slice();return t[1]=e[a],t[3]=a,t}function $e(d,e,a){const t=d.slice();return t[3]=e[a],t}function ie(d){let e,a,t,u=re(ve),l=[];for(let n=0;n<u.length;n+=1)l[n]=xe(ke(d,u,n));return{c(){e=g("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=_(n,"DIV",{class:!0});var o=v(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(m),this.h()},h(){f(e,"class","flex md:flex-row flex-col md:flex-wrap justify-start gap-8 h-full max-w-7xl mx-auto items-center px-4")},m(n,o){A(n,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);t=!0},i(n){if(!t){for(let o=0;o<u.length;o+=1)w(l[o]);n&&me(()=>{t&&(a||(a=ae(e,ne,{amount:300,duration:1e3},!0)),a.run(1))}),t=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)E(l[o]);n&&(a||(a=ae(e,ne,{amount:300,duration:1e3},!1)),a.run(0)),t=!1},d(n){n&&m(e),le(l,n),n&&a&&a.end()}}}function we(d){let e,a;return e=new B({props:{height:"20",width:"20",icon:d[3].logo}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,u){H(e,t,u),a=!0},p:oe,i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function xe(d){let e,a,t,u,l,n,o,i,r,h,M,k,j,R=d[1].title+"",V,J,L,K=d[1].description+"",O,P,I,G,D;o=new B({props:{height:"20",width:"20",icon:"charm:github"}}),h=new B({props:{height:"20",width:"20",icon:"line-md:external-link"}});let N=re(d[1].stack),b=[];for(let s=0;s<N.length;s+=1)b[s]=we($e(d,N,s));return{c(){e=g("div"),a=g("div"),t=g("div"),u=x(),l=g("div"),n=g("a"),C(o.$$.fragment),i=x(),r=g("a"),C(h.$$.fragment),M=x(),k=g("div"),j=g("h1"),V=ee(R),J=x(),L=g("p"),O=ee(K),P=x(),I=g("div");for(let s=0;s<b.length;s+=1)b[s].c();G=x(),this.h()},l(s){e=_(s,"DIV",{class:!0});var p=v(e);a=_(p,"DIV",{class:!0});var $=v(a);t=_($,"DIV",{class:!0}),v(t).forEach(m),u=y($),l=_($,"DIV",{class:!0});var S=v(l);n=_(S,"A",{class:!0,href:!0});var X=v(n);F(o.$$.fragment,X),X.forEach(m),i=y(S),r=_(S,"A",{class:!0,href:!0});var Q=v(r);F(h.$$.fragment,Q),Q.forEach(m),S.forEach(m),$.forEach(m),M=y(p),k=_(p,"DIV",{class:!0});var T=v(k);j=_(T,"H1",{class:!0});var U=v(j);V=te(U,R),U.forEach(m),J=y(T),L=_(T,"P",{class:!0});var W=v(L);O=te(W,K),W.forEach(m),P=y(T),I=_(T,"DIV",{class:!0});var Y=v(I);for(let q=0;q<b.length;q+=1)b[q].l(Y);Y.forEach(m),T.forEach(m),G=y(p),p.forEach(m),this.h()},h(){f(t,"class","flex gap-4 mb-2 w-full"),f(n,"class","text-primary hover:scale-110"),f(n,"href",d[1].github),f(r,"class","text-primary hover:scale-110"),f(r,"href",d[1].projectLink),f(l,"class","flex gap-2"),f(a,"class","bg-secondary p-3 card_data flex flex-1 svelte-1n02qxr"),f(j,"class","font-secondary mb-2"),f(L,"class","mb-2 text-sm"),f(I,"class","flex gap-4"),f(k,"class","overflow-hidden w-full bg-primary p-4 mt-11"),f(e,"class","card_ w-full md:w-[30%] mx-auto relative border svelte-1n02qxr")},m(s,p){A(s,e,p),c(e,a),c(a,t),c(a,u),c(a,l),c(l,n),H(o,n,null),c(l,i),c(l,r),H(h,r,null),c(e,M),c(e,k),c(k,j),c(j,V),c(k,J),c(k,L),c(L,O),c(k,P),c(k,I);for(let $=0;$<b.length;$+=1)b[$]&&b[$].m(I,null);c(e,G),D=!0},p:oe,i(s){if(!D){w(o.$$.fragment,s),w(h.$$.fragment,s);for(let p=0;p<N.length;p+=1)w(b[p]);D=!0}},o(s){E(o.$$.fragment,s),E(h.$$.fragment,s),b=b.filter(Boolean);for(let p=0;p<b.length;p+=1)E(b[p]);D=!1},d(s){s&&m(e),z(o),z(h),le(b,s)}}}function ye(d){let e,a,t,u,l,n,o,i=d[0]&&ie(d);return{c(){e=g("meta"),a=g("meta"),t=g("meta"),u=g("meta"),l=x(),i&&i.c(),n=Z(),this.h()},l(r){const h=ce("svelte-1p6o80f",document.head);e=_(h,"META",{name:!0,content:!0}),a=_(h,"META",{name:!0,content:!0}),t=_(h,"META",{name:!0,content:!0}),u=_(h,"META",{name:!0,content:!0}),h.forEach(m),l=y(r),i&&i.l(r),n=Z(),this.h()},h(){document.title="Projects",f(e,"name","description"),f(e,"content","Projects by Nabin Khanal"),f(a,"name","email"),f(a,"content","nabinkhanal688@gmail.com"),f(t,"name","LinkedIn"),f(t,"content","linkedin.com/in/khanalnabin"),f(u,"name","keywords"),f(u,"content","HTML, CSS, JavaScript, Front-end Engineer, NodeJS, Svelte ")},m(r,h){c(document.head,e),c(document.head,a),c(document.head,t),c(document.head,u),A(r,l,h),i&&i.m(r,h),A(r,n,h),o=!0},p(r,[h]){r[0]?i?h&1&&w(i,1):(i=ie(r),i.c(),w(i,1),i.m(n.parentNode,n)):i&&(pe(),E(i,1,1,()=>{i=null}),ue())},i(r){o||(w(i),o=!0)},o(r){E(i),o=!1},d(r){r&&(m(l),m(n)),m(e),m(a),m(t),m(u),i&&i.d(r)}}}function Ee(d,e,a){let t=!1;return fe(()=>{a(0,t=!0);const u=ge(_e);be(u,"page_title")}),[t]}class Ae extends de{constructor(e){super(),he(this,e,Ee,ye,se,{})}}export{Ae as component};