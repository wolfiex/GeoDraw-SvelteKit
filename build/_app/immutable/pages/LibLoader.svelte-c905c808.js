import{S as h,i as _,s as f,t as p,e as m,h as v,G as L,c as b,a as g,d as c,P as o,b as l,g as E,H as y,E as d,W as q,v as S,X as w}from"../chunks/index-ba5e9c90.js";function x(i){let r,e,a;return{c(){r=p(`// LibLoader.svelte

`),e=m("script"),this.h()},l(s){r=v(s,`// LibLoader.svelte

`);const t=L('[data-svelte="svelte-50y8ql"]',document.head);e=b(t,"SCRIPT",{src:!0}),g(e).forEach(c),t.forEach(c),this.h()},h(){o(e.src,a=i[0])||l(e,"src",a)},m(s,t){E(s,r,t),y(document.head,e),i[2](e)},p(s,[t]){t&1&&!o(e.src,a=s[0])&&l(e,"src",a)},i:d,o:d,d(s){s&&c(r),c(e),i[2](null)}}}function C(i,r,e){const a=q();let{url:s}=r,t;S(async()=>{t.addEventListener("load",()=>{a("loaded")}),t.addEventListener("error",n=>{console.error("something went wrong",n),a("error")})});function u(n){w[n?"unshift":"push"](()=>{t=n,e(1,t)})}return i.$$set=n=>{"url"in n&&e(0,s=n.url)},[s,t,u]}class k extends h{constructor(r){super(),_(this,r,C,x,f,{url:0})}}export{k as default};
