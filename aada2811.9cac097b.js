(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),a=(r(0),r(156)),i={title:"GetStatusCdr"},c={unversionedId:"xsender/library/billConsultService/getStatusCrd",id:"xsender/library/billConsultService/getStatusCrd",isDocsHomePage:!1,title:"GetStatusCdr",description:"Use for:",source:"@site/docs/xsender/library/billConsultService/getStatusCrd.md",slug:"/xsender/library/billConsultService/getStatusCrd",permalink:"/docs/xsender/library/billConsultService/getStatusCrd",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billConsultService/getStatusCrd.md",version:"current",sidebar:"xsender",previous:{title:"GetStatus",permalink:"/docs/xsender/library/billConsultService/getStatus"},next:{title:"getStatus",permalink:"/docs/xsender/library/billValidService/getStatus"}},l=[{value:"Check status",id:"check-status",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Get the CDR from SUNAT.")),Object(a.b)("h2",{id:"check-status"},"Check status"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url(URL_CONSULTA)\n    .username(USERNAME)\n    .passwod(PASSWORD)\n    .build();\n\nBillConsultBean consult = new BillConsultBean.Builder()\n    .ruc("1234567894")\n    .tipo("01")\n    .serie("F001")\n    .numero(102)\n    .build();\n\nStatusResponse response = BillConsultServiceManager.getStatusCdr(config, consult);\n')))}s.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);