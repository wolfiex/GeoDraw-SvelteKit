import{S as t,i as e,s,U as a,j as n,m as o,o as r,v as $,r as l,w as c,V as i,D as u,k as f,n as m,f as p,F as d,d as g,W as h,e as x,t as w,c as b,a as v,g as k,E as y,h as C}from"../../../chunks/vendor-4d3c3715.js";function P(t){let e,s,a,i,u;return i=new h({props:{closeButtonLabelText:"Clear search input",defaultValue:"A default value",autocomplete:"on",id:"search-1",labelText:"Search Postcode or Name",onChange:z,onKeyDown:D,size:"lg"}}),{c(){e=x("p"),s=w(t[1]),a=f(),n(i.$$.fragment)},l(n){e=b(n,"P",{});var r=v(e);s=k(r,t[1]),r.forEach(g),a=m(n),o(i.$$.fragment,n)},m(t,n){p(t,e,n),y(e,s),p(t,a,n),r(i,t,n),u=!0},p(t,e){(!u||2&e)&&C(s,t[1])},i(t){u||($(i.$$.fragment,t),u=!0)},o(t){l(i.$$.fragment,t),u=!1},d(t){t&&g(e),t&&g(a),c(i,t)}}}function T(t){let e,s,a;e=new i({props:{title:t[0],$$slots:{default:[P]},$$scope:{ctx:t}}});const h=t[2].default,x=u(h,t,t[3],null);return{c(){n(e.$$.fragment),s=f(),x&&x.c()},l(t){o(e.$$.fragment,t),s=m(t),x&&x.l(t)},m(t,n){r(e,t,n),p(t,s,n),x&&x.m(t,n),a=!0},p(t,s){const n={};1&s&&(n.title=t[0]),10&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n),x&&x.p&&(!a||8&s)&&d(x,h,t,t[3],s,null,null)},i(t){a||($(e.$$.fragment,t),$(x,t),a=!0)},o(t){l(e.$$.fragment,t),l(x,t),a=!1},d(t){c(e,t),t&&g(s),x&&x.d(t)}}}function j(t){let e,s;return e=new a({props:{class:"info",$$slots:{default:[T]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){r(e,t,a),s=!0},p(t,[s]){const a={};11&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}const z=function(t){return[1,2,3]},D=function(t){return[1,2,3]};function E(t,e,s){let{$$slots:a={},$$scope:n}=e,{title:o="Custom Profile (Info)"}=e,{text:r="Welcome to the custom drawing tool. \n To begin drawing, click on the map and zoom in, or use the search bar below to locate area of interest. "}=e;return t.$$set=t=>{"title"in t&&s(0,o=t.title),"text"in t&&s(1,r=t.text),"$$scope"in t&&s(3,n=t.$$scope)},[o,r,a,n]}export default class extends t{constructor(t){super(),e(this,t,E,j,s,{title:0,text:1})}}