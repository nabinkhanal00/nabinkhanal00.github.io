import{s as F,f as $,a as v,E as J,g as h,d as m,c as k,h as K,r as N,j as i,v as f,i as w,o as O,l as P,m as V}from"../chunks/scheduler.e67d60ea.js";import{S as Q,i as R,b as j,d as A,m as T,a as M,t as C,e as q}from"../chunks/index.f857a1c9.js";import{B as G}from"../chunks/Button.1c5fd27a.js";import{g as U,a as W,l as X}from"../chunks/firebase.602778a6.js";import{M as Y}from"../chunks/Modal.56d9dfbf.js";function Z(l){let e,n;return e=new G({props:{onClickEvent:l[1],$$slots:{default:[et]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),n=!0},p(t,a){const o={};a&4&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function tt(l){let e,n;return e=new G({props:{href:"/contact/form",$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){T(e,t,a),n=!0},p(t,a){const o={};a&4&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function et(l){let e;return{c(){e=P("Say Hi 🖐")},l(n){e=V(n,"Say Hi 🖐")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function nt(l){let e;return{c(){e=P("Say Hi 🖐")},l(n){e=V(n,"Say Hi 🖐")},m(n,t){w(n,e,t)},d(n){n&&m(e)}}}function at(l){let e,n,t,a,o,r,p,B="Get In touch",E,_,D=`If you want to say 'Hello' or if you have any questions, my inbox is
            always open for queries.`,I,x,g,S,u,b;const L=[tt,Z],H=[];function z(s,c){return localStorage.getItem("form_submitted")!=="true"?0:1}return x=z(),g=H[x]=L[x](l),u=new Y({props:{openModal:l[0],title:"Thank you",message:"I will contact you shortly"}}),u.$on("click",l[1]),{c(){e=$("meta"),n=$("meta"),t=$("meta"),a=v(),o=$("div"),r=$("div"),p=$("h1"),p.textContent=B,E=v(),_=$("p"),_.textContent=D,I=v(),g.c(),S=v(),j(u.$$.fragment),this.h()},l(s){const c=J("svelte-1cec380",document.head);e=h(c,"META",{name:!0,content:!0}),n=h(c,"META",{name:!0,content:!0}),t=h(c,"META",{name:!0,content:!0}),c.forEach(m),a=k(s),o=h(s,"DIV",{class:!0});var y=K(o);r=h(y,"DIV",{class:!0});var d=K(r);p=h(d,"H1",{class:!0,"data-svelte-h":!0}),N(p)!=="svelte-1889t4j"&&(p.textContent=B),E=k(d),_=h(d,"P",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-8aywsj"&&(_.textContent=D),I=k(d),g.l(d),S=k(d),A(u.$$.fragment,d),d.forEach(m),y.forEach(m),this.h()},h(){document.title="Contact Nabin Khanal",i(e,"name","description"),i(e,"content","About Nabin Khanal"),i(n,"name","email"),i(n,"content","nabinkhanal688@gmail.com"),i(t,"name","LinkedIn"),i(t,"content","www.linkedin.com/in/khanalnabin"),i(p,"class","text-5xl text-accent mb-10"),i(_,"class","text- text-secondary font-secondary text-center mb-10"),i(r,"class","flex flex-col items-center justify-center"),i(o,"class","max-w-xl mx-auto min-h-screen flex flex-col justify-center px-8 lg:px-0 items-center")},m(s,c){f(document.head,e),f(document.head,n),f(document.head,t),w(s,a,c),w(s,o,c),f(o,r),f(r,p),f(r,E),f(r,_),f(r,I),H[x].m(r,null),f(r,S),T(u,r,null),b=!0},p(s,[c]){g.p(s,c);const y={};c&1&&(y.openModal=s[0]),u.$set(y)},i(s){b||(M(g),M(u.$$.fragment,s),b=!0)},o(s){C(g),C(u.$$.fragment,s),b=!1},d(s){s&&(m(a),m(o)),m(e),m(n),m(t),H[x].d(),q(u)}}}function ot(l,e,n){O(()=>{const o=U(W);X(o,"page_title")});let t=!1;function a(){n(0,t=!t)}return[t,a]}class mt extends Q{constructor(e){super(),R(this,e,ot,at,F,{})}}export{mt as component};
