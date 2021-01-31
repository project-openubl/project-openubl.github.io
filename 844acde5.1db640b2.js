(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(155)),o={title:"SendSummary"},l={unversionedId:"xsender/library/billService/sendSummary",id:"xsender/library/billService/sendSummary",isDocsHomePage:!1,title:"SendSummary",description:"Use for sending:",source:"@site/docs/xsender/library/billService/sendSummary.md",slug:"/xsender/library/billService/sendSummary",permalink:"/docs/xsender/library/billService/sendSummary",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billService/sendSummary.md",version:"current",sidebar:"xsender",previous:{title:"SendBill",permalink:"/docs/xsender/library/billService/sendBill"},next:{title:"GetStatus",permalink:"/docs/xsender/library/billService/getStatus"}},c=[{value:"Send File",id:"send-file",children:[]},{value:"Send byte[]",id:"send-byte",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Use for sending:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Voided documents (Baja)."),Object(i.a)("li",{parentName:"ul"},"Summary documents (Resumen diario).")),Object(i.a)("h2",{id:"send-file"},"Send File"),Object(i.a)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-RA-20180316-00001.xml");\nBillServiceModel result = BillServiceManager.sendSummary(file, config);\n')),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(i.a)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))),Object(i.a)("h2",{id:"send-byte"},"Send byte[]"),Object(i.a)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file // Define tu array de bytes ac\xe1;\nString fileName = "12345678959-RA-20180316-00001.xml";\nBillServiceModel result = BillServiceManager.sendSummary(fileName, file, config);\n')),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(i.a)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))))}s.isMDXComponent=!0},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);