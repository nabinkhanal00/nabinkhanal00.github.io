import{_ as p,N as b}from"./scheduler.e67d60ea.js";function g(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function x(t){const n=t-1;return n*n*n+1}function S(t,{delay:n=0,duration:c=400,easing:s=g,amount:e=5,opacity:r=0}={}){const a=getComputedStyle(t),o=+a.opacity,i=a.filter==="none"?"":a.filter,f=o*(1-r),[y,l]=p(e);return{delay:n,duration:c,easing:s,css:($,u)=>`opacity: ${o-f*u}; filter: ${i} blur(${u*y}${l});`}}function O(t,{delay:n=0,duration:c=400,easing:s=b}={}){const e=+getComputedStyle(t).opacity;return{delay:n,duration:c,easing:s,css:r=>`opacity: ${r*e}`}}function U(t,{delay:n=0,duration:c=400,easing:s=x,x:e=0,y:r=0,opacity:a=0}={}){const o=getComputedStyle(t),i=+o.opacity,f=o.transform==="none"?"":o.transform,y=i*(1-a),[l,$]=p(e),[u,d]=p(r);return{delay:n,duration:c,easing:s,css:(m,_)=>`
			transform: ${f} translate(${(1-m)*l}${$}, ${(1-m)*u}${d});
			opacity: ${i-y*_}`}}export{O as a,S as b,x as c,U as f};
