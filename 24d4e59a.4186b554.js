(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),i=(r(0),r(143)),o={title:"getStatus"},c={unversionedId:"xsender/library/billValidService/getStatus",id:"xsender/library/billValidService/getStatus",isDocsHomePage:!1,title:"getStatus",description:"Use for:",source:"@site/docs/xsender/library/billValidService/getStatus.md",slug:"/xsender/library/billValidService/getStatus",permalink:"/docs/xsender/library/billValidService/getStatus",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billValidService/getStatus.md",version:"current",sidebar:"xsender",previous:{title:"GetStatusCdr",permalink:"/docs/xsender/library/billConsultService/getStatusCrd"},next:{title:"Installation",permalink:"/docs/xsender/server/installation"}},l=[{value:"Check status",id:"check-status",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the authenticity of a file.")),Object(i.b)("h2",{id:"check-status"},"Check status"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'File file = new File("../folder/F001-00005954.xml");\n\nServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-factura.sunat.gob.pe/ol-it-wsconsvalidcpe/billValidService")\n    .username(USERNAME)\n    .passwod(PASSWORD)\n    .build();\n\nStatusResponse status = BillValidServiceManager.getStatus(file, config);\n')))}u.isMDXComponent=!0}}]);