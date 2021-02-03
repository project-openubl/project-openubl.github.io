(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(8),c=(r(0),r(156)),a={title:"GetStatus"},o={unversionedId:"xsender/library/billService/getStatus",id:"xsender/library/billService/getStatus",isDocsHomePage:!1,title:"GetStatus",description:"Use for check Tickets:",source:"@site/docs/xsender/library/billService/getStatus.md",slug:"/xsender/library/billService/getStatus",permalink:"/docs/xsender/library/billService/getStatus",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billService/getStatus.md",version:"current",sidebar:"xsender",previous:{title:"SendSummary",permalink:"/docs/xsender/library/billService/sendSummary"},next:{title:"GetStatus",permalink:"/docs/xsender/library/billConsultService/getStatus"}},l=[{value:"Check <em>ticket</em>",id:"check-ticket",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use for check ",Object(c.b)("em",{parentName:"p"},"Tickets"),":"),Object(c.b)("h2",{id:"check-ticket"},"Check ",Object(c.b)("em",{parentName:"h2"},"ticket")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nBillServiceModel result = BillServiceManager.getStatus("miTicket", config);\n')))}s.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||c;return r?i.a.createElement(f,o(o({ref:t},u),{},{components:r})):i.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<c;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);