(this.webpackJsonpfrazierjoe=this.webpackJsonpfrazierjoe||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/consumerSpending.08885459.png"},34:function(e,t,n){e.exports=n.p+"static/media/washuLogo.6366a22a.png"},37:function(e){e.exports=JSON.parse('[{"school":"Washington University in St. Louis","degree":"B.S. in Computer Science","gpa":"3.67","start":"August 2019","graduation":"May 2021","courses":["Object-Oriented Software Development Laboratory","Rapid Prototype Development and Creative Programming","Mobile Application Development","Programming Tools and Techniques","Web Development","Data Structures and Algorithms","Probability and Statistics for Engineers","Calculus of Several Variables (IV)","Matrix Algebra","Logic and Discrete Mathematics","Engineering Mechanics I"]},{"school":"Nebraska Weslyan University","degree":"B.S. in Physics, minor in Mathematics","gpa":"3.89","start":"August 2017","graduation":"May 2021","courses":["Independent Study","Thermal and Statistical Physics","Electromagnetism and Optics","Advanced Lab","Introduction to Modern Physics","Electronic Measurement","Differential Equations","Calculus III","Mathematical Problem Solving","Introduction to Computer Science","Proram Design"]}]')},41:function(e,t,n){e.exports=n(57)},46:function(e,t,n){},47:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(13),o=n.n(i),c=(n(46),n(47),n(24)),l=n(6),s=n(30),m=function e(){Object(s.a)(this,e)};m.root="/",m.dashboard="/dashboard",m.tasks="/tasks",m.proxies="/proxies",m.profiles="/profiles",m.settings="/settings";var u=n(31),d=n(16),h=function(e){var t=e.blog;return a.createElement(d.a,{border:"primary",className:"text-dark mb-5"},a.createElement(d.a.Img,{variant:"top",className:"w-50 m-auto",src:t.image}),a.createElement(d.a.Body,null,a.createElement(d.a.Title,null,t.title),a.createElement(d.a.Text,{className:"text-dark"},t.content)),a.createElement(d.a.Footer,null,a.createElement("small",{className:"text-muted"},"Last updated ",t.published)))},f=function(e){var t=e.blogs;return a.createElement(a.Fragment,null,a.createElement("h2",{className:"text-center pb-4"},"Recent Posts"),a.createElement(u.a,{className:"px-5 my-2 justify-content-center"},t.map((function(e){return a.createElement(h,{blog:e})}))))},g=n(25),p=function(e){var t=e.children;return a.createElement(g.a,{fluid:!0,className:"d-flex flex-column py-5"},a.createElement(g.a,{className:"bg-dark d-flex flex-column py-5"},t))},b=n(14),E=n(32),w=n(39),v=n(22),y=n(21),x=n(20),k=n(19),N=n(40),S=function(e){var t=e.show,n=e.toggleShow;return a.createElement(w.a,{size:"sm",show:t,onHide:function(){return n()},centered:!0},a.createElement(v.a,{closeButton:!0},a.createElement(x.a,{className:"text-primary"},"Email me at")),a.createElement(k.a,{className:"text-center"},a.createElement("a",{href:"mailto:frazierj@wustl.edu"},"frazierj@wustl.edu")),a.createElement(y.a,{className:"d-flex justify-content-center"},a.createElement(N.a,{variant:"dark",onClick:function(){return n()}},"Close")))},j=n(15),O=function(e){var t=e.setShowModal;return a.createElement("h1",{className:"d-flex text-light justify-content-around"},a.createElement("a",{href:"https://github.com/frazierjoe",className:"px-3 transform-half-l",target:"_blank"},a.createElement(j.b,null)),a.createElement("a",{href:"https://linkedin.com/in/joe-frazier-b1564a13b",className:"px-3 transform-half-u",target:"_blank"},a.createElement(j.d,null)),a.createElement("a",{className:"px-3 transform-half-r",onClick:function(){return t(!0)}},a.createElement(j.e,null)))},I=(n(51),function(){var e,t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(""),c=Object(b.a)(o,2),l=c[0],s=c[1],m=Object(a.useState)(""),u=Object(b.a)(m,2),d=u[0],h=u[1],f=Object(a.useState)(0),g=Object(b.a)(f,2),p=(g[0],g[1],Object(a.useState)(!1)),w=Object(b.a)(p,2),v=w[0],y=w[1],x=Object(a.useRef)(null),k=Object(a.useRef)(null),N=function(){x&&x.current&&x.current.getBoundingClientRect()&&y(window.scrollY>=e+6)};return Object(a.useEffect)((function(){return e=k.current.getBoundingClientRect().top+k.current.getBoundingClientRect().height,window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]),a.createElement("div",{className:"text-center align-center justify-content-center"},a.createElement(E.a,{fluid:!0,className:"bg-dark text-primary mb-0 pb-0"},a.createElement("h1",{ref:k,className:"headerTitle ".concat(d),onAnimationEnd:function(){s("Joe Frazier"),h("text-primary")}},l),v&&a.createElement("h1",{className:"text-dark"},"margin correction"),a.createElement("div",{ref:x,className:"".concat(v?"sticky":"non-sticky")},a.createElement(O,{setShowModal:i}))),a.createElement(S,{show:r,toggleShow:function(){return i(!r)}}))}),C=n(33),M=n.n(C),P=n(34),T=n.n(P),D=(n(52),n(35)),z=n(36),A=(n(53),function(e){var t,n=e.item,r=Object(a.useState)(""),i=Object(b.a)(r,2),o=i[0],c=i[1],l="p-3 h5 d-flex grad-item vertical-align-middle";return a.createElement("div",{className:"px-3"},a.createElement("h3",{className:"px-3"},n.school),a.createElement("div",{className:"px-3"},a.createElement("div",{className:l},a.createElement(D.a,{className:"vertical-align-middle"})," ",a.createElement("h5",{className:"vertical-align-middle"},n.degree)),a.createElement("div",{className:l},a.createElement(j.c,null)," Graduation ",n.start," "),a.createElement("div",{className:l},a.createElement(j.a,null)," GPA ",n.gpa),a.createElement("div",{onClick:function(){c("show"===o?"hide":"show")},className:"text-blue cursor-pointer grad-item"},a.createElement(z.a,null)," Courses"),a.createElement("ul",{className:"accordion ".concat(o)},null===(t=n.courses)||void 0===t?void 0:t.map((function(e){return a.createElement("li",{key:e},e)})))))}),B=n(37),L=[{title:"Health vs Wealth",author:"Joe Frazier",blurb:"",content:"This week in The Pandemic: Science and Society, we covered some interesting information about the trade-offs between health and wealth. In other terms, we learned about the different approaches countries have taken to minimize infection while maintaining an economy. One of main take aways that I found particularly interesting was that, with or without an economic lockdown, people curtail economic activity for fear of infection. For example, in Denmark where there was a lockdown, consumer spending decreased by 29%. During this same period, consumer spending in lockdown-free Sweden fell a similar amount of 25%. There have been multiple times since the beginning of the pandemic that I heard someone say something about how lockdowns aren't worth the amount of harm they cause to the economy. However, we just saw that there will be a similar amount of harm done to the economy regardless of there being a lockdown in place. While general essential/nonessential lockdowns aren't the answer to eradicating the virus, lockdowns are important and play an important part in minimizing the long-term effect on the economy.",image:M.a,posted:1599274174,lastUpdate:1599274174,published:"Sept 4, 2020"},{title:"COVID-19 Consequences for Higher Education",author:"Joe Frazier",blurb:"",content:'This week in The Pandemic: Sciecne and Society, we were tasked with reading an article called "COVID-19: consequences for higher education". In which, the author writes about many of the ways Higher Education is losing income. These include: a decrease in auxiliary revenues (i.e. housing, summer camp and bookstore revenue), increased expenses due to more online teaching, the defering of students entering colleges, and a decrease in international enrolments. In addition to these, many students view their education as not just attending classes and getting grades, but also the experience of being in a new location where they can meet and interact with other like-minded students. Without these extra incentives many students will view their education as being worth less and will not be willing to pay extra to name of the university on their diploma. This will result in universities making cuts to research, PhD funding and many of their short-term contracts. Many prestigous universities have the funding to be able to make it through the pandemic until a vaccine is created but others will not be as fortunate. This could significantly change the education sector for years to come.',image:T.a,posted:1599527595420,lastUpdate:1599527595420,published:"Sept 7, 2020"}],R=function(){return a.createElement("div",{className:"text-light m-auto bg-light"},a.createElement(I,null),a.createElement(p,null,B.map((function(e){return a.createElement(A,{key:e.school,item:e})}))),a.createElement(p,null,a.createElement(f,{blogs:L})))},F=function(){return a.createElement(l.c,null,a.createElement(l.a,{exact:!0,path:m.root,component:function(){return a.createElement(R,null)}}))},J=function(){return a.createElement(c.a,null,a.createElement(F,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.77e38990.chunk.js.map