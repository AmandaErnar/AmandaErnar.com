import{S as C,i as I,s as K,k as p,q as E,a as W,l as v,m as g,r as b,h as c,c as y,p as k,b as d,E as m,B as L,K as P,n as S,u as x}from"../../../chunks/index-f96b5f61.js";function A(f,l,h){const s=f.slice();return s[1]=l[h],s}function B(f){let l,h,s,n=f[1].meta.title+"",u,o,_,a=f[1].meta.date+"",e,r;return{c(){l=p("li"),h=p("h2"),s=p("a"),u=E(n),_=E(`
      Written `),e=E(a),r=W(),this.h()},l(t){l=v(t,"LI",{});var i=g(l);h=v(i,"H2",{});var H=g(h);s=v(H,"A",{href:!0,style:!0});var q=g(s);u=b(q,n),q.forEach(c),H.forEach(c),_=b(i,`
      Written `),e=b(i,a),r=y(i),i.forEach(c),this.h()},h(){S(s,"href",o=f[1].path),k(s,"background","none"),k(s,"padding","0")},m(t,i){d(t,l,i),m(l,h),m(h,s),m(s,u),m(l,_),m(l,e),m(l,r)},p(t,i){i&1&&n!==(n=t[1].meta.title+"")&&x(u,n),i&1&&o!==(o=t[1].path)&&S(s,"href",o),i&1&&a!==(a=t[1].meta.date+"")&&x(e,a)},d(t){t&&c(l)}}}function R(f){let l,h,s,n,u,o,_=f[0].posts,a=[];for(let e=0;e<_.length;e+=1)a[e]=B(A(f,_,e));return{c(){l=p("h1"),h=E("Writing"),s=W(),n=p("hr"),u=W(),o=p("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=v(e,"H1",{});var r=g(l);h=b(r,"Writing"),r.forEach(c),s=y(e),n=v(e,"HR",{style:!0}),u=y(e),o=v(e,"UL",{});var t=g(o);for(let i=0;i<a.length;i+=1)a[i].l(t);t.forEach(c),this.h()},h(){k(n,"border","none"),k(n,"height","2rem")},m(e,r){d(e,l,r),m(l,h),d(e,s,r),d(e,n,r),d(e,u,r),d(e,o,r);for(let t=0;t<a.length;t+=1)a[t].m(o,null)},p(e,[r]){if(r&1){_=e[0].posts;let t;for(t=0;t<_.length;t+=1){const i=A(e,_,t);a[t]?a[t].p(i,r):(a[t]=B(i),a[t].c(),a[t].m(o,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=_.length}},i:L,o:L,d(e){e&&c(l),e&&c(s),e&&c(n),e&&c(u),e&&c(o),P(a,e)}}}function U(f,l,h){let{data:s}=l;return f.$$set=n=>{"data"in n&&h(0,s=n.data)},[s]}class w extends C{constructor(l){super(),I(this,l,U,R,K,{data:0})}}export{w as default};