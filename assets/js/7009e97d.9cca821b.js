"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[7945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Valida y consulta",description:"Valida los datos de comprobantes"},l=void 0,i={unversionedId:"xsender/validate-and-check",id:"xsender/validate-and-check",title:"Valida y consulta",description:"Valida los datos de comprobantes",source:"@site/docs/05-xsender/04-validate-and-check.md",sourceDirName:"05-xsender",slug:"/xsender/validate-and-check",permalink:"/docs/xsender/validate-and-check",draft:!1,editUrl:"https://github.com/project-openubl/website/tree/master/docs/05-xsender/04-validate-and-check.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Valida y consulta",description:"Valida los datos de comprobantes"},sidebar:"tutorialSidebar",previous:{title:"Enviar XML",permalink:"/docs/xsender/send-xml"},next:{title:"Introducci\xf3n",permalink:"/docs/searchpe"}},s={},c=[{value:"Consulta comprobante (BillConsultService)",id:"consulta-comprobante-billconsultservice",level:2},{value:"Consulta estado de comprobante",id:"consulta-estado-de-comprobante",level:3},{value:"Consulta CDR de comprobante",id:"consulta-cdr-de-comprobante",level:3},{value:"Valida comprobante (BillValidService)",id:"valida-comprobante-billvalidservice",level:2},{value:"Valida datos de comprobante",id:"valida-datos-de-comprobante",level:3},{value:"Valida XML",id:"valida-xml",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"consulta-comprobante-billconsultservice"},"Consulta comprobante (BillConsultService)"),(0,o.kt)("h3",{id:"consulta-estado-de-comprobante"},"Consulta estado de comprobante"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BillConsultServiceDestination destination = BillConsultServiceDestination.builder()\n    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")\n    .operation(BillConsultServiceDestination.Operation.GET_STATUS)\n    .build();\n\nCamelData camelData = CamelUtils.getBillConsultService(\n    "20494918910", // RUC\n    "01", // C\xf3digo de tipo de comprobante\n    "F001", // Serie del comprobante\n    102, // N\xfamero del comprobante\n    destination,\n    credentials\n);\n\nservice.sunat.gob.pe.billconsultservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_CONSULT_SERVICE_URI,\n        camelData.getBody(),\n        camelData.getHeaders(),\n        service.sunat.gob.pe.billconsultservice.StatusResponse.class\n    );\n')),(0,o.kt)("h3",{id:"consulta-cdr-de-comprobante"},"Consulta CDR de comprobante"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BillConsultServiceDestination destination = BillConsultServiceDestination.builder()\n    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")\n    .operation(BillConsultServiceDestination.Operation.GET_STATUS_CDR)\n    .build();\n\nCamelData camelData = CamelUtils.getBillConsultService(\n    "20494918910", // RUC\n    "01", // C\xf3digo de tipo de comprobante\n    "F001", // Serie del comprobante\n    102, // N\xfamero del comprobante\n    destination,\n    credentials\n);\n\nservice.sunat.gob.pe.billconsultservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_CONSULT_SERVICE_URI,\n        camelData.getBody(),\n        camelData.getHeaders(),\n        service.sunat.gob.pe.billconsultservice.StatusResponse.class\n    );\n')),(0,o.kt)("h2",{id:"valida-comprobante-billvalidservice"},"Valida comprobante (BillValidService)"),(0,o.kt)("h3",{id:"valida-datos-de-comprobante"},"Valida datos de comprobante"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BillValidServiceDestination destination = BillValidServiceDestination.builder()\n    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")\n    .build();\n\nCamelData camelData = getBillValidService(\n    "20494918910", // RUC\n    "01", // C\xf3digo de tipo de comprobante\n    "F001", // Serie de comprobante\n    "102", // Numero de comprobante\n    "06", // Tipo de documento de receptor (cliente)\n    "12345678", // N\xfamero de documento del receptor (cliente)\n    "01-12-2022", // Fecha de emisi\xf3n del comprobante\n    120.5, // Importe total del comprobante\n    "", // Campo debe de ir siempre vacio\n    destination,\n    credentials\n);\n\nservice.sunat.gob.pe.billvalidservice.StatusResponse sunatResponse = camelContext.createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_VALID_SERVICE_URI,\n        camelData.getBody(),\n        camelData.getHeaders(),\n        service.sunat.gob.pe.billvalidservice.StatusResponse.class\n    );\n')),(0,o.kt)("h3",{id:"valida-xml"},"Valida XML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String fileName = "12345678912-01-F001-1.xml";\nbyte[] fileContent = // Lea su archivo XML en bytes[];\n\nBillValidServiceDestination destination = BillValidServiceDestination.builder()\n    .url("https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService")\n    .build();\n\nCamelData camelData = getBillValidService(\n        fileName,\n        fileContent,\n        destination,\n        credentials\n);\n\nservice.sunat.gob.pe.billvalidservice.StatusResponse sunatResponse = camelContext\n    .createProducerTemplate()\n    .requestBodyAndHeaders(\n        Constants.XSENDER_BILL_VALID_SERVICE_URI,\n        camelData.getBody(),\n        camelData.getHeaders(),\n        service.sunat.gob.pe.billvalidservice.StatusResponse.class\n    );\n')))}u.isMDXComponent=!0}}]);