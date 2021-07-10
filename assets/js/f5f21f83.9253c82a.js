(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[5666],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91311:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(22122),i=t(19756),l=(t(67294),t(3905)),a=["components"],o={title:"SendBill"},c=void 0,s={unversionedId:"xsender/billService/sendBill",id:"xsender/billService/sendBill",isDocsHomePage:!1,title:"SendBill",description:"Usado para enviar:",source:"@site/docs/05-xsender/06-billService/sendBill.md",sourceDirName:"05-xsender/06-billService",slug:"/xsender/billService/sendBill",permalink:"/docs/xsender/billService/sendBill",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/06-billService/sendBill.md",version:"current",frontMatter:{title:"SendBill"},sidebar:"tutorialSidebar",previous:{title:"GetStatus",permalink:"/docs/xsender/billService/getStatus"},next:{title:"SendSummary",permalink:"/docs/xsender/billService/sendSummary"}},u=[{value:"Enviar File",id:"enviar-file",children:[]},{value:"Enviar byte[]",id:"enviar-byte",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Usado para enviar:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Invoices (boleta/factura)."),(0,l.kt)("li",{parentName:"ul"},"Credit notes (notas de cr\xe9dito)."),(0,l.kt)("li",{parentName:"ul"},"Debit notes (notas de d\xe9bito)."),(0,l.kt)("li",{parentName:"ul"},"Despatch documents (guias de remisi\xf3n)."),(0,l.kt)("li",{parentName:"ul"},"Perceptions (percepciones)."),(0,l.kt)("li",{parentName:"ul"},"Retentions (retenciones).")),(0,l.kt)("h2",{id:"enviar-file"},"Enviar File"),(0,l.kt)("p",null,"Define tu URL y env\xeda el archivo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-01-F001-00000001.xml");\nBillServiceModel result = BillServiceManager.sendBill(file, config);\n')),(0,l.kt)("h2",{id:"enviar-byte"},"Enviar byte[]"),(0,l.kt)("p",null,"Define tu URL y env\xeda el archivo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file; // define your file here;\nString fileName = "12345678959-01-F001-00000001.xml";\nBillServiceModel result = BillServiceManager.sendBill(fileName, file, config);\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Recuerda que el nombre de tu archivo debe de seguir el patr\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml")))))}d.isMDXComponent=!0}}]);