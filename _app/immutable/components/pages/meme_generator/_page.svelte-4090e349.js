import{S as Q,i as W,s as X,k as i,q as y,a as g,l,m as n,r as I,c as P,h as a,n as r,E as Y,b,F as e,B}from"../../../chunks/index-2ac51392.js";function Z(K){let s,A,m,F,d,O,p,T,D,M,u,f,c,C,w,_,h,N,S,v,x,R,E,U;return{c(){s=i("form"),A=y("Select a picture "),m=i("input"),F=g(),d=i("p"),O=y("meme text: "),p=i("input"),T=g(),D=i("p"),M=g(),u=i("div"),f=i("div"),c=i("img"),w=g(),_=i("div"),h=i("div"),N=y(" "),S=g(),v=i("footer"),x=i("p"),R=y("Made by "),E=i("a"),U=y("Amanda Ernar"),this.h()},l(t){s=l(t,"FORM",{});var o=n(s);A=I(o,"Select a picture "),m=l(o,"INPUT",{type:!0,id:!0,onchange:!0}),F=P(o),d=l(o,"P",{});var V=n(d);O=I(V,"meme text: "),p=l(V,"INPUT",{type:!0,id:!0,oninput:!0,maxlength:!0}),T=P(V),V.forEach(a),D=l(o,"P",{});var L=n(D);L.forEach(a),o.forEach(a),M=P(t),u=l(t,"DIV",{class:!0});var q=n(u);f=l(q,"DIV",{id:!0});var G=n(f);c=l(G,"IMG",{src:!0,width:!0,height:!0}),G.forEach(a),w=P(q),_=l(q,"DIV",{class:!0});var j=n(_);h=l(j,"DIV",{id:!0});var z=n(h);N=I(z," "),z.forEach(a),j.forEach(a),q.forEach(a),S=P(t),v=l(t,"FOOTER",{});var H=n(v);x=l(H,"P",{});var k=n(x);R=I(k,"Made by "),E=l(k,"A",{href:!0});var J=n(E);U=I(J,"Amanda Ernar"),J.forEach(a),k.forEach(a),H.forEach(a),this.h()},h(){r(m,"type","file"),r(m,"id","user_picture"),r(m,"onchange","update_image()"),r(p,"type","text"),r(p,"id","user_text"),r(p,"oninput","update_text()"),r(p,"maxlength","70"),Y(c.src,C="")||r(c,"src",C),r(c,"width","500px"),r(c,"height","500px"),r(f,"id","meme_picture"),r(h,"id","meme_text"),r(_,"class","align"),r(u,"class","container"),r(E,"href","https://amandaernar.github.io/blog")},m(t,o){b(t,s,o),e(s,A),e(s,m),e(s,F),e(s,d),e(d,O),e(d,p),e(d,T),e(s,D),b(t,M,o),b(t,u,o),e(u,f),e(f,c),e(u,w),e(u,_),e(_,h),e(h,N),b(t,S,o),b(t,v,o),e(v,x),e(x,R),e(x,E),e(E,U)},p:B,i:B,o:B,d(t){t&&a(s),t&&a(M),t&&a(u),t&&a(S),t&&a(v)}}}class ee extends Q{constructor(s){super(),W(this,s,null,Z,X,{})}}export{ee as default};