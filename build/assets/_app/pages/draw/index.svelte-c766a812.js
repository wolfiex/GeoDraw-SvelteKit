import{S as e,i as t,s as r,G as s,e as n,j as a,k as o,c as l,a as c,m as $,d as i,n as f,b as m,f as p,E as g,o as u,v as d,r as h,w as v,M as w,z as b,R as x,N as y,l as z,B as k,u as S,O as A,P as E,H as B,I as P,Q as j,T as M,L as T,t as C,g as D,U as N,V as L,h as O}from"../../chunks/vendor-718580ba.js";/* empty css                       */import R from"./Toolbar/DrawButtons.svelte-46cc93ae.js";import I from"./Toolbar/EditButtons.svelte-f9c48a9e.js";import U from"./Toolbar/ProgressButtons.svelte-0ba6bc3e.js";import H from"./Toolbar/InfoBox.svelte-3efea2c1.js";import _ from"./Toolbar/PostcodeSearch.svelte-86de8a69.js";import G from"./Toolbar/ItemAccordion.svelte-9a0c73ad.js";import{A as V,s as q}from"../../chunks/AreaMap-1372633a.js";import{r as Q,m as Z,a as F,b as J,s as K,c as W,d as X,e as Y,q as ee}from"../../chunks/mapstore-48813ed6.js";function te(e){let t,r;return{c(){t=n("img"),this.h()},l(e){t=l(e,"IMG",{style:!0,class:!0,src:!0,alt:!0}),this.h()},h(){P(t,"margin-left","10px"),P(t,"margin-top","4px"),m(t,"class","logo svelte-10r4fzz"),t.src!==(r="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg")&&m(t,"src","https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg"),m(t,"alt","Office for National Statistics logo - Homepage")},m(e,r){p(e,t,r)},d(e){e&&i(t)}}}function re(e){let t;return{c(){t=C("Draw Area")},l(e){t=D(e,"Draw Area")},m(e,r){p(e,t,r)},d(e){e&&i(t)}}}function se(e){let t;return{c(){t=C("Save + Load Area")},l(e){t=D(e,"Save + Load Area")},m(e,r){p(e,t,r)},d(e){e&&i(t)}}}function ne(e){let t;return{c(){t=C("Build Profile")},l(e){t=D(e,"Build Profile")},m(e,r){p(e,t,r)},d(e){e&&i(t)}}}function ae(e){let t,r,s,n,l,c;return t=new L({props:{href:"/draw",$$slots:{default:[re]},$$scope:{ctx:e}}}),s=new L({props:{href:"/",$$slots:{default:[se]},$$scope:{ctx:e}}}),l=new L({props:{href:"/",$$slots:{default:[ne]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),r=o(),a(s.$$.fragment),n=o(),a(l.$$.fragment)},l(e){$(t.$$.fragment,e),r=f(e),$(s.$$.fragment,e),n=f(e),$(l.$$.fragment,e)},m(e,a){u(t,e,a),p(e,r,a),u(s,e,a),p(e,n,a),u(l,e,a),c=!0},p(e,r){const n={};32768&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n);const a={};32768&r&&(a.$$scope={dirty:r,ctx:e}),s.$set(a);const o={};32768&r&&(o.$$scope={dirty:r,ctx:e}),l.$set(o)},i(e){c||(d(t.$$.fragment,e),d(s.$$.fragment,e),d(l.$$.fragment,e),c=!0)},o(e){h(t.$$.fragment,e),h(s.$$.fragment,e),h(l.$$.fragment,e),c=!1},d(e){v(t,e),e&&i(r),v(s,e),e&&i(n),v(l,e)}}}function oe(e){let t,r;return t=new j({props:{$$slots:{default:[ae]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function le(e){let t,r,s,n;return t=new B({props:{$$slots:{default:[te]},$$scope:{ctx:e}}}),s=new B({props:{style:"float:right;margin-right:2px",$$slots:{default:[oe]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),r=o(),a(s.$$.fragment)},l(e){$(t.$$.fragment,e),r=f(e),$(s.$$.fragment,e)},m(e,a){u(t,e,a),p(e,r,a),u(s,e,a),n=!0},p(e,r){const n={};32768&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n);const a={};32768&r&&(a.$$scope={dirty:r,ctx:e}),s.$set(a)},i(e){n||(d(t.$$.fragment,e),d(s.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),h(s.$$.fragment,e),n=!1},d(e){v(t,e),e&&i(r),v(s,e)}}}function ce(e){let t,r,s;return t=new R({}),{c(){a(t.$$.fragment),r=o()},l(e){$(t.$$.fragment,e),r=f(e)},m(e,n){u(t,e,n),p(e,r,n),s=!0},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){v(t,e),e&&i(r)}}}function $e(e){let t,r,s;return t=new I({}),{c(){a(t.$$.fragment),r=o()},l(e){$(t.$$.fragment,e),r=f(e)},m(e,n){u(t,e,n),p(e,r,n),s=!0},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){v(t,e),e&&i(r)}}}function ie(e){let t,r,s,n;return t=new _({}),s=new U({}),{c(){a(t.$$.fragment),r=o(),a(s.$$.fragment)},l(e){$(t.$$.fragment,e),r=f(e),$(s.$$.fragment,e)},m(e,a){u(t,e,a),p(e,r,a),u(s,e,a),n=!0},i(e){n||(d(t.$$.fragment,e),d(s.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),h(s.$$.fragment,e),n=!1},d(e){v(t,e),e&&i(r),v(s,e)}}}function fe(e){let t,r,s,n;return t=new B({props:{$$slots:{default:[ce]},$$scope:{ctx:e}}}),r=new B({props:{$$slots:{default:[$e]},$$scope:{ctx:e}}}),s=new B({props:{$$slots:{default:[ie]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),a(r.$$.fragment),a(s.$$.fragment)},l(e){$(t.$$.fragment,e),$(r.$$.fragment,e),$(s.$$.fragment,e)},m(e,a){u(t,e,a),u(r,e,a),u(s,e,a),n=!0},p(e,n){const a={};32768&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const o={};32768&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o);const l={};32768&n&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){n||(d(t.$$.fragment,e),d(r.$$.fragment,e),d(s.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),h(r.$$.fragment,e),h(s.$$.fragment,e),n=!1},d(e){v(t,e),v(r,e),v(s,e)}}}function me(e){let t,r,s,n,l,c;return t=new x({props:{id:"head1",$$slots:{default:[le]},$$scope:{ctx:e}}}),s=new x({props:{style:"background-color:#13518d;height:calc(.085*var(--header-1-height));margin-bottom:0px;"}}),l=new x({props:{id:"head2",$$slots:{default:[fe]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),r=o(),a(s.$$.fragment),n=o(),a(l.$$.fragment)},l(e){$(t.$$.fragment,e),r=f(e),$(s.$$.fragment,e),n=f(e),$(l.$$.fragment,e)},m(e,a){u(t,e,a),p(e,r,a),u(s,e,a),p(e,n,a),u(l,e,a),c=!0},p(e,r){const s={};32768&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s);const n={};32768&r&&(n.$$scope={dirty:r,ctx:e}),l.$set(n)},i(e){c||(d(t.$$.fragment,e),d(s.$$.fragment,e),d(l.$$.fragment,e),c=!0)},o(e){h(t.$$.fragment,e),h(s.$$.fragment,e),h(l.$$.fragment,e),c=!1},d(e){v(t,e),e&&i(r),v(s,e),e&&i(n),v(l,e)}}}function pe(e){let t,r;return t=new G({props:{title:"Draw Area",subtitle:"Polygon Selection",$$slots:{default:[he]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ge(e){let t,r;return t=new G({props:{title:"Draw Area",subtitle:"Click Selection",$$slots:{default:[ve]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};32768&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ue(e){let t,r;return t=new G({props:{title:"Draw Area",subtitle:"Distance Selection Tool",$$slots:{default:[we]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};32776&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function de(e){let t,r;return t=new M({props:{style:"width:100%",hideCloseButton:!0,kind:"warning",title:"Zoom in to begin drawing. ",subtitle:"The map needs to be at least on zoom level 9 to begin drawing. ",caption:""}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p:T,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function he(e){let t,r;return{c(){t=n("p"),r=C("Click on each corner of the shape you want to build, and then back\n            onto the first vertex to select."),this.h()},l(e){t=l(e,"P",{class:!0});var s=c(t);r=D(s,"Click on each corner of the shape you want to build, and then back\n            onto the first vertex to select."),s.forEach(i),this.h()},h(){m(t,"class","svelte-10r4fzz")},m(e,s){p(e,t,s),g(t,r)},d(e){e&&i(t)}}}function ve(e){let t,r;return{c(){t=n("p"),r=C("Click on any areas you are interested in."),this.h()},l(e){t=l(e,"P",{class:!0});var s=c(t);r=D(s,"Click on any areas you are interested in."),s.forEach(i),this.h()},h(){m(t,"class","svelte-10r4fzz")},m(e,s){p(e,t,s),g(t,r)},d(e){e&&i(t)}}}function we(e){let t,r,s,w,b,x,y;return t=new N({props:{ariaLabelInput:"Radius Selection (km)",id:"slider",labelText:"Radius Selection (km)",max:30,min:.2,step:.2,stepMuliplier:4,value:5}}),t.$on("change",e[7]),{c(){a(t.$$.fragment),r=o(),s=n("p"),w=C("Move the slider below to select the radius you are interested in,\n            and then click to select an area."),b=o(),x=n("br"),this.h()},l(e){$(t.$$.fragment,e),r=f(e),s=l(e,"P",{class:!0});var n=c(s);w=D(n,"Move the slider below to select the radius you are interested in,\n            and then click to select an area."),n.forEach(i),b=f(e),x=l(e,"BR",{class:!0}),this.h()},h(){m(s,"class","svelte-10r4fzz"),m(x,"class","svelte-10r4fzz")},m(e,n){u(t,e,n),p(e,r,n),p(e,s,n),g(s,w),p(e,b,n),p(e,x,n),y=!0},p:T,i(e){y||(d(t.$$.fragment,e),y=!0)},o(e){h(t.$$.fragment,e),y=!1},d(e){v(t,e),e&&i(r),e&&i(s),e&&i(b),e&&i(x)}}}function be(e){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function xe(e){let t,r,s,n;const a=[ze,ye],o=[];function l(e,t){return null!=e[14].error?0:e[14].oa?1:-1}return~(t=l(e))&&(r=o[t]=a[t](e)),{c(){r&&r.c(),s=z()},l(e){r&&r.l(e),s=z()},m(e,r){~t&&o[t].m(e,r),p(e,s,r),n=!0},p(e,n){let c=t;t=l(e),t===c?~t&&o[t].p(e,n):(r&&(k(),h(o[c],1,1,(()=>{o[c]=null})),S()),~t?(r=o[t],r?r.p(e,n):(r=o[t]=a[t](e),r.c()),d(r,1),r.m(s.parentNode,s)):r=null)},i(e){n||(d(r),n=!0)},o(e){h(r),n=!1},d(e){~t&&o[t].d(e),e&&i(s)}}}function ye(e){let t,r;return t=new G({props:{title:"",subtitle:"Compressed Selection",$$slots:{default:[ke]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};32784&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ze(e){let t,r;return t=new M({props:{style:"width:100%",hideCloseButton:!0,kind:"error",subtitle:e[14].error_title,caption:e[14].error}}),{c(){a(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,s){u(t,e,s),r=!0},p(e,r){const s={};16&r&&(s.subtitle=e[14].error_title),16&r&&(s.caption=e[14].error),t.$set(s)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){v(t,e)}}}function ke(e){let t,r,s,a,$,u,d,h,v,w,b,x,y,z,k,S,A,E,B,P,j,M,T,N,L,R,I,U,H=e[14].msoa.length+"",_=e[14].lsoa.length+"",G=e[14].oa.length+"",V=e[14].tile+"",q=e[14].original+"";return{c(){t=n("small"),r=n("b"),s=C("MSOA:"),a=o(),$=n("span"),u=C(H),d=o(),h=n("br"),v=o(),w=n("b"),b=C("LSOA:"),x=o(),y=n("span"),z=C(_),k=o(),S=n("br"),A=o(),E=n("b"),B=C("OA:"),P=o(),j=n("span"),M=C(G),T=o(),N=n("br"),L=C("\n              parent tile: "),R=C(V),I=C("; # original output areas "),U=C(q),this.h()},l(e){t=l(e,"SMALL",{class:!0});var n=c(t);r=l(n,"B",{class:!0});var o=c(r);s=D(o,"MSOA:"),o.forEach(i),a=f(n),$=l(n,"SPAN",{class:!0});var m=c($);u=D(m,H),m.forEach(i),d=f(n),h=l(n,"BR",{class:!0}),v=f(n),w=l(n,"B",{class:!0});var p=c(w);b=D(p,"LSOA:"),p.forEach(i),x=f(n),y=l(n,"SPAN",{class:!0});var g=c(y);z=D(g,_),g.forEach(i),k=f(n),S=l(n,"BR",{class:!0}),A=f(n),E=l(n,"B",{class:!0});var C=c(E);B=D(C,"OA:"),C.forEach(i),P=f(n),j=l(n,"SPAN",{class:!0});var O=c(j);M=D(O,G),O.forEach(i),T=f(n),N=l(n,"BR",{class:!0}),L=D(n,"\n              parent tile: "),R=D(n,V),I=D(n,"; # original output areas "),U=D(n,q),n.forEach(i),this.h()},h(){m(r,"class","svelte-10r4fzz"),m($,"class","svelte-10r4fzz"),m(h,"class","svelte-10r4fzz"),m(w,"class","svelte-10r4fzz"),m(y,"class","svelte-10r4fzz"),m(S,"class","svelte-10r4fzz"),m(E,"class","svelte-10r4fzz"),m(j,"class","svelte-10r4fzz"),m(N,"class","svelte-10r4fzz"),m(t,"class","svelte-10r4fzz")},m(e,n){p(e,t,n),g(t,r),g(r,s),g(t,a),g(t,$),g($,u),g(t,d),g(t,h),g(t,v),g(t,w),g(w,b),g(t,x),g(t,y),g(y,z),g(t,k),g(t,S),g(t,A),g(t,E),g(E,B),g(t,P),g(t,j),g(j,M),g(t,T),g(t,N),g(t,L),g(t,R),g(t,I),g(t,U)},p(e,t){16&t&&H!==(H=e[14].msoa.length+"")&&O(u,H),16&t&&_!==(_=e[14].lsoa.length+"")&&O(z,_),16&t&&G!==(G=e[14].oa.length+"")&&O(M,G),16&t&&V!==(V=e[14].tile+"")&&O(R,V),16&t&&q!==(q=e[14].original+"")&&O(U,q)},d(e){e&&i(t)}}}function Se(e){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function Ae(e){let t,r,s,n,a,l;const c=[de,ue,ge,pe],$=[];function m(e,t){return e[1]?0:"radius"===e[2]?1:"click"===e[2]?2:"poly"===e[2]?3:-1}~(t=m(e))&&(r=$[t]=c[t](e));let g={ctx:e,current:null,token:null,hasCatch:!1,pending:Se,then:xe,catch:be,value:14,blocks:[,,,]};return y(a=e[4],g),{c(){r&&r.c(),s=o(),n=z(),g.block.c()},l(e){r&&r.l(e),s=f(e),n=z(),g.block.l(e)},m(e,r){~t&&$[t].m(e,r),p(e,s,r),p(e,n,r),g.block.m(e,g.anchor=r),g.mount=()=>n.parentNode,g.anchor=n,l=!0},p(n,o){let l=t;t=m(e=n),t===l?~t&&$[t].p(e,o):(r&&(k(),h($[l],1,1,(()=>{$[l]=null})),S()),~t?(r=$[t],r?r.p(e,o):(r=$[t]=c[t](e),r.c()),d(r,1),r.m(s.parentNode,s)):r=null),g.ctx=e,16&o&&a!==(a=e[4])&&y(a,g)||A(g,e,o)},i(e){l||(d(r),d(g.block),l=!0)},o(e){h(r);for(let t=0;t<3;t+=1){const e=g.blocks[t];h(e)}l=!1},d(e){~t&&$[t].d(e),e&&i(s),e&&i(n),g.block.d(e),g.token=null,g=null}}}function Ee(e){let t,r,w,b,x,y,z,k,S;return w=new V({props:{drawing_tools:!0}}),y=new s({props:{$$slots:{default:[me]},$$scope:{ctx:e}}}),k=new H({props:{open:e[0].length<2,$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){t=n("main"),r=n("div"),a(w.$$.fragment),b=o(),x=n("header"),a(y.$$.fragment),z=o(),a(k.$$.fragment),this.h()},l(e){t=l(e,"MAIN",{class:!0});var s=c(t);r=l(s,"DIV",{id:!0,class:!0});var n=c(r);$(w.$$.fragment,n),n.forEach(i),b=f(s),x=l(s,"HEADER",{class:!0});var a=c(x);$(y.$$.fragment,a),z=f(a),$(k.$$.fragment,a),a.forEach(i),s.forEach(i),this.h()},h(){m(r,"id","map"),m(r,"class","svelte-10r4fzz"),m(x,"class","svelte-10r4fzz"),m(t,"class","w-screen min-h-screen flex flex-col svelte-10r4fzz")},m(e,s){p(e,t,s),g(t,r),u(w,r,null),g(t,b),g(t,x),u(y,x,null),g(x,z),u(k,x,null),S=!0},p(e,[t]){const r={};32768&t&&(r.$$scope={dirty:t,ctx:e}),y.$set(r);const s={};1&t&&(s.open=e[0].length<2),32798&t&&(s.$$scope={dirty:t,ctx:e}),k.$set(s)},i(e){S||(d(w.$$.fragment,e),d(y.$$.fragment,e),d(k.$$.fragment,e),S=!0)},o(e){h(w.$$.fragment,e),h(y.$$.fragment,e),h(k.$$.fragment,e),S=!1},d(e){e&&i(t),v(w),v(y),v(k)}}}function Be(e,t,r){let s,n,a,o,l,c,$,i,f;w(e,Z,(e=>r(8,s=e))),w(e,F,(e=>r(9,n=e))),w(e,J,(e=>r(10,a=e))),w(e,K,(e=>r(0,o=e))),w(e,W,(e=>r(11,l=e))),w(e,X,(e=>r(1,c=e))),w(e,Y,(e=>r(2,$=e))),w(e,Q,(e=>r(3,i=e))),w(e,ee,(e=>r(4,f=e)));let{width:m="100%"}=t,{height:p="100%"}=t;b((async function(){function e(){ee.set(q());const e=o[o.length-1];console.warn("---recolour",...e.oa),l.setPaintProperty("bounds","fill-color",["match",["get","oa"],["literal",...e.oa],"orange","transparent"])}console.clear(),console.warn(undefined),console.log("---"+window.location.host.split(":")[0]+"---"),E(Z,s={area:{type:"vector",tiles:["http://localhost:7113/{z}/{x}/{y}.pbf"]}},s),console.warn("mapsource",s),E(F,n=[{id:"bounds",source:"area","source-layer":"geodraw",type:"fill",paint:{"fill-color":"transparent","fill-opacity":.7,"fill-outline-color":"steelblue"}},{id:"centroids",source:"area","source-layer":"centroids",type:"circle",paint:{"circle-radius":.6,"circle-color":"red","circle-opacity":.8}}],n),"SpeechSynthesisUtterance"in window&&(new SpeechSynthesisUtterance,console.error('speech tools enabled - "context menu". Use two finger click on mac trackpad to trigger')),E(J,a=[{event:"contextmenu",layer:"bounds",callback:e=>{}}],a),l.on("load",(()=>{K.subscribe(e)}))}));return e.$$set=e=>{"width"in e&&r(5,m=e.width),"height"in e&&r(6,p=e.height)},[o,c,$,i,f,m,p,function(e){console.log("slider value",e.detail),E(Q,i=e.detail,i)}]}export default class extends e{constructor(e){super(),t(this,e,Be,Ee,r,{width:5,height:6})}}