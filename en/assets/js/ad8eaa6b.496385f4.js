(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6213],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?t.createElement(f,a(a({ref:n},s),{},{components:r})):t.createElement(f,a({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},99437:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var t=r(22122),i=r(19756),l=(r(67294),r(3905)),a={title:"SendSummary"},o={unversionedId:"xsender/billService/sendSummary",id:"xsender/billService/sendSummary",isDocsHomePage:!1,title:"SendSummary",description:"Usado para enviar:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-xsender/06-billService/sendSummary.md",sourceDirName:"05-xsender/06-billService",slug:"/xsender/billService/sendSummary",permalink:"/en/docs/xsender/billService/sendSummary",editUrl:"https://github.com/project-openubl/website/edit/master/docs/05-xsender/06-billService/sendSummary.md",version:"current",frontMatter:{title:"SendSummary"},sidebar:"tutorialSidebar",previous:{title:"SendBill",permalink:"/en/docs/xsender/billService/sendBill"},next:{title:"GetStatus",permalink:"/en/docs/xsender/billConsultService/getStatus"}},u=[{value:"Send File",id:"send-file",children:[]},{value:"Send byte[]",id:"send-byte",children:[]}],c={toc:u};function s(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Usado para enviar:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Voided documents (Baja)."),(0,l.kt)("li",{parentName:"ul"},"Summary documents (Resumen diario).")),(0,l.kt)("h2",{id:"send-file"},"Send File"),(0,l.kt)("p",null,"Define tu URL y env\xeda el archivo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nFile file = new File("12345678959-RA-20180316-00001.xml");\nBillServiceModel result = BillServiceManager.sendSummary(file, config);\n')),(0,l.kt)("h2",{id:"send-byte"},"Send byte[]"),(0,l.kt)("p",null,"Define tu URL y env\xeda el archivo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServiceConfig config = new ServiceConfig.Builder()\n    .url("https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService")\n    .username("12345678959MODDATOS")\n    .password("MODDATOS")\n    .build();\n\nbyte[] file // Define tu array de bytes ac\xe1;\nString fileName = "12345678959-RA-20180316-00001.xml";\nBillServiceModel result = BillServiceManager.sendSummary(fileName, file, config);\n')),(0,l.kt)("p",null,":::tip Recuerda que el nombre de tu archivo debe de seguir el patr\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"ruc-codigoComprobante-serie-numero.xml")," :::"))}s.isMDXComponent=!0}}]);