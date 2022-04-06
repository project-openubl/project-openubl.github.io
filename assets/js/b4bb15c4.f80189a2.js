"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[3965],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Tutorial"},s=void 0,u={unversionedId:"xsender/tutorial",id:"xsender/tutorial",title:"Tutorial",description:"Hay dos formas por las que puedes enviar tus archivos XML:",source:"@site/docs/05-xsender/03-tutorial.md",sourceDirName:"05-xsender",slug:"/xsender/tutorial",permalink:"/docs/xsender/tutorial",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-xsender/03-tutorial.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Tutorial"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/xsender/installation"},next:{title:"C\xf3digos de error Sunat",permalink:"/docs/xsender/codigosErrorSunat"}},c={},d=[{value:"Caso 1",id:"caso-1",level:2},{value:"Caso 2",id:"caso-2",level:2},{value:"Enviar File",id:"enviar-file",level:3},{value:"Enviar bytes[]",id:"enviar-bytes",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hay dos formas por las que puedes enviar tus archivos XML:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Caso 1"),": configura todas las URLs una vez y deja a XSender el resto. Si usas este m\xe9todo, ",(0,i.kt)("strong",{parentName:"li"},"XSender se encarga de definir la URL y el nombre del archivo XML")," que ser\xe1 enviado a la SUNAT."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Caso 2"),": configura las URLs cada vez que env\xedas archivos. Si usas este m\xe9todo, ",(0,i.kt)("strong",{parentName:"li"},"tu debes de definir la URL y el nombre del archivo XML")," que ser\xe1 enviado a la SUNAT.")),(0,i.kt)("h2",{id:"caso-1"},"Caso 1"),(0,i.kt)("p",null,"Este es el m\xe9todo recomendado para enviar archivos XML a la SUNAT. Solamente define tu archivo XML y XSender definir\xe1 el resto."),(0,i.kt)("p",null,"Recomendado para env\xedo de:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Invoices (boleta/factura)."),(0,i.kt)("li",{parentName:"ul"},"Credit notes (notas de cr\xe9dito)."),(0,i.kt)("li",{parentName:"ul"},"Debit notes (notas de d\xe9bito)."),(0,i.kt)("li",{parentName:"ul"},"Despatch documents (guias de remisi\xf3n)."),(0,i.kt)("li",{parentName:"ul"},"Perceptions (percepciones)."),(0,i.kt)("li",{parentName:"ul"},"Retentions (retenciones)."),(0,i.kt)("li",{parentName:"ul"},"Voided documents (bajas)."),(0,i.kt)("li",{parentName:"ul"},"Summary documents (resumen diario).")),(0,i.kt)("p",null,"Necesitas configurar ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartBillServiceConfig"),". Esto es algo que debes de hacer solamente una vez durante todo el ciclo de vida de tu software."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'SmartBillServiceConfig.getInstance()\n    .withInvoiceAndNoteDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .withPerceptionAndRetentionDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService")\n    .withDespatchAdviceDeliveryURL("https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService");\n')),(0,i.kt)("p",null,"Una vez que ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartBillServiceConfig")," est\xe1 configurado puedes empezar a enviar tus archivos XML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"byte[] xml;\nString username;\nString password;\n\n// Send file\nSmartBillServiceModel result = SmartBillServiceManager.send(xml, username, password);\n\n// Read result values\nXmlContentModel xmlData = result.getXmlContentModel();\nBillServiceModel serverResponse = result.getBillServiceModel();\n")),(0,i.kt)("h2",{id:"caso-2"},"Caso 2"),(0,i.kt)("p",null,"Este es el m\xe9todo recomendado si tu software tiene URL din\xe1micas o diferentes URLs para m\xfaltiples empresas."),(0,i.kt)("h3",{id:"enviar-file"},"Enviar File"),(0,i.kt)("p",null,"Define la URL a la que quieres enviar tu archivo y ejecuta el env\xedo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-01-F001-00000001.xml");\nBillServiceModel result = BillServiceManager.sendBill(file, config);\n')),(0,i.kt)("h3",{id:"enviar-bytes"},"Enviar bytes[]"),(0,i.kt)("p",null,"Define la URL a la que quieres enviar tu archivo y ejecuta el env\xedo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file; // define your file here;\nString fileName = "12345678959-01-F001-00000001.xml";\nBillServiceModel result = BillServiceManager.sendBill(fileName, file, config);\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Recuerda que el nombre de tu archivo debe de seguir el patr\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml")))))}m.isMDXComponent=!0}}]);