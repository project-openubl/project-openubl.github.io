(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{122:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),b=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=b(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(r),p=t,m=s["".concat(o,".").concat(p)]||s[p]||d[p]||a;return r?i.a.createElement(m,l(l({ref:n},u),{},{components:r})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return b}));var t=r(2),i=r(7),a=(r(0),r(122)),o={title:"SendSummary"},l={unversionedId:"xsender/library/billService/sendSummary",id:"xsender/library/billService/sendSummary",isDocsHomePage:!1,title:"SendSummary",description:"Use for sending:",source:"@site/docs/xsender/library/billService/sendSummary.md",slug:"/xsender/library/billService/sendSummary",permalink:"/docs/xsender/library/billService/sendSummary",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billService/sendSummary.md",version:"current",sidebar:"xsender",previous:{title:"SendBill",permalink:"/docs/xsender/library/billService/sendBill"},next:{title:"GetStatus",permalink:"/docs/xsender/library/billService/getStatus"}},c=[{value:"Send File",id:"send-file",children:[]},{value:"Send byte[]",id:"send-byte",children:[]}],u={rightToc:c};function b(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use for sending:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Voided documents (Baja)."),Object(a.b)("li",{parentName:"ul"},"Summary documents (Resumen diario).")),Object(a.b)("h2",{id:"send-file"},"Send File"),Object(a.b)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-RA-20180316-00001.xml");\nBillServiceModel result = BillServiceManager.sendSummary(file, config);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(a.b)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))),Object(a.b)("h2",{id:"send-byte"},"Send byte[]"),Object(a.b)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file // Define tu array de bytes ac\xe1;\nString fileName = "12345678959-RA-20180316-00001.xml";\nBillServiceModel result = BillServiceManager.sendSummary(fileName, file, config);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(a.b)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))))}b.isMDXComponent=!0}}]);