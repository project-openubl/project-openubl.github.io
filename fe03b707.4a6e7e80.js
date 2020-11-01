(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{115:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),i=t(7),l=(t(0),t(122)),o={title:"SendBill"},a={unversionedId:"xsender/library/billService/sendBill",id:"xsender/library/billService/sendBill",isDocsHomePage:!1,title:"SendBill",description:"Use for sending:",source:"@site/docs/xsender/library/billService/sendBill.md",slug:"/xsender/library/billService/sendBill",permalink:"/docs/xsender/library/billService/sendBill",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/billService/sendBill.md",version:"current",sidebar:"xsender",previous:{title:"Smart send",permalink:"/docs/xsender/library/smartSend"},next:{title:"SendSummary",permalink:"/docs/xsender/library/billService/sendSummary"}},c=[{value:"Send File",id:"send-file",children:[]},{value:"Send byte[]",id:"send-byte",children:[]}],u={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Use for sending:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Invoices (boleta/factura)."),Object(l.b)("li",{parentName:"ul"},"Credit notes (notas de cr\xe9dito)."),Object(l.b)("li",{parentName:"ul"},"Debit notes (notas de d\xe9bito)."),Object(l.b)("li",{parentName:"ul"},"Despatch documents (guias de remisi\xf3n)."),Object(l.b)("li",{parentName:"ul"},"Perceptions (percepciones)."),Object(l.b)("li",{parentName:"ul"},"Retentions (retenciones).")),Object(l.b)("h2",{id:"send-file"},"Send File"),Object(l.b)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-01-F001-00000001.xml");\nBillServiceModel result = BillServiceManager.sendBill(file, config);\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(l.b)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))),Object(l.b)("h2",{id:"send-byte"},"Send byte[]"),Object(l.b)("p",null,"Define your URL you want yo send your file to, and then send your file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file; // define your file here;\nString fileName = "12345678959-01-F001-00000001.xml";\nBillServiceModel result = BillServiceManager.sendBill(fileName, file, config);\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remember that your filename must follow the pattern expected by the SOAP endpoint. E.g. for SUNAT it is expected to have the pattern ",Object(l.b)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml"))))}b.isMDXComponent=!0},122:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),b=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(t),p=r,f=s["".concat(o,".").concat(p)]||s[p]||d[p]||l;return t?i.a.createElement(f,a(a({ref:n},u),{},{components:t})):i.a.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);