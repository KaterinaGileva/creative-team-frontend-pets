"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[605],{8605:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(9439),a=n(2791),s={newsList:"News_newsList__FZFHv",newsitem:"News_newsitem__70jBk",titleList:"News_titleList__HYq5H",dateAndLink:"News_dateAndLink__hqdLI",dataNews:"News_dataNews__ReZjr",newsLink:"News_newsLink__FjoxT",notNewsFound:"News_notNewsFound__W-qPR",notNewsFoundText:"News_notNewsFoundText__wyh8O"},c=n(184),u=function(e){var t=e.url,n=e.title,r=e.description,a=e.date;return(0,c.jsxs)("li",{className:s.newsItem,children:[(0,c.jsx)("h3",{className:s.titleList,children:n}),(0,c.jsx)("p",{className:s.dataNews,children:r}),(0,c.jsxs)("div",{className:s.dateAndLink,children:[(0,c.jsx)("p",{className:s.dateNews,children:a}),(0,c.jsx)("a",{href:t,className:s.newsLink,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]})},o=n(4724),i=n(8593),l=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],l=t[1],p=(0,a.useState)([]),d=(0,r.Z)(p,2),f=d[0],h=d[1];(0,a.useEffect)((function(){l(!0),(0,o.aL)().then(h).catch((function(e){return console.error(e.message)})).finally((function(){return l(!1)}))}),[]);var w=function(){return f.filter((function(e){return e.title.toLocaleLowerCase()}))};return(0,c.jsx)(c.Fragment,{children:n?(0,c.jsx)("div",{className:s.notNewsFound,children:(0,c.jsx)(i.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}):(0,c.jsx)("ul",{className:s.newsList,children:0===w().length?(0,c.jsx)("div",{className:s.notNewsFound,children:(0,c.jsx)("h3",{className:s.notNewsFoundText,children:"Sorry, your search did not match any results."})}):w().map((function(e){var t=e._id,n=e.url,r=e.title,a=e.description,s=e.date;return(0,c.jsx)(u,{url:n,title:r,description:a,date:s},t)}))})})};var p=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(l,{})})}},4724:function(e,t,n){n.d(t,{Bn:function(){return u},J$:function(){return l},WW:function(){return p},aJ:function(){return h},aL:function(){return i},dz:function(){return o},f7:function(){return f},ok:function(){return d},up:function(){return w}});var r=n(5861),a=n(4687),s=n.n(a),c=n(1243);c.Z.defaults.baseURL="https://backend.petly.club";var u=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/servicesSidebar").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/category?category=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/news").then((function(e){return e.data})).catch((function(e){return console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/userAndPets",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.post("/uploadAvatar",t);case 3:return n=e.sent,console.log("response",n),console.log("response.data",n.data),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=localStorage.getItem("persist:users");if(null!==e){var t=JSON.parse(e).token;!function(e){c.Z.defaults.headers.common.Authorization="Bearer ".concat(e)}(t.slice(1,t.length-1))}else c.Z.defaults.headers.common.Authorization=""},f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.patch("/users/edit",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/selected/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/notices/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=605.d6a53374.chunk.js.map