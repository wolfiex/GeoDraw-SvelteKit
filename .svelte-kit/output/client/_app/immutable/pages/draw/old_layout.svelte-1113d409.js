var l1=Object.defineProperty,r1=Object.defineProperties;var n1=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var o1=Object.prototype.hasOwnProperty,a1=Object.prototype.propertyIsEnumerable;var F=(i,t,o)=>t in i?l1(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,J=(i,t)=>{for(var o in t||(t={}))o1.call(t,o)&&F(i,o,t[o]);if(j)for(var o of j(t))a1.call(t,o)&&F(i,o,t[o]);return i},K=(i,t)=>r1(i,n1(t));import{S as t1,i as e1,s as s1,l as W,g as p,n as i1,o as d,p as c1,q as g,d as f,a2 as Q,C as q,a3 as f1,F as O,e as B,c as M,a as $,a5 as X,K as T,L as U,M as V,z as u1,w as v,k as E,x,m as A,b as c,J as S,y as w,B as z,t as G,h as N,f as _,I as m1,E as H,G as k,H as y}from"../../chunks/index-c4b4a3b1.js";/* empty css                         *//* empty css                       */import"../../chunks/HeaderSearch.svelte_svelte_type_style_lang-0c1a5ac3.js";import{B as L}from"../../chunks/Button-321246ca.js";import{R as I,C as P}from"../../chunks/Column-7a12c078.js";import"../../chunks/index-49558f13.js";const p1=i=>({props:i&2}),Z=i=>({props:i[1]});function $1(i){let t,o;const r=i[10].default,e=O(r,i,i[9],null);let l=[i[1]],n={};for(let s=0;s<l.length;s+=1)n=q(n,l[s]);return{c(){t=B("div"),e&&e.c(),this.h()},l(s){t=M(s,"DIV",{});var a=$(t);e&&e.l(a),a.forEach(f),this.h()},h(){X(t,n)},m(s,a){p(s,t,a),e&&e.m(t,null),o=!0},p(s,a){e&&e.p&&(!o||a&512)&&T(e,r,s,s[9],o?V(r,s[9],a,null):U(s[9]),null),X(t,n=u1(l,[a&2&&s[1]]))},i(s){o||(g(e,s),o=!0)},o(s){d(e,s),o=!1},d(s){s&&f(t),e&&e.d(s)}}}function h1(i){let t;const o=i[10].default,r=O(o,i,i[9],Z);return{c(){r&&r.c()},l(e){r&&r.l(e)},m(e,l){r&&r.m(e,l),t=!0},p(e,l){r&&r.p&&(!t||l&514)&&T(r,o,e,e[9],t?V(o,e[9],l,p1):U(e[9]),Z)},i(e){t||(g(r,e),t=!0)},o(e){d(r,e),t=!1},d(e){r&&r.d(e)}}}function _1(i){let t,o,r,e;const l=[h1,$1],n=[];function s(a,m){return a[0]?0:1}return t=s(i),o=n[t]=l[t](i),{c(){o.c(),r=W()},l(a){o.l(a),r=W()},m(a,m){n[t].m(a,m),p(a,r,m),e=!0},p(a,[m]){let h=t;t=s(a),t===h?n[t].p(a,m):(i1(),d(n[h],1,1,()=>{n[h]=null}),c1(),o=n[t],o?o.p(a,m):(o=n[t]=l[t](a),o.c()),g(o,1),o.m(r.parentNode,r))},i(a){e||(g(o),e=!0)},o(a){d(o),e=!1},d(a){n[t].d(a),a&&f(r)}}}function d1(i,t,o){let r;const e=["as","condensed","narrow","fullWidth","noGutter","noGutterLeft","noGutterRight","padding"];let l=Q(t,e),{$$slots:n={},$$scope:s}=t,{as:a=!1}=t,{condensed:m=!1}=t,{narrow:h=!1}=t,{fullWidth:u=!1}=t,{noGutter:b=!1}=t,{noGutterLeft:Y=!1}=t,{noGutterRight:C=!1}=t,{padding:D=!1}=t;return i.$$set=R=>{t=q(q({},t),f1(R)),o(11,l=Q(t,e)),"as"in R&&o(0,a=R.as),"condensed"in R&&o(2,m=R.condensed),"narrow"in R&&o(3,h=R.narrow),"fullWidth"in R&&o(4,u=R.fullWidth),"noGutter"in R&&o(5,b=R.noGutter),"noGutterLeft"in R&&o(6,Y=R.noGutterLeft),"noGutterRight"in R&&o(7,C=R.noGutterRight),"padding"in R&&o(8,D=R.padding),"$$scope"in R&&o(9,s=R.$$scope)},i.$$.update=()=>{o(1,r=K(J({},l),{class:[l.class,"bx--grid",m&&"bx--grid--condensed",h&&"bx--grid--narrow",u&&"bx--grid--full-width",b&&"bx--no-gutter",Y&&"bx--no-gutter--left",C&&"bx--no-gutter--right",D&&"bx--row-padding"].filter(Boolean).join(" ")}))},[a,r,m,h,u,b,Y,C,D,s,n]}class g1 extends t1{constructor(t){super(),e1(this,t,d1,_1,s1,{as:0,condensed:2,narrow:3,fullWidth:4,noGutter:5,noGutterLeft:6,noGutterRight:7,padding:8})}}function b1(i){let t,o;return{c(){t=B("img"),this.h()},l(r){t=M(r,"IMG",{style:!0,class:!0,src:!0,alt:!0}),this.h()},h(){_(t,"margin-left","10px"),_(t,"margin-top","4px"),c(t,"class","logo svelte-1mbzvnp"),m1(t.src,o="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg")||c(t,"src",o),c(t,"alt","Office for National Statistics logo - Homepage")},m(r,e){p(r,t,e)},p:H,d(r){r&&f(t)}}}function v1(i){let t,o;return t=new P({props:{$$slots:{default:[b1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment)},l(r){x(t.$$.fragment,r)},m(r,e){w(t,r,e),o=!0},p(r,e){const l={};e&8&&(l.$$scope={dirty:e,ctx:r}),t.$set(l)},i(r){o||(g(t.$$.fragment,r),o=!0)},o(r){d(t.$$.fragment,r),o=!1},d(r){z(t,r)}}}function x1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Draw Polygon"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Draw Polygon"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{d:!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m17 15.7v-2.7h2v4l-9 4-7-7 4-9h4v2h-2.7l-2.9 6.6 5 5zm5-10.7v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","0 0 24 24"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},p:H,d(n){n&&f(t),n&&f(r),n&&f(e)}}}function w1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Select a Radius"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Select a Radius"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{d:!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m12 2a10 10 0 0 0 -10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0 -10-10m0 18a8 8 0 0 1 -8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1 -8 8m4-5v-2h-2.28c-.36.62-1.01 1-1.72 1a2 2 0 0 1 -2-2 2 2 0 0 1 2-2c.71 0 1.36.38 1.72 1h2.28v-2l3 3z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","0 0 24 24"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},p:H,d(n){n&&f(t),n&&f(r),n&&f(e)}}}function z1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Click Select"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Click Select"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{d:!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m18.2848192 17.5777124 2.5687342 2.5687342c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-2.5687342-2.5687342-1.6616873 2.4925309c-.2260679.3391019-.7410894.2798123-.8841897-.1017884l-3-8c-.1507287-.4019432.2417831-.794455.6437263-.6437263l8 3c.3816007.1431003.4408903.6581218.1017884.8841897zm-1.0535788-.4994645 2.1792312-1.4528208-6.0560712-2.2710267 2.2710267 6.0560712 1.4528208-2.1792312c.0191996-.0300662.0419325-.0585276.0681987-.0847938s.0547276-.0489991.0847938-.0681987zm-11.7312404-14.0782479c.27614237 0 .5.22385763.5.5s-.22385763.5-.5.5c-.82842712 0-1.5.67157288-1.5 1.5 0 .27614237-.22385763.5-.5.5s-.5-.22385763-.5-.5c0-1.38071187 1.11928813-2.5 2.5-2.5zm3 1c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm5 0c-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5h2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5zm-5 17c-.27614237 0-.5-.2238576-.5-.5s.22385763-.5.5-.5h2c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5zm-5.5-12.5c0-.27614237.22385763-.5.5-.5s.5.22385763.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5v2c0 .2761424-.22385763.5-.5.5s-.5-.2238576-.5-.5zm0 5c0-.2761424.22385763-.5.5-.5s.5.2238576.5.5c0 .8284271.67157288 1.5 1.5 1.5.27614237 0 .5.2238576.5.5s-.22385763.5-.5.5c-1.38071187 0-2.5-1.1192881-2.5-2.5zm18-8c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-2c0-.27614237.2238576-.5.5-.5s.5.22385763.5.5zm0-5c0 .27614237-.2238576.5-.5.5s-.5-.22385763-.5-.5c0-.82842712-.6715729-1.5-1.5-1.5-.2761424 0-.5-.22385763-.5-.5s.2238576-.5.5-.5c1.3807119 0 2.5 1.11928813 2.5 2.5z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","2 4 19 14"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},p:H,d(n){n&&f(t),n&&f(r),n&&f(e)}}}function E1(i){let t,o,r,e,l,n;return t=new L({props:{style:"margin-left:0px",class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[x1]},$$scope:{ctx:i}}}),r=new L({props:{class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[w1]},$$scope:{ctx:i}}}),l=new L({props:{class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[z1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=E(),v(r.$$.fragment),e=E(),v(l.$$.fragment)},l(s){x(t.$$.fragment,s),o=A(s),x(r.$$.fragment,s),e=A(s),x(l.$$.fragment,s)},m(s,a){w(t,s,a),p(s,o,a),w(r,s,a),p(s,e,a),w(l,s,a),n=!0},p(s,a){const m={};a&8&&(m.$$scope={dirty:a,ctx:s}),t.$set(m);const h={};a&8&&(h.$$scope={dirty:a,ctx:s}),r.$set(h);const u={};a&8&&(u.$$scope={dirty:a,ctx:s}),l.$set(u)},i(s){n||(g(t.$$.fragment,s),g(r.$$.fragment,s),g(l.$$.fragment,s),n=!0)},o(s){d(t.$$.fragment,s),d(r.$$.fragment,s),d(l.$$.fragment,s),n=!1},d(s){z(t,s),s&&f(o),z(r,s),s&&f(e),z(l,s)}}}function A1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Subtractive Selection"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Subtractive Selection"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{"clip-rule":!0,d:!0,fill:!0,"fill-rule":!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"clip-rule","evenodd"),c(l,"d","m4 4h-2.5c-.828427 0-1.5.67157-1.5 1.5v8c0 .8284.671573 1.5 1.5 1.5h8c.8284 0 1.5-.6716 1.5-1.5v-2.5h2.5c.8284 0 1.5-.6716 1.5-1.5v-8c0-.828427-.6716-1.5-1.5-1.5h-8c-.82843 0-1.5.671573-1.5 1.5zm1-2.5c0-.27614.22386-.5.5-.5h8c.2761 0 .5.22386.5.5v8c0 .27614-.2239.5-.5.5h-8c-.27614 0-.5-.22386-.5-.5z"),c(l,"fill","#000"),c(l,"fill-rule","evenodd"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","-3 -3 18 21"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},d(n){n&&f(t),n&&f(r),n&&f(e)}}}function S1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Additive Selection"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Additive Selection"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{d:!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v4c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2v-11c0-1.11-.89-2-2-2-1.33 0-4 0-4 0s0-2.67 0-4c0-1.11-.89-2-2-2zm0 2h11v4h-5c-1.11 0-2 .89-2 2v5s-2.67 0-4 0zm6 6h5v5h-5zm7 0h4v11h-11c0-1.33 0-4 0-4h5c1.11 0 2-.89 2-2z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","0 0 24 24"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},d(n){n&&f(t),n&&f(r),n&&f(e)}}}function R1(i){let t;function o(l,n){return l[0]?S1:A1}let r=o(i),e=r(i);return{c(){e.c(),t=W()},l(l){e.l(l),t=W()},m(l,n){e.m(l,n),p(l,t,n)},p(l,n){r!==(r=o(l))&&(e.d(1),e=r(l),e&&(e.c(),e.m(t.parentNode,t)))},d(l){e.d(l),l&&f(t)}}}function k1(i){let t,o,r,e,l,n;return{c(){t=B("span"),o=G("Undo"),r=E(),e=k("svg"),l=k("path"),n=k("path"),this.h()},l(s){t=M(s,"SPAN",{class:!0});var a=$(t);o=N(a,"Undo"),a.forEach(f),r=A(s),e=y(s,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var m=$(e);l=y(m,"path",{d:!0}),$(l).forEach(f),n=y(m,"path",{d:!0}),$(n).forEach(f),m.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z"),c(n,"d","m20 22h-8v-8h2v6h6z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","5 5 35 35"),c(e,"aria-hidden","true")},m(s,a){p(s,t,a),S(t,o),p(s,r,a),p(s,e,a),S(e,l),S(e,n)},p:H,d(s){s&&f(t),s&&f(r),s&&f(e)}}}function y1(i){let t,o,r,e;return t=new L({props:{style:"margin-left:0px",class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[R1]},$$scope:{ctx:i}}}),t.$on("click",i[2]),r=new L({props:{style:"margin-left:0px",class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[k1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=E(),v(r.$$.fragment)},l(l){x(t.$$.fragment,l),o=A(l),x(r.$$.fragment,l)},m(l,n){w(t,l,n),p(l,o,n),w(r,l,n),e=!0},p(l,n){const s={};n&9&&(s.$$scope={dirty:n,ctx:l}),t.$set(s);const a={};n&8&&(a.$$scope={dirty:n,ctx:l}),r.$set(a)},i(l){e||(g(t.$$.fragment,l),g(r.$$.fragment,l),e=!0)},o(l){d(t.$$.fragment,l),d(r.$$.fragment,l),e=!1},d(l){z(t,l),l&&f(o),z(r,l)}}}function B1(i){let t,o,r,e,l;return{c(){t=B("span"),o=G("Save and Build"),r=E(),e=k("svg"),l=k("path"),this.h()},l(n){t=M(n,"SPAN",{class:!0});var s=$(t);o=N(s,"Save and Build"),s.forEach(f),r=A(n),e=y(n,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var a=$(e);l=y(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0}),$(l).forEach(f),a.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"fill-rule","evenodd"),c(l,"clip-rule","evenodd"),c(l,"d","M11.04 1.33L12.71 3l.29.71v.33h-.5l-.5.5v-.83l-1.67-1.67H10v4H4v-4H2v10h3l-.5 1H2l-1-1v-10l1-1h8.33l.71.29zM7 5h2V2H7v3zm6.5 0L15 6.5l-.02.69-5.5 5.5-.13.12-.37.37-.1.09-3 1.5-.67-.67 1.5-3 .09-.1.37-.37.12-.13 5.5-5.5h.71zm-6.22 7.24l-.52 1 1.04-.48-.52-.52zm.69-1.03l.79.79 5.15-5.15-.79-.79-5.15 5.15z"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","0 0 16 16"),c(e,"aria-hidden","true")},m(n,s){p(n,t,s),S(t,o),p(n,r,s),p(n,e,s),S(e,l)},p:H,d(n){n&&f(t),n&&f(r),n&&f(e)}}}function M1(i){let t,o,r,e,l,n;return{c(){t=B("span"),o=G("Explore Existing Selections"),r=E(),e=k("svg"),l=k("path"),n=k("path"),this.h()},l(s){t=M(s,"SPAN",{class:!0});var a=$(t);o=N(a,"Explore Existing Selections"),a.forEach(f),r=A(s),e=y(s,"svg",{focusable:!0,preserveAspectRatio:!0,style:!0,xmlns:!0,class:!0,viewBox:!0,"aria-hidden":!0});var m=$(e);l=y(m,"path",{d:!0}),$(l).forEach(f),n=y(m,"path",{d:!0,fill:!0}),$(n).forEach(f),m.forEach(f),this.h()},h(){c(t,"class","bx--assistive-text"),c(l,"d","m9.002 31.36c-2.404 0-4.36-1.956-4.36-4.36s1.956-4.36 4.36-4.36c.731 0 1.42.182 2.026.5l2.125-3.338.607.387-2.125 3.339c1.048.797 1.727 2.057 1.727 3.473 0 2.403-1.955 4.359-4.36 4.359zm0-8c-2.007 0-3.64 1.633-3.64 3.64s1.633 3.64 3.64 3.64 3.64-1.633 3.64-3.64-1.632-3.64-3.64-3.64zm7 7.995c-.861 0-1.722-.071-2.557-.212l.119-.711c.796.135 1.617.202 2.438.202 4.648 0 8.917-2.134 11.712-5.854l.576.432c-2.932 3.904-7.411 6.143-12.288 6.143zm14.998-6.495c-.062 0-.126-.017-.182-.05l-5.995-3.505c-.11-.064-.179-.183-.179-.311s.068-.246.179-.311l5.995-3.495c.113-.065.249-.065.361-.002.111.064.181.184.181.312v7c0 .129-.069.248-.182.312-.054.034-.116.05-.178.05zm-5.281-3.865 4.921 2.877v-5.745zm-22.374 3.704c-.554-.803-1.034-1.665-1.425-2.56l.66-.289c.373.854.829 1.675 1.357 2.44zm-.219-4.222c-.092 0-.184-.035-.254-.105l-2.126-2.116c-.068-.068-.106-.16-.106-.256 0-.095.038-.187.105-.255l2.126-2.125c.141-.141.368-.141.509 0l2.122 2.121c.068.067.105.159.105.255s-.037.187-.105.254l-2.122 2.121c-.07.07-.162.106-.254.106zm-1.616-2.478 1.616 1.608 1.613-1.612-1.612-1.612zm7.251 2.177c-.732-1.266-1.119-2.711-1.119-4.181 0-3.819 2.58-7.149 6.274-8.098l.179.697c-3.375.867-5.733 3.91-5.733 7.4 0 1.343.354 2.664 1.022 3.819zm7.241-.821c-1.853 0-3.36-1.508-3.36-3.36 0-1.732 1.317-3.162 3.002-3.341v-5.659h.72v5.659c1.683.182 2.998 1.61 2.998 3.341 0 1.853-1.508 3.36-3.36 3.36zm0-6c-1.456 0-2.64 1.185-2.64 2.64 0 1.456 1.185 2.64 2.64 2.64s2.639-1.184 2.639-2.64c.001-1.455-1.183-2.64-2.639-2.64zm14.639 1.664c-.432-6.56-5.246-12.057-11.707-13.37l.143-.706c6.779 1.377 11.83 7.146 12.283 14.029zm-6.636-.664c-.062 0-.124-.016-.18-.048l-2.599-1.5c-.111-.064-.181-.184-.181-.312v-3c0-.128.069-.248.181-.312l2.599-1.5c.111-.063.248-.064.359 0l2.598 1.5c.111.064.181.183.181.312v3c0 .128-.069.248-.181.312l-2.598 1.5c-.055.032-.117.048-.179.048zm-2.238-2.068 2.238 1.292 2.237-1.292v-2.584l-2.237-1.292-2.238 1.292zm-5.769-7.927c-1.024 0-1.857-.836-1.857-1.865 0-1.023.833-1.855 1.857-1.855 1.027 0 1.863.832 1.863 1.855-.001 1.028-.837 1.865-1.863 1.865zm0-3c-.627 0-1.138.509-1.138 1.135 0 .631.51 1.145 1.138 1.145.63 0 1.142-.514 1.142-1.145 0-.626-.513-1.135-1.142-1.135zm-14.963 13.988c-.008 0-.017 0-.025-.001-.198-.015-.347-.177-.333-.375 0 0 .001-.021.001-.022.016-.198.185-.353.387-.331.198.015.346.188.331.387-.015.188-.174.342-.361.342zm.267-2.351h.009zm.534-1.947h.009zm.791-1.508c-.054 0-.108-.012-.159-.039-.175-.09-.249-.295-.16-.471.001-.003.012-.024.014-.028.094-.175.311-.24.488-.146.175.094.24.312.146.488-.066.123-.196.196-.329.196zm2.299-3.311c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.005-.004.023-.023.028-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.17.109-.266.109zm-1.259 1.572c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.169.109-.265.109zm-1.836 3.598c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.071-.169.109-.265.109zm-.535 1.947c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.169.109-.265.109zm15.114 11.002c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm2.007-.367c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm3.38-2.1c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.072.072-.169.109-.265.109zm1.945-3.497c-.088 0-.176-.031-.244-.095-.142-.134-.157-.35-.027-.495.004-.005.022-.024.027-.028.141-.141.368-.141.509 0s.141.368 0 .509c-.071.072-.168.109-.265.109zm-17.367-13.531c-.099 0-.197-.042-.269-.123-.133-.147-.114-.38.034-.513.009-.008.034-.029.044-.036.161-.117.386-.081.503.079.117.161.082.386-.079.503-.067.061-.15.09-.233.09zm3.425-2.163c-.14 0-.275-.078-.334-.211-.077-.176-.012-.378.159-.463.01-.005.039-.019.05-.022.186-.071.394.021.465.207s-.021.394-.207.465c-.042.016-.088.024-.133.024zm-1.772.951c-.14 0-.275-.078-.334-.211-.078-.176-.013-.378.159-.463.01-.005.039-.019.05-.022.186-.071.394.021.465.207s-.021.394-.207.465c-.043.016-.088.024-.133.024zm3.662-1.66c-.155 0-.303-.097-.351-.251-.059-.19.039-.389.229-.447l.019-.006c.187-.058.391.048.45.238.058.19-.048.392-.238.45-.036.011-.072.016-.109.016zm2.754 22.221c-.019 0-.037-.002-.056-.005-.015-.002-.049-.009-.064-.014-.191-.054-.302-.254-.247-.444.054-.191.252-.304.445-.247.196.029.319.211.289.407-.028.178-.191.303-.367.303zm5.799-1.063c-.122 0-.241-.062-.309-.175-.103-.171-.047-.392.123-.494.166-.102.393-.055.498.11.104.166.066.379-.097.487-.004.003-.025.017-.03.02-.058.035-.121.052-.185.052zm2.752-2.898c-.069 0-.139-.02-.199-.061-.166-.11-.211-.334-.101-.499.089-.18.303-.237.477-.151.178.09.244.316.155.494-.007.014-.024.044-.032.056-.069.105-.184.161-.3.161zm1.007-3.868c-.199 0-.36-.161-.36-.36s.161-.37.36-.37.36.151.36.35v.02c0 .199-.161.36-.36.36z"),c(n,"d","m0 0h32v32h-32z"),c(n,"fill","none"),c(e,"focusable","false"),c(e,"preserveAspectRatio","xMidYMid meet"),_(e,"will-change","transform"),_(e,"width","95%"),_(e,"height","95%"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","bx--btn__icon"),c(e,"viewBox","0 0 31 31"),c(e,"aria-hidden","true")},m(s,a){p(s,t,a),S(t,o),p(s,r,a),p(s,e,a),S(e,l),S(e,n)},p:H,d(s){s&&f(t),s&&f(r),s&&f(e)}}}function G1(i){let t,o,r,e;return t=new L({props:{style:"margin-left:0px",class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[B1]},$$scope:{ctx:i}}}),r=new L({props:{style:"margin-left:0px",class:"bx--btn bx--btn--secondary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center bx--btn--sm icon",$$slots:{default:[M1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=E(),v(r.$$.fragment)},l(l){x(t.$$.fragment,l),o=A(l),x(r.$$.fragment,l)},m(l,n){w(t,l,n),p(l,o,n),w(r,l,n),e=!0},p(l,n){const s={};n&8&&(s.$$scope={dirty:n,ctx:l}),t.$set(s);const a={};n&8&&(a.$$scope={dirty:n,ctx:l}),r.$set(a)},i(l){e||(g(t.$$.fragment,l),g(r.$$.fragment,l),e=!0)},o(l){d(t.$$.fragment,l),d(r.$$.fragment,l),e=!1},d(l){z(t,l),l&&f(o),z(r,l)}}}function N1(i){let t,o,r,e,l,n;return t=new P({props:{$$slots:{default:[E1]},$$scope:{ctx:i}}}),r=new P({props:{$$slots:{default:[y1]},$$scope:{ctx:i}}}),l=new P({props:{style:"flex-grow:0!important;",$$slots:{default:[G1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=G(`
      \u2226

`),v(r.$$.fragment),e=E(),v(l.$$.fragment)},l(s){x(t.$$.fragment,s),o=N(s,`
      \u2226

`),x(r.$$.fragment,s),e=A(s),x(l.$$.fragment,s)},m(s,a){w(t,s,a),p(s,o,a),w(r,s,a),p(s,e,a),w(l,s,a),n=!0},p(s,a){const m={};a&8&&(m.$$scope={dirty:a,ctx:s}),t.$set(m);const h={};a&9&&(h.$$scope={dirty:a,ctx:s}),r.$set(h);const u={};a&8&&(u.$$scope={dirty:a,ctx:s}),l.$set(u)},i(s){n||(g(t.$$.fragment,s),g(r.$$.fragment,s),g(l.$$.fragment,s),n=!0)},o(s){d(t.$$.fragment,s),d(r.$$.fragment,s),d(l.$$.fragment,s),n=!1},d(s){z(t,s),s&&f(o),z(r,s),s&&f(e),z(l,s)}}}function P1(i){let t;return{c(){t=G("Draw Tools")},l(o){t=N(o,"Draw Tools")},m(o,r){p(o,t,r)},d(o){o&&f(t)}}}function L1(i){let t;return{c(){t=G("Edit Selection")},l(o){t=N(o,"Edit Selection")},m(o,r){p(o,t,r)},d(o){o&&f(t)}}}function H1(i){let t;return{c(){t=G("Build / Load")},l(o){t=N(o,"Build / Load")},m(o,r){p(o,t,r)},d(o){o&&f(t)}}}function Y1(i){let t,o,r,e,l,n,s,a,m,h;return t=new P({props:{$$slots:{default:[P1]},$$scope:{ctx:i}}}),r=new P({}),l=new P({props:{$$slots:{default:[L1]},$$scope:{ctx:i}}}),s=new P({}),m=new P({props:{$$slots:{default:[H1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=E(),v(r.$$.fragment),e=E(),v(l.$$.fragment),n=E(),v(s.$$.fragment),a=E(),v(m.$$.fragment)},l(u){x(t.$$.fragment,u),o=A(u),x(r.$$.fragment,u),e=A(u),x(l.$$.fragment,u),n=A(u),x(s.$$.fragment,u),a=A(u),x(m.$$.fragment,u)},m(u,b){w(t,u,b),p(u,o,b),w(r,u,b),p(u,e,b),w(l,u,b),p(u,n,b),w(s,u,b),p(u,a,b),w(m,u,b),h=!0},p(u,b){const Y={};b&8&&(Y.$$scope={dirty:b,ctx:u}),t.$set(Y);const C={};b&8&&(C.$$scope={dirty:b,ctx:u}),l.$set(C);const D={};b&8&&(D.$$scope={dirty:b,ctx:u}),m.$set(D)},i(u){h||(g(t.$$.fragment,u),g(r.$$.fragment,u),g(l.$$.fragment,u),g(s.$$.fragment,u),g(m.$$.fragment,u),h=!0)},o(u){d(t.$$.fragment,u),d(r.$$.fragment,u),d(l.$$.fragment,u),d(s.$$.fragment,u),d(m.$$.fragment,u),h=!1},d(u){z(t,u),u&&f(o),z(r,u),u&&f(e),z(l,u),u&&f(n),z(s,u),u&&f(a),z(m,u)}}}function C1(i){let t,o,r,e,l,n;return t=new I({props:{id:"head1",$$slots:{default:[v1]},$$scope:{ctx:i}}}),r=new I({props:{id:"head2",$$slots:{default:[N1]},$$scope:{ctx:i}}}),l=new I({props:{style:"float:inline-right",$$slots:{default:[Y1]},$$scope:{ctx:i}}}),{c(){v(t.$$.fragment),o=E(),v(r.$$.fragment),e=E(),v(l.$$.fragment)},l(s){x(t.$$.fragment,s),o=A(s),x(r.$$.fragment,s),e=A(s),x(l.$$.fragment,s)},m(s,a){w(t,s,a),p(s,o,a),w(r,s,a),p(s,e,a),w(l,s,a),n=!0},p(s,a){const m={};a&8&&(m.$$scope={dirty:a,ctx:s}),t.$set(m);const h={};a&9&&(h.$$scope={dirty:a,ctx:s}),r.$set(h);const u={};a&8&&(u.$$scope={dirty:a,ctx:s}),l.$set(u)},i(s){n||(g(t.$$.fragment,s),g(r.$$.fragment,s),g(l.$$.fragment,s),n=!0)},o(s){d(t.$$.fragment,s),d(r.$$.fragment,s),d(l.$$.fragment,s),n=!1},d(s){z(t,s),s&&f(o),z(r,s),s&&f(e),z(l,s)}}}function D1(i){let t,o,r,e,l;r=new g1({props:{$$slots:{default:[C1]},$$scope:{ctx:i}}});const n=i[1].default,s=O(n,i,i[3],null);return{c(){t=B("main"),o=B("header"),v(r.$$.fragment),e=E(),s&&s.c(),this.h()},l(a){t=M(a,"MAIN",{class:!0});var m=$(t);o=M(m,"HEADER",{class:!0});var h=$(o);x(r.$$.fragment,h),h.forEach(f),e=A(m),s&&s.l(m),m.forEach(f),this.h()},h(){c(o,"class","svelte-1mbzvnp"),c(t,"class","w-screen min-h-screen flex flex-col")},m(a,m){p(a,t,m),S(t,o),w(r,o,null),S(t,e),s&&s.m(t,null),l=!0},p(a,[m]){const h={};m&9&&(h.$$scope={dirty:m,ctx:a}),r.$set(h),s&&s.p&&(!l||m&8)&&T(s,n,a,a[3],l?V(n,a[3],m,null):U(a[3]),null)},i(a){l||(g(r.$$.fragment,a),g(s,a),l=!0)},o(a){d(r.$$.fragment,a),d(s,a),l=!1},d(a){a&&f(t),z(r),s&&s.d(a)}}}function W1(i,t,o){let{$$slots:r={},$$scope:e}=t,l=!0;const n=()=>{o(0,l=!l)};return i.$$set=s=>{"$$scope"in s&&o(3,e=s.$$scope)},[l,r,n,e]}class J1 extends t1{constructor(t){super(),e1(this,t,W1,D1,s1,{})}}export{J1 as default};
