"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[9059],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9607:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",keywords:["crear xml","ubl","ubl 2.1","factura sunat","facturaci\xf3n electr\xf3nica"],image:"img/xbuilder.svg",slug:"/xbuilder"},s=void 0,l={unversionedId:"xbuilder/introduction",id:"xbuilder/introduction",title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",source:"@site/docs/04-xbuilder/01-introduction.md",sourceDirName:"04-xbuilder",slug:"/xbuilder",permalink:"/docs/xbuilder",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-xbuilder/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",description:"Crea XMLs (comprobantes electr\xf3nicos) basados en UBL seg\xfan lo requerido por la SUNAT",keywords:["crear xml","ubl","ubl 2.1","factura sunat","facturaci\xf3n electr\xf3nica"],image:"img/xbuilder.svg",slug:"/xbuilder"},sidebar:"tutorialSidebar",previous:{title:"Contribuir",permalink:"/docs/contributing"},next:{title:"Instalaci\xf3n",permalink:"/docs/xbuilder/installation"}},u={},p=[{value:"Principios de dise\xf1o",id:"principios-de-dise\xf1o",level:2},{value:"Documentos soportados",id:"documentos-soportados",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XBuilder es una libreria Java que puede crear y firmar XMLs basados en UBL (Universal Bussiness Language) de acuerdo a los est\xe1ndares establecidos por la SUNAT."),(0,i.kt)("h2",{id:"principios-de-dise\xf1o"},"Principios de dise\xf1o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No requieres conocimientos del estandar UBL")," -\nXBuilder expone un conjunto de POJOs que, internamente, son transformados en archivos XMLs siguiendo los est\xe1ndares y especificaciones de UBL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"C\xe1lculos matem\xe1ticos son hechos autom\xe1ticamente")," -\nXBuilder ejecuta todas las operaciones requeridas para generar determinados valores dentro de los archivos XML, por ejemplo: impuestos, totales, descuentos, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Aplicar valores por defecto siempre que se posible")," - XBuilder rellena informaci\xf3n no espeficicada por el usuario usando valores por defecto. XBuilder requiere siempre informaci\xf3n m\xednima.")),(0,i.kt)("h2",{id:"documentos-soportados"},"Documentos soportados"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Boleta (InvoiceType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Factura (InvoiceType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de cr\xe9dito (CreditNoteType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nota de d\xe9bito (DebitNoteType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Baja (VoidedDocumentType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Resumen diario (SummaryDocumentType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Percepci\xf3n (PerceptionType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Retenci\xf3n (RetentionType)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Gu\xeda de remisi\xf3n (DespatchDocumentType)")))}m.isMDXComponent=!0}}]);