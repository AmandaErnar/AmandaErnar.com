import{S as k,i as A,s as B,k as y,q as b,a as g,l as E,m as R,r as m,h as r,c as S,n as C,p as F,b as i,F as _,u as H,B as T,J}from"../../chunks/index-2ac51392.js";import{s as Q}from"../../chunks/singletons-080714ff.js";const j=()=>{const a=Q;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},z={subscribe(a){return j().page.subscribe(a)}};function D(a){let s,o=a[0].status+"",l,p,c=a[0].error.message+"",h,v,n,$,d,f,q,u,I;return{c(){s=y("h1"),l=b(o),p=b(": "),h=b(c),v=g(),n=y("a"),$=b("Return to home"),d=g(),f=y("hr"),q=g(),u=y("q"),I=b("There's only one place I want to go and it's to all the places I've never been."),this.h()},l(e){s=E(e,"H1",{});var t=R(s);l=m(t,o),p=m(t,": "),h=m(t,c),t.forEach(r),v=S(e),n=E(e,"A",{href:!0});var w=R(n);$=m(w,"Return to home"),w.forEach(r),d=S(e),f=E(e,"HR",{style:!0}),q=S(e),u=E(e,"Q",{});var x=R(u);I=m(x,"There's only one place I want to go and it's to all the places I've never been."),x.forEach(r),this.h()},h(){C(n,"href","/"),F(f,"border","none")},m(e,t){i(e,s,t),_(s,l),_(s,p),_(s,h),i(e,v,t),i(e,n,t),_(n,$),i(e,d,t),i(e,f,t),i(e,q,t),i(e,u,t),_(u,I)},p(e,[t]){t&1&&o!==(o=e[0].status+"")&&H(l,o),t&1&&c!==(c=e[0].error.message+"")&&H(h,c)},i:T,o:T,d(e){e&&r(s),e&&r(v),e&&r(n),e&&r(d),e&&r(f),e&&r(q),e&&r(u)}}}function G(a,s,o){let l;return J(a,z,p=>o(0,l=p)),[l]}let M=class extends k{constructor(s){super(),A(this,s,G,D,B,{})}};export{M as default};