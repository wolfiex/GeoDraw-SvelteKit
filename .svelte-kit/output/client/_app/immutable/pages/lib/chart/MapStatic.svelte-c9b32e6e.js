import{S as N,i as V,s as A,L as y,M,a as k,d as v,a9 as P,b as n,g as j,e as F,l as S,c as J,aa as K,G as z,ab as Q,E as W,a0 as R}from"../../../chunks/index-319e1e25.js";import{t as T,g as U,a as X}from"../../../chunks/tile-71b8674d.js";function B(l,e,i){const t=l.slice();return t[15]=e[i],t}function C(l){let e,i,t,a,h,g;return{c(){e=y("image"),this.h()},l(f){e=M(f,"image",{"xlink:href":!0,x:!0,y:!0,width:!0,height:!0,filter:!0}),k(e).forEach(v),this.h()},h(){P(e,"xlink:href",i=l[9](l[15].x,l[15].y,l[15].z)),n(e,"x",t=Math.round((l[15].x+l[15].tx)*l[15].k)),n(e,"y",a=Math.round((l[15].y+l[15].ty)*l[15].k)),n(e,"width",h=l[15].k),n(e,"height",g=l[15].k),n(e,"filter","url(#desaturate)")},m(f,o){j(f,e,o)},p(f,o){o&256&&i!==(i=f[9](f[15].x,f[15].y,f[15].z))&&P(e,"xlink:href",i),o&256&&t!==(t=Math.round((f[15].x+f[15].tx)*f[15].k))&&n(e,"x",t),o&256&&a!==(a=Math.round((f[15].y+f[15].ty)*f[15].k))&&n(e,"y",a),o&256&&h!==(h=f[15].k)&&n(e,"width",h),o&256&&g!==(g=f[15].k)&&n(e,"height",g)},d(f){f&&v(e)}}}function I(l){let e,i,t=l[3]&&O(l);return{c(){t&&t.c(),e=y("path"),this.h()},l(a){t&&t.l(a),e=M(a,"path",{fill:!0,stroke:!0,"stroke-width":!0,d:!0}),k(e).forEach(v),this.h()},h(){n(e,"fill","none"),n(e,"stroke",l[1]),n(e,"stroke-width",l[2]),n(e,"d",i=l[7](l[0]))},m(a,h){t&&t.m(a,h),j(a,e,h)},p(a,h){a[3]?t?t.p(a,h):(t=O(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),h&2&&n(e,"stroke",a[1]),h&4&&n(e,"stroke-width",a[2]),h&129&&i!==(i=a[7](a[0]))&&n(e,"d",i)},d(a){t&&t.d(a),a&&v(e)}}}function O(l){let e,i;return{c(){e=y("path"),this.h()},l(t){e=M(t,"path",{fill:!0,stroke:!0,opacity:!0,d:!0}),k(e).forEach(v),this.h()},h(){n(e,"fill",l[1]),n(e,"stroke","none"),n(e,"opacity",l[3]),n(e,"d",i=l[7](l[0]))},m(t,a){j(t,e,a)},p(t,a){a&2&&n(e,"fill",t[1]),a&8&&n(e,"opacity",t[3]),a&129&&i!==(i=t[7](t[0]))&&n(e,"d",i)},d(t){t&&v(e)}}}function Y(l){let e,i,t,a,h,g,f,o=l[8]().map(q),u=[];for(let r=0;r<o.length;r+=1)u[r]=C(B(l,o,r));let _=l[0]&&I(l);return{c(){e=F("div"),i=y("svg"),t=y("filter"),a=y("feColorMatrix");for(let r=0;r<u.length;r+=1)u[r].c();h=S(),_&&_.c(),this.h()},l(r){e=J(r,"DIV",{class:!0});var c=k(e);i=M(c,"svg",{viewBox:!0,class:!0});var s=k(i);t=M(s,"filter",{id:!0});var m=k(t);a=M(m,"feColorMatrix",{type:!0,values:!0}),k(a).forEach(v),m.forEach(v);for(let b=0;b<u.length;b+=1)u[b].l(s);h=S(),_&&_.l(s),s.forEach(v),c.forEach(v),this.h()},h(){n(a,"type","saturate"),n(a,"values",l[4]),n(t,"id","desaturate"),n(i,"viewBox",g="0 0 "+l[5]+" "+l[6]),n(i,"class","svelte-am2o7f"),n(e,"class","svg-container svelte-am2o7f"),K(()=>l[13].call(e))},m(r,c){j(r,e,c),z(e,i),z(i,t),z(t,a);for(let s=0;s<u.length;s+=1)u[s].m(i,null);z(i,h),_&&_.m(i,null),f=Q(e,l[13].bind(e))},p(r,[c]){if(c&16&&n(a,"values",r[4]),c&768){o=r[8]().map(q);let s;for(s=0;s<o.length;s+=1){const m=B(r,o,s);u[s]?u[s].p(m,c):(u[s]=C(m),u[s].c(),u[s].m(i,h))}for(;s<u.length;s+=1)u[s].d(1);u.length=o.length}r[0]?_?_.p(r,c):(_=I(r),_.c(),_.m(i,null)):_&&(_.d(1),_=null),c&96&&g!==(g="0 0 "+r[5]+" "+r[6])&&n(i,"viewBox",g)},i:W,o:W,d(r){r&&v(e),R(u,r),_&&_.d(),f()}}}const q=([l,e,i],t,{translate:[a,h],scale:g})=>({x:l,y:e,z:i,tx:a,ty:h,k:g});function Z(l,e,i){let t,a,h,g,{geojson:f=null}=e,{bounds:o=[[-9,49],[2,61]]}=e,{color:u="#206095"}=e,{lineWidth:_=2.5}=e,{fillOpacity:r=.1}=e,{saturation:c=.3}=e,s=400,m=400;const b=(d,w,E)=>`http://b.tile.openstreetmap.fr/hot/${E}/${d}/${w}.png`;function D(d,w,E){const p=X().fitSize([d,w],E),H=Math.floor(Math.log2(p.scale()*(2*Math.PI))),L=Math.pow(2,H)/(2*Math.PI);return p.center(p.invert([d/2,w/2])),p.scale(L),p.translate([d/2,w/2]),p}function G(){s=this.clientWidth,m=this.clientHeight,i(5,s),i(6,m)}return l.$$set=d=>{"geojson"in d&&i(0,f=d.geojson),"bounds"in d&&i(10,o=d.bounds),"color"in d&&i(1,u=d.color),"lineWidth"in d&&i(2,_=d.lineWidth),"fillOpacity"in d&&i(3,r=d.fillOpacity),"saturation"in d&&i(4,c=d.saturation)},l.$$.update=()=>{l.$$.dirty&1025&&i(12,t=f||{type:"Polygon",coordinates:[[[o[0][0],o[0][1]],[o[0][0],o[1][1]],[o[1][0],o[1][1]],[o[1][0],o[0][1]],[o[0][0],o[0][1]]]]}),l.$$.dirty&4192&&i(11,a=D(s,m,t)),l.$$.dirty&2144&&i(8,h=T().size([s,m]).scale(a.scale()*2*Math.PI).translate(a([0,0])).tileSize(256)),l.$$.dirty&2048&&i(7,g=U(a))},[f,u,_,r,c,s,m,g,h,b,o,a,t,G]}class ee extends N{constructor(e){super(),V(this,e,Z,Y,A,{geojson:0,bounds:10,color:1,lineWidth:2,fillOpacity:3,saturation:4})}}export{ee as default};