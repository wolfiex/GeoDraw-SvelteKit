import{S as ue,i as fe,s as he,e as k,k as C,c as w,a as E,m as V,d as _,b as g,f as de,g as N,H as p,a9 as H,R as I,V as K,Q as L,E as j,$ as be,t as P,h as A,j as D,l as q,U as W,Z as R}from"../../../chunks/index-7c3c6a44.js";function Q(t,e,l){const s=t.slice();return s[33]=e[l],s[36]=e,s[35]=l,s}function Z(t,e,l){const s=t.slice();return s[33]=e[l],s[34]=e,s[35]=l,s}function _e(t){let e,l,s=(t[0]?t[0]:"Select one")+"",o,i,n,f,h,u;return{c(){e=k("a"),l=k("span"),o=P(s),i=C(),n=k("span"),f=P("\xA0"),this.h()},l(r){e=w(r,"A",{id:!0,class:!0});var c=E(e);l=w(c,"SPAN",{class:!0});var d=E(l);o=A(d,s),d.forEach(_),i=V(c),n=w(c,"SPAN",{class:!0});var b=E(n);f=A(b,"\xA0"),b.forEach(_),c.forEach(_),this.h()},h(){g(l,"class","svelte-10s1oab"),g(n,"class","button svelte-10s1oab"),L(n,"search",t[3]),L(n,"down",!t[3]),g(e,"id","toggle"),g(e,"class","svelte-10s1oab")},m(r,c){N(r,e,c),p(e,l),p(l,o),p(e,i),p(e,n),p(n,f),h||(u=I(e,"click",t[12]),h=!0)},p(r,c){c[0]&1&&s!==(s=(r[0]?r[0]:"Select one")+"")&&D(o,s),c[0]&8&&L(n,"search",r[3]),c[0]&8&&L(n,"down",!r[3])},d(r){r&&_(e),h=!1,u()}}}function pe(t){let e,l,s=t[5][t[1]]+"",o,i,n,f,h,u,r,c=t[2]&&B(t);return{c(){e=k("a"),l=k("span"),o=P(s),i=C(),c&&c.c(),n=C(),f=k("span"),h=P("\xA0"),this.h()},l(d){e=w(d,"A",{id:!0,class:!0});var b=E(e);l=w(b,"SPAN",{class:!0});var y=E(l);o=A(y,s),i=V(y),c&&c.l(y),y.forEach(_),n=V(b),f=w(b,"SPAN",{class:!0});var S=E(f);h=A(S,"\xA0"),S.forEach(_),b.forEach(_),this.h()},h(){g(l,"class","selection svelte-10s1oab"),g(f,"class","button close svelte-10s1oab"),g(e,"id","toggle"),g(e,"class","selected svelte-10s1oab")},m(d,b){N(d,e,b),p(e,l),p(l,o),p(l,i),c&&c.m(l,null),p(e,n),p(e,f),p(f,h),u||(r=[I(f,"click",t[14]),I(e,"click",t[12])],u=!0)},p(d,b){b[0]&34&&s!==(s=d[5][d[1]]+"")&&D(o,s),d[2]?c?c.p(d,b):(c=B(d),c.c(),c.m(l,null)):c&&(c.d(1),c=null)},d(d){d&&_(e),c&&c.d(),u=!1,K(r)}}}function B(t){let e,l=t[5][t[2]]+"",s;return{c(){e=k("small"),s=P(l),this.h()},l(o){e=w(o,"SMALL",{class:!0});var i=E(e);s=A(i,l),i.forEach(_),this.h()},h(){g(e,"class","svelte-10s1oab")},m(o,i){N(o,e,i),p(e,s)},p(o,i){i[0]&36&&l!==(l=o[5][o[2]]+"")&&D(s,l)},d(o){o&&_(e)}}}function G(t){let e,l,s,o,i,n;function f(r,c){return r[4].length<3?ke:r[8][0]&&r[2]?me:r[8][0]?ve:ge}let h=f(t),u=h(t);return{c(){e=k("div"),l=k("input"),s=C(),o=k("ul"),u.c(),this.h()},l(r){e=w(r,"DIV",{id:!0,style:!0,class:!0});var c=E(e);l=w(c,"INPUT",{type:!0,placeholder:!0,autocomplete:!0,class:!0}),s=V(c),o=w(c,"UL",{class:!0});var d=E(o);u.l(d),d.forEach(_),c.forEach(_),this.h()},h(){g(l,"type","text"),g(l,"placeholder",""),g(l,"autocomplete","false"),g(l,"class","svelte-10s1oab"),g(o,"class","svelte-10s1oab"),g(e,"id","dropdown"),de(e,"top","0"),g(e,"class","svelte-10s1oab")},m(r,c){N(r,e,c),p(e,l),H(l,t[4]),t[24](l),p(e,s),p(e,o),u.m(o,null),t[31](e),i||(n=[I(l,"input",t[23]),I(l,"keyup",t[16])],i=!0)},p(r,c){c[0]&16&&l.value!==r[4]&&H(l,r[4]),h===(h=f(r))&&u?u.p(r,c):(u.d(1),u=h(r),u&&(u.c(),u.m(o,null)))},d(r){r&&_(e),t[24](null),u.d(),t[31](null),i=!1,K(n)}}}function ge(t){let e,l;return{c(){e=k("li"),l=P("No results"),this.h()},l(s){e=w(s,"LI",{class:!0});var o=E(e);l=A(o,"No results"),o.forEach(_),this.h()},h(){g(e,"class","svelte-10s1oab")},m(s,o){N(s,e,o),p(e,l)},p:j,d(s){s&&_(e)}}}function ve(t){let e,l=t[8],s=[];for(let o=0;o<l.length;o+=1)s[o]=J(Q(t,l,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=q()},l(o){for(let i=0;i<s.length;i+=1)s[i].l(o);e=q()},m(o,i){for(let n=0;n<s.length;n+=1)s[n].m(o,i);N(o,e,i)},p(o,i){if(i[0]&10626){l=o[8];let n;for(n=0;n<l.length;n+=1){const f=Q(o,l,n);s[n]?s[n].p(f,i):(s[n]=J(f),s[n].c(),s[n].m(e.parentNode,e))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}},d(o){W(s,o),o&&_(e)}}}function me(t){let e,l=t[8],s=[];for(let o=0;o<l.length;o+=1)s[o]=O(Z(t,l,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=q()},l(o){for(let i=0;i<s.length;i+=1)s[i].l(o);e=q()},m(o,i){for(let n=0;n<s.length;n+=1)s[n].m(o,i);N(o,e,i)},p(o,i){if(i[0]&10630){l=o[8];let n;for(n=0;n<l.length;n+=1){const f=Z(o,l,n);s[n]?s[n].p(f,i):(s[n]=O(f),s[n].c(),s[n].m(e.parentNode,e))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}},d(o){W(s,o),o&&_(e)}}}function ke(t){let e,l;return{c(){e=k("li"),l=P("Type a name..."),this.h()},l(s){e=w(s,"LI",{class:!0});var o=E(e);l=A(o,"Type a name..."),o.forEach(_),this.h()},h(){g(e,"class","svelte-10s1oab")},m(s,o){N(s,e,o),p(e,l)},p:j,d(s){s&&_(e)}}}function J(t){let e,l=t[33][t[1]]+"",s,o,i=t[35],n,f;function h(){return t[28](t[33])}function u(){return t[29](t[35])}const r=()=>t[30](e,i),c=()=>t[30](null,i);return{c(){e=k("li"),s=P(l),o=C(),this.h()},l(d){e=w(d,"LI",{class:!0});var b=E(e);s=A(b,l),o=V(b),b.forEach(_),this.h()},h(){g(e,"class","svelte-10s1oab"),L(e,"highlight",t[7]==t[35])},m(d,b){N(d,e,b),p(e,s),p(e,o),r(),n||(f=[I(e,"click",h),I(e,"mouseover",u)],n=!0)},p(d,b){t=d,b[0]&258&&l!==(l=t[33][t[1]]+"")&&D(s,l),i!==t[35]&&(c(),i=t[35],r()),b[0]&128&&L(e,"highlight",t[7]==t[35])},d(d){d&&_(e),c(),n=!1,K(f)}}}function O(t){let e,l=t[33][t[1]]+"",s,o,i,n=t[33][t[2]]+"",f,h,u=t[35],r,c;function d(){return t[25](t[33])}function b(){return t[26](t[35])}const y=()=>t[27](e,u),S=()=>t[27](null,u);return{c(){e=k("li"),s=P(l),o=C(),i=k("small"),f=P(n),h=C(),this.h()},l(v){e=w(v,"LI",{class:!0});var m=E(e);s=A(m,l),o=V(m),i=w(m,"SMALL",{class:!0});var z=E(i);f=A(z,n),z.forEach(_),h=V(m),m.forEach(_),this.h()},h(){g(i,"class","svelte-10s1oab"),g(e,"class","svelte-10s1oab"),L(e,"highlight",t[7]==t[35])},m(v,m){N(v,e,m),p(e,s),p(e,o),p(e,i),p(i,f),p(e,h),y(),r||(c=[I(e,"click",d),I(e,"mouseover",b)],r=!0)},p(v,m){t=v,m[0]&258&&l!==(l=t[33][t[1]]+"")&&D(s,l),m[0]&260&&n!==(n=t[33][t[2]]+"")&&D(f,n),u!==t[35]&&(S(),u=t[35],y()),m[0]&128&&L(e,"highlight",t[7]==t[35])},d(v){v&&_(e),S(),r=!1,K(c)}}}function we(t){let e,l,s,o;function i(u,r){return u[5]&&!u[3]?pe:_e}let n=i(t),f=n(t),h=t[6]&&G(t);return{c(){e=k("div"),f.c(),l=C(),h&&h.c(),this.h()},l(u){e=w(u,"DIV",{id:!0,class:!0});var r=E(e);f.l(r),l=V(r),h&&h.l(r),r.forEach(_),this.h()},h(){g(e,"id","select"),g(e,"class","svelte-10s1oab"),L(e,"active",t[6])},m(u,r){N(u,e,r),f.m(e,null),p(e,l),h&&h.m(e,null),s||(o=[I(window,"click",t[17]),I(e,"keydown",t[15])],s=!0)},p(u,r){n===(n=i(u))&&f?f.p(u,r):(f.d(1),f=n(u),f&&(f.c(),f.m(e,l))),u[6]?h?h.p(u,r):(h=G(u),h.c(),h.m(e,null)):h&&(h.d(1),h=null),r[0]&64&&L(e,"active",u[6])},i:j,o:j,d(u){u&&_(e),f.d(),h&&h.d(),s=!1,K(o)}}}function ye(t){return new Promise(e=>setTimeout(e,t))}function Ee(t,e,l){let s;const o=be();let{options:i}=e,{selected:n=null}=e,{placeholder:f="Find an area"}=e,{value:h="code"}=e,{label:u="name"}=e,{group:r=null}=e,{search:c=!1}=e,d=n,b=n?i.find(a=>{a[h]==n[h]}):null,y=!1,S="",v=null,m,z,U,T=[];function X(a){a.stopPropagation(),l(4,S=""),l(6,y=!y),ye(10).then(()=>{U&&y&&U.focus()})}function M(a){l(18,n=a),l(6,y=!1),o("select",{selected:a,value:a[h]})}function Y(a){a.stopPropagation(),l(18,n=null),l(21,d=null),l(5,b=null),o("select",{selected:null,value:null})}function x(a){y&&m[0]&&Number.isInteger(v)&&(a.keyCode===38?(l(7,v-=v>0?1:0),T[v].scrollIntoView({block:"nearest",inline:"start"})):a.keyCode===40&&(l(7,v+=v<m.length-1?1:0),T[v].scrollIntoView({block:"nearest",inline:"end"})))}function $(a){m[0]&&Number.isInteger(v)&&a.keyCode===13&&M(m[v])}function ee(a){a.target!==z&&(l(6,y=!1),l(7,v=0))}function le(){S=this.value,l(4,S)}function te(a){R[a?"unshift":"push"](()=>{U=a,l(10,U)})}const se=a=>M(a),oe=a=>l(7,v=a);function ne(a,F){R[a?"unshift":"push"](()=>{T[F]=a,l(11,T)})}const ie=a=>M(a),ae=a=>l(7,v=a);function re(a,F){R[a?"unshift":"push"](()=>{T[F]=a,l(11,T)})}function ce(a){R[a?"unshift":"push"](()=>{z=a,l(9,z)})}return t.$$set=a=>{"options"in a&&l(19,i=a.options),"selected"in a&&l(18,n=a.selected),"placeholder"in a&&l(0,f=a.placeholder),"value"in a&&l(20,h=a.value),"label"in a&&l(1,u=a.label),"group"in a&&l(2,r=a.group),"search"in a&&l(3,c=a.search)},t.$$.update=()=>{t.$$.dirty[0]&16&&l(22,s=S?new RegExp(S,"i"):null),t.$$.dirty[0]&4718594&&(l(8,m=s?i.filter(a=>s.test(a[u])):i),l(7,v=0)),t.$$.dirty[0]&3932160&&d!=n&&(l(5,b=i.find(a=>a[h]==n[h])),l(21,d=n))},[f,u,r,c,S,b,y,v,m,z,U,T,X,M,Y,x,$,ee,n,i,h,d,s,le,te,se,oe,ne,ie,ae,re,ce]}class Ie extends ue{constructor(e){super(),fe(this,e,Ee,we,he,{options:19,selected:18,placeholder:0,value:20,label:1,group:2,search:3},null,[-1,-1])}}export{Ie as default};