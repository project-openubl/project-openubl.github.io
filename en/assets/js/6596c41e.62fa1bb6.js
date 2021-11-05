"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9299],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),o=["components"],a={title:"Tutorial"},s=void 0,u={unversionedId:"xsender/tutorial",id:"xsender/tutorial",isDocsHomePage:!1,title:"Tutorial",description:"There are two ways you can send your XML files:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-xsender/03-tutorial.md",sourceDirName:"05-xsender",slug:"/xsender/tutorial",permalink:"/en/docs/xsender/tutorial",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/03-tutorial.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/en/docs/xsender/installation"},next:{title:"Sunat error codes",permalink:"/en/docs/xsender/codigosErrorSunat"}},c=[{value:"Case 1",id:"case-1",children:[],level:2},{value:"Case 2",id:"case-2",children:[{value:"Send File",id:"send-file",children:[],level:3},{value:"Send bytes []",id:"send-bytes-",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are two ways you can send your XML files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Case 1"),": configures all URLs once and leaves XSender the rest. If you use this method, ",(0,l.kt)("strong",{parentName:"li"},"XSender is responsible for defining the URL and the name of the XML file")," to be sent to the SUNAT."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Case 2"),": Configure URLs each time you send files. If you use this method, ",(0,l.kt)("strong",{parentName:"li"},"you must define the URL and the name of the XML file")," which will be sent to the SUNAT.")),(0,l.kt)("h2",{id:"case-1"},"Case 1"),(0,l.kt)("p",null,"This is the recommended method for sending XML files to the SUNAT. Only define your XML file and XSender will define the rest."),(0,l.kt)("p",null,"Recommended for shipping:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Invoices (bolet/invoice)."),(0,l.kt)("li",{parentName:"ul"},"Credit notes (credit notes)."),(0,l.kt)("li",{parentName:"ul"},"Debit notes (debit notes)."),(0,l.kt)("li",{parentName:"ul"},"Despatch documents (referral guides)."),(0,l.kt)("li",{parentName:"ul"},"Perceptions (perceptions)."),(0,l.kt)("li",{parentName:"ul"},"Retentions (holds)."),(0,l.kt)("li",{parentName:"ul"},"Voided documents (casualties)."),(0,l.kt)("li",{parentName:"ul"},"Summary documents (daily summary).")),(0,l.kt)("p",null,"You need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"SmartBillServiceConfig"),". This is something you should only do once during the entire life cycle of your software."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'SmartBillServiceConfig.getInstance()\n    .withInvoiceAndNoteDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .withPerceptionAndRetentionDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")\n    .withDespatchAdviceDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService");\n')),(0,l.kt)("p",null,"Once ",(0,l.kt)("inlineCode",{parentName:"p"},"SmartBillServiceConfig")," is configured you can start sending your XML files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"byte[] xml;\nString username;\nString password;\n\n// Send file\nSmartBillServiceModel result = SmartBillServiceManager.send(xml, username, password);\n\n// Read result values\nXmlContentModel xmlData = result.getXmlContentModel();\nBillServiceModel serverResponse = result.getBillServiceModel();\n")),(0,l.kt)("h2",{id:"case-2"},"Case 2"),(0,l.kt)("p",null,"This is the recommended method if your software has dynamic URLs or different URLs for multiple companies."),(0,l.kt)("h3",{id:"send-file"},"Send File"),(0,l.kt)("p",null,"Define the URL you want to send your file to and run the shipment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-01-F001-00000001.xml");\nBillServiceModel result = BillServiceManager.sendBill(file, config);\n')),(0,l.kt)("h3",{id:"send-bytes-"},"Send bytes []"),(0,l.kt)("p",null,"Define the URL you want to send your file to and run the shipment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file; // define your file here;\nString fileName = "12345678959-01-F001-00000001.xml";\nBillServiceModel result = BillServiceManager.sendBill(fileName, file, config);\n')),(0,l.kt)("p",null,":::tip Remember that the name of your file must follow the pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"ruc-codesComprobante-serie-number.xml")," :::"))}p.isMDXComponent=!0}}]);