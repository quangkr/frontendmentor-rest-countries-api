(this["webpackJsonpfrontendmentor-rest-countries-api"]=this["webpackJsonpfrontendmentor-rest-countries-api"]||[]).push([[0],{36:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),l=n(23),s=n.n(l),i=(n(36),n(9)),o=n(2),u=n(19),j=n.n(u),b=n(14),d=n(11),x=n(24),m=n(7),f=n(0),h=Object(a.createContext)({countries:{},loading:!1,fetchData:function(){console.log("No data provider")}}),O=function(){return Object(a.useContext)(h)},g=function(e){var t=e.children,n=Object(a.useState)({}),c=Object(m.a)(n,2),r=c[0],l=c[1],s=Object(a.useState)(!1),i=Object(m.a)(s,2),o=i[0],u=i[1];function O(){return g.apply(this,arguments)}function g(){return(g=Object(x.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://restcountries.eu/rest/v2/all");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},t.alpha3Code,t))}),{}),l(c),localStorage.setItem("countries",JSON.stringify(c)),u(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){try{!function(){u(!0);var e=localStorage.getItem("countries");if(!e)throw new TypeError("countries should be of CountriesList type");l(JSON.parse(e)),u(!1)}()}catch(e){O()}}),[]),Object(f.jsx)(h.Provider,{value:{countries:r,loading:o,fetchData:O},children:t})};!function(e){e.Dark="Dark",e.Light="Light"}(c||(c={}));var p=Object(a.createContext)({theme:c.Dark,setTheme:function(e){return console.warn("no theme provider")}}),v=function(){return Object(a.useContext)(p)},w=function(e){var t=e.children,n=Object(a.useState)(c.Light),r=Object(m.a)(n,2),l=r[0],s=r[1];return Object(f.jsx)(p.Provider,{value:{theme:l,setTheme:s},children:t})},N=n(8),y=n(25),k=n.n(y),C=n(26),S=n.n(C);function L(){var e=v(),t=e.theme,n=e.setTheme;return Object(f.jsx)("header",{className:"w-full h-20 flex flex-col justify-center items-center bg-white dark:bg-blue-800 text-blue-950 dark:text-white shadow-md",children:Object(f.jsxs)("div",{className:"w-full px-8 flex justify-between items-end",children:[Object(f.jsx)("h1",{className:"font-extrabold text-lg",children:"Where in the world?"}),Object(f.jsxs)("button",{className:"flex items-center font-semibold bg-transparent border-none focus:outline-none select-none cursor-pointer",onClick:function(){t===c.Light?n(c.Dark):n(c.Light)},children:[Object(f.jsx)("span",{className:"mr-2",children:"Dark Mode"}),Object(f.jsxs)("span",{className:"text-3xl",children:[Object(f.jsx)(N.b,{icon:k.a,className:"block dark:hidden"}),Object(f.jsx)(N.b,{icon:S.a,className:"hidden dark:block"})]})]})]})})}function D(e){var t=e.children,n=v().theme;return Object(f.jsx)("div",{className:"".concat(n===c.Dark?"dark":""),children:Object(f.jsxs)("div",{className:"w-full min-h-screen bg-gray-50 dark:bg-blue-900 text-blue-950 dark:text-white",children:[Object(f.jsx)(L,{}),t]})})}var F=n(16),T=n(27),I=n.n(T);function M(e){var t=e.value,n=e.setValue;return Object(f.jsxs)("div",{className:"mx-6 my-8 md:w-1/2 relative",children:[Object(f.jsx)(N.a,{icon:I.a,className:"h-8 w-auto mx-4 my-auto bg-transparent text-gray-500 dark:text-white absolute top-1/2 left-0 transform -translate-y-1/2"}),Object(f.jsx)("input",{type:"search",name:"search",placeholder:"Search for a country...",className:"w-full p-4 pl-16 flex flex-row flex-nowrap bg-white dark:bg-blue-800 rounded overflow-hidden shadow-md focus:outline-none focus:ring ring-white ring-opacity-80",value:t,onChange:function(e){return n(e.target.value)}})]})}var P=n(31),B=n(28),J=n.n(B),V=n(29),E=n.n(V),R=function(e){var t=e.value,n=e.onClick,c=Object(P.a)(e,["value","onClick"]),a=t.trim().replace(/^\w/,(function(e){return e.toUpperCase()}));return Object(f.jsx)("li",Object(d.a)(Object(d.a)({className:"p-2 pl-6 cursor-pointer"},c),{},{onClick:n,children:a}))};function U(e){var t=e.options,n=e.value,c=e.setValue,r=Object(a.useState)(!1),l=Object(m.a)(r,2),s=l[0],i=l[1];return Object(f.jsxs)("div",{className:"mx-6 w-60 relative",children:[Object(f.jsxs)("div",{className:"w-full p-4 pl-8 flex flex-row justify-between items-center rounded overflow-hidden shadow-md bg-white dark:bg-blue-800 capitalize cursor-pointer",onClick:function(){return i(!s)},children:[Object(f.jsx)("span",{children:n}),Object(f.jsxs)("span",{className:"flex flex-row",children:[Object(f.jsx)(N.b,{icon:E.a,className:"".concat(""===n?"hidden":"inline","\n                      text-xl bg-transparent opacity-50"),onClick:function(){return c("")}}),Object(f.jsx)(N.b,{icon:J.a,className:"text-xl bg-transparent"})]})]}),Object(f.jsx)("ul",{className:"".concat(s?"flex":"hidden","\n                    flex-col rounded overflow-hidden shadow-md\n                    w-full p-2 mt-2\n                    bg-white dark:bg-blue-800\n                    absolute"),children:t.map((function(e){return Object(f.jsx)(R,{value:e,onClick:function(){c(e),i(!1)}},e)}))})]})}var z=function(e){var t=e.name;return Object(f.jsx)("h2",{className:"py-4 font-extrabold tracking-wide cursor-pointer text-lg",children:t})},W=function(e){var t=e.label,n=e.value;return Object(f.jsxs)("p",{className:"text-sm tracking-wide font-light leading-normal",children:[Object(f.jsxs)("strong",{className:"font-semibold",children:[t,": "]})," ",n]})};function q(e){var t=e.country,n=e.className,c=void 0===n?"":n,a=new Intl.NumberFormat("en-US").format(t.population);return Object(f.jsxs)("div",{className:"w-60 h-80\n      rounded overflow-hidden\n      bg-white dark:bg-blue-800\n      shadow-md\n      ".concat(c),children:[Object(f.jsx)(i.b,{to:"/detail/".concat(t.alpha3Code),children:Object(f.jsx)("img",{src:t.flag,alt:"".concat(t.name,"'s flag'"),className:"w-60 h-40 object-cover cursor-pointer"})}),Object(f.jsxs)("div",{className:"px-4",children:[Object(f.jsx)(i.b,{to:"/detail/".concat(t.alpha3Code),children:Object(f.jsx)(z,{name:t.name})}),Object(f.jsx)(W,{label:"Population",value:a}),Object(f.jsx)(W,{label:"Region",value:t.region}),Object(f.jsx)(W,{label:"Capital",value:t.capital})]})]})}function A(){var e=O().countries,t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),s=Object(m.a)(l,2),i=s[0],o=s[1],u=Object(a.useMemo)((function(){return Object.values(e)}),[e]),j=Object(a.useMemo)((function(){return u.reduce((function(e,t){return e.includes(t.region)?e:[].concat(Object(F.a)(e),[t.region]).sort()}),[])}),[u]),b=Object(a.useMemo)((function(){return i?u.filter((function(e){return e.region===i})):u}),[u,i]),d=Object(a.useMemo)((function(){return c?b.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})):b}),[b,c]);return Object(f.jsxs)("div",{className:"w-full h-full flex flex-col justify-center relative",children:[Object(f.jsxs)("div",{className:"w-full flex flex-col justify-center md:flex-row md:justify-between md:items-center md:px-6 lg:px-12",children:[Object(f.jsx)(M,{value:c,setValue:r}),Object(f.jsx)(U,{options:j,value:i,setValue:o})]}),Object(f.jsx)("div",{className:"grid grid-cols-fill-60 gap-8 mx-8 my-12 md:gap-16 md:mx-12 lg:gap-20 lg:mx-16 justify-center",children:d.map((function(e){return Object(f.jsx)(q,{country:e},e.alpha3Code)}))})]})}function G(e){var t=e.children,n=e.className,c=void 0===n?"":n;return Object(f.jsx)("button",{className:"px-8 py-1\n                  inline-flex flex-row\n                  justify-center items-center\n                  bg-white dark:bg-blue-800\n                  rounded-sm shadow-bold border-2 border-transparent\n                  transition-transform transform\n                  hover:cursor-pointer\n                  active:scale-95 active:shadow\n                  focus:outline-none focus:border-current\n                  ".concat(c),children:t})}var H=function(e){var t=e.label,n=e.value;return Object(f.jsxs)("div",{className:"my-1 flex flex-row",children:[Object(f.jsxs)("span",{className:"font-semibold flex-shrink-0",children:[t,":\xa0"]}),Object(f.jsx)("span",{className:"font-light",children:n})]})};function K(e){return e.reduce((function(e,t){return t?e?e+", "+t:t:e}),"")}function Q(){var e=O().countries,t=Object(o.f)().id,n=e[t],c=n?n.borders.reduce((function(t,n){return[].concat(Object(F.a)(t),[e[n]])}),[]):[],a=n?new Intl.NumberFormat("en-US").format(n.population):"";return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:" max-w-xl lg:max-w-screen-2xl mx-auto px-8 py-12",children:[Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)(G,{children:"Back"})}),n?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:" flex flex-col lg:flex-row items-center lg:justify-between my-16 lg:my-20",children:[Object(f.jsx)("div",{className:"lg:w-1/2",children:Object(f.jsx)("img",{src:n.flag,alt:"".concat(n.name,"'s flag'")})}),Object(f.jsxs)("div",{className:" flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2 lg:ml-24",children:[Object(f.jsx)("h1",{className:" lg:w-full my-10 lg:my-6 font-extrabold text-2xl lg:text-4xl",children:n.name}),Object(f.jsxs)("div",{className:"flex flex-col lg:w-5/12",children:[Object(f.jsx)(H,{label:"Native Name",value:n.nativeName}),Object(f.jsx)(H,{label:"Population",value:a}),Object(f.jsx)(H,{label:"Region",value:n.region}),Object(f.jsx)(H,{label:"Sub Region",value:n.subregion}),Object(f.jsx)(H,{label:"Capital",value:n.capital})]}),Object(f.jsxs)("div",{className:"flex flex-col lg:w-5/12 mt-6 lg:mt-0 lg:ml-6",children:[Object(f.jsx)(H,{label:"Top Level Domain",value:K(n.topLevelDomain)}),Object(f.jsx)(H,{label:"Currencies",value:K(n.currencies.map((function(e){return e.name})))}),Object(f.jsx)(H,{label:"Languages",value:K(n.languages.map((function(e){return e.name})))})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:"mt-8 mb-4 font-semibold text-lg",children:"Border countries:\xa0"}),Object(f.jsx)("span",{className:"flex flex-wrap -mx-2",children:c.map((function(e){return Object(f.jsx)(i.b,{to:"/detail/".concat(e.alpha3Code),className:"m-2",children:Object(f.jsx)(G,{className:"lg:text-sm lg:px-4",children:e.name})},e.alpha3Code)}))})]})]})]})}):Object(f.jsx)(f.Fragment,{})]})})}var X=function(){return Object(f.jsx)(i.a,{children:Object(f.jsx)(g,{children:Object(f.jsx)(w,{children:Object(f.jsx)(D,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/detail/:id",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(o.a,{path:"/",children:Object(f.jsx)(A,{})})]})})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};n(44),n(45),n(46);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root")),Y()}},[[47,1,2]]]);
//# sourceMappingURL=main.2df65280.chunk.js.map