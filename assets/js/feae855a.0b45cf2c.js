(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(4),i=n(11),a=(n(0),n(188)),o={title:"Smart send"},l={unversionedId:"xsender/library/smartSend",id:"xsender/library/smartSend",isDocsHomePage:!1,title:"Smart send",description:"This is the recommended way of sending XML files to SUNAT. You just define the file and then XSender defines to which URL and additional information.",source:"@site/docs/xsender/library/smartSend.md",sourceDirName:"xsender/library",slug:"/xsender/library/smartSend",permalink:"/docs/xsender/library/smartSend",editUrl:"https://github.com/project-openubl/website/edit/master/docs/xsender/library/smartSend.md",version:"current",frontMatter:{title:"Smart send"},sidebar:"xsender",previous:{title:"Getting started",permalink:"/docs/xsender/library/gettingStarted"},next:{title:"SendBill",permalink:"/docs/xsender/library/billService/sendBill"}},c=[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Send files",id:"send-files",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the recommended way of sending XML files to SUNAT. You just define the file and then ",Object(a.b)("inlineCode",{parentName:"p"},"XSender")," defines to which URL and additional information."),Object(a.b)("p",null,"Use for sending:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Invoices (boleta/factura)."),Object(a.b)("li",{parentName:"ul"},"Credit notes (notas de cr\xe9dito)."),Object(a.b)("li",{parentName:"ul"},"Debit notes (notas de d\xe9bito)."),Object(a.b)("li",{parentName:"ul"},"Despatch documents (guias de remisi\xf3n)."),Object(a.b)("li",{parentName:"ul"},"Perceptions (percepciones)."),Object(a.b)("li",{parentName:"ul"},"Retentions (retenciones)."),Object(a.b)("li",{parentName:"ul"},"Voided documents (bajas)."),Object(a.b)("li",{parentName:"ul"},"Summary documents (resumen diario).")),Object(a.b)("h2",{id:"global-configuration"},"Global configuration"),Object(a.b)("p",null,"You need to configure ",Object(a.b)("inlineCode",{parentName:"p"},"SmartBillServiceConfig"),". You need to do this only once during the whole lifecycle of you software."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'SmartBillServiceConfig.getInstance()\n    .withInvoiceAndNoteDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .withPerceptionAndRetentionDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")\n    .withDespatchAdviceDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService");\n')),Object(a.b)("h2",{id:"send-files"},"Send files"),Object(a.b)("p",null,"Once ",Object(a.b)("inlineCode",{parentName:"p"},"SmartBillServiceConfig")," is configured you can star sending your files:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"byte[] xml;\nString username;\nString password;\n\n// Send file\nSmartBillServiceModel result = SmartBillServiceManager.send(xml, username, password);\n\n// Read result values\nXmlContentModel xmlData = result.getXmlContentModel();\nBillServiceModel serverResponse = result.getBillServiceModel();\n")))}d.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||a;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);