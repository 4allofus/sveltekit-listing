import{S as h,i as p,s as $,N as v,e as c,j as g,c as d,a as f,m as x,d as l,b as m,f as u,E as _,o as E,x as b,u as j,v as y,t as k,g as w,h as D}from"../chunks/vendor-f69fb079.js";/* empty css                          */function I(r){let t,s;return{c(){t=c("h1"),s=k(r[0])},l(e){t=d(e,"H1",{});var a=f(t);s=w(a,r[0]),a.forEach(l)},m(e,a){u(e,t,a),_(t,s)},p(e,a){a&1&&D(s,e[0])},d(e){e&&l(t)}}}function S(r){let t,s,e,a;return e=new v({props:{type:"danger",$$slots:{default:[I]},$$scope:{ctx:r}}}),{c(){t=c("div"),s=c("div"),g(e.$$.fragment),this.h()},l(n){t=d(n,"DIV",{class:!0});var o=f(t);s=d(o,"DIV",{class:!0});var i=f(s);x(e.$$.fragment,i),i.forEach(l),o.forEach(l),this.h()},h(){m(s,"class","sm-6 col"),m(t,"class","row flex-middle")},m(n,o){u(n,t,o),_(t,s),E(e,s,null),a=!0},p(n,[o]){const i={};o&3&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){a||(b(e.$$.fragment,n),a=!0)},o(n){j(e.$$.fragment,n),a=!1},d(n){n&&l(t),y(e)}}}function C({error:r,status:t}){return{props:{title:`${t}: ${r.message}`}}}function V(r,t,s){let{title:e}=t;return r.$$set=a=>{"title"in a&&s(0,e=a.title)},[e]}class H extends h{constructor(t){super();p(this,t,V,S,$,{title:0})}}export{H as default,C as load};