(this.webpackJsonpimola=this.webpackJsonpimola||[]).push([[0],{78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a),t.d(a,"getQueries",(function(){return y}));var c=t(0),s=t.n(c),n=t(4),r=t.n(n),l=t(3),i=t(9),o=t(7),d=function(e){return e.entities.laptimes},j=t.p+"static/media/TrackdayImola.e7c740aa.png",b=t(1),u=function(e){var a=e.c,t=e.lap,c=e.pos;if(!t)return null;var s=new Date(parseInt(t.laptime));return Object(b.jsxs)("div",{className:a,children:[Object(b.jsx)("div",{className:"pos",children:c}),Object(b.jsx)("div",{className:"pic",style:{backgroundImage:"url(".concat(t.steamProfile.avatar.large,")")}}),Object(b.jsx)("div",{className:"name",children:t.steamProfile.nickname}),Object(b.jsx)("div",{className:"score vehicle",children:t.vehiclename}),Object(b.jsx)("div",{className:"score",children:"".concat(s.getMinutes(),":").concat(s.getSeconds(),".").concat(s.getMilliseconds())})]})},m=t(25),O=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"https://trollsimracing.no",target:"_blank",rel:"noreferrer",children:"TROLL SimRacing"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsxs)("a",{className:"nav-link",href:"/",children:["Home ",Object(b.jsx)("span",{className:"sr-only",children:"(current)"})]})})})})]})},h=t(23),p=function(){var e=Object(l.useSelector)(d),a=s.a.useState([]),t=Object(o.a)(a,2),c=t[0],n=t[1],r=s.a.useState("GTE"),p=Object(o.a)(r,2),x=p[0],v=p[1],g=s.a.useState(0),f=Object(o.a)(g,2),N=f[0],T=f[1],y=s.a.useState(!0),k=Object(o.a)(y,2),w=k[0],S=k[1],G=[{value:"GTE",label:"GTE"},{value:"GT1",label:"GT1"},{value:"GT3",label:"GT3"},{value:"GT4",label:"GT4"}];Object(i.useRequest)(function(e,a){return{force:!0,url:"https://api.trollsimracing.no:8080/class/".concat(e,"/").concat(a),transform:function(e){return{laptimes:e}},update:{laptimes:function(e,a){return a}}}}(x,N)),s.a.useEffect((function(){S(!0),n([])}),[x]),s.a.useEffect((function(){e&&(e.length?n(c.concat(e)):N>0?S(!1):n([]))}),[e]);return x&&c?Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"container-fluid text-center",children:Object(b.jsx)("img",{src:j,alt:"Trackday@Imola",className:"img-fluid"})})})})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-8 offset-lg-2 body mt-2",children:Object(b.jsxs)("div",{className:"blackbox",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{children:"TROLL SimRacing presents Trackday@Imola! [BETA]"}),Object(b.jsxs)("p",{children:["GT cars - real time (CET) and weather. Dont be a dick, show respect!",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://discord.com/invite/G5a5MJp5Zn",children:"Discord.gg/G5a5MJp5Zn"})," | Have a great trackday!!",Object(b.jsx)("br",{})]})]}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)(m.a,{options:G,className:"mb-5 pl-5 pr-5 mt-2",defaultValue:G[0],onChange:function(e){T(0),S(!0),v(e.value)}}),!!c.length&&Object(b.jsxs)("div",{className:"",children:[Object(b.jsxs)("div",{className:"top3",children:[Object(b.jsx)(u,{c:"two item",lap:c[1],pos:2}),Object(b.jsx)(u,{c:"one item",lap:c[0],pos:1}),Object(b.jsx)(u,{c:"three item",lap:c[2],pos:3})]}),Object(b.jsx)(h.a,{dataLength:c.length,next:function(){T(N+1)},hasMore:w,loader:Object(b.jsx)("p",{style:{textAlign:"center"},children:Object(b.jsx)("b",{children:"Loading more laptimes"})}),className:"list",style:{overflow:"unset"},endMessage:Object(b.jsx)("p",{style:{textAlign:"center"},children:Object(b.jsx)("b",{children:"Yay! You have seen it all"})}),children:function(e){for(var a=[],t=3;t<=e.length;t++)e[t]&&a.push(Object(b.jsx)(u,{c:"item",lap:e[t],pos:t},"laptime-".concat(e[t].steamId,"-").concat(x,"-").concat(t)));return a}(c)})]})]})})})]})})})})]}):Object(b.jsx)("p",{children:"Loading data"})},x=t(10),v=t(2),g=t(24),f=t.n(g),N=Object(x.b)({entities:v.entitiesReducer,queries:v.queriesReducer}),T=Object(x.c)(N,Object(x.a)(Object(v.queryMiddleware)(f.a,(function(e){return e.queries}),(function(e){return e.entities})))),y=(t(78),function(e){return e.queries});r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(l.Provider,{store:T,children:Object(b.jsx)(i.Provider,{queriesSelector:y,children:Object(b.jsx)(p,{})})})}),document.getElementById("root"));0!==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")&&document.body.classList.add("no-webp")}},[[79,1,2]]]);
//# sourceMappingURL=main.0c804625.chunk.js.map